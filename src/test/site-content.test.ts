import { describe, expect, it } from "vitest";
import { about, brand, contact, fiverr, reviews, services, showcase, heroVideos, tools, projects } from "@/content/site";

describe("EPOCHAL site content", () => {
  it("states 3 years of experience", () => {
    expect(brand.yearsExperience).toBe(3);
  });

  it("uses the requested contact email", () => {
    expect(contact.email).toBe("virtualradni0@gmail.com");
  });

  it("splits services into automation and video", () => {
    expect(services.filter((s) => s.category === "Automation").map((s) => s.title)).toEqual([
      "AI Voice Agents",
      "Business Automation",
      "Social Media Automation",
      "AI Agents",
    ]);
    expect(services.filter((s) => s.category === "Video").map((s) => s.title)).toEqual([
      "Cinematic AI Videos",
      "AI Product Commercials",
      "AI UGC Videos",
    ]);
  });

  it("lists the ten requested tools", () => {
    expect(tools.map((t) => t.name)).toEqual([
      "n8n", "Make", "Zapier", "Vapi", "Retell AI", "OpenAI", "Claude", "Kling", "Runway", "Veo",
    ]);
  });

  it("uses the AI Automation / AI Video project categories", () => {
    expect(projects.map((p) => p.category)).toEqual(["AI Automation", "AI Video"]);
  });

  it("lists the Printify project with its platforms, date and gallery in order", () => {
    const printify = projects.find((p) => p.title === "Printify Print-on-Demand Auto Designer");
    expect(printify?.category).toBe("AI Automation");
    expect(printify?.date).toBe("July 2026");
    expect(printify?.platforms).toEqual(["Make.com", "OpenAI", "Google Drive", "Cloudinary", "Printify"]);
    const names = (printify?.images ?? []).map((src) => src.split("/").pop()?.split("?")[0]);
    expect(names.slice(0, 3)).toEqual(["01-workflow.png", "02-products.png", "03-white-tee.png"]);
  });

  it("fills the hero showcase with the 5 attached images in order", () => {
    const names = showcase.map((s) => s.image.split("/").pop()?.split("?")[0]);
    expect(names).toEqual([
      "01-ai-businessman.webp", "02-cinema-studio.webp", "03-n8n-dashboard.webp", "04-ai-robot.webp", "05-neural-network.webp",
    ]);
  });

  it("plays the hero video from /videos/hero-1.mp4", () => {
    expect(heroVideos[0]?.src).toBe("/videos/hero-1.mp4");
  });

  it("lists the AI fashion ad card with its local video, platforms and tags", () => {
    const card = projects.find((p) => p.category === "AI Video");
    expect(card?.title).toBe("AI Fashion Ad: Clothing Image to Cinematic Video");
    expect(card?.videoSrc).toBe("/videos/fashion-ad.mp4");
    expect(card?.platforms).toEqual(["Kling", "Veo", "CapCut"]);
    expect(card?.tags).toEqual(["Fashion Ad", "Image to Video", "Product Commercial"]);
    expect(card?.image).toBeTruthy();
  });

  it("links to the requested Fiverr profile with a 5.0 rating", () => {
    expect(fiverr.url).toBe("https://www.fiverr.com/s/YLokEKK");
    expect(fiverr.rating).toBe("5.0");
  });

  it("shows the 13 real Fiverr reviews, all rated 5", () => {
    expect(reviews).toHaveLength(13);
    expect(reviews.every((r) => r.rating === 5)).toBe(true);
  });

  it("uses the About text exactly as supplied", () => {
    expect(about.paragraphs.join(" ")).toBe(
      "Hi there! Welcome to Epochal, a passionate and experienced AI Automation Specialist, AI Video Creator, Website Developer, and Tech Enthusiast dedicated to turning your ideas into smart, high-performing digital solutions. With strong experience in AI workflows, n8n, Make.com, and app automations, I build systems that streamline tasks and boost efficiency. I also create professional AI videos that help brands capture attention and tell their story.",
    );
  });
});
