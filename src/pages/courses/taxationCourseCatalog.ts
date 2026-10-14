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
]
