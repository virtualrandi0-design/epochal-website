import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WORD = "EPOCHAL";

/** Full-screen animated welcome shown when the site opens. */
export function IntroScreen() {
  const [state, setState] = useState<"open" | "leaving" | "gone">("open");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (state === "open") {
      document.documentElement.style.overflow = "hidden";
      const t = setTimeout(() => buttonRef.current?.focus({ preventScroll: true }), 2600);
      return () => clearTimeout(t);
    }
    document.documentElement.style.overflow = "";
    return undefined;
  }, [state]);

  if (state === "gone") return null;

  const enter = () => {
    setState("leaving");
    window.scrollTo({ top: 0 });
    setTimeout(() => setState("gone"), 1000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to EPOCHAL"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-hero px-6",
        state === "leaving" && "intro-exit",
      )}
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="animate-spin-slow pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border-strong sm:h-[44rem] sm:w-[44rem]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <p className="intro-fade eyebrow text-gold" style={{ animationDelay: "0.1s" }}>
          Welcome to Epochal
        </p>

        <h1
          className="mt-6 font-display text-[15vw] font-bold leading-none tracking-tight sm:text-[8.5rem]"
          style={{ perspective: "800px" }}
          aria-label="EPOCHAL."
        >
          {WORD.split("").map((l, i) => (
            <span key={i} className="intro-letter" style={{ animationDelay: `${0.25 + i * 0.08}s` }}>
              {l}
            </span>
          ))}
          <span className="intro-letter text-gold" style={{ animationDelay: `${0.25 + WORD.length * 0.08}s` }}>
            .
          </span>
        </h1>

        <div className="intro-line mt-6 h-px w-48 bg-gradient-brand" style={{ animationDelay: "1s" }} />

        <p
          className="intro-fade mt-8 font-display text-2xl font-bold tracking-wide sm:text-4xl"
          style={{ animationDelay: "1.3s" }}
        >
          A NEW ERA HAS <span className="text-gradient-gold">ARRIVED.</span>
        </p>
        <p className="intro-fade mt-4 text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "1.6s" }}>
          Innovation. Automation. Creativity.
        </p>

        <div className="intro-fade mt-12" style={{ animationDelay: "2s" }}>
          <Button ref={buttonRef} variant="gold" size="xl" onClick={enter} className="group">
            ENTER EXPERIENCE
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <p className="intro-fade eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] text-muted-foreground sm:text-[0.72rem]" style={{ animationDelay: "2.2s" }}>
        AI Automation · AI Video Production
      </p>
    </div>
  );
}
