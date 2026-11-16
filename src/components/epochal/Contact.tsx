import { useState, type FormEvent } from "react";
import { Instagram, Linkedin, Mail, MessageCircle, Send, Twitter, Youtube, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, services } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const socialIcons: Record<(typeof contact.socials)[number]["icon"], LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

const fieldClass =
  "w-full rounded-xl border border-input bg-navy-deep/60 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary-glow focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const subject = `New project enquiry${service ? ` — ${service}` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service || "Not specified"}\n\n${message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            index="07"
            eyebrow="Contact"
            title={
              <>
                Let's build your <span className="text-gradient-gold">new era.</span>
              </>
            }
            description="Tell me about your business, your goals or your next big idea. I'll get back to you as soon as possible."
          />

          <Reveal delay={100} className="mt-10 space-y-4">
            <a href={`mailto:${contact.email}`} className="card-premium flex items-center gap-5 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-electric">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-[0.6rem] text-muted-foreground">Email</span>
                <span className="block truncate font-semibold">{contact.email}</span>
              </span>
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="card-premium flex items-center gap-5 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-[0.6rem] text-muted-foreground">WhatsApp</span>
                <span className="block truncate font-semibold">{contact.whatsappDisplay}</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={200} className="mt-8 flex flex-wrap gap-3">
            {contact.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-border-strong text-muted-foreground transition-all hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </Reveal>
        </div>

        <Reveal delay={150} className="glass rounded-[calc(var(--radius)+12px)] p-6 shadow-card sm:p-10">
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Your name</span>
                <input name="name" autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Email address</span>
                <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={fieldClass} />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">What do you need?</span>
              <select name="service" defaultValue="" className={fieldClass}>
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Project details</span>
              <textarea name="message" rows={5} placeholder="Tell me about your project…" className={`${fieldClass} resize-none`} />
            </label>

            {error && <p className="text-sm font-medium text-destructive" role="alert">{error}</p>}
            {sent && !error && (
              <p className="text-sm font-medium text-gold" role="status">
                Your email app should now open with your message ready to send.
              </p>
            )}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button type="submit" variant="gold" size="xl" className="flex-1">
                Send Message <Send />
              </Button>
              <Button asChild variant="glass" size="xl" className="flex-1">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
