import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  FileUp,
  SearchCheck,
  BookOpen,
  MessageSquare,
  Workflow,
  ClipboardCheck,
  TrendingUp,
  Gauge,
  ShieldCheck,
  Rocket,
  Lightbulb,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const documentTypes = [
  "W-2s",
  "1099s",
  "K-1s",
  "Bank statements",
  "Brokerage statements",
  "Receipts",
  "Prior-year returns",
  "Business records",
]

const commTypes = [
  "Missing documents",
  "Filing-status questions",
  "Tax return updates",
  "Extension reminders",
  "Estimated tax payments",
  "Signature requests",
  "Review notifications",
]

const workflowSteps = [
  "Documents received",
  "AI extraction",
  "Missing-item check",
  "Complexity assessment",
  "Staff assignment",
  "CPA review",
  "Client approval",
  "E-file",
]

const reviewFlags = [
  "Large year-over-year income changes",
  "Significant expense fluctuations",
  "Missing forms",
  "Inconsistent taxpayer information",
  "Unusual deductions",
  "Data that doesn't match supporting documents",
]

const advisoryTopics = [
  "Estimated taxes",
  "Cash flow",
  "Entity structure",
  "Retirement planning",
  "Tax-efficient business decisions",
  "Year-round tax planning",
]

const dataPolicies = [
  "What client information can be entered into AI systems",
  "Which AI tools are approved",
  "Data retention",
  "Access controls",
  "Confidentiality",
  "Human review",
  "Vendor security",
  "Documentation of AI-assisted work",
]

const scaleSteps = [
  "Identify repetitive tax-season tasks.",
  "Choose one high-volume workflow.",
  "Pilot an AI solution.",
  "Measure time saved and error reduction.",
  "Train employees.",
  "Establish review and security policies.",
  "Expand successful workflows.",
]

const ways = [
  {
    icon: FileUp,
    title: "1. Automate Document Processing",
    body: "Tax professionals spend significant time collecting and organizing:",
    points: documentTypes,
    close:
      "AI-powered document tools can help extract information, classify documents, identify missing information, and organize client files. This allows staff to spend less time on manual data entry and more time reviewing the information.",
  },
  {
    icon: SearchCheck,
    title: "2. Identify Missing Documents",
    body: "Instead of manually checking every client file, AI can compare the documents received against expected information. For example:",
    points: [],
    example: {
      profile: "Self-employed taxpayer",
      expected: "1099-NEC, business expenses, mileage records, bank statements",
      received: "1099-NEC and bank statements",
      flag: "Mileage records and expense documentation missing.",
    },
    close: "The CPA or tax professional can then contact the client before the return reaches the preparation stage.",
  },
  {
    icon: BookOpen,
    title: "3. Speed Up Tax Research",
    body: "AI can help tax professionals summarize complex tax topics, compare rules, identify relevant provisions, and generate research starting points.",
    points: [],
    close:
      "However, tax professionals should verify AI-generated conclusions against authoritative sources before relying on them. AICPA & CIMA specifically recommends tools that provide supporting sources, logic, assumptions, and validation capabilities. AI can accelerate research. The CPA still owns the conclusion.",
  },
  {
    icon: MessageSquare,
    title: "4. Automate Client Communication",
    body: "During tax season, repetitive client emails can consume hours. AI can help draft communications for:",
    points: commTypes,
    close: "Instead of writing every message from scratch, staff can review and personalize AI-generated drafts.",
  },
  {
    icon: Workflow,
    title: "5. Create a Smarter Tax Workflow",
    body: "AI can help route work based on complexity and priority. For example:",
    points: [],
    close:
      "A simple return could move through a faster workflow, while complex returns can automatically receive additional review.",
  },
  {
    icon: ClipboardCheck,
    title: "6. Improve Review and Quality Control",
    body: "AI can assist with identifying unusual figures, inconsistencies, missing information, and potential review points. Examples include:",
    points: reviewFlags,
    close: "These should be treated as review flags — not automatic corrections.",
  },
  {
    icon: TrendingUp,
    title: "7. Help With Client Advisory Services",
    body: "AI doesn't have to stop at tax preparation. Once information is organized, firms can use AI-assisted workflows to help identify opportunities for conversations around:",
    points: advisoryTopics,
    close:
      "This can help CPA firms move from a seasonal compliance model toward a more proactive advisory relationship.",
  },
  {
    icon: Gauge,
    title: "8. Reduce Busy-Season Pressure",
    body: "The biggest benefit may not be simply \"doing more.\" It may be reducing repetitive work.",
    points: [],
    close:
      "AICPA & CIMA notes that AI and automation can help firms expand capacity, take on more work with existing resources, and reduce busy-season stress. That means staff can spend more time on work that requires Judgment + Experience + Client Relationships rather than repetitive administrative tasks.",
  },
]

