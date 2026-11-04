import path from 'path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Content Security Policy for the built site (GitHub Pages can't send headers, so it's a <meta> tag).
 * Build-only: the dev server needs inline scripts for hot reload. Every external host the site uses
 * is listed here; add a host before adding a new third-party script, form target or API.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  // FormSubmit (consultation form), Google Analytics (after consent), GitHub (the blog studio).
  "connect-src 'self' https://formsubmit.co https://api.github.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://www.google.com",
  "frame-src 'none'",
  "form-action 'self' https://formsubmit.co",
  "object-src 'none'",
  "base-uri 'self'",
  'upgrade-insecure-requests',
].join('; ')

function securityMeta(): Plugin {
  return {
    name: 'accountingpanda-security-meta',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<meta charset="UTF-8" \/>/,
        [
          `<meta charset="UTF-8" />`,
          `    <meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
          `    <meta name="referrer" content="strict-origin-when-cross-origin" />`,
        ].join('\n'),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), securityMeta()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
