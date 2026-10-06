import { Link } from "react-router-dom"
import { FileSpreadsheet, BarChart3, Landmark, CreditCard, UserCircle, Users } from "lucide-react"

const tiles = [
  {
    icon: BarChart3,
    title: "Financial reporting",
    desc: "Customized reports for better business decisions.",
    tile: "bg-bento-sky",
    iconInk: "text-bento-sky-ink",
    text: "text-[#1f2a44]",
  },
  {
    icon: Landmark,
    title: "Bank reconciliation",
    desc: "Timely bank and credit card reconciliations.",
    tile: "bg-white",
    iconInk: "text-bento-forest",
    text: "text-gray-600",
  },
  {
    icon: CreditCard,
    title: "Accounts payable",
    desc: "Manage bills, vendors and payments efficiently.",
    tile: "bg-white",
    iconInk: "text-bento-forest",
    text: "text-gray-600",
  },
  {
    icon: UserCircle,
    title: "Accounts receivable",
    desc: "Invoicing, collections and cash flow.",
    tile: "bg-bento-butter",
    iconInk: "text-bento-butter-ink",
    text: "text-bento-butter-text",
  },
]

export function Services() {
  return (
    <section id="services" className="mt-12 grid scroll-mt-28 grid-cols-12 gap-4">
      <div className="col-span-12 flex flex-wrap items-end justify-between gap-4 px-2 pb-2">
        <h2 className="m-0 text-[clamp(32px,3.4vw,52px)] font-bold leading-[1.05] tracking-[-0.035em]">
          Everything your books need
        </h2>
        <p className="max-w-[420px] text-base leading-[1.6] text-gray-600">
          From day-to-day bookkeeping to financial statements, outsource it all
          and focus on growth.
        </p>
      </div>

      <div className="col-span-12 flex min-h-[360px] flex-col justify-between gap-8 rounded-[28px] bg-bento-forest p-9 text-white lg:col-span-6 lg:row-span-2">
        <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-bento-mint-strong">
          <FileSpreadsheet className="h-7 w-7 text-bento-forest" />
        </span>
        <div className="flex flex-col gap-3">
          <h3 className="m-0 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white">Bookkeeping</h3>
          <p className="max-w-[420px] text-[17px] leading-[1.6] text-bento-mint">
            Accurate daily bookkeeping using QuickBooks, Xero and other leading
            software.
          </p>
        </div>
      </div>

      {tiles.map(({ icon: Icon, title, desc, tile, iconInk, text }) => (
        <div
          key={title}
          className={`col-span-12 flex flex-col gap-2.5 rounded-[28px] p-7 sm:col-span-6 lg:col-span-3 ${tile}`}
        >
          <Icon className={`h-7 w-7 ${iconInk}`} />
          <h3 className="mt-3 text-xl font-bold leading-[26px]">{title}</h3>
          <p className={`text-[15px] leading-[1.55] ${text}`}>{desc}</p>
        </div>
      ))}

      <div className="col-span-12 flex flex-wrap items-center gap-5 rounded-[28px] bg-white px-8 py-7">
        <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-bento-mint">
          <Users className="h-6 w-6 text-bento-forest" />
        </span>
        <div className="flex flex-[1_1_300px] flex-col gap-1">
          <h3 className="m-0 text-xl font-bold leading-[26px]">Payroll processing</h3>
          <p className="text-[15px] leading-[1.55] text-gray-600">
            Payroll calculations, payroll tax filings and compliance support.
          </p>
        </div>
        <Link
          to="/#services"
          className="flex h-12 items-center rounded-full bg-bento-canvas px-5 text-[15px] font-bold text-bento-ink"
        >
          All services
        </Link>
      </div>
    </section>
  )
}
