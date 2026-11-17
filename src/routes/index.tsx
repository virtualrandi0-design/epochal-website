import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/epochal/Navbar";
import { Hero } from "@/components/epochal/Hero";
import { About } from "@/components/epochal/About";
import { AutomationServices, VideoServices } from "@/components/epochal/Services";
import { Projects } from "@/components/epochal/Projects";
import { Tools } from "@/components/epochal/Tools";
import { Reviews } from "@/components/epochal/Reviews";
import { Contact } from "@/components/epochal/Contact";
import { Footer } from "@/components/epochal/Footer";

const title = "EPOCHAL — Emmanuel | AI Automation & AI Video Production";
const description =
  "Emmanuel, founder of EPOCHAL, builds intelligent systems with AI automation and AI agents, and creates powerful visual experiences with AI video production.";

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
      <Navbar />
      <main>
        <Hero />
        <About />
        <AutomationServices />
        <VideoServices />
        <Projects />
        <Tools />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
