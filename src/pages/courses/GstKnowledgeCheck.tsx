import { useEffect, useRef, useState } from "react"
import { ArrowRight, Check, PartyPopper, RotateCcw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { GstQuizQuestion } from "@/pages/courses/gstIndiaLessons"

const LETTERS = ["A", "B", "C", "D", "E"]

/** Multiple-choice check with per-question explanations and a pass mark. */
export function GstKnowledgeCheck({
  questions,
  passCount,
  onPass,
}: {
  questions: GstQuizQuestion[]
  passCount: number
  onPass?: () => void
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (checked) resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }, [checked])

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length
  const correctCount = questions.filter((q, i) => answers[i] === q.answer).length
  const passed = correctCount >= passCount

  const select = (q: number, option: number) => {
    if (checked) return
    setAnswers((prev) => ({ ...prev, [q]: option }))
  }

  const retry = () => {
    setAnswers({})
    setChecked(false)
  }

  return (
    <div className="space-y-4">
      {checked && (
        <div
          ref={resultRef}
          role="status"
          className={cn(
            "flex flex-col items-start gap-4 rounded-xl p-5 sm:flex-row sm:items-center",
            passed ? "bg-bento-mint" : "bg-red-50"
          )}
        >
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
              passed ? "bg-white text-brand-green" : "bg-white text-red-500"
            )}
          >
            {passed ? <PartyPopper className="h-6 w-6" /> : <X className="h-6 w-6" />}
          </span>
          <div className="flex-1">
            <p className={cn("text-lg font-bold", passed ? "text-bento-forest" : "text-red-900")}>
              You scored {correctCount} out of {questions.length}
            </p>
            <p className={cn("text-sm", passed ? "text-bento-forest/80" : "text-red-800")}>
              {passed
                ? "Well done — you've passed this module. Review the explanations below, then continue."
                : `You need at least ${passCount} correct to pass. Read the explanations below and try again.`}
            </p>
          </div>
          {passed ? (
            onPass && (
              <Button onClick={onPass} className="shrink-0">
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            )
          ) : (
            <Button variant="outline" onClick={retry} className="shrink-0 bg-white">
              <RotateCcw className="h-4 w-4" />
              Try again
            </Button>
          )}
        </div>
      )}

      {questions.map((q, qi) => {
        const selected = answers[qi]
        const correct = selected === q.answer

        return (
          <fieldset key={q.question} className="rounded-xl border border-gray-200 bg-white p-5">
            <legend className="sr-only">Question {qi + 1}</legend>
            <p className="text-sm font-semibold leading-relaxed text-brand-heading sm:text-[0.95rem]">
              {qi + 1}. {q.question}
            </p>
            <div className="mt-3 space-y-2">
              {q.options.map((option, oi) => {
                const isSelected = selected === oi
                const isAnswer = oi === q.answer
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => select(qi, oi)}
                    disabled={checked}
                    aria-pressed={isSelected}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors",
                      !checked && !isSelected && "border-gray-200 text-gray-700 hover:border-brand-green/40 hover:bg-brand-bg",
                      !checked && isSelected && "border-brand-green bg-bento-mint text-brand-heading",
                      checked && isAnswer && "border-brand-green bg-bento-mint text-brand-heading",
                      checked && isSelected && !isAnswer && "border-red-300 bg-red-50 text-brand-heading",
                      checked && !isSelected && !isAnswer && "border-gray-100 text-gray-400"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                        isSelected || (checked && isAnswer)
                          ? "border-transparent bg-brand-green text-white"
                          : "border-gray-300 text-gray-500",
                        checked && isSelected && !isAnswer && "bg-red-500"
                      )}
                    >
                      {LETTERS[oi]}
                    </span>
                    <span className="flex-1">{option}</span>
                    {checked && isAnswer && <Check className="h-4 w-4 shrink-0 text-brand-green" />}
                    {checked && isSelected && !isAnswer && <X className="h-4 w-4 shrink-0 text-red-500" />}
                  </button>
                )
              })}
            </div>

            {checked && (
              <p
                className={cn(
                  "mt-3 rounded-lg px-3 py-2.5 text-sm leading-relaxed",
                  correct ? "bg-brand-bg text-gray-700" : "bg-red-50 text-red-900"
                )}
              >
                <span className="font-semibold">{correct ? "Correct. " : "Not quite. "}</span>
                {q.explanation}
              </p>
            )}
          </fieldset>
        )
      })}

      {!checked && (
        <div className="flex items-center justify-between gap-3 pt-2">
          <p className="text-xs text-gray-500">
            {answeredCount} of {questions.length} answered
          </p>
          <Button
            onClick={() => setChecked(true)}
            disabled={!allAnswered}
          >
            Check answers
          </Button>
        </div>
      )}
    </div>
  )
}
