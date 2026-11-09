import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
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

// Financial Statement Analysis — lesson screens by module index (0 = Module 1).
// Analyses Cedar & Stone Homewares Ltd's FY2026 statements (the company from
// the Financial Reporting course). Year-end balances are used for simplicity.

const keyFigures = table(
  ["Cedar & Stone — FY2026", "Amount"],
  [
    ["Revenue", "$500,000"],
    ["Cost of sales", "$300,000"],
    ["Gross profit", "$200,000"],
    ["Operating profit", "$80,000"],
    ["Finance costs", "$7,000"],
    ["Net profit", "$56,250"],
    ["Cash", "$30,000"],
    ["Receivables", "$60,000"],
    ["Inventory", "$50,000"],
    ["Prepayments", "$10,000"],
    ["Current assets", "$150,000"],
    ["Total assets", "$450,000"],
    ["Payables", "$45,000"],
    ["Current liabilities", "$75,000"],
    ["Borrowings (total)", "$70,000"],
    ["Equity", "$301,250"],
    ["Operating cash flow", "$56,250"],
    ["Capital expenditure", "$40,000"],
  ],
  { numeric: [1] },
)

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Reading Financial Statements with Purpose",
      ["Financial statement analysis turns statements into answers: is this business healthy, efficient and safe to lend to or invest in? This module sets up the analysis of Cedar & Stone Homewares."],
      ["Identify who analyses statements and why", "Connect the income statement, balance sheet and cash flow statement", "Spot accounting policies that affect comparisons", "Gather and prepare data for analysis"],
    ),
    screen(
      "Who analyses statements",
      table(
        ["Analyst", "Main question", "Focus"],
        [
          ["Shareholders and investors", "Is the business earning a good return on our money?", "Profitability and returns"],
          ["Lenders", "Can it pay interest and repay loans?", "Cash flow, liquidity and solvency"],
          ["Managers", "Where can performance improve?", "Margins, costs and efficiency"],
          ["Suppliers", "Is it safe to offer credit?", "Liquidity and payment history"],
        ],
      ),
    ),
    screen(
      "Cedar & Stone's key figures",
      p("You'll analyse Cedar & Stone Homewares Ltd's FY2026 statements — the same company prepared in the Financial Reporting course."),
      keyFigures,
    ),
    screen(
      "How the statements connect",
      bullets(
        "Net profit ($56,250) flows into retained earnings on the balance sheet.",
        "The cash flow statement explains the change in cash ($18,750 → $30,000).",
        "Working capital on the balance sheet (receivables, inventory, payables) explains why operating cash differs from profit.",
      ),
      tip("Read all three together", "A ratio from one statement often needs context from another — e.g. high profit with weak cash flow."),
    ),
    screen(
      "Accounting policies that affect comparisons",
      terms(
        ["Inventory formula", "Weighted average vs. FIFO changes cost of sales and margins."],
        ["Depreciation", "Different useful lives or methods change operating profit."],
        ["Revenue recognition", "Timing policies can move revenue between periods."],
        ["Leases", "Frameworks differ in how lease costs appear in the income statement."],
      ),
      caution("Before comparing two businesses, read their accounting policy notes. Different policies can make similar businesses look different."),
    ),
    screen(
      "Gathering and preparing data",
      steps(
        ["Collect at least two or three years", "One year alone shows no trend."],
        ["Use consistent definitions", "E.g. always include or exclude one-off items."],
        ["Adjust for unusual items", "Note one-off gains, losses and policy changes."],
        ["Choose year-end or average balances", "Averages are more accurate for return and days ratios; this course uses year-end figures for simplicity."],
      ),
    ),
    mistakes(
      ["Analysing one year in isolation", "Use trends."],
      ["Comparing businesses with different policies", "Read the notes first."],
      ["Ignoring the cash flow statement", "Profit alone can mislead."],
      ["Mixing definitions between years", "Keep them consistent."],
    ),
    check(
      1,
      q("Which user mainly asks whether loans can be repaid?", ["Lenders", "Managers", "Customers", "Employees"], 0, "Lenders focus on repayment."),
      q("What links the income statement and balance sheet?", ["Profit flowing into retained earnings", "Revenue", "Cash only", "Nothing"], 0, "Retained earnings carry the profit."),
      q("Why read the notes before comparing companies?", ["Accounting policies affect the numbers", "They're shorter", "They contain the ratios", "Tax law requires it"], 0, "Different policies change comparisons."),
      q("Why collect several years of data?", ["To see trends", "To fill pages", "For tax", "It's not useful"], 0, "One year shows no trend."),
      q("What is Cedar & Stone's gross profit?", ["$200,000", "$500,000", "$300,000", "$80,000"], 0, "$500,000 − $300,000."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Choose the focus",
          ["A supplier is deciding whether to offer Cedar & Stone 60-day credit. Which figures would it look at first?"],
          ["Cash, current assets and current liabilities (liquidity), payables and payment history, and operating cash flow."],
        ],
        [
          "Exercise 2 — Policy differences",
          ["Two retailers have the same sales and costs, but one uses FIFO and the other weighted average while prices are rising. Which reports a higher gross margin?"],
          ["FIFO — older, cheaper costs go to cost of sales first."],
        ],
      ),
    ),
    summary(
      ["Who analyses statements and what they want", "Cedar & Stone's key figures", "How the three statements connect", "Policies that affect comparisons", "Preparing data for analysis"],
      "Analysis starts with a question. Know who's asking, read all three statements together, and check the policies behind the numbers.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Trend and Common-Size Analysis",
      ["Trend analysis shows how figures change over time; common-size analysis shows each figure's share of the whole. Together they reveal where Cedar & Stone's performance is moving."],
      ["Perform horizontal (trend) analysis", "Perform vertical (common-size) analysis", "Compare against benchmarks", "Present trends clearly"],
    ),
    screen(
      "Horizontal analysis",
      p("Horizontal analysis compares each line with the previous year, in dollars and percent."),
      table(
        ["Line", "FY2025", "FY2026", "Change", "%"],
        [
          ["Revenue", "$440,000", "$500,000", "+$60,000", "+13.6%"],
          ["Cost of sales", "$255,000", "$300,000", "+$45,000", "+17.6%"],
          ["Gross profit", "$185,000", "$200,000", "+$15,000", "+8.1%"],
          ["Operating profit", "$77,000", "$80,000", "+$3,000", "+3.9%"],
        ],
        { numeric: [1, 2, 3, 4] },
      ),
      p("Cost of sales grew faster than revenue, so profit grew much more slowly than sales — the question to investigate."),
    ),
    screen(
      "Vertical (common-size) analysis",
      p("Vertical analysis shows each line as a percentage of a base: revenue for the income statement, total assets for the balance sheet."),
      table(
        ["Line", "FY2025", "FY2026"],
        [
          ["Revenue", "100.0%", "100.0%"],
          ["Cost of sales", "58.0%", "60.0%"],
          ["Gross profit", "42.0%", "40.0%"],
          ["Operating expenses", "24.5%", "24.0%"],
          ["Operating profit", "17.5%", "16.0%"],
        ],
        { numeric: [1, 2] },
      ),
      tip("Common-size makes size irrelevant", "Percentages let you compare a $500,000 business with a $50 million one."),
    ),
    screen(
      "Common-size balance sheet",
      table(
        ["Cedar & Stone at June 30, 2026", "Amount", "% of total assets"],
        [
          ["Current assets", "$150,000", "33.3%"],
          ["Property, plant and equipment", "$300,000", "66.7%"],
          ["Total liabilities", "$148,750", "33.1%"],
          ["Equity", "$301,250", "66.9%"],
        ],
        { numeric: [1, 2] },
      ),
      p("Two-thirds of Cedar & Stone's assets are store fittings and equipment, financed mainly by equity."),
    ),
    screen(
      "Benchmarks",
      bullets(
        "Compare with competitors' published accounts or industry benchmark reports.",
        "Make sure comparisons are like-for-like: same industry, similar size and accounting framework.",
        "Use benchmarks as context, not targets — industry averages hide a wide range.",
      ),
      example(
        [["Cedar & Stone gross margin", "40.0%"], ["Illustrative homewares retail benchmark", "45.0%"]],
        ["Gap to investigate", "5.0 points"],
      ),
      note("The benchmark is illustrative. Real benchmarks come from industry reports or competitors' filings."),
    ),
    screen(
      "Presenting trends clearly",
      bullets(
        "Use simple line or bar charts for key ratios over several years.",
        "Add a one-line takeaway to every chart.",
        "Highlight the few changes that matter, not every small movement.",
      ),
      p("Example takeaway: “Sales grew 13.6%, but gross margin slipped from 42% to 40% as costs rose faster than prices.”"),
    ),
    mistakes(
      ["Reporting dollar changes only", "Show percentages too."],
      ["Using the wrong base in vertical analysis", "Revenue for the P&L, total assets for the balance sheet."],
      ["Treating benchmarks as targets", "Use them as context."],
      ["Charts without a takeaway", "Say what the chart shows."],
    ),
    check(
      2,
      q("Revenue rose from $440,000 to $500,000. What's the % increase?", ["13.6%", "12.0%", "60%", "8.1%"], 0, "$60,000 ÷ $440,000."),
      q("Cost of sales grew 17.6% while revenue grew 13.6%. What happens to gross margin?", ["It falls", "It rises", "No change", "Can't tell"], 0, "Costs growing faster squeeze margin."),
      q("In vertical analysis of the income statement, what's the base?", ["Revenue", "Total assets", "Net profit", "Equity"], 0, "Each line is a % of revenue."),
      q("What's Cedar & Stone's FY2026 gross profit as a % of revenue?", ["40%", "42%", "60%", "16%"], 0, "$200,000 ÷ $500,000."),
      q("Why use common-size statements?", ["To compare businesses of different sizes", "To calculate tax", "To hide data", "To value shares"], 0, "Percentages remove size."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Horizontal",
          ["Operating expenses rose from $108,000 to $120,000. What's the % change?"],
          ["$12,000 ÷ $108,000 = 11.1%."],
        ],
        [
          "Exercise 2 — Vertical",
          ["Marketing was $10,000 in FY2026. What is it as a % of revenue?"],
          ["$10,000 ÷ $500,000 = 2.0%."],
        ],
      ),
    ),
    summary(
      ["Horizontal (trend) analysis", "Vertical (common-size) analysis of both statements", "Using benchmarks as context", "Presenting trends with clear takeaways"],
      "Trends show direction; common-size shows structure. Together they point to the questions worth asking.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Profitability and Return Ratios",
      ["Profitability ratios show how much Cedar & Stone keeps from each dollar of sales; return ratios show how well it uses its assets and shareholders' money."],
      ["Calculate gross, operating and net margins", "Calculate return on assets and return on equity", "Break down ROE with DuPont analysis", "Calculate earnings per share"],
    ),
    screen(
      "Margins",
      table(
        ["Ratio", "Formula", "FY2026", "FY2025"],
        [
          ["Gross margin", "Gross profit ÷ Revenue", "40.0%", "42.0%"],
          ["Operating margin", "Operating profit ÷ Revenue", "16.0%", "17.5%"],
          ["Net margin", "Net profit ÷ Revenue", "11.25%", "12.0%"],
        ],
      ),
      p("All three margins fell slightly — profit grew more slowly than sales."),
    ),
    screen(
      "Return on assets and return on equity",
      table(
        ["Ratio", "Formula", "Cedar & Stone"],
        [
          ["Return on assets (ROA)", "Net profit ÷ Total assets", "$56,250 ÷ $450,000 = 12.5%"],
          ["Return on equity (ROE)", "Net profit ÷ Equity", "$56,250 ÷ $301,250 = 18.7%"],
        ],
      ),
      note("Using average balances (opening plus closing, divided by two) gives a more accurate return when balances changed a lot during the year."),
    ),
    screen(
      "DuPont analysis",
      p("DuPont analysis breaks ROE into three drivers:"),
      table(
        ["Driver", "Formula", "Value"],
        [
          ["Net margin (profitability)", "Net profit ÷ Revenue", "11.25%"],
          ["Asset turnover (efficiency)", "Revenue ÷ Total assets", "1.11×"],
          ["Equity multiplier (leverage)", "Total assets ÷ Equity", "1.49×"],
          ["ROE", "11.25% × 1.11 × 1.49", "≈ 18.7%"],
        ],
      ),
      tip("Find the driver", "If ROE rises only because the equity multiplier rose, the business is relying more on borrowing — not necessarily performing better."),
    ),
    screen(
      "Earnings per share",
      p("For companies with shares, earnings per share (EPS) = net profit attributable to ordinary shareholders ÷ weighted average number of ordinary shares."),
      example([["Net profit", "$56,250"], ["Weighted average shares", "50,000"]], ["Basic EPS", "$1.125"]),
      bullets(
        "EPS rises with higher profit or fewer shares (e.g. buybacks).",
        "Issuing new shares dilutes EPS unless profit grows faster.",
        "Diluted EPS also counts options and convertible instruments.",
      ),
    ),
    mistakes(
      ["Comparing margins across industries", "A grocer's margins differ from a jeweller's."],
      ["Celebrating ROE without checking leverage", "Use DuPont."],
      ["Using year-end shares for EPS", "Use the weighted average."],
      ["Ignoring one-off items in profit", "Adjust for them when comparing."],
    ),
    check(
      3,
      q("What's Cedar & Stone's FY2026 operating margin?", ["16%", "40%", "11.25%", "12.5%"], 0, "$80,000 ÷ $500,000."),
      q("What's Cedar & Stone's ROA?", ["12.5%", "18.7%", "11.25%", "16%"], 0, "$56,250 ÷ $450,000."),
      q("What are DuPont's three drivers of ROE?", ["Margin, asset turnover and equity multiplier", "Revenue, costs and tax", "Cash, debt and equity", "EPS, dividends and price"], 0, "Profitability × efficiency × leverage."),
      q("A higher equity multiplier means:", ["More reliance on borrowing", "Higher margins", "More cash", "Lower assets"], 0, "It measures leverage."),
      q("Net profit $56,250 and 50,000 weighted shares. What's basic EPS?", ["$1.125", "$0.89", "$11.25", "$5.63"], 0, "$56,250 ÷ 50,000."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — FY2025 ROE",
          ["FY2025 net profit was $52,875 and equity was $240,000. What was ROE?"],
          ["$52,875 ÷ $240,000 = 22.0%."],
        ],
        [
          "Exercise 2 — Explain the change",
          ["ROE fell from 22.0% to 18.7%. Margin fell slightly and equity rose with new shares. What drove the fall?"],
          ["Lower net margin and less leverage — the $25,000 share issue increased equity, lowering the equity multiplier."],
        ],
      ),
    ),
    summary(
      ["Gross, operating and net margins", "Return on assets and return on equity", "DuPont analysis", "Earnings per share and dilution"],
      "Margins show how much each sale earns; returns show how well the business uses its resources. DuPont shows why.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Liquidity, Efficiency and Solvency",
      ["Can Cedar & Stone pay its bills, how fast does cash cycle through the business, and how safe is its debt? This module answers all three."],
      ["Calculate the current and quick ratios", "Calculate receivable, inventory and payable days", "Work out the cash conversion cycle", "Calculate debt-to-equity and interest cover", "Check loan covenants"],
    ),
    screen(
      "Liquidity ratios",
      table(
        ["Ratio", "Formula", "Cedar & Stone"],
        [
          ["Current ratio", "Current assets ÷ Current liabilities", "$150,000 ÷ $75,000 = 2.0×"],
          ["Quick ratio", "(Current assets − Inventory − Prepayments) ÷ Current liabilities", "$90,000 ÷ $75,000 = 1.2×"],
        ],
      ),
      p("A quick ratio above 1 means Cedar & Stone could meet its short-term debts without selling stock."),
    ),
    screen(
      "Efficiency ratios",
      table(
        ["Ratio", "Formula", "Cedar & Stone"],
        [
          ["Receivable days", "Receivables ÷ Revenue × 365", "$60,000 ÷ $500,000 × 365 ≈ 44 days"],
          ["Inventory days", "Inventory ÷ Cost of sales × 365", "$50,000 ÷ $300,000 × 365 ≈ 61 days"],
          ["Payable days", "Payables ÷ Cost of sales × 365", "$45,000 ÷ $300,000 × 365 ≈ 55 days"],
        ],
      ),
    ),
    screen(
      "The cash conversion cycle",
      example([["Receivable days", "44"], ["Add: inventory days", "61"], ["Less: payable days", "(55)"]], ["Cash conversion cycle", "50 days"]),
      p("Cash is tied up for about 50 days between paying suppliers and collecting from customers. Reducing inventory days is Cedar & Stone's biggest lever."),
    ),
    screen(
      "Solvency ratios",
      table(
        ["Ratio", "Formula", "Cedar & Stone"],
        [
          ["Debt-to-equity", "Borrowings ÷ Equity", "$70,000 ÷ $301,250 = 0.23×"],
          ["Interest cover", "Operating profit ÷ Finance costs", "$80,000 ÷ $7,000 = 11.4×"],
        ],
      ),
      p("Low debt and high interest cover — Cedar & Stone's debt looks very manageable."),
    ),
    screen(
      "Covenants lenders watch",
      terms(
        ["Covenants", "Conditions in loan agreements. Cedar & Stone's bank requires interest cover of at least 3× and debt-to-equity of no more than 1×."],
        ["Headroom", "How far a ratio is from breaching. Interest cover of 11.4× gives plenty of headroom over 3×."],
        ["Breach", "Breaking a covenant can let the lender demand early repayment — monitor covenants monthly."],
      ),
    ),
    mistakes(
      ["Treating a high current ratio as always good", "It can mean idle cash or slow-moving stock."],
      ["Using revenue for inventory days", "Use cost of sales."],
      ["Forgetting payables in the cash cycle", "Subtract payable days."],
      ["Checking covenants only at year end", "Monitor them monthly."],
    ),
    check(
      4,
      q("What's Cedar & Stone's current ratio?", ["2.0×", "1.2×", "0.5×", "3.0×"], 0, "$150,000 ÷ $75,000."),
      q("Why does the quick ratio exclude inventory?", ["It may take time to sell", "It's worthless", "It's a liability", "It's not on the balance sheet"], 0, "Quick assets turn to cash fast."),
      q("Receivable days 44, inventory days 61, payable days 55. What's the cash conversion cycle?", ["50 days", "160 days", "72 days", "6 days"], 0, "44 + 61 − 55."),
      q("What does interest cover measure?", ["How easily operating profit covers interest", "Total debt", "Cash in the bank", "Dividends"], 0, "Operating profit ÷ finance costs."),
      q("What can happen if a loan covenant is breached?", ["The lender may demand early repayment", "Tax is refunded", "Nothing", "Interest falls"], 0, "Breaches give lenders rights."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Shorten the cycle",
          ["If Cedar & Stone cut inventory to $40,000, what would inventory days and the cash conversion cycle become?"],
          ["Inventory days = $40,000 ÷ $300,000 × 365 ≈ 49. Cycle ≈ 44 + 49 − 55 = 38 days."],
        ],
        [
          "Exercise 2 — Covenant test",
          ["Operating profit falls to $18,000 and finance costs rise to $7,000. Is the 3× interest cover covenant met?"],
          ["$18,000 ÷ $7,000 = 2.6× — below 3×, so the covenant would be breached."],
        ],
      ),
    ),
    summary(
      ["Current and quick ratios", "Receivable, inventory and payable days", "The cash conversion cycle", "Debt-to-equity and interest cover", "Covenants and headroom"],
      "Liquidity is about paying bills soon; efficiency is about how fast cash cycles; solvency is about long-term safety.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Cash Flow and Earnings Quality",
      ["Profit can be shaped by estimates and timing; cash is harder to fake. This module tests the quality of earnings by comparing them with cash."],
      ["Compare operating cash flow with profit", "Calculate free cash flow", "Understand working capital swings", "Spot earnings quality red flags"],
    ),
    screen(
      "Operating cash flow vs. profit",
      p("Over time, operating cash flow should broadly track profit. Cedar & Stone's FY2026 operating cash flow ($56,250) equals its net profit — a healthy sign."),
      p("Compare a different business, Company X:"),
      table(
        ["Company X", "Net profit", "Operating cash flow"],
        [
          ["Year 1", "$40,000", "$44,000"],
          ["Year 2", "$48,000", "$41,000"],
          ["Year 3", "$56,000", "$32,000"],
        ],
        { numeric: [1, 2] },
      ),
      caution("Company X's pattern — rising profit, falling cash — is a warning sign. Look at its receivables, inventory and revenue timing."),
    ),
    screen(
      "Free cash flow",
      example([["Operating cash flow", "$56,250"], ["Less: capital expenditure", "($40,000)"]], ["Cedar & Stone's free cash flow", "$16,250"]),
      p("Free cash flow is what's left to repay debt, pay dividends or invest further. Cedar & Stone paid $20,000 of dividends — more than its free cash flow — and covered the gap partly with new shares."),
    ),
    screen(
      "Working capital swings",
      bullets(
        "Growing businesses often absorb cash in receivables and inventory — Cedar & Stone's grew $20,000 combined.",
        "Seasonal businesses swing between building stock and collecting cash.",
        "Delaying supplier payments boosts cash temporarily but can't continue forever.",
      ),
      tip("Look at the direction", "One year's swing isn't alarming. A steady build-up of receivables and inventory year after year is."),
    ),
    screen(
      "Earnings quality red flags",
      table(
        ["Red flag", "Why it matters"],
        [
          ["Receivables growing faster than revenue", "Sales may be booked early or not collectable"],
          ["Large revenue near period end", "Possible pulling forward of sales"],
          ["Repeated “one-off” items", "Normal costs presented as unusual"],
          ["Capitalising costs usually expensed", "Inflates profit and assets"],
          ["Big releases of provisions or accruals", "Profit boosted by reversing earlier estimates"],
        ],
      ),
      p("Cedar & Stone's receivables grew 25% ($48,000 → $60,000) while revenue grew 13.6% — worth asking about collections."),
    ),
    mistakes(
      ["Trusting profit without checking cash", "Compare the two every year."],
      ["Treating all one-offs as one-off", "If they recur, they're not."],
      ["Ignoring capex in cash analysis", "Free cash flow is what's really available."],
      ["Reading one year's working capital as a trend", "Look over several years."],
    ),
    check(
      5,
      q("Profit rises each year while operating cash flow falls. What does it suggest?", ["Possible earnings quality issues", "Strong cash", "Lower tax", "Nothing"], 0, "Profit not turning into cash."),
      q("Operating cash flow $56,250, capex $40,000. What's free cash flow?", ["$16,250", "$96,250", "$40,000", "$56,250"], 0, "$56,250 − $40,000."),
      q("Receivables grow much faster than revenue. What might it mean?", ["Sales booked early or poor collection", "Better margins", "Lower debt", "More cash"], 0, "A classic red flag."),
      q("Which inflates profit?", ["Capitalising costs normally expensed", "Paying suppliers", "Recording depreciation", "Collecting receivables"], 0, "Costs move to the balance sheet."),
      q("Why are repeated “one-off” items suspicious?", ["They may be normal costs labelled as unusual", "They're illegal", "They increase cash", "They're tax-free"], 0, "If they recur, they're not one-off."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Free cash flow",
          ["Operating cash flow $90,000; capex $35,000; dividends $30,000. What's free cash flow, and is the dividend covered?"],
          ["Free cash flow = $55,000. Yes — the $30,000 dividend is covered with $25,000 to spare."],
        ],
        [
          "Exercise 2 — Spot the flag",
          ["Revenue +5%, receivables +30%, and 40% of the year's sales were booked in the last month. What do you ask?"],
          ["Ask about revenue timing and collectability: were sales pulled forward, are customers paying, and are any sales on unusual terms?"],
        ],
      ),
    ),
    summary(
      ["Comparing operating cash flow with profit", "Free cash flow", "Working capital swings", "Earnings quality red flags"],
      "Profit is an opinion; cash is a fact. When they drift apart, find out why.",
    ),
  ],
  5: [
    overview(
      "Module 6 — From Analysis to Decisions",
      ["Analysis is only useful if it leads to a decision. This module turns Cedar & Stone's ratios into a short report, applies them to real decisions and covers the limits of ratio analysis."],
      ["Build an analysis workbook", "Write a short financial health report", "Use analysis for credit, investment and budgeting decisions", "Recognise the limitations of ratio analysis", "Follow an analysis checklist"],
    ),
    screen(
      "Building an analysis workbook",
      steps(
        ["Data tab", "Three years of statements in a consistent layout."],
        ["Ratios tab", "Formulas linked to the data — never typed-in numbers."],
        ["Trends tab", "Charts for the key ratios."],
        ["Notes tab", "Sources, adjustments and assumptions."],
      ),
      tip("Build in checks", "Add checks that each balance sheet balances and that cash flow agrees to the change in cash."),
    ),
    screen(
      "A financial health report for Cedar & Stone",
      table(
        ["Section", "Finding"],
        [
          ["Headline", "Profitable and conservatively financed, but margins are slipping and stock is slow."],
          ["Profitability", "Revenue +13.6%; gross margin down from 42% to 40% as costs rose faster."],
          ["Liquidity", "Current ratio 2.0×, quick ratio 1.2× — comfortable."],
          ["Efficiency", "Cash conversion cycle 50 days; inventory days (61) are the biggest part."],
          ["Solvency", "Debt-to-equity 0.23×, interest cover 11.4× — low risk."],
          ["Cash", "Operating cash equals profit; free cash flow $16,250 didn't fully cover dividends."],
          ["Recommendations", "Review supplier pricing; clear slow-moving stock; align dividends with free cash flow."],
        ],
      ),
    ),
    screen(
      "Credit, investment and budgeting decisions",
      table(
        ["Decision", "Key ratios", "Cedar & Stone"],
        [
          ["Bank: lend $50,000 more?", "Interest cover, debt-to-equity, cash flow", "Likely yes — strong cover and low debt"],
          ["Investor: buy shares?", "ROE, margins, growth, EPS", "Good growth, but falling margins need a plan"],
          ["Managers: next year's budget", "Margins, inventory days, costs", "Target 42% margin and 50 inventory days"],
        ],
      ),
    ),
    screen(
      "Limitations of ratio analysis",
      bullets(
        "Ratios use historical, summarised data — the future may differ.",
        "Year-end balances may not be typical (e.g. stock built up before a busy season).",
        "Different accounting policies make comparisons tricky.",
        "Ratios raise questions; they rarely answer them alone.",
        "Non-financial factors — customers, staff, competition — matter too.",
      ),
      note("Combine ratios with conversations with management and non-financial information."),
    ),
    screen(
      "Analysis checklist",
      bullets(
        "Use at least three years and consistent definitions.",
        "Read the notes for policies and one-off items.",
        "Compare with relevant benchmarks.",
        "Check profit against cash flow.",
        "Explain the drivers, not just the numbers.",
        "End with clear recommendations.",
      ),
    ),
    mistakes(
      ["Typing numbers into ratio formulas", "Link them to the data."],
      ["Reports full of ratios but no conclusion", "Lead with a headline."],
      ["Ignoring limitations", "State assumptions and caveats."],
      ["Recommendations without owners", "Say who does what."],
    ),
    check(
      6,
      q("In an analysis workbook, ratios should be:", ["Formulas linked to the data", "Typed in by hand", "Copied from the internet", "Rounded guesses"], 0, "Linked formulas reduce errors."),
      q("What should a financial health report start with?", ["A headline conclusion", "Raw data", "Every ratio", "The appendix"], 0, "Lead with the conclusion."),
      q("Which is a limitation of ratio analysis?", ["It uses historical data shaped by accounting policies", "It's too precise", "It uses future data", "It has no limitations"], 0, "History and policies limit ratios."),
      q("What's the biggest part of Cedar & Stone's cash conversion cycle?", ["Inventory days", "Receivable days", "Payable days", "Interest cover"], 0, "61 days."),
      q("Which belongs on the analysis checklist?", ["Check profit against cash flow", "Ignore notes", "Use one year only", "Skip benchmarks"], 0, "Profit should be tested against cash."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Headline",
          ["Write a one-sentence headline for a business with ROE 25%, debt-to-equity 2.5×, interest cover 1.8× and falling cash."],
          ["“High returns are driven by heavy borrowing; with thin interest cover and falling cash, the business is financially fragile.”"],
        ],
        [
          "Exercise 2 — Budget target",
          ["Cedar & Stone targets 50 inventory days next year with cost of sales of $330,000. What closing inventory does that imply?"],
          ["$330,000 × 50 ÷ 365 ≈ $45,200."],
        ],
      ),
    ),
    summary(
      ["Building a linked analysis workbook", "Writing a financial health report", "Applying analysis to credit, investment and budgeting decisions", "Limitations of ratio analysis", "An analysis checklist"],
      "Good analysis ends in a decision: a clear headline, the evidence behind it, and practical recommendations.",
    ),
  ],
}

export default lessons
