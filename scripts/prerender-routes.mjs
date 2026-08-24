// Generates a real `index.html` inside a matching folder for every known
// static route (e.g. dist/blog/index.html), so GitHub Pages serves those
// URLs with an actual 200 status instead of falling back to 404.html.
// Googlebot (and other crawlers) refuse to index a page that returns 404,
// even if the body content is valid — this is what makes those routes
// indexable at all.
//
// Keep this list in sync with the <Route> paths in src/App.tsx and the
// URLs in public/sitemap.xml.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const routes = [
  "blog",
  "blog/how-financial-planning-helps-your-business-grow-faster",
  "blog/us-sales-tax-nexus-in-2026",
  "blog/bas-preparation-checklist-for-australian-businesses",
  "blog/payroll-superannuation-common-compliance-traps-in-australia",
  "blog/when-should-a-growing-business-outsource-its-accounting",
  "blog/quickbooks-vs-xero-which-fits-your-business-in-2026",
  "blog/1099-reporting-deadlines-you-cant-afford-to-miss",
  "blog/how-cpa-firms-use-outsourced-support-during-tax-season",
  "blog/will-ai-replace-accountants-in-2026",
  "about",
  "faq",
  "privacy-policy",
  "terms",
]

const distDir = join(process.cwd(), "dist")
const indexHtml = readFileSync(join(distDir, "index.html"), "utf-8")

for (const route of routes) {
  const dir = join(distDir, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, "index.html"), indexHtml)
}

console.log(`Prerendered ${routes.length} routes with real index.html files.`)
