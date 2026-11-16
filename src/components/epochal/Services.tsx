import { ArrowUpRight, Bot, Clapperboard, PhoneCall, Share2, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { services, type ServiceIcon } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIcon, LucideIcon> = {
  voice: PhoneCall,
  workflow: Workflow,
  social: Share2,
  agent: Bot,
  cinematic: Clapperboard,
  product: ShoppingBag,
  ugc: Smartphone,
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-navy/40 py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Services"
          title={
            <>
              Two crafts. <span className="text-gradient-brand">One vision.</span>
            </>
          }
          description="From automated systems that run your business to visuals that capture attention — everything you need to lead in the AI era."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const isVideo = s.category === "Video";
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 90}
                className={cn("card-premium group flex flex-col p-7", i === 0 && "lg:row-span-1")}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "grid h-14 w-14 place-items-center rounded-2xl",
                      isVideo ? "bg-gradient-gold text-gold-foreground shadow-gold" : "bg-gradient-electric shadow-glow",
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={cn("eyebrow text-[0.62rem]", isVideo ? "text-gold" : "text-primary-glow")}>
                    {s.category}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-gold"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            );
          })}

          <Reveal delay={180} className="flex flex-col justify-between rounded-[calc(var(--radius)+8px)] bg-gradient-electric p-7 shadow-glow">
            <p className="font-display text-3xl font-extrabold leading-tight">Need something custom?</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold text-gold underline-offset-4 hover:underline">
              Let's design it together <ArrowUpRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
