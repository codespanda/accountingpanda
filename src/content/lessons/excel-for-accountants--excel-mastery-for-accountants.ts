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

// Excel Mastery for Accountants — lesson screens by module index (0 = Module 1).
// The course follows Priya, the accountant at Copperleaf Trading Co., a
// kitchenware wholesaler, as she builds an October 2026 month-end workbook.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Excel Foundations for Accountants",
      ["Good Excel work starts with a well-built workbook. This module sets up the foundations Priya uses for Copperleaf's month-end workbook."],
      ["Design a clear, reviewable workbook", "Apply number, date and accounting formats", "Use relative, absolute and mixed references", "Create and use named ranges", "Work faster with keyboard shortcuts"],
    ),
    screen(
      "Meet Copperleaf Trading Co.",
      p("Copperleaf Trading Co. sells kitchenware wholesale to cafés and shops. Priya, its accountant, closes the books each month from exports of the accounting system and the bank."),
      p("Her old month-end file was one huge sheet with typed-over numbers and no checks. In this course she rebuilds it as a clean, linked workbook for October 2026."),
      table(
        ["Sheet", "Purpose"],
        [
          ["Inputs", "Rates, dates and settings — the only cells people type in"],
          ["Data", "Raw exports: ledger, bank statement, invoices"],
          ["Workings", "Reconciliations, aging, schedules"],
          ["Report", "The dashboard for the owners"],
          ["Checks", "Control totals that must all show OK"],
        ],
      ),
    ),
    screen(
      "Good spreadsheet design",
      bullets(
        "Separate inputs, data, calculations and outputs — on different sheets or clearly marked areas.",
        "Never type a number into a formula (avoid =B5*1.1 — put the 10% in an input cell).",
        "Use one formula consistently down a column or across a row.",
        "Colour-code: one colour for inputs, none for formulas.",
        "Add a short notes sheet: source of data, date, who prepared it.",
      ),
      tip("Flow left to right, top to bottom", "Reviewers read a workbook like a page. Make calculations flow in the same direction."),
    ),
    screen(
      "Number, date and accounting formats",
      table(
        ["Format", "Shows", "Use for"],
        [
          ["Accounting", "$ 1,250.00 — symbol aligned left, zeros as a dash", "Financial statements and schedules"],
          ["Currency", "$1,250.00 — symbol next to the number", "Prices and single values"],
          ["Number with separator", "1,250.00", "Workings"],
          ["Custom #,##0;(#,##0);-", "1,250 / (1,250) / -", "Negatives in brackets"],
        ],
      ),
      note("Excel stores dates as serial numbers — on Windows, 1 is 1 January 1900. That's why dates can be added and subtracted, and why a date can suddenly show as 46,000-something."),
      caution("Formatting changes what's displayed, not the value. A cell showing 1,250 might hold 1,249.6 — use ROUND where precision matters."),
    ),
    screen(
      "Relative, absolute and mixed references",
      table(
        ["Reference", "When copied", "Example use"],
        [
          ["A1 (relative)", "Row and column both change", "Adding each row's amounts"],
          ["$A$1 (absolute)", "Never changes", "A single tax rate in Inputs"],
          ["A$1 (mixed)", "Column changes, row is locked", "Month headers across a row"],
          ["$A1 (mixed)", "Row changes, column is locked", "Rates down a column"],
        ],
      ),
      p("Priya calculates sales tax on each invoice with =C5*Inputs!$B$2 — the rate cell stays fixed as she copies the formula down."),
      tip("F4", "Press F4 while editing a reference to cycle through A1, $A$1, A$1 and $A1."),
    ),
    screen(
      "Named ranges",
      p("A name replaces a cell address with a meaningful label, so =C5*TaxRate is easier to review than =C5*Inputs!$B$2."),
      steps(
        ["Select the cell", "Inputs!B2, holding 10%."],
        ["Type the name", "Type TaxRate in the Name Box (left of the formula bar) and press Enter."],
        ["Use it", "=C5*TaxRate — it behaves like an absolute reference."],
        ["Manage names", "Formulas → Name Manager (Ctrl+F3) to edit or delete."],
      ),
    ),
    screen(
      "Keyboard shortcuts that save hours",
      table(
        ["Shortcut", "Does"],
        [
          ["Ctrl+Arrow", "Jump to the edge of the data"],
          ["Ctrl+Shift+Arrow", "Select to the edge of the data"],
          ["Alt+=", "AutoSum"],
          ["Ctrl+1", "Format Cells"],
          ["Ctrl+;", "Insert today's date"],
          ["F2", "Edit the active cell"],
          ["Ctrl+`", "Show formulas instead of results"],
          ["Ctrl+PageDown / PageUp", "Next / previous sheet"],
        ],
      ),
    ),
    mistakes(
      ["Hard-coding numbers in formulas", "Put assumptions in input cells."],
      ["Forgetting $ on fixed references", "Copied formulas point to the wrong cell."],
      ["Trusting what a cell displays", "Check the underlying value."],
      ["One giant sheet", "Separate inputs, data, workings and reports."],
    ),
    check(
      1,
      q("Which reference stays fixed when copied anywhere?", ["$A$1", "A1", "A$1", "$A1"], 0, "Both column and row are locked."),
      q("What does the Accounting format show for zero?", ["A dash", "0.00", "Nothing", "An error"], 0, "And aligns the currency symbol."),
      q("Which key cycles through reference types while editing?", ["F4", "F2", "F9", "F12"], 0, "A1 → $A$1 → A$1 → $A1."),
      q("Why avoid formulas like =B5*1.1?", ["The 10% is hidden and hard to change", "Excel can't calculate them", "They're slower", "They can't be copied"], 0, "Put assumptions in input cells."),
      q("How does Excel store dates?", ["As serial numbers", "As text", "As images", "As formulas"], 0, "So they can be added and subtracted."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — References",
          ["Monthly sales are in B5:M5 and a 10% commission rate is in B2. Write the formula for B6 that can be copied across to M6."],
          ["=B5*$B$2 — the rate is absolute, the sales reference is relative."],
        ],
        [
          "Exercise 2 — Mixed reference",
          ["A price list has products down column A (prices in column B) and discount rates across row 1 (C1:F1). Write a formula for C2 that copies across and down."],
          ["=$B2*(1-C$1) — lock the price column and the discount row."],
        ],
      ),
    ),
    summary(
      ["Separating inputs, data, workings, reports and checks", "Number, date and accounting formats", "Relative, absolute and mixed references", "Named ranges", "Time-saving shortcuts"],
      "A clear structure with no hard-coded numbers makes a workbook faster to build and far easier to review.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Tables, Data Cleaning and Validation",
      ["Exports are rarely clean. This module turns Copperleaf's messy bank and ledger exports into reliable data."],
      ["Use Excel Tables and structured references", "Sort, filter and remove duplicates", "Clean text with TRIM, CLEAN, Text to Columns and Flash Fill", "Control input with data validation", "Import and refresh data with Power Query"],
    ),
    screen(
      "Excel Tables and structured references",
      p("Select the data and press Ctrl+T. A Table expands automatically as rows are added, keeps formulas consistent and gives every column a name."),
      table(
        ["Formula", "Means"],
        [
          ["=SUM(Bank[Amount])", "Total of the Amount column in the Bank table"],
          ["=[@Amount]*TaxRate", "This row's Amount times the tax rate"],
          ["=COUNTA(Bank[Date])", "Number of transactions"],
        ],
      ),
      tip("Name your tables", "Rename Table1 to Bank on the Table Design tab — formulas become self-explanatory."),
    ),
    screen(
      "Sorting, filtering and removing duplicates",
      bullets(
        "Ctrl+Shift+L turns filters on or off.",
        "Sort by several levels — e.g. by date, then by amount.",
        "Data → Remove Duplicates deletes repeated rows based on the columns you choose.",
      ),
      caution("Copperleaf's bank export repeated 12 transactions when two downloads overlapped. Priya removed duplicates on Date, Description and Amount — but checked first, because two genuine $50 payments on the same day would also look like duplicates."),
    ),
    screen(
      "Cleaning text",
      table(
        ["Tool", "Fixes", "Example"],
        [
          ["TRIM", "Extra spaces", "=TRIM(\"  ACME   Ltd \") → \"ACME Ltd\""],
          ["CLEAN", "Non-printing characters from exports", "=CLEAN(A2)"],
          ["VALUE", "Numbers stored as text", "=VALUE(\"1,250\") → 1250"],
          ["Text to Columns", "One column holding several fields", "Split \"INV-1042|Café Rosa\" on |"],
          ["Flash Fill (Ctrl+E)", "Pattern-based extraction", "Type one invoice number; Excel fills the rest"],
        ],
      ),
      note("TRIM doesn't remove non-breaking spaces (character 160), common in web exports. Use =SUBSTITUTE(A2,CHAR(160),\" \") first."),
    ),
    screen(
      "Data validation and drop-down lists",
      steps(
        ["Select the cells", "The Account column of Priya's journal template."],
        ["Data → Data Validation", "Allow: List."],
        ["Source", "=AccountList — a named range of valid accounts."],
        ["Add a message", "An input message and an error alert for invalid entries."],
      ),
      p("Other useful rules: whole numbers only, dates within October 2026, or amounts greater than zero."),
    ),
    screen(
      "Importing and refreshing data with Power Query",
      p("Power Query (Data → Get Data) imports a file, records every cleaning step, and repeats them all with one click next month."),
      steps(
        ["Get Data", "From the October bank CSV."],
        ["Clean", "Remove top rows, set data types, trim text, split columns."],
        ["Load", "To a Table on the Data sheet."],
        ["Next month", "Replace the file and click Refresh — every step reruns."],
      ),
      tip("Applied Steps", "Each action appears in the Applied Steps list, so a reviewer can see exactly how the data was changed."),
    ),
    mistakes(
      ["Formulas on ranges that don't grow", "Use Tables."],
      ["Removing duplicates blindly", "Check genuine repeated transactions."],
      ["Numbers stored as text", "Convert them, or SUM ignores them."],
      ["Cleaning by hand every month", "Record it once in Power Query."],
    ),
    check(
      2,
      q("Which shortcut creates an Excel Table?", ["Ctrl+T", "Ctrl+L only", "Ctrl+E", "Alt+="], 0, "Ctrl+L also works, but Ctrl+T is standard."),
      q("What does TRIM do?", ["Removes extra spaces", "Rounds numbers", "Deletes rows", "Converts dates"], 0, "Leading, trailing and repeated spaces."),
      q("Which shortcut runs Flash Fill?", ["Ctrl+E", "Ctrl+F", "Ctrl+T", "F4"], 0, "It fills a pattern from examples."),
      q("What does a data validation list do?", ["Restricts entries to a set of allowed values", "Sorts data", "Removes duplicates", "Creates charts"], 0, "A drop-down of valid choices."),
      q("What's the main benefit of Power Query?", ["Cleaning steps are recorded and rerun on refresh", "It makes charts", "It replaces formulas", "It emails reports"], 0, "Repeatable cleaning."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Clean a name",
          ["A2 holds \"  café rosa  \" with extra spaces. Write a formula returning \"Café Rosa\"."],
          ["=PROPER(TRIM(A2))."],
        ],
        [
          "Exercise 2 — Structured reference",
          ["Write a formula that totals the Amount column of a Table named Sales."],
          ["=SUM(Sales[Amount])."],
        ],
      ),
    ),
    summary(
      ["Tables and structured references", "Sorting, filtering and safe duplicate removal", "Text-cleaning tools", "Data validation", "Repeatable imports with Power Query"],
      "Clean, structured data comes first — every later formula, PivotTable and dashboard depends on it.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Lookup and Logic Functions",
      ["With clean data, Priya can match, classify and summarise it. This module covers the functions accountants use most."],
      ["Write logical tests with IF, IFS, AND and OR", "Summarise with SUMIFS, COUNTIFS and AVERAGEIFS", "Look up values with XLOOKUP and INDEX/MATCH", "Handle errors with IFERROR", "Use EOMONTH, EDATE and NETWORKDAYS"],
    ),
    screen(
      "IF, IFS, AND and OR",
      table(
        ["Formula", "Result"],
        [
          ["=IF(D2>1000,\"Review\",\"OK\")", "Flags payments over $1,000"],
          ["=IF(AND(D2>1000,E2=\"\"),\"Missing approval\",\"OK\")", "Over $1,000 and no approver"],
          ["=IF(OR(F2=\"Cash\",F2=\"Card\"),\"Paid\",\"On account\")", "Either payment method"],
          ["=IFS(G2<=30,\"Current\",G2<=60,\"31–60\",TRUE,\"Over 60\")", "Several conditions, checked in order"],
        ],
      ),
    ),
    screen(
      "SUMIFS, COUNTIFS and AVERAGEIFS",
      p("These add, count or average only the rows that meet every condition."),
      table(
        ["Formula", "Answers"],
        [
          ["=SUMIFS(Ledger[Amount],Ledger[Account],\"Sales\")", "Total sales"],
          ["=SUMIFS(Ledger[Amount],Ledger[Account],\"Sales\",Ledger[Date],\">=\"&StartDate,Ledger[Date],\"<=\"&EndDate)", "Sales for October"],
          ["=COUNTIFS(Invoices[Status],\"Overdue\")", "Number of overdue invoices"],
          ["=AVERAGEIFS(Invoices[Amount],Invoices[Customer],\"Café Rosa\")", "Average invoice for one customer"],
        ],
      ),
      note("In SUMIFS the sum range comes first; in the older SUMIF it comes last. Priya uses SUMIFS everywhere for consistency."),
    ),
    screen(
      "XLOOKUP, and INDEX with MATCH",
      p("Priya matches each bank receipt to an invoice to find the customer."),
      table(
        ["Formula", "Does"],
        [
          ["=XLOOKUP(B2,Invoices[Number],Invoices[Customer],\"Not found\")", "Finds the invoice number and returns the customer"],
          ["=INDEX(Invoices[Customer],MATCH(B2,Invoices[Number],0))", "The same, in any Excel version"],
        ],
      ),
      compare(
        ["XLOOKUP", "Microsoft 365 and Excel 2021 or later.", ["Exact match by default", "Built-in “not found” value", "Can look left"]],
        ["INDEX/MATCH", "Works in every version.", ["MATCH's 0 means exact match", "Can look left", "Two functions to read"]],
      ),
      caution("VLOOKUP's default is an approximate match — forgetting FALSE as the last argument returns wrong answers silently."),
    ),
    screen(
      "Handling errors with IFERROR",
      table(
        ["Error", "Usual cause"],
        [
          ["#N/A", "Lookup value not found"],
          ["#DIV/0!", "Dividing by zero or blank"],
          ["#VALUE!", "Text where a number is expected"],
          ["#REF!", "A referenced cell was deleted"],
          ["#NAME?", "Misspelled function or name"],
        ],
      ),
      p("=IFERROR(C2/B2,0) returns 0 instead of #DIV/0!."),
      caution("IFERROR hides every error, including genuine mistakes. Prefer IFNA for lookups — it only catches “not found”."),
    ),
    screen(
      "Date functions",
      table(
        ["Formula", "Result for 15 Oct 2026"],
        [
          ["=EOMONTH(A2,0)", "31 Oct 2026 — month end"],
          ["=EOMONTH(A2,-1)+1", "1 Oct 2026 — month start"],
          ["=EDATE(A2,3)", "15 Jan 2027 — three months later"],
          ["=NETWORKDAYS(A2,EOMONTH(A2,0))", "12 working days to month end (Mon–Fri)"],
        ],
      ),
      tip("Due dates", "Invoice due date for 30-day terms: =A2+30. Days overdue at report date: =ReportDate−DueDate."),
    ),
    mistakes(
      ["VLOOKUP without FALSE", "Use XLOOKUP or exact match."],
      ["Wrapping everything in IFERROR", "Hidden errors become wrong numbers."],
      ["Typing dates as text", "Use real dates so functions work."],
      ["Mixing SUMIF and SUMIFS argument orders", "Stick to SUMIFS."],
    ),
    check(
      3,
      q("Which function sums values meeting several conditions?", ["SUMIFS", "SUM", "COUNTIF", "AVERAGE"], 0, "Sum range first, then criteria pairs."),
      q("What does MATCH's last argument 0 mean?", ["Exact match", "Approximate match", "Search from the end", "Ignore errors"], 0, "Always use it for invoice numbers."),
      q("What does =EOMONTH(A2,0) return?", ["The last day of A2's month", "The first day of the month", "Today", "A2 plus 30 days"], 0, "End of month."),
      q("Which error means a lookup value wasn't found?", ["#N/A", "#DIV/0!", "#REF!", "#NAME?"], 0, "Not available."),
      q("Why prefer IFNA over IFERROR for lookups?", ["It only hides “not found”, not other mistakes", "It's faster", "It's newer", "It works without data"], 0, "Other errors still show."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Overdue flag",
          ["Due date in C2, report date named ReportDate, amount unpaid in D2. Flag \"Overdue\" when the date has passed and an amount is unpaid; otherwise \"OK\"."],
          ["=IF(AND(ReportDate>C2,D2>0),\"Overdue\",\"OK\")."],
        ],
        [
          "Exercise 2 — Total by customer",
          ["Total the Amount column of the Invoices table for the customer named in G2."],
          ["=SUMIFS(Invoices[Amount],Invoices[Customer],G2)."],
        ],
      ),
    ),
    summary(
      ["IF, IFS, AND and OR", "SUMIFS, COUNTIFS and AVERAGEIFS", "XLOOKUP and INDEX/MATCH", "Excel errors and IFERROR/IFNA", "EOMONTH, EDATE and NETWORKDAYS"],
      "Logic, conditional totals and exact-match lookups do most of an accountant's Excel work — as long as errors aren't hidden.",
    ),
  ],
  3: [
    overview(
      "Module 4 — PivotTables and Reporting",
      ["PivotTables summarise thousands of ledger lines in seconds. This module builds Copperleaf's monthly sales and expense reports."],
      ["Build PivotTables from a ledger or trial balance", "Group dates by month, quarter and year", "Add calculated fields and percentages", "Use slicers and PivotCharts", "Refresh reports with new data"],
    ),
    screen(
      "Building a PivotTable",
      steps(
        ["Start from a Table", "Click inside the Ledger table — the PivotTable then grows with it."],
        ["Insert → PivotTable", "Place it on a new sheet."],
        ["Drag fields", "Account to Rows, Amount to Values, Month to Columns."],
        ["Format values", "Right-click → Value Field Settings → Number Format."],
      ),
      table(
        ["Area", "Holds"],
        [
          ["Rows", "Items listed down the side — accounts, customers"],
          ["Columns", "Items across the top — months, regions"],
          ["Values", "Numbers to summarise — sum, count, average"],
          ["Filters", "Restrict the whole report — one department"],
        ],
      ),
    ),
    screen(
      "Grouping by month, quarter and year",
      p("Right-click any date in the PivotTable → Group → choose Months, Quarters and Years."),
      table(
        ["Copperleaf sales", "Q3 2026", "Oct 2026"],
        [
          ["Cookware", "$186,400", "$64,200"],
          ["Cutlery", "$92,300", "$31,800"],
          ["Tableware", "$71,500", "$16,800"],
        ],
        { footer: ["Total", "$350,200", "$112,800"], numeric: [1, 2] },
      ),
      note("Include years when grouping months — otherwise October 2025 and October 2026 merge into one “Oct”."),
    ),
    screen(
      "Calculated fields and percentages",
      terms(
        ["Show Values As", "Value Field Settings → Show Values As → % of Grand Total, % of Column Total, or Difference From the previous month."],
        ["Calculated field", "PivotTable Analyze → Fields, Items & Sets → Calculated Field, e.g. Margin = Sales − Cost."],
      ),
      p("In October, cookware is $64,200 ÷ $112,800 = 56.9% of sales."),
      caution("Calculated fields work on the summed totals, not row by row. A ratio like margin % is calculated correctly on totals, but a formula meant for each row may not be."),
    ),
    screen(
      "Slicers and PivotCharts",
      bullets(
        "Slicers (PivotTable Analyze → Insert Slicer) are clickable filter buttons — e.g. by region or sales rep.",
        "A Timeline is a slicer for dates.",
        "One slicer can control several PivotTables (Report Connections).",
        "A PivotChart updates with the PivotTable and its filters.",
      ),
    ),
    screen(
      "Refreshing reports",
      steps(
        ["Add data", "Paste or load November's ledger into the same Table."],
        ["Refresh", "Alt+F5 refreshes one PivotTable; Ctrl+Alt+F5 refreshes all."],
        ["Check", "Compare the PivotTable total to the trial balance total."],
      ),
      tip("Refresh on open", "PivotTable Options → Data → Refresh data when opening the file."),
    ),
    mistakes(
      ["Building from a fixed range", "Build from a Table so new rows are included."],
      ["Forgetting to refresh", "PivotTables don't update by themselves."],
      ["Grouping months without years", "Different years merge."],
      ["Not reconciling to the trial balance", "Always check totals."],
    ),
    check(
      4,
      q("Which PivotTable area lists items down the side?", ["Rows", "Columns", "Values", "Filters"], 0, "E.g. accounts or customers."),
      q("How do you show each item as a share of the total?", ["Show Values As → % of Grand Total", "Insert a chart", "Sort descending", "Add a slicer"], 0, "In Value Field Settings."),
      q("Which shortcut refreshes all PivotTables?", ["Ctrl+Alt+F5", "F9", "Ctrl+R", "Alt+="], 0, "Alt+F5 refreshes one."),
      q("What is a slicer?", ["A clickable filter for PivotTables", "A type of chart", "A formula", "A data validation rule"], 0, "Filter buttons."),
      q("Why build a PivotTable from an Excel Table?", ["New rows are included on refresh", "It looks nicer", "It's required", "It's faster to print"], 0, "The source grows automatically."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Share of sales",
          ["Using the October figures, what percentage of sales is cutlery?"],
          ["$31,800 ÷ $112,800 = 28.2%."],
        ],
        [
          "Exercise 2 — Report layout",
          ["Describe a PivotTable showing expenses by account for each quarter of 2026."],
          ["Account in Rows, date in Columns grouped by Quarters and Years, Amount (sum) in Values, filtered to expense accounts."],
        ],
      ),
    ),
    summary(
      ["Building PivotTables from Tables", "Grouping dates", "Show Values As and calculated fields", "Slicers, timelines and PivotCharts", "Refreshing and reconciling"],
      "PivotTables turn a ledger into a report in seconds — build them on Tables, refresh them, and tie them back to the trial balance.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Accounting Workflows in Excel",
      ["Now Priya builds the month-end workings: bank reconciliation, aging, depreciation, a loan schedule and a variance report."],
      ["Build a bank reconciliation template", "Create receivables and payables aging", "Build depreciation schedules", "Build a loan schedule with PMT, IPMT and PPMT", "Analyse budget vs. actual variances"],
    ),
    screen(
      "Bank reconciliation template",
      example(
        [["Balance per bank statement", "$48,200"], ["Add: deposits in transit", "$3,500"], ["Less: outstanding cheques", "−$2,100"]],
        ["Adjusted bank balance", "$49,600"],
      ),
      example([["Balance per cash book", "$49,750"], ["Less: bank fees not recorded", "−$150"]], ["Adjusted book balance", "$49,600"]),
      p("A check cell =ROUND(AdjBank−AdjBook,2)=0 shows TRUE when they agree. Priya matches items using XLOOKUP on amount and reference, and flags unmatched lines with conditional formatting."),
    ),
    screen(
      "Receivables and payables aging",
      table(
        ["Column", "Formula"],
        [
          ["Days overdue", "=MAX(0,ReportDate−[@DueDate])"],
          ["Bucket", "=IFS([@Days]=0,\"Current\",[@Days]<=30,\"1–30\",[@Days]<=60,\"31–60\",[@Days]<=90,\"61–90\",TRUE,\"Over 90\")"],
        ],
      ),
      p("A PivotTable with Customer in Rows, Bucket in Columns and Balance in Values produces the aging report. Its total must equal the receivables control account."),
    ),
    screen(
      "Depreciation schedules",
      table(
        ["Function", "Method", "Van: cost $20,000, salvage $2,000, 5 years"],
        [
          ["=SLN(20000,2000,5)", "Straight-line", "$3,600 a year"],
          ["=DDB(20000,2000,5,1)", "Double-declining balance, year 1", "$8,000"],
          ["=DDB(20000,2000,5,2)", "Double-declining balance, year 2", "$4,800"],
          ["=DB(20000,2000,5,1)", "Fixed-declining balance, year 1", "$7,380"],
        ],
      ),
      note("DDB applies 2 ÷ life (40%) to the opening book value and doesn't depreciate below salvage. DB uses a rate Excel calculates from cost, salvage and life (here 36.9%)."),
    ),
    screen(
      "Loan schedules with PMT, IPMT and PPMT",
      p("Copperleaf borrows $50,000 at 6% a year, repaid monthly over 5 years."),
      table(
        ["Formula", "Result"],
        [
          ["=PMT(6%/12,60,-50000)", "$966.64 monthly payment"],
          ["=IPMT(6%/12,1,60,-50000)", "$250.00 interest in month 1"],
          ["=PPMT(6%/12,1,60,-50000)", "$716.64 principal in month 1"],
        ],
      ),
      tip("Signs", "Excel treats money received and paid with opposite signs. Enter the loan as −50000 to get a positive payment."),
      caution("Match the rate and periods: a monthly payment needs the monthly rate (6%/12) and the number of months (60)."),
    ),
    screen(
      "Budget vs. actual variance analysis",
      table(
        ["October 2026", "Budget", "Actual", "Variance", "%"],
        [
          ["Sales", "$120,000", "$112,800", "−$7,200", "−6.0%"],
          ["Cost of sales", "$72,000", "$66,500", "$5,500", "7.6%"],
          ["Wages", "$18,000", "$19,400", "−$1,400", "−7.8%"],
        ],
        { numeric: [1, 2, 3, 4] },
      ),
      p("Priya shows favourable variances as positive: for income, Actual − Budget; for costs, Budget − Actual. A threshold column flags anything over ±5% for comment."),
    ),
    mistakes(
      ["Reconciliations without a check cell", "Prove the difference is zero."],
      ["Aging that doesn't tie to the ledger", "Reconcile totals."],
      ["Annual rate with monthly periods", "Convert the rate."],
      ["Inconsistent variance signs", "Decide on a convention and label it."],
    ),
    check(
      5,
      q("What does =SLN(cost, salvage, life) return?", ["Annual straight-line depreciation", "Total depreciation", "Book value", "Monthly interest"], 0, "(Cost − salvage) ÷ life."),
      q("For a monthly loan payment at 6% a year, what rate goes into PMT?", ["6%/12", "6%", "6%×12", "0.6%"], 0, "Match rate to period."),
      q("Which function returns the interest part of a payment?", ["IPMT", "PPMT", "PMT", "RATE"], 0, "PPMT returns principal."),
      q("What should an aging report total agree to?", ["The receivables control account", "Total sales", "The bank balance", "Equity"], 0, "Reconcile it."),
      q("Actual sales $90,000 vs. budget $100,000. What's the variance?", ["$10,000 unfavourable", "$10,000 favourable", "$90,000", "Nil"], 0, "Income below budget."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Loan",
          ["Write the formula for the monthly payment on $24,000 at 9% a year over 3 years."],
          ["=PMT(9%/12,36,-24000) — about $763.19."],
        ],
        [
          "Exercise 2 — Bucket",
          ["An invoice was due on 15 Sep 2026; the report date is 31 Oct 2026. How many days overdue, and which bucket?"],
          ["46 days — the 31–60 bucket."],
        ],
      ),
    ),
    summary(
      ["A bank reconciliation with a check cell", "Aging with IFS and PivotTables", "SLN, DDB and DB depreciation", "PMT, IPMT and PPMT loan schedules", "Budget vs. actual variances"],
      "Excel templates make month-end repeatable — as long as each one proves itself against the ledger.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Dashboards, Checks and Automation",
      ["The last step is presenting results clearly and making the workbook safe to reuse. This module builds Copperleaf's dashboard and checks."],
      ["Highlight exceptions with conditional formatting", "Choose charts for management reports", "Use FILTER, UNIQUE and SORT", "Build error checks, control totals and protection", "Record a simple macro"],
    ),
    screen(
      "Conditional formatting for exceptions",
      table(
        ["Rule", "Highlights"],
        [
          ["Cell value > 1000", "Large payments"],
          ["Formula: =$G2>60", "Invoices over 60 days overdue (whole row)"],
          ["Duplicate values", "Repeated invoice numbers"],
          ["Icon sets on variance %", "Red, amber and green variances"],
        ],
      ),
      tip("Keep it meaningful", "Highlight only exceptions. If everything is coloured, nothing stands out."),
    ),
    screen(
      "Charts for management reports",
      table(
        ["Message", "Chart"],
        [
          ["Trend over time", "Line chart — monthly sales"],
          ["Comparing categories", "Bar or column chart — sales by product"],
          ["Budget vs. actual", "Clustered columns, or bars with a target marker"],
          ["Bridge from one total to another", "Waterfall chart — budget profit to actual profit"],
        ],
      ),
      caution("Avoid 3D effects and pie charts with many slices — they distort comparisons."),
    ),
    screen(
      "Dynamic arrays — FILTER, UNIQUE and SORT",
      p("In Microsoft 365 and Excel 2021 or later, one formula can return many results, which “spill” into the cells below."),
      table(
        ["Formula", "Returns"],
        [
          ["=UNIQUE(Invoices[Customer])", "A list of customers, each once"],
          ["=FILTER(Invoices,Invoices[Days]>60,\"None\")", "Every invoice over 60 days overdue"],
          ["=SORT(FILTER(Invoices,Invoices[Days]>60),5,-1)", "The same, largest balance first"],
        ],
      ),
      note("A #SPILL! error means something is blocking the cells the result needs — clear them."),
    ),
    screen(
      "Error checks, control totals and protection",
      table(
        ["Check", "Formula", "Should show"],
        [
          ["Trial balance balances", "=ROUND(SUM(TB[Debit])−SUM(TB[Credit]),2)=0", "TRUE"],
          ["Bank reconciliation agrees", "=ROUND(AdjBank−AdjBook,2)=0", "TRUE"],
          ["Aging ties to ledger", "=ROUND(AgingTotal−ARControl,2)=0", "TRUE"],
          ["PivotTable ties to TB", "=ROUND(PivotSales−TBSales,2)=0", "TRUE"],
        ],
      ),
      p("A master cell =IF(AND(Checks[Result]),\"ALL OK\",\"CHECK ERRORS\") sits on the dashboard."),
      bullets(
        "Unlock input cells (Format Cells → Protection), then Review → Protect Sheet.",
        "Protect Workbook structure to stop sheets being deleted.",
      ),
      caution("Sheet protection prevents accidents, not determined users — it isn't security for sensitive data."),
    ),
    screen(
      "An introduction to recording macros",
      steps(
        ["Show the Developer tab", "File → Options → Customize Ribbon."],
        ["Record Macro", "Name it, e.g. FormatBankExport."],
        ["Do the steps", "Delete header rows, format dates, autofit columns."],
        ["Stop recording", "Save the file as .xlsm."],
        ["Run it", "Next month, run the macro on the new export."],
      ),
      caution("Only enable macros in files from trusted sources — macros can run harmful code."),
      tip("Relative references", "Turn on Use Relative References before recording if the macro should work from whichever cell is selected."),
    ),
    mistakes(
      ["Colouring everything", "Highlight exceptions only."],
      ["Busy or 3D charts", "Keep charts simple."],
      ["No visible checks", "Put an ALL OK indicator on the dashboard."],
      ["Saving macros as .xlsx", "Macros are lost — use .xlsm."],
    ),
    check(
      6,
      q("Which chart best shows a trend over time?", ["Line chart", "Pie chart", "3D column", "Scatter of random data"], 0, "Lines show direction."),
      q("What does =UNIQUE(range) return?", ["Each value once", "The largest value", "A count", "A sorted list only"], 0, "Duplicates removed."),
      q("What does a #SPILL! error mean?", ["Cells needed for the result are blocked", "Dividing by zero", "A missing name", "A deleted reference"], 0, "Clear the blocking cells."),
      q("Which file type keeps recorded macros?", [".xlsm", ".xlsx", ".csv", ".pdf"], 0, "Macro-enabled workbook."),
      q("What does sheet protection mainly prevent?", ["Accidental changes", "All hacking", "Viruses", "Printing"], 0, "It's not strong security."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Exception list",
          ["Write a formula listing invoices from the Invoices table where Amount is over 5,000."],
          ["=FILTER(Invoices,Invoices[Amount]>5000,\"None\")."],
        ],
        [
          "Exercise 2 — Check cell",
          ["Write a check that shows TRUE when total debits equal total credits in a table named TB."],
          ["=ROUND(SUM(TB[Debit])−SUM(TB[Credit]),2)=0."],
        ],
      ),
    ),
    summary(
      ["Conditional formatting for exceptions", "Choosing the right chart", "FILTER, UNIQUE and SORT", "Check cells, control totals and protection", "Recording macros safely"],
      "A finished workbook tells its story clearly and proves itself: visible checks, simple charts and repeatable steps.",
    ),
  ],
}

export default lessons
