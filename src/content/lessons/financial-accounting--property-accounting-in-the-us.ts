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
  tip,
} from "@/lib/lessonKit"

// Property Accounting in the US — lesson screens by module index (0 = Module
// 1). The course follows Lone Star Property Management LLC in San Antonio,
// Texas, which manages a residential fourplex owned by Dr. Anita Shah and a
// commercial strip center, Mission Plaza, owned by an LLC. Rules: residential
// rental buildings 27.5 years and nonresidential 39 years straight-line
// (MACRS, mid-month); Texas security deposit refund within 30 days of
// surrender; Form 1099-MISC threshold $2,000 for payments after 2025.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — US Property Accounting Basics",
      ["Property accounting tracks each building, owner and tenant separately. This module introduces the players and the chart of accounts through Lone Star Property Management."],
      ["Identify owners, managers and tenants", "Compare residential and commercial property", "Build a property chart of accounts", "Account by property"],
    ),
    screen(
      "Meet Lone Star Property Management",
      p("Lone Star Property Management LLC manages rental property in San Antonio for a fee. Rachel is its accounting manager."),
      table(
        ["Property", "Owner", "Type", "Units"],
        [
          ["Alamo Heights fourplex", "Dr. Anita Shah", "Residential", "4 apartments"],
          ["Mission Plaza", "Mission Plaza LLC", "Commercial strip center", "4 retail tenants, 12,000 sq ft"],
        ],
      ),
    ),
    screen(
      "Owners, managers and tenants",
      compare(
        ["Owner's books", "The property's income, expenses, assets and loans.", ["Rent revenue", "Depreciation", "Mortgage"]],
        ["Manager's books", "The manager's own business plus money it holds in trust.", ["Management fee revenue", "Trust account liabilities to owners and tenants"]],
      ),
      note("Rent collected by Lone Star belongs to the owners — it's held in trust, not Lone Star's revenue."),
    ),
    screen(
      "Residential vs. commercial",
      table(
        ["Feature", "Residential", "Commercial"],
        [
          ["Lease length", "Usually 6–12 months", "Often 3–10 years"],
          ["Expenses paid by", "Owner", "Often tenants under net leases"],
          ["Tax depreciation", "27.5 years", "39 years"],
          ["Extras", "Security deposits, late fees", "CAM charges, tenant improvements"],
        ],
      ),
    ),
    screen(
      "A property chart of accounts",
      table(
        ["Range", "Accounts"],
        [
          ["1000s", "Operating cash, trust cash, tenant receivables, buildings, land"],
          ["2000s", "Security deposits held, prepaid rent, mortgage, owner payable"],
          ["4000s", "Rent, late fees, CAM recoveries, other income"],
          ["6000s", "Repairs, utilities, insurance, property tax, management fees, depreciation"],
        ],
      ),
      tip("Class by property", "Rachel tags every transaction with a property class so each building has its own income statement."),
    ),
    mistakes(
      ["Recording owners' rent as the manager's revenue", "It's held in trust."],
      ["Mixing properties in one ledger without tags", "Account by property."],
      ["Using residential lives for commercial buildings", "Commercial is 39 years."],
      ["Treating deposits as income", "They're liabilities."],
    ),
    check(
      1,
      q("Whose revenue is rent collected by Lone Star for Dr. Shah?", ["Dr. Shah's", "Lone Star's", "The tenant's", "The bank's"], 0, "Lone Star holds it in trust."),
      q("What's the tax depreciation life of a residential rental building?", ["27.5 years", "39 years", "15 years", "40 years"], 0, "MACRS straight-line."),
      q("What's Lone Star's own revenue?", ["Management fees", "All rent collected", "Security deposits", "CAM charges"], 0, "For managing property."),
      q("Which property type typically has CAM charges?", ["Commercial", "Residential", "Both equally", "Neither"], 0, "Common area maintenance."),
      q("How does Rachel produce a separate income statement for each building?", ["By tagging transactions with a property class", "By opening a new company for each", "She can't", "By using cash basis"], 0, "Accounting by property."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Whose books?",
          ["Lone Star collects $5,000 rent for Dr. Shah and charges an 8% fee. What's in Lone Star's revenue?"],
          ["Only the $400 management fee. The $5,000 is owed to Dr. Shah less the fee."],
        ],
        [
          "Exercise 2 — Classify",
          ["Assign account ranges: tenant security deposits, property tax, CAM recoveries."],
          ["Deposits 2000s (liability); property tax 6000s; CAM recoveries 4000s."],
        ],
      ),
    ),
    summary(
      ["Owners, managers and tenants", "Residential vs. commercial", "Property chart of accounts", "Accounting by property", "Lone Star's portfolio"],
      "Keep each property — and each party's money — separate from day one.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Rent, Rent Rolls and Receivables",
      ["Rachel maintains the rent roll and records each month's charges and receipts."],
      ["Build a rent roll", "Record rent, late fees and concessions", "Handle prepaid rent and delinquencies", "Apply ASC 842 lessor basics"],
    ),
    screen(
      "The rent roll",
      table(
        ["Unit", "Tenant", "Monthly rent", "Deposit held", "Lease ends"],
        [
          ["A", "J. Garcia", "$1,500", "$1,500", "31 May 2027"],
          ["B", "L. Nguyen", "$1,450", "$1,400", "31 Jan 2027"],
          ["C", "M. Brown", "$1,600", "$1,500", "31 Aug 2027"],
          ["D", "Vacant", "—", "—", "—"],
        ],
      ),
      p("The rent roll is the master list of units, tenants, rents, deposits and lease dates. Lenders and buyers ask for it."),
    ),
    screen(
      "Recording rent",
      p("On the 1st, charge each tenant; when they pay, record the receipt."),
      journal([["Tenant receivables", "4,550", ""], ["Rent revenue", "", "4,550"]], "4,550"),
      journal([["Trust cash", "4,550", ""], ["Tenant receivables", "", "4,550"]], "4,550"),
    ),
    screen(
      "Late fees, prepaid rent and delinquencies",
      bullets(
        "Late fees are other income when charged under the lease — Texas limits them to a reasonable amount stated in the lease.",
        "Rent paid before it's due is prepaid rent — a liability until the month starts.",
        "Unpaid rent stays in receivables; review an aging report each month and reserve or write off amounts unlikely to be collected.",
      ),
      example([["Unit C rent paid on the 8th", "$1,600"], ["Late fee in the lease", "$75"]], ["Charged to Unit C", "$1,675"]),
    ),
    screen(
      "Concessions and ASC 842",
      p("Under ASC 842, a lessor with an operating lease recognises rent on a straight-line basis over the lease term, including free-rent periods."),
      example([["12-month lease at $1,500 with 1 month free", "11 × $1,500 = $16,500"], ["Spread over 12 months", ""]], ["Monthly rent revenue", "$1,375"]),
      caution("Tax reporting can differ — rent is generally taxed when received. Keep the GAAP and tax schedules separate."),
    ),
    mistakes(
      ["Recording prepaid rent as revenue", "It's a liability until earned."],
      ["Ignoring the aging report", "Review delinquencies monthly."],
      ["Recording free rent as zero revenue months", "Straight-line it under ASC 842."],
      ["Out-of-date rent rolls", "Update on every move-in and move-out."],
    ),
    check(
      2,
      q("What is a rent roll?", ["The master list of units, tenants, rents, deposits and lease dates", "A bank statement", "A tax return", "A list of repairs"], 0, "Used by lenders and buyers."),
      q("How is rent received before it's due recorded?", ["As prepaid rent — a liability", "As revenue", "As a deposit", "As equity"], 0, "Until earned."),
      q("Under ASC 842, how does a lessor recognise operating lease rent with a free month?", ["Straight-line over the lease term", "Only when cash is received", "All in the first month", "Not at all"], 0, "Spread the concession."),
      q("What's the monthly revenue on a 12-month lease at $1,500 with one month free?", ["$1,375", "$1,500", "$1,250", "$16,500"], 0, "$16,500 ÷ 12."),
      q("How are late fees charged under the lease recorded?", ["As other income", "As security deposits", "As a reduction of rent", "Not recorded"], 0, "When charged."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Proration",
          ["A tenant moves into Unit D on 15 November at $1,500 a month. What's November's rent (30 days)?"],
          ["16 days ÷ 30 × $1,500 = $800."],
        ],
        [
          "Exercise 2 — Prepaid",
          ["Unit A pays December rent of $1,500 on 28 November. Record it."],
          ["Dr Trust cash $1,500 / Cr Prepaid rent $1,500; on 1 December Dr Prepaid rent / Cr Rent revenue."],
        ],
      ),
    ),
    summary(
      ["The rent roll", "Charges and receipts", "Late fees, prepaid rent and aging", "ASC 842 straight-line", "Proration"],
      "A current rent roll is the backbone of property accounting.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Security Deposits and Trust Accounting",
      ["Lone Star holds tenants' deposits and owners' rent in trust. Rachel keeps the trust account in balance."],
      ["Record security deposits as liabilities", "Apply state deposit rules", "Run trust accounts", "Do a three-way reconciliation"],
    ),
    screen(
      "Deposits are liabilities",
      journal([["Trust cash", "1,500", ""], ["Security deposits held", "", "1,500"]], "1,500"),
      p("When a tenant moves out, deductions for unpaid rent or damage beyond normal wear and tear reduce the refund; the deduction becomes the owner's income or receivable recovery."),
    ),
    screen(
      "State rules",
      bullets(
        "Each state sets deposit rules — limits, where deposits are held, interest and refund deadlines.",
        "Texas: refund the deposit, with an itemised list of deductions, within 30 days after the tenant surrenders the premises.",
        "Normal wear and tear can't be deducted.",
      ),
      caution("Other states differ — for example, some cap deposits at one month's rent or require shorter refund periods. Check the state where the property is."),
    ),
    screen(
      "Trust accounts",
      bullets(
        "Property managers hold owners' and tenants' money in a separate trust (escrow) account, as state real estate licensing rules require.",
        "Trust money can't be mixed with the manager's operating funds.",
        "The manager pays itself fees only after they're earned and recorded.",
      ),
    ),
    screen(
      "Three-way reconciliation",
      steps(
        ["Bank", "Reconcile the trust bank statement to the trust cash book."],
        ["Book", "The trust cash book balance after reconciling items."],
        ["Ledgers", "The total of all owner and tenant ledger balances."],
        ["Agree", "All three must equal each other every month."],
      ),
      example([["Adjusted bank balance", "$48,200"], ["Trust cash book", "$48,200"], ["Sum of owner and tenant ledgers", "$48,200"]], ["Result", "In balance"]),
    ),
    mistakes(
      ["Spending deposits", "They belong to tenants until refunded or applied."],
      ["Deducting for normal wear and tear", "It isn't allowed."],
      ["Paying the manager's bills from trust", "Keep trust money separate."],
      ["Only a two-way reconciliation", "Include the ledger total."],
    ),
    check(
      3,
      q("How are tenant security deposits recorded?", ["As liabilities", "As rent revenue", "As owner's equity", "As expenses"], 0, "Until refunded or applied."),
      q("Within how many days must a Texas landlord refund a deposit after surrender?", ["30", "14", "60", "90"], 0, "With an itemised list."),
      q("Which three balances agree in a three-way reconciliation?", ["Adjusted bank, trust cash book, and total of owner and tenant ledgers", "Sales, purchases and payroll", "Rent roll, tax return and budget", "Bank, credit card and loan"], 0, "Every month."),
      q("Can normal wear and tear be deducted from a deposit?", ["No", "Yes", "Only in Texas", "Only for commercial"], 0, "Damage beyond normal wear only."),
      q("Where must a property manager hold owners' rent?", ["In a trust account", "In its operating account", "In cash", "With the tenant"], 0, "Licensing rules."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Move-out",
          ["Unit B moves out with a $1,400 deposit; $250 of carpet damage beyond normal wear. What's refunded?"],
          ["$1,150, with an itemised list, within 30 days. $250 goes to the owner for repairs."],
        ],
        [
          "Exercise 2 — Out of balance",
          ["Bank adjusted $52,100; cash book $52,100; ledgers total $51,850. What does it mean?"],
          ["A ledger posting of $250 is missing or wrong — find and fix it before distributions."],
        ],
      ),
    ),
    summary(
      ["Deposits as liabilities", "State deposit rules", "Trust accounts", "Three-way reconciliation"],
      "Trust money isn't yours — reconcile it three ways every month.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Property Expenses and Depreciation",
      ["Rachel classifies Dr. Shah's property expenses and works out depreciation."],
      ["Tell repairs from improvements", "Calculate depreciation", "Separate land from building", "Account for property taxes and insurance"],
    ),
    screen(
      "Repairs vs. improvements",
      compare(
        ["Repair — expense", "Keeps the property in ordinary working condition.", ["Fixing a leaking pipe", "Repainting a unit"]],
        ["Improvement — capitalise", "A betterment, restoration or adaptation.", ["New roof", "Converting a garage to a unit"]],
      ),
      note("The de minimis safe harbor lets many businesses expense items costing up to $2,500 per invoice or item if they elect it each year."),
    ),
    screen(
      "Separating land",
      p("Land isn't depreciated, so the purchase price is split between land and building — often using the county assessor's ratio."),
      example([["Purchase price of the fourplex", "$600,000"], ["Assessor ratio — land 20%", "$120,000"]], ["Depreciable building", "$480,000"]),
    ),
    screen(
      "Depreciation",
      p("Residential rental buildings are depreciated over 27.5 years and nonresidential buildings over 39 years, straight-line with the mid-month convention."),
      example([["Building", "$480,000"], ["÷ 27.5 years", ""]], ["Full-year depreciation", "$17,455"]),
      example([["Placed in service in March", "9.5 months ÷ 12"], ["× $17,455", ""]], ["First-year depreciation", "$13,818"]),
    ),
    screen(
      "Property taxes and insurance",
      bullets(
        "Property taxes in Texas are billed in the fall and due by 31 January; accrue them monthly.",
        "Insurance paid annually is prepaid and expensed over the policy period.",
        "Many lenders collect both through an escrow account with the mortgage payment.",
      ),
      tip("Monthly accrual", "Rachel accrues one-twelfth of the estimated annual property tax each month so each month's results are accurate."),
    ),
    mistakes(
      ["Depreciating land", "Only the building is depreciated."],
      ["Expensing a new roof", "It's an improvement."],
      ["Using 39 years for a fourplex", "Residential rental is 27.5 years."],
      ["Expensing property tax only when paid", "Accrue it monthly."],
    ),
    check(
      4,
      q("What's the depreciation life of nonresidential real property?", ["39 years", "27.5 years", "15 years", "5 years"], 0, "Straight-line."),
      q("Is replacing an entire roof a repair or an improvement?", ["Improvement", "Repair", "Neither", "Depends on color"], 0, "Capitalise it."),
      q("What's the full-year depreciation on a $480,000 residential building?", ["$17,455", "$12,308", "$48,000", "$9,600"], 0, "$480,000 ÷ 27.5."),
      q("Which convention applies to real property depreciation?", ["Mid-month", "Half-year", "Mid-quarter", "Full-month"], 0, "MACRS real property."),
      q("Up to what amount per invoice or item does the de minimis safe harbor allow expensing for many businesses?", ["$2,500", "$500", "$10,000", "$25,000"], 0, "If elected each year."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Classify: (a) replacing a broken window pane, (b) adding a new bathroom, (c) a $1,800 refrigerator under the de minimis election."],
          ["(a) Repair. (b) Improvement — capitalise. (c) Expense under the de minimis safe harbor."],
        ],
        [
          "Exercise 2 — Commercial depreciation",
          ["Mission Plaza's building cost $1,950,000. What's a full year's depreciation?"],
          ["$1,950,000 ÷ 39 = $50,000."],
        ],
      ),
    ),
    summary(
      ["Repairs vs. improvements", "Land vs. building", "27.5 and 39 years", "Mid-month convention", "Property tax and insurance"],
      "Split land from building and classify every cost as repair or improvement.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Commercial Leases and CAM",
      ["Mission Plaza's tenants pay a share of common area costs. Rachel bills estimates and reconciles them at year-end."],
      ["Compare gross, net and triple-net leases", "Bill CAM estimates", "Reconcile CAM at year-end", "Account for tenant improvement allowances"],
    ),
    screen(
      "Lease types",
      table(
        ["Lease", "Tenant pays"],
        [
          ["Gross", "Rent only — landlord pays operating costs"],
          ["Modified gross", "Rent plus some costs"],
          ["Triple-net (NNN)", "Rent plus a share of property taxes, insurance and common area maintenance"],
        ],
      ),
      note("All four Mission Plaza tenants are on triple-net leases."),
    ),
    screen(
      "CAM estimates",
      p("Each tenant's share is usually its square footage divided by the center's leasable area. Tenants pay monthly estimates."),
      example([["Taco Loco's space", "2,400 sq ft"], ["Center", "12,000 sq ft"]], ["Share", "20%"]),
      example([["Budgeted 2026 CAM", "$90,000"], ["20% share ÷ 12", ""]], ["Monthly estimate", "$1,500"]),
    ),
    screen(
      "Year-end CAM reconciliation",
      example([["Actual 2026 CAM", "$96,000"], ["Taco Loco's 20%", "$19,200"], ["Estimates paid ($1,500 × 12)", "−$18,000"]], ["Balance due from tenant", "$1,200"]),
      steps(
        ["Total actual costs", "Only costs allowed by the lease."],
        ["Allocate", "By each tenant's share."],
        ["Compare", "With estimates paid."],
        ["Bill or credit", "Send each tenant a statement with support."],
      ),
    ),
    screen(
      "Tenant improvement allowances",
      p("When the landlord pays for a tenant's fit-out, it's either the landlord's asset (if the landlord owns the improvements) or a lease incentive reducing rent revenue straight-line over the lease."),
      caution("Read the lease to decide who owns the improvements."),
    ),
    mistakes(
      ["Including capital costs in CAM", "Only lease-allowed operating costs."],
      ["Using the wrong denominator", "Use leasable area as the lease defines it."],
      ["Skipping year-end reconciliation", "Tenants owe or are owed the difference."],
      ["Expensing TI allowances immediately", "Capitalise or treat as a lease incentive."],
    ),
    check(
      5,
      q("What does a triple-net tenant pay besides rent?", ["A share of property taxes, insurance and CAM", "Nothing", "The landlord's mortgage", "Only utilities"], 0, "NNN."),
      q("What's Taco Loco's share of a 12,000 sq ft center for 2,400 sq ft?", ["20%", "25%", "12%", "24%"], 0, "2,400 ÷ 12,000."),
      q("Actual CAM share is $19,200 and estimates paid are $18,000. What's the result?", ["$1,200 due from the tenant", "$1,200 refund to the tenant", "Nothing", "$18,000 due"], 0, "Year-end true-up."),
      q("Under a gross lease, who pays operating costs?", ["The landlord", "The tenant", "The city", "The property manager personally"], 0, "Tenant pays rent only."),
      q("A TI allowance is a lease incentive. How is it treated?", ["As a reduction of rent revenue straight-line over the lease", "As an immediate expense", "As tenant equity", "As a deposit"], 0, "ASC 842."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Refund",
          ["A tenant with a 15% share paid $14,400 of estimates; actual CAM is $88,000. What's the result?"],
          ["15% × $88,000 = $13,200; refund $1,200."],
        ],
        [
          "Exercise 2 — Monthly estimate",
          ["Budget $100,000 for 2027; a tenant's share is 25%. What's the monthly estimate?"],
          ["$25,000 ÷ 12 = $2,083.33."],
        ],
      ),
    ),
    summary(
      ["Gross, net and NNN leases", "CAM shares and estimates", "Year-end reconciliation", "TI allowances"],
      "CAM is fair only if it's calculated exactly as the lease says.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Owner Reporting and Taxes",
      ["Rachel sends owner statements every month and prepares year-end tax information."],
      ["Prepare owner statements", "Issue Forms 1099", "Support Schedule E", "Recognise 1031 exchanges", "Use the property checklist"],
    ),
    screen(
      "The monthly owner statement",
      example([["Rent collected", "$5,350"], ["Late fees", "$75"], ["Less management fee 8% of rent", "−$428"], ["Less repairs", "−$650"]], ["Distribution to Dr. Shah", "$4,347"]),
      bullets(
        "Show beginning balance, receipts, disbursements, distribution and ending balance.",
        "Attach the rent roll and invoices for major repairs.",
      ),
    ),
    screen(
      "Forms 1099",
      table(
        ["Payment", "Form", "Who issues"],
        [
          ["Rents passed to an owner by a property manager", "1099-MISC", "Lone Star to Dr. Shah"],
          ["Payments to repair contractors (non-corporate)", "1099-NEC", "Lone Star, for the owners"],
        ],
      ),
      p("For payments made after 31 December 2025, the threshold is $2,000 a year."),
    ),
    screen(
      "Schedule E",
      p("Individual owners report rental income and expenses on Schedule E of Form 1040 — rents, repairs, insurance, taxes, management fees, mortgage interest and depreciation, by property."),
      caution("Rental losses are usually passive. Owners who actively participate may deduct up to $25,000 of losses, phased out between $100,000 and $150,000 of modified AGI."),
    ),
    screen(
      "1031 exchanges",
      bullets(
        "A like-kind exchange defers gain when investment or business real property is exchanged for other real property.",
        "The replacement property must be identified within 45 days and acquired within 180 days.",
        "A qualified intermediary holds the sale proceeds.",
        "Since 2018, only real property qualifies.",
      ),
    ),
    screen(
      "Lone Star's checklist",
      table(
        ["Area", "Check"],
        [
          ["Rent roll", "Up to date"],
          ["Trust", "Three-way reconciliation every month"],
          ["Deposits", "Refunds within state deadlines"],
          ["CAM", "Year-end reconciliation sent"],
          ["Owners", "Monthly statements and year-end 1099-MISC"],
          ["Vendors", "W-9s on file; 1099-NEC where needed"],
        ],
      ),
    ),
    mistakes(
      ["Distributing before the trust reconciles", "Reconcile first."],
      ["Missing 1099-MISC for owners", "Managers report rents paid to owners."],
      ["Missing the 45-day identification", "The exchange fails."],
      ["Ignoring passive loss limits", "Check the $25,000 allowance."],
    ),
    check(
      6,
      q("Which form does Lone Star issue to Dr. Shah for rents?", ["1099-MISC", "1099-NEC", "W-2", "1099-INT"], 0, "Rents passed to the owner."),
      q("Where do individual owners report rental income?", ["Schedule E", "Schedule C", "Form 941", "Form 1120"], 0, "Of Form 1040."),
      q("Within how many days must 1031 replacement property be identified?", ["45", "30", "180", "90"], 0, "Acquired within 180."),
      q("What's the maximum loss allowance for active participants?", ["$25,000", "$10,000", "$100,000", "No limit"], 0, "Phased out from $100,000 MAGI."),
      q("Since 2018, what property qualifies for a 1031 exchange?", ["Only real property", "Any business property", "Vehicles", "Stocks"], 0, "TCJA change."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Owner statement",
          ["Rent collected $6,000, management fee 8%, repairs $900. What's the distribution?"],
          ["$6,000 − $480 − $900 = $4,620."],
        ],
        [
          "Exercise 2 — 1031 timing",
          ["Mission Plaza LLC sells a building on 1 March. By when must it identify and buy the replacement?"],
          ["Identify by 15 April (45 days) and buy by 28 August (180 days)."],
        ],
      ),
    ),
    summary(
      ["Owner statements", "Forms 1099", "Schedule E and passive losses", "1031 exchanges", "The checklist"],
      "Owners judge a manager by clear statements and on-time distributions.",
    ),
  ],
}

export default lessons
