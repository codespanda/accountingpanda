import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, cards, check, h, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Chart of Accounts Setup — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "What a chart of accounts is",
      p("A chart of accounts (COA) is the master list of every account a business uses to record its transactions. Each account has a name, a type and usually a number."),
      p("Think of it as the filing system for the business's money: every transaction must be filed in one of these accounts."),
      table(
        ["Number", "Account", "Type"],
        [
          ["1000", "Business checking", "Asset"],
          ["1200", "Accounts receivable", "Asset"],
          ["2000", "Accounts payable", "Liability"],
          ["3000", "Owner's capital", "Equity"],
          ["4000", "Sales", "Income"],
          ["6100", "Rent", "Expense"],
        ],
      ),
    ),
    screen(
      "From chart to ledger to reports",
      steps(
        ["Chart of accounts", "Defines the accounts that exist."],
        ["General ledger", "Holds every transaction, posted to those accounts."],
        ["Trial balance", "Lists each account's balance."],
        ["Financial statements", "Group the accounts into the balance sheet and profit and loss."],
      ),
      p("Because reports are built from accounts, the chart decides what your reports can show. If there's no account for marketing, you can't see marketing costs."),
    ),
    screen(
      "Signs of a poorly designed chart",
      bullets(
        "Hundreds of accounts, many used once or never.",
        "Duplicates such as “Phone”, “Telephone” and “Mobile”.",
        "Vague accounts like “Miscellaneous” or “General expenses” holding large amounts.",
        "Accounts named after one supplier or one person.",
        "No logical numbering, so related accounts don't appear together.",
      ),
      tip("Aim for useful, not detailed", "A good chart has enough accounts to answer the owner's questions and pass tax and reporting needs — and no more. Extra detail can come from classes, tags or reports instead."),
    ),
    check(
      1,
      q("What is a chart of accounts?", ["A list of customers", "The master list of accounts used to record transactions", "A bank statement", "A sales forecast"], 1, "It's the complete list of accounts the business uses."),
      q("What holds every individual transaction posted to the accounts?", ["The chart of accounts", "The general ledger", "The budget", "The invoice"], 1, "The general ledger holds the transactions; the chart defines the accounts."),
      q("Why does the chart of accounts affect reporting?", ["Reports are built from account balances", "It sets tax rates", "It controls bank fees", "It doesn't affect reporting"], 0, "Reports group account balances, so they can only show what the accounts capture."),
      q("Which is a sign of a poorly designed chart?", ["Logical numbering", "Duplicate accounts like “Phone” and “Telephone”", "Clear names", "Separate income and expense accounts"], 1, "Duplicates split the same costs across accounts and confuse reports."),
      q("What's a good goal for a chart of accounts?", ["As many accounts as possible", "Enough accounts to answer key questions, and no more", "Only five accounts", "One account per supplier"], 1, "A lean, useful chart is easier to use and read."),
    ),
  ],
  1: [
    screen(
      "The five account types",
      table(
        ["Type", "What it records", "Report"],
        [
          ["Assets", "What the business owns or is owed", "Balance sheet"],
          ["Liabilities", "What the business owes", "Balance sheet"],
          ["Equity", "The owner's stake", "Balance sheet"],
          ["Income", "Money earned from sales and other sources", "Profit and loss"],
          ["Expenses", "Costs of running the business", "Profit and loss"],
        ],
      ),
      note("Balance sheet accounts carry their balances into the next year. Profit and loss accounts start at zero each year — their net result moves into equity as retained earnings."),
    ),
    screen(
      "Income, cost of sales and expenses",
      terms(
        ["Income", "Sales, service fees and other revenue."],
        ["Cost of sales (COGS)", "Direct costs of what was sold, such as stock, materials or subcontractors. Income minus cost of sales gives gross profit."],
        ["Operating expenses", "Running costs such as rent, wages, software and marketing."],
        ["Other income and expenses", "Items outside normal trading, such as interest or gains on selling assets."],
      ),
      tip("Why separate cost of sales?", "It shows gross margin — how much each sale earns before overheads. Mixing direct costs into overheads hides it."),
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
      caution("Post transactions to the sub-accounts, not the parent. A balance sitting on the parent itself makes the breakdown incomplete."),
    ),
    check(
      2,
      q("Which account type appears on the profit and loss?", ["Assets", "Liabilities", "Expenses", "Equity"], 2, "Income and expenses appear on the profit and loss."),
      q("What does income minus cost of sales give?", ["Net profit", "Gross profit", "Equity", "Cash flow"], 1, "Income less direct costs is gross profit."),
      q("Which item belongs in cost of sales for a retailer?", ["Office rent", "Stock that was sold", "Accounting fees", "Bank interest"], 1, "The cost of stock sold is a direct cost."),
      q("Which accounts start at zero each new year?", ["Balance sheet accounts", "Profit and loss accounts", "All accounts", "None"], 1, "Income and expense accounts are closed into equity each year."),
      q("Where should transactions be posted when sub-accounts exist?", ["To the parent", "To the sub-accounts", "To suspense", "To equity"], 1, "Posting to sub-accounts keeps the breakdown complete."),
    ),
  ],
  2: [
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
      note("There's no single legal standard — what matters is that the scheme is logical and used consistently."),
    ),
    screen(
      "Leaving room for growth",
      p("Number accounts in steps of 10 or 100, not 1, so new accounts can be slotted in later in the right place."),
      table(
        ["Tight numbering", "Room to grow"],
        [
          ["6001 Rent", "6100 Rent"],
          ["6002 Utilities", "6200 Utilities"],
          ["6003 Telephone", "6300 Telephone and internet"],
        ],
      ),
      p("With room to grow, “6150 Rent — storage unit” fits neatly next to rent."),
    ),
    screen(
      "Naming accounts and adding new ones",
      bullets(
        "Use clear, specific names: “Software subscriptions”, not “Computer stuff”.",
        "Keep the same style throughout — singular or plural, “and” or “&”.",
        "Name accounts by what they are, not who you pay: “Accounting fees”, not “Smith & Co”.",
      ),
      h("Before adding a new account, ask"),
      bullets(
        "Is there already an account this belongs in?",
        "Will the amount be significant or recurring?",
        "Does the owner, tax return or lender need to see it separately?",
        "Could a class, tag or report give the same detail instead?",
      ),
    ),
    check(
      3,
      q("In a common scheme, which range is used for liabilities?", ["1000s", "2000s", "4000s", "6000s"], 1, "Liabilities are usually numbered in the 2000s."),
      q("Why number accounts in steps of 10 or 100?", ["It looks neater", "To leave room for new accounts in the right place", "The law requires it", "To match bank account numbers"], 1, "Gaps let you add accounts later without renumbering."),
      q("Which is the best account name?", ["Smith & Co", "Misc", "Accounting fees", "Stuff"], 2, "Name accounts by what they record."),
      q("Is there one legal standard numbering scheme for all small businesses?", ["Yes", "No — consistency and logic matter most", "Only for retailers", "Only in software"], 1, "Schemes vary; use one logically and consistently."),
      q("When might a tag or class be better than a new account?", ["When you need detail without cluttering the chart", "Never", "For every new expense", "Only for assets"], 0, "Tags and classes add detail while keeping the chart lean."),
    ),
  ],
  3: [
    screen(
      "Service vs. retail businesses",
      cards(
        ["Service business", "Income by service line (consulting, training). Few cost-of-sales accounts — perhaps subcontractors. Expenses focus on wages, software, travel and marketing."],
        ["Retail or inventory business", "Inventory asset account, cost of goods sold, freight in, stock adjustments and merchant fees. Income may be split by product line or sales channel."],
      ),
      table(
        ["Account", "Service firm", "Retail shop"],
        [
          ["Inventory", "Not needed", "1300 Inventory"],
          ["Cost of sales", "5100 Subcontractors", "5000 Cost of goods sold · 5100 Freight in"],
          ["Income", "4000 Consulting · 4100 Training", "4000 In-store sales · 4100 Online sales"],
        ],
      ),
    ),
    screen(
      "Classes, locations and tracking categories",
      p("Most accounting software lets you tag transactions with a class, location, department or tracking category. This adds a second dimension to reports without adding accounts."),
      table(
        ["Instead of", "Use"],
        [
          ["“Rent — Store A” and “Rent — Store B”", "One Rent account, tagged by location"],
          ["“Wages — Sales” and “Wages — Admin”", "One Wages account, tagged by department"],
        ],
      ),
      tip("Keep it consistent", "Tags only help if every relevant transaction is tagged. Decide which transactions must be tagged and check it at month-end."),
    ),
    screen(
      "Industry accounts and how owners read reports",
      terms(
        ["Construction", "Work in progress, retentions receivable and payable, subcontractor costs."],
        ["Restaurants", "Food cost and beverage cost separately, tips payable, delivery-platform fees."],
        ["Online sellers", "Sales by marketplace, platform fees, shipping income and costs, returns."],
        ["Professional services", "Unbilled work (WIP), client reimbursable expenses, professional insurance."],
      ),
      p("Finally, ask the owner what they look at each month. If they track gross margin by product line, the chart and tags must make that possible."),
    ),
    check(
      4,
      q("Which account does a retailer need that a consulting firm usually doesn't?", ["Rent", "Inventory", "Bank account", "Owner's capital"], 1, "Retailers hold stock, so they need an inventory account."),
      q("A business has three stores. What's the cleanest way to see rent by store?", ["Three rent accounts", "One rent account tagged by location", "A separate company per store", "Ignore it"], 1, "Location tags give the breakdown without extra accounts."),
      q("Which accounts are typical for a restaurant?", ["Retentions receivable", "Food cost and beverage cost", "Work in progress", "Marketplace fees only"], 1, "Restaurants usually track food and beverage costs separately."),
      q("What makes tags useful in reports?", ["Using them consistently on every relevant transaction", "Using as many as possible", "Only tagging large items", "Tagging at year-end only"], 0, "Incomplete tagging gives incomplete reports."),
      q("Why ask the owner how they read reports?", ["To design accounts and tags that answer their questions", "To pick a software brand", "To set tax rates", "It isn't needed"], 0, "The chart should support the decisions the owner makes."),
    ),
  ],
  4: [
    screen(
      "Default charts in QuickBooks and Xero",
      p("When you create a company in QuickBooks Online or Xero, the software suggests a default chart of accounts based on the business type and country. It's a starting point, not a finished design."),
      steps(
        ["Review the default list", "Remove or deactivate accounts the business won't use."],
        ["Rename to match your scheme", "Apply your naming and numbering style."],
        ["Add what's missing", "Industry accounts, cost of sales and sub-accounts."],
        ["Turn on account numbers", "Both products let you show account codes or numbers."],
      ),
    ),
    screen(
      "Importing a chart of accounts",
      p("For a new client or a big clean-up, it's faster to build the chart in a spreadsheet and import it. QuickBooks Online and Xero both accept file imports of accounts."),
      table(
        ["Code", "Name", "Type", "Tax / notes"],
        [
          ["1000", "Business checking", "Bank", "—"],
          ["4000", "Consulting income", "Income", "Default sales tax rate"],
          ["6100", "Rent", "Expense", "—"],
        ],
      ),
      caution("Check the account types carefully before importing. A wrong type (e.g. an expense set up as an asset) puts the balance on the wrong report, and some types can't be changed once transactions are posted."),
    ),
    screen(
      "Tax mapping, report mapping and archiving",
      terms(
        ["Tax mapping", "Many systems let you set a default tax rate or tax line for each account, so transactions are coded correctly for sales tax, GST or VAT and income tax."],
        ["Report mapping", "Accounts are grouped into report headings, such as current assets or operating expenses. Check the groups so reports read correctly."],
        ["Deactivating or archiving", "Accounts with history can't simply be deleted. QuickBooks Online lets you make an account inactive; Xero lets you archive it. The history stays, but no new transactions can use it."],
      ),
      note("Menu names change between software versions — use each product's help centre for the current steps."),
    ),
    check(
      5,
      q("What is the default chart in QuickBooks or Xero?", ["A finished design", "A starting point to review and adjust", "Fixed and unchangeable", "Only for US companies"], 1, "The suggested chart should be reviewed and tailored."),
      q("Why might you import a chart of accounts?", ["It's faster for a large setup or clean-up", "Software forbids manual entry", "To delete history", "To change the currency"], 0, "Building the list in a spreadsheet and importing saves time."),
      q("What's the main risk when importing accounts?", ["Wrong account types", "Too few colours", "Short names", "Using numbers"], 0, "A wrong type puts balances on the wrong report."),
      q("An unused account has past transactions. What should you do?", ["Delete it", "Make it inactive or archive it", "Rename it to a new purpose", "Move it to equity"], 1, "Inactivating or archiving keeps the history but stops new use."),
      q("What does tax mapping do?", ["Sets default tax coding for an account", "Calculates income tax automatically", "Files returns", "Changes the fiscal year"], 0, "It links accounts to tax rates or tax lines so coding is consistent."),
    ),
  ],
  5: [
    screen(
      "Cleaning up duplicates and unused accounts",
      steps(
        ["Run an account list with balances and activity", "Spot duplicates, near-duplicates and accounts with no recent use."],
        ["Choose the account to keep", "Pick the best-named account in the right place."],
        ["Merge or reclassify", "Software can often merge accounts of the same type; otherwise move the balances with a journal entry."],
        ["Deactivate the leftovers", "Inactive or archived accounts disappear from drop-down lists."],
      ),
      caution("Merging usually can't be undone, and it changes past reports. Agree it with the owner or accountant first, especially for closed periods."),
    ),
    screen(
      "Controlling who can add accounts",
      p("Charts get messy when everyone adds accounts on the fly. Set a simple rule:"),
      bullets(
        "Only the bookkeeper or accountant adds, renames or deactivates accounts.",
        "Other users choose from the existing list and flag anything that doesn't fit.",
        "Keep a short chart-of-accounts guide explaining what goes where.",
      ),
      tip("A one-page guide helps", "List each expense account with a few examples, e.g. “6300 Software subscriptions — accounting software, Microsoft 365, design tools”."),
    ),
    screen(
      "Year-end review of the chart",
      table(
        ["Check", "Why"],
        [
          ["Balances in Miscellaneous or Suspense", "Reclassify to proper accounts before closing the year."],
          ["Accounts with unexpected signs", "An expense with a credit balance usually means a coding error."],
          ["New activities or revenue streams", "Add accounts or tags for next year."],
          ["Tax and lender needs", "Make sure the chart still matches the tax return and any loan reporting."],
          ["Inactive accounts", "Deactivate those no longer needed."],
        ],
      ),
    ),
    check(
      6,
      q("What should you do before merging accounts?", ["Nothing", "Agree it with the owner or accountant", "Delete all transactions", "Change the year-end"], 1, "Merging is usually permanent and changes past reports."),
      q("Who should normally be allowed to add new accounts?", ["Every user", "The bookkeeper or accountant", "Customers", "Suppliers"], 1, "Limiting this keeps the chart clean."),
      q("An expense account shows a credit balance at year-end. What does it suggest?", ["Normal activity", "A likely coding error", "High profits", "Tax due"], 1, "Expenses normally have debit balances."),
      q("What should happen to balances in Miscellaneous at year-end?", ["Leave them", "Reclassify them to proper accounts", "Delete them", "Move them to equity"], 1, "Proper classification gives accurate statements."),
      q("What helps users code transactions consistently?", ["A short guide to what goes in each account", "More accounts", "Random numbering", "Removing account names"], 0, "A simple guide with examples reduces miscoding."),
    ),
  ],
}

export default lessons
