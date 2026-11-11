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

// Statutory Compliance: Leave — lesson screens by module index (0 = Module 1).
// The course follows Vasant Foods Pvt Ltd, with a factory in Vapi, Gujarat
// (annual leave under section 32 of the OSH Code, 2020) and a sales office in
// Pune (leave under the Maharashtra Shops and Establishments Act, 2017).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Where Leave Rules Come From",
      ["Leave rules come from several laws. This module maps which law applies to each group at Vasant Foods."],
      ["Identify the OSH Code's role", "Recognise state Shops Acts", "Know where holidays come from", "Link maternity leave to the Code on Social Security", "See how company policy fits"],
    ),
    screen(
      "Meet Vasant Foods",
      p("Vasant Foods makes packaged snacks at a factory in Vapi, Gujarat, and runs a sales office in Pune. Kiran, its payroll manager, keeps leave balances for 150 factory workers and 25 office staff."),
      table(
        ["Employee", "Location", "Role", "Pay"],
        [
          ["Ramesh", "Vapi factory", "Machine operator", "₹700 a day"],
          ["Pooja", "Vapi factory", "Line supervisor", "₹17,500 a month"],
          ["Arvind", "Vapi factory", "Production manager", "₹65,000 a month"],
          ["Sunita", "Pune office", "Sales executive", "₹27,000 a month"],
        ],
      ),
    ),
    screen(
      "Which law applies",
      table(
        ["Group", "Main leave law"],
        [
          ["Factory workers", "OSH Code, 2020 — section 32 annual leave"],
          ["Shop and office employees", "State Shops and Establishments Act"],
          ["Holidays", "State national and festival holidays laws and Shops Acts"],
          ["Maternity", "Code on Social Security, 2020"],
        ],
      ),
      p("The OSH Code came into force on 21 November 2025."),
    ),
    screen(
      "Company policy",
      compare(
        ["Legal minimum", "What the law requires.", ["Annual leave, holidays, maternity"]],
        ["Company policy", "What the employer adds.", ["Paternity, bereavement, extra sick leave", "Can be more generous, never less"]],
      ),
      note("Arvind is a manager, so his leave is mainly set by Vasant's policy and contract — but the policy must still meet any law that applies to him."),
    ),
    mistakes(
      ["One leave policy for every location", "Different laws apply to the factory and the office."],
      ["Policy below the legal minimum", "The law always wins."],
      ["Forgetting holidays laws", "They're separate from leave."],
      ["Treating maternity as ordinary leave", "It's under the Code on Social Security."],
    ),
    check(
      1,
      q("Which law sets annual leave for Vasant's factory workers?", ["The OSH Code, 2020", "The Maharashtra Shops Act", "The Companies Act", "The GST Act"], 0, "Section 32."),
      q("Which law sets leave for Sunita in the Pune office?", ["The Maharashtra Shops and Establishments Act, 2017", "The OSH Code factory rules", "The Gujarat Shops Act", "None"], 0, "Office in Pune."),
      q("Can company policy give less than the law?", ["No", "Yes", "Only for managers", "Only in factories"], 0, "The law sets the minimum."),
      q("Which law covers maternity leave?", ["The Code on Social Security, 2020", "The OSH Code", "The Shops Act", "The Code on Wages"], 0, "Chapter VI."),
      q("When did the OSH Code come into force?", ["21 November 2025", "1 April 2024", "1 January 2021", "8 May 2026"], 0, "With the other Codes."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Map the laws",
          ["Which leave law applies to (a) a packer at Vapi, (b) a receptionist in Pune?"],
          ["(a) OSH Code section 32. (b) Maharashtra Shops and Establishments Act, 2017."],
        ],
        [
          "Exercise 2 — Policy check",
          ["Vasant's draft policy gives Pune staff 6 casual leave days. Is that enough?"],
          ["No — the Maharashtra Act requires 8 days' casual leave a year."],
        ],
      ),
    ),
    summary(
      ["OSH Code for workers", "State Shops Acts", "Holidays laws", "Maternity under the Code", "Company policy"],
      "Map each group of employees to its law before setting balances.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Annual Leave Under the OSH Code",
      ["Kiran calculates 2026 annual leave for the factory workers."],
      ["Know who's covered", "Apply the 180-day test", "Calculate accrual", "Count days worked correctly", "Pay wages during leave"],
    ),
    screen(
      "Who's covered",
      bullets(
        "“Workers” — people employed to do manual, unskilled, skilled, technical, operational, clerical or supervisory work.",
        "Supervisors are workers only if they earn up to ₹18,000 a month (or a notified amount).",
        "Managers and administrators aren't “workers”.",
      ),
      table(
        ["Employee", "Worker under the Code?"],
        [
          ["Ramesh", "Yes"],
          ["Pooja (supervisor, ₹17,500)", "Yes"],
          ["Arvind (manager)", "No — policy applies"],
        ],
      ),
    ),
    screen(
      "Eligibility and accrual",
      p("A worker who has worked for 180 days or more in a calendar year gets annual leave with wages in the next year at one day for every 20 days worked."),
      example([["Ramesh's days worked in 2025", "220"], ["÷ 20", ""]], ["Annual leave in 2026", "11 days"]),
      note("Under the Factories Act the test was 240 days — the Code lowered it to 180."),
    ),
    screen(
      "What counts as days worked",
      bullets(
        "Days of lay-off by agreement or under the standing orders.",
        "Maternity leave, up to the period allowed by law.",
        "Leave earned in the previous year and taken.",
      ),
      p("These count towards the 180 days but leave isn't earned for them."),
    ),
    screen(
      "Wages during leave",
      p("A worker on annual leave is paid at their ordinary rate — the daily average of full-time earnings, as the rules define."),
      tip("Fractions", "Kiran rounds leave down to whole days unless Vasant's policy rounds up — most policies round half-days or more up in the worker's favour."),
    ),
    mistakes(
      ["Using the old 240-day test", "The Code uses 180 days."],
      ["Counting lay-off days as earning leave", "They count for eligibility, not accrual."],
      ["Treating all supervisors as workers", "Only those earning up to ₹18,000."],
      ["Giving leave in the same year", "It's earned for the next year."],
    ),
    check(
      2,
      q("How many days must a worker work in a calendar year to get annual leave?", ["180", "240", "120", "365"], 0, "Section 32."),
      q("What's the accrual rate?", ["One day for every 20 days worked", "One day per month", "One day for every 15 days", "Two days per month"], 0, "For adults."),
      q("What's Ramesh's 2026 leave after 220 days in 2025?", ["11 days", "15 days", "12 days", "22 days"], 0, "220 ÷ 20."),
      q("Is Pooja, a supervisor earning ₹17,500, a “worker”?", ["Yes", "No", "Only in Gujarat", "Only for overtime"], 0, "Up to ₹18,000."),
      q("Do lay-off days count towards the 180 days?", ["Yes", "No", "Only half", "Only in December"], 0, "But leave isn't earned for them."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Eligibility",
          ["Lalit worked 170 days and was laid off for 15 days in 2025. Is he eligible?"],
          ["Yes — 170 + 15 lay-off days = 185, at least 180. Leave is earned only on the 170 days worked: 170 ÷ 20 = 8 days (8.5 rounded down)."],
        ],
        [
          "Exercise 2 — Accrual",
          ["Pooja worked 260 days in 2025. What's her 2026 leave?"],
          ["260 ÷ 20 = 13 days."],
        ],
      ),
    ),
    summary(
      ["Who's a worker", "The 180-day test", "1 day per 20 worked", "What counts as days worked", "Wages during leave"],
      "180 days to qualify, 1 day per 20 to accrue.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Carry-Forward and Encashment",
      ["At the end of 2026 Kiran must decide what carries forward and what's encashed."],
      ["Apply the 30-day carry-forward limit", "Handle refused leave", "Encash leave at year-end", "Encash on exit", "Calculate encashment"],
    ),
    screen(
      "The year-end rules",
      table(
        ["Rule", "OSH Code"],
        [
          ["Carry forward", "Up to 30 days to the next calendar year"],
          ["Leave above 30 days", "Can be encashed at the end of the calendar year"],
          ["Leave applied for but refused", "Carried forward without any limit"],
          ["Encashment on demand", "The worker can ask to encash leave at the end of the year"],
        ],
      ),
    ),
    screen(
      "Ramesh at year-end",
      example([["Balance at 31 December 2026", "38 days"], ["Carried forward", "30 days"], ["Excess", "8 days"], ["Daily rate", "× ₹700"]], ["Encashed", "₹5,600"]),
    ),
    screen(
      "Refused leave",
      p("If a worker applied for leave and it was refused, the refused days carry forward without limit — they don't count against the 30-day cap."),
      caution("Keep records of every leave application and refusal — without them you can't prove which days were refused."),
    ),
    screen(
      "Encashment on exit",
      p("When employment ends — resignation, termination, retirement or death — the unused leave balance is paid out with the final settlement."),
      example([["Pooja's balance on leaving", "18 days"], ["Daily rate: ₹17,500 ÷ 26", "₹673"]], ["Encashment", "₹12,114"]),
      note("Vasant's policy uses monthly pay ÷ 26 for the daily rate. Use the method in your policy, and the rules where they prescribe one."),
    ),
    mistakes(
      ["Lapsing leave above 30 days", "It can be encashed."],
      ["Counting refused leave in the cap", "It carries forward without limit."],
      ["Not paying leave on exit", "Pay the balance in the final settlement."],
      ["No refusal records", "Record every application and decision."],
    ),
    check(
      3,
      q("How many days can be carried forward under the OSH Code?", ["30", "45", "15", "60"], 0, "Section 32."),
      q("What happens to refused leave?", ["It carries forward without limit", "It lapses", "It's halved", "It's paid at half rate"], 0, "Protects the worker."),
      q("Ramesh has 38 days at year-end, none refused. How many days are encashed?", ["8", "38", "0", "30"], 0, "38 − 30."),
      q("When is the leave balance paid out?", ["When employment ends", "Never", "Only on retirement", "Only after 10 years"], 0, "With the final settlement."),
      q("What's 8 days at ₹700 a day?", ["₹5,600", "₹7,000", "₹4,900", "₹8,400"], 0, "Encashment."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Mixed balance",
          ["A worker has 40 days at year-end, including 12 days refused. What carries forward?"],
          ["The 12 refused days carry forward without limit. Of the other 28, all are within 30, so all 40 days carry forward."],
        ],
        [
          "Exercise 2 — Exit",
          ["Ramesh resigns with 25 days' leave. What's paid?"],
          ["25 × ₹700 = ₹17,500 in the final settlement."],
        ],
      ),
    ),
    summary(
      ["30-day carry-forward", "Encashment above 30 days", "Refused leave without limit", "Exit encashment", "Calculations"],
      "Carry forward 30, encash the excess, and never lose refused leave.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Leave Under State Shops Acts",
      ["Sunita and the Pune office staff are covered by the Maharashtra Shops and Establishments Act, 2017."],
      ["Apply Maharashtra's leave rules", "Give weekly holidays", "Give festival holidays", "Compare with the OSH Code", "Find other states' rules"],
    ),
    screen(
      "Maharashtra's leave rules",
      table(
        ["Leave", "Entitlement"],
        [
          ["Casual leave", "8 days a year, credited quarterly; lapses at year-end"],
          ["Earned leave", "1 day per 20 days worked, after 240 days in the previous year"],
          ["Accumulation", "Up to 45 days"],
          ["Encashment", "Above 45 days, if leave applied 15 days in advance was refused"],
          ["Festival holidays", "8 paid — 26 January, 1 May, 15 August, 2 October and 4 agreed"],
        ],
      ),
    ),
    screen(
      "Weekly holidays",
      bullets(
        "Every worker gets a weekly holiday with wages.",
        "An establishment can open all week if each worker gets 24 consecutive hours off.",
        "If a weekly holiday is denied, compensatory leave is due within two months.",
      ),
    ),
    screen(
      "Factory vs. office",
      compare(
        ["Vapi factory — OSH Code", "180-day test", ["1 day per 20 worked", "Carry forward 30", "Encash excess"]],
        ["Pune office — Maharashtra Act", "240-day test", ["1 day per 20 worked", "Accumulate 45", "Plus 8 casual leave days"]],
      ),
      note("Sunita worked 250 days in 2025, so she gets 12 days' earned leave plus 8 casual leave days in 2026."),
    ),
    screen(
      "Other states",
      steps(
        ["Find the Act", "Each state's labour department publishes its Shops Act and rules."],
        ["Check the entitlements", "Earned, casual and sick leave and holidays differ."],
        ["Check for updates", "States amend thresholds and entitlements."],
      ),
      caution("Don't copy one state's leave rules to an office in another state."),
    ),
    mistakes(
      ["Using the OSH Code test for office staff", "The state Shops Act applies."],
      ["Carrying casual leave forward", "It lapses in Maharashtra."],
      ["Ignoring the 45-day cap", "That's the Maharashtra limit."],
      ["Giving only four holidays", "Eight festival holidays in Maharashtra."],
    ),
    check(
      4,
      q("How many casual leave days does a Pune office employee get?", ["8", "12", "6", "15"], 0, "Credited quarterly."),
      q("What earned leave does Sunita get after 250 days in 2025?", ["12 days", "15 days", "8 days", "20 days"], 0, "250 ÷ 20, complete days."),
      q("What's the accumulation limit for earned leave in Maharashtra?", ["45 days", "30 days", "60 days", "90 days"], 0, "Section 18."),
      q("How many paid festival holidays are due in Maharashtra?", ["8", "3", "10", "12"], 0, "Four fixed and four agreed."),
      q("Within how long is compensatory leave due for a denied weekly holiday?", ["Two months", "One week", "One year", "Never"], 0, "Maharashtra Act."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Office leave",
          ["A Pune employee worked 230 days in 2025. What leave does she get in 2026?"],
          ["8 casual leave days and 8 festival holidays — no earned leave under the 240-day rule (unless she qualifies under the new-joiner provision)."],
        ],
        [
          "Exercise 2 — Compare",
          ["A factory worker and an office worker each worked 200 days in 2025. Who gets earned leave?"],
          ["The factory worker — 200 ≥ 180 under the OSH Code: 10 days. The office worker doesn't meet Maharashtra's 240-day test."],
        ],
      ),
    ),
    summary(
      ["Maharashtra's leave rules", "Weekly holidays", "Festival holidays", "Factory vs. office", "Other states"],
      "Apply the law of the location — the factory and office follow different rules.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Other Types of Leave",
      ["Kiran handles other leave types in Vasant's policy and payroll."],
      ["Link maternity leave to the Code", "Design policy-based leave", "Process leave without pay", "Give compensatory off"],
    ),
    screen(
      "Maternity leave",
      p("Maternity leave of up to 26 weeks (12 weeks in some cases) is under the Code on Social Security. It's separate from annual leave and doesn't reduce the annual leave balance. See the Maternity Benefit course for details."),
    ),
    screen(
      "Policy-based leave",
      table(
        ["Leave", "Vasant's policy"],
        [
          ["Paternity", "5 days within 3 months of birth or adoption"],
          ["Bereavement", "3 days for immediate family"],
          ["Sick leave (office)", "6 days on top of the legal minimum"],
        ],
      ),
      note("These aren't required by central law for private employers, but once in the policy they must be applied consistently."),
    ),
    screen(
      "Leave without pay",
      p("Leave without pay (loss of pay, LOP) reduces wages for the month."),
      example([["Sunita's monthly salary", "₹27,000"], ["Vasant's divisor: days in the month (30 in November)", "₹900 a day"], ["LOP days in November", "× 2"]], ["Deduction", "₹1,800"]),
      caution("Deductions for absence must be proportionate to the period of absence under the Code on Wages."),
    ),
    screen(
      "Compensatory off",
      p("If an employee works on a weekly holiday or festival holiday, give compensatory leave (or holiday pay as the law and policy allow) within the time allowed — two months under the Maharashtra Act for weekly holidays."),
    ),
    mistakes(
      ["Deducting maternity leave from annual leave", "They're separate."],
      ["Applying policy leave inconsistently", "Apply it equally to everyone covered."],
      ["Disproportionate LOP deductions", "Deduct only for the period of absence."],
      ["Never giving compensatory off", "Give it within the time allowed."],
    ),
    check(
      5,
      q("Does maternity leave reduce the annual leave balance?", ["No", "Yes", "Only half", "Only for managers"], 0, "Separate entitlement."),
      q("Is paternity leave required by central law for private employers?", ["No — it's policy-based", "Yes, 15 days", "Yes, 26 weeks", "Only in factories"], 0, "Many employers offer it."),
      q("What's 2 days' LOP on a ₹27,000 salary using a 30-day divisor?", ["₹1,800", "₹2,077", "₹900", "₹2,700"], 0, "₹900 × 2."),
      q("Which Code requires absence deductions to be proportionate?", ["The Code on Wages", "The OSH Code", "The Social Security Code", "The IR Code"], 0, "Deductions."),
      q("What's due when an employee works on her weekly holiday?", ["Compensatory leave", "Nothing", "A warning", "A transfer"], 0, "Within the time allowed."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — LOP",
          ["Ramesh, on ₹700 a day, takes 3 days' leave without pay. What's deducted?"],
          ["3 × ₹700 = ₹2,100."],
        ],
        [
          "Exercise 2 — Holiday work",
          ["A Pune employee works on 15 August. What should Kiran do?"],
          ["Give a compensatory holiday (or pay as the law and policy allow) and record it."],
        ],
      ),
    ),
    summary(
      ["Maternity leave", "Policy-based leave", "Leave without pay", "Compensatory off"],
      "Statutory leave is the floor — policy leave must be applied consistently on top.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Leave Policy, Records and Payroll",
      ["Kiran writes one leave policy for both locations and sets up records and payroll."],
      ["Write a compliant policy", "Keep leave registers", "Process leave in payroll", "Encash leave in full and final settlement", "Use the checklist"],
    ),
    screen(
      "One policy, two locations",
      bullets(
        "A common section — application process, approvals, records and policy leave.",
        "A factory schedule — OSH Code annual leave, carry-forward and encashment.",
        "An office schedule — Maharashtra casual, earned and festival leave.",
        "A statement that the law prevails where it gives more.",
      ),
    ),
    screen(
      "Leave registers",
      table(
        ["Record", "Contents"],
        [
          ["Days worked", "For eligibility and accrual"],
          ["Leave credited", "Annual, casual and policy leave"],
          ["Applications", "Dates applied, approved or refused"],
          ["Leave taken", "By type"],
          ["Balance", "Carried forward and encashed"],
        ],
      ),
    ),
    screen(
      "Leave in payroll",
      steps(
        ["Paid leave", "No deduction; mark in attendance."],
        ["LOP", "Deduct proportionately."],
        ["Year-end encashment", "Pay as a separate earnings head."],
        ["Exit encashment", "Include in the final settlement."],
      ),
      note("Leave encashment is taxable as salary while in service. On retirement, non-government employees get an exemption up to ₹25 lakh under the income-tax law — check the current provision."),
    ),
    screen(
      "Full and final settlement",
      example([["Sunita's earned leave balance", "20 days"], ["Daily rate: ₹27,000 ÷ 26", "₹1,038.46"]], ["Encashment", "₹20,769"]),
      tip("Same method every time", "Use the policy's divisor consistently and state it in the settlement letter."),
    ),
    screen(
      "Vasant's leave checklist",
      steps(
        ["Map laws", "Factory: OSH Code. Office: Maharashtra Act."],
        ["Eligibility", "180 days (factory) / 240 days (office)."],
        ["Accrual", "1 day per 20 worked."],
        ["Year-end", "Carry 30 and encash the excess (factory); accumulate to 45 (office)."],
        ["Holidays", "Weekly and festival holidays given."],
        ["Records", "Registers, applications and refusals."],
      ),
    ),
    mistakes(
      ["One schedule for every location", "Use location schedules."],
      ["No record of refusals", "Record every decision."],
      ["Hiding encashment in basic pay", "Use a separate head."],
      ["Inconsistent divisors", "Apply the policy's method."],
    ),
    check(
      6,
      q("What should Vasant's policy say if the law gives more than the policy?", ["The law prevails", "The policy prevails", "The manager decides", "Nothing"], 0, "Legal minimum."),
      q("Why record leave refusals?", ["Refused leave carries forward without limit", "For GST", "For marketing", "It isn't needed"], 0, "Evidence."),
      q("How is year-end encashment shown in payroll?", ["As a separate earnings head", "Inside basic pay", "As a deduction", "Not shown"], 0, "Clear records."),
      q("What's 20 days' encashment at ₹1,038.46 a day?", ["₹20,769", "₹27,000", "₹18,000", "₹21,600"], 0, "Rounded."),
      q("Is leave encashment during service taxable?", ["Yes, as salary", "No, always exempt", "Only above ₹25 lakh", "Only for managers"], 0, "Retirement exemption is different."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Register",
          ["List the columns of Vasant's factory leave register."],
          ["Worker, days worked, lay-off and maternity days, leave credited, applications (approved/refused), leave taken, carry-forward, encashment and balance."],
        ],
        [
          "Exercise 2 — Settlement",
          ["Arvind leaves with 24 days' policy leave and a monthly salary of ₹65,000. What's the encashment using ÷ 26?"],
          ["₹65,000 ÷ 26 = ₹2,500 × 24 = ₹60,000."],
        ],
      ),
    ),
    summary(
      ["Location schedules", "Leave registers", "Payroll treatment", "Full and final settlement", "The checklist"],
      "One clear policy, location-specific rules, and records that prove every balance.",
    ),
  ],
}

export default lessons
