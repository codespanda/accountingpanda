import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Minimum Wages — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("Why do central-sphere rates apply to Metroline's staff?", "They work at central government sites and a railway goods yard", ["Metroline is a large company", "They live in Delhi", "They're contract workers anywhere"], "The appropriate government is the centre."),
  fq("Which separate law on paying wages did the Code on Wages absorb?", "The Payment of Wages Act", ["The Factories Act", "The EPF Act", "The Companies Act"], "Timing and deductions now sit in the Code."),
  fq("Who fixes minimum wages for a private shop in Delhi?", "The Delhi government", ["The central government", "The shop owner", "The CLC"], "State sphere."),
  fq("What does the Code require for equal work by men, women and transgender persons?", "Equal remuneration", ["Separate pay scales", "Higher pay for men", "Employer's discretion"], "Absorbed from the Equal Remuneration Act."),
  fq("Where is Ramesh based and what's his skill category?", "Delhi, unskilled", ["Area B city, skilled", "Delhi, semi-skilled", "Mumbai, unskilled"], "A sweeper in Area A."),

  // Module 2
  fq("Which section of the Code provides for the national floor wage?", "Section 9", ["Section 26", "Section 17", "Section 50"], "Minimum wages can't be below it once notified."),
  fq("Which rules set out how the floor wage is to be fixed?", "The Wages (Central) Rules, 2026", ["The Income-tax Rules, 2026", "The GST Rules", "The EPF Scheme"], "Notified 8 May 2026."),
  fq("At what interval should basic minimum rates be reviewed?", "Not more than five years", ["Every month", "Every 20 years", "Never"], "VDA adjusts in between."),
  fq("Which index drives VDA revisions?", "Consumer price index for industrial workers (CPI-IW)", ["Sensex", "GDP growth", "Repo rate"], "Cost of living."),
  fq("When does Neha check the CLC site for VDA orders?", "End of every March and September", ["Once a year in January", "Only when inspected", "Every week"], "Before 1 April and 1 October."),

  // Module 3
  fq("What's the basic rate for unskilled Area A work in the October 2026 order?", "₹523", ["₹317", "₹840", "₹704"], "Plus VDA of ₹317."),
  fq("What's the Area C unskilled daily rate from 1 October 2026?", "₹565", ["₹704", "₹840", "₹523"], "Construction, cleaning and loading."),
  fq("What's Sunita's minimum wage for 26 days in October 2026?", "₹24,258", ["₹21,840", "₹24,576", "₹26,624"], "₹933 × 26."),
  fq("What's Imran's minimum wage for 24 days?", "₹24,576", ["₹26,624", "₹24,258", "₹21,840"], "₹1,024 × 24."),
  fq("What shortfall arose when Ramesh was paid the April rate for October?", "₹338", ["₹13", "₹840", "₹3,614"], "₹13 × 26 days."),
  fq("What's the highly skilled Area A daily rate?", "₹1,111", ["₹1,024", "₹933", "₹840"], "From 1 October 2026."),

  // Module 4
  fq("What's Ramesh's overtime pay for 10 hours?", "₹2,100", ["₹1,050", "₹1,575", "₹840"], "₹210 × 10."),
  fq("What's Sunita's overtime pay for 6 hours?", "₹1,399.50", ["₹699.75", "₹933", "₹1,866"], "₹933 ÷ 8 × 2 × 6."),
  fq("How is a monthly-rated worker's daily rate commonly worked out?", "Monthly wage ÷ 26", ["Monthly wage ÷ 30", "Monthly wage ÷ 4", "Monthly wage ÷ 12"], "Then ÷ 8 for hourly."),
  fq("What's Imran's overtime pay for 5 hours?", "₹1,280", ["₹640", "₹1,024", "₹960"], "₹256 × 5."),
  fq("Which Code covers working hours and rest days in detail?", "The Occupational Safety, Health and Working Conditions Code", ["The Code on Social Security", "The Industrial Relations Code", "The Income-tax Act"], "Alongside the wage rules."),

  // Module 5
  fq("By when must Metroline pay October 2026 wages?", "7 November 2026", ["31 October 2026", "15 November 2026", "30 November 2026"], "Before the 7th of the next month."),
  fq("What's the maximum total deduction from Ramesh's ₹23,940 October wages?", "₹11,970", ["₹23,940", "₹5,985", "₹8,000"], "50%."),
  fq("By how much did Ramesh's planned deductions exceed the limit?", "₹50", ["₹2,520", "₹1,500", "Nothing"], "₹12,020 vs. ₹11,970."),
  fq("By when are fortnightly wages due?", "Before the end of the second day after the fortnight", ["The 7th of next month", "The same day", "The end of the month"], "Fortnightly wage period."),
  fq("Which deduction needs a hearing first?", "Damage or loss caused by the employee", ["PF", "Income tax", "Professional tax"], "Natural justice."),

  // Module 6
  fq("What does each wage slip show?", "Earnings, deductions and net pay", ["Only net pay", "Only the employer's name", "Tax slabs"], "For every employee."),
  fq("What can be done about certain first offences under the Code?", "They can be compounded by paying a set amount", ["Nothing", "They're always jailed", "They're ignored"], "Compounding."),
  fq("What arrears are due for three workers paid ₹827 instead of ₹840 for 26 days?", "₹1,014", ["₹338", "₹39", "₹2,184"], "₹338 × 3."),
  fq("Which document should be displayed or kept to prove the rate used?", "The current VDA order and rate notice", ["Last year's balance sheet", "GST registration", "PF passbook"], "For inspections."),
]
