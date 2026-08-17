import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { asset } from "@/lib/asset"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Countries", href: "/#countries" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
]

const CONSULTATION_MAILTO = `mailto:contact@accountingpanda.com?subject=${encodeURIComponent(
  "Free Consultation Request"
)}`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="container-px mx-auto flex h-28 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={asset("assets/panda-logo.png")}
            alt="AccountingPanda - Simplifying Numbers, Empowering Growth"
            className="h-20 w-auto sm:h-24"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "text-sm font-medium text-gray-600 hover:text-brand-green transition-colors",
                link.href === pathname && "text-brand-green"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Button size="sm" className="h-10 rounded-full px-5" asChild>
            <a href={CONSULTATION_MAILTO}>Get a Free Consultation</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-brand-heading"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-green-light hover:text-brand-green",
                  link.href === pathname && "text-brand-green"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-3 w-full rounded-full" asChild>
              <a href={CONSULTATION_MAILTO} onClick={() => setOpen(false)}>
                Get a Free Consultation
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
