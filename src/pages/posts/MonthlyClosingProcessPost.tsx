import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  ClipboardList,
  Database,
  Landmark,
  CreditCard,
  FileText,
  Receipt,
  ClipboardEdit,
  Users,
  Building2,
  BookOpenCheck,
  TrendingUp,
  FileBarChart,
  ListChecks,
  Sparkles,
  Lightbulb,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const closeIncludes = [
  "Recording all business transactions",
  "Reconciling bank and credit-card accounts",
  "Reviewing accounts receivable and payable",
  "Recording accruals and adjustments",
  "Reconciling payroll",
  "Reviewing fixed assets",
  "Checking loans and liabilities",
  "Reviewing the general ledger",
  "Preparing financial statements",
  "Investigating unusual balances or variances",
]

const steps = [
  {
    icon: Database,
    title: "Step 1 — Collect and Organize Financial Data",
    body: "Start by ensuring that all transactions for the month have been captured. This may include:",
    points: [
      "Bank transactions",
      "Credit-card transactions",
      "Sales invoices",
      "Vendor bills",
      "Customer payments",
      "Payroll",
      "Loan transactions",
      "Expense receipts",
      "Asset purchases",
    ],
    ai: "AccountingPanda can help organize accounting data and identify transactions that may require review, reducing the amount of manual bookkeeping required before the close.",
  },
  {
    icon: Landmark,
    title: "Step 2 — Reconcile Bank Accounts",
    body: "Bank reconciliation is a critical part of the monthly close. Compare the accounting records with bank statements and identify:",
    points: [
      "Missing transactions",
      "Duplicate entries",
      "Bank fees",
      "Outstanding checks",
      "Deposits in transit",
      "Incorrect transaction amounts",
    ],
    close: "A reconciliation should ultimately explain the difference between the bank balance and the accounting balance.",
    ai: "AI-assisted transaction matching can help identify likely matches and highlight exceptions that require human review.",
  },
  {
    icon: CreditCard,
    title: "Step 3 — Reconcile Credit Cards",
    body: "Credit-card accounts should also be reconciled every month. Review:",
    points: ["Purchases", "Payments", "Interest charges", "Fees", "Refunds", "Unusual transactions"],
    ai: "AccountingPanda can assist with transaction classification and reconciliation workflows while allowing accountants to review exceptions.",
  },
  {
    icon: FileText,
    title: "Step 4 — Review Accounts Receivable",
    body: "Next, review customer balances. Check:",
    points: [
      "Outstanding invoices",
      "Overdue receivables",
      "Customer payments",
      "Credit notes",
      "Unapplied cash",
      "Bad-debt considerations",
    ],
    close: "An aging report can help identify customers whose balances require attention.",
    ai: "An AI accountant can help surface unusual receivable balances and transactions that deserve additional review.",
  },
  {
    icon: Receipt,
    title: "Step 5 — Review Accounts Payable",
    body: "Review all outstanding vendor bills and supplier balances. Check for:",
    points: [
      "Unrecorded bills",
      "Duplicate invoices",
      "Past-due vendor balances",
      "Incorrect amounts",
      "Missing payments",
      "Vendor credits",
    ],
    close: "This helps ensure expenses and liabilities are recorded in the correct accounting period.",
  },
  {
    icon: ClipboardEdit,
    title: "Step 6 — Record Accruals and Adjusting Entries",
    body: "Some expenses or revenues may belong to the current month even though the transaction has not yet been fully processed. Examples include:",
    points: ["Utilities", "Professional fees", "Payroll-related expenses", "Interest", "Rent", "Insurance", "Other recurring expenses"],
    ai: "AccountingPanda can assist in identifying recurring patterns and preparing suggested accounting entries for review.",
    note: "AI-generated entries should be reviewed and approved according to your accounting policies before posting.",
  },
  {
    icon: Users,
    title: "Step 7 — Review Payroll",
    body: "Payroll should be reconciled with the accounting records. Verify:",
    points: ["Gross wages", "Employee withholdings", "Employer payroll taxes", "Benefits", "Payroll liabilities", "Payroll payments"],
    close: "The payroll register, general ledger, and payroll tax records should agree.",
  },
  {
    icon: Building2,
    title: "Step 8 — Reconcile Fixed Assets and Loans",
    body: "Businesses should also review long-term balances.",
    sections: [
      { heading: "Fixed Assets", items: ["Asset purchases", "Asset disposals", "Depreciation", "Accumulated depreciation"] },
      { heading: "Loans", items: ["Principal payments", "Interest expense", "Outstanding principal", "Current vs. long-term portions"] },
    ],
    close: "These reviews help prevent balance-sheet accounts from becoming outdated.",
  },
  {
    icon: BookOpenCheck,
    title: "Step 9 — Review the General Ledger",
    body: "Before closing the month, review the general ledger for unusual activity. Look for:",
    points: [
      "Large unexpected transactions",
      "Negative balances",
      "Duplicate entries",
      "Unusual journal entries",
      "Uncategorized transactions",
      "Significant month-over-month changes",
    ],
    ai: "AI can help identify transactions or account balances that appear unusual based on historical patterns and configured rules. Instead of manually reviewing every transaction equally, accountants can focus more attention on exceptions.",
  },
  {
    icon: TrendingUp,
    title: "Step 10 — Perform Variance Analysis",
    body: "Compare the current month with previous month, same month last year, budget, and forecast. Examples:",
    points: [
      "Revenue: Actual revenue vs. budget",
      "Payroll: Current payroll expense vs. previous month",
      "Operating expenses: Actual expenses vs. expected expenses",
    ],
    close: "Variance analysis helps management understand what changed and why.",
  },
  {
    icon: FileBarChart,
    title: "Step 11 — Prepare Financial Statements",
    body: "Once reconciliations and adjustments are complete, prepare:",
    points: [
      "Profit & Loss Statement — shows revenue, expenses, and profitability",
      "Balance Sheet — shows assets, liabilities, and equity",
      "Cash Flow Statement — shows how cash moved during the period",
    ],
    ai: "AccountingPanda can help organize accounting data and support reporting workflows so accountants and business owners can access cleaner financial information.",
  },
]

