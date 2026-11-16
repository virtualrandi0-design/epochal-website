import { useState } from "react";
import { ArrowUpRight, Play, Workflow, Clapperboard } from "lucide-react";
import { portfolio, type Project } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const categories = [
  { key: "automation", label: "AI Automation Projects", icon: Workflow },
  { key: "video", label: "AI Video Projects", icon: Clapperboard },
] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <Reveal delay={index * 100} className="card-premium group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        {playing && project.videoEmbedUrl ? (
          <iframe
            src={`${project.videoEmbedUrl}${project.videoEmbedUrl.includes("?") ? "&" : "?"}autoplay=1`}
            title={project.title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              width={1280}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            {project.videoEmbedUrl && (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${project.title}`}
                className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold transition-transform hover:scale-110"
              >
                <Play className="ml-1 h-6 w-6 fill-current" />
              </button>
            )}
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            View project <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-gold">
            Want something similar? <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]["key"]>("automation");
  const projects = portfolio[active];

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Portfolio"
            title={
              <>
                Selected <span className="text-gradient-gold">work.</span>
              </>
            }
            description="A look at automation systems and AI video productions crafted under the EPOCHAL name."
          />

          <div role="tablist" aria-label="Project categories" className="glass flex shrink-0 gap-1 rounded-full p-1.5">
            {categories.map((c) => (
              <button
                key={c.key}
                role="tab"
                aria-selected={active === c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:px-5",
                  active === c.key ? "bg-gradient-gold text-gold-foreground shadow-gold" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <c.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{c.label}</span>
                <span className="sm:hidden">{c.key === "automation" ? "Automation" : "Video"}</span>
              </button>
            ))}
          </div>
        </div>

        <div key={active} className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title + i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
