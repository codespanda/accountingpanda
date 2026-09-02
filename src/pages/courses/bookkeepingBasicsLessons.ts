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
          text: "Suppose ABC Consulting starts business with ₹100,000 in cash.",
        },
        { type: "p", text: "The bookkeeper records the transaction:" },
        {
          type: "note",
          text: "Business receives ₹100,000 from the owner → financial transaction recorded.",
        },
        { type: "p", text: "Later, ABC Consulting:" },
        {
          type: "list",
          items: [
            "Pays ₹20,000 office rent",
            "Purchases a laptop for ₹50,000",
            "Receives ₹30,000 from a customer",
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
        { type: "list", items: ["Sales: ₹500,000", "Expenses: ₹350,000"] },
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
        { type: "p", text: "A customer purchases goods for ₹10,000." },
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
        { type: "p", text: "A freelancer receives ₹25,000 from a customer." },
        { type: "p", text: "A simple record might be:" },
        {
          type: "table",
          headers: ["Date", "Description", "Income"],
          rows: [["02 Sept", "Client payment", "₹25,000"]],
        },
        { type: "p", text: "If the freelancer pays ₹5,000 for software:" },
        {
          type: "table",
          headers: ["Date", "Description", "Expense"],
          rows: [["04 Sept", "Software expense", "₹5,000"]],
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
        { type: "p", text: "For example, suppose a business purchases a laptop for ₹50,000 using cash." },
        { type: "p", text: "Two accounts are affected:" },
        {
          type: "list",
          items: ["Equipment increases by ₹50,000", "Cash decreases by ₹50,000"],
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
            ["Sept 1", "Owner invests cash", "₹100,000"],
            ["Sept 2", "Office rent paid", "₹15,000"],
            ["Sept 4", "Computer purchased", "₹40,000"],
            ["Sept 8", "Customer invoice issued", "₹25,000"],
            ["Sept 15", "Customer pays", "₹25,000"],
            ["Sept 20", "Internet expense paid", "₹2,000"],
            ["Sept 25", "Advertising expense paid", "₹5,000"],
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
        { type: "term", term: "Transaction", definition: "A financial event that affects a business's financial records.", example: "Paying ₹10,000 rent." },
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
        { type: "p", text: "A business actually pays ₹12,500 for rent, but the bookkeeper records ₹21,500." },
        { type: "p", text: "The difference is ₹9,000." },
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
            { title: "Recording the Wrong Amount", body: "Entering ₹15,000 instead of ₹1,500." },
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
        { type: "p", text: "The business starts the month with ₹50,000 cash." },
        { type: "p", text: "During the month:" },
        {
          type: "list",
          items: [
            "Owner invests an additional ₹25,000.",
            "Business pays ₹10,000 office rent.",
            "Business purchases a laptop for ₹35,000.",
            "Business earns ₹20,000 from a customer.",
            "Business pays ₹3,000 for internet and utilities.",
            "Business receives another ₹15,000 from a customer.",
          ],
        },
        { type: "h3", text: "Your Task" },
        { type: "p", text: "Create a simple transaction record." },
        {
          type: "table",
          headers: ["Date", "Transaction", "Money In", "Money Out", "Balance"],
          rows: [
            ["Opening", "Starting cash", "—", "—", "₹50,000"],
            ["1", "Owner investment", "₹25,000", "—", "₹75,000"],
            ["2", "Office rent", "—", "₹10,000", "₹65,000"],
            ["3", "Laptop purchase", "—", "₹35,000", "₹30,000"],
            ["4", "Customer payment", "₹20,000", "—", "₹50,000"],
            ["5", "Internet/utilities", "—", "₹3,000", "₹47,000"],
            ["6", "Customer payment", "₹15,000", "—", "₹62,000"],
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
          type: "quiz",
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
          type: "quiz",
          question: "Which is an example of an asset?",
          options: ["A. Bank loan", "B. Rent expense", "C. Office equipment", "D. Supplier payable"],
          answer: "C",
        },
        {
          type: "quiz",
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
          type: "quiz",
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
          type: "quiz",
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
}
