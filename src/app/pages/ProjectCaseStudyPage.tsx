import { ArrowLeft, CalendarCheck, Check, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ProjectImage } from "../components/ProjectImage";
import { calendlyAuditUrl } from "../components/MobileStickyCTA";
import type { Project } from "../data/projects";
import { navigateTo } from "../lib/navigation";

type ProjectCaseStudyPageProps = {
  project: Project;
};

export function ProjectCaseStudyPage({ project }: ProjectCaseStudyPageProps) {
  const pageUrl = `https://tinniedev.com/projects/${project.slug}`;
  const heroVisual = project.visuals[0] ?? {
    title: project.title,
    image: project.thumbnail,
    alt: `${project.title} project preview`,
  };
  const overviewItems = [
    ["Project Type", project.overview.projectType],
    ["Industry", project.overview.industry],
    ["Location / Market", project.overview.market],
    ["Focus Areas", project.overview.focusAreas],
  ];

  return (
    <>
      <Helmet>
        <title>{project.pageTitle}</title>
        <meta name="description" content={project.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={project.pageTitle} />
        <meta property="og:description" content={project.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://tinniedev.com${project.thumbnail}`} />
        <meta property="og:site_name" content="TinnieDev" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.pageTitle} />
        <meta name="twitter:description" content={project.metaDescription} />
        <meta name="twitter:image" content={`https://tinniedev.com${project.thumbnail}`} />
      </Helmet>

      <main className="overflow-hidden">
        <section className="px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-border/40 bg-card/40 px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">
                {project.badge}
              </div>
              <h1 className="mb-6 text-4xl tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                {project.subtitle}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Visit Live Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-primary/25 px-5 py-3 text-sm font-medium text-muted-foreground">
                    Concept Build
                  </span>
                )}
                <a
                  href="/#work"
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo("/#work");
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card/50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Work
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border/30 bg-card/30 shadow-2xl">
                <ProjectImage
                  src={heroVisual.image}
                  alt={heroVisual.alt}
                  title={project.title}
                  className={`h-full w-full ${heroVisual.imageClassName ?? "object-cover"}`}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/30 bg-accent/10 px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            {overviewItems.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-border/30 bg-card/30 p-5">
                <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
                <div className="text-sm text-foreground">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-3xl tracking-tight md:text-4xl">The Challenge</h2>
              <p className="text-lg leading-8 text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="mb-5 text-3xl tracking-tight md:text-4xl">The Solution</h2>
              <div className="space-y-4">
                {project.solution.map((point) => (
                  <div key={point} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="project-visuals" className="bg-accent/10 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-3xl tracking-tight md:text-4xl">Project Visuals</h2>
              <p className="text-muted-foreground">
                A short visual set showing the brand direction, responsive layout, and key page
                presentation.
              </p>
            </div>
            <div className="space-y-6">
              <figure className="overflow-hidden rounded-xl border border-border/30 bg-card/30">
                <div className="aspect-[16/9] bg-background/50">
                  <ProjectImage
                    src={heroVisual.image}
                    alt={heroVisual.alt}
                    title={heroVisual.title}
                    className={`h-full w-full ${heroVisual.imageClassName ?? "object-cover"}`}
                  />
                </div>
                <figcaption className="border-t border-border/30 px-5 py-4">
                  <div className="text-sm text-foreground">{heroVisual.title}</div>
                  {heroVisual.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{heroVisual.description}</p>
                  )}
                </figcaption>
              </figure>

              <div className="grid items-start gap-6 md:grid-cols-3">
                {project.visuals.slice(1).map((item) => (
                  <figure
                    key={item.title}
                    className="overflow-hidden rounded-xl border border-border/30 bg-card/30"
                  >
                    <div className="flex aspect-[4/3] items-center justify-center bg-background/50">
                      <ProjectImage
                        src={item.image}
                        alt={item.alt}
                        title={item.title}
                        className={`h-full w-full ${item.imageClassName ?? "object-cover"}`}
                      />
                    </div>
                    <figcaption className="border-t border-border/30 px-5 py-4">
                      <div className="text-sm text-foreground">{item.title}</div>
                      {item.description && (
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-3xl tracking-tight md:text-4xl">Outcome</h2>
            <p className="text-lg leading-8 text-muted-foreground">{project.outcome}</p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-xl border border-border/30 bg-card/30 p-8 text-center shadow-2xl shadow-black/10 md:p-12">
            <h2 className="mb-4 text-3xl tracking-tight md:text-4xl">
              Need a website like this?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              TinnieDev builds fast, professional websites and web systems for Australian businesses
              that need stronger trust, clearer messaging, and better enquiry opportunities.
            </p>
            <a
              href={calendlyAuditUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Free Audit
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
