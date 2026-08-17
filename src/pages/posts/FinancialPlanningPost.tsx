import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  TrendingUp,
  ClipboardCheck,
  Target,
  LineChart,
  ShieldCheck,
  Landmark,
  PiggyBank,
  Building2,
  Lightbulb,
  Rocket,
  Settings2,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Newsletter } from "@/components/Newsletter"
import { asset } from "@/lib/asset"

const planIncludes = [
  "Revenue forecasting",
  "Expense management",
  "Cash flow planning",
  "Budget creation",
  "Investment planning",
  "Risk assessment",
  "Tax and compliance planning",
]

const ways = [
  {
    icon: TrendingUp,
    title: "Improves Cash Flow Management",
    intro:
      "Cash flow is the lifeblood of every business. Many profitable businesses struggle or fail due to poor cash flow management rather than lack of sales.",
    points: [
      "Predict cash inflows and outflows",
      "Avoid liquidity shortages",
      "Manage working capital efficiently",
      "Ensure timely payment of suppliers and employees",
    ],
    close:
      "When cash flow is under control, businesses can focus on growth instead of constantly dealing with financial emergencies.",
  },
  {
    icon: ClipboardCheck,
    title: "Supports Better Decision-Making",
    intro:
      "Business growth requires important decisions regarding hiring, expansion, equipment purchases, and marketing investments.",
    points: [
      "Evaluate investment opportunities",
      "Understand the financial impact of decisions",
      "Compare multiple growth strategies",
      "Reduce uncertainty and financial risks",
    ],
    close:
      "Data-driven decisions often lead to faster and more sustainable growth than decisions based on assumptions.",
  },
  {
    icon: Target,
    title: "Helps Set Realistic Growth Goals",
    intro:
      "Ambitious goals are important, but unrealistic targets can create operational and financial challenges.",
    points: [
      "Set achievable revenue targets",
      "Define realistic profit margins",
      "Allocate resources effectively",
      "Measure progress against goals",
    ],
    close:
      "Having clear financial milestones keeps the organization focused and aligned with its growth strategy.",
  },
  {
    icon: LineChart,
    title: "Enables Strategic Investments",
    intro:
      "Growth often requires investment in technology, infrastructure, marketing, and talent.",
    points: [
      "Available capital for expansion",
      "Expected return on investment (ROI)",
      "Funding requirements",
      "Priority areas for spending",
    ],
    close:
      "Instead of making reactive spending decisions, businesses can invest strategically to maximize growth potential.",
  },
  {
    icon: ShieldCheck,
    title: "Reduces Financial Risks",
    intro:
      "Every business faces risks such as economic downturns, market fluctuations, rising costs, and unexpected expenses.",
    points: [
      "Build emergency reserves",
      "Prepare contingency plans",
      "Monitor financial health indicators",
      "Reduce dependence on short-term borrowing",
    ],
    close:
      "Businesses that proactively manage risks recover faster and remain competitive during challenging periods.",
  },
  {
    icon: Landmark,
    title: "Improves Access to Funding",
    intro:
      "Investors, banks, and lenders want to see clear financial projections before providing capital.",
    points: [
      "Business viability",
      "Revenue growth potential",
      "Profitability forecasts",
      "Responsible financial management",
    ],
    close:
      "Companies with strong financial plans are more likely to secure funding needed for expansion and innovation.",
  },
  {
    icon: PiggyBank,
    title: "Enhances Profitability",
    intro:
      "Growth is not just about increasing revenue — it is also about improving profitability.",
    points: [
      "Unnecessary expenses",
      "Inefficient processes",
      "Low-performing products or services",
      "Opportunities for cost optimization",
    ],
    close:
      "By controlling costs while increasing revenue, businesses can achieve healthier profit margins and reinvest in future growth.",
  },
  {
    icon: Building2,
    title: "Strengthens Long-Term Business Stability",
    intro:
      "Rapid growth without proper financial planning can create operational and financial strain.",
    points: [
      "Sustainable expansion",
      "Balanced resource allocation",
      "Healthy debt management",
      "Consistent business performance",
    ],
    close:
      "Companies that grow with a financial strategy are more likely to maintain success over the long term.",
  },
]

