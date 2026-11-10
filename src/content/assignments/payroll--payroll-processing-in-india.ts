import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Payroll Processing in India — Neelgiri Foods'
// November 2026 payroll for four employees, including a joiner and LOP.

const assignment: PracticalAssignment = {
  title: "Run Neelgiri Foods' November payroll",
  period: "November 2026 (30 days)",
  intro:
    "You're running Neelgiri Foods' payroll for November 2026. Work out gross pay, PF, ESI, professional tax, TDS and net pay for four employees, then the totals Neelgiri must pay and file.",
  context: [
    p("Neelgiri Foods Pvt Ltd, Pune (Maharashtra). PF is restricted to the ₹25,000 wage ceiling. ESI is calculated on Code wages (excluding HRA). Maharashtra professional tax applies. All employees chose the new tax regime."),
    table(
      ["Employee", "Gender", "Basic + DA", "HRA", "Special allowance", "Monthly gross"],
      [
        ["Asha", "F", "₹10,000", "₹4,000", "₹5,000", "₹19,000"],
        ["Rahul", "M", "₹15,000", "₹6,000", "₹9,000", "₹30,000"],
        ["Meera", "F", "₹60,000", "₹30,000", "₹30,000", "₹1,20,000"],
        ["Vikas (new)", "M", "₹12,000", "₹4,800", "₹7,200", "₹24,000"],
      ],
      { numeric: [2, 3, 4, 5] },
    ),
    bullets(
      "Rahul took 2 days of loss of pay (LOP) in November. Neelgiri prorates pay and PF wages on calendar days.",
      "Vikas joined on 16 November 2026 (15 days in November). He had no earlier PF or ESI membership.",
      "Meera's wages have been above ₹25,000 since before 17 September 2026, so she is not an EPS member.",
      "Meera's monthly TDS under the new regime is ₹7,345 (annual tax ₹88,140). Nobody else has taxable income.",
      "PF wages = basic + DA + special allowance (HRA is excluded and within the 50% limit). EDLI and admin charges are 0.5% each.",
    ),
    note("Round PF and EPS to the nearest rupee. Round each ESI share up to the next rupee."),
  ],
  tasks: [
    num("What is Rahul's gross pay for November after 2 days' LOP?", 28000, "₹30,000 − (₹30,000 × 2 ÷ 30) = ₹28,000.", { prefix: "₹" }),
    num("What is Rahul's employee PF contribution for November?", 2688, "PF wages are prorated too: ₹24,000 × 28 ÷ 30 = ₹22,400; 12% = ₹2,688.", { prefix: "₹" }),
    num("What is Vikas's gross pay for November?", 12000, "₹24,000 × 15 ÷ 30 = ₹12,000.", { prefix: "₹" }),
    pick("Is Vikas covered by ESI?", "Yes — his Code wages (₹19,200 a month) are within ₹21,000", ["No — his gross of ₹24,000 is above ₹21,000", "No — new joiners wait six months", "Only if he applies"], "ESI coverage uses the Code's definition of wages. His wages excluding HRA are ₹12,000 + ₹7,200 = ₹19,200 a month — within the ₹21,000 ceiling."),
    num("What is Vikas's employee ESI contribution for November?", 72, "ESI wages for November: ₹19,200 × 15 ÷ 30 = ₹9,600. 0.75% = ₹72.", { prefix: "₹" }),
    num("What is Asha's employer ESI contribution?", 488, "ESI wages ₹15,000 (basic + special allowance). 3.25% = ₹487.50, rounded up to ₹488.", { prefix: "₹" }),
    pick("How is Meera's employer PF of ₹3,000 split?", "₹3,000 to EPF and nothing to EPS", ["₹2,083 to EPS and ₹917 to EPF", "₹1,250 to EPS and ₹1,750 to EPF", "Nothing — she's above the ceiling"], "Per EPFO's wage-ceiling FAQs, EPS membership is only for employees whose wages didn't exceed ₹25,000 on joining or on 17 September 2026. The employer's whole 12% goes to her EPF account."),
    num("What is the total professional tax deducted in November?", 600, "Asha nil (woman, gross ≤ ₹25,000); Rahul ₹200; Meera ₹200 (woman above ₹25,000); Vikas ₹200 (man, gross ₹12,000 above ₹10,000). Total ₹600.", { prefix: "₹" }),
    num("What is the total net pay transferred to the four employees?", 162230, "Asha ₹17,087 + Rahul ₹25,112 + Meera ₹1,09,455 + Vikas ₹10,576 = ₹1,62,230. Check: gross ₹1,79,000 − PF ₹8,640 − ESI ₹185 − PT ₹600 − TDS ₹7,345.", { prefix: "₹" }),
    num("What is the total PF remittance for November (both shares, EDLI and admin charges)?", 18000, "Employee PF ₹8,640 + employer PF ₹8,640 + 1% of PF wages ₹72,000 (₹720) = ₹18,000.", { prefix: "₹" }),
    num("What is the total ESI payable for November?", 985, "Employee: Asha ₹113 + Vikas ₹72 = ₹185. Employer: ₹488 + ₹312 = ₹800. Total ₹985.", { prefix: "₹" }),
    pick("By when must Neelgiri deposit November's TDS and pay November's salaries at the latest?", "TDS by 7 December; salaries by 7 December", ["TDS by 15 December; salaries by 30 November", "Both by 31 December", "TDS by 30 April; salaries by 15 December"], "Salary TDS is due by the 7th of the following month, and monthly wages must be paid by the 7th of the following month under the Code on Wages."),
    num("What is Neelgiri's total employer cost for these four employees in November (gross + employer PF + EDLI and admin + employer ESI)?", 189160, "₹1,79,000 + ₹8,640 + ₹720 + ₹800 = ₹1,89,160.", { prefix: "₹" }),
  ],
  references: [
    ref("EPFO — FAQs on the revision of the wage ceiling to ₹25,000 (September 2026)", "https://pmvbry-cdn.epfindia.gov.in/wp-content/uploads/2026/09/EPFO_Wage_Ceiling_FAQs.pdf", "ceiling, EPS membership, contribution split"),
    ref("EPFO — Wage ceiling circular, 28 September 2026", "https://www.epfo.gov.in/notices/wage-ceiling-circular-28-09-2026/"),
    ref("ESIC — Contribution rates", "https://www.esic.gov.in/contribution", "0.75% / 3.25% and the ₹176 daily-wage exemption"),
    ref("Maharashtra GST Department — Profession tax rate schedules", "https://www.mahagst.gov.in/en/profession-tax-and-other-rate-schedule"),
    ref("Income Tax Department — Income-tax Act, 2025", "https://www.incometaxindia.gov.in/income-tax-act-202511"),
    ref("Chief Labour Commissioner — Codes, Acts and Rules", "https://clc.gov.in/?page_id=67", "Code on Wages and Code on Social Security"),
  ],
}

export default assignment
