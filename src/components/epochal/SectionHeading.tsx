import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3 text-gold", align === "center" && "justify-center")}>
        <span className="eyebrow">{index}</span>
        <span className="h-px w-10 bg-gold/60" />
        <span className="eyebrow text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
