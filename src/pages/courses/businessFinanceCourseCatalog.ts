import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const category = { label: "Business Finance", href: "/learning/business-finance" }

const mod = (n: number, title: string, items: string[]): CourseModule => ({
  title: `Module ${n} — ${title}`,
  sections: [{ items }],
})

/** Course pages for the Business Finance category. */
export const businessFinanceCourseCatalog: CourseDetails[] = [
  {
    slug: "budgeting-and-cash-flow-forecasting",
    title: "Budgeting and Cash Flow Forecasting",
    image: "assets/course-budgeting-cash-flow.jpg",
    summary:
      "Plan and control a business's finances — build an annual budget, forecast cash flow week by week, track actuals against plan and act early on shortfalls.",
    intro:
      "Profitable businesses still fail when they run out of cash. Learn how to build a realistic budget, forecast cash flow, compare results with the plan every month and use the numbers to make better decisions.",
    objective:
      "By the end of this course, learners will build an annual operating budget from sales and cost drivers, prepare 13-week and 12-month cash flow forecasts, analyse budget-vs-actual variances, test scenarios, and present a clear finance plan to owners and lenders.",
    level: "Intermediate",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Why Budgets and Forecasts Matter", [
        "Budgets, forecasts and cash flow — what each one is for",
        "Profit vs. cash — why profitable businesses still run short",
        "Top-down and bottom-up budgeting",
        "The annual budgeting calendar",
      ]),
      mod(2, "Building the Operating Budget", [
        "Sales forecasts from volume, price and customer drivers",
        "Cost of sales and gross margin",
        "Payroll and headcount planning",
        "Overheads, fixed and variable costs",
        "Capital expenditure",
      ]),
      mod(3, "Cash Flow Forecasting", [
        "The direct method — receipts and payments",
        "Timing — customer payment terms, supplier terms and tax dates",
        "The 13-week cash flow forecast",
        "The 12-month rolling forecast",
        "Minimum cash balance and funding needs",
      ]),
      mod(4, "Working Capital and Funding", [
        "Managing receivables, payables and inventory",
        "The cash conversion cycle",
        "Overdrafts, working capital loans and invoice finance",
        "Planning for seasonality and growth",
      ]),
      mod(5, "Tracking Performance", [
        "Monthly budget vs. actual reports",
        "Price, volume and cost variances",
        "Explaining variances in plain language",
        "Reforecasting during the year",
      ]),
      mod(6, "Scenarios and Decisions", [
        "Best, base and worst-case scenarios",
        "Break-even analysis",
        "Sensitivity testing of key assumptions",
        "Presenting a finance plan to owners and lenders",
        "Budgeting and forecasting checklist",
      ]),
    ],
    assignments: [
      "Build a driver-based sales forecast",
      "Prepare a 12-month operating budget",
      "Build a 13-week cash flow forecast",
      "Analyse a month of budget-vs-actual variances",
      "Model best, base and worst-case scenarios",
      "Present a one-page finance plan",
    ],
    exercises:
      "Hands-on spreadsheet exercises after each module, building one company's budget and forecast step by step.",
    finalExam: "30 questions",
    finalPractical:
      "Build a full annual budget and rolling cash flow forecast for a growing small business and recommend how to fund its peak cash needs.",
  },
  {
    slug: "working-capital-management",
    title: "Working Capital Management",
    image: "assets/course-working-capital.jpg",
    summary:
      "Free up cash tied in day-to-day operations — manage receivables, payables and inventory, shorten the cash conversion cycle and choose the right short-term funding.",
    intro:
      "Working capital is the cash a business needs to keep running between paying suppliers and collecting from customers. Learn how to measure it, find where cash is stuck and put simple controls in place to release it.",
    objective:
      "By the end of this course, learners will measure working capital and the cash conversion cycle, improve collections, plan supplier payments, control inventory levels, compare short-term funding options, and build a monthly working capital dashboard.",
    level: "Intermediate",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Working Capital Fundamentals", [
        "Current assets and current liabilities",
        "Gross vs. net working capital",
        "The operating cycle — from purchase to cash collection",
        "Why growing businesses need more working capital",
        "Current and quick ratios",
      ]),
      mod(2, "Managing Receivables", [
        "Credit policy and customer credit checks",
        "Invoicing promptly and accurately",
        "Debtor days and the receivables aging report",
        "Collection processes, reminders and follow-up",
        "Early-payment discounts and bad debt provisions",
      ]),
      mod(3, "Managing Payables", [
        "Negotiating supplier payment terms",
        "Creditor days and payment scheduling",
        "Early-payment discounts — when they are worth taking",
        "Keeping supplier relationships strong",
        "Approval controls and avoiding duplicate payments",
      ]),
      mod(4, "Managing Inventory", [
        "Inventory days and stock turnover",
        "Economic order quantity and reorder levels",
        "ABC analysis — focusing on high-value items",
        "Slow-moving and obsolete stock",
        "Balancing stock-outs against excess stock",
      ]),
      mod(5, "The Cash Conversion Cycle and Funding", [
        "Calculating the cash conversion cycle",
        "Levers to shorten the cycle",
        "Overdrafts and working capital loans",
        "Invoice discounting and factoring",
        "Supplier credit and trade finance",
      ]),
      mod(6, "Monitoring and Improving Working Capital", [
        "A monthly working capital dashboard",
        "Linking working capital to the cash flow forecast",
        "Setting targets and owners for each lever",
        "Common mistakes that tie up cash",
        "Working capital review checklist",
      ]),
    ],
    assignments: [
      "Calculate working capital and liquidity ratios",
      "Prepare a receivables aging report and collection plan",
      "Build a supplier payment schedule",
      "Run an ABC analysis of inventory",
      "Calculate and improve the cash conversion cycle",
      "Compare short-term funding options for a cash gap",
    ],
    exercises:
      "Hands-on spreadsheet exercises after each module, using one trading company's ledgers and stock records.",
    finalExam: "30 questions",
    finalPractical:
      "Review the working capital of a fictional wholesaler, identify where cash is tied up and present an action plan to release it.",
  },
]
