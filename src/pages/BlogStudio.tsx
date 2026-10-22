import { useEffect, useState, type ChangeEvent } from "react"
import {
  CheckCircle2,
  ExternalLink,
  Eye,
  ImagePlus,
  KeyRound,
  Loader2,
  LogOut,
  PenLine,
  Send,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPostView } from "@/components/BlogPostView"
import { RichTextEditor } from "@/components/RichTextEditor"
import { Seo } from "@/components/Seo"
import { cn } from "@/lib/utils"
import { resizeImage } from "@/lib/imageResize"
import { blogData, countWords, readTimeFor, slugify, type BlogData } from "@/lib/blogContent"
import { categories, staticPostSlugs } from "@/pages/blogPostList"

// Hidden page for publishing blog posts. It is not linked anywhere and is
// marked noindex. Only the codespanda GitHub account may publish: the page
// refuses any other account, and GitHub itself only lets accounts with write
// access (currently just codespanda) push to the repo. The token is kept
// only in this browser's localStorage.

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
  image: string | null // JPEG data URL
}

type Connection =
  | { status: "none" }
  | { status: "checking" }
  | { status: "ok"; login: string }
  | { status: "error"; message: string }

type PublishState =
  | { status: "idle" }
  | { status: "working"; step: string }
  | { status: "done"; slug: string; commitUrl: string }
  | { status: "error"; message: string }

