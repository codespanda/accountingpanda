import type { PracticalAssignment } from "@/lib/lessonTypes"
import { note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Double-Entry Bookkeeping Explained — Maple
// Tutoring's second month (April).

const assignment: PracticalAssignment = {
  title: "Record Maple Tutoring's April with double entry",
  period: "April 2026",
  intro:
    "Maple Tutoring is in its second month. Record April's transactions with debits and credits, then prepare the trial balance and check the accounting equation.",
  context: [
    p("Maple Tutoring offers private tutoring. It uses accrual accounting."),
    table(
      ["Opening balances, 1 April", "Debit", "Credit"],
      [
        ["Cash", "$6,000", ""],
        ["Accounts receivable", "$800", ""],
        ["Equipment", "$2,500", ""],
        ["Accounts payable", "", "$300"],
        ["Owner's capital", "", "$9,000"],
      ],
      { footer: ["Total", "$9,300", "$9,300"], numeric: [1, 2] },
    ),
    table(
      ["Date", "Transaction"],
      [
        ["2 Apr", "Tutoring fees received in cash — $3,200"],
        ["4 Apr", "Invoiced a school for a tutoring programme — $1,500"],
        ["6 Apr", "Collected the $800 owed by customers at 1 April"],
        ["8 Apr", "Paid April rent — $900"],
        ["11 Apr", "Bought a laptop on credit — $1,200"],
        ["15 Apr", "Paid the $300 owed to suppliers at 1 April"],
        ["20 Apr", "Owner withdrew cash for personal use — $500"],
        ["24 Apr", "Paid the internet bill — $60"],
        ["28 Apr", "Owner put an extra $1,000 into the business"],
      ],
    ),
    note("There are no adjustments this month."),
  ],
  tasks: [
    pick("Which entry records the 4 April invoice?", "Dr Accounts receivable $1,500, Cr Tutoring revenue $1,500", ["Dr Cash $1,500, Cr Tutoring revenue $1,500", "Dr Tutoring revenue $1,500, Cr Accounts receivable $1,500", "No entry until the school pays"], "Revenue is earned when the work is invoiced; the amount owed is an asset."),
    pick("Which entry records the owner's extra $1,000 on 28 April?", "Dr Cash $1,000, Cr Owner's capital $1,000", ["Dr Owner's capital $1,000, Cr Cash $1,000", "Dr Cash $1,000, Cr Revenue $1,000", "Dr Drawings $1,000, Cr Cash $1,000"], "An owner's investment increases equity, not revenue."),
    num("What is the cash balance at 30 April?", 9240, "$6,000 + 3,200 + 800 − 900 − 300 − 500 − 60 + 1,000 = $9,240.", { prefix: "$" }),
    num("What is accounts receivable at 30 April?", 1500, "$800 + $1,500 − $800 = $1,500.", { prefix: "$" }),
    num("What is total revenue for April?", 4700, "$3,200 cash fees + $1,500 invoiced = $4,700.", { prefix: "$" }),
    num("What is the net profit for April?", 3740, "Revenue $4,700 − rent $900 − internet $60 = $3,740. Drawings aren't an expense.", { prefix: "$" }),
    num("What are the total debits on the 30 April trial balance (before closing)?", 15900, "Cash $9,240 + AR $1,500 + equipment $3,700 + drawings $500 + rent $900 + internet $60 = $15,900. Credits: AP $1,200 + capital $10,000 + revenue $4,700.", { prefix: "$" }),
    pick("What is the normal balance of the Drawings account?", "Debit", ["Credit", "It has no balance", "It depends on profit"], "Drawings reduce equity, so they carry a debit balance."),
    num("What is owner's equity at 30 April?", 13240, "$9,000 + $1,000 + profit $3,740 − drawings $500 = $13,240.", { prefix: "$" }),
    num("What are total assets at 30 April?", 14440, "Cash $9,240 + AR $1,500 + equipment $3,700 = $14,440 = liabilities $1,200 + equity $13,240.", { prefix: "$" }),
  ],
  references: [
    ref("IFRS Foundation — Conceptual Framework for Financial Reporting", "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/", "assets, liabilities, equity, income and expenses"),
    ref("IRS — Publication 583, Starting a Business and Keeping Records", "https://www.irs.gov/publications/p583"),
  ],
}

export default assignment
