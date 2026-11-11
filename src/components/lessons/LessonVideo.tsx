import { useEffect, useRef, useState } from "react"
import { PlayCircle, Settings2 } from "lucide-react"

type Quality = "auto" | "1080" | "720" | "480"

const QUALITY_LABELS: Record<Quality, string> = {
  auto: "Auto",
  "1080": "1080p (HD)",
  "720": "720p",
  "480": "480p (data saver)",
}

// Number-like object keys sort first in JavaScript, so list the order explicitly.
const QUALITY_ORDER: Quality[] = ["auto", "1080", "720", "480"]

const STORAGE_KEY = "lesson-video-quality"

/** Picks a sensible starting quality from the screen size and connection. */
function autoQuality(): Exclude<Quality, "auto"> {
  if (typeof window === "undefined") return "720"
  const conn = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection
  if (conn?.saveData || conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g" || conn?.effectiveType === "3g") return "480"
  const pixels = window.innerWidth * (window.devicePixelRatio || 1)
  if (pixels >= 1600) return "1080"
  if (pixels >= 900) return "720"
  return "480"
}

/** The file for a quality: "intro.mp4" is 1080p; "intro-720.mp4" and "intro-480.mp4" are the smaller versions. */
function sourceFor(src: string, quality: Exclude<Quality, "auto">) {
  return quality === "1080" ? src : src.replace(/\.mp4$/, `-${quality}.mp4`)
}

function readSaved(): Quality {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    return v === "1080" || v === "720" || v === "480" || v === "auto" ? v : "auto"
  } catch {
    return "auto"
  }
}

/**
 * A self-hosted lesson video (files live under public/videos/). Each video has
 * a poster image beside it with the same name and a .jpg extension, and
 * 720p/480p versions alongside the 1080p file. Nothing is downloaded until the
 * learner presses play. The learner's quality choice is remembered.
 */
export function LessonVideo({ src, title, label = "Watch the video" }: { src: string; title: string; label?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [quality, setQuality] = useState<Quality>("auto")
  const effective = quality === "auto" ? autoQuality() : quality
  const currentSrc = sourceFor(src, effective)

  useEffect(() => {
    setQuality(readSaved())
  }, [])

  const changeQuality = (next: Quality) => {
    const video = videoRef.current
    const resumeAt = video?.currentTime ?? 0
    const wasPlaying = video ? !video.paused : false
    setQuality(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore storage errors — the choice just won't be remembered.
    }
    if (!video) return
    // Keep the learner's place when switching quality.
    const onLoaded = () => {
      video.currentTime = resumeAt
      if (wasPlaying) void video.play()
      video.removeEventListener("loadedmetadata", onLoaded)
    }
    video.addEventListener("loadedmetadata", onLoaded)
  }

  // Reload the element when the source changes.
  useEffect(() => {
    videoRef.current?.load()
  }, [currentSrc])

  return (
    <figure className="mb-8 print:hidden">
      <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-brand-heading">
        <span className="flex items-center gap-2">
          <PlayCircle className="h-5 w-5 text-brand-green" />
          {label}
        </span>
        <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <Settings2 className="h-3.5 w-3.5" />
          Quality
          <select
            value={quality}
            onChange={(e) => changeQuality(e.target.value as Quality)}
            className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-brand-heading focus:border-brand-green focus:outline-none"
          >
            {QUALITY_ORDER.map((q) => (
              <option key={q} value={q}>
                {q === "auto" ? `Auto (${effective === "1080" ? "1080p" : `${effective}p`})` : QUALITY_LABELS[q]}
              </option>
            ))}
          </select>
        </label>
      </figcaption>
      <div className="overflow-hidden rounded-[20px] bg-black">
        <video
          ref={videoRef}
          className="aspect-video w-full"
          controls
          playsInline
          preload="none"
          poster={src.replace(/\.mp4$/, ".jpg")}
          aria-label={title}
          title={title}
          controlsList="nodownload"
          src={currentSrc}
        >
          Your browser can't play this video.
        </video>
      </div>
    </figure>
  )
}
