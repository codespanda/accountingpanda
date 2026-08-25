import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  ShoppingCart,
  ShoppingBag,
  Users,
  DollarSign,
  ClipboardCheck,
  Send,
  AlertTriangle,
  Lightbulb,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const basIncludes = [
  "GST (Goods and Services Tax)",
  "PAYG withholding",
  "PAYG instalments",
  "FBT instalments (if applicable)",
  "Luxury car tax (if applicable)",
  "Wine equalisation tax (if applicable)",
]

const checklistSteps = [
  {
    icon: FileText,
    title: "Review Your Business Records",
    intro:
      "Before starting the BAS, make sure all transactions for the reporting period have been recorded.",
    points: [
      "Record all sales and income.",
      "Record business purchases and expenses.",
      "Check invoices, receipts and supporting documents.",
      "Reconcile bank and credit-card accounts.",
      "Review accounts receivable and accounts payable.",
      "Check that transactions are recorded in the correct BAS period.",
    ],
    close:
      "Good record keeping is essential because businesses need records supporting their tax and GST obligations.",
  },
  {
    icon: ShoppingCart,
    title: "Check GST on Sales",
    intro: "Review your sales transactions and GST collected during the period.",
    points: [
      "Confirm taxable sales have been correctly GST-coded.",
      "Check GST-free and input-taxed transactions.",
      "Review credit notes, refunds and adjustments.",
      "Check e-commerce and marketplace sales.",
      "Ensure sales are reported in the correct period.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Check GST on Purchases",
    intro: "Next, review purchases and GST credits.",
    points: [
      "Confirm business purchases are correctly coded.",
      "Check GST claimed on eligible purchases.",
      "Verify tax invoices and supporting documentation.",
      "Review capital purchases separately.",
      "Investigate unusual or high-value transactions.",
      "Check that private expenses have not been incorrectly claimed.",
    ],
    close:
      "ATO guidance emphasises reconciliation and review of GST figures before BAS lodgement.",
  },
  {
    icon: Users,
    title: "Review PAYG Withholding",
    intro: "If your business has employees or makes payments subject to withholding:",
    points: [
      "Reconcile payroll records.",
      "Check PAYG withholding amounts.",
      "Verify contractor or other applicable withholding obligations.",
      "Compare payroll reports with the accounting records.",
      "Confirm amounts reported on the BAS agree with your records.",
    ],
  },
  {
    icon: DollarSign,
    title: "Check PAYG Instalments and Other Obligations",
    intro: "Depending on your business circumstances, your BAS may include additional obligations.",
    points: [
      "Review PAYG instalments.",
      "Check whether FBT instalments apply.",
      "Review fuel tax credit claims, if applicable.",
      "Check other applicable BAS labels.",
      "Investigate unusual adjustments before lodgement.",
    ],
    close:
      "Not every BAS contains the same labels; the sections required depend on your registrations and reporting frequency.",
  },
  {
    icon: ClipboardCheck,
    title: "Reconcile and Review the BAS",
    intro: "Before lodging, perform a final review.",
    points: [
      "Reconcile GST accounts to the BAS figures.",
      "Compare GST collected and GST credits with the general ledger.",
      "Review adjustments and exceptions.",
      "Compare current-period results with previous periods.",
      "Investigate unexpected movements.",
      "Confirm the BAS calculation agrees with your accounting software.",
    ],
    close:
      "The ATO specifically highlights reconciliation of GST control accounts and the net BAS amount as an important BAS preparation control.",
  },
  {
    icon: Send,
    title: "Lodge and Pay on Time",
    intro: "Once the figures have been reviewed:",
    points: [
      "Complete the BAS.",
      "Obtain the required review or approval.",
      "Lodge through the appropriate ATO channel or registered BAS/tax agent.",
      "Confirm the amount payable or refundable.",
      "Make any payment by the applicable due date.",
      "Save the BAS and supporting workpapers.",
    ],
    close:
      "Businesses can lodge through ATO online services, SBR-enabled software or through a registered tax/BAS agent, depending on their circumstances.",
  },
]

const mistakes = [
  {
    title: "Incorrect GST coding",
    desc: "Make sure GST-free, input-taxed and taxable transactions are classified correctly.",
  },
  {
    title: "Unreconciled accounts",
    desc: "BAS preparation should not begin with unexplained differences in bank, credit-card or GST accounts.",
  },
  {
    title: "Missing transactions",
    desc: "Check that all sales, purchases and relevant adjustments for the reporting period have been captured.",
  },
  {
    title: "Incorrect reporting period",
    desc: "Make sure transactions belong to the BAS period being reported.",
  },
  {
    title: "Insufficient supporting records",
    desc: "Keep invoices, receipts, bank records and other documentation supporting the BAS figures.",
  },
]

const routineFlow = ["Record", "Reconcile", "Review", "Adjust", "Lodge", "File"]

const finalChecklist = [
  "All sales recorded",
  "All purchases recorded",
  "Bank accounts reconciled",
  "Credit cards reconciled",
  "GST on sales reviewed",
  "GST on purchases reviewed",
  "PAYG withholding reconciled",
  "PAYG instalments checked",
  "Adjustments reviewed",
  "GST accounts reconciled",
  "BAS reviewed and approved",
  "BAS lodged",
  "Payment/refund reconciled",
  "Supporting documents filed",
]

export function BASChecklistPost() {
  return (
    <>
      <Seo
        title="BAS Preparation Checklist for Australian Businesses"
        description="A step-by-step checklist to get your Business Activity Statement filed accurately and on time, every quarter."
        path="/blog/bas-preparation-checklist-for-australian-businesses"
        image={asset("assets/blog-bas-checklist.jpg")}
        type="article"
        datePublished="2026-07-27"
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
            BAS Preparation Checklist for Australian Businesses
          </h1>
          <p className="mt-4 text-base text-gray-500">
            A step-by-step checklist to help you prepare and lodge your
            Business Activity Statement (BAS) accurately and on time.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Jul 27, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              5 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-bas-checklist.jpg")}
            alt="Infographic: BAS Preparation Checklist for Australian Businesses"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Preparing your Business Activity Statement (BAS) accurately is an
            important part of staying compliant with the Australian Taxation
            Office (ATO). A well-organised BAS process helps ensure your
            GST, PAYG withholding and other applicable amounts are reported
            correctly and supported by reliable records.
          </p>

          {/* What is a BAS */}
          <h2 className="mt-10 text-xl font-bold text-brand-heading sm:text-2xl">
            What Is a BAS?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            A Business Activity Statement is used by eligible Australian
            businesses to report and pay various tax obligations, including
            GST, PAYG withholding and PAYG instalments. Depending on the
            business, other obligations may also apply:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {basIncludes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                {item}
              </li>
            ))}
          </ul>

          {/* Checklist steps */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            BAS Preparation Checklist
          </h2>

          <div className="mt-6 space-y-4">
            {checklistSteps.map(({ icon: Icon, title, intro, points, close }, i) => (
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

          {/* Common mistakes */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Common BAS Mistakes to Avoid
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Some of the most common problems can be prevented with a
            consistent review process:
          </p>

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

          {/* Routine */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Make BAS Preparation a Routine
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The best time to prepare for your BAS is before the reporting
            deadline. Keeping your bookkeeping up to date throughout the
            month or quarter makes reconciliation easier and reduces the
            risk of last-minute errors. A simple recurring process can be:
          </p>

          <div className="mt-5 rounded-2xl border border-gray-100 bg-brand-bg p-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {routineFlow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border-2 border-brand-green bg-white px-4 py-2 text-sm font-semibold text-brand-heading">
                    {step}
                  </span>
                  {i < routineFlow.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Using accounting software and maintaining organised digital
            records can make BAS preparation faster and easier to manage.
          </p>

          {/* Final checklist */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            Final BAS Checklist
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {finalChecklist.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gray-100 px-4 py-3 text-sm text-gray-600"
              >
                <span className="h-4.5 w-4.5 shrink-0 rounded border-2 border-brand-green" />
                {item}
              </label>
            ))}
          </div>

          {/* Tip */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-brand-green-light p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <p className="text-sm leading-relaxed text-brand-heading">
              <span className="font-semibold">AccountingPanda Tip:</span>{" "}
              Don't wait until BAS lodgement week to discover bookkeeping
              problems. Keep your records current and reconcile regularly so
              BAS preparation becomes a straightforward review rather than a
              quarterly scramble.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gray-100 bg-brand-bg p-5">
            <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gray-400" />
            <p className="text-xs leading-relaxed text-gray-500">
              This article provides general information and is not a
              substitute for professional tax advice. For complex GST or BAS
              matters, consult a registered Australian BAS or tax agent.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Want help getting your BAS lodged on time, every time?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced bookkeeping and BAS
                preparation for your Australian business.
              </p>
            </div>
            <Button className="shrink-0" asChild>
              <a href={CONSULTATION_MAILTO}>
                Talk to an Expert
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
