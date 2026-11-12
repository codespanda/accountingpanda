import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for US Accounting — closing Bluebird Candle Co.'s
// December 2026 books and year-end.

const assignment: PracticalAssignment = {
  title: "Close Bluebird's December 2026 books",
  period: "December 2026",
  intro:
    "Megan is closing Bluebird Candle Co.'s books for December and the 2026 year. Record sales tax, decide the year's Forms 1099, make the year-end adjustments and prepare the S corporation figures for the CPA.",
  context: [
    p("Bluebird is an LLC taxed as an S corporation in Austin, Texas (sales tax 8.25%). Elena owns 60% and Marcus 40%."),
    table(
      ["December activity", "Amount"],
      [
        ["Taxable store sales in Austin", "$42,000"],
        ["Wholesale sales to Texas gift shops with resale certificates", "$6,500"],
        ["Online sales shipped to other states (no nexus outside Texas)", "$9,000"],
        ["December electricity, billed in January", "$640"],
      ],
    ),
    table(
      ["Payee in 2026", "Type", "Paid"],
      [
        ["Product photographer", "Individual", "$2,400"],
        ["Graphic designer", "Individual", "$1,500"],
        ["Law firm (LLP) — legal services", "Partnership", "$2,800"],
        ["Cleaning company", "Corporation", "$4,800"],
        ["Store landlord", "Individual", "$24,000 rent"],
      ],
    ),
    bullets(
      "Insurance of $4,800 for 12 months was paid on 1 October 2026 and recorded as prepaid.",
      "A $12,000 pouring machine was bought and placed in service on 1 July 2026 (5-year straight-line for the books).",
      "Ordinary business income for 2026 is $150,000.",
    ),
    note("Use 2026 rules: Form 1099 threshold $2,000; 100% bonus depreciation for property acquired after 19 January 2025."),
  ],
  tasks: [
    num("How much Texas sales tax did Bluebird collect on December store sales?", 3465, "$42,000 × 8.25% = $3,465.", { prefix: "$" }),
    num("How much cash did the store sales bring in, including tax?", 45465, "$42,000 + $3,465 = $45,465.", { prefix: "$" }),
    num("How much sales tax applies to the wholesale sales?", 0, "Sales for resale with resale certificates are exempt.", { prefix: "$", tolerance: 0 }),
    pick("By when must Bluebird file and pay December's Texas sales tax?", "January 20, 2027", ["December 31, 2026", "January 31, 2027", "April 15, 2027"], "Texas returns are due on the 20th of the next month."),
    num("How many Forms 1099-NEC must Bluebird issue for 2026?", 2, "Photographer ($2,400) and law firm ($2,800 legal services). The designer is under $2,000 and the cleaning company is a corporation.", { tolerance: 0 }),
    pick("Which form reports the $24,000 rent?", "Form 1099-MISC", ["Form 1099-NEC", "Form W-2", "No form"], "Rent paid to an individual landlord."),
    num("How much insurance expense belongs to October–December 2026?", 1200, "$4,800 ÷ 12 × 3 = $1,200.", { prefix: "$" }),
    num("What is the prepaid insurance balance at 31 December 2026?", 3600, "$4,800 − $1,200 = $3,600.", { prefix: "$" }),
    num("What is the 2026 book depreciation on the pouring machine?", 1200, "$12,000 ÷ 5 × 6/12 = $1,200.", { prefix: "$" }),
    num("What is the 2026 tax deduction for the machine using 100% bonus depreciation?", 12000, "Acquired after 19 January 2025, so fully deductible.", { prefix: "$" }),
    pick("What's the year-end entry for December electricity?", "Dr Utilities $640 / Cr Accrued liabilities $640", ["No entry until paid", "Dr Accrued liabilities / Cr Utilities", "Dr Prepaid / Cr Cash"], "Accrue the expense when incurred."),
    num("What is Elena's share of ordinary business income on her K-1?", 90000, "60% × $150,000 = $90,000.", { prefix: "$" }),
    pick("By when must Bluebird's 2026 Form 1120-S be filed?", "March 15, 2027", ["January 31, 2027", "April 15, 2027", "June 15, 2027"], "Calendar-year S corporations file by March 15."),
  ],
  references: [
    ref("IRS — About Form 1099-NEC", "https://www.irs.gov/forms-pubs/about-form-1099-nec", "Reporting nonemployee compensation"),
    ref("IRS — Publication 946, How to Depreciate Property", "https://www.irs.gov/publications/p946", "Section 179 and bonus depreciation"),
    ref("IRS — Publication 583, Starting a Business and Keeping Records", "https://www.irs.gov/publications/p583", "Records and entity types"),
    ref("Texas Comptroller — Sales and Use Tax", "https://comptroller.texas.gov/taxes/sales/", "Rates and due dates"),
    ref("FASB — Accounting Standards Codification", "https://www.fasb.org", "US GAAP"),
  ],
}

export default assignment
