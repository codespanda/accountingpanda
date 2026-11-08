import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, table, terms, tip } from "@/lib/lessonKit"

// Advanced Accounts Receivable and Payable — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "Recognition and measurement",
      terms(
        ["Receivable", "Recognised when the business has an unconditional right to payment — usually when it has delivered and invoiced. Measured at the transaction price, less any expected credit losses."],
        ["Payable", "Recognised when goods or services have been received and the business has an obligation to pay. Measured at the amount owed."],
        ["Contract asset", "A right to payment that still depends on something other than time — e.g. work done but not yet billable under the contract."],
      ),
      note("Most trade receivables and payables are short-term, so they're carried at the invoice amount without discounting."),
    ),
    screen(
      "Linking invoicing to revenue and expenses",
      p("Invoices are evidence, but recognition follows the underlying event:"),
      table(
        ["Situation", "Revenue / expense", "Balance sheet"],
        [
          ["Delivered and invoiced", "Revenue recognised", "Receivable"],
          ["Delivered, invoice next month", "Revenue recognised", "Unbilled receivable / contract asset"],
          ["Invoiced in advance, not delivered", "No revenue yet", "Receivable (if due) and contract liability"],
          ["Goods received, bill not yet received", "Expense or inventory recognised", "Accrual (GRNI)"],
        ],
      ),
    ),
    screen(
      "Classification and control accounts",
      bullets(
        "Receivables and payables due within 12 months (or the operating cycle) are current; longer-term balances such as retentions or instalment plans may be non-current.",
        "Credit balances in AR (customer overpayments) and debit balances in AP (supplier prepayments) may need reclassifying for presentation.",
        "The subledger holds customer and supplier detail; the control account in the general ledger holds the total.",
      ),
      tip("Control account discipline", "Block manual journals to AR and AP control accounts, or restrict them to senior staff. Every posting should go through the subledger."),
    ),
    check(
      1,
      q("When is a receivable recognised?", ["When an order is placed", "When there's an unconditional right to payment", "When cash is received", "At year-end"], 1, "Usually after delivery and invoicing."),
      q("Work is done but the contract only allows billing next month. What's recognised?", ["Nothing", "Revenue and an unbilled receivable or contract asset", "A payable", "A liability"], 1, "Revenue follows performance."),
      q("Goods are received but the bill hasn't arrived. What's recorded?", ["Nothing", "An accrual (GRNI)", "Revenue", "A prepayment"], 1, "The obligation exists once goods are received."),
      q("What should large credit balances in AR be considered for?", ["Reclassification as liabilities", "Deletion", "Revenue", "Ignoring"], 0, "Customer overpayments are amounts owed to customers."),
      q("Why restrict manual journals to AR and AP control accounts?", ["They break the link with the subledger", "They're illegal", "They're slow", "Software forbids them"], 0, "Subledger and GL must agree."),
    ),
  ],
  1: [
    screen(
      "Expected credit losses — IFRS 9, Ind AS 109 and CECL",
      compare(
        ["IFRS 9 / Ind AS 109 / AASB 9", "For trade receivables without a significant financing component, the simplified approach requires a loss allowance equal to lifetime expected credit losses from day one.", ["Forward-looking", "Provision matrix allowed"]],
        ["US GAAP — CECL (ASC 326)", "Requires an allowance for current expected credit losses over the life of the receivable, based on past events, current conditions and reasonable forecasts.", ["Lifetime losses", "Applies to trade receivables"]],
      ),
      note("Both approaches look ahead. The older “incurred loss” model, which waited for evidence of a loss, no longer applies."),
    ),
    screen(
      "Building a provision matrix",
      table(
        ["Aging bucket", "Balance", "Loss rate", "Allowance"],
        [
          ["Current", "$400,000", "0.5%", "$2,000"],
          ["1–30 days", "$120,000", "2%", "$2,400"],
          ["31–60 days", "$50,000", "6%", "$3,000"],
          ["61–90 days", "$20,000", "15%", "$3,000"],
          ["Over 90 days", "$10,000", "40%", "$4,000"],
        ],
        { footer: ["Total", "$600,000", "", "$14,400"], numeric: [1, 2, 3] },
      ),
      p("Loss rates come from historical write-offs by bucket, adjusted for current conditions and forecasts (e.g. a weakening economy)."),
    ),
    screen(
      "Specific provisions, write-offs and recoveries",
      p("The allowance was $10,000 and needs to be $14,400:"),
      journal([["Credit loss expense", "$4,400", ""], ["Allowance for credit losses", "", "$4,400"]], "$4,400"),
      h("A customer owing $3,000 goes into liquidation — write off"),
      journal([["Allowance for credit losses", "$3,000", ""], ["Accounts receivable", "", "$3,000"]], "$3,000"),
      h("$500 is later recovered from the liquidator"),
      journal([["Cash", "$500", ""], ["Credit loss expense (recovery)", "", "$500"]], "$500"),
      tip("Specific vs. collective", "Assess large or known-problem customers individually, and use the matrix for the rest — without counting anyone twice."),
    ),
    check(
      2,
      q("Under IFRS 9's simplified approach, trade receivables carry an allowance for:", ["12-month losses", "Lifetime expected credit losses", "Only incurred losses", "No losses"], 1, "Lifetime ECL from initial recognition."),
      q("What does CECL stand for?", ["Current expected credit losses", "Corporate expense control ledger", "Credit exposure cap limit", "Cash entry clearing ledger"], 0, "It's the US GAAP model in ASC 326."),
      q("$50,000 is 31–60 days old with a 6% loss rate. What's the allowance for that bucket?", ["$300", "$3,000", "$5,000", "$6,000"], 1, "6% × $50,000."),
      q("The allowance must rise from $10,000 to $14,400. What's the expense?", ["$14,400", "$4,400", "$10,000", "$24,400"], 1, "Top up by the difference."),
      q("A written-off debt is partly recovered. What's credited?", ["Accounts receivable", "Credit loss expense (recovery)", "Revenue", "Share capital"], 1, "Recoveries reduce the credit loss expense."),
    ),
  ],
  2: [
    screen(
      "Transaction-date rate and period-end revaluation",
      p("A US company sells goods for €20,000 when €1 = $1.10."),
      journal([["Accounts receivable (€20,000)", "$22,000", ""], ["Revenue", "", "$22,000"]], "$22,000"),
      p("At year-end, €1 = $1.12. The receivable is revalued to $22,400:"),
      journal([["Accounts receivable", "$400", ""], ["Foreign exchange gain (unrealised)", "", "$400"]], "$400"),
      note("Revenue stays at $22,000 — only the monetary balance is revalued."),
    ),
    screen(
      "Realised and unrealised differences",
      p("In the next period, the customer pays €20,000 when €1 = $1.09, so the bank receives $21,800."),
      journal([["Cash", "$21,800", ""], ["Foreign exchange loss (realised)", "$600", ""], ["Accounts receivable", "", "$22,400"]], "$22,400"),
      table(
        ["", "Gain / (loss)"],
        [
          ["Year 1 — unrealised", "$400"],
          ["Year 2 — realised", "($600)"],
          ["Total over the life", "($200) = $21,800 received − $22,000 originally recorded"],
        ],
      ),
    ),
    screen(
      "Settlement in a different currency",
      bullets(
        "A supplier invoices in euros but you pay from a USD account: the bank converts at its rate, and the difference to the carrying amount is a realised gain or loss.",
        "Bank conversion fees are separate expenses, not FX losses.",
        "Partial payments settle part of the balance; the remainder is revalued at period end.",
      ),
      tip("Let the system do it", "Most accounting systems record foreign-currency invoices, revalue open balances and calculate realised differences automatically — but check the rates they use."),
    ),
    check(
      3,
      q("€20,000 at $1.10 is recorded as:", ["$20,000", "$22,000", "$18,182", "$22,400"], 1, "€20,000 × 1.10."),
      q("At year-end the rate is $1.12. What's the unrealised result?", ["$400 gain", "$400 loss", "No change", "$2,000 gain"], 0, "Receivable is worth $400 more."),
      q("Is revenue revalued at year-end?", ["Yes", "No — only monetary balances are", "Only for exports", "Only under US GAAP"], 1, "Revenue stays at the transaction-date rate."),
      q("The receivable carried at $22,400 is settled for $21,800. What's the result?", ["$600 realised loss", "$600 realised gain", "$200 loss", "No result"], 0, "$22,400 − $21,800."),
      q("Bank conversion fees should be recorded as:", ["FX losses", "Separate bank charges", "Revenue", "Inventory"], 1, "Keep fees separate from FX differences."),
    ),
  ],
  3: [
    screen(
      "Cut-off testing and GRNI",
      table(
        ["Test", "What to check"],
        [
          ["Sales cut-off", "Shipments in the last and first days of the period are invoiced in the right period"],
          ["Purchase cut-off", "Goods received before period end are recorded as purchases or accruals"],
        ],
      ),
      p("Goods received not invoiced (GRNI): $8,000 of stock received on March 30; the bill arrives April 6."),
      journal([["Inventory", "$8,000", ""], ["GRNI accrual", "", "$8,000"]], "$8,000"),
      caution("Old GRNI balances usually mean receipts were never matched to bills. Clear them monthly."),
    ),
    screen(
      "Advances, unbilled revenue and rebates",
      terms(
        ["Customer advance", "Cash received before delivery — a contract liability until performed."],
        ["Unbilled revenue", "Earned but not yet billable — a contract asset or unbilled receivable."],
        ["Volume rebates to customers", "Variable consideration: reduce revenue for the rebate expected to be paid, and recognise a refund liability."],
        ["Supplier rebates", "Recognise a receivable and reduce the cost of purchases (or inventory) when the rebate is probable and can be estimated."],
      ),
      example(
        [["Customer purchases this year", "$1,200,000"], ["Rebate if over $1,000,000", "2%"]],
        ["Expected rebate — reduce revenue", "$24,000"],
      ),
    ),
    screen(
      "Credit notes, debit notes and retentions",
      terms(
        ["Credit note", "Issued by the seller to reduce the buyer's balance — returns, pricing errors, rebates."],
        ["Debit note", "Issued (often by a buyer) to claim a reduction or charge an extra amount, depending on local practice."],
        ["Retentions", "Part of each payment held back until completion, common in construction."],
      ),
      p("A $100,000 construction invoice with a 5% retention: $95,000 is due now and $5,000 when the defects period ends."),
      tip("Track retentions separately", "Keep retentions receivable and payable in their own accounts with expected release dates. Long retentions may be non-current."),
    ),
    check(
      4,
      q("Stock received on March 30, billed April 6. What's needed at March 31?", ["Nothing", "A GRNI accrual", "A credit note", "Revenue"], 1, "The liability exists once goods arrive."),
      q("What do old GRNI balances usually mean?", ["Receipts not matched to bills", "Strong sales", "Paid bills", "Bank errors"], 0, "They need clearing."),
      q("Customer purchases $1.2m; 2% rebate above $1m on all purchases. What's the rebate?", ["$4,000", "$24,000", "$20,000", "$2,400"], 1, "2% × $1,200,000."),
      q("How is an expected customer rebate treated?", ["As a reduction of revenue with a refund liability", "As an expense only", "Ignored until paid", "As inventory"], 0, "It's variable consideration."),
      q("$100,000 invoice with 5% retention. How much is due now?", ["$100,000", "$95,000", "$5,000", "$105,000"], 1, "The 5% is held back."),
    ),
  ],
  4: [
    screen(
      "Contra and netting arrangements",
      p("When a customer is also a supplier, balances can be netted — but only with an agreement."),
      table(
        ["", "Amount"],
        [
          ["We owe ABC Ltd (payable)", "$12,000"],
          ["ABC Ltd owes us (receivable)", "$7,500"],
          ["Net payable after contra", "$4,500"],
        ],
        { numeric: [1] },
      ),
      journal([["Accounts payable — ABC Ltd", "$7,500", ""], ["Accounts receivable — ABC Ltd", "", "$7,500"]], "$7,500"),
      note("For presentation, receivables and payables are generally only offset when there's a legal right to set off and an intention to settle net."),
    ),
    screen(
      "Factoring, invoice discounting and supplier finance",
      compare(
        ["Factoring without recourse", "The factor takes the credit risk. If substantially all risks and rewards transfer, the receivable is derecognised.", ["Receivable removed", "Discount is an expense"]],
        ["With recourse / invoice discounting", "The business keeps the credit risk. Receivables usually stay on the balance sheet, with a borrowing for the cash received.", ["Receivable stays", "Loan recognised"]],
      ),
      terms(
        ["Supplier finance (reverse factoring)", "A bank pays suppliers early and the business pays the bank later. IFRS (IAS 7 and IFRS 7 amendments) and US GAAP (ASU 2022-04) now require disclosures of these arrangements."],
      ),
    ),
    screen(
      "Intercompany balances and withholding taxes",
      bullets(
        "Intercompany receivables and payables must agree between entities and are eliminated on consolidation.",
        "Settle intercompany balances regularly to avoid FX and tax complications.",
      ),
      h("Taxes withheld on payments"),
      terms(
        ["India — TDS", "Payers deduct tax at source on many payments (e.g. professional fees) and deposit it with the Government. The recipient records the TDS as a receivable or tax credit."],
        ["US — backup withholding", "If a payee fails to provide a valid taxpayer ID, payers may need to withhold 24% of certain payments."],
      ),
      p("A customer pays a $10,000 invoice after deducting 10% TDS:"),
      journal([["Cash", "$9,000", ""], ["TDS receivable", "$1,000", ""], ["Accounts receivable", "", "$10,000"]], "$10,000"),
    ),
    check(
      5,
      q("We owe ABC $12,000 and ABC owes us $7,500. What's the net payable after contra?", ["$19,500", "$4,500", "$7,500", "$12,000"], 1, "$12,000 − $7,500."),
      q("What's needed before netting balances?", ["An agreement with the counterparty", "Nothing", "A bank loan", "A tax return"], 0, "Contras need agreement."),
      q("Under factoring with recourse, the receivable usually:", ["Is removed", "Stays on the balance sheet with a borrowing", "Becomes revenue", "Becomes equity"], 1, "The business keeps the credit risk."),
      q("What do recent IFRS and US GAAP changes require for supplier finance?", ["Disclosures", "Banning them", "Capitalising them", "Ignoring them"], 0, "New disclosure requirements apply."),
      q("A customer pays $9,000 on a $10,000 invoice after 10% TDS. What's the $1,000?", ["A bad debt", "A TDS receivable / tax credit", "A discount", "Revenue"], 1, "It's tax paid on your behalf."),
    ),
  ],
  5: [
    screen(
      "Master data controls",
      table(
        ["Control", "Purpose"],
        [
          ["Independent approval of new customers and suppliers", "Prevents fake accounts"],
          ["Call-back verification of bank-detail changes", "Prevents payment diversion"],
          ["Credit limits approved by credit control", "Limits exposure"],
          ["Monthly report of master data changes", "Detects unauthorised edits"],
          ["Duplicate checks on name, tax ID and bank account", "Prevents duplicate payments"],
        ],
      ),
    ),
    screen(
      "Reconciliations and ratios",
      bullets(
        "Agree AR and AP aging totals to the control accounts every month.",
        "Reconcile key supplier statements and confirm major customer balances.",
      ),
      table(
        ["Ratio", "Formula", "Example"],
        [
          ["DSO", "Receivables ÷ Revenue × 365", "$600,000 ÷ $4,800,000 × 365 ≈ 46 days"],
          ["DPO", "Payables ÷ Cost of sales × 365", "$350,000 ÷ $3,000,000 × 365 ≈ 43 days"],
        ],
      ),
      tip("Watch the trend", "A rising DSO means slower collection; a falling DPO means paying suppliers faster. Both use cash."),
    ),
    screen(
      "Red flags and the period-end checklist",
      table(
        ["Red flag", "Possible cause"],
        [
          ["Unapplied cash", "Payments not matched to invoices — receivables overstated"],
          ["Debit balances in AP", "Duplicate payments or unclaimed credits"],
          ["Credit balances in AR", "Overpayments or misapplied cash"],
          ["Same amount paid twice to a supplier", "Duplicate payment"],
        ],
      ),
      h("Period-end checklist"),
      bullets(
        "Subledgers agree to control accounts.",
        "Cut-off tested; GRNI and unbilled revenue reviewed.",
        "Credit loss allowance updated.",
        "Foreign-currency balances revalued.",
        "Rebates, retentions and credit balances reviewed and classified.",
      ),
      caution("Debit balances in AP can hide money that should be recovered from suppliers — investigate and chase them."),
    ),
    check(
      6,
      q("Which control prevents payment diversion?", ["Call-back verification of bank-detail changes", "Credit limits", "Invoice templates", "Aging reports"], 0, "Verify changes independently."),
      q("Receivables $600,000 and revenue $4.8m. What's DSO, roughly?", ["30 days", "46 days", "60 days", "80 days"], 1, "$600,000 ÷ $4,800,000 × 365 ≈ 46."),
      q("A debit balance in AP may indicate:", ["A duplicate payment", "Strong sales", "Unpaid bills", "Revenue"], 0, "You may have paid twice."),
      q("Unapplied customer cash means:", ["Receivables may be overstated", "Revenue is understated", "Payables are wrong", "Nothing"], 0, "Paid invoices still look open."),
      q("Which belongs on the period-end checklist?", ["Revalue foreign-currency balances", "Delete old invoices", "Reopen closed periods", "Change the chart"], 0, "FX balances must be revalued."),
    ),
  ],
}

export default lessons
