import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Clock3,
  BarChart3,
  BookOpenCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { CONSULTATION_MAILTO } from "@/lib/contact"

const courses = [
  {
    title: "Bookkeeping Basics for Beginners",
    body: "Learn the fundamentals of bookkeeping step by step.",
    duration: "2.5 Hours",
    level: "Beginner",
    badge: "Bestseller",
  },
  {
    title: "Double-Entry Bookkeeping Explained",
    body: "Understand debits, credits, and how every transaction balances.",
    duration: "3.0 Hours",
    level: "Beginner",
  },
  {
    title: "Chart of Accounts Setup",
    body: "Build a chart of accounts that fits your business from day one.",
    duration: "2.0 Hours",
    level: "Beginner",
  },
  {
    title: "Recording Journal Entries",
    body: "Practice recording common transactions accurately and consistently.",
    duration: "2.8 Hours",
    level: "Beginner",
  },
  {
    title: "Bank Reconciliation Fundamentals",
    body: "Match bank statements to your books and catch discrepancies early.",
    duration: "3.5 Hours",
    level: "Intermediate",
  },
  {
    title: "Accounts Payable Management",
    body: "Track vendor bills, due dates, and payments without missing a beat.",
    duration: "3.2 Hours",
    level: "Intermediate",
  },
  {
    title: "Accounts Receivable & Invoicing",
    body: "Create invoices, track customer balances, and manage collections.",
    duration: "3.0 Hours",
    level: "Intermediate",
  },
  {
    title: "Month-End Close Process",
    body: "A repeatable checklist for closing the books accurately every month.",
    duration: "4.0 Hours",
    level: "Intermediate",
  },
  {
    title: "QuickBooks for Bookkeepers",
    body: "Hands-on training for day-to-day bookkeeping inside QuickBooks.",
    duration: "5.0 Hours",
    level: "Intermediate",
  },
  {
    title: "Xero for Bookkeepers",
    body: "Hands-on training for day-to-day bookkeeping inside Xero.",
    duration: "5.0 Hours",
    level: "Intermediate",
  },
  {
    title: "Payroll Basics for Bookkeepers",
    body: "What bookkeepers need to know about processing payroll accurately.",
    duration: "3.5 Hours",
    level: "Advanced",
  },
  {
    title: "Advanced Bookkeeping & Adjusting Entries",
    body: "Accruals, prepayments, depreciation, and other period-end adjustments.",
    duration: "4.5 Hours",
    level: "Advanced",
  },
]

export function BookkeepingCourses() {
  return (
    <>
      <Seo
        title="Bookkeeping Courses"
        description="Basics to advanced bookkeeping — 12 practical courses covering journal entries, reconciliation, accounts payable & receivable, month-end close, and more."
        path="/learning/bookkeeping"
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark py-14 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <Link
            to="/learning"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learning Center
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Bookkeeping
              </h1>
              <p className="mt-1 text-sm text-white/85">
                Basics to advanced bookkeeping — {courses.length} courses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(({ title, body, duration, level, badge }) => (
              <div
                key={title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-brand-green-light to-brand-green/20">
                  {badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-green px-3 py-1 text-[11px] font-semibold text-white">
                      {badge}
                    </span>
                  )}
                  <BookOpenCheck className="h-10 w-10 text-brand-green/70" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold leading-snug text-brand-heading">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                    {body}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BarChart3 className="h-3.5 w-3.5" />
                      {level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-brand-green-dark py-12 lg:py-14">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-[1.7rem]">
              Ready to Master Bookkeeping?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Join thousands of learners improving their skills and
              advancing their careers.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              size="lg"
              className="bg-white text-brand-green-dark hover:bg-white/90"
              asChild
            >
              <a href={CONSULTATION_MAILTO}>
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <span className="text-xs text-white/70">No credit card required</span>
          </div>
        </div>
      </section>
    </>
  )
}
