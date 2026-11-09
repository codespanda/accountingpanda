import { fq } from "@/lib/finalTest"

// Final test bank for Payroll Basics for Bookkeepers — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("Which US form does an employee like Jordan receive at year end?", "Form W-2", ["Form 1099-NEC", "Form 940", "Form W-9"], "Employees receive W-2s; contractors may receive 1099s."),
  fq("How often does Lakeside Bakery pay its staff?", "Biweekly — every other Friday", ["Monthly", "Weekly", "Semimonthly"], "26 pays a year."),
  fq("Jordan's $52,000 salary paid monthly would be:", "$4,333.33", ["$4,000", "$2,166.67", "$5,200"], "$52,000 ÷ 12."),
  fq("Which form records an employee's US federal withholding choices?", "Form W-4", ["Form W-2", "Form 941", "Form 1099"], "Payroll uses it with the IRS tables."),
  fq("What should you do before approving a pay run?", "Check hours, totals and any changes", ["Nothing — software is always right", "Email it to all staff", "Delete last month's run"], "Review before submitting."),
  fq("Why limit access to payroll records?", "They contain sensitive personal data", ["They're too large", "Banks require it", "They change daily"], "Keep them secure."),

  // Module 2
  fq("Sam works 44 hours in week 1. How many overtime hours is that?", "4", ["0", "2", "8"], "Hours over 40 in the workweek."),
  fq("What was Sam's gross pay for the period with 4 overtime hours?", "$1,892", ["$1,760", "$1,936", "$2,000"], "$1,760 + $132."),
  fq("Which state is mentioned as having daily overtime rules?", "California", ["Ohio", "Texas", "Florida"], "Some states go beyond the FLSA."),
  fq("What decides whether a salaried employee is exempt?", "Duties and salary tests", ["Being paid a salary", "Working at the head office", "Their job title alone"], "Salary alone isn't enough."),
  fq("Sam takes 8 hours of vacation. What's his vacation pay?", "$176", ["$264", "$88", "$22"], "8 × $22."),
  fq("Why check bonus rules before paying a bonus to hourly staff?", "Some bonuses must be included in the overtime rate", ["Bonuses are tax-free", "Bonuses can't be paid to hourly staff", "Bonuses replace overtime"], "It can change overtime pay."),

  // Module 3
  fq("Which tax applies only to employees' wages over $200,000?", "Additional Medicare tax (0.9%)", ["FUTA", "Social Security", "SUTA"], "Withheld from the employee only."),
  fq("What's the 2026 Social Security wage base?", "$184,500", ["$176,100", "$200,000", "$7,000"], "Social Security stops above it."),
  fq("What is Medicare on Jordan's $2,000 pay?", "$29", ["$124", "$153", "$58"], "1.45% × $2,000."),
  fq("Jordan's 401(k) contribution of 5% per pay is:", "$100", ["$60", "$124", "$50"], "5% × $2,000."),
  fq("Which deduction might be ordered by a court?", "A wage garnishment", ["A 401(k) contribution", "A health premium", "A charity donation"], "Garnishments are legally required deductions."),
  fq("How can a pre-tax 401(k) contribution affect income tax withholding?", "It can reduce the wages subject to income tax", ["It doubles the tax", "It has no effect on anything", "It increases Social Security"], "Payroll software handles this."),

  // Module 4
  fq("What's the employer's Social Security on Jordan's $2,000 pay?", "$124", ["$29", "$248", "$12"], "6.2% matched by the employer."),
  fq("How much FUTA is due on Jordan's fourth pay of the year?", "$6", ["$12", "$0", "$24"], "Only $1,000 remains under the $7,000 base."),
  fq("Which insurance is required for employers in most US states?", "Workers' compensation", ["Life insurance", "Travel insurance", "Pet insurance"], "It's part of the true cost of employing staff."),
  fq("Which employer tax varies by state and employer?", "SUTA", ["FICA", "FUTA's 6.0% rate", "Medicare"], "State unemployment tax."),
  fq("Is FUTA withheld from employees' pay?", "No — it's paid by the employer", ["Yes, always", "Only for managers", "Only in December"], "Employer-only in most states."),
  fq("Sam earns $6,500 so far and is paid $1,200. How much FUTA at 0.6% is due?", "$3", ["$7.20", "$0", "$39"], "Only $500 is under the $7,000 base."),

  // Module 5
  fq("Which amount is credited to Cash in Jordan's pay-run entry?", "$1,507 — the net pay", ["$2,000 — the gross pay", "$493 — the deductions", "$2,265 — the total cost"], "Only net pay leaves the bank on payday."),
  fq("What is credited to SUTA payable in the employer-cost entry?", "$40", ["$12", "$60", "$153"], "The illustrative SUTA amount."),
  fq("Which account is debited for Lakeside's 401(k) match?", "Retirement plan expense", ["Wages expense", "Cash", "401(k) payable"], "401(k) payable is credited."),
  fq("When should March's accrued wages be reversed?", "On the first day of April", ["On March 31", "At year end", "Never"], "So the April pay isn't double-counted."),
  fq("How much cash does Lakeside deposit for Jordan's federal tax and FICA?", "$486", ["$306", "$180", "$333"], "$180 + $306."),
  fq("Why use a payroll clearing account?", "To match several bank withdrawals from a payroll provider", ["To store employee passwords", "To pay bonuses", "To calculate overtime"], "It should clear to zero."),

  // Module 6
  fq("Which US form reports FICA and federal income tax withheld each quarter?", "Form 941", ["Form 940", "Form W-2", "Form W-4"], "Form 940 covers FUTA annually."),
  fq("Which form may Lakeside need to file for Dana, the contractor?", "Form 1099-NEC", ["Form W-2", "Form 941", "Form W-4"], "Where required, by January 31."),
  fq("What is Australia's superannuation guarantee rate?", "12% of qualifying earnings", ["9.5%", "6.2%", "15%"], "Paid by the employer."),
  fq("How is Australia's Medicare levy collected from employees?", "Through PAYG withholding", ["As a separate payroll deduction", "By the employer only", "It isn't collected"], "No separate deduction."),
  fq("An Australian employee earns $2,500 a fortnight. How much super is due?", "$300", ["$250", "$375", "$30"], "12% × $2,500."),
  fq("If a payroll provider files reports, who remains responsible?", "The business", ["The provider only", "The employees", "Nobody"], "Responsibility stays with the employer."),
]
