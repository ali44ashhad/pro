export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  metaDescription: string;
  h1: string;
  intro: string;
  body: { heading: string; text: string }[];
  bullets: string[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "quickbooks-support",
    title: "QuickBooks Support",
    short: "Fast, certified help when QuickBooks throws an error, freezes, or stops syncing.",
    icon: "lifebuoy",
    metaDescription:
      "Independent QuickBooks support from certified advisors. We diagnose errors, repair company files, fix bank-feed sync, and answer everyday questions for Desktop and Online.",
    h1: "QuickBooks Support, the Moment Something Breaks",
    intro:
      "A frozen company file or a feed that won't sync can stop a whole day's work. Our certified ProAdvisors get on a secure screen-share, find the real cause, and get you running again — usually in one sitting, with a written record of what we changed.",
    body: [
      {
        heading: "The problems we solve most",
        text: "Company-file errors and crash loops, reconciliations that won't balance, broken or duplicated bank feeds, multi-user and hosting lockouts, sluggish performance, and failed updates or upgrades — across both QuickBooks Desktop and Online. If a problem turns out to be an Intuit account, licence, or billing matter, we tell you up front and hand you the right official link.",
      },
      {
        heading: "What a support session looks like",
        text: "It starts with a quick call where we listen and scope the issue in plain terms. Then a certified advisor connects with your permission, and you watch every click on your own screen. You can stop the session whenever you like, and you keep a short summary of exactly what was done and why.",
      },
      {
        heading: "We close the door behind us",
        text: "Once the fix is in, we set up the backups, settings, and a short monthly check that stop the same thing recurring — so you call us less over time, not more.",
      },
    ],
    bullets: [
      "Error, freeze, and crash diagnosis",
      "Company-file review and repair",
      "Bank-feed and sync fixes",
      "Multi-user, network, and hosting issues",
      "Update and version-upgrade help",
      "Documented fixes, plain-English answers",
    ],
    faqs: [
      {
        q: "Is this Intuit's official helpline?",
        a: "No — we're an independent firm of certified QuickBooks ProAdvisors. Anything to do with your Intuit subscription, licence, or account ownership, we'll send you straight to Intuit.",
      },
      {
        q: "Desktop or Online — do you cover both?",
        a: "Both. Pro, Premier, Enterprise, and Mac on the Desktop side, every Online plan, plus the Payroll and Payments add-ons.",
      },
      {
        q: "How is the remote session kept secure?",
        a: "We use encrypted, permission-based screen sharing. You see every step, end it on your terms, and we never keep your login details.",
      },
    ],
  },
  {
    slug: "quickbooks-setup",
    title: "QuickBooks Setup",
    short: "A company file built around how your business really runs — not the defaults.",
    icon: "wrench",
    metaDescription:
      "Done-for-you QuickBooks setup: tailored chart of accounts, items, sales tax, users, and connected bank feeds, configured by certified ProAdvisors for clean books.",
    h1: "Set Up Once, Set Up Right",
    intro:
      "Half the QuickBooks headaches we fix started life as a rushed setup. We take the time to learn how you invoice, buy, pay people, and report — then build a file that makes the reports you'll want later possible from your very first transaction.",
    body: [
      {
        heading: "Built on your business, not a template",
        text: "After a short discovery call, we design a lean chart of accounts, your product and service items, customer and vendor lists, and the class or location tracking your reporting actually needs. No bloat, no guesswork.",
      },
      {
        heading: "Connected, balanced, ready to go",
        text: "We link your bank and card feeds, set up sales-tax agencies and rates, define user roles and permissions, bring in opening balances, and reconcile the first month side-by-side with you so you can see the numbers tie out.",
      },
      {
        heading: "Your team leaves knowing how to drive it",
        text: "We finish with a hands-on session: raising invoices, taking payments, entering bills, and reading the three reports every owner should glance at each month.",
      },
    ],
    bullets: [
      "Guidance on the right edition and plan",
      "Tailored chart of accounts",
      "Items, customers, and vendors imported",
      "Sales-tax and payroll configuration",
      "Bank and card feeds connected",
      "User roles, permissions, and training",
    ],
    faqs: [
      {
        q: "Can my old data come across into the new file?",
        a: "Yes. We bring over your lists, open invoices and bills, and historical balances — and full transaction history where your plan and data quality allow.",
      },
      {
        q: "How long will setup take?",
        a: "For most small businesses, three to seven working days end to end, including verification and your training session, depending on how much data is involved.",
      },
    ],
  },
  {
    slug: "quickbooks-enterprise-support",
    title: "QuickBooks Enterprise Support",
    short: "Advanced inventory, pricing, roles, and file-performance work for Enterprise users.",
    icon: "building",
    metaDescription:
      "Specialist QuickBooks Enterprise support: Advanced Inventory, Advanced Pricing, custom user roles, hosting, and large-file performance tuning by certified consultants.",
    h1: "Get Everything You're Paying Enterprise For",
    intro:
      "Enterprise earns its price only when its advanced features are set up properly — and creates expensive problems when they aren't. We specialise in the parts that matter: Advanced Inventory, Advanced Pricing, custom roles, and multi-entity workflows.",
    body: [
      {
        heading: "Advanced features, deployed the right way",
        text: "We configure and troubleshoot Advanced Inventory with sites, bins, barcodes, and FIFO, build Advanced Pricing rules, set up assemblies and bills of materials, and design role-based permissions that keep auditors happy without getting in your team's way.",
      },
      {
        heading: "Keeping a big file fast and healthy",
        text: "Large Enterprise files slow down and corrupt in predictable patterns. We watch file size and fragmentation, run verify-and-rebuild cycles the correct way, condense history safely, and advise on hosting and network setup so multi-user performance stays quick.",
      },
      {
        heading: "Upgrades and migrations, planned and tested",
        text: "Yearly upgrades, server moves, and shifts to hosted environments are mapped out, tested on a copy first, and run after hours — so Monday looks exactly like Friday, only faster.",
      },
    ],
    bullets: [
      "Advanced Inventory and barcode scanning",
      "Assemblies, BOMs, and FIFO costing",
      "Custom roles and audit controls",
      "File optimisation and repair",
      "Hosting and migration planning",
      "Annual upgrade management",
    ],
    faqs: [
      {
        q: "Our Enterprise file is huge and crawling. Fixable?",
        a: "Almost always. Targeted condensing, list cleanup, database optimisation, and sometimes a planned migration bring it back. We assess first and only recommend the big moves if they're truly needed.",
      },
      {
        q: "Do you work with hosted Enterprise?",
        a: "Yes — both authorised cloud hosting providers and private server setups.",
      },
    ],
  },
  {
    slug: "quickbooks-online-support",
    title: "QuickBooks Online Support",
    short: "Untangle bank feeds, app integrations, and messy QBO files on any plan.",
    icon: "cloud",
    metaDescription:
      "QuickBooks Online help: bank-feed repair, duplicate cleanup, app integrations, smart automation, and full file cleanups from certified QBO specialists.",
    h1: "Make QuickBooks Online Behave",
    intro:
      "QBO is wonderfully convenient right up until the bank feed duplicates everything, a rule miscategorises half your spending, or a connected app starts writing nonsense into the ledger. We sort it out, set it straight, and automate the parts that should run themselves.",
    body: [
      {
        heading: "Feeds and rules that actually help",
        text: "We fix broken bank connections, clear out duplicates, and write bank rules that categorise correctly — so your review queue takes a few minutes instead of swallowing an afternoon.",
      },
      {
        heading: "The right apps, configured properly",
        text: "Payments, e-commerce, time tracking, inventory — we recommend, connect, and tune the add-ons that suit how you work, and disconnect the ones quietly causing damage.",
      },
      {
        heading: "Cleanups that hand back a tidy file",
        text: "Inherited a tangled QBO file? We work through undeposited-funds pile-ups, negative inventory, and miscategorised history methodically, leaving a documented trail. We'll also let you know if you're paying for a bigger plan than you use.",
      },
    ],
    bullets: [
      "Bank-feed repair and de-duplication",
      "Smart bank rules and automation",
      "App integrations set up cleanly",
      "Full file cleanup and recategorisation",
      "Undeposited-funds resolution",
      "Honest advice on right-sizing your plan",
    ],
    faqs: [
      {
        q: "Can you fix months of uncategorised transactions?",
        a: "That's one of the most common jobs we take on. We categorise, reconcile, and hand back a file your accountant will be glad to receive.",
      },
      {
        q: "Will you work with my current bookkeeper?",
        a: "Happily. We often handle the technical cleanup while your bookkeeper keeps the day-to-day entries moving.",
      },
    ],
  },
  {
    slug: "quickbooks-payroll-support",
    title: "QuickBooks Payroll Support",
    short: "Payroll setup, tax-table fixes, paycheck corrections, and filing support by specialists.",
    icon: "banknotes",
    metaDescription:
      "QuickBooks Payroll help: full setup, direct deposit, tax-table errors, paycheck and liability corrections, and 941/W-2/state filing support from payroll specialists.",
    h1: "Payroll You Don't Have to Lose Sleep Over",
    intro:
      "A payroll mistake doesn't sit quietly in the books — it lands in someone's bank account and on a government form. Our payroll specialists set up, correct, and maintain QuickBooks Payroll so payday becomes the most boring part of your week.",
    body: [
      {
        heading: "Set up and switched over cleanly",
        text: "We configure employees, pay schedules, deductions, benefits, garnishments, and your state tax accounts. Switching mid-year? We verify the year-to-date figures and run a full test payroll before a single real cheque goes out.",
      },
      {
        heading: "Mistakes put right, properly",
        text: "Failed tax-table updates, wrong withholdings, voided or duplicate paychecks, direct-deposit snags, liability adjustments — we correct them so your 941s, W-2s, and state filings come out right, and we document every change.",
      },
      {
        heading: "Staying compliant, quarter after quarter",
        text: "Quarter-end and year-end reviews catch issues while they're still cheap to fix. We tie payroll liabilities back to your filings and keep the payroll item list clean as rates and rules change.",
      },
    ],
    bullets: [
      "Complete payroll setup and testing",
      "Mid-year switch with YTD verification",
      "Paycheck and liability corrections",
      "Direct-deposit troubleshooting",
      "941, W-2, and state filing support",
      "Quarter-end compliance reviews",
    ],
    faqs: [
      {
        q: "An employee was paid the wrong amount — can it be cleaned up?",
        a: "Yes. We correct the paycheck, the liabilities, and any filings it touched, and we leave a clear note in the audit trail.",
      },
      {
        q: "Do you handle payroll across multiple states?",
        a: "We do — including state registration guidance, local taxes, and staff who relocated part-way through the year.",
      },
    ],
  },
  {
    slug: "bookkeeping-services",
    title: "Bookkeeping Services",
    short: "Monthly categorisation, reconciliation, and clear reports — handled, on schedule.",
    icon: "book",
    metaDescription:
      "Outsourced bookkeeping for small business: monthly categorisation, bank reconciliation, A/R and A/P, financial reports, and catch-up bookkeeping by certified pros.",
    h1: "Books That Are Always Up to Date",
    intro:
      "Nobody starts a business hoping to categorise transactions at 11pm. We keep your ledger current, reconciled, and ready to review every month, so both your decisions and your tax season get a lot easier.",
    body: [
      {
        heading: "A steady monthly rhythm",
        text: "Each month we code every transaction, reconcile all your bank and card accounts, review what's owed to and by you, and send a short report pack — profit and loss, balance sheet, cash summary — with notes written in plain English.",
      },
      {
        heading: "Behind? We'll catch you up",
        text: "Months or years behind is no problem and no lecture — it's how a lot of clients find us. We quote a fixed catch-up fee, rebuild and reconcile the history, then move you onto the monthly routine.",
      },
      {
        heading: "Made for an easy handoff to your CPA",
        text: "At year-end your tax preparer gets a tidy, reconciled file with a documented trail. Most clients watch their prep bill shrink once their CPA stops doing cleanup at CPA rates.",
      },
    ],
    bullets: [
      "Monthly transaction categorisation",
      "Bank and credit-card reconciliation",
      "Accounts receivable and payable",
      "Monthly report pack with plain notes",
      "Catch-up and cleanup projects",
      "Year-end package for your CPA",
    ],
    faqs: [
      {
        q: "What does monthly bookkeeping cost?",
        a: "It scales with how many transactions and accounts you have. Most small businesses land on a flat monthly package — call and we'll quote against your real activity.",
      },
      {
        q: "I'm two years behind. Is that recoverable?",
        a: "Completely. Multi-year catch-ups are routine, and we sequence the work so any hard deadlines — tax filings, a loan application — are handled first.",
      },
    ],
  },
  {
    slug: "accounting-services",
    title: "Accounting Services",
    short: "Month-end close, adjusting entries, and statements a bank will take seriously.",
    icon: "scale",
    metaDescription:
      "Small-business accounting services: disciplined month-end close, accrual and adjusting entries, GAAP-aligned statements, and right-sized internal controls.",
    h1: "Where Bookkeeping Ends, Accounting Begins",
    intro:
      "Bookkeeping records what happened; accounting makes it mean something. We run a disciplined month-end close, post the adjustments that make your statements accurate, and put in the light controls that keep them that way.",
    body: [
      {
        heading: "A close worth the name",
        text: "Accruals, deferrals, prepaid amortisation, depreciation, splitting loan interest from principal, inventory adjustments — all posted against a checklist so every month is genuinely comparable to the last.",
      },
      {
        heading: "Statements lenders trust",
        text: "We produce profit-and-loss, balance-sheet, and cash-flow statements with consistent classifications and the supporting schedules banks, investors, and buyers expect to see.",
      },
      {
        heading: "Controls sized for a small team",
        text: "Separating duties is hard with five people on staff. We design lightweight approval, reconciliation, and review steps that cut error and fraud risk without drowning anyone in process.",
      },
    ],
    bullets: [
      "Checklist-driven month-end close",
      "Accrual and adjusting entries",
      "GAAP-aligned financial statements",
      "Fixed-asset and loan schedules",
      "Practical internal controls",
      "Audit and lender preparation",
    ],
    faqs: [
      {
        q: "How is this different from bookkeeping?",
        a: "Bookkeeping keeps the daily transactions recorded and reconciled. Accounting adds the adjustments, judgement, and review that turn those records into accurate, decision-ready statements. Plenty of clients have us do both.",
      },
    ],
  },
  {
    slug: "tax-services",
    title: "Tax Services",
    short: "Year-round prep support, planning, and books that are ready when filing season is.",
    icon: "document",
    metaDescription:
      "Small-business tax preparation support and planning: filing-ready books, quarterly planning, estimated payments, deduction documentation, and 1099 compliance.",
    h1: "Tax Work That Doesn't Start in April",
    intro:
      "The savings that matter happen during the year, not on the deadline. We keep your books filing-ready, plan your estimated payments, document deductions properly, and work hand-in-hand with your tax preparer — or introduce you to one we trust.",
    body: [
      {
        heading: "Books a preparer can file from",
        text: "Year-end packages arrive with reconciled accounts, fixed-asset schedules, loan balances, payroll tie-outs, and a summary of owner transactions — everything a preparer needs to file quickly and accurately.",
      },
      {
        heading: "Planning instead of guessing",
        text: "Quarterly check-ins project what you'll owe, right-size your estimated payments, and surface timing moves — equipment buys, retirement contributions, owner pay — while there's still time to act.",
      },
      {
        heading: "1099s and the compliance odds-and-ends",
        text: "We track contractor payments through the year, collect W-9s, and file 1099s on time, and we review sales-tax exposure for businesses selling across state lines.",
      },
    ],
    bullets: [
      "Year-end tax package prep",
      "Quarterly planning reviews",
      "Estimated-payment calculations",
      "Deduction documentation",
      "1099 and W-9 contractor compliance",
      "Sales-tax nexus reviews",
    ],
    faqs: [
      {
        q: "Do you file the return yourselves?",
        a: "We get your books and schedules to filing-ready standard and coordinate directly with your CPA or EA. Don't have one? We'll introduce you to credentialed preparers we work with.",
      },
    ],
  },
  {
    slug: "payroll-management",
    title: "Payroll Management",
    short: "Fully outsourced payroll runs, filings, and employee questions — start to finish.",
    icon: "users",
    metaDescription:
      "Full-service payroll management: scheduled and off-cycle runs, direct deposit, federal and state filings, new-hire reporting, and an employee payroll helpdesk.",
    h1: "Hand Over Payroll, Keep the Control",
    intro:
      "Send us the inputs — hours, new hires, changes — and payroll simply happens: correct paychecks, on-time filings, and a friendly answer when an employee has a question. You approve; we do the work.",
    body: [
      {
        heading: "Every run, on time",
        text: "Weekly, fortnightly, or semi-monthly runs with direct deposit, bonuses and off-cycle payments handled, and a clear approval summary in your inbox before anything actually pays out.",
      },
      {
        heading: "Filings and notices off your plate",
        text: "Federal and state deposits, quarterly 941s, year-end W-2s and 1099s, new-hire reporting, and replies to agency notices — all tracked on a compliance calendar so nothing slips.",
      },
      {
        heading: "A real contact for your team",
        text: "Employees get someone to ask about pay stubs, withholdings, and PTO balances — which means those questions stop landing on your desk.",
      },
    ],
    bullets: [
      "Scheduled and off-cycle payroll runs",
      "Direct-deposit administration",
      "Federal and state tax filings",
      "W-2, 1099, and new-hire reporting",
      "Agency-notice handling",
      "Employee payroll helpdesk",
    ],
    faqs: [
      {
        q: "Can you take over mid-year from another provider?",
        a: "Yes. We bring across the year-to-date data, check it against your prior filings, and run a parallel test before the first live payroll.",
      },
    ],
  },
  {
    slug: "financial-consulting",
    title: "Financial Consulting",
    short: "Forecasts, budgets, KPIs, and CFO-level thinking sized to a small business.",
    icon: "chart",
    metaDescription:
      "Fractional CFO and financial consulting: 13-week cash forecasts, budgeting and variance review, KPI dashboards, pricing analysis, and decision modeling.",
    h1: "CFO-Level Thinking, Small-Business Sized",
    intro:
      "Clean books tell you what happened. Consulting helps you decide what to do next — on pricing, hiring, borrowing, and growth — through a fractional-CFO engagement scaled to where your business is today.",
    body: [
      {
        heading: "Cash flow you can see coming",
        text: "A rolling 13-week cash forecast shows the crunches and the surpluses before they arrive, so payroll is never a nasty surprise and spare cash doesn't sit idle.",
      },
      {
        heading: "Budgets and metrics that change behaviour",
        text: "We build a budget tied to your goals, then review actual-versus-budget each month against the three to five numbers that genuinely predict your business's health.",
      },
      {
        heading: "A second opinion on the big calls",
        text: "Weighing a second location, a key hire, new equipment, or a loan? We model the scenarios, stress-test the assumptions, and give you a clear recommendation with the maths attached.",
      },
    ],
    bullets: [
      "13-week rolling cash forecasts",
      "Annual budgeting and variance review",
      "KPI dashboard design",
      "Pricing and margin analysis",
      "Loan and investor packages",
      "Scenario modeling for big decisions",
    ],
    faqs: [
      {
        q: "Is fractional CFO work only for larger companies?",
        a: "Not at all — it tends to pay off most between roughly $500K and $20M in revenue, when the decisions get expensive but a full-time CFO isn't justified yet.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
