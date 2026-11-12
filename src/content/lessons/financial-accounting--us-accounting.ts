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

// US Accounting — lesson screens by module index (0 = Module 1). The course
// follows Bluebird Candle Co. LLC, a candle maker in Austin, Texas, owned by
// Elena (60%) and Marcus (40%) and taxed as an S corporation. Figures are for
// 2026: Form 1099-NEC/MISC threshold $2,000 for payments after 31 December
// 2025, 100% bonus depreciation for property acquired after 19 January 2025,
// Texas sales tax 6.25% state plus up to 2% local (8.25% in Austin).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — US GAAP and the US Accounting Environment",
      ["US businesses keep books under US GAAP or a tax basis, and their tax return depends on the entity type. This module introduces the US environment through Bluebird Candle Co."],
      ["Explain what US GAAP and the FASB Codification are", "Know when small businesses use tax-basis books", "Choose a fiscal year", "Know who does what — CPA, EA and bookkeeper", "Tell cash and accrual basis apart"],
    ),
    screen(
      "Meet Bluebird Candle Co.",
      p("Bluebird Candle Co. LLC makes soy candles in Austin, Texas. It sells in its own store, online and wholesale to gift shops. Elena owns 60% and Marcus 40%, and the LLC has elected to be taxed as an S corporation. Megan keeps the books."),
      table(
        ["Sales channel", "Customers", "Typical month"],
        [
          ["Austin store", "Walk-in shoppers", "$36,000"],
          ["Online", "Customers in many states", "$9,000"],
          ["Wholesale", "Gift shops that resell", "$6,500"],
        ],
      ),
    ),
    screen(
      "US GAAP and the Codification",
      bullets(
        "US GAAP is set by the Financial Accounting Standards Board (FASB).",
        "All authoritative GAAP is organized in the FASB Accounting Standards Codification (ASC) — for example, ASC 606 for revenue and ASC 842 for leases.",
        "Public companies must follow US GAAP; the SEC oversees their reporting.",
        "Private companies can use certain simpler alternatives developed by the Private Company Council.",
      ),
    ),
    screen(
      "Tax-basis books",
      compare(
        ["US GAAP", "Used when lenders, investors or auditors require it.", ["Accrual basis", "Full disclosures"]],
        ["Income-tax basis", "Many small businesses keep books close to the tax return.", ["Simpler", "Matches the return", "Not GAAP — differences must be known"]],
      ),
      note("Bluebird keeps accrual books because its bank requires GAAP-based statements for its equipment loan, and its CPA adjusts to the tax return at year-end."),
    ),
    screen(
      "Cash vs. accrual",
      p("Under the accrual basis, revenue is recorded when earned and expenses when incurred. Under the cash basis, they're recorded when cash moves."),
      example([["Wholesale invoice dated 18 December", "$4,000"], ["Customer pays on 15 January", ""]], ["Accrual revenue in", "December"]),
      caution("For tax, many small businesses with average gross receipts under an inflation-adjusted limit ($31 million for 2025) can use the cash method — but GAAP statements are always accrual."),
    ),
    screen(
      "Who does what",
      table(
        ["Role", "Typical work"],
        [
          ["Bookkeeper", "Records transactions, reconciles accounts, prepares monthly reports"],
          ["CPA (Certified Public Accountant)", "Licensed by a state; audits, reviews, tax returns and advice"],
          ["Enrolled agent (EA)", "Licensed by the IRS to prepare returns and represent taxpayers"],
        ],
      ),
      p("Most businesses use the calendar year. A fiscal year ending on another month is possible for some entities, but S corporations and partnerships generally use the calendar year."),
    ),
    mistakes(
      ["Calling tax-basis books GAAP", "Tax basis isn't GAAP — label statements correctly."],
      ["Recording revenue when cash arrives in accrual books", "Record it when earned."],
      ["Ignoring the Codification", "ASC topics are the authoritative source."],
      ["Assuming any business can pick any year-end", "S corporations generally use the calendar year."],
    ),
    check(
      1,
      q("Who sets US GAAP?", ["The FASB", "The IRS", "The SEC", "Each state"], 0, "Organized in the Accounting Standards Codification."),
      q("Which ASC topic covers revenue?", ["ASC 606", "ASC 842", "ASC 360", "ASC 740"], 0, "ASC 842 is leases."),
      q("Bluebird invoices $4,000 on 18 December and is paid in January. When is revenue recorded in accrual books?", ["December", "January", "When the bank clears it", "At year-end only"], 0, "When earned."),
      q("Why does Bluebird keep GAAP-based accrual books?", ["Its bank requires them for its loan", "The IRS requires GAAP for all LLCs", "Texas law requires it", "It has no choice of method"], 0, "Lender requirement."),
      q("Who licenses enrolled agents?", ["The IRS", "State boards of accountancy", "The FASB", "The SEC"], 0, "CPAs are licensed by states."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Cash or accrual?",
          ["Bluebird pays December's $650 electricity bill on 10 January. In which month is the expense recorded under (a) accrual, (b) cash?"],
          ["(a) December, when incurred. (b) January, when paid."],
        ],
        [
          "Exercise 2 — Which ASC?",
          ["Which ASC topic would Megan check for Bluebird's store lease?"],
          ["ASC 842, Leases."],
        ],
      ),
    ),
    summary(
      ["US GAAP and the FASB Codification", "Tax-basis vs. GAAP books", "Cash vs. accrual", "Roles — bookkeeper, CPA and EA", "Bluebird Candle Co."],
      "Know which basis your books use — and why — before you record anything.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Setting Up US Books",
      ["Megan sets up Bluebird's books: chart of accounts, tax IDs, bank accounts and opening balances."],
      ["Build a US chart of accounts", "Use the EIN and Form W-9", "Set up bank and card accounts", "Enter opening balances", "Keep records for the right time"],
    ),
    screen(
      "A US chart of accounts",
      table(
        ["Range", "Type", "Bluebird examples"],
        [
          ["1000s", "Assets", "Checking, accounts receivable, inventory, equipment"],
          ["2000s", "Liabilities", "Accounts payable, sales tax payable, payroll liabilities, equipment loan"],
          ["3000s", "Equity", "Members' capital, distributions, retained earnings"],
          ["4000s", "Revenue", "Store sales, online sales, wholesale sales"],
          ["5000s", "Cost of goods sold", "Wax, wicks, jars, fragrance"],
          ["6000s", "Operating expenses", "Rent, wages, payroll taxes, utilities"],
        ],
      ),
      tip("Map to the tax return", "Megan names expense accounts to match lines on Form 1120-S, so the CPA's year-end mapping is quick."),
    ),
    screen(
      "EIN and Form W-9",
      bullets(
        "An Employer Identification Number (EIN) is the business's federal tax ID, issued free by the IRS.",
        "Bluebird uses its EIN on payroll filings, its tax return and Forms 1099.",
        "Form W-9 is how a payee gives its name, entity type and taxpayer ID to a payer.",
      ),
      note("Bluebird gives its W-9 to wholesale customers and collects W-9s from its contractors."),
    ),
    screen(
      "Opening balances",
      example([["Checking", "$42,000"], ["Inventory", "$18,500"], ["Equipment", "$24,000"], ["Equipment loan", "−$20,000"]], ["Members' equity", "$64,500"]),
      journal(
        [
          ["Checking", "42,000", ""],
          ["Inventory", "18,500", ""],
          ["Equipment", "24,000", ""],
          ["Equipment loan", "", "20,000"],
          ["Members' equity", "", "64,500"],
        ],
        "84,500",
      ),
    ),
    screen(
      "Bank, cards and separation",
      steps(
        ["Business accounts only", "Keep business money out of personal accounts."],
        ["One ledger account per bank or card", "Reconcile each monthly."],
        ["Payment processors", "Record gross sales and processor fees separately."],
      ),
    ),
    screen(
      "Keeping records",
      table(
        ["Record", "Keep at least"],
        [
          ["Most income tax records", "3 years from filing"],
          ["Employment tax records", "4 years"],
          ["Records for a bad-debt or worthless-securities claim", "7 years"],
          ["Asset records", "Until 3 years after the year you dispose of the asset"],
        ],
      ),
    ),
    mistakes(
      ["Mixing personal and business spending", "Use business accounts only."],
      ["Recording deposits net of processor fees", "Record gross sales and fees separately."],
      ["Discarding asset records too soon", "Keep them until 3 years after disposal."],
      ["Using an owner's SSN for the business", "Use the EIN."],
    ),
    check(
      2,
      q("What is an EIN?", ["The business's federal tax ID", "A state sales tax permit", "A bank account number", "A business license"], 0, "Issued free by the IRS."),
      q("What does Form W-9 do?", ["Gives a payer the payee's name and taxpayer ID", "Reports wages", "Files sales tax", "Registers an LLC"], 0, "Used before paying contractors."),
      q("What's Bluebird's opening members' equity?", ["$64,500", "$84,500", "$20,000", "$42,000"], 0, "Assets $84,500 − loan $20,000."),
      q("How long should employment tax records be kept?", ["At least 4 years", "1 year", "3 months", "Forever"], 0, "IRS guidance."),
      q("How should card sales be recorded?", ["Gross sales and processor fees separately", "Net deposit only", "Only fees", "Not at all"], 0, "So revenue isn't understated."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Assign account ranges to: sales tax payable, fragrance oil, store rent, wholesale sales."],
          ["Sales tax payable 2000s; fragrance oil 5000s (COGS); store rent 6000s; wholesale sales 4000s."],
        ],
        [
          "Exercise 2 — Processor deposit",
          ["Stripe deposits $9,730 for $10,000 of online sales. What's recorded?"],
          ["Sales $10,000, processor fees $270, cash $9,730."],
        ],
      ),
    ),
    summary(
      ["Chart of accounts", "EIN and W-9", "Opening balances", "Bank and card discipline", "Record retention"],
      "A clean setup makes every month and every tax return easier.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Sales Tax",
      ["The US has no national sales tax — states and local governments set it. Megan handles Bluebird's Texas sales tax and checks its out-of-state obligations."],
      ["Explain who sets sales tax", "Apply physical and economic nexus", "Collect and record sales tax", "Handle exempt sales", "File and pay on time"],
    ),
    screen(
      "State and local sales tax",
      bullets(
        "Sales tax is imposed by states and often cities, counties and special districts.",
        "Texas has a 6.25% state rate plus up to 2% local tax — 8.25% in Austin.",
        "A few states, such as Oregon and Montana, have no statewide sales tax.",
        "The seller collects the tax from the customer and pays it to the state.",
      ),
    ),
    screen(
      "Nexus",
      p("A business must collect a state's sales tax only if it has nexus — a sufficient connection — with that state."),
      compare(
        ["Physical nexus", "A store, office, warehouse, employees or inventory in the state.", ["Bluebird in Texas"]],
        ["Economic nexus", "Sales into the state above a threshold, allowed since South Dakota v. Wayfair (2018).", ["Many states use $100,000 of sales", "Texas and California use $500,000"]],
      ),
      caution("Thresholds and what counts toward them differ by state. Megan tracks online sales by state every month."),
    ),
    screen(
      "Recording a month's store sales",
      example([["Taxable store sales", "$36,000"], ["Austin rate", "× 8.25%"]], ["Sales tax collected", "$2,970"]),
      journal(
        [
          ["Cash", "38,970", ""],
          ["Store sales", "", "36,000"],
          ["Sales tax payable", "", "2,970"],
        ],
        "38,970",
      ),
      note("Sales tax isn't revenue — it's a liability until paid to the state."),
    ),
    screen(
      "Exempt sales",
      bullets(
        "Sales for resale — a gift shop buying candles to resell gives a resale certificate.",
        "Sales to exempt organizations, with an exemption certificate.",
        "Keep every certificate on file in case of audit.",
      ),
    ),
    screen(
      "Filing and paying",
      steps(
        ["Get a permit", "Register with the state before collecting tax."],
        ["File returns", "Monthly, quarterly or annually as the state assigns."],
        ["Texas due date", "The 20th of the month after the reporting period."],
        ["Reconcile", "Sales tax payable should equal the next return."],
      ),
      journal([["Sales tax payable", "2,970", ""], ["Cash", "", "2,970"]], "2,970"),
    ),
    mistakes(
      ["Recording sales tax as revenue", "It's a liability."],
      ["Ignoring economic nexus", "Track sales by state."],
      ["Selling tax-free without a certificate", "Keep resale certificates."],
      ["Late filing", "Texas returns are due on the 20th."],
    ),
    check(
      3,
      q("Who sets sales tax in the US?", ["States and local governments", "The IRS", "The FASB", "Congress for all states"], 0, "There's no national sales tax."),
      q("What's the combined sales tax rate in Austin?", ["8.25%", "6.25%", "10%", "2%"], 0, "6.25% state + 2% local."),
      q("Which case allowed economic nexus?", ["South Dakota v. Wayfair (2018)", "Quill (1992)", "Marbury v. Madison", "Brown v. Board"], 0, "Overturned Quill's physical presence rule."),
      q("What's the sales tax on $36,000 of Austin store sales?", ["$2,970", "$2,250", "$720", "$3,600"], 0, "$36,000 × 8.25%."),
      q("How is sales tax collected shown in the books?", ["As a liability", "As revenue", "As an expense", "As equity"], 0, "Sales tax payable."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Wholesale",
          ["A Dallas gift shop buys $3,000 of candles to resell and gives a resale certificate. What tax does Bluebird charge?"],
          ["None — it's a sale for resale. Keep the certificate."],
        ],
        [
          "Exercise 2 — Nexus check",
          ["Bluebird's online sales to Florida customers reach $85,000 this year. Florida's threshold is $100,000. Must it collect Florida tax?"],
          ["Not yet — but keep tracking. Register once it crosses the threshold."],
        ],
      ),
    ),
    summary(
      ["State and local sales tax", "Physical and economic nexus", "Recording sales tax", "Exempt sales and certificates", "Filing and paying"],
      "Sales tax belongs to the state — collect it, record it as a liability and pay it on time.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Contractors and Form 1099",
      ["Bluebird pays several contractors. Megan decides who's a contractor and who needs a Form 1099."],
      ["Tell employees and contractors apart", "Collect Form W-9", "Decide who gets a 1099-NEC or 1099-MISC", "Apply thresholds and deadlines", "Apply backup withholding"],
    ),
    screen(
      "Employee or contractor?",
      p("The IRS looks at the whole relationship — behavioral control, financial control and the relationship of the parties."),
      compare(
        ["Employee", "The business controls what is done and how.", ["Payroll taxes withheld", "Form W-2"]],
        ["Independent contractor", "Controls how the work is done; has their own business.", ["No withholding", "Form 1099-NEC if over the threshold"]],
      ),
      caution("Misclassifying employees as contractors can bring back payroll taxes, penalties and interest. Some states apply stricter tests."),
    ),
    screen(
      "Collect a W-9 first",
      p("Before paying a contractor, Megan collects a Form W-9 with the payee's name, entity type and taxpayer ID. If a payee won't give a taxpayer ID, backup withholding at 24% applies."),
    ),
    screen(
      "Which form?",
      table(
        ["Payment", "Form"],
        [
          ["Services by a non-employee (photographer, designer)", "1099-NEC"],
          ["Legal services by an attorney — even a corporation", "1099-NEC"],
          ["Rent paid to a landlord", "1099-MISC"],
          ["Payments to most corporations", "Generally none"],
          ["Card and payment-app payments", "None from you — the processor reports them on Form 1099-K"],
        ],
      ),
    ),
    screen(
      "Thresholds and deadlines",
      bullets(
        "For payments made after 31 December 2025, the 1099-NEC and 1099-MISC threshold rose from $600 to $2,000 a year.",
        "Form 1099-NEC is due to the recipient and the IRS by January 31.",
        "Form 1099-MISC is due to recipients by January 31; paper filing with the IRS by February 28, or March 31 if filed electronically.",
      ),
      table(
        ["Bluebird payee in 2026", "Paid", "Form"],
        [
          ["Photographer (individual)", "$2,400", "1099-NEC"],
          ["Web designer (individual)", "$1,800", "None — under $2,000"],
          ["Cleaning company, Inc.", "$5,000", "None — corporation"],
          ["Attorney's firm", "$3,000", "1099-NEC — legal services"],
        ],
      ),
    ),
    mistakes(
      ["Paying contractors before getting a W-9", "Collect it first."],
      ["Using the old $600 threshold for 2026 payments", "It's $2,000 for payments after 2025."],
      ["Skipping attorneys because they're incorporated", "Legal services are reportable."],
      ["Issuing 1099s for card payments", "The processor reports those."],
    ),
    check(
      4,
      q("What's the 1099-NEC threshold for payments made in 2026?", ["$2,000", "$600", "$10,000", "$1,000"], 0, "Raised from $600."),
      q("By when is Form 1099-NEC due to the IRS?", ["January 31", "March 15", "April 15", "June 30"], 0, "Also to the recipient."),
      q("Which form reports rent paid to a landlord?", ["1099-MISC", "1099-NEC", "W-2", "1099-K"], 0, "Rents are on 1099-MISC."),
      q("What's the backup withholding rate?", ["24%", "10%", "15.3%", "37%"], 0, "If no taxpayer ID is given."),
      q("Does Bluebird issue a 1099-NEC to its incorporated attorney's firm for legal services?", ["Yes", "No", "Only if over $10,000", "Only in Texas"], 0, "Attorneys are an exception."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Who gets a 1099?",
          ["2026 payments: bookkeeper (individual) $6,000; candle-jar supplier (LLC taxed as partnership) $30,000 for goods; landlord (individual) $24,000. Which forms?"],
          ["Bookkeeper: 1099-NEC. Supplier: none — payments for goods aren't reported. Landlord: 1099-MISC for rent."],
        ],
        [
          "Exercise 2 — Missing TIN",
          ["A new contractor refuses to give a taxpayer ID and is owed $3,000. What should Megan do?"],
          ["Apply 24% backup withholding — $720 — and remit it to the IRS."],
        ],
      ),
    ),
    summary(
      ["Employee vs. contractor", "W-9 first", "1099-NEC vs. 1099-MISC", "$2,000 threshold from 2026", "Backup withholding"],
      "Collect a W-9 before the first payment, and track totals by payee all year.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Entity Types and Taxes",
      ["How a US business is taxed depends on its entity type. Megan explains Bluebird's S corporation status and compares other types."],
      ["Recognise sole proprietorships and Schedule C", "Understand partnerships and K-1s", "Apply S corporation rules", "Know the C corporation rate", "Record owner payments correctly"],
    ),
    screen(
      "The main entity types",
      table(
        ["Entity", "Federal return", "Who pays income tax"],
        [
          ["Sole proprietorship / single-member LLC", "Schedule C with Form 1040", "The owner"],
          ["Partnership / multi-member LLC", "Form 1065", "The partners, via K-1s"],
          ["S corporation (or LLC electing S)", "Form 1120-S", "The shareholders, via K-1s"],
          ["C corporation", "Form 1120", "The corporation, at 21%"],
        ],
      ),
    ),
    screen(
      "Pass-through entities",
      p("Partnerships and S corporations generally don't pay federal income tax themselves. Their income passes through to the owners on Schedule K-1, whether or not it's distributed."),
      example([["Bluebird's ordinary business income", "$120,000"], ["Elena's share — 60%", "$72,000"]], ["Marcus's share — 40%", "$48,000"]),
    ),
    screen(
      "S corporation rules",
      bullets(
        "Shareholder-employees must be paid reasonable compensation through payroll before taking distributions.",
        "Distributions must be in proportion to ownership.",
        "Elena works full time in the business, so she's paid a $60,000 salary through payroll.",
      ),
      caution("Paying no salary and taking only distributions is a common IRS audit issue."),
    ),
    screen(
      "C corporations",
      example([["C corporation taxable income", "$100,000"], ["Federal rate", "× 21%"]], ["Federal income tax", "$21,000"]),
      p("Dividends paid later are taxed again to the shareholders — so-called double taxation."),
    ),
    screen(
      "Recording owner payments",
      table(
        ["Entity", "Owner takes money as", "Recorded as"],
        [
          ["Sole proprietorship", "Owner's draw", "Equity — not an expense"],
          ["Partnership", "Guaranteed payments and distributions", "Guaranteed payments are deductible; distributions reduce capital"],
          ["S corporation", "Salary and distributions", "Salary is wages; distributions reduce equity"],
          ["C corporation", "Salary and dividends", "Salary is wages; dividends reduce retained earnings"],
        ],
      ),
      p("Return due dates for calendar-year entities: Forms 1065 and 1120-S by March 15; Form 1120 and individual returns by April 15."),
    ),
    mistakes(
      ["Recording owner draws as expenses", "They're equity."],
      ["Taking S corp distributions without a reasonable salary", "Pay reasonable compensation first."],
      ["Uneven S corp distributions", "They must follow ownership."],
      ["Missing the March 15 deadline", "Forms 1065 and 1120-S are due then."],
    ),
    check(
      5,
      q("Which form does Bluebird file as an LLC taxed as an S corporation?", ["Form 1120-S", "Form 1065", "Form 1120", "Schedule C"], 0, "Due March 15."),
      q("What's the federal corporate income tax rate for C corporations?", ["21%", "35%", "15%", "9%"], 0, "Flat rate."),
      q("What's Elena's share of $120,000 ordinary income?", ["$72,000", "$48,000", "$60,000", "$120,000"], 0, "60%."),
      q("What must an S corporation pay shareholder-employees before distributions?", ["Reasonable compensation", "Nothing", "Dividends", "Rent"], 0, "Through payroll."),
      q("How is a sole proprietor's draw recorded?", ["As a reduction of equity", "As wages expense", "As revenue", "As a liability"], 0, "Not an expense."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Due dates",
          ["Give the 2026 calendar-year due dates for (a) Bluebird's 1120-S, (b) a C corporation's 1120."],
          ["(a) March 15, 2027. (b) April 15, 2027."],
        ],
        [
          "Exercise 2 — Distribution",
          ["Bluebird distributes $50,000. How much goes to each owner?"],
          ["Elena $30,000 (60%) and Marcus $20,000 (40%)."],
        ],
      ),
    ),
    summary(
      ["Four main entity types", "Pass-through income and K-1s", "S corporation salary and distributions", "21% C corporation rate", "Recording owner payments"],
      "The entity type decides the return, the owner's pay and how equity moves.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Year-End Close and Reporting",
      ["Megan closes Bluebird's 2026 books and prepares the package for its CPA."],
      ["Record year-end adjustments", "Understand Section 179 and bonus depreciation", "Prepare the statements", "Assemble the tax package", "Know estimated tax dates"],
    ),
    screen(
      "Year-end adjustments",
      table(
        ["Adjustment", "Bluebird example", "Entry"],
        [
          ["Accrued expense", "December electricity $650, billed in January", "Dr Utilities / Cr Accrued liabilities"],
          ["Prepaid expense", "$3,600 insurance for 12 months paid 1 October", "Expense $900 for Oct–Dec; prepaid $2,700"],
          ["Depreciation", "Book depreciation on equipment", "Dr Depreciation / Cr Accumulated depreciation"],
          ["Inventory", "Count at 31 December", "Adjust to the count"],
        ],
      ),
    ),
    screen(
      "Book vs. tax depreciation",
      p("Bluebird bought a $12,000 pouring machine in July 2026."),
      compare(
        ["Book (GAAP)", "Straight-line over 5 years.", ["$12,000 ÷ 5 × 6/12 = $1,200 for 2026"]],
        ["Tax", "100% bonus depreciation for property acquired after 19 January 2025.", ["$12,000 deducted in 2026"]],
      ),
      note("Section 179 is another way to expense assets — the 2026 limit is $2,560,000, reduced once purchases exceed $4,090,000. The CPA chooses the best method on the return."),
    ),
    screen(
      "The statements",
      bullets(
        "Income statement — revenue, cost of goods sold, gross profit, expenses and net income.",
        "Balance sheet — assets, liabilities and members' equity.",
        "Statement of changes in equity — contributions, net income and distributions.",
      ),
    ),
    screen(
      "The CPA package",
      steps(
        ["Trial balance", "After adjustments, tied to bank and loan statements."],
        ["Fixed asset list", "Additions with dates and costs."],
        ["1099s issued", "Copies and totals."],
        ["Payroll reports", "W-2 and Form 941 totals."],
        ["Sales tax", "Returns filed and balance owed."],
      ),
    ),
    screen(
      "Estimated taxes",
      p("Owners of pass-through businesses usually pay quarterly estimated taxes on their share of income."),
      table(
        ["Payment", "Due"],
        [
          ["1st", "April 15"],
          ["2nd", "June 15"],
          ["3rd", "September 15"],
          ["4th", "January 15 of the next year"],
        ],
      ),
      tip("Plan distributions", "Bluebird makes distributions before each due date so Elena and Marcus can pay their estimates."),
    ),
    mistakes(
      ["Using tax depreciation in GAAP books", "Book depreciation follows useful life."],
      ["Skipping accruals at year-end", "Record December's bills."],
      ["Expensing a full year of prepaid insurance", "Expense only the months used."],
      ["Missing the fourth estimate in January", "It's due January 15."],
    ),
    check(
      6,
      q("What's Bluebird's 2026 book depreciation on the $12,000 machine (5 years, bought in July)?", ["$1,200", "$2,400", "$12,000", "$600"], 0, "$12,000 ÷ 5 × 6/12."),
      q("What's the 2026 tax deduction for the machine with 100% bonus depreciation?", ["$12,000", "$1,200", "$2,400", "$0"], 0, "Acquired after 19 January 2025."),
      q("How much of $3,600 annual insurance paid on 1 October is expensed by 31 December?", ["$900", "$3,600", "$1,200", "$300"], 0, "3 months × $300."),
      q("When is the fourth quarterly estimated tax payment due?", ["January 15", "December 31", "April 15", "March 15"], 0, "Of the next year."),
      q("What is the 2026 Section 179 limit?", ["$2,560,000", "$1,250,000", "$500,000", "$25,000"], 0, "Phased out above $4,090,000."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Accrual",
          ["Bluebird owes $1,100 for December contract labor, invoiced in January. Record the entry."],
          ["Dr Contract labor $1,100 / Cr Accrued liabilities $1,100 at 31 December."],
        ],
        [
          "Exercise 2 — Prepaid",
          ["Bluebird pays $6,000 on 1 November for 12 months of software. What's the 31 December prepaid balance?"],
          ["$500 a month × 2 months used = $1,000 expense; prepaid $5,000."],
        ],
      ),
    ),
    summary(
      ["Accruals and prepaids", "Book vs. tax depreciation", "The statements", "The CPA package", "Estimated taxes"],
      "A tidy year-end close gives the CPA what they need and the owners an accurate picture.",
    ),
  ],
}

export default lessons
