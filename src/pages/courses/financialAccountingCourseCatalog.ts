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
]
