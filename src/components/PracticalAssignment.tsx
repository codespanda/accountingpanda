import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check, ClipboardList, ExternalLink, Loader2, Lock, RotateCcw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { LessonBlockView } from "@/components/lessons/LessonViewer"
import { cn } from "@/lib/utils"
import { useAssignment } from "@/lib/assignments"
import { ASSIGNMENT_PASS_PCT, isCorrect } from "@/lib/assignmentKit"
import {
  allModulesCompleted,
  getAssignmentAnswers,
  getAssignmentResult,
  saveAssignmentAnswers,
  saveAssignmentResult,
  type AssignmentResult,
} from "@/lib/courseProgress"

/** A stable, task-specific order for choice options (so the first option isn't always correct). */
function optionOrder(length: number, seed: number) {
  const order = Array.from({ length }, (_, i) => i)
  const shift = (seed * 7 + 3) % length
  return [...order.slice(shift), ...order.slice(0, shift)]
}

/** The one-month practical assignment that sits between the modules and the final test. */
export function PracticalAssignmentPage({
  courseTitle,
  progressKey,
  contentKey,
  totalModules,
  backTo,
  testPath,
  path,
}: {
  courseTitle: string
  /** The course's progress key in local storage. */
  progressKey: string
  /** The course's content key (src/content/assignments/<key>.ts). */
  contentKey: string
  totalModules: number
  backTo: string
  testPath: string
  path: string
}) {
  const { assignment, loading, available } = useAssignment(contentKey)
  const [unlocked] = useState(() => allModulesCompleted(progressKey, totalModules))
  const [answers, setAnswers] = useState<Record<number, string>>(() => getAssignmentAnswers(progressKey))
  const [result, setResult] = useState<AssignmentResult | null>(() => getAssignmentResult(progressKey))
  // Which tasks were right at the last check (shown until the answer is edited).
  const [marks, setMarks] = useState<Record<number, boolean> | null>(null)

  const passed = result?.passed === true
  const tasks = useMemo(() => assignment?.tasks ?? [], [assignment])
  const answeredCount = tasks.filter((_, i) => (answers[i] ?? "").trim() !== "").length

  const orders = useMemo(
    () => tasks.map((t, i) => (t.kind === "choice" ? optionOrder(t.options.length, i) : [])),
    [tasks],
  )

  const update = (i: number, value: string) => {
    const next = { ...answers, [i]: value }
    setAnswers(next)
    saveAssignmentAnswers(progressKey, next)
    setMarks((prev) => {
      if (!prev) return prev
      const copy = { ...prev }
      delete copy[i]
      return copy
    })
  }

  const checkAnswers = () => {
    const nextMarks: Record<number, boolean> = {}
    tasks.forEach((t, i) => {
      nextMarks[i] = isCorrect(t, answers[i])
    })
    const correct = Object.values(nextMarks).filter(Boolean).length
    const scorePct = Math.round((correct / tasks.length) * 100)
    const saved = saveAssignmentResult(progressKey, {
      correct,
      total: tasks.length,
      scorePct,
      passed: scorePct >= ASSIGNMENT_PASS_PCT,
      checkedAt: new Date().toISOString(),
    })
    setMarks(nextMarks)
    setResult(saved)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const lastScore = marks ? Math.round((Object.values(marks).filter(Boolean).length / tasks.length) * 100) : null

  return (
    <>
      <Seo
        title={`Practical assignment — ${courseTitle}`}
        description={`One month of practical transactions for ${courseTitle}.`}
        path={path}
        noIndex
      />

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-bento-forest px-6 py-10 sm:px-10 lg:px-14">
          <Link to={backTo} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-white/70">Practical assignment</p>
          <h1 className="mt-1 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {assignment?.title ?? "One month of real-style transactions"}
          </h1>
          <p className="mt-2 text-base text-white/85">
            {courseTitle}
            {assignment ? ` · ${assignment.period}` : ""}
          </p>
        </div>
      </section>

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-10 sm:px-10 lg:px-14">
          {!unlocked ? (
            <Centered icon={<Lock className="h-5 w-5" />} title="Not unlocked yet">
              Complete all {totalModules} modules of {courseTitle} to unlock the practical assignment.
              <Button className="mt-6" asChild>
                <Link to={backTo}>Back to Course</Link>
              </Button>
            </Centered>
          ) : !available ? (
            <Centered icon={<ClipboardList className="h-5 w-5" />} title="The practical assignment is being prepared">
              The assignment for {courseTitle} isn't ready yet. You can go straight to the final test.
              <Button className="mt-6" asChild>
                <Link to={testPath}>Take the final test</Link>
              </Button>
            </Centered>
          ) : loading || !assignment ? (
            <p className="flex items-center justify-center gap-2 py-16 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading the assignment…
            </p>
          ) : (
            <div>
              {/* Status */}
              {passed ? (
                <div className="mb-8 flex flex-col gap-3 rounded-xl border border-brand-green/40 bg-bento-mint p-4 sm:flex-row sm:items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-sm">
                    <span className="block font-semibold text-bento-forest">
                      Assignment passed{result ? ` — ${result.scorePct}%` : ""}. The worked solutions are shown below.
                    </span>
                    <span className="block text-xs text-bento-forest/80">The final test is now unlocked.</span>
                  </span>
                  <Button asChild>
                    <Link to={testPath}>
                      Take the final test
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ) : lastScore !== null ? (
                <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  <p className="font-semibold">
                    You scored {lastScore}% — you need {ASSIGNMENT_PASS_PCT}% to pass.
                  </p>
                  <p className="mt-1 text-xs">
                    Tasks marked with a cross need another look. Re-check the transactions, correct your answers and check
                    again — there's no limit on attempts.
                  </p>
                </div>
              ) : (
                <div className="mb-8 rounded-xl border border-gray-200 bg-brand-bg p-4 text-sm text-gray-600">
                  <p>{assignment.intro}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    Answer every task, then check your answers. Score at least {ASSIGNMENT_PASS_PCT}% to unlock the final
                    test. Enter figures without units — commas and currency symbols are fine.
                  </p>
                </div>
              )}

              {/* The month's data */}
              <h2 className="text-xl font-bold text-brand-heading">The month's records</h2>
              <div className="mt-5 space-y-5">
                {assignment.context.map((block, i) => (
                  <LessonBlockView key={i} block={block} />
                ))}
              </div>

              {/* Tasks */}
              <h2 className="mt-12 text-xl font-bold text-brand-heading">Your tasks</h2>
              <ol className="mt-5 space-y-4">
                {assignment.tasks.map((task, i) => {
                  const mark = marks?.[i]
                  return (
                    <li
                      key={i}
                      className={cn(
                        "rounded-xl border p-4",
                        mark === true ? "border-brand-green/50 bg-bento-mint/40" : mark === false ? "border-red-200 bg-red-50/60" : "border-gray-200",
                      )}
                    >
                      <div className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-brand-heading">{task.prompt}</p>
                          {task.kind === "number" ? (
                            <div className="mt-3 flex max-w-xs items-center gap-2">
                              {task.prefix && <span className="text-sm text-gray-500">{task.prefix}</span>}
                              <input
                                inputMode="decimal"
                                aria-label={`Answer to task ${i + 1}`}
                                value={answers[i] ?? ""}
                                onChange={(e) => update(i, e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm tabular-nums focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                              />
                              {task.suffix && <span className="text-sm text-gray-500">{task.suffix}</span>}
                            </div>
                          ) : (
                            <div className="mt-3 grid gap-2">
                              {orders[i].map((oi) => (
                                <label
                                  key={oi}
                                  className={cn(
                                    "flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2 text-sm",
                                    answers[i] === String(oi) ? "border-brand-green bg-bento-mint/40" : "border-gray-200 hover:border-gray-300",
                                  )}
                                >
                                  <input
                                    type="radio"
                                    name={`task-${i}`}
                                    className="mt-0.5 accent-brand-green"
                                    checked={answers[i] === String(oi)}
                                    onChange={() => update(i, String(oi))}
                                  />
                                  {task.options[oi]}
                                </label>
                              ))}
                            </div>
                          )}
                          {mark !== undefined && (
                            <p className={cn("mt-2 flex items-center gap-1.5 text-xs font-medium", mark ? "text-brand-green" : "text-red-700")}>
                              {mark ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                              {mark ? "Correct" : "Not quite — check your working"}
                            </p>
                          )}
                          {passed && (
                            <div className="mt-3 rounded-lg border border-dashed border-brand-green/50 bg-white px-3 py-2 text-xs text-gray-600">
                              <span className="font-semibold text-bento-forest">Worked solution: </span>
                              {task.solution}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>

              <div className="mt-8 flex flex-col items-start gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">
                  {answeredCount} of {tasks.length} answered
                </p>
                <Button onClick={checkAnswers} disabled={answeredCount === 0}>
                  {marks ? <RotateCcw className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                  {marks ? "Check again" : "Check my answers"}
                </Button>
              </div>

              {/* References */}
              {assignment.references.length > 0 && (
                <div className="mt-12 rounded-xl border border-gray-200 p-5">
                  <h2 className="text-base font-bold text-brand-heading">Official references</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    The figures in this course were checked against these sources. Rules change — always confirm the
                    current position before applying them.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {assignment.references.map((r) => (
                      <li key={r.url} className="text-sm">
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-brand-green hover:underline"
                        >
                          {r.label}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        {r.note && <span className="text-gray-500"> — {r.note}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function Centered({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bento-mint text-bento-forest">{icon}</span>
      <p className="mt-4 text-lg font-semibold text-brand-heading">{title}</p>
      <div className="mt-1 flex max-w-md flex-col items-center text-sm text-gray-500">{children}</div>
    </div>
  )
}
