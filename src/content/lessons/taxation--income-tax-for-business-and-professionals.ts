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

// Income Tax for Business & Professionals — lesson screens by module index
// (0 = Module 1). The course follows Ravi Sharma, owner of Sharma Electricals
// (a trader), and Dr Kavita Rao (a dentist) through tax year 2026-27 under the
// Income-tax Act, 2025. Figures are for learning, not personal advice.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Business and Professional Income",
      ["Business owners and professionals pay tax on their profits. This module introduces the head of income, the tax year and the regime choice through two taxpayers."],
      ["Explain the head “Profits and gains of business or profession”", "Distinguish business and profession, including specified professions", "Apply the tax year under the Income-tax Act, 2025", "Choose a method of accounting", "Choose between the new and old regimes for business income"],
    ),
    screen(
      "Meet Ravi and Dr Kavita",
      table(
        ["", "Ravi Sharma", "Dr Kavita Rao"],
        [
          ["Activity", "Sharma Electricals — wholesale trader in Lucknow", "Dental clinic in Mysuru"],
          ["Turnover / receipts 2026-27", "₹2,60,00,000", "₹68,00,000"],
          ["Cash share", "₹10,00,000 (3.8%)", "₹2,72,000 (4%)"],
          ["Question", "Presumptive or regular books?", "Is she a professional? Does she need an audit?"],
        ],
      ),
    ),
    screen(
      "The head of income",
      p("Income from carrying on a business or profession is taxed under “Profits and gains of business or profession”. It includes:"),
      bullets(
        "Trading, manufacturing and service profits.",
        "Professional fees.",
        "Certain receipts such as compensation connected with the business, and the value of benefits or perquisites from business.",
        "Profit on sale of certain assets treated as business income, such as stock-in-trade.",
      ),
    ),
    screen(
      "Business vs. profession",
      compare(
        ["Business", "Trade, commerce or manufacture.", ["Ravi's electrical wholesale"]],
        ["Profession", "Work needing special skill or qualification.", ["Dr Kavita's dentistry"]],
      ),
      terms(["Specified professions", "Legal, medical, engineering, architecture, accountancy, technical consultancy, interior decoration and other notified professions — they have specific rules for books and presumptive taxation."]),
    ),
    screen(
      "The tax year and method of accounting",
      bullets(
        "The tax year runs 1 April to 31 March — 2026-27 is the first under the Income-tax Act, 2025.",
        "Income up to 31 March 2026 stays under the 1961 Act.",
        "Profits are computed under the mercantile (accrual) or cash method, used consistently.",
        "Income computation and disclosure standards apply to mercantile-system taxpayers.",
      ),
      p("Ravi uses the mercantile method — sales are income when invoiced. Dr Kavita uses the cash method — fees are income when received."),
    ),
    screen(
      "Choosing a regime for business income",
      table(
        ["Point", "New regime (default)", "Old regime"],
        [
          ["Slab rates", "Lower — 5% to 30% from ₹4 lakh", "Higher — 5% to 30% from ₹2.5 lakh"],
          ["Deductions", "Few", "Investments, insurance, home loan and more"],
          ["Switching", "—", "Opt out by filing the prescribed form before the due date"],
        ],
      ),
      caution("A person with business income who opts out of the new regime can come back to it only once. Choose carefully — unlike salaried employees, they can't switch freely every year."),
    ),
    mistakes(
      ["Treating professional fees as “business”", "Check specified-profession rules."],
      ["Changing accounting methods", "Use one consistently."],
      ["Switching regimes casually", "Business taxpayers have limited switches."],
      ["Mixing income from before 1 April 2026", "It stays under the 1961 Act."],
    ),
    check(
      1,
      q("Under which head is a trader's profit taxed?", ["Profits and gains of business or profession", "Salaries", "Capital gains", "Income from other sources"], 0, "Business income."),
      q("Which is a specified profession?", ["Medical", "Retail trading", "Manufacturing", "Farming"], 0, "Along with legal, accountancy and others."),
      q("Which method recognises income when invoiced?", ["Mercantile", "Cash", "Presumptive", "Hybrid"], 0, "Accrual basis."),
      q("How often can a business taxpayer return to the new regime after opting out?", ["Only once", "Every year", "Never opt out", "Twice"], 0, "Unlike salaried employees."),
      q("When does the Income-tax Act, 2025 begin?", ["Tax year 2026-27", "Tax year 2025-26", "Tax year 2027-28", "Calendar 2026"], 0, "1 April 2026."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Business or profession? (a) An architect's fees, (b) an online clothing store, (c) a chartered accountant's practice."],
          ["(a) Profession — specified. (b) Business. (c) Profession — specified."],
        ],
        [
          "Exercise 2 — Method",
          ["Dr Kavita treats a patient in March 2027 but is paid in April 2027. Under her cash method, which tax year does the fee fall in?"],
          ["Tax year 2027-28 — when received."],
        ],
      ),
    ),
    summary(
      ["The business or profession head", "Business vs. profession and specified professions", "The tax year", "Mercantile and cash methods", "Regime choice and its limits"],
      "Know whether you run a business or a profession, use one accounting method, and choose your regime carefully.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Computing Taxable Profit",
      ["Tax isn't charged on book profit — it's adjusted first. This module computes Sharma Electricals' taxable profit for 2026-27."],
      ["Start from the profit in the books", "Identify allowable business expenses", "Calculate tax depreciation", "Add back disallowed expenses — personal, capital and cash payments", "Disallow expenses where TDS wasn't deducted", "Set off and carry forward business losses"],
    ),
    screen(
      "Starting from the books",
      table(
        ["Sharma Electricals, tax year 2026-27", "Amount"],
        [
          ["Net profit per profit and loss account", "₹14,20,000"],
          ["Add: personal expenses charged — family mobile, home electricity", "₹36,000"],
          ["Add: book depreciation", "₹1,40,000"],
          ["Add: cash payment of ₹18,000 to a supplier in one day", "₹18,000"],
          ["Add: income tax debited", "₹60,000"],
          ["Add: 30% of ₹2,00,000 contractor payments without TDS", "₹60,000"],
          ["Less: tax depreciation", "(₹1,60,000)"],
        ],
        { footer: ["Taxable business income", "₹15,74,000"], numeric: [1] },
      ),
    ),
    screen(
      "Allowable business expenses",
      bullets(
        "Expenses wholly and exclusively for the business — rent, salaries, freight, electricity, repairs, advertising.",
        "Interest on business borrowings.",
        "Bad debts actually written off.",
        "Employer contributions to approved funds within limits.",
        "Certain taxes and duties when actually paid (e.g. GST and employer's PF on time).",
      ),
      note("Some expenses — like employees' PF contributions deducted from wages — are allowed only if deposited by the due date under the relevant law."),
    ),
    screen(
      "Depreciation on business assets",
      table(
        ["Block (written down value)", "Rate", "Sharma Electricals"],
        [
          ["Plant and machinery (general)", "15%", "₹6,00,000 × 15% = ₹90,000"],
          ["Computers and software", "40%", "₹1,00,000 × 40% = ₹40,000"],
          ["Computers bought in October (used under 180 days)", "40% ÷ 2", "₹1,00,000 × 20% = ₹20,000"],
          ["Furniture", "10%", "₹1,00,000 × 10% = ₹10,000"],
        ],
        { footer: ["Tax depreciation", "", "₹1,60,000"], numeric: [2] },
      ),
      tip("Half rate", "Assets put to use for less than 180 days in the year get half the normal rate."),
    ),
    screen(
      "Disallowed expenses",
      table(
        ["Expense", "Why disallowed"],
        [
          ["Personal expenses", "Not for the business"],
          ["Capital expenditure", "Recovered through depreciation, not expensed"],
          ["Income tax", "A tax on profits, not a business cost"],
          ["Cash payments above ₹10,000 to a person in a day", "The whole payment is disallowed (higher limit for transporters)"],
          ["Penalties for breaking the law", "Not allowed"],
        ],
      ),
      caution("Depreciation is also denied on assets bought with cash payments above ₹10,000."),
    ),
    screen(
      "Payments where TDS was not deducted",
      p("If TDS was required but not deducted or not deposited by the return due date, 30% of the expense is disallowed for a resident payee."),
      example([["Contractor payments without TDS", "₹2,00,000"], ["Disallowed at 30%", "× 30%"]], ["Added back", "₹60,000"]),
      p("If Ravi deducts and deposits the TDS in a later year, the disallowed amount is allowed in that year."),
    ),
    screen(
      "Business losses",
      table(
        ["Rule", "Detail"],
        [
          ["Set-off in the same year", "Against other income except salary"],
          ["Carry forward", "Up to 8 years, against business income only"],
          ["Unabsorbed depreciation", "Carried forward indefinitely"],
          ["Condition", "The return for the loss year must be filed by the due date"],
        ],
      ),
    ),
    mistakes(
      ["Taxing book profit directly", "Make the adjustments."],
      ["Using book depreciation", "Replace it with tax depreciation."],
      ["Paying suppliers in cash above ₹10,000", "The whole amount is disallowed."],
      ["Filing a loss return late", "The loss can't be carried forward."],
    ),
    check(
      2,
      q("What rate applies to the general plant and machinery block?", ["15%", "40%", "10%", "25%"], 0, "On written down value."),
      q("An asset used for less than 180 days in the year gets:", ["Half the normal rate", "No depreciation", "Double the rate", "The full rate"], 0, "The half-year rule."),
      q("What share of an expense is disallowed when TDS wasn't deducted (resident payee)?", ["30%", "100%", "10%", "50%"], 0, "Allowed when TDS is later paid."),
      q("For how long can business losses be carried forward?", ["8 years", "4 years", "Indefinitely", "1 year"], 0, "Against business income."),
      q("Is income tax paid an allowable business expense?", ["No", "Yes", "Only for companies", "Only up to ₹10,000"], 0, "It's a tax on profits."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Adjust",
          ["Book profit ₹8,00,000. Includes book depreciation ₹50,000, owner's personal travel ₹20,000 and a ₹15,000 cash payment to one supplier in a day. Tax depreciation ₹70,000. Taxable profit?"],
          ["₹8,00,000 + ₹50,000 + ₹20,000 + ₹15,000 − ₹70,000 = ₹8,15,000."],
        ],
        [
          "Exercise 2 — Loss",
          ["Ravi's cousin has a business loss of ₹3,00,000 and salary of ₹9,00,000. Can he set the loss off against salary?"],
          ["No — business losses can't be set off against salary. He carries it forward (if the return is filed on time)."],
        ],
      ),
    ),
    summary(
      ["From book profit to taxable profit", "Allowable expenses", "Block depreciation and the half rate", "Disallowed expenses and cash payments", "30% TDS disallowance", "Losses"],
      "Start with book profit, add back what tax law disallows, and replace book depreciation with tax depreciation.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Presumptive Taxation — Section 58",
      ["Presumptive taxation lets small businesses and professionals pay tax on a deemed profit without detailed books. This module tests it for Ravi and Dr Kavita."],
      ["Know who can opt", "Apply the turnover limits for businesses", "Calculate deemed profit at 6% and 8%", "Apply the professional scheme at 50%", "Understand the goods carriage scheme", "Know that no further deductions are allowed and the five-year lock-in"],
    ),
    screen(
      "Who can opt",
      bullets(
        "Resident individuals, Hindu undivided families (HUFs) and partnership firms — but not limited liability partnerships (LLPs).",
        "Not companies.",
        "Each scheme has its own eligible activities — e.g. commission and agency businesses are excluded from the business scheme.",
      ),
    ),
    screen(
      "Businesses — turnover limits and deemed profit",
      table(
        ["Condition", "Limit"],
        [
          ["Turnover", "Up to ₹2 crore"],
          ["Turnover if cash receipts are within 5% of total", "Up to ₹3 crore"],
        ],
      ),
      table(
        ["Sharma Electricals", "Receipts", "Rate", "Deemed profit"],
        [
          ["Digital receipts (bank, UPI, cards)", "₹2,50,00,000", "6%", "₹15,00,000"],
          ["Other (cash) receipts", "₹10,00,000", "8%", "₹80,000"],
        ],
        { footer: ["Total", "₹2,60,00,000", "", "₹15,80,000"], numeric: [1, 3] },
      ),
      p("Cash is 3.8% of turnover, so Ravi's ₹2.6 crore turnover qualifies under the ₹3 crore limit."),
    ),
    screen(
      "Professionals — 50% deemed profit",
      table(
        ["Condition", "Limit"],
        [
          ["Gross receipts", "Up to ₹50 lakh"],
          ["Gross receipts if cash receipts are within 5%", "Up to ₹75 lakh"],
          ["Deemed profit", "50% of gross receipts"],
        ],
      ),
      example([["Dr Kavita's gross receipts (4% cash)", "₹68,00,000"], ["Deemed profit at 50%", "× 50%"]], ["Presumptive income", "₹34,00,000"]),
      note("A professional can declare a higher profit than 50%, but not lower without keeping books and getting an audit."),
    ),
    screen(
      "Goods carriages",
      bullets(
        "For owners of up to ten goods vehicles at any time in the year.",
        "Deemed income per vehicle per month — a fixed amount for light vehicles, and an amount per tonne of capacity for heavy goods vehicles.",
        "Partly or fully owned months both count.",
      ),
      p("Ravi's brother runs three trucks — he could use this scheme instead of tracking every trip."),
    ),
    screen(
      "No further deductions, and the lock-in",
      bullets(
        "Deemed profit is final — all business expenses, including depreciation, are treated as already allowed.",
        "Assets' written down value is reduced as if depreciation had been claimed.",
        "Five-year lock-in for businesses: if a business opts out within five years after opting in, it can't use the scheme for the next five years.",
        "No audit is needed if the presumptive profit (or higher) is declared.",
      ),
      table(
        ["Ravi's choice", "Taxable profit", "Paperwork"],
        [
          ["Presumptive", "₹15,80,000", "No detailed books; no audit"],
          ["Regular (Module 2)", "₹15,74,000", "Full books; no audit (cash within 5%)"],
        ],
        { numeric: [1] },
      ),
      tip("Compare both", "Ravi pays tax on ₹6,000 more under the presumptive scheme — a small price for simpler compliance."),
    ),
    mistakes(
      ["LLPs opting in", "LLPs aren't eligible."],
      ["Ignoring the cash test", "The higher limits need cash within 5%."],
      ["Claiming depreciation on top", "Deemed profit covers it."],
      ["Opting out casually", "The five-year lock-in applies."],
    ),
    check(
      3,
      q("What's the deemed profit rate on digital receipts for a business?", ["6%", "8%", "50%", "10%"], 0, "8% on other receipts."),
      q("What's the turnover limit for a business whose cash receipts are within 5%?", ["₹3 crore", "₹2 crore", "₹10 crore", "₹50 lakh"], 0, "Otherwise ₹2 crore."),
      q("What's the deemed profit for an eligible professional?", ["50% of gross receipts", "6%", "8%", "100%"], 0, "Or higher."),
      q("Which entity can't use the presumptive scheme?", ["An LLP", "A resident individual", "An HUF", "A partnership firm"], 0, "LLPs are excluded."),
      q("Under the presumptive scheme, can depreciation be claimed separately?", ["No — it's treated as allowed", "Yes, always", "Only on computers", "Only in year one"], 0, "Deemed profit is final."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Deemed profit",
          ["A shop has turnover of ₹1,80,00,000: ₹1,50,00,000 digital and ₹30,00,000 cash. Is it eligible, and what's the deemed profit?"],
          ["Turnover is under ₹2 crore, so eligible. Deemed profit: 6% × ₹1.5 crore + 8% × ₹30 lakh = ₹9,00,000 + ₹2,40,000 = ₹11,40,000."],
        ],
        [
          "Exercise 2 — Professional limit",
          ["A consultant has receipts of ₹72 lakh, of which 10% is cash. Can she use the 50% scheme?"],
          ["No — cash exceeds 5%, so the limit is ₹50 lakh, and ₹72 lakh is above it."],
        ],
      ),
    ),
    summary(
      ["Who can opt", "Business limits and 6%/8% deemed profit", "Professionals at 50%", "Goods carriages", "No further deductions and the lock-in"],
      "Presumptive taxation trades a slightly higher deemed profit for far simpler compliance — check eligibility, limits and the lock-in.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Books of Account and Tax Audit",
      ["Who must keep books, and who needs a tax audit? This module checks both for Ravi and Dr Kavita."],
      ["Keep books of account under section 62", "Know when a tax audit applies under section 63", "Apply the ₹10 crore limit for low-cash businesses", "Apply the professional audit limit", "Know when declaring less than presumptive profit triggers an audit", "Understand the audit report in Form 26"],
    ),
    screen(
      "Books of account — section 62",
      bullets(
        "Specified professionals and businesses above prescribed income or turnover limits must keep books of account.",
        "Specified professionals with higher receipts must keep prescribed books — cash book, journal, ledger, copies of bills, and for doctors a daily case register and inventory of medicines.",
        "Books are kept for the prescribed number of years.",
        "Presumptive taxpayers declaring deemed profit don't need detailed books.",
      ),
    ),
    screen(
      "Tax audit — section 63",
      table(
        ["Taxpayer", "Audit needed when"],
        [
          ["Business — normal", "Turnover above ₹1 crore"],
          ["Business — cash receipts and cash payments each within 5%", "Turnover above ₹10 crore"],
          ["Profession", "Gross receipts above ₹50 lakh"],
          ["Presumptive taxpayer declaring less than deemed profit", "When income exceeds the basic exemption limit"],
        ],
      ),
    ),
    screen(
      "Applying the limits",
      table(
        ["Taxpayer", "Position", "Audit?"],
        [
          ["Ravi — regular books", "Turnover ₹2.6 crore; cash receipts 3.8%, cash payments 2%", "No — under ₹10 crore"],
          ["Ravi — presumptive", "Declares ₹15,80,000", "No"],
          ["Dr Kavita — presumptive", "Declares 50% (₹34 lakh)", "No"],
          ["Dr Kavita — actual profit ₹30 lakh", "Receipts ₹68 lakh, above ₹50 lakh", "Yes"],
        ],
      ),
      caution("Both cash tests must be met for the ₹10 crore limit — receipts and payments. One large cash purchase can bring the ₹1 crore limit back."),
    ),
    screen(
      "Declaring less than presumptive profit",
      p("If Dr Kavita's real profit is ₹30 lakh, she can declare it — but then she must keep books and get a tax audit, because her receipts exceed ₹50 lakh."),
      compare(
        ["Presumptive at ₹34 lakh", "Tax on ₹4 lakh more.", ["No audit", "Simpler"]],
        ["Actual at ₹30 lakh", "Lower taxable income.", ["Books and audit needed", "Audit fees and earlier deadlines"]],
      ),
    ),
    screen(
      "The audit report",
      bullets(
        "From tax year 2026-27, the tax audit report is in Form 26 (earlier years used Forms 3CA/3CB and 3CD).",
        "Prepared by a chartered accountant and uploaded on the e-filing portal.",
        "Due one month before the return due date for audit cases — generally 30 September.",
        "Covers books, depreciation, disallowances, TDS compliance, GST turnover and more.",
      ),
      note("Due dates are sometimes extended by the CBDT — check the current year's notifications."),
    ),
    mistakes(
      ["Assuming the ₹10 crore limit applies", "Check both cash tests."],
      ["Declaring low profit without books", "That triggers an audit."],
      ["Uploading the audit report late", "Penalties can apply."],
      ["Using old audit forms for 2026-27", "Use Form 26."],
    ),
    check(
      4,
      q("What's the normal tax audit limit for a business?", ["Turnover above ₹1 crore", "Turnover above ₹10 crore", "Profit above ₹50 lakh", "Any turnover"], 0, "₹10 crore if both cash tests are met."),
      q("What's the audit limit for a professional?", ["Gross receipts above ₹50 lakh", "Above ₹1 crore", "Above ₹75 lakh", "Above ₹2 crore"], 0, "Unless presumptive income is declared."),
      q("What's needed for the ₹10 crore business limit?", ["Cash receipts and cash payments each within 5%", "Only cash receipts within 5%", "A profit above 8%", "A company structure"], 0, "Both tests."),
      q("Which form is the tax audit report from tax year 2026-27?", ["Form 26", "Form 3CD", "Form 130", "Form 168"], 0, "Earlier years used 3CA/3CB and 3CD."),
      q("When is the tax audit report generally due?", ["One month before the return due date", "On 31 July", "With GSTR-9", "Within 7 days of year end"], 0, "Generally 30 September."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Audit check",
          ["A trader has turnover of ₹6 crore; cash receipts 2%, cash payments 8%. Is an audit needed?"],
          ["Yes — cash payments exceed 5%, so the ₹1 crore limit applies, and ₹6 crore is above it."],
        ],
        [
          "Exercise 2 — Advice",
          ["Should Dr Kavita declare ₹30 lakh actual profit or ₹34 lakh presumptive?"],
          ["Compare the tax on ₹4 lakh (about ₹1.2 lakh at 30% plus cess) with the cost and effort of books and an audit. If audit costs are lower and books are good, declaring ₹30 lakh may save money; otherwise presumptive is simpler."],
        ],
      ),
    ),
    summary(
      ["Books under section 62", "Audit limits under section 63", "The ₹10 crore low-cash limit", "The ₹50 lakh professional limit", "Declaring below presumptive profit", "Form 26 and its due date"],
      "Check the audit limits every year — the cash tests and presumptive choices decide whether an audit is needed.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Advance Tax",
      ["Business owners have no employer deducting tax — so they pay it in advance through the year. This module schedules Ravi's advance tax."],
      ["Know who pays advance tax", "Apply the instalment dates", "Apply the single payment for presumptive taxpayers", "Estimate current-year income", "Calculate interest for short or late payment"],
    ),
    screen(
      "Who pays",
      bullets(
        "Anyone whose estimated tax for the year, after TDS and TCS, is ₹10,000 or more.",
        "Resident senior citizens (60+) without business or professional income are exempt.",
        "Tax is paid by challan on the e-filing portal.",
      ),
    ),
    screen(
      "Instalments",
      table(
        ["By", "Cumulative share of tax"],
        [
          ["15 June", "15%"],
          ["15 September", "45%"],
          ["15 December", "75%"],
          ["15 March", "100%"],
        ],
      ),
      p("If Ravi used regular books, his estimated tax of ₹1,21,680 would need cumulative payments of ₹18,252, ₹54,756, ₹91,260 and ₹1,21,680."),
    ),
    screen(
      "Presumptive taxpayers — one payment",
      p("Businesses and professionals using the presumptive scheme can pay all their advance tax in one instalment by 15 March."),
      table(
        ["Ravi — presumptive, new regime", "Amount"],
        [
          ["Deemed profit", "₹15,80,000"],
          ["Tax: ₹20,000 + ₹40,000 + 15% × ₹3,80,000", "₹1,17,000"],
          ["Cess 4%", "₹4,680"],
        ],
        { footer: ["Advance tax due by 15 March 2027", "₹1,21,680"], numeric: [1] },
      ),
      note("Business income gets no standard deduction — that's only for salary."),
    ),
    screen(
      "Estimating current-year income",
      steps(
        ["Start with year-to-date results", "From the books or sales records."],
        ["Project the rest of the year", "Adjust for seasonality and known changes."],
        ["Add other income", "Interest, rent, capital gains."],
        ["Compute tax", "In the chosen regime, less TDS and TCS."],
        ["Re-estimate before each instalment", "Top up if income is running higher."],
      ),
      tip("Capital gains", "Advance tax on capital gains arising after an instalment date is due with the next instalment — no interest for the earlier ones."),
    ),
    screen(
      "Interest for short or late payment",
      table(
        ["Default", "Interest"],
        [
          ["Instalment paid short or late", "1% a month on the shortfall, generally for 3 months per instalment (1 month for the March one)"],
          ["Less than 90% of tax paid by 31 March", "1% a month on the shortfall from 1 April until payment"],
        ],
      ),
      example([["Required by 15 September (regular)", "₹54,756"], ["Paid", "−₹30,000"], ["Shortfall × 1% × 3 months", ""]], ["Interest", "about ₹743"]),
      note("Interest calculations round amounts under specified rules — the e-filing utility computes it."),
    ),
    mistakes(
      ["Waiting until the return", "Interest builds from June."],
      ["Using last year's income blindly", "Re-estimate each quarter."],
      ["Forgetting other income", "Interest and gains count."],
      ["Deducting a standard deduction from business income", "It's salary only."],
    ),
    check(
      5,
      q("Advance tax applies when estimated tax after TDS is at least:", ["₹10,000", "₹1,000", "₹50,000", "₹1 lakh"], 0, "For the tax year."),
      q("What cumulative share is due by 15 December?", ["75%", "45%", "15%", "100%"], 0, "Then 100% by 15 March."),
      q("When do presumptive taxpayers pay advance tax?", ["In one instalment by 15 March", "Four instalments", "Never", "With the return"], 0, "A single payment."),
      q("Which resident seniors are exempt from advance tax?", ["Those without business or professional income", "All seniors", "None", "Only those over 80"], 0, "Business income removes the exemption."),
      q("What's the interest rate for advance tax shortfalls?", ["1% a month", "1.5% a month", "18% a year", "2% a month"], 0, "On the shortfall."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Schedule",
          ["Estimated tax ₹2,00,000; TDS ₹20,000. What are the cumulative instalments?"],
          ["Net ₹1,80,000: ₹27,000 by 15 June, ₹81,000 by 15 September, ₹1,35,000 by 15 December, ₹1,80,000 by 15 March."],
        ],
        [
          "Exercise 2 — Dr Kavita",
          ["Calculate Dr Kavita's advance tax on presumptive income of ₹34 lakh (new regime) and when it's due."],
          ["Tax ₹6,00,000 + cess ₹24,000 = ₹6,24,000, payable by 15 March 2027 (single instalment)."],
        ],
      ),
    ),
    summary(
      ["Who pays advance tax", "Instalments of 15%, 45%, 75% and 100%", "The 15 March single payment for presumptive taxpayers", "Estimating income", "Interest for shortfalls"],
      "Estimate tax early and pay on time — presumptive taxpayers get the convenience of one payment by 15 March.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Filing and Compliance",
      ["The year ends with the return. This module chooses the forms, deadlines and checks for Ravi and Dr Kavita."],
      ["Choose the right return form", "Know the due dates for audited and non-audited cases", "Check TDS and TCS credits in Form 168", "Reconcile GST turnover with income tax turnover", "Handle notices and keep records", "Use a year-end checklist"],
    ),
    screen(
      "Choosing the return form",
      table(
        ["Form", "Used by"],
        [
          ["ITR-4 (Sugam)", "Resident individuals, HUFs and firms (not LLPs) with presumptive business or professional income, total income up to ₹50 lakh"],
          ["ITR-3", "Individuals and HUFs with business or professional income not eligible for ITR-4"],
          ["ITR-5", "Firms, LLPs and other entities"],
        ],
      ),
      p("Ravi (₹15.8 lakh) and Dr Kavita (₹34 lakh) both use ITR-4 under the presumptive scheme. Check the forms notified for tax year 2026-27."),
    ),
    screen(
      "Due dates",
      table(
        ["Case", "Return due (typical)"],
        [
          ["Business or profession — no audit", "31 August after the tax year"],
          ["Audit cases", "31 October after the tax year (audit report one month earlier)"],
          ["Transfer pricing cases", "30 November"],
        ],
      ),
      p("For tax year 2026-27, Ravi and Dr Kavita (no audit) file by 31 August 2027."),
      note("The Finance Act, 2026 moved non-audit business returns to 31 August. The CBDT sometimes extends audit dates — check the year's notifications."),
    ),
    screen(
      "TDS and TCS credits in Form 168",
      bullets(
        "Customers deduct TDS on many business payments — e.g. 0.1% by a large buyer on Ravi's sales above ₹50 lakh to it, 10% on Dr Kavita's fees from a corporate wellness client.",
        "Credit is allowed only for TDS appearing in Form 168 against your PAN.",
        "Match Form 168 and AIS with the books — income in Form 168 should be in the return too.",
      ),
      caution("Unclaimed TDS is lost money; unreported receipts shown in AIS lead to notices."),
    ),
    screen(
      "GST turnover vs. income tax turnover",
      table(
        ["Ravi, tax year 2026-27", "Amount"],
        [
          ["Turnover per GST returns (excluding GST)", "₹2,61,50,000"],
          ["Less: credit notes for returns issued after year end, adjusted in books", "(₹1,50,000)"],
        ],
        { footer: ["Turnover per books and return", "₹2,60,00,000"], numeric: [1] },
      ),
      p("The department compares the two. Keep a reconciliation explaining each difference — timing, credit notes, stock transfers, non-taxable receipts."),
    ),
    screen(
      "Notices and records",
      bullets(
        "Intimations after processing compare your return with Form 168 and AIS — reply online if you disagree.",
        "Scrutiny notices ask for books, bills and explanations — respond by the deadline.",
        "Keep books, bills, bank statements and GST records for the required period, plus longer for open matters.",
      ),
    ),
    screen(
      "Business taxpayer's year-end checklist",
      bullets(
        "Decide presumptive vs. regular, and check the audit limits.",
        "Confirm the regime choice (and the form, if opting out).",
        "Compute taxable profit with all disallowances, or deemed profit.",
        "Pay any balance as self-assessment tax.",
        "Reconcile Form 168, AIS and GST turnover.",
        "Get the audit report uploaded on time, if needed.",
        "File the right ITR by the due date and e-verify.",
      ),
    ),
    mistakes(
      ["Using ITR-4 for an LLP", "LLPs use ITR-5."],
      ["Ignoring AIS receipts", "Report them."],
      ["No GST reconciliation", "Explain every difference."],
      ["Filing a loss return late", "Losses can't be carried forward."],
    ),
    check(
      6,
      q("Which form suits a resident individual using presumptive taxation with income under ₹50 lakh?", ["ITR-4", "ITR-3", "ITR-1", "ITR-5"], 0, "Sugam."),
      q("When is a non-audit business return due?", ["31 August", "31 July", "31 October", "31 December"], 0, "After the Finance Act, 2026."),
      q("When is an audit-case return generally due?", ["31 October", "31 August", "30 September", "31 March"], 0, "Audit report a month earlier."),
      q("What's compared with income tax turnover?", ["GST turnover", "Bank balance", "Payroll", "Share capital"], 0, "Reconcile differences."),
      q("Which form do LLPs use?", ["ITR-5", "ITR-4", "ITR-3", "ITR-1"], 0, "Entities other than individuals and HUFs."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Due date",
          ["Ravi switches to regular books and his turnover rises to ₹12 crore. Which form and due date?"],
          ["Turnover above ₹10 crore needs an audit — ITR-3, due 31 October 2027 (audit report by 30 September), unless extended."],
        ],
        [
          "Exercise 2 — TDS credit",
          ["Dr Kavita's books show ₹1,20,000 fees from a corporate client with ₹12,000 TDS, but Form 168 shows nothing. What should she do?"],
          ["Ask the client to file or correct its TDS statement with her PAN; she can claim the credit once it appears in Form 168."],
        ],
      ),
    ),
    summary(
      ["ITR-3, ITR-4 and ITR-5", "Due dates for non-audit, audit and transfer pricing cases", "TDS and TCS in Form 168", "GST vs. income tax turnover", "Notices and records", "The year-end checklist"],
      "Pick the right form, meet the right deadline, and reconcile every credit and turnover figure before filing.",
    ),
  ],
}

export default lessons
