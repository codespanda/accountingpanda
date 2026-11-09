import { asset } from "@/lib/asset"

export type EntryRow = {
  account: string
  side: "debit" | "credit"
  amount: string
  color: "blue" | "green" | "amber"
}

export type DoubleEntryTransaction = {
  label: string
  assets: EntryRow[]
  liabEquity: EntryRow[]
  equation: { assets: string; liabilities: string; equity: string }
}

export type LessonBlock =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "steps"; items: { title: string; body?: string; list?: string[] }[] }
  | { type: "term"; term: string; definition: string; example?: string; examples?: string[] }
  | { type: "quiz"; question: string; options: string[]; answer: string }
  | { type: "double-entry-demo"; transactions: DoubleEntryTransaction[] }
  | { type: "ascii"; text: string }
  | {
      type: "knowledge-check"
      passPct: number
      questions: { question: string; options: string[]; answer: string }[]
    }

export type LessonPage = { title: string; blocks: LessonBlock[] }

// Lesson content by module index (0-based). Only modules with real
// written content appear here — modules without an entry fall back to
// their curriculum topic list on the lesson page.
export const bookkeepingBasicsLessons: Record<number, LessonPage[]> = {
  0: [
    {
      title: "Module 1 — Introduction to Bookkeeping",
      blocks: [
        { type: "h3", text: "Module Overview" },
        {
          type: "p",
          text: "Welcome to Module 1: Introduction to Bookkeeping, the first step in your journey toward becoming a confident bookkeeper.",
        },
        {
          type: "p",
          text: "Bookkeeping is the foundation of financial management for every business. Whether a business is a small online store, a restaurant, a consulting firm, a freelancer, or a large corporation, it needs accurate financial records to understand where money comes from, where it goes, what it owns, and what it owes.",
        },
        {
          type: "p",
          text: "In this module, you will build a strong understanding of the purpose, principles, processes, and terminology of bookkeeping before moving into journal entries, ledgers, reconciliations, and financial statements in later modules.",
        },
        { type: "h3", text: "By the End of This Module" },
        { type: "p", text: "Check these off as you go — you'll be able to:" },
        {
          type: "list",
          items: [
            "Explain what bookkeeping is and why it matters",
            "Describe the difference between bookkeeping and accounting",
            "Walk through the bookkeeping cycle",
            "Explain what a bookkeeper does day-to-day",
            "Tell single-entry and double-entry bookkeeping apart",
            "Spot common beginner bookkeeping mistakes",
          ],
        },
      ],
    },
    {
      title: "What Is Bookkeeping?",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "Bookkeeping is the systematic process of recording, organizing, classifying, and maintaining a business's financial transactions.",
        },
        {
          type: "p",
          text: "A financial transaction occurs whenever money or something with monetary value moves into, out of, or within a business.",
        },
        { type: "p", text: "Examples include:" },
        {
          type: "list",
          items: [
            "A customer purchases a product.",
            "A business pays rent.",
            "A company purchases office equipment.",
            "An employee receives a salary.",
            "A customer pays an outstanding invoice.",
            "A business receives a bank loan.",
            "The owner invests money into the business.",
            "The business pays a supplier.",
          ],
        },
        {
          type: "p",
          text: "A bookkeeper records these transactions in an organized manner so that the business can later use the information to prepare reports and make decisions.",
        },
        {
          type: "image",
          src: asset("assets/lesson-what-is-bookkeeping.jpg"),
          alt: "Infographic: What Is Bookkeeping? — examples of transactions and a simple ABC Consulting example",
        },
        { type: "h3", text: "Simple Example" },
        {
          type: "p",
          text: "Suppose ABC Consulting starts business with $100,000 in cash.",
        },
        { type: "p", text: "The bookkeeper records the transaction:" },
        {
          type: "note",
          text: "Business receives $100,000 from the owner → financial transaction recorded.",
        },
        { type: "p", text: "Later, ABC Consulting:" },
        {
          type: "list",
          items: [
            "Pays $20,000 office rent",
            "Purchases a laptop for $50,000",
            "Receives $30,000 from a customer",
          ],
        },
        { type: "p", text: "The bookkeeper records each transaction." },
        {
          type: "p",
          text: "At the end of the month, the business can determine:",
        },
        {
          type: "list",
          items: [
            "How much cash it has",
            "How much revenue it earned",
            "How much it spent",
            "What customers owe",
            "What it owes suppliers",
            "What assets it owns",
          ],
        },
        { type: "note", text: "This is the fundamental purpose of bookkeeping." },
      ],
    },
    {
      title: "Why Is Bookkeeping Important?",
      blocks: [
        {
          type: "p",
          text: "Imagine running a business for an entire year without recording any transactions.",
        },
        {
          type: "p",
          text: "You might know that money came into the bank account, but you may not know:",
        },
        {
          type: "list",
          items: [
            "Which customers paid?",
            "Which invoices are still unpaid?",
            "How much was spent on advertising?",
            "How much was spent on rent?",
            "How much is owed to suppliers?",
            "Did the business actually make a profit?",
            "How much cash is available?",
            "Which expenses are increasing?",
            "Are there any unusual transactions?",
          ],
        },
        { type: "note", text: "Accurate bookkeeping answers these questions." },
        {
          type: "image",
          src: asset("assets/lesson-importance-of-bookkeeping.jpg"),
          alt: "Infographic: transaction types (sales, expenses, payments) and a bookkeeping dashboard recording and organizing transactions",
        },
        { type: "h3", text: "Major Benefits of Bookkeeping" },
        {
          type: "steps",
          items: [
            {
              title: "Know Your Financial Position",
              body: "Bookkeeping helps a business understand its:",
              list: ["Assets", "Liabilities", "Equity", "Revenue", "Expenses", "Profit or loss"],
            },
            {
              title: "Track Income and Expenses",
              body: "A business can see exactly how much money it earned and how much it spent.",
            },
            {
              title: "Manage Cash Flow",
              body: "Good bookkeeping helps businesses monitor cash coming in and going out.",
            },
            {
              title: "Track Customers",
              body: "Businesses can identify unpaid customer invoices and outstanding balances.",
            },
            {
              title: "Track Suppliers",
              body: "Businesses can monitor bills that need to be paid.",
            },
            {
              title: "Prepare Financial Statements",
              body: "Bookkeeping information is used to prepare reports such as:",
              list: ["Income Statement", "Balance Sheet", "Cash Flow Statement"],
            },
            {
              title: "Support Tax and Compliance Work",
              body: "Well-maintained records provide the underlying information needed for many tax and regulatory processes.",
            },
            {
              title: "Make Better Business Decisions",
              body: "Business owners can use financial information to decide whether to:",
              list: [
                "Increase prices",
                "Reduce expenses",
                "Hire employees",
                "Purchase equipment",
                "Expand operations",
                "Take a loan",
                "Launch a new product",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "What Is Accounting?",
      blocks: [
        {
          type: "p",
          text: "Accounting is the broader process of recording, classifying, analyzing, interpreting, and communicating financial information.",
        },
        {
          type: "p",
          text: "Bookkeeping is primarily concerned with recording and organizing financial transactions.",
        },
        {
          type: "p",
          text: "Accounting goes further by using that information to understand business performance and financial position.",
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "Suppose a business records:" },
        { type: "list", items: ["Sales: $500,000", "Expenses: $350,000"] },
        { type: "p", text: "The bookkeeper ensures these transactions are properly recorded." },
        { type: "p", text: "The accountant may analyze the information and determine:" },
        {
          type: "list",
          items: [
            "Revenue trends",
            "Profitability",
            "Expense ratios",
            "Financial position",
            "Tax implications",
            "Business performance",
          ],
        },
        {
          type: "note",
          text: "So, bookkeeping provides the financial data, while accounting uses that data to produce information and analysis.",
        },
      ],
    },
    {
      title: "Bookkeeping vs. Accounting",
      blocks: [
        {
          type: "p",
          text: "Although the terms are often used together, they are not exactly the same.",
        },
        {
          type: "table",
          headers: ["Bookkeeping", "Accounting"],
          rows: [
            ["Records financial transactions", "Analyzes financial information"],
            ["Maintains financial records", "Interprets financial information"],
            ["Posts transactions", "Prepares and analyzes reports"],
            ["Maintains ledgers", "Reviews financial performance"],
            ["Performs reconciliations", "Uses reports for decision-making"],
            ["Focuses heavily on accuracy of records", "Focuses on analysis and reporting"],
            ["Provides data", "Turns data into useful information"],
          ],
        },
        { type: "h3", text: "Easy Way to Remember" },
        { type: "note", text: "Bookkeeping = Recording the financial story" },
        { type: "note", text: "Accounting = Understanding and interpreting the financial story" },
        { type: "h3", text: "Quick Check" },
        {
          type: "quiz",
          question: "Which of these is a bookkeeping task rather than an accounting task?",
          options: [
            "A. Analyzing profitability trends",
            "B. Reconciling a bank statement",
            "C. Preparing a financial forecast",
            "D. Advising on tax strategy",
          ],
          answer: "B",
        },
      ],
    },
    {
      title: "The Bookkeeping Cycle",
      blocks: [
        {
          type: "p",
          text: "Bookkeeping is not simply entering transactions into a spreadsheet.",
        },
        { type: "p", text: "It follows a process." },
        { type: "h3", text: "Basic Bookkeeping Cycle" },
        {
          type: "note",
          text: "Transaction → Source Document → Record → Classify → Reconcile → Review → Report",
        },
        { type: "p", text: "For example:" },
        { type: "p", text: "A customer purchases goods for $10,000." },
        {
          type: "steps",
          items: [
            { title: "Transaction occurs", body: "Customer buys goods." },
            { title: "Source document", body: "An invoice or receipt is created." },
            { title: "Record", body: "The transaction is entered into the bookkeeping system." },
            { title: "Classify", body: "The transaction is assigned to appropriate accounts." },
            {
              title: "Reconcile",
              body: "The related payment can later be matched with the bank or payment record.",
            },
            { title: "Review", body: "The bookkeeper checks for errors." },
            { title: "Report", body: "The transaction contributes to financial reports." },
          ],
        },
        { type: "p", text: "This process will become increasingly detailed throughout the course." },
      ],
    },
    {
      title: "What Does a Bookkeeper Do?",
      blocks: [
        {
          type: "p",
          text: "A bookkeeper is responsible for maintaining accurate and organized financial records.",
        },
        {
          type: "p",
          text: "The exact responsibilities vary depending on the business, but common duties include:",
        },
        { type: "h3", text: "Recording Transactions" },
        { type: "p", text: "Recording:" },
        { type: "list", items: ["Sales", "Purchases", "Expenses", "Payments", "Receipts", "Deposits", "Withdrawals"] },
        { type: "h3", text: "Managing Accounts Receivable" },
        { type: "p", text: "Tracking:" },
        {
          type: "list",
          items: ["Customer invoices", "Customer payments", "Outstanding balances", "Overdue invoices"],
        },
        { type: "h3", text: "Managing Accounts Payable" },
        { type: "p", text: "Tracking:" },
        { type: "list", items: ["Supplier bills", "Payments", "Outstanding balances", "Due dates"] },
        { type: "h3", text: "Bank Reconciliation" },
        {
          type: "p",
          text: "Comparing the business's bookkeeping records with bank statements.",
        },
        { type: "h3", text: "Maintaining the General Ledger" },
        { type: "p", text: "Ensuring transactions are posted to the correct accounts." },
        { type: "h3", text: "Preparing Basic Reports" },
        { type: "p", text: "A bookkeeper may prepare:" },
        {
          type: "list",
          items: [
            "Trial balances",
            "Account summaries",
            "Receivables reports",
            "Payables reports",
            "Cash reports",
            "Preliminary financial statements",
          ],
        },
        { type: "h3", text: "Maintaining Documentation" },
        {
          type: "p",
          text: "A bookkeeper should maintain appropriate supporting documents for transactions.",
        },
      ],
    },
    {
      title: "Skills of a Good Bookkeeper",
      blocks: [
        { type: "p", text: "A successful bookkeeper needs more than basic mathematics." },
        { type: "h3", text: "Important Skills" },
        {
          type: "steps",
          items: [
            { title: "Accuracy", body: "Small mistakes can affect financial reports." },
            { title: "Attention to detail", body: "Bookkeepers frequently work with large numbers of transactions." },
            { title: "Organization", body: "Documents and transactions must be easy to locate and review." },
            { title: "Consistency", body: "Transactions should be recorded according to established procedures." },
            { title: "Confidentiality", body: "Financial information is sensitive business information." },
            { title: "Technology skills", body: "Modern bookkeepers commonly use spreadsheets and accounting software." },
            { title: "Problem-solving", body: "A bookkeeper must investigate unusual or incorrect transactions." },
            {
              title: "Communication",
              body: "Bookkeepers often communicate with business owners, customers, suppliers, accountants, and other employees.",
            },
          ],
        },
      ],
    },
    {
      title: "Types of Bookkeeping",
      blocks: [
        { type: "p", text: "There are two traditional approaches beginners should understand:" },
        { type: "list", items: ["Single-entry bookkeeping", "Double-entry bookkeeping"] },
        { type: "h3", text: "Single-Entry Bookkeeping" },
        {
          type: "p",
          text: "Single-entry bookkeeping records transactions primarily as individual income and expense entries rather than maintaining a complete double-sided accounting system.",
        },
        {
          type: "p",
          text: "It may be used by very small businesses or individuals with relatively simple financial activities.",
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "A freelancer receives $25,000 from a customer." },
        { type: "p", text: "A simple record might be:" },
        {
          type: "table",
          headers: ["Date", "Description", "Income"],
          rows: [["02 Sept", "Client payment", "$25,000"]],
        },
        { type: "p", text: "If the freelancer pays $5,000 for software:" },
        {
          type: "table",
          headers: ["Date", "Description", "Expense"],
          rows: [["04 Sept", "Software expense", "$5,000"]],
        },
        { type: "p", text: "The records can provide a basic view of income and expenses." },
        { type: "h3", text: "Limitations" },
        { type: "p", text: "Single-entry systems generally provide less complete information about:" },
        {
          type: "list",
          items: ["Assets", "Liabilities", "Equity", "Receivables", "Payables", "Complete financial position"],
        },
        {
          type: "p",
          text: "For this reason, businesses that need comprehensive accounting records generally use double-entry bookkeeping.",
        },
        { type: "h3", text: "Double-Entry Bookkeeping" },
        {
          type: "p",
          text: "Double-entry bookkeeping records every transaction with at least two corresponding entries.",
        },
        { type: "p", text: "The fundamental principle is that the accounting records remain balanced." },
        { type: "p", text: "For example, suppose a business purchases a laptop for $50,000 using cash." },
        { type: "p", text: "Two accounts are affected:" },
        {
          type: "list",
          items: ["Equipment increases by $50,000", "Cash decreases by $50,000"],
        },
        { type: "p", text: "The transaction therefore has two sides." },
        { type: "h3", text: "Worked Example: See How a Transaction Balances" },
        {
          type: "p",
          text: "Use the selector below to see how different transactions affect Assets, Liabilities, and Owner's equity — the two sides always balance.",
        },
        {
          type: "double-entry-demo",
          transactions: [
            {
              label: "Owner invests cash in the business",
              assets: [{ account: "Cash", side: "debit", amount: "$10,000", color: "blue" }],
              liabEquity: [
                { account: "Owner's Capital", side: "credit", amount: "$10,000", color: "green" },
              ],
              equation: { assets: "+$10,000", liabilities: "$0", equity: "+$10,000" },
            },
            {
              label: "Buy equipment with cash",
              assets: [
                { account: "Equipment", side: "debit", amount: "$4,000", color: "blue" },
                { account: "Cash", side: "credit", amount: "$4,000", color: "blue" },
              ],
              liabEquity: [],
              equation: { assets: "$0", liabilities: "$0", equity: "$0" },
            },
            {
              label: "Buy supplies on account",
              assets: [{ account: "Supplies", side: "debit", amount: "$1,200", color: "blue" }],
              liabEquity: [
                { account: "Accounts Payable", side: "credit", amount: "$1,200", color: "amber" },
              ],
              equation: { assets: "+$1,200", liabilities: "+$1,200", equity: "$0" },
            },
            {
              label: "Pay accounts payable with cash",
              assets: [{ account: "Cash", side: "credit", amount: "$1,200", color: "blue" }],
              liabEquity: [
                { account: "Accounts Payable", side: "debit", amount: "$1,200", color: "amber" },
              ],
              equation: { assets: "-$1,200", liabilities: "-$1,200", equity: "$0" },
            },
          ],
        },
        {
          type: "p",
          text: "This concept becomes extremely important when you learn debits and credits in Module 4.",
        },
        { type: "h3", text: "Why Double-Entry Bookkeeping Is Important" },
        { type: "p", text: "It helps businesses:" },
        {
          type: "list",
          items: [
            "Maintain complete records",
            "Track assets and liabilities",
            "Detect certain errors",
            "Prepare financial statements",
            "Understand financial position",
            "Maintain a systematic accounting structure",
          ],
        },
      ],
    },
    {
      title: "Manual vs. Computerized Bookkeeping",
      blocks: [
        { type: "p", text: "Bookkeeping can be performed manually or with software." },
        { type: "h3", text: "Manual Bookkeeping" },
        { type: "p", text: "Manual bookkeeping may use:" },
        {
          type: "list",
          items: ["Paper journals", "Physical ledgers", "Calculators", "Printed invoices", "Spreadsheet files"],
        },
        { type: "h3", text: "Advantages" },
        {
          type: "list",
          items: ["Simple to understand", "Low technology requirement", "Useful for learning bookkeeping concepts"],
        },
        { type: "h3", text: "Disadvantages" },
        {
          type: "list",
          items: [
            "Time-consuming",
            "Greater risk of data-entry errors",
            "Difficult to manage large transaction volumes",
            "Reporting can be slower",
            "Data can be difficult to search",
          ],
        },
        { type: "h3", text: "Computerized Bookkeeping" },
        { type: "p", text: "Modern businesses commonly use accounting software." },
        { type: "p", text: "Examples include:" },
        {
          type: "list",
          items: ["QuickBooks", "Xero", "Zoho Books", "Sage", "Wave", "Excel or Google Sheets for simpler workflows"],
        },
        { type: "p", text: "Computerized systems can help with:" },
        {
          type: "list",
          items: [
            "Invoice creation",
            "Expense recording",
            "Bank feeds",
            "Reconciliation",
            "Customer management",
            "Supplier management",
            "Financial reports",
            "Automated calculations",
          ],
        },
        { type: "h3", text: "Important Principle" },
        { type: "p", text: "Software does not eliminate the need for bookkeeping knowledge." },
        {
          type: "p",
          text: "A bookkeeper still needs to understand: what should be recorded, which account should be used, and whether the resulting information is correct.",
        },
        {
          type: "note",
          text: "Automation can make bookkeeping faster, but incorrect information entered into a system can still produce incorrect results.",
        },
      ],
    },
    {
      title: "Bookkeeping in Small Businesses",
      blocks: [
        {
          type: "p",
          text: "Bookkeeping is especially important for small businesses because owners often have limited financial resources and need to closely monitor cash flow.",
        },
        { type: "p", text: "Consider a small bakery." },
        { type: "p", text: "During one month it may have:" },
        { type: "h3", text: "Income" },
        { type: "list", items: ["Cake sales", "Bread sales", "Catering income"] },
        { type: "h3", text: "Expenses" },
        {
          type: "list",
          items: ["Rent", "Ingredients", "Electricity", "Employee wages", "Packaging", "Advertising", "Delivery expenses"],
        },
        { type: "h3", text: "Other Transactions" },
        {
          type: "list",
          items: ["Equipment purchases", "Bank payments", "Supplier bills", "Customer credit sales"],
        },
        {
          type: "note",
          text: "Without organized bookkeeping, the owner may struggle to understand whether the bakery is actually profitable.",
        },
      ],
    },
    {
      title: "Example: Bookkeeping for a Small Business",
      blocks: [
        { type: "p", text: "Let's create a fictional company:" },
        { type: "h3", text: "ABC Design Services" },
        { type: "p", text: "The business provides graphic design services." },
        { type: "p", text: "During September, the following transactions occur:" },
        {
          type: "table",
          headers: ["Date", "Transaction", "Amount"],
          rows: [
            ["Sept 1", "Owner invests cash", "$100,000"],
            ["Sept 2", "Office rent paid", "$15,000"],
            ["Sept 4", "Computer purchased", "$40,000"],
            ["Sept 8", "Customer invoice issued", "$25,000"],
            ["Sept 15", "Customer pays", "$25,000"],
            ["Sept 20", "Internet expense paid", "$2,000"],
            ["Sept 25", "Advertising expense paid", "$5,000"],
          ],
        },
        {
          type: "p",
          text: "The bookkeeper records each transaction and maintains the appropriate accounts.",
        },
        { type: "p", text: "At the end of the period, the business can begin answering questions such as:" },
        {
          type: "list",
          items: [
            "How much cash remains?",
            "How much revenue was earned?",
            "What expenses were incurred?",
            "What equipment does the business own?",
            "Are customers still owing money?",
            "Is the business profitable?",
          ],
        },
        {
          type: "note",
          text: "These questions will be answered through the bookkeeping and accounting process.",
        },
      ],
    },
    {
      title: "Common Bookkeeping Terminology",
      blocks: [
        {
          type: "p",
          text: "Before moving forward, learners should become comfortable with basic bookkeeping vocabulary.",
        },
        { type: "term", term: "Transaction", definition: "A financial event that affects a business's financial records.", example: "Paying $10,000 rent." },
        { type: "term", term: "Account", definition: "A record used to track a particular type of financial activity.", example: "Cash Account." },
        {
          type: "term",
          term: "Asset",
          definition: "Something of economic value controlled or owned by a business.",
          examples: ["Cash", "Bank balance", "Equipment", "Vehicles", "Inventory", "Accounts receivable"],
        },
        {
          type: "term",
          term: "Liability",
          definition: "An obligation or amount owed by a business.",
          examples: ["Loans", "Accounts payable", "Accrued expenses"],
        },
        {
          type: "term",
          term: "Equity",
          definition: "The owner's residual interest in the business after liabilities are deducted from assets.",
        },
        { type: "term", term: "Revenue", definition: "Income earned from providing goods or services." },
        {
          type: "term",
          term: "Expense",
          definition: "A cost incurred in operating a business.",
          examples: ["Rent", "Salaries", "Utilities", "Advertising"],
        },
        { type: "term", term: "Accounts Receivable", definition: "Money owed to a business by its customers." },
        { type: "term", term: "Accounts Payable", definition: "Money a business owes to suppliers or other creditors." },
        { type: "term", term: "Invoice", definition: "A document requesting payment for goods or services provided." },
        { type: "term", term: "Receipt", definition: "Evidence that a payment has been received or a transaction has occurred." },
        { type: "term", term: "General Ledger", definition: "A collection of accounts containing the financial activity of a business." },
        { type: "term", term: "Journal", definition: "A record where transactions are initially recorded." },
        {
          type: "term",
          term: "Trial Balance",
          definition: "A report listing ledger account balances to help check whether total debits equal total credits.",
        },
        { type: "term", term: "Financial Statement", definition: "A formal report presenting financial information about a business." },
      ],
    },
    {
      title: "The Role of Accuracy in Bookkeeping",
      blocks: [
        { type: "p", text: "Accuracy is one of the most important qualities of bookkeeping." },
        { type: "p", text: "Consider this example:" },
        { type: "p", text: "A business actually pays $12,500 for rent, but the bookkeeper records $21,500." },
        { type: "p", text: "The difference is $9,000." },
        { type: "p", text: "That error can affect:" },
        {
          type: "list",
          items: ["Expense totals", "Profit", "Cash records", "Financial statements", "Management decisions"],
        },
        { type: "p", text: "This is why bookkeepers use processes such as:" },
        {
          type: "list",
          items: [
            "Bank reconciliation",
            "Document verification",
            "Transaction review",
            "Account reconciliation",
            "Approval procedures",
            "Periodic reporting",
          ],
        },
      ],
    },
    {
      title: "Common Beginner Bookkeeping Mistakes",
      blocks: [
        { type: "p", text: "Beginners commonly make mistakes such as:" },
        {
          type: "steps",
          items: [
            { title: "Recording the Wrong Amount", body: "Entering $15,000 instead of $1,500." },
            { title: "Using the Wrong Account", body: "Recording an equipment purchase as an office expense." },
            { title: "Forgetting Transactions", body: "Failing to record a bank charge or customer payment." },
            { title: "Recording Personal Expenses as Business Expenses", body: "Mixing personal and business transactions." },
            { title: "Duplicate Entries", body: "Recording the same transaction twice." },
            {
              title: "Not Reconciling Bank Accounts",
              body: "Assuming the bookkeeping balance is correct without comparing it to the bank statement.",
            },
            {
              title: "Poor Documentation",
              body: "Recording transactions without retaining appropriate supporting documents.",
            },
          ],
        },
      ],
    },
    {
      title: "Bookkeeping and Business Decision-Making",
      blocks: [
        { type: "p", text: "Bookkeeping is not simply an administrative task." },
        { type: "p", text: "Good financial records can help business owners answer important questions." },
        {
          type: "steps",
          items: [
            { title: "Are sales increasing?", body: "Bookkeeping records provide sales information." },
            { title: "Which expenses are increasing?", body: "Expense records can reveal changes over time." },
            { title: "Who owes us money?", body: "Accounts receivable records provide this information." },
            { title: "Who do we owe?", body: "Accounts payable records provide this information." },
            { title: "How much cash do we have?", body: "Cash and bank records provide the information." },
            { title: "Are we profitable?", body: "Financial statements can help answer this." },
          ],
        },
        {
          type: "note",
          text: "This is why accurate bookkeeping is an important foundation for financial management.",
        },
      ],
    },
    {
      title: "Modern Bookkeeping and Automation",
      blocks: [
        { type: "p", text: "Bookkeeping has evolved significantly." },
        { type: "p", text: "Traditional bookkeeping involved manually entering almost every transaction." },
        { type: "p", text: "Modern systems can automate parts of the process." },
        { type: "h3", text: "Examples" },
        {
          type: "steps",
          items: [
            { title: "Bank feeds", body: "Transactions can be imported from bank accounts." },
            { title: "Invoice automation", body: "Invoices can be generated and tracked automatically." },
            { title: "OCR", body: "Documents can be scanned and information extracted." },
            { title: "Transaction categorization", body: "Software can suggest categories for transactions." },
            { title: "Automated reconciliation", body: "Systems can match transactions against bank records." },
            {
              title: "AI-assisted bookkeeping",
              body: "AI can help identify patterns, classify transactions, extract invoice information, and flag unusual entries.",
            },
          ],
        },
        {
          type: "note",
          text: "However, a trained bookkeeper should still review important transactions and exceptions.",
        },
      ],
    },
    {
      title: "Bookkeeper's Daily Workflow",
      blocks: [
        { type: "p", text: "A typical bookkeeping workflow may look like this:" },
        { type: "h3", text: "Morning" },
        { type: "list", items: ["Review bank transactions", "Check new customer payments", "Review supplier bills"] },
        { type: "h3", text: "During the Day" },
        {
          type: "list",
          items: ["Record transactions", "Process invoices", "Enter expenses", "Update customer accounts", "Update supplier accounts"],
        },
        { type: "h3", text: "End of Day/Period" },
        { type: "list", items: ["Review entries", "Check supporting documents", "Reconcile transactions", "Resolve discrepancies"] },
        { type: "h3", text: "Month-End" },
        {
          type: "list",
          items: ["Complete bank reconciliation", "Review receivables", "Review payables", "Record adjustments", "Review accounts", "Prepare reports"],
        },
        { type: "p", text: "The exact workflow depends on the business." },
      ],
    },
    {
      title: "Practical Activity — Create a Simple Financial Record",
      blocks: [
        { type: "p", text: "Now it is time to apply what you have learned." },
        { type: "h3", text: "Scenario" },
        { type: "p", text: "You are the bookkeeper for:" },
        { type: "note", text: "Bright Solutions" },
        { type: "p", text: "The business starts the month with $50,000 cash." },
        { type: "p", text: "During the month:" },
        {
          type: "list",
          items: [
            "Owner invests an additional $25,000.",
            "Business pays $10,000 office rent.",
            "Business purchases a laptop for $35,000.",
            "Business earns $20,000 from a customer.",
            "Business pays $3,000 for internet and utilities.",
            "Business receives another $15,000 from a customer.",
          ],
        },
        { type: "h3", text: "Your Task" },
        { type: "p", text: "Create a simple transaction record." },
        {
          type: "table",
          headers: ["Date", "Transaction", "Money In", "Money Out", "Balance"],
          rows: [
            ["Opening", "Starting cash", "—", "—", "$50,000"],
            ["1", "Owner investment", "$25,000", "—", "$75,000"],
            ["2", "Office rent", "—", "$10,000", "$65,000"],
            ["3", "Laptop purchase", "—", "$35,000", "$30,000"],
            ["4", "Customer payment", "$20,000", "—", "$50,000"],
            ["5", "Internet/utilities", "—", "$3,000", "$47,000"],
            ["6", "Customer payment", "$15,000", "—", "$62,000"],
          ],
        },
        { type: "h3", text: "Activity Questions" },
        { type: "p", text: "Answer the following:" },
        {
          type: "list",
          items: [
            "What was the total money received?",
            "What was the total money paid out?",
            "What is the ending cash balance?",
            "Which transaction represents an asset purchase?",
            "Which transactions represent business expenses?",
            "Which transaction represents owner's investment?",
            "Which transactions represent revenue?",
          ],
        },
      ],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "p",
          text: "Answer all 5 questions, then check your score. You'll need at least 80% to move on — if you don't make it, you can retry.",
        },
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "What is bookkeeping?",
              options: [
                "A. Preparing business advertisements",
                "B. Recording and organizing financial transactions",
                "C. Hiring employees",
                "D. Selling products",
              ],
              answer: "B",
            },
            {
              question: "Which is an example of an asset?",
              options: ["A. Bank loan", "B. Rent expense", "C. Office equipment", "D. Supplier payable"],
              answer: "C",
            },
            {
              question: "What is accounts receivable?",
              options: [
                "A. Money the business owes suppliers",
                "B. Money customers owe the business",
                "C. Employee salaries",
                "D. Business expenses",
              ],
              answer: "B",
            },
            {
              question: "What is accounts payable?",
              options: [
                "A. Money customers owe the business",
                "B. Business revenue",
                "C. Money the business owes suppliers",
                "D. Owner investment",
              ],
              answer: "C",
            },
            {
              question: "Which system records the two sides of a transaction?",
              options: [
                "A. Single-entry bookkeeping",
                "B. Double-entry bookkeeping",
                "C. Cash-only bookkeeping",
                "D. Personal bookkeeping",
              ],
              answer: "B",
            },
          ],
        },
      ],
    },
    {
      title: "Module Summary",
      blocks: [
        {
          type: "p",
          text: "In this module, you learned that bookkeeping is the foundation of a business's financial recordkeeping system.",
        },
        { type: "p", text: "You learned:" },
        {
          type: "list",
          items: [
            "What bookkeeping means",
            "Why bookkeeping is important",
            "What accounting means",
            "The difference between bookkeeping and accounting",
            "The bookkeeping cycle",
            "The role of a bookkeeper",
            "Skills required by bookkeepers",
            "Single-entry bookkeeping",
            "Double-entry bookkeeping",
            "Manual bookkeeping",
            "Computerized bookkeeping",
            "Bookkeeping in small businesses",
            "Common bookkeeping terminology",
            "Common bookkeeping mistakes",
            "The role of bookkeeping in business decisions",
            "Modern bookkeeping and automation",
          ],
        },
        { type: "h3", text: "Key Concept to Remember" },
        {
          type: "note",
          text: "Accurate bookkeeping creates reliable financial information. Reliable financial information supports better business decisions.",
        },
      ],
    },
  ],
  1: [
    {
      title: "Module 2 — Understanding the Accounting Equation",
      blocks: [
        { type: "h3", text: "Goal" },
        {
          type: "p",
          text: "Learn the foundation behind every accounting transaction and understand how each transaction changes a business's financial position.",
        },
        { type: "h3", text: "What You'll Cover" },
        {
          type: "list",
          items: [
            "Assets",
            "Liabilities",
            "Owner's equity",
            "The accounting equation",
            "Current assets",
            "Fixed assets",
            "Current liabilities",
            "Long-term liabilities",
            "Owner's capital",
            "Drawings",
            "How transactions affect the accounting equation",
          ],
        },
      ],
    },
    {
      title: "What Is the Accounting Equation?",
      blocks: [
        {
          type: "p",
          text: "The accounting equation is the foundation of double-entry bookkeeping. It shows the relationship between everything a business owns, everything it owes, and the owner's interest in the business.",
        },
        { type: "h3", text: "The Basic Formula" },
        { type: "note", text: "Assets = Liabilities + Owner's Equity" },
        {
          type: "p",
          text: "The equation must always remain balanced after every business transaction.",
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "Suppose the owner starts a business by investing $100,000." },
        {
          type: "list",
          items: ["Assets = $100,000 cash", "Liabilities = $0", "Owner's Equity = $100,000"],
        },
        { type: "p", text: "Therefore:" },
        { type: "note", text: "$100,000 = $0 + $100,000" },
        { type: "p", text: "The equation is balanced." },
      ],
    },
    {
      title: "Assets",
      blocks: [
        {
          type: "p",
          text: "An asset is something of value that a business owns or controls and expects to provide future economic benefit.",
        },
        { type: "h3", text: "Examples of Assets" },
        {
          type: "list",
          items: [
            "Cash",
            "Bank balance",
            "Accounts receivable",
            "Inventory",
            "Office equipment",
            "Computers",
            "Furniture",
            "Vehicles",
            "Buildings",
            "Land",
          ],
        },
        { type: "h3", text: "Simple Example" },
        { type: "p", text: "A business has:" },
        {
          type: "table",
          headers: ["Asset", "Amount"],
          rows: [
            ["Cash", "$50,000"],
            ["Computer", "$40,000"],
            ["Furniture", "$10,000"],
            ["Total Assets", "$100,000"],
          ],
        },
        { type: "p", text: "The business has $100,000 worth of assets." },
      ],
    },
    {
      title: "Current Assets",
      blocks: [
        {
          type: "p",
          text: "Current assets are assets that are expected to be converted into cash, sold, or used within the normal operating cycle, generally within one year.",
        },
        { type: "h3", text: "Common Current Assets" },
        {
          type: "list",
          items: ["Cash", "Bank balance", "Accounts receivable", "Inventory", "Short-term investments", "Prepaid expenses"],
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "A business has:" },
        {
          type: "list",
          items: ["Cash: $30,000", "Accounts receivable: $20,000", "Inventory: $50,000"],
        },
        { type: "note", text: "Total current assets = $100,000" },
        { type: "h3", text: "Key Point" },
        {
          type: "p",
          text: "Current assets are generally more liquid than fixed assets.",
        },
      ],
    },
    {
      title: "Fixed Assets",
      blocks: [
        {
          type: "p",
          text: "Fixed assets, also called non-current assets or property, plant and equipment (PPE), are assets used by a business for a longer period rather than being purchased for immediate resale.",
        },
        { type: "h3", text: "Examples" },
        {
          type: "list",
          items: ["Land", "Buildings", "Machinery", "Vehicles", "Furniture", "Computers", "Office equipment"],
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "A company purchases a computer for $60,000 for use in its office." },
        { type: "p", text: "The computer becomes a business asset." },
        {
          type: "p",
          text: "It is not treated as an expense simply because money was paid for it.",
        },
      ],
    },
    {
      title: "Liabilities",
      blocks: [
        {
          type: "p",
          text: "A liability is an amount that a business owes to another person or organization.",
        },
        { type: "note", text: "Liabilities are the business's obligations or debts." },
        { type: "h3", text: "Examples" },
        {
          type: "list",
          items: ["Accounts payable", "Bank loans", "Salaries payable", "Taxes payable", "Rent payable", "Interest payable"],
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "A business purchases equipment for $100,000 on credit." },
        { type: "p", text: "The business now owes the supplier $100,000." },
        { type: "p", text: "Therefore:" },
        { type: "note", text: "Liability = $100,000" },
      ],
    },
    {
      title: "Current Liabilities",
      blocks: [
        {
          type: "p",
          text: "Current liabilities are obligations that are generally expected to be paid within one year or the normal operating cycle.",
        },
        { type: "h3", text: "Examples" },
        {
          type: "list",
          items: ["Accounts payable", "Short-term loans", "Salaries payable", "Taxes payable", "Rent payable", "Accrued expenses"],
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "A business owes a supplier $25,000 for inventory purchased on credit." },
        { type: "note", text: "Accounts Payable = $25,000" },
        { type: "p", text: "This is a current liability." },
      ],
    },
    {
      title: "Long-Term Liabilities",
      blocks: [
        {
          type: "p",
          text: "Long-term liabilities are obligations that are generally payable beyond one year.",
        },
        { type: "h3", text: "Examples" },
        {
          type: "list",
          items: ["Long-term bank loans", "Mortgage loans", "Long-term notes payable", "Certain lease obligations"],
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "A business takes a five-year bank loan of $500,000." },
        { type: "note", text: "The loan represents a long-term liability." },
      ],
    },
    {
      title: "Owner's Equity",
      blocks: [
        {
          type: "p",
          text: "Owner's equity represents the owner's financial interest in the business after liabilities are deducted from assets.",
        },
        { type: "h3", text: "Formula" },
        { type: "note", text: "Owner's Equity = Assets − Liabilities" },
        { type: "p", text: "For example:" },
        { type: "list", items: ["Assets = $500,000", "Liabilities = $200,000"] },
        { type: "p", text: "Therefore:" },
        { type: "note", text: "Owner's Equity = $500,000 − $200,000 = $300,000" },
        { type: "p", text: "The owner has $300,000 of equity in the business." },
      ],
    },
    {
      title: "Owner's Capital",
      blocks: [
        {
          type: "p",
          text: "Owner's capital represents money or other assets invested by the owner into the business.",
        },
        { type: "h3", text: "Example" },
        { type: "p", text: "The owner invests $200,000 cash to start a business." },
        { type: "p", text: "The transaction creates:" },
        { type: "list", items: ["Cash ↑ $200,000", "Owner's Capital ↑ $200,000"] },
        { type: "p", text: "Accounting equation:" },
        { type: "note", text: "Assets $200,000 = Liabilities $0 + Owner's Equity $200,000" },
      ],
    },
    {
      title: "Drawings",
      blocks: [
        {
          type: "p",
          text: "Drawings are cash or other assets withdrawn by the owner for personal use.",
        },
        { type: "p", text: "Drawings reduce owner's equity." },
        { type: "h3", text: "Example" },
        { type: "p", text: "The owner withdraws $10,000 from the business bank account for personal expenses." },
        { type: "p", text: "Impact:" },
        { type: "list", items: ["Cash ↓ $10,000", "Owner's Equity ↓ $10,000"] },
        { type: "note", text: "Drawings are not a business expense." },
      ],
    },
    {
      title: "Understanding the Accounting Equation",
      blocks: [
        { type: "p", text: "The equation can be visualized as:" },
        {
          type: "ascii",
          text: `                 ACCOUNTING EQUATION

       ┌─────────────────────────────┐
       │           ASSETS            │
       │                             │
       │     What the business       │
       │          owns               │
       └──────────────┬──────────────┘
                       │
                       │ =
                       ▼
       ┌─────────────────────────────┐
       │     LIABILITIES +           │
       │     OWNER'S EQUITY          │
       │                             │
       │ What business owes +        │
       │ owner's interest            │
       └─────────────────────────────┘`,
        },
        { type: "h3", text: "Another Way to Think About It" },
        { type: "p", text: "Every business's assets have two sources:" },
        {
          type: "list",
          items: [
            "Money borrowed from others → Liabilities",
            "Money provided by the owner + accumulated business results → Owner's Equity",
          ],
        },
        { type: "p", text: "Therefore:" },
        { type: "note", text: "Assets = Sources of Finance" },
      ],
    },
    {
      title: "How Transactions Affect the Accounting Equation",
      blocks: [
        {
          type: "p",
          text: "The most important bookkeeping skill is understanding how transactions affect the equation.",
        },
        { type: "h3", text: "Transaction 1 — Owner Invests Cash" },
        { type: "p", text: "Owner invests $100,000." },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["+$100,000", "—", "+$100,000"]],
        },
        { type: "p", text: "Equation:" },
        { type: "note", text: "$100,000 = $0 + $100,000" },

        { type: "h3", text: "Transaction 2 — Purchase Equipment for Cash" },
        { type: "p", text: "The business purchases equipment for $30,000 cash." },
        { type: "list", items: ["Equipment ↑ $30,000", "Cash ↓ $30,000"] },
        { type: "p", text: "Total assets remain unchanged." },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [
            ["Equipment +$30,000", "—", "—"],
            ["Cash −$30,000", "", ""],
          ],
        },
        { type: "note", text: "Total assets: No change" },

        { type: "h3", text: "Transaction 3 — Purchase Inventory on Credit" },
        { type: "p", text: "The business purchases inventory worth $20,000 on credit." },
        { type: "list", items: ["Inventory ↑ $20,000", "Accounts Payable ↑ $20,000"] },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["+$20,000", "+$20,000", "—"]],
        },
        { type: "note", text: "Both sides increase by $20,000." },

        { type: "h3", text: "Transaction 4 — Pay Supplier" },
        { type: "p", text: "The business pays $5,000 to a supplier." },
        { type: "list", items: ["Cash ↓ $5,000", "Accounts Payable ↓ $5,000"] },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["−$5,000", "−$5,000", "—"]],
        },
        { type: "note", text: "The equation remains balanced." },

        { type: "h3", text: "Transaction 5 — Earn Revenue in Cash" },
        { type: "p", text: "The business earns $15,000 cash from providing services." },
        { type: "list", items: ["Cash ↑ $15,000", "Revenue increases owner's equity ↑ $15,000"] },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["+$15,000", "—", "+$15,000"]],
        },

        { type: "h3", text: "Transaction 6 — Pay Rent" },
        { type: "p", text: "The business pays $4,000 rent." },
        { type: "list", items: ["Cash ↓ $4,000", "Expense reduces owner's equity ↓ $4,000"] },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["−$4,000", "—", "−$4,000"]],
        },

        { type: "h3", text: "Transaction 7 — Take a Bank Loan" },
        { type: "p", text: "The business receives a bank loan of $50,000." },
        { type: "list", items: ["Cash ↑ $50,000", "Bank Loan Liability ↑ $50,000"] },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["+$50,000", "+$50,000", "—"]],
        },

        { type: "h3", text: "Transaction 8 — Owner Withdraws Cash" },
        { type: "p", text: "The owner withdraws $5,000 for personal use." },
        { type: "list", items: ["Cash ↓ $5,000", "Drawings reduce owner's equity ↓ $5,000"] },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["−$5,000", "—", "−$5,000"]],
        },

        { type: "h3", text: "Transaction 9 — Customer Pays Amount Owed" },
        { type: "p", text: "A customer pays $8,000 that was previously owed." },
        { type: "list", items: ["Cash ↑ $8,000", "Accounts Receivable ↓ $8,000"] },
        { type: "note", text: "Both are assets, so total assets do not change." },

        { type: "h3", text: "Transaction 10 — Purchase Office Furniture on Credit" },
        { type: "p", text: "The business purchases furniture worth $25,000 on credit." },
        { type: "list", items: ["Furniture ↑ $25,000", "Accounts Payable ↑ $25,000"] },
        {
          type: "table",
          headers: ["Assets", "Liabilities", "Owner's Equity"],
          rows: [["+$25,000", "+$25,000", "—"]],
        },
      ],
    },
    {
      title: "Summary of the 10 Transactions",
      blocks: [
        {
          type: "table",
          headers: ["#", "Transaction", "Assets", "Liabilities", "Equity"],
          rows: [
            ["1", "Owner invests $100,000", "↑ $100,000", "—", "↑ $100,000"],
            ["2", "Equipment purchased for cash $30,000", "No total change", "—", "—"],
            ["3", "Inventory purchased on credit $20,000", "↑ $20,000", "↑ $20,000", "—"],
            ["4", "Supplier paid $5,000", "↓ $5,000", "↓ $5,000", "—"],
            ["5", "Cash revenue $15,000", "↑ $15,000", "—", "↑ $15,000"],
            ["6", "Rent paid $4,000", "↓ $4,000", "—", "↓ $4,000"],
            ["7", "Bank loan $50,000", "↑ $50,000", "↑ $50,000", "—"],
            ["8", "Owner withdrawal $5,000", "↓ $5,000", "—", "↓ $5,000"],
            ["9", "Customer pays $8,000", "No total change", "—", "—"],
            ["10", "Furniture purchased on credit $25,000", "↑ $25,000", "↑ $25,000", "—"],
          ],
        },
      ],
    },
    {
      title: "Practical Activity",
      blocks: [
        { type: "h3", text: "Exercise" },
        {
          type: "p",
          text: "Record the following transactions for ABC Services and determine their effect on the accounting equation.",
        },
        {
          type: "steps",
          items: [
            { title: "Owner invests $200,000 cash." },
            { title: "Business purchases a laptop for $50,000 cash." },
            { title: "Business purchases office supplies worth $10,000 on credit." },
            { title: "Business receives a bank loan of $100,000." },
            { title: "Business earns $30,000 cash revenue." },
            { title: "Business pays $8,000 rent." },
            { title: "Business pays $5,000 to a supplier." },
            { title: "Owner withdraws $10,000 for personal use." },
            { title: "Business purchases furniture for $25,000 on credit." },
            { title: "Customer pays $12,000 previously owed to the business." },
          ],
        },
        { type: "h3", text: "Student Task" },
        { type: "p", text: "For each transaction, identify:" },
        {
          type: "list",
          items: [
            "A. What accounts are affected?",
            "B. Does each account increase or decrease?",
            "C. Does the transaction affect Assets, Liabilities, or Owner's Equity?",
            "D. Is the accounting equation still balanced?",
          ],
        },
      ],
    },
    {
      title: "Key Rules to Remember",
      blocks: [
        { type: "h3", text: "Assets" },
        {
          type: "list",
          items: [
            "Increase → business receives or acquires something of value.",
            "Decrease → business sells, uses, or gives up an asset.",
          ],
        },
        { type: "h3", text: "Liabilities" },
        {
          type: "list",
          items: [
            "Increase → business takes on a new obligation.",
            "Decrease → business pays or settles an obligation.",
          ],
        },
        { type: "h3", text: "Owner's Equity" },
        {
          type: "list",
          items: [
            "Increase → owner invests capital or business earns profit.",
            "Decrease → owner makes drawings or business incurs expenses/losses.",
          ],
        },
      ],
    },
    {
      title: "Important Concept: Every Transaction Has Two Sides",
      blocks: [
        {
          type: "p",
          text: "In double-entry bookkeeping, every transaction affects at least two accounts.",
        },
        { type: "p", text: "For example:" },
        { type: "p", text: "Buy equipment for $40,000 cash" },
        {
          type: "ascii",
          text: `Equipment     +$40,000
Cash          −$40,000
----------------------
Total Assets   No Change`,
        },
        { type: "p", text: "The business has simply exchanged one asset for another." },
        {
          type: "p",
          text: "This concept becomes extremely important when learners move from the accounting equation to debits and credits.",
        },
      ],
    },
    {
      title: "Visual Learning Diagram",
      blocks: [
        {
          type: "ascii",
          text: `                         BUSINESS
                            │
             ┌──────────────┴──────────────┐
             │                             │
          ASSETS                    SOURCES OF ASSETS
             │                             │
       ┌─────┴─────┐              ┌───────┴───────┐
       │           │              │               │
    Current      Fixed       Liabilities      Owner's Equity
    Assets       Assets          │               │
       │           │         ┌────┴────┐      ┌───┴────┐
       │           │       Current   Long-   Capital  Drawings
       │           │       Liabilities  term
       │           │                    │
       └───────────┴────────────────────┴──────────────┐
                                                         │
                         ACCOUNTING EQUATION             │
                                                         ▼
                    ASSETS = LIABILITIES + EQUITY`,
        },
      ],
    },
    {
      title: "Learning Outcome",
      blocks: [
        { type: "p", text: "After completing this module, learners should be able to:" },
        {
          type: "list",
          items: [
            "Define assets, liabilities, and owner's equity.",
            "Distinguish between current and fixed assets.",
            "Distinguish between current and long-term liabilities.",
            "Explain owner's capital and drawings.",
            "Apply the accounting equation.",
            "Identify how transactions affect assets, liabilities, and equity.",
            "Understand why the accounting equation must always remain balanced.",
            "Prepare a basic analysis of business transactions.",
            "Develop the foundation needed to learn debits and credits in the next stage.",
          ],
        },
      ],
    },
    {
      title: "Quick Test",
      blocks: [
        {
          type: "quiz",
          question: "A business has assets of $500,000 and liabilities of $180,000. What is the owner's equity?",
          options: ["A. $680,000", "B. $320,000", "C. $180,000", "D. $500,000"],
          answer: "B",
        },
      ],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "p",
          text: "Answer all 5 questions, then check your score. You'll need at least 80% to move on — if you don't make it, you can retry.",
        },
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "What is the accounting equation?",
              options: [
                "A. Assets = Liabilities − Owner's Equity",
                "B. Assets = Liabilities + Owner's Equity",
                "C. Liabilities = Assets + Owner's Equity",
                "D. Owner's Equity = Assets + Liabilities",
              ],
              answer: "B",
            },
            {
              question: "Which of these is a current asset?",
              options: ["A. Land", "B. Building", "C. Accounts Receivable", "D. Machinery"],
              answer: "C",
            },
            {
              question: "Which of these is a fixed asset?",
              options: ["A. Cash", "B. Inventory", "C. Office Equipment", "D. Accounts Receivable"],
              answer: "C",
            },
            {
              question: "What does a drawing do to owner's equity?",
              options: [
                "A. Increases it",
                "B. Decreases it",
                "C. Has no effect on it",
                "D. Converts it to a liability",
              ],
              answer: "B",
            },
            {
              question: "If Assets = $500,000 and Liabilities = $180,000, what is Owner's Equity?",
              options: ["A. $680,000", "B. $320,000", "C. $180,000", "D. $500,000"],
              answer: "B",
            },
          ],
        },
      ],
    },
  ],
  2: [
    {
      title: "Module 3 — Accounts, Debits and Credits",
      blocks: [
        { type: "h3", text: "Module Overview" },
        {
          type: "p",
          text: "In Module 2 you learned that every transaction affects assets, liabilities or owner's equity — and that the accounting equation always stays in balance.",
        },
        {
          type: "p",
          text: "In this module you'll learn how bookkeepers actually record those changes: in accounts, organized in a chart of accounts, using debits and credits.",
        },
        { type: "h3", text: "By the End of This Module" },
        { type: "p", text: "You'll be able to:" },
        {
          type: "list",
          items: [
            "Explain what an account is",
            "Describe the purpose of a chart of accounts",
            "Name the five account types and give examples of each",
            "Separate personal expenses from business expenses",
            "Create a simple chart of accounts",
            "Apply the debit and credit rules",
            "State the normal balance of each account type",
            "Record transactions in T-accounts using double-entry",
          ],
        },
      ],
    },
    {
      title: "What Is an Account?",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "An account is a record that collects all the increases and decreases for one specific item — such as Cash, Rent Expense or Sales Revenue.",
        },
        {
          type: "p",
          text: "Instead of keeping one long list of transactions, bookkeeping sorts every transaction into accounts. This makes it easy to see the balance of each item at any time.",
        },
        { type: "h3", text: "Example" },
        {
          type: "p",
          text: "ABC Design Services (from Module 1) paid rent, internet and advertising in September. Each cost goes to its own account:",
        },
        {
          type: "table",
          headers: ["Account", "September activity", "Balance"],
          rows: [
            ["Rent Expense", "Rent paid $15,000", "$15,000"],
            ["Internet Expense", "Internet paid $2,000", "$2,000"],
            ["Advertising Expense", "Advertising paid $5,000", "$5,000"],
          ],
        },
        {
          type: "note",
          text: "Every account has a name, a type and usually a number. Together, all the accounts make up the general ledger.",
        },
      ],
    },
    {
      title: "The Chart of Accounts",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "A chart of accounts is the complete list of all the accounts a business uses, organized by type and usually numbered.",
        },
        { type: "h3", text: "Why It Matters" },
        {
          type: "list",
          items: [
            "Every transaction must be recorded in an account on the chart.",
            "Consistent accounts make reports reliable and comparable month to month.",
            "Numbering keeps related accounts together and easy to find.",
            "Financial statements are built from the chart's account balances.",
          ],
        },
        { type: "h3", text: "A Common Numbering System" },
        {
          type: "table",
          headers: ["Number range", "Account type"],
          rows: [
            ["1000–1999", "Assets"],
            ["2000–2999", "Liabilities"],
            ["3000–3999", "Owner's Equity"],
            ["4000–4999", "Revenue"],
            ["5000–6999", "Expenses"],
          ],
        },
        {
          type: "note",
          text: "There is no single required numbering system. What matters is that it's logical and used consistently.",
        },
      ],
    },
    {
      title: "The Five Account Types",
      blocks: [
        { type: "p", text: "Every account belongs to one of five types:" },
        {
          type: "table",
          headers: ["Type", "What it records", "Appears on"],
          rows: [
            ["Assets", "What the business owns or is owed", "Balance sheet"],
            ["Liabilities", "What the business owes others", "Balance sheet"],
            ["Owner's Equity", "The owner's stake in the business", "Balance sheet"],
            ["Revenue", "Income earned from selling goods or services", "Income statement"],
            ["Expenses", "Costs of running the business", "Income statement"],
          ],
        },
        {
          type: "note",
          text: "The first three come straight from the accounting equation (Assets = Liabilities + Owner's Equity). Revenue and expenses explain how equity changes through profit or loss.",
        },
      ],
    },
    {
      title: "Asset Accounts",
      blocks: [
        {
          type: "term",
          term: "Asset accounts",
          definition: "Track resources the business owns or controls that have value.",
          examples: [
            "1000 Cash / Bank",
            "1100 Accounts Receivable — money customers owe",
            "1200 Inventory — goods held for sale",
            "1300 Prepaid Expenses — costs paid in advance",
            "1500 Equipment",
            "1600 Furniture and Fixtures",
            "1700 Vehicles",
          ],
        },
        {
          type: "p",
          text: "Current assets (cash, receivables, inventory, prepayments) are usually listed first, followed by fixed assets (equipment, furniture, vehicles), as you learned in Module 2.",
        },
      ],
    },
    {
      title: "Liability Accounts",
      blocks: [
        {
          type: "term",
          term: "Liability accounts",
          definition: "Track amounts the business owes to others.",
          examples: [
            "2000 Accounts Payable — money owed to suppliers",
            "2100 Wages Payable — wages earned by staff but not yet paid",
            "2200 Sales Tax Payable — tax collected for the government",
            "2300 Credit Card Payable",
            "2500 Bank Loan Payable",
          ],
        },
        {
          type: "p",
          text: "As with assets, current liabilities (due within a year) are usually listed before long-term liabilities such as multi-year loans.",
        },
      ],
    },
    {
      title: "Equity Accounts",
      blocks: [
        {
          type: "term",
          term: "Equity accounts",
          definition: "Track the owner's investment in, and withdrawals from, the business, plus profits kept in the business.",
          examples: [
            "3000 Owner's Capital — money and assets the owner puts in",
            "3100 Owner's Drawings — money the owner takes out for personal use",
            "3200 Retained Earnings — past profits kept in the business",
          ],
        },
        {
          type: "note",
          text: "Drawings reduce equity. They are not a business expense, because they don't help the business earn revenue.",
        },
      ],
    },
    {
      title: "Revenue Accounts",
      blocks: [
        {
          type: "term",
          term: "Revenue accounts",
          definition: "Track income the business earns from its normal activities.",
          examples: [
            "4000 Sales Revenue — selling goods",
            "4100 Service Revenue — e.g. design fees",
            "4200 Interest Income",
            "4300 Other Income",
          ],
        },
        {
          type: "p",
          text: "Revenue is recorded when it is earned — when the goods are delivered or the service is performed — even if the customer pays later.",
        },
        { type: "h3", text: "Example" },
        {
          type: "p",
          text: "ABC Design Services issued a $25,000 invoice in September. That $25,000 is Service Revenue for September, even though the customer paid on September 15.",
        },
      ],
    },
    {
      title: "Expense Accounts",
      blocks: [
        {
          type: "term",
          term: "Expense accounts",
          definition: "Track the costs of running the business to earn revenue.",
          examples: [
            "5000 Cost of Goods Sold",
            "6000 Rent Expense",
            "6100 Wages Expense",
            "6200 Utilities Expense",
            "6300 Internet and Phone Expense",
            "6400 Advertising Expense",
            "6500 Office Supplies Expense",
          ],
        },
        {
          type: "note",
          text: "Buying equipment is not an expense — it's an asset, because the business will use it for years. Paying rent is an expense, because the benefit is used up in the period.",
        },
      ],
    },
    {
      title: "Personal vs. Business Expenses",
      blocks: [
        {
          type: "p",
          text: "Only costs incurred to run the business are business expenses. Personal costs must be kept out of the business's expense accounts.",
        },
        {
          type: "table",
          headers: ["Payment from the business account", "How to record it"],
          rows: [
            ["Office rent", "Rent Expense (business)"],
            ["Owner's family groceries", "Owner's Drawings (personal)"],
            ["Business internet", "Internet Expense (business)"],
            ["Owner's personal phone bill", "Owner's Drawings (personal)"],
            ["Fuel for the delivery van", "Vehicle Expense (business)"],
          ],
        },
        { type: "h3", text: "Why It Matters" },
        {
          type: "list",
          items: [
            "Mixing personal costs into expenses understates profit.",
            "It can lead to incorrect tax returns.",
            "It makes the financial statements unreliable.",
          ],
        },
        {
          type: "note",
          text: "Best practice: keep a separate business bank account and card, and record any personal spending from them as drawings.",
        },
      ],
    },
    {
      title: "Creating a Simple Chart of Accounts",
      blocks: [
        {
          type: "p",
          text: "Here is a simple chart of accounts for ABC Design Services, a small graphic design business:",
        },
        {
          type: "table",
          headers: ["Number", "Account", "Type"],
          rows: [
            ["1000", "Cash", "Asset"],
            ["1100", "Accounts Receivable", "Asset"],
            ["1500", "Computer Equipment", "Asset"],
            ["2000", "Accounts Payable", "Liability"],
            ["3000", "Owner's Capital", "Equity"],
            ["3100", "Owner's Drawings", "Equity"],
            ["4100", "Design Revenue", "Revenue"],
            ["6000", "Rent Expense", "Expense"],
            ["6300", "Internet Expense", "Expense"],
            ["6400", "Advertising Expense", "Expense"],
          ],
        },
        { type: "h3", text: "Steps to Build One" },
        {
          type: "steps",
          items: [
            { title: "List what the business owns", body: "These become asset accounts." },
            { title: "List what the business owes", body: "These become liability accounts." },
            { title: "Add the owner's accounts", body: "Capital and drawings." },
            { title: "List how the business earns money", body: "These become revenue accounts." },
            { title: "List regular costs", body: "These become expense accounts." },
            { title: "Number them by type", body: "Leave gaps so new accounts can be added later." },
          ],
        },
      ],
    },
    {
      title: "Debits and Credits",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "Every account has two sides. The left side is called the debit side, and the right side is called the credit side.",
        },
        {
          type: "list",
          items: [
            "Debit (Dr) = left side of an account",
            "Credit (Cr) = right side of an account",
          ],
        },
        {
          type: "note",
          text: "Debit and credit do not mean good or bad, or plus or minus. Whether a debit increases or decreases an account depends on the account type.",
        },
        { type: "h3", text: "The Golden Rule" },
        {
          type: "p",
          text: "In every transaction, total debits must equal total credits. This keeps the accounting equation in balance.",
        },
      ],
    },
    {
      title: "The Debit and Credit Rules",
      blocks: [
        {
          type: "table",
          headers: ["Account type", "Increase", "Decrease"],
          rows: [
            ["Assets", "Debit", "Credit"],
            ["Expenses", "Debit", "Credit"],
            ["Owner's Drawings", "Debit", "Credit"],
            ["Liabilities", "Credit", "Debit"],
            ["Owner's Equity (Capital)", "Credit", "Debit"],
            ["Revenue", "Credit", "Debit"],
          ],
        },
        {
          type: "term",
          term: "Memory aid — DEAD CLIC",
          definition: "Debits increase Expenses, Assets and Drawings. Credits increase Liabilities, Income (revenue) and Capital.",
        },
        { type: "h3", text: "Example" },
        {
          type: "p",
          text: "ABC Design Services pays $15,000 rent in cash. Rent Expense increases (debit $15,000). Cash, an asset, decreases (credit $15,000).",
        },
      ],
    },
    {
      title: "Normal Balances",
      blocks: [
        {
          type: "p",
          text: "An account's normal balance is the side on which it increases — and therefore the side where its balance usually sits.",
        },
        {
          type: "table",
          headers: ["Account type", "Normal balance"],
          rows: [
            ["Assets", "Debit"],
            ["Expenses", "Debit"],
            ["Owner's Drawings", "Debit"],
            ["Liabilities", "Credit"],
            ["Owner's Capital", "Credit"],
            ["Revenue", "Credit"],
          ],
        },
        {
          type: "note",
          text: "If an account shows a balance on the opposite side — for example, Cash with a credit balance — check for an error, such as a payment recorded twice.",
        },
      ],
    },
    {
      title: "T-Accounts",
      blocks: [
        {
          type: "p",
          text: "A T-account is a simple picture of an account, shaped like the letter T. The account name goes on top, debits on the left and credits on the right.",
        },
        {
          type: "ascii",
          text: "              Cash\n     Debit (Dr)  |  Credit (Cr)\n   --------------+--------------\n      100,000    |    15,000\n       25,000    |    40,000\n                 |     2,000\n                 |     5,000\n   --------------+--------------\n Total 125,000   |    62,000\n Balance 63,000 Dr",
        },
        { type: "h3", text: "Finding the Balance" },
        {
          type: "steps",
          items: [
            { title: "Add the debit side", body: "$100,000 + $25,000 = $125,000" },
            { title: "Add the credit side", body: "$15,000 + $40,000 + $2,000 + $5,000 = $62,000" },
            { title: "Subtract the smaller total from the larger", body: "$125,000 − $62,000 = $63,000" },
            { title: "Put the balance on the larger side", body: "A $63,000 debit balance — normal for Cash." },
          ],
        },
      ],
    },
    {
      title: "Double-Entry in Action",
      blocks: [
        {
          type: "p",
          text: "Here are all of ABC Design Services' September transactions from Module 1, recorded with debits and credits:",
        },
        {
          type: "table",
          headers: ["Date", "Transaction", "Debit", "Credit", "Amount"],
          rows: [
            ["Sept 1", "Owner invests cash", "Cash", "Owner's Capital", "$100,000"],
            ["Sept 2", "Office rent paid", "Rent Expense", "Cash", "$15,000"],
            ["Sept 4", "Computer purchased", "Computer Equipment", "Cash", "$40,000"],
            ["Sept 8", "Customer invoice issued", "Accounts Receivable", "Design Revenue", "$25,000"],
            ["Sept 15", "Customer pays", "Cash", "Accounts Receivable", "$25,000"],
            ["Sept 20", "Internet expense paid", "Internet Expense", "Cash", "$2,000"],
            ["Sept 25", "Advertising expense paid", "Advertising Expense", "Cash", "$5,000"],
          ],
        },
        {
          type: "note",
          text: "Each line has one debit and one credit of the same amount, so total debits ($212,000) equal total credits ($212,000).",
        },
        {
          type: "p",
          text: "The Cash T-account on the previous screen comes from the four Cash credits and two Cash debits in this table.",
        },
      ],
    },
    {
      title: "Common Mistakes",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Thinking debit means “increase”", body: "A debit increases assets and expenses but decreases liabilities, equity and revenue." },
            { title: "Recording only one side", body: "Every transaction needs a debit and a credit of equal value." },
            { title: "Treating an asset purchase as an expense", body: "A $40,000 computer is an asset, not an expense." },
            { title: "Recording personal spending as a business expense", body: "Personal costs are owner's drawings." },
            { title: "Putting the balance on the wrong side", body: "The balance goes on the side with the larger total." },
            { title: "Creating duplicate accounts", body: "“Phone” and “Telephone” split the same costs and confuse reports." },
          ],
        },
      ],
    },
    {
      title: "Practical Activity",
      blocks: [
        { type: "h3", text: "Scenario" },
        {
          type: "p",
          text: "You are the bookkeeper for Bright Solutions (from Module 1). The owner started the business with $50,000 cash. During the month:",
        },
        {
          type: "list",
          items: [
            "1. Owner invests an additional $25,000.",
            "2. Business pays $10,000 office rent.",
            "3. Business purchases a laptop for $35,000.",
            "4. Business earns $20,000 from a customer, paid in cash.",
            "5. Business pays $3,000 for internet and utilities.",
            "6. Business receives another $15,000 from a customer.",
          ],
        },
        { type: "h3", text: "Your Tasks" },
        {
          type: "list",
          items: [
            "Name the account debited and the account credited for each transaction.",
            "Classify each account by type.",
            "Draw the Cash T-account and find its balance.",
          ],
        },
        { type: "h3", text: "Answer" },
        {
          type: "table",
          headers: ["#", "Debit", "Credit", "Amount"],
          rows: [
            ["1", "Cash (asset)", "Owner's Capital (equity)", "$25,000"],
            ["2", "Rent Expense (expense)", "Cash (asset)", "$10,000"],
            ["3", "Equipment (asset)", "Cash (asset)", "$35,000"],
            ["4", "Cash (asset)", "Service Revenue (revenue)", "$20,000"],
            ["5", "Utilities Expense (expense)", "Cash (asset)", "$3,000"],
            ["6", "Cash (asset)", "Service Revenue (revenue)", "$15,000"],
          ],
        },
        {
          type: "p",
          text: "Cash: debits $50,000 + $25,000 + $20,000 + $15,000 = $110,000; credits $10,000 + $35,000 + $3,000 = $48,000. Balance: $62,000 debit — the same ending cash you found in Module 1.",
        },
      ],
    },
    {
      title: "Quick Test",
      blocks: [
        {
          type: "quiz",
          question: "The business buys a $40,000 computer for cash. Which account is debited?",
          options: ["A. Cash", "B. Computer Equipment", "C. Rent Expense", "D. Owner's Capital"],
          answer: "B",
        },
      ],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "p",
          text: "Answer all 5 questions, then check your score. You'll need at least 80% to move on — if you don't make it, you can retry.",
        },
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "What is a chart of accounts?",
              options: [
                "A. A graph of monthly sales",
                "B. The complete list of all the accounts a business uses",
                "C. A bank statement",
                "D. A list of customers",
              ],
              answer: "B",
            },
            {
              question: "Which side of an account is the debit side?",
              options: ["A. The right side", "B. The left side", "C. The top", "D. The bottom"],
              answer: "B",
            },
            {
              question: "Using DEAD CLIC, which accounts increase with a credit?",
              options: [
                "A. Expenses, Assets and Drawings",
                "B. Liabilities, Income and Capital",
                "C. Only Cash",
                "D. Only Expenses",
              ],
              answer: "B",
            },
            {
              question: "The owner pays a personal phone bill from the business account. How is it recorded?",
              options: ["A. Internet and Phone Expense", "B. Owner's Drawings", "C. Revenue", "D. Accounts Payable"],
              answer: "B",
            },
            {
              question: "Cash has debits of $125,000 and credits of $62,000. What is the balance?",
              options: ["A. $63,000 credit", "B. $187,000 debit", "C. $63,000 debit", "D. $62,000 debit"],
              answer: "C",
            },
          ],
        },
      ],
    },
    {
      title: "Module Summary",
      blocks: [
        { type: "p", text: "In this module you learned how transactions are organized and recorded." },
        { type: "p", text: "You learned:" },
        {
          type: "list",
          items: [
            "What an account is",
            "What a chart of accounts is and how it's numbered",
            "The five account types: assets, liabilities, equity, revenue and expenses",
            "Examples of each type of account",
            "How to separate personal and business expenses",
            "How to create a simple chart of accounts",
            "What debits and credits are",
            "The debit and credit rules (DEAD CLIC)",
            "Normal balances",
            "How to use T-accounts",
            "How double-entry records every transaction",
          ],
        },
        { type: "h3", text: "Key Concept to Remember" },
        {
          type: "note",
          text: "Every transaction is recorded with equal debits and credits. That's what keeps the books — and the accounting equation — in balance.",
        },
      ],
    },
  ],
  3: [
    {
      title: "Module 4 — Recording Transactions",
      blocks: [
        { type: "h3", text: "Module Overview" },
        {
          type: "p",
          text: "You now know the accounts and the debit and credit rules. In this module, you'll follow a transaction from the moment it happens to the moment it appears in the general ledger.",
        },
        { type: "h3", text: "By the End of This Module" },
        { type: "p", text: "You'll be able to:" },
        {
          type: "list",
          items: [
            "Identify common source documents",
            "Tell cash transactions from credit transactions",
            "Record sales and purchases",
            "Record owner investments and withdrawals",
            "Write journal entries",
            "Post journal entries to the general ledger",
            "Keep proper supporting documentation",
          ],
        },
      ],
    },
    {
      title: "What Is a Source Document?",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "A source document is the original evidence that a transaction happened. It shows the date, the parties, what was bought or sold, and the amount.",
        },
        { type: "h3", text: "Why Source Documents Matter" },
        {
          type: "list",
          items: [
            "They prove the transaction is real.",
            "They give the details needed to record it correctly.",
            "They let anyone trace a figure in the books back to its evidence.",
            "They support tax returns and audits.",
          ],
        },
        {
          type: "note",
          text: "Rule: no source document, no entry. If evidence is missing, find it or ask for it before recording.",
        },
      ],
    },
    {
      title: "Sales Invoices and Receipts",
      blocks: [
        {
          type: "term",
          term: "Sales invoice",
          definition: "A document the business sends to a customer asking for payment for goods or services supplied on credit.",
          example: "Invoice #1002 to Lumen Co for $18,000 of design work, due in 30 days.",
        },
        {
          type: "term",
          term: "Sales receipt",
          definition: "A document confirming the customer paid at the time of the sale.",
          example: "Receipt for a $4,000 logo package paid by card on the spot.",
        },
        {
          type: "table",
          headers: ["Document", "Customer pays", "Creates a receivable?"],
          rows: [
            ["Sales invoice", "Later", "Yes"],
            ["Sales receipt", "Now", "No"],
          ],
        },
      ],
    },
    {
      title: "Supplier Bills and Bank Statements",
      blocks: [
        {
          type: "term",
          term: "Supplier bill (purchase invoice)",
          definition: "A document from a supplier asking the business to pay for goods or services received.",
          example: "A $3,500 bill from PrintPro for brochures, due in 14 days.",
        },
        {
          type: "term",
          term: "Bank statement",
          definition: "The bank's record of all money in and out of the account. It's the source for bank fees, interest and automatic payments.",
          example: "A $25 monthly account fee shown on the statement.",
        },
        { type: "h3", text: "Other Source Documents" },
        {
          type: "list",
          items: [
            "Purchase receipts (cash or card purchases)",
            "Payroll reports",
            "Loan agreements and statements",
            "Credit notes from suppliers or to customers",
          ],
        },
      ],
    },
    {
      title: "Cash vs. Credit Transactions",
      blocks: [
        {
          type: "table",
          headers: ["", "Cash transaction", "Credit transaction"],
          rows: [
            ["Payment timing", "Paid immediately", "Paid later"],
            ["Sale example", "Customer pays $4,000 at the counter", "Customer is invoiced $18,000, due in 30 days"],
            ["Purchase example", "Buy $1,200 of supplies with the business card", "Supplier bills $3,500, due in 14 days"],
            ["Account used", "Cash", "Accounts Receivable or Accounts Payable"],
          ],
        },
        {
          type: "note",
          text: "“Credit transaction” means paid later. It has nothing to do with the credit side of an account.",
        },
        {
          type: "p",
          text: "Card payments made by the business from its bank account are usually treated as cash transactions; purchases on a business credit card create a credit card liability.",
        },
      ],
    },
    {
      title: "Recording Sales",
      blocks: [
        { type: "h3", text: "Cash Sale — $4,000" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Cash", "$4,000", ""],
            ["Design Revenue", "", "$4,000"],
          ],
        },
        { type: "h3", text: "Credit Sale — Invoice #1002, $18,000" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Accounts Receivable", "$18,000", ""],
            ["Design Revenue", "", "$18,000"],
          ],
        },
        { type: "h3", text: "Customer Pays Invoice #1002" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Cash", "$18,000", ""],
            ["Accounts Receivable", "", "$18,000"],
          ],
        },
        {
          type: "note",
          text: "The revenue was recorded when the invoice was issued. When the customer pays, no new revenue is recorded — the receivable simply turns into cash.",
        },
      ],
    },
    {
      title: "Recording Purchases",
      blocks: [
        { type: "h3", text: "Cash Purchase — Office Supplies, $1,200" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Office Supplies Expense", "$1,200", ""],
            ["Cash", "", "$1,200"],
          ],
        },
        { type: "h3", text: "Credit Purchase — PrintPro Bill, $3,500" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Printing Expense", "$3,500", ""],
            ["Accounts Payable", "", "$3,500"],
          ],
        },
        { type: "h3", text: "Paying PrintPro" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Accounts Payable", "$3,500", ""],
            ["Cash", "", "$3,500"],
          ],
        },
        {
          type: "note",
          text: "If the purchase were equipment that lasts for years, you'd debit an asset account (such as Equipment) instead of an expense.",
        },
      ],
    },
    {
      title: "Owner Investments and Withdrawals",
      blocks: [
        {
          type: "term",
          term: "Owner investment",
          definition: "Money or assets the owner puts into the business. It increases both an asset and owner's capital.",
          example: "Owner invests $20,000: debit Cash $20,000, credit Owner's Capital $20,000.",
        },
        {
          type: "term",
          term: "Owner withdrawal (drawings)",
          definition: "Money or assets the owner takes out for personal use. It decreases an asset and equity.",
          example: "Owner withdraws $2,500: debit Owner's Drawings $2,500, credit Cash $2,500.",
        },
        {
          type: "note",
          text: "Investments aren't revenue, and withdrawals aren't expenses. Neither affects profit — they only change equity.",
        },
      ],
    },
    {
      title: "The Journal and Journal Entries",
      blocks: [
        { type: "h3", text: "What Is the Journal?" },
        {
          type: "p",
          text: "The general journal is the book of original entry. Transactions are recorded here first, in date order, before being posted to the accounts.",
        },
        { type: "h3", text: "Parts of a Journal Entry" },
        {
          type: "table",
          headers: ["Part", "Example"],
          rows: [
            ["Date", "Oct 6"],
            ["Account debited and amount", "Accounts Receivable $18,000"],
            ["Account credited and amount", "Design Revenue $18,000"],
            ["Description", "Invoice #1002 to Lumen Co — brand design"],
            ["Reference", "JE-0104 / Invoice #1002"],
          ],
        },
        {
          type: "note",
          text: "By convention, the debit line is written first and the credit line is written below it.",
        },
      ],
    },
    {
      title: "Writing a Journal Entry Step by Step",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Read the source document", body: "What happened, when, with whom and for how much?" },
            { title: "Identify the accounts", body: "Which accounts are affected? (Usually two.)" },
            { title: "Classify each account", body: "Asset, liability, equity, revenue or expense?" },
            { title: "Decide increase or decrease", body: "Does each account go up or down?" },
            { title: "Apply the debit and credit rules", body: "Use DEAD CLIC to choose debit or credit." },
            { title: "Check debits equal credits", body: "Then add a clear description and reference." },
          ],
        },
        { type: "h3", text: "Example: Bill from PrintPro, $3,500" },
        {
          type: "list",
          items: [
            "Accounts: Printing Expense and Accounts Payable",
            "Printing Expense (expense) increases → debit",
            "Accounts Payable (liability) increases → credit",
            "Debit $3,500 = Credit $3,500 ✓",
          ],
        },
      ],
    },
    {
      title: "Example: Journalizing a Month",
      blocks: [
        { type: "p", text: "ABC Design Services' October transactions:" },
        {
          type: "table",
          headers: ["Date", "Transaction", "Debit", "Credit", "Amount"],
          rows: [
            ["Oct 1", "Owner invests more cash", "Cash", "Owner's Capital", "$20,000"],
            ["Oct 3", "Office supplies bought for cash (receipt)", "Office Supplies Expense", "Cash", "$1,200"],
            ["Oct 6", "Invoice #1002 to Lumen Co", "Accounts Receivable", "Design Revenue", "$18,000"],
            ["Oct 9", "PrintPro bill received", "Printing Expense", "Accounts Payable", "$3,500"],
            ["Oct 12", "Cash sale (sales receipt)", "Cash", "Design Revenue", "$4,000"],
            ["Oct 18", "Lumen Co pays invoice #1002", "Cash", "Accounts Receivable", "$18,000"],
            ["Oct 22", "PrintPro bill paid", "Accounts Payable", "Cash", "$3,500"],
            ["Oct 28", "Owner withdraws cash", "Owner's Drawings", "Cash", "$2,500"],
          ],
        },
      ],
    },
    {
      title: "Posting to the General Ledger",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "Posting means copying each debit and credit from the journal into the matching account in the general ledger, so each account shows a running balance.",
        },
        {
          type: "steps",
          items: [
            { title: "Find the account", body: "Locate the ledger account for each journal line." },
            { title: "Enter the amount on the same side", body: "A journal debit is posted as a debit; a credit as a credit." },
            { title: "Record the date and reference", body: "So the ledger line can be traced back to the journal." },
            { title: "Update the balance", body: "Calculate the new running balance." },
          ],
        },
        {
          type: "note",
          text: "Accounting software posts automatically when you save a transaction — but understanding posting helps you read the ledger and find errors.",
        },
      ],
    },
    {
      title: "Example: Posting the Cash Account",
      blocks: [
        { type: "p", text: "Cash started October with the $63,000 balance from September." },
        {
          type: "table",
          headers: ["Date", "Description", "Debit", "Credit", "Balance"],
          rows: [
            ["Oct 1", "Opening balance", "", "", "$63,000"],
            ["Oct 1", "Owner investment", "$20,000", "", "$83,000"],
            ["Oct 3", "Office supplies", "", "$1,200", "$81,800"],
            ["Oct 12", "Cash sale", "$4,000", "", "$85,800"],
            ["Oct 18", "Lumen Co payment", "$18,000", "", "$103,800"],
            ["Oct 22", "Paid PrintPro", "", "$3,500", "$100,300"],
            ["Oct 28", "Owner withdrawal", "", "$2,500", "$97,800"],
          ],
        },
        {
          type: "note",
          text: "The Oct 6 invoice and Oct 9 bill don't appear in Cash — no money moved on those dates.",
        },
      ],
    },
    {
      title: "Keeping Supporting Documentation",
      blocks: [
        {
          type: "list",
          items: [
            "Attach each source document to its transaction in the software, or file it with the entry reference.",
            "Use clear, consistent file names, e.g. 2026-10-09_PrintPro_Bill-3301.pdf.",
            "Never change a document after recording it — record corrections with a new entry.",
            "Store documents securely, with backups.",
            "Keep records for as long as tax law and your accountant require — often several years.",
          ],
        },
        { type: "h3", text: "The Audit Trail" },
        {
          type: "p",
          text: "Good documentation creates an audit trail: anyone can follow a number in the reports back to the ledger, the journal and the original document.",
        },
      ],
    },
    {
      title: "Common Mistakes",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Recording revenue again when a customer pays", body: "The sale was recorded on the invoice; the payment only reduces Accounts Receivable." },
            { title: "Recording from a quote or statement instead of the bill", body: "This can record purchases twice or too early." },
            { title: "Treating owner withdrawals as expenses", body: "Withdrawals are drawings, not expenses." },
            { title: "Using the date the entry was typed", body: "Use the date the transaction happened." },
            { title: "Posting to the wrong side", body: "A journal debit must be posted as a ledger debit." },
            { title: "Missing documentation", body: "Every entry needs evidence." },
          ],
        },
      ],
    },
    {
      title: "Practical Activity",
      blocks: [
        { type: "h3", text: "Scenario" },
        {
          type: "p",
          text: "Bright Solutions starts the next month with $62,000 cash. During the month:",
        },
        {
          type: "list",
          items: [
            "1. Owner invests $10,000 cash.",
            "2. Invoice issued to a customer for $6,000.",
            "3. Printer bought on credit from TechMart for $1,800.",
            "4. Cash sale of $2,500.",
            "5. Customer pays the $6,000 invoice.",
            "6. TechMart is paid $1,800.",
            "7. Owner withdraws $1,000.",
          ],
        },
        { type: "h3", text: "Your Tasks" },
        {
          type: "list",
          items: [
            "Write the journal entry for each transaction.",
            "Post the Cash entries to a Cash ledger and find the closing balance.",
          ],
        },
        { type: "h3", text: "Answer" },
        {
          type: "table",
          headers: ["#", "Debit", "Credit", "Amount"],
          rows: [
            ["1", "Cash", "Owner's Capital", "$10,000"],
            ["2", "Accounts Receivable", "Service Revenue", "$6,000"],
            ["3", "Equipment", "Accounts Payable", "$1,800"],
            ["4", "Cash", "Service Revenue", "$2,500"],
            ["5", "Cash", "Accounts Receivable", "$6,000"],
            ["6", "Accounts Payable", "Cash", "$1,800"],
            ["7", "Owner's Drawings", "Cash", "$1,000"],
          ],
        },
        {
          type: "p",
          text: "Cash: $62,000 + $10,000 + $2,500 + $6,000 − $1,800 − $1,000 = $77,700.",
        },
      ],
    },
    {
      title: "Quick Test",
      blocks: [
        {
          type: "quiz",
          question: "A customer pays an invoice that was already recorded. Which account is credited?",
          options: ["A. Design Revenue", "B. Accounts Receivable", "C. Cash", "D. Owner's Capital"],
          answer: "B",
        },
      ],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "p",
          text: "Answer all 5 questions, then check your score. You'll need at least 80% to move on — if you don't make it, you can retry.",
        },
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "What is a source document?",
              options: [
                "A. A list of accounts",
                "B. The original evidence that a transaction happened",
                "C. A tax return",
                "D. A business plan",
              ],
              answer: "B",
            },
            {
              question: "What does a “credit transaction” mean?",
              options: [
                "A. An entry on the right side of an account",
                "B. A transaction paid later",
                "C. A refund",
                "D. A bank fee",
              ],
              answer: "B",
            },
            {
              question: "A $3,500 bill from PrintPro is received, to be paid later. Which account is credited?",
              options: ["A. Printing Expense", "B. Cash", "C. Accounts Payable", "D. Accounts Receivable"],
              answer: "C",
            },
            {
              question: "The owner withdraws $2,500 for personal use. Which account is debited?",
              options: ["A. Wages Expense", "B. Owner's Capital", "C. Owner's Drawings", "D. Cash"],
              answer: "C",
            },
            {
              question: "What does posting mean?",
              options: [
                "A. Mailing invoices to customers",
                "B. Copying journal debits and credits into the ledger accounts",
                "C. Paying suppliers",
                "D. Filing source documents",
              ],
              answer: "B",
            },
          ],
        },
      ],
    },
    {
      title: "Module Summary",
      blocks: [
        { type: "p", text: "In this module you followed transactions from evidence to ledger." },
        { type: "p", text: "You learned:" },
        {
          type: "list",
          items: [
            "What source documents are and why they matter",
            "Sales invoices, sales receipts, supplier bills and bank statements",
            "The difference between cash and credit transactions",
            "How to record sales, customer payments, purchases and supplier payments",
            "How to record owner investments and withdrawals",
            "What the journal is and the parts of a journal entry",
            "A step-by-step method for writing journal entries",
            "How to post entries to the general ledger",
            "How to keep supporting documentation and an audit trail",
          ],
        },
        { type: "h3", text: "Key Concept to Remember" },
        {
          type: "note",
          text: "Source document → journal entry → ledger. Every number in the books should be traceable back to its evidence.",
        },
      ],
    },
  ],
  4: [
    {
      title: "Module 5 — Receivables and Payables",
      blocks: [
        {
          type: "term",
          term: "Accounts Receivable (AR)",
          definition: "Money customers owe the business for goods or services already delivered. It is an asset.",
          examples: [
            "Invoice sent: debit Accounts Receivable, credit Revenue.",
            "Customer pays: debit Cash, credit Accounts Receivable.",
          ],
        },
        {
          type: "term",
          term: "Accounts Payable (AP)",
          definition: "Money the business owes suppliers for goods or services already received. It is a liability.",
          examples: [
            "Bill received: debit Expense (or asset), credit Accounts Payable.",
            "Bill paid: debit Accounts Payable, credit Cash.",
          ],
        },
        {
          type: "note",
          text: "Review an aged receivables list regularly. The older an unpaid invoice gets, the less likely it is to be collected — follow up early.",
        },
      ],
    },
    {
      title: "Why the Bank and the Books Differ",
      blocks: [
        {
          type: "p",
          text: "A bank reconciliation compares your cash account with the bank statement and explains every difference. The two rarely match at first, because of timing and items you haven't recorded yet.",
        },
        {
          type: "table",
          headers: ["Difference", "What it is", "Adjust"],
          rows: [
            ["Outstanding check", "A check you wrote that hasn't cleared the bank yet", "Bank balance (subtract)"],
            ["Deposit in transit", "Money you deposited that the bank hasn't shown yet", "Bank balance (add)"],
            ["Bank fee", "A charge on the statement not yet in your books", "Book balance (subtract)"],
            ["Interest earned", "Interest on the statement not yet in your books", "Book balance (add)"],
            ["Error", "A wrong amount recorded by you or the bank", "Whichever side made the error"],
          ],
        },
      ],
    },
    {
      title: "Preparing a Bank Reconciliation",
      blocks: [
        {
          type: "p",
          text: "At March 31, the bank statement shows $9,320 and the cash account in the books shows $8,450.",
        },
        {
          type: "table",
          headers: ["Bank side", "Amount", "Book side", "Amount"],
          rows: [
            ["Balance per bank statement", "$9,320", "Balance per books", "$8,450"],
            ["Add: deposit in transit", "$400", "Add: interest earned", "$95"],
            ["Less: outstanding check #1045", "($1,200)", "Less: bank fee", "($25)"],
            ["Adjusted bank balance", "$8,520", "Adjusted book balance", "$8,520"],
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Compare deposits and payments", body: "Tick off each item that appears in both the books and the statement." },
            { title: "List the unticked items", body: "Decide whether each one is a bank-side or book-side difference." },
            { title: "Adjust both balances", body: "The adjusted balances must agree." },
            {
              title: "Record book-side items",
              body: "Journalize the items you hadn't recorded:",
              list: ["Debit Bank Fees $25, credit Cash $25", "Debit Cash $95, credit Interest Income $95"],
            },
          ],
        },
        {
          type: "note",
          text: "If the adjusted balances don't agree, look for transposed digits (e.g. $540 vs. $450 — differences divisible by 9 are a clue), duplicates and missing entries.",
        },
      ],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "What type of account is Accounts Receivable?",
              options: ["A. Liability", "B. Asset", "C. Expense", "D. Equity"],
              answer: "B",
            },
            {
              question: "A supplier bill for $600 of utilities is received, to be paid later. What is the entry?",
              options: [
                "A. Debit Cash, credit Utilities",
                "B. Debit Utilities, credit Accounts Payable",
                "C. Debit Accounts Payable, credit Utilities",
                "D. Debit Utilities, credit Accounts Receivable",
              ],
              answer: "B",
            },
            {
              question: "How is an outstanding check treated in a bank reconciliation?",
              options: [
                "A. Added to the bank balance",
                "B. Subtracted from the bank balance",
                "C. Subtracted from the book balance",
                "D. Ignored",
              ],
              answer: "B",
            },
            {
              question: "A $25 bank fee appears on the statement but not in the books. What should you do?",
              options: [
                "A. Ask the bank to remove it",
                "B. Subtract it from the bank balance",
                "C. Subtract it from the book balance and record it in the books",
                "D. Add it to the book balance",
              ],
              answer: "C",
            },
            {
              question: "In the example, what is the adjusted cash balance?",
              options: ["A. $8,450", "B. $8,520", "C. $9,320", "D. $9,720"],
              answer: "B",
            },
          ],
        },
      ],
    },
  ],
  5: [
    {
      title: "Module 6 — The Trial Balance",
      blocks: [
        {
          type: "p",
          text: "A trial balance lists every ledger account and its balance at a date, with debit balances in one column and credit balances in the other. If the books follow double entry, the two totals agree.",
        },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Cash", "$12,000", ""],
            ["Accounts Receivable", "$3,000", ""],
            ["Equipment", "$6,000", ""],
            ["Accounts Payable", "", "$2,000"],
            ["Owner's Capital", "", "$15,000"],
            ["Service Revenue", "", "$9,000"],
            ["Rent Expense", "$2,500", ""],
            ["Wages Expense", "$2,500", ""],
            ["Totals", "$26,000", "$26,000"],
          ],
        },
        {
          type: "note",
          text: "A balanced trial balance doesn't prove the books are correct. Entries posted to the wrong account, or left out entirely, still balance.",
        },
      ],
    },
    {
      title: "Adjusting Entries",
      blocks: [
        {
          type: "p",
          text: "At the end of a period, adjusting entries make sure revenue and expenses land in the period they belong to.",
        },
        {
          type: "table",
          headers: ["Adjustment", "Example", "Entry"],
          rows: [
            ["Accrued expense", "Wages earned by staff but not yet paid: $400", "Debit Wages Expense, credit Wages Payable"],
            ["Prepaid expense", "One month of a 12-month $1,200 insurance policy used: $100", "Debit Insurance Expense, credit Prepaid Insurance"],
            ["Depreciation", "Equipment of $6,000 with a 5-year life: $100 a month", "Debit Depreciation Expense, credit Accumulated Depreciation"],
            ["Accrued revenue", "Work done but not yet invoiced", "Debit Accounts Receivable, credit Revenue"],
          ],
        },
        {
          type: "p",
          text: "For our business, we record two adjustments: $400 of accrued wages and $100 of depreciation.",
        },
      ],
    },
    {
      title: "The Financial Statements",
      blocks: [
        { type: "h3", text: "Income statement — for the month" },
        {
          type: "table",
          headers: ["Item", "Amount"],
          rows: [
            ["Service Revenue", "$9,000"],
            ["Less: Rent Expense", "($2,500)"],
            ["Less: Wages Expense ($2,500 + $400)", "($2,900)"],
            ["Less: Depreciation Expense", "($100)"],
            ["Net Income", "$3,500"],
          ],
        },
        { type: "h3", text: "Balance sheet — at month-end" },
        {
          type: "table",
          headers: ["Assets", "Amount", "Liabilities and Equity", "Amount"],
          rows: [
            ["Cash", "$12,000", "Accounts Payable", "$2,000"],
            ["Accounts Receivable", "$3,000", "Wages Payable", "$400"],
            ["Equipment, net ($6,000 − $100)", "$5,900", "Owner's Capital ($15,000 + $3,500)", "$18,500"],
            ["Total Assets", "$20,900", "Total Liabilities and Equity", "$20,900"],
          ],
        },
        {
          type: "term",
          term: "Cash flow statement",
          definition: "Shows where cash came from and where it went, split into operating, investing and financing activities. Profit and cash differ — for example, the $3,000 receivable is revenue but not yet cash.",
        },
      ],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "What does a balanced trial balance show?",
              options: [
                "A. The books are completely error-free",
                "B. Total debits equal total credits",
                "C. The business is profitable",
                "D. All taxes have been paid",
              ],
              answer: "B",
            },
            {
              question: "Staff have earned $400 of wages that will be paid next month. What is the adjusting entry?",
              options: [
                "A. Debit Wages Payable, credit Cash",
                "B. Debit Wages Expense, credit Wages Payable",
                "C. Debit Cash, credit Wages Expense",
                "D. No entry until paid",
              ],
              answer: "B",
            },
            {
              question: "Equipment costing $6,000 has a 5-year life and no salvage value. What is monthly straight-line depreciation?",
              options: ["A. $50", "B. $100", "C. $500", "D. $1,200"],
              answer: "B",
            },
            {
              question: "In the example, what is net income for the month?",
              options: ["A. $3,500", "B. $4,000", "C. $6,500", "D. $9,000"],
              answer: "A",
            },
            {
              question: "Which statement shows assets, liabilities and equity at a point in time?",
              options: ["A. Income statement", "B. Cash flow statement", "C. Balance sheet", "D. Trial balance"],
              answer: "C",
            },
          ],
        },
      ],
    },
  ],
}
