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

// Statutory Compliance: Professional Tax — lesson screens by module index
// (0 = Module 1). The course follows Trellis Analytics Pvt Ltd, with offices in
// Pune, Bengaluru and Kolkata and remote staff in Delhi and Chennai, in tax
// year 2026-27. Slabs are examples only — confirm on each state's portal.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — What Professional Tax Is",
      ["Professional tax is small per person but different in every state. This module explains it through Trellis Analytics."],
      ["Explain professional tax as a state tax", "Know its constitutional basis and the ₹2,500 cap", "Identify who pays", "Know which states levy it"],
    ),
    screen(
      "Meet Trellis Analytics",
      table(
        ["Location", "Staff", "Professional tax?"],
        [
          ["Pune, Maharashtra", "40", "Yes — monthly slabs"],
          ["Bengaluru, Karnataka", "25", "Yes — monthly slabs"],
          ["Kolkata, West Bengal", "15", "Yes — monthly slabs"],
          ["Delhi (remote)", "3", "No professional tax"],
          ["Chennai, Tamil Nadu (remote)", "2", "Yes — half-yearly, set by local bodies"],
        ],
      ),
      p("Farah, the payroll lead, runs one payroll but five sets of professional tax rules."),
    ),
    screen(
      "A state tax on professions, trades and employment",
      bullets(
        "States (and in some cases local bodies) levy it on people earning from a profession, trade, calling or employment.",
        "For salaried staff, the employer deducts it from salary and pays it to the state.",
        "Professionals and businesses also pay it for themselves.",
        "It's deductible from salary income for income tax.",
      ),
    ),
    screen(
      "Constitutional basis and the ₹2,500 cap",
      p("Article 276 of the Constitution allows states to levy taxes on professions, trades, callings and employment — but the total payable by one person in a year can't exceed ₹2,500."),
      tip("Why February is different", "Some states charge ₹200 a month and ₹300 in February, so the year totals exactly ₹2,500."),
    ),
    screen(
      "Who pays",
      table(
        ["Payer", "How"],
        [
          ["Employees", "Deducted by the employer each month (or half-year)"],
          ["Professionals — doctors, lawyers, CAs, consultants", "Pay for themselves under an enrolment"],
          ["Businesses — companies, firms, traders", "Pay an annual amount under an enrolment"],
        ],
      ),
    ),
    screen(
      "States that levy it — and those that don't",
      compare(
        ["Levy professional tax", "Many states.", ["Maharashtra", "Karnataka", "West Bengal", "Tamil Nadu (local bodies)", "Gujarat, Andhra Pradesh, Telangana and others"]],
        ["Don't levy it", "Several states and union territories.", ["Delhi", "Haryana", "Uttar Pradesh", "Rajasthan"]],
      ),
      note("States add, change or abolish professional tax from time to time. Check each state's current position before setting up payroll."),
    ),
    mistakes(
      ["Applying one state's slab everywhere", "Use the employee's work state."],
      ["Deducting more than ₹2,500 a year", "The cap is constitutional."],
      ["Forgetting the employer's own enrolment", "Businesses pay too."],
      ["Deducting in states without PT", "Delhi staff pay none."],
    ),
    check(
      1,
      q("Which level of government levies professional tax?", ["State (or local bodies)", "Central government", "Municipal water boards", "RBI"], 0, "Under Article 276."),
      q("What's the maximum professional tax per person per year?", ["₹2,500", "₹5,000", "₹1,200", "₹10,000"], 0, "Constitutional cap."),
      q("Which of these doesn't levy professional tax?", ["Delhi", "Maharashtra", "Karnataka", "West Bengal"], 0, "Delhi staff pay none."),
      q("Who deducts professional tax for salaried staff?", ["The employer", "The bank", "The employee's landlord", "The income tax department"], 0, "And pays it to the state."),
      q("Is professional tax deductible for income tax on salary?", ["Yes", "No", "Only for professionals", "Only in Maharashtra"], 0, "From salary income."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Where does it apply?",
          ["Trellis hires in Gurugram (Haryana) and Hyderabad (Telangana). Which new hires need professional tax deducted?"],
          ["Hyderabad (Telangana levies professional tax). Gurugram — Haryana doesn't levy it."],
        ],
        [
          "Exercise 2 — Cap",
          ["Could a state charge ₹300 every month?"],
          ["No — 12 × ₹300 = ₹3,600, above the ₹2,500 constitutional cap."],
        ],
      ),
    ),
    summary(
      ["A state tax on professions and employment", "Article 276 and the ₹2,500 cap", "Employees, professionals and businesses", "States that do and don't levy it"],
      "Professional tax is a small, state-specific tax — apply each state's rules to each location.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Registration",
      ["An employer needs separate registrations to deduct for staff and to pay for itself — in every state where it has staff. This module plans Trellis's registrations."],
      ["Register as an employer to deduct from salaries", "Enrol the business itself and professionals", "Register in each state with staff", "Amend and cancel registrations"],
    ),
    screen(
      "Employer registration — to deduct",
      p("An employer with staff in a state must register to deduct professional tax from salaries. In Maharashtra this is the Professional Tax Registration Certificate (PTRC); other states use similar registrations."),
      bullets(
        "Apply online on the state tax portal soon after employing staff there.",
        "Each registration has its own number used for payments and returns.",
      ),
    ),
    screen(
      "Enrolment — for the business and professionals",
      p("Separately, the business itself (and self-employed professionals) enrols to pay its own professional tax. In Maharashtra this is the Professional Tax Enrolment Certificate (PTEC)."),
      table(
        ["Registration", "Purpose", "Trellis in Maharashtra"],
        [
          ["PTRC (registration)", "Deduct and pay for employees", "Monthly deductions for 40 staff"],
          ["PTEC (enrolment)", "Pay the company's own tax", "₹2,500 a year"],
        ],
      ),
    ),
    screen(
      "Registering in each state",
      table(
        ["State", "Trellis action"],
        [
          ["Maharashtra", "Registration and enrolment"],
          ["Karnataka", "Registration (to deduct) and enrolment"],
          ["West Bengal", "Registration (to deduct) and enrolment"],
          ["Tamil Nadu", "Register with the local body where the remote staff work, as required"],
          ["Delhi", "Nothing — no professional tax"],
        ],
      ),
      caution("Registration is generally by place of work — not by where the company's head office is."),
    ),
    screen(
      "Amending and cancelling",
      bullets(
        "Amend when the address, number of staff bands or authorised signatory changes.",
        "Cancel when the business stops employing staff in a state — after paying all dues and filing returns.",
        "Keep the cancellation order on file.",
      ),
    ),
    mistakes(
      ["Registering only at head office", "Register in each state with staff."],
      ["Confusing registration with enrolment", "You may need both."],
      ["Late registration", "Penalties apply."],
      ["Not cancelling after closing an office", "Returns stay due."],
    ),
    check(
      2,
      q("In Maharashtra, which certificate lets an employer deduct PT from salaries?", ["PTRC", "PTEC", "GSTIN", "TAN"], 0, "Registration certificate."),
      q("In Maharashtra, which certificate is for the business's own PT?", ["PTEC", "PTRC", "UAN", "Form 130"], 0, "Enrolment certificate."),
      q("Where is PT registration generally needed?", ["In each state where staff work", "Only at head office", "Only in Delhi", "Nowhere"], 0, "By place of work."),
      q("Does a company need PT registration in Delhi?", ["No", "Yes", "Only for directors", "Only above 50 staff"], 0, "Delhi doesn't levy PT."),
      q("Before cancelling a PT registration, what should be done?", ["Pay dues and file returns", "Nothing", "Register again", "Close the bank account"], 0, "Then keep the order."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Plan",
          ["Trellis opens a Hyderabad office with 10 staff. What registrations does it need there?"],
          ["Telangana professional tax registration to deduct from salaries, and enrolment for the company's own tax, on the Telangana portal."],
        ],
        [
          "Exercise 2 — Closure",
          ["Trellis closes its Kolkata office in March 2027. What should Farah do?"],
          ["Deduct and pay March PT, file the final return, then apply to cancel the West Bengal registration and enrolment, keeping the order."],
        ],
      ),
    ),
    summary(
      ["Employer registration to deduct", "Enrolment for the business and professionals", "Registering in every state with staff", "Amendments and cancellations"],
      "Register where your people work — often twice per state: once to deduct, once for yourself.",
    ),
  ],
  2: [
    overview(
      "Module 3 — State Slabs and Deductions",
      ["This module applies the slabs in Maharashtra, Karnataka, West Bengal and Tamil Nadu to Trellis's staff."],
      ["Use monthly slabs", "Apply the February adjustment", "Apply exemptions", "Work examples in three states", "Understand Tamil Nadu's half-yearly assessment", "Find current slabs on state portals"],
    ),
    screen(
      "Maharashtra",
      table(
        ["Monthly gross", "Men", "Women"],
        [
          ["Up to ₹7,500", "Nil", "Nil"],
          ["₹7,501 – ₹10,000", "₹175", "Nil"],
          ["₹10,001 – ₹25,000", "₹200 (₹300 in February)", "Nil"],
          ["Above ₹25,000", "₹200 (₹300 in February)", "₹200 (₹300 in February)"],
        ],
      ),
      p("Pune: Aditya (₹45,000) pays ₹200 a month and ₹300 in February — ₹2,500 a year. Sneha (₹22,000) pays nothing."),
    ),
    screen(
      "Karnataka",
      table(
        ["Monthly salary", "Professional tax"],
        [
          ["Below ₹25,000", "Nil"],
          ["₹25,000 and above", "₹200 a month (₹300 in February)"],
        ],
      ),
      p("Bengaluru: Kiran (₹60,000) pays ₹2,500 a year. Divya (₹24,000) pays nothing."),
      note("Karnataka's exemption for salaries below ₹25,000 a month has applied from 1 April 2023, and the ₹300 February deduction is set by a 2025 notification (Karnataka Commercial Taxes Department)."),
    ),
    screen(
      "West Bengal",
      table(
        ["Monthly salary", "Professional tax"],
        [
          ["Up to ₹10,000", "Nil"],
          ["₹10,001 – ₹15,000", "₹110"],
          ["₹15,001 – ₹25,000", "₹130"],
          ["₹25,001 – ₹40,000", "₹150"],
          ["Above ₹40,000", "₹200"],
        ],
      ),
      p("Kolkata: Arnab (₹35,000) pays ₹150 a month — ₹1,800 a year. Riya (₹14,000) pays ₹110."),
    ),
    screen(
      "Exemptions",
      bullets(
        "Common exemptions include persons with a specified disability, parents of children with disability, members of the armed forces, and senior citizens above a specified age.",
        "Some states exempt women below a higher salary limit (e.g. Maharashtra up to ₹25,000).",
        "Exemptions differ by state — record the proof in the employee's file.",
      ),
      caution("Apply an exemption only with documentary evidence, and check that it applies in that state."),
    ),
    screen(
      "Tamil Nadu — half-yearly",
      bullets(
        "Professional tax is levied by local bodies (municipal corporations, municipalities, panchayats) on half-yearly income.",
        "Half-years run April–September and October–March.",
        "Tax rises with half-yearly income in bands; rates differ between local bodies and have been revised in recent years (for example, by Greater Chennai Corporation).",
        "Employers deduct it from salary in the half-year and pay the local body.",
      ),
      example([["Illustrative: half-yearly salary ₹3,60,000 (₹60,000 a month)", ""], ["Applicable band in the local body's schedule", "Check the current schedule"]], ["Deducted", "Once each half-year (or spread monthly)"]),
    ),
    screen(
      "Finding current slabs",
      steps(
        ["Go to the official portal", "State commercial taxes department, or the local body for Tamil Nadu."],
        ["Find the schedule", "The current slab table and any amendment notifications."],
        ["Update payroll", "Set effective dates for any change."],
        ["Keep evidence", "Save the notification with the payroll setup."],
      ),
    ),
    mistakes(
      ["Missing the February ₹300", "The annual total falls short."],
      ["Using last year's Karnataka slab", "The limit rose to ₹25,000."],
      ["Ignoring gender-based limits", "Maharashtra treats women differently."],
      ["Treating Tamil Nadu as monthly", "It's half-yearly, by local body."],
    ),
    check(
      3,
      q("In Maharashtra, what does a man earning ₹40,000 pay in February?", ["₹300", "₹200", "₹175", "Nil"], 0, "To reach ₹2,500 a year."),
      q("In Karnataka, what does an employee earning ₹24,000 a month pay?", ["Nil", "₹200", "₹150", "₹300"], 0, "Below ₹25,000."),
      q("In West Bengal, what does an employee earning ₹30,000 pay?", ["₹150", "₹130", "₹200", "₹110"], 0, "₹25,001–₹40,000 band."),
      q("How is professional tax assessed in Tamil Nadu?", ["Half-yearly, by local bodies", "Monthly by the state", "Annually by the centre", "It isn't"], 0, "April–September and October–March."),
      q("In Maharashtra, up to what monthly salary are women exempt?", ["₹25,000", "₹10,000", "₹7,500", "₹40,000"], 0, "Above that, ₹200."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Annual totals",
          ["Calculate annual PT for Aditya (Pune, ₹45,000), Kiran (Bengaluru, ₹60,000) and Arnab (Kolkata, ₹35,000)."],
          ["Aditya ₹2,500; Kiran ₹2,500; Arnab ₹1,800."],
        ],
        [
          "Exercise 2 — Salary change",
          ["Sneha (Pune) gets a raise from ₹22,000 to ₹27,000 in September. What PT applies from September?"],
          ["₹200 a month from September (₹300 in February) — her salary is now above the ₹25,000 limit for women."],
        ],
      ),
    ),
    summary(
      ["Monthly slabs in Maharashtra, Karnataka and West Bengal", "The February adjustment", "Exemptions", "Tamil Nadu's half-yearly system", "Using official sources"],
      "Each state has its own slabs, exemptions and timing — set them up per state and keep them current.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Payment and Returns",
      ["Deducting PT is only half the job — it must be paid and reported on each state's schedule. This module covers payment and returns."],
      ["Understand monthly, quarterly and annual cycles", "Know that due dates differ between states", "Pay online through state portals", "File professional tax returns"],
    ),
    screen(
      "Payment cycles",
      table(
        ["State", "Typical cycle for an employer like Trellis"],
        [
          ["Maharashtra", "Monthly, by the end of the month, for larger employers; annual for smaller ones (based on the previous year's liability)"],
          ["Karnataka", "Monthly, by the 20th of the following month"],
          ["West Bengal", "Monthly, by the 21st of the following month"],
          ["Tamil Nadu", "Half-yearly, to the local body"],
        ],
      ),
      note("Due dates and thresholds change — confirm the current schedule on each state's portal."),
    ),
    screen(
      "Paying online",
      steps(
        ["Log in", "To the state portal with the registration number."],
        ["Prepare the challan", "Period, amount, registration number."],
        ["Pay", "Net banking or other permitted modes."],
        ["Save the receipt", "For the return and records."],
      ),
      p("Farah pays Karnataka and West Bengal PT on the 15th, together with PF and ESI, to avoid missing the 20th and 21st."),
    ),
    screen(
      "Filing returns",
      table(
        ["Return element", "Detail"],
        [
          ["Period", "Monthly, quarterly or annual, depending on state and liability"],
          ["Employees by slab", "Number of employees in each salary band"],
          ["Tax deducted and paid", "With challan details"],
          ["Due date", "As per each state — often with or shortly after payment"],
        ],
      ),
      tip("One calendar", "Keep a multi-state PT calendar listing every payment and return date."),
    ),
    screen(
      "The company's own enrolment tax",
      bullets(
        "The business pays its own professional tax (often ₹2,500 a year) under its enrolment in each state.",
        "Due dates for enrolment tax are usually annual — for example, by a set date each year.",
        "Directors and partners may have their own liability depending on the state.",
      ),
    ),
    mistakes(
      ["Using one due date for all states", "Each state differs."],
      ["Paying without filing the return", "Both are required."],
      ["Forgetting enrolment tax", "The company pays too."],
      ["Losing challan receipts", "Needed for returns and audits."],
    ),
    check(
      4,
      q("By when is Karnataka PT generally due for a monthly payer?", ["20th of the following month", "7th", "Last day of the year", "15th"], 0, "Confirm on the portal."),
      q("What does a PT return usually show?", ["Employees by slab and tax paid", "GST collected", "PF balances", "Income tax slabs"], 0, "With challan details."),
      q("Why does Farah pay PT on the 15th?", ["To pay with PF and ESI and avoid missing state dates", "It's the legal date everywhere", "To get a discount", "Banks require it"], 0, "A single payment day."),
      q("What's the company's own PT often?", ["₹2,500 a year under its enrolment", "Nil", "1% of turnover", "₹200 a month per director only"], 0, "Per state."),
      q("How does Maharashtra decide monthly or annual payment for employers?", ["Based on the previous year's liability", "By company age", "By industry", "By choice"], 0, "Larger employers pay monthly."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Calendar",
          ["List Trellis's PT payment dates for October 2026 deductions in Karnataka and West Bengal."],
          ["Karnataka by 20 November 2026; West Bengal by 21 November 2026 (Farah pays both on 15 November)."],
        ],
        [
          "Exercise 2 — Return",
          ["What does Farah need to file Karnataka's monthly return?"],
          ["Number of employees in each slab, tax deducted, the challan details and the registration number."],
        ],
      ),
    ),
    summary(
      ["Payment cycles by state", "Online payment", "Returns", "The company's own enrolment tax"],
      "Pay and file on each state's schedule — a single multi-state calendar keeps it under control.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Penalties and Corrections",
      ["Mistakes happen in multi-state payroll. This module covers interest, penalties and how Trellis fixes errors."],
      ["Calculate interest on late payment", "Know penalties for late registration and filing", "Correct under- or over-deduction", "Claim refunds of excess payments"],
    ),
    screen(
      "Interest on late payment",
      p("States charge interest on PT paid late — for example, Maharashtra charges 1.25% a month."),
      example([["Maharashtra PT paid 2 months late", "₹8,000"], ["Interest: ₹8,000 × 1.25% × 2", ""]], ["Interest", "₹200"]),
    ),
    screen(
      "Penalties",
      table(
        ["Default", "Typical consequence"],
        [
          ["Late registration", "Penalty per day of delay"],
          ["Late or non-filing of returns", "Fixed or daily penalty"],
          ["Not deducting or not paying", "Employer liable for the tax, interest and penalty"],
        ],
      ),
      caution("If the employer fails to deduct, it becomes liable to pay the tax itself — it can't simply recover it from employees later without care."),
    ),
    screen(
      "Correcting under- or over-deduction",
      compare(
        ["Under-deduction", "Too little deducted, e.g. February's ₹300 missed.", ["Deduct the shortfall in the next payroll (with notice to the employee)", "Pay the state with interest"]],
        ["Over-deduction", "Too much deducted, e.g. wrong slab.", ["Refund the employee", "Adjust against future payments or claim a refund"]],
      ),
      p("In February 2027, Trellis's Pune payroll deducted ₹200 instead of ₹300 for 30 employees. Farah deducts the extra ₹100 each in March and pays the ₹3,000 shortfall with interest."),
    ),
    screen(
      "Refunds of excess payments",
      bullets(
        "Excess paid to the state can often be adjusted against future liability.",
        "Otherwise apply for a refund on the state portal with evidence.",
        "Refund excess deductions to employees promptly, even before the state refunds Trellis.",
      ),
    ),
    mistakes(
      ["Ignoring small interest amounts", "They add up across states."],
      ["Recovering shortfalls without notice", "Tell employees first."],
      ["Keeping employees' excess deductions", "Refund promptly."],
      ["Late returns", "Penalties apply even if tax was paid."],
    ),
    check(
      5,
      q("What interest rate does Maharashtra charge on late PT?", ["1.25% a month", "18% a year", "12% a year", "Nil"], 0, "Per month of delay."),
      q("What happens if an employer fails to deduct PT?", ["It becomes liable for the tax, interest and penalty", "Nothing", "The employee is fined", "The state waives it"], 0, "Deduct correctly."),
      q("How should over-deducted PT be handled?", ["Refund the employee and adjust or claim from the state", "Keep it", "Pay it again", "Ignore it"], 0, "Promptly."),
      q("Trellis missed February's extra ₹100 for 30 Pune staff. What's the shortfall?", ["₹3,000", "₹9,000", "₹6,000", "₹300"], 0, "₹100 × 30."),
      q("Can excess PT paid to a state often be adjusted?", ["Yes, against future liability", "No, never", "Only in Delhi", "Only after 10 years"], 0, "Or refunded."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Interest",
          ["Maharashtra PT of ₹12,000 is paid 3 months late. Calculate interest at 1.25% a month."],
          ["₹12,000 × 1.25% × 3 = ₹450."],
        ],
        [
          "Exercise 2 — Wrong slab",
          ["Riya (Kolkata, ₹14,000) was charged ₹130 for six months instead of ₹110. What should Farah do?"],
          ["Refund ₹20 × 6 = ₹120 to Riya, correct the slab, and adjust the excess against future West Bengal payments or claim a refund."],
        ],
      ),
    ),
    summary(
      ["Interest on late payment", "Penalties", "Under- and over-deduction", "Refunds"],
      "Catch PT errors early, fix them with the employee's knowledge, and pay any shortfall with interest.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Multi-State Payroll and Records",
      ["This module puts it all together: setting up PT in payroll software, handling transfers between states, and reconciling the year."],
      ["Set up professional tax in payroll software", "Handle employees who move between states", "Show PT on payslips and the annual salary certificate", "Reconcile PT annually", "Use a PT compliance checklist"],
    ),
    screen(
      "Setting up PT in payroll software",
      table(
        ["Setting", "Why"],
        [
          ["Work location (state and local body) per employee", "Decides which slab applies"],
          ["Slab table per state, with effective dates", "Handles changes like Karnataka's February ₹300 rule from 2025"],
          ["Special months (February)", "The ₹300 adjustment"],
          ["Gender and exemption flags", "Maharashtra's women's limit, disability exemptions"],
          ["Half-yearly rules for Tamil Nadu", "Deduct in the right months"],
        ],
      ),
    ),
    screen(
      "Employees who move between states",
      p("Kiran transfers from Bengaluru to Pune on 1 November 2026."),
      table(
        ["Period", "State", "PT"],
        [
          ["April – October 2026", "Karnataka", "₹200 × 7 = ₹1,400"],
          ["November 2026 – March 2027", "Maharashtra", "₹200 × 4 + ₹300 (February) = ₹1,100"],
        ],
        { footer: ["Total", "", "₹2,500"], numeric: [2] },
      ),
      tip("Watch the cap", "Total PT across states must not exceed ₹2,500 for the year. Adjust the last months if needed."),
    ),
    screen(
      "Payslips and Form 130",
      bullets(
        "Show PT as a separate deduction on each payslip, with the state.",
        "Include total PT paid in the annual salary certificate (Form 130), as it's deductible from salary income.",
        "Employees can check their annual PT against their payslips.",
      ),
    ),
    screen(
      "Annual reconciliation",
      table(
        ["For each state", "Must agree"],
        [
          ["Payroll register PT", "Total deducted from employees"],
          ["Challans", "Total paid to the state"],
          ["Returns", "Total reported"],
          ["Books", "PT payable ledger cleared"],
        ],
      ),
      example([["West Bengal payroll deductions for the year", "₹31,680"], ["Paid by challan", "−₹31,680"]], ["Difference", "Nil"]),
    ),
    screen(
      "Professional tax compliance checklist",
      bullets(
        "Registration and enrolment in every state with staff.",
        "Correct work location for every employee.",
        "Current slab tables with effective dates; February adjustments.",
        "Exemptions supported by documents.",
        "Payments and returns by each state's due date.",
        "Company enrolment tax paid in each state.",
        "Transfers handled within the ₹2,500 cap.",
        "Annual reconciliation by state.",
      ),
    ),
    mistakes(
      ["Wrong work location in payroll", "Wrong state's slab."],
      ["Exceeding ₹2,500 after a transfer", "Check the annual total."],
      ["PT missing from Form 130", "Employees lose the deduction."],
      ["Reconciling only in total", "Reconcile state by state."],
    ),
    check(
      6,
      q("What decides which PT slab applies to an employee?", ["Their work location", "Head office location", "Their home town", "Their bank branch"], 0, "State and local body."),
      q("An employee transfers states mid-year. What's the annual limit?", ["₹2,500 in total", "₹2,500 per state", "₹5,000", "No limit"], 0, "The cap is per person."),
      q("Why include PT in Form 130?", ["It's deductible from salary income", "It's required for GST", "It increases tax", "It's optional decoration"], 0, "For income tax."),
      q("At year end, PT should be reconciled:", ["State by state", "Only in total", "Never", "Only for managers"], 0, "Deductions, challans, returns, books."),
      q("Which setting handles a state's slab change from a given date?", ["Slab tables with effective dates", "Gender flags", "Bank details", "Leave balances"], 0, "Per state."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Transfer",
          ["Arnab moves from Kolkata (₹150 a month) to Bengaluru on 1 January 2027 at ₹35,000. Calculate his PT for the year."],
          ["Kolkata April–December: 9 × ₹150 = ₹1,350. Bengaluru January–March: ₹200 + ₹300 (February) + ₹200 = ₹700. Total ₹2,050 — within the cap."],
        ],
        [
          "Exercise 2 — Reconcile",
          ["Karnataka deductions total ₹48,500 but challans total ₹48,000. What next?"],
          ["Find the ₹500 gap — likely an unpaid month or February adjustments not paid. Pay the shortfall with interest and update the return."],
        ],
      ),
    ),
    summary(
      ["Payroll software settings", "Transfers between states", "Payslips and Form 130", "Annual reconciliation", "The PT checklist"],
      "Multi-state PT works when every employee has the right location, every state has current slabs, and every state reconciles at year end.",
    ),
  ],
}

export default lessons
