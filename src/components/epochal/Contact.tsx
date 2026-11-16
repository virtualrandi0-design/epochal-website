import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, services } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20";
const labelClass = "eyebrow mb-2 block text-[0.65rem] text-muted-foreground";

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
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={
            <>
              Let's build something <em className="text-primary">remarkable.</em>
            </>
          }
          description="Tell me about your business, your goals or your next idea. I'll get back to you personally."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className={labelClass}>Email me directly</p>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 break-all font-display text-2xl text-foreground underline decoration-orange decoration-2 underline-offset-[6px] transition-colors hover:text-primary sm:text-[1.7rem]"
            >
              {contact.email}
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-4 text-muted-foreground">{contact.responseNote}</p>

            <div className="mt-10 rounded-[var(--radius-xl)] bg-ink-glow p-7 text-ink-foreground">
              <Mail className="h-5 w-5 text-orange" />
              <p className="mt-4 font-display text-xl leading-snug">
                Automation, AI agents or a video project — every enquiry is answered by Emmanuel himself.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-[var(--radius-2xl)] border border-border bg-card p-6 shadow-soft sm:p-10 lg:col-span-8">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Your name</span>
                  <input name="name" autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
                </label>
                <label className="block">
                  <span className={labelClass}>Email address</span>
                  <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={fieldClass} />
                </label>
              </div>
              <label className="block">
                <span className={labelClass}>What do you need?</span>
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
                <span className={labelClass}>Project details</span>
                <textarea name="message" rows={5} placeholder="Tell me about your project…" className={`${fieldClass} resize-none`} />
              </label>

              {error && (
                <p className="text-sm font-medium text-destructive" role="alert">
                  {error}
                </p>
              )}
              {sent && !error && (
                <p className="text-sm font-medium text-primary" role="status">
                  Your email app should now open with your message ready to send.
                </p>
              )}

              <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">Opens your email app with the message filled in.</p>
                <Button type="submit" variant="brand" size="xl" className="w-full sm:w-auto">
                  Send Message <Send />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
