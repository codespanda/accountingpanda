import { useEffect, useRef, useState, type ChangeEvent } from "react"
import {
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  Eye,
  ImagePlus,
  KeyRound,
  Loader2,
  LogOut,
  PenLine,
  RefreshCw,
  Send,
  ShieldCheck,
  Trash2,
  TriangleAlert,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPostView } from "@/components/BlogPostView"
import { RichTextEditor } from "@/components/RichTextEditor"
import { Seo } from "@/components/Seo"
import { cn } from "@/lib/utils"
import { asset } from "@/lib/asset"
import { resizeImage } from "@/lib/imageResize"
import { blogData, countWords, formatPostDate, readTimeFor, slugify, type BlogData } from "@/lib/blogContent"
import { categories, staticPostSlugs } from "@/pages/blogPostList"

// Hidden page for publishing blog posts. It is not linked anywhere and is
// marked noindex. Only the codespanda GitHub account may publish: the page
// refuses any other account, and GitHub itself only lets accounts with write
// access (currently just codespanda) push to the repo. The token is kept
// only in this browser's localStorage.
//
// Posts published here can also be edited and deleted. The original
// hand-coded posts live in src/pages/posts and aren't managed here.
//
// Posts can also be scheduled: they're committed to src/content/blog-scheduled/
// with a publishAt time, and the "Publish scheduled blog posts" GitHub workflow
// moves them into src/content/blog/ and redeploys once that time has passed.

const OWNER = "codespanda"
/** The only GitHub account allowed to publish from the studio. */
const ALLOWED_LOGIN = "codespanda"
const REPO = "accountingpanda"
const BRANCH = "main"
const SITE = "https://accountingpanda.com"
const TOKEN_KEY = "ap-blog-studio:token"
const DRAFT_KEY = "ap-blog-studio:draft"
const POST_CATEGORIES = categories.filter((c) => c !== "All")

type Draft = {
  title: string
  slug: string
  slugEdited: boolean
  category: string
  date: string
  excerpt: string
  imageAlt: string
  featured: boolean
  body: string
  image: string | null // new cover as a JPEG data URL; null keeps the current one when editing
  /** Publish later instead of now. */
  schedule: boolean
  /** When to publish, as a datetime-local value in this browser's time zone ("2026-11-25T09:00"). */
  publishAt: string
  /** Set when editing a published or scheduled post: its original slug, cover and body. */
  editing: { slug: string; title: string; image: string; body: string; scheduled: boolean } | null
}

/** A post from the repo, as listed in the studio. */
type StudioPost = BlogData & { scheduled: boolean }

type Connection =
  | { status: "none" }
  | { status: "checking" }
  | { status: "ok"; login: string }
  | { status: "error"; message: string }

type PublishState =
  | { status: "idle" }
  | { status: "working"; step: string }
  | {
      status: "done"
      kind: "published" | "updated" | "scheduled" | "deleted"
      slug: string
      title: string
      commitUrl: string
      /** ISO time a scheduled post goes live. */
      publishAt?: string
    }
  | { status: "error"; message: string }

const pad = (n: number) => String(n).padStart(2, "0")

function today() {
  const d = new Date()
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/** A Date as a datetime-local input value in this browser's time zone. */
function toLocalInput(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

/** Tomorrow at 9:00 in this browser's time zone — the default publish time. */
function defaultPublishAt() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  d.setHours(9, 0, 0, 0)
  return toLocalInput(d)
}

/** "25 Nov 2026, 9:00 am IST" in this browser's locale and time zone. */
function formatDateTime(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  try {
    // dateStyle/timeStyle can't be combined with timeZoneName, so spell out the parts.
    return d.toLocaleString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })
  } catch {
    return d.toString()
  }
}

const TIME_ZONE = (() => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return "your local time"
  }
})()

/** Scheduled posts must be at least this far ahead. */
const MIN_SCHEDULE_LEAD_MS = 5 * 60 * 1000

/** Shorter excerpts make weak search-result descriptions. */
const MIN_EXCERPT_LENGTH = 70

/** Lowercase, punctuation-free text for comparing an excerpt with the title. */
function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
}

const emptyDraft = (): Draft => ({
  title: "",
  slug: "",
  slugEdited: false,
  category: POST_CATEGORIES[0],
  date: today(),
  excerpt: "",
  imageAlt: "",
  featured: false,
  body: "",
  image: null,
  schedule: false,
  publishAt: defaultPublishAt(),
  editing: null,
})

type PublishedList =
  | { status: "idle" | "loading" }
  | { status: "ok"; posts: StudioPost[] }
  | { status: "error"; message: string }

const CONTENT_DIR = "src/content/blog"
const SCHEDULED_DIR = "src/content/blog-scheduled"

