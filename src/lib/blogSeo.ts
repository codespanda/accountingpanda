// SEO checks for a blog post in the studio. They're advice, shown as a
// checklist while writing — the studio's own validation still decides what
// blocks publishing.

import { countWords } from "@/lib/blogContent"

export type SeoCheck = {
  id: string
  label: string
  status: "good" | "warn"
  /** What was found, and how to improve it when it isn't good. */
  detail: string
}

export type SeoInput = {
  title: string
  slug: string
  excerpt: string
  /** Post body in Markdown. */
  body: string
  /** Alt text for the cover image. */
  imageAlt: string
}

const STOP_WORDS = new Set(
  "a an and are as at be by for from how in into is it its of on or that the this to what when where which who why will with your you".split(
    " "
  )
)

/** Lowercase words without punctuation. */
function words(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .split(" ")
    .filter(Boolean)
}

/** Body text without Markdown images, link targets or symbols. */
function plainText(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_>`|-]/g, " ")
}

export function checkBlogSeo({ title, slug, excerpt, body, imageAlt }: SeoInput): SeoCheck[] {
  const checks: SeoCheck[] = []
  const add = (id: string, label: string, good: boolean, detail: string) =>
    checks.push({ id, label, status: good ? "good" : "warn", detail })

  // Title — Google shows about 60 characters.
  const t = title.trim().length
  add(
    "title",
    "Title length",
    t >= 30 && t <= 65,
    t < 30
      ? `${t} characters — a little short. Aim for 30–65 so it describes the post fully.`
      : t > 65
        ? `${t} characters — Google may cut it off after about 60. Aim for 30–65.`
        : `${t} characters — a good length.`
  )

  // Meta description (the excerpt).
  const e = excerpt.trim().length
  add(
    "description",
    "Search description (excerpt)",
    e >= 120 && e <= 160,
    e < 120
      ? `${e} characters — add a little more. 120–160 fills the space Google shows.`
      : e > 160
        ? `${e} characters — Google may cut it off. Aim for 120–160.`
        : `${e} characters — a good length.`
  )

  // URL.
  const slugWords = slug.split("-").filter(Boolean).length
  add(
    "slug",
    "Short URL",
    slug.length <= 60 && slugWords <= 8,
    slug.length <= 60 && slugWords <= 8
      ? `${slugWords} words — short and readable.`
      : `${slugWords} words, ${slug.length} characters — shorten it to the main keywords (8 words or fewer).`
  )

  // Length.
  const wordCount = countWords(body)
  add(
    "length",
    "Post length",
    wordCount >= 800,
    wordCount >= 800
      ? `${wordCount} words — in-depth enough to rank well.`
      : `${wordCount} words — in-depth posts of 800+ words tend to rank better. Add examples, steps or FAQs.`
  )

  // Headings.
  const subheadings = (body.match(/^#{2,3} \S/gm) ?? []).length
  const h1s = (body.match(/^# \S/gm) ?? []).length
  add(
    "headings",
    "Subheadings",
    subheadings >= 3 && h1s === 0,
    h1s > 0
      ? `The body uses a top-level heading (#). The title is already the page's main heading — use Heading 2 and 3 instead.`
      : subheadings >= 3
        ? `${subheadings} subheadings — easy to scan.`
        : `${subheadings} subheading${subheadings === 1 ? "" : "s"} — break the post into sections with at least 3 headings.`
  )

  // Title repeated as the first line of the body.
  const firstLine = plainText(body.trim().split("\n")[0] ?? "")
  const repeatsTitle = words(firstLine).join(" ") === words(title).join(" ") && words(title).length > 0
  add(
    "no-duplicate-title",
    "No repeated title",
    !repeatsTitle,
    repeatsTitle
      ? "The body starts with the post title, so it appears twice. Delete that first line."
      : "The body doesn't repeat the title."
  )

  // Topic in the introduction.
  const keywords = [...new Set(words(title).filter((w) => w.length > 3 && !STOP_WORDS.has(w)))]
  const intro = new Set(words(plainText(body)).slice(0, 150))
  const found = keywords.filter((k) => intro.has(k) || intro.has(`${k}s`) || (k.endsWith("s") && intro.has(k.slice(0, -1))))
  const coverage = keywords.length ? found.length / keywords.length : 1
  add(
    "intro-keywords",
    "Topic in the introduction",
    coverage >= 0.5,
    coverage >= 0.5
      ? "The first paragraph uses the title's main words."
      : `Use the title's main words early on — missing from the first 150 words: ${keywords
          .filter((k) => !found.includes(k))
          .slice(0, 5)
          .join(", ")}.`
  )

  // Links.
  const links = [...body.matchAll(/(?<!!)\[[^\]]+\]\(([^)\s]+)\)/g)].map((m) => m[1])
  const internal = links.filter((h) => h.startsWith("/") || /^https?:\/\/(www\.)?accountingpanda\.com/i.test(h))
  const external = links.filter((h) => /^https?:\/\//i.test(h) && !internal.includes(h))
  add(
    "internal-links",
    "Links to your own pages",
    internal.length >= 1,
    internal.length
      ? `${internal.length} link${internal.length === 1 ? "" : "s"} to other AccountingPanda pages.`
      : "Link to at least one related blog post or course (for example /learning/taxation/learn-gst-in-india) to keep readers on the site."
  )
  add(
    "external-links",
    "Official sources",
    external.length >= 1,
    external.length
      ? `${external.length} link${external.length === 1 ? "" : "s"} to outside sources.`
      : "Link to at least one official source (a government or standards website) — it builds trust with readers and Google."
  )

  // Images.
  const coverAlt = imageAlt.trim()
  add(
    "cover-alt",
    "Cover image description",
    coverAlt.length >= 10 && coverAlt.toLowerCase() !== title.trim().toLowerCase(),
    coverAlt.length >= 10 && coverAlt.toLowerCase() !== title.trim().toLowerCase()
      ? "The cover has its own description."
      : "Describe what the cover image shows (alt text) — it helps Google Images and screen readers."
  )
  const bodyImages = [...body.matchAll(/!\[([^\]]*)\]\([^)]*\)/g)]
  const missingAlt = bodyImages.filter((m) => !m[1].trim()).length
  add(
    "body-alt",
    "Image descriptions in the post",
    missingAlt === 0,
    bodyImages.length === 0
      ? "No images in the post body."
      : missingAlt === 0
        ? `All ${bodyImages.length} image${bodyImages.length === 1 ? " has" : "s have"} a description.`
        : `${missingAlt} of ${bodyImages.length} images have no description — click an image and use Describe image.`
  )

  // Readability.
  const sentences = plainText(body)
    .split(/[.!?]+(?:\s|$)/)
    .map((s) => words(s).length)
    .filter((n) => n >= 3)
  const avg = sentences.length ? sentences.reduce((a, b) => a + b, 0) / sentences.length : 0
  add(
    "readability",
    "Sentence length",
    avg <= 22,
    avg <= 22
      ? `About ${Math.round(avg)} words per sentence — easy to read.`
      : `About ${Math.round(avg)} words per sentence — split long sentences (aim for 22 or fewer on average).`
  )

  return checks
}
