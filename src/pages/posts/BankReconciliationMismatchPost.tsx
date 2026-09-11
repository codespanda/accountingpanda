import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Clock,
  Send,
  Receipt,
  TrendingUp,
  Copy,
  FileQuestion,
  Pencil,
  FolderTree,
  History,
  UserCog,
  Search,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const reasons = [
  {
    icon: Clock,
    title: "1. Outstanding Checks Haven't Cleared",
    body: "A check recorded in your accounting system may not have cleared the bank yet. For example, books show a $2,000 payment, but the bank statement doesn't show it yet.",
    close: "The key: don't immediately adjust your books just because the bank hasn't cleared the transaction. It may simply be an outstanding check.",
  },
  {
    icon: Send,
    title: "2. Deposits Are Still in Transit",
    body: "The opposite can happen with deposits. You may have recorded a customer payment in your books at the end of the month, but the bank may not have processed the deposit until the following month — especially near month-end.",
    close: "This doesn't necessarily mean there's an error. It could simply be a timing difference.",
  },
  {
    icon: Receipt,
    title: "3. Bank Fees Were Never Recorded",
    body: "Banks don't always wait for you to update your accounting system. Monthly maintenance fees, wire fees, transaction charges, and other bank charges may appear on the statement without having been entered into your books.",
    close: "For example: bank statement shows a $35 fee, accounting system shows nothing recorded — your reconciliation will be off by $35. These small transactions can be easy to overlook, but they add up.",
  },
  {
    icon: TrendingUp,
    title: "4. Interest Income Was Missed",
    body: "The same issue can happen in the other direction. Your bank may have credited interest to the account, while your accounting records still show the previous balance.",
    close: "A small amount of interest may not seem important. But if you want your books to accurately reflect the bank activity, every transaction matters.",
  },
  {
    icon: Copy,
    title: "5. A Transaction Was Entered Twice",
    body: "Duplicate entries are another common reconciliation problem. Imagine a $1,500 payment was accidentally entered twice — the bank only shows one transaction, but your books show two. Now you're off by $1,500.",
    close: "Duplicate transactions are particularly easy to create when transactions are imported automatically and someone manually enters the same transaction afterward.",
  },
  {
    icon: FileQuestion,
    title: "6. A Transaction Was Never Recorded",
    body: "Sometimes the simplest explanation is the correct one — the bank shows a transaction that doesn't exist in your accounting records. This could be a debit card purchase, bank fee, ACH payment, automatic subscription, interest credit, direct deposit, or electronic transfer.",
    close: "If the transaction is legitimate, it needs to be properly recorded and categorized.",
  },
  {
    icon: Pencil,
    title: "7. The Wrong Amount Was Entered",
    body: "One digit can cause a reconciliation headache. Bank shows $4,875.00, your books show $4,857.00 — that's only an $18 difference, but it prevents the reconciliation from balancing.",
    close: "Data-entry mistakes are especially common when transactions are entered manually.",
  },
  {
    icon: FolderTree,
    title: "8. The Transaction Was Posted to the Wrong Account",
    body: "The bank reconciliation may appear wrong when the real issue is account classification. For example, a transfer from the operating account to a savings account might have been recorded as an expense.",
    close: "The cash movement happened. But the accounting treatment is wrong. This is why reconciliation isn't simply about matching numbers — it's also about confirming that transactions are recorded correctly.",
  },
  {
    icon: History,
    title: "9. The Opening Balance Is Wrong",
    body: "Sometimes the problem didn't start this month — it started months ago. If the previous reconciliation was incorrect, or the ending balance from the previous period doesn't properly carry forward, the current reconciliation may never match.",
    close: "This is one reason it's important to investigate the first point where the discrepancy appeared, rather than repeatedly adjusting the current period.",
  },
  {
    icon: UserCog,
    title: "10. Someone Changed a Previously Reconciled Transaction",
    body: "This is one of the most overlooked causes. A transaction that was already reconciled may later be edited, deleted, duplicated, reclassified, or changed in amount.",
    close: "The current reconciliation then becomes different from what was previously approved. This can be particularly difficult to identify in large accounting files without a proper audit trail.",
  },
]

const compareChecks = [
  "Missing transactions",
  "Duplicate transactions",
  "Incorrect amounts",
  "Wrong dates",
  "Bank fees",
  "Interest",
  "Transfers",
  "Outstanding checks",
  "Deposits in transit",
]

const investigationSteps = [
  { title: "Confirm the bank statement period", body: "Make sure you're reconciling the correct account and the correct statement dates." },
  { title: "Verify the opening balance", body: "Compare it with the previous period's reconciled ending balance." },
  { title: "Compare transactions", body: "Look for the items above — missing, duplicate, or incorrect transactions, fees, interest, transfers, and timing differences.", list: compareChecks },
  {
    title: "Investigate the difference",
    body: "The difference itself can provide a clue. If you're off by exactly $500, search for transactions around $500. If you're off by a familiar recurring amount, check recurring payments or fees.",
  },
  {
    title: "Check previously reconciled transactions",
    body: "If the reconciliation used to balance but doesn't anymore, investigate changes to historical transactions.",
  },
]

