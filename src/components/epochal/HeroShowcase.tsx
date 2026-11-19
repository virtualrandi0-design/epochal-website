import { useEffect, useState } from "react";
import { Play, Sparkles } from "lucide-react";
import { showcase } from "@/content/site";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;

/** Gradient placeholders used until real images are added to src/assets/ai/. */
const tones = ["bg-showcase-1", "bg-showcase-2", "bg-showcase-3", "bg-showcase-4", "bg-showcase-5"];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Hero frame that shows the showcase thumbnails one at a time with a soft crossfade. */
export function HeroShowcase() {
  const count = showcase.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Images mount only once their slide (or the one before it) has been shown, so later ones load lazily.
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]));
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    setSeen((prev) => {
      const next = (active + 1) % count;
      if (prev.has(active) && prev.has(next)) return prev;
      return new Set(prev).add(active).add(next);
    });
  }, [active, count]);

  useEffect(() => {
    if (paused || reduced || count < 2) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % count), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reduced, count]);

  if (count === 0) return null;
  const current = showcase[active];

  return (
    <figure
      className="rounded-2xl border border-primary/40 bg-card/90 p-1.5 shadow-glow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="AI video and design showcase"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink">
        {showcase.map((item, i) => {
          const tone = tones[i % tones.length];
          return (
            <div
              key={item.title + i}
              aria-hidden={i !== active}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
                i === active ? "opacity-100" : "opacity-0",
              )}
            >
              {item.image ? (
                seen.has(i) && (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                )
              ) : (
                <div className={cn("flex h-full w-full flex-col items-center justify-center gap-2 text-foreground", tone)}>
                  {i % 2 === 0 ? <Play className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
                  <span className="eyebrow text-[0.55rem] opacity-80">Image placeholder</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <figcaption className="flex items-center justify-between gap-2 px-1.5 pb-0.5 pt-2">
        <span className="min-w-0">
          <span className="eyebrow block text-[0.55rem] text-orange">Showcase</span>
          <span className="block truncate font-display text-sm leading-tight" aria-live="polite">
            {current?.title}
          </span>
        </span>
        <span className="flex shrink-0 items-center">
          {showcase.map((item, i) => (
            <button
              key={item.title + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${item.title}`}
              aria-current={i === active}
              className="grid h-6 place-items-center px-0.5"
            >
              <span
                className={cn(
                  "block h-1.5 w-1.5 rounded-full transition-transform duration-300",
                  i === active ? "scale-125 bg-cyan" : "bg-border-strong hover:bg-muted-foreground",
                )}
              />
            </button>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
