import { fq } from "@/lib/finalTest"

// Final test bank for Xero for Bookkeepers — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("Which tax rate suits Saltbush's Design income account?", "GST on Income", ["GST Free Expenses", "GST on Expenses", "No tax rate"], "Sales carry 10% GST."),
  fq("Which tax rate suits Saltbush's Bank fees account?", "GST Free Expenses", ["GST on Income", "GST on Expenses", "BAS Excluded Income"], "Bank fees generally don't include GST."),
  fq("What type is Saltbush's Freelancer costs account?", "Direct costs", ["Revenue", "Fixed asset", "Equity"], "Costs directly tied to client work."),
  fq("Which role suits Saltbush's studio manager?", "Invoice-only", ["Adviser", "Full access", "Payroll admin"], "Create and send invoices only."),
  fq("Where do you look if a Xero menu has moved?", "Xero Central or the search bar", ["The bank's website", "The ATO", "The invoice template"], "Find features by name."),
  fq("What kind of items does a design studio usually set up?", "Untracked items", ["Tracked inventory items", "Fixed assets", "Bank rules"], "No stock to count."),

  // Module 2
  fq("An unknown $120 card payment needs Mia's input. Which option?", "Discuss", ["Match", "Create", "Transfer"], "Leave a note on the statement line."),
  fq("Which Xero bank rule types exist?", "Spend, receive and transfer rules", ["Sales and purchase rules only", "Daily and weekly rules", "Tax and payroll rules"], "Rules cover each direction of money."),
  fq("$2,000 moved to the savings account is reconciled as:", "A transfer", ["Design income", "An expense", "A credit note"], "Between Saltbush's own accounts."),
  fq("What's the main risk when cash coding a batch?", "Coding the whole batch with the wrong GST", ["Deleting the bank account", "Creating invoices", "Paying suppliers twice"], "Check the tax column."),
  fq("Which statement line was matched in Saltbush's first week?", "$3,300 from Harbour Bistro", ["$45 account fee", "$2,000 to savings", "$54.99 Adobe"], "Matched to INV-0001."),
  fq("From what date does Saltbush import its bank feed?", "July 1", ["January 1", "The day the bank account opened", "Any date"], "The start of its books in Xero."),

  // Module 3
  fq("What GST is included in a $1,650 GST-inclusive price?", "$150", ["$165", "$1,500", "$110"], "$1,650 ÷ 11."),
  fq("Which repeating invoice option suits fixed amounts?", "Approve and send", ["Save as draft", "Create manually", "Quote only"], "Xero creates, approves and emails it."),
  fq("How much is the GST on a $2,200 GST-inclusive invoice?", "$200", ["$220", "$2,000", "$110"], "$2,200 ÷ 11."),
  fq("Harbour Bistro's $330 credit note includes how much GST?", "$30", ["$33", "$300", "$3"], "$330 ÷ 11."),
  fq("What can an accepted quote become?", "An invoice", ["A bill", "A bank rule", "A lock date"], "Convert it once accepted."),
  fq("What happens to an invoice after a part payment?", "The balance stays open on the invoice", ["The invoice is voided", "A new invoice is created", "The payment is ignored"], "Only the paid part is cleared."),

  // Module 4
  fq("How much GST is in Inkwell Print's $440 bill?", "$40", ["$44", "$400", "$4"], "$440 ÷ 11."),
  fq("What did Saltbush's batch payment total?", "$2,530", ["$1,650", "$2,090", "$3,300"], "$440 + $1,210 + $880."),
  fq("How much was the designer's parking claim before GST?", "$60", ["$66", "$6", "$54"], "$66 includes $6 GST."),
  fq("Which tool did Xero's expenses feature replace?", "The older expense claims tool", ["Bank rules", "Repeating invoices", "Lock dates"], "Check Xero Central for current details."),
  fq("What should you do with a bill converted from a PO before approving it?", "Compare it with the PO", ["Delete the PO", "Pay it immediately", "Void it"], "Check what was ordered and charged."),
  fq("Where can a batch payment be uploaded for payment?", "To online banking, via an exported bank file", ["To the ATO portal", "To a customer's email", "To the chart of accounts"], "Where the bank supports it."),

  // Module 5
  fq("Which options does Saltbush's Service line tracking category have?", "Branding, Web and Print", ["Sydney and Melbourne", "Cash and Card", "July and August"], "Its three service lines."),
  fq("June's $1,800 of unbilled freelancer work should reverse on:", "July 1", ["June 30", "December 31", "Never"], "So it isn't counted twice."),
  fq("Saltbush's computers cost $7,200 with a 3-year life. What's monthly depreciation?", "$200", ["$600", "$2,400", "$240"], "$7,200 ÷ 36."),
  fq("Which lock date is usually set after year end is finalised?", "The lock for all users", ["The lock for all users except advisers", "No lock", "A lock for customers"], "It stops advisers too."),
  fq("What does find and recode do?", "Moves many miscoded transactions to the right account at once", ["Deletes old transactions", "Locks the period", "Creates invoices"], "Useful for clean-ups."),
  fq("Why take care recoding into a locked period?", "It changes reports already issued", ["It deletes the bank feed", "It doubles GST", "It removes users"], "Agree it with the accountant first."),

  // Module 6
  fq("Which report helps Mia decide whom to chase?", "Aged Receivables", ["Aged Payables", "Balance Sheet", "Fixed asset register"], "It shows who owes Saltbush."),
  fq("What does Saltbush lodge to report GST to the ATO?", "An activity statement (BAS)", ["A 1099", "A GSTR-3B", "A W-2"], "Xero's activity statement report helps prepare it."),
  fq("What happens to the BAS if tax rates are coded wrongly?", "The GST figures are wrong", ["Nothing", "The ATO fixes them", "Only the P&L changes"], "The BAS draws on transaction tax codes."),
  fq("A $1,100 Adobe payment is coded GST Free, but the supplier charged GST. What's missing?", "A $100 GST credit", ["$1,100 of income", "A $110 expense", "Nothing"], "$1,100 ÷ 11 = $100."),
  fq("How do you see the transactions behind a report figure in Xero?", "Click into the figure", ["Export to PDF", "Run payroll", "Reconcile the bank"], "Reports link to transactions."),
  fq("Who should be asked about current BAS due dates?", "The ATO's guidance or a registered tax or BAS agent", ["The bank", "A customer", "The software reseller"], "Rules are set by the ATO."),
]
