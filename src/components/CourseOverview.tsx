import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  BarChart3,
  Target,
  Layers,
  ClipboardCheck,
  Info,
  Hourglass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { ConsultationLink } from "@/components/ConsultationDialog"
import { ModuleAccordion, type CourseModule } from "@/components/CourseModuleAccordion"

export type CourseDetails = {
  slug: string
  title: string
  /** One sentence for SEO and the course card. */
  summary: string
  /** Card photo under public/, e.g. "assets/course-xyz.jpg". */
  image?: string
  /** Longer intro shown under the title. */
  intro: string
  objective: string
  level: string
  duration: string
  badge?: string
  category: { label: string; href: string }
  modules: CourseModule[]
  assignments: string[]
  finalExam: string
  finalPractical: string
  /** Extra assessment line about practical exercises, when the course has them. */
  exercises?: string
  /** Optional caveat shown under the assessment, e.g. rules that change. */
  note?: string
  /** Where "Start Course" goes once lessons are published; omitted = "Lessons coming soon". */
  startHref?: string
}

/** Overview page for a course whose lessons aren't published yet. */
export function CourseOverview({
  course,
  path,
  curriculum,
}: {
  course: CourseDetails
  path: string
  /** Replaces the module accordion, e.g. with a progress tracker. */
  curriculum?: React.ReactNode
}) {
  const [openModule, setOpenModule] = useState<number | null>(0)

  return (
    <>
      <Seo title={course.title} description={course.summary} path={path} />

      {/* Header */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-bento-forest px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          <Link
            to={course.category.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {course.category.label} Courses
          </Link>

          {course.badge && (
            <span className="mt-6 block w-fit rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              {course.badge}
            </span>
          )}
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.4rem]">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">{course.intro}</p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90">
            <span className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4" />
              {course.level}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              {course.modules.length} Modules
            </span>
          </div>
        </div>
      </section>

      <div className="container-px pt-4">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-white px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          {/* Course objective */}
          <div className="flex items-start gap-3 rounded-[22px] bg-brand-bg p-6">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <div>
              <h2 className="text-base font-bold text-brand-heading">Course Objective</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{course.objective}</p>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-brand-green" />
                <h2 className="text-xl font-bold text-brand-heading sm:text-2xl">Course Curriculum</h2>
              </div>
              {course.startHref ? (
                <Button asChild>
                  <Link to={course.startHref}>
                    Start Course
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : curriculum ? null : (
                <span className="inline-flex items-center gap-2 rounded-full bg-bento-butter px-4 py-2 text-sm font-semibold text-bento-butter-text">
                  <Hourglass className="h-4 w-4 text-bento-butter-ink" />
                  Lessons coming soon
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {curriculum
                ? "Tick off each module as you complete it — your progress is saved in this browser."
                : `${course.modules.length} modules, each with practical examples and a short quiz.`}
            </p>

            <div className="mt-6 space-y-3">
              {curriculum ??
                course.modules.map((module, index) => (
                  <ModuleAccordion
                    key={module.title}
                    module={module}
                    index={index}
                    open={openModule === index}
                    onToggle={() => setOpenModule((prev) => (prev === index ? null : index))}
                  />
                ))}
            </div>
          </div>

          {/* Assessment */}
          <div className="mt-12 rounded-[22px] bg-brand-bg p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-brand-green" />
              <h2 className="text-xl font-bold text-brand-heading sm:text-2xl">Course Assessment</h2>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-brand-heading">Quizzes</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  A short quiz at the end of each module.
                </p>
              </div>
              {course.exercises && (
                <div>
                  <h3 className="text-sm font-semibold text-brand-heading">Practical Exercises</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{course.exercises}</p>
                </div>
              )}
              <div>
                <h3 className="text-sm font-semibold text-brand-heading">Assignments</h3>
                <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {course.assignments.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4">
                  <h3 className="text-sm font-semibold text-brand-heading">Final Exam</h3>
                  <p className="mt-1 text-sm text-gray-600">{course.finalExam}</p>
                  <p className="text-sm text-gray-600">Suggested passing score: 70%</p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <h3 className="text-sm font-semibold text-brand-heading">Final Practical Test</h3>
                  <p className="mt-1 text-sm text-gray-600">{course.finalPractical}</p>
                </div>
              </div>
            </div>
          </div>

          {course.note && (
            <div className="mt-6 flex items-start gap-3 rounded-[22px] bg-bento-sky p-5">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-bento-sky-ink" />
              <p className="text-sm leading-relaxed text-[#1f2a44]">{course.note}</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA banner */}
      <section className="container-px pt-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[28px] bg-bento-forest px-6 py-12 text-center sm:px-10 lg:flex-row lg:px-14 lg:py-14 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-[1.7rem]">
              {course.startHref ? "Ready to start learning?" : "Want to know when the lessons go live?"}
            </h2>
            <p className="mt-2 text-sm text-white/80">
              {course.startHref
                ? "Work through the modules at your own pace and track your progress as you go."
                : "Get in touch and we'll let you know as soon as this course opens."}
            </p>
          </div>
          <Button size="lg" className="bg-white text-brand-green-dark hover:bg-white/90" asChild>
            {course.startHref ? (
              <Link to={course.startHref}>
                Start Course
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <ConsultationLink>
                Contact us
                <ArrowRight className="h-4 w-4" />
              </ConsultationLink>
            )}
          </Button>
        </div>
      </section>
    </>
  )
}
