import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

/** Compact cobalt pill in the top-left of the navbar: the visitor's local time, ticking every second. */
export function LiveClock({ className }: { className?: string }) {
  // Starts empty so server HTML and the first browser render match; the real time fills in after mount.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const time = now ? `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}` : "--:--:--";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-3 py-1.5 text-primary-foreground shadow-soft",
        className,
      )}
    >
      <Clock className="h-3.5 w-3.5 shrink-0 opacity-75" aria-hidden="true" />
      <span className="leading-none">
        <time
          dateTime={now?.toISOString()}
          aria-label="Your local time"
          className="block font-mono text-xs font-semibold leading-none tracking-[0.1em] tabular-nums"
        >
          {time}
        </time>
        <span className="mt-1 hidden text-[0.6rem] italic leading-none opacity-80 sm:block">Time waits for no one.</span>
      </span>
    </div>
  );
}
