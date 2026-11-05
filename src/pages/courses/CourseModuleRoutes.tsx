import { Navigate, useParams } from "react-router-dom"
import type { CourseDetails } from "@/components/CourseOverview"
import { ModuleLessonPage } from "@/components/lessons/ModuleLessonPage"
import { lessonKey } from "@/lib/lessons"
import { trackerModules } from "@/lib/trackerModules"
import { GST_INDIA_COURSE_PATH, gstIndiaModuleSummaries } from "@/pages/courses/gstIndiaModules"

/** Route element for a Learn GST in India module lesson. */
export function GstModuleLessonRoute() {
  const { moduleNumber } = useParams()
  return (
    <ModuleLessonPage
      courseTitle="Learn GST in India"
      coursePath={GST_INDIA_COURSE_PATH}
      progressKey="learn-gst-in-india"
      moduleNumber={moduleNumber}
      modules={gstIndiaModuleSummaries}
    />
  )
}

/** Route element for a module lesson of any course in a category catalog. */
export function CatalogModuleLessonRoute({ catalog, basePath }: { catalog: CourseDetails[]; basePath: string }) {
  const { courseSlug, moduleNumber } = useParams()
  const course = catalog.find((c) => c.slug === courseSlug)
  if (!course) return <Navigate to={basePath} replace />
  const coursePath = `${basePath}/${course.slug}`
  return (
    <ModuleLessonPage
      courseTitle={course.title}
      coursePath={coursePath}
      progressKey={lessonKey(coursePath)}
      moduleNumber={moduleNumber}
      modules={trackerModules(course.modules)}
    />
  )
}
