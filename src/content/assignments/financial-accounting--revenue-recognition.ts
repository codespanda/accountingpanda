import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Revenue Recognition — Halcyon Security Systems'
// January 2027 revenue.

const assignment: PracticalAssignment = {
  title: "Recognise Halcyon Security's January revenue",
  period: "January 2027",
  intro:
    "Apply the five-step model to Halcyon Security Systems' January contracts: allocate a bundle, recognise monitoring over time, update a long-term project and handle a distributor rebate.",
  context: [
    p("Halcyon Security Systems Inc. — the company from the course."),
    table(
      ["Bayview Mall contract, signed and paid in full on 1 January 2027", "Stand-alone selling price"],
      [
        ["Camera hardware — delivered 10 January", "$20,000"],
        ["Installation — completed 20 January", "$5,000"],
        ["Monitoring — 12 months from 1 January", "$15,000"],
      ],
      { footer: ["Contract price paid upfront", "$32,000"] },
    ),
    table(
      ["Riverside Hospital project (over time, cost-to-cost)", "Amount"],
      [
        ["Contract price", "$900,000"],
        ["Estimated total costs", "$600,000"],
        ["Costs incurred to 31 December 2026", "$180,000 (revenue recognised in 2026: $270,000)"],
        ["Costs incurred in January 2027", "$60,000"],
        ["Total billed to 31 January 2027", "$300,000"],
      ],
      { numeric: [1] },
    ),
    bullets("A distributor bought 500 cameras at $100 each in January. Halcyon expects it to earn a 5% volume rebate this year."),
    note("Treat each performance obligation separately."),
  ],
  tasks: [
    num("How much of the $32,000 is allocated to the hardware?", 16000, "Total SSP $40,000; price is 80% of SSP. $20,000 × 80% = $16,000.", { prefix: "$" }),
    num("How much is allocated to monitoring?", 12000, "$15,000 × 80% = $12,000.", { prefix: "$" }),
    num("What Bayview Mall revenue does Halcyon recognise in January?", 21000, "Hardware $16,000 + installation $4,000 + one month of monitoring $1,000 = $21,000.", { prefix: "$" }),
    num("What contract liability remains for Bayview Mall at 31 January?", 11000, "Paid $32,000 − recognised $21,000 = $11,000 (the remaining monitoring).", { prefix: "$" }),
    num("What percentage of the Riverside project is complete at 31 January? (%)", 40, "($180,000 + $60,000) ÷ $600,000 = 40%.", { suffix: "%", tolerance: 0.1 }),
    num("What Riverside revenue is recognised in January?", 90000, "Cumulative 40% × $900,000 = $360,000, less $270,000 recognised in 2026 = $90,000.", { prefix: "$" }),
    num("What contract asset does Riverside show at 31 January?", 60000, "Revenue to date $360,000 − billed $300,000 = $60,000 (earned, not yet billable).", { prefix: "$" }),
    num("What distributor revenue is recognised in January?", 47500, "500 × $100 = $50,000 less the expected 5% rebate ($2,500) = $47,500, with a $2,500 refund liability.", { prefix: "$" }),
    pick("Why is monitoring recognised over time?", "The customer receives and uses the service as Halcyon provides it", ["Because it's paid upfront", "Because it's the cheapest part", "Because the hardware was delivered"], "That's one of the three over-time criteria in IFRS 15 / ASC 606."),
  ],
  references: [
    ref("IFRS Foundation — IFRS 15 Revenue from Contracts with Customers", "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/"),
    ref("FASB — Financial Accounting Standards Board", "https://www.fasb.org/", "US GAAP Topic 606, Revenue from Contracts with Customers"),
  ],
}

export default assignment
