/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit THIS ONE FILE to control the site.
 *  Brand details, contact info, domain, and ad/analytics IDs all
 *  read from here. Nothing else needs to change to rebrand or
 *  to switch ads on.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  // Brand
  name: "ProBookeepers",
  legalName: "ProBookeepers",
  tagline:
    "Certified QuickBooks ProAdvisors for Setup, Support, Bookkeeping & Payroll",

  // Contact (display + machine formats)
  phoneDisplay: "+1 (888) 822 1011",
  phoneHref: "tel:+18888221011",
  email: "info@probookeeper.com",
  hours: "Mon – Fri, 9:00 AM – 6:00 PM",

  // Optional physical address — leave blank to hide it site-wide.
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  },

  /**
   * PRODUCTION DOMAIN — no trailing slash.
   * Used for canonical URLs, the sitemap, and social/SEO tags.
   * 👉 Replace with your real domain when you have it (e.g. https://probookeepers.com).
   */
  url: "https://pro-nu-eight.vercel.app",

  social: {
    facebook: "",
    linkedin: "",
    twitter: "",
  },

  /**
   * GOOGLE ADSENSE — paste your publisher ID to switch ads on.
   * Format: "ca-pub-XXXXXXXXXXXXXXXX"
   * While this is left as the placeholder, NO ad script loads, so
   * nothing on the site breaks. The moment you paste your real ID,
   * the AdSense Auto Ads script activates site-wide.
   * (Also update public/ads.txt with the same pub-id.)
   */
  adsenseClientId: "ca-pub-XXXXXXXXXXXXXXXX",

  /**
   * GOOGLE ANALYTICS (optional) — paste your "G-XXXXXXXXXX" Measurement
   * ID to switch on analytics. Left as the placeholder = no tracking.
   */
  googleAnalyticsId: "G-XXXXXXXXXX",

  /**
   * Site-wide disclaimer. ProBookeepers references QuickBooks for
   * identification only — keep this Intuit trademark disclaimer visible
   * across the site so the firm stays clearly distinct from Intuit.
   */
  disclaimer:
    "ProBookeepers is an independent accounting and consulting firm. We are not Intuit Inc., and we are not affiliated with, endorsed by, or sponsored by Intuit. QuickBooks® and the QuickBooks logo are registered trademarks of Intuit Inc., used here for identification and reference purposes only.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/** True only when a real AdSense publisher ID has been set. */
export const adsenseEnabled =
  site.adsenseClientId.startsWith("ca-pub-") &&
  !site.adsenseClientId.includes("XXXX");

/** True only when a real GA Measurement ID has been set. */
export const analyticsEnabled =
  site.googleAnalyticsId.startsWith("G-") &&
  !site.googleAnalyticsId.includes("XXXX");

/** Helper: does a usable street address exist? */
export const hasAddress = Boolean(site.address.street && site.address.city);
