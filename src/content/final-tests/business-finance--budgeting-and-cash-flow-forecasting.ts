import { fq } from "@/lib/finalTest"

// Final test bank for Budgeting and Cash Flow Forecasting — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("What share of Fernhill's sales falls in March to May?", "About 40%", ["About 10%", "About 75%", "About 25%"], "Its peak season."),
  fq("By how much did Fernhill's cash change in Q1 2026 despite a $40,000 profit?", "Fell by $30,000", ["Rose by $40,000", "Rose by $30,000", "No change"], "Receivables and stock rose."),
  fq("Which tool stays fixed so performance can be measured against it?", "The budget", ["The forecast", "The cash flow forecast", "The bank statement"], "The forecast moves."),
  fq("Which approach starts with targets set by owners or senior managers?", "Top-down", ["Bottom-up", "Zero-based only", "Rolling"], "Departments fit plans to them."),
  fq("What revenue target did Jo set for 2027?", "$1.8 million", ["$1.6 million", "$2.4 million", "$900,000"], "With $90,000 operating profit."),
  fq("When should a calendar-year budget be approved?", "Before the year starts — e.g. in December", ["In March", "After year end", "Whenever convenient"], "Otherwise it's already behind."),

  // Module 2
  fq("What's Fernhill's budgeted retail revenue?", "$1,200,000", ["$600,000", "$1,800,000", "$1,000,000"], "30,000 × $40."),
  fq("What's Fernhill's budgeted trade revenue?", "$600,000", ["$1,200,000", "$7,500", "$80,000"], "80 accounts × $7,500."),
  fq("What's Fernhill's budgeted payroll including on-costs?", "$504,000", ["$450,000", "$54,000", "$540,000"], "$450,000 + 12%."),
  fq("Which Fernhill overhead is variable?", "Marketing at 3% of revenue", ["Rent", "Other overheads", "Insurance"], "It moves with sales."),
  fq("Why does a change in sales mix change Fernhill's margin?", "Plants earn more than tools", ["Prices are fixed", "Tax rates change", "Rent varies"], "Different categories have different margins."),
  fq("What's Fernhill's budgeted profit after depreciation?", "$84,000", ["$90,000", "$810,000", "$6,000"], "$90,000 − $6,000."),

  // Module 3
  fq("How quickly does Fernhill collect trade sales?", "The month after sale", ["On the day", "After 90 days", "Never"], "30-day terms."),
  fq("How long do Fernhill's trade customers actually take to pay on average?", "38 days", ["30 days", "10 days", "60 days"], "Forecast actual behaviour."),
  fq("What's Fernhill's lowest forecast balance with the greenhouse paid in March?", "($95,000) in April", ["($80,000) in March", "($5,000) in May", "$60,000"], "Before any funding."),
  fq("What minimum cash balance does Fernhill want?", "$30,000", ["$0", "$95,000", "$70,000"], "A buffer."),
  fq("How much funding does Fernhill need if the greenhouse is delayed to June?", "$65,000", ["$125,000", "$35,000", "$95,000"], "To keep $30,000 in April."),
  fq("What size seasonal overdraft does Fernhill arrange?", "$70,000", ["$30,000", "$125,000", "$200,000"], "Agreed with the bank in January."),

  // Module 4
  fq("What's Fernhill's cash conversion cycle?", "70 days", ["40 days", "130 days", "30 days"], "90 + 10 − 30."),
  fq("What would 60-day supplier terms do to Fernhill's cycle?", "Cut it to 40 days", ["Raise it to 100 days", "No change", "Cut it to 10 days"], "Payable days rise by 30."),
  fq("How does Fernhill plan to hold less spring stock?", "Stagger plant deliveries through spring", ["Order everything in February", "Stop selling plants", "Pay suppliers early"], "Closer to need."),
  fq("Which funding suits businesses with large trade receivables?", "Invoice finance", ["A mortgage", "A credit card", "Owner drawings"], "Advances against invoices."),
  fq("A 20% increase in trade sales would raise trade receivables by about:", "20%", ["0%", "5%", "50%"], "Growth uses cash."),
  fq("Which receivables action is in Fernhill's plan?", "Reminders at 7 days overdue", ["Removing credit checks", "Extending terms to 90 days", "Refusing card payments"], "Collect faster."),

  // Module 5
  fq("How many retail transactions did Fernhill have in April 2027?", "4,600", ["5,000", "4,000", "6,000"], "Against a budget of 5,000."),
  fq("What was Fernhill's April retail volume variance?", "$16,000 adverse", ["$9,200 favourable", "$6,800 adverse", "$16,000 favourable"], "400 fewer × $40."),
  fq("What was Fernhill's April spend-per-customer variance?", "$9,200 favourable", ["$16,000 adverse", "$6,800 adverse", "$2,000 favourable"], "$2 × 4,600."),
  fq("Why were April wages over budget?", "Easter overtime when two casual staff started late", ["A pay cut", "Fewer staff", "Lower sales"], "$3,500 adverse."),
  fq("What's the flexed marketing budget for April sales of $193,200?", "$5,796", ["$6,000", "$5,800", "$193,200"], "3% of actual sales."),
  fq("What threshold does Fernhill use to comment on variances?", "Over $2,000 or 5%", ["Any variance", "Over $50,000", "None"], "Focus on what matters."),

  // Module 6
  fq("What's Fernhill's contribution margin ratio?", "42%", ["45%", "58%", "55%"], "100% − 55% − 3%."),
  fq("What are Fernhill's budgeted fixed costs?", "$672,000", ["$504,000", "$756,000", "$216,000"], "Payroll, rent, utilities, other, depreciation."),
  fq("What's Fernhill's break-even revenue?", "$1,600,000", ["$1,800,000", "$1,620,000", "$672,000"], "$672,000 ÷ 0.42."),
  fq("What's Fernhill's profit in the worst case (revenue −10%)?", "$8,400", ["$84,000", "$75,600", "Loss of $8,400"], "$1,620,000 × 42% − $672,000."),
  fq("What's Fernhill's margin of safety?", "11.1%", ["42%", "4.7%", "25%"], "$200,000 ÷ $1,800,000."),
  fq("Which assumption change cut Fernhill's profit to $48,000?", "Gross margin 43% instead of 45%", ["Payroll +5%", "Revenue −10%", "Rent +$1,000"], "Margin matters a lot."),
]
