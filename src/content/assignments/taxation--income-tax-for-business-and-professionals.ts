import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Income Tax for Business & Professionals — closing
// Sharma Electricals' tax year in March 2027.

const assignment: PracticalAssignment = {
  title: "Close Sharma Electricals' tax year in March 2027",
  period: "March 2027",
  intro:
    "It's March 2027. Add March's transactions to Ravi Sharma's year-to-date figures, check his presumptive eligibility, work out his tax and the advance tax still due, and plan his return.",
  context: [
    p("Ravi Sharma (resident individual) runs Sharma Electricals, a wholesale trader in Lucknow. He uses the presumptive scheme for businesses and the new tax regime."),
    table(
      ["Receipts", "April 2026 – February 2027", "March 2027"],
      [
        ["Digital (bank transfer, UPI, cards)", "₹2,30,00,000", "₹22,00,000"],
        ["Cash", "₹9,00,000", "₹1,00,000"],
      ],
      { numeric: [1, 2] },
    ),
    bullets(
      "March also includes a ₹25,000 cash payment to a supplier and ₹40,000 of shop repairs.",
      "Other income for the year: FD interest ₹50,000, with TDS of ₹5,000.",
      "Advance tax paid so far: nil. Presumptive taxpayers may pay all advance tax by 15 March.",
      "Deemed profit: 6% of digital receipts and 8% of other receipts. Turnover limit ₹2 crore, or ₹3 crore if cash receipts are within 5%.",
    ),
    note("New regime slabs: nil to ₹4 lakh, 5%, 10%, 15%, 20%, 25%, 30%. Cess 4%. No standard deduction for business income."),
  ],
  tasks: [
    num("What is Ravi's total turnover for tax year 2026-27?", 26200000, "Digital ₹2,52,00,000 + cash ₹10,00,000 = ₹2,62,00,000.", { prefix: "₹" }),
    num("What percentage of turnover is received in cash? (one decimal place)", 3.8, "₹10,00,000 ÷ ₹2,62,00,000 = 3.8%.", { suffix: "%", tolerance: 0.1 }),
    pick("Can Ravi use the presumptive scheme for 2026-27?", "Yes — turnover is under ₹3 crore and cash receipts are within 5%", ["No — turnover is above ₹2 crore", "No — he paid a supplier in cash", "Only if he gets an audit"], "The higher ₹3 crore limit applies because cash receipts are within 5%."),
    num("What is his deemed business profit?", 1592000, "6% × ₹2,52,00,000 = ₹15,12,000 + 8% × ₹10,00,000 = ₹80,000 → ₹15,92,000.", { prefix: "₹" }),
    pick("How are the ₹25,000 cash payment and ₹40,000 repairs treated?", "Ignored — deemed profit already covers all business expenses", ["Deducted from deemed profit", "Added back to profit", "Claimed as depreciation"], "No further deductions are allowed under the presumptive scheme."),
    num("What is Ravi's total income?", 1642000, "Deemed profit ₹15,92,000 + FD interest ₹50,000 = ₹16,42,000.", { prefix: "₹" }),
    num("What is his tax including cess?", 133536, "₹20,000 + ₹40,000 + ₹60,000 + 20% × ₹42,000 (₹8,400) = ₹1,28,400; cess ₹5,136; total ₹1,33,536.", { prefix: "₹" }),
    num("How much advance tax must he pay by 15 March 2027?", 128536, "Tax ₹1,33,536 − TDS ₹5,000 = ₹1,28,536, in one instalment as a presumptive taxpayer.", { prefix: "₹" }),
    pick("Does Ravi need a tax audit?", "No — he declares the presumptive profit", ["Yes — turnover is above ₹1 crore", "Yes — he paid cash", "Only if he has staff"], "No audit is needed when deemed profit (or more) is declared."),
    pick("Which return form and due date apply?", "ITR-4, by 31 August 2027", ["ITR-3, by 31 October 2027", "ITR-1, by 31 July 2027", "ITR-5, by 30 November 2027"], "Presumptive income for an individual with total income up to ₹50 lakh; non-audit business due date."),
    num("His friend Dr Rao has professional receipts of ₹72 lakh, 3% in cash, under the presumptive scheme. What is her presumptive income?", 3600000, "Cash is within 5%, so the ₹75 lakh limit applies. 50% × ₹72,00,000 = ₹36,00,000.", { prefix: "₹" }),
  ],
  references: [
    ref("Income Tax Department — Income-tax Act, 2025", "https://www.incometaxindia.gov.in/income-tax-act-202511", "sections 58, 62 and 63"),
    ref("Income Tax Department — Finance Act, 2026", "https://www.incometaxindia.gov.in/documents/d/guest/finance-act-2026-pdf-1"),
    ref("Income Tax e-filing — Individuals with business or professional income", "https://www.incometax.gov.in/iec/foportal/help/individual-business-profession"),
    ref("Income Tax Department — Tax rates", "https://www.incometaxindia.gov.in/tax-rates"),
  ],
}

export default assignment
