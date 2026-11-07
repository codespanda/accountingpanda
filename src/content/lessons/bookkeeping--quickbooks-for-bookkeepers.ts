import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// QuickBooks for Bookkeepers — lesson screens by module index (0 = Module 1).
// Menu names change between QuickBooks Online releases, so steps are described
// by feature rather than exact clicks.
const lessons: CourseLessons = {
  0: [
    screen(
      "Navigating QuickBooks Online",
      p("QuickBooks Online (QBO) runs in the browser. Most bookkeeping happens in a few places:"),
      table(
        ["Area", "What you do there"],
        [
          ["+ New button", "Create invoices, bills, expenses, journal entries and more"],
          ["Left menu", "Banking (bank feeds), Sales, Expenses, Reports and Payroll"],
          ["Settings (gear icon)", "Company settings, chart of accounts, users, products and services, recurring transactions, reconcile"],
          ["Search", "Find transactions by amount, number, name or date"],
        ],
      ),
      note("Intuit updates QBO's layout regularly. If a menu has moved, use the search bar or QuickBooks help to find the feature by name."),
    ),
    screen(
      "Company settings and the chart of accounts",
      steps(
        ["Company", "Legal name, address, tax ID and industry."],
        ["Sales", "Invoice template, default payment terms, and whether to use products, services and discounts."],
        ["Expenses", "Purchase orders, bills and default terms."],
        ["Advanced", "Accounting method (accrual or cash), first month of the fiscal year, account numbers and closing date."],
        ["Chart of accounts", "Review the default accounts, turn on account numbers and tailor the list."],
      ),
      tip("Check the accounting method", "Reports default to accrual or cash basis based on settings. Make sure it matches how the accountant prepares the tax return."),
    ),
    screen(
      "Customers, vendors, products and users",
      terms(
        ["Customers", "Name, email, billing address, terms and tax status."],
        ["Vendors", "Name, address, terms, tax ID and whether they're tracked for 1099 reporting (US)."],
        ["Products and services", "Items on invoices, each linked to an income account (and expense or inventory account if bought)."],
        ["Users", "Invite users with roles that limit what they can see and do. Invite the external accountant as an accountant user."],
      ),
      caution("Give each person their own login. Shared logins make the audit log useless, because you can't tell who changed what."),
    ),
    check(
      1,
      q("Where do you usually create a new invoice or bill in QBO?", ["The + New button", "The Reports menu", "The audit log", "Company settings"], 0, "The + New button opens the transaction forms."),
      q("Where is the accounting method (cash or accrual) set?", ["Advanced settings", "Customer list", "Bank feeds", "Invoice template"], 0, "It's in the advanced company settings."),
      q("What does a product or service item link to?", ["An income account", "A bank account only", "A user role", "A tax return"], 0, "Items post to income (and possibly expense or inventory) accounts."),
      q("How should the external accountant access the company?", ["With their own accountant user invite", "With the owner's password", "Through a shared login", "They shouldn't"], 0, "Separate logins keep the audit trail clear."),
      q("A menu isn't where the course says. What should you do?", ["Use search or QuickBooks help to find it by name", "Give up", "Reinstall", "Create a new company"], 0, "Layouts change; features stay."),
    ),
  ],
  1: [
    screen(
      "Connecting bank and card accounts",
      steps(
        ["Connect the account", "In Banking, connect each bank and card account using the bank's secure sign-in."],
        ["Choose the QBO account", "Link it to the matching bank or credit card account in the chart."],
        ["Pick the start date", "Import from the date the books start, to avoid duplicating transactions already entered."],
      ),
      caution("Importing too far back is the most common cause of duplicate transactions. Check the opening balance and start date before importing."),
    ),
    screen(
      "Categorising and matching",
      compare(
        ["Match", "The transaction already exists in QBO (e.g. a customer payment or bill payment). Matching links them — nothing new is created.", ["Use for payments of invoices and bills", "Avoids duplicates"]],
        ["Categorise (add)", "Nothing exists yet. You choose the payee and account, and QBO creates the transaction.", ["Use for bank fees, card purchases", "Attach the receipt"]],
      ),
      p("Imported transactions wait in the For review tab until you match, categorise, record as a transfer or exclude them."),
      tip("Match before you add", "If QBO suggests a match, check it. Adding instead of matching duplicates the income or expense."),
    ),
    screen(
      "Bank rules, transfers and duplicates",
      terms(
        ["Bank rules", "Automatically categorise transactions that meet conditions, e.g. description contains “Google Workspace” → Software subscriptions."],
        ["Transfers", "Money moving between two of your own accounts (e.g. checking to savings, or paying the credit card). Record as a transfer — it isn't income or an expense."],
        ["Duplicates", "Exclude bank feed lines that duplicate a transaction already recorded and matched."],
      ),
      note("Review rules every few months. A rule that's too broad quietly miscodes every future transaction."),
    ),
    check(
      2,
      q("A bank deposit is a customer's payment of an existing invoice. What should you do?", ["Match it to the payment or invoice", "Add it as new income", "Exclude it", "Record it as a transfer"], 0, "Matching avoids counting the income twice."),
      q("What causes most duplicate transactions after connecting a feed?", ["Importing from too early a date", "Using bank rules", "Matching", "Users"], 0, "Old transactions already in the books get imported again."),
      q("Paying the business credit card from checking is recorded as:", ["An expense", "Income", "A transfer", "Equity"], 2, "Both accounts are yours."),
      q("What do bank rules do?", ["Categorise matching transactions automatically", "Reconcile the account", "Pay bills", "Change bank fees"], 0, "Rules apply coding based on conditions."),
      q("When should you exclude a bank feed line?", ["When it duplicates a recorded transaction", "For all fees", "For deposits", "Never"], 0, "Exclude true duplicates only."),
    ),
  ],
  2: [
    screen(
      "Invoices and sales receipts",
      compare(
        ["Invoice", "Customer pays later. Creates a receivable.", ["Terms and due date", "Shows in AR aging"]],
        ["Sales receipt", "Customer pays at the time of sale. No receivable.", ["Cash, card or transfer on the spot", "Deposit to bank or undeposited funds"]],
      ),
      journal([["Accounts receivable", "$1,200", ""], ["Services income", "", "$1,200"]], "$1,200"),
      p("That's the entry QBO creates behind an invoice for $1,200 of services."),
    ),
    screen(
      "Receiving payments and undeposited funds",
      p("When a customer pays an invoice, use Receive payment and apply it to the invoice. Choose where the money went:"),
      table(
        ["Deposit to", "When to use"],
        [
          ["The bank account", "The payment reaches the bank on its own (e.g. a single transfer)"],
          ["Undeposited funds (Payments to deposit)", "Several payments will be banked together as one deposit"],
        ],
      ),
      p("Then use a Bank deposit to group the payments, so the total matches the single deposit on the bank statement."),
      caution("Payments left sitting in undeposited funds make the bank look short and the AR look paid. Clear the account regularly."),
    ),
    screen(
      "Credit memos and refunds",
      terms(
        ["Credit memo", "Reduces what a customer owes — for returns, errors or discounts. Apply it to an open or future invoice."],
        ["Refund receipt", "Pays money back to a customer — for example, refunding a sales receipt."],
      ),
      tip("Don't delete sent invoices", "If an invoice was wrong after being sent, issue a credit memo (and a new invoice if needed). The audit trail stays intact."),
    ),
    check(
      3,
      q("A customer pays at the time of sale. Which form fits?", ["Invoice", "Sales receipt", "Bill", "Credit memo"], 1, "Sales receipts record immediate payment."),
      q("Several cheques are banked together. Where should each payment go first?", ["Directly to the bank", "Undeposited funds, then a bank deposit", "Owner's equity", "Sales"], 1, "Grouping matches the single bank deposit."),
      q("What problem do old items in undeposited funds cause?", ["Bank looks short", "Higher sales", "Lower expenses", "Nothing"], 0, "Money recorded as received isn't in the bank account in QBO."),
      q("Which form reduces what a customer owes?", ["Credit memo", "Sales receipt", "Bank deposit", "Estimate"], 0, "Credit memos reduce the receivable."),
      q("An invoice already sent has the wrong price. What should you do?", ["Delete it", "Issue a credit memo and a corrected invoice", "Change the amount silently", "Ignore it"], 1, "Keeps a clear audit trail."),
    ),
  ],
  3: [
    screen(
      "Bills and expenses",
      compare(
        ["Bill", "Pay later. Creates accounts payable.", ["Enter, approve, then pay", "Shows in AP aging"]],
        ["Expense / Check", "Paid at the time of purchase, by card, cash or cheque.", ["No payable", "Attach the receipt"]],
      ),
      p("Each line is coded to an account (category) or an item. You can also mark lines as billable to a customer."),
    ),
    screen(
      "Paying bills",
      steps(
        ["Open Pay bills", "See unpaid bills by due date."],
        ["Choose payment account and date", "The bank or card account the money comes from."],
        ["Select the bills", "Including any discounts or vendor credits to apply."],
        ["Save", "QBO records the bill payment and clears the payable."],
        ["Match in the bank feed", "When the payment appears, match it — don't add it again."],
      ),
      caution("Recording a bill payment as a new Expense leaves the bill open and doubles the cost."),
    ),
    screen(
      "Receipts and vendor credits",
      terms(
        ["Receipts", "Upload receipts with the mobile app, by email forwarding or drag-and-drop. QBO reads the details and suggests a match to a bank transaction."],
        ["Vendor credit", "A credit from a supplier for returns or overcharges. Apply it when paying the vendor's next bill."],
      ),
      h("Vendor credit for $150"),
      journal([["Accounts payable", "$150", ""], ["Supplies", "", "$150"]], "$150"),
    ),
    check(
      4,
      q("Which form creates accounts payable?", ["Expense", "Bill", "Check", "Sales receipt"], 1, "Bills are paid later and create payables."),
      q("A bill payment shows up in the bank feed. What should you do?", ["Add it as an expense", "Match it to the bill payment", "Exclude the bill", "Create a transfer"], 1, "Matching avoids double-counting."),
      q("A card purchase paid at the time of sale is recorded as:", ["A bill", "An expense", "An invoice", "A deposit"], 1, "Paid immediately — no payable."),
      q("How is a supplier credit for returns recorded?", ["Vendor credit", "Credit memo", "Sales receipt", "Refund receipt"], 0, "Vendor credits reduce what you owe the supplier."),
      q("What's one way to capture receipts in QBO?", ["The mobile app", "Fax only", "Bank rules", "The audit log"], 0, "Receipts can be uploaded via the app, email or browser."),
    ),
  ],
  4: [
    screen(
      "Reconciling bank and card accounts",
      steps(
        ["Open Reconcile", "Choose the account."],
        ["Enter the statement details", "Statement ending date and ending balance."],
        ["Tick cleared items", "Tick each transaction that appears on the statement."],
        ["Reach a zero difference", "When the difference is $0.00, finish."],
        ["Save the report", "QBO keeps a reconciliation report for each period."],
      ),
      caution("Never use a forced adjustment to make the difference zero without finding the cause. It hides errors."),
    ),
    screen(
      "Journal entries",
      p("Use journal entries for items no other form handles: accruals, depreciation, reclassifications and corrections."),
      h("Monthly depreciation of $250"),
      journal([["Depreciation expense", "$250", ""], ["Accumulated depreciation", "", "$250"]], "$250"),
      tip("Recurring and reversing", "Save regular entries as recurring transactions. For accruals, create the reversal on the first day of the next month."),
    ),
    screen(
      "Fixing errors and closing the books",
      table(
        ["Problem", "Fix"],
        [
          ["Income counted twice", "Bank deposit added as income and also matched to an invoice — delete the duplicate"],
          ["Uncategorized expense balance", "Recode each item to the right account"],
          ["Undeposited funds piling up", "Group payments into bank deposits or apply them correctly"],
          ["Opening balance equity not zero", "Ask the accountant — usually from setup balances that need reclassifying"],
        ],
      ),
      h("Closing the books"),
      p("In advanced settings, set a closing date and password. Changes before that date then need the password and are tracked in the audit log."),
    ),
    check(
      5,
      q("What do you enter to start a reconciliation?", ["Statement ending date and balance", "Customer list", "Invoice number", "Tax rate"], 0, "QBO compares against the statement figures."),
      q("The difference isn't zero. What should you avoid?", ["Finding the cause", "A forced adjustment without investigation", "Checking dates", "Looking for duplicates"], 1, "Forced adjustments hide errors."),
      q("Which item needs a journal entry?", ["Monthly depreciation", "A customer invoice", "A bill", "A sales receipt"], 0, "Depreciation has no other form."),
      q("Income appears twice. What's a likely cause?", ["A deposit added as income and also matched to an invoice", "Bank rules", "Closing date", "Reconciling"], 0, "Adding and matching duplicates income."),
      q("What does setting a closing date do?", ["Protects transactions before that date", "Deletes old data", "Files taxes", "Ends the subscription"], 0, "It locks closed periods behind a password."),
    ),
  ],
  5: [
    screen(
      "Profit and loss and balance sheet",
      bullets(
        "Run the Profit and Loss for the month, with a comparison column for last month or last year.",
        "Run the Balance Sheet at month-end and check each balance against your reconciliations.",
        "Switch between accrual and cash basis to see both views.",
        "Click any number to drill down to the transactions behind it.",
      ),
    ),
    screen(
      "AR and AP aging",
      compare(
        ["A/R Aging Summary", "Who owes the business, grouped by days overdue.", ["Chase overdue customers", "Must equal AR on the balance sheet"]],
        ["A/P Aging Summary", "Whom the business owes, grouped by days overdue.", ["Plan payments", "Must equal AP on the balance sheet"]],
      ),
      tip("Check the totals", "If an aging total doesn't match its balance sheet account, look for journal entries posted directly to AR or AP without a customer or vendor."),
    ),
    screen(
      "Customising, saving and owner reports",
      steps(
        ["Customise", "Change the date range, columns, filters and accounting basis."],
        ["Save it", "Save the customised report so you can rerun it each month."],
        ["Schedule it", "Some plans let you email saved reports on a schedule."],
        ["Build a management pack", "Combine the P&L, balance sheet and agings with a short commentary for the owner."],
      ),
      note("Features such as management reports and report scheduling depend on the QuickBooks plan and whether you use QuickBooks Online Accountant."),
    ),
    check(
      6,
      q("How do you see the transactions behind a report figure?", ["Click the number to drill down", "Export to PDF", "Run payroll", "Reconcile"], 0, "Report figures link to their transactions."),
      q("What should the A/R aging total equal?", ["AR on the balance sheet", "Total sales", "Cash", "AP"], 0, "The aging and the control account should agree."),
      q("Why save a customised report?", ["To rerun it each month without rebuilding it", "To delete data", "To change tax", "To lock the period"], 0, "Saved reports save time."),
      q("What could cause AP aging to differ from AP on the balance sheet?", ["A journal entry to AP with no vendor", "A paid bill", "A vendor credit", "Bank rules"], 0, "Entries without a vendor don't appear in the aging."),
      q("Which is a useful owner report pack?", ["P&L, balance sheet, agings and commentary", "Only the audit log", "Only invoices", "Only bank feeds"], 0, "Gives a full monthly picture."),
    ),
  ],
}

export default lessons
