import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { OPEN_CONSENT_EVENT, readConsent, saveConsent, startAnalyticsIfAllowed, type Consent } from "@/lib/consent"

/** Asks before any analytics runs; reopened from "Cookie settings" in the footer. */
export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    startAnalyticsIfAllowed()
    if (!readConsent()) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  if (!open) return null

  const choose = (value: Consent) => {
    saveConsent(value)
    setOpen(false)
  }

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto flex max-w-[920px] flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 text-bento-ink shadow-[0_20px_50px_rgba(17,24,39,0.18)] sm:inset-x-6 sm:bottom-6 md:flex-row md:items-center md:gap-6"
    >
      <div className="flex flex-col gap-1.5">
        <h2 id="cookie-consent-title" className="text-base font-bold text-brand-heading">
          Can we use analytics cookies?
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">
          With your consent we use Google Analytics to see which pages are useful. It sets cookies and sends your IP address and
          device details to Google. Saying no doesn't affect the site, and you can change your choice any time from “Cookie
          settings” in the footer.{" "}
          <Link to="/privacy-policy" className="font-semibold text-brand-green underline underline-offset-2">
            Privacy policy
          </Link>
        </p>
      </div>
      <div className="flex shrink-0 gap-2.5">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="h-11 flex-1 rounded-full border border-gray-300 px-5 text-[15px] font-semibold text-bento-ink hover:bg-gray-50 md:flex-none"
        >
          No thanks
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="h-11 flex-1 rounded-full bg-bento-forest px-5 text-[15px] font-bold text-white hover:opacity-90 md:flex-none"
        >
          Accept
        </button>
      </div>
    </section>
  )
}
