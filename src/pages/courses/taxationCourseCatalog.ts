import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const category = { label: "Taxation", href: "/learning/taxation" }

const mod = (n: number, title: string, items: string[]): CourseModule => ({
  title: `Module ${n} — ${title}`,
  sections: [{ items }],
})

/** Course pages for taxation courses (Learn GST in India has its own page). */
export const taxationCourseCatalog: CourseDetails[] = [
  {
    slug: "gst-compliance-in-india",
    title: "GST Compliance in India",
    image: "assets/course-gst-compliance.jpg",
    summary:
      "Stay GST-compliant month after month — registration upkeep, invoicing, returns, ITC reconciliation, payments, records and handling notices.",
    intro:
      "Move from knowing how GST works to running it properly every month — keeping registration up to date, issuing compliant documents, filing returns on time, reconciling input tax credit, and responding to notices with confidence.",
    objective:
      "By the end of this course, learners will run a monthly GST compliance routine for a business — maintaining registration details, issuing compliant invoices and e-way bills, reconciling purchases with GSTR-2B, filing GSTR-1 and GSTR-3B on time, completing the annual return, and keeping the records needed to answer notices and audits.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "The GST Compliance Calendar", [
        "What GST compliance covers",
        "Monthly vs. quarterly (QRMP) filers",
        "Key due dates for GSTR-1, IFF and GSTR-3B",
        "Annual return deadlines",
        "Building a compliance calendar and checklist",
        "Consequences of missing a deadline",
      ]),
      mod(2, "Registration and Documentation Upkeep", [
        "Keeping registration details current",
        "Adding places of business and amending core fields",
        "Compliant tax invoices, credit notes and debit notes",
        "E-invoicing — who must comply and generating an IRN",
        "E-way bills for movement of goods",
        "Invoice series and document numbering",
      ]),
      mod(3, "Input Tax Credit Reconciliation", [
        "Reading GSTR-2A and GSTR-2B",
        "Accepting, rejecting or holding invoices in the Invoice Management System (IMS)",
        "Reconciling the purchase register with GSTR-2B",
        "Following up with suppliers on missing invoices",
        "Reversing ineligible or unpaid credit",
        "Monthly ITC reconciliation checklist",
      ]),
      mod(4, "Filing Monthly and Quarterly Returns", [
        "Preparing GSTR-1 — B2B, B2C, exports and amendments",
        "Using IFF under the QRMP scheme",
        "Preparing GSTR-3B from GSTR-1 and GSTR-2B data",
        "Setting off liability with ITC and cash",
        "Paying tax with a PMT-06 challan",
        "Correcting mistakes in later returns",
      ]),
      mod(5, "Annual Returns, Interest and Late Fees", [
        "GSTR-9 annual return",
        "GSTR-9C reconciliation statement — who must file",
        "Reconciling books with returns for the year",
        "Interest on late payment of tax",
        "Late fees for delayed returns",
        "Maintaining books and records for the required period",
      ]),
      mod(6, "Notices, Audits and Assessments", [
        "Common GST notices and what triggers them",
        "Responding to scrutiny of returns",
        "Demand notices and the reply process",
        "Departmental audits — preparing documents",
        "Appeals — an overview",
        "Building a compliance file that stands up to review",
      ]),
    ],
    assignments: [
      "Build a 12-month GST compliance calendar",
      "Check a set of invoices for compliance",
      "Reconcile a purchase register with GSTR-2B",
      "Prepare GSTR-1 and GSTR-3B summaries",
      "Calculate interest and late fees on a delayed return",
      "Draft a reply to a sample scrutiny notice",
    ],
    exercises:
      "Worked compliance scenarios after each module — reconciling credit, preparing return data and fixing errors.",
    finalExam: "30 questions",
    finalPractical:
      "Run one quarter of GST compliance for a fictional business, from invoices and ITC reconciliation to filed returns and a notice reply.",
    note:
      "GST due dates, thresholds, forms and portal features change through GST Council decisions and CBIC notifications. Always confirm the current requirements on the official GST portal before filing.",
  },
  {
    slug: "tds-compliance-in-india",
    title: "TDS Compliance in India",
    image: "assets/course-tds-compliance.jpg",
    summary:
      "Deduct, deposit and report TDS correctly under the Income-tax Act, 2025 — salaries, other payments, challans, quarterly returns, certificates and reconciliation.",
    intro:
      "Learn how tax deducted at source works for businesses in India and run it correctly every month and quarter — under the new Income-tax Act, 2025, with the old forms and sections mapped to the new ones.",
    objective:
      "By the end of this course, learners will identify payments that attract TDS, apply the right rates and thresholds, deposit tax on time, file quarterly TDS returns, issue TDS certificates, and reconcile TDS credit and defaults on the TRACES portal.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Introduction to TDS", [
        "What tax deducted at source is and why it exists",
        "Deductors and deductees",
        "PAN and TAN — getting and quoting them",
        "The Income-tax Act, 2025 — in force from 1 April 2026",
        "Transition from the 1961 Act — which rules apply to which period",
        "Where TDS fits in a business's monthly routine",
      ]),
      mod(2, "TDS on Salaries", [
        "Salary TDS under Section 392",
        "Estimating an employee's taxable salary",
        "Old vs. new tax regime choices",
        "Employee declarations and investment proofs",
        "Calculating monthly deductions",
        "Annual salary certificate — Form 130 (formerly Form 16)",
      ]),
      mod(3, "TDS on Other Payments", [
        "Non-salary TDS under Section 393",
        "Contractors and professional or technical fees",
        "Rent, commission and interest",
        "Purchase of goods and immovable property",
        "Payments to non-residents",
        "Thresholds, rates, and higher deduction when PAN is missing",
        "Lower or nil deduction certificates",
      ]),
      mod(4, "Depositing TDS", [
        "Due dates — the 7th of the next month, and 30 April for March",
        "Paying TDS through a challan",
        "Book-entry deposits for government deductors",
        "Interest on late deduction and late payment",
        "Recording TDS in the books",
      ]),
      mod(5, "Quarterly Returns and Certificates", [
        "Salary return — Form 138 (formerly 24Q)",
        "Non-salary return — Form 140 (formerly 26Q)",
        "Non-resident return — Form 144 (formerly 27Q)",
        "Quarterly due dates — 31 July, 31 October, 31 January and 31 May",
        "Issuing certificates — Form 130 and Form 131 (formerly 16 and 16A)",
        "Late filing fees and penalties",
        "Returns and corrections for periods before April 2026",
      ]),
      mod(6, "Reconciliation, Corrections and Notices", [
        "Annual tax statement — Form 168 (formerly Form 26AS)",
        "Using the TRACES portal",
        "Short deduction, late payment and late deduction defaults",
        "Filing correction statements",
        "Responding to TDS default notices",
        "Month-end and quarter-end TDS checklist",
      ]),
    ],
    assignments: [
      "Identify which payments attract TDS",
      "Calculate monthly salary TDS for an employee",
      "Calculate TDS on contractor, rent and professional payments",
      "Work out interest on a late deposit",
      "Prepare quarterly return data",
      "Reconcile TDS credit with Form 168",
    ],
    exercises:
      "Worked TDS calculations and return-preparation scenarios after each module.",
    finalExam: "30 questions",
    finalPractical:
      "Handle one quarter of TDS for a fictional business — deductions, deposits, the quarterly return and certificates.",
    note:
      "TDS sections, rates, thresholds, form numbers and due dates are set by the Income-tax Act, 2025 and its rules, and can change. The new forms apply from the first quarter of 2026–27; earlier periods use the old forms. Always confirm current requirements with the Income Tax Department and TRACES before filing.",
  },
  {
    slug: "income-tax-for-salaried-employees",
    title: "Income Tax for Salaried Employees",
    image: "assets/course-income-tax-salaried.jpg",
    summary:
      "Understand how salary is taxed under the Income-tax Act, 2025 — the tax year, salary components, new vs. old regime, deductions and rebates, salary TDS and filing your return.",
    intro:
      "From 1 April 2026 the Income-tax Act, 2025 governs how salaries are taxed in India. Learn how your salary is taxed, how to choose between the new and old regimes, how employers deduct tax, and how to file your return with confidence.",
    objective:
      "By the end of this course, learners will work out taxable salary from a pay structure, compare the new and old regimes for an employee, apply the standard deduction, rebates and other deductions correctly, read Form 130 and the annual tax statement, and prepare a salaried employee's income tax return.",
    level: "Beginner",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Income Tax and the Income-tax Act, 2025", [
        "How income tax works in India",
        "The Income-tax Act, 2025 — in force from 1 April 2026",
        "The “tax year” replaces the previous year and assessment year",
        "Income up to 31 March 2026 stays under the 1961 Act",
        "Residential status and the heads of income",
      ]),
      mod(2, "Salary Income", [
        "What counts as salary",
        "Basic pay, dearness allowance and bonus",
        "Allowances — HRA, leave travel and others",
        "Perquisites — benefits provided by the employer",
        "Arrears, advance salary and profits in lieu of salary",
      ]),
      mod(3, "Choosing a Tax Regime", [
        "The new tax regime — the default for individuals",
        "New regime slabs — nil up to ₹4 lakh, rising to 30% above ₹24 lakh",
        "The old tax regime and when it can still help",
        "Telling your employer which regime you choose",
        "Worked comparisons for different salaries",
      ]),
      mod(4, "Deductions, Exemptions and Rebates", [
        "Standard deduction — ₹75,000 (new regime) or ₹50,000 (old regime)",
        "HRA exemption — the least of three amounts, old regime only",
        "Investment, insurance and home-loan deductions in the old regime",
        "Deductions still available in the new regime",
        "Rebate — no tax on income up to ₹12 lakh (new) or ₹5 lakh (old)",
        "Surcharge and cess on higher incomes",
      ]),
      mod(5, "Salary TDS and Your Documents", [
        "How your employer deducts tax each month",
        "Investment declarations and proofs",
        "Form 130 — your annual salary certificate (formerly Form 16)",
        "Form 168 — your annual tax statement (formerly Form 26AS)",
        "Checking that TDS matches your records",
      ]),
      mod(6, "Filing Your Return", [
        "Which return form a salaried employee uses",
        "Due dates and what happens if you file late",
        "Claiming refunds",
        "Responding to notices",
        "Salaried taxpayer's year-end checklist",
      ]),
    ],
    assignments: [
      "Work out taxable salary from a salary structure",
      "Compare tax under the new and old regimes",
      "Calculate the HRA exemption",
      "Check Form 130 against Form 168",
      "Prepare a salaried return summary",
    ],
    exercises: "Worked tax calculations after each module for employees at different salary levels.",
    finalExam: "30 questions",
    finalPractical:
      "Calculate the tax for a salaried employee under both regimes, check the TDS documents and prepare the return.",
    note:
      "Figures in this course reflect tax year 2026–27. Tax slabs, deductions, rebates and due dates are set each year by the Finance Act, and section numbers changed under the Income-tax Act, 2025. This course is for learning, not personal tax advice — always confirm current rules with the Income Tax Department.",
  },
  {
    slug: "income-tax-for-business-and-professionals",
    title: "Income Tax for Business & Professionals",
    image: "assets/course-income-tax-business.jpg",
    summary:
      "Understand how business and professional income is taxed under the Income-tax Act, 2025 — computing profits, presumptive taxation, books of account, tax audit, advance tax and filing.",
    intro:
      "Shop owners, traders, doctors, consultants and freelancers all pay tax on business or professional income. Learn how that income is computed, when the simpler presumptive scheme can be used, when a tax audit is needed, and how to pay advance tax and file on time.",
    objective:
      "By the end of this course, learners will compute profits and gains of business or profession, identify allowable and disallowed expenses, decide whether presumptive taxation under section 58 applies, know when books must be kept and audited under sections 62 and 63, calculate and schedule advance tax, and prepare a business or professional return.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Business and Professional Income", [
        "The head “Profits and gains of business or profession”",
        "Business vs. profession — and what counts as a specified profession",
        "The tax year under the Income-tax Act, 2025",
        "Method of accounting — mercantile and cash",
        "Choosing between the new and old tax regimes for business income",
      ]),
      mod(2, "Computing Taxable Profit", [
        "Starting from the profit in the books",
        "Allowable business expenses",
        "Depreciation on business assets",
        "Disallowed expenses — personal, capital and cash payments",
        "Payments where TDS was not deducted",
        "Setting off and carrying forward business losses",
      ]),
      mod(3, "Presumptive Taxation — Section 58", [
        "Who can opt — resident individuals, HUFs and firms other than LLPs",
        "Businesses — turnover up to ₹2 crore, or ₹3 crore if cash receipts are within 5%",
        "Deemed profit — 6% of digital receipts and 8% of other receipts",
        "Professionals — receipts up to ₹50 lakh, or ₹75 lakh if cash receipts are within 5%; deemed profit of 50%",
        "Goods carriages — up to ten vehicles, at fixed monthly amounts",
        "No further deductions, and the five-year lock-in for businesses",
      ]),
      mod(4, "Books of Account and Tax Audit", [
        "Books of account under section 62",
        "Tax audit under section 63 — business turnover above ₹1 crore",
        "The ₹10 crore limit when cash receipts and cash payments are each within 5%",
        "Professionals with gross receipts above ₹50 lakh",
        "Declaring less than presumptive profit — when audit applies",
        "The audit report in Form 26 and its due date",
      ]),
      mod(5, "Advance Tax", [
        "Who pays — when tax for the year is ₹10,000 or more",
        "Instalments — 15% by 15 June, 45% by 15 September, 75% by 15 December, 100% by 15 March",
        "Presumptive businesses and professionals — one payment by 15 March",
        "Estimating current-year income",
        "Interest for short or late payment",
      ]),
      mod(6, "Filing and Compliance", [
        "Choosing the right return form",
        "Return due dates for audited and non-audited cases",
        "TDS and TCS credits in Form 168",
        "GST turnover and income tax turnover — reconciling the two",
        "Notices, scrutiny and record keeping",
        "Business taxpayer's year-end checklist",
      ]),
    ],
    assignments: [
      "Compute taxable business profit from a profit and loss account",
      "Identify disallowed expenses",
      "Decide whether presumptive taxation applies and calculate deemed profit",
      "Check whether a business or professional needs a tax audit",
      "Prepare an advance tax schedule",
      "Prepare a return summary for a professional",
    ],
    exercises:
      "Worked tax calculations after each module for a trader, a consultant and a small manufacturing business.",
    finalExam: "30 questions",
    finalPractical:
      "Compute the tax for a fictional business owner — taxable profit, the presumptive option, audit check, advance tax and a return summary — and recommend the better approach.",
    note:
      "Figures in this course reflect tax year 2026–27 under the Income-tax Act, 2025, as amended by the Finance Act, 2026. Limits, rates and due dates can change each year. This course is for learning, not personal tax advice — always confirm current rules with the Income Tax Department.",
  },
  {
    slug: "gst-input-tax-credit-and-reconciliation",
    title: "GST Input Tax Credit & Reconciliation",
    image: "assets/course-gst-itc.jpg",
    summary:
      "Claim every rupee of eligible GST credit and nothing more — ITC conditions, blocked credits, IMS actions, GSTR-2B matching, reversals, time limits and annual reconciliation.",
    intro:
      "Input tax credit is where most GST cash is won or lost, and where most notices begin. Go beyond the basics to master the conditions, the Invoice Management System, reversals and time limits, and build a reconciliation routine that stands up to scrutiny.",
    objective:
      "By the end of this course, learners will test ITC claims against the section 16 conditions, identify blocked credits under section 17(5), act on supplier records in IMS, reconcile the purchase register with GSTR-2B, apply the 180-day payment rule, rule 37A and common-credit reversals, meet the section 16(4) time limit, and reconcile ITC for the annual return.",
    level: "Advanced",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Conditions for Claiming ITC — Section 16", [
        "Possession of a tax invoice or debit note",
        "Supplier's details furnished in GSTR-1 and shown in GSTR-2B",
        "Receipt of goods or services — including bill-to ship-to supplies",
        "Tax actually paid by the supplier",
        "Filing your own GSTR-3B",
        "Goods received in lots, and no ITC where depreciation is claimed on the tax",
      ]),
      mod(2, "Blocked and Restricted Credits", [
        "Section 17(5) blocked credits — vehicles, food, memberships and personal use",
        "Works contracts and construction of immovable property",
        "“Plant and machinery” — the 2025 amendment, effective retrospectively",
        "Common credit for exempt and taxable supplies — rules 42 and 43",
        "Input Service Distributor rules for multi-state businesses from 1 April 2025",
      ]),
      mod(3, "The Invoice Management System (IMS)", [
        "Accept, reject or keep pending — and what each action does",
        "Records with no action are treated as accepted",
        "Recomputing GSTR-2B before filing GSTR-3B",
        "Keeping credit notes pending and declaring the ITC to reverse",
        "Adding remarks and working with suppliers to correct records",
      ]),
      mod(4, "Monthly ITC Reconciliation", [
        "Matching the purchase register with GSTR-2B",
        "Missing, mismatched and duplicate invoices",
        "Reverse charge and import of goods credits",
        "Following up suppliers who have not filed",
        "A monthly reconciliation workbook",
      ]),
      mod(5, "Reversals, Re-claims and Time Limits", [
        "The 180-day rule — reversing credit when suppliers are not paid, with interest",
        "Re-claiming credit once payment is made",
        "Rule 37A — reversal when a supplier has not filed GSTR-3B by 30 September",
        "Section 16(4) — the 30 November deadline or annual return date, whichever is earlier",
        "Interest on credit wrongly availed and used",
      ]),
      mod(6, "Annual Reconciliation and Notices", [
        "Reconciling ITC in books, GSTR-3B and GSTR-2B for the year",
        "Reporting ITC in GSTR-9 and GSTR-9C",
        "Common ITC mismatch notices and how to reply",
        "Documents to keep for every credit claimed",
        "ITC year-end checklist",
      ]),
    ],
    assignments: [
      "Test a set of purchase invoices against the section 16 conditions",
      "Identify blocked credits in a company's expenses",
      "Decide IMS actions for a month's supplier records",
      "Reconcile a purchase register with GSTR-2B",
      "Calculate reversals under the 180-day rule and rule 37A",
      "Prepare an annual ITC reconciliation for GSTR-9",
    ],
    exercises:
      "Worked reconciliation exercises after each module, using one trading company's purchase register, GSTR-2B and payment records.",
    finalExam: "30 questions",
    finalPractical:
      "Reconcile a full year's input tax credit for a fictional business — monthly matching, reversals and re-claims, blocked credits and the GSTR-9 ITC tables — and draft a reply to an ITC mismatch notice.",
    note:
      "This course reflects the CGST Act and Rules and GST portal features as of October 2026. GST law, rates, forms and portal processes change often. This course is for learning, not professional advice — always confirm current rules with CBIC notifications and GSTN advisories.",
  },
]
