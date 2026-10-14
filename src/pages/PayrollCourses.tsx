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
      seoDescription="Practical payroll compliance courses for India — EPF, ESI and professional tax, from coverage and contributions to monthly filing."
      courses={courses}
    />
  )
}
