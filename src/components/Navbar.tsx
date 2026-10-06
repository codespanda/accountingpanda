import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { asset } from "@/lib/asset"
import { CONSULTATION_MAILTO } from "@/lib/contact"

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "USA & Australia", href: "/#countries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

const AI_INVOICE_URL = "https://ai-invoice.accountingpanda.com/"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bento-container sticky top-0 z-50 pt-5">
      <div className="relative flex items-center justify-between gap-4 rounded-full bg-white py-2.5 pl-5 pr-2.5">
        <Link to="/" className="flex shrink-0">
          <img
            src={asset("assets/panda-logo.png")}
            alt="AccountingPanda - Simplifying Numbers, Empowering Growth"
            className="block h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 text-[15px] font-semibold lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="rounded-full px-4 py-2.5 text-bento-ink transition-colors hover:bg-bento-canvas"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={AI_INVOICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full px-4 py-2.5 text-bento-ink transition-colors hover:bg-bento-canvas"
          >
            AI Invoice
            <ArrowUpRight className="h-4 w-4 text-bento-forest" aria-hidden="true" />
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONSULTATION_MAILTO}
            className="hidden h-12 items-center whitespace-nowrap rounded-full bg-bento-forest px-[22px] text-[15px] font-bold text-white transition-colors hover:bg-bento-ink sm:flex"
          >
            Free consultation
          </a>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-bento-canvas text-bento-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav
            className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-[28px] bg-white p-3 shadow-[0_16px_40px_-16px_rgba(17,24,39,0.35)] lg:hidden"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-3 text-[15px] font-semibold text-bento-ink hover:bg-bento-canvas"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={AI_INVOICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 rounded-full px-4 py-3 text-[15px] font-semibold text-bento-ink hover:bg-bento-canvas"
            >
              AI Invoice
              <ArrowUpRight className="h-4 w-4 text-bento-forest" aria-hidden="true" />
            </a>
            <a
              href={CONSULTATION_MAILTO}
              onClick={() => setOpen(false)}
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-bento-forest text-[15px] font-bold text-white sm:hidden"
            >
              Free consultation
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
