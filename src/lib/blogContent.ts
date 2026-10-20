// Blog posts published from the blog studio. Each post is a JSON file in
// src/content/blog/, committed to the repo by the studio, so new posts go
// live through the normal build and deploy.

export type BlogData = {
  slug: string
  title: string
  excerpt: string
  category: string
  /** ISO date, e.g. "2026-10-20". */
  date: string
  readTime: string
  /** Path under public/, e.g. "assets/blog-my-post.jpg". */
  image: string
  imageAlt: string
  featured?: boolean
  /** Post body in Markdown. */
  body: string
}

const modules = import.meta.glob<BlogData>("/src/content/blog/*.json", {
  eager: true,
  import: "default",
})

/** Newest first. */
export const blogData: BlogData[] = Object.values(modules).sort((a, b) => b.date.localeCompare(a.date))

export function findBlogPost(slug: string | undefined) {
  return blogData.find((p) => p.slug === slug)
}

/** "2026-10-20" → "Oct 20, 2026", matching the hand-coded posts. */
export function formatPostDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  if (!y || !m || !d) return iso
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

/** About 200 words a minute, at least one minute. */
export function readTimeFor(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90)
    .replace(/-+$/g, "")
}
