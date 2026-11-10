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

// Statutory Compliance: ESI — lesson screens by module index (0 = Module 1).
// The course follows Sagar Packaging Pvt Ltd, Ahmedabad (45 employees),
// through the October 2026 – March 2027 contribution period. Sample employees:
// Lalita (₹12,000 wages), Mohan (₹20,000, rising to ₹23,000), Imran (daily
// wage ₹170) and Neha (₹26,000 gross, ₹14,000 Code wages).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Introduction to ESI",
      ["Employees' State Insurance gives lower-paid workers medical care and cash benefits. This module introduces ESI through Sagar Packaging."],
      ["Explain what ESIC does", "Describe the main ESI benefits", "Place ESI within the Code on Social Security, 2020", "Decide which establishments must register", "Understand implemented areas"],
    ),
    screen(
      "Meet Sagar Packaging",
      p("Sagar Packaging Pvt Ltd makes corrugated boxes in Ahmedabad, Gujarat, with 45 employees. Pooja, the HR executive, handles ESI."),
      table(
        ["Sample employee", "Monthly pay", "ESI question"],
        [
          ["Lalita — machine operator", "₹12,000 wages", "A standard covered employee"],
          ["Mohan — shift supervisor", "₹20,000, rising to ₹23,000 in December", "Crossing the ceiling mid-period"],
          ["Imran — helper", "₹170 a day", "Low-wage exemption"],
          ["Neha — stores officer", "₹26,000 gross; ₹14,000 Code wages", "Newly covered under the Code"],
        ],
      ),
    ),
    screen(
      "What ESIC does",
      bullets(
        "The Employees' State Insurance Corporation (ESIC) runs a social insurance scheme funded by employer and employee contributions.",
        "It operates hospitals and dispensaries, and pays cash benefits.",
        "Insured persons and their families get medical care from the first day of insurable employment.",
      ),
    ),
    screen(
      "ESI benefits",
      table(
        ["Benefit", "What it provides (broadly)"],
        [
          ["Medical", "Full medical care for the insured person and family"],
          ["Sickness", "About 70% of average daily wages, for up to 91 days a year"],
          ["Maternity", "Full wages for up to 26 weeks"],
          ["Disablement", "About 90% of wages during temporary disablement; a pension for permanent disablement from employment injury"],
          ["Dependants'", "A monthly pension to dependants if an insured person dies from an employment injury"],
          ["Others", "Funeral expenses, unemployment allowance and more, subject to conditions"],
        ],
      ),
      note("Most cash benefits depend on contributions having been paid for a minimum number of days in the relevant contribution period."),
    ),
    screen(
      "ESI under the Code on Social Security",
      bullets(
        "The Code on Social Security, 2020 — in force from 21 November 2025 — replaced the Employees' State Insurance Act, 1948.",
        "ESIC continues, with the same contribution rates and ceiling.",
        "The Code's definition of “wages” (with the 50% rule) now applies to ESI.",
      ),
    ),
    screen(
      "Who must register, and implemented areas",
      table(
        ["Condition", "Detail"],
        [
          ["Headcount", "10 or more employees (lower or any number for notified hazardous work)"],
          ["Location", "In an area where ESIC has implemented the scheme"],
          ["Type", "Factories and notified establishments — shops, hotels, restaurants, cinemas, transport, private medical and educational institutions and others"],
        ],
      ),
      p("ESI has been extended to almost every district in India. Sagar's Ahmedabad unit, with 45 employees, is covered."),
    ),
    mistakes(
      ["Assuming ESI only covers factories", "Many establishment types are notified."],
      ["Waiting to register", "Register when the threshold is reached."],
      ["Using the old Act's wage definition", "The Code's definition applies."],
      ["Ignoring family coverage", "Dependants get medical care too."],
    ),
    check(
      1,
      q("Which body runs the ESI scheme?", ["ESIC", "EPFO", "CBDT", "GSTN"], 0, "Employees' State Insurance Corporation."),
      q("What sickness benefit is paid, broadly?", ["About 70% of average daily wages", "Full wages", "50% of wages", "Nothing"], 0, "For up to 91 days a year."),
      q("What headcount generally brings an establishment under ESI?", ["10 or more employees", "20 or more", "50 or more", "100 or more"], 0, "In implemented areas."),
      q("How long is maternity benefit under ESI?", ["Up to 26 weeks", "12 weeks", "6 weeks", "1 year"], 0, "At full wages."),
      q("From when does the Code's wage definition apply to ESI?", ["21 November 2025", "1 April 2026", "17 September 2026", "2019"], 0, "When the Code came into force."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Coverage",
          ["A restaurant in an implemented area has 12 employees. Must it register for ESI?"],
          ["Yes — restaurants are notified establishments, and it has 10 or more employees."],
        ],
        [
          "Exercise 2 — Benefits",
          ["Lalita is off sick for a long period. Roughly what does ESI pay?"],
          ["About 70% of her average daily wages for up to 91 days in a year, subject to contribution conditions — about ₹323 a day on ₹12,000 a month."],
        ],
      ),
    ),
    summary(
      ["ESIC's role", "Medical and cash benefits", "ESI under the Code", "Registration at 10 employees", "Implemented areas"],
      "ESI gives lower-paid employees medical care and income protection — funded by small monthly contributions.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Coverage and the Wage Ceiling",
      ["Coverage depends on wages and contribution periods. This module decides who Sagar must cover from October 2026."],
      ["Decide who counts as an employee for ESI", "Apply the ₹21,000 ceiling (₹25,000 for persons with disability)", "Calculate “wages” under the Code", "Identify employees newly covered under the Code", "Use contribution periods", "Handle employees who cross the ceiling mid-period"],
    ),
    screen(
      "Who counts as an employee",
      bullets(
        "Anyone employed for wages — permanent, temporary, casual, and workers engaged through contractors.",
        "Apprentices under the Apprentices Act are excluded.",
        "The principal employer is responsible if a contractor fails to pay ESI for its workers.",
      ),
    ),
    screen(
      "The wage ceiling",
      table(
        ["Employee", "Coverage ceiling"],
        [
          ["General", "Wages up to ₹21,000 a month"],
          ["Persons with disability", "Wages up to ₹25,000 a month"],
        ],
      ),
      note("The ₹21,000 ceiling has applied since 2017. A higher ceiling has been discussed but not notified — check the ESIC portal."),
    ),
    screen(
      "“Wages” under the Code — Neha's case",
      table(
        ["Neha — monthly", "Amount"],
        [
          ["Basic + DA + special allowance", "₹14,000"],
          ["HRA (excluded)", "₹8,000"],
          ["Conveyance (excluded)", "₹4,000"],
          ["Gross", "₹26,000"],
          ["Exclusions ₹12,000 — within 50% (₹13,000)", "No add-back"],
        ],
        { footer: ["ESI wages", "₹14,000"], numeric: [1] },
      ),
      p("Under the old ESI Act, Neha's ₹26,000 gross made her ineligible. Under the Code's definition, her wages are ₹14,000 — within the ceiling — so she's covered."),
      caution("Review every employee whose gross is above ₹21,000 but whose Code wages may be lower — they may now need coverage."),
    ),
    screen(
      "Contribution periods",
      table(
        ["Contribution period", "Corresponding benefit period"],
        [
          ["1 April – 30 September", "1 January – 30 June of the next year"],
          ["1 October – 31 March", "1 July – 31 December"],
        ],
      ),
      p("Coverage is decided at the start of each contribution period (or on joining) and continues for the whole period."),
    ),
    screen(
      "Crossing the ceiling mid-period",
      p("Mohan earns ₹20,000 on 1 October 2026, so he's covered for October–March. His pay rises to ₹23,000 in December."),
      table(
        ["Period", "Mohan's ESI"],
        [
          ["October – November 2026", "Contributions on ₹20,000"],
          ["December 2026 – March 2027", "Still covered — contributions on actual wages of ₹23,000"],
          ["From April 2027", "Not covered — wages above ₹21,000 at the start of the new period"],
        ],
      ),
      tip("Don't stop mid-period", "Payroll systems should keep deducting until the period ends."),
    ),
    mistakes(
      ["Using gross instead of Code wages", "Apply the Code's definition and 50% rule."],
      ["Stopping ESI when pay crosses ₹21,000 mid-period", "Continue to the end of the period."],
      ["Forgetting the disability ceiling", "₹25,000 applies."],
      ["Ignoring contractors' workers", "The principal employer can be liable."],
    ),
    check(
      2,
      q("What's the general ESI wage ceiling?", ["₹21,000 a month", "₹25,000 a month", "₹15,000 a month", "₹30,000 a month"], 0, "₹25,000 for persons with disability."),
      q("What are the two contribution periods?", ["April–September and October–March", "January–June and July–December", "Quarterly", "Monthly only"], 0, "Each with a benefit period."),
      q("If wages rise above the ceiling mid-period, coverage:", ["Continues until the period ends", "Stops immediately", "Stops next month", "Is backdated"], 0, "Then reassessed."),
      q("Which benefit period follows the April–September contribution period?", ["January–June of the next year", "October–March", "July–December", "Immediately"], 0, "A lag of three months."),
      q("Are apprentices under the Apprentices Act covered by ESI?", ["No", "Yes", "Only above ₹21,000", "Only in factories"], 0, "They're excluded."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Coverage",
          ["An employee earns ₹22,000 gross: wages ₹16,000, HRA ₹6,000. Is she covered?"],
          ["Exclusions ₹6,000 are within 50%, so wages are ₹16,000 — within ₹21,000. Yes, covered."],
        ],
        [
          "Exercise 2 — Mid-period",
          ["An employee joins on 10 May 2027 at ₹19,000 and gets a raise to ₹22,500 in August. When does coverage end?"],
          ["Covered for April–September 2027; from 1 October 2027 wages exceed ₹21,000, so coverage ends then."],
        ],
      ),
    ),
    summary(
      ["Who's an employee", "The ₹21,000 and ₹25,000 ceilings", "Code wages and the 50% rule", "Newly covered employees", "Contribution periods", "Crossing the ceiling mid-period"],
      "Coverage depends on Code wages at the start of each contribution period — and once covered, an employee stays covered to the period's end.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Calculating Contributions",
      ["This module calculates October 2026's ESI contributions for Sagar's four sample employees."],
      ["Calculate the employer contribution at 3.25%", "Calculate the employee contribution at 0.75%", "Apply the low-wage exemption", "Apply the rounding rules", "Work through examples"],
    ),
    screen(
      "Rates",
      table(
        ["Share", "Rate of wages"],
        [
          ["Employer", "3.25%"],
          ["Employee", "0.75%"],
        ],
        { footer: ["Total", "4%"] },
      ),
      p("These rates have applied since July 2019."),
    ),
    screen(
      "The low-wage exemption",
      p("Employees whose average daily wage is up to ₹176 don't pay the employee share — the employer still pays 3.25%."),
      example([["Imran: ₹170 a day × 26 days", "₹4,420"], ["Employee share", "Nil (daily wage ≤ ₹176)"]], ["Employer share 3.25%", "₹144"]),
    ),
    screen(
      "Rounding",
      bullets(
        "Each share is rounded up to the next higher rupee.",
        "Lalita: 0.75% × ₹12,000 = ₹90 exactly; 3.25% = ₹390.",
        "Mohan in December: 0.75% × ₹23,000 = ₹172.50 → ₹173; 3.25% = ₹747.50 → ₹748.",
      ),
    ),
    screen(
      "October 2026 contributions",
      table(
        ["Employee", "ESI wages", "Employee 0.75%", "Employer 3.25%"],
        [
          ["Lalita", "₹12,000", "₹90", "₹390"],
          ["Mohan", "₹20,000", "₹150", "₹650"],
          ["Imran", "₹4,420", "Nil", "₹144"],
          ["Neha", "₹14,000", "₹105", "₹455"],
        ],
        { footer: ["Total", "₹50,420", "₹345", "₹1,639"], numeric: [1, 2, 3] },
      ),
      p("Total payable for the four: ₹1,984."),
    ),
    screen(
      "What counts in ESI wages each month",
      compare(
        ["Included", "Remuneration within the Code's “wages”.", ["Basic, DA, special allowance", "Excess exclusions added back under the 50% rule"]],
        ["Excluded", "Listed exclusions within the 50% limit.", ["HRA, conveyance", "Overtime, bonus, commission (within limits)"]],
      ),
      note("Overtime is excluded from wages for coverage under the Code, but how it's treated for contributions should be checked against current ESIC guidance."),
    ),
    mistakes(
      ["Rounding down", "Always round up."],
      ["Deducting from exempt low-wage employees", "Only the employer pays."],
      ["Stopping employer share for exempt employees", "It's still due."],
      ["Using gross instead of ESI wages", "Use Code wages."],
    ),
    check(
      3,
      q("What's the total ESI contribution rate?", ["4%", "3.25%", "0.75%", "12%"], 0, "3.25% + 0.75%."),
      q("Up to what average daily wage is the employee share exempt?", ["₹176", "₹100", "₹250", "₹500"], 0, "The employer still pays."),
      q("Wages ₹18,500. Employee ESI?", ["₹139", "₹138", "₹601", "₹185"], 0, "₹138.75 rounded up."),
      q("Wages ₹18,500. Employer ESI?", ["₹602", "₹601", "₹139", "₹740"], 0, "₹601.25 rounded up."),
      q("Since when have the current ESI rates applied?", ["July 2019", "April 2026", "2017", "November 2025"], 0, "Reduced from 6.5%."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Contributions",
          ["Calculate ESI for wages of ₹15,750."],
          ["Employee 0.75% = ₹118.13 → ₹119; employer 3.25% = ₹511.88 → ₹512."],
        ],
        [
          "Exercise 2 — Exempt worker",
          ["A daily-wage worker earns ₹160 a day for 25 days. Calculate ESI."],
          ["Wages ₹4,000; employee share nil (≤ ₹176 a day); employer 3.25% = ₹130."],
        ],
      ),
    ),
    summary(
      ["Employer 3.25% and employee 0.75%", "The ₹176 low-wage exemption", "Rounding up", "October contributions", "What counts in ESI wages"],
      "ESI is 4% of wages — 3.25% from the employer and 0.75% from the employee — rounded up, with low-wage workers paying nothing.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Registration and Employee Enrolment",
      ["Benefits only flow to people who are properly registered. This module covers employer and employee registration."],
      ["Register an employer on the ESIC portal", "Register employees and generate Insurance Numbers", "Record family details and issue the e-Pehchan card", "Register new joiners on time", "Record exits"],
    ),
    screen(
      "Employer registration",
      steps(
        ["Apply online", "On the ESIC portal (or through the Shram Suvidha portal), with PAN, address and business details."],
        ["Receive the employer code", "A unique code used for all filings."],
        ["Register existing employees", "Everyone covered on the registration date."],
      ),
    ),
    screen(
      "Employee registration and the Insurance Number",
      bullets(
        "Each covered employee is registered online and receives an Insurance Number (IP number).",
        "The number stays with the employee across employers — reuse it, don't create a new one.",
        "Aadhaar seeding helps link records and avoid duplicates.",
      ),
      p("Pooja registers Neha in October 2026 because the Code's wage definition brings her within coverage."),
    ),
    screen(
      "Family details and e-Pehchan",
      bullets(
        "Record family members (spouse, children, dependent parents) so they can get medical care.",
        "The employee receives an e-Pehchan card (electronic identity) for treatment at ESIC facilities.",
        "Employees nominate a dispensary or hospital near their home.",
      ),
      tip("Day one", "Medical benefit starts from the first day of insurable employment — make sure new joiners know how to use it."),
    ),
    screen(
      "Registering new joiners on time",
      bullets(
        "Register a covered new joiner promptly — within the time set by the regulations (within 10 days of joining).",
        "Late registration can delay benefits and lead to employer liability if an accident happens before registration.",
        "Include joiners in that month's contribution filing.",
      ),
      caution("If an unregistered employee is injured at work, the employer may have to reimburse ESIC for the benefits paid."),
    ),
    screen(
      "Recording exits",
      bullets(
        "Mark the date of leaving on the portal after the last contribution.",
        "Medical benefit may continue for a limited time based on past contributions.",
        "If a former employee rejoins any covered employer, the same Insurance Number is used.",
      ),
    ),
    mistakes(
      ["Late registration of joiners", "Register within the time allowed."],
      ["Duplicate Insurance Numbers", "Search before registering."],
      ["Missing family details", "Dependants can't get treatment."],
      ["Not marking exits", "Records stay wrong."],
    ),
    check(
      4,
      q("What does each covered employee receive?", ["An Insurance Number", "A UAN", "A TAN", "A GSTIN"], 0, "Stays across employers."),
      q("What is the e-Pehchan card?", ["An electronic identity for ESI medical treatment", "A PF passbook", "A tax certificate", "A bank card"], 0, "For the employee and family."),
      q("When does medical benefit start?", ["From the first day of insurable employment", "After six months", "After a year", "On retirement"], 0, "Day one."),
      q("What's the risk if an unregistered covered employee is injured?", ["The employer may have to reimburse ESIC", "Nothing", "The employee pays", "The bank pays"], 0, "Register promptly."),
      q("What should happen if a former employee rejoins a covered employer?", ["Use the same Insurance Number", "Create a new number", "Exclude them", "Wait a year"], 0, "One number for life."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Joiner",
          ["A helper joins Sagar on 3 November 2026 at ₹15,000. By when should Pooja register him?"],
          ["Within 10 days — by 13 November 2026 — and include him in November's contributions."],
        ],
        [
          "Exercise 2 — Family",
          ["Lalita's widowed mother lives with her and depends on her. Can she get ESI medical care?"],
          ["Yes, if registered as a dependent family member and she meets the income conditions."],
        ],
      ),
    ),
    summary(
      ["Employer registration", "Insurance Numbers", "Family details and e-Pehchan", "Timely registration of joiners", "Recording exits"],
      "Register every covered employee and their family promptly — benefits start on day one.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Monthly Contributions and Filing",
      ["Each month Sagar files and pays ESI online. This module covers the process, the deadline and the cost of delay."],
      ["File monthly contributions online", "Pay through the ESIC portal", "Meet the 15th-of-month deadline", "Calculate interest and damages for late payment", "Correct contribution errors"],
    ),
    screen(
      "Filing monthly contributions",
      table(
        ["Field (per employee)", "Example — Lalita, October 2026"],
        [
          ["Insurance Number and name", "Lalita's IP number"],
          ["Days worked", "26"],
          ["Wages", "₹12,000"],
          ["Reason code if zero days or wages", "e.g. left service, on leave"],
        ],
      ),
      p("The portal calculates contributions from the uploaded wages. Pooja uploads an Excel file from payroll each month."),
    ),
    screen(
      "Paying and the due date",
      bullets(
        "Contributions for a month are due within 15 days of the end of the month — October 2026 by 15 November 2026.",
        "Pay online through the ESIC portal's challan using net banking.",
        "Keep the challan receipt with the month's return.",
      ),
      tip("Same day as PF", "Pooja pays ESI and PF together on the 10th, well before both deadlines."),
    ),
    screen(
      "Interest and damages",
      table(
        ["Delay", "Damages (yearly rate on arrears)"],
        [
          ["Less than 2 months", "5%"],
          ["2 to 4 months", "10%"],
          ["4 to 6 months", "15%"],
          ["More than 6 months", "25%"],
        ],
      ),
      p("Interest of 12% a year is also charged on late payment."),
      example(
        [["₹40,000 ESI paid 30 days late", ""], ["Interest: ₹40,000 × 12% × 30 ÷ 365", "₹395"], ["Damages: ₹40,000 × 5% × 30 ÷ 365", "₹164"]],
        ["Total cost", "₹559"],
      ),
      caution("Deducting the employee's share and not paying it is an offence."),
    ),
    screen(
      "Correcting errors",
      bullets(
        "Wrong wages or days for an employee: correct them on the portal within the time allowed.",
        "Missed employee: register them and pay the arrears with interest.",
        "Excess paid: adjust as the portal permits.",
        "Keep a record of every correction.",
      ),
    ),
    screen(
      "The monthly ESI routine",
      steps(
        ["Coverage check", "New joiners, ceiling crossers (continue to period end), Code-wage reviews."],
        ["Upload", "Wages and days for every covered employee."],
        ["Reconcile", "Portal totals = payroll ESI totals."],
        ["Pay", "By the 15th (Sagar: the 10th)."],
        ["Record", "Clear the ESI payable ledger."],
      ),
    ),
    mistakes(
      ["Paying after the 15th", "Interest and damages apply."],
      ["Zero wages without a reason code", "Explain non-contributing months."],
      ["Uploads that don't match payroll", "Reconcile first."],
      ["Ignoring corrections", "Fix errors promptly."],
    ),
    check(
      5,
      q("By when must October 2026's ESI be paid?", ["15 November 2026", "7 November 2026", "31 October 2026", "30 November 2026"], 0, "Within 15 days of month end."),
      q("What's the interest rate on late ESI payments?", ["12% a year", "18% a year", "1.5% a month", "24% a year"], 0, "Plus damages."),
      q("What damages rate applies for a 5-month delay?", ["15% a year", "5% a year", "10% a year", "25% a year"], 0, "4 to 6 months."),
      q("What's needed for an employee with zero wages in a month?", ["A reason code", "A new Insurance Number", "Nothing", "A PF claim"], 0, "e.g. left service."),
      q("How are ESI contributions paid?", ["Online through the ESIC portal challan", "In cash at the office", "Through GST", "By cheque to the employee"], 0, "Net banking."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Late cost",
          ["₹60,000 ESI is paid 75 days late. Calculate interest and damages."],
          ["Interest: ₹60,000 × 12% × 75 ÷ 365 = ₹1,479. Damages (2–4 months, 10%): ₹60,000 × 10% × 75 ÷ 365 = ₹1,233."],
        ],
        [
          "Exercise 2 — Reconcile",
          ["Payroll shows employee ESI of ₹345 for the four sample employees; the portal shows ₹240. What's likely wrong?"],
          ["₹105 difference — Neha's contribution is missing; she may not have been registered or uploaded."],
        ],
      ),
    ),
    summary(
      ["Online monthly filing", "Payment by the 15th", "Interest and damages", "Corrections", "The monthly routine"],
      "Upload, reconcile and pay ESI by the 15th — every covered employee, every month.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Benefits, Claims, Records and Inspections",
      ["This module covers what employers do when employees need ESI benefits, plus records and inspections."],
      ["Report workplace accidents", "Support sickness and maternity claims", "Keep registers and records", "Handle ESIC inspections and notices", "Use a monthly ESI checklist"],
    ),
    screen(
      "Reporting workplace accidents",
      p("Imran cuts his hand on a machine at Sagar's factory."),
      steps(
        ["First aid and treatment", "Send him to the nearest ESI facility (or for emergency care)."],
        ["Report online", "File the accident report on the ESIC portal within the time set by the regulations."],
        ["Record", "Enter it in the accident book."],
        ["Support the claim", "Provide wage and attendance details for disablement benefit."],
      ),
      caution("Late or missing accident reports delay benefits and can lead to penalties."),
    ),
    screen(
      "Sickness and maternity claims",
      table(
        ["Benefit", "Employer's role"],
        [
          ["Sickness", "Confirm attendance and wages; don't pay wages for days ESI pays benefit (unless policy tops up)"],
          ["Maternity", "Confirm contributions and pay records; coordinate leave with maternity benefit under the Code"],
        ],
      ),
      p("Lalita is certified sick for 10 days by an ESI doctor. ESI pays her sickness benefit; Sagar records the absence."),
    ),
    screen(
      "Registers and records",
      bullets(
        "Register of employees covered, with Insurance Numbers.",
        "Monthly contribution returns and challans.",
        "Wage and attendance records supporting the uploads.",
        "Accident book and accident reports.",
        "Contractors' ESI challans for their workers.",
      ),
      p("Records can be kept electronically and must be available for inspection."),
    ),
    screen(
      "Inspections and notices",
      steps(
        ["Notice", "ESIC schedules an inspection or asks for records."],
        ["Prepare", "Wage records, returns, challans, contractor compliance."],
        ["Explain", "Coverage decisions — e.g. why Mohan stayed covered after crossing ₹21,000, why Neha was added."],
        ["Pay any assessed dues", "Or reply with evidence."],
        ["Appeal", "Within the time allowed if you disagree."],
      ),
    ),
    screen(
      "Monthly ESI compliance checklist",
      bullets(
        "Coverage reviewed using Code wages; persons with disability up to ₹25,000.",
        "New joiners registered within 10 days, with family details.",
        "Ceiling crossers continued to period end.",
        "Low-wage employees exempt from the employee share; employer share paid.",
        "Contributions rounded up, uploaded and paid by the 15th.",
        "Accidents reported; claims supported.",
        "Contractors' ESI challans collected.",
        "ESI payable ledger cleared.",
      ),
    ),
    mistakes(
      ["Late accident reports", "Report promptly online."],
      ["Paying wages and ESI benefit for the same days", "Coordinate with policy."],
      ["No contractor checks", "The principal employer can be liable."],
      ["Unprepared for inspection", "Keep records ready."],
    ),
    check(
      6,
      q("What should an employer do after a workplace accident?", ["Arrange treatment and report it online to ESIC", "Wait for the employee to report", "Nothing", "Pay a fine"], 0, "And record it."),
      q("Who certifies sickness for ESI sickness benefit?", ["An ESI doctor", "The employer", "The bank", "Any colleague"], 0, "Then ESI pays."),
      q("Which record is kept for workplace accidents?", ["The accident book", "The sales register", "The fixed asset register", "GSTR-1"], 0, "Plus the online report."),
      q("Why collect contractors' ESI challans?", ["The principal employer can be liable for unpaid contributions", "To claim ITC", "For PF", "It's optional"], 0, "Monthly check."),
      q("What should a disagreement with an ESIC assessment lead to?", ["An appeal within the time allowed", "Ignoring it", "Stopping contributions", "A new registration"], 0, "With evidence."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Inspection question",
          ["The inspector asks why Mohan's ESI continued in January 2027 when he earned ₹23,000. What's Pooja's answer?"],
          ["He was covered at the start of the October–March contribution period (₹20,000). Coverage continues to 31 March 2027 even though his pay rose; it ends from April 2027."],
        ],
        [
          "Exercise 2 — Accident",
          ["List Pooja's steps after Imran's injury."],
          ["Arrange treatment at an ESI facility, report the accident online within the time limit, enter it in the accident book, and provide wage and attendance details for his claim."],
        ],
      ),
    ),
    summary(
      ["Accident reporting", "Sickness and maternity claims", "Registers and records", "Inspections", "The monthly checklist"],
      "Employers make ESI work in practice — reporting accidents, supporting claims and keeping records ready for inspection.",
    ),
  ],
}

export default lessons
