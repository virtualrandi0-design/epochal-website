import { useEffect, useRef, useState, type TouchEvent } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type LightboxProps = {
  images: string[];
  title: string;
  onClose: () => void;
};

/** Full-screen gallery: arrows, thumbnails, keyboard (← → Esc) and swipe on touch screens. */
export function Lightbox({ images, title, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = images.length;

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus();
    };
  }, [count, onClose]);

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchX.current;
    const end = e.changedTouches[0]?.clientX;
    touchX.current = null;
    if (start == null || end == null) return;
    const dx = end - start;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — image gallery`}
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95 text-ink-foreground backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="min-w-0 truncate font-display text-lg">{title}</p>
        <div className="flex shrink-0 items-center gap-4">
          <span className="font-mono text-xs tabular-nums text-ink-muted">
            {index + 1} / {count}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-border transition-colors hover:border-ink-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} — image ${index + 1} of ${count}`}
          className="max-h-full max-w-full rounded-[var(--radius-lg)] object-contain shadow-photo"
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/70 ring-1 ring-ink-border transition-colors hover:bg-primary sm:left-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/70 ring-1 ring-ink-border transition-colors hover:bg-primary sm:right-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto px-4 py-4">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-md border-2 transition-opacity sm:w-24",
                i === index ? "border-orange opacity-100" : "border-transparent opacity-55 hover:opacity-90",
              )}
            >
              <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
}
