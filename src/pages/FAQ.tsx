import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { cn } from "@/lib/utils"
import { CONSULTATION_MAILTO } from "@/lib/contact"

type QA = { q: string; a: string }
type Group = { title: string; items: QA[] }

const groups: Group[] = [
  {
    title: "General",
    items: [
      {
        q: "What services does AccountingPanda offer?",
        a: "We provide outsourced bookkeeping, financial reporting, bank reconciliation, accounts payable & receivable, and payroll processing for businesses and CPA firms in the USA and Australia.",
      },
      {
        q: "Which countries do you serve?",
        a: "We specialize in accounting for the USA (GAAP, sales tax, 1099s) and Australia (AASB, BAS, GST, superannuation), and support businesses operating across both.",
      },
      {
        q: "Do you work with CPA and accounting firms, not just businesses?",
        a: "Yes — a large part of what we do is providing outsourced support to CPA and accounting firms, especially during peak tax season, so they can scale capacity without adding full-time headcount.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        q: "How does onboarding work?",
        a: "It's a simple 5-step process: you contact us, share your data securely, we process your books, you review and give feedback, and then we deliver ongoing support — usually live within a week.",
      },
      {
        q: "Which accounting software do you support?",
        a: "We work directly inside QuickBooks and Xero for US clients, and Xero and MYOB for Australian clients — no need to switch platforms.",
      },
      {
        q: "Can you take over from our current bookkeeper or firm?",
        a: "Yes. We regularly onboard clients mid-year, review historical books for accuracy, and take over ongoing bookkeeping without disrupting your operations.",
      },
    ],
  },
  {
    title: "Pricing & Security",
    items: [
      {
        q: "How is pricing structured?",
        a: "Pricing depends on transaction volume, entity complexity and the services you need. Reach out for a free consultation and we'll put together a plan that fits your business.",
      },
      {
        q: "Is my financial data secure?",
        a: "Yes — we use bank-level encryption, restricted data access, and CPA-approved processes. Your data is never shared with third parties.",
      },
      {
        q: "Do you sign a confidentiality agreement (NDA)?",
        a: "Absolutely. We're happy to sign an NDA before any data is shared, as part of standard onboarding for every client.",
      },
    ],
  },
]

function AccordionItem({ item, open, onToggle }: { item: QA; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-[22px] bg-brand-bg">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="text-sm font-semibold text-brand-heading sm:text-base">
          {item.q}
        </span>
        <ChevronDown
          className={cn(
            "h-4.5 w-4.5 shrink-0 text-brand-green transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-relaxed text-gray-500 sm:px-6">
          {item.a}
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  const [openKey, setOpenKey] = useState<string>("General-0")

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about AccountingPanda's outsourced bookkeeping, tax compliance, onboarding, pricing and security."
        path="/faq"
      />
      {/* Hero */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl text-center rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 py-14 lg:py-20 [&>*]:mx-auto [&>*]:max-w-3xl">
          <span className="inline-block rounded-full bg-bento-mint px-3.5 py-2 text-[13px] font-bold text-bento-forest">
            FAQS
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-heading sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-500">
            Everything you need to know about working with AccountingPanda.
            Can't find your answer? Reach out — we're happy to help.
          </p>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="container-px pt-4">
        <div className="mx-auto max-w-7xl space-y-12 rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 py-16 lg:py-20 [&>*]:mx-auto [&>*]:max-w-3xl">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-lg font-bold text-brand-heading sm:text-xl">
                {group.title}
              </h2>
              <div className="mt-4 space-y-3">
                {group.items.map((item, i) => {
                  const key = `${group.title}-${i}`
                  return (
                    <AccordionItem
                      key={key}
                      item={item}
                      open={openKey === key}
                      onToggle={() =>
                        setOpenKey((prev) => (prev === key ? "" : key))
                      }
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px pt-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left rounded-[28px] bg-bento-mint px-6 sm:px-10 lg:px-14 py-14">
          <div>
            <h3 className="text-xl font-bold text-brand-heading sm:text-2xl">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Talk to our team and we'll walk you through exactly how it works.
            </p>
          </div>
          <Button size="lg" className="shrink-0" asChild>
            <a href={CONSULTATION_MAILTO}>
              Chat to an Expert
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
