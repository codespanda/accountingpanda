import type { ReactNode } from "react"
import { Info } from "lucide-react"
import { asset } from "@/lib/asset"
import { parseMarkdown, tokenizeInline, type InlineToken } from "@/lib/markdown"

// Renders a blog post body. It builds React elements directly (no raw
// HTML), so post content can't inject scripts. See lib/markdown.ts for the
// supported syntax.

function renderInline(tokens: InlineToken[], keyPrefix: string): ReactNode[] {
  return tokens.map((t, i) => {
    const key = `${keyPrefix}-${i}`
    switch (t.type) {
      case "text":
        return t.text
      case "code":
        return (
          <code key={key} className="rounded bg-brand-bg px-1.5 py-0.5 text-[0.9em] text-brand-heading">
            {t.text}
          </code>
        )
      case "bold":
        return (
          <strong key={key} className="font-semibold text-brand-heading">
            {renderInline(t.children, key)}
          </strong>
        )
      case "italic":
        return <em key={key}>{renderInline(t.children, key)}</em>
      case "link": {
        if (!t.href) return <span key={key}>{renderInline(t.children, key)}</span>
        const external = /^https?:\/\//i.test(t.href)
        return (
          <a
            key={key}
            href={t.href}
            className="font-medium text-brand-green underline-offset-2 hover:underline"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {renderInline(t.children, key)}
          </a>
        )
      }
    }
  })
}

const inline = (text: string, key: string) => renderInline(tokenizeInline(text), key)

export function Markdown({ source }: { source: string }) {
  return (
    <div className="space-y-4">
      {parseMarkdown(source).map((block, i) => {
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
          case "img":
            return (
              <figure key={key} className="py-2">
                <img
                  src={block.src.startsWith("assets/") ? asset(block.src) : block.src}
                  alt={block.alt}
                  loading="lazy"
                  className="w-full rounded-[22px]"
                />
                {block.alt && <figcaption className="mt-2 text-center text-xs text-gray-500">{block.alt}</figcaption>}
              </figure>
            )
          case "table":
            return (
              <div key={key} className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[28rem] text-left text-sm">
                  <thead className="bg-brand-bg">
                    <tr>
                      {block.header.map((h, j) => (
                        <th key={j} className="px-4 py-3 font-semibold text-brand-heading">
                          {inline(h, `${key}-h${j}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-gray-100 align-top">
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 leading-relaxed text-gray-600">
                            {inline(cell, `${key}-${r}-${j}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
        }
      })}
    </div>
  )
}
