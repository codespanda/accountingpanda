import { fq } from "@/lib/finalTest"

// Final test bank for Accounts Payable Management — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("At Ridgeway Supplies, who releases payments?", "The finance manager", ["The AP clerk who enters bills", "The operations manager", "The supplier"], "Payment release is separate from bill entry."),
  fq("Where does Accounts payable appear on the balance sheet?", "Current liabilities", ["Current assets", "Equity", "Fixed assets"], "It's owed within the year."),
  fq("In the procure-to-pay cycle, what comes immediately after the purchase order?", "Receiving the goods", ["Paying the supplier", "Approving the bill", "Reconciling the bank"], "Order, receive, bill, approve, pay."),
  fq("A $650 electricity bill is entered. What is debited?", "Utilities", ["Accounts payable", "Cash", "Inventory"], "The expense is recorded when billed."),
  fq("Which costs are usually kept out of accounts payable?", "Loans, payroll and taxes owed", ["Supplier bills for stock", "Utility bills", "Contractor fees"], "They have their own liability accounts."),
  fq("In a one-bookkeeper business, who can provide segregation of duties?", "The owner, by approving suppliers and releasing payments", ["The supplier", "The customer", "Nobody — it isn't possible"], "Owner oversight compensates."),

  // Module 2
  fq("In Australia, which tax identifier is commonly collected from suppliers?", "An ABN", ["A W-9", "A GSTIN", "A PAN"], "Requirements vary by country."),
  fq("A $3,000 bill dated June 1 has 2/10 net 30 terms. What's paid if settled by June 11?", "$2,940", ["$3,000", "$2,700", "$3,060"], "2% discount."),
  fq("What's the first step when a supplier's bank details change?", "Get the details in writing on the supplier's letterhead or a signed form", ["Update the record immediately", "Reply to the email to confirm", "Pay the next bill early"], "Then call back and get a second approval."),
  fq("An email comes from “northline-fastener.co” instead of the usual domain. What should you suspect?", "Business email compromise", ["A routine update", "A bank error", "A new product launch"], "Small domain changes are a classic sign."),
  fq("How long can a supplier go unused before it should be deactivated?", "About 12–18 months", ["One week", "One day", "Never deactivate"], "Keep the vendor list clean."),
  fq("Who verified Northline Fasteners' bank details by phone?", "The finance manager", ["The AP clerk", "Northline itself", "The purchasing manager"], "Verification is independent."),

  // Module 3
  fq("What does a goods received note confirm?", "What actually arrived", ["What was ordered", "What the supplier is charging", "When payment is due"], "It's one of the three documents in matching."),
  fq("Why do many businesses allow small tolerances in three-way matching?", "So tiny differences don't need investigation", ["To hide fraud", "To pay suppliers twice", "Because matching is optional"], "E.g. up to $10 or 1%."),
  fq("At Ridgeway, who approves a $25,000 bill?", "The managing director", ["The operations manager", "The finance manager", "The AP clerk"], "Bills over $20,000."),
  fq("A drill bill shows $84 each but the PO says $80 for 50 drills. What's the difference?", "$200", ["$4", "$84", "$4,000"], "$4 × 50."),
  fq("Timber $2,500 plus $180 freight in, under a perpetual system. What's debited to Inventory?", "$2,680", ["$2,500", "$180", "$2,770"], "Freight in is part of inventory cost."),
  fq("What should happen to unused supplier credits?", "Apply them to future bills or request a refund", ["Ignore them", "Record them as revenue", "Delete them"], "They're money the business is owed."),

  // Module 4
  fq("On which day does Ridgeway run its weekly payment run?", "Thursday", ["Monday", "Friday", "Sunday"], "Approved bills are paid every Thursday."),
  fq("A $12,500 bill on 1/10 net 30 is paid within 10 days. What is the discount?", "$125", ["$250", "$12,375", "$1,250"], "1% of $12,500."),
  fq("Why use extra verification for large wire transfers?", "Wires are fast but hard to recall", ["Wires are free", "Wires take months", "Banks don't record wires"], "Once sent, they're hard to reverse."),
  fq("Which payment method depends on having verified supplier bank details?", "ACH / bank transfer", ["Cheque", "Card", "Cash"], "Electronic payments go wherever the bank details say."),
  fq("Which bill was NOT paid in Ridgeway's example payment run?", "Hartley Timber's $8,200, not yet due", ["Northline Fasteners'", "City Power's", "Ace Freight's"], "Pay on the due date unless there's a discount."),
  fq("What is sent to suppliers after a payment run?", "Remittance advices showing which bills were paid", ["Purchase orders", "Credit notes", "Bank statements"], "It helps suppliers apply the payment."),

  // Module 5
  fq("Which software setting helps prevent duplicate bills?", "A unique combination of supplier and bill number", ["A longer password", "A darker theme", "A shorter bill number"], "Most software warns about duplicates."),
  fq("“Quick Tools Co” was set up last month with only a PO box. What's the concern?", "It may be a fake vendor", ["It's a new product", "It's a routine supplier", "Nothing — PO boxes are fine"], "Verify the supplier exists."),
  fq("Which review spots changes to supplier bank details?", "A monthly report of vendor master changes", ["The trial balance", "The income statement", "The sales report"], "Review it independently."),
  fq("Several red flags appear on one supplier. What should happen?", "Stop payments and escalate for investigation", ["Pay faster", "Ignore them", "Delete the supplier"], "Several flags together demand action."),
  fq("Who should be able to edit posted bills?", "Only a restricted group of authorised users", ["Everyone", "Suppliers", "Customers"], "Restrict edits to protect the trail."),
  fq("Which payments deserve a closer look?", "Weekend payments and round amounts to new vendors", ["Monthly rent to the landlord", "Payroll on payday", "Utility bills"], "Unusual timing and amounts are red flags."),

  // Module 6
  fq("Why might a supplier's statement show more than your ledger?", "A payment in transit or a bill missing from your books", ["Your bank is closed", "Tax rates changed", "The supplier is a customer"], "Investigate each difference."),
  fq("What should the AP aging total equal?", "The Accounts payable balance in the general ledger", ["Total purchases for the year", "Cash", "Total sales"], "Subledger and control account must agree."),
  fq("$2,300 of stock arrived May 30 but was billed June 4. What's the May 31 entry?", "Debit Inventory, credit GRNI", ["No entry", "Debit Cash, credit Inventory", "Debit GRNI, credit Inventory"], "Goods received not invoiced."),
  fq("What happens to a month-end accrual next month?", "It's reversed when the real bill is entered", ["It's paid twice", "It's deleted without a trace", "It becomes revenue"], "Reversal avoids double counting."),
  fq("In Ridgeway's forecast, how short was cash in the week of June 9?", "$2,100", ["$2,490", "$4,850", "$9,300"], "Bills $9,300 − receipts $7,200."),
  fq("How could Ridgeway cover a short week?", "Move a non-urgent bill or chase a customer payment", ["Stop all payroll", "Close the bank account", "Ignore the forecast"], "Use payables timing to manage cash."),
]
