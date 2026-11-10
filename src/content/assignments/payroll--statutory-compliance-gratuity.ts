import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Gratuity — Orchid
// Hospitality's March 2027 leavers.

const assignment: PracticalAssignment = {
  title: "Settle gratuity for Orchid Hospitality's March leavers",
  period: "March 2027",
  intro:
    "Five employees leave Orchid Hospitality at the end of March 2027. Decide who is eligible, calculate gratuity under the Code's wages, apply the ceiling and tax rules, and set the payment deadline.",
  context: [
    p("Orchid Hospitality Pvt Ltd, Goa. Gratuity = last wages × 15 ÷ 26 × completed years (a part-year over six months counts as a full year). Statutory maximum ₹20 lakh."),
    table(
      ["Employee", "Last day", "Service", "Last monthly pay", "How employment ends"],
      [
        ["Lucia", "31 March 2027", "5 years 7 months", "Basic + DA ₹16,000; special ₹4,000; HRA ₹20,000; conveyance ₹12,000", "Resigns"],
        ["Peter", "31 March 2027", "10 years 8 months", "Code wages ₹39,000 (exclusions within 50%)", "Resigns"],
        ["Ana", "31 March 2027", "1 year 6 months (fixed-term)", "Code wages ₹16,000", "Contract ends"],
        ["Nikhil", "31 March 2027", "20 years", "Code wages ₹52,000; basic + DA ₹40,000", "Retires"],
        ["Rosa", "31 March 2027", "4 years 11 months", "Code wages ₹22,000", "Resigns"],
      ],
    ),
    bullets(
      "Orchid's policy pays fixed-term employees gratuity in proportion to service (1 year 6 months = 1.5 years).",
      "For the tax exemption, “salary” means basic + DA. The tax-free limit is ₹20 lakh; nobody has had earlier exemptions.",
      "Gratuity must be paid within 30 days of becoming payable.",
    ),
    note("Round gratuity to the nearest rupee."),
  ],
  tasks: [
    num("What are Lucia's wages for gratuity under the Code?", 26000, "Total ₹52,000. Exclusions (HRA + conveyance) ₹32,000 exceed 50% (₹26,000) by ₹6,000, which is added back: ₹16,000 + ₹4,000 + ₹6,000 = ₹26,000.", { prefix: "₹" }),
    num("How many years of service count for Lucia?", 6, "5 years 7 months — more than six months, so it rounds up to 6.", { suffix: "years" }),
    num("What is Lucia's gratuity?", 90000, "₹26,000 × 15 ÷ 26 × 6 = ₹90,000.", { prefix: "₹" }),
    num("What is Peter's gratuity?", 247500, "11 years (8 months rounds up): ₹39,000 × 15 ÷ 26 × 11 = ₹2,47,500.", { prefix: "₹" }),
    num("What is Ana's gratuity?", 13846, "Fixed-term, eligible after one year: ₹16,000 × 15 ÷ 26 × 1.5 = ₹13,846.", { prefix: "₹" }),
    pick("Is Rosa entitled to gratuity?", "No — 4 years 11 months is under five years of continuous service", ["Yes — 11 months rounds up to 5 years", "Yes — everyone gets gratuity", "Only half"], "The rounding rule applies to calculation, not eligibility. She resigned before five years."),
    num("What is Nikhil's gratuity?", 600000, "₹52,000 × 15 ÷ 26 × 20 = ₹6,00,000 — below the ₹20 lakh maximum.", { prefix: "₹" }),
    num("How much of Nikhil's gratuity is tax-exempt?", 461538, "Least of: received ₹6,00,000; ₹20,00,000; ₹40,000 × 15 ÷ 26 × 20 = ₹4,61,538. Exempt ₹4,61,538.", { prefix: "₹" }),
    num("How much of Nikhil's gratuity is taxable as salary?", 138462, "₹6,00,000 − ₹4,61,538 = ₹1,38,462 — include it in his March TDS.", { prefix: "₹" }),
    num("What is the total gratuity Orchid must pay to its March leavers?", 951346, "Lucia ₹90,000 + Peter ₹2,47,500 + Ana ₹13,846 + Nikhil ₹6,00,000 = ₹9,51,346 (Rosa nil).", { prefix: "₹" }),
    pick("By when must Orchid pay these gratuities?", "Within 30 days — by 30 April 2027", ["By 31 March 2028", "Within 7 days", "Whenever the fund pays"], "Gratuity is payable within 30 days of becoming payable; interest applies to late payment."),
  ],
  references: [
    ref("Chief Labour Commissioner — Codes, Acts and Rules", "https://clc.gov.in/?page_id=67", "Code on Social Security, 2020 (Chapter V — gratuity)"),
    ref("Chief Labour Commissioner — Implementation of the Social Security Code, 2020", "https://clc.gov.in/?page_id=82"),
    ref("Income Tax Department — Income-tax Act, 2025", "https://www.incometaxindia.gov.in/income-tax-act-202511", "gratuity exemption"),
  ],
}

export default assignment
