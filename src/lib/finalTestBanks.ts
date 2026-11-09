import { useEffect, useState } from "react"
import type { QuizQuestion } from "@/lib/lessonTypes"

// Final test question banks live in src/content/final-tests/<lesson key>.ts,
// e.g. "bookkeeping--chart-of-accounts-setup.ts". Each default-exports an
// array of questions written for the final test — separate from the module
// knowledge checks, but only on material the course teaches. Banks load on
// demand, so they're not part of the lesson pages.

const loaders = import.meta.glob<{ default: QuizQuestion[] }>("/src/content/final-tests/*.ts")

const fileFor = (key: string) => `/src/content/final-tests/${key}.ts`

export function hasFinalTest(key: string) {
  return fileFor(key) in loaders
}

const cache = new Map<string, QuizQuestion[]>()

/** The course's final test question bank; empty if the course has none yet. */
export function useFinalTestQuestions(key: string) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => cache.get(key) ?? [])
  const [loading, setLoading] = useState(() => hasFinalTest(key) && !cache.has(key))

  useEffect(() => {
    let cancelled = false
    const loader = loaders[fileFor(key)]
    if (!loader) {
      setQuestions([])
      setLoading(false)
      return
    }
    if (cache.has(key)) {
      setQuestions(cache.get(key)!)
      setLoading(false)
      return
    }
    setLoading(true)
    void loader().then((m) => {
      cache.set(key, m.default)
      if (cancelled) return
      setQuestions(m.default)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [key])

  return { questions, loading, available: hasFinalTest(key) }
}
