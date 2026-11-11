import { Navigate, useParams } from "react-router-dom"
import type { CourseDetails } from "@/components/CourseOverview"
import { CourseCertificate } from "@/components/CourseCertificate"
import { ModuleLessonPage } from "@/components/lessons/ModuleLessonPage"
import { lessonKey } from "@/lib/lessons"
import { FinalTest } from "@/components/FinalTest"
import { PracticalAssignmentPage } from "@/components/PracticalAssignment"
import { finalTestSize } from "@/lib/finalTest"
import { useFinalTestQuestions } from "@/lib/finalTestBanks"
import { trackerModules } from "@/lib/trackerModules"
import { GST_INDIA_COURSE_PATH, gstIndiaModuleSummaries } from "@/pages/courses/gstIndiaModules"

/** Route element for a Learn GST in India module lesson. */
export function GstModuleLessonRoute() {
  const { moduleNumber } = useParams()
  return (
    <ModuleLessonPage
      courseTitle="Learn GST in India"
      coursePath={GST_INDIA_COURSE_PATH}
      progressKey="learn-gst-in-india"
      moduleNumber={moduleNumber}
      modules={gstIndiaModuleSummaries}
    />
  )
}

/** Route element for a module lesson of any course in a category catalog. */
export function CatalogModuleLessonRoute({ catalog, basePath }: { catalog: CourseDetails[]; basePath: string }) {
  const { courseSlug, moduleNumber } = useParams()
  const course = catalog.find((c) => c.slug === courseSlug)
  if (!course) return <Navigate to={basePath} replace />
  const coursePath = `${basePath}/${course.slug}`
  return (
    <ModuleLessonPage
      courseTitle={course.title}
      coursePath={coursePath}
      progressKey={lessonKey(coursePath)}
      moduleNumber={moduleNumber}
      modules={trackerModules(course.modules)}
      videoFolder={course.moduleVideos}
    />
  )
}

/** Certificate page for Learn GST in India. */
export function GstCertificateRoute() {
  return (
    <CourseCertificate
      courseTitle="Learn GST in India"
      courseSlug="learn-gst-in-india"
      coursePath={GST_INDIA_COURSE_PATH}
      backTo={GST_INDIA_COURSE_PATH}
      backLabel="Back to Course"
      totalModules={gstIndiaModuleSummaries.length}
      testPath={`${GST_INDIA_COURSE_PATH}/final-test`}
      path={`${GST_INDIA_COURSE_PATH}/certificate`}
    />
  )
}

/** Certificate page for any course in a category catalog. */
export function CatalogCertificateRoute({ catalog, basePath }: { catalog: CourseDetails[]; basePath: string }) {
  const { courseSlug } = useParams()
  const course = catalog.find((c) => c.slug === courseSlug)
  if (!course) return <Navigate to={basePath} replace />
  const coursePath = `${basePath}/${course.slug}`
  return (
    <CourseCertificate
      courseTitle={course.title}
      courseSlug={lessonKey(coursePath)}
      coursePath={coursePath}
      backTo={coursePath}
      backLabel="Back to Course"
      totalModules={course.modules.length}
      testPath={`${coursePath}/final-test`}
      path={`${coursePath}/certificate`}
    />
  )
}

/** Timed final test for Learn GST in India. */
export function GstFinalTestRoute() {
  const { questions: pool, loading, available } = useFinalTestQuestions(lessonKey(GST_INDIA_COURSE_PATH))
  return (
    <FinalTest
      courseTitle="Learn GST in India"
      courseSlug="learn-gst-in-india"
      totalModules={gstIndiaModuleSummaries.length}
      pool={pool}
      loading={loading}
      available={available}
      questionCount={finalTestSize("40 questions", pool.length)}
      backTo={GST_INDIA_COURSE_PATH}
      backLabel="Back to Course"
      certificatePath={`${GST_INDIA_COURSE_PATH}/certificate`}
      path={`${GST_INDIA_COURSE_PATH}/final-test`}
      assignmentKey={lessonKey(GST_INDIA_COURSE_PATH)}
      assignmentPath={`${GST_INDIA_COURSE_PATH}/assignment`}
    />
  )
}

/** Timed final test for any course in a category catalog. */
export function CatalogFinalTestRoute({ catalog, basePath }: { catalog: CourseDetails[]; basePath: string }) {
  const { courseSlug } = useParams()
  const course = catalog.find((c) => c.slug === courseSlug)
  const coursePath = `${basePath}/${courseSlug ?? ""}`
  const { questions: pool, loading, available } = useFinalTestQuestions(lessonKey(coursePath))
  if (!course) return <Navigate to={basePath} replace />
  return (
    <FinalTest
      courseTitle={course.title}
      courseSlug={lessonKey(coursePath)}
      totalModules={course.modules.length}
      pool={pool}
      loading={loading}
      available={available}
      questionCount={finalTestSize(course.finalExam, pool.length)}
      backTo={coursePath}
      backLabel="Back to Course"
      certificatePath={`${coursePath}/certificate`}
      path={`${coursePath}/final-test`}
      assignmentKey={lessonKey(coursePath)}
      assignmentPath={`${coursePath}/assignment`}
    />
  )
}

/** Practical assignment for Learn GST in India. */
export function GstAssignmentRoute() {
  return (
    <PracticalAssignmentPage
      courseTitle="Learn GST in India"
      progressKey="learn-gst-in-india"
      contentKey={lessonKey(GST_INDIA_COURSE_PATH)}
      totalModules={gstIndiaModuleSummaries.length}
      backTo={GST_INDIA_COURSE_PATH}
      testPath={`${GST_INDIA_COURSE_PATH}/final-test`}
      path={`${GST_INDIA_COURSE_PATH}/assignment`}
    />
  )
}

/** Practical assignment for any course in a category catalog. */
export function CatalogAssignmentRoute({ catalog, basePath }: { catalog: CourseDetails[]; basePath: string }) {
  const { courseSlug } = useParams()
  const course = catalog.find((c) => c.slug === courseSlug)
  if (!course) return <Navigate to={basePath} replace />
  const coursePath = `${basePath}/${course.slug}`
  return (
    <PracticalAssignmentPage
      courseTitle={course.title}
      progressKey={lessonKey(coursePath)}
      contentKey={lessonKey(coursePath)}
      totalModules={course.modules.length}
      backTo={coursePath}
      testPath={`${coursePath}/final-test`}
      path={`${coursePath}/assignment`}
    />
  )
}
