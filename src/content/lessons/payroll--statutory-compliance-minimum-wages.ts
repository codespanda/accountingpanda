import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
  exercises,
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

// Statutory Compliance: Minimum Wages — lesson screens by module index
// (0 = Module 1). The course follows Metroline Facility Services Pvt Ltd, a
// contractor providing cleaning and loading staff to central government
// sites in Delhi (Area A) and a smaller city (Area B), so central-sphere rates
// apply. Rates are those effective 1 October 2026 (CLC VDA order dated
// 30 September 2026) — always check the latest order.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Minimum Wages and the Code on Wages",
      ["Every worker must be paid at least the legal minimum. This module introduces the law through Metroline Facility Services."],
      ["Explain why minimum wages exist", "Trace the move from the Minimum Wages Act to the Code on Wages", "Know when the Code took effect", "Understand that coverage now extends to all employees", "Identify the appropriate government"],
    ),
    screen(
      "Meet Metroline Facility Services",
      p("Metroline supplies cleaning, loading and maintenance staff to central government offices and a railway goods yard. Because the work is for central government establishments, central-sphere minimum wages apply. Neha, its payroll officer, checks every wage register."),
      table(
        ["Worker", "Role", "Skill", "Area"],
        [
          ["Ramesh", "Sweeper, Delhi", "Unskilled", "A"],
          ["Sunita", "Cleaning supervisor, Delhi", "Semi-skilled", "A"],
          ["Imran", "Electrician, Delhi", "Skilled", "A"],
          ["Kavita", "Loader, goods yard in an Area B city", "Unskilled", "B"],
        ],
      ),
    ),
    screen(
      "Why minimum wages exist",
      bullets(
        "To protect workers from exploitative pay.",
        "To ensure a basic standard of living, adjusted for prices.",
        "To create a level playing field between employers.",
      ),
    ),
    screen(
      "From the 1948 Act to the Code on Wages",
      table(
        ["Then", "Now"],
        [
          ["Minimum Wages Act, 1948 — only “scheduled employments”", "Code on Wages, 2019 — all employees"],
          ["Payment of Wages Act — separate law", "Payment rules are in the same Code"],
          ["Equal Remuneration Act — separate law", "Equal pay is in the same Code"],
        ],
      ),
      p("The Code came into force on 21 November 2025. The Wages (Central) Rules, 2026 were notified on 8 May 2026."),
    ),
    screen(
      "The appropriate government",
      compare(
        ["Central government", "Fixes rates for the central sphere.", ["Railways, mines, oilfields, ports", "Central government establishments and their contractors"]],
        ["State governments", "Fix rates for everything else in the state.", ["Most factories, shops and offices"]],
      ),
      note("Metroline's staff work at central government sites, so the Chief Labour Commissioner's central-sphere rates apply."),
    ),
    mistakes(
      ["Assuming only scheduled jobs are covered", "The Code covers all employees."],
      ["Using state rates for central-sphere work", "Check the appropriate government."],
      ["Ignoring payment rules", "They're part of the same Code."],
      ["Using old Act references", "The Code applies from 21 November 2025."],
    ),
    check(
      1,
      q("Since the Code on Wages, who is covered by minimum wages?", ["All employees", "Only scheduled employments", "Only factory workers", "Only government staff"], 0, "Coverage is universal."),
      q("When did the Code on Wages come into force?", ["21 November 2025", "1 April 2026", "1 January 2020", "8 May 2026"], 0, "The central rules followed in May 2026."),
      q("Which government fixes minimum wages for railway contractors' workers?", ["The central government", "The state government", "The municipality", "The contractor"], 0, "Central sphere."),
      q("Which earlier laws did the Code on Wages combine?", ["Minimum Wages, Payment of Wages, Payment of Bonus and Equal Remuneration Acts", "Only the Factories Act", "The Income-tax Act and GST Act", "EPF and ESI Acts"], 0, "Four wage laws."),
      q("When were the Wages (Central) Rules notified?", ["8 May 2026", "21 November 2025", "1 October 2026", "1 April 2027"], 0, "G.S.R. 343(E)."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which government?",
          ["Which minimum wage applies to (a) a cleaner at a private mall in Delhi, (b) a loader at a railway goods shed?"],
          ["(a) The Delhi government's rate. (b) The central-sphere rate."],
        ],
        [
          "Exercise 2 — Coverage",
          ["A software firm says its office assistants aren't covered because their job isn't a “scheduled employment”. Is that right?"],
          ["No — under the Code, minimum wages apply to all employees."],
        ],
      ),
    ),
    summary(
      ["Purpose of minimum wages", "From the 1948 Act to the Code", "Universal coverage", "Central vs. state sphere"],
      "Under the Code on Wages, every employee is entitled to the minimum wage fixed by the appropriate government.",
    ),
  ],
  1: [
    overview(
      "Module 2 — The Floor Wage and How Rates Are Fixed",
      ["Minimum wages are built in layers. This module explains the floor wage and how governments fix and revise rates."],
      ["Explain the national floor wage", "Know that states can't go below it", "Describe the factors used to fix wages", "Know the five-year review", "Find wage notifications"],
    ),
    screen(
      "The national floor wage",
      bullets(
        "Section 9 of the Code lets the central government fix a national floor wage, based on workers' minimum living standards, possibly varying by region.",
        "Minimum wages fixed by the central and state governments must not be below it.",
        "The Wages (Central) Rules, 2026 set out how the floor wage is to be fixed — but as of October 2026 no statutory floor wage had been notified.",
      ),
      caution("Older advisory figures (such as the 2017 “national floor level minimum wage”) aren't the statutory floor wage under the Code."),
    ),
    screen(
      "How rates are fixed",
      table(
        ["Factor", "Effect"],
        [
          ["Skill", "Unskilled, semi-skilled, skilled and highly skilled have different rates"],
          ["Arduousness of work", "Harder or hazardous work can carry higher rates"],
          ["Geographical area", "Area A (metros), B and C have different rates"],
          ["Cost of living", "Reflected in the variable dearness allowance"],
        ],
      ),
    ),
    screen(
      "Review and revision",
      bullets(
        "Basic rates should be reviewed at intervals not exceeding five years.",
        "The variable dearness allowance (VDA) is revised twice a year in many notifications — 1 April and 1 October — in line with the consumer price index for industrial workers.",
        "Each revision applies from its effective date, even if the order is issued a few days before or after.",
      ),
    ),
    screen(
      "Where to find notifications",
      steps(
        ["Central sphere", "Chief Labour Commissioner (Central) website — Minimum Wages page with VDA orders."],
        ["State sphere", "The state labour department's website."],
        ["Save the order", "Keep a copy with each payroll period's records."],
        ["Set effective dates", "Update payroll from 1 April and 1 October."],
      ),
      tip("Diary the dates", "Neha checks the CLC site at the end of every March and September."),
    ),
    mistakes(
      ["Treating the 2017 advisory figure as the floor wage", "It isn't statutory."],
      ["Missing VDA revisions", "Check each April and October."],
      ["Using one rate for all skills", "Each skill level differs."],
      ["Ignoring the area", "Area A, B and C rates differ."],
    ),
    check(
      2,
      q("Can a state fix a minimum wage below the national floor wage (once notified)?", ["No", "Yes", "Only for agriculture", "Only in Area C"], 0, "Section 9."),
      q("Had a statutory floor wage been notified under the Code as of October 2026?", ["No", "Yes, ₹178 a day", "Yes, ₹840 a day", "Yes, ₹25,000 a month"], 0, "The rules set the method only."),
      q("How often is VDA commonly revised?", ["Twice a year — 1 April and 1 October", "Every five years", "Monthly", "Never"], 0, "With the price index."),
      q("Where are central-sphere VDA orders published?", ["The Chief Labour Commissioner's website", "The GST portal", "The EPFO portal", "The RBI website"], 0, "Minimum Wages page."),
      q("Which factor leads to different rates for Delhi and smaller towns?", ["Geographical area", "Gender", "Religion", "Company size"], 0, "Areas A, B and C."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Revision dates",
          ["Metroline pays wages for October 2026. Which VDA order applies?"],
          ["The order effective 1 October 2026."],
        ],
        [
          "Exercise 2 — Floor wage",
          ["A client says, “The floor wage is ₹178, so we can pay that.” What's the answer?"],
          ["Wrong — ₹178 was an advisory figure, not a statutory floor wage, and in any case the applicable central or state minimum wage must be paid."],
        ],
      ),
    ),
    summary(
      ["The national floor wage", "Factors for fixing rates", "Five-year review and VDA", "Finding notifications"],
      "Find the right notification for the sphere, skill and area — and update it every April and October.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Reading a Minimum Wage Notification",
      ["This module reads the central-sphere rates effective 1 October 2026 and applies them to Metroline's workers."],
      ["Use skill categories", "Use area classification", "Add basic rate and VDA", "Apply VDA revisions", "Convert daily, monthly and piece rates", "Work examples"],
    ),
    screen(
      "Central-sphere rates from 1 October 2026 (construction, sweeping/cleaning, loading)",
      table(
        ["Category", "Area A (per day)", "Area B", "Area C"],
        [
          ["Unskilled", "₹840", "₹704", "₹565"],
          ["Semi-skilled / unskilled supervisory", "₹933", "—", "—"],
          ["Skilled / clerical", "₹1,024", "—", "—"],
          ["Highly skilled", "₹1,111", "—", "—"],
        ],
      ),
      note("Area A unskilled = basic ₹523 + VDA ₹317. Only the figures Metroline uses are shown — read the full order for others."),
    ),
    screen(
      "Skill categories and areas",
      terms2(),
    ),
    screen(
      "Basic plus VDA",
      example([["Basic rate — unskilled, Area A", "₹523"], ["VDA from 1 October 2026", "₹317"]], ["Minimum daily wage", "₹840"]),
      p("From 1 April 2026 the same rate was ₹827 a day — the October VDA added ₹13."),
    ),
    screen(
      "Daily, monthly and piece rates",
      table(
        ["Basis", "How to apply"],
        [
          ["Daily", "Rate × days worked (including paid weekly rest day where applicable)"],
          ["Monthly", "Commonly daily rate × 26 working days"],
          ["Piece rate", "Earnings must be at least the time-rate minimum for the hours worked"],
        ],
      ),
      table(
        ["Metroline, October 2026", "Calculation", "Minimum wages"],
        [
          ["Ramesh — unskilled, A, 26 days", "₹840 × 26", "₹21,840"],
          ["Sunita — semi-skilled, A, 26 days", "₹933 × 26", "₹24,258"],
          ["Imran — skilled, A, 24 days", "₹1,024 × 24", "₹24,576"],
          ["Kavita — unskilled, B, 26 days", "₹704 × 26", "₹18,304"],
        ],
      ),
    ),
    screen(
      "Applying a revision",
      p("Metroline's October payroll mistakenly used Ramesh's April rate of ₹827."),
      example([["Required: ₹840 × 26", "₹21,840"], ["Paid: ₹827 × 26", "−₹21,502"]], ["Shortfall to pay", "₹338"]),
      caution("Underpayment, however small, is an offence and can be claimed by the worker with compensation."),
    ),
    mistakes(
      ["Paying basic without VDA", "The minimum is basic + VDA."],
      ["Using last period's VDA", "Update from 1 April and 1 October."],
      ["Wrong area classification", "Check the city's area."],
      ["Piece rates below the time-rate minimum", "Top up to the minimum."],
    ),
    check(
      3,
      q("What's the central-sphere unskilled Area A daily rate from 1 October 2026 (construction/cleaning/loading)?", ["₹840", "₹827", "₹704", "₹523"], 0, "Basic ₹523 + VDA ₹317."),
      q("Minimum wage = ", ["Basic rate + VDA", "Basic rate only", "VDA only", "Basic × 2"], 0, "Both parts."),
      q("What's the Area B unskilled daily rate?", ["₹704", "₹840", "₹565", "₹933"], 0, "From 1 October 2026."),
      q("A piece-rated worker's earnings fall below the time-rate minimum. What happens?", ["The employer tops up to the minimum", "Nothing", "The worker pays the difference", "The contract is void"], 0, "Minimum wage guarantee."),
      q("By how much did the October 2026 VDA raise the unskilled Area A rate?", ["₹13 a day", "₹317", "₹840", "₹100"], 0, "From ₹827 to ₹840."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Monthly minimum",
          ["A highly skilled technician in Area A works 26 days in October 2026. What's the minimum wage?"],
          ["₹1,111 × 26 = ₹28,886."],
        ],
        [
          "Exercise 2 — Area mistake",
          ["Kavita's city was wrongly treated as Area C (₹565) for October. What arrears are due for 26 days?"],
          ["(₹704 − ₹565) × 26 = ₹3,614."],
        ],
      ),
    ),
    summary(
      ["Skill and area categories", "Basic + VDA", "Daily, monthly and piece rates", "Applying revisions", "Metroline's minimums"],
      "Read the notification by skill and area, add VDA, and update payroll every April and October.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Working Hours and Overtime",
      ["Extra hours mean extra pay. This module calculates overtime for Metroline's workers."],
      ["Know normal working hours and rest days", "Identify overtime", "Pay overtime at twice the normal rate", "Calculate overtime for daily and monthly-rated workers", "Pay for work on a rest day"],
    ),
    screen(
      "Normal hours and rest days",
      bullets(
        "Normal working hours are generally 8 a day and 48 a week (with flexibility under the labour codes, within weekly limits).",
        "Workers get a weekly rest day.",
        "Spread-over and rest-interval rules apply — check the applicable rules.",
      ),
    ),
    screen(
      "Overtime at twice the rate",
      p("Work beyond the normal daily or weekly hours is overtime, paid at at least twice the ordinary rate of wages, with the wages for that wage period."),
      example([["Ramesh's ordinary hourly rate: ₹840 ÷ 8", "₹105"], ["Overtime rate: × 2", "₹210"], ["October overtime: 10 hours × ₹210", ""]], ["Overtime pay", "₹2,100"]),
    ),
    screen(
      "Monthly-rated workers",
      steps(
        ["Daily rate", "Monthly wage ÷ 26 (or as the rules prescribe)."],
        ["Hourly rate", "Daily rate ÷ 8."],
        ["Overtime rate", "Hourly rate × 2."],
      ),
      p("Sunita's daily rate is ₹933; for 6 overtime hours: ₹933 ÷ 8 × 2 × 6 = ₹1,399.50."),
    ),
    screen(
      "Work on a rest day",
      bullets(
        "If a worker works on the weekly rest day, they're entitled to a substituted rest day (and in some cases overtime rates, depending on the rules and hours).",
        "Record rest-day work in the attendance register.",
      ),
      note("Check the OSH Code and the applicable state rules for rest-day work in your sector."),
    ),
    mistakes(
      ["Paying overtime at 1.5×", "The Code requires at least 2×."],
      ["Calculating overtime on basic only", "Use the ordinary rate of wages."],
      ["Paying overtime months later", "Pay with that wage period's wages."],
      ["No substituted rest day", "Give one when rest days are worked."],
    ),
    check(
      4,
      q("What's the minimum overtime rate?", ["Twice the ordinary rate", "1.5 times", "Normal rate", "Optional"], 0, "Under the Code."),
      q("Ramesh's daily rate is ₹840. What's his hourly overtime rate?", ["₹210", "₹105", "₹840", "₹157.50"], 0, "₹105 × 2."),
      q("When is overtime paid?", ["With the wages for that wage period", "At year end", "When the worker asks", "Never"], 0, "Same wage period."),
      q("Normal working hours are generally:", ["8 a day and 48 a week", "10 a day", "6 a day", "60 a week"], 0, "Within weekly limits."),
      q("A worker works on the weekly rest day. What should they get?", ["A substituted rest day (and pay as the rules require)", "Nothing", "A warning", "Half pay"], 0, "Rest must be given."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Skilled overtime",
          ["Imran (₹1,024 a day) works 5 overtime hours. Calculate overtime pay."],
          ["₹1,024 ÷ 8 = ₹128 × 2 = ₹256 × 5 = ₹1,280."],
        ],
        [
          "Exercise 2 — Area B overtime",
          ["Kavita (₹704 a day) works 8 overtime hours. Calculate overtime pay."],
          ["₹704 ÷ 8 = ₹88 × 2 = ₹176 × 8 = ₹1,408."],
        ],
      ),
    ),
    summary(
      ["Normal hours and rest days", "Overtime at 2×", "Monthly-rated workers", "Rest-day work"],
      "Overtime is at least twice the ordinary rate, paid with that period's wages.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Paying Wages Correctly",
      ["Paying the right amount isn't enough — wages must be paid on time, with only lawful deductions. This module sets Metroline's payment rules."],
      ["Choose wage periods", "Meet payment deadlines", "Pay leavers within two working days", "Keep deductions within the 50% limit", "Pay equally regardless of gender"],
    ),
    screen(
      "Wage periods and deadlines",
      table(
        ["Wage period", "Pay by"],
        [
          ["Daily", "The end of the shift"],
          ["Weekly", "The last working day of the week, before the weekly holiday"],
          ["Fortnightly", "Before the end of the second day after the fortnight ends"],
          ["Monthly", "Before the expiry of the 7th day of the following month"],
        ],
      ),
      p("Metroline pays monthly — October 2026 wages must be paid by 7 November 2026."),
      note("No wage period can be longer than a month."),
    ),
    screen(
      "Leavers",
      p("When an employee is removed, dismissed, retrenched or resigns, or an establishment closes, wages due must be paid within two working days."),
    ),
    screen(
      "Permitted deductions and the 50% limit",
      table(
        ["Permitted deductions include", "Example"],
        [
          ["Statutory deductions", "PF, ESI, income tax, professional tax"],
          ["Recovery of advances and loans", "Salary advance"],
          ["Fines (with prior approval and within limits)", "Fine for a notified act"],
          ["Absence from duty", "Loss of pay"],
          ["Damage or loss caused by the employee", "After a hearing"],
          ["Housing, amenities, canteen", "As authorised"],
        ],
      ),
      example([["Ramesh's October wages incl. overtime", "₹23,940"], ["50% limit on total deductions", ""]], ["Maximum total deductions", "₹11,970"]),
      caution("Total deductions in a wage period can't exceed 50% of wages (subject to specific exceptions in the Code)."),
    ),
    screen(
      "Equal remuneration",
      bullets(
        "No discrimination in wages on the basis of gender (including transgender identity) for the same or similar work.",
        "No discrimination in recruitment or conditions of employment for the same work.",
        "Sunita, the female cleaning supervisor, must be paid the same as male supervisors doing the same work.",
      ),
    ),
    mistakes(
      ["Paying monthly wages after the 7th", "Pay by the 7th of next month."],
      ["Delaying leavers' dues", "Two working days."],
      ["Deductions above 50%", "Spread recoveries over months."],
      ["Different pay for men and women in the same role", "Prohibited."],
    ),
    check(
      5,
      q("By when must monthly wages be paid?", ["Before the 7th of the following month", "By the 15th", "By the 30th", "Any time"], 0, "Monthly wage period."),
      q("Within how long must a leaver's wages be paid?", ["Two working days", "Seven days", "One month", "At the next payroll"], 0, "Including resignation."),
      q("What's the limit on total deductions in a wage period?", ["50% of wages", "25%", "75%", "No limit"], 0, "With limited exceptions."),
      q("What's the longest permitted wage period?", ["One month", "Two months", "One quarter", "One year"], 0, "No longer than a month."),
      q("Weekly wages are due by:", ["The last working day of the week, before the weekly holiday", "The 7th of next month", "The end of the next week", "The end of the month"], 0, "Weekly wage period."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Deductions",
          ["Ramesh's October wages are ₹23,940. Deductions: PF ₹2,520, advance recovery ₹8,000, canteen ₹1,500. Are they within the limit?"],
          ["Total ₹12,020 exceeds ₹11,970 (50%). Reduce the advance recovery this month by at least ₹50 and recover the rest later."],
        ],
        [
          "Exercise 2 — Leaver",
          ["A worker resigns on Friday 13 November 2026 (Saturday and Sunday are off). By when must dues be paid?"],
          ["Within two working days — by Tuesday 17 November 2026."],
        ],
      ),
    ),
    summary(
      ["Wage periods and deadlines", "Leavers' dues in two working days", "Permitted deductions and the 50% limit", "Equal remuneration"],
      "Pay on time, deduct only what's permitted within 50%, and pay equally for equal work.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Records, Inspections and Claims",
      ["Inspectors and workers can check every wage paid. This module keeps Metroline compliant and ready."],
      ["Maintain registers and wage slips", "Work with inspector-cum-facilitators", "Handle underpayment claims", "Understand penalties and compounding", "Use a minimum wages checklist"],
    ),
    screen(
      "Registers and wage slips",
      bullets(
        "Registers of employees, wages, attendance, overtime, deductions and advances — in the formats the Code's rules prescribe (electronic records allowed).",
        "A wage slip to every employee showing earnings, deductions and net pay.",
        "Display notices of minimum rates and wage periods where required.",
      ),
    ),
    screen(
      "Inspector-cum-facilitators",
      bullets(
        "Under the labour codes, inspectors also advise employers on compliance (“inspector-cum-facilitator”).",
        "Inspections can be scheduled through web-based systems; first-time issues may be given a chance to comply.",
        "Keep the current VDA order and wage registers ready.",
      ),
    ),
    screen(
      "Claims for underpayment",
      bullets(
        "Workers (or unions, or inspectors) can file claims for unpaid or underpaid wages with the authority under the Code.",
        "Claims must generally be filed within three years.",
        "The authority can order payment of the difference plus compensation.",
      ),
      p("If Metroline hadn't fixed Ramesh's ₹338 October shortfall, he could claim it plus compensation."),
    ),
    screen(
      "Penalties and compounding",
      bullets(
        "Paying less than the amount due, and other contraventions, are punishable with fines; repeat offences can attract higher fines and imprisonment.",
        "Some first offences can be compounded (settled) by paying a set amount.",
        "Records and prompt correction of errors reduce exposure.",
      ),
    ),
    screen(
      "Minimum wages checklist",
      bullets(
        "Appropriate government (central or state) identified for each site.",
        "Skill category and area recorded for each worker.",
        "Latest notification (basic + VDA) loaded from 1 April and 1 October.",
        "Overtime at 2× paid with the wage period.",
        "Wages paid by the deadline; leavers within two working days.",
        "Deductions within 50% and permitted heads.",
        "Equal pay checked; registers and wage slips complete.",
      ),
    ),
    mistakes(
      ["No wage slips", "Give one to every employee."],
      ["Out-of-date rate notice", "Display the current rates."],
      ["Ignoring small shortfalls", "Correct them with arrears."],
      ["No VDA order on file", "Keep each order."],
    ),
    check(
      6,
      q("What must every employee receive each wage period?", ["A wage slip", "A tax return", "A PF passbook", "A bonus"], 0, "Earnings, deductions, net pay."),
      q("Within what period must wage claims generally be filed?", ["Three years", "Three months", "Ten years", "One week"], 0, "Under the Code."),
      q("What can an authority order on an underpayment claim?", ["The difference plus compensation", "Only a warning", "Nothing", "Closure of the firm"], 0, "Worker protection."),
      q("What does compounding of an offence mean?", ["Settling certain offences by paying a set amount", "Adding interest", "Doubling the fine", "Transferring the case"], 0, "For eligible first offences."),
      q("What's an inspector called under the labour codes?", ["Inspector-cum-facilitator", "Tax officer", "Auditor", "Registrar"], 0, "Advises as well as inspects."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Inspection pack",
          ["List four documents Neha should have ready for an inspection."],
          ["The current VDA order, wage register with skill/area per worker, attendance and overtime registers, and wage slips (plus deduction records)."],
        ],
        [
          "Exercise 2 — Fixing an error",
          ["Neha finds three unskilled Area A workers were paid at ₹827 for 26 days in October. What should she do?"],
          ["Pay arrears of ₹13 × 26 = ₹338 each (₹1,014 total) immediately, correct payroll rates, and record the correction."],
        ],
      ),
    ),
    summary(
      ["Registers and wage slips", "Inspector-cum-facilitators", "Claims and limitation", "Penalties and compounding", "The checklist"],
      "Keep clear records, correct errors quickly, and check every rate against the current notification.",
    ),
  ],
}

function terms2() {
  return table(
    ["Category", "Typical meaning", "Metroline"],
    [
      ["Unskilled", "Work needing no special training", "Sweepers, loaders"],
      ["Semi-skilled / unskilled supervisory", "Some training or supervising unskilled staff", "Cleaning supervisor"],
      ["Skilled / clerical", "Trained, independent work", "Electrician"],
      ["Highly skilled", "High degree of skill and responsibility", "Senior technicians"],
      ["Area A / B / C", "Cities and towns classified by the notification", "Delhi is Area A"],
    ],
  )
}

export default lessons
