/**
 * EPOCHAL — all editable website content lives in this file.
 * Replace the placeholder contact details, projects and testimonials below.
 */
import automation1 from "@/assets/project-automation-1.jpg";
import automation2 from "@/assets/project-automation-2.jpg";
import video1 from "@/assets/project-video-1.jpg";
import video2 from "@/assets/project-video-2.jpg";
import portrait from "@/assets/emmanuel-portrait.png.asset.json";

export const brand = {
  name: "Emmanuel",
  brand: "EPOCHAL",
  role: "Founder of Epochal",
  yearsExperience: 3,
  portrait: portrait.url,
};

/** Placeholder contact details — replace with your real ones. */
export const contact = {
  email: "hello@epochal.com",
  whatsappNumber: "2340000000000", // international format, digits only
  whatsappDisplay: "+234 000 000 0000",
  whatsappMessage: "Hi Emmanuel, I'd like to talk about a project with EPOCHAL.",
  socials: [
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { label: "X / Twitter", href: "https://x.com/", icon: "twitter" },
    { label: "YouTube", href: "https://youtube.com/", icon: "youtube" },
  ] as const,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Tools", href: "#tools" },
  { label: "Why Epochal", href: "#why" },
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
  image: string;
  /** Optional YouTube / Vimeo embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID */
  videoEmbedUrl?: string;
  /** Optional link to a live project, case study or demo */
  link?: string;
  tags: string[];
};

/**
 * Portfolio — add, remove or replace projects here.
 * These are placeholder entries: swap in your real projects, images, videos and links.
 */
export const portfolio: { automation: Project[]; video: Project[] } = {
  automation: [
    {
      title: "Automation Project Title",
      description: "Placeholder — describe the business problem, the workflow you built and the tools you connected.",
      image: automation1,
      tags: ["n8n", "OpenAI", "CRM"],
    },
    {
      title: "Voice Agent Project Title",
      description: "Placeholder — describe the voice agent, what it handles for the client and how it was deployed.",
      image: automation2,
      tags: ["Vapi", "Retell AI"],
    },
  ],
  video: [
    {
      title: "Product Commercial Title",
      description: "Placeholder — describe the brand, the creative direction and the AI tools used to produce the film.",
      image: video1,
      tags: ["Kling", "Runway"],
    },
    {
      title: "Cinematic Video Title",
      description: "Placeholder — describe the story, the visual style and where the final video was published.",
      image: video2,
      tags: ["Veo", "Runway"],
    },
  ],
};

export const tools = [
  { name: "n8n", role: "Workflow automation", mark: "n8" },
  { name: "Make", role: "Visual automation", mark: "Mk" },
  { name: "Zapier", role: "App integrations", mark: "Zp" },
  { name: "Vapi", role: "Voice AI platform", mark: "Va" },
  { name: "Retell AI", role: "Voice agents", mark: "Re" },
  { name: "OpenAI", role: "Language models", mark: "Oa" },
  { name: "Claude", role: "AI reasoning", mark: "Cl" },
  { name: "Kling", role: "AI video generation", mark: "Kl" },
  { name: "Runway", role: "AI video editing", mark: "Rw" },
  { name: "Veo", role: "Cinematic AI video", mark: "Ve" },
];

export const whyChoose = [
  {
    title: "Experience",
    description: "Three years of hands-on work across AI automation and AI video production.",
  },
  {
    title: "Creativity",
    description: "Every workflow and every frame is designed with intent, taste and a clear story.",
  },
  {
    title: "Technical Skills",
    description: "Deep fluency in today's leading automation platforms, voice AI and generative video tools.",
  },
  {
    title: "Efficiency",
    description: "Systems built to save time, reduce manual effort and move your business faster.",
  },
  {
    title: "Quality",
    description: "Premium standards from first draft to final delivery — polished, reliable and on-brand.",
  },
];

/**
 * Testimonials — placeholders only. Replace with genuine client reviews.
 * Set `placeholder: false` once a real review is added.
 */
export const testimonials = [
  { quote: "Your client's review will appear here.", name: "Client Name", role: "Role, Company", placeholder: true },
  { quote: "Your client's review will appear here.", name: "Client Name", role: "Role, Company", placeholder: true },
  { quote: "Your client's review will appear here.", name: "Client Name", role: "Role, Company", placeholder: true },
];
