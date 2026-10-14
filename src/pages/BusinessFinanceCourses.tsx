import { TrendingUp } from "lucide-react"
import { CourseCategoryPage } from "@/components/CourseCategoryPage"
import { toCourseCard } from "@/lib/courseCards"
import { businessFinanceCourseCatalog } from "@/pages/courses/businessFinanceCourseCatalog"

const courses = businessFinanceCourseCatalog.map((c) => toCourseCard(c, "/learning/business-finance"))

export function BusinessFinanceCourses() {
  return (
    <CourseCategoryPage
      title="Business Finance"
      description="Financial planning & analysis"
      path="/learning/business-finance"
      icon={TrendingUp}
      seoDescription="Practical business finance courses — budgeting, cash flow forecasting, working capital and financial planning for growing businesses."
      courses={courses}
    />
  )
}
