import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  exercises,
  journal,
  mistakes,
  note,
  overview,
  p,
  q,
  screen,
  steps,
  summary,
  table,
  terms,
  tip,
} from "@/lib/lessonKit"

// Bank Reconciliation Fundamentals — lesson screens by module index (0 = Module 1).
// Modules 1–4 reconcile Harbor Coffee Co's April bank account step by step.

const bankStatement = table(
  ["Date", "Description", "Withdrawals", "Deposits", "Balance"],
  [
    ["Apr 1", "Opening balance", "", "", "$18,400"],
    ["Apr 2", "Cheque 2101", "$3,500", "", "$14,900"],
    ["Apr 3", "Deposit", "", "$2,150", "$17,050"],
    ["Apr 9", "Cheque 2102", "$2,640", "", "$14,410"],
    ["Apr 10", "Deposit", "", "$1,980", "$16,390"],
    ["Apr 12", "Direct debit — Shield Insurance", "$210", "", "$16,180"],
    ["Apr 15", "Card settlement", "", "$3,120", "$19,300"],
    ["Apr 16", "Payroll transfer", "$4,200", "", "$15,100"],
    ["Apr 18", "Returned cheque — refer to drawer", "$510", "", "$14,590"],
    ["Apr 20", "Cheque 2210", "$450", "", "$14,140"],
    ["Apr 24", "Deposit", "", "$2,400", "$16,540"],
    ["Apr 25", "Cheque 2103", "$185", "", "$16,355"],
    ["Apr 30", "Interest", "", "$12", "$16,367"],
    ["Apr 30", "Monthly service fee", "$25", "", "$16,342"],
  ],
  { numeric: [2, 3, 4] },
)

