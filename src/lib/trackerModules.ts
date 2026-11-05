import type { CourseModule } from "@/components/CourseModuleAccordion"
import type { TrackerModule } from "@/components/lessons/CourseTracker"

/** "Module 3 — Reconciling Items" → "Reconciling Items". */
export const moduleTitle = (module: CourseModule) => module.title.replace(/^Module\s+\d+\s*[—–-]\s*/, "")

/** Tracker rows from a course's modules, summarised by their first topics. */
export function trackerModules(modules: CourseModule[]): TrackerModule[] {
  return modules.map((m) => {
    const topics = m.sections.flatMap((s) => s.items)
    return { title: moduleTitle(m), summary: topics.slice(0, 2).join(" · "), topics }
  })
}
