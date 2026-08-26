import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Clock,
  TrendingUp,
  BarChart3,
  FileWarning,
  Users,
  Cpu,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const growthNeeds = [
  "Accounts payable management",
  "Accounts receivable tracking",
  "Bank reconciliation",
  "Payroll processing",
  "Financial reporting",
  "Cash-flow monitoring",
  "Tax preparation support",
  "Budgeting and forecasting",
]

const signs = [
  {
    icon: Clock,
    title: "Your Accounting Takes Too Much Time",
    body: "If you or your management team are spending hours every week dealing with invoices, reconciliations, expenses, payroll, and financial reports, it may be time to consider outsourcing. Your time is better spent on customers, strategy, sales, and business growth.",
  },
  {
    icon: TrendingUp,
    title: "Your Business Is Growing Rapidly",
    body: "More customers and transactions mean more accounting work. Outsourcing can provide accounting support without immediately building a large internal finance department.",
  },
  {
    icon: BarChart3,
    title: "You Need Better Financial Visibility",
    body: "Growth decisions require reliable financial information. Professional accounting support gives business owners better information for planning investments, hiring employees, managing expenses, and controlling cash flow.",
  },
  {
    icon: FileWarning,
    title: "You Are Making More Accounting Errors",
    body: "As transaction volume increases, manual processes can create mistakes. Incorrect categorization, missed invoices, unreconciled bank transactions, payroll errors, or delayed reports can affect decision-making and potentially create tax and compliance problems. A structured accounting process can reduce these risks.",
  },
  {
    icon: Users,
    title: "You Need Expertise Without Full-Time Hiring Costs",
    body: "Hiring an experienced accountant or finance team can be expensive for a growing company. Outsourcing gives businesses access to accounting expertise while allowing them to scale services according to their needs — starting with bookkeeping and gradually adding payroll, reporting, tax support, budgeting, or financial analysis.",
  },
  {
    icon: Cpu,
    title: "Technology and AI Are Changing Accounting",
    body: "Modern accounting isn't just about recording transactions. Cloud accounting, automation, and AI can help businesses streamline repetitive tasks, identify unusual transactions, organize financial information, and generate useful insights. The goal isn't simply to outsource accounting — it's to build a smarter and more scalable financial operation.",
  },
]

const visibilityFlow = ["Revenue", "Expenses", "Profitability", "Cash Flow", "Financial Performance"]

export function OutsourceAccountingPost() {
  return (
    <>
      <Seo
        title="When Should a Growing Business Outsource Its Accounting?"
        description="The signs it's time to hand bookkeeping and reporting to a dedicated team — and how to make the transition smooth."
        path="/blog/when-should-a-growing-business-outsource-its-accounting"
        image={asset("assets/blog-when-to-outsource.jpg")}
        type="article"
        datePublished="2026-07-09"
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
            BUSINESS GROWTH
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.4rem]">
            When Should a Growing Business Outsource Its Accounting?
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Growth is exciting — but it also brings more financial
            complexity. Here's how to tell it's time to outsource.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Jul 9, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              4 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-when-to-outsource.jpg")}
            alt="Infographic: When Should a Growing Business Outsource Its Accounting?"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            As a business grows, accounting can quickly move beyond basic
            bookkeeping. Invoices increase, payroll becomes more
            complicated, tax deadlines approach, financial reporting
            becomes more important, and business owners need accurate
            numbers to make better decisions.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-brand-heading">
            So, when is it time to outsource accounting?
          </p>

          {/* Signs */}
          <div className="mt-10 space-y-4">
            {signs.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green-light text-sm font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-brand-green" />
                      <h3 className="text-base font-semibold text-brand-heading">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {body}
                    </p>

                    {title === "Your Business Is Growing Rapidly" && (
                      <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                        {growthNeeds.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {title === "You Need Better Financial Visibility" && (
                      <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-brand-bg p-4">
                        {visibilityFlow.map((step, idx) => (
                          <span key={step} className="flex items-center gap-2">
                            <span className="rounded-full border border-brand-green/40 bg-white px-3 py-1.5 text-xs font-semibold text-brand-heading">
                              {step}
                            </span>
                            {idx < visibilityFlow.length - 1 && (
                              <ArrowRight className="h-3.5 w-3.5 text-gray-300" />
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* When should you outsource */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            When Should You Outsource?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            There isn't one revenue number that determines when a business
            should outsource. A better question is:
          </p>
          <div className="mt-5 flex items-start gap-3 rounded-2xl bg-brand-navy p-6">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <p className="text-base font-medium leading-relaxed text-white">
              "Is accounting becoming a distraction, a bottleneck, or a
              source of financial risk?"
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            If the answer is yes, outsourcing may be worth considering.
          </p>

          {/* Final thought */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Final Thought
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Your accounting system should grow with your business — not
            slow it down. The right combination of accounting expertise,
            technology, automation, and AI can help growing businesses
            spend less time managing financial administration and more
            time building the company.
          </p>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Is accounting becoming a bottleneck for your business?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced bookkeeping and
                accounting support built to scale with you.
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
