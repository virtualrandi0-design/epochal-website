import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/** Slim bar above the navbar: the visitor's local time, ticking every second. */
export function LiveClock() {
  // Starts empty so server HTML and the first browser render match; the real time fills in after mount.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const time = now ? `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}` : "--:--:--";

  return (
    <div className="flex h-10 flex-col items-center justify-center bg-ink text-ink-foreground">
      <time
        dateTime={now?.toISOString()}
        aria-label="Your local time"
        className="font-mono text-sm font-medium leading-none tracking-[0.12em] tabular-nums"
      >
        {time}
      </time>
      <p className="mt-1 text-[0.68rem] italic leading-none text-ink-muted">Time waits for no one.</p>
    </div>
  );
}
