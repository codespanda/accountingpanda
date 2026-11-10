/** Types for course lesson screens (src/content/lessons). */

export type QuizQuestion = {
  question: string
  options: string[]
  /** Index of the correct option. */
  answer: number
  explanation: string
}

export type LessonBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | {
      type: "example"
      rows: { label: string; value: string }[]
      total: { label: string; value: string }
    }
  | {
      type: "table"
      headers: string[]
      rows: string[][]
      /** Optional totals row, shown in bold. */
      footer?: string[]
      /** Columns whose cells are right-aligned (e.g. amounts). */
      numeric?: number[]
    }
  | { type: "list"; items: { term: string; text: string }[] }
  | { type: "bullets"; items: string[] }
  | {
      type: "flow"
      from: { title: string; place: string }
      to: { title: string; place: string }
      caption: string
    }
  | { type: "tip"; title: string; text: string }
  | { type: "caution"; text: string }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "checklist"; title: string; items: { title: string; text: string }[] }
  | { type: "compare"; items: { title: string; text: string; examples: string[] }[] }
  | { type: "gstin"; segments: { chars: string; label: string }[]; caption: string }
  | { type: "cases"; items: { title: string; stat: { label: string; value: string }; text: string }[] }
  | { type: "scenarios"; items: { title: string; text: string; badge: string; tax: string }[] }
  | {
      type: "calcs"
      items: {
        title: string
        rows: { label: string; value: string }[]
        total: { label: string; value: string }
      }[]
    }
  | {
      type: "branches"
      root: { title: string; text: string }
      items: { title: string; text: string; result: string; resultNote?: string }[]
      caption?: string
    }
  | { type: "knowledge-check"; passCount: number; questions: QuizQuestion[] }
  | { type: "exercises"; items: { title: string; task: string[]; answer: string[] }[] }
  | { type: "links"; items: { label: string; href: string; text: string }[] }
  | { type: "link"; label: string; text: string; href: string }
  | {
      type: "cards"
      items: { title: string; text: string; source?: { label: string; href: string } }[]
    }
  | { type: "note"; text: string }

export type LessonScreen = { title: string; blocks: LessonBlock[] }

/** A course's lesson screens, keyed by module index (0 = Module 1). */
export type CourseLessons = Record<number, LessonScreen[]>

/** One task in a course's practical assignment. */
export type AssignmentTask =
  | {
      kind: "number"
      prompt: string
      /** The correct figure. */
      answer: number
      /** Allowed difference from the answer (default 1). */
      tolerance?: number
      /** Shown before the input, e.g. "₹" or "$". */
      prefix?: string
      /** Shown after the input, e.g. "%" or "days". */
      suffix?: string
      /** Worked solution, revealed after the assignment is passed. */
      solution: string
    }
  | {
      kind: "choice"
      prompt: string
      options: string[]
      /** Index of the correct option. */
      answer: number
      solution: string
    }

/** An official source a course's figures were checked against. */
export type OfficialReference = { label: string; url: string; note?: string }

/**
 * A course's practical assignment: one month of realistic transactions and
 * tasks the learner works through before the final test.
 */
export type PracticalAssignment = {
  title: string
  /** e.g. "October 2026" */
  period: string
  intro: string
  /** The month's data — business details, opening balances, transactions. */
  context: LessonBlock[]
  tasks: AssignmentTask[]
  references: OfficialReference[]
}
