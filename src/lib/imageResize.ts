/** Resizes an image file to at most `maxWidth` pixels wide and re-encodes
 * it as a JPEG data URL (transparent areas become white). */
export function resizeImage(file: File, maxWidth = 1600, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.naturalWidth)
      const canvas = document.createElement("canvas")
      canvas.width = Math.round(img.naturalWidth * scale)
      canvas.height = Math.round(img.naturalHeight * scale)
      const ctx = canvas.getContext("2d")
      URL.revokeObjectURL(url)
      if (!ctx) return reject(new Error("Canvas not available"))
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL("image/jpeg", quality))
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error("Could not read that image"))
    }
    img.src = url
  })
}
