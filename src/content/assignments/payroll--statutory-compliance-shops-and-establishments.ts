import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Shops and Establishments —
// setting up Kesar Home Store's new Baner outlet in Pune for November 2026.

const assignment: PracticalAssignment = {
  title: "Set up Kesar's new Baner outlet",
  period: "November 2026",
  intro:
    "Kesar Home Store opened a new outlet in Baner, Pune on 2 November 2026. Priya must register it, check the November roster and overtime, work out leave, and get the records ready under the Maharashtra Shops and Establishments Act, 2017 and its 2018 rules.",
  context: [
    p("The Baner outlet has 12 workers and opens all seven days. Ordinary hours are 10:00 am to 7:30 pm with a half-hour break from 2:30 to 3:00 pm."),
    table(
      ["Worker", "Ordinary hourly rate", "Week of 16–22 Nov: hours worked", "Overtime hours since 1 Oct (other outlets)"],
      [
        ["Manoj", "₹100", "53", "110"],
        ["Ayesha", "₹120", "48", "0"],
        ["Kiran", "₹90", "50", "20"],
      ],
    ),
    bullets(
      "No worker worked more than 9 hours on any day in that week.",
      "Ayesha transferred from the showroom; she worked 265 days there in 2025.",
      "Three women — Ayesha, Nisha and Priti — have agreed to staff a late customer-service desk until 11:00 pm during the December sale.",
    ),
    note("Answer under the Maharashtra Act and 2018 rules as covered in the course."),
  ],
  tasks: [
    pick("What must Priya file for the Baner outlet?", "Registration in Form A", ["Intimation in Form F", "Nothing — the company is already registered", "Form R only"], "12 workers is ten or more, and each establishment is assessed separately."),
    pick("By when must she apply?", "Within 60 days of 2 November 2026", ["Within seven days", "Within six months", "Before 31 March 2027"], "Section 6."),
    num("What is the spread-over of the ordinary shift, in hours?", 9.5, "10:00 am to 7:30 pm = 9½ hours.", { suffix: "hours", tolerance: 0 }),
    num("How many hours does each worker work in the ordinary shift?", 9, "9½ hours spread-over − ½-hour break = 9 hours.", { suffix: "hours", tolerance: 0 }),
    num("What overtime pay is due to Manoj for the week of 16–22 November?", 1000, "53 − 48 = 5 hours × ₹200 (twice ₹100) = ₹1,000.", { prefix: "₹" }),
    num("What overtime pay is due to Kiran for that week?", 360, "50 − 48 = 2 hours × ₹180 = ₹360.", { prefix: "₹" }),
    num("How many more overtime hours can Manoj work between 23 November and 31 December (the quarter from 1 October)?", 10, "Cap 125 − (110 + 5) = 10 hours.", { suffix: "hours", tolerance: 0 }),
    num("How many days of earned leave is Ayesha entitled to in 2026?", 13, "265 ÷ 20 = 13 complete days (she worked 240+ days in 2025).", { suffix: "days", tolerance: 0 }),
    num("How many casual leave days does each worker get in a calendar year?", 8, "Eight, credited quarterly; unused days lapse.", { suffix: "days", tolerance: 0 }),
    pick("What is needed before the three women can work until 11:00 pm?", "Each woman's consent in Form L, plus doorstep transport and safety arrangements", ["Nothing — 11:00 pm is within normal hours", "A higher hourly rate only", "Registration in Form F"], "Normal hours for women end at 9:30 pm."),
    pick("Which notice must be displayed for the outlet's hours, rest interval and weekly holiday?", "Form M", ["Form Q", "Form R", "Form I"], "At the premises and on the website."),
    pick("By when must Kesar upload the 2026 annual return?", "28 February 2027, in Form R", ["31 December 2026", "31 March 2027", "30 June 2027"], "Within two months of the year ending 31 December."),
  ],
  references: [
    ref("Maharashtra Law and Judiciary Department — Shops and Establishments Act, 2017 (reprint)", "https://lj.maharashtra.gov.in", "Sections 6, 7, 12–18 and 29"),
    ref("Maharashtra Labour Department — Shops and Establishments services", "https://mahakamgar.maharashtra.gov.in", "Online registration and intimation"),
    ref("Ministry of Labour and Employment — Model Shops and Establishments Bill, 2016", "https://labour.gov.in"),
  ],
}

export default assignment
