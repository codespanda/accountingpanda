import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, check, compare, h, journal, note, p, q, screen, steps, table, terms, tip } from "@/lib/lessonKit"

// Bank Reconciliation and Month-End Close (advanced) — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    screen(
      "The close calendar",
      p("Close tasks are scheduled by working day relative to period end: WD−2 means two working days before, WD+3 means the third working day after."),
      table(
        ["Day", "Tasks"],
        [
          ["WD−3 to WD−1", "Accrual estimates, prepayment schedules, cut-off reminders, pre-reconciliations"],
          ["WD+1", "Final bank feeds, AR/AP cut-off, payroll posted"],
          ["WD+2", "Bank, card and subledger reconciliations; intercompany matching"],
          ["WD+3", "Accruals, depreciation, revaluations and eliminations"],
          ["WD+4", "Flux review, management pack drafted"],
          ["WD+5", "Final review, period locked, results published"],
        ],
      ),
    ),
    screen(
      "Critical path, roles and materiality",
      terms(
        ["Critical path", "The chain of dependent tasks that sets the close length — e.g. payroll must post before payroll liabilities reconcile, before the P&L review."],
        ["Preparer and reviewer", "Each task has a named preparer and a different named reviewer."],
        ["Close materiality", "Thresholds for what needs investigating or adjusting, e.g. differences over $1,000 or 5% of the account."],
      ),
      tip("Shorten the critical path first", "Speeding up a task that isn't on the critical path doesn't shorten the close."),
    ),
    screen(
      "Close metrics",
      table(
        ["Metric", "What it tells you"],
        [
          ["Days to close", "How long from period end to locked results"],
          ["Post-close adjustments", "Entries needed after the books were “final” — a quality signal"],
          ["Reconciliations completed on time", "Discipline of the team"],
          ["Unreconciled items over 60 days", "Hidden risk in the balance sheet"],
          ["Manual journals posted", "How much of the close is still manual"],
        ],
      ),
      note("Track the metrics over several months. The aim is a faster close with fewer post-close adjustments — not speed alone."),
    ),
    check(
      1,
      q("What does WD+3 mean?", ["Third working day after period end", "Three days before", "Wednesday", "Week 3"], 0, "Working days are counted from period end."),
      q("What is the critical path?", ["The chain of dependent tasks that sets the close length", "The fastest task", "The reviewer's route", "The bank's process"], 0, "It determines total duration."),
      q("Why have a separate reviewer for each task?", ["Independent checking catches errors", "It's faster", "Software requires it", "To share passwords"], 0, "Review is a key control."),
      q("Which metric signals close quality?", ["Number of post-close adjustments", "Number of emails", "Office hours", "Coffee consumed"], 0, "Fewer late adjustments means a cleaner close."),
      q("Speeding up a task not on the critical path will:", ["Shorten the close", "Not shorten the close", "Lengthen the close", "Remove reviews"], 1, "Only critical-path tasks set the timeline."),
    ),
  ],
  1: [
    screen(
      "Multiple accounts and cash pooling",
      p("Groups often have many bank accounts. Cash pooling moves balances to or from a master account each day."),
      bullets(
        "Reconcile every account, including dormant and zero-balance accounts.",
        "Pool sweeps create intercompany balances between entities — record and reconcile them.",
        "Keep a bank account register: entity, bank, purpose, signatories and owner of the reconciliation.",
      ),
    ),
    screen(
      "Foreign-currency bank accounts",
      p("A euro account is reconciled in euros first, then revalued to the reporting currency at the closing rate."),
      table(
        ["", "EUR", "Rate", "USD"],
        [
          ["Balance per books (historical rates)", "€50,000", "various", "$54,600"],
          ["Revalued at closing rate", "€50,000", "1.08", "$54,000"],
          ["Unrealised FX loss", "", "", "$600"],
        ],
        { numeric: [1, 3] },
      ),
      journal([["Foreign exchange loss", "$600", ""], ["Cash — EUR account", "", "$600"]], "$600"),
    ),
    screen(
      "High-volume matching, gateways and unreconciled items",
      terms(
        ["Matching rules", "Auto-match on amount, date window and reference. Exceptions go to a queue for review."],
        ["Gateway and clearing accounts", "Stripe, PayPal and card processors: reconcile gross sales, fees, refunds, chargebacks and payouts. The clearing balance should equal funds still held by the processor."],
        ["Ageing unreconciled items", "Report items by age. Escalate anything over 30 days; items over 90 days need a decision."],
        ["Write-off approval", "Small, old, unexplainable differences can be written off only with documented approval at the right level."],
      ),
      caution("Never write off differences to make a reconciliation balance without investigation and approval — it can hide fraud."),
    ),
    check(
      2,
      q("Which bank accounts need reconciling?", ["Only active ones", "All of them, including dormant accounts", "Only the main account", "Only foreign accounts"], 1, "Every account carries risk."),
      q("A euro account is revalued from $54,600 to $54,000. What's recorded?", ["$600 FX gain", "$600 FX loss", "No entry", "$54,000 loss"], 1, "The USD value fell by $600."),
      q("What should a payment gateway clearing balance equal?", ["Funds still held by the processor", "Total sales", "Fees", "Zero always"], 0, "It represents money in transit."),
      q("What happens to items unreconciled over 90 days?", ["Ignore them", "They need a decision and escalation", "Delete them", "Move them to equity"], 1, "Old items must be resolved."),
      q("When can old differences be written off?", ["Any time", "Only with investigation and documented approval", "Never", "When the reconciliation doesn't balance"], 1, "Approval guards against hiding fraud."),
    ),
  ],
  2: [
    screen(
      "A risk-based reconciliation policy",
      table(
        ["Risk", "Examples", "Frequency", "Reviewer"],
        [
          ["High", "Cash, AR, AP, payroll liabilities, revenue-related accruals", "Monthly", "Finance manager"],
          ["Medium", "Prepayments, fixed assets, inventory", "Monthly or quarterly", "Senior accountant"],
          ["Low", "Small dormant balances, deposits", "Quarterly or yearly", "Senior accountant"],
        ],
      ),
      p("Rate accounts by size, volume of activity, complexity, judgement involved and past errors."),
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
    ),
    screen(
      "Control reconciliations and sign-off",
      terms(
        ["Subledger to GL", "AR aging, AP aging, fixed asset register and inventory valuation must each agree to their control accounts."],
        ["Common causes of differences", "Manual journals to control accounts, timing of postings, or system interface failures."],
        ["Sign-off", "Preparer and reviewer sign and date each reconciliation, with evidence attached."],
      ),
      tip("A reconciliation isn't just a tick", "Reviewers should check that evidence is independent, reconciling items are real and old items are being cleared."),
    ),
    check(
      3,
      q("Which account is usually high risk?", ["Cash", "A small dormant deposit", "Office plant", "A closed account"], 0, "Cash is high volume and fraud-prone."),
      q("What does a roll-forward show?", ["The movement from opening to closing balance", "Bank fees", "The budget", "Sales by customer"], 0, "It explains the movement."),
      q("Opening $24,000, additions $9,000, amortised $7,500. What's the closing balance?", ["$25,500", "$40,500", "$22,500", "$31,500"], 0, "$24,000 + $9,000 − $7,500."),
      q("What commonly causes subledger-to-GL differences?", ["Manual journals posted to control accounts", "Paying suppliers", "Sending invoices", "Bank feeds"], 0, "Journals bypass the subledger."),
      q("What does a reviewer check?", ["Independent evidence, real reconciling items and ageing", "Only the signature", "Font size", "Nothing"], 0, "Review substance, not form."),
    ),
  ],
  3: [
    screen(
      "Intercompany transactions and matching",
      p("Entities in the same group trade with each other: management fees, recharges, loans and sales of goods. Each side records its own entry."),
      table(
        ["Entity", "Entry", "Amount"],
        [
          ["Parent (US)", "Intercompany receivable from Sub / Management fee income", "$20,000"],
          ["Subsidiary (AU)", "Management fee expense / Intercompany payable to Parent", "$20,000"],
        ],
        { numeric: [2] },
      ),
      tip("Match before close", "Agree intercompany balances by WD+2. Use a shared schedule or the system's intercompany module."),
    ),
    screen(
      "Differences and eliminations",
      terms(
        ["Timing", "One side recorded in this month, the other next month."],
        ["FX", "Balances translated at different rates."],
        ["Errors", "Wrong amount, entity or account."],
      ),
      p("On consolidation, intercompany balances and transactions are eliminated so the group shows only dealings with outside parties."),
      journal(
        [
          ["Intercompany payable", "$20,000", ""],
          ["Management fee income", "$20,000", ""],
          ["Intercompany receivable", "", "$20,000"],
          ["Management fee expense", "", "$20,000"],
        ],
        "$40,000",
      ),
      note("Unrealised profit on intercompany sales of inventory still held at year-end must also be eliminated."),
    ),
    screen(
      "Translation and group timetables",
      p("Foreign subsidiaries are translated into the group's presentation currency:"),
      table(
        ["Item", "Rate used (IAS 21 / ASC 830)"],
        [
          ["Assets and liabilities", "Closing rate"],
          ["Income and expenses", "Transaction-date rates (an average rate is often used as an approximation)"],
          ["Equity (share capital)", "Historical rate"],
          ["Translation differences", "Other comprehensive income — foreign currency translation reserve (CTA under US GAAP)"],
        ],
      ),
      steps(
        ["Group timetable issued", "Deadlines for each entity's reporting pack."],
        ["Entity packs submitted", "Trial balance, intercompany schedule, key reconciliations and commentary."],
        ["Consolidation", "Translation, eliminations and group adjustments."],
        ["Group review", "Analytical review and sign-off."],
      ),
    ),
    check(
      4,
      q("Why eliminate intercompany balances on consolidation?", ["The group should show only dealings with outside parties", "To reduce tax", "To hide profits", "They're errors"], 0, "A group can't owe itself money."),
      q("Parent bills its subsidiary $20,000 in December; the sub records it in January. What's the difference?", ["Timing", "FX", "Fraud", "No difference"], 0, "Each side recorded in a different month."),
      q("Under IAS 21, a foreign sub's assets are translated at:", ["Historical rate", "Closing rate", "Average rate", "Budget rate"], 1, "Assets and liabilities use the closing rate."),
      q("Where do translation differences go?", ["Other comprehensive income (translation reserve)", "Revenue", "Cost of sales", "Cash"], 0, "They go to OCI / CTA."),
      q("What's included in an entity's reporting pack?", ["Trial balance, intercompany schedule and commentary", "Marketing plans", "Payroll passwords", "Customer emails"], 0, "Packs support consolidation."),
    ),
  ],
  4: [
    screen(
      "Journals and approval",
      compare(
        ["Standard and recurring", "Same accounts each month, e.g. depreciation, rent, amortisation. Templates reduce errors.", ["Reviewed when set up", "Checked monthly"]],
        ["Manual", "One-off adjustments and corrections. Higher risk.", ["Supporting documents required", "Approval by someone other than the preparer"]],
      ),
      bullets(
        "Every journal has a clear description and attached support.",
        "Approval limits by amount, e.g. over $25,000 needs the controller.",
        "Review journals posted late, on weekends, by unusual users or to unusual accounts.",
      ),
    ),
    screen(
      "Flux analysis",
      table(
        ["Account", "This month", "Last month", "Change", "Explanation required?"],
        [
          ["Marketing", "$18,400", "$11,200", "+$7,200 (+64%)", "Yes — over $5,000 and 10%"],
          ["Rent", "$12,000", "$12,000", "$0", "No"],
          ["Legal fees", "$6,300", "$1,800", "+$4,500 (+250%)", "No — under $5,000"],
        ],
      ),
      p("Here the threshold is “over $5,000 and over 10%”. Marketing needs an explanation: “Trade show costs of $7,000 in March”."),
      tip("Explanations should be specific", "Name the driver and amount. “Timing” or “increased activity” alone isn't an explanation."),
    ),
    screen(
      "Analytical review and post-close adjustments",
      bullets(
        "Compare with last month, the same month last year, budget and forecast.",
        "Check relationships: payroll taxes vs. wages, interest vs. loan balances, depreciation vs. fixed assets.",
        "Look at the balance sheet as hard as the P&L — that's where errors hide.",
      ),
      h("Preventing post-close adjustments"),
      table(
        ["Cause", "Prevention"],
        [
          ["Late supplier bills", "Accrue from purchase orders and goods received"],
          ["Missed revenue cut-off", "Shipping and billing reports reviewed at WD+1"],
          ["Reconciliation found errors late", "Pre-reconcile before period end"],
        ],
      ),
    ),
    check(
      5,
      q("Which journals are higher risk?", ["Manual one-off journals", "Recurring templates", "System invoices", "Bank feeds"], 0, "Manual journals involve judgement."),
      q("With a threshold of over $5,000 and 10%, which needs explaining?", ["Marketing +$7,200 (+64%)", "Legal +$4,500 (+250%)", "Rent $0", "None"], 0, "Only marketing exceeds both."),
      q("Which is a good flux explanation?", ["Timing", "Trade show costs of $7,000 in March", "Increased activity", "Various"], 1, "It's specific."),
      q("Interest expense should relate to:", ["Loan balances", "Revenue", "Inventory", "Depreciation"], 0, "Relationship checks spot errors."),
      q("How can late supplier bills be prevented from causing post-close adjustments?", ["Accrue from purchase orders and goods received", "Ignore them", "Delay the close forever", "Pay suppliers early"], 0, "Accruals capture costs before bills arrive."),
    ),
  ],
  5: [
    screen(
      "Finding bottlenecks",
      steps(
        ["Map the close", "List every task, owner, start and end time."],
        ["Find waits", "Where tasks sit waiting for data, approval or another team."],
        ["Measure", "Track days to close and post-close adjustments."],
        ["Fix the biggest one", "Then measure again."],
      ),
      note("Common bottlenecks: waiting for payroll or inventory data, manual intercompany matching, and review queues with one reviewer."),
    ),
    screen(
      "Moving work before period end",
      table(
        ["Task", "Move to"],
        [
          ["Accrual estimates for recurring costs", "WD−3"],
          ["Bank and card reconciliations", "Weekly or daily"],
          ["Fixed asset additions", "As purchases are approved"],
          ["Intercompany agreement", "Mid-month for recurring charges"],
          ["Flux review of stable accounts", "Run on preliminary numbers at WD+1"],
        ],
      ),
    ),
    screen(
      "Software, audit readiness and checklist",
      terms(
        ["Close-management software", "Checklists, task assignment, due dates and status dashboards."],
        ["Reconciliation software", "Auto-matching, exception queues, certification and evidence storage."],
        ["Audit readiness", "Signed reconciliations, roll-forwards, journal support and policies saved in one place each month."],
      ),
      h("Close improvement checklist"),
      bullets(
        "Is there a close calendar with owners and deadlines?",
        "Are high-risk accounts reconciled monthly with independent review?",
        "Are manual journals supported and approved?",
        "Are flux thresholds defined and explanations specific?",
        "Are close metrics tracked and reviewed after each close?",
      ),
      caution("Automation speeds up good processes — and bad ones. Fix the process before automating it."),
    ),
    check(
      6,
      q("What's the first step to improving the close?", ["Map every task, owner and timing", "Buy software", "Skip reviews", "Close earlier without changes"], 0, "You can't fix what you haven't mapped."),
      q("Which task can move before period end?", ["Accrual estimates for recurring costs", "Final bank statement reconciliation", "Final review", "Locking the period"], 0, "Recurring accruals are predictable."),
      q("What does close-management software provide?", ["Checklists, assignments and status tracking", "Tax filing", "Payroll", "Banking"], 0, "It organises close tasks."),
      q("What makes a team audit-ready?", ["Monthly saved reconciliations, roll-forwards and journal support", "Nothing until year-end", "Deleting old files", "Verbal explanations"], 0, "Evidence kept every month."),
      q("Why fix the process before automating?", ["Automation speeds up bad processes too", "It's cheaper", "Auditors require it", "Software can't automate"], 0, "Automate what works."),
    ),
  ],
}

export default lessons
