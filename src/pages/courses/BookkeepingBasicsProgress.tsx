import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Lock,
  PlayCircle,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { cn } from "@/lib/utils"
import { bookkeepingBasicsModules } from "@/pages/courses/BookkeepingBasicsCourse"
import {
  getCompletedModules,
  isModuleCompleted,
  isModuleUnlocked,
} from "@/lib/courseProgress"

const COURSE_SLUG = "bookkeeping-basics-for-beginners"
const COURSE_PATH = "/learning/bookkeeping/bookkeeping-basics-for-beginners"

const totalModules = bookkeepingBasicsModules.length

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
  const [completed, setCompleted] = useState<number[]>([])
  const startDate = getNextCourseStartDate()

  useEffect(() => {
    setCompleted(getCompletedModules(COURSE_SLUG))
  }, [])

  const completedCount = completed.length
  const progressPct = Math.round((completedCount / totalModules) * 100)

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
            to={COURSE_PATH}
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
                {completedCount} of {totalModules} modules complete
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
              Complete a module to unlock the next one. Module 1 is
              unlocked now — the rest of the course unlocks progressively
              as you go.
            </p>

            <div className="mt-6 space-y-2.5">
              {bookkeepingBasicsModules.map((module, index) => {
                const done = isModuleCompleted(index, completed)
                const unlocked = isModuleUnlocked(index, completed)

                const status = done ? "Completed" : unlocked ? "Unlocked" : "Locked"
                const StatusIcon = done ? CheckCircle2 : unlocked ? PlayCircle : Lock

                const rowClass = cn(
                  "flex items-center gap-4 rounded-xl border p-4 transition-colors",
                  done && "border-brand-green/30 bg-brand-green-light/40",
                  !done && unlocked && "border-brand-green/30 bg-white hover:shadow-sm",
                  !unlocked && "border-gray-100 bg-white"
                )

                const badgeClass = cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  (done || unlocked) ? "bg-brand-green text-white" : "bg-gray-100 text-gray-400"
                )

                const titleClass = cn(
                  "text-sm font-medium",
                  unlocked ? "text-brand-heading" : "text-gray-500"
                )

                const statusClass = cn(
                  "flex shrink-0 items-center gap-1.5 text-xs font-semibold",
                  unlocked ? "text-brand-green" : "text-gray-400"
                )

                const rowContent = (
                  <>
                    <span className={badgeClass}>
                      {done ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                    </span>
                    <div className="flex-1">
                      <p className={titleClass}>{module.title}</p>
                    </div>
                    <span className={statusClass}>
                      <StatusIcon className="h-3.5 w-3.5" />
                      {status}
                    </span>
                  </>
                )

                return unlocked ? (
                  <Link key={module.title} to={`${COURSE_PATH}/modules/${index + 1}`} className={rowClass}>
                    {rowContent}
                  </Link>
                ) : (
                  <div key={module.title} className={rowClass}>
                    {rowContent}
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
