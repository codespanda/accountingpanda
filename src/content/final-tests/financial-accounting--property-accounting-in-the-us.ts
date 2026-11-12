import { fq } from "@/lib/finalTest"

// Final test bank for Property Accounting in the US — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("Who owns the Alamo Heights fourplex?", "Dr. Anita Shah", ["Lone Star Property Management", "Mission Plaza LLC", "Rachel"], "Lone Star manages it."),
  fq("How large is Mission Plaza?", "12,000 sq ft", ["2,400 sq ft", "4,000 sq ft", "120,000 sq ft"], "Four retail tenants."),
  fq("Which leases typically run 3–10 years?", "Commercial", ["Residential", "Month-to-month", "Short-term rentals"], "Commercial leases are longer."),
  fq("In which account range are security deposits held?", "2000s — liabilities", ["4000s — revenue", "6000s — expenses", "3000s — equity"], "Owed to tenants."),
  fq("What does the manager's own income statement show as revenue?", "Management fees", ["All rents", "Deposits", "Owners' distributions"], "Not trust receipts."),
  fq("What's an 8% management fee on $5,000 rent?", "$400", ["$500", "$80", "$4,600"], "Fee revenue."),

  // Module 2
  fq("Who typically asks for the rent roll?", "Lenders and buyers", ["Only tenants", "The IRS only", "Nobody"], "Master list."),
  fq("What's November rent for a tenant moving in on 21 November at $1,500 (30-day month)?", "$500", ["$750", "$1,500", "$1,000"], "10 days ÷ 30 × $1,500."),
  fq("When prepaid rent is earned on the 1st, what's the entry?", "Dr Prepaid rent / Cr Rent revenue", ["Dr Rent revenue / Cr Cash", "Dr Cash / Cr Deposits", "No entry"], "Earned."),
  fq("What report shows how long unpaid rent has been outstanding?", "An aging report", ["A rent roll", "A CAM reconciliation", "A Schedule E"], "Delinquencies."),
  fq("What's monthly revenue on a 24-month lease at $2,000 with two months free?", "$1,833.33", ["$2,000", "$1,666.67", "$1,916.67"], "$44,000 ÷ 24."),
  fq("When is rent generally taxed for tax purposes?", "When received", ["Straight-line like GAAP", "At lease end", "Never"], "Tax differs from ASC 842."),

  // Module 3
  fq("What must accompany a Texas deposit refund with deductions?", "An itemised list of deductions", ["A W-2", "A new lease", "Nothing"], "Within 30 days."),
  fq("Who requires property managers to keep trust accounts?", "State real estate licensing rules", ["The FASB", "The tenant", "The county assessor"], "Licensing."),
  fq("When can the manager take its fee from the trust account?", "After it's earned and recorded", ["Any time", "Before rent is collected", "Only at year-end"], "Trust rules."),
  fq("Unit A's $1,500 deposit has $400 of damage beyond wear. What's refunded?", "$1,100", ["$1,500", "$400", "$1,900"], "Deduction for damage."),
  fq("If ledgers total less than the book balance, what's likely?", "A missing or incorrect ledger posting", ["Nothing is wrong", "The bank made an error", "Rent is overpaid"], "Find it before distributing."),
  fq("What happens to a damage deduction from a deposit?", "It goes to the owner to cover the repair", ["It's the manager's revenue", "It's refunded later", "It's sent to the state"], "Owner's recovery."),

  // Module 4
  fq("How is a fourplex purchase price often split between land and building?", "Using the county assessor's ratio", ["50/50 always", "All to building", "All to land"], "Common method."),
  fq("What's the first-year depreciation on a $480,000 residential building placed in service in March?", "$13,818", ["$17,455", "$8,727", "$12,308"], "9.5 months under mid-month."),
  fq("By when are Texas property taxes generally due?", "31 January", ["15 April", "31 December", "30 June"], "Billed in the fall."),
  fq("Is converting a garage into a rentable unit a repair?", "No — it's an improvement (adaptation)", ["Yes", "Only if under $2,500", "Only in Texas"], "Capitalise it."),
  fq("What's a full year's depreciation on a $1,950,000 commercial building?", "$50,000", ["$70,909", "$39,000", "$65,000"], "÷ 39."),
  fq("Who often collects property taxes and insurance with the mortgage payment?", "The lender, through escrow", ["The tenant", "The county", "The manager's payroll"], "Escrow account."),

  // Module 5
  fq("What does CAM stand for?", "Common area maintenance", ["Capital asset management", "Cash and mortgage", "Commercial annual measure"], "Shared costs."),
  fq("What's the monthly CAM estimate for a 10% share of a $120,000 budget?", "$1,000", ["$12,000", "$10,000", "$1,200"], "$12,000 ÷ 12."),
  fq("Which costs belong in the CAM pool?", "Only operating costs the lease allows", ["Any cost the landlord pays", "Mortgage principal", "The landlord's income tax"], "Lease-defined."),
  fq("What does a modified gross tenant pay?", "Rent plus some costs", ["Rent only", "All costs and the mortgage", "Nothing"], "Between gross and NNN."),
  fq("What decides whether TI work is the landlord's asset?", "Who owns the improvements under the lease", ["The tenant's size", "The color of the walls", "The county"], "Read the lease."),
  fq("A tenant's actual share is $21,000 and estimates paid are $24,000. What's the result?", "$3,000 credit to the tenant", ["$3,000 due from the tenant", "Nothing", "$24,000 refund"], "Overpaid estimates."),

  // Module 6
  fq("What's Dr. Shah's distribution if rent is $5,350, late fees $75, fee $428 and repairs $650?", "$4,347", ["$5,425", "$4,922", "$4,275"], "Owner statement."),
  fq("Which form reports payments to a non-corporate plumber of $3,000 in 2026?", "1099-NEC", ["1099-MISC", "W-2", "None"], "Above $2,000."),
  fq("Between what MAGI levels is the $25,000 rental loss allowance phased out?", "$100,000 and $150,000", ["$50,000 and $75,000", "$200,000 and $250,000", "It isn't phased out"], "Passive activity rules."),
  fq("Within how many days must a 1031 replacement property be acquired?", "180", ["45", "90", "365"], "Identification within 45."),
  fq("Who holds sale proceeds in a 1031 exchange?", "A qualified intermediary", ["The seller", "The buyer", "The IRS"], "To avoid receipt."),
  fq("What should happen before owner distributions each month?", "The trust account reconciles three ways", ["The CAM reconciliation", "The 1031 exchange", "The Schedule E"], "Reconcile first."),
]
