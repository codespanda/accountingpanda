import type { PracticalAssignment } from "@/lib/lessonTypes"
import { note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Recording Journal Entries — Bloom & Co's July.

const assignment: PracticalAssignment = {
  title: "Journalise Bloom & Co's July",
  period: "July 2026",
  intro:
    "Write the journal entries for Bloom & Co's July transactions, including prepaid, unearned and accrued items, then work out the month's results and key balances.",
  context: [
    p("Bloom & Co is a florist using a perpetual inventory system. Inventory at 1 July was $1,000. Ignore sales tax."),
    table(
      ["Date", "Transaction"],
      [
        ["1 Jul", "Paid six months' shop insurance in advance — $1,200"],
        ["3 Jul", "Received a deposit for a September wedding — $2,000"],
        ["5 Jul", "Bought flowers on credit from a grower — $3,400"],
        ["10 Jul", "Cash sales for the week — $5,600 (cost of flowers sold $2,100)"],
        ["15 Jul", "Paid the grower part of the balance — $2,000"],
        ["20 Jul", "Credit sale to a hotel — $1,800 (cost of flowers sold $600)"],
        ["31 Jul", "Adjustment: one month of insurance has expired"],
        ["31 Jul", "Adjustment: staff wages earned in July but not yet paid — $750"],
      ],
    ),
    note("No other transactions. The wedding takes place in September."),
  ],
  tasks: [
    pick("Which entry records the 1 July insurance payment?", "Dr Prepaid insurance $1,200, Cr Cash $1,200", ["Dr Insurance expense $1,200, Cr Cash $1,200", "Dr Cash $1,200, Cr Prepaid insurance $1,200", "No entry until the insurance is used"], "The payment covers six future months, so it's an asset first."),
    pick("Which entry records the wedding deposit?", "Dr Cash $2,000, Cr Unearned revenue $2,000", ["Dr Cash $2,000, Cr Sales revenue $2,000", "Dr Unearned revenue $2,000, Cr Cash $2,000", "No entry until September"], "The flowers haven't been delivered, so Bloom owes the service — a liability."),
    num("What is July's sales revenue?", 7400, "Cash sales $5,600 + hotel $1,800 = $7,400. The deposit isn't revenue yet.", { prefix: "$" }),
    num("What is July's cost of goods sold?", 2700, "$2,100 + $600 = $2,700.", { prefix: "$" }),
    num("What is the insurance adjustment for July?", 200, "$1,200 ÷ 6 months = $200: Dr Insurance expense, Cr Prepaid insurance.", { prefix: "$" }),
    num("What is the prepaid insurance balance at 31 July?", 1000, "$1,200 − $200 = $1,000.", { prefix: "$" }),
    num("What does Bloom still owe the grower at 31 July?", 1400, "$3,400 − $2,000 = $1,400.", { prefix: "$" }),
    num("What is the inventory balance at 31 July?", 1700, "$1,000 + $3,400 purchased − $2,700 sold = $1,700.", { prefix: "$" }),
    pick("Which entry records the unpaid wages?", "Dr Wages expense $750, Cr Wages payable $750", ["Dr Wages payable $750, Cr Cash $750", "No entry until they're paid", "Dr Cash $750, Cr Wages expense $750"], "Accrue the expense in the month it's incurred."),
    num("What is July's net profit?", 3750, "Revenue $7,400 − COGS $2,700 − insurance $200 − wages $750 = $3,750.", { prefix: "$" }),
  ],
  references: [
    ref("IFRS Foundation — Conceptual Framework for Financial Reporting", "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/", "accrual basis and definitions"),
    ref("IRS — Publication 538, Accounting Periods and Methods", "https://www.irs.gov/publications/p538", "cash vs accrual methods"),
  ],
}

export default assignment
