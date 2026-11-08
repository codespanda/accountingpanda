import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Financial Statement Analysis — lesson screens by module index (0 = Module 1).
// All examples use the same company, Panda Supplies, for 2026.
const lessons: CourseLessons = {
  0: [
    screen(
      "Who analyses statements",
      table(
        ["Analyst", "Main question"],
        [
          ["Owners and investors", "Is the business earning a good return on the money invested?"],
          ["Lenders", "Can it pay interest and repay loans?"],
          ["Managers", "Where can performance improve?"],
          ["Suppliers", "Is it safe to offer credit?"],
        ],
      ),
      p("Different users focus on different ratios — but all start by reading the statements together."),
    ),
    screen(
      "Panda Supplies — the data we'll use",
      table(
        ["Income statement 2026", "Amount"],
        [
          ["Revenue", "$500,000"],
          ["Cost of sales", "$300,000"],
          ["Gross profit", "$200,000"],
          ["Operating profit", "$80,000"],
          ["Interest expense", "$7,000"],
          ["Net profit", "$56,250"],
        ],
        { numeric: [1] },
      ),
      table(
        ["Balance sheet at year-end", "Amount"],
        [
          ["Cash", "$30,000"],
          ["Receivables", "$60,000"],
          ["Inventory", "$50,000"],
          ["Prepayments", "$10,000"],
          ["Total current assets", "$150,000"],
          ["Total assets", "$450,000"],
          ["Payables", "$45,000"],
          ["Total current liabilities", "$75,000"],
          ["Borrowings (total)", "$70,000"],
          ["Equity", "$301,250"],
        ],
        { numeric: [1] },
      ),
    ),
    screen(
      "Connections, policies and preparing data",
      bullets(
        "Profit from the income statement flows into equity on the balance sheet.",
        "The cash flow statement explains the change in the balance sheet's cash.",
        "Notes explain accounting policies — depreciation methods, inventory formulas, revenue timing — that affect comparisons.",
      ),
      steps(
        ["Collect at least two or three years", "One year alone shows no trend."],
        ["Use consistent definitions", "E.g. always include or exclude one-off items."],
        ["Adjust for unusual items", "Note one-off gains, losses and policy changes."],
        ["Use averages where sensible", "For return and days ratios, averages of opening and closing balances are more accurate. This course uses year-end figures for simplicity."],
      ),
    ),
    check(
      1,
      q("Which user mainly asks whether loans can be repaid?", ["Managers", "Lenders", "Customers", "Employees"], 1, "Lenders focus on repayment."),
      q("What links the income statement and balance sheet?", ["Profit flowing into equity", "Revenue", "Cash only", "Nothing"], 0, "Retained earnings carry the profit."),
      q("Why read the notes before comparing companies?", ["Accounting policies affect the numbers", "They're shorter", "They contain the ratios", "They're required reading for tax"], 0, "Different policies change comparisons."),
      q("Why collect several years of data?", ["To see trends", "To fill pages", "For tax", "It's not useful"], 0, "One year shows no trend."),
      q("What is Panda Supplies' gross profit?", ["$500,000", "$300,000", "$200,000", "$80,000"], 2, "$500,000 − $300,000."),
    ),
  ],
  1: [
    screen(
      "Horizontal analysis",
      p("Horizontal analysis compares each line with the previous year, in dollars and percent."),
      table(
        ["Line", "2025", "2026", "Change", "%"],
        [
          ["Revenue", "$440,000", "$500,000", "+$60,000", "+13.6%"],
          ["Cost of sales", "$255,000", "$300,000", "+$45,000", "+17.6%"],
          ["Gross profit", "$185,000", "$200,000", "+$15,000", "+8.1%"],
        ],
        { numeric: [1, 2, 3, 4] },
      ),
      p("Cost of sales grew faster than revenue — so margins are being squeezed. That's the question to investigate."),
    ),
    screen(
      "Vertical (common-size) analysis",
      p("Vertical analysis shows each line as a percentage of a base: revenue for the income statement, total assets for the balance sheet."),
      table(
        ["Line", "2025", "2026"],
        [
          ["Revenue", "100.0%", "100.0%"],
          ["Cost of sales", "58.0%", "60.0%"],
          ["Gross profit", "42.0%", "40.0%"],
          ["Operating profit", "17.5%", "16.0%"],
        ],
        { numeric: [1, 2] },
      ),
      tip("Common-size makes size irrelevant", "Percentages let you compare a $500,000 business with a $50 million one."),
    ),
    screen(
      "Benchmarks and presenting trends",
      bullets(
        "Compare with competitors' published accounts or industry benchmark reports.",
        "Make sure comparisons are like-for-like: same industry, similar size and accounting framework.",
        "Show trends with simple line or bar charts and a one-line takeaway.",
      ),
      note("Industry averages hide a wide range. Use them as context, not as targets."),
    ),
    check(
      2,
      q("Revenue rose from $440,000 to $500,000. What's the % increase?", ["12.0%", "13.6%", "60%", "8.1%"], 1, "$60,000 ÷ $440,000 = 13.6%."),
      q("Cost of sales grew 17.6% while revenue grew 13.6%. What happens to gross margin?", ["It rises", "It falls", "No change", "Can't tell"], 1, "Costs growing faster squeeze the margin."),
      q("In vertical analysis of the income statement, what is the base?", ["Total assets", "Revenue", "Net profit", "Equity"], 1, "Each line is a % of revenue."),
      q("What's gross profit as a % of revenue in 2026?", ["42%", "40%", "60%", "16%"], 1, "$200,000 ÷ $500,000."),
      q("Why use common-size statements?", ["To compare businesses of different sizes", "To calculate tax", "To hide data", "To value shares"], 0, "Percentages remove the effect of size."),
    ),
  ],
  2: [
    screen(
      "Margins",
      table(
        ["Ratio", "Formula", "Panda Supplies"],
        [
          ["Gross margin", "Gross profit ÷ Revenue", "40.0%"],
          ["Operating margin", "Operating profit ÷ Revenue", "16.0%"],
          ["Net margin", "Net profit ÷ Revenue", "11.25%"],
        ],
      ),
    ),
    screen(
      "Return on assets and equity — and DuPont",
      table(
        ["Ratio", "Formula", "Panda Supplies"],
        [
          ["Return on assets (ROA)", "Net profit ÷ Total assets", "$56,250 ÷ $450,000 = 12.5%"],
          ["Return on equity (ROE)", "Net profit ÷ Equity", "$56,250 ÷ $301,250 = 18.7%"],
        ],
      ),
      h("DuPont analysis"),
      table(
        ["Driver", "Formula", "Value"],
        [
          ["Net margin", "Net profit ÷ Revenue", "11.25%"],
          ["Asset turnover", "Revenue ÷ Total assets", "1.11×"],
          ["Equity multiplier", "Total assets ÷ Equity", "1.49×"],
          ["ROE", "11.25% × 1.11 × 1.49", "≈ 18.7%"],
        ],
      ),
      tip("Find the driver", "DuPont shows whether ROE comes from profitability, efficient use of assets, or borrowing (leverage)."),
    ),
    screen(
      "Earnings per share",
      p("For companies with shares, EPS = net profit attributable to ordinary shareholders ÷ weighted average number of ordinary shares."),
      example([["Net profit", "$56,250"], ["Weighted average shares", "50,000"]], ["Basic EPS", "$1.125"]),
      bullets(
        "EPS rises with higher profit or fewer shares (e.g. buybacks).",
        "Issuing new shares dilutes EPS unless profit grows faster.",
        "Diluted EPS also counts options and convertible instruments.",
      ),
    ),
    check(
      3,
      q("What's Panda Supplies' operating margin?", ["40%", "16%", "11.25%", "12.5%"], 1, "$80,000 ÷ $500,000."),
      q("What's ROA?", ["12.5%", "18.7%", "11.25%", "16%"], 0, "$56,250 ÷ $450,000."),
      q("What are DuPont's three drivers of ROE?", ["Margin, asset turnover and equity multiplier", "Revenue, costs and tax", "Cash, debt and equity", "EPS, dividends and price"], 0, "Profitability × efficiency × leverage."),
      q("A higher equity multiplier means:", ["More reliance on borrowing", "Higher margins", "More cash", "Lower assets"], 0, "It measures leverage."),
      q("Net profit $56,250 and 50,000 weighted shares. What's basic EPS?", ["$1.125", "$0.89", "$11.25", "$5.63"], 0, "$56,250 ÷ 50,000."),
    ),
  ],
  3: [
    screen(
      "Liquidity",
      table(
        ["Ratio", "Formula", "Panda Supplies"],
        [
          ["Current ratio", "Current assets ÷ Current liabilities", "$150,000 ÷ $75,000 = 2.0×"],
          ["Quick ratio", "(Current assets − Inventory − Prepayments) ÷ Current liabilities", "$90,000 ÷ $75,000 = 1.2×"],
        ],
      ),
      p("A quick ratio above 1 means the business could meet short-term debts without selling stock."),
    ),
    screen(
      "Efficiency and the cash conversion cycle",
      table(
        ["Ratio", "Formula", "Panda Supplies"],
        [
          ["Receivable days", "Receivables ÷ Revenue × 365", "≈ 44 days"],
          ["Inventory days", "Inventory ÷ Cost of sales × 365", "≈ 61 days"],
          ["Payable days", "Payables ÷ Cost of sales × 365", "≈ 55 days"],
        ],
      ),
      example([["Receivable days", "44"], ["Add: inventory days", "61"], ["Less: payable days", "(55)"]], ["Cash conversion cycle", "50 days"]),
      p("Cash is tied up for about 50 days between paying suppliers and collecting from customers."),
    ),
    screen(
      "Solvency and covenants",
      table(
        ["Ratio", "Formula", "Panda Supplies"],
        [
          ["Debt-to-equity", "Borrowings ÷ Equity", "$70,000 ÷ $301,250 = 0.23×"],
          ["Interest cover", "Operating profit ÷ Interest expense", "$80,000 ÷ $7,000 = 11.4×"],
        ],
      ),
      terms(
        ["Covenants", "Conditions in loan agreements, such as a minimum interest cover of 3× or a maximum debt-to-equity of 1×."],
        ["Breach", "Breaking a covenant can let the lender demand early repayment — monitor them monthly."],
      ),
    ),
    check(
      4,
      q("What's Panda Supplies' current ratio?", ["1.2×", "2.0×", "0.5×", "3.0×"], 1, "$150,000 ÷ $75,000."),
      q("Why does the quick ratio exclude inventory?", ["It may take time to sell", "It's worthless", "It's a liability", "It's not on the balance sheet"], 0, "Quick assets turn to cash fast."),
      q("Receivable days 44, inventory days 61, payable days 55. What's the cash conversion cycle?", ["160 days", "50 days", "72 days", "6 days"], 1, "44 + 61 − 55."),
      q("What does interest cover measure?", ["How easily operating profit covers interest", "Total debt", "Cash in the bank", "Dividends"], 0, "Operating profit ÷ interest."),
      q("What can happen if a loan covenant is breached?", ["The lender may demand early repayment", "Tax is refunded", "Nothing", "Interest falls"], 0, "Breaches give lenders rights."),
    ),
  ],
  4: [
    screen(
      "Operating cash flow vs. profit",
      p("Over time, operating cash flow should broadly track profit. If profit keeps rising but operating cash flow doesn't, ask why. Compare a different business, Company X:"),
      table(
        ["Company X", "Net profit", "Operating cash flow"],
        [
          ["2024", "$40,000", "$44,000"],
          ["2025", "$48,000", "$41,000"],
          ["2026", "$56,250", "$32,000"],
        ],
        { numeric: [1, 2] },
      ),
      caution("Company X's pattern — rising profit, falling cash — is a warning sign. Look at its receivables, inventory and revenue timing."),
    ),
    screen(
      "Free cash flow and working capital swings",
      p("Back to Panda Supplies:"),
      example([["Operating cash flow", "$56,250"], ["Less: capital expenditure", "($20,000)"]], ["Free cash flow", "$36,250"]),
      p("Free cash flow is the cash available to repay debt, pay dividends or invest further."),
      bullets(
        "Growing businesses often absorb cash in receivables and inventory.",
        "Seasonal businesses swing between building stock and collecting cash.",
        "Delaying supplier payments boosts cash temporarily but can't continue forever.",
      ),
    ),
    screen(
      "Earnings quality red flags",
      table(
        ["Red flag", "Why it matters"],
        [
          ["Receivables growing faster than revenue", "Sales may be booked early or not collectable"],
          ["Large revenue near period-end", "Possible pulling forward of sales"],
          ["Repeated “one-off” items", "Normal costs presented as unusual"],
          ["Capitalising costs that are usually expensed", "Inflates profit and assets"],
          ["Big accrual or provision releases", "Profit boosted by reversing earlier estimates"],
        ],
      ),
      tip("Ask for the cash", "When something looks too good, check whether the cash has actually arrived."),
    ),
    check(
      5,
      q("Profit rises each year while operating cash flow falls. What does it suggest?", ["Possible earnings quality issues", "Strong cash", "Lower tax", "Nothing"], 0, "Profit not turning into cash needs investigating."),
      q("Operating cash flow $56,250, capex $20,000. What's free cash flow?", ["$76,250", "$36,250", "$20,000", "$56,250"], 1, "$56,250 − $20,000."),
      q("Receivables grow much faster than revenue. What might it mean?", ["Sales booked early or poor collection", "Better margins", "Lower debt", "More cash"], 0, "It's a classic red flag."),
      q("Which inflates profit?", ["Capitalising costs normally expensed", "Paying suppliers", "Recording depreciation", "Collecting receivables"], 0, "Costs move to the balance sheet instead of the P&L."),
      q("Why are repeated “one-off” items suspicious?", ["They may be normal costs labelled as unusual", "They're illegal", "They increase cash", "They're always tax-free"], 0, "If they recur, they're not one-off."),
    ),
  ],
  5: [
    screen(
      "Building an analysis workbook",
      steps(
        ["Data tab", "Three years of income statements, balance sheets and cash flows, in a consistent layout."],
        ["Ratios tab", "Formulas linked to the data, never typed-in numbers."],
        ["Trends tab", "Charts for the key ratios."],
        ["Notes tab", "Sources, adjustments and assumptions."],
      ),
      tip("Check it ties", "Add checks that each balance sheet balances and that cash flow agrees to the cash movement."),
    ),
    screen(
      "Writing a short financial health report",
      table(
        ["Section", "Panda Supplies example"],
        [
          ["Headline", "Profitable and conservatively financed, but margins are slipping."],
          ["Profitability", "Revenue +13.6%; gross margin down from 42% to 40% as costs rose faster."],
          ["Liquidity", "Current ratio 2.0×, quick ratio 1.2× — comfortable."],
          ["Efficiency", "Cash conversion cycle of 50 days; inventory days (61) are the biggest component."],
          ["Solvency", "Debt-to-equity 0.23×, interest cover 11.4× — low risk."],
          ["Recommendations", "Review supplier pricing; reduce slow-moving stock."],
        ],
      ),
    ),
    screen(
      "Decisions, limitations and checklist",
      compare(
        ["Decisions analysis supports", "Lending and credit limits, investing, budgeting, pricing and cost control.", ["Lender: approve loan", "Manager: target inventory days"]],
        ["Limitations", "Ratios use historical, summarised data shaped by accounting policies and estimates.", ["Seasonality at year-end", "Different policies between companies"]],
      ),
      h("Analysis checklist"),
      bullets(
        "Use at least three years and consistent definitions.",
        "Read the notes for policies and one-off items.",
        "Compare with relevant benchmarks.",
        "Check profit against cash flow.",
        "Explain the drivers, not just the numbers.",
      ),
      note("Ratios raise questions — they rarely answer them alone. Combine them with conversations and non-financial information."),
    ),
    check(
      6,
      q("In an analysis workbook, ratios should be:", ["Typed in by hand", "Formulas linked to the data", "Copied from the internet", "Rounded guesses"], 1, "Linked formulas reduce errors."),
      q("What should a financial health report start with?", ["A headline conclusion", "Raw data", "Every ratio", "The appendix"], 0, "Lead with the conclusion."),
      q("Which is a limitation of ratio analysis?", ["It uses historical data shaped by accounting policies", "It's too precise", "It uses future data", "It has no limitations"], 0, "History and policies limit ratios."),
      q("What's the biggest part of Panda Supplies' cash conversion cycle?", ["Receivable days", "Inventory days", "Payable days", "Interest cover"], 1, "Inventory days are 61."),
      q("Which item belongs on the analysis checklist?", ["Check profit against cash flow", "Ignore notes", "Use one year only", "Skip benchmarks"], 0, "Profit should be tested against cash."),
    ),
  ],
}

export default lessons
