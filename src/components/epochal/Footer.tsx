import { brand, contact, navLinks } from "@/content/site";
import { Logo } from "./Navbar";

export function Footer() {
  return (
    <footer className="bg-ink-glow text-ink-foreground">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Logo className="text-3xl" />
          <p className="mt-4 max-w-sm text-ink-muted">
            {brand.headline[0]} {brand.headline[1]}
          </p>
        </div>
        <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
          <p className="eyebrow text-[0.65rem] text-ink-muted">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm transition-colors hover:text-orange">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <p className="eyebrow text-[0.65rem] text-ink-muted">Contact</p>
          <a href={`mailto:${contact.email}`} className="mt-4 block break-all text-sm transition-colors hover:text-orange">
            {contact.email}
          </a>
        </div>
      </div>
      <div className="container-site flex flex-col gap-2 border-t border-ink-border py-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.brand}. All rights reserved.
        </p>
        <p>Founded by {brand.name}.</p>
      </div>
    </footer>
  );
}
