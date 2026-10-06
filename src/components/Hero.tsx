import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, CircleCheck, Clock } from "lucide-react"
import { asset } from "@/lib/asset"
import { ConsultationLink } from "@/components/ConsultationDialog"

const trust = [
  { icon: ShieldCheck, label: "100% data security", tint: "bg-bento-sky", ink: "text-bento-sky-ink" },
  { icon: CircleCheck, label: "CPA-approved processes", tint: "bg-bento-butter", ink: "text-bento-butter-ink" },
  { icon: Clock, label: "On-time delivery", tint: "bg-bento-mint", ink: "text-bento-forest" },
]

export function Hero() {
  return (
    <section id="top" className="grid grid-cols-12 gap-4">
      <div className="col-span-12 flex min-h-[520px] flex-col justify-between gap-10 rounded-[28px] bg-white p-[clamp(28px,4vw,56px)] lg:col-span-7 lg:row-span-2">
        <div className="flex flex-col gap-6">
          <span className="self-start rounded-full bg-bento-mint px-3.5 py-2 text-[13px] font-bold leading-4 text-bento-forest">
            Outsourced accounting experts
          </span>
          <h1 className="m-0 text-[clamp(40px,5vw,72px)] font-bold leading-[1.02] tracking-[-0.04em] text-balance">
            Your trusted outsourcing partner for USA &amp; Australia
          </h1>
          <p className="max-w-[520px] text-lg leading-[1.6] text-gray-600">
            Accurate, compliant and scalable accounting and bookkeeping for
            businesses and CPA firms.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/#services"
            className="flex h-14 items-center gap-2.5 rounded-full bg-bento-ink pl-6 pr-2 text-base font-bold text-white"
          >
            Explore services
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bento-mint-strong text-bento-forest">
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
            </span>
          </Link>
          <ConsultationLink
            className="flex h-14 items-center rounded-full bg-bento-canvas px-6 text-base font-bold text-bento-ink"
          >
            Chat to an expert
          </ConsultationLink>
        </div>
      </div>

      <div className="col-span-12 flex min-h-[520px] flex-col justify-between gap-4 overflow-hidden rounded-[28px] bg-bento-mint px-6 pt-8 lg:col-span-5 lg:row-span-2">
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-[15px] font-semibold text-bento-forest">Meet the panda</span>
          <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2">
            <img src={asset("assets/Intuit_QuickBooks_logo.svg.webp")} alt="Intuit QuickBooks" className="h-3.5 w-auto" />
            <img src={asset("assets/xero_logo_icon.webp")} alt="Xero" className="h-4 w-auto" />
          </span>
        </div>
        <img
          src={asset("assets/panda-hero.png")}
          alt="AccountingPanda mascot working on bookkeeping and financial reports"
          className="-mx-[4%] block h-auto w-[108%] max-w-none"
        />
      </div>

      {trust.map(({ icon: Icon, label, tint, ink }) => (
        <div
          key={label}
          className="col-span-12 flex items-center gap-4 rounded-[28px] bg-white p-6 sm:col-span-6 lg:col-span-4"
        >
          <span className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl ${tint}`}>
            <Icon className={`h-6 w-6 ${ink}`} strokeWidth={2} />
          </span>
          <span className="font-display text-lg font-semibold leading-6 text-bento-ink">{label}</span>
        </div>
      ))}
    </section>
  )
}
