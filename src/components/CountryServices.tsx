import { asset } from "@/lib/asset"

const countries = [
  {
    label: "USA",
    title: "US accounting services",
    image: "assets/usa.jpg",
    alt: "USA city skyline",
    items: [
      "Bookkeeping and write-up",
      "Financial statements (GAAP)",
      "AP and AR",
      "Payroll and tax filings",
      "Sales tax and 1099",
      "CPA firm support",
    ],
  },
  {
    label: "Australia",
    title: "Australian accounting services",
    image: "assets/australia.jpg",
    alt: "Sydney skyline",
    items: [
      "Bookkeeping and BAS",
      "Financial statements (AASB)",
      "Payroll and super",
      "IAS and GST",
      "Xero advisory",
      "CPA firm support",
    ],
  },
]

export function CountryServices() {
  return (
    <section id="countries" className="mt-12 grid scroll-mt-28 grid-cols-12 gap-4">
      {countries.map((c) => (
        <div key={c.label} className="col-span-12 flex flex-col overflow-hidden rounded-[28px] bg-white lg:col-span-6">
          <div className="relative">
            <img src={asset(c.image)} alt={c.alt} className="block h-[220px] w-full object-cover" />
            <span className="absolute left-5 top-5 rounded-full bg-white px-3.5 py-2 font-display text-sm font-bold text-bento-ink">
              {c.label}
            </span>
          </div>
          <div className="flex flex-col gap-[18px] px-8 pb-8 pt-7">
            <h3 className="m-0 text-[26px] font-bold leading-[1.15] tracking-[-0.02em]">{c.title}</h3>
            <ul className="flex flex-wrap gap-2 text-sm font-semibold leading-5 text-bento-ink">
              {c.items.map((item) => (
                <li key={item} className="rounded-full bg-bento-canvas px-3.5 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
