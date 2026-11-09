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

// Cost Accounting Basics — lesson screens by module index (0 = Module 1).
// The course follows Oakridge Joinery, a workshop making solid oak doors.
// Budget: 2,500 doors a year at $400 each.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Introduction to Cost Accounting",
      ["Cost accounting tells a business what things really cost to make. This module introduces Oakridge Joinery and the basic language of costs."],
      ["Compare cost accounting with financial accounting", "Identify cost units and cost centres", "Classify direct and indirect costs", "Classify fixed, variable and semi-variable costs", "Split semi-variable costs with the high-low method"],
    ),
    screen(
      "Meet Oakridge Joinery",
      p("Oakridge Joinery makes solid oak doors in a workshop with three production areas — Machining, Assembly and Finishing — plus a timber store. It plans to make and sell 2,500 doors in 2027 at $400 each."),
      p("Its owner, Daniel, knows the business makes a profit overall but can't say what one door costs, whether a big hotel order at a lower price is worth taking, or why last month's profit fell. Cost accounting answers these questions."),
    ),
    screen(
      "Cost accounting vs. financial accounting",
      table(
        ["", "Financial accounting", "Cost accounting"],
        [
          ["Users", "Owners, lenders, tax authorities", "Managers inside the business"],
          ["Focus", "The whole business, past periods", "Products, jobs, departments — past and future"],
          ["Rules", "Accounting standards and law", "Whatever is most useful"],
          ["Output", "Financial statements", "Product costs, budgets, variances, pricing"],
        ],
      ),
    ),
    screen(
      "Cost units and cost centres",
      terms(
        ["Cost unit", "The unit of output that's costed — for Oakridge, one door. Other examples: a batch, a job, an hour of service."],
        ["Cost centre", "A location or function where costs are collected — Machining, Assembly, Finishing, Stores."],
        ["Production cost centres", "Work directly on the product — Machining, Assembly, Finishing."],
        ["Service cost centres", "Support production — Stores, Maintenance."],
      ),
    ),
    screen(
      "Direct and indirect costs",
      table(
        ["Cost", "Type", "Why"],
        [
          ["Oak timber in a door", "Direct material", "Traced to each door"],
          ["Joiner's time building a door", "Direct labour", "Traced to each door"],
          ["Glue, screws, sandpaper", "Indirect material", "Too small to trace — treated as overhead"],
          ["Supervisor's salary", "Indirect labour", "Supports all production"],
          ["Workshop rent and electricity", "Indirect expenses", "Shared by all doors"],
        ],
      ),
      p("Prime cost = direct materials + direct labour (+ direct expenses). Indirect costs are overheads."),
    ),
    screen(
      "Fixed, variable and semi-variable costs",
      compare(
        ["Variable", "Total changes in line with output.", ["Timber", "Direct labour paid per door"]],
        ["Fixed", "Total stays the same within a range of output.", ["Rent", "Supervisor salary", "Insurance"]],
      ),
      terms(["Semi-variable", "Part fixed, part variable — e.g. electricity: a standing charge plus usage."]),
      note("Fixed cost per unit falls as output rises; variable cost per unit stays the same."),
    ),
    screen(
      "The high-low method",
      table(
        ["Month", "Machine hours", "Electricity"],
        [
          ["Highest activity", "2,400", "$6,800"],
          ["Lowest activity", "1,400", "$4,800"],
        ],
        { numeric: [1, 2] },
      ),
      steps(
        ["Variable cost per hour", "($6,800 − $4,800) ÷ (2,400 − 1,400) = $2.00"],
        ["Fixed cost", "$6,800 − (2,400 × $2) = $2,000 a month"],
        ["Formula", "Electricity = $2,000 + $2 × machine hours"],
      ),
      caution("High-low uses only two points, which may be unusual months. Check the result looks sensible against other months."),
    ),
    mistakes(
      ["Using financial statements to price products", "Use cost accounting."],
      ["Treating glue as direct material", "Small items are overheads."],
      ["Assuming fixed cost per unit is fixed", "It falls as output rises."],
      ["Using unusual months for high-low", "Pick representative points."],
    ),
    check(
      1,
      q("Who mainly uses cost accounting information?", ["Managers inside the business", "Tax authorities", "Shareholders only", "Customers"], 0, "For pricing and control."),
      q("Which is a cost unit for Oakridge?", ["One door", "The Machining department", "Rent", "The owner"], 0, "The unit of output."),
      q("What is prime cost?", ["Direct materials + direct labour + direct expenses", "All overheads", "Selling price", "Fixed costs"], 0, "All direct costs."),
      q("Which cost is fixed within a range of output?", ["Workshop rent", "Timber", "Piece-rate labour", "Sales commission"], 0, "It doesn't change with doors made."),
      q("High 500 units costs $3,000; low 300 units costs $2,200. Variable cost per unit?", ["$4", "$6", "$7.33", "$800"], 0, "$800 ÷ 200."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Classify as direct or indirect, and fixed or variable: (a) door hinges fitted to each door, (b) factory insurance, (c) maintenance engineer's salary."],
          ["(a) Direct, variable. (b) Indirect, fixed. (c) Indirect, fixed."],
        ],
        [
          "Exercise 2 — Predict",
          ["Using Oakridge's electricity formula, what's the expected cost in a month with 2,000 machine hours?"],
          ["$2,000 + 2,000 × $2 = $6,000."],
        ],
      ),
    ),
    summary(
      ["Cost vs. financial accounting", "Cost units and cost centres", "Direct and indirect costs", "Fixed, variable and semi-variable costs", "The high-low method"],
      "Cost accounting classifies costs so managers can see what each product really costs — and how costs behave as output changes.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Materials and Labour",
      ["Timber and joiners' time are Oakridge's two biggest costs. This module controls and values them."],
      ["Control purchasing, receiving and issuing of materials", "Value issues with FIFO and weighted average", "Set reorder, minimum and maximum levels", "Account for labour cost, idle time and overtime", "Measure labour efficiency"],
    ),
    screen(
      "Purchasing, receiving and issuing materials",
      steps(
        ["Purchase requisition", "Stores requests timber when stock reaches the reorder level."],
        ["Purchase order", "Approved and sent to the supplier."],
        ["Goods received note", "Stores checks quantity and quality on delivery."],
        ["Invoice check", "Matched to the order and goods received note before payment."],
        ["Materials requisition", "Production requests timber; stores issues it and charges the job."],
      ),
    ),
    screen(
      "Valuing issues — FIFO and weighted average",
      p("Oakridge starts the month with 100 oak boards at $30. It buys 200 at $33, then issues 250 to production."),
      table(
        ["Method", "Cost of 250 boards issued", "Closing 50 boards"],
        [
          ["FIFO — oldest first", "100 × $30 + 150 × $33 = $7,950", "50 × $33 = $1,650"],
          ["Weighted average — ($3,000 + $6,600) ÷ 300 = $32", "250 × $32 = $8,000", "50 × $32 = $1,600"],
        ],
      ),
      p("When prices are rising, FIFO gives a lower cost of production and a higher closing stock value."),
    ),
    screen(
      "Reorder levels and stock control",
      table(
        ["Board usage per week", "Lead time"],
        [["Minimum 30, average 40, maximum 50", "Minimum 2, average 3, maximum 4 weeks"]],
      ),
      table(
        ["Level", "Formula", "Oakridge"],
        [
          ["Reorder level", "Maximum usage × maximum lead time", "50 × 4 = 200 boards"],
          ["Minimum level (warning)", "Reorder level − (average usage × average lead time)", "200 − 120 = 80 boards"],
          ["Maximum level", "Reorder level + reorder quantity − (minimum usage × minimum lead time)", "200 + 300 − 60 = 440 boards"],
        ],
      ),
    ),
    screen(
      "Labour cost, idle time and overtime",
      terms(
        ["Direct labour", "Time spent building doors — charged to products."],
        ["Idle time", "Paid time with no production, e.g. waiting for timber or machine breakdowns. Normal idle time is an overhead; abnormal idle time is written off and investigated."],
        ["Overtime premium", "The extra over the basic rate. Usually an overhead — unless a customer's urgent order caused it, when it's charged to that job."],
      ),
      example([["Joiner works 5 overtime hours at time-and-a-half; basic rate $30", ""], ["Basic pay: 5 × $30 — direct labour", "$150"], ["Premium: 5 × $15 — overhead", "$75"]], ["Total overtime pay", "$225"]),
    ),
    screen(
      "Labour efficiency and productivity",
      p("Each door has a standard time of 3 hours. In October, joiners produced 150 doors (450 standard hours) in 500 actual hours."),
      example([["Standard hours produced", "450"], ["Actual hours worked", "500"]], ["Efficiency (450 ÷ 500)", "90%"]),
      tip("Find the cause", "Low efficiency may come from poor timber, untrained staff, or machine problems — not just slow workers."),
    ),
    mistakes(
      ["Issuing timber without a requisition", "Every issue charged to a job."],
      ["Mixing FIFO and average in one period", "Use one method consistently."],
      ["Charging all overtime to the product", "The premium is usually overhead."],
      ["Ignoring abnormal idle time", "Investigate and write off."],
    ),
    check(
      2,
      q("Which document confirms goods arrived in good condition?", ["Goods received note", "Purchase order", "Invoice", "Requisition"], 0, "Prepared by stores."),
      q("Under FIFO, which cost is issued first?", ["The oldest", "The newest", "The average", "The highest"], 0, "First in, first out."),
      q("How is the reorder level calculated?", ["Maximum usage × maximum lead time", "Average usage × 2", "Minimum usage × minimum lead time", "Reorder quantity ÷ 2"], 0, "Avoids running out."),
      q("How is overtime premium usually treated?", ["As an overhead", "As direct material", "As revenue", "Ignored"], 0, "Unless a customer caused it."),
      q("100 standard hours produced in 125 actual hours. Efficiency?", ["80%", "125%", "100%", "25%"], 0, "100 ÷ 125."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Valuation",
          ["Opening 50 units at $10; bought 150 at $12; issued 120. Calculate the issue cost under FIFO and weighted average."],
          ["FIFO: 50 × $10 + 70 × $12 = $1,340. Average: ($500 + $1,800) ÷ 200 = $11.50 → 120 × $11.50 = $1,380."],
        ],
        [
          "Exercise 2 — Idle time",
          ["A saw breaks down for 2 days, leaving 4 joiners idle for 16 hours each at $30. Normal or abnormal? How is it treated?"],
          ["Abnormal — 64 hours × $30 = $1,920 written off to profit and loss and investigated, not charged to doors."],
        ],
      ),
    ),
    summary(
      ["Material purchasing and issuing controls", "FIFO and weighted average", "Reorder, minimum and maximum levels", "Idle time and overtime premium", "Labour efficiency"],
      "Control materials and labour at source — and value them consistently — before building them into product costs.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Overheads and Cost Sheets",
      ["Overheads can't be traced to a door, but every door must carry its share. This module builds Oakridge's overhead rates and a full cost sheet."],
      ["Allocate and apportion overheads", "Calculate overhead absorption rates", "Find under- and over-absorbed overheads", "Prepare a cost sheet", "Understand job, batch and process costing"],
    ),
    screen(
      "Allocating and apportioning overheads",
      terms(
        ["Allocation", "Charging a whole overhead to one cost centre — e.g. the Machining supervisor's salary to Machining."],
        ["Apportionment", "Sharing an overhead between cost centres on a fair basis."],
        ["Reapportionment", "Sharing service centre costs (Stores, Maintenance) to production centres."],
      ),
      table(
        ["Workshop rent $48,000 by floor area", "m²", "Share"],
        [
          ["Machining", "400", "$19,200"],
          ["Assembly", "300", "$14,400"],
          ["Finishing", "200", "$9,600"],
          ["Stores", "100", "$4,800"],
        ],
        { footer: ["Total", "1,000", "$48,000"], numeric: [1, 2] },
      ),
      p("Other bases: machinery insurance by machine value, canteen costs by headcount, electricity by kWh."),
    ),
    screen(
      "Overhead absorption rates",
      p("After apportioning everything, Oakridge's budgeted production overheads for 2027 are $255,000:"),
      table(
        ["Cost centre", "Overheads", "Budgeted activity", "Rate"],
        [
          ["Machining", "$75,000", "5,000 machine hours", "$15 per machine hour"],
          ["Assembly and Finishing", "$180,000", "7,500 labour hours", "$24 per labour hour"],
        ],
      ),
      p("Each door takes 2 machine hours and 3 labour hours, so it absorbs 2 × $15 + 3 × $24 = $102 of overhead."),
      tip("Pick the right base", "Use machine hours where work is machine-driven and labour hours where it's labour-driven."),
    ),
    screen(
      "Under- and over-absorbed overheads",
      p("Rates are set in advance from budgets, so actual overheads rarely match what's absorbed."),
      table(
        ["Machining, 2027", "Amount"],
        [
          ["Absorbed: 5,300 actual machine hours × $15", "$79,500"],
          ["Actual overheads incurred", "$78,000"],
        ],
        { footer: ["Over-absorbed", "$1,500"], numeric: [1] },
      ),
      p("Over-absorption is credited to profit and loss at year end; under-absorption is charged as an extra expense."),
    ),
    screen(
      "Preparing a cost sheet",
      table(
        ["Standard oak door", "Per door"],
        [
          ["Direct materials (4 m² oak at $30)", "$120.00"],
          ["Direct labour (3 hours at $30)", "$90.00"],
          ["Prime cost", "$210.00"],
          ["Production overheads ($30 machining + $72 assembly)", "$102.00"],
          ["Production cost", "$312.00"],
          ["Administration and selling ($108,000 ÷ 2,500)", "$43.20"],
          ["Total cost", "$355.20"],
          ["Profit", "$44.80"],
        ],
        { footer: ["Selling price", "$400.00"], numeric: [1] },
      ),
      p("Each door earns $44.80 profit — 11.2% of the selling price."),
    ),
    screen(
      "Job, batch and process costing",
      table(
        ["Method", "Used when", "Oakridge example"],
        [
          ["Job costing", "Each order is unique", "A custom staircase for one client"],
          ["Batch costing", "Identical items made in groups", "A batch of 50 standard doors"],
          ["Process costing", "Continuous production through stages", "A timber treatment plant (not Oakridge)"],
        ],
      ),
      note("Oakridge uses batch costing for standard doors and job costing for custom work."),
    ),
    mistakes(
      ["Apportioning on an unfair basis", "Pick the base that drives the cost."],
      ["One blanket rate for the whole workshop", "Use departmental rates."],
      ["Ignoring under-absorption", "Charge it to profit and loss."],
      ["Pricing on prime cost", "Overheads must be covered."],
    ),
    check(
      3,
      q("Charging a whole overhead to one cost centre is:", ["Allocation", "Apportionment", "Absorption", "Depreciation"], 0, "It belongs entirely there."),
      q("Overheads $60,000 and 4,000 budgeted machine hours. Absorption rate?", ["$15 per machine hour", "$4 per hour", "$60 per hour", "$0.07 per hour"], 0, "$60,000 ÷ 4,000."),
      q("Absorbed $50,000; actual overheads $53,000. Result?", ["$3,000 under-absorbed", "$3,000 over-absorbed", "Nil", "$103,000"], 0, "Actual exceeded absorbed."),
      q("Which costing method suits a unique custom staircase?", ["Job costing", "Process costing", "Batch costing", "Standard costing only"], 0, "Each job is costed separately."),
      q("Production cost is prime cost plus:", ["Production overheads", "Profit", "Selling costs", "Tax"], 0, "Then add admin and selling."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Overhead per product",
          ["A cabinet takes 3 machine hours and 4 labour hours. How much overhead does it absorb?"],
          ["3 × $15 + 4 × $24 = $141."],
        ],
        [
          "Exercise 2 — Apportion",
          ["Insurance of $12,000 is apportioned by machine value: Machining $150,000, Assembly $50,000. Share it."],
          ["Machining $9,000; Assembly $3,000."],
        ],
      ),
    ),
    summary(
      ["Allocation, apportionment and reapportionment", "Departmental absorption rates", "Under- and over-absorption", "A full cost sheet", "Job, batch and process costing"],
      "Each Oakridge door costs $355.20 in full — $312 to make and $43.20 to administer and sell.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Marginal Costing and Break-Even",
      ["Full cost is useful for pricing, but decisions often need marginal cost. This module separates variable and fixed costs for Oakridge."],
      ["Calculate contribution and the contribution margin ratio", "Compare marginal and absorption costing profits", "Calculate break-even and margin of safety", "Find the volume needed for a target profit", "Read a break-even chart"],
    ),
    screen(
      "Contribution",
      table(
        ["Per door", "Amount"],
        [
          ["Selling price", "$400"],
          ["Direct materials", "($120)"],
          ["Direct labour", "($90)"],
          ["Variable overhead (3 hours × $10)", "($30)"],
        ],
        { footer: ["Contribution", "$160"], numeric: [1] },
      ),
      p("Contribution margin ratio = $160 ÷ $400 = 40%. Each door contributes $160 towards fixed costs of $288,000 (fixed production overhead $180,000 + administration and selling $108,000)."),
    ),
    screen(
      "Marginal vs. absorption costing profits",
      p("In 2027 Oakridge makes 2,500 doors but sells 2,400, so 100 doors are left in stock."),
      table(
        ["", "Marginal costing", "Absorption costing"],
        [
          ["Closing stock value per door", "$240 (variable cost only)", "$312 (includes $72 fixed overhead)"],
          ["Fixed production overhead", "All $180,000 charged this year", "$7,200 carried forward in the 100 doors"],
          ["Profit", "$96,000", "$103,200"],
        ],
      ),
      note("When stock rises, absorption costing shows higher profit; when stock falls, lower. Over time the totals are the same. Financial statements use absorption costing."),
    ),
    screen(
      "Break-even and margin of safety",
      example([["Fixed costs", "$288,000"], ["Contribution per door", "$160"]], ["Break-even (1,800 doors × $400)", "$720,000"]),
      example([["Budgeted sales", "2,400 doors"], ["Break-even", "−1,800 doors"]], ["Margin of safety (25% of budget)", "600 doors"]),
      p("Profit at budget = margin of safety × contribution = 600 × $160 = $96,000."),
    ),
    screen(
      "Target profit and cost-volume-profit analysis",
      example([["Fixed costs + target profit: $288,000 + $128,000", "$416,000"], ["÷ contribution per door", "$160"]], ["Doors needed", "2,600"]),
      table(
        ["What if…", "Effect"],
        [
          ["Price rises to $420", "Contribution $180; break-even 1,600 doors"],
          ["Timber rises by $10 a door", "Contribution $150; break-even 1,920 doors"],
          ["Fixed costs rise by $32,000", "Break-even 2,000 doors"],
        ],
      ),
    ),
    screen(
      "Break-even charts",
      bullets(
        "Horizontal axis: doors sold. Vertical axis: dollars.",
        "Fixed cost line: flat at $288,000.",
        "Total cost line: starts at $288,000 and rises by $240 per door.",
        "Revenue line: starts at zero and rises by $400 per door.",
        "Break-even: where revenue crosses total cost — 1,800 doors, $720,000.",
        "The gap between the lines to the right is profit; to the left, loss.",
      ),
      tip("Profit-volume chart", "A simpler version plots profit against volume: −$288,000 at zero, crossing zero at 1,800 doors."),
    ),
    mistakes(
      ["Using full cost for short-term decisions", "Use contribution."],
      ["Confusing contribution with profit", "Fixed costs come off afterwards."],
      ["Forgetting stock changes affect absorption profit", "Explain the difference."],
      ["Assuming CVP holds at any volume", "Costs and prices change outside the normal range."],
    ),
    check(
      4,
      q("Contribution per unit is:", ["Selling price − variable cost", "Selling price − total cost", "Fixed cost ÷ units", "Profit ÷ units"], 0, "Before fixed costs."),
      q("Fixed costs $50,000; contribution $25 a unit. Break-even units?", ["2,000", "1,250", "50,000", "25"], 0, "$50,000 ÷ $25."),
      q("When stock levels rise, absorption costing profit is:", ["Higher than marginal costing profit", "Lower", "The same", "Zero"], 0, "Fixed overhead is carried in stock."),
      q("Budget 1,000 units; break-even 800 units. Margin of safety?", ["20%", "80%", "25%", "200%"], 0, "200 ÷ 1,000."),
      q("Units for a target profit = ", ["(Fixed costs + target profit) ÷ contribution per unit", "Target profit ÷ price", "Fixed costs × contribution", "Price − variable cost"], 0, "Cover both."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Price change",
          ["If Oakridge cuts its price to $380, what's the new break-even in doors?"],
          ["Contribution $140; $288,000 ÷ $140 = 2,057.1, so 2,058 doors."],
        ],
        [
          "Exercise 2 — Stock falls",
          ["Next year Oakridge makes 2,400 and sells 2,500 doors. Which costing method shows the higher profit, and by how much?"],
          ["Marginal costing — by 100 × $72 = $7,200, as fixed overhead brought forward in stock is released."],
        ],
      ),
    ),
    summary(
      ["Contribution and the 40% ratio", "Marginal vs. absorption profits", "Break-even of 1,800 doors and a 25% margin of safety", "Target profit and what-if analysis", "Break-even charts"],
      "Contribution is the key to short-term decisions: every door sold above 1,800 adds $160 to Oakridge's profit.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Standard Costing and Variances",
      ["Standards say what a door should cost. Variances show where reality differed. This module analyses Oakridge's October results."],
      ["Set standard costs", "Calculate material price and usage variances", "Calculate labour rate and efficiency variances", "Calculate overhead variances", "Investigate and report variances"],
    ),
    screen(
      "Setting standard costs",
      table(
        ["Standard cost card — one door", "Quantity × price", "Cost"],
        [
          ["Oak timber", "4 m² × $30", "$120"],
          ["Direct labour", "3 hours × $30", "$90"],
          ["Variable overhead", "3 hours × $10", "$30"],
          ["Fixed overhead", "Absorbed", "$72"],
        ],
        { footer: ["Standard production cost", "", "$312"], numeric: [2] },
      ),
      note("Standards should be attainable — achievable with efficient working and normal losses — not ideal or out of date."),
    ),
    screen(
      "Material variances",
      p("In October Oakridge made 200 doors. It bought and used 820 m² of oak at $29 — $23,780. The standard allows 800 m² (200 × 4) at $30 — $24,000."),
      table(
        ["Variance", "Calculation", "Amount"],
        [
          ["Price", "($30 − $29) × 820 m²", "$820 F"],
          ["Usage", "(800 − 820 m²) × $30", "$600 A"],
        ],
        { footer: ["Total material variance", "", "$220 F"], numeric: [2] },
      ),
      p("A new supplier was cheaper — but its boards had more knots, so more were wasted."),
    ),
    screen(
      "Labour variances",
      p("Joiners worked 630 hours at $31 — $19,530. The standard for 200 doors is 600 hours at $30 — $18,000."),
      table(
        ["Variance", "Calculation", "Amount"],
        [
          ["Rate", "($30 − $31) × 630 hours", "$630 A"],
          ["Efficiency", "(600 − 630 hours) × $30", "$900 A"],
        ],
        { footer: ["Total labour variance", "", "$1,530 A"], numeric: [2] },
      ),
      p("A pay rise took effect before the standard was updated, and the knotty timber slowed the joiners down."),
    ),
    screen(
      "Overhead variances",
      table(
        ["Variance", "Calculation", "Amount"],
        [
          ["Variable overhead spending", "630 hours × $10 − actual $6,600", "$300 A"],
          ["Variable overhead efficiency", "(600 − 630 hours) × $10", "$300 A"],
          ["Fixed overhead expenditure", "Budget $15,000 − actual $15,800", "$800 A"],
        ],
      ),
      note("Absorption costing systems also calculate a fixed overhead volume variance, showing the effect of producing more or fewer units than budgeted."),
    ),
    screen(
      "Investigating and reporting variances",
      steps(
        ["Report", "October variances in total: materials $220 F, labour $1,530 A, overheads $1,400 A."],
        ["Prioritise", "Investigate variances that are large, growing, or repeated."],
        ["Look for links", "The cheaper timber saved $820 but caused $600 of waste and slower work — a net loss."],
        ["Assign responsibility", "Purchasing for price; production for usage and efficiency."],
        ["Act", "Return to the original supplier and update the labour rate in the standard."],
      ),
      caution("Variances can be linked. Judging the buyer on the favourable price variance alone would reward a decision that cost the business money."),
    ),
    mistakes(
      ["Out-of-date standards", "Update them when rates change."],
      ["Investigating every small variance", "Focus on significant ones."],
      ["Treating variances separately", "Look for links between them."],
      ["Blame instead of causes", "Find and fix the cause."],
    ),
    check(
      5,
      q("A material price variance compares:", ["Standard and actual price for the actual quantity", "Standard and actual quantity", "Budget and actual sales", "Labour hours"], 0, "(SP − AP) × AQ."),
      q("Standard 500 kg at $4; actual 520 kg used. Usage variance?", ["$80 adverse", "$80 favourable", "$20 adverse", "$2,080 adverse"], 0, "20 kg × $4."),
      q("Standard rate $20; actual 400 hours paid at $21. Rate variance?", ["$400 adverse", "$400 favourable", "$21 adverse", "$8,400 adverse"], 0, "$1 × 400."),
      q("What type of standard is usually best?", ["Attainable", "Ideal", "Out of date", "None"], 0, "Achievable with efficient working."),
      q("Why look for links between variances?", ["One cause can create favourable and adverse variances", "To make reports longer", "Accounting rules require it", "To avoid action"], 0, "e.g. cheap material causing waste."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Material variances",
          ["November: 180 doors made using 700 m² bought at $31. Calculate price and usage variances."],
          ["Price ($30 − $31) × 700 = $700 A. Usage (720 − 700) × $30 = $600 F. Total $100 A."],
        ],
        [
          "Exercise 2 — Labour efficiency",
          ["180 doors took 520 hours. What's the efficiency variance at the $30 standard rate?"],
          ["Standard 540 hours; (540 − 520) × $30 = $600 F."],
        ],
      ),
    ),
    summary(
      ["The standard cost card", "Material price and usage variances", "Labour rate and efficiency variances", "Variable and fixed overhead variances", "Investigating linked variances"],
      "Variances point to where actual results differed from standard — the value lies in finding the causes and their links.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Costing for Decisions",
      ["Oakridge faces real decisions: a hotel order, a component to make or buy, and limited machine time. This module uses relevant costs to decide."],
      ["Identify relevant and sunk costs", "Compare cost-plus and contribution-based pricing", "Make make-or-buy decisions", "Decide whether to accept a special order", "Choose the best product mix with a limiting factor"],
    ),
    screen(
      "Relevant costs and sunk costs",
      terms(
        ["Relevant cost", "A future cash cost that changes because of the decision."],
        ["Sunk cost", "Already spent — can't be recovered, so it's ignored."],
        ["Committed cost", "Must be paid whatever is decided — also ignored."],
        ["Opportunity cost", "Benefit given up by choosing one option — relevant."],
      ),
      p("Oakridge spent $5,000 designing a door for a hotel that hasn't yet ordered. That $5,000 is sunk — it shouldn't affect whether to accept the hotel's offer."),
    ),
    screen(
      "Cost-plus and contribution-based pricing",
      compare(
        ["Cost-plus", "Full cost plus a mark-up.", ["$355.20 × 1.25 = $444", "Simple; covers all costs", "Ignores what customers will pay"]],
        ["Contribution-based", "Price must at least cover variable cost.", ["Floor: $240", "Useful for one-off orders with spare capacity", "Risky if used for all sales"]],
      ),
      tip("Long run vs. short run", "In the long run, prices must cover full cost. In the short run, any price above variable cost adds contribution — if it doesn't displace better sales."),
    ),
    screen(
      "Make-or-buy decisions",
      p("Oakridge makes its own door frames. A supplier offers them at $55 each."),
      table(
        ["Per frame", "Make", "Buy"],
        [
          ["Materials", "$30", ""],
          ["Labour", "$15", ""],
          ["Variable overhead", "$3", ""],
          ["Supplier price", "", "$55"],
        ],
        { footer: ["Relevant cost", "$48", "$55"], numeric: [1, 2] },
      ),
      p("A $20 share of fixed overhead is apportioned to each frame, but it won't stop if frames are bought — so it's not relevant. Making saves $7 a frame."),
      note("Also consider quality, reliability and whether freed capacity could earn more elsewhere."),
    ),
    screen(
      "Accepting a special order",
      p("A hotel offers $300 a door for 200 doors, needing special handles costing $10 each. Oakridge has spare capacity."),
      table(
        ["Per door", "Amount"],
        [
          ["Price", "$300"],
          ["Variable cost", "($240)"],
          ["Special handles", "($10)"],
        ],
        { footer: ["Contribution per door", "$50"], numeric: [1] },
      ),
      p("200 × $50 = $10,000 extra contribution. Fixed costs don't change, so profit rises by $10,000. Accept — if regular customers won't expect the same price."),
    ),
    screen(
      "Product mix with a limiting factor",
      p("Next year machine time is limited to 5,000 hours. Oakridge also makes cabinets."),
      table(
        ["", "Door", "Cabinet"],
        [
          ["Contribution", "$160", "$210"],
          ["Machine hours", "2", "3"],
          ["Contribution per machine hour", "$80", "$70"],
          ["Maximum demand", "2,200", "600"],
        ],
      ),
      steps(
        ["Rank by contribution per hour", "Doors first ($80), then cabinets ($70)."],
        ["Doors", "2,200 × 2 = 4,400 hours."],
        ["Cabinets", "Remaining 600 hours ÷ 3 = 200 cabinets."],
        ["Total contribution", "2,200 × $160 + 200 × $210 = $394,000."],
      ),
    ),
    mistakes(
      ["Including sunk costs", "Ignore money already spent."],
      ["Including apportioned fixed costs that won't change", "Only incremental costs are relevant."],
      ["Ranking by contribution per unit with a constraint", "Rank by contribution per limiting factor."],
      ["Accepting low-price orders without thinking about regular customers", "Consider the wider effects."],
    ),
    check(
      6,
      q("A sunk cost is:", ["Money already spent that can't be recovered", "A future cash cost", "An opportunity cost", "A variable cost"], 0, "Ignore it in decisions."),
      q("Make costs $30 variable; buy costs $35; fixed costs are unaffected. What should you do?", ["Make", "Buy", "Neither", "Both"], 0, "$5 cheaper to make."),
      q("With spare capacity, what's the lowest acceptable price for a special order?", ["Above relevant variable cost", "Full cost", "Full cost plus 25%", "Zero"], 0, "Any contribution helps."),
      q("With a limiting factor, products are ranked by:", ["Contribution per unit of the limiting factor", "Selling price", "Contribution per unit", "Total cost"], 0, "Make best use of the scarce resource."),
      q("What is an opportunity cost?", ["The benefit given up by choosing an option", "A sunk cost", "A fixed cost", "A tax"], 0, "It's relevant."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Special order",
          ["A builder offers $260 a door for 100 doors with no extra costs. Spare capacity exists. What's the effect on profit?"],
          ["($260 − $240) × 100 = $2,000 increase. Accept if it won't undercut regular prices."],
        ],
        [
          "Exercise 2 — Product mix",
          ["If cabinet demand rises to 1,000 and machine hours stay at 5,000, what's the best mix?"],
          ["Doors still rank first: 2,200 doors (4,400 hours), then 200 cabinets (600 hours). The extra cabinet demand can't be met."],
        ],
      ),
    ),
    summary(
      ["Relevant, sunk, committed and opportunity costs", "Cost-plus vs. contribution pricing", "Make-or-buy", "Special orders", "Product mix with a limiting factor"],
      "For decisions, look only at future costs that change — and with a scarce resource, rank by contribution per unit of that resource.",
    ),
  ],
}

export default lessons
