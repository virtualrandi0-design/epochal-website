import { useState } from "react";
import { ArrowUpRight, ImagePlus, Play } from "lucide-react";
import { projects, type Project } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const filters = ["All", "Automation", "Video"] as const;
type Filter = (typeof filters)[number];

function ProjectMedia({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false);
  const isVideo = project.category === "Video";

  if (playing && project.videoEmbedUrl) {
    return (
      <iframe
        src={`${project.videoEmbedUrl}${project.videoEmbedUrl.includes("?") ? "&" : "?"}autoplay=1`}
        title={project.title}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    );
  }

  return (
    <>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className={cn(
            "grain flex h-full w-full flex-col items-center justify-center gap-3",
            isVideo ? "bg-placeholder-ink text-ink-muted" : "bg-placeholder-blue text-primary",
          )}
        >
          {isVideo ? (
            <span className="grid h-16 w-16 place-items-center rounded-full border border-ink-border">
              <Play className="ml-1 h-6 w-6 text-orange" />
            </span>
          ) : (
            <ImagePlus className="h-8 w-8" />
          )}
          <span className="eyebrow text-[0.65rem]">{isVideo ? "Video placeholder" : "Project image placeholder"}</span>
        </div>
      )}
      {project.videoEmbedUrl && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${project.title}`}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-orange text-orange-foreground transition-transform hover:scale-105">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
        </button>
      )}
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 80} className="card-paper group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <ProjectMedia project={project} />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              project.category === "Video" ? "bg-orange-soft text-foreground" : "bg-primary-soft text-primary",
            )}
          >
            {project.category}
          </span>
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-2xl">{project.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
        <a
          href={project.link || "#contact"}
          {...(project.link ? { target: "_blank", rel: "noreferrer" } : {})}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          {project.link ? "View project" : "Want something similar?"} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          index="04"
          eyebrow="Selected Projects"
          title={
            <>
              Selected <em className="text-primary">work.</em>
            </>
          }
          description="A selection of automation systems and AI video productions created under the EPOCHAL name."
        />

        <div className="mt-12 flex lg:ml-[calc(33.333%+0.67rem)]">
          <div role="tablist" aria-label="Project categories" className="inline-flex gap-1 rounded-full border border-border-strong bg-card p-1">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                  active === f ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div key={active} className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((p, i) => (
            <ProjectCard key={p.title + i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
