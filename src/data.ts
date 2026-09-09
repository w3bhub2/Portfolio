export const profile = {
  name: "Usman Ghani",
  tagline: "Digital Operations · AI Automation · Full Stack Development",
  location: "Tumakuru, Karnataka, India",
  phone: "+91 7899186293",
  email: "usmande2025@gmail.com",
  portfolio: "https://usman-ops.netlify.app",
  github: "https://github.com/w3bhub2",
  linkedin: "https://www.linkedin.com/in/usmanghani-ops/",
  summary:
    "Digital Operations and AI Automation professional with over 6 years of operations leadership experience and hands-on expertise in web development, business automation, AI-powered workflows, and digital transformation. I build production-ready websites, automate business processes, integrate cloud services and APIs, deploy modern web applications, and manage complete digital ecosystems for growing businesses.",
};

export const highlights = [
  { value: "6+", label: "Years of Operations Leadership" },
  { value: "4", label: "Production Projects Delivered" },
  { value: "14", label: "Team Members Led" },
  { value: "2", label: "Businesses Digitally Transformed" },
];

export const coreCompetencies = [
  "Digital Operations",
  "Technical Operations",
  "AI Automation",
  "Workflow Automation",
  "Business Process Optimisation",
  "Full Stack Development",
  "Website Development",
  "API Integration",
  "Cloud Deployment",
  "CRM & Lead Management",
  "Technical Support",
  "SEO & Performance",
  "Google Analytics 4",
  "Project Management",
  "Team Leadership",
  "Cross-functional Collaboration",
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database & Cloud",
    icon: "cloud",
    items: ["Supabase", "MongoDB", "Cloudflare", "Netlify", "Vercel"],
  },
  {
    title: "Automation",
    icon: "bolt",
    items: [
      "Puppeteer",
      "AI Workflow Automation",
      "API Integrations",
      "Browser Automation",
    ],
  },
  {
    title: "Tools",
    icon: "tool",
    items: [
      "Git & GitHub",
      "VS Code",
      "Docker (Basic)",
      "Postman",
      "Figma",
      "Zoho CRM",
      "Google Analytics 4",
      "Search Console",
    ],
  },
  {
    title: "AI Tools",
    icon: "sparkle",
    items: ["ChatGPT", "Claude", "Gemini", "LM Arena", "AI-assisted Dev"],
  },
];

export const experience = [
  {
    role: "Digital Operations Lead",
    company: "MatzHub",
    period: "2026 – Present",
    description:
      "MatzHub is a live reseller platform founded by Mohammed Zaid. I built and run its automation core: the WhatsApp ingestion pipeline, the Telegram control bots, the admin dashboards, Cashfree subscription billing and the publish pipeline.",
    points: [
      "Lead the complete digital operations of the business.",
      "Designed and developed the company website.",
      "Built the WhatsApp ingestion pipeline that turns supplier posts into priced, published listings.",
      "Run day-to-day operations from Telegram: orders, alerts, sync and the daily digest in chat.",
      "Managed cloud deployment, hosting, domains, and technical infrastructure.",
      "Built backend workflows using Node.js and APIs.",
      "Implemented automation to reduce repetitive manual work.",
      "Managed website maintenance, updates, debugging, and optimisation.",
      "Supported digital marketing operations and business growth initiatives.",
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Cloudflare",
      "GitHub",
      "Netlify",
      "AI Tools",
      "REST APIs",
    ],
    url: "https://www.matzhub.com",
  },
  {
    role: "Digital Operations & Automation",
    company: "Aurum Bespoke",
    period: "2025",
    description:
      "Led the complete digital transformation for a luxury bespoke tailoring brand.",
    points: [
      "Designed and developed the official business website.",
      "Managed hosting, deployment, domains, and website maintenance.",
      "Implemented SEO and technical optimisation.",
      "Configured Google Analytics and Search Console.",
      "Built CRM workflows and enquiry management systems.",
      "Designed and built an automated email outreach pipeline: import, validation, segmentation, personalized sending, follow-up sequences and lead-level tracking.",
      "Managed branding and digital marketing initiatives.",
      "Integrated AI tools into business workflows.",
      "Worked directly with stakeholders to plan and execute digital strategies.",
    ],
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Cloudflare",
      "GitHub",
      "Google Analytics",
      "Zoho",
      "AI Tools",
    ],
    url: "https://www.aurumbespoke.com",
  },
  {
    role: "Store Manager",
    company: "House of Sheriff",
    period: "",
    description:
      "Managed operations for a bespoke tailoring showroom specialising in custom clothing.",
    points: [
      "Managed daily store operations.",
      "Led a team of 14 members including a master tailor, a designer, and twelve tailors.",
      "Coordinated production schedules and customer deliveries.",
      "Maintained customer satisfaction through consultation and service.",
      "Managed inventory, workflow planning, and operational coordination.",
      "Worked closely with tailoring staff to maintain quality standards.",
    ],
    tech: [],
  },
  {
    role: "Store Operations Manager",
    company: "Men's Style",
    period: "6+ Years",
    description:
      "Worked for over six years managing apparel retail operations.",
    points: [
      "Managed daily retail operations and store performance.",
      "Led customer service and sales operations.",
      "Supervised staff scheduling and workflow management.",
      "Managed inventory and stock movement.",
      "Maintained operational efficiency and store standards.",
      "Built strong customer relationships and handled issue resolution.",
    ],
    tech: [],
  },
];

