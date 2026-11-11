import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Employee's Compensation —
// separate from the module knowledge checks. The correct answer is listed
// first; the test shuffles the options.

export default [
  // Module 1
  fq("Which Act did Chapter VII of the Code on Social Security replace?", "The Employee's Compensation Act, 1923", ["The Factories Act, 1948", "The Payment of Wages Act, 1936", "The Gratuity Act, 1972"], "From 21 November 2025."),
  fq("Under the Code, how are the minimum death and total disablement amounts set?", "By central government notification", ["Fixed in the Code forever", "By each employer", "By the insurer"], "Notified amounts."),
  fq("How many workers does Deccan Stone Works have?", "90", ["40", "20", "500"], "All outside ESI."),
  fq("What is the main advantage of a no-fault compensation system?", "Quick support without proving negligence", ["Lower wages", "No records needed", "No medical treatment"], "Purpose."),
  fq("If ESI is implemented in Deccan's district, who pays eligible workers' injury benefits?", "ESIC", ["Deccan as well", "Nobody", "The state"], "No double claims."),

  // Module 2
  fq("A worker is hurt in a road accident on his usual route home after his shift. Under the Code this is…", "Deemed to arise out of employment, subject to conditions", ["Never covered", "Covered only by ESI", "Covered only if he was driving a company vehicle"], "Commuting accident."),
  fq("A worker under the influence of alcohol injures a hand. Is compensation due?", "No, in this non-fatal case", ["Yes, always", "Only half", "Only if a witness saw it"], "Exception."),
  fq("Which disease could be occupational for granite quarrying?", "Silicosis", ["Common cold", "Diabetes", "Migraine"], "Dust exposure."),
  fq("If a contractor's worker is injured doing the principal employer's business, who can be made to pay?", "The principal employer, who can recover from the contractor", ["Nobody", "Only the worker's family", "The insurer of the contractor only"], "Principal employer liability."),
  fq("Is an injury causing four days' disablement compensable?", "Yes — it exceeds three days", ["No", "Only if fatal", "Only if listed"], "Three-day rule."),

  // Module 3
  fq("What is permanent partial disablement?", "Reduced earning capacity in every employment the employee could do at the time", ["Inability to do any work", "Recovery within a month", "Death"], "Category."),
  fq("What happens to a temporary case if the employee doesn't recover?", "It's reassessed as permanent disablement", ["It stays temporary forever", "Compensation stops", "It becomes a death case"], "Review."),
  fq("Which injury is treated as permanent total disablement?", "Loss of sight in both eyes", ["A sprained wrist", "A minor cut", "A two-day fever"], "Listed injury."),
  fq("Where are injuries with set percentages of loss of earning capacity listed?", "In the Code's schedule", ["In the company's policy", "In the GST Act", "In the insurer's brochure only"], "Schedule."),
  fq("What is Anitha's assessed loss of earning capacity?", "30%", ["20%", "60%", "100%"], "Permanent partial."),

  // Module 4
  fq("Which age is used for the relevant factor?", "Age at the last birthday before the accident", ["Age at retirement", "Age at joining", "Age at calculation"], "Relevant factor."),
  fq("What's the death compensation for a 25-year-old earning ₹12,000?", "₹13,01,460", ["₹15,61,752", "₹6,50,730", "₹12,47,880"], "₹6,000 × 216.91."),
  fq("What's the permanent total compensation for a 35-year-old earning ₹14,000?", "₹16,55,304", ["₹13,79,420", "₹14,55,860", "₹19,86,365"], "₹8,400 × 197.06."),
  fq("If disablement lasts 28 days or more, from when is temporary compensation paid?", "From the date of disablement", ["From day four", "From day 28", "From the next month"], "Waiting period waived."),
  fq("What's the half-monthly temporary payment for monthly wages of ₹14,000?", "₹3,500", ["₹7,000", "₹1,750", "₹8,400"], "25%."),
  fq("If the formula gives less than the notified minimum, what's paid?", "The notified minimum", ["The formula amount", "Nothing", "The average"], "Whichever is more."),

  // Module 5
  fq("Which lump sums must be deposited with the competent authority?", "Death compensation and lump sums for women or persons under legal disability", ["All temporary payments", "Only medical bills", "Nothing"], "Deposit rule."),
  fq("After how long does interest start on unpaid compensation?", "One month from when it falls due", ["One year", "One week", "Never"], "Interest."),
  fq("What's 12% annual interest on ₹6,00,000 for six months?", "₹36,000", ["₹72,000", "₹6,000", "₹12,000"], "₹6,00,000 × 12% × 6/12."),
  fq("Is a direct payment of death compensation to the widow treated as payment?", "No — it must be deposited", ["Yes", "Only in cash", "Only with a receipt"], "Deposit with the competent authority."),
  fq("Who distributes deposited death compensation among dependants?", "The competent authority", ["The employer", "The insurer", "The police"], "Distribution."),

  // Module 6
  fq("Who should be told the same day about any accident at Deccan?", "Lata, the HR and payroll manager", ["Only the insurer", "Nobody", "The customer"], "Internal rule."),
  fq("Why update the insurance wage declaration each year?", "So the insurer covers the full compensation due", ["To reduce wages", "For GST", "To close the policy"], "Avoid shortfalls."),
  fq("What prevents cutting-machine injuries?", "Machine guards", ["Faster speeds", "Longer shifts", "Removing guards"], "Prevention."),
  fq("Which records support the compensation calculation?", "Wage records and medical assessments", ["Sales invoices", "Board minutes", "Marketing plans"], "Evidence."),
]
