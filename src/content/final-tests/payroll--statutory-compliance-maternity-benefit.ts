import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Maternity Benefit — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("When did the Code on Social Security come into force?", "21 November 2025", ["1 April 2017", "8 May 2026", "1 January 2021"], "The central rules followed on 8 May 2026."),
  fq("Which amendment introduced 26 weeks' leave and the crèche rule?", "The Maternity Benefit (Amendment) Act, 2017", ["The Code on Wages, 2019", "The Factories Act, 1948", "The ESI Act, 1948"], "Carried over into the Code."),
  fq("Is every plantation covered regardless of size?", "Yes", ["No, only with 50 workers", "Only in Kerala", "Only if registered under GST"], "Factories, mines and plantations are covered."),
  fq("Why is Kavya's maternity benefit paid by ESIC?", "She's covered by ESI", ["She's a part-timer", "She joined recently", "Nilgiri chose so"], "ESI-covered women claim from ESIC."),
  fq("How many employees does Nilgiri Software Solutions have?", "64", ["10", "49", "120"], "So the crèche rule applies."),

  // Module 2
  fq("Do paid holidays in the previous twelve months count towards the 80 days?", "Yes", ["No", "Only national holidays", "Only for factories"], "Along with lay-off days."),
  fq("How much of the 12-week entitlement can be taken before delivery?", "Up to six weeks", ["Up to eight weeks", "None", "All of it"], "For women with two or more surviving children."),
  fq("From when does a commissioning mother's 12 weeks run?", "The date the child is handed over", ["The date of conception", "The date of the contract", "The child's first birthday"], "Surrogacy case."),
  fq("How long is the leave after a tubectomy?", "Two weeks", ["Six weeks", "One month", "12 weeks"], "Immediately following."),
  fq("How much additional leave is allowed for illness arising from pregnancy?", "Up to one month", ["Up to one year", "Two days", "None"], "With proof."),
  fq("Ritu adopts a five-month-old child. Is adoption leave due under the Code?", "No — the child must be under three months", ["Yes, 12 weeks", "Yes, 26 weeks", "Yes, 6 weeks"], "Age limit."),

  // Module 3
  fq("An employee earned ₹96,000 for 64 days worked in the three months before leave. What's her average daily wage?", "₹1,500", ["₹1,067", "₹3,200", "₹1,280"], "₹96,000 ÷ 64."),
  fq("What's 12 weeks' benefit at an average daily wage of ₹2,000?", "₹1,68,000", ["₹1,20,000", "₹3,64,000", "₹84,000"], "₹2,000 × 84."),
  fq("When is the medical bonus not payable?", "When the employer provides free pre-natal confinement and post-natal care", ["When the employee is over 30", "When it's her first child", "When she joins after April"], "Free care replaces it."),
  fq("What's Lakshmi's total of benefit and bonus at ₹2,400 a day for 26 weeks?", "₹4,40,300", ["₹4,36,800", "₹4,33,300", "₹4,68,000"], "₹4,36,800 + ₹3,500."),
  fq("If a woman dies after delivery leaving the child alive, for what period is benefit paid?", "The whole period", ["Only up to delivery", "Nothing", "One week"], "To her nominee or legal representative."),

  // Module 4
  fq("Do nursing breaks replace the rest interval?", "No — they're in addition", ["Yes", "Only on Saturdays", "Only in the first month"], "Two a day."),
  fq("When must a woman be told about the crèche and other benefits?", "At the time of her initial appointment, in writing and electronically", ["Only when pregnant", "Never", "At resignation"], "Under the Code."),
  fq("Can a pregnant woman ask not to do work involving long hours of standing?", "Yes", ["No", "Only in factories", "Only after delivery"], "Within the period the Code prescribes."),
  fq("Can three neighbouring companies share one crèche?", "Yes, a common crèche is allowed", ["No", "Only with state approval in each case", "Only for 500+ employees"], "Within the prescribed distance."),

  // Module 5
  fq("Can Meena's service conditions be changed to her disadvantage during leave?", "No", ["Yes", "Only her designation", "Only with her manager's consent"], "Unlawful variation."),
  fq("A manager cuts Ritu's bonus because she was on adoption leave. Is that allowed?", "No — it disadvantages her because of the absence", ["Yes", "Only for adoption", "Only if she agrees verbally"], "Protect pay and progress."),
  fq("What do contraventions of the maternity provisions attract?", "Fines and, for some offences, imprisonment", ["Nothing", "Only a warning", "A tax refund"], "Under the Code."),
  fq("What can an inspector-cum-facilitator do if benefit is withheld?", "Examine records and order payment", ["Nothing", "Only send an email", "Close the company"], "Enforcement."),

  // Module 6
  fq("What does the woman's notice of claim include?", "The date her absence starts and her nominee", ["Her bank PIN", "Her salary history for 5 years", "Her manager's approval"], "In writing."),
  fq("Who usually signs the certificate of pregnancy or delivery?", "A registered medical practitioner, or another person recognised under the rules", ["Her manager", "The HR head", "A colleague"], "Check the current forms."),
  fq("How is maternity benefit treated for income tax?", "As salary, with TDS", ["Fully exempt", "As capital gains", "As GST"], "Through payroll."),
  fq("What does Nilgiri do for Kavya's maternity case?", "Records her leave and supports her ESIC claim", ["Pays her maternity benefit", "Terminates her", "Nothing at all"], "ESIC pays."),
  fq("Which is the first item on Nilgiri's maternity checklist?", "Coverage and ESI status", ["Crèche location", "Tax deduction", "Appraisal"], "They decide who pays."),
]
