import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  LineChart,
  FileText,
  Scissors,
  HandCoins,
  Boxes,
  Scale,
  ShieldCheck,
  Gauge,
  Cpu,
  Compass,
  MessageCircleQuestion,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const forecastItems = [
  "Expected customer collections",
  "Supplier payments",
  "Payroll",
  "Rent and utilities",
  "Loan repayments",
  "Taxes",
  "Other operating expenses",
  "Planned investments",
]

const receivableActions = [
  "Set clear payment terms",
  "Send invoices immediately after delivering products or services",
  "Automate invoice reminders",
  "Monitor overdue invoices",
  "Follow up consistently with customers",
  "Offer convenient payment methods",
  "Consider deposits or milestone payments for large projects",
]

const expenseReviewItems = [
  "Unused software subscriptions",
  "Unnecessary administrative costs",
  "Excessive inventory",
  "Expensive vendor contracts",
  "Non-essential spending",
  "Recurring expenses that no longer provide value",
]

const payableNegotiations = [
  "Longer payment terms",
  "Better supplier pricing",
  "Installment arrangements",
  "Early-payment discounts when financially beneficial",
]

const inventoryAnalysis = [
  "Fast-moving products",
  "Slow-moving inventory",
  "Dead stock",
  "Reorder levels",
  "Seasonal demand",
]

const reserveScenarios = [
  "Sudden equipment repairs",
  "Slow customer collections",
  "Seasonal downturns",
  "Unexpected tax obligations",
  "Economic uncertainty",
  "Emergency operating expenses",
]

const kpis = [
  "Operating cash flow",
  "Free cash flow",
  "Accounts receivable days",
  "Accounts payable days",
  "Inventory turnover",
  "Cash conversion cycle",
  "Current ratio",
  "Cash runway",
]

const automationAreas = [
  "Invoicing",
  "Payment reminders",
  "Expense tracking",
  "Bank reconciliation",
  "Cash flow reporting",
  "Financial dashboards",
  "Recurring payments",
]

const decisionQuestions = [
  "Should we hire another employee?",
  "Can we afford new equipment?",
  "Should we offer customers longer payment terms?",
  "Is it the right time to expand?",
  "Should we take a business loan?",
]

const strategies = [
  {
    icon: LineChart,
    title: "1. Create a Cash Flow Forecast",
    body: "One of the most effective ways to manage cash is to forecast it before problems occur. Prepare a weekly or monthly cash flow forecast that tracks:",
    points: forecastItems,
    close: "A cash flow forecast helps management identify potential shortages early and take action before they become critical.",
  },
  {
    icon: FileText,
    title: "2. Improve Accounts Receivable",
    body: "Late customer payments can create significant pressure on cash flow. Businesses should:",
    points: receivableActions,
    close: "The faster you collect money, the healthier your cash position becomes.",
  },
  {
    icon: Scissors,
    title: "3. Control Operating Expenses",
    body: "Reducing unnecessary expenses can immediately improve cash flow. Review expenses regularly and identify:",
    points: expenseReviewItems,
    close: "The goal isn't simply to cut costs. The goal is to spend strategically while protecting business operations and growth.",
  },
  {
    icon: HandCoins,
    title: "4. Manage Accounts Payable Strategically",
    body: "Paying suppliers too early can unnecessarily reduce available cash. Where appropriate, negotiate:",
    points: payableNegotiations,
    close: "However, businesses should avoid delaying payments in a way that damages supplier relationships or creates penalties.",
  },
  {
    icon: Boxes,
    title: "5. Optimize Inventory",
    body: "For product-based businesses, too much inventory can tie up significant amounts of cash. Analyze:",
    points: inventoryAnalysis,
    close: "A leaner inventory strategy can release cash while reducing storage and carrying costs.",
  },
]

