import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Bank Reconciliation and Month-End Close —
// Meridian Outdoor Group's June close (US parent + Australian subsidiary).

const assignment: PracticalAssignment = {
  title: "Close Meridian Outdoor Group's June books",
  period: "June 2026",
  intro:
    "Reconcile the Australian subsidiary's bank, agree intercompany balances, translate the subsidiary's results into US dollars and post the group's month-end accrual.",
  context: [
    p("Meridian Outdoor Inc. (US parent, USD) owns Meridian Outdoor Pty Ltd (Australia, AUD). Exchange rates are illustrative."),
    table(
      ["Australian subsidiary — bank, 30 June", "AUD"],
      [
        ["Balance per cash book", "82,400"],
        ["Balance per bank statement", "84,100"],
        ["Deposit in transit", "1,800"],
        ["Unpresented cheques", "3,200"],
        ["Bank fee not in the books", "50"],
        ["Interest credited by the bank, not in the books", "350"],
      ],
      { numeric: [1] },
    ),
    table(
      ["Other June information", "Detail"],
      [
        ["Intercompany", "The parent shows a receivable of USD 33,000 from the subsidiary; the subsidiary shows a payable of AUD 50,000"],
        ["Rates", "Closing rate USD 0.66 per AUD; June average rate USD 0.65 per AUD"],
        ["Subsidiary results", "Profit for June AUD 120,000; net assets at 30 June AUD 900,000"],
        ["US audit fee", "June's share of the annual audit, not yet invoiced — USD 12,000"],
      ],
    ),
    bullets("Income and expenses are translated at the average rate; assets and liabilities at the closing rate.", "The group uses reversing entries for month-end accruals."),
    note("Treat each task independently."),
  ],
  tasks: [
    num("What is the subsidiary's adjusted cash book balance (AUD)?", 82700, "82,400 − 50 fee + 350 interest = AUD 82,700.", { prefix: "A$" }),
    num("What is the adjusted bank balance (AUD)?", 82700, "84,100 + 1,800 − 3,200 = AUD 82,700 — the two sides agree.", { prefix: "A$" }),
    num("What is the subsidiary's AUD 50,000 payable worth in USD at the closing rate?", 33000, "50,000 × 0.66 = USD 33,000 — it matches the parent's receivable.", { prefix: "US$" }),
    pick("What happens to the intercompany balances on consolidation?", "Both are eliminated", ["Both are added together", "Only the payable is shown", "They go to equity"], "The group can't owe itself money."),
    num("What is the subsidiary's June profit in USD?", 78000, "AUD 120,000 × 0.65 average rate = USD 78,000.", { prefix: "US$" }),
    num("What are the subsidiary's net assets in USD at 30 June?", 594000, "AUD 900,000 × 0.66 closing rate = USD 594,000.", { prefix: "US$" }),
    pick("Where does the difference from using different rates for profit and net assets go?", "Other comprehensive income (foreign currency translation reserve)", ["Profit or loss", "Revenue", "Cash"], "Translation differences on a foreign operation are recognised in OCI (IAS 21)."),
    pick("Which entry records the June audit fee accrual?", "Dr Audit fee expense $12,000, Cr Accrued expenses $12,000 — reversed on 1 July", ["No entry until the invoice arrives", "Dr Accrued expenses, Cr Cash", "Dr Prepaid expenses, Cr Audit fee expense"], "Accrue the expense in the month incurred; reverse it so the July invoice isn't double counted."),
  ],
  references: [
    ref("IFRS Foundation — IAS 21 The Effects of Changes in Foreign Exchange Rates", "https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/", "translation of a foreign operation"),
    ref("IFRS Foundation — IFRS 10 Consolidated Financial Statements", "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/", "intercompany eliminations"),
  ],
}

export default assignment
