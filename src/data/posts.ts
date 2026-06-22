export type PostBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  metaDescription: string;
  readMinutes: number;
  tags: string[];
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "common-quickbooks-error-codes",
    title: "Common QuickBooks Error Codes (and What They're Actually Telling You)",
    date: "2026-05-30",
    excerpt:
      "QuickBooks error codes look cryptic, but most fall into a few familiar families. Here's what the common ones mean and what usually causes them.",
    metaDescription:
      "A plain-English guide to common QuickBooks error codes — the 6000 series, H-series multi-user errors, and update failures — what they mean and what causes them.",
    readMinutes: 6,
    tags: ["QuickBooks", "Troubleshooting"],
    body: [
      {
        paragraphs: [
          "QuickBooks error codes are designed for support staff, not business owners, so they tend to look like alphabet soup. The good news is that the ones you're most likely to hit fall into just a handful of families — and once you know which family an error belongs to, the likely cause becomes a lot clearer.",
        ],
      },
      {
        heading: "The 6000 series: your company file",
        paragraphs: [
          "Errors that start with -6000 (think -6000 -77, -6000 -83, -6000 -301) almost always point at the company file itself or how QuickBooks is reaching it. Common culprits are a file stored on a drive QuickBooks can't fully access, hosting set up on the wrong machine, or a file that has picked up some corruption.",
          "These are usually fixable, but the order of operations matters — running the wrong repair first can make things worse. This is a good moment to stop guessing and have someone look before you risk the file.",
        ],
      },
      {
        heading: "The H-series: multi-user mode",
        paragraphs: [
          "H101, H202, H303, and H505 are all about multi-user access — one computer can't talk to the company file on another. The usual suspects are hosting settings, a firewall blocking the connection, or the QuickBooks background services not running on the host.",
          "If everyone suddenly got kicked out at once, an H-series error is a likely candidate, and it's typically a configuration fix rather than anything wrong with your data.",
        ],
      },
      {
        heading: "Update and installation errors",
        paragraphs: [
          "Codes in the 15xxx range and many install errors come down to permissions, a half-finished update, or a digital-signature problem. They're rarely about your books — but they can block payroll tax-table updates, which then quietly causes downstream issues.",
        ],
      },
      {
        heading: "When to stop and call",
        paragraphs: [
          "One repeating error after a tidy restart, anything touching the 6000 series, or a multi-user lockout right before payroll are all worth handing to a certified advisor. A short remote session usually finds the real cause and gets you running again — without the trial-and-error that risks the file.",
        ],
      },
    ],
  },
  {
    slug: "quickbooks-desktop-vs-online",
    title: "QuickBooks Desktop vs QuickBooks Online: Which One Fits Your Business?",
    date: "2026-04-22",
    excerpt:
      "Desktop or Online isn't about which is 'better' — it's about which fits how you work. Here's an honest comparison to help you decide.",
    metaDescription:
      "QuickBooks Desktop vs QuickBooks Online compared for small business: access, features, inventory, cost, and how to choose the right edition for your needs.",
    readMinutes: 7,
    tags: ["QuickBooks", "Getting Started"],
    body: [
      {
        paragraphs: [
          "The Desktop-versus-Online question comes up on almost every setup call, and the honest answer is that neither is simply better. They suit different businesses. Here's how to think about it without the sales pitch.",
        ],
      },
      {
        heading: "How you need to access it",
        paragraphs: [
          "QuickBooks Online runs in a browser, so you and your accountant can be in the file from anywhere, on any device, at the same time. Desktop lives on a specific computer or server; multi-user access works, but it takes setup and everyone needs to be on that network or a hosted environment.",
          "If remote access and easy collaboration matter most to you, that pulls toward Online. If you prefer everything on one controlled machine, Desktop still has its place.",
        ],
      },
      {
        heading: "Features and complexity",
        paragraphs: [
          "Desktop — especially Enterprise — still leads for heavy inventory, assemblies, and certain industry-specific tools. Online has closed much of the gap and wins on automation, bank-feed handling, and its ecosystem of connected apps.",
          "A rule of thumb: complex manufacturing or deep inventory often favours Desktop; service businesses and modern, app-connected workflows usually feel at home on Online.",
        ],
      },
      {
        heading: "Cost shape",
        paragraphs: [
          "The two price differently — Online is a monthly subscription per company, while Desktop has shifted toward annual subscriptions too. The cheapest sticker price isn't always the cheapest total once you factor in users, add-ons, and hosting, so it's worth comparing your actual configuration rather than the headline number.",
        ],
      },
      {
        heading: "Switching later is normal",
        paragraphs: [
          "Plenty of businesses start on one and move to the other as they grow. A Desktop-to-Online migration is routine when it's planned — data moved, balances verified against the original file, and the features that work differently reconfigured. So pick what fits today; you're not locked in forever.",
        ],
      },
    ],
  },
  {
    slug: "how-to-clean-up-quickbooks",
    title: "How to Clean Up a Messy QuickBooks File (Without Starting Over)",
    date: "2026-03-25",
    excerpt:
      "A tangled QuickBooks file rarely needs to be scrapped. Here's the methodical way to bring one back to trustworthy.",
    metaDescription:
      "A step-by-step approach to cleaning up a messy QuickBooks file: reconcile accounts, fix undeposited funds, clear duplicates, and tidy the chart of accounts.",
    readMinutes: 6,
    tags: ["QuickBooks", "Bookkeeping"],
    body: [
      {
        paragraphs: [
          "Inheriting — or creating — a messy QuickBooks file feels overwhelming, but it almost never means starting from scratch. Cleanup is methodical work, and doing it in the right order keeps you from chasing your own tail.",
        ],
      },
      {
        heading: "Start with reconciliation",
        paragraphs: [
          "Before fixing anything else, reconcile every bank and credit-card account against the real statements, month by month. Until the books agree with the bank, everything else you 'fix' is built on sand. This step alone surfaces most of the duplicates and missing transactions.",
        ],
      },
      {
        heading: "Tackle undeposited funds",
        paragraphs: [
          "A bloated Undeposited Funds account is the classic sign of a file that's drifted. It usually means payments were recorded but never matched to the actual bank deposit. Clearing it out — matching payments to deposits properly — often fixes a chunk of the confusion in one pass.",
        ],
      },
      {
        heading: "Clear duplicates and miscategorisations",
        bullets: [
          "Duplicate transactions from a bank feed that double-imported",
          "Expenses parked in 'Uncategorized' or 'Ask my accountant'",
          "Personal spending mixed into business accounts",
          "Negative inventory quantities that shouldn't be possible",
        ],
        paragraphs: [
          "Work through these systematically rather than randomly. Fixing them in batches by type is far faster than transaction-by-transaction.",
        ],
      },
      {
        heading: "Tidy the chart of accounts last",
        paragraphs: [
          "Once the data is clean, simplify the chart of accounts — merge duplicates, retire accounts nobody uses, and make sure each type of transaction has an obvious home. Doing this last means you're organising clean data, not reshuffling a mess.",
        ],
      },
      {
        heading: "Then keep it that way",
        paragraphs: [
          "A cleaned-up file stays clean with a short monthly routine: reconcile, review the categorisation, and check the feeds. If the cleanup is more than you want to take on, it's exactly the kind of fixed-scope project worth handing to a certified advisor so you start fresh on a solid baseline.",
        ],
      },
    ],
  },
  {
    slug: "reconciling-in-quickbooks",
    title: "Reconciling in QuickBooks: The Monthly Habit That Keeps Your Books Honest",
    date: "2026-02-20",
    excerpt:
      "Reconciliation is the least glamorous button in QuickBooks and the most important. Here's why it matters and how to make it painless.",
    metaDescription:
      "Why monthly reconciliation in QuickBooks matters, what it catches, and a simple routine to keep your bank and book balances in agreement every month.",
    readMinutes: 5,
    tags: ["QuickBooks", "Bookkeeping"],
    body: [
      {
        paragraphs: [
          "Reconciliation is the routine of matching what's in QuickBooks against your actual bank and card statements until the two agree. It isn't glamorous, but it's the single check that keeps everything else in your books honest.",
        ],
      },
      {
        heading: "What reconciling actually catches",
        bullets: [
          "Transactions in QuickBooks that the bank never processed — or the reverse",
          "Duplicates that quietly inflate your income or expenses",
          "Bank fees and interest you forgot to record",
          "Simple data-entry slips, like a transposed amount",
          "Unauthorised charges and early signs of fraud",
        ],
        paragraphs: [
          "Each is small on its own. Left unchecked, they pile up until your books and reality quietly drift apart.",
        ],
      },
      {
        heading: "Why monthly beats 'eventually'",
        paragraphs: [
          "Reconciling a 30-day window keeps the job small and the discrepancies fresh enough to investigate. Leave it for a year and you're untangling thousands of transactions with no memory of what they were. Monthly turns a dreaded chore into a quick, almost boring review.",
        ],
      },
      {
        heading: "Making it painless in QuickBooks",
        paragraphs: [
          "Clean bank feeds and good bank rules do most of the heavy lifting, so by reconcile time the transactions are already categorised and matched. If your reconciliation regularly won't balance, that's usually a sign of feed or rule problems underneath — worth fixing once so every future month is easy.",
          "A reconciled file is one you can trust for taxes, loans, and your own decisions. It's the difference between financial statements that merely exist and ones that are actually true.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
