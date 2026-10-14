import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export type CourseSection = { heading?: string; intro?: string; numbered?: boolean; items: string[] }
export type CourseModule = { title: string; sections: CourseSection[] }

/** One expandable module in a course curriculum list. */
export function ModuleAccordion({
  module,
  index,
  open,
  onToggle,
}: {
  module: CourseModule
  index: number
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="rounded-[22px] bg-brand-bg">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="text-sm font-semibold text-brand-heading sm:text-base">
          {module.title}
        </span>
        <ChevronDown
          className={cn(
            "h-4.5 w-4.5 shrink-0 text-brand-green transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="space-y-4 px-5 pb-5 sm:px-6">
          {module.sections.map((section, i) => (
            <div key={section.heading ?? `${index}-${i}`}>
              {section.heading && (
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                  {section.heading}
                </p>
              )}
              {section.intro && (
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {section.intro}
                </p>
              )}
              {section.items.length > 0 && (
                <ul
                  className={cn(
                    "mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2",
                    section.numbered && "sm:grid-cols-1"
                  )}
                >
                  {section.items.map((item, itemIndex) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      {section.numbered ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-[11px] font-bold text-brand-green">
                          {itemIndex + 1}
                        </span>
                      ) : (
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