const checklist = [
  "Bank accounts reconciled",
  "Credit cards reconciled",
  "Accounts receivable reviewed",
  "Accounts payable reviewed",
  "Payroll reconciled",
  "Accruals recorded",
  "Prepaid expenses reviewed",
  "Fixed assets reconciled",
  "Loans reconciled",
  "Tax liabilities reviewed",
  "General ledger reviewed",
  "Unusual transactions investigated",
  "Variances analyzed",
  "Financial statements prepared",
  "Management review completed",
  "Period closed",
]

const aiFits = [
  { title: "Transaction categorization", body: "Suggest accounting categories based on transaction information and historical patterns." },
  { title: "Reconciliation assistance", body: "Identify potential matches and exceptions." },
  { title: "Journal-entry suggestions", body: "Help prepare recurring or adjustment entries for review." },
  { title: "Anomaly detection", body: "Highlight unusual transactions and account movements." },
  { title: "Financial analysis", body: "Summarize significant changes and potential variances." },
  { title: "Month-end checklist management", body: "Track closing tasks and identify incomplete areas." },
]

const comparisonRows = [
  { traditional: "Manual transaction review", ai: "AI-assisted classification" },
  { traditional: "Manual matching", ai: "Suggested transaction matches" },
  { traditional: "Spreadsheet-heavy workflows", ai: "Centralized accounting workflow" },
  { traditional: "Manual exception identification", ai: "AI-supported anomaly detection" },
  { traditional: "Repeated journal entries", ai: "Suggested recurring entries" },
  { traditional: "Manual variance investigation", ai: "Automated variance insights" },
  { traditional: "Scattered closing checklists", ai: "Structured close workflow" },
]

const bestPractices = [
  { title: "Close continuously", body: "Don't wait until the last day of the month to start reviewing transactions." },
  { title: "Standardize the checklist", body: "Use the same closing procedure every month." },
  { title: "Reconcile regularly", body: "Frequent reconciliation makes month-end issues easier to identify." },
  { title: "Focus on exceptions", body: "Use automation and AI to identify transactions that require human attention." },
  { title: "Maintain an approval process", body: "AI suggestions should have appropriate human review and approval." },
  { title: "Document adjustments", body: "Every significant adjustment should have supporting documentation." },
  { title: "Review trends", body: "Don't just ask whether the books balance. Ask what changed and why." },
]

