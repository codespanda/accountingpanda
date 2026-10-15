import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check, GraduationCap, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { ConsultationLink } from "@/components/ConsultationDialog"
import { cn } from "@/lib/utils"
import { getCompletedModules, toggleModule } from "@/lib/courseProgress"
import {
  GST_INDIA_COURSE_PATH,
  gstIndiaModules,
  gstIndiaModuleSummaries,
} from "@/pages/courses/gstIndiaModules"

const COURSE_SLUG = "learn-gst-in-india"
const totalModules = gstIndiaModules.length

export function GstIndiaProgress() {
  const [completed, setCompleted] = useState<number[]>([])
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    setCompleted(getCompletedModules(COURSE_SLUG))
  }, [])

  const completedCount = completed.length
  const progressPct = Math.round((completedCount / totalModules) * 100)

  return (
    <>
      <Seo
        title="GST Complete Course — India"
        description="Work through all 15 modules of the GST Practical Learning Program and track your progress as you go."
        path={`${GST_INDIA_COURSE_PATH}/progress`}
        noIndex
      />

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-5 py-10 sm:px-10 lg:px-14 lg:py-14">
          <Link
            to={GST_INDIA_COURSE_PATH}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand-green"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course Overview
          </Link>

          <h1 className="mt-5 text-2xl font-bold text-brand-heading sm:text-3xl">
            GST Complete Course — India
          </h1>

          <div className="mt-6 rounded-[22px] border border-gray-200 bg-white p-5 sm:p-7">
            {/* Program header */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bento-mint">
                <GraduationCap className="h-5 w-5 text-bento-forest" />
              </span>
              <div>
                <h2 className="text-base font-bold text-brand-heading sm:text-lg">
                  GST Practical Learning Program
                </h2>
                <p className="text-sm text-gray-500">
                  {totalModules} modules · Beginner to practical accounting
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="pt-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Your course progress</span>
                <span className="font-bold text-brand-heading">
                  {completedCount}/{totalModules}
                </span>
              </div>
              <div
                className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100"
                role="progressbar"
                aria-valuenow={completedCount}
                aria-valuemin={0}
                aria-valuemax={totalModules}
                aria-label="Course progress"
              >
                <div
                  className="h-full rounded-full bg-brand-green transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Module checklist */}
            <ol className="mt-6 space-y-1">
              {gstIndiaModuleSummaries.map(({ title, summary }, index) => {
                const done = completed.includes(index)
                const expanded = open === index
                const topics = gstIndiaModules[index]?.sections.flatMap((s) => s.items) ?? []

                return (
                  <li key={title} className="group rounded-xl transition-colors hover:bg-brand-bg">
                    <div className="flex items-start gap-3 p-3">
                      <button
                        type="button"
                        onClick={() => setCompleted(toggleModule(COURSE_SLUG, index))}
                        aria-pressed={done}
                        aria-label={done ? `Mark module ${index + 1} as not done` : `Mark module ${index + 1} as done`}
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                          done
                            ? "border-brand-green bg-brand-green text-white"
                            : "border-gray-300 bg-white hover:border-brand-green"
                        )}
                      >
                        {done && <Check className="h-3 w-3" strokeWidth={3} />}
                      </button>

                      <button
                        type="button"
                        onClick={() => setOpen(expanded ? null : index)}
                        aria-expanded={expanded}
                        className="flex flex-1 items-start justify-between gap-3 text-left"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-brand-heading sm:text-base">
                            {index + 1}. {title}
                          </span>
                          <span className="mt-0.5 block text-sm text-gray-500">{summary}</span>
                        </span>
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-opacity",
                            expanded ? "opacity-100" : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                          )}
                        >
                          {expanded ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                        </span>
                      </button>
                    </div>

                    {expanded && (
                      <ul className="space-y-1.5 pb-4 pl-11 pr-4">
                        {topics.map((topic) => (
                          <li key={topic} className="flex gap-2 text-sm text-gray-600">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ol>

            {completedCount === totalModules && (
              <p className="mt-5 rounded-xl bg-bento-mint px-4 py-3 text-sm font-semibold text-bento-forest">
                You've completed all {totalModules} modules — well done!
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[22px] bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">Need help with GST for your business?</h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about registration, returns or reconciliation.
              </p>
            </div>
            <Button className="shrink-0" asChild>
              <ConsultationLink>
                Chat to an Expert
                <ArrowRight className="h-4 w-4" />
              </ConsultationLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