const cashBook = table(
  ["Date", "Description", "Debit (in)", "Credit (out)", "Balance"],
  [
    ["Apr 1", "Opening balance", "", "", "$18,400"],
    ["Apr 2", "Cheque 2101 — rent", "", "$3,500", "$14,900"],
    ["Apr 3", "Cash sales banked", "$2,150", "", "$17,050"],
    ["Apr 8", "Cheque 2102 — Bean Roasters", "", "$2,640", "$14,410"],
    ["Apr 10", "Three customer cheques banked", "$1,980", "", "$16,390"],
    ["Apr 15", "Card settlement (net of fees)", "$3,120", "", "$19,510"],
    ["Apr 16", "Payroll", "", "$4,200", "$15,310"],
    ["Apr 22", "Cheque 2103 — City Water", "", "$158", "$15,152"],
    ["Apr 24", "Cash sales banked", "$2,400", "", "$17,552"],
    ["Apr 28", "Cheque 2104 — Milk Supply Co", "", "$960", "$16,592"],
    ["Apr 29", "Cheque 2105 — espresso machine repair", "", "$340", "$16,252"],
    ["Apr 30", "Cash sales banked", "$1,750", "", "$18,002"],
  ],
  { numeric: [2, 3, 4] },
)

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Why Reconciliation Matters",
      ["A bank reconciliation is one of the most important controls in bookkeeping. It proves the cash figure in the books is real, and it catches errors and fraud early."],
      ["Explain what a bank reconciliation proves", "Describe how reconciliation catches errors, fraud and missing transactions", "Decide how often to reconcile", "Read a bank statement"],
    ),
    screen(
      "Meet Harbor Coffee Co",
      p("Harbor Coffee Co is a café owned by Sam. It banks its takings, pays suppliers by cheque and online transfer, and receives card settlements from its card processor."),
      p("In Modules 1–4 you'll reconcile Harbor Coffee's bank account for April. March was reconciled, so both the books and the bank started April at $18,400."),
    ),
    screen(
      "What a bank reconciliation proves",
      p("A bank reconciliation compares the cash balance in the books with the balance on the bank statement at the same date, and explains every difference."),
      bullets(
        "Every bank transaction has been recorded in the books.",
        "Nothing has been recorded twice or for the wrong amount.",
        "The only remaining differences are timing items you can name.",
      ),
      note("After reconciling, the corrected cash figure can be trusted in the financial statements."),
    ),
    screen(
      "Catching errors, fraud and missing items",
      terms(
        ["Errors", "Wrong amounts, duplicates, or entries in the wrong bank account."],
        ["Missing transactions", "Bank fees, interest, direct debits and customer transfers that never reached the books."],
        ["Fraud", "Unauthorised payments, altered cheques or payments to fake suppliers show up as items you can't match."],
        ["Bank errors", "Banks occasionally post another customer's transaction to your account."],
      ),
    ),
    screen(
      "How often to reconcile",
      table(
        ["Account activity", "Suggested frequency"],
        [
          ["Low — a few dozen transactions a month", "Monthly, as soon as the statement is available"],
          ["Busy — daily takings and payments", "Weekly, or daily with bank feeds"],
          ["High-risk — large or unusual payments", "Daily review of new transactions"],
        ],
      ),
      tip("Small and often", "A month with 40 transactions takes minutes. A year with 500 unreconciled transactions can take days — and the trail to find errors goes cold."),
    ),
    screen(
      "Reading a bank statement",
      p("Harbor Coffee's April bank statement:"),
      bankStatement,
      note("A bank statement is written from the bank's point of view: your deposit is money the bank owes you, so banks often call deposits “credits”. In your books, a deposit is a debit to Cash."),
    ),
    screen(
      "The other side: the cash book",
      p("Harbor Coffee's Cash account for April:"),
      cashBook,
      p("The books show $18,002. The bank shows $16,342. In the next three modules you'll explain every dollar of the difference."),
    ),
    mistakes(
      ["Assuming the bank balance is the true balance", "Both sides can contain errors and timing items."],
      ["Reconciling only at year-end", "Errors pile up and become hard to trace."],
      ["Treating “credit” on the statement as a credit to Cash", "The bank uses its own point of view."],
      ["Skipping reconciliation because the software has bank feeds", "Feeds still need checking against the statement."],
    ),
    check(
      1,
      q("What does a bank reconciliation compare?", ["Sales and expenses", "The book cash balance and the bank statement balance at the same date", "Two bank accounts", "Budget and actual"], 1, "Books and bank, same date."),
      q("Which problem can reconciliation reveal?", ["An unrecorded bank fee", "Low sales", "High rent", "A late tax return"], 0, "Bank-only items show up as differences."),
      q("Why does the bank call your deposit a credit?", ["It's an error", "From the bank's point of view, it owes you the money", "Deposits are income to the bank", "No reason"], 1, "It's the bank's liability."),
      q("A busy café banks takings every day. How often should it reconcile?", ["Once a year", "Weekly or daily", "Every five years", "Only when audited"], 1, "Busier accounts need more frequent reconciliation."),
      q("What were Harbor Coffee's book and bank balances at April 30?", ["$18,002 books, $16,342 bank", "$18,400 both", "$16,342 books, $18,002 bank", "$17,242 both"], 0, "The difference is what you'll reconcile."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Bank-only items",
          ["Looking at Harbor Coffee's bank statement and cash book, list items that appear on the statement but not in the books."],
          ["Shield Insurance direct debit $210; returned cheque $510; cheque 2210 $450; interest $12; service fee $25."],
        ],
        [
          "Exercise 2 — Book-only items",
          ["List items in the books that don't appear on the statement."],
          ["Cheque 2104 $960; cheque 2105 $340; the Apr 30 deposit of $1,750."],
        ],
      ),
    ),
    summary(
      ["What a bank reconciliation proves", "How it catches errors, fraud and missing items", "How often to reconcile", "How to read a bank statement", "Harbor Coffee's April statement and cash book"],
      "The bank reconciliation is how you prove cash. Do it regularly and every difference becomes easy to explain.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Matching Transactions",
      ["Matching is the heart of reconciliation: pairing each bank line with the same transaction in the books. This module shows a reliable way to match — including grouped deposits and card settlements."],
      ["Compare the bank statement to the ledger", "Tick off matched items", "Handle grouped deposits", "Match card settlements"],
    ),
    screen(
      "Comparing the statement with the ledger",
      steps(
        ["Get both records for the same period", "The bank statement and the Cash account for April."],
        ["Check the opening balances", "Both start at $18,400 — March was reconciled."],
        ["Match deposits", "Each statement deposit against a receipt in the books."],
        ["Match withdrawals", "Each cheque, transfer, fee and direct debit."],
        ["Mark matched items", "Tick both records."],
      ),
    ),
    screen(
      "What counts as a match",
      bullets(
        "Same amount, in the same direction (money in or out).",
        "Dates close together — banks often post a day or two later.",
        "Same reference where there is one, such as a cheque number.",
      ),
      caution("Matching on amount alone can pair the wrong items. Always check the cheque number or description too."),
    ),
    screen(
      "Ticking off Harbor Coffee's items",
      table(
        ["Books", "Bank", "Status"],
        [
          ["Apr 2 cheque 2101 $3,500", "Apr 2 cheque 2101 $3,500", "✓ Matched"],
          ["Apr 3 deposit $2,150", "Apr 3 deposit $2,150", "✓ Matched"],
          ["Apr 8 cheque 2102 $2,640", "Apr 9 cheque 2102 $2,640", "✓ Matched (cleared a day later)"],
          ["Apr 16 payroll $4,200", "Apr 16 payroll $4,200", "✓ Matched"],
          ["Apr 22 cheque 2103 $158", "Apr 25 cheque 2103 $185", "✗ Same cheque, different amount"],
          ["Apr 24 deposit $2,400", "Apr 24 deposit $2,400", "✓ Matched"],
        ],
      ),
      p("Cheque 2103 is the same transaction with different amounts — something for Module 3."),
    ),
    screen(
      "Grouped deposits",
      p("On April 10, Harbor Coffee banked three customer cheques together. The books recorded one deposit of $1,980, matching the bank's single deposit."),
      table(
        ["Cheque from", "Amount"],
        [
          ["Northside Office catering", "$620"],
          ["Bay Events", "$850"],
          ["Kim Lee (gift vouchers)", "$510"],
        ],
        { footer: ["Deposit total", "$1,980"], numeric: [1] },
      ),
      tip("Keep the deposit slip", "The deposit slip lists each cheque in the total. If one bounces later, you'll know which customer it came from."),
    ),
    screen(
      "Card settlements",
      p("Harbor Coffee's card processor pays out card sales after deducting its fee. On April 15 it settled $3,200 of card sales, less a 2.5% fee of $80."),
      journal([["Cash", "$3,120", ""], ["Merchant fees", "$80", ""], ["Card clearing account", "", "$3,200"]], "$3,200"),
      p("Because the books recorded the net $3,120, it matches the bank's deposit."),
      note("If the books recorded the gross $3,200 to Cash, there'd be an $80 difference — a common reason card deposits don't match."),
    ),
    screen(
      "Items left unticked",
      table(
        ["Unticked in the books", "Unticked on the statement"],
        [
          ["Cheque 2104 $960", "Shield Insurance direct debit $210"],
          ["Cheque 2105 $340", "Returned cheque $510"],
          ["Apr 30 deposit $1,750", "Cheque 2210 $450"],
          ["Cheque 2103 recorded as $158", "Cheque 2103 paid as $185"],
          ["", "Interest $12"],
          ["", "Service fee $25"],
        ],
      ),
      p("These are the reconciling items. In Module 3 you'll classify each one."),
    ),
    mistakes(
      ["Matching on amount only", "Check references and descriptions too."],
      ["Recording a grouped deposit as separate deposits", "The bank shows one deposit — match the total."],
      ["Recording card sales gross to Cash", "Record the fee separately so the net matches the bank."],
      ["Ignoring a one-day date difference", "Banks often post the next day — it's still a match."],
    ),
    check(
      2,
      q("What should you confirm before matching this month's items?", ["Last month's reconciliation was completed", "Tax is paid", "The budget is approved", "Nothing"], 0, "You need a reconciled starting point."),
      q("Cheque 2102 is in the books on Apr 8 and on the statement on Apr 9 for the same amount. What is it?", ["A reconciling item", "A matched item", "An error", "Fraud"], 1, "Same cheque, same amount, posted a day later."),
      q("Three cheques totalling $1,980 are banked together. How do they appear on the statement?", ["As three deposits", "As one deposit of $1,980", "Not at all", "As a fee"], 1, "Banked together, they form one deposit."),
      q("$3,200 of card sales are settled with an $80 fee. How much reaches the bank?", ["$3,200", "$3,120", "$3,280", "$80"], 1, "The processor deducts its fee."),
      q("Why is matching on amount alone risky?", ["Different transactions can have the same amount", "Amounts are always wrong", "Banks don't show amounts", "It's too slow"], 0, "Check references too."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Card settlement entry",
          ["May card sales of $4,600 are settled with a 2.5% fee. Write the settlement entry."],
          ["Fee = $115. Dr Cash $4,485 · Dr Merchant fees $115 · Cr Card clearing account $4,600."],
        ],
        [
          "Exercise 2 — Match or not?",
          ["Books: May 3 cheque 2110 $720. Bank: May 5 cheque 2110 $720; May 6 cheque 2111 $720. Which bank line matches?"],
          ["May 5 cheque 2110 — same cheque number and amount. Cheque 2111 is a different transaction that needs investigating."],
        ],
      ),
    ),
    summary(
      ["How to compare the bank statement with the ledger", "What counts as a match", "Ticking off matched items", "Matching grouped deposits", "Matching card settlements", "Identifying unticked items"],
      "Match on amount, date and reference. Whatever is left unticked becomes your list of reconciling items.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Reconciling Items",
      ["Every unticked item is either a timing difference, something missing from the books, or an error. This module classifies each of Harbor Coffee's items and decides which side it adjusts."],
      ["Treat deposits in transit", "Treat outstanding cheques and payments", "Treat bank fees and interest", "Treat direct debits and automatic payments", "Tell bank errors from book errors"],
    ),
    screen(
      "Two kinds of reconciling items",
      compare(
        ["Bank-side items", "The books are right; the bank hasn't caught up yet, or made a mistake.", ["Adjust the bank balance", "No entry in the books"]],
        ["Book-side items", "The bank is right; the books are missing something or contain an error.", ["Adjust the book balance", "Record a journal entry"]],
      ),
    ),
    screen(
      "Deposits in transit",
      p("A deposit in transit is money recorded in the books but not yet shown by the bank — often cash banked on the last day of the month."),
      table(["Item", "Amount", "Adjust"], [["Apr 30 cash sales banked after the bank's cut-off", "$1,750", "Add to the bank balance"]]),
      note("It will appear on May's statement. No entry is needed in the books."),
    ),
    screen(
      "Outstanding cheques and payments",
      p("Outstanding cheques have been written and recorded but haven't cleared the bank yet."),
      table(
        ["Cheque", "Payee", "Amount", "Adjust"],
        [
          ["2104", "Milk Supply Co", "$960", "Subtract from the bank balance"],
          ["2105", "Espresso machine repair", "$340", "Subtract from the bank balance"],
        ],
        { footer: ["Total outstanding", "", "$1,300", ""], numeric: [2] },
      ),
      caution("Don't record outstanding cheques again — they're already in the books."),
    ),
    screen(
      "Bank fees and interest",
      table(
        ["Item", "Amount", "Adjust"],
        [
          ["Monthly service fee", "$25", "Subtract from the book balance and record it"],
          ["Interest earned", "$12", "Add to the book balance and record it"],
        ],
      ),
    ),
    screen(
      "Direct debits and returned cheques",
      terms(
        ["Direct debit — Shield Insurance $210", "Taken automatically by the insurer. The books missed it. Subtract from the book balance and record it."],
        ["Returned cheque $510", "Kim Lee's cheque from the Apr 10 deposit was returned unpaid (“refer to drawer”). The money didn't arrive after all, so subtract it from the book balance — Kim Lee owes it again."],
      ),
      tip("Follow up quickly", "Contact the customer about a returned cheque the same day, and ask for payment another way."),
    ),
    screen(
      "Bank errors vs. book errors",
      compare(
        ["Book error — cheque 2103", "The City Water cheque was written for $185 but recorded as $158 — digits transposed. The books understate the payment by $27.", ["Subtract $27 from the book balance", "Record a correction"]],
        ["Bank error — cheque 2210 $450", "Harbor Coffee's cheques run from 2101 to 2105. Cheque 2210 isn't theirs — the bank charged another customer's cheque to this account.", ["Add $450 back to the bank balance", "Ask the bank to reverse it"]],
      ),
      note("$185 − $158 = $27, and 27 ÷ 9 = 3. Differences divisible by 9 often point to transposed digits."),
    ),
    screen(
      "Harbor Coffee's reconciling items",
      table(
        ["Item", "Amount", "Side", "Effect"],
        [
          ["Deposit in transit", "$1,750", "Bank", "Add"],
          ["Outstanding cheques 2104 and 2105", "$1,300", "Bank", "Subtract"],
          ["Bank error — cheque 2210", "$450", "Bank", "Add"],
          ["Shield Insurance direct debit", "$210", "Books", "Subtract"],
          ["Returned cheque — Kim Lee", "$510", "Books", "Subtract"],
          ["Service fee", "$25", "Books", "Subtract"],
          ["Interest", "$12", "Books", "Add"],
          ["Cheque 2103 recorded $27 too low", "$27", "Books", "Subtract"],
        ],
      ),
    ),
    mistakes(
      ["Adjusting the books for timing items", "Deposits in transit and outstanding cheques need no entry."],
      ["Recording a bank error in the books", "Ask the bank to fix it instead."],
      ["Forgetting returned cheques", "The customer owes the money again."],
      ["Correcting the wrong amount", "For a transposition, correct only the difference."],
    ),
    check(
      3,
      q("How is a deposit in transit treated?", ["Added to the bank balance", "Subtracted from the bank balance", "Subtracted from the book balance", "Ignored"], 0, "The bank hasn't recorded it yet."),
      q("Harbor Coffee's outstanding cheques total how much?", ["$960", "$340", "$1,300", "$1,750"], 2, "$960 + $340."),
      q("A customer's cheque is returned unpaid. What happens in the books?", ["Nothing", "Subtract it from the book balance — the customer owes it again", "Add it to the bank balance", "Record extra sales"], 1, "The receipt didn't really happen."),
      q("Cheque 2103 was written for $185 but recorded as $158. Which side is adjusted, and by how much?", ["Bank, $185", "Books, $27", "Books, $158", "Bank, $27"], 1, "It's a book error of $27."),
      q("The bank charged another customer's cheque to Harbor Coffee's account. What should Harbor Coffee do?", ["Record an expense", "Add it back to the bank balance and ask the bank to reverse it", "Change the opening balance", "Ignore it"], 1, "It's a bank error."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify",
          ["Bank side or book side, add or subtract? (a) a $95 loan repayment taken automatically, (b) a $600 deposit made on the last day, (c) a $1,200 cheque not yet cleared, (d) $8 interest."],
          ["(a) Book side, subtract. (b) Bank side, add. (c) Bank side, subtract. (d) Book side, add."],
        ],
        [
          "Exercise 2 — Transposition",
          ["A $1,260 payment was recorded as $1,620. What's the difference, and which way is the book balance wrong?"],
          ["Difference $360 (divisible by 9). Too much was deducted, so the book balance is $360 too low — add $360 to the book balance."],
        ],
      ),
    ),
    summary(
      ["Bank-side vs. book-side items", "Deposits in transit", "Outstanding cheques and payments", "Bank fees and interest", "Direct debits and returned cheques", "Bank errors vs. book errors"],
      "Ask of every item: is the bank behind or wrong, or are the books? That tells you which balance to adjust.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Preparing the Reconciliation",
      ["Now you'll put Harbor Coffee's reconciliation together, prove both sides agree, and record the entries that bring the books up to date."],
      ["Lay out a reconciliation statement", "Adjust the bank balance", "Adjust the book balance", "Record the adjusting entries"],
    ),
    screen(
      "The reconciliation statement layout",
      p("A reconciliation has two halves that must end at the same figure:"),
      table(
        ["Bank side", "Book side"],
        [
          ["Balance per bank statement", "Balance per books"],
          ["+ Deposits in transit", "+ Interest and receipts not yet recorded"],
          ["− Outstanding cheques", "− Fees, direct debits and returned cheques"],
          ["± Bank errors", "± Book errors"],
          ["= Adjusted bank balance", "= Adjusted book balance"],
        ],
      ),
    ),
    screen(
      "Adjusting the bank balance",
      table(
        ["Bank side", "Amount"],
        [
          ["Balance per bank statement, Apr 30", "$16,342"],
          ["Add: deposit in transit", "$1,750"],
          ["Less: outstanding cheques 2104 and 2105", "($1,300)"],
          ["Add: bank error — cheque 2210", "$450"],
          ["Adjusted bank balance", "$17,242"],
        ],
        { numeric: [1] },
      ),
    ),
    screen(
      "Adjusting the book balance",
      table(
        ["Book side", "Amount"],
        [
          ["Balance per books, Apr 30", "$18,002"],
          ["Less: Shield Insurance direct debit", "($210)"],
          ["Less: returned cheque — Kim Lee", "($510)"],
          ["Less: service fee", "($25)"],
          ["Add: interest", "$12"],
          ["Less: cheque 2103 understated", "($27)"],
          ["Adjusted book balance", "$17,242"],
        ],
        { numeric: [1] },
      ),
      p("Both sides agree at $17,242 — Harbor Coffee's true cash balance at April 30."),
    ),
    screen(
      "Recording the adjusting entries",
      p("Only book-side items need entries:"),
      table(
        ["Item", "Debit", "Credit", "Amount"],
        [
          ["Insurance direct debit", "Insurance expense", "Cash", "$210"],
          ["Returned cheque", "Accounts receivable — Kim Lee", "Cash", "$510"],
          ["Service fee", "Bank fees", "Cash", "$25"],
          ["Interest", "Cash", "Interest income", "$12"],
          ["Cheque 2103 correction", "Utilities", "Cash", "$27"],
        ],
        { numeric: [3] },
      ),
      p("After posting: $18,002 − $210 − $510 − $25 + $12 − $27 = $17,242 in the Cash account."),
    ),
    screen(
      "Dealing with the bank error",
      steps(
        ["Contact the bank", "Report that cheque 2210 isn't Harbor Coffee's and ask for the $450 to be reversed."],
        ["Keep evidence", "Note the date, who you spoke to and any reference number."],
        ["Track it", "It will stay on next month's reconciliation until the bank corrects it."],
        ["Check it cleared", "Confirm the reversal on May's statement."],
      ),
    ),
    screen(
      "Review and sign-off",
      bullets(
        "Both adjusted balances agree.",
        "Every reconciling item is explained and dated.",
        "Book-side entries are posted, and the Cash account equals the adjusted balance.",
        "Old items (e.g. cheques outstanding for months) are followed up.",
        "The preparer and a reviewer sign and date the reconciliation, and it's saved with the statement.",
      ),
    ),
    mistakes(
      ["Forcing the balance with an unexplained figure", "Find the cause instead."],
      ["Posting entries for bank-side items", "Only book-side items are recorded."],
      ["Forgetting to post the book-side entries", "The ledger would still show the old balance."],
      ["Not following up bank errors", "Unchased errors can stay for months."],
    ),
    check(
      4,
      q("What is Harbor Coffee's adjusted bank balance?", ["$16,342", "$17,242", "$18,002", "$16,792"], 1, "$16,342 + $1,750 − $1,300 + $450."),
      q("Which items need journal entries?", ["Bank-side items", "Book-side items", "All items", "None"], 1, "Only book-side items."),
      q("How is the returned cheque recorded?", ["Dr Cash, Cr Sales", "Dr Accounts receivable — Kim Lee, Cr Cash", "Dr Bank fees, Cr Cash", "No entry"], 1, "Kim Lee owes the money again."),
      q("What does the adjusted balance of $17,242 represent?", ["The bank's profit", "Harbor Coffee's true cash balance at April 30", "Next month's budget", "The opening balance"], 1, "It's the correct cash figure."),
      q("What should happen to the $450 bank error?", ["Record an expense", "Ask the bank to reverse it and track it until it's fixed", "Delete it", "Add it to sales"], 1, "Banks fix bank errors."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — A full reconciliation",
          ["Bank $9,400; books $8,965. Deposit in transit $800; outstanding cheques $1,150; bank fee $20; interest $5; a customer's $100 direct payment not yet recorded. Prepare the reconciliation."],
          ["Bank: $9,400 + $800 − $1,150 = $9,050.", "Books: $8,965 − $20 + $5 + $100 = $9,050.", "Both agree at $9,050."],
        ],
        [
          "Exercise 2 — Entries",
          ["Write the book-side entries for Exercise 1."],
          ["Dr Bank fees $20 · Cr Cash $20.", "Dr Cash $5 · Cr Interest income $5.", "Dr Cash $100 · Cr Accounts receivable $100."],
        ],
      ),
    ),
    summary(
      ["The reconciliation statement layout", "Adjusting the bank balance", "Adjusting the book balance", "Recording book-side entries", "Following up bank errors", "Reviewing and signing off"],
      "When both sides agree and the book-side entries are posted, the Cash account shows the true balance.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Credit Card and Loan Accounts",
      ["Reconciliation isn't only for bank accounts. Credit cards, loans and payment processors all need the same discipline."],
      ["Reconcile a credit card statement", "Reconcile a loan balance", "Reconcile payment processor and clearing accounts"],
    ),
    screen(
      "Credit card accounts",
      p("A business credit card is a liability: the balance is what the business owes the card issuer. Reconcile it against the card statement like a bank account."),
      steps(
        ["Match each charge", "To an expense recorded in the books, with its receipt."],
        ["Match payments", "Payments to the card should match transfers from the bank account."],
        ["Record missing items", "Interest, annual fees and charges not yet recorded."],
        ["Agree the closing balance", "The card liability in the books should equal the statement, after timing items."],
      ),
    ),
    screen(
      "Example: Harbor Coffee's credit card",
      table(
        ["", "Amount"],
        [
          ["Balance per card statement", "$2,860"],
          ["Balance per books", "$2,640"],
          ["Difference", "$220"],
        ],
        { numeric: [1] },
      ),
      p("The difference is made up of the card's $95 annual fee and a $125 point-of-sale software charge, neither recorded yet:"),
      journal([["Bank fees", "$95", ""], ["Software subscriptions", "$125", ""], ["Credit card", "", "$220"]], "$220"),
      caution("Personal purchases on a business card aren't business expenses. Record them as owner's drawings or amounts owed by the employee."),
    ),
    screen(
      "Loan accounts",
      p("Compare the loan balance in the books with the lender's statement at least quarterly, and at year-end."),
      table(
        ["", "Amount"],
        [
          ["Loan per books", "$42,800"],
          ["Loan per lender statement", "$42,300"],
          ["Difference", "$500"],
        ],
        { numeric: [1] },
      ),
      p("Cause: April's $1,000 repayment was recorded entirely as interest. The lender's schedule shows $500 principal and $500 interest, so the loan was never reduced by $500."),
      journal([["Loan payable", "$500", ""], ["Interest expense", "", "$500"]], "$500"),
    ),
    screen(
      "Payment processors and clearing accounts",
      p("Harbor Coffee sells online through a payment processor. Sales go into a clearing account, and fees, refunds and payouts come out."),
      table(
        ["April", "Clearing account"],
        [
          ["Online sales collected", "+$4,000"],
          ["Processor fees", "−$120"],
          ["Refunds to customers", "−$200"],
          ["Payouts to the bank", "−$3,500"],
          ["Balance", "$180"],
        ],
      ),
      p("The $180 balance should equal the funds the processor still holds — check it against the processor's balance report. Here it's a payout due on May 1."),
      tip("A clearing account should clear", "If the balance doesn't match funds held, look for missing fees, refunds, chargebacks or payouts."),
    ),
    mistakes(
      ["Treating the card as an asset", "It's a liability."],
      ["Leaving card fees unrecorded", "Annual fees and interest must be recorded."],
      ["Recording loan repayments as all interest", "Use the lender's schedule to split them."],
      ["Ignoring clearing balances", "They should equal funds held by the processor."],
    ),
    check(
      5,
      q("What type of account is a business credit card?", ["Asset", "Liability", "Income", "Equity"], 1, "It's owed to the card issuer."),
      q("The card statement shows $2,860 and the books $2,640. What explains it?", ["A $220 bank error", "Unrecorded annual fee and software charge totalling $220", "Revenue", "Nothing"], 1, "$95 + $125."),
      q("A $1,000 repayment was recorded all as interest, but $500 was principal. What's the correction?", ["Dr Interest $500, Cr Loan $500", "Dr Loan payable $500, Cr Interest expense $500", "Dr Cash $500, Cr Loan $500", "No correction"], 1, "Reduce the loan and the interest."),
      q("Sales $4,000, fees $120, refunds $200, payouts $3,500. What's the clearing balance?", ["$0", "$180", "$320", "$500"], 1, "$4,000 − $120 − $200 − $3,500."),
      q("What should a clearing account balance equal?", ["Funds still held by the processor", "Total sales", "Zero always", "The bank balance"], 0, "It's money in transit."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Card reconciliation",
          ["Card statement $1,940; books $1,800. You find unrecorded interest of $40 and a $100 personal purchase by the owner. Write the entries."],
          ["Dr Interest expense $40 · Cr Credit card $40.", "Dr Owner's drawings $100 · Cr Credit card $100.", "Books now $1,940 — agrees."],
        ],
        [
          "Exercise 2 — Clearing account",
          ["May: online sales $5,200, fees $156, refunds $90, payouts $4,800. The processor holds $154. Does it reconcile?"],
          ["Clearing balance: $5,200 − $156 − $90 − $4,800 = $154. Yes — it equals the funds held."],
        ],
      ),
    ),
    summary(
      ["Reconciling credit card statements", "Recording missing card items and personal purchases", "Reconciling loan balances against lender statements", "Reconciling payment processor clearing accounts"],
      "Any account backed by an outside statement should be reconciled to it — banks, cards, loans and processors alike.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reconciling in Software and Troubleshooting",
      ["Accounting software makes reconciliation faster, but it doesn't make it automatic. This module covers bank feeds, reconciling in QuickBooks Online and Xero, and how to find a difference that won't go away."],
      ["Use bank feeds and matching rules", "Reconcile in QuickBooks Online and Xero", "Find why a reconciliation doesn't balance", "Fix a previously reconciled period"],
    ),
    screen(
      "Bank feeds and matching rules",
      bullets(
        "Bank feeds import transactions directly from the bank into the software.",
        "You match each line to an existing transaction, or create a new one.",
        "Rules automatically suggest coding for recurring items, such as the monthly service fee.",
        "Review rules regularly — a wrong rule miscodes every future transaction.",
      ),
      caution("Matching every feed line isn't the same as reconciling. Still compare the closing balance with the actual bank statement each month."),
    ),
    screen(
      "Reconciling in QuickBooks Online and Xero",
      compare(
        ["QuickBooks Online", "Use the Reconcile tool: choose the account, enter the statement ending date and balance, then tick cleared transactions until the difference is zero. A reconciliation report is saved.", ["Statement-based"]],
        ["Xero", "Reconcile each imported statement line by matching or creating a transaction, then check the bank reconciliation report against the statement balance.", ["Line-by-line"]],
      ),
      note("Menu names change between versions — use each product's help centre for the current steps."),
    ),
    screen(
      "Why a reconciliation doesn't balance",
      steps(
        ["Check the opening balance", "It should equal last month's reconciled closing balance."],
        ["Look for an item equal to the difference", "A single missing or extra transaction."],
        ["Halve the difference", "An item entered on the wrong side, or added instead of subtracted, doubles its effect."],
        ["Divide by 9", "Transpositions leave differences divisible by 9."],
        ["Look for duplicates", "Especially a bank feed line plus a manual entry."],
        ["Check dates", "A transaction in the wrong month moves the difference."],
      ),
    ),
    screen(
      "Worked example: a $54 difference",
      p("A junior bookkeeper's first draft of Harbor Coffee's reconciliation showed an adjusted book balance of $17,296 against an adjusted bank balance of $17,242 — a $54 difference."),
      steps(
        ["Is there a $54 item?", "No."],
        ["Halve it: $27", "Yes — the cheque 2103 correction is $27."],
        ["Check the sign", "The $27 was added to the book balance instead of subtracted, moving it by $54."],
        ["Fix it", "Subtract $27 instead. Adjusted book balance: $17,242 — it agrees."],
      ),
    ),
    screen(
      "Fixing a previously reconciled period",
      p("If someone edits or deletes a reconciled transaction, the opening balance of the next reconciliation changes."),
      bullets(
        "Use the software's audit log to find what changed, when and by whom.",
        "If the change was a mistake, restore the original transaction.",
        "If the period's books are closed, correct the error with a new entry in the current period rather than changing history.",
        "Lock closed periods so reconciled transactions can't be changed accidentally.",
      ),
    ),
    mistakes(
      ["Treating matched feed lines as a full reconciliation", "Compare with the actual statement."],
      ["Forcing a zero difference with an adjustment", "Find the real cause."],
      ["Adding a book-side deduction", "Watch the signs — a wrong sign doubles the difference."],
      ["Editing reconciled transactions", "It breaks the next opening balance."],
    ),
    check(
      6,
      q("Does matching all bank feed lines replace checking the statement balance?", ["Yes", "No — still compare with the actual statement", "Only in Xero", "Only in QuickBooks"], 1, "Feeds can miss or duplicate lines."),
      q("What do bank rules do?", ["Automatically suggest coding for recurring transactions", "Pay bills", "Set interest rates", "File tax"], 0, "They apply coding."),
      q("A reconciliation is off by $54 and there's a $27 item. What's likely?", ["The $27 was entered with the wrong sign", "A transposition of $54", "A missing deposit", "A bank error"], 0, "A wrong sign doubles the effect."),
      q("The opening balance doesn't match last month's closing balance. What might have happened?", ["A reconciled transaction was edited or deleted", "Interest was earned", "A new month started", "Nothing"], 0, "Changing reconciled items shifts the opening balance."),
      q("How should you fix an error in a closed period?", ["Edit the old transaction", "Record a correcting entry in the current period", "Delete the period", "Ignore it"], 1, "Keep closed reports unchanged."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Find the difference",
          ["A reconciliation is off by $180. You find a $90 bank fee and a $180 customer payment. What could cause it?"],
          ["The $180 payment may be missing or recorded twice, or the $90 fee was added instead of subtracted (doubling to $180). Check both."],
        ],
        [
          "Exercise 2 — Duplicate from a feed",
          ["A $640 supplier payment appears twice in the books: once entered manually and once created from the bank feed. What's the fix?"],
          ["Delete or void the duplicate (keeping the one matched to the bank line), then re-run the reconciliation."],
        ],
      ),
    ),
    summary(
      ["Bank feeds and matching rules", "Reconciling in QuickBooks Online and Xero", "A systematic way to find differences", "The halving and divide-by-9 clues", "Fixing previously reconciled periods"],
      "Software speeds up matching, but the reconciliation still has to agree with the real statement — and every difference has a cause.",
    ),
  ],
}

export default lessons
