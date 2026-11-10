import type { PracticalAssignment } from "@/lib/lessonTypes"
import { note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Inventory Accounting and Valuation — Maple Ridge
// Furniture's October lamp inventory.

const assignment: PracticalAssignment = {
  title: "Value Maple Ridge's October lamp inventory",
  period: "October 2026",
  intro:
    "Track Maple Ridge Furniture's imported table lamps through October. Cost the sales under FIFO and weighted average, adjust for the stock count and test for net realisable value.",
  context: [
    p("Maple Ridge resells imported table lamps at $45 each. It uses FIFO in its perpetual system."),
    table(
      ["Date", "Movement", "Units", "Unit cost"],
      [
        ["1 Oct", "Opening inventory", "40", "$20"],
        ["5 Oct", "Purchase", "100", "$22"],
        ["12 Oct", "Sale", "90", ""],
        ["18 Oct", "Purchase", "60", "$24"],
        ["25 Oct", "Sale", "70", ""],
      ],
    ),
    table(
      ["31 October", "Detail"],
      [
        ["Physical count", "38 lamps (the books show 40)"],
        ["Market update", "A competitor's launch means the lamps will now sell for $23, with $3 selling costs per lamp"],
      ],
    ),
    note("For the weighted average task, use the periodic weighted average for the month."),
  ],
  tasks: [
    num("What is October's sales revenue for lamps?", 7200, "160 lamps × $45 = $7,200.", { prefix: "$" }),
    num("What is the FIFO cost of the 12 October sale?", 1900, "40 × $20 + 50 × $22 = $1,900.", { prefix: "$" }),
    num("What is FIFO cost of goods sold for October (before the count adjustment)?", 3480, "$1,900 + (50 × $22 + 20 × $24 = $1,580) = $3,480.", { prefix: "$" }),
    num("What is the FIFO gross profit for October (before the count adjustment)?", 3720, "$7,200 − $3,480 = $3,720.", { prefix: "$" }),
    num("What is the cost of the 2 missing lamps under FIFO?", 48, "Remaining lamps all cost $24: 2 × $24 = $48 — expense it as shrinkage.", { prefix: "$" }),
    num("What is the FIFO value of the 38 lamps counted, before any NRV test?", 912, "38 × $24 = $912.", { prefix: "$" }),
    num("What is the periodic weighted average cost per lamp? (two decimals)", 22.2, "($800 + $2,200 + $1,440) ÷ 200 lamps = $22.20.", { prefix: "$", tolerance: 0.01 }),
    num("What is weighted average cost of goods sold for the 160 lamps sold?", 3552, "160 × $22.20 = $3,552.", { prefix: "$" }),
    num("What is the net realisable value per lamp?", 20, "$23 selling price − $3 selling costs = $20.", { prefix: "$" }),
    num("What write-down is needed on the 38 lamps (FIFO)?", 152, "Lower of cost ($24) and NRV ($20): ($24 − $20) × 38 = $152.", { prefix: "$" }),
    pick("Under IFRS, which cost formula could Maple Ridge NOT use?", "LIFO", ["FIFO", "Weighted average", "Specific identification for unique items"], "IAS 2 prohibits LIFO."),
  ],
  references: [
    ref("IFRS Foundation — IAS 2 Inventories", "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/", "cost formulas and net realisable value"),
    ref("IRS — Publication 538, Accounting Periods and Methods", "https://www.irs.gov/publications/p538", "US inventory methods"),
  ],
}

export default assignment
