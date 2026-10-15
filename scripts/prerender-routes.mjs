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
  "learning/bookkeeping/quickbooks-for-bookkeepers",
  "learning/bookkeeping/xero-for-bookkeepers",
  "learning/bookkeeping/payroll-basics-for-bookkeepers",
  "learning/bookkeeping/advanced-bookkeeping-and-adjusting-entries",
  "learning/taxation",
  "learning/taxation/learn-gst-in-india",
  "learning/taxation/gst-compliance-in-india",
  "learning/taxation/tds-compliance-in-india",
  "learning/taxation/income-tax-for-salaried-employees",
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
  "learning/excel-for-accountants",
  "learning/excel-for-accountants/excel-mastery-for-accountants",
  "learning/excel-for-accountants/financial-modelling-in-excel",
  "learning/business-finance",
  "learning/business-finance/budgeting-and-cash-flow-forecasting",
  "learning/business-finance/working-capital-management",
  "learning/financial-accounting",
  "learning/financial-accounting/financial-reporting",
  "learning/financial-accounting/financial-statement-analysis",
  "learning/financial-accounting/bank-reconciliation-and-month-end-close",
  "learning/financial-accounting/advanced-accounts-receivable-and-payable",
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
