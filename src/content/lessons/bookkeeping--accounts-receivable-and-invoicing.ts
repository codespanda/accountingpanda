import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, example, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Accounts Receivable and Invoicing — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "What accounts receivable covers",
      p("Accounts receivable (AR) is the money customers owe the business for goods or services already delivered on credit."),
      journal([["Accounts receivable", "$3,000", ""], ["Sales", "", "$3,000"]], "$3,000"),
      p("AR is a current asset: the business has earned the money and expects to collect it soon."),
      note("Sales are recorded when the invoice is issued, not when the customer pays. Collecting the cash later simply turns the receivable into cash."),
    ),
    screen(
      "The order-to-cash cycle",
      steps(
        ["Order", "The customer orders goods or services."],
        ["Credit check", "Decide whether to offer credit and how much."],
        ["Deliver", "Goods shipped or work completed."],
        ["Invoice", "Send an accurate invoice promptly."],
        ["Collect", "Remind, follow up and receive payment."],
        ["Apply and reconcile", "Match the payment to the invoice."],
      ),
      tip("Invoice fast", "Every day an invoice isn't sent is a day added to when you're paid. Invoice on delivery, not at month-end."),
    ),
    screen(
      "Credit terms and credit checks",
      terms(
        ["Credit terms", "How long customers have to pay, e.g. net 14 or net 30."],
        ["Credit limit", "The most a customer can owe at one time."],
        ["Credit check", "References, credit agency reports or payment history before offering credit."],
        ["Deposits", "Ask new or risky customers for part payment upfront."],
      ),
      caution("Offering credit is lending money to your customer. Only do it when you're reasonably confident you'll be paid."),
    ),
    check(
      1,
      q("What is accounts receivable?", ["Money owed to suppliers", "Money customers owe for goods or services delivered", "Cash in the bank", "Owner's drawings"], 1, "AR is what customers owe you."),
      q("When is revenue recorded on a credit sale?", ["When cash is received", "When the invoice is issued", "At year-end", "When the customer orders"], 1, "It's earned when delivered and invoiced."),
      q("What type of account is AR?", ["Current asset", "Liability", "Expense", "Equity"], 0, "It's an amount the business expects to collect soon."),
      q("What's the best time to send an invoice?", ["At year-end", "As soon as goods or services are delivered", "When the customer asks", "After 30 days"], 1, "Prompt invoicing gets you paid sooner."),
      q("What is a credit limit?", ["The interest rate", "The maximum a customer can owe at one time", "The invoice number", "A discount"], 1, "It caps the risk on each customer."),
    ),
  ],
  1: [
    screen(
      "What every invoice should include",
      table(
        ["Item", "Example"],
        [
          ["Your business name, address and tax number", "Panda Design LLC"],
          ["The word “Invoice” and a unique number", "INV-1187"],
          ["Invoice date and due date", "Mar 4 · due Apr 3 (net 30)"],
          ["Customer name and address", "Bright Bakery"],
          ["Description, quantity, rate and amount", "Logo design — 12 hours × $75 = $900"],
          ["Tax shown separately, if any", "Sales tax / GST / VAT"],
          ["Total due and payment instructions", "$900 · bank details or payment link"],
        ],
      ),
      note("Tax rules decide what must appear on an invoice in each country. Check local requirements if you collect sales tax, GST or VAT."),
    ),
    screen(
      "Invoice numbering",
      bullets(
        "Use one sequence with no gaps or duplicates, e.g. INV-1001, INV-1002.",
        "Never reuse the number of a cancelled invoice — void it and keep it on file.",
        "Let the software assign numbers automatically.",
      ),
      tip("Why gaps matter", "Missing numbers suggest unrecorded or deleted sales — exactly what auditors and tax inspectors look for."),
    ),
    screen(
      "Recurring and progress invoices, and tax",
      compare(
        ["Recurring invoices", "The same amount billed on a schedule, e.g. a $250 monthly retainer.", ["Set up once in software", "Check prices yearly"]],
        ["Progress invoices", "Large jobs billed in stages, e.g. 30% deposit, 40% midway, 30% on completion.", ["Track how much is billed", "Show what's left to bill"]],
      ),
      h("Invoice of $1,000 plus 8% sales tax"),
      journal([["Accounts receivable", "$1,080", ""], ["Sales", "", "$1,000"], ["Sales tax payable", "", "$80"]], "$1,080"),
      p("The tax isn't income — it's collected for the government and paid over later."),
    ),
    check(
      2,
      q("Which item must every invoice show?", ["A unique invoice number", "Your bank balance", "Your profit", "The customer's tax return"], 0, "Unique numbers identify each invoice."),
      q("An invoice is cancelled. What should happen to its number?", ["Reuse it", "Void the invoice and keep it on file", "Delete it", "Give it to the next customer"], 1, "Voiding keeps the sequence complete."),
      q("A $250 monthly retainer is best billed using:", ["Progress invoices", "Recurring invoices", "Credit notes", "Statements"], 1, "Recurring invoices automate regular billing."),
      q("$1,000 plus 8% sales tax is invoiced. How much is credited to Sales?", ["$1,080", "$1,000", "$80", "$920"], 1, "Only the net amount is revenue."),
      q("Why do gaps in invoice numbers matter?", ["They may suggest unrecorded or deleted sales", "They look untidy", "Software can't handle them", "They change tax rates"], 0, "Complete sequences support complete records."),
    ),
  ],
  2: [
    screen(
      "Applying payments to invoices",
      p("Record each payment against the specific invoice it pays, so the customer's balance and the AR aging stay accurate."),
      journal([["Cash", "$900", ""], ["Accounts receivable — Bright Bakery", "", "$900"]], "$900"),
      caution("Don't record a customer payment as new sales income. The sale was already recorded on the invoice — doing it again doubles revenue and leaves the invoice open."),
    ),
    screen(
      "Partial payments and overpayments",
      terms(
        ["Partial payment", "Customer pays $500 of a $900 invoice. Apply $500; $400 stays open on the invoice."],
        ["Overpayment", "Customer pays $950 for a $900 invoice. The $50 extra is a credit owed to the customer — apply it to the next invoice or refund it."],
        ["Payment with no reference", "Check amounts against open invoices and contact the customer before applying it."],
      ),
      tip("Ask for the invoice number", "Put “Please quote invoice number with payment” on every invoice. It makes applying payments much easier."),
    ),
    screen(
      "Deposits, prepayments and processor fees",
      h("Customer pays a $600 deposit before work starts"),
      journal([["Cash", "$600", ""], ["Customer deposits (liability)", "", "$600"]], "$600"),
      p("When the invoice is issued, apply the deposit against it."),
      h("Customer pays a $1,000 invoice by card; processor keeps a 3% fee"),
      journal([["Cash", "$970", ""], ["Merchant fees", "$30", ""], ["Accounts receivable", "", "$1,000"]], "$1,000"),
      note("The customer has paid in full — clear the whole $1,000. The fee is your expense."),
    ),
    check(
      3,
      q("A customer pays a $900 invoice. Which account is credited?", ["Sales", "Accounts receivable", "Cash", "Customer deposits"], 1, "The receivable is settled."),
      q("A customer pays $500 of a $900 invoice. How much remains open?", ["$0", "$400", "$500", "$900"], 1, "$900 − $500 = $400."),
      q("A customer overpays by $50. What is the $50?", ["Extra income", "A credit owed to the customer", "A fee", "A bad debt"], 1, "It belongs to the customer until applied or refunded."),
      q("A $600 deposit is received before work starts. What is credited?", ["Sales", "Customer deposits (liability)", "Accounts receivable", "Owner's capital"], 1, "It isn't earned yet."),
      q("A $1,000 invoice is paid by card with a $30 fee. How much is cleared from AR?", ["$970", "$1,000", "$30", "$1,030"], 1, "The customer paid in full; the fee is your cost."),
    ),
  ],
  3: [
    screen(
      "Issuing credit notes",
      p("A credit note reduces what a customer owes — for returns, pricing errors or a goodwill reduction. Never edit or delete a sent invoice; issue a credit note instead."),
      h("Credit note for $200 of returned goods"),
      journal([["Sales returns", "$200", ""], ["Accounts receivable", "", "$200"]], "$200"),
      bullets("Give the credit note its own number (e.g. CN-0031).", "Reference the original invoice.", "Explain the reason."),
    ),
    screen(
      "Refunds, discounts and write-offs",
      table(
        ["Situation", "Entry"],
        [
          ["Refund cash for a credit note", "Debit Accounts receivable, credit Cash"],
          ["Early-payment discount taken", "Debit Sales discounts, credit Accounts receivable"],
          ["Small leftover balance written off", "Debit Bad debts (or discounts), credit Accounts receivable"],
        ],
      ),
      note("Get approval for write-offs and discounts above a set limit, and record the reason. Unapproved write-offs can hide theft of customer payments."),
    ),
    screen(
      "Customer disputes",
      steps(
        ["Log it", "Record the dispute, date, contact and amount."],
        ["Investigate", "Check the order, delivery and invoice."],
        ["Resolve", "Issue a credit note, a corrected invoice, or explain why the charge stands."],
        ["Follow up", "Confirm the agreed amount is paid."],
      ),
      tip("Pay the undisputed part", "Ask the customer to pay the parts of the invoice they agree with while the dispute is sorted out."),
    ),
    check(
      4,
      q("A sent invoice has an error. What should you do?", ["Edit it", "Delete it", "Issue a credit note and, if needed, a new invoice", "Ignore it"], 2, "Credit notes keep the audit trail."),
      q("A credit note for $200 of returns is issued. Which account is credited?", ["Sales returns", "Accounts receivable", "Cash", "Inventory"], 1, "The customer owes less."),
      q("Why require approval for write-offs?", ["They can hide stolen customer payments", "To save time", "Tax law always requires it", "No reason"], 0, "Approval and reasons are key controls."),
      q("A customer disputes one line of an invoice. What's a good approach?", ["Write off the whole invoice", "Ask them to pay the undisputed part while you investigate", "Stop all sales", "Delete the invoice"], 1, "It keeps cash flowing while the issue is resolved."),
      q("What should a credit note reference?", ["The original invoice", "The bank account", "The supplier", "The tax return"], 0, "It links the credit to the invoice."),
    ),
  ],
  4: [
    screen(
      "Payment reminders that work",
      table(
        ["When", "Reminder"],
        [
          ["7 days before due", "Friendly heads-up with a copy of the invoice"],
          ["On the due date", "Polite reminder that payment is due today"],
          ["7 days overdue", "Firmer email and a phone call"],
          ["30 days overdue", "Formal letter; consider pausing further credit"],
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
        ["Pause credit", "Stop new work or orders until the account is up to date."],
        ["External options", "A collection agency or legal action, as a last resort."],
      ),
    ),
    screen(
      "Payment plans and stopping credit",
      p("A customer who can't pay in full may manage instalments. Put the plan in writing with dates and amounts, and track each payment."),
      h("When to stop extending credit"),
      bullets(
        "Repeated late payment or broken promises.",
        "The balance is above the credit limit.",
        "Signs of financial trouble — bounced payments, changed ownership, slow replies.",
        "A dispute pattern used to delay payment.",
      ),
      caution("Keep collections professional and lawful. Debt collection is regulated in many countries — follow the rules that apply to you."),
    ),
    check(
      5,
      q("When is a good time for the first reminder?", ["Before the due date", "After 90 days", "Never", "At year-end"], 0, "A friendly heads-up before the due date works well."),
      q("A customer is 7 days overdue. What's a good next step?", ["Legal action", "A firmer email and a phone call", "Write it off", "Do nothing"], 1, "Escalate gradually."),
      q("What should a payment plan include?", ["Dates and amounts in writing", "A verbal promise only", "No end date", "A bigger discount"], 0, "Written plans are clearer and easier to track."),
      q("Which is a sign to stop extending credit?", ["Paying early", "Repeated broken payment promises", "Ordering more", "Asking for invoices"], 1, "Broken promises signal risk."),
      q("What should every reminder include?", ["Payment link or bank details and the invoice number", "Your profit figures", "Other customers' names", "Nothing"], 0, "Make it easy to pay."),
    ),
  ],
  5: [
    screen(
      "The AR aging report",
      table(
        ["Customer", "Current", "1–30", "31–60", "61–90", "Over 90", "Total"],
        [
          ["Bright Bakery", "$900", "", "", "", "", "$900"],
          ["Lane Builders", "$2,000", "$1,500", "", "", "", "$3,500"],
          ["Oak Cafe", "", "", "$600", "$400", "$800", "$1,800"],
        ],
        { footer: ["Total", "$2,900", "$1,500", "$600", "$400", "$800", "$6,200"], numeric: [1, 2, 3, 4, 5, 6] },
      ),
      p("Review it weekly. The older a balance, the less likely it is to be collected — Oak Cafe needs action now."),
    ),
    screen(
      "Days sales outstanding (DSO)",
      p("DSO estimates how many days, on average, customers take to pay."),
      example([["Accounts receivable", "$6,200"], ["Credit sales for the month", "$9,300"], ["Days in the month", "30"]], ["DSO = $6,200 ÷ $9,300 × 30", "20 days"]),
      p("Compare DSO with your terms. With net 30 terms, a DSO of 20 is healthy; a DSO of 50 means customers are paying well late."),
    ),
    screen(
      "Bad debts: allowance and write-off",
      compare(
        ["Allowance method", "Estimate uncollectible amounts at period-end and set up an allowance, so receivables aren't overstated.", ["Matches the expense to the period", "Used under accrual accounting standards"]],
        ["Direct write-off", "Record the expense only when a specific debt is known to be uncollectible.", ["Simple", "Common in very small businesses"]],
      ),
      h("Allowance: estimate $500 of doubtful debts"),
      journal([["Bad debt expense", "$500", ""], ["Allowance for doubtful accounts", "", "$500"]], "$500"),
      h("Later, Oak Cafe's $800 is confirmed uncollectible"),
      journal([["Allowance for doubtful accounts", "$800", ""], ["Accounts receivable — Oak Cafe", "", "$800"]], "$800"),
      note("Tax rules on deducting bad debts differ by country. Ask the accountant how write-offs are treated for tax."),
    ),
    check(
      6,
      q("What does the AR aging report show?", ["Customer balances grouped by how overdue they are", "Supplier bills", "Bank fees", "Staff ages"], 0, "It shows how long receivables have been outstanding."),
      q("AR is $6,200 and monthly credit sales $9,300. What's DSO for 30 days?", ["10 days", "20 days", "30 days", "45 days"], 1, "$6,200 ÷ $9,300 × 30 = 20 days."),
      q("With net 30 terms, what does a DSO of 50 suggest?", ["Customers pay early", "Customers are paying late", "Sales are high", "Nothing"], 1, "50 days is well beyond the 30-day terms."),
      q("Under the allowance method, which entry records the estimate?", ["Debit Bad debt expense, credit Allowance for doubtful accounts", "Debit AR, credit Sales", "Debit Cash, credit AR", "Debit Allowance, credit Cash"], 0, "The estimate is expensed and held in the allowance."),
      q("A specific debt is written off against the allowance. What's credited?", ["Bad debt expense", "Accounts receivable", "Cash", "Sales"], 1, "The customer's receivable is removed."),
    ),
  ],
}

export default lessons
