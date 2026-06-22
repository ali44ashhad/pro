import { useEffect } from "react";
import { site, adsenseEnabled, analyticsEnabled } from "@/config/site";

/**
 * Loads Google AdSense + (optionally) Google Analytics.
 *
 * - Nothing loads while the IDs in src/config/site.ts are still the
 *   placeholders, so the site never "breaks" before you're approved.
 * - Paste your real `ca-pub-...` ID into site.ts and the AdSense Auto
 *   Ads script is injected into <head> site-wide. Turn Auto Ads on in
 *   your AdSense dashboard and Google places the units for you.
 * - Paste a real `G-...` ID and Google Analytics activates the same way.
 *
 * Mount this once, near the top of the app.
 */
const ScriptLoader = () => {
  useEffect(() => {
    // ---- Google AdSense (Auto Ads) ----
    if (adsenseEnabled && !document.getElementById("adsbygoogle-init")) {
      const s = document.createElement("script");
      s.id = "adsbygoogle-init";
      s.async = true;
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.adsenseClientId}`;
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    }

    // ---- Google Analytics (gtag) ----
    if (analyticsEnabled && !document.getElementById("ga-init")) {
      const g = document.createElement("script");
      g.id = "ga-init";
      g.async = true;
      g.src = `https://www.googletagmanager.com/gtag/js?id=${site.googleAnalyticsId}`;
      document.head.appendChild(g);

      const inline = document.createElement("script");
      inline.id = "ga-config";
      inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.googleAnalyticsId}');`;
      document.head.appendChild(inline);
    }
  }, []);

  return null;
};

export default ScriptLoader;
