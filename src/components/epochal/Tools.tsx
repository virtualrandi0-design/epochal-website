import { tools } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups = ["Automation & AI", "Video"] as const;

export function Tools() {
  return (
    <section id="tools" className="grain bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          index="05"
          eyebrow="Tools & Technologies"
          title={
            <>
              The platforms behind <em className="text-primary">every build.</em>
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {groups.map((g, gi) => (
            <Reveal key={g} delay={gi * 80} className={gi === 0 ? "lg:col-span-7 lg:col-start-1" : "lg:col-span-4 lg:col-start-9"}>
              <p className="eyebrow flex items-center gap-2 text-muted-foreground">
                <span className={`h-2 w-2 rounded-full ${gi === 0 ? "bg-primary" : "bg-orange"}`} />
                {g}
              </p>
              <ul className={`mt-5 grid border-t border-border-strong ${gi === 0 ? "sm:grid-cols-2 sm:gap-x-8" : ""}`}>
                {tools
                  .filter((t) => t.group === g)
                  .map((t) => (
                    <li key={t.name} className="flex items-baseline justify-between gap-4 border-b border-border py-4">
                      <span className="font-display text-2xl">{t.name}</span>
                      <span className="text-right text-sm text-muted-foreground">{t.role}</span>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
