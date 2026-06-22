# ProBookeepers — Updated Site (setup notes)

Your existing site, rebuilt into a full multi-page, AdSense-ready website — **same green theme, same brand, same stack** (Vite + React + shadcn). Nothing about the look changed; everything new uses the existing theme.

## What's new

**Pages:** Home (unchanged) · About · Services + a page per service · Industries + a page per industry · Blog + 4 articles · FAQ · Contact · Disclaimer · Privacy Policy (upgraded) · Terms (upgraded) · Search · styled 404.

**Compliance / SEO:** cookie-consent banner, AdSense-ready privacy disclosures, JSON-LD structured data, per-page titles & meta, `robots.txt`, `sitemap.xml`, `ads.txt`, and a `vercel.json` so deep links don't 404.

## The ONLY file you edit: `src/config/site.ts`

Everything reads from this one file. Open it and set:

1. **`url`** — your real domain when you have it (e.g. `https://probookeepers.com`).
   Then also update the domain in `public/robots.txt` and `public/sitemap.xml`.
2. **`adsenseClientId`** — paste your `ca-pub-XXXXXXXXXXXXXXXX` from AdSense.
   - Until you do, **no ad code loads** — the site works perfectly without it.
   - The moment you paste a real ID, the AdSense Auto Ads script turns on site-wide.
   - Also update `public/ads.txt` with the same publisher number.
3. **`googleAnalyticsId`** *(optional)* — paste `G-XXXXXXXXXX` to switch on Analytics.

Phone, email, and hours are already filled in from your existing site — change them here if needed.

## Run it

```bash
npm install      # safe to run; no new dependencies were added
npm run dev      # check everything at http://localhost:5173
```

Then commit & push as usual — Vercel will redeploy.

## Turning ads on later (quick recap)

1. Get approved in Google AdSense for your domain.
2. Paste your `ca-pub-…` into `src/config/site.ts`.
3. Put the same number in `public/ads.txt`.
4. Turn on **Auto ads** in your AdSense dashboard.
5. Commit, push, done.

> Note: the contact form is front-end only (it shows a thank-you message). Your phone and email are shown prominently everywhere, which is what matters for AdSense. If you later want the form to actually send email, a service like Formspree or a Vercel serverless function can be wired in.
