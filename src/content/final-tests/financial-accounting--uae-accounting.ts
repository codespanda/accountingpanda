import { fq } from "@/lib/finalTest"

// Final test bank for UAE Accounting — separate from the module knowledge
// checks. The correct answer is listed first; the test shuffles the options.

export default [
  // Module 1
  fq("Which simplified framework can eligible smaller UAE entities use?", "IFRS for SMEs", ["US GAAP", "Cash-basis accounts", "Ind AS"], "Smaller entities."),
  fq("To which currency is the AED pegged?", "The US dollar", ["The euro", "Gold", "The Saudi riyal"], "At about 3.6725."),
  fq("Through which portal are UAE tax registrations and returns filed?", "EmaraTax", ["GST portal", "Shram Suvidha", "myGov"], "Run by the FTA."),
  fq("What identifies a business registered with the FTA?", "Its Tax Registration Number (TRN)", ["Its ABN", "Its EIN", "Its PAN"], "TRN."),
  fq("Who licenses a Dubai mainland company?", "The emirate's economic department", ["The FTA", "A free zone authority", "MOHRE"], "For example Dubai DET."),
  fq("Where is Falcon Logistics FZE based?", "In a free zone", ["On the Dubai mainland", "Offshore", "In Oman"], "Warehousing."),

  // Module 2
  fq("Above what level can a business register for VAT voluntarily?", "AED 187,500", ["AED 375,000", "AED 50,000", "AED 1 million"], "Supplies or expenses."),
  fq("Is residential rent after the first supply standard-rated, zero-rated or exempt?", "Exempt", ["Standard-rated", "Zero-rated", "Reverse charged"], "No input VAT recovery."),
  fq("Can input VAT on client entertainment usually be recovered?", "No — it's blocked", ["Yes, fully", "Only half", "Only for exports"], "Blocked expenses."),
  fq("What word must appear on a full tax invoice?", "Tax Invoice", ["Receipt", "Proforma", "Quotation"], "Plus the supplier's TRN."),
  fq("What's the reverse charge VAT on AED 80,000 of imported services?", "AED 4,000", ["AED 8,000", "AED 0", "AED 400"], "5%."),
  fq("What VAT applies to AED 60,000 of desks sold to a Dubai bank?", "AED 3,000", ["AED 0", "AED 6,000", "AED 9,000"], "Standard-rated."),

  // Module 3
  fq("How often do most UAE businesses file VAT returns?", "Quarterly", ["Monthly", "Annually", "Weekly"], "Monthly for very large ones."),
  fq("Which box reports standard-rated expenses?", "Box 9", ["Box 1", "Box 4", "Box 3"], "Input VAT."),
  fq("How are errors of AED 10,000 or less in a filed return usually corrected?", "In the next return", ["By voluntary disclosure always", "They're ignored", "By a new registration"], "Small errors."),
  fq("By when is the October–December 2026 VAT return due?", "28 January 2027", ["31 December 2026", "28 February 2027", "15 January 2027"], "28 days after the period."),
  fq("What lowers penalties for errors discovered by the business?", "A voluntary disclosure before an FTA audit notice", ["Waiting for an audit", "Deleting the return", "Paying next year"], "Fix early."),
  fq("In which box is reverse charge input VAT recovered?", "Box 10", ["Box 3", "Box 1", "Box 5"], "Output in box 3."),

  // Module 4
  fq("Above what turnover do individuals doing business become subject to Corporate Tax?", "AED 1 million", ["AED 375,000", "AED 3 million", "Any turnover"], "Natural persons."),
  fq("What's Corporate Tax on taxable income of AED 375,000?", "AED 0", ["AED 33,750", "AED 18,750", "AED 3,375"], "Within the 0% band."),
  fq("What's Corporate Tax on taxable income of AED 1,375,000?", "AED 90,000", ["AED 123,750", "AED 68,750", "AED 33,750"], "9% × AED 1,000,000."),
  fq("Are fines and penalties deductible for Corporate Tax?", "No", ["Yes", "Only half", "Only under AED 10,000"], "Added back."),
  fq("Above what level of net interest can the 30% of EBITDA limit apply?", "AED 12 million", ["AED 375,000", "AED 1 million", "AED 50 million"], "Interest limitation."),
  fq("Which groups can't use small business relief?", "Qualifying free zone persons and members of large multinational groups", ["All mainland companies", "Individuals", "Companies under AED 3 million"], "Exclusions."),

  // Module 5
  fq("What does a QFZP pay on non-qualifying taxable income?", "9%", ["0%", "5%", "15%"], "Standard rate."),
  fq("What is Falcon Logistics' non-qualifying share if it earns AED 80,000 of AED 2 million from the mainland?", "4%", ["8%", "2%", "40%"], "Within 5%."),
  fq("What must a QFZP keep in the free zone?", "Adequate substance", ["Only a mailbox", "Nothing", "A bank account abroad"], "Substance requirement."),
  fq("Which of these can be an exempt person for Corporate Tax?", "A qualifying public benefit entity", ["A mainland trading LLC", "A free zone logistics company", "A sole trader over AED 1 million"], "Exempt persons."),
  fq("Which records support transfer pricing for larger businesses?", "A master file and local file", ["Only invoices", "VAT returns", "Payroll records"], "Documentation."),
  fq("On which products is excise tax charged?", "Tobacco, energy drinks, sweetened drinks and e-cigarettes", ["All food", "Furniture", "Software"], "Excise goods."),

  // Module 6
  fq("How long must VAT records be kept?", "5 years", ["7 years", "2 years", "10 years"], "From the end of the tax period."),
  fq("When does e-invoicing apply to government entities?", "1 October 2027", ["1 January 2027", "1 July 2026", "1 July 2027"], "After Phase 2."),
  fq("What's Falcon Trading's year-end Corporate Tax entry for 2026?", "Dr Income tax expense / Cr Corporate Tax payable", ["Dr Sales / Cr Cash", "No entry until paid", "Dr VAT payable / Cr Sales"], "Current tax."),
  fq("What's an early e-invoicing step for Falcon?", "Cleaning customer master data and TRNs", ["Closing the business", "Stopping VAT returns", "Moving to a free zone"], "Data readiness."),
  fq("What is the deadline phase that applies to Falcon Trading for e-invoicing?", "Phase 2 — 1 July 2027", ["Phase 1 — 1 January 2027", "Pilot — 1 July 2026", "None"], "Revenue under AED 50 million."),
  fq("Which adjustment covers employees' end-of-service benefits at year-end?", "A provision under IAS 19", ["A VAT adjustment", "A sales accrual", "A dividend"], "Gratuity provision."),
]
