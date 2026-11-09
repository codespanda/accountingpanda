import type { CourseLessons, QuizQuestion } from "@/lib/lessonTypes"

/** Seconds allowed per final-test question. */
export const SECONDS_PER_QUESTION = 90
/** Percentage needed to pass a final test. */
export const FINAL_TEST_PASS_PCT = 80

/** Every knowledge-check question in a course, in module order. */
export function questionsFromLessons(lessons: CourseLessons | null): QuizQuestion[] {
  if (!lessons) return []
  return Object.keys(lessons)
    .map(Number)
    .sort((a, b) => a - b)
    .flatMap((index) =>
      lessons[index].flatMap((screen) =>
        screen.blocks.flatMap((block) => (block.type === "knowledge-check" ? block.questions : [])),
      ),
    )
}

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
