import { fq } from "@/lib/finalTest"

// Final test bank for US Payroll — separate from the module knowledge checks.
// The correct answer is listed first; the test shuffles the options.

export default [
  // Module 1
  fq("How many pay dates does a semimonthly payroll have?", "24", ["26", "12", "52"], "Twice a month."),
  fq("Within how many days must Texas employers report new hires?", "20", ["3", "30", "90"], "State new-hire reporting."),
  fq("What's Chloe's semimonthly salary on $83,200 a year?", "$3,466.67", ["$3,200.00", "$1,600.00", "$6,933.33"], "÷ 24."),
  fq("Which agency enforces the FLSA?", "The Department of Labor", ["The IRS", "The SSA", "The Texas Comptroller"], "Wage and Hour Division."),
  fq("What form does a contractor paid $2,500 in 2026 receive?", "Form 1099-NEC", ["Form W-2", "Form W-4", "No form"], "Above $2,000."),

  // Module 2
  fq("Which state requires daily overtime in addition to weekly?", "California", ["Texas", "Florida", "Georgia"], "Texas follows federal weekly rules."),
  fq("What's the overtime rate for an employee paid $20 an hour?", "$30", ["$20", "$40", "$25"], "1.5×."),
  fq("What's Ben's gross for 46 and 38 hours at $18?", "$1,566", ["$1,512", "$1,620", "$1,476"], "6 overtime hours."),
  fq("Which exemption test looks at the work the employee mainly does?", "The duties test", ["The salary basis test", "The minimum wage test", "The FUTA test"], "Executive, administrative or professional."),
  fq("What's the qualified overtime for 6 overtime hours at a $20 regular rate?", "$60", ["$180", "$120", "$30"], "6 × $10 half-time premium."),

  // Module 3
  fq("What's the maximum 2026 employee Social Security tax?", "$11,439", ["$12,400", "$10,918", "No maximum"], "$184,500 × 6.2%."),
  fq("What's the Medicare tax on $3,200?", "$46.40", ["$198.40", "$28.80", "$32.00"], "1.45%."),
  fq("Which deferrals are after-tax?", "Roth 401(k)", ["Traditional 401(k)", "Section 125 health premiums", "HSA through cafeteria plan"], "Taxed now."),
  fq("Which pre-tax deduction reduces both income tax and FICA wages?", "Section 125 cafeteria-plan health premiums", ["Traditional 401(k)", "Roth 401(k)", "Garnishments"], "Cafeteria plan."),
  fq("What Social Security is withheld when YTD wages are $183,000 and the paycheck is $4,000?", "$93", ["$248", "$0", "$155"], "Only $1,500 under the base."),

  // Module 4
  fq("What's the gross FUTA rate before the state credit?", "6.0%", ["0.6%", "5.4%", "6.2%"], "On the first $7,000."),
  fq("What's the minimum Texas SUTA rate for new employers?", "2.7%", ["0.6%", "6.0%", "5.4%"], "Or the industry average if higher."),
  fq("What's the Texas SUTA on $1,566 of wages under the wage base?", "$42.28", ["$9.40", "$23.49", "$94.00"], "2.7%."),
  fq("Which account is credited for withheld federal income tax?", "Federal income tax payable", ["Wages expense", "Payroll tax expense", "Cash"], "A liability."),
  fq("To whom are SUTA returns filed in Texas?", "The Texas Workforce Commission", ["The IRS", "The Texas Comptroller", "The SSA"], "Quarterly."),

  // Module 5
  fq("What is the lookback period for Form 941 filers?", "1 July two years ago to 30 June last year", ["The previous calendar year", "The last quarter", "The current year"], "12 months."),
  fq("When is a semiweekly depositor's deposit due for a Tuesday payday?", "The following Friday", ["The following Wednesday", "The 15th of next month", "The same day"], "Sat–Tue paydays."),
  fq("Through which system are federal tax deposits usually made?", "EFTPS", ["EmaraTax", "Shram Suvidha", "STP"], "Electronic Federal Tax Payment System."),
  fq("What is the maximum late-deposit penalty rate?", "15%", ["2%", "5%", "50%"], "Depending on lateness."),
  fq("Why are withheld taxes called trust fund taxes?", "The employer holds them for the government", ["They go into a trust", "They're optional", "They're paid by the trust"], "Personal liability can follow."),

  // Module 6
  fq("Which W-2 box shows Social Security wages?", "Box 3", ["Box 1", "Box 2", "Box 5"], "Box 5 is Medicare wages."),
  fq("What corrects an employee's filed W-2?", "Form W-2c", ["Form 941-X", "Form W-4", "Form 940"], "Corrected W-2."),
  fq("How long does the FLSA require timecards to be kept?", "2 years", ["1 year", "4 years", "7 years"], "Payroll records 3 years."),
  fq("How is personal use of a company car treated in payroll?", "As taxable wages", ["As a non-taxable benefit", "As a deduction", "As a contractor payment"], "Fringe benefit."),
  fq("What's Box 1 for an employee with $60,000 gross and $3,000 traditional 401(k)?", "$57,000", ["$60,000", "$63,000", "$54,000"], "Pre-tax deferral."),
]
