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

// US Payroll — lesson screens by module index (0 = Module 1). The course
// follows Hill Country Coffee Roasters Inc. in Austin, Texas (no state income
// tax), which pays employees biweekly. 2026 figures from IRS Publication 15:
// Social Security 6.2% each on wages up to $184,500; Medicare 1.45% each with
// no limit; Additional Medicare Tax 0.9% withheld on wages over $200,000.
// FUTA 6.0% on the first $7,000 (0.6% after the full state credit). Texas
// unemployment tax: $9,000 wage base; new employers pay the higher of 2.7% or
// their industry average (2.7% for Hill Country).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — US Payroll Basics",
      ["US payroll follows federal, state and sometimes local rules. This module sets up Hill Country Coffee Roasters' payroll."],
      ["Know the layers of payroll rules", "Tell employees from contractors", "Complete new-hire paperwork", "Choose a pay frequency"],
    ),
    screen(
      "Meet Hill Country Coffee Roasters",
      p("Hill Country Coffee Roasters Inc. roasts and sells coffee in Austin, Texas. It pays employees every other Friday (biweekly). Jordan runs payroll."),
      table(
        ["Employee", "Role", "Pay"],
        [
          ["Ana", "Roaster (non-exempt)", "$22 an hour"],
          ["Ben", "Barista (non-exempt)", "$18 an hour"],
          ["Chloe", "Store manager (exempt)", "$1,600 a week salary"],
          ["Diego", "CEO (exempt)", "$250,000 a year"],
        ],
      ),
    ),
    screen(
      "Layers of payroll rules",
      table(
        ["Level", "Examples"],
        [
          ["Federal — Department of Labor", "Fair Labor Standards Act (FLSA): minimum wage, overtime, records"],
          ["Federal — IRS", "Income tax withholding, Social Security, Medicare, FUTA"],
          ["State", "State minimum wage, income tax, unemployment tax, new-hire reporting"],
          ["Local", "Some cities and counties have their own minimum wages or taxes"],
        ],
      ),
      note("Texas has no state income tax, so Jordan only withholds federal income tax — but Texas unemployment tax still applies."),
    ),
    screen(
      "Employee or contractor?",
      compare(
        ["Employee", "The business controls what is done and how.", ["Payroll taxes withheld", "Form W-2"]],
        ["Independent contractor", "Controls how the work is done.", ["No withholding", "Form 1099-NEC above $2,000"]],
      ),
      caution("The Department of Labor and the IRS each apply their own tests. Misclassification brings back taxes, penalties and back pay."),
    ),
    screen(
      "New-hire paperwork",
      steps(
        ["Form W-4", "The employee's federal withholding certificate."],
        ["Form I-9", "Employment eligibility — section 2 completed within three business days of the start date."],
        ["New-hire report", "Report to the state within 20 days (Texas: through the Texas Employer New Hire Reporting program)."],
        ["Pay details", "Direct deposit, benefits enrolment and any state forms."],
      ),
    ),
    screen(
      "Pay frequencies",
      table(
        ["Frequency", "Pay dates a year"],
        [
          ["Weekly", "52"],
          ["Biweekly", "26"],
          ["Semimonthly", "24"],
          ["Monthly", "12"],
        ],
      ),
      tip("Biweekly vs. semimonthly", "Chloe's $1,600 weekly salary is $3,200 biweekly — semimonthly pay would be $83,200 ÷ 24 = $3,466.67."),
    ),
    mistakes(
      ["Ignoring state rules", "Check state wage, tax and reporting laws."],
      ["Late I-9s", "Complete section 2 within three business days."],
      ["Treating workers as contractors to save tax", "Apply the tests."],
      ["Mixing up biweekly and semimonthly", "26 vs. 24 pay dates."],
    ),
    check(
      1,
      q("Which law sets federal minimum wage and overtime?", ["The FLSA", "FICA", "FUTA", "The Internal Revenue Code only"], 0, "Fair Labor Standards Act."),
      q("Within how many business days must Form I-9 section 2 be completed?", ["Three", "Ten", "Thirty", "One"], 0, "Of the start date."),
      q("How many pay dates does a biweekly payroll have?", ["26", "24", "52", "12"], 0, "Every other week."),
      q("Which state tax doesn't Hill Country withhold?", ["State income tax", "Unemployment tax", "Federal income tax", "Medicare"], 0, "Texas has no state income tax."),
      q("Which form does an employee complete for federal withholding?", ["Form W-4", "Form W-9", "Form I-9", "Form 941"], 0, "Withholding certificate."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Salary per period",
          ["An employee earns $62,400 a year. What's the gross pay per period paid (a) biweekly, (b) semimonthly?"],
          ["(a) $62,400 ÷ 26 = $2,400. (b) $62,400 ÷ 24 = $2,600."],
        ],
        [
          "Exercise 2 — New hire",
          ["Ben starts on Monday 2 November 2026. By when must his I-9 section 2 be completed?"],
          ["By Thursday 5 November 2026 — three business days after the start date."],
        ],
      ),
    ),
    summary(
      ["Federal, state and local rules", "Employees vs. contractors", "W-4, I-9 and new-hire reporting", "Pay frequencies"],
      "Set up each employee correctly before the first paycheck.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Gross Pay Under the FLSA",
      ["Jordan calculates gross pay for hourly and salaried employees, including overtime."],
      ["Apply federal and state minimum wages", "Classify exempt and non-exempt employees", "Calculate overtime", "Calculate salaried pay"],
    ),
    screen(
      "Minimum wage",
      bullets(
        "The federal minimum wage is $7.25 an hour.",
        "Where a state or city has a higher minimum, the employer pays the highest.",
        "Texas follows the federal $7.25 minimum.",
      ),
    ),
    screen(
      "Exempt or non-exempt?",
      p("Employees are exempt from overtime only if they meet both a salary test and a duties test (executive, administrative or professional)."),
      table(
        ["Test", "Federal requirement"],
        [
          ["Salary basis", "Paid a fixed salary not reduced for quality or quantity of work"],
          ["Salary level", "At least $684 a week"],
          ["Duties", "Primary duties meet the executive, administrative or professional test"],
        ],
      ),
      note("Chloe manages the store and two or more employees and earns $1,600 a week, so she's exempt. Ana and Ben are non-exempt."),
    ),
    screen(
      "Overtime",
      p("Non-exempt employees get 1.5 times their regular rate for hours over 40 in a workweek. Overtime is worked out week by week — two weeks can't be averaged."),
      example([["Ana — week 1", "44 hours"], ["Week 2", "40 hours"], ["Regular pay: 80 × $22", "$1,760"], ["Overtime: 4 × $33", "$132"]], ["Biweekly gross", "$1,892"]),
      caution("Some states, such as California, also require daily overtime. Texas follows the federal weekly rule."),
    ),
    screen(
      "Qualified overtime",
      p("For 2025–2028, workers can deduct up to $12,500 ($25,000 married filing jointly) of qualified overtime on their tax returns. Qualified overtime is only the 'half' portion of time-and-a-half, and employers must report it."),
      example([["Ana's overtime premium: 4 hours × $11", ""]], ["Qualified overtime to report", "$44"]),
    ),
    mistakes(
      ["Treating all salaried staff as exempt", "Both salary and duties tests must be met."],
      ["Averaging hours across two weeks", "Overtime is per workweek."],
      ["Paying below the state or city minimum", "Pay the highest applicable rate."],
      ["Reporting all overtime pay as qualified", "Only the half-time premium."],
    ),
    check(
      2,
      q("What is the federal minimum wage?", ["$7.25 an hour", "$10.00", "$15.00", "$12.00"], 0, "States may set higher."),
      q("What's the federal salary level for most overtime exemptions?", ["$684 a week", "$1,128 a week", "$455 a week", "$1,000 a week"], 0, "Plus a duties test."),
      q("What's Ana's biweekly gross with 44 and 40 hours at $22?", ["$1,892", "$1,848", "$1,936", "$1,760"], 0, "4 overtime hours at $33."),
      q("Can overtime be averaged over a two-week pay period?", ["No", "Yes", "Only for salaried staff", "Only in Texas"], 0, "Per workweek."),
      q("What part of overtime pay is 'qualified overtime'?", ["The half-time premium", "All overtime pay", "Regular pay", "Bonuses"], 0, "For the tax deduction."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Overtime",
          ["Ben works 46 hours and 38 hours at $18. What's his biweekly gross?"],
          ["Week 1: 40 × $18 + 6 × $27 = $882. Week 2: 38 × $18 = $684. Total $1,566."],
        ],
        [
          "Exercise 2 — Exempt?",
          ["An assistant earns a $650 weekly salary and supervises no one. Is she exempt?"],
          ["No — the salary is below $684 a week, so she's non-exempt and gets overtime."],
        ],
      ),
    ),
    summary(
      ["Minimum wage", "Exempt vs. non-exempt", "Weekly overtime at 1.5×", "Qualified overtime"],
      "Get gross pay right — every tax is calculated from it.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Employee Withholding",
      ["Jordan works out what's withheld from Ana's paycheck."],
      ["Withhold federal income tax with Publication 15-T", "Withhold Social Security up to the wage base", "Withhold Medicare and Additional Medicare Tax", "Handle state and local tax", "Apply pre-tax deductions"],
    ),
    screen(
      "Federal income tax",
      p("Employers use the employee's Form W-4 and the tables in IRS Publication 15-T to work out federal income tax withholding each pay period. Payroll software applies the tables automatically."),
      note("For Ana's paycheck, the Publication 15-T tables give federal income tax withholding of $140."),
    ),
    screen(
      "FICA",
      table(
        ["Tax", "Employee rate", "Wage limit (2026)"],
        [
          ["Social Security", "6.2%", "$184,500"],
          ["Medicare", "1.45%", "None"],
          ["Additional Medicare Tax", "0.9%", "On wages over $200,000"],
        ],
      ),
      example([["Diego's salary", "$250,000"], ["Social Security stops at $184,500 × 6.2%", "$11,439"]], ["Additional Medicare: ($250,000 − $200,000) × 0.9%", "$450"]),
    ),
    screen(
      "Pre-tax deductions",
      bullets(
        "Traditional 401(k) deferrals reduce wages for federal income tax, but not for Social Security and Medicare.",
        "Section 125 cafeteria-plan health premiums reduce wages for income tax and FICA.",
        "Roth 401(k) deferrals are after-tax.",
      ),
    ),
    screen(
      "Ana's net pay",
      example([["Gross", "$1,892.00"], ["401(k) 5%", "−$94.60"], ["Social Security 6.2%", "−$117.30"], ["Medicare 1.45%", "−$27.43"], ["Federal income tax", "−$140.00"]], ["Net pay", "$1,512.67"]),
      tip("State and local tax", "In states with income tax, add state (and sometimes local) withholding using the state's own certificate and tables."),
    ),
    mistakes(
      ["Withholding Social Security above $184,500", "Stop at the wage base."],
      ["Forgetting Additional Medicare Tax", "Withhold 0.9% over $200,000."],
      ["Reducing FICA wages for 401(k)", "401(k) deferrals are still FICA wages."],
      ["Using an old W-4", "Apply the latest form the employee gave."],
    ),
    check(
      3,
      q("What's the 2026 Social Security wage base?", ["$184,500", "$176,100", "$200,000", "No limit"], 0, "Publication 15 (2026)."),
      q("What's Ana's Social Security withholding on $1,892?", ["$117.30", "$27.43", "$144.74", "$94.60"], 0, "6.2%."),
      q("At what wages does Additional Medicare Tax withholding start?", ["Over $200,000", "Over $184,500", "Over $250,000", "From the first dollar"], 0, "0.9%, employee only."),
      q("Do traditional 401(k) deferrals reduce Social Security wages?", ["No", "Yes", "Only half", "Only above $100,000"], 0, "Only federal income tax wages."),
      q("Which IRS publication has the federal income tax withholding tables?", ["Publication 15-T", "Publication 946", "Publication 527", "Form W-2"], 0, "Used with Form W-4."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — FICA",
          ["Chloe's biweekly gross is $3,200. What are her Social Security and Medicare?"],
          ["Social Security $198.40; Medicare $46.40."],
        ],
        [
          "Exercise 2 — Wage base",
          ["An employee has $183,000 year-to-date and is paid $4,000. How much Social Security is withheld?"],
          ["Only $1,500 is under the base: $1,500 × 6.2% = $93."],
        ],
      ),
    ),
    summary(
      ["Publication 15-T withholding", "Social Security to $184,500", "Medicare and Additional Medicare", "Pre-tax deductions", "Net pay"],
      "Each deduction has its own base — work them out separately.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Employer Payroll Taxes",
      ["Hill Country also pays its own payroll taxes. Jordan works them out and records the payroll."],
      ["Calculate employer Social Security and Medicare", "Calculate FUTA", "Calculate state unemployment tax", "Record payroll journal entries"],
    ),
    screen(
      "Employer FICA",
      p("The employer matches Social Security (6.2% up to $184,500) and Medicare (1.45%). There's no employer Additional Medicare Tax."),
    ),
    screen(
      "FUTA",
      bullets(
        "Federal unemployment tax is 6.0% on the first $7,000 of each employee's wages a year.",
        "Employers that pay state unemployment tax on time generally get a credit of up to 5.4%, so the net rate is 0.6% — up to $42 per employee.",
        "Employers in credit-reduction states pay more.",
        "FUTA is paid only by the employer.",
      ),
    ),
    screen(
      "Texas unemployment tax",
      bullets(
        "Texas unemployment tax (SUTA) is paid on the first $9,000 of each employee's wages a year.",
        "New employers pay the higher of 2.7% or their industry's average rate — Hill Country's is 2.7%. Later rates depend on experience.",
        "Returns and payments are made quarterly to the Texas Workforce Commission.",
      ),
      example([["Ana's gross", "$1,892"], ["FUTA 0.6%", "$11.35"], ["Texas SUTA 2.7%", "$51.08"]], ["Employer unemployment taxes", "$62.43"]),
    ),
    screen(
      "Recording payroll",
      journal(
        [
          ["Wages expense", "1,892.00", ""],
          ["401(k) payable", "", "94.60"],
          ["Social Security payable", "", "117.30"],
          ["Medicare payable", "", "27.43"],
          ["Federal income tax payable", "", "140.00"],
          ["Cash", "", "1,512.67"],
        ],
        "1,892.00",
      ),
      journal(
        [
          ["Payroll tax expense", "207.16", ""],
          ["Social Security payable", "", "117.30"],
          ["Medicare payable", "", "27.43"],
          ["FUTA payable", "", "11.35"],
          ["SUTA payable", "", "51.08"],
        ],
        "207.16",
      ),
    ),
    mistakes(
      ["Withholding FUTA from employees", "FUTA is employer-only."],
      ["Charging FUTA above $7,000", "Stop at $7,000 per employee."],
      ["Charging Texas SUTA above $9,000", "Stop at the state wage base."],
      ["Matching Additional Medicare Tax", "There's no employer share."],
    ),
    check(
      4,
      q("What's the net FUTA rate after the full state credit?", ["0.6%", "6.0%", "5.4%", "2.7%"], 0, "On the first $7,000."),
      q("What's the maximum net FUTA per employee per year?", ["$42", "$420", "$7,000", "$378"], 0, "0.6% × $7,000."),
      q("What's the Texas SUTA wage base?", ["$9,000", "$7,000", "$184,500", "$20,000"], 0, "Per employee per year."),
      q("Who pays FUTA?", ["The employer only", "The employee only", "Both equally", "The state"], 0, "Employer tax."),
      q("Does the employer match Additional Medicare Tax?", ["No", "Yes", "Only over $250,000", "Only in Texas"], 0, "Employee only."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — FUTA cap",
          ["Ben has $6,800 of wages year-to-date and is paid $1,566. What FUTA is due?"],
          ["Only $200 is under $7,000: $200 × 0.6% = $1.20."],
        ],
        [
          "Exercise 2 — Employer cost",
          ["Chloe's biweekly gross is $3,200 and she's past both unemployment wage bases. What's the employer tax?"],
          ["Social Security $198.40 + Medicare $46.40 = $244.80."],
        ],
      ),
    ),
    summary(
      ["Employer FICA match", "FUTA 0.6% on $7,000", "Texas SUTA on $9,000", "Payroll journal entries"],
      "The true cost of an employee is gross pay plus the employer's taxes.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Deposits and Returns",
      ["Jordan deposits Hill Country's payroll taxes and files its returns on time."],
      ["Find the deposit schedule", "Deposit through EFTPS", "File Form 941 quarterly", "File Form 940 annually", "Avoid late-deposit penalties"],
    ),
    screen(
      "Deposit schedules",
      table(
        ["Lookback-period taxes", "Schedule", "Deposit by"],
        [
          ["$50,000 or less", "Monthly", "15th of the next month"],
          ["More than $50,000", "Semiweekly", "Wed/Thu/Fri paydays: next Wednesday; Sat–Tue paydays: next Friday"],
          ["$100,000 or more on any day", "Next-day rule", "Next business day"],
          ["Under $2,500 for the quarter", "With the return", "With Form 941"],
        ],
      ),
      note("The lookback period for Form 941 is the 12 months from 1 July two years ago to 30 June last year. Hill Country's was under $50,000, so it's a monthly depositor."),
    ),
    screen(
      "Making deposits",
      bullets(
        "Federal tax deposits are made electronically, usually through EFTPS.",
        "Deposits include withheld income tax, and both employee and employer Social Security and Medicare.",
        "FUTA is deposited quarterly once the liability is over $500.",
      ),
      example([["November withholding and FICA", "$9,800"]], ["Monthly depositor deadline", "15 December 2026"]),
    ),
    screen(
      "Forms 941 and 940",
      table(
        ["Form", "What", "Due"],
        [
          ["941", "Quarterly federal tax return — wages, withholding, FICA", "Last day of the month after the quarter (next business day if a weekend)"],
          ["940", "Annual FUTA return", "31 January (next business day if a weekend)"],
        ],
      ),
      p("The Q4 2026 Form 941 and the 2026 Form 940 are due on Monday 1 February 2027, because 31 January 2027 is a Sunday."),
    ),
    screen(
      "Penalties",
      bullets(
        "Late deposits are penalised at 2%, 5%, 10% or 15% depending on how late.",
        "Withheld taxes are trust fund taxes — responsible people can be personally liable for unpaid amounts.",
        "Late returns attract separate failure-to-file penalties.",
      ),
      caution("Never use withheld taxes to fund the business — the trust fund recovery penalty can make owners personally liable."),
    ),
    mistakes(
      ["Picking a deposit schedule by preference", "The lookback period decides it."],
      ["Depositing only the employee share", "Deposit both shares of FICA."],
      ["Missing the next-day rule", "$100,000 in a day must go next business day."],
      ["Filing 941 annually", "It's quarterly."],
    ),
    check(
      5,
      q("When does a monthly depositor deposit November taxes?", ["By 15 December", "By 30 November", "By 31 January", "With Form 941"], 0, "15th of the next month."),
      q("What lookback total makes an employer a semiweekly depositor?", ["More than $50,000", "More than $2,500", "More than $100,000", "Any amount"], 0, "Lookback period."),
      q("How often is Form 941 filed?", ["Quarterly", "Monthly", "Annually", "Semiweekly"], 0, "Employer's quarterly return."),
      q("When is the 2026 Form 940 due?", ["1 February 2027", "31 January 2027", "15 April 2027", "15 March 2027"], 0, "31 January 2027 is a Sunday."),
      q("What triggers the next-day deposit rule?", ["$100,000 or more of tax on any day", "$50,000 in a year", "A late Form 941", "Any bonus payment"], 0, "Next business day."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Due dates",
          ["When is the Q3 2026 Form 941 due?"],
          ["31 October 2026 is a Saturday, so Monday 2 November 2026."],
        ],
        [
          "Exercise 2 — Semiweekly",
          ["A semiweekly depositor pays wages on Friday 13 November 2026. When is the deposit due?"],
          ["The following Wednesday, 18 November 2026."],
        ],
      ),
    ),
    summary(
      ["Monthly and semiweekly schedules", "EFTPS deposits", "Forms 941 and 940", "Penalties and trust fund taxes"],
      "Deposit on schedule — withheld taxes are never the business's money.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Year-End Payroll",
      ["Jordan closes Hill Country's 2026 payroll year."],
      ["Prepare Forms W-2 and W-3", "Reconcile W-2s to Forms 941", "Follow a year-end checklist", "Keep payroll records"],
    ),
    screen(
      "Forms W-2 and W-3",
      bullets(
        "Form W-2 shows each employee's wages and withholding for the year.",
        "Form W-3 summarises all W-2s for the Social Security Administration.",
        "Both are due to employees and the SSA by 31 January — 1 February 2027 for the 2026 forms.",
        "W-2s also report items such as 401(k) deferrals, health coverage cost and qualified overtime.",
      ),
    ),
    screen(
      "Reconciling W-2s to Forms 941",
      table(
        ["W-2 total", "Should equal the four Forms 941"],
        [
          ["Box 1 — wages, tips, other compensation", "Federal taxable wages"],
          ["Box 2 — federal income tax withheld", "Income tax withheld"],
          ["Box 3 — Social Security wages", "Social Security wages"],
          ["Box 5 — Medicare wages", "Medicare wages"],
        ],
      ),
      caution("Differences must be found and corrected before filing — usually with Form 941-X or W-2c."),
    ),
    screen(
      "Year-end checklist",
      steps(
        ["Verify employee data", "Names, SSNs and addresses."],
        ["Final payroll", "Bonuses and fringe benefits included in the right year."],
        ["Reconcile", "W-2 totals to Forms 941, and FUTA wages to Form 940."],
        ["State", "Texas quarterly unemployment report and annual reconciliation."],
        ["File and furnish", "W-2s, W-3 and Form 940 by the deadlines."],
      ),
    ),
    screen(
      "Records",
      bullets(
        "Keep employment tax records for at least 4 years.",
        "The FLSA requires payroll records for at least 3 years and timecards for 2 years.",
        "Keep W-4s, I-9s (3 years after hire or 1 year after termination, whichever is later) and deposit confirmations.",
      ),
      tip("Fringe benefits", "Personal use of a company car or gift cards are taxable wages — add them before the last payroll of the year."),
    ),
    mistakes(
      ["Box 1 equal to gross pay", "Pre-tax 401(k) reduces Box 1."],
      ["Ignoring Form 941 differences", "Reconcile before filing."],
      ["Forgetting taxable fringe benefits", "Include them in wages."],
      ["Discarding I-9s too early", "Keep them for the required period."],
    ),
    check(
      6,
      q("What does Form W-3 do?", ["Summarises all W-2s for the SSA", "Reports FUTA", "Is the employee's withholding certificate", "Reports contractors"], 0, "Transmittal."),
      q("Why is W-2 Box 1 lower than gross pay for Ana?", ["Her pre-tax 401(k) deferrals", "Medicare tax", "She's exempt", "Texas has no income tax"], 0, "Box 1 excludes them."),
      q("How long must employment tax records be kept?", ["At least 4 years", "1 year", "6 months", "Forever"], 0, "IRS rule."),
      q("Which form corrects a filed Form 941?", ["Form 941-X", "Form W-2c", "Form 940", "Form W-4"], 0, "Adjusted return."),
      q("When are 2026 Forms W-2 due to employees?", ["1 February 2027", "15 January 2027", "15 April 2027", "31 March 2027"], 0, "31 January 2027 is a Sunday."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Box amounts",
          ["Ana earned $49,192 in 2026 and deferred $2,460 to her 401(k). What are W-2 Boxes 1 and 3?"],
          ["Box 1 $46,732; Box 3 $49,192."],
        ],
        [
          "Exercise 2 — Reconcile",
          ["W-2 Box 2 totals $41,250 but the four Forms 941 show $41,700. What next?"],
          ["Find the $450 difference — perhaps Diego's Additional Medicare Tax entered in the wrong place — and correct it."],
        ],
      ),
    ),
    summary(
      ["W-2s and W-3", "Reconciling to Forms 941", "Year-end checklist", "Records"],
      "Reconcile before you file — fixing W-2s later costs far more time.",
    ),
  ],
}

export default lessons
