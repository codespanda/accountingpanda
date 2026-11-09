import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
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

// Financial Modelling in Excel — lesson screens by module index (0 = Module 1).
// The course builds one model: Brightwater Coffee Roasters, forecasting
// 2027–2031 from its 2026 actuals. Year-1 (2027) figures are worked in full.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Modelling Principles and Structure",
      ["A financial model turns a plan into numbers others can test. This module sets up the structure of Brightwater Coffee Roasters' five-year model."],
      ["Explain what financial models are used for", "Separate inputs, calculations and outputs", "Build timelines, periods and flags", "Apply formatting conventions", "Keep formulas simple and consistent"],
    ),
    screen(
      "Meet Brightwater Coffee Roasters",
      p("Brightwater roasts and sells coffee to cafés. In 2026 it sold 40,000 kg at $25 a kg — $1,000,000 of revenue. The owners want a $100,000 roaster and need a model to show their bank how the business will perform from 2027 to 2031."),
      table(
        ["Opening balance sheet, 31 Dec 2026", "Amount"],
        [
          ["Cash", "$80,000"],
          ["Receivables", "$80,000"],
          ["Inventory", "$70,000"],
          ["Property, plant and equipment (net)", "$300,000"],
          ["Payables", "($60,000)"],
          ["Bank loan", "($200,000)"],
        ],
        { footer: ["Equity (share capital $100,000 + retained earnings $170,000)", "$270,000"], numeric: [1] },
      ),
    ),
    screen(
      "What financial models are used for",
      bullets(
        "Raising debt — showing a lender the business can repay.",
        "Raising equity or selling a business — supporting a valuation.",
        "Budgeting and planning — testing whether targets are achievable.",
        "Decisions — buy or lease, open a new site, launch a product.",
      ),
      note("A model is only as good as its assumptions. Its real value is making those assumptions visible and easy to challenge."),
    ),
    screen(
      "Inputs, calculations and outputs",
      table(
        ["Sheet", "Contents", "Brightwater"],
        [
          ["Inputs", "Every assumption, in one place", "Volume growth, price, margins, days, rates"],
          ["Calculations", "Schedules that turn inputs into results", "Revenue, costs, fixed assets, working capital, debt"],
          ["Statements", "Income statement, balance sheet, cash flow", "Linked from the schedules"],
          ["Outputs", "Summary, charts, valuation, checks", "The page the bank reads"],
        ],
      ),
      tip("One way flow", "Inputs feed calculations, which feed statements and outputs — never the other way round."),
    ),
    screen(
      "Timelines, periods and flags",
      p("Every calculation sheet uses the same columns: one per year, 2026 actual then 2027–2031 forecast."),
      table(
        ["Row", "Formula (column D = 2027)", "Purpose"],
        [
          ["Year", "=C4+1", "Each year from the one before"],
          ["Forecast flag", "=IF(D4>LastActualYear,1,0)", "1 for forecast years"],
          ["Loan repayment flag", "=AND(D4>=RepayStart,D4<=RepayEnd)*1", "1 while the loan is being repaid"],
        ],
      ),
      p("Multiplying by a flag switches a calculation on or off: =LoanRepayment*D7 repays only in flagged years."),
    ),
    screen(
      "Formatting conventions",
      table(
        ["Cell type", "Convention"],
        [
          ["Hard-coded input", "Blue font (often with a light yellow fill)"],
          ["Formula", "Black font"],
          ["Link to another sheet", "Green font"],
          ["Check", "Shows OK or 0; red if it fails"],
        ],
      ),
      p("A reviewer can then see at a glance which numbers are assumptions and which are calculated."),
    ),
    screen(
      "Simple, consistent formulas",
      bullets(
        "One formula per row, copied across every year — no exceptions in the middle.",
        "Break long formulas into several rows with labels.",
        "Avoid nested IFs more than two deep; use flags or lookups instead.",
        "No hard-coded numbers inside formulas.",
        "Use the same column for the same year on every sheet.",
      ),
      caution("A formula that changes halfway along a row is one of the most common sources of model errors — and hard to spot."),
    ),
    mistakes(
      ["Mixing inputs into calculations", "Keep every assumption on the Inputs sheet."],
      ["Different timelines on different sheets", "Use the same columns everywhere."],
      ["Long, nested formulas", "Split them into readable steps."],
      ["No formatting convention", "Reviewers can't tell inputs from formulas."],
    ),
    check(
      1,
      q("Where should every assumption sit?", ["On the Inputs sheet", "Inside formulas", "On the Outputs sheet", "In a separate file"], 0, "One place to review and change."),
      q("Which font colour usually marks a hard-coded input?", ["Blue", "Black", "Green", "Red"], 0, "Black is formulas, green is links."),
      q("What does a flag of 1 or 0 do?", ["Switches a calculation on or off for a period", "Formats a cell", "Deletes a row", "Creates a chart"], 0, "Multiply by the flag."),
      q("In which direction should a model flow?", ["Inputs → calculations → outputs", "Outputs → inputs", "Any direction", "Calculations → inputs"], 0, "One-way flow."),
      q("What's wrong with a formula that changes halfway along a row?", ["It's inconsistent and easy to miss", "Excel can't calculate it", "It's slower", "Nothing"], 0, "Keep one formula per row."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Flag",
          ["The roaster loan is repaid from 2028 to 2031. Write the flag formula for column E (2028), with the year in E4 and inputs named RepayStart and RepayEnd."],
          ["=AND(E4>=RepayStart,E4<=RepayEnd)*1 — returns 1 for 2028."],
        ],
        [
          "Exercise 2 — Spot the problem",
          ["A model row has =D10*1.04 in every year. What's wrong and how do you fix it?"],
          ["The 4% growth is hard-coded. Put it on the Inputs sheet (blue) and reference it: =D10*(1+PriceGrowth)."],
        ],
      ),
    ),
    summary(
      ["Uses of financial models", "Inputs, calculations, statements and outputs", "Timelines and flags", "Formatting conventions", "Simple, consistent formulas"],
      "A good model is easy to follow: assumptions in one place, one formula per row, and a clear flow from inputs to outputs.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Assumptions and Revenue Forecasting",
      ["Forecasts start from history and drivers. This module builds Brightwater's assumptions and its 2027 income statement down to EBITDA."],
      ["Build an assumptions sheet", "Use historical analysis as a starting point", "Forecast driver-based revenue", "Forecast cost of sales and gross margin", "Forecast operating costs and headcount"],
    ),
    screen(
      "The assumptions sheet",
      table(
        ["Assumption (2027)", "Value", "Source"],
        [
          ["Volume growth", "10%", "Signed café contracts and pipeline"],
          ["Price increase", "4%", "Price list from January 2027"],
          ["Cost of sales", "60% of revenue", "2026 actual"],
          ["Staff", "4 × $50,000", "Payroll plan"],
          ["Rent and other overheads", "$80,000", "Lease and 2026 actual"],
          ["Tax rate", "25%", "Illustrative rate"],
        ],
      ),
      tip("Record the source", "A source column lets the bank see why each number was chosen."),
    ),
    screen(
      "Historical analysis",
      table(
        ["Brightwater", "2024", "2025", "2026"],
        [
          ["Volume (kg)", "32,000", "36,000", "40,000"],
          ["Price per kg", "$23.00", "$24.00", "$25.00"],
          ["Revenue", "$736,000", "$864,000", "$1,000,000"],
          ["Gross margin", "39%", "40%", "40%"],
        ],
        { numeric: [1, 2, 3] },
      ),
      p("Volume grew 12.5% and then 11.1%; price about 4% a year; margin stayed near 40%. The 2027 assumptions of 10% volume growth and a 4% price rise are in line with history — a lender will check this."),
    ),
    screen(
      "Driver-based revenue",
      p("Revenue = volume × price. Forecasting the drivers separately shows what's behind the number."),
      example(
        [["Volume: 40,000 kg × 1.10", "44,000 kg"], ["Price: $25 × 1.04", "$26.00"]],
        ["2027 revenue (44,000 × $26)", "$1,144,000"],
      ),
      note("Other common drivers: customers × average spend, stores × sales per store, or hours × rate."),
    ),
    screen(
      "Cost of sales and gross margin",
      example(
        [["Revenue", "$1,144,000"], ["Cost of sales (60%)", "−$686,400"]],
        ["Gross profit (40% margin)", "$457,600"],
      ),
      p("A more detailed model could forecast green-coffee cost per kg times volume — useful if bean prices are a major risk."),
    ),
    screen(
      "Operating costs and headcount",
      table(
        ["2027", "Driver", "Amount"],
        [
          ["Staff", "4 people × $50,000", "$200,000"],
          ["Rent and other overheads", "Fixed", "$80,000"],
        ],
        { footer: ["Operating costs", "", "$280,000"], numeric: [2] },
      ),
      example([["Gross profit", "$457,600"], ["Operating costs", "−$280,000"]], ["EBITDA", "$177,600"]),
      tip("Headcount schedule", "List roles, start dates and salaries — staff costs then step up when new people join, rather than growing smoothly."),
    ),
    mistakes(
      ["Forecasting revenue as one growth rate", "Use volume and price drivers."],
      ["Ignoring history", "Assumptions must be explainable against the past."],
      ["Treating every cost as a % of revenue", "Rent and salaries are largely fixed."],
      ["Assumptions without sources", "Record where each came from."],
    ),
    check(
      2,
      q("What's the simplest revenue driver formula?", ["Volume × price", "Profit × tax", "Cash × days", "Assets − liabilities"], 0, "Separate drivers explain the number."),
      q("Why analyse history first?", ["To check assumptions are realistic", "It's required by Excel", "To find formulas", "To pick colours"], 0, "Lenders compare forecasts with the past."),
      q("Revenue $500,000 with a 35% gross margin. What's cost of sales?", ["$325,000", "$175,000", "$500,000", "$350,000"], 0, "65% of revenue."),
      q("Which cost is usually fixed in the short term?", ["Rent", "Cost of sales", "Sales commission", "Packaging"], 0, "It doesn't change with volume."),
      q("What is EBITDA?", ["Earnings before interest, tax, depreciation and amortisation", "Net profit", "Cash flow", "Revenue less tax"], 0, "Gross profit less operating costs here."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — 2028 revenue",
          ["Assume 2028 volume grows 8% and price rises 3%. Calculate 2028 volume, price and revenue."],
          ["Volume 44,000 × 1.08 = 47,520 kg; price $26 × 1.03 = $26.78; revenue 47,520 × $26.78 = $1,272,586 (rounded)."],
        ],
        [
          "Exercise 2 — Headcount",
          ["A fifth employee at $48,000 a year joins on 1 July 2028. What's the 2028 cost of that role?"],
          ["Half a year: $24,000."],
        ],
      ),
    ),
    summary(
      ["The assumptions sheet with sources", "Historical analysis", "Driver-based revenue", "Cost of sales and gross margin", "Operating costs and headcount"],
      "Forecast the drivers, not just the totals — and make every assumption explainable against history.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Fixed Assets, Working Capital and Debt",
      ["The schedules behind the balance sheet come next. This module builds Brightwater's fixed asset, working capital, loan and equity schedules for 2027."],
      ["Build capital expenditure and depreciation schedules", "Forecast receivables, payables and inventory with days", "Build loan schedules", "Forecast equity, dividends and retained earnings"],
    ),
    screen(
      "Capex and depreciation",
      table(
        ["Fixed assets 2027", "Amount"],
        [
          ["Opening net book value", "$300,000"],
          ["Add: capex (new roaster)", "$100,000"],
          ["Less: depreciation — existing assets ($300,000 over 10 years)", "($30,000)"],
          ["Less: depreciation — roaster ($100,000 over 5 years)", "($20,000)"],
        ],
        { footer: ["Closing net book value", "$350,000"], numeric: [1] },
      ),
      note("Brightwater charges a full year's depreciation in the year of purchase to keep the model simple. Many models use a half-year or monthly convention — state yours on the Inputs sheet."),
    ),
    screen(
      "Working capital days",
      table(
        ["Item", "Assumption", "Formula", "2027"],
        [
          ["Receivables", "30 days of revenue", "Revenue × 30 ÷ 365", "$94,027"],
          ["Inventory", "45 days of cost of sales", "COGS × 45 ÷ 365", "$84,625"],
          ["Payables", "40 days of cost of sales", "COGS × 40 ÷ 365", "$75,222"],
        ],
        { numeric: [3] },
      ),
      p("Net working capital rises from $90,000 ($80,000 + $70,000 − $60,000) to $103,430 — an increase of $13,430 that uses cash."),
      tip("Days are intuitive", "“Customers pay in 30 days” is easier to discuss with a lender than a ratio of revenue."),
    ),
    screen(
      "Loan schedule",
      table(
        ["Bank loan 2027", "Amount"],
        [
          ["Opening balance", "$200,000"],
          ["Drawdowns", "$0"],
          ["Repayments", "($40,000)"],
        ],
        { footer: ["Closing balance", "$160,000"], numeric: [1] },
      ),
      p("Interest = 7% × opening balance = $14,000. Using the opening balance keeps the model free of circular references (Module 4 explains the alternative)."),
      bullets(
        "Drawdowns: new borrowing, from Inputs.",
        "Repayments: =MIN(Opening balance, Scheduled repayment) so the balance never goes negative.",
      ),
    ),
    screen(
      "Equity, dividends and retained earnings",
      table(
        ["Retained earnings 2027", "Amount"],
        [
          ["Opening", "$170,000"],
          ["Add: net profit", "$85,200"],
          ["Less: dividends (30% of net profit)", "($25,560)"],
        ],
        { footer: ["Closing", "$229,640"], numeric: [1] },
      ),
      p("Share capital stays at $100,000 unless the owners invest more. Net profit comes from the income statement in Module 4."),
    ),
    mistakes(
      ["Depreciating without a stated convention", "Say full-year, half-year or monthly."],
      ["Working capital as a fixed amount", "Link it to revenue and costs with days."],
      ["Repayments that make the loan negative", "Use MIN."],
      ["Forgetting dividends", "They reduce retained earnings and cash."],
    ),
    check(
      3,
      q("Receivables of 30 days on revenue of $730,000 are about:", ["$60,000", "$30,000", "$73,000", "$730,000"], 0, "$730,000 × 30 ÷ 365."),
      q("Inventory and payable days are usually based on:", ["Cost of sales", "Revenue", "Profit", "Cash"], 0, "They relate to purchases and stock."),
      q("An increase in net working capital:", ["Uses cash", "Creates cash", "Has no cash effect", "Increases profit"], 0, "More cash tied up."),
      q("Why use =MIN(Opening balance, Scheduled repayment)?", ["So the loan balance never goes negative", "To increase interest", "To add drawdowns", "To round numbers"], 0, "Stops over-repayment."),
      q("What moves retained earnings each year?", ["Net profit less dividends", "Revenue less costs", "Cash less debt", "Capex"], 0, "The roll-forward."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — 2028 depreciation",
          ["No capex in 2028. What's 2028 depreciation and closing net book value?"],
          ["$30,000 + $20,000 = $50,000; closing NBV $350,000 − $50,000 = $300,000."],
        ],
        [
          "Exercise 2 — 2028 interest",
          ["The loan repays $40,000 a year. What's 2028 interest at 7% of the opening balance?"],
          ["7% × $160,000 = $11,200."],
        ],
      ),
    ),
    summary(
      ["Capex and depreciation schedules", "Working capital with days", "Loan schedules with drawdowns, repayments and interest", "Equity and retained earnings"],
      "Schedules turn assumptions into the balances and flows that the three statements need.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Linking the Three Statements",
      ["Now the schedules come together. This module builds Brightwater's 2027 income statement, balance sheet and cash flow — and makes them balance."],
      ["Build the income statement from the schedules", "Build the balance sheet", "Build the cash flow statement with the indirect method", "Make the balance sheet balance", "Handle circular references from interest"],
    ),
    screen(
      "The income statement",
      table(
        ["Brightwater 2027", "Amount", "From"],
        [
          ["Revenue", "$1,144,000", "Revenue schedule"],
          ["Cost of sales", "($686,400)", "Revenue schedule"],
          ["Operating costs", "($280,000)", "Cost schedule"],
          ["EBITDA", "$177,600", ""],
          ["Depreciation", "($50,000)", "Fixed asset schedule"],
          ["EBIT", "$127,600", ""],
          ["Interest", "($14,000)", "Loan schedule"],
          ["Profit before tax", "$113,600", ""],
          ["Tax (25%)", "($28,400)", "Inputs"],
        ],
        { footer: ["Net profit", "$85,200", ""], numeric: [1] },
      ),
    ),
    screen(
      "The cash flow statement — indirect method",
      table(
        ["Brightwater 2027", "Amount"],
        [
          ["Net profit", "$85,200"],
          ["Add back depreciation", "$50,000"],
          ["Increase in receivables", "($14,027)"],
          ["Increase in inventory", "($14,625)"],
          ["Increase in payables", "$15,222"],
          ["Cash from operating activities", "$121,770"],
          ["Capex", "($100,000)"],
          ["Loan repayment", "($40,000)"],
          ["Dividends", "($25,560)"],
        ],
        { footer: ["Net change in cash", "($43,790)"], numeric: [1] },
      ),
      p("Closing cash = $80,000 − $43,790 = $36,210."),
    ),
    screen(
      "The balance sheet",
      table(
        ["31 Dec 2027", "Amount", "From"],
        [
          ["Cash", "$36,210", "Cash flow statement"],
          ["Receivables", "$94,027", "Working capital schedule"],
          ["Inventory", "$84,625", "Working capital schedule"],
          ["PP&E (net)", "$350,000", "Fixed asset schedule"],
          ["Total assets", "$564,862", ""],
          ["Payables", "$75,222", "Working capital schedule"],
          ["Bank loan", "$160,000", "Loan schedule"],
          ["Share capital", "$100,000", "Equity schedule"],
          ["Retained earnings", "$229,640", "Equity schedule"],
        ],
        { footer: ["Total liabilities and equity", "$564,862", ""], numeric: [1] },
      ),
      tip("Cash comes last", "Every balance comes from a schedule except cash, which comes from the cash flow statement. That's what makes the model balance — or reveals an error."),
    ),
    screen(
      "Making the balance sheet balance",
      p("A check row =ROUND(TotalAssets−TotalLiabilitiesEquity,0) must be 0 in every year. If it isn't:"),
      steps(
        ["Find the first year it fails", "The error usually starts there."],
        ["Is the difference constant?", "A constant difference often means an opening balance is wrong."],
        ["Halve or double it?", "Half the difference may be an item with the wrong sign; the full amount may be missing from the cash flow."],
        ["Trace each balance-sheet movement", "Every change in a balance must appear in the cash flow or in profit."],
      ),
      caution("Never force the balance with a plug figure. A plug hides the error instead of fixing it."),
    ),
    screen(
      "Circular references from interest",
      p("Interest on the average loan or cash balance depends on cash, cash depends on profit, and profit depends on interest — a circular reference."),
      compare(
        ["Avoid it", "Base interest on opening balances.", ["Simple and stable", "Slightly less precise"]],
        ["Allow it, safely", "Turn on iterative calculation and add a circuit breaker switch.", ["=IF(CircuitBreaker=1,0,AvgBalance×Rate)", "Reset to 0 if errors spread"]],
      ),
      note("Brightwater uses opening balances. With large intra-year repayments, average balances are more accurate — but add the circuit breaker."),
    ),
    mistakes(
      ["Typing balance sheet figures", "Link every line to a schedule."],
      ["Plugging the difference", "Find the error."],
      ["Wrong signs in the cash flow", "An increase in an asset uses cash."],
      ["Circularity without a breaker", "Errors can spread and stay."],
    ),
    check(
      4,
      q("In the indirect method, depreciation is:", ["Added back to net profit", "Deducted from net profit", "Ignored", "A financing flow"], 0, "It's a non-cash expense."),
      q("An increase in receivables in the cash flow is:", ["A deduction", "An addition", "Excluded", "A financing flow"], 0, "Cash hasn't been collected yet."),
      q("Which balance sheet line comes from the cash flow statement?", ["Cash", "Receivables", "Loan", "PP&E"], 0, "Everything else comes from schedules."),
      q("What should the balance check show every year?", ["0", "1", "Any small number", "The total assets"], 0, "Assets = liabilities + equity."),
      q("What's a circuit breaker for?", ["Switching off a circular calculation if errors spread", "Turning off formatting", "Deleting sheets", "Speeding up charts"], 0, "Resetting interest to 0."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Find the error",
          ["The balance sheet is out by $25,560 in 2027 only, and assets are higher. What's the likely error?"],
          ["Dividends were deducted from retained earnings but not from cash (or the reverse sign) — check the dividends line in the cash flow."],
        ],
        [
          "Exercise 2 — Cash from operations",
          ["Net profit $60,000, depreciation $15,000, receivables up $8,000, inventory down $3,000, payables down $2,000. Cash from operations?"],
          ["$60,000 + $15,000 − $8,000 + $3,000 − $2,000 = $68,000."],
        ],
      ),
    ),
    summary(
      ["The income statement from schedules", "The indirect cash flow", "The balance sheet with cash from the cash flow", "Finding balance errors without plugs", "Avoiding or controlling circularity"],
      "Link every line to a schedule, take cash from the cash flow, and the balance check proves the model works.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Scenarios and Sensitivities",
      ["The bank wants to know what happens if things go worse than planned. This module adds scenarios, sensitivities and break-even analysis to Brightwater's model."],
      ["Build scenario switches with CHOOSE and INDEX", "Run data tables for sensitivities", "Use Goal Seek for break-even questions", "Present scenarios side by side"],
    ),
    screen(
      "Scenario switches",
      table(
        ["Assumption", "Downside", "Base", "Upside"],
        [
          ["Volume growth", "4%", "10%", "14%"],
          ["Price increase", "2%", "4%", "5%"],
          ["Cost of sales", "63%", "60%", "58%"],
        ],
      ),
      p("A single input cell, Scenario, holds 1, 2 or 3. Each live assumption picks from its row:"),
      table(
        ["Formula", "Notes"],
        [
          ["=CHOOSE(Scenario,C5,D5,E5)", "Simple for a few options"],
          ["=INDEX(C5:E5,Scenario)", "Easier to extend to more scenarios"],
        ],
      ),
      tip("Label the switch", "Show the scenario name next to the switch and on every output page, so nobody prints the downside thinking it's the base case."),
    ),
    screen(
      "Data tables for sensitivity analysis",
      p("A two-way data table shows how one output changes as two inputs vary — e.g. 2027 EBITDA against volume growth and price increase."),
      steps(
        ["Lay out the grid", "Volume growth values down the side, price increases across the top, and a link to EBITDA in the corner."],
        ["Select the grid", "Including the corner and both headers."],
        ["Data → What-If Analysis → Data Table", "Row input cell: price increase. Column input cell: volume growth."],
      ),
      caution("Data tables recalculate the whole model for every cell and can slow the workbook. The input cells must be on the same sheet as the table."),
    ),
    screen(
      "Goal Seek and break-even",
      p("Goal Seek finds the input that produces a target output. What 2027 volume makes profit before tax zero?"),
      example(
        [["Fixed costs: operating $280,000 + depreciation $50,000 + interest $14,000", "$344,000"], ["Contribution per kg: $26 × 40%", "$10.40"]],
        ["Break-even volume ($344,000 ÷ $10.40)", "33,077 kg"],
      ),
      p("Data → What-If Analysis → Goal Seek: Set cell = profit before tax, To value = 0, By changing = 2027 volume. Brightwater's forecast of 44,000 kg is about 25% above break-even — its margin of safety."),
      note("Goal Seek overwrites the input. Note the original value, or run it on a copy."),
    ),
    screen(
      "Presenting scenarios side by side",
      table(
        ["2027", "Downside", "Base", "Upside"],
        [
          ["Revenue", "$1,060,800", "$1,144,000", "$1,197,000"],
          ["Gross profit", "$392,496", "$457,600", "$502,740"],
          ["EBITDA", "$112,496", "$177,600", "$222,740"],
        ],
        { numeric: [1, 2, 3] },
      ),
      p("Run each scenario, then paste the results as values into a summary table (or record a short macro). Show the metrics the reader cares about — for a lender, also closing cash, debt repayment and interest cover."),
      tip("Highlight the risk", "If closing cash goes negative in the downside, say so — and show what action (e.g. delaying dividends) would fix it."),
    ),
    mistakes(
      ["Scenarios scattered through the model", "Drive them from one switch."],
      ["No scenario label on outputs", "Show which case is live."],
      ["Leaving Goal Seek results in place", "Restore the original input."],
      ["Too many data tables", "They slow recalculation."],
    ),
    check(
      5,
      q("=INDEX(C5:E5,2) returns:", ["The value in D5", "The value in C5", "The value in E5", "An error"], 0, "The second item in the range."),
      q("What does a two-way data table show?", ["How an output changes as two inputs vary", "Two charts", "Two scenarios only", "Two sheets"], 0, "A sensitivity grid."),
      q("Fixed costs $120,000; contribution $8 per unit. Break-even units?", ["15,000", "8,000", "120,000", "9,600"], 0, "$120,000 ÷ $8."),
      q("Which tool finds the input that gives a target output?", ["Goal Seek", "Data validation", "Flash Fill", "Remove Duplicates"], 0, "What-If Analysis."),
      q("What should every output page show when using scenarios?", ["Which scenario is live", "The file size", "The author's phone number", "Nothing extra"], 0, "Avoid confusion."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Downside revenue",
          ["Using the downside case (volume +4%, price +2%) from 2026's 40,000 kg at $25, calculate 2027 revenue."],
          ["41,600 kg × $25.50 = $1,060,800."],
        ],
        [
          "Exercise 2 — Margin of safety",
          ["If break-even is 33,077 kg and forecast volume is 44,000 kg, what's the margin of safety?"],
          ["(44,000 − 33,077) ÷ 44,000 = 24.8%."],
        ],
      ),
    ),
    summary(
      ["Scenario switches with CHOOSE and INDEX", "Sensitivity data tables", "Goal Seek and break-even", "Presenting scenarios side by side"],
      "Scenarios and sensitivities show the reader what could go wrong — and how much room the business has.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Valuation, Checks and Presentation",
      ["The final module values the business, proves the model with checks, presents it clearly, and shows how to review someone else's model."],
      ["Calculate free cash flow and discounted cash flow", "Apply discount rates and terminal value", "Build error and balance checks", "Create a summary dashboard and charts", "Review another person's model"],
    ),
    screen(
      "Free cash flow",
      p("Unlevered free cash flow is the cash the business generates for all investors, before debt payments."),
      example(
        [
          ["EBIT × (1 − tax): $127,600 × 75%", "$95,700"],
          ["Add: depreciation", "$50,000"],
          ["Less: capex", "−$100,000"],
          ["Less: increase in net working capital", "−$13,430"],
        ],
        ["Brightwater 2027 free cash flow", "$32,270"],
      ),
      note("2027 FCF is low because of the roaster purchase. Later years, without major capex, generate more."),
    ),
    screen(
      "Discounted cash flow basics",
      p("A DCF values a business as the present value of its future free cash flows. An illustrative five-year forecast ($000), discounted at 10%:"),
      table(
        ["Year", "1", "2", "3", "4", "5"],
        [
          ["Free cash flow", "100", "110", "120", "130", "140"],
          ["Discount factor 1 ÷ 1.10^n", "0.909", "0.826", "0.751", "0.683", "0.621"],
          ["Present value", "90.9", "90.9", "90.2", "88.8", "86.9"],
        ],
        { numeric: [1, 2, 3, 4, 5] },
      ),
      p("Sum of present values: 447.7. In Excel: =NPV(10%,B2:F2) for flows at year ends."),
    ),
    screen(
      "Discount rates and terminal value",
      terms(
        ["Discount rate", "For unlevered FCF, the weighted average cost of capital (WACC) — the blended return lenders and owners require."],
        ["Terminal value (growth method)", "Value of all cash flows after year 5: FCF₅ × (1 + g) ÷ (WACC − g)."],
      ),
      example(
        [["Terminal value: 140 × 1.03 ÷ (10% − 3%)", "2,060.0"], ["Discounted to today: 2,060 ÷ 1.10⁵", "1,279.1"], ["Add: PV of years 1–5", "447.7"]],
        ["Enterprise value ($000)", "1,726.8"],
      ),
      caution("The terminal value is often over 70% of the total — here 74%. Small changes in growth or WACC move value a lot, so always run a sensitivity table on them."),
    ),
    screen(
      "Error and balance checks",
      table(
        ["Check", "Test"],
        [
          ["Balance sheet balances", "Assets − liabilities − equity = 0 every year"],
          ["Cash agrees", "Cash flow closing cash = balance sheet cash"],
          ["Retained earnings roll forward", "Opening + profit − dividends = closing"],
          ["Debt never negative", "Every loan balance ≥ 0"],
          ["No errors", "=SUMPRODUCT(--ISERROR(range))=0"],
        ],
      ),
      p("A master check on the summary page shows OK only when all checks pass."),
    ),
    screen(
      "Summary dashboard and charts",
      bullets(
        "Key metrics for each year: revenue, EBITDA, net profit, cash, debt.",
        "Ratios a lender watches: interest cover (EBIT ÷ interest — 9.1× in 2027) and net debt ÷ EBITDA.",
        "Charts: revenue and EBITDA columns; cash and debt lines over five years.",
        "The live scenario and the master check, clearly shown.",
      ),
      tip("One page", "A lender should understand the story from one page, then use the rest of the model to test it."),
    ),
    screen(
      "Reviewing someone else's model",
      steps(
        ["Read the structure", "Inputs, timeline, statements, checks — is the flow clear?"],
        ["Check the checks", "Do the balance and cash checks pass in every year and scenario?"],
        ["Look for hard-codes", "Go To Special → Constants on calculation sheets finds typed numbers."],
        ["Test consistency", "Ctrl+\\ selects cells in a row whose formulas differ from the first."],
        ["Trace key numbers", "Ctrl+[ jumps to precedents; Formulas → Trace Precedents shows arrows."],
        ["Challenge assumptions", "Compare with history and the market."],
      ),
    ),
    mistakes(
      ["Discounting levered cash flows at WACC", "Match the cash flow to the rate."],
      ["Growth rate close to WACC", "Terminal value explodes."],
      ["Checks that only test the base case", "Test every scenario."],
      ["Reviewing outputs only", "Trace and test the workings."],
    ),
    check(
      6,
      q("Which formula gives terminal value with the growth method?", ["FCF₅ × (1 + g) ÷ (WACC − g)", "FCF₅ × WACC", "FCF₅ ÷ g", "FCF₅ × 5"], 0, "The Gordon growth formula."),
      q("What's the discount factor for year 2 at 10%?", ["0.826", "0.909", "0.800", "1.21"], 0, "1 ÷ 1.10²."),
      q("Unlevered free cash flow is discounted at:", ["WACC", "The tax rate", "The inflation rate", "0%"], 0, "Cash for all investors."),
      q("Which shortcut jumps to a formula's precedents?", ["Ctrl+[", "Ctrl+T", "F4", "Alt+="], 0, "Trace where numbers come from."),
      q("Interest cover is:", ["EBIT ÷ interest", "Interest ÷ revenue", "Debt ÷ equity", "Cash ÷ debt"], 0, "How easily interest is paid."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Terminal value",
          ["Final-year FCF 200, WACC 9%, growth 2%. What's the terminal value?"],
          ["200 × 1.02 ÷ 0.07 = 2,914.3."],
        ],
        [
          "Exercise 2 — Review",
          ["You find that one year's revenue cell is a typed number in an otherwise formula-driven row. What do you do?"],
          ["Flag it, find out why it was overridden, and replace it with the formula (or move the override to Inputs, clearly labelled)."],
        ],
      ),
    ),
    summary(
      ["Unlevered free cash flow", "Discounting and NPV", "WACC and terminal value", "Error and balance checks", "Dashboards and model review"],
      "A finished model values the business, proves itself with checks, and tells its story on one page.",
    ),
  ],
}

export default lessons
