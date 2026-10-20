import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationLink } from "@/components/ConsultationDialog"
import { Markdown } from "@/components/Markdown"
import { formatPostDate, type BlogData } from "@/lib/blogContent"

/** Layout for a studio-published post, matching the hand-coded posts. */
export function BlogPostView({ post, imageSrc }: { post: BlogData; imageSrc?: string }) {
  return (
    <>
      <section className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand-green"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <span className="mt-6 block w-fit rounded-full bg-bento-mint px-3.5 py-2 text-[13px] font-bold uppercase text-bento-forest">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-heading sm:text-4xl lg:text-[2.4rem]">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-gray-500">{post.excerpt}</p>

          <div className="mt-5 flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatPostDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {imageSrc && (
        <section className="container-px pt-4">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-[22px]">
              <img
                src={imageSrc}
                alt={post.imageAlt || post.title}
                className="w-full transition-transform duration-300 ease-out hover:scale-105"
              />
            </div>
          </div>
        </section>
      )}

      <article className="container-px pt-4">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <Markdown source={post.body} />

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[22px] bg-brand-green-light p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-brand-heading">Need help with your books?</h3>
              <p className="mt-1 text-sm text-gray-600">
                Talk to our team about outsourced accounting and bookkeeping built for growing businesses.
              </p>
            </div>
            <Button className="shrink-0" asChild>
              <ConsultationLink>
                Chat to an Expert
                <ArrowRight className="h-4 w-4" />
              </ConsultationLink>
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
