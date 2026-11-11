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

// Statutory Compliance: Maternity Benefit — lesson screens by module index
// (0 = Module 1). The course follows Nilgiri Software Solutions Pvt Ltd in
// Bengaluru (64 employees). Maternity benefit is under Chapter VI of the Code
// on Social Security, 2020 (in force from 21 November 2025) and the Code on
// Social Security (Central) Rules, 2026 notified on 8 May 2026.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Maternity Benefit and the Code on Social Security",
      ["Maternity benefit protects a woman's income and job around childbirth. This module introduces the law through Nilgiri Software Solutions."],
      ["Explain the purpose of maternity benefit", "Trace the move from the 1961 Act to the Code", "Know when the Code took effect", "Identify covered establishments", "Understand how ESI-covered employees are treated"],
    ),
    screen(
      "Meet Nilgiri Software Solutions",
      p("Nilgiri is a software company in Bengaluru with 64 employees. Rekha, its HR and payroll manager, handles every maternity case."),
      table(
        ["Employee", "Role", "Monthly wages", "Situation"],
        [
          ["Lakshmi", "Senior developer", "₹60,000", "Expecting her first child"],
          ["Ritu", "Business analyst", "₹52,000", "Adopting a two-month-old baby"],
          ["Meena", "QA lead", "₹70,000", "Expecting her third child"],
          ["Kavya", "Office assistant", "₹18,000", "Covered by ESI, expecting a child"],
        ],
      ),
    ),
    screen(
      "Why maternity benefit exists",
      bullets(
        "To protect a woman's income before and after childbirth.",
        "To protect her health and her baby's.",
        "To protect her job while she's away.",
        "To support women's continued employment after childbirth.",
      ),
    ),
    screen(
      "From the 1961 Act to the Code",
      table(
        ["Then", "Now"],
        [
          ["Maternity Benefit Act, 1961 (amended in 2017)", "Chapter VI of the Code on Social Security, 2020"],
          ["Separate rules under the Act", "Code on Social Security (Central) Rules, 2026 and state rules"],
        ],
      ),
      p("The Code came into force on 21 November 2025. The central rules were notified on 8 May 2026. The main entitlements — 26 weeks' leave, crèche and work from home — carried over from the 2017 amendment."),
    ),
    screen(
      "Who is covered",
      bullets(
        "Every factory, mine and plantation.",
        "Every shop or establishment employing ten or more employees, now or on any day in the preceding twelve months.",
        "Once covered, the establishment stays covered even if numbers later fall below ten.",
      ),
      note("Nilgiri has 64 employees, so Chapter VI applies — and so does the crèche rule for 50 or more employees."),
    ),
    screen(
      "Employees covered by ESI",
      compare(
        ["ESI-covered employee", "ESIC pays maternity benefit from the ESI fund.", ["Kavya, earning ₹18,000", "Employer doesn't pay maternity pay", "Job protection still applies"]],
        ["Not covered by ESI", "The employer pays under Chapter VI.", ["Lakshmi, Ritu and Meena", "Paid from Nilgiri's payroll"]],
      ),
      caution("If an ESI-covered woman doesn't qualify for ESI maternity benefit, the employer may still have to pay under the Code until she does — check her ESI eligibility."),
    ),
    mistakes(
      ["Citing the 1961 Act", "The Code applies from 21 November 2025."],
      ["Thinking small offices are exempt", "Ten or more employees brings a shop or establishment in."],
      ["Paying ESI-covered staff from payroll as well", "ESIC pays them."],
      ["Dropping coverage when headcount falls", "Once covered, the establishment stays covered."],
    ),
    check(
      1,
      q("Which law now governs maternity benefit?", ["Chapter VI of the Code on Social Security, 2020", "The Maternity Benefit Act, 1961 only", "The Code on Wages", "The Factories Act"], 0, "From 21 November 2025."),
      q("From how many employees is a shop or establishment covered?", ["Ten", "Twenty", "Fifty", "One"], 0, "Now or on any day in the preceding twelve months."),
      q("Who pays maternity benefit to Kavya, who is covered by ESI?", ["ESIC", "Nilgiri", "The state government", "Nobody"], 0, "From the ESI fund."),
      q("When were the Code on Social Security (Central) Rules notified?", ["8 May 2026", "21 November 2025", "1 April 2017", "1 January 2021"], 0, "G.S.R. 344(E)."),
      q("Nilgiri's headcount falls from 64 to 8. Is it still covered?", ["Yes — once covered, it stays covered", "No, immediately excluded", "Only for factories", "Only if it reapplies"], 0, "Coverage continues."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Covered or not?",
          ["Is maternity benefit due from (a) a 7-person design studio, (b) a 12-person café, (c) a plantation with 5 workers?"],
          ["(a) No, under ten. (b) Yes, ten or more. (c) Yes — every plantation is covered."],
        ],
        [
          "Exercise 2 — Who pays?",
          ["Which of Nilgiri's four case employees are paid by the employer?"],
          ["Lakshmi, Ritu and Meena. Kavya is paid by ESIC."],
        ],
      ),
    ),
    summary(
      ["Purpose of maternity benefit", "The Code and the 2026 rules", "Covered establishments", "ESI-covered employees", "Nilgiri's case"],
      "Check coverage and ESI status first — they decide who pays.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Eligibility and Leave",
      ["Rekha checks each employee's eligibility and leave entitlement."],
      ["Apply the 80-day rule", "Give 26 weeks' leave correctly", "Apply the 12-week rule for the third child", "Handle adoption and commissioning mothers", "Know the leave for miscarriage and other cases"],
    ),
    screen(
      "Eligibility — the 80-day rule",
      p("A woman is entitled to maternity benefit if she has actually worked in the establishment for at least 80 days in the twelve months immediately before the expected date of delivery."),
      example([["Lakshmi's expected delivery", "15 January 2027"], ["12 months before", "15 January 2026 – 14 January 2027"], ["Days actually worked in that period", "212"]], ["Eligible?", "Yes — 80 or more"]),
      note("Days of lay-off and holidays with wages during the twelve months count as days worked."),
    ),
    screen(
      "Leave entitlements",
      table(
        ["Situation", "Maximum leave", "Before delivery"],
        [
          ["First or second child", "26 weeks", "Up to 8 weeks"],
          ["Two or more surviving children", "12 weeks", "Up to 6 weeks"],
          ["Adopting a child under 3 months", "12 weeks", "From the date of adoption"],
          ["Commissioning mother (surrogacy)", "12 weeks", "From the date the child is handed over"],
        ],
      ),
    ),
    screen(
      "Applying it at Nilgiri",
      table(
        ["Employee", "Case", "Leave"],
        [
          ["Lakshmi", "First child", "26 weeks (182 days)"],
          ["Meena", "Third child — two surviving children", "12 weeks (84 days)"],
          ["Ritu", "Adopting a two-month-old", "12 weeks from adoption"],
        ],
      ),
      tip("Convert to days", "26 weeks = 182 days; 12 weeks = 84 days; 6 weeks = 42 days."),
    ),
    screen(
      "Other leave with wages",
      bullets(
        "Miscarriage or medical termination of pregnancy: six weeks immediately following it.",
        "Tubectomy: two weeks immediately following the operation.",
        "Illness arising out of pregnancy, delivery, premature birth, miscarriage or termination: up to one additional month.",
      ),
      caution("Each needs the proof prescribed under the rules."),
    ),
    mistakes(
      ["Counting calendar days since joining instead of days worked", "It's 80 days actually worked in the twelve months before expected delivery."],
      ["Giving 26 weeks for a third child", "With two or more surviving children it's 12 weeks."],
      ["Giving adoption leave for an older child", "The child must be under three months."],
      ["Allowing more than 8 weeks before delivery", "The pre-delivery cap is 8 weeks (6 for the 12-week case)."],
    ),
    check(
      2,
      q("How many days must a woman have worked to be eligible?", ["80 days in the 12 months before expected delivery", "180 days in total", "One year of service", "30 days"], 0, "Section 60."),
      q("How much leave does Lakshmi get for her first child?", ["26 weeks", "12 weeks", "6 weeks", "52 weeks"], 0, "Up to 8 weeks before delivery."),
      q("How much leave does Meena get for her third child?", ["12 weeks", "26 weeks", "8 weeks", "None"], 0, "Two or more surviving children."),
      q("What's the age limit for the child in adoption leave?", ["Under three months", "Under one year", "Under six months", "No limit"], 0, "Then 12 weeks from adoption."),
      q("How much leave follows a miscarriage?", ["Six weeks", "Two weeks", "12 weeks", "26 weeks"], 0, "Immediately following."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Eligibility",
          ["A new joiner, Sana, has worked 64 days when her baby is expected. Is she eligible?"],
          ["No — she needs at least 80 days actually worked in the twelve months before the expected delivery."],
        ],
        [
          "Exercise 2 — Leave in days",
          ["How many days of leave are due for (a) 26 weeks, (b) 12 weeks, (c) a tubectomy?"],
          ["(a) 182 days, (b) 84 days, (c) 14 days."],
        ],
      ),
    ),
    summary(
      ["The 80-day rule", "26 weeks, up to 8 before delivery", "12 weeks with two surviving children", "Adoption and commissioning mothers", "Miscarriage, tubectomy and illness"],
      "Check eligibility, then match the case to the right leave period.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Calculating Maternity Pay",
      ["Maternity benefit is paid at the average daily wage for the period of absence. Rekha calculates Lakshmi's and Meena's pay."],
      ["Work out the average daily wage", "Calculate maternity benefit", "Apply the medical bonus", "Know when payments are due", "Handle the death of an employee"],
    ),
    screen(
      "The average daily wage",
      p("The average daily wage is the average of the woman's wages for the days she actually worked in the three calendar months immediately before her absence."),
      example([["Lakshmi's wages for October–December 2026", "₹1,80,000"], ["Days actually worked", "75"]], ["Average daily wage", "₹2,400"]),
      note("Maternity benefit is paid for every day of the period of actual absence — including weekly offs and holidays in it."),
    ),
    screen(
      "Lakshmi's maternity benefit",
      example([["Average daily wage", "₹2,400"], ["Days of leave: 26 weeks", "× 182"], ["Maternity benefit", "₹4,36,800"], ["Medical bonus", "₹3,500"]], ["Total", "₹4,40,300"]),
    ),
    screen(
      "The medical bonus",
      bullets(
        "A medical bonus of ₹3,500, or a higher amount notified by the central government, is payable if the employer doesn't provide free pre-natal confinement and post-natal care.",
        "The 2026 central rules provide for it to be paid along with maternity benefit.",
        "Nilgiri doesn't provide free medical care, so the bonus is due.",
      ),
      caution("Check for any notification that raises the medical bonus before paying."),
    ),
    screen(
      "When to pay",
      steps(
        ["Before delivery", "Pay the benefit for the period before delivery in advance, on proof of pregnancy."],
        ["After delivery", "Pay the balance within 48 hours of proof that the woman has delivered."],
        ["Medical bonus", "Pay with the maternity benefit."],
      ),
    ),
    screen(
      "If the woman dies",
      p("If a woman entitled to maternity benefit dies, the benefit is paid to her nominee or legal representative."),
      bullets(
        "If she dies during the period, the benefit is paid for the days up to and including her death.",
        "If she dies after delivery leaving the child, it's paid for the whole period; if the child also dies within that period, up to the child's death.",
      ),
    ),
    mistakes(
      ["Using monthly salary ÷ 30", "Use wages for days actually worked in the three calendar months."],
      ["Paying only for working days", "Pay every day of the absence."],
      ["Forgetting the medical bonus", "Due if free care isn't provided."],
      ["Paying everything after return", "Pre-delivery amount in advance, balance within 48 hours of proof."],
    ),
    check(
      3,
      q("Over which period is the average daily wage worked out?", ["The three calendar months before the absence", "The last financial year", "The last week", "The whole period of service"], 0, "Days actually worked."),
      q("What is the medical bonus under the Code?", ["₹3,500 or a higher notified amount", "₹1,000", "₹7,500 always", "One month's salary"], 0, "If free care isn't provided."),
      q("Within how long of proof of delivery must the balance be paid?", ["48 hours", "Seven days", "30 days", "On return to work"], 0, "Pre-delivery amount is paid in advance."),
      q("If the average daily wage is ₹2,400, what's 26 weeks' benefit?", ["₹4,36,800", "₹4,32,000", "₹2,01,600", "₹3,74,400"], 0, "₹2,400 × 182."),
      q("Who receives the benefit if the woman dies?", ["Her nominee or legal representative", "The employer keeps it", "The state government", "Nobody"], 0, "Section 60."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Meena's pay",
          ["Meena earned ₹2,10,000 for 70 days worked in the three months before her leave. What's her 12-week benefit plus medical bonus?"],
          ["Average daily wage ₹3,000 × 84 = ₹2,52,000 + ₹3,500 = ₹2,55,500."],
        ],
        [
          "Exercise 2 — Miscarriage",
          ["An employee with an average daily wage of ₹1,500 has a miscarriage. What's due?"],
          ["Six weeks: 42 × ₹1,500 = ₹63,000."],
        ],
      ),
    ),
    summary(
      ["Average daily wage", "Benefit for every day of absence", "₹3,500 medical bonus", "Payment timing", "Payment on death"],
      "Average daily wage × days of absence, plus the medical bonus where free care isn't provided.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Workplace Support",
      ["The Code supports women returning to work. Nilgiri must set up a crèche and plan Lakshmi's return."],
      ["Apply the crèche rule", "Allow crèche visits", "Give nursing breaks", "Agree work from home", "Protect pregnant women from arduous work"],
    ),
    screen(
      "Crèche facility",
      bullets(
        "Every establishment with 50 or more employees must have a crèche, within the prescribed distance — on its own or as a common facility.",
        "The employer must allow four visits a day to the crèche, including the rest interval.",
        "Every woman must be told about the crèche and other benefits in writing and electronically when she joins.",
      ),
      note("Nilgiri has 64 employees, so it must provide a crèche — on its own or shared with nearby companies."),
    ),
    screen(
      "Nursing breaks",
      p("A woman who returns to work after delivery is allowed two nursing breaks a day, in addition to her rest interval, until the child is 15 months old."),
    ),
    screen(
      "Work from home",
      p("Where the work assigned is of a nature that can be done from home, the employer may allow the woman to work from home after the maternity benefit period, on terms mutually agreed."),
      tip("Put it in writing", "Rekha records the agreed work-from-home period and terms in a letter to Lakshmi."),
    ),
    screen(
      "Protection during pregnancy",
      bullets(
        "No employer may knowingly employ a woman in the six weeks immediately following her delivery, miscarriage or termination.",
        "On request, a pregnant woman mustn't be given arduous work, work involving long hours of standing, or work likely to interfere with her pregnancy — in the period before delivery prescribed by the Code.",
      ),
    ),
    mistakes(
      ["No crèche at 50+ employees", "It's mandatory."],
      ["Counting nursing breaks as the rest interval", "They're in addition."],
      ["Treating work from home as a right", "It's by mutual agreement, where the work allows."],
      ["Not informing new joiners", "Tell every woman about the benefits in writing and electronically."],
    ),
    check(
      4,
      q("From how many employees is a crèche mandatory?", ["50", "10", "30", "100"], 0, "Own or common facility."),
      q("How many crèche visits a day must be allowed?", ["Four", "Two", "One", "Six"], 0, "Including the rest interval."),
      q("Until what age of the child are nursing breaks allowed?", ["15 months", "6 months", "One year", "Two years"], 0, "Two a day."),
      q("How is work from home after maternity leave decided?", ["By mutual agreement where the work allows", "It's always mandatory", "Never allowed", "By the state government"], 0, "On agreed terms."),
      q("For how long after delivery can't a woman knowingly be employed?", ["Six weeks", "Two weeks", "26 weeks", "One week"], 0, "Also after miscarriage or termination."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Crèche planning",
          ["Nilgiri shares a building with two other firms. Can they run one crèche?"],
          ["Yes — a common crèche is allowed within the prescribed distance, with four visits a day for each mother."],
        ],
        [
          "Exercise 2 — Lakshmi's return",
          ["Lakshmi returns when her baby is 7 months old. What support applies?"],
          ["Two nursing breaks a day until the child is 15 months, crèche access with four visits, and work from home if agreed."],
        ],
      ),
    ),
    summary(
      ["Crèche at 50+ employees", "Four visits a day", "Two nursing breaks to 15 months", "Work from home by agreement", "Protection during pregnancy"],
      "Plan the return to work as carefully as the leave.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Job Protection",
      ["A woman's job is protected while she's on maternity leave. Rekha reviews a manager's request involving Meena."],
      ["Know the bar on dismissal", "Protect service conditions", "Apply rules on deductions", "Know complaints, inspections and penalties"],
    ),
    screen(
      "No dismissal during absence",
      p("It is unlawful to discharge or dismiss a woman during or on account of her absence under the maternity provisions, or to give notice of dismissal that expires during her absence."),
      caution("Meena's manager wants to end her contract while she's on leave because of a restructuring. Rekha refuses — that's unlawful."),
    ),
    screen(
      "Service conditions and wages",
      bullets(
        "Her service conditions can't be varied to her disadvantage during the absence.",
        "No deduction from normal wages can be made only because of the nature of work assigned under the pregnancy protections or because of nursing breaks.",
        "Dismissal for gross misconduct is possible only as the Code allows, and she may appeal against deprivation of benefit.",
      ),
    ),
    screen(
      "Increments and appraisal",
      p("Treat maternity leave as continuous service. Rekha includes Meena in the annual increment cycle and doesn't reduce her rating for the period of leave."),
      note("Unfair appraisal or loss of increment because of maternity can be treated as disadvantageous variation of service conditions."),
    ),
    screen(
      "Complaints and enforcement",
      bullets(
        "A woman can complain to the inspector-cum-facilitator if benefit is withheld or she's dismissed.",
        "Inspectors can examine records and order payment.",
        "Contraventions attract fines and, for some offences, imprisonment under the Code.",
      ),
    ),
    mistakes(
      ["Dismissing during leave for restructuring", "It's unlawful."],
      ["Skipping increments", "Leave counts as service."],
      ["Deducting wages for nursing breaks", "No deduction is allowed."],
      ["Ignoring complaints", "Inspectors can order payment."],
    ),
    check(
      5,
      q("Can Nilgiri dismiss Meena during her maternity leave for restructuring?", ["No — it's unlawful", "Yes, with a month's notice", "Yes, if she agrees by phone", "Only after 12 weeks"], 0, "Dismissal during absence is barred."),
      q("Can a notice of dismissal be given that expires during her leave?", ["No", "Yes", "Only for contract staff", "Only in factories"], 0, "Also unlawful."),
      q("Can wages be deducted for nursing breaks?", ["No", "Yes, pro-rata", "Only in the first month", "Only for part-timers"], 0, "Nursing breaks are paid."),
      q("How should maternity leave be treated for increments?", ["As continuous service", "As a break in service", "As unpaid absence", "As resignation"], 0, "No disadvantage."),
      q("Who can a woman complain to if benefit is withheld?", ["The inspector-cum-facilitator", "The GST officer", "Her bank", "The landlord"], 0, "Under the Code."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Manager's request",
          ["A manager wants to move Ritu to a lower role on her return from adoption leave. What should Rekha say?"],
          ["No — her service conditions can't be varied to her disadvantage because of her absence."],
        ],
        [
          "Exercise 2 — Appraisal",
          ["Meena was on leave for 3 months of the appraisal year. How should her rating be handled?"],
          ["Assess her on the period worked without penalising the leave, and include her in the increment cycle."],
        ],
      ),
    ),
    summary(
      ["No dismissal during absence", "No disadvantageous changes", "No deductions for nursing breaks", "Leave counts as service", "Complaints and penalties"],
      "Maternity leave must never cost a woman her job, pay or progress.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Maternity Benefit in Payroll",
      ["Rekha processes Lakshmi's claim through payroll from notice to final payment."],
      ["Handle notices and claims", "Collect proof", "Record leave and payments in payroll", "Coordinate with ESIC", "Use the compliance checklist"],
    ),
    screen(
      "Notice and claim",
      steps(
        ["Notice", "The woman gives written notice of her claim, the date from which she'll be absent (not earlier than eight weeks before delivery), and her nominee."],
        ["Proof", "Proof of pregnancy before delivery; proof of delivery after."],
        ["Advance", "Pay the pre-delivery amount."],
        ["Balance", "Pay the rest within 48 hours of proof of delivery."],
      ),
      note("Not giving notice doesn't by itself disentitle a woman to benefit."),
    ),
    screen(
      "Proof and certificates",
      p("Proof is given in the forms prescribed under the rules, typically a certificate from a registered medical practitioner. The rules also recognise certificates from other health workers such as an auxiliary nurse midwife or ASHA — check the current forms."),
    ),
    screen(
      "Recording it in payroll",
      table(
        ["Item", "Treatment"],
        [
          ["Maternity benefit", "Separate earnings head for the leave period"],
          ["Medical bonus", "Separate head, paid with the benefit"],
          ["Leave record", "Maternity leave type with start and end dates"],
          ["PF", "Check the PF treatment of the payment with your PF adviser"],
          ["Income tax", "Treated as salary and taxed through TDS"],
        ],
      ),
      caution("Keep the notice, certificates, calculation and payment proof in her file for inspection."),
    ),
    screen(
      "Coordinating with ESIC",
      p("For Kavya, Nilgiri doesn't pay maternity benefit — she claims from ESIC. Rekha marks her leave in payroll, files the required details on the ESIC portal and keeps her job and service protected."),
    ),
    screen(
      "Nilgiri's checklist",
      steps(
        ["Coverage", "Ten or more employees; ESI status checked."],
        ["Eligibility", "80 days in the previous twelve months."],
        ["Leave", "26 or 12 weeks; other leave as applicable."],
        ["Pay", "Average daily wage × days, plus ₹3,500 bonus."],
        ["Support", "Crèche, nursing breaks, work from home."],
        ["Records", "Notice, proofs, calculation, payment, leave register."],
      ),
    ),
    mistakes(
      ["Refusing benefit for late notice", "Late notice alone doesn't remove entitlement."],
      ["Mixing benefit into basic pay", "Use separate earnings heads."],
      ["Paying ESI-covered staff twice", "ESIC pays them."],
      ["Poor records", "Keep the full claim file."],
    ),
    check(
      6,
      q("How early can a woman's absence start before delivery for the 26-week case?", ["Up to eight weeks", "Up to 12 weeks", "Up to four weeks", "Any time"], 0, "Six weeks in the 12-week case."),
      q("Does failing to give notice end a woman's entitlement?", ["No, not by itself", "Yes, always", "Only in factories", "Only after 30 days"], 0, "The benefit is still due."),
      q("How should the medical bonus be recorded in payroll?", ["As a separate earnings head", "Inside basic pay", "As a deduction", "Not recorded"], 0, "Paid with the benefit."),
      q("For an ESI-covered employee, what does the employer do?", ["Records the leave and supports the ESIC claim", "Pays maternity benefit too", "Ignores the case", "Ends her employment"], 0, "ESIC pays."),
      q("What should be kept for inspection?", ["Notice, proofs, calculation and payment proof", "Only the payslip", "Nothing", "Only the offer letter"], 0, "The full claim file."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Payment schedule",
          ["Lakshmi starts leave on 20 November 2026 and delivers on 15 January 2027. What's paid when?"],
          ["Benefit for 20 November – 14 January in advance on proof of pregnancy; the balance within 48 hours of proof of delivery, with the ₹3,500 medical bonus."],
        ],
        [
          "Exercise 2 — Claim file",
          ["List the documents in Lakshmi's maternity file."],
          ["Notice of claim and nominee, proof of pregnancy, proof of delivery, average daily wage calculation, payment records, leave record and any work-from-home agreement."],
        ],
      ),
    ),
    summary(
      ["Notice and proof", "Certificates", "Payroll heads and records", "ESIC coordination", "The checklist"],
      "Process the claim promptly, pay on time and keep complete records.",
    ),
  ],
}

export default lessons
