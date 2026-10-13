// Text for the Writing Services page (/writing).
// Each niche has its own tab. Sample `icon` options: doc, cards, ball, chart, coin, scale, phone.

export type SampleIcon = "doc" | "cards" | "ball" | "chart" | "coin" | "scale" | "phone";

export type Niche = {
  id: string;
  tabLabel: string;
  label: string;
  kicker: string;
  title: string;
  intro: string;
  services: { name: string; desc: string }[];
  samples: { title: string; icon: SampleIcon; href: string }[];
};

export const writingHero = {
  kicker: "Writing Services",
  titleStart: "Content that earns trust, ",
  titleAccent: "then clicks",
  intro:
    "Reviews, guides and landing pages for iGaming, fintech, forex and crypto brands. Pick a niche to see what I write and browse my samples.",
};

export const samplesSection = {
  titleSuffix: "samples",
  intro: "Open a category to read published pieces of that content type.",
  cardCta: "See samples",
};

const SAMPLES_LINK = "[SAMPLES LINK]";

export const niches: Niche[] = [
  {
    id: "igaming",
    tabLabel: "iGaming Content Writing",
    label: "iGaming",
    kicker: "iGaming content writing",
    title: "Casino and sportsbook content that players trust",
    intro:
      "I write reviews and guides that explain bonuses, payments and game rules in plain words. Readers get the facts they need, and your pages get the structure search engines reward.",
    services: [
      { name: "Casino reviews", desc: "Licences, games, bonuses, payments and support." },
      { name: "Sportsbook content", desc: "Betting site reviews, markets and how-to guides." },
      { name: "Slot and game pages", desc: "Features, RTP, volatility and rules per title." },
      { name: "Sweepstakes casinos", desc: "Coin systems, redemptions and site comparisons." },
    ],
    samples: [
      { title: "Casino Reviews", icon: "cards", href: SAMPLES_LINK },
      { title: "Slot Reviews", icon: "cards", href: SAMPLES_LINK },
      { title: "Sportsbook Reviews", icon: "ball", href: SAMPLES_LINK },
      { title: "Sports Betting & Predictions", icon: "ball", href: SAMPLES_LINK },
      { title: "Sweepstakes Casinos", icon: "coin", href: SAMPLES_LINK },
      { title: "Bonus Guides", icon: "doc", href: SAMPLES_LINK },
      { title: "Game Guides", icon: "doc", href: SAMPLES_LINK },
      { title: "Gambling Laws", icon: "scale", href: SAMPLES_LINK },
    ],
  },
  {
    id: "fintech",
    tabLabel: "FinTech",
    label: "FinTech",
    kicker: "FinTech content writing",
    title: "Clear content for payments, banking and money apps",
    intro:
      "Financial products are hard to explain and easy to distrust. I turn features, fees and security into content that a first-time user can follow.",
    services: [
      { name: "Product explainers", desc: "How an app, card or payment service works." },
      { name: "Comparison pages", desc: "Side-by-side guides on fees, limits and features." },
      { name: "Blog articles", desc: "SEO posts on payments and personal finance." },
      { name: "Landing page copy", desc: "Short, clear copy that leads readers to sign up." },
    ],
    samples: [
      { title: "Product Explainers", icon: "phone", href: SAMPLES_LINK },
      { title: "Comparison Pages", icon: "scale", href: SAMPLES_LINK },
      { title: "Payments & Banking", icon: "coin", href: SAMPLES_LINK },
      { title: "Personal Finance", icon: "chart", href: SAMPLES_LINK },
      { title: "Landing Pages", icon: "phone", href: SAMPLES_LINK },
      { title: "Help Centre Articles", icon: "doc", href: SAMPLES_LINK },
    ],
  },
  {
    id: "forex",
    tabLabel: "Forex",
    label: "Forex",
    kicker: "Forex content writing",
    title: "Forex guides that respect the reader and the risk",
    intro:
      "Traders compare brokers carefully and spot weak content fast. I write accurate broker reviews and trading guides with balanced risk warnings built in.",
    services: [
      { name: "Broker reviews", desc: "Regulation, spreads, platforms and withdrawals." },
      { name: "Trading guides", desc: "Pairs, orders and charts for new traders." },
      { name: "Strategy articles", desc: "Common strategies with their limits and risks." },
      { name: "Glossary pages", desc: "Short definitions that win long-tail searches." },
    ],
    samples: [
      { title: "Broker Reviews", icon: "scale", href: SAMPLES_LINK },
      { title: "Trading Guides", icon: "chart", href: SAMPLES_LINK },
      { title: "Strategy Articles", icon: "chart", href: SAMPLES_LINK },
      { title: "Market Explainers", icon: "doc", href: SAMPLES_LINK },
      { title: "Forex Glossary", icon: "doc", href: SAMPLES_LINK },
    ],
  },
  {
    id: "crypto",
    tabLabel: "Crypto",
    label: "Crypto",
    kicker: "Crypto content writing",
    title: "Crypto content without the hype",
    intro:
      "I explain exchanges, wallets and tokens in plain language. The goal is content readers can act on safely, and that holds up when the market changes.",
    services: [
      { name: "Exchange and wallet reviews", desc: "Fees, security, coins and ease of use." },
      { name: "Coin explainers", desc: "What a project does, without price promises." },
      { name: "Crypto casino content", desc: "Reviews of casinos that accept crypto." },
      { name: "How-to guides", desc: "Buying, storing and sending crypto safely." },
    ],
    samples: [
      { title: "Exchange Reviews", icon: "coin", href: SAMPLES_LINK },
      { title: "Wallet Guides", icon: "phone", href: SAMPLES_LINK },
      { title: "Coin Explainers", icon: "coin", href: SAMPLES_LINK },
      { title: "Crypto Casinos", icon: "cards", href: SAMPLES_LINK },
      { title: "How-To Guides", icon: "doc", href: SAMPLES_LINK },
      { title: "Market Updates", icon: "chart", href: SAMPLES_LINK },
    ],
  },
];

export const writingProcess = {
  title: "How an order works",
  steps: [
    { title: "You send the brief", desc: "Keywords, word count, tone and any house rules you follow." },
    { title: "I research and outline", desc: "I check the brand, the terms and what already ranks for your keyword." },
    { title: "I write and edit", desc: "Clear copy with keywords placed naturally, checked against your brief." },
    { title: "You review", desc: "Revisions are included until the piece matches what you asked for." },
  ],
};

export const writingContact = {
  title: "Need content this week?",
  text: "I handle up to 50,000 words a month. Send your brief and I will confirm a delivery date.",
  button: "Send a brief →",
};
