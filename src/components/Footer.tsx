import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { asset } from "@/lib/asset"

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.6-1.56h1.7V3.14C15.98 3.1 15 3 13.85 3c-2.4 0-4.05 1.47-4.05 4.16v2.44H7v3.2h2.8V21h3.7Z" />
    </svg>
  )
}
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 21v-6.85c0-3.66-1.95-5.36-4.56-5.36-2.1 0-3.04 1.16-3.56 1.97V8.5H9.5c.05 1 0 12.5 0 12.5h3.38v-6.98c0-.37.03-.75.14-1.02.3-.75.99-1.53 2.14-1.53 1.51 0 2.16 1.15 2.16 2.83V21H21Z" />
    </svg>
  )
}
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const servicesLinks = [
  "Bookkeeping",
  "Financial Reporting",
  "Bank Reconciliation",
  "Accounts Payable",
  "Accounts Receivable",
  "Payroll Processing",
  "All Services",
].map((label) => ({ label, href: "/#services" }))

const countryLinks = ["USA", "Australia"].map((label) => ({ label, href: "#" }))

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "#" },
  { label: "FAQs", href: "/faq" },
]

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Mail, href: "mailto:contact@accountingpanda.com" },
  { icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-brand-navy pt-14 text-gray-400">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
              <img
                src={asset("assets/panda-icon-only.png")}
                alt="AccountingPanda"
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-base font-bold leading-tight text-white">
                Accounting<span className="text-brand-green">Panda</span>
              </p>
              <p className="mt-0.5 flex items-center gap-1 whitespace-nowrap text-[5px] uppercase tracking-wide text-white">
                <span className="h-px w-1 shrink-0 bg-white/60" />
                Simplifying Numbers, Empowering Growth
                <span className="h-px w-1 shrink-0 bg-white/60" />
              </p>
            </div>
          </div>
          <p className="mt-4 text-justify text-sm leading-relaxed">
            We provide top-notch outsourced accounting and bookkeeping
            services for businesses and CPA firms in the USA and Australia.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white hover:bg-brand-green"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" links={servicesLinks} className="lg:ml-4" />
        <FooterCol title="We Serve" links={countryLinks} />
        <FooterCol title="Resources" links={resourceLinks} />

        <div>
          <h4 className="flex h-16 items-center text-base font-semibold text-white">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              contact@accountingpanda.com
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              +91 6280 347210
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              India | Global
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              Mon – Sat: 9:00 AM – 7:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p>© 2025 AccountingPanda. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
  className,
}: {
  title: string
  links: { label: string; href: string }[]
  className?: string
}) {
  return (
    <div className={cn(className)}>
      <h4 className="flex h-16 items-center text-base font-semibold text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            {l.href.startsWith("/") ? (
              <Link to={l.href} className="hover:text-brand-green">
                {l.label}
              </Link>
            ) : (
              <a href={l.href} className="hover:text-brand-green">
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
