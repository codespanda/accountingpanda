import { Users } from "lucide-react"
import { CourseCategoryPage } from "@/components/CourseCategoryPage"
import { toCourseCard } from "@/lib/courseCards"
import { payrollCourseCatalog } from "@/pages/courses/payrollCourseCatalog"

const courses = payrollCourseCatalog.map((c) => toCourseCard(c, "/learning/payroll"))

export function PayrollCourses() {
  return (
    <CourseCategoryPage
      title="Payroll"
      description="Payroll processing & compliance"
      path="/learning/payroll"
      icon={Users}
      seoDescription="Practical payroll courses for India, the US, Australia and the UAE — statutory compliance, withholding, superannuation, gratuity and year-end filing."
      courses={courses}
    />
  )
}
