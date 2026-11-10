import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Accounts Receivable and Invoicing — Brightside
// Cleaning's October receivables.

const assignment: PracticalAssignment = {
  title: "Manage Brightside Cleaning's October receivables",
  period: "October 2026 (31 days)",
  intro:
    "Invoice Brightside Cleaning's customers for October, record payments, a credit note, an early-payment discount and a bad debt, then measure how quickly customers are paying.",
  context: [
    p("Brightside Cleaning invoices commercial clients monthly on 30-day terms. It offers 2% off for payment within 10 days."),
    table(
      ["Accounts receivable at 1 October", "Amount", "Invoice month"],
      [
        ["Oakview Offices", "$6,000", "September"],
        ["Pine Clinic", "$5,000", "August — over 60 days overdue"],
        ["Lake Gym", "$3,000", "September"],
      ],
      { footer: ["Total", "$14,000", ""], numeric: [1] },
    ),
    table(
      ["October", "Transaction"],
      [
        ["1 Oct", "Invoiced Oakview $6,000, Lake Gym $3,000 and Harbor Hotel $8,500"],
        ["9 Oct", "Harbor Hotel paid within 10 days, taking the 2% discount"],
        ["14 Oct", "Oakview paid its September invoice — $6,000"],
        ["20 Oct", "Lake Gym paid $2,000 towards its September invoice"],
        ["22 Oct", "Issued Lake Gym a $400 credit note for a missed cleaning visit in October"],
        ["31 Oct", "Pine Clinic went bankrupt — its $5,000 balance is written off against the allowance"],
      ],
    ),
    bullets("The allowance for doubtful accounts was $5,500 at 1 October.", "Days sales outstanding (DSO) = closing receivables ÷ net sales for the month × 31."),
    note("Ignore sales tax."),
  ],
  tasks: [
    num("How much cash did Harbor Hotel pay?", 8330, "$8,500 − 2% ($170) = $8,330.", { prefix: "$" }),
    num("What is the total cash collected from customers in October?", 16330, "Harbor $8,330 + Oakview $6,000 + Lake Gym $2,000 = $16,330.", { prefix: "$" }),
    pick("Which entry records the Pine Clinic write-off?", "Dr Allowance for doubtful accounts $5,000, Cr Accounts receivable $5,000", ["Dr Bad debt expense $5,000, Cr Cash $5,000", "Dr Accounts receivable $5,000, Cr Sales $5,000", "No entry until the court case ends"], "Under the allowance method, the expense was recognised earlier; the write-off just removes the account."),
    num("What is the allowance balance after the write-off?", 500, "$5,500 − $5,000 = $500.", { prefix: "$" }),
    num("What is Lake Gym's balance at 31 October?", 3600, "September $3,000 − $2,000 paid + October $3,000 − $400 credit note = $3,600.", { prefix: "$" }),
    num("What is total accounts receivable at 31 October?", 9600, "Oakview $6,000 (October) + Lake Gym $3,600 = $9,600.", { prefix: "$" }),
    num("What are October's net sales?", 16930, "Invoiced $17,500 − credit note $400 − discount $170 = $16,930.", { prefix: "$" }),
    num("What is DSO at 31 October? (one decimal place)", 17.6, "$9,600 ÷ $16,930 × 31 = 17.6 days.", { suffix: "days", tolerance: 0.1 }),
    pick("Which customer should be followed up first in November?", "Lake Gym — part of its September invoice is still unpaid", ["Oakview — its October invoice isn't due yet", "Harbor Hotel", "Pine Clinic"], "Lake Gym's remaining $1,000 from September is now overdue."),
  ],
  references: [
    ref("IRS — Topic No. 453, Bad debt deduction", "https://www.irs.gov/taxtopics/tc453"),
    ref("IFRS Foundation — Conceptual Framework for Financial Reporting", "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/"),
  ],
}

export default assignment
