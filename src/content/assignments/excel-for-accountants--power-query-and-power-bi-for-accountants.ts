import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Power Query & Power BI for Accountants —
// Harbourline Hospitality's October 2026 report.

const assignment: PracticalAssignment = {
  title: "Build Harbourline's October report",
  period: "October 2026 (FY2027, year ending 30 June)",
  intro:
    "Harbourline's October data is loaded. Work out what each Power BI measure on the October report page should show, and check the Power Query steps.",
  context: [
    p("Harbourline Hospitality Group — four restaurants, financial year ending 30 June."),
    table(
      ["Restaurant", "Revenue Oct 2026", "Revenue Oct 2025", "Budget Oct 2026"],
      [
        ["Harbour", "120,000", "108,000", "115,000"],
        ["Marina", "95,000", "90,000", "100,000"],
        ["Hilltop", "112,000", "101,000", "105,000"],
        ["Riverside", "85,000", "81,000", "80,000"],
      ],
      { numeric: [1, 2, 3] },
    ),
    bullets(
      "Group revenue FY2027 so far: July $380,000, August $395,000, September $401,000, October $412,000.",
      "The budget file has 25 accounts per restaurant with 12 month columns; it's unpivoted in Power Query.",
      "Measures: Revenue, Revenue PY (SAMEPERIODLASTYEAR), Budget, Variance = Revenue − Budget, Variance % = DIVIDE(Variance, Budget), Revenue YTD = TOTALYTD([Revenue], 'Date'[Date], \"6/30\").",
    ),
    note("All figures in dollars."),
  ],
  tasks: [
    num("What does the Revenue card show for October 2026 (all restaurants)?", 412000, "$120,000 + $95,000 + $112,000 + $85,000 = $412,000.", { prefix: "$" }),
    num("What is group growth on October 2025? (%, one decimal)", 8.4, "($412,000 − $380,000) ÷ $380,000 = 8.4%.", { suffix: "%", tolerance: 0.1 }),
    num("What is group Variance against budget?", 12000, "$412,000 − $400,000 = $12,000 favourable.", { prefix: "$" }),
    num("What is Marina's Variance %?", -5, "($95,000 − $100,000) ÷ $100,000 = −5%.", { suffix: "%", tolerance: 0.1 }),
    num("What is Hilltop's growth on last year? (%, one decimal)", 10.9, "($112,000 − $101,000) ÷ $101,000 = 10.9%.", { suffix: "%", tolerance: 0.1 }),
    pick("Which restaurant has the largest favourable variance?", "Hilltop", ["Harbour", "Riverside", "Marina"], "Hilltop +$7,000; Harbour +$5,000; Riverside +$5,000; Marina −$5,000."),
    num("What does Revenue YTD show at October 2026?", 1588000, "July to October: $380,000 + $395,000 + $401,000 + $412,000 = $1,588,000 (the year starts 1 July).", { prefix: "$" }),
    num("How many rows does one restaurant's budget table have after Unpivot Other Columns?", 300, "25 accounts × 12 months = 300 rows.", { suffix: "rows" }),
    pick("Without the \"6/30\" argument, what would TOTALYTD show for October?", "Calendar year-to-date, from January — the wrong total", ["The same result", "An error", "Only October"], "TOTALYTD defaults to a 31 December year end."),
    pick("A restaurant has no budget for a month. What does DIVIDE(Variance, Budget) return?", "Blank, instead of an error", ["#DIV/0!", "Zero always", "Infinity"], "DIVIDE handles division by zero safely."),
  ],
  references: [
    ref("Microsoft Learn — TOTALYTD (DAX)", "https://learn.microsoft.com/en-us/dax/totalytd-function-dax"),
    ref("Microsoft Learn — DIVIDE (DAX)", "https://learn.microsoft.com/en-us/dax/divide-function-dax"),
    ref("Microsoft Learn — Unpivot columns in Power Query", "https://learn.microsoft.com/en-us/power-query/unpivot-column"),
  ],
}

export default assignment
