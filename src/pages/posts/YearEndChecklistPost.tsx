import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Landmark,
  FileText,
  Receipt,
  Users,
  Wrench,
  Boxes,
  BarChart3,
  ClipboardEdit,
  CreditCard,
  FolderCheck,
  TrendingUp,
  ShieldCheck,
  ListChecks,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const checklistSections = [
  {
    icon: Landmark,
    title: "1. Reconcile Bank & Credit Card Accounts",
    body: "Compare your accounting records with bank and credit card statements.",
    points: [
      "Identify missing transactions",
      "Resolve duplicate entries",
      "Investigate unexplained differences",
      "Record outstanding transactions",
    ],
  },
  {
    icon: FileText,
    title: "2. Review Accounts Receivable",
    body: "Make sure customer balances are accurate.",
    points: [
      "Send outstanding invoices",
      "Follow up on overdue payments",
      "Review aging reports",
      "Identify potentially uncollectible accounts",
    ],
  },
  {
    icon: Receipt,
    title: "3. Review Accounts Payable",
    body: "Check that all supplier bills and expenses have been recorded.",
    points: [
      "Enter missing vendor invoices",
      "Verify unpaid bills",
      "Reconcile vendor statements",
      "Record accrued expenses where appropriate",
    ],
  },
  {
    icon: Users,
    title: "4. Verify Payroll Records",
    body: "Review payroll-related accounts before closing the year.",
    points: [
      "Salaries and wages",
      "Payroll taxes",
      "Benefits",
      "Bonuses and commissions",
      "Employer liabilities",
    ],
  },
  {
    icon: Wrench,
    title: "5. Check Fixed Assets",
    body: "Review your equipment, vehicles, computers, and other fixed assets.",
    points: [
      "Add newly purchased assets",
      "Remove disposed assets",
      "Verify depreciation",
      "Reconcile the fixed asset register",
    ],
  },
  {
    icon: Boxes,
    title: "6. Review Inventory",
    body: "If your business maintains inventory, perform a physical count and compare it with accounting records. Investigate damaged, obsolete, missing, or slow-moving inventory.",
    points: [],
  },
]

const financialStatements = [
  "Profit & Loss Statement",
  "Balance Sheet",
  "Cash Flow Statement",
  "Accounts Receivable Aging",
  "Accounts Payable Aging",
]

const adjustmentItems = [
  "Accrued expenses",
  "Prepaid expenses",
  "Deferred revenue",
  "Depreciation",
  "Bad debt adjustments",
  "Inventory adjustments",
]

const taxDocItems = [
  "Revenue",
  "Business expenses",
  "Payroll",
  "Fixed assets",
  "Loans",
  "Investments",
  "Tax payments",
  "Supporting invoices and receipts",
]

const performanceQuestions = [
  "What generated the most revenue?",
  "Where did costs increase?",
  "Which customers are most profitable?",
  "Where can expenses be reduced?",
  "Is cash flow improving?",
]

const finalChecklist = [
  "Bank accounts reconciled",
  "Credit cards reconciled",
  "Receivables reviewed",
  "Payables reviewed",
  "Payroll verified",
  "Inventory counted",
  "Fixed assets updated",
  "Loans reconciled",
  "Adjusting entries recorded",
  "Financial statements reviewed",
  "Tax documents organized",
  "Records backed up",
]

export function YearEndChecklistPost() {
  return (
    <>
      <Seo
        title="Year-End Accounting Checklist for Small Businesses"
        description="A practical, step-by-step year-end accounting checklist for small businesses — reconciliations, payroll, fixed assets, tax prep, and a final close-out list."
        path="/blog/year-end-accounting-checklist-for-small-businesses"
        image={asset("assets/blog-year-end-checklist.jpg")}
        type="article"
        datePublished="2026-08-31"
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
            Year-End Accounting Checklist for Small Businesses: Close the
            Books With Confidence
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Year-end accounting doesn't have to be stressful. Here's a
            practical, step-by-step checklist to close your books
            accurately and start the new year with better data.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Aug 31, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              8 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-year-end-checklist.jpg")}
            alt="Infographic: Year-End Accounting Checklist for Small Businesses"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Year-end accounting doesn't have to be stressful.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            For small businesses, a structured year-end accounting process
            can help identify errors, improve financial visibility,
            prepare for tax filing, and set the foundation for a stronger
            new financial year.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-brand-heading">
            Here's a practical Year-End Accounting Checklist for Small
            Businesses.
          </p>

          {/* Checklist sections */}
          <div className="mt-8 space-y-4">
            {checklistSections.map(({ icon: Icon, title, body, points }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <h3 className="text-base font-semibold text-brand-heading">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>

                {points.length > 0 && (
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Financial statements */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                7. Review Financial Statements
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Analyze your:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {financialStatements.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Look for unusual fluctuations and unexpected balances.
            </p>
          </div>

          {/* Year-end adjustments */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ClipboardEdit className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                8. Record Year-End Adjustments
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Depending on your accounting method and circumstances,
              review items such as:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {adjustmentItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Loans & credit */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                9. Review Loans &amp; Credit Accounts
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Reconcile loan balances and separate principal from interest
              where required. Also verify credit card and line-of-credit
              balances.
            </p>
          </div>

          {/* Tax filing prep */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <FolderCheck className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                10. Prepare for Tax Filing
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Organize the documentation your accountant or tax
              professional may need. Keep records of:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {taxDocItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business performance */}
          <div className="mt-6 rounded-2xl bg-brand-green-light p-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                11. Review Business Performance
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-brand-heading/80">
              Year-end is more than a compliance exercise — it's a
              planning opportunity. Ask:
            </p>
            <ul className="mt-3 space-y-1.5">
              {performanceQuestions.map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm text-brand-heading/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* Backup */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                12. Back Up &amp; Secure Your Records
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Make sure financial data and supporting documents are
              securely backed up and access is limited to authorized
              users.
            </p>
          </div>

          {/* Business advantage */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Turn Year-End Accounting Into a Business Advantage
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            A clean year-end close gives small business owners a clearer
            picture of profitability, cash flow, liabilities, and
            financial performance.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-gray-100 bg-brand-bg p-5">
            <Sparkles className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-green" />
            <p className="text-sm leading-relaxed text-gray-600">
              With modern accounting software and AI-powered tools,
              businesses can automate reconciliation, detect unusual
              transactions, identify missing entries, and reduce manual
              bookkeeping work.
            </p>
          </div>
          <p className="mt-4 text-base font-medium leading-relaxed text-brand-heading">
            The goal isn't simply to close the books. It's to start the
            next year with better data and better decisions.
          </p>

          {/* Final checklist */}
          <div className="mt-10 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-white" />
              <h2 className="text-lg font-bold text-white">Final Checklist</h2>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {finalChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-gray-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-base leading-relaxed text-gray-600">
            A strong year-end close today can lead to stronger financial
            decisions tomorrow.
          </p>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Want help closing your books this year?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced year-end accounting and
                reconciliation support built for growing businesses.
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
