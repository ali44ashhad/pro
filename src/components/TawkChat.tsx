import { useEffect } from "react";

/**
 * Loads the Tawk.to live-chat widget once, on mount.
 * The chat bubble then appears on every page. You answer from the Tawk
 * dashboard or mobile app; visitors see the agent name/photo you set there.
 */
const TawkChat = () => {
  useEffect(() => {
    // Don't inject the script twice (hot-reload / remount).
    if (document.getElementById("tawkto-script")) return;

    // Tawk globals it expects.
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    const s = document.createElement("script");
    s.id = "tawkto-script";
    s.async = true;
    s.src = "https://embed.tawk.to/69e6548c30afce258dcb3f43/1jmlrkhhr";
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.body.appendChild(s);
  }, []);

  return null;
};

export default TawkChat;
