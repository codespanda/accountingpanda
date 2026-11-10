import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Bookkeeping Basics for Beginners — one month of
// ABC Design Services' books, from transactions to financial statements.

const assignment: PracticalAssignment = {
  title: "Keep ABC Design Services' books for October",
  period: "October 2026",
  intro:
    "You're ABC Design Services' bookkeeper for October. Record the month's transactions, reconcile the bank, post two month-end adjustments, and prepare the trial balance and statements. Use the figures below — a scratch sheet or spreadsheet will help.",
  context: [
    p("ABC Design Services is a small graphic design business. It uses the accrual basis and a monthly close."),
    table(
      ["Opening balances, 1 October 2026", "Debit", "Credit"],
      [
        ["Cash at bank", "$12,000", ""],
        ["Accounts receivable", "$4,000", ""],
        ["Equipment", "$9,000", ""],
        ["Accounts payable (TechMart)", "", "$1,500"],
        ["Owner's capital", "", "$23,500"],
      ],
      { footer: ["Total", "$25,000", "$25,000"], numeric: [1, 2] },
    ),
    table(
      ["Date", "Transaction"],
      [
        ["1 Oct", "Paid October office rent by bank transfer — $1,200"],
        ["3 Oct", "Invoiced Kite Café for logo design, due in 30 days — $3,500"],
        ["6 Oct", "Received payment from customers for September invoices — $4,000"],
        ["9 Oct", "Bought a printer on credit from TechMart — $800"],
        ["12 Oct", "Designed a website banner for a walk-in client, paid by bank transfer the same day — $1,500"],
        ["15 Oct", "Paid TechMart the opening balance owed — $1,500"],
        ["18 Oct", "Invoiced Bloom Florist for brochure design — $2,200"],
        ["20 Oct", "Paid the internet bill — $90"],
        ["22 Oct", "Owner withdrew cash for personal use — $1,000"],
        ["25 Oct", "Paid the part-time assistant's wages — $1,300"],
        ["28 Oct", "Received part payment from Kite Café — $2,000"],
        ["30 Oct", "Paid for social media advertising by cheque no. 1047 — $250"],
      ],
    ),
    table(
      ["Bank statement extract, 31 October 2026", "Amount"],
      [
        ["Closing balance per bank statement", "$14,395"],
        ["Bank service fee charged on 31 October (not yet in the books)", "$15"],
        ["Cheque no. 1047 ($250) — not yet presented to the bank", "—"],
      ],
    ),
    bullets(
      "Month-end adjustment 1: depreciation on equipment for October is $150.",
      "Month-end adjustment 2: October's electricity of $110 has been used but the bill won't arrive until November.",
    ),
    note("There are no other transactions. Ignore sales tax."),
  ],
  tasks: [
    num("What is ABC Design Services' total revenue for October?", 7200, "Kite Café $3,500 + banner $1,500 + Bloom Florist $2,200 = $7,200. Revenue is recognised when the work is invoiced, not when cash is received.", { prefix: "$" }),
    pick("Which entry records the printer bought on 9 October?", "Dr Equipment $800, Cr Accounts payable $800", ["Dr Office expenses $800, Cr Cash $800", "Dr Accounts payable $800, Cr Equipment $800", "Dr Equipment $800, Cr Cash $800"], "The printer is a non-current asset bought on credit, so Equipment increases (debit) and the amount owed to TechMart increases (credit)."),
    pick("How should the owner's $1,000 withdrawal on 22 October be recorded?", "Dr Owner's drawings $1,000, Cr Cash $1,000 — it reduces equity, not profit", ["Dr Wages expense $1,000, Cr Cash $1,000", "Dr Cash $1,000, Cr Owner's capital $1,000", "It isn't recorded because it's personal"], "Drawings are a reduction of owner's equity. They are not a business expense and don't affect profit."),
    num("What is the cash book balance at 31 October, before the bank reconciliation?", 14160, "$12,000 − 1,200 + 4,000 + 1,500 − 1,500 − 90 − 1,000 − 1,300 + 2,000 − 250 = $14,160.", { prefix: "$" }),
    num("After the bank reconciliation, what is the correct (adjusted) cash balance?", 14145, "Cash book $14,160 less the $15 bank fee = $14,145. Check: bank statement $14,395 less the unpresented cheque $250 = $14,145 — both sides agree.", { prefix: "$" }),
    num("What is the accounts receivable balance at 31 October?", 3700, "Opening $4,000 + Kite Café $3,500 − September receipts $4,000 + Bloom Florist $2,200 − Kite Café payment $2,000 = $3,700 (Kite Café $1,500 + Bloom Florist $2,200).", { prefix: "$" }),
    num("What is the accounts payable balance (TechMart) at 31 October?", 800, "Opening $1,500 + printer $800 − payment $1,500 = $800.", { prefix: "$" }),
    pick("Which entry records the unbilled electricity at month end?", "Dr Electricity expense $110, Cr Accrued expenses $110", ["No entry until the bill arrives", "Dr Accrued expenses $110, Cr Cash $110", "Dr Prepaid expenses $110, Cr Electricity expense $110"], "Under the accrual basis, the expense belongs to October when the electricity was used, with a liability until it's paid."),
    num("What are total expenses for October, including the bank fee and both adjustments?", 3115, "Rent $1,200 + internet $90 + wages $1,300 + advertising $250 + bank fee $15 + depreciation $150 + electricity $110 = $3,115. Drawings are not an expense.", { prefix: "$" }),
    num("What is the net profit for October?", 4085, "Revenue $7,200 − expenses $3,115 = $4,085.", { prefix: "$" }),
    num("What are the total debits on the adjusted trial balance at 31 October?", 31760, "Cash $14,145 + AR $3,700 + equipment $9,800 + drawings $1,000 + expenses $3,115 = $31,760. Credits: accumulated depreciation $150 + AP $800 + accrued expenses $110 + capital $23,500 + revenue $7,200 = $31,760.", { prefix: "$" }),
    num("What is owner's capital at 31 October, after profit and drawings?", 26585, "Opening capital $23,500 + net profit $4,085 − drawings $1,000 = $26,585.", { prefix: "$" }),
    num("What are total assets on the balance sheet at 31 October?", 27495, "Cash $14,145 + AR $3,700 + equipment $9,800 − accumulated depreciation $150 = $27,495. Check: liabilities $910 + equity $26,585 = $27,495.", { prefix: "$" }),
  ],
  references: [
    ref("IRS — Publication 583, Starting a Business and Keeping Records", "https://www.irs.gov/publications/p583", "what records to keep and why"),
    ref("IRS — Recordkeeping for small businesses", "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping", "supporting documents and how long to keep them"),
    ref("IFRS Foundation — Conceptual Framework for Financial Reporting", "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/", "definitions of assets, liabilities, equity, income and expenses"),
  ],
}

export default assignment
