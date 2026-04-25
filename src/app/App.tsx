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

export default function App() {
  const isPlumbersPage = window.location.pathname === "/plumbers";

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <LocalBusinessSchema />
      <Navigation />
      {isPlumbersPage ? (
        <PlumbersLandingPage />
      ) : (
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
      )}
      {!isPlumbersPage && <MobileStickyCTA />}
    </div>
  );
}
