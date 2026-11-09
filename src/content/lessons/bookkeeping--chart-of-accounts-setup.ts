import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  exercises,
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

// Chart of Accounts Setup — lesson screens by module index (0 = Module 1).
// Two businesses are used throughout: Brightline Consulting (services) and
// Corner Books (a bookshop that holds inventory).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — What a Chart of Accounts Does",
      ["The chart of accounts is the backbone of every set of books. Get it right and reports almost build themselves; get it wrong and every month-end becomes a clean-up job."],
      [
        "Explain what a chart of accounts is",
        "Describe how it connects to the general ledger",
        "Explain how it drives financial reports",
        "Spot the signs of a poorly designed chart",
      ],
    ),
    screen(
      "Purpose of a chart of accounts",
      p("A chart of accounts (COA) is the master list of every account a business uses to record its transactions. Each account has a name, a type and usually a number."),
      bullets(
        "It's the filing system for the business's money — every transaction is filed in at least two of its accounts.",
        "It makes recording consistent: the same kind of cost always goes to the same account.",
        "It decides what the business can report on.",
      ),
      table(
        ["Number", "Account", "Type"],
        [
          ["1000", "Business checking", "Asset"],
          ["1200", "Accounts receivable", "Asset"],
          ["2000", "Accounts payable", "Liability"],
          ["3000", "Owner's capital", "Equity"],
          ["4000", "Consulting income", "Income"],
          ["6100", "Rent", "Expense"],
        ],
      ),
    ),
    screen(
      "How it connects to the general ledger",
      steps(
        ["Chart of accounts", "Defines which accounts exist."],
        ["Transactions", "Invoices, bills and bank items are coded to those accounts."],
        ["General ledger", "Holds every transaction, account by account."],
        ["Trial balance", "Lists each account's balance."],
        ["Financial statements", "Group the balances into the balance sheet and profit and loss."],
      ),
      note("You can't post to an account that isn't on the chart. Adding an account to the chart is what makes it available in the ledger."),
    ),
    screen(
      "How it drives your financial reports",
      p("Reports are built by grouping account balances. The chart decides what the reports can show."),
      compare(
        ["One broad account", "Brightline Consulting codes all software, phones and internet to “Office expenses”.", ["The owner can't see that software costs tripled"]],
        ["Separate accounts", "Software subscriptions, Telephone and Internet each have an account.", ["Each cost is visible and can be managed"]],
      ),
      tip("Start from the questions", "Ask what the owner, lender and tax return need to see. Then make sure the chart can answer those questions."),
    ),
    screen(
      "Signs of a poorly designed chart",
      bullets(
        "Hundreds of accounts, many used once or never.",
        "Duplicates such as “Phone”, “Telephone” and “Mobile”.",
        "Vague accounts like “Miscellaneous” holding large amounts.",
        "Accounts named after one supplier or person — “Smith & Co”.",
        "No logical order, so related accounts are scattered.",
        "Wrong account types — an asset set up as an expense.",
      ),
    ),
    screen(
      "Example: a messy chart",
      p("Corner Books' first bookkeeper set up these expense accounts:"),
      table(
        ["Account", "Problem"],
        [
          ["Phone", "Duplicate of Telephone"],
          ["Telephone", "Duplicate of Phone"],
          ["Amazon", "Named after a supplier — purchases there could be stock, supplies or equipment"],
          ["Misc", "$9,400 this year — too large to be unexplained"],
          ["New laptop", "An asset set up as an expense"],
        ],
      ),
      p("In this course you'll learn how to design it properly and how to clean up a chart like this."),
    ),
    mistakes(
      ["Adding accounts on the fly", "Each new account should have a clear purpose and owner approval."],
      ["Copying a chart from another industry", "A consulting chart won't suit a bookshop."],
      ["Using Miscellaneous as a home for everything", "Large balances there hide useful information."],
    ),
    check(
      1,
      q("What is a chart of accounts?", ["A list of customers", "The master list of accounts used to record transactions", "A bank statement", "A sales forecast"], 1, "It's the complete list of accounts."),
      q("What holds every individual transaction, account by account?", ["The chart of accounts", "The general ledger", "The budget", "The invoice"], 1, "The chart defines accounts; the ledger holds the transactions."),
      q("Why does the chart affect reporting?", ["Reports are built by grouping account balances", "It sets tax rates", "It controls bank fees", "It doesn't"], 0, "Reports can only show what the accounts capture."),
      q("Which is a sign of a poorly designed chart?", ["Logical numbering", "Duplicates like “Phone” and “Telephone”", "Clear names", "Separate income and expense accounts"], 1, "Duplicates split the same costs."),
      q("Why is an account called “Amazon” a problem?", ["Amazon is expensive", "Purchases there could belong in several different accounts", "It's too short", "It's illegal"], 1, "Name accounts by what they record, not by supplier."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — What can the owner see?",
          ["Brightline's owner asks how much was spent on software last year. All software, internet and phone costs went to “Office expenses”. What's the problem and the fix?"],
          ["The chart can't separate software costs.", "Fix: add a Software subscriptions account (and Telephone and Internet) and code future costs there; reclassify past costs if the owner needs history."],
        ],
        [
          "Exercise 2 — Spot the issues",
          ["List the problems in Corner Books' expense accounts on the “messy chart” screen."],
          ["Phone/Telephone duplicates; “Amazon” named after a supplier; large Misc balance; laptop recorded as an expense instead of an asset."],
        ],
      ),
    ),
    summary(
      ["The purpose of a chart of accounts", "How it connects to the general ledger", "How it drives financial reports", "The signs of a poorly designed chart"],
      "The chart of accounts decides what your books can tell you. Design it around the questions the business needs answered.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Account Types and Structure",
      ["Every account has a type, and the type decides where it appears in the financial statements. This module covers the types and how to structure them with parent and sub-accounts."],
      [
        "Classify assets, liabilities and equity accounts",
        "Separate income, cost of sales and expenses",
        "Distinguish operating from other expenses",
        "Explain balance sheet vs. profit and loss accounts",
        "Use parent accounts and sub-accounts",
      ],
    ),
    screen(
      "Assets",
      table(
        ["Group", "Examples", "Corner Books"],
        [
          ["Current assets", "Cash, receivables, inventory, prepayments", "Checking account, Inventory — books"],
          ["Fixed assets", "Equipment, furniture, vehicles", "Shelving, Point-of-sale terminals"],
          ["Other assets", "Deposits, long-term investments", "Rent deposit"],
        ],
      ),
      note("Fixed assets usually also need a matching Accumulated depreciation account."),
    ),
    screen(
      "Liabilities and equity",
      table(
        ["Group", "Examples"],
        [
          ["Current liabilities", "Accounts payable, credit cards, sales tax payable, wages payable, current portion of loans"],
          ["Long-term liabilities", "Bank loans and leases due after more than 12 months"],
          ["Equity", "Owner's capital, Owner's drawings, Retained earnings (or share capital for companies)"],
        ],
      ),
      tip("Set up tax accounts properly", "Sales tax, GST or VAT collected is a liability — never income. Give it its own account."),
    ),
    screen(
      "Income and cost of sales",
      terms(
        ["Income", "Sales, service fees and other revenue from normal trading."],
        ["Cost of sales (cost of goods sold)", "Direct costs of what was sold — stock, materials, freight in, subcontractors."],
        ["Gross profit", "Income minus cost of sales."],
      ),
      table(
        ["", "Corner Books"],
        [
          ["Book sales", "$180,000"],
          ["Cost of books sold", "($108,000)"],
          ["Gross profit", "$72,000 (40% gross margin)"],
        ],
      ),
      note("Keeping direct costs in cost of sales shows gross margin — how much each sale earns before overheads."),
    ),
    screen(
      "Operating and other expenses",
      compare(
        ["Operating expenses", "Running costs of the business.", ["Rent", "Wages", "Software", "Marketing", "Insurance"]],
        ["Other income and expenses", "Items outside normal trading.", ["Interest received", "Interest paid", "Gains or losses on selling assets"]],
      ),
      p("Separating them shows operating profit — how the core business performed — before finance and one-off items."),
    ),
    screen(
      "Balance sheet vs. profit and loss accounts",
      table(
        ["", "Balance sheet accounts", "Profit and loss accounts"],
        [
          ["Types", "Assets, liabilities, equity", "Income, cost of sales, expenses"],
          ["Shows", "Position at a date", "Performance over a period"],
          ["At year-end", "Balances carry forward", "Reset to zero; net profit moves to retained earnings"],
        ],
      ),
    ),
    screen(
      "Parent accounts and sub-accounts",
      p("Sub-accounts group related accounts under a parent, so reports can show a total with the detail underneath."),
      table(
        ["Parent", "Sub-accounts"],
        [
          ["6200 Vehicle expenses", "6210 Fuel · 6220 Repairs · 6230 Insurance"],
          ["6400 Marketing", "6410 Online ads · 6420 Printing · 6430 Events"],
        ],
      ),
      caution("Post transactions to the sub-accounts, not the parent. A balance sitting on the parent makes the breakdown incomplete."),
    ),
    screen(
      "Example: classifying Corner Books' accounts",
      table(
        ["Account", "Type", "Statement"],
        [
          ["Inventory — books", "Current asset", "Balance sheet"],
          ["Shelving", "Fixed asset", "Balance sheet"],
          ["Sales tax payable", "Current liability", "Balance sheet"],
          ["Book sales", "Income", "Profit and loss"],
          ["Cost of books sold", "Cost of sales", "Profit and loss"],
          ["Card processing fees", "Operating expense", "Profit and loss"],
          ["Loan interest", "Other expense", "Profit and loss"],
        ],
      ),
    ),
    mistakes(
      ["Recording sales tax as income", "It's a liability owed to the government."],
      ["Putting direct costs in overheads", "Gross margin becomes meaningless."],
      ["Posting to parent accounts", "Use the sub-accounts."],
      ["Setting up a fixed asset as an expense", "It disappears from the balance sheet."],
    ),
    check(
      2,
      q("Which account type appears on the profit and loss?", ["Assets", "Liabilities", "Expenses", "Equity"], 2, "Income and expenses are P&L accounts."),
      q("Corner Books has sales of $180,000 and cost of books sold of $108,000. What's gross profit?", ["$72,000", "$108,000", "$288,000", "$180,000"], 0, "$180,000 − $108,000."),
      q("Where does loan interest usually belong?", ["Cost of sales", "Other expenses", "Equity", "Current assets"], 1, "It's outside normal trading."),
      q("What happens to P&L account balances at year-end?", ["They carry forward", "They reset to zero and net profit moves to retained earnings", "They're deleted", "They become assets"], 1, "P&L accounts restart each year."),
      q("Where should transactions be posted when sub-accounts exist?", ["To the parent", "To the sub-accounts", "To suspense", "To equity"], 1, "Keep the breakdown complete."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Classify for Brightline Consulting: (a) laptop, (b) credit card balance, (c) consulting fees, (d) subcontractor costs for client projects, (e) office rent, (f) bank interest earned."],
          ["(a) Fixed asset. (b) Current liability. (c) Income. (d) Cost of sales. (e) Operating expense. (f) Other income."],
        ],
        [
          "Exercise 2 — Sub-accounts",
          ["Brightline's “Travel” costs are $24,000 a year. Suggest sub-accounts."],
          ["For example: Airfare, Accommodation, Meals while travelling, Local transport."],
        ],
      ),
    ),
    summary(
      ["Asset, liability and equity accounts", "Income, cost of sales and gross profit", "Operating vs. other expenses", "Balance sheet vs. profit and loss accounts", "Parent accounts and sub-accounts"],
      "An account's type decides where it lands in the statements. Classify carefully and the reports will read correctly.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Numbering and Naming",
      ["Good numbers keep related accounts together; good names make coding obvious. This module shows how to number and name accounts so the chart stays usable as the business grows."],
      ["Use common numbering ranges", "Leave room for growth", "Write clear, consistent account names", "Decide when to add a new account — and when not to"],
    ),
    screen(
      "Common numbering ranges",
      table(
        ["Range", "Type"],
        [
          ["1000–1999", "Assets"],
          ["2000–2999", "Liabilities"],
          ["3000–3999", "Equity"],
          ["4000–4999", "Income"],
          ["5000–5999", "Cost of sales"],
          ["6000–7999", "Operating expenses"],
          ["8000–8999", "Other income and expenses"],
        ],
      ),
      note("There's no single legal standard for small businesses. What matters is a logical scheme used consistently."),
    ),
    screen(
      "Order within each range",
      p("Within a range, list accounts in a sensible order — usually by liquidity for the balance sheet and by importance for expenses."),
      table(
        ["Number", "Account"],
        [
          ["1000", "Checking account"],
          ["1010", "Savings account"],
          ["1100", "Accounts receivable"],
          ["1200", "Inventory"],
          ["1300", "Prepaid expenses"],
          ["1500", "Equipment"],
          ["1510", "Accumulated depreciation — equipment"],
        ],
      ),
    ),
    screen(
      "Leaving room for growth",
      p("Number accounts in steps of 10 or 100, not 1, so new accounts can be slotted in later."),
      table(
        ["Tight numbering", "Room to grow"],
        [
          ["6001 Rent", "6100 Rent"],
          ["6002 Utilities", "6200 Utilities"],
          ["6003 Telephone", "6300 Telephone and internet"],
        ],
      ),
      p("With room to grow, “6150 Rent — storage unit” fits right next to Rent."),
    ),
    screen(
      "Clear, consistent account names",
      table(
        ["Weak name", "Clear name"],
        [
          ["Computer stuff", "Software subscriptions"],
          ["Smith & Co", "Accounting fees"],
          ["Misc", "Bank charges (or another specific account)"],
          ["Ads", "Online advertising"],
        ],
      ),
      bullets(
        "Name accounts by what they record, not who is paid.",
        "Keep one style throughout — singular or plural, “and” or “&”.",
        "Avoid abbreviations only one person understands.",
      ),
    ),
    screen(
      "When to add a new account — and when not to",
      steps(
        ["Is there already an account for it?", "Check the chart first."],
        ["Is it significant or recurring?", "One-off small items rarely need their own account."],
        ["Does someone need it separately?", "The owner, a lender or the tax return."],
        ["Would a class or tag do instead?", "E.g. one Rent account tagged by location."],
      ),
      tip("A useful rule", "If an amount would be material to a reader of the reports, or must be reported separately for tax, give it an account."),
    ),
    screen(
      "Example: Brightline's expense range",
      table(
        ["Number", "Account"],
        [
          ["6100", "Rent"],
          ["6200", "Utilities"],
          ["6300", "Telephone and internet"],
          ["6400", "Software subscriptions"],
          ["6500", "Marketing"],
          ["6510", "Online advertising"],
          ["6520", "Events and sponsorship"],
          ["6600", "Professional fees"],
          ["6700", "Travel"],
          ["6800", "Insurance"],
          ["6900", "Bank charges"],
        ],
      ),
    ),
    mistakes(
      ["Numbering in steps of 1", "There's no room to insert new accounts."],
      ["Naming accounts after suppliers", "Name them by what they record."],
      ["Creating an account for every small item", "Use existing accounts or tags."],
      ["Mixing numbering schemes", "Pick one and use it everywhere."],
    ),
    check(
      3,
      q("In a common scheme, which range is used for liabilities?", ["1000s", "2000s", "4000s", "6000s"], 1, "Liabilities are usually 2000–2999."),
      q("Why number accounts in steps of 10 or 100?", ["It looks neater", "To leave room for new accounts in the right place", "The law requires it", "To match bank numbers"], 1, "Gaps allow insertion later."),
      q("Which is the best account name?", ["Smith & Co", "Misc", "Accounting fees", "Stuff"], 2, "Name by what it records."),
      q("Is there one legal numbering standard for all small businesses?", ["Yes", "No — logic and consistency matter most", "Only for retailers", "Only in software"], 1, "Use a logical scheme consistently."),
      q("When might a tag be better than a new account?", ["When you need extra detail without cluttering the chart", "Never", "For every expense", "Only for assets"], 0, "E.g. Rent tagged by location."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Rename",
          ["Suggest better names: (a) “Google”, (b) “Stuff for office”, (c) “Joe”, (d) “Misc 2”."],
          ["(a) Software subscriptions or Online advertising, depending on what's bought. (b) Office supplies. (c) Contractor fees (or Wages if Joe is an employee). (d) Investigate the items and move them to specific accounts."],
        ],
        [
          "Exercise 2 — Number a new account",
          ["Brightline wants a separate account for “Webinar platform fees”, related to marketing. Where would you number it?"],
          ["6530 — within the 6500 Marketing group, after 6520 Events and sponsorship."],
        ],
      ),
    ),
    summary(
      ["Common numbering ranges by account type", "Ordering accounts within a range", "Leaving room for growth", "Writing clear, consistent names", "Deciding when to add an account"],
      "Number logically with room to grow, name accounts by what they record, and add accounts only when they earn their place.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Tailoring the Chart to Your Business",
      ["No single chart fits every business. This module shows how a service business and a retail business differ, how to add detail with tracking, and how to match the chart to the way owners read reports."],
      ["Design a chart for a service business", "Design a chart for a retail or inventory business", "Use classes, locations or tracking categories", "Add industry-specific accounts", "Match the chart to how owners read reports"],
    ),
    screen(
      "Service businesses",
      p("Brightline Consulting sells advice and project work. Its chart focuses on income streams and people costs."),
      table(
        ["Area", "Brightline Consulting"],
        [
          ["Income", "4000 Consulting fees · 4100 Training workshops · 4200 Reimbursed expenses"],
          ["Cost of sales", "5100 Subcontractors · 5200 Project travel"],
          ["Key expenses", "Wages, Software subscriptions, Professional insurance, Marketing"],
          ["Assets", "Few fixed assets; possibly Unbilled work (WIP)"],
        ],
      ),
    ),
    screen(
      "Retail and inventory businesses",
      p("Corner Books buys and sells stock. Its chart needs inventory and cost-of-sales accounts."),
      table(
        ["Area", "Corner Books"],
        [
          ["Assets", "1200 Inventory — books · 1210 Inventory — gifts"],
          ["Income", "4000 In-store sales · 4100 Online sales"],
          ["Cost of sales", "5000 Cost of books sold · 5010 Cost of gifts sold · 5100 Freight in · 5200 Stock adjustments"],
          ["Key expenses", "Card processing fees, Rent, Wages, Packaging"],
        ],
      ),
      tip("Split by what matters", "Corner Books splits sales by channel because the owner wants to know whether online sales are growing."),
    ),
    screen(
      "Classes, locations and tracking categories",
      p("Most accounting software lets you tag transactions with a class, location, department or tracking category. This adds a second dimension to reports without adding accounts."),
      table(
        ["Instead of", "Use"],
        [
          ["“Rent — Downtown” and “Rent — Mall”", "One Rent account, tagged by location"],
          ["“Wages — Sales” and “Wages — Admin”", "One Wages account, tagged by department"],
          ["Income accounts per client project", "One Consulting fees account, tagged by project"],
        ],
      ),
      caution("Tags only help if every relevant transaction is tagged. Decide which transactions must be tagged and check at month-end."),
    ),
    screen(
      "Industry-specific accounts",
      terms(
        ["Construction", "Work in progress, retentions receivable and payable, subcontractor costs."],
        ["Restaurants", "Food cost and beverage cost separately, tips payable, delivery-platform fees."],
        ["Online sellers", "Sales by marketplace, platform fees, shipping income and costs, returns."],
        ["Professional services", "Unbilled work (WIP), client reimbursable expenses, professional insurance."],
        ["Non-profits", "Restricted and unrestricted funds, grants received."],
      ),
    ),
    screen(
      "Matching the chart to how owners read reports",
      p("Ask the owner what they look at each month, then design accounts and tags so the reports answer those questions directly."),
      table(
        ["Owner's question", "Design choice"],
        [
          ["Which sales channel is growing?", "Separate income accounts per channel"],
          ["What's the gross margin on gifts vs. books?", "Separate cost-of-sales accounts per product line"],
          ["Is the mall store profitable?", "Tag all income and costs by location"],
          ["How much do we spend on marketing in total?", "A Marketing parent account with sub-accounts"],
        ],
      ),
    ),
    screen(
      "Example: Corner Books' chart",
      table(
        ["Number", "Account", "Type"],
        [
          ["1000", "Checking account", "Asset"],
          ["1200", "Inventory — books", "Asset"],
          ["1210", "Inventory — gifts", "Asset"],
          ["1500", "Shelving and fixtures", "Asset"],
          ["2000", "Accounts payable", "Liability"],
          ["2100", "Sales tax payable", "Liability"],
          ["3000", "Owner's capital", "Equity"],
          ["4000", "In-store sales", "Income"],
          ["4100", "Online sales", "Income"],
          ["5000", "Cost of books sold", "Cost of sales"],
          ["5010", "Cost of gifts sold", "Cost of sales"],
          ["6100", "Rent", "Expense"],
          ["6200", "Card processing fees", "Expense"],
          ["6300", "Wages", "Expense"],
        ],
      ),
    ),
    mistakes(
      ["Using a generic chart unchanged", "Tailor it to how the business earns and spends."],
      ["Creating accounts per location or project", "Use tags instead."],
      ["Tagging inconsistently", "Partial tagging gives misleading reports."],
      ["Ignoring the owner's questions", "Design for the decisions they make."],
    ),
    check(
      4,
      q("Which account does a retailer need that a consulting firm usually doesn't?", ["Rent", "Inventory", "Bank account", "Owner's capital"], 1, "Retailers hold stock."),
      q("Corner Books has two stores. What's the cleanest way to see rent by store?", ["Two rent accounts", "One rent account tagged by location", "A separate company per store", "Ignore it"], 1, "Tags avoid extra accounts."),
      q("Why does Corner Books split sales into In-store and Online?", ["The owner wants to see whether online sales are growing", "Tax law requires it", "Software forces it", "No reason"], 0, "Design for the owner's questions."),
      q("Which accounts are typical for a restaurant?", ["Retentions receivable", "Food cost and beverage cost", "Work in progress", "Grants received"], 1, "Restaurants track them separately."),
      q("What makes tags useful in reports?", ["Using them consistently", "Using as many as possible", "Tagging only large items", "Tagging at year-end only"], 0, "Incomplete tagging gives incomplete reports."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Design for a question",
          ["Brightline's owner wants to know the profit on each client project. Accounts or tags?"],
          ["Tags (classes or tracking categories) by project, applied to income and project costs. Keep one Consulting fees account and one Subcontractors account."],
        ],
        [
          "Exercise 2 — A café chart",
          ["List income and cost-of-sales accounts for a café that sells food, coffee and catering."],
          ["Income: Food sales, Beverage sales, Catering income.", "Cost of sales: Food cost, Beverage cost, Catering supplies."],
        ],
      ),
    ),
    summary(
      ["How service and retail charts differ", "Using classes, locations and tracking categories", "Industry-specific accounts", "Designing the chart around the owner's questions"],
      "Tailor the chart to how the business earns and spends money — and use tags, not extra accounts, for extra dimensions.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Setting Up in Accounting Software",
      ["Most charts of accounts live in software such as QuickBooks Online or Xero. This module shows how to start from the default chart, import a prepared chart, map accounts for tax and reports, and retire accounts safely."],
      ["Review and adapt a default chart", "Import a chart of accounts", "Set tax and report mapping", "Make accounts inactive or archive them"],
    ),
    screen(
      "Default charts in QuickBooks and Xero",
      p("When you create a company in QuickBooks Online or Xero, the software suggests a default chart based on the business's country and industry. It's a starting point, not a finished design."),
      steps(
        ["Review the default list", "Remove or deactivate accounts the business won't use."],
        ["Rename to match your scheme", "Apply your naming style."],
        ["Add what's missing", "Industry accounts, cost of sales, sub-accounts."],
        ["Turn on account numbers", "Both products can show account codes."],
      ),
      note("Some accounts are system accounts the software needs, such as Accounts receivable, Accounts payable, sales tax and Retained earnings. They can't be deleted."),
    ),
    screen(
      "Account types in software",
      compare(
        ["QuickBooks Online", "Each account has an account type and a detail type, which control where it appears in reports.", ["e.g. Expenses → Rent or lease of buildings"]],
        ["Xero", "Each account has a code, a name, a type and a default tax rate.", ["e.g. 6100 · Rent · Expense · Tax rate"]],
      ),
      caution("Choose types carefully. A wrong type puts the balance on the wrong report, and some types can't be changed once transactions are posted."),
    ),
    screen(
      "Importing a chart of accounts",
      p("For a new client or a big clean-up, it's faster to build the chart in a spreadsheet and import it. Both QuickBooks Online and Xero accept file imports of accounts."),
      table(
        ["Code", "Name", "Type", "Tax rate / notes"],
        [
          ["1000", "Checking account", "Bank", "—"],
          ["4000", "In-store sales", "Revenue", "Standard sales tax"],
          ["5000", "Cost of books sold", "Direct costs", "—"],
          ["6100", "Rent", "Expense", "—"],
        ],
      ),
      tip("Test first", "Import into a test company first, or import a few accounts and check them before importing the full list."),
    ),
    screen(
      "Tax mapping and report mapping",
      terms(
        ["Tax mapping", "Set a default tax rate (sales tax, GST or VAT) or tax line on each account, so transactions are coded correctly by default."],
        ["Report mapping", "Accounts are grouped under report headings such as Current assets or Operating expenses. Check the grouping so reports read correctly."],
      ),
      p("For example, Corner Books' In-store sales account defaults to the standard sales tax rate, while Wages has no tax."),
    ),
    screen(
      "Inactive and archived accounts",
      compare(
        ["QuickBooks Online", "Accounts with history can't be deleted — make them inactive. They disappear from drop-down lists but keep their history.", ["Make inactive"]],
        ["Xero", "Accounts with no transactions can be deleted; accounts with transactions can be archived.", ["Delete or archive"]],
      ),
      note("Menu names change between software versions — use each product's help centre for the current steps."),
    ),
    mistakes(
      ["Keeping every default account", "Remove what the business won't use."],
      ["Wrong account types on import", "Check types before importing."],
      ["Missing default tax rates", "Transactions get coded with the wrong tax."],
      ["Deleting accounts with history", "Inactivate or archive instead."],
    ),
    check(
      5,
      q("What is the default chart in QuickBooks or Xero?", ["A finished design", "A starting point to review and adapt", "Unchangeable", "Only for US companies"], 1, "Tailor it."),
      q("In QuickBooks Online, what controls where an account appears in reports?", ["Its colour", "Its account type and detail type", "Its number", "Its creation date"], 1, "Types drive reporting."),
      q("Why import a prepared chart?", ["It's faster for a big setup or clean-up", "Software forbids manual entry", "To delete history", "To change currency"], 0, "Build in a spreadsheet, then import."),
      q("An unused account has past transactions. What should you do?", ["Delete it", "Make it inactive (QBO) or archive it (Xero)", "Rename it to a new purpose", "Move it to equity"], 1, "History is kept."),
      q("What does tax mapping do?", ["Sets a default tax rate or tax line on an account", "Files returns", "Calculates income tax", "Changes the year-end"], 0, "Consistent tax coding."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Prepare an import",
          ["Write import rows (code, name, type) for Brightline: Consulting fees, Subcontractors, Software subscriptions, Professional insurance."],
          ["4000 · Consulting fees · Revenue", "5100 · Subcontractors · Direct costs (Cost of sales)", "6400 · Software subscriptions · Expense", "6800 · Professional insurance · Expense"],
        ],
        [
          "Exercise 2 — Retire an account",
          ["Corner Books no longer uses “Gift wrapping supplies”, which has last year's transactions. What do you do in QuickBooks Online and in Xero?"],
          ["QuickBooks Online: make it inactive.", "Xero: archive it (it can't be deleted because it has transactions)."],
        ],
      ),
    ),
    summary(
      ["Reviewing and adapting default charts", "Account types in QuickBooks Online and Xero", "Importing a chart of accounts", "Tax and report mapping", "Making accounts inactive or archiving them"],
      "Software makes the chart easy to change — so set types, tax rates and report mapping carefully from the start.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Maintaining the Chart",
      ["Charts drift over time: duplicates appear, accounts fall out of use, and vague accounts grow. This module shows how to keep the chart clean year after year."],
      ["Merge duplicate accounts", "Clean up unused accounts", "Control who can add or change accounts", "Run a year-end review of the chart"],
    ),
    screen(
      "Merging duplicate accounts",
      steps(
        ["Find duplicates", "Run an account list with balances and look for near-identical names."],
        ["Choose the account to keep", "The best-named account in the right place."],
        ["Merge or reclassify", "QuickBooks Online merges accounts of the same type when one is renamed to exactly match the other. In Xero, use find and recode, or a journal, to move transactions, then archive the old account."],
        ["Check the result", "Run a report to confirm the balances combined correctly."],
      ),
      caution("Merging usually can't be undone and changes past reports. Agree it with the owner or accountant first, especially for closed periods."),
    ),
    screen(
      "Cleaning up unused accounts",
      bullets(
        "Run an account list showing the last transaction date.",
        "Accounts with no activity for over a year are candidates for retirement.",
        "Delete accounts that were never used; inactivate or archive those with history.",
        "Check that no bank rules or recurring transactions still point to them.",
      ),
    ),
    screen(
      "Controlling who can add accounts",
      p("Charts get messy when everyone adds accounts on the fly. Set a simple rule:"),
      bullets(
        "Only the bookkeeper or accountant adds, renames or retires accounts.",
        "Other users choose from the existing list and flag anything that doesn't fit.",
        "Keep a short chart-of-accounts guide explaining what goes where.",
      ),
      tip("A one-page guide", "List each expense account with examples — e.g. “6400 Software subscriptions — accounting software, Microsoft 365, design tools”."),
    ),
    screen(
      "Year-end review of the chart",
      table(
        ["Check", "Why"],
        [
          ["Balances in Miscellaneous or Suspense", "Reclassify to proper accounts before closing the year"],
          ["Accounts with unexpected signs", "An expense with a credit balance usually means a coding error"],
          ["New activities or revenue streams", "Add accounts or tags for next year"],
          ["Tax and lender needs", "Make sure the chart still matches the tax return and loan reporting"],
          ["Inactive accounts", "Retire those no longer needed"],
        ],
      ),
    ),
    screen(
      "Example: cleaning up Corner Books",
      table(
        ["Problem", "Fix"],
        [
          ["Phone and Telephone", "Merge into 6300 Telephone and internet"],
          ["Amazon", "Recode purchases to Inventory, Office supplies or Equipment; retire the account"],
          ["Misc — $9,400", "Investigate and reclassify; keep Misc for genuinely small items only"],
          ["New laptop (expense)", "Reclassify to Equipment and start depreciating it"],
          ["Old “Gift wrapping supplies”", "Inactivate or archive"],
        ],
      ),
    ),
    mistakes(
      ["Merging without approval", "It changes past reports permanently."],
      ["Deleting accounts with history", "Inactivate or archive instead."],
      ["Letting everyone add accounts", "Limit who can change the chart."],
      ["Skipping the year-end review", "Problems compound year after year."],
    ),
    check(
      6,
      q("What should you do before merging accounts?", ["Nothing", "Agree it with the owner or accountant", "Delete all transactions", "Change the year-end"], 1, "Merging is usually permanent."),
      q("How do you merge accounts in QuickBooks Online?", ["Rename one to exactly match another of the same type", "Delete both", "Export to Excel", "It's impossible"], 0, "Matching names merge accounts of the same type."),
      q("Who should normally be allowed to add new accounts?", ["Every user", "The bookkeeper or accountant", "Customers", "Suppliers"], 1, "Limit changes to keep the chart clean."),
      q("An expense account shows a credit balance at year-end. What does it suggest?", ["Normal activity", "A likely coding error", "High profits", "Tax due"], 1, "Expenses normally have debit balances."),
      q("What should happen to a large Miscellaneous balance at year-end?", ["Leave it", "Investigate and reclassify it", "Delete it", "Move it to equity"], 1, "Proper classification gives accurate statements."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Plan a clean-up",
          ["Brightline has accounts: Office expenses ($31,000), Software ($0), Software subscriptions ($6,200), Misc ($4,800), Travel ($0, last used two years ago). Plan the clean-up."],
          ["Review Office expenses and move software, phone and internet costs to proper accounts.", "Software has no balance or history? Delete it; otherwise merge it into Software subscriptions.", "Investigate and reclassify Misc.", "Inactivate or archive Travel."],
        ],
        [
          "Exercise 2 — Write a guide entry",
          ["Write a one-line guide entry for Brightline's Professional fees account."],
          ["“6600 Professional fees — accounting, legal and payroll service fees. Not subcontractors on client projects (use 5100).”"],
        ],
      ),
    ),
    summary(
      ["Merging duplicate accounts safely", "Cleaning up unused accounts", "Controlling who can change the chart", "Reviewing the chart at year-end"],
      "A chart of accounts needs looking after. Review it every year, control changes, and fix problems before they spread.",
    ),
  ],
}

export default lessons
