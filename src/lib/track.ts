// Fire-and-forget visit logger. Sends the page + ad attribution to /api/track,
// which records it together with the visitor's IP. Never throws / never blocks.
export function trackVisit() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const payload = {
      path: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_term: params.get("utm_term"), // Google Ads keyword (with utm tagging)
      gclid: params.get("gclid"),       // Google Ads click id (auto-tagging)
    };
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* never break the page over analytics */
  }
}
