import { MessageSquare, CloudUpload, Settings, LineChart, CheckCircle } from "lucide-react"

const steps = [
  { icon: MessageSquare, title: "1. Contact Us", desc: "Share your requirements with us." },
  { icon: CloudUpload, title: "2. Share Your Data", desc: "Upload your documents securely." },
  { icon: Settings, title: "3. We Process", desc: "Our experts handle your accounting." },
  { icon: LineChart, title: "4. Review & Feedback", desc: "Review reports & share your feedback." },
  { icon: CheckCircle, title: "5. Deliver & Support", desc: "We deliver on time & provide ongoing support." },
]

export function Process() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-px mx-auto max-w-7xl text-center">
        <span className="inline-block rounded-full border border-brand-green/30 bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
          OUR PROCESS
        </span>
        <h2 className="mt-4 text-2xl font-bold text-brand-heading sm:text-3xl">
          Simple Process. Seamless Experience.
        </h2>

        <div className="relative mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-brand-green/40 lg:block" />
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative flex flex-col items-center gap-3 px-2">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-green bg-white">
                <Icon className="h-7 w-7 text-brand-green" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-brand-heading">{title}</h3>
              <p className="max-w-[180px] text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
