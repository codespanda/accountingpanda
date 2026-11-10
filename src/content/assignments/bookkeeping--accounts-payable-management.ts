import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Accounts Payable Management — Ridgeway Supplies'
// September payables.

const assignment: PracticalAssignment = {
  title: "Run Ridgeway Supplies' September payables",
  period: "September 2026",
  intro:
    "Process Ridgeway Supplies' supplier invoices for September: match them to orders and receipts, take worthwhile discounts, run the payments and close the month's payables.",
  context: [
    p("Ridgeway Supplies is a hardware distributor. It uses three-way matching and a weekly payment run."),
    table(
      ["Accounts payable at 1 September", "Amount", "Status"],
      [
        ["Acme Tools", "$8,000", "Due 15 September"],
        ["Bolt Fasteners", "$6,500", "Due 30 September"],
        ["Coreline Paints", "$4,000", "Overdue since August"],
      ],
      { footer: ["Total", "$18,500", ""], numeric: [1] },
    ),
    table(
      ["September invoices received", "Amount", "Notes"],
      [
        ["Acme Tools, dated 5 Sep", "$12,000", "Terms 2/10, net 30. Matches PO and receipt."],
        ["Bolt Fasteners, dated 12 Sep", "$5,000", "Net 30. Matches."],
        ["Delta Hardware, dated 20 Sep", "$3,300", "PO: 100 units at $30. Received 100 units. Invoice bills 110 units."],
        ["Acme Tools, dated 22 Sep", "$12,000", "Same invoice number and amount as the 5 Sep invoice"],
      ],
    ),
    bullets(
      "Payments made: Acme opening balance on 15 Sep; Acme's 5 Sep invoice on 14 Sep (within the discount period); Coreline in full; Bolt's opening balance on 30 Sep.",
      "Delta agreed to issue a credit note for the over-billed units.",
    ),
    note("Ignore sales tax."),
  ],
  tasks: [
    pick("How should the Acme invoice dated 22 September be handled?", "Reject it as a duplicate of the 5 September invoice", ["Pay it — it's a new invoice", "Pay half", "Approve it and ask questions later"], "Same supplier, invoice number and amount — a classic duplicate."),
    num("At what amount should Delta's invoice be approved once the credit note is received?", 3000, "100 units × $30 = $3,000; the credit note removes the $300 over-billing.", { prefix: "$" }),
    num("How much does Ridgeway pay for Acme's 5 September invoice on 14 September?", 11760, "$12,000 less the 2% discount ($240) = $11,760.", { prefix: "$" }),
    num("What is the approximate annualised cost of NOT taking 2/10, net 30 terms? (%)", 37.2, "2 ÷ 98 × 365 ÷ 20 = 37.2% a year — far more than most borrowing costs.", { suffix: "%", tolerance: 0.2 }),
    pick("Which entry records the discount taken?", "Dr Accounts payable $12,000, Cr Cash $11,760, Cr Purchase discounts $240", ["Dr Accounts payable $11,760, Cr Cash $11,760", "Dr Discount expense $240, Cr Cash $240", "Dr Cash $240, Cr Accounts payable $240"], "Clear the full invoice; the discount reduces costs."),
    num("What is the total cash paid to suppliers in September?", 30260, "Acme $8,000 + Acme $11,760 + Coreline $4,000 + Bolt $6,500 = $30,260.", { prefix: "$" }),
    num("What is accounts payable at 30 September?", 8000, "Bolt's 12 Sep invoice $5,000 + Delta $3,000 (after the credit note) = $8,000.", { prefix: "$" }),
    pick("Which control stopped the Delta over-billing from being paid?", "Three-way matching of PO, receiving record and invoice", ["The payment run date", "Supplier statements", "Bank reconciliation"], "The invoice quantity (110) didn't match the PO and the goods received (100)."),
    pick("Coreline was overdue since August. What's the best practice going forward?", "Pay on the agreed due date through the regular payment run", ["Always pay as soon as invoices arrive", "Wait for a reminder", "Pay only when the supplier calls"], "Paying on time protects supplier relationships without giving up free credit."),
  ],
  references: [
    ref("IRS — Recordkeeping for small businesses", "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping", "invoices and supporting documents"),
    ref("IRS — Publication 538, Accounting Periods and Methods", "https://www.irs.gov/publications/p538"),
  ],
}

export default assignment
