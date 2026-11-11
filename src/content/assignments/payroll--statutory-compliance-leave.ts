import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Leave — Vasant Foods'
// November 2026 leave review ahead of the year-end.

const assignment: PracticalAssignment = {
  title: "Prepare Vasant's year-end leave review",
  period: "November 2026",
  intro:
    "Kiran is preparing Vasant Foods' leave balances in November 2026 ahead of the year-end. Calculate entitlements, year-end carry-forward and encashment, and November payroll leave items for the Vapi factory (OSH Code) and the Pune office (Maharashtra Shops Act).",
  context: [
    p("The factory uses section 32 of the OSH Code; the Pune office uses the Maharashtra Shops and Establishments Act, 2017. Vasant uses monthly salary ÷ 26 for encashment and days in the month for loss of pay."),
    table(
      ["Employee", "Location", "Pay", "Days worked in 2025", "Expected balance at 31 Dec 2026"],
      [
        ["Mohan", "Factory", "₹750 a day", "232", "41 days (none refused)"],
        ["Farida", "Factory", "₹720 a day", "176 (+ 10 lay-off days)", "—"],
        ["Vikas", "Factory", "₹680 a day", "250", "36 days (9 refused)"],
        ["Neelam", "Pune office", "₹31,200 a month", "245", "—"],
      ],
    ),
    bullets(
      "Neelam took 3 days' leave without pay in November 2026 (30 days).",
      "Sanjay, a factory worker on ₹700 a day, resigns on 30 November with 22 days' leave.",
    ),
    note("Answer under the OSH Code and the Maharashtra Act as covered in the course."),
  ],
  tasks: [
    num("How many days of annual leave did Mohan earn for 2026?", 11, "232 ÷ 20 = 11 complete days.", { suffix: "days", tolerance: 0 }),
    pick("Is Farida eligible for annual leave in 2026?", "Yes — 176 days worked plus 10 lay-off days is at least 180", ["No — she worked under 180 days", "Only half", "Only if she asks"], "Lay-off days count towards eligibility."),
    num("How many days of annual leave does Farida earn?", 8, "Leave accrues only on days worked: 176 ÷ 20 = 8 complete days.", { suffix: "days", tolerance: 0 }),
    num("How many of Mohan's days will be encashed at year-end?", 11, "41 − 30 = 11 days.", { suffix: "days", tolerance: 0 }),
    num("What is Mohan's year-end encashment?", 8250, "11 × ₹750 = ₹8,250.", { prefix: "₹" }),
    num("How many days does Vikas carry forward into 2027?", 36, "9 refused days carry forward without limit, and the other 27 are within 30 — all 36 carry forward.", { suffix: "days", tolerance: 0 }),
    num("How many days of earned leave does Neelam get for 2026?", 12, "245 ≥ 240, so 245 ÷ 20 = 12 complete days.", { suffix: "days", tolerance: 0 }),
    num("How many casual leave days does Neelam get in 2026?", 8, "Eight, credited quarterly.", { suffix: "days", tolerance: 0 }),
    num("What is Neelam's November loss-of-pay deduction?", 3120, "₹31,200 ÷ 30 = ₹1,040 × 3 = ₹3,120.", { prefix: "₹" }),
    num("What leave encashment goes in Sanjay's final settlement?", 15400, "22 × ₹700 = ₹15,400.", { prefix: "₹" }),
    pick("What is the maximum earned leave Neelam can accumulate?", "45 days", ["30 days", "60 days", "No limit"], "Maharashtra Act."),
    pick("How should year-end encashment appear on payslips?", "As a separate earnings head", ["Inside basic pay", "As a deduction", "Not at all"], "Clear records."),
  ],
  references: [
    ref("DGFASLI — Occupational Safety, Health and Working Conditions Code, 2020 (official text)", "https://dgfasli.gov.in/public/Admin/Cms/AllPdf/650059fbb8f1a9.98699174.pdf", "Section 32 — annual leave with wages"),
    ref("Maharashtra Law and Judiciary Department — Shops and Establishments Act, 2017", "https://lj.maharashtra.gov.in", "Section 18 — leave"),
    ref("Ministry of Labour and Employment — Labour Codes", "https://labour.gov.in"),
  ],
}

export default assignment
