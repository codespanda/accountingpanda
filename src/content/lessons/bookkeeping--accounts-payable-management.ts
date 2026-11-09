import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
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

// Accounts Payable Management — lesson screens by module index (0 = Module 1).
// The course follows Ridgeway Supplies, a hardware distributor.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The Accounts Payable Process",
      ["Accounts payable (AP) is where a business's money leaves to pay suppliers. Run well, it protects cash and supplier relationships; run badly, it's where duplicate payments and fraud happen."],
      ["Explain what accounts payable covers", "Describe the procure-to-pay cycle", "Separate AP duties between people", "Record and report AP as a liability"],
    ),
    screen(
      "Meet Ridgeway Supplies",
      p("Ridgeway Supplies buys tools and building materials from manufacturers and sells them to contractors. It receives around 200 supplier bills a month."),
      p("Lena runs the AP team: one clerk enters bills, the operations manager approves them, and the finance manager releases payments."),
    ),
    screen(
      "What accounts payable covers",
      p("Accounts payable is money the business owes suppliers (vendors) for goods and services it has received but not yet paid for."),
      bullets(
        "Bills for stock, materials and freight.",
        "Utilities, rent and subscriptions billed in arrears.",
        "Contractor and professional fees.",
      ),
      note("Loans, payroll and taxes owed are also liabilities, but they're usually tracked in their own accounts, not in accounts payable."),
    ),
    screen(
      "The procure-to-pay cycle",
      steps(
        ["Request", "A warehouse manager needs 100 boxes of screws."],
        ["Purchase order", "An approved order is sent to the supplier."],
        ["Receive", "Goods arrive and are counted against the order."],
        ["Bill", "The supplier's bill is received and entered."],
        ["Approve", "The bill is checked and approved for payment."],
        ["Pay", "Payment is made on the due date and recorded."],
      ),
    ),
    screen(
      "Roles and segregation of duties",
      p("No one person should control the whole cycle. Ridgeway splits the key duties:"),
      table(
        ["Duty", "Ridgeway", "Must be separate from"],
        [
          ["Set up or change suppliers", "Finance manager", "Entering bills and making payments"],
          ["Enter bills", "AP clerk", "Approving bills"],
          ["Approve bills", "Operations manager", "Entering bills"],
          ["Release payments", "Finance manager", "Entering bills and reconciling the bank"],
        ],
      ),
      tip("Small teams", "With one bookkeeper, the owner can provide the separation by approving new suppliers and releasing payments."),
    ),
    screen(
      "Accounts payable as a liability",
      p("Entering a $4,800 bill for stock:"),
      journal([["Inventory", "$4,800", ""], ["Accounts payable", "", "$4,800"]], "$4,800"),
      p("Paying it:"),
      journal([["Accounts payable", "$4,800", ""], ["Cash", "", "$4,800"]], "$4,800"),
      p("AP is a current liability: it increases with a credit when a bill is entered and decreases with a debit when paid."),
    ),
    screen(
      "AP in the financial statements",
      table(
        ["Statement", "How AP shows up"],
        [
          ["Balance sheet", "Accounts payable under current liabilities"],
          ["Income statement", "The expenses or cost of sales on the bills — recorded when the bill is entered, not when paid"],
          ["Cash flow statement", "An increase in AP adds to operating cash flow (cash not yet paid out)"],
        ],
      ),
    ),
    mistakes(
      ["Recording expenses only when paid", "Under accrual accounting, record them when the bill is received."],
      ["One person doing everything", "Split vendor setup, entry, approval and payment."],
      ["Mixing loans or tax into AP", "Keep them in their own liability accounts."],
    ),
    check(
      1,
      q("What is accounts payable?", ["Money customers owe the business", "Money the business owes suppliers for goods or services received", "Cash in the bank", "Owner's investment"], 1, "It's what the business owes vendors."),
      q("Which step comes right before entering the supplier's bill?", ["Payment", "Receiving goods or services", "Bank reconciliation", "Approval"], 1, "Goods are received, then billed."),
      q("At Ridgeway, who approves bills?", ["The AP clerk who entered them", "The operations manager", "The supplier", "Nobody"], 1, "Approval is separate from entry."),
      q("A $4,800 bill for stock is entered. Which account is credited?", ["Inventory", "Cash", "Accounts payable", "Revenue"], 2, "The amount owed increases."),
      q("How does an increase in AP affect operating cash flow?", ["It reduces it", "It adds to it — cash hasn't been paid yet", "No effect", "It makes it negative"], 1, "Unpaid bills keep cash in the business."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Entries",
          ["Ridgeway receives a $650 electricity bill and pays it two weeks later. Write both entries."],
          ["Bill: Dr Utilities $650 · Cr Accounts payable $650.", "Payment: Dr Accounts payable $650 · Cr Cash $650."],
        ],
        [
          "Exercise 2 — Segregation",
          ["The AP clerk can add new suppliers, enter bills and release payments. What's the risk and the fix?"],
          ["Risk: the clerk could create a fake supplier, bill it and pay it.", "Fix: move supplier setup and payment release to other people (or the owner)."],
        ],
      ),
    ),
    summary(
      ["What accounts payable covers", "The procure-to-pay cycle", "Segregation of duties in AP", "Recording AP as a liability", "Where AP appears in the financial statements"],
      "Accounts payable is a cycle — request, order, receive, bill, approve, pay — with different people controlling different steps.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Vendor Setup",
      ["Clean, verified vendor records are the first line of defence in AP. This module covers what to collect, payment terms, verifying bank details and keeping the list clean."],
      ["Collect vendor details and tax forms", "Set payment terms", "Verify bank details", "Keep the vendor list clean"],
    ),
    screen(
      "Collecting vendor details",
      table(
        ["Detail", "Why"],
        [
          ["Legal name and trading name", "To match bills and payments"],
          ["Address, email and phone", "For remittances and queries"],
          ["Tax identification", "For tax reporting — e.g. a Form W-9 in the US, an ABN in Australia, a GSTIN or PAN in India"],
          ["Bank details", "For electronic payments"],
          ["Payment terms", "To schedule payments"],
          ["Contact for accounts", "To resolve billing issues"],
        ],
      ),
      note("In the US, collecting a Form W-9 from contractors lets you issue Form 1099 at year-end where required."),
    ),
    screen(
      "Payment terms",
      terms(
        ["Net 30", "Pay the full amount within 30 days of the bill date."],
        ["Due on receipt", "Pay immediately."],
        ["2/10 net 30", "Take a 2% discount if paid within 10 days; otherwise the full amount is due in 30 days."],
        ["EOM", "Due at the end of the month, or a set number of days after it."],
      ),
      tip("Enter terms on the vendor record", "Software then calculates due dates automatically, so payment runs are accurate."),
    ),
    screen(
      "Verifying bank details",
      caution("Never accept new or changed bank details by email alone. Fraudsters impersonate suppliers to redirect payments."),
      steps(
        ["Get details in writing", "On the supplier's letterhead or a signed form."],
        ["Call back", "Phone the supplier on a number you already hold — not one in the email."],
        ["Second approval", "Someone other than the person who entered the change approves it."],
        ["Log it", "Record who verified it, when and how."],
      ),
    ),
    screen(
      "Keeping the vendor list clean",
      bullets(
        "Search before adding a supplier — “Acme Tools” and “Acme Tools Ltd” may be the same.",
        "Deactivate suppliers not used in the last 12–18 months.",
        "Review a monthly report of new suppliers and changed details.",
        "Never share a supplier record between two different businesses.",
      ),
    ),
    screen(
      "Worked example: onboarding a supplier",
      p("Ridgeway starts buying from Northline Fasteners."),
      table(
        ["Step", "Done by"],
        [
          ["Purchasing requests the new supplier", "Purchasing manager"],
          ["Collect details, tax form and bank letter", "AP clerk"],
          ["Check for duplicates in the vendor list", "AP clerk"],
          ["Call Northline on its published number to confirm bank details", "Finance manager"],
          ["Approve and activate the record, with 2/10 net 30 terms", "Finance manager"],
        ],
      ),
    ),
    mistakes(
      ["Updating bank details from an email", "Always call back on a known number."],
      ["Adding duplicate suppliers", "Search first."],
      ["Missing tax forms", "Collect them before the first payment."],
      ["Leaving old suppliers active", "Deactivate unused records."],
    ),
    check(
      2,
      q("What do “2/10 net 30” terms mean?", ["2% interest after 10 days", "2% discount if paid in 10 days, otherwise due in 30", "Pay in 2 instalments", "Pay $2 per day late"], 1, "It's an early-payment discount."),
      q("A supplier emails new bank details. What should you do?", ["Update them", "Call back on a number you already hold and get second approval", "Reply to the email", "Ignore it"], 1, "Independent verification."),
      q("Why search the vendor list before adding a supplier?", ["Duplicates can lead to double payments", "It's faster", "Banks require it", "No reason"], 0, "Duplicates enable duplicate payments."),
      q("In the US, which form is typically collected from contractors for 1099 reporting?", ["W-2", "W-9", "1040", "941"], 1, "Form W-9."),
      q("Who should approve a new supplier at Ridgeway?", ["The AP clerk", "The finance manager", "The supplier", "Anyone"], 1, "Separate from bill entry."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Spot the risk",
          ["An email from “Northline Fasteners” (sent from northline-fastener.co) asks Ridgeway to pay a new bank account from today. What do you do?"],
          ["Treat it as suspicious — the domain is slightly different.", "Don't change anything. Call Northline on the number in the vendor record and confirm. Report the email internally."],
        ],
        [
          "Exercise 2 — Terms",
          ["A $3,000 bill dated June 1 has terms 2/10 net 30. What's the last day for the discount, the discounted amount, and the final due date?"],
          ["Discount until June 11: pay $2,940.", "Otherwise $3,000 is due by July 1."],
        ],
      ),
    ),
    summary(
      ["What vendor details and tax forms to collect", "Common payment terms", "Verifying bank details by call-back", "Keeping the vendor list clean", "A controlled onboarding process"],
      "Every payment depends on the vendor record. Verify it once properly and protect it from unauthorised changes.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Recording and Approving Bills",
      ["Bills must be entered accurately and approved before they're paid. This module covers coding, three-way matching, approval workflows and supplier credits."],
      ["Enter and code bills", "Use purchase orders and three-way matching", "Run an approval workflow", "Handle credit notes and refunds"],
    ),
    screen(
      "Entering and coding bills",
      steps(
        ["Check it's a real bill", "Addressed to Ridgeway, from a known supplier, not a duplicate."],
        ["Enter the details", "Supplier, bill number, bill date, due date and amount."],
        ["Code each line", "Choose the right account — inventory, expense or asset — and any tax."],
        ["Attach the document", "Keep the bill with the entry for the audit trail."],
      ),
      p("A $1,200 bill with $900 of cleaning services and $300 of supplies:"),
      journal([["Cleaning", "$900", ""], ["Supplies", "$300", ""], ["Accounts payable", "", "$1,200"]], "$1,200"),
    ),
    screen(
      "Purchase orders and three-way matching",
      p("Three-way matching compares three documents before a bill is approved:"),
      table(
        ["Document", "Confirms"],
        [
          ["Purchase order", "What was ordered and the agreed price"],
          ["Goods received note", "What actually arrived"],
          ["Supplier bill", "What the supplier is charging"],
        ],
      ),
    ),
    screen(
      "Worked example: a three-way match",
      table(
        ["", "Quantity", "Price", "Total"],
        [
          ["Purchase order — screws", "100 boxes", "$12", "$1,200"],
          ["Goods received", "95 boxes", "", ""],
          ["Supplier bill", "100 boxes", "$12", "$1,200"],
        ],
      ),
      p("Ridgeway received only 95 boxes. It should approve $1,140 (95 × $12) and ask the supplier for a credit note for the missing $60 — or wait for the remaining 5 boxes."),
      tip("Tolerances", "Many businesses allow small differences (e.g. up to $10 or 1%) to be approved without investigation."),
    ),
    screen(
      "Approval workflows",
      table(
        ["Bill amount", "Approved by"],
        [
          ["Up to $2,000", "Operations manager"],
          ["$2,000 – $20,000", "Finance manager"],
          ["Over $20,000", "Managing director"],
        ],
      ),
      bullets(
        "Approvers check the goods or service were received and the price is right.",
        "Only approved bills go into the payment run.",
        "Approvals are recorded in the software or on the bill.",
      ),
    ),
    screen(
      "Credit notes and refunds",
      p("A supplier credit note for $200 of damaged goods:"),
      journal([["Accounts payable", "$200", ""], ["Inventory", "", "$200"]], "$200"),
      p("Apply the credit to the next bill, or record the refund when cash comes back:"),
      journal([["Cash", "$200", ""], ["Accounts payable", "", "$200"]], "$200"),
      note("Track open supplier credits — unused credits are money the business is owed."),
    ),
    mistakes(
      ["Paying for goods not received", "Use three-way matching."],
      ["Coding everything to one expense account", "Code each line to the right account."],
      ["Approving your own bills", "Approval must be independent."],
      ["Forgetting supplier credits", "Apply them or request a refund."],
    ),
    check(
      3,
      q("Which three documents are compared in three-way matching?", ["Quote, invoice, receipt", "Purchase order, goods received note and supplier bill", "Bank statement, bill, cheque", "Budget, bill, payment"], 1, "Order, delivery and charge."),
      q("100 boxes at $12 were ordered and billed but 95 arrived. How much should be approved?", ["$1,200", "$1,140", "$60", "$95"], 1, "95 × $12."),
      q("A $1,200 bill covers $900 cleaning and $300 supplies. What is credited?", ["Cleaning $900", "Accounts payable $1,200", "Cash $1,200", "Supplies $300"], 1, "The full amount owed."),
      q("At Ridgeway, who approves a $5,000 bill?", ["Operations manager", "Finance manager", "Managing director", "AP clerk"], 1, "$2,000–$20,000 goes to the finance manager."),
      q("A supplier credit note for $200 is received. Which account is debited?", ["Inventory", "Accounts payable", "Cash", "Sales"], 1, "The amount owed falls."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Price difference",
          ["PO: 50 drills at $80. Received: 50. Bill: 50 at $84. What do you do?"],
          ["The price differs by $4 × 50 = $200 — above any small tolerance.", "Hold the bill and ask purchasing and the supplier; approve $4,000 or obtain a credit note for $200."],
        ],
        [
          "Exercise 2 — Code a bill",
          ["A bill shows $2,500 of timber for resale, $180 of delivery on it, and $90 of office supplies. Write the entry (perpetual inventory)."],
          ["Dr Inventory $2,680 (timber plus freight in) · Dr Office supplies $90 · Cr Accounts payable $2,770."],
        ],
      ),
    ),
    summary(
      ["Entering and coding bills", "Purchase orders and three-way matching", "Tolerances for small differences", "Approval limits and workflows", "Supplier credit notes and refunds"],
      "Pay only for what was ordered, received and approved — and code each line to where it belongs.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Paying Suppliers",
      ["Paying on time protects supplier relationships; paying too early wastes cash; paying twice loses it. This module covers payment runs, discounts, payment methods and recording payments."],
      ["Run a scheduled payment run", "Decide when to take early-payment discounts", "Choose a payment method", "Record payments correctly"],
    ),
    screen(
      "Payment runs",
      p("Ridgeway pays approved bills in a weekly payment run every Thursday."),
      steps(
        ["List bills due", "Unpaid bills due before next Thursday, plus any with discounts expiring."],
        ["Check cash", "Make sure the bank balance covers the run."],
        ["Choose what to pay", "Due bills and worthwhile discounts."],
        ["Approve the run", "The finance manager reviews payees and amounts and releases payment."],
        ["Send remittances", "Tell suppliers which bills were paid."],
      ),
    ),
    screen(
      "Early-payment discounts",
      p("A $5,000 bill on 2/10 net 30 terms: paying within 10 days saves $100."),
      example([["Bill", "$5,000"], ["Discount 2%", "($100)"]], ["Pay within 10 days", "$4,900"]),
      journal([["Accounts payable", "$5,000", ""], ["Cash", "", "$4,900"], ["Purchase discounts", "", "$100"]], "$5,000"),
      tip("Is it worth it?", "Saving 2% for paying 20 days early equals an annual return of about 37%. If cash allows, it's usually worth taking."),
    ),
    screen(
      "Payment methods",
      compare(
        ["ACH / bank transfer", "Low-cost electronic payment from the bank account.", ["Cheap and traceable", "Needs verified bank details"]],
        ["Cheque", "Paper payment, slower and easier to steal or alter.", ["Use positive pay if the bank offers it", "Track outstanding cheques"]],
        ["Card", "Fast; the card is paid off later.", ["Reconcile the card statement", "Watch for surcharges"]],
      ),
      note("Wire transfers are fast but hard to recall — use extra verification for large wires."),
    ),
    screen(
      "Recording payments correctly",
      p("Record each payment against the specific bills it pays."),
      journal([["Accounts payable — Northline Fasteners", "$2,940", ""], ["Cash", "", "$2,940"]], "$2,940"),
      caution("Recording a bill payment as a new expense leaves the bill open and doubles the cost."),
    ),
    screen(
      "Worked example: this week's payment run",
      table(
        ["Supplier", "Bill", "Due", "Terms", "Pay this week?"],
        [
          ["Northline Fasteners", "$3,000", "Jul 1", "2/10 net 30 (discount ends Jun 11)", "Yes — $2,940 with discount"],
          ["City Power", "$650", "Jun 14", "Net 14", "Yes — $650"],
          ["Hartley Timber", "$8,200", "Jun 28", "Net 30", "No — not due yet"],
          ["Ace Freight", "$420", "Jun 12", "Net 7", "Yes — $420"],
        ],
      ),
      p("Payment run total: $2,940 + $650 + $420 = $4,010."),
    ),
    mistakes(
      ["Paying bills as soon as they arrive", "Pay on the due date unless there's a discount."],
      ["Missing discount deadlines", "Include expiring discounts in each run."],
      ["Recording payments as new expenses", "Apply them to bills."],
      ["Releasing payments without review", "A second person checks every run."],
    ),
    check(
      4,
      q("What is a payment run?", ["Paying approved bills in a scheduled batch", "Running to the bank", "Paying every bill on arrival", "A payroll process"], 0, "Batching improves control."),
      q("A $5,000 bill on 2/10 net 30 is paid in 7 days. How much is paid?", ["$5,000", "$4,900", "$4,000", "$5,100"], 1, "2% off."),
      q("Where does the $100 discount go?", ["Purchase discounts (credit)", "Sales", "Interest expense", "Owner's capital"], 0, "It reduces purchase costs."),
      q("What is this week's payment run total in the example?", ["$4,010", "$12,270", "$4,070", "$3,590"], 0, "$2,940 + $650 + $420."),
      q("Which payment method is most vulnerable to theft and alteration?", ["ACH", "Cheque", "Card", "Verified bank transfer"], 1, "Paper cheques."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Discount",
          ["A $12,500 bill on 1/10 net 30 is paid within 10 days. Write the entry."],
          ["Discount $125. Dr Accounts payable $12,500 · Cr Cash $12,375 · Cr Purchase discounts $125."],
        ],
        [
          "Exercise 2 — Plan the run",
          ["Bills: A $900 due in 3 days; B $4,000 due in 25 days (no discount); C $2,000 on 2/10 net 30, discount ends in 4 days. Next run is in 2 days. What do you pay?"],
          ["Pay A ($900) and C with discount ($1,960). Hold B until a later run.", "Run total: $2,860."],
        ],
      ),
    ),
    summary(
      ["Scheduled payment runs", "Evaluating early-payment discounts", "ACH, cheque, card and wire payments", "Recording payments against bills", "Planning a weekly payment run"],
      "Pay the right bills at the right time — on the due date, or earlier only when a discount makes it worthwhile.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Controls and Fraud Prevention",
      ["AP is a prime target for fraud and expensive mistakes. This module covers the controls that prevent duplicate payments, fake vendors and payment diversion."],
      ["Prevent duplicate payments", "Detect fake vendors and bank-detail changes", "Review unusual payments", "Keep a complete audit trail"],
    ),
    screen(
      "Preventing duplicate payments",
      bullets(
        "Enter bills only from the original bill — never from statements or reminders.",
        "Make the supplier and bill number a unique combination; most software warns about duplicates.",
        "Check for the same amount to the same supplier in the same period before paying.",
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
          ["New vendor with large payments soon after setup", "Needs verification"],
        ],
      ),
      caution("Always verify bank-detail changes by phone using contact details you already hold — and require a second approver."),
    ),
    screen(
      "Reviewing unusual payments",
      steps(
        ["Review each payment run", "An approver scans every payee and amount before release."],
        ["Review vendor changes monthly", "New vendors and changed bank details."],
        ["Look for unusual items", "Weekend payments, new vendors, amounts just under limits, round numbers."],
        ["Compare with the budget", "Spending well above normal for a supplier needs explaining."],
      ),
    ),
    screen(
      "Worked example: a red-flag review",
      p("Ridgeway's monthly review finds:"),
      table(
        ["Finding", "Action"],
        [
          ["Three bills from “Quick Tools Co”, each $1,950 — just under the $2,000 approval limit", "Ask for the POs and goods received notes; check whether one purchase was split"],
          ["Quick Tools Co set up last month; address is a PO box", "Verify the supplier exists and who requested it"],
          ["Quick Tools Co's bank account matches an employee's payroll account", "Stop payments and escalate to the managing director"],
        ],
      ),
      note("One red flag may have an innocent explanation. Several together demand investigation."),
    ),
    screen(
      "Audit trails and documentation",
      bullets(
        "Link the PO, goods received note, bill, approval and payment together.",
        "Keep a log of vendor master changes: what, who and when.",
        "Restrict who can edit or delete posted bills.",
        "Keep records for as long as tax law and your accountant require.",
      ),
      tip("Documentation protects honest staff", "When every payment can be explained, suspicion falls only where it should."),
    ),
    mistakes(
      ["Entering bills from statements", "This is the main cause of duplicates."],
      ["Approving changes by email", "Call back and use a second approver."],
      ["Ignoring split bills", "Bills just under limits need a closer look."],
      ["Not reviewing vendor changes", "Review them monthly."],
    ),
    check(
      5,
      q("How should bills be entered to avoid duplicates?", ["From supplier statements", "From the original bill, with a unique bill number", "From email reminders", "From memory"], 1, "Original bills plus unique numbers."),
      q("A vendor's bank account matches an employee's. What could it mean?", ["Nothing", "Payments may be diverted to staff", "The vendor is a bank", "A tax refund"], 1, "A classic fraud sign."),
      q("Three $1,950 bills arrive just under a $2,000 approval limit. What should you suspect?", ["Normal billing", "A purchase split to avoid review", "A discount", "A tax error"], 1, "Splitting avoids higher approval."),
      q("Who should approve a change of vendor bank details?", ["The vendor by email", "A second person, after a call-back check", "No one", "The bank"], 1, "Call back and second approval."),
      q("What should the audit trail link together?", ["PO, goods received note, bill, approval and payment", "Only the payment", "Only the bill", "Only emails"], 0, "The full story of each payment."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Duplicate check",
          ["Two bills from Hartley Timber: #4471 for $8,200 dated June 3, and #4471A for $8,200 dated June 3. What do you do?"],
          ["Treat it as a likely duplicate. Compare line items and the goods received note, and ask Hartley before paying the second."],
        ],
        [
          "Exercise 2 — Design a control",
          ["Ridgeway's clerk can edit vendor bank details. Suggest two controls."],
          ["Restrict bank-detail edits to the finance manager, with a call-back check.", "Send a monthly report of all vendor changes to the managing director."],
        ],
      ),
    ),
    summary(
      ["Preventing duplicate payments", "Red flags for fake vendors and payment diversion", "Reviewing payment runs and unusual items", "Keeping a complete audit trail"],
      "Most AP fraud relies on weak vendor and payment controls. Verify changes, review payments and keep the trail complete.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reconciliation and Reporting",
      ["The final step is proving AP is right and using it to manage cash. This module covers supplier statement reconciliations, the AP aging report, month-end accruals and cash forecasting."],
      ["Reconcile supplier statements", "Read and use the AP aging report", "Accrue expenses at month end", "Forecast cash from payables"],
    ),
    screen(
      "Reconciling supplier statements",
      p("Hartley Timber's statement shows $7,350 owed at May 31. Ridgeway's ledger shows $4,700."),
      table(
        ["", "Amount"],
        [
          ["Balance per supplier statement", "$7,350"],
          ["Less: payment sent May 30, not yet on the statement", "($2,000)"],
          ["Adjusted supplier balance", "$5,350"],
          ["Balance per Ridgeway's ledger", "$4,700"],
          ["Add: bill 884, on the statement but missing from Ridgeway's books", "$650"],
          ["Adjusted ledger balance", "$5,350"],
        ],
        { numeric: [1] },
      ),
      p("Both sides agree at $5,350 once bill 884 is checked and entered."),
    ),
    screen(
      "The AP aging report",
      table(
        ["Supplier", "Current", "1–30 days", "31–60 days", "Over 60", "Total"],
        [
          ["Hartley Timber", "$2,400", "$1,100", "", "", "$3,500"],
          ["City Power", "$310", "", "", "", "$310"],
          ["Print Co", "", "", "$850", "$400", "$1,250"],
        ],
        { footer: ["Total", "$2,710", "$1,100", "$850", "$400", "$5,060"], numeric: [1, 2, 3, 4, 5] },
      ),
      p("Old items need attention: are they disputed, lost, or bills that should have been paid? Late payments can mean fees and damaged supplier relationships."),
      tip("Check the total", "The aging total should equal the Accounts payable balance in the general ledger."),
    ),
    screen(
      "Accrued expenses at month end",
      p("Services received in May whose bill hasn't arrived yet still belong in May."),
      journal([["Freight", "$420", ""], ["Accrued expenses", "", "$420"]], "$420"),
      terms(
        ["Goods received not invoiced (GRNI)", "Stock received before month end without a bill is accrued in the same way: debit Inventory, credit GRNI."],
        ["Reversing", "Reverse the accrual next month when the real bill is entered, so it isn't counted twice."],
      ),
    ),
    screen(
      "Cash forecasting from payables",
      p("Sorting the AP aging by due date shows when cash will go out:"),
      table(
        ["Week starting", "Bills due", "Expected customer receipts", "Net"],
        [
          ["Jun 2", "$4,010", "$6,500", "+$2,490"],
          ["Jun 9", "$9,300", "$7,200", "−$2,100"],
          ["Jun 16", "$3,250", "$8,100", "+$4,850"],
        ],
      ),
      p("The week of June 9 is short of cash — Ridgeway can move a non-urgent bill or chase a customer payment to cover it."),
    ),
    mistakes(
      ["Ignoring supplier statements", "Reconcile key suppliers monthly."],
      ["Letting old items sit in the aging", "Investigate and resolve them."],
      ["Waiting for bills to record month-end costs", "Accrue them."],
      ["Forecasting cash without AP", "Bills due are the biggest predictable outflow."],
    ),
    check(
      6,
      q("A payment you sent isn't on the supplier's statement yet. What is it?", ["An error", "A timing difference", "Fraud", "A credit note"], 1, "It's in transit."),
      q("What does an AP aging report show?", ["Unpaid bills grouped by how long they've been outstanding", "Customers' debts", "Bank fees", "Payroll"], 0, "Payables by age."),
      q("In the aging example, what is owed over 60 days?", ["$400", "$850", "$1,250", "$5,060"], 0, "Print Co's $400."),
      q("May freight of $420 hasn't been billed by month end. What's the entry?", ["No entry", "Dr Freight $420, Cr Accrued expenses $420", "Dr Cash, Cr Freight", "Dr Accrued expenses, Cr Freight"], 1, "Accrue it."),
      q("In the forecast, which week is short of cash?", ["Jun 2", "Jun 9", "Jun 16", "None"], 1, "Bills exceed receipts by $2,100."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Statement reconciliation",
          ["Supplier statement $5,900; ledger $3,800. A $1,500 payment is in transit, and a $600 bill is missing from the books. Does it reconcile?"],
          ["Supplier: $5,900 − $1,500 = $4,400.", "Ledger: $3,800 + $600 = $4,400.", "Yes — both agree at $4,400."],
        ],
        [
          "Exercise 2 — GRNI",
          ["$2,300 of stock arrived on May 30 but the bill came on June 4. Write the May 31 entry."],
          ["Dr Inventory $2,300 · Cr GRNI $2,300."],
        ],
      ),
    ),
    summary(
      ["Reconciling supplier statements", "Using the AP aging report", "Month-end accruals and GRNI", "Forecasting cash from payables"],
      "Reconcile AP to suppliers, keep the aging clean, accrue what's owed, and use payables to plan cash.",
    ),
  ],
}

export default lessons
