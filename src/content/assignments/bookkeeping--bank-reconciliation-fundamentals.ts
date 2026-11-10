import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Bank Reconciliation Fundamentals — Harbor Coffee's
// August reconciliation.

const assignment: PracticalAssignment = {
  title: "Reconcile Harbor Coffee's August bank account",
  period: "August 2026",
  intro:
    "Compare Harbor Coffee's cash book with the August bank statement, find every difference, correct the books and prove both sides agree.",
  context: [
    p("Harbor Coffee runs one business checking account."),
    table(
      ["31 August 2026", "Amount"],
      [
        ["Balance per cash book", "$15,420"],
        ["Balance per bank statement", "$15,712"],
      ],
      { numeric: [1] },
    ),
    bullets(
      "Takings of $1,240 banked on 31 August appear on the September statement.",
      "Cheques #301 ($680) and #304 ($1,150) were issued in August but haven't cleared the bank.",
      "The bank charged a $35 monthly fee and paid $12 interest — neither is in the cash book.",
      "A customer's $220 cheque was returned unpaid (NSF).",
      "A $145 insurance direct debit went out but wasn't recorded in the cash book.",
      "Cheque #302 to a supplier was recorded in the cash book as $540, but it was written and cleared for $450.",
    ),
    note("The bank made no errors this month."),
  ],
  tasks: [
    num("What is the total of outstanding (unpresented) cheques?", 1830, "#301 $680 + #304 $1,150 = $1,830.", { prefix: "$" }),
    num("What is the adjusted bank balance?", 15122, "$15,712 + deposit in transit $1,240 − outstanding cheques $1,830 = $15,122.", { prefix: "$" }),
    num("By how much, and in which direction, must the cash book be corrected for cheque #302? (Enter + for an increase or − for a decrease)", 90, "The books recorded $540 instead of $450 — payments were overstated by $90, so cash increases by $90.", { prefix: "$" }),
    pick("Which entry records the returned NSF cheque?", "Dr Accounts receivable $220, Cr Cash $220", ["Dr Cash $220, Cr Sales $220", "Dr Bad debt expense $220, Cr Sales $220", "No entry — it's the bank's problem"], "The customer still owes the money, and the cash Harbor thought it had is gone."),
    num("What is the adjusted cash book balance?", 15122, "$15,420 − $35 fee + $12 interest − $220 NSF − $145 direct debit + $90 correction = $15,122.", { prefix: "$" }),
    pick("Which items need journal entries in Harbor Coffee's books?", "Bank fee, interest, NSF cheque, direct debit and the #302 correction", ["Deposit in transit and outstanding cheques", "Only the bank fee", "Every item on the list"], "Timing differences (deposits in transit, unpresented cheques) correct themselves next month; only book-side items need entries."),
    num("What is the net effect of the book-side adjustments on the cash book?", -298, "−$35 + $12 − $220 − $145 + $90 = −$298 ($15,420 → $15,122).", { prefix: "$" }),
    pick("What should happen to the deposit in transit next month?", "Check that it appears on the September statement", ["Record it again in September", "Reverse it", "Write it off"], "If it doesn't appear in the next few days, investigate immediately."),
  ],
  references: [
    ref("IRS — Recordkeeping for small businesses", "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping", "bank statements and supporting records"),
    ref("IRS — Publication 583, Starting a Business and Keeping Records", "https://www.irs.gov/publications/p583"),
  ],
}

export default assignment
