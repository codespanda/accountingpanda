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
  const reveal = checked && passed

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
          <div key={q.question} className="rounded-[22px] bg-brand-bg p-5">
            <p className="text-sm font-semibold text-brand-heading">
              {qIndex + 1}. {q.question}
            </p>
            <div className="mt-3 space-y-1.5">
              {q.options.map((option) => {
                const letter = optionLetter(option)
                const isSelected = selected === letter
                const isCorrect = letter === q.answer
                // The right answer is only revealed once the learner has passed.
                const showAsAnswer = reveal && isCorrect && !isSelected

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => select(qIndex, letter)}
                    disabled={checked}
                    aria-pressed={isSelected}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                      !checked && !isSelected && "border-gray-100 text-gray-600 hover:bg-brand-bg",
                      !checked && isSelected && "border-brand-green/40 bg-brand-green-light text-brand-heading",
                      checked && isSelected && isCorrect && "border-brand-green bg-brand-green-light text-brand-heading",
                      checked && isSelected && !isCorrect && "border-red-300 bg-red-50 text-brand-heading",
                      showAsAnswer && "border-dashed border-brand-green/60 text-brand-heading",
                      checked && !isSelected && !showAsAnswer && "border-gray-100 text-gray-400"
                    )}
                  >
                    <span>{option}</span>
                    {checked && isSelected && (
                      <span
                        className={cn(
                          "flex shrink-0 items-center gap-1 text-xs font-semibold",
                          isCorrect ? "text-brand-green" : "text-red-600"
                        )}
                      >
                        Your answer
                        {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      </span>
                    )}
                    {showAsAnswer && (
                      <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-green">
                        Correct answer
                        <Check className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
            {checked && !reveal && selected !== q.answer && (
              <p className="mt-2 text-xs font-medium text-red-700">
                Not quite — review this topic in the module, then try again.
              </p>
            )}
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
            <div className="w-full max-w-sm rounded-[22px] bg-white p-6 text-center shadow-xl">
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
