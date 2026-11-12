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

// Australia Accounting — lesson screens by module index (0 = Module 1). The
// course follows Gumtree Print Studio Pty Ltd, a printing and signage company
// in Melbourne owned by Hannah and Tom, with a quarterly BAS on the accrual
// basis. Figures: GST 10%, registration at $75,000 turnover, super guarantee
// 12% (from 1 July 2025), Payday Super from 1 July 2026, company tax 25% for
// base rate entities and 30% otherwise.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The Australian Accounting Environment",
      ["Australian businesses keep books for the ATO and their owners under AASB standards. This module introduces the environment through Gumtree Print Studio."],
      ["Explain the role of the AASB", "Know the ATO, ABN and TFN", "Compare business structures", "Work with the 1 July – 30 June year", "Keep records for five years"],
    ),
    screen(
      "Meet Gumtree Print Studio",
      p("Gumtree Print Studio Pty Ltd prints signage, banners and stationery in Melbourne. Hannah and Tom each own half the shares. It has six employees and lodges a quarterly BAS. Liam keeps the books."),
      table(
        ["Customers", "Typical quarter"],
        [
          ["Local businesses (taxable sales)", "$120,000 + GST"],
          ["New Zealand clients (exports)", "$8,000"],
        ],
      ),
    ),
    screen(
      "Accounting standards",
      bullets(
        "The Australian Accounting Standards Board (AASB) sets Australian Accounting Standards, based on IFRS.",
        "Larger and public entities prepare general purpose financial statements.",
        "Many small private companies prepare special purpose or tax-focused accounts for their owners and the ATO.",
      ),
    ),
    screen(
      "The ATO, ABN and TFN",
      table(
        ["Identifier", "What it is"],
        [
          ["ABN (Australian Business Number)", "11-digit number identifying the business to government and customers"],
          ["TFN (Tax File Number)", "Tax identifier for the company, and separately for each individual"],
          ["ACN (Australian Company Number)", "Issued by ASIC when a company is registered"],
        ],
      ),
    ),
    screen(
      "Business structures",
      compare(
        ["Sole trader", "The owner is the business.", ["Uses the owner's TFN", "Taxed at personal rates"]],
        ["Company", "A separate legal entity.", ["Own TFN", "Company tax rate", "Directors' duties under ASIC"]],
      ),
      p("Partnerships and trusts are also common. A partnership lodges a return but the partners pay the tax; a trust's net income is usually taxed to its beneficiaries."),
    ),
    screen(
      "The financial year and records",
      bullets(
        "The income tax year runs from 1 July to 30 June.",
        "Keep business records for five years from when they're prepared or the transaction is completed.",
        "Records can be paper or electronic, in English or easily converted.",
      ),
      note("Gumtree's 2026–27 year runs from 1 July 2026 to 30 June 2027."),
    ),
    mistakes(
      ["Using a calendar year for tax", "The income year ends 30 June."],
      ["Confusing ABN and TFN", "The ABN identifies the business; the TFN is for tax."],
      ["Discarding records after three years", "Keep them five years."],
      ["Assuming small companies need full IFRS accounts", "Many prepare special purpose accounts."],
    ),
    check(
      1,
      q("Who sets Australian Accounting Standards?", ["The AASB", "The ATO", "ASIC", "The RBA"], 0, "Based on IFRS."),
      q("When does the Australian income year end?", ["30 June", "31 December", "31 March", "30 September"], 0, "1 July to 30 June."),
      q("How long must business records be kept?", ["Five years", "Three years", "Seven years", "One year"], 0, "ATO rule."),
      q("Which number does ASIC issue when a company is registered?", ["ACN", "TFN", "ABN", "BSB"], 0, "Australian Company Number."),
      q("Who owns Gumtree Print Studio?", ["Hannah and Tom, 50% each", "Liam", "A trust", "The ATO"], 0, "Liam is the bookkeeper."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which year?",
          ["Gumtree buys a printer on 15 August 2026. Which income year is it in?"],
          ["2026–27 — the year from 1 July 2026 to 30 June 2027."],
        ],
        [
          "Exercise 2 — Structure",
          ["Why does Gumtree have its own TFN?"],
          ["Because a company is a separate legal entity that lodges its own tax return."],
        ],
      ),
    ),
    summary(
      ["AASB standards", "ABN, TFN and ACN", "Business structures", "The 30 June year", "Five-year records"],
      "Know the structure and the year before you set up the books.",
    ),
  ],

  1: [
    overview(
      "Module 2 — GST",
      ["Gumtree is registered for GST. Liam classifies its sales and purchases and records GST correctly."],
      ["Know when to register", "Classify taxable, GST-free and input-taxed supplies", "Use tax invoices to claim credits", "Choose cash or accrual GST", "Record GST in the ledger"],
    ),
    screen(
      "Registration and rate",
      bullets(
        "GST is 10% on most goods and services.",
        "Businesses must register once GST turnover reaches $75,000 ($150,000 for non-profits).",
        "Taxi and ride-sourcing drivers must register regardless of turnover.",
      ),
      tip("Find the GST in a GST-inclusive price", "Divide by 11 — $1,100 includes $100 GST."),
    ),
    screen(
      "Three kinds of supply",
      table(
        ["Type", "GST on sale?", "Credits on related purchases?", "Examples"],
        [
          ["Taxable", "Yes, 10%", "Yes", "Gumtree's signage"],
          ["GST-free", "No", "Yes", "Exports, most basic food, many health and education services"],
          ["Input-taxed", "No", "No", "Residential rent, financial supplies such as interest"],
        ],
      ),
    ),
    screen(
      "Tax invoices and credits",
      bullets(
        "To claim a GST credit, you need a valid tax invoice for purchases over $82.50 including GST.",
        "A tax invoice shows the supplier's identity and ABN, date, description, GST amount (or that the price includes GST) and, for $1,000 or more, the buyer's identity or ABN.",
        "Gumtree only claims credits for business purchases.",
      ),
    ),
    screen(
      "Cash or accrual GST",
      compare(
        ["Accrual (non-cash)", "Report GST when invoiced or paid, whichever is first.", ["Gumtree's method"]],
        ["Cash", "Report GST when payment is received or made.", ["Available to small businesses under $10 million turnover"]],
      ),
      journal(
        [
          ["Accounts receivable", "11,000", ""],
          ["Sales", "", "10,000"],
          ["GST collected", "", "1,000"],
        ],
        "11,000",
      ),
    ),
    mistakes(
      ["Calculating GST as 10% of a GST-inclusive price", "Divide the inclusive price by 11."],
      ["Claiming credits without a tax invoice", "Needed above $82.50."],
      ["Treating input-taxed like GST-free", "No credits on input-taxed supplies."],
      ["Recording GST as income", "It's a liability."],
    ),
    check(
      2,
      q("At what GST turnover must a business register?", ["$75,000", "$50,000", "$150,000", "$20,000"], 0, "$150,000 for non-profits."),
      q("How much GST is in a $2,200 GST-inclusive price?", ["$200", "$220", "$110", "$100"], 0, "$2,200 ÷ 11."),
      q("What kind of supply is an export to New Zealand?", ["GST-free", "Taxable", "Input-taxed", "Out of scope"], 0, "No GST but credits allowed."),
      q("What kind of supply is residential rent?", ["Input-taxed", "GST-free", "Taxable", "Exempt from income tax"], 0, "No GST and no credits."),
      q("Above what amount is a tax invoice needed to claim a credit?", ["$82.50 including GST", "$1,000", "$75", "$10"], 0, "ATO rule."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Classify: (a) banners for a Melbourne café, (b) a sign shipped to Auckland, (c) interest on Gumtree's bank account."],
          ["(a) Taxable. (b) GST-free export. (c) Input-taxed financial supply."],
        ],
        [
          "Exercise 2 — Purchase",
          ["Gumtree buys ink for $3,300 including GST with a tax invoice. Record it."],
          ["Dr Ink supplies $3,000, Dr GST paid $300, Cr Accounts payable $3,300."],
        ],
      ),
    ),
    summary(
      ["10% GST and $75,000 registration", "Taxable, GST-free and input-taxed", "Tax invoices", "Cash vs. accrual GST", "Recording GST"],
      "Classify every supply correctly — it decides both GST on sales and credits on costs.",
    ),
  ],

  2: [
    overview(
      "Module 3 — The Business Activity Statement",
      ["Liam prepares Gumtree's BAS for the October–December 2026 quarter."],
      ["Know BAS frequencies", "Complete the GST labels", "Report PAYG withholding and instalments", "Meet due dates", "Reconcile the BAS"],
    ),
    screen(
      "BAS frequency",
      table(
        ["Lodger", "Due"],
        [
          ["Monthly", "21st of the next month"],
          ["Quarterly — Jul–Sep", "28 October"],
          ["Quarterly — Oct–Dec", "28 February"],
          ["Quarterly — Jan–Mar", "28 April"],
          ["Quarterly — Apr–Jun", "28 July"],
        ],
      ),
      note("Businesses with GST turnover of $20 million or more must report GST monthly. Registered tax agents may have later due dates."),
    ),
    screen(
      "The GST labels",
      table(
        ["Label", "Meaning", "Gumtree Oct–Dec"],
        [
          ["G1", "Total sales including GST", "$140,000"],
          ["G2", "Export sales", "$8,000"],
          ["1A", "GST on sales", "$12,000"],
          ["1B", "GST on purchases", "$5,000"],
        ],
      ),
      example([["GST on sales (1A)", "$12,000"], ["GST credits (1B)", "−$5,000"]], ["Net GST payable", "$7,000"]),
    ),
    screen(
      "PAYG on the BAS",
      table(
        ["Label", "Meaning", "Gumtree"],
        [
          ["W1", "Total salary and wages", "$48,000"],
          ["W2", "Amounts withheld from wages", "$9,600"],
          ["T7 / 5A", "PAYG income tax instalment", "$4,500"],
        ],
      ),
      example([["Net GST", "$7,000"], ["PAYG withholding", "$9,600"], ["PAYG instalment", "$4,500"]], ["Total payable by 28 February 2027", "$21,100"]),
    ),
    screen(
      "Reconciling the BAS",
      steps(
        ["GST accounts", "GST collected less GST paid in the ledger equals net GST on the BAS."],
        ["Payroll", "W1 and W2 match the payroll report and Single Touch Payroll."],
        ["Clearing", "After lodging, move the balances to an ATO liability account and clear it on payment."],
      ),
      journal(
        [
          ["GST collected", "12,000", ""],
          ["PAYG withholding payable", "9,600", ""],
          ["PAYG instalment (income tax)", "4,500", ""],
          ["GST paid", "", "5,000"],
          ["ATO integrated client account", "", "21,100"],
        ],
        "26,100",
      ),
    ),
    mistakes(
      ["Putting GST-exclusive figures at G1", "G1 includes GST."],
      ["Leaving exports out of G1", "Include them and show them at G2."],
      ["W2 not matching payroll", "Reconcile to the payroll report."],
      ["Missing 28 February", "The Oct–Dec quarter is due later than others."],
    ),
    check(
      3,
      q("When is the October–December quarterly BAS due?", ["28 February", "28 January", "21 January", "31 March"], 0, "Extended for the holiday period."),
      q("Which BAS label shows GST on sales?", ["1A", "1B", "W2", "G2"], 0, "1B is GST on purchases."),
      q("What's Gumtree's net GST for the quarter?", ["$7,000", "$12,000", "$17,000", "$5,000"], 0, "$12,000 − $5,000."),
      q("Which label shows amounts withheld from wages?", ["W2", "W1", "1A", "G1"], 0, "W1 is total wages."),
      q("When is a monthly BAS due?", ["The 21st of the next month", "The 28th", "The 1st", "Quarterly"], 0, "Monthly lodgers."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Net GST",
          ["Next quarter Gumtree has GST on sales of $10,500 and credits of $6,200. What's the net GST?"],
          ["$10,500 − $6,200 = $4,300 payable."],
        ],
        [
          "Exercise 2 — Due date",
          ["When is the January–March 2027 quarterly BAS due?"],
          ["28 April 2027."],
        ],
      ),
    ),
    summary(
      ["Monthly and quarterly BAS", "GST labels", "PAYG labels", "Due dates", "Reconciliation"],
      "A BAS is only as good as the ledger behind it — reconcile before you lodge.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Payroll Entries and Superannuation",
      ["Gumtree pays six employees. Liam records payroll, PAYG withholding and super."],
      ["Record wages and PAYG withholding", "Calculate super at 12% of qualifying earnings", "Apply Payday Super", "Link payroll to STP", "Recognise FBT"],
    ),
    screen(
      "Recording a payroll",
      example([["Gross wages for the fortnight", "$16,000"], ["PAYG withheld", "−$3,200"]], ["Net pay", "$12,800"]),
      journal(
        [
          ["Wages expense", "16,000", ""],
          ["PAYG withholding payable", "", "3,200"],
          ["Bank", "", "12,800"],
        ],
        "16,000",
      ),
    ),
    screen(
      "Super guarantee",
      p("Employers pay superannuation guarantee of 12% (from 1 July 2025). From 1 July 2026 it's calculated on qualifying earnings — ordinary time earnings plus salary sacrifice amounts and certain commissions. Overtime is still excluded."),
      example([["Qualifying earnings for the fortnight", "$16,000"], ["× 12%", ""]], ["Super", "$1,920"]),
      journal([["Superannuation expense", "1,920", ""], ["Super payable", "", "1,920"]], "1,920"),
    ),
    screen(
      "Payday Super",
      bullets(
        "From 1 July 2026, super is on time only if the employee's fund receives it within 7 business days after payday — not quarterly.",
        "The last quarterly payment under the old rules (April–June 2026) was due 28 July 2026.",
        "Late or short payments attract the super guarantee charge, which isn't tax deductible.",
      ),
      caution("Liam sets up Gumtree's clearing house so each fortnight's super goes out on payday."),
    ),
    screen(
      "Single Touch Payroll",
      p("Each pay run is reported to the ATO through Single Touch Payroll (STP) from payroll software. STP totals should match W1 and W2 on the BAS."),
    ),
    screen(
      "Fringe benefits tax",
      bullets(
        "FBT applies to non-cash benefits given to employees, such as a car available for private use.",
        "The FBT year runs from 1 April to 31 March, and the rate is 47%.",
        "Some benefits are exempt, such as certain work-related items.",
      ),
    ),
    mistakes(
      ["Paying super quarterly after 1 July 2026", "Pay it with each payday."],
      ["Calculating super on overtime", "Overtime isn't qualifying earnings."],
      ["Recording net pay as wages expense", "Wages expense is gross pay."],
      ["Forgetting FBT runs to 31 March", "FBT year differs from the income year."],
    ),
    check(
      4,
      q("What is the super guarantee rate from 1 July 2025?", ["12%", "11.5%", "10%", "15%"], 0, "Of qualifying earnings from 1 July 2026."),
      q("Under Payday Super, within how long must super reach the fund?", ["7 business days after payday", "28 days after the quarter", "One month", "By 30 June"], 0, "From 1 July 2026."),
      q("What's the super on $16,000 of qualifying earnings?", ["$1,920", "$1,840", "$1,600", "$2,000"], 0, "12%."),
      q("What is the FBT rate?", ["47%", "30%", "25%", "10%"], 0, "FBT year 1 April – 31 March."),
      q("What does the wages expense show?", ["Gross wages", "Net pay", "PAYG only", "Super only"], 0, "PAYG is a liability."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Payroll entry",
          ["Gross wages $18,500, PAYG $3,900. Record the payroll and super."],
          ["Dr Wages $18,500 / Cr PAYG payable $3,900 / Cr Bank $14,600. Dr Super expense $2,220 / Cr Super payable $2,220."],
        ],
        [
          "Exercise 2 — Payday Super",
          ["Gumtree pays wages on Thursday 5 November 2026. By when must the super reach the funds?"],
          ["Within 7 business days after payday — by Monday 16 November 2026."],
        ],
      ),
    ),
    summary(
      ["Wages and PAYG entries", "Super at 12%", "Payday Super", "STP", "FBT"],
      "Super now moves with every payday — build it into each pay run.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Income Tax for Businesses",
      ["Gumtree pays company tax. Liam works out the rate, the depreciation and the franking credits."],
      ["Apply the 25% and 30% company rates", "Compare other structures", "Use the instant asset write-off", "Calculate franking credits", "Reconcile accounting and taxable profit"],
    ),
    screen(
      "Company tax rates",
      table(
        ["Company", "Rate"],
        [
          ["Base rate entity — aggregated turnover under $50 million and no more than 80% passive income", "25%"],
          ["Other companies", "30%"],
        ],
      ),
      example([["Gumtree's taxable income 2026–27", "$180,000"], ["Base rate entity rate", "× 25%"]], ["Company tax", "$45,000"]),
    ),
    screen(
      "Other structures",
      bullets(
        "Sole traders pay tax at individual rates on business income.",
        "Partnerships lodge a return but the partners pay tax on their shares.",
        "Trusts usually distribute income to beneficiaries, who pay the tax.",
      ),
    ),
    screen(
      "Depreciation and the instant asset write-off",
      p("Small businesses (aggregated turnover under $10 million) using simplified depreciation can immediately deduct eligible assets costing less than the instant asset write-off threshold — $20,000 per asset for 2025–26. Other assets go into a small business pool."),
      caution("The threshold is set year by year — check the current amount before claiming."),
    ),
    screen(
      "Franking credits",
      p("When a company pays dividends from taxed profits, it can attach franking credits for the tax already paid."),
      example([["Fully franked dividend paid", "$30,000"], ["Company rate 25%: × 25/75", ""]], ["Franking credit", "$10,000"]),
      note("Hannah and Tom each receive $15,000 cash plus $5,000 of franking credits, which they declare and offset against their own tax."),
    ),
    screen(
      "Accounting vs. taxable profit",
      table(
        ["Item", "Accounting", "Tax"],
        [
          ["Entertainment", "Expense", "Generally not deductible"],
          ["Instant asset write-off", "Depreciated over useful life", "Deducted immediately"],
          ["Fines and penalties", "Expense", "Not deductible"],
        ],
      ),
    ),
    mistakes(
      ["Applying 25% to every company", "Check the base rate entity tests."],
      ["Assuming the write-off threshold never changes", "Check the year's amount."],
      ["Using 30/70 for a base rate entity's franking", "Use the company's rate — 25/75."],
      ["Deducting entertainment", "Generally not deductible."],
    ),
    check(
      5,
      q("What tax rate does a base rate entity pay?", ["25%", "30%", "27.5%", "15%"], 0, "Turnover under $50 million and ≤80% passive income."),
      q("What's Gumtree's company tax on $180,000?", ["$45,000", "$54,000", "$49,500", "$36,000"], 0, "25%."),
      q("What's the franking credit on a $30,000 fully franked dividend at 25%?", ["$10,000", "$12,857", "$7,500", "$9,000"], 0, "$30,000 × 25/75."),
      q("What turnover limit applies to small business simplified depreciation?", ["Under $10 million", "Under $50 million", "Under $75,000", "No limit"], 0, "Aggregated turnover."),
      q("Is entertainment generally deductible?", ["No", "Yes", "Only for companies", "Only if over $82.50"], 0, "Tax adjustment."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Rate",
          ["A company with $70 million turnover earns $500,000 taxable income. What's its tax?"],
          ["Not a base rate entity: 30% × $500,000 = $150,000."],
        ],
        [
          "Exercise 2 — Franking",
          ["Gumtree pays a $12,000 fully franked dividend. What franking credit is attached?"],
          ["$12,000 × 25/75 = $4,000."],
        ],
      ),
    ),
    summary(
      ["25% and 30% rates", "Other structures", "Instant asset write-off", "Franking credits", "Tax adjustments"],
      "Company tax starts with the right rate and ends with franking for the owners.",
    ),
  ],

  5: [
    overview(
      "Module 6 — End of Financial Year",
      ["Liam closes Gumtree's books at 30 June 2027."],
      ["Follow an EOFY checklist", "Record accruals, prepayments and stock", "Reconcile GST, PAYG and super", "Prepare statements", "Assemble the tax agent's pack"],
    ),
    screen(
      "EOFY checklist",
      steps(
        ["Bank and card reconciliations", "To 30 June statements."],
        ["Debtors and creditors", "Review and write off bad debts."],
        ["Stock", "Count stock on hand at 30 June."],
        ["Assets", "Record additions and disposals."],
        ["STP finalisation", "Finalise employees' STP data by 14 July."],
      ),
    ),
    screen(
      "Accruals and prepayments",
      table(
        ["Item", "Gumtree example", "Entry"],
        [
          ["Accrued expense", "June electricity $800 + GST, billed in July", "Dr Electricity $800 / Cr Accrued expenses $800 — GST is claimed when the invoice arrives"],
          ["Prepayment", "$6,000 insurance paid 1 April for 12 months", "Expense $1,500; prepaid $4,500 at 30 June"],
          ["Stock", "Paper and ink on hand $9,200", "Adjust stock to the count"],
        ],
      ),
    ),
    screen(
      "Reconciling ATO accounts",
      bullets(
        "GST control accounts agree with the four BAS lodged for the year.",
        "PAYG withholding agrees with STP and BAS W2.",
        "Super payable agrees with what's been paid under Payday Super.",
        "The ATO integrated client account agrees with the ATO's statement.",
      ),
    ),
    screen(
      "Statements and the tax agent's pack",
      bullets(
        "Profit and loss and balance sheet at 30 June.",
        "Fixed asset register and depreciation.",
        "Loan statements and dividend records.",
        "Reconciliations for GST, PAYG, super and the ATO account.",
      ),
      tip("Division 7A", "Loans from the company to shareholders need care — flag them for the tax agent before 30 June."),
    ),
    mistakes(
      ["Skipping the stock count", "Count at 30 June."],
      ["Late STP finalisation", "Finalise by 14 July."],
      ["Unreconciled ATO account", "Match it to the ATO statement."],
      ["Ignoring shareholder loans", "Flag them for Division 7A."],
    ),
    check(
      6,
      q("By when must STP data be finalised for the year?", ["14 July", "30 June", "28 July", "31 October"], 0, "End-of-year finalisation."),
      q("How much of $6,000 insurance paid on 1 April for 12 months is prepaid at 30 June?", ["$4,500", "$1,500", "$6,000", "$3,000"], 0, "Nine months remain."),
      q("What should GST control accounts agree with at year-end?", ["The year's BAS lodgments", "The income tax return only", "The STP report", "The bank balance"], 0, "Four quarterly BAS."),
      q("Which rule covers loans from a private company to shareholders?", ["Division 7A", "Division 293", "GST Act", "FBT Act"], 0, "Flag them to the tax agent."),
      q("When is stock counted for EOFY?", ["At 30 June", "At 31 December", "Whenever convenient", "Never"], 0, "Year-end."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Prepayment",
          ["Gumtree paid $2,400 software on 1 March for 12 months. What's prepaid at 30 June?"],
          ["4 months used ($800); prepaid $1,600."],
        ],
        [
          "Exercise 2 — PAYG check",
          ["W2 for the four BAS totals $38,400 but the STP report shows $38,900. What should Liam do?"],
          ["Find the $500 difference — likely a payroll adjustment not reported on a BAS — and correct it."],
        ],
      ),
    ),
    summary(
      ["EOFY checklist", "Accruals, prepayments and stock", "ATO reconciliations", "Statements", "Tax agent's pack"],
      "Close carefully at 30 June — the tax return depends on it.",
    ),
  ],
}

export default lessons
