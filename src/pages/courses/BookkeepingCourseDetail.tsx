import { Navigate, useParams } from "react-router-dom"
import { CourseOverview } from "@/components/CourseOverview"
import { findBookkeepingCourse } from "@/pages/courses/bookkeepingCourseCatalog"

/** Overview page for any bookkeeping course in the catalog. */
export function BookkeepingCourseDetail() {
  const { courseSlug } = useParams()
  const course = findBookkeepingCourse(courseSlug)
  if (!course) return <Navigate to="/learning/bookkeeping" replace />
  return <CourseOverview course={course} path={`/learning/bookkeeping/${course.slug}`} />
}
