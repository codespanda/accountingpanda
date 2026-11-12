import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
  exercises,
  journal,
  mistakes,
  note,
  overview,
  p,
  q,
  screen,
  steps,
  summary,
  table,
  tip,
} from "@/lib/lessonKit"

// UAE Payroll — lesson screens by module index (0 = Module 1). The course
// follows Al Noor Interiors LLC, a mainland Dubai fit-out company with 40
// employees, under Federal Decree-Law No. 33 of 2021 and Cabinet Resolution
// No. 1 of 2022. Pension for UAE nationals who joined from 31 October 2023
// (Federal Decree-Law No. 57 of 2023): employee 11%, employer 15% (government
// pays 2.5% of it where the contribution salary is under AED 20,000), on a
// contribution salary of AED 3,000–70,000. WPS: Ministerial Resolution No. 340
// of 2026 — salaries due on the 1st of each month (checked on u.ae).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The UAE Payroll Framework",
      ["UAE payroll has no income tax, but strict labour rules. This module sets up payroll for Al Noor Interiors."],
      ["Know the Labour Law and who it covers", "Tell mainland and free zone rules apart", "Read an employment contract's pay terms", "Separate basic from total salary"],
    ),
    screen(
      "Meet Al Noor Interiors",
      p("Al Noor Interiors LLC fits out offices across Dubai. It has 40 employees on the mainland, licensed by Dubai's economic department and registered with MOHRE. Fatima runs payroll."),
      table(
        ["Employee", "Role", "Basic", "Allowances", "Total monthly"],
        [
          ["Rahul", "Site supervisor", "AED 7,300", "Housing 2,500; transport 1,000", "AED 10,800"],
          ["Mariam (UAE national)", "Accountant", "AED 12,000", "Housing 6,000", "AED 18,000"],
          ["John", "Sales manager", "AED 18,250", "Housing 8,000", "AED 26,250"],
        ],
      ),
    ),
    screen(
      "The Labour Law",
      bullets(
        "Federal Decree-Law No. 33 of 2021 regulates private-sector employment, with details in Cabinet Resolution No. 1 of 2022.",
        "The Ministry of Human Resources and Emiratisation (MOHRE) registers contracts and enforces the law for mainland employers.",
        "Employment contracts are fixed-term (renewable) and must be registered with MOHRE.",
      ),
    ),
    screen(
      "Mainland and free zones",
      compare(
        ["Mainland and most free zones", "The federal Labour Law applies.", ["MOHRE or the free zone authority administers it"]],
        ["DIFC and ADGM", "Their own employment laws.", ["DIFC: DEWS savings plan instead of gratuity"]],
      ),
    ),
    screen(
      "Basic vs. total salary",
      p("Many entitlements are calculated on basic salary, not total salary — so the split in the contract matters."),
      table(
        ["Entitlement", "Based on"],
        [
          ["End-of-service gratuity", "Basic salary"],
          ["Overtime", "Basic salary"],
          ["Leave encashment on termination", "Basic salary"],
        ],
      ),
      note("There's no personal income tax in the UAE, so there's no tax withholding from salaries."),
    ),
    mistakes(
      ["Calculating gratuity on total salary", "Use basic salary."],
      ["Applying federal rules in DIFC", "DIFC has its own employment law."],
      ["Unregistered contracts", "Register with MOHRE."],
      ["Withholding income tax", "There's no personal income tax."],
    ),
    check(
      1,
      q("Which law governs private-sector employment in the UAE?", ["Federal Decree-Law No. 33 of 2021", "Federal Law No. 8 of 1980 only", "The DIFC Employment Law for all", "The Corporate Tax Law"], 0, "With Cabinet Resolution No. 1 of 2022."),
      q("Which authority registers mainland employment contracts?", ["MOHRE", "The FTA", "GPSSA", "Dubai Customs"], 0, "Ministry of Human Resources and Emiratisation."),
      q("On which salary is gratuity calculated?", ["Basic salary", "Total salary", "Housing allowance", "Net pay"], 0, "Not allowances."),
      q("Which free zones have their own employment laws?", ["DIFC and ADGM", "All free zones", "None", "JAFZA only"], 0, "Financial free zones."),
      q("What's Rahul's total monthly salary?", ["AED 10,800", "AED 7,300", "AED 9,800", "AED 8,300"], 0, "Basic plus allowances."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Salary split",
          ["A job offer gives a total of AED 15,000 with basic AED 6,000. Why should Fatima check the split?"],
          ["Gratuity and overtime are based on the AED 6,000 basic, so a low basic share reduces those entitlements."],
        ],
        [
          "Exercise 2 — Which law?",
          ["Al Noor opens a design office in DIFC. Which employment law applies there?"],
          ["The DIFC Employment Law, with DEWS contributions instead of gratuity."],
        ],
      ),
    ),
    summary(
      ["The Labour Law and MOHRE", "Mainland vs. DIFC and ADGM", "Basic vs. total salary", "No income tax withholding"],
      "Get the contract and the salary split right — most entitlements depend on them.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Pay, Hours and Overtime",
      ["Fatima calculates Al Noor's overtime and checks hours, rest days and deductions."],
      ["Apply working hour limits", "Calculate overtime", "Handle rest days and public holidays", "Keep deductions within the limits"],
    ),
    screen(
      "Working hours",
      bullets(
        "Normal working hours are up to 8 a day and 48 a week.",
        "Hours are reduced by 2 a day during Ramadan.",
        "Overtime can't exceed 2 hours a day, except in limited circumstances.",
      ),
    ),
    screen(
      "Overtime rates",
      table(
        ["When", "Rate"],
        [
          ["Normal overtime", "Hourly basic wage + 25%"],
          ["Between 10 pm and 4 am (not shift workers)", "Hourly basic wage + 50%"],
          ["On the weekly rest day", "Substitute rest day, or hourly basic wage + 50%"],
        ],
      ),
      example([["Rahul's daily basic: AED 7,300 × 12 ÷ 365", "AED 240"], ["Hourly basic: ÷ 8", "AED 30"], ["Normal overtime rate: + 25%", "AED 37.50"]], ["10 hours' overtime", "AED 375"]),
    ),
    screen(
      "Rest days and public holidays",
      bullets(
        "Employees get at least one paid rest day a week.",
        "Official public holidays are paid. If an employee works on one, they get a substitute day off or their wage for that day plus 50%.",
      ),
    ),
    screen(
      "Deductions from wages",
      bullets(
        "Deductions are allowed only in cases the law sets out — such as advances, loans, court orders and damage caused by the employee under the rules.",
        "Total deductions generally can't exceed 50% of the wage.",
        "Every deduction should be documented and shown on the payslip.",
      ),
      caution("Deducting visa or recruitment costs from wages isn't allowed — the employer bears them."),
    ),
    mistakes(
      ["Overtime on total salary", "Use the hourly basic wage."],
      ["Ignoring Ramadan hours", "Reduce by 2 hours a day."],
      ["Deducting recruitment fees", "The employer bears them."],
      ["Deducting over 50%", "Stay within the limit."],
    ),
    check(
      2,
      q("What's the normal overtime premium?", ["25% on the hourly basic wage", "50% on total salary", "100%", "10%"], 0, "Cabinet Resolution No. 1 of 2022."),
      q("What's the premium for overtime between 10 pm and 4 am?", ["50%", "25%", "75%", "100%"], 0, "Except shift workers."),
      q("By how much are daily hours reduced during Ramadan?", ["2 hours", "1 hour", "4 hours", "Not reduced"], 0, "For all private-sector employees."),
      q("What's Rahul's hourly basic wage?", ["AED 30", "AED 45", "AED 37.50", "AED 24"], 0, "AED 240 ÷ 8."),
      q("What's the general cap on total deductions?", ["50% of the wage", "20%", "100%", "10%"], 0, "Labour Law."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Night overtime",
          ["Rahul works 4 hours of overtime between 10 pm and 2 am. What's he paid?"],
          ["AED 30 × 1.5 = AED 45 × 4 = AED 180."],
        ],
        [
          "Exercise 2 — Daily rate",
          ["Mariam's basic is AED 12,000. What's her daily basic wage?"],
          ["AED 12,000 × 12 ÷ 365 = AED 394.52."],
        ],
      ),
    ),
    summary(
      ["8 hours a day, 48 a week", "Overtime at +25% and +50%", "Rest days and public holidays", "Deduction limits"],
      "Overtime and deductions follow the basic wage and the law's limits.",
    ),
  ],

  2: [
    overview(
      "Module 3 — The Wage Protection System",
      ["Al Noor pays every salary through the Wage Protection System (WPS), under Ministerial Resolution No. 340 of 2026."],
      ["Explain WPS", "Prepare the salary information file", "Meet the payment due date", "Know the escalating measures for late payment"],
    ),
    screen(
      "What WPS is",
      bullets(
        "WPS is an electronic salary transfer system developed by the Central Bank and used by MOHRE to monitor wage payments.",
        "Establishments registered with MOHRE must pay wages through WPS via banks, exchange houses or financial institutions authorised by the Central Bank.",
        "Wages can be paid in AED or another currency agreed in the contract.",
      ),
    ),
    screen(
      "The salary information file",
      steps(
        ["Prepare", "A salary information file (SIF) listing each employee's MOHRE person ID, bank details, fixed and variable pay and leave days."],
        ["Fund", "Transfer the total to the WPS agent."],
        ["Pay", "The agent credits each employee's account and reports to MOHRE."],
      ),
      journal(
        [
          ["Salaries expense", "425,000", ""],
          ["Bank", "", "425,000"],
        ],
        "425,000",
      ),
    ),
    screen(
      "The due date",
      bullets(
        "Under Ministerial Resolution No. 340 of 2026, salaries for the previous month are due on the first day of each Gregorian month.",
        "Employers must transfer at least 85% of the total wages due on time (where lawful deductions apply).",
      ),
      example([["November 2026 salaries", ""]], ["Due on", "1 December 2026"]),
    ),
    screen(
      "Measures for late payment",
      table(
        ["From", "Measure"],
        [
          ["The due date", "Electronic monitoring until payment is proven"],
          ["2nd day after the due date", "Notifications and alerts"],
          ["5th day", "New work permits suspended"],
          ["11th day", "Administrative fine and reclassification to the Third Category for a repeat within six months"],
          ["16th day", "Automatic labour dispute registration and permit suspension for establishments with 25 or more workers (and certain sectors)"],
          ["21st day", "Enforcement — executive instrument, attachment, travel ban and referral for larger establishments"],
        ],
      ),
      caution("Paying part of salaries outside WPS — in cash — is a breach even if the employee agrees."),
    ),
    mistakes(
      ["Paying on the 10th as a habit", "Salaries are due on the 1st."],
      ["Paying less than 85% on time", "At least 85% must go on the due date."],
      ["Wrong person IDs in the SIF", "Salaries won't be matched."],
      ["Paying some staff in cash", "Use WPS for all."],
    ),
    check(
      3,
      q("When are the previous month's salaries due under the 2026 WPS resolution?", ["The 1st of each month", "The 15th", "The 28th", "Any day in the month"], 0, "Ministerial Resolution No. 340 of 2026."),
      q("What share of total wages must be transferred on time?", ["At least 85%", "50%", "100% always", "10%"], 0, "Where lawful deductions apply."),
      q("What happens on the 5th day after the due date if wages are unpaid?", ["New work permits are suspended", "Nothing yet", "The company is closed", "Salaries are cancelled"], 0, "Escalating measures."),
      q("What file is sent to the WPS agent?", ["A salary information file (SIF)", "A VAT return", "Form 941", "An STP report"], 0, "SIF."),
      q("Can part of a salary be paid in cash outside WPS?", ["No", "Yes, if the employee agrees", "Only overtime", "Only in Ramadan"], 0, "Breach."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — SIF contents",
          ["List what Fatima's SIF shows for Rahul in November."],
          ["His MOHRE person ID, bank routing and account, fixed salary AED 10,800, variable pay (overtime), and any leave days."],
        ],
        [
          "Exercise 2 — Late payment",
          ["Al Noor (40 workers) pays November's salaries on 14 December. What has already happened?"],
          ["Salaries were due on 1 December. Alerts started on the 2nd day and new work permits were suspended from the 5th day; a fine and reclassification apply from the 11th day if it's a repeat within six months. Pay on the due date to avoid all of this."],
        ],
      ),
    ),
    summary(
      ["WPS", "The SIF", "Due on the 1st, at least 85% on time", "Escalating measures"],
      "Every dirham of salary goes through WPS, on the 1st of the month.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Leave",
      ["Fatima records leave for Al Noor's employees and works out leave pay."],
      ["Apply annual leave", "Apply sick leave", "Apply maternity and parental leave", "Know other leave types", "Calculate leave encashment"],
    ),
    screen(
      "Annual leave",
      bullets(
        "30 calendar days a year after one year's service.",
        "2 days a month for service between 6 months and a year.",
        "Paid at the employee's wage while on leave — check the contract for which allowances are included.",
        "Unused leave on termination is paid on basic salary.",
      ),
    ),
    screen(
      "Sick leave",
      table(
        ["Days in a year (after probation)", "Pay"],
        [
          ["First 15 days", "Full pay"],
          ["Next 30 days", "Half pay"],
          ["Next 45 days", "Unpaid"],
        ],
      ),
    ),
    screen(
      "Maternity, parental and other leave",
      table(
        ["Leave", "Entitlement"],
        [
          ["Maternity", "60 days — 45 at full pay and 15 at half pay"],
          ["Parental", "5 working days within 6 months of birth"],
          ["Bereavement", "5 days for a spouse; 3 days for a parent, child, sibling or grandparent"],
          ["Study", "10 days a year after 2 years' service, for UAE-accredited study"],
        ],
      ),
    ),
    screen(
      "Leave encashment",
      example([["John's unused leave on leaving", "12 days"], ["Daily basic: AED 18,250 × 12 ÷ 365", "AED 600"]], ["Encashment", "AED 7,200"]),
      tip("Track balances", "Fatima keeps a leave register so balances are clear on termination."),
    ),
    mistakes(
      ["Paying leave without checking the contract", "The contract sets which allowances apply during leave."],
      ["Full pay for all sick days", "15 full, 30 half, 45 unpaid."],
      ["Forgetting parental leave", "5 working days."],
      ["No leave register", "Keep balances up to date."],
    ),
    check(
      4,
      q("How much annual leave does an employee get after one year?", ["30 days", "21 days", "14 days", "45 days"], 0, "Calendar days."),
      q("How many sick days are paid at full pay each year?", ["15", "30", "45", "90"], 0, "Then half pay."),
      q("How long is maternity leave?", ["60 days", "45 days", "90 days", "26 weeks"], 0, "45 full + 15 half."),
      q("How many days of parental leave are given?", ["5 working days", "2 days", "10 days", "None"], 0, "Within 6 months of birth."),
      q("On what is unused leave encashed on termination?", ["Basic salary", "Total salary", "Housing allowance", "Nothing"], 0, "Basic."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Sick leave",
          ["Rahul has 20 sick days this year. How are they paid?"],
          ["15 at full pay and 5 at half pay."],
        ],
        [
          "Exercise 2 — Leave pay",
          ["Mariam's contract pays leave on total salary. What's her daily leave rate?"],
          ["AED 18,000 × 12 ÷ 365 = AED 591.78 a day."],
        ],
      ),
    ),
    summary(
      ["30 days' annual leave", "Sick leave pay bands", "Maternity, parental and other leave", "Leave encashment"],
      "Track leave carefully — it feeds both monthly pay and termination pay.",
    ),
  ],

  4: [
    overview(
      "Module 5 — End-of-Service Gratuity",
      ["John is leaving Al Noor after 7 years. Fatima calculates his gratuity and the monthly accrual for other staff."],
      ["Know who's entitled", "Calculate gratuity for the first five years", "Calculate gratuity after five years", "Apply the two-year cap", "Accrue gratuity monthly"],
    ),
    screen(
      "Who's entitled",
      bullets(
        "Full-time employees with at least one year's continuous service.",
        "Calculated on the last basic salary.",
        "Unpaid leave days are excluded from service.",
        "Paid within 14 days of the end of employment, with other dues.",
      ),
    ),
    screen(
      "The formula",
      table(
        ["Service", "Gratuity"],
        [
          ["First 5 years", "21 days' basic salary for each year"],
          ["Each year after 5", "30 days' basic salary for each year"],
          ["Cap", "Total can't exceed two years' wage"],
        ],
      ),
    ),
    screen(
      "John's gratuity",
      example([["Daily basic: AED 18,250 × 12 ÷ 365", "AED 600"], ["First 5 years: 5 × 21 = 105 days", "AED 63,000"], ["Next 2 years: 2 × 30 = 60 days", "AED 36,000"]], ["Gratuity", "AED 99,000"]),
      note("Partial years count pro rata."),
    ),
    screen(
      "Monthly accrual",
      p("Under IAS 19, Al Noor accrues gratuity monthly as an end-of-service provision."),
      example([["Rahul's daily basic", "AED 240"], ["21 days a year ÷ 12", "1.75 days a month"]], ["Monthly accrual", "AED 420"]),
      journal([["End-of-service benefit expense", "420", ""], ["Provision for end-of-service benefits", "", "420"]], "420"),
    ),
    mistakes(
      ["Using total salary", "Use basic salary."],
      ["Counting unpaid leave as service", "Exclude it."],
      ["Ignoring the two-year cap", "Check it for long service."],
      ["Paying gratuity late", "Within 14 days of the end of employment."],
    ),
    check(
      5,
      q("How many days' basic salary is gratuity for each of the first five years?", ["21", "30", "15", "45"], 0, "Then 30 days a year."),
      q("What's the minimum service for gratuity?", ["One year", "Six months", "Five years", "Two years"], 0, "Continuous service."),
      q("What's John's gratuity after 7 years on AED 600 a day?", ["AED 99,000", "AED 88,200", "AED 126,000", "AED 63,000"], 0, "165 days."),
      q("What's the cap on total gratuity?", ["Two years' wage", "One year's wage", "Five years' wage", "No cap"], 0, "Labour Law."),
      q("Within how long must gratuity be paid after employment ends?", ["14 days", "30 days", "60 days", "One year"], 0, "With other dues."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Three years",
          ["An employee with basic AED 9,125 leaves after 3 years. What's the gratuity?"],
          ["Daily basic AED 300 × 21 × 3 = AED 18,900."],
        ],
        [
          "Exercise 2 — Unpaid leave",
          ["An employee had 60 days' unpaid leave during 4 years. How is service counted?"],
          ["4 years less 60 days of unpaid leave — roughly 3.84 years for the calculation."],
        ],
      ),
    ),
    summary(
      ["Entitlement after one year", "21 then 30 days a year", "Two-year cap", "Monthly accrual under IAS 19"],
      "Gratuity is a growing liability — accrue it every month.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Pension, Insurance and Records",
      ["Fatima handles Mariam's pension contributions, unemployment insurance and Al Noor's payroll records."],
      ["Calculate pension contributions for UAE nationals", "Apply the ILOE scheme", "Recognise DIFC's DEWS", "Keep payroll records"],
    ),
    screen(
      "Pension for UAE nationals",
      p("UAE nationals in the private sector are registered with the General Pension and Social Security Authority (GPSSA) — or the Abu Dhabi Pension Fund in Abu Dhabi. For those who joined from 31 October 2023:"),
      table(
        ["Contribution", "Rate of contribution salary"],
        [
          ["Employee", "11%"],
          ["Employer", "15% — the government pays 2.5% of it if the salary is under AED 20,000"],
        ],
      ),
      example([["Mariam's contribution salary", "AED 18,000"], ["Employee 11%", "AED 1,980"], ["Employer 15%", "AED 2,700"], ["Government share 2.5%", "AED 450"]], ["Al Noor pays as employer", "AED 2,250"]),
      note("The contribution salary must be between AED 3,000 and AED 70,000. GCC nationals contribute under their home country's scheme."),
    ),
    screen(
      "Involuntary Loss of Employment insurance",
      bullets(
        "Most private-sector and federal government employees must join the Involuntary Loss of Employment (ILOE) scheme.",
        "The employee pays the premium — a lower amount for basic salaries up to AED 16,000 and a higher one above.",
        "It pays a share of basic salary for a limited period after involuntary job loss.",
      ),
      caution("Employees who don't subscribe face a fine — Fatima reminds new joiners during onboarding."),
    ),
    screen(
      "DIFC and DEWS",
      p("In DIFC, employers pay monthly contributions to the DIFC Employee Workplace Savings (DEWS) plan instead of gratuity — 5.83% of basic salary for the first five years and 8.33% after."),
    ),
    screen(
      "Records and checklist",
      table(
        ["Area", "Check"],
        [
          ["Contracts", "Registered with MOHRE; basic and allowances clear"],
          ["WPS", "SIF accurate; at least 85% paid on the 1st"],
          ["Overtime", "On hourly basic wage at the right premium"],
          ["Leave", "Register up to date"],
          ["Gratuity", "Accrued monthly; paid within 14 days of exit"],
          ["Pension and ILOE", "GPSSA contributions for nationals; ILOE subscriptions"],
        ],
      ),
    ),
    mistakes(
      ["Using the old 5% / 12.5% rates for new joiners", "From 31 October 2023, 11% and 15%."],
      ["Forgetting the government share", "2.5% for salaries under AED 20,000."],
      ["Paying gratuity in DIFC", "DEWS replaces it."],
      ["No ILOE reminder", "Employees must subscribe."],
    ),
    check(
      6,
      q("What's the employee pension rate for UAE nationals who joined from 31 October 2023?", ["11%", "5%", "12.5%", "15%"], 0, "GPSSA."),
      q("What's Al Noor's net employer contribution for Mariam?", ["AED 2,250", "AED 2,700", "AED 1,980", "AED 450"], 0, "15% less the government's 2.5%."),
      q("What's the maximum contribution salary for GPSSA?", ["AED 70,000", "AED 20,000", "AED 50,000", "No maximum"], 0, "Minimum AED 3,000."),
      q("Who pays the ILOE premium?", ["The employee", "The employer", "The government", "GPSSA"], 0, "Unemployment insurance."),
      q("What DEWS rate applies in DIFC for the first five years?", ["5.83% of basic", "8.33%", "12%", "15%"], 0, "8.33% after five years."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Pension above AED 20,000",
          ["An Emirati joins with a contribution salary of AED 25,000. What do the employee and employer pay?"],
          ["Employee 11% = AED 2,750. Employer 15% = AED 3,750 — no government share above AED 20,000."],
        ],
        [
          "Exercise 2 — DEWS",
          ["A DIFC employee earns basic AED 15,000 and has 3 years' service. What's the monthly DEWS contribution?"],
          ["5.83% × AED 15,000 = AED 874.50."],
        ],
      ),
    ),
    summary(
      ["GPSSA contributions", "ILOE", "DIFC DEWS", "Records and checklist"],
      "Nationals' pensions, unemployment insurance and gratuity complete the UAE payroll picture.",
    ),
  ],
}

export default lessons
