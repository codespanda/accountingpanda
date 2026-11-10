import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Advanced Accounts Receivable and Payable —
// Northgate Industrial Supplies' March month end.

const assignment: PracticalAssignment = {
  title: "Close Northgate's March receivables and payables",
  period: "March 2026 (30-day basis for DSO)",
  intro:
    "Northgate Industrial Supplies reports in USD but trades in euros and pounds. Record March's foreign currency settlements, remeasure open balances, set the expected credit loss allowance and measure collection performance.",
  context: [
    p("Northgate Industrial Supplies, a US distributor. Functional currency USD."),
    table(
      ["Foreign currency item", "Detail"],
      [
        ["Sale to a German customer, 2 March", "€20,000, recorded at $1.10 per €"],
        ["Collection from the German customer, 28 March", "€20,000 received when the rate was $1.08 per €"],
        ["Purchase from a UK supplier, 10 March", "£5,000, recorded at $1.25 per £; unpaid at 31 March"],
        ["Closing rate, 31 March", "$1.28 per £"],
      ],
    ),
    table(
      ["Receivables aging at 31 March", "Balance", "Expected loss rate"],
      [
        ["Current", "$120,000", "1%"],
        ["1–30 days past due", "$40,000", "3%"],
        ["31–60 days past due", "$15,000", "10%"],
        ["61–90 days past due", "$8,000", "25%"],
        ["Over 90 days past due", "$5,000", "60%"],
      ],
      { footer: ["Total", "$188,000", ""], numeric: [1] },
    ),
    bullets(
      "The allowance for expected credit losses was $6,500 before the March adjustment.",
      "March credit sales were $210,000.",
      "A US customer paid a $50,000 invoice within 10 days and took the 2/10 discount.",
    ),
    note("Exchange differences on monetary items go to profit or loss."),
  ],
  tasks: [
    num("What is the realised exchange loss on the German receipt?", 400, "Recorded $22,000 (€20,000 × 1.10); received $21,600 (× 1.08). Loss $400.", { prefix: "$" }),
    num("What is the US dollar balance owed to the UK supplier at 31 March?", 6400, "£5,000 × 1.28 = $6,400.", { prefix: "$" }),
    num("What is the unrealised exchange loss on the UK payable?", 150, "$6,400 − $6,250 recorded = $150 loss (the pound strengthened).", { prefix: "$" }),
    pick("Where does the unrealised loss on the payable go?", "Profit or loss for March", ["Other comprehensive income", "Directly to retained earnings", "Nowhere until it's paid"], "Monetary items are remeasured at the closing rate, with differences in profit or loss (IAS 21)."),
    num("What allowance for expected credit losses is required at 31 March?", 8900, "$1,200 + $1,200 + $1,500 + $2,000 + $3,000 = $8,900.", { prefix: "$" }),
    num("What is March's credit loss expense?", 2400, "$8,900 required − $6,500 existing = $2,400.", { prefix: "$" }),
    num("What is net receivables on the balance sheet?", 179100, "$188,000 − $8,900 = $179,100.", { prefix: "$" }),
    num("What discount did the US customer take?", 1000, "2% × $50,000 = $1,000.", { prefix: "$" }),
    num("What is DSO at 31 March, using a 30-day month? (one decimal place)", 26.9, "$188,000 ÷ $210,000 × 30 = 26.9 days.", { suffix: "days", tolerance: 0.1 }),
    pick("Northgate factors $30,000 of receivables WITH recourse. How is the cash received treated?", "As a liability (borrowing) — the receivables stay on the balance sheet", ["As revenue", "As a sale of receivables, removing them", "As equity"], "With recourse, Northgate keeps the credit risk, so it hasn't transferred the receivables."),
  ],
  references: [
    ref("IFRS Foundation — IFRS 9 Financial Instruments", "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/", "expected credit losses and derecognition"),
    ref("IFRS Foundation — IAS 21 The Effects of Changes in Foreign Exchange Rates", "https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/"),
  ],
}

export default assignment
