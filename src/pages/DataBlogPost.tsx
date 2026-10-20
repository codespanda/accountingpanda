import { Navigate, useParams } from "react-router-dom"
import { BlogPostView } from "@/components/BlogPostView"
import { Newsletter } from "@/components/Newsletter"
import { Seo } from "@/components/Seo"
import { asset } from "@/lib/asset"
import { findBlogPost } from "@/lib/blogContent"

/** A blog post published from the blog studio (src/content/blog). */
export function DataBlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = findBlogPost(slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image ? asset(post.image) : undefined}
        type="article"
        datePublished={post.date}
      />
      <BlogPostView post={post} imageSrc={post.image ? asset(post.image) : undefined} />
      <Newsletter />
    </>
  )
}
