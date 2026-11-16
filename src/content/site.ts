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
