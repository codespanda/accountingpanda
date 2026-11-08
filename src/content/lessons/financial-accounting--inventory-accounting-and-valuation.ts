import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Inventory Accounting and Valuation — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "Types of inventory",
      table(
        ["Type", "What it is", "Example (furniture maker)"],
        [
          ["Raw materials", "Inputs waiting to be used", "Timber, screws, fabric"],
          ["Work in progress", "Partly finished goods", "Frames being assembled"],
          ["Finished goods", "Ready for sale", "Completed sofas"],
          ["Goods for resale", "Bought to sell unchanged (retailers)", "Cushions bought from a supplier"],
        ],
      ),
    ),
    screen(
      "Inventory, cost of goods sold and gross profit",
      example(
        [["Opening inventory", "$45,000"], ["Add: purchases", "$310,000"], ["Less: closing inventory", "($55,000)"]],
        ["Cost of goods sold", "$300,000"],
      ),
      p("Every dollar of overstated closing inventory understates cost of goods sold — and overstates profit — by a dollar. That's why inventory valuation matters so much."),
      compare(
        ["Perpetual system", "Inventory and COGS are updated with every purchase and sale.", ["Real-time stock levels", "Counts confirm the records"]],
        ["Periodic system", "Purchases are recorded as they happen; COGS is calculated at period end from a stock count.", ["Simpler", "No running stock figure"]],
      ),
    ),
    screen(
      "Ownership and cut-off",
      terms(
        ["Goods in transit — FOB shipping point / similar terms", "Ownership (control) passes when goods leave the seller. The buyer includes them in inventory while in transit."],
        ["Goods in transit — FOB destination / similar terms", "Control passes on arrival. The seller keeps them in inventory until delivered."],
        ["Consignment stock", "Goods held by a retailer but still owned by the supplier. The supplier (consignor) includes them; the retailer doesn't."],
      ),
      caution("Count what you own, not just what's in the building — and exclude customers' goods held for collection if already sold."),
    ),
    check(
      1,
      q("Partly assembled furniture frames are:", ["Raw materials", "Work in progress", "Finished goods", "Fixed assets"], 1, "They're partly finished."),
      q("Opening $45,000, purchases $310,000, closing $55,000. What's COGS?", ["$300,000", "$320,000", "$410,000", "$255,000"], 0, "$45,000 + $310,000 − $55,000."),
      q("If closing inventory is overstated, profit is:", ["Understated", "Overstated", "Unchanged", "Zero"], 1, "COGS is understated, so profit is overstated."),
      q("Goods shipped FOB shipping point are in transit at year-end. Who includes them?", ["The seller", "The buyer", "Neither", "The carrier"], 1, "Control passed when they left the seller."),
      q("Who includes consignment stock in inventory?", ["The retailer holding it", "The supplier who owns it", "Both", "Neither"], 1, "Ownership stays with the consignor."),
    ),
  ],
  1: [
    screen(
      "Purchase costs",
      table(
        ["Item", "Include in inventory cost?"],
        [
          ["Purchase price", "Yes"],
          ["Import duties and non-recoverable taxes", "Yes"],
          ["Freight in and handling", "Yes"],
          ["Trade discounts and rebates", "Deduct"],
          ["Recoverable GST, VAT or sales tax", "No"],
        ],
      ),
      example(
        [["Price 1,000 units × $18", "$18,000"], ["Freight in", "$900"], ["Import duty", "$1,100"], ["Less: trade discount", "($1,000)"]],
        ["Total cost — $19 per unit", "$19,000"],
      ),
    ),
    screen(
      "Conversion costs and costs to expense",
      terms(
        ["Direct labour", "Wages of staff who make the product."],
        ["Variable production overheads", "Indirect materials, power for machines — allocated on actual production."],
        ["Fixed production overheads", "Factory rent and depreciation — allocated based on normal production capacity, so idle capacity isn't added to inventory."],
      ),
      h("Always expense"),
      bullets(
        "Abnormal waste of materials, labour or overheads.",
        "Storage costs, unless needed in the production process.",
        "Administrative overheads unrelated to production.",
        "Selling and distribution costs.",
      ),
    ),
    screen(
      "Standard cost and retail methods",
      compare(
        ["Standard cost", "Inventory valued at pre-set standard costs, with variances analysed. Acceptable if standards are close to actual and reviewed regularly.", ["Common in manufacturing"]],
        ["Retail method", "Cost estimated by reducing the selling price by the gross margin percentage. Used by retailers with many fast-moving items.", ["Common in retail"]],
      ),
      example(
        [["Closing stock at selling price", "$80,000"], ["Average gross margin", "35%"]],
        ["Estimated cost = $80,000 × 65%", "$52,000"],
      ),
    ),
    check(
      2,
      q("Which is included in inventory cost?", ["Freight in", "Selling costs", "Recoverable GST", "Admin salaries"], 0, "Freight to bring goods in is a purchase cost."),
      q("1,000 units: $18,000 price, $900 freight, $1,100 duty, $1,000 discount. Cost per unit?", ["$18", "$19", "$20", "$21"], 1, "$19,000 ÷ 1,000."),
      q("Fixed production overheads are allocated based on:", ["Actual sales", "Normal production capacity", "Selling prices", "Number of staff"], 1, "Idle capacity isn't added to inventory."),
      q("Abnormal waste of materials is:", ["Added to inventory", "Expensed", "Deferred", "Revenue"], 1, "Abnormal amounts aren't inventory cost."),
      q("Stock at selling price $80,000 with a 35% margin. Estimated cost under the retail method?", ["$28,000", "$52,000", "$80,000", "$108,000"], 1, "$80,000 × 65%."),
    ),
  ],
  2: [
    screen(
      "The example",
      table(
        ["Event", "Units", "Cost per unit", "Total"],
        [
          ["Opening inventory", "100", "$10", "$1,000"],
          ["Purchase 1", "200", "$12", "$2,400"],
          ["Purchase 2", "100", "$15", "$1,500"],
          ["Available for sale", "400", "", "$4,900"],
        ],
        { numeric: [1, 2, 3] },
      ),
      p("During the period, 250 units are sold at $20 each — revenue $5,000. 150 units remain. (This uses the periodic approach for simplicity.)"),
    ),
    screen(
      "FIFO, weighted average and LIFO",
      table(
        ["Formula", "Cost of goods sold", "Closing inventory", "Gross profit"],
        [
          ["FIFO (first in, first out)", "100 × $10 + 150 × $12 = $2,800", "$2,100", "$2,200"],
          ["Weighted average ($4,900 ÷ 400 = $12.25)", "250 × $12.25 = $3,062.50", "$1,837.50", "$1,937.50"],
          ["LIFO (last in, first out)", "100 × $15 + 150 × $12 = $3,300", "$1,600", "$1,700"],
        ],
      ),
      terms(["Specific identification", "Used for items that aren't interchangeable, such as cars, jewellery or custom projects — each item's actual cost is tracked."]),
    ),
    screen(
      "Rules and effects on profit and tax",
      table(
        ["Formula", "US GAAP", "IFRS / Ind AS / AASB"],
        [
          ["FIFO", "Allowed", "Allowed"],
          ["Weighted average", "Allowed", "Allowed"],
          ["Specific identification", "Allowed (non-interchangeable items)", "Required for non-interchangeable items"],
          ["LIFO", "Allowed", "Not allowed"],
        ],
      ),
      bullets(
        "When prices are rising, FIFO gives the highest profit and closing inventory; LIFO gives the lowest profit (and, in the US, lower taxable income).",
        "In the US, a business using LIFO for tax must generally also use it in its financial statements (the LIFO conformity rule).",
        "Use the same formula for inventories of a similar nature and use consistently.",
      ),
    ),
    check(
      3,
      q("Under FIFO in the example, what's COGS?", ["$2,800", "$3,062.50", "$3,300", "$4,900"], 0, "Oldest costs are expensed first."),
      q("What's the weighted average cost per unit?", ["$12.00", "$12.25", "$12.33", "$15.00"], 1, "$4,900 ÷ 400."),
      q("When prices rise, which formula gives the highest gross profit?", ["FIFO", "LIFO", "Weighted average", "All equal"], 0, "Older, cheaper costs go to COGS."),
      q("Is LIFO allowed under IFRS?", ["Yes", "No", "Only for retailers", "Only in India"], 1, "IFRS and Ind AS prohibit LIFO."),
      q("Which method suits custom-built yachts?", ["LIFO", "FIFO", "Specific identification", "Retail method"], 2, "Each yacht is unique."),
    ),
  ],
  3: [
    screen(
      "Lower of cost and net realisable value",
      p("Inventory is measured at the lower of cost and net realisable value (NRV). NRV is the estimated selling price less estimated costs to complete and sell."),
      example(
        [["Cost per unit", "$40"], ["Estimated selling price", "$45"], ["Less: costs to complete and sell", "($8)"], ["NRV per unit", "$37"]],
        ["Write-down per unit", "$3"],
      ),
      p("For 500 units, the write-down is $1,500:"),
      journal([["Cost of goods sold — inventory write-down", "$1,500", ""], ["Inventory (or inventory provision)", "", "$1,500"]], "$1,500"),
      note("US GAAP uses lower of cost and NRV for FIFO and average cost, but lower of cost or market for LIFO and the retail method."),
    ),
    screen(
      "Slow-moving, damaged and obsolete stock",
      table(
        ["Indicator", "Action"],
        [
          ["No sales in 12 months", "Assess NRV; consider a provision"],
          ["Damaged or expired goods", "Write down to scrap or salvage value"],
          ["Superseded models", "Estimate discounted selling prices"],
          ["Selling prices falling below cost", "Write down to NRV"],
        ],
      ),
      tip("Use an aged stock report", "Provision percentages by age band (e.g. 25% for 12–18 months, 50% for 18–24, 100% over 24) give a consistent starting point — then adjust for known facts."),
    ),
    screen(
      "Reversing write-downs",
      compare(
        ["IFRS / Ind AS / AASB", "If the circumstances causing a write-down no longer exist, reverse it — but not above original cost.", ["Reversal reduces COGS"]],
        ["US GAAP", "A write-down creates a new cost basis. It isn't reversed in later periods.", ["No reversals"]],
      ),
      caution("Provisions should be based on evidence, not used to smooth profit between years."),
    ),
    check(
      4,
      q("Inventory is measured at:", ["Selling price", "The lower of cost and net realisable value", "Replacement cost", "The higher of cost and NRV"], 1, "Never above what you expect to recover."),
      q("Cost $40, selling price $45, costs to sell $8. What's NRV?", ["$45", "$37", "$40", "$53"], 1, "$45 − $8."),
      q("500 units are written down by $3 each. What's the write-down?", ["$500", "$1,500", "$3,000", "$4,500"], 1, "500 × $3."),
      q("Can inventory write-downs be reversed under US GAAP?", ["Yes", "No", "Only for LIFO", "Only at year-end"], 1, "The write-down sets a new cost basis."),
      q("Under IFRS, a reversal can go up to:", ["Any amount", "Original cost", "Selling price", "Double the write-down"], 1, "Not above original cost."),
    ),
  ],
  4: [
    screen(
      "Planning a stock count",
      steps(
        ["Set the date and cut-off", "Freeze movements, or record them carefully during the count."],
        ["Prepare count sheets or scanners", "Organised by location."],
        ["Brief the team", "Instructions on counting, units of measure and damaged goods."],
        ["Tidy and label", "Group like items; separate customer goods and consignment stock."],
        ["Record the last documents", "Last goods received note and dispatch note numbers, for cut-off."],
      ),
    ),
    screen(
      "Count procedures and cycle counting",
      bullets(
        "Count in pairs: one counts, one records, then swap for test counts.",
        "Test counts: supervisors recount a sample, both from the floor to the sheet and from the sheet to the floor.",
        "Note damaged, obsolete or slow-moving items.",
        "Control count sheets — number them and account for every sheet.",
      ),
      terms(["Cycle counting", "Instead of one annual count, count part of the stock each week or month — high-value or fast-moving items more often. Works well with a reliable perpetual system."]),
    ),
    screen(
      "Reconciling counts and investigating shrinkage",
      table(
        ["Item", "Book quantity", "Counted", "Difference", "Value"],
        [
          ["Desk chair", "120", "116", "−4", "−$480"],
          ["Monitor stand", "80", "82", "+2", "+$60"],
          ["Cable kit", "300", "270", "−30", "−$150"],
        ],
        { footer: ["Net shrinkage", "", "", "", "−$570"], numeric: [1, 2, 3, 4] },
      ),
      p("Investigate before adjusting: was there a cut-off error, a unit-of-measure mix-up, a miscount, or actual loss? Then post the adjustment and fix the cause."),
      caution("Repeated losses on small, valuable or easily resold items may indicate theft — review access and receiving controls."),
    ),
    check(
      5,
      q("Why record the last goods received and dispatch notes before a count?", ["For cut-off", "For tax", "To pay staff", "For marketing"], 0, "They show which movements belong before the count."),
      q("What are test counts?", ["Supervisors recount a sample", "Counting only once", "Estimating stock", "Counting cash"], 0, "They check count accuracy."),
      q("What is cycle counting?", ["Counting part of stock regularly throughout the year", "Counting bicycles", "One annual count", "Never counting"], 0, "It spreads counting across the year."),
      q("In the example, what's the net shrinkage?", ["$480", "$570", "$690", "$60"], 1, "−$480 + $60 − $150."),
      q("What should happen before posting a count adjustment?", ["Investigate the differences", "Post immediately", "Delete the item", "Ignore small items"], 0, "Find out why first."),
    ),
  ],
  5: [
    screen(
      "Inventory controls",
      table(
        ["Area", "Controls"],
        [
          ["Receiving", "Check goods against purchase orders; record on goods received notes"],
          ["Storage", "Restricted access, locked high-value areas, CCTV"],
          ["Issuing and dispatch", "Pick lists and dispatch notes; segregate from recording"],
          ["Adjustments", "Approval for write-offs and count adjustments"],
          ["Records", "Regular counts reconciled to the system"],
        ],
      ),
    ),
    screen(
      "Turnover, days and gross margin",
      example(
        [["Cost of goods sold", "$300,000"], ["Average inventory", "$50,000"]],
        ["Inventory turnover", "6 times a year"],
      ),
      p("Days in inventory = 365 ÷ 6 ≈ 61 days: stock sits for about two months before it's sold."),
      table(
        ["Product line", "Revenue", "Gross profit", "Margin"],
        [
          ["Office chairs", "$220,000", "$99,000", "45%"],
          ["Desks", "$180,000", "$54,000", "30%"],
          ["Accessories", "$100,000", "$47,000", "47%"],
        ],
      ),
      tip("Margin and turnover together", "A low-margin line can still be valuable if it turns over fast — look at both."),
    ),
    screen(
      "Disclosures and the period-end checklist",
      bullets(
        "Accounting policy, including the cost formula used.",
        "Carrying amount by category (raw materials, WIP, finished goods).",
        "Write-downs and any reversals in the period.",
        "Inventory pledged as security for loans.",
      ),
      h("Period-end checklist"),
      bullets(
        "Count completed or cycle counts up to date; differences investigated.",
        "Cut-off checked for goods in transit and consignment stock.",
        "Costs include correct freight, duties and overheads.",
        "NRV review for slow-moving and damaged stock.",
        "Inventory subledger agrees to the general ledger.",
      ),
    ),
    check(
      6,
      q("Which control applies at receiving?", ["Checking goods against purchase orders", "CCTV only", "Sales invoices", "Payroll review"], 0, "Receive only what was ordered."),
      q("COGS $300,000 and average inventory $50,000. What's inventory turnover?", ["3×", "6×", "12×", "60×"], 1, "$300,000 ÷ $50,000."),
      q("Turnover of 6× means days in inventory of about:", ["30", "61", "90", "6"], 1, "365 ÷ 6."),
      q("Which product line has the lowest margin?", ["Office chairs", "Desks", "Accessories", "All equal"], 1, "Desks at 30%."),
      q("Which is a required inventory disclosure?", ["The cost formula used", "Supplier phone numbers", "Staff names", "Warehouse colours"], 0, "The policy and formula must be disclosed."),
    ),
  ],
}

export default lessons