function today() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
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
})

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

  useEffect(() => save(DRAFT_KEY, draft), [draft])

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

  const takenSlugs = new Set([...staticPostSlugs, ...blogData.map((p) => p.slug)])
  const readTime = readTimeFor(draft.body)
  const problems = [
    !draft.title.trim() && "Add a title.",
    !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(draft.slug) && "The URL slug can only use lowercase letters, numbers and hyphens.",
    takenSlugs.has(draft.slug) && "That URL slug is already used by another post.",
    !draft.excerpt.trim() && "Add a short excerpt.",
    !draft.date && "Pick a date.",
    !draft.image && "Upload a cover image.",
    countWords(draft.body) < 50 && "Write at least 50 words in the post body.",
  ].filter(Boolean) as string[]

  const post: BlogData = {
    slug: draft.slug,
    title: draft.title || "Untitled post",
    excerpt: draft.excerpt,
    category: draft.category,
    date: draft.date,
    readTime,
    image: `assets/blog-${draft.slug}.jpg`,
    imageAlt: draft.imageAlt || draft.title,
    ...(draft.featured ? { featured: true } : {}),
    body: draft.body,
  }

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
    if (connection.status !== "ok" || problems.length || !draft.image) return
    const repo = `/repos/${OWNER}/${REPO}`
    const jsonPath = `src/content/blog/${post.slug}.json`
    try {
      setPublish({ status: "working", step: "Checking the URL is free…" })
      const exists = await fetch(`https://api.github.com${repo}/contents/${jsonPath}?ref=${BRANCH}`, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
      })
      if (exists.ok) throw new Error("A post with this URL slug already exists in the repo. Change the slug.")

      setPublish({ status: "working", step: "Uploading the cover image…" })
      const ref = await github<{ object: { sha: string } }>(token, `${repo}/git/ref/heads/${BRANCH}`)
      const parent = await github<{ tree: { sha: string } }>(token, `${repo}/git/commits/${ref.object.sha}`)
      const imageBlob = await github<{ sha: string }>(token, `${repo}/git/blobs`, {
        method: "POST",
        body: JSON.stringify({ content: draft.image.split(",")[1], encoding: "base64" }),
      })

      // Images inserted in the body are data URLs in the draft. Upload each
      // one as public/assets/blog-<slug>-<n>.<ext> and point the body at it.
      const treeItems = [{ path: `public/${post.image}`, mode: "100644", type: "blob", sha: imageBlob.sha }]
      const inlineImages = [...new Set(post.body.match(/data:image\/[a-z]+;base64,[A-Za-z0-9+/=]+/g) ?? [])]
      let body = post.body
      for (const [n, dataUrl] of inlineImages.entries()) {
        setPublish({ status: "working", step: `Uploading image ${n + 1} of ${inlineImages.length}…` })
        const mime = dataUrl.slice(11, dataUrl.indexOf(";"))
        const assetPath = `assets/blog-${post.slug}-${n + 1}.${mime === "jpeg" ? "jpg" : mime}`
        const blob = await github<{ sha: string }>(token, `${repo}/git/blobs`, {
          method: "POST",
          body: JSON.stringify({ content: dataUrl.split(",")[1], encoding: "base64" }),
        })
        treeItems.push({ path: `public/${assetPath}`, mode: "100644", type: "blob", sha: blob.sha })
        body = body.split(dataUrl).join(assetPath)
      }

      setPublish({ status: "working", step: "Saving the post…" })
      const postBlob = await github<{ sha: string }>(token, `${repo}/git/blobs`, {
        method: "POST",
        body: JSON.stringify({ content: `${JSON.stringify({ ...post, body }, null, 2)}\n`, encoding: "utf-8" }),
      })
      treeItems.push({ path: jsonPath, mode: "100644", type: "blob", sha: postBlob.sha })
      const tree = await github<{ sha: string }>(token, `${repo}/git/trees`, {
        method: "POST",
        body: JSON.stringify({ base_tree: parent.tree.sha, tree: treeItems }),
      })

      setPublish({ status: "working", step: "Publishing…" })
      const commit = await github<{ sha: string; html_url: string }>(token, `${repo}/git/commits`, {
        method: "POST",
        body: JSON.stringify({ message: `Add blog post: ${post.title}`, tree: tree.sha, parents: [ref.object.sha] }),
      })
      await github(token, `${repo}/git/refs/heads/${BRANCH}`, {
        method: "PATCH",
        body: JSON.stringify({ sha: commit.sha }),
      })

      setPublish({ status: "done", slug: post.slug, commitUrl: commit.html_url })
      setDraft(emptyDraft())
      setTab("write")
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

      {publish.status === "done" && (
        <section className="container-px pt-4">
          <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-[28px] bg-bento-mint px-6 py-6 sm:px-10">
            <p className="flex items-center gap-2 text-lg font-bold text-bento-forest">
              <CheckCircle2 className="h-5 w-5" />
              Published! The site is rebuilding now.
            </p>
            <p className="text-sm text-bento-forest/80">
              The post will be live in about 2–3 minutes at{" "}
              <a href={`${SITE}/blog/${publish.slug}/`} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                {SITE}/blog/{publish.slug}/
              </a>
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

      {/* Write / Preview */}
      <section className="container-px pt-4">
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
        <BlogPostView post={post} imageSrc={draft.image ?? undefined} />
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
                  className={field}
                />
              </div>
              <p className="text-xs text-gray-500">Filled in from the title. Edit it if you want a shorter URL.</p>
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
                  value={draft.date}
                  onChange={(e) => update({ date: e.target.value })}
                  className={field}
                />
              </div>
            </div>

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
                Shown on the blog card, under the post title and in search results. Aim for about 160 characters (
                {draft.excerpt.length} now).
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className={label}>Cover image</span>
              {draft.image ? (
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <img src={draft.image} alt="" className="aspect-[16/9] w-full object-cover" />
                </div>
              ) : null}
              <label className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-brand-heading hover:bg-brand-bg">
                <ImagePlus className="h-4 w-4 text-brand-green" />
                {draft.image ? "Replace image" : "Upload image"}
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
              Publishing failed — {publish.message}
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
                  if (window.confirm("Clear this draft?")) setDraft(emptyDraft())
                }}
              >
                Clear draft
              </Button>
              <Button
                onClick={doPublish}
                disabled={connection.status !== "ok" || problems.length > 0 || publish.status === "working"}
              >
                {publish.status === "working" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {publish.status === "working" ? publish.step : "Publish"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