export type Project = {
  name: string;
  tag: string;
  description: string;
  highlights: string[];
  tech: string[];
  accent: string;
  url: string;
  featured?: boolean;
  flow?: string[];
  stats?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    name: "MatzHub Platform",
    tag: "Reseller Automation",
    featured: true,
    description:
      "A reseller platform that runs itself. Suppliers post product photos and videos into a WhatsApp group. MatzHub reads them, cleans them, prices them and publishes them to the store, then reports back over Telegram. I built the pipeline, the bots, the dashboards and the billing.",
    highlights: [
      "Suppliers drop photos and videos into a WhatsApp group and do nothing else",
      "Videos become sharpness-scored cover frames; blur and dupes dropped automatically",
      "Attributes extracted and prices set by rules, then live on the site",
      "Telegram admin bot with buttons for sync, health, jobs, channels and payments",
      "Orders, alerts and the 08:00 daily digest land in chat, not a mailbox",
      "Cashfree subscription billing with verified webhooks and renewal reminders",
      "Admin dashboard shows only what needs a human decision",
      "Cron jobs keep it healthy: reconcile, trending, expiries, backups",
    ],
    flow: [
      "Supplier posts on WhatsApp",
      "Dedupe, extract, price",
      "Live in the store",
      "Telegram reports back",
    ],
    stats: [
      { value: "10–15 min → under 1 min", label: "per listing, by hand vs. automated" },
      { value: "0", label: "uploads done by hand on most days" },
      { value: "1 queue", label: "only what needs a human decision" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Drizzle",
      "WhatsApp (Baileys)",
      "ffmpeg + sharp",
      "Cashfree API",
      "Telegram Bots",
      "Vercel Cron",
      "PWA",
    ],
    accent: "from-indigo-500 to-blue-500",
    url: "https://www.matzhub.com",
  },
  {
    name: "Aurum Bespoke — Email Outreach Automation",
    tag: "Business Automation",
    description:
      "An outreach system I designed and built for Aurum Bespoke to turn a large prospect list into a structured, personalized, trackable pipeline. It runs end to end: leads are imported, cleaned and validated, segmented by attributes, then contacted with personalized email instead of a bulk blast. Follow-ups run on predefined sequences, every lead keeps its own state, and duplicate or failed sends are caught before they reach an inbox.",
    highlights: [
      "Prospect data imported, cleaned and validated before any outreach",
      "Segmentation by attributes so each group gets the right angle",
      "Personalized email per prospect, not identical bulk sends",
      "Automated sending through an email API integration",
      "Predefined follow-up sequences run without manual touches",
      "Lead-level state: the system knows where every prospect is",
      "Duplicate prevention plus retry and delivery-state handling",
      "Outreach activity and outcomes visible in one place",
    ],
    tech: [],
    accent: "from-sky-500 to-cyan-400",
    url: "https://www.aurumbespoke.com",
  },
  {
    name: "Aurum Bespoke Website",
    tag: "Luxury Brand",
    description:
      "Luxury tailoring website built for a bespoke clothing business.",
    highlights: [
      "Premium responsive UI",
      "SEO implementation",
      "Analytics integration",
      "CRM integration",
      "Performance optimisation",
      "Business-focused design",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Google Analytics", "Zoho"],
    accent: "from-amber-500 to-yellow-500",
    url: "https://www.aurumbespoke.com",
  },
  {
    name: "2048 Chaos",
    tag: "Game",
    description: "Modern recreation of the classic 2048 game, built into this portfolio.",
    highlights: [
      "React & TypeScript",
      "Tailwind CSS",
      "Responsive gameplay",
      "Modern animations",
      "Ongoing expansion into a custom game engine",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    accent: "from-emerald-500 to-teal-500",
    url: "#play",
  },
  {
    name: "Personal Portfolio",
    tag: "Portfolio",
    description:
      "This site — a professional portfolio showcasing technical projects and experience.",
    highlights: [
      "Responsive design",
      "Modern UI",
      "Performance optimisation",
      "SEO & structured data",
      "Automated deployment",
      "Clean project presentation",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    accent: "from-violet-500 to-fuchsia-500",
    url: "https://usman-ops.netlify.app",
  },
];

export const education = {
  degree: "Bachelor of Commerce (B.Com)",
  institution: "Sri Siddhartha First Grade College (SSFGC)",
};

export const additionalInfo = [
  "Interested in Technical Operations, AI Automation, Solutions Engineering, and Full Stack Development.",
  "Comfortable working in startup environments.",
  "Strong understanding of business operations combined with technical implementation.",
  "Passionate about AI, automation, scalable systems, and continuous learning.",
];
