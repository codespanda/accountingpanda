// Lightweight client-side course progress tracking, stored in
// localStorage per-browser (no backend/auth exists for the Learning
// section yet). Keys are namespaced per course so multiple courses can
// track progress independently.

function storageKey(courseSlug: string) {
  return `course-progress:${courseSlug}`
}

function pageStorageKey(courseSlug: string) {
  return `course-progress:${courseSlug}:pages`
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

/** Remembers which lesson page a learner was last on within a module,
 * so reloading (or coming back later) resumes there instead of
 * bouncing back to page 1. */
export function getLessonPage(courseSlug: string, moduleIndex: number): number {
  if (typeof window === "undefined") return 0
  try {
    const raw = window.localStorage.getItem(pageStorageKey(courseSlug))
    if (!raw) return 0
    const parsed = JSON.parse(raw)
    const value = parsed?.[moduleIndex]
    return typeof value === "number" && value >= 0 ? value : 0
  } catch {
    return 0
  }
}

export function setLessonPage(courseSlug: string, moduleIndex: number, pageIndex: number): void {
  if (typeof window === "undefined") return
  try {
    const raw = window.localStorage.getItem(pageStorageKey(courseSlug))
    const parsed = raw ? JSON.parse(raw) : {}
    parsed[moduleIndex] = pageIndex
    window.localStorage.setItem(pageStorageKey(courseSlug), JSON.stringify(parsed))
  } catch {
    // Ignore storage errors — position just won't persist for this viewer.
  }
}
