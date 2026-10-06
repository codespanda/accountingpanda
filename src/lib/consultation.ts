import { createContext, useContext } from "react"

/**
 * Lets any "Free consultation" / "Chat to an expert" button open the shared
 * consultation form popup, which is mounted once by ConsultationProvider.
 */
export const ConsultationContext = createContext<{ open: () => void }>({
  open: () => {},
})

export function useConsultation() {
  return useContext(ConsultationContext)
}

/**
 * FormSubmit relays each submission to the inbox in the URL. The first
 * submission sends a one-time activation email to that address; after the
 * link in it is clicked, every request is delivered.
 */
export const CONSULTATION_FORM_ENDPOINT =
  "https://formsubmit.co/ajax/contact@accountingpanda.com"
