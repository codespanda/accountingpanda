import { fq } from "@/lib/finalTest"

// Final test bank for Accounts Receivable and Invoicing — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("When does Brightside invoice its customers?", "Every Friday for that week's work", ["At the end of each quarter", "Only when customers ask", "Once a year"], "Fast invoicing means faster cash."),
  fq("What credit limit might Brightside set for a new customer?", "$5,000", ["Unlimited", "$0 always", "$500,000"], "A limit caps the risk."),
  fq("Where does Accounts receivable appear on the balance sheet?", "Current assets, less any allowance for doubtful accounts", ["Current liabilities", "Equity", "Fixed assets"], "It's expected to be collected soon."),
  fq("In April, opening AR is $15,000, invoices $30,200 and receipts $29,800. What's closing AR?", "$15,400", ["$14,600", "$45,200", "$29,800"], "Roll the balance forward."),
  fq("Who might be asked to pay a deposit before work starts?", "New or higher-risk customers", ["Every long-standing customer", "Suppliers", "Employees"], "Deposits reduce credit risk."),
  fq("What is the last step of the order-to-cash cycle?", "Apply and reconcile the payment", ["Agree the work", "Check credit", "Deliver the service"], "Each payment is matched to its invoice."),

  // Module 2
  fq("What does INV-2041 on Brightside's invoice represent?", "A unique invoice number", ["The customer's account number", "The tax rate", "The due date"], "Each invoice has its own number."),
  fq("What is the due date of an invoice dated March 7 on net 14 terms?", "March 21", ["March 14", "April 7", "March 7"], "14 days after the invoice date."),
  fq("Which recurring invoice setting suits fixed weekly fees?", "Send automatically", ["Save as draft every time", "Create manually each week", "Never invoice"], "Fixed amounts don't need review each time."),
  fq("A $9,000 job is billed 30% / 40% / 30%. What is the final invoice?", "$2,700", ["$3,600", "$3,000", "$9,000"], "30% of $9,000."),
  fq("$2,500 plus 8% sales tax is invoiced. How much is credited to Sales tax payable?", "$200", ["$2,700", "$2,500", "$250"], "8% of $2,500."),
  fq("Why include the customer's purchase order number on an invoice?", "Their AP team may hold invoices without it", ["It sets the tax rate", "It replaces the invoice number", "It's required by banks"], "Missing PO numbers delay payment."),

  // Module 3
  fq("A $2,000 transfer arrives with the reference “Thank you”. What is it until identified?", "Unapplied cash", ["Revenue", "A customer deposit", "A bank error"], "Find out which invoices it pays."),
  fq("A payment covers several invoices with no remittance. How is it usually applied?", "Oldest invoices first", ["Newest invoices first", "To the largest invoice", "Left unapplied permanently"], "Unless the customer says otherwise."),
  fq("Apex owes two $1,400 invoices and pays $2,000. How much stays open?", "$800", ["$600", "$1,400", "$0"], "$2,800 − $2,000."),
  fq("Metro Gym's $50 overpayment appears on its account as:", "A credit balance", ["A debit balance", "Revenue", "A bad debt"], "It's owed back to the customer."),
  fq("A card payment of $1,000 nets $970. What's the $30?", "Merchant fees — Brightside's expense", ["A discount to the customer", "Unpaid by the customer", "Sales tax"], "The customer paid in full."),
  fq("What should every invoice ask customers to include with payment?", "The invoice number", ["Their bank PIN", "Their tax return", "Their staff list"], "It makes applying payments easy."),

  // Module 4
  fq("What did Brightside credit Apex Offices for the missed weekly visit?", "$280", ["$1,400", "$140", "$400"], "One of five visits at $280."),
  fq("What does a credit note need besides its own number?", "A reference to the original invoice and the reason", ["The customer's bank details", "A new tax rate", "Nothing else"], "It keeps the audit trail clear."),
  fq("A customer pays a $2,500 invoice within a 2% discount window. What is debited to Sales discounts?", "$50", ["$25", "$2,450", "$250"], "2% of $2,500."),
  fq("What changed at Brightside after the Lakeside dispute?", "It now gets written approval for extra work", ["It stopped cleaning clinics", "It raised all prices", "It removed credit notes"], "Preventing future disputes."),
  fq("How much did Lakeside Clinic pay while its dispute was resolved?", "$1,500", ["$1,900", "$400", "$0"], "The undisputed part."),
  fq("What's the first step in handling a customer dispute?", "Log it — date, contact and amount", ["Write off the invoice", "Stop all services immediately", "Ignore it"], "Then investigate and resolve."),

  // Module 5
  fq("According to Brightside's schedule, when is the first payment reminder sent?", "3 days before the due date", ["On the due date", "30 days overdue", "90 days overdue"], "A friendly heads-up."),
  fq("When should further credit be paused?", "At 30 days overdue", ["Before the invoice is sent", "After one day overdue", "Never"], "Along with a formal letter."),
  fq("What usually happens if a payment plan instalment is missed?", "The plan ends and the full balance becomes due", ["The plan is extended automatically", "The debt is forgiven", "Nothing"], "Written plans should say so."),
  fq("Why did Metro Gym fall behind?", "It lost members and cash was tight", ["Brightside invoiced late", "The bank made an error", "It moved city"], "Learned from the phone call."),
  fq("What's the last resort in escalating an overdue account?", "A collection agency or legal action", ["A friendly email", "A phone call", "A copy of the invoice"], "After all other steps."),
  fq("Which is a sign of financial trouble in a customer?", "Bounced payments and slow replies", ["Paying early", "Ordering more", "Asking for invoices by email"], "Watch for these before extending credit."),

  // Module 6
  fq("Which customer held most of Brightside's overdue balances?", "Metro Gym", ["Apex Offices", "Harbor Café", "Lakeside Clinic"], "$3,800, much of it over 90 days."),
  fq("What estimated loss rate did Brightside apply to balances over 90 days?", "50%", ["1%", "10%", "25%"], "The oldest debts are least likely to be collected."),
  fq("What was Brightside's required allowance for doubtful accounts?", "$1,345", ["$845", "$500", "$15,000"], "The total of each age band's estimate."),
  fq("A written-off debt is later partly recovered. What's the first entry?", "Reinstate it: debit Accounts receivable, credit Allowance", ["Debit Cash, credit Revenue", "Debit Bad debt expense, credit Cash", "No entry is needed"], "Then record the cash received."),
  fq("Which method records bad debt expense only when a specific debt is known to be uncollectible?", "Direct write-off", ["Allowance method", "Accrual method", "Aging method"], "Simple, but less accurate."),
  fq("AR $22,000 and monthly credit sales $40,000. What's DSO for a 30-day month?", "16.5 days", ["30 days", "18 days", "55 days"], "$22,000 ÷ $40,000 × 30."),
]
