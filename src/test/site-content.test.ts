import { describe, expect, it } from "vitest";
import { about, brand, contact, fiverr, reviews, services, tools, projects } from "@/content/site";

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

  it("has project placeholders for both automation and video", () => {
    expect(projects.some((p) => p.category === "Automation")).toBe(true);
    expect(projects.some((p) => p.category === "Video")).toBe(true);
  });

  it("links to the requested Fiverr profile with a 5.0 rating", () => {
    expect(fiverr.url).toBe("https://www.fiverr.com/s/YLokEKK");
    expect(fiverr.rating).toBe("5.0");
  });

  it("ships with no made-up reviews", () => {
    expect(reviews).toEqual([]);
  });

  it("uses the About text exactly as supplied", () => {
    expect(about.paragraphs.join(" ")).toBe(
      "Hi there! Welcome to Epochal, a passionate and experienced AI Automation Specialist, AI Video Creator, Website Developer, and Tech Enthusiast dedicated to turning your ideas into smart, high-performing digital solutions. With strong experience in AI workflows, n8n, Make.com, and app automations, I build systems that streamline tasks and boost efficiency. I also create professional AI videos that help brands capture attention and tell their story.",
    );
  });
});
