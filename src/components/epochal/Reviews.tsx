import { MessageSquareQuote, Star } from "lucide-react";
import { fiverr, reviews, type Review } from "@/content/site";
import { cn } from "@/lib/utils";
import { FiverrButton } from "./FiverrButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <span className={cn("flex items-center gap-0.5", className)} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={cn("h-4 w-4", i < rating ? "fill-orange text-orange" : "text-border-strong")} />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-[var(--radius-xl)] border border-border bg-card p-7 shadow-soft">
      <Stars rating={review.rating} />
      <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-foreground">“{review.text}”</blockquote>
      <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
        <span>
          <span className="block font-display text-xl">{review.name}</span>
          <span className="text-sm text-muted-foreground">{review.country}</span>
        </span>
        <span className="text-right text-sm text-muted-foreground">{review.date}</span>
      </figcaption>
    </figure>
  );
}

function PlaceholderCard() {
  return (
    <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-[var(--radius-xl)] border border-dashed border-border-strong bg-card/50 p-7 text-center">
      <MessageSquareQuote className="h-7 w-7 text-primary" />
      <p className="mt-4 font-display text-2xl">Review coming soon</p>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground">Client feedback from Fiverr will appear here.</p>
    </div>
  );
}

export function Reviews() {
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name + i} delay={(i % 3) * 80}>
              <ReviewCard review={r} />
            </Reveal>
          ))}
          {reviews.length === 0 && (
            <Reveal>
              <PlaceholderCard />
            </Reveal>
          )}
        </div>

        <Reveal className="mt-10">
          <FiverrButton label="See all reviews on Fiverr" />
        </Reveal>
      </div>
    </section>
  );
}
