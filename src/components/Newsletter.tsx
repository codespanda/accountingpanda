import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ConsultationLink } from "@/components/ConsultationDialog"
import { cn } from "@/lib/utils"

const CONTACT_EMAIL = "contact@accountingpanda.com"

export function Newsletter({ contained = true }: { contained?: boolean }) {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = "Newsletter Subscription Request"
    const body = [
      "Please add the following email to the AccountingPanda newsletter list:",
      "",
      email,
    ].join("\n")
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
    setEmail("")
  }

  return (
    <section
      id="contact"
      className={cn("grid scroll-mt-28 grid-cols-12 gap-4", contained ? "bento-container mt-4" : "mt-4")}
    >
        <div className="col-span-12 flex flex-col justify-between gap-7 rounded-[28px] bg-bento-forest p-[clamp(28px,4vw,56px)] text-white lg:col-span-8">
          <h2 className="m-0 max-w-[620px] text-[clamp(32px,3.6vw,52px)] font-bold leading-[1.05] tracking-[-0.035em] text-white">
            Ready to hand off the books?
          </h2>
          <div className="flex flex-wrap gap-3">
            <ConsultationLink
              className="flex h-14 items-center gap-2.5 rounded-full bg-white pl-6 pr-2 text-base font-bold text-bento-forest"
            >
              Get a free consultation
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bento-forest text-white">
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
              </span>
            </ConsultationLink>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex h-14 items-center rounded-full border border-white/45 px-6 text-base font-bold text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-3.5 rounded-[28px] bg-white p-8 sm:col-span-6 lg:col-span-4">
          <h3 className="text-xl font-bold leading-[26px]">Financial insights, monthly</h3>
          <p className="text-[15px] leading-[1.55] text-gray-600">
            Accounting tips, compliance updates and growth strategies.
          </p>
          {sent ? (
            <div className="mt-auto flex items-start gap-2 rounded-2xl bg-bento-mint px-4 py-3 text-sm font-semibold text-bento-forest">
              <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0" />
              Almost done — send the email that just opened to confirm your
              subscription.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-auto flex flex-col gap-2.5">
              <label htmlFor="newsletter-email" className="text-[13px] font-bold text-bento-ink">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[52px] rounded-full border border-[#d3d9e0] bg-white px-[18px] text-[15px] text-bento-ink placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              />
              <button
                type="submit"
                className="h-[52px] cursor-pointer rounded-full bg-bento-ink text-[15px] font-bold text-white transition-colors hover:bg-bento-forest"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
    </section>
  )
}
