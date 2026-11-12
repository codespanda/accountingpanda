import { FileText } from "lucide-react"
import { CourseCategoryPage } from "@/components/CourseCategoryPage"
import { toCourseCard } from "@/lib/courseCards"
import { financialAccountingCourseCatalog } from "@/pages/courses/financialAccountingCourseCatalog"

const courses = financialAccountingCourseCatalog.map((c) =>
  toCourseCard(c, "/learning/financial-accounting")
)

export function FinancialAccountingCourses() {
  return (
    <CourseCategoryPage
      title="Financial Accounting"
      description="Understand financial statements"
      path="/learning/financial-accounting"
      icon={FileText}
      seoDescription="Practical financial accounting courses — financial statements, analysis, controls and revenue, plus country courses for the US, Australia and the UAE and property accounting in India and the US."
      courses={courses}
    />
  )
}
