import { MessageCircle } from "lucide-react";
import { whatsappHref } from "./Contact";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
