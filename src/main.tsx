import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { trackVisit } from "./lib/track";

// Log this visit (IP captured server-side) as soon as the page loads.
trackVisit();

createRoot(document.getElementById("root")!).render(<App />);
