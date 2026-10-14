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
import { ModuleAccordion } from "@/components/CourseModuleAccordion"
import { GST_INDIA_COURSE_PATH, gstIndiaModules } from "@/pages/courses/gstIndiaModules"

const assignments = [
  "Read and verify a GSTIN",
  "Classify goods and services with HSN and SAC codes",
  "Decide between CGST + SGST and IGST",
  "Prepare a GST-compliant tax invoice",
  "Calculate eligible input tax credit",
  "Reconcile purchases with GSTR-2B",
  "Prepare a GSTR-3B summary",
]

export function GstIndiaCourse() {
  const [openModule, setOpenModule] = useState<number | null>(0)

  const toggleModule = (index: number) => {
    setOpenModule((prev) => (prev === index ? null : index))
  }

  return (
    <>
      <Seo
        title="Learn GST in India — Beginner to Practical Level"
        description="A 15-module GST course for India covering CGST, SGST and IGST, registration, GST 2.0 rates, input tax credit, invoices, e-way bills, returns, payments and a hands-on practical project."
        path={GST_INDIA_COURSE_PATH}
      />

      {/* Header */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-bento-forest px-6 sm:px-10 lg:px-14 py-14 lg:py-16">
          <Link
            to="/learning/taxation"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Taxation Courses
          </Link>

          <span className="mt-6 block w-fit rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
            NEW
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.4rem]">
            Learn GST in India — Beginner to Practical Level
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">
            Understand India's Goods and Services Tax from the ground up —
            how CGST, SGST and IGST work, registration, rates, input tax
            credit, invoices and returns — then put it into practice with
            real-world exercises.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90">
            <span className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4" />
              Beginner to Practical
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              4–6 weeks
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              {gstIndiaModules.length} Modules
            </span>
          </div>
        </div>
      </section>

      <div className="container-px pt-4">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 py-14 lg:py-16">
          {/* Course objective */}
          <div className="flex items-start gap-3 rounded-[22px] bg-brand-bg p-6">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <div>
              <h2 className="text-base font-bold text-brand-heading">Course Objective</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                By the end of this course, learners will understand how GST
                works in India, know when a business must register, apply
                the right rates and place-of-supply rules, claim input tax
                credit correctly, issue compliant invoices, and prepare and
                file the main GST returns using accounting software.
              </p>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-brand-green" />
                <h2 className="text-xl font-bold text-brand-heading sm:text-2xl">
                  Course Curriculum
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-bento-butter px-4 py-2 text-sm font-semibold text-bento-butter-text">
                <Hourglass className="h-4 w-4 text-bento-butter-ink" />
                Lessons coming soon
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {gstIndiaModules.length} modules taking you from GST basics to
              filing returns, finishing with a hands-on practical project.
            </p>

            <div className="mt-6 space-y-3">
              {gstIndiaModules.map((module, index) => (
                <ModuleAccordion
                  key={module.title}
                  module={module}
                  index={index}
                  open={openModule === index}
                  onToggle={() => toggleModule(index)}
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
              <div>
                <h3 className="text-sm font-semibold text-brand-heading">Practical Exercises</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  Worked examples after each major module — calculating tax,
                  claiming credit and preparing return data.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-heading">Assignments</h3>
                <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {assignments.map((item) => (
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
                  <p className="mt-1 text-sm text-gray-600">40 questions</p>
                  <p className="text-sm text-gray-600">Suggested passing score: 70%</p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <h3 className="text-sm font-semibold text-brand-heading">Final Practical Test</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Handle one month of GST compliance for a fictional business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 flex items-start gap-3 rounded-[22px] bg-bento-sky p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-bento-sky-ink" />
            <p className="text-sm leading-relaxed text-[#1f2a44]">
              GST rates, thresholds and due dates change through GST Council
              decisions and CBIC notifications. This course explains the
              rules as they stand, but always confirm the current position
              on the official GST portal before filing.
            </p>
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <section className="container-px pt-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left rounded-[28px] bg-bento-forest px-6 sm:px-10 lg:px-14 py-12 lg:py-14">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-[1.7rem]">
              Want to know when the lessons go live?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Get in touch and we'll let you know as soon as this course opens.
            </p>
          </div>
          <Button size="lg" className="bg-white text-brand-green-dark hover:bg-white/90" asChild>
            <ConsultationLink>
              Contact us
              <ArrowRight className="h-4 w-4" />
            </ConsultationLink>
          </Button>
        </div>
      </section>
    </>
  )
}
