import type { QuizQuestion } from "@/lib/lessonTypes"

/** Seconds allowed per final-test question. */
export const SECONDS_PER_QUESTION = 90
/** Percentage needed to pass a final test. */
export const FINAL_TEST_PASS_PCT = 80

/** "30 questions" → 30, capped by the number of questions available. */
export function finalTestSize(declared: string | undefined, poolSize: number) {
  const n = Number.parseInt(declared ?? "", 10)
  return Math.min(Number.isFinite(n) && n > 0 ? n : poolSize, poolSize)
}

/** A random selection of `count` question indexes from a pool. */
export function pickQuestions(poolSize: number, count: number): number[] {
  const ids = Array.from({ length: poolSize }, (_, i) => i)
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[ids[i], ids[j]] = [ids[j], ids[i]]
  }
  return ids.slice(0, count)
}

/**
 * A final-test question: the correct answer first, then three wrong ones.
 * The test shuffles the options for every attempt, so the order here never
 * shows on screen.
 */
export const fq = (question: string, correct: string, wrong: [string, string, string], explanation: string): QuizQuestion => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
})

/** A shuffled order of option indexes for one question. */
export function shuffledOrder(count: number): number[] {
  const order = Array.from({ length: count }, (_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return order
}
