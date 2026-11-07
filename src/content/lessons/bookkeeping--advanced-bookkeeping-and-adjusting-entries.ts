import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Advanced Bookkeeping and Adjusting Entries — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "Cash basis vs. accrual basis",
      compare(
        ["Cash basis", "Income is recorded when cash is received and expenses when cash is paid.", ["Simple", "Can distort monthly profit"]],
        ["Accrual basis", "Income is recorded when earned and expenses when incurred, regardless of when cash moves.", ["Matches income and costs", "Required by accounting standards for most businesses"]],
      ),
      example(
        [
          ["Work done in March, paid in April", "$5,000"],
          ["Cash basis — March income", "$0"],
          ["Accrual basis — March income", "$5,000"],
        ],
        ["Timing difference", "$5,000"],
      ),
    ),
    screen(
      "The matching principle and revenue recognition",
      terms(
        ["Matching principle", "Expenses are recorded in the same period as the revenue they help earn."],
        ["Revenue recognition", "Revenue is recorded when the business has done what it promised — delivered goods or performed services — not simply when cash arrives."],
      ),
      p("Example: a sales commission of $400 earned on March sales but paid in April is a March expense, matched to March revenue."),
    ),
    screen(
      "Why adjusting entries are needed",
      p("Day-to-day transactions record cash, invoices and bills. But at period-end, some income and costs haven't been captured by any document yet. Adjusting entries fix that."),
      table(
        ["Type", "Situation", "Example"],
        [
          ["Accrued expense", "Cost incurred, not yet billed", "Wages earned in the last days of the month"],
          ["Accrued revenue", "Income earned, not yet invoiced", "Work done but invoiced next month"],
          ["Prepaid expense", "Paid in advance, used over time", "Annual insurance"],
          ["Deferred revenue", "Received in advance, earned over time", "Annual subscriptions"],
          ["Estimates", "Wear and tear or likely losses", "Depreciation, bad debts"],
        ],
      ),
      note("Adjusting entries almost never involve cash. They move amounts between balance sheet and profit and loss accounts."),
    ),
    check(
      1,
      q("Work done in March is paid in April. Under accrual basis, when is it income?", ["April", "March", "When banked", "Year-end"], 1, "Income is recorded when earned."),
      q("What does the matching principle require?", ["Expenses recorded in the period of the revenue they help earn", "Cash to equal profit", "Equal monthly expenses", "Paying bills early"], 0, "Costs are matched to related revenue."),
      q("When is revenue generally recognised?", ["When the business has delivered what it promised", "When the order is placed", "When the quote is sent", "When the year ends"], 0, "Performance triggers recognition."),
      q("Which is an accrued expense?", ["Wages earned but not yet paid", "Annual insurance paid in advance", "A customer deposit", "Cash sales"], 0, "The cost is incurred before it's paid."),
      q("Do adjusting entries usually involve cash?", ["Yes, always", "Rarely — they move amounts between accounts", "Only for depreciation", "Only at year-end"], 1, "They're non-cash adjustments."),
    ),
  ],
  1: [
    screen(
      "Accrued expenses",
      p("Staff are paid every Friday for the week. The month ends on Wednesday, so three days of wages ($2,700) are owed but unpaid."),
      journal([["Wages expense", "$2,700", ""], ["Accrued wages", "", "$2,700"]], "$2,700"),
      p("Other common accruals: utilities, interest on loans, professional fees for work already done, and bonuses earned during the year."),
    ),
    screen(
      "Accrued revenue",
      p("A consultant completes $4,000 of work in March under a contract that bills monthly in arrears; the invoice is issued on April 3."),
      journal([["Accrued revenue (unbilled receivables)", "$4,000", ""], ["Consulting revenue", "", "$4,000"]], "$4,000"),
      caution("Only accrue revenue you have earned and can measure reliably. Don't accrue hoped-for sales."),
    ),
    screen(
      "Reversing entries",
      p("A reversing entry cancels an accrual on the first day of the next period, so the real bill or invoice can be recorded normally without double-counting."),
      steps(
        ["Mar 31 — accrue", "Debit Wages expense $2,700, credit Accrued wages $2,700."],
        ["Apr 1 — reverse", "Debit Accrued wages $2,700, credit Wages expense $2,700."],
        ["Apr 3 — pay the full week as usual", "Debit Wages expense $4,500, credit Cash $4,500."],
        ["Result", "April wage expense = $4,500 − $2,700 = $1,800, which is the April portion."],
      ),
      tip("Let software do it", "Most accounting software can set a journal to auto-reverse on a chosen date."),
    ),
    check(
      2,
      q("Three days of wages ($2,700) are unpaid at month-end. What's credited?", ["Cash", "Accrued wages", "Wages expense", "Revenue"], 1, "Accrued wages is the liability."),
      q("Work done in March is invoiced April 3. What's the March entry?", ["Debit Accrued revenue, credit Revenue", "Debit Cash, credit Revenue", "No entry", "Debit Revenue, credit Accrued revenue"], 0, "Accrue the earned revenue."),
      q("What does a reversing entry do?", ["Cancels an accrual at the start of the next period", "Deletes the accrual", "Doubles the expense", "Pays the bill"], 0, "It avoids double-counting."),
      q("In the example, what's April's wage expense after reversal and payment?", ["$4,500", "$2,700", "$1,800", "$7,200"], 2, "$4,500 − $2,700 = $1,800."),
      q("Which revenue should NOT be accrued?", ["Earned and measurable work", "Hoped-for future sales", "Completed services awaiting invoice", "Interest earned"], 1, "Only earned revenue is accrued."),
    ),
  ],
  2: [
    screen(
      "Prepaid expenses",
      p("On January 1, the business pays $3,600 for 12 months of insurance."),
      journal([["Prepaid insurance", "$3,600", ""], ["Cash", "", "$3,600"]], "$3,600"),
      p("The prepayment is an asset — the business has paid for cover it hasn't used yet."),
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
        ],
        { numeric: [1, 2] },
      ),
      tip("Keep a prepayments schedule", "List each prepayment with start date, total, monthly amount and remaining balance. Its total should equal the prepaid account on the balance sheet."),
    ),
    screen(
      "Deferred (unearned) revenue",
      p("A customer pays $1,800 on July 1 for a 12-month software subscription."),
      journal([["Cash", "$1,800", ""], ["Deferred revenue", "", "$1,800"]], "$1,800"),
      p("Each month, $150 is earned:"),
      journal([["Deferred revenue", "$150", ""], ["Subscription revenue", "", "$150"]], "$150"),
      note("Deferred revenue is a liability: until the service is provided, the business owes it to the customer."),
    ),
    check(
      3,
      q("$3,600 of insurance is paid for 12 months. What's the monthly expense?", ["$3,600", "$360", "$300", "$30"], 2, "$3,600 ÷ 12 = $300."),
      q("What type of account is prepaid insurance?", ["Asset", "Liability", "Expense", "Revenue"], 0, "It's a benefit still to be used."),
      q("After three months, what's the prepaid balance?", ["$3,300", "$2,700", "$900", "$3,000"], 1, "$3,600 − 3 × $300 = $2,700."),
      q("A customer prepays $1,800 for 12 months. What's earned each month?", ["$1,800", "$180", "$150", "$100"], 2, "$1,800 ÷ 12 = $150."),
      q("What type of account is deferred revenue?", ["Asset", "Liability", "Revenue", "Expense"], 1, "The business owes the service."),
    ),
  ],
  3: [
    screen(
      "Capitalising vs. expensing",
      compare(
        ["Capitalise", "Record as a fixed asset when the item gives benefit for more than a year and costs more than the capitalisation threshold.", ["Vehicles, machinery, computers", "Depreciated over its life"]],
        ["Expense", "Record straight to the P&L when it's used up quickly or costs less than the threshold.", ["Small tools, repairs, supplies"]],
      ),
      note("Include costs needed to get the asset ready for use — delivery and installation — in its cost. Routine repairs are expenses."),
    ),
    screen(
      "Straight-line and declining-balance depreciation",
      example(
        [["Cost", "$10,000"], ["Residual value", "$0"], ["Useful life", "5 years"]],
        ["Straight-line depreciation per year", "$2,000"],
      ),
      p("Declining balance charges more in early years. With double-declining balance, the rate is 2 ÷ life = 40% of the remaining book value:"),
      table(
        ["Year", "Opening book value", "Depreciation (40%)", "Closing book value"],
        [
          ["1", "$10,000", "$4,000", "$6,000"],
          ["2", "$6,000", "$2,400", "$3,600"],
          ["3", "$3,600", "$1,440", "$2,160"],
        ],
        { numeric: [1, 2, 3] },
      ),
      journal([["Depreciation expense", "$2,000", ""], ["Accumulated depreciation", "", "$2,000"]], "$2,000"),
      note("Tax depreciation rules may differ from the books. The accountant handles any differences on the tax return."),
    ),
    screen(
      "Disposals and the fixed asset register",
      p("A van cost $20,000 and has $14,000 of accumulated depreciation (book value $6,000). It's sold for $5,000."),
      journal(
        [
          ["Cash", "$5,000", ""],
          ["Accumulated depreciation", "$14,000", ""],
          ["Loss on disposal", "$1,000", ""],
          ["Vehicles", "", "$20,000"],
        ],
        "$20,000",
      ),
      h("The fixed asset register"),
      bullets(
        "Description, location and serial number.",
        "Purchase date and cost.",
        "Depreciation method, life and residual value.",
        "Accumulated depreciation and book value.",
        "Disposal date and proceeds.",
      ),
      tip("Register = ledger", "Total cost and accumulated depreciation in the register must agree with the balance sheet accounts."),
    ),
    check(
      4,
      q("A $10,000 asset has a 5-year life and no residual value. What's straight-line depreciation a year?", ["$1,000", "$2,000", "$4,000", "$5,000"], 1, "$10,000 ÷ 5 = $2,000."),
      q("With double-declining balance on a 5-year life, what's the rate?", ["20%", "40%", "50%", "10%"], 1, "2 ÷ 5 = 40%."),
      q("What is year 2 depreciation in the double-declining example?", ["$4,000", "$2,400", "$2,000", "$1,440"], 1, "40% of $6,000 = $2,400."),
      q("A van with a $6,000 book value sells for $5,000. What's the result?", ["$1,000 gain", "$1,000 loss", "$5,000 gain", "No gain or loss"], 1, "Proceeds are $1,000 below book value."),
      q("Which cost is normally capitalised?", ["Installation of new machinery", "Routine repairs", "Office supplies", "Cleaning"], 0, "Costs to get an asset ready for use are part of its cost."),
    ),
  ],
  4: [
    screen(
      "Inventory counts and cost of goods sold",
      p("Cost of goods sold (COGS) can be calculated from inventory figures:"),
      example(
        [["Opening inventory", "$12,000"], ["Add: purchases", "$30,000"], ["Less: closing inventory (counted)", "($14,500)"]],
        ["Cost of goods sold", "$27,500"],
      ),
      p("Under a perpetual system, if the count is lower than the books (e.g. books $15,000, count $14,500), write down the $500 difference:"),
      journal([["Cost of goods sold — inventory shrinkage", "$500", ""], ["Inventory", "", "$500"]], "$500"),
    ),
    screen(
      "Bad debt allowances",
      p("At year-end, receivables total $40,000. Based on experience, 3% are expected to be uncollectible: $1,200. The allowance account already has $300."),
      journal([["Bad debt expense", "$900", ""], ["Allowance for doubtful accounts", "", "$900"]], "$900"),
      p("The allowance is topped up to $1,200. On the balance sheet, receivables show at $40,000 − $1,200 = $38,800."),
      tip("Use the aging report", "A more precise estimate applies higher percentages to older balances, e.g. 1% current, 10% over 60 days, 50% over 120 days."),
    ),
    screen(
      "Foreign currency revaluation basics",
      p("A US business invoices a customer €10,000 when €1 = $1.10, recording $11,000. At month-end, €1 = $1.08, so the receivable is now worth $10,800."),
      journal([["Foreign exchange loss (unrealised)", "$200", ""], ["Accounts receivable", "", "$200"]], "$200"),
      bullets(
        "Monetary items (cash, receivables, payables, loans) in foreign currency are revalued at the period-end rate.",
        "Gains or losses are unrealised until the amount is settled.",
        "Software such as Xero and QuickBooks can revalue foreign currency balances automatically.",
      ),
      note("Non-monetary items like fixed assets and inventory are generally not revalued for exchange rates."),
    ),
    check(
      5,
      q("Opening inventory $12,000, purchases $30,000, closing $14,500. What's COGS?", ["$27,500", "$42,000", "$29,500", "$15,500"], 0, "$12,000 + $30,000 − $14,500 = $27,500."),
      q("The count shows less stock than the books. What's the adjustment?", ["Debit COGS/shrinkage, credit Inventory", "Debit Inventory, credit Sales", "No adjustment", "Debit Cash, credit Inventory"], 0, "Write the inventory down."),
      q("Required allowance $1,200, existing balance $300. What's the bad debt expense?", ["$1,200", "$900", "$300", "$1,500"], 1, "Top up by $900."),
      q("€10,000 recorded at $1.10, now $1.08. What's the effect on the receivable?", ["$200 gain", "$200 loss", "$1,000 loss", "No effect"], 1, "$11,000 − $10,800 = $200 loss."),
      q("Which item is revalued at the period-end exchange rate?", ["A foreign currency receivable", "Equipment", "Inventory", "Owner's capital"], 0, "Monetary items are revalued."),
    ),
  ],
  5: [
    screen(
      "The adjusted trial balance",
      steps(
        ["Start with the unadjusted trial balance", "After all transactions and reconciliations."],
        ["Post the adjustments", "Accruals, deferrals, depreciation, inventory, bad debts, revaluations."],
        ["Re-run the trial balance", "Debits must still equal credits."],
        ["Review", "Every balance supported and every adjustment documented."],
      ),
      table(
        ["Account", "Unadjusted", "Adjustment", "Adjusted"],
        [
          ["Wages expense", "$58,000", "+$2,700", "$60,700"],
          ["Accrued wages", "$0", "+$2,700", "$2,700"],
          ["Prepaid insurance", "$3,600", "−$3,300", "$300"],
          ["Insurance expense", "$0", "+$3,300", "$3,300"],
        ],
      ),
    ),
    screen(
      "Closing entries",
      p("At year-end, income and expense accounts are closed so they start the new year at zero. Their net result moves into equity."),
      journal(
        [
          ["Revenue", "$90,000", ""],
          ["Expenses (total)", "", "$72,000"],
          ["Retained earnings / Owner's capital", "", "$18,000"],
        ],
        "$90,000",
      ),
      p("For a sole trader, drawings are also closed to capital: debit Owner's capital, credit Owner's drawings."),
      note("Accounting software performs closing entries automatically when the new year starts — you won't usually post them by hand."),
    ),
    screen(
      "Preparing statements and the review checklist",
      table(
        ["Statement", "Built from"],
        [
          ["Income statement (P&L)", "Revenue and expense accounts from the adjusted trial balance"],
          ["Balance sheet", "Asset, liability and equity accounts, including the year's profit"],
          ["Cash flow statement", "Changes in balance sheet accounts and profit"],
        ],
      ),
      h("Review checklist"),
      bullets(
        "All bank, card and loan accounts reconciled.",
        "Schedules support prepayments, accruals, deferred revenue and fixed assets.",
        "Inventory agrees with the count; bad debt allowance reviewed.",
        "Suspense and clearing accounts at zero.",
        "Profit compared with last year and budget, with big changes explained.",
      ),
      caution("Once statements are issued, lock the period so later changes don't silently alter them."),
    ),
    check(
      6,
      q("What is the adjusted trial balance?", ["The trial balance after period-end adjustments", "The budget", "Last year's trial balance", "A bank report"], 0, "It includes all adjustments."),
      q("Prepaid insurance was $3,600 and $3,300 was used. What's the adjusted prepaid balance?", ["$3,600", "$3,300", "$300", "$0"], 2, "$3,600 − $3,300 = $300."),
      q("Revenue $90,000 and expenses $72,000 are closed. What moves to equity?", ["$90,000", "$72,000", "$18,000 profit", "$162,000"], 2, "Net profit of $18,000 goes to equity."),
      q("Which accounts are closed at year-end?", ["Income and expense accounts", "Cash", "Loans", "Fixed assets"], 0, "They restart at zero each year."),
      q("Which statement uses asset, liability and equity accounts?", ["Income statement", "Balance sheet", "Sales report", "Aging report"], 1, "The balance sheet shows financial position."),
    ),
  ],
}

export default lessons
