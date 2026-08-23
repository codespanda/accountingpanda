import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Monitor,
  Calculator,
  FolderOpen,
  ClipboardList,
  Bell,
  ShieldCheck,
  ShieldAlert,
  Lightbulb,
  Check,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const capacityChallenges = [
  "Collecting and organizing client documents",
  "Entering tax data",
  "Reconciling financial information",
  "Preparing workpapers",
  "Reviewing supporting schedules",
  "Tracking missing information",
  "Responding to client questions",
  "Managing e-file submissions",
  "Handling rejected returns and corrections",
  "Preparing extensions and follow-up work",
]

const outsourcedTasks = [
  {
    icon: Monitor,
    title: "1. Data Entry & Tax Preparation Support",
    body: "A support team can help organize client information and enter data into the firm's tax software according to established processes. This allows CPAs and senior tax professionals to spend more time reviewing complex issues rather than performing repetitive administrative tasks.",
    points: [] as string[],
  },
  {
    icon: Calculator,
    title: "2. Bookkeeping & Reconciliation",
    body: "Clean books are essential for business tax preparation. Outsourced bookkeepers can help with:",
    points: [
      "Bank reconciliations",
      "Transaction categorization",
      "Accounts payable and receivable",
      "General ledger cleanup",
      "Financial statement preparation",
      "Year-end adjustments",
    ],
    close: "Better bookkeeping can make the tax preparation process smoother and reduce unnecessary back-and-forth.",
  },
  {
    icon: FolderOpen,
    title: "3. Document Organization",
    body: "Tax season often involves dozens of documents from different sources. An outsourced support team can help organize:",
    points: [
      "W-2s",
      "1099s",
      "Bank statements",
      "Brokerage statements",
      "Business records",
      "Expense documentation",
      "Prior-year returns",
      "Supporting schedules",
    ],
    close: "The goal is simple: make the information easier for the tax professional to review.",
  },
  {
    icon: ClipboardList,
    title: "4. Tax Workpaper Preparation",
    body: "Workpapers provide the supporting documentation behind tax return numbers. Outsourced professionals can assist with preparing standardized workpapers, schedules, and supporting calculations so the CPA can focus on review and professional judgment.",
    points: [],
  },
  {
    icon: Bell,
    title: "5. Client Follow-Up",
    body: "Missing information is one of the biggest sources of delay during tax season. A dedicated support team can help track outstanding documents and follow up with clients based on the firm's established procedures. This can free CPAs from spending valuable hours chasing paperwork.",
    points: [],
  },
]

const workflowSteps = [
  "Client",
  "Document Collection",
  "Outsourced Processing",
  "Workpapers",
  "CPA Review",
  "Client Approval",
  "E-Filing",
  "Post-Filing Support",
]

const benefits = [
  "Increased capacity",
  "Lower operational pressure",
  "Faster turnaround times",
  "Reduced repetitive work for CPAs",
  "More predictable staffing",
  "Better focus on advisory services",
  "Ability to serve more clients",
  "Improved workflow consistency",
]

const advisoryFocus = [
  "Tax planning",
  "Business advisory",
  "Cash-flow planning",
  "Entity structure",
  "Financial analysis",
  "Growth strategy",
  "Retirement planning",
  "Client relationship management",
]

