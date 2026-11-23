import { useEffect, useRef, type CSSProperties } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FiverrButton } from "./FiverrButton";
import { HeroShowcase } from "./HeroShowcase";
import { ToolMarquee } from "./ToolMarquee";
import { brand, heroVideos } from "@/content/site";

/** Splits text into words that fade and slide up one by one, starting at stagger index `start`. */
function Words({ text, start = 0, className }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className={className ? `word ${className}` : "word"} style={{ "--i": start + i } as CSSProperties}>
            {w}
          </span>{" "}
        </span>
      ))}
    </>
  );
}

/** Vertical phone video: muted, loops, and plays only while it is on screen. */
function PhoneVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const video = heroVideos[0];

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React does not write `muted` into server HTML; set it so mobile browsers allow playback.
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(v);
    return () => observer.disconnect();
  }, []);

  if (!video) return null;
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem] border border-primary/60 shadow-glow">
      <video
        ref={ref}
        className="hero-video h-full w-full object-contain"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={video.poster}
        width={720}
        height={1280}
        disablePictureInPicture
        aria-label="EPOCHAL showreel"
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
  );
}

export function Hero() {
  const facts = [
    { k: `${brand.yearsExperience} years`, v: "Hands-on experience" },
    { k: "AI Automation", v: "Workflows, voice & AI agents" },
    { k: "AI Video", v: "Cinematic, product & UGC films" },
  ];
  const first = brand.headline[0] ?? "";
  const second = brand.headline[1] ?? "";
  const firstCount = first.split(" ").length;

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Dark gradient with a soft drifting blue and cyan glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero">
        <div className="hero-glow bg-glow-blue right-[-12rem] top-[-8rem] h-[42rem] w-[42rem]" />
        <div className="hero-glow is-alt bg-glow-cyan bottom-[-10rem] left-[-14rem] h-[36rem] w-[36rem]" />
      </div>

      <div className="container-site grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Mobile visuals: phone video, then photo + showcase side by side (desktop layout below) */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <div className="w-[70vw] max-w-[280px]">
            <PhoneVideo />
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="relative h-24 w-24 shrink-0">
              <div className="h-full w-full rounded-full bg-gradient-brand p-1 shadow-photo">
                <img
                  src={brand.portrait}
                  alt="Emmanuel, founder of EPOCHAL"
                  width={1091}
                  height={1442}
                  decoding="async"
                  className="aspect-square h-full w-full rounded-full border-2 border-background object-cover object-[50%_18%]"
                />
              </div>
              <div className="pulse-soft absolute -right-1 -top-1 grid h-12 w-12 place-items-center rounded-full border-4 border-background bg-orange text-center text-orange-foreground">
                <div>
                  <p className="font-display text-lg font-semibold leading-none">{brand.yearsExperience}</p>
                  <p className="mt-0.5 text-[0.45rem] font-bold uppercase tracking-[0.14em]">Years</p>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <HeroShowcase />
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="lg:col-span-7">
          <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-card/60 px-4 py-2 text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            AI Automation · AI Video Production
          </p>

          <h1 className="mt-8">
            <span className="block text-[clamp(3.4rem,10vw,7.5rem)] leading-[0.88] tracking-[-0.04em]">
              <Words text={brand.name.toUpperCase()} />
            </span>
            <span className="mt-5 flex items-center gap-4">
              <span className="h-px w-12 bg-orange" />
              <span className="font-sans text-base font-semibold tracking-normal text-muted-foreground sm:text-lg">
                Founder of <span className="text-gradient font-display text-2xl italic sm:text-3xl">{brand.brand}</span>
              </span>
            </span>
          </h1>

          <p className="mt-10 max-w-2xl font-display text-[1.7rem] leading-[1.2] sm:text-[2.1rem]">
            <Words text={first} start={1} />
            <Words text={second} start={1 + firstCount} className="text-gradient italic" />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{brand.intro}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="brand" size="xl" className="group">
              <a href="#projects">
                View My Work <ArrowDownRight className="transition-transform group-hover:rotate-45" />
              </a>
            </Button>
            <Button asChild variant="line" size="xl" className="group">
              <a href="#contact">
                Contact Me <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <FiverrButton />
          </div>
        </div>

        {/* Phone frame with the video, profile photo and floating showcase card (desktop only) */}
        <div className="hidden justify-center lg:col-span-5 lg:flex lg:justify-end">
          <div className="relative w-[min(78vw,300px,45vh)] min-w-[220px] lg:w-[min(21rem,45vh)]">
            <PhoneVideo />

            {/* Profile photo overlapping the bottom-left of the frame */}
            <div className="float-soft absolute -bottom-6 -left-8 w-28 sm:-left-12 sm:w-32 lg:-left-14 lg:w-36">
              <div className="rounded-full bg-gradient-brand p-1 shadow-photo">
                <img
                  src={brand.portrait}
                  alt="Emmanuel, founder of EPOCHAL"
                  width={1091}
                  height={1442}
                  decoding="async"
                  className="aspect-square w-full rounded-full border-2 border-background object-cover object-[50%_18%]"
                />
              </div>
              <div className="pulse-soft absolute -right-3 -top-2 grid h-14 w-14 place-items-center rounded-full border-4 border-background bg-orange text-center text-orange-foreground sm:h-16 sm:w-16">
                <div>
                  <p className="font-display text-xl font-semibold leading-none sm:text-2xl">{brand.yearsExperience}</p>
                  <p className="mt-0.5 text-[0.5rem] font-bold uppercase tracking-[0.14em]">Years</p>
                </div>
              </div>
            </div>

            {/* Showcase card: below the video on phones, floating over the frame on desktop */}
            <div className="float-soft relative mx-auto mt-14 w-[88%] [--float-rot:-2deg] lg:absolute lg:-left-28 lg:top-[12%] lg:mt-0 lg:w-52 lg:[--float-rot:-4deg]">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </div>

      {/* Fact strip */}
      <div className="container-site">
        <dl className="grid border-t border-border-strong sm:grid-cols-3">
          {facts.map((f, i) => (
            <div
              key={f.k}
              className={`py-6 sm:px-6 ${i > 0 ? "border-t border-border sm:border-l sm:border-t-0" : "sm:pl-0"}`}
            >
              <dt className="font-display text-xl">{f.k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ToolMarquee />
    </section>
  );
}
