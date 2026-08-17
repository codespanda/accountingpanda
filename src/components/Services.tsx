import {
  FileSpreadsheet,
  BarChart3,
  Landmark,
  CreditCard,
  UserCircle,
  Users,
} from "lucide-react"

const services = [
  {
    icon: FileSpreadsheet,
    title: "Bookkeeping",
    desc: "Accurate daily bookkeeping using QuickBooks, Xero & other leading software.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    desc: "Customized financial reports to help you make better business decisions.",
  },
  {
    icon: Landmark,
    title: "Bank Reconciliation",
    desc: "Ensure accuracy with timely bank & credit card reconciliations.",
  },
  {
    icon: CreditCard,
    title: "Accounts Payable",
    desc: "Manage bills, vendors and payments efficiently.",
  },
  {
    icon: UserCircle,
    title: "Accounts Receivable",
    desc: "Invoice management, collections & cash flow optimization.",
  },
  {
    icon: Users,
    title: "Payroll Processing",
    desc: "Payroll calculations, payroll tax filings & compliance support.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-16 lg:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-green/30 bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            WHAT WE DO
          </span>
          <h2 className="mt-4 text-2xl font-bold text-brand-heading sm:text-3xl">
            Outsourced Accounting &amp; Bookkeeping Services for Businesses &amp; CPA Firms
          </h2>
          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            From day-to-day bookkeeping to financial statements, outsource it
            all to us so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map(({ icon: Icon, title, desc }) => (
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
  )
}
