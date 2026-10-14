import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const category = { label: "Financial Accounting", href: "/learning/financial-accounting" }

const mod = (n: number, title: string, items: string[]): CourseModule => ({
  title: `Module ${n} — ${title}`,
  sections: [{ items }],
})

/** Course pages for the Financial Accounting category. */
export const financialAccountingCourseCatalog: CourseDetails[] = [
  {
    slug: "financial-reporting",
    title: "Financial Reporting",
    image: "assets/course-financial-reporting.jpg",
    summary:
      "Prepare and present clear financial statements — income statement, balance sheet, cash flow statement, notes and monthly management reports.",
    intro:
      "Learn how businesses turn their books into financial statements that owners, lenders and tax advisers can rely on — and how to present them clearly every month and at year end.",
    objective:
      "By the end of this course, learners will prepare an income statement, balance sheet and cash flow statement from an adjusted trial balance, write the key notes and disclosures, and build a monthly management reporting pack.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "The Purpose of Financial Reporting", [
        "Who uses financial statements and why",
        "Qualities of useful financial information",
        "Accrual basis and the going-concern assumption",
        "Reporting frameworks — US GAAP, IFRS, AASB and Ind AS",
        "Reporting periods and year-end",
        "The full set of financial statements",
      ]),
      mod(2, "The Income Statement", [
        "Revenue and cost of sales",
        "Gross profit and gross margin",
        "Operating expenses",
        "Other income and finance costs",
        "Income tax and net profit",
        "Single-step vs. multi-step layouts",
      ]),
      mod(3, "The Balance Sheet", [
        "Current and non-current assets",
        "Current and non-current liabilities",
        "Equity — capital, retained earnings and drawings",
        "Classifying accounts correctly",
        "Presentation and comparatives",
        "Linking the balance sheet to the income statement",
      ]),
      mod(4, "The Cash Flow Statement", [
        "Why profit is not the same as cash",
        "Operating, investing and financing activities",
        "Direct and indirect methods",
        "Reconciling net profit to operating cash flow",
        "Reading a cash flow statement",
      ]),
      mod(5, "Equity, Notes and Disclosures", [
        "Statement of changes in equity",
        "Summary of accounting policies",
        "Key notes — fixed assets, borrowings and commitments",
        "Related-party transactions",
        "Events after the reporting date",
      ]),
      mod(6, "Management Reporting and Year-End", [
        "Building a monthly management reporting pack",
        "Key performance indicators",
        "Budget vs. actual and variance commentary",
        "Preparing year-end statements for accountants and auditors",
        "Review checklist before issuing reports",
      ]),
    ],
    assignments: [
      "Classify accounts into statement line items",
      "Prepare an income statement",
      "Prepare a balance sheet",
      "Prepare a cash flow statement using the indirect method",
      "Draft an accounting policies note",
      "Build a one-page management report",
    ],
    exercises:
      "Worked statement-preparation exercises after each module, starting from an adjusted trial balance.",
    finalExam: "30 questions",
    finalPractical:
      "Prepare a full set of year-end financial statements, with notes and a management summary, for a fictional business.",
  },
]
