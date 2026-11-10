import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Payroll Basics for Bookkeepers — Lakeside Bakery's
// biweekly payroll ending 13 March 2026.

const assignment: PracticalAssignment = {
  title: "Process Lakeside Bakery's March pay run",
  period: "Biweekly pay period ending 13 March 2026",
  intro:
    "Process one biweekly pay run for Lakeside Bakery in Ohio: gross pay with overtime, payroll taxes, net pay, the employer's costs and the federal tax deposit.",
  context: [
    p("Lakeside Bakery pays two employees every two weeks. Federal income tax withholding is given (from the IRS tables)."),
    table(
      ["Employee", "Pay basis", "This period"],
      [
        ["Sam", "Hourly, non-exempt, $22 an hour", "Week 1: 44 hours. Week 2: 38 hours. Federal income tax withheld $140."],
        ["Jordan", "Salary $52,000 a year", "Regular biweekly pay plus a $300 bonus. 5% pre-tax 401(k). Federal income tax withheld $210."],
      ],
    ),
    bullets(
      "Overtime: 1.5 × the regular rate for hours over 40 in a workweek.",
      "Social Security 6.2% and Medicare 1.45% on each side (employee and employer). 401(k) deferrals are still subject to Social Security and Medicare.",
      "FUTA 0.6% on the first $7,000 of each employee's wages for the year. Before this pay, Sam had earned $5,600 this year; Jordan had already passed $7,000.",
      "Lakeside matches 50% of 401(k) deferrals.",
    ),
    note("Round each tax to the nearest cent. Ignore state taxes for this exercise."),
  ],
  tasks: [
    num("What is Sam's gross pay?", 1848, "Week 1: 40 × $22 + 4 × $33 = $1,012. Week 2: 38 × $22 = $836. Total $1,848. Overtime is per workweek, not averaged.", { prefix: "$", tolerance: 0.01 }),
    num("What is Jordan's gross pay?", 2300, "$52,000 ÷ 26 = $2,000 + $300 bonus = $2,300.", { prefix: "$", tolerance: 0.01 }),
    num("What is Jordan's 401(k) deferral?", 115, "5% × $2,300 = $115.", { prefix: "$", tolerance: 0.01 }),
    num("What is Sam's employee Social Security tax?", 114.58, "6.2% × $1,848 = $114.58.", { prefix: "$", tolerance: 0.01 }),
    num("What is Sam's net pay?", 1566.62, "$1,848 − $114.58 − Medicare $26.80 − federal income tax $140 = $1,566.62.", { prefix: "$", tolerance: 0.01 }),
    num("What is Jordan's net pay?", 1799.05, "$2,300 − 401(k) $115 − Social Security $142.60 − Medicare $33.35 − federal income tax $210 = $1,799.05.", { prefix: "$", tolerance: 0.01 }),
    num("What is the employer's FUTA for this pay run?", 8.4, "Only Sam's first $1,400 is under the $7,000 limit: 0.6% × $1,400 = $8.40. Jordan is already past it.", { prefix: "$", tolerance: 0.01 }),
    num("What is the total federal tax deposit for this pay run (income tax withheld + both shares of Social Security and Medicare)?", 984.66, "Income tax $350 + employee FICA $317.33 + employer FICA $317.33 = $984.66.", { prefix: "$", tolerance: 0.01 }),
    num("What is Lakeside's total cost of this pay run (gross + employer FICA + FUTA + 401(k) match)?", 4531.23, "$4,148 + $317.33 + $8.40 + $57.50 = $4,531.23.", { prefix: "$", tolerance: 0.01 }),
    pick("Which form reports these federal taxes for the quarter?", "Form 941", ["Form 940 only", "Form W-2", "Form 1099-NEC"], "Form 941 is the quarterly federal tax return; Form 940 is the annual FUTA return."),
  ],
  references: [
    ref("IRS — Publication 15 (Circular E), Employer's Tax Guide", "https://www.irs.gov/publications/p15", "withholding, FICA (2026 Social Security wage base $184,500), FUTA and deposits"),
    ref("US Department of Labor — Overtime pay", "https://www.dol.gov/agencies/whd/overtime", "FLSA overtime rules"),
  ],
}

export default assignment
