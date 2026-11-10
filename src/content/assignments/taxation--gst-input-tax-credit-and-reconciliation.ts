import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for GST Input Tax Credit & Reconciliation — Vardhan
// Healthcare's January 2027 ITC reconciliation.

const assignment: PracticalAssignment = {
  title: "Reconcile Vardhan Healthcare's January ITC",
  period: "January 2027",
  intro:
    "You're reconciling Vardhan Healthcare's input tax credit for January 2027 at its Hyderabad head office. Match books with GSTR-2B, decide IMS actions, remove blocked credits, apply the 180-day rule and distribute shared credit.",
  context: [
    p("Vardhan Healthcare Distributors Pvt Ltd — head office in Hyderabad, branches in Bengaluru and Vijayawada."),
    table(
      ["Hyderabad — January 2027 ITC", "Amount"],
      [
        ["ITC in the purchase register", "₹9,80,000"],
        ["Matched in books and GSTR-2B", "₹9,20,000"],
        ["In books, missing from GSTR-2B — supplier A filed GSTR-1 after the cut-off", "₹40,000"],
        ["In books, missing from GSTR-2B — supplier B hasn't filed", "₹20,000"],
        ["In GSTR-2B, not in books — duplicate of an invoice already recorded", "₹15,000"],
        ["In GSTR-2B, not in books — goods still in transit", "₹20,000"],
      ],
      { numeric: [1] },
    ),
    bullets(
      "Within the matched ₹9,20,000: insurance on directors' cars ₹9,000 and a manager's club membership ₹3,000.",
      "Legal fees of ₹40,000 from an unregistered advocate attract RCM at 18% (CGST + SGST), paid in cash this month.",
      "An invoice dated 20 July 2026 with ITC of ₹27,000 (claimed in July) is still unpaid.",
      "Common head-office services in January carried ITC of ₹1,20,000. Turnover ratio: Hyderabad ₹8 crore, Bengaluru ₹5 crore, Vijayawada ₹2 crore.",
    ),
    note("ITC is claimed in GSTR-3B based on GSTR-2B, after removing ineligible credit."),
  ],
  tasks: [
    num("What is the total ITC in GSTR-2B for January?", 955000, "Matched ₹9,20,000 + duplicate ₹15,000 + in-transit ₹20,000 = ₹9,55,000.", { prefix: "₹" }),
    pick("What IMS action suits the ₹15,000 duplicate?", "Reject, with a remark naming the original invoice", ["Accept", "Keep pending", "Ignore it"], "Rejecting excludes it from GSTR-2B and tells the supplier to correct it."),
    pick("What IMS action suits the ₹20,000 in-transit invoice?", "Keep pending, and claim it when the goods arrive", ["Accept now", "Reject", "Delete"], "Goods must be received before ITC is claimed."),
    num("How much of the matched ITC is blocked?", 12000, "Directors' car insurance ₹9,000 + club membership ₹3,000 = ₹12,000 (Section 17(5)).", { prefix: "₹" }),
    num("What RCM ITC is claimed on the legal fees?", 7200, "18% × ₹40,000 = ₹7,200 (₹3,600 CGST + ₹3,600 SGST), claimed after paying the RCM tax in cash.", { prefix: "₹" }),
    num("What ITC does Hyderabad claim in January's GSTR-3B, before reversals and ISD credit?", 915200, "Matched ₹9,20,000 − blocked ₹12,000 + RCM ₹7,200 = ₹9,15,200.", { prefix: "₹" }),
    pick("Is the 20 July 2026 invoice's ₹27,000 affected in January?", "Yes — 180 days end on 16 January 2027, so reverse ₹27,000 (with interest where applicable)", ["No — reversal is only at year end", "Yes — the ITC is lost forever", "No — 180 days haven't passed"], "Rule 37: reverse if the supplier isn't paid within 180 days of the invoice; re-claim on payment."),
    num("What is net ITC after the 180-day reversal (excluding ISD credit)?", 888200, "₹9,15,200 − ₹27,000 = ₹8,88,200.", { prefix: "₹" }),
    num("How much of the ₹1,20,000 common ITC does the ISD distribute to Bengaluru?", 40000, "₹1,20,000 × 5 ÷ 15 = ₹40,000, as IGST (a different State).", { prefix: "₹" }),
    num("How much goes to Vijayawada?", 16000, "₹1,20,000 × 2 ÷ 15 = ₹16,000.", { prefix: "₹" }),
    pick("By when must ITC on invoices from FY 2026-27 be claimed at the latest?", "30 November 2027, or the GSTR-9 filing date if earlier", ["31 March 2027", "31 December 2028", "No time limit"], "Section 16(4)."),
  ],
  references: [
    ref("CBIC — GST Acts", "https://cbic-gst.gov.in/gst-acts.html", "CGST Act sections 16 and 17(5)"),
    ref("GST Portal — IMS offline tool and guidance", "https://www.gst.gov.in/download/ims"),
    ref("GSTN — News and advisories", "https://services.gst.gov.in/services/advisory/advisoryandreleases", "IMS and ISD changes"),
  ],
}

export default assignment
