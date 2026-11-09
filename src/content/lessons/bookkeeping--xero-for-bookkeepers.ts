import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
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

// Xero for Bookkeepers — lesson screens by module index (0 = Module 1).
// The course follows Saltbush Design Co, a Sydney design studio registered
// for Australian GST (10%). Menus change between Xero releases, so steps are
// described by feature rather than exact clicks.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Getting Started",
      ["Xero is a cloud accounting system used widely in Australia, New Zealand and the UK. In this module you'll set up Saltbush Design Co's organisation so everything that follows is coded correctly."],
      ["Navigate Xero", "Set up organisation and financial settings", "Prepare the chart of accounts with codes and tax rates", "Set up contacts and items", "Give users the right roles"],
    ),
    screen(
      "Meet Saltbush Design Co",
      p("Saltbush Design Co is a Sydney studio run by Mia. It designs brands and websites for small businesses, and is registered for GST at 10%."),
      p("You're moving Saltbush into Xero from July 1, the start of the Australian financial year."),
      note("Xero updates its layout regularly. If something has moved, use search or Xero Central (the help site) to find the feature by name."),
    ),
    screen(
      "Navigating Xero",
      table(
        ["Area", "What you do there"],
        [
          ["Home dashboard", "Bank balances, items to reconcile, invoices owed and bills to pay"],
          ["Sales", "Invoices, quotes, repeating invoices, credit notes and customers"],
          ["Purchases", "Bills, purchase orders, expenses and suppliers"],
          ["Accounting / Reporting", "Bank accounts, reports, chart of accounts, manual journals, fixed assets"],
          ["Contacts", "Customers and suppliers"],
          ["Settings", "Organisation details, users, tax rates, financial settings"],
        ],
      ),
    ),
    screen(
      "Organisation and financial settings",
      steps(
        ["Organisation details", "Legal and trading names, address and ABN."],
        ["Financial settings", "Financial year end (30 June for Saltbush), GST registration, GST accounting basis and lock dates."],
        ["Tax rates", "Check the default rates — e.g. GST on Income and GST on Expenses at 10%, and GST Free."],
        ["Invoice settings", "Branding theme, payment terms and online payment options."],
      ),
      tip("Get GST right first", "Each account and item carries a default tax rate. Setting these correctly now saves correcting hundreds of transactions later."),
    ),
    screen(
      "Chart of accounts — codes and tax rates",
      p("Every Xero account has a code, a name, a type and a default tax rate."),
      table(
        ["Code", "Name", "Type", "Default tax rate"],
        [
          ["200", "Design income", "Revenue", "GST on Income"],
          ["310", "Freelancer costs", "Direct costs", "GST on Expenses"],
          ["461", "Software subscriptions", "Expense", "GST on Expenses"],
          ["404", "Bank fees", "Expense", "GST Free Expenses"],
          ["720", "Computer equipment", "Fixed asset", "GST on Expenses"],
        ],
      ),
      p("Review Xero's default chart, tailor it, or import a prepared chart from a file."),
    ),
    screen(
      "Contacts and items",
      terms(
        ["Contacts", "One record per customer or supplier, with email, address, ABN, default accounts and payment terms. Saltbush's customers pay within 14 days."],
        ["Products and services (items)", "Saved prices and descriptions — e.g. “Logo package — $2,000”. Items can be tracked (stock quantities managed by Xero) or untracked; a design studio uses untracked items."],
      ),
    ),
    screen(
      "Users and roles",
      table(
        ["Person", "Access"],
        [
          ["Mia (owner)", "Full access"],
          ["You (bookkeeper)", "Standard access with bank reconciliation"],
          ["Studio manager", "Invoice-only — creates and sends invoices"],
          ["Saltbush's accountant", "Adviser access"],
        ],
      ),
      caution("Give each person their own login and the least access they need. Access to bank details and payments should be limited."),
    ),
    mistakes(
      ["Wrong financial year end", "Australian businesses usually use 30 June."],
      ["Wrong default tax rates", "Every transaction inherits them."],
      ["Shared logins", "One login per person."],
      ["Giving everyone full access", "Use roles."],
    ),
    check(
      1,
      q("Where are financial year end and lock dates set?", ["Financial settings", "Contacts", "Invoices", "Bank rules"], 0, "In the organisation's financial settings."),
      q("What does each Xero account carry besides its name?", ["A code, a type and a default tax rate", "A customer list", "A password", "A due date"], 0, "Codes and tax rates drive coding."),
      q("What is a tracked inventory item?", ["An item whose quantity and cost Xero manages", "Any service", "A bank rule", "A contact"], 0, "Tracked items update stock and cost of sales."),
      q("What access should Saltbush's accountant have?", ["Adviser access with their own login", "Mia's login", "No access", "Invoice-only"], 0, "Advisers get full accounting access."),
      q("What is Saltbush's financial year end?", ["30 June", "31 December", "31 March", "30 September"], 0, "The Australian financial year."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Set the tax rate",
          ["What default tax rate suits (a) Design income, (b) Bank fees, (c) Software subscriptions bought from an Australian supplier?"],
          ["(a) GST on Income. (b) GST Free Expenses. (c) GST on Expenses."],
        ],
        [
          "Exercise 2 — Choose a role",
          ["The studio manager should send invoices but not see bank balances. Which role?"],
          ["Invoice-only access."],
        ],
      ),
    ),
    summary(
      ["Navigating Xero", "Organisation and financial settings", "Account codes, types and default tax rates", "Contacts and items", "User roles"],
      "In Xero, defaults do a lot of the work. Set account types and tax rates carefully and every transaction is coded better.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Bank Reconciliation",
      ["In Xero, bank reconciliation is daily work: each statement line is matched or coded. This module covers bank feeds, the reconcile options, bank rules and cash coding."],
      ["Connect bank feeds", "Reconcile with match, create, transfer and discuss", "Create bank rules", "Use cash coding for high volumes"],
    ),
    screen(
      "Connecting bank feeds",
      steps(
        ["Add the bank account", "In Bank accounts, add each bank and card account."],
        ["Connect the feed", "Authorise the feed through the bank's secure process."],
        ["Set the start date", "Saltbush starts from July 1 to avoid importing old transactions."],
        ["Import statements if needed", "Where no feed exists, import statement files."],
      ),
      note("Statement lines don't affect the accounts until they're reconciled."),
    ),
    screen(
      "Match, create, transfer, discuss",
      table(
        ["Option", "Use it when", "Saltbush example"],
        [
          ["Match", "The transaction already exists in Xero", "$3,300 from Harbour Bistro matched to its invoice"],
          ["Create", "Nothing exists yet", "$45 bank fee"],
          ["Transfer", "Money moved between two of Saltbush's own accounts", "$2,000 to the savings account"],
          ["Discuss", "You need to ask someone", "An unknown $120 card payment — note for Mia"],
        ],
      ),
      caution("If Xero suggests a match, check the amount and contact before clicking OK. Creating instead of matching duplicates the transaction."),
    ),
    screen(
      "Bank rules",
      p("Bank rules suggest coding for statement lines that meet conditions. Xero has spend, receive and transfer rules."),
      table(
        ["Rule", "Condition", "Coding"],
        [
          ["Adobe", "Payee contains “ADOBE”", "461 Software subscriptions, GST on Expenses"],
          ["Bank fee", "Description contains “ACCOUNT FEE”", "404 Bank fees, GST Free Expenses"],
          ["Savings", "Description contains “TFR TO SAVINGS”", "Transfer to savings account"],
        ],
      ),
      tip("Rules still need review", "Rules fill in the coding but you still confirm each line. Review rules regularly so they don't miscode new transactions."),
    ),
    screen(
      "Cash coding",
      p("Cash coding shows many unreconciled lines in a spreadsheet-like screen, so you can code them in bulk."),
      bullets(
        "Useful for high volumes of simple transactions, such as many small card purchases.",
        "Requires the right user permissions.",
        "Check the tax rate column carefully — it's easy to code a whole batch with the wrong GST.",
      ),
    ),
    screen(
      "Worked example: Saltbush's first week",
      table(
        ["Statement line", "Option", "Result"],
        [
          ["+$3,300 Harbour Bistro", "Match", "Invoice INV-0001 marked paid"],
          ["−$54.99 ADOBE", "Rule → Create", "Software subscriptions"],
          ["−$45 ACCOUNT FEE", "Rule → Create", "Bank fees"],
          ["−$2,000 TFR TO SAVINGS", "Transfer", "Savings account increases"],
          ["−$120 unknown card payment", "Discuss", "Note left for Mia"],
        ],
      ),
    ),
    mistakes(
      ["Creating instead of matching", "It duplicates income or expenses."],
      ["Coding transfers as income or expenses", "Use Transfer."],
      ["Wrong GST in cash coding", "Check the tax column."],
      ["Leaving lines unreconciled", "They're missing from the reports."],
    ),
    check(
      2,
      q("A bank line is a customer's payment of an existing invoice. Which option?", ["Match", "Create", "Transfer", "Discuss"], 0, "Match links it to the invoice."),
      q("A monthly bank fee with no existing transaction. Which option?", ["Create", "Match", "Transfer", "Discuss"], 0, "Create records a new transaction."),
      q("Paying the business credit card from checking is reconciled as:", ["A transfer", "Create", "A match to an invoice", "Discuss"], 0, "Both accounts belong to the business."),
      q("What is cash coding for?", ["Coding many simple bank lines at once", "Paying bills", "Creating invoices", "Locking periods"], 0, "It speeds up high volumes."),
      q("Do statement lines affect the accounts before they're reconciled?", ["No", "Yes", "Only deposits", "Only fees"], 0, "Only reconciled transactions post."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Choose the option",
          ["(a) $1,650 from Coastline Gym, which has an open $1,650 invoice. (b) $22 parking with no record. (c) $500 from savings back to checking."],
          ["(a) Match. (b) Create — Parking/Travel, GST on Expenses. (c) Transfer."],
        ],
        [
          "Exercise 2 — Write a rule",
          ["Saltbush pays “CANVA” every month. Write a bank rule."],
          ["Spend rule: if payee contains “CANVA”, code to 461 Software subscriptions with GST on Expenses (or GST Free if the supplier doesn't charge Australian GST)."],
        ],
      ),
    ),
    summary(
      ["Connecting bank feeds and choosing the start date", "Match, create, transfer and discuss", "Bank rules", "Cash coding", "Reconciling a week of statement lines"],
      "Reconcile little and often: match what exists, create what doesn't, and check the GST on every line.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Sales",
      ["Saltbush bills clients for projects and monthly retainers. This module covers invoices, repeating invoices, receiving payments and credit notes in Xero."],
      ["Create and send invoices", "Set up repeating invoices", "Receive payments", "Issue credit notes"],
    ),
    screen(
      "Creating and sending invoices",
      steps(
        ["Create the invoice", "Contact, dates, reference and lines (item, description, quantity, price, account and tax rate)."],
        ["Approve", "Draft invoices don't affect the accounts; approved ones do."],
        ["Send", "Email it from Xero, with an online payment option if set up."],
      ),
      p("A $3,000 logo and brand package for Harbour Bistro, plus 10% GST:"),
      journal([["Accounts receivable", "$3,300", ""], ["Design income", "", "$3,000"], ["GST", "", "$300"]], "$3,300"),
    ),
    screen(
      "Tax-inclusive or tax-exclusive",
      compare(
        ["Tax exclusive", "Prices are entered before GST; Xero adds GST on top.", ["$3,000 + $300 GST = $3,300"]],
        ["Tax inclusive", "Prices already include GST; Xero works out the GST inside them.", ["$1,650 includes $150 GST"]],
      ),
      note("Use the setting that matches how the price was agreed with the client."),
    ),
    screen(
      "Repeating invoices",
      p("Coastline Gym pays a $1,650 (GST inclusive) monthly website retainer. A repeating invoice template creates it on the 1st of every month."),
      compare(
        ["Save as draft", "Xero creates the invoice as a draft to check first.", ["Safer when amounts vary"]],
        ["Approve and send", "Xero creates, approves and emails it automatically.", ["Best for fixed amounts like the retainer"]],
      ),
      tip("Review templates yearly", "Price changes are easy to forget on repeating invoices."),
    ),
    screen(
      "Receiving payments",
      bullets(
        "Most payments are recorded by matching the bank statement line to the invoice during reconciliation.",
        "You can also record a payment on the invoice, then match the bank line to that payment.",
        "Part payments leave the balance open on the invoice.",
      ),
      p("Harbour Bistro pays $3,300 — the bank line is matched to INV-0001, which is marked paid."),
    ),
    screen(
      "Credit notes and quotes",
      terms(
        ["Credit note", "Reduces what a customer owes — e.g. $330 (incl. GST) for a cancelled revision round. Allocate it to an invoice, or refund it."],
        ["Quote", "A proposal that can be converted into an invoice once accepted."],
      ),
      caution("Don't void a paid or sent invoice when a credit note is the right tool — the audit trail should show both."),
    ),
    mistakes(
      ["Leaving invoices in draft", "Drafts don't affect the accounts."],
      ["Choosing the wrong tax setting", "Inclusive vs. exclusive changes the GST."],
      ["Out-of-date repeating templates", "Review prices yearly."],
      ["Voiding instead of crediting", "Use credit notes."],
    ),
    check(
      3,
      q("Does a draft invoice affect the accounts?", ["No — only approved invoices do", "Yes", "Only if emailed", "Only at month end"], 0, "Approval posts the invoice."),
      q("$3,000 plus 10% GST is invoiced. How much is credited to Design income?", ["$3,000", "$3,300", "$300", "$2,700"], 0, "GST is credited separately."),
      q("Which suits Coastline Gym's fixed monthly retainer?", ["A repeating invoice", "A credit note", "A manual journal", "A bank rule"], 0, "Repeating invoices automate regular billing."),
      q("How are most customer payments recorded in Xero?", ["By matching the bank line to the invoice", "By a manual journal", "By deleting the invoice", "By a credit note"], 0, "Reconciliation does the work."),
      q("What reduces what a customer owes?", ["A credit note", "A quote", "A purchase order", "A bank rule"], 0, "Allocate it or refund it."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — GST",
          ["An invoice is entered tax inclusive at $2,200. How much is GST and how much is income?"],
          ["GST = $2,200 ÷ 11 = $200. Income = $2,000."],
        ],
        [
          "Exercise 2 — Credit note",
          ["Harbour Bistro is credited $330 including GST. Write the effect."],
          ["Dr Design income $300 · Dr GST $30 · Cr Accounts receivable $330."],
        ],
      ),
    ),
    summary(
      ["Creating, approving and sending invoices", "Tax-inclusive vs. tax-exclusive pricing", "Repeating invoices", "Receiving payments through reconciliation", "Credit notes and quotes"],
      "Approve invoices to post them, choose the right GST setting, and let reconciliation record the payments.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Purchases",
      ["Saltbush pays freelancers, printers and software suppliers. This module covers bills, batch payments, expense claims and purchase orders in Xero."],
      ["Enter bills, including from email", "Pay bills with batch payments", "Handle staff expenses", "Use purchase orders"],
    ),
    screen(
      "Entering bills",
      bullets(
        "Enter bills manually, or forward them to the organisation's bills email address so Xero creates drafts from the attachments.",
        "Check supplier, dates, reference, account codes and tax rates.",
        "Approve bills only after checking they're genuine and not duplicates.",
      ),
      p("A $440 printing bill (GST inclusive) from Inkwell Print:"),
      journal([["Printing", "$400", ""], ["GST", "$40", ""], ["Accounts payable", "", "$440"]], "$440"),
    ),
    screen(
      "Batch payments",
      steps(
        ["Select the bills", "Approved bills due for payment."],
        ["Create a batch payment", "Group them into one payment with a date and bank account."],
        ["Export the bank file", "Where the bank supports it, upload it to online banking."],
        ["Reconcile", "Match the single bank line to the batch payment."],
      ),
      table(
        ["Supplier", "Amount"],
        [
          ["Inkwell Print", "$440"],
          ["Fern Freelance (illustration)", "$1,210"],
          ["Studio rent — Harbour Lofts", "$880"],
        ],
        { footer: ["Batch payment", "$2,530"], numeric: [1] },
      ),
    ),
    screen(
      "Staff expenses",
      p("When staff pay for business costs themselves, they submit a claim with the receipt; once approved, Saltbush reimburses them. Xero's expenses feature replaced the older expense claims tool."),
      p("A designer pays $66 for parking at a client shoot (GST inclusive):"),
      journal([["Travel and parking", "$60", ""], ["GST", "$6", ""], ["Employee reimbursements payable", "", "$66"]], "$66"),
      note("Feature names and availability depend on the Xero plan and region. Check Xero Central for current details."),
    ),
    screen(
      "Purchase orders",
      steps(
        ["Create a PO", "Saltbush orders 200 printed brochures for a client from Inkwell."],
        ["Send it", "Email the PO to the supplier."],
        ["Convert to a bill", "When Inkwell's bill arrives, convert the PO — its lines carry across."],
        ["Check", "Compare the bill with the PO before approving."],
      ),
    ),
    mistakes(
      ["Approving bills without checking for duplicates", "Check supplier and reference."],
      ["Paying bills one by one", "Use batch payments to match one bank line."],
      ["Recording staff costs as company card spend", "Use expense claims for reimbursements."],
      ["Retyping PO lines into bills", "Convert the PO."],
    ),
    check(
      4,
      q("What's a quick way to get supplier bills into Xero?", ["Forward them to the organisation's bills email address", "Retype them in a spreadsheet", "Use bank rules", "Create credit notes"], 0, "Xero creates draft bills from attachments."),
      q("When should a bill be approved?", ["After checking it's genuine and not a duplicate", "Immediately on receipt", "Never", "After it's paid"], 0, "Approval is a control step."),
      q("What does a batch payment let you do?", ["Match one bank line to many bills", "Create invoices", "Lock periods", "Run payroll"], 0, "Many bills, one payment."),
      q("What happens when a PO is converted to a bill?", ["Its lines carry across to the bill", "It's deleted with no record", "It becomes an invoice", "It's paid automatically"], 0, "Converting saves retyping."),
      q("A designer pays for parking personally. How is it handled?", ["Through a staff expense claim, then reimbursed", "As sales", "As a transfer", "Ignored"], 0, "Expenses are approved and reimbursed."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Bill with GST",
          ["A $1,210 freelancer bill includes GST. Split it."],
          ["GST = $1,210 ÷ 11 = $110. Freelancer costs = $1,100."],
        ],
        [
          "Exercise 2 — Batch total",
          ["Bills of $330, $1,045 and $715 are paid together. What should the batch payment total?"],
          ["$2,090 — matching the single bank line."],
        ],
      ),
    ),
    summary(
      ["Entering bills manually and by email", "Approving bills", "Batch payments", "Staff expense claims", "Purchase orders converted to bills"],
      "Get bills in quickly, check them before approving, and pay them in batches that reconcile in one line.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Tracking and Adjustments",
      ["Beyond day-to-day transactions, Xero handles reporting dimensions, adjustments, fixed assets and period locks. This module covers all four."],
      ["Use tracking categories", "Record manual journals, including auto-reversing ones", "Manage fixed assets and depreciation", "Set lock dates"],
    ),
    screen(
      "Tracking categories",
      p("Tracking categories tag transactions by department, location, project or similar — without adding accounts. Saltbush tracks by service line."),
      table(
        ["Category", "Options"],
        [["Service line", "Branding · Web · Print"]],
      ),
      p("Reports can then show profit for each service line."),
      note("Xero limits how many tracking categories can be active at once, so choose the dimensions that matter most."),
    ),
    screen(
      "Manual journals",
      p("Manual journals record adjustments: accruals, prepayments, reclassifications and corrections. They can be set to auto-reverse on a date."),
      p("June's freelancer work of $1,800 hasn't been billed by June 30:"),
      journal([["Freelancer costs", "$1,800", ""], ["Accrued expenses", "", "$1,800"]], "$1,800"),
      tip("Auto-reverse", "Set it to reverse on July 1. When the freelancer's bill arrives in July, the cost isn't counted twice."),
    ),
    screen(
      "Fixed assets",
      p("Register assets in Xero's fixed asset register with cost, purchase date, depreciation method and rate, then run depreciation each period — Xero posts the journal."),
      p("Saltbush's computers cost $7,200 (excluding GST) with a 3-year life: $7,200 ÷ 36 = $200 a month."),
      journal([["Depreciation", "$200", ""], ["Accumulated depreciation — computers", "", "$200"]], "$200"),
    ),
    screen(
      "Lock dates",
      compare(
        ["Lock for all users except advisers", "Stops most users changing transactions before this date; advisers can still make adjustments.", ["Set after each month's close"]],
        ["Lock for all users", "Stops everyone, including advisers, changing transactions before this date.", ["Set after year end is finalised"]],
      ),
      caution("Changing data before a lock date alters reports already sent. Only remove a lock with good reason, and relock afterwards."),
    ),
    screen(
      "Find and recode",
      p("If transactions were coded to the wrong account or tracking option, Xero's find and recode tool can move many of them at once — e.g. moving all Canva payments from Office supplies to Software subscriptions."),
      caution("Recoding changes past reports. Don't recode into a locked period without the accountant's agreement."),
    ),
    mistakes(
      ["Too many tracking options", "Pick the dimensions that matter."],
      ["Accruals that never reverse", "Use auto-reverse."],
      ["Running depreciation by hand", "Use the fixed asset register."],
      ["Leaving periods unlocked", "Set lock dates after each close."],
    ),
    check(
      5,
      q("What do tracking categories do?", ["Tag transactions so reports can be split by department, location or service", "Create new bank accounts", "Pay bills", "Set tax rates"], 0, "They add a reporting dimension."),
      q("Which is best recorded as a manual journal?", ["An accrual for unbilled freelancer work", "A customer invoice", "A supplier bill", "A bank fee"], 0, "Accruals have no other form."),
      q("What can a manual journal be set to do?", ["Auto-reverse on a date", "Email customers", "Pay suppliers", "Delete itself"], 0, "Auto-reversal suits accruals."),
      q("Who can still edit transactions before a lock date set for all users except advisers?", ["Advisers", "Everyone", "No one", "Customers"], 0, "The all-users lock stops advisers too."),
      q("How is depreciation handled with Xero's fixed asset register?", ["Run depreciation and Xero posts the journal", "Only by hand each month", "It isn't possible", "Through bank rules"], 0, "The register calculates and posts it."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Depreciation",
          ["A $4,800 camera has a 2-year life. What's monthly depreciation?"],
          ["$4,800 ÷ 24 = $200."],
        ],
        [
          "Exercise 2 — Tracking",
          ["Mia wants to know whether web projects are more profitable than branding. What setup is needed?"],
          ["Tag all income and direct costs with the Service line tracking category (Web, Branding, Print), then run the P&L split by that category."],
        ],
      ),
    ),
    summary(
      ["Tracking categories", "Manual journals and auto-reversal", "The fixed asset register and depreciation", "The two kinds of lock date", "Find and recode"],
      "Use tracking for extra detail, journals for adjustments, and lock dates to protect finished periods.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reports",
      ["This module covers Xero's key reports, the aged receivables and payables, customising layouts and building a monthly pack for Mia."],
      ["Run the profit and loss and balance sheet", "Use aged receivables and payables", "Customise and save report layouts", "Build a management report pack"],
    ),
    screen(
      "Profit and loss and balance sheet",
      bullets(
        "Run the Profit and Loss for the month with comparison periods.",
        "Run the Balance Sheet at month end and check each balance against reconciliations and schedules.",
        "Filter or split reports by tracking category.",
        "Click into figures to see the transactions behind them.",
      ),
    ),
    screen(
      "Aged receivables and payables",
      compare(
        ["Aged Receivables", "Who owes Saltbush, and how overdue it is.", ["Drive collections", "Should agree to AR on the balance sheet"]],
        ["Aged Payables", "Whom Saltbush owes, and when it's due.", ["Plan payments", "Should agree to AP on the balance sheet"]],
      ),
      tip("Reconcile first", "Before running month-end reports, reconcile all bank statement lines — unreconciled items mean missing income and expenses."),
    ),
    screen(
      "GST reporting",
      p("Because Saltbush is registered for GST, it reports GST to the ATO on its activity statement (BAS). Xero's activity statement report draws on the GST coded on each transaction."),
      bullets(
        "GST on sales and GST on purchases come from the tax rates on invoices, bills and bank transactions.",
        "Wrong tax rates mean a wrong BAS — another reason to set defaults carefully.",
        "Review the GST reconciliation before lodging.",
      ),
      note("BAS lodgement rules and due dates are set by the ATO. Check the ATO's current guidance or ask the registered tax or BAS agent."),
    ),
    screen(
      "Custom layouts and owner reports",
      steps(
        ["Customise", "Edit the layout: group accounts, rename sections, add comparison columns."],
        ["Save as custom", "So it can be run the same way each month."],
        ["Add commentary", "Explain key variances in plain language."],
        ["Publish and share", "Share the month's reports as a pack with Mia."],
      ),
      table(
        ["Report", "Mia's question"],
        [
          ["P&L by service line", "Which services earn the most?"],
          ["Balance sheet", "How much cash do we have, and what do we owe?"],
          ["Aged receivables", "Who should we chase?"],
          ["Aged payables", "What's due soon?"],
        ],
      ),
    ),
    mistakes(
      ["Reporting with unreconciled lines", "Reconcile first."],
      ["Ignoring aged report mismatches", "Totals should agree to the balance sheet."],
      ["Lodging GST without reviewing tax codes", "Check before lodging."],
      ["Rebuilding layouts every month", "Save custom layouts."],
    ),
    check(
      6,
      q("What should be done before running month-end reports in Xero?", ["Reconcile all bank statement lines", "Delete drafts", "Change tax rates", "Remove lock dates"], 0, "Unreconciled lines mean missing transactions."),
      q("What should the Aged Receivables total agree to?", ["AR on the balance sheet", "Total sales", "Cash", "AP"], 0, "Subledger and control account agree."),
      q("How can Mia see profit for each service line?", ["Split the P&L by the tracking category", "Create a new organisation", "Use a bank rule", "It can't be done"], 0, "Tracking categories enable this."),
      q("Why save a custom report layout?", ["To run the same report each month", "To delete accounts", "To lock the period", "To pay bills"], 0, "Saves rebuilding it."),
      q("Where does Xero's activity statement get its GST figures from?", ["The tax rates coded on transactions", "The bank balance", "The chart of accounts names", "The owner's estimate"], 0, "Correct tax rates mean a correct BAS."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Mismatch",
          ["Aged Payables totals $6,200 but AP on the balance sheet is $6,640. What do you check?"],
          ["Look for a manual journal posted to Accounts payable without a contact, or bills with errors. Re-post the item through a supplier bill or credit."],
        ],
        [
          "Exercise 2 — GST check",
          ["Before lodging, you see a $1,100 Adobe bank transaction coded “GST Free”. What's the issue?"],
          ["If the supplier charged Australian GST, the $100 GST credit is missing. Check the receipt and recode to GST on Expenses if GST was charged."],
        ],
      ),
    ),
    summary(
      ["Profit and loss and balance sheet with drill-down", "Aged receivables and payables", "GST and the activity statement", "Custom layouts and a monthly pack for the owner"],
      "Reconcile first, report clearly, and let correct tax codes flow through to the BAS.",
    ),
  ],
}

export default lessons
