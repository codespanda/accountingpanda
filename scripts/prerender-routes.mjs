// Generates a real `index.html` inside a matching folder for every known
// static route (e.g. dist/blog/index.html), so GitHub Pages serves those
// URLs with an actual 200 status instead of falling back to 404.html.
// Googlebot (and other crawlers) refuse to index a page that returns 404,
// even if the body content is valid — this is what makes those routes
// indexable at all.
//
// Keep this list in sync with the <Route> paths in src/App.tsx and the
// URLs in public/sitemap.xml.
//
// Public pages are also rendered in headless Chrome, so each index.html holds
// the page's real content and its own title, description, canonical, Open
// Graph tags and structured data. Crawlers that don't run JavaScript (Bing,
// AI crawlers, LinkedIn/Facebook/WhatsApp link previews) then see the actual
// page. Lesson modules (noindex, unlocked per learner) and the certificate page
// keep the plain app shell. If Chrome isn't available the shell is used for
// every route — set PRERENDER_STRICT=1 (as CI does) to fail instead.
import { execFile } from "node:child_process"
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import { createServer } from "node:http"
import { tmpdir } from "node:os"
import { extname, join, normalize } from "node:path"

const routes = [
  "blog",
  "certificate",
  "blog/how-financial-planning-helps-your-business-grow-faster",
  "blog/us-sales-tax-nexus-in-2026",
  "blog/bas-preparation-checklist-for-australian-businesses",
  "blog/payroll-superannuation-common-compliance-traps-in-australia",
  "blog/when-should-a-growing-business-outsource-its-accounting",
  "blog/quickbooks-vs-xero-which-fits-your-business-in-2026",
  "blog/1099-reporting-deadlines-you-cant-afford-to-miss",
  "blog/how-cpa-firms-use-outsourced-support-during-tax-season",
  "blog/will-ai-replace-accountants-in-2026",
  "blog/how-cpa-firms-can-use-ai-during-tax-season",
  "blog/ai-agents-vs-accounting-software-whats-the-difference",
  "blog/ai-powered-bank-reconciliation-how-it-works",
  "blog/how-ai-can-detect-accounting-errors-and-fraud",
  "blog/year-end-accounting-checklist-for-small-businesses",
  "blog/ai-vs-traditional-bookkeeping-which-is-better-for-small-businesses",
  "blog/how-to-improve-cash-flow-management-practical-strategies-for-business-growth",
  "blog/1099-reporting-deadlines-rules-and-common-mistakes-businesses-should-know",
  "blog/monthly-closing-process-a-complete-guide-for-businesses",
  "blog/why-your-bank-reconciliation-doesnt-match-and-what-its-really-telling-you",
  "learning",
  "learning/bookkeeping",
  "learning/bookkeeping/bookkeeping-basics-for-beginners",
  "learning/bookkeeping/bookkeeping-basics-for-beginners/progress",
  "learning/bookkeeping/bookkeeping-basics-for-beginners/modules/1",
  "learning/bookkeeping/double-entry-bookkeeping-explained",
  "learning/bookkeeping/chart-of-accounts-setup",
  "learning/bookkeeping/recording-journal-entries",
  "learning/bookkeeping/bank-reconciliation-fundamentals",
  "learning/bookkeeping/accounts-payable-management",
  "learning/bookkeeping/accounts-receivable-and-invoicing",
  "learning/bookkeeping/month-end-close-process",
  "learning/bookkeeping/payroll-basics-for-bookkeepers",
  "learning/bookkeeping/advanced-bookkeeping-and-adjusting-entries",
  "learning/taxation",
  "learning/taxation/learn-gst-in-india",
  "learning/taxation/gst-compliance-in-india",
  "learning/taxation/tds-compliance-in-india",
  "learning/taxation/income-tax-for-salaried-employees",
  "learning/taxation/income-tax-for-business-and-professionals",
  "learning/taxation/gst-input-tax-credit-and-reconciliation",
  "learning/payroll",
  "learning/payroll/payroll-processing-in-india",
  "learning/payroll/statutory-compliance-epf",
  "learning/payroll/statutory-compliance-esi",
  "learning/payroll/statutory-compliance-professional-tax",
  "learning/payroll/statutory-compliance-gratuity",
  "learning/payroll/statutory-compliance-bonus",
  "learning/payroll/statutory-compliance-labour-welfare-fund",
  "learning/payroll/statutory-compliance-minimum-wages",
  "learning/payroll/statutory-compliance-shops-and-establishments",
  "learning/payroll/statutory-compliance-maternity-benefit",
  "learning/payroll/statutory-compliance-posh",
  "learning/payroll/statutory-compliance-contract-labour",
  "learning/payroll/statutory-compliance-employees-compensation",
  "learning/payroll/statutory-compliance-leave",
  "learning/payroll/us-payroll",
  "learning/payroll/australia-payroll",
  "learning/payroll/uae-payroll",
  "learning/excel-for-accountants",
  "learning/excel-for-accountants/excel-mastery-for-accountants",
  "learning/excel-for-accountants/financial-modelling-in-excel",
  "learning/excel-for-accountants/power-query-and-power-bi-for-accountants",
  "learning/business-finance",
  "learning/business-finance/budgeting-and-cash-flow-forecasting",
  "learning/business-finance/working-capital-management",
  "learning/business-finance/cost-accounting-basics",
  "learning/financial-accounting",
  "learning/financial-accounting/financial-reporting",
  "learning/financial-accounting/financial-statement-analysis",
  "learning/financial-accounting/bank-reconciliation-and-month-end-close",
  "learning/financial-accounting/advanced-accounts-receivable-and-payable",
  "learning/financial-accounting/fixed-assets-and-depreciation",
  "learning/financial-accounting/inventory-accounting-and-valuation",
  "learning/financial-accounting/internal-controls-and-fraud-prevention",
  "learning/financial-accounting/revenue-recognition",
  "learning/financial-accounting/us-accounting",
  "learning/financial-accounting/australia-accounting",
  "learning/financial-accounting/uae-accounting",
  "learning/financial-accounting/property-accounting-in-india",
  "learning/financial-accounting/property-accounting-in-the-us",
  "about",
  "faq",
  "privacy-policy",
  "terms",
]

