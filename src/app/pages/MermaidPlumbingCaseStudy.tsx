import { ArrowLeft, CalendarCheck, Check, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { calendlyAuditUrl } from "../components/MobileStickyCTA";

const projectDetails = [
  ["Project Type", "Local service business website"],
  ["Industry", "Plumbing / Trades"],
  ["Location", "Mermaid Beach, Gold Coast"],
  ["Focus", "Branding, responsive website design, local trust, quote enquiries, mobile-first UX"],
];

const solutionPoints = [
  "Created a branded visual direction inspired by Mermaid Beach and the Gold Coast.",
  "Designed a clear hero section with immediate service relevance.",
  "Added strong calls-to-action for quote enquiries.",
  "Structured the page for mobile users first.",
  "Kept the design simple, fast, and easy to navigate.",
];

const galleryItems = [
  {
    title: "Homepage desktop screenshot",
    image: "/images/projects/mermaid-plumbing-thumbnail.webp",
    description: "Desktop and mobile mockup showing the overall branded website direction.",
  },
  {
    title: "Mobile screenshot",
    image: "/images/projects/mermaid-plumbing-mobile.webp",
    description: "Mobile-first hero, trust card, and enquiry actions.",
    imageClassName: "object-contain p-6 md:p-8",
  },
  {
    title: "Logo / favicon preview",
    image: "/images/projects/mermaid-plumbing-logo-preview.webp",
    description: "Brand mark and app-style icon treatment for local recognition.",
    imageClassName: "object-cover",
  },
  {
    title: "Lead enquiry section screenshot",
    image: "/images/projects/mermaid-plumbing-hero.webp",
    description: "Clear service relevance, trust signals, and quote-focused calls to action.",
  },
];

export function MermaidPlumbingCaseStudy() {
  const pageUrl = "https://tinniedev.com/projects/plumber-website";
  const imageUrl = "https://tinniedev.com/images/projects/mermaid-plumbing-hero.webp";

  return (
    <>
      <Helmet>
        <title>Mermaid Plumbing Website Case Study | TinnieDev</title>
        <meta
          name="description"
          content="A local plumbing website case study by TinnieDev, focused on branding, mobile-first design, local trust, and quote enquiries for a Gold Coast service business."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Mermaid Plumbing Website Case Study | TinnieDev" />
        <meta
          property="og:description"
          content="A local plumbing website case study by TinnieDev, focused on branding, mobile-first design, local trust, and quote enquiries for a Gold Coast service business."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="TinnieDev" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mermaid Plumbing Website Case Study | TinnieDev" />
        <meta
          name="twitter:description"
          content="A local plumbing website case study focused on branding, mobile-first design, local trust, and quote enquiries."
        />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <main className="overflow-hidden">
        <section className="px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-border/40 bg-card/40 px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">
                Featured Project
              </div>
              <h1 className="mb-6 text-4xl tracking-tight md:text-6xl">
                Mermaid Plumbing Website
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                A branded local plumbing website concept built for a Gold Coast service business,
                focused on fast loading, clear trust signals, and strong quote enquiry flow.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://mermaidplumbing.com.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Visit Live Website
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="/#work"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card/50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Projects
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <img
                src="/images/projects/mermaid-plumbing-hero.webp"
                alt="Mermaid Plumbing website shown across desktop and mobile devices"
                className="w-full rounded-xl border border-border/30 bg-card/30 shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/30 bg-accent/10 px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectDetails.map(([label, value]) => (
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
                Local trade businesses often rely on referrals, Google searches, and quick mobile
                enquiries. The website needed to feel trustworthy, local, and easy to use, while
                avoiding a generic trade-template look.
              </p>
            </div>
            <div>
              <h2 className="mb-5 text-3xl tracking-tight md:text-4xl">The Solution</h2>
              <div className="space-y-4">
                {solutionPoints.map((point) => (
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
                A small visual set showing the brand direction, desktop experience, mobile layout,
                and enquiry-focused presentation.
              </p>
            </div>
            <div className="space-y-6">
              <figure className="overflow-hidden rounded-xl border border-border/30 bg-card/30">
                <div className="bg-background/50">
                  <img
                    src={galleryItems[0].image}
                    alt={galleryItems[0].title}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="border-t border-border/30 px-5 py-4">
                  <div className="text-sm text-foreground">{galleryItems[0].title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{galleryItems[0].description}</p>
                </figcaption>
              </figure>

              <div className="grid items-start gap-6 md:grid-cols-3">
                {galleryItems.slice(1).map((item) => (
                  <figure
                    key={item.title}
                    className="overflow-hidden rounded-xl border border-border/30 bg-card/30"
                  >
                    <div className="flex aspect-[4/3] items-center justify-center bg-background/50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`h-full w-full ${item.imageClassName ?? "object-cover"}`}
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="border-t border-border/30 px-5 py-4">
                      <div className="text-sm text-foreground">{item.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
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
            <p className="text-lg leading-8 text-muted-foreground">
              The result is a clean, local-focused website that presents Mermaid Plumbing as
              professional, approachable, and easy to contact across desktop and mobile.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-xl border border-border/30 bg-card/30 p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl tracking-tight md:text-4xl">
              Need a website like this for your local business?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              TinnieDev builds fast, professional websites for Australian service businesses that
              need better visibility, stronger trust, and more enquiry opportunities.
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
