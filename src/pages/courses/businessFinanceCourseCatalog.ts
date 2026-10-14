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
]
