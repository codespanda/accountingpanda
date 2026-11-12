import { fq } from "@/lib/finalTest"

// Final test bank for Australia Payroll — separate from the module knowledge
// checks. The correct answer is listed first; the test shuffles the options.

export default [
  // Module 1
  fq("What's the weekly national minimum wage from 1 July 2026?", "$1,004.90", ["$948.00", "$978.10", "$1,140.00"], "$26.44 an hour."),
  fq("What test must an enterprise agreement pass?", "The better-off-overall test", ["The 80-day test", "The arm's length test", "The base rate entity test"], "Compared with the award."),
  fq("How many paid compassionate leave days per occasion does the NES give?", "2", ["5", "10", "1"], "Per occasion."),
  fq("How long can unpaid parental leave be under the NES?", "Up to 12 months, with a right to request more", ["6 weeks", "26 weeks only", "Unlimited"], "NES."),
  fq("Which Fair Work tool helps confirm award pay rates?", "The Pay and Conditions Tool", ["EmaraTax", "EFTPS", "myGov"], "Fair Work online tool."),

  // Module 2
  fq("When can casuals choose to convert to permanent employment?", "After 6 months (12 for small businesses), if they meet the tests", ["Never", "After 1 month", "After 5 years"], "Employee choice."),
  fq("What's a casual's hourly rate on a $30 base?", "$37.50", ["$35.00", "$30.00", "$40.00"], "25% loading."),
  fq("How are allowances reported in STP Phase 2?", "Separately from wages", ["Inside wages", "Not reported", "As super"], "Disaggregated."),
  fq("What must a salary cover for an award employee?", "At least what the award would pay for the hours worked", ["Only the minimum wage", "Nothing extra", "Only ordinary hours"], "Better off overall."),
  fq("What's the pay for a 6-hour Saturday shift at $30 with a 25% penalty?", "$225", ["$180", "$270", "$200"], "6 × $37.50."),

  // Module 3
  fq("What's the 2026–27 tax on $45,000 taxable income before the Medicare levy?", "$4,020", ["$4,288", "$6,750", "$0"], "15% × $26,800."),
  fq("What's the top marginal rate in 2026–27?", "45%", ["47%", "37%", "50%"], "Above $190,000."),
  fq("Which tables add extra withholding for HELP debts?", "Study and training support loan tables", ["Payroll tax tables", "Super tables", "GST tables"], "Repayment thresholds."),
  fq("Which BAS label shows PAYG withheld?", "W2", ["W1", "1A", "G1"], "W1 is gross wages."),
  fq("Should a second job claim the tax-free threshold?", "Usually no", ["Always yes", "Only for casuals", "Only in NSW"], "One employer at a time."),

  // Module 4
  fq("Is casual loading part of ordinary time earnings for super?", "Yes", ["No", "Only for under-18s", "Only over $450 a month"], "Counts for super."),
  fq("What's the super on Sophie's weekly $1,826.92?", "$219.23", ["$182.69", "$228.37", "$200.00"], "12%."),
  fq("Which system carries super payments and data to funds?", "SuperStream", ["STP", "EFTPS", "WPS"], "Electronic standard."),
  fq("What's included in the super guarantee charge?", "The shortfall, interest and an administrative uplift", ["Only the shortfall", "Only a fine", "Nothing"], "SGC."),
  fq("When is a state-wide public holiday in another state a business day for Payday Super?", "Never — it isn't a business day", ["Always", "Only in NSW", "Only for casuals"], "Any whole-state holiday."),

  // Module 5
  fq("How many hours of personal/carer's leave accrue a week for a 38-hour employee?", "1.462", ["2.923", "0.731", "3.8"], "76 ÷ 52."),
  fq("How much NSW long service leave is due after 10 years?", "2 months (about 8.67 weeks)", ["4 weeks", "13 weeks", "6 months"], "State law."),
  fq("What notice is due to a 50-year-old with 6 years' service?", "5 weeks", ["4 weeks", "3 weeks", "6 weeks"], "4 weeks + 1 for over 45."),
  fq("Is unused personal leave paid out on termination?", "No", ["Yes", "Only half", "Only after 10 years"], "Annual leave is."),
  fq("What does STP Phase 2 break gross pay into?", "Components such as overtime, allowances and leave types", ["Nothing — just a total", "GST and PAYG", "Only super"], "Disaggregation."),

  // Module 6
  fq("How often is NSW payroll tax lodged and paid?", "Monthly, with an annual reconciliation", ["Quarterly", "Annually only", "Weekly"], "Revenue NSW."),
  fq("What's the NSW payroll tax on $1,300,000 of annual wages?", "$5,450", ["$70,850", "$65,400", "$0"], "5.45% × $100,000."),
  fq("What's the monthly NSW threshold for a 28-day month in 2026–27?", "$92,055", ["$98,630", "$101,918", "$100,000"], "February."),
  fq("What are workers' compensation premiums based on?", "Wages and industry risk", ["Profit", "Number of clinics", "GST paid"], "icare."),
  fq("When should award rates be updated each year?", "From 1 July", ["1 January", "1 April", "Whenever convenient"], "Annual Wage Review."),
]
