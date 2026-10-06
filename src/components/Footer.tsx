import { Link } from "react-router-dom"
import { asset } from "@/lib/asset"

const links = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faq" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="bento-container pb-12">
      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 px-2 pt-6 text-sm leading-5 text-gray-600">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={asset("assets/panda-icon-only.png")} alt="" className="h-9 w-9 object-contain" />
          <span className="font-display font-bold text-bento-ink">
            Accounting<span className="text-brand-green">Panda</span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-semibold" aria-label="Footer">
          {links.map((l) => (
            <Link key={l.label} to={l.href} className="text-bento-ink hover:text-brand-green">
              {l.label}
            </Link>
          ))}
        </nav>
        <span>© 2026 AccountingPanda · +91 6280 347210</span>
      </div>
    </footer>
  )
}
