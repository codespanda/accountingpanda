import { FileSpreadsheet } from "lucide-react"
import { CourseCategoryPage } from "@/components/CourseCategoryPage"
import { toCourseCard } from "@/lib/courseCards"
import { excelCourseCatalog } from "@/pages/courses/excelCourseCatalog"

const courses = excelCourseCatalog.map((c) => toCourseCard(c, "/learning/excel-for-accountants"))

export function ExcelCourses() {
  return (
    <CourseCategoryPage
      title="Excel for Accountants"
      description="Master Excel skills for accounting"
      path="/learning/excel-for-accountants"
      icon={FileSpreadsheet}
      seoDescription="Practical Excel courses for accountants — clean data, lookups, PivotTables, reconciliations, schedules and dashboards."
      courses={courses}
    />
  )
}
