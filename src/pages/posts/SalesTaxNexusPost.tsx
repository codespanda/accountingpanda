import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Building2,
  TrendingUp,
  Package,
  Users,
  Store,
  MapPin,
  Tag,
  Percent,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  FileCheck,
  AlertTriangle,
  Search,
  Settings2,
  ShoppingCart,
  RefreshCw,
  FileText,
  DollarSign,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const nexusActivities = [
  {
    icon: Building2,
    title: "Physical Presence",
    desc: "Employees, offices, stores, warehouses, or other physical locations can establish nexus.",
  },
  {
    icon: TrendingUp,
    title: "Economic Presence",
    desc: "Reaching a state's sales threshold may create economic nexus even without physical operations.",
  },
  {
    icon: Package,
    title: "Inventory Stored in a State",
    desc: "Using fulfillment centers or third-party warehouses can potentially create physical nexus.",
  },
  {
    icon: Users,
    title: "Employees or Contractors",
    desc: "Employees, salespeople, contractors, or other representatives operating in a state may affect your nexus position.",
  },
  {
    icon: Store,
    title: "Marketplace Sales",
    desc: "Marketplace facilitator laws may shift collection responsibilities to the marketplace, but businesses still need to understand their own registration, filing, and reporting obligations.",
  },
]

const determineSteps = [
  { icon: MapPin, label: "Where", sub: "Do we have nexus?" },
  { icon: Package, label: "What", sub: "Do we sell?" },
  { icon: Tag, label: "Is it Taxable", sub: "" },
  { icon: Percent, label: "What Rate", sub: "Applies?" },
  { icon: CalendarClock, label: "When", sub: "Do we need to file?" },
]

const exampleSales = [
  { state: "California", amount: "$400,000" },
  { state: "Texas", amount: "$120,000" },
  { state: "New York", amount: "$85,000" },
  { state: "Florida", amount: "$60,000" },
  { state: "Colorado", amount: "$45,000" },
]

const firstStepItems = [
  {
    icon: ClipboardCheck,
    title: "Taxability",
    desc: "Not every product or service is taxable in every state.",
  },
  {
    icon: Percent,
    title: "Tax Rate",
    desc: "Rates can vary by state, county, city, and other local jurisdictions.",
  },
  {
    icon: ClipboardList,
    title: "Registration",
    desc: "A business generally needs to register before it begins collecting sales tax where required.",
  },
  {
    icon: CalendarDays,
    title: "Filing Frequency",
    desc: "Filing schedules can differ depending on the state's requirements and the business's tax liability.",
  },
  {
    icon: FileCheck,
    title: "Exemption Certificates",
    desc: "Businesses selling to tax-exempt customers may need to properly collect and maintain exemption documentation.",
  },
]

const mistakes = [
  {
    title: "Assuming online sales don't create nexus",
    desc: "Digital commerce has changed the sales tax landscape.",
  },
  {
    title: "Using one threshold for every state",
    desc: "Economic nexus rules aren't identical across the country.",
  },
  {
    title: "Registering but forgetting to file",
    desc: "Registration can create ongoing filing responsibilities, even during periods with little or no taxable activity.",
  },
  {
    title: "Ignoring marketplace sales",
    desc: "Marketplace facilitator rules can affect collection responsibilities, but they don't eliminate the need for compliance analysis.",
  },
  {
    title: "Failing to monitor growth",
    desc: "A company that didn't have nexus last year may cross a threshold this year.",
  },
]

const workflowSteps = [
  { icon: Search, label: "Monitor" },
  { icon: MapPin, label: "Determine Nexus" },
  { icon: FileText, label: "Register" },
  { icon: Settings2, label: "Configure Tax" },
  { icon: ShoppingCart, label: "Collect" },
  { icon: RefreshCw, label: "Reconcile" },
  { icon: FileCheck, label: "File" },
  { icon: DollarSign, label: "Remit" },
]

const monitorList = [
  "Revenue",
  "Transaction volume",
  "Physical locations",
  "Employees and contractors",
  "Inventory locations",
  "Marketplace activity",
  "Product and service offerings",
]

const automationList = [
  "Monitor sales by jurisdiction",
  "Identify potential nexus exposure",
  "Calculate applicable tax",
  "Reconcile collected tax",
  "Organize exemption documentation",
  "Prepare information needed for filings",
]

