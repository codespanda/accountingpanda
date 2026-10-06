import { Check } from "lucide-react"

const items = [
  { title: "Data security.", desc: "100% secure with us." },
  { title: "Expert team.", desc: "Experienced bookkeepers." },
  { title: "On time.", desc: "Deadlines matter to us." },
  { title: "Scalable.", desc: "Grows with your business." },
  { title: "24/7 support.", desc: "Here when you need us." },
]

export function WhyChooseUs() {
  return (
    <div className="col-span-12 flex flex-col gap-4 rounded-[28px] bg-bento-butter p-8 sm:col-span-6 lg:col-span-4">
      <h2 className="m-0 text-2xl font-bold leading-[1.2] tracking-[-0.02em]">Why AccountingPanda</h2>
      <ul className="flex flex-col gap-3 text-[15px] leading-[22px] text-bento-butter-text">
        {items.map(({ title, desc }) => (
          <li key={title} className="flex gap-2.5">
            <Check className="h-5 w-5 shrink-0 text-bento-butter-ink" strokeWidth={2.5} />
            <span>
              <strong className="text-bento-ink">{title}</strong> {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
