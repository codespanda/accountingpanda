import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

type Post = {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
  slug?: string
  image?: string
}

const categories = [
  "All",
  "Bookkeeping",
  "Tax & Compliance",
  "Payroll",
  "Business Growth",
  "AI & Automation",
]

const posts: Post[] = [
  {
    title: "AI vs. Traditional Bookkeeping: Which Is Better for Small Businesses?",
    excerpt:
      "A practical comparison of AI-powered and traditional bookkeeping — where each wins, what a hybrid approach looks like, and what to consider before choosing.",
    category: "AI & Automation",
    date: "Sep 1, 2026",
    readTime: "9 min read",
    featured: true,
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

const categoryColors: Record<string, string> = {
  Bookkeeping: "#2e8b3d",
  "Tax & Compliance": "#1d4ed8",
  Payroll: "#c026d3",
  "Business Growth": "#ea580c",
  "AI & Automation": "#7c3aed",
}

function PostImage({ category, className }: { category: string; className?: string }) {
  const color = categoryColors[category] ?? "#2e8b3d"
  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(135deg, ${color}1a, ${color}33)`,
      }}
    >
      <svg viewBox="0 0 200 140" className="h-full w-full">
        <rect x="30" y="30" width="140" height="90" rx="8" fill="#fff" opacity="0.6" />
        <rect x="46" y="48" width="70" height="8" rx="4" fill={color} opacity="0.5" />
        <rect x="46" y="64" width="108" height="6" rx="3" fill={color} opacity="0.3" />
        <rect x="46" y="76" width="90" height="6" rx="3" fill={color} opacity="0.3" />
        <circle cx="140" cy="95" r="14" fill={color} opacity="0.35" />
      </svg>
    </div>
  )
}

function CategoryPill({ category }: { category: string }) {
  const color = categoryColors[category] ?? "#2e8b3d"
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
      style={{ color, backgroundColor: `${color}1a` }}
    >
      {category}
    </span>
  )
}

export function Blog() {
  const [active, setActive] = useState("All")

  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)
  const filtered =
    active === "All" ? rest : rest.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="Accounting Insights & Resources"
        description="Practical guidance on bookkeeping, tax compliance, payroll and growing your business — from our outsourced accounting team."
        path="/blog"
      />
      {/* Header */}
      <section className="bg-brand-bg py-14 lg:py-20">
        <div className="container-px mx-auto max-w-7xl text-center">
          <span className="inline-block rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            RESOURCES
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight text-brand-heading sm:text-5xl">
            Accounting Insights &amp; Resources
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Practical guidance on bookkeeping, tax compliance, payroll and
            growing your business — from our outsourced accounting team.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="border-b border-gray-100 bg-white py-5">
        <div className="container-px mx-auto flex max-w-7xl flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-brand-green text-white"
                  : "bg-brand-bg text-gray-600 hover:bg-brand-green-light hover:text-brand-green"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      {featured && (active === "All" || active === featured.category) && (
        <section className="bg-white pt-12">
          <div className="container-px mx-auto max-w-7xl">
            <Link
              to={featured.slug ? `/blog/${featured.slug}` : "#"}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
            >
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="block h-auto w-full self-center"
                />
              ) : (
                <PostImage category={featured.category} className="h-56 lg:h-full" />
              )}
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <div className="flex items-center gap-3">
                  <CategoryPill category={featured.category} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Featured
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-heading group-hover:text-brand-green sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm text-gray-500 sm:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-gray-500">
              No articles in this category yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <Link
                  key={post.title}
                  to={post.slug ? `/blog/${post.slug}` : "#"}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
                >
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="block h-auto w-full" />
                  ) : (
                    <PostImage category={post.category} className="h-44" />
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <CategoryPill category={post.category} />
                    <h3 className="mt-3 text-base font-semibold leading-snug text-brand-heading group-hover:text-brand-green">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
