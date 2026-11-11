import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Minimum Wages — checking
// Metroline's November 2026 wage register.

const assignment: PracticalAssignment = {
  title: "Check Metroline's November wage register",
  period: "November 2026",
  intro:
    "Neha has prepared Metroline Facility Services' November wage register. Check every line against the central-sphere minimum wages from 1 October 2026, work out overtime and arrears, and confirm the payment rules.",
  context: [
    p("Central-sphere rates from 1 October 2026 (construction, sweeping/cleaning, loading): unskilled Area A ₹840 a day, Area B ₹704; semi-skilled Area A ₹933; skilled Area A ₹1,024; highly skilled Area A ₹1,111. Overtime at twice the ordinary rate; ordinary hourly rate = daily rate ÷ 8."),
    table(
      ["Worker", "Skill / area", "Days worked", "Overtime hours", "Daily rate used in the register"],
      [
        ["Ramesh", "Unskilled / A", "26", "8", "₹840"],
        ["Sunita", "Semi-skilled / A", "26", "0", "₹920"],
        ["Imran", "Skilled / A", "25", "0", "₹1,024"],
        ["Kavita", "Unskilled / B", "26", "4", "₹704"],
        ["Arjun", "Highly skilled / A", "26", "0", "₹1,111"],
      ],
    ),
    bullets(
      "Wages are paid monthly by bank transfer.",
      "Kavita has asked for an advance of ₹12,000 to be recovered in full from her November wages.",
    ),
    note("Answer with the correct amounts under the notification, not the register's figures where they're wrong."),
  ],
  tasks: [
    num("What is Ramesh's correct gross pay for November, including overtime?", 23520, "₹840 × 26 = ₹21,840 + overtime 8 × (₹840 ÷ 8 × 2 = ₹210) = ₹1,680. Total ₹23,520.", { prefix: "₹" }),
    pick("Which worker's daily rate in the register is below the minimum?", "Sunita", ["Ramesh", "Imran", "Kavita"], "Semi-skilled Area A is ₹933 a day, but the register uses ₹920."),
    num("What arrears are due to Sunita for November?", 338, "(₹933 − ₹920) × 26 = ₹338.", { prefix: "₹" }),
    num("What is Imran's minimum wage for November?", 25600, "₹1,024 × 25 = ₹25,600.", { prefix: "₹" }),
    num("What is Kavita's overtime pay?", 704, "₹704 ÷ 8 = ₹88 × 2 = ₹176 × 4 hours = ₹704.", { prefix: "₹" }),
    num("What is Kavita's correct gross pay for November?", 19008, "₹704 × 26 = ₹18,304 + overtime ₹704 = ₹19,008.", { prefix: "₹" }),
    num("What is the most that can be deducted from Kavita's November wages in total?", 9504, "50% × ₹19,008 = ₹9,504 — so the ₹12,000 advance can't be recovered in one month.", { prefix: "₹" }),
    num("What is Arjun's minimum wage for November?", 28886, "₹1,111 × 26 = ₹28,886.", { prefix: "₹" }),
    num("What is the total correct gross pay for all five workers?", 121272, "Ramesh ₹23,520 + Sunita ₹24,258 + Imran ₹25,600 + Kavita ₹19,008 + Arjun ₹28,886 = ₹1,21,272.", { prefix: "₹" }),
    pick("By when must Metroline pay November's wages?", "Before the 7th of December 2026", ["30 November 2026", "15 December 2026", "31 December 2026"], "Monthly wages are due before the expiry of the 7th day of the following month."),
    pick("If Sunita's ₹338 isn't paid, how long does she have to claim it?", "Generally three years", ["One month", "One year", "No limit"], "Claims under the Code are generally filed within three years."),
  ],
  references: [
    ref("Chief Labour Commissioner (Central) — Minimum Wages and VDA orders", "https://clc.gov.in/?page_id=144", "VDA order effective 1 October 2026"),
    ref("Chief Labour Commissioner — Implementation of the Code on Wages, 2019", "https://clc.gov.in/?page_id=86"),
    ref("PRS Legislative Research — Code on Wages (Central) Rules, 2026", "https://prsindia.org/billtrack/code-on-wages-central-rules-2026"),
  ],
}

export default assignment
