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
      seoDescription="Practical financial accounting courses — prepare and present income statements, balance sheets, cash flow statements and management reports."
      courses={courses}
    />
  )
}
