import { ExternalLink } from "lucide-react";
import { ProjectImage } from "./ProjectImage";
import { projects } from "../data/projects";
import { SectionHeading } from "./home/SectionHeading";
import { Reveal } from "./home/Reveal";
import { navigateTo } from "../lib/navigation";

export function Portfolio() {
  return (
    <section id="work" className="bg-[#101116] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="Work"
          title="Recent Work"
          text="Selected websites, stores, and web systems for Australian businesses"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 80}
            >
              <a
                href={`/projects/${project.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(`/projects/${project.slug}`);
                }}
                className="group block overflow-hidden rounded-[26px] border border-white/8 bg-white/[0.025] shadow-[0_24px_60px_-38px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1.5 hover:border-white/14"
              >
                <div className="relative aspect-[1.18] overflow-hidden bg-gradient-to-br from-[#12151d] to-[#0d0e12]">
                  <ProjectImage
                    src={project.thumbnail}
                    alt={`${project.title} project thumbnail`}
                    title={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-80 transition duration-300 group-hover:opacity-95" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#f0f0f2] backdrop-blur">
                    {project.badge}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#8a8a92]">
                    {project.category}
                  </div>
                  <h3 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-[#f6f6f7]">
                    {project.title}
                  </h3>
                  <p className="mb-5 mt-3 text-sm leading-6 text-[#9a9aa2]">
                    {project.cardDescription}
                  </p>
                  <span className="flex items-center gap-2 text-sm font-medium text-[#D3F263] transition-all group-hover:gap-3">
                    View Case Study
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
