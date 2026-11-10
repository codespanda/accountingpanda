import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Bonus — Indigo Prints'
// 2026-27 bonus run.

const assignment: PracticalAssignment = {
  title: "Run Indigo Prints' 2026-27 statutory bonus",
  period: "Accounting year April 2026 – March 2027 (paid October 2027)",
  intro:
    "Indigo Prints Pvt Ltd, a 60-person printing firm, is preparing its statutory bonus. Decide who is eligible, calculate the bonus pool from the allocable surplus, and plan payment.",
  context: [
    p("Indigo Prints Pvt Ltd, Pune. The applicable minimum wage for its employees is ₹13,000 a month (assumed for this exercise). Allocable surplus is 60% of available surplus."),
    table(
      ["Employee", "Monthly wages (Code)", "Months worked in 2026-27", "Notes"],
      [
        ["Anil", "₹20,000", "12", ""],
        ["Bhavna", "₹9,500", "12", ""],
        ["Chetan", "₹22,000", "12", ""],
        ["Divya", "₹16,000", "6 (joined 1 October)", ""],
        ["Eshan", "₹14,000", "12", "Dismissed in March 2027 for fraud"],
      ],
    ),
    table(
      ["Profit information, 2026-27", "Amount"],
      [
        ["Gross profit (as prescribed)", "₹42,00,000"],
        ["Prior charges (depreciation, direct taxes, return on capital)", "₹22,00,000"],
        ["Total bonus wages of all eligible employees", "₹90,00,000"],
      ],
      { numeric: [1] },
    ),
    bullets(
      "Eligibility: Code wages up to ₹21,000 a month and at least 30 days' work; no disqualifying dismissal.",
      "Bonus wages are capped at ₹7,000 or the applicable minimum wage, whichever is higher.",
      "Anil received a ₹4,000 festival advance against bonus in November 2026.",
    ),
    note("Round bonus amounts to the nearest rupee."),
  ],
  tasks: [
    pick("Which of the five employees are eligible?", "Anil, Bhavna and Divya", ["All five", "Anil, Bhavna, Chetan and Divya", "Only Anil"], "Chetan earns above ₹21,000; Eshan was dismissed for fraud."),
    num("On what monthly wage is Anil's bonus calculated?", 13000, "The higher of ₹7,000 and the ₹13,000 minimum wage.", { prefix: "₹" }),
    num("What are Anil's bonus wages for the year?", 156000, "₹13,000 × 12 = ₹1,56,000.", { prefix: "₹" }),
    num("What are Divya's bonus wages for the year?", 78000, "₹13,000 × 6 = ₹78,000 (proportionate).", { prefix: "₹" }),
    num("What is Bhavna's minimum bonus?", 9496, "Actual wages ₹9,500 are below the base: ₹9,500 × 12 = ₹1,14,000 × 8.33% = ₹9,496.", { prefix: "₹" }),
    num("What is the allocable surplus?", 1200000, "(₹42,00,000 − ₹22,00,000) × 60% = ₹12,00,000.", { prefix: "₹" }),
    num("What is the total minimum bonus for all eligible employees?", 749700, "8.33% × ₹90,00,000 = ₹7,49,700.", { prefix: "₹" }),
    num("What bonus rate is payable? (%, two decimals)", 13.33, "The allocable surplus ₹12,00,000 is between the minimum and the maximum (₹18,00,000), so ₹12,00,000 ÷ ₹90,00,000 = 13.33%.", { suffix: "%", tolerance: 0.01 }),
    num("What is Anil's bonus at that rate?", 20800, "13.33% (exactly ₹12,00,000 ÷ ₹90,00,000) × ₹1,56,000 = ₹20,800.", { prefix: "₹", tolerance: 5 }),
    num("How much is still payable to Anil after his festival advance?", 16800, "₹20,800 − ₹4,000 = ₹16,800.", { prefix: "₹", tolerance: 5 }),
    pick("By when must Indigo Prints pay the 2026-27 bonus?", "30 November 2027", ["31 March 2027", "31 March 2028", "15 October 2027"], "Within eight months of the end of the accounting year."),
  ],
  references: [
    ref("Gazette of India — S.O. 4711(E), bonus eligibility ₹21,000 (25 August 2026)", "https://egazette.gov.in/WriteReadData/2026/275747.pdf", "PDF"),
    ref("Chief Labour Commissioner — Implementation of the Code on Wages, 2019", "https://clc.gov.in/?page_id=86"),
  ],
}

export default assignment
