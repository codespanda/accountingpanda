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
  terms,
  tip,
} from "@/lib/lessonKit"

// Statutory Compliance: Gratuity — lesson screens by module index (0 = Module 1).
// The course follows Orchid Hospitality Pvt Ltd, a hotel company in Goa, as
// four employees leave in 2026-27: Joseph (resigns, 7 years 8 months),
// Sunita (fixed-term, 2 years), Rakesh (dies in service, 3 years) and
// Anand (retires, 30 years).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Gratuity and the Code on Social Security",
      ["Gratuity is a lump sum that rewards long service. This module introduces the law through Orchid Hospitality."],
      ["Explain what gratuity is", "Trace the move from the 1972 Act to the Code", "Know when the Code took effect", "Identify establishments covered", "Summarise employer obligations"],
    ),
    screen(
      "Meet Orchid Hospitality",
      p("Orchid Hospitality Pvt Ltd runs three hotels in Goa with 180 employees. Maria, the HR manager, handles four exits in 2026-27:"),
      table(
        ["Employee", "Situation", "Service"],
        [
          ["Joseph — chef", "Resigns", "7 years 8 months"],
          ["Sunita — events coordinator", "Fixed-term contract ends", "2 years"],
          ["Rakesh — security guard", "Dies in service", "3 years"],
          ["Anand — general manager", "Retires", "30 years"],
        ],
      ),
    ),
    screen(
      "What gratuity is",
      bullets(
        "A lump sum paid by the employer when employment ends after qualifying service.",
        "A reward for long service and support for retirement or transition.",
        "Paid entirely by the employer — no employee contribution.",
        "A legal entitlement: it can't be reduced by contract below the statutory amount.",
      ),
    ),
    screen(
      "From the 1972 Act to the Code",
      table(
        ["Then", "Now"],
        [
          ["Payment of Gratuity Act, 1972", "Chapter V of the Code on Social Security, 2020"],
          ["Five years' service required (except death or disablement)", "Same — plus pro-rata gratuity for fixed-term employees after one year"],
          ["Wages = basic + DA", "Code definition of wages, with the 50% rule"],
        ],
      ),
      p("The Code came into force on 21 November 2025."),
    ),
    screen(
      "Which establishments are covered",
      bullets(
        "Factories, mines, oilfields, plantations, ports and railway companies.",
        "Shops and establishments with 10 or more employees on any day in the previous 12 months.",
        "Other notified establishments.",
        "Once covered, an establishment stays covered even if headcount falls below 10.",
      ),
    ),
    screen(
      "Employer obligations at a glance",
      steps(
        ["Track service", "Joining dates, breaks, continuous service."],
        ["Collect nominations", "From every employee."],
        ["Calculate correctly", "Code wages, years and the ceiling."],
        ["Pay on time", "Within 30 days of gratuity becoming payable."],
        ["Fund and provide", "Actuarial provision in the books; often an insurer-managed fund."],
      ),
    ),
    mistakes(
      ["Treating gratuity as optional", "It's a legal entitlement."],
      ["Using the old wage definition", "Apply the Code's wages."],
      ["Ignoring fixed-term employees", "They qualify after one year."],
      ["Thinking coverage ends below 10 employees", "Once covered, always covered."],
    ),
    check(
      1,
      q("Who pays gratuity?", ["The employer", "The employee", "The government", "Both equally"], 0, "No employee contribution."),
      q("Which law now governs gratuity?", ["Chapter V of the Code on Social Security, 2020", "The Payment of Gratuity Act, 1972 alone", "The Code on Wages only", "The Income-tax Act"], 0, "From 21 November 2025."),
      q("From what headcount are shops and establishments covered?", ["10 employees", "20 employees", "50 employees", "1 employee"], 0, "On any day in the previous 12 months."),
      q("What's new for fixed-term employees under the Code?", ["Pro-rata gratuity after one year", "No gratuity", "Gratuity after ten years", "Double gratuity"], 0, "Instead of five years."),
      q("Can a contract reduce gratuity below the statutory amount?", ["No", "Yes", "Only for managers", "Only with consent"], 0, "It's a legal minimum."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Coverage",
          ["A restaurant had 12 employees last year and now has 8. Is it covered?"],
          ["Yes — it had 10 or more employees in the previous 12 months, and coverage continues."],
        ],
        [
          "Exercise 2 — Changes",
          ["Name two ways the Code changed gratuity."],
          ["Fixed-term employees qualify after one year (pro-rata), and gratuity is based on the Code's wider definition of wages with the 50% rule."],
        ],
      ),
    ),
    summary(
      ["What gratuity is", "From the 1972 Act to the Code", "Covered establishments", "Employer obligations"],
      "Gratuity is a statutory reward for service — now under the Code on Social Security, with changes for fixed-term staff and wages.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Eligibility",
      ["Not every leaver gets gratuity. This module checks eligibility for Orchid's four leavers."],
      ["Apply the five-year rule for regular employees", "Know that death or disablement needs no minimum service", "Apply the one-year rule for fixed-term employees", "Work out continuous service", "Handle resignation, retirement, termination and forfeiture"],
    ),
    screen(
      "Five years for regular employees",
      p("Regular employees qualify after at least five years of continuous service, when employment ends by:"),
      bullets("Superannuation (retirement).", "Retirement or resignation.", "Termination (other than for misconduct leading to forfeiture)."),
      p("Joseph (7 years 8 months) and Anand (30 years) qualify."),
    ),
    screen(
      "Death or disablement",
      p("No minimum service is needed if employment ends because of death, or disablement due to accident or disease."),
      p("Rakesh died after 3 years — his nominee is entitled to gratuity."),
    ),
    screen(
      "Fixed-term employees",
      bullets(
        "Under the Code, fixed-term employees are entitled to gratuity on a pro-rata basis after one year of service.",
        "Sunita's 2-year contract qualifies her.",
        "Fixed-term employees also get the same wages and benefits as permanent staff doing similar work.",
      ),
    ),
    screen(
      "Continuous service",
      table(
        ["Rule", "Detail"],
        [
          ["Uninterrupted service", "Includes leave, sickness, accident, lawful strikes and lay-offs"],
          ["Deemed continuous service", "At least 240 days worked in 12 months (190 for underground mines)"],
          ["Breaks", "Unauthorised long absences or gaps can break continuity"],
        ],
      ),
      tip("Keep attendance records", "Days worked decide continuous service when service is irregular."),
    ),
    screen(
      "Forfeiture",
      table(
        ["Termination for", "Gratuity"],
        [
          ["Wilful damage or loss to the employer's property", "Forfeited to the extent of the damage"],
          ["Riotous or disorderly conduct, or violence", "May be wholly or partly forfeited"],
          ["An offence involving moral turpitude committed in the course of employment", "May be wholly or partly forfeited"],
        ],
      ),
      caution("Forfeiture needs a termination order stating the reason — it can't be applied informally."),
    ),
    mistakes(
      ["Denying gratuity on death before five years", "No minimum applies."],
      ["Making fixed-term staff wait five years", "One year under the Code."],
      ["Counting calendar years only", "Apply continuous-service rules."],
      ["Forfeiting without an order", "Follow the law's conditions."],
    ),
    check(
      2,
      q("How much service does a regular employee need for gratuity on resignation?", ["5 years", "1 year", "10 years", "3 years"], 0, "Continuous service."),
      q("Is there a minimum service for gratuity on death in service?", ["No", "Yes, 5 years", "Yes, 1 year", "Yes, 3 years"], 0, "Paid to the nominee."),
      q("After how long does a fixed-term employee qualify?", ["1 year", "5 years", "6 months", "Never"], 0, "Pro-rata."),
      q("How many days' work in 12 months counts as deemed continuous service (outside mines)?", ["240", "190", "180", "365"], 0, "190 for underground mines."),
      q("When can gratuity be forfeited to the extent of damage?", ["Termination for wilful damage to employer's property", "Resignation", "Retirement", "Death"], 0, "With a termination order."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Eligible?",
          ["(a) A waiter resigns after 4 years 10 months. (b) A housekeeper is disabled in an accident after 2 years. (c) A fixed-term chef leaves after 14 months."],
          ["(a) Not eligible — under five years. (b) Eligible — disablement. (c) Eligible — fixed-term after one year."],
        ],
        [
          "Exercise 2 — Forfeiture",
          ["An employee is dismissed for damaging hotel equipment worth ₹50,000. His gratuity is ₹1,20,000. What can Orchid withhold?"],
          ["Up to ₹50,000 — the extent of the damage — with a termination order stating the reason. ₹70,000 must be paid."],
        ],
      ),
    ),
    summary(
      ["Five years for regular employees", "No minimum on death or disablement", "One year for fixed-term employees", "Continuous service", "Forfeiture"],
      "Check how employment ended and the type of contract before deciding eligibility.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Calculating Gratuity",
      ["This module calculates gratuity for Orchid's leavers using the Code's wages."],
      ["Calculate “wages” with the 50% rule", "Apply the 15/26 formula", "Round part-years", "Handle seasonal and piece-rated employees", "Work examples for regular and fixed-term employees"],
    ),
    screen(
      "Wages for gratuity — Joseph",
      table(
        ["Joseph's last monthly pay", "Amount"],
        [
          ["Basic + DA", "₹20,000"],
          ["Special allowance", "₹4,000"],
          ["HRA (excluded)", "₹24,000"],
          ["Conveyance (excluded)", "₹12,000"],
          ["Total remuneration", "₹60,000"],
          ["Exclusions ₹36,000 − 50% limit ₹30,000 = add back", "₹6,000"],
        ],
        { footer: ["Wages for gratuity", "₹30,000"], numeric: [1] },
      ),
      p("Under the old Act, gratuity was based on basic + DA of ₹20,000. Under the Code, it's ₹30,000."),
    ),
    screen(
      "The formula",
      p("Gratuity = last drawn wages × 15 ÷ 26 × completed years of service."),
      bullets(
        "15 days' wages for each year, with a month treated as 26 working days.",
        "Seasonal establishments: 7 days' wages for each season.",
      ),
    ),
    screen(
      "Rounding part-years",
      table(
        ["Service", "Years counted"],
        [
          ["7 years 8 months", "8 (more than 6 months rounds up)"],
          ["7 years 6 months", "7"],
          ["7 years 4 months", "7"],
        ],
      ),
      example([["Joseph: ₹30,000 × 15 ÷ 26 × 8", ""], ["Under the old wage definition: ₹20,000 × 15 ÷ 26 × 8 = ₹92,308", ""]], ["Gratuity under the Code", "₹1,38,462"]),
    ),
    screen(
      "Seasonal and piece-rated employees",
      terms(
        ["Seasonal", "7 days' wages for each season worked, in a seasonal establishment."],
        ["Piece-rated", "Daily wages are the average of total wages for the last three months, before termination."],
      ),
    ),
    screen(
      "Worked examples",
      table(
        ["Employee", "Wages", "Years", "Gratuity"],
        [
          ["Joseph (resigns)", "₹30,000", "8", "₹1,38,462"],
          ["Sunita (fixed-term)", "₹30,000", "2", "₹34,615"],
          ["Rakesh (death)", "₹25,000", "3", "₹43,269"],
          ["Anand (retires) — before the ceiling", "₹1,50,000", "30", "₹25,96,154"],
        ],
        { numeric: [1, 3] },
      ),
      note("Fixed-term gratuity is calculated in proportion to service. Confirm how your organisation treats part-years for fixed-term staff."),
    ),
    mistakes(
      ["Using basic + DA only", "Apply the Code's wages."],
      ["Dividing by 30", "Use 26."],
      ["Rounding exactly 6 months up", "Only more than 6 months rounds up."],
      ["Forgetting the ceiling", "Module 4."],
    ),
    check(
      3,
      q("What's the gratuity formula?", ["Wages × 15 ÷ 26 × completed years", "Wages × 30 ÷ 365 × years", "Wages × 12", "Wages ÷ 26"], 0, "15 days per year."),
      q("Service of 9 years 7 months counts as:", ["10 years", "9 years", "9.58 years", "Not eligible"], 0, "More than 6 months rounds up."),
      q("Wages ₹26,000, 10 years. Gratuity?", ["₹1,50,000", "₹2,60,000", "₹1,30,000", "₹1,00,000"], 0, "₹26,000 × 15 ÷ 26 × 10."),
      q("How is gratuity worked out for seasonal workers?", ["7 days' wages for each season", "15 days a year", "Nothing", "30 days a season"], 0, "Seasonal establishments."),
      q("Why did Joseph's gratuity wages rise under the Code?", ["Exclusions above 50% were added back", "His pay rose", "Tax changed", "PF changed"], 0, "The 50% rule."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Calculate",
          ["Wages ₹45,000; service 11 years 9 months. Calculate gratuity."],
          ["Years counted: 12. ₹45,000 × 15 ÷ 26 × 12 = ₹3,11,538."],
        ],
        [
          "Exercise 2 — 50% rule",
          ["Total remuneration ₹72,000: basic ₹24,000, special ₹6,000, HRA ₹30,000, conveyance ₹12,000. Service 6 years. Calculate gratuity."],
          ["Exclusions ₹42,000; limit ₹36,000; add back ₹6,000 → wages ₹36,000. Gratuity ₹36,000 × 15 ÷ 26 × 6 = ₹1,24,615."],
        ],
      ),
    ),
    summary(
      ["Code wages and the 50% rule", "The 15/26 formula", "Rounding part-years", "Seasonal and piece-rated workers", "Worked examples"],
      "Gratuity = 15/26 of last wages for each year — and under the Code, wages often mean more than basic + DA.",
    ),
  ],
  3: [
    overview(
      "Module 4 — The Ceiling, Payment and Nomination",
      ["Anand's gratuity exceeds the limit. This module covers the ceiling, payment deadlines, nominations and disputes."],
      ["Apply the maximum gratuity", "Know the ₹20 lakh limit", "Pay more under a contract or policy", "Pay within 30 days and know the interest on delay", "Pay nominees or legal heirs", "Understand disputes and the controlling authority"],
    ),
    screen(
      "The maximum gratuity",
      bullets(
        "Under the Code, statutory gratuity is capped at an amount notified by the Central Government.",
        "The last notified limit is ₹20 lakh (from 2018, under the old Act).",
        "Central government employees have a separate, higher ceiling.",
      ),
      example([["Anand's calculated gratuity", "₹25,96,154"], ["Statutory maximum", "₹20,00,000"]], ["Statutory gratuity payable", "₹20,00,000"]),
    ),
    screen(
      "Paying more than the ceiling",
      p("An employer can pay more under a contract, policy or settlement — the statute sets a minimum entitlement and a cap on what the law requires, not on what can be paid."),
      p("Orchid's senior management policy pays full calculated gratuity, so Anand receives ₹25,96,154. The extra ₹5,96,154 is contractual."),
      note("Amounts above the tax-exempt limit are taxable (Module 5)."),
    ),
    screen(
      "Payment and interest",
      table(
        ["Rule", "Detail"],
        [
          ["Employee applies", "Usually within the prescribed time after gratuity becomes payable"],
          ["Employer determines the amount", "And informs the employee and the controlling authority"],
          ["Pay within 30 days", "From the date it becomes payable"],
          ["Interest on delay", "Simple interest at the notified rate, unless the delay is the employee's fault"],
        ],
      ),
      caution("Late payment also exposes the employer to penalties."),
    ),
    screen(
      "Nominations",
      bullets(
        "Each employee nominates one or more persons to receive gratuity on death.",
        "A married employee's nomination should be in favour of family members, as the rules require.",
        "Rakesh's wife is his nominee — Orchid pays her ₹43,269.",
        "If there's no nomination, gratuity goes to the legal heirs.",
      ),
      tip("Update nominations", "Ask employees to update nominations after marriage or other family changes."),
    ),
    screen(
      "Disputes and the controlling authority",
      steps(
        ["Dispute", "Over eligibility or amount."],
        ["Employer deposits the admitted amount", "With the controlling authority, if disputed."],
        ["Controlling authority decides", "After hearing both sides."],
        ["Appeal", "To the appellate authority within the time allowed."],
        ["Recovery", "Unpaid gratuity can be recovered as arrears of land revenue."],
      ),
    ),
    mistakes(
      ["Paying statutory gratuity above the ceiling as if required", "It's contractual above the cap."],
      ["Paying after 30 days", "Interest and penalties."],
      ["Missing nominations", "Delays payment to families."],
      ["Withholding the undisputed amount", "Pay or deposit it."],
    ),
    check(
      4,
      q("What's the last notified statutory gratuity limit for non-government employees?", ["₹20 lakh", "₹10 lakh", "₹25 lakh", "No limit"], 0, "From 2018."),
      q("Within how many days of becoming payable must gratuity be paid?", ["30 days", "7 days", "90 days", "1 year"], 0, "Interest on delay."),
      q("Can an employer pay more than the statutory ceiling?", ["Yes, under a contract or policy", "No, never", "Only to directors", "Only after approval"], 0, "The cap is on the statutory amount."),
      q("Who gets gratuity if there's no nomination?", ["Legal heirs", "The employer", "The government", "Nobody"], 0, "Nominations avoid delay."),
      q("Who decides gratuity disputes first?", ["The controlling authority", "The income tax officer", "The bank", "The auditor"], 0, "Then appeal."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Ceiling",
          ["An employee's calculated gratuity is ₹23,40,000. What's the statutory amount, and what could a generous policy pay?"],
          ["Statutory ₹20,00,000; a policy could pay the full ₹23,40,000."],
        ],
        [
          "Exercise 2 — Deadline",
          ["Joseph's gratuity becomes payable on his last day, 31 January 2027. By when must Orchid pay?"],
          ["Within 30 days — by 2 March 2027 — or pay interest on the delay."],
        ],
      ),
    ),
    summary(
      ["The notified maximum", "₹20 lakh limit", "Paying above the ceiling", "30-day payment and interest", "Nominations", "Disputes"],
      "Pay statutory gratuity within 30 days, up to the ceiling — and anything above it under a clear policy.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Tax Treatment",
      ["Gratuity is often partly tax-free. This module works out the taxable part for Anand and others."],
      ["Know when gratuity is tax-exempt and how much", "Compare government and private-sector employees", "Tax gratuity above the exempt limit", "Show gratuity on the salary certificate"],
    ),
    screen(
      "Exemption for non-government employees covered by the law",
      p("The exempt amount is the least of:"),
      table(
        ["Anand", "Amount"],
        [
          ["1. Gratuity actually received", "₹25,96,154"],
          ["2. Tax-free limit", "₹20,00,000"],
          ["3. 15/26 × last salary (basic + DA for tax) × years: ₹1,20,000 × 15 ÷ 26 × 30", "₹20,76,923"],
        ],
        { footer: ["Exempt — the least", "₹20,00,000"], numeric: [1] },
      ),
      note("For tax, “salary” means basic + DA (and commission on turnover), not the Code's wider wages — so the tax formula can be lower than the gratuity paid."),
    ),
    screen(
      "Government vs. private-sector employees",
      compare(
        ["Government employees", "Central, state and local authority employees.", ["Gratuity fully exempt"]],
        ["Non-government employees", "Private-sector staff.", ["Exempt up to the least of three amounts", "₹20 lakh lifetime limit"]],
      ),
      tip("Lifetime limit", "The ₹20 lakh exemption is reduced by any gratuity already exempted from earlier employers."),
    ),
    screen(
      "Gratuity above the exempt limit",
      example([["Anand's gratuity", "₹25,96,154"], ["Exempt", "−₹20,00,000"]], ["Taxable as salary", "₹5,96,154"]),
      bullets(
        "The taxable part is added to salary income in the year received.",
        "The employer includes it in TDS calculations for that month.",
        "The exemption is available under both the new and old tax regimes.",
      ),
    ),
    screen(
      "Showing gratuity on the salary certificate",
      bullets(
        "Form 130 shows gross gratuity, the exempt portion and the taxable portion.",
        "Joseph's ₹1,38,462: the tax formula on basic + DA gives ₹20,000 × 15 ÷ 26 × 8 = ₹92,308, so ₹92,308 is exempt and ₹46,154 is taxable.",
        "Rakesh's gratuity is paid to his nominee after death — it isn't income of the deceased employee for salary TDS.",
      ),
    ),
    mistakes(
      ["Using Code wages in the tax formula", "Tax uses basic + DA."],
      ["Ignoring earlier exemptions", "₹20 lakh is a lifetime limit."],
      ["Not deducting TDS on the taxable part", "Include it in that month's TDS."],
      ["Thinking the new regime removes the exemption", "It applies in both regimes."],
    ),
    check(
      5,
      q("For government employees, gratuity is:", ["Fully exempt", "Fully taxable", "Exempt up to ₹10 lakh", "Exempt only in the old regime"], 0, "Separate rule."),
      q("What's the lifetime exemption limit for non-government employees?", ["₹20 lakh", "₹10 lakh", "₹25 lakh", "₹5 lakh"], 0, "Reduced by earlier exemptions."),
      q("What “salary” is used in the tax formula?", ["Basic + DA (and turnover commission)", "Gross salary", "Code wages", "CTC"], 0, "Not the Code's wages."),
      q("Is the gratuity exemption available in the new tax regime?", ["Yes", "No", "Only for seniors", "Only for government staff"], 0, "In both regimes."),
      q("How is taxable gratuity taxed?", ["As salary in the year received", "As capital gains", "As business income", "It isn't"], 0, "Include in TDS."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Exempt amount",
          ["Gratuity received ₹8,00,000; basic + DA ₹40,000; 14 years' service. What's exempt?"],
          ["Least of ₹8,00,000; ₹20,00,000; ₹40,000 × 15 ÷ 26 × 14 = ₹3,23,077. Exempt ₹3,23,077; taxable ₹4,76,923."],
        ],
        [
          "Exercise 2 — Lifetime limit",
          ["An employee had ₹6,00,000 gratuity exempted at a previous job. How much can be exempted now?"],
          ["Up to ₹14,00,000 (₹20 lakh − ₹6 lakh), subject to the other two limits."],
        ],
      ),
    ),
    summary(
      ["The least-of-three exemption", "Government vs. private employees", "Taxable gratuity", "Form 130"],
      "Up to ₹20 lakh of gratuity can be tax-free for private-sector staff — but the tax formula uses basic + DA, not Code wages.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Funding, Provisioning and Accounting",
      ["Gratuity is a long-term liability. This module covers how Orchid funds it, values it and records it."],
      ["Fund gratuity through an approved trust or group insurance", "Understand actuarial valuation", "Know AS 15 and Ind AS 19 basics", "Record the provision and payments", "Use a gratuity compliance checklist"],
    ),
    screen(
      "Funding",
      compare(
        ["Unfunded", "Pay from cash when employees leave.", ["Simple", "Large payouts can strain cash"]],
        ["Funded", "Contribute to an approved gratuity trust, often through a group gratuity insurance policy.", ["Money set aside", "Contributions to an approved fund are tax-deductible within limits"]],
      ),
      p("Orchid funds gratuity through a group gratuity policy with an insurer, which pays leavers' claims from the fund."),
    ),
    screen(
      "Actuarial valuation",
      bullets(
        "An actuary estimates the present value of gratuity employees have earned so far.",
        "Assumptions: salary growth, attrition, mortality, discount rate.",
        "Done at least annually for the financial statements.",
        "The Code's wider wages increased many employers' liabilities from November 2025.",
      ),
    ),
    screen(
      "AS 15 and Ind AS 19",
      table(
        ["Element", "Treatment (defined benefit plan)"],
        [
          ["Current service cost", "Expense in profit or loss"],
          ["Net interest on the liability", "Expense in profit or loss"],
          ["Remeasurements (actuarial gains and losses)", "Ind AS 19: other comprehensive income; AS 15: profit or loss"],
          ["Plan assets (the fund)", "Deducted from the obligation to show the net liability"],
        ],
      ),
    ),
    screen(
      "Recording the provision and payments",
      p("Year-end valuation for FY 2026-27: current service cost ₹22,00,000 and net interest ₹4,50,000."),
      journal([["Employee benefits expense — gratuity", "₹26,50,000", ""], ["Provision for gratuity", "", "₹26,50,000"]], "₹26,50,000"),
      p("When Orchid pays Joseph's gratuity directly (unfunded part):"),
      journal([["Provision for gratuity", "₹1,38,462", ""], ["Bank", "", "₹1,38,462"]], "₹1,38,462"),
      note("Under Ind AS 19, the change in the provision from new valuation assumptions goes to other comprehensive income."),
    ),
    screen(
      "Gratuity compliance checklist",
      bullets(
        "Service records and nominations for every employee.",
        "Code wages used for gratuity calculations.",
        "Eligibility checked: five years, one year for fixed-term, none for death or disablement.",
        "Ceiling applied to statutory gratuity; policy for any excess.",
        "Payment within 30 days; interest if late.",
        "Tax exemption calculated and TDS on the taxable part.",
        "Annual actuarial valuation and provision; fund contributions.",
      ),
    ),
    mistakes(
      ["Booking gratuity only when paid", "Provide annually."],
      ["Old wage definition in valuation", "Update for Code wages."],
      ["Remeasurements in profit under Ind AS 19", "They go to OCI."],
      ["Unfunded large liabilities", "Consider a funded plan."],
    ),
    check(
      6,
      q("Who estimates the gratuity liability for the accounts?", ["An actuary", "The auditor", "The tax officer", "The HR assistant"], 0, "Using assumptions."),
      q("Under Ind AS 19, where do remeasurement gains and losses go?", ["Other comprehensive income", "Revenue", "Share capital", "Cost of sales"], 0, "Not profit or loss."),
      q("Which is an actuarial assumption?", ["Salary growth", "GST rate", "Office rent", "Bank charges"], 0, "Plus attrition, mortality and discount rate."),
      q("What is a group gratuity policy?", ["An insurer-managed fund that pays gratuity claims", "A tax return", "An employee loan", "A bonus scheme"], 0, "Funded approach."),
      q("Why did many gratuity liabilities rise from November 2025?", ["The Code's wider definition of wages", "Lower salaries", "New GST rates", "Fewer employees"], 0, "The 50% rule."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Provision",
          ["Opening provision ₹1,80,00,000; service cost ₹22,00,000; interest ₹4,50,000; payments ₹23,13,000. Closing provision (ignoring remeasurements and plan assets)?"],
          ["₹1,80,00,000 + ₹22,00,000 + ₹4,50,000 − ₹23,13,000 = ₹1,83,37,000."],
        ],
        [
          "Exercise 2 — Accounting",
          ["The actuary reports a ₹3,00,000 loss from a lower discount rate. Where does Orchid (an Ind AS company) record it?"],
          ["In other comprehensive income as a remeasurement loss, increasing the provision."],
        ],
      ),
    ),
    summary(
      ["Funded and unfunded gratuity", "Actuarial valuation", "AS 15 and Ind AS 19", "Journal entries", "The gratuity checklist"],
      "Gratuity is a long-term promise — value it every year, provide for it, and fund it so leavers are paid on time.",
    ),
  ],
}

export default lessons
