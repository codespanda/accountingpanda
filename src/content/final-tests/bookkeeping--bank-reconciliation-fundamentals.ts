import { fq } from "@/lib/finalTest"

// Final test bank for Bank Reconciliation Fundamentals — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("Both Harbor Coffee's books and bank started April at what balance?", "$18,400", ["$16,342", "$18,002", "$17,242"], "March had been reconciled."),
  fq("Which item appeared on Harbor Coffee's statement but not in its books?", "The Shield Insurance direct debit", ["Cheque 2104", "The April 30 deposit", "Cheque 2105"], "Automatic payments are easy to miss."),
  fq("Which item appeared in Harbor Coffee's books but not on its statement?", "Cheque 2104 to Milk Supply Co", ["The monthly service fee", "Interest earned", "The returned cheque"], "It hadn't cleared yet."),
  fq("How can bank reconciliation reveal fraud?", "Unauthorised payments show up as items you can't match", ["It changes the bank's interest rate", "It deletes suspicious entries", "It can't reveal fraud"], "Every bank line must be explained."),
  fq("Why reconcile small and often?", "A month's transactions take minutes; a year's can take days and the trail goes cold", ["Banks charge for annual reconciliations", "It's required daily by law", "It avoids paying tax"], "Errors are easier to trace while fresh."),
  fq("What was the difference between Harbor Coffee's book and bank balances before reconciling?", "$1,660", ["$900", "$17,242", "$450"], "$18,002 − $16,342."),

  // Module 2
  fq("Which three things should match between a bank line and a book entry?", "Amount, direction and reference, with dates close together", ["Only the date", "Only the bank's name", "Only the description"], "Amount alone can mislead."),
  fq("Which customer's cheque was in the April 10 grouped deposit?", "Kim Lee's (gift vouchers)", ["Milk Supply Co's", "City Water's", "Shield Insurance's"], "Along with Northside Office and Bay Events."),
  fq("Why keep the deposit slip for grouped deposits?", "It shows which cheques make up the total if one bounces", ["Banks require it for interest", "It replaces the bank statement", "It records sales tax"], "Kim Lee's cheque later bounced."),
  fq("Harbor Coffee's card processor charged what fee rate?", "2.5%", ["1%", "3%", "5%"], "$80 on $3,200."),
  fq("If $3,200 of card sales were recorded gross to Cash, what difference would appear?", "$80", ["$3,200", "$3,120", "$0"], "The fee was deducted before payout."),
  fq("What happens to items left unticked after matching?", "They become the list of reconciling items", ["They're deleted", "They're ignored", "They're moved to equity"], "Each must be explained."),

  // Module 3
  fq("Which reconciling items adjust the bank side?", "Deposits in transit, outstanding cheques and bank errors", ["Bank fees and interest", "Direct debits", "Returned cheques"], "The books are right for these."),
  fq("How much was Harbor Coffee's deposit in transit?", "$1,750", ["$1,300", "$2,400", "$450"], "Cash banked on April 30."),
  fq("Why was cheque 2210 identified as a bank error?", "Harbor Coffee's cheques run from 2101 to 2105", ["It was for a large amount", "It was dated on a weekend", "It was a deposit"], "It belonged to another customer."),
  fq("What did “refer to drawer” on the statement mean?", "A customer's cheque was returned unpaid", ["The bank charged interest", "A deposit was delayed", "A supplier was paid twice"], "Kim Lee's $510 cheque bounced."),
  fq("$185 recorded as $158 leaves a difference that divides by 9. What does that suggest?", "Transposed digits", ["A missing deposit", "A bank error", "A duplicate payment"], "27 ÷ 9 = 3."),
  fq("Which items require a journal entry in the books?", "Book-side items such as fees, interest and direct debits", ["Outstanding cheques", "Deposits in transit", "Bank errors"], "Only book-side items are recorded."),

  // Module 4
  fq("What are the four parts of the book side of a reconciliation?", "Balance per books, additions, deductions and errors, then the adjusted balance", ["Only the bank balance", "Only outstanding cheques", "Sales, purchases, tax and profit"], "Mirror the bank side's layout."),
  fq("By how much did the bank error increase Harbor Coffee's adjusted bank balance?", "$450", ["$1,750", "$1,300", "$27"], "It was added back."),
  fq("Which entry records the cheque 2103 correction?", "Debit Utilities $27, credit Cash $27", ["Debit Cash $27, credit Utilities $27", "Debit Utilities $185, credit Cash $185", "No entry needed"], "The books understated the payment."),
  fq("After posting the adjustments, what did Harbor Coffee's Cash account show?", "$17,242", ["$18,002", "$16,342", "$18,400"], "Agreeing with the adjusted bank balance."),
  fq("What should Harbor Coffee keep when reporting the bank error?", "The date, the person spoken to and any reference number", ["Nothing", "The bank's annual report", "The customer list"], "Evidence helps if it isn't fixed."),
  fq("Who signs a completed reconciliation?", "The preparer and a reviewer", ["The bank", "The customer", "Nobody"], "Independent review is a key control."),

  // Module 5
  fq("Harbor Coffee's card statement showed $2,860 and its books $2,640. What made up the difference?", "A $95 annual fee and a $125 software charge", ["A $220 bank error", "A $220 refund", "Interest of $220"], "Both unrecorded."),
  fq("How should a personal purchase on the business card be recorded?", "As owner's drawings or an amount owed by the employee", ["As a business expense", "As revenue", "It should be ignored"], "Personal costs aren't business expenses."),
  fq("Why was Harbor Coffee's loan $500 too high in the books?", "A repayment's principal portion was recorded as interest", ["The lender charged extra fees", "A deposit was missed", "Interest was not charged"], "The loan was never reduced."),
  fq("Harbor Coffee's clearing account balance of $180 represented:", "A payout due from the processor", ["Fees owed", "Refunds owed", "A bank error"], "Funds still held by the processor."),
  fq("How often should a loan balance be reconciled, at minimum?", "Quarterly, and at year-end", ["Once every five years", "Only when the loan ends", "Never"], "Compare with the lender's statement."),
  fq("Which items reduce a payment processor clearing account?", "Fees, refunds and payouts", ["Sales collected", "Owner investments", "Loan receipts"], "Sales go in; the rest comes out."),

  // Module 6
  fq("What do bank feeds do?", "Import transactions directly from the bank into the software", ["Reconcile the account automatically", "Pay suppliers", "File tax returns"], "You still need to match and reconcile."),
  fq("What does QuickBooks Online ask for when starting a reconciliation?", "The statement ending date and ending balance", ["The customer list", "The owner's tax number", "The chart of accounts"], "Then you tick cleared transactions."),
  fq("How does Xero reconciliation mainly work?", "Line by line, matching or creating transactions for each statement line", ["By uploading a PDF", "By emailing the bank", "Only at year-end"], "Then check the reconciliation report."),
  fq("A $640 payment appears twice — once manual, once from the feed. What's the fix?", "Delete or void the duplicate, keeping the one matched to the bank line", ["Keep both", "Delete both", "Add a suspense entry"], "Then re-run the reconciliation."),
  fq("Why lock closed periods?", "So reconciled transactions can't be changed accidentally", ["To stop bank feeds", "To speed up invoicing", "To reduce bank fees"], "Changes break the next opening balance."),
  fq("What's the first check when a reconciliation won't balance?", "The opening balance equals last month's reconciled closing balance", ["The bank's interest rate", "The number of customers", "The tax rate"], "Start from a known good point."),
]
