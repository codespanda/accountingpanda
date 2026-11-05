import { useEffect, useState } from "react"
import type { CourseLessons } from "@/lib/lessonTypes"

// Course lessons live in src/content/lessons/<category>--<course-slug>.ts,
// e.g. "bookkeeping--chart-of-accounts-setup.ts" for the course at
// /learning/bookkeeping/chart-of-accounts-setup. Each file default-exports
// a CourseLessons map. Files are loaded on demand, so lesson text isn't
// part of the main site bundle.

const loaders = import.meta.glob<{ default: CourseLessons }>("/src/content/lessons/*.ts")

const fileFor = (key: string) => `/src/content/lessons/${key}.ts`

/** "/learning/bookkeeping" + "chart-of-accounts-setup" → "bookkeeping--chart-of-accounts-setup". */
export function lessonKey(coursePath: string) {
  const [category, slug] = coursePath.split("/").filter(Boolean).slice(-2)
  return `${category}--${slug}`
}

export function hasLessons(key: string) {
  return fileFor(key) in loaders
}

const cache = new Map<string, CourseLessons>()

export async function loadLessons(key: string): Promise<CourseLessons | null> {
  const cached = cache.get(key)
  if (cached) return cached
  const loader = loaders[fileFor(key)]
  if (!loader) return null
  const lessons = (await loader()).default
  cache.set(key, lessons)
  return lessons
}

/** The course's lessons once loaded; `null` while loading or if the course has none. */
export function useLessons(key: string) {
  const [lessons, setLessons] = useState<CourseLessons | null>(() => cache.get(key) ?? null)
  const [loading, setLoading] = useState(() => hasLessons(key) && !cache.has(key))

  useEffect(() => {
    let cancelled = false
    if (!hasLessons(key)) {
      setLessons(null)
      setLoading(false)
      return
    }
    setLoading(!cache.has(key))
    void loadLessons(key).then((l) => {
      if (cancelled) return
      setLessons(l)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [key])

  return { lessons, loading }
}
