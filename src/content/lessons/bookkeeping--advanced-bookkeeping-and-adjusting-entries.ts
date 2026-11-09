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
  tip,
} from "@/lib/lessonKit"

// Advanced Bookkeeping and Adjusting Entries — lesson screens by module index (0 = Module 1).
// The course follows Granite Peak Outfitters, an outdoor gear shop that also
// runs guided hikes and sells trail-club memberships, through its year end.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Accrual Accounting",
      ["Day-to-day bookkeeping records invoices, bills and payments. Accrual accounting goes further: it puts income and costs in the period they belong to. This module explains why — and why adjusting entries are needed."],
      ["Compare cash basis and accrual basis", "Apply the matching principle", "Explain basic revenue recognition", "Explain why adjusting entries are needed"],
    ),
    screen(
      "Meet Granite Peak Outfitters",
      p("Granite Peak Outfitters sells hiking and camping gear, runs guided hikes and sells annual trail-club memberships. Its owner, Luis, has asked you to prepare its year-end books at December 31."),
      p("Granite Peak uses accrual accounting. In this course you'll make every adjustment needed before its financial statements are finalised."),
    ),
    screen(
      "Cash basis vs. accrual basis",
      compare(
        ["Cash basis", "Income is recorded when cash is received and expenses when cash is paid.", ["Simple", "Can distort monthly and yearly profit"]],
        ["Accrual basis", "Income is recorded when earned and expenses when incurred, regardless of when cash moves.", ["Matches income and costs", "Required by accounting standards for most businesses"]],
      ),
      example(
        [["Guided hikes delivered in December, paid in January", "$5,000"], ["Cash basis — December income", "$0"], ["Accrual basis — December income", "$5,000"]],
        ["Timing difference", "$5,000"],
      ),
    ),
    screen(
      "The matching principle",
      p("Expenses are recorded in the same period as the revenue they help earn."),
      p("Example: Granite Peak's sales staff earn a 5% commission on December sales of $8,000 — $400 paid in January. The $400 is a December expense, matched to December's sales."),
      tip("Ask “which period benefited?”", "If a cost helped earn this period's revenue, it belongs to this period — even if it's paid later."),
    ),
    screen(
      "Revenue recognition basics",
      p("Revenue is recorded when the business has done what it promised — delivered goods or performed services — not simply when cash arrives."),
      table(
        ["Granite Peak transaction", "When is revenue recognised?"],
        [
          ["Tent sold and taken home on December 20", "December 20"],
          ["Hike booked and paid in November, run on December 5", "December 5"],
          ["Annual membership paid on July 1", "Spread over the 12 months it covers"],
        ],
      ),
    ),
    screen(
      "Why adjusting entries are needed",
      table(
        ["Type", "Situation", "Granite Peak example"],
        [
          ["Accrued expense", "Cost incurred, not yet billed", "Staff wages earned in the last days of the year"],
          ["Accrued revenue", "Income earned, not yet invoiced", "Guided hikes for a school delivered but not yet billed"],
          ["Prepaid expense", "Paid in advance, used over time", "Annual insurance"],
          ["Deferred revenue", "Received in advance, earned over time", "Trail-club memberships"],
          ["Estimates", "Wear and tear or likely losses", "Depreciation, bad debts, stock shrinkage"],
        ],
      ),
      note("Adjusting entries almost never involve cash. They move amounts between balance sheet and profit and loss accounts."),
    ),
    mistakes(
      ["Recording revenue when cash arrives", "Record it when earned."],
      ["Recording costs when paid", "Record them when incurred."],
      ["Recognising a full year's membership upfront", "Spread it over the months it covers."],
      ["Skipping adjustments at year end", "Profit will be wrong."],
    ),
    check(
      1,
      q("Hikes delivered in December are paid in January. Under accrual accounting, when is it income?", ["December", "January", "When banked", "At year end only"], 0, "Income is recorded when earned."),
      q("What does the matching principle require?", ["Expenses recorded in the period of the revenue they help earn", "Cash to equal profit", "Equal monthly expenses", "Paying bills early"], 0, "Costs are matched to related revenue."),
      q("When is revenue generally recognised?", ["When the business has delivered what it promised", "When the order is placed", "When the quote is sent", "When the year ends"], 0, "Performance triggers recognition."),
      q("A December sales commission of $400 is paid in January. When is it an expense?", ["December", "January", "Never", "When the employee asks"], 0, "It's matched to December's sales."),
      q("Do adjusting entries usually involve cash?", ["Rarely — they move amounts between accounts", "Yes, always", "Only for depreciation", "Only at month end"], 0, "They're non-cash adjustments."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which period?",
          ["(a) A kayak sold December 30, paid January 10. (b) December electricity billed in January. (c) A January hike paid in December."],
          ["(a) December revenue. (b) December expense — accrue it. (c) January revenue — a deposit (deferred revenue) at December 31."],
        ],
        [
          "Exercise 2 — Cash vs. accrual",
          ["December: cash received $40,000, of which $6,000 was for November sales; $3,000 of December sales are unpaid. What's December revenue on each basis?"],
          ["Cash basis: $40,000.", "Accrual basis: $40,000 − $6,000 + $3,000 = $37,000."],
        ],
      ),
    ),
    summary(
      ["Cash basis vs. accrual basis", "The matching principle", "Revenue recognition basics", "The types of adjusting entries"],
      "Accrual accounting asks one question of every amount: which period does it belong to?",
    ),
  ],
  1: [
    overview(
      "Module 2 — Accruals",
      ["Accruals capture income and costs that belong to this period but haven't been invoiced or billed yet. This module covers Granite Peak's year-end accruals and how reversing entries keep them clean."],
      ["Record accrued expenses", "Record accrued revenue", "Use reversing entries"],
    ),
    screen(
      "Accrued expenses",
      p("Granite Peak pays staff every Friday for the week. December 31 is a Wednesday, so three days of wages — $2,700 — are owed but unpaid."),
      journal([["Wages expense", "$2,700", ""], ["Accrued wages", "", "$2,700"]], "$2,700"),
      p("Other common accruals: utilities, interest on loans, professional fees for work already done, and bonuses earned during the year."),
    ),
    screen(
      "More accrued expenses",
      table(
        ["Item", "Amount", "Entry"],
        [
          ["December electricity, billed in January", "$620", "Dr Utilities · Cr Accrued expenses"],
          ["December loan interest, paid in January", "$310", "Dr Interest expense · Cr Accrued interest"],
          ["Year-end accounting fee for December work", "$1,500", "Dr Professional fees · Cr Accrued expenses"],
        ],
      ),
      tip("Use evidence for estimates", "Base accruals on contracts, rates, past bills or confirmed work — and keep a schedule showing how each amount was worked out."),
    ),
    screen(
      "Accrued revenue",
      p("Granite Peak ran $4,000 of guided hikes for Ridge Valley School in December under a contract that bills monthly in arrears. The invoice will be issued on January 3."),
      journal([["Accrued revenue (unbilled receivables)", "$4,000", ""], ["Guided hike revenue", "", "$4,000"]], "$4,000"),
      caution("Only accrue revenue that has been earned and can be measured reliably. Don't accrue hoped-for sales."),
    ),
    screen(
      "Reversing entries",
      p("A reversing entry cancels an accrual on the first day of the next period, so the real bill or invoice can be recorded normally without double-counting."),
      steps(
        ["Dec 31 — accrue", "Debit Wages expense $2,700, credit Accrued wages $2,700."],
        ["Jan 1 — reverse", "Debit Accrued wages $2,700, credit Wages expense $2,700."],
        ["Jan 2 — pay the full week as usual", "Debit Wages expense $4,500, credit Cash $4,500."],
        ["Result", "January wage expense = $4,500 − $2,700 = $1,800 — the two January days."],
      ),
      tip("Let software do it", "Most accounting software can set a journal to auto-reverse on a chosen date."),
    ),
    screen(
      "Worked example: Granite Peak's accrual schedule",
      table(
        ["Accrual", "Basis", "Amount", "Reverses"],
        [
          ["Wages", "3 of 5 days of $4,500 weekly pay", "$2,700", "Jan 1"],
          ["Electricity", "Average of last three bills", "$620", "Jan 1"],
          ["Loan interest", "Loan statement", "$310", "Jan 1"],
          ["Accounting fee", "Engagement letter", "$1,500", "Jan 1"],
          ["Ridge Valley School hikes", "Signed contract and hike log", "$4,000", "Jan 1"],
        ],
        { numeric: [2] },
      ),
      p("Total accrued expenses: $5,130. Accrued revenue: $4,000."),
    ),
    mistakes(
      ["Accruing without evidence", "Keep a schedule showing the basis."],
      ["Forgetting to reverse accruals", "The real bill will double-count the cost."],
      ["Accruing hoped-for revenue", "Only accrue what's earned."],
      ["Leaving accruals in the balance sheet for months", "Review and clear them."],
    ),
    check(
      2,
      q("Three days of wages ($2,700) are unpaid at year end. What's credited?", ["Accrued wages", "Cash", "Wages expense", "Revenue"], 0, "The liability for unpaid wages."),
      q("$4,000 of hikes were delivered in December and invoiced January 3. What's the December entry?", ["Debit Accrued revenue, credit Guided hike revenue", "Debit Cash, credit Revenue", "No entry", "Debit Revenue, credit Accrued revenue"], 0, "Accrue the earned revenue."),
      q("What does a reversing entry do?", ["Cancels an accrual at the start of the next period", "Deletes the accrual", "Doubles the expense", "Pays the bill"], 0, "It avoids double-counting."),
      q("After reversal and paying the $4,500 week, what's January's wage expense?", ["$1,800", "$4,500", "$2,700", "$7,200"], 0, "$4,500 − $2,700."),
      q("Which revenue should NOT be accrued?", ["Hoped-for future sales", "Earned and measurable work", "Completed services awaiting invoice", "Interest earned"], 0, "Only earned revenue is accrued."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Wages accrual",
          ["Weekly wages are $3,000 for a 5-day week. The year ends on a Tuesday (2 days unpaid). Write the accrual."],
          ["$3,000 × 2 ÷ 5 = $1,200. Dr Wages expense $1,200 · Cr Accrued wages $1,200."],
        ],
        [
          "Exercise 2 — Reversal",
          ["After reversing the $1,200 and paying the full $3,000 week, what is the new year's wage expense for that week?"],
          ["$3,000 − $1,200 = $1,800 — the three days in the new year."],
        ],
      ),
    ),
    summary(
      ["Accrued expenses — wages, utilities, interest, fees", "Accrued revenue", "Reversing entries", "An accrual schedule with evidence"],
      "Accrue what's been incurred or earned, document how you worked it out, and reverse it so nothing is counted twice.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Deferrals",
      ["Deferrals are the opposite of accruals: cash moves first, and the income or expense is recognised later. This module covers Granite Peak's prepaid insurance and trail-club memberships."],
      ["Record prepaid expenses", "Amortise prepayments with a schedule", "Record deferred (unearned) revenue"],
    ),
    screen(
      "Prepaid expenses",
      p("On January 1, Granite Peak paid $3,600 for a year of insurance."),
      journal([["Prepaid insurance", "$3,600", ""], ["Cash", "", "$3,600"]], "$3,600"),
      p("The prepayment is an asset — Granite Peak has paid for cover it hasn't used yet."),
    ),
    screen(
      "Amortising prepayments",
      p("Each month, $300 ($3,600 ÷ 12) of the cover is used up:"),
      journal([["Insurance expense", "$300", ""], ["Prepaid insurance", "", "$300"]], "$300"),
      table(
        ["Month", "Expense", "Prepaid balance"],
        [
          ["January", "$300", "$3,300"],
          ["February", "$300", "$3,000"],
          ["March", "$300", "$2,700"],
          ["December", "$300", "$0"],
        ],
        { numeric: [1, 2] },
      ),
    ),
    screen(
      "A prepayments schedule",
      table(
        ["Item", "Paid", "Total", "Months", "Monthly", "Balance at Dec 31"],
        [
          ["Insurance", "Jan 1", "$3,600", "12", "$300", "$0"],
          ["Booking software", "Oct 1", "$1,200", "12", "$100", "$900"],
          ["Trade show stand", "Dec 1", "$1,800", "6", "$300", "$1,500"],
        ],
        { footer: ["Total prepaid", "", "", "", "", "$2,400"], numeric: [2, 4, 5] },
      ),
      tip("Schedule = ledger", "The schedule's total should equal the Prepaid expenses balance on the balance sheet."),
    ),
    screen(
      "Deferred (unearned) revenue",
      p("Trail-club members pay $180 upfront for 12 months of member benefits. On July 1, 10 members joined: $1,800."),
      journal([["Cash", "$1,800", ""], ["Deferred revenue", "", "$1,800"]], "$1,800"),
      p("Each month, $150 is earned:"),
      journal([["Deferred revenue", "$150", ""], ["Membership revenue", "", "$150"]], "$150"),
      note("Deferred revenue is a liability: until the benefits are provided, Granite Peak owes them to the members."),
    ),
    screen(
      "Worked example: memberships at year end",
      example(
        [["Received July 1", "$1,800"], ["Earned July–December (6 × $150)", "($900)"]],
        ["Deferred revenue at December 31", "$900"],
      ),
      p("Half the memberships' value is earned this year and half next year."),
    ),
    mistakes(
      ["Expensing an annual payment in one month", "Spread it as a prepayment."],
      ["Recognising memberships when paid", "Earn them over the period."],
      ["No prepayments schedule", "Keep one and reconcile it."],
      ["Forgetting to amortise", "Post the monthly entry."],
    ),
    check(
      3,
      q("$3,600 of insurance covers 12 months. What's the monthly expense?", ["$300", "$3,600", "$360", "$30"], 0, "$3,600 ÷ 12."),
      q("What type of account is prepaid insurance?", ["Asset", "Liability", "Expense", "Revenue"], 0, "A benefit still to be used."),
      q("After three months, what's the prepaid insurance balance?", ["$2,700", "$3,300", "$900", "$3,000"], 0, "$3,600 − 3 × $300."),
      q("$1,800 of memberships covers 12 months. What's earned each month?", ["$150", "$1,800", "$180", "$100"], 0, "$1,800 ÷ 12."),
      q("What type of account is deferred revenue?", ["Liability", "Asset", "Revenue", "Expense"], 0, "Granite Peak owes the benefits."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Prepayment",
          ["A $2,400 annual website hosting plan is paid on April 1. What's the prepaid balance at December 31?"],
          ["Monthly $200; 9 months used (April–December) = $1,800.", "Balance = $2,400 − $1,800 = $600."],
        ],
        [
          "Exercise 2 — Deferred revenue",
          ["$3,600 of memberships are sold on October 1 for 12 months. How much is earned by December 31, and how much is deferred?"],
          ["Monthly $300 × 3 = $900 earned.", "Deferred = $2,700."],
        ],
      ),
    ),
    summary(
      ["Prepaid expenses as assets", "Amortising with a schedule", "Deferred revenue as a liability", "Earning deferred revenue over time"],
      "Cash first, recognition later: spread prepayments and deferred revenue over the periods they cover.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Fixed Assets and Depreciation",
      ["Granite Peak owns shop fittings, a rental van and climbing equipment. This module covers what to capitalise, how to depreciate, and how to record disposals."],
      ["Decide whether to capitalise or expense", "Calculate straight-line depreciation", "Calculate declining-balance depreciation", "Record disposals", "Keep a fixed asset register"],
    ),
    screen(
      "Capitalising vs. expensing",
      compare(
        ["Capitalise", "Items that benefit future periods and cost more than the capitalisation threshold.", ["Shop fittings", "Rental van", "Climbing wall"]],
        ["Expense", "Items used up quickly or below the threshold.", ["Repairs", "Small tools", "Cleaning supplies"]],
      ),
      note("Include costs needed to get an asset ready for use — delivery and installation — in its cost. Routine repairs are expenses."),
    ),
    screen(
      "Straight-line depreciation",
      example(
        [["Cost of shop fittings", "$10,000"], ["Residual value", "$0"], ["Useful life", "5 years"]],
        ["Depreciation per year", "$2,000"],
      ),
      journal([["Depreciation expense", "$2,000", ""], ["Accumulated depreciation", "", "$2,000"]], "$2,000"),
    ),
    screen(
      "Declining-balance depreciation",
      p("Declining balance charges more in early years. With double-declining balance, the rate is 2 ÷ life = 40% for a 5-year life, applied to the remaining book value."),
      table(
        ["Year", "Opening book value", "Depreciation (40%)", "Closing book value"],
        [
          ["1", "$10,000", "$4,000", "$6,000"],
          ["2", "$6,000", "$2,400", "$3,600"],
          ["3", "$3,600", "$1,440", "$2,160"],
        ],
        { numeric: [1, 2, 3] },
      ),
      note("Tax depreciation rules may differ from the books. The accountant handles any differences on the tax return."),
    ),
    screen(
      "Disposals",
      p("Granite Peak's old rental van cost $20,000 and has $14,000 of accumulated depreciation (book value $6,000). It's sold for $5,000."),
      journal(
        [
          ["Cash", "$5,000", ""],
          ["Accumulated depreciation", "$14,000", ""],
          ["Loss on disposal", "$1,000", ""],
          ["Vehicles", "", "$20,000"],
        ],
        "$20,000",
      ),
      tip("Remove both", "A disposal removes the asset's cost and its accumulated depreciation."),
    ),
    screen(
      "The fixed asset register",
      bullets(
        "Description, location and serial number.",
        "Purchase date and cost.",
        "Depreciation method, useful life and residual value.",
        "Accumulated depreciation and book value.",
        "Disposal date and proceeds.",
      ),
      caution("Total cost and accumulated depreciation in the register must agree with the balance sheet."),
    ),
    mistakes(
      ["Expensing equipment above the threshold", "Capitalise it."],
      ["Capitalising repairs", "Routine repairs are expenses."],
      ["Leaving disposed assets on the books", "Remove cost and accumulated depreciation."],
      ["A register that doesn't match the ledger", "Reconcile them."],
    ),
    check(
      4,
      q("A $10,000 asset has a 5-year life and no residual value. Straight-line depreciation a year?", ["$2,000", "$1,000", "$4,000", "$5,000"], 0, "$10,000 ÷ 5."),
      q("With double-declining balance on a 5-year life, what's the rate?", ["40%", "20%", "50%", "10%"], 0, "2 ÷ 5."),
      q("What is year 2 depreciation in the double-declining example?", ["$2,400", "$4,000", "$2,000", "$1,440"], 0, "40% of $6,000."),
      q("A van with a $6,000 book value sells for $5,000. What's the result?", ["$1,000 loss", "$1,000 gain", "$5,000 gain", "No gain or loss"], 0, "Proceeds are below book value."),
      q("Which cost is normally capitalised?", ["Installing a new climbing wall", "Routine repairs", "Cleaning supplies", "Small tools"], 0, "Costs to get an asset ready for use."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Straight line with residual value",
          ["A $26,000 van has a $6,000 residual value and a 4-year life. What's annual depreciation?"],
          ["($26,000 − $6,000) ÷ 4 = $5,000."],
        ],
        [
          "Exercise 2 — Disposal",
          ["Equipment costing $8,000 with $5,500 accumulated depreciation is sold for $3,000. Write the entry."],
          ["Book value $2,500, so a $500 gain.", "Dr Cash $3,000 · Dr Accumulated depreciation $5,500 · Cr Equipment $8,000 · Cr Gain on disposal $500."],
        ],
      ),
    ),
    summary(
      ["Capitalising vs. expensing", "Straight-line depreciation", "Double-declining-balance depreciation", "Recording disposals with gains and losses", "The fixed asset register"],
      "Capitalise what lasts, depreciate it consistently, and remove it fully when it's sold or scrapped.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Inventory and Other Adjustments",
      ["Year end also means checking stock, estimating bad debts and revaluing foreign-currency balances. This module covers Granite Peak's final adjustments."],
      ["Adjust inventory to the count", "Calculate cost of goods sold", "Set up a bad debt allowance", "Revalue foreign-currency balances"],
    ),
    screen(
      "Inventory counts and cost of goods sold",
      p("Cost of goods sold can be calculated from inventory figures:"),
      example(
        [["Opening inventory", "$12,000"], ["Add: purchases", "$30,000"], ["Less: closing inventory (counted)", "($14,500)"]],
        ["Cost of goods sold", "$27,500"],
      ),
    ),
    screen(
      "Shrinkage",
      p("Under a perpetual system, the books show $15,000 of stock but the year-end count finds $14,500. The $500 difference is written down:"),
      journal([["Cost of goods sold — inventory shrinkage", "$500", ""], ["Inventory", "", "$500"]], "$500"),
      caution("Investigate large or repeated shortfalls — count errors, unrecorded returns, damage or theft — before adjusting."),
    ),
    screen(
      "Bad debt allowances",
      p("At year end, Granite Peak's receivables from clubs and schools total $40,000. Based on experience, 3% are expected to be uncollectible: $1,200. The allowance already holds $300."),
      journal([["Bad debt expense", "$900", ""], ["Allowance for doubtful accounts", "", "$900"]], "$900"),
      p("On the balance sheet, receivables show at $40,000 − $1,200 = $38,800."),
      tip("Use the aging report", "Higher percentages for older balances give a better estimate than one flat rate."),
    ),
    screen(
      "Foreign currency revaluation basics",
      p("Granite Peak sold €10,000 of gear to a European tour company when €1 = $1.10, recording $11,000. At December 31, €1 = $1.08, so the receivable is now worth $10,800."),
      journal([["Foreign exchange loss (unrealised)", "$200", ""], ["Accounts receivable", "", "$200"]], "$200"),
      bullets(
        "Monetary items — cash, receivables, payables and loans in foreign currency — are revalued at the period-end rate.",
        "Gains and losses are unrealised until the amount is settled.",
        "Software such as Xero and QuickBooks can revalue foreign-currency balances automatically.",
      ),
      note("Non-monetary items like fixed assets and inventory are generally not revalued for exchange rates."),
    ),
    mistakes(
      ["Adjusting stock without investigating", "Find the cause of shortfalls."],
      ["Never updating the bad debt allowance", "Review it every year end at least."],
      ["Revaluing inventory for exchange rates", "Only monetary items are revalued."],
      ["Treating unrealised FX as cash", "It's realised only on settlement."],
    ),
    check(
      5,
      q("Opening inventory $12,000, purchases $30,000, closing $14,500. What's COGS?", ["$27,500", "$42,000", "$29,500", "$15,500"], 0, "$12,000 + $30,000 − $14,500."),
      q("The count shows less stock than the books. What's the adjustment?", ["Debit COGS/shrinkage, credit Inventory", "Debit Inventory, credit Sales", "No adjustment", "Debit Cash, credit Inventory"], 0, "Write the inventory down."),
      q("Required allowance $1,200, existing balance $300. What's the bad debt expense?", ["$900", "$1,200", "$300", "$1,500"], 0, "Top up the difference."),
      q("€10,000 recorded at $1.10, now $1.08. What's the effect on the receivable?", ["$200 loss", "$200 gain", "$1,000 loss", "No effect"], 0, "$11,000 − $10,800."),
      q("Which item is revalued at the period-end exchange rate?", ["A foreign-currency receivable", "Equipment", "Inventory", "Owner's capital"], 0, "Monetary items are revalued."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — COGS",
          ["Opening inventory $18,000; purchases $52,000; closing count $21,500. What's COGS?"],
          ["$18,000 + $52,000 − $21,500 = $48,500."],
        ],
        [
          "Exercise 2 — FX",
          ["A €5,000 payable was recorded at $1.08; at year end €1 = $1.12. What's the effect?"],
          ["Payable rises from $5,400 to $5,600 — a $200 unrealised loss. Dr FX loss $200 · Cr Accounts payable $200."],
        ],
      ),
    ),
    summary(
      ["Calculating cost of goods sold", "Adjusting inventory for shrinkage", "Bad debt allowances", "Revaluing foreign-currency balances"],
      "Year-end adjustments make sure every asset is shown at a realistic value — stock, receivables and foreign balances included.",
    ),
  ],
  5: [
    overview(
      "Module 6 — From Adjusted Trial Balance to Reports",
      ["With every adjustment made, it's time to produce Granite Peak's year-end statements. This module covers the adjusted trial balance, closing entries, the statements and a final review."],
      ["Prepare an adjusted trial balance", "Record closing entries", "Prepare the financial statements", "Review the year-end books"],
    ),
    screen(
      "The adjusted trial balance",
      steps(
        ["Start with the unadjusted trial balance", "After all transactions and reconciliations."],
        ["Post the adjustments", "Accruals, deferrals, depreciation, inventory, bad debts and revaluations."],
        ["Re-run the trial balance", "Debits must still equal credits."],
        ["Review", "Every balance supported and every adjustment documented."],
      ),
      table(
        ["Account", "Unadjusted", "Adjustment", "Adjusted"],
        [
          ["Wages expense", "$58,000", "+$2,700", "$60,700"],
          ["Accrued wages", "$0", "+$2,700", "$2,700"],
          ["Prepaid insurance", "$3,600", "−$3,600", "$0"],
          ["Insurance expense", "$0", "+$3,600", "$3,600"],
        ],
      ),
    ),
    screen(
      "Closing entries",
      p("At year end, income and expense accounts are closed so they start the new year at zero. Their net result moves into equity."),
      journal(
        [
          ["Revenue (all accounts)", "$90,000", ""],
          ["Expenses (all accounts)", "", "$72,000"],
          ["Retained earnings / Owner's capital", "", "$18,000"],
        ],
        "$90,000",
      ),
      p("For a sole trader, drawings are also closed to capital: debit Owner's capital, credit Owner's drawings."),
      note("Accounting software performs closing entries automatically when the new year starts — you won't usually post them by hand."),
    ),
    screen(
      "Preparing the statements",
      table(
        ["Statement", "Built from"],
        [
          ["Income statement (P&L)", "Revenue and expense accounts from the adjusted trial balance"],
          ["Balance sheet", "Asset, liability and equity accounts, including the year's profit"],
          ["Cash flow statement", "Changes in balance sheet accounts and profit"],
        ],
      ),
      p("Granite Peak's profit of $18,000 appears on the income statement and increases equity on the balance sheet."),
    ),
    screen(
      "Year-end review checklist",
      bullets(
        "All bank, card and loan accounts reconciled.",
        "Schedules support prepayments, accruals, deferred revenue and fixed assets.",
        "Inventory agrees with the count; bad debt allowance reviewed.",
        "Foreign-currency balances revalued.",
        "Suspense and clearing accounts at zero.",
        "Profit compared with last year and budget, with big changes explained.",
      ),
      caution("Once statements are issued, lock the period so later changes don't silently alter them."),
    ),
    mistakes(
      ["Preparing statements before adjustments", "Adjust first, then report."],
      ["Closing entries posted twice", "Software usually does it automatically."],
      ["Statements that don't tie together", "Profit must flow into equity."],
      ["Leaving the year unlocked", "Lock it once final."],
    ),
    check(
      6,
      q("What is the adjusted trial balance?", ["The trial balance after period-end adjustments", "The budget", "Last year's trial balance", "A bank report"], 0, "It includes all adjustments."),
      q("Granite Peak's prepaid insurance was $3,600 and the whole year was used. What's the adjusted balance?", ["$0", "$3,600", "$300", "$3,300"], 0, "Fully used by December 31."),
      q("Revenue $90,000 and expenses $72,000 are closed. What moves to equity?", ["$18,000 profit", "$90,000", "$72,000", "$162,000"], 0, "Net profit goes to equity."),
      q("Which accounts are closed at year end?", ["Income and expense accounts", "Cash", "Loans", "Fixed assets"], 0, "They restart at zero."),
      q("Which statement uses asset, liability and equity accounts?", ["Balance sheet", "Income statement", "Sales report", "Aging report"], 0, "It shows financial position."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Adjusted balances",
          ["Unadjusted: Revenue $85,000; Deferred revenue $1,800. Adjustment: $900 of memberships earned. What are the adjusted balances?"],
          ["Revenue $85,900; Deferred revenue $900."],
        ],
        [
          "Exercise 2 — Closing",
          ["Revenue $120,000, expenses $95,000, owner's drawings $15,000 (sole trader). What's the net change in owner's capital?"],
          ["Profit $25,000 − drawings $15,000 = +$10,000."],
        ],
      ),
    ),
    summary(
      ["Preparing the adjusted trial balance", "Closing entries and drawings", "Building the three statements", "A year-end review checklist"],
      "Adjust, close, report and lock: that's the path from a year of transactions to financial statements you can rely on.",
    ),
  ],
}

export default lessons
