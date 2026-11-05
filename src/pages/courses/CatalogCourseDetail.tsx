import { Navigate, useParams } from "react-router-dom"
import { CourseOverview, type CourseDetails } from "@/components/CourseOverview"
import { CourseTracker } from "@/components/lessons/CourseTracker"
import { hasLessons, lessonKey } from "@/lib/lessons"
import { trackerModules } from "@/lib/trackerModules"

/** Overview page for any course in a category's catalog, looked up by URL slug.
 * Courses with lessons get a tick-off curriculum linking to each module. */
export function CatalogCourseDetail({
  catalog,
  basePath,
}: {
  catalog: CourseDetails[]
  basePath: string
}) {
  const { courseSlug } = useParams()
  const course = catalog.find((c) => c.slug === courseSlug)
  if (!course) return <Navigate to={basePath} replace />
  const path = `${basePath}/${course.slug}`
  const key = lessonKey(path)
  return (
    <CourseOverview
      course={course}
      path={path}
      curriculum={
        hasLessons(key) ? (
          <CourseTracker
            coursePath={path}
            progressKey={key}
            programTitle={course.title}
            programSubtitle={`${course.level} · ${course.duration}`}
            modules={trackerModules(course.modules)}
          />
        ) : undefined
      }
    />
  )
}
