import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Clock3, BarChart3, type LucideIcon } from "lucide-react"
import { Seo } from "@/components/Seo"
import { CourseCardImage } from "@/components/CourseCardImage"

export type CourseCard = {
  title: string
  body: string
  image?: string
  duration: string
  level: string
  badge?: string
  modules: number
  href: string
}

/** A learning category page: header plus a grid of linked course cards. */
export function CourseCategoryPage({
  title,
  description,
  path,
  icon: Icon,
  seoDescription,
  courses,
}: {
  title: string
  description: string
  path: string
  icon: LucideIcon
  seoDescription: string
  courses: CourseCard[]
}) {
  return (
    <>
      <Seo title={`${title} Courses`} description={seoDescription} path={path} />

      {/* Header */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-bento-forest px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          <Link
            to="/learning"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learning Center
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h1>
              <p className="mt-1 text-sm text-white/85">
                {description} — {courses.length} {courses.length === 1 ? "course" : "courses"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.title}
                to={course.href}
                className="group flex flex-col overflow-hidden rounded-[22px] bg-brand-bg"
              >
                {course.image && <CourseCardImage image={course.image} badge={course.badge} />}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-base font-semibold leading-snug text-brand-heading group-hover:text-brand-green">
                    {course.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{course.body}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BarChart3 className="h-3.5 w-3.5" />
                      {course.level}
                    </span>
                    <span>{course.modules} modules</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                    View course
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
