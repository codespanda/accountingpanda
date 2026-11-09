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

// Budgeting and Cash Flow Forecasting — lesson screens by module index
// (0 = Module 1). The course follows Fernhill Garden Supplies, a seasonal
// garden centre with retail and trade customers, budgeting for 2027.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Why Budgets and Forecasts Matter",
      ["Budgets set the plan; forecasts keep it realistic; cash forecasts keep the business alive. This module introduces all three through Fernhill Garden Supplies."],
      ["Distinguish budgets, forecasts and cash flow forecasts", "Explain why profitable businesses run short of cash", "Compare top-down and bottom-up budgeting", "Plan an annual budgeting calendar"],
    ),
    screen(
      "Meet Fernhill Garden Supplies",
      p("Fernhill sells plants, tools and landscaping supplies to the public (retail, paid immediately) and to 80 landscaping businesses (trade, on 30-day terms). Its calendar-year revenue is about $1.8 million — and very seasonal."),
      table(
        ["Season", "What happens"],
        [
          ["Jan–Feb", "Quiet sales; stock bought in for spring"],
          ["Mar–May", "Peak season — about 40% of the year's sales"],
          ["Jun–Aug", "Steady sales"],
          ["Sep–Dec", "Quiet, apart from a Christmas lift"],
        ],
      ),
      p("Last spring Fernhill was profitable but couldn't pay suppliers on time. The owners, Jo and Marcus, want a proper 2027 budget and cash forecast."),
    ),
    screen(
      "Budgets, forecasts and cash flow forecasts",
      table(
        ["Tool", "What it is", "Updated"],
        [
          ["Budget", "The agreed financial plan and targets for the year", "Once a year"],
          ["Forecast", "The current best estimate of the outcome", "Monthly or quarterly"],
          ["Cash flow forecast", "Expected receipts, payments and bank balance", "Weekly or monthly"],
        ],
      ),
      note("The budget stays fixed so performance can be measured against it. The forecast moves as reality changes."),
    ),
    screen(
      "Profit vs. cash",
      p("In Q1 2026 Fernhill made a profit — but its bank balance fell."),
      example(
        [
          ["Q1 profit", "$40,000"],
          ["Trade receivables increased", "−$55,000"],
          ["Inventory built up for spring", "−$30,000"],
          ["Supplier payables increased", "+$15,000"],
        ],
        ["Change in cash", "−$30,000"],
      ),
      bullets(
        "Sales on credit are profit now but cash later.",
        "Stock bought before the season is cash out before any sale.",
        "Loan repayments, capital spending and owner drawings use cash but aren't expenses in profit.",
      ),
    ),
    screen(
      "Top-down and bottom-up budgeting",
      compare(
        ["Top-down", "Owners or senior managers set targets; departments fit their plans to them.", ["Quick", "Aligned to strategy", "Can feel imposed"]],
        ["Bottom-up", "Each department builds its own budget, which is combined.", ["Detailed and owned", "Slower", "Can be padded"]],
      ),
      p("Fernhill uses both: Jo sets a target of $1.8 million revenue and $90,000 operating profit; the retail and trade managers build detailed plans, and the two are reconciled."),
    ),
    screen(
      "The annual budgeting calendar",
      table(
        ["When (for a calendar-year budget)", "Step"],
        [
          ["September", "Review this year's results and set targets"],
          ["October", "Managers prepare detailed sales, cost and payroll budgets"],
          ["Early November", "Combine, review and challenge"],
          ["Late November", "Prepare the cash flow forecast and funding plan"],
          ["December", "Owners or board approve the budget"],
        ],
      ),
      tip("Start early", "A budget approved after the year starts is already behind."),
    ),
    mistakes(
      ["Treating profit as cash", "Forecast cash separately."],
      ["Changing the budget every month", "Keep the budget fixed; update the forecast."],
      ["Purely top-down targets", "Managers need to own their numbers."],
      ["Starting too late", "Plan the calendar."],
    ),
    check(
      1,
      q("What's the main purpose of a budget?", ["An agreed plan and targets for the year", "A record of last year's results", "A tax return", "A bank statement"], 0, "Performance is measured against it."),
      q("How often is a forecast typically updated?", ["Monthly or quarterly", "Never", "Every five years", "Only at year end"], 0, "It's the current best estimate."),
      q("Why can a profitable business run short of cash?", ["Customers pay later and stock is bought in advance", "Profit is always cash", "Expenses are ignored", "Banks hold the cash"], 0, "Timing differences."),
      q("In bottom-up budgeting, who prepares the detail?", ["Each department", "Only the owner", "The bank", "The auditor"], 0, "Then it's combined."),
      q("Which is a cash outflow but not an expense in profit?", ["A loan repayment", "Wages", "Rent", "Electricity"], 0, "Principal repayments aren't expenses."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Profit to cash",
          ["Profit $25,000; receivables down $10,000; inventory up $18,000; payables down $5,000. What's the change in cash?"],
          ["$25,000 + $10,000 − $18,000 − $5,000 = +$12,000."],
        ],
        [
          "Exercise 2 — Calendar",
          ["Fernhill's owners approve budgets at their December meeting. When should managers start their detailed plans?"],
          ["By early October, so the budget can be combined, challenged and turned into a cash forecast in November."],
        ],
      ),
    ),
    summary(
      ["Budgets, forecasts and cash flow forecasts", "Profit vs. cash", "Top-down and bottom-up budgeting", "The budgeting calendar"],
      "A budget sets the target, a forecast tracks reality, and a cash forecast makes sure the business can pay its bills along the way.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Building the Operating Budget",
      ["This module builds Fernhill's 2027 operating budget line by line, from sales drivers to capital spending."],
      ["Forecast sales from volume, price and customer drivers", "Budget cost of sales and gross margin", "Plan payroll and headcount", "Separate fixed and variable overheads", "Budget capital expenditure"],
    ),
    screen(
      "Sales from drivers",
      table(
        ["Stream", "Driver", "2027 budget"],
        [
          ["Retail", "30,000 transactions × $40 average spend", "$1,200,000"],
          ["Trade", "80 accounts × $7,500 a year", "$600,000"],
        ],
        { footer: ["Total revenue", "", "$1,800,000"], numeric: [2] },
      ),
      p("The annual total is then spread by month using last year's seasonal pattern — about 40% in March to May."),
      tip("Drivers you can discuss", "“30,000 transactions at $40” is easier to challenge and track than “revenue up 6%”."),
    ),
    screen(
      "Cost of sales and gross margin",
      example([["Revenue", "$1,800,000"], ["Cost of sales (55%)", "−$990,000"]], ["Gross profit (45% margin)", "$810,000"]),
      p("Fernhill's margin varies by product — plants earn more than tools — so a change in sales mix changes the overall margin. A detailed budget forecasts each category."),
    ),
    screen(
      "Payroll and headcount",
      table(
        ["Payroll 2027", "Amount"],
        [
          ["10 full-time equivalent staff × $45,000", "$450,000"],
          ["On-costs — employer taxes, retirement contributions, insurance (12%)", "$54,000"],
        ],
        { footer: ["Total payroll", "$504,000"], numeric: [1] },
      ),
      bullets(
        "Plan casual staff for the spring peak separately — they change the monthly cash profile.",
        "Include pay rises from their effective date, not from January.",
        "On-cost rates vary by country; use your local rates.",
      ),
    ),
    screen(
      "Overheads — fixed and variable",
      table(
        ["Overhead", "Behaviour", "2027 budget"],
        [
          ["Rent", "Fixed", "$96,000"],
          ["Utilities", "Fixed (mostly)", "$36,000"],
          ["Marketing", "Variable — 3% of revenue", "$54,000"],
          ["Other overheads", "Fixed", "$30,000"],
        ],
        { footer: ["Total overheads", "", "$216,000"], numeric: [2] },
      ),
      example([["Gross profit", "$810,000"], ["Payroll", "−$504,000"], ["Overheads", "−$216,000"]], ["Operating profit before depreciation", "$90,000"]),
    ),
    screen(
      "Capital expenditure",
      p("Fernhill plans a $60,000 greenhouse. It isn't an expense in the operating budget — it's capital spending, depreciated over 10 years."),
      table(
        ["Effect", "Amount"],
        [
          ["Cash out (capital budget)", "$60,000 when paid"],
          ["Depreciation in the profit budget", "$6,000 a year"],
        ],
      ),
      example([["Operating profit before depreciation", "$90,000"], ["Depreciation", "−$6,000"]], ["Budgeted profit for 2027", "$84,000"]),
      caution("Large capital purchases are often what pushes a cash forecast below zero — budget their timing carefully."),
    ),
    mistakes(
      ["Spreading annual sales evenly", "Use the seasonal pattern."],
      ["Forgetting payroll on-costs", "Add employer costs."],
      ["Treating marketing as fixed", "Some overheads move with sales."],
      ["Putting capex in overheads", "Budget it separately and depreciate it."],
    ),
    check(
      2,
      q("Which is a driver-based sales forecast?", ["Transactions × average spend", "Last year + 5%", "A guess", "Profit ÷ margin"], 0, "Volume and price drivers."),
      q("Revenue $600,000 and gross margin 40%. What's cost of sales?", ["$360,000", "$240,000", "$600,000", "$400,000"], 0, "60% of revenue."),
      q("Which payroll cost is often forgotten?", ["Employer on-costs", "Base salary", "Headcount", "Job titles"], 0, "Taxes, contributions, insurance."),
      q("A cost that changes with sales volume is:", ["Variable", "Fixed", "Sunk", "Capital"], 0, "e.g. marketing at 3% of revenue."),
      q("How is a new greenhouse treated in the budget?", ["As capital spending, depreciated over its life", "As a one-off overhead", "As cost of sales", "Ignored"], 0, "Cash now, depreciation over time."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Retail sales",
          ["If transactions rise to 31,500 at an average spend of $41, what's retail revenue?"],
          ["31,500 × $41 = $1,291,500."],
        ],
        [
          "Exercise 2 — New hire",
          ["A new $48,000 employee starts on 1 April 2027 with 12% on-costs. What's the 2027 cost?"],
          ["9 months: $48,000 × 9/12 × 1.12 = $40,320."],
        ],
      ),
    ),
    summary(
      ["Driver-based sales", "Cost of sales and gross margin", "Payroll with on-costs", "Fixed and variable overheads", "Capital expenditure and depreciation"],
      "Fernhill's 2027 budget: $1.8 million revenue, $810,000 gross profit, and $84,000 profit after depreciation.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Cash Flow Forecasting",
      ["The budget says Fernhill will make $84,000. The cash forecast shows whether it can survive spring. This module builds it."],
      ["Forecast cash with the direct method", "Apply timing for customers, suppliers and tax", "Build a 13-week cash flow forecast", "Maintain a 12-month rolling forecast", "Set a minimum cash balance and plan funding"],
    ),
    screen(
      "The direct method",
      p("A direct cash forecast lists actual expected receipts and payments, period by period."),
      table(
        ["Section", "Fernhill examples"],
        [
          ["Opening cash", "Bank balance at the start of the period"],
          ["Receipts", "Retail takings, trade customer payments, other income"],
          ["Payments", "Suppliers, payroll, rent, overheads, sales tax, capex, loan repayments"],
          ["Closing cash", "Opening + receipts − payments — next period's opening"],
        ],
      ),
    ),
    screen(
      "Timing",
      table(
        ["Item", "Timing rule"],
        [
          ["Retail sales", "Cash on the day of sale"],
          ["Trade sales", "Collected the month after sale (30-day terms)"],
          ["Supplier purchases", "Paid the month after purchase"],
          ["Payroll and rent", "Monthly, in the month incurred"],
          ["Sales tax (GST/VAT)", "Paid quarterly — Fernhill's next payment is due in April"],
          ["Greenhouse", "Paid in full on completion"],
        ],
      ),
      caution("Customers don't always pay on time. Fernhill's trade customers average 38 days, not 30 — use actual behaviour, not terms."),
    ),
    screen(
      "Fernhill's spring cash forecast ($000)",
      table(
        ["", "March", "April", "May"],
        [
          ["Opening cash", "60", "(80)", "(95)"],
          ["Retail receipts", "120", "200", "220"],
          ["Trade collections", "40", "60", "80"],
          ["Supplier payments", "(180)", "(190)", "(150)"],
          ["Payroll, rent and overheads", "(60)", "(60)", "(60)"],
          ["Sales tax", "—", "(25)", "—"],
          ["Greenhouse", "(60)", "—", "—"],
        ],
        { footer: ["Closing cash", "(80)", "(95)", "(5)"], numeric: [1, 2, 3] },
      ),
      p("Despite a profitable year, Fernhill would be $95,000 overdrawn in April — because it pays for spring stock before customers buy it, and the greenhouse lands at the same time."),
    ),
    screen(
      "13-week and 12-month rolling forecasts",
      compare(
        ["13-week forecast", "Weekly, for the next quarter.", ["Shows exactly which week cash is tight", "Used to manage payments day to day", "Updated every week"]],
        ["12-month rolling forecast", "Monthly, always looking 12 months ahead.", ["Shows seasonal peaks and funding needs", "Add a new month as each one ends", "Updated monthly"]],
      ),
      tip("Compare forecast to actual", "Each week, compare last week's forecast with what happened. Consistent misses show which assumption to fix."),
    ),
    screen(
      "Minimum cash and funding needs",
      p("Fernhill wants at least $30,000 in the bank at all times as a buffer."),
      table(
        ["Option", "Lowest balance", "Funding needed to keep $30,000"],
        [
          ["Greenhouse paid in March", "($95,000) in April", "$125,000"],
          ["Greenhouse delayed to June", "($35,000) in April", "$65,000"],
        ],
      ),
      p("Delaying the greenhouse almost halves the funding need. Fernhill arranges a $70,000 seasonal overdraft before spring — and talks to the bank in January, not April."),
      note("Lenders respond better to a forecast showing a planned need than to an unexpected request."),
    ),
    mistakes(
      ["Using payment terms instead of actual behaviour", "Forecast how customers really pay."],
      ["Monthly forecasts only", "A 13-week view finds the tight weeks."],
      ["Forgetting quarterly tax payments", "Put tax dates in the forecast."],
      ["Asking for funding at the last minute", "Plan it from the forecast."],
    ),
    check(
      3,
      q("What does the direct method list?", ["Expected receipts and payments", "Profit adjustments", "Balance sheet ratios", "Budgets only"], 0, "Cash in and out."),
      q("Closing cash equals:", ["Opening cash + receipts − payments", "Profit + depreciation", "Revenue − expenses", "Assets − liabilities"], 0, "Then becomes next period's opening."),
      q("How often is a 13-week forecast usually updated?", ["Weekly", "Yearly", "Never", "Every 13 weeks"], 0, "It manages near-term cash."),
      q("What should timing assumptions for customers be based on?", ["How they actually pay", "Payment terms only", "The budget", "Guesswork"], 0, "Actual behaviour."),
      q("Why set a minimum cash balance?", ["As a buffer against surprises", "To earn interest", "It's required for tax", "To reduce profit"], 0, "Plan funding to protect it."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — June",
          ["With the greenhouse delayed, May closes at $55,000. June: retail $150,000, trade collections $70,000, suppliers $120,000, overheads $60,000, greenhouse $60,000. Closing cash?"],
          ["$55,000 + $220,000 − $240,000 = $35,000 — just above the $30,000 minimum."],
        ],
        [
          "Exercise 2 — Slower trade payers",
          ["Trade customers start paying after 60 days instead of 30. What happens to the spring forecast?"],
          ["Each month's trade collections move a month later — e.g. April collects February's sales, not March's — deepening the April overdraft. Fernhill would need more funding or tighter credit control."],
        ],
      ),
    ),
    summary(
      ["The direct method", "Timing of receipts and payments", "Fernhill's spring cash squeeze", "13-week and 12-month rolling forecasts", "Minimum cash and funding plans"],
      "A profitable budget can still run out of cash. The cash forecast shows when — early enough to fix it.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Working Capital and Funding",
      ["Fernhill's cash squeeze comes from working capital. This module looks at the levers and the funding options."],
      ["Manage receivables, payables and inventory", "Calculate the cash conversion cycle", "Compare overdrafts, working capital loans and invoice finance", "Plan for seasonality and growth"],
    ),
    screen(
      "Receivables, payables and inventory",
      table(
        ["Area", "Lever", "Fernhill action"],
        [
          ["Receivables", "Collect faster", "Credit checks for new trade accounts; reminders at 7 days overdue; card payments accepted"],
          ["Payables", "Pay on agreed terms, not early", "Negotiate 60-day terms for spring stock orders"],
          ["Inventory", "Hold less, closer to need", "Stagger plant deliveries through spring instead of one big February order"],
        ],
      ),
    ),
    screen(
      "The cash conversion cycle",
      p("The cash conversion cycle (CCC) is the number of days between paying suppliers and collecting from customers."),
      table(
        ["Measure", "Fernhill"],
        [
          ["Inventory days (DIO)", "90"],
          ["Plus receivable days (DSO) — mostly cash retail", "10"],
          ["Less payable days (DPO)", "(30)"],
        ],
        { footer: ["Cash conversion cycle", "70 days"], numeric: [1] },
      ),
      p("Moving to 60-day supplier terms would cut the cycle to 40 days and free up a large part of the spring overdraft."),
    ),
    screen(
      "Funding options",
      table(
        ["Option", "How it works", "Best for"],
        [
          ["Overdraft", "Borrow up to a limit on the bank account; interest only on what's used", "Short, seasonal dips"],
          ["Working capital loan", "A fixed amount repaid over months", "A planned build-up of stock"],
          ["Invoice finance", "A lender advances a percentage of unpaid invoices", "Businesses with large trade receivables"],
          ["Supplier credit", "Longer terms from suppliers", "Seasonal stock purchases"],
        ],
      ),
      caution("Overdrafts are usually repayable on demand. Don't fund long-term assets like the greenhouse with short-term borrowing."),
    ),
    screen(
      "Seasonality and growth",
      bullets(
        "Seasonal businesses need funding for the build-up before the peak — plan it from the 12-month forecast.",
        "Growth uses cash: more sales mean more receivables and stock before the extra profit arrives.",
        "A 20% increase in trade sales would raise Fernhill's trade receivables by about 20% too.",
      ),
      tip("Overtrading", "Growing faster than working capital funding allows is called overtrading — a common reason profitable businesses fail."),
    ),
    mistakes(
      ["Paying suppliers early by habit", "Pay on agreed terms."],
      ["Ordering all season's stock at once", "Stagger deliveries."],
      ["Long-term assets on an overdraft", "Match funding to the asset's life."],
      ["Ignoring the cash cost of growth", "Forecast working capital for growth."],
    ),
    check(
      4,
      q("How is the cash conversion cycle calculated?", ["Inventory days + receivable days − payable days", "Revenue ÷ assets", "Profit − cash", "Payable days − inventory days"], 0, "Days cash is tied up."),
      q("Which change shortens the cash conversion cycle?", ["Longer supplier terms", "Slower collections", "Holding more stock", "Paying suppliers early"], 0, "Higher payable days."),
      q("What is invoice finance?", ["Borrowing against unpaid customer invoices", "A long-term mortgage", "Owner investment", "A tax refund"], 0, "A percentage is advanced."),
      q("Why shouldn't long-term assets be funded with an overdraft?", ["Overdrafts are usually repayable on demand", "Overdrafts are free", "Banks forbid it by law", "It increases profit"], 0, "Match funding to the asset."),
      q("What is overtrading?", ["Growing faster than working capital funding allows", "Trading overseas", "Selling below cost", "Holding too much cash"], 0, "A common cause of failure."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — CCC",
          ["Inventory days 60, receivable days 45, payable days 35. What's the CCC?"],
          ["60 + 45 − 35 = 70 days."],
        ],
        [
          "Exercise 2 — Choose funding",
          ["Which funding suits (a) a 6-week spring dip, (b) a $60,000 greenhouse?"],
          ["(a) A seasonal overdraft. (b) A term loan or equipment finance over several years."],
        ],
      ),
    ),
    summary(
      ["Levers for receivables, payables and inventory", "The cash conversion cycle", "Overdrafts, loans, invoice finance and supplier credit", "Seasonality, growth and overtrading"],
      "Shortening the cash conversion cycle is often cheaper than borrowing — and the right funding matches the need's length.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Tracking Performance",
      ["The year is underway. This module compares Fernhill's April results with budget, explains the variances and updates the forecast."],
      ["Prepare monthly budget vs. actual reports", "Split variances into price, volume and cost", "Explain variances in plain language", "Reforecast during the year"],
    ),
    screen(
      "Monthly budget vs. actual",
      table(
        ["April 2027", "Budget", "Actual", "Variance"],
        [
          ["Retail sales", "$200,000", "$193,200", "($6,800) A"],
          ["Wages", "$42,000", "$45,500", "($3,500) A"],
          ["Marketing", "$6,000", "$5,800", "$200 F"],
        ],
        { numeric: [1, 2, 3] },
      ),
      p("F = favourable (better for profit), A = adverse (worse). Fernhill reports month and year-to-date, and comments on anything over $2,000 or 5%."),
    ),
    screen(
      "Price and volume variances",
      p("April retail budget: 5,000 transactions × $40. Actual: 4,600 transactions × $42."),
      table(
        ["Variance", "Calculation", "Amount"],
        [
          ["Volume", "(4,600 − 5,000) × $40 budget price", "($16,000) A"],
          ["Price / spend", "($42 − $40) × 4,600 actual transactions", "$9,200 F"],
        ],
        { footer: ["Total sales variance", "", "($6,800) A"], numeric: [2] },
      ),
      p("Fewer customers came (a wet April), but each spent more — the total hides two opposite stories."),
    ),
    screen(
      "Cost variances",
      terms(
        ["Spending variance", "Paid more or less than budget for the same activity — e.g. a higher hourly rate."],
        ["Activity variance", "Used more or less than budget — e.g. extra overtime hours."],
      ),
      p("April wages were $3,500 over budget because of overtime over the Easter weekend, when two casual staff didn't start on time."),
      tip("Flex the budget", "For variable costs, compare actual with a budget adjusted to actual activity — marketing at 3% of $193,200 is $5,796, so $5,800 was on target."),
    ),
    screen(
      "Explaining variances in plain language",
      compare(
        ["Weak", "“Sales were $6,800 below budget.”", ["States the number only"]],
        ["Strong", "“Sales were $6,800 below budget: wet weather cut visits by 8% ($16,000), partly offset by higher spend per visit from the new premium range ($9,200). We expect most lost sales to move into May.”", ["Cause, size, and what happens next"]],
      ),
    ),
    screen(
      "Reforecasting during the year",
      steps(
        ["Start with year-to-date actuals", "January to April."],
        ["Update the remaining months", "Change assumptions that have clearly changed — e.g. May sales up as delayed demand arrives."],
        ["Compare to budget", "Show the forecast full year next to the original budget."],
        ["Update the cash forecast", "Check the overdraft is still enough."],
      ),
      note("Keep the original budget for comparison. The reforecast doesn't replace it — it tells owners where the year will land."),
    ),
    mistakes(
      ["Reporting variances without explanation", "Give the cause and next step."],
      ["Comparing variable costs to a fixed budget", "Flex for activity."],
      ["Hiding offsetting variances", "Split price and volume."],
      ["Overwriting the budget with the forecast", "Keep both."],
    ),
    check(
      5,
      q("An adverse variance means:", ["Worse for profit than budget", "Better for profit", "No change", "A tax error"], 0, "A for adverse, F for favourable."),
      q("Budget 1,000 units at $10; actual 900 units. What's the volume variance at budget price?", ["$1,000 adverse", "$1,000 favourable", "$900 adverse", "$100 adverse"], 0, "100 × $10."),
      q("What does flexing a budget mean?", ["Adjusting it to the actual level of activity", "Ignoring it", "Rewriting it monthly", "Adding 10%"], 0, "A fair comparison for variable costs."),
      q("A good variance explanation includes:", ["Cause, size and what happens next", "Only the number", "Blame", "Nothing"], 0, "Plain language."),
      q("What does a reforecast start with?", ["Year-to-date actuals", "Last year's budget", "A blank sheet", "Competitors' results"], 0, "Then update the remaining months."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Split the variance",
          ["Trade budget for May: 80 accounts × $700. Actual: 75 accounts × $760. Calculate volume and price variances."],
          ["Volume (75 − 80) × $700 = $3,500 A. Price ($760 − $700) × 75 = $4,500 F. Total $1,000 F ($57,000 vs. $56,000)."],
        ],
        [
          "Exercise 2 — Explain it",
          ["Write a one-sentence explanation for the May trade result."],
          ["“Trade sales were $1,000 above budget: five fewer landscapers ordered ($3,500), but larger orders from the remaining 75 ($4,500) more than made up for it.”"],
        ],
      ),
    ),
    summary(
      ["Monthly budget vs. actual", "Price and volume variances", "Spending and activity variances, and flexing", "Plain-language explanations", "Reforecasting"],
      "Variances only help when they're split into causes, explained clearly, and used to update the forecast.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Scenarios and Decisions",
      ["The owners want to know how bad a bad year could be, and the bank wants a clear plan. This module completes Fernhill's finance plan."],
      ["Build best, base and worst-case scenarios", "Calculate break-even", "Test sensitivity to key assumptions", "Present a finance plan to owners and lenders", "Use a budgeting and forecasting checklist"],
    ),
    screen(
      "Fixed and variable costs",
      table(
        ["2027 budget", "Amount"],
        [
          ["Variable costs: cost of sales 55% + marketing 3%", "58% of revenue"],
          ["Contribution margin", "42% of revenue"],
          ["Fixed costs: payroll $504,000, rent $96,000, utilities $36,000, other $30,000, depreciation $6,000", "$672,000"],
        ],
      ),
      example([["Contribution: $1,800,000 × 42%", "$756,000"], ["Fixed costs", "−$672,000"]], ["Profit", "$84,000"]),
    ),
    screen(
      "Best, base and worst-case scenarios",
      table(
        ["Scenario", "Revenue", "Profit (42% contribution − $672,000)"],
        [
          ["Worst — revenue −10%", "$1,620,000", "$8,400"],
          ["Base", "$1,800,000", "$84,000"],
          ["Best — revenue +8%", "$1,944,000", "$144,480"],
        ],
        { numeric: [1, 2] },
      ),
      p("A 10% fall in revenue removes 90% of profit — because most costs are fixed. Each scenario also needs its own cash forecast."),
    ),
    screen(
      "Break-even analysis",
      example([["Fixed costs", "$672,000"], ["Contribution margin ratio", "42%"]], ["Break-even revenue ($672,000 ÷ 0.42)", "$1,600,000"]),
      p("Margin of safety: ($1,800,000 − $1,600,000) ÷ $1,800,000 = 11.1%. Revenue can fall 11% before Fernhill makes a loss."),
    ),
    screen(
      "Sensitivity testing",
      table(
        ["Change (one at a time)", "Profit", "Change from base"],
        [
          ["Base", "$84,000", "—"],
          ["Gross margin 43% instead of 45%", "$48,000", "−$36,000"],
          ["Revenue −10%", "$8,400", "−$75,600"],
          ["Payroll +5% ($25,200)", "$58,800", "−$25,200"],
        ],
        { numeric: [1, 2] },
      ),
      p("Revenue and margin matter most, so Fernhill tracks weekly sales and margin by category, and reviews prices before spring."),
    ),
    screen(
      "Presenting to owners and lenders",
      bullets(
        "One page: revenue, profit, cash low point, funding needed, key risks.",
        "Show assumptions and why they're realistic (history, signed trade accounts).",
        "Show the worst case and the actions you'd take — e.g. delay the greenhouse, cut casual hours.",
        "For lenders: when they'll be repaid, and interest cover.",
      ),
      tip("Lead with cash", "Lenders care most about whether they'll be repaid. Put the cash forecast and funding need up front."),
    ),
    screen(
      "Budgeting and forecasting checklist",
      bullets(
        "Sales built from drivers and spread by season.",
        "Payroll includes on-costs, pay rises and casual staff.",
        "Fixed and variable costs identified.",
        "Capex budgeted separately, with timing.",
        "Direct cash forecast with realistic timing, tax dates and a minimum balance.",
        "Funding arranged before it's needed.",
        "Scenarios, break-even and sensitivities prepared.",
        "Monthly budget vs. actual with explanations, and a regular reforecast.",
      ),
    ),
    mistakes(
      ["Only one scenario", "Show worst and best too."],
      ["Ignoring operating leverage", "High fixed costs magnify revenue changes."],
      ["Changing several assumptions at once", "Test one at a time to see what matters."],
      ["Plans without actions", "Say what you'd do in the worst case."],
    ),
    check(
      6,
      q("How is break-even revenue calculated?", ["Fixed costs ÷ contribution margin ratio", "Revenue × margin", "Profit ÷ revenue", "Variable costs ÷ fixed costs"], 0, "Where contribution covers fixed costs."),
      q("Fixed costs $300,000; contribution margin 30%. Break-even revenue?", ["$1,000,000", "$90,000", "$300,000", "$390,000"], 0, "$300,000 ÷ 0.30."),
      q("What is the margin of safety?", ["How far revenue can fall before a loss", "Profit as a % of revenue", "Cash in the bank", "Gross margin"], 0, "(Budget − break-even) ÷ budget."),
      q("What does sensitivity testing show?", ["Which assumptions affect results most", "The tax due", "The bank balance", "The audit opinion"], 0, "Change one at a time."),
      q("What do lenders care about most in a finance plan?", ["Whether and when they'll be repaid", "The logo", "Staff names", "Office décor"], 0, "Lead with cash."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — New break-even",
          ["If Fernhill's fixed costs rise to $693,000, what's break-even revenue?"],
          ["$693,000 ÷ 0.42 = $1,650,000."],
        ],
        [
          "Exercise 2 — Target profit",
          ["What revenue gives a $126,000 profit?"],
          ["($672,000 + $126,000) ÷ 0.42 = $1,900,000."],
        ],
      ),
    ),
    summary(
      ["Fixed costs and contribution", "Best, base and worst-case scenarios", "Break-even and margin of safety", "Sensitivity testing", "Presenting a finance plan and the checklist"],
      "Know your break-even, test what matters, and show owners and lenders the worst case along with the plan to handle it.",
    ),
  ],
}

export default lessons
