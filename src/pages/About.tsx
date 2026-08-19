import { Link } from "react-router-dom"
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Globe2,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "2", label: "Countries Covered" },
  { value: "99.9%", label: "Accuracy Rate" },
]

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Your financial data is handled with the strictest confidentiality and security standards.",
  },
  {
    icon: Award,
    title: "Accuracy",
    desc: "CPA-reviewed processes and multi-level checks so every number you see is one you can trust.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We work as an extension of your team, not just a vendor sending you reports.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    desc: "Deep expertise in both US GAAP and Australian AASB frameworks, under one roof.",
  },
]

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="AccountingPanda is an outsourced accounting and bookkeeping partner for businesses and CPA firms across the USA and Australia. Learn our story, mission and values."
        path="/about"
      />
      {/* Hero */}
      <section className="bg-brand-bg py-14 lg:py-20">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
              ABOUT US
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-heading sm:text-5xl">
              Simplifying Numbers, Empowering Growth
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-500 lg:mx-0">
              AccountingPanda is an outsourced accounting and bookkeeping
              partner for businesses and CPA firms across the USA and
              Australia. We handle the numbers with precision, so you can
              focus on running your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button size="lg" asChild>
                <Link to="/#services">
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <img
            src={asset("assets/panda-hero.png")}
            alt="AccountingPanda mascot working on bookkeeping and financial reports"
            className="mx-auto w-full max-w-md rounded-2xl"
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand-green/30 bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            OUR STORY
          </span>
          <h2 className="mt-4 text-2xl font-bold text-brand-heading sm:text-3xl">
            Built by Accountants, for Growing Businesses
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
            AccountingPanda started with a simple observation: small and
            mid-sized businesses, and even CPA firms during peak season,
            spend too much time on bookkeeping and not enough on growth. We
            built a dedicated outsourced accounting team that plugs directly
            into your workflow — using the tools you already know, like
            QuickBooks, Xero and MYOB — so nothing about your process needs
            to change except the time it takes.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white pb-16 lg:pb-20">
        <div className="container-px mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-brand-bg p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-light">
              <Target className="h-6 w-6 text-brand-green" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand-heading">
              Our Mission
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              To give every business, regardless of size, access to
              accurate, compliant and timely financial insight — without the
              overhead of building an in-house accounting team.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-brand-bg p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-light">
              <Eye className="h-6 w-6 text-brand-green" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand-heading">
              Our Vision
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              To be the most trusted outsourced accounting partner for
              businesses and CPA firms across the USA and Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy py-14 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-brand-green sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-brand-green/30 bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
              WHAT DRIVES US
            </span>
            <h2 className="mt-4 text-2xl font-bold text-brand-heading sm:text-3xl">
              Our Core Values
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-light">
                  <Icon className="h-6 w-6 text-brand-green" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-brand-heading">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green-light py-14">
        <div className="container-px mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-brand-heading sm:text-2xl">
              Ready to work with a team that treats your books like their own?
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Talk to us about your accounting needs — no obligation.
            </p>
          </div>
          <Button size="lg" className="shrink-0">
            Talk to an Expert
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
