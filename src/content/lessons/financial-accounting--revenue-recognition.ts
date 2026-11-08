import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Revenue Recognition — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "One revenue standard",
      p("IFRS 15, ASC 606 (US GAAP), AASB 15 (Australia) and Ind AS 115 (India) are converged standards for revenue from contracts with customers. They replaced older, industry-specific rules with one principle:"),
      note("Recognise revenue to show the transfer of promised goods or services to customers, at the amount the business expects to be entitled to in exchange."),
      p("The standards are largely the same, with a few differences in detail — for example, some practical expedients and disclosure requirements."),
    ),
    screen(
      "The five steps",
      steps(
        ["Identify the contract", "Is there an enforceable agreement with a customer?"],
        ["Identify performance obligations", "What distinct goods or services have been promised?"],
        ["Determine the transaction price", "How much does the business expect to receive?"],
        ["Allocate the price", "Split the price across the performance obligations."],
        ["Recognise revenue", "When (or as) each obligation is satisfied."],
      ),
    ),
    screen(
      "Step 1 — the contract",
      p("A contract exists when all of these are met:"),
      bullets(
        "The parties have approved it (in writing, orally or by customary practice) and are committed.",
        "Each party's rights can be identified.",
        "Payment terms can be identified.",
        "It has commercial substance.",
        "Collection of the consideration is probable.",
      ),
      terms(
        ["Combining contracts", "Contracts with the same customer at or near the same time may be combined if negotiated as a package."],
        ["Modifications", "A change that adds distinct goods or services at their stand-alone price is treated as a separate contract; other changes adjust the existing contract."],
      ),
    ),
    check(
      1,
      q("Which standard is the US GAAP revenue standard?", ["IFRS 15", "ASC 606", "Ind AS 115", "AASB 15"], 1, "ASC 606."),
      q("What is step 2 of the model?", ["Identify the contract", "Identify performance obligations", "Determine the price", "Recognise revenue"], 1, "Find the distinct promises."),
      q("Which is a requirement for a contract to exist?", ["Collection is probable", "It must be written", "It must exceed $10,000", "Payment in advance"], 0, "Collectability must be probable."),
      q("Can a contract be oral?", ["No", "Yes, if enforceable", "Only in India", "Only under US GAAP"], 1, "Approval can be written, oral or customary."),
      q("A modification adds distinct services at their stand-alone price. How is it treated?", ["As a separate contract", "Ignored", "As a reduction of revenue", "As a liability only"], 0, "It's effectively a new contract."),
    ),
  ],
  1: [
    screen(
      "Distinct goods and services",
      p("A good or service is distinct if both:"),
      bullets(
        "The customer can benefit from it on its own or with readily available resources, and",
        "The promise is separately identifiable from other promises in the contract (not highly integrated or modifying each other).",
      ),
      table(
        ["Contract", "Performance obligations"],
        [
          ["Laptop with two years of support", "Two: the laptop and the support service"],
          ["Standard software with simple installation anyone could do", "Two: licence and installation"],
          ["Building a custom factory with materials and labour", "One: the integrated factory"],
        ],
      ),
    ),
    screen(
      "Warranties",
      compare(
        ["Assurance-type warranty", "Promises the product works as agreed. Not a separate obligation — record a warranty provision.", ["Standard 1-year manufacturer warranty"]],
        ["Service-type warranty", "Provides extra service beyond assurance, or can be bought separately. A separate performance obligation — defer part of the price.", ["Extended 3-year warranty sold as an option"]],
      ),
    ),
    screen(
      "Principal vs. agent",
      p("Does the business control the good or service before it's transferred to the customer?"),
      compare(
        ["Principal", "Controls the good or service. Recognises revenue gross.", ["Takes inventory risk", "Sets the price", "Primarily responsible for fulfilment"]],
        ["Agent", "Arranges for another party to provide it. Recognises revenue net — its commission.", ["A marketplace earning a fee", "A travel agent"]],
      ),
      example(
        [["Customer pays for a hotel booked through an agent", "$500"], ["Paid on to the hotel", "($425)"]],
        ["Agent's revenue (net)", "$75"],
      ),
    ),
    check(
      2,
      q("When is a promised good or service distinct?", ["When it can benefit the customer alone and is separately identifiable", "When it's expensive", "When it's invoiced separately", "Always"], 0, "Both criteria must be met."),
      q("A laptop with two years of support contains how many performance obligations?", ["One", "Two", "Three", "None"], 1, "The laptop and the support."),
      q("An optional extended warranty bought separately is:", ["An assurance-type warranty", "A separate performance obligation", "Not accounted for", "A cost of sales"], 1, "It's a service-type warranty."),
      q("An agent collects $500 and pays $425 to the hotel. What's its revenue?", ["$500", "$425", "$75", "$925"], 2, "Agents recognise their net commission."),
      q("Who recognises revenue gross?", ["The principal", "The agent", "Both", "Neither"], 0, "The party that controls the good or service."),
    ),
  ],
  2: [
    screen(
      "Step 3 — the transaction price",
      p("The transaction price is what the business expects to be entitled to, excluding amounts collected for others (like sales tax or GST)."),
      terms(
        ["Variable consideration", "Discounts, rebates, refunds, incentives, performance bonuses and penalties."],
        ["Expected value method", "A probability-weighted amount — suits many similar contracts."],
        ["Most likely amount method", "The single most likely outcome — suits yes/no outcomes like a bonus."],
      ),
    ),
    screen(
      "Variable consideration and the constraint",
      p("A business sells 1,000 units at $50 to a distributor. If the distributor buys over 900 units this year, it gets a 5% rebate on all purchases. That's highly likely."),
      example(
        [["Gross price 1,000 × $50", "$50,000"], ["Less: expected rebate 5%", "($2,500)"]],
        ["Revenue recognised", "$47,500"],
      ),
      caution("The constraint: include variable consideration only to the extent it's highly probable (IFRS) / probable (US GAAP) that a significant reversal won't occur later."),
    ),
    screen(
      "Financing, non-cash consideration and payments to customers",
      terms(
        ["Significant financing component", "If payment timing gives a significant financing benefit, adjust for the time value of money. Practical expedient: ignore it if the gap between payment and transfer is one year or less."],
        ["Non-cash consideration", "Shares, goods or services received from the customer are measured at fair value."],
        ["Consideration payable to a customer", "Slotting fees, coupons or credits paid to a customer usually reduce revenue, unless they buy a distinct good or service from the customer."],
      ),
    ),
    check(
      3,
      q("Is GST collected from customers part of the transaction price?", ["Yes", "No — it's collected for the government", "Only in India", "Only under US GAAP"], 1, "Amounts collected for others are excluded."),
      q("Which method suits a yes/no performance bonus?", ["Expected value", "Most likely amount", "Straight-line", "FIFO"], 1, "A binary outcome suits most likely amount."),
      q("1,000 units at $50 with an expected 5% rebate. What's revenue?", ["$50,000", "$47,500", "$2,500", "$52,500"], 1, "$50,000 − $2,500."),
      q("What does the constraint on variable consideration aim to prevent?", ["A significant reversal of revenue later", "Paying tax", "Recording costs", "Discounts"], 0, "Only include amounts unlikely to reverse."),
      q("Payment is due 6 months after delivery. Must you adjust for financing?", ["Yes, always", "No — the one-year practical expedient applies", "Only for services", "Only under IFRS"], 1, "Gaps of one year or less can be ignored."),
    ),
  ],
  3: [
    screen(
      "Step 4 — allocating on stand-alone selling prices",
      p("A laptop and two years of support are sold together for $1,200. Sold separately, the laptop is $1,100 and the support $220."),
      table(
        ["Obligation", "Stand-alone price", "Allocation", "Allocated price"],
        [
          ["Laptop", "$1,100", "$1,200 × 1,100 ÷ 1,320", "$1,000"],
          ["Support", "$220", "$1,200 × 220 ÷ 1,320", "$200"],
        ],
        { footer: ["Total", "$1,320", "", "$1,200"], numeric: [1, 3] },
      ),
      p("The $120 bundle discount is spread across both in proportion."),
    ),
    screen(
      "Estimating stand-alone selling prices",
      table(
        ["Approach", "How it works", "When used"],
        [
          ["Adjusted market assessment", "What customers in the market would pay; competitors' prices adjusted", "Market data available"],
          ["Expected cost plus margin", "Forecast costs plus a reasonable margin", "Services, custom items"],
          ["Residual", "Total price less observable prices of other items", "Only when the price is highly variable or uncertain"],
        ],
      ),
      note("Use observable prices — what the business charges when selling the item separately — whenever they exist."),
    ),
    screen(
      "Allocating discounts and variable consideration",
      bullets(
        "Discounts are allocated proportionally to all obligations, unless there's observable evidence the discount relates to only some of them.",
        "Variable consideration can be allocated entirely to one obligation if it relates specifically to it (e.g. a bonus for finishing installation early).",
        "Later changes in the transaction price are allocated on the same basis as at contract start.",
      ),
      tip("Document the basis", "Keep a record of the stand-alone prices and the allocation for each contract type — auditors will ask."),
    ),
    check(
      4,
      q("Laptop SSP $1,100, support SSP $220, bundle $1,200. What's allocated to the laptop?", ["$1,100", "$1,000", "$1,200", "$980"], 1, "$1,200 × 1,100 ÷ 1,320."),
      q("What's allocated to support?", ["$220", "$200", "$100", "$120"], 1, "$1,200 × 220 ÷ 1,320."),
      q("When is the residual approach allowed?", ["Always", "Only when the price is highly variable or uncertain", "Never", "For all services"], 1, "It's a restricted method."),
      q("By default, a bundle discount is allocated:", ["Entirely to the cheapest item", "Proportionally to all obligations", "To revenue later", "To costs"], 1, "Proportionally, unless evidence says otherwise."),
      q("What's the best evidence of a stand-alone selling price?", ["The observable price when sold separately", "A guess", "Cost only", "The competitor's website alone"], 0, "Observable prices come first."),
    ),
  ],
  4: [
    screen(
      "Step 5 — over time or at a point in time",
      p("Revenue is recognised over time if any of these apply; otherwise at a point in time:"),
      bullets(
        "The customer receives and consumes the benefit as the business performs (e.g. cleaning, payroll services).",
        "The business's work creates or enhances an asset the customer controls (e.g. building on the customer's land).",
        "The asset has no alternative use to the business and it has an enforceable right to payment for work done to date.",
      ),
    ),
    screen(
      "Measuring progress",
      compare(
        ["Output methods", "Based on value delivered: milestones reached, units delivered, surveys of work done.", ["Direct measure of transfer"]],
        ["Input methods", "Based on effort: costs incurred, hours worked, relative to the total expected.", ["Exclude costs that don't reflect progress, like wasted materials"]],
      ),
      example(
        [["Contract price", "$500,000"], ["Estimated total costs", "$400,000"], ["Costs incurred to date", "$100,000"], ["Progress (cost-to-cost)", "25%"]],
        ["Revenue to date", "$125,000"],
      ),
    ),
    screen(
      "Control, bill-and-hold and licences",
      terms(
        ["Indicators of control transfer", "Present right to payment, legal title, physical possession, risks and rewards of ownership, and customer acceptance."],
        ["Bill-and-hold", "Customer is billed but the seller keeps the goods. Revenue only if there's a substantive reason, goods are identified as the customer's, ready for transfer, and can't be used for other customers."],
        ["Licences", "A right to access intellectual property as it changes (e.g. a brand) is recognised over time; a right to use it as it exists (e.g. a film or software at a point in time) is recognised when control transfers."],
        ["Subscriptions (SaaS)", "Usually a service delivered over the period — revenue recognised over time, often straight-line."],
      ),
    ),
    check(
      5,
      q("A monthly cleaning service is recognised:", ["At a point in time", "Over time", "When paid", "At year-end"], 1, "The customer consumes the benefit as it's performed."),
      q("Costs to date $100,000 of total $400,000; contract $500,000. Revenue to date?", ["$100,000", "$125,000", "$400,000", "$500,000"], 1, "25% × $500,000."),
      q("Which is an indicator that control has transferred?", ["Customer has legal title and physical possession", "An order was placed", "A quote was sent", "Goods were manufactured"], 0, "Title and possession indicate control."),
      q("A 12-month SaaS subscription is typically recognised:", ["Upfront", "Over the subscription period", "At the end", "When renewed"], 1, "It's a service delivered over time."),
      q("Should wasted materials count in a cost-to-cost progress measure?", ["Yes", "No — they don't reflect progress", "Only if expensive", "Only under US GAAP"], 1, "Exclude costs that don't show progress."),
    ),
  ],
  5: [
    screen(
      "Contract assets, receivables and contract liabilities",
      table(
        ["Balance", "Meaning", "Example"],
        [
          ["Receivable", "Unconditional right to payment (only time must pass)", "Invoiced, due in 30 days"],
          ["Contract asset", "Right to payment conditional on something other than time", "Work done, billable at the next milestone"],
          ["Contract liability", "Payment received (or due) before performance", "Annual subscription paid upfront"],
        ],
      ),
      p("A customer prepays $12,000 for a year's subscription:"),
      journal([["Cash", "$12,000", ""], ["Contract liability", "", "$12,000"]], "$12,000"),
      p("Each month, $1,000 moves from the contract liability to revenue."),
    ),
    screen(
      "Costs of obtaining and fulfilling a contract",
      terms(
        ["Costs of obtaining", "Incremental costs that wouldn't exist without the contract — like sales commissions — are capitalised if expected to be recovered, and amortised over the period of benefit. Practical expedient: expense them if that period is one year or less."],
        ["Costs of fulfilling", "Costs that relate directly to a contract, generate resources for future performance and are expected to be recovered are capitalised (if not covered by another standard, such as inventory)."],
      ),
      example(
        [["Commission on a 3-year contract", "$9,000"], ["Amortisation period", "36 months"]],
        ["Monthly amortisation", "$250"],
      ),
    ),
    screen(
      "Disclosures, red flags and checklist",
      bullets(
        "Disaggregation of revenue — e.g. by product line, region, timing (point in time vs. over time).",
        "Contract balances and how they changed.",
        "Remaining performance obligations and when they'll be recognised.",
        "Significant judgements.",
      ),
      h("Common errors and red flags"),
      bullets(
        "Recognising bundled services upfront.",
        "Treating agent sales as gross revenue.",
        "Ignoring rebates and returns until paid.",
        "Spikes in revenue at quarter-end, or bill-and-hold without substance.",
      ),
      h("Revenue recognition checklist"),
      bullets(
        "Contracts reviewed against the five steps.",
        "Performance obligations and stand-alone prices documented.",
        "Variable consideration estimated and constrained.",
        "Timing (over time vs. point in time) justified.",
        "Contract balances reconciled and disclosures prepared.",
      ),
    ),
    check(
      6,
      q("A customer pays upfront for a year's service. What's recorded first?", ["Revenue", "A contract liability", "A contract asset", "A receivable only"], 1, "Revenue comes as the service is delivered."),
      q("What's a contract asset?", ["A right to payment conditional on more than time passing", "Cash", "Inventory", "A loan"], 0, "Billing depends on future performance."),
      q("A $9,000 commission on a 3-year contract is amortised at how much a month?", ["$9,000", "$750", "$250", "$3,000"], 2, "$9,000 ÷ 36."),
      q("When can contract-obtaining costs be expensed immediately?", ["When the amortisation period is one year or less", "Always", "Never", "When over $10,000"], 0, "That's the practical expedient."),
      q("Which is a revenue red flag?", ["Spikes in revenue at quarter-end", "Consistent monthly subscriptions", "Documented allocations", "Reconciled contract balances"], 0, "Possible pulling forward of revenue."),
    ),
  ],
}

export default lessons
