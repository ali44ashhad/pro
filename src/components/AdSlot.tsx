import { useEffect, useRef } from "react";
import { site, adsenseEnabled } from "@/config/site";

interface AdSlotProps {
  /** The ad-unit slot ID from your AdSense dashboard (manual units). */
  slot?: string;
  /** Tailwind classes for the wrapper (control spacing/size). */
  className?: string;
  format?: string;
  responsive?: boolean;
}

/**
 * An optional in-content display ad. If you use AdSense "Auto Ads"
 * (recommended, handled by ScriptLoader) you usually don't need this.
 * Use it only when you want to hand-place a specific ad unit.
 *
 * Renders nothing until a real publisher ID is set in src/config/site.ts.
 */
const AdSlot = ({ slot, className = "", format = "auto", responsive = true }: AdSlotProps) => {
  const pushed = useRef(false);

  useEffect(() => {
    if (!adsenseEnabled || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* AdSense not ready yet — safe to ignore. */
    }
  }, []);

  if (!adsenseEnabled || !slot) return null;

  return (
    <div className={`my-8 text-center ${className}`} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={site.adsenseClientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdSlot;
