import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  AlertTriangle,
  Lightbulb,
  Search,
  Calculator,
  HelpCircle,
  RefreshCcw,
  Send,
  UploadCloud,
  FolderCheck,
  Monitor,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const miscPayments = [
  "Rent payments",
  "Royalties",
  "Prizes and awards",
  "Medical and health care payments",
  "Attorney payments",
  "Other reportable payments",
]

const workflowSteps = [
  {
    icon: Search,
    title: "Identify vendors and contractors",
    desc: "Determine who received potentially reportable payments.",
  },
  {
    icon: Calculator,
    title: "Review payment totals",
    desc: "Check the applicable reporting threshold and payment type.",
  },
  {
    icon: FileText,
    title: "Collect Form W-9 information",
    desc: "Verify the recipient's legal name and TIN.",
  },
  {
    icon: HelpCircle,
    title: "Determine the correct 1099 form",
    desc: "1099-NEC, 1099-MISC, or another applicable information return.",
  },
  {
    icon: RefreshCcw,
    title: "Reconcile your accounting records",
    desc: "Make sure your 1099 totals agree with your books.",
  },
  {
    icon: Send,
    title: "Furnish recipient copies",
    desc: "Send the required statements by the applicable deadline.",
  },
  {
    icon: UploadCloud,
    title: "File with the IRS",
    desc: "Submit electronically or on paper, as applicable.",
  },
  {
    icon: FolderCheck,
    title: "Keep documentation",
    desc: "Maintain W-9s, payment records, filed forms, and correction records.",
  },
]

export function Form1099Post() {
  return (
    <>
      <Seo
        title="1099 Reporting Deadlines You Can't Afford to Miss"
        description="Late or incorrect 1099 filings mean penalties. Here's the timeline and documentation you need in place before year-end."
        path="/blog/1099-reporting-deadlines-you-cant-afford-to-miss"
        image={asset("assets/blog-1099-deadlines.jpg")}
        type="article"
        datePublished="2026-06-21"
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
            1099 Reporting Deadlines You Can't Afford to Miss
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Late or incorrect 1099 filings mean penalties. Here's the
            timeline and documentation you need in place before year-end.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Jun 21, 2026
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
            src={asset("assets/blog-1099-deadlines.jpg")}
            alt="Infographic: 1099 Reporting Deadlines You Can't Afford to Miss"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Missing a 1099 deadline can create unnecessary penalties,
            corrections, and headaches for your business.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            If you make reportable payments as part of your trade or
            business, understanding which 1099 form to use, when to file
            it, and when to provide it to the recipient is essential.
          </p>

          {/* Key deadlines */}
          <h2 className="mt-10 text-xl font-bold text-brand-heading sm:text-2xl">
            Key 1099 Deadlines
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-green" />
                <h3 className="text-base font-semibold text-brand-heading">
                  1. Form 1099-NEC — January 31
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The 1099-NEC is generally used to report nonemployee
                compensation, such as payments to independent contractors.
                For payments made in 2026, the reporting threshold for
                nonemployee compensation is generally $2,000. The form
                must generally be furnished to the recipient and filed
                with the IRS by January 31.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                If January 31 falls on a weekend or applicable legal
                holiday, the deadline moves to the next business day.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-green" />
                <h3 className="text-base font-semibold text-brand-heading">
                  2. Form 1099-MISC — January 31 / February 28 / March 31
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                1099-MISC covers several types of miscellaneous payments,
                including certain:
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {miscPayments.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Generally, recipient statements are due by January 31. For
                IRS filing, the deadline is February 28 when filing on
                paper or March 31 when filing electronically.
              </p>
            </div>
          </div>

          {/* Don't confuse */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
            <AlertTriangle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-amber-500" />
            <div>
              <p className="text-sm font-semibold text-brand-heading">
                Don't Confuse 1099-NEC With 1099-MISC
              </p>
              <p className="mt-1 text-sm text-gray-600">
                One of the most common mistakes is reporting contractor
                payments on the wrong form.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Nonemployee compensation → <span className="font-medium text-brand-heading">1099-NEC</span>
                <br />
                Rent, royalties, certain prizes, medical payments and other
                applicable miscellaneous payments →{" "}
                <span className="font-medium text-brand-heading">1099-MISC</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">
                The IRS uses information returns to match payments reported
                by businesses with income reported by recipients, so
                accuracy matters.
              </p>
            </div>
          </div>

          {/* Filing method */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gray-100 bg-brand-bg p-5">
            <Monitor className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-green" />
            <div>
              <p className="text-sm font-semibold text-brand-heading">
                Don't Forget Your Filing Method
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Businesses should also pay attention to the IRS
                electronic-filing requirement. For information returns,
                the general e-file threshold was reduced to 10 returns,
                calculated by aggregating applicable information returns.
                That means businesses should review their total
                information-return volume before assuming paper filing is
                an option.
              </p>
            </div>
          </div>

          {/* Workflow */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            A Simple 1099 Compliance Workflow
          </h2>
          <p className="mt-3 text-sm text-gray-600">Before the deadline:</p>

          <div className="mt-6 space-y-4">
            {workflowSteps.map(({ icon: Icon, title, desc }, i) => (
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

          {/* Missed deadline */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50/50 p-5">
            <AlertTriangle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-red-500" />
            <div>
              <p className="text-sm font-semibold text-brand-heading">
                What Happens If You Miss the Deadline?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Late or incorrect information returns can result in IRS
                penalties, and the amount can depend on factors such as
                how late the filing is and whether the failure was
                intentional.
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-brand-heading">
                The best strategy isn't fixing 1099 problems after the
                deadline. It's building the compliance process before
                year-end.
              </p>
            </div>
          </div>

          {/* Final takeaway */}
          <div className="mt-10 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-green">
              <Lightbulb className="h-4 w-4" />
              Final Takeaway
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              1099 reporting shouldn't be treated as a last-minute January
              task.
            </p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
              A reliable process throughout the year — W-9 collection →
              payment tracking → reconciliation → form preparation →
              recipient delivery → IRS filing — can make year-end
              reporting significantly easier.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Want help staying on top of 1099 filings?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced bookkeeping and tax
                compliance support for your business.
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
