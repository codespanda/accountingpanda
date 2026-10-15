import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Seo } from "@/components/Seo"
import { completeModule } from "@/lib/courseProgress"
import { GST_INDIA_COURSE_PATH, gstIndiaModuleSummaries } from "@/pages/courses/gstIndiaModules"
import { gstIndiaLessons } from "@/pages/courses/gstIndiaLessons"
import { GstLessonViewer } from "@/pages/courses/GstLessonViewer"

const COURSE_SLUG = "learn-gst-in-india"

/** A GST module's lesson screens, on their own page. */
export function GstModuleLesson() {
  const { moduleNumber } = useParams<{ moduleNumber: string }>()
  const navigate = useNavigate()
  const index = Number(moduleNumber) - 1
  const screens = gstIndiaLessons[index]
  const module = gstIndiaModuleSummaries[index]

  if (!screens || !module) return <Navigate to={GST_INDIA_COURSE_PATH} replace />

  const finish = () => {
    completeModule(COURSE_SLUG, index)
    navigate(GST_INDIA_COURSE_PATH)
  }

  return (
    <>
      <Seo
        title={`Module ${index + 1}: ${module.title} — Learn GST in India`}
        description={module.summary}
        path={`${GST_INDIA_COURSE_PATH}/modules/${index + 1}`}
        noIndex
      />

      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-bento-forest px-6 py-10 sm:px-10 lg:px-14">
          <Link
            to={GST_INDIA_COURSE_PATH}
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
          <GstLessonViewer key={index} screens={screens} onFinish={finish} />
        </div>
      </section>
    </>
  )
}
