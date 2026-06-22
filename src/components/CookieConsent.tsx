import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COOKIE = "pb_cookie_consent";

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
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-2.5 backdrop-blur-md sm:inset-x-auto sm:left-4 sm:bottom-4 sm:max-w-sm sm:rounded-2xl sm:border sm:py-3 sm:shadow-2xl"
    >
      <div className="flex items-center gap-3 sm:flex-col sm:items-start">
        <p className="flex-1 text-[11px] leading-snug text-muted-foreground sm:text-sm">
          We use cookies, including for advertising, to improve your experience.{" "}
          <Link to="/privacy" className="font-semibold text-primary underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2 sm:mt-1">
          <Button
            onClick={() => choose("accepted")}
            size="sm"
            className="h-8 rounded-full bg-primary px-4 text-xs text-primary-foreground hover:bg-primary/90"
          >
            Accept
          </Button>
          <Button
            onClick={() => choose("declined")}
            size="sm"
            variant="outline"
            className="h-8 rounded-full px-3 text-xs"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
