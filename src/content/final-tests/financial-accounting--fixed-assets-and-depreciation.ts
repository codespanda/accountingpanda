import { fq } from "@/lib/finalTest"

// Final test bank for Fixed Assets and Depreciation — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("What is Ironbark's capitalisation threshold?", "$2,500", ["$500", "$10,000", "$25,000"], "Items below it are expensed."),
  fq("Ironbark's warehouse management software is classified as:", "An intangible asset", ["Property, plant and equipment", "Inventory", "A current asset"], "Non-physical, amortised over its life."),
  fq("How is a $35,000 conveyor extension treated?", "Capitalised — it increases capacity", ["Expensed as a repair", "Treated as inventory", "Ignored"], "Improvements are capitalised."),
  fq("A van costs $40,000 plus recoverable GST of $4,000, $600 delivery and $1,200 signwriting. What's its cost?", "$41,800", ["$45,800", "$40,000", "$44,000"], "Recoverable GST isn't capitalised."),
  fq("What happens to a replaced major part's remaining carrying amount?", "It's derecognised", ["It stays on the books", "It becomes revenue", "It's added to land"], "The new part is capitalised instead."),
  fq("A $4,000 engineer's fee to commission the conveyor is:", "Capitalised as part of cost", ["Expensed as consulting", "Recorded as inventory", "A prepayment"], "It gets the asset ready for use."),

  // Module 2
  fq("When should assets be tagged?", "On arrival, before they go into use", ["At year end", "When sold", "Never"], "Untagged assets get lost."),
  fq("What did Ironbark's cold-storage room cost in total?", "$125,000", ["$110,000", "$62,000", "$48,000"], "$62,000 + $48,000 + $15,000."),
  fq("When does depreciation start on the cold-storage room?", "When it's complete and ready for use", ["When the first panel is bought", "At the start of the year", "When it's sold"], "Assets under construction aren't depreciated."),
  fq("What did Ironbark's physical count find that wasn't on the register?", "A $4,200 dock leveller", ["A missing forklift", "A new warehouse", "A spare van"], "It was added to the register."),
  fq("A missing scanner cost $3,000 with $1,800 accumulated depreciation. What's the loss on write-off?", "$1,200", ["$3,000", "$1,800", "$4,800"], "Its carrying amount."),
  fq("Which field tells you who is responsible for an asset?", "Custodian", ["Residual value", "Serial number", "Class"], "E.g. the Warehouse 2 manager."),

  // Module 3
  fq("What is the depreciable amount of a $36,000 forklift with a $4,000 residual value?", "$32,000", ["$36,000", "$40,000", "$4,000"], "Cost less residual value."),
  fq("What is year 3 depreciation on the forklift at 25% reducing balance?", "$5,063", ["$6,750", "$9,000", "$4,000"], "25% of $20,250."),
  fq("What's the conveyor's depreciation per parcel?", "$0.20", ["$0.22", "$0.10", "$2.00"], "$90,000 ÷ 450,000."),
  fq("What is the annual depreciation on the warehouse roof component?", "$7,500", ["$17,000", "$24,500", "$20,000"], "$150,000 ÷ 20 years."),
  fq("What is total annual depreciation on Ironbark's warehouse using components?", "$24,500", ["$20,000", "$7,500", "$50,000"], "$7,500 + $17,000."),
  fq("A machine's residual value estimate rises from $0 to $5,000 with $40,000 carrying amount and 5 years left. New depreciation?", "$7,000", ["$8,000", "$9,000", "$5,000"], "($40,000 − $5,000) ÷ 5."),

  // Module 4
  fq("Which Ironbark asset class uses the revaluation model?", "Land", ["Vans", "Forklifts", "Software"], "A whole class is revalued."),
  fq("Why was Ironbark's sorting machine tested for impairment?", "It runs at a third of capacity after losing a major client", ["It was newly bought", "Its tag was missing", "Interest rates fell"], "An impairment indicator."),
  fq("Land with a $120,000 surplus is revalued down by $150,000. How much goes to profit or loss?", "$30,000", ["$150,000", "$120,000", "$0"], "The surplus absorbs $120,000 first."),
  fq("Carrying amount $50,000; FVLCD $42,000; value in use $38,000. What's the impairment?", "$8,000", ["$12,000", "$4,000", "$0"], "Recoverable amount is $42,000."),
  fq("How does US GAAP first test assets held and used for impairment?", "A recoverability test using undiscounted cash flows", ["Comparing to fair value immediately", "Using the revaluation model", "No test is required"], "If it fails, impair to fair value."),
  fq("Up to what amount can an IFRS impairment be reversed?", "The depreciated cost had no impairment occurred", ["Any amount", "The original cost", "The fair value"], "Reversals are capped."),

  // Module 5
  fq("A van cost $45,000 with $30,000 accumulated depreciation and sells for $12,000. What's the result?", "A $3,000 loss", ["A $3,000 gain", "A $12,000 gain", "No result"], "Carrying amount $15,000."),
  fq("How much cash did Ironbark pay when trading in the old van?", "$23,000", ["$30,000", "$7,000", "$6,000"], "$30,000 − $7,000 trade-in."),
  fq("Ironbark's depot held for sale was measured at:", "$325,000", ["$340,000", "$15,000", "$365,000"], "The lower of carrying amount and fair value less costs to sell."),
  fq("Equipment held for sale: carrying amount $80,000, fair value less costs to sell $90,000. At what is it measured?", "$80,000", ["$90,000", "$85,000", "$10,000"], "No gain until sale."),
  fq("What's the approximate initial ROU asset for Ironbark's 5-year, $24,000-a-year warehouse lease at 6%?", "$101,100", ["$120,000", "$24,000", "$4,212"], "$24,000 × 4.2124."),
  fq("Which leases can be expensed instead of capitalised under IFRS 16?", "Short-term leases and low-value assets", ["All property leases", "Leases over five years", "None"], "Practical exemptions."),

  // Module 6
  fq("What was the closing carrying amount of Ironbark's plant?", "$95,700", ["$248,000", "$152,300", "$735,700"], "$248,000 − $152,300."),
  fq("Which tax depreciation system is used in the US?", "MACRS", ["Division 40", "Block of assets WDV", "IFRS 16"], "Australia uses Division 40."),
  fq("Book depreciation $50,000, tax $35,000, tax rate 30%. What arises?", "A deferred tax asset of $4,500", ["A deferred tax liability of $4,500", "A $15,000 tax refund", "Nothing"], "Book is faster than tax."),
  fq("Vans: opening cost $210,000, additions $30,000, disposals $20,000. What's closing cost?", "$220,000", ["$260,000", "$200,000", "$240,000"], "$210,000 + $30,000 − $20,000."),
  fq("Who should be able to add or change fixed asset register records?", "Only authorised staff", ["Anyone in the company", "Suppliers", "Customers"], "An access control."),
  fq("Which item belongs on the fixed asset year-end checklist?", "Transfer completed assets under construction", ["Delete the register", "Change the reporting currency", "Stop counting assets"], "So depreciation starts correctly."),
]
