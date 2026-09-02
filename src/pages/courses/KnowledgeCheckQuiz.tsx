import { useState } from "react"
import { createPortal } from "react-dom"
import { Check, X, PartyPopper, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Question = { question: string; options: string[]; answer: string }

function optionLetter(option: string) {
  return option.trim().charAt(0)
}

export function KnowledgeCheckQuiz({
  questions,
  passPct,
  onPass,
}: {
  questions: Question[]
  passPct: number
  onPass: () => void
}) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const allAnswered = questions.every((_, i) => answers[i])
  const correctCount = questions.filter((q, i) => answers[i] === q.answer).length
  const scorePct = Math.round((correctCount / questions.length) * 100)
  const passed = scorePct >= passPct

  const select = (qIndex: number, letter: string) => {
    if (checked) return
    setAnswers((prev) => ({ ...prev, [qIndex]: letter }))
  }

  const handleCheckScore = () => {
    setChecked(true)
    setShowResult(true)
  }

  const handleRetry = () => {
    setAnswers({})
    setChecked(false)
    setShowResult(false)
  }

  const handleContinue = () => {
    setShowResult(false)
    onPass()
  }

  return (
    <div className="mt-4 space-y-4">
      {questions.map((q, qIndex) => {
        const selected = answers[qIndex]
        return (
          <div key={q.question} className="rounded-2xl border border-gray-100 p-5">
            <p className="text-sm font-semibold text-brand-heading">
              {qIndex + 1}. {q.question}
            </p>
            <div className="mt-3 space-y-1.5">
              {q.options.map((option) => {
                const letter = optionLetter(option)
                const isSelected = selected === letter
                const isCorrect = letter === q.answer

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => select(qIndex, letter)}
                    disabled={checked}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                      !checked && !isSelected && "border-gray-100 text-gray-600 hover:bg-brand-bg",
                      !checked && isSelected && "border-brand-green/40 bg-brand-green-light text-brand-heading",
                      checked && isCorrect && "border-brand-green/40 bg-brand-green-light text-brand-heading",
                      checked && isSelected && !isCorrect && "border-red-200 bg-red-50 text-brand-heading",
                      checked && !isSelected && !isCorrect && "border-gray-100 text-gray-400"
                    )}
                  >
                    <span>{option}</span>
                    {checked && isCorrect && <Check className="h-4 w-4 shrink-0 text-brand-green" />}
                    {checked && isSelected && !isCorrect && (
                      <X className="h-4 w-4 shrink-0 text-red-500" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">
          {Object.keys(answers).length} of {questions.length} answered
        </p>
        {checked ? (
          <Button variant="outline" onClick={handleRetry}>
            <RotateCcw className="h-4 w-4" />
            Retry Quiz
          </Button>
        ) : (
          <Button onClick={handleCheckScore} disabled={!allAnswered}>
            Check My Score
          </Button>
        )}
      </div>

      {showResult &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
              <div
                className={cn(
                  "mx-auto flex h-14 w-14 items-center justify-center rounded-full",
                  passed ? "bg-brand-green-light" : "bg-red-50"
                )}
              >
                {passed ? (
                  <PartyPopper className="h-6 w-6 text-brand-green" />
                ) : (
                  <X className="h-6 w-6 text-red-500" />
                )}
              </div>
              <p className="mt-4 text-3xl font-bold text-brand-heading">{scorePct}%</p>
              <p className="mt-1 text-sm text-gray-500">
                {correctCount} of {questions.length} correct
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {passed
                  ? "Nice work — you passed! You can move on to the next page."
                  : `You need at least ${passPct}% to continue. Review the module and give it another try.`}
              </p>
              <div className="mt-5">
                {passed ? (
                  <Button className="w-full" onClick={handleContinue}>
                    Continue
                  </Button>
                ) : (
                  <Button className="w-full" onClick={handleRetry}>
                    <RotateCcw className="h-4 w-4" />
                    Retry Quiz
                  </Button>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
