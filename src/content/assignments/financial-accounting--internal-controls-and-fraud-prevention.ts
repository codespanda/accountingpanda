import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Internal Controls and Fraud Prevention — reviewing
// Larkspur Foods' May payment run for red flags.

const assignment: PracticalAssignment = {
  title: "Review Larkspur Foods' May payments for red flags",
  period: "May 2026",
  intro:
    "You're on Larkspur Foods' new internal control team. Review May's supplier payments, find the red flags, quantify the exposure and recommend controls.",
  context: [
    p("Before its new controls, bills under $5,000 needed no approval. The employee master file lists Tara (accounts payable clerk) with bank account ending 4471."),
    table(
      ["Date", "Supplier", "Description", "Amount", "Supplier bank account"],
      [
        ["2 May", "FreshFields Produce", "Vegetables — PO 8812", "$18,400", "…1093"],
        ["5 May", "Prime Packaging Solutions", "Packaging consulting", "$4,950", "…4471"],
        ["9 May", "CoolChain Logistics", "Refrigerated transport — PO 8830", "$7,200", "…5521"],
        ["12 May", "Prime Packaging Solutions", "Packaging consulting", "$4,980", "…4471"],
        ["14 May", "OfficeHub", "Stationery", "$2,350", "…7740"],
        ["15 May", "OfficeHub", "Stationery", "$2,350", "…7740"],
        ["20 May", "Prime Packaging Solutions", "Packaging consulting", "$4,890", "…4471"],
        ["26 May", "FreshFields Produce", "Vegetables — PO 8851", "$16,900", "…1093"],
      ],
      { numeric: [3] },
    ),
    bullets(
      "The two OfficeHub payments have the same invoice number, OH-2291.",
      "Nobody at Larkspur can remember receiving anything from Prime Packaging Solutions.",
    ),
    note("Each finding should lead to a control that would prevent or detect it."),
  ],
  tasks: [
    num("How many May payments were just under the $5,000 approval limit (between $4,800 and $4,999)?", 3, "All three Prime Packaging payments: $4,950, $4,980 and $4,890.", { suffix: "payments" }),
    num("What is the total paid to Prime Packaging Solutions in May?", 14820, "$4,950 + $4,980 + $4,890 = $14,820.", { prefix: "$" }),
    pick("What does Prime Packaging's bank account ending 4471 suggest?", "It matches Tara's own bank account — a likely fictitious supplier", ["Nothing — account numbers often match", "A bank error", "A legitimate related supplier"], "A supplier paid into an employee's account is a classic fake-vendor red flag."),
    num("How much was paid twice to OfficeHub?", 2350, "Same invoice OH-2291 paid on 14 and 15 May — $2,350 duplicate.", { prefix: "$" }),
    num("What is the total suspicious amount from May (fake supplier + duplicate)?", 17170, "$14,820 + $2,350 = $17,170.", { prefix: "$" }),
    pick("Which fraud triangle element did the old approval rule give Tara?", "Opportunity", ["Pressure", "Rationalisation", "Motive"], "Bills under $5,000 with no approval created the opportunity."),
    pick("Which control would most directly have PREVENTED the duplicate OfficeHub payment?", "A system block on duplicate invoice numbers for the same supplier", ["A year-end audit", "A whistleblowing hotline", "A monthly bank reconciliation"], "A preventive, automated control stops it before payment."),
    pick("Which DETECTIVE control would have caught the fake supplier quickly?", "A monthly match of supplier bank accounts against employee bank accounts", ["Paying all suppliers faster", "Removing purchase orders", "Letting the clerk approve her own bills"], "Data analytics comparing master files flags matching accounts."),
    pick("What should Larkspur do first now?", "Preserve evidence and escalate to the audit committee and legal advisers — don't confront Tara yet", ["Confront Tara immediately", "Delete the supplier record", "Post about it internally"], "Confronting first risks destroyed evidence and legal claims."),
    num("If testing finds 2 of 25 new suppliers set up without a call-back check, what is the exception rate? (%)", 8, "2 ÷ 25 = 8%.", { suffix: "%", tolerance: 0.1 }),
  ],
  references: [
    ref("COSO — Internal Control guidance", "https://www.coso.org/guidance-on-ic", "Internal Control — Integrated Framework (2013)"),
    ref("ACFE — Fraud resources", "https://www.acfe.com/fraud-resources", "occupational fraud research"),
  ],
}

export default assignment
