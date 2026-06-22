import { site, hasAddress } from "@/config/site";

export function orgSchema() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    slogan: site.tagline,
    areaServed: "US",
    priceRange: "$$",
  };
  if (hasAddress) {
    base.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    };
  }
  const sameAs = [site.social.facebook, site.social.linkedin, site.social.twitter].filter(Boolean);
  if (sameAs.length) base.sameAs = sameAs;
  return base;
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@type": "AccountingService", name: site.name, telephone: site.phoneDisplay },
    areaServed: "US",
  };
}

export function articleSchema(p: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

/** Renders a <script type="application/ld+json"> block. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
