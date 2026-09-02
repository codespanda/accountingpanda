import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { cn } from "@/lib/utils"
import { bookkeepingBasicsModules } from "@/pages/courses/BookkeepingBasicsCourse"
import { bookkeepingBasicsLessons, type LessonBlock } from "@/pages/courses/bookkeepingBasicsLessons"
import { getCompletedModules, completeModule, isModuleUnlocked } from "@/lib/courseProgress"

const COURSE_SLUG = "bookkeeping-basics-for-beginners"
const COURSE_PATH = "/learning/bookkeeping/bookkeeping-basics-for-beginners"

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
      return (
        <ul className="mt-3 space-y-1.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
              {item}
            </li>
          ))}
        </ul>
      )
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
  const isLastPage = pageIndex === totalPages - 1
  const currentLesson = lessons?.[pageIndex]

  const handleMoveNext = () => {
    setPageIndex((p) => p + 1)
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
                    i <= pageIndex ? "bg-white" : "bg-white/25"
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
                <LessonBlockView key={i} block={block} />
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
                    {section.items.length > 0 && (
                      <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-end border-t border-gray-100 pt-6">
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
