import { useState, useEffect } from "react";
import { calendlyAuditUrl } from "./MobileStickyCTA";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = window.location.pathname === "/";
  const sectionHref = (sectionId: string) => (isHomePage ? `#${sectionId}` : `/#${sectionId}`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 text-xl tracking-tight text-foreground">
            <img
              src="/brand-monogram.png"
              alt="TinnieDev monogram"
              className="h-8 w-10 object-contain"
            />
            <span>TinnieDev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href={sectionHref("process")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </a>
            <a
              href={sectionHref("pricing")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href={sectionHref("work")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href={sectionHref("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href={sectionHref("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href={calendlyAuditUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
          >
            Free Audit
          </a>
        </div>
      </div>
    </nav>
  );
}
