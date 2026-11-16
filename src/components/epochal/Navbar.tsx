import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("font-display text-xl font-extrabold tracking-[0.12em]", className)}>
      EPOCHAL<span className="text-gold">.</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "border-b border-border bg-navy-deep/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:text-foreground hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button asChild variant="gold" className="hidden rounded-full px-5 sm:inline-flex">
            <a href="#contact">Let's Talk</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border-strong lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="h-[calc(100dvh-4.5rem)] border-t border-border bg-navy-deep px-6 pb-10 pt-6 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l, i) => (
              <li key={l.href} className="intro-fade" style={{ animationDelay: `${i * 0.05}s` }}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border py-5 font-display text-3xl font-bold"
                >
                  {l.label}
                  <span className="eyebrow text-gold">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="gold" size="xl" className="mt-8 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Let's Talk
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
