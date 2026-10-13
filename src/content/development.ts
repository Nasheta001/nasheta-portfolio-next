// Text for the Development Services page (/developer).
// Service `icon` options: shop, building, chart.

export const devHero = {
  kicker: "// development services",
  titleStart: "Web apps and business systems, ",
  titleAccent: "built and shipped",
  intro:
    "I build tools that small businesses run on. Online shops, management systems and dashboards, deployed and ready for real users.",
  primaryButton: "See projects",
  secondaryButton: "Start a project",
};

export const devServices = {
  title: "What I build",
  items: [
    {
      icon: "shop",
      title: "Business websites and shops",
      desc: "Product catalogues, carts and WhatsApp ordering for local businesses. Fast on phones, easy to update.",
    },
    {
      icon: "building",
      title: "Management systems",
      desc: "Systems for properties, stock, staff or clients, with logins, roles and records in one place.",
    },
    {
      icon: "chart",
      title: "Dashboards and internal tools",
      desc: "Screens that show the numbers your team checks every day, pulled from your own data.",
    },
  ] as { icon: "shop" | "building" | "chart"; title: string; desc: string }[],
};

export type Project = {
  category: string;
  title: string;
  desc: string;
  tags: string[];
  screenshot: { placeholder: string; image?: string; bg: string; ink: string };
  links: { label: string; href: string; primary?: boolean }[];
};

export const projects: { title: string; items: Project[] } = {
  title: "Projects",
  items: [
    {
      category: "E-commerce site",
      title: "FreshWave Chemicals & Detergents",
      desc: "An online shop for a Mombasa detergent store. Customers browse the catalogue, add items to a cart and order through WhatsApp.",
      tags: ["Vite", "JavaScript", "Vercel"],
      // To show a real screenshot, put the file in /public and set image: "/freshwave.png"
      screenshot: { placeholder: "[SCREENSHOT: FreshWave homepage]", bg: "#0F3D2E", ink: "#9FE1CB" },
      links: [
        { label: "Live site →", href: "https://freshwave-chemicals.vercel.app", primary: true },
        { label: "Code", href: "[GITHUB LINK]" },
      ],
    },
    {
      category: "Management system",
      title: "Multi-Property Management Platform",
      desc: "A platform for landlords running several apartment buildings in Kenya. It tracks tenants, units and rent, with secure records and payment support.",
      tags: ["Angular", "Django REST", "PostgreSQL", "Docker"],
      screenshot: { placeholder: "[SCREENSHOT: Property dashboard]", bg: "#1B2430", ink: "#B5D4F4" },
      links: [
        { label: "Live demo →", href: "[LIVE LINK]", primary: true },
        { label: "Code", href: "[GITHUB LINK]" },
      ],
    },
  ],
};

export const tools = {
  title: "Tools I work with",
  intro: "Proven tools, chosen to keep your hosting costs low.",
  items: [
    "Angular",
    "JavaScript",
    "Python",
    "Django REST",
    "PostgreSQL",
    "Docker",
    "Git and GitHub",
    "Vercel",
    "Render",
    "Supabase",
  ],
};

export const devProcess = {
  title: "How a project runs",
  steps: [
    { title: "Plan", desc: "We agree on the pages, the users and what the system must do." },
    { title: "Build", desc: "You see working screens early and give feedback as it grows." },
    { title: "Launch", desc: "I deploy it online, with your own link and secure logins." },
    { title: "Support", desc: "Fixes and new features after launch, when your business needs them." },
  ],
};

export const devContact = {
  title: "Got a system in mind?",
  text: "Tell me what your business needs to track or sell. I will reply with a plan and a timeline.",
  button: "Start a project",
};
