import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const category = { label: "Financial Accounting", href: "/learning/financial-accounting" }

const mod = (n: number, title: string, items: string[]): CourseModule => ({
  title: `Module ${n} — ${title}`,
  sections: [{ items }],
})

/** Course pages for the Financial Accounting category. */
export const financialAccountingCourseCatalog: CourseDetails[] = [
  {
    slug: "financial-reporting",
    title: "Financial Reporting",
    image: "assets/course-financial-reporting.jpg",
    summary:
      "Prepare and present clear financial statements — income statement, balance sheet, cash flow statement, notes and monthly management reports.",
    intro:
      "Learn how businesses turn their books into financial statements that owners, lenders and tax advisers can rely on — and how to present them clearly every month and at year end.",
    objective:
      "By the end of this course, learners will prepare an income statement, balance sheet and cash flow statement from an adjusted trial balance, write the key notes and disclosures, and build a monthly management reporting pack.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "The Purpose of Financial Reporting", [
        "Who uses financial statements and why",
        "Qualities of useful financial information",
        "Accrual basis and the going-concern assumption",
        "Reporting frameworks — US GAAP, IFRS, AASB and Ind AS",
        "Reporting periods and year-end",
        "The full set of financial statements",
      ]),
      mod(2, "The Income Statement", [
        "Revenue and cost of sales",
        "Gross profit and gross margin",
        "Operating expenses",
        "Other income and finance costs",
        "Income tax and net profit",
        "Single-step vs. multi-step layouts",
      ]),
      mod(3, "The Balance Sheet", [
        "Current and non-current assets",
        "Current and non-current liabilities",
        "Equity — capital, retained earnings and drawings",
        "Classifying accounts correctly",
        "Presentation and comparatives",
        "Linking the balance sheet to the income statement",
      ]),
      mod(4, "The Cash Flow Statement", [
        "Why profit is not the same as cash",
        "Operating, investing and financing activities",
        "Direct and indirect methods",
        "Reconciling net profit to operating cash flow",
        "Reading a cash flow statement",
      ]),
      mod(5, "Equity, Notes and Disclosures", [
        "Statement of changes in equity",
        "Summary of accounting policies",
        "Key notes — fixed assets, borrowings and commitments",
        "Related-party transactions",
        "Events after the reporting date",
      ]),
      mod(6, "Management Reporting and Year-End", [
        "Building a monthly management reporting pack",
        "Key performance indicators",
        "Budget vs. actual and variance commentary",
        "Preparing year-end statements for accountants and auditors",
        "Review checklist before issuing reports",
      ]),
    ],
    assignments: [
      "Classify accounts into statement line items",
      "Prepare an income statement",
      "Prepare a balance sheet",
      "Prepare a cash flow statement using the indirect method",
      "Draft an accounting policies note",
      "Build a one-page management report",
    ],
    exercises:
      "Worked statement-preparation exercises after each module, starting from an adjusted trial balance.",
    finalExam: "30 questions",
    finalPractical:
      "Prepare a full set of year-end financial statements, with notes and a management summary, for a fictional business.",
  },
  {
    slug: "financial-statement-analysis",
    title: "Financial Statement Analysis",
    image: "assets/course-financial-statement-analysis.jpg",
    summary:
      "Analyse financial statements and make informed decisions — horizontal and vertical analysis, ratios, cash flow quality, red flags and clear reporting.",
    intro:
      "Financial statements tell a story about performance, health and risk — if you know how to read them. Learn the techniques analysts, lenders and managers use to assess a business and turn numbers into decisions.",
    objective:
      "By the end of this course, learners will analyse financial statements with trend and common-size analysis, calculate and interpret profitability, liquidity, efficiency and solvency ratios, judge the quality of earnings and cash flow, spot warning signs, and present clear conclusions to decision-makers.",
    level: "Advanced",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Reading Financial Statements with Purpose", [
        "Who analyses statements — owners, lenders, investors and managers",
        "How the income statement, balance sheet and cash flow statement connect",
        "Accounting policies and notes that affect comparisons",
        "Gathering and preparing data for analysis",
      ]),
      mod(2, "Trend and Common-Size Analysis", [
        "Horizontal analysis — year-on-year changes",
        "Vertical analysis — common-size statements",
        "Comparing against competitors and industry benchmarks",
        "Presenting trends clearly",
      ]),
      mod(3, "Profitability and Return Ratios", [
        "Gross, operating and net margins",
        "Return on assets and return on equity",
        "Breaking down return on equity — the DuPont analysis",
        "Earnings per share and what drives it",
      ]),
      mod(4, "Liquidity, Efficiency and Solvency", [
        "Current and quick ratios",
        "Receivable, payable and inventory days",
        "The cash conversion cycle",
        "Debt-to-equity and interest cover",
        "Covenants lenders watch",
      ]),
      mod(5, "Cash Flow and Earnings Quality", [
        "Operating cash flow vs. reported profit",
        "Free cash flow",
        "Working capital swings",
        "Red flags — unusual accruals, revenue timing and one-off items",
      ]),
      mod(6, "From Analysis to Decisions", [
        "Building an analysis workbook",
        "Writing a short financial health report",
        "Credit, investment and budgeting decisions",
        "Limitations of ratio analysis",
        "Analysis checklist",
      ]),
    ],
    assignments: [
      "Prepare common-size statements for two years",
      "Calculate and interpret a full set of ratios",
      "Run a DuPont analysis",
      "Calculate the cash conversion cycle",
      "Compare profit with operating cash flow and explain the gap",
      "Write a one-page financial health report",
    ],
    exercises:
      "Worked analysis exercises after each module, using two years of statements for a sample company.",
    finalExam: "30 questions",
    finalPractical:
      "Analyse three years of financial statements for a fictional business and present a recommendation to a lender.",
  },
  {
    slug: "bank-reconciliation-and-month-end-close",
    title: "Bank Reconciliation & Month-End Close",
    image: "assets/course-bank-reconciliation-close.jpg",
    summary:
      "Lead a fast, controlled financial close — reconcile complex and multi-entity accounts, substantiate the balance sheet, review journals and results, and shorten the close.",
    intro:
      "Once the basics of reconciling and closing are in place, the challenge is doing it at scale — more accounts, more entities, tighter deadlines and auditors who want evidence. Learn how finance teams plan, control and continually improve the close.",
    objective:
      "By the end of this course, learners will reconcile high-volume, multi-currency and intercompany accounts, apply a risk-based balance sheet substantiation policy, review journals and results with clear thresholds, run a close calendar to a critical path, and measure and shorten the close.",
    level: "Advanced",
    duration: "3.5 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Designing the Financial Close", [
        "Close calendar — working days before and after period end",
        "Critical path and task dependencies",
        "Roles, preparers and reviewers",
        "Close materiality and review thresholds",
        "Close metrics — days to close and post-close adjustments",
      ]),
      mod(2, "Advanced Bank and Cash Reconciliations", [
        "Multiple bank accounts and cash pooling",
        "Foreign-currency bank accounts and revaluation",
        "High-volume matching rules and exception queues",
        "Payment gateway and clearing account reconciliations",
        "Unreconciled items — ageing, escalation and write-off approval",
      ]),
      mod(3, "Balance Sheet Substantiation", [
        "A risk-based reconciliation policy",
        "Rating accounts by risk and reconciliation frequency",
        "Supporting evidence and roll-forward schedules",
        "Subledger to general ledger control reconciliations",
        "Preparer and reviewer sign-off",
      ]),
      mod(4, "Intercompany and Multi-Entity Close", [
        "Intercompany transactions and matching",
        "Resolving intercompany differences",
        "Eliminations on consolidation",
        "Foreign-currency translation of subsidiaries",
        "Group close timetables and reporting packs",
      ]),
      mod(5, "Journal Controls and Results Review", [
        "Standard, recurring and manual journals",
        "Journal approval and supporting documents",
        "Flux analysis with thresholds and explanations",
        "Analytical review of the balance sheet and income statement",
        "Post-close adjustments and how to prevent them",
      ]),
      mod(6, "Improving and Automating the Close", [
        "Finding bottlenecks in the close",
        "Moving work before period end",
        "Reconciliation and close-management software",
        "Audit readiness and documentation",
        "Close improvement checklist",
      ]),
    ],
    assignments: [
      "Build a close calendar with a critical path",
      "Reconcile a foreign-currency bank account and post the revaluation",
      "Risk-rate a balance sheet and set reconciliation frequencies",
      "Match and eliminate intercompany balances for two entities",
      "Prepare a flux analysis with explanations",
      "Propose three changes to shorten a close",
    ],
    exercises:
      "Worked reconciliation, consolidation and review exercises after each module, using a small group of companies.",
    finalExam: "30 questions",
    finalPractical:
      "Run a full month-end close for a two-entity group — reconciliations, intercompany eliminations, journal review and a close report with improvement actions.",
  },
  {
    slug: "advanced-accounts-receivable-and-payable",
    title: "Advanced Accounts Receivable & Payable",
    image: "assets/course-advanced-ar-ap.jpg",
    summary:
      "Account for receivables and payables beyond the basics — credit-loss provisions, foreign-currency balances, cut-off, rebates, netting, controls and reporting.",
    intro:
      "Recording invoices and payments is only the start. Learn how receivables and payables are measured, adjusted and reported at period end, and the controls finance teams rely on to keep them accurate.",
    objective:
      "By the end of this course, learners will estimate credit-loss provisions, revalue foreign-currency balances, apply cut-off and accruals, account for rebates, credit and debit notes, retentions and netting, reconcile subledgers to the general ledger, and report receivables and payables clearly.",
    level: "Advanced",
    duration: "3.5 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Receivables and Payables in the Financial Statements", [
        "Recognition and measurement of receivables and payables",
        "Linking invoicing to revenue and expense recognition",
        "Current vs. non-current classification",
        "Subledgers, control accounts and the general ledger",
      ]),
      mod(2, "Credit Losses and Bad Debts", [
        "Expected credit loss approach — IFRS 9 and Ind AS 109",
        "The CECL model under US GAAP",
        "Building a provision matrix from aging data",
        "Specific provisions and write-offs",
        "Recoveries of debts written off",
      ]),
      mod(3, "Foreign-Currency Receivables and Payables", [
        "Recording transactions at the transaction-date rate",
        "Revaluing balances at period end",
        "Realised and unrealised exchange differences",
        "Settlement in a different currency",
      ]),
      mod(4, "Cut-off, Accruals and Adjustments", [
        "Sales and purchase cut-off testing",
        "Goods received not invoiced",
        "Customer advances and unbilled revenue",
        "Volume rebates and supplier incentives",
        "Credit notes, debit notes and retentions",
      ]),
      mod(5, "Netting, Financing and Intercompany", [
        "Contra and netting arrangements",
        "Invoice discounting and factoring",
        "Supplier finance arrangements",
        "Intercompany receivables and payables",
        "Taxes withheld on customer and supplier payments",
      ]),
      mod(6, "Controls, Analysis and Reporting", [
        "Customer and supplier master data controls",
        "Subledger to general ledger reconciliations",
        "DSO, DPO and aging analysis",
        "Red flags — unapplied cash, debit balances and duplicate payments",
        "Period-end receivables and payables checklist",
      ]),
    ],
    assignments: [
      "Build a provision matrix and calculate a credit-loss provision",
      "Revalue foreign-currency receivables and payables",
      "Perform a sales and purchase cut-off review",
      "Account for a supplier volume rebate",
      "Reconcile receivables and payables subledgers to the general ledger",
      "Prepare a receivables and payables analysis for management",
    ],
    exercises:
      "Worked accounting and reconciliation exercises after each module, using one trading company's customer and supplier ledgers.",
    finalExam: "30 questions",
    finalPractical:
      "Complete the period-end review of receivables and payables for a fictional exporter — provisions, revaluation, cut-off, reconciliations and a management report.",
  },
  {
    slug: "fixed-assets-and-depreciation",
    title: "Fixed Assets & Depreciation",
    image: "assets/course-fixed-assets.jpg",
    summary:
      "Account for property, plant and equipment from purchase to disposal — capitalisation, the fixed asset register, depreciation methods, revaluation, impairment and disposals.",
    intro:
      "Fixed assets are often the largest numbers on a balance sheet. Learn how to decide what to capitalise, keep an accurate fixed asset register, choose and calculate depreciation, and handle revaluations, impairments and disposals correctly.",
    objective:
      "By the end of this course, learners will apply capitalisation rules, maintain a fixed asset register, calculate depreciation using the main methods, account for revaluations, impairments, disposals and asset exchanges, reconcile the register to the ledger, and explain the difference between book and tax depreciation.",
    level: "Intermediate",
    duration: "3.5 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "What Counts as a Fixed Asset", [
        "Property, plant and equipment and intangible assets",
        "Capital vs. revenue expenditure",
        "What to include in cost — purchase price, delivery and installation",
        "Capitalisation thresholds",
        "Subsequent costs — repairs vs. improvements",
      ]),
      mod(2, "The Fixed Asset Register", [
        "What a fixed asset register records",
        "Asset classes, tags and locations",
        "Assets under construction and capital work in progress",
        "Physical verification of assets",
        "Reconciling the register to the general ledger",
      ]),
      mod(3, "Depreciation Methods", [
        "Useful life, residual value and depreciable amount",
        "Straight-line method",
        "Written-down value (reducing balance) method",
        "Units-of-production method",
        "Component depreciation",
        "Changes in estimates",
      ]),
      mod(4, "Revaluation and Impairment", [
        "Cost model vs. revaluation model",
        "Recording revaluation gains and losses",
        "Indicators of impairment",
        "Recoverable amount and impairment losses",
        "Reversing impairment losses",
      ]),
      mod(5, "Disposals, Exchanges and Leases", [
        "Selling and scrapping assets",
        "Gains and losses on disposal",
        "Asset exchanges and trade-ins",
        "Assets held for sale",
        "Right-of-use assets from leases — an overview",
      ]),
      mod(6, "Reporting, Tax and Controls", [
        "Fixed asset notes and movement schedules",
        "Book depreciation vs. tax depreciation",
        "Deferred tax on depreciation differences — an overview",
        "Controls over additions, transfers and disposals",
        "Year-end fixed asset checklist",
      ]),
    ],
    assignments: [
      "Decide which costs to capitalise for a new machine",
      "Set up a fixed asset register",
      "Calculate straight-line and written-down value depreciation",
      "Record a revaluation and an impairment",
      "Account for an asset disposal and a trade-in",
      "Prepare a fixed asset movement schedule",
    ],
    exercises:
      "Worked calculation and journal exercises after each module, following one company's assets from purchase to disposal.",
    finalExam: "30 questions",
    finalPractical:
      "Maintain a full year's fixed asset register for a fictional business — additions, depreciation, an impairment and disposals — and prepare the year-end note.",
  },
  {
    slug: "inventory-accounting-and-valuation",
    title: "Inventory Accounting & Valuation",
    image: "assets/course-inventory-valuation.jpg",
    summary:
      "Account for inventory accurately — perpetual and periodic systems, cost formulas, lower of cost and net realisable value, stock counts, write-downs and reporting.",
    intro:
      "Inventory links purchasing, production, sales and profit. Learn how to measure what stock costs, value it correctly at period end, reconcile counts to the books and spot the errors that distort gross margin.",
    objective:
      "By the end of this course, learners will record inventory under perpetual and periodic systems, measure cost including conversion costs, apply FIFO, weighted average and specific identification, value stock at the lower of cost and net realisable value, run and reconcile stock counts, account for write-downs and losses, and report inventory clearly.",
    level: "Intermediate",
    duration: "3.5 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Inventory in the Financial Statements", [
        "Types of inventory — raw materials, work in progress and finished goods",
        "How inventory drives cost of goods sold and gross profit",
        "Perpetual vs. periodic inventory systems",
        "Ownership and cut-off — goods in transit and on consignment",
      ]),
      mod(2, "Measuring the Cost of Inventory", [
        "Purchase costs — price, freight, duties and discounts",
        "Conversion costs — direct labour and production overheads",
        "Costs that must be expensed",
        "Standard cost and retail methods",
      ]),
      mod(3, "Cost Formulas", [
        "First-in, first-out (FIFO)",
        "Weighted average cost",
        "Specific identification",
        "LIFO — allowed under US GAAP but not under IFRS or Ind AS",
        "How each formula affects profit and tax",
      ]),
      mod(4, "Valuation at Period End", [
        "Lower of cost and net realisable value",
        "Estimating net realisable value",
        "Slow-moving, damaged and obsolete stock",
        "Inventory provisions and write-downs",
        "Reversing write-downs",
      ]),
      mod(5, "Stock Counts and Reconciliation", [
        "Planning a stock count",
        "Count procedures and test counts",
        "Cycle counting",
        "Reconciling counts to the ledger",
        "Investigating shrinkage and losses",
      ]),
      mod(6, "Controls, Analysis and Reporting", [
        "Inventory controls — receiving, issuing and access",
        "Inventory turnover and days in inventory",
        "Gross margin analysis",
        "Inventory disclosures in the financial statements",
        "Period-end inventory checklist",
      ]),
    ],
    assignments: [
      "Record purchases and sales under perpetual and periodic systems",
      "Calculate the cost of inventory including freight and conversion costs",
      "Value closing stock using FIFO and weighted average",
      "Apply the lower of cost and net realisable value",
      "Reconcile a stock count to the ledger",
      "Prepare an inventory analysis and disclosure note",
    ],
    exercises:
      "Worked inventory exercises after each module, using one wholesaler's purchase, sales and stock records.",
    finalExam: "30 questions",
    finalPractical:
      "Complete the year-end inventory valuation for a fictional retailer — cost formulas, count reconciliation, write-downs and the inventory note.",
  },
  {
    slug: "internal-controls-and-fraud-prevention",
    title: "Internal Controls & Fraud Prevention",
    image: "assets/course-internal-controls.jpg",
    summary:
      "Protect a business's money and records — design practical controls, separate duties, spot fraud red flags and test whether controls are working.",
    intro:
      "Most frauds and costly errors happen because a simple control was missing or ignored. Learn how to map risks in the finance processes, design controls that fit a small or growing business, and recognise the warning signs of fraud early.",
    objective:
      "By the end of this course, learners will explain the COSO internal control framework, map risks in key finance processes, design preventive and detective controls, apply segregation of duties in small teams, recognise common fraud schemes and red flags, test and document controls, and respond appropriately when fraud is suspected.",
    level: "Intermediate",
    duration: "3.5 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Internal Control Foundations", [
        "What internal control is and why it matters",
        "The COSO framework — five components",
        "Preventive, detective and corrective controls",
        "Manual vs. automated controls",
        "Regulatory context — SOX in the US and internal financial controls in India",
      ]),
      mod(2, "Risk Assessment and Process Mapping", [
        "Identifying risks in finance processes",
        "Mapping procure-to-pay, order-to-cash and payroll",
        "Risk and control matrices",
        "Prioritising high-risk areas",
      ]),
      mod(3, "Designing Key Controls", [
        "Segregation of duties — and what to do in small teams",
        "Authorisation limits and approvals",
        "Reconciliations and independent reviews",
        "Master data controls for vendors, customers and employees",
        "System access and password controls",
      ]),
      mod(4, "Understanding Fraud", [
        "The fraud triangle — pressure, opportunity and rationalisation",
        "Asset misappropriation schemes",
        "Financial statement fraud",
        "Payment, invoice and payroll frauds",
        "Phishing and fake bank-detail change requests",
      ]),
      mod(5, "Detecting Fraud and Red Flags", [
        "Behavioural red flags",
        "Transaction red flags — round amounts, duplicates and unusual timing",
        "Data analytics for fraud detection",
        "Whistleblowing channels",
        "Responding when fraud is suspected",
      ]),
      mod(6, "Testing, Documenting and Improving Controls", [
        "Walkthroughs and control testing",
        "Sampling and evidence",
        "Reporting control deficiencies",
        "Remediation plans",
        "Internal control checklist for small businesses",
      ]),
    ],
    assignments: [
      "Map the purchase-to-payment process and its risks",
      "Build a risk and control matrix",
      "Design segregation of duties for a three-person finance team",
      "Identify red flags in a set of transactions",
      "Test a control and document the results",
      "Write a control improvement plan",
    ],
    exercises:
      "Case-based exercises after each module, using one growing company's finance processes and transaction data.",
    finalExam: "30 questions",
    finalPractical:
      "Review the finance controls of a fictional small business, identify fraud risks and gaps, and present a prioritised control improvement plan.",
  },
  {
    slug: "revenue-recognition",
    title: "Revenue Recognition",
    image: "assets/course-revenue-recognition.jpg",
    summary:
      "Recognise revenue correctly with the five-step model — contracts, performance obligations, transaction price, allocation and timing under IFRS 15, Ind AS 115 and ASC 606.",
    intro:
      "Revenue is the most important number in most financial statements — and one of the easiest to get wrong. Learn the five-step model used worldwide and how to apply it to everyday sales, subscriptions, projects and bundled offers.",
    objective:
      "By the end of this course, learners will apply the five-step revenue model, identify contracts and performance obligations, measure the transaction price including variable consideration, allocate it across obligations, decide whether revenue is recognised over time or at a point in time, record contract assets and liabilities, and prepare clear revenue disclosures.",
    level: "Advanced",
    duration: "3.5 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "The Five-Step Model", [
        "Why a single revenue standard — IFRS 15, Ind AS 115 and ASC 606",
        "Overview of the five steps",
        "Step 1 — identifying the contract with a customer",
        "Contract combinations and modifications",
      ]),
      mod(2, "Performance Obligations", [
        "Step 2 — identifying performance obligations",
        "Distinct goods and services",
        "Bundles, installation and support",
        "Warranties — assurance vs. service warranties",
        "Principal vs. agent",
      ]),
      mod(3, "Transaction Price", [
        "Step 3 — determining the transaction price",
        "Variable consideration — discounts, rebates and bonuses",
        "Constraining estimates",
        "Significant financing components",
        "Non-cash consideration and amounts payable to customers",
      ]),
      mod(4, "Allocation", [
        "Step 4 — allocating the price to performance obligations",
        "Stand-alone selling prices",
        "Estimating prices — adjusted market, cost-plus and residual approaches",
        "Allocating discounts and variable consideration",
      ]),
      mod(5, "Timing of Recognition", [
        "Step 5 — recognising revenue when obligations are satisfied",
        "Over time vs. at a point in time",
        "Measuring progress — output and input methods",
        "Transfer of control and bill-and-hold",
        "Licences, subscriptions and software",
      ]),
      mod(6, "Accounting Entries and Disclosures", [
        "Contract assets, receivables and contract liabilities",
        "Costs of obtaining and fulfilling a contract",
        "Revenue disaggregation and disclosures",
        "Common errors and revenue red flags",
        "Revenue recognition checklist",
      ]),
    ],
    assignments: [
      "Identify performance obligations in a bundled sale",
      "Estimate variable consideration for a rebate scheme",
      "Allocate a transaction price using stand-alone selling prices",
      "Recognise revenue over time on a fixed-price project",
      "Record contract assets and contract liabilities",
      "Draft a revenue disclosure note",
    ],
    exercises:
      "Worked case exercises after each module, covering product sales, software subscriptions and construction-style projects.",
    finalExam: "30 questions",
    finalPractical:
      "Apply the five-step model to a fictional company's customer contracts, prepare the revenue entries for the year and draft the revenue note.",
  },
  {
    slug: "us-accounting",
    title: "US Accounting",
    summary:
      "Keep books the US way — US GAAP, accrual accounting, sales tax, 1099 contractors, entity types and year-end reporting for small businesses.",
    intro:
      "Accounting for a US business follows US GAAP and a tax system built around the entity type. Learn how US books are set up and kept, how sales tax and contractor reporting work, and how the year-end close feeds the business's tax return.",
    objective:
      "By the end of this course, learners will set up a US chart of accounts, record transactions on the accrual basis under US GAAP, handle state sales tax and 1099 reporting, recognise how each entity type is taxed, and prepare year-end financial statements for the tax preparer.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "US GAAP and the US Accounting Environment", [
        "US GAAP and the FASB Accounting Standards Codification",
        "Who uses US GAAP — and when small businesses use tax-basis reporting",
        "The fiscal year and the calendar year",
        "The role of the CPA, enrolled agent and bookkeeper",
        "Cash vs. accrual basis",
      ]),
      mod(2, "Setting Up US Books", [
        "A US chart of accounts",
        "Employer Identification Number (EIN) and Form W-9",
        "Bank and credit card accounts",
        "Opening balances",
        "Document retention",
      ]),
      mod(3, "Sales Tax", [
        "Sales tax is set by states and local governments",
        "Nexus — physical and economic (after Wayfair)",
        "Collecting, recording and filing sales tax",
        "Exempt sales and resale certificates",
        "Sales tax liability accounts",
      ]),
      mod(4, "Contractors and Form 1099", [
        "Employees vs. independent contractors",
        "Collecting Form W-9",
        "Form 1099-NEC and 1099-MISC — who gets one",
        "Reporting thresholds and deadlines",
        "Backup withholding",
      ]),
      mod(5, "Entity Types and Taxes", [
        "Sole proprietorships and Schedule C",
        "Partnerships and multi-member LLCs — Form 1065 and K-1s",
        "S corporations — Form 1120-S and reasonable compensation",
        "C corporations — Form 1120 and the 21% federal rate",
        "Owner's draws, distributions and payroll",
      ]),
      mod(6, "Year-End Close and Reporting", [
        "Adjusting entries — accruals, prepaids and depreciation",
        "Section 179 and bonus depreciation at a glance",
        "Preparing the income statement and balance sheet",
        "The year-end package for the tax preparer",
        "Estimated tax payments",
      ]),
    ],
    assignments: [
      "Set up a chart of accounts for a US small business",
      "Record a month of transactions on the accrual basis",
      "Calculate and record sales tax for multi-state sales",
      "Decide which contractors need a Form 1099-NEC",
      "Prepare year-end adjusting entries and statements",
    ],
    exercises: "Worked US examples after each module, from sales tax to 1099s and year-end entries.",
    finalExam: "30 questions",
    finalPractical:
      "Keep a month of books for a fictional US small business — transactions, sales tax, contractor payments and month-end statements.",
    note:
      "US tax rules, thresholds and forms change, and sales tax rules differ by state. Always check the current IRS guidance and the rules of each state where the business has nexus.",
  },
  {
    slug: "australia-accounting",
    title: "Australia Accounting",
    summary:
      "Keep books for an Australian business — AASB standards, GST and BAS, PAYG, superannuation, company tax and the 30 June year-end.",
    intro:
      "Australian businesses report to the ATO through GST, BAS, PAYG and income tax returns, under accounting standards set by the AASB. Learn how to keep compliant books, prepare a BAS and close the financial year.",
    objective:
      "By the end of this course, learners will set up books for an Australian business, account for GST and prepare a BAS, record PAYG withholding and instalments, account for superannuation, and complete the 30 June year-end for the tax agent.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "The Australian Accounting Environment", [
        "AASB standards and general vs. special purpose reporting",
        "The ATO, ABN and TFN",
        "Business structures — sole trader, partnership, company and trust",
        "The 1 July – 30 June financial year",
        "Record-keeping — five years",
      ]),
      mod(2, "GST", [
        "GST at 10% and registration at $75,000 turnover",
        "Taxable, GST-free and input-taxed supplies",
        "Tax invoices and GST credits",
        "Cash vs. accrual GST accounting",
        "GST accounts in the ledger",
      ]),
      mod(3, "The Business Activity Statement", [
        "Monthly, quarterly and annual BAS",
        "Completing the GST labels",
        "PAYG withholding and PAYG instalments on the BAS",
        "Lodgment and payment due dates",
        "Reconciling the BAS to the ledger",
      ]),
      mod(4, "Payroll Entries and Superannuation", [
        "Recording wages and PAYG withholding",
        "Super guarantee at 12% of ordinary time earnings",
        "Accruing and paying super",
        "Single Touch Payroll in the books",
        "Fringe benefits tax at a glance",
      ]),
      mod(5, "Income Tax for Businesses", [
        "Company tax rates — 25% base rate entities and 30%",
        "Sole traders, partnerships and trusts",
        "Depreciation and the instant asset write-off",
        "Franking credits and dividends",
        "Tax vs. accounting profit",
      ]),
      mod(6, "End of Financial Year", [
        "EOFY checklist",
        "Accruals, prepayments and stock counts",
        "Reconciling GST, PAYG and super",
        "Preparing financial statements",
        "The year-end pack for the tax agent",
      ]),
    ],
    assignments: [
      "Classify supplies as taxable, GST-free or input-taxed",
      "Prepare a quarterly BAS from the ledger",
      "Record a payroll with PAYG and super",
      "Calculate company tax for a base rate entity",
      "Complete an EOFY checklist",
    ],
    exercises: "Worked Australian examples after each module, from GST and BAS to super and year-end.",
    finalExam: "30 questions",
    finalPractical:
      "Keep a quarter's books for a fictional Australian business and prepare its BAS.",
    note:
      "GST, PAYG, super and company tax rules are set by Australian law and ATO guidance and change over time. Always check the current ATO guidance before lodging.",
  },
  {
    slug: "uae-accounting",
    title: "UAE Accounting",
    summary:
      "Keep compliant books in the UAE — IFRS, VAT at 5%, Corporate Tax at 9%, free zones, record-keeping and e-invoicing readiness.",
    intro:
      "UAE businesses keep IFRS books and comply with VAT and Corporate Tax administered by the Federal Tax Authority. Learn how to set up books, account for VAT, prepare for Corporate Tax and keep the records the FTA expects.",
    objective:
      "By the end of this course, learners will keep IFRS-based books for a UAE business, account for VAT and prepare a VAT return, work out Corporate Tax, apply the main free zone and small business rules, and keep compliant records.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "The UAE Accounting Environment", [
        "IFRS as the accounting framework",
        "Mainland, free zone and offshore companies",
        "The Federal Tax Authority and EmaraTax",
        "Financial years and currency (AED)",
        "Audit requirements",
      ]),
      mod(2, "VAT", [
        "VAT at 5% — standard, zero-rated and exempt supplies",
        "Mandatory and voluntary registration thresholds",
        "Tax invoices and input VAT recovery",
        "Reverse charge on imports and services",
        "VAT accounts in the ledger",
      ]),
      mod(3, "VAT Returns", [
        "Tax periods and return deadlines",
        "Completing the VAT return boxes",
        "Reconciling VAT to the ledger",
        "Voluntary disclosures and penalties",
      ]),
      mod(4, "Corporate Tax", [
        "Corporate Tax at 0% and 9%",
        "Who is a taxable person",
        "From accounting profit to taxable income",
        "Small business relief",
        "Registration, returns and payment",
      ]),
      mod(5, "Free Zones and Special Cases", [
        "Qualifying free zone persons and 0% on qualifying income",
        "Exempt persons",
        "Transfer pricing and related parties",
        "Withholding and other taxes at a glance",
      ]),
      mod(6, "Records, E-Invoicing and Year-End", [
        "Record-keeping periods",
        "The UAE e-invoicing programme",
        "Year-end close under IFRS",
        "Audited financial statements",
        "UAE compliance checklist",
      ]),
    ],
    assignments: [
      "Classify supplies for VAT",
      "Prepare a quarterly VAT return",
      "Calculate Corporate Tax for a mainland company",
      "Decide whether a free zone company has qualifying income",
      "Prepare a year-end compliance checklist",
    ],
    exercises: "Worked UAE examples after each module, from VAT to Corporate Tax and free zones.",
    finalExam: "30 questions",
    finalPractical:
      "Keep a quarter's books for a fictional Dubai trading company, prepare its VAT return and estimate its Corporate Tax.",
    note:
      "UAE VAT and Corporate Tax rules are set by federal law, Cabinet and Ministerial decisions and FTA guidance, and continue to develop. Always check the latest FTA guidance before filing.",
  },
  {
    slug: "property-accounting-in-india",
    title: "Property Accounting in India",
    summary:
      "Account for real estate in India — rental income, developers' project accounting, Ind AS 115, RERA, GST on property and TDS.",
    intro:
      "Property businesses in India — landlords, developers and property managers — face special accounting and tax rules. Learn how to account for rent and property costs, how developers recognise revenue under Ind AS 115 and RERA, and how GST and TDS apply.",
    objective:
      "By the end of this course, learners will account for rental property and its income and expenses, apply Ind AS 115 and RERA rules to a real estate project, handle GST and TDS on property transactions, and account for investment property.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Property Businesses in India", [
        "Landlords, developers, builders and property managers",
        "Frameworks — Ind AS and Accounting Standards",
        "Property as inventory, fixed asset or investment property",
        "Key documents — sale deeds, agreements and allotment letters",
      ]),
      mod(2, "Rental Property Accounting", [
        "Recording rent and security deposits",
        "Property tax, maintenance and repairs",
        "Depreciation of buildings",
        "Rental income in the income tax return",
        "TDS on rent",
      ]),
      mod(3, "Real Estate Projects and RERA", [
        "Project registration under RERA",
        "The 70% designated bank account",
        "Project cost accounting — land, construction and borrowing costs",
        "Withdrawals and certification",
      ]),
      mod(4, "Revenue Recognition for Developers", [
        "Ind AS 115 for real estate",
        "Over time vs. point in time",
        "Measuring progress",
        "Customer advances and contract balances",
      ]),
      mod(5, "GST and TDS on Property", [
        "GST on under-construction residential and commercial property",
        "No GST on completed property sold after the completion certificate",
        "GST on commercial rent",
        "TDS on purchase of immovable property",
        "Stamp duty and registration costs",
      ]),
      mod(6, "Investment Property and Reporting", [
        "Investment property under Ind AS 40",
        "Fair value disclosure",
        "Year-end reporting for property businesses",
        "Property accounting checklist",
      ]),
    ],
    assignments: [
      "Record a year of rental transactions",
      "Allocate costs to a real estate project",
      "Apply Ind AS 115 to flat sales",
      "Work out GST and TDS on property sales",
      "Classify property holdings",
    ],
    exercises: "Worked examples after each module for landlords and developers.",
    finalExam: "30 questions",
    finalPractical:
      "Account for a fictional developer's project and a landlord's rental portfolio for one month — costs, revenue, GST, TDS and RERA.",
    note:
      "Property tax rules, GST rates and RERA requirements are set by central and state law and change over time. The Income-tax Act, 2025 applies from 1 April 2026. Always check the current law and your state's RERA rules.",
  },
  {
    slug: "property-accounting-in-the-us",
    title: "Property Accounting in the US",
    summary:
      "Account for US rental and commercial property — rent rolls, security deposits, trust accounting, depreciation, CAM reconciliations and Schedule E.",
    intro:
      "Property owners and managers in the US need accurate books for tenants, owners, lenders and the IRS. Learn how to account for rental income and expenses, hold tenant money correctly, depreciate property and report rental activity.",
    objective:
      "By the end of this course, learners will keep books for residential and commercial rental property, manage rent rolls, security deposits and trust accounts, calculate depreciation, prepare CAM reconciliations, and prepare the information for Schedule E and owner statements.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "US Property Accounting Basics", [
        "Owners, property managers and tenants",
        "Residential vs. commercial property",
        "A property chart of accounts",
        "Accounting by property",
      ]),
      mod(2, "Rent, Rent Rolls and Receivables", [
        "The rent roll",
        "Recording rent, late fees and concessions",
        "Prepaid rent and delinquencies",
        "Lessor accounting under ASC 842 at a glance",
      ]),
      mod(3, "Security Deposits and Trust Accounting", [
        "Security deposits as liabilities",
        "State rules on holding and returning deposits",
        "Trust accounts for property managers",
        "Three-way reconciliation",
      ]),
      mod(4, "Property Expenses and Depreciation", [
        "Repairs vs. improvements",
        "Depreciation — 27.5 years residential, 39 years commercial",
        "Land isn't depreciated",
        "Property taxes and insurance",
      ]),
      mod(5, "Commercial Leases and CAM", [
        "Gross, net and triple-net leases",
        "Common area maintenance (CAM) estimates",
        "Year-end CAM reconciliation",
        "Tenant improvement allowances",
      ]),
      mod(6, "Owner Reporting and Taxes", [
        "Monthly owner statements",
        "Form 1099-MISC for rents and 1099-NEC for vendors",
        "Schedule E for rental income",
        "Like-kind (1031) exchanges at a glance",
        "Property accounting checklist",
      ]),
    ],
    assignments: [
      "Build a rent roll",
      "Record a month of rent and deposits",
      "Prepare a three-way trust reconciliation",
      "Calculate depreciation for a rental building",
      "Prepare a CAM reconciliation",
    ],
    exercises: "Worked examples after each module for residential and commercial property.",
    finalExam: "30 questions",
    finalPractical:
      "Keep a month of books for a fictional property manager — rent, deposits, trust reconciliation and owner statements.",
    note:
      "Security deposit and trust accounting rules differ by state, and IRS rules on depreciation and rental reporting change. Always check current IRS guidance and your state's landlord-tenant and real estate licensing rules.",
  },
]
