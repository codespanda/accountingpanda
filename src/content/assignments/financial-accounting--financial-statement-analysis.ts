import type { PracticalAssignment } from "@/lib/lessonTypes"
import { note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Financial Statement Analysis — benchmarking a
// competitor, Birch & Co, against Cedar & Stone.

const assignment: PracticalAssignment = {
  title: "Benchmark Birch & Co against Cedar & Stone",
  period: "Year ended 30 June 2026",
  intro:
    "Cedar & Stone's board wants to know how a larger competitor, Birch & Co, performed. Calculate the key ratios from Birch & Co's statements and compare them with Cedar & Stone.",
  context: [
    p("Birch & Co sells homewares through its own stores. Use year-end balances; 365 days."),
    table(
      ["Birch & Co — FY2026", "Amount"],
      [
        ["Revenue", "$800,000"],
        ["Cost of sales", "$520,000"],
        ["Operating expenses", "$180,000"],
        ["Interest expense", "$10,000"],
        ["Tax (25%)", "$22,500"],
        ["Cash", "$40,000"],
        ["Trade receivables", "$90,000"],
        ["Inventory", "$80,000"],
        ["Total assets", "$600,000"],
        ["Current liabilities", "$140,000"],
        ["Total borrowings", "$150,000"],
        ["Equity", "$310,000"],
      ],
      { numeric: [1] },
    ),
    note("Cedar & Stone FY2026 for comparison: revenue $500,000, profit $56,250, total assets $450,000, equity $301,250."),
  ],
  tasks: [
    num("What is Birch & Co's gross margin? (%)", 35, "($800,000 − $520,000) ÷ $800,000 = 35%.", { suffix: "%", tolerance: 0.1 }),
    num("What is Birch & Co's profit for the year?", 67500, "$800,000 − $520,000 − $180,000 − $10,000 = $90,000 before tax; less $22,500 tax = $67,500.", { prefix: "$" }),
    num("What is Birch & Co's net profit margin? (%, two decimals)", 8.44, "$67,500 ÷ $800,000 = 8.44%.", { suffix: "%", tolerance: 0.01 }),
    num("What is Birch & Co's return on equity? (%, one decimal)", 21.8, "$67,500 ÷ $310,000 = 21.8%.", { suffix: "%", tolerance: 0.1 }),
    num("What is Birch & Co's quick ratio? (two decimals)", 0.93, "(Current assets $210,000 − inventory $80,000) ÷ $140,000 = 0.93.", { tolerance: 0.01 }),
    num("What are Birch & Co's debtor days? (one decimal)", 41.1, "$90,000 ÷ $800,000 × 365 = 41.1 days.", { suffix: "days", tolerance: 0.1 }),
    num("What are Birch & Co's inventory days? (one decimal)", 56.2, "$80,000 ÷ $520,000 × 365 = 56.2 days.", { suffix: "days", tolerance: 0.1 }),
    num("What is Birch & Co's interest cover?", 10, "EBIT $100,000 ÷ interest $10,000 = 10 times.", { suffix: "×", tolerance: 0.01 }),
    num("What is Cedar & Stone's net profit margin? (%, two decimals)", 11.25, "$56,250 ÷ $500,000 = 11.25%.", { suffix: "%", tolerance: 0.01 }),
    pick("Which statement best summarises the comparison?", "Birch earns a higher return on equity, but Cedar & Stone is more profitable on each dollar of sales", ["Birch is better on every measure", "Cedar & Stone is better on every measure", "They can't be compared"], "Birch's ROE is 21.8% vs. Cedar's 18.7%, but Cedar's net margin is 11.25% vs. Birch's 8.44% — Birch uses more borrowing and turns its assets over faster."),
  ],
  references: [
    ref("IFRS Foundation — IAS 1 Presentation of Financial Statements", "https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/"),
    ref("US SEC — Beginners' guide to financial statements", "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"),
  ],
}

export default assignment
