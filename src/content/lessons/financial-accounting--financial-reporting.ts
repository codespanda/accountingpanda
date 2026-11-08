import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Financial Reporting — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "Who uses financial statements and why",
      table(
        ["User", "What they want to know"],
        [
          ["Owners and investors", "Is the business profitable, growing and worth investing in?"],
          ["Lenders and banks", "Can the business repay its loans and interest?"],
          ["Managers", "Where is money made and lost? What should we change?"],
          ["Suppliers", "Will we be paid on time?"],
          ["Tax authorities and regulators", "Is the right tax paid and are the rules followed?"],
        ],
      ),
      h("Qualities of useful information"),
      terms(
        ["Fundamental", "Relevance (it can affect decisions) and faithful representation (complete, neutral and free from error)."],
        ["Enhancing", "Comparability, verifiability, timeliness and understandability."],
      ),
    ),
    screen(
      "Accrual basis, going concern and frameworks",
      terms(
        ["Accrual basis", "Transactions are recorded when they happen, not when cash moves."],
        ["Going concern", "Statements assume the business will keep operating for the foreseeable future. If that's in doubt, it must be disclosed — and if the business is closing, a different basis may apply."],
      ),
      table(
        ["Framework", "Where used"],
        [
          ["US GAAP", "United States — set by the FASB"],
          ["IFRS", "Over 140 jurisdictions — set by the IASB"],
          ["AASB standards", "Australia — based on IFRS for for-profit entities"],
          ["Ind AS", "India — converged with IFRS; required for listed and larger companies (others follow Indian AS)"],
        ],
      ),
    ),
    screen(
      "Reporting periods and the full set of statements",
      p("Statements cover a reporting period — usually a financial year — and show comparatives for the previous period."),
      table(
        ["Statement", "Shows"],
        [
          ["Income statement (statement of profit or loss)", "Performance over the period"],
          ["Balance sheet (statement of financial position)", "Assets, liabilities and equity at the period end"],
          ["Cash flow statement", "Cash in and out by activity"],
          ["Statement of changes in equity", "Movements in each part of equity"],
          ["Notes", "Accounting policies, breakdowns and other disclosures"],
        ],
      ),
      note("Under IFRS, IFRS 18 replaces IAS 1 for annual periods beginning on or after 1 January 2027. It adds defined subtotals, such as operating profit, to the income statement."),
    ),
    check(
      1,
      q("Which users mainly want to know if loans can be repaid?", ["Suppliers", "Lenders and banks", "Customers", "Employees"], 1, "Lenders focus on repayment ability."),
      q("What are the two fundamental qualities of useful financial information?", ["Speed and cost", "Relevance and faithful representation", "Comparability and timeliness", "Length and detail"], 1, "The others are enhancing qualities."),
      q("What does the going-concern assumption mean?", ["The business will keep operating for the foreseeable future", "The business will close next year", "Cash equals profit", "All debts are paid"], 0, "Statements assume continued operation."),
      q("Which framework is used in the United States?", ["IFRS", "US GAAP", "Ind AS", "AASB"], 1, "US GAAP is set by the FASB."),
      q("Which statement shows financial position at the period end?", ["Income statement", "Balance sheet", "Cash flow statement", "Notes"], 1, "The balance sheet is a snapshot at a date."),
    ),
  ],
  1: [
    screen(
      "Revenue, cost of sales and gross profit",
      example(
        [["Revenue", "$500,000"], ["Cost of sales", "($300,000)"]],
        ["Gross profit", "$200,000"],
      ),
      p("Gross margin = gross profit ÷ revenue = $200,000 ÷ $500,000 = 40%. It shows how much each dollar of sales contributes before overheads."),
    ),
    screen(
      "From gross profit to net profit",
      table(
        ["Line", "Amount"],
        [
          ["Gross profit", "$200,000"],
          ["Operating expenses (selling, admin, wages, rent)", "($120,000)"],
          ["Operating profit", "$80,000"],
          ["Other income (e.g. interest received)", "$2,000"],
          ["Finance costs (interest on loans)", "($7,000)"],
          ["Profit before tax", "$75,000"],
          ["Income tax", "($18,750)"],
          ["Net profit", "$56,250"],
        ],
        { numeric: [1] },
      ),
    ),
    screen(
      "Single-step vs. multi-step",
      compare(
        ["Single-step", "All revenues together, all expenses together, one subtraction.", ["Simple", "Hides gross and operating profit"]],
        ["Multi-step", "Shows gross profit, operating profit and profit before tax as separate subtotals.", ["More informative", "Common for trading businesses"]],
      ),
      tip("Classify consistently", "Put each expense in the same line every period. Moving costs between cost of sales and operating expenses changes margins and makes comparisons misleading."),
    ),
    check(
      2,
      q("Revenue $500,000 and cost of sales $300,000. What's gross profit?", ["$800,000", "$200,000", "$300,000", "$500,000"], 1, "$500,000 − $300,000."),
      q("What's the gross margin in that example?", ["20%", "40%", "60%", "75%"], 1, "$200,000 ÷ $500,000 = 40%."),
      q("Where does interest on a bank loan usually appear?", ["Cost of sales", "Finance costs", "Revenue", "Other income"], 1, "Loan interest is a finance cost."),
      q("Profit before tax is $75,000 and tax $18,750. What's net profit?", ["$93,750", "$56,250", "$75,000", "$18,750"], 1, "$75,000 − $18,750."),
      q("What does a multi-step layout show that single-step doesn't?", ["Gross and operating profit", "Cash balance", "Assets", "Share capital"], 0, "It separates key subtotals."),
    ),
  ],
  2: [
    screen(
      "Current and non-current items",
      table(
        ["Category", "Rule of thumb", "Examples"],
        [
          ["Current assets", "Expected to be used or turned into cash within 12 months", "Cash, receivables, inventory, prepayments"],
          ["Non-current assets", "Held for longer than 12 months", "Property, equipment, intangibles, long-term investments"],
          ["Current liabilities", "Due within 12 months", "Payables, accrued expenses, current portion of loans, tax payable"],
          ["Non-current liabilities", "Due after more than 12 months", "Long-term loans, lease liabilities, long-term provisions"],
        ],
      ),
      caution("Split loans correctly: the part repayable in the next 12 months is current, even if the rest is long-term."),
    ),
    screen(
      "Equity",
      terms(
        ["Share capital / owner's capital", "Money put into the business by owners."],
        ["Retained earnings", "Profits kept in the business over the years, less dividends or distributions."],
        ["Drawings", "Amounts taken out by a sole trader or partner — they reduce equity, they aren't expenses."],
        ["Other reserves", "E.g. revaluation surplus on property, where the framework allows revaluation."],
      ),
    ),
    screen(
      "Presentation and linking the statements",
      p("The balance sheet shows comparatives side by side, so readers can see changes. It also links to the income statement through retained earnings:"),
      example(
        [["Opening retained earnings", "$140,000"], ["Add: net profit for the year", "$56,250"], ["Less: dividends", "($20,000)"]],
        ["Closing retained earnings", "$176,250"],
      ),
      tip("A quick check", "If the balance sheet doesn't balance, a common cause is profit not being carried into retained earnings correctly."),
    ),
    check(
      3,
      q("Inventory is usually classified as:", ["A current asset", "A non-current asset", "A liability", "Equity"], 0, "It's expected to be sold within the operating cycle."),
      q("A 5-year loan has $12,000 due in the next 12 months. How is that $12,000 shown?", ["Non-current liability", "Current liability", "Equity", "Not shown"], 1, "The portion due within 12 months is current."),
      q("What are a sole trader's drawings?", ["An expense", "A reduction of equity", "An asset", "Revenue"], 1, "Drawings reduce equity."),
      q("Opening retained earnings $140,000, profit $56,250, dividends $20,000. What's the closing balance?", ["$176,250", "$216,250", "$196,250", "$120,000"], 0, "$140,000 + $56,250 − $20,000."),
      q("How does the income statement link to the balance sheet?", ["Through retained earnings", "Through cash only", "Through revenue", "It doesn't"], 0, "Profit flows into retained earnings."),
    ),
  ],
  3: [
    screen(
      "Why profit isn't cash",
      bullets(
        "Credit sales are profit now but cash later.",
        "Buying inventory uses cash before it becomes cost of sales.",
        "Depreciation reduces profit but uses no cash.",
        "Loan repayments and equipment purchases use cash but aren't expenses.",
      ),
      p("A profitable business can still run out of cash — which is why the cash flow statement matters."),
    ),
    screen(
      "Three activities and two methods",
      table(
        ["Activity", "Examples"],
        [
          ["Operating", "Cash from customers, paid to suppliers and staff, tax paid"],
          ["Investing", "Buying or selling equipment, property and investments"],
          ["Financing", "Borrowing and repaying loans, issuing shares, paying dividends"],
        ],
      ),
      compare(
        ["Direct method", "Lists actual operating receipts and payments.", ["Easy to read", "Encouraged by IFRS"]],
        ["Indirect method", "Starts with profit and adjusts for non-cash items and working capital changes.", ["Most common in practice"]],
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
      note("Here operating cash happens to equal profit — but only because depreciation offset the working capital build-up."),
    ),
    check(
      4,
      q("Why can a profitable business run short of cash?", ["Customers pay later and stock uses cash first", "Profit is always cash", "Depreciation uses cash", "Revenue is fake"], 0, "Timing differences matter."),
      q("Buying equipment is which kind of cash flow?", ["Operating", "Investing", "Financing", "None"], 1, "Asset purchases are investing activities."),
      q("Repaying a bank loan is which kind of cash flow?", ["Operating", "Investing", "Financing", "None"], 2, "Loans are financing activities."),
      q("Under the indirect method, how is depreciation treated?", ["Subtracted", "Added back", "Ignored", "Shown as investing"], 1, "It's non-cash, so it's added back to profit."),
      q("Receivables increased by $12,000. What's the effect on operating cash flow?", ["+$12,000", "−$12,000", "None", "+$24,000"], 1, "Cash wasn't collected, so subtract it."),
    ),
  ],
  4: [
    screen(
      "Statement of changes in equity",
      table(
        ["", "Share capital", "Retained earnings", "Total"],
        [
          ["Opening balance", "$100,000", "$140,000", "$240,000"],
          ["Profit for the year", "", "$56,250", "$56,250"],
          ["Dividends", "", "($20,000)", "($20,000)"],
          ["Shares issued", "$25,000", "", "$25,000"],
          ["Closing balance", "$125,000", "$176,250", "$301,250"],
        ],
        { numeric: [1, 2, 3] },
      ),
    ),
    screen(
      "Accounting policies and key notes",
      terms(
        ["Accounting policies", "How the business recognises revenue, measures inventory, depreciates assets and so on."],
        ["Property, plant and equipment", "A movement table: opening cost, additions, disposals, depreciation and closing book value."],
        ["Borrowings", "Lenders, interest rates, repayment dates, security given and covenants."],
        ["Commitments and contingencies", "Contracted future spending and possible obligations, such as legal claims."],
      ),
    ),
    screen(
      "Related parties and events after the reporting date",
      p("Related-party transactions — with owners, directors, their families or companies they control — must be disclosed, because they may not be on normal commercial terms."),
      compare(
        ["Adjusting events", "Give more evidence about conditions that existed at year-end. Adjust the figures.", ["A customer owing money at year-end goes bankrupt in January", "Settlement of a court case from before year-end"]],
        ["Non-adjusting events", "Arise after year-end. Disclose if material, but don't adjust.", ["A fire destroys a warehouse in February", "A major acquisition after year-end"]],
      ),
      note("US GAAP uses the terms “recognized” and “nonrecognized” subsequent events for the same idea."),
    ),
    check(
      5,
      q("Which statement shows dividends and shares issued during the year?", ["Statement of changes in equity", "Cash flow statement only", "Income statement", "Notes only"], 0, "It shows movements in equity."),
      q("Opening equity $240,000, profit $56,250, dividends $20,000, shares issued $25,000. What's closing equity?", ["$301,250", "$321,250", "$276,250", "$240,000"], 0, "$240,000 + $56,250 − $20,000 + $25,000."),
      q("Why disclose related-party transactions?", ["They may not be on normal commercial terms", "They're always fraud", "They're tax-free", "To list friends"], 0, "Readers need to know about them."),
      q("A major customer owing money at year-end goes bankrupt in January. What kind of event?", ["Adjusting", "Non-adjusting", "Not an event", "A related party"], 0, "It confirms a condition that existed at year-end."),
      q("A warehouse fire happens after year-end. What's the treatment?", ["Adjust the figures", "Disclose if material, without adjusting", "Ignore it", "Restate last year"], 1, "It's a non-adjusting event."),
    ),
  ],
  5: [
    screen(
      "Building a monthly management pack",
      table(
        ["Section", "Contents"],
        [
          ["Summary", "Three to five key messages for the month"],
          ["KPIs", "Revenue, gross margin, operating profit, cash, DSO"],
          ["Income statement", "Month and year-to-date vs. budget and last year"],
          ["Balance sheet", "With movements since last month"],
          ["Cash flow and forecast", "Cash position and the next 13 weeks"],
        ],
      ),
    ),
    screen(
      "KPIs and variance commentary",
      table(
        ["", "Actual", "Budget", "Variance"],
        [
          ["Revenue", "$48,000", "$45,000", "+$3,000 favourable"],
          ["Gross margin", "38%", "40%", "−2 pts adverse"],
          ["Wages", "$14,500", "$13,000", "−$1,500 adverse"],
        ],
      ),
      p("Good commentary explains why: “Revenue beat budget on a large one-off order; margin fell because that order carried a 10% discount; wages rose due to overtime to fulfil it.”"),
      tip("Explain, don't describe", "“Wages were $1,500 over budget” describes. “Overtime for the Lane order added $1,500” explains."),
    ),
    screen(
      "Year-end statements and the review checklist",
      steps(
        ["Close the books", "Complete all reconciliations and adjustments."],
        ["Prepare draft statements", "Income statement, balance sheet, cash flow, equity and notes."],
        ["Prepare supporting schedules", "Fixed assets, accruals, prepayments, loans, inventory, receivables and tax."],
        ["Answer queries", "Respond to the accountant's or auditor's requests promptly."],
      ),
      h("Before issuing reports"),
      bullets(
        "The balance sheet balances and agrees to the trial balance.",
        "Comparatives are correct and consistently classified.",
        "Retained earnings roll forward correctly.",
        "Cash flow statement agrees with the change in cash.",
        "Notes match the numbers.",
      ),
    ),
    check(
      6,
      q("What should a management pack start with?", ["A short summary of key messages", "Raw ledger data", "Bank statements", "Tax returns"], 0, "Lead with the key messages."),
      q("Revenue actual $48,000 vs. budget $45,000 is:", ["$3,000 adverse", "$3,000 favourable", "On budget", "$93,000"], 1, "Higher revenue is favourable."),
      q("Which is the better variance comment?", ["Wages were over budget", "Overtime for the Lane order added $1,500 to wages", "Wages changed", "See the numbers"], 1, "It explains the cause."),
      q("What must the cash flow statement agree with?", ["The change in cash on the balance sheet", "Revenue", "Net profit", "The budget"], 0, "It explains the movement in cash."),
      q("Which schedules support year-end statements?", ["Fixed assets, accruals, loans and inventory", "Marketing plans", "Staff rosters", "Website analytics"], 0, "Schedules support each balance."),
    ),
  ],
}

export default lessons
