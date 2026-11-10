import type { PracticalAssignment } from "@/lib/lessonTypes"
import { note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Advanced Bookkeeping and Adjusting Entries —
// Granite Peak Outfitters' December year-end adjustments.

const assignment: PracticalAssignment = {
  title: "Post Granite Peak Outfitters' year-end adjustments",
  period: "December 2026 (year end 31 December)",
  intro:
    "Granite Peak Outfitters' unadjusted net income for 2026 is $86,000. Work through the year-end adjustments and corrections to reach the final figure.",
  context: [
    p("Granite Peak Outfitters sells outdoor gear and keeps its books on the accrual basis."),
    table(
      ["Year-end item", "Information"],
      [
        ["Equipment", "Cost $60,000, residual value $6,000, 9-year life, straight-line. No depreciation recorded for 2026 yet."],
        ["Insurance", "Paid $4,800 on 1 September 2026 for 12 months; all recorded as prepaid insurance."],
        ["Gift cards", "$9,000 sold during the year, all recorded as unearned revenue. $5,500 have been redeemed."],
        ["Bank loan", "$40,000 at 6% a year, taken on 1 October 2026. No interest recorded or paid yet."],
        ["Receivables", "Accounts receivable $50,000. Required allowance 4%. Current allowance balance $800."],
        ["Inventory", "A line of tents costs $7,000 but can now only be sold for $4,500 (net realisable value)."],
        ["Wages", "Three days' wages earned but unpaid at year end — $2,400."],
        ["Error", "A $1,800 repair was recorded as equipment instead of repairs expense."],
      ],
    ),
    note("Treat each item independently. Ignore tax."),
  ],
  tasks: [
    num("What is 2026 depreciation on the equipment?", 6000, "($60,000 − $6,000) ÷ 9 = $6,000.", { prefix: "$" }),
    num("What insurance expense belongs to 2026?", 1600, "$4,800 × 4 ÷ 12 (September–December) = $1,600.", { prefix: "$" }),
    num("What prepaid insurance remains at 31 December?", 3200, "$4,800 − $1,600 = $3,200.", { prefix: "$" }),
    num("How much gift card revenue should be recognised?", 5500, "Recognise the $5,500 redeemed. $3,500 stays as unearned revenue.", { prefix: "$" }),
    num("What interest should be accrued on the loan?", 600, "$40,000 × 6% × 3 ÷ 12 = $600.", { prefix: "$" }),
    num("What bad debt expense is needed?", 1200, "Required allowance 4% × $50,000 = $2,000; existing $800; top up $1,200.", { prefix: "$" }),
    num("What inventory write-down is needed?", 2500, "Lower of cost ($7,000) and NRV ($4,500): write down $2,500.", { prefix: "$" }),
    pick("Which entry corrects the repair error?", "Dr Repairs expense $1,800, Cr Equipment $1,800", ["Dr Equipment $1,800, Cr Repairs expense $1,800", "No entry — it's immaterial", "Dr Depreciation $1,800, Cr Cash $1,800"], "The repair maintains the asset rather than improving it, so it's an expense."),
    num("What is Granite Peak's adjusted net income for 2026?", 75400, "$86,000 − 6,000 − 1,600 + 5,500 − 600 − 1,200 − 2,500 − 2,400 − 1,800 = $75,400.", { prefix: "$" }),
  ],
  references: [
    ref("IFRS Foundation — IAS 2 Inventories", "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/", "lower of cost and net realisable value"),
    ref("IFRS Foundation — IAS 16 Property, Plant and Equipment", "https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/", "depreciation and repairs"),
    ref("IRS — Publication 946, How to Depreciate Property", "https://www.irs.gov/publications/p946"),
  ],
}

export default assignment
