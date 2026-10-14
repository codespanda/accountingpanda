import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const category = { label: "Bookkeeping", href: "/learning/bookkeeping" }

const mod = (n: number, title: string, items: string[]): CourseModule => ({
  title: `Module ${n} — ${title}`,
  sections: [{ items }],
})

/** Course pages for every bookkeeping course except Bookkeeping Basics, which has its own lessons. */
export const bookkeepingCourseCatalog: CourseDetails[] = [
  {
    slug: "double-entry-bookkeeping-explained",
    title: "Double-Entry Bookkeeping Explained",
    summary: "Understand debits, credits, and how every transaction balances.",
    intro:
      "Learn the system behind every set of books — why each transaction has two sides, how debits and credits work, and how to check that everything balances.",
    objective:
      "By the end of this course, learners will apply the debit and credit rules to any transaction, record entries that keep the accounting equation in balance, and use a trial balance to find and fix common errors.",
    level: "Beginner",
    duration: "3.0 Hours",
    category,
    modules: [
      mod(1, "Why Double-Entry Matters", [
        "Single-entry vs. double-entry bookkeeping",
        "The dual effect of every transaction",
        "How double-entry prevents and exposes errors",
        "The accounting equation as the foundation",
        "A short history of double-entry",
      ]),
      mod(2, "Debits and Credits", [
        "What “debit” and “credit” really mean",
        "Normal balances for each account type",
        "The debit and credit rules table",
        "Increases and decreases for assets, liabilities and equity",
        "Debits and credits for income and expenses",
      ]),
      mod(3, "T-Accounts", [
        "Drawing and reading a T-account",
        "Posting debits and credits",
        "Calculating an account balance",
        "Using T-accounts to analyse a transaction",
        "Common T-account mistakes",
      ]),
      mod(4, "Analysing Everyday Transactions", [
        "Cash and credit sales",
        "Cash and credit purchases",
        "Paying expenses",
        "Owner investments and drawings",
        "Loans received and repaid",
        "Receiving and making payments on account",
      ]),
      mod(5, "The Trial Balance", [
        "Purpose of a trial balance",
        "Preparing a trial balance from ledger balances",
        "What a balanced trial balance does — and doesn't — prove",
        "Errors that don't affect the trial balance",
      ]),
      mod(6, "Finding and Correcting Errors", [
        "Transposition and slide errors",
        "Errors of omission, commission and principle",
        "Compensating errors",
        "Writing correcting entries",
        "Suspense accounts",
      ]),
    ],
    assignments: [
      "Classify accounts by type and normal balance",
      "Analyse 20 transactions into debits and credits",
      "Post entries to T-accounts",
      "Prepare a trial balance",
      "Find and correct errors in a trial balance",
    ],
    finalExam: "30 questions",
    finalPractical: "Record a month of transactions for a small business and prepare a balanced trial balance.",
  },
  {
    slug: "chart-of-accounts-setup",
    title: "Chart of Accounts Setup",
    summary: "Build a chart of accounts that fits your business from day one.",
    intro:
      "Design a chart of accounts that is easy to use, gives useful reports, and grows with the business — instead of one that needs fixing later.",
    objective:
      "By the end of this course, learners will design a chart of accounts for a small business, choose a sensible numbering system, map accounts to the financial statements, and keep the chart clean over time.",
    level: "Beginner",
    duration: "2.0 Hours",
    category,
    modules: [
      mod(1, "What a Chart of Accounts Does", [
        "Purpose of a chart of accounts",
        "How it connects to the general ledger",
        "How it drives your financial reports",
        "Signs of a poorly designed chart",
      ]),
      mod(2, "Account Types and Structure", [
        "Assets, liabilities and equity accounts",
        "Income and cost of sales accounts",
        "Operating and other expense accounts",
        "Balance sheet vs. profit and loss accounts",
        "Parent accounts and sub-accounts",
      ]),
      mod(3, "Numbering and Naming", [
        "Common numbering ranges (1000s, 2000s and so on)",
        "Leaving room for growth",
        "Clear, consistent account names",
        "When to add a new account — and when not to",
      ]),
      mod(4, "Tailoring the Chart to Your Business", [
        "Service businesses",
        "Retail and inventory-based businesses",
        "Using classes, locations or tracking categories",
        "Industry-specific accounts",
        "Matching the chart to how owners read reports",
      ]),
      mod(5, "Setting Up in Accounting Software", [
        "Default charts in QuickBooks and Xero",
        "Importing a chart of accounts",
        "Tax mapping and report mapping",
        "Locking and archiving accounts",
      ]),
      mod(6, "Maintaining the Chart", [
        "Merging duplicate accounts",
        "Cleaning up unused accounts",
        "Controlling who can add accounts",
        "Year-end review of the chart",
      ]),
    ],
    assignments: [
      "Classify a list of accounts by type",
      "Design a numbering scheme",
      "Build a chart for a service business",
      "Build a chart for a retail business",
      "Clean up a messy chart of accounts",
    ],
    finalExam: "25 questions",
    finalPractical: "Design and document a complete chart of accounts for a fictional business.",
  },
  {
    slug: "recording-journal-entries",
    title: "Recording Journal Entries",
    summary: "Practice recording common transactions accurately and consistently.",
    intro:
      "Turn source documents into accurate journal entries — from everyday sales and purchases to compound entries — and post them to the general ledger.",
    objective:
      "By the end of this course, learners will record common business transactions as journal entries from source documents, write clear descriptions, post entries to the ledger, and review their own work for accuracy.",
    level: "Beginner",
    duration: "2.8 Hours",
    category,
    modules: [
      mod(1, "The General Journal", [
        "Purpose of the general journal",
        "Parts of a journal entry",
        "Writing clear entry descriptions",
        "Dates, references and supporting documents",
      ]),
      mod(2, "Source Documents", [
        "Sales invoices and receipts",
        "Supplier bills",
        "Bank statements",
        "Payroll reports",
        "Keeping an audit trail",
      ]),
      mod(3, "Recording Sales and Receipts", [
        "Cash sales",
        "Credit sales",
        "Customer payments",
        "Sales returns and discounts",
        "Deposits received in advance",
      ]),
      mod(4, "Recording Purchases and Payments", [
        "Expense purchases",
        "Inventory purchases",
        "Asset purchases",
        "Paying suppliers",
        "Purchase returns",
      ]),
      mod(5, "Compound and Special Entries", [
        "Entries with more than two lines",
        "Loan repayments split into principal and interest",
        "Owner contributions and drawings",
        "Transfers between bank accounts",
      ]),
      mod(6, "Posting and Reviewing", [
        "Posting journal entries to the ledger",
        "Special journals (sales and purchases)",
        "Checking your own entries",
        "Correcting a posted entry",
      ]),
    ],
    assignments: [
      "Identify the source document for each transaction",
      "Record 25 journal entries",
      "Record compound entries",
      "Post journal entries to the ledger",
      "Correct errors in posted entries",
    ],
    finalExam: "30 questions",
    finalPractical: "Journalise and post a month of transactions from a set of source documents.",
  },
  {
    slug: "bank-reconciliation-fundamentals",
    title: "Bank Reconciliation Fundamentals",
    summary: "Match bank statements to your books and catch discrepancies early.",
    intro:
      "Learn to reconcile bank and credit card accounts with confidence — matching transactions, explaining differences, and fixing the books when they don't agree.",
    objective:
      "By the end of this course, learners will reconcile bank and credit card accounts, identify timing differences and errors, record the adjusting entries, and use reconciliation features in accounting software.",
    level: "Intermediate",
    duration: "3.5 Hours",
    category,
    modules: [
      mod(1, "Why Reconciliation Matters", [
        "What a bank reconciliation proves",
        "Catching errors, fraud and missing transactions",
        "How often to reconcile",
        "Reading a bank statement",
      ]),
      mod(2, "Matching Transactions", [
        "Comparing the bank statement to the ledger",
        "Ticking off matched items",
        "Handling grouped deposits",
        "Matching card settlements",
      ]),
      mod(3, "Reconciling Items", [
        "Deposits in transit",
        "Outstanding cheques and payments",
        "Bank fees and interest",
        "Direct debits and automatic payments",
        "Errors by the bank vs. errors in the books",
      ]),
      mod(4, "Preparing the Reconciliation", [
        "The reconciliation statement layout",
        "Adjusting the book balance",
        "Adjusting the bank balance",
        "Recording the adjusting entries",
      ]),
      mod(5, "Credit Card and Loan Accounts", [
        "Reconciling credit card statements",
        "Reconciling loan balances",
        "Payment processor and clearing accounts",
      ]),
      mod(6, "Reconciling in Software and Troubleshooting", [
        "Bank feeds and matching rules",
        "Reconciling in QuickBooks and Xero",
        "Finding why a reconciliation doesn't balance",
        "Fixing a previously reconciled period",
      ]),
    ],
    assignments: [
      "Identify reconciling items on a statement",
      "Prepare a bank reconciliation statement",
      "Record adjusting entries",
      "Reconcile a credit card account",
      "Troubleshoot an unbalanced reconciliation",
    ],
    finalExam: "30 questions",
    finalPractical: "Reconcile three months of bank activity for a small business, including errors to find.",
  },
  {
    slug: "accounts-payable-management",
    title: "Accounts Payable Management",
    summary: "Track vendor bills, due dates, and payments without missing a beat.",
    intro:
      "Run an accounts payable process that pays suppliers on time, protects against duplicate or fraudulent payments, and keeps the books accurate.",
    objective:
      "By the end of this course, learners will set up and manage vendors, record and approve bills, schedule payments, reconcile supplier statements, and report on what the business owes.",
    level: "Intermediate",
    duration: "3.2 Hours",
    category,
    modules: [
      mod(1, "The Accounts Payable Process", [
        "What accounts payable covers",
        "The procure-to-pay cycle",
        "Roles and segregation of duties",
        "Accounts payable as a liability",
      ]),
      mod(2, "Vendor Setup", [
        "Collecting vendor details and tax forms",
        "Payment terms",
        "Verifying bank details",
        "Keeping the vendor list clean",
      ]),
      mod(3, "Recording and Approving Bills", [
        "Entering bills and coding expenses",
        "Purchase orders and three-way matching",
        "Approval workflows",
        "Handling credit notes and refunds",
      ]),
      mod(4, "Paying Suppliers", [
        "Payment runs and scheduling",
        "Early-payment discounts",
        "Payment methods — ACH, cheque and card",
        "Recording payments correctly",
      ]),
      mod(5, "Controls and Fraud Prevention", [
        "Preventing duplicate payments",
        "Detecting fake vendors and bank-detail changes",
        "Reviewing unusual payments",
        "Audit trails and documentation",
      ]),
      mod(6, "Reconciliation and Reporting", [
        "Reconciling supplier statements",
        "The AP aging report",
        "Accrued expenses at month end",
        "Cash flow forecasting from payables",
      ]),
    ],
    assignments: [
      "Set up five vendors with payment terms",
      "Record and code supplier bills",
      "Plan a weekly payment run",
      "Reconcile a supplier statement",
      "Review an AP aging report",
    ],
    finalExam: "30 questions",
    finalPractical: "Manage a month of supplier bills and payments, including an aging report and a supplier reconciliation.",
  },
  {
    slug: "accounts-receivable-and-invoicing",
    title: "Accounts Receivable & Invoicing",
    summary: "Create invoices, track customer balances, and manage collections.",
    intro:
      "Get paid faster with accurate invoices, clear payment terms, and a collections process that keeps customer balances under control.",
    objective:
      "By the end of this course, learners will create accurate invoices, record customer payments, manage overdue balances, reconcile receivables, and report on what customers owe.",
    level: "Intermediate",
    duration: "3.0 Hours",
    category,
    modules: [
      mod(1, "The Accounts Receivable Process", [
        "What accounts receivable covers",
        "The order-to-cash cycle",
        "Credit terms and customer credit checks",
        "Receivables as an asset",
      ]),
      mod(2, "Creating Invoices", [
        "What every invoice should include",
        "Invoice numbering",
        "Recurring and progress invoices",
        "Sales tax on invoices",
      ]),
      mod(3, "Recording Customer Payments", [
        "Applying payments to invoices",
        "Partial payments and overpayments",
        "Deposits and prepayments",
        "Payment processor fees",
      ]),
      mod(4, "Credit Notes and Adjustments", [
        "Issuing credit notes",
        "Refunds",
        "Discounts and write-offs",
        "Customer disputes",
      ]),
      mod(5, "Collections", [
        "Payment reminders that work",
        "Escalating overdue accounts",
        "Payment plans",
        "When to stop extending credit",
      ]),
      mod(6, "Reporting and Bad Debts", [
        "The AR aging report",
        "Days sales outstanding (DSO)",
        "Allowance for doubtful accounts",
        "Writing off bad debts",
      ]),
    ],
    assignments: [
      "Create invoices with correct terms and tax",
      "Apply customer payments",
      "Issue a credit note",
      "Draft a collections reminder sequence",
      "Review an AR aging report",
    ],
    finalExam: "30 questions",
    finalPractical: "Invoice and collect for a month of customer sales, finishing with an aging report and bad-debt review.",
  },
  {
    slug: "month-end-close-process",
    title: "Month-End Close Process",
    summary: "A repeatable checklist for closing the books accurately every month.",
    intro:
      "Build a month-end close that is fast, repeatable and accurate — so the reports owners rely on are ready on time every month.",
    objective:
      "By the end of this course, learners will follow a structured month-end checklist, reconcile key accounts, record accruals and adjustments, review the financial statements, and lock the period.",
    level: "Intermediate",
    duration: "4.0 Hours",
    category,
    modules: [
      mod(1, "Planning the Close", [
        "What the month-end close is for",
        "Building a close checklist",
        "Close calendar and deadlines",
        "Who does what",
      ]),
      mod(2, "Completing the Transactions", [
        "Making sure every transaction is recorded",
        "Clearing uncategorised items",
        "Cut-off for sales and purchases",
      ]),
      mod(3, "Reconciliations", [
        "Bank and credit card accounts",
        "Accounts receivable and payable",
        "Payroll liabilities",
        "Loans and fixed assets",
      ]),
      mod(4, "Accruals and Adjustments", [
        "Accrued expenses and income",
        "Prepaid expenses",
        "Deferred revenue",
        "Depreciation",
        "Inventory adjustments",
      ]),
      mod(5, "Review and Reporting", [
        "Reviewing the balance sheet",
        "Reviewing the profit and loss",
        "Variance analysis against last month and budget",
        "Preparing the month-end report pack",
      ]),
      mod(6, "Closing the Period", [
        "Locking the period in software",
        "Documenting the close",
        "Speeding up the close over time",
      ]),
    ],
    assignments: [
      "Build a month-end close checklist",
      "Complete key account reconciliations",
      "Record month-end accruals",
      "Perform a variance analysis",
      "Prepare a month-end report pack",
    ],
    finalExam: "35 questions",
    finalPractical: "Close one month of books for a small business from checklist to locked period.",
  },
  {
    slug: "quickbooks-for-bookkeepers",
    title: "QuickBooks for Bookkeepers",
    summary: "Hands-on training for day-to-day bookkeeping inside QuickBooks.",
    intro:
      "Learn the QuickBooks Online workflows bookkeepers use every day — from company setup and bank feeds to bills, invoices, reconciliations and reports.",
    objective:
      "By the end of this course, learners will set up a QuickBooks Online company, manage daily transactions, use bank feeds and rules, reconcile accounts, and produce the core financial reports.",
    level: "Intermediate",
    duration: "5.0 Hours",
    category,
    modules: [
      mod(1, "Getting Started", [
        "Navigating QuickBooks Online",
        "Company settings",
        "Setting up the chart of accounts",
        "Customers, vendors and products",
        "Users and permissions",
      ]),
      mod(2, "Bank Feeds", [
        "Connecting bank and card accounts",
        "Categorising and matching transactions",
        "Creating bank rules",
        "Handling transfers and duplicates",
      ]),
      mod(3, "Sales", [
        "Creating invoices and sales receipts",
        "Receiving payments",
        "Deposits and undeposited funds",
        "Credit memos and refunds",
      ]),
      mod(4, "Expenses and Bills", [
        "Entering bills and expenses",
        "Paying bills",
        "Recording receipts",
        "Vendor credits",
      ]),
      mod(5, "Reconciling and Adjusting", [
        "Reconciling bank and card accounts",
        "Journal entries",
        "Fixing common errors",
        "Closing the books",
      ]),
      mod(6, "Reports", [
        "Profit and loss and balance sheet",
        "AR and AP aging",
        "Customising and saving reports",
        "Management reports for owners",
      ]),
    ],
    assignments: [
      "Set up a sample company",
      "Categorise a month of bank feed transactions",
      "Create invoices and receive payments",
      "Enter and pay bills",
      "Reconcile a bank account",
    ],
    finalExam: "35 questions",
    finalPractical: "Complete a month of bookkeeping for a sample company in QuickBooks Online.",
  },
  {
    slug: "xero-for-bookkeepers",
    title: "Xero for Bookkeepers",
    summary: "Hands-on training for day-to-day bookkeeping inside Xero.",
    intro:
      "Learn the Xero workflows bookkeepers use every day — organisation setup, bank reconciliation, invoices and bills, and the reports clients rely on.",
    objective:
      "By the end of this course, learners will set up a Xero organisation, reconcile bank accounts, manage invoices and bills, use tracking categories, and produce the core financial reports.",
    level: "Intermediate",
    duration: "5.0 Hours",
    category,
    modules: [
      mod(1, "Getting Started", [
        "Navigating Xero",
        "Organisation settings",
        "Setting up the chart of accounts",
        "Contacts and inventory items",
        "Users and roles",
      ]),
      mod(2, "Bank Reconciliation", [
        "Connecting bank feeds",
        "Reconciling with match, create and transfer",
        "Bank rules",
        "Cash coding",
      ]),
      mod(3, "Sales", [
        "Creating and sending invoices",
        "Repeating invoices",
        "Receiving payments",
        "Credit notes",
      ]),
      mod(4, "Purchases", [
        "Entering bills",
        "Paying bills and batch payments",
        "Expense claims",
        "Purchase orders",
      ]),
      mod(5, "Tracking and Adjustments", [
        "Tracking categories",
        "Manual journals",
        "Fixed assets",
        "Lock dates",
      ]),
      mod(6, "Reports", [
        "Profit and loss and balance sheet",
        "Aged receivables and payables",
        "Customising report layouts",
        "Management reports for owners",
      ]),
    ],
    assignments: [
      "Set up a sample organisation",
      "Reconcile a month of bank transactions",
      "Create invoices and record payments",
      "Enter bills and a batch payment",
      "Set up tracking categories",
    ],
    finalExam: "35 questions",
    finalPractical: "Complete a month of bookkeeping for a sample organisation in Xero.",
  },
  {
    slug: "payroll-basics-for-bookkeepers",
    title: "Payroll Basics for Bookkeepers",
    summary: "What bookkeepers need to know about processing payroll accurately.",
    intro:
      "Understand how payroll works from a bookkeeper's point of view — gross to net pay, withholdings, employer costs, and recording payroll correctly in the books.",
    objective:
      "By the end of this course, learners will calculate gross and net pay, understand withholdings and employer taxes, record payroll journal entries, and reconcile payroll liabilities.",
    level: "Advanced",
    duration: "3.5 Hours",
    category,
    modules: [
      mod(1, "Payroll Fundamentals", [
        "Employees vs. contractors",
        "Pay frequencies",
        "Payroll records you must keep",
        "Payroll software and providers",
      ]),
      mod(2, "Gross Pay", [
        "Salaried and hourly pay",
        "Overtime",
        "Bonuses and commissions",
        "Leave and holiday pay",
      ]),
      mod(3, "Deductions and Withholdings", [
        "Income tax withholding",
        "Social security and retirement contributions",
        "Voluntary deductions",
        "Calculating net pay",
      ]),
      mod(4, "Employer Costs", [
        "Employer payroll taxes",
        "Employer retirement contributions",
        "Benefits",
        "The true cost of an employee",
      ]),
      mod(5, "Recording Payroll", [
        "Payroll journal entries",
        "Payroll clearing accounts",
        "Accruing wages at period end",
        "Paying payroll liabilities",
      ]),
      mod(6, "Reconciliation and Compliance", [
        "Reconciling payroll liability accounts",
        "Year-end payroll reporting",
        "Common payroll mistakes",
        "Country differences — US and Australia",
      ]),
    ],
    assignments: [
      "Calculate gross to net pay",
      "Calculate employer payroll costs",
      "Record a payroll journal entry",
      "Accrue wages at month end",
      "Reconcile payroll liabilities",
    ],
    finalExam: "30 questions",
    finalPractical: "Process and record one month of payroll for a small team and reconcile the liabilities.",
    note:
      "Payroll tax rates, thresholds and filing rules differ by country and change regularly. Always confirm current rates with the relevant tax authority.",
  },
  {
    slug: "advanced-bookkeeping-and-adjusting-entries",
    title: "Advanced Bookkeeping & Adjusting Entries",
    summary: "Accruals, prepayments, depreciation, and other period-end adjustments.",
    intro:
      "Go beyond day-to-day recording to the adjustments that make financial statements accurate — accruals, deferrals, depreciation, inventory and more.",
    objective:
      "By the end of this course, learners will record the period-end adjustments needed for accrual-basis financial statements and prepare an adjusted trial balance ready for reporting.",
    level: "Advanced",
    duration: "4.5 Hours",
    category,
    modules: [
      mod(1, "Accrual Accounting", [
        "Cash basis vs. accrual basis",
        "The matching principle",
        "Revenue recognition basics",
        "Why adjusting entries are needed",
      ]),
      mod(2, "Accruals", [
        "Accrued expenses",
        "Accrued revenue",
        "Reversing entries",
      ]),
      mod(3, "Deferrals", [
        "Prepaid expenses",
        "Deferred (unearned) revenue",
        "Amortising prepayments",
      ]),
      mod(4, "Fixed Assets and Depreciation", [
        "Capitalising vs. expensing",
        "Straight-line depreciation",
        "Declining-balance depreciation",
        "Disposals and write-offs",
        "The fixed asset register",
      ]),
      mod(5, "Inventory and Other Adjustments", [
        "Inventory counts and adjustments",
        "Cost of goods sold",
        "Bad debt allowances",
        "Foreign currency revaluation basics",
      ]),
      mod(6, "From Adjusted Trial Balance to Reports", [
        "Preparing the adjusted trial balance",
        "Closing entries",
        "Preparing financial statements",
        "Review checklist",
      ]),
    ],
    assignments: [
      "Record accruals and reversals",
      "Amortise prepaid expenses",
      "Build a depreciation schedule",
      "Record inventory adjustments",
      "Prepare an adjusted trial balance",
    ],
    finalExam: "40 questions",
    finalPractical: "Make all year-end adjustments for a small business and prepare its financial statements.",
  },
]

export function findBookkeepingCourse(slug: string | undefined) {
  return bookkeepingCourseCatalog.find((c) => c.slug === slug)
}
