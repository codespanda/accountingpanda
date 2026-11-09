import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
  exercises,
  h,
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
  terms,
  tip,
} from "@/lib/lessonKit"

// Payroll Basics for Bookkeepers — lesson screens by module index (0 = Module 1).
// The course follows Lakeside Bakery's US payroll, with an Australian
// comparison in Module 6. Legal figures checked against ssa.gov and
// ato.gov.au (November 2026); income tax amounts are illustrative.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Payroll Fundamentals",
      ["Payroll is one of the most sensitive jobs a bookkeeper does: people need to be paid correctly and on time, and taxes must reach the government. This module covers the basics every bookkeeper needs."],
      ["Tell employees from contractors", "Choose and apply pay frequencies", "Keep the payroll records that are required", "Use payroll software and providers sensibly"],
    ),
    screen(
      "Meet Lakeside Bakery",
      p("Lakeside Bakery, in Ohio, employs two people you'll follow through the course:"),
      table(
        ["Employee", "Pay basis", "Rate"],
        [
          ["Jordan, bakery manager", "Salaried", "$52,000 a year"],
          ["Sam, baker", "Hourly, non-exempt", "$22 an hour"],
        ],
      ),
      p("Lakeside also uses Dana, a freelance cake decorator, for wedding orders."),
    ),
    screen(
      "Employees vs. contractors",
      compare(
        ["Employee", "Works under the business's direction and control. The business runs payroll: withholds tax and pays employer taxes and contributions.", ["Jordan and Sam", "Receives a Form W-2 in the US"]],
        ["Contractor", "Runs their own business and controls how the work is done. Sends invoices; paid through accounts payable.", ["Dana, the cake decorator", "May need a Form 1099 in the US"]],
      ),
      caution("The contract's label doesn't decide it — the real working relationship does. Misclassifying employees as contractors can mean back taxes, penalties and unpaid entitlements."),
    ),
    screen(
      "Pay frequencies",
      table(
        ["Frequency", "Pays a year", "Jordan's gross pay"],
        [
          ["Weekly", "52", "$1,000.00"],
          ["Biweekly", "26", "$2,000.00"],
          ["Semimonthly", "24", "$2,166.67"],
          ["Monthly", "12", "$4,333.33"],
        ],
      ),
      p("Lakeside pays biweekly — every other Friday — so Jordan earns $52,000 ÷ 26 = $2,000 a pay."),
      note("Biweekly (26 pays) and semimonthly (24 pays) are easy to confuse — check which one the business uses."),
    ),
    screen(
      "Payroll records you must keep",
      bullets(
        "Employee details: legal name, address, tax ID, start date, pay rate, tax forms (e.g. Form W-4) and bank details.",
        "Time records for hourly staff like Sam.",
        "Each pay run: gross pay, every deduction, net pay and employer costs.",
        "Leave balances and leave paid.",
        "Tax filings and payments to tax authorities and benefit plans.",
      ),
      tip("Keep them secure", "Payroll records contain sensitive personal data. Limit access and keep them for as long as the law requires."),
    ),
    screen(
      "Payroll software and providers",
      p("Most small businesses use payroll software or a provider (for example Gusto, ADP, QuickBooks Payroll or Xero Payroll). It calculates withholdings with current tax tables, pays staff and files many reports."),
      steps(
        ["Set up employees carefully", "Pay rates, tax forms and deductions."],
        ["Approve each pay run", "Check hours, totals and any changes before submitting."],
        ["Record the payroll in the books", "Using the payroll report (Module 5)."],
        ["Reconcile liabilities", "Check taxes and deductions were paid over (Module 6)."],
      ),
      caution("Software is only as good as its setup. Check rates, tax settings and employee details whenever someone joins or changes."),
    ),
    mistakes(
      ["Treating workers as contractors to save tax", "The real relationship decides."],
      ["Confusing biweekly and semimonthly", "26 vs. 24 pays a year."],
      ["Missing time records for hourly staff", "They're needed to calculate pay and overtime."],
      ["Submitting pay runs without review", "Check before approving."],
    ),
    check(
      1,
      q("What mainly decides whether a worker is an employee?", ["The job title", "The real working relationship and control", "What the contract is called", "How they're paid"], 1, "Substance beats labels."),
      q("How is Dana, the freelance cake decorator, paid?", ["Through payroll", "Through accounts payable, from her invoices", "In cash only", "Through retirement funds"], 1, "Contractors bill the business."),
      q("How many pay periods are in a biweekly schedule?", ["24", "26", "12", "52"], 1, "Every two weeks."),
      q("Jordan earns $52,000 a year, paid biweekly. What's each gross pay?", ["$2,166.67", "$2,000", "$1,000", "$4,333.33"], 1, "$52,000 ÷ 26."),
      q("Which record must be kept for each pay run?", ["Gross pay, deductions, net pay and employer costs", "Only net pay", "Only the bank transfer", "Nothing"], 0, "Full detail supports filings."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Employee or contractor?",
          ["(a) A baker who works set shifts using the bakery's equipment and recipes. (b) A web designer who quotes a fixed price and works from her own studio."],
          ["(a) Likely an employee — direction and control. (b) Likely a contractor — her own business and methods."],
        ],
        [
          "Exercise 2 — Pay frequency",
          ["A $62,400 salary is paid semimonthly. What's each gross pay?"],
          ["$62,400 ÷ 24 = $2,600."],
        ],
      ),
    ),
    summary(
      ["Employees vs. contractors", "Pay frequencies and how they change each pay", "Payroll records to keep", "Using payroll software and providers"],
      "Payroll starts with getting the basics right: who is an employee, how often they're paid and what records you keep.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Gross Pay",
      ["Gross pay is what an employee earns before any deductions. This module covers salaried and hourly pay, overtime, bonuses, commissions and leave."],
      ["Calculate gross pay for salaried and hourly staff", "Apply overtime rules", "Include bonuses and commissions", "Handle paid leave"],
    ),
    screen(
      "Salaried and hourly pay",
      compare(
        ["Salaried — Jordan", "A fixed annual amount divided across pay periods.", ["$52,000 ÷ 26 = $2,000 per pay"]],
        ["Hourly — Sam", "Hours worked × hourly rate.", ["80 hours × $22 = $1,760 per pay"]],
      ),
    ),
    screen(
      "Overtime",
      p("In the US, the Fair Labor Standards Act requires overtime of at least 1.5 times the regular rate for hours over 40 in a workweek for non-exempt employees."),
      p("Sam worked 44 hours in week 1 and 40 hours in week 2 of the pay period."),
      example(
        [["Regular: 80 hours × $22", "$1,760"], ["Overtime: 4 hours × $33 (1.5 × $22)", "$132"]],
        ["Sam's gross pay", "$1,892"],
      ),
      caution("Overtime is worked out per workweek, not averaged across the pay period. Some states, such as California, also have daily overtime rules."),
    ),
    screen(
      "Exempt and non-exempt",
      terms(
        ["Non-exempt", "Entitled to overtime under the FLSA — most hourly staff, like Sam."],
        ["Exempt", "Not entitled to overtime because their job and salary meet specific tests — often managers and professionals, possibly like Jordan."],
      ),
      note("Being salaried doesn't automatically make someone exempt. The duties and salary tests decide."),
    ),
    screen(
      "Bonuses and commissions",
      table(
        ["Type", "Example", "Payroll treatment"],
        [
          ["Bonus", "Jordan's $500 holiday bonus", "Taxable wages, added to the pay run"],
          ["Commission", "5% of $8,000 of catering sales = $400", "Taxable wages"],
        ],
      ),
      tip("Bonuses and overtime", "Some bonuses must be included when calculating the overtime rate for non-exempt staff. Check the rules before paying a bonus to hourly employees."),
    ),
    screen(
      "Paid leave",
      bullets(
        "Vacation, sick and holiday pay are paid at the employee's rate.",
        "Track how much leave each employee has earned and used.",
        "Leave policies and state laws decide how leave builds up and whether it's paid out when someone leaves.",
      ),
      p("Sam takes 8 hours of vacation: 8 × $22 = $176 of vacation pay."),
    ),
    mistakes(
      ["Averaging overtime across two weeks", "Calculate it per workweek."],
      ["Assuming salaried means exempt", "Duties and salary tests decide."],
      ["Leaving bonuses out of taxable wages", "Bonuses are wages."],
      ["Not tracking leave balances", "They're owed to employees."],
    ),
    check(
      2,
      q("Sam works 80 regular hours at $22. What's his regular pay?", ["$1,760", "$1,892", "$2,000", "$1,320"], 0, "80 × $22."),
      q("Under the FLSA, what's the minimum overtime rate for non-exempt employees?", ["1.25×", "1.5×", "2×", "No overtime"], 1, "Time and a half over 40 hours a week."),
      q("What is Sam's overtime rate?", ["$22", "$33", "$44", "$27.50"], 1, "1.5 × $22."),
      q("A 5% commission on $8,000 of sales is:", ["$40", "$400", "$800", "$4,000"], 1, "5% × $8,000."),
      q("Does a salary automatically make an employee exempt from overtime?", ["Yes", "No — duties and salary tests decide", "Only in December", "Only for managers"], 1, "Being salaried isn't enough."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Overtime",
          ["Sam works 46 hours in week 1 and 38 hours in week 2. Calculate gross pay."],
          ["Week 1: 40 × $22 + 6 × $33 = $880 + $198 = $1,078.", "Week 2: 38 × $22 = $836.", "Gross pay = $1,914."],
        ],
        [
          "Exercise 2 — Bonus",
          ["Jordan receives a $500 bonus this pay. What's his gross pay?"],
          ["$2,000 + $500 = $2,500."],
        ],
      ),
    ),
    summary(
      ["Salaried and hourly gross pay", "FLSA overtime, per workweek", "Exempt vs. non-exempt", "Bonuses and commissions as wages", "Paid leave"],
      "Gross pay is the foundation of every pay run. Get hours, rates and overtime right, and the rest follows.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Deductions and Withholdings",
      ["Between gross pay and net pay come deductions: some required by law, some chosen by the employee. This module calculates Jordan's take-home pay."],
      ["Explain income tax withholding", "Calculate Social Security and Medicare", "Handle voluntary deductions", "Calculate net pay"],
    ),
    screen(
      "Income tax withholding",
      p("Employers withhold income tax from each pay and send it to the government on the employee's behalf."),
      terms(
        ["Federal income tax", "Calculated from the employee's Form W-4 and IRS withholding tables."],
        ["State and local income tax", "Where the state or city has one — Ohio has state income tax, and some Ohio cities have local income tax."],
      ),
      note("In this course, income tax amounts are illustrative. Real amounts come from the current tables in payroll software."),
    ),
    screen(
      "Social Security and Medicare (FICA)",
      table(
        ["Tax", "Employee rate (2026)", "Applies to"],
        [
          ["Social Security", "6.2%", "Wages up to $184,500 a year"],
          ["Medicare", "1.45%", "All wages"],
          ["Additional Medicare", "0.9%", "Wages over $200,000 (employee only)"],
        ],
      ),
      p("For Jordan's $2,000 pay: Social Security $124.00 and Medicare $29.00."),
      tip("Watch the wage base", "Once an employee earns $184,500 in the year, Social Security stops for the rest of that year — Medicare doesn't."),
    ),
    screen(
      "Voluntary deductions",
      terms(
        ["Retirement plans", "Jordan puts 5% of his pay into the bakery's 401(k) — $100 a pay."],
        ["Health insurance premiums", "Jordan's share is $60 a pay."],
        ["Other", "Union dues and charitable giving."],
      ),
      caution("Deductions not required by law need the employee's written authorisation."),
      note("Wage garnishments ordered by a court aren't voluntary — the employer must deduct them as ordered."),
    ),
    screen(
      "Calculating net pay",
      example(
        [
          ["Gross pay", "$2,000.00"],
          ["Federal income tax (illustrative)", "($180.00)"],
          ["Social Security 6.2%", "($124.00)"],
          ["Medicare 1.45%", "($29.00)"],
          ["401(k) contribution 5%", "($100.00)"],
          ["Health insurance premium", "($60.00)"],
        ],
        ["Jordan's net pay", "$1,507.00"],
      ),
      note("Pre-tax deductions such as many 401(k) contributions can reduce the wages subject to income tax — payroll software handles this."),
    ),
    mistakes(
      ["Forgetting state or local tax", "Check where the employee lives and works."],
      ["Continuing Social Security past the wage base", "It stops at $184,500 for the year."],
      ["Deducting without authorisation", "Get written consent for voluntary deductions."],
      ["Calculating net pay by hand without tables", "Use current tables in software."],
    ),
    check(
      3,
      q("What is the 2026 Social Security employee rate?", ["1.45%", "6.2%", "7.65%", "12%"], 1, "On wages up to $184,500."),
      q("Is there a wage limit for regular Medicare tax?", ["Yes, $184,500", "No — it applies to all wages", "Yes, $7,000", "Only for employers"], 1, "Medicare applies to all wages."),
      q("What is Social Security on Jordan's $2,000 pay?", ["$124", "$29", "$153", "$100"], 0, "6.2% × $2,000."),
      q("What is Jordan's net pay?", ["$1,507", "$1,600", "$1,847", "$1,407"], 0, "$2,000 − $493."),
      q("What's needed for a voluntary deduction like a charity donation?", ["Nothing", "The employee's written authorisation", "The bank's approval", "A tax form"], 1, "Non-required deductions need consent."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — FICA",
          ["Calculate Social Security and Medicare on Sam's $1,892 gross pay."],
          ["Social Security: $1,892 × 6.2% = $117.30.", "Medicare: $1,892 × 1.45% = $27.43."],
        ],
        [
          "Exercise 2 — Net pay",
          ["Gross $2,500; federal tax $240 (illustrative); FICA 7.65%; 401(k) $125. What's net pay?"],
          ["FICA = $191.25. Net pay = $2,500 − $240 − $191.25 − $125 = $1,943.75."],
        ],
      ),
    ),
    summary(
      ["Federal, state and local income tax withholding", "Social Security, Medicare and the 2026 wage base", "Voluntary deductions and authorisation", "Calculating net pay"],
      "Net pay = gross pay − taxes withheld − voluntary deductions. Every amount withheld must later reach the right place.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Employer Costs",
      ["An employee costs more than their salary. This module covers employer payroll taxes, retirement contributions and benefits — and the true cost of employing Jordan."],
      ["Calculate employer payroll taxes", "Include employer retirement contributions", "Account for benefits", "Work out the true cost of an employee"],
    ),
    screen(
      "Employer payroll taxes",
      terms(
        ["FICA match", "The employer pays 6.2% Social Security (up to the wage base) and 1.45% Medicare, matching the employee."],
        ["FUTA", "Federal unemployment tax: 6.0% on the first $7,000 of each employee's wages, usually reduced to 0.6% by credit for state unemployment tax paid."],
        ["SUTA", "State unemployment tax; rates and wage bases vary by state and employer."],
      ),
      note("FUTA and SUTA are paid by the employer only — nothing is withheld from employees for them in most states."),
    ),
    screen(
      "Retirement contributions and benefits",
      bullets(
        "Lakeside matches 401(k) contributions up to 3% of pay — $60 for Jordan's $2,000 pay.",
        "Employer-paid health insurance premiums.",
        "Workers' compensation insurance, required in most states.",
        "Other benefits, such as paid training or uniforms.",
      ),
    ),
    screen(
      "The true cost of Jordan",
      p("Jordan's first pay of the year:"),
      example(
        [
          ["Gross pay", "$2,000"],
          ["Employer Social Security 6.2%", "$124"],
          ["Employer Medicare 1.45%", "$29"],
          ["FUTA 0.6%", "$12"],
          ["SUTA (illustrative)", "$40"],
          ["401(k) match 3%", "$60"],
        ],
        ["Total cost to Lakeside", "$2,265"],
      ),
      tip("Budget beyond salary", "Employer taxes, contributions, insurance and benefits commonly add a significant percentage on top of wages. Use the full cost when planning hiring."),
    ),
    screen(
      "When FUTA stops",
      p("FUTA applies only to the first $7,000 of each employee's wages in a year."),
      table(
        ["Pay of the year", "Jordan's wages to date", "FUTA this pay"],
        [
          ["1st", "$2,000", "$12"],
          ["2nd", "$4,000", "$12"],
          ["3rd", "$6,000", "$12"],
          ["4th", "$8,000", "$6 (on the last $1,000)"],
          ["5th onwards", "Over $7,000", "$0"],
        ],
      ),
    ),
    mistakes(
      ["Budgeting only for salary", "Add employer taxes and benefits."],
      ["Withholding FUTA from employees", "It's an employer tax."],
      ["Forgetting the FUTA wage base", "It stops after $7,000 per employee."],
      ["Ignoring workers' compensation", "It's required in most states."],
    ),
    check(
      4,
      q("Who pays FUTA?", ["The employee", "The employer", "Both equally", "The state"], 1, "An employer-only tax."),
      q("FUTA applies to how much of each employee's wages?", ["All wages", "The first $7,000", "The first $184,500", "Wages over $200,000"], 1, "The FUTA wage base."),
      q("What's Lakeside's 401(k) match on Jordan's $2,000 pay?", ["$60", "$100", "$20", "$124"], 0, "3% × $2,000."),
      q("What's the total cost to Lakeside of Jordan's first pay?", ["$2,000", "$2,165", "$2,265", "$1,507"], 2, "Gross pay plus employer costs."),
      q("What is the usual net FUTA rate after state credits?", ["6.0%", "0.6%", "6.2%", "1.45%"], 1, "6.0% less up to 5.4% credit."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Employer taxes",
          ["Sam's gross pay is $1,892. Calculate employer Social Security, Medicare and FUTA (0.6%), assuming he's under both wage bases."],
          ["Social Security $117.30; Medicare $27.43; FUTA $11.35."],
        ],
        [
          "Exercise 2 — FUTA cut-off",
          ["An employee has earned $6,500 so far this year and is paid $1,200. How much FUTA (0.6%) is due?"],
          ["Only $500 is under the $7,000 base: $500 × 0.6% = $3."],
        ],
      ),
    ),
    summary(
      ["Employer FICA, FUTA and SUTA", "Employer retirement contributions and benefits", "The true cost of an employee", "When FUTA stops"],
      "The true cost of an employee is gross pay plus employer taxes and benefits — plan and record both.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Recording Payroll",
      ["The payroll report becomes journal entries in the books. This module records Jordan's pay run, employer costs, accrued wages and the payments of liabilities."],
      ["Write payroll journal entries", "Use a payroll clearing account", "Accrue wages at period end", "Record payments of payroll liabilities"],
    ),
    screen(
      "Recording the pay run",
      h("Employee side — Jordan's $2,000 pay"),
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
      note("Wages expense is always the gross pay — never the net pay."),
    ),
    screen(
      "Recording employer costs",
      journal(
        [
          ["Payroll tax expense", "$205", ""],
          ["Retirement plan expense", "$60", ""],
          ["Social Security and Medicare payable", "", "$153"],
          ["FUTA payable", "", "$12"],
          ["SUTA payable", "", "$40"],
          ["401(k) payable", "", "$60"],
        ],
        "$265",
      ),
      p("Payroll tax expense = $124 + $29 + $12 + $40 = $205."),
    ),
    screen(
      "Payroll clearing accounts",
      p("When a payroll provider takes money from the bank in several amounts — net pay, taxes and fees — a clearing account helps match them."),
      steps(
        ["Post the payroll journal", "Credit Payroll clearing for the total cash the provider will take."],
        ["Match each bank withdrawal", "Debit Payroll clearing for each one."],
        ["Check it clears", "The clearing account should return to zero."],
      ),
    ),
    screen(
      "Accruing wages at period end",
      p("If a pay period spans month end, accrue the wages earned but not yet paid. Three of the ten working days in Jordan's next pay period fall in March:"),
      journal([["Wages expense", "$600", ""], ["Accrued wages", "", "$600"]], "$600"),
      p("$2,000 × 3 ÷ 10 = $600. Reverse it on the first day of April."),
    ),
    screen(
      "Paying payroll liabilities",
      p("Lakeside deposits Jordan's federal income tax and both shares of Social Security and Medicare:"),
      journal([["Federal income tax payable", "$180", ""], ["Social Security and Medicare payable", "$306", ""], ["Cash", "", "$486"]], "$486"),
      caution("Withheld taxes are held in trust for the government. Paying them late brings penalties and interest — and in some cases personal liability for owners."),
    ),
    mistakes(
      ["Recording net pay as the wage expense", "Wages expense is gross pay."],
      ["Forgetting the employer's share", "Record employer taxes and contributions too."],
      ["Leaving the clearing account with a balance", "Investigate until it's zero."],
      ["Paying withheld taxes late", "They're held in trust."],
    ),
    check(
      5,
      q("In the pay-run entry, what is debited?", ["Wages expense (gross pay)", "Cash", "Payroll taxes payable", "401(k) payable"], 0, "Gross pay is the expense."),
      q("How much Social Security and Medicare is owed in total for Jordan's pay?", ["$153", "$306", "$124", "$29"], 1, "$153 withheld plus $153 employer share."),
      q("What should a payroll clearing account show after matching?", ["Zero", "A large balance", "A negative balance", "Gross pay"], 0, "It should clear."),
      q("3 of 10 working days of a $2,000 pay fall in March. What's the accrual?", ["$200", "$600", "$1,400", "$2,000"], 1, "$2,000 × 3 ÷ 10."),
      q("What's Lakeside's total payroll tax expense for Jordan's pay?", ["$153", "$205", "$265", "$12"], 1, "$124 + $29 + $12 + $40."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Sam's pay run",
          ["Sam: gross $1,892; federal tax $150 (illustrative); FICA $144.73; no other deductions. Write the employee-side entry."],
          ["Net pay = $1,892 − $150 − $144.73 = $1,597.27.", "Dr Wages expense $1,892 · Cr Federal income tax payable $150 · Cr Social Security and Medicare payable $144.73 · Cr Cash $1,597.27."],
        ],
        [
          "Exercise 2 — Accrual",
          ["A $1,760 biweekly pay covers 10 working days; 4 fall in this month. What's the accrual?"],
          ["$1,760 × 4 ÷ 10 = $704. Dr Wages expense $704 · Cr Accrued wages $704."],
        ],
      ),
    ),
    summary(
      ["Recording the employee side of a pay run", "Recording employer taxes and contributions", "Payroll clearing accounts", "Accruing wages at period end", "Paying payroll liabilities"],
      "Every pay run creates expenses and liabilities. Record both sides, then make sure every liability is paid and cleared.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reconciliation and Compliance",
      ["The last step is proving payroll liabilities are right and meeting year-end reporting. This module also compares US payroll with Australia's."],
      ["Reconcile payroll liability accounts", "Meet US year-end payroll reporting", "Avoid common payroll mistakes", "Compare US and Australian payroll"],
    ),
    screen(
      "Reconciling payroll liability accounts",
      table(
        ["Liability account", "Should equal"],
        [
          ["Federal income tax payable", "Withholding not yet deposited"],
          ["Social Security and Medicare payable", "Employee and employer shares not yet deposited"],
          ["401(k) payable", "Contributions not yet sent to the plan"],
          ["Accrued wages", "Wages earned but not yet paid"],
        ],
      ),
      tip("Clear means paid", "After each payment, the liability should fall back to zero or to the current period's amount. A growing balance means missed or misposted payments."),
    ),
    screen(
      "US year-end and periodic reporting",
      table(
        ["Form", "What it reports", "When"],
        [
          ["Form 941", "Federal income tax withheld and FICA", "Quarterly"],
          ["Form 940", "FUTA", "Annually"],
          ["Form W-2", "Each employee's annual wages and withholdings", "To employees and the SSA by January 31"],
          ["Form 1099-NEC", "Payments to contractors such as Dana, where required", "By January 31"],
        ],
      ),
      note("States have their own withholding and unemployment filings. Payroll software and providers file many of these — but the business remains responsible."),
    ),
    screen(
      "Common payroll mistakes",
      bullets(
        "Wrong employee tax details or classification.",
        "Missing overtime, or overtime averaged across weeks.",
        "Continuing Social Security past the wage base.",
        "Late tax deposits.",
        "Recording net pay as the wage expense.",
        "Not reconciling liability accounts.",
      ),
    ),
    screen(
      "Australia: how payroll differs",
      table(
        ["Topic", "United States", "Australia"],
        [
          ["Income tax", "Federal (Form W-4) plus state and local", "PAYG withholding (tax file number declaration)"],
          ["Retirement", "Voluntary 401(k), optional employer match", "Compulsory superannuation guarantee — 12% of qualifying earnings"],
          ["Social insurance", "Social Security and Medicare, shared", "No separate deduction — the Medicare levy is covered by PAYG withholding"],
          ["Unemployment", "FUTA and SUTA (employer)", "No unemployment payroll tax"],
          ["Reporting", "W-2, 941, 940", "Single Touch Payroll (STP) each pay run"],
        ],
      ),
    ),
    screen(
      "Payday Super in Australia",
      p("Since 1 July 2026, Australian employers must pay superannuation guarantee with each pay run, and it must reach the employee's fund within 7 business days after payday. Before that, super could be paid quarterly."),
      example(
        [["Fortnightly qualifying earnings", "$2,500"], ["Superannuation guarantee 12%", "$300"]],
        ["Paid to the fund within 7 business days of payday", "$300"],
      ),
      note("Rates and thresholds change, usually yearly. Confirm current figures with the IRS, SSA, ATO or your state revenue office before each new year."),
    ),
    mistakes(
      ["Waiting until year end to reconcile", "Reconcile payroll liabilities monthly."],
      ["Forgetting contractor reporting", "Check whether Form 1099 is required."],
      ["Paying Australian super quarterly after July 2026", "It's now due with each pay run."],
      ["Relying entirely on the provider", "The business stays responsible."],
    ),
    check(
      6,
      q("A payroll tax liability keeps growing each month. What does it suggest?", ["Missed or misposted payments", "Higher profits", "Normal activity", "Lower wages"], 0, "Liabilities should clear when paid."),
      q("When are US Forms W-2 due to employees?", ["January 31", "April 15", "June 30", "December 31"], 0, "Also to the SSA."),
      q("How do Australian employers report pay to the ATO each pay run?", ["Single Touch Payroll", "Form 941", "W-2", "Form 940"], 0, "STP reports each pay event."),
      q("Since 1 July 2026, when must Australian super reach the employee's fund?", ["Within 7 business days after payday", "Quarterly", "Yearly", "Whenever the employee asks"], 0, "That's Payday Super."),
      q("Which country has a compulsory employer retirement contribution?", ["Australia", "United States", "Both", "Neither"], 0, "The superannuation guarantee."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Reconcile",
          ["Social Security and Medicare payable shows $612 at month end. Two pay runs each created $306, and one deposit of $306 was made. Is it right?"],
          ["Expected balance = $612 − $306 = $306. The $612 suggests the deposit wasn't recorded — check the bank and record it, or deposit urgently if it wasn't made."],
        ],
        [
          "Exercise 2 — Australian super",
          ["An Australian employee's fortnightly qualifying earnings are $3,100. How much super is due, and by when?"],
          ["12% × $3,100 = $372, to reach the fund within 7 business days after payday."],
        ],
      ),
    ),
    summary(
      ["Reconciling payroll liability accounts", "US forms 941, 940, W-2 and 1099-NEC", "Common payroll mistakes", "US vs. Australian payroll", "Payday Super from 1 July 2026"],
      "Payroll isn't finished when people are paid — it's finished when every liability is paid, reconciled and reported.",
    ),
  ],
}

export default lessons
