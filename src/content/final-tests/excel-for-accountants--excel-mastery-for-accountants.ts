import { fq } from "@/lib/finalTest"

// Final test bank for Excel Mastery for Accountants — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("Which sheet in Priya's workbook holds the only cells people type in?", "Inputs", ["Data", "Workings", "Report"], "Rates, dates and settings."),
  fq("A$1 copied across and down — what stays fixed?", "The row", ["The column", "Both", "Neither"], "The $ locks row 1."),
  fq("Which shortcut opens Name Manager?", "Ctrl+F3", ["Ctrl+1", "F4", "Ctrl+;"], "Formulas → Name Manager."),
  fq("Which shortcut shows formulas instead of results?", "Ctrl+`", ["Ctrl+1", "Alt+=", "F2"], "Useful for reviewing."),
  fq("A cell shows 1,250 but holds 1,249.6. What should you use where precision matters?", "ROUND", ["A different format", "TRIM", "VALUE"], "Formatting doesn't change the value."),
  fq("Which custom format shows negatives in brackets?", "#,##0;(#,##0);-", ["0.00%", "dd/mm/yyyy", "@"], "Positive; negative; zero."),

  // Module 2
  fq("How many duplicate transactions did Copperleaf's overlapping bank downloads create?", "12", ["2", "50", "0"], "Removed after checking."),
  fq("What does =[@Amount] refer to in a Table?", "The Amount in the current row", ["The whole Amount column", "The total", "The header"], "A structured reference."),
  fq("Which shortcut toggles filters?", "Ctrl+Shift+L", ["Ctrl+T", "Ctrl+E", "Alt+F5"], "Turns filters on or off."),
  fq("TRIM doesn't remove which character, common in web exports?", "Non-breaking spaces (CHAR(160))", ["Ordinary spaces", "Letters", "Numbers"], "Use SUBSTITUTE first."),
  fq("Which function converts \"1,250\" stored as text to a number?", "VALUE", ["TRIM", "CLEAN", "PROPER"], "Text numbers are ignored by SUM."),
  fq("Where does Power Query list each cleaning step?", "Applied Steps", ["Name Manager", "Data Validation", "Slicers"], "Reviewers can see every change."),

  // Module 3
  fq("In SUMIFS, which argument comes first?", "The range to sum", ["The first criteria range", "The criteria", "The return range"], "Unlike SUMIF."),
  fq("What's VLOOKUP's risky default?", "Approximate match", ["Exact match", "Searching left", "Returning text"], "Forgetting FALSE gives wrong answers."),
  fq("Which formula returns the first day of A2's month?", "=EOMONTH(A2,-1)+1", ["=EOMONTH(A2,0)", "=EDATE(A2,1)", "=A2+30"], "End of the previous month plus one."),
  fq("Which error appears after a referenced cell is deleted?", "#REF!", ["#N/A", "#DIV/0!", "#NAME?"], "The reference is broken."),
  fq("Which formula flags a payment over $1,000 with no approver in E2?", "=IF(AND(D2>1000,E2=\"\"),\"Missing approval\",\"OK\")", ["=IF(OR(D2>1000,E2=\"\"),\"OK\",\"Missing approval\")", "=SUM(D2:E2)", "=IFERROR(D2,0)"], "Both conditions must be true."),
  fq("Which lookup works in every Excel version and can look left?", "INDEX with MATCH", ["XLOOKUP", "VLOOKUP", "HLOOKUP"], "XLOOKUP needs 365 or 2021+."),

  // Module 4
  fq("What were Copperleaf's total October 2026 sales?", "$112,800", ["$350,200", "$64,200", "$120,000"], "Cookware, cutlery and tableware."),
  fq("Which product made up 56.9% of October sales?", "Cookware", ["Cutlery", "Tableware", "Glassware"], "$64,200 ÷ $112,800."),
  fq("What happens if you group months without years?", "Different years merge into one month", ["Nothing", "The PivotTable deletes data", "Dates become text"], "Include years."),
  fq("What is a Timeline?", "A slicer for dates", ["A line chart", "A macro", "A formula"], "Filter by period."),
  fq("How can one slicer control several PivotTables?", "Report Connections", ["Name Manager", "Data Validation", "Flash Fill"], "Connect the slicer to each report."),
  fq("What should a refreshed PivotTable total be checked against?", "The trial balance", ["Last year's budget", "The bank statement only", "Nothing"], "Reconcile reports."),

  // Module 5
  fq("What was Copperleaf's adjusted bank balance?", "$49,600", ["$48,200", "$49,750", "$51,700"], "$48,200 + $3,500 − $2,100."),
  fq("What's the monthly payment on Copperleaf's $50,000 loan?", "$966.64", ["$250.00", "$716.64", "$833.33"], "=PMT(6%/12,60,-50000)."),
  fq("What's year 2 DDB depreciation on the $20,000 van?", "$4,800", ["$8,000", "$3,600", "$7,380"], "40% of $12,000."),
  fq("Why enter the loan as −50000 in PMT?", "To get a positive payment — money received and paid have opposite signs", ["It's required by law", "To get interest only", "Excel can't handle positives"], "Cash flow signs."),
  fq("What was Copperleaf's wages variance?", "−$1,400 (unfavourable)", ["$1,400 favourable", "−$7,200", "$5,500"], "Actual $19,400 vs. budget $18,000."),
  fq("What does =MAX(0,ReportDate−[@DueDate]) avoid?", "Negative days for invoices not yet due", ["Errors from text", "Duplicates", "Rounding"], "Not-yet-due invoices show 0."),

  // Module 6
  fq("Which chart shows a bridge from budget profit to actual profit?", "Waterfall chart", ["Pie chart", "Line chart", "Scatter chart"], "It shows each step."),
  fq("Which formula lists invoices over 60 days, largest balance first?", "=SORT(FILTER(Invoices,Invoices[Days]>60),5,-1)", ["=UNIQUE(Invoices)", "=SUMIFS(Invoices[Days],60)", "=VLOOKUP(60,Invoices,5)"], "FILTER then SORT descending."),
  fq("What does the master check cell show when every check passes?", "ALL OK", ["TRUE only", "#N/A", "CHECK ERRORS"], "It sits on the dashboard."),
  fq("Before protecting a sheet, what should you do with input cells?", "Unlock them", ["Delete them", "Hide them", "Colour them red"], "So users can still type there."),
  fq("When should Use Relative References be on while recording?", "When the macro should work from whichever cell is selected", ["Never", "Always for formatting", "Only for charts"], "Otherwise it uses fixed addresses."),
  fq("Why avoid 3D charts?", "They distort comparisons", ["They're too slow", "Excel doesn't support them", "They can't be printed"], "Keep charts simple."),
]
