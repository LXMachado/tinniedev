import { ArrowRight, Mail } from "lucide-react";
import { calendlyAuditUrl } from "./MobileStickyCTA";
import { Reveal } from "./home/Reveal";
import { cn } from "./ui/utils";

const primaryCtaClassName =
  "inline-flex items-center gap-2 rounded-[13px] bg-[#D3F263] px-7 py-4 text-base font-semibold text-[#0a0a0c] shadow-[0_18px_40px_-16px_rgba(211,242,99,0.72)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E3F78A]";

const secondaryCtaClassName =
  "inline-flex items-center gap-2 rounded-[13px] border border-white/10 bg-white/[0.05] px-7 py-4 text-base font-medium text-[#f6f6f7] transition duration-300 hover:bg-white/[0.1]";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-0 pt-[7.5rem] lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[56rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,242,99,0.16),transparent_64%)] blur-[28px]" />
      <div className="relative mx-auto max-w-[780px] text-center">
        <Reveal>
          <h2 className="text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-[#f6f6f7]">
            Ready for a website that actually works?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-[35rem] text-lg leading-8 text-[#9a9aa2]">
            Let's discuss where your current website is losing opportunities and how to improve it.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={calendlyAuditUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(primaryCtaClassName, "group")}
            >
              Book Free Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="mailto:hello@tinniedev.com" className={secondaryCtaClassName}>
              <Mail className="h-5 w-5" />
              Send Enquiry
            </a>
          </div>
        </Reveal>

        <div className="mt-[4.5rem] border-t border-white/7 pb-12 pt-12">
          <div className="flex flex-col items-center gap-3 text-sm text-[#8a8a92]">
            <div className="flex items-center gap-3">
              <img
                src="/brand-monogram.png"
                alt="TinnieDev"
                className="h-6 w-6 rounded-[7px] object-cover"
              />
              <span className="font-semibold text-[#c2c2c8]">TinnieDev</span>
            </div>
            <div>© 2026 TinnieDev. Gold Coast, Australia.</div>
            <div className="text-[12.5px]">Opening hours: Monday to Friday, 9:00 AM to 5:00 PM (AEST).</div>
            <div className="mt-1 flex items-center gap-4 text-[12.5px]">
              <a href="/privacy-policy.html" className="transition-colors hover:text-[#f6f6f7]">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions.html" className="transition-colors hover:text-[#f6f6f7]">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
