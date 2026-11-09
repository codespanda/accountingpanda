import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  exercises,
  h,
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

// Double-Entry Bookkeeping Explained — lesson screens by module index (0 = Module 1).
// The course follows one business, Maple Tutoring, through its first month (March).

const marchTransactions = table(
  ["#", "Date", "Transaction"],
  [
    ["1", "Mar 1", "Priya invests $15,000 cash in Maple Tutoring"],
    ["2", "Mar 2", "Bank loan of $10,000 received"],
    ["3", "Mar 3", "Laptop and projector bought for $4,000 cash"],
    ["4", "Mar 5", "Teaching supplies of $600 bought on credit from Paper Plus"],
    ["5", "Mar 8", "Tutoring fees of $2,400 received in cash"],
    ["6", "Mar 12", "A school is invoiced $3,500 for group tutoring"],
    ["7", "Mar 15", "Rent of $1,200 paid"],
    ["8", "Mar 18", "Paper Plus paid $600"],
    ["9", "Mar 22", "The school pays $2,000 on account"],
    ["10", "Mar 25", "Loan repayment of $500 plus $50 interest"],
    ["11", "Mar 28", "Assistant's wages of $1,500 paid"],
    ["12", "Mar 30", "Priya withdraws $800 for personal use"],
  ],
)

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Why Double-Entry Matters",
      [
        "Double-entry bookkeeping is the system behind almost every set of business accounts in the world. Before learning its rules, it helps to understand why it exists and what problem it solves.",
      ],
      [
        "Explain single-entry and double-entry bookkeeping",
        "Describe the dual effect of every transaction",
        "Explain how double-entry prevents and exposes errors",
        "Connect double-entry to the accounting equation",
        "Outline where double-entry came from",
      ],
    ),
    screen(
      "Meet Maple Tutoring",
      p("Throughout this course you'll keep the books for Maple Tutoring, a small tutoring business Priya starts on March 1."),
      p("Here are its transactions for March. You'll record them step by step as the course goes on:"),
      marchTransactions,
    ),
    screen(
      "Single-entry bookkeeping",
      p("Single-entry bookkeeping records each transaction once, usually in a cash book — like a checkbook register of money in and money out."),
      table(
        ["Date", "Description", "In", "Out", "Balance"],
        [
          ["Mar 1", "Owner's investment", "$15,000", "", "$15,000"],
          ["Mar 2", "Bank loan", "$10,000", "", "$25,000"],
          ["Mar 3", "Laptop and projector", "", "$4,000", "$21,000"],
          ["Mar 8", "Tutoring fees", "$2,400", "", "$23,400"],
        ],
        { numeric: [2, 3, 4] },
      ),
      note("Single-entry can work for very small, cash-only activities. Many sole traders start this way."),
    ),
    screen(
      "Limits of single-entry",
      p("Look at what Maple Tutoring's cash book doesn't tell you:"),
      bullets(
        "It doesn't show that the business owes the bank $10,000 — the loan appears only as cash coming in.",
        "It doesn't show that the laptop and projector are assets worth $4,000.",
        "The $600 of supplies bought on credit on March 5 isn't recorded at all, because no cash moved.",
        "There's no built-in way to check the records are correct.",
      ),
      caution("Without the full picture, the owner can't prepare a reliable balance sheet or know what the business owes and owns."),
    ),
    screen(
      "Double-entry bookkeeping",
      p("Double-entry bookkeeping records every transaction in at least two accounts: one or more debits and one or more credits of equal total value."),
      compare(
        ["Single-entry", "Each transaction recorded once, mainly cash.", ["Simple", "Incomplete picture", "No error check"]],
        ["Double-entry", "Each transaction recorded in at least two accounts.", ["Complete picture", "Built-in error check", "Used by accounting software"]],
      ),
      note("You'll learn exactly what “debit” and “credit” mean in Module 2. For now, think of them as the two sides of every entry."),
    ),
    screen(
      "The dual effect of every transaction",
      p("Every transaction gives something and receives something. Double-entry records both sides."),
      table(
        ["Maple Tutoring transaction", "Received", "Given"],
        [
          ["Laptop and projector for $4,000 cash", "Equipment +$4,000", "Cash −$4,000"],
          ["Bank loan of $10,000", "Cash +$10,000", "A promise to repay — Loan +$10,000"],
          ["Supplies of $600 on credit", "Supplies +$600", "A promise to pay — Accounts payable +$600"],
          ["Tutoring fees of $2,400 in cash", "Cash +$2,400", "Tutoring services — Revenue +$2,400"],
        ],
      ),
    ),
    screen(
      "How double-entry prevents and exposes errors",
      bullets(
        "Because every entry has equal debits and credits, total debits must always equal total credits.",
        "If they don't, an error has been made — such as a one-sided or mistyped entry.",
        "Recording both sides forces you to think about what really happened.",
        "Every account has its own balance, so unusual figures stand out.",
      ),
      tip("The trial balance", "Listing all debit and credit balances and checking that the totals agree is called a trial balance. You'll prepare one in Module 5."),
    ),
    screen(
      "The accounting equation as the foundation",
      p("Double-entry keeps this equation in balance after every transaction:"),
      table(["Assets", "=", "Liabilities", "+", "Owner's equity"], [["What the business owns", "=", "What it owes", "+", "The owner's stake"]]),
      table(
        ["After transaction", "Assets", "Liabilities", "Equity"],
        [
          ["1 — Priya invests $15,000", "$15,000", "$0", "$15,000"],
          ["2 — Bank loan $10,000", "$25,000", "$10,000", "$15,000"],
          ["3 — Equipment $4,000 for cash", "$25,000", "$10,000", "$15,000"],
        ],
        { numeric: [1, 2, 3] },
      ),
      p("Transaction 3 swapped one asset (cash) for another (equipment), so the totals didn't change — but the equation still balances."),
    ),
    screen(
      "A short history of double-entry",
      bullets(
        "Italian merchants in cities such as Venice, Florence and Genoa were using double-entry by the 14th and 15th centuries.",
        "In 1494, the mathematician Luca Pacioli described the system in his book Summa de arithmetica — often called the first printed description of double-entry.",
        "The core ideas have hardly changed in over 500 years. Modern accounting software still records every transaction with equal debits and credits.",
      ),
    ),
    mistakes(
      ["Recording only the cash side", "Every transaction has two effects — record both."],
      ["Ignoring credit transactions", "Purchases and sales on credit change the books even though no cash moves."],
      ["Treating a loan as income", "A loan brings in cash but also creates a liability."],
      ["Treating an asset purchase as a loss", "Buying equipment swaps cash for another asset."],
    ),
    check(
      1,
      q("What does double-entry record for each transaction?", ["One entry only", "At least two entries with equal debits and credits", "Only cash movements", "Only sales"], 1, "Every transaction is recorded in at least two accounts."),
      q("Which system works like a checkbook register?", ["Double-entry", "Single-entry", "Accrual", "Cost accounting"], 1, "Single-entry records money in and out once."),
      q("Maple Tutoring buys supplies on credit. Why doesn't its cash book show this?", ["No cash moved", "Supplies are free", "It's a loan", "It's revenue"], 0, "Single-entry cash books record only cash."),
      q("After Priya invests $15,000 and the bank lends $10,000, what are total assets?", ["$10,000", "$15,000", "$25,000", "$5,000"], 2, "$15,000 + $10,000 of cash."),
      q("Who described double-entry in a printed book in 1494?", ["Adam Smith", "Luca Pacioli", "Isaac Newton", "Leonardo da Vinci"], 1, "Pacioli's Summa de arithmetica."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Two sides",
          ["For each Maple Tutoring transaction, name what is received and what is given: (a) rent of $1,200 paid, (b) the school invoiced $3,500."],
          ["(a) Received: use of the premises (Rent expense +$1,200). Given: Cash −$1,200.", "(b) Received: the school's promise to pay (Accounts receivable +$3,500). Given: tutoring services (Revenue +$3,500)."],
        ],
        [
          "Exercise 2 — Keep the equation",
          ["Starting from Assets $25,000 = Liabilities $10,000 + Equity $15,000, show the equation after the school is invoiced $3,500 for tutoring."],
          ["Assets $28,500 = Liabilities $10,000 + Equity $18,500.", "The school now owes $3,500 (an asset), and the revenue earned increases the owner's equity by $3,500."],
        ],
      ),
    ),
    summary(
      [
        "How single-entry bookkeeping works and where it falls short",
        "What double-entry bookkeeping is",
        "The dual effect of every transaction",
        "How double-entry exposes errors",
        "How the accounting equation stays in balance",
        "The origins of double-entry",
      ],
      "Every transaction has two sides. Recording both gives a complete picture and a built-in check that the books are right.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Debits and Credits",
      ["Debits and credits are the language of double-entry. Once you know which side increases each type of account, you can record any transaction."],
      [
        "Explain what “debit” and “credit” mean",
        "Name the five account types",
        "Apply the debit and credit rules to each type",
        "State the normal balance of each account type",
        "Analyse a transaction into its debit and credit",
      ],
    ),
    screen(
      "What debit and credit really mean",
      p("In bookkeeping, debit (Dr) simply means the left side of an account, and credit (Cr) means the right side."),
      bullets(
        "The words come from Latin: debere (to owe) and credere (to trust or entrust).",
        "They don't mean good or bad, or plus or minus, on their own.",
        "Whether a debit increases or decreases an account depends on the type of account.",
      ),
      tip("One rule never changes", "In every transaction, total debits equal total credits."),
    ),
    screen(
      "The five account types",
      table(
        ["Type", "What it records", "Maple Tutoring examples"],
        [
          ["Assets", "What the business owns or is owed", "Cash, Equipment, Accounts receivable"],
          ["Liabilities", "What the business owes", "Bank loan, Accounts payable"],
          ["Owner's equity", "The owner's stake", "Owner's capital, Owner's drawings"],
          ["Income (revenue)", "What the business earns", "Tutoring revenue"],
          ["Expenses", "Costs of running the business", "Rent, Wages, Supplies, Interest"],
        ],
      ),
    ),
    screen(
      "Assets, liabilities and equity",
      table(
        ["Account type", "Increase", "Decrease"],
        [
          ["Assets", "Debit", "Credit"],
          ["Liabilities", "Credit", "Debit"],
          ["Owner's equity (capital)", "Credit", "Debit"],
        ],
      ),
      p("This mirrors the equation: assets sit on the left (Assets = …), so they increase on the left. Liabilities and equity sit on the right, so they increase on the right."),
      tip("Example", "Priya invests $15,000: Cash (asset) increases → debit $15,000. Owner's capital (equity) increases → credit $15,000."),
    ),
    screen(
      "Income, expenses and drawings",
      table(
        ["Account type", "Increase", "Decrease", "Why"],
        [
          ["Income", "Credit", "Debit", "Income increases equity, and equity increases with credits"],
          ["Expenses", "Debit", "Credit", "Expenses reduce equity, and equity decreases with debits"],
          ["Owner's drawings", "Debit", "Credit", "Drawings reduce equity"],
        ],
      ),
      tip("Example", "Rent of $1,200 is paid: Rent expense increases → debit $1,200. Cash decreases → credit $1,200."),
    ),
    screen(
      "The debit and credit rules table",
      table(
        ["Account type", "Debit", "Credit"],
        [
          ["Assets", "Increase", "Decrease"],
          ["Expenses", "Increase", "Decrease"],
          ["Owner's drawings", "Increase", "Decrease"],
          ["Liabilities", "Decrease", "Increase"],
          ["Owner's equity", "Decrease", "Increase"],
          ["Income", "Decrease", "Increase"],
        ],
      ),
      tip("Memory aid — DEAD CLIC", "Debits increase Expenses, Assets and Drawings. Credits increase Liabilities, Income and Capital."),
    ),
    screen(
      "Normal balances",
      p("An account's normal balance is the side on which it increases:"),
      table(
        ["Normal debit balance", "Normal credit balance"],
        [
          ["Assets", "Liabilities"],
          ["Expenses", "Owner's equity"],
          ["Owner's drawings", "Income"],
        ],
      ),
      caution("An account with a balance on its opposite side — such as Cash with a credit balance — usually signals an error or an overdrawn bank account. Investigate it."),
    ),
    screen(
      "Why your bank statement says the opposite",
      p("Your bank statement shows deposits as “credits”. That's because the bank keeps its own books: your money is a liability for the bank — it owes it to you."),
      table(
        ["Event", "Bank's books", "Your books"],
        [
          ["You deposit $2,400", "Credit (its liability to you increases)", "Debit Cash (your asset increases)"],
          ["You pay rent $1,200", "Debit (its liability to you decreases)", "Credit Cash (your asset decreases)"],
        ],
      ),
    ),
    screen(
      "Worked example: analysing transactions",
      table(
        ["#", "Accounts", "Type and change", "Debit", "Credit"],
        [
          ["1", "Cash / Owner's capital", "Asset ↑ / Equity ↑", "Cash $15,000", "Owner's capital $15,000"],
          ["2", "Cash / Bank loan", "Asset ↑ / Liability ↑", "Cash $10,000", "Bank loan $10,000"],
          ["3", "Equipment / Cash", "Asset ↑ / Asset ↓", "Equipment $4,000", "Cash $4,000"],
          ["4", "Supplies expense / Accounts payable", "Expense ↑ / Liability ↑", "Supplies $600", "Accounts payable $600"],
          ["5", "Cash / Tutoring revenue", "Asset ↑ / Income ↑", "Cash $2,400", "Tutoring revenue $2,400"],
          ["7", "Rent expense / Cash", "Expense ↑ / Asset ↓", "Rent $1,200", "Cash $1,200"],
        ],
      ),
      note("Maple Tutoring treats teaching supplies as an expense because they're used up within the month."),
    ),
    mistakes(
      ["Thinking debit always means increase", "Debits increase assets, expenses and drawings — but decrease liabilities, equity and income."],
      ["Using the bank's point of view", "In your books, money in is a debit to Cash."],
      ["Treating drawings as an expense", "Drawings reduce equity but aren't business expenses."],
      ["Entries that don't balance", "Every entry needs equal debits and credits."],
    ),
    check(
      2,
      q("What does “debit” mean in bookkeeping?", ["Increase", "Decrease", "The left side of an account", "Money owed"], 2, "Its effect depends on the account type."),
      q("Using DEAD CLIC, which accounts increase with a credit?", ["Expenses, Assets and Drawings", "Liabilities, Income and Capital", "Only Cash", "Only expenses"], 1, "Credits increase Liabilities, Income and Capital."),
      q("What is the normal balance of an expense account?", ["Debit", "Credit", "Zero", "Either"], 0, "Expenses increase with debits."),
      q("Maple Tutoring pays $1,200 rent. Which account is credited?", ["Rent expense", "Cash", "Owner's capital", "Tutoring revenue"], 1, "Cash decreases."),
      q("Why does a bank statement call your deposit a credit?", ["The bank made an error", "Your money is a liability in the bank's books", "Deposits are income", "It's an old custom with no reason"], 1, "The bank owes you the money."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Debit or credit?",
          ["Say whether each account is debited or credited: (a) Cash increases, (b) Bank loan increases, (c) Wages expense increases, (d) Accounts payable decreases, (e) Tutoring revenue increases."],
          ["(a) Debit. (b) Credit. (c) Debit. (d) Debit. (e) Credit."],
        ],
        [
          "Exercise 2 — Analyse",
          ["Analyse Maple Tutoring's transaction 11: assistant's wages of $1,500 paid in cash."],
          ["Wages expense (expense) increases → debit $1,500.", "Cash (asset) decreases → credit $1,500."],
        ],
        [
          "Exercise 3 — Drawings",
          ["Analyse transaction 12: Priya withdraws $800 for personal use."],
          ["Owner's drawings increases → debit $800.", "Cash decreases → credit $800."],
        ],
      ),
    ),
    summary(
      [
        "Debit means left and credit means right",
        "The five account types",
        "How assets, liabilities and equity increase and decrease",
        "How income, expenses and drawings work",
        "The rules table and DEAD CLIC",
        "Normal balances",
        "Why bank statements use the opposite words",
      ],
      "Identify the accounts, classify them, decide the direction, then apply the rules — and check that debits equal credits.",
    ),
  ],
  2: [
    overview(
      "Module 3 — T-Accounts",
      ["A T-account is a quick sketch of a ledger account. It's the easiest way to see how debits and credits build up a balance — and to think through a tricky transaction."],
      [
        "Draw and read a T-account",
        "Post debits and credits to T-accounts",
        "Calculate an account balance",
        "Balance off an account at the end of a period",
        "Use T-accounts to analyse a transaction",
        "Avoid common T-account mistakes",
      ],
    ),
    screen(
      "What a T-account is",
      p("A T-account is shaped like the letter T. The account name goes on top, debits go on the left and credits go on the right."),
      table(["Cash — Debit (left)", "Cash — Credit (right)"], [["Money in", "Money out"]]),
      note("Real ledgers have columns for date, description, debit, credit and balance. The T is a simplified version for learning and analysis."),
    ),
    screen(
      "Posting to T-accounts",
      p("Posting means writing each part of an entry into its account, on the same side as in the entry."),
      h("Transaction 1 — Priya invests $15,000"),
      table(["Cash — Debit", "Cash — Credit"], [["Mar 1 Capital $15,000", ""]]),
      table(["Owner's capital — Debit", "Owner's capital — Credit"], [["", "Mar 1 Cash $15,000"]]),
      tip("Cross-reference", "Many bookkeepers write the other account's name next to each posting, so the other side of the entry is easy to find."),
    ),
    screen(
      "Maple Tutoring's first week in T-accounts",
      p("Transactions 1–5 posted to Cash:"),
      table(
        ["Cash — Debit", "Cash — Credit"],
        [
          ["Mar 1 Capital $15,000", "Mar 3 Equipment $4,000"],
          ["Mar 2 Bank loan $10,000", ""],
          ["Mar 8 Tutoring revenue $2,400", ""],
        ],
      ),
      p("And the other sides:"),
      table(
        ["Account", "Debit", "Credit"],
        [
          ["Owner's capital", "", "$15,000"],
          ["Bank loan", "", "$10,000"],
          ["Equipment", "$4,000", ""],
          ["Supplies expense", "$600", ""],
          ["Accounts payable", "", "$600"],
          ["Tutoring revenue", "", "$2,400"],
        ],
      ),
    ),
    screen(
      "Calculating a balance",
      steps(
        ["Total the debit side", "$15,000 + $10,000 + $2,400 = $27,400"],
        ["Total the credit side", "$4,000"],
        ["Subtract the smaller from the larger", "$27,400 − $4,000 = $23,400"],
        ["Place the balance on the larger side", "A $23,400 debit balance — normal for Cash."],
      ),
      note("An account with entries on only one side simply has a balance equal to that total — e.g. Owner's capital has a $15,000 credit balance."),
    ),
    screen(
      "Balancing off an account",
      p("At the end of a period, accounts are “balanced off” so the closing balance carries into the next period."),
      table(
        ["Cash — Debit", "Cash — Credit"],
        [
          ["Mar 1 Capital $15,000", "Mar 3 Equipment $4,000"],
          ["Mar 2 Bank loan $10,000", "Mar 8 Balance c/d $23,400"],
          ["Mar 8 Tutoring revenue $2,400", ""],
          ["Total $27,400", "Total $27,400"],
          ["Mar 9 Balance b/d $23,400", ""],
        ],
      ),
      terms(
        ["Balance c/d (carried down)", "The balancing figure inserted on the smaller side so both sides total the same."],
        ["Balance b/d (brought down)", "The same figure on the opposite side to start the next period."],
      ),
    ),
    screen(
      "Using T-accounts to analyse a transaction",
      p("Transaction 9: the school pays $2,000 of its $3,500 invoice."),
      table(
        ["Account", "Type", "Change", "Side"],
        [
          ["Cash", "Asset", "Increase", "Debit $2,000"],
          ["Accounts receivable", "Asset", "Decrease", "Credit $2,000"],
        ],
      ),
      table(["Accounts receivable — Debit", "Accounts receivable — Credit"], [["Mar 12 Revenue $3,500", "Mar 22 Cash $2,000"], ["", "Balance c/d $1,500"]]),
      p("The school still owes $1,500 — a debit balance, normal for an asset."),
    ),
    mistakes(
      ["Posting both sides to the same side", "One account gets the debit, the other the credit."],
      ["Putting the balance on the wrong side", "The balance belongs on the side with the larger total."],
      ["Forgetting the opening balance", "Bring last period's balance down before posting new entries."],
      ["Mixing up “balance c/d” and “b/d”", "c/d closes the period; b/d opens the next one on the opposite side."],
      ["Leaving out an account", "Every account in the entry needs its own posting."],
    ),
    check(
      3,
      q("On a T-account, where are debits recorded?", ["Right side", "Left side", "Top", "Bottom"], 1, "Debits go on the left."),
      q("Cash debits total $27,400 and credits total $4,000. What is the balance?", ["$23,400 credit", "$23,400 debit", "$31,400 debit", "$4,000 debit"], 1, "On the larger (debit) side."),
      q("What does “balance b/d” mean?", ["Balance brought down to start the next period", "Bank deposit", "Bad debt", "Balance doubled"], 0, "It opens the next period."),
      q("The school pays $2,000 of a $3,500 invoice. What balance remains in Accounts receivable?", ["$5,500 debit", "$1,500 debit", "$2,000 credit", "$3,500 debit"], 1, "$3,500 − $2,000."),
      q("Which is a common T-account mistake?", ["Totalling both sides", "Putting the balance on the wrong side", "Labelling the account", "Using the left side for debits"], 1, "The balance goes on the larger side."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Post and balance",
          ["Post transactions 7 (rent $1,200), 8 (Paper Plus paid $600) and 10 (loan repayment $500 plus $50 interest) to the Cash T-account, starting from the $23,400 balance b/d. What is the new balance?"],
          ["Credits: $1,200 + $600 + $550 = $2,350.", "Balance: $23,400 − $2,350 = $21,050 debit."],
        ],
        [
          "Exercise 2 — Accounts payable",
          ["Draw the Accounts payable T-account for transactions 4 and 8. What is the balance?"],
          ["Credit $600 (Mar 5 Supplies); debit $600 (Mar 18 Cash).", "Balance: $0 — Paper Plus has been paid in full."],
        ],
      ),
    ),
    summary(
      [
        "What a T-account is and how to draw one",
        "How to post debits and credits",
        "How to calculate a balance",
        "How to balance off an account with c/d and b/d",
        "How to analyse a transaction with T-accounts",
        "Common T-account mistakes",
      ],
      "Total each side, subtract the smaller from the larger, and place the balance on the larger side.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Analysing Everyday Transactions",
      ["Most businesses repeat the same kinds of transactions every month. In this module you'll record all twelve of Maple Tutoring's March transactions as journal entries."],
      [
        "Use a five-step method to analyse any transaction",
        "Record cash and credit sales",
        "Record cash and credit purchases",
        "Record expenses, owner investments and drawings",
        "Record loans received and repaid, including interest",
        "Record payments received and made on account",
      ],
    ),
    screen(
      "A five-step method",
      steps(
        ["What happened?", "Read the source document."],
        ["Which accounts?", "Usually two, sometimes more."],
        ["What type is each?", "Asset, liability, equity, income or expense."],
        ["Up or down?", "Does each account increase or decrease?"],
        ["Debit or credit?", "Apply DEAD CLIC, then check debits equal credits."],
      ),
    ),
    screen(
      "Cash and credit sales",
      h("Transaction 5 — tutoring fees of $2,400 received in cash"),
      journal([["Cash", "$2,400", ""], ["Tutoring revenue", "", "$2,400"]], "$2,400"),
      h("Transaction 6 — a school invoiced $3,500"),
      journal([["Accounts receivable", "$3,500", ""], ["Tutoring revenue", "", "$3,500"]], "$3,500"),
      note("Revenue is recorded when the work is done and invoiced — not when the cash arrives."),
    ),
    screen(
      "Cash and credit purchases",
      h("Transaction 3 — equipment bought for $4,000 cash"),
      journal([["Equipment", "$4,000", ""], ["Cash", "", "$4,000"]], "$4,000"),
      h("Transaction 4 — supplies of $600 on credit"),
      journal([["Supplies expense", "$600", ""], ["Accounts payable", "", "$600"]], "$600"),
      tip("Asset or expense?", "Items that will be used for years (equipment) are assets. Items used up quickly (supplies) are usually expenses."),
    ),
    screen(
      "Paying expenses",
      h("Transaction 7 — rent of $1,200"),
      journal([["Rent expense", "$1,200", ""], ["Cash", "", "$1,200"]], "$1,200"),
      h("Transaction 11 — wages of $1,500"),
      journal([["Wages expense", "$1,500", ""], ["Cash", "", "$1,500"]], "$1,500"),
    ),
    screen(
      "Owner investments and drawings",
      h("Transaction 1 — Priya invests $15,000"),
      journal([["Cash", "$15,000", ""], ["Owner's capital", "", "$15,000"]], "$15,000"),
      h("Transaction 12 — Priya withdraws $800"),
      journal([["Owner's drawings", "$800", ""], ["Cash", "", "$800"]], "$800"),
      note("Investments aren't income and drawings aren't expenses. Neither affects profit."),
    ),
    screen(
      "Loans received and repaid",
      h("Transaction 2 — bank loan of $10,000"),
      journal([["Cash", "$10,000", ""], ["Bank loan", "", "$10,000"]], "$10,000"),
      h("Transaction 10 — repay $500 of the loan plus $50 interest"),
      journal([["Bank loan", "$500", ""], ["Interest expense", "$50", ""], ["Cash", "", "$550"]], "$550"),
      caution("Only the interest is an expense. The $500 principal reduces the loan."),
    ),
    screen(
      "Payments on account",
      h("Transaction 8 — Paper Plus paid $600"),
      journal([["Accounts payable", "$600", ""], ["Cash", "", "$600"]], "$600"),
      h("Transaction 9 — the school pays $2,000 on account"),
      journal([["Cash", "$2,000", ""], ["Accounts receivable", "", "$2,000"]], "$2,000"),
      tip("No new income or expense", "Payments on account settle amounts already recorded. They only move balances between Cash and the receivable or payable."),
    ),
    screen(
      "Maple Tutoring's March journal",
      table(
        ["#", "Debit", "Credit", "Amount"],
        [
          ["1", "Cash", "Owner's capital", "$15,000"],
          ["2", "Cash", "Bank loan", "$10,000"],
          ["3", "Equipment", "Cash", "$4,000"],
          ["4", "Supplies expense", "Accounts payable", "$600"],
          ["5", "Cash", "Tutoring revenue", "$2,400"],
          ["6", "Accounts receivable", "Tutoring revenue", "$3,500"],
          ["7", "Rent expense", "Cash", "$1,200"],
          ["8", "Accounts payable", "Cash", "$600"],
          ["9", "Cash", "Accounts receivable", "$2,000"],
          ["10", "Bank loan $500 + Interest expense $50", "Cash", "$550"],
          ["11", "Wages expense", "Cash", "$1,500"],
          ["12", "Owner's drawings", "Cash", "$800"],
        ],
      ),
      p("Cash: $15,000 + $10,000 + $2,400 + $2,000 − $4,000 − $1,200 − $600 − $550 − $1,500 − $800 = $20,750."),
    ),
    mistakes(
      ["Recording the full loan repayment as an expense", "Split it into principal and interest."],
      ["Recording customer payments as revenue", "Revenue was recorded on the invoice."],
      ["Expensing equipment", "Long-lasting items are assets."],
      ["Treating owner investments as income", "They're equity, not revenue."],
    ),
    check(
      4,
      q("A school is invoiced $3,500. What is debited?", ["Cash", "Tutoring revenue", "Accounts receivable", "Accounts payable"], 2, "The school owes the business."),
      q("Priya withdraws $800 for personal use. What is debited?", ["Wages expense", "Owner's drawings", "Owner's capital", "Cash"], 1, "Withdrawals are drawings."),
      q("A $550 loan payment includes $50 interest. How much reduces the loan?", ["$550", "$500", "$50", "$600"], 1, "$550 − $50 interest."),
      q("The school pays $2,000 on account. What is credited?", ["Tutoring revenue", "Accounts receivable", "Cash", "Owner's capital"], 1, "The receivable decreases."),
      q("What is Maple Tutoring's cash balance at the end of March?", ["$23,400", "$20,750", "$21,550", "$25,000"], 1, "After all twelve transactions."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — April transactions",
          ["Write the entries: (a) tutoring fees of $1,800 received in cash, (b) a second school invoiced $2,500, (c) an internet bill of $90 received, to be paid later."],
          ["(a) Dr Cash $1,800 · Cr Tutoring revenue $1,800.", "(b) Dr Accounts receivable $2,500 · Cr Tutoring revenue $2,500.", "(c) Dr Internet expense $90 · Cr Accounts payable $90."],
        ],
        [
          "Exercise 2 — A compound entry",
          ["Maple Tutoring buys a $1,200 whiteboard, paying $400 cash and owing the rest to the supplier. Write the entry."],
          ["Dr Equipment $1,200 · Cr Cash $400 · Cr Accounts payable $800."],
        ],
      ),
    ),
    summary(
      [
        "A five-step method for analysing transactions",
        "Cash and credit sales",
        "Cash and credit purchases, and asset vs. expense",
        "Expenses, owner investments and drawings",
        "Loans received and repaid, with interest",
        "Payments received and made on account",
      ],
      "Every everyday transaction fits a pattern. Learn the patterns and you can record almost anything.",
    ),
  ],
  4: [
    overview(
      "Module 5 — The Trial Balance",
      ["After recording a period's transactions, bookkeepers check the books with a trial balance. In this module you'll prepare Maple Tutoring's March trial balance and learn what it does — and doesn't — prove."],
      [
        "Explain the purpose of a trial balance",
        "Prepare a trial balance from ledger balances",
        "Explain what a balanced trial balance proves",
        "Identify errors that don't affect the trial balance",
        "Identify errors that do affect it",
      ],
    ),
    screen(
      "Purpose of a trial balance",
      p("A trial balance is a list of every ledger account and its balance at a date, with debit balances in one column and credit balances in the other."),
      bullets(
        "It checks that total debits equal total credits.",
        "It shows every account balance in one place.",
        "It's the starting point for adjustments and the financial statements.",
      ),
    ),
    screen(
      "Preparing a trial balance",
      steps(
        ["Balance every account", "Work out each ledger account's closing balance."],
        ["List them in order", "Assets, liabilities, equity, income, then expenses."],
        ["Use the right column", "Debit balances on the left, credit balances on the right."],
        ["Total both columns", "They should agree."],
        ["Investigate any difference", "Find and fix errors before going further."],
      ),
    ),
    screen(
      "Maple Tutoring's trial balance at March 31",
      table(
        ["Account", "Debit", "Credit"],
        [
          ["Cash", "$20,750", ""],
          ["Accounts receivable", "$1,500", ""],
          ["Equipment", "$4,000", ""],
          ["Accounts payable", "", "$0"],
          ["Bank loan", "", "$9,500"],
          ["Owner's capital", "", "$15,000"],
          ["Owner's drawings", "$800", ""],
          ["Tutoring revenue", "", "$5,900"],
          ["Supplies expense", "$600", ""],
          ["Rent expense", "$1,200", ""],
          ["Wages expense", "$1,500", ""],
          ["Interest expense", "$50", ""],
        ],
        { footer: ["Totals", "$30,400", "$30,400"], numeric: [1, 2] },
      ),
      p("The totals agree, so the books are arithmetically in balance."),
    ),
    screen(
      "What a balanced trial balance proves",
      compare(
        ["It does prove", "Total debits equal total credits — every entry was posted with equal sides.", ["No one-sided entries", "No addition errors in the TB"]],
        ["It doesn't prove", "That every transaction was recorded, in the right account, for the right amount.", ["Omissions", "Wrong accounts", "Wrong amounts on both sides"]],
      ),
    ),
    screen(
      "Errors that don't affect the trial balance",
      terms(
        ["Omission", "A transaction left out completely — e.g. the rent payment never recorded."],
        ["Commission", "Posted to the wrong account of the right type — e.g. the school's payment credited to another customer."],
        ["Principle", "Posted to the wrong type of account — e.g. equipment recorded as an expense."],
        ["Original entry", "The wrong amount used on both sides — e.g. $1,500 wages entered as $1,050 on both sides."],
        ["Complete reversal", "Correct accounts, but debit and credit swapped."],
        ["Compensating", "Two errors that cancel each other out."],
      ),
    ),
    screen(
      "Errors that do affect the trial balance",
      bullets(
        "Only one side of an entry posted.",
        "Different amounts posted on each side — e.g. a transposition on one side only.",
        "A balance placed in the wrong column of the trial balance.",
        "Addition mistakes in an account or the trial balance.",
      ),
      tip("Next module", "In Module 6 you'll learn how to track down and fix these errors."),
    ),
    mistakes(
      ["Treating a balanced TB as proof of correct books", "Six types of error still balance."],
      ["Listing accounts in random order", "Use chart-of-accounts order so it's easy to review."],
      ["Putting a credit balance in the debit column", "Check each account's normal balance."],
      ["Leaving out zero-balance accounts without checking them", "Confirm they really are zero."],
    ),
    check(
      5,
      q("What does a trial balance check?", ["That the business is profitable", "That total debits equal total credits", "That all invoices are paid", "That tax is correct"], 1, "It checks the arithmetic of the ledger."),
      q("What are Maple Tutoring's trial balance totals?", ["$20,750", "$30,400", "$25,000", "$35,900"], 1, "Both columns total $30,400."),
      q("Equipment is recorded as an expense. Which error is this?", ["Omission", "Principle", "Reversal", "Transposition"], 1, "Wrong type of account."),
      q("A transaction is never recorded. Does the trial balance still balance?", ["Yes", "No", "Only if it was cash", "Only at year-end"], 0, "Omissions affect neither side."),
      q("Which error makes the trial balance disagree?", ["Only one side of an entry posted", "A complete reversal", "An error of commission", "A compensating error"], 0, "One-sided postings unbalance it."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which column?",
          ["Put each balance in the debit or credit column: Cash, Bank loan, Owner's drawings, Tutoring revenue, Interest expense."],
          ["Debit: Cash, Owner's drawings, Interest expense.", "Credit: Bank loan, Tutoring revenue."],
        ],
        [
          "Exercise 2 — Does it balance?",
          ["Which of these would stop the trial balance from balancing? (a) Wages of $1,500 never recorded, (b) rent debited $1,200 but cash credited $2,100, (c) the school's payment posted to the wrong customer."],
          ["Only (b) — the two sides differ by $900.", "(a) is an omission and (c) is commission; both still balance."],
        ],
      ),
    ),
    summary(
      [
        "The purpose of a trial balance",
        "How to prepare one from ledger balances",
        "Maple Tutoring's trial balance",
        "What a balanced trial balance proves — and doesn't",
        "Errors that do and don't affect the trial balance",
      ],
      "A balanced trial balance is necessary, not sufficient. It proves the arithmetic, not that every entry is right.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Finding and Correcting Errors",
      ["Even careful bookkeepers make mistakes. This module gives you a systematic way to find them and the right way to correct them — without deleting history."],
      [
        "Follow a systematic search for trial balance differences",
        "Recognise transposition and slide errors",
        "Correct errors of omission, commission and principle",
        "Deal with original-entry, reversal and compensating errors",
        "Write correcting entries",
        "Use and clear a suspense account",
      ],
    ),
    screen(
      "A systematic search",
      steps(
        ["Recheck the totals", "Re-add both trial balance columns."],
        ["Check every balance was carried over", "Compare the trial balance with the ledger, account by account."],
        ["Look for the difference itself", "An amount equal to the difference may have been posted only once."],
        ["Halve the difference", "An amount posted on the wrong side doubles the difference."],
        ["Divide by 9", "Transpositions and slides leave differences divisible by 9."],
        ["Check the postings", "Trace journal entries to the ledger."],
      ),
    ),
    screen(
      "Transposition and slide errors",
      terms(
        ["Transposition", "Digits swapped — e.g. $1,500 written as $1,050. Difference $450, which is divisible by 9 (450 ÷ 9 = 50)."],
        ["Slide", "Decimal point moved — e.g. $1,250 written as $125. Difference $1,125, also divisible by 9."],
      ),
      tip("Why 9 works", "Swapping digits or shifting a decimal changes the value by a multiple of 9. It doesn't prove a transposition, but it's a strong clue."),
    ),
    screen(
      "Omission, commission and principle",
      table(
        ["Error", "Example", "Correction"],
        [
          ["Omission", "March internet bill of $90 never recorded", "Record it: Dr Internet expense $90 · Cr Accounts payable $90"],
          ["Commission", "$2,000 from School A credited to School B", "Dr AR — School B $2,000 · Cr AR — School A $2,000"],
          ["Principle", "$4,000 equipment debited to Repairs expense", "Dr Equipment $4,000 · Cr Repairs expense $4,000"],
        ],
      ),
    ),
    screen(
      "Original entry, reversal and compensating errors",
      terms(
        ["Original entry", "Wages of $1,500 recorded as $1,050 on both sides. Correct with the difference: Dr Wages $450 · Cr Cash $450."],
        ["Complete reversal", "Rent recorded as Dr Cash $1,200 · Cr Rent $1,200. Correct with double the amount: Dr Rent $2,400 · Cr Cash $2,400."],
        ["Compensating", "Revenue overstated by $100 and an expense also overstated by $100. Each needs its own correction."],
      ),
      caution("A reversal needs twice the amount to correct — once to cancel the wrong entry and once to record the right one."),
    ),
    screen(
      "Writing correcting entries",
      bullets(
        "Don't erase, delete or overwrite posted entries.",
        "Record a new journal entry that moves the amount to where it belongs.",
        "Describe the error and refer to the original entry.",
        "Get approval for corrections in closed periods.",
      ),
      h("Example — Interest of $50 posted to Rent expense"),
      journal([["Interest expense", "$50", ""], ["Rent expense", "", "$50"]], "$50"),
    ),
    screen(
      "Suspense accounts",
      p("If the trial balance doesn't agree and the error isn't found straight away, the difference can be placed temporarily in a suspense account so work can continue."),
      p("Suppose Maple Tutoring's draft trial balance shows debits of $29,950 and credits of $30,400. Debits are $450 short:"),
      table(["Suspense — Debit", "Suspense — Credit"], [["Difference $450", ""]]),
      caution("A suspense account is temporary. It must be cleared to zero before the financial statements are finalised."),
    ),
    screen(
      "Worked example: clearing the suspense account",
      p("The $450 difference divides by 9 (450 ÷ 9 = 50), suggesting a transposition. Checking the ledger, the wages payment was credited to Cash as $1,500 but debited to Wages expense as $1,050."),
      journal([["Wages expense", "$450", ""], ["Suspense", "", "$450"]], "$450"),
      p("Suspense is now zero and Wages expense shows the correct $1,500. A second check finds the $50 interest was posted to Rent — an error of principle that didn't affect the totals — corrected with the entry on the previous screen."),
    ),
    mistakes(
      ["Deleting the wrong entry", "Correct it with a new entry so the audit trail stays."],
      ["Correcting a reversal with the original amount", "Use twice the amount."],
      ["Leaving a balance in suspense", "Clear it before reporting."],
      ["Stopping after the TB balances", "Look for errors that don't affect the TB too."],
    ),
    check(
      6,
      q("$1,500 was recorded as $1,050. What type of error is this?", ["Slide", "Transposition", "Omission", "Principle"], 1, "Swapped digits; the $450 difference is divisible by 9."),
      q("How should a posted error be corrected?", ["Delete the entry", "Overwrite it", "Record a correcting journal entry", "Ignore it"], 2, "This keeps the audit trail."),
      q("$4,000 of equipment was debited to Repairs expense. What corrects it?", ["Dr Repairs, Cr Equipment", "Dr Equipment, Cr Repairs expense", "Dr Cash, Cr Equipment", "No correction needed"], 1, "Move it from the expense to the asset."),
      q("Rent of $1,200 was recorded with debit and credit reversed. What amount corrects it?", ["$600", "$1,200", "$2,400", "$0"], 2, "Twice the amount."),
      q("What is a suspense account used for?", ["Holding a trial balance difference temporarily", "Recording drawings", "Storing unpaid invoices", "Paying tax"], 0, "It must be cleared before reporting."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Find the clue",
          ["A trial balance differs by $360. What could cause it?"],
          ["$360 ÷ 9 = 40, so look for a transposition (e.g. $480 written as $840) or a slide.", "Also look for a $360 one-sided posting, or a $180 amount posted on the wrong side."],
        ],
        [
          "Exercise 2 — Correct the errors",
          ["Write corrections: (a) the $800 drawings were debited to Wages expense, (b) a $90 internet bill was omitted, (c) the $3,500 invoice was recorded as Dr Tutoring revenue, Cr Accounts receivable."],
          ["(a) Dr Owner's drawings $800 · Cr Wages expense $800.", "(b) Dr Internet expense $90 · Cr Accounts payable $90.", "(c) Dr Accounts receivable $7,000 · Cr Tutoring revenue $7,000."],
        ],
      ),
    ),
    summary(
      [
        "A systematic way to search for trial balance differences",
        "Transposition and slide errors, and the divide-by-9 clue",
        "Correcting omission, commission and principle errors",
        "Correcting original-entry, reversal and compensating errors",
        "Writing correcting entries without deleting history",
        "Opening and clearing a suspense account",
      ],
      "Find errors systematically, correct them with new entries, and never leave a suspense balance behind.",
    ),
  ],
}

export default lessons
