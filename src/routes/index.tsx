import { createFileRoute } from "@tanstack/react-router";
import { IntroScreen } from "@/components/epochal/IntroScreen";
import { Navbar } from "@/components/epochal/Navbar";
import { Hero } from "@/components/epochal/Hero";
import { About } from "@/components/epochal/About";
import { Services } from "@/components/epochal/Services";
import { Portfolio } from "@/components/epochal/Portfolio";
import { Tools } from "@/components/epochal/Tools";
import { WhyChoose } from "@/components/epochal/WhyChoose";
import { Testimonials } from "@/components/epochal/Testimonials";
import { Contact } from "@/components/epochal/Contact";
import { Footer } from "@/components/epochal/Footer";
import { WhatsAppFloat } from "@/components/epochal/WhatsAppFloat";

const title = "EPOCHAL — Emmanuel | AI Automation & AI Video Production";
const description =
  "Emmanuel, founder of EPOCHAL, builds smarter businesses with AI automation and creates powerful visual experiences with cinematic AI video.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <IntroScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Tools />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
