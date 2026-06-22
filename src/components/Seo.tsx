import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "@/config/site";

interface SeoProps {
  /** Page title (without the brand suffix — that's added automatically). */
  title?: string;
  description?: string;
  /** Override the canonical path (defaults to the current route). */
  path?: string;
  /** "website" | "article" */
  type?: string;
  /** Set true on pages that should not be indexed (e.g. search results). */
  noindex?: boolean;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Manages document <head> tags for the current page. Because this is a
 * single-page app, we update the title and meta tags imperatively on
 * navigation. Good enough for SEO crawlers that execute JS and for
 * accurate social-share previews.
 */
const Seo = ({ title, description, path, type = "website", noindex = false }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
    const desc = description || site.tagline;
    const canonical = `${site.url}${path ?? location.pathname}`;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setLink("canonical", canonical);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", site.name);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
  }, [title, description, path, type, noindex, location.pathname]);

  return null;
};

export default Seo;
