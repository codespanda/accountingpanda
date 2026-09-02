import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Circle,
  Lock,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { cn } from "@/lib/utils"
import { bookkeepingBasicsModules } from "@/pages/courses/BookkeepingBasicsCourse"

const totalModules = bookkeepingBasicsModules.length
const completedModules = 0

function getNextCourseStartDate() {
  const now = new Date()
  const day = now.getDay() // 0 = Sunday ... 1 = Monday
  const daysUntilMonday = ((1 - day + 7) % 7) || 7
  const start = new Date(now)
  start.setDate(now.getDate() + daysUntilMonday)
  return start.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function BookkeepingBasicsProgress() {
  const startDate = getNextCourseStartDate()
  const progressPct = Math.round((completedModules / totalModules) * 100)

  return (
    <>
      <Seo
        title="Your Course Progress"
        description="Track your progress through Bookkeeping Basics for Beginners — all 23 modules, and when your course starts."
        path="/learning/bookkeeping/bookkeeping-basics-for-beginners/progress"
        noIndex
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark py-14 lg:py-16">
        <div className="container-px mx-auto max-w-4xl">
          <Link
            to="/learning/bookkeeping/bookkeeping-basics-for-beginners"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course Overview
          </Link>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Your Course Progress
          </h1>
          <p className="mt-2 text-base text-white/85">
            Bookkeeping Basics for Beginners
          </p>

          {/* Course start banner */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/15 p-4">
            <CalendarClock className="h-5 w-5 shrink-0 text-white" />
            <p className="text-sm font-medium text-white">
              Your course starts <span className="font-bold">{startDate}</span>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-14 lg:py-16">
        <div className="container-px mx-auto max-w-4xl">
          {/* Overall progress */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-brand-heading">
                Overall Progress
              </h2>
              <span className="text-sm font-semibold text-brand-green">
                {completedModules} of {totalModules} modules complete
              </span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-brand-bg">
              <div
                className="h-full rounded-full bg-brand-green transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">{progressPct}% complete</p>
          </div>

          {/* Module list */}
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand-green" />
              <h2 className="text-xl font-bold text-brand-heading sm:text-2xl">
                Module Progress
              </h2>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Module 1 unlocks on {startDate}. The rest of the course
              unlocks progressively as you complete each module.
            </p>

            <div className="mt-6 space-y-2.5">
              {bookkeepingBasicsModules.map((module, index) => {
                const isFirst = index === 0
                const status = isFirst ? "Starts " + startDate : "Locked"
                const StatusIcon = isFirst ? Circle : Lock

                return (
                  <div
                    key={module.title}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border border-gray-100 p-4",
                      isFirst && "border-brand-green/30 bg-brand-green-light/40"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        isFirst
                          ? "bg-brand-green text-white"
                          : "bg-gray-100 text-gray-400"
                      )}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p
                        className={cn(
                          "text-sm font-medium",
                          isFirst ? "text-brand-heading" : "text-gray-500"
                        )}
                      >
                        {module.title}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "flex shrink-0 items-center gap-1.5 text-xs font-semibold",
                        isFirst ? "text-brand-green" : "text-gray-400"
                      )}
                    >
                      <StatusIcon className="h-3.5 w-3.5" />
                      {status}
                    </span>
                  </div>
                )
              })}

              {/* Completion state */}
              <div className="flex items-center gap-4 rounded-xl border border-dashed border-gray-200 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="flex-1 text-sm text-gray-500">
                  Complete all {totalModules} modules to earn your
                  certificate of completion.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Questions before you begin?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about the course, pacing, or getting
                started early.
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
      </div>
    </>
  )
}
