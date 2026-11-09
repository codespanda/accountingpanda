import { fq } from "@/lib/finalTest"

// Final test bank for Financial Statement Analysis — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("Which analyst focuses mainly on margins, costs and efficiency?", "Managers", ["Lenders", "Suppliers", "Tax authorities"], "They look for where performance can improve."),
  fq("What explains the difference between Cedar & Stone's operating cash flow and profit?", "Working capital movements and non-cash items", ["Share capital", "The tax rate only", "The number of stores"], "Receivables, inventory, payables and depreciation."),
  fq("When prices are rising, which inventory formula gives a higher gross margin?", "FIFO", ["Weighted average", "LIFO", "Specific identification"], "Older, cheaper costs are expensed first."),
  fq("Why might average balances be better than year-end balances for return ratios?", "Balances may have changed a lot during the year", ["They're always larger", "They remove tax", "Auditors require them"], "Averages smooth timing effects."),
  fq("Which policy difference changes operating profit between two similar businesses?", "Different depreciation methods or useful lives", ["Different bank accounts", "Different office colours", "Different invoice numbering"], "Depreciation affects operating expenses."),
  fq("What was Cedar & Stone's cash at June 30, 2026?", "$30,000", ["$18,750", "$56,250", "$150,000"], "Up from $18,750."),

  // Module 2
  fq("By how much did Cedar & Stone's operating profit grow in FY2026?", "3.9%", ["13.6%", "8.1%", "17.6%"], "$3,000 ÷ $77,000."),
  fq("What were Cedar & Stone's operating expenses as a % of revenue in FY2026?", "24.0%", ["24.5%", "16.0%", "40.0%"], "$120,000 ÷ $500,000."),
  fq("What share of Cedar & Stone's total assets was property, plant and equipment?", "66.7%", ["33.3%", "50.0%", "75.0%"], "$300,000 ÷ $450,000."),
  fq("What was the gap between Cedar & Stone's gross margin and the illustrative benchmark?", "5.0 points", ["2.0 points", "10.0 points", "None"], "40.0% vs. 45.0%."),
  fq("What's the base for vertical analysis of a balance sheet?", "Total assets", ["Revenue", "Net profit", "Cash"], "Each line as a % of total assets."),
  fq("What should accompany every trend chart?", "A one-line takeaway", ["A full ledger", "A tax computation", "Nothing"], "Say what the chart shows."),

  // Module 3
  fq("What was Cedar & Stone's FY2025 net margin?", "12.0%", ["11.25%", "17.5%", "42.0%"], "$52,875 ÷ $440,000."),
  fq("What was Cedar & Stone's asset turnover?", "1.11×", ["1.49×", "2.0×", "0.67×"], "$500,000 ÷ $450,000."),
  fq("What was Cedar & Stone's equity multiplier?", "1.49×", ["1.11×", "0.23×", "2.0×"], "$450,000 ÷ $301,250."),
  fq("What was Cedar & Stone's FY2025 ROE, with equity of $240,000?", "22.0%", ["18.7%", "12.5%", "25.0%"], "$52,875 ÷ $240,000."),
  fq("Which instruments does diluted EPS also count?", "Options and convertible instruments", ["Bank loans", "Trade payables", "Inventory"], "They could become shares."),
  fq("What effect does issuing new shares have on EPS?", "It dilutes EPS unless profit grows faster", ["It always raises EPS", "No effect", "It doubles EPS"], "More shares share the same profit."),

  // Module 4
  fq("What was Cedar & Stone's quick ratio?", "1.2×", ["2.0×", "0.8×", "1.5×"], "$90,000 ÷ $75,000."),
  fq("Which figure is used to calculate inventory days?", "Cost of sales", ["Revenue", "Net profit", "Total assets"], "Inventory ÷ cost of sales × 365."),
  fq("What was Cedar & Stone's debt-to-equity ratio?", "0.23×", ["1.49×", "2.0×", "0.5×"], "$70,000 ÷ $301,250."),
  fq("What interest cover does Cedar & Stone's bank require?", "At least 3×", ["At least 11×", "At most 1×", "No requirement"], "It also caps debt-to-equity at 1×."),
  fq("If inventory fell to $40,000, what would Cedar & Stone's cash conversion cycle become, roughly?", "38 days", ["50 days", "61 days", "25 days"], "44 + 49 − 55."),
  fq("Why isn't a very high current ratio always good?", "It can mean idle cash or slow-moving stock", ["It means bankruptcy", "It shows too much debt", "It's illegal"], "Too much tied up in current assets."),

  // Module 5
  fq("What was Cedar & Stone's free cash flow?", "$16,250", ["$56,250", "$40,000", "$36,250"], "$56,250 − $40,000."),
  fq("Did Cedar & Stone's free cash flow cover its $20,000 dividend?", "No — it fell short by $3,750", ["Yes, with $20,000 to spare", "Yes, exactly", "There was no dividend"], "The gap was partly funded by new shares."),
  fq("By how much did Cedar & Stone's receivables grow in FY2026?", "25%", ["13.6%", "8%", "50%"], "$48,000 → $60,000."),
  fq("In Company X's example, what happened to operating cash flow from year 1 to year 3?", "It fell from $44,000 to $32,000", ["It rose to $56,000", "It stayed the same", "It doubled"], "While profit rose."),
  fq("Which red flag can boost profit by reversing earlier estimates?", "Big releases of provisions or accruals", ["Paying suppliers early", "Collecting receivables", "Issuing shares"], "Profit rises without new activity."),
  fq("Operating cash flow $90,000, capex $35,000, dividends $30,000. How much free cash flow is left after the dividend?", "$25,000", ["$55,000", "$60,000", "$5,000"], "$55,000 − $30,000."),

  // Module 6
  fq("What should the Notes tab of an analysis workbook record?", "Sources, adjustments and assumptions", ["Staff names", "Bank passwords", "Marketing plans"], "So others can follow the analysis."),
  fq("What did the report recommend about dividends?", "Align them with free cash flow", ["Double them", "Stop all dividends forever", "Pay them from loans"], "FCF of $16,250 didn't cover $20,000."),
  fq("What inventory-days target was suggested for Cedar & Stone's budget?", "50 days", ["61 days", "30 days", "90 days"], "Down from 61."),
  fq("Would a bank likely lend Cedar & Stone another $50,000?", "Likely yes — strong cover and low debt", ["No — it's insolvent", "No — it has no assets", "Only with no covenants"], "Interest cover 11.4×, debt-to-equity 0.23×."),
  fq("Why might year-end balances be untypical?", "Stock may be built up before a busy season", ["Year ends are random", "Balances never change", "Auditors adjust them"], "Seasonality affects snapshots."),
  fq("What should recommendations in an analysis report include?", "Who does what", ["Only ratios", "No actions", "Tax returns"], "Clear owners make them actionable."),
]
