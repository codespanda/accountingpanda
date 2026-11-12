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
  tip,
} from "@/lib/lessonKit"

// UAE Accounting — lesson screens by module index (0 = Module 1). The course
// follows Falcon Trading LLC, a mainland Dubai office-furniture trader, and
// its sister company Falcon Logistics FZE in a free zone. Figures: VAT 5%,
// mandatory VAT registration above AED 375,000 and voluntary above AED
// 187,500; Corporate Tax 0% up to AED 375,000 and 9% above; small business
// relief for revenue up to AED 3 million for tax periods ending by
// 31 December 2026; e-invoicing mandatory from 1 January 2027 for revenue of
// AED 50 million or more and 1 July 2027 for others.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The UAE Accounting Environment",
      ["UAE businesses keep IFRS books and deal with the Federal Tax Authority for VAT and Corporate Tax. This module introduces the environment through Falcon Trading."],
      ["Know why IFRS applies", "Tell mainland, free zone and offshore companies apart", "Use EmaraTax and the FTA", "Work in AED and choose a financial year", "Know when audits are required"],
    ),
    screen(
      "Meet Falcon Trading",
      p("Falcon Trading LLC sells office furniture from a showroom in Dubai's mainland, with annual revenue of about AED 4.8 million. A sister company, Falcon Logistics FZE, runs a warehouse in a free zone. Aisha is the group accountant."),
      table(
        ["Company", "Location", "Activity"],
        [
          ["Falcon Trading LLC", "Dubai mainland", "Sells furniture to UAE businesses and exports to Oman"],
          ["Falcon Logistics FZE", "Free zone", "Warehousing and logistics for group and other free zone companies"],
        ],
      ),
    ),
    screen(
      "IFRS and the accounts",
      bullets(
        "UAE companies prepare financial statements under IFRS (IFRS for SMEs is available to eligible smaller entities).",
        "The Corporate Tax Law uses the IFRS accounting profit as the starting point for taxable income.",
        "The functional currency is usually the UAE dirham (AED), pegged to the US dollar at about 3.6725.",
      ),
    ),
    screen(
      "Mainland, free zone and offshore",
      table(
        ["Type", "Licensed by", "Key point"],
        [
          ["Mainland company", "The emirate's economic department (e.g. Dubai DET)", "Can trade throughout the UAE"],
          ["Free zone company", "The free zone authority", "May qualify for 0% Corporate Tax on qualifying income"],
          ["Offshore company", "Offshore registries", "Can't trade onshore in the UAE"],
        ],
      ),
    ),
    screen(
      "The FTA and EmaraTax",
      bullets(
        "The Federal Tax Authority (FTA) administers VAT, Corporate Tax and excise tax.",
        "Businesses register, file returns and pay through the EmaraTax portal.",
        "Each registered business gets a Tax Registration Number (TRN).",
      ),
      note("Falcon Trading has a VAT TRN and a separate Corporate Tax registration, both on EmaraTax."),
    ),
    screen(
      "Audits",
      p("Audited financial statements are required for companies whose revenue exceeds AED 50 million and for qualifying free zone persons. Many licensing authorities and banks also require audited accounts."),
      caution("Falcon Logistics FZE needs audited statements to keep its free zone tax benefits, even though its revenue is small."),
    ),
    mistakes(
      ["Keeping books on a cash basis", "IFRS is accrual-based."],
      ["Thinking free zone means no tax", "Only qualifying income can be 0%."],
      ["Using an offshore company to trade onshore", "Offshore companies can't trade in the UAE market."],
      ["Ignoring audit requirements", "Free zone persons claiming 0% need audited accounts."],
    ),
    check(
      1,
      q("Which framework do UAE companies use for their accounts?", ["IFRS", "US GAAP", "Ind AS", "Cash basis"], 0, "IFRS for SMEs for eligible smaller entities."),
      q("Who administers VAT and Corporate Tax in the UAE?", ["The Federal Tax Authority", "The Central Bank", "Dubai Customs", "MOHRE"], 0, "Through EmaraTax."),
      q("Above what revenue must a company have audited financial statements for Corporate Tax?", ["AED 50 million", "AED 375,000", "AED 3 million", "AED 1 million"], 0, "Free zone persons claiming 0% need them regardless."),
      q("Which company type can trade throughout the UAE?", ["Mainland", "Offshore", "Any free zone company onshore without restrictions", "None"], 0, "Licensed by the emirate."),
      q("What is the starting point for Corporate Tax?", ["IFRS accounting profit", "Cash receipts", "VAT returns", "Bank balance"], 0, "Then adjusted."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Company type",
          ["Falcon wants to sell directly to Dubai shoppers through Falcon Logistics FZE. What should Aisha flag?"],
          ["Free zone companies generally can't trade directly onshore without the right licence, and sales to mainland customers are usually non-qualifying income for Corporate Tax."],
        ],
        [
          "Exercise 2 — Audit",
          ["Does Falcon Trading, with AED 4.8 million revenue, need audited accounts for Corporate Tax?"],
          ["Not because of Corporate Tax — it's under AED 50 million — but its licence or bank may still require them."],
        ],
      ),
    ),
    summary(
      ["IFRS accounts", "Mainland, free zone and offshore", "FTA, EmaraTax and TRNs", "AED and financial years", "Audit requirements"],
      "Know the company type and its obligations before setting up the books.",
    ),
  ],

  1: [
    overview(
      "Module 2 — VAT",
      ["Falcon Trading is registered for VAT. Aisha classifies its sales and purchases."],
      ["Apply VAT at 5%", "Know the registration thresholds", "Classify standard, zero-rated and exempt supplies", "Use tax invoices and recover input VAT", "Apply the reverse charge"],
    ),
    screen(
      "Rate and registration",
      table(
        ["Rule", "Amount"],
        [
          ["Standard VAT rate", "5%"],
          ["Mandatory registration — taxable supplies and imports over 12 months (or expected in next 30 days)", "Above AED 375,000"],
          ["Voluntary registration — supplies or expenses", "Above AED 187,500"],
        ],
      ),
    ),
    screen(
      "Three kinds of supply",
      table(
        ["Type", "VAT on sale", "Input VAT recoverable?", "Examples"],
        [
          ["Standard-rated", "5%", "Yes", "Falcon's furniture sold in the UAE"],
          ["Zero-rated", "0%", "Yes", "Exports of goods and services outside the UAE (with conditions), international transport, certain education and healthcare"],
          ["Exempt", "None", "No", "Certain financial services, bare land, local passenger transport, residential rent after the first supply"],
        ],
      ),
    ),
    screen(
      "Tax invoices and input VAT",
      bullets(
        "Issue a tax invoice within 14 days of the supply.",
        "A full tax invoice shows 'Tax Invoice', the supplier's TRN, the date, description, amount and VAT in AED.",
        "Input VAT on business purchases can be recovered with a valid tax invoice — some expenses, such as most entertainment and staff personal benefits, are blocked.",
      ),
      journal(
        [
          ["Accounts receivable", "105,000", ""],
          ["Sales", "", "100,000"],
          ["Output VAT payable", "", "5,000"],
        ],
        "105,000",
      ),
    ),
    screen(
      "Reverse charge",
      p("When Falcon imports services — such as software from a US supplier — it accounts for VAT itself under the reverse charge: output VAT and input VAT of the same amount."),
      example([["Imported software service", "AED 40,000"], ["Reverse charge VAT 5%", "AED 2,000"]], ["Net VAT cost if fully recoverable", "AED 0"]),
    ),
    mistakes(
      ["Treating zero-rated and exempt alike", "Zero-rated keeps input VAT; exempt doesn't."],
      ["Late tax invoices", "Issue within 14 days."],
      ["Recovering VAT on blocked expenses", "Entertainment is generally blocked."],
      ["Forgetting the reverse charge", "Account for VAT on imported services."],
    ),
    check(
      2,
      q("What's the standard UAE VAT rate?", ["5%", "10%", "15%", "0%"], 0, "Since 2018."),
      q("Above what level must a business register for VAT?", ["AED 375,000", "AED 187,500", "AED 1 million", "AED 3 million"], 0, "Voluntary from AED 187,500."),
      q("Which supply keeps input VAT recovery but charges 0%?", ["Zero-rated", "Exempt", "Out of scope", "Blocked"], 0, "Such as exports."),
      q("Within how many days must a tax invoice be issued?", ["14", "7", "30", "28"], 0, "From the date of supply."),
      q("How is VAT on imported services accounted for?", ["Reverse charge by the buyer", "By the foreign supplier", "Not at all", "By Dubai Customs"], 0, "Output and input VAT."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Classify: (a) desks sold to a Dubai bank, (b) chairs exported to a customer in India, (c) interest earned on a deposit."],
          ["(a) Standard-rated. (b) Zero-rated export. (c) Exempt financial service (margin-based interest)."],
        ],
        [
          "Exercise 2 — Sale entry",
          ["Falcon invoices AED 60,000 plus VAT. Record it."],
          ["Dr Receivables AED 63,000 / Cr Sales AED 60,000 / Cr Output VAT AED 3,000."],
        ],
      ),
    ),
    summary(
      ["5% VAT", "AED 375,000 and 187,500 thresholds", "Standard, zero-rated and exempt", "Tax invoices and recovery", "Reverse charge"],
      "Classify each supply correctly — it decides VAT on sales and recovery on costs.",
    ),
  ],

  2: [
    overview(
      "Module 3 — VAT Returns",
      ["Aisha prepares Falcon Trading's VAT return for July–September 2026."],
      ["Know tax periods and deadlines", "Complete the main return boxes", "Reconcile VAT to the ledger", "Correct errors"],
    ),
    screen(
      "Tax periods and deadlines",
      bullets(
        "Most businesses file quarterly; large businesses (turnover AED 150 million or more) file monthly.",
        "The return is filed and the VAT paid by the 28th day after the tax period ends.",
        "Falcon's July–September return is due 28 October 2026.",
      ),
    ),
    screen(
      "The main boxes",
      table(
        ["Box", "Content", "Falcon Jul–Sep"],
        [
          ["1", "Standard-rated supplies by emirate", "AED 1,100,000 — VAT 55,000 (Dubai)"],
          ["3", "Supplies subject to reverse charge", "AED 40,000 — VAT 2,000"],
          ["4", "Zero-rated supplies", "AED 150,000"],
          ["9", "Standard-rated expenses", "AED 700,000 — VAT 35,000"],
          ["10", "Supplies subject to reverse charge (recoverable)", "AED 40,000 — VAT 2,000"],
        ],
      ),
      example([["Output VAT (55,000 + 2,000)", "AED 57,000"], ["Recoverable input VAT (35,000 + 2,000)", "−AED 37,000"]], ["Net VAT payable", "AED 20,000"]),
    ),
    screen(
      "Reconciling to the ledger",
      steps(
        ["Output VAT", "Matches the sales VAT account for the quarter."],
        ["Input VAT", "Matches recoverable purchases with valid tax invoices."],
        ["Net payable", "Matches the VAT control account."],
      ),
      journal(
        [
          ["Output VAT payable", "57,000", ""],
          ["Input VAT recoverable", "", "37,000"],
          ["VAT payable to FTA", "", "20,000"],
        ],
        "57,000",
      ),
    ),
    screen(
      "Errors and voluntary disclosures",
      bullets(
        "If an error in a filed return changes the tax by more than AED 10,000, file a voluntary disclosure.",
        "Smaller errors can be corrected in the next return.",
        "Late registration, late filing and late payment carry penalties — check the current Cabinet decision on penalties.",
      ),
      tip("Fix early", "Voluntary disclosures before an FTA audit notice attract lower penalties."),
    ),
    mistakes(
      ["Filing on the 28th of the last month of the quarter", "It's the 28th day after the period ends."],
      ["Putting zero-rated sales in box 1", "They go in box 4."],
      ["Forgetting reverse charge in both boxes", "Output in box 3, input in box 10."],
      ["Correcting large errors in the next return", "Over AED 10,000 needs a voluntary disclosure."],
    ),
    check(
      3,
      q("When is Falcon's July–September 2026 VAT return due?", ["28 October 2026", "30 September 2026", "15 October 2026", "31 December 2026"], 0, "28 days after the period."),
      q("Which box reports zero-rated supplies?", ["Box 4", "Box 1", "Box 9", "Box 6"], 0, "Box 1 is standard-rated."),
      q("What's Falcon's net VAT payable for the quarter?", ["AED 20,000", "AED 57,000", "AED 22,000", "AED 18,000"], 0, "57,000 − 37,000."),
      q("Above what tax difference is a voluntary disclosure needed?", ["AED 10,000", "AED 1,000", "AED 375,000", "AED 50,000"], 0, "Smaller errors go in the next return."),
      q("Which businesses file VAT monthly?", ["Turnover of AED 150 million or more", "All businesses", "Only free zone companies", "Turnover under AED 375,000"], 0, "Most file quarterly."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Net VAT",
          ["Next quarter: standard-rated sales AED 900,000, standard-rated purchases AED 620,000, no reverse charge. What's the net VAT?"],
          ["Output 45,000 − input 31,000 = AED 14,000 payable."],
        ],
        [
          "Exercise 2 — Error",
          ["Aisha finds a filed return understated VAT by AED 12,500. What should she do?"],
          ["File a voluntary disclosure — the error is over AED 10,000."],
        ],
      ),
    ),
    summary(
      ["Quarterly and monthly periods", "The 28-day deadline", "Return boxes", "Reconciliation", "Voluntary disclosures"],
      "Reconcile the ledger first — the VAT return should simply report it.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Corporate Tax",
      ["Falcon Trading pays Corporate Tax. Aisha calculates its liability for 2026."],
      ["Apply the 0% and 9% rates", "Identify taxable persons", "Adjust accounting profit to taxable income", "Apply small business relief", "Register, file and pay"],
    ),
    screen(
      "Rates",
      table(
        ["Taxable income", "Rate"],
        [
          ["Up to AED 375,000", "0%"],
          ["Above AED 375,000", "9%"],
          ["Large multinational groups (revenue €750 million+)", "Domestic minimum top-up tax to 15%"],
        ],
      ),
    ),
    screen(
      "Who is taxable",
      bullets(
        "UAE companies and other juridical persons — mainland and free zone.",
        "Individuals doing business with turnover over AED 1 million a year.",
        "Foreign companies with a permanent establishment or UAE-sourced income.",
      ),
    ),
    screen(
      "From accounting profit to taxable income",
      example([["IFRS net profit 2026", "AED 900,000"], ["Add: 50% of client entertainment (AED 60,000)", "AED 30,000"], ["Add: fines and penalties", "AED 5,000"]], ["Taxable income", "AED 935,000"]),
      example([["Taxable income", "AED 935,000"], ["Less 0% band", "−AED 375,000"], ["Taxed at 9%", "AED 560,000"]], ["Corporate Tax", "AED 50,400"]),
      note("Only 50% of client entertainment is deductible, and fines aren't deductible. Net interest above 30% of EBITDA can be restricted, but only where net interest exceeds AED 12 million."),
    ),
    screen(
      "Small business relief",
      p("A resident person with revenue of AED 3 million or less in a tax period, and in all previous periods, can elect to be treated as having no taxable income — for tax periods ending on or before 31 December 2026."),
      caution("Falcon Trading's AED 4.8 million revenue is above the limit, so it can't use the relief. Qualifying free zone persons and members of large groups can't use it either."),
    ),
    screen(
      "Register, file and pay",
      steps(
        ["Register", "Every taxable person registers on EmaraTax and gets a Corporate Tax TRN."],
        ["File", "The return is due within 9 months of the end of the tax period."],
        ["Pay", "Corporate Tax is paid by the same deadline."],
      ),
      example([["Falcon's tax period", "1 Jan – 31 Dec 2026"]], ["Return and payment due", "30 September 2027"]),
    ),
    mistakes(
      ["Applying 9% to all profit", "The first AED 375,000 is at 0%."],
      ["Deducting all entertainment", "Only 50% of client entertainment."],
      ["Claiming small business relief above AED 3 million", "Revenue must be AED 3 million or less."],
      ["Missing registration", "Every taxable person must register."],
    ),
    check(
      4,
      q("What's the Corporate Tax rate above AED 375,000?", ["9%", "5%", "15%", "0%"], 0, "0% up to AED 375,000."),
      q("What's Corporate Tax on taxable income of AED 935,000?", ["AED 50,400", "AED 84,150", "AED 33,750", "AED 46,750"], 0, "9% × AED 560,000."),
      q("What revenue limit applies to small business relief?", ["AED 3 million", "AED 375,000", "AED 50 million", "AED 1 million"], 0, "For periods ending by 31 December 2026."),
      q("When is Falcon's 2026 Corporate Tax return due?", ["30 September 2027", "31 March 2027", "28 January 2027", "31 December 2027"], 0, "9 months after the period."),
      q("How much client entertainment is deductible?", ["50%", "100%", "0%", "25%"], 0, "The rest is added back."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Tax",
          ["A mainland company has taxable income of AED 600,000. What's its Corporate Tax?"],
          ["9% × (600,000 − 375,000) = AED 20,250."],
        ],
        [
          "Exercise 2 — Relief",
          ["A Sharjah consultancy had revenue of AED 2.6 million in 2025 and 2026. Can it elect small business relief for 2026?"],
          ["Yes — revenue is AED 3 million or less in the period and earlier periods, and 2026 ends by 31 December 2026."],
        ],
      ),
    ),
    summary(
      ["0% and 9% rates", "Taxable persons", "Adjustments", "Small business relief", "Registration and the 9-month deadline"],
      "Start with IFRS profit, adjust for the tax rules, then apply the AED 375,000 band.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Free Zones and Special Cases",
      ["Falcon Logistics FZE wants to be a qualifying free zone person. Aisha checks the conditions and the group's related-party pricing."],
      ["Apply the qualifying free zone person rules", "Recognise exempt persons", "Apply transfer pricing", "Know other taxes"],
    ),
    screen(
      "Qualifying free zone persons",
      p("A qualifying free zone person (QFZP) pays 0% on qualifying income and 9% on other taxable income, if it:"),
      bullets(
        "Keeps adequate substance in the free zone.",
        "Earns qualifying income — broadly from other free zone persons, or certain qualifying activities.",
        "Meets the de minimis rule — non-qualifying revenue no more than 5% of total revenue or AED 5 million, whichever is lower.",
        "Complies with transfer pricing rules and prepares audited financial statements.",
        "Hasn't elected to be taxed at the standard rates.",
      ),
    ),
    screen(
      "Falcon Logistics' de minimis test",
      example([["Total revenue", "AED 2,000,000"], ["Revenue from mainland customers (non-qualifying)", "AED 80,000"], ["Share of total", "4%"]], ["Within 5%?", "Yes — QFZP status kept"]),
      caution("If non-qualifying revenue goes over the limit, the company loses QFZP status for that period and the next four."),
    ),
    screen(
      "Exempt persons",
      bullets(
        "Government entities and government-controlled entities in certain activities.",
        "Qualifying public benefit entities.",
        "Qualifying public and private pension and social security funds, and qualifying investment funds.",
        "Businesses in natural resource extraction subject to emirate-level tax.",
      ),
    ),
    screen(
      "Transfer pricing",
      p("Transactions between related parties, such as Falcon Trading and Falcon Logistics, must be at arm's length — the price independent parties would agree."),
      bullets(
        "Disclose related-party transactions in the Corporate Tax return.",
        "Larger businesses must keep a master file and local file.",
        "Payments to connected persons (such as owners and directors) must be at market value.",
      ),
    ),
    screen(
      "Other taxes at a glance",
      table(
        ["Tax", "Position"],
        [
          ["Withholding tax", "0% on payments to non-residents"],
          ["Excise tax", "On tobacco, energy drinks, sweetened drinks and e-cigarettes"],
          ["Personal income tax", "None"],
        ],
      ),
    ),
    mistakes(
      ["Assuming every free zone company pays 0%", "Only qualifying income of a QFZP."],
      ["Ignoring the de minimis limit", "Breach costs five periods of QFZP status."],
      ["Pricing group services at whatever is convenient", "Use arm's-length prices."],
      ["Skipping audited statements", "QFZPs must have them."],
    ),
    check(
      5,
      q("What rate does a QFZP pay on qualifying income?", ["0%", "9%", "5%", "15%"], 0, "9% on non-qualifying income."),
      q("What's the de minimis limit for non-qualifying revenue?", ["5% of revenue or AED 5 million, whichever is lower", "10% of revenue", "AED 375,000", "No limit"], 0, "Or QFZP status is lost."),
      q("For how many periods is QFZP status lost after a breach?", ["The period and the next four", "Only that period", "Forever", "One year"], 0, "Five periods in total."),
      q("What standard applies to related-party transactions?", ["Arm's length", "Cost only", "Any agreed price", "Market minus 50%"], 0, "Transfer pricing."),
      q("What's the UAE withholding tax rate on payments to non-residents?", ["0%", "5%", "9%", "15%"], 0, "Currently 0%."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — De minimis",
          ["A free zone company has revenue of AED 120 million, with AED 6.5 million from the mainland. Does it pass?"],
          ["The limit is the lower of 5% (AED 6 million) and AED 5 million = AED 5 million. AED 6.5 million exceeds it — QFZP status is lost."],
        ],
        [
          "Exercise 2 — Group pricing",
          ["Falcon Logistics charges Falcon Trading nothing for storage. What's the issue?"],
          ["Related-party services must be priced at arm's length; a market storage fee should be charged and documented."],
        ],
      ),
    ),
    summary(
      ["QFZP conditions", "The de minimis rule", "Exempt persons", "Transfer pricing", "Other taxes"],
      "Free zone benefits come with conditions — test them every period.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Records, E-Invoicing and Year-End",
      ["Aisha closes Falcon's 2026 year and prepares for e-invoicing."],
      ["Keep records for the required periods", "Prepare for e-invoicing", "Close the year under IFRS", "Prepare audited statements", "Use the compliance checklist"],
    ),
    screen(
      "Record-keeping",
      table(
        ["Records", "Keep for at least"],
        [
          ["VAT records", "5 years from the end of the tax period"],
          ["Corporate Tax records", "7 years from the end of the tax period"],
        ],
      ),
      note("Records include invoices, contracts, ledgers, bank statements and the workings for each return."),
    ),
    screen(
      "E-invoicing",
      table(
        ["Phase", "Who", "Mandatory from"],
        [
          ["Pilot", "Invited businesses", "1 July 2026"],
          ["Phase 1", "Revenue of AED 50 million or more", "1 January 2027"],
          ["Phase 2", "Revenue below AED 50 million", "1 July 2027"],
          ["Government entities", "", "1 October 2027"],
        ],
      ),
      p("Invoices will be issued in a structured electronic format through an accredited service provider (ASP), which exchanges them with the buyer's provider and reports them to the FTA."),
      tip("Plan now", "Falcon Trading (under AED 50 million) must appoint an ASP before going live on 1 July 2027 — Aisha starts by cleaning customer master data and TRNs."),
    ),
    screen(
      "Year-end close",
      steps(
        ["Reconcile", "Bank, receivables, payables and VAT control accounts."],
        ["Adjust", "Accruals, prepayments, inventory and depreciation under IFRS."],
        ["Provide", "End-of-service benefit provisions for employees (IAS 19)."],
        ["Estimate", "Current Corporate Tax and deferred tax."],
      ),
      journal(
        [
          ["Income tax expense", "50,400", ""],
          ["Corporate Tax payable", "", "50,400"],
        ],
        "50,400",
      ),
    ),
    screen(
      "UAE compliance checklist",
      table(
        ["Area", "Check"],
        [
          ["VAT", "Returns filed by the 28th day after each period; reconciled"],
          ["Corporate Tax", "Registered; return and payment within 9 months"],
          ["Free zone", "QFZP conditions met; audited accounts"],
          ["Transfer pricing", "Related-party disclosure and documentation"],
          ["Records", "5 years VAT, 7 years Corporate Tax"],
          ["E-invoicing", "ASP appointed in time for the go-live date"],
        ],
      ),
    ),
    mistakes(
      ["Deleting records after 5 years", "Corporate Tax records are kept 7 years."],
      ["Waiting for the go-live date to start e-invoicing work", "Appoint an ASP well before."],
      ["No provision for end-of-service benefits", "Accrue gratuity under IAS 19."],
      ["Leaving Corporate Tax out of the accounts", "Record current tax at year-end."],
    ),
    check(
      6,
      q("How long must Corporate Tax records be kept?", ["7 years", "5 years", "3 years", "10 years"], 0, "From the end of the tax period."),
      q("When does e-invoicing become mandatory for businesses with revenue below AED 50 million?", ["1 July 2027", "1 January 2027", "1 July 2026", "1 January 2028"], 0, "Phase 2."),
      q("Who exchanges e-invoices and reports them to the FTA?", ["An accredited service provider", "The bank", "The free zone authority", "MOHRE"], 0, "ASP."),
      q("Which standard covers end-of-service benefit provisions?", ["IAS 19", "IFRS 15", "IAS 2", "IFRS 16"], 0, "Employee benefits."),
      q("When does e-invoicing become mandatory for revenue of AED 50 million or more?", ["1 January 2027", "1 July 2027", "1 October 2027", "1 July 2026"], 0, "Phase 1."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Retention",
          ["Can Aisha discard Falcon's 2020 VAT records in 2026 but keep the 2024 Corporate Tax workings?"],
          ["VAT records for periods ending in 2020 can go once 5 years have passed; Corporate Tax records for 2024 must be kept until at least the end of 2031."],
        ],
        [
          "Exercise 2 — E-invoicing",
          ["List three steps Falcon should take before 1 July 2027."],
          ["Appoint an accredited service provider, clean customer data and TRNs, and update its invoicing system and processes."],
        ],
      ),
    ),
    summary(
      ["Record retention", "E-invoicing phases", "IFRS year-end", "Audited statements", "The checklist"],
      "Close the year carefully and get ready for e-invoicing well before go-live.",
    ),
  ],
}

export default lessons
