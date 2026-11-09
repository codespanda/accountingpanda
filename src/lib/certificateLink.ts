// Shareable certificate links. The site has no server-side learner records,
// so a shared link carries the certificate details itself (base64url JSON in
// the `d` query parameter) and the public page renders them.

export type CertificateDetails = {
  /** Learner's name as shown on the certificate. */
  name: string
  courseTitle: string
  /** Site path of the course, e.g. /learning/taxation/learn-gst-in-india. */
  coursePath: string
  totalModules: number
  scorePct: number
  /** ISO date the final test was passed. */
  completedAt: string
}

type Encoded = { v: 1; n: string; t: string; p: string; m: number; s: number; d: string }

function toBase64Url(text: string) {
  const bytes = new TextEncoder().encode(text)
  let binary = ""
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4)
  const binary = atob(padded)
  return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)))
}

export function encodeCertificate(details: CertificateDetails) {
  const data: Encoded = {
    v: 1,
    n: details.name,
    t: details.courseTitle,
    p: details.coursePath,
    m: details.totalModules,
    s: details.scorePct,
    d: details.completedAt,
  }
  return toBase64Url(JSON.stringify(data))
}

/** Decodes and validates a shared certificate; returns null if it's malformed. */
export function decodeCertificate(value: string | null): CertificateDetails | null {
  if (!value || value.length > 2000) return null
  try {
    const data = JSON.parse(fromBase64Url(value)) as Partial<Encoded>
    const valid =
      data.v === 1 &&
      typeof data.n === "string" &&
      data.n.trim().length > 0 &&
      data.n.length <= 80 &&
      typeof data.t === "string" &&
      data.t.length <= 200 &&
      typeof data.p === "string" &&
      /^\/learning\/[a-z0-9-]+\/[a-z0-9-]+$/.test(data.p) &&
      typeof data.m === "number" &&
      Number.isInteger(data.m) &&
      data.m > 0 &&
      data.m < 100 &&
      typeof data.s === "number" &&
      data.s >= 0 &&
      data.s <= 100 &&
      typeof data.d === "string" &&
      !Number.isNaN(Date.parse(data.d))
    if (!valid) return null
    return {
      name: data.n!.trim(),
      courseTitle: data.t!,
      coursePath: data.p!,
      totalModules: data.m!,
      scorePct: data.s!,
      completedAt: data.d!,
    }
  } catch {
    return null
  }
}

/** A short, stable certificate ID derived from the details (e.g. AP-3K9Q2M7X). */
export function certificateId(details: CertificateDetails) {
  const input = `${details.coursePath}|${details.name.trim().toLowerCase()}|${details.completedAt}|${details.scorePct}`
  let hash = 0x811c9dc5
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193) >>> 0
  }
  return `AP-${hash.toString(36).toUpperCase().padStart(7, "0")}`
}

/** Full public URL of a shared certificate. */
export function certificateShareUrl(details: CertificateDetails) {
  const base = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, "")}`
  return `${base}/certificate/?d=${encodeCertificate(details)}`
}

export const formatCertificateDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
