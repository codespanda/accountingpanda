import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Bank Reconciliation Fundamentals — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "What a bank reconciliation proves",
      p("A bank reconciliation compares the cash balance in your books with the balance on the bank statement at the same date, and explains every difference."),
      p("When it's done, you can be confident that the cash figure in your reports is real and complete."),
      bullets(
        "Every bank transaction has been recorded in the books.",
        "Nothing has been recorded twice or for the wrong amount.",
        "Differences are only timing items you can name and explain.",
      ),
    ),
    screen(
      "Catching errors, fraud and missing items",
      terms(
        ["Errors", "Wrong amounts, duplicates, or transactions posted to the wrong bank account."],
        ["Missing transactions", "Bank fees, interest, direct debits and customer transfers that never reached the books."],
        ["Fraud", "Unauthorised payments, altered cheques or fake suppliers show up as items you can't match."],
      ),
      h("How often to reconcile"),
      p("At least monthly, as soon as the statement is available. Busy accounts are often reconciled weekly or daily, especially with bank feeds."),
      tip("Small and often", "A month with 40 transactions takes minutes. A year with 500 unreconciled transactions can take days."),
    ),
    screen(
      "Reading a bank statement",
      table(
        ["Date", "Description", "Withdrawals", "Deposits", "Balance"],
        [
          ["Mar 1", "Opening balance", "", "", "$7,200"],
          ["Mar 4", "Deposit", "", "$1,850", "$9,050"],
          ["Mar 8", "Cheque 1042", "$620", "", "$8,430"],
          ["Mar 15", "Direct debit — insurance", "$145", "", "$8,285"],
          ["Mar 31", "Monthly service fee", "$15", "", "$8,270"],
        ],
        { numeric: [2, 3, 4] },
      ),
      note("The bank describes things from its own side: a deposit is a “credit” to your account at the bank, but a debit to Cash in your books."),
    ),
    check(
      1,
      q("What does a bank reconciliation compare?", ["Sales and expenses", "The book cash balance and the bank statement balance", "Two bank accounts", "Budget and actual"], 1, "It compares the books with the bank at the same date."),
      q("Which problem can reconciliation reveal?", ["Unrecorded bank fees", "Low sales", "High rent", "Late tax returns"], 0, "Fees and other bank-only items show up as differences."),
      q("How often should a bank account be reconciled, at minimum?", ["Yearly", "Monthly", "Every five years", "Only when audited"], 1, "Monthly at least; busy accounts more often."),
      q("On a bank statement, what is a deposit to your account from the bank's point of view?", ["A debit", "A credit", "A fee", "A cheque"], 1, "Your money is a liability for the bank, so deposits are credits on its statement."),
      q("After a reconciliation, what differences should remain?", ["Unexplained ones", "Only timing items you can name", "None ever", "Any amount under $100"], 1, "Every difference should be identified and explained."),
    ),
  ],
  1: [
    screen(
      "Comparing the statement with the ledger",
      steps(
        ["Get both records for the same period", "The bank statement and the cash account ledger."],
        ["Start with the opening balance", "Confirm last month's reconciliation was completed and balances carried forward."],
        ["Match deposits", "Each deposit on the statement against receipts in the books."],
        ["Match withdrawals", "Each payment, cheque, fee and direct debit."],
        ["Mark matched items", "Tick both records."],
      ),
    ),
    screen(
      "Ticking off matched items",
      table(
        ["Books", "Bank", "Status"],
        [
          ["Mar 3 deposit $1,850", "Mar 4 deposit $1,850", "✓ Matched (bank posted a day later)"],
          ["Mar 6 cheque 1042 $620", "Mar 8 cheque 1042 $620", "✓ Matched"],
          ["Mar 29 cheque 1047 $980", "—", "Not on statement yet"],
          ["—", "Mar 31 service fee $15", "Not in books yet"],
        ],
      ),
      p("Unticked items on either side are your reconciling items."),
    ),
    screen(
      "Grouped deposits and card settlements",
      compare(
        [
          "Grouped deposits",
          "Several customer cheques banked together appear on the statement as one deposit.",
          ["Match the total to the deposit slip", "Record receipts in an undeposited funds account first"],
        ],
        [
          "Card settlements",
          "A card processor pays out a day's sales as one amount, after deducting its fees.",
          ["Match gross sales less fees", "Record the fee as an expense"],
        ],
      ),
      h("Example: $2,000 of card sales, 2.5% fee"),
      journal([["Cash at bank", "$1,950", ""], ["Merchant fees", "$50", ""], ["Card clearing account", "", "$2,000"]], "$2,000"),
    ),
    check(
      2,
      q("What should you confirm before matching this month's items?", ["Last month's reconciliation was completed", "Tax is paid", "The budget is approved", "Nothing"], 0, "You need a reconciled starting point."),
      q("A deposit is in the books on Mar 3 and on the statement on Mar 4. What is it?", ["A reconciling item", "A matched item", "An error", "Fraud"], 1, "Same item and amount, just a one-day bank posting delay."),
      q("Three customer cheques are banked together. How do they appear on the statement?", ["As three deposits", "As one deposit", "Not at all", "As a fee"], 1, "Banked together, they form one deposit."),
      q("A processor pays $1,950 for $2,000 of card sales. What's the $50?", ["Lost sales", "Merchant fees", "Owner's drawings", "Sales tax"], 1, "The processor deducts its fee before paying out."),
      q("What are unticked items after matching?", ["Errors to delete", "Reconciling items to explain", "Matched items", "Closing balances"], 1, "They are the differences to explain."),
    ),
  ],
  2: [
    screen(
      "Timing items on the bank side",
      terms(
        ["Deposit in transit", "Money recorded in the books but not yet shown by the bank, e.g. cash banked on the last day of the month. Add to the bank balance."],
        ["Outstanding cheques and payments", "Payments recorded in the books that haven't cleared the bank yet. Subtract from the bank balance."],
      ),
      note("These items need no entry in the books — the books are already right. They'll clear on next month's statement."),
    ),
    screen(
      "Items on the book side",
      terms(
        ["Bank fees and charges", "Shown on the statement but not yet in the books. Subtract from the book balance and record them."],
        ["Interest earned", "Add to the book balance and record it."],
        ["Direct debits and automatic payments", "Insurance, loan payments or subscriptions taken automatically. Record them in the books."],
        ["Direct credits", "Customer transfers you haven't recorded yet. Record and apply them to the customer's invoice."],
        ["Dishonoured (bounced) cheques", "A customer cheque that was returned unpaid. Reverse the receipt: the customer owes the money again."],
      ),
    ),
    screen(
      "Bank errors vs. book errors",
      compare(
        [
          "Error in the books",
          "You recorded a $560 payment as $650. Correct the books with a journal entry.",
          ["Adjust the book balance", "Record a correction"],
        ],
        [
          "Error by the bank",
          "The bank charged another customer's cheque to your account. Contact the bank to fix it.",
          ["Adjust the bank balance", "No entry in your books"],
        ],
      ),
      tip("The divisible-by-9 clue", "If a difference is divisible by 9 ($650 − $560 = $90), look for swapped digits."),
    ),
    check(
      3,
      q("How is a deposit in transit treated?", ["Added to the bank balance", "Subtracted from the bank balance", "Subtracted from the book balance", "Ignored"], 0, "The bank hasn't recorded it yet, so add it to the bank side."),
      q("How is an outstanding cheque treated?", ["Added to the book balance", "Subtracted from the bank balance", "Recorded again in the books", "Deleted"], 1, "It hasn't cleared, so the bank balance is overstated until it does."),
      q("A monthly bank fee appears on the statement only. What should you do?", ["Ignore it", "Record it in the books", "Add it to the bank balance", "Ask the bank to remove it"], 1, "Book-side items must be recorded."),
      q("A customer's cheque bounces. What happens in the books?", ["Nothing", "Reverse the receipt — the customer owes the money again", "Record extra sales", "Write it off immediately"], 1, "The payment didn't happen, so the receivable comes back."),
      q("The bank charges you for someone else's cheque. How do you fix it?", ["Record an expense", "Contact the bank; adjust the bank side", "Change your opening balance", "Reverse a sale"], 1, "It's the bank's error, not yours."),
    ),
  ],
  3: [
    screen(
      "The reconciliation statement layout",
      p("At March 31, the bank statement shows $8,270 and the cash account shows $7,825."),
      table(
        ["Bank side", "Amount", "Book side", "Amount"],
        [
          ["Balance per bank statement", "$8,270", "Balance per books", "$7,825"],
          ["Add: deposit in transit", "$600", "Add: interest earned", "$10"],
          ["Less: outstanding cheque 1047", "($980)", "Less: service fee", "($15)"],
          ["", "", "Less: insurance direct debit", "($145)"],
          ["Adjusted bank balance", "$7,890", "Adjusted book balance", "$7,675"],
        ],
      ),
      caution("The adjusted balances don't agree yet — a $215 difference remains. Something hasn't been found."),
    ),
    screen(
      "Finding the difference",
      p("Look back at the books: cheque 1045 for rent was recorded as $1,450 instead of $1,235 — a $215 overstatement of payments."),
      table(
        ["Book side", "Amount"],
        [
          ["Adjusted book balance so far", "$7,675"],
          ["Add: correction of cheque 1045", "$215"],
          ["Corrected adjusted book balance", "$7,890"],
        ],
      ),
      p("Now both sides show $7,890: the true cash balance at March 31."),
    ),
    screen(
      "Recording the adjusting entries",
      p("Only book-side items need entries:"),
      table(
        ["Item", "Debit", "Credit", "Amount"],
        [
          ["Service fee", "Bank fees", "Cash", "$15"],
          ["Insurance direct debit", "Insurance expense", "Cash", "$145"],
          ["Interest earned", "Cash", "Interest income", "$10"],
          ["Correct cheque 1045", "Cash", "Rent expense", "$215"],
        ],
        { numeric: [3] },
      ),
      p("After posting, the cash account shows $7,825 − $15 − $145 + $10 + $215 = $7,890, agreeing with the adjusted bank balance."),
    ),
    check(
      4,
      q("Which balance is adjusted for outstanding cheques?", ["The book balance", "The bank balance", "Both", "Neither"], 1, "Outstanding cheques are timing items on the bank side."),
      q("Which items need journal entries in the books?", ["Bank-side items", "Book-side items", "All items", "None"], 1, "Only items missing from or wrong in the books need entries."),
      q("Rent of $1,235 was recorded as $1,450. What's the effect on the book balance?", ["Understated by $215", "Overstated by $215", "No effect", "Overstated by $1,235"], 0, "Too much was deducted, so the book balance is $215 too low."),
      q("The adjusted bank and book balances differ. What does it mean?", ["The reconciliation is complete", "An item hasn't been found yet", "The bank is always wrong", "Write off the difference"], 1, "Keep looking until both sides agree."),
      q("What does the final adjusted balance represent?", ["The bank's profit", "The true cash balance at that date", "Next month's budget", "The opening balance"], 1, "It's the correct cash figure for the reports."),
    ),
  ],
  4: [
    screen(
      "Reconciling credit card statements",
      p("A business credit card is a liability account. Reconcile it like a bank account, against the card statement."),
      steps(
        ["Match each charge", "To an expense recorded in the books, with its receipt."],
        ["Match payments", "Payments to the card should match transfers from the bank account."],
        ["Record missing items", "Interest, annual fees and charges without receipts (chase the receipts)."],
        ["Agree the closing balance", "The card liability in the books should equal the statement balance, after timing items."],
      ),
      caution("Personal purchases on a business card are not business expenses. Record them as owner's drawings or amounts due from the employee."),
    ),
    screen(
      "Reconciling loan balances",
      p("Compare the loan balance in the books with the lender's statement at least quarterly, and at year-end."),
      table(
        ["Item", "Amount"],
        [
          ["Loan per books", "$18,400"],
          ["Loan per lender statement", "$18,250"],
          ["Difference", "$150"],
        ],
      ),
      p("Cause: an extra $150 principal repayment was recorded as Interest expense, so the loan in the books was never reduced. Correct it:"),
      journal([["Loan payable", "$150", ""], ["Interest expense", "", "$150"]], "$150"),
      p("The book loan balance falls to $18,250, matching the lender, and interest expense is no longer overstated."),
    ),
    screen(
      "Payment processors and clearing accounts",
      p("Money from Stripe, PayPal, Square and similar services passes through a clearing account: sales go in gross, fees and payouts come out."),
      table(
        ["Entry", "Clearing account"],
        [
          ["Sales collected", "+$5,000"],
          ["Processor fees", "−$145"],
          ["Payout to bank", "−$4,855"],
          ["Balance", "$0"],
        ],
      ),
      tip("A clearing account should clear", "If it doesn't return to zero (or to money still held by the processor), something is missing — usually fees, refunds or a payout."),
    ),
    check(
      5,
      q("What type of account is a business credit card?", ["Asset", "Liability", "Income", "Equity"], 1, "It's money owed to the card issuer."),
      q("A personal purchase is found on the business card. How is it recorded?", ["Business expense", "Owner's drawings or amount due from employee", "Revenue", "Ignored"], 1, "Personal spending isn't a business expense."),
      q("What should a loan balance be reconciled to?", ["The lender's statement", "The bank's fee schedule", "The sales ledger", "The budget"], 0, "The lender's statement shows the true balance owed."),
      q("$5,000 of sales, $145 fees, $4,855 paid out. What's the clearing balance?", ["$0", "$145", "$4,855", "$5,000"], 0, "$5,000 − $145 − $4,855 = $0."),
      q("A clearing account doesn't return to zero. What's usually missing?", ["Fees, refunds or a payout", "Owner's capital", "Depreciation", "Payroll"], 0, "These are the usual unrecorded items."),
    ),
  ],
  5: [
    screen(
      "Bank feeds and matching rules",
      p("Bank feeds import transactions straight from the bank into the accounting software. You then match each line to an existing transaction or create a new one."),
      bullets(
        "Matching links a bank line to an invoice, bill or entry already recorded.",
        "Rules automatically code recurring items, such as the monthly bank fee.",
        "Review rules regularly — a wrong rule codes every future transaction wrongly.",
      ),
      caution("Matching bank feed lines isn't the same as a full reconciliation. Still compare the closing balance with the actual bank statement each month."),
    ),
    screen(
      "Reconciling in QuickBooks and Xero",
      compare(
        [
          "QuickBooks Online",
          "Use the Reconcile tool: choose the account, enter the statement ending date and balance, then tick cleared transactions until the difference is zero.",
          ["Statement-based", "Reconciliation report saved"],
        ],
        [
          "Xero",
          "Reconcile each imported statement line by matching or creating a transaction. Then check the Bank Reconciliation report against the statement balance.",
          ["Line-by-line", "Report confirms the balance"],
        ],
      ),
      note("Menu names change between versions — use each product's help centre for current steps."),
    ),
    screen(
      "Troubleshooting and reconciled periods",
      h("When it won't balance"),
      bullets(
        "Check the opening balance matches last month's reconciled closing balance.",
        "Look for an item equal to the difference, or half of it (entered on the wrong side).",
        "Look for differences divisible by 9 (transposed digits).",
        "Check for duplicates — especially from bank feeds plus manual entry.",
        "Check dates: a transaction in the wrong month moves the difference.",
      ),
      h("Fixing a previously reconciled period"),
      p("If someone edits or deletes a reconciled transaction, the opening balance changes. Find the change using the software's audit log, and if the period's books are closed, correct it with a new entry in the current period rather than changing history."),
    ),
    check(
      6,
      q("Does matching all bank feed lines replace checking the statement balance?", ["Yes", "No — still compare with the actual statement", "Only in Xero", "Only in QuickBooks"], 1, "Feeds can miss or duplicate lines, so check the balance."),
      q("What do bank rules do?", ["Automatically code recurring transactions", "Pay bills", "Set interest rates", "File tax"], 0, "Rules apply coding to matching transactions."),
      q("The difference equals twice a transaction amount. What's likely?", ["It was entered on the wrong side", "A transposition", "A missing deposit", "A bank error"], 0, "Entering on the wrong side doubles the effect."),
      q("The opening balance doesn't match last month's closing balance. What might have happened?", ["A reconciled transaction was edited or deleted", "Interest was earned", "A new month started", "Nothing"], 0, "Changing reconciled items shifts the opening balance."),
      q("How should you fix an error in a closed period?", ["Edit the old transaction", "Record a correcting entry in the current period", "Delete the period", "Ignore it"], 1, "This keeps closed reports unchanged."),
    ),
  ],
}

export default lessons
