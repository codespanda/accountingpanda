import { asset } from "@/lib/asset"

/** A card on the Blog page. Hand-coded posts live here; posts published
 * from the blog studio are loaded from src/content/blog instead. */
export type Post = {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
  slug?: string
  image?: string
}

export const categories = [
  "All",
  "Bookkeeping",
  "Tax & Compliance",
  "Payroll",
  "Business Growth",
  "AI & Automation",
]

export const posts: Post[] = [
  {
    title: "Why Your Bank Reconciliation Doesn't Match — And What It's Really Telling You",
    excerpt:
      "10 common reasons a bank reconciliation won't balance, a step-by-step process to investigate the difference, and why chasing zero isn't the same as getting it right.",
    category: "Bookkeeping",
    date: "Sep 11, 2026",
    readTime: "10 min read",
    featured: true,
    slug: "why-your-bank-reconciliation-doesnt-match-and-what-its-really-telling-you",
    image: asset("assets/blog-bank-reconciliation-doesnt-match.jpg"),
  },
  {
    title: "Monthly Closing Process: A Complete Guide for Businesses with AccountingPanda AI Accountant",
    excerpt:
      "An 11-step month-end close process, a full closing checklist, where an AI accountant fits in, and best practices for a successful close.",
    category: "Bookkeeping",
    date: "Sep 8, 2026",
    readTime: "11 min read",
    slug: "monthly-closing-process-a-complete-guide-for-businesses",
    image: asset("assets/blog-monthly-closing-process.jpg"),
  },
  {
    title: "1099 Reporting: Deadlines, Rules, and Common Mistakes Businesses Should Know",
    excerpt:
      "A practical guide to 1099-NEC and 1099-MISC rules, 2027 filing deadlines for 2026 payments, the most common mistakes, penalty amounts, and a year-end checklist.",
    category: "Tax & Compliance",
    date: "Sep 7, 2026",
    readTime: "9 min read",
    slug: "1099-reporting-deadlines-rules-and-common-mistakes-businesses-should-know",
    image: asset("assets/blog-1099-rules-mistakes.jpg"),
  },
  {
    title: "How to Improve Cash Flow Management: Practical Strategies for Business Growth",
    excerpt:
      "Cash flow is the lifeblood of every business. 10 practical strategies — forecasting, receivables, expenses, payables, inventory, reserves, KPIs and automation.",
    category: "Business Growth",
    date: "Sep 4, 2026",
    readTime: "9 min read",
    slug: "how-to-improve-cash-flow-management-practical-strategies-for-business-growth",
    image: asset("assets/blog-cash-flow-management.jpg"),
  },
  {
    title: "AI vs. Traditional Bookkeeping: Which Is Better for Small Businesses?",
    excerpt:
      "A practical comparison of AI-powered and traditional bookkeeping — where each wins, what a hybrid approach looks like, and what to consider before choosing.",
    category: "AI & Automation",
    date: "Sep 1, 2026",
    readTime: "9 min read",
    slug: "ai-vs-traditional-bookkeeping-which-is-better-for-small-businesses",
    image: asset("assets/blog-ai-vs-traditional-bookkeeping.jpg"),
  },
  {
    title: "Year-End Accounting Checklist for Small Businesses",
    excerpt:
      "A practical, step-by-step checklist to reconcile accounts, verify payroll and fixed assets, prepare for tax filing, and close the books with confidence.",
    category: "Bookkeeping",
    date: "Aug 31, 2026",
    readTime: "8 min read",
    slug: "year-end-accounting-checklist-for-small-businesses",
    image: asset("assets/blog-year-end-checklist.jpg"),
  },
  {
    title: "How AI Can Detect Accounting Errors and Fraud",
    excerpt:
      "AI can analyze 100% of transactions to catch duplicate payments, unusual journal entries, expense anomalies, and vendor fraud — while accountants still make the final call.",
    category: "AI & Automation",
    date: "Aug 30, 2026",
    readTime: "9 min read",
    slug: "how-ai-can-detect-accounting-errors-and-fraud",
    image: asset("assets/blog-ai-fraud-detection.jpg"),
  },
  {
    title: "AI-Powered Bank Reconciliation: How It Works and Why It Matters",
    excerpt:
      "Bank reconciliation has always been essential — and time-consuming. Here's how AI-powered matching, confidence scores and exception detection are changing that.",
    category: "AI & Automation",
    date: "Aug 29, 2026",
    readTime: "9 min read",
    slug: "ai-powered-bank-reconciliation-how-it-works",
    image: asset("assets/blog-ai-bank-reconciliation.jpg"),
  },
  {
    title: "AI Agents vs. Accounting Software: What's the Difference?",
    excerpt:
      "Accounting software executes processes. AI agents coordinate processes. Here's how the two actually differ, and why they work together rather than compete.",
    category: "AI & Automation",
    date: "Aug 26, 2026",
    readTime: "8 min read",
    slug: "ai-agents-vs-accounting-software-whats-the-difference",
    image: asset("assets/blog-ai-agents-vs-accounting-software.jpg"),
  },
  {
    title: "How CPA Firms Can Use AI During Tax Season",
    excerpt:
      "Practical ways CPA firms can use AI to handle tax-season workload more efficiently — while keeping professional judgment firmly in the loop.",
    category: "AI & Automation",
    date: "Aug 25, 2026",
    readTime: "9 min read",
    slug: "how-cpa-firms-can-use-ai-during-tax-season",
    image: asset("assets/blog-cpa-ai-tax-season.jpg"),
  },
  {
    title: "Will AI Replace Accountants in 2026?",
    excerpt:
      "AI is replacing accounting tasks—but it is not replacing the accountant. Here's what the future accountant needs to know.",
    category: "AI & Automation",
    date: "Aug 24, 2026",
    readTime: "9 min read",
    slug: "will-ai-replace-accountants-in-2026",
    image: asset("assets/blog-ai-replace-accountants.jpg"),
  },
  {
    title: "How Financial Planning Helps Your Business Grow Faster",
    excerpt:
      "A strong financial plan gives your business direction, control and confidence to scale sustainably and profitably — here are 8 ways it drives growth.",
    category: "Business Growth",
    date: "Aug 16, 2026",
    readTime: "10 min read",
    slug: "how-financial-planning-helps-your-business-grow-faster",
    image: asset("assets/blog-financial-planning.jpg"),
  },
  {
    title: "US Sales Tax Nexus in 2026: What Every Growing Business Needs to Know",
    excerpt:
      "Economic nexus thresholds vary by state. We break down how to track exposure and stay compliant as you scale across the US.",
    category: "Tax & Compliance",
    date: "Aug 3, 2026",
    readTime: "8 min read",
    slug: "us-sales-tax-nexus-in-2026",
    image: asset("assets/blog-sales-tax-nexus.jpg"),
  },
  {
    title: "BAS Preparation Checklist for Australian Businesses",
    excerpt:
      "A step-by-step checklist to get your Business Activity Statement filed accurately and on time, every quarter.",
    category: "Tax & Compliance",
    date: "Jul 27, 2026",
    readTime: "5 min read",
    slug: "bas-preparation-checklist-for-australian-businesses",
    image: asset("assets/blog-bas-checklist.jpg"),
  },
  {
    title: "Payroll & Superannuation: Common Compliance Traps in Australia",
    excerpt:
      "Superannuation guarantee changes catch many employers off guard. Here's what to check before your next pay run.",
    category: "Payroll",
    date: "Jul 18, 2026",
    readTime: "7 min read",
    slug: "payroll-superannuation-common-compliance-traps-in-australia",
    image: asset("assets/blog-payroll-superannuation.jpg"),
  },
  {
    title: "When Should a Growing Business Outsource Its Accounting?",
    excerpt:
      "The signs it's time to hand bookkeeping and reporting to a dedicated team — and how to make the transition smooth.",
    category: "Business Growth",
    date: "Jul 9, 2026",
    readTime: "4 min read",
    slug: "when-should-a-growing-business-outsource-its-accounting",
    image: asset("assets/blog-when-to-outsource.jpg"),
  },
  {
    title: "QuickBooks vs Xero: Which Fits Your Business in 2026?",
    excerpt:
      "A practical comparison of the two most popular platforms we work in every day, for US and Australian businesses.",
    category: "Bookkeeping",
    date: "Jun 30, 2026",
    readTime: "9 min read",
    slug: "quickbooks-vs-xero-which-fits-your-business-in-2026",
    image: asset("assets/blog-quickbooks-vs-xero.jpg"),
  },
  {
    title: "1099 Reporting Deadlines You Can't Afford to Miss",
    excerpt:
      "Late or incorrect 1099 filings mean penalties. Here's the timeline and documentation you need in place before year-end.",
    category: "Tax & Compliance",
    date: "Jun 21, 2026",
    readTime: "5 min read",
    slug: "1099-reporting-deadlines-you-cant-afford-to-miss",
    image: asset("assets/blog-1099-deadlines.jpg"),
  },
  {
    title: "How CPA Firms Use Outsourced Support During Tax Season",
    excerpt:
      "A look at how accounting and CPA firms extend their capacity during peak season without adding full-time headcount.",
    category: "Business Growth",
    date: "Jun 12, 2026",
    readTime: "6 min read",
    slug: "how-cpa-firms-use-outsourced-support-during-tax-season",
    image: asset("assets/blog-cpa-outsourced-support.jpg"),
  },
]

/** Slugs already used by hand-coded posts. */
export const staticPostSlugs = posts.flatMap((p) => (p.slug ? [p.slug] : []))
