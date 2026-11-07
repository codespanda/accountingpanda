import type { LessonBlock, LessonScreen, QuizQuestion } from "@/lib/lessonTypes"

// Small builders that keep course lesson files (src/content/lessons) short
// and readable. Each returns a plain LessonBlock / LessonScreen.

export const p = (text: string): LessonBlock => ({ type: "paragraph", text })
export const h = (text: string): LessonBlock => ({ type: "heading", text })
export const note = (text: string): LessonBlock => ({ type: "note", text })
export const caution = (text: string): LessonBlock => ({ type: "caution", text })
export const tip = (title: string, text: string): LessonBlock => ({ type: "tip", title, text })
export const bullets = (...items: string[]): LessonBlock => ({ type: "bullets", items })

/** Definition list: [term, text] pairs. */
export const terms = (...items: [string, string][]): LessonBlock => ({
  type: "list",
  items: items.map(([term, text]) => ({ term, text })),
})

/** Numbered steps: [title, text] pairs. */
export const steps = (...items: [string, string][]): LessonBlock => ({
  type: "steps",
  items: items.map(([title, text]) => ({ title, text })),
})

/** Cards: [title, text] pairs. */
export const cards = (...items: [string, string][]): LessonBlock => ({
  type: "cards",
  items: items.map(([title, text]) => ({ title, text })),
})

/** Side-by-side comparison: [title, text, examples] triples. */
export const compare = (...items: [string, string, string[]][]): LessonBlock => ({
  type: "compare",
  items: items.map(([title, text, examples]) => ({ title, text, examples })),
})

export const table = (
  headers: string[],
  rows: string[][],
  opts: { footer?: string[]; numeric?: number[] } = {},
): LessonBlock => ({ type: "table", headers, rows, ...opts })

/** Journal entry table: [account, debit, credit] rows, with a totals footer. */
export const journal = (rows: [string, string, string][], total: string): LessonBlock => ({
  type: "table",
  headers: ["Account", "Debit", "Credit"],
  rows: rows.map(([a, d, c]) => [a, d || "—", c || "—"]),
  footer: ["Total", total, total],
  numeric: [1, 2],
})

/** Worked calculation: [label, value] rows and a [label, value] total. */
export const example = (rows: [string, string][], total: [string, string]): LessonBlock => ({
  type: "example",
  rows: rows.map(([label, value]) => ({ label, value })),
  total: { label: total[0], value: total[1] },
})

export const screen = (title: string, ...blocks: LessonBlock[]): LessonScreen => ({ title, blocks })

/** A quiz question; `answer` is the index of the correct option. */
export const q = (question: string, options: string[], answer: number, explanation: string): QuizQuestion => ({
  question,
  options,
  answer,
  explanation,
})

/** The closing knowledge-check screen for a module (pass mark 4 of 5). */
export const check = (moduleNumber: number, ...questions: QuizQuestion[]): LessonScreen =>
  screen(
    `Module ${moduleNumber} — Knowledge check`,
    p("Answer these questions, then press Check answers. Score at least 4 out of 5 to complete the module."),
    { type: "knowledge-check", passCount: 4, questions },
  )
