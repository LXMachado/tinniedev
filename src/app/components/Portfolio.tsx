import { ExternalLink } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "Mermaid Plumbing Website",
      category: "LOCAL SERVICE BUSINESS",
      description: "A fast, mobile-first plumbing website built for local search, trust, and quote enquiries.",
      cta: "View Case Study",
      href: "/projects/plumber-website",
      image: "/images/projects/mermaid-plumbing-thumbnail.webp",
    },
    {
      title: "Physio Clinic Booking Site",
      category: "Allied Health",
      description: "Patient portal with online bookings and appointment management",
      cta: "View Project",
    },
    {
      title: "Lead Generation Landing Page",
      category: "Marketing Campaign",
      description: "High-conversion page with A/B testing and CRM integration",
      cta: "View Project",
    },
    {
      title: "Shopify Product Store",
      category: "E-commerce",
      description: "Custom theme with inventory sync and payment processing",
      cta: "View Project",
    },
    {
      title: "Custom Admin Dashboard",
      category: "Business System",
      description: "Real-time reporting and workflow automation platform",
      cta: "View Project",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Recent Work</h2>
          <p className="text-lg text-muted-foreground">
            Professional builds across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card/30 border border-border/30 rounded-2xl overflow-hidden hover:border-border/60 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 via-chart-2/20 to-chart-3/20" />
                    <div className="relative text-6xl opacity-10">
                      {index + 1}
                    </div>
                  </>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <a
                  href={project.href ?? "#work"}
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  {project.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
