import { marqueeTools } from "@/content/site";

/** Slow-scrolling strip of tools under the hero. The list is doubled so the loop is seamless. */
export function ToolMarquee() {
  const items = (dup: boolean) =>
    marqueeTools.map((t) => (
      <li
        key={`${t}-${dup}`}
        className={dup ? "marquee-dup flex items-center gap-10 pr-10" : "flex items-center gap-10 pr-10"}
        aria-hidden={dup || undefined}
      >
        <span className="whitespace-nowrap font-display text-2xl text-foreground/85 sm:text-3xl">{t}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      </li>
    ));

  return (
    <div className="marquee mt-4 overflow-hidden border-y border-border py-6" aria-label="Tools I work with">
      <ul className="marquee-track">
        {items(false)}
        {items(true)}
      </ul>
    </div>
  );
}
