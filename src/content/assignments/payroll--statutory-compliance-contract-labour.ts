import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Contract Labour — Sahyadri
// Auto Components' November 2026 contractor compliance review.

const assignment: PracticalAssignment = {
  title: "Run Sahyadri's November contractor review",
  period: "November 2026",
  intro:
    "Anand is running Sahyadri Auto Components' monthly contractor compliance review for November 2026. Check applicability, licences, core activities, wages and contributions before releasing invoices.",
  context: [
    p("Minimum wage used for housekeeping and security: ₹15,200 a month. Sahyadri retains 10% of each invoice until compliance proof is received."),
    table(
      ["Contractor", "Workers at Sahyadri", "Total workforce", "Monthly wage paid", "Workers on ESI challan", "November invoice"],
      [
        ["SecureLine (security)", "22", "320", "₹15,500", "22", "₹4,40,000"],
        ["Sparkle (housekeeping)", "18", "40", "₹14,800", "15", "₹3,20,000"],
        ["BuildRight (construction)", "30", "45", "₹17,000", "30", "₹6,00,000"],
        ["QuickPack (packing finished parts)", "8", "60", "₹15,200", "8", "₹1,40,000"],
      ],
    ),
    bullets(
      "BuildRight hasn't paid November wages and says it will pay in January.",
      "QuickPack's work is packing finished brake parts on the production line every day.",
    ),
    note("Answer under the OSH Code and Code on Wages as covered in the course."),
  ],
  tasks: [
    num("How many contract workers are at Sahyadri in November?", 78, "22 + 18 + 30 + 8 = 78.", { tolerance: 0 }),
    pick("Do the contract labour provisions apply to Sahyadri?", "Yes — 50 or more contract workers", ["No — no single contractor has 50 at Sahyadri", "Only for SecureLine", "Only in January"], "Count all contract workers at the establishment."),
    pick("Which contractors need a licence?", "SecureLine and QuickPack", ["All four", "Only BuildRight", "None"], "Their total workforces (320 and 60) are 50 or more."),
    num("What monthly arrears are due per Sparkle worker?", 400, "₹15,200 − ₹14,800 = ₹400.", { prefix: "₹" }),
    num("What are Sparkle's total monthly arrears for its 18 workers?", 7200, "18 × ₹400 = ₹7,200.", { prefix: "₹" }),
    num("How many Sparkle workers are missing from the ESI challan?", 3, "18 − 15 = 3.", { tolerance: 0 }),
    num("What is Sahyadri's exposure for BuildRight's unpaid November wages?", 510000, "30 × ₹17,000 = ₹5,10,000.", { prefix: "₹" }),
    pick("By when should BuildRight have paid November wages?", "Before 7 December 2026", ["31 January 2027", "30 November 2026", "15 December 2026"], "Monthly wages are due before the 7th of the next month."),
    num("How much of BuildRight's invoice is retained under the 10% rule?", 60000, "10% × ₹6,00,000 = ₹60,000 — though Sahyadri may need to withhold more to cover the ₹5,10,000 of wages.", { prefix: "₹" }),
    pick("What's the problem with QuickPack's work?", "Packing on the production line every day is likely core work, and no exception applies", ["Its wages are below minimum", "It has no workers", "Packing is always non-core"], "Essential to production, full-time and continuing."),
    pick("What should Anand do about SecureLine's invoice?", "Release it after checking its licence and the wage and contribution proof", ["Hold it indefinitely", "Pay double", "Cancel the contract"], "It meets wage and ESI requirements."),
    pick("If BuildRight still doesn't pay, what must Sahyadri do?", "Pay the workers and recover the amount from BuildRight", ["Nothing — it's BuildRight's problem", "Ask the workers to wait until January", "Pay only half"], "Principal employer liability."),
  ],
  references: [
    ref("Ministry of Labour and Employment — Labour Codes", "https://labour.gov.in", "OSH Code, 2020, Chapter XI"),
    ref("India Code — Occupational Safety, Health and Working Conditions Code, 2020", "https://www.indiacode.nic.in", "Sections 45–57"),
    ref("Shram Suvidha portal", "https://shramsuvidha.gov.in", "Registrations, licences and returns"),
  ],
}

export default assignment
