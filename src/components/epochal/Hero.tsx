import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FiverrButton } from "./FiverrButton";
import { brand, heroVideo } from "@/content/site";
import oceanPoster from "@/assets/ocean-poster.jpg";

export function Hero() {
  const facts = [
    { k: `${brand.yearsExperience} years`, v: "Hands-on experience" },
    { k: "AI Automation", v: "Workflows, voice & AI agents" },
    { k: "AI Video", v: "Cinematic, product & UGC films" },
  ];

  // React does not write the `muted` attribute into server HTML, so mobile browsers
  // can block autoplay; set it on the element and start playback after hydration.
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Ocean video background — fills the hero behind everything, poster shows while it loads */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${oceanPoster})` }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={oceanPoster}
          disablePictureInPicture
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-veil" />
      </div>

      <div className="container-site grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Introduction */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-card/60 px-4 py-2 text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            AI Automation · AI Video Production
          </p>

          <h1 className="mt-8">
            <span className="block text-[clamp(3.6rem,10.5vw,8rem)] leading-[0.88] tracking-[-0.04em]">
              {brand.name.toUpperCase()}
            </span>
            <span className="mt-5 flex items-center gap-4">
              <span className="h-px w-12 bg-orange" />
              <span className="font-sans text-base font-semibold tracking-normal text-muted-foreground sm:text-lg">
                Founder of <span className="font-display text-2xl italic text-primary sm:text-3xl">{brand.brand}</span>
              </span>
            </span>
          </h1>

          <p className="mt-10 max-w-2xl font-display text-[1.7rem] leading-[1.2] sm:text-[2.1rem]">
            {brand.headline[0]} <span className="italic text-primary">{brand.headline[1]}</span>
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

        {/* Circular portrait */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="relative w-[min(76vw,25rem)]">
            <div className="absolute -inset-4 rounded-full border border-primary/35 sm:-inset-5" />
            <div className="relative aspect-square rounded-full bg-cream-deep p-2.5 shadow-photo sm:p-3">
              <img
                src={brand.portrait}
                alt="Emmanuel, founder of EPOCHAL"
                width={1091}
                height={1442}
                fetchPriority="high"
                className="h-full w-full rounded-full object-cover object-[50%_18%]"
              />
            </div>
            <div className="absolute -bottom-1 -left-1 grid h-24 w-24 place-items-center rounded-full border-4 border-background bg-orange text-center text-orange-foreground sm:h-28 sm:w-28">
              <div>
                <p className="font-display text-3xl font-semibold leading-none sm:text-4xl">{brand.yearsExperience}</p>
                <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.14em]">Years</p>
              </div>
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
    </section>
  );
}
