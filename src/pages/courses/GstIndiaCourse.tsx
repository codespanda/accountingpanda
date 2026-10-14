import { CourseOverview, type CourseDetails } from "@/components/CourseOverview"
import { GST_INDIA_COURSE_PATH, gstIndiaModules } from "@/pages/courses/gstIndiaModules"

const course: CourseDetails = {
  slug: "learn-gst-in-india",
  title: "Learn GST in India — Beginner to Practical Level",
  summary:
    "A 15-module GST course for India covering CGST, SGST and IGST, registration, GST 2.0 rates, input tax credit, invoices, e-way bills, returns, payments and a hands-on practical project.",
  intro:
    "Understand India's Goods and Services Tax from the ground up — how CGST, SGST and IGST work, registration, rates, input tax credit, invoices and returns — then put it into practice with real-world exercises.",
  objective:
    "By the end of this course, learners will understand how GST works in India, know when a business must register, apply the right rates and place-of-supply rules, claim input tax credit correctly, issue compliant invoices, and prepare and file the main GST returns using accounting software.",
  level: "Beginner to Practical",
  duration: "4–6 weeks",
  badge: "New",
  category: { label: "Taxation", href: "/learning/taxation" },
  modules: gstIndiaModules,
  assignments: [
    "Read and verify a GSTIN",
    "Classify goods and services with HSN and SAC codes",
    "Decide between CGST + SGST and IGST",
    "Prepare a GST-compliant tax invoice",
    "Calculate eligible input tax credit",
    "Reconcile purchases with GSTR-2B",
    "Prepare a GSTR-3B summary",
  ],
  exercises:
    "Worked examples after each major module — calculating tax, claiming credit and preparing return data.",
  finalExam: "40 questions",
  finalPractical: "Handle one month of GST compliance for a fictional business.",
  note:
    "GST rates, thresholds and due dates change through GST Council decisions and CBIC notifications. This course explains the rules as they stand, but always confirm the current position on the official GST portal before filing.",
}

export function GstIndiaCourse() {
  return <CourseOverview course={course} path={GST_INDIA_COURSE_PATH} />
}
