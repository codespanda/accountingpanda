import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Employee's Compensation —
// Deccan Stone Works' November 2026 accident cases. All cases are fictional.

const assignment: PracticalAssignment = {
  title: "Settle Deccan's November compensation cases",
  period: "November 2026",
  intro:
    "Five incidents were recorded at Deccan Stone Works in November 2026. ESI isn't implemented in the district, so Deccan pays compensation itself. Decide liability, calculate compensation and plan payment under Chapter VII of the Code on Social Security.",
  context: [
    p("Relevant factors: age 25 — 216.91; age 30 — 207.98; age 35 — 197.06. All wages are within the compensation wage ceiling, and every formula amount exceeds the notified minimum."),
    table(
      ["Employee", "Age", "Monthly wages", "Incident"],
      [
        ["Murali", "35", "₹14,500", "Fatal fall at the quarry face"],
        ["Joseph", "25", "₹14,000", "Crush injury — permanent total disablement"],
        ["Meena", "30", "₹13,500", "Hand injury — 20% loss of earning capacity"],
        ["Babu", "30", "₹12,800", "Fractured arm — off work for 45 days, full recovery"],
        ["Suresh", "25", "₹12,000", "Sprained ankle — off work for 2 days"],
      ],
    ),
    bullets(
      "Funeral expenses: ₹15,000.",
      "Meena's compensation was paid two months after it fell due.",
    ),
    note("Answer under the Code as covered in the course."),
  ],
  tasks: [
    num("What is Murali's death compensation?", 1428685, "50% × ₹14,500 = ₹7,250 × 197.06 = ₹14,28,685.", { prefix: "₹" }),
    num("What total does Deccan deposit for Murali, including funeral expenses?", 1443685, "₹14,28,685 + ₹15,000 = ₹14,43,685.", { prefix: "₹" }),
    pick("How must Murali's compensation be paid?", "Deposited with the competent authority", ["Paid in cash to his brother", "Paid to his bank account", "Held by Deccan until a court case"], "Death compensation must be deposited."),
    num("What is Joseph's permanent total disablement compensation?", 1822044, "60% × ₹14,000 = ₹8,400 × 216.91 = ₹18,22,044.", { prefix: "₹" }),
    num("What is Meena's permanent total amount before applying the percentage?", 1684638, "60% × ₹13,500 = ₹8,100 × 207.98 = ₹16,84,638.", { prefix: "₹" }),
    num("What is Meena's permanent partial disablement compensation?", 336928, "₹16,84,638 × 20% = ₹3,36,928 (rounded).", { prefix: "₹" }),
    num("What interest is due on Meena's compensation at 12% a year for two months?", 6739, "₹3,36,928 × 12% × 2/12 = ₹6,739 (rounded).", { prefix: "₹" }),
    num("What is Babu's half-monthly payment?", 3200, "25% × ₹12,800 = ₹3,200.", { prefix: "₹" }),
    num("What is Babu's total temporary disablement compensation for 45 days?", 9600, "45 days is 28 or more, so paid from day one: three half-months × ₹3,200 = ₹9,600.", { prefix: "₹" }),
    num("What compensation is due to Suresh?", 0, "The injury didn't disable him for more than three days.", { prefix: "₹", tolerance: 0 }),
    num("What is the total compensation for Murali, Joseph, Meena and Babu, excluding funeral expenses and interest?", 3597257, "₹14,28,685 + ₹18,22,044 + ₹3,36,928 + ₹9,600 = ₹35,97,257.", { prefix: "₹" }),
    pick("If Deccan disputes Joseph's assessment, what must it do meanwhile?", "Pay the amount it accepts provisionally and let the competent authority decide", ["Pay nothing", "Pay double", "Ask Joseph to resign"], "Provisional payment."),
  ],
  references: [
    ref("Ministry of Labour and Employment — Labour Codes", "https://labour.gov.in", "Code on Social Security, 2020, Chapter VII"),
    ref("India Code — Code on Social Security, 2020", "https://www.indiacode.nic.in", "Sections 74–76 and the schedules"),
    ref("Employees' State Insurance Corporation", "https://www.esic.gov.in", "Employment injury benefits for ESI-covered employees"),
  ],
}

export default assignment
