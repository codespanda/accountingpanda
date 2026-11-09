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

// QuickBooks for Bookkeepers — lesson screens by module index (0 = Module 1).
// The course follows Pine & Co Landscaping as it moves its books into
// QuickBooks Online (QBO). Menus change between QBO releases, so steps are
// described by feature rather than exact clicks.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Getting Started",
      ["QuickBooks Online is one of the most widely used small-business accounting systems. In this module you'll set up Pine & Co Landscaping's company file the right way from day one."],
      ["Navigate QuickBooks Online", "Set up company settings", "Prepare the chart of accounts", "Set up customers, vendors and products", "Give users the right access"],
    ),
    screen(
      "Meet Pine & Co Landscaping",
      p("Pine & Co designs and maintains gardens for homes and businesses. Its owner, Leo, has kept spreadsheets until now. You're moving the books into QuickBooks Online from July 1."),
      note("Intuit updates QuickBooks Online's layout regularly. If a menu has moved, use the search bar or QuickBooks help to find the feature by name."),
    ),
    screen(
      "Navigating QuickBooks Online",
      table(
        ["Area", "What you do there"],
        [
          ["+ New button", "Create invoices, bills, expenses, journal entries and more"],
          ["Left menu", "Banking, Sales, Expenses, Reports and Payroll"],
          ["Settings (gear icon)", "Company settings, chart of accounts, users, products and services, recurring transactions, reconcile"],
          ["Search", "Find transactions by amount, number, name or date"],
        ],
      ),
      tip("Two views", "QBO offers a business view and an accountant view with different menu layouts. Features are the same — only the navigation differs."),
    ),
    screen(
      "Company settings",
      steps(
        ["Company", "Legal name, address, tax ID and industry."],
        ["Sales", "Invoice template, default terms (Pine & Co uses net 14), and products and services options."],
        ["Expenses", "Bills, purchase orders and default terms."],
        ["Advanced", "Accounting method (accrual or cash), first month of the fiscal year, account numbers and the closing date."],
      ),
      caution("Check the accounting method. Reports default to accrual or cash basis from this setting; it should match how the accountant prepares the tax return."),
    ),
    screen(
      "Preparing the chart of accounts",
      steps(
        ["Review the default chart", "QBO suggests accounts based on the industry chosen."],
        ["Turn on account numbers", "In Advanced settings."],
        ["Rename and remove", "Make accounts inactive if Pine & Co won't use them."],
        ["Add what's missing", "E.g. Plant and materials (cost of sales), Equipment — mowers, Vehicle expenses sub-accounts."],
      ),
      p("Each account has an account type and a detail type, which control where it appears in reports."),
    ),
    screen(
      "Customers, vendors and products",
      terms(
        ["Customers", "Name, email, billing address, terms and tax status — e.g. Riverside Apartments on net 14."],
        ["Vendors", "Name, address, terms, tax ID and, in the US, whether they're tracked for 1099 reporting."],
        ["Products and services", "Items used on invoices: services (garden maintenance), non-inventory items (mulch bought per job) and, on some plans, inventory items."],
      ),
      p("Each product or service links to an income account — and an expense or inventory account if it's also bought."),
    ),
    screen(
      "Users and permissions",
      table(
        ["Person", "Access"],
        [
          ["Leo (owner)", "Primary admin"],
          ["You (bookkeeper)", "Standard all-access, or as agreed"],
          ["Field supervisor", "Limited — create estimates and view customers only"],
          ["External accountant", "Invited as an accountant user"],
        ],
      ),
      caution("Give each person their own login. Shared logins make the audit log useless, because you can't tell who changed what."),
    ),
    mistakes(
      ["Accepting every default account", "Tailor the chart to the business."],
      ["Wrong accounting method", "Agree it with the accountant first."],
      ["Products linked to the wrong income account", "Check each product's account."],
      ["Shared logins", "One login per person."],
    ),
    check(
      1,
      q("Where do you usually create a new invoice or bill in QBO?", ["The + New button", "The Reports menu", "The audit log", "Company settings"], 0, "The + New button opens transaction forms."),
      q("Where is the accounting method (cash or accrual) set?", ["Advanced settings", "Customer list", "Bank feeds", "Invoice template"], 0, "In the Advanced company settings."),
      q("What does a product or service link to?", ["An income account", "A bank account only", "A user role", "A tax return"], 0, "And possibly an expense or inventory account."),
      q("How should Pine & Co's external accountant get access?", ["As an invited accountant user", "With Leo's password", "Through a shared login", "No access"], 0, "Separate logins keep the audit trail clear."),
      q("What should you do if a menu isn't where you expect?", ["Use search or QuickBooks help to find it by name", "Reinstall", "Create a new company", "Give up"], 0, "Layouts change; features stay."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Settings",
          ["List three settings to check before Pine & Co enters its first transaction."],
          ["Accounting method and fiscal year (Advanced); default sales terms of net 14 (Sales); account numbers turned on (Advanced)."],
        ],
        [
          "Exercise 2 — Access",
          ["The field supervisor needs to create estimates on site. What access should they get?"],
          ["A limited role that allows estimates and viewing customers — not banking, payroll or reports."],
        ],
      ),
    ),
    summary(
      ["Navigating QBO: + New, the left menu, Settings and search", "Company settings, especially the accounting method", "Preparing the chart of accounts with account and detail types", "Customers, vendors and products and services", "Users and permissions"],
      "Ten careful minutes in settings save hours of corrections later. Set up QBO deliberately before entering transactions.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Bank Feeds",
      ["Bank feeds bring transactions into QBO automatically. Used well, they save hours; used carelessly, they duplicate income and expenses."],
      ["Connect bank and card accounts", "Categorise and match transactions", "Create bank rules", "Handle transfers and duplicates"],
    ),
    screen(
      "Connecting bank and card accounts",
      steps(
        ["Connect the account", "In Banking, connect each bank and card account using the bank's secure sign-in."],
        ["Link it to the chart", "Choose the matching bank or credit card account in QBO."],
        ["Choose the start date", "Pine & Co imports from July 1, the day its books start in QBO."],
      ),
      caution("Importing too far back is the most common cause of duplicate transactions. Check the start date and opening balance before importing."),
    ),
    screen(
      "Reviewing transactions",
      table(
        ["Tab", "What's there"],
        [
          ["For review", "Imported transactions waiting for you to match, categorise, transfer or exclude"],
          ["Categorized", "Transactions already added or matched"],
          ["Excluded", "Duplicates or lines you've chosen not to record"],
        ],
      ),
    ),
    screen(
      "Matching vs. categorising",
      compare(
        ["Match", "The transaction already exists in QBO — e.g. Riverside Apartments' payment of an invoice. Matching links them; nothing new is created.", ["Use for invoice and bill payments", "Avoids duplicates"]],
        ["Categorise (add)", "Nothing exists yet — you choose the payee and account, and QBO creates the transaction.", ["Use for fuel, bank fees and card purchases", "Attach the receipt"]],
      ),
      tip("Match before you add", "If QBO suggests a match, check it. Adding instead of matching doubles the income or expense."),
    ),
    screen(
      "Bank rules",
      p("Rules automatically categorise transactions that meet conditions."),
      table(
        ["Rule", "Condition", "Action"],
        [
          ["Fuel", "Description contains “SHELL” or “BP”", "Vehicle expenses — Fuel"],
          ["Phone", "Description contains “VERIZON”", "Telephone expense"],
          ["Bank fee", "Description contains “MONTHLY FEE”", "Bank charges"],
        ],
      ),
      note("Review rules every few months. A rule that's too broad quietly miscodes every future transaction."),
    ),
    screen(
      "Transfers and duplicates",
      terms(
        ["Transfers", "Money moving between two of Pine & Co's own accounts — e.g. checking to savings, or paying the business credit card. Record as a transfer; it isn't income or an expense."],
        ["Duplicates", "If a transaction was entered manually and also imported, match the imported line to it — or exclude the duplicate line."],
      ),
      p("Example: Leo pays the $1,250 card bill from checking. In the checking feed, record it as a transfer to the credit card account."),
    ),
    mistakes(
      ["Importing from before the start date", "Old transactions come in twice."],
      ["Adding instead of matching", "Income or expenses get doubled."],
      ["Recording card payments as expenses", "They're transfers."],
      ["Over-broad rules", "Review and narrow them."],
    ),
    check(
      2,
      q("A bank deposit is a customer's payment of an existing invoice. What should you do?", ["Match it to the payment or invoice", "Add it as new income", "Exclude it", "Record it as a transfer"], 0, "Matching avoids double income."),
      q("What causes most duplicates after connecting a feed?", ["Importing from too early a date", "Using bank rules", "Matching", "Users"], 0, "Old transactions are imported again."),
      q("Paying the business credit card from checking is recorded as:", ["A transfer", "An expense", "Income", "Equity"], 0, "Both accounts belong to the business."),
      q("Which tab holds imported transactions waiting for action?", ["For review", "Categorized", "Excluded", "Reports"], 0, "Then you match, categorise, transfer or exclude."),
      q("What do bank rules do?", ["Categorise matching transactions automatically", "Reconcile the account", "Pay bills", "Set bank fees"], 0, "Rules apply coding by conditions."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Match or add?",
          ["(a) $86 at SHELL; (b) $2,400 from Riverside Apartments, which has an open $2,400 invoice; (c) $5,000 moved to savings; (d) a $15 monthly fee."],
          ["(a) Add — Fuel (or let the rule do it). (b) Match to the invoice payment. (c) Transfer. (d) Add — Bank charges."],
        ],
        [
          "Exercise 2 — Write a rule",
          ["Pine & Co pays “GREENSOFT” $39 a month for scheduling software. Write a rule."],
          ["If description contains “GREENSOFT”, categorise to Software subscriptions, payee GreenSoft."],
        ],
      ),
    ),
    summary(
      ["Connecting accounts and choosing the start date", "The For review, Categorized and Excluded tabs", "Matching vs. categorising", "Creating and reviewing bank rules", "Recording transfers and handling duplicates"],
      "Bank feeds are a shortcut, not a substitute for judgement: match what exists, add what doesn't, and check every rule.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Sales",
      ["Pine & Co earns money from maintenance contracts and one-off garden projects. This module covers invoices, sales receipts, payments, deposits and credits in QBO."],
      ["Create invoices and sales receipts", "Receive payments against invoices", "Group payments into bank deposits", "Issue credit memos and refunds"],
    ),
    screen(
      "Invoices and sales receipts",
      compare(
        ["Invoice", "Customer pays later. Creates a receivable.", ["Terms and due date", "Shows in A/R aging"]],
        ["Sales receipt", "Customer pays at the time of sale. No receivable.", ["Card or cash on the spot", "Deposit to bank or Payments to deposit"]],
      ),
      p("Behind a $2,400 invoice to Riverside Apartments, QBO records:"),
      journal([["Accounts receivable", "$2,400", ""], ["Landscaping income", "", "$2,400"]], "$2,400"),
    ),
    screen(
      "Receiving payments",
      p("When a customer pays an invoice, use Receive payment and apply it to the invoice. Then choose where the money went:"),
      table(
        ["Deposit to", "When to use"],
        [
          ["The bank account", "The payment reaches the bank on its own (e.g. a single transfer)"],
          ["Payments to deposit (formerly Undeposited funds)", "Several payments will be banked together as one deposit"],
        ],
      ),
    ),
    screen(
      "Bank deposits",
      p("On Friday, Leo banks three cheques together:"),
      table(
        ["Customer", "Amount"],
        [
          ["Riverside Apartments", "$650"],
          ["Oakview School", "$1,200"],
          ["Kim Patel", "$980"],
        ],
        { footer: ["Bank deposit", "$2,830"], numeric: [1] },
      ),
      p("Each payment was received into Payments to deposit. A Bank deposit groups them into one $2,830 deposit, matching the single line on the bank statement."),
      caution("Payments left sitting in Payments to deposit make the bank look short and the receivables look paid. Clear it regularly."),
    ),
    screen(
      "Credit memos and refunds",
      terms(
        ["Credit memo", "Reduces what a customer owes — e.g. a $120 credit to Riverside for a missed visit. Apply it to an open or future invoice."],
        ["Refund receipt", "Pays money back to a customer — e.g. refunding a sales receipt."],
        ["Estimate", "A quote that can be converted to an invoice once accepted."],
      ),
      tip("Don't delete sent invoices", "If an invoice was wrong after being sent, issue a credit memo (and a new invoice if needed) so the audit trail stays intact."),
    ),
    screen(
      "Worked example: a garden project",
      steps(
        ["Estimate", "Pine & Co sends Oakview School an estimate for a $6,000 garden redesign."],
        ["Accepted", "The estimate is converted to an invoice in two stages: $3,000 now, $3,000 on completion."],
        ["Payment", "Oakview pays the first $3,000 by bank transfer — received directly to checking."],
        ["Match", "The bank feed line is matched to that payment."],
      ),
    ),
    mistakes(
      ["Adding customer payments as income from the bank feed", "Match them to invoice payments."],
      ["Leaving payments in Payments to deposit", "Group them into bank deposits."],
      ["Deleting sent invoices", "Use credit memos."],
      ["Using an invoice for a cash-on-the-spot sale", "Use a sales receipt."],
    ),
    check(
      3,
      q("A customer pays at the time of sale. Which form fits?", ["Sales receipt", "Invoice", "Bill", "Credit memo"], 0, "No receivable is created."),
      q("Several cheques are banked together. Where should each payment go first?", ["Payments to deposit, then a bank deposit", "Directly to the bank", "Owner's equity", "Income"], 0, "Grouping matches the bank's single deposit."),
      q("What problem do old items in Payments to deposit cause?", ["The bank looks short and receivables look paid", "Higher sales", "Lower expenses", "Nothing"], 0, "Clear it regularly."),
      q("Which form reduces what a customer owes?", ["Credit memo", "Sales receipt", "Bank deposit", "Estimate"], 0, "Apply it to an invoice."),
      q("What can an accepted estimate become?", ["An invoice", "A bill", "A bank deposit", "A journal entry"], 0, "Convert it once accepted."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Choose the form",
          ["(a) A homeowner pays $180 by card after a one-off mow. (b) A monthly maintenance contract billed on net 14. (c) A $60 credit for a cancelled visit."],
          ["(a) Sales receipt. (b) Invoice (possibly recurring). (c) Credit memo."],
        ],
        [
          "Exercise 2 — Deposit",
          ["Payments of $420, $1,150 and $730 are banked together. What should the bank deposit total?"],
          ["$2,300 — matching the single deposit on the statement."],
        ],
      ),
    ),
    summary(
      ["Invoices vs. sales receipts", "Receiving payments against invoices", "Payments to deposit and bank deposits", "Credit memos, refund receipts and estimates"],
      "Record the sale on the right form, apply every payment to its invoice, and group banked payments into deposits.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Expenses and Bills",
      ["Pine & Co buys plants, materials, fuel and equipment. This module covers bills, expenses, paying bills, receipts and vendor credits in QBO."],
      ["Enter bills and expenses", "Pay bills", "Capture receipts", "Record vendor credits"],
    ),
    screen(
      "Bills vs. expenses",
      compare(
        ["Bill", "Pay later. Creates accounts payable.", ["Enter, approve, then pay", "Shows in A/P aging"]],
        ["Expense / Check", "Paid at the time of purchase by card, cash or cheque.", ["No payable", "Attach the receipt"]],
      ),
      p("Each line is coded to a category (account) or an item, and can be marked billable to a customer."),
    ),
    screen(
      "Entering a bill",
      p("Green Valley Nursery bills Pine & Co $1,850 for plants for the Oakview project, due in 30 days."),
      journal([["Plants and materials (cost of sales)", "$1,850", ""], ["Accounts payable", "", "$1,850"]], "$1,850"),
      tip("Billable expenses", "Marking the line billable to Oakview School lets Pine & Co add it to the customer's next invoice."),
    ),
    screen(
      "Paying bills",
      steps(
        ["Open Pay bills", "See unpaid bills by due date."],
        ["Choose account and date", "The bank or card account the money comes from."],
        ["Select bills", "Including any discounts or vendor credits to apply."],
        ["Save", "QBO records the bill payment and clears the payable."],
        ["Match in the bank feed", "When the payment appears, match it — don't add it again."],
      ),
      caution("Recording a bill payment as a new Expense leaves the bill open and doubles the cost."),
    ),
    screen(
      "Receipts",
      p("Field staff photograph receipts with the QuickBooks mobile app, or forward them by email. QBO reads the details and suggests a match to a bank or card transaction."),
      bullets(
        "Review each suggested match before accepting it.",
        "Attach receipts to transactions for the audit trail.",
        "Chase missing receipts weekly, not at month end.",
      ),
    ),
    screen(
      "Vendor credits",
      p("Green Valley Nursery gives a $150 credit for damaged shrubs:"),
      journal([["Accounts payable", "$150", ""], ["Plants and materials (cost of sales)", "", "$150"]], "$150"),
      p("When paying Green Valley's bills, apply the credit — Pine & Co pays $1,700 instead of $1,850."),
    ),
    mistakes(
      ["Using an expense when the bill isn't paid yet", "Use a bill so it shows in A/P."],
      ["Adding bill payments from the bank feed", "Match them instead."],
      ["Forgetting vendor credits", "Apply them when paying."],
      ["Accepting receipt matches without checking", "Review each one."],
    ),
    check(
      4,
      q("Which form creates accounts payable?", ["Bill", "Expense", "Check", "Sales receipt"], 0, "Bills are paid later."),
      q("A bill payment shows up in the bank feed. What should you do?", ["Match it to the bill payment", "Add it as an expense", "Exclude the bill", "Create a transfer"], 0, "Matching avoids doubling."),
      q("A card purchase paid at the time of sale is recorded as:", ["An expense", "A bill", "An invoice", "A deposit"], 0, "No payable."),
      q("How is a supplier credit for damaged goods recorded?", ["As a vendor credit", "As a credit memo", "As a sales receipt", "As a refund receipt"], 0, "Vendor credits reduce what you owe."),
      q("After a $150 credit, how much does Pine & Co pay on the $1,850 bill?", ["$1,700", "$1,850", "$2,000", "$150"], 0, "$1,850 − $150."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Bill or expense?",
          ["(a) Fuel paid by card; (b) mulch supplier billing on net 30; (c) a new $3,200 mower paid by cheque."],
          ["(a) Expense. (b) Bill. (c) Check (expense form) coded to Equipment — mowers, a fixed asset."],
        ],
        [
          "Exercise 2 — Billable expense",
          ["$400 of rock for a client's garden is bought by card and marked billable. What happens next?"],
          ["It's coded to cost of sales and appears as a billable item to add to that customer's next invoice."],
        ],
      ),
    ),
    summary(
      ["Bills vs. expenses and checks", "Coding lines and billable expenses", "Paying bills and matching the payments", "Capturing receipts", "Vendor credits"],
      "Use the form that matches how you'll pay, and let the bank feed confirm payments rather than create them again.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Reconciling and Adjusting",
      ["This module covers the month-end work in QBO: reconciling, journal entries, fixing common errors and closing the books."],
      ["Reconcile bank and card accounts in QBO", "Record journal entries", "Fix common QBO errors", "Close the books with a closing date"],
    ),
    screen(
      "Reconciling in QBO",
      steps(
        ["Open Reconcile", "Choose the account — e.g. Pine & Co's checking."],
        ["Enter the statement details", "Ending date (July 31) and ending balance."],
        ["Tick cleared items", "Tick each transaction that appears on the statement."],
        ["Reach a zero difference", "Finish when the difference is $0.00."],
        ["Keep the report", "QBO saves a reconciliation report."],
      ),
      caution("Never force the difference to zero with an adjustment without finding the cause. It hides errors."),
    ),
    screen(
      "Journal entries",
      p("Use journal entries for items no other form handles: accruals, depreciation, reclassifications and corrections."),
      p("Pine & Co's mowers and trailer cost $15,000 with a 5-year life: $250 depreciation a month."),
      journal([["Depreciation expense", "$250", ""], ["Accumulated depreciation", "", "$250"]], "$250"),
      tip("Recurring and reversing", "Save regular entries as recurring transactions. For accruals, create the reversal on the first day of the next month."),
    ),
    screen(
      "Fixing common errors",
      table(
        ["Problem", "Likely cause", "Fix"],
        [
          ["Income counted twice", "A deposit added as income and also matched to an invoice", "Delete the duplicate"],
          ["Uncategorized expense balance", "Bank lines added without a proper account", "Recode each item"],
          ["Payments to deposit piling up", "Payments never grouped into deposits", "Create bank deposits or apply correctly"],
          ["Opening balance equity not zero", "Opening balances from setup", "Ask the accountant to reclassify"],
        ],
      ),
    ),
    screen(
      "Closing the books",
      p("In Advanced settings, set a closing date and password. Changes before that date then need the password and are tracked in the audit log."),
      bullets(
        "Set the closing date after each month's reports are final.",
        "Share the password only with people who need it.",
        "Use the audit log to see what changed, when and by whom.",
      ),
    ),
    mistakes(
      ["Forcing reconciliations", "Find the real difference."],
      ["Using journals instead of proper forms", "Invoices, bills and payments should use their forms."],
      ["Ignoring Opening balance equity", "Get it cleared with the accountant."],
      ["Leaving months open", "Set a closing date."],
    ),
    check(
      5,
      q("What do you enter to start a reconciliation in QBO?", ["Statement ending date and balance", "Customer list", "Invoice number", "Tax rate"], 0, "QBO compares to the statement."),
      q("When should you finish a reconciliation?", ["When the difference is $0.00", "When you're tired", "When half the items are ticked", "At any difference"], 0, "Don't force it."),
      q("Which item needs a journal entry?", ["Monthly depreciation", "A customer invoice", "A bill", "A sales receipt"], 0, "Depreciation has no other form."),
      q("Income appears twice. What's a likely cause?", ["A deposit added as income and also matched to an invoice", "Bank rules", "The closing date", "Reconciling"], 0, "Adding and matching duplicates income."),
      q("What does setting a closing date do?", ["Protects transactions before that date", "Deletes old data", "Files taxes", "Ends the subscription"], 0, "Closed periods need a password."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Depreciation",
          ["A $9,600 trailer has a 4-year life and no residual value. What's the monthly journal?"],
          ["$9,600 ÷ 48 = $200. Dr Depreciation expense $200 · Cr Accumulated depreciation $200."],
        ],
        [
          "Exercise 2 — Find the error",
          ["July income is $2,400 higher than expected. Riverside's $2,400 invoice shows as paid, and there's also a $2,400 deposit categorised to Landscaping income. What's wrong?"],
          ["The bank line was added as income instead of matched to the invoice payment. Delete the added deposit and match the bank line to the payment."],
        ],
      ),
    ),
    summary(
      ["Reconciling in QBO", "Journal entries, recurring and reversing", "Diagnosing common QBO errors", "Closing the books with a closing date and the audit log"],
      "Reconcile honestly, use journals only where no form fits, and lock each month once it's final.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reports",
      ["Reports are why the books are kept. This module covers QBO's main reports, the aging reports, customising reports and building a monthly pack for Leo."],
      ["Run the profit and loss and balance sheet", "Use the A/R and A/P aging reports", "Customise and save reports", "Build a management report pack"],
    ),
    screen(
      "Profit and loss and balance sheet",
      bullets(
        "Run the Profit and Loss for the month, with a comparison column for last month or last year.",
        "Run the Balance Sheet at month end and check each balance against reconciliations and schedules.",
        "Switch between accrual and cash basis to see both views.",
        "Click any figure to drill down to the transactions behind it.",
      ),
    ),
    screen(
      "Aging reports",
      compare(
        ["A/R Aging Summary", "Who owes Pine & Co, grouped by days overdue.", ["Drive collections", "Should equal AR on the balance sheet"]],
        ["A/P Aging Summary", "Whom Pine & Co owes, grouped by days overdue.", ["Plan payments", "Should equal AP on the balance sheet"]],
      ),
      tip("Check the totals", "If an aging total doesn't match its balance sheet account, look for journal entries posted to AR or AP without a customer or vendor."),
    ),
    screen(
      "Customising and saving reports",
      steps(
        ["Customise", "Change the date range, columns, filters and accounting basis."],
        ["Save it", "Save the customised report so it can be rerun each month."],
        ["Schedule it", "Some plans can email saved reports on a schedule."],
      ),
      p("Example: Leo wants profit by service line. A Profit and Loss filtered or split by class (Maintenance, Projects) answers it — if classes are switched on and used consistently."),
    ),
    screen(
      "A management pack for Leo",
      table(
        ["Report", "Why Leo needs it"],
        [
          ["Profit and loss vs. last month", "How July went"],
          ["Profit and loss by class", "Maintenance vs. projects margins"],
          ["Balance sheet", "Cash, what's owed to and by Pine & Co"],
          ["A/R aging", "Who to chase"],
          ["A/P aging", "What's due soon"],
          ["Short commentary", "What happened and why"],
        ],
      ),
      note("Features such as management reports and scheduling depend on the QBO plan and whether you use QuickBooks Online Accountant."),
    ),
    mistakes(
      ["Sending reports without checking balances", "Reconcile first."],
      ["Rebuilding the same report every month", "Save customisations."],
      ["Ignoring aging totals that don't match", "Find entries without a customer or vendor."],
      ["Reports with no commentary", "Explain what changed."],
    ),
    check(
      6,
      q("How do you see the transactions behind a report figure?", ["Click the figure to drill down", "Export to PDF", "Run payroll", "Reconcile"], 0, "Figures link to their transactions."),
      q("What should the A/R aging total equal?", ["AR on the balance sheet", "Total sales", "Cash", "AP"], 0, "Subledger and control account agree."),
      q("Why save a customised report?", ["To rerun it each month without rebuilding it", "To delete data", "To change tax", "To lock the period"], 0, "Saves time."),
      q("What lets Leo see profit by service line?", ["A P&L split or filtered by class", "The A/P aging", "The audit log", "Bank rules"], 0, "If classes are used consistently."),
      q("Which belongs in Leo's management pack?", ["P&L, balance sheet, agings and commentary", "Only the audit log", "Only invoices", "Only bank feeds"], 0, "A full monthly picture."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Mismatch",
          ["The A/P aging totals $8,450 but AP on the balance sheet is $8,950. What do you check?"],
          ["Look for journal entries posted to Accounts payable without a vendor (e.g. a $500 adjustment). Re-post them through a vendor."],
        ],
        [
          "Exercise 2 — Plan the pack",
          ["List four reports for Leo's monthly pack and one question each answers."],
          ["P&L — were we profitable? P&L by class — which service line earns most? A/R aging — who owes us? A/P aging — what must we pay soon?"],
        ],
      ),
    ),
    summary(
      ["Profit and loss and balance sheet, with drill-down", "A/R and A/P aging reports", "Customising, saving and scheduling reports", "Reporting by class", "A monthly management pack"],
      "Good reports answer the owner's questions. Reconcile first, then report clearly — with a short explanation.",
    ),
  ],
}

export default lessons