const distDir = join(process.cwd(), "dist")
const indexHtml = readFileSync(join(distDir, "index.html"), "utf-8")

// Posts published from the blog studio live in src/content/blog/*.json.
// Add their routes here and their URLs to the built sitemap automatically.
const contentDir = join(process.cwd(), "src", "content", "blog")
const studioSlugs = existsSync(contentDir)
  ? readdirSync(contentDir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(readFileSync(join(contentDir, f), "utf-8")).slug)
      .filter((slug) => typeof slug === "string" && /^[a-z0-9-]+$/.test(slug))
  : []
for (const slug of studioSlugs) {
  if (!routes.includes(`blog/${slug}`)) routes.push(`blog/${slug}`)
}

// Routes that get the plain app shell instead of a rendered page.
const shellOnly = new Set(["certificate"])

// Course lessons live in src/content/lessons/<category>--<slug>.ts, keyed by
// module index. Pre-render a page for every module that has lessons.
const lessonsDir = join(process.cwd(), "src", "content", "lessons")
if (existsSync(lessonsDir)) {
  for (const file of readdirSync(lessonsDir).filter((f) => f.endsWith(".ts"))) {
    const [category, slug] = file.replace(/\.ts$/, "").split("--")
    if (!category || !slug) continue
    const source = readFileSync(join(lessonsDir, file), "utf-8")
    for (const [, index] of source.matchAll(/^  (\d+): \[/gm)) {
      const route = `learning/${category}/${slug}/modules/${Number(index) + 1}`
      if (!routes.includes(route)) routes.push(route)
      shellOnly.add(route)
    }
  }
}

const sitemapPath = join(distDir, "sitemap.xml")
if (studioSlugs.length && existsSync(sitemapPath)) {
  let sitemap = readFileSync(sitemapPath, "utf-8")
  const entries = studioSlugs
    .map((slug) => `https://accountingpanda.com/blog/${slug}/`)
    .filter((loc) => !sitemap.includes(`<loc>${loc}</loc>`))
    .map((loc) => `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`)
    .join("")
  sitemap = sitemap.replace("</urlset>", `${entries}</urlset>`)
  writeFileSync(sitemapPath, sitemap)
}

// --- Render pages in headless Chrome -------------------------------------

const SITE_URL = "https://accountingpanda.com"
const strict = process.env.PRERENDER_STRICT === "1"

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ]
  return candidates.find((p) => p && existsSync(p))
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
}

