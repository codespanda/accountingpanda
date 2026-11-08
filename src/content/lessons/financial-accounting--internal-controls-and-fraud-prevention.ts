import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, h, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Internal Controls and Fraud Prevention — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "What internal control is",
      p("Internal control is the set of processes a business uses to give reasonable assurance that its operations are effective, its reporting is reliable and it complies with laws."),
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
      table(
        ["Component", "In plain terms"],
        [
          ["Control environment", "Tone at the top — integrity, ethics, structure and accountability"],
          ["Risk assessment", "Identifying what could go wrong"],
          ["Control activities", "Approvals, reconciliations, segregation of duties, access controls"],
          ["Information and communication", "The right information reaches the right people"],
          ["Monitoring activities", "Checking that controls keep working and fixing gaps"],
        ],
      ),
      p("COSO's Internal Control — Integrated Framework (2013) is the most widely used framework, including for SOX compliance in the US."),
    ),
    screen(
      "Types of controls and regulation",
      compare(
        ["Preventive", "Stop problems before they happen.", ["Approval before payment", "System access restrictions"]],
        ["Detective", "Find problems after they happen.", ["Bank reconciliations", "Exception reports"]],
      ),
      terms(
        ["Corrective", "Fix problems once found — e.g. correcting entries, recovering funds, changing processes."],
        ["Manual vs. automated", "Automated controls (system-enforced approval limits, duplicate checks) run consistently; manual controls depend on people and need more testing."],
        ["United States — SOX", "Section 404 of the Sarbanes-Oxley Act requires public companies' management to assess internal control over financial reporting, with auditor attestation for larger filers."],
        ["India — internal financial controls", "The Companies Act, 2013 requires directors of listed companies to report on internal financial controls, and auditors to report on their adequacy and operating effectiveness."],
      ),
    ),
    check(
      1,
      q("What level of assurance do internal controls provide?", ["Absolute", "Reasonable", "None", "Guaranteed"], 1, "Collusion and override can defeat controls."),
      q("Which COSO component covers “tone at the top”?", ["Control environment", "Monitoring", "Risk assessment", "Information and communication"], 0, "It sets the ethical culture."),
      q("A bank reconciliation is which type of control?", ["Preventive", "Detective", "Corrective", "None"], 1, "It finds errors after they happen."),
      q("Requiring approval before a payment is:", ["Preventive", "Detective", "Corrective", "Optional"], 0, "It stops the problem before it happens."),
      q("Which US law requires public companies to assess internal control over financial reporting?", ["Dodd-Frank", "Sarbanes-Oxley (SOX)", "FLSA", "FUTA"], 1, "SOX Section 404."),
    ),
  ],
  1: [
    screen(
      "Identifying risks in finance processes",
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
      "Process mapping and the risk and control matrix",
      steps(
        ["Map the process", "Step by step, who does what, in which system."],
        ["Mark the risks", "Where could error or fraud occur?"],
        ["Identify existing controls", "What prevents or detects each risk?"],
        ["Find gaps", "Risks with no control, or weak controls."],
      ),
      table(
        ["Risk", "Control", "Type", "Owner", "Frequency"],
        [
          ["Payment to a fake supplier", "New suppliers approved by finance manager with verification", "Preventive", "Finance manager", "Each new supplier"],
          ["Duplicate payment", "System blocks duplicate invoice numbers per supplier", "Preventive (automated)", "AP team", "Each bill"],
          ["Unrecorded bank transactions", "Monthly bank reconciliation reviewed", "Detective", "Controller", "Monthly"],
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
    check(
      2,
      q("“Ghost employees” is a risk in which process?", ["Procure-to-pay", "Order-to-cash", "Payroll", "Close"], 2, "Fake employees on the payroll."),
      q("What does a risk and control matrix link?", ["Risks to the controls that address them", "Customers to suppliers", "Budgets to actuals", "Assets to depreciation"], 0, "It shows coverage and gaps."),
      q("A system blocking duplicate invoice numbers is:", ["A detective manual control", "A preventive automated control", "A corrective control", "Not a control"], 1, "The system stops it before payment."),
      q("Which risk deserves top priority?", ["High likelihood, high impact", "Low likelihood, low impact", "High likelihood, low impact", "None"], 0, "Focus where both are high."),
      q("What's the first step in reviewing a process?", ["Map it", "Buy software", "Fire staff", "Skip it"], 0, "Understand it before assessing it."),
    ),
  ],
  2: [
    screen(
      "Segregation of duties — including small teams",
      p("Separate four functions so no one person can both commit and hide an error or fraud: authorising, recording, custody of assets, and reconciling."),
      table(
        ["Small-team problem", "Compensating control"],
        [
          ["One bookkeeper records and pays", "Owner approves all payments in the bank and reviews the bank statement"],
          ["Same person invoices and receives cash", "Owner reviews AR aging and credit notes monthly"],
          ["Bookkeeper reconciles their own entries", "Accountant reviews reconciliations quarterly"],
        ],
      ),
    ),
    screen(
      "Authorisation, reconciliations and master data",
      terms(
        ["Authorisation limits", "E.g. manager up to $5,000, finance director up to $50,000, two directors above that — enforced in the bank and accounting system."],
        ["Reconciliations and reviews", "Bank, AR, AP, payroll and suspense accounts reconciled and reviewed by someone independent."],
        ["Master data controls", "Changes to supplier, customer and employee records — especially bank details — need independent approval and verification, with change logs reviewed."],
      ),
    ),
    screen(
      "System access and passwords",
      bullets(
        "Each user has their own login — no shared accounts.",
        "Access based on job role, reviewed at least quarterly.",
        "Leavers' access removed on their last day.",
        "Multi-factor authentication on accounting, payroll and banking systems.",
        "Administrator rights limited to a few people, with activity logged.",
      ),
      caution("Shared logins destroy accountability — you can no longer tell who did what."),
    ),
    check(
      3,
      q("Which four functions should be segregated?", ["Authorising, recording, custody and reconciling", "Buying, selling, hiring and firing", "Planning, budgeting, forecasting and reporting", "None"], 0, "Separating them prevents concealment."),
      q("A one-person bookkeeping team pays bills. What's a good compensating control?", ["Owner approves payments and reviews bank statements", "No control is possible", "Hire an auditor weekly", "Stop paying bills"], 0, "Owner oversight compensates."),
      q("Who should approve changes to supplier bank details?", ["The person who made them", "Someone independent, after verification", "The supplier", "Nobody"], 1, "Independent approval prevents diversion."),
      q("When should a leaver's system access be removed?", ["Within a year", "On their last day", "Never", "After the audit"], 1, "Immediately."),
      q("Which strengthens access security?", ["Multi-factor authentication", "Shared passwords", "Admin rights for everyone", "Writing passwords down"], 0, "MFA protects key systems."),
    ),
  ],
  3: [
    screen(
      "The fraud triangle",
      table(
        ["Element", "Meaning", "Example"],
        [
          ["Pressure", "A financial or personal need", "Debts, targets, addiction"],
          ["Opportunity", "A weakness that lets fraud happen", "No review of payments"],
          ["Rationalisation", "A story that justifies it", "“I'll pay it back” or “I'm underpaid”"],
        ],
      ),
      tip("Control the one you can", "Businesses can't remove pressure or rationalisation, but they can remove opportunity — that's what controls do."),
    ),
    screen(
      "Types of fraud",
      terms(
        ["Asset misappropriation", "Stealing cash, inventory or other assets. The most common type of occupational fraud."],
        ["Financial statement fraud", "Deliberately misstating the accounts — e.g. inflating revenue or hiding liabilities. Less common but usually far more costly."],
        ["Corruption", "Bribery, kickbacks and conflicts of interest."],
      ),
      table(
        ["Scheme", "How it works"],
        [
          ["Billing fraud", "Payments to a fake supplier or for inflated invoices"],
          ["Payroll fraud", "Ghost employees, inflated hours, unauthorised raises"],
          ["Expense fraud", "Personal costs claimed, fake or duplicate receipts"],
          ["Skimming", "Taking cash before the sale is recorded"],
        ],
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
    check(
      4,
      q("What are the three elements of the fraud triangle?", ["Pressure, opportunity and rationalisation", "People, process and technology", "Assets, liabilities and equity", "Motive, money and method"], 0, "Cressey's fraud triangle."),
      q("Which element can controls most directly reduce?", ["Pressure", "Opportunity", "Rationalisation", "None"], 1, "Controls remove opportunities."),
      q("What's the most common type of occupational fraud?", ["Financial statement fraud", "Asset misappropriation", "Corruption", "Tax fraud"], 1, "Stealing assets is most common."),
      q("Taking cash before a sale is recorded is called:", ["Skimming", "Phishing", "Lapping", "Kiting"], 0, "Skimming leaves no record."),
      q("An email asks you to pay a supplier's new bank account urgently. What should you do?", ["Pay it", "Verify by calling a known phone number", "Reply to the email", "Forward it to the supplier"], 1, "Independent verification stops payment diversion."),
    ),
  ],
  4: [
    screen(
      "Behavioural and transaction red flags",
      compare(
        ["Behavioural", "Living beyond means, refusing holidays, unusually close supplier relationships, defensiveness about their work.", ["Watch, don't accuse"]],
        ["Transaction", "Round amounts, amounts just under approval limits, duplicate invoice numbers, payments at weekends, new suppliers with large payments.", ["Investigate with evidence"]],
      ),
    ),
    screen(
      "Data analytics for fraud detection",
      table(
        ["Test", "What it finds"],
        [
          ["Duplicate payments (same supplier, amount, date)", "Double-paid bills"],
          ["Supplier bank account matches employee bank account", "Fictitious suppliers"],
          ["Payments just under approval thresholds", "Split invoices"],
          ["Employees with no leave, tax deductions or address", "Ghost employees"],
          ["Benford's Law on leading digits", "Fabricated amounts"],
          ["Journals posted at unusual times or by unusual users", "Override or manipulation"],
        ],
      ),
      tip("Start simple", "A spreadsheet of a year's payments, sorted and filtered, finds most duplicates and split invoices."),
    ),
    screen(
      "Whistleblowing and responding to suspected fraud",
      p("Tips are consistently the most common way occupational fraud is detected — so make reporting easy and safe."),
      bullets(
        "Provide a confidential, ideally anonymous, reporting channel.",
        "Protect whistleblowers from retaliation.",
        "Tell staff, suppliers and customers it exists.",
      ),
      steps(
        ["Don't confront or tip off", "Avoid alerting the suspect."],
        ["Preserve evidence", "Secure records, emails and devices; don't alter anything."],
        ["Escalate", "To the owner, board or audit committee, and legal advisers."],
        ["Investigate properly", "Often with forensic accountants."],
        ["Act and fix", "Recover losses, report to police or insurers as advised, and close the control gap."],
      ),
    ),
    check(
      5,
      q("Which is a transaction red flag?", ["Amounts just under approval limits", "Paying on the due date", "Using purchase orders", "Monthly reconciliations"], 0, "It suggests split invoices."),
      q("A supplier's bank account matches an employee's. What might it indicate?", ["A fictitious supplier", "A loyal employee", "A tax refund", "Nothing"], 0, "Classic fake vendor fraud."),
      q("What's the most common way occupational fraud is detected?", ["External audit", "Tips", "Police", "Software alone"], 1, "Tips lead the detection methods."),
      q("When fraud is suspected, what should you avoid?", ["Preserving evidence", "Confronting the suspect immediately", "Escalating", "Getting legal advice"], 1, "Confronting can destroy evidence."),
      q("Why protect whistleblowers?", ["So people feel safe reporting", "It's optional", "To punish them", "To save money"], 0, "Fear of retaliation stops reports."),
    ),
  ],
  5: [
    screen(
      "Walkthroughs and control testing",
      compare(
        ["Walkthrough", "Follow one transaction end to end to confirm the process and controls work as documented.", ["Tests design"]],
        ["Operating effectiveness testing", "Test a sample of instances over a period to confirm the control worked every time.", ["Tests operation"]],
      ),
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
      p("Evidence should show who performed the control, when, and what they checked — e.g. a signed and dated reconciliation with supporting statements."),
      note("Sample sizes vary by methodology and risk; these are common ranges, not fixed rules."),
    ),
    screen(
      "Deficiencies, remediation and the small-business checklist",
      terms(
        ["Deficiency", "A control is missing or doesn't work as intended."],
        ["Significant deficiency / material weakness", "More serious deficiencies that could lead to a material misstatement — terms used in SOX reporting."],
        ["Remediation plan", "What will change, who owns it, by when, and how it will be retested."],
      ),
      h("Internal control checklist for small businesses"),
      bullets(
        "Owner approves all payments and reviews the bank statement monthly.",
        "Bank-detail changes verified by phone.",
        "Bank, card and payroll reconciliations done monthly and reviewed.",
        "Own logins, MFA and role-based access.",
        "Monthly review of the AR aging, credit notes and write-offs.",
        "Periodic stock counts and fixed asset checks.",
      ),
    ),
    check(
      6,
      q("What does a walkthrough test?", ["Control design, by following one transaction", "Every transaction", "Tax compliance", "Sales targets"], 0, "It confirms the process works as documented."),
      q("What sample is typical for a monthly control?", ["1", "2–5", "40", "100"], 1, "Common range for monthly controls."),
      q("What should control evidence show?", ["Who did it, when, and what was checked", "Only the result", "Nothing", "The tester's opinion"], 0, "Evidence must be specific."),
      q("What's in a remediation plan?", ["What changes, who owns it, by when and how it's retested", "Only blame", "A new logo", "Budget cuts"], 0, "Actions with owners and dates."),
      q("Which is a key small-business control?", ["Owner approves payments and reviews bank statements", "One person does everything unchecked", "Shared logins", "No reconciliations"], 0, "Owner oversight is powerful."),
    ),
  ],
}

export default lessons
