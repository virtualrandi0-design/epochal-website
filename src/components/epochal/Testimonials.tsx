import { Quote } from "lucide-react";
import { testimonials } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-navy/40 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Testimonials"
          align="center"
          title={
            <>
              Words from <span className="text-gradient-brand">clients.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className={cn("card-premium flex flex-col p-8", t.placeholder && "border-dashed border-border-strong")}
            >
              <Quote className="h-10 w-10 text-gold" />
              <p className={cn("mt-6 flex-1 text-lg leading-relaxed", t.placeholder && "italic text-muted-foreground")}>
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-electric font-display font-bold">
                  {t.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{t.name}</p>
                  <p className="truncate text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
