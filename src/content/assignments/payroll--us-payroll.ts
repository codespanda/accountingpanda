import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for US Payroll — Hill Country Coffee Roasters'
// November 2026 payroll.

const assignment: PracticalAssignment = {
  title: "Run Hill Country's November 2026 payroll",
  period: "November 2026",
  intro:
    "Jordan is running Hill Country Coffee Roasters' payroll for the biweekly period ending 20 November 2026 and checking the year's taxes for its highest earner. Calculate pay, withholding and employer taxes, and plan the deposits and returns.",
  context: [
    p("Hill Country is in Austin, Texas (no state income tax), pays biweekly and is a monthly depositor. 2026 rates: Social Security 6.2% to $184,500; Medicare 1.45%; Additional Medicare 0.9% over $200,000; FUTA 0.6% on the first $7,000; Texas SUTA 2.7% on the first $9,000."),
    table(
      ["Employee", "Pay", "This period", "Year-to-date wages before this period"],
      [
        ["Ben (non-exempt)", "$18 an hour", "Week 1: 46 hours; week 2: 40 hours", "$6,500"],
        ["Chloe (exempt manager)", "$1,600 a week salary", "Two weeks", "$70,400"],
      ],
    ),
    bullets(
      "Publication 15-T gives federal income tax of $95 for Ben's paycheck. He has no pre-tax deductions.",
      "Diego, the CEO, earns $250,000 for 2026.",
    ),
    note("Round each tax to the nearest cent."),
  ],
  tasks: [
    num("What is Ben's gross pay for the period?", 1602, "Regular 80 × $18 = $1,440 + overtime 6 × $27 = $162 = $1,602.", { prefix: "$" }),
    num("How much Social Security is withheld from Ben?", 99.32, "$1,602 × 6.2% = $99.32.", { prefix: "$", tolerance: 0.01 }),
    num("How much Medicare is withheld from Ben?", 23.23, "$1,602 × 1.45% = $23.23.", { prefix: "$", tolerance: 0.01 }),
    num("What is Ben's net pay?", 1384.45, "$1,602 − $99.32 − $23.23 − $95 = $1,384.45.", { prefix: "$", tolerance: 0.01 }),
    num("How much qualified overtime must Jordan track for Ben this period?", 54, "Half-time premium: 6 hours × $9 = $54.", { prefix: "$" }),
    num("What FUTA does Hill Country owe on Ben's pay this period?", 3, "Only $500 of wages is under $7,000: $500 × 0.6% = $3.00.", { prefix: "$", tolerance: 0.01 }),
    num("What Texas SUTA does Hill Country owe on Ben's pay this period?", 43.25, "$1,602 is all under the $9,000 base ($6,500 + $1,602 = $8,102): × 2.7% = $43.25.", { prefix: "$", tolerance: 0.01 }),
    num("What is the employer's total payroll tax on Ben's pay?", 168.80, "$99.32 + $23.23 + $3.00 + $43.25 = $168.80.", { prefix: "$", tolerance: 0.01 }),
    pick("Is Chloe owed overtime if she works 48 hours one week?", "No — she's exempt under the salary and duties tests", ["Yes, 8 hours at 1.5×", "Only in Texas", "Only if she asks"], "$1,600 a week is above $684, and she manages the store."),
    num("What is Diego's total 2026 employee Social Security tax?", 11439, "$184,500 × 6.2% = $11,439.", { prefix: "$" }),
    num("How much Additional Medicare Tax is withheld from Diego in 2026?", 450, "($250,000 − $200,000) × 0.9% = $450.", { prefix: "$" }),
    pick("By when must Hill Country deposit November's payroll taxes?", "15 December 2026", ["30 November 2026", "1 February 2027", "31 December 2026"], "Monthly depositors deposit by the 15th of the next month."),
    pick("By when must the Q4 2026 Form 941 be filed?", "1 February 2027", ["31 December 2026", "15 January 2027", "15 April 2027"], "31 January 2027 is a Sunday, so the next business day."),
  ],
  references: [
    ref("IRS — Publication 15 (2026), Employer's Tax Guide", "https://www.irs.gov/publications/p15", "Wage base, deposits and returns"),
    ref("IRS — Publication 15-T, Federal Income Tax Withholding Methods", "https://www.irs.gov/publications/p15t"),
    ref("U.S. Department of Labor — Overtime pay", "https://www.dol.gov/agencies/whd/overtime", "FLSA overtime and exemptions"),
    ref("Texas Workforce Commission — New Texas employers", "https://www.twc.texas.gov/programs/unemployment-tax/new-texas-employer-information", "$9,000 wage base and new-employer rate"),
  ],
}

export default assignment
