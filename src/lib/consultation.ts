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

/** Web3Forms delivers each consultation request to contact@accountingpanda.com. */
export const CONSULTATION_FORM_ENDPOINT = "https://api.web3forms.com/submit"
/** Web3Forms access key for that inbox (public by design). */
export const WEB3FORMS_KEY = "0291c3e4-73cb-4649-9ff3-a4a2edf4dd81"
