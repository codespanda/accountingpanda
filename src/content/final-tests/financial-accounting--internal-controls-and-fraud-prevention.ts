import { fq } from "@/lib/finalTest"

// Final test bank for Internal Controls and Fraud Prevention — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("How many principles support COSO's five components?", "17", ["5", "10", "25"], "The 2013 framework."),
  fq("Which SOX section requires CEOs and CFOs to certify their reports?", "Section 302", ["Section 404", "Section 101", "Section 906 only"], "Section 404 covers management's ICFR assessment."),
  fq("In India, who reports on the adequacy and operating effectiveness of internal financial controls?", "The auditors", ["The tax department", "Customers", "Suppliers"], "Under the Companies Act, 2013."),
  fq("A monthly exceptions report to the CFO belongs to which COSO component?", "Information and communication", ["Control environment", "Risk assessment", "Monitoring activities"], "The right information reaches the right people."),
  fq("Recovering a duplicate payment from a supplier is which type of control?", "Corrective", ["Preventive", "Detective", "Automated"], "It fixes a problem already found."),
  fq("Why is Larkspur strengthening its controls now?", "It plans to list on a stock exchange in two years", ["Its auditors left", "It was fined", "It's closing down"], "Listed companies must assess controls."),

  // Module 2
  fq("Which weakness let Larkspur's clerk bill the fake supplier without review?", "Bills under $5,000 needed no approval", ["Every bill needed two approvals", "The bank blocked payments", "Purchase orders were required for everything"], "Combined with no POs for services."),
  fq("How were Larkspur's payment runs released before the fraud?", "In one batch without reviewing payees", ["Payee by payee", "By the board", "Never"], "A detective weakness."),
  fq("Which order-to-cash weakness did Larkspur find?", "Sales reps could issue credit notes without approval", ["Invoices were numbered", "Credit checks were done", "Cash was applied daily"], "Now credit notes over $500 need approval."),
  fq("What was Larkspur's payroll weakness?", "HR and payroll were the same person", ["Payroll was outsourced", "There was no payroll", "Pay was approved by the board"], "A segregation of duties gap."),
  fq("Where does fraud often hide in procure-to-pay?", "Services bought without purchase orders", ["Bank reconciliations", "Customer invoices", "Payroll tax filings"], "Fewer documents to check."),
  fq("What should every row of a risk and control matrix name?", "An owner for the control", ["A supplier", "A customer", "A tax rate"], "Unowned controls don't happen."),

  // Module 3
  fq("Under Larkspur's new limits, who approves an $18,000 bill?", "The controller", ["The department manager", "The CFO", "The AP clerk"], "$2,000–$25,000."),
  fq("Where should approval limits be enforced?", "In the accounting and banking systems", ["Only on paper", "Only in staff training", "Nowhere"], "Systems enforce them consistently."),
  fq("Which quarterly check would have revealed Larkspur's fraud immediately?", "Comparing supplier bank accounts with employee bank accounts", ["Counting inventory", "Reviewing sales prices", "Checking the office lease"], "The supplier used the clerk's spouse's account."),
  fq("Who should approve new customers and credit limits?", "Credit control", ["The sales rep who found them", "The customer", "The warehouse"], "A master data control."),
  fq("How often should system access be reviewed?", "At least quarterly", ["Every five years", "Never", "Only when someone complains"], "Remove leavers immediately."),
  fq("Which four functions does segregation of duties separate?", "Authorising, recording, custody and reconciling", ["Selling, buying, hiring and training", "Planning, budgeting, forecasting and reporting", "Billing, coding, filing and printing"], "So no one person can commit and hide fraud."),

  // Module 4
  fq("What was the pressure in Larkspur's case?", "The clerk's large personal debts", ["A sales target", "A tax audit", "A new manager"], "Part of the fraud triangle."),
  fq("What was the name of Larkspur's fake supplier?", "Prime Packaging Solutions", ["Larkspur Logistics", "Quick Tools Co", "Northline Fasteners"], "Set up with the spouse's bank account."),
  fq("How many invoices did the clerk submit to the fake supplier?", "38", ["14", "5", "186"], "Each just under $5,000."),
  fq("Why does pressure for financial statement fraud rise before a listing?", "There's pressure to show strong results to investors", ["Listings reduce scrutiny", "Auditors leave", "Tax rates fall"], "Management may be tempted to misstate."),
  fq("Hiding stock theft with false adjustments is which scheme?", "Inventory theft (asset misappropriation)", ["Financial statement fraud", "Phishing", "Skimming"], "Assets are stolen and concealed."),
  fq("Manipulating provisions and impairments to boost profit is:", "Financial statement fraud", ["Asset misappropriation", "Payroll fraud", "Expense fraud"], "Estimates are misstated."),

  // Module 5
  fq("Why did nobody else ever process the clerk's payments?", "She never took more than two days off in a row", ["She worked nights", "Payments were automated", "She had a deputy"], "A behavioural red flag."),
  fq("How was Larkspur's fraud first discovered?", "A warehouse worker asked why Prime Packaging never delivered anything", ["The bank called", "An external audit", "The clerk confessed"], "A tip — the most common method."),
  fq("What does Benford's Law analysis look for?", "Unusual patterns in leading digits that suggest fabricated amounts", ["Late payments", "Missing invoices", "Payroll tax errors"], "Real data follows a predictable pattern."),
  fq("Which analytics test finds ghost employees?", "Employees with no leave, tax deductions or address", ["Duplicate invoices", "Weekend journals", "Supplier bank matches"], "Real employees take leave and have addresses."),
  fq("What should happen with every whistleblowing report?", "It's investigated and the outcome recorded", ["It's ignored if anonymous", "It's forwarded to the suspect", "It's deleted"], "Trust depends on follow-through."),
  fq("After recovering losses, what else must be done?", "Close the control gap that allowed the fraud", ["Nothing", "Stop all payments", "Fire the whole team"], "Prevent a repeat."),

  // Module 6
  fq("What did Larkspur's walkthrough follow?", "A new supplier from request to first payment", ["A customer complaint", "A payroll run", "A bank deposit"], "To confirm the new controls happen."),
  fq("How many of 25 new suppliers lacked a recorded call-back?", "3", ["25", "0", "10"], "Reported as a deficiency."),
  fq("Which deficiency creates a reasonable possibility of a material misstatement going undetected?", "A material weakness", ["A minor deficiency", "A walkthrough", "A compensating control"], "A SOX reporting term."),
  fq("How will Larkspur retest the call-back fix?", "Sample 10 new suppliers next quarter", ["Never", "Ask the clerk", "Wait for another fraud"], "Retesting confirms the fix works."),
  fq("What sample size is typical for a daily control?", "20–40", ["1", "2", "2–5"], "More instances, larger sample."),
  fq("Which item is on the small-business control checklist?", "A confidential way to report concerns", ["Shared logins for speed", "Paying bills from statements", "Annual reconciliations only"], "Tips detect fraud."),
]
