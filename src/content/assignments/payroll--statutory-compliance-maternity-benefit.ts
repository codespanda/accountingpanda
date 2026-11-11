import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Maternity Benefit — Nilgiri
// Software Solutions' maternity cases in November 2026.

const assignment: PracticalAssignment = {
  title: "Process Nilgiri's November maternity cases",
  period: "November 2026",
  intro:
    "Rekha has four maternity-related cases at Nilgiri Software Solutions (64 employees, Bengaluru) in November 2026. Decide eligibility, calculate leave and pay, and plan the support and records under Chapter VI of the Code on Social Security.",
  context: [
    p("Nilgiri doesn't provide free pre-natal confinement or post-natal care. The medical bonus is ₹3,500."),
    table(
      ["Employee", "Case", "Days worked in the 12 months before expected delivery", "Wages and days worked in the three months before leave", "ESI-covered?"],
      [
        ["Anjali", "First child, leave from 9 November", "230", "₹1,35,000 for 75 days", "No"],
        ["Swati", "Third child; two surviving children", "250", "₹2,16,000 for 72 days", "No"],
        ["Nandini", "Joined in September; baby due 20 November", "58", "—", "No"],
        ["Pallavi", "First child", "200", "—", "Yes, wages ₹19,000"],
      ],
    ),
    bullets(
      "Anjali's baby is expected on 4 January 2027.",
      "A manager wants to cancel Swati's annual increment because she'll be on leave.",
    ),
    note("Answer under the Code as covered in the course."),
  ],
  tasks: [
    num("What is Anjali's average daily wage?", 1800, "₹1,35,000 ÷ 75 days = ₹1,800.", { prefix: "₹" }),
    num("How many days of maternity leave is Anjali entitled to?", 182, "26 weeks × 7 = 182 days.", { suffix: "days", tolerance: 0 }),
    num("What is Anjali's maternity benefit, excluding the medical bonus?", 327600, "₹1,800 × 182 = ₹3,27,600.", { prefix: "₹" }),
    num("What is Anjali's total including the medical bonus?", 331100, "₹3,27,600 + ₹3,500 = ₹3,31,100.", { prefix: "₹" }),
    num("How many weeks before delivery is the most Anjali could start her leave?", 8, "Up to eight weeks before the expected delivery.", { suffix: "weeks", tolerance: 0 }),
    num("What is Swati's average daily wage?", 3000, "₹2,16,000 ÷ 72 = ₹3,000.", { prefix: "₹" }),
    num("What is Swati's maternity benefit plus medical bonus?", 255500, "12 weeks (two surviving children) = 84 days × ₹3,000 = ₹2,52,000 + ₹3,500 = ₹2,55,500.", { prefix: "₹" }),
    pick("Is Nandini entitled to maternity benefit?", "No — she has worked fewer than 80 days", ["Yes, 26 weeks", "Yes, 12 weeks", "Yes, but only the medical bonus"], "58 days is below the 80-day requirement."),
    pick("Who pays Pallavi's maternity benefit?", "ESIC", ["Nilgiri", "The state government", "No one"], "She's covered by ESI."),
    pick("What should Rekha say about cancelling Swati's increment?", "It can't be cancelled — that would disadvantage her because of maternity leave", ["Cancel it", "Halve it", "Delay it by a year"], "Service conditions can't be varied to her disadvantage."),
    pick("Does Nilgiri need a crèche?", "Yes — it has 50 or more employees", ["No — only factories need one", "Only if a mother asks", "Only above 100 employees"], "64 employees."),
    pick("When must the balance of Anjali's benefit be paid?", "Within 48 hours of proof of delivery", ["When she returns to work", "At the end of the financial year", "Within 30 days"], "The pre-delivery part is paid in advance."),
  ],
  references: [
    ref("Ministry of Labour and Employment — Labour Codes", "https://labour.gov.in", "Code on Social Security, 2020, Chapter VI"),
    ref("Gazette of India — Code on Social Security (Central) Rules, 2026", "https://egazette.gov.in", "Notified 8 May 2026"),
    ref("Employees' State Insurance Corporation — Benefits", "https://www.esic.gov.in", "Maternity benefit for insured women"),
  ],
}

export default assignment
