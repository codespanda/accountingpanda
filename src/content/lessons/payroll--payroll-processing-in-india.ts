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

// Payroll Processing in India — lesson screens by module index (0 = Module 1).
// The course follows Neelgiri Foods Pvt Ltd, a Pune food distributor, through
// its October 2026 payroll. Three sample employees are used throughout:
// Asha (₹19,000 gross), Rahul (₹30,000) and Meera (₹1,20,000).
// Rates reflect current notifications; always confirm before running payroll.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Payroll Foundations",
      ["Payroll pulls together employment law, tax and accounting every month. This module sets up the foundations for Neelgiri Foods."],
      ["Describe what a payroll cycle covers", "Set up employee master data and onboarding", "Plan pay periods and a payroll calendar", "Identify the Labour Codes and other laws behind payroll", "Choose payroll software or outsourcing"],
    ),
    screen(
      "Meet Neelgiri Foods",
      p("Neelgiri Foods Pvt Ltd distributes packaged foods from a warehouse in Pune, Maharashtra. It has 25 employees and runs a monthly payroll. Divya, the HR and payroll executive, processes it; Suresh, the finance manager, approves it."),
      table(
        ["Sample employee", "Role", "Monthly gross"],
        [
          ["Asha", "Warehouse assistant", "₹19,000"],
          ["Rahul", "Sales executive", "₹30,000"],
          ["Meera", "Finance manager", "₹1,20,000"],
        ],
        { numeric: [2] },
      ),
      p("We follow these three through October 2026's payroll."),
    ),
    screen(
      "What a payroll cycle covers",
      steps(
        ["Inputs", "Attendance, leave, joiners, leavers, overtime, changes."],
        ["Calculate", "Gross pay, deductions, employer contributions, TDS, net pay."],
        ["Check and approve", "Variance review and sign-off."],
        ["Pay", "Bank transfer by the due date; payslips issued."],
        ["Statutory payments and returns", "EPF, ESI, PT, LWF, TDS."],
        ["Account and reconcile", "Journal entries; ledger balances cleared."],
      ),
    ),
    screen(
      "Employee master data and onboarding",
      table(
        ["Data", "Why"],
        [
          ["Name, date of birth, gender, address", "Identification; some state rules differ by gender (e.g. PT)"],
          ["PAN", "Salary TDS — missing PAN means higher TDS"],
          ["Aadhaar and UAN", "EPF membership"],
          ["ESI IP number (if covered)", "ESI contributions and benefits"],
          ["Bank account", "Salary payment"],
          ["Salary structure, joining date, location", "Pay calculation and state laws"],
          ["Tax regime choice and declarations", "TDS"],
        ],
      ),
      caution("Personal data must be stored securely and accessed only by people who need it."),
    ),
    screen(
      "Pay periods and the payroll calendar",
      table(
        ["Date (for October 2026)", "Task"],
        [
          ["25 October", "Attendance and input cut-off"],
          ["28–30 October", "Process, review and approve"],
          ["31 October", "Pay salaries (Neelgiri pays on the last working day)"],
          ["7 November", "Deposit October TDS"],
          ["15 November", "Pay EPF and ESI; file the ECR and ESI return"],
          ["As per state rules", "Pay professional tax"],
        ],
      ),
      note("For a monthly wage period, wages must be paid by the 7th of the following month. Neelgiri pays earlier by choice."),
    ),
    screen(
      "The laws behind payroll",
      table(
        ["Law", "What it governs"],
        [
          ["Code on Wages, 2019", "Definition of wages, minimum wages, payment of wages, bonus, equal pay"],
          ["Code on Social Security, 2020", "EPF, ESI, gratuity, maternity benefit, employee's compensation"],
          ["Industrial Relations Code, 2020", "Standing orders, retrenchment, dispute resolution"],
          ["Occupational Safety, Health and Working Conditions Code, 2020", "Working hours, leave, overtime, welfare"],
          ["Income-tax Act, 2025", "Salary TDS from tax year 2026-27"],
          ["State laws", "Professional tax, labour welfare fund, shops and establishments"],
        ],
      ),
      p("The four Labour Codes came into force on 21 November 2025, replacing 29 older central labour laws."),
    ),
    screen(
      "Software or outsourcing",
      compare(
        ["Payroll software", "Run in-house with a payroll tool.", ["Control and confidentiality", "Needs trained staff", "Software updates handle rate changes"]],
        ["Outsourcing", "A provider runs payroll and filings.", ["Expertise and scale", "Less in-house effort", "You remain legally responsible"]],
      ),
      tip("Either way", "The employer stays responsible for compliance — review the provider's outputs every month."),
    ),
    mistakes(
      ["Incomplete master data", "Collect PAN, UAN and bank details at joining."],
      ["No input cut-off", "Late changes cause errors."],
      ["Assuming the old laws still apply", "The Labour Codes apply from 21 November 2025."],
      ["Trusting the provider blindly", "Review every payroll."],
    ),
    check(
      1,
      q("When did the four Labour Codes come into force?", ["21 November 2025", "1 April 2026", "1 April 2025", "They haven't"], 0, "Replacing 29 central laws."),
      q("Which Code covers EPF and ESI?", ["Code on Social Security, 2020", "Code on Wages, 2019", "Industrial Relations Code", "OSH Code"], 0, "Along with gratuity and maternity."),
      q("By when must monthly wages be paid?", ["By the 7th of the following month", "By the 15th", "By the 30th", "Any time"], 0, "Under the Code on Wages."),
      q("Which number is needed for salary TDS?", ["PAN", "UAN", "ESI IP number", "GSTIN"], 0, "Missing PAN means higher TDS."),
      q("Who is responsible for compliance when payroll is outsourced?", ["The employer", "Only the provider", "The bank", "The employees"], 0, "Review outputs."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Onboarding",
          ["A new employee joins without a UAN or PAN. What should Divya collect and do?"],
          ["Collect Aadhaar and bank details, generate a UAN on the EPFO portal, and ask for the PAN (TDS is deducted at a higher rate without it). Record the tax regime choice."],
        ],
        [
          "Exercise 2 — Calendar",
          ["List Neelgiri's key payroll dates for November 2026."],
          ["Input cut-off about 25 November; pay by 30 November (and no later than 7 December); deposit October's TDS by 7 November and November's by 7 December; pay October's EPF and ESI by 15 November and November's by 15 December; PT per Maharashtra rules."],
        ],
      ),
    ),
    summary(
      ["The payroll cycle", "Employee master data", "The payroll calendar", "The Labour Codes and other laws", "Software vs. outsourcing"],
      "Good payroll starts with complete data, a firm calendar and a clear view of the laws — now the Labour Codes.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Salary Structure and CTC",
      ["A salary structure decides tax, statutory contributions and employer cost. This module designs Neelgiri's structures under the Labour Codes."],
      ["Explain cost to company", "Use basic pay, HRA and common allowances", "Apply the definition of “wages” and the 50% rule", "Handle reimbursements and benefits", "Design structures that meet the Codes"],
    ),
    screen(
      "Cost to company (CTC)",
      table(
        ["Rahul — monthly", "Amount"],
        [
          ["Basic pay", "₹15,000"],
          ["HRA", "₹6,000"],
          ["Special allowance", "₹9,000"],
          ["Gross salary", "₹30,000"],
          ["Employer PF (12% of ₹24,000)", "₹2,880"],
          ["EDLI and admin charges (0.5% + 0.5%)", "₹240"],
        ],
        { footer: ["Monthly CTC (before gratuity and bonus provisions)", "₹33,120"], numeric: [1] },
      ),
      note("Many employers also show gratuity and bonus provisions in CTC. Explain clearly what CTC includes."),
    ),
    screen(
      "Basic pay, HRA and allowances",
      table(
        ["Component", "Purpose", "Notes"],
        [
          ["Basic pay", "Core fixed pay", "Base for PF, gratuity and HRA"],
          ["Dearness allowance", "Inflation adjustment", "Common in some sectors; part of wages"],
          ["HRA", "Rent support", "Tax-exempt only in the old regime"],
          ["Special allowance", "Balancing figure", "Part of wages under the Codes"],
          ["Conveyance, overtime, commission", "Specific purposes", "Excluded from wages, subject to the 50% rule"],
        ],
      ),
    ),
    screen(
      "“Wages” and the 50% rule",
      p("Under the Labour Codes, “wages” includes basic pay, dearness allowance and retaining allowance, and all remuneration except listed exclusions (such as HRA, conveyance, overtime, commission, bonus and employer's PF). If the exclusions exceed 50% of total remuneration, the excess is added back to wages."),
      table(
        ["A structure that fails the rule", "Amount"],
        [
          ["Basic ₹12,000 + special allowance ₹8,000", "₹20,000"],
          ["HRA ₹22,000 + conveyance ₹8,000 (excluded)", "₹30,000"],
          ["Total remuneration", "₹50,000"],
          ["Exclusions above 50% (₹30,000 − ₹25,000)", "₹5,000 added back"],
        ],
        { footer: ["“Wages” for PF, gratuity and other purposes", "₹25,000"], numeric: [1] },
      ),
      caution("Structures with low basic and high allowances no longer reduce PF and gratuity costs as they used to."),
    ),
    screen(
      "Reimbursements and benefits",
      bullets(
        "Reimbursements of actual business expenses (travel, client meals) are paid against bills — not salary.",
        "Benefits like meal cards, phone bills or car leases have their own tax treatment — some are taxable perquisites.",
        "Under the new tax regime, most allowance exemptions don't apply, so “flexible benefit plans” save less tax than before.",
      ),
    ),
    screen(
      "Designing compliant structures",
      bullets(
        "Pay at least the applicable minimum wage (and floor wage) for the employee's skill and location.",
        "Keep exclusions within 50% of total remuneration — or accept that the excess counts as wages.",
        "Apply equal pay for the same or similar work, regardless of gender.",
        "Check how the structure affects PF, ESI, gratuity, bonus and tax before offering it.",
      ),
      p("Neelgiri set basic pay at 50% of gross for every grade, so wages are predictable and the 50% rule is always met."),
    ),
    mistakes(
      ["Very low basic pay", "The 50% rule adds back the excess."],
      ["CTC that hides employer costs", "Show what's included."],
      ["Paying below minimum wage after deductions", "Check the wage floor."],
      ["Treating reimbursements as salary", "Pay against bills."],
    ),
    check(
      2,
      q("Which component is excluded from “wages” under the Codes?", ["HRA", "Basic pay", "Dearness allowance", "Retaining allowance"], 0, "Subject to the 50% rule."),
      q("What happens if exclusions exceed 50% of total remuneration?", ["The excess is added back to wages", "Nothing", "The employee is paid less", "PF stops"], 0, "The 50% rule."),
      q("Which statement about CTC is true?", ["It includes employer costs like PF on top of gross salary", "It equals take-home pay", "It excludes basic pay", "It's set by law"], 0, "Explain what's included."),
      q("How are actual business expense reimbursements paid?", ["Against bills, separate from salary", "As part of basic pay", "As bonus", "Never"], 0, "Not wages."),
      q("Which principle requires equal pay for the same work?", ["Equal remuneration under the Code on Wages", "Professional tax", "EDLI", "LWF"], 0, "Regardless of gender."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — 50% rule",
          ["Total remuneration ₹40,000: basic ₹14,000, HRA ₹16,000, conveyance ₹6,000, special allowance ₹4,000. Calculate wages."],
          ["Wages before add-back ₹18,000; exclusions ₹22,000; 50% limit ₹20,000; add back ₹2,000 → wages ₹20,000."],
        ],
        [
          "Exercise 2 — CTC",
          ["Asha: basic ₹10,000, HRA ₹4,000, special allowance ₹5,000. Employer PF on ₹15,000, ESI at 3.25% of gross. What's her monthly CTC (ignoring EDLI, admin, gratuity)?"],
          ["Gross ₹19,000 + PF ₹1,800 + ESI ₹618 = ₹21,418."],
        ],
      ),
    ),
    summary(
      ["CTC and its components", "Basic, HRA and allowances", "Wages and the 50% rule", "Reimbursements and benefits", "Compliant structure design"],
      "Under the Labour Codes, the definition of wages drives PF, gratuity and more — design structures with the 50% rule in mind.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Monthly Inputs and Gross Pay",
      ["Gross pay depends on accurate monthly inputs. This module collects Neelgiri's October inputs and calculates gross pay."],
      ["Handle attendance, leave and loss of pay", "Calculate overtime, arrears and bonuses", "Prorate pay for joiners and leavers", "Calculate gross pay", "Run pre-payroll checks and approvals"],
    ),
    screen(
      "Attendance, leave and loss of pay",
      bullets(
        "Attendance and approved leave come from the HR system by the cut-off.",
        "Unapproved absence beyond leave balance is loss of pay (LOP).",
        "Neelgiri calculates LOP on calendar days: monthly gross ÷ days in the month × LOP days.",
      ),
      example([["Rahul's gross", "₹30,000"], ["2 LOP days in a 31-day month: ₹30,000 × 2 ÷ 31", ""]], ["LOP deduction", "₹1,935"]),
      note("Some employers use 30 days or working days. Pick one method, write it in the policy and use it consistently."),
    ),
    screen(
      "Overtime, arrears and bonuses",
      table(
        ["Input", "Treatment"],
        [
          ["Overtime", "At least twice the ordinary rate of wages for hours beyond the limits"],
          ["Arrears", "Back pay for an increase from an earlier date — shown separately"],
          ["Bonus and incentives", "Added in the month paid"],
        ],
      ),
      p("Asha worked 6 hours of overtime in October. Her ordinary hourly rate is ₹15,000 wages ÷ 26 days ÷ 8 hours = ₹72.12, so overtime is 6 × ₹144.23 = ₹865."),
    ),
    screen(
      "Joiners, leavers and pro-rata pay",
      table(
        ["Event", "Example"],
        [
          ["Joiner on 20 October", "₹24,000 gross × 12 ÷ 31 = ₹9,290"],
          ["Leaver on 10 October", "₹30,000 gross × 10 ÷ 31 = ₹9,677"],
        ],
      ),
      tip("Statutory effects", "Pro-rata pay also changes PF and ESI for the month. ESI coverage is decided at the start of each contribution period."),
    ),
    screen(
      "Calculating gross pay",
      table(
        ["October 2026", "Asha", "Rahul", "Meera"],
        [
          ["Fixed monthly gross", "₹19,000", "₹30,000", "₹1,20,000"],
          ["LOP", "—", "—", "—"],
          ["Overtime", "— (paid next month)", "—", "—"],
        ],
        { footer: ["Gross pay", "₹19,000", "₹30,000", "₹1,20,000"], numeric: [1, 2, 3] },
      ),
      p("To keep the main example simple, Asha's October overtime is paid with November's payroll, and Rahul had no LOP in October."),
    ),
    screen(
      "Pre-payroll checks and approvals",
      bullets(
        "Headcount: last month + joiners − leavers = this month.",
        "Variance report: anyone whose gross changed by more than 10% — check why.",
        "New bank details verified with the employee.",
        "Inputs signed off by department heads.",
        "Total payroll compared with budget and last month.",
        "Suresh approves before payment.",
      ),
      caution("Changes to bank details are a common fraud route. Verify them directly with the employee."),
    ),
    mistakes(
      ["Inconsistent LOP method", "Use one documented method."],
      ["Overtime at the normal rate", "At least twice the ordinary rate."],
      ["Forgetting pro-rata statutory effects", "Recalculate PF and ESI."],
      ["Skipping the variance review", "It catches most errors."],
    ),
    check(
      3,
      q("What's the overtime rate under the Codes?", ["At least twice the ordinary rate", "1.5 times", "The normal rate", "Optional"], 0, "For hours beyond the limits."),
      q("Gross ₹31,000, 3 LOP days, 31-day month. LOP deduction?", ["₹3,000", "₹3,100", "₹1,000", "₹930"], 0, "₹31,000 × 3 ÷ 31."),
      q("An employee joins on 16 September (30-day month) at ₹45,000. September pay?", ["₹22,500", "₹45,000", "₹24,000", "₹21,000"], 0, "15 days of 30."),
      q("What does a variance report highlight?", ["Employees whose pay changed significantly", "Tax rates", "Bank balances", "Leave policies"], 0, "Check each one."),
      q("Why verify bank detail changes directly?", ["They're a common fraud route", "Banks require it", "It's optional", "To speed up payroll"], 0, "Confirm with the employee."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — LOP",
          ["Meera takes 3 LOP days in November (30 days). What's her November gross?"],
          ["₹1,20,000 − ₹1,20,000 × 3 ÷ 30 = ₹1,08,000."],
        ],
        [
          "Exercise 2 — Overtime",
          ["Rahul's wages are ₹24,000. Using 26 days and 8 hours, what's the pay for 4 overtime hours?"],
          ["Ordinary rate ₹24,000 ÷ 208 = ₹115.38; overtime rate ₹230.77; 4 hours = ₹923."],
        ],
      ),
    ),
    summary(
      ["Attendance, leave and LOP", "Overtime, arrears and bonuses", "Pro-rata pay", "Gross pay", "Pre-payroll checks"],
      "Accurate inputs and checks before calculation prevent most payroll errors.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Statutory Deductions and Salary TDS",
      ["From gross to net: this module calculates EPF, ESI, professional tax and TDS for Asha, Rahul and Meera."],
      ["Calculate EPF and ESI contributions", "Apply professional tax and LWF by state", "Calculate salary TDS under the new and old regimes", "Apply the standard deduction and rebate", "Use investment declarations and proofs", "Calculate net pay"],
    ),
    screen(
      "EPF contributions",
      table(
        ["October 2026", "Asha", "Rahul", "Meera"],
        [
          ["Wages (basic + special allowance)", "₹15,000", "₹24,000", "₹90,000"],
          ["PF wages (ceiling ₹25,000)", "₹15,000", "₹24,000", "₹25,000"],
          ["Employee 12%", "₹1,800", "₹2,880", "₹3,000"],
          ["Employer to EPS 8.33%", "₹1,250", "₹1,999", "₹2,083"],
          ["Employer to EPF (balance of 12%)", "₹550", "₹881", "₹917"],
        ],
        { numeric: [1, 2, 3] },
      ),
      note("The EPF wage ceiling rose from ₹15,000 to ₹25,000 from 17 September 2026. Neelgiri restricts contributions to the ceiling, as the scheme allows. Confirm the current pension rules on the EPFO portal."),
    ),
    screen(
      "ESI contributions",
      bullets(
        "ESI covers employees with wages up to ₹21,000 a month (₹25,000 for persons with disability).",
        "Employee 0.75% and employer 3.25% — each rounded up to the next rupee.",
        "Rahul and Meera are above the limit, so only Asha is covered.",
      ),
      example([["Asha's gross", "₹19,000"], ["Employee 0.75% = ₹142.50 → ₹143", ""], ["Employer 3.25% = ₹617.50 → ₹618", ""]], ["Total ESI", "₹761"]),
    ),
    screen(
      "Professional tax and LWF",
      table(
        ["Maharashtra professional tax (monthly)", "Amount"],
        [
          ["Men — gross up to ₹7,500", "Nil"],
          ["Men — ₹7,501 to ₹10,000", "₹175"],
          ["Men — above ₹10,000", "₹200 (₹300 in February)"],
          ["Women — gross up to ₹25,000", "Nil"],
          ["Women — above ₹25,000", "₹200 (₹300 in February)"],
        ],
      ),
      p("October PT: Asha nil, Rahul ₹200, Meera ₹200. Maharashtra LWF is deducted in June and December, so there's none in October."),
      note("PT and LWF are state laws — amounts, slabs and due dates differ. Check the current notification for each state."),
    ),
    screen(
      "Salary TDS — new and old regimes",
      table(
        ["Meera — tax year 2026-27, new regime", "Amount"],
        [
          ["Annual salary ₹1,20,000 × 12", "₹14,40,000"],
          ["Less: standard deduction", "(₹75,000)"],
          ["Taxable income", "₹13,65,000"],
          ["Tax: ₹20,000 + ₹40,000 + 15% × ₹1,65,000", "₹84,750"],
          ["Cess 4%", "₹3,390"],
        ],
        { footer: ["Annual tax", "₹88,140"], numeric: [1] },
      ),
      p("Monthly TDS: ₹88,140 ÷ 12 = ₹7,345. Asha (₹2.28 lakh a year) and Rahul (₹3.6 lakh) have no tax — no TDS."),
      tip("Rebate", "Under the new regime, no tax is payable on taxable income up to ₹12 lakh."),
    ),
    screen(
      "Declarations and proofs",
      bullets(
        "The new regime is the default; employees can opt for the old regime for TDS by declaring it.",
        "Old regime employees declare rent, investments and loans in April and submit proofs in January.",
        "TDS is recalculated on verified proofs; any shortfall is deducted from the remaining months.",
      ),
    ),
    screen(
      "Calculating net pay",
      table(
        ["October 2026", "Asha", "Rahul", "Meera"],
        [
          ["Gross pay", "₹19,000", "₹30,000", "₹1,20,000"],
          ["Employee PF", "(₹1,800)", "(₹2,880)", "(₹3,000)"],
          ["Employee ESI", "(₹143)", "—", "—"],
          ["Professional tax", "—", "(₹200)", "(₹200)"],
          ["TDS", "—", "—", "(₹7,345)"],
        ],
        { footer: ["Net pay", "₹17,057", "₹26,920", "₹1,09,455"], numeric: [1, 2, 3] },
      ),
    ),
    mistakes(
      ["Using the old ₹15,000 ceiling after 17 September 2026", "Update payroll to ₹25,000."],
      ["Rounding ESI down", "Round up to the next rupee."],
      ["One PT table for all states", "Each state has its own."],
      ["TDS without the rebate", "Under ₹12 lakh taxable income, there's no tax in the new regime."],
    ),
    check(
      4,
      q("What's the employee PF rate?", ["12% of PF wages", "8.33%", "3.67%", "0.75%"], 0, "Matched by the employer."),
      q("What's the ESI wage limit for coverage?", ["₹21,000 a month", "₹25,000 a month", "₹15,000 a month", "₹30,000 a month"], 0, "₹25,000 for persons with disability."),
      q("How are ESI contributions rounded?", ["Up to the next rupee", "Down", "To the nearest ten", "Not rounded"], 0, "Each share separately."),
      q("What's the employer's ESI rate?", ["3.25%", "0.75%", "4%", "12%"], 0, "Employee pays 0.75%."),
      q("Under the new regime, no tax applies to taxable income up to:", ["₹12 lakh", "₹7 lakh", "₹5 lakh", "₹4 lakh"], 0, "Via the rebate."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — ESI",
          ["An employee earns ₹20,500 gross. Calculate ESI."],
          ["Employee 0.75% = ₹153.75 → ₹154; employer 3.25% = ₹666.25 → ₹667."],
        ],
        [
          "Exercise 2 — Net pay",
          ["A male employee in Maharashtra earns ₹40,000 with wages of ₹28,000 and no TDS. Neelgiri restricts PF to the ceiling. What's his net pay in February?"],
          ["PF 12% × ₹25,000 = ₹3,000; PT ₹300 in February; net ₹40,000 − ₹3,000 − ₹300 = ₹36,700."],
        ],
      ),
    ),
    summary(
      ["EPF at the ₹25,000 ceiling", "ESI up to ₹21,000", "State PT and LWF", "Salary TDS and the rebate", "Declarations", "Net pay"],
      "Net pay is gross pay less PF, ESI, PT and TDS — each with its own ceiling, rate and rounding rule.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Payslips, Payment and Filings",
      ["With net pay calculated, Neelgiri pays its staff, files returns and records payroll in the books."],
      ["Issue compliant payslips", "Pay salaries on time", "Follow the statutory payment calendar", "File monthly and quarterly returns", "Record payroll journal entries and reconcile"],
    ),
    screen(
      "Payslips",
      bullets(
        "Employee name, ID, designation, UAN, ESI number, PAN.",
        "Pay period, days worked and LOP.",
        "Each earning and each deduction, with gross and net pay.",
        "Employer contributions (often shown for information).",
        "Year-to-date figures and tax regime.",
      ),
      note("Payslips should be given on or before payment — electronic payslips are common."),
    ),
    screen(
      "Paying salaries",
      table(
        ["Rule", "Detail"],
        [
          ["Monthly wage period", "Pay by the 7th of the following month"],
          ["Mode", "Bank transfer (or other permitted electronic modes)"],
          ["Deductions", "Only those authorised by law or the employee"],
        ],
      ),
      p("Neelgiri uploads a bank file for ₹1,53,432 net pay (for the three sample employees) on 31 October 2026."),
    ),
    screen(
      "Statutory payment calendar",
      table(
        ["Payment", "Due", "October 2026 (sample employees)"],
        [
          ["Salary TDS", "7th of next month", "₹7,345 by 7 November"],
          ["EPF (employee + employer + charges)", "15th of next month", "₹16,000 by 15 November"],
          ["ESI (employee + employer)", "15th of next month", "₹761 by 15 November"],
          ["Professional tax", "As per state rules", "₹400"],
          ["LWF", "As per state rules", "June and December in Maharashtra"],
        ],
      ),
    ),
    screen(
      "Returns",
      table(
        ["Return", "Frequency", "Contents"],
        [
          ["EPF ECR", "Monthly, with payment", "Member-wise wages and contributions"],
          ["ESI monthly contribution", "Monthly, with payment", "Employee-wise wages, days and contributions"],
          ["Form 138 (salary TDS)", "Quarterly", "Employee-wise salary and TDS"],
          ["State PT and LWF returns", "As per state rules", "Employee counts and amounts"],
        ],
      ),
    ),
    screen(
      "Payroll journal and reconciliation",
      journal(
        [
          ["Salaries and wages (gross)", "₹1,69,000", ""],
          ["Employer PF, EDLI and admin charges", "₹8,320", ""],
          ["Employer ESI", "₹618", ""],
          ["Net salaries payable", "", "₹1,53,432"],
          ["PF payable", "", "₹16,000"],
          ["ESI payable", "", "₹761"],
          ["Professional tax payable", "", "₹400"],
          ["TDS payable", "", "₹7,345"],
        ],
        "₹1,77,938",
      ),
      tip("Clear every liability", "After payments, each payable ledger should be nil — any balance means an unpaid or misposted amount."),
    ),
    mistakes(
      ["Paying after the 7th", "It's a Code on Wages breach."],
      ["Missing the 15th for PF and ESI", "Interest and damages follow."],
      ["Unauthorised deductions", "Only lawful or authorised ones."],
      ["Unreconciled payables", "Clear them monthly."],
    ),
    check(
      5,
      q("When are EPF and ESI due?", ["15th of the next month", "7th of the next month", "Last day of the month", "Quarterly"], 0, "With the returns."),
      q("When is salary TDS due?", ["7th of the next month", "15th", "30th", "Annually"], 0, "March TDS by 30 April."),
      q("Which return is filed quarterly for salary TDS?", ["Form 138", "ECR", "Form 130", "GSTR-3B"], 0, "Formerly 24Q."),
      q("Which account is credited for employees' take-home pay before payment?", ["Net salaries payable", "Salaries expense", "Bank", "PF payable"], 0, "Cleared on payment."),
      q("What should payslips show?", ["Each earning and deduction, gross and net", "Only net pay", "Only the company logo", "Tax rates for all employees"], 0, "Plus period and IDs."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — PF challan",
          ["Show how Neelgiri's ₹16,000 PF payment for the three employees is made up."],
          ["Employee share ₹7,680 + employer share ₹7,680 + EDLI and admin charges ₹640 (1% of ₹64,000 PF wages) = ₹16,000."],
        ],
        [
          "Exercise 2 — Reconciliation",
          ["On 20 November, the ESI payable ledger shows ₹761. What does it mean?"],
          ["October's ESI hasn't been paid (or the payment wasn't posted) — and the 15 November due date has passed. Pay immediately with any interest and investigate."],
        ],
      ),
    ),
    summary(
      ["Payslips", "Paying by the 7th", "The statutory payment calendar", "ECR, ESI, Form 138 and state returns", "Journal entries and reconciliations"],
      "Pay on time, pay the government on time, and make every payroll liability ledger reach zero.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Exits and Year-End",
      ["Rahul resigns, and the tax year ends. This module covers full and final settlement and year-end payroll tasks."],
      ["Complete full and final settlement within two working days", "Pay leave encashment, gratuity and bonus at exit", "Issue Form 130", "Reconcile salary, TDS and contributions at year end", "Run a payroll audit and monthly checklist"],
    ),
    screen(
      "Full and final settlement",
      p("When an employee leaves — by resignation, dismissal, retrenchment or closure — wages due must be paid within two working days of leaving."),
      table(
        ["Rahul — last day 14 November 2026", "Amount"],
        [
          ["Salary for 14 days: ₹30,000 × 14 ÷ 30", "₹14,000"],
          ["Leave encashment: 8 days × (₹24,000 ÷ 26)", "₹7,385"],
          ["Less: PF on ₹11,200 PF wages (₹24,000 × 14 ÷ 30) at 12%", "(₹1,344)"],
          ["Less: PT", "(₹200)"],
        ],
        { footer: ["Net settlement (before any recoveries)", "₹19,841"], numeric: [1] },
      ),
      note("Leave encashment rules — the rate and whether PF applies — depend on policy and law. Neelgiri doesn't deduct PF on leave encashment."),
    ),
    screen(
      "Leave encashment, gratuity and bonus at exit",
      table(
        ["Item", "When payable"],
        [
          ["Leave encashment", "Unused earned leave, as per law and policy"],
          ["Gratuity", "After 5 years' continuous service (1 year for fixed-term employees), or earlier on death or disablement"],
          ["Bonus", "Proportionate statutory bonus if eligible for the year"],
        ],
      ),
      p("Rahul has 3 years' service, so no gratuity is due. He's eligible for a proportionate bonus for 2026-27, paid with the settlement or by the statutory deadline."),
    ),
    screen(
      "Form 130 — annual salary certificate",
      bullets(
        "Issued to every employee whose tax was deducted — generally by 15 June after the tax year.",
        "Neelgiri issues Form 130 for 2026-27 by 15 June 2027.",
        "Leavers like Rahul get Form 130 for their period of employment.",
        "Download Part A from TRACES so it matches the filed Form 138.",
      ),
    ),
    screen(
      "Year-end reconciliation",
      table(
        ["Reconciliation", "Must agree"],
        [
          ["Payroll register vs. salary expense in the books", "Gross pay for the year"],
          ["TDS deducted vs. challans vs. Form 138", "Every rupee, employee by employee"],
          ["PF contributions vs. ECRs vs. payments", "Month by month"],
          ["ESI contributions vs. returns vs. payments", "Month by month"],
          ["PT and LWF vs. state returns", "Per state"],
        ],
      ),
    ),
    screen(
      "Payroll audit and monthly checklist",
      bullets(
        "Inputs approved and complete by the cut-off.",
        "Variance report reviewed; joiners and leavers checked.",
        "Statutory ceilings and rates up to date (PF ₹25,000, ESI ₹21,000, PT slabs).",
        "Salaries paid by the 7th; leavers settled within two working days.",
        "TDS by the 7th, PF and ESI by the 15th, PT and LWF per state.",
        "Payslips issued; journal posted; payable ledgers cleared.",
        "Quarterly: Form 138 filed; annual: Form 130 issued and reconciliations completed.",
      ),
    ),
    mistakes(
      ["Settling leavers after weeks", "Two working days."],
      ["Forgetting proportionate bonus", "Pay if eligible."],
      ["Form 130 not matching Form 138", "Generate from TRACES."],
      ["No year-end reconciliation", "Differences become notices."],
    ),
    check(
      6,
      q("Within how long must wages be paid after an employee leaves?", ["Two working days", "Seven days", "30 days", "At the next payroll"], 0, "Under the Code on Wages."),
      q("After how many years' service is gratuity generally payable?", ["5 years (1 year for fixed-term employees)", "1 year for everyone", "10 years", "3 years"], 0, "Or earlier on death or disablement."),
      q("By when is Form 130 generally issued?", ["15 June after the tax year", "31 March", "7 April", "31 July"], 0, "Annual salary certificate."),
      q("What should TDS deducted agree with at year end?", ["Challans and Form 138", "GSTR-3B", "The bonus register only", "Nothing"], 0, "Employee by employee."),
      q("Which item is on the monthly payroll checklist?", ["Statutory ceilings and rates up to date", "Changing PT slabs yourself", "Skipping the variance report", "Paying PF annually"], 0, "PF ₹25,000, ESI ₹21,000."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Settlement date",
          ["An employee's last working day is Friday 13 November 2026 (Saturday and Sunday are off). By when must the settlement be paid?"],
          ["Within two working days — by Tuesday 17 November 2026."],
        ],
        [
          "Exercise 2 — Gratuity",
          ["A fixed-term employee leaves after 14 months. Is gratuity payable?"],
          ["Yes — fixed-term employees qualify after 1 year of service under the Code on Social Security."],
        ],
      ),
    ),
    summary(
      ["Full and final settlement in two working days", "Leave encashment, gratuity and bonus", "Form 130", "Year-end reconciliations", "The payroll checklist"],
      "Exits and year-end close the loop — settle leavers fast, certify tax correctly and reconcile everything.",
    ),
  ],
}

export default lessons
