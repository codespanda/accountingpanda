import { fq } from "@/lib/finalTest"

// Final test bank for Recording Journal Entries — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles
// the options.

export default [
  // Module 1
  fq("Which question does the journal answer more easily than the ledger?", "What happened on a particular date?", ["What is the cash balance?", "How much does a customer owe?", "What is total rent for the year?"], "The journal is in date order; the ledger is by account."),
  fq("What does accounting software do before saving a manual journal?", "Checks that debits equal credits", ["Emails the bank", "Files a tax return", "Deletes old entries"], "Unbalanced journals can't be saved."),
  fq("Which item is part of a journal entry reference?", "The journal number and the source document number", ["The bank's phone number", "The customer's birthday", "The tax rate"], "References link entries to evidence."),
  fq("Bloom & Co pays $120 cash for window cleaning. What is credited?", "Cash", ["Cleaning expense", "Accounts payable", "Owner's capital"], "The cleaning expense is debited."),
  fq("Which description passes the six-month test?", "Window cleaning — ShineCo receipt 0912", ["Paid", "Stuff", "Fix"], "It says who, what and which document."),
  fq("When are manual journal entries still needed in software?", "For adjustments, corrections, accruals and unusual items", ["For every customer invoice", "For every bank deposit", "Never"], "Routine forms create entries automatically."),

  // Module 2
  fq("Which document records a walk-in customer's card payment?", "A sales receipt", ["A sales invoice", "A supplier bill", "A payroll report"], "Paid on the spot."),
  fq("What terms did Dutch Blooms offer on bill 7781?", "2/10, net 30", ["Net 7", "Due on receipt", "1/15, net 60"], "A 2% discount for paying within 10 days."),
  fq("What is the source for a customer's payment made by bank transfer?", "The bank statement (matched to the invoice)", ["A supplier bill", "A payroll report", "A sales quote"], "Match it to the open invoice."),
  fq("What does a payroll report show for each pay run?", "Gross pay, deductions, net pay and employer costs", ["Only net pay", "Only bank fees", "Only customer balances"], "It's the source for the payroll entry."),
  fq("Which file name follows good practice?", "2026-06-04_DutchBlooms_7781.pdf", ["scan1.pdf", "bill.pdf", "new.pdf"], "Consistent names make documents easy to find."),
  fq("What should you do if a document is missing?", "Chase it before recording the entry", ["Record an estimate and move on", "Skip the transaction", "Use a quote instead"], "No document, no entry."),

  // Module 3
  fq("Bloom & Co sells an $800 arrangement on credit plus 8% tax. What is debited?", "Accounts receivable $864", ["Cash $800", "Sales $864", "Sales tax payable $64"], "$800 + $64 tax."),
  fq("A customer returns a $200 arrangement plus $16 tax. What is credited?", "Accounts receivable $216", ["Sales returns $216", "Cash $200", "Sales tax payable $16"], "The customer owes less."),
  fq("Why use a separate Sales returns account?", "It keeps the size of returns visible while reducing sales", ["Returns are an asset", "It increases revenue", "Banks require it"], "It's a contra-revenue account."),
  fq("A wedding deposit is applied to the August invoice. What is debited?", "Customer deposits", ["Sales", "Cash", "Inventory"], "The liability is used up."),
  fq("What were Bloom & Co's net sales for the first week of June?", "$2,300", ["$2,500", "$3,800", "$2,040"], "$500 + $2,000 − $200 returns."),
  fq("Sales discounts appear on the profit and loss as:", "A reduction of revenue", ["An asset", "A liability", "Owner's drawings"], "Like returns, they reduce sales."),

  // Module 4
  fq("Vases bought for resale on credit under a perpetual system: what is debited?", "Inventory", ["Cost of goods sold", "Office supplies", "Sales"], "Stock is an asset until sold."),
  fq("A $3,200 flower refrigerator is above the $2,500 capitalisation threshold. How is it recorded?", "As Equipment", ["As Office supplies", "As Rent expense", "As Inventory"], "It's a fixed asset."),
  fq("After returning $250 of roses, what did Bloom & Co owe Dutch Blooms?", "$2,750", ["$3,000", "$2,695", "$250"], "$3,000 − $250."),
  fq("Bloom & Co paid Dutch Blooms within 10 days. How much discount did it take?", "$55", ["$60", "$250", "$2,695"], "2% of $2,750."),
  fq("Saving 2% for paying 20 days early equals an annual return of roughly:", "37%", ["2%", "10%", "100%"], "Early-payment discounts are usually worth taking."),
  fq("Where does the purchase discount go?", "Credited to Purchase discounts", ["Debited to Sales", "Credited to Cash", "Debited to Inventory"], "It reduces the cost of purchases."),

  // Module 5
  fq("Gross wages $3,000, tax withheld $450, retirement withheld $150. What is net pay?", "$2,400", ["$3,000", "$2,550", "$2,850"], "$3,000 − $450 − $150."),
  fq("What is the payroll tax withheld from employees?", "A liability until paid to the tax authority", ["An expense of the employee", "Revenue", "An asset"], "It's owed to the government."),
  fq("Ana gives the business a $2,000 display cabinet. What is debited?", "Furniture and fixtures", ["Owner's capital", "Revenue", "Cash"], "The asset increases; capital is credited."),
  fq("Ana takes flowers costing $60 for a family event. How are they valued?", "At cost, as drawings", ["At selling price, as a sale", "At zero", "As an expense"], "Goods taken are drawings at cost."),
  fq("The business credit card bill of $900 is paid. What is debited?", "Credit card (liability)", ["Expenses", "Owner's drawings", "Revenue"], "The purchases were recorded earlier."),
  fq("Which items in Bloom & Co's busy day affected profit?", "Wages and loan interest", ["The transfer to savings", "The owner withdrawal", "The loan principal"], "Only income and expenses affect profit."),

  // Module 6
  fq("What was Bloom & Co's cash balance after the June 20 receipt?", "$12,345", ["$12,000", "$14,040", "$11,345"], "From the Cash ledger example."),
  fq("What is the general journal used for in a manual system with special journals?", "Everything else — adjustments, corrections and unusual items", ["All credit sales", "All cash receipts", "All supplier bills"], "Routine items go to special journals."),
  fq("What should the AP subledger total equal?", "The Accounts payable control account", ["Total purchases for the year", "Cash", "Accounts receivable"], "Control account and subledger must agree."),
  fq("A credit sale was posted to the AR control account but not the customer's account. What's the fix?", "Post it to the customer's subledger account", ["Record a second journal entry", "Delete the control account entry", "Write it off"], "The control account is already correct."),
  fq("When is “reverse and re-enter” clearer than a correcting entry?", "When several things in the entry are wrong", ["When one account is wrong", "Never", "Only for bank fees"], "Reverse it fully, then record it correctly."),
  fq("Which question belongs on a self-review checklist?", "Is sales tax in the right account?", ["What's the weather?", "Is the font consistent?", "Who is the bank manager?"], "Accuracy checks catch errors."),
]