/** Decodes GitHub's base64 file content as UTF-8 text. */
function decodeBase64Utf8(b64: string) {
  const bytes = Uint8Array.from(atob(b64.replace(/\s/g, "")), (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

/** Site image paths (assets/blog-<slug>…) referenced in a post body. */
function bodyAssets(body: string, slug: string) {
  const prefix = `assets/blog-${slug}-`
  return [...new Set(body.match(/assets\/blog-[a-z0-9-]+\.(?:jpg|jpeg|png|webp|gif)/g) ?? [])].filter((p) =>
    p.startsWith(prefix)
  )
}

function load<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function save(key: string, value: unknown) {
  try {
    if (value === null) window.localStorage.removeItem(key)
    else window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage full or blocked — the draft just won't be kept.
  }
}

async function github<T>(token: string, path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
    },
  })
  if (!res.ok) {
    let detail = ""
    try {
      detail = ((await res.json()) as { message?: string }).message ?? ""
    } catch {
      // No JSON body.
    }
    throw new Error(`GitHub ${res.status}${detail ? `: ${detail}` : ""}`)
  }
  return (res.status === 204 ? undefined : await res.json()) as T
}

type Change = { path: string; base64?: string; text?: string; remove?: true }

async function fileExists(token: string, path: string) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
  })
  return res.ok
}

