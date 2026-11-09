import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
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

// TDS Compliance in India — lesson screens by module index (0 = Module 1).
// The course follows Brightpath Software Solutions Pvt Ltd, Pune (40 staff),
// through tax year 2026-27 — the first year under the Income-tax Act, 2025.
// Rates and thresholds shown are the commonly applicable ones; always confirm
// against the Act and rules.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Introduction to TDS",
      ["Tax deducted at source (TDS) makes the payer collect tax when paying. This module introduces TDS and the new Income-tax Act, 2025 through Brightpath Software Solutions."],
      ["Explain what TDS is and why it exists", "Identify deductors and deductees", "Obtain and quote PAN and TAN", "Describe the Income-tax Act, 2025 in force from 1 April 2026", "Apply the transition rules from the 1961 Act", "Fit TDS into a monthly routine"],
    ),
    screen(
      "Meet Brightpath Software Solutions",
      p("Brightpath Software Solutions Pvt Ltd builds apps for clients from an office in Pune. It has 40 employees and pays contractors, consultants, landlords and overseas software suppliers."),
      table(
        ["Payment", "TDS area"],
        [
          ["Monthly salaries", "Salary TDS"],
          ["Housekeeping contractor", "Contractor payments"],
          ["CA firm and freelance designers", "Professional fees"],
          ["Office rent", "Rent"],
          ["Laptop purchases", "Purchase of goods"],
          ["US software licence", "Payments to non-residents"],
        ],
      ),
      p("Kavya, the finance executive, handles TDS for tax year 2026-27 — the first year under the Income-tax Act, 2025."),
    ),
    screen(
      "What TDS is and why it exists",
      p("Under TDS, the person making certain payments deducts tax and deposits it with the government. The recipient gets credit for it against their own tax."),
      bullets(
        "Collects tax as income is earned, not only at year end.",
        "Widens the tax base — payments are reported with the recipient's PAN.",
        "Creates an audit trail the department can match with returns.",
      ),
      example([["Brightpath pays a CA firm's fee", "₹1,20,000"], ["TDS at 10% deposited with the government", "−₹12,000"]], ["Paid to the CA firm", "₹1,08,000"]),
    ),
    screen(
      "Deductors and deductees",
      terms(
        ["Deductor", "The payer who must deduct TDS — Brightpath."],
        ["Deductee", "The recipient whose tax is deducted — employees, the CA firm, the landlord."],
        ["Credit", "The deductee claims the TDS in their return, using the annual tax statement (Form 168)."],
      ),
      note("Deductor obligations: deduct, deposit, file quarterly statements and issue certificates."),
    ),
    screen(
      "PAN and TAN",
      table(
        ["Number", "Who has it", "Used for"],
        [
          ["PAN — Permanent Account Number", "Every taxpayer, including deductees", "Quoted by deductees so TDS reaches their account"],
          ["TAN — Tax Deduction and Collection Account Number", "Every deductor", "Quoted on challans, statements and certificates"],
        ],
      ),
      caution("If a deductee doesn't give a valid PAN, TDS is generally deducted at a higher rate — usually 20% or twice the normal rate, whichever is higher."),
    ),
    screen(
      "The Income-tax Act, 2025 and the transition",
      table(
        ["Topic", "Rule"],
        [
          ["Commencement", "The Income-tax Act, 2025 applies from 1 April 2026 (tax year 2026-27)"],
          ["Tax year", "Replaces “previous year” and “assessment year”"],
          ["TDS sections", "Salary under section 392; other payments under section 393"],
          ["Rates and thresholds", "Largely carried over from the 1961 Act"],
          ["Forms", "New numbers — e.g. Form 138 (was 24Q), Form 140 (was 26Q), Form 130 (was 16)"],
          ["Earlier periods", "Payments and statements up to 31 March 2026 stay under the 1961 Act and old forms"],
        ],
      ),
      p("So Brightpath's March 2026 TDS and its Q4 2025-26 statements (due 31 May 2026) used the old Form 24Q and 26Q."),
    ),
    screen(
      "TDS in the monthly routine",
      table(
        ["When", "Task"],
        [
          ["When booking or paying", "Check if TDS applies, the rate and the PAN"],
          ["Month end", "Reconcile TDS payable in the books"],
          ["By the 7th", "Deposit last month's TDS"],
          ["Quarter end + about a month", "File quarterly statements"],
          ["After filing", "Issue certificates"],
        ],
      ),
    ),
    mistakes(
      ["Paying the gross amount without checking TDS", "Check every relevant payment."],
      ["Not collecting PAN", "Higher deduction applies."],
      ["Using new forms for old periods", "Pre-April 2026 periods use the old forms."],
      ["Quoting the wrong TAN", "Credit goes to the wrong place."],
    ),
    check(
      1,
      q("Who deducts TDS?", ["The payer (deductor)", "The recipient", "The bank", "The auditor"], 0, "And deposits it."),
      q("Which number must a deductor quote on challans and statements?", ["TAN", "GSTIN", "Aadhaar", "CIN"], 0, "Tax Deduction Account Number."),
      q("From when does the Income-tax Act, 2025 apply?", ["1 April 2026", "1 April 2025", "1 January 2026", "1 April 2027"], 0, "Tax year 2026-27."),
      q("Which section covers salary TDS under the new Act?", ["Section 392", "Section 393", "Section 192", "Section 58"], 0, "Other payments are under 393."),
      q("Which law governs TDS on a payment made in March 2026?", ["The Income-tax Act, 1961", "The Income-tax Act, 2025", "The GST Act", "Neither"], 0, "Periods before 1 April 2026."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Net payment",
          ["Brightpath pays a consultant ₹80,000 with TDS at 10%. How much is paid to the consultant and deposited with the government?"],
          ["₹72,000 to the consultant; ₹8,000 deposited."],
        ],
        [
          "Exercise 2 — Which forms?",
          ["Which salary statement does Brightpath file for (a) Jan–Mar 2026, (b) Apr–Jun 2026?"],
          ["(a) Form 24Q under the 1961 Act. (b) Form 138 under the 2025 Act."],
        ],
      ),
    ),
    summary(
      ["What TDS is", "Deductors and deductees", "PAN and TAN", "The Income-tax Act, 2025 and transition rules", "The monthly TDS routine"],
      "TDS turns every payer into a tax collector — deduct, deposit, report and certify, under the new Act from 1 April 2026.",
    ),
  ],
  1: [
    overview(
      "Module 2 — TDS on Salaries",
      ["Salary TDS is spread across the year based on each employee's estimated tax. This module calculates it for two Brightpath employees."],
      ["Apply salary TDS under section 392", "Estimate an employee's taxable salary", "Handle old vs. new regime choices", "Use employee declarations and proofs", "Calculate monthly deductions", "Issue Form 130"],
    ),
    screen(
      "Salary TDS under section 392",
      bullets(
        "The employer deducts tax at the average rate on estimated annual salary — not a fixed percentage.",
        "TDS is spread evenly over the remaining months, and revised when salary or declarations change.",
        "Applies only when the employee's estimated income is taxable.",
      ),
      tip("Revisit regularly", "Kavya recalculates every employee's TDS after pay rises, bonuses and the January proof submission."),
    ),
    screen(
      "Estimating taxable salary",
      table(
        ["Ananya, senior developer — tax year 2026-27", "New regime"],
        [
          ["Gross salary", "₹18,00,000"],
          ["Less: standard deduction", "(₹75,000)"],
        ],
        { footer: ["Taxable salary", "₹17,25,000"], numeric: [1] },
      ),
      note("Other income the employee declares (e.g. interest) can be included, and TDS by other deductors taken into account, if the employee provides the details."),
    ),
    screen(
      "Old vs. new tax regime",
      table(
        ["New regime slabs (tax year 2026-27)", "Rate"],
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
      p("The new regime is the default. Employees may choose the old regime (slabs of 5%, 20% and 30% with deductions such as HRA and investments) by telling the employer — for salary TDS, the choice can be made each year."),
      note("Rebate: in the new regime, no tax if taxable income is up to ₹12 lakh. Health and education cess of 4% applies on top of tax."),
    ),
    screen(
      "Declarations and proofs",
      steps(
        ["April", "Employees declare their regime and planned investments, rent and loans."],
        ["Through the year", "TDS uses the declarations."],
        ["January", "Employees submit proofs: rent receipts, investment statements, home loan certificates."],
        ["February–March", "TDS is recalculated on verified amounts; any shortfall is deducted from the remaining salaries."],
      ),
      caution("If proofs aren't submitted, the employer recalculates without those deductions — the employee's last salaries can drop sharply."),
    ),
    screen(
      "Calculating monthly deductions",
      table(
        ["Ananya — new regime", "Amount"],
        [
          ["₹4,00,001 – ₹8,00,000 at 5%", "₹20,000"],
          ["₹8,00,001 – ₹12,00,000 at 10%", "₹40,000"],
          ["₹12,00,001 – ₹16,00,000 at 15%", "₹60,000"],
          ["₹16,00,001 – ₹17,25,000 at 20%", "₹25,000"],
          ["Tax", "₹1,45,000"],
          ["Cess 4%", "₹5,800"],
        ],
        { footer: ["Annual tax", "₹1,50,800"], numeric: [1] },
      ),
      p("Monthly TDS: ₹1,50,800 ÷ 12 = ₹12,567."),
      p("Rohan earns ₹12,50,000: taxable salary ₹11,75,000, tax before rebate ₹57,500 — fully covered by the rebate. Brightpath deducts no TDS."),
    ),
    screen(
      "Form 130 — the annual salary certificate",
      bullets(
        "Form 130 replaces Form 16 from tax year 2026-27.",
        "Shows salary, exemptions, deductions, tax computed and TDS deposited.",
        "Issued once a year — generally by 15 June after the tax year.",
        "Brightpath issues Form 130 for 2026-27 by 15 June 2027.",
      ),
    ),
    mistakes(
      ["Deducting a flat percentage of salary", "Use the average rate on estimated income."],
      ["Ignoring the rebate", "Employees under ₹12 lakh taxable income may owe nothing."],
      ["Not recalculating after proofs", "Update TDS for actual deductions."],
      ["Forgetting cess", "Add 4%."],
    ),
    check(
      2,
      q("How is monthly salary TDS calculated?", ["Estimated annual tax spread over the remaining months", "A flat 10% of salary", "Only in March", "As the employee chooses"], 0, "At the average rate."),
      q("What's the new regime standard deduction for salaried employees?", ["₹75,000", "₹50,000", "₹1,50,000", "Nil"], 0, "₹50,000 in the old regime."),
      q("Up to what taxable income is there no tax in the new regime because of the rebate?", ["₹12 lakh", "₹5 lakh", "₹7 lakh", "₹4 lakh"], 0, "Marginal relief applies just above."),
      q("When do employees usually submit investment proofs?", ["January", "April", "June", "Never"], 0, "TDS is then recalculated."),
      q("Which form replaces Form 16?", ["Form 130", "Form 138", "Form 168", "Form 140"], 0, "The annual salary certificate."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — New regime TDS",
          ["Priya earns ₹15,75,000 in tax year 2026-27 under the new regime. Calculate annual tax and monthly TDS."],
          ["Taxable ₹15,00,000. Tax: ₹20,000 + ₹40,000 + ₹45,000 = ₹1,05,000; cess ₹4,200; total ₹1,09,200; monthly ₹9,100."],
        ],
        [
          "Exercise 2 — Old regime check",
          ["Ananya's old regime taxable income (after ₹50,000 standard deduction, ₹1,80,000 HRA, ₹1,50,000 investments and ₹25,000 health insurance) is ₹13,95,000. Which regime suits her?"],
          ["Old regime tax: ₹12,500 + ₹1,00,000 + ₹1,18,500 = ₹2,31,000 + cess = ₹2,40,240. The new regime (₹1,50,800) is lower."],
        ],
      ),
    ),
    summary(
      ["Salary TDS under section 392", "Estimating taxable salary", "New and old regime slabs", "Declarations and proofs", "Monthly TDS calculation", "Form 130"],
      "Salary TDS is a year-long estimate — calculate it from each employee's taxable income and keep it updated.",
    ),
  ],
  2: [
    overview(
      "Module 3 — TDS on Other Payments",
      ["Most non-salary TDS falls under section 393. This module applies it to Brightpath's contractors, consultants, landlord, suppliers and overseas vendor."],
      ["Apply non-salary TDS under section 393", "Deduct on contractors and professional or technical fees", "Deduct on rent, commission and interest", "Deduct on purchases of goods and immovable property", "Handle payments to non-residents", "Apply thresholds, higher rates and lower deduction certificates"],
    ),
    screen(
      "Common rates and thresholds",
      table(
        ["Payment (former section)", "Rate", "Threshold"],
        [
          ["Contractors (194C)", "1% individual/HUF; 2% others", "₹30,000 single payment or ₹1,00,000 in a year"],
          ["Professional fees (194J)", "10%", "₹50,000 a year"],
          ["Technical services (194J)", "2%", "₹50,000 a year"],
          ["Rent — land, building, furniture (194-I)", "10%", "₹50,000 a month"],
          ["Rent — plant and machinery (194-I)", "2%", "₹50,000 a month"],
          ["Commission or brokerage (194H)", "2%", "₹20,000 a year"],
        ],
      ),
      note("Rates and thresholds were carried into section 393 from the 1961 Act. Confirm current figures in the Act and rules before deducting."),
    ),
    screen(
      "Contractors and professional fees",
      table(
        ["Brightpath payment", "TDS"],
        [
          ["Housekeeping company — ₹40,000 a month", "2% = ₹800 a month"],
          ["CA firm — ₹1,20,000 audit fee", "10% = ₹12,000"],
          ["Cloud server management (technical service) — ₹2,00,000", "2% = ₹4,000"],
          ["Freelance designer — ₹45,000 in the year", "Nil — below the ₹50,000 threshold"],
        ],
      ),
      tip("Track annual totals", "Kavya keeps a running total per vendor, so TDS starts as soon as a threshold is crossed."),
    ),
    screen(
      "Rent, commission and interest",
      bullets(
        "Office rent ₹1,50,000 a month → 10% = ₹15,000 a month.",
        "Sales agent commission ₹25,000 in the year → 2% = ₹500.",
        "Interest paid to a director on a loan — TDS applies above the threshold for non-bank interest.",
      ),
      caution("TDS applies when the amount is credited to the payee's account or paid, whichever is earlier — including year-end provisions credited to a party's account."),
    ),
    screen(
      "Purchases of goods and immovable property",
      terms(
        ["Purchase of goods (194Q)", "A buyer with turnover above ₹10 crore in the previous year deducts 0.1% on purchases from a supplier above ₹50 lakh in the year."],
        ["Immovable property (194-IA)", "1% on purchase of immovable property (other than agricultural land) where consideration is ₹50 lakh or more."],
      ),
      example([["Laptop purchases from one supplier in the year", "₹80,00,000"], ["Less: threshold", "−₹50,00,000"], ["Amount subject to TDS", "₹30,00,000"]], ["TDS at 0.1%", "₹3,000"]),
    ),
    screen(
      "Payments to non-residents",
      bullets(
        "Payments to non-residents chargeable to tax in India attract TDS at rates in the Act, or the lower treaty (DTAA) rate if the recipient provides a tax residency certificate and other required documents.",
        "Brightpath's annual licence fee to a US software company is reviewed against the India–US treaty.",
        "Remittances need online forms (formerly 15CA, with a chartered accountant's certificate 15CB where required).",
        "Reported in the quarterly non-resident statement, Form 144.",
      ),
      caution("Non-resident TDS is complex. Get professional advice on characterisation (royalty, business income) and treaty eligibility."),
    ),
    screen(
      "Missing PAN and lower deduction certificates",
      table(
        ["Situation", "Effect"],
        [
          ["No valid PAN", "Higher of 20% or twice the normal rate (with some exceptions)"],
          ["Lower or nil deduction certificate", "Deduct at the certificate rate, up to its limit and validity"],
        ],
      ),
      p("A new freelance designer without a PAN is paid ₹60,000. Instead of 10%, TDS is 20% = ₹12,000."),
    ),
    mistakes(
      ["Missing the annual threshold", "Track cumulative payments."],
      ["Treating technical fees as professional fees", "Check the rate — 2% or 10%."],
      ["Ignoring year-end provisions", "TDS applies on credit."],
      ["Using treaty rates without documents", "Get the TRC and declarations first."],
    ),
    check(
      3,
      q("TDS rate on professional fees?", ["10%", "2%", "1%", "30%"], 0, "Above ₹50,000 a year."),
      q("Monthly rent threshold for TDS on rent?", ["₹50,000", "₹20,000", "₹2,40,000", "₹1,00,000"], 0, "Per month."),
      q("TDS rate for a company contractor?", ["2%", "1%", "10%", "5%"], 0, "1% for individuals and HUFs."),
      q("What happens when a payee has no valid PAN?", ["A higher rate — usually 20% or twice the rate", "No TDS", "Half the rate", "The payment is stopped by law"], 0, "Collect PAN early."),
      q("TDS rate on purchase of immovable property worth ₹50 lakh or more?", ["1%", "0.1%", "10%", "2%"], 0, "On the consideration."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Mixed payments",
          ["Calculate TDS: (a) ₹35,000 single contractor bill from an individual, (b) ₹3,00,000 legal fees, (c) ₹60,000 monthly equipment hire."],
          ["(a) 1% = ₹350. (b) 10% = ₹30,000. (c) 2% = ₹1,200 a month (plant and machinery)."],
        ],
        [
          "Exercise 2 — Threshold",
          ["A consultant is paid ₹30,000 in May and ₹30,000 in August. When does TDS apply?"],
          ["The annual total crosses ₹50,000 in August — deduct 10% on the cumulative ₹60,000 (₹6,000) at that point."],
        ],
      ),
    ),
    summary(
      ["Section 393 rates and thresholds", "Contractors and professional or technical fees", "Rent, commission and interest", "Purchases of goods and property", "Non-resident payments", "Missing PAN and lower deduction certificates"],
      "Check the payment type, the threshold and the PAN — then deduct at the right rate when the amount is credited or paid.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Depositing TDS",
      ["Deducted TDS is government money held in trust. This module deposits Brightpath's TDS on time and records it correctly."],
      ["Know the due dates for deposit", "Pay TDS through a challan", "Understand book-entry deposits for government deductors", "Calculate interest on late deduction and late payment", "Record TDS in the books"],
    ),
    screen(
      "Due dates",
      table(
        ["TDS deducted in", "Due date (non-government deductor)"],
        [
          ["April to February", "7th of the next month"],
          ["March", "30 April"],
        ],
      ),
      p("Brightpath's TDS deducted in August 2026 must be deposited by 7 September 2026; March 2027's by 30 April 2027."),
    ),
    screen(
      "Paying through a challan",
      steps(
        ["Log in", "On the income tax e-filing portal (e-Pay Tax)."],
        ["Choose TDS payment", "Enter TAN, tax year, minor head (TDS payable by taxpayer) and nature of payment."],
        ["Pay", "Net banking, debit card, UPI or other permitted modes."],
        ["Save the challan", "Note the BSR code, date and challan serial number — needed for the quarterly statement."],
      ),
      tip("One challan per nature", "Kavya pays salary TDS and each type of non-salary TDS in separate lines, making statements easier to match."),
    ),
    screen(
      "Book-entry deposits for government deductors",
      p("Government offices that deduct TDS while paying from government accounts don't use a challan — the TDS is credited by book entry, generally on the same day, and reported to the department through a separate statement."),
      note("Brightpath is a private company, so it always pays by challan."),
    ),
    screen(
      "Interest on late deduction and late payment",
      table(
        ["Default", "Interest", "Period"],
        [
          ["Not deducted, or deducted late", "1% a month or part of a month", "From when it should have been deducted to when it was deducted"],
          ["Deducted but deposited late", "1.5% a month or part of a month", "From the date of deduction to the date of deposit"],
        ],
      ),
      example([["TDS deducted on 5 August, deposited on 10 October", "₹50,000"], ["Months or part months: 5 Aug–4 Sep, 5 Sep–4 Oct, 5–10 Oct", "3"]], ["Interest at 1.5% × 3", "₹2,250"]),
      caution("Interest must be paid before the quarterly statement is filed, and isn't a deductible business expense."),
    ),
    screen(
      "Recording TDS in the books",
      p("Brightpath books the CA firm's ₹1,20,000 fee:"),
      journal([["Professional fees", "₹1,20,000", ""], ["CA firm (payable)", "", "₹1,08,000"], ["TDS payable — professional fees", "", "₹12,000"]], "₹1,20,000"),
      p("When the TDS is deposited:"),
      journal([["TDS payable — professional fees", "₹12,000", ""], ["Bank", "", "₹12,000"]], "₹12,000"),
      tip("Reconcile monthly", "The TDS payable balance at month end should equal next month's challan."),
    ),
    mistakes(
      ["Depositing in March for March deductions", "The deadline is 30 April — but don't miss it."],
      ["Wrong nature of payment on the challan", "It won't match the statement."],
      ["Ignoring part months", "Interest counts any part month as a full month."],
      ["Booking the gross amount as payable", "Split the TDS payable."],
    ),
    check(
      4,
      q("By when must TDS deducted in July be deposited?", ["7 August", "30 July", "15 August", "30 April"], 0, "7th of the next month."),
      q("By when must TDS deducted in March be deposited?", ["30 April", "7 April", "31 March", "31 May"], 0, "The March exception."),
      q("Interest rate for TDS deducted but deposited late?", ["1.5% a month or part", "1% a month", "18% a year", "2% a month"], 0, "From deduction to deposit."),
      q("Interest rate for late deduction?", ["1% a month or part", "1.5% a month", "12% a year", "Nil"], 0, "From when it should have been deducted."),
      q("Which challan detail is needed for the quarterly statement?", ["BSR code, date and challan serial number", "The payee's phone number", "The GSTIN", "The auditor's name"], 0, "To match the deposit."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Late deduction",
          ["A ₹1,20,000 professional fee was credited on 1 June but TDS of ₹12,000 was deducted on 20 July. Calculate interest for late deduction."],
          ["Two months or part months (June and 1–20 July): 1% × 2 × ₹12,000 = ₹240."],
        ],
        [
          "Exercise 2 — Journal",
          ["Record office rent of ₹1,50,000 for October with TDS at 10%."],
          ["Dr Rent ₹1,50,000; Cr Landlord ₹1,35,000; Cr TDS payable — rent ₹15,000."],
        ],
      ),
    ),
    summary(
      ["The 7th and 30 April deadlines", "Challan payments", "Book-entry deposits", "Interest at 1% and 1.5%", "Accounting entries"],
      "Deposit TDS by the 7th, keep the challan details, and pay any interest before filing the statement.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Quarterly Returns and Certificates",
      ["Every quarter, Brightpath reports what it deducted and deposited. This module files the statements and issues certificates under the new forms."],
      ["File the salary statement — Form 138", "File the non-salary statement — Form 140", "File the non-resident statement — Form 144", "Meet the quarterly due dates", "Issue Form 130 and Form 131", "Understand late fees, penalties and pre-April 2026 periods"],
    ),
    screen(
      "The three quarterly statements",
      table(
        ["Form (formerly)", "Covers", "Brightpath"],
        [
          ["Form 138 (24Q)", "Salary TDS", "40 employees"],
          ["Form 140 (26Q)", "Non-salary TDS on residents", "Contractor, CA firm, rent, goods"],
          ["Form 144 (27Q)", "TDS on non-residents", "US software licence"],
        ],
      ),
      p("Each statement lists deductee-wise details — PAN, amount paid, TDS — and the challans used, so credit reaches each deductee."),
    ),
    screen(
      "Quarterly due dates",
      table(
        ["Quarter (tax year 2026-27)", "Due date"],
        [
          ["Q1 — April to June", "31 July 2026"],
          ["Q2 — July to September", "31 October 2026"],
          ["Q3 — October to December", "31 January 2027"],
          ["Q4 — January to March", "31 May 2027"],
        ],
      ),
      tip("Annual salary details", "The Q4 salary statement includes each employee's full-year salary and tax computation."),
    ),
    screen(
      "Preparing and filing",
      steps(
        ["Download the challan status", "Confirm each challan is recorded with the department."],
        ["Prepare the statement", "In the return preparation utility or approved software, deductee by deductee."],
        ["Validate", "Using the file validation utility."],
        ["File", "Online through the e-filing portal or a TIN facilitation centre."],
        ["Check processing", "On TRACES — look for defaults."],
      ),
    ),
    screen(
      "Certificates — Form 130 and Form 131",
      table(
        ["Certificate (formerly)", "For", "When"],
        [
          ["Form 130 (16)", "Salary TDS", "Annually — generally by 15 June after the tax year"],
          ["Form 131 (16A)", "Non-salary TDS", "Quarterly — generally within 15 days of the statement due date"],
        ],
      ),
      p("Form 131 certificates for Q2 2026-27 are due by about 15 November 2026. They're downloaded from TRACES, so they match the filed statement."),
    ),
    screen(
      "Late fees, penalties and earlier periods",
      table(
        ["Default", "Consequence"],
        [
          ["Statement filed late", "Fee of ₹200 a day (formerly section 234E), up to the TDS amount"],
          ["Failure to file or incorrect statement", "Penalty of ₹10,000 to ₹1,00,000 may apply"],
          ["Certificates issued late", "Penalty per day of delay may apply"],
        ],
      ),
      p("Brightpath files its Q2 Form 140 20 days late: 20 × ₹200 = ₹4,000."),
      note("Statements and corrections for periods up to March 2026 (Q4 2025-26 and earlier) use the old forms 24Q, 26Q and 27Q under the 1961 Act."),
    ),
    mistakes(
      ["Filing before challans are verified", "Check challan status first."],
      ["Wrong PANs", "Deductees lose credit."],
      ["Self-made certificates", "Download from TRACES."],
      ["New forms for old quarters", "Use 24Q/26Q/27Q for periods before April 2026."],
    ),
    check(
      5,
      q("Which form is the non-salary statement for residents from 2026-27?", ["Form 140", "Form 138", "Form 144", "Form 26Q"], 0, "Formerly 26Q."),
      q("When is the Q2 statement for 2026-27 due?", ["31 October 2026", "31 July 2026", "15 October 2026", "31 January 2027"], 0, "July–September quarter."),
      q("When is the Q4 statement due?", ["31 May", "30 April", "15 June", "31 March"], 0, "For January–March."),
      q("Which certificate is issued quarterly for non-salary TDS?", ["Form 131", "Form 130", "Form 168", "Form 140"], 0, "Formerly 16A."),
      q("What's the daily fee for filing a statement late?", ["₹200", "₹50", "₹1,000", "₹10,000"], 0, "Capped at the TDS amount."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Late fee cap",
          ["A statement showing total TDS of ₹3,000 is filed 30 days late. What's the fee?"],
          ["30 × ₹200 = ₹6,000, capped at the ₹3,000 TDS — fee ₹3,000."],
        ],
        [
          "Exercise 2 — Which form?",
          ["Which form does Brightpath file for (a) Q3 2026-27 rent TDS, (b) a correction to Q3 2025-26 salary TDS?"],
          ["(a) Form 140. (b) A correction to Form 24Q under the 1961 Act."],
        ],
      ),
    ),
    summary(
      ["Forms 138, 140 and 144", "Quarterly due dates", "Preparing and filing", "Forms 130 and 131", "Late fees, penalties and earlier periods"],
      "File each quarter's statement on time with correct PANs and challans — certificates and deductees' credit depend on it.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reconciliation, Corrections and Notices",
      ["After filing, Brightpath checks that everything matched, fixes errors and responds to default notices."],
      ["Use the annual tax statement — Form 168", "Work with the TRACES portal", "Understand short deduction, late payment and late deduction defaults", "File correction statements", "Respond to TDS default notices", "Use a month-end and quarter-end checklist"],
    ),
    screen(
      "Form 168 — the annual tax statement",
      p("Form 168 (formerly Form 26AS) shows each taxpayer the TDS reported against their PAN, plus taxes paid and other information."),
      bullets(
        "Deductees check it before filing their return.",
        "If TDS is missing, the usual cause is a wrong PAN or a statement not filed by the deductor.",
        "Brightpath's vendors ask Kavya to fix gaps quickly — their credit depends on it.",
      ),
    ),
    screen(
      "The TRACES portal",
      table(
        ["Feature", "Use"],
        [
          ["Statement status", "Check processing of filed statements"],
          ["Default summary and justification report", "See defaults and their reasons"],
          ["Consolidated file", "Download the latest filed data to prepare corrections"],
          ["Certificates", "Download Forms 130 and 131"],
          ["PAN verification", "Check deductee PANs before filing"],
          ["Online corrections", "Fix some errors without a full correction file"],
        ],
      ),
    ),
    screen(
      "Common defaults",
      table(
        ["Default", "Cause", "Brightpath example"],
        [
          ["Short deduction", "Lower rate than required", "Technical fee deducted at 2% instead of 10% for professional work"],
          ["Short payment", "Challan less than TDS reported", "One challan typed as ₹12,000 instead of ₹15,000"],
          ["Late payment interest", "Deposit after the due date", "August TDS paid on 10 October"],
          ["Late deduction interest", "TDS deducted after the credit date", "Year-end provision credited without TDS"],
          ["Late filing fee", "Statement filed late", "Q2 filed 20 days late"],
          ["PAN errors", "Invalid or missing PAN", "Higher rate not applied"],
        ],
      ),
    ),
    screen(
      "Correction statements",
      steps(
        ["Download the consolidated file", "From TRACES, for the quarter."],
        ["Prepare the correction", "Fix PANs, amounts, challan tags or add missed deductees."],
        ["Pay any shortfall", "Tax, interest and fee through a challan first."],
        ["File and check", "Submit the correction and confirm the default clears on TRACES."],
      ),
      tip("Correct early", "Corrections are easier while records are fresh — and deductees need their credit before filing returns."),
    ),
    screen(
      "Responding to default notices",
      bullets(
        "Read the justification report to see exactly which deductee and challan caused the default.",
        "If the default is genuine, pay the amount and file a correction.",
        "If it's wrong (e.g. a lower deduction certificate wasn't considered), correct the statement or respond with evidence.",
        "Keep a log of notices, responses and outcomes.",
      ),
      caution("Unpaid TDS defaults can lead to the deductor being treated as an assessee in default, with interest and penalties."),
    ),
    screen(
      "Month-end and quarter-end checklist",
      table(
        ["When", "Check"],
        [
          ["Each payment", "TDS applicability, rate, threshold and PAN"],
          ["Month end", "TDS payable ledger reconciled by nature of payment"],
          ["By the 7th", "Challans paid and details saved"],
          ["Quarter end", "Challan status verified; PANs validated; statements prepared"],
          ["Statement due date", "Forms 138, 140, 144 filed"],
          ["After processing", "TRACES defaults reviewed and corrected; Form 131 issued"],
          ["Year end", "Form 130 issued; Form 168 queries from vendors and staff resolved"],
        ],
      ),
    ),
    mistakes(
      ["Ignoring TRACES defaults", "They grow with interest."],
      ["Correcting without the consolidated file", "Start from the latest filed data."],
      ["Not paying before correcting", "Pay shortfalls first."],
      ["No notice log", "Track every notice and response."],
    ),
    check(
      6,
      q("Which form replaces Form 26AS?", ["Form 168", "Form 130", "Form 140", "Form 131"], 0, "The annual tax statement."),
      q("What's the usual cause of TDS missing from a deductee's statement?", ["Wrong PAN or statement not filed", "The deductee's bank", "GST errors", "Weekend payments"], 0, "Fix it promptly."),
      q("What does a short payment default mean?", ["The challan is less than the TDS reported", "TDS was deducted at a lower rate", "The statement was late", "The PAN was missing"], 0, "Pay the difference."),
      q("Which file is downloaded to prepare a correction statement?", ["The consolidated file from TRACES", "The GSTR-2B", "The bank statement", "Form 168"], 0, "The latest filed data."),
      q("What is a justification report?", ["A TRACES report explaining each default", "An audit report", "A salary slip", "A GST notice"], 0, "Shows which entries caused defaults."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Fix the default",
          ["TRACES shows a short deduction: a ₹2,00,000 professional fee was deducted at 2% (₹4,000) instead of 10%. What should Kavya do?"],
          ["Deposit the ₹16,000 shortfall with interest for late deduction, then file a correction statement with the correct TDS."],
        ],
        [
          "Exercise 2 — Vendor query",
          ["A vendor says ₹12,000 TDS isn't in their Form 168. What should Kavya check?"],
          ["The PAN in the statement, whether the statement was filed and processed, and the challan tagging — then correct if needed."],
        ],
      ),
    ),
    summary(
      ["Form 168", "TRACES features", "Common defaults", "Correction statements", "Responding to notices", "The TDS checklist"],
      "TDS isn't finished at filing — check TRACES, fix defaults quickly, and make sure every deductee gets their credit.",
    ),
  ],
}

export default lessons