export function CashFlowManagementPost() {
  return (
    <>
      <Seo
        title="How to Improve Cash Flow Management: Practical Strategies for Business Growth"
        description="Practical strategies to improve cash flow — forecasting, receivables, expenses, payables, inventory, reserves, KPIs, and automation — for sustainable business growth."
        path="/blog/how-to-improve-cash-flow-management-practical-strategies-for-business-growth"
        image={asset("assets/blog-cash-flow-management.jpg")}
        type="article"
        datePublished="2026-09-04"
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
            How to Improve Cash Flow Management: Practical Strategies for
            Business Growth
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Cash flow is the lifeblood of every business. Here are 10
            practical strategies to keep enough liquidity to support
            growth, not just profit on paper.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Sep 4, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              9 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-cash-flow-management.jpg")}
            alt="Infographic: How to Improve Cash Flow Management — Practical Strategies for Business Growth"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Cash flow is the lifeblood of every business.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            A company can be profitable on paper and still struggle to pay
            salaries, suppliers, taxes, or operating expenses if cash is
            not managed properly.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Good cash flow management isn't just about having more
            money — it's about knowing when money comes in, when it goes
            out, and how to maintain enough liquidity to support the
            business.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-brand-heading">
            Here are practical strategies businesses can use to improve
            cash flow management.
          </p>

          {/* Strategies 1-5 */}
          <div className="mt-8 space-y-4">
            {strategies.map(({ icon: Icon, title, body, points, close }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <h3 className="text-base font-semibold text-brand-heading">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {points.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{close}</p>
              </div>
            ))}
          </div>

          {/* Separate profit from cash flow */}
          <div className="mt-6 rounded-2xl bg-brand-green-light p-6">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                6. Separate Profit From Cash Flow
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-brand-heading/80">
              One of the most important financial lessons for business
              owners is:
            </p>
            <p className="mt-2 text-base font-semibold text-brand-heading">
              Profit is not the same as cash.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-heading/80">
              Revenue may be recorded today, while the customer may pay
              30, 60, or 90 days later. Similarly, a business may have
              expenses that affect cash at different times.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-heading/80">
              That's why management should monitor both:
            </p>
            <div className="mt-2 rounded-xl bg-white p-4 text-center text-sm font-semibold text-brand-heading">
              Profitability + Cash Position
            </div>
            <p className="mt-2 text-xs text-gray-500">
              rather than relying only on the income statement.
            </p>
          </div>

          {/* Build a cash reserve */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                7. Build a Cash Reserve
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Businesses should aim to maintain an emergency cash buffer.
              A reserve can help manage unexpected situations such as:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {reserveScenarios.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              A strong cash reserve gives management more flexibility and
              reduces dependence on expensive short-term borrowing.
            </p>
          </div>

          {/* Monitor KPIs */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                8. Monitor Cash Flow KPIs
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              What gets measured gets managed. Important cash flow metrics
              include:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {kpis.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Regularly reviewing these metrics can help identify problems
              before they become serious.
            </p>
          </div>

          {/* Automation */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                9. Use Automation and Technology
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Manual financial processes can create delays and errors.
              Modern accounting and finance tools can help businesses
              automate:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {automationAreas.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Automation allows finance teams to spend less time on
              repetitive tasks and more time on financial analysis and
              decision-making.
            </p>
          </div>

          {/* Every decision */}
          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                10. Make Cash Flow Part of Every Business Decision
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Before making a major decision, ask:
            </p>
            <p className="mt-2 text-sm font-medium text-brand-heading">
              How will this affect cash flow?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              For example:
            </p>
            <ul className="mt-3 space-y-1.5">
              {decisionQuestions.map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Understanding the cash impact of each decision helps
              businesses grow sustainably.
            </p>
          </div>

          {/* Final thoughts */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Final Thoughts
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Strong cash flow management gives businesses something
            extremely valuable: financial flexibility.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The objective isn't simply to increase the amount of cash in
            the bank. It's to create a system where the business can:
          </p>

          <div className="mt-4 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <p className="text-center text-sm font-semibold leading-relaxed text-white sm:text-base">
              Collect faster → Spend smarter → Forecast better → Maintain
              reserves → Invest confidently
            </p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Businesses that actively manage cash flow are better
            positioned to handle uncertainty, take advantage of
            opportunities, and achieve sustainable growth.
          </p>
          <p className="mt-3 text-base font-medium leading-relaxed text-brand-heading">
            Cash flow isn't just an accounting number. It's a strategic
            business advantage.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-brand-green-light p-5">
            <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <p className="text-sm leading-relaxed text-brand-heading">
              What is one cash flow challenge your business faces
              today — late payments, rising expenses, inventory, or
              forecasting?
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-bg p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Want help managing your cash flow?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced bookkeeping and cash
                flow reporting built for growing businesses.
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
