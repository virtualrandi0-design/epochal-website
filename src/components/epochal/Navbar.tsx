import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("font-display text-2xl font-semibold tracking-[0.06em]", className)}>
      EPOCHAL<span className="text-orange">.</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <nav className="container-site flex h-18 items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button asChild variant="ink" className="hidden h-10 rounded-full px-5 text-xs sm:inline-flex">
            <a href="#contact">Contact Me</a>
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
        <div className="h-[calc(100dvh-4.5rem)] border-t border-border bg-background lg:hidden">
          <ul className="container-site flex flex-col pt-4">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-border py-5 font-display text-3xl"
                >
                  {l.label}
                  <span className="eyebrow text-orange">0{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="pt-8">
              <Button asChild variant="ink" size="xl" className="w-full">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact Me
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
