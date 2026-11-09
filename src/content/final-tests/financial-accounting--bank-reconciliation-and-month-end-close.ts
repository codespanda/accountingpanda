import { fq } from "@/lib/finalTest"

// Final test bank for Bank Reconciliation and Month-End Close — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("In which currency does Meridian Outdoor Group report?", "US dollars", ["Australian dollars", "Euros", "Each entity's own currency"], "The parent is in the US."),
  fq("How many working days did Meridian's close take before improvements?", "10", ["6", "4", "15"], "The goal was six."),
  fq("On which working day are Meridian's eliminations and consolidation done?", "WD+4", ["WD+1", "WD+2", "WD+6"], "After the subsidiary pack at WD+3."),
  fq("What is Meridian's close materiality rule?", "$1,000 or 5% of the balance, whichever is lower", ["Any difference over $1", "$10,000 always", "10% of revenue"], "Differences above it are investigated."),
  fq("Which close metric shows how manual the close still is?", "Number of manual journals posted", ["Days to close", "Reconciliations on time", "Revenue growth"], "Meridian posted 85 a month."),
  fq("A $600 difference on a $10,000 account under Meridian's rule:", "Must be investigated", ["Can be ignored", "Must be written off", "Goes to equity"], "5% of $10,000 is $500."),

  // Module 2
  fq("How many bank accounts does Meridian reconcile monthly?", "Eight, across both entities", ["Two", "Only the active ones", "One per currency"], "Dormant accounts included."),
  fq("What does a bank account register list?", "Each account's entity, bank, purpose, signatories and reconciliation owner", ["Customer balances", "Supplier invoices", "Staff salaries"], "It ensures nothing is missed."),
  fq("What date window does a typical matching rule allow?", "About ±3 days", ["±3 months", "Exactly the same day only", "Any date"], "Banks post a little later."),
  fq("What did Meridian's gateway charge in fees on $120,000 of sales?", "$3,480", ["$2,100", "$1,220", "$400"], "2.9% of $120,000."),
  fq("What should be done before revaluing a foreign-currency bank account?", "Reconcile it in its own currency", ["Delete old items", "Translate at the average rate", "Close the account"], "Then revalue to USD."),
  fq("Who works Meridian's items aged 61–90 days?", "They're escalated to the controller", ["Nobody", "The bank", "Customers"], "Escalation by age."),

  // Module 3
  fq("Why might a new payment gateway change an account's risk rating?", "New processes and high volumes increase the risk", ["Gateways are illegal", "It reduces all risk", "It has no effect"], "Review ratings yearly."),
  fq("Which is the strongest evidence for a balance?", "Evidence from outside the ledger, such as a bank or lender statement", ["A spreadsheet typed from the ledger", "A verbal confirmation from a colleague", "Last year's balance"], "Independent evidence is best."),
  fq("What was the difference between Meridian's AP control and aging?", "$1,500", ["$412,300", "$410,800", "$0"], "A supplier credit posted by journal."),
  fq("Accrued liabilities: opening $18,000, new $11,000, settled $13,500. Ledger $15,000. What's the difference?", "$500", ["$0", "$1,500", "$2,500"], "Schedule $15,500 vs. ledger $15,000."),
  fq("What is the fixed asset control account reconciled to?", "The fixed asset register", ["The AR aging", "Bank statements", "Payroll reports"], "Cost and accumulated depreciation."),
  fq("Who reviews Meridian's high-risk reconciliations?", "The controller", ["The preparer", "An intern", "The bank"], "Under its risk-based policy."),

  // Module 4
  fq("What monthly charge does Meridian's parent make to its subsidiary?", "A management fee", ["Rent", "Dividends", "Payroll"], "Recorded on both sides."),
  fq("When does Meridian agree recurring intercompany charges?", "WD−1", ["WD+6", "At year end", "Never"], "Before close starts."),
  fq("The subsidiary's A$30,000 payable translates at 0.66 to:", "$19,800", ["$20,000", "$30,000", "$45,455"], "A$30,000 × 0.66."),
  fq("Which rate is used for the subsidiary's share capital?", "The historical rate", ["The closing rate", "The average rate", "The budget rate"], "A$200,000 × 0.70 = $140,000."),
  fq("What did the subsidiary's A$1,200,000 of revenue translate to at an average 0.67?", "$804,000", ["$792,000", "$840,000", "$1,200,000"], "Income uses transaction or average rates."),
  fq("Goods costing $18,000 are sold intercompany for $24,000; half remain unsold. What's eliminated?", "$3,000 of unrealised profit", ["$6,000", "$12,000", "$0"], "50% of $6,000."),

  // Module 5
  fq("Who approves a $100,000 journal at Meridian?", "The controller", ["The senior accountant", "The CFO", "The preparer"], "$25,000–$250,000."),
  fq("Who approves a $300,000 journal at Meridian?", "The CFO", ["The controller", "The senior accountant", "Anyone"], "Over $250,000."),
  fq("Which journals deserve extra review?", "Those posted late, at weekends, by unusual users or to unusual accounts", ["Monthly depreciation", "Recurring rent", "System-generated invoices"], "Unusual patterns signal risk."),
  fq("Why didn't freight of +$4,000 (+8%) need a flux explanation?", "It was under both thresholds", ["Freight is never reviewed", "It was over $5,000", "Freight is a balance sheet item"], "$4,000 is under $5,000 and 8% is under 10%."),
  fq("What change in freight as a % of sales did Meridian's analytical review flag?", "+0.5 points (6.0% to 6.5%)", ["+5 points", "No change", "−0.5 points"], "A relationship worth asking about."),
  fq("How does Meridian prevent intercompany mismatches being found late?", "Agreeing charges at WD−1", ["Ignoring them", "Booking them only at year end", "Writing them off"], "Fix the cause, not the symptom."),

  // Module 6
  fq("Which bottleneck cost Meridian the most time?", "The subsidiary pack arriving late", ["Invoice filing", "Printing reports", "Email delays"], "Two days on the critical path."),
  fq("What happened to Meridian's manual journals after improvements?", "They fell from 85 to 41", ["They doubled", "They stayed at 85", "They fell to zero"], "Routine ones became recurring templates."),
  fq("Which software handles intercompany matching, translation and eliminations?", "Consolidation software", ["Payroll software", "A word processor", "A bank feed"], "Alongside close and reconciliation tools."),
  fq("Why might a faster close with more post-close adjustments be a problem?", "Speed was gained at the expense of quality", ["Faster is always better", "Adjustments don't matter", "It means fewer reviews are needed"], "Measure both."),
  fq("By June, what share of Meridian's reconciliations were on time?", "98%", ["70%", "50%", "100%"], "Up from 70% in January."),
  fq("“Audit-ready is a habit” means:", "Documenting every month so year end is just the twelfth month", ["Only preparing at year end", "Hiring auditors monthly", "Avoiding audits"], "Monthly evidence makes year end easy."),
]
