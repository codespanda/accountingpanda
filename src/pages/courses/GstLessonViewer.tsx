import { useState } from "react"
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Eye,
  EyeOff,
  Factory,
  Info,
  Lightbulb,
  MapPin,
  ShieldAlert,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { GstLessonBlock, GstLessonScreen } from "@/pages/courses/gstIndiaLessons"
import { GstKnowledgeCheck } from "@/pages/courses/GstKnowledgeCheck"

function Block({ block, onPass }: { block: GstLessonBlock; onPass?: () => void }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">{block.text}</p>
    case "heading":
      return <h3 className="pt-2 text-lg font-bold text-brand-heading">{block.text}</h3>
    case "example":
      return (
        <div className="max-w-sm rounded-xl border border-gray-200 bg-white">
          {block.rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-gray-100 px-4 py-3 text-sm"
            >
              <span className="text-gray-600">{row.label}</span>
              <span className="font-semibold tabular-nums text-brand-heading">{row.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-4 rounded-b-xl bg-bento-mint px-4 py-3 text-sm">
            <span className="font-semibold text-bento-forest">{block.total.label}</span>
            <span className="font-bold tabular-nums text-bento-forest">{block.total.value}</span>
          </div>
        </div>
      )
    case "table": {
      const align = (i: number) => (block.numeric?.includes(i) ? "text-right tabular-nums" : "text-left")
      return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className={cn("w-full text-sm", block.headers.length > 2 ? "min-w-[32rem]" : "table-fixed")}>
            <thead className="bg-brand-bg">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={h} className={cn("px-4 py-3 font-semibold text-brand-heading", align(i))}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-t border-gray-100 align-top">
                  {row.map((cell, i) => (
                    <td key={i} className={cn("px-4 py-3 leading-relaxed text-gray-600", align(i))}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            {block.footer && (
              <tfoot>
                <tr className="border-t border-gray-200 bg-bento-mint">
                  {block.footer.map((cell, i) => (
                    <td key={i} className={cn("px-4 py-3 font-bold text-bento-forest", align(i))}>
                      {cell}
                    </td>
                  ))}
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      )
    }
    case "list":
      return (
        <ul className="space-y-2">
          {block.items.map((item) => (
            <li key={item.term} className="flex gap-3 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
              <span>
                <span className="font-semibold text-brand-heading">{item.term}:</span> {item.text}
              </span>
            </li>
          ))}
        </ul>
      )
    case "bullets":
      return (
        <ul className="space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
              {item}
            </li>
          ))}
        </ul>
      )
    case "flow":
      return (
        <figure>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {[block.from, block.to].map((point, i) => (
              <div key={point.title} className="contents">
                {i === 1 && (
                  <ArrowRight className="mx-auto h-6 w-6 shrink-0 rotate-90 text-brand-green sm:rotate-0" />
                )}
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bento-mint">
                    {i === 0 ? (
                      <Factory className="h-5 w-5 text-bento-forest" />
                    ) : (
                      <User className="h-5 w-5 text-bento-forest" />
                    )}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-brand-heading">{point.title}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {point.place}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <figcaption className="mt-3 text-center text-xs text-gray-500">{block.caption}</figcaption>
        </figure>
      )
    case "gstin":
      return (
        <figure>
          <div className="flex flex-wrap justify-center gap-2 rounded-xl border border-gray-200 bg-white p-4 sm:gap-3 sm:p-6">
            {block.segments.map((seg, i) => (
              <div key={seg.label} className="flex flex-col items-center">
                <span
                  className={cn(
                    "rounded-lg px-2.5 py-2 font-mono text-lg font-bold tracking-wider sm:text-2xl",
                    i % 2 === 0 ? "bg-bento-forest text-white" : "bg-bento-mint text-bento-forest"
                  )}
                >
                  {seg.chars}
                </span>
                <span className="mt-1.5 text-center text-xs font-medium text-gray-600">{seg.label}</span>
              </div>
            ))}
          </div>
          <figcaption className="mt-3 text-center text-xs text-gray-500">{block.caption}</figcaption>
        </figure>
      )
    case "compare":
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.title} className="flex flex-col rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-brand-heading">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Examples</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.examples.map((ex) => (
                  <span key={ex} className="rounded-full bg-bento-mint px-3 py-1 text-sm font-medium text-bento-forest">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    case "steps":
      return (
        <ol className="space-y-3">
          {block.items.map((item, i) => (
            <li key={item.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bento-forest text-sm font-bold text-white">
                {i + 1}
              </span>
              <span>
                <span className="block text-base font-bold text-brand-heading">{item.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-gray-600">{item.text}</span>
              </span>
            </li>
          ))}
        </ol>
      )
    case "scenarios":
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.title} className="flex flex-col rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-base font-bold text-brand-heading">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
                <span className="rounded-full bg-bento-mint px-2.5 py-1 text-xs font-semibold text-bento-forest">
                  {item.badge}
                </span>
                <span className="text-sm text-gray-700">
                  <span className="font-semibold text-brand-heading">Tax:</span> {item.tax}
                </span>
              </div>
            </div>
          ))}
        </div>
      )
    case "calcs":
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.title} className="flex flex-col rounded-xl border border-gray-200 bg-white">
              <p className="border-b border-gray-100 px-4 py-3 text-sm font-bold text-brand-heading">
                {item.title}
              </p>
              <div className="flex-1">
                {item.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 border-b border-gray-100 px-4 py-2.5 text-sm"
                  >
                    <span className="text-gray-600">{row.label}</span>
                    <span className="font-semibold tabular-nums text-brand-heading">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 rounded-b-xl bg-bento-mint px-4 py-3 text-sm">
                <span className="font-semibold text-bento-forest">{item.total.label}</span>
                <span className="font-bold tabular-nums text-bento-forest">{item.total.value}</span>
              </div>
            </div>
          ))}
        </div>
      )
    case "branches":
      return (
        <figure>
          <div className="mx-auto max-w-md rounded-xl bg-bento-forest px-5 py-4 text-center">
            <p className="text-base font-bold text-white">{block.root.title}</p>
            <p className="mt-0.5 text-sm text-white/80">{block.root.text}</p>
          </div>
          {/* Connector: a stem from the root, then a bar across to each branch */}
          <div className="mx-auto h-5 w-px bg-gray-300" aria-hidden="true" />
          <div className="mx-auto hidden h-px w-1/2 bg-gray-300 sm:block" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {block.items.map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="hidden h-5 w-px bg-gray-300 sm:block" aria-hidden="true" />
                <div className="flex w-full flex-1 flex-col rounded-xl border border-gray-200 bg-white p-4 text-center">
                  <p className="text-base font-bold text-brand-heading">{item.title}</p>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
                  <ArrowDown className="mx-auto my-3 h-4 w-4 text-brand-green" />
                  <div className="rounded-lg bg-bento-mint px-3 py-2.5">
                    <p className="text-lg font-bold text-bento-forest">{item.result}</p>
                    {item.resultNote && <p className="text-xs text-bento-forest/80">{item.resultNote}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs text-gray-500">{block.caption}</figcaption>
          )}
        </figure>
      )
    case "tip":
      return (
        <div className="flex items-start gap-3 rounded-xl bg-bento-butter p-4">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-bento-butter-ink" />
          <p className="text-sm leading-relaxed text-bento-butter-text">
            <span className="font-semibold">
              {block.title}
              {/[?:!]$/.test(block.title) ? "" : ":"}
            </span>{" "}
            {block.text}
          </p>
        </div>
      )
    case "caution":
      return (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
          <p className="text-sm leading-relaxed text-red-900">{block.text}</p>
        </div>
      )
    case "links":
      return (
        <ul className="space-y-2">
          {block.items.map((item) => (
            <li key={item.href} className="flex gap-3 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
              <span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-green hover:underline"
                >
                  {item.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>{" "}
                — {item.text}
              </span>
            </li>
          ))}
        </ul>
      )
    case "link":
      return (
        <p className="text-sm text-gray-600">
          {block.label}:{" "}
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-brand-green hover:underline"
          >
            {block.text}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </p>
      )
    case "cards":
      return (
        <div className={cn("grid grid-cols-1 gap-4", block.items.length > 1 && "sm:grid-cols-2")}>
          {block.items.map((item) => (
            <div key={item.title} className="flex flex-col rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-base font-bold text-brand-heading">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
              {item.source && (
                <a
                  href={item.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline"
                >
                  Official source: {item.source.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      )
    case "knowledge-check":
      return <GstKnowledgeCheck questions={block.questions} passCount={block.passCount} onPass={onPass} />
    case "exercises":
      return (
        <div className="space-y-4">
          {block.items.map((item) => (
            <Exercise key={item.title} {...item} />
          ))}
        </div>
      )
    case "note":
      return (
        <div className="flex items-start gap-3 rounded-xl bg-bento-sky p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-bento-sky-ink" />
          <p className="text-sm leading-relaxed text-[#1f2a44]">{block.text}</p>
        </div>
      )
  }
}

/** A practice task whose worked answer is revealed on request. */
function Exercise({ title, task, answer }: { title: string; task: string[]; answer: string[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="text-base font-bold text-brand-heading">{title}</h3>
      <div className="mt-2 space-y-1.5">
        {task.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-gray-600">
            {line}
          </p>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:underline"
      >
        {open ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        {open ? "Hide answer" : "Show answer"}
      </button>
      {open && (
        <div className="mt-3 space-y-1.5 rounded-lg bg-bento-mint px-4 py-3">
          {answer.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-bento-forest">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

/** Steps through a module's lesson screens one at a time. */
export function GstLessonViewer({
  screens,
  onFinish,
}: {
  screens: GstLessonScreen[]
  /** Shown as "Mark complete" on the last screen. */
  onFinish?: () => void
}) {
  const [page, setPage] = useState(0)
  const [passed, setPassed] = useState<Set<number>>(new Set())
  const screen = screens[page]
  const last = page === screens.length - 1
  // A knowledge check must be passed before moving on.
  const hasCheck = screen.blocks.some((b) => b.type === "knowledge-check")
  const locked = hasCheck && !passed.has(page)

  const go = (next: number) => {
    setPage(next)
    window.scrollTo({ top: 0 })
  }

  const handlePass = () => {
    setPassed((prev) => new Set(prev).add(page))
    if (last) onFinish?.()
    else go(page + 1)
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
        Screen {page + 1} of {screens.length}
      </p>
      <h2 className="mt-1 text-2xl font-bold text-brand-heading sm:text-3xl">{screen.title}</h2>
      <div className="mt-6 space-y-5">
        {screen.blocks.map((block, i) => (
          <Block key={`${page}-${i}`} block={block} onPass={handlePass} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between gap-3 border-t border-gray-100 pt-6">
        <Button variant="outline" disabled={page === 0} onClick={() => go(page - 1)}>
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
        {locked ? null : !last ? (
          <Button onClick={() => go(page + 1)}>
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          onFinish && (
            <Button onClick={onFinish}>
              <Check className="h-4 w-4" />
              Mark complete
            </Button>
          )
        )}
      </div>
    </div>
  )
}
