import { fq } from "@/lib/finalTest"

// Final test bank for Chart of Accounts Setup — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("Brightline's owner can't see how much was spent on software. What's the likely cause?", "Software, phone and internet are all coded to one broad account", ["The bank feed is switched off", "Software isn't a business expense", "The trial balance doesn't balance"], "The chart can only report what its accounts capture."),
  fq("Which step makes an account available in the general ledger?", "Adding it to the chart of accounts", ["Running a profit and loss report", "Reconciling the bank", "Closing the year"], "You can't post to an account that isn't on the chart."),
  fq("Corner Books' “Misc” account holds $9,400. Why is that a problem?", "A large unexplained balance hides useful information", ["Misc accounts are illegal", "It makes the trial balance unbalance", "It doubles the tax"], "Investigate and reclassify large Misc balances."),
  fq("Where should a chart of accounts design start?", "With the questions the owner, lender and tax return need answered", ["With the longest possible list of accounts", "With the bank's account names", "With supplier names"], "Design the chart around the decisions it supports."),
  fq("Corner Books recorded a new laptop as an expense. What's wrong?", "A long-lasting asset was set up as an expense", ["Laptops can't be bought by bookshops", "It should be revenue", "Nothing — that's correct"], "It belongs in fixed assets."),

  // Module 2
  fq("What is Corner Books' gross margin if sales are $180,000 and cost of books sold is $108,000?", "40%", ["60%", "28%", "72%"], "$72,000 gross profit ÷ $180,000."),
  fq("Which account type is Sales tax payable?", "Current liability", ["Income", "Current asset", "Expense"], "It's owed to the government."),
  fq("Bank interest earned by Brightline belongs in:", "Other income", ["Cost of sales", "Operating expenses", "Current liabilities"], "It's outside normal trading."),
  fq("What matching account do fixed assets usually need?", "Accumulated depreciation", ["Sales tax payable", "Owner's drawings", "Cost of sales"], "It records the asset being used up."),
  fq("What does separating operating and other expenses reveal?", "Operating profit — how the core business performed", ["The bank balance", "Sales tax owed", "The owner's drawings"], "Finance and one-off items are kept apart."),

  // Module 3
  fq("In the common scheme, which range holds cost of sales?", "5000–5999", ["2000–2999", "3000–3999", "8000–8999"], "Cost of sales sits between income and operating expenses."),
  fq("Where would Brightline number a new “Webinar platform fees” marketing account?", "6530, within the 6500 Marketing group", ["1530", "4530", "9999"], "Keep related accounts together."),
  fq("How are balance sheet accounts usually ordered within their range?", "By liquidity — cash first, then receivables, inventory and fixed assets", ["Alphabetically", "By size of balance", "By date created"], "The most liquid assets come first."),
  fq("Which is a clearer name for an account called “Ads”?", "Online advertising", ["Stuff", "Joe", "Misc 2"], "Avoid abbreviations only one person understands."),
  fq("When does an amount deserve its own account?", "When it's material to readers or must be reported separately for tax", ["Whenever a new supplier is used", "Every time an amount exceeds $10", "Never — use Misc"], "Otherwise use an existing account or a tag."),

  // Module 4
  fq("Why does Corner Books split income into In-store sales and Online sales?", "The owner wants to see whether online sales are growing", ["Tax law always requires it", "The bank requires it", "To reduce the number of accounts"], "Design for the owner's questions."),
  fq("Brightline wants profit by client project. What's the cleanest approach?", "Tag income and project costs by project", ["Create separate income accounts per project", "Create a new company per project", "Use the Misc account"], "Tags add detail without extra accounts."),
  fq("Which accounts suit a construction business?", "Work in progress and retentions", ["Food cost and beverage cost", "Marketplace platform fees", "Grants received"], "Retentions and WIP are typical in construction."),
  fq("What's the main risk with tags?", "Incomplete tagging gives misleading reports", ["Tags change account types", "Tags delete transactions", "Tags double the totals"], "Check tagging at month-end."),
  fq("Which cost-of-sales account suits Corner Books?", "Freight in", ["Subcontractors", "Unbilled work", "Professional insurance"], "Freight to bring stock in is a direct cost."),

  // Module 5
  fq("Corner Books' In-store sales account should default to which tax setting?", "The standard sales tax rate", ["No tax", "Wages tax", "The rate for imports"], "Tax mapping sets a default rate per account; Wages has no tax."),
  fq("What does each Xero account have besides a name?", "A code, a type and a default tax rate", ["A bank balance and a supplier", "A colour and an icon", "An owner and a password"], "These control coding and reporting."),
  fq("What's a safe way to test a large chart import?", "Import into a test company, or import a few accounts first", ["Import straight into the live company", "Import twice to be sure", "Delete the existing chart first"], "Check before importing everything."),
  fq("Which accounts can't be deleted in software?", "System accounts such as Accounts receivable and Retained earnings", ["Any expense account", "Newly created accounts", "Accounts with no transactions"], "The software needs them."),
  fq("In Xero, what happens to an account that has transactions but is no longer needed?", "It's archived", ["It's deleted", "It's renamed for a new purpose", "It's merged automatically"], "Archived accounts keep their history."),

  // Module 6
  fq("How are accounts merged in QuickBooks Online?", "By renaming one to exactly match another of the same type", ["By exporting both to a spreadsheet", "By deleting both", "It can't be done"], "Matching names merge accounts."),
  fq("How can transactions be moved between accounts in Xero?", "Using find and recode, or a journal", ["By renaming the account", "By archiving both accounts", "By deleting the history"], "Then archive the old account."),
  fq("Which accounts are candidates for retirement?", "Accounts with no activity for over a year", ["The bank account", "Accounts receivable", "Any account with a large balance"], "Check rules and recurring entries first."),
  fq("What should a chart-of-accounts guide contain?", "Each account with examples of what goes in it", ["Every transaction for the year", "The owner's passwords", "Supplier bank details"], "It helps users code consistently."),
  fq("Which is part of a year-end chart review?", "Checking whether new revenue streams need accounts or tags", ["Deleting all inactive suppliers", "Changing the bank", "Resetting account numbers"], "The chart should keep up with the business."),
]
