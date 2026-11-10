import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Chart of Accounts Setup — coding Brightline
// Consulting's October transactions.

const assignment: PracticalAssignment = {
  title: "Code Brightline Consulting's October transactions",
  period: "October 2026",
  intro:
    "Brightline Consulting has a new chart of accounts. Code each of October's transactions to the right account, then total the accounts by type.",
  context: [
    p("Brightline Consulting's chart of accounts uses these number ranges:"),
    table(
      ["Range", "Type", "Accounts used this month"],
      [
        ["1000–1999", "Assets", "1000 Bank · 1500 Computer equipment"],
        ["2000–2999", "Liabilities", "2500 Bank loan"],
        ["3000–3999", "Equity", "3000 Owner's capital · 3100 Owner's drawings"],
        ["4000–4999", "Revenue", "4000 Consulting fees · 4100 Workshop fees"],
        ["6000–6999", "Operating expenses", "6000 Salaries · 6100 Rent · 6200 Software · 6300 Travel · 6310 Meals and entertainment · 6400 Interest"],
      ],
    ),
    table(
      ["Transaction (all through the bank)", "Amount"],
      [
        ["Consulting fees from clients", "$18,000"],
        ["Fees for a public workshop", "$2,500"],
        ["Staff salaries", "$7,000"],
        ["Office rent", "$1,800"],
        ["Software subscriptions", "$450"],
        ["Flights and taxis for client visits", "$620"],
        ["Bought a laptop", "$1,400"],
        ["Received a bank loan", "$5,000"],
        ["Repaid loan principal", "$400"],
        ["Loan interest", "$40"],
        ["Owner's drawings", "$1,000"],
        ["Client lunch", "$180"],
      ],
      { numeric: [1] },
    ),
    bullets("Revenue and expense accounts are reported in the profit and loss statement; the rest are on the balance sheet."),
    note("Ignore tax for this exercise."),
  ],
  tasks: [
    pick("Which account should the laptop be coded to?", "1500 Computer equipment", ["6200 Software", "6000 Salaries", "6300 Travel"], "A laptop is a long-lived asset, not an expense of the month."),
    pick("Which account should the owner's drawings be coded to?", "3100 Owner's drawings", ["6000 Salaries", "6400 Interest", "2500 Bank loan"], "Drawings reduce equity — they aren't an expense."),
    pick("Where should the loan repayment of $400 be coded?", "2500 Bank loan — it reduces the liability", ["6400 Interest", "4000 Consulting fees", "6100 Rent"], "Principal repayments reduce the loan; only interest is an expense."),
    pick("Which number would suit a new revenue account for “Training income”?", "4200", ["6500", "2200", "1200"], "Revenue accounts sit in the 4000 range."),
    num("What is total revenue for October?", 20500, "4000 Consulting fees $18,000 + 4100 Workshop fees $2,500 = $20,500.", { prefix: "$" }),
    num("What are total operating expenses (6000 range) for October?", 10090, "Salaries $7,000 + rent $1,800 + software $450 + travel $620 + meals $180 + interest $40 = $10,090.", { prefix: "$" }),
    num("What is October's net profit?", 10410, "$20,500 − $10,090 = $10,410.", { prefix: "$" }),
    num("What is the balance on 2500 Bank loan at 31 October (it started at nil)?", 4600, "$5,000 received − $400 repaid = $4,600.", { prefix: "$" }),
    num("How many of the 12 transactions are coded to balance sheet accounts (other than Bank)?", 4, "Laptop (1500), loan received and loan repaid (2500) and drawings (3100). The other eight go to revenue or expense accounts.", { suffix: "transactions" }),
  ],
  references: [
    ref("IFRS Foundation — Conceptual Framework for Financial Reporting", "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/", "classifying assets, liabilities, equity, income and expenses"),
    ref("IRS — Recordkeeping for small businesses", "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"),
  ],
}

export default assignment
