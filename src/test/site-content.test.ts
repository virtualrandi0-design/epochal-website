import { describe, expect, it } from "vitest";
import { brand, services, testimonials, tools, portfolio } from "@/content/site";

describe("EPOCHAL site content", () => {
  it("states 3 years of experience", () => {
    expect(brand.yearsExperience).toBe(3);
  });

  it("lists the seven requested services", () => {
    expect(services.map((s) => s.title)).toEqual([
      "AI Voice Agents",
      "Business Automation",
      "Social Media Automation",
      "AI Agents",
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

  it("ships no invented testimonials", () => {
    expect(testimonials.every((t) => t.placeholder)).toBe(true);
  });

  it("has both portfolio categories", () => {
    expect(portfolio.automation.length).toBeGreaterThan(0);
    expect(portfolio.video.length).toBeGreaterThan(0);
  });
});
