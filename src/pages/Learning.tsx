import { Link } from "react-router-dom"
import {
  GraduationCap,
  Search,
  Award,
  CheckSquare,
  Clock,
  ArrowRight,
  Calculator,
  FileText,
  Users,
  Receipt,
  FileSpreadsheet,
  TrendingUp,
  Clock3,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const trustBadges = [
  { icon: Award, label: "Expert Instructors" },
  { icon: CheckSquare, label: "Practical Examples" },
  { icon: Clock, label: "Learn at Your Pace" },
]

const categories = [
  {
    icon: Calculator,
    title: "Bookkeeping",
    body: "Basics to advanced bookkeeping",
    count: "12 Courses",
    href: "/learning/bookkeeping",
  },
  {
    icon: FileText,
    title: "Financial Accounting",
    body: "Understand financial statements",
    count: "15 Courses",
  },
  {
    icon: Users,
    title: "Payroll",
    body: "Payroll processing & compliance",
    count: "10 Courses",
  },
  {
    icon: Receipt,
    title: "Taxation",
    body: "Learn tax rules & compliance",
    count: "14 Courses",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel for Accountants",
    body: "Master Excel skills for accounting",
    count: "11 Courses",
  },
  {
    icon: TrendingUp,
    title: "Business Finance",
    body: "Financial planning & analysis",
    count: "9 Courses",
  },
]

const courses = [
  {
    icon: Calculator,
    title: "Bookkeeping Basics for Beginners",
    body: "Learn the fundamentals of bookkeeping step by step.",
    duration: "2.5 Hours",
    level: "Beginner",
    badge: "Bestseller",
  },
  {
    icon: Receipt,
    title: "Tax Preparation Essentials",
    body: "Understand tax preparation process and best practices.",
    duration: "3.2 Hours",
    level: "Intermediate",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Mastery for Accountants",
    body: "Advanced Excel techniques for accounting and reporting.",
    duration: "4.1 Hours",
    level: "Intermediate",
  },
  {
    icon: BarChart3,
    title: "Financial Statement Analysis",
    body: "Analyze financial statements and make informed decisions.",
    duration: "3.0 Hours",
    level: "Advanced",
  },
]

export function Learning() {
  return (
    <>
      <Seo
        title="Learning Center"
        description="Practical lessons, real-world examples, and expert guidance to help you build accounting skills with confidence."
        path="/learning"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-green to-brand-green-dark">
        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
              <GraduationCap className="h-3.5 w-3.5" />
              LEARNING CENTER
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Learn Accounting.
              <br />
              <span className="text-white/90">Master Success.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/85">
              Practical lessons, real-world examples, and expert guidance
              to help you build accounting skills with confidence.
            </p>

            <div className="mt-7 flex max-w-md items-center gap-2 rounded-xl bg-white p-1.5 shadow-lg">
              <Search className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="w-full bg-transparent px-1 py-2 text-sm text-brand-heading placeholder:text-gray-400 focus:outline-none"
                disabled
              />
              <button
                type="button"
                aria-label="Search"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green text-white transition-colors hover:bg-brand-green-dark"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-white/90">
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={asset("assets/panda-hero.png")}
              alt="AccountingPanda mascot ready to help you learn accounting"
              className="mx-auto w-full max-w-[480px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                Explore Topics
              </span>
              <h2 className="mt-2 text-2xl font-bold text-brand-heading sm:text-3xl">
                Browse by Category
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Find the perfect topic to build your accounting expertise.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Categories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon: Icon, title, body, count, href }) => {
              const cardClass =
                "group rounded-2xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md"
              const content = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-light">
                    <Icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-brand-heading group-hover:text-brand-green">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{body}</p>
                  <p className="mt-3 text-xs font-semibold text-brand-green">{count}</p>
                </>
              )

              return href ? (
                <Link key={title} to={href} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <div key={title} className={cardClass}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="bg-brand-bg py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                Featured Courses
              </span>
              <h2 className="mt-2 text-2xl font-bold text-brand-heading sm:text-3xl">
                Handpicked for You
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Start learning with our most popular and relevant courses.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map(({ icon: Icon, title, body, duration, level, badge }) => (
              <div
                key={title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-brand-green-light to-brand-green/20">
                  {badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-green px-3 py-1 text-[11px] font-semibold text-white">
                      {badge}
                    </span>
                  )}
                  <Icon className="h-12 w-12 text-brand-green/70" />
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
              Ready to Accelerate Your Accounting Skills?
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
              <Link to="/learning">
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <span className="text-xs text-white/70">No credit card required</span>
          </div>
        </div>
      </section>
    </>
  )
}
