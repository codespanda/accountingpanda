import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Learn GST in India — a Delhi electronics trader's
// October 2026 GST.

const assignment: PracticalAssignment = {
  title: "Work out Kumar Electronics' October GST",
  period: "October 2026",
  intro:
    "You're the accountant for Kumar Electronics, a registered trader in Delhi. Use October's sales and purchases to work out the tax charged, eligible input tax credit, reverse charge and the cash payable.",
  context: [
    p("Kumar Electronics, New Delhi — a regular monthly GST taxpayer. Assume GST at 18% on everything below, for this exercise."),
    table(
      ["Sales — October 2026", "Taxable value"],
      [
        ["To customers in Delhi (intra-state)", "₹8,00,000"],
        ["To a dealer in Haryana (inter-state)", "₹3,00,000"],
      ],
      { numeric: [1] },
    ),
    table(
      ["Purchases and expenses — October 2026", "Taxable value", "Notes"],
      [
        ["Stock from a Delhi wholesaler", "₹5,00,000", "Intra-state; in GSTR-2B"],
        ["Stock from a supplier in Uttar Pradesh", "₹2,00,000", "Inter-state; in GSTR-2B"],
        ["Food for the staff Diwali party, Delhi", "₹20,000", "Intra-state"],
        ["Legal fees to an advocate, Delhi", "₹30,000", "Reverse charge applies"],
      ],
      { numeric: [1] },
    ),
    bullets(
      "Intra-state: CGST 9% + SGST 9%. Inter-state: IGST 18%.",
      "Use IGST credit first. CGST and SGST credit can't be used against each other.",
      "Tax under reverse charge must be paid in cash; its ITC can then be claimed in the same return.",
    ),
    note("Food and beverages for staff are blocked credits."),
  ],
  tasks: [
    num("What CGST is charged on October sales?", 72000, "9% × ₹8,00,000 = ₹72,000.", { prefix: "₹" }),
    num("What IGST is charged on the Haryana sale?", 54000, "18% × ₹3,00,000 = ₹54,000.", { prefix: "₹" }),
    num("What is the total invoice value of the Haryana sale?", 354000, "₹3,00,000 + ₹54,000 IGST = ₹3,54,000.", { prefix: "₹" }),
    pick("Can Kumar Electronics claim ITC on the party food?", "No — it's a blocked credit", ["Yes, in full", "Yes, half", "Only in March"], "Section 17(5) blocks food and beverages, with limited exceptions."),
    num("What reverse charge tax (CGST + SGST) is payable on the legal fees?", 5400, "18% × ₹30,000 = ₹5,400 (₹2,700 CGST + ₹2,700 SGST), paid in cash.", { prefix: "₹" }),
    num("What is total eligible CGST credit for October (including RCM credit)?", 47700, "Delhi stock 9% × ₹5,00,000 = ₹45,000 + RCM ₹2,700 = ₹47,700.", { prefix: "₹" }),
    num("What is total eligible ITC (IGST + CGST + SGST)?", 131400, "IGST ₹36,000 + CGST ₹47,700 + SGST ₹47,700 = ₹1,31,400.", { prefix: "₹" }),
    num("How much IGST is payable in cash after set-off?", 18000, "₹54,000 − ₹36,000 IGST credit = ₹18,000.", { prefix: "₹" }),
    num("How much CGST is payable in cash on outward supplies after set-off?", 24300, "₹72,000 − ₹47,700 = ₹24,300.", { prefix: "₹" }),
    num("What is the total cash payable for October, including the reverse charge tax?", 72000, "Outward: IGST ₹18,000 + CGST ₹24,300 + SGST ₹24,300 = ₹66,600, plus RCM ₹5,400 = ₹72,000.", { prefix: "₹" }),
    pick("Which returns does Kumar Electronics file for October, and by when?", "GSTR-1 by 11 November and GSTR-3B by 20 November", ["GSTR-9 by 31 December", "GSTR-3B only, by 7 November", "GSTR-1 by 20 November and GSTR-3B by 11 November"], "Monthly filers file GSTR-1 by the 11th and GSTR-3B by the 20th of the following month."),
  ],
  references: [
    ref("CBIC — GST Acts", "https://cbic-gst.gov.in/gst-acts.html", "CGST and IGST Acts"),
    ref("CBIC — GST home", "https://cbic-gst.gov.in", "rates, notifications and circulars"),
    ref("GST Portal", "https://www.gst.gov.in"),
  ],
}

export default assignment
