import { Navigate, useParams } from "react-router-dom"
import type { CourseDetails } from "@/components/CourseOverview"
import { CourseCertificate } from "@/components/CourseCertificate"
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

/** Certificate page for Learn GST in India. */
export function GstCertificateRoute() {
  return (
    <CourseCertificate
      courseTitle="Learn GST in India"
      courseSlug="learn-gst-in-india"
      backTo={GST_INDIA_COURSE_PATH}
      backLabel="Back to Course"
      totalModules={gstIndiaModuleSummaries.length}
      path={`${GST_INDIA_COURSE_PATH}/certificate`}
    />
  )
}

/** Certificate page for any course in a category catalog. */
export function CatalogCertificateRoute({ catalog, basePath }: { catalog: CourseDetails[]; basePath: string }) {
  const { courseSlug } = useParams()
  const course = catalog.find((c) => c.slug === courseSlug)
  if (!course) return <Navigate to={basePath} replace />
  const coursePath = `${basePath}/${course.slug}`
  return (
    <CourseCertificate
      courseTitle={course.title}
      courseSlug={lessonKey(coursePath)}
      backTo={coursePath}
      backLabel="Back to Course"
      totalModules={course.modules.length}
      path={`${coursePath}/certificate`}
    />
  )
}
