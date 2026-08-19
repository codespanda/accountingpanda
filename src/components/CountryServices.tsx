import { Check } from "lucide-react"
import { asset } from "@/lib/asset"

const usaItems = [
  "Bookkeeping & Write-up Services",
  "Financial Statements (GAAP)",
  "Accounts Payable & Receivable",
  "Payroll Processing & Tax Filings",
  "Sales Tax & 1099 Reporting",
  "Work with CPA & Accounting Firms",
]

const ausItems = [
  "Bookkeeping & BAS Preparation",
  "Financial Statements (AASB)",
  "Payroll & Superannuation",
  "IAS & GST Compliance",
  "Xero Advisory & Reporting",
  "Work with CPA & Accounting Firms",
]

function CountryCard({
  flag,
  title,
  items,
  brands,
  image,
  accent,
}: {
  flag: string
  title: string
  items: string[]
  brands: { src: string; alt: string; className?: string }[]
  image: string
  accent: string
}) {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-100 bg-brand-bg shadow-sm sm:grid-cols-2">
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-1 ring-black/5">
            {flag}
          </span>
          <h3 className="whitespace-nowrap text-base font-bold text-brand-heading sm:text-lg lg:text-xl">
            {title} <span style={{ color: accent }}>Accounting Services</span>
          </h3>
        </div>

        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
              <span
                className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: accent }}
              >
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-4 pt-8">
          {brands.map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              className={b.className ?? "h-5 w-auto"}
            />
          ))}
        </div>
      </div>

      <div className="relative flex h-64 items-end justify-end sm:h-auto">
        <img
          src={image}
          alt={`${title} skyline`}
          className="h-64 w-64 object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          style={{
            maskImage:
              "radial-gradient(120% 120% at 100% 100%, black 45%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(120% 120% at 100% 100%, black 45%, transparent 90%)",
          }}
        />
      </div>
    </div>
  )
}

export function CountryServices() {
  return (
    <section id="countries" className="scroll-mt-28 bg-white pb-16 lg:pb-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-green/30 bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            SPECIALIZED IN
          </span>
          <h2 className="mt-4 text-2xl font-bold text-brand-heading sm:text-3xl">
            USA &amp; Australia Accounting Services
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CountryCard
            flag="🇺🇸"
            title="USA"
            items={usaItems}
            brands={[
              {
                src: asset("assets/Intuit_QuickBooks_logo.svg.webp"),
                alt: "Intuit QuickBooks",
                className: "h-5 w-auto",
              },
              { src: asset("assets/xero_logo_icon.webp"), alt: "Xero", className: "h-4 w-auto" },
            ]}
            image={asset("assets/usa.jpg")}
            accent="#1d4ed8"
          />
          <CountryCard
            flag="🇦🇺"
            title="Australia"
            items={ausItems}
            brands={[
              { src: asset("assets/xero_logo_icon.webp"), alt: "Xero", className: "h-4 w-auto" },
            ]}
            image={asset("assets/australia.jpg")}
            accent="#2e8b3d"
          />
        </div>
      </div>
    </section>
  )
}
