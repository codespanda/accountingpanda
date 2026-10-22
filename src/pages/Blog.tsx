import { useRef } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Search, X } from "lucide-react"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"
import { blogData, formatPostDate } from "@/lib/blogContent"
import { categories, posts as staticPosts, type Post } from "@/pages/blogPostList"

// Studio-published posts (newest first) come before the hand-coded ones.
// If a studio post is marked featured, it replaces the hand-coded feature.
const studioPosts: Post[] = blogData.map((p) => ({
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  date: formatPostDate(p.date),
  readTime: p.readTime,
  featured: p.featured,
  slug: p.slug,
  image: p.image ? asset(p.image) : undefined,
}))
const hasStudioFeature = studioPosts.some((p) => p.featured)
const posts: Post[] = [
  ...studioPosts,
  ...staticPosts.map((p) => (hasStudioFeature ? { ...p, featured: false } : p)),
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

const PAGE_SIZE = 9

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")

/** True when every word of the query appears in the post's title, excerpt or category. */
function matches(post: Post, query: string) {
  const haystack = normalize(`${post.title} ${post.excerpt} ${post.category}`)
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word))
}

export function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get("category")
  const active = requestedCategory && categories.includes(requestedCategory) ? requestedCategory : "All"
  const query = searchParams.get("q") ?? ""
  const searching = query.trim().length > 0
  const gridRef = useRef<HTMLElement>(null)

  // While searching, the featured post is just another result.
  const featured = searching ? undefined : posts.find((p) => p.featured)
  const rest = searching ? posts.filter((p) => matches(p, query)) : posts.filter((p) => !p.featured)
  const filtered =
    active === "All" ? rest : rest.filter((p) => p.category === active)

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const requested = Number.parseInt(searchParams.get("page") ?? "1", 10)
  const page = Number.isFinite(requested) ? Math.min(Math.max(requested, 1), pageCount) : 1
  const pagePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  // Search, category and page live in the URL, so links and the back button work.
  const setView = (category: string, nextPage: number, q = query, replace = false) => {
    const params: Record<string, string> = {}
    if (q) params.q = q
    if (category !== "All") params.category = category
    if (nextPage > 1) params.page = String(nextPage)
    setSearchParams(params, { replace })
  }

  const goToPage = (next: number) => {
    setView(active, next)
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const selectCategory = (cat: string) => setView(cat, 1)
  // Typing replaces the history entry rather than adding one per keystroke.
  const setQuery = (q: string) => setView(active, 1, q, true)
  const clearSearch = () => setView(active, 1, "")

  return (
    <>
      <Seo
        title="Accounting Insights & Resources"
        description="Practical guidance on bookkeeping, tax compliance, payroll and growing your business — from our outsourced accounting team."
        path="/blog"
      />
      {/* Header */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl text-center rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
          <span className="inline-block rounded-full bg-bento-mint px-3.5 py-2 text-[13px] font-bold text-bento-forest">
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

      {/* Search and category filters */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-6 py-5 sm:px-10 lg:px-14">
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault()
              gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
            className="relative mx-auto max-w-xl"
          >
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-full border border-gray-200 bg-brand-bg py-3 pl-11 pr-11 text-sm text-brand-heading outline-none placeholder:text-gray-400 focus:border-brand-green focus:bg-white focus:ring-2 focus:ring-brand-green/20 [&::-webkit-search-cancel-button]:hidden"
            />
            {searching && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 hover:bg-white hover:text-brand-heading"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => selectCategory(cat)}
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
        </div>
      </section>

      {/* Featured post */}
      {featured && page === 1 && (active === "All" || active === featured.category) && (
        <section className="container-px pt-4">
          <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 pt-12">
            <Link
              to={featured.slug ? `/blog/${featured.slug}` : "#"}
              className="group grid grid-cols-1 overflow-hidden rounded-[22px] transition-shadow lg:grid-cols-2"
            >
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="block aspect-[16/9] w-full self-center object-cover"
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
      <section ref={gridRef} className="container-px scroll-mt-28 pt-4">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          {searching && filtered.length > 0 && (
            <p className="mb-6 text-sm text-gray-500" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "article matches" : "articles match"}{" "}
              <span className="font-semibold text-brand-heading">“{query.trim()}”</span>
              {active !== "All" && <> in {active}</>}.{" "}
              <button type="button" onClick={clearSearch} className="font-semibold text-brand-green hover:underline">
                Clear search
              </button>
            </p>
          )}
          {filtered.length === 0 ? (
            searching ? (
              <div className="py-16 text-center" aria-live="polite">
                <p className="text-sm text-gray-500">
                  No articles match <span className="font-semibold text-brand-heading">“{query.trim()}”</span>
                  {active !== "All" && <> in {active}</>}.
                </p>
                <button
                  type="button"
                  onClick={clearSearch}
                  className="mt-3 text-sm font-semibold text-brand-green hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <p className="py-16 text-center text-sm text-gray-500">
                No articles in this category yet — check back soon.
              </p>
            )
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pagePosts.map((post) => (
                <Link
                  key={post.title}
                  to={post.slug ? `/blog/${post.slug}` : "#"}
                  className="group flex flex-col overflow-hidden rounded-[22px] transition-shadow"
                >
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="block aspect-[16/9] w-full object-cover" />
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

          {pageCount > 1 && (
            <nav
              aria-label="Blog pages"
              className="mt-12 flex flex-col items-center gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:justify-between"
            >
              <p className="text-sm text-gray-500">
                Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
                {filtered.length} articles
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-bg disabled:pointer-events-none disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => goToPage(n)}
                    aria-current={n === page ? "page" : undefined}
                    aria-label={`Page ${n}`}
                    className={`h-10 w-10 rounded-full text-sm font-semibold transition-colors ${
                      n === page
                        ? "bg-brand-green text-white"
                        : "bg-brand-bg text-gray-600 hover:bg-brand-green-light hover:text-brand-green"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => goToPage(page + 1)}
                  disabled={page === pageCount}
                  className="inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-bg disabled:pointer-events-none disabled:opacity-40"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </nav>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
