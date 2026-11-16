import { brand, services } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const stats = [
    { value: `${brand.yearsExperience}`, label: "Years of hands-on experience" },
    { value: "2", label: "Core disciplines: automation & video" },
    { value: `${services.length}`, label: "Specialist services" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          index="01"
          eyebrow="About Emmanuel"
          title={
            <>
              Where intelligent systems meet <em className="text-primary">visual storytelling.</em>
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-5">
            <p>
              I'm <span className="font-semibold text-foreground">Emmanuel</span>, the founder of{" "}
              <span className="font-semibold text-foreground">EPOCHAL</span> — a creative technology brand focused on AI
              automation, intelligent AI agents and AI video production.
            </p>
            <p>
              For the past {brand.yearsExperience} years, I've been helping businesses replace repetitive work with
              reliable automations and bring their ideas to life through polished, AI-generated visuals.
            </p>
            <p>
              My goal is simple: help ambitious brands work smarter behind the scenes and look exceptional in front of
              their audience.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-card p-8">
              <p className="font-display text-6xl leading-none text-primary">{s.value}</p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
