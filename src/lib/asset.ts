/**
 * Resolves a public-folder asset path against the app's configured base URL
 * (e.g. "/accountingpanda/" on GitHub Pages, "/" in local dev), so hardcoded
 * "/assets/..." references in JSX work correctly under any deployment path.
 */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}
