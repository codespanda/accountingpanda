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
  terms,
  tip,
} from "@/lib/lessonKit"

// Revenue Recognition — lesson screens by module index (0 = Module 1).
// The course follows Halcyon Security Systems Inc., which sells camera
// hardware, installation and monitoring, for the year ending 31 December 2026.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The Five-Step Model",
      ["Revenue is usually the largest number in the income statement. This module introduces the single revenue standard used worldwide and its first step, using Halcyon Security Systems."],
      ["Explain why IFRS 15, Ind AS 115 and ASC 606 exist", "List the five steps", "Identify a contract with a customer", "Handle contract combinations and modifications"],
    ),
    screen(
      "Meet Halcyon Security Systems",
      p("Halcyon Security Systems Inc. sells security cameras, installs them and monitors them for a monthly fee. Its year ends on 31 December 2026."),
      table(
        ["Revenue stream", "Example"],
        [
          ["Hardware", "Camera systems sold to apartment buildings and shops"],
          ["Installation", "Fitting and setting up cameras on site"],
          ["Monitoring", "24-month monitoring subscriptions"],
          ["Projects", "A large custom system for Lakeview Hospital"],
          ["Distributor sales", "Cameras sold to ShieldPro, a distributor"],
        ],
      ),
      p("Its typical deal: Rivergate Apartments pays $12,800 for cameras, installation and 24 months of monitoring."),
    ),
    screen(
      "Why a single revenue standard",
      p("Before 2018, revenue rules differed by industry and country. The IASB and FASB issued a joint standard so similar transactions are treated the same way everywhere."),
      table(
        ["Standard", "Used by"],
        [
          ["IFRS 15 Revenue from Contracts with Customers", "IFRS reporters worldwide"],
          ["Ind AS 115", "Indian companies applying Ind AS — based on IFRS 15"],
          ["ASC 606", "US GAAP reporters"],
        ],
      ),
      note("The three are largely converged. Differences are noted where they matter — for example, the threshold for collectability and for constraining variable consideration."),
    ),
    screen(
      "The five steps",
      steps(
        ["1. Identify the contract", "Is there an enforceable agreement with a customer?"],
        ["2. Identify performance obligations", "What distinct promises are in it?"],
        ["3. Determine the transaction price", "How much does Halcyon expect to receive?"],
        ["4. Allocate the price", "Split the price across the promises."],
        ["5. Recognise revenue", "When (or as) each promise is satisfied."],
      ),
      tip("Core principle", "Recognise revenue to show the transfer of goods or services to customers, at the amount the business expects to be entitled to in exchange."),
    ),
    screen(
      "Step 1 — identifying the contract",
      p("A contract can be written, verbal or implied by business practice. It's within the standard only if all of these are met:"),
      bullets(
        "The parties have approved it and are committed to perform.",
        "Each party's rights to the goods or services can be identified.",
        "The payment terms can be identified.",
        "It has commercial substance.",
        "Collection of the consideration is probable.",
      ),
      p("Rivergate signed Halcyon's order form with prices, scope and 30-day payment terms, and has a good payment history — all five are met."),
      caution("If collection isn't probable — say, a customer already in default — Halcyon doesn't recognise revenue yet, even if goods are delivered."),
    ),
    screen(
      "Contract combinations and modifications",
      terms(
        ["Combining contracts", "Contracts with the same customer at or near the same time are combined if they were negotiated as a package, if the price of one depends on the other, or if together they form a single performance obligation."],
        ["Modification as a separate contract", "If the change adds distinct goods or services at their stand-alone selling price, treat it as a new contract."],
        ["Other modifications", "Otherwise, either treat as ending the old contract and starting a new one (remaining goods are distinct) or adjust the existing contract (goods not distinct)."],
      ),
      p("In July, Rivergate adds 4 extra cameras at $400 each — Halcyon's normal price. They're distinct and priced at stand-alone selling price, so it's a separate contract."),
    ),
    mistakes(
      ["Waiting for a signed contract when practice creates one", "Contracts can be implied."],
      ["Ignoring collectability", "No probable collection, no contract."],
      ["Treating linked deals separately", "Combine contracts negotiated as a package."],
      ["Treating every change the same way", "Check whether the added goods are distinct and at stand-alone price."],
    ),
    check(
      1,
      q("Which standard applies to US GAAP reporters?", ["ASC 606", "IFRS 15", "Ind AS 115", "IAS 18"], 0, "IFRS 15 and Ind AS 115 are the IFRS-based equivalents."),
      q("What's Step 2 of the five-step model?", ["Identify performance obligations", "Determine the transaction price", "Allocate the price", "Recognise revenue"], 0, "Find the distinct promises."),
      q("Which is a criterion for a contract to exist?", ["Collection of the consideration is probable", "It must be in writing", "It must be signed by a lawyer", "Payment must be in advance"], 0, "Contracts can be verbal or implied."),
      q("A customer adds distinct goods at their stand-alone selling price. How is the change treated?", ["As a separate contract", "As a reduction of revenue", "Ignored", "As a new customer"], 0, "Distinct and at stand-alone price."),
      q("When are two contracts with one customer combined?", ["When they were negotiated as a package", "Always", "Never", "Only if signed on the same day"], 0, "Or their prices depend on each other."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Is there a contract?",
          ["A new customer agrees verbally to buy cameras, prices and delivery are agreed, but the customer is already in default on debts to several suppliers. Does a contract exist under the standard?"],
          ["Not yet. Collection isn't probable, so Halcyon doesn't recognise revenue until the criteria are met (or it receives non-refundable cash and has no remaining obligations)."],
        ],
        [
          "Exercise 2 — Modification",
          ["A customer adds 2 cameras at $250 each — well below Halcyon's $400 normal price — because of a service complaint. Is it a separate contract?"],
          ["No. The cameras are distinct but not priced at stand-alone selling price, so it's not a separate contract. It's treated as a modification of the existing contract."],
        ],
      ),
    ),
    summary(
      ["Why IFRS 15, Ind AS 115 and ASC 606 exist", "The five steps and the core principle", "The five criteria for a contract", "Contract combinations and modifications"],
      "Revenue starts with a valid contract. If the five criteria aren't met, there's no revenue to recognise yet.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Performance Obligations",
      ["A single contract can contain several promises. This module shows how Halcyon decides which promises are separate performance obligations."],
      ["Identify performance obligations", "Apply the two-part test for distinct goods and services", "Analyse bundles with installation and support", "Distinguish assurance and service warranties", "Decide whether a business is principal or agent"],
    ),
    screen(
      "Step 2 — identifying performance obligations",
      p("A performance obligation is a promise to transfer a distinct good or service (or a series of substantially the same distinct services)."),
      p("Rivergate's contract contains three promises: camera hardware, installation and 24 months of monitoring."),
      note("Monthly monitoring is a series of substantially the same services, so it's treated as one performance obligation satisfied over time."),
    ),
    screen(
      "Distinct goods and services",
      table(
        ["Test", "Question", "Rivergate's installation"],
        [
          ["Capable of being distinct", "Can the customer benefit from it on its own or with readily available resources?", "Yes — other installers could fit the cameras"],
          ["Distinct in the contract", "Is it separately identifiable from other promises (not significantly integrated, modified or interdependent)?", "Yes — it's simple fitting, no customisation"],
        ],
      ),
      p("Both tests are met, so installation is a separate performance obligation."),
    ),
    screen(
      "Bundles, installation and support",
      compare(
        ["Rivergate Apartments", "Standard cameras, simple installation, monitoring.", ["Three performance obligations"]],
        ["Lakeview Hospital", "Halcyon designs, customises and integrates hundreds of cameras with the hospital's access systems into one working system.", ["One performance obligation — the integrated system"]],
      ),
      p("When the business provides a significant service of integrating goods into a combined output, the goods and services aren't distinct within the contract."),
    ),
    screen(
      "Warranties — assurance vs. service",
      table(
        ["Type", "What it gives", "Accounting", "Halcyon example"],
        [
          ["Assurance warranty", "Assurance the product works as agreed", "Not a performance obligation — provide for expected costs", "Standard 1-year defects warranty"],
          ["Service warranty", "An extra service beyond that assurance", "Separate performance obligation — defer revenue", "Optional 3-year extended warranty sold for $300"],
        ],
      ),
      tip("Sold separately?", "If the customer can buy the warranty separately, it's a service warranty."),
    ),
    screen(
      "Principal vs. agent",
      p("Halcyon resells VaultCloud's video storage. Customers pay $120 a year; Halcyon passes $96 to VaultCloud."),
      table(
        ["Indicator of a principal", "Halcyon and VaultCloud"],
        [
          ["Primarily responsible for fulfilling the promise", "No — VaultCloud provides and supports the storage"],
          ["Inventory risk", "No — nothing is held"],
          ["Discretion over price", "No — VaultCloud sets the price"],
        ],
      ),
      example([["Customer pays", "$120"], ["Passed to VaultCloud", "−$96"]], ["Halcyon's revenue (agent, net)", "$24"]),
      note("The key question is whether Halcyon controls the service before it's transferred to the customer. The indicators help answer it."),
    ),
    mistakes(
      ["Splitting integrated systems into parts", "Significant integration means one obligation."],
      ["Deferring revenue for standard warranties", "Assurance warranties are provisions."],
      ["Reporting agent sales gross", "Agents report their commission only."],
      ["Treating each month of service separately", "Use the series guidance."],
    ),
    check(
      2,
      q("What makes a good or service distinct?", ["It's capable of being distinct and separately identifiable in the contract", "It has its own invoice", "It's expensive", "It's delivered first"], 0, "Both parts must be met."),
      q("A standard 1-year defects warranty is usually:", ["An assurance warranty — provide for costs", "A separate performance obligation", "Revenue", "Ignored"], 0, "It only assures the product works."),
      q("Halcyon customises and integrates cameras into a hospital's systems. How many performance obligations?", ["One", "One per camera", "Two", "None"], 0, "Significant integration service."),
      q("An agent reports revenue as:", ["Its commission or net fee", "The gross amount the customer pays", "Zero", "Twice the gross"], 0, "It doesn't control the goods."),
      q("Which indicates the business is a principal?", ["It's primarily responsible for fulfilling the promise", "A third party sets the price", "It holds no inventory risk", "It earns a fixed commission"], 0, "The principal controls the good or service."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Count the obligations",
          ["A shop buys 10 cameras, an optional 3-year extended warranty and the standard 1-year warranty. How many performance obligations?"],
          ["Two: the cameras and the extended (service) warranty. The standard warranty is an assurance warranty — a provision, not an obligation."],
        ],
        [
          "Exercise 2 — Agent revenue",
          ["Halcyon sells 500 VaultCloud subscriptions at $120, passing $96 each to VaultCloud. What revenue does it report?"],
          ["500 × $24 = $12,000 as an agent (not $60,000)."],
        ],
      ),
    ),
    summary(
      ["Identifying performance obligations", "The two-part distinct test", "Bundles and integration services", "Assurance vs. service warranties", "Principal vs. agent"],
      "Split a contract into its distinct promises — but keep integrated goods together, and report only your own share when acting as an agent.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Transaction Price",
      ["The transaction price is what the business expects to be entitled to. This module covers the tricky parts: rebates, returns, bonuses, financing and payments to customers."],
      ["Determine the transaction price", "Estimate variable consideration", "Apply the constraint", "Adjust for significant financing components", "Handle non-cash consideration and amounts payable to customers"],
    ),
    screen(
      "Step 3 — the transaction price",
      p("The transaction price is the amount of consideration the business expects to be entitled to in exchange for transferring promised goods or services — excluding amounts collected for third parties, such as sales tax."),
      table(
        ["Element", "Effect on price"],
        [
          ["Variable consideration", "Estimate it, subject to the constraint"],
          ["Significant financing component", "Adjust for the time value of money"],
          ["Non-cash consideration", "Measure at fair value"],
          ["Consideration payable to a customer", "Usually reduces the price"],
        ],
      ),
    ),
    screen(
      "Variable consideration — rebates",
      p("Halcyon sells cameras to ShieldPro at $100 each. If ShieldPro buys more than 1,000 cameras this year, it gets a 5% rebate on all of them. In Q1 it buys 300, and Halcyon expects the threshold to be met."),
      terms(
        ["Most likely amount", "Best for two possible outcomes — the rebate is earned or not."],
        ["Expected value", "Probability-weighted amount — best for many possible outcomes, like returns."],
      ),
      example([["300 cameras × $100", "$30,000"], ["Expected rebate 5%", "−$1,500"]], ["Q1 revenue", "$28,500"]),
      journal([["Accounts receivable", "$30,000", ""], ["Revenue", "", "$28,500"], ["Refund liability", "", "$1,500"]], "$30,000"),
    ),
    screen(
      "Variable consideration — returns",
      p("Halcyon sells 500 home camera kits at $200 with a 30-day right of return. Past experience shows 4% are returned."),
      example([["500 kits × $200", "$100,000"], ["Expected returns 4% (20 kits)", "−$4,000"]], ["Revenue", "$96,000"]),
      p("Halcyon records a $4,000 refund liability, and an asset for its right to recover the 20 kits (at cost, less any recovery costs), reducing cost of sales."),
    ),
    screen(
      "Constraining estimates",
      p("Variable consideration is included only to the extent it's highly probable (IFRS 15) or probable (ASC 606) that a significant reversal of revenue won't occur later."),
      p("Lakeview Hospital will pay a $20,000 bonus if its system is finished by 30 June 2027. Completion depends on the hospital's own building contractors, and Halcyon has no similar experience — so the bonus is excluded for now."),
      bullets(
        "Factors that increase the risk of reversal: outcomes outside the business's control, little experience, a long time until resolved, a wide range of outcomes.",
        "Reassess at every reporting date.",
      ),
    ),
    screen(
      "Significant financing components",
      p("If the timing of payment gives either party a significant financing benefit, adjust the price for the time value of money."),
      p("A developer pays Halcyon $50,000 upfront for a system to be delivered and installed in 2 years. Halcyon is effectively borrowing from the customer, so it accrues interest expense and recognises more revenue on delivery."),
      tip("Practical expedient", "No adjustment is needed if the gap between payment and transfer is one year or less."),
    ),
    screen(
      "Non-cash consideration and amounts payable to customers",
      terms(
        ["Non-cash consideration", "Measure at fair value — e.g. a customer pays partly in shares or equipment."],
        ["Consideration payable to a customer", "Payments, credits or coupons to a customer reduce the transaction price, unless they're for distinct goods or services the business receives."],
      ),
      p("Halcyon pays a retail chain a $5,000 fee to stock its home kits. It receives no distinct service, so the $5,000 reduces revenue from that retailer — it isn't a marketing expense."),
    ),
    mistakes(
      ["Recording full price and rebates later", "Estimate rebates when sales are made."],
      ["Including uncertain bonuses", "Apply the constraint."],
      ["Ignoring large upfront payments", "Check for financing."],
      ["Booking customer fees as marketing", "They usually reduce revenue."],
    ),
    check(
      3,
      q("Which method suits an outcome with only two possibilities?", ["Most likely amount", "Expected value", "Residual approach", "Cost-plus"], 0, "Either earned or not."),
      q("Which method suits estimating returns across many sales?", ["Expected value", "Most likely amount", "Specific identification", "Straight-line"], 0, "Probability-weighted."),
      q("Is sales tax collected for the government part of the transaction price?", ["No", "Yes", "Only in the US", "Only for services"], 0, "It's collected for a third party."),
      q("Under IFRS 15, variable consideration is included when a significant reversal is:", ["Highly probable not to occur", "Possible", "Certain to occur", "Unknown"], 0, "ASC 606 uses “probable”."),
      q("When can a financing component be ignored?", ["When the gap between payment and transfer is one year or less", "Never", "Always", "When the customer is large"], 0, "The practical expedient."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Rebate",
          ["In Q2 ShieldPro buys 400 more cameras at $100. Halcyon still expects the 5% rebate. Record Q2 revenue."],
          ["Revenue 400 × $95 = $38,000; refund liability $2,000; receivable $40,000."],
        ],
        [
          "Exercise 2 — Returns",
          ["Halcyon sells 1,000 kits at $150; 3% are expected back. What's revenue and the refund liability?"],
          ["Revenue 970 × $150 = $145,500; refund liability $4,500."],
        ],
      ),
    ),
    summary(
      ["What the transaction price includes", "Rebates and returns", "The constraint on variable consideration", "Significant financing components", "Non-cash consideration and payments to customers"],
      "Estimate what you expect to be entitled to — but include uncertain amounts only when a reversal is unlikely.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Allocation",
      ["Once the price and obligations are known, the price must be shared between them. This module allocates Rivergate's $12,800 contract."],
      ["Allocate the transaction price", "Determine stand-alone selling prices", "Estimate prices using adjusted market, cost-plus and residual approaches", "Allocate discounts and variable consideration"],
    ),
    screen(
      "Step 4 — allocating the price",
      p("The transaction price is allocated to each performance obligation in proportion to its stand-alone selling price (SSP) — the price at which the business would sell it separately."),
      table(
        ["Obligation", "SSP", "Share", "Allocated"],
        [
          ["Hardware", "$9,000", "56.25%", "$7,200"],
          ["Installation", "$1,000", "6.25%", "$800"],
          ["Monitoring (24 months)", "$6,000", "37.5%", "$4,800"],
        ],
        { footer: ["Total", "$16,000", "100%", "$12,800"], numeric: [1, 2, 3] },
      ),
      p("The $3,200 discount is shared in proportion — each obligation gets 80% of its SSP."),
    ),
    screen(
      "Stand-alone selling prices",
      p("The best evidence of SSP is the observable price when the business sells the item separately to similar customers."),
      bullets(
        "Hardware: Halcyon regularly sells the camera package alone for $9,000.",
        "Monitoring: sold alone at $250 a month — $6,000 for 24 months.",
        "Installation: sold alone for $1,000.",
      ),
      caution("A list price isn't automatically the SSP — if Halcyon always discounts the list price, the SSP is the price it actually charges."),
    ),
    screen(
      "Estimating prices when they aren't observable",
      table(
        ["Approach", "How it works", "Halcyon example"],
        [
          ["Adjusted market assessment", "What would customers pay in the market? Competitors' prices, adjusted", "A new analytics service priced against rivals"],
          ["Expected cost plus a margin", "Forecast costs plus a normal margin", "Installation costs $700 + 40% margin = $980"],
          ["Residual", "Total price less observable SSPs of the other items — only when the SSP is highly variable or uncertain", "Analytics software in a $14,000 bundle: $14,000 − $9,000 − $1,000 = $4,000"],
        ],
      ),
    ),
    screen(
      "Allocating discounts and variable consideration",
      terms(
        ["Discount to specific obligations", "Allocate a discount to only some obligations if the business regularly sells those items together at that discount, and the evidence shows where the discount belongs."],
        ["Variable consideration to specific obligations", "Allocate it entirely to one obligation if it relates specifically to that obligation, and the result is consistent with the allocation objective."],
        ["Changes in price", "Later changes in the transaction price are allocated on the same basis as at contract start."],
      ),
      p("Halcyon's $20,000 completion bonus relates only to the Lakeview project, so if it becomes included, it's allocated entirely to that project."),
    ),
    mistakes(
      ["Using the invoice split as the allocation", "Allocate on relative SSPs."],
      ["Using list prices that are never charged", "Use the actual stand-alone price."],
      ["Using the residual approach routinely", "Only when the SSP is highly variable or uncertain."],
      ["Spreading every discount evenly without checking", "Some discounts belong to specific items."],
    ),
    check(
      4,
      q("On what basis is the transaction price allocated?", ["Relative stand-alone selling prices", "Equal shares", "The order of delivery", "The customer's preference"], 0, "In proportion to SSP."),
      q("What's the best evidence of a stand-alone selling price?", ["The observable price when sold separately", "The list price", "The cost", "The competitor's price"], 0, "Actual separate sales."),
      q("Which approach adds a normal margin to forecast costs?", ["Expected cost plus a margin", "Residual", "Adjusted market assessment", "Most likely amount"], 0, "Cost-plus."),
      q("When can the residual approach be used?", ["When the SSP is highly variable or uncertain", "Always", "Never", "Only for hardware"], 0, "A restricted method."),
      q("Total SSPs are $10,000 and the price is $8,000. An item with SSP $5,000 gets:", ["$4,000", "$5,000", "$2,500", "$8,000"], 0, "$5,000 × 80%."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Allocate",
          ["A shop pays $9,000 for cameras (SSP $7,500), installation (SSP $500) and 12 months of monitoring (SSP $3,000). Allocate the price."],
          ["Total SSP $11,000; ratio 9,000 ÷ 11,000. Cameras $6,136.36, installation $409.09, monitoring $2,454.55 — total $9,000."],
        ],
        [
          "Exercise 2 — Cost-plus",
          ["A new on-site training session costs Halcyon $400 to deliver, and its normal margin is 25%. Estimate its SSP."],
          ["$400 × 1.25 = $500."],
        ],
      ),
    ),
    summary(
      ["Allocating on relative stand-alone selling prices", "Observable SSPs", "Adjusted market, cost-plus and residual approaches", "Allocating discounts and variable consideration"],
      "Share the price in proportion to stand-alone selling prices — and only put a discount or bonus on one item when the evidence says it belongs there.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Timing of Recognition",
      ["Revenue is recognised when control of each promise passes to the customer. This module decides when Halcyon recognises each part of its revenue."],
      ["Recognise revenue when obligations are satisfied", "Distinguish over time and point in time", "Measure progress with output and input methods", "Apply transfer-of-control indicators and bill-and-hold", "Account for licences, subscriptions and software"],
    ),
    screen(
      "Step 5 — satisfying obligations",
      table(
        ["Rivergate obligation", "Allocated", "When recognised"],
        [
          ["Hardware", "$7,200", "Point in time — on delivery in January"],
          ["Installation", "$800", "When complete — a one-day job in January"],
          ["Monitoring", "$4,800", "Over time — $200 a month for 24 months"],
        ],
      ),
      p("In 2026 Halcyon recognises $7,200 + $800 + (12 × $200) = $10,400 from Rivergate. The remaining $2,400 is recognised in 2027."),
    ),
    screen(
      "Over time vs. at a point in time",
      p("Revenue is recognised over time if any one of these is met; otherwise, at a point in time:"),
      bullets(
        "The customer simultaneously receives and consumes the benefit as the business performs (e.g. monitoring).",
        "The business's work creates or improves an asset the customer controls as it's built (e.g. a system installed in the customer's building).",
        "The work creates an asset with no alternative use to the business, and the business has an enforceable right to payment for work done to date.",
      ),
      p("The Lakeview Hospital system is built into the hospital's own building, which the hospital controls — so it's recognised over time."),
    ),
    screen(
      "Measuring progress — output and input methods",
      compare(
        ["Output methods", "Based on value delivered to the customer.", ["Milestones reached", "Units delivered", "Surveys of work done"]],
        ["Input methods", "Based on the business's efforts.", ["Costs incurred (cost-to-cost)", "Labour hours", "Machine hours"]],
      ),
      table(
        ["Lakeview Hospital at 31 Dec 2026", "Amount"],
        [
          ["Contract price", "$600,000"],
          ["Estimated total costs", "$400,000"],
          ["Costs to date", "$150,000"],
          ["Progress (150,000 ÷ 400,000)", "37.5%"],
          ["Revenue to date (37.5% × $600,000)", "$225,000"],
          ["Profit to date", "$75,000"],
        ],
        { numeric: [1] },
      ),
      caution("Exclude costs that don't reflect progress — such as wasted materials, or cameras delivered to site but not yet installed."),
    ),
    screen(
      "Transfer of control and bill-and-hold",
      terms(
        ["Control indicators", "A present right to payment, legal title, physical possession, the significant risks and rewards of ownership, and customer acceptance."],
        ["Bill-and-hold", "The customer is billed but the business keeps the goods. Revenue is recognised only if there's a substantive reason, the goods are identified as the customer's, ready to ship, and can't be used for another customer."],
      ),
      p("A shop asks Halcyon to hold 50 billed cameras until its new store opens. They're tagged with the shop's name, ready to ship and can't be sold to anyone else — so revenue is recognised now, with a storage service considered separately."),
      caution("Bill-and-hold is a classic way to inflate revenue. Check every criterion."),
    ),
    screen(
      "Licences, subscriptions and software",
      table(
        ["Arrangement", "Nature", "Timing"],
        [
          ["Right to access (e.g. a brand or continually updated content)", "Customer accesses IP that changes over the licence period", "Over time"],
          ["Right to use (e.g. functional software as it exists)", "Customer uses IP as it is when granted", "Point in time"],
          ["Software as a service (SaaS)", "A service, not a licence — the customer doesn't take the software", "Over time"],
          ["Subscriptions (e.g. monitoring)", "A series of services", "Over time"],
        ],
      ),
      p("Halcyon's analytics platform is hosted and updated continually, so it's a service recognised over the subscription period."),
    ),
    mistakes(
      ["Recognising subscriptions upfront", "Recognise over the service period."],
      ["Counting uninstalled materials as progress", "Adjust the input measure."],
      ["Bill-and-hold without meeting the criteria", "No revenue until control transfers."],
      ["Treating all software the same", "Check right to access, right to use or SaaS."],
    ),
    check(
      5,
      q("Monitoring services are recognised:", ["Over time", "At a point in time on signing", "When cash is received", "At the end of the contract"], 0, "The customer consumes the service as it's provided."),
      q("Costs to date $90,000; estimated total $300,000; price $500,000. Revenue to date (cost-to-cost)?", ["$150,000", "$90,000", "$300,000", "$500,000"], 0, "30% × $500,000."),
      q("Which is an output method?", ["Milestones reached", "Costs incurred", "Labour hours", "Machine hours"], 0, "It measures value delivered."),
      q("A licence to functional software as it exists is recognised:", ["At a point in time", "Over time", "Never", "When the customer pays"], 0, "Right to use."),
      q("Which is required for bill-and-hold revenue?", ["The goods are identified as the customer's and can't go to another customer", "The customer hasn't been billed", "The goods aren't made yet", "No reason is needed"], 0, "Among other criteria."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Project revenue",
          ["By 31 Dec 2027 Lakeview costs to date are $320,000 and estimated total costs rise to $410,000. What revenue is recognised in 2027?"],
          ["Progress 320,000 ÷ 410,000 = 78.05%; cumulative revenue $468,293; 2027 revenue $468,293 − $225,000 = $243,293."],
        ],
        [
          "Exercise 2 — Subscription",
          ["A customer pays $3,600 on 1 October 2026 for 12 months of monitoring. How much revenue is recognised in 2026?"],
          ["3 months × $300 = $900; $2,700 is deferred to 2027."],
        ],
      ),
    ),
    summary(
      ["Recognising revenue when obligations are satisfied", "The three over-time criteria", "Output and input methods", "Control indicators and bill-and-hold", "Licences, SaaS and subscriptions"],
      "Revenue follows control: over time if a criterion is met, otherwise at the point control passes.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Accounting Entries and Disclosures",
      ["This module records Halcyon's contract balances and costs, and prepares the revenue note for its 2026 financial statements."],
      ["Record contract assets, receivables and contract liabilities", "Account for costs of obtaining and fulfilling contracts", "Prepare revenue disaggregation and disclosures", "Spot common errors and revenue red flags", "Use a revenue recognition checklist"],
    ),
    screen(
      "Contract liabilities",
      p("Rivergate paid the $4,800 for monitoring upfront on 1 January 2026. Halcyon hasn't yet provided the service, so it owes a contract liability."),
      journal([["Cash", "$4,800", ""], ["Contract liability", "", "$4,800"]], "$4,800"),
      p("Each month, as monitoring is provided:"),
      journal([["Contract liability", "$200", ""], ["Revenue", "", "$200"]], "$200"),
      p("At 31 December 2026, $2,400 has been recognised and $2,400 remains a contract liability."),
    ),
    screen(
      "Contract assets and receivables",
      terms(
        ["Receivable", "An unconditional right to payment — only the passage of time is needed."],
        ["Contract asset", "A right to payment that depends on something other than time, such as reaching the next milestone."],
      ),
      p("By 31 December 2026 Halcyon has recognised $225,000 of Lakeview revenue but billed only $180,000 at the agreed milestones."),
      journal([["Accounts receivable", "$180,000", ""], ["Contract asset", "$45,000", ""], ["Revenue", "", "$225,000"]], "$225,000"),
      note("When the next milestone is billed, the contract asset is reclassified to receivables."),
    ),
    screen(
      "Costs of obtaining and fulfilling a contract",
      table(
        ["Cost", "Treatment", "Halcyon example"],
        [
          ["Incremental cost of obtaining a contract", "Capitalise if expected to be recovered; amortise over the contract", "$1,200 sales commission on a 24-month contract → $50 a month"],
          ["Costs that would arise anyway", "Expense", "Sales team salaries, travel to pitch"],
          ["Costs to fulfil a contract", "Capitalise if they relate directly, create resources for future performance and are expected to be recovered — and no other standard applies", "Design work before installation starts"],
        ],
      ),
      tip("Practical expedient", "If the amortisation period would be one year or less, the cost of obtaining a contract can be expensed."),
    ),
    screen(
      "Revenue disaggregation and disclosures",
      table(
        ["Halcyon 2026 revenue (illustrative)", "Point in time", "Over time", "Total"],
        [
          ["Hardware", "$4,200,000", "—", "$4,200,000"],
          ["Installation", "$600,000", "—", "$600,000"],
          ["Monitoring", "—", "$2,100,000", "$2,100,000"],
          ["Projects", "—", "$900,000", "$900,000"],
        ],
        { footer: ["Total", "$4,800,000", "$3,000,000", "$7,800,000"], numeric: [1, 2, 3] },
      ),
      bullets(
        "Disaggregation by type, timing, region or customer.",
        "Opening and closing contract assets, receivables and contract liabilities.",
        "Remaining performance obligations and when they're expected to be recognised.",
        "Significant judgements — e.g. estimating progress on projects and rebates.",
      ),
    ),
    screen(
      "Common errors and revenue red flags",
      table(
        ["Red flag", "What it might signal"],
        [
          ["Revenue spikes in the last days of a period", "Pulling sales forward"],
          ["Receivables growing faster than revenue", "Fake or uncollectable sales"],
          ["Large distributor orders at year end", "Channel stuffing"],
          ["Side letters with extra return rights", "Undisclosed variable consideration"],
          ["Frequent bill-and-hold arrangements", "Revenue before control transfers"],
        ],
      ),
      caution("Revenue is a presumed fraud risk in audits — expect auditors to test it closely."),
    ),
    screen(
      "Revenue recognition checklist",
      bullets(
        "Contracts meet all five criteria, including collectability.",
        "Performance obligations identified, with warranties and agency relationships assessed.",
        "Variable consideration estimated and constrained.",
        "Price allocated on relative stand-alone selling prices.",
        "Timing assessed — over time or point in time — with progress measured correctly.",
        "Contract assets, liabilities and capitalised costs reconciled.",
        "Disclosures complete: disaggregation, balances, remaining obligations and judgements.",
      ),
    ),
    mistakes(
      ["Recording upfront payments as revenue", "They're contract liabilities until earned."],
      ["Calling a contract asset a receivable", "A receivable is unconditional."],
      ["Expensing all commissions", "Capitalise incremental costs unless the expedient applies."],
      ["Thin disclosures", "Disaggregate and explain judgements."],
    ),
    check(
      6,
      q("A customer pays in advance for a service not yet provided. What does the business record?", ["A contract liability", "Revenue", "A contract asset", "A receivable"], 0, "It owes the service."),
      q("What's the difference between a receivable and a contract asset?", ["A receivable is unconditional; a contract asset depends on something other than time", "There is none", "A contract asset is cash", "A receivable is a liability"], 0, "Conditional vs. unconditional."),
      q("How is a sales commission earned only if a 2-year contract is won usually treated?", ["Capitalised and amortised over the contract", "Expensed immediately", "Deducted from revenue", "Ignored"], 0, "Incremental cost of obtaining a contract."),
      q("Which is a revenue red flag?", ["Receivables growing faster than revenue", "Steady monthly sales", "Consistent margins", "On-time collections"], 0, "It can signal fake sales."),
      q("Which disclosure is required?", ["Disaggregation of revenue", "Staff salaries", "The CEO's bonus", "Customer phone numbers"], 0, "By type, timing or region."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Contract balances",
          ["A project has revenue to date of $90,000 and billings of $110,000. What balance is shown?"],
          ["A contract liability of $20,000 — billed more than earned."],
        ],
        [
          "Exercise 2 — Commission",
          ["Halcyon pays a $2,400 commission for a 36-month monitoring contract. How much is expensed each month?"],
          ["$2,400 ÷ 36 = $66.67 a month, after capitalising the cost."],
        ],
      ),
    ),
    summary(
      ["Contract liabilities, contract assets and receivables", "Costs of obtaining and fulfilling contracts", "Disaggregation and disclosures", "Revenue red flags", "A revenue recognition checklist"],
      "The balance sheet tells the timing story: contract liabilities for cash received early, contract assets for revenue earned before it can be billed.",
    ),
  ],
}

export default lessons
