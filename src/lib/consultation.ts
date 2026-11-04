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
 * FormSubmit relays each submission to contact@accountingpanda.com. The URL uses
 * FormSubmit's alias for that inbox, so the address isn't exposed in form requests.
 */
export const CONSULTATION_FORM_ENDPOINT =
  "https://formsubmit.co/ajax/3e322a9b87c2f2eaa0a9d32f4f231f20"
