import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  example,
  exercises,
  journal,
  mistakes,
  note,
  overview,
  p,
  q,
  screen,
  steps,
  summary,
  table,
  terms,
  tip,
} from "@/lib/lessonKit"

// Month-End Close Process — lesson screens by module index (0 = Module 1).
// The course follows Northwind Interiors, a furniture showroom and design
// studio, as it closes March.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Planning the Close",
      ["The month-end close turns a month of transactions into reports the owner can trust. A good close is planned, not improvised."],
      ["Explain what the month-end close is for", "Build a close checklist", "Set a close calendar with deadlines", "Assign who does what"],
    ),
    screen(
      "Meet Northwind Interiors",
      p("Northwind Interiors sells furniture from its showroom and offers interior design services. Its finance team is Maya (bookkeeper) and Tom (accountant), with the owner, Grace, reviewing the reports."),
      p("Until recently, Northwind's close took nine working days and the numbers kept changing after Grace had seen them. In this course you'll follow how the team closes March — and makes the close faster and more reliable."),
    ),
    screen(
      "What the month-end close is for",
      p("The month-end close is the set of tasks that makes a month's books complete and accurate, so its reports can be trusted and the month can be locked."),
      bullets(
        "Every transaction is recorded in the right month.",
        "Balance sheet accounts are reconciled to outside evidence.",
        "Accruals and adjustments match income and costs to the month.",
        "Reports are reviewed and shared with the owner.",
        "The period is locked so the numbers don't change afterwards.",
      ),
    ),
    screen(
      "Building a close checklist",
      table(
        ["Area", "Example tasks"],
        [
          ["Transactions", "Enter all bills, invoices and receipts; clear uncategorised items; check cut-off"],
          ["Reconciliations", "Bank, credit cards, AR, AP, payroll liabilities, loans, fixed assets"],
          ["Adjustments", "Accruals, prepayments, deferred revenue, depreciation, inventory"],
          ["Review", "Balance sheet and P&L review, variance analysis"],
          ["Close", "Report pack, lock the period, file the documentation"],
        ],
      ),
      tip("Write it down once", "A checklist turns the close into a repeatable routine. Each month, tick tasks off, with who did them and when."),
    ),
    screen(
      "The close calendar",
      p("Tasks are scheduled by working day: WD−2 is two working days before month end; WD+3 is the third working day after."),
      table(
        ["Day", "Task", "Owner"],
        [
          ["WD−2", "Remind staff to submit receipts and approvals", "Maya"],
          ["WD+1", "Final bills, invoices and bank feeds entered", "Maya"],
          ["WD+2", "Bank, card and payroll reconciliations", "Maya"],
          ["WD+3", "Accruals, prepayments, depreciation and inventory", "Tom"],
          ["WD+4", "Review and variance analysis", "Tom"],
          ["WD+5", "Report pack sent to Grace; period locked", "Tom"],
        ],
      ),
    ),
    screen(
      "Who does what",
      terms(
        ["Preparer", "Does the task — e.g. Maya prepares the bank reconciliation."],
        ["Reviewer", "Checks it independently — e.g. Tom reviews and signs it."],
        ["Owner of the reports", "Grace receives the report pack and asks questions."],
        ["Everyone else", "Sales and operations staff submit receipts, approvals and information on time."],
      ),
      caution("Nobody should review their own work. Even in a two-person team, split preparing and reviewing."),
    ),
    mistakes(
      ["Closing from memory", "Use a written checklist every month."],
      ["No deadlines", "Without a calendar, the close drifts."],
      ["One person preparing and reviewing", "Split the roles."],
      ["Forgetting other teams", "Remind staff to submit receipts and approvals before month end."],
    ),
    check(
      1,
      q("What is the month-end close for?", ["Making the month's books complete and accurate", "Paying all bills", "Filing annual tax returns", "Hiring staff"], 0, "So reports can be trusted."),
      q("What does WD+3 mean?", ["The third working day after month end", "Three days before month end", "Wednesday", "Week 3"], 0, "Working days are counted from month end."),
      q("At Northwind, who reviews Maya's bank reconciliation?", ["Maya", "Tom", "Grace", "The bank"], 1, "The reviewer is independent of the preparer."),
      q("Which task belongs in the Adjustments area of the checklist?", ["Depreciation", "Bank reconciliation", "Locking the period", "Entering bills"], 0, "Accruals, prepayments, depreciation and inventory."),
      q("How long did Northwind's close used to take?", ["Nine working days", "Two working days", "One month", "One day"], 0, "And the numbers kept changing afterwards."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Build a calendar",
          ["A small business wants to close in four working days. Suggest what happens on WD+1 to WD+4."],
          ["WD+1: final transactions and bank feeds. WD+2: reconciliations. WD+3: adjustments and review. WD+4: report pack and lock the period."],
        ],
        [
          "Exercise 2 — Roles",
          ["In a business with one bookkeeper and an owner, who should prepare and who should review the bank reconciliation?"],
          ["The bookkeeper prepares it; the owner reviews and signs it."],
        ],
      ),
    ),
    summary(
      ["What the month-end close is for", "Building a close checklist", "Setting a close calendar in working days", "Preparer, reviewer and owner roles"],
      "Plan the close like a project: a checklist, a calendar and clear owners for every task.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Completing the Transactions",
      ["Before reconciling or adjusting anything, every transaction for the month must be in the books — in the right account and the right month."],
      ["Make sure every transaction is recorded", "Clear uncategorised items", "Apply cut-off for sales and purchases"],
    ),
    screen(
      "Making sure every transaction is recorded",
      bullets(
        "All sales invoices issued for work delivered this month.",
        "All supplier bills received and entered.",
        "All bank and card feeds imported up to the last day.",
        "Payroll, loan payments and direct debits recorded.",
        "Cash sales and petty cash entered.",
      ),
      tip("Ask, don't assume", "Maya emails the team on WD−2: “Any bills, contracts or purchases I should know about?” Many missing items live in someone's inbox."),
    ),
    screen(
      "Clearing uncategorised items",
      p("Software often parks unclear transactions in accounts such as Uncategorised expense, Ask my accountant or Suspense. Clear them before closing."),
      steps(
        ["List them", "Run a report of every item in these accounts."],
        ["Find the evidence", "Receipts, bills or a note from whoever spent the money."],
        ["Reclassify", "Move each one to the right account."],
        ["Fix the cause", "Add a bank rule, or ask staff to submit receipts on time."],
      ),
      table(
        ["Uncategorised item", "Evidence", "Reclassified to"],
        [
          ["Card payment $189 — “FABRICWORLD”", "Receipt for upholstery samples", "Showroom supplies"],
          ["Transfer $2,500 — “G. Lee”", "Grace's personal tax bill", "Owner's drawings"],
          ["Direct debit $79 — “DESIGNPRO”", "Monthly design software", "Software subscriptions"],
        ],
      ),
    ),
    screen(
      "Cut-off: sales",
      p("Cut-off means recording each transaction in the month it actually happened."),
      table(
        ["Situation", "Which month?"],
        [
          ["Sofa delivered March 31, invoiced April 2", "March sale — date the invoice correctly or accrue it"],
          ["Customer pays in March for a design project starting in April", "April revenue — a deposit (liability) in March"],
          ["Design work done March 28–31, billed in April", "March revenue — accrue it"],
        ],
      ),
    ),
    screen(
      "Cut-off: purchases",
      table(
        ["Situation", "Which month?"],
        [
          ["Chairs received March 30, supplier bill arrives April 5", "March purchase — accrue it (goods received not invoiced)"],
          ["Electricity used in March, bill arrives mid-April", "March expense — accrue it"],
          ["Lamps ordered in March, delivered in April", "April purchase"],
        ],
      ),
      caution("Cut-off errors move profit between months and make comparisons misleading."),
    ),
    screen(
      "Worked example: Northwind's March cut-off check",
      p("On WD+1, Maya compares the delivery log and the goods-received log with the invoices and bills:"),
      table(
        ["Found", "Action"],
        [
          ["Sofa delivered Mar 31, invoice dated Apr 2", "Re-date the invoice to March 31"],
          ["Chairs received Mar 30, no bill yet ($2,400)", "Accrue as goods received not invoiced"],
          ["Lamps ordered Mar 25, delivered Apr 3", "No March entry — April purchase"],
        ],
      ),
    ),
    mistakes(
      ["Closing with uncategorised items", "Clear them first."],
      ["Using the invoice date instead of the delivery date", "Cut-off follows when it happened."],
      ["Recording customer prepayments as revenue", "They're deposits until the work is done."],
      ["Ignoring goods received without bills", "Accrue them."],
    ),
    check(
      2,
      q("Which should be done before closing?", ["Clear items in Uncategorised expense", "Delete old invoices", "Change the chart of accounts", "Skip bank feeds"], 0, "Every item must be classified."),
      q("A $2,500 transfer was Grace's personal tax bill. Where does it go?", ["Owner's drawings", "Tax expense", "Revenue", "Software"], 0, "Personal costs are drawings."),
      q("A sofa is delivered March 31 and invoiced April 2. Which month gets the sale?", ["March", "April", "Either", "Neither"], 0, "Cut-off follows the delivery."),
      q("Chairs arrive March 30 but the bill comes April 5. What happens at March 31?", ["Accrue them as goods received not invoiced", "Nothing until the bill arrives", "Record them as April sales", "Delete the delivery"], 0, "The cost belongs to March."),
      q("What does cut-off mean?", ["Recording transactions in the month they happened", "Cutting costs", "Stopping credit", "Closing the bank account"], 0, "It keeps monthly profit accurate."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which month?",
          ["(a) Design work completed March 30, billed April 4. (b) Customer prepays in March for April delivery. (c) Office cleaning in March, bill dated April 1."],
          ["(a) March revenue — accrue it. (b) April revenue — a deposit in March. (c) March expense — accrue it."],
        ],
        [
          "Exercise 2 — Uncategorised items",
          ["A $65 card payment to “PARKCITY” is uncategorised. The receipt shows parking for a client visit. Where does it go?"],
          ["Travel or Parking expense. Consider a bank rule if it recurs."],
        ],
      ),
    ),
    summary(
      ["Making sure every transaction is recorded", "Clearing uncategorised items", "Sales cut-off", "Purchase cut-off", "Checking cut-off with delivery and receiving logs"],
      "The close starts with completeness: every transaction, in the right account and the right month.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Reconciliations",
      ["Reconciliations prove the balance sheet. Every significant balance should be agreed to outside evidence or a supporting schedule."],
      ["Reconcile bank and credit card accounts", "Reconcile accounts receivable and payable", "Reconcile payroll liabilities", "Reconcile loans and fixed assets"],
    ),
    screen(
      "Bank and credit card accounts",
      bullets(
        "Reconcile every bank, savings, card and payment-processor account to its statement.",
        "The adjusted book balance must agree with the adjusted statement balance.",
        "Follow up stale items — such as cheques uncleared for months.",
        "Save each reconciliation report with the close file.",
      ),
      note("Bank reconciliation is covered in detail in the Bank Reconciliation Fundamentals course."),
    ),
    screen(
      "Receivables and payables",
      table(
        ["Account", "Reconcile to", "Watch for"],
        [
          ["Accounts receivable", "The AR aging total", "Unapplied payments, old disputed balances, credit balances"],
          ["Accounts payable", "The AP aging total and key supplier statements", "Duplicate bills, missing credit notes, debit balances"],
        ],
      ),
      tip("Ledger = subledger", "If an aging total doesn't match its control account, something was probably posted directly to the control account without a customer or supplier."),
    ),
    screen(
      "Payroll liabilities",
      p("Payroll creates liabilities: tax withheld, retirement contributions and accrued wages. Each should clear when it's paid."),
      table(
        ["Account", "Balance should equal"],
        [
          ["Tax withheld payable", "This month's withholding not yet paid over"],
          ["Retirement contributions payable", "Contributions not yet sent to the fund"],
          ["Accrued wages", "Wages earned but not yet paid"],
        ],
      ),
      caution("A payroll liability that grows month after month usually means payments were missed or posted to the wrong account."),
    ),
    screen(
      "Loans and fixed assets",
      terms(
        ["Loans", "Agree the balance to the lender's statement; check interest and principal were split correctly."],
        ["Fixed assets", "Agree cost and accumulated depreciation to the fixed asset register; add new purchases and remove disposals."],
        ["Other balance sheet accounts", "Prepayments, accruals, deposits and deferred revenue each need a supporting schedule."],
      ),
    ),
    screen(
      "Worked example: Northwind's reconciliation status",
      table(
        ["Account", "Ledger", "Evidence", "Difference", "Status"],
        [
          ["Business checking", "$58,420", "Bank statement (adjusted)", "$0", "Reconciled"],
          ["Credit card", "$3,140", "Card statement", "$0", "Reconciled"],
          ["Accounts receivable", "$24,600", "AR aging $24,600", "$0", "Reconciled"],
          ["Accounts payable", "$17,850", "AP aging $18,350", "$500", "Investigate"],
          ["Tax withheld payable", "$2,960", "Payroll report", "$0", "Reconciled"],
        ],
      ),
      p("The $500 AP difference: a supplier credit note was entered as a journal to the AP control account, with no supplier. Maya reverses the journal and enters it as a supplier credit."),
    ),
    mistakes(
      ["Reconciling only the bank", "Every significant balance needs support."],
      ["Journals straight to control accounts", "They break the link with the subledger."],
      ["Ignoring growing payroll liabilities", "They signal missed payments."],
      ["No schedule behind prepayments or accruals", "Keep a schedule for each."],
    ),
    check(
      3,
      q("What should the AR control account equal?", ["The AR aging total", "Sales for the month", "Cash in the bank", "The AP total"], 0, "Control account and subledger must agree."),
      q("What is a loan balance reconciled to?", ["The lender's statement", "The bank fee schedule", "The sales report", "The budget"], 0, "The lender shows the true balance."),
      q("A payroll liability keeps growing. What does it suggest?", ["Missed or misposted payments", "Everything is fine", "Higher sales", "Lower wages"], 0, "Liabilities should clear when paid."),
      q("What caused Northwind's $500 AP difference?", ["A credit note posted as a journal to the control account", "A bank fee", "A missing sale", "Depreciation"], 0, "It bypassed the supplier subledger."),
      q("What supports the fixed asset balance?", ["The fixed asset register", "The AR aging", "A sales invoice", "A bank rule"], 0, "The register lists cost and depreciation."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Find the cause",
          ["AR control shows $31,200; the AR aging totals $30,450. What might cause the $750 difference?"],
          ["A journal posted directly to AR without a customer, or an invoice posted to the control account only. Find it and re-post through the customer's account."],
        ],
        [
          "Exercise 2 — Payroll liability",
          ["Tax withheld payable shows $8,880 at March 31. March withholding was $2,960 and the January and February payments of $2,960 each were never posted. What's wrong?"],
          ["The two payments were missed in the books (or not made). Check the bank and tax account; record the payments if made, or pay them urgently if not."],
        ],
      ),
    ),
    summary(
      ["Bank and card reconciliations", "AR and AP control accounts vs. agings", "Payroll liability reconciliations", "Loans and fixed assets", "Supporting schedules for other balances"],
      "Every balance sheet account should be backed by a statement, a report or a schedule that explains it.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Accruals and Adjustments",
      ["Adjusting entries put income and costs in the month they belong to. This module covers Northwind's March adjustments one by one."],
      ["Record accrued expenses and accrued income", "Amortise prepaid expenses", "Recognise deferred revenue", "Record depreciation", "Adjust inventory to the count"],
    ),
    screen(
      "Accrued expenses",
      p("Northwind used about $640 of electricity in March; the bill arrives in April."),
      journal([["Utilities", "$640", ""], ["Accrued expenses", "", "$640"]], "$640"),
      tip("Use reversing entries", "Set accruals to reverse on April 1. When the real bill is entered, it won't be double-counted."),
    ),
    screen(
      "Accrued income",
      p("Northwind's designers completed $1,800 of consultation work on March 28–31. It will be invoiced in April."),
      journal([["Accrued revenue (unbilled work)", "$1,800", ""], ["Design revenue", "", "$1,800"]], "$1,800"),
      caution("Only accrue revenue that has been earned and can be measured reliably."),
    ),
    screen(
      "Prepaid expenses",
      p("On January 1, Northwind paid $4,800 for a year of insurance. Each month uses $400."),
      journal([["Insurance expense", "$400", ""], ["Prepaid insurance", "", "$400"]], "$400"),
      table(
        ["Month", "Expense", "Prepaid balance"],
        [
          ["January", "$400", "$4,400"],
          ["February", "$400", "$4,000"],
          ["March", "$400", "$3,600"],
        ],
        { numeric: [1, 2] },
      ),
    ),
    screen(
      "Deferred revenue",
      p("On March 1, a hotel client prepaid $3,000 for six months of design support. Each month earns $500."),
      journal([["Deferred revenue", "$500", ""], ["Design revenue", "", "$500"]], "$500"),
      note("The remaining $2,500 stays as a liability: Northwind still owes five months of service."),
    ),
    screen(
      "Depreciation and inventory",
      p("Showroom fixtures cost $36,000 with a 5-year life and no residual value: $36,000 ÷ 60 months = $600 a month."),
      journal([["Depreciation expense", "$600", ""], ["Accumulated depreciation", "", "$600"]], "$600"),
      p("The March 31 stock count values furniture at $41,250; the books show $41,900. The $650 shortfall is written down:"),
      journal([["Cost of goods sold — inventory adjustment", "$650", ""], ["Inventory", "", "$650"]], "$650"),
      note("Large or repeated shortfalls should be investigated, not just adjusted."),
    ),
    screen(
      "Worked example: the effect on March profit",
      table(
        ["Adjustment", "Revenue", "Expenses"],
        [
          ["Accrued electricity", "", "+$640"],
          ["Accrued design revenue", "+$1,800", ""],
          ["Insurance used", "", "+$400"],
          ["Deferred revenue earned", "+$500", ""],
          ["Depreciation", "", "+$600"],
          ["Inventory write-down", "", "+$650"],
        ],
        { footer: ["Total", "+$2,300", "+$2,290"], numeric: [1, 2] },
      ),
      p("The adjustments raise March revenue by $2,300 and expenses by $2,290 — almost no net effect, but each line is now in the right month."),
    ),
    mistakes(
      ["Skipping accruals because the bill hasn't arrived", "Estimate and accrue."],
      ["Recording a full annual payment as one month's expense", "Spread it as a prepayment."],
      ["Recognising prepaid revenue upfront", "Earn it month by month."],
      ["Adjusting inventory without investigating", "Find out why stock is missing."],
    ),
    check(
      4,
      q("March electricity of $640 isn't billed until April. What's the March entry?", ["Debit Utilities, credit Accrued expenses", "Debit Cash, credit Utilities", "No entry", "Debit Accrued expenses, credit Utilities"], 0, "Accrue it in the month it was used."),
      q("$4,800 of insurance covers 12 months. What's the monthly expense?", ["$4,800", "$480", "$400", "$120"], 2, "$4,800 ÷ 12."),
      q("A client prepays $3,000 for six months of service. How much revenue is earned each month?", ["$3,000", "$500", "$600", "$250"], 1, "$3,000 ÷ 6."),
      q("Fixtures cost $36,000 with a 5-year life. What's monthly straight-line depreciation?", ["$600", "$7,200", "$360", "$1,200"], 0, "$36,000 ÷ 60."),
      q("The count shows $41,250 but the books show $41,900. What's the write-down?", ["$650", "$41,250", "$41,900", "$1,300"], 0, "$41,900 − $41,250."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Accruals",
          ["April: $520 of water used but not billed; $2,200 of design work done but not invoiced. Write the entries."],
          ["Dr Utilities $520 · Cr Accrued expenses $520.", "Dr Accrued revenue $2,200 · Cr Design revenue $2,200."],
        ],
        [
          "Exercise 2 — Prepayment",
          ["A $7,200 annual software licence is paid on April 1. What's April's entry after recording the payment as Prepaid software?"],
          ["Dr Software subscriptions $600 · Cr Prepaid software $600."],
        ],
      ),
    ),
    summary(
      ["Accrued expenses and accrued income", "Reversing entries", "Prepaid expenses", "Deferred revenue", "Depreciation", "Inventory adjustments to the count"],
      "Adjustments don't change cash — they put each dollar of income and cost in the month it belongs to.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Review and Reporting",
      ["With the books complete and adjusted, it's time to review them critically and report to the owner."],
      ["Review the balance sheet", "Review the profit and loss", "Analyse variances against last month and budget", "Prepare the month-end report pack"],
    ),
    screen(
      "Reviewing the balance sheet",
      bullets(
        "Every account reconciled or supported by a schedule.",
        "No balances that don't make sense — negative cash, negative inventory, an asset with a credit balance.",
        "Suspense, clearing and uncategorised accounts at zero.",
        "Owner's drawings and loans to or from the owner recorded correctly.",
        "Tax liabilities agree with returns and payments.",
      ),
      tip("Start with the balance sheet", "Errors often hide on the balance sheet. If it's right, the profit and loss is far more likely to be right too."),
    ),
    screen(
      "Reviewing the profit and loss",
      bullets(
        "Compare each line with last month and the same month last year.",
        "Check relationships: payroll taxes vs. wages, depreciation vs. fixed assets, interest vs. loans.",
        "Look for one-off items that need explaining.",
        "Check gross margin — has it moved unexpectedly?",
      ),
    ),
    screen(
      "Variance analysis",
      p("Northwind explains any variance against budget that is both over $1,000 and over 10%."),
      table(
        ["Line", "March", "Budget", "Variance", "Explain?"],
        [
          ["Sales", "$86,000", "$80,000", "+$6,000 (+7.5%)", "No — under 10%"],
          ["Cost of goods sold", "$49,000", "$44,800", "+$4,200 (+9.4%)", "No — under 10%"],
          ["Wages", "$18,200", "$17,500", "+$700 (+4.0%)", "No — under $1,000"],
          ["Software", "$2,150", "$600", "+$1,550 (+258%)", "Yes"],
        ],
      ),
      p("Software: Tom finds a $1,550 annual subscription expensed in one month. It's moved to Prepaid software and spread over 12 months."),
    ),
    screen(
      "Gross margin",
      example(
        [["Sales", "$86,000"], ["Cost of goods sold", "($49,000)"], ["Gross profit", "$37,000"]],
        ["Gross margin", "43.0%"],
      ),
      p("Budgeted margin was 44.0% ($35,200 ÷ $80,000). The 1-point drop came from a discounted clearance sale — worth mentioning to Grace even though no single line breached the threshold."),
    ),
    screen(
      "The month-end report pack",
      table(
        ["Section", "Contents"],
        [
          ["Summary", "Three to five key messages for the month"],
          ["Profit and loss", "This month vs. last month and budget"],
          ["Balance sheet", "With movements since last month"],
          ["Cash", "Cash position and the next few weeks' forecast"],
          ["AR and AP agings", "Who owes Northwind, and whom it owes"],
          ["Commentary", "Explanations for significant variances"],
        ],
      ),
      tip("Explain, don't describe", "“Software was over budget” describes. “A $1,550 annual subscription was expensed in one month; it's now spread over 12” explains."),
    ),
    mistakes(
      ["Reviewing only the P&L", "Start with the balance sheet."],
      ["Explaining every small change", "Use a threshold."],
      ["Vague commentary", "Name the cause and the amount."],
      ["Ignoring gross margin moves", "Small margin changes can be big in dollars."],
    ),
    check(
      5,
      q("Which is a red flag on the balance sheet review?", ["Negative inventory", "A reconciled bank account", "A zero suspense balance", "Supported prepayments"], 0, "It usually means a recording error."),
      q("Northwind explains variances that are:", ["Over $1,000 and over 10%", "Over $100", "Any change at all", "Over 50% only"], 0, "Both conditions must be met."),
      q("Why did Northwind's software cost exceed budget?", ["An annual subscription was expensed in one month", "Prices tripled", "A bank error", "New staff"], 0, "It should be spread as a prepayment."),
      q("What was Northwind's March gross margin?", ["43.0%", "44.0%", "57.0%", "37.0%"], 0, "$37,000 ÷ $86,000."),
      q("Which is the better commentary?", ["“Software was over budget”", "“A $1,550 annual subscription was expensed in one month; it's now spread over 12”", "“Various”", "“See the numbers”"], 1, "It explains the cause."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Apply the threshold",
          ["Using “over $1,000 and over 10%”, which need explaining? (a) Rent $6,000 vs $6,000; (b) Marketing $4,900 vs $3,500; (c) Freight $1,320 vs $1,100."],
          ["(a) No. (b) Yes — +$1,400 (+40%). (c) No — +$220 is under $1,000."],
        ],
        [
          "Exercise 2 — Margin",
          ["April sales $90,000 and cost of goods sold $51,300. What's the gross margin?"],
          ["Gross profit $38,700 ÷ $90,000 = 43.0%."],
        ],
      ),
    ),
    summary(
      ["Reviewing the balance sheet first", "Reviewing the profit and loss", "Variance analysis with a threshold", "Gross margin analysis", "Building a month-end report pack"],
      "Review critically, explain what matters, and give the owner a short, clear story of the month.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Closing the Period",
      ["The last step is locking the month and leaving a record of the close — and then making next month's close better."],
      ["Lock the period in software", "Document the close", "Measure and speed up the close over time"],
    ),
    screen(
      "Locking the period",
      p("Once the month is final, lock it so no one can change it by accident. QuickBooks Online calls this a closing date; Xero calls it a lock date."),
      bullets(
        "Set the lock date to the last day of the closed month.",
        "Protect it with a password or limit who can change it.",
        "Changes after locking should be rare, approved and recorded.",
      ),
      caution("If a locked month is reopened and changed, the reports already sent to the owner, lenders or tax advisers will no longer match the books."),
    ),
    screen(
      "Documenting the close",
      steps(
        ["Save the checklist", "With dates and initials for each task."],
        ["Save reconciliations", "Bank, card, AR, AP, payroll and loan reconciliations."],
        ["Save schedules", "Accruals, prepayments, deferred revenue and depreciation."],
        ["Save the report pack", "Exactly as sent to the owner."],
        ["Record open issues", "Anything to follow up next month."],
      ),
      note("Good documentation makes year-end and any audit much easier."),
    ),
    screen(
      "Measuring the close",
      table(
        ["Metric", "January", "February", "March"],
        [
          ["Working days to close", "9", "8", "6"],
          ["Adjustments after the pack was sent", "7", "5", "2"],
          ["Reconciliations done on time", "60%", "80%", "100%"],
        ],
      ),
      p("Northwind's close is getting faster and cleaner: fewer late adjustments means Grace can trust the first numbers she sees."),
    ),
    screen(
      "Speeding up the close",
      terms(
        ["Reconcile weekly", "Small, regular bank and card reconciliations make month-end quicker."],
        ["Automate", "Bank rules, recurring journals and reversing accruals."],
        ["Deadlines for others", "Staff submit receipts and approvals by WD−2."],
        ["Standard templates", "The same schedules and report pack each month."],
        ["Review the process", "After each close, note what slowed you down and fix one thing."],
      ),
      tip("Don't trade accuracy for speed", "A fast close is only useful if the numbers are right. Shorten the timeline by removing delays, not by skipping checks."),
    ),
    screen(
      "Worked example: Northwind's improvement plan",
      table(
        ["Problem in February", "Change for March", "Result"],
        [
          ["Waiting for receipts from staff", "WD−2 reminder and a receipt-capture app", "Receipts in by WD+1"],
          ["Bank reconciled only at month end", "Weekly bank reconciliation", "WD+2 task took one hour"],
          ["Accruals typed from scratch", "Recurring, auto-reversing journals", "Fewer errors"],
        ],
      ),
    ),
    mistakes(
      ["Leaving the period unlocked", "Lock it once the reports are final."],
      ["No record of the close", "Save the checklist, reconciliations and pack."],
      ["Measuring only speed", "Track late adjustments too."],
      ["Trying to fix everything at once", "Improve one thing each month."],
    ),
    check(
      6,
      q("What does locking a period do?", ["Prevents accidental changes to closed months", "Deletes transactions", "Files tax returns", "Pays bills"], 0, "It protects final numbers."),
      q("What does Xero call the period lock?", ["Closing date", "Lock date", "Freeze date", "Final date"], 1, "QuickBooks Online uses a closing date."),
      q("How many working days did Northwind's March close take?", ["9", "8", "6", "2"], 2, "Down from nine in January."),
      q("Which habit speeds up the close?", ["Reconciling weekly", "Skipping reviews", "Delaying receipts", "Reopening periods"], 0, "Regular reconciliations reduce month-end work."),
      q("What's the right way to shorten the close?", ["Skip checks", "Remove delays and automate routine steps", "Close before month end", "Ignore accruals"], 1, "Accuracy comes first."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Read the metrics",
          ["A team's close took 7, 7 and 7 days, with 6, 8 and 9 late adjustments. What does it show?"],
          ["Speed is flat and quality is getting worse — more numbers change after reporting. Focus on reconciliation and review quality before speed."],
        ],
        [
          "Exercise 2 — Plan an improvement",
          ["The bank reconciliation always takes a full day at month end. Suggest one change."],
          ["Reconcile weekly (or daily with bank feeds) so month end only covers the last few days."],
        ],
      ),
    ),
    summary(
      ["Locking the period in QuickBooks Online and Xero", "Documenting the close", "Measuring days to close and late adjustments", "Speeding up the close without losing accuracy", "Making one improvement each month"],
      "Close, lock, document — then make next month's close a little faster and a little cleaner.",
    ),
  ],
}

export default lessons
