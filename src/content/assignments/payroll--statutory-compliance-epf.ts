import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: EPF — Kaveri Textiles'
// November 2026 ECR, with a joiner, a leaver and a member above the ceiling.

const assignment: PracticalAssignment = {
  title: "Prepare Kaveri Textiles' November ECR",
  period: "November 2026 (30 days)",
  intro:
    "You're preparing Kaveri Textiles' PF return for November 2026 for six members. Work out each part of the contribution, the total remittance and the cost of paying late.",
  context: [
    p("Kaveri Textiles Pvt Ltd, Coimbatore. The 12% rate applies. Contributions are restricted to the ₹25,000 wage ceiling. EDLI and admin charges are 0.5% each of total PF wages."),
    table(
      ["Member", "Monthly PF wages", "November details", "EPS member?"],
      [
        ["Selvi", "₹14,000", "Full month", "Yes"],
        ["Arun", "₹18,000", "Full month (enrolled from 17 Sept 2026)", "Yes"],
        ["Priya", "₹22,000", "Full month", "Yes"],
        ["Karthik", "₹60,000", "Full month; contributions restricted to ₹25,000", "No — wages above ₹25,000"],
        ["Deepa (new)", "₹24,000", "Joined 10 November — 21 days", "Yes"],
        ["Murugan (left)", "₹16,000", "Last day 20 November — 20 days", "Yes"],
      ],
    ),
    bullets(
      "Prorate part-month wages by calendar days and round to the nearest rupee: Deepa ₹16,800, Murugan ₹10,667.",
      "Employee share 12%; employer 8.33% to EPS (for EPS members) and the balance to EPF.",
      "Round each contribution to the nearest rupee.",
    ),
    note("The November ECR and payment are due by 15 December 2026."),
  ],
  tasks: [
    num("What are the total PF wages for November (all six members, after restricting Karthik to the ceiling)?", 106467, "₹14,000 + ₹18,000 + ₹22,000 + ₹25,000 + ₹16,800 + ₹10,667 = ₹1,06,467.", { prefix: "₹" }),
    num("What is Deepa's employee contribution?", 2016, "12% × ₹16,800 = ₹2,016.", { prefix: "₹" }),
    num("What is Murugan's EPS contribution?", 889, "8.33% × ₹10,667 = ₹888.56 → ₹889.", { prefix: "₹" }),
    pick("Which statement about Karthik's employer contribution is correct?", "₹3,000 goes to EPF and nothing to EPS", ["₹2,083 to EPS and ₹917 to EPF", "₹7,200 to EPF", "No employer contribution is due"], "He isn't an EPS member because his wages exceed ₹25,000, so the employer's whole 12% of ₹25,000 goes to EPF."),
    num("What is the total employee contribution for November?", 12776, "₹1,680 + ₹2,160 + ₹2,640 + ₹3,000 + ₹2,016 + ₹1,280 = ₹12,776.", { prefix: "₹" }),
    num("What is the total EPS contribution?", 6786, "₹1,166 + ₹1,499 + ₹1,833 + ₹0 + ₹1,399 + ₹889 = ₹6,786.", { prefix: "₹" }),
    num("What is the total employer contribution to EPF (Account 1, employer share)?", 5990, "Employer 12% total ₹12,776 − EPS ₹6,786 = ₹5,990.", { prefix: "₹" }),
    num("What is the EDLI contribution?", 532, "0.5% × ₹1,06,467 = ₹532.", { prefix: "₹" }),
    num("What is the total PF remittance for November?", 26616, "Employee ₹12,776 + employer ₹12,776 + EDLI ₹532 + admin ₹532 = ₹26,616.", { prefix: "₹" }),
    pick("What must be done for Murugan after the November ECR?", "Mark his date of exit (20 November 2026) and reason on the portal", ["Generate a new UAN", "Stop his contributions for October", "Nothing"], "Exit dates let members withdraw or transfer their balance."),
    num("If the November remittance is paid on 25 January 2027 (41 days late), what is the interest at 12% a year?", 359, "₹26,616 × 12% × 41 ÷ 365 = ₹358.77 ≈ ₹359.", { prefix: "₹", tolerance: 2 }),
    num("And what are the damages at 5% a year for the same delay?", 149, "Less than 2 months late: ₹26,616 × 5% × 41 ÷ 365 = ₹149.49 ≈ ₹149.", { prefix: "₹", tolerance: 2 }),
  ],
  references: [
    ref("Gazette of India — S.O. 5109(E), 17 September 2026 (wage ceiling ₹25,000)", "https://www.epfo.gov.in/notices/wage-ceiling-circular-28-09-2026/"),
    ref("EPFO — FAQs on the revised wage ceiling", "https://pmvbry-cdn.epfindia.gov.in/wp-content/uploads/2026/09/EPFO_Wage_Ceiling_FAQs.pdf", "split month, EPS membership, admin charges"),
    ref("EPFO — Official website", "https://www.epfo.gov.in"),
    ref("Chief Labour Commissioner — Codes, Acts and Rules", "https://clc.gov.in/?page_id=67", "Code on Social Security, 2020"),
  ],
}

export default assignment
