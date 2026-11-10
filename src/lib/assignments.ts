import { useEffect, useState } from "react"
import type { PracticalAssignment } from "@/lib/lessonTypes"
import { getAssignmentResult } from "@/lib/courseProgress"

// Practical assignments live in src/content/assignments/<lesson key>.ts and
// default-export a PracticalAssignment. They load on demand.

const loaders = import.meta.glob<{ default: PracticalAssignment }>("/src/content/assignments/*.ts")

const fileFor = (key: string) => `/src/content/assignments/${key}.ts`

export function hasAssignment(key: string) {
  return fileFor(key) in loaders
}

/**
 * True when nothing stands between finished modules and the final test:
 * the course has no assignment, or the learner has passed it.
 */
export function assignmentCleared(contentKey: string, progressKey: string) {
  return !hasAssignment(contentKey) || getAssignmentResult(progressKey)?.passed === true
}

const cache = new Map<string, PracticalAssignment>()

export function useAssignment(key: string) {
  const [assignment, setAssignment] = useState<PracticalAssignment | null>(() => cache.get(key) ?? null)
  const [loading, setLoading] = useState(() => hasAssignment(key) && !cache.has(key))

  useEffect(() => {
    let cancelled = false
    const loader = loaders[fileFor(key)]
    if (!loader) {
      setAssignment(null)
      setLoading(false)
      return
    }
    if (cache.has(key)) {
      setAssignment(cache.get(key)!)
      setLoading(false)
      return
    }
    setLoading(true)
    void loader().then((m) => {
      cache.set(key, m.default)
      if (cancelled) return
      setAssignment(m.default)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [key])

  return { assignment, loading, available: hasAssignment(key) }
}
