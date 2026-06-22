import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COOKIE = "pb_cookie_consent";

/**
 * Lightweight cookie-consent banner. Records the choice in a first-party
 * cookie so it isn't shown again. Disclosing cookie use (including
 * third-party advertising cookies) and linking to the Privacy Policy is
 * part of staying compliant with Google's publisher requirements.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!document.cookie.includes(`${COOKIE}=`)) setVisible(true);
  }, []);

  function choose(value: "accepted" | "declined") {
    document.cookie = `${COOKIE}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-2xl"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        We use cookies to improve your experience and to measure how visitors use this site,
        including cookies set by third-party advertising and analytics partners. You can accept
        or decline non-essential cookies — the site works either way. See our{" "}
        <Link to="/privacy" className="font-semibold text-primary underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button onClick={() => choose("accepted")} className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Accept
        </Button>
        <Button
          onClick={() => choose("declined")}
          variant="outline"
          className="rounded-full"
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
