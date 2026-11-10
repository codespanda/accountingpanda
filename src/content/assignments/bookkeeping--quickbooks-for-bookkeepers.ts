import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for QuickBooks for Bookkeepers — Pine & Co's November
// in QuickBooks Online.

const assignment: PracticalAssignment = {
  title: "Keep Pine & Co's November books in QuickBooks Online",
  period: "November 2026",
  intro:
    "Work through Pine & Co's November transactions as you would in QuickBooks Online — invoices with sales tax, payments to deposit, card expenses and the bank feed — then check the reports.",
  context: [
    p("Pine & Co sells design services (not taxable) and home décor products (taxable at 8% local sales tax). It uses QuickBooks Online with a connected bank feed."),
    table(
      ["November transaction in QuickBooks", "Detail"],
      [
        ["Invoice #1001 to Cedar Café", "Design services $2,000 (non-taxable) + products $500 (taxable)"],
        ["Invoice #1002 to Lark Homes", "Products $1,200 (taxable)"],
        ["Receive payment", "Cedar Café paid #1001 in full"],
        ["Receive payment", "Lark Homes paid $1,000 towards #1002"],
        ["Bank deposit", "Both payments were banked together as one deposit"],
        ["Expense (bank)", "November rent — $1,500"],
        ["Expense (credit card)", "Office supplies — $230"],
        ["Bank feed", "A $25 monthly bank fee appears, not yet recorded"],
      ],
    ),
    bullets("Opening receivables and sales tax payable were nil.", "Ignore cost of goods sold for this exercise."),
    note("Sales tax applies only to the taxable product lines."),
  ],
  tasks: [
    num("What is the total of invoice #1001?", 2540, "Services $2,000 + products $500 + 8% sales tax on $500 ($40) = $2,540.", { prefix: "$" }),
    num("What is the total of invoice #1002?", 1296, "$1,200 + 8% ($96) = $1,296.", { prefix: "$" }),
    num("What is the single bank deposit amount that should match the bank feed?", 3540, "$2,540 + $1,000 = $3,540 — group both payments in one deposit so it matches the bank.", { prefix: "$" }),
    pick("Before the deposit is recorded, where do received payments sit in QuickBooks Online?", "Payments to deposit (Undeposited Funds)", ["Accounts payable", "Sales tax payable", "Owner's equity"], "Grouping them there lets one deposit match one bank line."),
    num("What is sales tax payable for November?", 136, "$40 + $96 = $136 — collected for the state, not revenue.", { prefix: "$" }),
    num("What does the Accounts Receivable Aging report show for Lark Homes?", 296, "$1,296 − $1,000 = $296.", { prefix: "$" }),
    num("What is total income on November's Profit and Loss?", 3700, "Services $2,000 + products $500 + $1,200 = $3,700 (sales tax excluded).", { prefix: "$" }),
    pick("How should the $25 bank fee in the feed be handled?", "Add it from the bank feed as an expense to Bank charges", ["Exclude it from the feed", "Match it to an invoice", "Record it as revenue"], "Adding it from the feed records the expense and keeps the bank reconciled."),
    num("What is November's net income?", 1945, "$3,700 − rent $1,500 − supplies $230 − bank fee $25 = $1,945.", { prefix: "$" }),
  ],
  references: [
    ref("Intuit — QuickBooks Online support", "https://quickbooks.intuit.com/learn-support/en-us", "invoices, payments to deposit, bank feeds"),
    ref("IRS — Recordkeeping for small businesses", "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"),
  ],
}

export default assignment
