import { Award } from "lucide-react"
import { asset } from "@/lib/asset"

/** The certificate itself, printed on a single landscape page. */
export function CertificateCard({
  name,
  courseTitle,
  totalModules,
  scorePct,
  completedOn,
  certificateId,
}: {
  name: string
  courseTitle: string
  totalModules: number
  scorePct: number
  completedOn: string
  certificateId?: string
}) {
  return (
    <>
      {/* Print the certificate on a single landscape page, keeping its colours. */}
      <style>{"@page { size: landscape; margin: 10mm; }"}</style>
      <div
        className="rounded-[22px] border-4 border-double border-bento-forest/70 p-2 print:h-[180mm] print:break-inside-avoid"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        <div className="flex flex-col items-center rounded-2xl border border-bento-forest/20 bg-bento-mint/40 px-6 py-12 text-center sm:px-12 print:h-full print:justify-center print:py-6">
          <img src={asset("assets/panda-logo.png")} alt="AccountingPanda" className="h-12 w-auto" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">Certificate of completion</p>
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
            {totalModules} modules and a timed final test · Final test score {scorePct}% · Completed on {completedOn}
          </p>
          <p className="mt-10 text-sm font-semibold text-brand-heading">AccountingPanda Learning</p>
          {certificateId && <p className="mt-1 text-xs text-gray-500">Certificate ID: {certificateId}</p>}
          <p className="mt-6 max-w-md text-[11px] leading-relaxed text-gray-500">
            This certificate confirms completion of a self-paced online course from AccountingPanda. It is not a
            professional qualification or licence.
          </p>
        </div>
      </div>
    </>
  )
}
