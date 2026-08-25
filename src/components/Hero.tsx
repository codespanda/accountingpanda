import { Link } from "react-router-dom"
import { ArrowRight, MessageCircle, ShieldCheck, BadgeCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/asset"
import { CONSULTATION_MAILTO } from "@/lib/contact"

const trust = [
  { icon: ShieldCheck, label: "100% Data Security" },
  { icon: BadgeCheck, label: "CPA Approved Processes" },
  { icon: Clock, label: "On-Time Delivery" },
]

export function Hero() {
  return (
    <section className="bg-brand-bg">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-8 lg:py-20">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            OUTSOURCED ACCOUNTING EXPERTS
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-heading sm:text-5xl lg:text-[3.2rem] lg:leading-[1.1]">
            Your Trusted Outsourcing Partner For{" "}
            <span className="text-brand-heading">USA</span> &{" "}
            <span className="text-brand-green">Australia</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-500 lg:mx-0">
            We deliver accurate, compliant and scalable outsourced accounting
            &amp; bookkeeping services for businesses and CPA firms across the
            USA and Australia.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                <Icon className="h-4 w-4 text-brand-green" />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button size="lg" asChild>
              <Link to="/#services">
                Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={CONSULTATION_MAILTO}>
                Talk to an Expert
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div>
          <img
            src={asset("assets/panda-hero.png")}
            alt="AccountingPanda mascot working on bookkeeping and financial reports"
            className="mx-auto w-full max-w-[560px]"
          />
        </div>
      </div>
    </section>
  )
}
