import type { AssignmentTask, OfficialReference } from "@/lib/lessonTypes"

// Builders for src/content/assignments/*.ts files.

type NumberOpts = { tolerance?: number; prefix?: string; suffix?: string }

/** A task answered with a figure. */
export const num = (prompt: string, answer: number, solution: string, opts: NumberOpts = {}): AssignmentTask => ({
  kind: "number",
  prompt,
  answer,
  solution,
  ...opts,
})

/** A task answered by picking one option; the correct option is listed first and shuffled on screen. */
export const pick = (prompt: string, correct: string, wrong: string[], solution: string): AssignmentTask => ({
  kind: "choice",
  prompt,
  options: [correct, ...wrong],
  answer: 0,
  solution,
})

export const ref = (label: string, url: string, note?: string): OfficialReference => ({ label, url, note })

/** Pass mark for practical assignments, as a percentage. */
export const ASSIGNMENT_PASS_PCT = 80

/** Reads a learner's typed figure: ignores currency symbols, commas, spaces and %. Brackets mean negative. */
export function parseFigure(raw: string): number | null {
  // Accept a typographic minus (−) or en dash as a minus sign, and ignore a leading plus.
  const trimmed = raw.trim().replace(/[−–]/g, "-").replace(/^\+/, "")
  if (!trimmed) return null
  const negative = /^\(.*\)$/.test(trimmed) || /^-/.test(trimmed.replace(/[₹$€£\s]/g, ""))
  const cleaned = trimmed.replace(/[₹$€£,%\s()]/g, "").replace(/^-/, "")
  if (!/^\d*\.?\d+$/.test(cleaned)) return null
  const value = Number(cleaned)
  return negative ? -value : value
}

export function isCorrect(task: AssignmentTask, response: string | undefined): boolean {
  if (response === undefined) return false
  if (task.kind === "choice") return Number(response) === task.answer
  const value = parseFigure(response)
  if (value === null) return false
  return Math.abs(value - task.answer) <= (task.tolerance ?? 1)
}
