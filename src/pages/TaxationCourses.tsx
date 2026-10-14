import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Receipt, Clock3, BarChart3 } from "lucide-react"
import { Seo } from "@/components/Seo"
import { CourseCardImage } from "@/components/CourseCardImage"
import { GST_INDIA_COURSE_PATH, gstIndiaModules } from "@/pages/courses/gstIndiaModules"

const courses = [
  {
    title: "Learn GST in India — Beginner to Practical Level",
    image: "assets/course-gst-india.jpg",
    body: "Understand India's GST step by step, from CGST, SGST and IGST to input tax credit and filing returns.",
    duration: "4–6 weeks",
    level: "Beginner",
    badge: "New",
    modules: gstIndiaModules.length,
    href: GST_INDIA_COURSE_PATH,
  },
]

export function TaxationCourses() {
  return (
    <>
      <Seo
        title="Taxation Courses"
        description="Learn tax rules and compliance with practical courses, starting with GST in India from beginner to practical level."
        path="/learning/taxation"
      />

      {/* Header */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-bento-forest px-6 sm:px-10 lg:px-14 py-14 lg:py-16">
          <Link
            to="/learning"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learning Center
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Receipt className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Taxation</h1>
              <p className="mt-1 text-sm text-white/85">
                Learn tax rules &amp; compliance — {courses.length}{" "}
                {courses.length === 1 ? "course" : "courses"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(({ title, body, duration, level, badge, modules, href, image }) => (
              <Link
                key={title}
                to={href}
                className="group flex flex-col overflow-hidden rounded-[22px] bg-brand-bg"
              >
                <CourseCardImage image={image} badge={badge} />
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-base font-semibold leading-snug text-brand-heading group-hover:text-brand-green">
                    {title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{body}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BarChart3 className="h-3.5 w-3.5" />
                      {level}
                    </span>
                    <span>{modules} modules</span>
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
