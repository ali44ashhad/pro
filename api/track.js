// Vercel serverless function: records each visit (with the real IP) to Supabase.
// IP + geo are read server-side from Vercel's request headers.
// Secrets live only in Vercel env vars — never in the client or in git.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    // Not configured yet — silently no-op so the site is never affected.
    res.status(200).json({ ok: false, reason: "not_configured" });
    return;
  }

  try {
    // Vercel puts the real client IP first in x-forwarded-for.
    const fwd = (req.headers["x-forwarded-for"] || "").toString();
    const ip = fwd.split(",")[0].trim() || (req.headers["x-real-ip"] || "").toString();

    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    const row = {
      ip,
      country: req.headers["x-vercel-ip-country"] || null,
      city: req.headers["x-vercel-ip-city"] || null,
      region: req.headers["x-vercel-ip-country-region"] || null,
      user_agent: req.headers["user-agent"] || null,
      path: body.path || null,
      referrer: body.referrer || null,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      utm_term: body.utm_term || null, // the Google Ads keyword
      gclid: body.gclid || null,       // Google Ads click id
    };

    const resp = await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      res.status(502).json({ error: "insert_failed", detail });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}
