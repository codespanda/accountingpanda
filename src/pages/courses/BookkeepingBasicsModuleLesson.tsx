import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, ChevronDown, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { cn } from "@/lib/utils"
import { bookkeepingBasicsModules } from "@/pages/courses/BookkeepingBasicsCourse"
import { bookkeepingBasicsLessons, type LessonBlock } from "@/pages/courses/bookkeepingBasicsLessons"
import { DoubleEntryDemo } from "@/pages/courses/DoubleEntryDemo"
import { getCompletedModules, completeModule, isModuleUnlocked } from "@/lib/courseProgress"

const COURSE_SLUG = "bookkeeping-basics-for-beginners"
const COURSE_PATH = "/learning/bookkeeping/bookkeeping-basics-for-beginners"

/** A bullet list you can check off as you go — resets per page via `key`. */
function InteractiveChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((item, i) => {
        const done = checked.has(i)
        return (
          <li key={item}>
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-start gap-2 rounded-lg py-0.5 text-left text-sm hover:bg-brand-bg"
            >
              {done ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
              )}
              <span className={cn("text-gray-600", done && "text-gray-400 line-through")}>
                {item}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

/** Numbered steps that expand/collapse on click. */
function InteractiveSteps({
  items,
}: {
  items: { title: string; body?: string; list?: string[] }[]
}) {
  const [open, setOpen] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="mt-4 space-y-2">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div key={item.title} className="rounded-xl border border-gray-100">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-3 px-3 py-2.5 text-left"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green">
                {i + 1}
              </span>
              <span className="flex-1 text-sm font-semibold text-brand-heading">{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-gray-400 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (item.body || item.list) && (
              <div className="px-3 pb-3 pl-12">
                {item.body && <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>}
                {item.list && (
                  <ul className="mt-1.5 space-y-1">
                    {item.list.map((li) => (
                      <li key={li} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/** A glossary term — tap to flip and reveal the definition. */
function InteractiveTerm({
  term,
  definition,
  example,
  examples,
}: {
  term: string
  definition: string
  example?: string
  examples?: string[]
}) {
  const [revealed, setRevealed] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setRevealed((r) => !r)}
      className="mt-3 flex w-full items-start justify-between gap-3 border-b border-gray-100 pb-3 text-left"
    >
      <div className="flex-1">
        <p className="text-sm font-semibold text-brand-heading">{term}</p>
        {revealed ? (
          <>
            <p className="mt-0.5 text-sm leading-relaxed text-gray-600">{definition}</p>
            {example && <p className="mt-1 text-xs text-gray-500">Example: {example}</p>}
            {examples && (
              <ul className="mt-1.5 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                {examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand-green/60" />
                    {ex}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <p className="mt-0.5 text-xs text-gray-400">Tap to reveal definition</p>
        )}
      </div>
      <ChevronDown
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 text-gray-400 transition-transform",
          revealed && "rotate-180"
        )}
      />
    </button>
  )
}

/** A multiple-choice question — pick an option to see if you're right. */
function InteractiveQuiz({
  question,
  options,
  answer,
}: {
  question: string
  options: string[]
  answer: string
}) {
  const [selected, setSelected] = useState<string | null>(null)

  const optionLetter = (option: string) => option.trim().charAt(0)

  return (
    <div className="mt-4 rounded-2xl border border-gray-100 p-5">
      <p className="text-sm font-semibold text-brand-heading">{question}</p>
      <div className="mt-3 space-y-1.5">
        {options.map((option) => {
          const letter = optionLetter(option)
          const isSelected = selected === letter
          const isCorrect = letter === answer
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(letter)}
              disabled={selected !== null}
              className={cn(
                "flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                !selected && "border-gray-100 text-gray-600 hover:bg-brand-bg",
                selected && isCorrect && "border-brand-green/40 bg-brand-green-light text-brand-heading",
                selected && isSelected && !isCorrect && "border-red-200 bg-red-50 text-brand-heading",
                selected && !isSelected && !isCorrect && "border-gray-100 text-gray-400"
              )}
            >
              <span>{option}</span>
              {selected && isCorrect && <Check className="h-4 w-4 shrink-0 text-brand-green" />}
              {selected && isSelected && !isCorrect && (
                <X className="h-4 w-4 shrink-0 text-red-500" />
              )}
            </button>
          )
        })}
      </div>
      {selected && (
        <p
          className={cn(
            "mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold",
            selected === answer
              ? "bg-brand-green-light text-brand-green"
              : "bg-red-50 text-red-600"
          )}
        >
          {selected === answer ? "Correct!" : `Not quite — the correct answer is ${answer}.`}
        </p>
      )}
    </div>
  )
}

function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case "h3":
      return (
        <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand-green first:mt-0">
          {block.text}
        </h3>
      )
    case "p":
      return <p className="mt-3 text-base leading-relaxed text-gray-600">{block.text}</p>
    case "list":
      return <InteractiveChecklist items={block.items} />
    case "note":
      return (
        <div className="mt-4 rounded-xl bg-brand-green-light p-4 text-sm font-medium text-brand-heading">
          {block.text}
        </div>
      )
    case "image":
      return (
        <img
          src={block.src}
          alt={block.alt}
          className="mt-4 w-full rounded-2xl border border-gray-100 shadow-sm"
        />
      )
    case "table":
      return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="bg-brand-bg text-left">
                  {block.headers.map((header) => (
                    <th key={header} className="px-4 py-3 font-semibold text-brand-heading">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-gray-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    case "steps":
      return <InteractiveSteps items={block.items} />
    case "term":
      return (
        <InteractiveTerm
          term={block.term}
          definition={block.definition}
          example={block.example}
          examples={block.examples}
        />
      )
    case "quiz":
      return <InteractiveQuiz question={block.question} options={block.options} answer={block.answer} />
    case "double-entry-demo":
      return <DoubleEntryDemo transactions={block.transactions} />
  }
}

export function BookkeepingBasicsModuleLesson() {
  const { moduleNumber } = useParams<{ moduleNumber: string }>()
  const navigate = useNavigate()
  const moduleIndex = Number(moduleNumber) - 1
  const courseModule = bookkeepingBasicsModules[moduleIndex]
  const lessons = bookkeepingBasicsLessons[moduleIndex]

  const [completed, setCompleted] = useState<number[] | null>(null)
  const [pageIndex, setPageIndex] = useState(0)

  useEffect(() => {
    if (!courseModule) {
      navigate(`${COURSE_PATH}/progress`, { replace: true })
      return
    }
    const current = getCompletedModules(COURSE_SLUG)
    if (!isModuleUnlocked(moduleIndex, current)) {
      navigate(`${COURSE_PATH}/progress`, { replace: true })
      return
    }
    setCompleted(current)
    setPageIndex(0)
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleIndex])

  if (!courseModule || completed === null) return null

  const totalPages = lessons ? lessons.length : 1
  const safePageIndex = Math.min(pageIndex, totalPages - 1)
  const isLastPage = safePageIndex === totalPages - 1
  const currentLesson = lessons?.[safePageIndex]

  const handleMoveNext = () => {
    setPageIndex((p) => Math.min(p + 1, totalPages - 1))
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }

  const handleMoveBack = () => {
    setPageIndex((p) => Math.max(p - 1, 0))
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }

  const handleComplete = () => {
    completeModule(COURSE_SLUG, moduleIndex)
    navigate(`${COURSE_PATH}/progress`)
  }

  const headerTitle = lessons ? currentLesson!.title : courseModule.title

  return (
    <>
      <Seo
        title={headerTitle}
        description={`Lesson content for ${courseModule.title} — part of the Bookkeeping Basics for Beginners course.`}
        path={`${COURSE_PATH}/modules/${moduleIndex + 1}`}
        noIndex
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark py-10 lg:py-12">
        <div className="container-px mx-auto max-w-3xl">
          <Link
            to={`${COURSE_PATH}/progress`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course Progress
          </Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-white/70">
            Module {moduleIndex + 1} of {bookkeepingBasicsModules.length}
          </p>
          <h1 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {headerTitle}
          </h1>

          {lessons && lessons.length > 1 && (
            <div className="mt-5 flex items-center gap-1.5">
              {lessons.map((lesson, i) => (
                <span
                  key={lesson.title}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors",
                    i <= safePageIndex ? "bg-white" : "bg-white/25"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 lg:py-14">
        <div className="container-px mx-auto max-w-3xl">
          {lessons ? (
            <div>
              {currentLesson!.blocks.map((block, i) => (
                <LessonBlockView key={`${safePageIndex}-${i}`} block={block} />
              ))}
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-500">
                Full lesson content for this module is coming soon. Here's
                what it covers:
              </p>
              <div className="mt-4 space-y-4">
                {courseModule.sections.map((section, i) => (
                  <div key={section.heading ?? i}>
                    {section.heading && (
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                        {section.heading}
                      </p>
                    )}
                    {section.intro && (
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                        {section.intro}
                      </p>
                    )}
                    {section.items.length > 0 && <InteractiveChecklist items={section.items} />}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
            {lessons && safePageIndex > 0 ? (
              <Button variant="outline" onClick={handleMoveBack}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            ) : (
              <span />
            )}

            {lessons && !isLastPage ? (
              <Button onClick={handleMoveNext}>
                Move Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleComplete}>
                Complete Module
                <CheckCircle2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
