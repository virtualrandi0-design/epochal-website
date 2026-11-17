/**
 * EPOCHAL — all editable website content lives in this file.
 * Change text, services, projects and tools here; the page updates automatically.
 */
import portrait from "@/assets/emmanuel-portrait.png.asset.json";

export const brand = {
  name: "Emmanuel",
  brand: "EPOCHAL",
  role: "Founder of EPOCHAL",
  yearsExperience: 3,
  portrait: portrait.url,
  headline: ["Building Intelligent Systems.", "Creating Powerful Visual Experiences."],
  intro:
    "I help businesses grow through AI automation, intelligent AI agents and professional AI video production.",
};

/**
 * Ocean video behind the top section. Upload your file to /public/ocean.mp4.
 * Tip: keep it short (10–20 s), 720p and under ~5 MB so it loads fast on phones.
 * Until the file exists, the ocean poster image is shown instead.
 */
export const heroVideo = {
  src: "/ocean.mp4",
};

/** About section text — each string is one paragraph. */
export const about = {
  paragraphs: [
    "Hi there! Welcome to Epochal, a passionate and experienced AI Automation Specialist, AI Video Creator, Website Developer, and Tech Enthusiast dedicated to turning your ideas into smart, high-performing digital solutions. With strong experience in AI workflows, n8n, Make.com, and app automations, I build systems that streamline tasks and boost efficiency. I also create professional AI videos that help brands capture attention and tell their story.",
  ],
};

/** Fiverr profile — used by every "Hire me on Fiverr" button and the reviews section. */
export const fiverr = {
  url: "https://www.fiverr.com/s/YLokEKK",
  rating: "5.0",
};

export type Review = {
  name: string;
  /** Optional — only shown when present. */
  country?: string;
  /** 1–5 */
  rating: number;
  text: string;
  /** ISO date, "YYYY-MM-DD". Shown as live relative time ("yesterday", "3 months ago"). */
  date: string;
};

/**
 * Real client reviews copied from Fiverr. Never add made-up reviews.
 * The page shows the 6 newest first; older ones sit behind "Show more reviews".
 */
export const reviews: Review[] = [
  {
    name: "Fiverr client",
    rating: 5,
    date: "2026-11-16",
    text: "This is my first time ordering from Emmanuel, and I honestly love the experience! He did an amazing job and delivered more than I even asked for, especially considering my budget. The video turned out so good! I really appreciate your effort, creativity and patience, Emmanuel. Thanks for the amazing ads. Definitely looking forward to working with you again!",
  },
  {
    name: "sscottron",
    country: "United States",
    rating: 5,
    date: "2026-11-12",
    text: "Emmanuel did a really great job! I had a small budget, and he was kind enough to work with it. The video turned out great, and he delivered it super fast. I truly appreciate his effort. Highly recommend him for anyone looking for a good AI video or ads.",
  },
  {
    name: "joel_calift",
    country: "United States",
    rating: 5,
    date: "2026-11-16",
    text: "Emmanuel did a really great job. I love how the video turned out, especially the visuals and transitions. He understood what I wanted and delivered something even better than I expected. Communication was smooth throughout. Definitely working with him again. Highly recommended!",
  },
  {
    name: "Fiverr client",
    rating: 5,
    date: "2026-10-17",
    text: "This is my second time working with him, and once again he did a great job. I wasn't around for most of the process, but he still handled the AI automation properly and delivered everything as expected. I really like how reliable and easy to work with he is. I didn't have to constantly explain things or stay online while he worked. Everything was taken care of, and the result was exactly what I needed. I'll definitely come back again, thanks.",
  },
  {
    name: "joelclausen578",
    country: "United States",
    rating: 5,
    date: "2026-08-17",
    text: "Everything was done as said and in a timely manner in the way I needed it done! I am VERY happy with my order and would for sure work with him again!",
  },
  {
    name: "gvuimyth",
    country: "United States",
    rating: 5,
    date: "2026-08-17",
    text: "He is very fast and proactive.",
  },
  {
    name: "jonathanreed297",
    country: "United States",
    rating: 5,
    date: "2026-08-17",
    text: "I was away for a few days, but he knew exactly what to do and completed everything perfectly. He even helped me add things I didn't expect to my workflow that I did not pay for, and it helped me a lot. He is highly recommended.",
  },
  {
    name: "mattdavidson586",
    country: "United States",
    rating: 5,
    date: "2026-08-17",
    text: "What I like about Emmanuel is his proactiveness. I had a lot on my hands to handle and couldn't attend much to the project, but he communicated properly along the line and took charge of the project even when all requirements were still pending and did a smooth handover when I could take time to look through. Great buyer!!",
  },
  {
    name: "sscottron",
    country: "United States",
    rating: 5,
    date: "2026-08-17",
    text: "A good expert of CRM automation, very professional and easy to work with.",
  },
  {
    name: "gregoryy5",
    country: "United States",
    rating: 5,
    date: "2026-07-17",
    text: "Emmanuel responded very quickly and resolved all the issues in the timeframe I gave. Good work.",
  },
  {
    name: "brown383me",
    country: "United States",
    rating: 5,
    date: "2026-06-17",
    text: "This was my second time working with Emmanuel and the experience was just as smooth as the first. He took the time to understand what I wanted, provided regular progress updates, and delivered a working automation that saves me a lot of manual work. It's hard to find someone who is both technically skilled and easy to work with. Highly recommended.",
  },
  {
    name: "joelclausen578",
    country: "United States",
    rating: 5,
    date: "2026-06-17",
    text: "About as professional as I have ever received on this app. Would 100% work with again in the future!",
  },
  {
    name: "danjohnwall",
    country: "United States",
    rating: 5,
    date: "2026-04-17",
    text: "He is very good at what he does, he helped me fix what I have been trying to do in my voice agent. He is highly recommended.",
  },
];

