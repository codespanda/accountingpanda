import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
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

// Statutory Compliance: Bonus — lesson screens by module index (0 = Module 1).
// The course follows Sunrise Fabrics Pvt Ltd, a Surat textile mill with 150
// employees, for the accounting year April 2026 – March 2027 under the Code on
// Wages, 2019. The applicable minimum wage (₹12,500 a month) is assumed for the
// examples — always use the minimum wage that actually applies.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Bonus and the Code on Wages",
      ["Statutory bonus shares a company's profits with lower-paid employees. This module introduces the law through Sunrise Fabrics."],
      ["Explain what statutory bonus is", "Trace the move from the Payment of Bonus Act to the Code on Wages", "Know the Code's commencement and the 2026 notifications", "Identify establishments that must pay bonus", "Summarise employer obligations"],
    ),
    screen(
      "Meet Sunrise Fabrics",
      p("Sunrise Fabrics Pvt Ltd weaves and dyes fabric in Surat, Gujarat, with 150 employees. Its accounting year runs April to March. Hetal, the HR manager, calculates statutory bonus for 2026-27."),
      table(
        ["Sample employee", "Monthly wages", "2026-27 situation"],
        [
          ["Ravi — loom operator", "₹18,000", "Full year"],
          ["Fatima — packer", "₹11,000", "Full year"],
          ["Kunal — supervisor", "₹24,000", "Full year"],
          ["Meena — dyer", "₹15,000", "Joined 1 January 2027"],
          ["Suresh — store keeper", "₹16,000", "Dismissed for theft in February 2027"],
        ],
      ),
    ),
    screen(
      "What statutory bonus is",
      bullets(
        "A share of profits paid to employees up to a wage limit.",
        "A minimum bonus is payable every year — even in a loss year, for covered establishments.",
        "A higher bonus, up to a maximum, is payable when profits (the allocable surplus) allow.",
        "It's separate from performance bonuses or incentives, though those may be adjusted against it.",
      ),
    ),
    screen(
      "From the 1965 Act to the Code on Wages",
      table(
        ["Then", "Now"],
        [
          ["Payment of Bonus Act, 1965", "Part (Chapter) on bonus in the Code on Wages, 2019"],
          ["Limits fixed in the Act (2015 amendment)", "Limits set by government notification under section 26"],
        ],
      ),
      p("The Code came into force on 21 November 2025. In August 2026 the government notified the bonus limits under the Code:"),
      table(
        ["Notification", "Effect"],
        [
          ["S.O. 4711(E)", "Employees drawing wages up to ₹21,000 a month are eligible — effective from 21 November 2025"],
          ["S.O. 4710(E)", "Bonus is calculated as if wages were ₹7,000 a month (or the minimum wage, if higher) for employees earning more"],
        ],
      ),
    ),
    screen(
      "Which establishments must pay bonus",
      bullets(
        "Establishments in which 20 or more persons are employed on any day in an accounting year (and others as the government notifies).",
        "Covers factories, shops, offices and other establishments in the private sector, with some exclusions such as certain public bodies and non-profit institutions.",
        "Once covered, an establishment stays covered for that year even if headcount falls.",
      ),
      p("Sunrise, with 150 employees, is covered."),
    ),
    screen(
      "Employer obligations at a glance",
      steps(
        ["Identify eligible employees", "Wage limit and at least 30 days' work."],
        ["Compute the allocable surplus", "From the year's profits."],
        ["Decide the rate", "Between 8.33% and 20%."],
        ["Pay on time", "Within eight months of the year end."],
        ["Keep records and file returns", "As prescribed under the Code's rules."],
      ),
    ),
    mistakes(
      ["Thinking bonus is optional", "Covered establishments must pay at least the minimum."],
      ["Using the old Act's references", "The Code applies from 21 November 2025."],
      ["Confusing statutory and performance bonus", "They're different, though adjustable."],
      ["Skipping loss years", "The minimum bonus is still due."],
    ),
    check(
      1,
      q("Which law now governs statutory bonus?", ["The Code on Wages, 2019", "The Payment of Bonus Act, 1965 alone", "The Code on Social Security", "The Income-tax Act"], 0, "From 21 November 2025."),
      q("Which notification sets the ₹21,000 eligibility limit under the Code?", ["S.O. 4711(E)", "S.O. 5109(E)", "S.O. 4710(E)", "GSR 15(E)"], 0, "Effective from 21 November 2025."),
      q("From what headcount must an establishment generally pay bonus?", ["20 or more persons", "10 or more", "50 or more", "1 or more"], 0, "On any day in the year."),
      q("Is the minimum bonus due in a loss year?", ["Yes", "No", "Only for managers", "Only after five years of losses"], 0, "It's a minimum."),
      q("What does S.O. 4710(E) deal with?", ["The wage on which bonus is calculated", "PF wages", "ESI rates", "Gratuity"], 0, "₹7,000 or the minimum wage if higher."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Coverage",
          ["A shop had 18 employees until June and 22 from July. Is it covered for that accounting year?"],
          ["Yes — it employed 20 or more persons on at least one day in the year."],
        ],
        [
          "Exercise 2 — Notifications",
          ["Explain in one sentence each what S.O. 4711(E) and S.O. 4710(E) do."],
          ["S.O. 4711(E) makes employees earning up to ₹21,000 a month eligible; S.O. 4710(E) caps the wage used for calculating bonus at ₹7,000 a month (or the minimum wage, if higher)."],
        ],
      ),
    ),
    summary(
      ["What statutory bonus is", "From the 1965 Act to the Code", "The 2026 notifications", "Covered establishments", "Employer obligations"],
      "Statutory bonus is now under the Code on Wages, with limits notified in 2026: eligible up to ₹21,000, calculated on ₹7,000 or the minimum wage.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Eligibility",
      ["Not everyone gets statutory bonus. This module decides eligibility for Sunrise's employees."],
      ["Apply the 30-day work rule", "Apply the wage limit set by notification", "Use the ₹21,000 limit", "Identify disqualified employees", "Handle part-year employees and leavers"],
    ),
    screen(
      "At least 30 days' work",
      p("An employee must have worked at least 30 working days in the accounting year to be eligible."),
      p("A temporary helper who worked 25 days at Sunrise in 2026-27 isn't eligible."),
    ),
    screen(
      "The wage limit",
      table(
        ["Monthly wages (Code definition)", "Eligible?"],
        [
          ["Up to ₹21,000", "Yes"],
          ["Above ₹21,000", "No — statutory bonus doesn't apply (the employer may still pay a discretionary bonus)"],
        ],
      ),
      p("Ravi (₹18,000), Fatima (₹11,000) and Meena (₹15,000) are within the limit. Kunal (₹24,000) is not."),
      note("“Wages” follows the Code's definition — basic, DA and other remuneration, with HRA and similar exclusions subject to the 50% rule."),
    ),
    screen(
      "Disqualified employees",
      p("An employee is disqualified from bonus if dismissed for:"),
      bullets(
        "Fraud.",
        "Riotous or violent behaviour on the premises.",
        "Theft, misappropriation or sabotage of the establishment's property.",
        "Conviction for sexual harassment.",
      ),
      p("Suresh was dismissed for theft in February 2027, so he gets no bonus for 2026-27."),
    ),
    screen(
      "Part-year employees and leavers",
      bullets(
        "Eligible employees who worked part of the year get bonus in proportion to their wages for that part.",
        "Leavers (other than those disqualified) remain entitled — pay with the final settlement or by the due date.",
        "Meena joined on 1 January 2027, so her bonus is based on three months' wages.",
      ),
    ),
    screen(
      "Eligibility at Sunrise — summary",
      table(
        ["Employee", "Eligible?", "Why"],
        [
          ["Ravi", "Yes", "₹18,000, full year"],
          ["Fatima", "Yes", "₹11,000, full year"],
          ["Kunal", "No", "Wages above ₹21,000"],
          ["Meena", "Yes — part year", "Joined in January; over 30 days"],
          ["Suresh", "No", "Dismissed for theft"],
          ["Temporary helper", "No", "Only 25 days"],
        ],
      ),
    ),
    mistakes(
      ["Using gross pay instead of Code wages", "Apply the Code's definition."],
      ["Excluding part-year staff", "They get proportionate bonus."],
      ["Withholding bonus for any dismissal", "Only the listed grounds disqualify."],
      ["Forgetting the 30-day rule", "Check days worked."],
    ),
    check(
      2,
      q("How many working days must an employee work to be eligible?", ["At least 30", "At least 240", "At least 90", "Any number"], 0, "In the accounting year."),
      q("What's the monthly wage limit for eligibility?", ["₹21,000", "₹25,000", "₹15,000", "₹7,000"], 0, "S.O. 4711(E)."),
      q("Which dismissal disqualifies an employee from bonus?", ["Dismissal for theft", "Resignation", "Retirement", "Redundancy"], 0, "Also fraud, violence, sabotage, sexual harassment."),
      q("How is bonus worked out for a part-year employee?", ["In proportion to wages earned in the year", "Nothing is paid", "A full year's bonus", "Half the minimum"], 0, "Proportionate."),
      q("Is an employee earning ₹24,000 a month entitled to statutory bonus?", ["No", "Yes", "Only the minimum", "Only if a manager"], 0, "Above ₹21,000."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Eligible?",
          ["(a) A clerk earning ₹20,500 who worked all year. (b) A driver dismissed for drunkenness. (c) A trainee who worked 40 days."],
          ["(a) Eligible. (b) Eligible — drunkenness isn't one of the disqualifying grounds (unless it involved violence or another listed ground). (c) Eligible — over 30 days, if within the wage limit."],
        ],
        [
          "Exercise 2 — Leaver",
          ["An eligible employee resigned in October 2026. Is bonus for 2026-27 payable?"],
          ["Yes — proportionate to wages earned April–October, payable by the due date."],
        ],
      ),
    ),
    summary(
      ["The 30-day rule", "The ₹21,000 limit", "Disqualifications", "Part-year employees and leavers", "Sunrise's eligibility list"],
      "Eligibility depends on days worked, Code wages up to ₹21,000, and the absence of a disqualifying dismissal.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Calculating Bonus",
      ["This module calculates minimum and maximum bonus for Sunrise's eligible employees."],
      ["Calculate the minimum bonus", "Know the maximum bonus", "Apply the calculation ceiling", "Use “wages” for bonus", "Prorate for part of the year", "Work examples"],
    ),
    screen(
      "Minimum and maximum bonus",
      table(
        ["Bonus", "Amount"],
        [
          ["Minimum", "8.33% of wages earned in the year, or ₹100, whichever is higher"],
          ["Maximum", "20% of wages earned in the year"],
        ],
      ),
      p("Between the two, the rate depends on the allocable surplus (Module 4)."),
    ),
    screen(
      "The calculation ceiling",
      p("For employees earning more than ₹7,000 a month, bonus is calculated as if their wages were ₹7,000 — or the applicable minimum wage, if that's higher."),
      p("At Sunrise the applicable minimum wage is ₹12,500 a month (assumed for this course), so the calculation base is ₹12,500."),
      table(
        ["Employee", "Actual wages", "Wages used for bonus"],
        [
          ["Ravi", "₹18,000", "₹12,500"],
          ["Fatima", "₹11,000", "₹11,000 (below the base — actual wages used)"],
          ["Meena", "₹15,000", "₹12,500"],
        ],
      ),
      caution("Minimum wages differ by state, zone and skill level, and are revised regularly. Use the minimum wage that actually applies to each employee."),
    ),
    screen(
      "Worked examples",
      table(
        ["Employee", "Bonus wages for the year", "Minimum 8.33%", "Maximum 20%"],
        [
          ["Ravi", "₹12,500 × 12 = ₹1,50,000", "₹12,495", "₹30,000"],
          ["Fatima", "₹11,000 × 12 = ₹1,32,000", "₹10,996", "₹26,400"],
          ["Meena", "₹12,500 × 3 = ₹37,500", "₹3,124", "₹7,500"],
        ],
      ),
      tip("Round consistently", "Round each employee's bonus to the nearest rupee."),
    ),
    screen(
      "Wages for bonus",
      bullets(
        "Use the Code's definition of wages for the months worked.",
        "Leave with wages and paid holidays count; unpaid absence doesn't.",
        "Overtime, HRA and other listed exclusions are left out (subject to the 50% rule).",
      ),
    ),
    screen(
      "Proportionate bonus",
      example([["Meena — wages used January–March: 3 × ₹12,500", "₹37,500"], ["Minimum bonus 8.33%", ""]], ["Meena's minimum bonus", "₹3,124"]),
      note("The ₹100 minimum applies to employees who qualify but whose 8.33% is less than ₹100 — for example a very short period of work at low wages."),
    ),
    mistakes(
      ["Calculating on actual wages above the ceiling", "Use ₹7,000 or the minimum wage."],
      ["Using ₹7,000 when the minimum wage is higher", "Use the higher figure."],
      ["Including unpaid absence", "Use wages actually earned."],
      ["Forgetting the ₹100 floor", "Apply it where 8.33% is lower."],
    ),
    check(
      3,
      q("What's the minimum bonus?", ["8.33% of wages or ₹100, whichever is higher", "20% of wages", "One month's wages", "₹7,000"], 0, "Payable every year."),
      q("What's the maximum bonus?", ["20% of wages", "8.33%", "12%", "No limit"], 0, "Depends on allocable surplus."),
      q("An employee earns ₹16,000; the applicable minimum wage is ₹9,000. On what monthly wage is bonus calculated?", ["₹9,000", "₹7,000", "₹16,000", "₹21,000"], 0, "The higher of ₹7,000 and the minimum wage."),
      q("An employee earns ₹6,500 a month. On what wage is bonus calculated?", ["₹6,500 — actual wages", "₹7,000", "The minimum wage", "₹21,000"], 0, "The ceiling only applies above the base."),
      q("Ravi's bonus wages are ₹1,50,000. What's his minimum bonus?", ["₹12,495", "₹15,000", "₹30,000", "₹1,500"], 0, "8.33% × ₹1,50,000."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Calculate",
          ["An employee earns ₹19,000 for 10 months of the year. The applicable minimum wage is ₹12,500. Calculate minimum and maximum bonus."],
          ["Bonus wages ₹12,500 × 10 = ₹1,25,000. Minimum ₹10,413 (8.33%); maximum ₹25,000 (20%)."],
        ],
        [
          "Exercise 2 — Ceiling",
          ["If the applicable minimum wage were ₹6,800, what base would Sunrise use for Ravi?"],
          ["₹7,000 — the higher of ₹7,000 and ₹6,800."],
        ],
      ),
    ),
    summary(
      ["Minimum 8.33% or ₹100", "Maximum 20%", "The ₹7,000 / minimum wage base", "Wages for bonus", "Proportionate bonus"],
      "Calculate bonus on wages capped at ₹7,000 or the minimum wage — between 8.33% and 20%.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Allocable Surplus, Set-On and Set-Off",
      ["How much above the minimum Sunrise pays depends on its profits. This module works out the allocable surplus."],
      ["Calculate gross profit, available surplus and allocable surplus", "Decide when bonus above the minimum is payable", "Carry forward excess surplus (set-on)", "Carry forward a shortfall (set-off)", "Understand productivity-linked bonus"],
    ),
    screen(
      "From gross profit to allocable surplus",
      table(
        ["Sunrise Fabrics, 2026-27", "Amount"],
        [
          ["Gross profit (computed as the Code prescribes)", "₹1,20,00,000"],
          ["Less: depreciation", "(₹30,00,000)"],
          ["Less: direct taxes payable", "(₹15,00,000)"],
          ["Less: other prior charges (e.g. return on capital)", "(₹25,00,000)"],
          ["Available surplus", "₹50,00,000"],
        ],
        { numeric: [1] },
      ),
      example([["Available surplus", "₹50,00,000"], ["Allocable share for a company like Sunrise", "60%"]], ["Allocable surplus", "₹30,00,000"]),
      note("The allocable share is 60% generally, and 67% for certain companies (such as a foreign company that doesn't declare dividends in India). The detailed computation follows schedules under the Code and its rules."),
    ),
    screen(
      "When bonus above the minimum is payable",
      table(
        ["Total bonus wages of eligible employees", "₹1,80,00,000"],
        [
          ["Minimum bonus at 8.33%", "₹14,99,400"],
          ["Maximum bonus at 20%", "₹36,00,000"],
          ["Allocable surplus", "₹30,00,000"],
        ],
      ),
      p("The allocable surplus is above the minimum and below the maximum, so Sunrise pays bonus equal to the allocable surplus: ₹30,00,000 ÷ ₹1,80,00,000 = 16.67% of each employee's bonus wages."),
      p("Ravi: 16.67% × ₹1,50,000 = ₹25,000. Fatima: 16.67% × ₹1,32,000 = ₹22,000."),
    ),
    screen(
      "Set-on — carrying forward excess surplus",
      p("If the allocable surplus exceeds the maximum bonus, the excess (up to a limit) is carried forward to the next years, and used if a later year's surplus falls short."),
      example([["2027-28 allocable surplus (illustrative)", "₹40,00,000"], ["Maximum bonus (20%)", "−₹36,00,000"]], ["Set-on carried forward", "₹4,00,000"]),
      bullets("The carry-forward can't exceed 20% of total bonus wages.", "Amounts carried forward can be used up to the fourth accounting year."),
    ),
    screen(
      "Set-off — carrying forward a shortfall",
      p("If there's no allocable surplus, or it's less than the minimum bonus, the employer still pays the minimum. The shortfall is carried forward and set off against later years' surplus."),
      example([["Minimum bonus required", "₹14,99,400"], ["Allocable surplus in a poor year (illustrative)", "−₹10,00,000"]], ["Set-off carried forward", "₹4,99,400"]),
    ),
    screen(
      "Productivity-linked bonus",
      bullets(
        "Employers and employees may agree a bonus linked to production or productivity instead of profits.",
        "It must still respect the statutory minimum and maximum (20% of wages).",
        "Put the scheme in writing, with clear targets and calculation.",
      ),
    ),
    mistakes(
      ["Paying only the minimum despite surplus", "Share the allocable surplus up to 20%."],
      ["Ignoring set-on and set-off", "Carry them forward."],
      ["Using profit per accounts as gross profit", "Follow the prescribed computation."],
      ["Productivity bonus above 20%", "The cap still applies."],
    ),
    check(
      4,
      q("What is the allocable surplus for most companies?", ["60% of the available surplus", "100% of profit", "20% of wages", "8.33% of revenue"], 0, "67% for certain companies."),
      q("Allocable surplus is between the minimum and maximum bonus. What's paid?", ["Bonus equal to the allocable surplus", "Only the minimum", "Only the maximum", "Nothing"], 0, "Shared in proportion to bonus wages."),
      q("What is set-on?", ["Carrying forward surplus above the maximum bonus", "Carrying forward a shortfall", "A tax deduction", "A PF transfer"], 0, "Used in later years."),
      q("Up to which year can set-on or set-off amounts be carried forward?", ["The fourth accounting year", "Next year only", "Ten years", "Forever"], 0, "Then they lapse."),
      q("Does a productivity-linked bonus remove the 20% cap?", ["No", "Yes", "Only for managers", "Only with approval"], 0, "The maximum still applies."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Allocable surplus",
          ["Available surplus ₹40,00,000; a company allocating 60%. Total bonus wages ₹1,00,00,000. What bonus rate is payable?"],
          ["Allocable surplus ₹24,00,000. Minimum ₹8,33,000; maximum ₹20,00,000. The surplus exceeds the maximum, so pay 20% (₹20,00,000) and carry forward ₹4,00,000 as set-on."],
        ],
        [
          "Exercise 2 — Set-off",
          ["Next year the allocable surplus is ₹5,00,000 and the minimum bonus is ₹8,33,000. What happens?"],
          ["Use the ₹4,00,000 set-on first (surplus becomes ₹9,00,000, above the minimum). Pay ₹9,00,000 (9% of bonus wages) — no set-off needed."],
        ],
      ),
    ),
    summary(
      ["Gross profit to allocable surplus", "Paying between 8.33% and 20%", "Set-on", "Set-off", "Productivity-linked bonus"],
      "The allocable surplus decides the rate between 8.33% and 20%, with set-on and set-off smoothing good and bad years.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Payment and Deductions",
      ["Bonus must be paid on time, correctly adjusted and taxed. This module pays Sunrise's 2026-27 bonus."],
      ["Pay within eight months of the year end", "Credit bonus to bank accounts", "Adjust customary or interim bonus", "Make only permitted deductions", "Apply the tax treatment"],
    ),
    screen(
      "When to pay",
      table(
        ["Situation", "Deadline"],
        [
          ["Normal case", "Within eight months of the end of the accounting year"],
          ["Sunrise, year ending 31 March 2027", "By 30 November 2027"],
          ["Where a dispute is pending", "Within the period allowed after the dispute is settled"],
        ],
      ),
      tip("Festive timing", "Many employers pay before Diwali — Sunrise pays in October 2027, well within the deadline."),
    ),
    screen(
      "Paying into bank accounts",
      bullets(
        "Bonus is paid by bank transfer or other electronic mode.",
        "Show it on the payslip for the month paid.",
        "Pay leavers through their final settlement or separately by the deadline.",
      ),
    ),
    screen(
      "Customary and interim bonus",
      p("If Sunrise paid a festival (customary) bonus or an interim bonus during the year, it can deduct that from the statutory bonus due."),
      example([["Ravi's statutory bonus at 16.67%", "₹25,000"], ["Less: festival advance paid in October 2026", "−₹5,000"]], ["Balance payable", "₹20,000"]),
    ),
    screen(
      "Permitted deductions",
      bullets(
        "Customary or interim bonus already paid for the same year.",
        "Financial loss caused by the employee's misconduct, during that year (where allowed).",
        "Tax deducted at source on the salary payment.",
      ),
      caution("Don't deduct loans or penalties unless the law permits it."),
    ),
    screen(
      "Tax treatment",
      bullets(
        "Bonus is taxable as salary in the year it's received.",
        "Include it in the month's salary TDS calculation.",
        "Show it in Form 130 for the tax year of payment.",
      ),
      p("Ravi receives his bonus in October 2027, so it's part of his tax year 2027-28 salary."),
    ),
    mistakes(
      ["Paying after eight months", "Penalties and interest may apply."],
      ["Deducting unrelated recoveries", "Only permitted deductions."],
      ["Forgetting to adjust advances", "Deduct interim or customary bonus paid."],
      ["Leaving bonus out of TDS", "It's salary."],
    ),
    check(
      5,
      q("By when must bonus generally be paid?", ["Within eight months of the end of the accounting year", "Within one month", "Before the year ends", "Within two years"], 0, "Unless a dispute is pending."),
      q("For a year ending 31 March 2027, the deadline is:", ["30 November 2027", "31 December 2027", "31 March 2028", "30 April 2027"], 0, "Eight months."),
      q("Can a festival bonus paid during the year be deducted from statutory bonus?", ["Yes", "No", "Only half", "Only for managers"], 0, "Customary or interim bonus."),
      q("How is bonus taxed?", ["As salary in the year received", "Tax-free", "As capital gains", "As business income"], 0, "Include in TDS."),
      q("Which deduction from bonus is generally NOT allowed?", ["Recovery of a personal loan", "Customary bonus already paid", "TDS", "Interim bonus already paid"], 0, "Only permitted deductions."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Balance",
          ["Fatima's statutory bonus is ₹22,000. She received a ₹3,000 Diwali advance against bonus in 2026. What's payable?"],
          ["₹19,000."],
        ],
        [
          "Exercise 2 — Deadline",
          ["A company's accounting year ends 31 December 2026. By when must bonus be paid?"],
          ["Within eight months — by 31 August 2027."],
        ],
      ),
    ),
    summary(
      ["The eight-month deadline", "Bank payment", "Adjusting customary and interim bonus", "Permitted deductions", "Tax treatment"],
      "Pay bonus within eight months, deduct only what's allowed, and run it through salary TDS.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Records, Returns and Accounting",
      ["The last step is records, returns and the accounts. This module completes Sunrise's bonus cycle."],
      ["Keep the required registers and records", "File annual returns and handle inspections", "Deal with disputes and claims", "Record the bonus provision", "Use a bonus compliance checklist"],
    ),
    screen(
      "Records to keep",
      bullets(
        "Computation of gross profit, available surplus and allocable surplus.",
        "Set-on and set-off carried forward.",
        "Employee-wise bonus wages, rate, bonus, deductions and payment date.",
        "Proof of payment (bank records).",
      ),
      note("The Code's rules prescribe the registers and their format — many can be kept electronically. Check the current rules."),
    ),
    screen(
      "Returns and inspections",
      bullets(
        "File the annual return in the prescribed form and by the prescribed date.",
        "Inspector-cum-facilitators can examine records and the allocable surplus computation.",
        "Keep audited accounts available — they support the profit figures.",
      ),
    ),
    screen(
      "Disputes and claims",
      bullets(
        "Disputes over bonus are generally raised as industrial disputes or claims before the authorities under the Code.",
        "Employees can claim unpaid bonus within the time limit allowed.",
        "Pay the undisputed amount on time even while a dispute is pending.",
      ),
    ),
    screen(
      "Accounting for bonus",
      p("Sunrise provides for bonus monthly through the year, based on its estimate of 16.67%."),
      journal([["Bonus expense", "₹2,50,000", ""], ["Bonus payable (provision)", "", "₹2,50,000"]], "₹2,50,000"),
      p("When bonus is paid in October 2027:"),
      journal([["Bonus payable", "₹30,00,000", ""], ["Bank", "", "₹28,80,000"], ["TDS payable", "", "₹1,20,000"]], "₹30,00,000"),
      tip("True-up", "At year end, adjust the provision to the final allocable-surplus calculation."),
    ),
    screen(
      "Bonus compliance checklist",
      bullets(
        "Coverage confirmed (20+ persons).",
        "Eligibility: Code wages up to ₹21,000; at least 30 days; no disqualifying dismissal.",
        "Bonus wages capped at ₹7,000 or the applicable minimum wage.",
        "Allocable surplus computed; rate set between 8.33% and 20%.",
        "Set-on / set-off updated.",
        "Advances adjusted; permitted deductions only; TDS applied.",
        "Paid within eight months; records and annual return complete.",
      ),
    ),
    mistakes(
      ["Booking bonus only when paid", "Provide monthly."],
      ["No allocable-surplus working on file", "Keep it for inspection."],
      ["Holding the undisputed amount", "Pay it on time."],
      ["Missing the annual return", "File by the due date."],
    ),
    check(
      6,
      q("Which working should be kept on file for inspection?", ["The allocable surplus computation", "Sales brochures", "GST rates", "Staff photos"], 0, "With set-on and set-off."),
      q("When should bonus be provided in the books?", ["Monthly through the year", "Only when paid", "Every five years", "Never"], 0, "Accrual basis."),
      q("While a bonus dispute is pending, what should happen to the undisputed amount?", ["Pay it on time", "Hold it", "Pay double", "Deposit with the bank"], 0, "Avoid penalties."),
      q("Who examines bonus records under the Code?", ["Inspector-cum-facilitators", "GST officers", "Auditors only", "Banks"], 0, "Under the labour codes."),
      q("Which account is credited when bonus is provided?", ["Bonus payable (provision)", "Bank", "Revenue", "Share capital"], 0, "A liability until paid."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Provision",
          ["Sunrise expects ₹30,00,000 of bonus for 2026-27. What monthly provision should it book?"],
          ["₹2,50,000 a month (₹30,00,000 ÷ 12)."],
        ],
        [
          "Exercise 2 — Checklist",
          ["List three items to check before paying bonus."],
          ["Eligibility (wage limit, 30 days, disqualifications); bonus wages capped correctly; advances deducted and TDS applied — plus payment by the eight-month deadline."],
        ],
      ),
    ),
    summary(
      ["Records", "Returns and inspections", "Disputes", "Accounting entries", "The checklist"],
      "Keep the allocable-surplus working, provide monthly, pay on time and file the return — bonus compliance is then straightforward.",
    ),
  ],
}

export default lessons
