import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: ESI — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("How many employees does Sagar Packaging have?", "45", ["10", "4", "60"], "In Ahmedabad."),
  fq("Which law did the Code on Social Security replace for ESI?", "The Employees' State Insurance Act, 1948", ["The Factories Act, 1948", "The EPF Act, 1952", "The Income-tax Act, 1961"], "From 21 November 2025."),
  fq("What does ESI's disablement benefit broadly pay during temporary disablement?", "About 90% of wages", ["About 50% of wages", "Nothing", "Full wages plus bonus"], "From employment injury."),
  fq("Who can get ESI medical care?", "The insured person and their family", ["Only the employee", "Only managers", "Only retirees"], "From day one."),
  fq("Which is a notified establishment type for ESI?", "Private educational institutions", ["Only factories", "Only banks", "Only government offices"], "Along with shops, hotels and others."),
  fq("What does most ESI cash benefit eligibility depend on?", "Contributions paid for a minimum number of days in the relevant period", ["Age only", "Salary above ₹21,000", "Length of service only"], "Contribution conditions."),

  // Module 2
  fq("What's Neha's ESI wage?", "₹14,000", ["₹26,000", "₹21,000", "₹22,000"], "HRA and conveyance excluded within 50%."),
  fq("Why wasn't Neha covered under the old ESI Act?", "Her ₹26,000 gross counted as wages", ["She was an apprentice", "She was a contractor", "Her firm wasn't registered"], "The Code changed the definition."),
  fq("Until when is Mohan covered after his December raise?", "31 March 2027", ["30 November 2026", "31 December 2026", "30 September 2027"], "The end of the contribution period."),
  fq("What ESI wage ceiling applies to persons with disability?", "₹25,000", ["₹21,000", "₹30,000", "₹15,000"], "Higher than the general ceiling."),
  fq("Which benefit period follows the October–March contribution period?", "July–December", ["January–June", "April–September", "Immediately"], "A three-month lag."),
  fq("Which employees should be reviewed for possible new coverage under the Code?", "Those with gross above ₹21,000 but lower Code wages", ["Only new joiners", "Only managers", "Nobody"], "HRA exclusion lowers wages."),

  // Module 3
  fq("What's Imran's monthly wage?", "₹4,420", ["₹4,576", "₹5,100", "₹170"], "₹170 × 26 days."),
  fq("What's the employer's ESI for Imran?", "₹144", ["₹34", "Nil", "₹178"], "3.25% of ₹4,420, rounded up."),
  fq("What's Mohan's employee ESI in December 2026?", "₹173", ["₹150", "₹172", "Nil"], "0.75% of ₹23,000, rounded up."),
  fq("What's the total ESI payable for the four sample employees in October 2026?", "₹1,984", ["₹1,639", "₹345", "₹2,017"], "₹345 + ₹1,639."),
  fq("What's Neha's employer ESI?", "₹455", ["₹845", "₹105", "₹390"], "3.25% of ₹14,000."),
  fq("What was the total ESI rate before July 2019?", "6.5%", ["4%", "3.25%", "12%"], "Reduced to 4%."),

  // Module 4
  fq("Why did Pooja register Neha in October 2026?", "The Code's wage definition brought her within coverage", ["She was a new joiner", "She asked to join", "Her pay fell"], "₹14,000 wages."),
  fq("What helps avoid duplicate Insurance Numbers?", "Aadhaar seeding and searching before registering", ["Creating a new number each time", "Using PAN only", "Nothing"], "One number for life."),
  fq("Within how many days of joining should a covered employee be registered?", "10 days", ["30 days", "90 days", "1 year"], "Per the regulations."),
  fq("By when should Pooja register a helper who joined on 3 November 2026?", "13 November 2026", ["3 December 2026", "15 November 2026", "31 March 2027"], "Within 10 days."),
  fq("What do employees nominate for treatment?", "A dispensary or hospital near their home", ["A private doctor of choice", "Their employer's office", "Nothing"], "ESIC facilities."),
  fq("What may continue for a limited time after an employee leaves?", "Medical benefit, based on past contributions", ["Wages", "Employer contributions", "Nothing at all"], "Mark the exit date."),

  // Module 5
  fq("How does Pooja upload monthly ESI data?", "An Excel file from payroll", ["By post", "By phone", "Through GSTN"], "The portal calculates contributions."),
  fq("On what day does Sagar pay ESI and PF?", "The 10th", ["The 15th", "The 7th", "The 25th"], "Before both deadlines."),
  fq("What's the total cost of paying ₹40,000 of ESI 30 days late?", "₹559", ["₹395", "₹164", "₹4,800"], "Interest plus damages."),
  fq("What damages rate applies for a delay of more than 6 months?", "25% a year", ["15% a year", "5% a year", "12% a year"], "The highest tier."),
  fq("What's done for a missed employee?", "Register them and pay arrears with interest", ["Ignore it", "Deduct double next month", "Pay the employee directly"], "Correct promptly."),
  fq("Which check is part of the monthly ESI routine?", "Portal totals = payroll ESI totals", ["GST matches sales", "PF matches tax", "Nothing"], "Reconcile before paying."),

  // Module 6
  fq("Where is Imran sent after his injury?", "The nearest ESI facility (or emergency care)", ["Home without treatment", "The office", "A private clinic only"], "Then the accident is reported."),
  fq("Who certified Lalita's 10-day sickness?", "An ESI doctor", ["Pooja", "Her manager", "The bank"], "ESI then pays benefit."),
  fq("Should an employer pay full wages and ESI sickness benefit for the same days?", "Not normally — coordinate according to policy", ["Yes, always", "Only in December", "Only for managers"], "Avoid double payment unless the policy tops up."),
  fq("What explains Mohan's coverage during an inspection?", "He was covered at the start of the contribution period", ["He's a manager", "He asked to stay", "He's a contractor"], "Coverage runs to the period end."),
  fq("Which item is on Sagar's monthly checklist for low-wage workers?", "Exempt from the employee share, employer share still paid", ["No ESI at all", "Double employee share", "Paid quarterly"], "₹176 daily-wage threshold."),
  fq("What can happen if accident reports are late?", "Benefits are delayed and penalties may apply", ["Nothing", "ESI coverage ends", "The employee pays"], "Report promptly."),
]
