import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Income Tax for Salaried Employees — Arjun's
// return for tax year 2026-27, prepared from his year-end documents.

const assignment: PracticalAssignment = {
  title: "Prepare Arjun's 2026-27 income tax return",
  period: "Tax year 2026-27 (filed July 2027)",
  intro:
    "It's July 2027. Use Arjun's Form 130, AIS and investment records to compare both regimes, work out the balance tax and decide how and when to file.",
  context: [
    p("Arjun Mehta, 29, resident, software tester in Bengaluru. He told his employer he was in the new regime."),
    table(
      ["From Form 130, Form 168 and AIS", "Amount"],
      [
        ["Gross salary (basic ₹5,00,000; HRA ₹2,40,000; special allowance ₹6,20,000; bonus ₹80,000)", "₹14,40,000"],
        ["Salary TDS by the employer", "₹88,140"],
        ["Fixed deposit interest", "₹12,000"],
        ["TDS on FD interest", "₹1,200"],
        ["Savings bank interest (shown in AIS)", "₹4,000"],
      ],
      { numeric: [1] },
    ),
    bullets(
      "Rent paid: ₹25,000 a month in Bengaluru (now a 50% HRA city).",
      "Old regime deductions available: investments ₹1,50,000; health insurance ₹25,000; savings interest deduction (up to ₹10,000) ₹4,000.",
      "New regime: standard deduction ₹75,000; slabs nil to ₹4 lakh, 5%, 10%, 15%, 20%, 25%, 30%. Old regime: standard deduction ₹50,000; nil to ₹2.5 lakh, 5%, 20%, 30%. Cess 4%.",
    ),
    note("No other income. Round tax to the nearest rupee."),
  ],
  tasks: [
    num("What is Arjun's total income under the new regime?", 1381000, "₹14,40,000 − ₹75,000 + FD interest ₹12,000 + savings interest ₹4,000 = ₹13,81,000.", { prefix: "₹" }),
    num("What is his tax under the new regime, including cess?", 90636, "₹20,000 + ₹40,000 + 15% × ₹1,81,000 (₹27,150) = ₹87,150; cess ₹3,486; total ₹90,636.", { prefix: "₹" }),
    num("What is his HRA exemption under the old regime?", 240000, "Least of: HRA ₹2,40,000; rent ₹3,00,000 − 10% of basic ₹50,000 = ₹2,50,000; 50% of basic ₹2,50,000. Exempt ₹2,40,000.", { prefix: "₹" }),
    num("What is his total income under the old regime?", 987000, "₹14,56,000 gross total (salary + interest) − ₹50,000 − HRA ₹2,40,000 − ₹1,50,000 − ₹25,000 − ₹4,000 = ₹9,87,000.", { prefix: "₹" }),
    num("What is his tax under the old regime, including cess?", 114296, "₹12,500 + 20% × ₹4,87,000 (₹97,400) = ₹1,09,900; cess ₹4,396; total ₹1,14,296.", { prefix: "₹" }),
    pick("Which regime should Arjun choose for 2026-27?", "New regime — ₹23,660 less tax", ["Old regime — it has more deductions", "Either — the tax is the same", "Neither — he has no tax"], "₹1,14,296 − ₹90,636 = ₹23,660."),
    num("How much self-assessment tax must Arjun pay before filing?", 1296, "₹90,636 − TDS (₹88,140 + ₹1,200) = ₹1,296.", { prefix: "₹" }),
    pick("Which return form should he use?", "ITR-1 (Sahaj)", ["ITR-3", "ITR-4", "Form 130"], "Resident with salary and interest, income under ₹50 lakh."),
    pick("By when should he file to avoid a late fee?", "31 July 2027", ["31 March 2027", "15 June 2027", "31 December 2027"], "The due date for salaried individuals without audit."),
    num("If he files on 15 September 2027 instead, what late fee applies?", 5000, "Total income above ₹5 lakh — ₹5,000.", { prefix: "₹" }),
    num("His colleague's taxable income under the new regime is ₹12,05,000. What tax is payable before cess?", 5000, "Slab tax is ₹60,750, but marginal relief limits it to the ₹5,000 by which income exceeds ₹12 lakh.", { prefix: "₹" }),
  ],
  references: [
    ref("Income Tax Department — Tax rates", "https://www.incometaxindia.gov.in/tax-rates", "slabs and rebate"),
    ref("Income Tax Department — Finance Act, 2026", "https://www.incometaxindia.gov.in/documents/d/guest/finance-act-2026-pdf-1"),
    ref("Income Tax Department — Income from salary", "https://www.incometaxindia.gov.in/income-from-salary"),
    ref("Income Tax e-filing portal", "https://www.incometax.gov.in/iec/foportal/", "filing, e-verification and refunds"),
  ],
}

export default assignment
