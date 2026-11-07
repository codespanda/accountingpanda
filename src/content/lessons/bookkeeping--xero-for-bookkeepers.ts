import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Xero for Bookkeepers — lesson screens by module index (0 = Module 1).
// Menu names change between Xero releases, so steps are described by feature
// rather than exact clicks.
const lessons: CourseLessons = {
  0: [
    screen(
      "Navigating Xero",
      table(
        ["Area", "What you do there"],
        [
          ["Home dashboard", "Bank account balances, items to reconcile, invoices owed and bills to pay"],
          ["Sales", "Invoices, quotes, repeating invoices, credit notes and customers"],
          ["Purchases", "Bills, purchase orders, expenses and suppliers"],
          ["Accounting", "Bank accounts, reports, chart of accounts, manual journals and fixed assets"],
          ["Contacts", "Customers and suppliers"],
          ["Settings", "Organisation details, users, tax rates, financial settings"],
        ],
      ),
      note("Xero updates its layout regularly. If something has moved, use search or Xero Central (the help site) to find the feature by name."),
    ),
    screen(
      "Organisation settings and the chart of accounts",
      steps(
        ["Organisation details", "Legal and trading names, address, tax number."],
        ["Financial settings", "Financial year end, tax basis and lock dates."],
        ["Tax rates", "Check the default sales tax, GST or VAT rates for the country."],
        ["Chart of accounts", "Review Xero's default chart, add codes and tailor it; or import a prepared chart from a file."],
        ["Invoice settings", "Branding theme, payment terms and payment services."],
      ),
      tip("Codes and tax rates", "Each account in Xero has a code and a default tax rate. Getting the tax rate right here saves correcting every transaction later."),
    ),
    screen(
      "Contacts, items and users",
      terms(
        ["Contacts", "One record per customer or supplier, with email, address, tax number, default accounts and payment terms."],
        ["Products and services (items)", "Saved prices and descriptions for invoices and bills. Items can be tracked (quantities and cost managed by Xero) or untracked."],
        ["Users and roles", "Invite each person with the role and permissions they need. Invite the accountant with adviser access."],
      ),
      caution("Give each person their own login and the least access they need. Access to bank details and payments should be limited."),
    ),
    check(
      1,
      q("Where are financial year end and lock dates set?", ["Financial settings", "Contacts", "Invoices", "Bank rules"], 0, "They're in the organisation's financial settings."),
      q("What does each Xero account carry besides its name?", ["A code and default tax rate", "A customer list", "A password", "A due date"], 0, "Codes and tax rates drive coding."),
      q("What is a tracked inventory item?", ["An item whose quantity and cost Xero manages", "Any service", "A bank rule", "A contact"], 0, "Tracked items update stock and cost of sales."),
      q("What access should the external accountant have?", ["Their own login with adviser access", "The owner's login", "No access", "Read-only email"], 0, "Advisers get full accounting access under their own login."),
      q("Where can you look up a feature that has moved?", ["Xero Central or search", "The bank", "The tax office", "Nowhere"], 0, "Xero Central is the help site."),
    ),
  ],
  1: [
    screen(
      "Connecting bank feeds",
      steps(
        ["Add the bank account", "In Accounting → Bank accounts, add each bank and card account."],
        ["Connect the feed", "Authorise the bank feed through the bank's secure process."],
        ["Set the start date", "Choose the date the books start in Xero to avoid importing old transactions."],
        ["Import statements if needed", "Where no feed is available, import bank statement files."],
      ),
      note("Statement lines appear in Xero waiting to be reconciled. Until they're reconciled, they don't affect the accounts."),
    ),
    screen(
      "Match, create and transfer",
      table(
        ["Option", "Use it when", "Example"],
        [
          ["Match", "The transaction already exists in Xero", "Customer payment of an approved invoice"],
          ["Create", "Nothing exists yet", "Bank fee, card purchase without a bill"],
          ["Transfer", "Money moved between two of your own accounts", "Checking to savings; paying the business credit card"],
          ["Discuss", "You need to ask someone", "Leave a note for the owner about an unknown payment"],
        ],
      ),
      caution("If Xero suggests a match, check the amount and contact before you click OK. Creating a new transaction instead of matching duplicates it."),
    ),
    screen(
      "Bank rules and cash coding",
      terms(
        ["Bank rules", "Automatically suggest coding for statement lines that meet conditions, e.g. payee contains “Electric Co” → Utilities. Spend, receive and transfer rules are available."],
        ["Cash coding", "A spreadsheet-like screen for coding many unreconciled lines at once — fast for high volumes of simple transactions."],
      ),
      tip("Rules still need review", "Bank rules fill in the coding but you still confirm each line. Review rules regularly so they don't miscode new transactions."),
    ),
    check(
      2,
      q("A bank line is a customer's payment of an existing invoice. Which option?", ["Match", "Create", "Transfer", "Discuss"], 0, "Match links it to the existing invoice."),
      q("A monthly bank fee with no existing transaction. Which option?", ["Match", "Create", "Transfer", "Discuss"], 1, "Create records a new transaction."),
      q("Paying the business credit card from checking is reconciled as:", ["Create", "Transfer", "Match to an invoice", "Discuss"], 1, "It's a transfer between your own accounts."),
      q("What is cash coding for?", ["Coding many simple bank lines at once", "Paying bills", "Creating invoices", "Locking periods"], 0, "It speeds up high-volume reconciliation."),
      q("Do statement lines affect the accounts before they're reconciled?", ["Yes", "No", "Only deposits", "Only fees"], 1, "Only reconciled transactions affect the accounts."),
    ),
  ],
  2: [
    screen(
      "Creating and sending invoices",
      steps(
        ["Create the invoice", "Choose the contact, dates, reference and lines (item, description, quantity, price, account and tax rate)."],
        ["Approve", "Draft invoices don't affect the accounts; approved ones do."],
        ["Send", "Email it from Xero, with an online payment option if set up."],
      ),
      journal([["Accounts receivable", "$2,200", ""], ["Sales", "", "$2,000"], ["Sales tax", "", "$200"]], "$2,200"),
      p("That's the effect of an approved $2,000 invoice with $200 of tax."),
    ),
    screen(
      "Repeating invoices",
      p("For regular charges like retainers or subscriptions, set up a repeating invoice template with a schedule (e.g. monthly on the 1st)."),
      compare(
        ["Save as draft", "Xero creates the invoice as a draft for you to check and approve.", ["Safer when amounts vary"]],
        ["Approve and send", "Xero creates, approves and emails the invoice automatically.", ["Best for fixed amounts"]],
      ),
      tip("Review templates yearly", "Price changes are easy to forget on repeating invoices."),
    ),
    screen(
      "Receiving payments and credit notes",
      bullets(
        "Most payments are recorded by matching the bank statement line to the invoice during reconciliation.",
        "You can also record a payment on the invoice itself, then match the bank line to that payment.",
        "Part payments leave the balance open on the invoice.",
      ),
      h("Credit notes"),
      p("A credit note reduces what a customer owes. Allocate it to an invoice, or refund it. Don't void a paid or sent invoice when a credit note is the right tool."),
    ),
    check(
      3,
      q("Does a draft invoice affect the accounts?", ["Yes", "No — only approved invoices do", "Only if emailed", "Only at month-end"], 1, "Approval posts the invoice."),
      q("$2,000 plus $200 tax is invoiced. How much is credited to Sales?", ["$2,200", "$2,000", "$200", "$1,800"], 1, "Tax is credited separately."),
      q("Which is best for a fixed monthly retainer?", ["Repeating invoice", "Credit note", "Manual journal", "Bank rule"], 0, "Repeating invoices automate regular billing."),
      q("How are most customer payments recorded in Xero?", ["By matching the bank line to the invoice", "By a manual journal", "By deleting the invoice", "By a credit note"], 0, "Reconciliation matches payments to invoices."),
      q("What reduces what a customer owes?", ["A credit note", "A quote", "A purchase order", "A bank rule"], 0, "Credit notes reduce the receivable."),
    ),
  ],
  3: [
    screen(
      "Entering bills",
      bullets(
        "Enter bills manually, or send them to the organisation's bills email address so Xero creates drafts from the attachments.",
        "Check supplier, dates, reference, account codes and tax rates.",
        "Approve bills only after checking they're genuine and not duplicates.",
      ),
      journal([["Office supplies", "$300", ""], ["Purchase tax", "$30", ""], ["Accounts payable", "", "$330"]], "$330"),
    ),
    screen(
      "Paying bills and batch payments",
      steps(
        ["Select the bills", "Choose approved bills due for payment."],
        ["Create a batch payment", "Group them into one payment with a date and bank account."],
        ["Export the bank file", "Where your bank supports it, export a file to upload to online banking."],
        ["Reconcile", "Match the single bank line to the batch payment."],
      ),
      tip("One bank line, many bills", "A batch payment lets one bank statement line match many bills at once."),
    ),
    screen(
      "Expenses and purchase orders",
      terms(
        ["Employee expenses", "Staff submit receipts for costs they paid personally; once approved, the business reimburses them. Xero's expenses feature replaced the older expense claims tool."],
        ["Purchase orders", "Create a PO, send it to the supplier, then convert it to a bill when the bill arrives — the PO's lines carry across."],
      ),
      note("Feature names and availability depend on your Xero plan and region. Check Xero Central for current details."),
    ),
    check(
      4,
      q("What's a quick way to get supplier bills into Xero?", ["Forward them to the organisation's bills email address", "Retype them in Excel", "Bank rules", "Credit notes"], 0, "Xero creates draft bills from attachments."),
      q("When should a bill be approved?", ["After checking it's genuine and not a duplicate", "Immediately on receipt", "Never", "After it's paid"], 0, "Approval is a control step."),
      q("What does a batch payment let you do?", ["Match one bank line to many bills", "Create invoices", "Lock periods", "Run payroll"], 0, "Many bills, one payment."),
      q("What happens when a PO is converted to a bill?", ["Its lines carry across to the bill", "It's deleted with no record", "It becomes an invoice", "It's paid automatically"], 0, "Converting saves re-entry."),
      q("An employee pays for travel personally. How is it handled?", ["Through employee expenses, then reimbursed", "As sales", "As a transfer", "Ignored"], 0, "Expenses are approved and reimbursed."),
    ),
  ],
  4: [
    screen(
      "Tracking categories",
      p("Tracking categories tag transactions by department, location, project or similar — without adding accounts. Reports can then be filtered or split by category."),
      table(
        ["Category", "Options"],
        [
          ["Location", "Downtown store · Mall store · Online"],
          ["Department", "Sales · Operations · Admin"],
        ],
      ),
      note("Xero limits how many tracking categories can be active at once, so choose the dimensions that matter most."),
    ),
    screen(
      "Manual journals and fixed assets",
      p("Manual journals record adjustments: accruals, prepayments, reclassifications and corrections. They can be set to auto-reverse on a date."),
      journal([["Wages", "$1,800", ""], ["Accrued wages", "", "$1,800"]], "$1,800"),
      h("Fixed assets"),
      p("Register assets in Xero's fixed asset register with cost, purchase date, depreciation method and rate. Run depreciation each month or period; Xero posts the journal for you."),
    ),
    screen(
      "Lock dates",
      compare(
        ["Lock for non-advisers", "Stops most users changing transactions before this date; advisers can still make adjustments.", ["Set after each month's close"]],
        ["Lock for all users", "Stops everyone, including advisers, changing transactions before this date.", ["Set after year-end is finalised"]],
      ),
      caution("Changing data before a lock date alters reports already sent. Only remove a lock with good reason, and relock afterwards."),
    ),
    check(
      5,
      q("What do tracking categories do?", ["Tag transactions so reports can be split by department or location", "Create new bank accounts", "Pay bills", "Set tax rates"], 0, "They add a reporting dimension."),
      q("Which is best recorded as a manual journal?", ["An accrual for unpaid wages", "A customer invoice", "A supplier bill", "A bank fee"], 0, "Accruals have no other form."),
      q("What can a manual journal be set to do?", ["Auto-reverse on a date", "Email customers", "Pay suppliers", "Delete itself"], 0, "Auto-reversal suits accruals."),
      q("Who can still edit transactions before a lock date for non-advisers?", ["Advisers", "Everyone", "No one", "Customers"], 0, "The stricter all-users lock stops advisers too."),
      q("How is depreciation handled with Xero's fixed asset register?", ["Run depreciation and Xero posts the journal", "Enter each month by hand only", "It isn't possible", "Through bank rules"], 0, "The register calculates and posts depreciation."),
    ),
  ],
  5: [
    screen(
      "Profit and loss and balance sheet",
      bullets(
        "Run the Profit and Loss for the month with comparison periods.",
        "Run the Balance Sheet at month-end and check each balance against reconciliations and schedules.",
        "Filter or split reports by tracking category.",
        "Click into figures to see the transactions behind them.",
      ),
    ),
    screen(
      "Aged receivables and payables",
      compare(
        ["Aged Receivables", "Who owes the business, and how overdue it is.", ["Drive collections", "Should agree to AR on the balance sheet"]],
        ["Aged Payables", "Whom the business owes, and when it's due.", ["Plan payments", "Should agree to AP on the balance sheet"]],
      ),
      tip("Unreconciled lines distort reports", "Before running month-end reports, reconcile all bank statement lines — unreconciled items mean missing income and expenses."),
    ),
    screen(
      "Custom layouts and owner reports",
      steps(
        ["Customise", "Edit the layout: group accounts, rename sections, add comparison columns."],
        ["Save as custom", "Save it so it can be run the same way each month."],
        ["Add commentary", "Explain key variances in plain language."],
        ["Publish and share", "Share the month's reports as a pack with the owner."],
      ),
      note("Report editing and publishing options vary by plan and change over time — check Xero Central for current features."),
    ),
    check(
      6,
      q("What should be done before running month-end reports in Xero?", ["Reconcile all bank statement lines", "Delete drafts", "Change tax rates", "Remove lock dates"], 0, "Unreconciled lines mean missing transactions."),
      q("What should the Aged Receivables total agree to?", ["AR on the balance sheet", "Total sales", "Cash", "AP"], 0, "Sub-ledger and control account should agree."),
      q("How can a P&L be shown by store?", ["Filter or split by a tracking category", "Create a new organisation", "Use a bank rule", "It can't"], 0, "Tracking categories enable this."),
      q("Why save a custom report layout?", ["To run the same report each month", "To delete accounts", "To lock the period", "To pay bills"], 0, "Saves rebuilding it."),
      q("What's useful in an owner report pack?", ["Reports plus short commentary on variances", "Only raw bank data", "Only invoices", "Nothing"], 0, "Commentary explains the numbers."),
    ),
  ],
}

export default lessons
