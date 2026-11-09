import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
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

// Power Query & Power BI for Accountants — lesson screens by module index
// (0 = Module 1). The course follows Harbourline Hospitality Group, which runs
// four restaurants and has a financial year ending 30 June.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Why Power Query and Power BI",
      ["Most month-end reporting is copying, cleaning and pasting the same exports. This module shows where Power Query and Power BI fit, using Harbourline Hospitality Group."],
      ["Explain where Power Query, Power Pivot and Power BI fit", "Compare manual and refreshable reporting", "Identify typical accounting data sources", "Plan a reporting workflow"],
    ),
    screen(
      "Meet Harbourline Hospitality Group",
      p("Harbourline runs four restaurants. Its financial year runs from 1 July to 30 June. Sam, the finance manager, spends two days every month building the management pack by hand."),
      table(
        ["Monthly task", "Time today"],
        [
          ["Export the ledger for each restaurant and paste into Excel", "3 hours"],
          ["Clean account names and dates", "4 hours"],
          ["Map accounts to P&L lines and build PivotTables", "4 hours"],
          ["Update budget comparisons and charts", "5 hours"],
        ],
      ),
      p("Goal for this course: a Power BI report that refreshes in minutes."),
    ),
    screen(
      "Where the tools fit",
      table(
        ["Tool", "Job", "Where"],
        [
          ["Power Query", "Get, clean and combine data — records steps and repeats them", "Excel (Data → Get Data) and Power BI Desktop"],
          ["Power Pivot / data model", "Hold related tables and calculate measures with DAX", "Excel and Power BI"],
          ["Power BI Desktop", "Build the model and interactive report", "Free Windows app"],
          ["Power BI service", "Publish, share and schedule refresh", "Web (app.powerbi.com)"],
        ],
      ),
      note("The Power Query skills are the same in Excel and Power BI — what you learn in Modules 2 and 3 works in both."),
    ),
    screen(
      "Manual vs. refreshable reporting",
      compare(
        ["Manual", "Copy, paste and rebuild every month.", ["Slow", "Errors creep in", "Hard to audit what changed"]],
        ["Refreshable", "Build the steps once; click Refresh each month.", ["Minutes not days", "Same steps every time", "Steps are visible and reviewable"]],
      ),
      tip("Build once, refresh forever", "The first build takes longer than one manual month — the payoff comes from month two onward."),
    ),
    screen(
      "Typical accounting data sources",
      table(
        ["Source", "Harbourline example", "Usual issues"],
        [
          ["General ledger export", "Monthly CSV per restaurant from the accounting system", "Header rows, text dates, codes and names in one column"],
          ["Bank files", "CSV statements for each account", "Different layouts per bank"],
          ["Budget", "Excel workbook with months across columns", "Report layout, not a table"],
          ["Point-of-sale / ERP", "Daily covers and sales", "Large volumes"],
        ],
      ),
    ),
    screen(
      "Planning a reporting workflow",
      steps(
        ["Start from the questions", "What do the owners need? P&L by restaurant, budget variance, cash, receivables."],
        ["List the sources", "Ledger, budget, bank, account mapping."],
        ["Agree a folder structure", "e.g. a SharePoint folder with one sub-folder per source; new files dropped in each month."],
        ["Design the model", "Fact tables (transactions) and dimension tables (accounts, dates, restaurants)."],
        ["Build, test, document", "Reconcile to the trial balance before anyone relies on it."],
      ),
    ),
    mistakes(
      ["Starting with visuals", "Start with the questions and the data."],
      ["Files saved anywhere", "Agree a fixed folder and naming."],
      ["Skipping reconciliation", "Tie totals to the trial balance."],
      ["Expecting the first month to be faster", "The payoff comes later."],
    ),
    check(
      1,
      q("Which tool gets, cleans and combines data with recorded steps?", ["Power Query", "Power BI service", "Conditional formatting", "Goal Seek"], 0, "Available in Excel and Power BI."),
      q("Where are reports shared and refreshed on a schedule?", ["The Power BI service", "Power BI Desktop only", "Notepad", "A CSV file"], 0, "The web service."),
      q("What's the main benefit of refreshable reporting?", ["The same steps run again with one click", "Prettier charts", "No data needed", "No reconciliation needed"], 0, "Build once, refresh."),
      q("What should a reporting project start with?", ["The questions the report must answer", "Choosing colours", "Writing DAX", "Publishing"], 0, "Then data, model and visuals."),
      q("Which language calculates measures in the data model?", ["DAX", "HTML", "Python only", "SQL only"], 0, "Data Analysis Expressions."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Time saved",
          ["Sam's manual pack takes 16 hours a month. If refreshing takes 1 hour, how many hours a year are saved?"],
          ["15 hours × 12 months = 180 hours a year."],
        ],
        [
          "Exercise 2 — Plan",
          ["List the sources and the dimension tables Harbourline will need."],
          ["Sources: ledger exports, budget, bank files, account mapping. Dimensions: accounts (with report lines), dates (with financial year), restaurants."],
        ],
      ),
    ),
    summary(
      ["Power Query, the data model, Power BI Desktop and the service", "Manual vs. refreshable reporting", "Accounting data sources and their issues", "Planning a reporting workflow"],
      "Power Query prepares the data, the model calculates, and Power BI presents and shares — built once and refreshed every month.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Getting and Cleaning Data with Power Query",
      ["This module cleans one month of Harbourline's ledger export into a proper table."],
      ["Connect to Excel, CSV and folder sources", "Promote headers, change types and remove rows", "Split, merge and trim columns", "Unpivot report-style layouts", "Use applied steps and refresh queries"],
    ),
    screen(
      "Connecting to data",
      table(
        ["Source", "Excel", "Power BI Desktop"],
        [
          ["CSV or text file", "Data → From Text/CSV", "Get Data → Text/CSV"],
          ["Excel workbook", "Data → Get Data → From File → From Workbook", "Get Data → Excel workbook"],
          ["Folder of files", "Data → Get Data → From File → From Folder", "Get Data → Folder"],
          ["SharePoint folder", "From SharePoint Folder", "Get Data → SharePoint folder"],
        ],
      ),
      p("Choose Transform Data (not Load) to open the Power Query Editor and clean the data first."),
    ),
    screen(
      "Headers, types and rows",
      p("Harbourline's export starts with four title rows, then the column headers, then transactions, and ends with a total row."),
      steps(
        ["Remove Top Rows", "Remove the 4 title rows."],
        ["Use First Row as Headers", "Promote the header row."],
        ["Remove the total row", "Filter out rows where Date is blank, or Remove Bottom Rows."],
        ["Change Type", "Date → Date (Using Locale if the export is dd/mm/yyyy), Amount → Decimal Number."],
      ),
      caution("A date like 03/04/2026 means 3 April in Australia but March 4 in the US. Use Change Type → Using Locale to set the right one."),
    ),
    screen(
      "Splitting, merging and trimming columns",
      table(
        ["Problem", "Fix in Power Query"],
        [
          ["\"4100 - Food Sales\" in one column", "Split Column → By Delimiter \" - \" into Code and Name"],
          ["Extra spaces in names", "Transform → Format → Trim"],
          ["Restaurant name only in the file name", "Add it as a column (from the folder connector's Source.Name)"],
          ["First and last name in separate columns", "Merge Columns with a space"],
        ],
      ),
      tip("Text codes", "Keep account codes as text if they have leading zeros or letters, so 0410 isn't turned into 410."),
    ),
    screen(
      "Unpivoting report-style layouts",
      p("Harbourline's budget has one row per account and one column per month — a report layout. Power BI needs one row per account per month."),
      table(
        ["Before", "", "", "After", "", ""],
        [
          ["Account", "Jul", "Aug", "Account", "Month", "Amount"],
          ["Food Sales", "300,000", "310,000", "Food Sales", "Jul", "300,000"],
          ["", "", "", "Food Sales", "Aug", "310,000"],
        ],
      ),
      p("Select the Account column → Transform → Unpivot Other Columns. New months added to the budget later are unpivoted automatically."),
      note("Unpivot Other Columns is safer than Unpivot Columns, which names the selected month columns and can miss new ones."),
    ),
    screen(
      "Applied steps and refreshing",
      bullets(
        "Every action appears as a step in the Applied Steps pane — click one to see the data at that point.",
        "Rename steps (e.g. “Removed title rows”) so others can follow them.",
        "The steps are written in the M language, visible in the Advanced Editor.",
        "Refresh reruns every step on the latest file.",
      ),
      caution("If next month's file has a renamed column, a step that refers to the old name will fail. Ask for consistent exports, or rename columns as an early step."),
    ),
    mistakes(
      ["Loading before cleaning", "Choose Transform Data."],
      ["Changing types with the wrong locale", "Dates swap day and month."],
      ["Unpivot Columns on named months", "Use Unpivot Other Columns."],
      ["Unnamed steps", "Rename them for reviewers."],
    ),
    check(
      2,
      q("Which button opens the Power Query Editor before loading?", ["Transform Data", "Load", "Publish", "Refresh"], 0, "Clean first."),
      q("How do you turn the first row into column names?", ["Use First Row as Headers", "Unpivot", "Merge Columns", "Group By"], 0, "Promote headers."),
      q("Which transformation turns month columns into rows?", ["Unpivot", "Pivot", "Transpose only", "Split Column"], 0, "One row per account per month."),
      q("Where can you see each cleaning action?", ["Applied Steps", "Name Manager", "The ribbon only", "The status bar"], 0, "Click a step to view the data then."),
      q("What language are Power Query steps written in?", ["M", "DAX", "VBA", "C#"], 0, "Visible in the Advanced Editor."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Steps",
          ["A bank CSV has 2 title rows, then headers, dates as dd/mm/yyyy, and a blank row at the end. List the steps to clean it."],
          ["Remove Top Rows (2); Use First Row as Headers; Change Type Using Locale (English (Australia)) for Date; set Amount to Decimal Number; filter out blank rows."],
        ],
        [
          "Exercise 2 — Unpivot",
          ["A budget has 25 accounts and 12 month columns. How many rows after unpivoting?"],
          ["25 × 12 = 300 rows."],
        ],
      ),
    ),
    summary(
      ["Connecting to files, workbooks and folders", "Removing rows, promoting headers and setting types", "Splitting, merging and trimming", "Unpivoting report layouts", "Applied steps and refresh"],
      "Clean data once in Power Query, name the steps, and every future month is just a refresh.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Combining and Shaping Data",
      ["Harbourline has a ledger file for each restaurant every month — 64 files so far — and needs one clean, mapped table. This module combines and shapes them."],
      ["Append monthly files from a folder", "Merge tables as lookups", "Map accounts to report lines", "Group and summarise", "Handle errors and check data quality"],
    ),
    screen(
      "Appending monthly files from a folder",
      steps(
        ["Get Data → Folder", "Point to the Ledger folder (4 restaurants × 16 months from July 2025 to October 2026 — 64 files)."],
        ["Combine & Transform", "Power Query uses a sample file to build the cleaning steps."],
        ["Edit the sample", "Clean the sample file once — the steps apply to every file."],
        ["Keep Source.Name", "It shows which file (restaurant and month) each row came from."],
      ),
      p("Next month Sam drops the November file into the folder and clicks Refresh."),
      caution("Every file in the folder must have the same layout. Keep stray files (notes, old versions) out, or filter them by extension and name."),
    ),
    screen(
      "Merging tables — lookups",
      p("Merge Queries adds columns from another table where key columns match — like XLOOKUP, but for whole tables."),
      table(
        ["Join kind", "Keeps", "Accounting use"],
        [
          ["Left outer (default)", "All rows from the first table, matches from the second", "Add report line to every ledger row"],
          ["Inner", "Only rows that match in both", "Transactions for active accounts only"],
          ["Left anti", "Rows in the first table with no match", "Find accounts missing from the mapping"],
          ["Full outer", "All rows from both", "Compare two lists"],
        ],
      ),
    ),
    screen(
      "Mapping accounts to report lines",
      table(
        ["Account code", "Account", "Report line"],
        [
          ["4100", "Food Sales", "Revenue"],
          ["4200", "Beverage Sales", "Revenue"],
          ["5100", "Food Purchases", "Cost of sales"],
          ["6100", "Wages", "Staff costs"],
          ["6400", "Rent", "Occupancy"],
        ],
      ),
      p("Sam keeps this mapping table in an Excel file the finance team maintains. The ledger is merged with it on Account code (left outer join)."),
      tip("Catch new accounts", "A left anti join of ledger to mapping lists any account with no report line — run it every month so nothing falls out of the P&L."),
    ),
    screen(
      "Grouping and summarising",
      p("Transform → Group By summarises rows, like a PivotTable inside Power Query."),
      table(
        ["Group by", "Operation", "Result"],
        [
          ["Restaurant, Month, Report line", "Sum of Amount", "Monthly P&L lines per restaurant"],
          ["Account code", "Count Rows", "Transactions per account"],
        ],
      ),
      note("In Power BI, it's usually better to load detail rows and summarise with measures. Group in Power Query when the detail isn't needed or is very large."),
    ),
    screen(
      "Errors and data quality checks",
      table(
        ["Tool", "Use"],
        [
          ["View → Column quality", "Shows % valid, error and empty values"],
          ["View → Column distribution / profile", "Distinct and unique counts, value spread"],
          ["Keep Errors", "Isolate rows with errors to investigate"],
          ["Replace Errors", "Substitute a value — only once you know the cause"],
        ],
      ),
      caution("Column profiling is based on the top 1,000 rows by default. Switch to “Column profiling based on entire data set” in the status bar for a full check."),
      p("Sam's control: total of the combined ledger for each month must equal the trial balance movement."),
    ),
    mistakes(
      ["Stray files in the source folder", "Keep the folder clean or filter it."],
      ["Mapping that silently misses accounts", "Use a left anti join check."],
      ["Replacing errors without finding the cause", "Investigate first."],
      ["Trusting profiles on 1,000 rows", "Profile the whole data set."],
    ),
    check(
      3,
      q("Which join keeps all rows from the first table?", ["Left outer", "Inner", "Left anti", "Right anti"], 0, "The default merge."),
      q("Which join finds ledger accounts missing from the mapping table?", ["Left anti", "Inner", "Full outer", "Left outer"], 0, "Rows with no match."),
      q("How do you combine 12 monthly files with the same layout?", ["Get Data → Folder, then Combine", "Copy and paste each", "Merge Queries", "Unpivot"], 0, "Then refresh for new files."),
      q("What does Group By do?", ["Summarises rows by chosen columns", "Splits columns", "Removes errors", "Publishes reports"], 0, "Like a PivotTable."),
      q("Which view shows % valid, error and empty values?", ["Column quality", "Advanced Editor", "Applied Steps", "Data view"], 0, "A data quality check."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Missing accounts",
          ["After merging, 3 ledger rows have a blank report line. How do you find and fix them?"],
          ["Run a left anti join (ledger → mapping) to list the unmapped account codes, add them to the mapping table, and refresh."],
        ],
        [
          "Exercise 2 — Control",
          ["October's combined ledger totals $1,236,500 of revenue; the trial balance shows $1,240,000. What next?"],
          ["Investigate the $3,500 difference before using the report — e.g. a missing file, a filtered row or an unmapped revenue account."],
        ],
      ),
    ),
    summary(
      ["Appending files from a folder", "Merge join kinds", "Account mapping tables", "Group By", "Column quality, errors and control totals"],
      "Combine every file, map every account, and prove the result against the trial balance before anyone sees the report.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Data Models and DAX",
      ["With clean tables loaded, Sam builds a data model and the measures behind every number in the report."],
      ["Separate fact and dimension tables", "Create relationships in a star schema", "Build a date table with a financial year", "Write measures with SUM, CALCULATE and DIVIDE", "Use month-to-date, year-to-date and prior-year measures"],
    ),
    screen(
      "Fact and dimension tables",
      table(
        ["Table", "Type", "Holds"],
        [
          ["Ledger", "Fact", "One row per transaction: date, account code, restaurant, amount"],
          ["Budget", "Fact", "One row per account, restaurant and month"],
          ["Accounts", "Dimension", "Account code, name, report line, sort order"],
          ["Restaurants", "Dimension", "Restaurant, region, manager"],
          ["Date", "Dimension", "Every date, month, quarter and financial year"],
        ],
      ),
      p("Facts hold the numbers; dimensions describe them and are used to filter and group."),
    ),
    screen(
      "Relationships and the star schema",
      p("In a star schema, each fact table sits in the centre, joined to dimension tables around it."),
      bullets(
        "Relationships are one-to-many: one account in Accounts, many rows in Ledger.",
        "Filters flow from the dimension (one side) to the fact (many side).",
        "Both Ledger and Budget connect to the same Accounts, Restaurants and Date tables — so one slicer filters both.",
      ),
      caution("Avoid relating two fact tables directly, and avoid bi-directional filters unless you understand the effect — they can give unexpected totals."),
    ),
    screen(
      "A date table and the financial year",
      p("Time intelligence needs a continuous date table marked as a date table."),
      table(
        ["Column", "DAX (calculated column)"],
        [
          ["Date", "Date = CALENDAR(DATE(2025,7,1), DATE(2027,6,30))"],
          ["Month", "Month = FORMAT('Date'[Date], \"mmm yyyy\")"],
          ["Financial year", "FY = \"FY\" & (YEAR('Date'[Date]) + IF(MONTH('Date'[Date]) >= 7, 1, 0))"],
          ["FY month number", "FY Month = MOD(MONTH('Date'[Date]) - 7, 12) + 1"],
        ],
      ),
      p("For Harbourline, 1 July 2026 to 30 June 2027 is FY2027, and July is FY month 1."),
      tip("Mark as date table", "Table tools → Mark as date table, choosing the Date column."),
    ),
    screen(
      "Core DAX measures",
      table(
        ["Measure", "DAX"],
        [
          ["Amount", "Amount = SUM(Ledger[Amount])"],
          ["Revenue", "Revenue = CALCULATE([Amount], Accounts[Report line] = \"Revenue\")"],
          ["Cost of sales", "Cost of sales = CALCULATE([Amount], Accounts[Report line] = \"Cost of sales\")"],
          ["Gross profit", "Gross profit = [Revenue] - [Cost of sales]"],
          ["Gross margin %", "Gross margin % = DIVIDE([Gross profit], [Revenue])"],
        ],
      ),
      compare(
        ["Measure", "Calculated when used, respecting filters.", ["Totals and ratios", "Preferred for numbers"]],
        ["Calculated column", "Calculated row by row at refresh, stored in the table.", ["Labels and categories", "Used to slice or group"]],
      ),
      note("Sign conventions matter: ledgers often store revenue as negative (credit) amounts. Decide whether to flip signs in Power Query or in measures, and do it once."),
    ),
    screen(
      "Time intelligence",
      table(
        ["Measure", "DAX"],
        [
          ["Revenue MTD", "TOTALMTD([Revenue], 'Date'[Date])"],
          ["Revenue YTD (FY to 30 June)", "TOTALYTD([Revenue], 'Date'[Date], \"6/30\")"],
          ["Revenue prior year", "CALCULATE([Revenue], SAMEPERIODLASTYEAR('Date'[Date]))"],
          ["Growth %", "DIVIDE([Revenue] - [Revenue PY], [Revenue PY])"],
        ],
      ),
      p("October 2026 revenue was $412,000 against $380,000 in October 2025 — growth of 8.4%."),
      caution("Without the \"6/30\" year-end argument, TOTALYTD uses the calendar year and Harbourline's YTD would restart in January."),
    ),
    mistakes(
      ["One flat table for everything", "Use facts and dimensions."],
      ["Using the ledger's dates for time intelligence", "Use a complete, marked date table."],
      ["Calculated columns for totals", "Use measures."],
      ["Forgetting the financial year end", "Add \"6/30\" to YTD functions."],
    ),
    check(
      4,
      q("Which table type holds transactions?", ["Fact", "Dimension", "Date", "Mapping only"], 0, "The numbers to analyse."),
      q("In a one-to-many relationship, filters usually flow from:", ["The dimension to the fact", "The fact to the dimension", "Both ways always", "Neither"], 0, "One side to many side."),
      q("Which function changes the filter context of a calculation?", ["CALCULATE", "SUM", "FORMAT", "DATE"], 0, "The most important DAX function."),
      q("Why use DIVIDE instead of the / operator?", ["It handles division by zero safely", "It's faster to type", "It rounds results", "It converts text"], 0, "Returns blank or an alternate value."),
      q("Which function returns the same period one year earlier?", ["SAMEPERIODLASTYEAR", "TOTALMTD", "CALENDAR", "DIVIDE"], 0, "Used for prior-year comparisons."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Measure",
          ["Write a measure for Staff costs using the Accounts table's Report line."],
          ["Staff costs = CALCULATE([Amount], Accounts[Report line] = \"Staff costs\")."],
        ],
        [
          "Exercise 2 — Financial year",
          ["Which financial year and FY month is 15 March 2027 for Harbourline?"],
          ["FY2027, FY month 9 (July = 1)."],
        ],
      ),
    ),
    summary(
      ["Fact and dimension tables", "Star schema relationships", "A date table with a financial year", "Measures with SUM, CALCULATE and DIVIDE", "MTD, YTD and prior-year measures"],
      "A star schema with a proper date table lets a handful of measures answer almost every finance question.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Building Finance Dashboards in Power BI",
      ["Now Sam designs the report pages the owners will use every month."],
      ["Build profit and loss and balance sheet visuals", "Show budget vs. actual with variance measures", "Build cash and receivables dashboards", "Use slicers, drill-down and tooltips", "Apply design tips for clear finance reports"],
    ),
    screen(
      "Profit and loss visuals",
      table(
        ["Visual", "Use"],
        [
          ["Matrix", "A P&L with report lines in rows and months or restaurants in columns"],
          ["Card / KPI", "Headline numbers — revenue, gross margin %, net profit"],
          ["Waterfall", "Bridge from revenue to net profit, or last year's profit to this year's"],
          ["Line chart", "Monthly revenue trend with prior year"],
        ],
      ),
      tip("Sort report lines", "Add a Sort order column to Accounts and use Sort by column so the P&L shows Revenue, Cost of sales, Gross profit… in the right order — not alphabetically."),
    ),
    screen(
      "Budget vs. actual",
      table(
        ["Measure", "DAX"],
        [
          ["Budget", "Budget = SUM(Budget[Amount])"],
          ["Variance", "Variance = [Revenue] - [Budget Revenue]"],
          ["Variance %", "Variance % = DIVIDE([Variance], [Budget Revenue])"],
        ],
      ),
      table(
        ["October 2026", "Actual", "Budget", "Variance", "%"],
        [["Revenue", "$412,000", "$400,000", "$12,000", "3.0%"]],
        { numeric: [1, 2, 3, 4] },
      ),
      p("Conditional formatting colours the variance column — green when favourable, red when unfavourable. For costs, remember that under budget is favourable."),
      note("The budget is monthly, so compare it at month level or above. Daily budget figures need an allocation rule."),
    ),
    screen(
      "Cash and receivables dashboards",
      bullets(
        "Cash: closing balance by bank account, monthly cash in and out, and a 13-week forecast if available.",
        "Receivables: aging buckets (current, 1–30, 31–60, 61–90, over 90) by customer, with total overdue as a card.",
        "Key ratios: days sales outstanding, current ratio.",
      ),
      p("Harbourline's function-catering customers pay on account, so Sam adds a receivables page showing who owes what and for how long."),
    ),
    screen(
      "Slicers, drill-down and tooltips",
      terms(
        ["Slicers", "Filter the page — by restaurant, financial year or month."],
        ["Drill-down", "Put Year, Quarter and Month in a hierarchy; users click to drill from year to month."],
        ["Drill-through", "Right-click a restaurant to open a detail page filtered to it."],
        ["Tooltips", "Hover to see extra measures — e.g. prior-year revenue and growth — without cluttering the visual."],
      ),
      tip("Sync slicers", "View → Sync slicers keeps the same restaurant and month selected across pages."),
    ),
    screen(
      "Design tips for finance reports",
      bullets(
        "One question per page — e.g. “How did we do against budget?”",
        "Headline cards at the top, detail below.",
        "Consistent colours: one for actual, one for budget, one for prior year.",
        "Show units and periods in titles: “Revenue, $000, FY2027 YTD”.",
        "Avoid pie charts with many slices and 3D effects.",
        "Show the data's “as at” date and a reconciliation status.",
      ),
    ),
    mistakes(
      ["P&L lines sorted alphabetically", "Use a sort order column."],
      ["Comparing daily actuals to monthly budget", "Compare at month level."],
      ["Every visual on one page", "One question per page."],
      ["No date or status shown", "Show “as at” and checks."],
    ),
    check(
      5,
      q("Which visual best shows a P&L by month?", ["Matrix", "Pie chart", "Map", "Gauge"], 0, "Rows and columns like a report."),
      q("Actual $95,000, budget $100,000 for revenue. Variance %?", ["−5%", "5%", "−5.3%", "0%"], 0, "−$5,000 ÷ $100,000."),
      q("How do you keep report lines in P&L order?", ["Sort by a Sort order column", "Sort alphabetically", "Use a pie chart", "Rename lines with numbers only"], 0, "Sort by column."),
      q("Which feature opens a detail page filtered to the item clicked?", ["Drill-through", "Tooltip", "Card", "Bookmark only"], 0, "Right-click → Drill through."),
      q("Which shows extra measures on hover?", ["Tooltips", "Slicers", "Titles", "Gridlines"], 0, "Detail without clutter."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Cost variance",
          ["Wages actual $128,000, budget $120,000. What's the variance and is it favourable?"],
          ["$8,000 over budget — unfavourable (6.7%)."],
        ],
        [
          "Exercise 2 — Page design",
          ["Design the layout of a “Budget vs. actual” page."],
          ["Cards for revenue, gross profit and net profit vs. budget; a matrix of report lines with actual, budget, variance and %; a restaurant slicer and month slicer; a title with period and units."],
        ],
      ),
    ),
    summary(
      ["P&L matrices, cards, waterfalls and trends", "Budget vs. actual measures", "Cash and receivables pages", "Slicers, drill-down, drill-through and tooltips", "Clear finance report design"],
      "Good finance dashboards answer one question per page, in the right order, with consistent colours and clear periods.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Publishing, Refresh and Governance",
      ["The report is built. This module publishes it, keeps it up to date, and controls who sees what."],
      ["Publish to the Power BI service", "Set up scheduled refresh and gateways", "Share with workspaces and apps", "Apply row-level security", "Document and hand over the report"],
    ),
    screen(
      "Publishing to the Power BI service",
      steps(
        ["Save the .pbix file", "In Power BI Desktop."],
        ["Home → Publish", "Choose a workspace, e.g. Finance."],
        ["In the service", "The upload creates a semantic model (dataset) and a report."],
      ),
      note("Sharing and collaborating in the service generally requires Power BI Pro or Premium Per User licences, or content hosted in a Premium/Fabric capacity. Check your organisation's licensing."),
      caution("Never use “Publish to web” for financial data — it creates a public link anyone on the internet can view."),
    ),
    screen(
      "Scheduled refresh and gateways",
      table(
        ["Source location", "Gateway needed?"],
        [
          ["Files on SharePoint or OneDrive for work", "No — the service connects directly"],
          ["Files on a local PC or network drive", "Yes — an on-premises data gateway"],
          ["On-premises database", "Yes"],
          ["Cloud services (e.g. many accounting apps' connectors)", "Usually no"],
        ],
      ),
      p("Harbourline's files are in SharePoint, so Sam sets a daily refresh at 6 am with no gateway. Shared capacity with Pro licences allows up to 8 scheduled refreshes a day."),
      tip("Refresh failure emails", "Turn on failure notifications so someone knows if a refresh fails before the board meeting."),
    ),
    screen(
      "Workspaces and apps",
      table(
        ["Workspace role", "Can"],
        [
          ["Admin", "Everything, including managing access"],
          ["Member", "Publish, edit and share"],
          ["Contributor", "Publish and edit content"],
          ["Viewer", "View and interact only"],
        ],
      ),
      p("Instead of giving everyone workspace access, Sam publishes an app: a packaged, read-only version of the report for the owners and restaurant managers."),
    ),
    screen(
      "Row-level security",
      p("Each restaurant manager should see only their own restaurant."),
      steps(
        ["Create roles in Desktop", "Modeling → Manage roles, e.g. Manager: [Manager email] = USERPRINCIPALNAME() on the Restaurants table."],
        ["Test", "Modeling → View as, to check what each role sees."],
        ["Assign members in the service", "Semantic model → Security → add users or groups to the role."],
      ),
      caution("Row-level security applies to Viewers. Workspace Admins, Members and Contributors can see all the data — keep managers as viewers or app users."),
    ),
    screen(
      "Documentation and handover checklist",
      bullets(
        "Data sources and folder locations, with expected file names and layouts.",
        "Power Query steps renamed and explained.",
        "A list of measures with plain-English definitions.",
        "The reconciliation check to the trial balance, and who signs it off.",
        "Refresh schedule, gateway (if any) and failure contacts.",
        "Who has access, through which role or app, and the RLS rules.",
        "A process for adding new accounts to the mapping table.",
      ),
    ),
    mistakes(
      ["Publish to web for finance data", "It's public — never use it."],
      ["Local files with no gateway", "Move them to SharePoint or install a gateway."],
      ["Giving everyone Member access", "Use Viewer or an app."],
      ["No documentation", "The report dies when its builder leaves."],
    ),
    check(
      6,
      q("Which button sends a report from Desktop to the service?", ["Publish", "Refresh", "Transform Data", "Export"], 0, "On the Home tab."),
      q("When is an on-premises data gateway needed?", ["For files on a local PC or network drive", "For files on SharePoint", "Never", "For every report"], 0, "The service can't reach local files."),
      q("What's a Power BI app?", ["A packaged, read-only version of workspace content", "A mobile game", "A DAX function", "A data source"], 0, "Easy sharing to viewers."),
      q("What does row-level security do?", ["Restricts which rows each user can see", "Encrypts the file", "Hides visuals", "Stops refresh"], 0, "e.g. one restaurant each."),
      q("Why never use Publish to web for finance data?", ["Anyone with the link can see it publicly", "It's slow", "It costs extra", "It can't show tables"], 0, "It's a public embed."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Access",
          ["A restaurant manager needs to see only their restaurant's results. What role and set-up do you use?"],
          ["Share through the app (or Viewer role) and add them to the Manager RLS role, filtered with USERPRINCIPALNAME() against the Restaurants table."],
        ],
        [
          "Exercise 2 — Refresh",
          ["The budget file is moved from SharePoint to Sam's laptop. What happens to scheduled refresh?"],
          ["It fails — the service can't reach a local file without a gateway. Move the file back to SharePoint (preferred) or install a gateway."],
        ],
      ),
    ),
    summary(
      ["Publishing to workspaces", "Scheduled refresh and gateways", "Workspace roles and apps", "Row-level security", "Documentation and handover"],
      "A published report is only finished when it refreshes reliably, shows each person the right data, and is documented for the next person.",
    ),
  ],
}

export default lessons
