import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Professional Tax — Trellis
// Analytics' February 2027 deductions across four states.

const assignment: PracticalAssignment = {
  title: "Run Trellis Analytics' February professional tax",
  period: "February 2027",
  intro:
    "February is the month most professional tax errors happen. Work out Trellis Analytics' February deductions in each state, the state totals, a payment deadline and two annual totals.",
  context: [
    p("Trellis Analytics Pvt Ltd has staff in Maharashtra, Karnataka, West Bengal and Delhi. Use the slabs taught in the course."),
    table(
      ["Employee", "State", "Gender", "Monthly gross (February)"],
      [
        ["Aditya", "Maharashtra (Pune)", "M", "₹45,000"],
        ["Sneha", "Maharashtra (Pune)", "F", "₹27,000 (raised from ₹22,000 in September 2026)"],
        ["Rohit", "Maharashtra (Pune)", "M", "₹9,000"],
        ["Divya", "Karnataka (Bengaluru)", "F", "₹24,000"],
        ["Manoj", "Karnataka (Bengaluru)", "M", "₹40,000"],
        ["Arnab", "West Bengal (Kolkata)", "M", "₹35,000"],
        ["Riya", "West Bengal (Kolkata)", "F", "₹14,000"],
        ["Sourav", "West Bengal (Kolkata)", "M", "₹50,000"],
        ["Vivek", "Delhi (remote)", "M", "₹50,000"],
      ],
    ),
    bullets(
      "Maharashtra: men ₹7,501–₹10,000 ₹175; men above ₹10,000 ₹200 (₹300 in February); women up to ₹25,000 nil, above ₹25,000 ₹200 (₹300 in February).",
      "Karnataka: below ₹25,000 nil; ₹25,000 and above ₹200 (₹300 in February). Payment by the 20th of the following month.",
      "West Bengal: up to ₹10,000 nil; ₹10,001–₹15,000 ₹110; ₹15,001–₹25,000 ₹130; ₹25,001–₹40,000 ₹150; above ₹40,000 ₹200.",
      "Delhi doesn't levy professional tax.",
    ),
    note("Slabs change from time to time — in practice, confirm them on each state's portal before running payroll."),
  ],
  tasks: [
    num("What is Rohit's February PT?", 175, "A man earning ₹9,000 falls in the ₹7,501–₹10,000 band — ₹175, with no February change for this band.", { prefix: "₹" }),
    num("What is Sneha's February PT?", 300, "She's a woman earning above ₹25,000, so ₹200 a month and ₹300 in February.", { prefix: "₹" }),
    num("What is the total February PT for Maharashtra?", 775, "Aditya ₹300 + Sneha ₹300 + Rohit ₹175 = ₹775.", { prefix: "₹" }),
    num("What is the total February PT for Karnataka?", 300, "Divya nil (below ₹25,000) + Manoj ₹300 = ₹300.", { prefix: "₹" }),
    num("What is the total February PT for West Bengal?", 460, "Arnab ₹150 + Riya ₹110 + Sourav ₹200 = ₹460. West Bengal has no February adjustment.", { prefix: "₹" }),
    num("What is Vivek's February PT?", 0, "Delhi doesn't levy professional tax.", { prefix: "₹" }),
    num("What is Trellis's total February PT across all states?", 1535, "₹775 + ₹300 + ₹460 + ₹0 = ₹1,535.", { prefix: "₹" }),
    pick("By when must Trellis pay February's Karnataka PT?", "20 March 2027", ["28 February 2027", "7 March 2027", "30 April 2027"], "Karnataka employers pay by the 20th of the following month (Karnataka PT portal FAQ)."),
    num("What is Sneha's total PT for April 2026 – March 2027?", 1500, "April–August nil (₹22,000, below the women's limit); September–January 5 × ₹200 = ₹1,000; February ₹300; March ₹200. Total ₹1,500.", { prefix: "₹" }),
    num("What is Arnab's total PT for the year?", 1800, "₹150 × 12 = ₹1,800 — within the ₹2,500 cap.", { prefix: "₹" }),
    pick("Divya gets a raise to ₹26,000 from March 2027. What PT applies in March?", "₹200", ["Nil", "₹300", "₹150"], "Her salary is now ₹25,000 or more, so Karnataka's ₹200 rate applies. The ₹300 is only for February."),
  ],
  references: [
    ref("Maharashtra GST Department — Profession tax rate schedules", "https://www.mahagst.gov.in/en/profession-tax-and-other-rate-schedule", "salary slabs, women's limit of ₹25,000"),
    ref("Karnataka Commercial Taxes — Professional Tax FAQ", "https://ptax.karnataka.gov.in/ptemployer/FAQ", "exemption below ₹25,000 from 1 April 2023; February ₹300; due by the 20th"),
    ref("Karnataka — Profession tax notifications", "https://gst.kar.nic.in/Profession.aspx"),
    ref("West Bengal — Profession tax portal", "http://wbprofessiontax.gov.in/", "may be unavailable at times"),
  ],
}

export default assignment
