import { CourseCertificate } from "@/components/CourseCertificate"
import { FinalTest } from "@/components/FinalTest"
import { PracticalAssignmentPage } from "@/components/PracticalAssignment"
import { finalTestSize } from "@/lib/finalTest"
import { useFinalTestQuestions } from "@/lib/finalTestBanks"
import { bookkeepingBasicsModules } from "@/pages/courses/BookkeepingBasicsCourse"

const COURSE_TITLE = "Bookkeeping Basics for Beginners"
const COURSE_SLUG = "bookkeeping-basics-for-beginners"
const COURSE_PATH = "/learning/bookkeeping/bookkeeping-basics-for-beginners"
const CONTENT_KEY = "bookkeeping--bookkeeping-basics-for-beginners"

export function BookkeepingBasicsFinalTest() {
  const { questions, loading, available } = useFinalTestQuestions(CONTENT_KEY)
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
      assignmentKey={CONTENT_KEY}
      assignmentPath={`${COURSE_PATH}/assignment`}
    />
  )
}

export function BookkeepingBasicsAssignment() {
  return (
    <PracticalAssignmentPage
      courseTitle={COURSE_TITLE}
      progressKey={COURSE_SLUG}
      contentKey={CONTENT_KEY}
      totalModules={bookkeepingBasicsModules.length}
      backTo={`${COURSE_PATH}/progress`}
      testPath={`${COURSE_PATH}/final-test`}
      path={`${COURSE_PATH}/assignment`}
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
