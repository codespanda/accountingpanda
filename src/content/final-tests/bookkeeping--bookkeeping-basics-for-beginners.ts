import { fq } from "@/lib/finalTest"

// Final test bank for Bookkeeping Basics for Beginners — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1 — Introduction to bookkeeping
  fq("Which task is bookkeeping rather than accounting?", "Recording daily sales and purchases", ["Analysing profit trends for the owner", "Preparing a tax strategy", "Advising on investments"], "Bookkeeping records; accounting analyses and interprets."),
  fq("In the bookkeeping cycle, what comes right after the source document is created?", "The transaction is recorded", ["Reports are prepared", "The account is reconciled", "The transaction is reviewed"], "Transaction → source document → record → classify → reconcile → review → report."),
  fq("Which skill helps a bookkeeper keep documents easy to find?", "Organization", ["Negotiation", "Marketing", "Public speaking"], "Documents and transactions must be easy to locate."),
  fq("Entering $15,000 instead of $1,500 is an example of:", "Recording the wrong amount", ["Using the wrong account", "A duplicate entry", "Poor documentation"], "The amount itself is wrong."),
  fq("Recording an equipment purchase as office expense is an example of:", "Using the wrong account", ["Recording the wrong amount", "Forgetting a transaction", "A duplicate entry"], "The amount is right but the account isn't."),
  fq("Which modern tool imports transactions straight from bank accounts?", "Bank feeds", ["OCR", "Invoice templates", "Paper ledgers"], "Bank feeds bring transactions into the software."),

  // Module 2 — The accounting equation
  fq("The owner invests $200,000 cash. How does the equation change?", "Assets and owner's equity both rise by $200,000", ["Assets and liabilities both rise", "Assets fall and equity rises", "Nothing changes"], "Cash (asset) and capital (equity) increase."),
  fq("The business buys a $50,000 laptop for cash. What happens to total assets?", "No change — one asset replaces another", ["They rise by $50,000", "They fall by $50,000", "They double"], "Cash falls and equipment rises by the same amount."),
  fq("Office supplies of $10,000 are bought on credit. What changes?", "Assets and liabilities both rise", ["Assets and equity both rise", "Liabilities fall", "Only equity changes"], "Supplies increase and so does the amount owed."),
  fq("Which is a current liability?", "Wages payable", ["A bank loan repayable over five years", "Owner's capital", "Equipment"], "It's due within a year."),
  fq("Assets are $320,000 and owner's equity is $250,000. What are liabilities?", "$70,000", ["$570,000", "$250,000", "$320,000"], "Liabilities = Assets − Equity."),
  fq("The owner withdraws $10,000 for personal use. What changes?", "Assets and owner's equity both fall", ["Assets and liabilities both fall", "Expenses rise", "Nothing changes"], "Drawings reduce cash and equity."),

  // Module 3 — Accounts, debits and credits
  fq("In a common numbering system, which range holds liabilities?", "2000–2999", ["1000–1999", "4000–4999", "5000–6999"], "Assets 1000s, liabilities 2000s, equity 3000s, revenue 4000s, expenses 5000s–6000s."),
  fq("Which account would be numbered in the 4000s?", "Service Revenue", ["Rent Expense", "Equipment", "Accounts Payable"], "The 4000s hold revenue."),
  fq("Cash shows a credit balance. What does that most likely mean?", "There may be an error, such as a payment recorded twice", ["The business is very profitable", "It's the normal balance for cash", "Revenue has increased"], "Cash normally has a debit balance."),
  fq("Accounts Payable decreases with a:", "Debit", ["Credit", "Neither a debit nor a credit", "Note in the margin"], "Liabilities decrease with debits."),
  fq("Why leave gaps between account numbers?", "So new accounts can be added in the right place later", ["Banks require it", "It reduces tax", "It hides accounts"], "Gaps allow the chart to grow."),
  fq("What were ABC Design Services' total debits for September?", "$212,000", ["$100,000", "$125,000", "$62,000"], "Each entry has an equal debit and credit."),

  // Module 4 — Recording transactions
  fq("Which document is the source for a bank's monthly fee?", "The bank statement", ["A sales invoice", "A supplier bill", "A sales receipt"], "Only the bank knows its fees."),
  fq("A customer pays $4,000 on the spot for a logo package. Which document records it?", "A sales receipt", ["A sales invoice", "A supplier bill", "A credit note"], "Receipts record immediate payment."),
  fq("How is a credit sale recorded?", "Debit Accounts Receivable, credit Revenue", ["Debit Cash, credit Revenue", "Debit Revenue, credit Accounts Receivable", "Debit Accounts Payable, credit Revenue"], "The customer owes the business."),
  fq("In what order are transactions recorded in the general journal?", "Date order", ["Account order", "Alphabetical order", "Size order"], "The journal is the book of original entry, in date order."),
  fq("Why record a reference on each ledger line?", "So it can be traced back to the journal and source document", ["To calculate tax", "Because banks require it", "To decorate the ledger"], "References create the audit trail."),
  fq("What was ABC Design Services' cash balance at the end of October?", "$97,800", ["$103,800", "$63,000", "$100,300"], "After all October receipts and payments."),

  // Module 5 — Cash, receivables, payables and reconciliation
  fq("What type of account is Accounts Payable?", "Current liability", ["Current asset", "Revenue", "Owner's equity"], "Money owed to suppliers."),
  fq("Which report lists what each customer owes, grouped by how long it's been outstanding?", "The AR aging report", ["The trial balance", "The cash flow statement", "The chart of accounts"], "Older balances need follow-up first."),
  fq("Interest earned appears only on the bank statement. What do you do?", "Add it to the book balance and record it", ["Subtract it from the bank balance", "Ignore it", "Add it to the bank balance"], "It's a book-side item."),
  fq("What was ABC Design Services' adjusted cash balance at November 30?", "$96,290", ["$96,300", "$106,290", "$111,300"], "Both sides of the reconciliation agreed at $96,290."),
  fq("Why pay suppliers from the original bill rather than a reminder?", "To avoid paying the same bill twice", ["Reminders are cheaper", "It's faster", "Banks require it"], "Paying from reminders risks duplicates."),
  fq("Which reconciling item needs no journal entry?", "An outstanding cheque", ["A bank fee", "Interest earned", "A customer payment not yet recorded"], "Outstanding cheques are already in the books."),

  // Module 6 — Trial balance, adjustments and financial statements
  fq("Which error still lets the trial balance balance?", "Posting to the wrong account", ["Posting only one side of an entry", "An addition mistake in a column", "Putting a balance in the wrong column"], "Wrong-account postings keep debits equal to credits."),
  fq("How does accumulated depreciation affect the balance sheet?", "It reduces the equipment's carrying value", ["It increases cash", "It increases revenue", "It reduces liabilities"], "$40,000 − $2,500 = $37,500."),
  fq("What was ABC Design Services' net income for September to November?", "$17,865", ["$67,020", "$49,155", "$18,790"], "Revenue $67,020 − expenses $49,155."),
  fq("ABC's $1,375 of prepaid software is:", "An asset", ["An expense", "A liability", "Revenue"], "It covers future months."),
  fq("Where does the computer purchase appear in the cash flow statement?", "Investing activities", ["Operating activities", "Financing activities", "It doesn't appear"], "Buying equipment is investing."),
  fq("Where do owner's drawings appear in the financial statements?", "As a reduction of owner's equity", ["As an expense on the income statement", "As a liability", "As revenue"], "Drawings aren't expenses."),
]
