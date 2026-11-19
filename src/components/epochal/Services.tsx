import { Bot, Clapperboard, PhoneCall, Share2, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { sectionBackdrops, services, type ServiceIcon } from "@/content/site";
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

/** Faint AI image behind a section header, under a dark overlay that fades into the section. */
function SectionBackdrop({ src }: { src: string | undefined }) {
  if (!src) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] overflow-hidden">
      <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-backdrop-fade" />
    </div>
  );
}

/** AI Automation services. */
export function AutomationServices() {
  const items = services.filter((s) => s.category === "Automation");
  return (
    <section id="automation" className="relative isolate bg-surface py-24 sm:py-32">
      <SectionBackdrop src={sectionBackdrops.automation} />
      <div className="container-site">
        <SectionHeading
          index="02"
          eyebrow="AI Automation Services"
          title={
            <>
              Systems that run your business <em className="text-gradient">while you grow it.</em>
            </>
          }
          description="Automations and AI agents that answer, organise, follow up and publish — so your team can focus on the work that matters."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 70} className="card-paper flex flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** AI Video Production services. */
export function VideoServices() {
  const items = services.filter((s) => s.category === "Video");
  return (
    <section id="video" className="relative isolate bg-ink-glow py-24 text-ink-foreground sm:py-32">
      <SectionBackdrop src={sectionBackdrops.video} />
      <div className="container-site">
        <SectionHeading
          tone="dark"
          index="03"
          eyebrow="AI Video Production"
          title={
            <>
              Visuals that make people <em className="text-gradient">stop scrolling.</em>
            </>
          }
          description="Professional AI video production for brands that want to look premium — from cinematic stories to product films and creator-style ads."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal
                key={s.title}
                delay={i * 70}
                className={cn(
                  "card-paper group flex flex-col p-8",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-orange text-orange-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="eyebrow text-ink-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-12 text-3xl leading-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
