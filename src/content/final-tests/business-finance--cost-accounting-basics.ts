import { fq } from "@/lib/finalTest"

// Final test bank for Cost Accounting Basics — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("How many doors does Oakridge plan to make and sell in 2027?", "2,500", ["1,800", "2,400", "5,000"], "At $400 each."),
  fq("Which is a service cost centre at Oakridge?", "Stores", ["Machining", "Assembly", "Finishing"], "It supports production."),
  fq("How is a supervisor's salary classified?", "Indirect labour", ["Direct labour", "Direct material", "Prime cost"], "It supports all production."),
  fq("What's the variable electricity cost per machine hour at Oakridge?", "$2.00", ["$2,000", "$6.80", "$4.80"], "From the high-low method."),
  fq("What happens to fixed cost per unit as output rises?", "It falls", ["It rises", "It stays the same", "It becomes variable"], "The same total spread over more units."),
  fq("Which rules govern cost accounting?", "Whatever is most useful to managers", ["Accounting standards only", "Tax law only", "Company law only"], "It's for internal use."),

  // Module 2
  fq("Under FIFO, what's Oakridge's cost of issuing 250 boards?", "$7,950", ["$8,000", "$8,250", "$7,500"], "100 × $30 + 150 × $33."),
  fq("What's Oakridge's weighted average cost per board?", "$32", ["$31.50", "$33", "$30"], "$9,600 ÷ 300."),
  fq("What's Oakridge's reorder level for oak boards?", "200 boards", ["80 boards", "440 boards", "300 boards"], "50 × 4."),
  fq("What's Oakridge's maximum stock level for boards?", "440 boards", ["200 boards", "500 boards", "80 boards"], "200 + 300 − 60."),
  fq("When is overtime premium charged to a specific job?", "When the customer's urgent order caused it", ["Always", "Never", "Only on weekends"], "Otherwise it's overhead."),
  fq("What was Oakridge's labour efficiency in October?", "90%", ["111%", "100%", "50%"], "450 standard ÷ 500 actual hours."),

  // Module 3
  fq("How much of the $48,000 rent is apportioned to Machining?", "$19,200", ["$14,400", "$12,000", "$48,000"], "400 of 1,000 m²."),
  fq("What's Oakridge's assembly and finishing absorption rate?", "$24 per labour hour", ["$15 per machine hour", "$30 per hour", "$10 per hour"], "$180,000 ÷ 7,500."),
  fq("How much overhead does each door absorb?", "$102", ["$72", "$30", "$210"], "2 × $15 + 3 × $24."),
  fq("By how much was Machining over-absorbed in 2027?", "$1,500", ["$3,000", "$4,500", "$0"], "$79,500 absorbed vs. $78,000 actual."),
  fq("What's Oakridge's full cost per door?", "$355.20", ["$312.00", "$400.00", "$210.00"], "Production cost plus admin and selling."),
  fq("Which costing method does Oakridge use for standard doors?", "Batch costing", ["Process costing", "Job costing", "None"], "Job costing for custom work."),

  // Module 4
  fq("What's Oakridge's contribution per door?", "$160", ["$44.80", "$88", "$240"], "$400 − $240 variable cost."),
  fq("What are Oakridge's total fixed costs?", "$288,000", ["$180,000", "$108,000", "$255,000"], "Production $180,000 + admin and selling $108,000."),
  fq("What's Oakridge's break-even in doors?", "1,800", ["2,400", "1,600", "2,000"], "$288,000 ÷ $160."),
  fq("What's Oakridge's absorption costing profit when making 2,500 and selling 2,400 doors?", "$103,200", ["$96,000", "$88,800", "$110,000"], "$7,200 more than marginal costing."),
  fq("How many doors give a $128,000 profit?", "2,600", ["2,400", "1,800", "3,000"], "($288,000 + $128,000) ÷ $160."),
  fq("If timber rises by $10 a door, what's the new break-even?", "1,920 doors", ["1,800 doors", "1,600 doors", "2,000 doors"], "$288,000 ÷ $150."),

  // Module 5
  fq("What price did Oakridge pay for oak in October?", "$29 per m²", ["$30 per m²", "$31 per m²", "$33 per m²"], "A new, cheaper supplier."),
  fq("What was October's material usage variance?", "$600 adverse", ["$820 favourable", "$220 favourable", "$600 favourable"], "20 m² extra × $30."),
  fq("What was October's labour efficiency variance?", "$900 adverse", ["$630 adverse", "$1,530 adverse", "$900 favourable"], "30 extra hours × $30."),
  fq("Why was there a labour rate variance?", "A pay rise took effect before the standard was updated", ["Joiners worked fewer hours", "Timber was cheaper", "Overheads fell"], "$31 vs. $30."),
  fq("What was October's fixed overhead expenditure variance?", "$800 adverse", ["$300 adverse", "$1,400 adverse", "$800 favourable"], "$15,800 vs. $15,000."),
  fq("What action did Oakridge take on the timber?", "Return to the original supplier", ["Buy more knotty timber", "Ignore it", "Raise prices"], "The saving was outweighed."),

  // Module 6
  fq("How should the $5,000 hotel design cost be treated?", "Ignored — it's sunk", ["Added to the order's cost", "Divided by 200 doors", "Charged to the hotel"], "Already spent."),
  fq("What's Oakridge's cost-plus price at a 25% mark-up?", "$444", ["$400", "$355.20", "$500"], "$355.20 × 1.25."),
  fq("How much does Oakridge save per frame by making rather than buying?", "$7", ["$27", "$20", "$55"], "$48 vs. $55."),
  fq("How much extra profit does the hotel order add?", "$10,000", ["$20,000", "$12,000", "$60,000"], "200 × $50."),
  fq("What's a cabinet's contribution per machine hour?", "$70", ["$80", "$210", "$105"], "$210 ÷ 3."),
  fq("What's Oakridge's total contribution from the best mix under the machine-hour limit?", "$394,000", ["$352,000", "$478,000", "$400,000"], "2,200 doors and 200 cabinets."),
]
