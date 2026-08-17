import { ShieldCheck, Users, Clock, TrendingUp, Headphones } from "lucide-react"

const items = [
  { icon: ShieldCheck, title: "Data Security", desc: "Your data is 100% secure with us." },
  { icon: Users, title: "Expert Team", desc: "Experienced accountants & bookkeepers." },
  { icon: Clock, title: "On-Time Delivery", desc: "We value deadlines as much as you do." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Flexible services that grow with your business." },
  { icon: Headphones, title: "24/7 Support", desc: "Always here when you need us." },
]

export function WhyChooseUs() {
  return (
    <section className="bg-brand-navy py-14 lg:py-16">
      <div className="container-px mx-auto max-w-7xl text-center">
        <h2 className="text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
          Why Choose <span className="text-brand-green">AccountingPanda</span>?
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3 px-4">
              <Icon className="h-8 w-8 text-brand-green" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="max-w-[180px] text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
