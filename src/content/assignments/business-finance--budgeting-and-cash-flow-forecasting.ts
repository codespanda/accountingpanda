import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Budgeting and Cash Flow Forecasting — Fernhill
// Garden Supplies' June 2027 review and July cash forecast.

const assignment: PracticalAssignment = {
  title: "Review Fernhill's June and forecast July cash",
  period: "June 2027",
  intro:
    "June 2027 has closed. Explain Fernhill Garden Supplies' retail sales variance, forecast July's cash, and reforecast the full-year profit.",
  context: [
    p("Fernhill Garden Supplies — the business from the course."),
    table(
      ["June 2027 retail", "Budget", "Actual"],
      [
        ["Transactions", "3,000", "3,200"],
        ["Average spend", "$40", "$38"],
      ],
    ),
    table(
      ["July 2027 cash forecast inputs", "Amount"],
      [
        ["Opening cash, 1 July", "$35,000"],
        ["Retail takings", "$110,000"],
        ["Trade collections (June's trade sales, 30-day terms)", "$57,000"],
        ["Supplier payments", "$90,000"],
        ["Payroll, rent and overheads", "$60,000"],
      ],
      { numeric: [1] },
    ),
    bullets(
      "Minimum cash balance: $30,000.",
      "Year-to-date revenue (January–June) $1,080,000; remaining budget July–December $700,000.",
      "Contribution margin 42%; fixed costs $672,000 a year.",
    ),
    note("Show favourable variances as positive and adverse as negative."),
  ],
  tasks: [
    num("What was June's actual retail revenue?", 121600, "3,200 × $38 = $121,600.", { prefix: "$" }),
    num("What is the retail volume variance (at budget spend)?", 8000, "(3,200 − 3,000) × $40 = $8,000 favourable.", { prefix: "$" }),
    num("What is the spend-per-customer variance (on actual transactions)?", -6400, "($38 − $40) × 3,200 = −$6,400 adverse.", { prefix: "$" }),
    num("What is the total retail sales variance?", 1600, "$121,600 − $120,000 = $1,600 favourable.", { prefix: "$" }),
    pick("Which plain-language explanation fits?", "More customers came, but each spent less — the net effect was slightly favourable", ["Sales fell sharply", "Prices rose", "Nothing changed"], "Split the variance into volume and spend to tell the story."),
    num("What is the forecast closing cash at 31 July?", 52000, "$35,000 + $110,000 + $57,000 − $90,000 − $60,000 = $52,000.", { prefix: "$" }),
    pick("Does July need extra funding?", "No — $52,000 stays above the $30,000 minimum", ["Yes — $22,000", "Yes — the overdraft is needed", "Can't tell"], "Closing cash exceeds the minimum buffer."),
    num("What is the reforecast revenue for the year?", 1780000, "YTD actual $1,080,000 + remaining budget $700,000 = $1,780,000.", { prefix: "$" }),
    num("What is the reforecast profit for the year?", 75600, "42% × $1,780,000 − $672,000 = $75,600.", { prefix: "$" }),
    num("How far is the reforecast revenue above break-even?", 180000, "Break-even $672,000 ÷ 42% = $1,600,000; $1,780,000 − $1,600,000 = $180,000.", { prefix: "$" }),
  ],
  references: [
    ref("US Small Business Administration — Manage your finances", "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"),
    ref("business.gov.au — Cash flow", "https://business.gov.au/finance/cash-flow"),
  ],
}

export default assignment
