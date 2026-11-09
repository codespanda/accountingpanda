import { useCallback, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Award, Check, Clock, Loader2, Lock, RotateCcw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { cn } from "@/lib/utils"
import type { QuizQuestion } from "@/lib/lessonTypes"
import {
  allModulesCompleted,
  getExamAttempt,
  getExamResult,
  getLastExamDay,
  localDay,
  saveExamAttempt,
  saveExamResult,
  setLastExamDay,
  type ExamAttempt,
  type ExamResult,
} from "@/lib/courseProgress"
import { FINAL_TEST_PASS_PCT, SECONDS_PER_QUESTION, pickQuestions } from "@/lib/finalTest"

const LETTERS = ["A", "B", "C", "D", "E", "F"]

function formatTime(totalSeconds: number) {
  const s = Math.max(0, Math.ceil(totalSeconds))
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, "0")}`
}

function remainingSeconds(attempt: ExamAttempt) {
  return attempt.durationSec - (Date.now() - attempt.startedAt) / 1000
}

/** A timed final test drawn from a course's knowledge-check questions. */
export function FinalTest({
  courseTitle,
  courseSlug,
  totalModules,
  pool,
  loading = false,
  questionCount,
  backTo,
  backLabel,
  certificatePath,
  path,
}: {
  courseTitle: string
  /** The course's progress key in local storage. */
  courseSlug: string
  totalModules: number
  /** All questions the test can draw from. */
  pool: QuizQuestion[]
  loading?: boolean
  questionCount: number
  backTo: string
  backLabel: string
  certificatePath: string
  path: string
}) {
  const [unlocked] = useState(() => allModulesCompleted(courseSlug, totalModules))
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null)
  // An attempt left in storage means the last test stopped part-way (page
  // closed, reloaded or connection lost). It is never resumed: the learner
  // restarts from the beginning with a new set of questions.
  const [interrupted, setInterrupted] = useState(() => getExamAttempt(courseSlug) !== null)
  const [result, setResult] = useState<ExamResult | null>(() => getExamResult(courseSlug))
  const [review, setReview] = useState<{ attempt: ExamAttempt; result: ExamResult } | null>(null)
  const [now, setNow] = useState(() => Date.now())
  const [confirmSubmit, setConfirmSubmit] = useState(false)
  const [lastDay, setLastDay] = useState(() => getLastExamDay(courseSlug))
  // One attempt per calendar day, counted when an attempt is submitted
  // (or runs out of time). Interrupted attempts don't count.
  const attemptedToday = lastDay === localDay()

  const durationSec = questionCount * SECONDS_PER_QUESTION
  const minutes = Math.round(durationSec / 60)
  const validAttempt = attempt && pool.length > 0 ? attempt : null

  const submit = useCallback(
    (a: ExamAttempt) => {
      const correct = a.ids.filter((id, i) => a.answers[i] === pool[id].answer).length
      const total = a.ids.length
      const scorePct = Math.round((correct / total) * 100)
      const thisResult: ExamResult = {
        correct,
        total,
        scorePct,
        passed: scorePct >= FINAL_TEST_PASS_PCT,
        takenAt: new Date().toISOString(),
      }
      setResult(saveExamResult(courseSlug, thisResult))
      saveExamAttempt(courseSlug, null)
      const today = localDay()
      setLastExamDay(courseSlug, today)
      setLastDay(today)
      setAttempt(null)
      setReview({ attempt: a, result: thisResult })
      setConfirmSubmit(false)
      window.scrollTo({ top: 0 })
    },
    [courseSlug, pool],
  )

  // Tick the clock and submit automatically when time runs out.
  useEffect(() => {
    if (!validAttempt) return
    const timer = window.setInterval(() => {
      setNow(Date.now())
      if (remainingSeconds(validAttempt) <= 0) submit(validAttempt)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [validAttempt, submit])

  // Warn before closing or reloading the page during a test.
  const inProgress = validAttempt !== null
  useEffect(() => {
    if (!inProgress) return
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ""
    }
    window.addEventListener("beforeunload", warn)
    return () => window.removeEventListener("beforeunload", warn)
  }, [inProgress])

  const start = () => {
    if (attemptedToday) return
    const a: ExamAttempt = {
      ids: pickQuestions(pool.length, questionCount),
      answers: {},
      startedAt: Date.now(),
      durationSec,
    }
    saveExamAttempt(courseSlug, a)
    setAttempt(a)
    setInterrupted(false)
    setReview(null)
    setNow(Date.now())
    window.scrollTo({ top: 0 })
  }

  const answer = (qi: number, oi: number) => {
    setAttempt((prev) => (prev ? { ...prev, answers: { ...prev.answers, [qi]: oi } } : prev))
    setConfirmSubmit(false)
  }

  const answeredCount = validAttempt ? Object.keys(validAttempt.answers).length : 0
  const unanswered = validAttempt ? validAttempt.ids.length - answeredCount : 0
  const left = validAttempt ? Math.max(0, validAttempt.durationSec - (now - validAttempt.startedAt) / 1000) : 0

  const reviewItems = useMemo(
    () => (review ? review.attempt.ids.map((id, i) => ({ q: pool[id], chosen: review.attempt.answers[i] })) : []),
    [review, pool],
  )

  return (
    <>
      <Seo title={`Final test — ${courseTitle}`} description={`Timed final test for ${courseTitle}.`} path={path} noIndex />

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-bento-forest px-6 py-10 sm:px-10 lg:px-14">
          <Link to={backTo} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">Final test</h1>
          <p className="mt-2 text-base text-white/85">{courseTitle}</p>
        </div>
      </section>

      {validAttempt && (
        <div className="sticky top-[84px] z-40 container-px pt-3">
          <div
            className={cn(
              "mx-auto flex max-w-4xl items-center justify-between gap-3 rounded-2xl border px-5 py-3 shadow-sm",
              left <= 300 ? "border-red-200 bg-red-50" : "border-gray-200 bg-white",
            )}
            role="timer"
            aria-live="off"
          >
            <span className={cn("flex items-center gap-2 text-lg font-bold tabular-nums", left <= 300 ? "text-red-700" : "text-brand-heading")}>
              <Clock className="h-5 w-5" />
              {formatTime(left)}
            </span>
            <span className="text-sm text-gray-600">
              {answeredCount} of {validAttempt.ids.length} answered
            </span>
          </div>
        </div>
      )}

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-10 sm:px-10 lg:px-14">
          {!unlocked ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <Lock className="h-5 w-5" />
              </span>
              <p className="mt-4 text-lg font-semibold text-brand-heading">Not unlocked yet</p>
              <p className="mt-1 max-w-md text-sm text-gray-500">
                Complete all {totalModules} modules of {courseTitle} to unlock the final test.
              </p>
              <Button className="mt-6" asChild>
                <Link to={backTo}>{backLabel}</Link>
              </Button>
            </div>
          ) : loading || pool.length === 0 ? (
            <p className="flex items-center justify-center gap-2 py-16 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading the test…
            </p>
          ) : validAttempt ? (
            <div className="space-y-5">
              {validAttempt.ids.map((id, qi) => {
                const q = pool[id]
                return (
                  <fieldset key={qi} className="rounded-xl border border-gray-200 p-5">
                    <legend className="sr-only">Question {qi + 1}</legend>
                    <p className="text-sm font-semibold leading-relaxed text-brand-heading sm:text-[0.95rem]">
                      {qi + 1}. {q.question}
                    </p>
                    <div className="mt-3 space-y-2">
                      {q.options.map((option, oi) => {
                        const selected = validAttempt.answers[qi] === oi
                        return (
                          <button
                            key={oi}
                            type="button"
                            onClick={() => answer(qi, oi)}
                            aria-pressed={selected}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors",
                              selected
                                ? "border-brand-green bg-bento-mint text-brand-heading"
                                : "border-gray-200 text-gray-700 hover:border-brand-green/40 hover:bg-brand-bg",
                            )}
                          >
                            <span
                              className={cn(
                                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                                selected ? "border-transparent bg-brand-green text-white" : "border-gray-300 text-gray-500",
                              )}
                            >
                              {LETTERS[oi]}
                            </span>
                            <span className="flex-1">{option}</span>
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>
                )
              })}

              <div className="flex flex-col items-end gap-2 border-t border-gray-100 pt-6">
                {confirmSubmit && unanswered > 0 && (
                  <p className="text-sm font-medium text-red-700">
                    You have {unanswered} unanswered {unanswered === 1 ? "question" : "questions"}. Unanswered questions count as wrong.
                  </p>
                )}
                <Button
                  onClick={() => (unanswered > 0 && !confirmSubmit ? setConfirmSubmit(true) : submit(validAttempt))}
                >
                  {confirmSubmit && unanswered > 0 ? "Submit anyway" : "Submit test"}
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {review && (
                <div
                  role="status"
                  className={cn("mb-8 rounded-xl p-5", review.result.passed ? "bg-bento-mint" : "bg-red-50")}
                >
                  <p className={cn("text-lg font-bold", review.result.passed ? "text-bento-forest" : "text-red-900")}>
                    You scored {review.result.scorePct}% ({review.result.correct} of {review.result.total})
                  </p>
                  <p className={cn("mt-1 text-sm", review.result.passed ? "text-bento-forest/80" : "text-red-800")}>
                    {review.result.passed
                      ? "Congratulations — you passed the final test. Your certificate is ready, and you can review your answers below."
                      : `You need ${FINAL_TEST_PASS_PCT}% to pass. Review the course modules and try again tomorrow — you'll get a new set of questions.`}
                  </p>
                </div>
              )}

              {result?.passed && (
                <div className="mb-8 flex flex-col items-start gap-4 rounded-xl border border-brand-green/40 bg-white p-5 sm:flex-row sm:items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Award className="h-5 w-5" />
                  </span>
                  <p className="flex-1 text-sm text-gray-600">
                    You passed the final test with <span className="font-semibold text-brand-heading">{result.scorePct}%</span>.
                  </p>
                  <Button asChild>
                    <Link to={certificatePath}>
                      View certificate
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}

              {interrupted && !review && (
                <div role="status" className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <p className="text-base font-bold text-amber-900">Your previous attempt was interrupted</p>
                  <p className="mt-1 text-sm text-amber-800">
                    It wasn't submitted, so it doesn't count. Restart the test from the beginning — you'll get a new set of
                    questions and the full time.
                  </p>
                </div>
              )}

              {!review && (
                <>
                  <h2 className="text-xl font-bold text-brand-heading">Before you start</h2>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• {questionCount} multiple-choice questions drawn from across the course</li>
                    <li>• {minutes} minutes in total — the timer starts when you press Start</li>
                    <li>• Pass mark: {FINAL_TEST_PASS_PCT}%</li>
                    <li>• The test is submitted automatically when time runs out</li>
                    <li>• If the test stops part-way — for example the page is closed or reloaded, or your connection drops — you can restart it from the beginning with a new set of questions</li>
                    <li>• One completed attempt per day — if you don't pass, you can try again tomorrow with a new set of questions</li>
                  </ul>
                </>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {attemptedToday ? (
                  <p className="flex items-center gap-2 rounded-lg bg-brand-bg px-4 py-2.5 text-sm font-medium text-gray-600">
                    <Clock className="h-4 w-4 shrink-0" />
                    You've used today's attempt. Your next attempt is available tomorrow.
                  </p>
                ) : (
                  <Button onClick={start}>
                    {interrupted || review || result ? <RotateCcw className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                    {interrupted ? "Restart the test" : review || result ? "Retake the test" : "Start the test"}
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link to={backTo}>{backLabel}</Link>
                </Button>
              </div>

              {review?.result.passed && (
                <div className="mt-10 space-y-4">
                  <h2 className="text-lg font-bold text-brand-heading">Review your answers</h2>
                  {reviewItems.map(({ q, chosen }, i) => {
                    const right = chosen === q.answer
                    return (
                      <div key={i} className="rounded-xl border border-gray-200 p-5">
                        <p className="flex gap-2 text-sm font-semibold text-brand-heading">
                          {right ? <Check className="h-4 w-4 shrink-0 text-brand-green" /> : <X className="h-4 w-4 shrink-0 text-red-500" />}
                          {i + 1}. {q.question}
                        </p>
                        {!right && (
                          <p className="mt-2 text-sm text-red-700">
                            Your answer: {chosen === undefined ? "not answered" : q.options[chosen]}
                          </p>
                        )}
                        <p className="mt-1 text-sm text-bento-forest">Correct answer: {q.options[q.answer]}</p>
                        {q.explanation && <p className="mt-1 text-sm text-gray-600">{q.explanation}</p>}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
