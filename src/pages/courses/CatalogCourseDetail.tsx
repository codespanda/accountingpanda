import { Navigate, useParams } from "react-router-dom"
import { CourseOverview, type CourseDetails } from "@/components/CourseOverview"

/** Overview page for any course in a category's catalog, looked up by URL slug. */
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
  return <CourseOverview course={course} path={`${basePath}/${course.slug}`} />
}
