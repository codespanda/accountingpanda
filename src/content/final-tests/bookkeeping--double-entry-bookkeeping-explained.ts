import { fq } from "@/lib/finalTest"

// Final test bank for Double-Entry Bookkeeping Explained — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("Which system shows what a business owes, not just its cash?", "Double-entry bookkeeping", ["A single-entry cash book", "A bank statement alone", "A folder of receipts"], "Double-entry records liabilities as well as cash."),
  fq("Maple Tutoring receives a $10,000 bank loan. Which two things increase?", "Cash and a liability", ["Cash and revenue", "Equipment and equity", "Expenses and cash"], "The loan must be repaid."),
  fq("Maple buys equipment for $4,000 cash. How do total assets change?", "They don't change", ["They rise by $4,000", "They fall by $4,000", "They rise by $8,000"], "One asset is swapped for another."),
  fq("By when were Italian merchants using double-entry?", "The 14th and 15th centuries", ["The 19th century", "The 1950s", "The 2000s"], "Pacioli described it in 1494."),
  fq("In double-entry, what is a trial balance used for?", "Checking that total debits equal total credits", ["Paying tax", "Banking cash", "Listing customers"], "It's the built-in arithmetic check."),
  fq("How does Maple Tutoring treat teaching supplies?", "As an expense, because they're used up within the month", ["As equipment lasting several years", "As a liability", "As owner's equity"], "Short-lived items are usually expensed."),

  // Module 2
  fq("The words debit and credit come from which language?", "Latin", ["Greek", "French", "German"], "Debere (to owe) and credere (to entrust)."),
  fq("What is the normal balance of Owner's drawings?", "Debit", ["Credit", "Zero", "It has no normal balance"], "Drawings increase with debits."),
  fq("Paying off part of a liability is recorded on the liability's:", "Debit side", ["Credit side", "Top line", "Income statement"], "Liabilities decrease with debits."),
  fq("Why does income increase with a credit?", "Income increases owner's equity, and equity increases with credits", ["Income is an asset", "Banks call deposits credits", "It's an arbitrary rule"], "The rules follow the accounting equation."),
  fq("Maple receives $2,400 of tutoring fees in cash. Which account is credited?", "Tutoring revenue", ["Cash", "Owner's capital", "Bank loan"], "Revenue increases with a credit."),
  fq("When your bank pays your rent from your account, how does the bank record it in its own books?", "As a debit — its liability to you decreases", ["As a credit to its income", "It makes no entry", "As revenue"], "Your balance is the bank's liability."),

  // Module 3
  fq("Owner's capital has one credit entry of $15,000. What is its balance?", "$15,000 credit", ["$15,000 debit", "$0", "$30,000 credit"], "A one-sided account's balance equals its total."),
  fq("When balancing off an account, where is “balance c/d” written?", "On the smaller side, so both totals match", ["On the larger side", "Above the account name", "In a separate account"], "It's the balancing figure."),
  fq("After balancing off Maple's Cash at March 8, what does each side total?", "$27,400", ["$23,400", "$4,000", "$31,400"], "Debits total $27,400; the credit side plus c/d also totals $27,400."),
  fq("What does a cross-reference beside a T-account posting show?", "The other account in the entry", ["The tax rate", "The bank's name", "The owner's name"], "It helps trace the other side."),
  fq("After Paper Plus is paid, what is Maple's Accounts payable balance?", "$0", ["$600 credit", "$600 debit", "$1,200 credit"], "The $600 credit is cleared by a $600 debit."),
  fq("A liability account shows a debit balance. What's most likely?", "An error or an overpayment", ["Normal activity", "Extra profit", "Revenue"], "Liabilities normally have credit balances."),

  // Module 4
  fq("What is step 3 of the five-step method for analysing transactions?", "Classify each account by type", ["Read the source document", "Check debits equal credits", "Post to the ledger"], "What happened → which accounts → what type → up or down → debit or credit."),
  fq("A $1,200 whiteboard is bought with $400 cash and $800 owed. What is credited?", "Cash $400 and Accounts payable $800", ["Equipment $1,200", "Cash $1,200", "Revenue $1,200"], "Two credits, one debit."),
  fq("How much interest expense did Maple record in March?", "$50", ["$500", "$550", "$10,000"], "Only the interest part of the repayment is an expense."),
  fq("Which transaction affects Maple's profit?", "Rent paid", ["Owner investment", "Loan received", "Payment to Paper Plus"], "Only income and expenses affect profit."),
  fq("Maple pays Paper Plus $600. What is debited?", "Accounts payable", ["Supplies expense", "Cash", "Tutoring revenue"], "The supplier is paid off."),
  fq("What was Maple's total tutoring revenue for March?", "$5,900", ["$2,400", "$3,500", "$2,000"], "$2,400 cash fees + $3,500 invoiced."),

  // Module 5
  fq("In what order are accounts usually listed in a trial balance?", "Assets, liabilities, equity, income, expenses", ["Alphabetically", "From largest to smallest", "In random order"], "Chart-of-accounts order is easiest to review."),
  fq("How does the bank loan appear on Maple's trial balance?", "$9,500 credit", ["$10,000 credit", "$9,500 debit", "$500 credit"], "$10,000 less the $500 repaid."),
  fq("Correct accounts and amounts, but debit and credit swapped, is an error of:", "Complete reversal", ["Omission", "Principle", "Transposition"], "The entry is back to front."),
  fq("Wages of $1,500 recorded as $1,050 on both sides is an error of:", "Original entry", ["Commission", "Complete reversal", "Compensation"], "The wrong amount was used throughout."),
  fq("School A's payment is credited to School B. Which error is this?", "Commission", ["Principle", "Omission", "Original entry"], "Right type of account, wrong account."),
  fq("What is the trial balance the starting point for?", "Adjustments and the financial statements", ["Payroll", "Customer invoicing", "Banking cash"], "It's the base for period-end work."),

  // Module 6
  fq("$1,250 written as $125 is a:", "Slide error", ["Transposition", "Error of omission", "Complete reversal"], "The decimal point moved."),
  fq("What's the first step in a systematic search for a trial balance difference?", "Re-add both trial balance columns", ["Delete suspicious entries", "Call the bank", "Open a suspense account"], "Start with the simplest check."),
  fq("By how much were the debits short in Maple's draft trial balance?", "$450", ["$50", "$1,500", "$1,050"], "Wages were debited $1,050 instead of $1,500."),
  fq("Which entry cleared Maple's suspense account?", "Debit Wages expense $450, credit Suspense $450", ["Debit Suspense $450, credit Wages expense $450", "Debit Cash $450, credit Wages expense $450", "No entry — just delete it"], "It completes the wages debit."),
  fq("How are compensating errors corrected?", "Each error is corrected separately", ["They're ignored because the TB balances", "Both entries are deleted", "With one suspense entry"], "Two wrongs still need two fixes."),
  fq("What should happen before correcting an error in a closed period?", "Get approval for the correction", ["Delete the original entry", "Nothing — just change it", "Reopen the bank account"], "Closed periods affect reports already issued."),
]
