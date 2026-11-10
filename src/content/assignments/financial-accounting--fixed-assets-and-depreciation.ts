import type { PracticalAssignment } from "@/lib/lessonTypes"
import { note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Fixed Assets and Depreciation — Ironbark
// Logistics' March fixed asset transactions.

const assignment: PracticalAssignment = {
  title: "Update Ironbark Logistics' fixed asset register for March",
  period: "March 2026",
  intro:
    "Record Ironbark Logistics' March fixed asset activity — a new truck, a disposal, repairs versus improvements, three depreciation methods and an impairment.",
  context: [
    p("Ironbark Logistics runs warehouses and a truck fleet. It depreciates monthly from the month an asset is ready for use."),
    table(
      ["March 2026 item", "Detail"],
      [
        ["New truck, ready for use 1 March", "Price $90,000; delivery $2,000; annual registration $1,500; racking fitted before use $8,000. Residual value $10,000; 6-year life; straight-line."],
        ["Forklift sold, 15 March", "Cost $40,000; accumulated depreciation $28,000; sold for $15,000 cash"],
        ["Warehouse works", "Roof leak repair $6,000; new mezzanine floor adding storage space $25,000"],
        ["Server bought 1 April 2025", "Cost $12,000; 40% reducing balance a year"],
        ["Delivery van", "Cost $60,000; nil residual; expected to run 200,000 km; 3,500 km driven in March"],
        ["Idle trailer", "Carrying amount $30,000; recoverable amount now $22,000"],
      ],
    ),
    note("Round to the nearest dollar."),
  ],
  tasks: [
    num("What is the truck's capitalised cost?", 100000, "$90,000 + delivery $2,000 + racking $8,000 = $100,000. Registration is a running cost — expense it.", { prefix: "$" }),
    num("What is the truck's depreciation for March?", 1250, "($100,000 − $10,000) ÷ 6 ÷ 12 = $1,250.", { prefix: "$" }),
    num("What is the gain or loss on the forklift sale? (Enter a loss as a negative number)", 3000, "Carrying amount $40,000 − $28,000 = $12,000. Proceeds $15,000. Gain $3,000.", { prefix: "$" }),
    pick("How should the warehouse works be recorded?", "Expense the $6,000 repair; capitalise the $25,000 mezzanine", ["Capitalise both", "Expense both", "Capitalise the repair; expense the mezzanine"], "Repairs maintain the asset; the mezzanine adds capacity and future benefits."),
    num("What is the server's depreciation for its first year (to 31 March 2026)?", 4800, "40% × $12,000 = $4,800.", { prefix: "$" }),
    num("What will the server's depreciation be in its second year?", 2880, "40% × ($12,000 − $4,800) = $2,880.", { prefix: "$" }),
    num("What is the van's depreciation for March (units of production)?", 1050, "$60,000 ÷ 200,000 km = $0.30 a km × 3,500 km = $1,050.", { prefix: "$" }),
    num("What impairment loss should be recognised on the trailer?", 8000, "$30,000 carrying amount − $22,000 recoverable amount = $8,000.", { prefix: "$" }),
    pick("After the impairment, how is the trailer depreciated?", "On the new carrying amount of $22,000 over its remaining life", ["On the original cost", "It's no longer depreciated", "On $30,000"], "Depreciation is revised after an impairment (IAS 36)."),
  ],
  references: [
    ref("IFRS Foundation — IAS 16 Property, Plant and Equipment", "https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/", "cost, depreciation and disposals"),
    ref("IFRS Foundation — IAS 36 Impairment of Assets", "https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/"),
    ref("IRS — Publication 946, How to Depreciate Property", "https://www.irs.gov/publications/p946", "US tax depreciation for comparison"),
  ],
}

export default assignment
