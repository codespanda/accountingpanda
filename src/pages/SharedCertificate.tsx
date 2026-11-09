import { useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ArrowRight, Printer, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { CertificateCard } from "@/components/CertificateCard"
import { certificateId, decodeCertificate, formatCertificateDate } from "@/lib/certificateLink"

/** Public page for a certificate shared by link. */
export function SharedCertificate() {
  const [params] = useSearchParams()
  const details = useMemo(() => decodeCertificate(params.get("d")), [params])

  return (
    <>
      <Seo
        title={details ? `${details.name} — ${details.courseTitle} certificate` : "Shared certificate"}
        description={
          details
            ? `${details.name} completed ${details.courseTitle} on AccountingPanda.`
            : "A certificate of completion from AccountingPanda Learning."
        }
        path="/certificate"
        noIndex
      />

      <section className="container-px pt-4 print:hidden">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-bento-forest px-6 py-10 sm:px-10 lg:px-14">
          <p className="text-sm font-semibold text-white/75">AccountingPanda Learning</p>
          <h1 className="mt-1 text-3xl font-bold leading-tight text-white sm:text-4xl">Certificate of completion</h1>
          {details && <p className="mt-2 text-base text-white/85">{details.courseTitle}</p>}
        </div>
      </section>

      <section className="container-px pt-4 pb-4 print:p-0">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-10 sm:px-10 lg:px-14 print:max-w-none print:rounded-none print:p-0">
          {!details ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <ShieldAlert className="h-5 w-5" />
              </span>
              <p className="mt-4 text-lg font-semibold text-brand-heading">This certificate link isn't valid</p>
              <p className="mt-1 max-w-md text-sm text-gray-500">
                The link may be incomplete or mistyped. Ask the person who shared it to copy the link again.
              </p>
              <Button className="mt-6" asChild>
                <Link to="/learning">Explore our courses</Link>
              </Button>
            </div>
          ) : (
            <>
              <CertificateCard
                name={details.name}
                courseTitle={details.courseTitle}
                totalModules={details.totalModules}
                scorePct={details.scorePct}
                completedOn={formatCertificateDate(details.completedAt)}
                certificateId={certificateId(details)}
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
                <p className="max-w-xl text-xs leading-relaxed text-gray-500">
                  This certificate was shared by the learner. AccountingPanda courses are self-paced, and certificates are
                  generated from the learner's own course record after they pass the course's timed final test.
                </p>
                <div className="flex shrink-0 gap-2">
                  <Button variant="outline" size="sm" onClick={() => window.print()}>
                    <Printer className="h-4 w-4" />
                    Print
                  </Button>
                  <Button size="sm" asChild>
                    <Link to={details.coursePath}>
                      View the course
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
