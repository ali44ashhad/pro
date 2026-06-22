export type Industry = {
  slug: string;
  title: string;
  short: string;
  metaDescription: string;
  h1: string;
  intro: string;
  points: { heading: string; text: string }[];
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    short: "Job costing, progress billing, and retainage that finally tie out.",
    metaDescription:
      "QuickBooks bookkeeping for contractors and builders: accurate job costing, progress invoicing, retainage tracking, and WIP reporting that lenders and sureties trust.",
    h1: "Construction Books That Show Which Jobs Pay",
    intro:
      "Builders rarely lose money across the board — they lose it on particular jobs they couldn't see clearly. We set up QuickBooks job costing so every estimate, change order, and hour of labour lands on the right project, and your work-in-progress report reflects reality.",
    points: [
      { heading: "Costing that doesn't need spreadsheets", text: "Items, payroll, and vendor bills mapped so each job's profitability is accurate straight out of QuickBooks." },
      { heading: "Progress billing and retainage", text: "Progress invoices, retainage receivable tracked properly, and a clean release when the job closes." },
      { heading: "Reports surety and bank want", text: "WIP schedules and statements laid out the way bonding companies and lenders expect them." },
    ],
    icon: "building",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    short: "A clean profit picture for every property, plus disciplined escrow handling.",
    metaDescription:
      "QuickBooks bookkeeping for real estate: per-property profit tracking, escrow and deposit discipline, owner statements, and clean records for refinances and exchanges.",
    h1: "Real Estate Books, One Property at a Time",
    intro:
      "Rentals, flips, or managing for owners — the property is the thing that has to balance. We structure your QuickBooks file with a class or location for each property so every door carries its own profit and loss.",
    points: [
      { heading: "Profit per property", text: "Income, costs, and capital improvements tracked property by property, then rolled up cleanly at the entity level." },
      { heading: "Escrow kept clean", text: "Deposits and escrow funds held separately and reconciled — exactly where regulators look first." },
      { heading: "Ready for the next deal", text: "Basis tracking, depreciation schedules, and tidy records for refinancing or a 1031 exchange." },
    ],
    icon: "home",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Untangled revenue, accurate provider pay, and payroll that stays compliant.",
    metaDescription:
      "QuickBooks bookkeeping for medical, dental, and therapy practices: insurance-versus-patient revenue tracking, provider compensation, and compliant payroll.",
    h1: "Bookkeeping Built for Healthcare Practices",
    intro:
      "Insurance reimbursements, patient payments, provider comp formulas — practice books knot up fast. We bring order: revenue separated by source, overhead measured against benchmarks, and payroll that holds up.",
    points: [
      { heading: "Revenue you can read", text: "Insurance, patient, and program income split out so collection problems show early." },
      { heading: "Provider compensation handled", text: "Production-based pay, partner draws, and benefits run accurately through payroll." },
      { heading: "Benchmarked overhead", text: "Monthly reporting against practice norms so you always know where you sit." },
    ],
    icon: "heart",
  },
  {
    slug: "retail",
    title: "Retail",
    short: "POS that ties to the ledger, inventory you trust, and margins by category.",
    metaDescription:
      "QuickBooks bookkeeping for retail: point-of-sale integration, inventory valuation, multi-jurisdiction sales tax, and category-level margin reporting.",
    h1: "Retail Books From the Register to the Ledger",
    intro:
      "In retail, everything rides on the point-of-sale connection. We wire your POS into QuickBooks correctly — daily sales, tender types, tax, and inventory — so the ledger always matches the drawer.",
    points: [
      { heading: "POS that reconciles itself", text: "Daily sales summaries posted automatically, with tender types matched to your bank deposits." },
      { heading: "Inventory worth trusting", text: "Sensible costing, shrinkage tracking, and counts that keep your margins honest." },
      { heading: "Sales tax on schedule", text: "Rates across jurisdictions managed and filings made on time." },
    ],
    icon: "tag",
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    short: "Marketplace payouts, platform fees, and multi-state sales tax, decoded.",
    metaDescription:
      "QuickBooks bookkeeping for online sellers: marketplace payout reconciliation, platform fees, multi-channel inventory, and multi-state sales-tax nexus tracking.",
    h1: "E-commerce Books That Show Real Margins",
    intro:
      "A marketplace deposit isn't revenue — it's revenue minus fees, refunds, reserves, and tax collected. We break every payout back down so your books show genuine sales and true margins, one channel at a time.",
    points: [
      { heading: "Payouts broken down", text: "Gross sales, fees, refunds, and holds separated out of each platform deposit." },
      { heading: "Sales tax that keeps up", text: "Nexus watched, registrations guided, and filings supported as you expand across states." },
      { heading: "Margin by channel", text: "Profitability by channel and category, after ad spend and fulfilment costs." },
    ],
    icon: "cart",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    short: "Bills of materials, assemblies, and product costs you can actually rely on.",
    metaDescription:
      "QuickBooks bookkeeping for manufacturers: bills of materials, assembly builds, labour and overhead allocation, and accurate product costing in Enterprise.",
    h1: "Manufacturing Books With Honest Product Costs",
    intro:
      "Get the product cost wrong and every price and margin report is wrong with it. We set up bills of materials, assemblies, and overhead allocation so QuickBooks reflects what it genuinely costs to make what you sell.",
    points: [
      { heading: "BOMs and assemblies", text: "Multi-level bills of materials and build flows that keep component inventory accurate." },
      { heading: "Labour and overhead", text: "Allocation methods that fold full cost into finished goods without spreadsheet gymnastics." },
      { heading: "Inventory valued right", text: "FIFO or average cost set up properly, with cycle counts and variance follow-up." },
    ],
    icon: "cog",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    short: "Utilisation, project profit, and retainers accounted for correctly.",
    metaDescription:
      "QuickBooks bookkeeping for agencies, law firms, and consultancies: project profitability, time-and-billing integration, retainer accounting, and utilisation reporting.",
    h1: "Service-Firm Books Built Around Billable Time",
    intro:
      "Agencies, firms, and consultancies sell hours and outcomes. We connect your time tracking to QuickBooks, treat retainers the right way, and report profit by client and project — not just as one big total.",
    points: [
      { heading: "Profit by engagement", text: "Revenue and labour cost per project, so scope creep shows up in the numbers rather than a hunch." },
      { heading: "Retainers done properly", text: "Deferred revenue and client-trust funds handled correctly and reconciled every month." },
      { heading: "Utilisation in view", text: "Billable percentage and realisation metrics that actually inform staffing." },
    ],
    icon: "briefcase",
  },
  {
    slug: "nonprofits",
    title: "Nonprofits",
    short: "Fund accounting, grant tracking, and reports the board can read.",
    metaDescription:
      "QuickBooks bookkeeping for nonprofits: fund and grant tracking, restricted-versus-unrestricted reporting, functional expenses, and 990-ready books.",
    h1: "Nonprofit Books Your Funders Can Follow",
    intro:
      "Nonprofits answer to donors, grantors, the board, and the IRS, each wanting the numbers cut a different way. We set QuickBooks up with classes for funds and programs so a single clean ledger produces every view you need.",
    points: [
      { heading: "Funds and grants tracked", text: "Restricted and unrestricted funds kept apart, with grant budget-versus-actual available on demand." },
      { heading: "Functional expenses, all year", text: "Program, admin, and fundraising splits maintained throughout the year, not reconstructed at 990 time." },
      { heading: "Board-ready packages", text: "Monthly reports a trustee can absorb in ten minutes, with notes in plain language." },
    ],
    icon: "gift",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