export function CPAAiTaxSeasonPost() {
  return (
    <>
      <Seo
        title="How CPA Firms Can Use AI During Tax Season"
        description="Practical ways CPA firms can use AI to handle tax-season workload more efficiently — while keeping professional judgment firmly in the loop."
        path="/blog/how-cpa-firms-can-use-ai-during-tax-season"
        image={asset("assets/blog-cpa-ai-tax-season.jpg")}
        type="article"
        datePublished="2026-08-25"
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
            AI &amp; AUTOMATION
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.4rem]">
            How CPA Firms Can Use AI During Tax Season
          </h1>
          <p className="mt-4 text-base text-gray-500">
            AI can help CPA firms handle tax-season workload more
            efficiently — but it should support professional judgment,
            not replace it.
          </p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Aug 25, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              9 min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10">
        <div className="container-px mx-auto max-w-4xl">
          <img
            src={asset("assets/blog-cpa-ai-tax-season.jpg")}
            alt="Infographic: How CPA Firms Can Use AI During Tax Season"
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-600">
            Tax season is one of the busiest times of the year for CPA
            firms. Client documents arrive at different times. Tax
            questions increase. Staff spend long hours reviewing
            information, preparing returns, responding to emails, and
            chasing missing documents.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            AI can help CPA firms handle this workload more efficiently —
            but it should support professional judgment, not replace it.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            AICPA &amp; CIMA recently highlighted practical AI use cases
            for tax firms including tax research, document analysis,
            client communications, compliance workflows, and advisory
            support.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-brand-heading">
            Here are some practical ways CPA firms can use AI during tax
            season.
          </p>

          {/* Ways */}
          <div className="mt-8 space-y-4">
            {ways.map(({ icon: Icon, title, body, points, close, example }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <h3 className="text-base font-semibold text-brand-heading">
                    {title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {body}
                </p>

                {points.length > 0 && (
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {example && (
                  <div className="mt-3 rounded-xl bg-brand-bg p-4 text-sm">
                    <p className="text-gray-600">
                      <span className="font-semibold text-brand-heading">Client profile:</span>{" "}
                      {example.profile}
                    </p>
                    <p className="mt-1 text-gray-600">
                      <span className="font-semibold text-brand-heading">Expected:</span>{" "}
                      {example.expected}
                    </p>
                    <p className="mt-1 text-gray-600">
                      <span className="font-semibold text-brand-heading">Received:</span>{" "}
                      {example.received}
                    </p>
                    <p className="mt-1 font-medium text-brand-green">
                      AI flag: {example.flag}
                    </p>
                  </div>
                )}

                {title === "5. Create a Smarter Tax Workflow" && (
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-xl bg-brand-bg p-4">
                    {workflowSteps.map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-brand-green/40 bg-white px-3 py-1.5 text-xs font-semibold text-brand-heading">
                          {step}
                        </span>
                        {i < workflowSteps.length - 1 && (
                          <ArrowRight className="h-3.5 w-3.5 text-gray-300" />
                        )}
                      </span>
                    ))}
                  </div>
                )}

                {close && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {close}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Protect client data */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-amber-500" />
            <div>
              <p className="text-sm font-semibold text-brand-heading">
                9. Protect Client Data
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                AI adoption also introduces important risks. CPA firms
                should establish clear policies covering:
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {dataPolicies.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                The IRS and professional organizations are increasingly
                focusing on responsible AI use, data protection, and
                professional judgment.
              </p>
            </div>
          </div>

          {/* Start small */}
          <div className="mt-8 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-brand-green" />
              <h3 className="text-base font-semibold text-brand-heading">
                10. Start Small — Then Scale
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              CPA firms don't need to automate everything immediately. A
              practical approach is:
            </p>
            <ol className="mt-3 space-y-2">
              {scaleSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              This approach is more sustainable than introducing AI simply
              because it is trending.
            </p>
          </div>

          {/* Future */}
          <h2 className="mt-12 text-xl font-bold text-brand-heading sm:text-2xl">
            The Future of Tax Season
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            AI is unlikely to eliminate the need for CPAs. Instead, it is
            changing where CPAs spend their time.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The firms that benefit most will not necessarily be those
            using the most AI tools. They will be the firms that integrate
            AI into well-designed workflows while maintaining strong human
            oversight.
          </p>

          <div className="mt-6 rounded-2xl bg-brand-navy p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-gray-300">
              AI can process. AI can organize. AI can flag. AI can
              summarize. AI can automate.
            </p>
            <p className="mt-2 text-base font-semibold leading-relaxed text-white">
              But CPAs provide the judgment, accountability, and client
              trust.
            </p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Tax season doesn't have to mean longer hours. With the right
            combination of AI + automation + professional expertise, CPA
            firms can build a faster, more scalable, and less stressful
            tax workflow.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-brand-green-light p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <p className="text-sm leading-relaxed text-brand-heading">
              <span className="font-semibold">AICPA &amp; CIMA guidance:</span>{" "}
              choose AI tools that show sources, logic, and assumptions —
              and always keep a human review step before results reach the
              client.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gray-100 bg-brand-bg p-5">
            <AlertTriangle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gray-400" />
            <p className="text-xs leading-relaxed text-gray-500">
              This article provides general information and is not a
              substitute for professional guidance on AI adoption, data
              security or tax compliance for your firm.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">
                Want a less stressful tax season?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced accounting and
                AI-enabled workflows built for CPA firms.
              </p>
            </div>
            <Button className="shrink-0">
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>

      <Newsletter />
    </>
  )
}
