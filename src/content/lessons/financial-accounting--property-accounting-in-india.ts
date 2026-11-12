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

// Property Accounting in India — lesson screens by module index (0 = Module
// 1). The course follows Vrindavan Realty Pvt Ltd, a Pune developer building
// the "Lotus Heights" residential project (registered with MahaRERA) and
// owning an office floor leased to an IT company. Ind AS applies. GST on
// residential flats: 1% (affordable) and 5% (other) without ITC; no GST after
// the completion certificate. TDS under the Income-tax Act, 2025 (from
// 1 April 2026): 1% on property of ₹50 lakh or more; rent above ₹50,000 a
// month — 10% for businesses, 2% for individuals not under audit.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Property Businesses in India",
      ["Property businesses range from individual landlords to large developers. This module introduces the main players and how property is classified, through Vrindavan Realty."],
      ["Recognise the main property businesses", "Know which accounting framework applies", "Classify property as inventory, PPE or investment property", "Know the key property documents"],
    ),
    screen(
      "Meet Vrindavan Realty",
      p("Vrindavan Realty Pvt Ltd develops housing in Pune. Its current project, Lotus Heights, has 120 flats and is registered with MahaRERA. It also owns an office floor in Baner leased to an IT company, and uses another floor as its own head office. Kavita is its finance manager."),
      table(
        ["Property", "Use"],
        [
          ["Lotus Heights flats", "Built for sale to customers"],
          ["Baner office — 3rd floor", "Leased to an IT company"],
          ["Baner office — 4th floor", "Vrindavan's own head office"],
        ],
      ),
    ),
    screen(
      "Who's who in property",
      table(
        ["Business", "Main activity"],
        [
          ["Landlord", "Owns and lets property for rent"],
          ["Developer / builder", "Buys land, builds and sells units"],
          ["Property manager", "Manages buildings for owners"],
          ["Contractor", "Builds for a developer under a works contract"],
        ],
      ),
    ),
    screen(
      "Frameworks",
      compare(
        ["Ind AS", "Listed companies and larger unlisted companies above the net worth thresholds.", ["Vrindavan uses Ind AS", "Ind AS 115 for revenue, Ind AS 40 for investment property"]],
        ["Accounting Standards (AS)", "Smaller companies and other entities.", ["ICAI Guidance Note on real estate transactions"]],
      ),
    ),
    screen(
      "Classifying property",
      table(
        ["Held for", "Classification", "Standard", "Vrindavan"],
        [
          ["Sale in the ordinary course of business", "Inventory", "Ind AS 2", "Lotus Heights flats"],
          ["Own use", "Property, plant and equipment", "Ind AS 16", "4th floor head office"],
          ["Earning rent or capital appreciation", "Investment property", "Ind AS 40", "3rd floor leased to IT company"],
        ],
      ),
      note("The same building can hold properties in different classes — classify each part by its use."),
    ),
    screen(
      "Key documents",
      bullets(
        "Title documents and the sale deed for land.",
        "Agreement for sale with each flat buyer — registered, with the payment schedule.",
        "Allotment letter and RERA registration certificate.",
        "Commencement, occupancy and completion certificates from the local authority.",
        "Lease deeds for rented property.",
      ),
    ),
    mistakes(
      ["Treating developers' flats as fixed assets", "Flats for sale are inventory."],
      ["Calling an own-use office investment property", "Own use is PPE."],
      ["One classification for a whole building", "Classify each part by use."],
      ["Ignoring the agreement terms", "They drive revenue recognition."],
    ),
    check(
      1,
      q("How are Lotus Heights flats classified in Vrindavan's books?", ["Inventory", "Investment property", "PPE", "Intangible assets"], 0, "Held for sale."),
      q("Which standard covers property held to earn rent?", ["Ind AS 40", "Ind AS 16", "Ind AS 2", "Ind AS 115"], 0, "Investment property."),
      q("How is Vrindavan's own head office classified?", ["PPE", "Inventory", "Investment property", "Capital work-in-progress forever"], 0, "Own use."),
      q("Which document sets each flat buyer's payment schedule?", ["The agreement for sale", "The completion certificate", "The lease deed", "The RERA website"], 0, "Registered agreement."),
      q("What guidance do non-Ind AS entities use for real estate?", ["ICAI Guidance Note on real estate transactions", "IFRS 17", "US GAAP ASC 970", "No guidance"], 0, "For AS entities."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Vrindavan holds a plot bought for long-term capital appreciation with no plan to develop. How is it classified?"],
          ["Investment property under Ind AS 40 — held for capital appreciation, not for sale in the ordinary course."],
        ],
        [
          "Exercise 2 — Change of use",
          ["Vrindavan moves its head office from the 4th floor and leases it out. What changes?"],
          ["It's transferred from PPE to investment property when the use changes."],
        ],
      ),
    ),
    summary(
      ["Property businesses", "Ind AS vs. AS", "Inventory, PPE and investment property", "Key documents", "Vrindavan's properties"],
      "Classify property by why it's held — that decides which standard applies.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Rental Property Accounting",
      ["Vrindavan leases its 3rd floor to an IT company. Kavita records rent, deposits, costs and TDS."],
      ["Record rent and GST", "Account for security deposits", "Record property costs and depreciation", "Understand rental income for individuals", "Apply TDS on rent"],
    ),
    screen(
      "Recording monthly rent",
      example([["Monthly rent", "₹3,00,000"], ["GST at 18%", "₹54,000"], ["Less TDS by tenant at 10% of rent", "−₹30,000"]], ["Bank receipt", "₹3,24,000"]),
      journal(
        [
          ["Bank", "3,24,000", ""],
          ["TDS receivable", "30,000", ""],
          ["Rental income", "", "3,00,000"],
          ["Output GST payable", "", "54,000"],
        ],
        "3,54,000",
      ),
      note("TDS is worked out on the rent excluding GST when GST is shown separately."),
    ),
    screen(
      "Security deposits",
      p("The tenant paid a refundable deposit of six months' rent — ₹18,00,000. It's a liability, not income."),
      journal([["Bank", "18,00,000", ""], ["Security deposit from tenant", "", "18,00,000"]], "18,00,000"),
      caution("Interest-free deposits may need to be measured at present value under Ind AS 109 — the difference is treated as advance rent."),
    ),
    screen(
      "Costs and depreciation",
      table(
        ["Cost", "Treatment"],
        [
          ["Property tax ₹2,40,000 a year", "Expense over the year"],
          ["Repairs and maintenance", "Expense"],
          ["New lifts and major upgrades", "Capitalise"],
          ["Building", "Depreciate over useful life (60 years for RCC non-factory buildings under Schedule II)"],
          ["Land", "Not depreciated"],
        ],
      ),
    ),
    screen(
      "Rental income for individuals",
      p("For individual landlords, rent is taxed as income from house property."),
      example([["Annual rent (Meera's flat)", "₹4,80,000"], ["Less municipal taxes paid", "−₹20,000"], ["Net annual value", "₹4,60,000"], ["Less standard deduction 30%", "−₹1,38,000"], ["Less interest on home loan", "−₹1,50,000"]], ["Income from house property", "₹1,72,000"]),
    ),
    screen(
      "TDS on rent",
      table(
        ["Tenant", "When", "Rate on land and buildings"],
        [
          ["Business or person under audit", "Rent above ₹50,000 a month", "10%"],
          ["Individual or HUF not under audit", "Rent above ₹50,000 a month", "2%"],
        ],
      ),
      tip("Claim the credit", "Kavita matches TDS deducted by the tenant to Vrindavan's Form 26AS / AIS before filing the return."),
    ),
    mistakes(
      ["Recording deposits as income", "They're refundable liabilities."],
      ["Depreciating land", "Only the building is depreciated."],
      ["Ignoring TDS receivable", "Record it and claim it."],
      ["Recording GST as rental income", "It's a liability."],
    ),
    check(
      2,
      q("What GST rate applies to Vrindavan's commercial office rent?", ["18%", "5%", "12%", "Exempt"], 0, "Commercial rent."),
      q("What TDS does a company tenant deduct on ₹3,00,000 monthly rent?", ["₹30,000", "₹6,000", "₹54,000", "₹15,000"], 0, "10%."),
      q("How is a refundable security deposit recorded?", ["As a liability", "As rental income", "As an expense", "As equity"], 0, "Refundable."),
      q("What standard deduction applies to net annual value for individuals?", ["30%", "50%", "10%", "None"], 0, "House property income."),
      q("Above what monthly rent must tenants deduct TDS?", ["₹50,000", "₹20,000", "₹2.4 lakh", "₹1 lakh"], 0, "Under the Income-tax Act, 2025."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Rent receipt",
          ["Monthly rent is ₹2,50,000 plus GST, and the tenant is a company. What's received in the bank?"],
          ["₹2,50,000 + ₹45,000 GST − ₹25,000 TDS = ₹2,70,000."],
        ],
        [
          "Exercise 2 — Individual tenant",
          ["A salaried individual pays ₹60,000 a month rent for a flat. What TDS applies?"],
          ["2% of the rent, as it exceeds ₹50,000 a month — individual tenants deduct it once, in the last month of the year or of the tenancy (₹14,400 for a full year)."],
        ],
      ),
    ),
    summary(
      ["Rent with GST and TDS", "Security deposits", "Costs and depreciation", "House property income", "TDS on rent"],
      "Rent, deposits and taxes each go to their own account.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Real Estate Projects and RERA",
      ["Lotus Heights is registered under RERA. Kavita sets up project accounting and the RERA bank account."],
      ["Know when a project must be registered", "Apply the 70% designated account rule", "Build project cost", "Capitalise borrowing costs", "Make certified withdrawals"],
    ),
    screen(
      "RERA registration",
      bullets(
        "The Real Estate (Regulation and Development) Act, 2016 requires projects to be registered with the state authority — such as MahaRERA in Maharashtra.",
        "Projects on land over 500 square metres or with more than eight apartments must register.",
        "Units can't be advertised or sold before registration.",
      ),
    ),
    screen(
      "The 70% designated account",
      p("At least 70% of the amounts realised from buyers must be deposited in a separate bank account for the project, used only for land and construction costs of that project."),
      example([["November collections from buyers", "₹10,00,00,000"], ["× 70%", ""]], ["Deposit in RERA account", "₹7,00,00,000"]),
    ),
    screen(
      "Project cost",
      table(
        ["Cost", "Lotus Heights (₹ crore)"],
        [
          ["Land and development rights", "30"],
          ["Approvals and premiums", "6"],
          ["Construction", "58"],
          ["Borrowing costs during construction", "6"],
          ["Total estimated project cost", "100"],
        ],
      ),
      p("All these costs build up as work-in-progress inventory under Ind AS 2. Borrowing costs on a qualifying asset are capitalised under Ind AS 23."),
    ),
    screen(
      "Withdrawals",
      steps(
        ["Cost incurred", "Work out land and construction cost incurred to date."],
        ["Proportion", "Withdraw in proportion to the percentage of completion."],
        ["Certification", "Each withdrawal is certified by the project engineer, architect and a chartered accountant."],
        ["Annual audit", "The accounts are audited each year, and the CA certifies the amounts collected and used."],
      ),
    ),
    mistakes(
      ["Using RERA funds for another project", "They're for this project's land and construction only."],
      ["Depositing less than 70%", "At least 70% of collections."],
      ["Expensing project borrowing costs", "Capitalise them during construction."],
      ["Withdrawing without certificates", "Engineer, architect and CA certify."],
    ),
    check(
      3,
      q("What share of buyer collections goes into the RERA designated account?", ["At least 70%", "50%", "100%", "30%"], 0, "Section 4(2)(l)(D)."),
      q("Who certifies RERA withdrawals?", ["Engineer, architect and chartered accountant", "Only the director", "The bank manager", "The buyers"], 0, "Three certificates."),
      q("Above what land area must a project register?", ["500 square metres", "100 square metres", "5,000 square metres", "1 acre"], 0, "Or more than eight apartments."),
      q("How are construction costs classified during the project?", ["Work-in-progress inventory", "Expenses", "Investment property", "Intangibles"], 0, "Ind AS 2."),
      q("Which standard covers capitalising borrowing costs?", ["Ind AS 23", "Ind AS 40", "Ind AS 115", "Ind AS 16"], 0, "Qualifying assets."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — RERA deposit",
          ["December collections are ₹6.5 crore. What must go into the RERA account?"],
          ["At least ₹4.55 crore (70%)."],
        ],
        [
          "Exercise 2 — Withdrawal",
          ["Lotus Heights is 40% complete. Estimated land and construction cost is ₹94 crore. Up to how much can be withdrawn in total?"],
          ["In proportion to completion: up to ₹37.6 crore of land and construction cost incurred, with certificates."],
        ],
      ),
    ),
    summary(
      ["RERA registration", "The 70% account", "Project cost and inventory", "Borrowing costs", "Certified withdrawals"],
      "Project money stays with the project — RERA makes sure of it.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Revenue Recognition for Developers",
      ["Kavita decides when Vrindavan recognises revenue from flat sales under Ind AS 115."],
      ["Apply Ind AS 115 to flat sales", "Decide over time vs. point in time", "Measure progress", "Record advances as contract liabilities"],
    ),
    screen(
      "Over time or point in time?",
      p("A developer recognises revenue over time only if, among other tests, the flat has no alternative use to it and it has an enforceable right to payment for work completed to date. Otherwise revenue is recognised at a point in time — usually on handing over possession."),
      compare(
        ["Over time", "Enforceable right to payment for work done if the buyer cancels.", ["Revenue as construction progresses"]],
        ["Point in time", "No enforceable right to payment for work done.", ["Revenue on possession, after the completion or occupancy certificate"]],
      ),
      note("After reviewing its agreements and legal advice, Vrindavan concluded it recognises revenue at a point in time, on possession."),
    ),
    screen(
      "Advances as contract liabilities",
      p("Until revenue is recognised, buyer collections are contract liabilities."),
      journal(
        [
          ["Bank", "1,05,00,000", ""],
          ["Contract liability — customer advances", "", "1,00,00,000"],
          ["Output GST payable", "", "5,00,000"],
        ],
        "1,05,00,000",
      ),
    ),
    screen(
      "On possession",
      journal(
        [
          ["Contract liability — customer advances", "1,00,00,000", ""],
          ["Revenue from sale of flats", "", "1,00,00,000"],
        ],
        "1,00,00,000",
      ),
      journal(
        [
          ["Cost of sales", "72,00,000", ""],
          ["Inventory — Lotus Heights", "", "72,00,000"],
        ],
        "72,00,000",
      ),
    ),
    screen(
      "Measuring progress when over time applies",
      p("If a project meets the over-time criteria, progress is often measured by cost incurred to date as a share of total estimated cost."),
      example([["Cost incurred to date", "₹60 crore"], ["Total estimated cost", "₹100 crore"], ["Progress", "60%"], ["Contract value of flats sold", "₹130 crore"]], ["Revenue to date", "₹78 crore"]),
      caution("Exclude land and uninstalled materials from the measure if they don't reflect transfer of control."),
    ),
    mistakes(
      ["Recognising revenue on booking", "Bookings are advances — contract liabilities."],
      ["Assuming over time always applies", "Check the right to payment in the agreements."],
      ["Including GST in revenue", "GST is a liability."],
      ["Forgetting cost of sales", "Match inventory cost with revenue."],
    ),
    check(
      4,
      q("How are buyer collections recorded before revenue is recognised?", ["As contract liabilities", "As revenue", "As equity", "As other income"], 0, "Customer advances."),
      q("What's needed for over-time recognition of flat sales?", ["No alternative use and an enforceable right to payment for work done", "Any booking", "A bank loan", "RERA registration alone"], 0, "Ind AS 115 criteria."),
      q("When does Vrindavan recognise revenue?", ["At a point in time, on possession", "On booking", "On RERA registration", "Over time from day one"], 0, "Based on its agreements."),
      q("With 60% progress and ₹130 crore of flats sold, what's revenue to date if over time applies?", ["₹78 crore", "₹60 crore", "₹130 crore", "₹52 crore"], 0, "60% × ₹130 crore."),
      q("Is GST collected from buyers revenue?", ["No — it's a liability", "Yes", "Only on possession", "Only for affordable flats"], 0, "Output GST payable."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Booking",
          ["A buyer pays ₹20 lakh plus 5% GST on booking. Record it."],
          ["Dr Bank ₹21,00,000 / Cr Contract liability ₹20,00,000 / Cr Output GST ₹1,00,000."],
        ],
        [
          "Exercise 2 — Progress",
          ["Cost to date ₹45 crore of ₹90 crore estimated; flats sold ₹110 crore. What's revenue to date under over time?"],
          ["50% × ₹110 crore = ₹55 crore."],
        ],
      ),
    ),
    summary(
      ["Ind AS 115 for flats", "Over time vs. point in time", "Contract liabilities", "Possession entries", "Measuring progress"],
      "Read the agreements first — they decide when revenue is earned.",
    ),
  ],

  4: [
    overview(
      "Module 5 — GST and TDS on Property",
      ["Kavita works out GST and TDS on Lotus Heights sales and Vrindavan's leases."],
      ["Apply GST to residential flats", "Know when there's no GST", "Apply GST to commercial rent", "Apply TDS on property purchases", "Treat stamp duty correctly"],
    ),
    screen(
      "GST on under-construction residential flats",
      table(
        ["Flat", "GST", "Input tax credit"],
        [
          ["Affordable — carpet area up to 60 sq m in metros or 90 sq m elsewhere, and value up to ₹45 lakh", "1%", "No"],
          ["Other residential flats", "5%", "No"],
        ],
      ),
      p("These effective rates already allow for the value of land. Pune isn't one of the six metros for this purpose, so the 90 sq m limit applies there."),
      example([["Flat price", "₹1,20,00,000"], ["GST at 5%", "₹6,00,000"]], ["Buyer pays", "₹1,26,00,000"]),
    ),
    screen(
      "When there's no GST",
      bullets(
        "Sale of a completed flat after the completion certificate (or first occupation) — it's a sale of immovable property, outside GST.",
        "Sale of land.",
        "Residential rent for use as a residence, except where reverse charge applies to a GST-registered tenant.",
      ),
      caution("Commercial units in a project are taxed at a higher rate with input tax credit — confirm the current rate in the CBIC rate notifications before invoicing."),
    ),
    screen(
      "TDS on property purchases",
      p("A buyer of immovable property (other than agricultural land) worth ₹50 lakh or more deducts TDS of 1% on the higher of the consideration and the stamp duty value, and pays it to the government."),
      example([["Flat consideration", "₹1,20,00,000"], ["TDS at 1%", "₹1,20,000"]], ["Paid to Vrindavan", "₹1,18,80,000 + GST"]),
      note("From 1 April 2026 this is under section 393 of the Income-tax Act, 2025, carried over from section 194-IA."),
    ),
    screen(
      "Stamp duty and registration",
      bullets(
        "Stamp duty and registration charges are set by each state and paid by the buyer.",
        "For the buyer, they're part of the cost of the property.",
        "For a developer buying land, they're part of the land cost in project inventory.",
      ),
    ),
    mistakes(
      ["Charging GST on a completed flat sold after the completion certificate", "It's outside GST."],
      ["Claiming ITC on residential flats at 5%", "No ITC under the 1%/5% scheme."],
      ["Using metro limits for Pune", "Pune uses the 90 sq m limit."],
      ["Forgetting the buyer's TDS", "Credit it to the buyer's account."],
    ),
    check(
      5,
      q("What GST applies to a non-affordable under-construction flat?", ["5% without ITC", "18% with ITC", "1%", "12% with ITC"], 0, "Residential scheme."),
      q("What's the value limit for affordable housing?", ["₹45 lakh", "₹50 lakh", "₹75 lakh", "₹1 crore"], 0, "Plus carpet area limits."),
      q("What TDS applies to a ₹1.2 crore flat purchase?", ["₹1,20,000", "₹2,40,000", "₹60,000", "Nil"], 0, "1%."),
      q("Is GST charged on a flat sold after the completion certificate?", ["No", "Yes, 5%", "Yes, 1%", "Yes, 18%"], 0, "Outside GST."),
      q("Who pays stamp duty on a flat purchase?", ["The buyer", "The developer", "RERA", "The bank"], 0, "Part of the buyer's cost."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Affordable flat",
          ["A Lotus Heights flat costs ₹42 lakh with 58 sq m carpet area. What GST applies?"],
          ["1% — ₹42,000. It meets the ₹45 lakh and 90 sq m (non-metro) limits."],
        ],
        [
          "Exercise 2 — TDS",
          ["A buyer pays ₹48 lakh for a flat with stamp duty value of ₹52 lakh. Is TDS due?"],
          ["Yes — the higher of consideration and stamp duty value (₹52 lakh) is ₹50 lakh or more: 1% × ₹52 lakh = ₹52,000."],
        ],
      ),
    ),
    summary(
      ["1% and 5% GST without ITC", "No GST after completion", "GST on commercial rent", "1% TDS from ₹50 lakh", "Stamp duty"],
      "Check the flat type and the project stage before raising any invoice.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Investment Property and Reporting",
      ["Kavita prepares Vrindavan's year-end accounts, including its leased office floor."],
      ["Account for investment property under Ind AS 40", "Disclose fair value", "Close the year for a property business", "Use the property checklist"],
    ),
    screen(
      "Investment property under Ind AS 40",
      bullets(
        "Measured initially at cost, including transaction costs such as stamp duty.",
        "Ind AS 40 uses the cost model — depreciate the building, not the land.",
        "Fair value must be disclosed, based on a valuation by a registered valuer where available.",
        "Rental income and direct operating expenses are disclosed.",
      ),
      example([["Building component of the 3rd floor", "₹18,00,00,000"], ["Useful life", "60 years"]], ["Annual depreciation", "₹30,00,000"]),
    ),
    screen(
      "Transfers",
      table(
        ["Change", "Transfer"],
        [
          ["Owner-occupied floor leased out", "PPE → investment property"],
          ["Investment property redeveloped for sale", "Investment property → inventory"],
          ["Unsold flats leased out", "Inventory → investment property"],
        ],
      ),
    ),
    screen(
      "Year-end for a property business",
      steps(
        ["Inventory", "Review project cost estimates and test for net realisable value."],
        ["Contract liabilities", "Reconcile customer advances to the buyer ledger."],
        ["RERA", "Reconcile the designated account and get the CA's annual certificate."],
        ["Taxes", "Reconcile GST and TDS — both deducted and receivable."],
        ["Leases", "Confirm deposits and rent with tenants."],
      ),
    ),
    screen(
      "Vrindavan's property checklist",
      table(
        ["Area", "Check"],
        [
          ["Classification", "Inventory, PPE and investment property correct"],
          ["RERA", "70% deposited; withdrawals certified"],
          ["Revenue", "Ind AS 115 basis applied consistently"],
          ["GST", "Correct rate by flat type and stage"],
          ["TDS", "Credits in Form 26AS / AIS match the books"],
          ["Disclosure", "Fair value of investment property"],
        ],
      ),
      tip("Fair value", "Vrindavan's registered valuer values the 3rd floor at ₹32 crore — disclosed in the notes, not recorded."),
    ),
    mistakes(
      ["Recording investment property at fair value", "Ind AS 40 uses the cost model; disclose fair value."],
      ["Depreciating land", "Only the building."],
      ["Skipping NRV tests on unsold flats", "Test inventory at year-end."],
      ["Unreconciled TDS credits", "Match to Form 26AS / AIS."],
    ),
    check(
      6,
      q("Which model does Ind AS 40 use for measurement?", ["The cost model, with fair value disclosed", "Fair value through profit or loss", "Revaluation through OCI", "No depreciation"], 0, "Cost model."),
      q("What's the annual depreciation on an ₹18 crore building over 60 years?", ["₹30 lakh", "₹18 lakh", "₹60 lakh", "₹3 crore"], 0, "₹18 crore ÷ 60."),
      q("Unsold flats are leased out long-term. What transfer happens?", ["Inventory → investment property", "PPE → inventory", "No change", "Investment property → PPE"], 0, "Change of use."),
      q("Where is the fair value of investment property shown?", ["In the notes", "On the face as the carrying amount", "Nowhere", "In the RERA account"], 0, "Disclosure."),
      q("What should unsold inventory be tested for at year-end?", ["Net realisable value", "Fair value gains", "GST", "RERA registration"], 0, "Ind AS 2."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Monthly depreciation",
          ["What's the monthly depreciation on the ₹18 crore building?"],
          ["₹30 lakh ÷ 12 = ₹2,50,000."],
        ],
        [
          "Exercise 2 — NRV",
          ["A Lotus Heights flat costs ₹70 lakh, but similar flats now sell for ₹66 lakh with ₹1 lakh selling costs. What's the write-down?"],
          ["NRV ₹65 lakh; write down ₹5 lakh."],
        ],
      ),
    ),
    summary(
      ["Ind AS 40 cost model", "Fair value disclosure", "Transfers between classes", "Property year-end", "The checklist"],
      "Property accounts are judged at year-end — classify, value and reconcile carefully.",
    ),
  ],
}

export default lessons
