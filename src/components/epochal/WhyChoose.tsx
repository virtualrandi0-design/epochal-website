import { Award, Cpu, Gauge, Gem, Lightbulb, type LucideIcon } from "lucide-react";
import { whyChoose } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [Award, Lightbulb, Cpu, Gauge, Gem];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="05"
            eyebrow="Why Epochal"
            title={
              <>
                Built different. <span className="text-gradient-gold">Built to last.</span>
              </>
            }
            description="Partnering with EPOCHAL means working with someone who cares as much about the result as you do."
          />
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {whyChoose.map((item, i) => {
            const Icon = icons[i % icons.length] ?? Award;
            return (
              <Reveal as="li" key={item.title} delay={i * 80} className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 py-8">
                <span className="text-outline font-display text-5xl font-extrabold transition-colors duration-500 group-hover:text-gold sm:text-6xl">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-gold" />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
