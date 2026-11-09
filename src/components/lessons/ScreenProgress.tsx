import { cn } from "@/lib/utils"

/** A segmented progress bar where each segment jumps to its lesson screen. */
export function ScreenProgress({
  titles,
  current,
  maxReachable,
  onSelect,
  tone = "light",
  className,
}: {
  titles: string[]
  current: number
  maxReachable: number
  onSelect: (index: number) => void
  /** "dark" for use on the green header, "light" on white cards. */
  tone?: "light" | "dark"
  className?: string
}) {
  const dark = tone === "dark"
  return (
    <nav aria-label="Lesson screens" className={cn("flex items-center gap-1", className)}>
      {titles.map((title, i) => {
        const locked = i > maxReachable
        const filled = i <= current
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            disabled={locked}
            aria-label={`Screen ${i + 1}: ${title}${locked ? " (pass the knowledge check to unlock)" : ""}`}
            aria-current={i === current ? "step" : undefined}
            title={locked ? `${title} — pass the knowledge check to unlock` : `${i + 1}. ${title}`}
            className="group flex-1 cursor-pointer py-2 disabled:cursor-not-allowed"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-colors",
                dark
                  ? filled
                    ? "bg-white"
                    : locked
                      ? "bg-white/15"
                      : "bg-white/30 group-hover:bg-white/60"
                  : filled
                    ? "bg-brand-green"
                    : locked
                      ? "bg-gray-100"
                      : "bg-gray-200 group-hover:bg-brand-green/40",
                i === current && (dark ? "ring-2 ring-white/40 ring-offset-0" : "ring-2 ring-brand-green/25"),
              )}
            />
          </button>
        )
      })}
    </nav>
  )
}
