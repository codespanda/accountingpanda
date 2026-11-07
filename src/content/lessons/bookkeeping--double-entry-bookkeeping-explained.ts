import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Double-Entry Bookkeeping Explained — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "Single-entry vs. double-entry",
      p("Every business needs a way to record its money. There are two basic systems."),
      compare(
        [
          "Single-entry",
          "Each transaction is recorded once, like a checkbook register — money in and money out.",
          ["Simple", "Doesn't track assets or debts fully"],
        ],
        [
          "Double-entry",
          "Each transaction is recorded in at least two accounts — one debit and one credit of equal value.",
          ["Complete picture", "Built-in error check"],
        ],
      ),
      note("Almost all businesses that produce a balance sheet, and all accounting software, use double-entry."),
    ),
    screen(
      "The dual effect of every transaction",
      p("Every transaction gives something and receives something. Double-entry records both sides."),
      table(
        ["Transaction", "What is received", "What is given"],
        [
          ["Buy a $1,000 computer for cash", "Equipment +$1,000", "Cash −$1,000"],
          ["Borrow $5,000 from the bank", "Cash +$5,000", "A promise to repay (Loan +$5,000)"],
          ["Sell services for $800 cash", "Cash +$800", "Services (Revenue +$800)"],
        ],
      ),
      p("That's why it's called double-entry: two sides, always equal."),
    ),
    screen(
      "The accounting equation and error checking",
      p("Double-entry keeps this equation in balance after every transaction:"),
      table(
        ["Assets", "=", "Liabilities", "+", "Owner's equity"],
        [["$25,000", "=", "$10,000 (bank loan)", "+", "$15,000 (owner's investment)"]],
      ),
      bullets(
        "Because each entry has equal debits and credits, total debits always equal total credits.",
        "If they don't, you know an error has been made — that's the built-in check.",
        "Double-entry gives a full record of assets, debts, income and expenses, not just cash.",
      ),
      tip(
        "A bit of history",
        "Double-entry was used by Italian merchants in the 14th and 15th centuries and described by Luca Pacioli in 1494. The system has hardly changed since.",
      ),
    ),
    check(
      1,
      q("What does double-entry record for each transaction?", ["One entry only", "At least two entries with equal debits and credits", "Only cash movements", "Only sales"], 1, "Each transaction is recorded in at least two accounts, with equal debits and credits."),
      q("Which system works like a checkbook register?", ["Double-entry", "Single-entry", "Accrual", "Cost accounting"], 1, "Single-entry records each transaction once, like a list of money in and out."),
      q("You buy equipment for $1,000 cash. What are the two effects?", ["Equipment up, cash up", "Equipment up, cash down", "Equipment down, cash down", "Only equipment goes up"], 1, "You receive equipment and give cash."),
      q("What is the accounting equation?", ["Assets = Liabilities − Equity", "Assets = Liabilities + Owner's Equity", "Revenue = Assets − Expenses", "Liabilities = Assets + Equity"], 1, "Assets = Liabilities + Owner's Equity."),
      q("How does double-entry help find errors?", ["Total debits should equal total credits", "It removes the need for receipts", "It records only large items", "It rounds every amount"], 0, "If total debits and credits differ, something has been recorded wrongly."),
    ),
  ],
  1: [
    screen(
      "What debit and credit really mean",
      p("In bookkeeping, debit simply means the left side of an account and credit means the right side. They don't mean good or bad, or plus or minus on their own."),
      p("Whether a debit increases or decreases an account depends on the type of account."),
      note("Bank statements use the words from the bank's point of view, which is why a deposit shows as a “credit” on your statement but is a debit to Cash in your books."),
    ),
    screen(
      "The debit and credit rules",
      table(
        ["Account type", "Debit", "Credit", "Normal balance"],
        [
          ["Assets", "Increase", "Decrease", "Debit"],
          ["Expenses", "Increase", "Decrease", "Debit"],
          ["Owner's drawings", "Increase", "Decrease", "Debit"],
          ["Liabilities", "Decrease", "Increase", "Credit"],
          ["Owner's equity", "Decrease", "Increase", "Credit"],
          ["Revenue (income)", "Decrease", "Increase", "Credit"],
        ],
      ),
      tip("Memory aid — DEAD CLIC", "Debits increase Expenses, Assets and Drawings. Credits increase Liabilities, Income and Capital."),
    ),
    screen(
      "Applying the rules",
      steps(
        ["Identify the accounts", "Which accounts does the transaction affect?"],
        ["Classify them", "Is each one an asset, liability, equity, revenue or expense?"],
        ["Decide the direction", "Does each account go up or down?"],
        ["Apply the rules", "Use the table to choose debit or credit."],
      ),
      h("Example: pay $400 electricity bill in cash"),
      journal([["Utilities expense", "$400", ""], ["Cash", "", "$400"]], "$400"),
      p("The expense increases (debit) and the asset Cash decreases (credit)."),
    ),
    check(
      2,
      q("What does “debit” mean in bookkeeping?", ["Increase", "Decrease", "The left side of an account", "Money owed"], 2, "Debit is the left side; its effect depends on the account type."),
      q("Which accounts increase with a credit?", ["Assets and expenses", "Liabilities, equity and revenue", "Only cash", "Drawings"], 1, "Liabilities, equity (capital) and revenue increase with credits."),
      q("What is the normal balance of an expense account?", ["Debit", "Credit", "Zero", "Either"], 0, "Expenses increase with debits, so they normally have debit balances."),
      q("You pay a $400 bill in cash. Which account is credited?", ["Utilities expense", "Cash", "Revenue", "Owner's equity"], 1, "Cash, an asset, decreases — so it is credited."),
      q("A loan from the bank increases. Which side records the increase?", ["Debit", "Credit", "Neither", "Both"], 1, "A loan is a liability, and liabilities increase with credits."),
    ),
  ],
  2: [
    screen(
      "Drawing a T-account",
      p("A T-account is a simple sketch of a ledger account. The account name goes on top, debits on the left and credits on the right."),
      table(["Cash — Debit", "Cash — Credit"], [["$5,000 (owner investment)", "$1,200 (rent)"], ["$800 (cash sale)", "$300 (supplies)"]], { numeric: [] }),
      note("T-accounts are a thinking tool. Software keeps the real ledger, but sketching T-accounts is the fastest way to analyse a tricky transaction."),
    ),
    screen(
      "Calculating a balance",
      steps(
        ["Total the debit side", "$5,000 + $800 = $5,800"],
        ["Total the credit side", "$1,200 + $300 = $1,500"],
        ["Subtract the smaller from the larger", "$5,800 − $1,500 = $4,300"],
        ["Place the balance on the larger side", "A $4,300 debit balance — normal for Cash, an asset."],
      ),
      caution("If an asset account shows a credit balance (or a liability a debit balance), check it — it's often a sign of an error, such as a payment recorded twice."),
    ),
    screen(
      "Using T-accounts to analyse a transaction",
      p("A business buys $2,000 of stock on credit from a supplier."),
      table(
        ["Account", "Type", "Change", "Side"],
        [
          ["Inventory", "Asset", "Increase", "Debit $2,000"],
          ["Accounts payable", "Liability", "Increase", "Credit $2,000"],
        ],
      ),
      h("Common T-account mistakes"),
      bullets(
        "Posting both sides of an entry to the same side.",
        "Putting the balance on the wrong side.",
        "Forgetting to carry forward the opening balance.",
        "Mixing up the account name with the other side of the entry.",
      ),
    ),
    check(
      3,
      q("On a T-account, where are debits recorded?", ["Right side", "Left side", "Top", "Bottom"], 1, "Debits go on the left."),
      q("Cash debits total $5,800 and credits $1,500. What is the balance?", ["$4,300 credit", "$4,300 debit", "$7,300 debit", "$1,500 debit"], 1, "$5,800 − $1,500 = $4,300, on the larger (debit) side."),
      q("Stock of $2,000 is bought on credit. Which account is credited?", ["Inventory", "Cash", "Accounts payable", "Revenue"], 2, "The amount owed to the supplier (a liability) increases, so it is credited."),
      q("An asset account shows a credit balance. What should you do?", ["Nothing — it's normal", "Check for an error", "Delete the account", "Move it to revenue"], 1, "Assets normally have debit balances, so a credit balance needs checking."),
      q("Which is a common T-account mistake?", ["Totalling both sides", "Putting the balance on the wrong side", "Labelling the account", "Using the left side for debits"], 1, "The balance belongs on the side with the larger total."),
    ),
  ],
  3: [
    screen(
      "Sales and purchases",
      table(
        ["Transaction", "Debit", "Credit"],
        [
          ["Cash sale of $600", "Cash $600", "Sales $600"],
          ["Credit sale of $1,500", "Accounts receivable $1,500", "Sales $1,500"],
          ["Cash purchase of supplies $200", "Supplies $200", "Cash $200"],
          ["Credit purchase of stock $3,000", "Inventory $3,000", "Accounts payable $3,000"],
          ["Pay $350 phone bill", "Telephone expense $350", "Cash $350"],
        ],
      ),
      note("Cash or credit only changes one side: cash today, or a receivable or payable to be settled later."),
    ),
    screen(
      "Owners, loans and payments on account",
      table(
        ["Transaction", "Debit", "Credit"],
        [
          ["Owner invests $10,000", "Cash $10,000", "Owner's capital $10,000"],
          ["Owner takes $500 for personal use", "Owner's drawings $500", "Cash $500"],
          ["Bank loan of $8,000 received", "Cash $8,000", "Loan payable $8,000"],
          ["Repay $1,000 of the loan", "Loan payable $1,000", "Cash $1,000"],
          ["Customer pays $1,500 owed", "Cash $1,500", "Accounts receivable $1,500"],
          ["Pay supplier $3,000 owed", "Accounts payable $3,000", "Cash $3,000"],
        ],
      ),
      tip("Payments on account aren't income or expenses", "When a customer pays an invoice you've already recorded, the sale was counted when you invoiced. The payment just turns a receivable into cash."),
    ),
    screen(
      "Practice: a week of transactions",
      p("Work out each entry before looking at the answer."),
      journal(
        [
          ["Mon — Cash (owner invests)", "$10,000", ""],
          ["Mon — Owner's capital", "", "$10,000"],
          ["Tue — Inventory (credit purchase)", "$3,000", ""],
          ["Tue — Accounts payable", "", "$3,000"],
          ["Thu — Accounts receivable (credit sale)", "$1,500", ""],
          ["Thu — Sales", "", "$1,500"],
          ["Fri — Rent expense", "$1,200", ""],
          ["Fri — Cash", "", "$1,200"],
        ],
        "$15,700",
      ),
    ),
    check(
      4,
      q("A credit sale of $1,500 is made. What is debited?", ["Cash", "Sales", "Accounts receivable", "Accounts payable"], 2, "The customer owes you, so accounts receivable increases."),
      q("The owner takes $500 cash for personal use. What is debited?", ["Wages expense", "Owner's drawings", "Owner's capital", "Cash"], 1, "Personal withdrawals are recorded as owner's drawings."),
      q("A customer pays $1,500 they owed. What is the entry?", ["Debit Cash, credit Sales", "Debit Cash, credit Accounts receivable", "Debit Sales, credit Cash", "Debit Accounts receivable, credit Cash"], 1, "The receivable is settled; no new revenue arises."),
      q("You repay $1,000 of a bank loan. Which account is debited?", ["Cash", "Interest income", "Loan payable", "Owner's capital"], 2, "The liability decreases, so it is debited."),
      q("Stock of $3,000 is bought on credit. What is credited?", ["Inventory", "Cash", "Accounts payable", "Sales"], 2, "You owe the supplier, so accounts payable increases."),
    ),
  ],
  4: [
    screen(
      "Purpose of a trial balance",
      p("A trial balance is a list of every ledger account with its closing balance, debits in one column and credits in the other. It's prepared before the financial statements to check that the books balance."),
      p("Here is the trial balance after Module 4's week of transactions, plus a $1,000 cash sale:"),
      table(
        ["Account", "Debit", "Credit"],
        [
          ["Cash", "$9,800", ""],
          ["Accounts receivable", "$1,500", ""],
          ["Inventory", "$3,000", ""],
          ["Accounts payable", "", "$3,000"],
          ["Owner's capital", "", "$10,000"],
          ["Sales", "", "$2,500"],
          ["Rent expense", "$1,200", ""],
        ],
        { footer: ["Totals", "$15,500", "$15,500"], numeric: [1, 2] },
      ),
    ),
    screen(
      "Preparing one",
      steps(
        ["Balance every ledger account", "Work out each account's closing balance."],
        ["List them", "Debit balances in the debit column, credit balances in the credit column."],
        ["Total both columns", "They should be equal."],
        ["Investigate any difference", "Find and fix the error before preparing the financial statements."],
      ),
      tip("Order matters for reading", "List accounts in chart-of-accounts order — assets, liabilities, equity, revenue, expenses — so it's easy to read and review."),
    ),
    screen(
      "What a balanced trial balance doesn't prove",
      p("A trial balance only checks that debits equal credits. These errors still balance:"),
      terms(
        ["Omission", "A transaction left out completely."],
        ["Commission", "Posted to the wrong account of the right type, e.g. one customer instead of another."],
        ["Principle", "Posted to the wrong type of account, e.g. equipment recorded as repairs expense."],
        ["Original entry", "The wrong amount used on both sides, e.g. $560 entered as $650."],
        ["Reversal", "The correct accounts, but debit and credit swapped."],
        ["Compensating", "Two errors that cancel each other out."],
      ),
    ),
    check(
      5,
      q("What does a trial balance check?", ["That the business is profitable", "That total debits equal total credits", "That all invoices are paid", "That tax is correct"], 1, "It checks the arithmetical balance of the ledger."),
      q("Where does a credit balance on Owner's capital go?", ["Debit column", "Credit column", "Both columns", "It's left out"], 1, "Credit balances go in the credit column."),
      q("A purchase of equipment is recorded as repairs expense. Which error is this?", ["Omission", "Principle", "Reversal", "Transposition"], 1, "Using the wrong type of account is an error of principle."),
      q("A sale is never recorded at all. Will the trial balance still balance?", ["Yes", "No", "Only if it was cash", "Only at year-end"], 0, "An error of omission affects neither side, so it still balances."),
      q("When is a trial balance usually prepared?", ["Before the financial statements", "After filing tax", "Only when auditing", "Each time a sale is made"], 0, "It's a check before preparing the financial statements."),
    ),
  ],
  5: [
    screen(
      "Errors that unbalance the books",
      terms(
        ["Transposition", "Digits swapped, e.g. $540 written as $450. The difference ($90) is always divisible by 9."],
        ["Slide", "Decimal point moved, e.g. $1,250 written as $125. The difference is also divisible by 9."],
        ["One-sided entry", "Only the debit or the credit was posted."],
        ["Addition error", "A ledger or trial balance column added incorrectly."],
      ),
      tip("Halve the difference", "If the difference equals twice an amount in the books, a debit may have been posted as a credit (or vice versa). Look for an entry equal to half the difference."),
    ),
    screen(
      "Writing correcting entries",
      p("Don't erase or delete posted entries. Correct them with a new journal entry so the audit trail stays clear."),
      h("Example: a $900 laptop was recorded as Office expense"),
      journal([["Equipment", "$900", ""], ["Office expense", "", "$900"]], "$900"),
      p("The correcting entry moves the amount from the wrong account to the right one."),
      h("Example: $250 cash sale posted twice"),
      journal([["Sales", "$250", ""], ["Cash", "", "$250"]], "$250"),
    ),
    screen(
      "Suspense accounts",
      p("If the trial balance doesn't agree and you can't find the error straight away, the difference can be placed temporarily in a suspense account so work can continue."),
      steps(
        ["Open the suspense account", "Debits total $20,000 and credits $20,180: debit Suspense $180 to balance."],
        ["Find the error", "A $180 rent payment was credited to Cash but never debited to Rent expense."],
        ["Clear the suspense", "Debit Rent expense $180, credit Suspense $180."],
      ),
      caution("A suspense account is temporary. It should be cleared to zero before the financial statements are finalised."),
    ),
    check(
      6,
      q("$540 was recorded as $450. What type of error is this?", ["Slide", "Transposition", "Omission", "Principle"], 1, "Swapped digits are a transposition error; the $90 difference is divisible by 9."),
      q("How should a posted error be corrected?", ["Delete the entry", "Write over it", "Record a correcting journal entry", "Ignore it"], 2, "A correcting entry keeps a clear audit trail."),
      q("A $900 laptop was recorded as Office expense. What corrects it?", ["Debit Office expense, credit Equipment", "Debit Equipment, credit Office expense", "Debit Cash, credit Equipment", "No correction needed"], 1, "Move the amount from the expense to the asset account."),
      q("What is a suspense account used for?", ["Holding a trial balance difference temporarily", "Recording owner's drawings", "Storing unpaid invoices", "Paying tax"], 0, "It holds the difference until the error is found."),
      q("Two errors cancel each other out. What are they called?", ["Compensating errors", "Slide errors", "Errors of principle", "Reversal errors"], 0, "Compensating errors offset each other, so the trial balance still agrees."),
    ),
  ],
}

export default lessons
