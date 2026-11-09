import { fq } from "@/lib/finalTest"

// Final test bank for Financial Reporting — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("When does Cedar & Stone's financial year end?", "June 30", ["December 31", "March 31", "September 30"], "Its FY2026 ended June 30, 2026."),
  fq("Which quality means different knowledgeable people could reach the same conclusion?", "Verifiability", ["Timeliness", "Relevance", "Understandability"], "It's an enhancing quality."),
  fq("Why do financial statements include comparatives?", "To support comparability across periods", ["To make them longer", "Because banks require colour", "To hide changes"], "Readers judge this year against last year."),
  fq("For how long ahead must management at least consider going concern?", "The next twelve months", ["The next week", "The next ten years", "Only the past year"], "Assessed every year."),
  fq("Which statement explains movements in each part of equity?", "The statement of changes in equity", ["The cash flow statement", "The income statement", "The trial balance"], "It's part of the full set."),
  fq("What does IFRS 18 replace?", "IAS 1, for periods beginning on or after 1 January 2027", ["US GAAP", "Ind AS", "IFRS 9"], "It adds defined subtotals like operating profit."),

  // Module 2
  fq("What was Cedar & Stone's FY2025 gross margin?", "42.0%", ["40.0%", "38.0%", "45.0%"], "$185,000 ÷ $440,000."),
  fq("What was Cedar & Stone's FY2026 operating profit?", "$80,000", ["$75,000", "$200,000", "$56,250"], "$200,000 − $120,000."),
  fq("Which was Cedar & Stone's largest operating expense?", "Wages", ["Rent", "Depreciation", "Marketing"], "$66,000."),
  fq("Where does Cedar & Stone's $2,000 of interest received appear?", "Other income", ["Revenue", "Finance costs", "Cost of sales"], "It's outside normal trading."),
  fq("What was Cedar & Stone's FY2025 operating margin?", "17.5%", ["16.0%", "12.0%", "42.0%"], "$77,000 ÷ $440,000."),
  fq("If $8,000 of freight on purchases were moved into cost of sales, what would gross profit become?", "$192,000", ["$208,000", "$200,000", "$80,000"], "Gross profit falls; operating profit is unchanged."),

  // Module 3
  fq("What were Cedar & Stone's total current assets at June 30, 2026?", "$150,000", ["$450,000", "$300,000", "$90,000"], "Cash, receivables, inventory and prepayments."),
  fq("What were Cedar & Stone's total liabilities?", "$148,750", ["$75,000", "$135,000", "$301,250"], "$75,000 current + $73,750 non-current."),
  fq("How are customer deposits for future orders classified?", "Current liability", ["Current asset", "Equity", "Revenue"], "Cedar & Stone owes the goods."),
  fq("How is rent paid six months in advance classified?", "Current asset (prepayment)", ["Current liability", "Non-current asset", "Expense"], "It's a future benefit."),
  fq("What was Cedar & Stone's share capital at June 30, 2026?", "$125,000", ["$100,000", "$176,250", "$301,250"], "$100,000 plus $25,000 of new shares."),
  fq("A loan to a director repayable in three years is a:", "Non-current asset", ["Current liability", "Current asset", "Expense"], "It's receivable after more than 12 months."),

  // Module 4
  fq("What was Cedar & Stone's cash at July 1, 2025?", "$18,750", ["$30,000", "$11,250", "$0"], "It rose by $11,250 to $30,000."),
  fq("How much did Cedar & Stone spend on new store fittings?", "$40,000", ["$15,000", "$25,000", "$20,000"], "Its investing outflow."),
  fq("What was Cedar & Stone's net cash used in financing activities?", "$5,000", ["$25,000", "$30,000", "$10,000"], "+$25,000 shares − $10,000 loan − $20,000 dividends."),
  fq("Which method lists actual cash received from customers and paid to suppliers?", "The direct method", ["The indirect method", "The accrual method", "The aging method"], "Encouraged by IFRS."),
  fq("Net profit $40,000; depreciation $10,000; receivables down $3,000; inventory up $6,000; payables down $2,000. Operating cash flow?", "$45,000", ["$55,000", "$35,000", "$41,000"], "Apply the working capital rule."),
  fq("Selling an old delivery van is which kind of cash flow?", "Investing", ["Operating", "Financing", "None"], "It's a non-current asset."),

  // Module 5
  fq("What was the carrying amount of Cedar & Stone's PPE at July 1, 2025?", "$275,000", ["$300,000", "$260,000", "$315,000"], "Plus $40,000 additions, less $15,000 depreciation."),
  fq("Which inventory cost formula does Cedar & Stone use?", "Weighted average", ["FIFO", "LIFO", "Specific identification"], "Stated in its accounting policies."),
  fq("What is a commitment, in the notes?", "Contracted spending not yet recognised", ["A possible obligation from a claim", "A past expense", "A dividend paid"], "E.g. the third store's fit-out contract."),
  fq("Why is Cedar & Stone's warehouse rent a related-party transaction?", "The landlord is owned by one of its directors", ["Rent is always related-party", "The amount is large", "It's paid monthly"], "Disclose relationship, amount and balance."),
  fq("Stock held at year end sells in July for less than cost. What kind of event?", "Adjusting", ["Non-adjusting", "Not an event", "A commitment"], "It's evidence about value at year end."),
  fq("What does US GAAP call events after the reporting date?", "Recognized and nonrecognized subsequent events", ["Adjusting and non-adjusting events", "Contingent events", "Material events"], "Same idea, different terms."),

  // Module 6
  fq("What was Cedar & Stone's revenue growth in FY2026?", "+13.6%", ["+10.0%", "+16.0%", "+40.0%"], "$440,000 → $500,000."),
  fq("Why should a management pack use only a handful of KPIs?", "Too many hide the important ones", ["Software allows only five", "KPIs are expensive", "Auditors require it"], "Choose those that drive decisions."),
  fq("What explained June's lower gross margin?", "A large hotel order carried a 10% discount", ["Rent increased", "Depreciation rose", "Interest rates changed"], "From the budget commentary."),
  fq("How far ahead does the cash forecast in the management pack look?", "13 weeks", ["One day", "Five years", "One quarter behind"], "Short-term cash planning."),
  fq("A draft balance sheet shows retained earnings of $196,250. What's the likely error?", "Dividends of $20,000 weren't deducted", ["Profit was double-counted", "Share capital was omitted", "Depreciation was added"], "$140,000 + $56,250 − $20,000 = $176,250."),
  fq("What should be done when the accountant or auditor raises queries?", "Respond promptly with supporting schedules", ["Ignore them until next year", "Change the figures without evidence", "Delete the queries"], "Schedules support each balance."),
]
