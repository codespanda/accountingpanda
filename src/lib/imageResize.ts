/** What optimizeImage did to an image. */
export type OptimizedImage = {
  /** The optimised image as a data URL. */
  dataUrl: string
  format: "jpeg" | "webp"
  width: number
  height: number
  /** Size of the uploaded file. */
  originalBytes: number
  /** Size after optimising. */
  bytes: number
}

type Options = {
  /** Longest allowed width; larger images are scaled down (never up). */
  maxWidth: number
  /** WebP keeps transparency and is smaller; falls back to JPEG where unsupported. */
  format: "jpeg" | "webp"
  /** Lower the quality step by step until the file fits under this size. */
  targetBytes: number
  /** Starting quality (0–1). */
  quality?: number
  /** Never go below this quality, even if the target isn't met. */
  minQuality?: number
}

/** Approximate decoded size of a base64 data URL. */
export function dataUrlBytes(dataUrl: string) {
  const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1)
  return Math.floor((base64.length * 3) / 4) - (base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0)
}

/** "2.4 MB", "184 KB". */
export function formatBytes(bytes: number) {
  return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`
}

/**
 * Resizes and compresses an uploaded image for the web: scales it down to
 * maxWidth, re-encodes it (which also strips camera and GPS metadata) and
 * lowers the quality step by step until it's under targetBytes.
 */
export function optimizeImage(file: File, options: Options): Promise<OptimizedImage> {
  const { maxWidth, targetBytes, quality = 0.82, minQuality = 0.6 } = options
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      const scale = Math.min(1, maxWidth / img.naturalWidth)
      const canvas = document.createElement("canvas")
      canvas.width = Math.round(img.naturalWidth * scale)
      canvas.height = Math.round(img.naturalHeight * scale)
      const ctx = canvas.getContext("2d")
      if (!ctx) return reject(new Error("Canvas not available"))

      // Browsers that can't encode WebP return a PNG instead — use JPEG there.
      const webpSupported = canvas.toDataURL("image/webp").startsWith("data:image/webp")
      const format = options.format === "webp" && webpSupported ? "webp" : "jpeg"
      if (format === "jpeg") {
        // JPEG has no transparency, so transparent areas become white.
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      let q = quality
      let dataUrl = canvas.toDataURL(`image/${format}`, q)
      while (dataUrlBytes(dataUrl) > targetBytes && q - 0.06 >= minQuality - 1e-9) {
        q -= 0.06
        dataUrl = canvas.toDataURL(`image/${format}`, q)
      }
      resolve({
        dataUrl,
        format,
        width: canvas.width,
        height: canvas.height,
        originalBytes: file.size,
        bytes: dataUrlBytes(dataUrl),
      })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error("Could not read that image"))
    }
    img.src = url
  })
}

/** Optimises an image that's already a data URL (e.g. pasted into the editor). */
export function optimizeDataUrl(dataUrl: string, options: Options): Promise<OptimizedImage> {
  const mime = dataUrl.slice(5, dataUrl.indexOf(";"))
  const binary = atob(dataUrl.slice(dataUrl.indexOf(",") + 1))
  const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0))
  return optimizeImage(new File([bytes], "image", { type: mime }), options)
}

/** Cover images: JPEG so every social network can show them in link previews. */
export const COVER_IMAGE = { maxWidth: 1600, format: "jpeg", targetBytes: 250 * 1024 } as const

/** Images inside a post: WebP, sized for the article column. */
export const BODY_IMAGE = { maxWidth: 1200, format: "webp", targetBytes: 150 * 1024 } as const
