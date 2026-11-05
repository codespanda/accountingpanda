import { Link, Navigate, useNavigate } from "react-router-dom"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Seo } from "@/components/Seo"
import { LessonViewer } from "@/components/lessons/LessonViewer"
import { completeModule } from "@/lib/courseProgress"
import { lessonKey, useLessons } from "@/lib/lessons"

/** A module's lesson screens on their own page, for any course with lessons. */
export function ModuleLessonPage({
  courseTitle,
  coursePath,
  progressKey,
  moduleNumber,
  modules,
}: {
  courseTitle: string
  coursePath: string
  /** localStorage key used for this course's progress. */
  progressKey: string
  moduleNumber: string | undefined
  modules: { title: string; summary: string }[]
}) {
  const navigate = useNavigate()
  const { lessons, loading } = useLessons(lessonKey(coursePath))
  const index = Number(moduleNumber) - 1
  const module = modules[index]
  const screens = lessons?.[index]

  if (!module || (!loading && !screens)) return <Navigate to={coursePath} replace />

  const finish = () => {
    completeModule(progressKey, index)
    navigate(coursePath)
  }

  return (
    <>
      <Seo
        title={`Module ${index + 1}: ${module.title} — ${courseTitle}`}
        description={module.summary}
        path={`${coursePath}/modules/${index + 1}`}
        noIndex
      />

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-bento-forest px-6 py-10 sm:px-10 lg:px-14">
          <Link
            to={coursePath}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>
          <p className="mt-5 text-sm font-semibold text-white/75">Module {index + 1}</p>
          <h1 className="mt-1 text-3xl font-bold leading-tight text-white sm:text-4xl">{module.title}</h1>
          <p className="mt-2 text-base text-white/85">{module.summary}</p>
        </div>
      </section>

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          {screens ? (
            <LessonViewer key={index} screens={screens} onFinish={finish} />
          ) : (
            <p className="flex items-center justify-center gap-2 py-16 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading lesson…
            </p>
          )}
        </div>
      </section>
    </>
  )
}
