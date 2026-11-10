import type { PracticalAssignment } from "@/lib/lessonTypes"
import { note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Financial Reporting — Cedar & Stone Homewares'
// July 2026 management accounts.

const assignment: PracticalAssignment = {
  title: "Prepare Cedar & Stone's July management accounts",
  period: "July 2026",
  intro:
    "Use Cedar & Stone Homewares' July trial balance to prepare an income statement and a balance sheet, then check that they tie.",
  context: [
    p("Cedar & Stone Homewares Ltd — the company from the course. Tax is accrued at 25% of profit before tax."),
    table(
      ["Trial balance extract, 31 July 2026", "Amount"],
      [
        ["Revenue", "$48,000"],
        ["Cost of sales", "$26,400"],
        ["Wages", "$9,000"],
        ["Rent", "$3,500"],
        ["Depreciation", "$1,200"],
        ["Interest expense", "$300"],
        ["Cash", "$31,000"],
        ["Trade receivables", "$22,000"],
        ["Inventory", "$41,000"],
        ["Property, plant and equipment (net)", "$120,000"],
        ["Trade payables", "$18,500"],
        ["Bank loan (repayable in 2030)", "$60,000"],
        ["Equity at 1 July 2026", "$127,900"],
      ],
      { numeric: [1] },
    ),
    note("July's tax expense hasn't been recorded yet; it will be paid later and is a current liability."),
  ],
  tasks: [
    num("What is July's gross profit?", 21600, "$48,000 − $26,400 = $21,600.", { prefix: "$" }),
    num("What is the gross margin? (%)", 45, "$21,600 ÷ $48,000 = 45%.", { suffix: "%", tolerance: 0.1 }),
    num("What is profit before tax?", 7600, "$21,600 − wages $9,000 − rent $3,500 − depreciation $1,200 − interest $300 = $7,600.", { prefix: "$" }),
    num("What is the tax expense for July?", 1900, "25% × $7,600 = $1,900.", { prefix: "$" }),
    num("What is profit for the month?", 5700, "$7,600 − $1,900 = $5,700.", { prefix: "$" }),
    num("What are total current assets?", 94000, "Cash $31,000 + receivables $22,000 + inventory $41,000 = $94,000.", { prefix: "$" }),
    num("What are total current liabilities?", 20400, "Trade payables $18,500 + tax payable $1,900 = $20,400. The loan is non-current.", { prefix: "$" }),
    num("What is equity at 31 July?", 133600, "$127,900 + profit $5,700 = $133,600.", { prefix: "$" }),
    num("What are total assets? (Check: they should equal liabilities plus equity.)", 214000, "$94,000 + PPE $120,000 = $214,000 = $20,400 + $60,000 + $133,600.", { prefix: "$" }),
    num("What is the current ratio? (two decimal places)", 4.61, "$94,000 ÷ $20,400 = 4.61.", { tolerance: 0.01 }),
    pick("Where is depreciation shown in the statement of cash flows (indirect method)?", "Added back to profit in operating activities", ["As an investing outflow", "As a financing outflow", "It isn't shown"], "Depreciation is a non-cash expense."),
  ],
  references: [
    ref("IFRS Foundation — IAS 1 Presentation of Financial Statements", "https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/", "current/non-current classification"),
    ref("IFRS Foundation — IAS 7 Statement of Cash Flows", "https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/"),
    ref("IFRS Foundation — Conceptual Framework for Financial Reporting", "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/"),
  ],
}

export default assignment
