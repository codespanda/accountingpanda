import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for TDS Compliance in India — Brightpath Software's
// December 2026 non-salary payments.

const assignment: PracticalAssignment = {
  title: "Deduct and deposit Brightpath's December TDS",
  period: "December 2026",
  intro:
    "You're handling Brightpath Software's non-salary TDS for December 2026. Decide the TDS on each payment, the total to deposit, the deadlines and the cost of being late.",
  context: [
    p("Brightpath Software Solutions Pvt Ltd, Pune. All payees are residents and have given valid PANs unless stated. Use the rates and thresholds taught in the course."),
    table(
      ["Date", "Payment", "Amount"],
      [
        ["1 Dec", "Office rent (building) to the landlord", "₹1,50,000"],
        ["5 Dec", "Audit fee to a CA firm (first payment to them this year)", "₹90,000"],
        ["8 Dec", "Housekeeping contract — a company", "₹40,000"],
        ["12 Dec", "Painter (individual contractor) — single bill", "₹35,000"],
        ["15 Dec", "Freelance designer — no PAN provided — professional fees", "₹60,000"],
        ["18 Dec", "Sales commission to an agent (₹12,000 already paid this year without TDS)", "₹15,000"],
        ["22 Dec", "Cloud server management — technical services", "₹2,00,000"],
      ],
      { numeric: [2] },
    ),
    bullets(
      "Rates: contractors 1% (individual/HUF) or 2% (others); professional fees 10%; technical services 2%; rent of building 10% above ₹50,000 a month; commission 2% above ₹20,000 a year.",
      "No valid PAN: the higher of 20% or twice the normal rate.",
      "All TDS is deducted on 31 December 2026 when the amounts are credited.",
    ),
    note("Interest for late deposit is 1.5% a month or part of a month, from the date of deduction."),
  ],
  tasks: [
    num("TDS on the office rent?", 15000, "10% × ₹1,50,000 = ₹15,000 (above ₹50,000 a month).", { prefix: "₹" }),
    num("TDS on the CA firm's audit fee?", 9000, "10% × ₹90,000 = ₹9,000 — above the ₹50,000 annual threshold.", { prefix: "₹" }),
    num("TDS on the painter's bill?", 350, "Individual contractor 1% × ₹35,000 = ₹350 (single bill above ₹30,000).", { prefix: "₹" }),
    num("TDS on the designer's fees?", 12000, "No PAN: the higher of 20% or twice 10% = 20%. 20% × ₹60,000 = ₹12,000.", { prefix: "₹" }),
    num("TDS on the agent's commission?", 540, "Annual total ₹27,000 crosses ₹20,000, so 2% on the full ₹27,000 = ₹540 is deducted now.", { prefix: "₹" }),
    num("TDS on the technical services?", 4000, "2% × ₹2,00,000 = ₹4,000.", { prefix: "₹" }),
    num("What is the total non-salary TDS to deposit for December?", 41690, "₹15,000 + ₹9,000 + ₹800 (housekeeping 2%) + ₹350 + ₹12,000 + ₹540 + ₹4,000 = ₹41,690.", { prefix: "₹" }),
    pick("By when must December's TDS be deposited?", "7 January 2027", ["31 December 2026", "15 January 2027", "30 April 2027"], "The 7th of the following month (April 30 applies only to March)."),
    num("If it's deposited on 20 February 2027 instead, what is the interest?", 1251, "From 31 December: two months or part months (31 Dec–30 Jan, 31 Jan–20 Feb). 1.5% × 2 × ₹41,690 = ₹1,250.70 ≈ ₹1,251.", { prefix: "₹", tolerance: 1 }),
    pick("In which statement are these deductions reported?", "Form 140, for Q3 (October–December), due 31 January 2027", ["Form 138, due 31 May 2027", "Form 144", "GSTR-1"], "Form 140 (formerly 26Q) covers non-salary TDS on residents."),
    num("If the Q3 Form 140 is filed on 15 February 2027, what is the late filing fee?", 3000, "15 days × ₹200 = ₹3,000 (within the TDS amount).", { prefix: "₹" }),
  ],
  references: [
    ref("Income Tax Department — Income-tax Act, 2025", "https://www.incometaxindia.gov.in/income-tax-act-202511", "sections 392 and 393"),
    ref("Income Tax Department — Income-tax Rules, 2026", "https://www.incometaxindia.gov.in/income-tax-rule-2026"),
    ref("Income Tax Department — Income Tax Forms (2026)", "https://www.incometaxindia.gov.in/income-tax-forms-2026", "Forms 130, 131, 138, 140, 144"),
    ref("Income Tax Department — Tax rates, including TDS rates", "https://www.incometaxindia.gov.in/tax-rates"),
  ],
}

export default assignment
