import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseCard } from "@/components/CourseCategoryPage"

/** Card data for a catalog course whose page lives at `${basePath}/${slug}`. */
export function toCourseCard(course: CourseDetails, basePath: string): CourseCard {
  return {
    title: course.title,
    body: course.summary,
    image: course.image,
    duration: course.duration,
    level: course.level,
    badge: course.badge,
    modules: course.modules.length,
    href: `${basePath}/${course.slug}`,
  }
}
