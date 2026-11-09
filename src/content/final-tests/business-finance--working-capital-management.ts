import { fq } from "@/lib/finalTest"

// Final test bank for Working Capital Management — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("What's Kestrel's overdraft limit?", "$500,000", ["$300,000", "$900,000", "$150,000"], "Nearly full when the course starts."),
  fq("What's Kestrel's net working capital?", "$1,050,000", ["$1,950,000", "$1,350,000", "$900,000"], "$1,950,000 − $900,000."),
  fq("What's Kestrel's operating working capital?", "$1,350,000", ["$1,050,000", "$450,000", "$1,950,000"], "Receivables + inventory − payables."),
  fq("How long is Kestrel's operating cycle?", "105 days", ["75 days", "45 days", "30 days"], "60 inventory days + 45 debtor days."),
  fq("How much extra cash would 20% growth need at Kestrel?", "About $270,000", ["About $1,460,000", "About $50,000", "Nothing"], "18.5% of $1,460,000."),
  fq("What's Kestrel's quick ratio?", "1.17", ["2.17", "0.5", "1.5"], "($1,950,000 − $900,000) ÷ $900,000."),

  // Module 2
  fq("Above what credit limit does Amara approve accounts?", "$50,000", ["$5,000", "$500,000", "$20,000"], "Smaller limits by the credit controller."),
  fq("How many days did Kestrel's weekly invoice batching add on average?", "3", ["10", "30", "0"], "Now invoices go on delivery."),
  fq("What share of Kestrel's receivables is overdue?", "40%", ["10%", "60%", "5%"], "$360,000 of $900,000."),
  fq("When is a Kestrel account put on hold?", "At 30 days overdue", ["At 7 days overdue", "At 90 days overdue", "Never"], "Part of the credit policy."),
  fq("What's Kestrel's total bad debt provision?", "$41,000", ["$20,000", "$9,000", "$90,000"], "Across the four aging buckets."),
  fq("Why doesn't Kestrel offer a 2% discount for payment in 10 days?", "Its annualised cost (about 21%) is far above the 9% overdraft rate", ["Customers don't want it", "It's illegal", "It would reduce sales"], "Too expensive."),

  // Module 3
  fq("What terms did Kestrel's two largest cable suppliers agree?", "45 days for a 12-month volume commitment", ["90 days unconditionally", "Cash on delivery", "15 days"], "Negotiated at renewal."),
  fq("How early was Kestrel paying many invoices?", "About 10 days early", ["About 30 days late", "On time", "60 days early"], "Paying on arrival."),
  fq("What's the annualised return on 2/10 net 30?", "About 37%", ["About 2%", "About 9%", "About 21%"], "2 ÷ 98 × 365 ÷ 20."),
  fq("How much was lost to duplicate payments last year?", "$18,000", ["$45,000", "$140,000", "$0"], "Paid from statements and invoices."),
  fq("Which practice is borrowing from suppliers without permission?", "Paying beyond agreed terms", ["Negotiating longer terms", "Taking valuable discounts", "Weekly payment runs"], "It damages relationships."),
  fq("What should be checked independently to prevent payment fraud?", "Changes to supplier bank details", ["Customer names", "Stock counts", "Sales targets"], "A payables control."),

  // Module 4
  fq("What's Kestrel's stock turnover?", "About 6.1 times a year", ["About 2 times", "About 12 times", "60 times"], "$5,475,000 ÷ $900,000."),
  fq("What's the EOQ for Kestrel's cable drums?", "About 632 drums", ["12,000 drums", "300 drums", "100 drums"], "√(2 × 12,000 × 50 ÷ 3)."),
  fq("What's Kestrel's reorder level for cable drums?", "300 drums", ["200 drums", "632 drums", "40 drums"], "200 lead-time usage + 100 safety stock."),
  fq("How often does Kestrel count A items?", "Monthly", ["Twice a year", "Never", "Every five years"], "C items twice a year."),
  fq("Why did $45,000 of Kestrel's lighting stop selling?", "Old models were replaced by LED ranges", ["Prices rose", "A supplier closed", "Theft"], "Obsolescence."),
  fq("Where does Kestrel set higher safety stock?", "A items contractors need urgently", ["C items", "Obsolete lines", "Nowhere"], "Protect important items."),

  // Module 5
  fq("What's Kestrel's cash conversion cycle before improvements?", "75 days", ["48 days", "105 days", "30 days"], "60 + 45 − 30."),
  fq("What's Kestrel's target cash conversion cycle?", "48 days", ["75 days", "30 days", "60 days"], "After all three levers."),
  fq("How much cash do Kestrel's three levers release?", "$440,000", ["$140,000", "$300,000", "$39,600"], "$140,000 + $150,000 + $150,000."),
  fq("How much interest does Kestrel save at 9%?", "About $39,600 a year", ["About $4,400", "About $440,000", "Nothing"], "9% × $440,000."),
  fq("In invoice discounting, who usually collects from customers?", "The business itself", ["The lender", "The customer's bank", "A court"], "Usually confidential."),
  fq("What does Kestrel use to pay its Asian LED suppliers on shipment?", "Import loans", ["Factoring", "Owner drawings", "Payroll funds"], "Trade finance."),

  // Module 6
  fq("What's Kestrel's target for % of receivables overdue?", "20%", ["40%", "0%", "50%"], "Owned by the credit controller."),
  fq("Who owns Kestrel's cash conversion cycle target?", "Amara, the finance director", ["The receptionist", "The bank", "The auditors"], "Overall accountability."),
  fq("How far could Kestrel's overdraft fall within 9 months if targets are hit?", "From $300,000 to under $100,000", ["To $500,000", "No change", "To $440,000"], "Shown in the cash forecast."),
  fq("How are Kestrel's sales reps now paid commission?", "On cash collected", ["On invoices raised", "On stock bought", "Not at all"], "Aligns sales with cash."),
  fq("How long is Kestrel's monthly working capital meeting?", "30 minutes", ["A full day", "5 hours", "There isn't one"], "A short, regular review."),
  fq("Buying in bulk for small discounts usually leads to:", "Excess and obsolete stock", ["Lower debtor days", "More supplier credit", "Better cash flow"], "A common cash trap."),
]
