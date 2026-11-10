import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Excel Mastery for Accountants — Copperleaf
// Trading's October receivables workbook.

const assignment: PracticalAssignment = {
  title: "Build Copperleaf's October receivables workbook",
  period: "October 2026 (report date 31 October 2026)",
  intro:
    "Copy Copperleaf Trading's October invoice list into Excel as a Table named Invoices, then use the formulas from the course to answer the questions. Each answer is a formula result.",
  context: [
    p("Copperleaf Trading Co. — kitchenware wholesaler. Report date (named ReportDate): 31/10/2026."),
    table(
      ["Number", "Customer", "Amount", "Due date", "Status"],
      [
        ["INV-101", "Café Rosa", "4,200", "15/09/2026", "Unpaid"],
        ["INV-102", "Bean & Co", "2,800", "30/09/2026", "Unpaid"],
        ["INV-103", "Café Rosa", "3,100", "10/10/2026", "Unpaid"],
        ["INV-104", "Urban Eats", "6,500", "05/11/2026", "Unpaid"],
        ["INV-105", "Bean & Co", "1,900", "20/08/2026", "Unpaid"],
        ["INV-106", "Urban Eats", "5,000", "25/10/2026", "Unpaid"],
        ["INV-107", "Café Rosa", "2,400", "15/11/2026", "Unpaid"],
        ["INV-108", "Green Fork", "3,600", "01/07/2026", "Unpaid"],
        ["INV-109", "Green Fork", "1,700", "10/10/2026", "Paid"],
        ["INV-110", "Bean & Co", "2,200", "31/10/2026", "Unpaid"],
      ],
      { numeric: [2] },
    ),
    bullets(
      "Days overdue = MAX(0, ReportDate − Due date) for unpaid invoices.",
      "Buckets: Current (0), 1–30, 31–60, 61–90, Over 90.",
    ),
    note("Dates are dd/mm/yyyy."),
  ],
  tasks: [
    num("=SUMIFS(Invoices[Amount], Invoices[Status], \"Unpaid\") — what's the result?", 31700, "All unpaid invoices: $31,700 (INV-109 is excluded).", { prefix: "$" }),
    num("Total unpaid for Café Rosa (SUMIFS with two conditions)?", 9700, "$4,200 + $3,100 + $2,400 = $9,700.", { prefix: "$" }),
    num("How many unpaid invoices are overdue at the report date (COUNTIFS on days overdue > 0)?", 6, "INV-101, 102, 103, 105, 106 and 108. INV-110 is due on the report date, so not yet overdue.", { suffix: "invoices" }),
    num("How many days overdue is INV-105?", 72, "31 Oct − 20 Aug = 72 days.", { suffix: "days" }),
    num("What is the total in the 31–60 days bucket?", 7000, "INV-101 (46 days) $4,200 + INV-102 (31 days) $2,800 = $7,000.", { prefix: "$" }),
    num("What is the total in the Over 90 bucket?", 3600, "INV-108 is 122 days overdue — $3,600.", { prefix: "$" }),
    pick("What does =XLOOKUP(\"INV-106\", Invoices[Number], Invoices[Customer]) return?", "Urban Eats", ["Café Rosa", "#N/A", "5,000"], "It finds INV-106 and returns the matching customer."),
    num("How many customers does =ROWS(UNIQUE(Invoices[Customer])) return?", 4, "Café Rosa, Bean & Co, Urban Eats and Green Fork.", { suffix: "customers" }),
    pick("What does =EOMONTH(\"15/10/2026\", 0) return?", "31/10/2026", ["01/10/2026", "15/11/2026", "30/10/2026"], "The last day of the same month."),
    num("Copperleaf considers a $30,000 van loan at 6% a year over 36 months. What does =PMT(6%/12, 36, -30000) return? (two decimals)", 912.66, "Monthly payment $912.66.", { prefix: "$", tolerance: 0.01 }),
  ],
  references: [
    ref("Microsoft Support — XLOOKUP function", "https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929"),
    ref("Microsoft Support — SUMIFS function", "https://support.microsoft.com/en-us/office/sumifs-function-c9e748f5-7ea7-455d-9406-611cebce642b"),
    ref("Microsoft Support — PMT function", "https://support.microsoft.com/en-us/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441"),
  ],
}

export default assignment
