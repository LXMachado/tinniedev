import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { ValueComparison } from "./components/ValueComparison";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { WhyTinnieDev } from "./components/WhyTinnieDev";
import { FinalCTA } from "./components/FinalCTA";
import { PlumbersLandingPage } from "./pages/PlumbersLandingPage";

export default function App() {
  const isPlumbersPage = window.location.pathname === "/plumbers";

  return (
    <div className="dark min-h-screen bg-background text-foreground">
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
          <FinalCTA />
        </main>
      )}
    </div>
  );
}
