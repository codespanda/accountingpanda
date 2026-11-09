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
  terms,
  tip,
} from "@/lib/lessonKit"

// Income Tax for Salaried Employees — lesson screens by module index
// (0 = Module 1). The course follows Arjun Mehta, a software tester in
// Bengaluru, through tax year 2026-27 (1 April 2026 – 31 March 2027) under
// the Income-tax Act, 2025. Figures are for learning, not personal advice.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Income Tax and the Income-tax Act, 2025",
      ["Every salaried person in India deals with income tax. This module explains the basics — and the new law that took effect in April 2026 — through Arjun Mehta."],
      ["Explain how income tax works in India", "Describe the Income-tax Act, 2025", "Use the “tax year” concept", "Apply the transition for income up to 31 March 2026", "Determine residential status and the heads of income"],
    ),
    screen(
      "Meet Arjun",
      p("Arjun Mehta, 29, is a software tester with a Bengaluru IT company. He rents a flat for ₹25,000 a month and has a small fixed deposit."),
      table(
        ["Arjun's salary, tax year 2026-27", "Amount"],
        [
          ["Basic salary", "₹5,00,000"],
          ["House rent allowance (HRA)", "₹2,40,000"],
          ["Special allowance", "₹6,20,000"],
          ["Performance bonus", "₹80,000"],
        ],
        { footer: ["Gross salary", "₹14,40,000"], numeric: [1] },
      ),
      p("He wants to know which tax regime to choose, why his employer deducts tax each month, and how to file his return."),
    ),
    screen(
      "How income tax works",
      steps(
        ["Earn income", "Salary, interest, rent, capital gains and so on."],
        ["Compute total income", "Under each head, less allowed deductions."],
        ["Apply the slab rates", "For the chosen regime, then rebate, surcharge and cess."],
        ["Credit taxes already paid", "TDS by the employer and banks, advance tax."],
        ["File the return", "Pay any balance or claim a refund."],
      ),
    ),
    screen(
      "The Income-tax Act, 2025",
      bullets(
        "Replaced the Income-tax Act, 1961 from 1 April 2026.",
        "Written in simpler language, with tables and fewer sections.",
        "Tax rates and most exemptions and deductions were carried over — the big changes are structure, section numbers and form numbers.",
        "New form names: e.g. Form 130 (salary certificate, was Form 16), Form 168 (annual tax statement, was Form 26AS).",
      ),
    ),
    screen(
      "The tax year",
      compare(
        ["Old Act", "Income of the “previous year” was taxed in the “assessment year”.", ["Income 2025-26 → AY 2026-27"]],
        ["New Act", "A single “tax year” — the financial year in which income is earned.", ["Income 1 April 2026 – 31 March 2027 → tax year 2026-27"]],
      ),
      note("Income earned up to 31 March 2026 is still taxed under the 1961 Act — so Arjun's return for 2025-26, filed in 2026, uses the old Act's rules and terminology."),
    ),
    screen(
      "Residential status and heads of income",
      table(
        ["Resident if…", "Notes"],
        [
          ["In India for 182 days or more in the tax year", "Basic condition"],
          ["Or 60 days in the year and 365 days in the previous 4 years", "Modified for some Indian citizens and visitors"],
        ],
      ),
      table(
        ["Head of income", "Arjun"],
        [
          ["Salaries", "₹14,40,000"],
          ["Income from house property", "—"],
          ["Profits and gains of business or profession", "—"],
          ["Capital gains", "—"],
          ["Income from other sources", "FD interest ₹12,000"],
        ],
      ),
      p("Residents are taxed on worldwide income; non-residents mainly on income earned or received in India."),
    ),
    mistakes(
      ["Using old section numbers for 2026-27", "Check the new Act's references."],
      ["Mixing up years", "2026-27 is now a tax year, not an assessment year."],
      ["Forgetting non-salary income", "Interest and rent must be reported."],
      ["Assuming non-residents pay nothing", "Indian income is taxed."],
    ),
    check(
      1,
      q("From when does the Income-tax Act, 2025 apply?", ["1 April 2026", "1 April 2025", "1 July 2026", "1 April 2027"], 0, "Tax year 2026-27 is the first."),
      q("Which concept replaces “previous year” and “assessment year”?", ["Tax year", "Calendar year", "Fiscal quarter", "Return year"], 0, "One single year."),
      q("Under which Act is income earned in January 2026 taxed?", ["The Income-tax Act, 1961", "The Income-tax Act, 2025", "The GST Act", "Neither"], 0, "Before 1 April 2026."),
      q("A person in India for 190 days in the tax year is generally:", ["Resident", "Non-resident", "Exempt", "Not ordinarily taxable"], 0, "182 days or more."),
      q("Fixed deposit interest falls under which head?", ["Income from other sources", "Salaries", "Capital gains", "House property"], 0, "Not business income for an employee."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which year?",
          ["Arjun receives a bonus on 15 March 2027 and FD interest on 5 April 2027. Which tax years do they fall in?"],
          ["Bonus: tax year 2026-27. Interest: tax year 2027-28."],
        ],
        [
          "Exercise 2 — Heads",
          ["Classify: (a) rent from a flat Arjun owns, (b) profit on selling shares, (c) leave encashment from his employer."],
          ["(a) Income from house property. (b) Capital gains. (c) Salaries."],
        ],
      ),
    ),
    summary(
      ["How income tax is computed", "The Income-tax Act, 2025", "The tax year", "Transition for income up to March 2026", "Residential status and five heads of income"],
      "From 1 April 2026, salary is taxed under the Income-tax Act, 2025 by tax year — with most rates and rules carried over.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Salary Income",
      ["“Salary” covers far more than the monthly pay credit. This module works through what's taxable in Arjun's package."],
      ["Identify what counts as salary", "Treat basic pay, dearness allowance and bonus", "Understand allowances — HRA, leave travel and others", "Value perquisites", "Handle arrears, advance salary and profits in lieu of salary"],
    ),
    screen(
      "What counts as salary",
      bullets(
        "Requires an employer–employee relationship.",
        "Includes wages, pension, gratuity, leave encashment, allowances, perquisites, bonus and commission.",
        "Taxed on the earlier of due or received.",
        "Employer's contribution to provident fund above the limit, and certain retirement benefits, can also be taxable.",
      ),
    ),
    screen(
      "Basic pay, dearness allowance and bonus",
      table(
        ["Component", "Treatment"],
        [
          ["Basic salary", "Fully taxable; it's the base for HRA, PF and gratuity"],
          ["Dearness allowance", "Fully taxable; part of salary for some exemptions if it forms part of retirement benefits"],
          ["Bonus and commission", "Fully taxable in the year received (or due)"],
        ],
      ),
      p("Arjun's ₹80,000 bonus for 2026-27 is fully taxable."),
    ),
    screen(
      "Allowances",
      table(
        ["Allowance", "Old regime", "New regime"],
        [
          ["House rent allowance (HRA)", "Partly exempt (Module 4)", "Fully taxable"],
          ["Leave travel allowance (LTA)", "Exempt for actual domestic travel, limited journeys", "Fully taxable"],
          ["Special allowance", "Taxable", "Taxable"],
          ["Conveyance for official duties", "Exempt to the extent spent", "Exempt to the extent spent"],
        ],
      ),
      caution("Most allowance exemptions are available only in the old regime."),
    ),
    screen(
      "Perquisites",
      table(
        ["Perquisite", "Taxable value (broadly)"],
        [
          ["Rent-free or concessional accommodation", "A percentage of salary or rent paid by employer, less recovery"],
          ["Company car used privately", "Fixed monthly amounts by engine size"],
          ["Interest-free or concessional loan", "Interest at the notified rate, less actually charged (small loans excluded)"],
          ["Employee stock options (ESOPs)", "Fair value on exercise less price paid"],
          ["Employer contribution to NPS", "Deductible within limits"],
        ],
      ),
      note("Arjun's employer gives him a laptop and phone used for work — these aren't taxable perquisites."),
    ),
    screen(
      "Arrears, advance salary and profits in lieu of salary",
      terms(
        ["Arrears", "Taxed in the year received; relief may be available if receiving them pushes the employee into a higher slab."],
        ["Advance salary", "Taxed in the year received."],
        ["Profits in lieu of salary", "Includes compensation on termination and certain payments from employers — generally taxable as salary."],
      ),
      p("If Arjun receives ₹60,000 of arrears in 2026-27 for an increase backdated to 2025-26, he can claim relief by spreading the calculation across both years."),
    ),
    mistakes(
      ["Thinking only basic pay is taxable", "Allowances and perks count too."],
      ["Claiming HRA in the new regime", "It's fully taxable there."],
      ["Ignoring ESOP perquisites", "They're taxed on exercise."],
      ["Missing arrears relief", "Claim it where it helps."],
    ),
    check(
      2,
      q("Is a performance bonus taxable?", ["Yes, fully", "No", "Only half", "Only above ₹1 lakh"], 0, "Part of salary."),
      q("In the new regime, HRA is:", ["Fully taxable", "Fully exempt", "Exempt up to ₹1 lakh", "Exempt in metros"], 0, "Exemption is old regime only."),
      q("When are ESOPs taxed as a perquisite?", ["On exercise", "On grant", "Never", "On retirement"], 0, "Fair value less price paid."),
      q("When is advance salary taxed?", ["In the year received", "In the year it relates to", "Never", "At retirement"], 0, "Receipt basis."),
      q("Which allowance is exempt to the extent spent in both regimes?", ["Conveyance for official duties", "Special allowance", "HRA", "Bonus"], 0, "Actual official expenses."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Gross salary",
          ["Basic ₹6,00,000, HRA ₹2,40,000, special allowance ₹4,00,000, bonus ₹50,000, employer laptop for work. Gross salary?"],
          ["₹12,90,000 — the work laptop isn't a taxable perquisite."],
        ],
        [
          "Exercise 2 — Regime effect",
          ["Which of Arjun's components could be partly exempt in the old regime but not the new?"],
          ["HRA (and LTA if he had it). Basic, special allowance and bonus are taxable in both."],
        ],
      ),
    ),
    summary(
      ["What counts as salary", "Basic, DA and bonus", "Allowances by regime", "Perquisites", "Arrears, advances and profits in lieu of salary"],
      "Salary includes allowances and perks — and the regime decides which allowances can be exempt.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Choosing a Tax Regime",
      ["The new regime has lower rates but few deductions. This module compares both regimes for Arjun and two colleagues."],
      ["Apply the new regime — the default", "Use the new regime slabs", "Know when the old regime can help", "Tell the employer which regime you choose", "Compare regimes for different salaries"],
    ),
    screen(
      "The new regime — the default",
      table(
        ["Taxable income (tax year 2026-27)", "Rate"],
        [
          ["Up to ₹4,00,000", "Nil"],
          ["₹4,00,001 – ₹8,00,000", "5%"],
          ["₹8,00,001 – ₹12,00,000", "10%"],
          ["₹12,00,001 – ₹16,00,000", "15%"],
          ["₹16,00,001 – ₹20,00,000", "20%"],
          ["₹20,00,001 – ₹24,00,000", "25%"],
          ["Above ₹24,00,000", "30%"],
        ],
      ),
      p("If you do nothing, the new regime applies."),
    ),
    screen(
      "The old regime",
      table(
        ["Taxable income (below 60)", "Rate"],
        [
          ["Up to ₹2,50,000", "Nil"],
          ["₹2,50,001 – ₹5,00,000", "5%"],
          ["₹5,00,001 – ₹10,00,000", "20%"],
          ["Above ₹10,00,000", "30%"],
        ],
      ),
      bullets(
        "Allows HRA, LTA, investment deductions (up to ₹1,50,000), health insurance, home-loan interest and more.",
        "Can help people with large deductions — for example big home-loan interest, full HRA and full investments.",
        "Higher basic exemption limits apply to senior citizens.",
      ),
    ),
    screen(
      "Telling your employer",
      steps(
        ["At the start of the year", "Declare your regime to the employer, who deducts TDS accordingly."],
        ["If you say nothing", "The employer uses the new regime."],
        ["When filing the return", "Salaried individuals without business income can choose either regime each year in the return — regardless of what they told the employer."],
      ),
      caution("The return must be filed by the due date to opt for the old regime. A belated return generally stays in the new regime."),
    ),
    screen(
      "Worked comparison — Arjun",
      table(
        ["Arjun, tax year 2026-27", "New regime", "Old regime"],
        [
          ["Gross salary", "₹14,40,000", "₹14,40,000"],
          ["Standard deduction", "(₹75,000)", "(₹50,000)"],
          ["HRA exemption", "—", "(₹2,40,000)"],
          ["Investments and health insurance", "—", "(₹1,75,000)"],
          ["Taxable income", "₹13,65,000", "₹9,75,000"],
          ["Tax", "₹84,750", "₹1,07,500"],
          ["Cess 4%", "₹3,390", "₹4,300"],
        ],
        { footer: ["Total tax", "₹88,140", "₹1,11,800"], numeric: [1, 2] },
      ),
      p("Even with ₹4,65,000 of old-regime deductions, the new regime saves Arjun ₹23,660."),
    ),
    screen(
      "Comparisons for other salaries",
      table(
        ["Employee", "New regime tax", "Old regime tax"],
        [
          ["Neha — ₹11,00,000 salary, ₹1,50,000 investments", "Nil (rebate)", "₹96,200"],
          ["Vikram — ₹20,00,000 salary, ₹4,50,000 deductions (home loan, investments, NPS, health)", "₹1,92,400", "₹2,73,000"],
        ],
        { numeric: [1, 2] },
      ),
      tip("Run the numbers", "The old regime wins only with very large deductions. Calculate both every year — don't assume."),
    ),
    mistakes(
      ["Assuming the old regime is always better with investments", "Calculate both."],
      ["Investing only to save tax", "In the new regime, it may not save any."],
      ["Filing late and losing the old regime", "File by the due date."],
      ["Forgetting to tell the employer", "TDS defaults to the new regime."],
    ),
    check(
      3,
      q("Which regime applies if you don't choose?", ["The new regime", "The old regime", "Whichever is lower", "Neither"], 0, "It's the default."),
      q("What's the new regime rate on income from ₹8 lakh to ₹12 lakh?", ["10%", "5%", "15%", "20%"], 0, "Tax year 2026-27 slabs."),
      q("What's the old regime rate on income above ₹10 lakh?", ["30%", "20%", "25%", "15%"], 0, "For individuals under 60."),
      q("Can a salaried person without business income switch regimes each year?", ["Yes, when filing the return by the due date", "No, never", "Only once in life", "Only with employer approval"], 0, "Business income has stricter rules."),
      q("Who usually benefits from the old regime?", ["People with very large deductions", "Everyone", "People with no investments", "Only students"], 0, "Calculate both."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — New regime",
          ["Calculate new regime tax (with cess) on a salary of ₹30,00,000."],
          ["Taxable ₹29,25,000. Tax: ₹20,000 + ₹40,000 + ₹60,000 + ₹80,000 + ₹1,00,000 + ₹1,57,500 = ₹4,57,500; cess ₹18,300; total ₹4,75,800."],
        ],
        [
          "Exercise 2 — Neha's old regime",
          ["Show how Neha's old regime tax of ₹96,200 arises (salary ₹11,00,000, standard deduction ₹50,000, investments ₹1,50,000)."],
          ["Taxable ₹9,00,000: ₹12,500 + 20% × ₹4,00,000 = ₹92,500; cess ₹3,700; total ₹96,200."],
        ],
      ),
    ),
    summary(
      ["New regime slabs", "Old regime slabs and deductions", "Declaring to the employer and choosing in the return", "Arjun's comparison", "Comparisons at other salaries"],
      "For most salaried people the new regime is cheaper — but calculate both each year before deciding.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Deductions, Exemptions and Rebates",
      ["This module covers the deductions and reliefs that turn gross salary into tax payable — and which regime allows each."],
      ["Apply the standard deduction", "Calculate the HRA exemption", "Use old regime investment, insurance and home-loan deductions", "Know deductions still available in the new regime", "Apply the rebate and marginal relief", "Apply surcharge and cess"],
    ),
    screen(
      "Standard deduction",
      table(
        ["Regime", "Standard deduction"],
        [
          ["New regime", "₹75,000"],
          ["Old regime", "₹50,000"],
        ],
      ),
      p("Every salaried employee gets it automatically — no proof needed."),
    ),
    screen(
      "HRA exemption — old regime only",
      p("The exemption is the least of three amounts:"),
      table(
        ["Arjun (Bengaluru)", "Amount"],
        [
          ["1. Actual HRA received", "₹2,40,000"],
          ["2. Rent paid less 10% of basic: ₹3,00,000 − ₹50,000", "₹2,50,000"],
          ["3. 50% of basic (40% outside the listed cities): 50% × ₹5,00,000", "₹2,50,000"],
        ],
        { footer: ["HRA exemption — the least", "₹2,40,000"], numeric: [1] },
      ),
      note("From tax year 2026-27, Bengaluru, Hyderabad, Pune and Ahmedabad join Delhi, Mumbai, Kolkata and Chennai at 50%. At the old 40%, Arjun's exemption would have been ₹2,00,000."),
      caution("Keep rent receipts and the landlord's PAN if annual rent exceeds ₹1 lakh. Disclose any relationship with the landlord."),
    ),
    screen(
      "Old regime deductions",
      table(
        ["Deduction", "Limit (broadly)"],
        [
          ["Investments — PF, PPF, ELSS, life insurance, principal of home loan, tuition fees", "₹1,50,000"],
          ["Additional NPS contribution", "₹50,000"],
          ["Health insurance", "₹25,000 (₹50,000 for seniors), plus parents"],
          ["Home-loan interest on a self-occupied house", "₹2,00,000"],
          ["Education loan interest", "Full interest, up to 8 years"],
          ["Donations to approved funds", "50% or 100%, with conditions"],
        ],
      ),
    ),
    screen(
      "Deductions in the new regime",
      bullets(
        "Standard deduction of ₹75,000.",
        "Employer's contribution to NPS — up to 14% of salary.",
        "Family pension deduction (for family pensioners).",
        "Agniveer Corpus Fund contributions.",
      ),
      note("Most other deductions — investments, health insurance, HRA, LTA, home-loan interest on a self-occupied house — aren't available in the new regime."),
    ),
    screen(
      "Rebate and marginal relief",
      table(
        ["Regime", "Rebate"],
        [
          ["New regime", "No tax if taxable income is up to ₹12,00,000 (rebate up to ₹60,000)"],
          ["Old regime", "No tax if taxable income is up to ₹5,00,000 (rebate up to ₹12,500)"],
        ],
      ),
      p("Marginal relief in the new regime: if income is just above ₹12 lakh, tax is limited to the amount by which income exceeds ₹12 lakh."),
      example([["Taxable income", "₹12,10,000"], ["Tax by slabs", "₹61,500"], ["Income above ₹12 lakh", "₹10,000"]], ["Tax payable (before cess)", "₹10,000"]),
      note("The rebate doesn't apply to special-rate income such as certain capital gains."),
    ),
    screen(
      "Surcharge and cess",
      table(
        ["Taxable income", "Surcharge on tax"],
        [
          ["Above ₹50 lakh", "10%"],
          ["Above ₹1 crore", "15%"],
          ["Above ₹2 crore", "25%"],
          ["Above ₹5 crore — old regime only", "37% (new regime capped at 25%)"],
        ],
      ),
      p("Health and education cess of 4% is added to tax plus surcharge for everyone who pays tax."),
    ),
    mistakes(
      ["Claiming HRA without rent proof", "Keep receipts and the landlord's PAN."],
      ["Using 40% for Bengaluru from 2026-27", "It's now 50%."],
      ["Claiming investment deductions in the new regime", "Not allowed."],
      ["Forgetting marginal relief", "It caps tax just above ₹12 lakh."],
    ),
    check(
      4,
      q("What's the old regime standard deduction?", ["₹50,000", "₹75,000", "₹1,00,000", "₹40,000"], 0, "₹75,000 in the new regime."),
      q("The HRA exemption is:", ["The least of three amounts", "The highest of three amounts", "Always 50% of basic", "Actual rent paid"], 0, "HRA, rent less 10% of basic, 50%/40% of basic."),
      q("What's the limit on investment deductions in the old regime?", ["₹1,50,000", "₹2,00,000", "₹50,000", "No limit"], 0, "PF, PPF, ELSS and others."),
      q("Which deduction is available in the new regime?", ["Employer's contribution to NPS", "Health insurance", "HRA", "Home-loan interest on a self-occupied house"], 0, "Up to 14% of salary."),
      q("What's the rate of health and education cess?", ["4%", "2%", "10%", "1%"], 0, "On tax plus surcharge."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — HRA",
          ["Basic ₹4,80,000, HRA ₹1,80,000, rent ₹1,50,000 a year, living in Jaipur. Calculate the old regime HRA exemption."],
          ["Least of: ₹1,80,000; ₹1,50,000 − ₹48,000 = ₹1,02,000; 40% × ₹4,80,000 = ₹1,92,000. Exemption ₹1,02,000."],
        ],
        [
          "Exercise 2 — Marginal relief",
          ["Taxable income ₹12,30,000 in the new regime. What's the tax before cess?"],
          ["Slab tax ₹64,500 (₹20,000 + ₹40,000 + ₹4,500), but marginal relief limits it to ₹30,000 — the excess over ₹12 lakh."],
        ],
      ),
    ),
    summary(
      ["Standard deductions", "HRA — least of three, with 8 cities at 50%", "Old regime deductions", "New regime deductions", "Rebate and marginal relief", "Surcharge and cess"],
      "Deductions and rebates shape the final tax — and most deductions belong to the old regime only.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Salary TDS and Your Documents",
      ["Arjun's employer deducts tax every month. This module explains how, and which documents prove it."],
      ["Understand how employers deduct tax monthly", "Submit investment declarations and proofs", "Read Form 130", "Read Form 168", "Check TDS against your records"],
    ),
    screen(
      "How your employer deducts tax",
      bullets(
        "The employer estimates your annual tax from salary and declarations, and deducts it evenly over the months.",
        "Salary rises, bonuses and proof changes trigger a recalculation.",
        "You can give details of other income and other TDS so the employer can include them.",
      ),
      p("Arjun chose the new regime. His estimated tax is ₹88,140, so about ₹7,345 is deducted each month."),
    ),
    screen(
      "Investment declarations and proofs",
      steps(
        ["April", "Declare regime, rent, investments and loans (the declaration form, formerly Form 12BB)."],
        ["January", "Submit proofs: rent receipts with the landlord's PAN, investment statements, insurance receipts, home-loan certificates."],
        ["February–March", "Employer recalculates on verified proofs and adjusts the last salaries."],
      ),
      tip("Missed proofs aren't lost", "If proofs miss the employer's deadline, old regime deductions can still be claimed in the return."),
    ),
    screen(
      "Form 130 — your salary certificate",
      table(
        ["Part", "Shows"],
        [
          ["Employer and employee details", "TAN, PAN, tax year"],
          ["TDS summary", "Tax deducted and deposited each quarter"],
          ["Salary details", "Gross salary, exemptions, deductions, regime, tax computed"],
        ],
      ),
      p("Arjun's employer issues Form 130 for 2026-27 by 15 June 2027. If he changed jobs, he'd get one from each employer."),
    ),
    screen(
      "Form 168 — your annual tax statement",
      bullets(
        "Formerly Form 26AS — available on the income tax portal.",
        "Shows all TDS against your PAN: salary, bank interest, rent and others.",
        "Also shows advance tax and self-assessment tax paid, refunds and certain high-value transactions.",
        "The Annual Information Statement (AIS) gives a wider view of reported income and transactions.",
      ),
    ),
    screen(
      "Checking TDS matches",
      table(
        ["Check", "Arjun"],
        [
          ["Form 130 TDS = Form 168 salary TDS", "₹88,140 in both ✓"],
          ["Bank interest TDS in Form 168", "₹1,200 on his FD ✓"],
          ["Interest in AIS = bank certificate", "₹12,000 ✓"],
        ],
      ),
      caution("If TDS is missing from Form 168, ask the deductor to correct their statement — you can only claim credit that appears there."),
    ),
    mistakes(
      ["Not submitting proofs", "Last salaries drop."],
      ["Ignoring AIS", "Unreported interest triggers notices."],
      ["Using only Form 130", "Check Form 168 too."],
      ["Forgetting the previous employer's salary", "Report all employers' income."],
    ),
    check(
      5,
      q("How does an employer decide monthly TDS?", ["Estimated annual tax spread across the months", "A fixed 10%", "Only in March", "The employee's choice"], 0, "Updated through the year."),
      q("When are investment proofs usually submitted?", ["January", "April", "July", "Never"], 0, "Then TDS is recalculated."),
      q("What does Form 130 replace?", ["Form 16", "Form 26AS", "Form 12BB", "ITR-1"], 0, "The salary certificate."),
      q("Where can you see all TDS against your PAN?", ["Form 168", "Form 130 only", "Your payslip", "GSTR-2B"], 0, "Formerly Form 26AS."),
      q("What should you do if TDS is missing from Form 168?", ["Ask the deductor to correct their statement", "Ignore it", "Claim it anyway without proof", "File a GST return"], 0, "Credit depends on it."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Two employers",
          ["Arjun earns ₹6,00,000 from employer A (April–September) and ₹8,00,000 from employer B (October–March). Neither knows about the other. What's the risk?"],
          ["Each employer may apply the rebate and lower slabs to its own part, so total TDS falls short. Arjun should tell employer B about the earlier salary, or pay the balance before filing."],
        ],
        [
          "Exercise 2 — Mismatch",
          ["AIS shows ₹18,000 savings interest that Arjun forgot. What should he do?"],
          ["Include it under income from other sources in his return and pay any extra tax."],
        ],
      ),
    ),
    summary(
      ["Monthly salary TDS", "Declarations and proofs", "Form 130", "Form 168 and AIS", "Matching TDS before filing"],
      "Your employer's TDS is an estimate — check Form 130, Form 168 and AIS before you file.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Filing Your Return",
      ["The last step is the return. This module files Arjun's 2026-27 return and covers refunds, notices and a year-end checklist."],
      ["Choose the return form", "Know the due dates and the cost of filing late", "Claim refunds", "Respond to notices", "Use a year-end checklist"],
    ),
    screen(
      "Which return form",
      table(
        ["Form", "Who typically uses it"],
        [
          ["ITR-1 (Sahaj)", "Resident individuals with total income up to ₹50 lakh from salary, one house property and other sources (and small long-term gains on listed shares)"],
          ["ITR-2", "Individuals without business income who don't qualify for ITR-1 — e.g. capital gains beyond the limit, more than one house, foreign income"],
          ["ITR-3", "Individuals with business or professional income"],
        ],
      ),
      p("Arjun has salary and FD interest — ITR-1."),
      note("Return forms are notified each year and may be renamed under the new Act. Check the e-filing portal for the forms for tax year 2026-27."),
    ),
    screen(
      "Due dates and filing late",
      table(
        ["Return", "Due date (typical, for salaried individuals)"],
        [
          ["Original return", "31 July after the tax year — 31 July 2027 for 2026-27"],
          ["Belated return", "31 December after the tax year"],
          ["Revised return", "Within the time allowed — check the current limit"],
        ],
      ),
      table(
        ["Consequence of filing late", "Detail"],
        [
          ["Late fee", "₹5,000 (₹1,000 if total income is up to ₹5 lakh)"],
          ["Interest", "On any unpaid tax"],
          ["Regime", "Old regime generally can't be chosen in a belated return"],
          ["Losses", "Some losses can't be carried forward"],
        ],
      ),
    ),
    screen(
      "Claiming refunds",
      steps(
        ["File the return", "Show TDS greater than tax due."],
        ["E-verify within the time allowed", "Using Aadhaar OTP, net banking or a bank account."],
        ["Pre-validate your bank account", "On the e-filing portal."],
        ["Track", "The department processes the return and credits the refund, with interest in many cases."],
      ),
      p("Arjun's TDS (₹88,140 + ₹1,200) exceeds his tax after including FD interest: tax on ₹13,77,000 is ₹86,550 + cess ₹3,462 = ₹90,012. He actually owes ₹672 more — so he pays self-assessment tax before filing."),
    ),
    screen(
      "Responding to notices",
      table(
        ["Communication", "What to do"],
        [
          ["Intimation after processing", "Compare with your return; respond online if you disagree"],
          ["Defective return notice", "Fix the defect within the time given"],
          ["Mismatch with AIS or Form 168", "Explain or revise the return"],
          ["Scrutiny notice", "Respond with documents; consider professional help"],
        ],
      ),
      tip("Act within the deadline", "Most notices can be answered online in the e-proceedings section — check the portal regularly."),
    ),
    screen(
      "Salaried taxpayer's year-end checklist",
      bullets(
        "Choose a regime after comparing both.",
        "Submit proofs to the employer in January.",
        "Download Form 130 from every employer.",
        "Check Form 168 and AIS for all income and TDS.",
        "Add interest, rent, capital gains and other income.",
        "Pay any balance as self-assessment tax.",
        "File by 31 July and e-verify.",
        "Keep documents for future queries.",
      ),
    ),
    mistakes(
      ["Wrong form", "Capital gains beyond the limit need ITR-2."],
      ["Not e-verifying", "An unverified return is treated as not filed."],
      ["Ignoring small interest", "It still counts."],
      ["Filing after 31 July", "Late fee and regime limits."],
    ),
    check(
      6,
      q("Which form suits a resident with salary and bank interest under ₹50 lakh?", ["ITR-1", "ITR-3", "ITR-4", "Form 130"], 0, "Sahaj."),
      q("What's the late fee for a return filed after the due date with income above ₹5 lakh?", ["₹5,000", "₹1,000", "₹10,000", "Nil"], 0, "₹1,000 if income is up to ₹5 lakh."),
      q("What's needed after filing for a return to be valid?", ["E-verification", "A GST registration", "A Form 140", "A bank visit"], 0, "Within the time allowed."),
      q("Which form suits someone with business income?", ["ITR-3", "ITR-1", "ITR-2", "Form 168"], 0, "Business or profession."),
      q("By when is the belated return due?", ["31 December after the tax year", "31 July", "31 March", "Never"], 0, "With a late fee."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Balance due",
          ["Tax on total income is ₹1,02,000 including cess; TDS is ₹95,000. What should the taxpayer do?"],
          ["Pay ₹7,000 (plus any interest) as self-assessment tax before filing."],
        ],
        [
          "Exercise 2 — Late filing",
          ["Neha (taxable ₹10,25,000, no tax due) files her return on 10 September. What happens?"],
          ["It's a belated return — the ₹5,000 late fee applies as income exceeds ₹5 lakh. She can't choose the old regime (not that it helps her)."],
        ],
      ),
    ),
    summary(
      ["Choosing ITR-1, ITR-2 or ITR-3", "Due dates and late-filing costs", "Refunds and self-assessment tax", "Notices", "The year-end checklist"],
      "File on time with the right form, after checking Form 130, Form 168 and AIS — and e-verify.",
    ),
  ],
}

export default lessons
