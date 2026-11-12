import { fq } from "@/lib/finalTest"

// Final test bank for Australia Accounting — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("On which standards are Australian Accounting Standards based?", "IFRS", ["US GAAP", "Ind AS", "UK GAAP only"], "Set by the AASB."),
  fq("How many digits does an ABN have?", "11", ["9", "8", "14"], "Australian Business Number."),
  fq("Who regulates companies and issues ACNs?", "ASIC", ["The ATO", "The AASB", "APRA"], "Australian Securities and Investments Commission."),
  fq("How is a trust's net income usually taxed?", "To its beneficiaries", ["Always to the trustee at 47%", "It isn't taxed", "To the ATO directly"], "Distributions."),
  fq("How many employees does Gumtree Print Studio have?", "Six", ["Two", "Twenty", "Fifty"], "Plus the owners."),
  fq("In what form can business records be kept?", "Paper or electronic, in English or easily converted", ["Paper only", "Only in ATO software", "Any language without conversion"], "ATO rule."),

  // Module 2
  fq("What GST turnover threshold applies to non-profit bodies?", "$150,000", ["$75,000", "$50,000", "$1 million"], "Higher than for businesses."),
  fq("Who must register for GST regardless of turnover?", "Taxi and ride-sourcing drivers", ["All sole traders", "Exporters", "Charities"], "Special rule."),
  fq("Can Gumtree claim GST credits on costs of making GST-free exports?", "Yes", ["No", "Only half", "Only for ink"], "GST-free supplies keep credits."),
  fq("From what invoice value must a tax invoice show the buyer's identity or ABN?", "$1,000", ["$82.50", "$75", "$10,000"], "Tax invoice rule."),
  fq("Under accrual GST, when is GST reported on a sale?", "When invoiced or paid, whichever is first", ["Only when paid", "At year-end", "When goods are made"], "Non-cash basis."),
  fq("How much GST is in a $5,500 GST-inclusive price?", "$500", ["$550", "$450", "$5,000"], "÷ 11."),

  // Module 3
  fq("When is the July–September quarterly BAS due?", "28 October", ["21 October", "28 September", "31 October"], "Quarterly due date."),
  fq("At what GST turnover must a business report GST monthly?", "$20 million or more", ["$75,000", "$2 million", "$10 million"], "Monthly reporting."),
  fq("Which BAS label shows export sales?", "G2", ["G1", "1A", "W1"], "Included in G1 too."),
  fq("What was Gumtree's total BAS payable for October–December?", "$21,100", ["$7,000", "$16,600", "$26,100"], "GST + PAYG W + PAYG I."),
  fq("Which label reports the PAYG income tax instalment?", "T7 / 5A", ["W2", "1B", "G1"], "Instalment label."),
  fq("After lodging the BAS, where does Liam move the balances?", "An ATO liability account", ["Sales", "Retained earnings", "Wages expense"], "Cleared on payment."),

  // Module 4
  fq("From 1 July 2026, on what is super guarantee calculated?", "Qualifying earnings", ["Total pay including overtime", "Net pay", "Taxable income"], "Ordinary time earnings plus salary sacrifice and certain commissions."),
  fq("When was the last quarterly super payment due under the old rules?", "28 July 2026", ["30 June 2026", "28 October 2026", "1 July 2026"], "For April–June 2026."),
  fq("Is the super guarantee charge tax deductible?", "No", ["Yes", "Only for companies", "Only half"], "Penalty for late super."),
  fq("What's the net pay on $18,500 gross with $3,900 PAYG?", "$14,600", ["$18,500", "$22,400", "$3,900"], "Gross less PAYG."),
  fq("When does the FBT year end?", "31 March", ["30 June", "31 December", "30 September"], "1 April – 31 March."),
  fq("Through which system is each pay run reported to the ATO?", "Single Touch Payroll", ["The BAS only", "myGov", "ASIC Connect"], "STP."),

  // Module 5
  fq("What's the maximum passive income share for a base rate entity?", "80%", ["50%", "20%", "100%"], "Base rate entity passive income."),
  fq("What's the tax on $400,000 for a company with $80 million turnover?", "$120,000", ["$100,000", "$110,000", "$140,000"], "30%."),
  fq("What happens to assets above the instant write-off threshold for small businesses using simplified depreciation?", "They go into the small business pool", ["They can't be depreciated", "They're fully deductible anyway", "They're expensed over 50 years"], "Pooling."),
  fq("What franking credit attaches to a $15,000 fully franked dividend from a base rate entity?", "$5,000", ["$6,429", "$4,500", "$3,750"], "25/75."),
  fq("Are fines and penalties deductible?", "No", ["Yes", "Only for small businesses", "Only if under $1,000"], "Tax adjustment."),
  fq("How do Hannah and Tom use franking credits?", "Declare them and offset them against their own tax", ["Sell them", "Ignore them", "Return them to the company"], "Shareholders' tax."),

  // Module 6
  fq("What should the ATO integrated client account agree with?", "The ATO's statement", ["The sales ledger", "The stock count", "The payroll report"], "Year-end reconciliation."),
  fq("How is June electricity billed in July recorded at 30 June?", "As an accrued expense", ["Not at all", "As a prepayment", "As revenue"], "Accrual."),
  fq("What does Liam review in debtors at EOFY?", "Bad debts to write off", ["GST registration", "Super funds", "Franking credits"], "Debtors review."),
  fq("Which of these is in the tax agent's pack?", "Fixed asset register and depreciation", ["Customer marketing plan", "Office floor plan", "Staff rosters"], "Year-end pack."),
  fq("If W2 totals differ from the STP report, what should be done?", "Find and correct the difference", ["Ignore it", "Change the STP report to match", "Pay the higher amount twice"], "Reconcile."),
  fq("How much of $2,400 software paid on 1 March for 12 months is expensed by 30 June?", "$800", ["$1,600", "$2,400", "$200"], "Four months."),
]
