import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Month-End Close Process — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "What the month-end close is for",
      p("The month-end close is the set of tasks that makes a month's books complete and accurate, so its reports can be trusted and the month can be locked."),
      bullets(
        "Every transaction is recorded in the right month.",
        "Balance sheet accounts are reconciled to outside evidence.",
        "Accruals and adjustments match income and costs to the month.",
        "Reports are reviewed and shared with the owner or managers.",
      ),
    ),
    screen(
      "Building a close checklist",
      table(
        ["Area", "Example tasks"],
        [
          ["Transactions", "Enter all bills, invoices and receipts; clear uncategorised items"],
          ["Reconciliations", "Bank, credit cards, AR, AP, payroll, loans"],
          ["Adjustments", "Accruals, prepayments, deferred revenue, depreciation, inventory"],
          ["Review", "Balance sheet and P&L review, variance analysis"],
          ["Close", "Report pack, lock the period, file documentation"],
        ],
      ),
      tip("Write it down once", "A checklist turns the close into a repeatable routine. Each month, tick tasks off, note who did them and when."),
    ),
    screen(
      "Close calendar and who does what",
      table(
        ["Working day", "Task", "Owner"],
        [
          ["Day 1", "Final bills and invoices entered; bank feeds updated", "Bookkeeper"],
          ["Day 2", "Bank, card and payroll reconciliations", "Bookkeeper"],
          ["Day 3", "Accruals, prepayments and depreciation", "Bookkeeper"],
          ["Day 4", "Review and variance analysis", "Accountant"],
          ["Day 5", "Report pack sent; period locked", "Accountant / owner"],
        ],
      ),
      note("Small businesses often close in 5–10 working days. With good habits, many get faster over time."),
    ),
    check(
      1,
      q("What is the month-end close for?", ["Making the month's books complete and accurate", "Paying all bills", "Filing annual tax returns", "Hiring staff"], 0, "It makes the month's reports reliable."),
      q("Which task belongs in the reconciliations section of the checklist?", ["Bank and credit card accounts", "Writing a budget", "Hiring", "Marketing"], 0, "Balance sheet accounts are reconciled."),
      q("Why use a written checklist?", ["It makes the close a repeatable, trackable routine", "It's required by banks", "It replaces reconciliations", "It's faster to skip"], 0, "Checklists prevent missed steps."),
      q("What does a close calendar set?", ["Deadlines and owners for each task", "Interest rates", "Sales targets", "Holiday dates"], 0, "It schedules who does what by when."),
      q("What's the last step of the close?", ["Locking the period", "Entering bills", "Bank feeds", "Accruals"], 0, "Lock the period once reports are final."),
    ),
  ],
  1: [
    screen(
      "Making sure every transaction is recorded",
      bullets(
        "All sales invoices issued for work delivered this month.",
        "All supplier bills received and entered.",
        "All bank and card feeds imported up to the last day.",
        "Payroll, loan payments and direct debits recorded.",
        "Cash sales and petty cash entered.",
      ),
      tip("Ask, don't assume", "Email the team before month-end: “Any bills, contracts or purchases I should know about?” Many missing items live in someone's inbox."),
    ),
    screen(
      "Clearing uncategorised items",
      p("Software often parks unclear transactions in accounts such as Uncategorised expense, Ask my accountant or Suspense. Clear them before closing."),
      steps(
        ["List them", "Run a report of every item in these accounts."],
        ["Find the evidence", "Receipts, bills or a note from the person who spent it."],
        ["Reclassify", "Move each one to the right account."],
        ["Fix the cause", "Add a bank rule, or ask staff to submit receipts on time."],
      ),
    ),
    screen(
      "Cut-off for sales and purchases",
      p("Cut-off means recording each transaction in the month it actually happened."),
      table(
        ["Situation", "Which month?"],
        [
          ["Goods shipped Mar 31, invoiced Apr 2", "March sale — accrue or date the invoice correctly"],
          ["Service received in March, bill arrives in April", "March expense — accrue it"],
          ["Customer pays in March for April work", "April revenue — a deposit (liability) in March"],
          ["Goods ordered in March, delivered in April", "April purchase"],
        ],
      ),
      caution("Cut-off errors move profit between months and make comparisons misleading."),
    ),
    check(
      2,
      q("Which should be done before closing?", ["Clear items in Uncategorised expense", "Delete old invoices", "Change the chart of accounts", "Skip bank feeds"], 0, "Uncategorised items must be classified."),
      q("A service is received in March but billed in April. Which month gets the expense?", ["April", "March", "Either", "Neither"], 1, "It belongs to the month the service was received."),
      q("A customer pays in March for work done in April. What is it in March?", ["Revenue", "A deposit (liability)", "An expense", "An asset"], 1, "It isn't earned until April."),
      q("What does cut-off mean?", ["Recording transactions in the month they happened", "Cutting costs", "Stopping credit", "Closing the bank account"], 0, "Correct cut-off gives accurate monthly profit."),
      q("How can recurring uncategorised items be prevented?", ["Bank rules and timely receipts", "Ignoring them", "Deleting them", "More suspense accounts"], 0, "Fix the cause, not just the symptom."),
    ),
  ],
  2: [
    screen(
      "Bank and credit card accounts",
      p("Reconcile every bank, savings, credit card and payment processor account to its statement at month-end."),
      bullets(
        "The closing balance in the books agrees with the statement after listed timing items.",
        "No stale outstanding items (e.g. cheques uncleared for months).",
        "The reconciliation report is saved with the close file.",
      ),
    ),
    screen(
      "Receivables, payables and payroll liabilities",
      table(
        ["Account", "Reconcile to", "Watch for"],
        [
          ["Accounts receivable", "AR aging total", "Unapplied payments, old disputed balances"],
          ["Accounts payable", "AP aging total and key supplier statements", "Duplicate bills, missing credit notes"],
          ["Payroll liabilities", "Payroll reports and tax payments", "Withholdings not yet paid over, balances that don't clear"],
        ],
      ),
      tip("Ledger = sub-ledger", "The AR and AP control accounts on the balance sheet must equal the totals of their aging reports. If not, something was posted directly to the control account."),
    ),
    screen(
      "Loans and fixed assets",
      terms(
        ["Loans", "Agree the balance to the lender's statement; check interest and principal were split correctly."],
        ["Fixed assets", "Agree cost and accumulated depreciation to the fixed asset register; add new purchases and remove disposals."],
        ["Other balance sheet accounts", "Prepayments, accruals, deposits and owner accounts should each have a supporting schedule."],
      ),
      note("A simple rule: every balance sheet account should be supported by a statement, report or schedule that explains its balance."),
    ),
    check(
      3,
      q("What should the AR control account equal?", ["The AR aging report total", "Sales for the month", "Cash in the bank", "AP total"], 0, "The control account and sub-ledger must agree."),
      q("What is a loan balance reconciled to?", ["The lender's statement", "The bank fee schedule", "The sales report", "The budget"], 0, "The lender shows the true balance."),
      q("Payroll withholdings don't clear after payment. What might it mean?", ["Payments were missed or posted incorrectly", "Everything is fine", "Sales are high", "Interest is due"], 0, "Payroll liabilities should clear when paid."),
      q("What supports the fixed asset balance?", ["A fixed asset register", "The AR aging", "A sales invoice", "A bank rule"], 0, "The register lists cost and depreciation."),
      q("What's the general rule for balance sheet accounts at month-end?", ["Each should be supported by a statement, report or schedule", "Only cash matters", "Leave them for year-end", "Round them"], 0, "Every balance should be explained."),
    ),
  ],
  3: [
    screen(
      "Accrued expenses and accrued income",
      h("March electricity of about $380 — bill not yet received"),
      journal([["Utilities", "$380", ""], ["Accrued expenses", "", "$380"]], "$380"),
      h("Work done in March for $2,500, invoiced in April"),
      journal([["Accrued income (unbilled revenue)", "$2,500", ""], ["Sales", "", "$2,500"]], "$2,500"),
      tip("Use reversing entries", "Set accruals to reverse on the first day of next month. When the real bill or invoice is entered, it won't be double-counted."),
    ),
    screen(
      "Prepaid expenses and deferred revenue",
      p("A 12-month insurance policy of $2,400 is paid on March 1. Each month uses $200."),
      journal([["Insurance expense", "$200", ""], ["Prepaid insurance", "", "$200"]], "$200"),
      p("A customer pays $1,200 in advance for a 6-month subscription. Each month earns $200."),
      journal([["Deferred revenue", "$200", ""], ["Subscription revenue", "", "$200"]], "$200"),
    ),
    screen(
      "Depreciation and inventory adjustments",
      p("Equipment costing $12,000 with a 5-year life and no residual value: $12,000 ÷ 60 months = $200 a month."),
      journal([["Depreciation expense", "$200", ""], ["Accumulated depreciation", "", "$200"]], "$200"),
      p("A stock count shows inventory worth $18,600, but the books show $19,100. The $500 shortfall is written down:"),
      journal([["Cost of goods sold (inventory adjustment)", "$500", ""], ["Inventory", "", "$500"]], "$500"),
      note("Large or repeated stock shortfalls should be investigated, not just adjusted."),
    ),
    check(
      4,
      q("March electricity of $380 isn't billed until April. What's the March entry?", ["Debit Utilities, credit Accrued expenses", "Debit Cash, credit Utilities", "No entry", "Debit Accrued expenses, credit Utilities"], 0, "Accrue the cost in the month it was used."),
      q("Why set accruals to reverse next month?", ["To avoid double-counting when the real bill is entered", "To increase profit", "Software requires it", "To skip reconciliations"], 0, "The reversal cancels out the accrual when the bill arrives."),
      q("$2,400 of insurance covers 12 months. What's the monthly expense?", ["$2,400", "$240", "$200", "$120"], 2, "$2,400 ÷ 12 = $200."),
      q("A customer prepays $1,200 for 6 months. How much revenue is earned each month?", ["$1,200", "$200", "$600", "$100"], 1, "$1,200 ÷ 6 = $200."),
      q("Equipment costs $12,000 with a 5-year life. What is monthly straight-line depreciation?", ["$100", "$200", "$2,400", "$1,000"], 1, "$12,000 ÷ 60 months = $200."),
    ),
  ],
  4: [
    screen(
      "Reviewing the balance sheet",
      bullets(
        "Every account reconciled or supported by a schedule.",
        "No negative balances that don't make sense (e.g. negative cash or inventory).",
        "Suspense, clearing and uncategorised accounts at zero.",
        "Owner's drawings and loans to or from the owner recorded correctly.",
        "Tax liabilities agree with returns and payments.",
      ),
    ),
    screen(
      "Reviewing the P&L and variance analysis",
      table(
        ["Account", "This month", "Last month", "Change", "Budget"],
        [
          ["Sales", "$42,000", "$39,500", "+6%", "$40,000"],
          ["Cost of sales", "$18,900", "$17,400", "+9%", "$17,600"],
          ["Rent", "$3,000", "$3,000", "0%", "$3,000"],
          ["Software", "$1,250", "$420", "+198%", "$450"],
        ],
      ),
      p("Software almost tripled — investigate. It could be an annual subscription that should be spread over 12 months as a prepayment, a duplicate, or a real new cost."),
      tip("Explain big swings", "Set a threshold — say changes over 10% and $500 — and write a one-line reason for each."),
    ),
    screen(
      "The month-end report pack",
      table(
        ["Report", "Purpose"],
        [
          ["Profit and loss (vs. last month and budget)", "Performance for the month"],
          ["Balance sheet", "Financial position at month-end"],
          ["Cash flow summary", "Where cash came from and went"],
          ["AR and AP aging", "Who owes the business, and whom it owes"],
          ["Key metrics and commentary", "Gross margin, cash runway, notes on variances"],
        ],
      ),
      note("Keep the commentary short and plain: what happened, why, and anything the owner needs to decide."),
    ),
    check(
      5,
      q("Which is a red flag on the balance sheet review?", ["Negative inventory", "Reconciled bank", "Zero suspense balance", "Supported prepayments"], 0, "Negative inventory usually means a recording error."),
      q("What is variance analysis?", ["Comparing results with last month and budget, and explaining differences", "Counting stock", "Paying bills", "Sending invoices"], 0, "It finds and explains unusual changes."),
      q("Software expense almost tripled. What's a likely cause to check?", ["An annual subscription expensed in one month", "Lower sales", "A bank fee", "Depreciation"], 0, "Annual costs should often be spread as prepayments."),
      q("What should suspense and clearing accounts show after the close?", ["Large balances", "Zero (or explained balances)", "Negative balances", "Any amount"], 1, "They should be cleared."),
      q("What belongs in a month-end report pack?", ["P&L, balance sheet, cash summary and agings", "Only bank statements", "Only invoices", "Tax returns for 5 years"], 0, "These give a full monthly picture."),
    ),
  ],
  5: [
    screen(
      "Locking the period",
      p("Once the month is final, lock it so no one can change it by accident. QuickBooks Online calls this a closing date; Xero calls it a lock date."),
      bullets(
        "Set the lock date to the last day of the closed month.",
        "Protect it with a password or limit who can change it.",
        "Changes after locking should be rare and approved.",
      ),
      caution("If a locked month is reopened and changed, the reports already sent to the owner, lenders or tax advisers will no longer match the books."),
    ),
    screen(
      "Documenting the close",
      steps(
        ["Save the checklist", "With dates and initials for each task."],
        ["Save reconciliations", "Bank, card, AR, AP, payroll and loan reconciliations."],
        ["Save schedules", "Accruals, prepayments, deferred revenue, depreciation."],
        ["Save the report pack", "Exactly as sent to the owner."],
        ["Record open issues", "Anything to follow up next month."],
      ),
    ),
    screen(
      "Speeding up the close over time",
      terms(
        ["Reconcile weekly", "Small, regular reconciliations make month-end quicker."],
        ["Automate", "Bank rules, recurring journals and reversing accruals."],
        ["Deadlines for others", "Staff submit receipts and approvals by a set day."],
        ["Standard templates", "The same schedules and report pack each month."],
        ["Review the process", "After each close, note what slowed you down and fix one thing."],
      ),
      tip("Don't trade accuracy for speed", "A fast close is only useful if the numbers are right. Shorten the timeline by removing delays, not by skipping checks."),
    ),
    check(
      6,
      q("What does locking a period do?", ["Prevents accidental changes to closed months", "Deletes transactions", "Files tax returns", "Pays bills"], 0, "It protects final numbers."),
      q("What does Xero call the period lock?", ["Closing date", "Lock date", "Freeze date", "Final date"], 1, "Xero uses lock dates; QuickBooks Online uses a closing date."),
      q("Why keep documentation of the close?", ["To show what was done and support the numbers", "To fill storage", "It's never needed", "Only for payroll"], 0, "Documentation supports reviews and audits."),
      q("Which habit speeds up the close?", ["Reconciling weekly", "Skipping reviews", "Delaying receipts", "Reopening periods"], 0, "Regular reconciliations reduce month-end work."),
      q("What's the right way to shorten the close?", ["Skip checks", "Remove delays and automate routine steps", "Close before month-end", "Ignore accruals"], 1, "Accuracy comes first."),
    ),
  ],
}

export default lessons
