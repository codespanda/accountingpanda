import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
  exercises,
  h,
  journal,
  mistakes,
  note,
  overview,
  p,
  q,
  screen,
  summary,
  table,
  terms,
  tip,
} from "@/lib/lessonKit"

// Advanced Accounts Receivable and Payable — lesson screens by module index (0 = Module 1).
// The course follows Northgate Industrial Supplies, a US distributor selling to
// customers in the US, Europe and India. It reports in USD.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Receivables and Payables in the Financial Statements",
      ["At an advanced level, receivables and payables are more than customer and supplier balances — they're financial assets and liabilities with rules for recognition, measurement and presentation."],
      ["Recognise and measure receivables and payables", "Link invoicing to revenue and expense recognition", "Classify balances as current or non-current", "Use subledgers and control accounts correctly"],
    ),
    screen(
      "Meet Northgate Industrial Supplies",
      p("Northgate distributes industrial tools and safety equipment. It sells on credit to manufacturers in the US, Europe and India, and buys from suppliers worldwide."),
      table(
        ["Balance at year end", "Amount"],
        [
          ["Trade receivables (gross)", "$600,000"],
          ["Trade payables", "$350,000"],
          ["Annual credit sales", "$4,800,000"],
          ["Annual cost of sales", "$3,000,000"],
        ],
        { numeric: [1] },
      ),
    ),
    screen(
      "Recognition and measurement",
      terms(
        ["Receivable", "Recognised when Northgate has an unconditional right to payment — usually when goods are delivered and invoiced. Measured at the transaction price, less any expected credit losses."],
        ["Payable", "Recognised when goods or services have been received and Northgate has an obligation to pay. Measured at the amount owed."],
        ["Contract asset", "A right to payment that still depends on something other than time — e.g. work done but not yet billable under the contract."],
      ),
      note("Most trade receivables and payables are short-term, so they're carried at the invoice amount without discounting."),
    ),
    screen(
      "Linking invoicing to revenue and expenses",
      p("Invoices are evidence, but recognition follows the underlying event:"),
      table(
        ["Situation", "Revenue or expense", "Balance sheet"],
        [
          ["Delivered and invoiced", "Revenue recognised", "Receivable"],
          ["Delivered, invoiced next month", "Revenue recognised", "Unbilled receivable / contract asset"],
          ["Invoiced in advance, not delivered", "No revenue yet", "Receivable (if due) and contract liability"],
          ["Goods received, bill not yet received", "Expense or inventory recognised", "Accrual (goods received not invoiced)"],
        ],
      ),
    ),
    screen(
      "Current vs. non-current classification",
      bullets(
        "Balances due within 12 months (or the operating cycle) are current.",
        "Longer-term balances — retentions held for two years, or a customer instalment plan — may be non-current.",
        "Credit balances in AR (customer overpayments) and debit balances in AP (supplier prepayments) may need reclassifying for presentation.",
      ),
      example(
        [["Instalment plan with a customer — total", "$90,000"], ["Due within 12 months", "($30,000)"]],
        ["Non-current receivable", "$60,000"],
      ),
    ),
    screen(
      "Subledgers and control accounts",
      p("The subledger holds customer and supplier detail; the control account in the general ledger holds the total. They must always agree."),
      tip("Control account discipline", "Block manual journals to AR and AP control accounts, or restrict them to senior staff. Every posting should go through the subledger."),
      caution("Northgate once posted a $2,000 credit-note correction directly to the AR control account. The aging no longer agreed, and the customer's statement was wrong."),
    ),
    mistakes(
      ["Recognising receivables when orders arrive", "Wait for an unconditional right to payment."],
      ["Ignoring goods received without bills", "Accrue them."],
      ["Showing all instalments as current", "Split out amounts due after 12 months."],
      ["Journals straight to control accounts", "Post through the subledger."],
    ),
    check(
      1,
      q("When is a receivable recognised?", ["When there's an unconditional right to payment", "When an order is placed", "When cash is received", "At year end"], 0, "Usually after delivery and invoicing."),
      q("Work is done but the contract only allows billing next month. What's recognised?", ["Revenue and an unbilled receivable or contract asset", "Nothing", "A payable", "A liability"], 0, "Revenue follows performance."),
      q("Goods are received but the bill hasn't arrived. What's recorded?", ["An accrual (goods received not invoiced)", "Nothing", "Revenue", "A prepayment"], 0, "The obligation exists."),
      q("A $90,000 instalment plan has $30,000 due within 12 months. How much is non-current?", ["$60,000", "$30,000", "$90,000", "$0"], 0, "$90,000 − $30,000."),
      q("Why restrict manual journals to AR and AP control accounts?", ["They break the link with the subledger", "They're illegal", "They're slow", "Software forbids them"], 0, "Subledger and GL must agree."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Recognition",
          ["Northgate ships $40,000 of goods on December 30 but invoices on January 3. What's recorded at December 31?"],
          ["Revenue of $40,000 and an unbilled receivable (contract asset) — the goods were delivered in December."],
        ],
        [
          "Exercise 2 — Reclassify",
          ["The AR ledger includes a $5,000 credit balance from a customer overpayment. How is it presented?"],
          ["As a liability (e.g. customer credits or contract liabilities), not netted against other customers' receivables."],
        ],
      ),
    ),
    summary(
      ["Recognising and measuring receivables and payables", "Linking invoicing to revenue and expenses", "Current vs. non-current classification", "Subledgers and control accounts"],
      "Recognise balances when the right or obligation exists, classify them by when they're due, and keep subledgers and control accounts in step.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Credit Losses and Bad Debts",
      ["Not every receivable will be collected. Modern standards require Northgate to estimate expected losses before they happen. This module covers the models and the entries."],
      ["Apply the expected credit loss approach (IFRS 9 / Ind AS 109)", "Explain the CECL model under US GAAP", "Build a provision matrix", "Record specific provisions and write-offs", "Record recoveries"],
    ),
    screen(
      "Expected credit losses — IFRS 9 and Ind AS 109",
      p("For trade receivables without a significant financing component, IFRS 9, Ind AS 109 and AASB 9 require a simplified approach: a loss allowance equal to lifetime expected credit losses from the day the receivable is recognised."),
      bullets(
        "Forward-looking — it uses past experience, current conditions and forecasts.",
        "A provision matrix by age band is an accepted practical method.",
        "No need to wait for evidence that a customer is in trouble.",
      ),
    ),
    screen(
      "CECL under US GAAP",
      p("US GAAP (ASC 326) uses the current expected credit loss (CECL) model: an allowance for losses expected over the life of the receivable, based on past events, current conditions and reasonable and supportable forecasts."),
      compare(
        ["IFRS 9 simplified approach", "Lifetime expected losses for trade receivables.", ["Provision matrix common"]],
        ["US GAAP CECL", "Lifetime expected losses for receivables measured at amortised cost.", ["Pooling and aging methods common"]],
      ),
      note("Both look ahead. The older “incurred loss” model, which waited for evidence of a loss, no longer applies to trade receivables."),
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
      p("Loss rates come from Northgate's historical write-offs by bucket, adjusted for current conditions and forecasts — e.g. raised slightly because manufacturing orders are slowing."),
    ),
    screen(
      "Recording the allowance",
      p("The allowance was $10,000 and needs to be $14,400:"),
      journal([["Credit loss expense", "$4,400", ""], ["Allowance for credit losses", "", "$4,400"]], "$4,400"),
      p("Net receivables on the balance sheet: $600,000 − $14,400 = $585,600."),
    ),
    screen(
      "Specific provisions, write-offs and recoveries",
      h("A customer owing $3,000 goes into liquidation — write off"),
      journal([["Allowance for credit losses", "$3,000", ""], ["Accounts receivable", "", "$3,000"]], "$3,000"),
      h("$500 is later recovered from the liquidator"),
      journal([["Cash", "$500", ""], ["Credit loss expense (recovery)", "", "$500"]], "$500"),
      tip("Specific vs. collective", "Assess large or known-problem customers individually, and use the matrix for the rest — without counting anyone twice."),
    ),
    mistakes(
      ["Waiting for evidence of a loss", "Expected-loss models look ahead."],
      ["Using one flat rate for all ages", "Older balances need higher rates."],
      ["Counting a customer twice", "Exclude specifically provided balances from the matrix."],
      ["Deleting written-off customers", "Keep records in case of recovery."],
    ),
    check(
      2,
      q("Under IFRS 9's simplified approach, trade receivables carry an allowance for:", ["Lifetime expected credit losses", "12-month losses", "Only incurred losses", "No losses"], 0, "From initial recognition."),
      q("What does CECL stand for?", ["Current expected credit losses", "Corporate expense control ledger", "Credit exposure cap limit", "Cash entry clearing ledger"], 0, "The US GAAP model in ASC 326."),
      q("$50,000 is 31–60 days old with a 6% loss rate. What's the allowance for that bucket?", ["$3,000", "$300", "$5,000", "$6,000"], 0, "6% × $50,000."),
      q("The allowance must rise from $10,000 to $14,400. What's the expense?", ["$4,400", "$14,400", "$10,000", "$24,400"], 0, "Top up the difference."),
      q("A written-off debt is partly recovered. What's credited?", ["Credit loss expense (recovery)", "Accounts receivable", "Revenue", "Share capital"], 0, "Recoveries reduce the expense."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Matrix",
          ["Current $300,000 at 1%; 1–60 days $80,000 at 5%; over 60 days $20,000 at 30%. Existing allowance $9,000. Calculate the allowance and the entry."],
          ["Required: $3,000 + $4,000 + $6,000 = $13,000.", "Dr Credit loss expense $4,000 · Cr Allowance for credit losses $4,000."],
        ],
        [
          "Exercise 2 — Forecast adjustment",
          ["Historical loss on 31–60 day balances is 5%, but a recession is forecast. What might Northgate do?"],
          ["Raise the loss rate above 5% (e.g. 7%) to reflect forward-looking information, and document why."],
        ],
      ),
    ),
    summary(
      ["The IFRS 9 / Ind AS 109 simplified approach", "The CECL model under US GAAP", "Building a provision matrix", "Recording the allowance, write-offs and recoveries"],
      "Expected-loss models make the balance sheet realistic before customers default — estimate, document and update every period.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Foreign-Currency Receivables and Payables",
      ["Northgate invoices European customers in euros. This module follows a euro invoice from recording to settlement."],
      ["Record transactions at the transaction-date rate", "Revalue balances at period end", "Separate realised and unrealised differences", "Handle settlement in a different currency"],
    ),
    screen(
      "Recording at the transaction-date rate",
      p("Northgate sells tools to a German manufacturer for €20,000 when €1 = $1.10."),
      journal([["Accounts receivable (€20,000)", "$22,000", ""], ["Revenue", "", "$22,000"]], "$22,000"),
    ),
    screen(
      "Revaluing at period end",
      p("At year end, €1 = $1.12. The receivable is revalued to $22,400:"),
      journal([["Accounts receivable", "$400", ""], ["Foreign exchange gain (unrealised)", "", "$400"]], "$400"),
      note("Revenue stays at $22,000 — only the monetary balance is revalued."),
    ),
    screen(
      "Realised and unrealised differences",
      p("In the next period, the customer pays €20,000 when €1 = $1.09, so Northgate receives $21,800."),
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
      "Foreign-currency payables",
      p("Northgate owes a Japanese supplier ¥3,000,000, recorded at $20,400 (¥1 = $0.0068). At year end ¥1 = $0.0070, so the payable is now $21,000."),
      journal([["Foreign exchange loss (unrealised)", "$600", ""], ["Accounts payable", "", "$600"]], "$600"),
      tip("Direction check", "A stronger foreign currency raises receivables (gain) and raises payables (loss)."),
    ),
    screen(
      "Settlement in a different currency",
      bullets(
        "If Northgate pays a euro bill from a USD account, the bank converts at its rate; the difference to the carrying amount is a realised gain or loss.",
        "Bank conversion fees are separate expenses, not FX losses.",
        "Partial payments settle part of the balance; the remainder is revalued at period end.",
      ),
      note("Rates in this module are illustrative."),
    ),
    mistakes(
      ["Revaluing revenue", "Only monetary balances are revalued."],
      ["Mixing bank fees into FX losses", "Record them separately."],
      ["Getting the direction wrong for payables", "A stronger foreign currency increases what you owe."],
      ["Forgetting to revalue at period end", "Open balances use the closing rate."],
    ),
    check(
      3,
      q("€20,000 at $1.10 is recorded as:", ["$22,000", "$20,000", "$18,182", "$22,400"], 0, "€20,000 × 1.10."),
      q("At year end the rate is $1.12. What's the unrealised result?", ["$400 gain", "$400 loss", "No change", "$2,000 gain"], 0, "The receivable is worth $400 more."),
      q("Is revenue revalued at year end?", ["No — only monetary balances are", "Yes", "Only for exports", "Only under US GAAP"], 0, "Revenue stays at the transaction rate."),
      q("The receivable carried at $22,400 is settled for $21,800. What's the result?", ["$600 realised loss", "$600 realised gain", "$200 loss", "No result"], 0, "$22,400 − $21,800."),
      q("Bank conversion fees should be recorded as:", ["Separate bank charges", "FX losses", "Revenue", "Inventory"], 0, "Keep them separate."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Receivable",
          ["€15,000 invoiced at $1.08; year-end rate $1.05. What's the unrealised result?"],
          ["$16,200 → $15,750: a $450 unrealised loss."],
        ],
        [
          "Exercise 2 — Payable",
          ["A £10,000 bill recorded at $1.27 is paid when £1 = $1.25. What's the realised result?"],
          ["Recorded $12,700; paid $12,500 — a $200 realised gain."],
        ],
      ),
    ),
    summary(
      ["Recording at the transaction-date rate", "Revaluing at period end", "Realised vs. unrealised differences", "Foreign-currency payables", "Settlement in a different currency"],
      "Record at the transaction rate, revalue open balances at the closing rate, and recognise the final difference when settled.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Cut-off, Accruals and Adjustments",
      ["Getting the period right is where many receivables and payables errors happen. This module covers cut-off testing, accruals, rebates, credit and debit notes, and retentions."],
      ["Test sales and purchase cut-off", "Accrue goods received not invoiced", "Handle customer advances and unbilled revenue", "Account for volume rebates and supplier incentives", "Use credit notes, debit notes and retentions"],
    ),
    screen(
      "Cut-off testing",
      table(
        ["Test", "What to check", "Northgate example"],
        [
          ["Sales cut-off", "Shipments in the last and first days of the year are invoiced in the right period", "A $40,000 shipment on Dec 30 invoiced Jan 3 — revenue belongs in December"],
          ["Purchase cut-off", "Goods received before year end are recorded as purchases or accruals", "Stock received Dec 30 with no bill — accrue it"],
        ],
      ),
    ),
    screen(
      "Goods received not invoiced (GRNI)",
      p("$8,000 of stock arrived on December 30; the supplier's bill arrives January 6."),
      journal([["Inventory", "$8,000", ""], ["GRNI accrual", "", "$8,000"]], "$8,000"),
      caution("Old GRNI balances usually mean receipts were never matched to bills. Clear them monthly."),
    ),
    screen(
      "Customer advances and unbilled revenue",
      terms(
        ["Customer advance", "Cash received before delivery — a contract liability until Northgate delivers."],
        ["Unbilled revenue", "Earned but not yet billable — a contract asset or unbilled receivable."],
      ),
      p("An Indian customer pays a $15,000 advance for a custom order shipping in February:"),
      journal([["Cash", "$15,000", ""], ["Contract liability (customer advances)", "", "$15,000"]], "$15,000"),
    ),
    screen(
      "Volume rebates and supplier incentives",
      terms(
        ["Rebates to customers", "Variable consideration: reduce revenue for the rebate expected to be paid, and recognise a refund liability."],
        ["Supplier rebates", "Recognise a receivable and reduce the cost of purchases (or inventory) when the rebate is probable and can be estimated."],
      ),
      example(
        [["A distributor's purchases this year", "$1,200,000"], ["Rebate if over $1,000,000 (on all purchases)", "2%"]],
        ["Expected rebate — reduce revenue", "$24,000"],
      ),
    ),
    screen(
      "Credit notes, debit notes and retentions",
      terms(
        ["Credit note", "Issued by the seller to reduce the buyer's balance — returns, pricing errors, rebates."],
        ["Debit note", "Used (often by a buyer) to claim a reduction or by a seller to charge an extra amount, depending on local practice."],
        ["Retentions", "Part of each payment held back until a project is complete, common in construction and project supply."],
      ),
      p("Northgate supplies a $100,000 safety system to a construction firm with a 5% retention: $95,000 is due now and $5,000 when the defects period ends."),
      tip("Track retentions separately", "Keep retentions in their own accounts with expected release dates. Long retentions may be non-current."),
    ),
    mistakes(
      ["Using invoice dates for cut-off", "Use shipment and receipt dates."],
      ["Letting GRNI balances age", "Match and clear them monthly."],
      ["Ignoring expected rebates until paid", "Reduce revenue as they're earned."],
      ["Mixing retentions with normal receivables", "Track them separately."],
    ),
    check(
      4,
      q("Stock received December 30, billed January 6. What's needed at December 31?", ["A GRNI accrual", "Nothing", "A credit note", "Revenue"], 0, "The liability exists once goods arrive."),
      q("What do old GRNI balances usually mean?", ["Receipts not matched to bills", "Strong sales", "Paid bills", "Bank errors"], 0, "They need clearing."),
      q("A customer buys $1.2m with a 2% rebate above $1m on all purchases. What's the rebate?", ["$24,000", "$4,000", "$20,000", "$2,400"], 0, "2% × $1,200,000."),
      q("How is an expected customer rebate treated?", ["As a reduction of revenue with a refund liability", "As an expense only", "Ignored until paid", "As inventory"], 0, "It's variable consideration."),
      q("$100,000 invoice with 5% retention. How much is due now?", ["$95,000", "$100,000", "$5,000", "$105,000"], 0, "The 5% is held back."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Supplier rebate",
          ["Northgate expects a 3% rebate on $800,000 of purchases from a supplier, and it's probable. What's recorded?"],
          ["Dr Rebate receivable $24,000 · Cr Cost of sales (or Inventory, for unsold goods) $24,000."],
        ],
        [
          "Exercise 2 — Customer advance",
          ["The $15,000 Indian order ships in February. What's the February entry, ignoring tax?"],
          ["Dr Contract liability $15,000 · Cr Revenue $15,000."],
        ],
      ),
    ),
    summary(
      ["Sales and purchase cut-off testing", "GRNI accruals", "Customer advances and unbilled revenue", "Customer and supplier rebates", "Credit notes, debit notes and retentions"],
      "Cut-off and accruals put every receivable and payable in the right period — rebates and retentions included.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Netting, Financing and Intercompany",
      ["Receivables and payables can be offset, sold or financed — and some payments arrive with tax already deducted. This module covers each."],
      ["Apply contra and netting arrangements", "Account for factoring and invoice discounting", "Disclose supplier finance arrangements", "Handle intercompany receivables and payables", "Record taxes withheld on payments"],
    ),
    screen(
      "Contra and netting arrangements",
      p("Northgate both buys from and sells to Allied Metals. With a signed agreement, the balances can be netted:"),
      table(
        ["", "Amount"],
        [
          ["Northgate owes Allied Metals (payable)", "$12,000"],
          ["Allied Metals owes Northgate (receivable)", "$7,500"],
          ["Net payable after contra", "$4,500"],
        ],
        { numeric: [1] },
      ),
      journal([["Accounts payable — Allied Metals", "$7,500", ""], ["Accounts receivable — Allied Metals", "", "$7,500"]], "$7,500"),
      note("For presentation, receivables and payables are generally offset only when there's a legal right of set-off and an intention to settle net."),
    ),
    screen(
      "Factoring and invoice discounting",
      compare(
        ["Factoring without recourse", "The factor takes the credit risk. If substantially all risks and rewards transfer, the receivable is derecognised.", ["Receivable removed", "Discount is an expense"]],
        ["With recourse / invoice discounting", "Northgate keeps the credit risk. The receivables usually stay on the balance sheet, with a borrowing for the cash received.", ["Receivable stays", "Loan recognised"]],
      ),
      example(
        [["Receivables factored without recourse", "$200,000"], ["Factor's discount 3%", "($6,000)"]],
        ["Cash received", "$194,000"],
      ),
    ),
    screen(
      "Supplier finance arrangements",
      p("In supplier finance (reverse factoring), a bank pays Northgate's suppliers early and Northgate pays the bank later."),
      bullets(
        "Northgate must consider whether the payables are still trade payables or have become borrowings.",
        "IFRS (amendments to IAS 7 and IFRS 7) and US GAAP (ASU 2022-04) require disclosures about these arrangements — terms, amounts outstanding and payment dates.",
        "Readers need these disclosures to understand the business's real liquidity.",
      ),
    ),
    screen(
      "Intercompany receivables and payables",
      bullets(
        "Northgate's Indian sales office is a subsidiary; amounts it owes the parent are intercompany balances.",
        "Both sides must agree every month, including currency.",
        "Intercompany balances are eliminated on consolidation.",
        "Settle them regularly to avoid FX and tax complications.",
      ),
    ),
    screen(
      "Taxes withheld on customer and supplier payments",
      terms(
        ["India — TDS", "Many Indian payers deduct tax at source on certain payments and deposit it with the Government. The recipient records the TDS as a receivable or tax credit."],
        ["US — backup withholding", "If a payee fails to provide a valid taxpayer ID, payers may need to withhold 24% of certain payments."],
      ),
      p("An Indian customer pays a $10,000 invoice after deducting 10% TDS (illustrative rate):"),
      journal([["Cash", "$9,000", ""], ["TDS receivable", "$1,000", ""], ["Accounts receivable", "", "$10,000"]], "$10,000"),
      caution("Don't treat the $1,000 as a bad debt. Obtain the TDS certificate so the credit can be claimed."),
    ),
    mistakes(
      ["Netting without an agreement", "Contras need agreement with the counterparty."],
      ["Derecognising receivables factored with recourse", "Credit risk hasn't transferred."],
      ["Ignoring supplier finance disclosures", "They're now required."],
      ["Writing off TDS as a bad debt", "It's a tax credit."],
    ),
    check(
      5,
      q("Northgate owes $12,000 and is owed $7,500 by the same company. What's the net payable after contra?", ["$4,500", "$19,500", "$7,500", "$12,000"], 0, "$12,000 − $7,500."),
      q("What's needed before netting balances?", ["An agreement with the counterparty", "Nothing", "A bank loan", "A tax return"], 0, "Contras need agreement."),
      q("Under factoring with recourse, the receivable usually:", ["Stays on the balance sheet with a borrowing", "Is removed", "Becomes revenue", "Becomes equity"], 0, "Northgate keeps the credit risk."),
      q("What do recent IFRS and US GAAP changes require for supplier finance?", ["Disclosures", "Banning them", "Capitalising them", "Ignoring them"], 0, "New disclosure requirements apply."),
      q("A customer pays $9,000 on a $10,000 invoice after 10% TDS. What's the $1,000?", ["A TDS receivable / tax credit", "A bad debt", "A discount", "Revenue"], 0, "Tax paid on Northgate's behalf."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Factoring",
          ["Northgate factors $150,000 of receivables without recourse for a 2.5% discount. Write the entry."],
          ["Dr Cash $146,250 · Dr Factoring expense $3,750 · Cr Accounts receivable $150,000."],
        ],
        [
          "Exercise 2 — Invoice discounting",
          ["Instead, Northgate borrows $120,000 against the same receivables, keeping the credit risk. What's recorded?"],
          ["Dr Cash $120,000 · Cr Borrowings $120,000. The receivables stay on the balance sheet."],
        ],
      ),
    ),
    summary(
      ["Contra and netting arrangements", "Factoring with and without recourse", "Supplier finance and its disclosures", "Intercompany receivables and payables", "TDS and backup withholding"],
      "How receivables and payables are settled, sold or financed changes what the balance sheet shows — and what must be disclosed.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Controls, Analysis and Reporting",
      ["The final module covers the controls that protect receivables and payables, the analysis that tracks them and a period-end checklist."],
      ["Control customer and supplier master data", "Reconcile subledgers to the general ledger", "Analyse DSO, DPO and aging", "Spot red flags", "Follow a period-end checklist"],
    ),
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
      "Subledger to GL reconciliations",
      bullets(
        "Agree AR and AP aging totals to the control accounts every month.",
        "Reconcile key supplier statements and confirm major customer balances.",
        "Investigate any difference — usually journals posted to control accounts or interface failures.",
      ),
    ),
    screen(
      "DSO, DPO and aging",
      table(
        ["Ratio", "Formula", "Northgate"],
        [
          ["Days sales outstanding (DSO)", "Receivables ÷ Credit sales × 365", "$600,000 ÷ $4,800,000 × 365 ≈ 46 days"],
          ["Days payable outstanding (DPO)", "Payables ÷ Cost of sales × 365", "$350,000 ÷ $3,000,000 × 365 ≈ 43 days"],
        ],
      ),
      p("Northgate collects in about 46 days but pays in about 43 — it's financing its customers for three days longer than suppliers finance it."),
      tip("Watch the trend", "A rising DSO means slower collection; a falling DPO means paying suppliers faster. Both use cash."),
    ),
    screen(
      "Red flags",
      table(
        ["Red flag", "Possible cause"],
        [
          ["Unapplied cash", "Payments not matched to invoices — receivables overstated"],
          ["Debit balances in AP", "Duplicate payments or unclaimed credits"],
          ["Credit balances in AR", "Overpayments or misapplied cash"],
          ["Same amount paid twice to a supplier", "Duplicate payment"],
          ["Receivables growing faster than sales", "Collection problems or aggressive revenue"],
        ],
      ),
    ),
    screen(
      "Period-end checklist",
      bullets(
        "Subledgers agree to control accounts.",
        "Cut-off tested; GRNI and unbilled revenue reviewed.",
        "Credit loss allowance updated with forward-looking information.",
        "Foreign-currency balances revalued.",
        "Rebates, retentions and credit balances reviewed and classified.",
        "Supplier finance and factoring arrangements identified and disclosed.",
      ),
      caution("Debit balances in AP can hide money that should be recovered from suppliers — investigate and chase them."),
    ),
    mistakes(
      ["Bank details changed by email alone", "Call back and get a second approval."],
      ["Ignoring unapplied cash", "Apply it promptly."],
      ["Looking at DSO without DPO", "Compare both."],
      ["Skipping disclosures", "Include factoring and supplier finance."],
    ),
    check(
      6,
      q("Which control prevents payment diversion?", ["Call-back verification of bank-detail changes", "Credit limits", "Invoice templates", "Aging reports"], 0, "Verify changes independently."),
      q("Receivables $600,000 and credit sales $4.8m. What's DSO, roughly?", ["46 days", "30 days", "60 days", "80 days"], 0, "$600,000 ÷ $4,800,000 × 365."),
      q("A debit balance in AP may indicate:", ["A duplicate payment", "Strong sales", "Unpaid bills", "Revenue"], 0, "You may have paid twice."),
      q("Unapplied customer cash means:", ["Receivables may be overstated", "Revenue is understated", "Payables are wrong", "Nothing"], 0, "Paid invoices still look open."),
      q("Which belongs on the period-end checklist?", ["Revalue foreign-currency balances", "Delete old invoices", "Reopen closed periods", "Change the chart"], 0, "FX balances must be revalued."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — DPO",
          ["Payables $420,000; cost of sales $3,000,000. What's DPO, and what changed from 43 days?"],
          ["$420,000 ÷ $3,000,000 × 365 ≈ 51 days — Northgate is paying suppliers more slowly, which helps cash but could strain relationships."],
        ],
        [
          "Exercise 2 — Red flag",
          ["A supplier account shows a $6,800 debit balance. What do you do?"],
          ["Check for a duplicate payment or unapplied credit note; contact the supplier and request a refund or offset against the next bill."],
        ],
      ),
    ),
    summary(
      ["Master data controls", "Subledger to GL reconciliations", "DSO, DPO and aging analysis", "Red flags in receivables and payables", "A period-end checklist"],
      "Strong controls, regular reconciliation and simple ratios keep receivables and payables accurate — and cash flowing.",
    ),
  ],
}

export default lessons
