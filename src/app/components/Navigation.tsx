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
          ? "border-b border-white/8 bg-[#0c0c0e]/78 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 text-xl tracking-tight text-[#f6f6f7]">
            <img
              src="/brand-monogram.png"
              alt="TinnieDev monogram"
              className="h-9 w-10 rounded-[10px] object-contain"
            />
            <span className="font-medium tracking-[-0.03em]">TinnieDev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href={sectionHref("process")}
              className="text-sm text-[#9a9aa2] transition-colors hover:text-[#f6f6f7]"
            >
              Process
            </a>
            <a
              href={sectionHref("pricing")}
              className="text-sm text-[#9a9aa2] transition-colors hover:text-[#f6f6f7]"
            >
              Pricing
            </a>
            <a
              href={sectionHref("work")}
              className="text-sm text-[#9a9aa2] transition-colors hover:text-[#f6f6f7]"
            >
              Work
            </a>
            <a
              href={sectionHref("about")}
              className="text-sm text-[#9a9aa2] transition-colors hover:text-[#f6f6f7]"
            >
              About
            </a>
            <a
              href={sectionHref("contact")}
              className="text-sm text-[#9a9aa2] transition-colors hover:text-[#f6f6f7]"
            >
              Contact
            </a>
          </div>

          <a
            href={calendlyAuditUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[13px] bg-[#D3F263] px-5 py-2.5 text-sm font-semibold text-[#0a0a0c] shadow-[0_12px_28px_-14px_rgba(211,242,99,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E3F78A]"
          >
            Free Audit
          </a>
        </div>
      </div>
    </nav>
  );
}
