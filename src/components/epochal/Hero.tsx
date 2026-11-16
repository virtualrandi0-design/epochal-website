import { ArrowDownRight, ArrowRight, Bot, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, services } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-28 sm:pt-32">
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div className="min-w-0 @container">
          <div className="intro-fade inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-2 backdrop-blur" style={{ animationDelay: "0.1s" }}>
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="eyebrow whitespace-nowrap text-[0.58rem] text-foreground/80 sm:text-[0.65rem]">AI Automation · AI Video Production</span>
          </div>

          <h1 className="mt-8 font-display font-bold leading-[0.9]">
            <span className="intro-fade block text-[14.4cqw] tracking-[-0.02em]" style={{ animationDelay: "0.2s" }}>
              {brand.name.toUpperCase()}
            </span>
            <span className="intro-fade mt-3 flex items-baseline gap-4" style={{ animationDelay: "0.35s" }}>
              <span className="eyebrow whitespace-nowrap text-muted-foreground">Founder of</span>
              <span className="text-gradient-brand text-[9cqw]">{brand.brand}.</span>
            </span>
          </h1>

          <p className="intro-fade mt-8 max-w-2xl font-display text-2xl font-bold leading-snug sm:text-3xl" style={{ animationDelay: "0.5s" }}>
            Building Smarter Businesses.{" "}
            <span className="text-muted-foreground">Creating Powerful Visual Experiences.</span>
          </p>

          <p className="intro-fade mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "0.65s" }}>
            I help brands work smarter with AI automation and stand out with cinematic AI video — combining technology and
            creativity to move businesses into a new era.
          </p>

          <div className="intro-fade mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.8s" }}>
            <Button asChild variant="gold" size="xl" className="group">
              <a href="#portfolio">
                View My Work <ArrowDownRight className="transition-transform group-hover:rotate-45" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl" className="group">
              <a href="#contact">
                Contact Me <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Portrait */}
        <div className="intro-fade relative mx-auto w-full max-w-md" style={{ animationDelay: "0.4s" }}>
          <div className="animate-pulse-glow absolute -inset-6 rounded-[3rem] bg-primary/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-[2rem] border border-border-strong bg-navy p-2 shadow-card">
            <div className="overflow-hidden rounded-t-[11.5rem] rounded-b-[1.6rem]">
              <img
                src={brand.portrait}
                alt="Emmanuel, founder of EPOCHAL"
                width={1091}
                height={1442}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-2 bottom-2 h-1/3 rounded-b-[1.6rem] bg-gradient-to-t from-navy-deep/90 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
              <div>
                <p className="font-display text-lg font-bold">{brand.name}</p>
                <p className="text-sm text-muted-foreground">{brand.role}</p>
              </div>
              <div className="rounded-2xl bg-gradient-gold px-3 py-2 text-center text-gold-foreground">
                <p className="font-display text-2xl font-extrabold leading-none">{brand.yearsExperience}+</p>
                <p className="text-[0.6rem] font-bold uppercase tracking-wider">Years</p>
              </div>
            </div>
          </div>

          <div className="animate-float glass absolute -left-4 top-16 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-card sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-electric">
              <Bot className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">AI Automation</span>
          </div>
          <div className="animate-float glass absolute -right-4 top-1/2 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-card sm:flex" style={{ animationDelay: "1.5s" }}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
              <Clapperboard className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">AI Video</span>
          </div>
        </div>
      </div>

      {/* Services ticker */}
      <div className="relative border-y border-border bg-navy/60 py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-12 pr-12">
            {[...services, ...services].map((s, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-xl font-bold text-foreground/80">
                {s.title}
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
