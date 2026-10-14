import { Receipt } from "lucide-react"
import { CourseCategoryPage } from "@/components/CourseCategoryPage"
import { toCourseCard } from "@/lib/courseCards"
import { GST_INDIA_COURSE_PATH, gstIndiaModules } from "@/pages/courses/gstIndiaModules"
import { taxationCourseCatalog } from "@/pages/courses/taxationCourseCatalog"

const courses = [
  {
    title: "Learn GST in India — Beginner to Practical Level",
    image: "assets/course-gst-india.jpg",
    body: "Understand India's GST step by step, from CGST, SGST and IGST to input tax credit and filing returns.",
    duration: "4–6 weeks",
    level: "Beginner",
    badge: "New",
    modules: gstIndiaModules.length,
    href: GST_INDIA_COURSE_PATH,
  },
  ...taxationCourseCatalog.map((c) => toCourseCard(c, "/learning/taxation")),
]

export function TaxationCourses() {
  return (
    <CourseCategoryPage
      title="Taxation"
      description="Learn tax rules & compliance"
      path="/learning/taxation"
      icon={Receipt}
      seoDescription="Learn tax rules and compliance with practical courses on GST and TDS in India, from beginner to practical level."
      courses={courses}
    />
  )
}