export function MonthlyClosingProcessPost() {
  return (
    <>
      <Seo
        title="Monthly Closing Process: A Complete Guide for Businesses with AccountingPanda AI Accountant"
        description="An 11-step monthly close process, a full closing checklist, where AI fits in month-end close, a traditional-vs-AI-assisted comparison, and best practices for a successful close."
        path="/blog/monthly-closing-process-a-complete-guide-for-businesses"
        image={asset("assets/blog-monthly-closing-process.jpg")}
        type="article"
        datePublished="2026-09-08"
      />

      {/* Header */}
      <section className="bg-brand-bg py-14 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand-green"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <span className="mt-6 inline-block rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            BOOKKEEPING
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.4rem]">
            Monthly Closing Process: A Complete Guide for Businesses with
            AccountingPanda AI Accountant
          </h1>
          <p className="mt-4 text-base text-gray-500">
            An 11-step month-end close process, a full closing checklist,
            and where an AI accountant fits in — without losing human
            oversight.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Sep 8, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              11 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <img
              src={asset("assets/blog-monthly-closing-process.jpg")}
              alt="Infographic: Monthly Closing Process — A Complete Guide for Businesses with AccountingPanda AI Accountant"
              className="w-full transition-transform duration-300 ease-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            The monthly closing process is one of the most important
            routines in business accounting.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            It ensures that your books are accurate, reconciled, complete,
            and ready for financial reporting. But for many businesses,
            month-end close still involves spreadsheets, manual
            reconciliations, repeated data entry, and hours of reviewing
            transactions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            With an AI-powered accountant like AccountingPanda, businesses
            can streamline many repetitive accounting tasks and make the
            monthly close process faster and more organized.
          </p>

          {/* What is monthly closing */}
          <div className="mt-10 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-brand-green" />
              <h2 className="text-lg font-bold text-brand-heading">
                What Is the Monthly Closing Process?
              </h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Monthly closing is the process of reviewing and finalizing a
              company's accounting records for a specific month. A
              typical close includes:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {closeIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              The goal is to make sure the financial records accurately
              represent the business before the month is officially
              closed.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-8 space-y-4">
            {steps.map(({ icon: Icon, title, body, points, sections, close, ai, note }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <h3 className="text-base font-semibold text-brand-heading">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>

                {points && (
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {sections && (
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {sections.map((s) => (
                      <div key={s.heading} className="rounded-xl bg-brand-bg p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                          {s.heading}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {s.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {close && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{close}</p>
                )}

                {ai && (
                  <div className="mt-3 flex items-start gap-2 rounded-xl bg-brand-green-light p-4">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <p className="text-sm leading-relaxed text-brand-heading">{ai}</p>
                  </div>
                )}

                {note && (
                  <p className="mt-2 text-xs font-medium text-amber-600">
                    Important: {note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="mt-10 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-white" />
              <h2 className="text-lg font-bold text-white">Monthly Closing Checklist</h2>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-gray-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Where AI fits */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Where AI Fits Into the Monthly Close
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            AI doesn't have to replace accountants. Instead, it can help
            accountants spend less time on repetitive work and more time
            on analysis, controls, and decision-making.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            A modern AI-assisted workflow can help with:
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aiFits.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-brand-heading">{item.title}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Traditional Close vs. AI-Assisted Close
          </h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-bg text-left">
                    <th className="px-4 py-3 font-semibold text-brand-heading">Traditional Process</th>
                    <th className="px-4 py-3 font-semibold text-brand-green">AI-Assisted Process</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.traditional} className="border-t border-gray-100">
                      <td className="px-4 py-3 text-gray-600">{row.traditional}</td>
                      <td className="px-4 py-3 text-gray-600">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            The objective isn't simply to "automate accounting." The
            objective is to create a{" "}
            <span className="font-semibold text-brand-heading">
              more consistent, controlled, and reviewable accounting
              process.
            </span>
          </p>

          {/* Best practices */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Best Practices for a Successful Monthly Close
          </h2>
          <ol className="mt-5 space-y-3">
            {bestPractices.map((item, i) => (
              <li key={item.title} className="flex items-start gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-gray-600">
                  <span className="font-semibold text-brand-heading">{item.title}.</span>{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ol>

          {/* Future of close */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-brand-green-light p-6">
            <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <div>
              <h2 className="text-lg font-bold text-brand-heading">
                The Future of Month-End Close
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-heading/80">
                The future of accounting is moving from manual data
                processing toward intelligent financial operations.
                Instead of spending hours searching for errors,
                accountants can use AI to help identify exceptions,
                organize information, prepare suggestions, and surface
                insights.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-heading/80">
                That's where AccountingPanda AI Accountant can fit into
                the modern accounting workflow.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-heading">
                The accountant remains in control. AI helps handle the
                repetitive work. And business owners get access to
                financial information that is easier to understand and
                act on.
              </p>
            </div>
          </div>

          {/* Final takeaway */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Final Takeaway
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            A strong monthly closing process isn't just about closing the
            books. It's about creating accurate financial information
            that businesses can trust.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            With a structured checklist, regular reconciliations,
            standardized procedures, and AI-assisted accounting
            workflows, businesses can make month-end close more efficient
            while maintaining appropriate human oversight.
          </p>

          <div className="mt-6 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <p className="text-base font-semibold leading-relaxed text-white">
                Close faster. Review smarter. Understand your numbers
                better — with AccountingPanda AI Accountant.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Want a faster, more organized month-end close?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced bookkeeping and
                AI-enabled closing workflows built for growing businesses.
              </p>
            </div>
            <Button className="shrink-0" asChild>
              <a href={CONSULTATION_MAILTO}>
                Chat to an Expert
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </article>

      <Newsletter />
    </>
  )
}
