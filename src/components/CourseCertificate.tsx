import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Award, Lock, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"
import { getCourseCompletedAt, getLearnerName, setLearnerName } from "@/lib/courseProgress"

/** A printable certificate of completion for a course whose modules are all done. */
export function CourseCertificate({
  courseTitle,
  courseSlug,
  backTo,
  backLabel,
  totalModules,
  path,
}: {
  courseTitle: string
  /** The course's progress key in local storage. */
  courseSlug: string
  backTo: string
  backLabel: string
  totalModules: number
  path: string
}) {
  const [completedAt] = useState(() => getCourseCompletedAt(courseSlug, totalModules))
  const [name, setName] = useState(getLearnerName)

  const updateName = (value: string) => {
    setName(value)
    setLearnerName(value)
  }

  const completedOn = completedAt
    ? new Date(completedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : ""

  return (
    <>
      <Seo title={`Certificate — ${courseTitle}`} description={`Certificate of completion for ${courseTitle}.`} path={path} noIndex />

      <section className="container-px pt-4 print:hidden">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-bento-forest px-6 py-10 sm:px-10 lg:px-14">
          <Link to={backTo} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">Your certificate</h1>
          <p className="mt-2 text-base text-white/85">{courseTitle}</p>
        </div>
      </section>

      <section className="container-px pt-4 pb-4 print:p-0">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-10 sm:px-10 lg:px-14 print:max-w-none print:rounded-none print:p-0">
          {!completedAt ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <Lock className="h-5 w-5" />
              </span>
              <p className="mt-4 text-lg font-semibold text-brand-heading">Not unlocked yet</p>
              <p className="mt-1 max-w-md text-sm text-gray-500">
                Complete all {totalModules} modules of {courseTitle} to unlock your certificate of completion.
              </p>
              <Button className="mt-6" asChild>
                <Link to={backTo}>{backLabel}</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end print:hidden">
                <label className="flex-1 text-sm font-medium text-brand-heading">
                  Name to show on the certificate
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => updateName(e.target.value)}
                    placeholder="Your full name"
                    maxLength={80}
                    className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-brand-heading outline-none focus:border-brand-green"
                  />
                </label>
                <Button onClick={() => window.print()} disabled={!name.trim()}>
                  <Printer className="h-4 w-4" />
                  Print or save as PDF
                </Button>
              </div>
              <p className="-mt-5 mb-8 text-xs text-gray-500 print:hidden">
                Your name is saved only in this browser. To save a PDF, choose “Save as PDF” in the print dialog.
              </p>

              {/* Print the certificate on a single landscape page, keeping its colours. */}
              <style>{"@page { size: landscape; margin: 10mm; }"}</style>
              <div
                className="rounded-[22px] border-4 border-double border-bento-forest/70 p-2 print:h-[180mm] print:break-inside-avoid"
                style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
              >
                <div className="flex flex-col items-center rounded-2xl border border-bento-forest/20 bg-bento-mint/40 px-6 py-12 text-center sm:px-12 print:h-full print:justify-center print:py-6">
                  <img src={asset("assets/panda-logo.png")} alt="AccountingPanda" className="h-12 w-auto" />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
                    Certificate of completion
                  </p>
                  <p className="mt-6 text-sm text-gray-600">This certifies that</p>
                  <p className="mt-2 min-h-[2.5rem] border-b border-bento-forest/30 px-6 pb-1 text-3xl font-bold text-brand-heading sm:text-4xl">
                    {name.trim() || "Your name"}
                  </p>
                  <p className="mt-5 text-sm text-gray-600">has successfully completed the online course</p>
                  <p className="mt-2 flex items-center gap-2 text-xl font-bold text-bento-forest sm:text-2xl">
                    <Award className="h-6 w-6 shrink-0" />
                    {courseTitle}
                  </p>
                  <p className="mt-3 text-sm text-gray-600">
                    {totalModules} modules, each with a knowledge check · Completed on {completedOn}
                  </p>
                  <p className="mt-10 text-sm font-semibold text-brand-heading">AccountingPanda Learning</p>
                  <p className="mt-6 max-w-md text-[11px] leading-relaxed text-gray-500">
                    This certificate confirms completion of a self-paced online course from AccountingPanda. It is not a
                    professional qualification or licence.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
