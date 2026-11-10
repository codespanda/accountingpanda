import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Statutory Compliance: Labour Welfare Fund —
// Pinewood Retail's December 2026 LWF run.

const assignment: PracticalAssignment = {
  title: "Run Pinewood Retail's December LWF",
  period: "December 2026",
  intro:
    "December is Pinewood Retail's busiest LWF month. Work out each state's deductions and contributions, the payments due by 15 January, and the accounting.",
  context: [
    p("Use the amounts taught in the course (confirm current amounts with each board in real life)."),
    table(
      ["Store", "Staff on the register on 31 December", "Rule"],
      [
        ["Pune (Maharashtra)", "42", "Half-yearly: employee ₹25, employer ₹75 per employee"],
        ["Bengaluru (Karnataka)", "32", "Annual: employee ₹50, employer ₹100 per employee, from December wages"],
        ["Gurugram (Haryana)", "20", "Monthly: employee 0.2% of wages capped at ₹31; employer twice"],
      ],
    ),
    table(
      ["Gurugram December wages", "Employees"],
      [
        ["₹12,000", "6"],
        ["₹14,000", "4"],
        ["₹20,000", "10"],
      ],
    ),
    bullets("One Bengaluru employee is a manager excluded under the Karnataka Act (not counted in the 32).", "Haryana's December contribution is paid in December; Maharashtra's December cycle and Karnataka's annual contribution are due by 15 January 2027."),
    note("Round each Haryana amount to the nearest rupee."),
  ],
  tasks: [
    num("What is Pune's employee LWF deducted from December wages?", 1050, "42 × ₹25 = ₹1,050.", { prefix: "₹" }),
    num("What is Pune's total December-cycle contribution?", 4200, "42 × (₹25 + ₹75) = ₹4,200.", { prefix: "₹" }),
    num("What is Bengaluru's total annual contribution?", 4800, "32 × (₹50 + ₹100) = ₹4,800.", { prefix: "₹" }),
    num("What is the Haryana employee contribution for someone earning ₹14,000?", 28, "0.2% × ₹14,000 = ₹28 (under the ₹31 cap).", { prefix: "₹" }),
    num("What is Gurugram's total employee contribution for December?", 566, "6 × ₹24 + 4 × ₹28 + 10 × ₹31 = ₹144 + ₹112 + ₹310 = ₹566.", { prefix: "₹" }),
    num("What is Gurugram's total employer contribution for December?", 1132, "Twice the employee contributions: 2 × ₹566 = ₹1,132.", { prefix: "₹" }),
    num("What is the total due to all boards by 15 January 2027 (Pune December cycle + Bengaluru annual)?", 9000, "₹4,200 + ₹4,800 = ₹9,000.", { prefix: "₹" }),
    num("What is Pinewood's total employer LWF cost booked in December across all three states?", 7482, "Pune ₹3,150 + Bengaluru ₹3,200 + Gurugram ₹1,132 = ₹7,482.", { prefix: "₹" }),
    pick("A store manager in Pune asks why her payslip shows LWF but not the employer's ₹75. What's the answer?", "The employer's share is Pinewood's own cost — it's never deducted from wages", ["It was deducted from her bonus instead", "It's paid only by managers", "It's included in her tax"], "Payslips may show it as an employer contribution, but it isn't recovered."),
    pick("Which entry records Pune's December contribution before payment?", "Dr LWF expense ₹3,150, Dr Salaries payable ₹1,050, Cr LWF payable ₹4,200", ["Dr LWF payable ₹4,200, Cr Bank ₹4,200", "Dr Salaries ₹4,200, Cr Bank ₹4,200", "No entry until January"], "Employer share is an expense; the employee share is withheld from wages; both are owed to the board."),
  ],
  references: [
    ref("Maharashtra Labour Welfare Board", "https://public.mlwb.in/public/showPage/3361", "employer dashboard and payments"),
    ref("Maharashtra Labour Welfare Fund Act and Rules (English)", "https://mlwb.in/react-static-files/pdf/homepage/Quick-Links/MLWB-Fund-Act-and-Rules-english-version.pdf"),
    ref("Karnataka Labour Welfare Board", "https://klwb.karnataka.gov.in/english", "annual contribution due by 15 January"),
    ref("Haryana Labour Department — Labour Welfare Board", "https://hrylabour.gov.in/content/cms/MTU", "0.2% contribution; employer twice; interest on late payment"),
  ],
}

export default assignment
