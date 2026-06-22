import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { site } from "@/config/site";

/** Fixed bottom-right quick actions: call us + back-to-top. */
const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="w-11 h-11 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:bg-foreground/90 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phoneDisplay}`}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingActions;
