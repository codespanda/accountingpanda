// Moves scheduled blog posts whose time has come from
// src/content/blog-scheduled/ to src/content/blog/, where the site picks them
// up on the next build. Run by .github/workflows/publish-scheduled-posts.yml.
//
// Each scheduled post is the same JSON as a live post plus "publishAt", an
// ISO 8601 timestamp (e.g. "2026-11-25T03:30:00.000Z"). The field is removed
// when the post goes live.

import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const scheduledDir = join(root, "src", "content", "blog-scheduled")
const liveDir = join(root, "src", "content", "blog")
const now = Date.now()
const published = []

const files = existsSync(scheduledDir) ? readdirSync(scheduledDir).filter((f) => f.endsWith(".json")) : []
for (const file of files) {
  const from = join(scheduledDir, file)
  const post = JSON.parse(readFileSync(from, "utf-8"))
  const at = Date.parse(post.publishAt)
  if (!Number.isFinite(at)) {
    console.warn(`Skipping ${file}: it has no valid publishAt time.`)
    continue
  }
  if (at > now) continue
  const to = join(liveDir, file)
  if (existsSync(to)) {
    console.warn(`Skipping ${file}: a live post with the same file name already exists.`)
    continue
  }
  delete post.publishAt
  mkdirSync(liveDir, { recursive: true })
  writeFileSync(to, `${JSON.stringify(post, null, 2)}\n`)
  unlinkSync(from)
  published.push(post.title)
}

console.log(published.length ? `Published: ${published.join("; ")}` : "No scheduled posts are due.")

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `published=${published.length}\n`)
  appendFileSync(process.env.GITHUB_OUTPUT, `titles=${published.join("; ").replace(/[\r\n]+/g, " ")}\n`)
}
