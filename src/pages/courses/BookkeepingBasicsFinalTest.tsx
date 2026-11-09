import { CourseCertificate } from "@/components/CourseCertificate"
import { FinalTest } from "@/components/FinalTest"
import { finalTestSize } from "@/lib/finalTest"
import { useFinalTestQuestions } from "@/lib/finalTestBanks"
import { bookkeepingBasicsModules } from "@/pages/courses/BookkeepingBasicsCourse"

const COURSE_TITLE = "Bookkeeping Basics for Beginners"
const COURSE_SLUG = "bookkeeping-basics-for-beginners"
const COURSE_PATH = "/learning/bookkeeping/bookkeeping-basics-for-beginners"

export function BookkeepingBasicsFinalTest() {
  const { questions, loading, available } = useFinalTestQuestions("bookkeeping--bookkeeping-basics-for-beginners")
  return (
    <FinalTest
      courseTitle={COURSE_TITLE}
      courseSlug={COURSE_SLUG}
      totalModules={bookkeepingBasicsModules.length}
      pool={questions}
      loading={loading}
      available={available}
      questionCount={finalTestSize("30 questions", questions.length)}
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
      coursePath={COURSE_PATH}
      backTo={`${COURSE_PATH}/progress`}
      backLabel="Back to Course Progress"
      totalModules={bookkeepingBasicsModules.length}
      testPath={`${COURSE_PATH}/final-test`}
      path={`${COURSE_PATH}/certificate`}
    />
  )
}
