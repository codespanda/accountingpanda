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

// Australia Payroll — lesson screens by module index (0 = Module 1). The course
// follows Bondi Bay Physio Group Pty Ltd, a Sydney clinic with 22 employees.
// Figures from 1 July 2026: national minimum wage $26.44 an hour ($1,004.90 a
// week); modern award rates up 4.75%; resident tax rates with 15% on $18,201–
// $45,000; super guarantee 12% of qualifying earnings, received by the fund
// within 7 business days after payday (Payday Super); NSW payroll tax 5.45%
// above $1.2 million. Award rates used in the case are illustrative — always
// check the current award.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The Australian Payroll Framework",
      ["Australian pay rules come from the Fair Work Act, the National Employment Standards and modern awards. This module sets up payroll for Bondi Bay Physio Group."],
      ["Apply the National Employment Standards", "Find the right modern award", "Pay at least the national minimum wage", "Tell employees from contractors", "Issue compliant pay slips"],
    ),
    screen(
      "Meet Bondi Bay Physio Group",
      p("Bondi Bay Physio Group Pty Ltd runs two clinics in Sydney with 22 employees. It pays weekly. Grace is its payroll officer."),
      table(
        ["Employee", "Role", "Type", "Pay"],
        [
          ["Mia", "Receptionist", "Full-time, 38 hours", "$30.00 an hour (award-based)"],
          ["Jack", "Physio aide", "Casual", "$28.00 base + 25% casual loading"],
          ["Sophie", "Physiotherapist", "Full-time", "$95,000 a year"],
          ["Ella", "Practice coordinator", "Full-time, 38 hours", "$32.00 an hour"],
        ],
      ),
    ),
    screen(
      "The National Employment Standards",
      table(
        ["Entitlement", "Minimum"],
        [
          ["Maximum weekly hours", "38 plus reasonable additional hours"],
          ["Annual leave", "4 weeks a year (5 for some shift workers)"],
          ["Personal/carer's leave", "10 days a year"],
          ["Compassionate leave", "2 days per occasion"],
          ["Family and domestic violence leave", "10 days' paid leave a year"],
          ["Parental leave", "Up to 12 months unpaid, with a right to request more"],
          ["Notice and redundancy pay", "Based on years of service"],
        ],
      ),
    ),
    screen(
      "Awards and the minimum wage",
      bullets(
        "Modern awards set minimum pay, penalty rates, allowances and overtime for industries and occupations.",
        "Enterprise agreements can replace the award if they pass the better-off-overall test.",
        "Award-free employees get at least the national minimum wage — $26.44 an hour ($1,004.90 a week) from 1 July 2026.",
        "Modern award rates rose by 4.75% from the same date.",
      ),
      tip("Find the award", "Grace uses Fair Work's Find my award tool and the Pay and Conditions Tool to confirm each role's award and rates."),
    ),
    screen(
      "Employees vs. contractors and pay slips",
      compare(
        ["Employee", "Works in the business; paid wages.", ["NES and award apply", "PAYG, super and STP"]],
        ["Contractor", "Runs their own business.", ["Invoices with ABN", "Super may still apply if paid mainly for labour"]],
      ),
      p("Every employee gets a pay slip within one working day of payday, showing pay period, hours, rates, gross and net pay, deductions and super contributions."),
    ),
    mistakes(
      ["Paying an award employee the national minimum", "Award rates are usually higher."],
      ["Forgetting the 1 July increase", "Award and minimum rates change each year."],
      ["Late pay slips", "Issue within one working day."],
      ["Assuming contractors never get super", "Contractors paid mainly for labour can be employees for super."],
    ),
    check(
      1,
      q("What's the national minimum wage from 1 July 2026?", ["$26.44 an hour", "$24.95 an hour", "$25.74 an hour", "$30.00 an hour"], 0, "$1,004.90 a week."),
      q("How much paid personal/carer's leave does the NES give a year?", ["10 days", "5 days", "15 days", "20 days"], 0, "For full-time employees."),
      q("Within how long must a pay slip be issued?", ["One working day of payday", "One week", "One month", "At year-end"], 0, "Fair Work rule."),
      q("By how much did modern award rates rise from 1 July 2026?", ["4.75%", "6%", "3.5%", "12%"], 0, "Annual Wage Review."),
      q("How much paid family and domestic violence leave does the NES give a year?", ["10 days", "5 days", "2 days", "None"], 0, "Paid leave."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Minimum check",
          ["Is Jack's $28.00 base rate above the national minimum wage?"],
          ["Yes — $28.00 is above $26.44. But Jack's award may set a higher rate for his classification — check it."],
        ],
        [
          "Exercise 2 — Weekly pay",
          ["What's Mia's ordinary weekly pay?"],
          ["38 × $30.00 = $1,140."],
        ],
      ),
    ),
    summary(
      ["The NES", "Modern awards and agreements", "National minimum wage", "Employees vs. contractors", "Pay slips"],
      "Start every employee with the right award, the right rate and the NES.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Calculating Pay",
      ["Grace calculates Bondi Bay's weekly pay, including overtime, penalties and casual loading."],
      ["Calculate ordinary hours pay", "Apply overtime and penalty rates", "Pay allowances", "Pay casuals correctly", "Understand salary packaging"],
    ),
    screen(
      "Overtime and penalty rates",
      p("Awards set overtime and penalty rates. Under the award terms in Bondi Bay's case, overtime is 1.5× for the first two hours and 2× after that, and Saturday work attracts a 25% penalty."),
      example([["Mia's overtime: 2 hours × $45", "$90"], ["2 hours × $60", "$120"]], ["Overtime pay", "$210"]),
    ),
    screen(
      "Allowances",
      bullets(
        "Awards may require allowances — for example, a laundry allowance for uniforms or a first-aid allowance.",
        "Allowances are reported separately in Single Touch Payroll.",
        "Some allowances are taxable and some count towards super; check each one.",
      ),
    ),
    screen(
      "Full-time, part-time and casual",
      table(
        ["Type", "Hours", "Paid leave", "Extra pay"],
        [
          ["Full-time", "38 a week", "Yes", "—"],
          ["Part-time", "Regular, fewer than 38", "Yes, pro rata", "—"],
          ["Casual", "No firm advance commitment", "No paid annual or personal leave", "25% casual loading"],
        ],
      ),
      example([["Jack's base rate", "$28.00"], ["Casual loading 25%", "$7.00"]], ["Casual hourly rate", "$35.00"]),
      note("Casuals can choose to convert to permanent employment after 6 months (12 months for small businesses) if they meet the tests."),
    ),
    screen(
      "Salaried employees and salary packaging",
      bullets(
        "A salary must cover at least what the award would pay for the hours worked, including overtime and penalties if the salary is meant to absorb them.",
        "Salary packaging lets employees take some pay as benefits — common in health and not-for-profit sectors.",
        "Salary sacrificed to super counts in qualifying earnings for super guarantee.",
      ),
      example([["Sophie's salary", "$95,000"], ["÷ 52 weeks", ""]], ["Weekly gross", "$1,826.92"]),
    ),
    mistakes(
      ["Paying all overtime at 1.5×", "Check the award's tiers."],
      ["No casual loading", "Casuals get 25% instead of paid leave."],
      ["Salaries below award entitlements", "Check the salary covers what the award would pay."],
      ["Lumping allowances into wages", "Report them separately."],
    ),
    check(
      2,
      q("What's the standard casual loading under most awards?", ["25%", "10%", "17.5%", "50%"], 0, "Instead of paid leave."),
      q("What's Jack's casual hourly rate on a $28.00 base?", ["$35.00", "$32.90", "$28.00", "$42.00"], 0, "$28 × 1.25."),
      q("What's Mia's pay for 4 hours of overtime under the case's award terms?", ["$210", "$180", "$240", "$120"], 0, "2 × $45 + 2 × $60."),
      q("Do casuals get paid annual leave?", ["No — they get casual loading instead", "Yes, 4 weeks", "Yes, 2 weeks", "Only after a year"], 0, "Casual employment."),
      q("What's Sophie's weekly gross on $95,000?", ["$1,826.92", "$1,583.33", "$2,000.00", "$7,916.67"], 0, "÷ 52."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Casual shift",
          ["Jack works 20 hours at the casual rate. What's his gross?"],
          ["20 × $35.00 = $700."],
        ],
        [
          "Exercise 2 — Saturday",
          ["Mia works a 4-hour Saturday shift with a 25% penalty. What's she paid for it?"],
          ["4 × $30.00 × 1.25 = $150."],
        ],
      ),
    ),
    summary(
      ["Overtime and penalty rates", "Allowances", "Full-time, part-time and casual", "Salaries and packaging"],
      "Read the award for every rate — the NES alone isn't enough.",
    ),
  ],

  2: [
    overview(
      "Module 3 — PAYG Withholding",
      ["Grace withholds tax from each pay using the employee's TFN declaration and the ATO tax tables."],
      ["Use TFN declarations", "Apply the tax tables", "Apply the tax-free threshold", "Add study loan withholding", "Report and pay withholding"],
    ),
    screen(
      "TFN declarations",
      bullets(
        "New employees complete a TFN declaration within 28 days of starting.",
        "If an employee doesn't give a TFN, withhold at the top rate — 47%.",
        "The declaration also shows whether they claim the tax-free threshold and have a study loan.",
      ),
    ),
    screen(
      "Tax rates and tables",
      table(
        ["Taxable income 2026–27", "Tax"],
        [
          ["$0 – $18,200", "Nil"],
          ["$18,201 – $45,000", "15c for each $1 over $18,200"],
          ["$45,001 – $135,000", "$4,020 plus 30c for each $1 over $45,000"],
          ["$135,001 – $190,000", "$31,020 plus 37c for each $1 over $135,000"],
          ["$190,001 and over", "$51,370 plus 45c for each $1 over $190,000"],
        ],
      ),
      p("Employers don't use these annual rates directly — they use the ATO's weekly, fortnightly or monthly tax tables, which include the 2% Medicare levy. Payroll software applies them automatically."),
    ),
    screen(
      "The tax-free threshold",
      p("An employee claims the tax-free threshold from only one employer at a time — usually their main job. A second job is taxed without it."),
      note("For Mia's $1,140 weekly pay, the ATO weekly table (claiming the tax-free threshold) gives withholding of about $180 — Grace uses the exact table amount from the software."),
    ),
    screen(
      "Study and training loans",
      p("Employees with a HELP or other study and training support loan have extra amounts withheld once their income passes the repayment threshold, using the ATO's study loan tables."),
    ),
    screen(
      "Reporting and paying",
      steps(
        ["Each pay", "Report gross and PAYG withheld through Single Touch Payroll."],
        ["BAS", "Report total withholding at W1 and W2."],
        ["Pay", "Medium withholders pay quarterly; large withholders pay more often."],
      ),
      journal([["Wages expense", "1,140", ""], ["PAYG withholding payable", "", "180"], ["Bank", "", "960"]], "1,140"),
    ),
    mistakes(
      ["Two employers both applying the tax-free threshold", "Only one should."],
      ["Ignoring a missing TFN", "Withhold 47% after 28 days."],
      ["Forgetting study loan withholding", "Use the study loan tables."],
      ["Using last year's tables", "Tables change from 1 July."],
    ),
    check(
      3,
      q("What's the tax rate on income from $18,201 to $45,000 in 2026–27?", ["15%", "16%", "19%", "30%"], 0, "Reduced from 16%."),
      q("At what rate is tax withheld when no TFN is given?", ["47%", "30%", "45%", "15%"], 0, "Top rate including Medicare levy."),
      q("Within how many days must a new employee give a TFN declaration?", ["28", "7", "14", "90"], 0, "Then 47% applies."),
      q("From how many employers can the tax-free threshold be claimed at once?", ["One", "Two", "Any number", "None"], 0, "Usually the main job."),
      q("What do the ATO tax tables include besides income tax?", ["The 2% Medicare levy", "GST", "Super", "Payroll tax"], 0, "Withholding."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Annual tax",
          ["What's the 2026–27 tax (before Medicare levy) on taxable income of $60,000?"],
          ["$4,020 + 30% × $15,000 = $8,520."],
        ],
        [
          "Exercise 2 — No TFN",
          ["Jack hasn't provided his TFN 30 days after starting. What should Grace do?"],
          ["Withhold at 47% from his pay until he provides it."],
        ],
      ),
    ),
    summary(
      ["TFN declarations", "2026–27 rates and tax tables", "Tax-free threshold", "Study loans", "Reporting and paying"],
      "Withhold from the tables — and keep each employee's declaration current.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Superannuation",
      ["Bondi Bay pays super under Payday Super. Grace calculates and pays it every week."],
      ["Calculate super on qualifying earnings", "Apply choice of fund and stapled funds", "Pay within 7 business days", "Avoid the super guarantee charge"],
    ),
    screen(
      "Super guarantee",
      p("Employers pay super guarantee of 12% of each eligible employee's qualifying earnings — ordinary time earnings plus salary sacrifice and certain commissions. Overtime isn't included."),
      table(
        ["Employee", "Qualifying earnings this week", "Super at 12%"],
        [
          ["Mia (ordinary hours; overtime excluded)", "$1,140.00", "$136.80"],
          ["Jack (20 casual hours incl. loading)", "$700.00", "$84.00"],
          ["Sophie", "$1,826.92", "$219.23"],
        ],
      ),
      note("Casual loading is part of ordinary time earnings, so it attracts super. There's no minimum earnings threshold — super applies from the first dollar."),
    ),
    screen(
      "Choice of fund and stapled funds",
      steps(
        ["Offer choice", "Give new employees a Standard choice form."],
        ["Stapled fund", "If they don't choose, request their stapled fund from the ATO."],
        ["Default", "If there's no stapled fund, pay into the employer's default fund."],
      ),
    ),
    screen(
      "Payday Super",
      bullets(
        "From 1 July 2026, super is on time only if the employee's fund receives it within 7 business days after payday.",
        "Bondi Bay pays wages every Thursday and sends super through its clearing house the same day.",
        "Payments go through SuperStream with the data needed to allocate them.",
      ),
      caution("A business day excludes weekends and any public holiday for a whole state or territory — even one outside NSW."),
    ),
    screen(
      "The super guarantee charge",
      p("If super is late or short, the employer pays the super guarantee charge (SGC) — the shortfall plus interest and an administrative uplift — and it isn't tax deductible."),
      journal([["Superannuation expense", "440.03", ""], ["Super payable", "", "440.03"]], "440.03"),
    ),
    mistakes(
      ["Paying super on overtime", "Overtime isn't qualifying earnings."],
      ["Skipping casual loading", "It's part of qualifying earnings."],
      ["Paying super quarterly", "Pay within 7 business days after payday."],
      ["Ignoring stapled funds", "Request them when no choice is made."],
    ),
    check(
      4,
      q("What's the super guarantee rate in 2026–27?", ["12%", "11.5%", "10%", "15%"], 0, "Of qualifying earnings."),
      q("Is overtime included in qualifying earnings?", ["No", "Yes", "Only for casuals", "Only on weekends"], 0, "Excluded."),
      q("What's the super on Jack's $700 of casual pay?", ["$84.00", "$67.20", "$70.00", "$0"], 0, "Casual loading is included."),
      q("What happens if an employee doesn't choose a fund?", ["The employer requests their stapled fund", "No super is paid", "The ATO keeps it", "The employer chooses any fund"], 0, "Stapled fund."),
      q("Is the super guarantee charge tax deductible?", ["No", "Yes", "Only half", "Only for small businesses"], 0, "SGC."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Mia's week",
          ["Mia earns $1,140 ordinary pay and $210 overtime. What's her super?"],
          ["12% × $1,140 = $136.80 — overtime excluded."],
        ],
        [
          "Exercise 2 — Deadline",
          ["Payday is Thursday 3 December 2026. By when must super reach the funds?"],
          ["7 business days later — Monday 14 December 2026."],
        ],
      ),
    ),
    summary(
      ["12% of qualifying earnings", "Choice and stapled funds", "Payday Super", "The SGC"],
      "Super now moves with every pay — budget for it every payday.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Single Touch Payroll and Leave",
      ["Grace reports every pay through STP and manages leave, public holidays and terminations."],
      ["Report through STP Phase 2", "Accrue annual and personal leave", "Apply long service leave", "Pay public holidays", "Calculate termination pay", "Finalise STP"],
    ),
    screen(
      "STP Phase 2",
      bullets(
        "Each pay is reported to the ATO on or before payday from payroll software.",
        "Phase 2 breaks gross pay into components — salary and wages, overtime, allowances, paid leave by type, bonuses and salary sacrifice.",
        "Employees see their year-to-date amounts in myGov.",
      ),
    ),
    screen(
      "Leave accruals",
      table(
        ["Leave", "Full-time entitlement", "Weekly accrual (38-hour week)"],
        [
          ["Annual leave", "152 hours (4 weeks)", "2.923 hours"],
          ["Personal/carer's leave", "76 hours (10 days)", "1.462 hours"],
        ],
      ),
      p("Leave accrues progressively for each hour worked and isn't reduced for leave taken. Many awards add 17.5% annual leave loading when annual leave is taken."),
    ),
    screen(
      "Long service leave and public holidays",
      bullets(
        "Long service leave comes from state law — in NSW, 2 months (about 8.67 weeks) after 10 years, with pro-rata in some cases after 5 years.",
        "Employees who'd normally work on a public holiday get the day off with pay.",
        "Working on a public holiday usually attracts award penalty rates.",
      ),
    ),
    screen(
      "Termination pay",
      table(
        ["Service", "Notice", "Redundancy pay (NES)"],
        [
          ["Under 1 year", "1 week", "None"],
          ["1 to under 3 years", "2 weeks", "4 weeks (1–2 yrs) / 6 weeks (2–3 yrs)"],
          ["3 to under 5 years", "3 weeks", "7 weeks (3–4 yrs) / 8 weeks (4–5 yrs)"],
          ["5 years or more", "4 weeks", "10 weeks or more, rising with service"],
        ],
      ),
      bullets(
        "Add one week's notice if the employee is over 45 with at least 2 years' service.",
        "Businesses with fewer than 15 employees don't have to pay NES redundancy pay.",
        "Pay out unused annual leave (and long service leave as state law requires); unused personal leave isn't paid out.",
      ),
    ),
    screen(
      "Finalising STP",
      p("At the end of the financial year, employers make a finalisation declaration for each employee by 14 July, so the income statement shows as 'tax ready' in myGov."),
    ),
    mistakes(
      ["Paying out personal leave on termination", "It isn't paid out."],
      ["Forgetting the over-45 extra week", "Add a week's notice."],
      ["Accruing leave for casuals", "Casuals get loading instead."],
      ["Late STP finalisation", "By 14 July."],
    ),
    check(
      5,
      q("How many hours of annual leave does a full-time 38-hour employee accrue a year?", ["152", "76", "160", "200"], 0, "4 weeks."),
      q("What's the usual annual leave loading under many awards?", ["17.5%", "25%", "12%", "10%"], 0, "When leave is taken."),
      q("What NES redundancy pay is due after 4 years and 3 months?", ["8 weeks", "7 weeks", "6 weeks", "10 weeks"], 0, "4 to under 5 years."),
      q("Below how many employees is a business exempt from NES redundancy pay?", ["15", "20", "50", "100"], 0, "Small business exemption."),
      q("By when must STP be finalised for the year?", ["14 July", "30 June", "28 July", "31 October"], 0, "Finalisation declaration."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Notice",
          ["Ella is 38 with 4 years and 3 months' service. How much notice is due?"],
          ["3 weeks (3 to under 5 years); no extra week as she's under 45."],
        ],
        [
          "Exercise 2 — Leave payout",
          ["Ella has 60 hours' annual leave at $32 an hour and the award pays 17.5% loading on termination. What's paid?"],
          ["60 × $32 = $1,920 + 17.5% loading $336 = $2,256."],
        ],
      ),
    ),
    summary(
      ["STP Phase 2", "Leave accruals and loading", "Long service leave and public holidays", "Notice and redundancy", "Finalisation"],
      "Leave and termination are where payroll errors cost most — check the NES and the award.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Payroll Tax, Workers' Compensation and Compliance",
      ["Bondi Bay's wages are over the NSW threshold. Grace handles payroll tax, workers' compensation and the month's journals."],
      ["Calculate NSW payroll tax", "Understand workers' compensation", "Record payroll journals", "Use the payroll checklist"],
    ),
    screen(
      "Payroll tax",
      bullets(
        "Payroll tax is a state tax on employers' wages above a threshold.",
        "NSW: 5.45% on wages above $1.2 million a year — taxable wages include super contributions.",
        "Register when monthly Australian wages exceed the monthly threshold ($98,630 for a 30-day month in 2026–27).",
        "Lodge and pay monthly, with an annual reconciliation.",
      ),
      example([["November 2026 NSW wages including super", "$140,000"], ["Less monthly threshold (30 days)", "−$98,630"], ["× 5.45%", ""]], ["Payroll tax", "$2,254.67"]),
    ),
    screen(
      "Workers' compensation",
      bullets(
        "Employers must hold workers' compensation insurance — in NSW through icare.",
        "Premiums are based on wages and the industry's risk.",
        "Report injuries promptly and keep records.",
      ),
    ),
    screen(
      "Payroll journals",
      journal(
        [
          ["Wages expense", "1,350.00", ""],
          ["PAYG withholding payable", "", "250.00"],
          ["Bank", "", "1,100.00"],
        ],
        "1,350.00",
      ),
      journal([["Superannuation expense", "136.80", ""], ["Super payable", "", "136.80"]], "136.80"),
      note("This is Mia's week with overtime: $1,140 + $210 = $1,350 gross; withholding of about $250 from the weekly table."),
    ),
    screen(
      "Bondi Bay's payroll checklist",
      table(
        ["Area", "Check"],
        [
          ["Rates", "Award rates updated from 1 July; minimum wage met"],
          ["PAYG", "Current tax tables; TFN declarations on file"],
          ["Super", "12% of qualifying earnings; paid within 7 business days"],
          ["STP", "Every pay reported; finalised by 14 July"],
          ["Leave", "Accruals correct; termination payouts right"],
          ["State", "Payroll tax monthly; workers' compensation insured"],
        ],
      ),
    ),
    mistakes(
      ["Leaving super out of payroll tax wages", "NSW includes super."],
      ["Using the annual threshold monthly", "Use the monthly threshold."],
      ["No workers' compensation policy", "It's compulsory."],
      ["Not updating rates on 1 July", "Rates change every year."],
    ),
    check(
      6,
      q("What's the NSW payroll tax rate?", ["5.45%", "4.85%", "6%", "12%"], 0, "Above $1.2 million."),
      q("What's the annual NSW payroll tax threshold?", ["$1.2 million", "$900,000", "$75,000", "$2 million"], 0, "2026–27."),
      q("Are super contributions taxable wages for NSW payroll tax?", ["Yes", "No", "Only salary sacrifice", "Only above $1 million"], 0, "Included."),
      q("Who provides workers' compensation insurance in NSW?", ["icare", "The ATO", "Revenue NSW", "Fair Work"], 0, "Compulsory."),
      q("What's the monthly threshold for a 30-day month in 2026–27?", ["$98,630", "$100,000", "$92,055", "$101,918"], 0, "Revenue NSW."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Annual payroll tax",
          ["Bondi Bay's 2026–27 NSW wages including super are $1,650,000. What's the annual payroll tax?"],
          ["($1,650,000 − $1,200,000) × 5.45% = $24,525."],
        ],
        [
          "Exercise 2 — 31-day month",
          ["December wages are $150,000. What's the payroll tax using the 31-day threshold?"],
          ["($150,000 − $101,918) × 5.45% = $2,620.47."],
        ],
      ),
    ),
    summary(
      ["NSW payroll tax", "Workers' compensation", "Payroll journals", "The checklist"],
      "Payroll doesn't end at net pay — state taxes and insurance matter too.",
    ),
  ],
}

export default lessons
