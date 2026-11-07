import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Accounts Payable Management — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "What accounts payable covers",
      p("Accounts payable (AP) is the money a business owes its suppliers (vendors) for goods and services it has received but not yet paid for."),
      bullets(
        "Supplier bills for stock, materials and services.",
        "Utilities, rent and subscriptions billed in arrears.",
        "Contractor and professional fees.",
      ),
      note("Loans, payroll and taxes owed are also liabilities, but they're usually tracked in their own accounts rather than in accounts payable."),
    ),
    screen(
      "The procure-to-pay cycle",
      steps(
        ["Request", "Someone needs goods or a service."],
        ["Purchase order", "An approved order is sent to the supplier."],
        ["Receive", "Goods or services are delivered and checked."],
        ["Bill", "The supplier's bill is received and entered."],
        ["Approve", "The bill is checked and approved for payment."],
        ["Pay", "Payment is made on the due date and recorded."],
      ),
    ),
    screen(
      "Roles, segregation of duties and the liability",
      p("No one person should control the whole cycle. Split the key duties:"),
      table(
        ["Duty", "Should be separate from"],
        [
          ["Setting up or changing vendors", "Entering bills and making payments"],
          ["Approving bills", "Entering bills"],
          ["Releasing payments", "Recording payments and reconciling the bank"],
        ],
      ),
      p("In a small business with one bookkeeper, the owner can provide the separation by approving vendors and payments."),
      h("Accounts payable on the balance sheet"),
      journal([["Office supplies", "$500", ""], ["Accounts payable", "", "$500"]], "$500"),
      p("Accounts payable is a current liability: it increases with a credit when a bill is entered and decreases with a debit when paid."),
    ),
    check(
      1,
      q("What is accounts payable?", ["Money customers owe you", "Money you owe suppliers for goods or services received", "Cash in the bank", "Owner's investment"], 1, "AP is what the business owes its vendors."),
      q("Which step comes right before entering the supplier's bill?", ["Payment", "Receiving goods or services", "Bank reconciliation", "Approval"], 1, "Goods are received, then the bill is entered."),
      q("Why separate vendor setup from making payments?", ["To prevent fake vendors being paid by the same person", "To save software costs", "It's faster", "It's required for tax"], 0, "Segregation of duties reduces fraud risk."),
      q("What type of account is accounts payable?", ["Current asset", "Current liability", "Expense", "Equity"], 1, "It's a short-term amount owed."),
      q("A bill for $500 of supplies is entered. Which account is credited?", ["Office supplies", "Cash", "Accounts payable", "Revenue"], 2, "The amount owed increases."),
    ),
  ],
  1: [
    screen(
      "Collecting vendor details",
      table(
        ["Detail", "Why"],
        [
          ["Legal name and trading name", "To match bills and payments"],
          ["Address, email and contact", "For remittances and queries"],
          ["Tax number and tax forms", "For tax reporting — e.g. in the US, a Form W-9 from contractors who may need a Form 1099"],
          ["Bank details", "For electronic payments"],
          ["Payment terms", "To schedule payments"],
        ],
      ),
    ),
    screen(
      "Payment terms",
      terms(
        ["Net 30", "Pay the full amount within 30 days of the bill date."],
        ["Due on receipt", "Pay immediately."],
        ["2/10 net 30", "Take a 2% discount if paid within 10 days; otherwise the full amount is due in 30 days."],
        ["EOM (end of month)", "Due at the end of the month, or a set number of days after it."],
      ),
      tip("Enter terms on the vendor record", "Software then calculates due dates automatically, so payment runs are accurate."),
    ),
    screen(
      "Verifying bank details and keeping the list clean",
      caution("Never accept new or changed bank details by email alone. Verify by calling the vendor on a phone number you already have on file — not one in the email."),
      bullets(
        "Check for duplicate vendors before adding a new one (e.g. “ABC Ltd” and “ABC Limited”).",
        "Deactivate vendors you no longer use.",
        "Review the vendor list at least yearly.",
        "Keep a log of who changed vendor details and when.",
      ),
    ),
    check(
      2,
      q("What do “2/10 net 30” terms mean?", ["2% interest after 10 days", "2% discount if paid in 10 days, otherwise due in 30", "Pay in 2 instalments", "Pay $2 per day late"], 1, "It's an early-payment discount."),
      q("A vendor emails new bank details. What should you do?", ["Update them straight away", "Verify by calling a known phone number", "Reply to the email to confirm", "Ignore it"], 1, "Bank-detail change emails are a common fraud."),
      q("Why check for duplicates before adding a vendor?", ["Duplicates can lead to double payments and messy reports", "It's required by banks", "To save storage", "No reason"], 0, "Duplicate vendors make duplicate payments easier."),
      q("In the US, which form is typically collected from contractors for 1099 reporting?", ["W-2", "W-9", "1040", "941"], 1, "Form W-9 provides the vendor's taxpayer details."),
      q("Why enter payment terms on the vendor record?", ["So due dates calculate automatically", "To set tax rates", "To pay early always", "It's decoration"], 0, "Due dates drive payment scheduling."),
    ),
  ],
  2: [
    screen(
      "Entering and coding bills",
      steps(
        ["Check it's a real bill", "Addressed to your business, from a known vendor, not a duplicate."],
        ["Enter the details", "Vendor, bill number, bill date, due date and amount."],
        ["Code each line", "Choose the right expense or asset account, and any tax rate."],
        ["Attach the document", "Keep the bill with the entry for the audit trail."],
      ),
      h("A $1,200 bill: $900 cleaning services and $300 supplies"),
      journal([["Cleaning", "$900", ""], ["Supplies", "$300", ""], ["Accounts payable", "", "$1,200"]], "$1,200"),
    ),
    screen(
      "Purchase orders and three-way matching",
      p("Three-way matching compares three documents before a bill is paid:"),
      table(
        ["Document", "Confirms"],
        [
          ["Purchase order", "What was ordered and the agreed price"],
          ["Receiving report / delivery note", "What actually arrived"],
          ["Supplier bill", "What the supplier is charging"],
        ],
      ),
      p("If you ordered 100 units at $10 and received 90, pay for 90 ($900), not the 100 billed."),
    ),
    screen(
      "Approvals, credit notes and refunds",
      bullets(
        "Set approval limits, e.g. the manager approves up to $2,000 and the owner above that.",
        "Approvers check the goods or service were received and the price is right.",
        "Only approved bills go into the payment run.",
      ),
      h("Supplier credit note for $200 of damaged goods"),
      journal([["Accounts payable", "$200", ""], ["Inventory", "", "$200"]], "$200"),
      p("Apply the credit to the next bill, or record the refund when cash comes back: debit Cash, credit Accounts payable."),
    ),
    check(
      3,
      q("Which three documents are compared in three-way matching?", ["Quote, invoice, receipt", "Purchase order, receiving report and supplier bill", "Bank statement, bill, cheque", "Budget, bill, payment"], 1, "These confirm order, delivery and charge."),
      q("You ordered 100 units at $10 but received 90. How much should you pay?", ["$1,000", "$900", "$100", "Nothing"], 1, "Pay only for what was received: 90 × $10."),
      q("A $1,200 bill covers $900 cleaning and $300 supplies. What is credited?", ["Cleaning $900", "Accounts payable $1,200", "Cash $1,200", "Supplies $300"], 1, "The full amount owed is credited to AP."),
      q("A supplier credit note for $200 is received. Which account is debited?", ["Inventory", "Accounts payable", "Cash", "Sales"], 1, "The amount owed falls."),
      q("Which bills should go into the payment run?", ["All bills received", "Only approved bills", "Only large bills", "Bills from new vendors"], 1, "Approval comes before payment."),
    ),
  ],
  3: [
    screen(
      "Payment runs and scheduling",
      p("A payment run pays a batch of approved bills on a set day, such as every Thursday."),
      steps(
        ["List bills due", "Run an unpaid bills report by due date."],
        ["Check cash", "Make sure the bank balance covers the run."],
        ["Choose what to pay", "Due bills, plus any with worthwhile discounts."],
        ["Approve the run", "A second person reviews and releases payment."],
        ["Send remittances", "Tell vendors which bills were paid."],
      ),
    ),
    screen(
      "Early-payment discounts",
      p("A $5,000 bill on 2/10 net 30 terms: pay within 10 days and save $100."),
      example([["Bill", "$5,000"], ["Discount 2%", "($100)"]], ["Pay within 10 days", "$4,900"]),
      journal([["Accounts payable", "$5,000", ""], ["Cash", "", "$4,900"], ["Purchase discounts", "", "$100"]], "$5,000"),
      tip("Is it worth it?", "Saving 2% for paying 20 days early equals an annual return of roughly 37%. If cash allows, early-payment discounts are usually worth taking."),
    ),
    screen(
      "Payment methods and recording payments",
      compare(
        ["ACH / bank transfer", "Low-cost electronic payment from your bank account.", ["Cheap", "Needs verified bank details"]],
        ["Cheque", "Paper payment, slower and easier to steal or alter.", ["Use positive pay if available", "Track outstanding cheques"]],
        ["Card", "Fast and may earn rewards, but some vendors charge a fee.", ["Reconcile the card statement", "Watch for surcharges"]],
      ),
      caution("Record the payment against the specific bill, not as a new expense. Otherwise the expense is counted twice and the bill still shows as unpaid."),
    ),
    check(
      4,
      q("What is a payment run?", ["Paying approved bills in a scheduled batch", "Running to the bank", "Paying every bill as it arrives", "A payroll process"], 0, "Batching payments improves control and cash planning."),
      q("A $5,000 bill on 2/10 net 30 is paid in 7 days. How much is paid?", ["$5,000", "$4,900", "$4,000", "$5,100"], 1, "2% of $5,000 is $100."),
      q("Where does the $100 discount go?", ["Purchase discounts (credit)", "Sales", "Interest expense", "Owner's capital"], 0, "It reduces the cost of purchases."),
      q("A bill is paid but recorded as a new expense instead of against the bill. What happens?", ["Nothing", "The expense is doubled and the bill still looks unpaid", "Cash increases", "Revenue falls"], 1, "Always apply payments to the bill."),
      q("Which payment method is most vulnerable to theft and alteration?", ["ACH", "Cheque", "Card", "Wire with call-back"], 1, "Paper cheques can be stolen or altered."),
    ),
  ],
  4: [
    screen(
      "Preventing duplicate payments",
      bullets(
        "Enter bills from the original bill, never from statements or reminders.",
        "Make the vendor and bill number a required, unique combination — most software warns about duplicates.",
        "Check the same amount to the same vendor in the same period before paying.",
        "Mark paper bills as entered or paid.",
      ),
    ),
    screen(
      "Fake vendors and bank-detail changes",
      table(
        ["Red flag", "What it may mean"],
        [
          ["Vendor with only a PO box or no phone number", "A fake vendor set up to receive payments"],
          ["Vendor's bank account matches an employee's", "Payments diverted to staff"],
          ["Urgent email asking to change bank details", "Business email compromise"],
          ["Round-number bills just under an approval limit", "Bills split to avoid review"],
          ["Sudden new vendor with large payments", "Needs verification"],
        ],
      ),
      caution("Always verify bank-detail changes by phone using contact details you already hold — and have a second person approve the change."),
    ),
    screen(
      "Reviewing payments and documentation",
      steps(
        ["Review the payment run", "An approver scans every payee and amount before release."],
        ["Review vendor changes", "Monthly report of new vendors and changed bank details."],
        ["Look for unusual items", "Payments on weekends, to new vendors, or just under approval limits."],
        ["Keep the trail", "PO, delivery note, bill, approval and payment linked together."],
      ),
      note("Good documentation protects honest staff as much as it deters fraud: every payment can be explained."),
    ),
    check(
      5,
      q("How should bills be entered to avoid duplicates?", ["From supplier statements", "From the original bill, with a unique bill number", "From email reminders", "From memory"], 1, "Original bills plus unique bill numbers prevent repeats."),
      q("A vendor's bank account matches an employee's. What could it mean?", ["Nothing", "Payments may be diverted to staff", "The vendor is a bank", "A tax refund"], 1, "It's a classic fraud warning sign."),
      q("Several bills arrive just under the $2,000 approval limit. What should you suspect?", ["Normal billing", "Bills split to avoid review", "A discount", "Tax errors"], 1, "Splitting avoids higher approval."),
      q("Who should approve a change of vendor bank details?", ["The vendor by email", "A second person, after a call-back check", "No one", "The bank"], 1, "Verification plus a second approver."),
      q("What should be linked in the audit trail?", ["PO, delivery note, bill, approval and payment", "Only the payment", "Only the bill", "Only emails"], 0, "Together they show the full story."),
    ),
  ],
  5: [
    screen(
      "Reconciling supplier statements",
      p("Compare each key supplier's monthly statement with your AP ledger for that supplier."),
      table(
        ["Item", "Amount"],
        [
          ["Balance per supplier statement", "$7,350"],
          ["Less: payment sent Mar 30, not yet on the statement", "($2,000)"],
          ["Adjusted supplier balance", "$5,350"],
          ["Balance per our AP ledger", "$4,700"],
          ["Add: bill 884, on the statement but missing from our books", "$650"],
          ["Adjusted AP ledger balance", "$5,350"],
        ],
        { numeric: [1] },
      ),
      p("Both sides agree at $5,350 once bill 884 is checked and entered."),
      note("Differences are usually timing (payments in transit) or bills and credit notes missing from one side. Investigate each one."),
    ),
    screen(
      "The AP aging report",
      table(
        ["Vendor", "Current", "1–30 days", "31–60 days", "Over 60", "Total"],
        [
          ["ABC Supplies", "$2,400", "$1,100", "", "", "$3,500"],
          ["City Utilities", "$310", "", "", "", "$310"],
          ["Print Co", "", "", "$850", "$400", "$1,250"],
        ],
        { footer: ["Total", "$2,710", "$1,100", "$850", "$400", "$5,060"], numeric: [1, 2, 3, 4, 5] },
      ),
      p("Old items need attention: are they disputed, lost, or bills that should have been paid? Late payments can mean fees and damaged supplier relationships."),
    ),
    screen(
      "Accruals and cash forecasting",
      h("Accrued expenses at month-end"),
      p("Services received in March whose bill hasn't arrived yet still belong in March:"),
      journal([["Utilities", "$420", ""], ["Accrued expenses", "", "$420"]], "$420"),
      p("Reverse the accrual next month when the real bill is entered."),
      h("Forecasting cash from payables"),
      p("The AP aging, sorted by due date, shows how much cash goes out each week. Combine it with expected customer receipts to forecast the bank balance."),
      tip("Plan the timing", "Paying on the due date — not earlier, unless there's a discount — keeps cash in the business longer without harming supplier relationships."),
    ),
    check(
      6,
      q("A payment you sent isn't on the supplier's statement yet. What is it?", ["An error", "A timing difference", "Fraud", "A credit note"], 1, "It's in transit and will appear next month."),
      q("What does an AP aging report show?", ["Unpaid bills grouped by how long they've been outstanding", "Customers' debts", "Bank fees", "Payroll"], 0, "It groups payables by age."),
      q("In the aging example, what is the total owed over 60 days?", ["$400", "$850", "$1,250", "$5,060"], 0, "Print Co has $400 over 60 days."),
      q("A March service bill hasn't arrived by month-end. What should you do?", ["Wait for the bill", "Accrue the expense in March", "Record it as revenue", "Ignore it"], 1, "Accruals put the expense in the right month."),
      q("How does AP help with cash forecasting?", ["It shows when cash will go out", "It shows sales", "It sets prices", "It doesn't"], 0, "Bills by due date show future outflows."),
    ),
  ],
}

export default lessons
