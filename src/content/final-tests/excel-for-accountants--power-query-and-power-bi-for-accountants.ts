import { fq } from "@/lib/finalTest"

// Final test bank for Power Query & Power BI for Accountants — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("How long does Sam's manual management pack take each month?", "About 16 hours (two days)", ["1 hour", "40 hours", "30 minutes"], "Export, clean, map and chart by hand."),
  fq("When does Harbourline's financial year end?", "30 June", ["31 December", "31 March", "30 September"], "It runs 1 July to 30 June."),
  fq("Which tool is a free Windows app for building models and reports?", "Power BI Desktop", ["Power BI service", "Power Query only", "Excel Online"], "Publish to the service to share."),
  fq("Where does refreshable reporting pay off?", "From the second month onward", ["Only in the first month", "Never", "Only for large companies"], "The first build takes longer."),
  fq("Which data source usually comes in a report layout with months across columns?", "The budget", ["The ledger export", "Bank files", "Point-of-sale data"], "It needs unpivoting."),
  fq("Before anyone relies on the new report, what must it be reconciled to?", "The trial balance", ["Last year's report", "The budget", "Nothing"], "Build, test, document."),

  // Module 2
  fq("How many title rows does Harbourline's ledger export start with?", "Four", ["One", "None", "Ten"], "Removed with Remove Top Rows."),
  fq("How do you make sure 03/04/2026 is read as 3 April?", "Change Type → Using Locale", ["Trim the column", "Unpivot", "Merge Columns"], "Set an Australian locale."),
  fq("How should \"4100 - Food Sales\" be split?", "Split Column by the delimiter \" - \"", ["Unpivot", "Group By", "Remove Duplicates"], "Into Code and Name."),
  fq("Why keep account codes as text?", "To keep leading zeros and letters", ["To make them sum", "To speed refresh", "DAX requires it"], "0410 shouldn't become 410."),
  fq("Why is Unpivot Other Columns safer than Unpivot Columns for a budget?", "New month columns are included automatically", ["It's faster", "It deletes errors", "It sorts data"], "It names the columns to keep, not to unpivot."),
  fq("What happens if next month's file renames a column a step refers to?", "The refresh fails", ["Nothing", "The column is deleted", "Power Query renames it back"], "Ask for consistent exports."),

  // Module 3
  fq("How many ledger files has Harbourline collected so far?", "64", ["16", "4", "12"], "4 restaurants × 16 months."),
  fq("What does Power Query use to build the steps when combining a folder?", "A sample file", ["The last file only", "A DAX measure", "The budget"], "Steps then apply to every file."),
  fq("Which column shows which file each combined row came from?", "Source.Name", ["Index", "Amount", "Report line"], "Keep it."),
  fq("Which join keeps only rows that match in both tables?", "Inner", ["Left outer", "Left anti", "Full outer"], "Matching rows only."),
  fq("How many rows does column profiling use by default?", "The top 1,000", ["All rows", "The top 100", "The last 1,000"], "Switch to the entire data set."),
  fq("October's combined ledger revenue is $3,500 below the trial balance. What should Sam do?", "Investigate before using the report", ["Publish anyway", "Plug the difference", "Delete October"], "A file, filter or mapping may be missing."),

  // Module 4
  fq("Which table is a dimension in Harbourline's model?", "Restaurants", ["Ledger", "Budget", "Bank transactions"], "It describes and filters the facts."),
  fq("Why connect Ledger and Budget to the same Accounts, Restaurants and Date tables?", "So one slicer filters both", ["To double the totals", "To avoid DAX", "It's required for refresh"], "Shared dimensions."),
  fq("What financial year is 1 July 2026 in for Harbourline?", "FY2027", ["FY2026", "FY2025", "FY2028"], "The year ending 30 June 2027."),
  fq("What argument makes TOTALYTD follow a 30 June year end?", "\"6/30\"", ["\"12/31\"", "\"7/1\"", "\"FY\""], "Otherwise it uses the calendar year."),
  fq("What was Harbourline's October 2026 revenue growth on October 2025?", "8.4%", ["3.0%", "12.0%", "5.0%"], "$412,000 vs. $380,000."),
  fq("Which is better calculated as a measure than a calculated column?", "Gross margin %", ["Financial year label", "Month name", "Report line"], "Ratios must respect filters."),

  // Module 5
  fq("What was Harbourline's October 2026 revenue variance against budget?", "$12,000 favourable (3.0%)", ["$12,000 unfavourable", "$32,000 favourable", "Nil"], "$412,000 vs. $400,000."),
  fq("Which visual shows a bridge from revenue to net profit?", "Waterfall", ["Matrix", "Slicer", "Card"], "Each step up or down."),
  fq("For costs, which variance is favourable?", "Actual under budget", ["Actual over budget", "Any variance", "None"], "Spending less is favourable."),
  fq("Which feature keeps the same restaurant selected across pages?", "Sync slicers", ["Tooltips", "Drill-down", "Bookmarks only"], "View → Sync slicers."),
  fq("Why does Sam add a receivables page?", "Function-catering customers pay on account", ["Restaurants have no cash", "It's required by Power BI", "To show the budget"], "Who owes what and for how long."),
  fq("What should a finance report title show?", "Units and period, e.g. “Revenue, $000, FY2027 YTD”", ["Only the company name", "The builder's name", "Nothing"], "Clear context."),

  // Module 6
  fq("What does publishing create in the service?", "A semantic model (dataset) and a report", ["Only a PDF", "A new workspace", "A gateway"], "From the .pbix file."),
  fq("How often can shared capacity with Pro licences refresh on a schedule?", "Up to 8 times a day", ["Once a week", "Up to 48 times a day", "Every minute"], "More with Premium capacity."),
  fq("Why does Harbourline need no gateway?", "Its files are in SharePoint", ["It has no data", "It uses Publish to web", "Gateways are banned"], "The service connects directly."),
  fq("Which workspace role can view and interact but not edit?", "Viewer", ["Admin", "Member", "Contributor"], "Read-only access."),
  fq("Who is row-level security NOT applied to?", "Workspace Admins, Members and Contributors", ["Viewers", "App users", "Restaurant managers as viewers"], "They see all the data."),
  fq("Which DAX function returns the signed-in user's email for dynamic RLS?", "USERPRINCIPALNAME()", ["TODAY()", "CALCULATE()", "DIVIDE()"], "Matched against a Manager email column."),
]