const bestPractices = [
  "Create annual and quarterly budgets.",
  "Monitor cash flow regularly.",
  "Review financial reports monthly.",
  "Update forecasts based on market conditions.",
  "Invest in financial management software.",
  "Seek guidance from financial professionals when needed.",
  "Align financial goals with business objectives.",
]

const bottomLine = [
  { icon: Lightbulb, label: "Plan Smart" },
  { icon: Settings2, label: "Manage Well" },
  { icon: Rocket, label: "Grow Fast" },
  { icon: Trophy, label: "Succeed Long-Term" },
]

export function FinancialPlanningPost() {
  return (
    <>
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
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.6rem]">
            How Financial Planning Helps Your Business Grow Faster
          </h1>
          <p className="mt-4 text-base text-gray-500">
            A strong financial plan gives your business direction, control
            and confidence to scale sustainably and profitably.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Aug 16, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              10 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-financial-planning.png")}
            alt="Infographic: How Financial Planning Helps Your Business Grow Faster"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Every successful business, whether a startup or an established
            company, relies on one critical factor for sustainable growth:
            financial planning. While many business owners focus on
            increasing sales and acquiring customers, long-term success
            depends on how effectively finances are managed and allocated.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Financial planning provides a roadmap for achieving business
            goals, managing risks, and ensuring that resources are used
            efficiently. Companies that prioritize financial planning are
            better equipped to make informed decisions, seize growth
            opportunities, and navigate economic uncertainties.
          </p>

          <h2 className="mt-10 text-xl font-bold text-brand-heading sm:text-2xl">
            What Is Financial Planning?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Financial planning is the process of setting financial goals,
            creating budgets, forecasting future revenues and expenses,
            managing cash flow, and monitoring financial performance. It
            helps businesses understand their current financial position and
            prepare for future growth.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-heading">
            A strong financial plan includes:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {planIncludes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                {item}
              </li>
            ))}
          </ul>

          {/* 8 ways */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            8 Ways Financial Planning Drives Business Growth
          </h2>

          <div className="mt-6 space-y-8">
            {ways.map(({ icon: Icon, title, intro, points, close }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-6 shadow-sm sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green-light text-sm font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-brand-green" />
                      <h3 className="text-lg font-semibold text-brand-heading">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {intro}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {close}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Best practices */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Best Practices for Effective Financial Planning
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            To maximize the benefits of financial planning, businesses
            should:
          </p>
          <ol className="mt-4 space-y-2.5">
            {bestPractices.map((p, i) => (
              <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green">
                  {i + 1}
                </span>
                <span className="pt-0.5">{p}</span>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-base leading-relaxed text-gray-600">
            Financial planning is more than a budgeting exercise — it is a
            strategic tool that drives business growth. By improving cash
            flow management, reducing risks, supporting better decisions,
            and enabling strategic investments, financial planning creates a
            strong foundation for long-term success.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Businesses that consistently plan, monitor, and optimize their
            finances are better positioned to grow faster, adapt to changing
            market conditions, and achieve their goals with confidence.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-brand-heading">
            Growth doesn't happen by chance. It happens when financial
            planning turns business vision into actionable strategy.
          </p>

          {/* Bottom line banner */}
          <div className="mt-10 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
              The Bottom Line
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Financial planning turns your business vision into a clear
              roadmap.{" "}
              <span className="font-semibold text-white">
                Plan today, grow tomorrow.
              </span>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {bottomLine.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl bg-white/5 py-4 text-center"
                >
                  <Icon className="h-5 w-5 text-brand-green" />
                  <span className="text-xs font-medium text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Published by AccountingPanda.com — Building smart accounting
            solutions for modern businesses.
          </p>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Want a financial plan built for your business?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced accounting support.
              </p>
            </div>
            <Button className="shrink-0">
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>

      <Newsletter />
    </>
  )
}
