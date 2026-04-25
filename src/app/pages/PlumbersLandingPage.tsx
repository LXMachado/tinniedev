import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Code2,
  FileText,
  Gauge,
  Globe2,
  HardHat,
  Headphones,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
import { calendlyAuditUrl } from "../components/MobileStickyCTA";

const auditHref = calendlyAuditUrl;
const quoteHref = "mailto:hello@tinniedev.com?subject=Plumbing%20website%20quote%20request";

const heroBullets = [
  "Mobile-first design",
  "Click-to-call actions",
  "Fast load speed",
  "Quote request funnels",
  "SEO-ready structure",
];

const painPoints = [
  { title: "Slow on mobile", icon: Smartphone },
  { title: "No quote form", icon: FileText },
  { title: "Looks outdated", icon: TrendingDown },
  { title: "Low trust", icon: ShieldCheck },
  { title: "Hard to update", icon: Wrench },
  { title: "Not showing on Google", icon: Search },
];

const deliverables = [
  { title: "Modern premium website", icon: Sparkles },
  { title: "Emergency call CTAs", icon: Phone },
  { title: "Quote request funnel", icon: MessageSquareText },
  { title: "Service area pages", icon: MapPin },
  { title: "Google-ready SEO structure", icon: Globe2 },
  { title: "Fast secure hosting", icon: Gauge },
  { title: "Ongoing support available", icon: Headphones },
];

const processSteps = [
  { number: "01", title: "Audit", icon: Search, text: "Review your current site, lead flow and local search opportunities." },
  { number: "02", title: "Strategy", icon: BadgeCheck, text: "Map the pages, CTAs and quote path that suit your plumbing business." },
  { number: "03", title: "Build", icon: Code2, text: "Design and develop a fast, polished website with clean conversion paths." },
  { number: "04", title: "Launch + Support", icon: Rocket, text: "Go live cleanly with hosting, analytics and optional ongoing updates." },
];

const pricing = [
  {
    name: "Starter Website",
    price: "from $2,500",
    description: "For plumbers who need a sharp, credible website foundation.",
    features: ["Core service pages", "Mobile responsive build", "Contact and quote forms"],
  },
  {
    name: "Lead Generation Website",
    price: "from $5,500",
    description: "For teams that want stronger enquiry flow and local landing pages.",
    features: ["Quote request funnel", "Service area structure", "Lead tracking ready"],
    featured: true,
  },
  {
    name: "Custom Systems",
    price: "Quote",
    description: "For plumbing businesses needing portals, dashboards or automation.",
    features: ["Custom workflows", "CRM and tool integrations", "Business process automation"],
  },
];

