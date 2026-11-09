import { fq } from "@/lib/finalTest"

// Final test bank for Advanced Accounts Receivable and Payable — separate
// from the module knowledge checks. The correct answer is listed first; the
// test shuffles the options.

export default [
  // Module 1
  fq("How are most short-term trade receivables measured?", "At the invoice amount, less expected credit losses, without discounting", ["At fair value through profit", "At twice the invoice", "At the cash received only"], "Short-term balances aren't discounted."),
  fq("What is a contract asset?", "A right to payment that depends on something other than time", ["Cash in the bank", "An unconditional receivable", "A supplier prepayment"], "E.g. work done but not yet billable."),
  fq("An order is invoiced in advance but not yet delivered. What's recognised?", "A receivable (if due) and a contract liability — no revenue yet", ["Revenue", "Nothing", "An expense"], "Revenue waits for delivery."),
  fq("How should a $5,000 customer overpayment in the AR ledger be presented?", "As a liability, not netted against other customers", ["As revenue", "As a bad debt", "Ignored"], "It's owed back to the customer."),
  fq("What went wrong when Northgate posted a $2,000 correction directly to the AR control account?", "The aging no longer agreed and the customer's statement was wrong", ["Revenue doubled", "Tax was refunded", "Nothing"], "Post through the subledger."),
  fq("What were Northgate's annual credit sales?", "$4,800,000", ["$600,000", "$3,000,000", "$350,000"], "Used for DSO."),

  // Module 2
  fq("Which standards require the simplified lifetime approach for trade receivables?", "IFRS 9, Ind AS 109 and AASB 9", ["IAS 2 and IAS 16", "ASC 606 only", "IFRS 15 only"], "Financial instruments standards."),
  fq("Which US GAAP topic contains CECL?", "ASC 326", ["ASC 606", "ASC 842", "ASC 330"], "Credit losses."),
  fq("What allowance did Northgate's matrix give for balances over 90 days?", "$4,000", ["$2,000", "$3,000", "$10,000"], "40% of $10,000."),
  fq("What were Northgate's net receivables after the allowance?", "$585,600", ["$600,000", "$590,000", "$14,400"], "$600,000 − $14,400."),
  fq("Why did Northgate raise its loss rates slightly?", "Manufacturing orders were slowing", ["Sales doubled", "Interest rates fell", "A new office opened"], "Forward-looking information."),
  fq("Current $300,000 at 1%, 1–60 days $80,000 at 5%, over 60 days $20,000 at 30%. What's the required allowance?", "$13,000", ["$9,000", "$4,000", "$20,000"], "$3,000 + $4,000 + $6,000."),

  // Module 3
  fq("€15,000 invoiced at $1.08 is revalued at $1.05. What's the result?", "A $450 unrealised loss", ["A $450 gain", "No change", "A $1,500 loss"], "$16,200 → $15,750."),
  fq("At what amount did Northgate record its ¥3,000,000 payable?", "$20,400", ["$21,000", "$3,000,000", "$20,000"], "At ¥1 = $0.0068."),
  fq("What was the year-end effect on the yen payable when ¥1 = $0.0070?", "A $600 unrealised loss", ["A $600 gain", "No effect", "A $21,000 loss"], "The payable rose to $21,000."),
  fq("A stronger foreign currency has what effect on foreign-currency payables?", "It increases them — a loss", ["It decreases them — a gain", "No effect", "It deletes them"], "You owe more in your own currency."),
  fq("A £10,000 bill recorded at $1.27 is paid at $1.25. What's the result?", "A $200 realised gain", ["A $200 loss", "No result", "A $2,000 gain"], "Recorded $12,700, paid $12,500."),
  fq("Over the euro invoice's whole life, what was the total exchange result?", "A $200 loss", ["A $400 gain", "A $600 loss", "No result"], "$21,800 received vs. $22,000 recorded."),

  // Module 4
  fq("Which dates drive cut-off testing?", "Shipment and receipt dates", ["Invoice numbers", "Payment dates", "Order dates"], "Recognition follows delivery."),
  fq("An Indian customer pays a $15,000 advance for a February shipment. What's credited?", "Contract liability (customer advances)", ["Revenue", "Accounts receivable", "TDS receivable"], "It isn't earned yet."),
  fq("When is a supplier rebate recognised?", "When it's probable and can be estimated", ["Only when the cash arrives", "Never", "At the start of the year"], "It reduces purchase costs."),
  fq("A 3% supplier rebate is expected on $800,000 of purchases. What's recorded?", "$24,000 rebate receivable", ["$2,400", "$8,000", "$80,000"], "3% × $800,000."),
  fq("When is a project retention usually released?", "When the defects period ends", ["Immediately", "Never", "When the invoice is printed"], "Held back until completion."),
  fq("Where might a two-year retention be classified?", "Non-current", ["Current", "Equity", "Revenue"], "Due after more than 12 months."),

  // Module 5
  fq("When can receivables and payables generally be offset for presentation?", "When there's a legal right of set-off and an intention to settle net", ["Whenever convenient", "Never", "Only at year end"], "Both conditions apply."),
  fq("$200,000 factored without recourse at a 3% discount. How much cash is received?", "$194,000", ["$200,000", "$206,000", "$6,000"], "$200,000 − $6,000."),
  fq("Which accounting update requires US supplier finance disclosures?", "ASU 2022-04", ["ASU 2016-02", "ASC 606", "IAS 1"], "IFRS uses amendments to IAS 7 and IFRS 7."),
  fq("$150,000 is factored without recourse for 2.5%. What's the factoring expense?", "$3,750", ["$150,000", "$146,250", "$2,500"], "2.5% × $150,000."),
  fq("At what rate may US backup withholding apply?", "24%", ["10%", "30%", "6.2%"], "When a valid taxpayer ID isn't provided."),
  fq("What should Northgate obtain so TDS can be claimed?", "The TDS certificate from the customer", ["A bank statement only", "A supplier invoice", "A credit note"], "It supports the tax credit."),

  // Module 6
  fq("What was Northgate's DPO?", "About 43 days", ["About 46 days", "About 30 days", "About 60 days"], "$350,000 ÷ $3,000,000 × 365."),
  fq("What does it mean that Northgate's DSO exceeds its DPO?", "It finances its customers longer than suppliers finance it", ["It collects faster than it pays", "It has no receivables", "It has no payables"], "About three days' gap."),
  fq("Payables rise to $420,000 with cost of sales of $3,000,000. What's DPO?", "About 51 days", ["About 43 days", "About 14 days", "About 70 days"], "$420,000 ÷ $3,000,000 × 365."),
  fq("Which check prevents duplicate supplier payments in master data?", "Duplicate checks on name, tax ID and bank account", ["Longer invoice numbers", "More approvers for sales", "Monthly credit limits"], "Duplicate records enable duplicate payments."),
  fq("What should be done about a $6,800 debit balance on a supplier account?", "Investigate and request a refund or offset", ["Ignore it", "Record it as revenue", "Write it off immediately"], "It may be a duplicate payment."),
  fq("Which item belongs on Northgate's period-end checklist?", "Identify and disclose factoring and supplier finance arrangements", ["Delete written-off customers", "Reopen last year", "Change the reporting currency"], "Disclosures matter for liquidity."),
]
