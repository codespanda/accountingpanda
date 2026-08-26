import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Calculator,
  CalendarClock,
  PiggyBank,
  UserCog,
  ClipboardList,
  FileWarning,
  ClipboardCheck,
  RefreshCcw,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const traps = [
  {
    icon: Calculator,
    title: "Incorrect PAYG Withholding",
    intro:
      "PAYG withholding needs to be calculated correctly based on an employee's circumstances and the applicable tax tables.",
    points: [
      "Using incorrect employee tax information",
      "Applying the wrong withholding rate",
      "Failing to update employee declarations",
      "Incorrectly treating contractors as employees",
    ],
    close: "Regularly reviewing payroll settings can help reduce withholding errors.",
  },
  {
    icon: CalendarClock,
    title: "Missing Superannuation Payment Deadlines",
    intro:
      "Superannuation is one of the most important areas of payroll compliance. Employers must ensure eligible employees receive the correct superannuation contributions and that payments are made through the required system within the applicable deadlines.",
    points: [],
    close:
      "Late or incorrect super payments can result in additional obligations and costs. Tip: Don't wait until the deadline to process superannuation — build regular checks into your payroll process.",
  },
  {
    icon: PiggyBank,
    title: "Calculating Super on the Wrong Earnings",
    intro:
      "Another common mistake is assuming that superannuation is calculated on every type of employee payment in exactly the same way.",
    points: [],
    close:
      "Depending on the payment, overtime, allowances, bonuses and other components may be treated differently when determining ordinary time earnings. Businesses should review the nature of each payroll component rather than relying on a one-size-fits-all approach.",
  },
  {
    icon: UserCog,
    title: "Incorrect Employee Classification",
    intro:
      "Employees and contractors can have different tax, payroll and superannuation implications. Misclassifying a worker can result in incorrect:",
    points: [
      "PAYG withholding",
      "Superannuation contributions",
      "Leave entitlements",
      "Payroll reporting",
    ],
    close:
      "Businesses should assess working arrangements carefully rather than relying only on the title used in a contract.",
  },
  {
    icon: ClipboardList,
    title: "Failing to Keep Accurate Payroll Records",
    intro:
      "Good payroll compliance starts with accurate records. Businesses should maintain appropriate records covering employee details, wages, hours, leave, deductions, tax withheld and superannuation contributions.",
    points: [],
    close:
      "Poor record keeping makes it much harder to identify errors and respond to audits or employee queries.",
  },
  {
    icon: FileWarning,
    title: "Getting STP Reporting Wrong",
    intro:
      "Single Touch Payroll (STP) has made payroll reporting more integrated, but incorrect payroll data can still create reporting problems. Errors in employee details, gross payments, PAYG withholding or superannuation information can flow into payroll reporting and employee records.",
    points: [],
    close:
      "A payroll reconciliation before finalising each pay run can help identify discrepancies early.",
  },
  {
    icon: ClipboardCheck,
    title: "Ignoring Payroll Reconciliations",
    intro:
      "A payroll reconciliation compares payroll records with accounting records, bank payments and relevant reporting data. Regular reconciliations can help identify:",
    points: [
      "Duplicate payments",
      "Incorrect salary amounts",
      "Unpaid superannuation",
      "PAYG discrepancies",
      "Incorrect leave balances",
      "Payroll journal errors",
    ],
    close: "This simple control can prevent small mistakes from becoming expensive problems.",
  },
  {
    icon: RefreshCcw,
    title: "Not Keeping Up With Regulatory Changes",
    intro:
      "Australian payroll rules can change, including tax rates, superannuation requirements, minimum employment standards and reporting obligations.",
    points: [],
    close:
      "Businesses should regularly review their payroll processes and software settings to ensure they remain aligned with current requirements.",
  },
]

const routine = [
  { time: "Before payroll", desc: "Review employee changes, hours, leave and payroll settings." },
  { time: "During payroll", desc: "Check wages, deductions, PAYG withholding and superannuation calculations." },
  { time: "After payroll", desc: "Reconcile payroll with accounting records and bank transactions." },
  { time: "Regularly", desc: "Review reporting, employee classifications, super payments and compliance requirements." },
]

export function PayrollCompliancePost() {
  return (
    <>
      <Seo
        title="Payroll & Superannuation: Common Compliance Traps in Australia"
        description="Superannuation guarantee changes catch many employers off guard. Here's what to check before your next pay run."
        path="/blog/payroll-superannuation-common-compliance-traps-in-australia"
        image={asset("assets/blog-payroll-superannuation.jpg")}
        type="article"
        datePublished="2026-07-18"
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
            PAYROLL
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.4rem]">
            Payroll &amp; Superannuation: Common Compliance Traps in
            Australia
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Even small payroll mistakes can lead to compliance issues,
            additional costs and unhappy employees — here's what to watch
            for.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Jul 18, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              7 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-payroll-superannuation.jpg")}
            alt="Infographic: Payroll & Superannuation — Common Compliance Traps in Australia"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Payroll is more than simply calculating salaries and paying
            employees. For Australian businesses, payroll involves a range
            of obligations covering PAYG withholding, superannuation, record
            keeping, reporting and employee entitlements.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Even small payroll mistakes can lead to compliance issues,
            additional costs and unhappy employees. Here are some of the
            most common payroll and superannuation compliance traps
            Australian businesses should watch out for.
          </p>

          {/* Traps */}
          <div className="mt-10 space-y-4">
            {traps.map(({ icon: Icon, title, intro, points, close }, i) => (
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
                      {intro}
                    </p>
                    {points.length > 0 && (
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
                    )}
                    {close && (
                      <p className="mt-3 text-sm leading-relaxed text-gray-500">
                        {close}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Routine */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            A Simple Payroll Compliance Routine
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            A strong payroll process should include:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {routine.map(({ time, desc }) => (
              <div
                key={time}
                className="rounded-2xl border border-gray-100 bg-brand-bg p-5"
              >
                <p className="text-sm font-semibold text-brand-green">
                  {time}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Final thoughts */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Final Thoughts
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Payroll compliance isn't just an administrative task — it is an
            important part of protecting your business, employees and cash
            flow.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            By maintaining accurate records, reconciling payroll regularly,
            monitoring superannuation and keeping up with Australian
            compliance requirements, businesses can significantly reduce the
            risk of costly payroll mistakes.
          </p>

          {/* Tip banner */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-brand-green-light p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <p className="text-sm leading-relaxed text-brand-heading">
              At AccountingPanda, we help businesses simplify their numbers,
              improve payroll processes and stay focused on growth.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-navy p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-white">
                Need help with payroll, bookkeeping or Australian accounting
                compliance?
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Let's connect — talk to our team about outsourced payroll
                support.
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