/** Serves dist/ with every unknown path falling back to the app shell, like GitHub Pages' 404.html. */
function startServer() {
  const server = createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname)
    const file = normalize(join(distDir, pathname))
    const isFile = file.startsWith(distDir) && extname(file) && existsSync(file)
    if (isFile && !file.endsWith(".html")) {
      res.writeHead(200, { "Content-Type": MIME[extname(file).toLowerCase()] ?? "application/octet-stream" })
      res.end(readFileSync(file))
    } else {
      // Always the original shell, never an already-rendered page.
      res.writeHead(200, { "Content-Type": MIME[".html"] })
      res.end(indexHtml)
    }
  })
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)))
}

function render(chrome, url, profileDir) {
  return new Promise((resolve, reject) => {
    execFile(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-first-run",
        "--disable-extensions",
        "--hide-scrollbars",
        "--window-size=1280,900",
        `--user-data-dir=${profileDir}`,
        "--virtual-time-budget=10000",
        "--dump-dom",
        url,
      ],
      { maxBuffer: 32 * 1024 * 1024, timeout: 60_000 },
      (err, stdout) => (err ? reject(err) : resolve(stdout))
    )
  })
}

/** Checks a rendered page is the route we asked for, then tidies it for serving. */
function finish(html, route, base) {
  const canonical = `${SITE_URL}/${route ? `${route}/` : ""}`
  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) {
    throw new Error(`canonical isn't ${canonical} (the page may have redirected)`)
  }
  if (/<div id="root"><\/div>/.test(html)) throw new Error("the page rendered nothing")
  const cleaned = html
    // Vite adds these for lazily loaded chunks while the page runs; the app
    // adds them again in the visitor's browser when it needs them.
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    // Any other URL pointing at the local render server becomes site-relative.
    .split(base)
    .join("")
  if (cleaned.includes("127.0.0.1")) throw new Error("the page still references the local render server")
  return `<!doctype html>\n${cleaned.replace(/^<!doctype html>\s*/i, "")}`
}

function writePage(route, html) {
  const dir = route ? join(distDir, route) : distDir
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, "index.html"), html)
}

const toRender = ["", ...routes.filter((r) => !shellOnly.has(r))]
const rendered = new Map()
const chrome = findChrome()

if (!chrome) {
  const message = "Chrome wasn't found, so pages use the plain app shell (set CHROME_PATH to enable rendering)."
  if (strict) throw new Error(message)
  console.warn(message)
} else {
  const server = await startServer()
  const base = `http://127.0.0.1:${server.address().port}`
  const failures = []
  const queue = [...toRender]
  const worker = async () => {
    const profileDir = mkdtempSync(join(tmpdir(), "ap-prerender-"))
    try {
      for (let route = queue.shift(); route !== undefined; route = queue.shift()) {
        try {
          const html = await render(chrome, `${base}/${route ? `${route}/` : ""}`, profileDir)
          rendered.set(route, finish(html, route, base))
        } catch (err) {
          failures.push(`/${route}: ${err.message}`)
        }
      }
    } finally {
      rmSync(profileDir, { recursive: true, force: true })
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker))
  server.close()
  if (failures.length) {
    const message = `Couldn't render ${failures.length} page(s):\n  ${failures.join("\n  ")}`
    if (strict) throw new Error(message)
    console.warn(`${message}\nThose pages use the plain app shell.`)
  }
}

// GitHub Pages serves 404.html for unknown paths — it must stay the plain shell.
writeFileSync(join(distDir, "404.html"), indexHtml)
for (const route of ["", ...routes]) {
  if (route === "" && !rendered.has("")) continue // dist/index.html is already the shell
  writePage(route, rendered.get(route) ?? indexHtml)
}

console.log(
  `Wrote ${routes.length + 1} routes: ${rendered.size} rendered with full HTML, ${
    routes.length + 1 - rendered.size
  } as the app shell.`
)
