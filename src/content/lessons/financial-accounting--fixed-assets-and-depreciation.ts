import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
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

// Fixed Assets and Depreciation — lesson screens by module index (0 = Module 1).
// The course follows Ironbark Logistics, a warehousing and transport company.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — What Counts as a Fixed Asset",
      ["Fixed assets are often a company's biggest balance. Deciding what to capitalise — and at what cost — shapes both the balance sheet and profit for years."],
      ["Identify property, plant and equipment and intangible assets", "Distinguish capital from revenue expenditure", "Work out what's included in cost", "Apply capitalisation thresholds", "Treat subsequent costs correctly"],
    ),
    screen(
      "Meet Ironbark Logistics",
      p("Ironbark Logistics stores and delivers goods for retailers. It owns a warehouse, forklifts, a conveyor system, delivery vans and warehouse software. Its capitalisation threshold is $2,500."),
    ),
    screen(
      "Property, plant and equipment and intangibles",
      terms(
        ["Property, plant and equipment (PP&E)", "Tangible assets held for use for more than one period — Ironbark's land, warehouse, forklifts, conveyor and vans."],
        ["Intangible assets", "Non-physical assets such as software licences, patents and trademarks — Ironbark's warehouse management software. Purchased intangibles with a finite life are amortised."],
      ),
    ),
    screen(
      "Capital vs. revenue expenditure",
      compare(
        ["Capital expenditure", "Buys or improves an asset that benefits future periods.", ["A new forklift", "Adding a mezzanine floor to the warehouse"]],
        ["Revenue expenditure", "Maintains an asset or is used up in the period.", ["Servicing the forklifts", "Repainting the office"]],
      ),
    ),
    screen(
      "What's included in cost",
      table(
        ["Item", "Capitalise?"],
        [
          ["Purchase price, less trade discounts", "Yes"],
          ["Import duties and non-refundable taxes", "Yes"],
          ["Delivery and handling", "Yes"],
          ["Installation and testing", "Yes"],
          ["Professional fees to get it ready (e.g. engineers)", "Yes"],
          ["Recoverable sales tax, GST or VAT", "No — claimed back"],
          ["Training staff to use it", "No — expense"],
          ["Repairs after it's in use", "No — expense"],
        ],
      ),
      example(
        [["Forklift price", "$48,000"], ["Delivery", "$1,500"], ["Installation and testing", "$2,500"]],
        ["Cost capitalised", "$52,000"],
      ),
    ),
    screen(
      "Thresholds and subsequent costs",
      p("A capitalisation threshold lets small items be expensed for practicality. Ironbark expenses items under $2,500 and applies the rule consistently."),
      terms(
        ["Repairs and maintenance", "Restore the asset to its original condition — expense. E.g. $1,800 to replace forklift tyres."],
        ["Improvements", "Extend life, increase capacity or improve quality — capitalise. E.g. $35,000 to extend the conveyor."],
        ["Replacement of a major part", "Capitalise the new part and derecognise the replaced part's remaining carrying amount."],
      ),
      note("Tax rules may have their own thresholds and immediate write-off rules, which can differ from the accounting policy."),
    ),
    mistakes(
      ["Expensing delivery and installation", "They're part of cost."],
      ["Capitalising training", "It's an expense."],
      ["Capitalising routine repairs", "They maintain, not improve."],
      ["Inconsistent thresholds", "Apply the policy every time."],
    ),
    check(
      1,
      q("Which is capital expenditure?", ["Buying a new forklift", "Servicing a forklift", "Repainting an office", "Cleaning machinery"], 0, "New assets benefit future periods."),
      q("Forklift $48,000, delivery $1,500, installation $2,500. What's the capitalised cost?", ["$52,000", "$48,000", "$50,500", "$49,500"], 0, "All costs to get it ready for use."),
      q("Is staff training on new equipment capitalised?", ["No — it's expensed", "Yes", "Only over $2,500", "Only under IFRS"], 0, "Training doesn't create the asset."),
      q("A repair restores a machine to its original condition. How is it treated?", ["Expensed", "Capitalised", "Added to land", "Deferred"], 0, "Routine repairs are expenses."),
      q("Why have a capitalisation threshold?", ["To expense small items for practicality", "To avoid depreciation entirely", "Tax law always requires it", "To increase profit"], 0, "It keeps the register manageable."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Capitalise or expense?",
          ["(a) $1,800 forklift tyres; (b) $35,000 conveyor extension; (c) $900 office chairs; (d) $4,000 engineer's fee to commission the conveyor."],
          ["(a) Expense. (b) Capitalise. (c) Expense — under the $2,500 threshold. (d) Capitalise — part of getting the asset ready."],
        ],
        [
          "Exercise 2 — Cost",
          ["A van costs $40,000 plus $4,000 recoverable GST, $600 delivery and $1,200 signwriting. What's its cost?"],
          ["$40,000 + $600 + $1,200 = $41,800. Recoverable GST isn't capitalised."],
        ],
      ),
    ),
    summary(
      ["PP&E and intangible assets", "Capital vs. revenue expenditure", "What's included in an asset's cost", "Capitalisation thresholds", "Repairs, improvements and part replacements"],
      "Capitalise what benefits future periods — at the full cost of getting it ready to use — and expense the rest.",
    ),
  ],
  1: [
    overview(
      "Module 2 — The Fixed Asset Register",
      ["The fixed asset register is the detailed record behind the balance sheet's PP&E figure. This module covers what it records and how to keep it accurate."],
      ["Know what a fixed asset register records", "Use asset classes, tags and locations", "Track assets under construction", "Physically verify assets", "Reconcile the register to the general ledger"],
    ),
    screen(
      "What a fixed asset register records",
      table(
        ["Field", "Ironbark example"],
        [
          ["Asset ID / tag", "FA-0142"],
          ["Description and serial number", "Forklift, SN 7781-X"],
          ["Class and location", "Plant & machinery — Warehouse 2"],
          ["Acquisition date and cost", "Mar 15, 2026 · $36,000"],
          ["Depreciation method, life, residual value", "Straight-line · 8 years · $4,000"],
          ["Accumulated depreciation and carrying amount", "Updated monthly"],
          ["Custodian", "Warehouse 2 manager"],
        ],
      ),
    ),
    screen(
      "Classes, tags and locations",
      bullets(
        "Classes group similar assets with the same depreciation policy — land, buildings, plant and machinery, vehicles, IT equipment, software.",
        "Tags (barcodes or RFID) link each physical asset to its register record.",
        "Locations show where each asset is — warehouse, depot or vehicle.",
      ),
      tip("Tag on arrival", "Tag assets when they're received, before they go into use. Untagged assets are easily lost from the register."),
    ),
    screen(
      "Assets under construction",
      p("Ironbark is building a cold-storage room. Costs are collected in Assets under construction (capital work in progress) and aren't depreciated until the room is ready for use."),
      table(
        ["Cost", "Amount"],
        [
          ["Insulated panels", "$62,000"],
          ["Refrigeration units", "$48,000"],
          ["Installation labour", "$15,000"],
        ],
        { footer: ["Assets under construction", "$125,000"], numeric: [1] },
      ),
      p("When complete, the $125,000 is transferred to Buildings or Plant and depreciation starts."),
    ),
    screen(
      "Physical verification",
      steps(
        ["Print the register by location", "Or use a mobile scanning app."],
        ["Check each asset", "Exists? Condition? Still in use?"],
        ["Record exceptions", "Missing, idle, damaged or unrecorded assets."],
        ["Adjust", "Write off missing assets, assess damaged ones for impairment, add unrecorded ones."],
      ),
      p("Ironbark's count found a missing $3,000 pallet scanner (written off after investigation) and an unrecorded $4,200 dock leveller (added to the register)."),
    ),
    screen(
      "Reconciling the register to the ledger",
      table(
        ["", "Register", "General ledger", "Difference"],
        [
          ["Cost", "$1,248,000", "$1,248,000", "$0"],
          ["Accumulated depreciation", "$512,300", "$509,800", "$2,500"],
        ],
        { numeric: [1, 2, 3] },
      ),
      p("Cause: one month's depreciation on new assets was calculated in the register but the journal wasn't posted. Posting it clears the difference."),
      tip("Post from the register", "Generate the depreciation journal from the register each month so the two can't drift apart."),
    ),
    mistakes(
      ["Untagged assets", "Tag on arrival."],
      ["Depreciating assets under construction", "Start only when ready for use."],
      ["Never counting assets", "Verify physically on a regular cycle."],
      ["Register and ledger out of step", "Reconcile monthly."],
    ),
    check(
      2,
      q("Which field links a physical asset to its record?", ["Asset ID / tag", "Supplier invoice", "Bank account", "Customer code"], 0, "Tags link records to items."),
      q("Are assets under construction depreciated?", ["No — not until ready for use", "Yes", "Only buildings", "Only under US GAAP"], 0, "Depreciation starts when available."),
      q("A count finds an asset missing. What happens?", ["Write it off after investigation", "Keep depreciating", "Ignore it", "Double its value"], 0, "Missing assets must be removed."),
      q("Register accumulated depreciation is $2,500 higher than the GL. A likely cause?", ["A depreciation journal not posted", "A sale", "A bank fee", "A revenue error"], 0, "The register calculated it; the GL didn't receive it."),
      q("How can the register and GL be kept in step?", ["Generate depreciation journals from the register", "Update yearly only", "Use different rates", "Keep no register"], 0, "One source prevents drift."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Transfer",
          ["The cold-storage room ($125,000) is complete on June 30. Write the transfer entry."],
          ["Dr Buildings (or Plant) $125,000 · Cr Assets under construction $125,000. Depreciation starts from July."],
        ],
        [
          "Exercise 2 — Count results",
          ["Record the count findings: a missing scanner (cost $3,000, accumulated depreciation $1,800) and an unrecorded dock leveller bought for $4,200 and expensed by mistake."],
          ["Scanner: Dr Accumulated depreciation $1,800 · Dr Loss on write-off $1,200 · Cr Equipment $3,000.", "Leveller: Dr Equipment $4,200 · Cr Repairs (or the expense account used) $4,200."],
        ],
      ),
    ),
    summary(
      ["What the fixed asset register records", "Classes, tags and locations", "Assets under construction", "Physical verification", "Reconciling the register to the ledger"],
      "The register is the detail behind PP&E. Keep it tagged, counted and reconciled to the ledger every month.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Depreciation Methods",
      ["Depreciation spreads an asset's cost over its useful life. This module covers the main methods, component depreciation and changes in estimates."],
      ["Set useful life, residual value and depreciable amount", "Apply the straight-line method", "Apply the written-down value method", "Apply the units-of-production method", "Use component depreciation", "Handle changes in estimates"],
    ),
    screen(
      "Useful life, residual value and depreciable amount",
      example(
        [["Forklift cost", "$36,000"], ["Less: residual value", "($4,000)"], ["Depreciable amount", "$32,000"], ["Useful life", "8 years"]],
        ["Straight-line depreciation per year", "$4,000"],
      ),
      p("Depreciation starts when the asset is available for use. Ironbark's forklift was ready on March 15; its policy charges from the start of the next month."),
    ),
    screen(
      "Written-down value (reducing balance)",
      p("A fixed percentage is applied to the remaining carrying amount each year, so depreciation is higher in early years. At 25% on the forklift:"),
      table(
        ["Year", "Opening value", "Depreciation", "Closing value"],
        [
          ["1", "$36,000", "$9,000", "$27,000"],
          ["2", "$27,000", "$6,750", "$20,250"],
          ["3", "$20,250", "$5,063", "$15,187"],
        ],
        { numeric: [1, 2, 3] },
      ),
      note("Many tax systems — including India's — use written-down value rates for tax depreciation."),
    ),
    screen(
      "Units of production",
      p("Ironbark's conveyor wears out with use, so it's depreciated by the number of parcels handled."),
      example(
        [["Cost", "$100,000"], ["Residual value", "($10,000)"], ["Expected lifetime parcels", "450,000"]],
        ["Depreciation per parcel", "$0.20"],
      ),
      p("In a year handling 60,000 parcels, depreciation is $12,000."),
    ),
    screen(
      "Component depreciation",
      p("Significant parts with different lives are depreciated separately. Ironbark's $1,000,000 warehouse:"),
      table(
        ["Component", "Cost", "Life", "Depreciation per year"],
        [
          ["Roof", "$150,000", "20 years", "$7,500"],
          ["Structure", "$850,000", "50 years", "$17,000"],
        ],
        { footer: ["Total", "$1,000,000", "", "$24,500"], numeric: [1, 3] },
      ),
      note("Component depreciation is required under IFRS and allowed under US GAAP."),
    ),
    screen(
      "Changes in estimates",
      p("If useful life or residual value changes, depreciation is adjusted prospectively — from now on. Past years aren't restated."),
      example(
        [["Van cost", "$50,000"], ["Depreciated 4 years at $5,000", "($20,000)"], ["Carrying amount", "$30,000"], ["Revised remaining life", "3 years"]],
        ["New annual depreciation", "$10,000"],
      ),
    ),
    mistakes(
      ["Ignoring residual value", "Depreciate cost less residual value."],
      ["Starting depreciation before the asset is ready", "Start when available for use."],
      ["Restating past years for a change in estimate", "Adjust prospectively."],
      ["One life for a building with major components", "Depreciate components separately."],
    ),
    check(
      3,
      q("Cost $36,000, residual $4,000, life 8 years. Straight-line per year?", ["$4,000", "$4,500", "$3,600", "$32,000"], 0, "$32,000 ÷ 8."),
      q("Reducing balance at 25% on $36,000. Year 2 depreciation?", ["$6,750", "$9,000", "$5,063", "$4,000"], 0, "25% of $27,000."),
      q("Units-of-production rate $0.20; 60,000 parcels. Depreciation?", ["$12,000", "$6,000", "$20,000", "$60,000"], 0, "60,000 × $0.20."),
      q("A change in useful life is applied:", ["Prospectively", "Retrospectively", "Only at disposal", "Never"], 0, "Estimates change from now on."),
      q("Carrying amount $30,000, revised remaining life 3 years. New annual depreciation?", ["$10,000", "$5,000", "$15,000", "$30,000"], 0, "$30,000 ÷ 3."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Choose the method",
          ["Suggest a method for (a) delivery vans driven a very different number of kilometres each year, (b) office furniture."],
          ["(a) Units of production (kilometres) — wear follows use. (b) Straight-line — even use over time."],
        ],
        [
          "Exercise 2 — Residual value change",
          ["A machine has a carrying amount of $40,000 and 5 years left. Its residual value estimate rises from $0 to $5,000. What's the new annual depreciation?"],
          ["($40,000 − $5,000) ÷ 5 = $7,000."],
        ],
      ),
    ),
    summary(
      ["Useful life, residual value and depreciable amount", "Straight-line", "Written-down value", "Units of production", "Component depreciation", "Changes in estimates"],
      "Choose the method that matches how the asset is used up, and update estimates prospectively when they change.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Revaluation and Impairment",
      ["Assets can be carried at cost or, under some frameworks, at revalued amounts — and any asset can be impaired. This module covers both."],
      ["Compare the cost and revaluation models", "Record revaluation gains and losses", "Spot indicators of impairment", "Calculate recoverable amount and impairment losses", "Know when impairment can be reversed"],
    ),
    screen(
      "Cost model vs. revaluation model",
      compare(
        ["Cost model", "Cost less accumulated depreciation and impairment. Used by most businesses and required under US GAAP.", ["Simple", "Objective"]],
        ["Revaluation model", "Allowed under IFRS, AASB and Ind AS: a whole class of assets is carried at fair value, revalued regularly.", ["Reflects current values", "Needs valuations"]],
      ),
    ),
    screen(
      "Recording revaluations",
      p("Ironbark uses the revaluation model for land. Land carried at $500,000 is revalued to $620,000:"),
      journal([["Land", "$120,000", ""], ["Revaluation surplus (other comprehensive income)", "", "$120,000"]], "$120,000"),
      terms(
        ["Revaluation decrease", "Charged first against any surplus for that asset, with the rest in profit or loss."],
        ["Frequency", "Often enough that the carrying amount doesn't differ materially from fair value."],
      ),
    ),
    screen(
      "Indicators of impairment",
      p("At each reporting date, look for signs an asset may be worth less than its carrying amount:"),
      bullets(
        "Physical damage or obsolescence — e.g. a forklift damaged in an accident.",
        "Assets idle, or plans to dispose of them early.",
        "Worse-than-expected performance.",
        "Big adverse changes in markets, technology or law.",
      ),
      p("Ironbark lost a major client, so its specialist sorting machine now runs at a third of capacity — an impairment indicator."),
    ),
    screen(
      "Recoverable amount and impairment losses",
      p("Under IFRS (IAS 36), recoverable amount is the higher of fair value less costs of disposal and value in use (the present value of future cash flows)."),
      example(
        [["Sorting machine carrying amount", "$80,000"], ["Fair value less costs of disposal", "$60,000"], ["Value in use", "$65,000"], ["Recoverable amount (higher of the two)", "$65,000"]],
        ["Impairment loss", "$15,000"],
      ),
      tip("Depreciate the new amount", "After an impairment, depreciate the new, lower carrying amount over the remaining life."),
    ),
    screen(
      "US GAAP differences and reversals",
      table(
        ["Topic", "IFRS / Ind AS / AASB", "US GAAP"],
        [
          ["Test for assets held and used", "One step: compare carrying amount with recoverable amount", "Recoverability test with undiscounted cash flows; if it fails, impair to fair value"],
          ["Reversal of impairment", "Allowed (except goodwill), up to the depreciated cost had no impairment occurred", "Not allowed for assets held and used"],
          ["Upward revaluation", "Allowed under the revaluation model", "Not allowed"],
        ],
      ),
    ),
    mistakes(
      ["Revaluing a single asset in a class", "Revalue the whole class."],
      ["Taking revaluation gains to profit", "They go to OCI and the revaluation surplus."],
      ["Using the lower of the two values", "Recoverable amount is the higher."],
      ["Reversing impairment under US GAAP", "Not allowed for assets held and used."],
    ),
    check(
      4,
      q("Which framework doesn't allow upward revaluation of PP&E?", ["US GAAP", "IFRS", "Ind AS", "AASB"], 0, "US GAAP uses the cost model."),
      q("Land revalued from $500,000 to $620,000 under IFRS. Where does the $120,000 go?", ["Revaluation surplus in OCI", "Profit or loss", "Cash", "Revenue"], 0, "Increases go to the surplus."),
      q("Under IAS 36, recoverable amount is:", ["The higher of fair value less costs of disposal and value in use", "The lower of the two", "Always cost", "The tax value"], 0, "Take the higher."),
      q("Carrying amount $80,000, recoverable $65,000. Impairment?", ["$15,000", "$20,000", "$65,000", "$0"], 0, "$80,000 − $65,000."),
      q("Can impairment losses on assets held and used be reversed under US GAAP?", ["No", "Yes", "Only for land", "Only for vehicles"], 0, "US GAAP prohibits reversal."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Revaluation decrease",
          ["Land with a $120,000 revaluation surplus is revalued down by $150,000. Record it."],
          ["Dr Revaluation surplus $120,000 · Dr Impairment / revaluation loss (P&L) $30,000 · Cr Land $150,000."],
        ],
        [
          "Exercise 2 — Impairment",
          ["Carrying amount $50,000; fair value less costs of disposal $42,000; value in use $38,000. What's the impairment?"],
          ["Recoverable amount = $42,000 (the higher). Impairment = $8,000."],
        ],
      ),
    ),
    summary(
      ["The cost and revaluation models", "Recording revaluation increases and decreases", "Indicators of impairment", "Recoverable amount and impairment losses", "IFRS vs. US GAAP on revaluation and reversals"],
      "Carry assets at no more than they're worth: revalue classes where allowed, and test for impairment whenever there's a warning sign.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Disposals, Exchanges and Leases",
      ["Assets leave the books when they're sold, scrapped or traded in — and some assets are used under leases rather than owned. This module covers all of these."],
      ["Record sales and scrapping of assets", "Calculate gains and losses on disposal", "Account for trade-ins", "Classify assets held for sale", "Understand right-of-use assets from leases"],
    ),
    screen(
      "Selling an asset",
      p("A forklift cost $36,000, has accumulated depreciation of $24,000 (carrying amount $12,000) and is sold for $14,500."),
      journal(
        [
          ["Cash", "$14,500", ""],
          ["Accumulated depreciation", "$24,000", ""],
          ["Forklift — cost", "", "$36,000"],
          ["Gain on disposal", "", "$2,500"],
        ],
        "$38,500",
      ),
      p("If it were scrapped for nothing, the whole $12,000 carrying amount would be a loss on disposal."),
    ),
    screen(
      "Trade-ins",
      p("An old van (cost $20,000, accumulated depreciation $14,000) is traded in at a fair value of $7,000 against a new $30,000 van. Ironbark pays $23,000 in cash."),
      journal(
        [
          ["New van", "$30,000", ""],
          ["Accumulated depreciation — old van", "$14,000", ""],
          ["Old van — cost", "", "$20,000"],
          ["Cash", "", "$23,000"],
          ["Gain on disposal", "", "$1,000"],
        ],
        "$44,000",
      ),
      note("The gain is the trade-in value ($7,000) less the old van's carrying amount ($6,000)."),
    ),
    screen(
      "Assets held for sale",
      terms(
        ["When", "An asset is available for immediate sale and a sale is highly probable within a year (IFRS 5 / ASC 360)."],
        ["Accounting", "Stop depreciating, show it separately and measure it at the lower of carrying amount and fair value less costs to sell."],
      ),
      p("Ironbark decides to sell a depot with a carrying amount of $340,000; fair value less costs to sell is $325,000. It's reclassified as held for sale at $325,000, with a $15,000 loss."),
    ),
    screen(
      "Right-of-use assets from leases — an overview",
      p("Under IFRS 16, Ind AS 116, AASB 16 and ASC 842, most leases put a right-of-use (ROU) asset and a lease liability on the balance sheet."),
      example(
        [["Annual payment for a 5-year warehouse lease", "$24,000"], ["Present value at 6% (annuity factor 4.2124)", "≈ $101,100"]],
        ["Initial ROU asset and lease liability", "≈ $101,100"],
      ),
      table(
        ["Item", "Treatment"],
        [
          ["ROU asset", "Depreciated, usually over the lease term — about $20,220 a year here"],
          ["Lease liability", "Reduced by payments; interest charged on the balance"],
          ["Exemptions", "Short-term leases (12 months or less) and, under IFRS, low-value assets can be expensed"],
        ],
      ),
      note("Under ASC 842, operating leases also go on the balance sheet, but the expense is usually shown as a single straight-line lease cost."),
    ),
    mistakes(
      ["Removing only the asset's cost on disposal", "Remove accumulated depreciation too."],
      ["Recording the full trade-in value as gain", "Gain = trade-in value − carrying amount."],
      ["Depreciating held-for-sale assets", "Stop depreciating."],
      ["Leaving leases off the balance sheet", "Most leases create ROU assets and liabilities."],
    ),
    check(
      5,
      q("Carrying amount $12,000; sold for $14,500. What's the result?", ["$2,500 gain", "$2,500 loss", "$14,500 gain", "No gain"], 0, "Proceeds exceed carrying amount."),
      q("An asset with a $12,000 carrying amount is scrapped for nothing. What's the result?", ["$12,000 loss", "No effect", "$12,000 gain", "Revaluation"], 0, "The carrying amount is lost."),
      q("Old van carrying amount $6,000, trade-in fair value $7,000. What's the gain?", ["$1,000", "$7,000", "$6,000", "$23,000"], 0, "$7,000 − $6,000."),
      q("What happens to depreciation once an asset is held for sale?", ["It stops", "It continues", "It doubles", "It's reversed"], 0, "Held-for-sale assets aren't depreciated."),
      q("Under IFRS 16, most leases result in:", ["A right-of-use asset and a lease liability", "Only rent expense", "Revenue", "No accounting"], 0, "Leases come onto the balance sheet."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Disposal",
          ["A van cost $45,000 with accumulated depreciation $30,000 and sells for $12,000. Write the entry."],
          ["Carrying amount $15,000, so a $3,000 loss.", "Dr Cash $12,000 · Dr Accumulated depreciation $30,000 · Dr Loss on disposal $3,000 · Cr Vans $45,000."],
        ],
        [
          "Exercise 2 — Held for sale",
          ["Equipment with a carrying amount of $80,000 is held for sale; fair value less costs to sell is $90,000. At what amount is it measured?"],
          ["$80,000 — the lower of carrying amount and fair value less costs to sell. No gain is recognised until sale."],
        ],
      ),
    ),
    summary(
      ["Selling and scrapping assets", "Gains and losses on disposal", "Trade-ins", "Assets held for sale", "Right-of-use assets and lease liabilities"],
      "When an asset leaves, remove its cost and depreciation and recognise the gain or loss; when it's leased, bring the right of use onto the balance sheet.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reporting, Tax and Controls",
      ["The final module covers how fixed assets are reported, how tax depreciation differs from book depreciation, and the controls and checklist that keep the numbers right."],
      ["Prepare fixed asset notes and movement schedules", "Compare book and tax depreciation", "Understand deferred tax on depreciation differences", "Control additions, transfers and disposals", "Follow a year-end checklist"],
    ),
    screen(
      "The fixed asset movement schedule",
      table(
        ["", "Land", "Buildings", "Plant", "Total"],
        [
          ["Cost — opening", "$400,000", "$600,000", "$180,000", "$1,180,000"],
          ["Additions", "", "", "$84,000", "$84,000"],
          ["Disposals", "", "", "($16,000)", "($16,000)"],
          ["Cost — closing", "$400,000", "$600,000", "$248,000", "$1,248,000"],
          ["Accumulated depreciation — closing", "", "($360,000)", "($152,300)", "($512,300)"],
          ["Carrying amount — closing", "$400,000", "$240,000", "$95,700", "$735,700"],
        ],
        { numeric: [1, 2, 3, 4] },
      ),
      note("Land isn't depreciated. The closing totals agree with the register reconciliation in Module 2."),
    ),
    screen(
      "Book vs. tax depreciation",
      p("Tax depreciation follows tax law — for example MACRS in the US, Division 40 in Australia, and block-of-assets written-down value rates in India — so it often differs from book depreciation."),
      compare(
        ["Book depreciation", "Follows accounting standards and the business's policy.", ["Reflects how the asset is used"]],
        ["Tax depreciation", "Follows tax rules — rates, methods and special write-offs.", ["Reduces taxable profit"]],
      ),
    ),
    screen(
      "Deferred tax on depreciation differences",
      example(
        [["Tax depreciation this year", "$30,000"], ["Book depreciation this year", "$20,000"], ["Temporary difference", "$10,000"], ["Tax rate", "25%"]],
        ["Deferred tax liability created", "$2,500"],
      ),
      p("Faster tax depreciation means less tax now and more later — the deferred tax liability recognises that future tax."),
    ),
    screen(
      "Controls over additions, transfers and disposals",
      terms(
        ["Additions", "Approved capital expenditure requests; capitalisation reviewed against policy; assets tagged on arrival."],
        ["Transfers", "Assets moved between locations or entities recorded in the register."],
        ["Disposals", "Approved disposal forms; proceeds banked; register updated."],
        ["Access", "Only authorised staff can add or change register records."],
      ),
    ),
    screen(
      "Year-end checklist",
      bullets(
        "Register reconciled to the general ledger.",
        "Assets under construction reviewed and completed items transferred.",
        "Useful lives and residual values reviewed.",
        "Impairment indicators assessed.",
        "Physical verification completed and exceptions resolved.",
        "Movement schedule, notes and deferred tax prepared.",
      ),
    ),
    mistakes(
      ["Using tax depreciation in the books", "Book depreciation follows accounting standards."],
      ["Forgetting deferred tax", "Record temporary differences."],
      ["Disposals without approval", "Use disposal forms."],
      ["A schedule that doesn't agree with the register", "Reconcile them."],
    ),
    check(
      6,
      q("What does a fixed asset movement schedule show?", ["Opening balances, additions, disposals and closing balances", "Only sales", "Bank balances", "Payroll"], 0, "It explains changes in fixed assets."),
      q("Tax depreciation $30,000, book $20,000, tax rate 25%. Deferred tax liability created?", ["$2,500", "$7,500", "$10,000", "$5,000"], 0, "$10,000 × 25%."),
      q("Why does tax depreciation often differ from book depreciation?", ["Tax law sets its own rules and rates", "Accountants make errors", "It never differs", "Banks require it"], 0, "Different rules apply."),
      q("Which control covers disposals?", ["Approved disposal forms and register updates", "Sales invoices only", "Bank rules", "Payroll"], 0, "Disposals need approval and recording."),
      q("What should be reviewed at year end?", ["Useful lives and residual values", "Customer names", "Website traffic", "Office layout"], 0, "Estimates are reviewed annually."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Movement schedule",
          ["Vans: opening cost $210,000; additions $30,000; disposal cost $20,000. Opening accumulated depreciation $90,000; charge $35,000; disposal $14,000. What are closing cost, accumulated depreciation and carrying amount?"],
          ["Cost $220,000. Accumulated depreciation $111,000. Carrying amount $109,000."],
        ],
        [
          "Exercise 2 — Deferred tax",
          ["Book depreciation $50,000; tax depreciation $35,000; tax rate 30%. What arises?"],
          ["Book is faster by $15,000 → a deferred tax asset of $4,500 (less tax relief now, more later)."],
        ],
      ),
    ),
    summary(
      ["Fixed asset notes and movement schedules", "Book vs. tax depreciation", "Deferred tax on depreciation differences", "Controls over additions, transfers and disposals", "A year-end checklist"],
      "Report fixed assets clearly, track tax differences, and control every addition, transfer and disposal.",
    ),
  ],
}

export default lessons
