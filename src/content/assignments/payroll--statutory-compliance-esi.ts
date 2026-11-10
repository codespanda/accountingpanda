import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: ESI — Sagar Packaging's
// November 2026 contributions.

const assignment: PracticalAssignment = {
  title: "File Sagar Packaging's November ESI",
  period: "November 2026",
  intro:
    "You're preparing Sagar Packaging's ESI contributions for November 2026. Decide who is covered, calculate each contribution and the total due, and handle a late payment.",
  context: [
    p("Sagar Packaging Pvt Ltd, Ahmedabad. The current contribution period is October 2026 – March 2027. ESI wages follow the Code's definition (HRA and conveyance excluded within the 50% limit)."),
    table(
      ["Employee", "Monthly gross", "ESI (Code) wages", "Notes"],
      [
        ["Lalita", "₹16,000", "₹12,000", "Covered"],
        ["Mohan", "₹28,000", "₹23,000", "Was ₹20,000 on 1 October; raised in November"],
        ["Imran", "₹170 a day × 24 days", "₹4,080", "Daily-wage helper"],
        ["Neha", "₹26,000", "₹14,000", "Covered since October"],
        ["Ravi (new)", "₹25,000", "₹20,000", "Joined 1 November 2026"],
        ["Fatima", "₹30,000", "₹22,000", "Joined 1 October 2026"],
      ],
    ),
    bullets(
      "Employee share 0.75%, employer share 3.25% — each rounded up to the next rupee.",
      "Employees with average daily wages up to ₹176 don't pay the employee share; the employer still pays.",
      "November contributions are due within 15 days of the end of the month — by 15 December 2026.",
    ),
    note("The ESI ceiling is ₹21,000 a month (₹25,000 for persons with disability). None of these employees has a disability."),
  ],
  tasks: [
    pick("Is Mohan covered in November?", "Yes — he was covered at the start of the October–March period, so he stays covered until 31 March 2027", ["No — his wages are now above ₹21,000", "Only for half the month", "Only if he asks"], "Coverage continues to the end of the contribution period even if wages cross the ceiling."),
    pick("Is Fatima covered?", "No — her Code wages of ₹22,000 were above ₹21,000 when she joined", ["Yes — everyone at Sagar is covered", "Yes — her gross is irrelevant", "Only for medical benefit"], "Coverage is decided on wages at the start of the period (or on joining)."),
    num("What is Mohan's employee contribution for November?", 173, "0.75% × ₹23,000 = ₹172.50 → ₹173. Contributions are on actual wages.", { prefix: "₹" }),
    num("What is Imran's employee contribution?", 0, "His daily wage of ₹170 is within ₹176, so he pays nothing.", { prefix: "₹" }),
    num("What is Imran's employer contribution?", 133, "3.25% × ₹4,080 = ₹132.60 → ₹133.", { prefix: "₹" }),
    num("What is Ravi's employer contribution?", 650, "3.25% × ₹20,000 = ₹650.", { prefix: "₹" }),
    num("What is the total employee contribution for November (covered employees only)?", 518, "Lalita ₹90 + Mohan ₹173 + Imran ₹0 + Neha ₹105 + Ravi ₹150 = ₹518.", { prefix: "₹" }),
    num("What is the total employer contribution?", 2376, "Lalita ₹390 + Mohan ₹748 + Imran ₹133 + Neha ₹455 + Ravi ₹650 = ₹2,376.", { prefix: "₹" }),
    num("What is the total ESI payable for November?", 2894, "₹518 + ₹2,376 = ₹2,894.", { prefix: "₹" }),
    pick("By when should Ravi have been registered with ESIC?", "Within 10 days of joining — by 11 November 2026", ["By 31 March 2027", "Within 90 days", "Only after he falls ill"], "Register new covered employees promptly so benefits start from day one."),
    num("If November's ESI is paid 20 days late, what is the interest at 12% a year?", 19, "₹2,894 × 12% × 20 ÷ 365 = ₹19.03 ≈ ₹19.", { prefix: "₹", tolerance: 1 }),
  ],
  references: [
    ref("ESIC — Contribution rates and exemption", "https://www.esic.gov.in/contribution", "0.75% / 3.25%; ₹176 daily wage exemption"),
    ref("ESIC — Official website", "https://www.esic.gov.in"),
    ref("Chief Labour Commissioner — Codes, Acts and Rules", "https://clc.gov.in/?page_id=67", "Code on Social Security, 2020"),
  ],
}

export default assignment
