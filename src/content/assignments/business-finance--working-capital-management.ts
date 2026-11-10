import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Working Capital Management — Kestrel Electrical
// Wholesale's December working capital review.

const assignment: PracticalAssignment = {
  title: "Measure Kestrel's December working capital",
  period: "December 2026",
  intro:
    "Six months into Kestrel Electrical Wholesale's working capital programme, measure December's position, the cash released and two decisions for January.",
  context: [
    p("Kestrel Electrical Wholesale — the business from the course. Daily sales $20,000; daily cost of sales $15,000."),
    table(
      ["Balance", "30 June 2026", "31 December 2026"],
      [
        ["Trade receivables", "$900,000", "$800,000"],
        ["Inventory", "$900,000", "$825,000"],
        ["Trade payables", "$450,000", "$525,000"],
      ],
      { numeric: [1, 2] },
    ),
    bullets(
      "Kestrel's overdraft costs 9% a year.",
      "A supplier offers 1% discount for payment within 10 days, otherwise 40 days.",
      "Cable drum demand has risen to 15,000 a year; each order costs $60 and holding a drum costs $2 a year.",
    ),
    note("Use daily sales for debtor days and daily cost of sales for inventory and creditor days."),
  ],
  tasks: [
    num("What are debtor days (DSO) at 31 December?", 40, "$800,000 ÷ $20,000 = 40 days.", { suffix: "days" }),
    num("What are inventory days (DIO)?", 55, "$825,000 ÷ $15,000 = 55 days.", { suffix: "days" }),
    num("What are creditor days (DPO)?", 35, "$525,000 ÷ $15,000 = 35 days.", { suffix: "days" }),
    num("What is the cash conversion cycle at 31 December?", 60, "40 + 55 − 35 = 60 days (down from 75).", { suffix: "days" }),
    num("How much cash has been released since 30 June?", 250000, "Receivables $100,000 + inventory $75,000 + payables $75,000 = $250,000.", { prefix: "$" }),
    num("What annual interest does that save at 9%?", 22500, "9% × $250,000 = $22,500.", { prefix: "$" }),
    num("What is the annualised return of taking the 1/10, net 40 discount? (%, two decimals)", 12.29, "1 ÷ 99 × 365 ÷ 30 = 12.29%.", { suffix: "%", tolerance: 0.05 }),
    pick("Should Kestrel take the discount, borrowing on the overdraft if needed?", "Yes — 12.29% is more than the 9% overdraft cost", ["No — discounts are never worth it", "Only if cash is idle", "No — 12.29% is below 9%"], "Take discounts whose annualised return beats the cost of funds."),
    num("What is the new economic order quantity for cable drums? (whole drums)", 949, "√(2 × 15,000 × 60 ÷ 2) = 948.7 → 949 drums.", { suffix: "drums", tolerance: 1 }),
  ],
  references: [
    ref("US Small Business Administration — Manage your finances", "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"),
    ref("business.gov.au — Cash flow", "https://business.gov.au/finance/cash-flow"),
  ],
}

export default assignment