/** Applies all changes to the branch as a single commit. */
async function commitChanges(
  token: string,
  message: string,
  changes: Change[],
  onStep: (step: string) => void
) {
  const repo = `/repos/${OWNER}/${REPO}`
  const ref = await github<{ object: { sha: string } }>(token, `${repo}/git/ref/heads/${BRANCH}`)
  const parent = await github<{ tree: { sha: string } }>(token, `${repo}/git/commits/${ref.object.sha}`)
  const uploads = changes.filter((c) => !c.remove)
  const tree: { path: string; mode: string; type: string; sha: string | null }[] = []
  for (const [i, c] of uploads.entries()) {
    onStep(`Uploading ${i + 1} of ${uploads.length}…`)
    const blob = await github<{ sha: string }>(token, `${repo}/git/blobs`, {
      method: "POST",
      body: JSON.stringify(
        c.base64 !== undefined ? { content: c.base64, encoding: "base64" } : { content: c.text, encoding: "utf-8" }
      ),
    })
    tree.push({ path: c.path, mode: "100644", type: "blob", sha: blob.sha })
  }
  for (const c of changes.filter((ch) => ch.remove)) {
    tree.push({ path: c.path, mode: "100644", type: "blob", sha: null })
  }
  onStep("Publishing…")
  const newTree = await github<{ sha: string }>(token, `${repo}/git/trees`, {
    method: "POST",
    body: JSON.stringify({ base_tree: parent.tree.sha, tree }),
  })
  const commit = await github<{ sha: string; html_url: string }>(token, `${repo}/git/commits`, {
    method: "POST",
    body: JSON.stringify({ message, tree: newTree.sha, parents: [ref.object.sha] }),
  })
  await github(token, `${repo}/git/refs/heads/${BRANCH}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: commit.sha }),
  })
  return commit.html_url
}

/** Confirm → progress → result popup for publishing or updating a post. */
function PublishDialog({
  open,
  onClose,
  onConfirm,
  publish,
  post,
  coverSrc,
  isEdit,
  wasScheduled,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  publish: PublishState
  post: BlogData
  coverSrc?: string
  isEdit: boolean
  /** Editing a post that's currently scheduled (not yet live). */
  wasScheduled: boolean
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const working = publish.status === "working"
  const scheduling = !!post.publishAt
  // Editing a scheduled post and publishing it now behaves like a new publish.
  const goingLiveEarly = isEdit && wasScheduled && !scheduling
  const updatingLive = isEdit && !wasScheduled

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = "hidden"
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  // Never leave the page unscrollable if the studio unmounts with the popup open.
  useEffect(() => () => void (document.documentElement.style.overflow = ""), [])

  // Restore scrolling here as well as in onClose, rather than relying only
  // on the dialog's close event.
  const close = () => {
    if (working) return
    ref.current?.close()
    document.documentElement.style.overflow = ""
    onClose()
  }

  const bodyImages = (post.body.match(/!\[[^\]]*\]\([^)]+\)/g) ?? []).length
  const newImages = (post.body.match(/data:image\//g) ?? []).length
  const url = `${SITE}/blog/${post.slug}/`
  const finished = publish.status === "done" && publish.kind !== "deleted"

  const details: [string, string][] = [
    ...(scheduling ? ([["Goes live", formatDateTime(post.publishAt!)]] as [string, string][]) : []),
    ["URL", url],
    ["Category", post.category],
    ["Date", formatPostDate(post.date)],
    ["Read time", post.readTime],
    ["Images in body", bodyImages ? `${bodyImages}${newImages ? ` (${newImages} new)` : ""}` : "None"],
    ["Featured", post.featured ? "Yes — shown at the top of the Blog page" : "No"],
  ]

  return (
    <dialog
      ref={ref}
      onClose={() => {
        document.documentElement.style.overflow = ""
        onClose()
      }}
      // Escape can't close the popup while publishing is in progress.
      onCancel={(e) => {
        if (working) e.preventDefault()
      }}
      onClick={(e) => {
        if (e.target === ref.current) close()
      }}
      aria-labelledby="publish-title"
      className="fixed inset-0 m-auto h-fit max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[560px] overflow-y-auto rounded-[28px] border-0 bg-white p-0 text-bento-ink shadow-[0_32px_80px_-24px_rgba(17,24,39,0.45)] backdrop:bg-bento-ink/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-7 sm:p-9">
        {!working && (
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bento-canvas transition-colors hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {working ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center" role="status" aria-live="polite">
            <Loader2 className="h-10 w-10 animate-spin text-brand-green" />
            <h2 id="publish-title" className="text-2xl font-bold">
              {scheduling ? "Scheduling your post…" : updatingLive ? "Updating your post…" : "Publishing your post…"}
            </h2>
            <p className="text-sm text-gray-500">{publish.step}</p>
            <p className="text-xs text-gray-400">Please keep this page open until it finishes.</p>
          </div>
        ) : finished ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center" role="status">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bento-mint">
              <CheckCircle2 className="h-8 w-8 text-bento-forest" />
            </span>
            <h2 id="publish-title" className="text-[28px] font-bold leading-tight">
              {publish.kind === "scheduled"
                ? "Post scheduled!"
                : publish.kind === "updated"
                  ? "Post updated!"
                  : "Post published!"}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              {publish.kind === "scheduled" && publish.publishAt ? (
                <>
                  “{publish.title}” will go live automatically on {formatDateTime(publish.publishAt)} — usually within
                  15–30 minutes of that time. Until then it stays hidden from the site.
                </>
              ) : (
                <>The site is rebuilding now. “{publish.title}” will be live in about 2–3 minutes.</>
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {publish.kind !== "scheduled" && (
                <Button asChild>
                  <a href={`${SITE}/blog/${publish.slug}/`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View post
                  </a>
                </Button>
              )}
              <Button variant="outline" onClick={close}>
                Done
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              Follow the build on{" "}
              <a
                href={`https://github.com/${OWNER}/${REPO}/actions`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                GitHub Actions
              </a>{" "}
              or view the{" "}
              <a href={publish.commitUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                commit
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            <h2 id="publish-title" className="pr-10 text-2xl font-bold leading-tight">
              {scheduling
                ? isEdit
                  ? "Update this scheduled post?"
                  : "Schedule this post?"
                : goingLiveEarly
                  ? "Publish this post now?"
                  : updatingLive
                    ? "Update this post?"
                    : "Publish this post?"}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {scheduling
                ? `It stays hidden until ${formatDateTime(post.publishAt!)}, then goes live on the Blog page automatically.`
                : goingLiveEarly
                  ? "It will appear on the Blog page now instead of waiting for its scheduled time."
                  : updatingLive
                    ? "Your changes will replace the live version of this post."
                    : "It will appear on the Blog page for everyone."}
            </p>

            <div className="mt-5 overflow-hidden rounded-[22px] border border-gray-200">
              {coverSrc && <img src={coverSrc} alt="" className="aspect-[16/9] w-full object-cover" />}
              <div className="p-4">
                <p className="text-base font-bold leading-snug text-brand-heading">{post.title}</p>
                {post.excerpt && <p className="mt-1 line-clamp-2 text-sm text-gray-500">{post.excerpt}</p>}
              </div>
            </div>

            <dl className="mt-4 divide-y divide-gray-100 rounded-xl bg-brand-bg px-4 text-sm">
              {details.map(([label, value]) => (
                <div key={label} className="flex gap-3 py-2">
                  <dt className="w-28 shrink-0 text-gray-500">{label}</dt>
                  <dd className="min-w-0 break-words font-medium text-brand-heading">{value}</dd>
                </div>
              ))}
            </dl>

            {publish.status === "error" && (
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm text-red-800">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                {scheduling ? "Scheduling" : updatingLive ? "Updating" : "Publishing"} failed — {publish.message}
              </p>
            )}

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button onClick={onConfirm}>
                {scheduling ? <CalendarClock className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                {publish.status === "error"
                  ? "Try again"
                  : scheduling
                    ? isEdit
                      ? "Update schedule"
                      : "Schedule post"
                    : updatingLive
                      ? "Update now"
                      : "Publish now"}
              </Button>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}

const field =
  "w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-brand-heading outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
const label = "text-sm font-semibold text-brand-heading"

export function BlogStudio() {
  const [token, setToken] = useState(() => load<string>(TOKEN_KEY, ""))
  const [tokenInput, setTokenInput] = useState("")
  const [connection, setConnection] = useState<Connection>({ status: "none" })
  const [draft, setDraft] = useState<Draft>(() => ({ ...emptyDraft(), ...load<Partial<Draft>>(DRAFT_KEY, {}) }))
  const [tab, setTab] = useState<"write" | "preview">("write")
  const [imageError, setImageError] = useState("")
  const [publish, setPublish] = useState<PublishState>({ status: "idle" })
  const [published, setPublished] = useState<PublishedList>({ status: "idle" })
  const [confirmOpen, setConfirmOpen] = useState(false)
  const editing = draft.editing

  useEffect(() => save(DRAFT_KEY, draft), [draft])

  const loadPublished = async (t: string) => {
    setPublished({ status: "loading" })
    const readDir = async (dir: string, scheduled: boolean): Promise<StudioPost[]> => {
      let files: { name: string; path: string; type: string }[]
      try {
        files = await github(t, `/repos/${OWNER}/${REPO}/contents/${dir}?ref=${BRANCH}`)
      } catch (err) {
        // A folder that doesn't exist yet just has no posts.
        if ((err as Error).message.startsWith("GitHub 404")) return []
        throw err
      }
      return Promise.all(
        files
          .filter((f) => f.type === "file" && f.name.endsWith(".json"))
          .map(async (f) => {
            const file = await github<{ content: string }>(t, `/repos/${OWNER}/${REPO}/contents/${f.path}?ref=${BRANCH}`)
            return { ...(JSON.parse(decodeBase64Utf8(file.content)) as BlogData), scheduled }
          })
      )
    }
    try {
      const [scheduled, live] = await Promise.all([readDir(SCHEDULED_DIR, true), readDir(CONTENT_DIR, false)])
      setPublished({
        status: "ok",
        posts: [
          ...scheduled.sort((a, b) => (a.publishAt ?? "").localeCompare(b.publishAt ?? "")),
          ...live.sort((a, b) => b.date.localeCompare(a.date)),
        ],
      })
    } catch (err) {
      setPublished({ status: "error", message: (err as Error).message })
    }
  }

  useEffect(() => {
    if (connection.status === "ok") void loadPublished(token)
    else setPublished({ status: "idle" })
    // Reload when the connection changes (the token only changes with it).
  }, [connection.status, token])

  useEffect(() => {
    if (!token) {
      setConnection({ status: "none" })
      return
    }
    let cancelled = false
    setConnection({ status: "checking" })
    Promise.all([
      github<{ login: string }>(token, "/user"),
      github<{ permissions?: { push?: boolean } }>(token, `/repos/${OWNER}/${REPO}`),
    ])
      .then(([user, repo]) => {
        if (cancelled) return
        if (user.login.toLowerCase() !== ALLOWED_LOGIN) {
          // Don't keep a token for an account that isn't allowed to publish.
          save(TOKEN_KEY, null)
          setConnection({
            status: "error",
            message: `Only the ${ALLOWED_LOGIN} GitHub account can publish blog posts. This token belongs to ${user.login}, so it wasn't saved.`,
          })
        } else if (!repo.permissions?.push) {
          setConnection({
            status: "error",
            message: `This token can't write to ${OWNER}/${REPO}. Give it Contents: Read and write access to that repository.`,
          })
        } else {
          setConnection({ status: "ok", login: user.login })
        }
      })
      .catch((e: Error) => {
        if (!cancelled) setConnection({ status: "error", message: e.message })
      })
    return () => {
      cancelled = true
    }
  }, [token])

  const update = (patch: Partial<Draft>) => setDraft((d) => ({ ...d, ...patch }))

  const setTitle = (title: string) =>
    update(draft.slugEdited ? { title } : { title, slug: slugify(title) })

  const takenSlugs = new Set([
    ...staticPostSlugs,
    ...blogData.map((p) => p.slug),
    ...(published.status === "ok" ? published.posts.map((p) => p.slug) : []),
  ])
  if (editing) takenSlugs.delete(editing.slug)
  const readTime = readTimeFor(draft.body)

  // A live post can't be scheduled — it's already published.
  const canSchedule = !editing || editing.scheduled
  const scheduling = canSchedule && draft.schedule
  const publishAtMs = scheduling && draft.publishAt ? new Date(draft.publishAt).getTime() : NaN
  const publishAtIso = Number.isFinite(publishAtMs) ? new Date(publishAtMs).toISOString() : undefined
  // A scheduled post is dated the day it goes live.
  const postDate = scheduling && draft.publishAt ? draft.publishAt.slice(0, 10) : draft.date

  const problems = [
    !draft.title.trim() && "Add a title.",
    !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(draft.slug) && "The URL slug can only use lowercase letters, numbers and hyphens.",
    takenSlugs.has(draft.slug) && "That URL slug is already used by another post.",
    !draft.excerpt.trim() && "Add a short excerpt.",
    draft.excerpt.trim() &&
      normalizeText(draft.excerpt) === normalizeText(draft.title) &&
      "The excerpt repeats the title. Write a one- or two-sentence summary instead — Google shows it in search results.",
    draft.excerpt.trim() &&
      normalizeText(draft.excerpt) !== normalizeText(draft.title) &&
      draft.excerpt.trim().length < MIN_EXCERPT_LENGTH &&
      `Make the excerpt at least ${MIN_EXCERPT_LENGTH} characters — a one- or two-sentence summary of the post.`,
    !postDate && "Pick a date.",
    scheduling && !publishAtIso && "Pick the date and time to publish.",
    scheduling &&
      publishAtIso &&
      publishAtMs < Date.now() + MIN_SCHEDULE_LEAD_MS &&
      "Pick a publish time at least 5 minutes from now — or switch to Publish now.",
    !draft.image && !editing && "Upload a cover image.",
    countWords(draft.body) < 50 && "Write at least 50 words in the post body.",
  ].filter(Boolean) as string[]

  const post: BlogData = {
    slug: draft.slug,
    title: draft.title || "Untitled post",
    excerpt: draft.excerpt,
    category: draft.category,
    date: postDate,
    readTime,
    image: editing ? editing.image : `assets/blog-${draft.slug}.jpg`,
    imageAlt: draft.imageAlt || draft.title,
    ...(draft.featured ? { featured: true } : {}),
    body: draft.body,
    ...(scheduling && publishAtIso ? { publishAt: publishAtIso } : {}),
  }

  const coverSrc = draft.image ?? (editing ? asset(editing.image) : undefined)

  const onImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ""
    if (!file) return
    setImageError("")
    try {
      update({ image: await resizeImage(file) })
    } catch (err) {
      setImageError((err as Error).message)
    }
  }

  const connect = () => {
    const t = tokenInput.trim()
    if (!t) return
    save(TOKEN_KEY, t)
    setToken(t)
    setTokenInput("")
  }

  const disconnect = () => {
    save(TOKEN_KEY, null)
    setToken("")
  }

  const doPublish = async () => {
    if (connection.status !== "ok" || problems.length) return
    const slug = editing ? editing.slug : post.slug
    const livePath = `${CONTENT_DIR}/${slug}.json`
    const scheduledPath = `${SCHEDULED_DIR}/${slug}.json`
    const jsonPath = scheduling ? scheduledPath : livePath
    const step = (s: string) => setPublish({ status: "working", step: s })
    try {
      if (!editing) {
        step("Checking the URL is free…")
        if ((await fileExists(token, livePath)) || (await fileExists(token, scheduledPath))) {
          throw new Error("A post with this URL slug already exists in the repo. Change the slug.")
        }
      } else if (editing.scheduled && !scheduling) {
        step("Checking the URL is free…")
        if (await fileExists(token, livePath)) {
          throw new Error("A live post with this URL slug already exists, so this one can't be published now.")
        }
      }
      // A stamp keeps new image names unique, so browsers don't show cached old images.
      const stamp = Date.now().toString(36)
      const changes: Change[] = []

      let image = post.image
      if (draft.image) {
        image = editing ? `assets/blog-${slug}-cover-${stamp}.jpg` : `assets/blog-${slug}.jpg`
        changes.push({ path: `public/${image}`, base64: draft.image.split(",")[1] })
        if (editing && editing.image !== image && editing.image.startsWith(`assets/blog-${slug}`)) {
          changes.push({ path: `public/${editing.image}`, remove: true })
        }
      }

      // Images inserted in the body are data URLs in the draft: upload each one
      // and point the body at its new path.
      let body = post.body
      const inline = [...new Set(body.match(/data:image\/[a-z]+;base64,[A-Za-z0-9+/=]+/g) ?? [])]
      for (const [n, dataUrl] of inline.entries()) {
        const mime = dataUrl.slice(11, dataUrl.indexOf(";"))
        const ext = mime === "jpeg" ? "jpg" : mime
        const assetPath = editing ? `assets/blog-${slug}-${stamp}-${n + 1}.${ext}` : `assets/blog-${slug}-${n + 1}.${ext}`
        changes.push({ path: `public/${assetPath}`, base64: dataUrl.split(",")[1] })
        body = body.split(dataUrl).join(assetPath)
      }

      // When editing, remove this post's images that are no longer used.
      if (editing) {
        step("Checking for unused images…")
        for (const old of bodyAssets(editing.body, slug)) {
          if (!body.includes(old) && (await fileExists(token, `public/${old}`))) {
            changes.push({ path: `public/${old}`, remove: true })
          }
        }
      }

      const finalPost: BlogData = { ...post, slug, image, body }
      changes.push({ path: jsonPath, text: `${JSON.stringify(finalPost, null, 2)}\n` })
      // A scheduled post published now moves out of the scheduled folder.
      if (editing?.scheduled && !scheduling) changes.push({ path: scheduledPath, remove: true })

      const message = scheduling
        ? `${editing ? "Reschedule" : "Schedule"} blog post for ${finalPost.publishAt}: ${finalPost.title}`
        : `${editing && !editing.scheduled ? "Update" : "Add"} blog post: ${finalPost.title}`
      const commitUrl = await commitChanges(token, message, changes, step)
      setPublish({
        status: "done",
        kind: scheduling ? "scheduled" : editing && !editing.scheduled ? "updated" : "published",
        slug,
        title: finalPost.title,
        commitUrl,
        publishAt: finalPost.publishAt,
      })
      setDraft(emptyDraft())
      setTab("write")
      void loadPublished(token)
    } catch (err) {
      setPublish({ status: "error", message: (err as Error).message })
    }
  }

  const startEditing = (p: StudioPost) => {
    const hasDraft = draft.title.trim() || draft.body.trim()
    const sameEdit = editing?.slug === p.slug
    if (hasDraft && !sameEdit && !window.confirm("Replace the post you're currently writing with this one?")) return
    setDraft({
      title: p.title,
      slug: p.slug,
      slugEdited: true,
      category: p.category,
      date: p.date,
      excerpt: p.excerpt,
      imageAlt: p.imageAlt,
      featured: !!p.featured,
      body: p.body,
      image: null,
      schedule: p.scheduled,
      publishAt: p.publishAt ? toLocalInput(new Date(p.publishAt)) : defaultPublishAt(),
      editing: { slug: p.slug, title: p.title, image: p.image, body: p.body, scheduled: p.scheduled },
    })
    setPublish({ status: "idle" })
    setTab("write")
    window.setTimeout(() => document.getElementById("bs-form")?.scrollIntoView({ behavior: "smooth" }), 50)
  }

  const deletePost = async (p: StudioPost) => {
    if (
      !window.confirm(
        p.scheduled
          ? `Delete the scheduled post “${p.title}”?\n\nIt won't be published, and its images are removed. It can only be recovered from the GitHub history.`
          : `Delete “${p.title}”?\n\nThis removes the post and its images from the site. It can only be recovered from the GitHub history.`
      )
    )
      return
    const step = (s: string) => setPublish({ status: "working", step: s })
    try {
      step("Finding the post's files…")
      const candidates = [
        `${p.scheduled ? SCHEDULED_DIR : CONTENT_DIR}/${p.slug}.json`,
        ...(p.image.startsWith(`assets/blog-${p.slug}`) ? [`public/${p.image}`] : []),
        ...bodyAssets(p.body, p.slug).map((a) => `public/${a}`),
      ]
      const changes: Change[] = []
      for (const path of candidates) {
        if (await fileExists(token, path)) changes.push({ path, remove: true })
      }
      if (!changes.length) throw new Error("This post's files weren't found in the repo.")
      const commitUrl = await commitChanges(token, `Delete blog post: ${p.title}`, changes, step)
      setPublish({ status: "done", kind: "deleted", slug: p.slug, title: p.title, commitUrl })
      if (editing?.slug === p.slug) setDraft(emptyDraft())
      void loadPublished(token)
    } catch (err) {
      setPublish({ status: "error", message: (err as Error).message })
    }
  }

  return (
    <>
      <Seo title="Blog Studio" description="Private publishing page." path="/blog-studio-k7p3x9" noIndex />

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-10 sm:px-10 lg:px-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-bento-mint px-3.5 py-2 text-[13px] font-bold text-bento-forest">
            <ShieldCheck className="h-4 w-4" />
            PRIVATE
          </span>
          <h1 className="mt-4 text-3xl font-bold text-brand-heading sm:text-4xl">Blog Studio</h1>
          <p className="mt-2 text-base text-gray-500">
            Write a post, preview it, and publish it to the Blog page. Publishing commits the post to GitHub and
            the site updates in about 2–3 minutes.
          </p>

          {/* GitHub connection */}
          <div className="mt-8 rounded-[22px] border border-gray-200 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 text-base font-bold text-brand-heading">
                <KeyRound className="h-4 w-4 text-brand-green" />
                GitHub connection
              </h2>
              {connection.status === "ok" && (
                <span className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1.5 font-semibold text-brand-green">
                    <CheckCircle2 className="h-4 w-4" />
                    Connected as {connection.login}
                  </span>
                  <Button variant="outline" size="sm" onClick={disconnect}>
                    <LogOut className="h-4 w-4" />
                    Forget token
                  </Button>
                </span>
              )}
              {connection.status === "checking" && (
                <span className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking token…
                </span>
              )}
            </div>

            {connection.status !== "ok" && connection.status !== "checking" && (
              <>
                {connection.status === "error" && (
                  <p className="mt-3 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm text-red-800">
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                    {connection.message}
                    <button type="button" onClick={disconnect} className="ml-auto shrink-0 font-semibold underline">
                      Clear
                    </button>
                  </p>
                )}
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="password"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && connect()}
                    placeholder="Paste a GitHub fine-grained token"
                    autoComplete="off"
                    className={field}
                  />
                  <Button onClick={connect} disabled={!tokenInput.trim()} className="shrink-0">
                    Connect
                  </Button>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-gray-500">
                  Only the <strong>{ALLOWED_LOGIN}</strong> GitHub account can publish. Create a token while signed in
                  as {ALLOWED_LOGIN} at{" "}
                  <a
                    href="https://github.com/settings/personal-access-tokens/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 font-semibold text-brand-green hover:underline"
                  >
                    GitHub → Fine-grained tokens
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  : under Repository access choose <strong>Only select repositories → {OWNER}/{REPO}</strong>, and
                  under Permissions set <strong>Contents → Read and write</strong>. The token is stored only in this
                  browser — use “Forget token” on shared computers.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {connection.status === "ok" && (
        <section className="container-px pt-4">
          <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 sm:px-10 lg:px-14">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-brand-heading">Published and scheduled posts</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => void loadPublished(token)}
                disabled={published.status === "loading"}
              >
                <RefreshCw className={cn("h-4 w-4", published.status === "loading" && "animate-spin")} />
                Refresh
              </Button>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Posts published or scheduled from this studio. The original posts are built into the site's code, so they aren't
              listed here.
            </p>

            {published.status === "error" && (
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm text-red-800">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                Couldn't load the posts — {published.message}
              </p>
            )}
            {published.status === "loading" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading posts…
              </p>
            )}
            {published.status === "ok" &&
              (published.posts.length === 0 ? (
                <p className="mt-4 text-sm text-gray-500">No posts published from the studio yet.</p>
              ) : (
                <ul className="mt-4 divide-y divide-gray-100 rounded-xl border border-gray-200">
                  {published.posts.map((p) => (
                    <li key={p.slug} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-brand-heading">{p.title}</p>
                        <p className="text-xs text-gray-500">
                          {p.scheduled && p.publishAt ? (
                            <span className="mr-2 inline-flex items-center gap-1 rounded-full bg-bento-butter px-2 py-0.5 font-semibold text-bento-butter-text">
                              <CalendarClock className="h-3 w-3" />
                              Scheduled · {formatDateTime(p.publishAt)}
                            </span>
                          ) : null}
                          {p.date} · {p.category}
                          {editing?.slug === p.slug && (
                            <span className="ml-2 rounded-full bg-bento-mint px-2 py-0.5 font-semibold text-bento-forest">
                              Editing
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-1.5">
                        {!p.scheduled && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={`${SITE}/blog/${p.slug}/`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              View
                            </a>
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => startEditing(p)}
                          disabled={publish.status === "working"}
                        >
                          <PenLine className="h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => void deletePost(p)}
                          disabled={publish.status === "working"}
                          className="text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </section>
      )}

      {publish.status === "done" && (
        <section className="container-px pt-4">
          <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-[28px] bg-bento-mint px-6 py-6 sm:px-10">
            <p className="flex items-center gap-2 text-lg font-bold text-bento-forest">
              <CheckCircle2 className="h-5 w-5" />
              {publish.kind === "published" && "Published! The site is rebuilding now."}
              {publish.kind === "updated" && "Updated! The site is rebuilding now."}
              {publish.kind === "scheduled" && "Scheduled!"}
              {publish.kind === "deleted" && `Deleted “${publish.title}”. The site is rebuilding now.`}
            </p>
            <p className="text-sm text-bento-forest/80">
              {publish.kind === "scheduled" ? (
                `“${publish.title}” will go live automatically on ${
                  publish.publishAt ? formatDateTime(publish.publishAt) : "its scheduled time"
                }, usually within 15–30 minutes of that time`
              ) : publish.kind === "deleted" ? (
                "It will disappear from the Blog page in about 2–3 minutes"
              ) : (
                <>
                  The {publish.kind === "updated" ? "changes" : "post"} will be live in about 2–3 minutes at{" "}
                  <a
                    href={`${SITE}/blog/${publish.slug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    {SITE}/blog/{publish.slug}/
                  </a>
                </>
              )}
              . You can follow the build on{" "}
              <a
                href={`https://github.com/${OWNER}/${REPO}/actions`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                GitHub Actions
              </a>{" "}
              or view the{" "}
              <a href={publish.commitUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                commit
              </a>
              .
            </p>
          </div>
        </section>
      )}

      {editing && (
        <section className="container-px pt-4">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 rounded-[28px] bg-bento-butter px-6 py-4 sm:px-10">
            <p className="text-sm text-bento-butter-text">
              <span className="font-semibold">Editing:</span> {editing.title}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="bg-white"
              onClick={() => {
                if (window.confirm("Stop editing? Your unsaved changes to this post will be discarded.")) {
                  setDraft(emptyDraft())
                }
              }}
            >
              <X className="h-4 w-4" />
              Cancel editing
            </Button>
          </div>
        </section>
      )}

      {/* Write / Preview */}
      <section id="bs-form" className="container-px scroll-mt-28 pt-4">
        <div className="mx-auto flex max-w-4xl gap-2 rounded-[28px] bg-white p-2">
          {(["write", "preview"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-[22px] py-3 text-sm font-semibold transition-colors",
                tab === t ? "bg-bento-forest text-white" : "text-gray-600 hover:bg-brand-bg"
              )}
            >
              {t === "write" ? <PenLine className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {t === "write" ? "Write" : "Preview"}
            </button>
          ))}
        </div>
      </section>

      {tab === "preview" ? (
        <BlogPostView post={post} imageSrc={coverSrc} />
      ) : (
        <section className="container-px pt-4">
          <div className="mx-auto max-w-4xl space-y-5 rounded-[28px] bg-white px-6 py-10 sm:px-10 lg:px-14">
            <div className="flex flex-col gap-2">
              <label htmlFor="bs-title" className={label}>
                Title
              </label>
              <input id="bs-title" value={draft.title} onChange={(e) => setTitle(e.target.value)} className={field} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="bs-slug" className={label}>
                URL slug
              </label>
              <div className="flex items-center gap-2">
                <span className="hidden shrink-0 text-sm text-gray-400 sm:inline">/blog/</span>
                <input
                  id="bs-slug"
                  value={draft.slug}
                  onChange={(e) => update({ slug: slugify(e.target.value), slugEdited: true })}
                  disabled={!!editing}
                  className={cn(field, editing && "cursor-not-allowed bg-brand-bg text-gray-500")}
                />
              </div>
              <p className="text-xs text-gray-500">
                {editing
                  ? "The URL can't change after publishing, so links to the post keep working."
                  : "Filled in from the title. Edit it if you want a shorter URL."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="bs-category" className={label}>
                  Category
                </label>
                <select
                  id="bs-category"
                  value={draft.category}
                  onChange={(e) => update({ category: e.target.value })}
                  className={field}
                >
                  {POST_CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="bs-date" className={label}>
                  Date
                </label>
                <input
                  id="bs-date"
                  type="date"
                  value={postDate}
                  onChange={(e) => update({ date: e.target.value })}
                  disabled={scheduling}
                  className={cn(field, scheduling && "cursor-not-allowed bg-brand-bg text-gray-500")}
                />
                {scheduling && <p className="text-xs text-gray-500">Set to the day the post goes live.</p>}
              </div>
            </div>

            {canSchedule && (
              <fieldset className="flex flex-col gap-3 rounded-xl border border-gray-200 p-4">
                <legend className={cn(label, "px-1")}>When to publish</legend>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      [false, "Publish now", Send],
                      [true, "Schedule for later", CalendarClock],
                    ] as const
                  ).map(([value, text, Icon]) => (
                    <label
                      key={text}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                        draft.schedule === value
                          ? "border-bento-forest bg-bento-forest text-white"
                          : "border-gray-200 text-brand-heading hover:bg-brand-bg"
                      )}
                    >
                      <input
                        type="radio"
                        name="bs-when"
                        checked={draft.schedule === value}
                        onChange={() => update({ schedule: value })}
                        className="sr-only"
                      />
                      <Icon className="h-4 w-4" />
                      {text}
                    </label>
                  ))}
                </div>
                {draft.schedule && (
                  <div className="flex flex-col gap-2">
                    <label htmlFor="bs-publish-at" className="text-sm text-brand-heading">
                      Publish on
                    </label>
                    <input
                      id="bs-publish-at"
                      type="datetime-local"
                      value={draft.publishAt}
                      min={toLocalInput(new Date(Date.now() + MIN_SCHEDULE_LEAD_MS))}
                      onChange={(e) => update({ publishAt: e.target.value })}
                      className={cn(field, "sm:max-w-xs")}
                    />
                    <p className="text-xs leading-relaxed text-gray-500">
                      Time zone: {TIME_ZONE}. The post is saved now but stays hidden, then goes live automatically —
                      usually within 15–30 minutes of this time. Its images are uploaded straight away.
                    </p>
                  </div>
                )}
              </fieldset>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="bs-excerpt" className={label}>
                Excerpt
              </label>
              <textarea
                id="bs-excerpt"
                rows={3}
                value={draft.excerpt}
                onChange={(e) => update({ excerpt: e.target.value })}
                className={field}
              />
              <p className="text-xs text-gray-500">
                Shown on the blog card, under the post title, in search results and in link previews. Summarise the
                post in one or two sentences — don't repeat the title. Aim for 120–160 characters ({draft.excerpt.length}{" "}
                now).
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className={label}>Cover image</span>
              {coverSrc ? (
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <img src={coverSrc} alt="" className="aspect-[16/9] w-full object-cover" />
                </div>
              ) : null}
              <label className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-brand-heading hover:bg-brand-bg">
                <ImagePlus className="h-4 w-4 text-brand-green" />
                {coverSrc ? "Replace image" : "Upload image"}
                <input type="file" accept="image/png,image/jpeg,image/webp" onChange={onImage} className="sr-only" />
              </label>
              {imageError && <p className="text-xs text-red-700">{imageError}</p>}
              <input
                aria-label="Image description (alt text)"
                placeholder="Describe the image for screen readers (alt text)"
                value={draft.imageAlt}
                onChange={(e) => update({ imageAlt: e.target.value })}
                className={field}
              />
              <p className="text-xs text-gray-500">
                Use a 16:9 image (for example 1600×900) to match the other posts. Blog cards show images at 16:9, so
                other shapes are cropped there. Resized to at most 1600px wide and saved as JPEG.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <span className={label}>Post body</span>
                <span className="text-xs text-gray-500">{readTime}</span>
              </div>
              <RichTextEditor
                id="bs-body"
                value={draft.body}
                onChange={(body) => update({ body })}
                placeholder="Start writing your post…"
              />
              <p className="text-xs leading-relaxed text-gray-500">
                Use the toolbar, or shortcuts like Ctrl+B and Ctrl+I. Typing <code>## </code> starts a heading and{" "}
                <code>- </code> a bullet list. Pasting from Word or Google Docs keeps headings, lists, bold, italic and
                links.
              </p>
            </div>

            <label className="flex items-center gap-2 text-sm text-brand-heading">
              <input
                type="checkbox"
                checked={draft.featured}
                onChange={(e) => update({ featured: e.target.checked })}
                className="h-4 w-4 accent-[var(--color-brand-green)]"
              />
              Make this the featured post at the top of the Blog page
            </label>
          </div>
        </section>
      )}

      {/* Publish */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 sm:px-10 lg:px-14">
          {problems.length > 0 && (
            <ul className="mb-5 space-y-1.5">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-bento-butter-ink" />
                  {p}
                </li>
              ))}
            </ul>
          )}
          {publish.status === "error" && (
            <p className="mb-5 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm text-red-800">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              Something went wrong — {publish.message}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              {connection.status === "ok"
                ? "Your draft is saved in this browser as you type."
                : "Connect GitHub above to publish. Your draft is saved in this browser."}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  if (window.confirm(editing ? "Discard your changes to this post?" : "Clear this draft?"))
                    setDraft(emptyDraft())
                }}
              >
                {editing ? "Discard changes" : "Clear draft"}
              </Button>
              <Button
                onClick={() => {
                  setPublish({ status: "idle" })
                  setConfirmOpen(true)
                }}
                disabled={connection.status !== "ok" || problems.length > 0 || publish.status === "working"}
              >
                {publish.status === "working" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : scheduling ? (
                  <CalendarClock className="h-4 w-4" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {publish.status === "working"
                  ? publish.step
                  : scheduling
                    ? editing
                      ? "Update schedule"
                      : "Schedule post"
                    : editing?.scheduled
                      ? "Publish now"
                      : editing
                        ? "Update post"
                        : "Publish"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PublishDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => void doPublish()}
        publish={publish}
        post={post}
        coverSrc={coverSrc}
        isEdit={!!editing}
        wasScheduled={!!editing?.scheduled}
      />
    </>
  )
}