const regions = ["Gold Coast", "Brisbane", "Sunshine Coast", "Tweed", "Logan", "Ipswich"];

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-card/30 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent/40"
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && <div className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</div>}
      <h2 className="text-3xl tracking-tight md:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function PlumbersLandingPage() {
  const pageUrl = "https://tinniedev.com/plumbers";
  const imageUrl = "https://tinniedev.com/alexandre-machado-australian-web-developer.png";
  
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Plumbing Websites | Web Design for Plumbers | TinnieDev</title>
        <meta name="description" content="Professional plumbing websites designed to generate more calls and quote requests. Fast, mobile-first web design for Australian plumbers with SEO-ready structure." />
        <meta name="keywords" content="plumbing websites, web design for plumbers, plumber website design, plumbing web design Australia, plumber SEO, plumbing lead generation" />
        <meta name="author" content="Alexandre Machado, TinnieDev" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Plumbing Websites | Professional Web Design for Plumbers | TinnieDev" />
        <meta property="og:description" content="High-converting plumbing websites designed to generate more emergency calls and quote requests. Mobile-first, fast-loading, SEO-optimized." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional plumbing website design by TinnieDev" />
        <meta property="og:site_name" content="TinnieDev" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:street_address" content="Gold Coast" />
        <meta property="og:region" content="QLD" />
        <meta property="og:country-name" content="Australia" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plumbing Websites | Professional Web Design for Plumbers" />
        <meta name="twitter:description" content="Fast, mobile-first plumbing websites that convert visitors into calls and quote requests." />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Professional plumbing website design by TinnieDev" />
        <meta name="twitter:site" content="@tinniedev" />
        
        {/* Additional Meta Tags */}
        <meta name="geo.region" content="AU-QLD" />
        <meta name="geo.placename" content="Gold Coast" />
        <meta name="geo.position" content="-28.0167;153.4000" />
        <meta name="ICBM" content="-28.0167, 153.4000" />
        
        {/* Structured Data - Plumbing Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "TinnieDev Plumbing Website Design",
            "url": pageUrl,
            "logo": "https://tinniedev.com/brand-monogram.png",
            "image": imageUrl,
            "description": "Professional plumbing website design and development services for Australian plumbing businesses. Fast, mobile-first websites that generate more calls and quote requests.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gold Coast",
              "addressRegion": "QLD",
              "addressCountry": "AU"
            },
            "areaServed": [
              "Gold Coast",
              "Brisbane",
              "Sunshine Coast",
              "Tweed",
              "Logan",
              "Ipswich",
              "Queensland",
              "Australia"
            ],
            "serviceType": "Plumbing Website Design",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Alexandre Machado",
              "url": "https://tinniedev.com",
              "description": "Gold Coast-based web developer building fast websites and lead generation systems for Australian service businesses."
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Website Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Starter Plumbing Website",
                    "description": "Mobile responsive plumbing website with core service pages and contact forms",
                    "price": "2500",
                    "priceCurrency": "AUD"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lead Generation Plumbing Website",
                    "description": "Conversion-focused plumbing website with quote funnel and service area pages",
                    "price": "5500",
                    "priceCurrency": "AUD"
                  }
                }
              ]
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            }
          })}
        </script>
        
        {/* Additional structured data for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes a good plumbing website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A good plumbing website is mobile-first, loads quickly, has clear call-to-action buttons for emergency calls, includes an easy-to-use quote request form, and is optimized for local SEO to appear in Google search results."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a plumbing website cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plumbing websites start from $2,500 for a starter website with core service pages. Lead generation websites with quote funnels and service area pages start from $5,500. Custom systems are quoted based on specific requirements."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        <section className="relative px-6 pb-20 pt-32 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.10),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                  <HardHat className="h-4 w-4 text-chart-3" />
                  Plumbing websites for Australian service businesses
                </div>
                <h1 className="max-w-4xl text-4xl tracking-tight md:text-6xl lg:text-7xl">
                  Websites for Plumbers That Generate More Calls &amp; Quote Requests
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  We help Australian plumbing businesses replace outdated websites with fast, modern systems built to convert visitors into real enquiries.
                </p>

                <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                  {heroBullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-chart-2" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href={auditHref}>Book Free Audit</PrimaryButton>
                  <SecondaryButton href="#demo">
                    <Globe2 className="h-4 w-4" />
                    View Plumbing Demo
                  </SecondaryButton>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span>Built in Australia</span>
                  <span>Direct Developer Access</span>
                  <span>Fast Turnaround</span>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-border/50 bg-card/40 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                  <div className="rounded-xl border border-border/40 bg-background/80 p-5">
                    <div className="flex items-center justify-between border-b border-border/30 pb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Emergency plumbing leads</div>
                        <div className="mt-1 text-2xl">Quote Funnel</div>
                      </div>
                      <div className="rounded-full bg-chart-2/15 p-3 text-chart-2">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="grid gap-3 py-5 sm:grid-cols-3">
                      {[
                        ["Calls", "+42%"],
                        ["Speed", "0.9s"],
                        ["Forms", "24/7"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-lg border border-border/30 bg-accent/20 p-4">
                          <div className="text-xs text-muted-foreground">{label}</div>
                          <div className="mt-1 text-2xl">{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {["Blocked drain repair", "Hot water replacement", "Emergency leak callout"].map((service, index) => (
                        <div key={service} className="flex items-center justify-between rounded-lg border border-border/30 bg-card/50 p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                              {index + 1}
                            </div>
                            <span className="text-sm">{service}</span>
                          </div>
                          <CalendarCheck className="h-4 w-4 text-chart-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-border/40 bg-background/90 p-4 shadow-xl backdrop-blur md:block">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-chart-2" />
                    <div>
                      <div className="text-sm">Local SEO ready</div>
                      <div className="text-xs text-muted-foreground">Built for your service areas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/30 px-6 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 text-center md:grid-cols-3">
            {[
              ["Australian-built", "Local context for service businesses"],
              ["Performance-first", "Fast pages, clean structure, clear CTAs"],
              ["Direct access", "Work with the developer building the site"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-border/30 bg-card/25 p-6">
                <div className="text-lg">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Is Your Website Costing You Jobs?" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item.title} className="flex items-center gap-4 rounded-xl border border-border/30 bg-card/30 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4 text-muted-foreground" />
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent/10 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="What TinnieDev Delivers for Plumbing Businesses" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((item) => (
                <div key={item.title} className="rounded-xl border border-border/30 bg-background/50 p-6 transition-colors hover:bg-card/60">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/50">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">Live demo</div>
              <h2 className="text-3xl tracking-tight md:text-5xl">See a High-Converting Plumbing Website Example</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We have built a premium plumbing demo showing what modern lead generation can look like.
              </p>
              <div className="mt-8">
                <PrimaryButton href="#contact">View Live Demo</PrimaryButton>
              </div>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card/30 p-4 backdrop-blur">
              <div className="aspect-[16/10] rounded-xl border border-border/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg">Premium Plumbing Co.</div>
                        <div className="text-xs text-muted-foreground">Emergency repairs • Hot water • Drainage</div>
                      </div>
                    </div>
                    <div className="hidden rounded-lg bg-chart-2/15 px-3 py-2 text-xs text-chart-2 sm:block">Call now</div>
                  </div>
                  <div className="max-w-xl">
                    <div className="text-3xl tracking-tight md:text-5xl">Fast plumbing help across Brisbane.</div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg bg-background/60 p-4 text-sm">Emergency call button</div>
                      <div className="rounded-lg bg-background/60 p-4 text-sm">Quote request form</div>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-border/40">
                    <div className="h-2 w-3/4 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-accent/10 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Simple 4-Step Process" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.title} className="rounded-xl border border-border/30 bg-background/50 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-4xl text-muted-foreground/30">{step.number}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/50">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Pricing" text="Clear starting points for plumbing businesses ready to improve trust, speed and enquiry flow." />
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-7 ${
                    plan.featured
                      ? "border-primary/60 bg-accent/30 shadow-xl shadow-primary/10"
                      : "border-border/30 bg-card/30"
                  }`}
                >
                  {plan.featured && <div className="mb-5 inline-flex rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">Best for lead generation</div>}
                  <h3 className="text-2xl">{plan.name}</h3>
                  <div className="mt-4 text-3xl">{plan.price}</div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                  <ul className="mt-7 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-chart-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.featured ? auditHref : quoteHref}
                    target={plan.featured ? "_blank" : undefined}
                    rel={plan.featured ? "noreferrer" : undefined}
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm transition-colors ${
                      plan.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {plan.featured ? "Book Free Audit" : "Request Quote"}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-accent/10 px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl border border-border/40 bg-card/30 p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border/30 bg-accent/20">
                <img
                  src="/alexandre-machado-australian-web-developer.png"
                  alt="Alexandre Machado, Gold Coast-based developer and founder of TinnieDev"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6 pt-24">
                  <div className="text-3xl">Alexandre Machado</div>
                  <div className="mt-2 text-sm text-muted-foreground">Gold Coast-based developer</div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">Founder trust</div>
              <p className="text-2xl leading-relaxed md:text-4xl">
                Work directly with Alexandre Machado, Gold Coast-based developer helping Australian service businesses grow with better websites and systems.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["No agency layers", "Fast communication", "Australian-based support", "Built for performance"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border/30 bg-background/50 p-4 text-sm">
                    <Check className="h-4 w-4 text-chart-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl tracking-tight md:text-6xl">Ready for a Website That Actually Brings Enquiries?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Get a direct review of your current website and a practical plan for turning more visitors into calls and quote requests.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href={auditHref}>Book Free Audit</PrimaryButton>
              <SecondaryButton href={quoteHref}>
                <Mail className="h-4 w-4" />
                Request Quote
              </SecondaryButton>
            </div>
          </div>
        </section>

        <footer className="border-t border-border/30 px-6 pb-28 pt-12 lg:px-8 lg:pb-12">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.4fr_1fr]">
            <div>
              <div className="flex items-center gap-3 text-xl">
                <img src="/brand-monogram.png" alt="TinnieDev monogram logo" className="h-8 w-10 object-contain" />
                <span>TinnieDev</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Premium websites, lead generation systems and custom business systems for Australian service businesses.
              </p>
            </div>
            <div>
              <div className="text-sm text-foreground">Service regions</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span key={region} className="rounded-full border border-border/40 bg-card/30 px-3 py-1 text-xs text-muted-foreground">
                    {region}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground md:text-right">
              <a href={auditHref} className="block hover:text-foreground">Book Free Audit</a>
              <a href={quoteHref} className="block hover:text-foreground">Request Quote</a>
              <a href="/privacy-policy.html" className="block hover:text-foreground">Privacy Policy</a>
              <a href="/terms-and-conditions.html" className="block hover:text-foreground">Terms &amp; Conditions</a>
              <div className="pt-2 text-xs">© 2026 TinnieDev. Gold Coast, Australia.</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}