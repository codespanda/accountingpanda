import type { ReactNode } from "react"
import { Info } from "lucide-react"

// A small Markdown renderer for blog posts. It builds React elements
// directly (no raw HTML), so post content can't inject scripts. Supported:
// ## / ### headings, paragraphs, - or * bullet lists, 1. numbered lists,
// > callouts, --- dividers, **bold**, *italic*, `code` and [links](url).

const INLINE = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|_[^_\s][^_]*_|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g

function safeHref(href: string) {
  return /^(https?:\/\/|mailto:|\/|#)/i.test(href) ? href : undefined
}

function inline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    const key = `${keyPrefix}-${i}`
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={key} className="font-semibold text-brand-heading">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (
      part.length > 2 &&
      ((part.startsWith("*") && part.endsWith("*")) || (part.startsWith("_") && part.endsWith("_")))
    ) {
      return <em key={key}>{part.slice(1, -1)}</em>
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code key={key} className="rounded bg-brand-bg px-1.5 py-0.5 text-[0.9em] text-brand-heading">
          {part.slice(1, -1)}
        </code>
      )
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
    if (link) {
      const href = safeHref(link[2])
      if (!href) return link[1]
      const external = /^https?:\/\//i.test(href)
      return (
        <a
          key={key}
          href={href}
          className="font-medium text-brand-green underline-offset-2 hover:underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link[1]}
        </a>
      )
    }
    return part
  })
}

type Block =
  | { kind: "h2" | "h3" | "p" | "quote"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "hr" }

function parse(markdown: string): Block[] {
  const blocks: Block[] = []
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n")
  let para: string[] = []
  let quote: string[] = []
  let list: { kind: "ul" | "ol"; items: string[] } | null = null

  const flush = () => {
    if (para.length) blocks.push({ kind: "p", text: para.join(" ") })
    if (quote.length) blocks.push({ kind: "quote", text: quote.join(" ") })
    if (list) blocks.push(list)
    para = []
    quote = []
    list = null
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      flush()
      continue
    }
    let m: RegExpMatchArray | null
    if ((m = line.match(/^#{1,2}\s+(.+)$/))) {
      flush()
      blocks.push({ kind: "h2", text: m[1] })
    } else if ((m = line.match(/^#{3,6}\s+(.+)$/))) {
      flush()
      blocks.push({ kind: "h3", text: m[1] })
    } else if (/^(-{3,}|\*{3,})$/.test(line)) {
      flush()
      blocks.push({ kind: "hr" })
    } else if ((m = line.match(/^[-*+]\s+(.+)$/))) {
      if (!list || list.kind !== "ul") {
        flush()
        list = { kind: "ul", items: [] }
      }
      list.items.push(m[1])
    } else if ((m = line.match(/^\d+[.)]\s+(.+)$/))) {
      if (!list || list.kind !== "ol") {
        flush()
        list = { kind: "ol", items: [] }
      }
      list.items.push(m[1])
    } else if ((m = line.match(/^>\s?(.*)$/))) {
      if (para.length || list) flush()
      quote.push(m[1])
    } else {
      if (quote.length || list) flush()
      para.push(line)
    }
  }
  flush()
  return blocks
}

export function Markdown({ source }: { source: string }) {
  return (
    <div className="space-y-4">
      {parse(source).map((block, i) => {
        const key = `b${i}`
        switch (block.kind) {
          case "h2":
            return (
              <h2 key={key} className="pt-6 text-2xl font-bold leading-snug text-brand-heading">
                {inline(block.text, key)}
              </h2>
            )
          case "h3":
            return (
              <h3 key={key} className="pt-3 text-lg font-bold text-brand-heading">
                {inline(block.text, key)}
              </h3>
            )
          case "p":
            return (
              <p key={key} className="text-base leading-relaxed text-gray-600">
                {inline(block.text, key)}
              </p>
            )
          case "quote":
            return (
              <div key={key} className="flex items-start gap-3 rounded-[22px] bg-bento-mint p-5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-bento-forest" />
                <p className="text-base leading-relaxed text-bento-forest">{inline(block.text, key)}</p>
              </div>
            )
          case "ul":
            return (
              <ul key={key} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-gray-600">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    <span>{inline(item, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={key} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-gray-600">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bento-mint text-xs font-bold text-bento-forest">
                      {j + 1}
                    </span>
                    <span>{inline(item, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ol>
            )
          case "hr":
            return <hr key={key} className="border-gray-100" />
        }
      })}
    </div>
  )
}
