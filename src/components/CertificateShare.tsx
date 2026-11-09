import { useState } from "react"
import { Briefcase, Check, Link2, Mail, Share2, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { certificateId, certificateShareUrl, type CertificateDetails } from "@/lib/certificateLink"

/** Copy-link and share options for a completed certificate. */
export function CertificateShare({ details }: { details: CertificateDetails }) {
  const [copied, setCopied] = useState(false)
  const url = certificateShareUrl(details)
  const id = certificateId(details)
  const text = `I've completed ${details.courseTitle} on AccountingPanda, with a final test score of ${details.scorePct}%.`
  const issued = new Date(details.completedAt)
  const canNativeShare = typeof navigator !== "undefined" && typeof navigator.share === "function"

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      // Fallback for browsers without clipboard access.
      const field = document.createElement("textarea")
      field.value = url
      document.body.appendChild(field)
      field.select()
      document.execCommand("copy")
      field.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2500)
  }

  const nativeShare = () => {
    navigator.share({ title: `Certificate — ${details.courseTitle}`, text, url }).catch(() => {
      // The learner closed the share sheet — nothing to do.
    })
  }

  const linkedInPost = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const linkedInProfile =
    "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME" +
    `&name=${encodeURIComponent(details.courseTitle)}` +
    `&organizationName=${encodeURIComponent("AccountingPanda")}` +
    `&issueYear=${issued.getFullYear()}&issueMonth=${issued.getMonth() + 1}` +
    `&certUrl=${encodeURIComponent(url)}&certId=${encodeURIComponent(id)}`
  const email =
    `mailto:?subject=${encodeURIComponent(`My certificate — ${details.courseTitle}`)}` +
    `&body=${encodeURIComponent(`${text}\n\nView my certificate: ${url}`)}`

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <p className="text-sm font-semibold text-brand-heading">Share your certificate</p>
      <div className="mt-3 flex items-center gap-2">
        <input
          readOnly
          value={url}
          onFocus={(e) => e.currentTarget.select()}
          aria-label="Certificate link"
          className="min-w-0 flex-1 truncate rounded-lg border border-gray-200 bg-brand-bg px-3 py-2 text-xs text-gray-600"
        />
        <Button onClick={copy} className="shrink-0">
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
          {copied ? "Copied" : "Copy link"}
        </Button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {canNativeShare && (
          <Button variant="outline" size="sm" onClick={nativeShare}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        )}
        <Button variant="outline" size="sm" asChild>
          <a href={linkedInPost} target="_blank" rel="noopener noreferrer">
            <Briefcase className="h-4 w-4" />
            Post on LinkedIn
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={linkedInProfile} target="_blank" rel="noopener noreferrer">
            <UserPlus className="h-4 w-4" />
            Add to LinkedIn profile
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={email}>
            <Mail className="h-4 w-4" />
            Email
          </a>
        </Button>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Anyone with the link can see your name, the course, your final test score and the completion date.
      </p>
    </div>
  )
}
