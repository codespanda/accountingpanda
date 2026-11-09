import { fq } from "@/lib/finalTest"

// Final test bank for Month-End Close Process — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("Who receives Northwind's month-end report pack?", "Grace, the owner", ["Maya, the bookkeeper", "The bank", "Northwind's suppliers"], "Grace reviews the reports and asks questions."),
  fq("On which working day does Maya remind staff to submit receipts and approvals?", "WD−2", ["WD+1", "WD+3", "WD+5"], "Before month end."),
  fq("Which area of the checklist includes locking the period?", "Close", ["Transactions", "Reconciliations", "Adjustments"], "Along with the report pack and documentation."),
  fq("What is the role of a reviewer in the close?", "To check the preparer's work independently", ["To do the task themselves", "To approve their own work", "To send invoices"], "Nobody reviews their own work."),
  fq("Why did Northwind's owner lose trust in the reports?", "The numbers kept changing after she had seen them", ["The reports were in the wrong font", "The bank closed", "There were no customers"], "Late adjustments undermine trust."),
  fq("On which working day are Northwind's accruals, depreciation and inventory adjustments done?", "WD+3", ["WD−2", "WD+1", "WD+5"], "After reconciliations on WD+2."),

  // Module 2
  fq("A $189 card payment to “FABRICWORLD” was for upholstery samples. Where does it go?", "Showroom supplies", ["Owner's drawings", "Software subscriptions", "Revenue"], "The receipt shows what it was."),
  fq("A $79 direct debit to “DESIGNPRO” is for monthly design software. Where does it go?", "Software subscriptions", ["Owner's drawings", "Showroom supplies", "Rent"], "A bank rule can code it automatically."),
  fq("What's the last step when clearing uncategorised items?", "Fix the cause, e.g. add a bank rule", ["Delete the items", "Leave them for next month", "Move them to suspense"], "Prevent them recurring."),
  fq("A customer pays in March for a design project starting in April. How is it treated in March?", "As a customer deposit (liability)", ["As March revenue", "As an expense", "As owner's capital"], "It's earned in April."),
  fq("Lamps ordered March 25 arrive April 3. Which month records the purchase?", "April", ["March", "Both months", "Neither month"], "Goods are recorded when received."),
  fq("Which two logs does Maya use to check cut-off?", "The delivery log and the goods-received log", ["The sales budget and the bank statement", "The staff roster and the tax return", "The website analytics and the price list"], "Compare them with invoices and bills."),

  // Module 3
  fq("What does the AP control account reconcile to?", "The AP aging total and key supplier statements", ["The bank statement", "The sales report", "The payroll report"], "Subledger and supplier evidence."),
  fq("Which AR item is a warning sign during reconciliation?", "Unapplied payments", ["Invoices paid on time", "Current balances", "Customers with no balance"], "They make balances look higher than they are."),
  fq("What should Accrued wages equal at month end?", "Wages earned but not yet paid", ["Total annual wages", "Wages paid this month", "Tax withheld"], "It's a liability for unpaid wages."),
  fq("Besides the balance, what does a loan reconciliation check?", "That interest and principal were split correctly", ["That sales were recorded", "That inventory was counted", "That customers paid"], "Repayments contain both."),
  fq("Which accounts need a supporting schedule?", "Prepayments, accruals, deposits and deferred revenue", ["Only cash", "Only sales", "None"], "Every balance should be explained."),
  fq("How did Maya fix the $500 AP difference?", "Reversed the journal and entered it as a supplier credit", ["Deleted the supplier", "Wrote off $500", "Left it for next month"], "Re-post through the subledger."),

  // Module 4
  fq("When should March accruals reverse?", "On April 1", ["On March 31", "At year end", "Never"], "So the real bill isn't double-counted."),
  fq("What was Northwind's prepaid insurance balance at March 31?", "$3,600", ["$4,800", "$4,000", "$400"], "Three months of $400 used."),
  fq("How much of the hotel client's $3,000 prepayment remained deferred after March?", "$2,500", ["$3,000", "$500", "$0"], "Five months of service still owed."),
  fq("Northwind's $1,800 of unbilled March design work is recorded as:", "Accrued revenue and design revenue", ["A customer deposit", "Deferred revenue", "Owner's capital"], "It's earned but not yet invoiced."),
  fq("How did Northwind's March adjustments affect revenue in total?", "Increased it by $2,300", ["Decreased it by $2,300", "No change", "Increased it by $10"], "$1,800 accrued + $500 deferred revenue earned."),
  fq("Which account is credited for the inventory shortfall?", "Inventory", ["Cost of goods sold", "Cash", "Revenue"], "The asset is written down."),

  // Module 5
  fq("Why start the review with the balance sheet?", "Errors often hide there; if it's right, the P&L is more likely to be right", ["It's shorter", "Owners only read balance sheets", "The P&L isn't important"], "Balance sheet errors flow into profit."),
  fq("Which relationship check belongs in a P&L review?", "Payroll taxes compared with wages", ["Rent compared with sales tax", "Inventory compared with owner's drawings", "Cash compared with depreciation"], "Related lines should move together."),
  fq("Northwind's sales were $6,000 over budget. Why didn't they need an explanation?", "The variance was under 10%", ["Sales are never explained", "It was under $1,000", "Budgets don't include sales"], "+7.5% missed the 10% test."),
  fq("What was Northwind's budgeted gross margin?", "44.0%", ["43.0%", "56.0%", "40.0%"], "$35,200 ÷ $80,000."),
  fq("What caused Northwind's 1-point gross margin drop?", "A discounted clearance sale", ["A bank error", "Higher rent", "Depreciation"], "Worth mentioning even below the threshold."),
  fq("What should the summary section of a report pack contain?", "Three to five key messages for the month", ["Every transaction", "The chart of accounts", "Staff timesheets"], "Lead with what matters."),

  // Module 6
  fq("What does QuickBooks Online call the period lock?", "A closing date", ["A lock date", "A freeze date", "A year end"], "Xero calls it a lock date."),
  fq("What happens to reports already sent if a locked month is changed?", "They no longer match the books", ["They update automatically", "Nothing happens", "They're deleted"], "Changes after locking must be rare and approved."),
  fq("How many adjustments were made after the March pack was sent?", "2", ["7", "5", "0"], "Down from 7 in January."),
  fq("How did Northwind get receipts in by WD+1?", "A WD−2 reminder and a receipt-capture app", ["By skipping receipts", "By closing later", "By hiring more staff"], "Removing a delay, not a check."),
  fq("What should be recorded as part of the close documentation?", "Open issues to follow up next month", ["Staff birthdays", "Website traffic", "Supplier marketing emails"], "Nothing should be forgotten."),
  fq("Which two metrics show whether the close is improving?", "Working days to close and adjustments after reporting", ["Number of emails and meetings", "Office hours and coffee", "Sales and marketing spend"], "Speed and quality together."),
]
