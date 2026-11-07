import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Payroll Basics for Bookkeepers — lesson screens by module index (0 = Module 1).
// Legal figures checked against ssa.gov and ato.gov.au (November 2026).
const lessons: CourseLessons = {
  0: [
    screen(
      "Employees vs. contractors",
      compare(
        ["Employee", "Works under the business's direction and control. The business runs payroll: withholds tax, pays employer taxes and contributions.", ["On payroll", "Gets a W-2 (US) or STP reporting (Australia)"]],
        ["Contractor", "Runs their own business and controls how the work is done. Sends invoices; paid through accounts payable.", ["Not on payroll", "May need a 1099 (US)"]],
      ),
      caution("The label in the contract doesn't decide it — the real working relationship does. Misclassifying employees as contractors can mean back taxes, penalties and unpaid entitlements."),
    ),
    screen(
      "Pay frequencies",
      table(
        ["Frequency", "Pay periods a year", "Common in"],
        [
          ["Weekly", "52", "Hourly and casual workers"],
          ["Biweekly / fortnightly", "26", "US and Australian employers generally"],
          ["Semimonthly", "24", "US salaried staff (e.g. 15th and last day)"],
          ["Monthly", "12", "Salaried staff in many countries"],
        ],
      ),
      note("Biweekly (26 pays) and semimonthly (24 pays) are different. A $52,000 salary is $2,000 biweekly but about $2,166.67 semimonthly."),
    ),
    screen(
      "Records and payroll software",
      bullets(
        "Employee details: legal name, address, tax ID, start date, pay rate, tax forms and bank details.",
        "Time records for hourly staff.",
        "Each pay run: gross pay, every deduction, net pay and employer costs.",
        "Leave balances and payments made.",
        "Tax filings and payments to tax authorities and funds.",
      ),
      p("Most businesses use payroll software (e.g. Gusto, ADP, QuickBooks Payroll, Xero Payroll) that calculates withholdings with current tax tables and files reports."),
      tip("Software isn't a substitute for checking", "Payroll software is only as good as its setup. Check rates, tax settings and employee details whenever someone joins or changes."),
    ),
    check(
      1,
      q("What mainly decides whether a worker is an employee?", ["The job title", "The real working relationship and control", "What the contract is called", "How they're paid"], 1, "Substance beats labels."),
      q("How are contractors usually paid?", ["Through payroll", "Through accounts payable, from their invoices", "In cash only", "Through super funds"], 1, "Contractors bill the business."),
      q("How many pay periods are in a biweekly schedule?", ["24", "26", "12", "52"], 1, "Every two weeks = 26 pays."),
      q("A $52,000 salary is paid biweekly. What's each gross pay?", ["$2,166.67", "$2,000", "$1,000", "$4,333.33"], 1, "$52,000 ÷ 26 = $2,000."),
      q("Which record must be kept for each pay run?", ["Gross pay, deductions, net pay and employer costs", "Only net pay", "Only the bank transfer", "Nothing"], 0, "Full pay-run detail supports filings and audits."),
    ),
  ],
  1: [
    screen(
      "Salaried and hourly pay",
      compare(
        ["Salaried", "A fixed annual amount divided across pay periods.", ["$62,400 ÷ 26 = $2,400 per pay", "Same each period"]],
        ["Hourly", "Hours worked × hourly rate.", ["76 hours × $28 = $2,128", "Needs time records"]],
      ),
    ),
    screen(
      "Overtime",
      p("In the US, the Fair Labor Standards Act requires overtime of at least 1.5 times the regular rate for hours over 40 in a workweek for non-exempt employees. Australian overtime rules come from awards and agreements."),
      example(
        [
          ["Regular: 40 hours × $25", "$1,000.00"],
          ["Overtime: 6 hours × $37.50 (1.5 × $25)", "$225.00"],
        ],
        ["Gross pay for the week", "$1,225.00"],
      ),
      note("Some US states have stricter rules, such as daily overtime. Always check the state and local rules that apply."),
    ),
    screen(
      "Bonuses, commissions and leave",
      terms(
        ["Bonuses", "Extra pay for performance or occasions. Usually taxable wages, sometimes withheld at a different method or rate."],
        ["Commissions", "A percentage of sales, e.g. 5% of $40,000 = $2,000. Taxable wages."],
        ["Paid leave", "Vacation, annual, sick or holiday leave paid at the employee's rate. Track accruals and balances."],
        ["Leave loading", "In Australia, some awards add an extra percentage (often 17.5%) to annual leave pay."],
      ),
      tip("Track balances carefully", "Leave balances are a liability. Errors upset staff and can mean underpaid entitlements when someone leaves."),
    ),
    check(
      2,
      q("A $62,400 salary is paid biweekly. What's each gross pay?", ["$2,600", "$2,400", "$5,200", "$1,200"], 1, "$62,400 ÷ 26 = $2,400."),
      q("Under the US FLSA, what's the minimum overtime rate for non-exempt employees?", ["1.25×", "1.5×", "2×", "No overtime"], 1, "At least time and a half over 40 hours a week."),
      q("40 hours at $25 plus 6 overtime hours at 1.5×. What's gross pay?", ["$1,150", "$1,225", "$1,300", "$1,000"], 1, "$1,000 + 6 × $37.50 = $1,225."),
      q("A 5% commission on $40,000 of sales is:", ["$200", "$2,000", "$4,000", "$20,000"], 1, "5% × $40,000 = $2,000."),
      q("Why are leave balances important to the bookkeeper?", ["They're a liability owed to employees", "They're income", "They're optional", "They're only for managers"], 0, "Unused leave is owed."),
    ),
  ],
  2: [
    screen(
      "Income tax withholding",
      p("Employers withhold income tax from each pay and send it to the tax authority on the employee's behalf."),
      terms(
        ["United States", "Federal income tax using the employee's Form W-4 and IRS withholding tables, plus state and local income tax where it applies."],
        ["Australia", "PAYG withholding using the employee's tax file number declaration and the ATO's tax tables."],
      ),
    ),
    screen(
      "Social security and retirement contributions",
      table(
        ["Country", "Item", "2026 figure"],
        [
          ["US", "Social Security (OASDI) — employee and employer each", "6.2% on wages up to $184,500"],
          ["US", "Medicare — employee and employer each", "1.45% on all wages"],
          ["US", "Additional Medicare — employee only", "0.9% on wages over $200,000"],
          ["Australia", "Superannuation guarantee — paid by the employer", "12% of qualifying earnings"],
        ],
      ),
      p("In the US, employees may also choose to put part of their pay into a 401(k) or similar plan; these are voluntary deductions."),
    ),
    screen(
      "Voluntary deductions and net pay",
      p("Example: US employee, biweekly gross pay $2,000. Income tax figures are illustrative — real amounts come from the tables."),
      example(
        [
          ["Gross pay", "$2,000.00"],
          ["Federal income tax (illustrative)", "($180.00)"],
          ["Social Security 6.2%", "($124.00)"],
          ["Medicare 1.45%", "($29.00)"],
          ["401(k) contribution 5%", "($100.00)"],
          ["Health insurance premium", "($60.00)"],
        ],
        ["Net pay", "$1,507.00"],
      ),
      caution("Deductions not required by law need the employee's written authorisation."),
    ),
    check(
      3,
      q("What is the 2026 US Social Security employee rate?", ["1.45%", "6.2%", "7.65%", "12%"], 1, "6.2%, on wages up to $184,500."),
      q("Is there a wage limit for regular Medicare tax?", ["Yes, $184,500", "No — it applies to all wages", "Yes, $7,000", "Only for employers"], 1, "Medicare applies to all wages."),
      q("What's Australia's superannuation guarantee rate?", ["9.5%", "11%", "12%", "15%"], 2, "12% of qualifying earnings."),
      q("Gross $2,000 less $493 of deductions gives net pay of:", ["$1,507", "$1,600", "$2,493", "$1,407"], 0, "$2,000 − $493 = $1,507."),
      q("What's needed for a voluntary deduction like a gym membership?", ["Nothing", "The employee's written authorisation", "Manager approval only", "A tax form"], 1, "Non-statutory deductions need consent."),
    ),
  ],
  3: [
    screen(
      "Employer payroll taxes",
      terms(
        ["US — FICA match", "Employer pays 6.2% Social Security (up to the wage base) and 1.45% Medicare, matching the employee."],
        ["US — FUTA", "Federal unemployment tax, 6.0% on the first $7,000 of each employee's wages, usually reduced to 0.6% by credits for state unemployment tax paid."],
        ["US — SUTA", "State unemployment tax; rates and wage bases vary by state and employer."],
        ["Australia — payroll tax", "A state and territory tax on wages above each jurisdiction's threshold."],
      ),
    ),
    screen(
      "Retirement contributions and benefits",
      bullets(
        "US employers may match 401(k) contributions, e.g. 3% of pay.",
        "Australian employers must pay super of 12% of qualifying earnings. Since 1 July 2026 (Payday Super), it must be paid with each pay run and reach the fund within 7 business days after payday.",
        "Employer-paid health insurance, workers' compensation insurance and other benefits add further cost.",
      ),
      note("Before 1 July 2026, Australian super was paid quarterly. Earnings paid up to 30 June 2026 followed the old quarterly rules."),
    ),
    screen(
      "The true cost of an employee",
      p("Same US employee, biweekly gross pay $2,000, first pay of the year:"),
      example(
        [
          ["Gross pay", "$2,000"],
          ["Employer Social Security 6.2%", "$124"],
          ["Employer Medicare 1.45%", "$29"],
          ["FUTA 0.6%", "$12"],
          ["401(k) match 3%", "$60"],
        ],
        ["Total cost to the employer", "$2,225"],
      ),
      tip("Budget beyond salary", "Employer taxes, contributions, insurance and benefits commonly add a significant percentage on top of wages — quote the full cost when owners plan hiring."),
    ),
    check(
      4,
      q("Who pays FUTA?", ["The employee", "The employer", "Both equally", "The state"], 1, "FUTA is an employer-only tax."),
      q("FUTA applies to how much of each employee's wages?", ["All wages", "The first $7,000", "The first $184,500", "Wages over $200,000"], 1, "FUTA's wage base is $7,000."),
      q("Since 1 July 2026, when must Australian super guarantee be paid?", ["Quarterly", "With each pay run, reaching the fund within 7 business days", "Yearly", "Whenever the employee asks"], 1, "That's Payday Super."),
      q("In the example, what's the total employer cost?", ["$2,000", "$2,165", "$2,225", "$1,507"], 2, "$2,000 + $124 + $29 + $12 + $60 = $2,225."),
      q("Australian payroll tax is set by:", ["The federal government only", "Each state and territory", "Super funds", "Employers"], 1, "It's a state and territory tax with its own thresholds."),
    ),
  ],
  4: [
    screen(
      "Payroll journal entries",
      h("Record the pay run (employee side)"),
      journal(
        [
          ["Wages expense", "$2,000", ""],
          ["Federal income tax payable", "", "$180"],
          ["Social Security and Medicare payable", "", "$153"],
          ["401(k) payable", "", "$100"],
          ["Health insurance payable", "", "$60"],
          ["Cash (net pay)", "", "$1,507"],
        ],
        "$2,000",
      ),
      h("Record employer taxes and contributions"),
      journal(
        [
          ["Payroll tax expense", "$165", ""],
          ["Retirement plan expense", "$60", ""],
          ["Social Security and Medicare payable", "", "$153"],
          ["FUTA payable", "", "$12"],
          ["401(k) payable", "", "$60"],
        ],
        "$225",
      ),
    ),
    screen(
      "Payroll clearing accounts",
      p("When a payroll provider debits the bank in several amounts (net pay, taxes, fees), a payroll clearing account helps match them."),
      steps(
        ["Post the payroll journal", "Credit Payroll clearing for the total cash the provider will take."],
        ["Match each bank debit", "Debit Payroll clearing for each withdrawal."],
        ["Check it clears", "The clearing account should return to zero."],
      ),
    ),
    screen(
      "Accruing wages and paying liabilities",
      p("If a pay period spans month-end, accrue the wages earned but not yet paid. Example: 3 working days of a $2,000 biweekly (10-day) pay fall in March:"),
      journal([["Wages expense", "$600", ""], ["Accrued wages", "", "$600"]], "$600"),
      h("Paying the tax liabilities"),
      journal([["Federal income tax payable", "$180", ""], ["Social Security and Medicare payable", "$306", ""], ["Cash", "", "$486"]], "$486"),
      caution("Withheld taxes are held in trust for the government. Paying them late brings penalties and interest — and in some countries personal liability for owners."),
    ),
    check(
      5,
      q("In the pay-run entry, what is debited?", ["Cash", "Wages expense (gross pay)", "Payroll taxes payable", "401(k) payable"], 1, "The full gross pay is the expense."),
      q("How much Social Security and Medicare is owed in total for this pay?", ["$153", "$306", "$124", "$29"], 1, "$153 withheld plus $153 employer share."),
      q("What should a payroll clearing account show after matching?", ["A large balance", "Zero", "A negative balance", "Gross pay"], 1, "It should clear to zero."),
      q("3 of 10 working days of a $2,000 pay fall in March. What's the accrual?", ["$200", "$600", "$1,400", "$2,000"], 1, "$2,000 × 3 ÷ 10 = $600."),
      q("Why must withheld taxes be paid on time?", ["They're held in trust for the government", "They're optional", "They're income", "They're refundable"], 0, "Late payment brings penalties and interest."),
    ),
  ],
  5: [
    screen(
      "Reconciling payroll liability accounts",
      table(
        ["Liability account", "Should equal"],
        [
          ["Income tax withheld payable", "Amounts withheld not yet paid to the tax authority"],
          ["Social Security and Medicare payable", "Employee and employer shares not yet deposited"],
          ["Retirement / super payable", "Contributions not yet sent to the plan or fund"],
          ["Accrued wages", "Wages earned but not yet paid"],
        ],
      ),
      tip("Clear means paid", "After each payment, the liability should fall back to zero or to the current period's amount. A growing balance means missed or misposted payments."),
    ),
    screen(
      "Year-end reporting and common mistakes",
      terms(
        ["US", "Form W-2 to each employee and the SSA by January 31; quarterly Form 941; annual Form 940 for FUTA; state filings."],
        ["Australia", "Pay events reported through Single Touch Payroll (STP) each pay run; STP finalisation after 30 June."],
      ),
      h("Common mistakes"),
      bullets(
        "Wrong employee tax details or classification.",
        "Missing overtime or using the wrong rate.",
        "Late tax deposits or super payments.",
        "Recording net pay as the wage expense.",
        "Not reconciling liability accounts.",
      ),
    ),
    screen(
      "Country differences — US and Australia",
      table(
        ["Topic", "United States", "Australia"],
        [
          ["Income tax", "Federal (Form W-4) plus state and local", "PAYG withholding (TFN declaration)"],
          ["Retirement", "Voluntary 401(k), optional employer match", "Compulsory super guarantee, 12%"],
          ["Social insurance", "Social Security and Medicare, shared", "No separate deduction — the Medicare levy is covered by PAYG withholding"],
          ["Unemployment", "FUTA and SUTA (employer)", "No unemployment payroll tax"],
          ["Reporting", "W-2, 941, 940", "Single Touch Payroll"],
        ],
      ),
      note("Rates and thresholds change, usually yearly. Confirm current figures with the IRS, SSA, ATO or your state revenue office before each new year."),
    ),
    check(
      6,
      q("A payroll tax liability keeps growing each month. What does it suggest?", ["Missed or misposted payments", "Higher profits", "Normal activity", "Lower wages"], 0, "Liabilities should clear after payment."),
      q("When are US Forms W-2 due to employees?", ["January 31", "April 15", "June 30", "December 31"], 0, "W-2s are due by January 31."),
      q("How do Australian employers report pay to the ATO each pay run?", ["Form 941", "Single Touch Payroll", "W-2", "BAS only"], 1, "STP reports each pay event."),
      q("Which is a common payroll recording mistake?", ["Recording net pay as the wage expense", "Recording gross pay as the expense", "Reconciling liabilities", "Keeping time records"], 0, "Wage expense is gross pay."),
      q("Which country has a compulsory employer retirement contribution?", ["United States", "Australia", "Both", "Neither"], 1, "Australia's super guarantee is compulsory."),
    ),
  ],
}

export default lessons
