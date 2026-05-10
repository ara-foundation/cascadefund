/** Production default matches README; override with PUBLIC_SITE_URL (no trailing slash). */
export function getSiteOrigin(): string {
  const raw = import.meta.env.PUBLIC_SITE_URL as string | undefined
  if (raw && /^https?:\/\//.test(raw)) {
    return raw.replace(/\/$/, '')
  }
  return 'https://cascadefund.org'
}
