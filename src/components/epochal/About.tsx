import { about, brand, services } from "@/content/site";
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
              Where intelligent systems meet <em className="text-gradient">visual storytelling.</em>
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-5">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
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
