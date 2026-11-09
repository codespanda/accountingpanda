import { fq } from "@/lib/finalTest"

// Final test bank for QuickBooks for Bookkeepers — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("What are QBO's two navigation layouts?", "A business view and an accountant view", ["A desktop view and a mobile view", "A light view and a dark view", "A tax view and a payroll view"], "Features are the same; only navigation differs."),
  fq("Which setting tab holds Pine & Co's default net 14 terms for customers?", "Sales", ["Expenses", "Company", "Advanced"], "Sales settings hold invoice defaults."),
  fq("What controls where an account appears in QBO reports?", "Its account type and detail type", ["Its colour", "The date it was created", "The user who made it"], "Types drive reporting."),
  fq("How should accounts Pine & Co won't use be handled?", "Make them inactive", ["Delete their history", "Rename them to random names", "Leave them active and unused"], "Inactive accounts disappear from lists."),
  fq("Mulch bought for each job is set up as which kind of item?", "A non-inventory item", ["An inventory item", "A service", "A bundle of services"], "It's bought per job, not stocked."),
  fq("What access should Pine & Co's field supervisor have?", "A limited role for estimates and customers", ["Primary admin", "Full banking and payroll", "The owner's login"], "Least access needed."),

  // Module 2
  fq("Pine & Co's bank feed import starts from which date?", "July 1, the day its books start in QBO", ["The day the bank account opened", "January 1 of last year", "Any date"], "Importing earlier causes duplicates."),
  fq("Which tab holds lines you've chosen not to record, such as duplicates?", "Excluded", ["For review", "Categorized", "Reconciled"], "Excluded lines don't post to the books."),
  fq("Leo pays the $1,250 business card bill from checking. How is it recorded in the checking feed?", "As a transfer to the credit card account", ["As an expense", "As income", "As owner's drawings"], "Moving money between own accounts."),
  fq("A transaction was entered manually and also imported. What should you do with the imported line?", "Match it to the manual entry, or exclude it", ["Add it again", "Delete the manual entry and the line", "Record it as income"], "Avoid duplicates."),
  fq("What condition does Pine & Co's fuel rule use?", "Description contains “SHELL” or “BP”", ["Amount over $1,000", "Any card transaction", "Transactions on Mondays"], "Rules match descriptions or amounts."),
  fq("Why review bank rules regularly?", "An over-broad rule miscodes every future transaction", ["Rules expire weekly", "Banks delete rules", "Rules slow QBO down"], "Narrow rules stay accurate."),

  // Module 3
  fq("What was Payments to deposit called in older versions of QBO?", "Undeposited funds", ["Bank clearing", "Pending income", "Unapplied cash"], "The name changed; the purpose didn't."),
  fq("What was the total of Leo's Friday bank deposit?", "$2,830", ["$1,200", "$2,180", "$3,030"], "$650 + $1,200 + $980."),
  fq("How was Oakview School's $6,000 project invoiced?", "In two stages of $3,000", ["As one $6,000 sales receipt", "As twelve monthly invoices", "As a credit memo"], "An accepted estimate converted in stages."),
  fq("Oakview's $3,000 bank transfer was received directly to checking. How is the feed line handled?", "Matched to that payment", ["Added as new income", "Excluded", "Recorded as a transfer"], "The payment already exists in QBO."),
  fq("Pine & Co credits Riverside $120 for a missed visit. Which form?", "A credit memo", ["A refund receipt", "A sales receipt", "A bank deposit"], "Apply it to an open or future invoice."),
  fq("Which form records a card payment for a one-off mow?", "A sales receipt", ["An invoice", "A bill", "An estimate"], "Paid on the spot."),

  // Module 4
  fq("Green Valley's plants for the Oakview project are coded to:", "Plants and materials (cost of sales)", ["Owner's drawings", "Office supplies", "Accounts receivable"], "Direct costs of the project."),
  fq("What does marking a bill line billable to Oakview School allow?", "Adding it to Oakview's next invoice", ["Paying it twice", "Deleting it later", "Skipping approval"], "Billable expenses can be recharged."),
  fq("How do field staff capture receipts?", "With the QuickBooks mobile app or by email forwarding", ["By fax", "By posting paper to the bank", "They don't"], "QBO suggests matches to bank lines."),
  fq("How often should missing receipts be chased?", "Weekly", ["Once a year", "Never", "Only at audit"], "Waiting for month end makes it harder."),
  fq("A $3,200 mower paid by cheque is coded to:", "Equipment — mowers (a fixed asset)", ["Plants and materials", "Fuel", "Owner's drawings"], "Long-lasting equipment is an asset."),
  fq("When is a vendor credit applied?", "When paying the vendor's bills", ["When invoicing customers", "At year end only", "Never"], "It reduces the payment."),

  // Module 5
  fq("Pine & Co's equipment cost $15,000 with a 5-year life. What's monthly depreciation?", "$250", ["$300", "$3,000", "$150"], "$15,000 ÷ 60."),
  fq("Where does a QBO closing date get set?", "Advanced settings", ["Sales settings", "The bank feed", "The customer list"], "Along with a password."),
  fq("What shows what changed, when and by whom in QBO?", "The audit log", ["The A/R aging", "The bank feed", "The product list"], "It records every change."),
  fq("An Uncategorized expense balance usually comes from:", "Bank lines added without a proper account", ["Correct bills", "Customer payments", "Depreciation"], "Recode each item."),
  fq("Who should help clear an Opening balance equity balance?", "The accountant", ["A customer", "The bank", "A supplier"], "It usually needs reclassifying."),
  fq("A $9,600 trailer has a 4-year life. What's monthly depreciation?", "$200", ["$240", "$400", "$800"], "$9,600 ÷ 48."),

  // Module 6
  fq("What lets you see a report on both accrual and cash basis?", "Switching the accounting basis on the report", ["Creating a second company", "Changing the bank", "Deleting transactions"], "Run both views."),
  fq("What must be switched on and used consistently to report profit by service line?", "Classes", ["Bank rules", "Recurring invoices", "The closing date"], "E.g. Maintenance and Projects."),
  fq("The A/P aging totals $8,450 but the balance sheet shows $8,950. What's the likely cause?", "A journal entry to AP with no vendor", ["A paid bill", "A vendor credit", "A bank rule"], "Re-post it through a vendor."),
  fq("Which report shows whom Pine & Co owes, grouped by days overdue?", "A/P Aging Summary", ["A/R Aging Summary", "Profit and Loss", "Audit log"], "Used to plan payments."),
  fq("What does a management pack need besides reports?", "A short commentary explaining what changed", ["The audit log", "Every bank statement", "Staff payslips"], "Explain the numbers."),
  fq("Features like report scheduling depend on:", "The QBO plan and whether you use QuickBooks Online Accountant", ["The bank used", "The number of customers", "The time of day"], "Check what your plan includes."),
]
