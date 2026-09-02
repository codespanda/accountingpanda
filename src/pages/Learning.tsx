import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { CONSULTATION_MAILTO } from "@/lib/contact"

export function Learning() {
  return (
    <>
      <Seo
        title="Learning"
        description="AccountingPanda Learning — coming soon."
        path="/learning"
        noIndex
      />

      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="container-px mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
            <Sparkles className="h-3.5 w-3.5" />
            COMING SOON
          </span>
          <h1 className="mx-auto mt-5 max-w-xl text-4xl font-bold leading-tight text-brand-heading sm:text-5xl">
            Learning
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-500">
            We're building a learning hub with guides, courses and
            resources for small business accounting. In the meantime,
            check out our{" "}
            <Link to="/blog" className="font-medium text-brand-green hover:underline">
              blog
            </Link>{" "}
            or talk to our team.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild>
              <a href={CONSULTATION_MAILTO}>
                Chat to an Expert
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
