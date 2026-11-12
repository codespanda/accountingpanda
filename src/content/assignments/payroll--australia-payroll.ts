import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Australia Payroll — Bondi Bay Physio Group's
// November 2026 payroll.

const assignment: PracticalAssignment = {
  title: "Run Bondi Bay's November 2026 payroll",
  period: "November 2026",
  intro:
    "Grace is processing Bondi Bay Physio Group's payroll for a week in November 2026, finalising Ella's redundancy and working out November's NSW payroll tax.",
  context: [
    p("Bondi Bay has 22 employees in Sydney and pays weekly on Thursdays. Award terms in the case: overtime 1.5× for the first 2 hours and 2× after; casual loading 25%; annual leave loading 17.5% paid on termination."),
    table(
      ["Employee", "This week"],
      [
        ["Mia (full-time, $30.00 an hour)", "38 ordinary hours plus 3 hours' overtime"],
        ["Jack (casual, $28.00 base)", "24 hours"],
        ["Tom (new casual)", "Hasn't given a TFN after 30 days"],
      ],
    ),
    bullets(
      "Ella (age 38, $32.00 an hour, 38-hour week) is made redundant after 4 years and 3 months' service, with 60 hours of unused annual leave.",
      "November NSW wages, including super, total $140,000 (a 30-day month; threshold $98,630).",
    ),
    note("Use 2026–27 rules: super 12% of qualifying earnings; Payday Super; NSW payroll tax 5.45%."),
  ],
  tasks: [
    num("What is Mia's overtime pay for 3 hours?", 150, "2 × $45 + 1 × $60 = $150.", { prefix: "$" }),
    num("What is Mia's gross pay for the week?", 1290, "38 × $30 = $1,140 + $150 = $1,290.", { prefix: "$" }),
    num("What super is due for Mia this week?", 136.8, "12% × $1,140 ordinary pay — overtime isn't qualifying earnings.", { prefix: "$", tolerance: 0.01 }),
    num("What is Jack's gross pay?", 840, "24 × $35.00 = $840.", { prefix: "$" }),
    num("What super is due for Jack?", 100.8, "12% × $840 — casual loading is included.", { prefix: "$", tolerance: 0.01 }),
    pick("How should Grace withhold tax from Tom's pay?", "At 47% until he provides a TFN", ["At 15%", "At 0% using the tax-free threshold", "At 30%"], "No TFN after 28 days."),
    pick("By when must this week's super (payday Thursday 19 November 2026) reach the funds?", "Monday 30 November 2026", ["Thursday 19 November 2026", "28 January 2027", "31 December 2026"], "7 business days after payday."),
    num("How many weeks of notice is Ella entitled to?", 3, "3 to under 5 years' service; she's under 45.", { suffix: "weeks", tolerance: 0 }),
    num("What is Ella's NES redundancy pay?", 9728, "8 weeks (4 to under 5 years) × 38 × $32 = $9,728.", { prefix: "$" }),
    num("What is paid for Ella's unused annual leave including loading?", 2256, "60 × $32 = $1,920 + 17.5% = $336; total $2,256.", { prefix: "$" }),
    num("What NSW payroll tax is due for November?", 2254.67, "($140,000 − $98,630) × 5.45% = $2,254.67.", { prefix: "$", tolerance: 0.01 }),
    pick("When must Bondi Bay finalise STP for 2026–27?", "By 14 July 2027", ["By 30 June 2027", "By 31 October 2027", "Never"], "Finalisation declaration."),
  ],
  references: [
    ref("Fair Work Ombudsman — National Employment Standards", "https://www.fairwork.gov.au/employment-conditions/national-employment-standards", "Leave, notice and redundancy"),
    ref("Fair Work Ombudsman — Minimum wages", "https://www.fairwork.gov.au/pay-and-wages/minimum-wages", "$26.44 an hour from 1 July 2026"),
    ref("ATO — Tax rates for Australian residents", "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents", "2026–27 rates"),
    ref("ATO — Payment deadlines for Payday Super", "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-on-payday/payment-deadlines-for-payday-super", "7 business days after payday"),
    ref("Revenue NSW — Payroll tax thresholds and rates", "https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax/lodge-and-pay-returns/thresholds-and-rates", "5.45% above $1.2 million"),
  ],
}

export default assignment
