import { fq } from "@/lib/finalTest"

// Final test bank for Revenue Recognition — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("What's the core principle of the revenue standard?", "Recognise revenue to show the transfer of goods or services at the amount the business expects to be entitled to", ["Recognise revenue when cash is received", "Recognise revenue when the contract is signed", "Recognise revenue at year end only"], "It applies to IFRS 15, Ind AS 115 and ASC 606."),
  fq("Which standard do Indian companies applying Ind AS use for revenue?", "Ind AS 115", ["ASC 606", "IAS 18", "AS 9 only"], "Based on IFRS 15."),
  fq("What does Rivergate Apartments pay Halcyon for its bundle?", "$12,800", ["$16,000", "$9,000", "$4,800"], "Cameras, installation and 24 months of monitoring."),
  fq("Rivergate adds 4 cameras at Halcyon's normal $400 price. How is it treated?", "As a separate contract", ["As a change to the original allocation", "As a reduction in revenue", "As a refund"], "Distinct goods at stand-alone selling price."),
  fq("Can a contract under the revenue standard be implied by business practice?", "Yes", ["No — it must be written", "Only in India", "Only for services"], "Contracts can be written, verbal or implied."),
  fq("A customer adds cameras at a heavy discount because of a complaint. Is it a separate contract?", "No — it's a modification of the existing contract", ["Yes, always", "It's not accounted for", "It's a new customer"], "The price isn't the stand-alone selling price."),

  // Module 2
  fq("How many performance obligations are in Rivergate's contract?", "Three", ["One", "Two", "Twenty-four"], "Hardware, installation and monitoring."),
  fq("Why is Rivergate's installation distinct?", "Other installers could do it and it involves no customisation", ["It's invoiced separately", "It's expensive", "It's done last"], "Both parts of the distinct test are met."),
  fq("How is 24 months of monitoring treated?", "As one performance obligation — a series of substantially the same services", ["As 24 separate obligations", "As an assurance warranty", "As a lease"], "The series guidance."),
  fq("Halcyon's extended 3-year warranty sold for $300 is:", "A service warranty — a separate performance obligation", ["An assurance warranty", "A provision only", "Not accounted for"], "It's sold separately."),
  fq("How much does Halcyon keep from each $120 VaultCloud subscription?", "$24", ["$96", "$120", "$0"], "It passes $96 to VaultCloud."),
  fq("What's the key question in principal vs. agent?", "Does the business control the good or service before it's transferred to the customer?", ["Who sends the invoice?", "Who is larger?", "Who has more staff?"], "The indicators help answer it."),

  // Module 3
  fq("What's Halcyon's Q1 revenue on 300 cameras sold to ShieldPro?", "$28,500", ["$30,000", "$1,500", "$31,500"], "300 × $95, after the expected 5% rebate."),
  fq("What liability is recorded for an expected rebate?", "A refund liability", ["A contract asset", "Deferred tax", "A loan"], "It's expected to be paid back."),
  fq("500 kits at $200 with 4% expected returns. What's revenue?", "$96,000", ["$100,000", "$4,000", "$80,000"], "480 kits × $200."),
  fq("Why is Lakeview's $20,000 completion bonus excluded for now?", "Completion depends on others and Halcyon has no similar experience", ["Bonuses are never revenue", "The hospital refused it", "It's too small"], "The constraint applies."),
  fq("Which factor increases the risk of a revenue reversal?", "Outcomes outside the business's control", ["Long experience with similar contracts", "A narrow range of outcomes", "Quick resolution"], "Constraint factors."),
  fq("Halcyon pays a retailer a $5,000 stocking fee for no distinct service. How is it treated?", "As a reduction of revenue", ["As a marketing expense", "As an asset", "As cost of sales"], "Consideration payable to a customer."),

  // Module 4
  fq("What's Rivergate's hardware stand-alone selling price?", "$9,000", ["$7,200", "$12,800", "$6,000"], "Halcyon sells the camera package alone at that price."),
  fq("How much of Rivergate's price is allocated to monitoring?", "$4,800", ["$6,000", "$3,200", "$800"], "80% of its $6,000 SSP."),
  fq("What's the total discount on Rivergate's bundle?", "$3,200", ["$1,000", "$2,400", "$4,800"], "$16,000 SSP − $12,800 price."),
  fq("Installation costs $700 with a 40% margin. Estimated SSP under cost-plus?", "$980", ["$700", "$1,000", "$280"], "$700 × 1.4."),
  fq("Using the residual approach, what's the analytics software's price in a $14,000 bundle?", "$4,000", ["$9,000", "$5,000", "$14,000"], "$14,000 − $9,000 − $1,000."),
  fq("How are later changes in the transaction price allocated?", "On the same basis as at contract start", ["Entirely to the last obligation", "Equally", "Not allocated"], "Consistent allocation."),

  // Module 5
  fq("How much revenue does Halcyon recognise from Rivergate in 2026?", "$10,400", ["$12,800", "$8,000", "$2,400"], "$7,200 + $800 + 12 × $200."),
  fq("Why is the Lakeview project recognised over time?", "The system is built into a building the hospital controls", ["The hospital paid upfront", "It's a large contract", "Halcyon prefers it"], "The customer controls the asset as it's built."),
  fq("What's Lakeview's progress at 31 December 2026?", "37.5%", ["25%", "50%", "60%"], "$150,000 ÷ $400,000."),
  fq("What's Lakeview's profit to date at 31 December 2026?", "$75,000", ["$225,000", "$150,000", "$200,000"], "$225,000 − $150,000."),
  fq("Which costs should be excluded from cost-to-cost progress?", "Cameras delivered to site but not yet installed", ["Labour on installation", "Design work completed", "Integration testing"], "They don't reflect progress."),
  fq("How is a hosted, continually updated analytics platform recognised?", "Over the subscription period", ["Upfront on signing", "When cancelled", "At year end"], "It's a service, like SaaS."),

  // Module 6
  fq("What's Rivergate's monitoring contract liability at 31 December 2026?", "$2,400", ["$4,800", "$200", "$0"], "12 of 24 months remain."),
  fq("What's Lakeview's contract asset at 31 December 2026?", "$45,000", ["$180,000", "$225,000", "$75,000"], "$225,000 revenue − $180,000 billed."),
  fq("What happens to a contract asset when the next milestone is billed?", "It's reclassified to receivables", ["It becomes revenue again", "It's written off", "It becomes a liability"], "The right becomes unconditional."),
  fq("How much of a $1,200 commission on a 24-month contract is amortised each month?", "$50", ["$100", "$1,200", "$24"], "$1,200 ÷ 24."),
  fq("What was Halcyon's total illustrative revenue recognised over time in 2026?", "$3,000,000", ["$4,800,000", "$7,800,000", "$2,100,000"], "Monitoring plus projects."),
  fq("Large distributor orders just before year end may signal:", "Channel stuffing", ["Strong controls", "A financing component", "A service warranty"], "Pushing excess stock to inflate revenue."),
]
