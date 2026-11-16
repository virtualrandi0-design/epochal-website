import { brand, services } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const stats = [
    { value: `${brand.yearsExperience}`, label: "Years of experience" },
    { value: "2", label: "Core disciplines" },
    { value: `${services.length}`, label: "Specialist services" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title={
            <>
              Where intelligent systems meet <span className="text-gradient-gold">cinematic storytelling.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="font-semibold text-foreground">Emmanuel</span>, the founder of{" "}
              <span className="font-semibold text-foreground">EPOCHAL</span> — a creative technology brand focused on AI
              automation and AI video production.
            </p>
            <p>
              For the past {brand.yearsExperience} years, I've been helping businesses replace repetitive work with smart,
              reliable automations and bring their ideas to life through striking AI-generated visuals.
            </p>
            <p>
              EPOCHAL exists for one reason: to help ambitious brands step confidently into a new era — working smarter
              behind the scenes and looking extraordinary in front of their audience.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="card-premium flex items-center gap-6 p-6">
                <span className="text-gradient-brand font-display text-5xl font-extrabold sm:text-6xl">{s.value}</span>
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
