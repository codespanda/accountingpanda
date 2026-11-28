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
  /** A lesson video under public/videos/ (with -720/-480 versions and a .jpg poster beside it). */
  | { type: "video"; src: string; title: string }
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
    // Module 1 is taught by six lesson videos, then the knowledge check.
    {
      title: "Lesson 1 — What Is Bookkeeping?",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m1-lesson-1.mp4", title: "Module 1, Lesson 1: What Is Bookkeeping?" }],
    },
    {
      title: "Lesson 2 — Why Is Bookkeeping Important?",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m1-lesson-2.mp4", title: "Module 1, Lesson 2: Why Is Bookkeeping Important?" }],
    },
    {
      title: "Lesson 3 — Bookkeeping vs. Accounting",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m1-lesson-3.mp4", title: "Module 1, Lesson 3: Bookkeeping vs. Accounting" }],
    },
    {
      title: "Lesson 4 — Types of Business Transactions",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m1-lesson-4.mp4", title: "Module 1, Lesson 4: Types of Business Transactions" }],
    },
    {
      title: "Lesson 5 — Types of Bookkeeping Systems",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m1-lesson-5.mp4", title: "Module 1, Lesson 5: Types of Bookkeeping Systems" }],
    },
    {
      title: "Lesson 6 — The Bookkeeping Process & Careers",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m1-lesson-6.mp4", title: "Module 1, Lesson 6: The Bookkeeping Process & Careers" }],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "p",
          text: "Answer all 14 questions, then check your score. You'll need at least 80% to move on — if you don't make it, you can retry.",
        },
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "In simple words, what does bookkeeping mean?",
              options: [
                "A. Planning a business's marketing budget",
                "B. Keeping a proper record of all the money coming into and going out of a business",
                "C. Deciding the prices of a business's products",
                "D. Filing a business's legal documents with the government",
              ],
              answer: "B",
            },
            {
              question: "Without bookkeeping, what might a business owner not know?",
              options: [
                "A. The names of their competitors",
                "B. Which products customers like best",
                "C. How much the business earns, spends, owns or owes",
                "D. How many hours employees work",
              ],
              answer: "C",
            },
            {
              question: "A business has sales of ₹2,00,000 and total expenses of ₹1,50,000 for the month. What is its profit before tax?",
              options: [
                "A. ₹50,000",
                "B. ₹1,50,000",
                "C. ₹2,00,000",
                "D. ₹3,50,000",
              ],
              answer: "A",
            },
            {
              question: "How does bookkeeping help with customers and suppliers?",
              options: [
                "A. It sets the credit limit for every customer",
                "B. It chooses which suppliers to buy from",
                "C. It removes the need to send invoices",
                "D. It shows who owes money to the business and whom the business needs to pay",
              ],
              answer: "D",
            },
            {
              question: "Which of these is one of the benefits of bookkeeping?",
              options: [
                "A. It guarantees the business makes a profit",
                "B. It monitors cash and bank balances so cash shortages can be spotted",
                "C. It means the business never has to file tax returns",
                "D. It replaces the need for a business plan",
              ],
              answer: "B",
            },
            {
              question: "A business buys a laptop for ₹50,000. Which task is the accountant's rather than the bookkeeper's?",
              options: [
                "A. Checking the purchase invoice",
                "B. Recording the transaction",
                "C. Deciding the laptop's useful life and depreciation treatment",
                "D. Updating the supplier and payment records",
              ],
              answer: "C",
            },
            {
              question: "Which statement about bookkeeping and accounting is correct?",
              options: [
                "A. Bookkeeping records transactions, while accounting analyses financial information",
                "B. Accounting records transactions, while bookkeeping analyses financial information",
                "C. They are exactly the same thing",
                "D. Bookkeeping is only needed by large companies",
              ],
              answer: "A",
            },
            {
              question: "What is a business transaction?",
              options: [
                "A. Any conversation with a customer",
                "B. A plan to buy something next year",
                "C. Any change in the business's staff",
                "D. An economic event that can be measured in money and affects the business's financial position",
              ],
              answer: "D",
            },
            {
              question: "A business sells goods worth ₹25,000 to a customer who will pay next month. What type of transaction is this?",
              options: [
                "A. A capital transaction",
                "B. A credit transaction",
                "C. A cash transaction",
                "D. A payment transaction",
              ],
              answer: "B",
            },
            {
              question: "A business earns ₹5,000 from laptop repair services. Which type of transaction is this?",
              options: [
                "A. Capital",
                "B. Purchase",
                "C. Income",
                "D. Payment",
              ],
              answer: "C",
            },
            {
              question: "A business buys furniture for ₹20,000 in cash. How is it recorded in double-entry bookkeeping?",
              options: [
                "A. Debit Furniture ₹20,000 and credit Cash ₹20,000",
                "B. Debit Cash ₹20,000 and credit Furniture ₹20,000",
                "C. Debit Furniture ₹20,000 only",
                "D. Credit Cash ₹20,000 only",
              ],
              answer: "A",
            },
            {
              question: "Which statement about single-entry bookkeeping is correct?",
              options: [
                "A. It is the standard foundation for formal accounting systems",
                "B. It records every transaction in at least two accounts",
                "C. It is a simple record of receipts, payments and balances without the full double-entry structure",
                "D. It is required by law for all companies",
              ],
              answer: "C",
            },
            {
              question: "In the bookkeeping cycle, which step comes right after posting to ledgers?",
              options: [
                "A. Collecting source documents",
                "B. Preparing financial reports",
                "C. Identifying transactions",
                "D. Preparing a trial balance",
              ],
              answer: "D",
            },
            {
              question: "What does reconciling accounts involve?",
              options: [
                "A. Comparing accounting records with bank statements and supporting records",
                "B. Deleting old transactions",
                "C. Sending invoices to customers",
                "D. Choosing accounting software",
              ],
              answer: "A",
            },
          ],
        },
      ],
    },
  ],
  1: [
    // Module 2 is taught by eight lesson videos, then the knowledge check.
    {
      title: "Lesson 1 — Assets",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-1.mp4", title: "Module 2, Lesson 1: Assets" }],
    },
    {
      title: "Lesson 2 — Liabilities",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-2.mp4", title: "Module 2, Lesson 2: Liabilities" }],
    },
    {
      title: "Lesson 3 — Capital and Drawings",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-3.mp4", title: "Module 2, Lesson 3: Capital and Drawings" }],
    },
    {
      title: "Lesson 4 — Revenue and Income",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-4.mp4", title: "Module 2, Lesson 4: Revenue and Income" }],
    },
    {
      title: "Lesson 5 — Expenses and Expenditure",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-5.mp4", title: "Module 2, Lesson 5: Expenses and Expenditure" }],
    },
    {
      title: "Lesson 6 — Debtors and Creditors",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-6.mp4", title: "Module 2, Lesson 6: Debtors and Creditors" }],
    },
    {
      title: "Lesson 7 — Accounts Receivable and Accounts Payable",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-7.mp4", title: "Module 2, Lesson 7: Accounts Receivable and Accounts Payable" }],
    },
    {
      title: "Lesson 8 — Profit, Loss and Financial Position",
      blocks: [{ type: "video", src: "videos/bookkeeping-basics/m2-lesson-8.mp4", title: "Module 2, Lesson 8: Profit, Loss and Financial Position" }],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "p",
          text: "Answer all 16 questions, then check your score. You'll need at least 80% to move on — if you don't make it, you can retry.",
        },
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "In simple words, what are assets?",
              options: [
                "A. Amounts the business owes to other parties",
                "B. Resources a business owns or controls that have economic value",
                "C. Money the owner takes out for personal use",
                "D. Costs of running the business",
              ],
              answer: "B",
            },
            {
              question: "A business has cash ₹50,000, bank balance ₹1,00,000, computers ₹80,000, furniture ₹20,000 and inventory ₹40,000. What are its total assets?",
              options: [
                "A. ₹2,40,000",
                "B. ₹1,70,000",
                "C. ₹2,90,000",
                "D. ₹3,10,000",
              ],
              answer: "C",
            },
            {
              question: "Which of these is a current liability?",
              options: [
                "A. GST payable",
                "B. A long-term bank loan",
                "C. Debentures payable",
                "D. A long-term lease liability",
              ],
              answer: "A",
            },
            {
              question: "A business owes a bank loan of ₹2,00,000, supplier payables of ₹30,000, electricity of ₹5,000 and salaries of ₹15,000. What are its total liabilities?",
              options: [
                "A. ₹2,30,000",
                "B. ₹2,45,000",
                "C. ₹2,00,000",
                "D. ₹2,50,000",
              ],
              answer: "D",
            },
            {
              question: "The owner withdraws ₹10,000 from the business bank account for personal expenses. What is the journal entry?",
              options: [
                "A. Debit Bank ₹10,000, credit Drawings ₹10,000",
                "B. Debit Drawings ₹10,000, credit Bank ₹10,000",
                "C. Debit Capital ₹10,000, credit Bank ₹10,000",
                "D. Debit Bank ₹10,000, credit Capital ₹10,000",
              ],
              answer: "B",
            },
            {
              question: "Opening capital is ₹5,00,000, additional capital is ₹50,000 and drawings are ₹20,000. What is the closing capital before profit or loss adjustments?",
              options: [
                "A. ₹5,70,000",
                "B. ₹5,50,000",
                "C. ₹5,30,000",
                "D. ₹4,80,000",
              ],
              answer: "C",
            },
            {
              question: "For a computer shop, how is interest earned from the bank treated?",
              options: [
                "A. As income, but generally not as sales revenue",
                "B. As sales revenue",
                "C. As a liability",
                "D. As owner's capital",
              ],
              answer: "A",
            },
            {
              question: "A computer shop has laptop sales ₹1,00,000, accessories sales ₹30,000, repair services ₹10,000 and bank interest ₹2,000. What is its revenue from ordinary business activities?",
              options: [
                "A. ₹1,42,000",
                "B. ₹1,30,000",
                "C. ₹1,02,000",
                "D. ₹1,40,000",
              ],
              answer: "D",
            },
            {
              question: "Which of these payments is usually recorded as an asset rather than an expense?",
              options: [
                "A. Office rent of ₹10,000",
                "B. Electricity of ₹2,000",
                "C. A laptop bought for business use for ₹50,000",
                "D. Staff salary of ₹15,000",
              ],
              answer: "C",
            },
            {
              question: "What can expenditure result in?",
              options: [
                "A. Either an expense in the Profit and Loss Statement or an asset in the Balance Sheet",
                "B. Only an expense",
                "C. Only a liability",
                "D. Only an increase in capital",
              ],
              answer: "A",
            },
            {
              question: "Divyam Associates sells a laptop worth ₹40,000 to ABC Enterprises on credit. Who is the debtor?",
              options: [
                "A. Divyam Associates",
                "B. ABC Enterprises",
                "C. The bank",
                "D. Both businesses",
              ],
              answer: "B",
            },
            {
              question: "A business has ABC Enterprises ₹40,000 receivable, XYZ Distributors ₹60,000 payable and PQR Solutions ₹25,000 receivable. What are its total debtors?",
              options: [
                "A. ₹60,000",
                "B. ₹40,000",
                "C. ₹1,25,000",
                "D. ₹65,000",
              ],
              answer: "D",
            },
            {
              question: "A US company provides consulting services worth $2,000 on credit. What is the journal entry?",
              options: [
                "A. Debit Service Revenue $2,000, credit Accounts Receivable $2,000",
                "B. Debit Accounts Payable $2,000, credit Service Revenue $2,000",
                "C. Debit Accounts Receivable $2,000, credit Service Revenue $2,000",
                "D. Debit Cash $2,000, credit Accounts Receivable $2,000",
              ],
              answer: "C",
            },
            {
              question: "What does an Accounts Payable ageing report show?",
              options: [
                "A. How long supplier invoices have remained unpaid",
                "B. How long customer invoices have remained unpaid",
                "C. The business's total sales for the year",
                "D. The owner's capital balance",
              ],
              answer: "A",
            },
            {
              question: "Total income is ₹1,00,000 and total expenses are ₹1,20,000. What is the result?",
              options: [
                "A. Net profit of ₹20,000",
                "B. Net loss of ₹20,000",
                "C. Net profit of ₹1,20,000",
                "D. Neither profit nor loss",
              ],
              answer: "B",
            },
            {
              question: "Total assets are ₹5,00,000 and total liabilities are ₹2,00,000. Using the accounting equation, what is the owner's equity?",
              options: [
                "A. ₹7,00,000",
                "B. ₹2,00,000",
                "C. ₹5,00,000",
                "D. ₹3,00,000",
              ],
              answer: "D",
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
      title: "Module 5 — Cash, Receivables, Payables and Reconciliation",
      blocks: [
        { type: "h3", text: "Module Overview" },
        {
          type: "p",
          text: "Cash is the lifeblood of a business. In this module you'll learn how to track the money coming in from customers, the money going out to suppliers, and how to prove the cash balance in the books is correct.",
        },
        { type: "h3", text: "By the End of This Module" },
        { type: "p", text: "You'll be able to:" },
        {
          type: "list",
          items: [
            "Record cash and bank transactions",
            "Manage accounts receivable — invoices and customer payments",
            "Manage accounts payable — supplier bills and payments",
            "Read a bank statement",
            "Prepare a bank reconciliation",
            "Find and fix common reconciliation differences",
          ],
        },
      ],
    },
    {
      title: "Recording Cash and Bank Transactions",
      blocks: [
        {
          type: "p",
          text: "In bookkeeping, “cash” usually means the money in the business bank account as well as any physical cash. Every movement of money is recorded in the Cash account.",
        },
        {
          type: "table",
          headers: ["Money in (debit Cash)", "Money out (credit Cash)"],
          rows: [
            ["Customer payments", "Supplier payments"],
            ["Cash sales", "Rent, wages and other expenses"],
            ["Owner investments", "Owner withdrawals"],
            ["Loans received", "Loan repayments"],
            ["Interest earned", "Bank fees"],
          ],
        },
        {
          type: "note",
          text: "Many businesses also keep a small petty cash box for minor purchases. It has its own account and is topped up from the bank.",
        },
      ],
    },
    {
      title: "Accounts Receivable",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "Accounts receivable (AR) is money customers owe the business for goods or services already delivered. It is a current asset.",
        },
        { type: "h3", text: "The Receivables Cycle" },
        {
          type: "steps",
          items: [
            { title: "Deliver the goods or service", body: "The sale is earned." },
            { title: "Issue an invoice", body: "Debit Accounts Receivable, credit Revenue." },
            { title: "Follow up", body: "Remind customers as the due date approaches." },
            { title: "Receive payment", body: "Debit Cash, credit Accounts Receivable." },
          ],
        },
        { type: "h3", text: "Example — ABC Design Services, November" },
        {
          type: "table",
          headers: ["Date", "Event", "AR balance"],
          rows: [
            ["Nov 3", "Invoice #1003 to Lumen Co, $12,000", "$12,000"],
            ["Nov 10", "Invoice #1004 to Orbit Ltd, $8,000", "$20,000"],
            ["Nov 20", "Lumen Co pays $12,000", "$8,000"],
            ["Nov 28", "Orbit Ltd pays $5,000 (part payment)", "$3,000"],
          ],
        },
      ],
    },
    {
      title: "Customer Payments and the AR Aging",
      blocks: [
        {
          type: "p",
          text: "Each payment must be applied to the invoice it pays. Orbit Ltd's $5,000 part payment leaves $3,000 still open on invoice #1004.",
        },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Cash", "$5,000", ""],
            ["Accounts Receivable — Orbit Ltd", "", "$5,000"],
          ],
        },
        { type: "h3", text: "The AR Aging Report" },
        {
          type: "p",
          text: "An aging report lists what each customer owes, grouped by how long it has been outstanding (e.g. current, 1–30 days, 31–60 days, over 60 days). Older balances need follow-up first.",
        },
        {
          type: "note",
          text: "The total of the aging report should always equal the Accounts Receivable balance in the general ledger.",
        },
      ],
    },
    {
      title: "Accounts Payable",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "Accounts payable (AP) is money the business owes suppliers for goods or services already received. It is a current liability.",
        },
        { type: "h3", text: "The Payables Cycle" },
        {
          type: "steps",
          items: [
            { title: "Receive goods or services", body: "Check they match what was ordered." },
            { title: "Record the supplier bill", body: "Debit Expense (or Asset), credit Accounts Payable." },
            { title: "Approve for payment", body: "Someone checks the bill is correct." },
            { title: "Pay on the due date", body: "Debit Accounts Payable, credit Cash." },
          ],
        },
        { type: "h3", text: "Example — ABC Design Services, November" },
        {
          type: "table",
          headers: ["Date", "Event", "AP balance"],
          rows: [
            ["Nov 5", "CloudSoft bill — software subscription, $1,500", "$1,500"],
            ["Nov 12", "PrintPro bill — printing, $2,200", "$3,700"],
            ["Nov 25", "CloudSoft paid $1,500", "$2,200"],
          ],
        },
        {
          type: "note",
          text: "Pay from the original bill, not from a statement or reminder — it's the easiest way to avoid paying the same bill twice.",
        },
      ],
    },
    {
      title: "Reading a Bank Statement",
      blocks: [
        { type: "p", text: "ABC Design Services' November bank statement:" },
        {
          type: "table",
          headers: ["Date", "Description", "Withdrawals", "Deposits", "Balance"],
          rows: [
            ["Nov 1", "Opening balance", "", "", "$97,800"],
            ["Nov 15", "Direct debit — internet", "$2,000", "", "$95,800"],
            ["Nov 20", "Deposit — Lumen Co", "", "$12,000", "$107,800"],
            ["Nov 25", "Transfer — CloudSoft", "$1,500", "", "$106,300"],
            ["Nov 30", "Interest earned", "", "$20", "$106,320"],
            ["Nov 30", "Monthly account fee", "$30", "", "$106,290"],
          ],
        },
        {
          type: "note",
          text: "A bank statement is written from the bank's point of view. Your deposit is money the bank owes you, so banks often call deposits “credits” — but in your books, a deposit is a debit to Cash.",
        },
      ],
    },
    {
      title: "The Cash Account in the Books",
      blocks: [
        { type: "p", text: "ABC Design Services' Cash account for November:" },
        {
          type: "table",
          headers: ["Date", "Description", "Debit", "Credit", "Balance"],
          rows: [
            ["Nov 1", "Opening balance", "", "", "$97,800"],
            ["Nov 15", "Internet direct debit", "", "$2,000", "$95,800"],
            ["Nov 20", "Lumen Co payment", "$12,000", "", "$107,800"],
            ["Nov 25", "Paid CloudSoft", "", "$1,500", "$106,300"],
            ["Nov 28", "Orbit Ltd payment (deposited Nov 30)", "$5,000", "", "$111,300"],
            ["Nov 30", "Rent — cheque #105", "", "$15,000", "$96,300"],
          ],
        },
        {
          type: "p",
          text: "The books show $96,300. The bank shows $106,290. The difference is $9,990 — and the bank reconciliation will explain it.",
        },
      ],
    },
    {
      title: "What Is a Bank Reconciliation?",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "A bank reconciliation compares the cash balance in the books with the balance on the bank statement at the same date, and explains every difference.",
        },
        { type: "h3", text: "Why Balances Differ" },
        {
          type: "table",
          headers: ["Item", "What it is", "Adjust"],
          rows: [
            ["Deposit in transit", "Recorded in the books, not yet on the statement", "Add to bank balance"],
            ["Outstanding cheque", "Written and recorded, not yet cleared by the bank", "Subtract from bank balance"],
            ["Bank fee", "On the statement, not yet in the books", "Subtract from book balance"],
            ["Interest earned", "On the statement, not yet in the books", "Add to book balance"],
            ["Errors", "Mistakes by the business or the bank", "Correct the side that made the error"],
          ],
        },
      ],
    },
    {
      title: "Preparing a Bank Reconciliation",
      blocks: [
        { type: "p", text: "Compare the two records line by line. Unmatched items for ABC Design Services:" },
        {
          type: "list",
          items: [
            "Orbit Ltd's $5,000 deposit — in the books, not on the statement (deposit in transit)",
            "Cheque #105 for $15,000 rent — in the books, not yet cleared (outstanding cheque)",
            "Interest of $20 — on the statement only",
            "Bank fee of $30 — on the statement only",
          ],
        },
        {
          type: "table",
          headers: ["Bank side", "Amount", "Book side", "Amount"],
          rows: [
            ["Balance per bank statement", "$106,290", "Balance per books", "$96,300"],
            ["Add: deposit in transit", "$5,000", "Add: interest earned", "$20"],
            ["Less: outstanding cheque #105", "($15,000)", "Less: bank fee", "($30)"],
            ["Adjusted bank balance", "$96,290", "Adjusted book balance", "$96,290"],
          ],
        },
        {
          type: "note",
          text: "Both sides agree at $96,290 — the true cash balance at November 30.",
        },
      ],
    },
    {
      title: "Recording the Reconciliation Adjustments",
      blocks: [
        {
          type: "p",
          text: "Only book-side items need journal entries. Bank-side items (deposits in transit and outstanding cheques) will clear on next month's statement by themselves.",
        },
        { type: "h3", text: "Bank Fee" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Bank Fees Expense", "$30", ""],
            ["Cash", "", "$30"],
          ],
        },
        { type: "h3", text: "Interest Earned" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Cash", "$20", ""],
            ["Interest Income", "", "$20"],
          ],
        },
        {
          type: "p",
          text: "After posting, the Cash account shows $96,300 − $30 + $20 = $96,290, matching the adjusted bank balance.",
        },
      ],
    },
    {
      title: "Fixing Common Reconciliation Differences",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Check the opening balance", body: "It should equal last month's reconciled balance." },
            { title: "Look for an item equal to the difference", body: "A single missing transaction often explains it." },
            { title: "Look for half the difference", body: "An amount entered on the wrong side doubles its effect." },
            { title: "Check if the difference divides by 9", body: "A transposition — e.g. $540 entered as $450 (difference $90) — always divides by 9." },
            { title: "Look for duplicates", body: "The same payment recorded twice." },
            { title: "Check dates", body: "A transaction recorded in the wrong month." },
          ],
        },
        {
          type: "note",
          text: "Never force a reconciliation to balance with an unexplained adjustment. Find the cause.",
        },
      ],
    },
    {
      title: "Common Mistakes",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Recording customer payments as new revenue", body: "Payments reduce Accounts Receivable; revenue was recorded on the invoice." },
            { title: "Not applying payments to specific invoices", body: "Customer balances and the aging report become wrong." },
            { title: "Paying bills from statements", body: "This risks duplicate payments." },
            { title: "Recording outstanding cheques again", body: "They're already in the books — they just haven't cleared." },
            { title: "Forgetting book-side adjustments", body: "Bank fees and interest must be recorded." },
            { title: "Reconciling only once a year", body: "Reconcile monthly so errors are found quickly." },
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
          text: "Bright Solutions' Cash account shows $77,700 at month-end. The bank statement shows $79,490. You find:",
        },
        {
          type: "list",
          items: [
            "Deposit in transit: $1,500",
            "Outstanding cheque: $2,400",
            "Bank fee on the statement: $15",
            "Interest on the statement: $5",
            "A customer's $900 direct payment on the statement, not yet recorded in the books",
          ],
        },
        { type: "h3", text: "Your Task" },
        { type: "p", text: "Prepare the bank reconciliation and list the journal entries needed." },
        { type: "h3", text: "Answer" },
        {
          type: "table",
          headers: ["Bank side", "Amount", "Book side", "Amount"],
          rows: [
            ["Balance per bank", "$79,490", "Balance per books", "$77,700"],
            ["Add: deposit in transit", "$1,500", "Add: customer payment", "$900"],
            ["Less: outstanding cheque", "($2,400)", "Add: interest", "$5"],
            ["", "", "Less: bank fee", "($15)"],
            ["Adjusted bank balance", "$78,590", "Adjusted book balance", "$78,590"],
          ],
        },
        {
          type: "list",
          items: [
            "Debit Cash $900, credit Accounts Receivable $900",
            "Debit Cash $5, credit Interest Income $5",
            "Debit Bank Fees Expense $15, credit Cash $15",
          ],
        },
      ],
    },
    {
      title: "Quick Test",
      blocks: [
        {
          type: "quiz",
          question: "A cheque has been written and recorded but hasn't cleared the bank. How is it treated in the reconciliation?",
          options: [
            "A. Added to the bank balance",
            "B. Subtracted from the bank balance",
            "C. Subtracted from the book balance",
            "D. Recorded again in the books",
          ],
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
              question: "What type of account is Accounts Receivable?",
              options: ["A. Current liability", "B. Current asset", "C. Expense", "D. Equity"],
              answer: "B",
            },
            {
              question: "Orbit Ltd pays $5,000 of an $8,000 invoice. How much remains open?",
              options: ["A. $0", "B. $5,000", "C. $3,000", "D. $8,000"],
              answer: "C",
            },
            {
              question: "A supplier bill is paid. What is the journal entry?",
              options: [
                "A. Debit Cash, credit Accounts Payable",
                "B. Debit Accounts Payable, credit Cash",
                "C. Debit Expense, credit Accounts Receivable",
                "D. Debit Revenue, credit Cash",
              ],
              answer: "B",
            },
            {
              question: "How is a deposit in transit treated in a bank reconciliation?",
              options: [
                "A. Added to the bank balance",
                "B. Subtracted from the bank balance",
                "C. Added to the book balance",
                "D. Ignored",
              ],
              answer: "A",
            },
            {
              question: "$540 was entered as $450. What clue helps find this error?",
              options: [
                "A. The difference is divisible by 9",
                "B. The difference is an even number",
                "C. The amount ends in zero",
                "D. There's no clue",
              ],
              answer: "A",
            },
          ],
        },
      ],
    },
    {
      title: "Module Summary",
      blocks: [
        { type: "p", text: "In this module you learned how to manage and prove the business's cash." },
        { type: "p", text: "You learned:" },
        {
          type: "list",
          items: [
            "How to record money in and out of the Cash account",
            "The receivables cycle and how to apply customer payments",
            "How to use an AR aging report",
            "The payables cycle and how to pay suppliers correctly",
            "How to read a bank statement",
            "Why bank and book balances differ",
            "How to prepare a bank reconciliation and record the adjustments",
            "How to find common reconciliation differences",
          ],
        },
        { type: "h3", text: "Key Concept to Remember" },
        {
          type: "note",
          text: "A monthly bank reconciliation proves the cash figure in the books is real. If you can't explain a difference, keep looking — don't force it.",
        },
      ],
    },
  ],
  5: [
    {
      title: "Module 6 — Trial Balance, Adjustments and Financial Statements",
      blocks: [
        { type: "h3", text: "Module Overview" },
        {
          type: "p",
          text: "This is the final module. You'll take ABC Design Services' books from September to November, check them with a trial balance, make the period-end adjustments, and prepare the three main financial statements.",
        },
        { type: "h3", text: "By the End of This Module" },
        { type: "p", text: "You'll be able to:" },
        {
          type: "list",
          items: [
            "Prepare a trial balance",
            "Find and correct common errors",
            "Record accruals, prepayments and depreciation",
            "Prepare an income statement",
            "Prepare a balance sheet",
            "Prepare a simple cash flow statement",
          ],
        },
      ],
    },
    {
      title: "What Is a Trial Balance?",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "A trial balance is a list of every ledger account and its balance at a date, with debit balances in one column and credit balances in the other.",
        },
        { type: "h3", text: "Why Prepare One?" },
        {
          type: "list",
          items: [
            "To check that total debits equal total credits.",
            "To see every account balance in one place.",
            "As the starting point for adjustments and the financial statements.",
          ],
        },
        { type: "h3", text: "How to Prepare It" },
        {
          type: "steps",
          items: [
            { title: "Balance every account", body: "Work out each ledger account's closing balance." },
            { title: "List the accounts", body: "In chart-of-accounts order: assets, liabilities, equity, revenue, expenses." },
            { title: "Put each balance in the right column", body: "Debit balances left, credit balances right." },
            { title: "Total both columns", body: "They should be equal." },
          ],
        },
      ],
    },
    {
      title: "Example: ABC Design Services' Trial Balance",
      blocks: [
        { type: "p", text: "Trial balance at November 30 (covering September to November), after the bank reconciliation:" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Cash", "$96,290", ""],
            ["Accounts Receivable", "$3,000", ""],
            ["Computer Equipment", "$40,000", ""],
            ["Accounts Payable", "", "$2,200"],
            ["Owner's Capital", "", "$120,000"],
            ["Owner's Drawings", "$2,500", ""],
            ["Design Revenue", "", "$67,000"],
            ["Interest Income", "", "$20"],
            ["Rent Expense", "$30,000", ""],
            ["Internet Expense", "$4,000", ""],
            ["Advertising Expense", "$5,000", ""],
            ["Office Supplies Expense", "$1,200", ""],
            ["Printing Expense", "$5,700", ""],
            ["Software Expense", "$1,500", ""],
            ["Bank Fees Expense", "$30", ""],
            ["Totals", "$189,220", "$189,220"],
          ],
        },
        {
          type: "note",
          text: "The totals agree. Rent Expense covers the September and November payments recorded in this course ($15,000 each).",
        },
      ],
    },
    {
      title: "Finding and Correcting Errors",
      blocks: [
        { type: "h3", text: "Errors That Unbalance the Trial Balance" },
        {
          type: "list",
          items: [
            "Only one side of an entry posted",
            "Amounts copied wrongly to one side (e.g. a transposition)",
            "A balance placed in the wrong column",
            "Addition mistakes",
          ],
        },
        { type: "h3", text: "Errors That Don't Unbalance It" },
        {
          type: "list",
          items: [
            "A transaction left out completely",
            "Posting to the wrong account (e.g. Internet instead of Advertising)",
            "The wrong amount used on both sides",
            "Debit and credit swapped",
          ],
        },
        { type: "h3", text: "Correcting an Error" },
        {
          type: "p",
          text: "A $2,000 advertising bill was posted to Internet Expense. Don't delete it — record a correcting entry:",
        },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Advertising Expense", "$2,000", ""],
            ["Internet Expense", "", "$2,000"],
          ],
        },
      ],
    },
    {
      title: "Why Adjusting Entries Are Needed",
      blocks: [
        {
          type: "p",
          text: "Day-to-day entries record invoices, bills and payments. But at period end, some revenue and expenses haven't been captured by any document yet. Adjusting entries make sure they appear in the right period.",
        },
        {
          type: "table",
          headers: ["Adjustment", "What it fixes"],
          rows: [
            ["Accrual", "An expense (or revenue) has occurred but hasn't been billed yet"],
            ["Prepayment", "Something was paid in advance and only part has been used"],
            ["Depreciation", "A fixed asset has been partly used up"],
          ],
        },
        {
          type: "note",
          text: "Adjusting entries usually don't involve cash. They move amounts between balance sheet and income statement accounts.",
        },
      ],
    },
    {
      title: "Accruals",
      blocks: [
        {
          type: "term",
          term: "Accrued expense",
          definition: "A cost that belongs to this period but hasn't been billed or paid yet.",
          example: "ABC Design Services used $600 of electricity in November. The bill arrives in December.",
        },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Utilities Expense", "$600", ""],
            ["Accrued Expenses (liability)", "", "$600"],
          ],
        },
        {
          type: "p",
          text: "When the December bill arrives, it's recorded against the accrued liability instead of being counted as a new expense.",
        },
      ],
    },
    {
      title: "Prepayments",
      blocks: [
        {
          type: "term",
          term: "Prepaid expense",
          definition: "A cost paid in advance that covers future periods. The unused part is an asset.",
          example: "The $1,500 CloudSoft bill is a 12-month subscription starting November 1. Only $125 ($1,500 ÷ 12) belongs to November.",
        },
        {
          type: "p",
          text: "The whole $1,500 was recorded as Software Expense. Move the unused $1,375 to an asset:",
        },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Prepaid Software (asset)", "$1,375", ""],
            ["Software Expense", "", "$1,375"],
          ],
        },
        {
          type: "note",
          text: "Each following month, $125 moves from Prepaid Software to Software Expense.",
        },
      ],
    },
    {
      title: "Depreciation",
      blocks: [
        {
          type: "term",
          term: "Depreciation",
          definition: "Spreading the cost of a fixed asset over the years it's used.",
          example: "ABC's $40,000 computer equipment will be used for 4 years with no value at the end.",
        },
        {
          type: "table",
          headers: ["Calculation", "Amount"],
          rows: [
            ["Cost ÷ useful life = $40,000 ÷ 4 years", "$10,000 a year"],
            ["Per month = $10,000 ÷ 12", "about $833"],
            ["September to November (3 months) = $40,000 ÷ 48 × 3", "$2,500"],
          ],
        },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Depreciation Expense", "$2,500", ""],
            ["Accumulated Depreciation", "", "$2,500"],
          ],
        },
        {
          type: "note",
          text: "Accumulated depreciation reduces the equipment's value on the balance sheet: $40,000 − $2,500 = $37,500.",
        },
      ],
    },
    {
      title: "The Income Statement",
      blocks: [
        {
          type: "p",
          text: "The income statement shows revenue and expenses for a period, and the resulting profit or loss.",
        },
        { type: "h3", text: "ABC Design Services — September to November" },
        {
          type: "table",
          headers: ["", "Amount"],
          rows: [
            ["Design Revenue", "$67,000"],
            ["Interest Income", "$20"],
            ["Total Revenue", "$67,020"],
            ["Rent Expense", "($30,000)"],
            ["Printing Expense", "($5,700)"],
            ["Advertising Expense", "($5,000)"],
            ["Internet Expense", "($4,000)"],
            ["Depreciation Expense", "($2,500)"],
            ["Office Supplies Expense", "($1,200)"],
            ["Utilities Expense", "($600)"],
            ["Software Expense", "($125)"],
            ["Bank Fees Expense", "($30)"],
            ["Total Expenses", "($49,155)"],
            ["Net Income", "$17,865"],
          ],
        },
        {
          type: "note",
          text: "Owner's drawings don't appear here — they aren't an expense.",
        },
      ],
    },
    {
      title: "The Balance Sheet",
      blocks: [
        {
          type: "p",
          text: "The balance sheet shows what the business owns, owes and the owner's equity at one date. It proves the accounting equation.",
        },
        { type: "h3", text: "ABC Design Services — at November 30" },
        {
          type: "table",
          headers: ["Assets", "Amount", "Liabilities and Equity", "Amount"],
          rows: [
            ["Cash", "$96,290", "Accounts Payable", "$2,200"],
            ["Accounts Receivable", "$3,000", "Accrued Expenses", "$600"],
            ["Prepaid Software", "$1,375", "Total Liabilities", "$2,800"],
            ["Computer Equipment", "$40,000", "Owner's Capital", "$120,000"],
            ["Less: Accumulated Depreciation", "($2,500)", "Add: Net Income", "$17,865"],
            ["", "", "Less: Drawings", "($2,500)"],
            ["", "", "Total Equity", "$135,365"],
            ["Total Assets", "$138,165", "Total Liabilities and Equity", "$138,165"],
          ],
        },
        {
          type: "note",
          text: "Assets ($138,165) = Liabilities ($2,800) + Owner's Equity ($135,365). The equation balances.",
        },
      ],
    },
    {
      title: "The Cash Flow Statement",
      blocks: [
        {
          type: "p",
          text: "The cash flow statement shows where cash came from and where it went, in three groups: operating, investing and financing.",
        },
        { type: "h3", text: "ABC Design Services — September to November" },
        {
          type: "table",
          headers: ["", "Amount"],
          rows: [
            ["Cash received from customers", "$64,000"],
            ["Interest received", "$20"],
            ["Cash paid for expenses", "($45,230)"],
            ["Net cash from operating activities", "$18,790"],
            ["Purchase of computer equipment", "($40,000)"],
            ["Net cash from investing activities", "($40,000)"],
            ["Owner's investments", "$120,000"],
            ["Owner's drawings", "($2,500)"],
            ["Net cash from financing activities", "$117,500"],
            ["Net increase in cash", "$96,290"],
            ["Cash at September 1", "$0"],
            ["Cash at November 30", "$96,290"],
          ],
        },
        {
          type: "note",
          text: "Profit ($17,865) and operating cash ($18,790) differ — for example, depreciation reduced profit but used no cash, and $3,000 of revenue hasn't been collected yet.",
        },
      ],
    },
    {
      title: "Common Mistakes",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Assuming a balanced trial balance means no errors", body: "Omissions and wrong-account postings still balance." },
            { title: "Forgetting adjusting entries", body: "Without accruals, prepayments and depreciation, profit is wrong." },
            { title: "Including drawings as an expense", body: "Drawings reduce equity, not profit." },
            { title: "Showing equipment without accumulated depreciation", body: "The balance sheet would overstate assets." },
            { title: "Confusing profit with cash", body: "A profitable business can still run short of cash." },
          ],
        },
      ],
    },
    {
      title: "Practical Activity",
      blocks: [
        { type: "h3", text: "Scenario" },
        { type: "p", text: "Bright Solutions' account balances at the end of its second month:" },
        {
          type: "list",
          items: [
            "Cash $77,700",
            "Equipment $36,800",
            "Owner's Capital $85,000",
            "Owner's Drawings $1,000",
            "Service Revenue $43,500",
            "Rent Expense $10,000",
            "Utilities Expense $3,000",
          ],
        },
        { type: "h3", text: "Your Tasks" },
        {
          type: "list",
          items: [
            "Prepare the trial balance.",
            "Record depreciation of $600 on the equipment.",
            "Calculate net income after the adjustment.",
          ],
        },
        { type: "h3", text: "Answer" },
        {
          type: "table",
          headers: ["Account", "Debit", "Credit"],
          rows: [
            ["Cash", "$77,700", ""],
            ["Equipment", "$36,800", ""],
            ["Owner's Capital", "", "$85,000"],
            ["Owner's Drawings", "$1,000", ""],
            ["Service Revenue", "", "$43,500"],
            ["Rent Expense", "$10,000", ""],
            ["Utilities Expense", "$3,000", ""],
            ["Totals", "$128,500", "$128,500"],
          ],
        },
        {
          type: "p",
          text: "Depreciation: debit Depreciation Expense $600, credit Accumulated Depreciation $600. Net income = $43,500 − $10,000 − $3,000 − $600 = $29,900.",
        },
      ],
    },
    {
      title: "Quick Test",
      blocks: [
        {
          type: "quiz",
          question: "Equipment costing $40,000 will be used for 4 years with no value at the end. What is the yearly depreciation?",
          options: ["A. $4,000", "B. $10,000", "C. $2,500", "D. $40,000"],
          answer: "B",
        },
      ],
    },
    {
      title: "Knowledge Check",
      blocks: [
        {
          type: "p",
          text: "Answer all 5 questions, then check your score. You'll need at least 80% to finish the course — if you don't make it, you can retry.",
        },
        {
          type: "knowledge-check",
          passPct: 80,
          questions: [
            {
              question: "What does a balanced trial balance prove?",
              options: [
                "A. The books have no errors at all",
                "B. Total debits equal total credits",
                "C. The business made a profit",
                "D. All customers have paid",
              ],
              answer: "B",
            },
            {
              question: "$600 of November electricity will be billed in December. What is the November entry?",
              options: [
                "A. No entry until the bill arrives",
                "B. Debit Utilities Expense, credit Accrued Expenses",
                "C. Debit Cash, credit Utilities Expense",
                "D. Debit Prepaid Expenses, credit Cash",
              ],
              answer: "B",
            },
            {
              question: "A $1,500 annual subscription starts November 1. How much is November's expense?",
              options: ["A. $1,500", "B. $1,375", "C. $125", "D. $150"],
              answer: "C",
            },
            {
              question: "Which statement shows assets, liabilities and equity at one date?",
              options: ["A. Income statement", "B. Balance sheet", "C. Cash flow statement", "D. Trial balance"],
              answer: "B",
            },
            {
              question: "Why can profit differ from operating cash flow?",
              options: [
                "A. Depreciation uses no cash and some revenue isn't collected yet",
                "B. Profit always equals cash",
                "C. Drawings are an expense",
                "D. Equipment purchases are expenses",
              ],
              answer: "A",
            },
          ],
        },
      ],
    },
    {
      title: "Module Summary",
      blocks: [
        { type: "p", text: "Congratulations — you've completed the full bookkeeping cycle." },
        { type: "p", text: "You learned:" },
        {
          type: "list",
          items: [
            "How to prepare a trial balance",
            "Which errors a trial balance does and doesn't find",
            "How to record correcting entries",
            "How to record accruals, prepayments and depreciation",
            "How to prepare an income statement",
            "How to prepare a balance sheet",
            "How to prepare a simple cash flow statement",
          ],
        },
        { type: "h3", text: "Key Concept to Remember" },
        {
          type: "note",
          text: "Record → reconcile → adjust → report. Following this cycle every period turns individual transactions into reliable financial statements.",
        },
      ],
    },
  ],
}
