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
  {
    slug: "financial-modelling-in-excel",
    title: "Financial Modelling in Excel",
    image: "assets/course-financial-modelling.jpg",
    summary:
      "Build a linked three-statement financial model in Excel — assumptions, revenue and cost forecasts, balance sheet and cash flow, scenarios and a simple valuation.",
    intro:
      "A good financial model turns a business plan into numbers that owners, lenders and investors can test. Learn how to structure, build and check a three-statement model that is clear, flexible and easy for others to review.",
    objective:
      "By the end of this course, learners will structure a model with separate inputs, calculations and outputs, forecast revenue, costs and working capital, link the income statement, balance sheet and cash flow statement, model debt and fixed assets, run scenarios and sensitivities, and estimate value with a discounted cash flow.",
    level: "Advanced",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Modelling Principles and Structure", [
        "What financial models are used for",
        "Inputs, calculations and outputs on separate sheets",
        "Timelines, periods and flags",
        "Formatting conventions — inputs, formulas and links",
        "Keeping formulas simple and consistent",
      ]),
      mod(2, "Assumptions and Revenue Forecasting", [
        "Building an assumptions sheet",
        "Historical analysis as a starting point",
        "Driver-based revenue — volume, price and growth",
        "Cost of sales and gross margin",
        "Operating costs and headcount",
      ]),
      mod(3, "Fixed Assets, Working Capital and Debt", [
        "Capital expenditure and depreciation schedules",
        "Receivable, payable and inventory days",
        "Loan schedules — drawdowns, repayments and interest",
        "Equity, dividends and retained earnings",
      ]),
      mod(4, "Linking the Three Statements", [
        "Income statement from the schedules",
        "Building the balance sheet",
        "Cash flow statement using the indirect method",
        "Making the balance sheet balance",
        "Handling circular references from interest",
      ]),
      mod(5, "Scenarios and Sensitivities", [
        "Scenario switches with CHOOSE and INDEX",
        "Data tables for sensitivity analysis",
        "Goal Seek and break-even questions",
        "Presenting scenarios side by side",
      ]),
      mod(6, "Valuation, Checks and Presentation", [
        "Free cash flow and discounted cash flow basics",
        "Discount rates and terminal value",
        "Error checks and balance checks",
        "Summary dashboard and charts",
        "Reviewing someone else's model",
      ]),
    ],
    assignments: [
      "Set up a model structure with an assumptions sheet",
      "Build a driver-based revenue and cost forecast",
      "Create fixed asset, working capital and loan schedules",
      "Link the three statements and balance the model",
      "Run scenarios and a sensitivity data table",
      "Estimate value with a discounted cash flow",
    ],
    exercises:
      "Step-by-step build exercises after each module, completing one company's five-year model by the end of the course.",
    finalExam: "30 questions",
    finalPractical:
      "Build a five-year three-statement model for a growing business, with scenarios, a valuation and a one-page summary for investors.",
  },
]
