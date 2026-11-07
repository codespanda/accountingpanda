import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Recording Journal Entries — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "Purpose of the general journal",
      p("The general journal is the book of original entry: transactions are recorded here first, in date order, before being posted to the ledger accounts."),
      bullets(
        "It shows each transaction complete in one place — every debit and credit together.",
        "It gives a date-ordered history of what happened.",
        "It links each entry to its supporting document.",
      ),
      note("In accounting software, invoices, bills and bank transactions create journal entries for you behind the scenes. You still write manual journals for adjustments, corrections and unusual items."),
    ),
    screen(
      "Parts of a journal entry",
      table(
        ["Part", "Example"],
        [
          ["Date", "March 4"],
          ["Reference", "JE-0042 / Invoice 1187"],
          ["Account debited and amount", "Office supplies $240"],
          ["Account credited and amount", "Cash $240"],
          ["Description", "Printer paper and toner — Office Depot receipt #55821"],
        ],
      ),
      journal([["Office supplies", "$240", ""], ["Cash", "", "$240"]], "$240"),
      note("By convention, debit lines are listed first and credit lines after."),
    ),
    screen(
      "Writing clear descriptions",
      table(
        ["Weak description", "Clear description"],
        [
          ["Payment", "Payment to ABC Supplies — bill 3301 (March stock)"],
          ["Adjustment", "Accrue February electricity — bill not yet received"],
          ["Misc", "Reclass laptop from office expense to equipment (JE-0031 error)"],
        ],
      ),
      tip("The six-month test", "Write each description so someone — including you — could understand the entry six months from now without asking anyone."),
    ),
    check(
      1,
      q("What is the general journal?", ["A list of customers", "The book where transactions are first recorded in date order", "A bank statement", "The trial balance"], 1, "It's the book of original entry."),
      q("Which lines are usually listed first in a journal entry?", ["Credits", "Debits", "Descriptions", "Totals"], 1, "By convention, debits are listed first."),
      q("Which is the clearest description?", ["Payment", "Misc", "Payment to ABC Supplies — bill 3301", "Adjustment"], 2, "It says who, what and which document."),
      q("Why include a reference number?", ["To link the entry to its supporting document", "To calculate tax", "To set the date", "It's decoration"], 0, "References create the audit trail."),
      q("When do you still write manual journal entries in software?", ["Never", "For adjustments, corrections and unusual items", "For every sale", "Only for payroll"], 1, "Routine transactions are created by the software; manual journals cover the rest."),
    ),
  ],
  1: [
    screen(
      "Common source documents",
      table(
        ["Document", "Created by", "Records"],
        [
          ["Sales invoice", "You, for a customer", "A credit sale"],
          ["Sales receipt", "You, when paid on the spot", "A cash or card sale"],
          ["Supplier bill", "The supplier", "A purchase you owe"],
          ["Bank statement", "The bank", "Fees, interest, transfers and direct debits"],
          ["Payroll report", "Payroll system", "Wages, deductions and employer costs"],
        ],
      ),
    ),
    screen(
      "Reading a document for the entry",
      p("Before writing an entry, pick out these details from the document:"),
      steps(
        ["Who", "Customer or supplier name."],
        ["When", "The transaction date (not the date you're entering it)."],
        ["What", "The goods or services — this decides the account."],
        ["How much", "Net amount, any tax and the total."],
        ["Paid or not", "Cash now, or a receivable or payable?"],
      ),
      caution("A supplier statement or a quote is not a bill. Record purchases from the actual bill or receipt, so nothing is entered twice or too early."),
    ),
    screen(
      "Keeping an audit trail",
      p("An audit trail lets anyone follow a number in the reports back to the original document — and forward again."),
      bullets(
        "Attach the document to the transaction in your software, or file it with the entry reference.",
        "Use consistent file names, e.g. 2026-03-04_OfficeDepot_55821.pdf.",
        "Never alter a document; record corrections with a new entry.",
        "Keep records for as long as tax law and your accountant require — often several years.",
      ),
    ),
    check(
      2,
      q("Which document records a sale where the customer pays later?", ["Sales receipt", "Sales invoice", "Bank statement", "Quote"], 1, "An invoice records a credit sale."),
      q("Which document is usually the source for bank fees?", ["Supplier bill", "Bank statement", "Payroll report", "Sales invoice"], 1, "Bank fees appear on the bank statement."),
      q("Which date should the entry use?", ["The date you type it", "The transaction date", "The end of the month", "Any date"], 1, "Use the date the transaction happened."),
      q("Should you record a purchase from a supplier's quote?", ["Yes", "No — use the actual bill or receipt", "Only if it's large", "Only at year-end"], 1, "A quote isn't a transaction."),
      q("What is an audit trail?", ["A list of auditors", "The link from reports back to source documents", "A tax form", "A bank account"], 1, "It lets numbers be traced to their evidence."),
    ),
  ],
  2: [
    screen(
      "Cash and credit sales",
      h("Cash sale of $450"),
      journal([["Cash", "$450", ""], ["Sales", "", "$450"]], "$450"),
      h("Credit sale of $2,000 (invoice 1187)"),
      journal([["Accounts receivable", "$2,000", ""], ["Sales", "", "$2,000"]], "$2,000"),
      h("Customer pays invoice 1187"),
      journal([["Cash", "$2,000", ""], ["Accounts receivable", "", "$2,000"]], "$2,000"),
      note("If you collect sales tax, GST or VAT, the tax is credited to a separate tax payable account — it isn't your income."),
    ),
    screen(
      "Sales returns and discounts",
      h("Customer returns $300 of goods from a credit sale"),
      journal([["Sales returns", "$300", ""], ["Accounts receivable", "", "$300"]], "$300"),
      h("Customer pays a $1,000 invoice early and takes a 2% discount"),
      journal([["Cash", "$980", ""], ["Sales discounts", "$20", ""], ["Accounts receivable", "", "$1,000"]], "$1,000"),
      tip("Contra-revenue accounts", "Sales returns and sales discounts are recorded in their own accounts, which reduce sales on the profit and loss. That keeps the size of returns and discounts visible."),
    ),
    screen(
      "Deposits received in advance",
      p("When a customer pays before you deliver, you haven't earned the money yet. It's a liability — you owe the customer the work or a refund."),
      h("Customer pays a $1,500 deposit for a job next month"),
      journal([["Cash", "$1,500", ""], ["Customer deposits (unearned revenue)", "", "$1,500"]], "$1,500"),
      h("Job completed"),
      journal([["Customer deposits (unearned revenue)", "$1,500", ""], ["Sales", "", "$1,500"]], "$1,500"),
    ),
    check(
      3,
      q("A $2,000 credit sale is made. Which account is debited?", ["Cash", "Sales", "Accounts receivable", "Unearned revenue"], 2, "The customer owes you, so receivables increase."),
      q("A customer pays a $1,000 invoice and takes a 2% early-payment discount. How much cash is received?", ["$1,000", "$980", "$1,020", "$800"], 1, "$1,000 less 2% ($20) = $980."),
      q("Where is a sales return recorded?", ["Debit Sales returns", "Credit Sales returns", "Debit Cash", "Credit Inventory only"], 0, "Sales returns is a contra-revenue account increased with a debit."),
      q("A customer pays a deposit before the work is done. What is credited?", ["Sales", "Unearned revenue (a liability)", "Accounts receivable", "Owner's capital"], 1, "The money isn't earned yet, so it's a liability."),
      q("Is sales tax collected from customers part of your income?", ["Yes", "No — it's a liability to the tax authority", "Only if it's small", "Only at year-end"], 1, "Collected tax is owed to the government."),
    ),
  ],
  3: [
    screen(
      "Expense and inventory purchases",
      h("Electricity bill of $310, to be paid later"),
      journal([["Utilities", "$310", ""], ["Accounts payable", "", "$310"]], "$310"),
      h("Stock for resale bought on credit, $4,000"),
      journal([["Inventory", "$4,000", ""], ["Accounts payable", "", "$4,000"]], "$4,000"),
      note("This uses a perpetual inventory system, where stock is an asset until sold. When it's sold, its cost moves from Inventory to Cost of goods sold."),
    ),
    screen(
      "Asset purchases",
      p("Items that will be used for more than a year and cost more than the business's capitalisation threshold are recorded as fixed assets, not expenses."),
      h("Delivery van bought for $28,000, paid $8,000 cash and the rest by loan"),
      journal([["Vehicles", "$28,000", ""], ["Cash", "", "$8,000"], ["Vehicle loan", "", "$20,000"]], "$28,000"),
      tip("Capitalisation policy", "Many businesses set a threshold (e.g. items over $2,500) below which equipment is expensed. Agree it with the accountant and apply it consistently."),
    ),
    screen(
      "Paying suppliers and purchase returns",
      h("Pay the $4,000 stock bill"),
      journal([["Accounts payable", "$4,000", ""], ["Cash", "", "$4,000"]], "$4,000"),
      h("Return $500 of faulty stock to the supplier for credit"),
      journal([["Accounts payable", "$500", ""], ["Inventory", "", "$500"]], "$500"),
      caution("Pay from the bill, not the statement, and check the bill hasn't already been paid. Duplicate payments are one of the most common payables errors."),
    ),
    check(
      4,
      q("An electricity bill of $310 is received, to be paid later. What is credited?", ["Cash", "Utilities", "Accounts payable", "Inventory"], 2, "You owe the supplier."),
      q("Under a perpetual system, stock for resale is first recorded as:", ["An expense", "Inventory (an asset)", "Revenue", "A liability"], 1, "Stock stays an asset until sold."),
      q("A $28,000 van is bought with $8,000 cash and a $20,000 loan. What is debited?", ["Vehicles $28,000", "Cash $8,000", "Vehicle loan $20,000", "Vehicle expense $28,000"], 0, "The full cost of the van is an asset."),
      q("$500 of stock is returned to a supplier for credit. Which account is debited?", ["Inventory", "Accounts payable", "Cash", "Sales"], 1, "You now owe the supplier less."),
      q("Why pay from the bill rather than the supplier's statement?", ["To avoid paying the same bill twice", "Statements are illegal", "Bills are cheaper", "No reason"], 0, "Paying from statements risks duplicate payments."),
    ),
  ],
  4: [
    screen(
      "Compound entries",
      p("A compound entry has more than two lines. It's still balanced: total debits equal total credits."),
      h("Pay $1,800 of wages: $1,500 net to the employee, $300 tax withheld"),
      journal([["Wages expense", "$1,800", ""], ["Cash", "", "$1,500"], ["Payroll tax withheld", "", "$300"]], "$1,800"),
    ),
    screen(
      "Loan repayments: principal and interest",
      p("A loan repayment usually contains interest (an expense) and principal (reducing the loan). Use the lender's schedule to split it."),
      h("Monthly payment of $1,500: $1,200 principal, $300 interest"),
      journal([["Loan payable", "$1,200", ""], ["Interest expense", "$300", ""], ["Cash", "", "$1,500"]], "$1,500"),
      caution("Recording the whole repayment as an expense overstates expenses and leaves the loan balance too high."),
    ),
    screen(
      "Owners and bank transfers",
      table(
        ["Transaction", "Debit", "Credit"],
        [
          ["Owner puts $5,000 into the business", "Cash", "Owner's capital"],
          ["Owner takes $600 for personal use", "Owner's drawings", "Cash"],
          ["Move $3,000 from checking to savings", "Savings account", "Checking account"],
          ["Pay $900 credit card bill from checking", "Credit card (liability)", "Checking account"],
        ],
      ),
      tip("Transfers aren't income or expenses", "Moving money between your own accounts changes where it sits, not how much you have. Record both sides in balance sheet accounts."),
    ),
    check(
      5,
      q("What makes an entry compound?", ["It has more than two lines", "It involves cash", "It's over $1,000", "It's at month-end"], 0, "Compound entries have three or more lines."),
      q("A $1,500 loan payment includes $300 interest. How much reduces the loan?", ["$1,500", "$1,200", "$300", "$1,800"], 1, "$1,500 − $300 interest = $1,200 principal."),
      q("Where does loan interest go?", ["Loan payable", "Interest expense", "Owner's drawings", "Revenue"], 1, "Interest is an expense."),
      q("The owner takes $600 for personal use. What is debited?", ["Wages", "Owner's drawings", "Owner's capital", "Cash"], 1, "Personal withdrawals are drawings."),
      q("$3,000 moves from checking to savings. What is the effect on profit?", ["Profit rises", "Profit falls", "No effect", "Depends on the bank"], 2, "Transfers between your own accounts don't affect profit."),
    ),
  ],
  5: [
    screen(
      "Posting to the ledger",
      p("Posting copies each journal line into the matching ledger account, keeping a running balance."),
      table(
        ["Date", "Ref", "Description", "Debit", "Credit", "Balance"],
        [
          ["Mar 1", "JE-01", "Opening balance", "", "", "$6,000 Dr"],
          ["Mar 3", "JE-02", "Cash sale", "$450", "", "$6,450 Dr"],
          ["Mar 5", "JE-03", "Pay ABC Supplies", "", "$4,000", "$2,450 Dr"],
          ["Mar 9", "JE-04", "Customer payment 1187", "$2,000", "", "$4,450 Dr"],
        ],
        { numeric: [3, 4, 5] },
      ),
      note("The reference column links each ledger line back to its journal entry."),
    ),
    screen(
      "Special journals",
      p("Manual systems with many similar transactions use special journals to save time. Each one records one type of transaction, and only the column totals are posted at month-end."),
      terms(
        ["Sales journal", "All credit sales: date, invoice number, customer and amount."],
        ["Purchases journal", "All credit purchases from suppliers."],
        ["Cash receipts journal", "All money received."],
        ["Cash payments journal", "All money paid out."],
        ["General journal", "Everything else — adjustments, corrections and unusual items."],
      ),
    ),
    screen(
      "Checking and correcting entries",
      h("Self-review checklist"),
      bullets(
        "Do debits equal credits?",
        "Is each account the right type for what happened?",
        "Do the amount and date match the source document?",
        "Is the description clear, with a reference?",
        "Has this transaction already been recorded?",
      ),
      h("Correcting a posted entry"),
      p("A $350 phone bill was posted to Rent expense. Rather than deleting it, record a correction:"),
      journal([["Telephone expense", "$350", ""], ["Rent expense", "", "$350"]], "$350"),
      tip("Reverse and re-enter", "For a badly wrong entry, it's often clearer to reverse it in full and then record the correct entry, with descriptions referring to each other."),
    ),
    check(
      6,
      q("What does posting mean?", ["Mailing invoices", "Copying journal lines into ledger accounts", "Filing tax returns", "Paying bills"], 1, "Posting moves each journal line into its ledger account."),
      q("Cash has a $2,450 debit balance and a $2,000 receipt is posted. What is the new balance?", ["$450 Dr", "$4,450 Dr", "$4,450 Cr", "$2,000 Dr"], 1, "$2,450 + $2,000 = $4,450 debit."),
      q("Which special journal records all credit sales?", ["Purchases journal", "Sales journal", "Cash payments journal", "General journal"], 1, "The sales journal lists credit sales."),
      q("A phone bill was posted to Rent expense. What is the correction?", ["Debit Rent, credit Telephone", "Debit Telephone, credit Rent", "Delete the entry", "Debit Cash, credit Rent"], 1, "Move the amount from Rent to Telephone."),
      q("Which is NOT part of a self-review?", ["Debits equal credits", "Amount matches the document", "The entry is in a nice font", "The description is clear"], 2, "Formatting isn't an accuracy check."),
    ),
  ],
}

export default lessons
