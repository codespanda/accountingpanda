import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Lock, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { CertificateCard } from "@/components/CertificateCard"
import { CertificateShare } from "@/components/CertificateShare"
import { certificateId, formatCertificateDate, type CertificateDetails } from "@/lib/certificateLink"
import { allModulesCompleted, getExamResult, getLearnerName, setLearnerName } from "@/lib/courseProgress"

/** A printable certificate of completion for a course whose modules are all done. */
export function CourseCertificate({
  courseTitle,
  courseSlug,
  coursePath,
  backTo,
  backLabel,
  totalModules,
  testPath,
  path,
}: {
  courseTitle: string
  /** The course's progress key in local storage. */
  courseSlug: string
  /** Site path of the course overview, used in shared links. */
  coursePath: string
  backTo: string
  backLabel: string
  totalModules: number
  /** The course's final test, which must be passed to unlock the certificate. */
  testPath: string
  path: string
}) {
  const [modulesDone] = useState(() => allModulesCompleted(courseSlug, totalModules))
  const [result] = useState(() => getExamResult(courseSlug))
  const completedAt = modulesDone && result?.passed ? result.takenAt : null
  const [name, setName] = useState(getLearnerName)

  const updateName = (value: string) => {
    setName(value)
    setLearnerName(value)
  }

  const completedOn = completedAt ? formatCertificateDate(completedAt) : ""
  const details: CertificateDetails | null =
    completedAt && result && name.trim()
      ? { name: name.trim(), courseTitle, coursePath, totalModules, scorePct: result.scorePct, completedAt }
      : null

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
                {modulesDone
                  ? `Pass the final test for ${courseTitle} to unlock your certificate of completion.`
                  : `Complete all ${totalModules} modules of ${courseTitle}, then pass the final test, to unlock your certificate of completion.`}
              </p>
              <Button className="mt-6" asChild>
                <Link to={modulesDone ? testPath : backTo}>{modulesDone ? "Go to the final test" : backLabel}</Link>
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

              {details ? (
                <div className="mb-8 print:hidden">
                  <CertificateShare details={details} />
                </div>
              ) : (
                <p className="mb-8 text-sm text-gray-500 print:hidden">Enter your name to share or print your certificate.</p>
              )}

              <CertificateCard
                name={name}
                courseTitle={courseTitle}
                totalModules={totalModules}
                scorePct={result?.scorePct ?? 0}
                completedOn={completedOn}
                certificateId={details ? certificateId(details) : undefined}
              />
            </>
          )}
        </div>
      </section>
    </>
  )
}
