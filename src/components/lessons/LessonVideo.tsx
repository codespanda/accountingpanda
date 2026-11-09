import { PlayCircle } from "lucide-react"

/**
 * A self-hosted lesson video (files live under public/videos/). Each video has
 * a poster image beside it with the same name and a .jpg extension. Nothing is
 * downloaded until the learner presses play.
 */
export function LessonVideo({ src, title, label = "Watch the video" }: { src: string; title: string; label?: string }) {
  return (
    <figure className="mb-8 print:hidden">
      <figcaption className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-heading">
        <PlayCircle className="h-5 w-5 text-brand-green" />
        {label}
      </figcaption>
      <div className="overflow-hidden rounded-[20px] bg-black">
        <video
          key={src}
          className="aspect-video w-full"
          controls
          playsInline
          preload="none"
          poster={src.replace(/\.mp4$/, ".jpg")}
          aria-label={title}
          title={title}
          controlsList="nodownload"
        >
          <source src={src} type="video/mp4" />
          Your browser can't play this video.
        </video>
      </div>
    </figure>
  )
}
