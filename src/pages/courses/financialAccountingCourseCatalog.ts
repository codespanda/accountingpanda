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
  {
    slug: "financial-statement-analysis",
    title: "Financial Statement Analysis",
    image: "assets/course-financial-statement-analysis.jpg",
    summary:
      "Analyse financial statements and make informed decisions — horizontal and vertical analysis, ratios, cash flow quality, red flags and clear reporting.",
    intro:
      "Financial statements tell a story about performance, health and risk — if you know how to read them. Learn the techniques analysts, lenders and managers use to assess a business and turn numbers into decisions.",
    objective:
      "By the end of this course, learners will analyse financial statements with trend and common-size analysis, calculate and interpret profitability, liquidity, efficiency and solvency ratios, judge the quality of earnings and cash flow, spot warning signs, and present clear conclusions to decision-makers.",
    level: "Advanced",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Reading Financial Statements with Purpose", [
        "Who analyses statements — owners, lenders, investors and managers",
        "How the income statement, balance sheet and cash flow statement connect",
        "Accounting policies and notes that affect comparisons",
        "Gathering and preparing data for analysis",
      ]),
      mod(2, "Trend and Common-Size Analysis", [
        "Horizontal analysis — year-on-year changes",
        "Vertical analysis — common-size statements",
        "Comparing against competitors and industry benchmarks",
        "Presenting trends clearly",
      ]),
      mod(3, "Profitability and Return Ratios", [
        "Gross, operating and net margins",
        "Return on assets and return on equity",
        "Breaking down return on equity — the DuPont analysis",
        "Earnings per share and what drives it",
      ]),
      mod(4, "Liquidity, Efficiency and Solvency", [
        "Current and quick ratios",
        "Receivable, payable and inventory days",
        "The cash conversion cycle",
        "Debt-to-equity and interest cover",
        "Covenants lenders watch",
      ]),
      mod(5, "Cash Flow and Earnings Quality", [
        "Operating cash flow vs. reported profit",
        "Free cash flow",
        "Working capital swings",
        "Red flags — unusual accruals, revenue timing and one-off items",
      ]),
      mod(6, "From Analysis to Decisions", [
        "Building an analysis workbook",
        "Writing a short financial health report",
        "Credit, investment and budgeting decisions",
        "Limitations of ratio analysis",
        "Analysis checklist",
      ]),
    ],
    assignments: [
      "Prepare common-size statements for two years",
      "Calculate and interpret a full set of ratios",
      "Run a DuPont analysis",
      "Calculate the cash conversion cycle",
      "Compare profit with operating cash flow and explain the gap",
      "Write a one-page financial health report",
    ],
    exercises:
      "Worked analysis exercises after each module, using two years of statements for a sample company.",
    finalExam: "30 questions",
    finalPractical:
      "Analyse three years of financial statements for a fictional business and present a recommendation to a lender.",
  },
  {
    slug: "bank-reconciliation-and-month-end-close",
    title: "Bank Reconciliation & Month-End Close",
    image: "assets/course-bank-reconciliation-close.jpg",
    summary:
      "Close the books accurately every month — reconcile bank and balance sheet accounts, post accruals and prepayments, review results and follow a repeatable close checklist.",
    intro:
      "Reliable monthly numbers start with a disciplined close. Learn how to reconcile bank accounts, clear differences, post period-end adjustments and review the results before reports go out — on time, every month.",
    objective:
      "By the end of this course, learners will prepare bank reconciliations, reconcile key balance sheet accounts, post accruals, prepayments, depreciation and other period-end entries, review the trial balance for errors, and run a month-end close to a checklist and timetable.",
    level: "Intermediate",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Why the Month-End Close Matters", [
        "What a month-end close is and who relies on it",
        "Cut-off and the accrual basis",
        "Close timetables and responsibilities",
        "Common causes of late or wrong numbers",
      ]),
      mod(2, "Bank Reconciliation", [
        "Matching the bank statement to the cash book",
        "Outstanding cheques and deposits in transit",
        "Bank charges, interest and direct debits",
        "Investigating and correcting errors",
        "Bank feeds and reconciliation in accounting software",
      ]),
      mod(3, "Reconciling Balance Sheet Accounts", [
        "Receivables and payables control accounts",
        "Supplier statement reconciliations",
        "Payroll, tax and statutory liability accounts",
        "Suspense and clearing accounts",
        "Fixed asset and loan accounts",
      ]),
      mod(4, "Period-End Adjustments", [
        "Accrued expenses and accrued income",
        "Prepayments and deferred income",
        "Depreciation",
        "Inventory adjustments",
        "Provisions and reversing entries",
      ]),
      mod(5, "Review and Reporting", [
        "Reviewing the trial balance for errors",
        "Comparing results with last month and the budget",
        "Investigating unusual balances and movements",
        "Supporting schedules and documentation",
        "Locking the period",
      ]),
      mod(6, "Running a Better Close", [
        "Building a month-end close checklist",
        "Approvals and segregation of duties",
        "Shortening the close with automation",
        "Year-end close considerations",
        "Month-end close checklist",
      ]),
    ],
    assignments: [
      "Prepare a bank reconciliation",
      "Reconcile a supplier statement",
      "Clear a suspense account",
      "Post month-end accruals and prepayments",
      "Review a trial balance and explain unusual movements",
      "Build a month-end close checklist and timetable",
    ],
    exercises:
      "Worked reconciliation and journal exercises after each module, using one company's bank statements, ledgers and invoices.",
    finalExam: "30 questions",
    finalPractical:
      "Complete a full month-end close for a fictional business — bank and balance sheet reconciliations, adjusting entries and a reviewed trial balance.",
  },
]
