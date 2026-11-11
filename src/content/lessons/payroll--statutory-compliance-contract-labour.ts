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

// Statutory Compliance: Contract Labour — lesson screens by module index
// (0 = Module 1). The course follows Sahyadri Auto Components Pvt Ltd, an
// auto-parts manufacturer near Pune that engages three contractors. Contract
// labour is governed by Chapter XI of the Occupational Safety, Health and
// Working Conditions Code, 2020 (in force from 21 November 2025) and the
// central and state rules made under it.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Contract Labour and the OSH Code",
      ["Contract labour is work done for a business by workers hired through a contractor. This module introduces the law through Sahyadri Auto Components."],
      ["Identify the principal employer, contractor and contract worker", "Trace the move from the 1970 Act to the OSH Code", "Know when the contract labour provisions apply", "Register the establishment", "Recognise common uses of contract labour"],
    ),
    screen(
      "Meet Sahyadri Auto Components",
      p("Sahyadri makes brake components at a plant near Pune. It has 240 direct employees and engages three contractors. Anand, its HR and compliance manager, manages them."),
      table(
        ["Contractor", "Work", "Workers at Sahyadri", "Contractor's total workforce"],
        [
          ["SecureLine Services", "Security", "22", "320 across clients"],
          ["Sparkle Facility", "Housekeeping", "18", "40"],
          ["BuildRight Infra", "Building a new shed", "30", "45"],
        ],
      ),
    ),
    screen(
      "The three parties",
      table(
        ["Party", "Who", "At Sahyadri"],
        [
          ["Principal employer", "The owner or occupier of the establishment where the work is done", "Sahyadri"],
          ["Contractor", "Supplies or engages workers to produce a result or do work for the establishment", "SecureLine, Sparkle, BuildRight"],
          ["Contract labour", "Workers employed through a contractor", "The 70 contract workers"],
        ],
      ),
    ),
    screen(
      "From the 1970 Act to the OSH Code",
      compare(
        ["Contract Labour (Regulation and Abolition) Act, 1970", "Applied from 20 contract workers.", ["Separate registration and licences per establishment", "Repealed when the OSH Code came into force"]],
        ["OSH Code, 2020 — Chapter XI", "Applies from 50 contract workers.", ["Single registration for the establishment", "Licences for contractors engaging 50 or more", "Core-activity prohibition"]],
      ),
      p("The OSH Code came into force on 21 November 2025."),
    ),
    screen(
      "When it applies",
      bullets(
        "To every establishment in which 50 or more contract workers are employed, or were employed on any day in the preceding twelve months.",
        "To every contractor who employs, or employed on any day in the preceding twelve months, 50 or more contract workers.",
      ),
      example([["SecureLine", "22"], ["Sparkle", "18"], ["BuildRight", "30"]], ["Contract workers at Sahyadri", "70 — the provisions apply"]),
    ),
    screen(
      "Registering the establishment",
      p("Establishments covered by the OSH Code register electronically with the registering officer, generally within 60 days of the Code applying to them. Sahyadri's registration covers its contract workforce — there's no separate contract labour registration."),
      tip("Keep the certificate", "Anand keeps the registration with the contractor details and updates it when contractors change."),
    ),
    mistakes(
      ["Counting each contractor separately for the establishment", "Add all contract workers at the establishment."],
      ["Using the old 20-worker threshold", "The Code uses 50."],
      ["Treating contract workers as someone else's problem", "The principal employer has duties too."],
      ["Citing the 1970 Act", "It has been replaced by the OSH Code."],
    ),
    check(
      1,
      q("Who is the principal employer at Sahyadri's plant?", ["Sahyadri", "SecureLine", "The contract workers", "The labour department"], 0, "The owner or occupier of the establishment."),
      q("From how many contract workers does the Code apply to an establishment?", ["50", "20", "10", "100"], 0, "Now or on any day in the preceding twelve months."),
      q("Which law replaced the Contract Labour Act, 1970?", ["The OSH Code, 2020", "The Code on Wages", "The Factories Act", "The Companies Act"], 0, "Chapter XI."),
      q("How many contract workers does Sahyadri have in total?", ["70", "22", "30", "240"], 0, "22 + 18 + 30."),
      q("When did the OSH Code come into force?", ["21 November 2025", "1 April 2020", "1 January 2024", "8 May 2026"], 0, "With the other Labour Codes."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Does it apply?",
          ["A hotel uses 30 housekeeping and 15 security contract workers. Does Chapter XI apply to the hotel?"],
          ["No — 45 is under 50. It would apply if the number reached 50 on any day in the preceding twelve months."],
        ],
        [
          "Exercise 2 — Who's who?",
          ["Name the principal employer, contractor and contract labour when a bank's branch uses guards from an agency."],
          ["Principal employer: the bank. Contractor: the security agency. Contract labour: the guards."],
        ],
      ),
    ),
    summary(
      ["Principal employer, contractor and contract labour", "From the 1970 Act to the OSH Code", "The 50-worker threshold", "Registration of the establishment", "Sahyadri's case"],
      "Count all contract workers at the establishment — that decides whether the provisions apply.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Contractor Licensing",
      ["Before engaging a contractor, Anand checks whether it needs a licence and whether it holds one."],
      ["Apply the 50-worker licence threshold", "Know the licence types and validity", "Handle contractors across states", "Check a licence before engagement"],
    ),
    screen(
      "Who needs a licence",
      p("A contractor that employs 50 or more contract workers needs a licence. The test looks at the contractor's own workforce, not just the workers at one site."),
      table(
        ["Contractor", "Total workforce", "Licence needed?"],
        [
          ["SecureLine", "320", "Yes"],
          ["Sparkle", "40", "No"],
          ["BuildRight", "45", "No — but check if it grows"],
        ],
      ),
    ),
    screen(
      "Licence types",
      table(
        ["Licence", "Scope"],
        [
          ["State licence", "Work in one state"],
          ["Licence for more than one state or all-India", "Issued by the central licensing authority"],
          ["Work-specific licence", "For a single work order"],
        ],
      ),
      p("A general licence is valid for five years."),
    ),
    screen(
      "Contractors across states",
      p("SecureLine supplies guards in Maharashtra, Karnataka and Gujarat. Instead of separate licences in each state, it can hold a licence covering more than one state or all of India."),
      note("Check that the licence covers the state where your establishment is located."),
    ),
    screen(
      "Checking before engagement",
      steps(
        ["Ask for the licence", "Check the licence number, scope, validity and the number of workers covered."],
        ["Verify online", "Confirm it on the labour department or Shram Suvidha portal."],
        ["Check statutory registrations", "EPF and ESI codes, GST and PAN."],
        ["Diary the expiry", "Ask for renewal proof before it expires."],
      ),
      caution("Engaging an unlicensed contractor that needs a licence exposes the principal employer to liability and penalties."),
    ),
    mistakes(
      ["Checking only the workers at your site", "The threshold is the contractor's whole workforce."],
      ["Accepting an expired licence", "Check validity and diary renewal."],
      ["Licence for the wrong state", "Confirm the scope covers your establishment."],
      ["Not checking EPF and ESI codes", "Verify statutory registrations too."],
    ),
    check(
      2,
      q("From how many contract workers does a contractor need a licence?", ["50", "20", "10", "100"], 0, "Counted across its workforce."),
      q("Does Sparkle, with 40 workers in total, need a licence?", ["No", "Yes", "Only for housekeeping", "Only in Pune"], 0, "Below 50."),
      q("How long is a general contractor licence valid?", ["Five years", "One year", "Three years", "For life"], 0, "Then renew."),
      q("Which licence suits a contractor working across several states?", ["A licence for more than one state or all-India", "A separate licence per client", "No licence", "A GST registration"], 0, "From the central licensing authority."),
      q("What should Anand check besides the licence?", ["EPF and ESI codes, GST and PAN", "The contractor's office décor", "Only the rates", "Nothing"], 0, "Statutory registrations."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Licence needed?",
          ["A catering contractor has 35 workers at Sahyadri and 30 at another client. Does it need a licence?"],
          ["Yes — its total of 65 is 50 or more."],
        ],
        [
          "Exercise 2 — Licence check",
          ["SecureLine's licence expires on 31 January 2027. What should Anand do now?"],
          ["Diary the date, ask for proof of renewal before expiry, and don't extend the contract without a valid licence."],
        ],
      ),
    ),
    summary(
      ["Licence at 50+ workers", "State, multi-state, all-India and work-specific licences", "Five-year validity", "Checks before engagement"],
      "Check the contractor's licence and registrations before the first worker arrives.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Core and Non-Core Activities",
      ["Sahyadri's production head wants contract machine operators. Anand checks whether that's allowed."],
      ["Define core activities", "Apply the exceptions", "Know the designated authority's role", "Avoid sham contracts"],
    ),
    screen(
      "What a core activity is",
      p("A core activity is any activity for which the establishment is set up, and includes any activity essential or necessary to it. Engaging contract labour in core activities is prohibited, subject to exceptions."),
      table(
        ["Activity at Sahyadri", "Core?"],
        [
          ["Machining and assembling brake parts", "Core"],
          ["Quality inspection of parts", "Core — essential to production"],
          ["Security", "Non-core"],
          ["Housekeeping", "Non-core"],
          ["Building a new shed", "Non-core"],
        ],
      ),
    ),
    screen(
      "Activities that are always non-core",
      p("The Code lists support services that aren't core, including:"),
      bullets(
        "Sanitation work, including sweeping, cleaning and dusting.",
        "Watch and ward, security services.",
        "Canteen and catering.",
        "Loading and unloading.",
        "Running hospitals, educational and training institutions, and guest houses and clubs as support services.",
        "Courier services, civil and construction works including maintenance, horticulture, housekeeping and laundry, transport services, and work of an intermittent nature.",
      ),
    ),
    screen(
      "When core work can use contract labour",
      steps(
        ["Normally contracted", "The activity is ordinarily done through contractors in that kind of establishment."],
        ["Not full-time", "It doesn't need full-time workers for most of the working hours in a day or for longer periods."],
        ["Sudden surge", "A sudden increase in volume of work in the core activity that must be done in a specified time."],
      ),
      note("The appropriate government can appoint a designated authority to advise on whether an activity is core."),
    ),
    screen(
      "Sham contracts",
      p("A contract is a sham if the “contractor” only supplies names while the principal employer recruits, supervises, pays and controls the workers as its own. Courts can then treat the workers as the principal employer's employees."),
      caution("Anand rejects the production head's request for permanent contract machine operators. He allows contract workers only for a documented two-month surge in a new export order."),
    ),
    mistakes(
      ["Using contract labour for regular production", "Core work is prohibited unless an exception applies."],
      ["Calling a surge permanent", "The surge exception is for a specified time."],
      ["Directly supervising contract workers", "Control by the principal employer can make the contract a sham."],
      ["Not documenting the exception", "Keep evidence of why it applies."],
    ),
    check(
      3,
      q("Which of these is a core activity at Sahyadri?", ["Machining brake parts", "Security", "Housekeeping", "Gardening"], 0, "It's what the plant is set up for."),
      q("Is canteen work core or non-core?", ["Non-core", "Core", "Depends on the canteen's size", "Neither"], 0, "Listed as non-core."),
      q("Which is an exception allowing contract labour in core work?", ["A sudden increase in volume of work to be done in a specified time", "Lower cost", "The contractor's request", "Shortage of office space"], 0, "Section 57."),
      q("Who can advise on whether an activity is core?", ["The designated authority", "The contractor", "The auditor", "The bank"], 0, "Appointed by the appropriate government."),
      q("What makes a contract a sham?", ["The principal employer really recruits, pays and controls the workers", "It's written in English", "It's for one year", "It has an indemnity clause"], 0, "Substance over form."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Classify: (a) packing finished parts for despatch, (b) gardening around the plant, (c) loading trucks."],
          ["(a) Likely core — essential to production. (b) Non-core — horticulture. (c) Non-core."],
        ],
        [
          "Exercise 2 — The request",
          ["The production head wants 12 contract operators permanently because they're cheaper. What should Anand say?"],
          ["No — machining is core, and cost isn't an exception. Hire direct employees, or use contract workers only for a documented time-bound surge."],
        ],
      ),
    ),
    summary(
      ["Definition of core activity", "Listed non-core services", "Three exceptions", "Designated authority", "Sham contracts"],
      "Keep contract labour to non-core work unless an exception clearly applies — and document it.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Principal Employer Duties",
      ["Sahyadri is responsible for contract workers' welfare and, if the contractor fails, their wages."],
      ["Ensure welfare facilities", "Pay unpaid wages and recover them", "Check statutory contributions", "Apply hours and minimum wages to contract workers"],
    ),
    screen(
      "Welfare facilities",
      p("Contract workers must have the welfare facilities the Code requires — drinking water, toilets and washing facilities, first aid, and a canteen and rest rooms where required. If the contractor doesn't provide them, the principal employer must, and can recover the cost from the contractor."),
      note("Sahyadri lets contract workers use its canteen and first-aid room, under the contractor agreements."),
    ),
    screen(
      "Unpaid wages",
      p("The contractor pays wages to its workers. If it fails to pay or pays less, the principal employer must pay the unpaid amount and can recover it from the contractor — by deducting it from amounts payable under the contract or as a debt."),
      example([["Sparkle's 18 workers", "October wages unpaid"], ["Wages each", "₹15,000"]], ["Sahyadri pays and recovers", "₹2,70,000"]),
    ),
    screen(
      "Statutory contributions",
      bullets(
        "Contract workers are covered by EPF and ESI through the contractor.",
        "If the contractor defaults, the principal employer can be made to pay and recover.",
        "Each month, collect the contractor's ECR and ESI challans with worker lists, and match them to attendance.",
      ),
      tip("No proof, no payment", "Anand releases contractor invoices only after receiving proof of the previous month's wages, EPF and ESI."),
    ),
    screen(
      "Hours and minimum wages",
      bullets(
        "Contract workers are entitled to at least the minimum wage for their work.",
        "Working hours, overtime and weekly rest rules apply to them like other workers.",
        "Where contract workers do the same or similar work as direct employees, check the applicable rules on wages and conditions.",
      ),
    ),
    mistakes(
      ["Paying the contractor before checking wages were paid", "Check proof every month."],
      ["Ignoring welfare facilities", "The principal employer must ensure them."],
      ["Accepting challans without worker lists", "Match lists to attendance."],
      ["Assuming the contractor alone is liable", "The principal employer is liable if it defaults."],
    ),
    check(
      4,
      q("If a contractor doesn't pay wages, who must pay?", ["The principal employer", "Nobody", "The workers' union", "The labour department"], 0, "Then recover from the contractor."),
      q("How can Sahyadri recover wages it paid for a contractor?", ["Deduct from amounts payable to the contractor or recover as a debt", "It can't", "From the workers", "From the government"], 0, "Recovery from the contractor."),
      q("What should be checked monthly for EPF?", ["The contractor's ECR with worker lists", "Only the invoice", "The contractor's balance sheet", "Nothing"], 0, "Match to attendance."),
      q("Do minimum wages apply to contract workers?", ["Yes", "No", "Only after a year", "Only for core work"], 0, "Every worker."),
      q("If the contractor doesn't provide drinking water, who must?", ["The principal employer", "The workers", "The municipality", "Nobody"], 0, "And recover the cost."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Exposure",
          ["BuildRight has 30 workers at ₹16,500 a month and hasn't paid November wages. What's Sahyadri's exposure?"],
          ["30 × ₹16,500 = ₹4,95,000, recoverable from BuildRight's bills."],
        ],
        [
          "Exercise 2 — ESI mismatch",
          ["Attendance shows 22 guards but SecureLine's ESI challan lists 19. What should Anand do?"],
          ["Hold the invoice and ask SecureLine to cover the missing 3 guards and pay any arrears with proof."],
        ],
      ),
    ),
    summary(
      ["Welfare facilities", "Liability for unpaid wages", "Recovery from the contractor", "EPF and ESI checks", "Hours and minimum wages"],
      "Trust, but verify — every month, before paying the contractor.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Contractor Obligations",
      ["The contractor is the direct employer of contract workers. Anand checks what each contractor must do."],
      ["Know the contractor's wage duties", "Check wage slips and registers", "Issue experience certificates", "Pay statutory contributions", "Provide safety training and equipment"],
    ),
    screen(
      "Paying wages",
      bullets(
        "Pay wages on time under the Code on Wages — for monthly wages, before the 7th of the next month.",
        "Pay at least the minimum wage, with overtime at twice the ordinary rate.",
        "Pay through bank transfer or other electronic mode, and inform the principal employer.",
      ),
    ),
    screen(
      "Wage slips and registers",
      table(
        ["Record", "Purpose"],
        [
          ["Wage slips", "Earnings, deductions and net pay for each worker"],
          ["Register of workers", "Names, roles and dates of joining"],
          ["Attendance and overtime registers", "Hours worked"],
          ["Wage register", "Wages paid"],
        ],
      ),
    ),
    screen(
      "Experience certificates",
      p("A contractor must give a contract worker an experience certificate on request, showing the work done. It helps workers move between contractors and principal employers."),
    ),
    screen(
      "Statutory contributions",
      steps(
        ["EPF", "Register workers, generate UANs and pay contributions by the 15th."],
        ["ESI", "Register eligible workers and pay contributions by the 15th."],
        ["Other", "Professional tax and labour welfare fund as the state requires."],
      ),
    ),
    screen(
      "Safety",
      p("Contractors must give their workers safety training and protective equipment for the work. For BuildRight's construction work, Anand checks helmets, harnesses for work at height and a site safety induction."),
    ),
    mistakes(
      ["Cash wages without records", "Pay electronically and keep registers."],
      ["No wage slips", "Every worker gets a wage slip."],
      ["Refusing experience certificates", "Give them on request."],
      ["No safety induction", "Train and equip workers."],
    ),
    check(
      5,
      q("By when must a contractor pay monthly wages?", ["Before the 7th of the next month", "The 30th of the next month", "When the client pays", "Every quarter"], 0, "Code on Wages."),
      q("What must a contractor give a worker on request?", ["An experience certificate", "A company car", "Shares", "A loan"], 0, "Showing work done."),
      q("By when are EPF and ESI contributions due?", ["The 15th of the next month", "The 7th", "The 30th", "Annually"], 0, "For each wage month."),
      q("How should wages be paid?", ["By bank transfer or other electronic mode", "Always in cash", "By cheque once a year", "In kind"], 0, "And inform the principal employer."),
      q("What should BuildRight provide for work at height?", ["Harnesses and a safety induction", "Nothing", "Only a helmet", "Extra tea breaks"], 0, "Safety equipment and training."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Wage check",
          ["Sparkle pays housekeeping staff ₹14,500 when the minimum is ₹15,200. What should Anand require?"],
          ["Arrears of ₹700 per worker for each month affected and correction from the next payroll, with proof."],
        ],
        [
          "Exercise 2 — Records list",
          ["List the records Anand asks Sparkle for each month."],
          ["Wage register, wage slips, attendance and overtime, EPF ECR and ESI challan with worker lists, and bank payment proof."],
        ],
      ),
    ),
    summary(
      ["Timely wages at minimum rates", "Slips and registers", "Experience certificates", "EPF and ESI", "Safety"],
      "The contractor is the employer — but the principal employer checks the work.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Contracts, Records and Audits",
      ["Anand rewrites Sahyadri's contractor agreements and sets up monthly checks."],
      ["Draft a compliant agreement", "Use indemnities and compliance clauses", "Run monthly compliance checks", "Know inspections and penalties", "Use the checklist"],
    ),
    screen(
      "Contractor agreement clauses",
      bullets(
        "Scope of work, confirming it's non-core or an exception applies.",
        "Contractor's licence, EPF, ESI and other registrations, with a duty to keep them valid.",
        "Wages at least the minimum, paid on time electronically.",
        "Monthly proof of wages and contributions before invoices are paid.",
        "Right to deduct unpaid wages or dues from invoices.",
        "Indemnity for losses from the contractor's non-compliance.",
        "Safety, welfare and conduct obligations, including POSH.",
      ),
    ),
    screen(
      "Monthly compliance check",
      table(
        ["Check", "Evidence"],
        [
          ["Headcount", "Attendance vs. contractor's list"],
          ["Wages", "Wage register and bank proof"],
          ["EPF", "ECR and challan"],
          ["ESI", "Contribution challan"],
          ["Licence", "Valid and covering the state"],
        ],
      ),
      tip("Hold back", "Many principal employers retain a percentage of each invoice until compliance proof is received."),
    ),
    screen(
      "Inspections and penalties",
      bullets(
        "Inspector-cum-facilitators can inspect establishments and records.",
        "Engaging contract labour without registration, using unlicensed contractors or breaking the core-activity rule can attract penalties under the OSH Code.",
        "Unpaid dues still have to be paid.",
      ),
      caution("Penalties under the Labour Codes can be substantial — check the Code and state rules for current amounts."),
    ),
    screen(
      "Sahyadri's checklist",
      steps(
        ["Applicability", "Count contract workers at the establishment."],
        ["Registration", "OSH registration with contractor details."],
        ["Licences", "Check each contractor at 50+ workers."],
        ["Core rule", "Non-core work or a documented exception."],
        ["Monthly", "Wages, EPF, ESI and headcount checked before payment."],
        ["Agreements", "Compliance clauses and indemnities."],
      ),
    ),
    mistakes(
      ["Agreements without compliance clauses", "Add licence, wage and contribution duties."],
      ["Paying invoices without proof", "Hold until proof is received."],
      ["One-time checks", "Check every month."],
      ["No indemnity", "Protect against contractor defaults."],
    ),
    check(
      6,
      q("Which clause lets Sahyadri recover unpaid wages from a contractor?", ["Right to deduct from invoices", "Force majeure", "Confidentiality", "Governing law"], 0, "Recovery clause."),
      q("What should be matched to the contractor's worker list each month?", ["Attendance records", "Sales figures", "Bank balance", "Board minutes"], 0, "Headcount check."),
      q("What is an indemnity clause for?", ["Protecting against losses from the contractor's non-compliance", "Setting the price", "Choosing the venue for meetings", "Naming the workers"], 0, "Risk transfer."),
      q("How often should contractor compliance be checked?", ["Every month", "Once at signing", "Every five years", "Only when inspected"], 0, "Before paying invoices."),
      q("Who inspects establishments under the Labour Codes?", ["Inspector-cum-facilitators", "Statutory auditors", "GST officers", "Bank managers"], 0, "Under the Codes."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Agreement review",
          ["Sparkle's agreement has price, scope and termination clauses only. What's missing?"],
          ["Licence and registration duties, minimum wages and timely payment, monthly proof, right to deduct, indemnity, safety and welfare."],
        ],
        [
          "Exercise 2 — Retention",
          ["Sahyadri holds 10% of BuildRight's ₹6,00,000 invoice until proof arrives. How much is held?"],
          ["₹60,000, released once wage and contribution proof is received."],
        ],
      ),
    ),
    summary(
      ["Compliant agreements", "Indemnities and deductions", "Monthly checks", "Inspections and penalties", "The checklist"],
      "Good agreements and monthly checks turn contractor risk into managed risk.",
    ),
  ],
}

export default lessons
