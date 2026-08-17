import { useState } from "react"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const CONTACT_EMAIL = "contact@accountingpanda.com"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const subject = "Newsletter Subscription Request"
    const body = [
      "Please add the following email to the AccountingPanda newsletter list:",
      "",
      email,
    ].join("\n")

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setEmail("")
  }

  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-gray-100 bg-brand-bg p-8 shadow-sm sm:p-10 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-green-light sm:flex">
              <Mail className="h-7 w-7 text-brand-green" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-heading sm:text-xl">
                Stay Updated with Financial Insights
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Subscribe to our newsletter for accounting tips, compliance
                updates and business growth strategies.
              </p>
            </div>
          </div>

          {sent ? (
            <div className="flex w-full max-w-md items-center gap-2 rounded-full bg-brand-green-light px-5 py-3 text-sm font-medium text-brand-green">
              <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
              Almost done — send the email that just opened to confirm your
              subscription.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="shrink-0">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