export function CPAOutsourcedSupportPost() {
  return (
    <>
      <Seo
        title="How CPA Firms Use Outsourced Support During Tax Season"
        description="A look at how accounting and CPA firms extend their capacity during peak season without adding full-time headcount."
        path="/blog/how-cpa-firms-use-outsourced-support-during-tax-season"
        image={asset("assets/blog-cpa-outsourced-support.jpg")}
        type="article"
        datePublished="2026-06-12"
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
            How CPA Firms Use Outsourced Support During Tax Season
          </h1>
          <p className="mt-4 text-base text-gray-500">
            A look at how accounting and CPA firms extend their capacity
            during peak season without adding full-time headcount.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Jun 12, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              6 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-cpa-outsourced-support.jpg")}
            alt="Infographic: How CPA Firms Use Outsourced Support During Tax Season"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Tax season is one of the most demanding periods for CPA firms.
            Client inquiries increase. Documents arrive at different
            times. Tax returns pile up. Deadlines get closer. Meanwhile,
            clients still expect accuracy, responsiveness, and
            personalized service.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            For many CPA firms, outsourced accounting and tax support has
            become a practical way to handle seasonal workload without
            permanently expanding their internal team.
          </p>

          {/* Capacity challenges */}
          <h2 className="mt-10 text-xl font-bold text-brand-heading sm:text-2xl">
            Why Tax Season Creates Capacity Challenges
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The IRS expected approximately 164 million individual tax
            returns during the 2026 filing season, with April 15, 2026, as
            the main federal filing deadline for calendar-year individual
            returns.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-heading">
            That volume creates pressure across the entire tax workflow:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {capacityChallenges.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            The challenge isn't simply having more work. It's having more
            work within a limited period of time.
          </p>

          {/* What outsourced support looks like */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            What Does Outsourced Tax Support Look Like?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Outsourcing doesn't necessarily mean handing an entire client
            relationship to an outside provider. CPA firms can outsource
            specific parts of the workflow while keeping tax strategy,
            client communication, final review, and professional judgment
            in-house.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-heading">
            Common outsourced tasks include:
          </p>

          <div className="mt-6 space-y-4">
            {outsourcedTasks.map(({ icon: Icon, title, body, points, close }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <h3 className="text-base font-semibold text-brand-heading">
                    {title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {body}
                </p>
                {points.length > 0 && (
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {close && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {close}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CPA owns relationship */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-gray-100 bg-brand-bg p-6">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <div>
              <h2 className="text-lg font-bold text-brand-heading">
                The CPA Still Owns the Professional Relationship
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Outsourcing should strengthen a CPA firm's workflow — not
                replace professional responsibility. The CPA remains
                responsible for reviewing the return, applying
                professional judgment, addressing complex tax matters, and
                maintaining the appropriate level of quality control.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The IRS notes that paid tax preparers have responsibilities
                for the substantive accuracy of returns they prepare and
                must include their PTIN.
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-brand-heading">
                That makes clear processes, secure data handling, quality
                controls, and qualified support essential when outsourcing
                tax work.
              </p>
            </div>
          </div>

          {/* Workflow */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            A Better Tax-Season Workflow
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            A well-designed outsourced workflow might look like this:
          </p>

          <div className="mt-5 rounded-2xl border border-gray-100 bg-brand-bg p-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {workflowSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border-2 border-brand-green bg-white px-4 py-2 text-xs font-semibold text-brand-heading sm:text-sm">
                    {step}
                  </span>
                  {i < workflowSteps.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            This creates a division of responsibilities. The outsourced
            team handles repeatable processes. The CPA focuses on:
          </p>
          <p className="mt-2 text-base font-semibold text-brand-heading">
            Strategy + Review + Judgment + Client Advisory
          </p>
          <p className="mt-2 text-sm text-gray-500">
            That's where the firm's highest-value expertise belongs.
          </p>

          {/* Benefits */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Benefits Beyond Tax Season
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            One of the biggest advantages of outsourcing is flexibility.
            Instead of hiring full-time employees to handle a workload
            that peaks for only part of the year, firms can scale support
            according to demand.
          </p>

          <div className="mt-5 rounded-2xl border border-gray-100 bg-brand-bg p-6">
            <p className="text-sm font-semibold text-brand-heading">
              Potential benefits include:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            And when tax season ends, the firm can adjust its outsourced
            capacity instead of carrying the same staffing level
            throughout the year.
          </p>

          {/* Advisory focused */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Outsourcing Can Help Firms Become More Advisory-Focused
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The biggest opportunity may not be simply preparing more tax
            returns. It's creating more time for higher-value client
            conversations. Instead of spending hours on repetitive
            processing, CPAs can focus on:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {advisoryFocus.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-navy p-6">
            <Quote className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <p className="text-base font-semibold leading-relaxed text-white">
              Outsource the repetitive work. Keep the professional
              judgment.
            </p>
          </div>

          {/* Technology */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Technology Makes the Model More Scalable
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Modern accounting firms can combine outsourcing with cloud
            accounting, digital document collection, workflow management,
            automation, and AI-assisted processes. The IRS itself
            encourages tax professionals and taxpayers to use digital
            tools such as Tax Pro Account and IRS Online Account to
            streamline authorization and access to tax information.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The future isn't simply about outsourcing people. It's about
            building a technology-enabled tax workflow where people,
            automation, and AI each handle the work they are best suited
            for.
          </p>

          {/* Final thought */}
          <div className="mt-10 rounded-2xl bg-brand-green-light p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-green">
              <Lightbulb className="h-4 w-4" />
              Final Thought
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Tax season doesn't have to mean overwhelming your internal
              team. A carefully managed outsourced support model can give
              CPA firms additional capacity while allowing CPAs to stay
              focused on accuracy, professional judgment, client
              relationships, and strategic advisory work.
            </p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-heading">
              The firms that build scalable workflows before the next busy
              season will be better positioned to handle growth without
              sacrificing service quality.
            </p>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gray-100 p-5">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-green" />
            <p className="text-sm italic leading-relaxed text-gray-500">
              What do you think — should CPA firms outsource more of their
              tax-season workload, or keep everything in-house?
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Need extra capacity for your next busy season?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced tax and accounting
                support for your CPA firm.
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
