import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
  exercises,
  journal,
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

// Inventory Accounting and Valuation — lesson screens by module index (0 = Module 1).
// The course follows Maple Ridge Furniture Co., which makes furniture in its
// own workshop and also resells imported accessories.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Inventory in the Financial Statements",
      ["Inventory sits between purchases and sales. How it's counted and valued decides cost of goods sold — and therefore profit. This module sets the scene at Maple Ridge Furniture."],
      ["Identify types of inventory", "Explain how inventory drives cost of goods sold and gross profit", "Compare perpetual and periodic systems", "Apply ownership and cut-off rules"],
    ),
    screen(
      "Meet Maple Ridge Furniture",
      p("Maple Ridge Furniture Co. makes tables, chairs and sofas in its workshop and sells them through its showroom. It also imports and resells cushions and lamps."),
    ),
    screen(
      "Types of inventory",
      table(
        ["Type", "What it is", "Maple Ridge example"],
        [
          ["Raw materials", "Inputs waiting to be used", "Timber, screws, fabric"],
          ["Work in progress", "Partly finished goods", "Table frames being assembled"],
          ["Finished goods", "Ready for sale", "Completed sofas"],
          ["Goods for resale", "Bought to sell unchanged", "Imported cushions and lamps"],
        ],
      ),
    ),
    screen(
      "Inventory, cost of goods sold and gross profit",
      example(
        [["Opening inventory", "$45,000"], ["Add: purchases and production costs", "$310,000"], ["Less: closing inventory", "($55,000)"]],
        ["Cost of goods sold", "$300,000"],
      ),
      p("Every dollar of overstated closing inventory understates cost of goods sold — and overstates profit — by a dollar. That's why inventory valuation matters so much."),
    ),
    screen(
      "Perpetual vs. periodic systems",
      compare(
        ["Perpetual system", "Inventory and cost of goods sold are updated with every purchase and sale.", ["Real-time stock levels", "Counts confirm the records"]],
        ["Periodic system", "Purchases are recorded as they happen; cost of goods sold is calculated at period end from a count.", ["Simpler", "No running stock figure"]],
      ),
      p("Maple Ridge uses a perpetual system in its inventory software, checked by counts."),
    ),
    screen(
      "Ownership and cut-off",
      terms(
        ["FOB shipping point (or similar terms)", "Ownership passes when goods leave the seller. Maple Ridge includes imported lamps in its inventory while they're at sea."],
        ["FOB destination (or similar terms)", "Ownership passes on arrival. The seller keeps the goods in its inventory until delivered."],
        ["Consignment stock", "Goods held by a retailer but still owned by the supplier. Maple Ridge sells a local potter's vases on consignment — they're not Maple Ridge's inventory."],
      ),
      caution("Count what you own, not just what's in the building — and exclude customers' goods awaiting collection if already sold."),
    ),
    mistakes(
      ["Counting consignment stock as your own", "It belongs to the consignor."],
      ["Leaving out goods in transit you own", "Include them under shipping-point terms."],
      ["Counting sold goods awaiting collection", "They're the customer's."],
      ["Treating periodic COGS as exact", "It depends on an accurate count."],
    ),
    check(
      1,
      q("Partly assembled table frames are:", ["Work in progress", "Raw materials", "Finished goods", "Fixed assets"], 0, "They're partly finished."),
      q("Opening $45,000, purchases and production $310,000, closing $55,000. What's COGS?", ["$300,000", "$320,000", "$410,000", "$255,000"], 0, "$45,000 + $310,000 − $55,000."),
      q("If closing inventory is overstated, profit is:", ["Overstated", "Understated", "Unchanged", "Zero"], 0, "COGS is understated."),
      q("Lamps shipped FOB shipping point are at sea at year end. Who includes them?", ["Maple Ridge, the buyer", "The seller", "Neither", "The shipping line"], 0, "Ownership passed when they left the seller."),
      q("Who includes consignment vases in inventory?", ["The potter who owns them", "Maple Ridge, which holds them", "Both", "Neither"], 0, "Ownership stays with the consignor."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — What to count",
          ["At year end Maple Ridge holds: $8,000 of its own sofas; $2,000 of a potter's vases on consignment; $1,500 of chairs sold and awaiting collection; $3,000 of lamps at sea (FOB shipping point). What's its inventory?"],
          ["$8,000 + $3,000 = $11,000. Exclude the consignment vases and the sold chairs."],
        ],
        [
          "Exercise 2 — Profit effect",
          ["Closing inventory was overstated by $4,000. What's the effect on this year's profit and next year's?"],
          ["This year's profit is overstated by $4,000; next year's opening inventory is overstated, so next year's profit is understated by $4,000."],
        ],
      ),
    ),
    summary(
      ["Types of inventory", "How inventory drives cost of goods sold", "Perpetual vs. periodic systems", "Ownership, goods in transit and consignment stock"],
      "Count what you own, value it carefully, and remember: every inventory error flows straight into profit.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Measuring the Cost of Inventory",
      ["Inventory is carried at cost — but cost includes more than the purchase price. This module covers purchase costs, conversion costs and what must be expensed instead."],
      ["Include purchase costs correctly", "Add conversion costs for manufactured goods", "Identify costs that must be expensed", "Understand the standard cost and retail methods"],
    ),
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
        [["1,000 cushions × $18", "$18,000"], ["Freight in", "$900"], ["Import duty", "$1,100"], ["Less: trade discount", "($1,000)"]],
        ["Total cost — $19 per cushion", "$19,000"],
      ),
    ),
    screen(
      "Conversion costs",
      terms(
        ["Direct materials", "Timber, fabric and fittings used in each piece."],
        ["Direct labour", "Wages of the craftspeople who make the furniture."],
        ["Variable production overheads", "Workshop power and consumables — allocated on actual production."],
        ["Fixed production overheads", "Workshop rent and machine depreciation — allocated based on normal production capacity."],
      ),
    ),
    screen(
      "Fixed overheads and normal capacity",
      p("Maple Ridge's fixed workshop overheads are $120,000 a year. Normal capacity is 10,000 pieces, so $12 is absorbed into each piece."),
      table(
        ["", "Amount"],
        [
          ["Pieces actually produced this year", "8,000"],
          ["Overhead absorbed (8,000 × $12)", "$96,000"],
          ["Unabsorbed overhead — expensed", "$24,000"],
        ],
        { numeric: [1] },
      ),
      note("Using normal capacity stops the cost of idle capacity being added to inventory."),
    ),
    screen(
      "Costs that must be expensed",
      bullets(
        "Abnormal waste of materials, labour or overheads — e.g. timber ruined by a leak.",
        "Storage costs, unless needed in the production process (e.g. drying timber).",
        "Administrative overheads unrelated to production.",
        "Selling and distribution costs — showroom staff, delivery to customers.",
      ),
    ),
    screen(
      "Standard cost and retail methods",
      compare(
        ["Standard cost", "Inventory valued at pre-set standard costs, with variances analysed. Acceptable if standards are close to actual and reviewed regularly.", ["Common in manufacturing — Maple Ridge's workshop"]],
        ["Retail method", "Cost estimated by reducing the selling price by the gross margin percentage.", ["Common in retail — Maple Ridge's accessories"]],
      ),
      example(
        [["Accessories at selling price", "$80,000"], ["Average gross margin", "35%"]],
        ["Estimated cost = $80,000 × 65%", "$52,000"],
      ),
    ),
    mistakes(
      ["Leaving freight in out of cost", "It's part of purchase cost."],
      ["Capitalising recoverable tax", "It's claimed back."],
      ["Absorbing overheads on actual output in a slow year", "Use normal capacity."],
      ["Including selling costs in inventory", "Expense them."],
    ),
    check(
      2,
      q("Which is included in inventory cost?", ["Freight in", "Selling costs", "Recoverable GST", "Admin salaries"], 0, "A purchase cost."),
      q("1,000 cushions: $18,000 price, $900 freight, $1,100 duty, $1,000 discount. Cost per cushion?", ["$19", "$18", "$20", "$21"], 0, "$19,000 ÷ 1,000."),
      q("Fixed production overheads are allocated based on:", ["Normal production capacity", "Actual sales", "Selling prices", "Number of staff"], 0, "Idle capacity isn't added to inventory."),
      q("Abnormal waste of materials is:", ["Expensed", "Added to inventory", "Deferred", "Revenue"], 0, "Not part of inventory cost."),
      q("Accessories at selling price $80,000 with a 35% margin. Estimated cost?", ["$52,000", "$28,000", "$80,000", "$108,000"], 0, "$80,000 × 65%."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Overhead absorption",
          ["Fixed overheads $90,000; normal capacity 6,000 pieces; actual production 5,000. How much is absorbed and how much expensed?"],
          ["Rate $15 per piece. Absorbed $75,000; unabsorbed $15,000 expensed."],
        ],
        [
          "Exercise 2 — Product cost",
          ["A dining table uses $180 of timber, $60 of fittings and 5 hours of labour at $30. Variable overhead is $20 and fixed overhead $12. What's its cost?"],
          ["$180 + $60 + $150 + $20 + $12 = $422."],
        ],
      ),
    ),
    summary(
      ["Purchase costs and deductions", "Direct materials, labour and overheads", "Absorbing fixed overheads on normal capacity", "Costs that must be expensed", "Standard cost and retail methods"],
      "Inventory cost is everything needed to bring goods to their present condition and location — no more, no less.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Cost Formulas",
      ["When identical items are bought at different prices, a cost formula decides which cost goes to cost of goods sold. This module compares the formulas on Maple Ridge's lamps."],
      ["Apply FIFO", "Apply weighted average cost", "Use specific identification", "Know where LIFO is allowed", "Explain how each formula affects profit and tax"],
    ),
    screen(
      "Maple Ridge's lamp purchases",
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
      p("During the period, 250 lamps are sold at $20 each — revenue $5,000. 150 remain. (This uses the periodic approach for simplicity.)"),
    ),
    screen(
      "First-in, first-out (FIFO)",
      p("The oldest costs go to cost of goods sold first."),
      example(
        [["100 × $10", "$1,000"], ["150 × $12", "$1,800"]],
        ["Cost of goods sold", "$2,800"],
      ),
      p("Closing inventory: 50 × $12 + 100 × $15 = $2,100. Gross profit: $5,000 − $2,800 = $2,200."),
    ),
    screen(
      "Weighted average cost",
      p("Average cost per unit = $4,900 ÷ 400 = $12.25."),
      example(
        [["250 lamps × $12.25", "$3,062.50"]],
        ["Cost of goods sold", "$3,062.50"],
      ),
      p("Closing inventory: 150 × $12.25 = $1,837.50. Gross profit: $1,937.50."),
    ),
    screen(
      "Specific identification and LIFO",
      terms(
        ["Specific identification", "Each item's actual cost is tracked — used for items that aren't interchangeable, such as Maple Ridge's custom commissioned dining tables."],
        ["LIFO (last-in, first-out)", "The newest costs go to cost of goods sold first: 100 × $15 + 150 × $12 = $3,300; closing inventory $1,600; gross profit $1,700."],
      ),
      table(
        ["Formula", "US GAAP", "IFRS / Ind AS / AASB"],
        [
          ["FIFO", "Allowed", "Allowed"],
          ["Weighted average", "Allowed", "Allowed"],
          ["Specific identification", "Allowed (non-interchangeable items)", "Required for non-interchangeable items"],
          ["LIFO", "Allowed", "Not allowed"],
        ],
      ),
    ),
    screen(
      "How each formula affects profit and tax",
      table(
        ["Formula", "COGS", "Closing inventory", "Gross profit"],
        [
          ["FIFO", "$2,800", "$2,100", "$2,200"],
          ["Weighted average", "$3,062.50", "$1,837.50", "$1,937.50"],
          ["LIFO", "$3,300", "$1,600", "$1,700"],
        ],
        { numeric: [1, 2, 3] },
      ),
      bullets(
        "When prices are rising, FIFO gives the highest profit and closing inventory; LIFO gives the lowest profit (and, in the US, lower taxable income).",
        "In the US, a business using LIFO for tax must generally also use it in its financial statements (the LIFO conformity rule).",
        "Use the same formula for inventories of a similar nature, consistently.",
      ),
    ),
    mistakes(
      ["Using LIFO under IFRS or Ind AS", "It isn't allowed."],
      ["Switching formulas to manage profit", "Apply one formula consistently."],
      ["Averaging unique items", "Use specific identification."],
      ["Forgetting the LIFO conformity rule", "US tax LIFO generally requires book LIFO."],
    ),
    check(
      3,
      q("Under FIFO, what's COGS for the 250 lamps?", ["$2,800", "$3,062.50", "$3,300", "$4,900"], 0, "Oldest costs first."),
      q("What's the weighted average cost per lamp?", ["$12.25", "$12.00", "$12.33", "$15.00"], 0, "$4,900 ÷ 400."),
      q("When prices rise, which formula gives the highest gross profit?", ["FIFO", "LIFO", "Weighted average", "All equal"], 0, "Older, cheaper costs go to COGS."),
      q("Is LIFO allowed under IFRS?", ["No", "Yes", "Only for retailers", "Only in India"], 0, "IFRS and Ind AS prohibit it."),
      q("Which method suits custom commissioned dining tables?", ["Specific identification", "LIFO", "FIFO", "Retail method"], 0, "Each table is unique."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — FIFO",
          ["Opening 50 chairs at $40; bought 100 at $44; sold 120. What's FIFO COGS and closing inventory?"],
          ["COGS: 50 × $40 + 70 × $44 = $5,080.", "Closing: 30 × $44 = $1,320."],
        ],
        [
          "Exercise 2 — Weighted average",
          ["Same data, weighted average. What's COGS?"],
          ["Average = ($2,000 + $4,400) ÷ 150 = $42.67. COGS = 120 × $42.67 ≈ $5,120."],
        ],
      ),
    ),
    summary(
      ["FIFO", "Weighted average cost", "Specific identification", "LIFO and where it's allowed", "How formulas change profit and tax"],
      "The cost formula doesn't change the goods — it changes the profit. Choose an allowed formula and apply it consistently.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Valuation at Period End",
      ["At period end, inventory can't be carried at more than it will recover. This module covers net realisable value, slow-moving stock, provisions and reversals."],
      ["Apply the lower of cost and net realisable value", "Estimate net realisable value", "Deal with slow-moving, damaged and obsolete stock", "Record provisions and write-downs", "Know when write-downs can be reversed"],
    ),
    screen(
      "Lower of cost and net realisable value",
      p("Inventory is measured at the lower of cost and net realisable value (NRV). NRV is the estimated selling price less estimated costs to complete and sell."),
      note("US GAAP uses lower of cost and NRV for FIFO and average cost, but lower of cost or market for LIFO and the retail method."),
    ),
    screen(
      "Estimating NRV",
      p("500 armchairs of an older design need re-upholstering before they can be sold at a discount."),
      example(
        [["Cost per armchair", "$40"], ["Estimated selling price", "$45"], ["Less: re-upholstering and selling costs", "($8)"], ["NRV per armchair", "$37"]],
        ["Write-down per armchair", "$3"],
      ),
      journal([["Cost of goods sold — inventory write-down", "$1,500", ""], ["Inventory (or inventory provision)", "", "$1,500"]], "$1,500"),
    ),
    screen(
      "Slow-moving, damaged and obsolete stock",
      table(
        ["Indicator", "Action"],
        [
          ["No sales in 12 months", "Assess NRV; consider a provision"],
          ["Damaged goods — e.g. water-stained sofas", "Write down to salvage value"],
          ["Superseded designs", "Estimate discounted selling prices"],
          ["Selling prices falling below cost", "Write down to NRV"],
        ],
      ),
    ),
    screen(
      "Inventory provisions by age",
      p("Maple Ridge starts from an age-based provision, then adjusts for known facts."),
      table(
        ["Age since last sale", "Balance", "Provision %", "Provision"],
        [
          ["Under 12 months", "$210,000", "0%", "$0"],
          ["12–18 months", "$16,000", "25%", "$4,000"],
          ["18–24 months", "$8,000", "50%", "$4,000"],
          ["Over 24 months", "$3,000", "100%", "$3,000"],
        ],
        { footer: ["Total", "$237,000", "", "$11,000"], numeric: [1, 3] },
      ),
      tip("Evidence, not smoothing", "Provisions should be based on evidence, not used to move profit between years."),
    ),
    screen(
      "Reversing write-downs",
      compare(
        ["IFRS / Ind AS / AASB", "If the circumstances causing a write-down no longer exist, reverse it — but not above original cost.", ["Reversal reduces COGS"]],
        ["US GAAP", "A write-down creates a new cost basis. It isn't reversed in later periods.", ["No reversals"]],
      ),
      p("Example: armchairs written down to $37 later sell for $50 after a design trend returns. Under IFRS the write-down can be reversed — up to the original $40 cost."),
    ),
    mistakes(
      ["Carrying stock above NRV", "Write it down."],
      ["Forgetting costs to complete and sell", "NRV deducts them."],
      ["Using provisions to smooth profit", "Base them on evidence."],
      ["Reversing write-downs under US GAAP", "Not allowed."],
    ),
    check(
      4,
      q("Inventory is measured at:", ["The lower of cost and net realisable value", "Selling price", "Replacement cost", "The higher of cost and NRV"], 0, "Never above what you expect to recover."),
      q("Cost $40, selling price $45, costs to sell $8. What's NRV?", ["$37", "$45", "$40", "$53"], 0, "$45 − $8."),
      q("500 armchairs are written down by $3 each. What's the write-down?", ["$1,500", "$500", "$3,000", "$4,500"], 0, "500 × $3."),
      q("Can inventory write-downs be reversed under US GAAP?", ["No", "Yes", "Only for LIFO", "Only at year end"], 0, "A new cost basis."),
      q("Under IFRS, a reversal can go up to:", ["Original cost", "Any amount", "Selling price", "Double the write-down"], 0, "Not above cost."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — NRV",
          ["200 water-stained sofas cost $600 each. They can be sold for $450 after $50 of cleaning and $30 of selling cost each. What's the write-down?"],
          ["NRV = $450 − $50 − $30 = $370. Write-down = ($600 − $370) × 200 = $46,000."],
        ],
        [
          "Exercise 2 — Provision",
          ["Stock aged 12–18 months $20,000 (25%), 18–24 months $10,000 (50%), over 24 months $4,000 (100%). What's the provision?"],
          ["$5,000 + $5,000 + $4,000 = $14,000."],
        ],
      ),
    ),
    summary(
      ["Lower of cost and NRV", "Estimating NRV", "Slow-moving, damaged and obsolete stock", "Age-based provisions", "Reversals under IFRS vs. US GAAP"],
      "Inventory is worth what it will recover, not what it cost. Review it every period end.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Stock Counts and Reconciliation",
      ["Counts confirm that the inventory in the books really exists. This module plans and runs Maple Ridge's year-end count and investigates the differences."],
      ["Plan a stock count", "Run count procedures and test counts", "Use cycle counting", "Reconcile counts to the ledger", "Investigate shrinkage and losses"],
    ),
    screen(
      "Planning a stock count",
      steps(
        ["Set the date and cut-off", "Freeze movements, or record them carefully during the count."],
        ["Prepare count sheets or scanners", "Organised by location — workshop, warehouse, showroom."],
        ["Brief the team", "How to count, units of measure, damaged goods."],
        ["Tidy and label", "Group like items; separate consignment stock and customer goods."],
        ["Record the last documents", "Last goods received and dispatch note numbers, for cut-off."],
      ),
    ),
    screen(
      "Count procedures and test counts",
      bullets(
        "Count in pairs: one counts, one records, then swap for test counts.",
        "Test counts: supervisors recount a sample, both from the floor to the sheet and from the sheet to the floor.",
        "Note damaged, obsolete or slow-moving items for the NRV review.",
        "Control count sheets — number them and account for every sheet.",
        "Estimate work in progress by stage of completion.",
      ),
    ),
    screen(
      "Cycle counting",
      p("Instead of one annual count, part of the stock is counted every week or month. Maple Ridge counts high-value finished goods monthly and timber quarterly."),
      tip("Count more where risk is higher", "High-value, fast-moving or easily stolen items deserve more frequent counts."),
    ),
    screen(
      "Reconciling counts to the ledger",
      table(
        ["Item", "Book quantity", "Counted", "Difference", "Value"],
        [
          ["Dining chairs", "120", "116", "−4", "−$480"],
          ["Lamps", "80", "82", "+2", "+$60"],
          ["Cushion covers", "300", "270", "−30", "−$150"],
        ],
        { footer: ["Net shrinkage", "", "", "", "−$570"], numeric: [1, 2, 3, 4] },
      ),
      journal([["Cost of goods sold — inventory adjustment", "$570", ""], ["Inventory", "", "$570"]], "$570"),
    ),
    screen(
      "Investigating shrinkage",
      steps(
        ["Recheck the count", "Recount the items with differences."],
        ["Check cut-off", "Were goods received or sold around the count date recorded correctly?"],
        ["Check units of measure", "Packs vs. pieces is a common mix-up."],
        ["Look for loss", "Damage, waste or theft."],
        ["Fix the cause", "Better receiving checks, locked storage or CCTV."],
      ),
      caution("Repeated losses on small, valuable or easily resold items may indicate theft — review access and receiving controls."),
    ),
    mistakes(
      ["Counting without cut-off", "Record the last documents."],
      ["Skipping test counts", "They check count accuracy."],
      ["Adjusting before investigating", "Find out why first."],
      ["One annual count for everything", "Cycle count high-risk items more often."],
    ),
    check(
      5,
      q("Why record the last goods received and dispatch notes before a count?", ["For cut-off", "For tax", "To pay staff", "For marketing"], 0, "They show which movements belong before the count."),
      q("What are test counts?", ["Supervisors recount a sample", "Counting only once", "Estimating stock", "Counting cash"], 0, "They check accuracy."),
      q("What is cycle counting?", ["Counting part of stock regularly throughout the year", "Counting bicycles", "One annual count", "Never counting"], 0, "It spreads counting across the year."),
      q("In the example, what's the net shrinkage?", ["$570", "$480", "$690", "$60"], 0, "−$480 + $60 − $150."),
      q("What should happen before posting a count adjustment?", ["Investigate the differences", "Post immediately", "Delete the item", "Ignore small items"], 0, "Find the cause first."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Units of measure",
          ["Books show 40 boxes of screws (100 per box); the counter recorded 4,000. Is there a difference?"],
          ["No — 40 boxes × 100 = 4,000 screws. It's a units-of-measure mismatch, not shrinkage."],
        ],
        [
          "Exercise 2 — Cut-off",
          ["10 sofas ($600 each) were dispatched to a customer after the count started but their dispatch was recorded before it. What's the effect?"],
          ["The books show them as sold but the count included them — a $6,000 apparent surplus. Correct the count, not the books."],
        ],
      ),
    ),
    summary(
      ["Planning a stock count", "Count procedures and test counts", "Cycle counting", "Reconciling counts to the ledger", "Investigating shrinkage"],
      "A good count proves the stock exists; a good investigation explains every difference before it's adjusted.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Controls, Analysis and Reporting",
      ["The final module covers inventory controls, the ratios that show how well stock is managed, required disclosures and a period-end checklist."],
      ["Apply inventory controls", "Calculate inventory turnover and days in inventory", "Analyse gross margin by product line", "Prepare inventory disclosures", "Follow a period-end checklist"],
    ),
    screen(
      "Inventory controls",
      table(
        ["Area", "Controls"],
        [
          ["Receiving", "Check goods against purchase orders; record on goods received notes"],
          ["Storage", "Restricted access, locked high-value areas, CCTV"],
          ["Issuing and dispatch", "Pick lists and dispatch notes; separate from recording"],
          ["Adjustments", "Approval for write-offs and count adjustments"],
          ["Records", "Regular counts reconciled to the system"],
        ],
      ),
    ),
    screen(
      "Turnover and days in inventory",
      example(
        [["Cost of goods sold", "$300,000"], ["Average inventory", "$50,000"]],
        ["Inventory turnover", "6 times a year"],
      ),
      p("Days in inventory = 365 ÷ 6 ≈ 61 days: stock sits for about two months before it's sold."),
      tip("Compare by category", "Timber may turn 4 times a year and accessories 10 — overall averages can hide slow lines."),
    ),
    screen(
      "Gross margin by product line",
      table(
        ["Product line", "Revenue", "Gross profit", "Margin"],
        [
          ["Chairs", "$220,000", "$99,000", "45%"],
          ["Tables", "$180,000", "$54,000", "30%"],
          ["Accessories", "$100,000", "$47,000", "47%"],
        ],
      ),
      p("Tables earn the lowest margin. Maple Ridge reviews timber costs and table pricing."),
      note("A low-margin line can still be valuable if it turns over fast — look at margin and turnover together."),
    ),
    screen(
      "Inventory disclosures",
      bullets(
        "Accounting policy, including the cost formula used.",
        "Carrying amount by category — raw materials, work in progress, finished goods.",
        "Write-downs and any reversals in the period.",
        "Inventory pledged as security for loans.",
        "Under US GAAP, LIFO users disclose additional information, such as the LIFO reserve.",
      ),
    ),
    screen(
      "Period-end checklist",
      bullets(
        "Count completed or cycle counts up to date; differences investigated.",
        "Cut-off checked for goods in transit and consignment stock.",
        "Costs include correct freight, duties and overheads (on normal capacity).",
        "NRV review for slow-moving and damaged stock; provision updated.",
        "Inventory subledger agrees to the general ledger.",
        "Disclosures prepared.",
      ),
    ),
    mistakes(
      ["Receiving without checking against orders", "Receive only what was ordered."],
      ["Looking only at overall turnover", "Analyse by category."],
      ["Judging lines on margin alone", "Consider turnover too."],
      ["Missing disclosures", "Include the cost formula and write-downs."],
    ),
    check(
      6,
      q("Which control applies at receiving?", ["Checking goods against purchase orders", "CCTV only", "Sales invoices", "Payroll review"], 0, "Receive only what was ordered."),
      q("COGS $300,000 and average inventory $50,000. What's inventory turnover?", ["6×", "3×", "12×", "60×"], 0, "$300,000 ÷ $50,000."),
      q("Turnover of 6× means days in inventory of about:", ["61", "30", "90", "6"], 0, "365 ÷ 6."),
      q("Which product line has the lowest margin?", ["Tables", "Chairs", "Accessories", "All equal"], 0, "30%."),
      q("Which is a required inventory disclosure?", ["The cost formula used", "Supplier phone numbers", "Staff names", "Warehouse colours"], 0, "Policy and formula."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Turnover",
          ["Accessories: cost of goods sold $53,000; average inventory $5,300. What's turnover and days in inventory?"],
          ["Turnover 10×; days ≈ 365 ÷ 10 = 36.5 days."],
        ],
        [
          "Exercise 2 — Margin",
          ["Tables revenue $180,000; Maple Ridge cuts timber cost by $9,000. What's the new margin?"],
          ["Gross profit $63,000 ÷ $180,000 = 35%."],
        ],
      ),
    ),
    summary(
      ["Inventory controls", "Turnover and days in inventory", "Gross margin by product line", "Inventory disclosures", "A period-end checklist"],
      "Control the stock physically, value it carefully, and use turnover and margin to manage it.",
    ),
  ],
}

export default lessons
