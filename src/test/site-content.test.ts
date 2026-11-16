import { describe, expect, it } from "vitest";
import { brand, contact, services, tools, projects } from "@/content/site";

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
});
