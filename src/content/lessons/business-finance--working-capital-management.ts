import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
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

// Working Capital Management — lesson screens by module index (0 = Module 1).
// The course follows Kestrel Electrical Wholesale, which supplies electrical
// contractors: revenue $7.3m ($20,000 a day), cost of sales $5.475m ($15,000 a day).

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Working Capital Fundamentals",
      ["Working capital is the money tied up in running the business day to day. This module measures it for Kestrel Electrical Wholesale."],
      ["Identify current assets and current liabilities", "Distinguish gross and net working capital", "Explain the operating cycle", "Explain why growth needs more working capital", "Calculate current and quick ratios"],
    ),
    screen(
      "Meet Kestrel Electrical Wholesale",
      p("Kestrel sells cable, switchgear and lighting to electrical contractors on 30-day terms. Sales are growing, profit is healthy — yet its $500,000 overdraft is nearly full. The finance director, Amara, wants to know why."),
      table(
        ["Kestrel, year to 30 June 2026", "Amount"],
        [
          ["Revenue", "$7,300,000 ($20,000 a day)"],
          ["Cost of sales (75%)", "$5,475,000 ($15,000 a day)"],
          ["Overdraft limit", "$500,000"],
        ],
      ),
    ),
    screen(
      "Current assets and current liabilities",
      table(
        ["Kestrel at 30 June 2026", "Amount"],
        [
          ["Cash", "$150,000"],
          ["Trade receivables", "$900,000"],
          ["Inventory", "$900,000"],
          ["Total current assets", "$1,950,000"],
          ["Trade payables", "$450,000"],
          ["Overdraft", "$300,000"],
          ["Accruals and tax", "$150,000"],
          ["Total current liabilities", "$900,000"],
        ],
        { numeric: [1] },
      ),
      note("Current means expected to be turned into cash, or paid, within 12 months."),
    ),
    screen(
      "Gross vs. net working capital",
      terms(
        ["Gross working capital", "Total current assets — $1,950,000."],
        ["Net working capital", "Current assets − current liabilities — $1,950,000 − $900,000 = $1,050,000."],
        ["Operating working capital", "Receivables + inventory − payables — $900,000 + $900,000 − $450,000 = $1,350,000. This is what managers can directly influence."],
      ),
    ),
    screen(
      "The operating cycle",
      steps(
        ["Buy stock", "On 30-day supplier terms."],
        ["Hold stock", "On average 60 days before it's sold."],
        ["Sell on credit", "Contractors take on average 45 days to pay."],
        ["Collect cash", "105 days after the stock arrived."],
      ),
      p("The operating cycle is 60 + 45 = 105 days. Suppliers fund the first 30, so Kestrel funds 75 days itself — the cash conversion cycle (Module 5)."),
    ),
    screen(
      "Why growth needs more working capital",
      p("Kestrel's operating working capital is $1,350,000 — about 18.5% of revenue."),
      example([["Planned sales growth: 20% of $7,300,000", "$1,460,000"], ["Extra working capital at 18.5%", "× 18.5%"]], ["Extra cash needed", "about $270,000"]),
      caution("That's more than Kestrel's remaining overdraft headroom of $200,000. Growth without better working capital would run it out of cash."),
    ),
    screen(
      "Current and quick ratios",
      table(
        ["Ratio", "Formula", "Kestrel"],
        [
          ["Current ratio", "Current assets ÷ current liabilities", "$1,950,000 ÷ $900,000 = 2.17"],
          ["Quick ratio", "(Current assets − inventory) ÷ current liabilities", "$1,050,000 ÷ $900,000 = 1.17"],
        ],
      ),
      p("The quick ratio excludes inventory because it can be slow to turn into cash. Healthy levels vary by industry — compare with peers and with your own trend."),
    ),
    mistakes(
      ["Equating profit with cash", "Working capital absorbs cash."],
      ["Ignoring the cost of growth", "Forecast the working capital needed."],
      ["Judging ratios in isolation", "Compare with industry and trend."],
      ["Treating all current liabilities as manageable", "Overdrafts are often repayable on demand."],
    ),
    check(
      1,
      q("What is net working capital?", ["Current assets − current liabilities", "Total assets − total liabilities", "Revenue − costs", "Cash − overdraft"], 0, "Short-term resources less short-term obligations."),
      q("The operating cycle runs from:", ["Buying stock to collecting cash from customers", "Opening to closing the books", "Hiring to paying staff", "Budget to actual"], 0, "Inventory days + receivable days."),
      q("Why does growth use cash?", ["More receivables and stock are needed before extra profit arrives", "Growth reduces profit", "Taxes fall", "Suppliers stop credit"], 0, "Working capital grows with sales."),
      q("Which ratio excludes inventory?", ["Quick ratio", "Current ratio", "Gross margin", "Debt ratio"], 0, "Also called the acid test."),
      q("Current assets $500,000 and current liabilities $250,000. Current ratio?", ["2.0", "0.5", "250,000", "1.5"], 0, "$500,000 ÷ $250,000."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Ratios",
          ["Current assets $800,000, inventory $300,000, current liabilities $400,000. Calculate the current and quick ratios."],
          ["Current 2.0; quick ($500,000 ÷ $400,000) 1.25."],
        ],
        [
          "Exercise 2 — Growth",
          ["A business with operating working capital of 15% of revenue plans to grow from $4m to $5m. How much extra working capital?"],
          ["15% × $1m = $150,000."],
        ],
      ),
    ),
    summary(
      ["Current assets and liabilities", "Gross, net and operating working capital", "The 105-day operating cycle", "The cash cost of growth", "Current and quick ratios"],
      "Kestrel is profitable but has $1.35 million tied up in operating working capital — and growth will need more.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Managing Receivables",
      ["Kestrel's $900,000 of receivables is its biggest lever. This module tightens credit and collections."],
      ["Set a credit policy and check customers' credit", "Invoice promptly and accurately", "Use debtor days and the aging report", "Run a collection process", "Assess early-payment discounts and bad debt provisions"],
    ),
    screen(
      "Credit policy and credit checks",
      table(
        ["Policy element", "Kestrel's rule"],
        [
          ["Application", "Signed credit application with trade references"],
          ["Credit check", "Credit agency report before opening an account"],
          ["Credit limit", "Set by the credit controller; above $50,000 approved by Amara"],
          ["Terms", "30 days from invoice"],
          ["Stop rule", "Account put on hold at 30 days overdue"],
        ],
      ),
      tip("Review limits", "Review limits for large customers at least yearly, and immediately if they start paying late."),
    ),
    screen(
      "Invoicing promptly and accurately",
      bullets(
        "Invoice on the day of delivery — Kestrel used to batch invoices weekly, adding 3 days on average.",
        "Quote the customer's purchase order number; many contractors won't pay without it.",
        "Attach proof of delivery to prevent disputes.",
        "Send by email or e-invoicing, not post.",
      ),
      caution("Every day of invoicing delay adds a day to debtor days — for Kestrel, $20,000 more tied up per day."),
    ),
    screen(
      "Debtor days and the aging report",
      example([["Receivables", "$900,000"], ["Daily sales: $7,300,000 ÷ 365", "$20,000"]], ["Debtor days (DSO)", "45 days"]),
      table(
        ["Aging bucket", "Balance"],
        [
          ["Not yet due", "$540,000"],
          ["1–30 days overdue", "$220,000"],
          ["31–60 days overdue", "$90,000"],
          ["Over 60 days overdue", "$50,000"],
        ],
        { footer: ["Total", "$900,000"], numeric: [1] },
      ),
      p("40% of Kestrel's receivables are overdue — that's why DSO is 45 days against 30-day terms."),
    ),
    screen(
      "Collection process",
      steps(
        ["Before due date", "Friendly reminder 5 days before for large balances."],
        ["7 days overdue", "Phone call — confirm there's no dispute."],
        ["14 days overdue", "Formal reminder; escalate to the sales rep."],
        ["30 days overdue", "Account on hold."],
        ["60 days overdue", "Final demand; consider a collection agency or legal action."],
      ),
      note("Resolve disputes fast. A disputed $500 item can hold up a $20,000 payment."),
    ),
    screen(
      "Early-payment discounts and bad debt provisions",
      p("Offering 2% for payment within 10 days instead of 45 is costly:"),
      example([["Discount cost: 2 ÷ 98", "2.04%"], ["Days gained: 45 − 10 = 35; periods in a year 365 ÷ 35", "× 10.4"]], ["Annualised cost", "about 21.3%"]),
      p("With an overdraft at 9%, the discount is far more expensive than borrowing — Kestrel doesn't offer it."),
      table(
        ["Bucket", "Balance", "Provision %", "Provision"],
        [
          ["Not yet due", "$540,000", "1%", "$5,400"],
          ["1–30 days", "$220,000", "3%", "$6,600"],
          ["31–60 days", "$90,000", "10%", "$9,000"],
          ["Over 60 days", "$50,000", "40%", "$20,000"],
        ],
        { footer: ["Total", "$900,000", "", "$41,000"], numeric: [1, 2, 3] },
      ),
    ),
    mistakes(
      ["Opening accounts without checks", "Check credit first."],
      ["Batching invoices", "Invoice on delivery."],
      ["Collecting only at month end", "Follow a weekly process."],
      ["Offering discounts without costing them", "Annualise the cost."],
    ),
    check(
      2,
      q("How are debtor days calculated?", ["Receivables ÷ annual sales × 365", "Sales ÷ receivables", "Payables ÷ purchases × 365", "Inventory ÷ cost of sales"], 0, "Days of sales unpaid."),
      q("Receivables $300,000 and annual sales $3,650,000. Debtor days?", ["30", "45", "12", "60"], 0, "$300,000 ÷ $10,000 a day."),
      q("What should happen on the day goods are delivered?", ["Issue the invoice", "Wait for month end", "Chase payment", "Write off the debt"], 0, "Delays add debtor days."),
      q("What does an aging report show?", ["Balances grouped by how long they've been outstanding", "Staff ages", "Asset lives", "Inventory counts"], 0, "Current, overdue buckets."),
      q("Why do overdue buckets get higher provision percentages?", ["Older debts are less likely to be paid", "They're larger", "Tax rules", "They're newer"], 0, "Risk rises with age."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Cash released",
          ["If Kestrel cuts DSO from 45 to 38 days, how much cash is released?"],
          ["7 days × $20,000 = $140,000."],
        ],
        [
          "Exercise 2 — Discount cost",
          ["Terms of 1% discount for payment in 10 days, otherwise 30. What's the approximate annualised cost?"],
          ["1 ÷ 99 × 365 ÷ 20 ≈ 18.4%."],
        ],
      ),
    ),
    summary(
      ["Credit policy and checks", "Prompt, accurate invoicing", "Debtor days and aging", "A structured collection process", "Discount costs and bad debt provisions"],
      "Every day cut from Kestrel's debtor days releases $20,000 of cash.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Managing Payables",
      ["Supplier credit is a source of funding — if it's managed well. This module improves Kestrel's payables without damaging supplier relationships."],
      ["Negotiate supplier payment terms", "Use creditor days and payment scheduling", "Decide when early-payment discounts are worth taking", "Keep supplier relationships strong", "Use approval controls to avoid duplicate payments"],
    ),
    screen(
      "Negotiating supplier terms",
      bullets(
        "Kestrel buys $5.5 million a year — its larger suppliers value the business.",
        "Ask for longer terms at contract renewal, linked to volume commitments.",
        "Agree terms in writing, including from when days are counted (invoice date or end of month).",
        "Consider supplier-led programmes such as supply chain finance (Module 5).",
      ),
      p("Kestrel's two largest cable suppliers agree to 45 days in return for a 12-month volume commitment."),
    ),
    screen(
      "Creditor days and payment scheduling",
      example([["Trade payables", "$450,000"], ["Daily cost of sales: $5,475,000 ÷ 365", "$15,000"]], ["Creditor days (DPO)", "30 days"]),
      bullets(
        "Kestrel was paying many invoices as soon as they arrived — about 10 days early.",
        "A weekly payment run pays everything due before the next run, and nothing earlier.",
        "Extending DPO from 30 to 40 days releases 10 × $15,000 = $150,000.",
      ),
    ),
    screen(
      "Early-payment discounts — when to take them",
      p("A supplier offers 2% for payment in 10 days instead of 30."),
      example([["Discount: 2 ÷ 98", "2.04%"], ["Days given up: 30 − 10 = 20; periods a year 365 ÷ 20", "× 18.25"]], ["Annualised return", "about 37.2%"]),
      p("Kestrel's overdraft costs 9%, so taking this discount is worth it — even if it means borrowing to pay early."),
      tip("Compare the rates", "Take the discount when its annualised return is higher than your cost of funds and you have the headroom."),
    ),
    screen(
      "Keeping supplier relationships strong",
      compare(
        ["Healthy", "Pay on agreed terms, every time.", ["Supplier trust", "Better prices and allocation in shortages"]],
        ["Damaging", "Paying late without agreement.", ["Accounts put on stop", "Lost discounts and priority", "Reputation harm"]],
      ),
      caution("Stretching payments beyond agreed terms isn't working capital management — it's borrowing from suppliers without permission. Some countries also have prompt-payment laws or reporting duties."),
    ),
    screen(
      "Approval controls and duplicate payments",
      table(
        ["Control", "Prevents"],
        [
          ["Three-way match: order, goods received, invoice", "Paying for goods not ordered or received"],
          ["System blocks duplicate supplier invoice numbers", "Paying the same invoice twice"],
          ["Approval limits", "Unauthorised payments"],
          ["Independent check of bank-detail changes", "Payment fraud"],
          ["Monthly supplier statement reconciliation", "Missed or duplicated invoices"],
        ],
      ),
      p("A review found $18,000 of duplicate payments last year — invoices paid from both a statement and the original invoice."),
    ),
    mistakes(
      ["Paying as soon as invoices arrive", "Pay on the due date."],
      ["Paying late without agreement", "Negotiate longer terms instead."],
      ["Ignoring valuable discounts", "Compare with the cost of funds."],
      ["Paying from statements", "Pay approved invoices only."],
    ),
    check(
      3,
      q("How are creditor days calculated?", ["Trade payables ÷ cost of sales (or purchases) × 365", "Receivables ÷ sales × 365", "Inventory ÷ cost of sales × 365", "Cash ÷ expenses"], 0, "Days of purchases unpaid."),
      q("When should a business take an early-payment discount?", ["When its annualised return exceeds the cost of funds", "Never", "Always", "Only at year end"], 0, "Compare rates."),
      q("What does a three-way match compare?", ["Purchase order, goods received and invoice", "Three bank accounts", "Three suppliers' prices", "Three months of sales"], 0, "Before paying."),
      q("What's the risk of paying suppliers late without agreement?", ["Accounts put on stop and damaged relationships", "Higher profit", "Lower tax", "Nothing"], 0, "Trust matters."),
      q("Why pay from invoices rather than statements?", ["To avoid duplicate payments", "It's faster", "Statements are illegal", "To get discounts"], 0, "Statements can repeat invoices already paid."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — DPO",
          ["Payables $200,000; annual cost of sales $2,920,000. What's DPO?"],
          ["Daily cost $8,000; DPO 25 days."],
        ],
        [
          "Exercise 2 — Discount",
          ["Terms 1.5% within 10 days, net 40. Overdraft rate 9%. Take the discount?"],
          ["Annualised ≈ 1.5 ÷ 98.5 × 365 ÷ 30 ≈ 18.5% — higher than 9%, so yes, if there's headroom."],
        ],
      ),
    ),
    summary(
      ["Negotiating terms", "Creditor days and payment runs", "Annualising discount returns", "Supplier relationships", "Payables controls"],
      "Pay on time, not early, and not late — and take discounts only when they beat your cost of funds.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Managing Inventory",
      ["Kestrel holds 60 days of stock. This module finds where it's tied up and how to reduce it without losing sales."],
      ["Calculate inventory days and stock turnover", "Use economic order quantity and reorder levels", "Apply ABC analysis", "Deal with slow-moving and obsolete stock", "Balance stock-outs against excess stock"],
    ),
    screen(
      "Inventory days and stock turnover",
      table(
        ["Measure", "Formula", "Kestrel"],
        [
          ["Inventory days (DIO)", "Inventory ÷ cost of sales × 365", "$900,000 ÷ $15,000 a day = 60 days"],
          ["Stock turnover", "Cost of sales ÷ inventory", "$5,475,000 ÷ $900,000 = 6.1 times a year"],
        ],
      ),
      p("Reducing inventory days from 60 to 50 would release 10 × $15,000 = $150,000."),
    ),
    screen(
      "Economic order quantity and reorder levels",
      p("Kestrel sells 12,000 drums of a standard cable a year. Each order costs $50 to place and receive; holding a drum costs $3 a year."),
      example([["EOQ = √(2 × annual demand × order cost ÷ holding cost)", "√(2 × 12,000 × 50 ÷ 3)"]], ["Economic order quantity", "about 632 drums"]),
      table(
        ["Reorder level", "Calculation"],
        [
          ["Daily usage", "12,000 ÷ 300 trading days = 40 drums"],
          ["Lead time usage", "40 × 5 days = 200 drums"],
          ["Plus safety stock", "100 drums"],
          ["Reorder level", "300 drums"],
        ],
      ),
      note("EOQ is a guide, not a rule — supplier minimums, price breaks and storage space matter too."),
    ),
    screen(
      "ABC analysis",
      table(
        ["Class", "Share of items", "Share of stock value", "Kestrel's approach"],
        [
          ["A", "About 20%", "About 70–80%", "Weekly review, tight reorder levels, counted monthly"],
          ["B", "About 30%", "About 15–20%", "Monthly review"],
          ["C", "About 50%", "About 5–10%", "Simple rules, counted twice a year"],
        ],
      ),
      tip("Focus effort", "Most of the cash is in a few lines. Managing A items well does most of the work."),
    ),
    screen(
      "Slow-moving and obsolete stock",
      bullets(
        "Report stock with no sales in 6 and 12 months every month.",
        "Kestrel finds $45,000 of lighting with no sales in 12 months — old models replaced by LED ranges.",
        "Options: return to supplier, bundle or discount, sell to a clearance buyer, or write down.",
        "Prevent it: check product life cycles before bulk buying.",
      ),
      caution("Holding obsolete stock costs space, insurance and handling — and its value only falls. Act early."),
    ),
    screen(
      "Stock-outs vs. excess stock",
      compare(
        ["Too little", "Stock-outs.", ["Lost sales and customers", "Rush freight costs"]],
        ["Too much", "Excess stock.", ["Cash tied up", "Storage and obsolescence costs"]],
      ),
      p("Kestrel sets higher safety stock for A items contractors need urgently, and lower stock for C items they can wait for."),
    ),
    mistakes(
      ["Same rules for every item", "Use ABC analysis."],
      ["Ignoring slow-moving reports", "Act on them monthly."],
      ["No safety stock for key lines", "Protect important items."],
      ["Bulk buying for small price breaks", "Count the cost of holding."],
    ),
    check(
      4,
      q("How is stock turnover calculated?", ["Cost of sales ÷ inventory", "Inventory ÷ sales", "Sales ÷ profit", "Inventory × 365"], 0, "Times stock is sold and replaced a year."),
      q("What does EOQ balance?", ["Ordering costs and holding costs", "Sales and profit", "Debtors and creditors", "Tax and interest"], 0, "The cheapest order size."),
      q("Daily usage 20 units, lead time 4 days, safety stock 30. Reorder level?", ["110", "80", "30", "50"], 0, "20 × 4 + 30."),
      q("In ABC analysis, A items are:", ["The few items holding most of the stock value", "The cheapest items", "Obsolete items", "Items sold only once"], 0, "Focus control there."),
      q("Which is a cost of holding excess stock?", ["Obsolescence", "Lost sales", "Rush freight", "Stock-outs"], 0, "Value falls over time."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — EOQ",
          ["Annual demand 8,000 units, order cost $40, holding cost $4 a unit a year. Calculate EOQ."],
          ["√(2 × 8,000 × 40 ÷ 4) = √160,000 = 400 units."],
        ],
        [
          "Exercise 2 — Obsolete stock",
          ["Recommend actions for Kestrel's $45,000 of old lighting."],
          ["Ask suppliers about returns; offer bundles or clearance prices to contractors; sell the rest to a clearance buyer; write down to net realisable value; check product life cycles before future bulk buys."],
        ],
      ),
    ),
    summary(
      ["Inventory days and turnover", "EOQ and reorder levels", "ABC analysis", "Slow-moving and obsolete stock", "Stock-outs vs. excess stock"],
      "Manage stock by value: tight control of A items, simple rules for the rest, and early action on slow movers.",
    ),
  ],
  4: [
    overview(
      "Module 5 — The Cash Conversion Cycle and Funding",
      ["This module brings the three levers together and looks at funding what remains."],
      ["Calculate the cash conversion cycle", "Use levers to shorten it", "Use overdrafts and working capital loans", "Compare invoice discounting and factoring", "Use supplier credit and trade finance"],
    ),
    screen(
      "Calculating the cash conversion cycle",
      table(
        ["Measure", "Kestrel"],
        [
          ["Inventory days (DIO)", "60"],
          ["Plus debtor days (DSO)", "45"],
          ["Less creditor days (DPO)", "(30)"],
        ],
        { footer: ["Cash conversion cycle", "75 days"], numeric: [1] },
      ),
      p("Kestrel funds 75 days of operations itself — mostly from its overdraft."),
    ),
    screen(
      "Levers to shorten the cycle",
      table(
        ["Lever", "Change", "Days", "Cash released"],
        [
          ["Faster collections", "DSO 45 → 38", "−7", "$140,000"],
          ["Leaner stock", "DIO 60 → 50", "−10", "$150,000"],
          ["Agreed longer supplier terms", "DPO 30 → 40", "−10", "$150,000"],
        ],
        { footer: ["Total", "75 → 48 days", "−27", "$440,000"], numeric: [2, 3] },
      ),
      p("At 9% interest, $440,000 less borrowing saves about $39,600 a year — and creates room to fund growth."),
    ),
    screen(
      "Overdrafts and working capital loans",
      compare(
        ["Overdraft", "Flexible borrowing up to a limit.", ["Interest only on what's used", "Usually repayable on demand", "Best for fluctuations"]],
        ["Working capital loan", "A fixed amount over a set term.", ["Predictable repayments", "Less flexible", "Best for a permanent increase"]],
      ),
      p("Kestrel keeps the $500,000 overdraft for fluctuations, and plans to fund growth by releasing working capital first."),
    ),
    screen(
      "Invoice discounting and factoring",
      table(
        ["", "Invoice discounting", "Factoring"],
        [
          ["What happens", "Lender advances a percentage of invoices; you still collect", "Factor advances funds and collects from customers"],
          ["Customers know?", "Usually not (confidential)", "Yes"],
          ["Credit control", "Stays with you", "Done by the factor"],
          ["Suits", "Businesses with good credit control", "Smaller businesses without a collections team"],
        ],
      ),
      note("Advances are often around 80–90% of eligible invoices, with fees and interest on top. Recourse arrangements mean you bear bad debts; non-recourse costs more."),
    ),
    screen(
      "Supplier credit and trade finance",
      terms(
        ["Supplier credit", "Trade terms from suppliers — the cheapest working capital funding when terms are agreed."],
        ["Supply chain finance (reverse factoring)", "A large buyer's bank pays suppliers early at a discount; the buyer pays the bank later."],
        ["Letters of credit", "A bank guarantees payment to an overseas supplier when shipping documents are presented."],
        ["Import loans", "Short-term finance to pay for imported goods until they're sold."],
      ),
      p("Kestrel imports LED lighting from Asia and uses import loans to pay suppliers on shipment."),
    ),
    mistakes(
      ["Borrowing before releasing cash internally", "Pull the three levers first."],
      ["Funding permanent needs with an overdraft", "Use a term facility."],
      ["Ignoring factoring's effect on customers", "They'll deal with the factor."],
      ["Comparing finance on headline rates only", "Include all fees."],
    ),
    check(
      5,
      q("DIO 50, DSO 40, DPO 35. What's the cash conversion cycle?", ["55 days", "125 days", "45 days", "25 days"], 0, "50 + 40 − 35."),
      q("Which change lengthens the cash conversion cycle?", ["Customers paying more slowly", "Agreed longer supplier terms", "Leaner stock", "Faster invoicing"], 0, "DSO rises."),
      q("In factoring, who usually collects from customers?", ["The factor", "The business", "The bank's auditor", "Nobody"], 0, "Customers know about it."),
      q("Which funding is usually repayable on demand?", ["An overdraft", "A five-year term loan", "Share capital", "Retained earnings"], 0, "Short-term and flexible."),
      q("What's a letter of credit used for?", ["Guaranteeing payment to an overseas supplier", "Paying staff", "Filing tax", "Insuring stock"], 0, "Trade finance."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Cash released",
          ["Daily sales $10,000 and daily cost of sales $7,000. DSO falls 5 days and DIO falls 8 days. How much cash is released?"],
          ["5 × $10,000 + 8 × $7,000 = $106,000."],
        ],
        [
          "Exercise 2 — Choose",
          ["A small business with no credit controller wants funding against invoices. Discounting or factoring?"],
          ["Factoring — the factor provides credit control and collection."],
        ],
      ),
    ),
    summary(
      ["The cash conversion cycle", "Three levers releasing $440,000", "Overdrafts vs. working capital loans", "Invoice discounting vs. factoring", "Supplier credit and trade finance"],
      "Release cash from the cycle first, then match external funding to the type of need.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Monitoring and Improving Working Capital",
      ["Improvements only last if they're measured and owned. This module sets up Kestrel's monthly monitoring."],
      ["Build a monthly working capital dashboard", "Link working capital to the cash flow forecast", "Set targets and owners for each lever", "Avoid common mistakes that tie up cash", "Use a working capital review checklist"],
    ),
    screen(
      "A monthly working capital dashboard",
      table(
        ["KPI", "Last year", "Target", "Owner"],
        [
          ["Debtor days", "45", "38", "Credit controller"],
          ["% receivables overdue", "40%", "20%", "Credit controller"],
          ["Inventory days", "60", "50", "Purchasing manager"],
          ["Stock with no sales in 12 months", "$45,000", "Under $10,000", "Purchasing manager"],
          ["Creditor days", "30", "40", "Finance manager"],
          ["Cash conversion cycle", "75", "48", "Amara (FD)"],
        ],
      ),
      tip("Trend, not snapshot", "Show 12 months of trend for each KPI — month-end figures can be flattered by one-off actions."),
    ),
    screen(
      "Linking to the cash flow forecast",
      bullets(
        "Use target days to forecast receivables, inventory and payables each month.",
        "Forecast receipts from the aging and DSO trend, not from sales alone.",
        "Compare actual working capital with the forecast monthly and explain gaps.",
        "Show the bank how improvements reduce the overdraft over time.",
      ),
      p("Kestrel's forecast shows the overdraft falling from $300,000 to under $100,000 within 9 months if the targets are hit."),
    ),
    screen(
      "Targets and owners",
      steps(
        ["Set realistic targets", "Based on terms, industry benchmarks and quick wins."],
        ["Assign one owner per lever", "Not just finance — sales and purchasing too."],
        ["Align incentives", "Kestrel's sales reps' commission is now paid on cash collected, not invoices raised."],
        ["Review monthly", "A 30-minute working capital meeting."],
      ),
    ),
    screen(
      "Common mistakes that tie up cash",
      table(
        ["Mistake", "Effect"],
        [
          ["Sales staff rewarded on sales, not collections", "Credit given to poor payers"],
          ["Buying in bulk for small discounts", "Excess and obsolete stock"],
          ["Paying suppliers early by habit", "Lost free credit"],
          ["Slow or wrong invoices", "Higher debtor days and disputes"],
          ["Window-dressing at month end", "Good numbers, no lasting change"],
        ],
      ),
    ),
    screen(
      "Working capital review checklist",
      bullets(
        "Credit policy, checks and limits in place and followed.",
        "Invoices issued on delivery, with PO numbers and proof of delivery.",
        "Weekly collections process and aging review.",
        "Payment runs pay on due dates; discounts assessed on annualised return.",
        "Three-way match and duplicate-invoice controls.",
        "ABC classes, reorder levels and slow-moving stock reports.",
        "Cash conversion cycle measured monthly, with targets and owners.",
        "Working capital linked to the cash forecast and funding plan.",
      ),
    ),
    mistakes(
      ["KPIs without owners", "Assign each lever."],
      ["Only finance cares", "Involve sales and purchasing."],
      ["Month-end snapshots only", "Track trends."],
      ["Targets disconnected from the forecast", "Link them."],
    ),
    check(
      6,
      q("Why show 12 months of trend on the dashboard?", ["Month-end figures can be flattered by one-off actions", "It looks better", "It's required by law", "To fill space"], 0, "Lasting change shows in trends."),
      q("Who should own the inventory days target?", ["The purchasing manager", "The receptionist", "The auditor", "Nobody"], 0, "The person who controls buying."),
      q("How should receipts be forecast?", ["From aging and debtor-day trends", "From sales alone", "From the budget only", "From last year's cash"], 0, "Reflect how customers pay."),
      q("Which incentive supports working capital?", ["Commission paid on cash collected", "Commission on invoices raised", "Bonuses for bulk buying", "No incentives"], 0, "Aligns sales with cash."),
      q("What's window-dressing?", ["Short-term actions to flatter month-end numbers", "Shop display design", "A tax rule", "A funding type"], 0, "No lasting change."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Dashboard",
          ["Kestrel's DSO improves to 41 days. How much cash has been released so far against the 45-day starting point?"],
          ["4 × $20,000 = $80,000."],
        ],
        [
          "Exercise 2 — Owners",
          ["Assign an owner to: (a) obsolete stock, (b) disputed invoices, (c) supplier terms."],
          ["(a) Purchasing manager. (b) Credit controller with the sales rep. (c) Finance manager with purchasing."],
        ],
      ),
    ),
    summary(
      ["A working capital dashboard", "Linking to the cash forecast", "Targets, owners and incentives", "Common cash traps", "A review checklist"],
      "Working capital improves when every lever has a target, an owner and a monthly review linked to the cash forecast.",
    ),
  ],
}

export default lessons
