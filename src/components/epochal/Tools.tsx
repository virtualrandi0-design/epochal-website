import { tools } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Tools() {
  return (
    <section id="tools" className="relative overflow-hidden bg-navy/40 py-24 sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Toolkit"
          align="center"
          title={
            <>
              Powered by the <span className="text-gradient-brand">best in AI.</span>
            </>
          }
          description="The platforms behind every EPOCHAL automation and production."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={(i % 5) * 70} className="card-premium group flex flex-col items-center p-6 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border-strong bg-navy font-display text-xl font-extrabold text-foreground transition-all duration-500 group-hover:border-gold group-hover:text-gold">
                {t.mark}
              </span>
              <p className="mt-5 font-display text-lg font-bold">{t.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
