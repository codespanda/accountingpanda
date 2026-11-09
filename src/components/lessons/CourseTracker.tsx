import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Award, Check, GraduationCap, Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { getCompletedModules, getExamResult, toggleModule, type ExamResult } from "@/lib/courseProgress"
import { lessonKey, useLessons } from "@/lib/lessons"

export type TrackerModule = { title: string; summary: string; topics: string[] }

/** A course curriculum as a tick-off list with saved progress. Modules that
 * have lessons link to their lesson page; the rest expand to show topics. */
export function CourseTracker({
  coursePath,
  progressKey,
  programTitle,
  programSubtitle,
  modules,
}: {
  coursePath: string
  /** localStorage key used for this course's progress. */
  progressKey: string
  programTitle: string
  programSubtitle: string
  modules: TrackerModule[]
}) {
  const [completed, setCompleted] = useState<number[]>([])
  const [exam, setExam] = useState<ExamResult | null>(null)
  const [open, setOpen] = useState<number | null>(null)
  const { lessons } = useLessons(lessonKey(coursePath))
  const totalModules = modules.length

  useEffect(() => {
    setCompleted(getCompletedModules(progressKey))
    setExam(getExamResult(progressKey))
  }, [progressKey])

  const completedCount = modules.filter((_, i) => completed.includes(i)).length
  const progressPct = Math.round((completedCount / totalModules) * 100)
  const allDone = completedCount === totalModules

  return (
    <div className="rounded-[22px] border border-gray-200 bg-white p-5 sm:p-7">
      {/* Program header */}
      <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bento-mint">
          <GraduationCap className="h-5 w-5 text-bento-forest" />
        </span>
        <div>
          <h3 className="text-base font-bold text-brand-heading sm:text-lg">
            {programTitle}
          </h3>
          <p className="text-sm text-gray-500">
            {totalModules} modules · {programSubtitle}
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
        {modules.map(({ title, summary, topics }, index) => {
          const done = completed.includes(index)
          const expanded = open === index
          const screens = lessons?.[index]
          const label = (
            <span>
              <span className="block text-sm font-semibold text-brand-heading sm:text-base">
                {index + 1}. {title}
              </span>
              <span className="mt-0.5 block text-sm text-gray-500">{summary}</span>
            </span>
          )

          return (
            <li key={title} className="group rounded-xl transition-colors hover:bg-brand-bg">
              <div className="flex items-start gap-3 p-3">
                {screens ? (
                  // Modules with lessons are completed by passing their knowledge
                  // check, so the tick only shows status.
                  <span
                    role="img"
                    aria-label={done ? `Module ${index + 1} completed` : `Module ${index + 1} not completed yet`}
                    title={done ? "Completed" : "Pass this module's knowledge check to complete it"}
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                      done ? "border-brand-green bg-brand-green text-white" : "border-gray-300 bg-white"
                    )}
                  >
                    {done && <Check className="h-3 w-3" strokeWidth={3} />}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCompleted(toggleModule(progressKey, index))}
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
                )}

                {screens ? (
                  <Link
                    to={`${coursePath}/modules/${index + 1}`}
                    className="flex flex-1 items-start justify-between gap-3 text-left"
                  >
                    {label}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-green/30 bg-white text-brand-green">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : index)}
                    aria-expanded={expanded}
                    className="flex flex-1 items-start justify-between gap-3 text-left"
                  >
                    {label}
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-opacity",
                        !expanded && "sm:opacity-0 sm:group-hover:opacity-100"
                      )}
                    >
                      {expanded ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                )}
              </div>

              {expanded && !screens && (
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

      {allDone && exam?.passed ? (
        <CompletionCard
          to={`${coursePath}/certificate`}
          title={`You passed the final test with ${exam.scorePct}% — well done!`}
          text="Your certificate of completion is ready."
          action="View certificate"
        />
      ) : allDone ? (
        <CompletionCard
          to={`${coursePath}/final-test`}
          title={`You've completed all ${totalModules} modules!`}
          text="Pass the timed final test to earn your certificate of completion."
          action="Take the final test"
        />
      ) : (
        <p className="mt-5 flex items-center gap-3 rounded-xl border border-dashed border-gray-200 px-4 py-3 text-sm text-gray-500">
          <Award className="h-4 w-4 shrink-0 text-gray-400" />
          Complete all {totalModules} modules, then pass the final test, to earn your certificate of completion.
        </p>
      )}
    </div>
  )
}

function CompletionCard({ to, title, text, action }: { to: string; title: string; text: string; action: string }) {
  return (
    <Link
      to={to}
      className="mt-5 flex items-center gap-4 rounded-xl border border-brand-green/40 bg-bento-mint p-4 transition-shadow hover:shadow-sm"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
        <Award className="h-4 w-4" />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-semibold text-bento-forest">{title}</span>
        <span className="block text-xs text-bento-forest/80">{text}</span>
      </span>
      <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-brand-green">
        {action}
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}
