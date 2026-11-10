import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
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

// Statutory Compliance: Labour Welfare Fund — lesson screens by module index
// (0 = Module 1). The course follows Pinewood Retail Pvt Ltd, with stores in
// Pune (Maharashtra), Bengaluru (Karnataka) and Gurugram (Haryana), through
// 2026-27. LWF amounts are set by each state and change — the amounts used
// here are the commonly published current figures and must be confirmed with
// each welfare board before use.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — What the Labour Welfare Fund Is",
      ["The Labour Welfare Fund (LWF) is a small state levy that pays for welfare facilities for workers. This module introduces it through Pinewood Retail."],
      ["Explain the purpose of LWF", "Describe state LWF Acts and welfare boards", "Identify who contributes", "Recognise that only some states run a fund", "Distinguish LWF from EPF, ESI and professional tax"],
    ),
    screen(
      "Meet Pinewood Retail",
      p("Pinewood Retail Pvt Ltd runs home-goods stores. Ananya, its payroll lead, handles LWF in three states."),
      table(
        ["Store", "State", "Staff", "LWF cycle"],
        [
          ["Pune", "Maharashtra", "40", "Half-yearly (June and December)"],
          ["Bengaluru", "Karnataka", "30", "Annual (calendar year)"],
          ["Gurugram", "Haryana", "20", "Monthly, wage-linked"],
        ],
      ),
    ),
    screen(
      "Purpose and welfare boards",
      bullets(
        "Each participating state has a Labour Welfare Fund Act and a welfare board that runs the fund.",
        "The fund pays for workers' welfare: education scholarships, medical help, training, holiday homes, sports and cultural activities.",
        "Workers and their families apply to the board for benefits.",
      ),
    ),
    screen(
      "Who contributes",
      table(
        ["Contributor", "How"],
        [
          ["Employee", "A small amount deducted from wages"],
          ["Employer", "Usually a multiple of the employee share (often twice or three times)"],
          ["State government", "In some states, a matching grant"],
        ],
      ),
      caution("The employer's share can never be recovered from employees."),
    ),
    screen(
      "Not every state has a fund",
      p("Only some states and union territories run a Labour Welfare Fund — among them Maharashtra, Karnataka, Haryana, Gujarat and Tamil Nadu. Others have no fund at all."),
      note("Check each state where you employ staff — the list changes as states amend their laws."),
    ),
    screen(
      "LWF vs. other deductions",
      compare(
        ["LWF", "State welfare levy.", ["Small fixed or capped amounts", "Half-yearly, annual or monthly by state", "Funds welfare schemes"]],
        ["EPF, ESI and PT", "Other statutory deductions.", ["EPF/ESI: national, % of wages, individual benefits", "PT: a state tax on employment", "Different rules and portals"]],
      ),
    ),
    mistakes(
      ["Assuming every state has LWF", "Many don't."],
      ["Recovering the employer share", "It's never allowed."],
      ["Treating LWF like professional tax", "Different law, purpose and timing."],
      ["Ignoring small amounts", "Non-payment brings interest and penalties."],
    ),
    check(
      1,
      q("What does the Labour Welfare Fund pay for?", ["Welfare facilities for workers and families", "Pensions", "Income tax", "Health insurance claims only"], 0, "Scholarships, medical help, training and more."),
      q("Who runs each state's fund?", ["A state welfare board", "EPFO", "ESIC", "The RBI"], 0, "Under the state Act."),
      q("Can the employer's LWF share be deducted from employees?", ["No", "Yes", "Only in December", "Only for managers"], 0, "It's the employer's cost."),
      q("Does every state have an LWF?", ["No", "Yes", "Only northern states", "Only coastal states"], 0, "Check each state."),
      q("How is LWF different from professional tax?", ["It's a welfare levy, not a tax on employment", "It's the same thing", "It's a central tax", "It's paid by customers"], 0, "Different law and purpose."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Contributors",
          ["Name the three possible contributors to an LWF and who pays most."],
          ["Employees, employers and (in some states) the government. The employer usually pays the largest share."],
        ],
        [
          "Exercise 2 — Check states",
          ["Pinewood opens a store in a new state. What's the first LWF step?"],
          ["Check whether that state has a Labour Welfare Fund Act and whether the establishment is covered."],
        ],
      ),
    ),
    summary(
      ["The purpose of LWF", "State Acts and welfare boards", "Who contributes", "States with and without a fund", "How LWF differs from other deductions"],
      "LWF is a state-by-state welfare levy — find out where it applies before setting up payroll.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Applicability",
      ["Each state decides which establishments and employees are covered. This module checks Pinewood's stores."],
      ["Identify covered establishments", "Apply employee-count thresholds", "Identify covered employees", "Register with the welfare board", "Handle employers with staff in several states"],
    ),
    screen(
      "Covered establishments",
      bullets(
        "Usually factories, shops and commercial establishments, motor transport undertakings and others named in each Act.",
        "Some states apply only above a minimum number of employees.",
        "Pinewood's stores are shops and establishments, covered in all three states.",
      ),
    ),
    screen(
      "Which employees are covered",
      table(
        ["Typical rule", "Example"],
        [
          ["Most employees on the register are covered", "Sales staff, cashiers, warehouse staff"],
          ["Some managerial or supervisory staff above a wage limit are excluded", "In Maharashtra, certain managerial staff above the Act's wage limit"],
          ["Coverage can depend on being on the register on a set date", "Maharashtra: staff on the register on 30 June and 31 December"],
        ],
      ),
      note("Definitions differ by state — read each Act's definition of “employee”."),
    ),
    screen(
      "Registration",
      steps(
        ["Identify the board", "The state Labour Welfare Board where the store operates."],
        ["Register the establishment", "Online on the board's portal where available."],
        ["Record the registration number", "Use it on every payment and return."],
      ),
    ),
    screen(
      "Multi-state employers",
      bullets(
        "LWF follows the state where the employee works.",
        "Keep a state code for each employee in payroll.",
        "Employees who transfer mid-year follow the rules of the state they're registered in on each contribution date.",
      ),
      tip("One calendar", "Ananya keeps a single LWF calendar covering all three states."),
    ),
    mistakes(
      ["Registering only at head office", "Register in each state with staff."],
      ["Covering excluded managerial staff", "Check each Act's definition."],
      ["Missing the register date rule", "Maharashtra counts staff on 30 June and 31 December."],
      ["No state code in payroll", "Contributions go to the wrong state."],
    ),
    check(
      2,
      q("Which state's rules apply to an employee's LWF?", ["The state where they work", "Head office state", "Their home state", "Any state"], 0, "By place of work."),
      q("In Maharashtra, which staff count for each half-year?", ["Those on the register on 30 June and 31 December", "Only permanent staff", "Everyone hired that year", "Only managers"], 0, "Register dates."),
      q("What's needed on every LWF payment?", ["The establishment's registration number", "The employee's PAN", "The GSTIN", "The bank's IFSC only"], 0, "Register with the board first."),
      q("Are all managerial staff always covered?", ["No — some above a wage limit are excluded", "Yes, always", "Only in Haryana", "Only in December"], 0, "Depends on the state's definition."),
      q("What payroll field helps multi-state LWF?", ["A state code per employee", "Gender", "Blood group", "Date of birth"], 0, "Contributions follow the state."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Register count",
          ["Pune had 38 staff on 1 June, hired 3 in June and 1 left on 28 June. How many count for the June contribution?"],
          ["40 — the staff on the register on 30 June."],
        ],
        [
          "Exercise 2 — Transfer",
          ["A Bengaluru employee moves to Pune on 1 September. Where is LWF paid for December?"],
          ["Maharashtra — she's on the Pune register on 31 December."],
        ],
      ),
    ),
    summary(
      ["Covered establishments", "Covered employees and exclusions", "Registration", "Multi-state employers"],
      "Apply each state's Act to each location — coverage follows where the employee works and is on the register.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Contribution Cycles and Amounts",
      ["States collect LWF on different cycles and amounts. This module calculates Pinewood's contributions."],
      ["Distinguish fixed and wage-linked contributions", "Apply Maharashtra's half-yearly cycle", "Apply Karnataka's annual cycle", "Apply Haryana's wage-linked contributions", "Calculate the employer's share", "Find current amounts on board websites"],
    ),
    screen(
      "Fixed vs. wage-linked",
      compare(
        ["Fixed per employee", "A set amount for each employee per cycle.", ["Maharashtra", "Karnataka"]],
        ["Wage-linked", "A percentage of wages, usually capped.", ["Haryana"]],
      ),
    ),
    screen(
      "Maharashtra — half-yearly",
      table(
        ["Per employee per half-year", "Amount used in this course"],
        [
          ["Employee", "₹25"],
          ["Employer", "₹75"],
        ],
      ),
      p("Pune had 40 staff on the register on 30 June 2026: employee 40 × ₹25 = ₹1,000; employer 40 × ₹75 = ₹3,000; total ₹4,000."),
      note("Maharashtra's Act and forms set the contribution per employee for each half-year (based on 30 June and 31 December). Confirm the current amounts on the Maharashtra Labour Welfare Board website."),
    ),
    screen(
      "Karnataka — annual",
      table(
        ["Per employee per calendar year", "Amount used in this course"],
        [
          ["Employee", "₹50"],
          ["Employer", "₹100"],
        ],
      ),
      p("Bengaluru had 30 staff in December 2026: employee 30 × ₹50 = ₹1,500; employer 30 × ₹100 = ₹3,000; total ₹4,500."),
      note("These are the commonly published current amounts. Some Karnataka board pages still show the earlier ₹20 / ₹40 — confirm with the board's latest press note for the year."),
    ),
    screen(
      "Haryana — monthly, wage-linked",
      bullets(
        "Employee: 0.2% of wages each month, subject to a monthly cap.",
        "Employer: twice the employee's contribution.",
        "This course uses a cap of ₹31 a month, as shown on the Haryana Labour Department's current highlights (an earlier notice shows ₹25).",
      ),
      table(
        ["Gurugram employee wages", "Employee 0.2%", "Employer (2×)"],
        [
          ["₹12,000", "₹24", "₹48"],
          ["₹20,000", "₹31 (cap)", "₹62"],
        ],
      ),
    ),
    screen(
      "Finding the current amounts",
      steps(
        ["Go to the state welfare board website", "Or the labour department portal."],
        ["Find the latest notification or press note", "Amounts and due dates for the year."],
        ["Update payroll", "With effective dates."],
        ["Keep a copy", "With your payroll setup records."],
      ),
      caution("LWF amounts are revised by state notifications. Never rely on an old table — including the amounts in this course."),
    ),
    mistakes(
      ["Using one state's amounts everywhere", "Each state differs."],
      ["Forgetting Haryana's cap", "0.2% is capped monthly."],
      ["Counting Maharashtra staff on the wrong date", "Use 30 June and 31 December."],
      ["Out-of-date amounts", "Check the board each year."],
    ),
    check(
      3,
      q("How often is LWF collected in Maharashtra?", ["Half-yearly", "Monthly", "Annually", "Quarterly"], 0, "June and December."),
      q("How often in Karnataka?", ["Annually, for the calendar year", "Monthly", "Half-yearly", "Weekly"], 0, "Due by 15 January."),
      q("How is Haryana's employee contribution set?", ["0.2% of wages, capped monthly", "A fixed ₹25 a year", "1% of wages", "Nil"], 0, "Employer pays twice."),
      q("Using ₹25 / ₹75, what's the total half-yearly LWF for 10 Maharashtra staff?", ["₹1,000", "₹250", "₹750", "₹100"], 0, "10 × ₹100."),
      q("What must be checked before using any LWF amount?", ["The board's current notification", "Last year's payslips", "A blog", "Nothing"], 0, "Amounts change."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Maharashtra December",
          ["Pune has 42 staff on 31 December 2026. Using ₹25 / ₹75, calculate the December contribution."],
          ["Employee ₹1,050; employer ₹3,150; total ₹4,200."],
        ],
        [
          "Exercise 2 — Haryana",
          ["A Gurugram employee earns ₹14,000. Using 0.2% capped at ₹31, calculate the monthly employee and employer contributions."],
          ["Employee 0.2% × ₹14,000 = ₹28; employer ₹56."],
        ],
      ),
    ),
    summary(
      ["Fixed and wage-linked contributions", "Maharashtra half-yearly", "Karnataka annual", "Haryana wage-linked with a cap", "The employer's share", "Checking current amounts"],
      "Know each state's cycle and formula — and confirm the amounts on the board's website every year.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Deductions and Payment",
      ["This module deducts the employee share in the right month and pays each board on time."],
      ["Deduct the employee share from the right month", "Never recover the employer's share", "Meet each state's due dates", "Pay online through board portals", "Know the interest and penalties for late payment"],
    ),
    screen(
      "Which month to deduct",
      table(
        ["State", "Deduct the employee share from"],
        [
          ["Maharashtra", "June and December wages"],
          ["Karnataka", "December wages"],
          ["Haryana", "Every month's wages"],
        ],
      ),
    ),
    screen(
      "The employer's share",
      bullets(
        "Paid entirely by the employer, in addition to wages.",
        "Can't be deducted from wages or included in a “cost to company” deduction.",
        "Book it as an employer cost each cycle.",
      ),
      caution("Recovering the employer's share from employees is an offence under the state Acts."),
    ),
    screen(
      "Due dates",
      table(
        ["State", "Due date (as commonly applied)"],
        [
          ["Maharashtra", "By 15 July (June cycle) and 15 January (December cycle)"],
          ["Karnataka", "By 15 January of the following year (e.g. 15 January 2027 for 2026)"],
          ["Haryana", "Monthly, by the date the board specifies"],
        ],
      ),
      note("Karnataka's board confirms the 15 January deadline each year (the 2025 contributions were due by 15 January 2026). Confirm other states' current dates with their boards."),
    ),
    screen(
      "Paying online",
      steps(
        ["Log in to the board's portal", "With the establishment registration."],
        ["Enter employee numbers or wage details", "For the period."],
        ["Pay both shares together", "Online, as the portal requires."],
        ["Save the receipt", "For the return and records."],
      ),
    ),
    screen(
      "Interest and penalties",
      bullets(
        "Late payment attracts interest — for example, Haryana charges 12% a year from the due date.",
        "Persistent non-payment can lead to prosecution and fines under the state Acts.",
        "Unpaid amounts may be recovered as arrears of land revenue.",
      ),
    ),
    mistakes(
      ["Deducting in the wrong month", "Follow each state's month."],
      ["Recovering the employer share", "Never allowed."],
      ["Missing 15 January", "Karnataka and Maharashtra deadlines fall then."],
      ["Losing receipts", "Keep them with the returns."],
    ),
    check(
      4,
      q("From which month's wages is Karnataka's employee share deducted?", ["December", "January", "June", "Every month"], 0, "Paid by 15 January."),
      q("When is Karnataka LWF for calendar year 2026 due?", ["By 15 January 2027", "By 31 December 2026", "By 31 March 2027", "By 15 July 2026"], 0, "Annual cycle."),
      q("Can the employer's share be included in employees' CTC deductions?", ["No", "Yes", "Only in Haryana", "Only with consent"], 0, "It's an offence."),
      q("What interest does Haryana charge on late LWF?", ["12% a year", "18% a year", "1% a month", "Nil"], 0, "From the due date."),
      q("When is Maharashtra's June contribution generally due?", ["By 15 July", "By 30 June", "By 15 January", "By 31 March"], 0, "December's by 15 January."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Deduction months",
          ["List the months Pinewood deducts LWF from wages in each state."],
          ["Maharashtra: June and December. Karnataka: December. Haryana: every month."],
        ],
        [
          "Exercise 2 — Late interest",
          ["Haryana LWF of ₹1,692 for a month is paid 60 days late. Calculate interest at 12% a year."],
          ["₹1,692 × 12% × 60 ÷ 365 = ₹33.38 ≈ ₹33."],
        ],
      ),
    ),
    summary(
      ["Deduction months by state", "The employer's share", "Due dates", "Online payment", "Interest and penalties"],
      "Deduct in the right month, never recover the employer's share, and pay each board by its deadline.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Returns and Records",
      ["Boards check contributions through returns, records and inspections. This module keeps Pinewood ready."],
      ["Prepare contribution statements and returns", "Maintain registers", "Handle unpaid accumulations and unclaimed wages", "Respond to inspections and notices"],
    ),
    screen(
      "Statements and returns",
      bullets(
        "Each payment is usually accompanied by a statement of employees and amounts.",
        "Some boards require an annual or half-yearly return in a prescribed form.",
        "Keep acknowledgements with the payment receipts.",
      ),
    ),
    screen(
      "Registers",
      bullets(
        "Register of employees with the dates that decide coverage.",
        "Record of LWF deducted per employee and paid per cycle.",
        "Copies of challans, receipts and returns.",
      ),
    ),
    screen(
      "Unpaid accumulations and unclaimed wages",
      p("In several states, the LWF also receives wages, bonus or other amounts that remain unpaid to employees for a set period, and fines deducted from wages."),
      bullets(
        "Track unclaimed wages and pay them to the board when the Act requires (Maharashtra, for example, sets quarterly timelines).",
        "Employees can still claim them from the board later.",
      ),
      note("Check each state's Act — not every state treats unclaimed wages this way."),
    ),
    screen(
      "Inspections and notices",
      steps(
        ["Notice", "The board or an inspector asks for records."],
        ["Prepare", "Registers, payment receipts, statements."],
        ["Respond", "Explain coverage decisions and pay any shortfall with interest."],
      ),
    ),
    mistakes(
      ["Paying without the statement", "File the employee details too."],
      ["Ignoring unclaimed wages", "Some states require transfer to the fund."],
      ["No register of coverage dates", "Inspectors ask for it."],
      ["Missing notices", "Diary and respond on time."],
    ),
    check(
      5,
      q("What usually accompanies an LWF payment?", ["A statement of employees and amounts", "A GST invoice", "A PF passbook", "Nothing"], 0, "Keep acknowledgements."),
      q("Which amounts may some states require to be paid into the LWF?", ["Unclaimed wages and fines", "Income tax refunds", "GST credits", "PF balances"], 0, "Check each Act."),
      q("What should Pinewood keep for inspections?", ["Registers, receipts and statements", "Only payslips", "Only bank statements", "Nothing"], 0, "Full records."),
      q("Can employees later claim unpaid wages transferred to the fund?", ["Yes, from the board", "No", "Only within a week", "Only managers"], 0, "Under the Act."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Records",
          ["List three records Ananya should produce if the Maharashtra board inspects."],
          ["Register of employees on 30 June and 31 December, LWF deduction and payment records, and challans/receipts with statements."],
        ],
        [
          "Exercise 2 — Unclaimed wages",
          ["A Pune employee left without collecting ₹6,000 of wages. What should Ananya check?"],
          ["Whether Maharashtra's Act requires unclaimed wages to be paid to the fund after a set period, and the timeline."],
        ],
      ),
    ),
    summary(
      ["Statements and returns", "Registers", "Unclaimed wages", "Inspections"],
      "Good records — coverage dates, deductions and receipts — make LWF inspections routine.",
    ),
  ],
  5: [
    overview(
      "Module 6 — LWF in Payroll",
      ["The last module builds LWF into Pinewood's payroll, payslips, accounts and calendar."],
      ["Set up LWF in payroll software by state", "Show LWF on payslips", "Record LWF in the books", "Use an annual LWF calendar and checklist"],
    ),
    screen(
      "Payroll setup",
      table(
        ["Setting", "Purpose"],
        [
          ["State code per employee", "Which Act applies"],
          ["Cycle per state", "Monthly, half-yearly or annual"],
          ["Amount or rate and cap, with effective dates", "Correct deductions after revisions"],
          ["Deduction month(s)", "June/December, December, or monthly"],
          ["Exclusion flags", "Excluded managerial staff"],
        ],
      ),
    ),
    screen(
      "Payslips",
      bullets(
        "Show the employee LWF deduction as a separate line in the deduction month.",
        "Optionally show the employer's share as an employer contribution — never as a deduction.",
      ),
    ),
    screen(
      "Accounting",
      p("Pune's June 2026 contribution:"),
      journal([["LWF expense — employer share", "₹3,000", ""], ["Salaries payable — employee share withheld from June wages", "₹1,000", ""], ["LWF payable", "", "₹4,000"]], "₹4,000"),
      p("When paid to the board: Dr LWF payable ₹4,000, Cr Bank ₹4,000."),
      tip("Clear the payable", "The LWF payable balance should be nil after each payment date."),
    ),
    screen(
      "Annual LWF calendar",
      table(
        ["Month", "Pinewood task"],
        [
          ["Every month", "Haryana: deduct, add employer share, pay"],
          ["June", "Maharashtra: deduct employee share from June wages"],
          ["By 15 July", "Maharashtra: pay June contribution"],
          ["December", "Maharashtra and Karnataka: deduct employee shares"],
          ["By 15 January", "Maharashtra (December cycle) and Karnataka (annual) payments"],
          ["Each April", "Check every board for revised amounts and dates"],
        ],
      ),
    ),
    mistakes(
      ["Hard-coding amounts in payroll", "Use effective-dated tables."],
      ["Showing the employer share as a deduction", "It's an employer cost."],
      ["Uncleared LWF payable", "Reconcile after each payment."],
      ["No annual review", "Amounts change."],
    ),
    check(
      6,
      q("How should the employer's LWF share appear on a payslip?", ["As an employer contribution, not a deduction", "As a deduction", "Not at all, ever", "As tax"], 0, "It's not recovered."),
      q("Which account is credited when LWF is deducted and accrued?", ["LWF payable", "Revenue", "Share capital", "Bank"], 0, "Until paid."),
      q("Which payroll setting handles a state's revised amount?", ["Effective-dated amount tables", "Employee photos", "Leave balances", "Bank details"], 0, "From the revision date."),
      q("Which two LWF payments fall due by 15 January for Pinewood?", ["Maharashtra (December cycle) and Karnataka (annual)", "Haryana and Karnataka", "Only Haryana", "None"], 0, "Plan for both."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Annual cost",
          ["Using the course amounts, what is Pinewood's employer LWF cost for 2026-27? (Pune: 40 in June, 42 in December; Bengaluru 30; Gurugram employer share ₹1,128 a month.)"],
          ["Maharashtra ₹3,000 + ₹3,150 = ₹6,150; Karnataka ₹3,000; Haryana ₹1,128 × 12 = ₹13,536. Total ₹22,686."],
        ],
        [
          "Exercise 2 — Checklist",
          ["Name three items for Pinewood's LWF checklist."],
          ["State codes and coverage checked; deductions in the right months with current amounts; payments by each due date with receipts and statements — plus annual review of amounts."],
        ],
      ),
    ),
    summary(
      ["Payroll setup by state", "Payslips", "Accounting entries", "The annual calendar"],
      "Set LWF up by state with effective-dated amounts, keep the employer share separate, and review every board's rates each year.",
    ),
  ],
}

export default lessons