const controlBenefits = ["Errors", "Duplicate transactions", "Missing entries", "Fraudulent activity", "Incorrect classifications", "Cash-flow issues"]

export function BankReconciliationMismatchPost() {
  return (
    <>
      <Seo
        title="Why Your Bank Reconciliation Doesn't Match — And What It's Really Telling You"
        description="10 common reasons a bank reconciliation won't balance, a step-by-step process to investigate the difference, and why chasing zero isn't the same as getting it right."
        path="/blog/why-your-bank-reconciliation-doesnt-match-and-what-its-really-telling-you"
        image={asset("assets/blog-bank-reconciliation-doesnt-match.jpg")}
        type="article"
        datePublished="2026-09-11"
      />

      {/* Header */}
      <section className="bg-brand-bg py-14 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand-green"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <span className="mt-6 inline-block rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            BOOKKEEPING
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.4rem]">
            Why Your Bank Reconciliation Doesn't Match — And What It's
            Really Telling You
          </h1>
          <p className="mt-4 text-base text-gray-500">
            A reconciliation that doesn't balance isn't just an annoying
            accounting problem. It's a signal. Here are the most common
            reasons — and how to investigate them.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Sep 11, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              10 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-bank-reconciliation-doesnt-match.jpg")}
            alt="Infographic: Why Your Bank Reconciliation Doesn't Match — And What It's Really Telling You"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            You've reconciled the bank statement. You've checked the
            transactions. You've reviewed the opening balance. And
            somehow… the numbers still don't match.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            If you work in accounting, you've probably experienced this
            frustrating moment more times than you'd like to admit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            But a bank reconciliation that doesn't balance isn't just an
            annoying accounting problem.
          </p>
          <p className="mt-4 text-base font-semibold leading-relaxed text-brand-heading">
            It's a signal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            It may be telling you that something was entered incorrectly,
            recorded twice, missed completely, or posted to the wrong
            account.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Here are some of the most common reasons your bank
            reconciliation doesn't match.
          </p>

          {/* 10 reasons */}
          <div className="mt-8 space-y-4">
            {reasons.map(({ icon: Icon, title, body, close }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <h3 className="text-base font-semibold text-brand-heading">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{close}</p>
              </div>
            ))}
          </div>

          {/* What to do */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            So What Should You Do When It Doesn't Match?
          </h2>
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
            <Search className="mt-0.5 h-4.5 w-4.5 shrink-0 text-amber-500" />
            <p className="text-sm leading-relaxed text-gray-700">
              Don't immediately create a "plug" entry. Don't force the
              reconciliation to zero. And don't keep clicking buttons
              until the difference disappears. Instead, work
              systematically.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {investigationSteps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-heading">
                      Step {i + 1}: {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.body}</p>
                    {step.list && (
                      <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                        {step.list.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bigger lesson */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-brand-green-light p-6">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <div>
              <h2 className="text-lg font-bold text-brand-heading">The Bigger Lesson</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-heading/80">
                A bank reconciliation isn't just a monthly accounting
                chore. It's a control mechanism. A good reconciliation can
                help identify:
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {controlBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-heading/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-brand-heading/80">
                The goal isn't simply to make the difference equal zero.
                The goal is to understand why the difference exists.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-heading">
                Because a reconciliation that balances due to an
                unexplained adjustment isn't necessarily a correct
                reconciliation. It's just a balanced one. And there's a
                big difference.
              </p>
            </div>
          </div>

          {/* Future of reconciliation */}
          <div className="mt-8 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-green" />
              <h2 className="text-lg font-bold text-brand-heading">
                The Future of Bank Reconciliation
              </h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Traditional reconciliation often requires accountants to
              manually compare hundreds — or even thousands — of
              transactions. Modern accounting workflows are changing that.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              AI-powered accounting tools can help identify potential
              duplicates, unusual transactions, missing entries, and
              reconciliation discrepancies much faster.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              But automation doesn't eliminate the accountant. It changes
              where the accountant spends their time. Instead of spending
              hours searching for a $27 discrepancy, accountants can focus
              more on reviewing exceptions, understanding financial data,
              and making better decisions.
            </p>
            <p className="mt-3 text-sm font-medium text-brand-heading">
              The future of reconciliation isn't just faster
              reconciliation. It's smarter reconciliation.
            </p>
          </div>

          {/* Final thought */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-white" />
            <div>
              <h2 className="text-lg font-bold text-white">Final Thought</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                When your bank reconciliation doesn't match, don't ask:
                "How do I make this balance?"
              </p>
              <p className="mt-2 text-base font-semibold leading-relaxed text-white">
                Ask: "What is this difference trying to tell me?"
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                That question can turn reconciliation from a frustrating
                monthly task into one of the most valuable financial
                controls in your business.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Reconciliation never quite balancing?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced bookkeeping and bank
                reconciliation built for growing businesses.
              </p>
            </div>
            <Button className="shrink-0" asChild>
              <a href={CONSULTATION_MAILTO}>
                Chat to an Expert
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </article>

      <Newsletter />
    </>
  )
}
