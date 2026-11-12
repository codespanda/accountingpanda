import { fq } from "@/lib/finalTest"

// Final test bank for US Accounting — separate from the module knowledge
// checks. The correct answer is listed first; the test shuffles the options.

export default [
  // Module 1
  fq("Which body oversees reporting by US public companies?", "The SEC", ["The FASB", "The IRS", "The AICPA"], "Public companies must follow US GAAP."),
  fq("Which ASC topic covers leases?", "ASC 842", ["ASC 606", "ASC 330", "ASC 718"], "Revenue is ASC 606."),
  fq("Which council develops simpler GAAP alternatives for private companies?", "The Private Company Council", ["The PCAOB", "The SEC", "The IRS"], "Works with the FASB."),
  fq("Under the cash basis, when is an expense recorded?", "When it's paid", ["When incurred", "At year-end", "When budgeted"], "Cash moves."),
  fq("Who are Bluebird Candle Co.'s owners?", "Elena (60%) and Marcus (40%)", ["Megan alone", "Elena and Megan equally", "A single corporation"], "Megan is the bookkeeper."),
  fq("Which professional is licensed by a state board of accountancy?", "A CPA", ["An enrolled agent", "A bookkeeper", "A tax preparer with a PTIN only"], "EAs are licensed by the IRS."),

  // Module 2
  fq("How much does it cost to get an EIN from the IRS?", "Nothing", ["$50", "$250", "Depends on the state"], "Issued free."),
  fq("In a typical US chart of accounts, which range holds cost of goods sold?", "5000s", ["1000s", "3000s", "4000s"], "Wax, wicks and jars at Bluebird."),
  fq("How long should records supporting an asset be kept?", "Until 3 years after the year the asset is disposed of", ["1 year", "Until purchase", "6 months"], "Asset records."),
  fq("Why does Megan name expense accounts to match Form 1120-S lines?", "To speed up the CPA's year-end mapping", ["Because the IRS requires it", "To avoid sales tax", "To reduce depreciation"], "Practical tip."),
  fq("A processor deposits $4,865 for $5,000 of sales. What are the fees?", "$135", ["$5,000", "$4,865", "$0"], "Record gross sales and fees."),
  fq("What does Bluebird give its wholesale customers so they can report payments correctly?", "Its Form W-9", ["Its bank PIN", "Form W-2", "Form 941"], "W-9 shows its EIN and entity type."),

  // Module 3
  fq("What is Texas's state sales tax rate?", "6.25%", ["8.25%", "2%", "7%"], "Plus up to 2% local."),
  fq("What's the sales tax on a $200 store sale in Austin?", "$16.50", ["$12.50", "$20.00", "$4.00"], "8.25%."),
  fq("Which state has no statewide sales tax?", "Oregon", ["Texas", "California", "Florida"], "Montana too."),
  fq("What economic nexus threshold does Texas use?", "$500,000 of sales", ["$100,000 of sales", "$10,000 of sales", "Any sale"], "California uses $500,000 too."),
  fq("By when is a Texas monthly sales tax return due?", "The 20th of the next month", ["The 1st", "The 15th", "The last day of the month"], "Texas due date."),
  fq("What should Bluebird keep for a tax-free sale to a reseller?", "A resale certificate", ["A W-2", "Nothing", "A sales receipt only"], "In case of audit."),

  // Module 4
  fq("Which three areas does the IRS look at to classify a worker?", "Behavioral control, financial control and the relationship", ["Age, location and pay", "Hours, title and uniform", "Only the contract wording"], "The whole relationship."),
  fq("Does a $1,800 payment in 2026 to an individual web designer need a 1099-NEC?", "No — it's under $2,000", ["Yes", "Only if paid by check", "Only in Texas"], "2026 threshold."),
  fq("Who reports card payments made to a contractor?", "The payment processor, on Form 1099-K", ["The payer on 1099-NEC", "Nobody", "The bank on W-2"], "Avoids double reporting."),
  fq("What's the backup withholding on $3,000 when no TIN is given?", "$720", ["$300", "$459", "$0"], "24%."),
  fq("When is Form 1099-MISC due to the IRS if filed electronically?", "March 31", ["January 31", "February 28", "April 15"], "Paper by February 28."),
  fq("Are payments for goods bought from a supplier reported on Form 1099-NEC?", "No", ["Yes, always", "Only above $600", "Only for wax"], "Only services are."),

  // Module 5
  fq("Which return does a multi-member LLC taxed as a partnership file?", "Form 1065", ["Form 1120-S", "Form 1120", "Schedule C"], "Partners get K-1s."),
  fq("How is pass-through income taxed if it isn't distributed?", "Owners are still taxed on their share", ["It isn't taxed", "The entity pays 21%", "It's taxed only when distributed"], "Through K-1s."),
  fq("What's Elena's annual salary from Bluebird?", "$60,000", ["$72,000", "$120,000", "$48,000"], "Reasonable compensation."),
  fq("What's the federal tax for a C corporation with $250,000 taxable income?", "$52,500", ["$87,500", "$25,000", "$21,000"], "21%."),
  fq("What's the term for corporate income being taxed again when paid as dividends?", "Double taxation", ["Pass-through", "Backup withholding", "Nexus"], "C corporations."),
  fq("If Bluebird distributes $80,000, how much goes to Marcus?", "$32,000", ["$40,000", "$48,000", "$20,000"], "40%."),

  // Module 6
  fq("For property acquired after which date is 100% bonus depreciation available?", "19 January 2025", ["1 January 2023", "31 December 2026", "1 July 2024"], "Under the 2025 tax law."),
  fq("Above what level of purchases does the 2026 Section 179 limit start to reduce?", "$4,090,000", ["$2,560,000", "$1,000,000", "$500,000"], "Phase-out threshold."),
  fq("How much of a $2,400 annual policy paid on 1 September is prepaid at 31 December?", "$1,600", ["$800", "$2,400", "$0"], "8 months remain."),
  fq("When is the second quarterly estimated tax payment due?", "June 15", ["May 15", "July 15", "April 15"], "Not three months after the first."),
  fq("Which statement shows contributions, net income and distributions?", "Statement of changes in equity", ["Income statement", "Balance sheet", "Sales tax return"], "Equity movements."),
  fq("What goes in the CPA package for payroll?", "W-2 and Form 941 totals", ["Customer lists", "Marketing plans", "Supplier catalogs"], "Payroll reports."),
]
