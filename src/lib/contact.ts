/**
 * Shared "talk to us" mailto link used by every "Talk to an Expert" /
 * "Get a Free Consultation" CTA across the site (navbar, hero, footer-style
 * CTA bands on About/FAQ/blog posts), so they all open the same pre-filled
 * email instead of each button needing its own copy of this string.
 */
export const CONSULTATION_MAILTO = `mailto:contact@accountingpanda.com?subject=${encodeURIComponent(
  "Free Consultation Request"
)}`
