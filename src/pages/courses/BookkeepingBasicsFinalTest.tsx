import { CourseCertificate } from "@/components/CourseCertificate"
import { FinalTest } from "@/components/FinalTest"
import type { QuizQuestion } from "@/lib/lessonTypes"
import { finalTestSize } from "@/lib/finalTest"
import { bookkeepingBasicsModules } from "@/pages/courses/BookkeepingBasicsCourse"
import { bookkeepingBasicsLessons } from "@/pages/courses/bookkeepingBasicsLessons"

const COURSE_TITLE = "Bookkeeping Basics for Beginners"
const COURSE_SLUG = "bookkeeping-basics-for-beginners"
const COURSE_PATH = "/learning/bookkeeping/bookkeeping-basics-for-beginners"

const stripLetter = (option: string) => option.replace(/^[A-F]\.\s*/, "")
const letterIndex = (letter: string) => letter.trim().toUpperCase().charCodeAt(0) - 65

/** Every knowledge-check and quick-test question in the course, in the shared quiz format. */
const pool: QuizQuestion[] = Object.keys(bookkeepingBasicsLessons)
  .map(Number)
  .sort((a, b) => a - b)
  .flatMap((index) =>
    bookkeepingBasicsLessons[index].flatMap((page) =>
      page.blocks.flatMap((block): QuizQuestion[] => {
        if (block.type === "knowledge-check") {
          return block.questions.map((q) => ({
            question: q.question,
            options: q.options.map(stripLetter),
            answer: letterIndex(q.answer),
            explanation: "",
          }))
        }
        if (block.type === "quiz") {
          return [{ question: block.question, options: block.options.map(stripLetter), answer: letterIndex(block.answer), explanation: "" }]
        }
        return []
      }),
    ),
  )

export function BookkeepingBasicsFinalTest() {
  return (
    <FinalTest
      courseTitle={COURSE_TITLE}
      courseSlug={COURSE_SLUG}
      totalModules={bookkeepingBasicsModules.length}
      pool={pool}
      questionCount={finalTestSize("30 questions", pool.length)}
      backTo={`${COURSE_PATH}/progress`}
      backLabel="Back to Course Progress"
      certificatePath={`${COURSE_PATH}/certificate`}
      path={`${COURSE_PATH}/final-test`}
    />
  )
}

export function BookkeepingBasicsCertificate() {
  return (
    <CourseCertificate
      courseTitle={COURSE_TITLE}
      courseSlug={COURSE_SLUG}
      backTo={`${COURSE_PATH}/progress`}
      backLabel="Back to Course Progress"
      totalModules={bookkeepingBasicsModules.length}
      testPath={`${COURSE_PATH}/final-test`}
      path={`${COURSE_PATH}/certificate`}
    />
  )
}