export const contact = {
  email: "virtualradni0@gmail.com",
  responseNote: "I usually reply within 24 hours.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Automation", href: "#automation" },
  { label: "Video", href: "#video" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export type ServiceIcon = "voice" | "workflow" | "social" | "agent" | "cinematic" | "product" | "ugc";

export const services: {
  title: string;
  description: string;
  category: "Automation" | "Video";
  icon: ServiceIcon;
}[] = [
  {
    title: "AI Voice Agents",
    description: "Natural-sounding voice agents that answer calls, qualify leads and book appointments around the clock.",
    category: "Automation",
    icon: "voice",
  },
  {
    title: "Business Automation",
    description: "Connected workflows that remove repetitive tasks across your tools, CRM, inbox and operations.",
    category: "Automation",
    icon: "workflow",
  },
  {
    title: "Social Media Automation",
    description: "Content pipelines that plan, generate, schedule and publish across your social channels.",
    category: "Automation",
    icon: "social",
  },
  {
    title: "AI Agents",
    description: "Custom AI assistants trained on your business to support customers, teams and internal processes.",
    category: "Automation",
    icon: "agent",
  },
  {
    title: "Cinematic AI Videos",
    description: "Story-driven, film-grade visuals produced with leading AI video models for brands and campaigns.",
    category: "Video",
    icon: "cinematic",
  },
  {
    title: "AI Product Commercials",
    description: "Striking product films that showcase your product with premium lighting, motion and mood.",
    category: "Video",
    icon: "product",
  },
  {
    title: "AI UGC Videos",
    description: "Authentic, creator-style videos for ads and social media, produced faster and at scale.",
    category: "Video",
    icon: "ugc",
  },
];

export type Project = {
  title: string;
  description: string;
  category: "Automation" | "Video";
  /** Optional cover image URL. Leave empty to show the styled placeholder panel. */
  image?: string;
  /** Optional YouTube / Vimeo embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID */
  videoEmbedUrl?: string;
  /** Optional link to a live project, case study or demo */
  link?: string;
  tags: string[];
};

/**
 * Selected projects — placeholders. Replace titles, descriptions, tags,
 * and add an `image`, `videoEmbedUrl` or `link` when your real work is ready.
 */
export const projects: Project[] = [
  {
    title: "Automation Project Title",
    description: "Placeholder — describe the business problem, the workflow you built and the tools you connected.",
    category: "Automation",
    tags: ["n8n", "OpenAI", "CRM"],
  },
  {
    title: "Voice Agent Project Title",
    description: "Placeholder — describe the voice agent, what it handles for the client and how it was deployed.",
    category: "Automation",
    tags: ["Vapi", "Retell AI"],
  },
  {
    title: "Product Commercial Title",
    description: "Placeholder — describe the brand, the creative direction and the AI tools used to produce the film.",
    category: "Video",
    tags: ["Kling", "Runway"],
  },
  {
    title: "Cinematic Video Title",
    description: "Placeholder — describe the story, the visual style and where the final video was published.",
    category: "Video",
    tags: ["Veo", "Runway"],
  },
];

export const tools: { name: string; role: string; group: "Automation & AI" | "Video" }[] = [
  { name: "n8n", role: "Workflow automation", group: "Automation & AI" },
  { name: "Make", role: "Visual automation", group: "Automation & AI" },
  { name: "Zapier", role: "App integrations", group: "Automation & AI" },
  { name: "Vapi", role: "Voice AI platform", group: "Automation & AI" },
  { name: "Retell AI", role: "Voice agents", group: "Automation & AI" },
  { name: "OpenAI", role: "Language models", group: "Automation & AI" },
  { name: "Claude", role: "AI reasoning", group: "Automation & AI" },
  { name: "Kling", role: "AI video generation", group: "Video" },
  { name: "Runway", role: "AI video editing", group: "Video" },
  { name: "Veo", role: "Cinematic AI video", group: "Video" },
];
