import { ExternalLink } from "lucide-react";
import { ProjectImage } from "./ProjectImage";
import { projects } from "../data/projects";

export function Portfolio() {
  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Recent Work</h2>
          <p className="text-lg text-muted-foreground">
            Selected websites, stores, and web systems for Australian businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-border/30 bg-card/30 shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:bg-card/45 hover:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/30 to-accent/10">
                <ProjectImage
                  src={project.thumbnail}
                  alt={`${project.title} project thumbnail`}
                  title={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-background/75 px-3 py-1 text-[11px] uppercase tracking-wider text-foreground backdrop-blur">
                  {project.badge}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.cardDescription}
                </p>
                <span className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
