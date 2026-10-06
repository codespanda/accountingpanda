const steps = [
  { title: "Contact us", desc: "Share your requirements." },
  { title: "Share your data", desc: "Upload documents securely." },
  { title: "We process", desc: "Experts handle your accounting." },
  { title: "Review", desc: "Check reports, share feedback." },
  { title: "Deliver", desc: "On time, with ongoing support." },
]

export function Process() {
  return (
    <div className="col-span-12 flex flex-col gap-8 rounded-[28px] bg-bento-ink p-[clamp(28px,3.5vw,48px)] text-white lg:col-span-8">
      <h2 className="m-0 text-[clamp(28px,2.8vw,40px)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
        How it works
      </h2>
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
        {steps.map(({ title, desc }, i) => (
          <li key={title} className="flex flex-col gap-2 rounded-[20px] bg-brand-navy-light p-5">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-[15px] font-bold ${
                i === 0 ? "bg-bento-mint-strong text-bento-forest" : "bg-white text-bento-ink"
              }`}
            >
              {i + 1}
            </span>
            <span className="mt-2 font-display text-base font-semibold leading-[22px] text-white">{title}</span>
            <span className="text-sm leading-[1.5] text-[#c3cad5]">{desc}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
