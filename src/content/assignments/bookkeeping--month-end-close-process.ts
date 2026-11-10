import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Month-End Close Process — Northwind Interiors'
// November close.

const assignment: PracticalAssignment = {
  title: "Close Northwind Interiors' books for November",
  period: "November 2026",
  intro:
    "Northwind Interiors' unadjusted November results show a profit of $24,000. Work through the close checklist, post the adjustments and arrive at the final profit.",
  context: [
    p("Northwind Interiors designs and fits out offices. It closes its books within five working days of month end."),
    table(
      ["Close item", "Detail"],
      [
        ["Depreciation", "November charge on equipment and vehicles — $1,250"],
        ["Utilities", "November electricity used; the bill arrives in December — $640"],
        ["Prepaid rent", "Rent paid in advance; November's share has now been used — $2,000"],
        ["Unearned revenue", "A client prepaid in October; work worth $3,500 was completed in November"],
        ["Unbilled work", "Design hours delivered in November, to be invoiced in December — $1,800"],
        ["Inventory count", "Physical count of fit-out materials is $450 below the books"],
        ["Staff bonus", "November's share of the year-end bonus — $1,500"],
        ["Bank fee", "Found on the bank statement, not yet recorded — $25"],
      ],
    ),
    bullets("Unadjusted profit for November: $24,000.", "Northwind uses reversing entries for accruals made at month end."),
    note("Treat each item as a separate adjustment."),
  ],
  tasks: [
    num("What is the total effect of the four expense accruals and allocations (depreciation, utilities, prepaid rent, bonus) on profit? (Enter as a negative number)", -5390, "−$1,250 − $640 − $2,000 − $1,500 = −$5,390.", { prefix: "$" }),
    pick("Which entry records the unearned revenue now earned?", "Dr Unearned revenue $3,500, Cr Revenue $3,500", ["Dr Revenue $3,500, Cr Unearned revenue $3,500", "Dr Cash $3,500, Cr Revenue $3,500", "No entry"], "The liability falls as the work is done, and revenue is recognised."),
    pick("Which entry records the unbilled design hours?", "Dr Accrued revenue (unbilled receivables) $1,800, Cr Revenue $1,800", ["No entry until it's invoiced", "Dr Revenue $1,800, Cr Accounts receivable $1,800", "Dr Cash $1,800, Cr Revenue $1,800"], "Revenue is recognised when the work is done, even before invoicing."),
    num("What is the total effect of all revenue adjustments on profit?", 5300, "$3,500 + $1,800 = $5,300.", { prefix: "$" }),
    num("What is the adjusted profit for November?", 23435, "$24,000 − $1,250 − $640 − $2,000 + $3,500 + $1,800 − $450 − $1,500 − $25 = $23,435.", { prefix: "$" }),
    pick("Which November entries are good candidates to reverse on 1 December?", "The accrued utilities and the unbilled-work accrual", ["Depreciation and the inventory write-down", "The bank fee", "All of them"], "Reversing accruals avoids double counting when the actual bill or invoice is recorded."),
    pick("Which balance sheet reconciliation would catch the unrecorded bank fee?", "The bank reconciliation", ["The fixed asset register", "The payroll register", "The sales tax return"], "Comparing the bank statement with the books shows items not yet recorded."),
    num("By how much did the inventory shortfall reduce profit?", 450, "The $450 shortfall is expensed (Dr Cost of sales / inventory adjustment, Cr Inventory).", { prefix: "$" }),
  ],
  references: [
    ref("IFRS Foundation — Conceptual Framework for Financial Reporting", "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/", "accrual basis"),
    ref("IRS — Publication 538, Accounting Periods and Methods", "https://www.irs.gov/publications/p538"),
  ],
}

export default assignment
