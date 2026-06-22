export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  stars: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our QuickBooks file kept crashing mid-invoice and we'd nearly given up on it. They got on a screen-share, traced it to a corrupted list, and had us working again before lunch. Calm, clear, and they explained what went wrong.",
    name: "Ramesh P.",
    role: "Owner, HVAC contractor",
    stars: 5,
  },
  {
    quote:
      "I hadn't touched the bookkeeping in over a year and was dreading the conversation. No judgment at all — just a flat quote, a clean catch-up, and a monthly routine I don't have to think about anymore.",
    name: "Sandra L.",
    role: "Founder, boutique marketing studio",
    stars: 5,
  },
  {
    quote:
      "Switching to QuickBooks Online ourselves had left duplicates everywhere. They cleaned up months of mess, rebuilt the bank rules, and now my reconciliation takes ten minutes instead of a weekend.",
    name: "Marcus B.",
    role: "Co-owner, specialty coffee roaster",
    stars: 5,
  },
  {
    quote:
      "Payroll was the part of running the clinic I hated most. They set it up properly, fixed two old filing errors, and now I just approve a summary and it's handled — taxes and all.",
    name: "Dr. Anita V.",
    role: "Director, dental practice",
    stars: 5,
  },
  {
    quote:
      "As a small nonprofit we needed fund tracking the board could actually read. They restructured our classes and our quarterly grant reports went from a two-day ordeal to a couple of clicks.",
    name: "Grace O.",
    role: "Executive Director, education nonprofit",
    stars: 5,
  },
  {
    quote:
      "What sold me was the honesty. On the first free call they told me I was on a more expensive QuickBooks plan than I needed and helped me downgrade. Been working with them ever since.",
    name: "Daniel K.",
    role: "Owner, e-commerce apparel brand",
    stars: 5,
  },
];
