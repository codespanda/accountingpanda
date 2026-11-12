import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Property Accounting in the US — Lone Star Property
// Management's November 2026 month-end.

const assignment: PracticalAssignment = {
  title: "Close Lone Star's November 2026 books",
  period: "November 2026",
  intro:
    "Rachel is closing November 2026 for the Alamo Heights fourplex and preparing Mission Plaza's 2026 CAM figures. Record rent and deposits, prepare Dr. Shah's owner statement, and work out depreciation and the CAM true-up.",
  context: [
    p("Lone Star charges Dr. Shah a management fee of 8% of rent collected (not late fees). November has 30 days."),
    table(
      ["Unit", "November", "Amount"],
      [
        ["A", "Rent paid on time", "$1,500"],
        ["B", "Rent paid on time", "$1,450"],
        ["C", "Rent paid on the 8th, plus the lease's $75 late fee", "$1,600 + $75"],
        ["D", "New tenant from 15 November at $1,500 a month; deposit $1,500", "Prorated rent + deposit"],
      ],
    ),
    bullets(
      "A plumber (sole proprietor) was paid $650 from trust for a repair at Unit B.",
      "Deposits held before November: Units A–C total $4,400.",
      "The fourplex was bought for $600,000; the county assessor allocates 20% to land.",
      "Mission Plaza: Taco Loco leases 2,400 of 12,000 sq ft (NNN); actual 2026 CAM is $96,000; it paid estimates of $1,500 a month.",
    ),
    note("Answer under the property accounting and tax rules covered in the course."),
  ],
  tasks: [
    num("What is Unit D's prorated November rent?", 800, "16 days (15–30 November) ÷ 30 × $1,500 = $800.", { prefix: "$" }),
    num("What is total rent collected for November?", 5350, "$1,500 + $1,450 + $1,600 + $800 = $5,350.", { prefix: "$" }),
    num("What is Lone Star's management fee?", 428, "8% × $5,350 = $428.", { prefix: "$" }),
    num("What is the distribution to Dr. Shah?", 4347, "$5,350 + $75 − $428 − $650 = $4,347.", { prefix: "$" }),
    num("What total security deposits does Lone Star hold for the fourplex at 30 November?", 5900, "$4,400 + $1,500 = $5,900.", { prefix: "$" }),
    pick("How is Unit D's $1,500 deposit recorded?", "Dr Trust cash / Cr Security deposits held", ["Dr Trust cash / Cr Rent revenue", "Dr Owner distribution / Cr Cash", "Not recorded"], "Deposits are liabilities."),
    num("What is the fourplex's depreciable building basis?", 480000, "$600,000 × 80% = $480,000.", { prefix: "$" }),
    num("What is a full year's depreciation on the building?", 17455, "$480,000 ÷ 27.5 = $17,455.", { prefix: "$" }),
    num("What is Taco Loco's share of 2026 actual CAM?", 19200, "2,400 ÷ 12,000 = 20% × $96,000 = $19,200.", { prefix: "$" }),
    num("How much does Taco Loco owe (or get back) at the year-end CAM reconciliation? Enter a negative number for a refund.", 1200, "$19,200 − $18,000 estimates = $1,200 due from the tenant.", { prefix: "$" }),
    pick("Unit B later moves out with $200 of damage beyond normal wear. By when must the refund be sent in Texas?", "Within 30 days after surrender, with an itemised list", ["Within 7 days", "Within 90 days", "At lease renewal"], "Texas Property Code."),
    pick("Which form will Lone Star issue to Dr. Shah for 2026 rents?", "Form 1099-MISC", ["Form 1099-NEC", "Form W-2", "No form"], "Rents passed to the owner by a property manager."),
  ],
  references: [
    ref("IRS — Publication 527, Residential Rental Property", "https://www.irs.gov/publications/p527", "Rental income, expenses and depreciation"),
    ref("IRS — Publication 946, How to Depreciate Property", "https://www.irs.gov/publications/p946", "27.5- and 39-year recovery periods"),
    ref("IRS — Like-kind exchanges (Section 1031)", "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips", "45- and 180-day rules"),
    ref("Texas Property Code, Chapter 92 — Residential Tenancies", "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm", "Security deposit refunds"),
    ref("FASB — Accounting Standards Codification", "https://www.fasb.org", "ASC 842 Leases"),
  ],
}

export default assignment
