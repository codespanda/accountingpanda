import { useEffect } from "react"
import { useLocation } from "react-router-dom"

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  // Prevent the browser's own scroll-restoration from fighting our
  // scroll-to-hash logic on client-side navigation.
  window.history.scrollRestoration = "manual"
}

/**
 * Scrolls to the element matching the URL hash (e.g. "/#services") whenever
 * the route or hash changes — including navigation from a different page,
 * where the target section only exists after the new route has mounted.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }

    const id = hash.slice(1)
    // Wait a tick so the destination route has mounted before we look for the element.
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
