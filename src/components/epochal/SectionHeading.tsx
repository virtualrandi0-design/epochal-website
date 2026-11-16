import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/** Section header on the 12-column grid: label in the first 4 columns, title in the last 8. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "grid gap-6 border-t pt-6 lg:grid-cols-12 lg:gap-8",
        dark ? "border-ink-border" : "border-border-strong",
      )}
    >
      <div className="eyebrow flex items-center gap-3 lg:col-span-4">
        <span className="text-orange">{index}</span>
        <span className={cn("h-px w-8", dark ? "bg-ink-border" : "bg-border-strong")} />
        <span className={dark ? "text-ink-muted" : "text-muted-foreground"}>{eyebrow}</span>
      </div>
      <div className="lg:col-span-8">
        <h2 className="text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">{title}</h2>
        {description && (
          <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", dark ? "text-ink-muted" : "text-muted-foreground")}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
