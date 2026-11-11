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

// Statutory Compliance: Employee's Compensation — lesson screens by module
// index (0 = Module 1). The course follows Deccan Stone Works Pvt Ltd, a
// granite quarry and cutting unit in a district where the ESI scheme hasn't
// been implemented, so employees claim compensation from the employer under
// Chapter VII of the Code on Social Security, 2020. Relevant factors are from
// the age-based table carried over from the Employee's Compensation Act, 1923.
// Minimum amounts and the wage ceiling are set by notification — check the
// latest ones.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Employee's Compensation and the Code",
      ["When work causes injury or death, the employer must compensate the employee or the family. This module introduces the law through Deccan Stone Works."],
      ["Explain the purpose of employee's compensation", "Trace the move from the 1923 Act to the Code", "Know when the Code took effect", "Identify who is covered", "Understand how ESI affects claims"],
    ),
    screen(
      "Meet Deccan Stone Works",
      p("Deccan Stone Works runs a granite quarry and cutting unit with 90 workers. The ESI scheme hasn't yet been implemented in its district, so it pays compensation itself. Lata, its HR and payroll manager, handles every case."),
      table(
        ["Employee", "Role", "Age", "Monthly wages"],
        [
          ["Selvam", "Drill operator", "30", "₹14,000"],
          ["Kumar", "Crane operator", "40", "₹15,000"],
          ["Anitha", "Cutting machine operator", "25", "₹12,000"],
          ["Ravi", "Loader", "35", "₹13,000"],
        ],
      ),
    ),
    screen(
      "Why compensation exists",
      bullets(
        "To support employees and families after work injuries or deaths.",
        "Without the employee having to prove the employer was negligent.",
        "Through fixed formulas and quick payment.",
      ),
    ),
    screen(
      "From the 1923 Act to the Code",
      table(
        ["Then", "Now"],
        [
          ["Employee's Compensation Act, 1923", "Chapter VII of the Code on Social Security, 2020"],
          ["Fixed minimum amounts in the Act", "Minimum amounts notified by the central government"],
          ["Commuting accidents not expressly covered", "Commuting accidents deemed to arise out of employment, subject to conditions"],
        ],
      ),
      p("The Code came into force on 21 November 2025."),
    ),
    screen(
      "ESI and employee's compensation",
      compare(
        ["Covered by ESI", "Claims employment injury benefits from ESIC.", ["Can't also claim from the employer"]],
        ["Not covered by ESI", "Claims compensation from the employer.", ["Deccan's workers", "Through the employer or the competent authority"]],
      ),
      caution("Once ESI is implemented in the district, Deccan's eligible workers will claim from ESIC instead."),
    ),
    mistakes(
      ["Requiring proof of negligence", "Compensation doesn't depend on fault."],
      ["Paying ESI-covered employees too", "No double claims."],
      ["Citing the 1923 Act's fixed minimums", "The Code uses notified amounts."],
      ["Ignoring commuting accidents", "They can be covered under the Code."],
    ),
    check(
      1,
      q("Which chapter of the Code on Social Security covers employee's compensation?", ["Chapter VII", "Chapter VI", "Chapter III", "Chapter XI"], 0, "Replacing the 1923 Act."),
      q("Must an employee prove the employer's negligence to get compensation?", ["No", "Yes", "Only for deaths", "Only in factories"], 0, "No-fault system."),
      q("Who pays an ESI-covered employee's injury benefits?", ["ESIC", "The employer as well", "The state government", "Nobody"], 0, "No double claims."),
      q("Why does Deccan pay compensation itself?", ["ESI hasn't been implemented in its district", "It chose to", "It's a quarry", "It has 90 workers"], 0, "ESI coverage decides."),
      q("Which accidents did the Code expressly add?", ["Commuting accidents, subject to conditions", "Accidents at home", "Sports injuries", "Holiday travel"], 0, "Between home and work."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Who pays?",
          ["A factory worker in an ESI-implemented area is injured at work. Who pays?"],
          ["ESIC pays employment injury benefits; the employer doesn't pay compensation under Chapter VII as well."],
        ],
        [
          "Exercise 2 — Fault",
          ["Ravi slipped on a wet floor while loading. Lata says he was careless, so nothing is due. Is she right?"],
          ["No — compensation doesn't depend on fault. Carelessness alone doesn't remove liability."],
        ],
      ),
    ),
    summary(
      ["Purpose of compensation", "From the 1923 Act to Chapter VII", "Notified minimum amounts", "ESI and no double claims", "Deccan Stone Works' case"],
      "Check ESI coverage first — it decides whether the employer pays.",
    ),
  ],

  1: [
    overview(
      "Module 2 — When the Employer Is Liable",
      ["Lata reviews a set of incidents to decide whether compensation is due."],
      ["Apply “arising out of and in the course of employment”", "Handle commuting accidents", "Recognise occupational diseases", "Know when the employer isn't liable", "Apply the rules to contractors' workers"],
    ),
    screen(
      "The basic test",
      p("The employer is liable if personal injury is caused to an employee by accident arising out of and in the course of employment."),
      table(
        ["Incident", "Covered?"],
        [
          ["Kumar injured when a crane cable snaps during work", "Yes"],
          ["Anitha cuts her hand on the cutting machine", "Yes"],
          ["A worker injured playing cricket at home on a day off", "No"],
        ],
      ),
    ),
    screen(
      "Commuting accidents",
      p("Under the Code, an accident while the employee is commuting from home to the place of work, or back, is deemed to arise out of and in the course of employment — subject to the conditions prescribed."),
      note("Ravi's motorcycle accident on his usual route to the quarry would be covered, subject to the conditions."),
    ),
    screen(
      "Occupational diseases",
      p("If an employee in a listed employment contracts a disease specified as occupational to that employment, it's treated as an injury by accident. Some diseases need a minimum period of service in that employment."),
      example([["Disease", "Silicosis"], ["Employment", "Granite quarrying and cutting"]], ["Treated as", "Injury by accident"]),
    ),
    screen(
      "When the employer isn't liable",
      bullets(
        "An injury that doesn't disable the employee for more than three days.",
        "In non-fatal cases, an injury directly due to being under the influence of drink or drugs.",
        "In non-fatal cases, wilful disobedience of a safety rule or order, or wilful removal or disregard of a safety guard.",
      ),
      caution("These exceptions don't apply where the accident causes death."),
    ),
    screen(
      "Contractors' workers",
      p("Where a principal employer engages workers through a contractor for its trade or business, the principal employer can be liable to pay compensation and recover it from the contractor."),
    ),
    mistakes(
      ["Denying commuting claims automatically", "They can be covered, subject to conditions."],
      ["Applying the drink exception to deaths", "It applies only to non-fatal cases."],
      ["Ignoring occupational disease", "Treat listed diseases as accidents."],
      ["Assuming contractors' workers aren't your concern", "The principal employer can be liable."],
    ),
    check(
      2,
      q("What is the basic test for liability?", ["Injury by accident arising out of and in the course of employment", "The employee's fault", "The employer's profits", "Whether the employee is permanent"], 0, "Section 74."),
      q("Is an accident on the usual route to work covered under the Code?", ["Yes, subject to prescribed conditions", "Never", "Only by bus", "Only at night"], 0, "Commuting accidents are deemed covered."),
      q("Is an injury that disables for two days compensable?", ["No — it must exceed three days", "Yes", "Only in quarries", "Only with ESI"], 0, "Exception."),
      q("Does the drink-or-drugs exception apply when the accident causes death?", ["No", "Yes", "Only for drugs", "Only on weekends"], 0, "Non-fatal cases only."),
      q("How is a listed occupational disease treated?", ["As an injury by accident", "As ordinary illness", "As misconduct", "As leave"], 0, "If contracted in the listed employment."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Covered or not?",
          ["(a) A worker removes a machine guard and loses a finger. (b) The same thing kills a worker. Is compensation due?"],
          ["(a) No — wilful removal of a safety guard in a non-fatal case. (b) Yes — the exception doesn't apply to death."],
        ],
        [
          "Exercise 2 — Disease",
          ["A cutter develops silicosis after years at Deccan. What should Lata do?"],
          ["Treat it as an injury by accident if silicosis is a listed occupational disease for that employment, get medical assessment and process compensation."],
        ],
      ),
    ),
    summary(
      ["Arising out of and in the course of employment", "Commuting accidents", "Occupational diseases", "Exceptions", "Contractors' workers"],
      "Start with the basic test, then check the exceptions — which never apply to deaths.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Types of Injury",
      ["The type of injury decides the formula. Lata classifies each case."],
      ["Recognise death cases", "Identify permanent total disablement", "Identify permanent partial disablement", "Identify temporary disablement", "Use medical evidence"],
    ),
    screen(
      "The four categories",
      table(
        ["Category", "Meaning"],
        [
          ["Death", "The injury results in death"],
          ["Permanent total disablement", "Incapacitates the employee for all work they could do at the time of the accident"],
          ["Permanent partial disablement", "Reduces earning capacity in every employment they could do at the time"],
          ["Temporary disablement", "Reduces earning capacity for a period, after which they recover"],
        ],
      ),
    ),
    screen(
      "Listed injuries",
      p("The Code's schedule lists injuries treated as permanent total disablement, and injuries treated as permanent partial disablement with a set percentage of loss of earning capacity. Some combinations of listed partial injuries add up to total disablement where they reach 100%."),
      note("For injuries not listed, a qualified medical practitioner assesses the percentage loss of earning capacity."),
    ),
    screen(
      "Deccan's cases",
      table(
        ["Employee", "Injury", "Category"],
        [
          ["Selvam", "Fatal accident at the drill site", "Death"],
          ["Kumar", "Spinal injury — can't do any work he could do before", "Permanent total"],
          ["Anitha", "Hand injury assessed at 30% loss of earning capacity", "Permanent partial"],
          ["Ravi", "Fractured leg, off work for 30 days", "Temporary"],
        ],
      ),
    ),
    screen(
      "Medical evidence",
      steps(
        ["Treatment records", "Keep hospital and treatment records from the start."],
        ["Assessment", "Get a qualified medical practitioner's assessment of disablement and the percentage loss of earning capacity."],
        ["Review", "Review temporary cases until the employee returns or the disablement is assessed as permanent."],
      ),
    ),
    mistakes(
      ["Guessing the percentage", "Use the schedule or a medical assessment."],
      ["Treating a long absence as permanent", "Temporary if the employee recovers."],
      ["Ignoring combinations", "Several partial injuries can add to total."],
      ["Losing medical records", "Keep them from day one."],
    ),
    check(
      3,
      q("Kumar can't do any work he could do before the accident. What's the category?", ["Permanent total disablement", "Temporary disablement", "Permanent partial disablement", "No disablement"], 0, "All work he was capable of."),
      q("Who assesses loss of earning capacity for unlisted injuries?", ["A qualified medical practitioner", "The HR manager", "The supervisor", "The employee"], 0, "Medical assessment."),
      q("Ravi is off for 30 days and recovers fully. What's the category?", ["Temporary disablement", "Permanent partial", "Permanent total", "Death"], 0, "He recovers."),
      q("What decides Anitha's partial disablement amount?", ["Her percentage loss of earning capacity", "Her length of service", "Her age only", "The company's profits"], 0, "30%."),
      q("Can several partial injuries amount to total disablement?", ["Yes, where they add up to 100%", "No", "Only for deaths", "Only in factories"], 0, "Combinations."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["A worker loses sight in both eyes in a blasting accident. Which category?"],
          ["Permanent total disablement — a listed injury."],
        ],
        [
          "Exercise 2 — Evidence",
          ["List the medical evidence Lata needs for Anitha's claim."],
          ["Hospital and treatment records, and a qualified medical practitioner's certificate assessing 30% loss of earning capacity."],
        ],
      ),
    ),
    summary(
      ["Four categories", "Listed injuries", "Medical assessment", "Deccan's cases", "Keeping evidence"],
      "Classify correctly — each category has its own formula.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Calculating Compensation",
      ["Lata calculates compensation for each case using the formulas and the relevant factor."],
      ["Use monthly wages", "Calculate death compensation", "Calculate permanent total disablement", "Calculate permanent partial disablement", "Calculate temporary disablement payments"],
    ),
    screen(
      "The formulas",
      table(
        ["Case", "Formula"],
        [
          ["Death", "50% of monthly wages × relevant factor, or the notified amount if more"],
          ["Permanent total disablement", "60% of monthly wages × relevant factor, or the notified amount if more"],
          ["Permanent partial disablement", "The percentage loss of earning capacity × the permanent total amount"],
          ["Temporary disablement", "Half-monthly payments of 25% of monthly wages"],
        ],
      ),
      caution("A wage ceiling for compensation and the minimum amounts are set by notification. Check the latest before calculating — Deccan's examples use wages within the long-standing ₹15,000 ceiling."),
    ),
    screen(
      "The relevant factor",
      p("The relevant factor depends on the employee's age at their last birthday before the accident — younger employees have higher factors."),
      table(
        ["Age", "Relevant factor"],
        [
          ["25", "216.91"],
          ["30", "207.98"],
          ["35", "197.06"],
          ["40", "184.17"],
        ],
      ),
    ),
    screen(
      "Death — Selvam",
      example([["Monthly wages", "₹14,000"], ["50%", "₹7,000"], ["Relevant factor (age 30)", "× 207.98"]], ["Compensation", "₹14,55,860"]),
      note("Funeral expenses of at least ₹15,000 are also payable, in addition."),
    ),
    screen(
      "Permanent total — Kumar",
      example([["Monthly wages", "₹15,000"], ["60%", "₹9,000"], ["Relevant factor (age 40)", "× 184.17"]], ["Compensation", "₹16,57,530"]),
    ),
    screen(
      "Permanent partial — Anitha",
      example([["Monthly wages", "₹12,000"], ["60%", "₹7,200"], ["Relevant factor (age 25)", "× 216.91"], ["Permanent total amount", "₹15,61,752"], ["Loss of earning capacity", "× 30%"]], ["Compensation", "₹4,68,526"]),
    ),
    screen(
      "Temporary — Ravi",
      p("Temporary disablement is paid as half-monthly payments of 25% of monthly wages. There's a waiting period of three days, but if the disablement lasts 28 days or more, it's paid from the date of disablement."),
      example([["Monthly wages", "₹13,000"], ["25% half-monthly payment", "₹3,250"], ["30 days = 2 half-months", "× 2"]], ["Compensation", "₹6,500"]),
      tip("Deduct advances", "Any payment or allowance the employee got from the employer for the injury is deducted from temporary disablement payments, as the Code allows."),
    ),
    mistakes(
      ["Using 50% for disablement", "Death is 50%; total disablement is 60%."],
      ["Using age at the date of calculation", "Use age at the last birthday before the accident."],
      ["Applying the percentage to wages", "Apply it to the permanent total amount."],
      ["Ignoring the waiting period rule", "28 days or more is paid from day one."],
    ),
    check(
      4,
      q("What's the death formula?", ["50% of monthly wages × relevant factor", "60% of monthly wages × relevant factor", "Monthly wages × 12", "25% of monthly wages"], 0, "Or the notified amount if more."),
      q("What's Selvam's death compensation at ₹14,000 and age 30?", ["₹14,55,860", "₹17,47,032", "₹12,00,000", "₹29,11,720"], 0, "₹7,000 × 207.98."),
      q("What's Kumar's permanent total compensation at ₹15,000 and age 40?", ["₹16,57,530", "₹13,81,275", "₹27,62,550", "₹18,00,000"], 0, "₹9,000 × 184.17."),
      q("How is permanent partial compensation calculated?", ["Percentage loss × the permanent total amount", "Percentage loss × monthly wages", "Half the death amount", "A fixed ₹50,000"], 0, "Anitha's 30%."),
      q("What's the half-monthly temporary payment rate?", ["25% of monthly wages", "50%", "60%", "100%"], 0, "Paid half-monthly."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Death",
          ["A 35-year-old earning ₹14,500 dies in a work accident. What compensation is due?"],
          ["50% × ₹14,500 = ₹7,250 × 197.06 = ₹14,28,685, plus funeral expenses of at least ₹15,000."],
        ],
        [
          "Exercise 2 — Partial",
          ["A 40-year-old earning ₹15,000 suffers a 20% loss of earning capacity. What's due?"],
          ["Permanent total amount ₹16,57,530 × 20% = ₹3,31,506."],
        ],
      ),
    ),
    summary(
      ["The formulas", "The relevant factor", "Death and permanent total", "Permanent partial", "Temporary payments"],
      "Classify, find the relevant factor, apply the formula — and compare with the notified minimum.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Paying Compensation",
      ["Lata pays and deposits compensation on time to avoid interest and penalties."],
      ["Pay as soon as compensation is due", "Deposit death compensation with the competent authority", "Know interest and penalties", "Reimburse medical expenses", "Handle disputes"],
    ),
    screen(
      "Paying on time",
      bullets(
        "Compensation is due as soon as it falls due.",
        "If the employer disputes the amount, it must pay provisionally the amount it accepts.",
        "Delay beyond one month brings interest; unjustified delay can bring a penalty of up to 50% of the amount.",
      ),
      example([["Compensation", "₹4,68,526"], ["Interest at 12% a year for 3 months' delay", ""]], ["Interest", "₹14,056"]),
    ),
    screen(
      "Deposit with the competent authority",
      p("Compensation for death, and lump sums for women or persons under a legal disability, must be deposited with the competent authority — not paid directly to the family. The authority distributes it among the dependants."),
      caution("A payment made directly to Selvam's family isn't treated as payment of compensation. Lata deposits ₹14,55,860 with the competent authority."),
    ),
    screen(
      "Funeral expenses and medical costs",
      bullets(
        "Funeral expenses of at least ₹15,000 (or as prescribed) are deposited along with death compensation.",
        "Reasonable medical expenses for treating the work injury are reimbursed by the employer, as the Code provides.",
      ),
    ),
    screen(
      "Disputes",
      p("Disputes on liability, amount or the percentage of disablement go to the competent authority, which hears both sides and decides."),
      steps(
        ["Provisional payment", "Pay what isn't disputed."],
        ["Evidence", "Medical reports, wage records and accident reports."],
        ["Decision", "Pay as ordered by the competent authority."],
      ),
    ),
    mistakes(
      ["Paying death compensation directly to family", "Deposit with the competent authority."],
      ["Waiting for a dispute to end before paying anything", "Pay the undisputed amount."],
      ["Ignoring interest", "Delay over a month brings interest."],
      ["Forgetting funeral expenses", "At least ₹15,000."],
    ),
    check(
      5,
      q("Where must death compensation be paid?", ["Deposited with the competent authority", "Directly to the spouse in cash", "Into the company's bank", "To the union"], 0, "The authority distributes it."),
      q("What penalty can apply for unjustified delay?", ["Up to 50% of the amount", "Nothing", "A fixed ₹500", "Double the amount"], 0, "Plus interest."),
      q("What must the employer do if it disputes part of the amount?", ["Pay the amount it accepts provisionally", "Pay nothing", "Pay double", "Wait for court"], 0, "Provisional payment."),
      q("What are the minimum funeral expenses?", ["₹15,000", "₹5,000", "₹50,000", "₹1,00,000"], 0, "Or as prescribed."),
      q("Who decides disputes on compensation?", ["The competent authority", "The HR manager", "The insurer", "The doctor"], 0, "After hearing both sides."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Deposit",
          ["What does Lata deposit for Selvam's death?"],
          ["₹14,55,860 compensation plus funeral expenses of at least ₹15,000 — ₹14,70,860 in total — with the competent authority."],
        ],
        [
          "Exercise 2 — Interest",
          ["Kumar's ₹16,57,530 is paid two months late. What interest is due at 12% a year?"],
          ["₹16,57,530 × 12% × 2/12 = ₹33,151 (rounded)."],
        ],
      ),
    ),
    summary(
      ["Pay when due", "Deposit death compensation", "Interest and penalty", "Funeral and medical costs", "Disputes"],
      "Pay or deposit promptly — delay only adds interest and penalties.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Reporting, Records and Insurance",
      ["Lata sets up Deccan's accident reporting, records and insurance."],
      ["Report fatal and serious accidents", "Keep accident registers", "Insure the liability", "Link to accident prevention", "Use the compliance checklist"],
    ),
    screen(
      "Reporting accidents",
      bullets(
        "Report fatal and serious accidents to the authorities in the form and time the OSH Code and rules require.",
        "Give the competent authority the details required for compensation cases.",
        "Inform the police where the law requires it.",
      ),
      tip("Same day", "Deccan's rule is to tell Lata the same day of any accident, so reports go out in time."),
    ),
    screen(
      "Records",
      table(
        ["Record", "Contents"],
        [
          ["Accident register", "Date, time, place, employee, nature of injury, witnesses"],
          ["Medical file", "Treatment records and assessments"],
          ["Wage records", "Monthly wages for the calculation"],
          ["Payment records", "Deposits, receipts and interest"],
        ],
      ),
    ),
    screen(
      "Insurance",
      p("Employers can insure their liability for employee's compensation with an insurer. The policy pays the compensation, but the employer remains responsible for ensuring it's paid or deposited on time."),
      note("Deccan holds an employee's compensation policy covering all 90 workers and updates the wage declaration each year."),
    ),
    screen(
      "Preventing accidents",
      p("The best compensation case is the one that never happens. The OSH Code requires safe workplaces, safety equipment and training."),
      bullets(
        "Dust suppression to prevent silicosis.",
        "Guards on cutting machines.",
        "Helmets, harnesses and boots at the quarry face.",
        "Regular safety drills.",
      ),
    ),
    screen(
      "Deccan's checklist",
      steps(
        ["ESI status", "Is the area ESI-implemented?"],
        ["Report", "Accidents reported on time."],
        ["Classify", "Death, permanent total, permanent partial or temporary."],
        ["Calculate", "Formula, relevant factor, notified minimum."],
        ["Pay or deposit", "Within a month; deposit death cases."],
        ["Insure and prevent", "Policy in force; safety measures."],
      ),
    ),
    mistakes(
      ["Late reporting", "Report fatal and serious accidents on time."],
      ["No accident register", "Record every accident."],
      ["Relying on insurance to pay on time", "The employer must ensure it's paid."],
      ["Stale wage declaration", "Update it each year."],
    ),
    check(
      6,
      q("What does the accident register record?", ["Date, place, employee, injury and witnesses", "Only the employee's name", "Sales for the day", "Nothing"], 0, "Every accident."),
      q("Does insurance remove the employer's responsibility to pay on time?", ["No", "Yes", "Only for deaths", "Only for contractors"], 0, "The employer remains responsible."),
      q("Which law requires safe workplaces and safety training?", ["The OSH Code, 2020", "The GST Act", "The Companies Act", "The Code on Wages"], 0, "Prevention."),
      q("What prevents silicosis at the quarry?", ["Dust suppression", "Longer shifts", "More overtime", "Nothing"], 0, "Prevention measure."),
      q("What's the first item on Deccan's checklist?", ["ESI status", "Insurance premium", "Funeral expenses", "Interest"], 0, "It decides who pays."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Reporting procedure",
          ["Write Deccan's accident procedure in four steps."],
          ["(1) First aid and hospital; (2) tell Lata the same day and record in the accident register; (3) report to authorities as required; (4) open a compensation file with medical and wage records."],
        ],
        [
          "Exercise 2 — Insurance review",
          ["Deccan's wages rose 10% but its policy declaration wasn't updated. What's the risk?"],
          ["The insurer may pay less than the compensation due, leaving Deccan to pay the shortfall. Update the declaration."],
        ],
      ),
    ),
    summary(
      ["Reporting", "Accident register and records", "Insurance", "Prevention", "The checklist"],
      "Report quickly, record everything, insure the liability — and prevent accidents first.",
    ),
  ],
}

export default lessons
