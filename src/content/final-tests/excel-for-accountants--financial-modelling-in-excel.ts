import { fq } from "@/lib/finalTest"

// Final test bank for Financial Modelling in Excel — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("Why does Brightwater need a model?", "To show its bank how the business will perform after buying a $100,000 roaster", ["To file its tax return", "To pay staff", "To count inventory"], "Raising debt is a common use."),
  fq("What was Brightwater's opening equity at 31 December 2026?", "$270,000", ["$530,000", "$100,000", "$170,000"], "Share capital $100,000 + retained earnings $170,000."),
  fq("Which font colour usually marks a link to another sheet?", "Green", ["Blue", "Black", "Purple"], "Blue is inputs, black is formulas."),
  fq("Which formula creates each year from the one before?", "=C4+1", ["=YEAR(TODAY())", "=C4*1", "=SUM(C4)"], "A consistent timeline."),
  fq("What's the real value of a model's assumptions sheet?", "It makes assumptions visible and easy to challenge", ["It hides the numbers", "It speeds up Excel", "It replaces the statements"], "A model is only as good as its assumptions."),
  fq("Instead of nesting IFs more than two deep, what should you use?", "Flags or lookups", ["More nested IFs", "Hard-coded values", "Macros only"], "Keep formulas simple."),

  // Module 2
  fq("What volume did Brightwater sell in 2026?", "40,000 kg", ["44,000 kg", "36,000 kg", "32,000 kg"], "At $25 a kg."),
  fq("What's Brightwater's 2027 price per kg?", "$26.00", ["$25.00", "$27.50", "$24.00"], "$25 × 1.04."),
  fq("What's Brightwater's 2027 gross profit?", "$457,600", ["$686,400", "$1,144,000", "$177,600"], "40% of $1,144,000."),
  fq("What are Brightwater's 2027 operating costs?", "$280,000", ["$200,000", "$80,000", "$344,000"], "Staff $200,000 + overheads $80,000."),
  fq("By how much did Brightwater's volume grow from 2024 to 2025?", "12.5%", ["10%", "11.1%", "4%"], "32,000 to 36,000 kg."),
  fq("Why use a headcount schedule?", "Staff costs step up when new people join", ["Salaries always grow smoothly", "It's required by law", "To calculate tax"], "Roles, start dates and salaries."),

  // Module 3
  fq("What's the depreciation on Brightwater's new roaster?", "$20,000 a year", ["$30,000 a year", "$10,000 a year", "$50,000 a year"], "$100,000 over 5 years."),
  fq("What's Brightwater's 2027 closing net book value of PP&E?", "$350,000", ["$400,000", "$300,000", "$250,000"], "$300,000 + $100,000 − $50,000."),
  fq("By how much did net working capital increase in 2027?", "$13,430", ["$14,027", "$103,430", "$90,000"], "From $90,000 to $103,430."),
  fq("What's Brightwater's 2027 interest expense?", "$14,000", ["$11,200", "$40,000", "$7,000"], "7% of the $200,000 opening balance."),
  fq("What dividend policy does Brightwater's model use?", "30% of net profit", ["All profit", "No dividends", "$100,000 a year"], "$25,560 in 2027."),
  fq("What's Brightwater's closing retained earnings for 2027?", "$229,640", ["$255,200", "$170,000", "$85,200"], "$170,000 + $85,200 − $25,560."),

  // Module 4
  fq("What's Brightwater's 2027 net profit?", "$85,200", ["$113,600", "$127,600", "$177,600"], "After 25% tax."),
  fq("What's Brightwater's 2027 cash from operating activities?", "$121,770", ["$85,200", "$135,200", "$36,210"], "Profit, depreciation and working capital."),
  fq("What's Brightwater's closing cash at 31 December 2027?", "$36,210", ["$80,000", "$43,790", "$121,770"], "$80,000 − $43,790."),
  fq("What are Brightwater's total assets at 31 December 2027?", "$564,862", ["$530,000", "$350,000", "$600,000"], "Equal to liabilities plus equity."),
  fq("A balance sheet difference that's the same in every year usually means:", "An opening balance is wrong", ["A tax error in one year", "Too many scenarios", "A chart problem"], "It carries forward."),
  fq("Why should you never plug a balance sheet difference?", "It hides the error instead of fixing it", ["Excel won't allow it", "It changes the font", "It slows the model"], "Find the cause."),

  // Module 5
  fq("What's Brightwater's 2027 break-even volume?", "About 33,077 kg", ["44,000 kg", "40,000 kg", "26,000 kg"], "$344,000 ÷ $10.40."),
  fq("What's Brightwater's contribution per kg in 2027?", "$10.40", ["$26.00", "$15.60", "$7.80"], "40% of $26."),
  fq("What volume growth does Brightwater's downside case assume?", "4%", ["10%", "14%", "0%"], "With a 2% price rise and 63% cost of sales."),
  fq("What's Brightwater's 2027 EBITDA in the upside case?", "$222,740", ["$177,600", "$112,496", "$502,740"], "$502,740 gross profit − $280,000."),
  fq("Where must a data table's input cells be?", "On the same sheet as the data table", ["On any sheet", "In another workbook", "In a macro"], "An Excel limitation."),
  fq("What does Goal Seek do to the input cell?", "Overwrites it", ["Nothing", "Deletes it", "Locks it"], "Note the original value first."),

  // Module 6
  fq("What's Brightwater's 2027 unlevered free cash flow?", "$32,270", ["$95,700", "$121,770", "$85,200"], "Low because of the roaster capex."),
  fq("In the illustrative DCF, what's the sum of present values for years 1–5 ($000)?", "447.7", ["600.0", "1,279.1", "1,726.8"], "Discounted at 10%."),
  fq("What share of the illustrative enterprise value comes from the terminal value?", "About 74%", ["About 26%", "About 50%", "100%"], "1,279.1 ÷ 1,726.8."),
  fq("What's Brightwater's 2027 interest cover?", "About 9.1×", ["About 2×", "About 14×", "About 0.1×"], "$127,600 ÷ $14,000."),
  fq("Which Excel feature finds typed numbers on calculation sheets?", "Go To Special → Constants", ["Flash Fill", "Remove Duplicates", "Data Table"], "Hard-codes stand out."),
  fq("What happens to terminal value if growth gets close to WACC?", "It becomes extremely large", ["It falls to zero", "Nothing", "It turns negative"], "The denominator shrinks."),
]
