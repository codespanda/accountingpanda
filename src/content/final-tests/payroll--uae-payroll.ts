import { fq } from "@/lib/finalTest"

// Final test bank for UAE Payroll — separate from the module knowledge checks.
// The correct answer is listed first; the test shuffles the options.

export default [
  // Module 1
  fq("Which Cabinet Resolution sets out the Labour Law's implementing rules?", "Cabinet Resolution No. 1 of 2022", ["Cabinet Decision No. 49 of 2023", "Ministerial Decision No. 82 of 2023", "Cabinet Resolution No. 10 of 2020"], "Executive regulations."),
  fq("What replaces gratuity for DIFC employees?", "The DEWS savings plan", ["GPSSA", "ILOE", "Nothing"], "DIFC Employee Workplace Savings."),
  fq("How many employees does Al Noor Interiors have?", "40", ["22", "64", "12"], "On the mainland."),
  fq("What's Mariam's basic salary?", "AED 12,000", ["AED 18,000", "AED 6,000", "AED 7,300"], "Housing AED 6,000."),
  fq("How much income tax does Fatima withhold from salaries?", "None", ["5%", "9%", "15%"], "No personal income tax."),

  // Module 2
  fq("What's the maximum normal working time a week?", "48 hours", ["40 hours", "45 hours", "60 hours"], "8 hours a day."),
  fq("What's the daily overtime limit in normal circumstances?", "2 hours", ["4 hours", "1 hour", "No limit"], "Cabinet Resolution."),
  fq("What's due to an employee who works on a public holiday?", "A substitute day off, or the day's wage plus 50%", ["Nothing extra", "Double pay always", "A bonus of AED 500"], "Public holiday work."),
  fq("Who bears recruitment and visa costs?", "The employer", ["The employee", "The government", "The recruitment agency only"], "Not deductible from wages."),
  fq("What's the night overtime pay for 4 hours at an hourly basic of AED 30?", "AED 180", ["AED 150", "AED 120", "AED 240"], "AED 45 × 4."),

  // Module 3
  fq("Through what kind of provider are WPS salaries paid?", "An approved bank, exchange house or financial institution", ["Any cash courier", "The FTA", "GPSSA"], "WPS agents."),
  fq("What does the SIF identify each employee by?", "Their MOHRE person ID", ["Their TRN", "Their EIN", "Their TFN"], "Salary information file."),
  fq("On which day after the due date is a labour dispute registered automatically for larger establishments?", "The 16th day", ["The 2nd day", "The 30th day", "The 90th day"], "For 25 or more workers."),
  fq("What may happen to an establishment's classification after persistent WPS breaches?", "It may be downgraded", ["It's upgraded", "Nothing", "It's moved to a free zone"], "MOHRE penalties."),
  fq("Should overtime be included in the SIF?", "Yes, as variable pay", ["No", "Only for nationals", "Only quarterly"], "Full salary through WPS."),

  // Module 4
  fq("How much annual leave does an employee with 9 months' service have accrued?", "2 days a month", ["30 days", "None", "1 day a month"], "Between 6 months and a year."),
  fq("How many sick days a year are unpaid after the paid bands?", "45", ["30", "15", "90"], "15 full, 30 half, 45 unpaid."),
  fq("How much bereavement leave is given for the death of a spouse?", "5 days", ["3 days", "10 days", "1 day"], "3 for other close relatives."),
  fq("After how much service can an employee take study leave?", "2 years", ["1 year", "6 months", "5 years"], "10 days a year."),
  fq("What's the encashment for 12 unused days at a daily basic of AED 600?", "AED 7,200", ["AED 6,000", "AED 3,600", "AED 12,000"], "On termination."),

  // Module 5
  fq("Is a part-year after five years counted for gratuity?", "Yes, pro rata", ["No", "Only if over 6 months", "Only for nationals"], "Partial years."),
  fq("What's the gratuity for 3 years at a daily basic of AED 300?", "AED 18,900", ["AED 27,000", "AED 9,000", "AED 6,300"], "21 × 3 × AED 300."),
  fq("Under which standard is the end-of-service provision accrued?", "IAS 19", ["IFRS 15", "IAS 2", "IAS 40"], "Employee benefits."),
  fq("What's the daily basic for a basic salary of AED 18,250?", "AED 600", ["AED 608.33", "AED 500", "AED 875"], "× 12 ÷ 365."),
  fq("How are unpaid leave days treated for gratuity?", "Excluded from service", ["Counted double", "Counted normally", "Paid separately"], "Service calculation."),

  // Module 6
  fq("Which fund covers Abu Dhabi nationals instead of GPSSA?", "The Abu Dhabi Pension Fund", ["DEWS", "ILOE", "The DIFC fund"], "Emirate fund."),
  fq("What's the minimum GPSSA contribution salary?", "AED 3,000", ["AED 1,000", "AED 6,000", "AED 20,000"], "Maximum AED 70,000."),
  fq("Below what contribution salary does the government pay 2.5% of the employer share?", "AED 20,000", ["AED 70,000", "AED 16,000", "AED 3,000"], "Private sector."),
  fq("What determines whether an employee pays the lower or higher ILOE premium?", "Whether basic salary is up to AED 16,000", ["Age", "Nationality", "Length of service"], "Two categories."),
  fq("What DEWS rate applies after five years' service?", "8.33% of basic", ["5.83%", "11%", "15%"], "Higher after five years."),
]
