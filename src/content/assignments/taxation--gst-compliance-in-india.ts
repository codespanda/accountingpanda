import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for GST Compliance in India — Saffron Threads'
// December 2026 returns.

const assignment: PracticalAssignment = {
  title: "File Saffron Threads' December GST returns",
  period: "December 2026",
  intro:
    "You're preparing Saffron Threads' GSTR-1 and GSTR-3B for December 2026. Work out the output tax, eligible ITC, set-off and cash payable, then the cost of filing late.",
  context: [
    p("Saffron Threads Pvt Ltd, Jaipur (Rajasthan) — a monthly filer with aggregate turnover of ₹12 crore. Rates are given for this exercise: fabric 5%, packaging services and catering 18%."),
    table(
      ["Outward supplies — December 2026", "Taxable value", "GST"],
      [
        ["Fabric to registered buyers in Rajasthan", "₹40,00,000", "5% CGST + SGST"],
        ["Fabric to registered buyers in other States", "₹60,00,000", "5% IGST"],
        ["Export to Dubai under LUT (zero-rated, no tax paid)", "₹10,00,000", "Nil"],
        ["Credit note — goods returned by a Jaipur buyer", "(₹2,00,000)", "5% CGST + SGST"],
      ],
      { numeric: [1] },
    ),
    table(
      ["Inward supplies — December 2026", "Taxable value", "GST", "In GSTR-2B?"],
      [
        ["Yarn and grey fabric from Gujarat", "₹48,00,000", "5% IGST — ₹2,40,000", "Yes"],
        ["Packaging services, Jaipur", "₹2,00,000", "18% — CGST ₹18,000 + SGST ₹18,000", "Yes"],
        ["Catering for the staff year-end party, Jaipur", "₹50,000", "18% — CGST ₹4,500 + SGST ₹4,500", "Yes"],
        ["Courier services from Delhi", "₹1,00,000", "18% IGST — ₹18,000", "No — supplier hasn't filed GSTR-1"],
      ],
    ),
    bullets(
      "Use IGST credit first against IGST. CGST and SGST credit can't be used against each other.",
      "GSTR-1 is due by 11 January 2027 and GSTR-3B by 20 January 2027.",
      "Interest on late payment is 18% a year on cash tax; the GSTR-3B late fee is ₹50 a day (CGST + SGST).",
    ),
    note("Ignore e-way bills and RCM unless a task asks about them."),
  ],
  tasks: [
    num("What is December's IGST output liability?", 300000, "5% × ₹60,00,000 inter-state sales = ₹3,00,000. Exports under LUT carry no tax.", { prefix: "₹" }),
    num("What is December's CGST output liability after the credit note?", 95000, "5% CGST is 2.5%: 2.5% × ₹40,00,000 = ₹1,00,000, less 2.5% × ₹2,00,000 credit note = ₹5,000. Net ₹95,000.", { prefix: "₹" }),
    pick("How is the staff party catering credit treated?", "Blocked under Section 17(5) — not claimed", ["Claimed in full", "Claimed 50%", "Claimed next month"], "Food and beverages and outdoor catering are blocked credits."),
    pick("Can the ₹18,000 courier IGST be claimed in December's GSTR-3B?", "No — it isn't in GSTR-2B; claim it when the supplier reports it", ["Yes, from the invoice", "Yes, if paid", "Only in GSTR-9"], "ITC is claimed based on GSTR-2B."),
    num("What is the total eligible ITC claimed for December?", 276000, "IGST ₹2,40,000 + CGST ₹18,000 + SGST ₹18,000 = ₹2,76,000.", { prefix: "₹" }),
    num("How much IGST is payable in cash after using IGST credit?", 60000, "₹3,00,000 − ₹2,40,000 = ₹60,000 (no IGST credit left over for CGST/SGST).", { prefix: "₹" }),
    num("How much CGST is payable in cash?", 77000, "₹95,000 − ₹18,000 = ₹77,000.", { prefix: "₹" }),
    num("What is the total cash payable through GSTR-3B for December?", 214000, "IGST ₹60,000 + CGST ₹77,000 + SGST ₹77,000 = ₹2,14,000. Check: ₹4,90,000 liability − ₹2,76,000 ITC.", { prefix: "₹" }),
    num("If GSTR-3B is filed and paid on 25 January 2027 (5 days late), what is the interest?", 528, "₹2,14,000 × 18% × 5 ÷ 365 = ₹527.67 ≈ ₹528.", { prefix: "₹", tolerance: 1 }),
    num("And what is the late fee?", 250, "5 days × ₹50 (₹25 CGST + ₹25 SGST) = ₹250. It can't be paid from ITC.", { prefix: "₹" }),
    pick("Which return is used to report the export and the credit note?", "GSTR-1, due 11 January 2027", ["GSTR-9", "GSTR-2B", "PMT-06"], "GSTR-1 reports outward supplies including exports and credit notes."),
    num("A December consignment travels 450 km. For how many days is its e-way bill valid?", 3, "1 day for every 200 km or part: 450 km → 3 days.", { suffix: "days" }),
  ],
  references: [
    ref("CBIC — GST Acts", "https://cbic-gst.gov.in/gst-acts.html", "CGST Act sections 16, 17(5), 39, 47, 50"),
    ref("GST Portal", "https://www.gst.gov.in", "returns, IMS and e-invoicing"),
    ref("GSTN — News and advisories", "https://services.gst.gov.in/services/advisory/advisoryandreleases", "due dates and portal changes"),
    ref("e-Invoice System", "https://einvoice.gst.gov.in/einvoice/dashboard"),
  ],
}

export default assignment
