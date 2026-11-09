import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
  exercises,
  h,
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

// Financial Reporting — lesson screens by module index (0 = Module 1).
// The course follows Cedar & Stone Homewares Ltd for the year ended
// June 30, 2026 (FY2026), with FY2025 comparatives. All its statements tie.

const incomeStatement = table(
  ["", "FY2026", "FY2025"],
  [
    ["Revenue", "$500,000", "$440,000"],
    ["Cost of sales", "($300,000)", "($255,000)"],
    ["Gross profit", "$200,000", "$185,000"],
    ["Operating expenses", "($120,000)", "($108,000)"],
    ["Operating profit", "$80,000", "$77,000"],
    ["Other income", "$2,000", "$1,500"],
    ["Finance costs", "($7,000)", "($8,000)"],
    ["Profit before tax", "$75,000", "$70,500"],
    ["Income tax (25%)", "($18,750)", "($17,625)"],
    ["Net profit", "$56,250", "$52,875"],
  ],
  { numeric: [1, 2] },
)

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The Purpose of Financial Reporting",
      ["Financial statements tell owners, lenders and others how a business has performed and where it stands. This module covers who uses them, what makes them useful, the frameworks they follow and what a full set contains."],
      ["Identify users of financial statements and their needs", "Describe the qualities of useful financial information", "Explain the accrual basis and going concern", "Name the main reporting frameworks", "List the full set of financial statements"],
    ),
    screen(
      "Meet Cedar & Stone Homewares",
      p("Cedar & Stone Homewares Ltd designs and sells furniture and homewares through two stores and an online shop. Its financial year ends on June 30."),
      p("You're preparing its financial statements for the year ended June 30, 2026 (FY2026), with FY2025 figures for comparison. The same company appears in every module."),
    ),
    screen(
      "Who uses financial statements",
      table(
        ["User", "What they want to know", "Cedar & Stone example"],
        [
          ["Shareholders", "Is the business profitable and growing?", "The founders and two investors"],
          ["Lenders", "Can it pay interest and repay loans?", "The bank that funded new store fittings"],
          ["Managers", "Where is money made and lost?", "The store and online managers"],
          ["Suppliers", "Will we be paid on time?", "Furniture makers offering credit"],
          ["Tax authorities", "Is the right tax paid?", "The national tax office"],
        ],
      ),
    ),
    screen(
      "Qualities of useful information",
      terms(
        ["Relevance (fundamental)", "Information that can make a difference to decisions — e.g. this year's profit and debt levels."],
        ["Faithful representation (fundamental)", "Complete, neutral and free from error — showing what really happened."],
        ["Comparability (enhancing)", "Can be compared with other periods and businesses — hence comparatives."],
        ["Verifiability (enhancing)", "Different knowledgeable people could reach the same conclusion."],
        ["Timeliness (enhancing)", "Available soon enough to be useful."],
        ["Understandability (enhancing)", "Clearly classified and presented."],
      ),
    ),
    screen(
      "Accrual basis and going concern",
      terms(
        ["Accrual basis", "Transactions are recorded when they happen, not when cash moves. Cedar & Stone records June sales in June even if customers pay in July."],
        ["Going concern", "Statements assume the business will keep operating for the foreseeable future. If that's seriously in doubt, it must be disclosed — and if the business is closing, a different basis may apply."],
      ),
      caution("Management must assess going concern every year, considering at least the next twelve months."),
    ),
    screen(
      "Reporting frameworks",
      table(
        ["Framework", "Where used", "Set by"],
        [
          ["US GAAP", "United States", "FASB"],
          ["IFRS", "Over 140 jurisdictions", "IASB"],
          ["AASB standards", "Australia — based on IFRS for for-profit entities", "AASB"],
          ["Ind AS", "India — converged with IFRS; required for listed and larger companies (others follow Indian AS)", "Notified by the Ministry of Corporate Affairs"],
        ],
      ),
      note("Under IFRS, IFRS 18 replaces IAS 1 for annual periods beginning on or after 1 January 2027. It adds defined subtotals, such as operating profit, to the income statement."),
    ),
    screen(
      "Reporting periods and the full set of statements",
      p("Statements cover a reporting period — usually a financial year — and show comparatives for the previous period."),
      table(
        ["Statement", "Shows"],
        [
          ["Income statement (statement of profit or loss)", "Performance over the year"],
          ["Balance sheet (statement of financial position)", "Assets, liabilities and equity at year end"],
          ["Cash flow statement", "Cash in and out by activity"],
          ["Statement of changes in equity", "Movements in each part of equity"],
          ["Notes", "Accounting policies, breakdowns and other disclosures"],
        ],
      ),
    ),
    mistakes(
      ["Leaving out comparatives", "Readers need last year's figures to judge this year."],
      ["Ignoring going concern", "It must be assessed every year."],
      ["Mixing frameworks", "Follow one framework consistently."],
      ["Treating notes as optional", "They're part of the full set."],
    ),
    check(
      1,
      q("Which users mainly ask whether loans can be repaid?", ["Suppliers", "Lenders", "Customers", "Employees"], 1, "Lenders focus on repayment."),
      q("What are the two fundamental qualities of useful financial information?", ["Speed and cost", "Relevance and faithful representation", "Comparability and timeliness", "Length and detail"], 1, "The others are enhancing qualities."),
      q("What does the going-concern assumption mean?", ["The business will keep operating for the foreseeable future", "The business will close next year", "Cash equals profit", "All debts are paid"], 0, "Statements assume continued operation."),
      q("Which framework is set by the FASB?", ["US GAAP", "IFRS", "Ind AS", "AASB"], 0, "The FASB sets US GAAP."),
      q("Which statement shows financial position at the period end?", ["Balance sheet", "Income statement", "Cash flow statement", "Notes"], 0, "A snapshot at a date."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Match users to needs",
          ["Which statement would each mainly look at? (a) A supplier deciding on credit; (b) An investor judging growth; (c) A bank judging repayment ability."],
          ["(a) Balance sheet and cash flow — can it pay? (b) Income statement trends. (c) Cash flow statement and balance sheet debt levels."],
        ],
        [
          "Exercise 2 — Going concern",
          ["Cedar & Stone's main lender says it won't renew a loan due in three months, and there's no other funding. What follows?"],
          ["Going concern may be in serious doubt. Management must assess it and disclose the uncertainty; auditors will look closely."],
        ],
      ),
    ),
    summary(
      ["Users of financial statements and their needs", "Fundamental and enhancing qualities", "Accrual basis and going concern", "US GAAP, IFRS, AASB and Ind AS", "The full set of financial statements"],
      "Financial statements exist to help people make decisions. Everything else — frameworks, qualities, notes — serves that purpose.",
    ),
  ],
  1: [
    overview(
      "Module 2 — The Income Statement",
      ["The income statement shows how Cedar & Stone performed in FY2026. This module builds it line by line, from revenue to net profit."],
      ["Present revenue and cost of sales", "Calculate gross profit and gross margin", "Classify operating expenses", "Show other income and finance costs", "Calculate income tax and net profit", "Compare single-step and multi-step layouts"],
    ),
    screen(
      "Cedar & Stone's income statement",
      incomeStatement,
      p("This multi-step layout shows gross profit, operating profit and profit before tax as separate subtotals."),
    ),
    screen(
      "Revenue and cost of sales",
      terms(
        ["Revenue", "Income from selling furniture and homewares: $500,000 in FY2026, up from $440,000."],
        ["Cost of sales", "The cost of the goods sold — purchase price, freight in and stock adjustments: $300,000."],
      ),
      tip("Keep direct costs together", "If freight on purchases were put in operating expenses, gross margin would look better than it really is."),
    ),
    screen(
      "Gross profit and gross margin",
      example(
        [["Revenue", "$500,000"], ["Cost of sales", "($300,000)"], ["Gross profit", "$200,000"]],
        ["Gross margin ($200,000 ÷ $500,000)", "40.0%"],
      ),
      p("In FY2025 the gross margin was $185,000 ÷ $440,000 = 42.0%. Costs rose faster than sales — a point for the owners to explore."),
    ),
    screen(
      "Operating expenses",
      table(
        ["Operating expense", "FY2026"],
        [
          ["Wages", "$66,000"],
          ["Rent", "$24,000"],
          ["Depreciation", "$15,000"],
          ["Marketing", "$10,000"],
          ["Other", "$5,000"],
        ],
        { footer: ["Total", "$120,000"], numeric: [1] },
      ),
      p("Operating profit = $200,000 − $120,000 = $80,000."),
    ),
    screen(
      "Other income, finance costs, tax and net profit",
      terms(
        ["Other income", "Outside normal trading — e.g. $2,000 of interest received."],
        ["Finance costs", "Interest on the bank loan — $7,000."],
        ["Income tax", "25% of profit before tax: $75,000 × 25% = $18,750."],
      ),
      example(
        [["Operating profit", "$80,000"], ["Other income", "$2,000"], ["Finance costs", "($7,000)"], ["Profit before tax", "$75,000"], ["Income tax", "($18,750)"]],
        ["Net profit", "$56,250"],
      ),
      note("The 25% tax rate is illustrative; actual rates depend on the country and the business."),
    ),
    screen(
      "Single-step vs. multi-step layouts",
      compare(
        ["Single-step", "All revenues together, all expenses together, one subtraction.", ["Simple", "Hides gross and operating profit"]],
        ["Multi-step", "Shows gross profit, operating profit and profit before tax.", ["More informative", "Used by Cedar & Stone"]],
      ),
      tip("Classify consistently", "Put each expense in the same line every year. Moving costs between lines changes margins and makes comparisons misleading."),
    ),
    mistakes(
      ["Putting direct costs in operating expenses", "Gross margin is overstated."],
      ["Including interest in operating expenses", "Finance costs are shown separately."],
      ["Calculating tax on operating profit", "Tax is based on profit before tax."],
      ["Changing classifications each year", "Comparisons become misleading."],
    ),
    check(
      2,
      q("Revenue $500,000 and cost of sales $300,000. What's gross profit?", ["$200,000", "$800,000", "$300,000", "$500,000"], 0, "$500,000 − $300,000."),
      q("What's Cedar & Stone's FY2026 gross margin?", ["40%", "20%", "60%", "75%"], 0, "$200,000 ÷ $500,000."),
      q("Where does interest on a bank loan usually appear?", ["Finance costs", "Cost of sales", "Revenue", "Other income"], 0, "Loan interest is a finance cost."),
      q("Profit before tax is $75,000 and tax $18,750. What's net profit?", ["$56,250", "$93,750", "$75,000", "$18,750"], 0, "$75,000 − $18,750."),
      q("What does a multi-step layout show that single-step doesn't?", ["Gross and operating profit", "The cash balance", "Assets", "Share capital"], 0, "It separates key subtotals."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — FY2025 subtotals",
          ["Using the FY2025 column, calculate operating margin and net margin."],
          ["Operating margin = $77,000 ÷ $440,000 = 17.5%.", "Net margin = $52,875 ÷ $440,000 = 12.0%."],
        ],
        [
          "Exercise 2 — Reclassification",
          ["$8,000 of freight on purchases was wrongly included in Other operating expenses. What's the corrected gross profit?"],
          ["Cost of sales becomes $308,000; gross profit $192,000 (38.4%). Operating expenses fall to $112,000; operating profit stays $80,000."],
        ],
      ),
    ),
    summary(
      ["Revenue and cost of sales", "Gross profit and gross margin", "Operating expenses and operating profit", "Other income, finance costs, tax and net profit", "Single-step vs. multi-step layouts"],
      "The income statement tells a story from sales to profit. Classify each line carefully and the story is clear.",
    ),
  ],
  2: [
    overview(
      "Module 3 — The Balance Sheet",
      ["The balance sheet shows Cedar & Stone's assets, liabilities and equity at June 30, 2026. This module builds it and links it to the income statement."],
      ["Classify current and non-current assets", "Classify current and non-current liabilities", "Present equity", "Classify accounts correctly", "Present comparatives", "Link the balance sheet to the income statement"],
    ),
    screen(
      "Cedar & Stone's assets",
      table(
        ["Assets at June 30, 2026", "Amount"],
        [
          ["Cash", "$30,000"],
          ["Trade receivables", "$60,000"],
          ["Inventory", "$50,000"],
          ["Prepayments", "$10,000"],
          ["Total current assets", "$150,000"],
          ["Property, plant and equipment (net)", "$300,000"],
          ["Total assets", "$450,000"],
        ],
        { numeric: [1] },
      ),
      terms(
        ["Current assets", "Expected to be used or turned into cash within 12 months (or the operating cycle)."],
        ["Non-current assets", "Held for longer than 12 months — store fittings, vans, equipment."],
      ),
    ),
    screen(
      "Cedar & Stone's liabilities",
      table(
        ["Liabilities at June 30, 2026", "Amount"],
        [
          ["Trade payables", "$45,000"],
          ["Accrued expenses", "$12,000"],
          ["Income tax payable", "$8,000"],
          ["Bank loan — current portion", "$10,000"],
          ["Total current liabilities", "$75,000"],
          ["Bank loan — non-current portion", "$60,000"],
          ["Deferred tax liability", "$13,750"],
          ["Total liabilities", "$148,750"],
        ],
        { numeric: [1] },
      ),
      caution("Split loans correctly: the $10,000 repayable in the next 12 months is current, even though the rest is long-term."),
    ),
    screen(
      "Equity",
      table(
        ["Equity at June 30, 2026", "Amount"],
        [
          ["Share capital", "$125,000"],
          ["Retained earnings", "$176,250"],
          ["Total equity", "$301,250"],
        ],
        { numeric: [1] },
      ),
      terms(
        ["Share capital", "Money invested by shareholders — $100,000 originally, plus $25,000 of new shares this year."],
        ["Retained earnings", "Profits kept in the business over the years, less dividends."],
        ["Drawings (sole traders and partnerships)", "Amounts taken out by owners — they reduce equity and aren't expenses."],
      ),
      p("Check: assets $450,000 = liabilities $148,750 + equity $301,250."),
    ),
    screen(
      "Classifying accounts correctly",
      table(
        ["Item", "Classification"],
        [
          ["Customer deposits for future orders", "Current liability"],
          ["Rent paid six months in advance", "Current asset (prepayment)"],
          ["A loan to a director repayable in three years", "Non-current asset"],
          ["Stock held in the warehouse", "Current asset (inventory)"],
        ],
      ),
    ),
    screen(
      "Presentation, comparatives and the link to profit",
      p("The balance sheet shows comparatives side by side. It links to the income statement through retained earnings:"),
      example(
        [["Retained earnings at July 1, 2025", "$140,000"], ["Add: net profit for FY2026", "$56,250"], ["Less: dividends", "($20,000)"]],
        ["Retained earnings at June 30, 2026", "$176,250"],
      ),
      tip("A quick check", "If the balance sheet doesn't balance, a common cause is profit not being carried into retained earnings correctly."),
    ),
    mistakes(
      ["Showing a whole loan as non-current", "Split out the next 12 months' repayments."],
      ["Treating drawings as expenses", "They reduce equity."],
      ["Forgetting deferred tax", "It's a liability where tax and accounting differ."],
      ["Omitting comparatives", "Show last year side by side."],
    ),
    check(
      3,
      q("Inventory is usually classified as:", ["A current asset", "A non-current asset", "A liability", "Equity"], 0, "Sold within the operating cycle."),
      q("Cedar & Stone's loan has $10,000 due in the next 12 months. How is that $10,000 shown?", ["Current liability", "Non-current liability", "Equity", "Not shown"], 0, "Due within 12 months."),
      q("What are a sole trader's drawings?", ["A reduction of equity", "An expense", "An asset", "Revenue"], 0, "They reduce equity."),
      q("Opening retained earnings $140,000, profit $56,250, dividends $20,000. What's the closing balance?", ["$176,250", "$216,250", "$196,250", "$120,000"], 0, "$140,000 + $56,250 − $20,000."),
      q("How does the income statement link to the balance sheet?", ["Through retained earnings", "Through cash only", "Through revenue", "It doesn't"], 0, "Profit flows into retained earnings."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Check the equation",
          ["Total current assets $150,000, PPE $300,000, current liabilities $75,000, non-current liabilities $73,750. What is equity?"],
          ["Assets $450,000 − liabilities $148,750 = $301,250."],
        ],
        [
          "Exercise 2 — Classify",
          ["Classify: (a) a five-year lease of a delivery van; (b) GST or VAT collected but not yet paid; (c) a 30-day customer receivable."],
          ["(a) A lease liability split between current and non-current (and a right-of-use asset). (b) Current liability. (c) Current asset."],
        ],
      ),
    ),
    summary(
      ["Current and non-current assets", "Current and non-current liabilities", "Equity — share capital and retained earnings", "Classifying accounts correctly", "Comparatives and the link to profit"],
      "The balance sheet always balances: assets = liabilities + equity. Retained earnings tie it to the income statement.",
    ),
  ],
  3: [
    overview(
      "Module 4 — The Cash Flow Statement",
      ["Profit isn't cash. The cash flow statement explains how Cedar & Stone's cash rose from $18,750 to $30,000 in FY2026."],
      ["Explain why profit differs from cash", "Classify operating, investing and financing activities", "Compare the direct and indirect methods", "Reconcile net profit to operating cash flow", "Read a cash flow statement"],
    ),
    screen(
      "Why profit isn't cash",
      bullets(
        "Credit sales are profit now but cash later — Cedar & Stone's receivables grew $12,000.",
        "Buying inventory uses cash before it becomes cost of sales — inventory grew $8,000.",
        "Depreciation reduces profit but uses no cash — $15,000.",
        "Buying fittings and repaying loans use cash but aren't expenses.",
      ),
      p("A profitable business can still run out of cash, which is why this statement matters."),
    ),
    screen(
      "Operating, investing and financing activities",
      table(
        ["Activity", "Examples", "Cedar & Stone FY2026"],
        [
          ["Operating", "Cash from customers, paid to suppliers and staff", "+$56,250"],
          ["Investing", "Buying or selling equipment and investments", "−$40,000 (new store fittings)"],
          ["Financing", "Borrowing, repaying loans, issuing shares, paying dividends", "−$5,000"],
        ],
      ),
    ),
    screen(
      "Direct and indirect methods",
      compare(
        ["Direct method", "Lists actual operating receipts and payments — cash from customers, paid to suppliers and so on.", ["Easy to read", "Encouraged by IFRS"]],
        ["Indirect method", "Starts with profit and adjusts for non-cash items and working capital changes.", ["Most common in practice", "Used by Cedar & Stone"]],
      ),
    ),
    screen(
      "Reconciling profit to operating cash flow",
      table(
        ["Item", "Amount"],
        [
          ["Net profit", "$56,250"],
          ["Add: depreciation", "$15,000"],
          ["Less: increase in receivables", "($12,000)"],
          ["Less: increase in inventory", "($8,000)"],
          ["Add: increase in payables", "$5,000"],
          ["Net cash from operating activities", "$56,250"],
        ],
        { numeric: [1] },
      ),
      tip("The working capital rule", "An increase in a current asset uses cash (subtract). An increase in a current liability saves cash (add)."),
      note("For simplicity, this example assumes tax and interest paid equal the expense. In practice those differences are adjusted too."),
    ),
    screen(
      "The full cash flow statement",
      table(
        ["", "FY2026"],
        [
          ["Net cash from operating activities", "$56,250"],
          ["Purchase of store fittings", "($40,000)"],
          ["Net cash used in investing activities", "($40,000)"],
          ["Proceeds from issuing shares", "$25,000"],
          ["Loan repayments", "($10,000)"],
          ["Dividends paid", "($20,000)"],
          ["Net cash used in financing activities", "($5,000)"],
          ["Net increase in cash", "$11,250"],
          ["Cash at July 1, 2025", "$18,750"],
          ["Cash at June 30, 2026", "$30,000"],
        ],
        { numeric: [1] },
      ),
      p("The closing cash agrees with the balance sheet."),
    ),
    mistakes(
      ["Treating depreciation as a cash outflow", "Add it back — it's non-cash."],
      ["Getting working capital signs backwards", "Asset up = cash down; liability up = cash up."],
      ["Putting equipment purchases in operating", "They're investing."],
      ["Not checking closing cash", "It must agree with the balance sheet."],
    ),
    check(
      4,
      q("Why can a profitable business run short of cash?", ["Customers pay later and stock uses cash first", "Profit is always cash", "Depreciation uses cash", "Revenue is fake"], 0, "Timing differences matter."),
      q("Buying store fittings is which kind of cash flow?", ["Investing", "Operating", "Financing", "None"], 0, "Asset purchases are investing."),
      q("Paying dividends is which kind of cash flow?", ["Financing", "Operating", "Investing", "None"], 0, "Returns to shareholders."),
      q("Under the indirect method, how is depreciation treated?", ["Added back", "Subtracted", "Ignored", "Shown as investing"], 0, "It's non-cash."),
      q("Receivables increased by $12,000. What's the effect on operating cash flow?", ["−$12,000", "+$12,000", "None", "+$24,000"], 0, "Cash wasn't collected."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Operating cash flow",
          ["Net profit $40,000; depreciation $10,000; receivables down $3,000; inventory up $6,000; payables down $2,000. What's operating cash flow?"],
          ["$40,000 + $10,000 + $3,000 − $6,000 − $2,000 = $45,000."],
        ],
        [
          "Exercise 2 — Classify",
          ["Classify: (a) a new bank loan received; (b) sale of an old delivery van; (c) cash paid to staff."],
          ["(a) Financing. (b) Investing. (c) Operating."],
        ],
      ),
    ),
    summary(
      ["Why profit and cash differ", "Operating, investing and financing activities", "Direct and indirect methods", "Reconciling profit to operating cash flow", "Tying closing cash to the balance sheet"],
      "The cash flow statement explains the change in cash. Check that its closing figure agrees with the balance sheet.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Equity, Notes and Disclosures",
      ["Numbers alone don't tell the whole story. This module covers the statement of changes in equity and the notes that explain Cedar & Stone's statements."],
      ["Prepare a statement of changes in equity", "Summarise accounting policies", "Prepare key notes — fixed assets, borrowings and commitments", "Disclose related-party transactions", "Treat events after the reporting date"],
    ),
    screen(
      "Statement of changes in equity",
      table(
        ["", "Share capital", "Retained earnings", "Total"],
        [
          ["At July 1, 2025", "$100,000", "$140,000", "$240,000"],
          ["Profit for the year", "", "$56,250", "$56,250"],
          ["Dividends", "", "($20,000)", "($20,000)"],
          ["Shares issued", "$25,000", "", "$25,000"],
          ["At June 30, 2026", "$125,000", "$176,250", "$301,250"],
        ],
        { numeric: [1, 2, 3] },
      ),
    ),
    screen(
      "Accounting policies",
      p("A summary of accounting policies explains how the numbers were measured. Cedar & Stone's include:"),
      table(
        ["Area", "Cedar & Stone's policy"],
        [
          ["Revenue", "Recognised when goods are delivered to customers"],
          ["Inventory", "Lower of cost (weighted average) and net realisable value"],
          ["Property, plant and equipment", "Cost less depreciation, straight-line over 5–10 years"],
          ["Leases", "Right-of-use assets and lease liabilities recognised for store leases"],
        ],
      ),
    ),
    screen(
      "Key notes",
      h("Property, plant and equipment"),
      table(
        ["", "Amount"],
        [
          ["Carrying amount at July 1, 2025", "$275,000"],
          ["Additions — store fittings", "$40,000"],
          ["Depreciation", "($15,000)"],
          ["Carrying amount at June 30, 2026", "$300,000"],
        ],
        { numeric: [1] },
      ),
      terms(
        ["Borrowings", "Bank loan of $70,000, secured over equipment, repayable at $10,000 a year."],
        ["Commitments", "Contracted spending not yet recognised — e.g. a $30,000 contract for a third store's fit-out."],
        ["Contingencies", "Possible obligations, such as a customer claim being disputed."],
      ),
    ),
    screen(
      "Related parties",
      p("Related-party transactions — with directors, owners, their families or companies they control — must be disclosed, because they may not be on normal commercial terms."),
      p("Example: Cedar & Stone rents its warehouse from a company owned by one of its directors for $24,000 a year. The note discloses the relationship, the amount and any balance owed."),
    ),
    screen(
      "Events after the reporting date",
      compare(
        ["Adjusting events", "Give more evidence about conditions that existed at year end. Adjust the figures.", ["A customer owing money at June 30 goes bankrupt in July", "A court case from before year end is settled"]],
        ["Non-adjusting events", "Arise after year end. Disclose if material, but don't adjust.", ["A flood damages a store in August", "A major acquisition after year end"]],
      ),
      note("US GAAP uses the terms “recognized” and “nonrecognized” subsequent events for the same idea."),
    ),
    mistakes(
      ["Leaving dividends out of the equity statement", "Show every movement in equity."],
      ["Copying generic policies", "Describe what the business actually does."],
      ["Hiding related-party deals", "Disclose them."],
      ["Adjusting for non-adjusting events", "Disclose them instead."],
    ),
    check(
      5,
      q("Which statement shows dividends and shares issued during the year?", ["Statement of changes in equity", "Cash flow statement only", "Income statement", "Notes only"], 0, "It shows movements in equity."),
      q("Opening equity $240,000, profit $56,250, dividends $20,000, shares issued $25,000. What's closing equity?", ["$301,250", "$321,250", "$276,250", "$240,000"], 0, "$240,000 + $56,250 − $20,000 + $25,000."),
      q("Why disclose related-party transactions?", ["They may not be on normal commercial terms", "They're always fraud", "They're tax-free", "To list friends"], 0, "Readers need to know."),
      q("A customer owing money at year end goes bankrupt in July. What kind of event?", ["Adjusting", "Non-adjusting", "Not an event", "A related party"], 0, "It confirms a condition at year end."),
      q("A flood damages a store after year end. What's the treatment?", ["Disclose if material, without adjusting", "Adjust the figures", "Ignore it", "Restate last year"], 0, "It's non-adjusting."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — PPE movement",
          ["Opening carrying amount $120,000; additions $30,000; disposals at carrying amount $5,000; depreciation $18,000. What's the closing amount?"],
          ["$120,000 + $30,000 − $5,000 − $18,000 = $127,000."],
        ],
        [
          "Exercise 2 — Events after year end",
          ["Adjusting or non-adjusting? (a) Stock held at year end sells in July for less than cost. (b) The company issues new shares in August."],
          ["(a) Adjusting — evidence about the stock's value at year end. (b) Non-adjusting — disclose if material."],
        ],
      ),
    ),
    summary(
      ["The statement of changes in equity", "Accounting policies", "Notes on fixed assets, borrowings, commitments and contingencies", "Related-party disclosures", "Adjusting and non-adjusting events"],
      "The notes and equity statement complete the picture — explaining how numbers were measured and what else readers need to know.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Management Reporting and Year-End",
      ["Year-end statements look back; management reports help run the business every month. This module covers both."],
      ["Build a monthly management reporting pack", "Choose key performance indicators", "Write budget vs. actual commentary", "Prepare year-end statements for accountants and auditors", "Review reports before issuing them"],
    ),
    screen(
      "A monthly management pack",
      table(
        ["Section", "Contents"],
        [
          ["Summary", "Three to five key messages for the month"],
          ["KPIs", "Revenue, gross margin, operating profit, cash, receivable days"],
          ["Income statement", "Month and year-to-date vs. budget and last year"],
          ["Balance sheet", "With movements since last month"],
          ["Cash flow and forecast", "Cash position and the next 13 weeks"],
        ],
      ),
    ),
    screen(
      "Key performance indicators",
      table(
        ["KPI", "Cedar & Stone FY2026"],
        [
          ["Revenue growth", "+13.6% ($440,000 → $500,000)"],
          ["Gross margin", "40.0% (down from 42.0%)"],
          ["Operating margin", "16.0%"],
          ["Cash at year end", "$30,000"],
        ],
      ),
      tip("Fewer is better", "Choose a handful of KPIs that drive decisions. Too many hide the important ones."),
    ),
    screen(
      "Budget vs. actual commentary",
      table(
        ["June 2026", "Actual", "Budget", "Variance"],
        [
          ["Revenue", "$48,000", "$45,000", "+$3,000 favourable"],
          ["Gross margin", "38%", "40%", "−2 points adverse"],
          ["Wages", "$6,300", "$5,500", "−$800 adverse"],
        ],
      ),
      p("Good commentary explains why: “Revenue beat budget on a large hotel order; margin fell because the order carried a 10% discount; wages rose due to overtime to deliver it.”"),
      tip("Explain, don't describe", "“Wages were $800 over budget” describes. “Overtime for the hotel order added $800” explains."),
    ),
    screen(
      "Preparing year-end statements",
      steps(
        ["Close the books", "Complete all reconciliations and adjustments."],
        ["Prepare draft statements", "Income statement, balance sheet, cash flow, equity statement and notes."],
        ["Prepare supporting schedules", "Fixed assets, accruals, prepayments, loans, inventory, receivables and tax."],
        ["Answer queries", "Respond to the accountant's or auditor's requests promptly."],
      ),
    ),
    screen(
      "Review checklist before issuing",
      bullets(
        "The balance sheet balances and agrees to the trial balance.",
        "Comparatives are correct and consistently classified.",
        "Retained earnings roll forward correctly ($140,000 + $56,250 − $20,000 = $176,250).",
        "The cash flow statement's closing cash agrees with the balance sheet ($30,000).",
        "The notes match the numbers (e.g. the PPE note ends at $300,000).",
      ),
    ),
    mistakes(
      ["Packs full of numbers but no messages", "Lead with the key points."],
      ["Too many KPIs", "Pick the few that matter."],
      ["Commentary that only describes", "Explain the cause."],
      ["Issuing statements without tie-out checks", "Run the review checklist."],
    ),
    check(
      6,
      q("What should a management pack start with?", ["A short summary of key messages", "Raw ledger data", "Bank statements", "Tax returns"], 0, "Lead with the key messages."),
      q("June revenue was $48,000 against a $45,000 budget. The variance is:", ["$3,000 favourable", "$3,000 adverse", "On budget", "$93,000"], 0, "Higher revenue is favourable."),
      q("Which is the better variance comment?", ["“Overtime for the hotel order added $800 to wages”", "“Wages were over budget”", "“Wages changed”", "“See the numbers”"], 0, "It explains the cause."),
      q("What must the cash flow statement's closing cash agree with?", ["Cash on the balance sheet", "Revenue", "Net profit", "The budget"], 0, "$30,000 in both."),
      q("Which schedules support year-end statements?", ["Fixed assets, accruals, loans and inventory", "Marketing plans", "Staff rosters", "Website analytics"], 0, "Schedules support each balance."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Write commentary",
          ["Marketing was $2,500 against a $1,000 budget because of a one-off store-opening campaign. Write a one-line comment."],
          ["“Marketing was $1,500 over budget due to the one-off store-opening campaign; spending returns to budget next month.”"],
        ],
        [
          "Exercise 2 — Tie-out",
          ["The draft balance sheet shows retained earnings of $196,250. Profit $56,250, opening $140,000, dividends $20,000. What's wrong?"],
          ["Dividends weren't deducted: $140,000 + $56,250 − $20,000 = $176,250. Correct the equity figure."],
        ],
      ),
    ),
    summary(
      ["Building a monthly management pack", "Choosing KPIs", "Writing budget vs. actual commentary", "Preparing year-end statements and schedules", "Reviewing and tying out reports"],
      "Good reporting is accurate, consistent and explained — whether it's a monthly pack or the year-end statements.",
    ),
  ],
}

export default lessons
