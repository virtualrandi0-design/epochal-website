import { ArrowUp } from "lucide-react";
import { brand, navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-navy">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_auto]">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-[0.12em]">
              EPOCHAL<span className="text-gold">.</span>
            </p>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Innovation. Automation. Creativity. — AI automation and AI video production for brands entering a new era.
            </p>
            <p className="mt-6 text-sm">
              <span className="text-muted-foreground">Founder — </span>
              <span className="font-semibold">{brand.name}</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-gold">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#top"
            className="grid h-14 w-14 place-items-center self-start rounded-full bg-gradient-gold text-gold-foreground shadow-gold transition-transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>

        <p
          aria-hidden="true"
          className="text-outline mt-16 select-none text-center font-display text-[16vw] font-bold leading-[0.8] lg:text-[12rem]"
        >
          EPOCHAL
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} EPOCHAL. All rights reserved.</p>
          <p>Designed for a new era.</p>
        </div>
      </div>
    </footer>
  );
}
