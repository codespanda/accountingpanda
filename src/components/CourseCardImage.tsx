import { asset } from "@/lib/asset"

/** The photo at the top of a course card, with an optional badge. */
export function CourseCardImage({ image, badge }: { image: string; badge?: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-bento-mint">
      <img
        src={asset(image)}
        alt=""
        loading="lazy"
        width={800}
        height={450}
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      {badge && (
        <span className="absolute right-3 top-3 rounded-full bg-bento-forest px-3 py-1 text-[11px] font-semibold text-white">
          {badge}
        </span>
      )}
    </div>
  )
}
