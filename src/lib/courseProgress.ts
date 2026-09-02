// Lightweight client-side course progress tracking, stored in
// localStorage per-browser (no backend/auth exists for the Learning
// section yet). Keys are namespaced per course so multiple courses can
// track progress independently.

function storageKey(courseSlug: string) {
  return `course-progress:${courseSlug}`
}

function safeParse(json: string | null): number[] {
  if (!json) return []
  try {
    const parsed = JSON.parse(json)
    return Array.isArray(parsed) ? parsed.filter((n) => typeof n === "number") : []
  } catch {
    return []
  }
}

export function getCompletedModules(courseSlug: string): number[] {
  if (typeof window === "undefined") return []
  try {
    return safeParse(window.localStorage.getItem(storageKey(courseSlug)))
  } catch {
    return []
  }
}

export function completeModule(courseSlug: string, index: number): number[] {
  const completed = new Set(getCompletedModules(courseSlug))
  completed.add(index)
  const next = [...completed].sort((a, b) => a - b)
  try {
    window.localStorage.setItem(storageKey(courseSlug), JSON.stringify(next))
  } catch {
    // Ignore storage errors (private browsing, storage disabled, etc.) —
    // progress just won't persist for this viewer.
  }
  return next
}

/** Module 0 (the first module) is always unlocked; every other module
 * unlocks once the module immediately before it is completed. */
export function isModuleUnlocked(index: number, completed: number[]): boolean {
  return index === 0 || completed.includes(index - 1)
}

export function isModuleCompleted(index: number, completed: number[]): boolean {
  return completed.includes(index)
}
