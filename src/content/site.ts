/**
 * EPOCHAL — all editable website content lives in this file.
 * Change text, services, projects and tools here; the page updates automatically.
 */
import portrait from "@/assets/emmanuel-portrait.png.asset.json";
import heroPoster from "@/assets/hero-c-logo.jpg.asset.json";
import showcaseBusinessman from "@/assets/ai/01-ai-businessman.webp";
import showcaseCinema from "@/assets/ai/02-cinema-studio.webp";
import showcaseN8n from "@/assets/ai/03-n8n-dashboard.webp";
import showcaseRobot from "@/assets/ai/04-ai-robot.webp";
import showcaseNeural from "@/assets/ai/05-neural-network.webp";
import fashionAdThumbnail from "@/assets/projects/fashion-ad-thumbnail.jpg";

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
 * Hero phone video (vertical 9:16). Muted, loops and plays only while on screen;
 * `poster` is the still image shown before it starts.
 * The first entry is shown in the phone frame on the right of the top section.
 */
export const heroVideos: { src: string; poster: string }[] = [
  {
    src: "/videos/hero-1.mp4",
    poster: heroPoster.url,
  },
];

/** Sorts a Vite glob result by filename and returns the image URLs. */
function sortedUrls(files: Record<string, string>): string[] {
  return Object.keys(files)
    .sort((a, b) => a.localeCompare(b))
    .map((k) => files[k] as string);
}

/**
 * AI images — put them in src/assets/ai/ with these exact names:
 * neural.webp, robot.webp, pipeline.webp, studio.webp, chip.webp
 * Until a file exists, a soft gradient placeholder is shown in its place.
 */
const aiFiles = import.meta.glob<string>("/src/assets/ai/*.{webp,png,jpg,jpeg,avif}", { eager: true, import: "default" });
function aiImage(name: string): string | undefined {
  const key = Object.keys(aiFiles).find((k) => k.split("/").pop()?.replace(/\.[^.]+$/, "") === name);
  return key ? aiFiles[key] : undefined;
}

export type ShowcaseItem = { title: string; image: string };

/**
 * Hero showcase card — one image at a time, changing every 5 seconds.
 * Add, remove or reorder images here; the dots follow automatically.
 */
export const showcase: ShowcaseItem[] = [
  { title: "AI character portrait", image: showcaseBusinessman },
  { title: "AI video studio", image: showcaseCinema },
  { title: "n8n automation workflow", image: showcaseN8n },
  { title: "Friendly AI assistant", image: showcaseRobot },
  { title: "Neural network", image: showcaseNeural },
];

/** Faint background images behind the Automation and Video section headers. */
export const sectionBackdrops = {
  automation: aiImage("pipeline"),
  video: aiImage("studio"),
};

/** Tools that scroll slowly in the strip under the top section. */
export const marqueeTools = ["Make.com", "n8n", "OpenAI", "Kling", "Runway", "CapCut", "Printify"];

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
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#automation" },
  { label: "Reviews", href: "#reviews" },
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

export type ProjectCategory = "AI Automation" | "AI Video";

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  /** Optional cover image URL. Leave empty to show the styled placeholder panel. */
  image?: string;
  /** Optional gallery — the first image is the cover. Clicking the card opens all of them. */
  images?: string[];
  /** Tools / platforms used, shown as badges. */
  platforms: string[];
  /** Optional date label, e.g. "July 2026". */
  date?: string;
  /** Optional video embed URL (YouTube, Vimeo or Google Drive preview). Loads only after the play button is clicked. */
  videoEmbedUrl?: string;
  /** Optional local video file (e.g. "/videos/fashion-ad.mp4"). Plays inline after the play button is clicked. */
  videoSrc?: string;
  /** Optional link to a live project, case study or demo */
  link?: string;
  tags: string[];
  /** Placeholder card: shows an empty "Project image goes here" box, no click. Remove when the project is ready. */
  comingSoon?: boolean;
  /** Two small stat blocks shown on the card. */
  stats?: { value: string; caption: string }[];
};

/** Maserati thumbnail — picked up automatically once src/assets/projects/maserati-ad-thumbnail.jpg exists. */
const maseratiThumb = Object.values(
  import.meta.glob<string>("/src/assets/projects/maserati-ad-thumbnail.{jpg,jpeg,png,webp}", { eager: true, import: "default" }),
)[0];

/**
 * Printify gallery — every image in src/assets/projects/printify/ is used, in filename order
 * (01-workflow.png, 02-products.png, 03-white-tee.png, 04-cream-tee.png …).
 */
const printifyImages = sortedUrls(
  import.meta.glob<string>("/src/assets/projects/printify/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" }),
);

/**
 * Selected projects. Add an `images` gallery, `videoEmbedUrl` or `link` when your work is ready.
 */
export const projects: Project[] = [
  {
    title: "Printify Print-on-Demand Auto Designer",
    description:
      "A scheduled automation that creates AI t-shirt designs, saves them to Google Drive, hosts them on Cloudinary and lists finished products in Printify automatically. Built for a Fiverr client.",
    category: "AI Automation",
    images: printifyImages,
    platforms: ["Make.com", "OpenAI", "Google Drive", "Cloudinary", "Printify"],
    date: "July 2026",
    tags: [],
    stats: [
      { value: "Every 2 days", caption: "scheduled run" },
      { value: "5", caption: "tools connected" },
    ],
  },
  {
    title: "AI Fashion Ad: Clothing Image to Cinematic Video",
    description:
      "A cinematic fashion ad made from a single clothing image. It moves from close-ups of the fabric and sneakers to a model walking through the city in the finished outfit.",
    category: "AI Video",
    image: fashionAdThumbnail,
    videoSrc: "/videos/fashion-ad.mp4",
    platforms: ["Kling", "Veo", "CapCut"],
    tags: ["Fashion Ad", "Image to Video", "Product Commercial"],
    stats: [
      { value: "10 sec", caption: "vertical ad" },
      { value: "1 image", caption: "turned into a full ad" },
    ],
  },
  {
    title: "AI Brand Film: Luxury Car Showroom Reveal",
    description:
      "A 35-second cinematic concept ad that opens on a night-lit showroom, unveils a luxury SUV on a turntable, and ends with a presenter on location. Created with AI video tools.",
    category: "AI Video",
    image: maseratiThumb,
    videoSrc: "/videos/maserati-ad.mp4",
    platforms: ["Kling", "Veo", "CapCut"],
    tags: ["Brand Film", "Concept Ad", "Luxury"],
    stats: [
      { value: "35 sec", caption: "cinematic film" },
      { value: "1080p", caption: "16:9 widescreen" },
    ],
  },
  {
    title: "New Automation Project",
    description: "Placeholder: project description goes here.",
    category: "AI Automation",
    platforms: ["Make.com", "n8n"],
    tags: [],
    comingSoon: true,
  },
  {
    title: "New AI Video Project",
    description: "Placeholder: project description goes here.",
    category: "AI Video",
    platforms: ["Kling", "Runway"],
    tags: [],
    comingSoon: true,
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
