import { Helmet } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { ValueComparison } from "./components/ValueComparison";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { WhyTinnieDev } from "./components/WhyTinnieDev";
import { FounderTrust } from "./components/FounderTrust";
import { FinalCTA } from "./components/FinalCTA";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
import { PlumbersLandingPage } from "./pages/PlumbersLandingPage";
import { getProjectBySlug } from "./data/projects";
import { ProjectCaseStudyPage } from "./pages/ProjectCaseStudyPage";
import { usePathname } from "./lib/navigation";

export default function App() {
  const pathname = usePathname();
  const isPlumbersPage = pathname === "/plumbers";
  const projectSlug = pathname.startsWith("/projects/") ? pathname.replace("/projects/", "") : "";
  const project = projectSlug ? getProjectBySlug(projectSlug) : undefined;

  return (
    <div className="dark min-h-screen overflow-x-hidden bg-[#0c0c0e] text-[#f6f6f7]">
      <Helmet>
        <meta name="theme-color" content="#0a0e17" />
        <meta name="color-scheme" content="dark" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Helmet>
      <LocalBusinessSchema />
      <Navigation />
      {isPlumbersPage ? (
        <PlumbersLandingPage />
      ) : project ? (
        <ProjectCaseStudyPage project={project} />
      ) : (
        <>
          <Helmet>
            <title>TinnieDev - Gold Coast Web Developer | High-Performance Websites</title>
            <meta name="description" content="Gold Coast-based web developer building fast, high-performance websites and lead generation systems for Australian service businesses. Direct developer access, proven results." />
            <meta name="keywords" content="web developer Gold Coast, website development, lead generation websites, Australian web developer, high-performance websites, web applications" />
            <link rel="canonical" href="https://tinniedev.com/" />
            <meta property="og:title" content="TinnieDev - Gold Coast Web Developer | High-Performance Websites & Lead Generation" />
            <meta property="og:description" content="Premium websites and lead generation systems for Australian service businesses. Direct developer access, fast performance, and proven conversion results." />
            <meta property="og:url" content="https://tinniedev.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://tinniedev.com/alexandre-machado-australian-web-developer.webp" />
            <meta property="og:site_name" content="TinnieDev" />
            <meta property="og:locale" content="en_AU" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="TinnieDev - Gold Coast Web Developer | High-Performance Websites" />
            <meta name="twitter:description" content="Building fast, conversion-focused websites for Australian service businesses." />
            <meta name="twitter:image" content="https://tinniedev.com/alexandre-machado-australian-web-developer.webp" />
            <meta name="twitter:site" content="@tinniedev" />
          </Helmet>
          <main>
            <Hero />
            <TrustBar />
            <Services />
            <ValueComparison />
            <Process />
            <Portfolio />
            <WhyTinnieDev />
            <FounderTrust />
            <FinalCTA />
          </main>
        </>
      )}
      {!isPlumbersPage && !project && <MobileStickyCTA />}
    </div>
  );
}
