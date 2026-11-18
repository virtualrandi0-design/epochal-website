import { useEffect, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { fiverr, reviews, type Review } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FiverrButton } from "./FiverrButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** How many review cards are open before "Show more reviews". */
const SHOW_FIRST = 6;

const relativeFormatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

/**
 * "2026-11-16" -> "yesterday", "2026-11-12" -> "5 days ago", "2026-08-17" -> "3 months ago".
 * Calculated from `now` at render time, so it stays correct as days pass.
 */
export function relativeTime(iso: string, now: number): string {
  const then = new Date(`${iso}T00:00:00`).getTime();
  if (Number.isNaN(then)) return "";
  const days = (then - now) / 86_400_000;
  const years = Math.trunc(days / 365) || 0;
  if (Math.abs(years) >= 1) return relativeFormatter.format(years, "year");
  const months = Math.trunc(days / 30.44) || 0;
  if (Math.abs(months) >= 1) return relativeFormatter.format(months, "month");
  return relativeFormatter.format(Math.trunc(days) || 0, "day");
}

/** Current time, refreshed every minute so the "x days ago" labels never go stale. */
function useNow() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <span className={cn("flex items-center gap-0.5", className)} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={cn("h-3.5 w-3.5", i < rating ? "fill-orange text-orange" : "text-border-strong")} />
      ))}
    </span>
  );
}

function ReviewCard({ review, now }: { review: Review; now: number | null }) {
  return (
    <figure className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-soft">
      <Stars rating={review.rating} />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">“{review.text}”</blockquote>
      <figcaption className="mt-4 flex items-end justify-between gap-3 border-t border-border pt-3">
        <span className="min-w-0">
          <span className="block truncate font-display text-base">{review.name}</span>
          {review.country ? <span className="text-xs text-muted-foreground">{review.country}</span> : null}
        </span>
        <span className="shrink-0 text-right text-xs text-muted-foreground">
          {now === null ? "\u00A0" : relativeTime(review.date, now)}
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const now = useNow();
  const [showAll, setShowAll] = useState(false);
  const sorted = [...reviews].sort((a, b) => b.date.localeCompare(a.date));
  const visible = showAll ? sorted : sorted.slice(0, SHOW_FIRST);

  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          index="06"
          eyebrow="Client Reviews"
          title={
            <>
              What clients say on <em className="text-primary">Fiverr.</em>
            </>
          }
        />

        <Reveal className="mt-14">
          <a
            href={fiverr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-wrap items-center gap-x-5 gap-y-3 rounded-full border border-border-strong bg-card py-3 pl-3 pr-7 shadow-soft transition-colors hover:border-primary"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-2xl font-semibold text-primary-foreground">
              {fiverr.rating}
            </span>
            <span>
              <Stars rating={5} />
              <span className="mt-1 block font-semibold text-foreground transition-colors group-hover:text-primary">
                Rated {fiverr.rating} on Fiverr
              </span>
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>

        {/* Phones: swipeable row that snaps card by card. Tablet: 2 columns. Desktop: 3 columns. */}
        <Reveal className="mt-10">
          <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {visible.map((r, i) => (
              <div key={`${r.name}-${r.date}-${i}`} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
                <ReviewCard review={r} now={now} />
              </div>
            ))}
          </div>
        </Reveal>

        {sorted.length > SHOW_FIRST && (
          <Reveal className="mt-10 flex justify-center">
            <Button variant="line" size="xl" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show fewer reviews" : "Show more reviews"}
              <ChevronDown className={cn("transition-transform", showAll && "rotate-180")} />
            </Button>
          </Reveal>
        )}

        <Reveal className="mt-10">
          <FiverrButton label="See all reviews on Fiverr" />
        </Reveal>
      </div>
    </section>
  );
}
