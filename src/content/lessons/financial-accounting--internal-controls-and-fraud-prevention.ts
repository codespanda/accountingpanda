import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  exercises,
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

// Internal Controls and Fraud Prevention — lesson screens by module index (0 = Module 1).
// The course follows Larkspur Foods Inc., a food distributor preparing for a
// stock-market listing. One fraud case runs through the course.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Internal Control Foundations",
      ["Internal control is how a business makes sure its operations work, its reports are reliable and it follows the law. This module lays the foundations using Larkspur Foods."],
      ["Explain what internal control is and why it matters", "Describe the five COSO components", "Classify preventive, detective and corrective controls", "Compare manual and automated controls", "Outline SOX and India's internal financial controls"],
    ),
    screen(
      "Meet Larkspur Foods",
      p("Larkspur Foods Inc. distributes food to restaurants and grocers. It has $40 million of revenue, 120 staff and a finance team of six. It plans to list on a stock exchange in two years, so its controls must be ready for scrutiny."),
      p("Last year Larkspur discovered that an accounts payable clerk had paid about $186,000 to a fake supplier over 14 months. You'll follow that case through the course."),
    ),
    screen(
      "What internal control is",
      p("Internal control is the set of processes a business uses to give reasonable assurance that operations are effective, reporting is reliable and it complies with laws."),
      bullets(
        "Protects assets from loss and theft.",
        "Catches errors before they reach the reports.",
        "Deters fraud by making it harder and more likely to be found.",
        "Supports trust from owners, lenders, auditors and regulators.",
      ),
      note("Controls give reasonable, not absolute, assurance. Collusion, management override and human error can defeat them."),
    ),
    screen(
      "The COSO framework",
      p("COSO's Internal Control — Integrated Framework (2013) has five components, supported by 17 principles:"),
      table(
        ["Component", "In plain terms", "Larkspur example"],
        [
          ["Control environment", "Tone at the top — integrity, ethics, structure, accountability", "A code of conduct signed by every employee"],
          ["Risk assessment", "Identifying what could go wrong", "Mapping fraud risks in payments"],
          ["Control activities", "Approvals, reconciliations, segregation of duties, access controls", "Second approval for supplier bank changes"],
          ["Information and communication", "The right information reaches the right people", "A monthly exceptions report to the CFO"],
          ["Monitoring activities", "Checking controls keep working and fixing gaps", "Quarterly control testing"],
        ],
      ),
    ),
    screen(
      "Preventive, detective and corrective controls",
      compare(
        ["Preventive", "Stop problems before they happen.", ["Approval before payment", "System access restrictions"]],
        ["Detective", "Find problems after they happen.", ["Bank reconciliations", "Exception reports"]],
      ),
      terms(
        ["Corrective", "Fix problems once found — correcting entries, recovering funds, changing processes."],
        ["Manual vs. automated", "Automated controls (system-enforced approval limits, duplicate checks) run consistently; manual controls depend on people and need more testing."],
      ),
    ),
    screen(
      "Regulatory context — SOX and India",
      terms(
        ["United States — SOX", "Under the Sarbanes-Oxley Act, public companies' CEOs and CFOs certify their reports (Section 302), and management assesses internal control over financial reporting (Section 404), with auditor attestation for larger filers."],
        ["India — internal financial controls", "The Companies Act, 2013 requires directors of listed companies to report on internal financial controls, and auditors to report on their adequacy and operating effectiveness."],
      ),
      p("Once listed in the US, Larkspur will have to assess and report on its controls every year — which is why it's strengthening them now."),
    ),
    mistakes(
      ["Treating controls as a guarantee", "They give reasonable assurance."],
      ["Ignoring the control environment", "Tone at the top shapes everything else."],
      ["Relying only on detective controls", "Combine prevention and detection."],
      ["Assuming automated controls need no checking", "Test that they're set up correctly."],
    ),
    check(
      1,
      q("What level of assurance do internal controls provide?", ["Reasonable", "Absolute", "None", "Guaranteed"], 0, "Collusion and override can defeat controls."),
      q("Which COSO component covers “tone at the top”?", ["Control environment", "Monitoring activities", "Risk assessment", "Information and communication"], 0, "It sets the ethical culture."),
      q("A bank reconciliation is which type of control?", ["Detective", "Preventive", "Corrective", "None"], 0, "It finds errors after they happen."),
      q("Requiring approval before a payment is:", ["Preventive", "Detective", "Corrective", "Optional"], 0, "It stops the problem first."),
      q("Which US law requires public companies to assess internal control over financial reporting?", ["Sarbanes-Oxley (SOX)", "Dodd-Frank", "FLSA", "FUTA"], 0, "SOX Section 404."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Classify controls",
          ["Preventive, detective or corrective? (a) A system blocks payments above $5,000 without a second approval. (b) A monthly report lists new suppliers. (c) Recovering a duplicate payment from a supplier."],
          ["(a) Preventive. (b) Detective. (c) Corrective."],
        ],
        [
          "Exercise 2 — COSO component",
          ["Which COSO component is weak if staff believe “the owner bends the rules, so we can too”?"],
          ["The control environment — tone at the top."],
        ],
      ),
    ),
    summary(
      ["What internal control is and its limits", "The five COSO components", "Preventive, detective and corrective controls", "Manual vs. automated controls", "SOX and India's internal financial controls"],
      "Good internal control starts with tone at the top and combines controls that prevent problems with controls that detect them.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Risk Assessment and Process Mapping",
      ["You can't control risks you haven't identified. This module maps Larkspur's finance processes and builds a risk and control matrix."],
      ["Identify risks in finance processes", "Map procure-to-pay, order-to-cash and payroll", "Build a risk and control matrix", "Prioritise high-risk areas"],
    ),
    screen(
      "Risks in finance processes",
      table(
        ["Process", "Example risks"],
        [
          ["Procure-to-pay", "Fake suppliers, duplicate payments, paying for goods not received"],
          ["Order-to-cash", "Unrecorded sales, stolen receipts, unauthorised discounts or write-offs"],
          ["Payroll", "Ghost employees, unauthorised pay rises, inflated hours"],
          ["Cash and banking", "Unauthorised transfers, altered payee details"],
          ["Financial close", "Unsupported journals, misstated estimates"],
        ],
      ),
    ),
    screen(
      "Mapping procure-to-pay",
      steps(
        ["Request", "Warehouse requests supplies."],
        ["Supplier setup", "AP clerk adds new suppliers — no second approval (weakness)."],
        ["Order and receive", "Purchase orders for stock; none for services (weakness)."],
        ["Bill entry", "AP clerk enters bills."],
        ["Approval", "Bills under $5,000 need no approval (weakness)."],
        ["Payment", "AP clerk prepares the payment file; the controller releases it in one batch without reviewing payees (weakness)."],
      ),
      caution("This map shows exactly how Larkspur's fake-supplier fraud worked: the clerk could create a supplier, bill it for services under $5,000 and include it in an unreviewed payment run."),
    ),
    screen(
      "Mapping order-to-cash and payroll",
      table(
        ["Process", "Key steps", "Weakness found"],
        [
          ["Order-to-cash", "Order → credit check → delivery → invoice → collect → apply cash", "Sales reps could issue credit notes without approval"],
          ["Payroll", "Hire → set up employee → record hours → run payroll → pay → report", "HR and payroll were the same person"],
        ],
      ),
    ),
    screen(
      "A risk and control matrix",
      table(
        ["Risk", "Control", "Type", "Owner", "Frequency"],
        [
          ["Payment to a fake supplier", "New suppliers approved by the controller with independent verification", "Preventive", "Controller", "Each new supplier"],
          ["Duplicate payment", "System blocks duplicate invoice numbers per supplier", "Preventive (automated)", "AP team", "Each bill"],
          ["Unauthorised credit notes", "Credit notes over $500 approved by the sales manager", "Preventive", "Sales manager", "Each credit note"],
          ["Unrecorded bank transactions", "Monthly bank reconciliation, reviewed", "Detective", "Controller", "Monthly"],
        ],
      ),
    ),
    screen(
      "Prioritising high-risk areas",
      p("Rate each risk by likelihood and impact, then focus effort on the highest scores."),
      table(
        ["", "Low impact", "High impact"],
        [
          ["High likelihood", "Medium priority", "Top priority"],
          ["Low likelihood", "Low priority", "Medium priority"],
        ],
      ),
      tip("Cash moves first", "Anything that can move cash out of the business — payments, payroll, bank details, refunds — usually deserves top priority."),
    ),
    mistakes(
      ["Designing controls before mapping the process", "Map first, then find the gaps."],
      ["Treating all risks equally", "Prioritise by likelihood and impact."],
      ["Ignoring services spend", "Fraud often hides in services without purchase orders."],
      ["A matrix nobody owns", "Name an owner for every control."],
    ),
    check(
      2,
      q("“Ghost employees” is a risk in which process?", ["Payroll", "Procure-to-pay", "Order-to-cash", "Financial close"], 0, "Fake employees on the payroll."),
      q("What does a risk and control matrix link?", ["Risks to the controls that address them", "Customers to suppliers", "Budgets to actuals", "Assets to depreciation"], 0, "It shows coverage and gaps."),
      q("A system blocking duplicate invoice numbers is:", ["A preventive automated control", "A detective manual control", "A corrective control", "Not a control"], 0, "It stops it before payment."),
      q("Which risk deserves top priority?", ["High likelihood, high impact", "Low likelihood, low impact", "High likelihood, low impact", "None"], 0, "Focus where both are high."),
      q("What's the first step in reviewing a process?", ["Map it", "Buy software", "Dismiss staff", "Skip it"], 0, "Understand it before assessing it."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Find the gaps",
          ["List three weaknesses in Larkspur's procure-to-pay map that allowed the fraud."],
          ["The clerk could add suppliers without approval; bills under $5,000 needed no approval; payment runs were released without reviewing payees. (Also: no POs for services.)"],
        ],
        [
          "Exercise 2 — Add to the matrix",
          ["Write a matrix row for the payroll weakness (HR and payroll the same person)."],
          ["Risk: ghost employees or unauthorised pay changes. Control: new employees and pay changes approved by HR; payroll run by someone else and reviewed by the controller. Type: preventive. Owner: HR manager and controller. Frequency: each change and each pay run."],
        ],
      ),
    ),
    summary(
      ["Risks in each finance process", "Mapping procure-to-pay, order-to-cash and payroll", "Building a risk and control matrix", "Prioritising by likelihood and impact"],
      "Map each process, mark where it can go wrong, and make sure every important risk has an owned control.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Designing Key Controls",
      ["With risks mapped, Larkspur needs controls that work. This module covers the key controls every finance team should have — including in small teams."],
      ["Apply segregation of duties, even in small teams", "Set authorisation limits and approvals", "Use reconciliations and independent reviews", "Control master data for vendors, customers and employees", "Control system access and passwords"],
    ),
    screen(
      "Segregation of duties",
      p("Separate four functions so no one person can both commit and hide an error or fraud: authorising, recording, custody of assets, and reconciling."),
      table(
        ["Small-team problem", "Compensating control"],
        [
          ["One person records and pays bills", "A manager approves all payments in the bank and reviews the bank statement"],
          ["The same person invoices and receives cash", "A manager reviews the AR aging and credit notes monthly"],
          ["A bookkeeper reconciles their own entries", "The accountant reviews reconciliations quarterly"],
        ],
      ),
    ),
    screen(
      "Authorisation limits and approvals",
      table(
        ["Payment or bill", "Approver (after the fraud)"],
        [
          ["Up to $2,000", "Department manager"],
          ["$2,000 – $25,000", "Controller"],
          ["Over $25,000", "CFO"],
        ],
      ),
      bullets(
        "Every bill is approved — the old “under $5,000 needs no approval” rule was removed.",
        "Limits are enforced in the accounting and banking systems, not just on paper.",
        "Approvers check the goods or services were received and the price is right.",
      ),
    ),
    screen(
      "Reconciliations and independent reviews",
      bullets(
        "Bank, AR, AP, payroll and suspense accounts reconciled monthly.",
        "Reviewed and signed by someone who didn't prepare them.",
        "Payment runs reviewed payee by payee before release.",
        "A monthly report of new suppliers, changed bank details and unusual payments goes to the CFO.",
      ),
    ),
    screen(
      "Master data controls",
      terms(
        ["Suppliers", "New suppliers and bank-detail changes approved by someone other than the AP clerk, with call-back verification on a known number."],
        ["Customers", "New customers and credit limits approved by credit control."],
        ["Employees", "New hires and pay changes approved by HR and processed by payroll — different people."],
        ["Change logs", "Every master data change is logged and reviewed monthly."],
      ),
      tip("Check for matches", "Compare supplier bank accounts with employee bank accounts every quarter — Larkspur's fraud would have shown up immediately."),
    ),
    screen(
      "System access and password controls",
      bullets(
        "Each user has their own login — no shared accounts.",
        "Access based on job role, reviewed at least quarterly.",
        "Leavers' access removed on their last day.",
        "Multi-factor authentication on accounting, payroll and banking systems.",
        "Administrator rights limited to a few people, with activity logged.",
      ),
      caution("Shared logins destroy accountability — you can no longer tell who did what."),
    ),
    mistakes(
      ["Approval limits on paper only", "Enforce them in the system."],
      ["No compensating controls in small teams", "Add owner or manager reviews."],
      ["Bank changes by email", "Call back and get a second approval."],
      ["Access never reviewed", "Review quarterly and remove leavers immediately."],
    ),
    check(
      3,
      q("Which four functions should be segregated?", ["Authorising, recording, custody and reconciling", "Buying, selling, hiring and firing", "Planning, budgeting, forecasting and reporting", "None"], 0, "Separating them prevents concealment."),
      q("A one-person team records and pays bills. What's a good compensating control?", ["A manager approves payments in the bank and reviews statements", "No control is possible", "Hire an auditor weekly", "Stop paying bills"], 0, "Management oversight compensates."),
      q("Who should approve changes to supplier bank details?", ["Someone independent, after call-back verification", "The person who made them", "The supplier", "Nobody"], 0, "Independent approval prevents diversion."),
      q("When should a leaver's system access be removed?", ["On their last day", "Within a year", "Never", "After the audit"], 0, "Immediately."),
      q("Which strengthens access security?", ["Multi-factor authentication", "Shared passwords", "Admin rights for everyone", "Writing passwords down"], 0, "MFA protects key systems."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Approver",
          ["Under Larkspur's new limits, who approves (a) a $1,500 bill, (b) an $18,000 bill, (c) a $40,000 bill?"],
          ["(a) Department manager. (b) Controller. (c) CFO."],
        ],
        [
          "Exercise 2 — Design a control",
          ["Suggest a detective control that would have caught the fake supplier within a month."],
          ["A monthly review of new suppliers and their bank details (including a match against employee bank accounts), or a payee-by-payee review of each payment run."],
        ],
      ),
    ),
    summary(
      ["Segregation of duties and compensating controls", "System-enforced authorisation limits", "Reconciliations and independent reviews", "Master data controls", "Access and password controls"],
      "Key controls work together: separate duties, approve within limits, reconcile independently and protect master data and access.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Understanding Fraud",
      ["To prevent fraud you need to understand why it happens and how it's done. This module explains the fraud triangle and the common schemes — including Larkspur's."],
      ["Explain the fraud triangle", "Describe asset misappropriation schemes", "Describe financial statement fraud", "Recognise payment, invoice and payroll frauds", "Recognise phishing and fake bank-detail requests"],
    ),
    screen(
      "The fraud triangle",
      table(
        ["Element", "Meaning", "Larkspur's AP clerk"],
        [
          ["Pressure", "A financial or personal need", "Large personal debts"],
          ["Opportunity", "A weakness that lets fraud happen", "Could add suppliers and bill them without approval"],
          ["Rationalisation", "A story that justifies it", "“I'm underpaid — I'll pay it back”"],
        ],
      ),
      tip("Control the one you can", "Businesses can't remove pressure or rationalisation, but they can remove opportunity — that's what controls do."),
    ),
    screen(
      "Asset misappropriation",
      p("Stealing cash, inventory or other assets — the most common type of occupational fraud."),
      table(
        ["Scheme", "How it works"],
        [
          ["Billing fraud", "Payments to a fake supplier or for inflated invoices"],
          ["Payroll fraud", "Ghost employees, inflated hours, unauthorised raises"],
          ["Expense fraud", "Personal costs claimed, fake or duplicate receipts"],
          ["Skimming", "Taking cash before the sale is recorded"],
          ["Inventory theft", "Stock taken and hidden with false adjustments"],
        ],
      ),
    ),
    screen(
      "Financial statement fraud",
      p("Deliberately misstating the accounts — usually by management, to hit targets or attract investors. Less common than asset misappropriation, but usually far more costly."),
      bullets(
        "Recording fake or early revenue.",
        "Hiding liabilities or expenses.",
        "Overstating assets such as inventory or receivables.",
        "Manipulating estimates — provisions, depreciation, impairments.",
      ),
      caution("As Larkspur prepares to list, pressure to show strong results rises — making this risk more important."),
    ),
    screen(
      "Larkspur's fake supplier scheme",
      steps(
        ["Create the supplier", "The clerk added “Prime Packaging Solutions”, with her spouse's bank account."],
        ["Bill for services", "38 invoices for “packaging consulting”, each just under $5,000 — no PO and no approval needed."],
        ["Pay through normal runs", "The payments sat inside large batches the controller released without reviewing payees."],
        ["Total loss", "About $186,000 over 14 months."],
      ),
    ),
    screen(
      "Phishing and fake bank-detail changes",
      p("Business email compromise is one of the costliest frauds: criminals impersonate a supplier or executive and ask for payment to a new bank account."),
      bullets(
        "Emails that look like a known supplier but come from a slightly different domain.",
        "Urgent requests from a “CEO” to make a confidential payment.",
        "Requests to change bank details just before a large payment.",
      ),
      caution("Always verify bank-detail changes and unusual payment requests by calling a known phone number — never one in the email."),
    ),
    mistakes(
      ["Assuming trusted staff wouldn't commit fraud", "Pressure and opportunity can affect anyone."],
      ["Focusing only on large payments", "Fraud often hides just under limits."],
      ["Ignoring management fraud risk", "Override is a real risk."],
      ["Acting on email instructions alone", "Verify by phone."],
    ),
    check(
      4,
      q("What are the three elements of the fraud triangle?", ["Pressure, opportunity and rationalisation", "People, process and technology", "Assets, liabilities and equity", "Motive, money and method"], 0, "Cressey's fraud triangle."),
      q("Which element can controls most directly reduce?", ["Opportunity", "Pressure", "Rationalisation", "None"], 0, "Controls remove opportunities."),
      q("What's the most common type of occupational fraud?", ["Asset misappropriation", "Financial statement fraud", "Corruption", "Tax fraud"], 0, "Stealing assets."),
      q("Taking cash before a sale is recorded is called:", ["Skimming", "Phishing", "Lapping", "Kiting"], 0, "It leaves no record."),
      q("An email asks you to pay a supplier's new bank account urgently. What should you do?", ["Verify by calling a known phone number", "Pay it", "Reply to the email", "Forward it to the supplier"], 0, "Independent verification."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Triangle",
          ["Identify pressure, opportunity and rationalisation: “A warehouse manager with gambling debts, who can adjust stock records unchecked, takes stock because ‘the company won't miss it’.”"],
          ["Pressure: gambling debts. Opportunity: unchecked stock adjustments. Rationalisation: “the company won't miss it”."],
        ],
        [
          "Exercise 2 — Name the scheme",
          ["(a) An employee claims the same taxi receipt twice. (b) The CFO records next month's sales this month. (c) A former employee stays on the payroll."],
          ["(a) Expense fraud. (b) Financial statement fraud. (c) Payroll fraud (ghost employee)."],
        ],
      ),
    ),
    summary(
      ["The fraud triangle", "Asset misappropriation schemes", "Financial statement fraud", "How Larkspur's fake supplier scheme worked", "Phishing and fake bank-detail requests"],
      "Fraud needs pressure, opportunity and rationalisation. Controls can't remove the first two, but they can remove the opportunity.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Detecting Fraud and Red Flags",
      ["Even good controls can be beaten. This module covers how fraud is detected — and how Larkspur's was."],
      ["Recognise behavioural red flags", "Spot transaction red flags", "Use data analytics for fraud detection", "Set up whistleblowing channels", "Respond correctly when fraud is suspected"],
    ),
    screen(
      "Behavioural red flags",
      bullets(
        "Living beyond their means.",
        "Refusing to take holidays or share duties.",
        "Unusually close relationships with suppliers or customers.",
        "Defensiveness or irritability about their work.",
        "Financial difficulties or other pressures.",
      ),
      note("Behavioural red flags aren't proof. Watch, document, and look for evidence — don't accuse."),
      p("Larkspur's clerk never took more than two days off in a row, so nobody else ever processed her payments."),
    ),
    screen(
      "Transaction red flags",
      table(
        ["Red flag", "In Larkspur's case"],
        [
          ["Amounts just under approval limits", "38 invoices averaging about $4,895, under the $5,000 limit"],
          ["Round or repeated amounts", "Several identical invoice amounts"],
          ["Vague descriptions", "“Packaging consulting” with no deliverables"],
          ["New supplier with growing payments", "Set up 14 months earlier"],
          ["Bank account matching an employee's", "The clerk's spouse's account"],
        ],
      ),
    ),
    screen(
      "Data analytics for fraud detection",
      table(
        ["Test", "What it finds"],
        [
          ["Duplicate payments (same supplier, amount, date)", "Double-paid bills"],
          ["Supplier bank account matches an employee's", "Fictitious suppliers"],
          ["Payments just under approval thresholds", "Split or structured invoices"],
          ["Employees with no leave, tax deductions or address", "Ghost employees"],
          ["Benford's Law on leading digits", "Fabricated amounts"],
          ["Journals posted at unusual times or by unusual users", "Override or manipulation"],
        ],
      ),
      tip("Start simple", "A spreadsheet of a year's payments, sorted and filtered, finds most duplicates and split invoices."),
    ),
    screen(
      "Whistleblowing channels",
      p("Tips are consistently the most common way occupational fraud is detected. Larkspur's fraud came to light when a warehouse worker asked why “Prime Packaging” was paid but never delivered anything."),
      bullets(
        "Provide a confidential, ideally anonymous, reporting channel.",
        "Protect whistleblowers from retaliation.",
        "Tell staff, suppliers and customers it exists.",
        "Investigate every report and record the outcome.",
      ),
    ),
    screen(
      "Responding when fraud is suspected",
      steps(
        ["Don't confront or tip off", "Avoid alerting the suspect."],
        ["Preserve evidence", "Secure records, emails and devices; don't alter anything."],
        ["Escalate", "To the owner, board or audit committee, and legal advisers."],
        ["Investigate properly", "Often with forensic accountants."],
        ["Act and fix", "Recover losses, report to police or insurers as advised, and close the control gap."],
      ),
      caution("A clumsy confrontation can destroy evidence and expose the business to legal claims."),
    ),
    mistakes(
      ["Accusing on behaviour alone", "Look for evidence."],
      ["No whistleblowing channel", "Tips are the top detection method."],
      ["Confronting the suspect first", "Preserve evidence and escalate."],
      ["Fixing the loss but not the gap", "Close the control weakness too."],
    ),
    check(
      5,
      q("Which is a transaction red flag?", ["Amounts just under approval limits", "Paying on the due date", "Using purchase orders", "Monthly reconciliations"], 0, "It suggests split invoices."),
      q("A supplier's bank account matches an employee's. What might it indicate?", ["A fictitious supplier", "A loyal employee", "A tax refund", "Nothing"], 0, "A classic fake vendor sign."),
      q("What's the most common way occupational fraud is detected?", ["Tips", "External audit", "Police", "Software alone"], 0, "As in Larkspur's case."),
      q("When fraud is suspected, what should you avoid?", ["Confronting the suspect immediately", "Preserving evidence", "Escalating", "Getting legal advice"], 0, "It can destroy evidence."),
      q("Why protect whistleblowers?", ["So people feel safe reporting", "It's optional", "To punish them", "To save money"], 0, "Fear of retaliation stops reports."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Analytics test",
          ["Which analytics test would most directly have found Larkspur's fraud?"],
          ["Matching supplier bank accounts against employee (and their spouses') bank accounts — or flagging repeated payments just under the $5,000 limit."],
        ],
        [
          "Exercise 2 — First steps",
          ["A manager suspects a colleague is stealing stock. List the first three things to do."],
          ["Don't confront or tip off; preserve evidence (records, CCTV, system logs); escalate to the owner or audit committee and legal advisers."],
        ],
      ),
    ),
    summary(
      ["Behavioural red flags", "Transaction red flags", "Data analytics tests", "Whistleblowing channels", "Responding to suspected fraud"],
      "Watch for red flags, use data to look for patterns, make reporting safe — and when you suspect fraud, preserve evidence before anything else.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Testing, Documenting and Improving Controls",
      ["Controls only help if they work. This module covers how Larkspur tests its controls, documents evidence, reports deficiencies and fixes them."],
      ["Perform walkthroughs and control testing", "Choose sample sizes and evidence", "Report control deficiencies", "Build remediation plans", "Use an internal control checklist for small businesses"],
    ),
    screen(
      "Walkthroughs and control testing",
      compare(
        ["Walkthrough", "Follow one transaction end to end to confirm the process and controls work as documented.", ["Tests design"]],
        ["Operating effectiveness testing", "Test a sample of instances over a period to confirm the control worked every time.", ["Tests operation"]],
      ),
      p("Larkspur walks a new supplier from request to first payment to confirm the new approval and call-back controls actually happen."),
    ),
    screen(
      "Sampling and evidence",
      table(
        ["Control frequency", "Typical sample size"],
        [
          ["Annual", "1"],
          ["Quarterly", "2"],
          ["Monthly", "2–5"],
          ["Weekly", "5–15"],
          ["Daily or many times a day", "20–40"],
        ],
      ),
      p("Evidence should show who performed the control, when, and what they checked — e.g. a signed, dated supplier approval form with the call-back recorded."),
      note("Sample sizes vary by methodology and risk; these are common ranges, not fixed rules."),
    ),
    screen(
      "Reporting control deficiencies",
      terms(
        ["Deficiency", "A control is missing or doesn't work as intended."],
        ["Significant deficiency", "Important enough to merit attention by those overseeing financial reporting."],
        ["Material weakness", "A deficiency that creates a reasonable possibility of a material misstatement not being prevented or detected — a SOX reporting term."],
      ),
      p("Testing found that 3 of 25 new suppliers were set up without a recorded call-back. Larkspur reported it as a deficiency to the audit committee."),
    ),
    screen(
      "Remediation plans",
      table(
        ["Element", "Larkspur's plan for the call-back gap"],
        [
          ["What changes", "Supplier setup can't be completed in the system without a recorded call-back"],
          ["Owner", "Controller"],
          ["Deadline", "End of next month"],
          ["How it's retested", "Sample 10 new suppliers next quarter"],
        ],
      ),
    ),
    screen(
      "Internal control checklist for small businesses",
      bullets(
        "The owner or a manager approves all payments and reviews the bank statement monthly.",
        "Bank-detail changes are verified by phone and approved by a second person.",
        "Bank, card and payroll reconciliations are done monthly and reviewed.",
        "Everyone has their own login, with MFA and role-based access.",
        "AR aging, credit notes and write-offs are reviewed monthly.",
        "Stock counts and fixed asset checks happen periodically.",
        "A confidential way to report concerns exists.",
      ),
    ),
    mistakes(
      ["Testing only design, never operation", "Test samples over time."],
      ["Evidence without who, when and what", "Make evidence specific."],
      ["Reporting deficiencies with no fix", "Create a remediation plan."],
      ["Never retesting", "Confirm the fix works."],
    ),
    check(
      6,
      q("What does a walkthrough test?", ["Control design, by following one transaction", "Every transaction", "Tax compliance", "Sales targets"], 0, "It confirms the documented process."),
      q("What sample is typical for a monthly control?", ["2–5", "1", "40", "100"], 0, "A common range."),
      q("What should control evidence show?", ["Who did it, when, and what was checked", "Only the result", "Nothing", "The tester's opinion"], 0, "Specific evidence."),
      q("What's in a remediation plan?", ["What changes, who owns it, by when and how it's retested", "Only blame", "A new logo", "Budget cuts"], 0, "Actions with owners and dates."),
      q("Which is a key small-business control?", ["The owner approves payments and reviews bank statements", "One person does everything unchecked", "Shared logins", "No reconciliations"], 0, "Owner oversight is powerful."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Sample size",
          ["Larkspur's payment-run review happens weekly. How many instances might be tested for a year?"],
          ["Typically 5–15 weekly instances, chosen across the year."],
        ],
        [
          "Exercise 2 — Remediation",
          ["Testing shows 4 of 20 journals over $25,000 lacked controller approval. Draft a remediation plan."],
          ["Change: the system blocks posting journals over $25,000 without controller approval. Owner: CFO. Deadline: next month. Retest: sample 10 large journals next quarter."],
        ],
      ),
    ),
    summary(
      ["Walkthroughs and operating effectiveness testing", "Sample sizes and evidence", "Deficiencies, significant deficiencies and material weaknesses", "Remediation plans", "A small-business control checklist"],
      "Test that controls work, document the proof, and fix gaps with owned, dated plans — then test again.",
    ),
  ],
}

export default lessons
