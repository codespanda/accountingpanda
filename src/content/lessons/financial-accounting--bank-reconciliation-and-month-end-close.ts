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

// Bank Reconciliation and Month-End Close (advanced) — lesson screens by module
// index (0 = Module 1). The course follows Meridian Outdoor Group: Meridian
// Outdoor Inc. (US parent, reports in USD) and Meridian Outdoor Pty Ltd
// (Australian subsidiary, keeps its books in AUD). Exchange rates are illustrative.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Designing the Financial Close",
      ["A group close is a project with deadlines, dependencies and owners. This module designs Meridian Outdoor Group's close so it's fast, reliable and repeatable."],
      ["Build a close calendar in working days", "Identify the critical path", "Assign preparers and reviewers", "Set close materiality and review thresholds", "Track close metrics"],
    ),
    screen(
      "Meet Meridian Outdoor Group",
      table(
        ["Entity", "Location", "Currency", "Finance team"],
        [
          ["Meridian Outdoor Inc. (parent)", "Denver, US", "USD", "Controller, two accountants"],
          ["Meridian Outdoor Pty Ltd (subsidiary)", "Sydney, Australia", "AUD", "One accountant"],
        ],
      ),
      p("The group reports in US dollars. Its close currently takes ten working days and the controller, Erin, wants it down to six."),
    ),
    screen(
      "The close calendar",
      table(
        ["Day", "Tasks", "Owner"],
        [
          ["WD−3 to WD−1", "Accrual estimates, prepayment schedules, cut-off reminders, intercompany charges agreed", "Both entities"],
          ["WD+1", "Bank feeds final; AR and AP cut-off; payroll posted", "Both entities"],
          ["WD+2", "Bank, card, gateway and subledger reconciliations; intercompany matched", "Both entities"],
          ["WD+3", "Accruals, depreciation, revaluations; subsidiary pack submitted", "Both entities"],
          ["WD+4", "Translation, eliminations and consolidation", "Parent"],
          ["WD+5", "Flux review and management pack drafted", "Controller"],
          ["WD+6", "Final review, results published, periods locked", "Controller"],
        ],
      ),
    ),
    screen(
      "Critical path and dependencies",
      p("The critical path is the chain of dependent tasks that sets the close length."),
      steps(
        ["Subsidiary closes its books", "Bank recs, accruals, depreciation."],
        ["Subsidiary pack submitted", "Trial balance and intercompany schedule."],
        ["Intercompany agreed", "Both sides match."],
        ["Translation and eliminations", "Consolidation can't start before this."],
        ["Group review and publish", "The end of the chain."],
      ),
      tip("Shorten the critical path first", "Speeding up a task that isn't on the critical path — say, filing invoices faster — doesn't shorten the close."),
    ),
    screen(
      "Roles, materiality and thresholds",
      terms(
        ["Preparer", "Does the task — e.g. the Sydney accountant prepares the AUD bank reconciliation."],
        ["Reviewer", "Checks it independently — e.g. a Denver accountant reviews it."],
        ["Close materiality", "The size of difference that must be investigated or adjusted. Meridian uses $1,000 or 5% of the account balance, whichever is lower."],
        ["Review thresholds", "Rules for when variances need explaining — e.g. over $5,000 and over 10% (Module 5)."],
      ),
    ),
    screen(
      "Close metrics",
      table(
        ["Metric", "What it tells you", "Meridian today"],
        [
          ["Working days to close", "Speed", "10"],
          ["Post-close adjustments", "Quality — entries after results were “final”", "9"],
          ["Reconciliations on time", "Discipline", "70%"],
          ["Unreconciled items over 60 days", "Hidden risk", "14"],
          ["Manual journals posted", "How manual the close still is", "85"],
        ],
      ),
      note("Track metrics every month. The aim is a faster close with fewer post-close adjustments — not speed alone."),
    ),
    mistakes(
      ["Planning the close in calendar days", "Use working days relative to month end."],
      ["Ignoring dependencies", "Map the critical path."],
      ["Same person preparing and reviewing", "Split the roles."],
      ["Measuring only speed", "Track post-close adjustments too."],
    ),
    check(
      1,
      q("What does WD+3 mean?", ["The third working day after month end", "Three days before month end", "Wednesday", "Week 3"], 0, "Counted from month end."),
      q("What is the critical path?", ["The chain of dependent tasks that sets the close length", "The fastest task", "The reviewer's route", "The bank's process"], 0, "It determines total duration."),
      q("Why have a separate reviewer for each task?", ["Independent checking catches errors", "It's faster", "Software requires it", "To share passwords"], 0, "Review is a key control."),
      q("Which metric signals close quality?", ["Post-close adjustments", "Number of emails", "Office hours", "Coffee consumed"], 0, "Fewer late entries means a cleaner close."),
      q("Speeding up a task not on the critical path will:", ["Not shorten the close", "Shorten the close", "Lengthen the close", "Remove reviews"], 0, "Only critical-path tasks set the timeline."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Find the critical path",
          ["Consolidation can't start until the subsidiary pack arrives (WD+3). The parent's own reconciliations finish on WD+2. Which drives the timeline?"],
          ["The subsidiary pack — it's on the critical path. Speeding up the parent's reconciliations won't help."],
        ],
        [
          "Exercise 2 — Materiality",
          ["Using Meridian's rule (lower of $1,000 or 5% of the balance), must a $600 difference on a $10,000 account be investigated?"],
          ["5% of $10,000 is $500, which is lower than $1,000. $600 exceeds $500 — yes, investigate."],
        ],
      ),
    ),
    summary(
      ["A working-day close calendar", "The critical path and dependencies", "Preparers, reviewers and close materiality", "Close metrics"],
      "Design the close like a project: a calendar, a critical path, clear owners and metrics that measure both speed and quality.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Advanced Bank and Cash Reconciliations",
      ["Groups have many bank accounts, several currencies and high transaction volumes. This module covers reconciling them at scale."],
      ["Reconcile multiple accounts and cash pools", "Revalue and reconcile foreign-currency accounts", "Use high-volume matching rules and exception queues", "Reconcile payment gateways and clearing accounts", "Age, escalate and approve unreconciled items"],
    ),
    screen(
      "Multiple accounts and cash pooling",
      bullets(
        "Meridian has eight bank accounts across two entities — every one is reconciled monthly, including dormant ones.",
        "A bank account register lists each account's entity, bank, purpose, signatories and reconciliation owner.",
        "Cash pooling sweeps the subsidiary's surplus AUD into a group account each day — each sweep creates an intercompany balance that must be recorded and reconciled.",
      ),
      caution("Dormant accounts are a favourite place for fraud and errors to hide. Reconcile them too."),
    ),
    screen(
      "Foreign-currency bank accounts",
      p("The parent holds an AUD account for paying Australian suppliers. It's reconciled in AUD first, then revalued to USD at the closing rate."),
      table(
        ["", "AUD", "Rate", "USD"],
        [
          ["Balance per books (historical rates)", "A$80,000", "various", "$54,000"],
          ["Revalued at closing rate", "A$80,000", "0.66", "$52,800"],
          ["Unrealised FX loss", "", "", "$1,200"],
        ],
        { numeric: [1, 3] },
      ),
      journal([["Foreign exchange loss", "$1,200", ""], ["Cash — AUD account", "", "$1,200"]], "$1,200"),
    ),
    screen(
      "High-volume matching and exception queues",
      terms(
        ["Matching rules", "Auto-match on amount, date window (e.g. ±3 days) and reference."],
        ["Many-to-one rules", "Match one bank deposit to many invoices, or one payout to many orders."],
        ["Exception queue", "Items the rules can't match go to a queue, worked by a named person daily."],
      ),
      tip("Tune the rules", "Review match rates monthly. If the same exception keeps appearing, add or adjust a rule."),
    ),
    screen(
      "Payment gateways and clearing accounts",
      p("Meridian's online store collects payments through a gateway. Sales go into a clearing account; fees, refunds, chargebacks and payouts come out."),
      table(
        ["June", "Clearing account"],
        [
          ["Online sales collected", "+$120,000"],
          ["Gateway fees (2.9%)", "−$3,480"],
          ["Refunds", "−$2,100"],
          ["Chargebacks", "−$400"],
          ["Payouts to the bank", "−$112,800"],
          ["Balance", "$1,220"],
        ],
      ),
      p("The $1,220 should equal funds the gateway still holds — confirmed against the gateway's balance report."),
    ),
    screen(
      "Unreconciled items — ageing, escalation and write-off",
      table(
        ["Age", "Items", "Amount", "Action"],
        [
          ["0–30 days", "22", "$3,200", "Work in the normal queue"],
          ["31–60 days", "6", "$850", "Escalate to the team lead"],
          ["61–90 days", "3", "$410", "Escalate to the controller"],
          ["Over 90 days", "2", "$95", "Decide: resolve or write off with approval"],
        ],
        { numeric: [2] },
      ),
      caution("Never write off differences to force a balance without investigation and documented approval — it can hide fraud."),
    ),
    mistakes(
      ["Skipping dormant accounts", "Reconcile every account."],
      ["Revaluing before reconciling", "Reconcile in the account's currency first."],
      ["Letting exceptions pile up", "Work the queue daily."],
      ["Writing off without approval", "Document and approve every write-off."],
    ),
    check(
      2,
      q("Which bank accounts need reconciling?", ["All of them, including dormant accounts", "Only active ones", "Only the main account", "Only foreign accounts"], 0, "Every account carries risk."),
      q("The AUD account is revalued from $54,000 to $52,800. What's recorded?", ["$1,200 FX loss", "$1,200 FX gain", "No entry", "$52,800 loss"], 0, "The USD value fell."),
      q("What should a gateway clearing balance equal?", ["Funds still held by the gateway", "Total sales", "Fees", "Zero always"], 0, "Money in transit."),
      q("What happens to items unreconciled over 90 days?", ["They need a decision, with approval for any write-off", "Ignore them", "Delete them", "Move them to equity"], 0, "Old items must be resolved."),
      q("Each cash pool sweep creates:", ["An intercompany balance", "Revenue", "A fixed asset", "A tax refund"], 0, "Money moves between entities."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Gateway reconciliation",
          ["July: sales $95,000; fees 2.9%; refunds $1,500; chargebacks $0; payouts $90,500. What's the clearing balance?"],
          ["Fees $2,755. Balance = $95,000 − $2,755 − $1,500 − $90,500 = $245 — check against funds held."],
        ],
        [
          "Exercise 2 — FX revaluation",
          ["A€20,000 account carried at $21,600 is revalued at a closing rate of 1.10. What's the result?"],
          ["€20,000 × 1.10 = $22,000 — an unrealised gain of $400."],
        ],
      ),
    ),
    summary(
      ["Reconciling multiple accounts and cash pools", "Foreign-currency accounts — reconcile, then revalue", "Matching rules and exception queues", "Gateway and clearing account reconciliations", "Ageing, escalating and approving unreconciled items"],
      "At scale, reconciliation is a process: rules match the routine, people work the exceptions, and nothing old goes unexplained.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Balance Sheet Substantiation",
      ["Substantiation means every balance sheet account is supported by evidence. This module builds Meridian's risk-based approach."],
      ["Write a risk-based reconciliation policy", "Rate accounts by risk and set frequency", "Use supporting evidence and roll-forwards", "Reconcile subledgers to the general ledger", "Run preparer and reviewer sign-off"],
    ),
    screen(
      "A risk-based reconciliation policy",
      p("Not every account needs the same attention. Meridian's policy rates each account and sets how often it's reconciled and who reviews it."),
      table(
        ["Risk", "Examples", "Frequency", "Reviewer"],
        [
          ["High", "Cash, AR, AP, payroll liabilities, intercompany, revenue accruals", "Monthly", "Controller"],
          ["Medium", "Prepayments, fixed assets, inventory", "Monthly or quarterly", "Senior accountant"],
          ["Low", "Small dormant balances, deposits", "Quarterly or yearly", "Senior accountant"],
        ],
      ),
    ),
    screen(
      "Rating accounts by risk",
      bullets(
        "Size of the balance and the volume of activity.",
        "Complexity — estimates, judgement, foreign currency.",
        "History of errors or adjustments.",
        "Susceptibility to fraud — cash and payables are high.",
        "Changes — new systems, new processes or new staff.",
      ),
      tip("Review ratings yearly", "An account's risk changes — e.g. a new gateway makes the clearing account high risk."),
    ),
    screen(
      "Evidence and roll-forwards",
      p("A reconciliation substantiates a balance with independent evidence. A roll-forward explains the movement."),
      table(
        ["Prepaid expenses roll-forward", "Amount"],
        [
          ["Opening balance", "$24,000"],
          ["Add: new prepayments", "$9,000"],
          ["Less: amortised to expense", "($7,500)"],
          ["Closing balance per schedule", "$25,500"],
          ["Balance per general ledger", "$25,500"],
          ["Difference", "$0"],
        ],
        { numeric: [1] },
      ),
      note("Evidence should come from outside the ledger where possible: bank and lender statements, supplier confirmations, contracts and counts."),
    ),
    screen(
      "Subledger to general ledger control reconciliations",
      table(
        ["Control account", "Reconciled to"],
        [
          ["Accounts receivable", "AR aging"],
          ["Accounts payable", "AP aging and key supplier statements"],
          ["Fixed assets and accumulated depreciation", "Fixed asset register"],
          ["Inventory", "Inventory valuation report"],
          ["Payroll liabilities", "Payroll reports"],
        ],
      ),
      p("Meridian's AP control showed $412,300 against an aging of $410,800. The $1,500 was a supplier credit posted by journal to the control account without a supplier — reversed and re-entered as a supplier credit."),
    ),
    screen(
      "Preparer and reviewer sign-off",
      steps(
        ["Prepare", "Reconcile, attach evidence, explain every reconciling item."],
        ["Sign and date", "The preparer signs off."],
        ["Review", "The reviewer checks evidence is independent, items are real and old items are being cleared."],
        ["Sign and date", "The reviewer signs off; the reconciliation is saved."],
      ),
      caution("A reconciliation isn't just a tick. Reviewers should challenge unexplained or long-standing items."),
    ),
    mistakes(
      ["Treating all accounts the same", "Rate them by risk."],
      ["Evidence from inside the ledger only", "Use outside evidence where possible."],
      ["Journals straight to control accounts", "They break the subledger link."],
      ["Rubber-stamp reviews", "Challenge the items."],
    ),
    check(
      3,
      q("Which account is usually high risk?", ["Cash", "A small dormant deposit", "Office plants", "A closed account"], 0, "High volume and fraud-prone."),
      q("What does a roll-forward show?", ["The movement from opening to closing balance", "Bank fees", "The budget", "Sales by customer"], 0, "It explains the movement."),
      q("Opening $24,000, additions $9,000, amortised $7,500. What's the closing balance?", ["$25,500", "$40,500", "$22,500", "$31,500"], 0, "$24,000 + $9,000 − $7,500."),
      q("What commonly causes subledger-to-GL differences?", ["Manual journals posted to control accounts", "Paying suppliers", "Sending invoices", "Bank feeds"], 0, "Journals bypass the subledger."),
      q("What does a reviewer check?", ["Independent evidence, real reconciling items and ageing", "Only the signature", "Font size", "Nothing"], 0, "Review substance, not form."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Rate the account",
          ["Rate these: (a) a gateway clearing account handling $120,000 a month; (b) a $300 utility deposit; (c) intercompany payables."],
          ["(a) High. (b) Low. (c) High."],
        ],
        [
          "Exercise 2 — Accrual roll-forward",
          ["Accrued liabilities: opening $18,000; new accruals $11,000; reversed or settled $13,500. Ledger $15,000. Any difference?"],
          ["Schedule closing = $15,500. Ledger $15,000 — a $500 difference to investigate."],
        ],
      ),
    ),
    summary(
      ["Risk-based reconciliation policies", "Rating accounts by risk", "Evidence and roll-forwards", "Subledger to GL control reconciliations", "Preparer and reviewer sign-off"],
      "Every balance should be supported by evidence — with the most attention on the accounts most likely to be wrong.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Intercompany and Multi-Entity Close",
      ["Groups trade with themselves. This module covers Meridian's intercompany transactions, eliminations and currency translation."],
      ["Record and match intercompany transactions", "Resolve intercompany differences", "Eliminate intercompany balances and profit", "Translate a foreign subsidiary", "Run a group close timetable"],
    ),
    screen(
      "Intercompany transactions and matching",
      p("Meridian's parent charges its Australian subsidiary a monthly management fee. Each side records its own entry."),
      table(
        ["Entity", "Entry", "Amount"],
        [
          ["Parent (US)", "Dr Intercompany receivable · Cr Management fee income", "$20,000"],
          ["Subsidiary (AU)", "Dr Management fee expense · Cr Intercompany payable", "A$30,000 (at 0.6667)"],
        ],
      ),
      tip("Agree before close", "Meridian agrees recurring intercompany charges at WD−1 using a shared schedule."),
    ),
    screen(
      "Resolving intercompany differences",
      table(
        ["Difference", "Meridian example", "Fix"],
        [
          ["Timing", "Parent booked a $5,000 recharge on June 30; the subsidiary booked it on July 2", "Subsidiary accrues it in June"],
          ["FX", "The A$30,000 payable translates to $19,800 at the 0.66 closing rate vs. the parent's $20,000", "Revalue and record the $200 FX difference"],
          ["Error", "A charge posted to the wrong entity or account", "Correct the entry"],
        ],
      ),
    ),
    screen(
      "Eliminations on consolidation",
      p("The group shows only dealings with outside parties, so intercompany balances and transactions are eliminated:"),
      journal(
        [
          ["Intercompany payable", "$20,000", ""],
          ["Management fee income", "$20,000", ""],
          ["Intercompany receivable", "", "$20,000"],
          ["Management fee expense", "", "$20,000"],
        ],
        "$40,000",
      ),
    ),
    screen(
      "Unrealised profit in inventory",
      p("The parent sold goods costing $40,000 to the subsidiary for $50,000 — a $10,000 profit. At year end the subsidiary still holds 30% of them."),
      example([["Intercompany profit", "$10,000"], ["Share still in the subsidiary's stock", "30%"]], ["Unrealised profit to eliminate", "$3,000"]),
      journal([["Cost of sales", "$3,000", ""], ["Inventory", "", "$3,000"]], "$3,000"),
      note("The group can't recognise profit on goods it still holds — they haven't been sold to an outside customer yet."),
    ),
    screen(
      "Translating the subsidiary",
      table(
        ["Item", "Rate (IAS 21 / ASC 830)", "Meridian Pty Ltd example"],
        [
          ["Assets and liabilities", "Closing rate", "A$500,000 × 0.66 = $330,000"],
          ["Income and expenses", "Transaction-date rates (average often used)", "A$1,200,000 × 0.67 = $804,000"],
          ["Share capital", "Historical rate", "A$200,000 × 0.70 = $140,000"],
          ["Translation differences", "Other comprehensive income — foreign currency translation reserve (CTA under US GAAP)", "The balancing amount"],
        ],
      ),
    ),
    screen(
      "Group timetables and reporting packs",
      steps(
        ["Group timetable issued", "Deadlines for each entity's pack."],
        ["Entity packs submitted", "Trial balance, intercompany schedule, key reconciliations and commentary."],
        ["Consolidation", "Translation, eliminations and group adjustments."],
        ["Group review", "Analytical review and sign-off."],
      ),
    ),
    mistakes(
      ["Agreeing intercompany only at year end", "Agree it monthly before close."],
      ["Forgetting unrealised profit", "Eliminate profit on stock still held."],
      ["Translating everything at one rate", "Use closing, average and historical rates correctly."],
      ["Booking translation differences in profit", "They go to OCI."],
    ),
    check(
      4,
      q("Why eliminate intercompany balances on consolidation?", ["The group should show only dealings with outside parties", "To reduce tax", "To hide profits", "They're errors"], 0, "A group can't owe itself money."),
      q("The parent books a recharge June 30; the subsidiary on July 2. What kind of difference?", ["Timing", "FX", "Fraud", "No difference"], 0, "Recorded in different months."),
      q("Under IAS 21, a foreign subsidiary's assets are translated at:", ["The closing rate", "The historical rate", "The average rate", "The budget rate"], 0, "Assets and liabilities use closing rate."),
      q("Goods with $10,000 intercompany profit are 30% unsold at year end. How much profit is eliminated?", ["$3,000", "$10,000", "$7,000", "$0"], 0, "30% × $10,000."),
      q("Where do translation differences go?", ["Other comprehensive income (translation reserve)", "Revenue", "Cost of sales", "Cash"], 0, "OCI / CTA."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Unrealised profit",
          ["The subsidiary sold goods to the parent for $24,000; they cost $18,000. Half are still in the parent's stock. What's eliminated?"],
          ["Profit $6,000 × 50% = $3,000. Dr Cost of sales $3,000 · Cr Inventory $3,000."],
        ],
        [
          "Exercise 2 — Translation",
          ["The subsidiary has liabilities of A$150,000 at a closing rate of 0.66 and expenses of A$900,000 at an average rate of 0.67. Translate them."],
          ["Liabilities: $99,000. Expenses: $603,000."],
        ],
      ),
    ),
    summary(
      ["Recording and matching intercompany transactions", "Timing, FX and error differences", "Eliminating balances, transactions and unrealised profit", "Translating a foreign subsidiary", "Group timetables and reporting packs"],
      "Consolidation removes everything the group does with itself, then translates the rest into one currency.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Journal Controls and Results Review",
      ["Journals are where judgement enters the books — and where errors and fraud can too. This module covers journal controls and how Meridian reviews its results."],
      ["Control standard, recurring and manual journals", "Require approval and support for journals", "Run flux analysis with thresholds", "Perform analytical review", "Prevent post-close adjustments"],
    ),
    screen(
      "Types of journals",
      compare(
        ["Standard and recurring", "Same accounts each month — depreciation, rent, amortisation. Built from templates.", ["Reviewed when set up", "Checked monthly"]],
        ["Manual", "One-off adjustments and corrections. Higher risk.", ["Supporting documents required", "Independent approval"]],
      ),
      p("Meridian posts about 85 manual journals a month. One goal of its close improvement plan is to turn routine ones into recurring templates."),
    ),
    screen(
      "Journal approval and support",
      table(
        ["Journal amount", "Approved by"],
        [
          ["Up to $25,000", "Senior accountant"],
          ["$25,000 – $250,000", "Controller"],
          ["Over $250,000", "CFO"],
        ],
      ),
      bullets(
        "Every journal has a clear description and attached support.",
        "The preparer can't approve their own journal.",
        "Review journals posted late, at weekends, by unusual users or to unusual accounts.",
      ),
    ),
    screen(
      "Flux analysis",
      p("Meridian explains any monthly change that is both over $5,000 and over 10%."),
      table(
        ["Account", "June", "May", "Change", "Explain?"],
        [
          ["Marketing", "$18,400", "$11,200", "+$7,200 (+64%)", "Yes"],
          ["Rent", "$12,000", "$12,000", "$0", "No"],
          ["Legal fees", "$6,300", "$1,800", "+$4,500 (+250%)", "No — under $5,000"],
          ["Freight", "$52,000", "$48,000", "+$4,000 (+8%)", "No"],
        ],
      ),
      p("Marketing explanation: “Summer catalogue printing and postage of $7,000 in June.”"),
      tip("Explanations must be specific", "Name the driver and amount. “Timing” or “increased activity” alone isn't an explanation."),
    ),
    screen(
      "Analytical review",
      bullets(
        "Compare with last month, the same month last year, budget and forecast.",
        "Check relationships: payroll taxes vs. wages, interest vs. loan balances, depreciation vs. fixed assets, freight vs. sales.",
        "Review the balance sheet as hard as the income statement — that's where errors hide.",
      ),
      example(
        [["Freight as % of sales — May", "6.0%"], ["Freight as % of sales — June", "6.5%"]],
        ["Change to ask about", "+0.5 points"],
      ),
    ),
    screen(
      "Preventing post-close adjustments",
      table(
        ["Cause at Meridian", "Prevention"],
        [
          ["Late supplier bills", "Accrue from purchase orders and goods received"],
          ["Missed revenue cut-off", "Shipping and billing reports reviewed at WD+1"],
          ["Intercompany mismatches found late", "Agree charges at WD−1"],
          ["Reconciliations finding errors late", "Pre-reconcile high-volume accounts weekly"],
        ],
      ),
    ),
    mistakes(
      ["Approving your own journal", "Approval must be independent."],
      ["Journals without support", "Attach evidence every time."],
      ["Vague flux explanations", "Name the cause and amount."],
      ["Reviewing only the P&L", "Review the balance sheet too."],
    ),
    check(
      5,
      q("Which journals are higher risk?", ["Manual one-off journals", "Recurring templates", "System invoices", "Bank feeds"], 0, "They involve judgement."),
      q("With a threshold of over $5,000 and 10%, which needs explaining?", ["Marketing +$7,200 (+64%)", "Legal +$4,500 (+250%)", "Rent $0", "Freight +$4,000 (+8%)"], 0, "Only marketing exceeds both."),
      q("Which is a good flux explanation?", ["Summer catalogue printing and postage of $7,000 in June", "Timing", "Increased activity", "Various"], 0, "It's specific."),
      q("Interest expense should relate to:", ["Loan balances", "Revenue", "Inventory", "Depreciation"], 0, "Relationship checks spot errors."),
      q("How can late supplier bills be prevented from causing post-close adjustments?", ["Accrue from purchase orders and goods received", "Ignore them", "Delay the close forever", "Pay suppliers early"], 0, "Accruals capture costs before bills arrive."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Apply the threshold",
          ["Which need explaining? (a) Travel $14,000 vs $8,000; (b) Utilities $9,500 vs $9,000; (c) Software $3,200 vs $600."],
          ["(a) Yes — +$6,000 (+75%). (b) No — +$500. (c) No — +$2,600 is under $5,000."],
        ],
        [
          "Exercise 2 — Journal approval",
          ["A $60,000 accrual journal is prepared by the controller. Who approves it?"],
          ["The CFO (or another independent senior person) — the controller can't approve their own journal."],
        ],
      ),
    ),
    summary(
      ["Standard, recurring and manual journals", "Journal approval limits and support", "Flux analysis with thresholds", "Analytical review of both statements", "Preventing post-close adjustments"],
      "Control the journals, explain the changes that matter, and fix the causes of late adjustments.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Improving and Automating the Close",
      ["Meridian wants a six-day close with fewer post-close adjustments. This module finds the bottlenecks, moves work earlier and uses software sensibly."],
      ["Find bottlenecks in the close", "Move work before period end", "Choose reconciliation and close-management software", "Be audit-ready every month", "Use a close improvement checklist"],
    ),
    screen(
      "Finding bottlenecks",
      steps(
        ["Map the close", "Every task, owner, start and end time."],
        ["Find waits", "Where tasks wait for data, approval or another team."],
        ["Measure", "Days to close and post-close adjustments."],
        ["Fix the biggest one", "Then measure again."],
      ),
      table(
        ["Bottleneck at Meridian", "Days lost"],
        [
          ["Subsidiary pack arriving late (WD+5)", "2"],
          ["Manual intercompany matching", "1"],
          ["One reviewer for all reconciliations", "1"],
        ],
      ),
    ),
    screen(
      "Moving work before period end",
      table(
        ["Task", "Move to"],
        [
          ["Accrual estimates for recurring costs", "WD−3"],
          ["Bank and gateway reconciliations", "Weekly or daily"],
          ["Fixed asset additions", "As purchases are approved"],
          ["Intercompany agreement", "WD−1 for recurring charges"],
          ["Flux review of stable accounts", "On preliminary numbers at WD+2"],
        ],
      ),
    ),
    screen(
      "Close and reconciliation software",
      terms(
        ["Close-management software", "Checklists, task assignment, due dates, dependencies and status dashboards."],
        ["Reconciliation software", "Auto-matching, exception queues, certification and evidence storage."],
        ["Consolidation software", "Intercompany matching, translation and eliminations."],
      ),
      caution("Automation speeds up good processes — and bad ones. Fix the process before automating it."),
    ),
    screen(
      "Audit readiness",
      bullets(
        "Signed reconciliations with evidence, saved every month.",
        "Roll-forward schedules for key balance sheet accounts.",
        "Journal support and approvals stored with each journal.",
        "Accounting policies and close procedures documented.",
        "Intercompany agreements and elimination workings kept.",
      ),
      tip("Audit-ready is a habit", "If every month is documented, year end is just the twelfth month."),
    ),
    screen(
      "Worked example: Meridian's results",
      table(
        ["Metric", "January", "June"],
        [
          ["Working days to close", "10", "6"],
          ["Post-close adjustments", "9", "2"],
          ["Reconciliations on time", "70%", "98%"],
          ["Unreconciled items over 60 days", "14", "5"],
          ["Manual journals", "85", "41"],
        ],
      ),
      p("Changes: the subsidiary pack moved to WD+3, intercompany charges were agreed at WD−1, reviews were split between two reviewers, and routine journals became recurring templates."),
    ),
    mistakes(
      ["Automating a broken process", "Fix it first."],
      ["Fixing non-critical tasks first", "Target the critical path."],
      ["Documenting only at year end", "Be audit-ready monthly."],
      ["Changing everything at once", "Improve, measure, repeat."],
    ),
    check(
      6,
      q("What's the first step to improving the close?", ["Map every task, owner and timing", "Buy software", "Skip reviews", "Close earlier without changes"], 0, "You can't fix what you haven't mapped."),
      q("Which task can move before period end?", ["Accrual estimates for recurring costs", "Final bank statement reconciliation", "Final review", "Locking the period"], 0, "Recurring accruals are predictable."),
      q("What does close-management software provide?", ["Checklists, assignments and status tracking", "Tax filing", "Payroll", "Banking"], 0, "It organises close tasks."),
      q("What makes a team audit-ready?", ["Monthly saved reconciliations, roll-forwards and journal support", "Nothing until year end", "Deleting old files", "Verbal explanations"], 0, "Evidence kept every month."),
      q("Why fix the process before automating?", ["Automation speeds up bad processes too", "It's cheaper", "Auditors require it", "Software can't automate"], 0, "Automate what works."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Prioritise",
          ["Bottlenecks: subsidiary pack late (2 days, on critical path); invoice filing slow (1 day, not on critical path). Which first?"],
          ["The subsidiary pack — it's on the critical path. Invoice filing won't shorten the close."],
        ],
        [
          "Exercise 2 — Read the metrics",
          ["Days to close fell from 8 to 5, but post-close adjustments rose from 3 to 7. What does it show?"],
          ["The close got faster but less reliable — speed was gained by cutting quality. Strengthen reviews and reconciliations."],
        ],
      ),
    ),
    summary(
      ["Finding bottlenecks on the critical path", "Moving work before period end", "Close, reconciliation and consolidation software", "Monthly audit readiness", "Measuring improvement"],
      "A better close comes from removing delays, not checks — measure speed and quality together.",
    ),
  ],
}

export default lessons
