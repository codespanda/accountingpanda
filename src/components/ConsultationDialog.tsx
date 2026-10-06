import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { CheckCircle2, ChevronDown, Loader2, X } from "lucide-react"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import {
  CONSULTATION_FORM_ENDPOINT,
  ConsultationContext,
  useConsultation,
} from "@/lib/consultation"

const CONTACT_EMAIL = "contact@accountingpanda.com"

const services = [
  "Bookkeeping",
  "Financial reporting",
  "Bank reconciliation",
  "Accounts payable",
  "Accounts receivable",
  "Payroll processing",
  "CPA firm support",
  "Something else",
]

type Status = "idle" | "sending" | "sent" | "error"

const fieldClass =
  "h-12 w-full rounded-full border border-[#d3d9e0] bg-white px-[18px] text-[15px] text-bento-ink placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
const labelClass = "text-[13px] font-bold text-bento-ink"

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const value = useMemo(() => ({ open }), [open])

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      <ConsultationDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ConsultationContext.Provider>
  )
}

/**
 * A link that opens the consultation popup. It keeps the mailto href so the
 * button still works if JavaScript hasn't loaded. Works with Button asChild.
 */
export function ConsultationLink({
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { open } = useConsultation()
  return (
    <a
      href={CONSULTATION_MAILTO}
      onClick={(e) => {
        onClick?.(e)
        e.preventDefault()
        open()
      }}
      {...props}
    />
  )
}

function ConsultationDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>("idle")

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = "hidden"
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  function handleClosed() {
    document.documentElement.style.overflow = ""
    // After a send, the next open starts with a fresh, empty form.
    if (status === "sent" || status === "error") {
      setStatus("idle")
      formRef.current?.reset()
    }
    onClose()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    // Bots fill the hidden honeypot field; quietly accept and drop those.
    if (data._honey) {
      setStatus("sent")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch(CONSULTATION_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `Free consultation request from ${data.name}`,
          _template: "table",
        }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok || String(body.success) !== "true") throw new Error(body.message || "Send failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClosed}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close()
      }}
      aria-labelledby="consultation-title"
      className="fixed inset-0 m-auto h-fit max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[600px] overflow-y-auto rounded-[28px] border-0 bg-white p-0 text-bento-ink shadow-[0_32px_80px_-24px_rgba(17,24,39,0.45)] backdrop:bg-bento-ink/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-7 sm:p-10">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-bento-canvas text-bento-ink transition-colors hover:bg-gray-200"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "sent" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center" role="status">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bento-mint">
              <CheckCircle2 className="h-8 w-8 text-bento-forest" />
            </span>
            <h2 id="consultation-title" className="m-0 text-[28px] font-bold leading-tight tracking-[-0.03em]">
              Thanks for contacting us!
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-gray-600">
              We will revert to you shortly.
            </p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="mt-2 h-12 cursor-pointer rounded-full bg-bento-ink px-8 text-[15px] font-bold text-white transition-colors hover:bg-bento-forest"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 pr-10">
              <span className="self-start rounded-full bg-bento-mint px-3.5 py-2 text-[13px] font-bold leading-4 text-bento-forest">
                Free consultation
              </span>
              <h2 id="consultation-title" className="m-0 text-[28px] font-bold leading-tight tracking-[-0.03em] sm:text-[32px]">
                Tell us about your business
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-600">
                Share a few details and our team will get back to you with a
                plan that fits.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="flex flex-col gap-2">
                <label htmlFor="c-name" className={labelClass}>Full name *</label>
                <input id="c-name" name="name" required autoComplete="name" className={fieldClass} placeholder="Jane Smith" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-email" className={labelClass}>Email *</label>
                <input id="c-email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-phone" className={labelClass}>Phone</label>
                <input id="c-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Optional" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-company" className={labelClass}>Company</label>
                <input id="c-company" name="company" autoComplete="organization" className={fieldClass} placeholder="Optional" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-country" className={labelClass}>Country</label>
                <SelectField id="c-country" name="country" defaultValue="USA">
                  <option>USA</option>
                  <option>Australia</option>
                  <option>Other</option>
                </SelectField>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-service" className={labelClass}>Service</label>
                <SelectField id="c-service" name="service" defaultValue={services[0]}>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </SelectField>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="c-message" className={labelClass}>How can we help? *</label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-y rounded-[20px] border border-[#d3d9e0] bg-white px-[18px] py-3 text-[15px] text-bento-ink placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                  placeholder="Tell us what you need help with"
                />
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 sm:col-span-2">
                  Sorry, your request couldn't be sent. Please try again, or
                  email us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-bento-forest text-base font-bold text-white transition-colors hover:bg-bento-ink disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Request free consultation"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  )
}

function SelectField(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select {...props} className={`${fieldClass} cursor-pointer appearance-none pr-11`} />
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
        aria-hidden="true"
      />
    </div>
  )
}
