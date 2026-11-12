import { fq } from "@/lib/finalTest"

// Final test bank for Property Accounting in India — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("Which standard applies to Vrindavan's own head office floor?", "Ind AS 16", ["Ind AS 40", "Ind AS 2", "Ind AS 115"], "Property, plant and equipment."),
  fq("A plot held for long-term capital appreciation is classified as…", "Investment property", ["Inventory", "PPE", "A financial asset"], "Ind AS 40."),
  fq("Which certificate allows flats to be occupied?", "The occupancy certificate", ["The RERA certificate", "The allotment letter", "The GST registration"], "Issued by the local authority."),
  fq("How many flats does Lotus Heights have?", "120", ["60", "500", "8"], "Registered with MahaRERA."),
  fq("Who builds for a developer under a works contract?", "A contractor", ["A landlord", "A property manager", "A tenant"], "Works contract."),
  fq("What happens when an own-use floor is leased out?", "It's transferred from PPE to investment property", ["Nothing", "It becomes inventory", "It's written off"], "Change of use."),

  // Module 2
  fq("What GST is charged on ₹2,50,000 of commercial rent?", "₹45,000", ["₹12,500", "₹30,000", "₹25,000"], "18%."),
  fq("On which amount does a company tenant work out TDS when GST is shown separately?", "Rent excluding GST", ["Rent including GST", "GST only", "The security deposit"], "TDS on rent."),
  fq("What's the house property income on ₹6,00,000 rent, ₹30,000 municipal tax and no loan?", "₹3,99,000", ["₹4,20,000", "₹5,70,000", "₹6,00,000"], "₹5,70,000 − 30%."),
  fq("Which standard may require an interest-free deposit to be measured at present value?", "Ind AS 109", ["Ind AS 2", "Ind AS 40", "Ind AS 23"], "Financial instruments."),
  fq("Is replacing all lifts in the building expensed or capitalised?", "Capitalised", ["Expensed", "Ignored", "Charged to the tenant"], "Major upgrade."),
  fq("Where does Kavita check TDS deducted by tenants?", "Form 26AS / AIS", ["The RERA website", "The GST portal", "The sale deed"], "Tax credit statement."),

  // Module 3
  fq("Under which Act are real estate projects registered?", "The Real Estate (Regulation and Development) Act, 2016", ["The Companies Act, 2013", "The GST Act", "The Transfer of Property Act only"], "RERA."),
  fq("A project has 6 apartments on 400 sq m of land. Must it register under RERA?", "No — under both thresholds", ["Yes", "Only in Mumbai", "Only if over ₹1 crore"], "500 sq m or more than eight apartments."),
  fq("What can RERA account money be used for?", "Land and construction costs of that project", ["Any company expense", "Dividends", "Another project"], "Ring-fenced."),
  fq("What's the total estimated cost of Lotus Heights?", "₹100 crore", ["₹58 crore", "₹130 crore", "₹30 crore"], "Including land and borrowing costs."),
  fq("What's the minimum RERA deposit on ₹8 crore of collections?", "₹5.6 crore", ["₹8 crore", "₹4 crore", "₹2.4 crore"], "70%."),
  fq("How often are a project's RERA accounts audited?", "Every year", ["Never", "Every five years", "Only on completion"], "With CA certification."),

  // Module 4
  fq("What happens to buyer advances when possession is given?", "They're transferred to revenue", ["They're refunded", "They stay as liabilities", "They go to equity"], "Point in time."),
  fq("What's matched against flat revenue on possession?", "Cost of sales from project inventory", ["Depreciation", "GST", "Stamp duty"], "Matching."),
  fq("Which items may be excluded from a cost-to-cost progress measure?", "Land and uninstalled materials", ["Labour", "Cement used", "Site supervision"], "If they don't show transfer."),
  fq("With 30% progress and ₹200 crore of flats sold, what's revenue to date under over time?", "₹60 crore", ["₹30 crore", "₹200 crore", "₹140 crore"], "30% × ₹200 crore."),
  fq("Why did Vrindavan choose point-in-time recognition?", "Its agreements don't give an enforceable right to payment for work done", ["It's simpler", "RERA requires it", "GST requires it"], "Ind AS 115 criteria."),
  fq("What's booked when a buyer pays ₹30 lakh plus 5% GST?", "Contract liability ₹30 lakh and GST ₹1.5 lakh", ["Revenue ₹31.5 lakh", "Revenue ₹30 lakh", "Equity ₹30 lakh"], "Before possession."),

  // Module 5
  fq("What carpet area limit applies to affordable housing in a metro?", "60 sq m", ["90 sq m", "45 sq m", "120 sq m"], "90 sq m elsewhere."),
  fq("What GST applies to an ₹80 lakh under-construction flat in Pune?", "₹4,00,000", ["₹80,000", "₹9,60,000", "Nil"], "5%."),
  fq("Is TDS on property purchase due on agricultural land?", "No", ["Yes", "Only above ₹1 crore", "Only in cities"], "Excluded."),
  fq("Under which section of the Income-tax Act, 2025 is TDS on property purchases?", "Section 393", ["Section 194-IA of the 2025 Act", "Section 80C", "Section 10"], "Carried over from 194-IA."),
  fq("Can a developer charging 5% GST on flats claim input tax credit?", "No", ["Yes, fully", "Only on cement", "Only on steel"], "No ITC under the scheme."),
  fq("How is stamp duty on land bought by a developer treated?", "Part of the land cost in project inventory", ["Expensed", "Charged to buyers", "A deferred tax asset"], "Capitalised."),

  // Module 6
  fq("What's included in the initial cost of investment property?", "Purchase price plus transaction costs such as stamp duty", ["Only the purchase price", "Fair value", "Rent for the first year"], "Ind AS 40."),
  fq("Investment property is redeveloped for sale. What transfer happens?", "Investment property → inventory", ["Inventory → PPE", "No change", "PPE → investment property"], "Change of use."),
  fq("What's the fair value of Vrindavan's 3rd floor per its valuer?", "₹32 crore", ["₹18 crore", "₹24 crore", "₹100 crore"], "Disclosed, not recorded."),
  fq("What's reconciled to the buyer ledger at year-end?", "Contract liabilities", ["Depreciation", "Fair value", "Stamp duty"], "Customer advances."),
  fq("What's the write-down on a flat costing ₹50 lakh with NRV of ₹47 lakh?", "₹3 lakh", ["₹47 lakh", "Nil", "₹50 lakh"], "Lower of cost and NRV."),
  fq("Which disclosure is required for investment property income?", "Rental income and direct operating expenses", ["Only the purchase date", "Tenant names", "GST registration"], "Ind AS 40 disclosure."),
]