export function SalesTaxNexusPost() {
  return (
    <>
      <Seo
        title="US Sales Tax Nexus in 2026: What Every Growing Business Needs to Know"
        description="Economic nexus thresholds vary by state. We break down how to track exposure and stay compliant as you scale across the US."
        path="/blog/us-sales-tax-nexus-in-2026"
        image={asset("assets/blog-sales-tax-nexus.jpg")}
        type="article"
        datePublished="2026-08-03"
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
            TAX &amp; COMPLIANCE
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.4rem]">
            US Sales Tax Nexus in 2026: What Every Growing Business Needs to
            Know
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Sales tax nexus determines when your business must collect and
            remit sales tax in a state. Rules vary by state — stay informed,
            stay compliant.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Aug 3, 2026
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
            src={asset("assets/blog-sales-tax-nexus.jpg")}
            alt="Infographic: US Sales Tax Nexus in 2026 — What Every Growing Business Needs to Know"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            For growing businesses in the United States, sales tax compliance
            is becoming more complex — and sales tax nexus is one of the most
            important concepts to understand in 2026.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            If your business sells products or services across state lines,
            having customers in another state does not automatically mean
            you owe sales tax there. However, certain activities can create a
            sales tax nexus, requiring your business to register, collect,
            report, and remit sales tax.
          </p>

          {/* What is nexus */}
          <h2 className="mt-10 text-xl font-bold text-brand-heading sm:text-2xl">
            What Is Sales Tax Nexus?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Sales tax nexus is the connection between a business and a state
            that gives the state authority to require the business to
            collect and remit sales tax.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-heading">
            Traditionally, nexus was associated with having a physical
            presence, such as:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {["An office or store", "Employees", "Inventory", "Warehouses", "Sales representatives"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              )
            )}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Today, economic nexus has become equally important. A business
            may create nexus based on the amount of sales or number of
            transactions it makes in a state — even without maintaining a
            physical location there.
          </p>

          {/* Why economic nexus matters */}
          <h2 className="mt-10 text-xl font-bold text-brand-heading sm:text-2xl">
            Why Economic Nexus Matters in 2026
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The South Dakota v. Wayfair decision fundamentally changed how
            states approach sales tax collection. Following Wayfair, states
            began introducing economic nexus thresholds based on a
            business's sales into a state during a specified period.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The exact rules, thresholds, measurement periods, taxable
            products, and registration requirements can vary significantly
            from state to state. That's why simply asking, "Do we have
            customers in that state?" isn't enough.
          </p>

          <div className="mt-6 rounded-2xl border border-gray-100 bg-brand-bg p-6">
            <p className="text-sm font-semibold text-brand-heading">
              Businesses need to determine:
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {determineSteps.map(({ icon: Icon, label, sub }, i) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-green bg-white">
                    <Icon className="h-5 w-5 text-brand-green" />
                  </span>
                  <p className="mt-2 text-xs font-semibold text-brand-heading">
                    {label}
                  </p>
                  {sub && <p className="text-[11px] text-gray-500">{sub}</p>}
                  {i < determineSteps.length - 1 && (
                    <ArrowRight className="mt-2 hidden h-3.5 w-3.5 text-gray-300 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Common activities */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Common Activities That Can Create Nexus
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Your business may need to evaluate nexus when it has:
          </p>

          <div className="mt-6 space-y-4">
            {nexusActivities.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green-light text-sm font-bold text-brand-green">
                  {i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4.5 w-4.5 text-brand-green" />
                    <h3 className="text-base font-semibold text-brand-heading">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Simple example */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            A Simple Example
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Imagine a growing e-commerce company based in California. During
            the year, it sells to customers across multiple states:
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-navy text-left text-white">
                  <th className="px-5 py-3 font-semibold">State</th>
                  <th className="px-5 py-3 font-semibold">Sales (Annual)</th>
                </tr>
              </thead>
              <tbody>
                {exampleSales.map((row, i) => (
                  <tr
                    key={row.state}
                    className={i % 2 === 0 ? "bg-brand-bg" : "bg-white"}
                  >
                    <td className="px-5 py-3 text-gray-700">{row.state}</td>
                    <td className="px-5 py-3 font-medium text-brand-heading">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            The company shouldn't assume that only California sales matter.
            It needs to review each state's current nexus rules and
            determine whether its sales, transactions, physical presence,
            marketplace activity, or other connections create a registration
            and collection obligation.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-heading">
            The key point: sales tax compliance is state-specific.
          </p>

          {/* Nexus is only first step */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Nexus Is Only the First Step
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Determining nexus doesn't automatically tell you how much tax to
            collect. After establishing nexus, businesses should review:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {firstStepItems.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <Icon className="h-4.5 w-4.5 text-brand-green" />
                  <h3 className="text-sm font-semibold text-brand-heading">
                    {title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Common mistakes */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Common Sales Tax Mistakes Growing Businesses Make
          </h2>

          <div className="mt-6 space-y-3">
            {mistakes.map(({ title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50/50 p-4"
              >
                <AlertTriangle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-red-500" />
                <div>
                  <p className="text-sm font-semibold text-brand-heading">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stay compliant workflow */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            How Businesses Can Stay Compliant
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            A practical sales tax workflow can look like this:
          </p>

          <div className="mt-5 rounded-2xl border border-gray-100 bg-brand-bg p-6">
            <div className="grid grid-cols-4 gap-x-2 gap-y-6 sm:grid-cols-8">
              {workflowSteps.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-green bg-white">
                    <Icon className="h-4.5 w-4.5 text-brand-green" />
                  </span>
                  <p className="mt-2 text-[11px] font-semibold leading-tight text-brand-heading">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm font-semibold text-brand-heading">
            Businesses should periodically review sales by state and monitor
            changes in:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {monitorList.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                {item}
              </li>
            ))}
          </ul>

          {/* Automation */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Why Sales Tax Automation Matters
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            As a company expands into multiple states, manually tracking
            sales tax can become increasingly difficult. Accounting and tax
            technology can help businesses:
          </p>
          <ul className="mt-3 space-y-1.5">
            {automationList.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            However, automation should support — not replace — professional
            tax review. State and local sales tax rules can be highly
            specific.
          </p>

          {/* Final takeaway */}
          <p className="mt-10 text-base leading-relaxed text-gray-600">
            Sales tax nexus is no longer just a physical-presence question.
            For growing businesses in 2026, economic activity, remote
            operations, inventory, employees, marketplaces, and
            state-specific rules can all affect sales tax obligations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Sales tax compliance may not be the most exciting part of
            business growth — but getting it right can help prevent
            unexpected liabilities, penalties, and compliance headaches.
          </p>

          <div className="mt-10 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-green">
              <Target className="h-4 w-4" />
              Final Takeaway
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              The best approach is proactive.
            </p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
              Know where you have nexus. Know what you sell. Monitor your
              thresholds. Keep your registrations and filings current.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Is your business expanding across U.S. states?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                A regular sales-tax nexus review can help identify potential
                compliance obligations before they become costly problems —
                so you can focus on growth.
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
