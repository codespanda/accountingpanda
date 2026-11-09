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

// Recording Journal Entries — lesson screens by module index (0 = Module 1).
// The course follows Bloom & Co, a florist, through June. Sales tax is
// assumed at 8% where it applies.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The General Journal",
      ["Before a transaction reaches the ledger, it's written up as a journal entry. In this module you'll learn what the general journal is and how to write a clear, complete entry."],
      ["Explain the purpose of the general journal", "Name the parts of a journal entry", "Write clear entry descriptions", "Use dates, references and supporting documents correctly"],
    ),
    screen(
      "Meet Bloom & Co",
      p("Bloom & Co is a florist run by Ana. It sells bouquets in its shop, supplies flowers to hotels on credit, and does wedding arrangements."),
      p("Throughout this course you'll record Bloom & Co's June transactions as journal entries."),
      note("Bloom & Co collects sales tax, assumed at 8% in this course. Tax rules and rates vary by location."),
    ),
    screen(
      "Purpose of the general journal",
      p("The general journal is the book of original entry: transactions are recorded here first, in date order, before being posted to the ledger accounts."),
      bullets(
        "It shows each transaction complete in one place — every debit and credit together.",
        "It gives a date-ordered history of what happened.",
        "It links each entry to its supporting document.",
        "It makes errors easier to find, because each entry can be checked on its own.",
      ),
    ),
    screen(
      "Journal vs. ledger",
      compare(
        ["Journal", "Records each transaction in date order, with both sides together.", ["“What happened on June 3?”"]],
        ["Ledger", "Groups the same entries by account, with running balances.", ["“What's the Cash balance?”"]],
      ),
      p("Every journal entry is later posted to the ledger. You'll practise posting in Module 6."),
    ),
    screen(
      "Parts of a journal entry",
      table(
        ["Part", "Example"],
        [
          ["Date", "June 3"],
          ["Entry number / reference", "JE-0601 · Receipt 4471"],
          ["Account debited and amount", "Office supplies $85"],
          ["Account credited and amount", "Cash $85"],
          ["Description", "Ribbon and gift cards — Craft Depot receipt 4471"],
        ],
      ),
      h("The same entry in journal form"),
      journal([["Office supplies", "$85", ""], ["Cash", "", "$85"]], "$85"),
      note("By convention, debit lines are listed first and credit lines after them."),
    ),
    screen(
      "Dates, references and supporting documents",
      terms(
        ["Date", "The date the transaction happened — not the date you entered it."],
        ["Reference", "A journal number plus the document number (invoice, bill or receipt)."],
        ["Supporting document", "The evidence behind the entry, attached in the software or filed with the reference."],
      ),
      caution("Using the wrong date can put a transaction in the wrong month and distort that month's results."),
    ),
    screen(
      "Writing clear descriptions",
      table(
        ["Weak description", "Clear description"],
        [
          ["Payment", "Payment to Dutch Blooms — bill 7781 (June roses)"],
          ["Adjustment", "Accrue June electricity — bill not yet received"],
          ["Misc", "Reclass laptop from Office supplies to Equipment (JE-0598 error)"],
        ],
      ),
      tip("The six-month test", "Write each description so someone — including you — could understand the entry six months from now without asking anyone."),
    ),
    screen(
      "Journals in accounting software",
      bullets(
        "Invoices, bills, receipts and bank transactions create journal entries automatically behind the scenes.",
        "You still write manual journal entries for adjustments, corrections, accruals and unusual items.",
        "Software checks that debits equal credits before saving a manual journal.",
      ),
      note("Understanding the entries behind each form helps you spot when something has been coded wrongly."),
    ),
    mistakes(
      ["Vague descriptions", "Say who, what and which document."],
      ["Wrong date", "Use the transaction date."],
      ["No reference", "Every entry should link to its evidence."],
      ["Debits not equal to credits", "Always check the totals before saving."],
    ),
    check(
      1,
      q("What is the general journal?", ["A list of customers", "The book where transactions are first recorded in date order", "A bank statement", "The trial balance"], 1, "It's the book of original entry."),
      q("Which lines are usually listed first in a journal entry?", ["Credits", "Debits", "Descriptions", "Totals"], 1, "Debits first, then credits."),
      q("Which is the clearest description?", ["Payment", "Misc", "Payment to Dutch Blooms — bill 7781 (June roses)", "Adjustment"], 2, "It says who, what and which document."),
      q("What date should a journal entry use?", ["The date it's typed", "The date the transaction happened", "The end of the month", "Any date"], 1, "The transaction date."),
      q("How does the ledger differ from the journal?", ["It groups entries by account with running balances", "It lists only cash", "It's for customers only", "It has no amounts"], 0, "The journal is date order; the ledger is by account."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Write an entry",
          ["On June 2, Bloom & Co pays $120 cash for a window cleaning service (receipt 0912). Write the journal entry with a description and reference."],
          ["June 2 · JE-0602 · Receipt 0912", "Dr Cleaning expense $120 · Cr Cash $120", "Description: Window cleaning — ShineCo receipt 0912."],
        ],
        [
          "Exercise 2 — Improve descriptions",
          ["Rewrite: (a) “stuff”, (b) “paid”, (c) “fix”."],
          ["Examples: (a) “Florist foam and wire — Craft Depot receipt 4480”. (b) “Payment to City Power — June electricity, bill 55621”. (c) “Correct June 4 entry: van fuel posted to Rent (JE-0604)”."],
        ],
      ),
    ),
    summary(
      ["The purpose of the general journal", "How the journal differs from the ledger", "The parts of a journal entry", "Dates, references and supporting documents", "Writing clear descriptions", "Journals in accounting software"],
      "A good journal entry is balanced, dated correctly, referenced and clearly described.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Source Documents",
      ["Every journal entry starts with evidence. This module covers the source documents bookkeepers use most and how to read them to write the right entry."],
      ["Use sales invoices and receipts", "Use supplier bills", "Use bank statements", "Use payroll reports", "Keep an audit trail"],
    ),
    screen(
      "What a source document is",
      p("A source document is the original evidence that a transaction happened. It shows the date, the parties, what was bought or sold, and the amount."),
      table(
        ["Document", "Created by", "Records"],
        [
          ["Sales invoice", "You, for a customer", "A credit sale"],
          ["Sales receipt", "You, when paid on the spot", "A cash or card sale"],
          ["Supplier bill", "The supplier", "A purchase you owe"],
          ["Bank statement", "The bank", "Fees, interest, transfers and automatic payments"],
          ["Payroll report", "Payroll system", "Wages, deductions and employer costs"],
        ],
      ),
    ),
    screen(
      "Sales invoices and receipts",
      terms(
        ["Sales invoice", "Bloom & Co invoice 3101 to Hotel Grand: weekly lobby flowers $2,000 + $160 sales tax, due in 30 days."],
        ["Sales receipt", "A walk-in customer pays $540 for a bouquet ($500 + $40 tax) by card."],
      ),
      table(
        ["Document", "Customer pays", "Creates a receivable?"],
        [
          ["Sales invoice", "Later", "Yes"],
          ["Sales receipt", "Now", "No"],
        ],
      ),
    ),
    screen(
      "Supplier bills",
      p("A supplier bill (purchase invoice) asks Bloom & Co to pay for goods or services it has received."),
      table(
        ["Field", "Dutch Blooms bill 7781"],
        [
          ["Supplier", "Dutch Blooms Wholesale"],
          ["Date and due date", "June 4 · due June 14 (2/10, net 30)"],
          ["Items", "Roses and tulips for resale"],
          ["Amount", "$3,000"],
        ],
      ),
      caution("A supplier statement, quote or reminder is not a bill. Record purchases from the actual bill, so nothing is entered twice or too early."),
    ),
    screen(
      "Bank statements",
      p("The bank statement is the source for items only the bank knows about:"),
      bullets(
        "Monthly account fees and card processing fees.",
        "Interest earned or charged.",
        "Automatic payments (direct debits) such as insurance or loan repayments.",
        "Customer payments made by bank transfer.",
      ),
      tip("Match before you enter", "Many bank lines match invoices or bills already recorded. Only create new entries for items not yet in the books."),
    ),
    screen(
      "Payroll reports",
      p("A payroll report shows, for each pay run, gross pay, each deduction, net pay and employer costs. It's the source for the payroll journal entry."),
      table(
        ["Bloom & Co — June pay run", "Amount"],
        [
          ["Gross wages", "$2,400"],
          ["Tax withheld", "$360"],
          ["Net pay to staff", "$2,040"],
        ],
        { numeric: [1] },
      ),
      note("You'll record this as a compound entry in Module 5."),
    ),
    screen(
      "Reading a document for the entry",
      steps(
        ["Who", "Customer or supplier name."],
        ["When", "The transaction date."],
        ["What", "The goods or services — this decides the account."],
        ["How much", "Net amount, any tax, and the total."],
        ["Paid or not", "Cash now, or a receivable or payable?"],
      ),
    ),
    screen(
      "Keeping an audit trail",
      p("An audit trail lets anyone follow a number in the reports back to the original document — and forward again."),
      bullets(
        "Attach documents to transactions in your software, or file them with the entry reference.",
        "Use consistent file names, e.g. 2026-06-04_DutchBlooms_7781.pdf.",
        "Never alter a document; record corrections with a new entry.",
        "Keep records for as long as tax law and your accountant require — often several years.",
      ),
    ),
    mistakes(
      ["Recording from a quote or statement", "Use the actual bill or invoice."],
      ["Missing documents", "Chase them before recording."],
      ["Using the bank statement for items already recorded", "Match first to avoid duplicates."],
      ["Poor filing", "If you can't find the evidence, you can't prove the entry."],
    ),
    check(
      2,
      q("Which document records a sale where the customer pays later?", ["Sales receipt", "Sales invoice", "Bank statement", "Quote"], 1, "An invoice creates a receivable."),
      q("Which document is usually the source for bank fees?", ["Supplier bill", "Bank statement", "Payroll report", "Sales invoice"], 1, "Only the bank knows its fees."),
      q("Should you record a purchase from a supplier's quote?", ["Yes", "No — use the actual bill or receipt", "Only if it's large", "Only at year-end"], 1, "A quote isn't a transaction."),
      q("Bloom & Co's June pay run shows gross wages of $2,400 and tax withheld of $360. What is net pay?", ["$2,760", "$2,040", "$2,400", "$360"], 1, "$2,400 − $360."),
      q("What is an audit trail?", ["A list of auditors", "The link from reports back to source documents", "A tax form", "A bank account"], 1, "It lets numbers be traced to evidence."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which document?",
          ["Name the source document for: (a) a hotel billed for weekly flowers, (b) a walk-in card sale, (c) a $15 bank fee, (d) a delivery of vases billed by a supplier."],
          ["(a) Sales invoice. (b) Sales receipt. (c) Bank statement. (d) Supplier bill."],
        ],
        [
          "Exercise 2 — Read the bill",
          ["From Dutch Blooms bill 7781, list who, when, what, how much and paid or not."],
          ["Who: Dutch Blooms Wholesale. When: June 4. What: roses and tulips for resale. How much: $3,000. Paid or not: not yet — due by June 14 for the discount, or within 30 days."],
        ],
      ),
    ),
    summary(
      ["What source documents are", "Sales invoices and receipts", "Supplier bills", "Bank statements", "Payroll reports", "Reading documents and keeping an audit trail"],
      "No document, no entry. Good evidence is what makes every number in the books defensible.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Recording Sales and Receipts",
      ["Sales are the lifeblood of Bloom & Co. In this module you'll record cash sales, credit sales, customer payments, returns, discounts and deposits."],
      ["Record cash sales with sales tax", "Record credit sales", "Record full and partial customer payments", "Record sales returns and discounts", "Record deposits received in advance"],
    ),
    screen(
      "Cash sales",
      p("A walk-in customer buys a $500 bouquet plus 8% sales tax and pays by card."),
      journal([["Cash", "$540", ""], ["Sales", "", "$500"], ["Sales tax payable", "", "$40"]], "$540"),
      note("The $40 tax isn't Bloom & Co's income. It's owed to the tax authority, so it's credited to a liability."),
    ),
    screen(
      "Credit sales",
      p("Invoice 3101 to Hotel Grand for $2,000 of lobby flowers plus $160 tax, due in 30 days."),
      journal([["Accounts receivable — Hotel Grand", "$2,160", ""], ["Sales", "", "$2,000"], ["Sales tax payable", "", "$160"]], "$2,160"),
      p("The sale is recorded when the invoice is issued, even though cash arrives later."),
    ),
    screen(
      "Customer payments",
      h("Hotel Grand pays $1,000 on June 20"),
      journal([["Cash", "$1,000", ""], ["Accounts receivable — Hotel Grand", "", "$1,000"]], "$1,000"),
      h("Hotel Grand pays the remaining $1,160 on June 28"),
      journal([["Cash", "$1,160", ""], ["Accounts receivable — Hotel Grand", "", "$1,160"]], "$1,160"),
      caution("Don't credit Sales when a customer pays. The sale was already recorded on the invoice."),
    ),
    screen(
      "Sales returns",
      p("A customer returns a $200 arrangement (plus $16 tax) bought on credit. Bloom & Co issues a credit note."),
      journal([["Sales returns", "$200", ""], ["Sales tax payable", "$16", ""], ["Accounts receivable", "", "$216"]], "$216"),
      tip("Why a separate account?", "Sales returns is a contra-revenue account. It reduces sales on the profit and loss while keeping the size of returns visible."),
    ),
    screen(
      "Early-payment discounts",
      p("A café owes $1,000 (ignore tax for this example) on terms of 2/10, net 30. It pays within 10 days and takes the 2% discount."),
      journal([["Cash", "$980", ""], ["Sales discounts", "$20", ""], ["Accounts receivable", "", "$1,000"]], "$1,000"),
      note("Sales discounts, like sales returns, reduce revenue on the profit and loss."),
    ),
    screen(
      "Deposits received in advance",
      p("A couple pays a $1,500 deposit on June 10 for wedding flowers in August. Bloom & Co hasn't earned it yet."),
      journal([["Cash", "$1,500", ""], ["Customer deposits (liability)", "", "$1,500"]], "$1,500"),
      p("In August, when the wedding flowers are delivered and invoiced, the deposit is applied to the invoice and the revenue is recognised."),
      caution("Recording a deposit as sales overstates June's revenue."),
    ),
    screen(
      "Worked example: a week of sales",
      table(
        ["Date", "Transaction", "Debit", "Credit"],
        [
          ["Jun 1", "Card sale $500 + $40 tax", "Cash $540", "Sales $500 · Sales tax payable $40"],
          ["Jun 3", "Invoice 3101 to Hotel Grand", "AR $2,160", "Sales $2,000 · Sales tax payable $160"],
          ["Jun 5", "Return $200 + $16 tax", "Sales returns $200 · Sales tax payable $16", "AR $216"],
          ["Jun 10", "Wedding deposit", "Cash $1,500", "Customer deposits $1,500"],
        ],
      ),
      p("Net sales for the week: $500 + $2,000 − $200 = $2,300. The deposit isn't revenue yet."),
    ),
    mistakes(
      ["Recording customer payments as sales", "Revenue was recorded on the invoice."],
      ["Including sales tax in revenue", "Credit it to Sales tax payable."],
      ["Recording deposits as revenue", "Use a customer deposits liability."],
      ["Reducing Sales directly for returns", "Use Sales returns so they stay visible."],
    ),
    check(
      3,
      q("A $500 bouquet is sold with 8% sales tax. How much is credited to Sales?", ["$540", "$500", "$40", "$460"], 1, "Only the net amount is revenue."),
      q("A credit sale is invoiced. Which account is debited?", ["Cash", "Sales", "Accounts receivable", "Customer deposits"], 2, "The customer owes the business."),
      q("Hotel Grand pays $1,000 of a $2,160 invoice. How much is still owed?", ["$0", "$1,000", "$1,160", "$2,160"], 2, "$2,160 − $1,000."),
      q("A customer pays a $1,000 invoice early with a 2% discount. How much cash is received?", ["$1,000", "$980", "$1,020", "$800"], 1, "$1,000 less $20."),
      q("A $1,500 wedding deposit is received in June for August. What is credited?", ["Sales", "Customer deposits (liability)", "Accounts receivable", "Owner's capital"], 1, "It isn't earned yet."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Credit sale",
          ["Bloom & Co invoices a restaurant $800 plus 8% tax. Write the entry."],
          ["Dr Accounts receivable $864 · Cr Sales $800 · Cr Sales tax payable $64."],
        ],
        [
          "Exercise 2 — Payment with discount",
          ["The restaurant owes $800 (ignore tax) on 2/10, net 30 and pays within 10 days. Write the entry."],
          ["Dr Cash $784 · Dr Sales discounts $16 · Cr Accounts receivable $800."],
        ],
        [
          "Exercise 3 — Applying a deposit",
          ["In August the $1,500 deposit is applied to a $4,000 wedding invoice (ignore tax). The couple pays the rest in cash. Write the entries."],
          ["Invoice: Dr Accounts receivable $4,000 · Cr Sales $4,000.", "Apply deposit: Dr Customer deposits $1,500 · Cr Accounts receivable $1,500.", "Payment: Dr Cash $2,500 · Cr Accounts receivable $2,500."],
        ],
      ),
    ),
    summary(
      ["Cash sales with sales tax", "Credit sales", "Full and partial customer payments", "Sales returns and credit notes", "Early-payment discounts", "Deposits received in advance"],
      "Record revenue when it's earned, keep tax separate, and treat payments as settling receivables — not as new sales.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Recording Purchases and Payments",
      ["Every florist needs flowers, vases and vans. This module covers how to record what Bloom & Co buys and how it pays for it."],
      ["Record expense purchases", "Record inventory purchases", "Record asset purchases", "Record payments to suppliers, including discounts", "Record purchase returns"],
    ),
    screen(
      "Expense purchases",
      p("June electricity bill of $310 from City Power, to be paid later:"),
      journal([["Utilities", "$310", ""], ["Accounts payable — City Power", "", "$310"]], "$310"),
      p("Ribbon and gift cards bought for $85 cash:"),
      journal([["Office supplies", "$85", ""], ["Cash", "", "$85"]], "$85"),
    ),
    screen(
      "Inventory purchases",
      p("Dutch Blooms bill 7781: roses and tulips for resale, $3,000 on credit."),
      journal([["Inventory", "$3,000", ""], ["Accounts payable — Dutch Blooms", "", "$3,000"]], "$3,000"),
      note("This uses a perpetual inventory system: stock is an asset until sold. When flowers are sold, their cost moves from Inventory to Cost of goods sold."),
    ),
    screen(
      "Asset purchases",
      p("Items used for more than a year and costing more than the business's capitalisation threshold are fixed assets, not expenses."),
      h("Delivery van for $28,000 — $8,000 cash and a $20,000 loan"),
      journal([["Vehicles", "$28,000", ""], ["Cash", "", "$8,000"], ["Vehicle loan", "", "$20,000"]], "$28,000"),
      tip("Capitalisation policy", "Many small businesses set a threshold (e.g. items over $2,500) below which equipment is expensed. Agree it with the accountant and apply it consistently."),
    ),
    screen(
      "Paying suppliers",
      p("City Power is paid the $310 bill:"),
      journal([["Accounts payable — City Power", "$310", ""], ["Cash", "", "$310"]], "$310"),
      caution("Pay from the bill, not from a statement, and check the bill hasn't already been paid. Duplicate payments are one of the most common payables errors."),
    ),
    screen(
      "Purchase returns",
      p("$250 of wilted roses from bill 7781 are returned to Dutch Blooms for credit:"),
      journal([["Accounts payable — Dutch Blooms", "$250", ""], ["Inventory", "", "$250"]], "$250"),
      p("Bloom & Co now owes Dutch Blooms $2,750."),
    ),
    screen(
      "Purchase discounts",
      p("Dutch Blooms offers 2/10, net 30. Bloom & Co pays the $2,750 balance within 10 days and takes a 2% discount of $55."),
      journal([["Accounts payable — Dutch Blooms", "$2,750", ""], ["Cash", "", "$2,695"], ["Purchase discounts", "", "$55"]], "$2,750"),
      tip("Worth taking?", "Saving 2% for paying 20 days early is equal to an annual return of roughly 37%. If cash allows, early-payment discounts are usually worth it."),
    ),
    screen(
      "Worked example: Dutch Blooms account",
      table(
        ["Date", "Transaction", "Debit", "Credit", "Balance owed"],
        [
          ["Jun 4", "Bill 7781", "", "$3,000", "$3,000"],
          ["Jun 6", "Return of wilted roses", "$250", "", "$2,750"],
          ["Jun 12", "Payment ($2,695 cash + $55 discount)", "$2,750", "", "$0"],
        ],
        { numeric: [2, 3, 4] },
      ),
    ),
    mistakes(
      ["Expensing a van or equipment", "Long-lasting items above the threshold are assets."],
      ["Recording stock for resale as an expense (perpetual system)", "Debit Inventory."],
      ["Recording a bill payment as a new expense", "Debit Accounts payable instead."],
      ["Forgetting purchase returns", "Reduce the amount owed and the inventory."],
    ),
    check(
      4,
      q("An electricity bill of $310 is received, to be paid later. What is credited?", ["Cash", "Utilities", "Accounts payable", "Inventory"], 2, "The business owes City Power."),
      q("Under a perpetual system, flowers bought for resale are first recorded as:", ["An expense", "Inventory (an asset)", "Revenue", "A liability"], 1, "Stock stays an asset until sold."),
      q("A $28,000 van is bought with $8,000 cash and a $20,000 loan. What is debited?", ["Vehicles $28,000", "Cash $8,000", "Vehicle loan $20,000", "Vehicle expense $28,000"], 0, "The full cost is an asset."),
      q("$250 of flowers are returned to the supplier for credit. Which account is debited?", ["Inventory", "Accounts payable", "Cash", "Sales"], 1, "Bloom & Co owes less."),
      q("A $2,750 bill is paid with a 2% discount. How much cash is paid?", ["$2,750", "$2,695", "$2,805", "$55"], 1, "$2,750 − $55."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify and record",
          ["Write entries: (a) vases for resale $800 on credit from GlassWorks, (b) a $3,200 flower refrigerator paid in cash (above the $2,500 threshold), (c) a $95 phone bill paid in cash."],
          ["(a) Dr Inventory $800 · Cr Accounts payable $800.", "(b) Dr Equipment $3,200 · Cr Cash $3,200.", "(c) Dr Telephone expense $95 · Cr Cash $95."],
        ],
        [
          "Exercise 2 — Return and pay",
          ["Bloom & Co returns $100 of chipped vases to GlassWorks, then pays the balance within the discount period (2/10, net 30). Write both entries."],
          ["Return: Dr Accounts payable $100 · Cr Inventory $100.", "Payment: balance $700; discount $14. Dr Accounts payable $700 · Cr Cash $686 · Cr Purchase discounts $14."],
        ],
      ),
    ),
    summary(
      ["Expense purchases, cash and credit", "Inventory purchases under a perpetual system", "Asset purchases and capitalisation thresholds", "Paying suppliers", "Purchase returns", "Purchase discounts"],
      "Ask what was bought — an expense, stock or a long-term asset — then record how it was paid for.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Compound and Special Entries",
      ["Some transactions touch three or more accounts, or involve the owner, loans or transfers. This module covers these special cases."],
      ["Write compound entries", "Split loan repayments into principal and interest", "Record owner contributions and drawings, including non-cash items", "Record transfers between bank accounts and credit card payments"],
    ),
    screen(
      "Compound entries",
      p("A compound entry has more than two lines. It's still balanced: total debits equal total credits."),
      h("Bloom & Co's June pay run"),
      journal([["Wages expense", "$2,400", ""], ["Cash (net pay)", "", "$2,040"], ["Payroll tax withheld", "", "$360"]], "$2,400"),
      note("The $360 withheld is owed to the tax authority until it's paid over — a liability."),
    ),
    screen(
      "Loan repayments: principal and interest",
      p("Each monthly van loan payment of $1,000 includes interest. The lender's schedule shows June's payment is $850 principal and $150 interest."),
      journal([["Vehicle loan", "$850", ""], ["Interest expense", "$150", ""], ["Cash", "", "$1,000"]], "$1,000"),
      caution("Recording the whole repayment as an expense overstates expenses and leaves the loan balance too high."),
    ),
    screen(
      "Owner contributions",
      p("Owners can contribute cash or other assets."),
      h("Ana adds $5,000 cash"),
      journal([["Cash", "$5,000", ""], ["Owner's capital", "", "$5,000"]], "$5,000"),
      h("Ana gives the business her own laptop, worth $1,200"),
      journal([["Equipment", "$1,200", ""], ["Owner's capital", "", "$1,200"]], "$1,200"),
    ),
    screen(
      "Owner drawings",
      h("Ana withdraws $600 cash for personal use"),
      journal([["Owner's drawings", "$600", ""], ["Cash", "", "$600"]], "$600"),
      h("Ana takes flowers costing $60 home for a family event"),
      journal([["Owner's drawings", "$60", ""], ["Inventory", "", "$60"]], "$60"),
      note("Goods taken for personal use are drawings at cost — they aren't a sale and aren't a business expense."),
    ),
    screen(
      "Transfers and credit card payments",
      table(
        ["Transaction", "Debit", "Credit"],
        [
          ["Move $5,000 from checking to savings", "Savings account", "Checking account"],
          ["Pay the $900 business credit card bill", "Credit card (liability)", "Checking account"],
        ],
      ),
      tip("Transfers aren't income or expenses", "Moving money between the business's own accounts changes where it sits, not how much the business has. The expenses on the credit card were recorded when the purchases were made."),
    ),
    screen(
      "Worked example: a busy day",
      p("On June 30, Bloom & Co records:"),
      table(
        ["Transaction", "Debit", "Credit"],
        [
          ["Pay run", "Wages $2,400", "Cash $2,040 · Payroll tax withheld $360"],
          ["Loan payment", "Vehicle loan $850 · Interest $150", "Cash $1,000"],
          ["Transfer to savings", "Savings $5,000", "Checking $5,000"],
          ["Owner withdrawal", "Owner's drawings $600", "Cash $600"],
        ],
      ),
      p("Only wages ($2,400) and interest ($150) affect profit. The other items change balance sheet accounts only."),
    ),
    mistakes(
      ["Recording net pay as the wage expense", "Wages expense is gross pay."],
      ["Expensing the full loan repayment", "Only interest is an expense."],
      ["Recording owner contributions as revenue", "They're equity."],
      ["Recording transfers as income or expense", "Both sides are balance sheet accounts."],
    ),
    check(
      5,
      q("What makes an entry compound?", ["It has more than two lines", "It involves cash", "It's over $1,000", "It's at month-end"], 0, "Three or more lines."),
      q("A $1,000 loan payment includes $150 interest. How much reduces the loan?", ["$1,000", "$850", "$150", "$1,150"], 1, "$1,000 − $150."),
      q("Ana gives the business a laptop worth $1,200. What is credited?", ["Equipment", "Revenue", "Owner's capital", "Cash"], 2, "It's an owner contribution."),
      q("Ana takes flowers costing $60 for personal use. What is debited?", ["Sales", "Cost of goods sold", "Owner's drawings", "Inventory"], 2, "Goods taken are drawings at cost."),
      q("$5,000 moves from checking to savings. What is the effect on profit?", ["Profit rises", "Profit falls", "No effect", "Depends on the bank"], 2, "Transfers don't affect profit."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Pay run",
          ["Gross wages $3,000, tax withheld $450, retirement contributions withheld $150. Write the entry."],
          ["Dr Wages expense $3,000 · Cr Cash $2,400 · Cr Payroll tax withheld $450 · Cr Retirement contributions payable $150."],
        ],
        [
          "Exercise 2 — Mixed entries",
          ["Write entries: (a) Ana contributes a $2,000 display cabinet, (b) the $640 credit card bill is paid, (c) a $1,000 loan payment with $140 interest."],
          ["(a) Dr Furniture and fixtures $2,000 · Cr Owner's capital $2,000.", "(b) Dr Credit card $640 · Cr Checking $640.", "(c) Dr Vehicle loan $860 · Dr Interest expense $140 · Cr Cash $1,000."],
        ],
      ),
    ),
    summary(
      ["Compound entries such as payroll", "Splitting loan repayments into principal and interest", "Owner contributions of cash and assets", "Owner drawings of cash and goods", "Transfers between accounts and credit card payments"],
      "However many lines an entry has, the debits must equal the credits — and only true income and expenses affect profit.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Posting and Reviewing",
      ["Once entries are journalised, they're posted to the ledger and checked. This module covers posting, special journals and how to review and correct your own work."],
      ["Post journal entries to the ledger", "Explain special journals and control accounts", "Check your own entries", "Correct a posted entry"],
    ),
    screen(
      "Posting journal entries to the ledger",
      steps(
        ["Find the account", "Locate the ledger account for each journal line."],
        ["Post on the same side", "A journal debit is posted as a ledger debit; a credit as a credit."],
        ["Record the date and reference", "So the ledger line can be traced back."],
        ["Update the balance", "Calculate the running balance."],
      ),
    ),
    screen(
      "Example: Bloom & Co's Cash account",
      table(
        ["Date", "Ref", "Description", "Debit", "Credit", "Balance"],
        [
          ["Jun 1", "", "Opening balance", "", "", "$12,000"],
          ["Jun 1", "JE-0601", "Card sale", "$540", "", "$12,540"],
          ["Jun 10", "JE-0610", "Wedding deposit", "$1,500", "", "$14,040"],
          ["Jun 12", "JE-0612", "Paid Dutch Blooms", "", "$2,695", "$11,345"],
          ["Jun 20", "JE-0620", "Hotel Grand part payment", "$1,000", "", "$12,345"],
        ],
        { numeric: [3, 4, 5] },
      ),
      note("The reference column links each ledger line back to its journal entry."),
    ),
    screen(
      "Special journals",
      p("Manual systems with many similar transactions use special journals. Each records one type of transaction, and only the column totals are posted at month-end."),
      terms(
        ["Sales journal", "All credit sales: date, invoice number, customer and amount."],
        ["Purchases journal", "All credit purchases from suppliers."],
        ["Cash receipts journal", "All money received."],
        ["Cash payments journal", "All money paid out."],
        ["General journal", "Everything else — adjustments, corrections and unusual items."],
      ),
    ),
    screen(
      "Control accounts and subledgers",
      p("Accounts receivable and accounts payable are control accounts. Each customer and supplier also has its own account in a subledger."),
      table(
        ["Accounts receivable subledger", "Balance"],
        [
          ["Hotel Grand", "$0"],
          ["Riverside Café", "$864"],
          ["Lakeview Restaurant", "$1,296"],
        ],
        { footer: ["Total = AR control account", "$2,160"], numeric: [1] },
      ),
      tip("They must agree", "The subledger total should always equal the control account. A difference usually means an entry was posted to one but not the other."),
    ),
    screen(
      "Checking your own entries",
      bullets(
        "Do debits equal credits?",
        "Is each account the right type for what happened?",
        "Do the amount and date match the source document?",
        "Is sales tax in the right account?",
        "Is the description clear, with a reference?",
        "Has this transaction already been recorded?",
      ),
    ),
    screen(
      "Correcting a posted entry",
      p("A $95 phone bill was posted to Rent expense. Don't delete it — record a correction:"),
      journal([["Telephone expense", "$95", ""], ["Rent expense", "", "$95"]], "$95"),
      compare(
        ["Correcting entry", "Moves the amount from the wrong account to the right one.", ["Best for simple account errors"]],
        ["Reverse and re-enter", "Reverse the whole entry, then record it correctly.", ["Clearer when several things are wrong"]],
      ),
      caution("In closed periods, get approval before correcting, and make the correction in the current period if the earlier one is locked."),
    ),
    mistakes(
      ["Posting to the wrong side", "Follow the journal: debits to debits, credits to credits."],
      ["Posting to the control account only", "Update the customer or supplier subledger too."],
      ["Deleting a wrong entry", "Correct it with a new entry."],
      ["Skipping self-review", "Most errors are caught by a quick check."],
    ),
    check(
      6,
      q("What does posting mean?", ["Mailing invoices", "Copying journal lines into ledger accounts", "Filing tax returns", "Paying bills"], 1, "Each line goes to its ledger account."),
      q("Cash has a $12,345 debit balance and $1,160 is received. What is the new balance?", ["$11,185", "$13,505", "$1,160", "$12,345"], 1, "$12,345 + $1,160."),
      q("Which special journal records all credit sales?", ["Purchases journal", "Sales journal", "Cash payments journal", "General journal"], 1, "The sales journal."),
      q("What should the AR subledger total equal?", ["Total sales", "The AR control account", "Cash", "Accounts payable"], 1, "Control account and subledger must agree."),
      q("A phone bill was posted to Rent expense. What is the correction?", ["Dr Rent, Cr Telephone", "Dr Telephone expense, Cr Rent expense", "Delete the entry", "Dr Cash, Cr Rent"], 1, "Move it to the right account."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Post and balance",
          ["Continue Bloom & Co's Cash account from $12,345: Jun 28 Hotel Grand pays $1,160; Jun 30 pay run net $2,040; Jun 30 loan payment $1,000. What is the closing balance?"],
          ["$12,345 + $1,160 − $2,040 − $1,000 = $10,465."],
        ],
        [
          "Exercise 2 — Find and fix",
          ["The AR control account shows $2,500, but the subledger totals $2,160. On checking, a $340 credit sale to Riverside Café was posted to the control account but not to the customer's account. What's the fix?"],
          ["Post the $340 to Riverside Café's subledger account. No new journal entry is needed — the control account is already correct."],
        ],
      ),
    ),
    summary(
      ["Posting journal entries to the ledger", "Reading a ledger account with running balances", "Special journals", "Control accounts and subledgers", "Checking your own entries", "Correcting posted entries"],
      "Post carefully, review every entry, and correct mistakes with new entries so the audit trail stays complete.",
    ),
  ],
}

export default lessons
