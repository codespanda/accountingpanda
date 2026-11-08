import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Fixed Assets and Depreciation — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "Property, plant and equipment and intangibles",
      terms(
        ["Property, plant and equipment (PP&E)", "Tangible assets held for use in the business for more than one period — land, buildings, machinery, vehicles, computers, furniture."],
        ["Intangible assets", "Non-physical assets such as software, patents, licences and trademarks. Purchased intangibles with a finite life are amortised."],
      ),
      compare(
        ["Capital expenditure", "Buys or improves an asset that benefits future periods.", ["A new delivery van", "Adding a floor to a building"]],
        ["Revenue expenditure", "Maintains an asset or is used up in the period.", ["Servicing the van", "Repainting an office"]],
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
          ["Professional fees to get it ready (e.g. architects)", "Yes"],
          ["Recoverable sales tax, GST or VAT", "No — claimed back"],
          ["Training staff to use it", "No — expense"],
          ["Repairs after it's in use", "No — expense"],
        ],
      ),
      example(
        [["Machine price", "$48,000"], ["Delivery", "$1,500"], ["Installation and testing", "$2,500"]],
        ["Cost capitalised", "$52,000"],
      ),
    ),
    screen(
      "Thresholds and subsequent costs",
      p("A capitalisation threshold (e.g. $2,500) lets small items be expensed for practicality. Set it in a written policy and apply it consistently."),
      terms(
        ["Repairs and maintenance", "Restore the asset to its original condition — expense."],
        ["Improvements", "Extend life, increase capacity or improve quality — capitalise."],
        ["Replacement of a major part", "Capitalise the new part and derecognise the replaced part's remaining carrying amount."],
      ),
      note("Tax rules may have their own thresholds and immediate write-off rules, which can differ from the accounting policy."),
    ),
    check(
      1,
      q("Which is capital expenditure?", ["Servicing a van", "Buying a new van", "Repainting an office", "Cleaning machinery"], 1, "New assets benefit future periods."),
      q("Machine $48,000, delivery $1,500, installation $2,500. What's the capitalised cost?", ["$48,000", "$50,500", "$52,000", "$49,500"], 2, "All costs to get it ready for use."),
      q("Is staff training on new equipment capitalised?", ["Yes", "No — it's expensed", "Only over $2,500", "Only under IFRS"], 1, "Training doesn't create the asset."),
      q("A repair restores a machine to its original condition. How is it treated?", ["Capitalised", "Expensed", "Added to land", "Deferred"], 1, "Routine repairs are expenses."),
      q("Why have a capitalisation threshold?", ["To expense small items for practicality", "To avoid depreciation completely", "Tax law always requires it", "To increase profit"], 0, "It keeps the register manageable."),
    ),
  ],
  1: [
    screen(
      "What a fixed asset register records",
      table(
        ["Field", "Example"],
        [
          ["Asset ID / tag", "FA-0142"],
          ["Description and serial number", "Forklift, SN 7781-X"],
          ["Class and location", "Plant & machinery — Warehouse 2"],
          ["Acquisition date and cost", "Mar 15, 2026 · $36,000"],
          ["Depreciation method, life, residual value", "Straight-line · 8 years · $4,000"],
          ["Accumulated depreciation and carrying amount", "Updated monthly"],
          ["Custodian", "Warehouse manager"],
        ],
      ),
    ),
    screen(
      "Assets under construction and physical verification",
      terms(
        ["Assets under construction (capital work in progress)", "Costs of assets being built or installed. Not depreciated until ready for use — then transferred to the right class."],
        ["Physical verification", "Periodically check that assets in the register exist and are in use, by scanning tags or counting by location."],
      ),
      steps(
        ["Print the register by location", "Or use a mobile scanning app."],
        ["Check each asset", "Exists? Condition? Still in use?"],
        ["Record exceptions", "Missing, idle, damaged or unrecorded assets."],
        ["Adjust", "Write off missing assets, assess damaged ones for impairment, add unrecorded ones."],
      ),
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
      p("Cause: one month's depreciation on new assets was calculated in the register but the journal wasn't posted. Post it and the difference clears."),
      tip("Post from the register", "Generate the depreciation journal from the register each month so the two can't drift apart."),
    ),
    check(
      2,
      q("Which field identifies a physical asset in the register?", ["Asset ID / tag", "Supplier invoice", "Bank account", "Customer code"], 0, "Tags link records to physical items."),
      q("Are assets under construction depreciated?", ["Yes", "No — not until ready for use", "Only buildings", "Only under US GAAP"], 1, "Depreciation starts when available for use."),
      q("A verification finds an asset missing. What happens?", ["Write it off after investigation", "Keep depreciating", "Ignore it", "Double its value"], 0, "Missing assets must be removed."),
      q("Register accumulated depreciation is $2,500 higher than the GL. A likely cause?", ["A depreciation journal not posted", "A sale", "A bank fee", "Revenue error"], 0, "The register calculated it; the GL didn't receive it."),
      q("How can the register and GL be kept in step?", ["Generate depreciation journals from the register", "Update yearly only", "Use separate rates", "Keep no register"], 0, "One source prevents drift."),
    ),
  ],
  2: [
    screen(
      "Depreciable amount and straight-line",
      example(
        [["Cost", "$36,000"], ["Less: residual value", "($4,000)"], ["Depreciable amount", "$32,000"], ["Useful life", "8 years"]],
        ["Straight-line depreciation per year", "$4,000"],
      ),
      p("Depreciation starts when the asset is available for use. For an asset ready on March 15, many businesses charge from the start of the next month (or pro rata) — apply your policy consistently."),
    ),
    screen(
      "Reducing balance and units of production",
      h("Written-down value (reducing balance) at 25%"),
      table(
        ["Year", "Opening value", "Depreciation", "Closing value"],
        [
          ["1", "$36,000", "$9,000", "$27,000"],
          ["2", "$27,000", "$6,750", "$20,250"],
          ["3", "$20,250", "$5,063", "$15,187"],
        ],
        { numeric: [1, 2, 3] },
      ),
      h("Units of production"),
      p("A machine costs $100,000, has a $10,000 residual value and is expected to produce 450,000 units: $90,000 ÷ 450,000 = $0.20 per unit. In a year producing 60,000 units, depreciation is $12,000."),
    ),
    screen(
      "Components and changes in estimates",
      terms(
        ["Component depreciation", "Significant parts with different lives are depreciated separately — e.g. a $1,000,000 building split into a $150,000 roof (20 years) and $850,000 structure (50 years). Required under IFRS; allowed under US GAAP."],
        ["Changes in estimates", "If useful life or residual value changes, adjust depreciation prospectively — from now on. Don't restate past years."],
      ),
      example(
        [["Cost", "$50,000"], ["Depreciated 4 years at $5,000", "($20,000)"], ["Carrying amount", "$30,000"], ["Revised remaining life", "3 years"]],
        ["New annual depreciation", "$10,000"],
      ),
    ),
    check(
      3,
      q("Cost $36,000, residual $4,000, life 8 years. Straight-line per year?", ["$4,500", "$4,000", "$3,600", "$32,000"], 1, "$32,000 ÷ 8."),
      q("Reducing balance at 25% on $36,000. Year 2 depreciation?", ["$9,000", "$6,750", "$5,063", "$4,000"], 1, "25% of $27,000."),
      q("Units-of-production rate $0.20; 60,000 units produced. Depreciation?", ["$6,000", "$12,000", "$20,000", "$60,000"], 1, "60,000 × $0.20."),
      q("A change in useful life is applied:", ["Retrospectively", "Prospectively", "Only at disposal", "Never"], 1, "Estimates change from now on."),
      q("Carrying amount $30,000, revised remaining life 3 years. New annual depreciation?", ["$5,000", "$10,000", "$15,000", "$30,000"], 1, "$30,000 ÷ 3."),
    ),
  ],
  3: [
    screen(
      "Cost model vs. revaluation model",
      compare(
        ["Cost model", "Cost less accumulated depreciation and impairment. Used by most businesses and required under US GAAP.", ["Simple", "Objective"]],
        ["Revaluation model", "Allowed under IFRS, AASB and Ind AS: carry a whole class of assets at fair value, revalued regularly.", ["Reflects current values", "Needs valuations"]],
      ),
      p("Land carried at $500,000 is revalued to $620,000:"),
      journal([["Land", "$120,000", ""], ["Revaluation surplus (other comprehensive income)", "", "$120,000"]], "$120,000"),
      note("A revaluation decrease goes first against any surplus for that asset, with the rest in profit or loss."),
    ),
    screen(
      "Impairment",
      p("An asset is impaired when its carrying amount is more than it can recover. Look for indicators each reporting date:"),
      bullets(
        "Physical damage or obsolescence.",
        "Assets idle or plans to dispose of them early.",
        "Worse-than-expected performance.",
        "Big adverse changes in markets, technology or law.",
      ),
      h("Under IFRS (IAS 36)"),
      example(
        [["Carrying amount", "$80,000"], ["Fair value less costs of disposal", "$60,000"], ["Value in use (discounted future cash flows)", "$65,000"], ["Recoverable amount (higher of the two)", "$65,000"]],
        ["Impairment loss", "$15,000"],
      ),
      journal([["Impairment loss", "$15,000", ""], ["Accumulated impairment", "", "$15,000"]], "$15,000"),
    ),
    screen(
      "US GAAP differences and reversals",
      table(
        ["Topic", "IFRS / Ind AS / AASB", "US GAAP"],
        [
          ["Test for assets held and used", "One step: compare carrying amount with recoverable amount", "Recoverability test with undiscounted cash flows; if it fails, impair to fair value"],
          ["Reversal of impairment", "Allowed (except goodwill), up to the depreciated cost had no impairment occurred", "Not allowed for assets held and used"],
          ["Revaluation upwards", "Allowed under the revaluation model", "Not allowed"],
        ],
      ),
      tip("Depreciation after impairment", "After an impairment, depreciate the new, lower carrying amount over the remaining life."),
    ),
    check(
      4,
      q("Which framework doesn't allow upward revaluation of PP&E?", ["IFRS", "Ind AS", "US GAAP", "AASB"], 2, "US GAAP uses the cost model."),
      q("Land revalued from $500,000 to $620,000 under IFRS. Where does the $120,000 go?", ["Profit or loss", "Revaluation surplus in OCI", "Cash", "Revenue"], 1, "Increases go to the revaluation surplus."),
      q("Under IAS 36, recoverable amount is:", ["The lower of fair value less costs of disposal and value in use", "The higher of the two", "Always cost", "The tax value"], 1, "It's the higher of the two."),
      q("Carrying amount $80,000, recoverable $65,000. Impairment?", ["$15,000", "$20,000", "$65,000", "$0"], 0, "$80,000 − $65,000."),
      q("Can impairment losses on assets held and used be reversed under US GAAP?", ["Yes", "No", "Only for land", "Only for vehicles"], 1, "US GAAP prohibits reversal."),
    ),
  ],
  4: [
    screen(
      "Selling and scrapping assets",
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
      p("If scrapped for nothing, the $12,000 carrying amount is a loss on disposal."),
    ),
    screen(
      "Trade-ins and assets held for sale",
      p("An old van (cost $20,000, accumulated depreciation $14,000) is traded in at a fair value of $7,000 against a new $30,000 van. $23,000 is paid in cash."),
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
      terms(
        ["Held for sale (IFRS 5 / ASC 360)", "When an asset is available for immediate sale and a sale is highly probable within a year, stop depreciating it, show it separately and measure it at the lower of carrying amount and fair value less costs to sell."],
      ),
    ),
    screen(
      "Right-of-use assets — an overview",
      p("Under IFRS 16, Ind AS 116, AASB 16 and ASC 842, most leases put a right-of-use (ROU) asset and a lease liability on the balance sheet."),
      table(
        ["Item", "Treatment"],
        [
          ["Initial ROU asset", "Lease liability (present value of lease payments) plus initial direct costs and prepaid payments"],
          ["ROU asset afterwards", "Depreciated, usually over the lease term"],
          ["Lease liability", "Reduced by payments; interest charged on the balance"],
          ["Exemptions", "Short-term leases (12 months or less) and, under IFRS, low-value assets can be expensed"],
        ],
      ),
      note("Under ASC 842, operating leases also go on the balance sheet, but the expense is usually shown as a single straight-line lease cost."),
    ),
    check(
      5,
      q("Carrying amount $12,000; sold for $14,500. What's the result?", ["$2,500 gain", "$2,500 loss", "$14,500 gain", "No gain"], 0, "Proceeds exceed carrying amount."),
      q("An asset with a $12,000 carrying amount is scrapped for nothing. What's the result?", ["No effect", "$12,000 loss", "$12,000 gain", "Revaluation"], 1, "The whole carrying amount is lost."),
      q("Old van carrying amount $6,000, trade-in fair value $7,000. What's the gain?", ["$1,000", "$7,000", "$6,000", "$23,000"], 0, "$7,000 − $6,000."),
      q("What happens to depreciation once an asset is classified as held for sale?", ["It continues", "It stops", "It doubles", "It's reversed"], 1, "Held-for-sale assets aren't depreciated."),
      q("Under IFRS 16, most leases result in:", ["A right-of-use asset and a lease liability", "Only rent expense", "Revenue", "No accounting"], 0, "Leases come onto the balance sheet."),
    ),
  ],
  5: [
    screen(
      "Fixed asset notes and movement schedules",
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
      "Book vs. tax depreciation and deferred tax",
      p("Tax depreciation follows tax law (e.g. MACRS in the US, Division 40 in Australia, written-down value rates under India's Income-tax Act), so it often differs from book depreciation."),
      example(
        [["Tax depreciation this year", "$30,000"], ["Book depreciation this year", "$20,000"], ["Temporary difference", "$10,000"], ["Tax rate", "25%"]],
        ["Deferred tax liability created", "$2,500"],
      ),
      note("Faster tax depreciation means less tax now and more later — the deferred tax liability recognises that future tax."),
    ),
    screen(
      "Controls and the year-end checklist",
      terms(
        ["Additions", "Approved capital expenditure requests; capitalisation reviewed against policy."],
        ["Transfers", "Assets moved between locations or entities recorded in the register."],
        ["Disposals", "Approved disposal forms; proceeds banked; register updated."],
      ),
      h("Year-end checklist"),
      bullets(
        "Register reconciled to the general ledger.",
        "Assets under construction reviewed and completed items transferred.",
        "Useful lives and residual values reviewed.",
        "Impairment indicators assessed.",
        "Physical verification completed and exceptions resolved.",
        "Movement schedule and deferred tax prepared.",
      ),
    ),
    check(
      6,
      q("What does a fixed asset movement schedule show?", ["Opening balances, additions, disposals and closing balances", "Only sales", "Bank balances", "Payroll"], 0, "It explains changes in fixed assets."),
      q("Tax depreciation $30,000, book $20,000, tax rate 25%. Deferred tax liability created?", ["$2,500", "$7,500", "$10,000", "$5,000"], 0, "$10,000 × 25%."),
      q("Why does tax depreciation often differ from book depreciation?", ["Tax law sets its own rules and rates", "Accountants make errors", "It never differs", "Banks require it"], 0, "Different rules apply."),
      q("Which control covers disposals?", ["Approved disposal forms and register updates", "Sales invoices only", "Bank rules", "Payroll"], 0, "Disposals need approval and recording."),
      q("What should be reviewed at year-end?", ["Useful lives and residual values", "Customer names", "Website traffic", "Office layout"], 0, "Estimates should be reviewed annually."),
    ),
  ],
}

export default lessons
