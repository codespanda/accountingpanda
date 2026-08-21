import { useEffect } from "react"

const SITE_NAME = "AccountingPanda"
const SITE_URL = "https://accountingpanda.com"
const DEFAULT_IMAGE = `${SITE_URL}/assets/panda-hero.png`
const JSON_LD_ID = "seo-json-ld"

interface SeoProps {
  title: string
  description: string
  /** Path only, e.g. "/blog/my-post" — combined with SITE_URL for canonical/OG. */
  path: string
  image?: string
  type?: "website" | "article"
  /** ISO date string — set for blog posts to emit Article structured data. */
  datePublished?: string
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

function setJsonLd(data: object | null) {
  let el = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement("script")
    el.id = JSON_LD_ID
    el.type = "application/ld+json"
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Updates document.title and meta tags (description, canonical, Open Graph,
 * Twitter Card, and optionally Article JSON-LD) for the current route.
 * Client-side only — Google's crawler executes JS and picks these up, which
 * covers the primary SEO use case for this static-hosted SPA.
 */
export function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  datePublished,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    // GitHub Pages 301-redirects a directory request without a trailing
    // slash (e.g. /blog) to the canonical form (/blog/) — that's the URL a
    // fresh crawl actually lands on with a 200, so declare it here too
    // rather than pointing canonical at a URL that itself redirects.
    const normalizedPath = path === "/" || path.endsWith("/") ? path : `${path}/`
    const url = `${SITE_URL}${normalizedPath}`
    const img = new URL(image ?? DEFAULT_IMAGE, SITE_URL).toString()

    document.title = fullTitle
    setMeta("name", "description", description)
    setCanonical(url)

    setMeta("property", "og:site_name", SITE_NAME)
    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", url)
    setMeta("property", "og:type", type)
    setMeta("property", "og:image", img)

    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", fullTitle)
    setMeta("name", "twitter:description", description)
    setMeta("name", "twitter:image", img)

    if (type === "article" && datePublished) {
      setJsonLd({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image: img,
        datePublished,
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/assets/panda-logo.png`,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      })
    } else {
      setJsonLd(null)
    }

    return () => setJsonLd(null)
  }, [title, description, path, image, type, datePublished])

  return null
}
