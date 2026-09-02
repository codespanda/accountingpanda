import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { asset } from "@/lib/asset"
import { CONSULTATION_MAILTO } from "@/lib/contact"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  {
    label: "Products",
    dropdown: [
      { label: "AI Invoice", href: "https://ai-invoice.accountingpanda.com/", external: true },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
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
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-green transition-colors",
                    productsOpen && "text-brand-green"
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-brand-green-light hover:text-brand-green"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((o) => !o)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-green-light hover:text-brand-green"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileProductsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileProductsOpen && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-gray-100 pl-3">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-brand-green-light hover:text-brand-green"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
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
