import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
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

// Accounts Receivable and Invoicing — lesson screens by module index (0 = Module 1).
// The course follows Brightside Cleaning Services, which cleans offices on
// credit terms of net 14. Sales tax, where shown, is assumed at 8%.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The Accounts Receivable Process",
      ["Accounts receivable (AR) is money customers owe the business. Managing it well is the difference between a profitable business and a profitable business that runs out of cash."],
      ["Explain what accounts receivable covers", "Describe the order-to-cash cycle", "Set credit terms and check customers' credit", "Show receivables as an asset"],
    ),
    screen(
      "Meet Brightside Cleaning Services",
      p("Brightside cleans offices, clinics and gyms. It invoices customers at the end of each week of service, on terms of net 14."),
      p("Throughout this course you'll manage Brightside's receivables — from invoicing to collecting and, occasionally, writing off a bad debt."),
    ),
    screen(
      "What accounts receivable covers",
      p("Accounts receivable is money customers owe for goods or services already delivered on credit."),
      journal([["Accounts receivable — Apex Offices", "$1,400", ""], ["Cleaning revenue", "", "$1,400"]], "$1,400"),
      note("The sale is recorded when the invoice is issued, not when the customer pays. Collecting the cash later simply turns the receivable into cash."),
    ),
    screen(
      "The order-to-cash cycle",
      steps(
        ["Agree the work", "A contract or order sets the service, price and terms."],
        ["Check credit", "Decide whether to offer credit, and how much."],
        ["Deliver", "Brightside cleans the premises."],
        ["Invoice", "Send an accurate invoice promptly."],
        ["Collect", "Remind, follow up and receive payment."],
        ["Apply and reconcile", "Match each payment to its invoice."],
      ),
      tip("Invoice fast", "Every day an invoice isn't sent adds a day to when you're paid. Brightside invoices every Friday for that week's work."),
    ),
    screen(
      "Credit terms and credit checks",
      terms(
        ["Credit terms", "How long customers have to pay — Brightside uses net 14."],
        ["Credit limit", "The most a customer can owe at one time — e.g. $5,000 for a new customer."],
        ["Credit check", "Trade references, credit agency reports or payment history before offering credit."],
        ["Deposits", "Ask new or higher-risk customers to pay part upfront."],
      ),
      caution("Offering credit is lending money to your customer. Only do it when you're reasonably confident you'll be paid."),
    ),
    screen(
      "Receivables as an asset",
      table(
        ["Statement", "How AR shows up"],
        [
          ["Balance sheet", "Accounts receivable under current assets, less any allowance for doubtful accounts"],
          ["Income statement", "Revenue when invoiced; bad debt expense when amounts are unlikely to be collected"],
          ["Cash flow statement", "An increase in AR reduces operating cash flow (revenue not yet collected)"],
        ],
      ),
    ),
    screen(
      "Worked example: Brightside's March receivables",
      table(
        ["", "Amount"],
        [
          ["Receivables at March 1", "$12,400"],
          ["Add: invoices issued in March", "$28,600"],
          ["Less: customer payments received", "($25,300)"],
          ["Less: credit notes issued", "($700)"],
          ["Receivables at March 31", "$15,000"],
        ],
        { numeric: [1] },
      ),
      p("You'll analyse this $15,000 later in the course."),
    ),
    mistakes(
      ["Recording revenue only when paid", "Record it when the work is invoiced."],
      ["Offering credit without checks", "Check new customers first."],
      ["Invoicing late", "Late invoices mean late cash."],
    ),
    check(
      1,
      q("What is accounts receivable?", ["Money owed to suppliers", "Money customers owe for goods or services delivered", "Cash in the bank", "Owner's drawings"], 1, "It's what customers owe."),
      q("When is revenue recorded on a credit sale?", ["When cash is received", "When the invoice is issued", "At year-end", "When the customer orders"], 1, "When delivered and invoiced."),
      q("What are Brightside's credit terms?", ["Net 30", "Net 14", "Due on receipt", "2/10 net 30"], 1, "Net 14."),
      q("Opening AR $12,400, invoices $28,600, receipts $25,300, credit notes $700. What's closing AR?", ["$15,000", "$16,400", "$41,000", "$14,300"], 0, "$12,400 + $28,600 − $25,300 − $700."),
      q("How does an increase in AR affect operating cash flow?", ["Increases it", "Reduces it", "No effect", "Doubles it"], 1, "Revenue not yet collected."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Invoice and payment",
          ["Brightside invoices Lakeside Clinic $1,900 and is paid 12 days later. Write both entries."],
          ["Invoice: Dr Accounts receivable $1,900 · Cr Cleaning revenue $1,900.", "Payment: Dr Cash $1,900 · Cr Accounts receivable $1,900."],
        ],
        [
          "Exercise 2 — Roll forward",
          ["April: opening AR $15,000, invoices $30,200, receipts $29,800, no credit notes. What's closing AR?"],
          ["$15,000 + $30,200 − $29,800 = $15,400."],
        ],
      ),
    ),
    summary(
      ["What accounts receivable is", "The order-to-cash cycle", "Credit terms, limits, checks and deposits", "Receivables in the financial statements", "Rolling AR forward for a month"],
      "Revenue becomes cash only when customers pay. Managing AR is managing that gap.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Creating Invoices",
      ["A clear, correct invoice gets paid faster. This module covers what every invoice needs, numbering, recurring and progress invoices, and sales tax."],
      ["List what every invoice should include", "Number invoices correctly", "Use recurring and progress invoices", "Show sales tax on invoices"],
    ),
    screen(
      "What every invoice should include",
      table(
        ["Item", "Brightside example"],
        [
          ["Business name, address and tax number", "Brightside Cleaning Services"],
          ["The word “Invoice” and a unique number", "INV-2041"],
          ["Invoice date and due date", "Mar 7 · due Mar 21 (net 14)"],
          ["Customer name and address", "Apex Offices, 14 Market St"],
          ["Description, quantity, rate and amount", "Office cleaning, 5 visits × $280 = $1,400"],
          ["Tax shown separately, if any", "Sales tax / GST / VAT"],
          ["Total due and how to pay", "$1,400 · bank details or payment link"],
        ],
      ),
      note("Tax rules decide what must appear on an invoice in each country. Check local requirements if you collect sales tax, GST or VAT."),
    ),
    screen(
      "Invoice numbering",
      bullets(
        "Use one sequence with no gaps or duplicates — INV-2040, INV-2041, INV-2042.",
        "Never reuse the number of a cancelled invoice — void it and keep it on file.",
        "Let the software assign numbers automatically.",
      ),
      tip("Why gaps matter", "Missing numbers suggest unrecorded or deleted sales — exactly what auditors and tax inspectors look for."),
    ),
    screen(
      "Recurring invoices",
      p("Brightside cleans Apex Offices five times a week for a fixed weekly fee. A recurring invoice template bills it automatically every Friday."),
      compare(
        ["Save as draft", "The software creates each invoice for review first.", ["Safer when visits vary"]],
        ["Send automatically", "The software creates and emails each invoice.", ["Best for fixed fees"]],
      ),
      tip("Review templates", "Update prices on recurring templates when contracts change — they're easy to forget."),
    ),
    screen(
      "Progress invoices",
      p("For a one-off $9,000 deep-clean of a new clinic, Brightside bills in stages:"),
      table(
        ["Stage", "%", "Amount"],
        [
          ["Deposit on signing", "30%", "$2,700"],
          ["Halfway", "40%", "$3,600"],
          ["On completion", "30%", "$2,700"],
        ],
        { footer: ["Total", "100%", "$9,000"], numeric: [1, 2] },
      ),
      note("Track how much has been billed and how much is left, so nothing is billed twice or missed."),
    ),
    screen(
      "Sales tax on invoices",
      p("An invoice for $1,000 of services plus 8% sales tax:"),
      journal([["Accounts receivable", "$1,080", ""], ["Cleaning revenue", "", "$1,000"], ["Sales tax payable", "", "$80"]], "$1,080"),
      p("The tax isn't revenue — it's collected for the government and paid over later."),
      caution("Whether services are taxable, and at what rate, depends on the location. Check the rules that apply to your business."),
    ),
    screen(
      "Getting paid faster",
      bullets(
        "Send invoices by email the day the work is done.",
        "Include a payment link or clear bank details.",
        "Show the due date prominently.",
        "Ask customers to quote the invoice number with payment.",
        "Use a purchase order number if the customer requires one — missing PO numbers are a common reason invoices are held.",
      ),
    ),
    mistakes(
      ["Reusing a cancelled invoice number", "Void it and use the next number."],
      ["Including tax in revenue", "Credit it to a tax liability."],
      ["Forgetting the customer's PO number", "Their AP team may hold the invoice."],
      ["Out-of-date recurring templates", "Review prices when contracts change."],
    ),
    check(
      2,
      q("Which item must every invoice show?", ["A unique invoice number", "Your bank balance", "Your profit", "The customer's tax return"], 0, "Unique numbers identify each invoice."),
      q("An invoice is cancelled. What should happen to its number?", ["Reuse it", "Void the invoice and keep it on file", "Delete it", "Give it to the next customer"], 1, "Keep the sequence complete."),
      q("Which suits Apex Offices' fixed weekly fee?", ["A progress invoice", "A recurring invoice", "A credit note", "A statement"], 1, "Recurring invoices automate regular billing."),
      q("A $9,000 job is billed 30% / 40% / 30%. What is the halfway invoice?", ["$2,700", "$3,600", "$4,500", "$9,000"], 1, "40% of $9,000."),
      q("$1,000 plus 8% sales tax is invoiced. How much is credited to revenue?", ["$1,080", "$1,000", "$80", "$920"], 1, "Only the net amount."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Spot the gaps",
          ["An invoice shows the customer's name, a description and a total. What's missing?"],
          ["Brightside's details and tax number, the word “Invoice” and a unique number, invoice and due dates, customer address, quantity and rate, tax (if any) shown separately, and payment details."],
        ],
        [
          "Exercise 2 — Invoice with tax",
          ["Write the entry for an invoice of $2,500 plus 8% sales tax."],
          ["Dr Accounts receivable $2,700 · Cr Cleaning revenue $2,500 · Cr Sales tax payable $200."],
        ],
      ),
    ),
    summary(
      ["What every invoice must include", "Invoice numbering", "Recurring invoices", "Progress invoices", "Sales tax on invoices", "Getting paid faster"],
      "A complete, prompt, easy-to-pay invoice is the best collection tool there is.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Recording Customer Payments",
      ["Every payment must be matched to the right invoice, or customer balances become meaningless. This module covers applying payments, partial and over-payments, deposits and processor fees."],
      ["Apply payments to invoices", "Handle partial payments and overpayments", "Record deposits and prepayments", "Record payment processor fees", "Clear unapplied cash"],
    ),
    screen(
      "Applying payments to invoices",
      p("Apex Offices pays invoice INV-2041 for $1,400:"),
      journal([["Cash", "$1,400", ""], ["Accounts receivable — Apex Offices", "", "$1,400"]], "$1,400"),
      caution("Don't record a customer payment as new revenue. The sale was recorded on the invoice — doing it again doubles revenue and leaves the invoice open."),
    ),
    screen(
      "Partial payments and overpayments",
      terms(
        ["Partial payment", "Lakeside Clinic pays $1,000 of a $1,900 invoice. Apply $1,000; $900 stays open."],
        ["Overpayment", "Metro Gym pays $1,250 for a $1,200 invoice. The extra $50 is a credit owed to Metro Gym — apply it to the next invoice or refund it."],
        ["Payment for several invoices", "Apply it oldest first unless the remittance says otherwise."],
      ),
    ),
    screen(
      "Unapplied cash",
      p("A $2,000 bank transfer arrives with the reference “Thank you”. It's unapplied cash until you know which invoices it pays."),
      steps(
        ["Look for an exact match", "Is there an open invoice, or group of invoices, for $2,000?"],
        ["Check the payer's name", "The bank line usually shows who paid."],
        ["Ask the customer", "Request a remittance advice."],
        ["Apply it", "Match it to the right invoices as soon as you know."],
      ),
      tip("Ask for the invoice number", "Put “Please quote invoice number with payment” on every invoice."),
    ),
    screen(
      "Deposits and prepayments",
      p("A new clinic pays a $2,700 deposit before the deep-clean starts. Brightside hasn't earned it yet:"),
      journal([["Cash", "$2,700", ""], ["Customer deposits (liability)", "", "$2,700"]], "$2,700"),
      p("When the work is done and invoiced, the deposit is applied to the invoice."),
    ),
    screen(
      "Payment processor fees",
      p("A customer pays a $1,000 invoice by card. The processor keeps a 3% fee and pays Brightside $970."),
      journal([["Cash", "$970", ""], ["Merchant fees", "$30", ""], ["Accounts receivable", "", "$1,000"]], "$1,000"),
      note("The customer has paid in full — clear the whole $1,000. The fee is Brightside's expense."),
    ),
    screen(
      "Worked example: a week of receipts",
      table(
        ["Date", "Receipt", "Applied to", "Entry"],
        [
          ["Mar 18", "Apex Offices $1,400", "INV-2041 (in full)", "Dr Cash · Cr AR $1,400"],
          ["Mar 19", "Lakeside Clinic $1,000", "INV-2038 ($900 left open)", "Dr Cash · Cr AR $1,000"],
          ["Mar 20", "Metro Gym $1,250", "INV-2035 $1,200; $50 credit", "Dr Cash $1,250 · Cr AR $1,250"],
          ["Mar 21", "Card payment $970 net", "INV-2044 $1,000", "Dr Cash $970 · Dr Fees $30 · Cr AR $1,000"],
        ],
      ),
      note("Metro Gym's $50 overpayment shows as a credit balance on its account until used or refunded."),
    ),
    mistakes(
      ["Recording payments as revenue", "Payments settle receivables."],
      ["Leaving cash unapplied", "Apply it quickly so balances are right."],
      ["Clearing only the net card amount", "Clear the full invoice and record the fee."],
      ["Recording deposits as revenue", "Use a liability until the work is done."],
    ),
    check(
      3,
      q("A customer pays a $1,400 invoice. Which account is credited?", ["Revenue", "Accounts receivable", "Cash", "Customer deposits"], 1, "The receivable is settled."),
      q("Lakeside Clinic pays $1,000 of a $1,900 invoice. How much remains open?", ["$0", "$900", "$1,000", "$1,900"], 1, "$1,900 − $1,000."),
      q("Metro Gym pays $1,250 for a $1,200 invoice. What is the $50?", ["Extra income", "A credit owed to the customer", "A fee", "A bad debt"], 1, "Apply it or refund it."),
      q("A $2,700 deposit is received before work starts. What is credited?", ["Revenue", "Customer deposits (liability)", "Accounts receivable", "Owner's capital"], 1, "It isn't earned yet."),
      q("A $1,000 invoice is paid by card with a $30 fee. How much is cleared from AR?", ["$970", "$1,000", "$30", "$1,030"], 1, "The customer paid in full."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — One payment, two invoices",
          ["Apex Offices owes INV-2050 $1,400 and INV-2055 $1,400. It pays $2,000 with no remittance. How do you apply it?"],
          ["Oldest first: $1,400 to INV-2050 and $600 to INV-2055, leaving $800 open — then confirm with Apex."],
        ],
        [
          "Exercise 2 — Apply a deposit",
          ["The clinic's $2,700 deposit is applied to its $9,000 job, invoiced in stages. Write the entry when the deposit invoice is issued and the deposit applied."],
          ["Invoice: Dr Accounts receivable $2,700 · Cr Cleaning revenue $2,700.", "Apply deposit: Dr Customer deposits $2,700 · Cr Accounts receivable $2,700."],
        ],
      ),
    ),
    summary(
      ["Applying payments to specific invoices", "Partial payments and overpayments", "Clearing unapplied cash", "Deposits and prepayments", "Payment processor fees"],
      "Every payment belongs to an invoice. Apply it accurately and customer balances stay trustworthy.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Credit Notes and Adjustments",
      ["Sometimes an invoice needs changing after it's sent. This module covers credit notes, refunds, discounts, small write-offs and handling customer disputes."],
      ["Issue credit notes correctly", "Record refunds", "Record discounts and small write-offs", "Handle customer disputes"],
    ),
    screen(
      "Issuing credit notes",
      p("A credit note reduces what a customer owes. Never edit or delete a sent invoice — issue a credit note instead."),
      p("Brightside missed one of Apex Offices' five weekly visits, so it credits $280:"),
      journal([["Sales returns and allowances", "$280", ""], ["Accounts receivable — Apex Offices", "", "$280"]], "$280"),
      bullets("Give the credit note its own number (e.g. CN-0031).", "Reference the original invoice.", "Explain the reason."),
    ),
    screen(
      "Refunds",
      p("Metro Gym asks for its $50 overpayment back:"),
      journal([["Accounts receivable — Metro Gym", "$50", ""], ["Cash", "", "$50"]], "$50"),
      p("The debit cancels Metro Gym's $50 credit balance."),
    ),
    screen(
      "Discounts and small write-offs",
      table(
        ["Situation", "Entry"],
        [
          ["Early-payment discount taken (2% of $1,000)", "Dr Sales discounts $20 · Cr Accounts receivable $20"],
          ["A $3 underpayment not worth chasing", "Dr Bank charges or Discounts $3 · Cr Accounts receivable $3"],
        ],
      ),
      caution("Require approval for write-offs and discounts above a set limit, and record the reason. Unapproved write-offs can hide theft of customer payments."),
    ),
    screen(
      "Customer disputes",
      steps(
        ["Log it", "Record the dispute, date, contact and amount."],
        ["Investigate", "Check the contract, visit records and invoice."],
        ["Resolve", "Issue a credit note or corrected invoice, or explain why the charge stands."],
        ["Follow up", "Confirm the agreed amount is paid."],
      ),
      tip("Pay the undisputed part", "Ask the customer to pay the parts of the invoice they agree with while the dispute is sorted out."),
    ),
    screen(
      "Worked example: Lakeside Clinic's dispute",
      p("Lakeside Clinic disputes $400 of a $1,900 invoice, saying two extra deep-clean hours weren't requested."),
      table(
        ["Step", "Outcome"],
        [
          ["Pay the undisputed part", "Lakeside pays $1,500"],
          ["Investigate", "No written request for the extra hours is found"],
          ["Resolve", "Credit note CN-0032 for $400"],
          ["Prevent", "Brightside now gets written approval for extra work"],
        ],
      ),
      journal([["Sales returns and allowances", "$400", ""], ["Accounts receivable — Lakeside Clinic", "", "$400"]], "$400"),
    ),
    mistakes(
      ["Editing a sent invoice", "Issue a credit note."],
      ["Unapproved write-offs", "Require approval and a reason."],
      ["Letting disputes stall", "Log, investigate and resolve each one."],
      ["Refunding without checking the credit balance", "Refund only what's genuinely owed."],
    ),
    check(
      4,
      q("A sent invoice has an error. What should you do?", ["Edit it", "Delete it", "Issue a credit note and, if needed, a new invoice", "Ignore it"], 2, "Keep the audit trail."),
      q("A missed $280 visit is credited. Which account is credited?", ["Sales returns and allowances", "Accounts receivable", "Cash", "Revenue"], 1, "The customer owes less."),
      q("Why require approval for write-offs?", ["They can hide stolen customer payments", "To save time", "Tax law always requires it", "No reason"], 0, "A key control."),
      q("Lakeside disputes $400 of $1,900. What should it pay while the dispute is resolved?", ["$0", "$400", "$1,500", "$1,900"], 2, "The undisputed part."),
      q("Metro Gym is refunded its $50 overpayment. Which account is debited?", ["Cash", "Accounts receivable — Metro Gym", "Revenue", "Sales discounts"], 1, "It cancels the credit balance."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Credit note",
          ["Brightside overcharged Apex Offices $140 on INV-2060. Write the entry."],
          ["Dr Sales returns and allowances $140 · Cr Accounts receivable — Apex Offices $140 (credit note referencing INV-2060)."],
        ],
        [
          "Exercise 2 — Discount",
          ["A customer pays a $2,500 invoice within the 2% early-payment window. Write the entry."],
          ["Dr Cash $2,450 · Dr Sales discounts $50 · Cr Accounts receivable $2,500."],
        ],
      ),
    ),
    summary(
      ["Issuing credit notes", "Recording refunds", "Discounts and small write-offs, with approval", "A process for customer disputes"],
      "Correct invoices with credit notes, approve every write-off, and resolve disputes quickly so cash keeps flowing.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Collections",
      ["Collections is the polite, persistent process of turning overdue invoices into cash. This module covers reminders, escalation, payment plans and when to stop extending credit."],
      ["Send payment reminders that work", "Escalate overdue accounts", "Set up payment plans", "Decide when to stop extending credit"],
    ),
    screen(
      "Payment reminders that work",
      table(
        ["When", "Reminder"],
        [
          ["3 days before due", "Friendly heads-up with a copy of the invoice"],
          ["On the due date", "Polite reminder that payment is due today"],
          ["7 days overdue", "Firmer email and a phone call"],
          ["30 days overdue", "Formal letter; pause further credit"],
        ],
      ),
      tip("Make paying easy", "Include a payment link, bank details and the invoice number in every reminder."),
    ),
    screen(
      "Escalating overdue accounts",
      steps(
        ["Call the person who pays", "Find out why — lost invoice, dispute or cash problem."],
        ["Agree a date", "Confirm it in writing."],
        ["Escalate internally", "Involve the account manager or owner."],
        ["Pause service or credit", "Stop new work until the account is up to date."],
        ["External options", "A collection agency or legal action, as a last resort."],
      ),
    ),
    screen(
      "Payment plans",
      p("A customer who can't pay in full may manage instalments. Put the plan in writing with dates and amounts, and track each payment."),
      table(
        ["Instalment", "Due", "Amount"],
        [
          ["1", "Apr 5", "$600"],
          ["2", "Apr 19", "$600"],
          ["3", "May 3", "$600"],
        ],
        { footer: ["Total", "", "$1,800"], numeric: [2] },
      ),
      note("If an instalment is missed, the plan usually ends and the full balance becomes due."),
    ),
    screen(
      "When to stop extending credit",
      bullets(
        "Repeated late payment or broken promises.",
        "The balance is above the credit limit.",
        "Signs of financial trouble — bounced payments, changed ownership, slow replies.",
        "A pattern of disputes used to delay payment.",
      ),
      caution("Keep collections professional and lawful. Debt collection is regulated in many countries — follow the rules that apply to you."),
    ),
    screen(
      "Worked example: Metro Gym",
      p("Metro Gym owes $3,800 across several invoices, some over 90 days old."),
      table(
        ["Date", "Action"],
        [
          ["Mar 3", "Phone call: gym says cash is tight after losing members"],
          ["Mar 5", "Brightside pauses extra services and proposes a plan"],
          ["Mar 7", "Gym agrees in writing: $2,000 now, then three payments of $600"],
          ["Mar 8", "$2,000 received; plan tracked weekly"],
        ],
      ),
      p("$2,000 + 3 × $600 = $3,800 — the full balance."),
    ),
    mistakes(
      ["Waiting until 30 days overdue to make contact", "Start before the due date."],
      ["Verbal payment plans", "Put dates and amounts in writing."],
      ["Continuing to provide credit to a non-payer", "Pause service or credit."],
      ["Aggressive or unlawful collection", "Stay professional and follow the rules."],
    ),
    check(
      5,
      q("When is a good time for the first reminder?", ["Before the due date", "After 90 days", "Never", "At year-end"], 0, "A friendly heads-up first."),
      q("A customer is 7 days overdue. What's a good next step?", ["Legal action", "A firmer email and a phone call", "Write it off", "Do nothing"], 1, "Escalate gradually."),
      q("What should a payment plan include?", ["Dates and amounts in writing", "A verbal promise only", "No end date", "A bigger discount"], 0, "Written plans are trackable."),
      q("Metro Gym pays $2,000 then three instalments of $600. What's the total?", ["$2,600", "$3,800", "$2,000", "$4,400"], 1, "$2,000 + $1,800."),
      q("Which is a sign to stop extending credit?", ["Paying early", "Repeated broken payment promises", "Ordering more", "Asking for invoices"], 1, "Broken promises signal risk."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Reminder schedule",
          ["An invoice dated May 1 is on net 14 terms. List the reminder dates using Brightside's schedule."],
          ["Due May 15. Heads-up May 12; due-date reminder May 15; firmer email and call May 22; formal letter June 14."],
        ],
        [
          "Exercise 2 — Plan a payment plan",
          ["A customer owes $2,400 and can pay $800 a fortnight starting June 1. Write the plan."],
          ["June 1 $800; June 15 $800; June 29 $800 — total $2,400, agreed in writing."],
        ],
      ),
    ),
    summary(
      ["A reminder schedule that starts before the due date", "Escalating overdue accounts", "Written payment plans", "When to stop extending credit", "Professional, lawful collections"],
      "Start early, stay polite, put agreements in writing — and stop extending credit when the signs say so.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Reporting and Bad Debts",
      ["Not every invoice gets paid. This module shows how to read the AR aging, measure collection speed with DSO, and account for bad debts."],
      ["Read the AR aging report", "Calculate days sales outstanding", "Set up an allowance for doubtful accounts", "Write off bad debts and record recoveries"],
    ),
    screen(
      "The AR aging report",
      p("Brightside's $15,000 of receivables at March 31:"),
      table(
        ["Customer", "Current", "1–30", "31–60", "61–90", "Over 90", "Total"],
        [
          ["Apex Offices", "$4,200", "", "", "", "", "$4,200"],
          ["Lakeside Clinic", "$3,100", "$1,900", "", "", "", "$5,000"],
          ["Harbor Café", "$2,000", "", "", "", "", "$2,000"],
          ["Metro Gym", "", "", "$1,200", "$900", "$1,700", "$3,800"],
        ],
        { footer: ["Total", "$9,300", "$1,900", "$1,200", "$900", "$1,700", "$15,000"], numeric: [1, 2, 3, 4, 5, 6] },
      ),
      p("Metro Gym holds almost all the old debt — the focus for collections."),
    ),
    screen(
      "Days sales outstanding (DSO)",
      p("DSO estimates how many days, on average, customers take to pay."),
      example([["Accounts receivable", "$15,000"], ["Credit sales for March", "$28,600"], ["Days in the month", "30"]], ["DSO = $15,000 ÷ $28,600 × 30", "≈ 16 days"]),
      p("With net 14 terms, a DSO of 16 days is close to target — but Metro Gym's old balances are pulling it up."),
    ),
    screen(
      "The allowance method",
      compare(
        ["Allowance method", "Estimate uncollectible amounts at period end and set up an allowance, so receivables aren't overstated.", ["Matches the expense to the period", "Used under accrual accounting standards"]],
        ["Direct write-off", "Record the expense only when a specific debt is known to be uncollectible.", ["Simple", "Common in very small businesses"]],
      ),
    ),
    screen(
      "Worked example: estimating the allowance",
      table(
        ["Age", "Balance", "Estimated uncollectible", "Allowance"],
        [
          ["Current", "$9,300", "1%", "$93"],
          ["1–30 days", "$1,900", "3%", "$57"],
          ["31–60 days", "$1,200", "10%", "$120"],
          ["61–90 days", "$900", "25%", "$225"],
          ["Over 90 days", "$1,700", "50%", "$850"],
        ],
        { footer: ["Total", "$15,000", "", "$1,345"], numeric: [1, 3] },
      ),
      p("The allowance already holds $500, so it's topped up by $845:"),
      journal([["Bad debt expense", "$845", ""], ["Allowance for doubtful accounts", "", "$845"]], "$845"),
      p("On the balance sheet: receivables $15,000 − allowance $1,345 = $13,655."),
    ),
    screen(
      "Writing off and recovering bad debts",
      h("A $900 debt from a closed customer is confirmed uncollectible"),
      journal([["Allowance for doubtful accounts", "$900", ""], ["Accounts receivable", "", "$900"]], "$900"),
      h("Months later, $300 is unexpectedly recovered"),
      journal([["Accounts receivable", "$300", ""], ["Allowance for doubtful accounts", "", "$300"]], "$300"),
      journal([["Cash", "$300", ""], ["Accounts receivable", "", "$300"]], "$300"),
      note("Tax rules on deducting bad debts differ by country. Ask the accountant how write-offs are treated for tax."),
    ),
    mistakes(
      ["Ignoring old balances in the aging", "They're the most likely to go bad."],
      ["Never reviewing the allowance", "Update it every period."],
      ["Writing off without approval", "Every write-off needs sign-off and a reason."],
      ["Deleting written-off customers", "Keep the history in case of recovery."],
    ),
    check(
      6,
      q("In Brightside's aging, how much is over 90 days?", ["$900", "$1,200", "$1,700", "$3,800"], 2, "All from Metro Gym."),
      q("AR $15,000 and monthly credit sales $28,600. What's DSO for 30 days, roughly?", ["10 days", "16 days", "30 days", "45 days"], 1, "$15,000 ÷ $28,600 × 30."),
      q("The required allowance is $1,345 and the existing balance $500. What's the bad debt expense?", ["$1,345", "$845", "$500", "$1,845"], 1, "Top up by the difference."),
      q("Under the allowance method, a specific write-off credits:", ["Bad debt expense", "Accounts receivable", "Cash", "Revenue"], 1, "The customer's receivable is removed."),
      q("What's the net receivables figure on the balance sheet?", ["$15,000", "$13,655", "$1,345", "$16,345"], 1, "$15,000 − $1,345."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Allowance",
          ["Aging: current $8,000 (1%), 1–60 days $2,000 (10%), over 60 days $1,000 (40%). Existing allowance $300. Calculate the required allowance and the entry."],
          ["Required: $80 + $200 + $400 = $680.", "Dr Bad debt expense $380 · Cr Allowance for doubtful accounts $380."],
        ],
        [
          "Exercise 2 — DSO",
          ["AR $22,000; credit sales for the month $40,000; 30 days. Calculate DSO and compare it with net 14 terms."],
          ["DSO = $22,000 ÷ $40,000 × 30 = 16.5 days — slightly slower than the 14-day terms."],
        ],
      ),
    ),
    summary(
      ["Reading the AR aging report", "Calculating DSO", "The allowance and direct write-off methods", "Estimating an allowance from the aging", "Writing off and recovering bad debts"],
      "The aging shows where collection risk sits; the allowance makes sure the balance sheet reflects it.",
    ),
  ],
}

export default lessons
