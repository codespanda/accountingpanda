import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const category = { label: "Excel for Accountants", href: "/learning/excel-for-accountants" }

const mod = (n: number, title: string, items: string[]): CourseModule => ({
  title: `Module ${n} — ${title}`,
  sections: [{ items }],
})

/** Course pages for the Excel for Accountants category. */
export const excelCourseCatalog: CourseDetails[] = [
  {
    slug: "excel-mastery-for-accountants",
    title: "Excel Mastery for Accountants",
    image: "assets/course-excel-mastery.jpg",
    summary:
      "Advanced Excel techniques for accounting and reporting — clean data, lookups, PivotTables, reconciliations, schedules and dashboards.",
    intro:
      "Excel is still where most accounting work gets checked, reconciled and reported. Learn the functions, tools and workflows accountants use every day to work faster, avoid errors and build reports people trust.",
    objective:
      "By the end of this course, learners will clean and structure accounting data, use lookup and conditional functions confidently, summarise ledgers with PivotTables, build reconciliation, aging, depreciation and loan schedules, and present results in clear, error-checked dashboards.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Excel Foundations for Accountants", [
        "Workbook structure and good spreadsheet design",
        "Number, date and accounting formats",
        "Relative, absolute and mixed references",
        "Named ranges",
        "Keyboard shortcuts that save hours",
      ]),
      mod(2, "Tables, Data Cleaning and Validation", [
        "Excel Tables and structured references",
        "Sorting, filtering and removing duplicates",
        "Cleaning text — TRIM, CLEAN, Text to Columns and Flash Fill",
        "Data validation and drop-down lists",
        "Importing and refreshing data with Power Query",
      ]),
      mod(3, "Lookup and Logic Functions", [
        "IF, IFS, AND and OR",
        "SUMIFS, COUNTIFS and AVERAGEIFS",
        "XLOOKUP, and INDEX with MATCH",
        "Handling errors with IFERROR",
        "Date functions — EOMONTH, EDATE and NETWORKDAYS",
      ]),
      mod(4, "PivotTables and Reporting", [
        "Building PivotTables from a ledger or trial balance",
        "Grouping by month, quarter and year",
        "Calculated fields and percentages",
        "Slicers and PivotCharts",
        "Refreshing reports with new data",
      ]),
      mod(5, "Accounting Workflows in Excel", [
        "Bank reconciliation template",
        "Receivables and payables aging",
        "Depreciation schedules — straight-line and declining balance",
        "Loan schedules with PMT, IPMT and PPMT",
        "Budget vs. actual variance analysis",
      ]),
      mod(6, "Dashboards, Checks and Automation", [
        "Conditional formatting to highlight exceptions",
        "Charts for management reports",
        "Dynamic arrays — FILTER, UNIQUE and SORT",
        "Error checks, control totals and protecting sheets",
        "An introduction to recording macros",
      ]),
    ],
    assignments: [
      "Clean and structure an exported bank statement",
      "Match transactions with XLOOKUP",
      "Summarise a general ledger with a PivotTable",
      "Build a receivables aging report",
      "Create a depreciation and loan schedule",
      "Design a one-page management dashboard",
    ],
    exercises:
      "Hands-on practice files for every module, using sample ledgers, bank statements and trial balances.",
    finalExam: "30 questions",
    finalPractical:
      "Build a month-end reporting workbook — reconciliation, aging, schedules and a dashboard — from raw accounting data.",
  },
]
