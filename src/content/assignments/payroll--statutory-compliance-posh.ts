import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: POSH — reviewing Arcus
// Marketing's POSH compliance in November 2026. All case details are
// fictional.

const assignment: PracticalAssignment = {
  title: "Review Arcus's POSH compliance",
  period: "November 2026",
  intro:
    "Farah is reviewing Arcus Marketing's POSH compliance in November 2026. Check the committees, deadlines, payments and reporting under the POSH Act, 2013 and the 2013 rules.",
  context: [
    p("Arcus has its Hyderabad office (85 employees), a new Vizag office (12 employees) and a Chennai sales desk (6 employees)."),
    table(
      ["Hyderabad IC member", "Role", "Gender"],
      [
        ["Shalini (Vice-President)", "Presiding officer", "Woman"],
        ["Ravi", "Employee member", "Man"],
        ["Arjun", "Employee member", "Man"],
        ["Kiran", "Employee member", "Man"],
        ["NGO advocate", "External member", "Woman"],
      ],
    ),
    bullets(
      "A complaint was received on 2 November 2026 about an incident on 20 October 2026.",
      "The external member sat for 4 days of proceedings in November; Arcus pays the rules' minimum fee.",
      "In 2026 the IC received 5 complaints and disposed of 3; one of the pending ones has been open for 120 days.",
    ),
    note("Answer under the Act and rules as covered in the course."),
  ],
  tasks: [
    pick("What's wrong with the Hyderabad IC?", "Fewer than half the members are women", ["It has an external member", "The presiding officer is senior", "It has more than two employee members"], "Two of five members are women; at least half (three) must be."),
    num("What is the minimum number of women needed on this five-member IC?", 3, "At least half of 5, rounded up = 3.", { suffix: "women", tolerance: 0 }),
    pick("Does the Vizag office need its own IC?", "Yes — it has ten or more employees", ["No, Hyderabad's IC is enough", "Only after a complaint", "Only if all are women"], "Each office with ten or more employees needs an IC."),
    pick("Where would a complaint from the Chennai sales desk go?", "The Local Committee for the district", ["The Hyderabad IC only", "Nowhere", "The police only"], "Fewer than ten employees — Local Committee."),
    num("What is the minimum fee due to the external member for November (excluding travel)?", 800, "4 days × ₹200 = ₹800.", { prefix: "₹" }),
    num("Within how many days of 2 November must the inquiry be completed?", 90, "Section 11 — within 90 days.", { suffix: "days", tolerance: 0 }),
    num("Within how many working days must the complaint be sent to the respondent?", 7, "Seven working days under the rules.", { suffix: "working days", tolerance: 0 }),
    num("After receiving the IC's report, within how many days must Arcus act?", 60, "Section 13.", { suffix: "days", tolerance: 0 }),
    num("How many complaints were pending at the end of 2026?", 2, "5 received − 3 disposed = 2.", { tolerance: 0 }),
    num("How many complaints were pending for more than 90 days?", 1, "One has been open for 120 days.", { tolerance: 0 }),
    num("What is the maximum fine if Arcus fails to constitute an IC for Vizag?", 50000, "Up to ₹50,000; double for a repeat offence.", { prefix: "₹" }),
    pick("Where must Arcus disclose the complaint numbers?", "In its Board's report, and the IC's annual report goes to the District Officer", ["Only on its website", "Nowhere", "In its GST return"], "Companies (Accounts) Rules and section 21."),
  ],
  references: [
    ref("India Code — Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013", "https://www.indiacode.nic.in", "Sections 4, 9–15, 19, 21, 22 and 26"),
    ref("Ministry of Women and Child Development — SHe-Box portal", "https://shebox.wcd.gov.in", "Online complaints"),
    ref("Ministry of Women and Child Development", "https://wcd.gov.in", "Act, rules and handbook"),
  ],
}

export default assignment
