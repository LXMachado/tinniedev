import { ArrowRight, BellRing, ChartColumnBig, CircleDot, Gauge, Smartphone, Sparkles } from "lucide-react";
import { calendlyAuditUrl } from "./MobileStickyCTA";
import { Reveal } from "./home/Reveal";
import { cn } from "./ui/utils";

const heroCards = [
  { icon: Gauge, label: "Performance", value: "Fast Load", tone: "text-[#D3F263]" },
  { icon: BellRing, label: "Enquiries", value: "Lead Ready", tone: "text-[#7be0b0]" },
  { icon: ChartColumnBig, label: "Tracking", value: "Analytics", tone: "text-[#f7c56a]" },
  { icon: Smartphone, label: "Mobile", value: "Responsive", tone: "text-[#c19cff]" },
];

const trustPills = ["Fast Performance", "Mobile Ready", "Lead Tracking", "SEO Ready", "Local Support"];

const primaryCtaClassName =
  "inline-flex items-center justify-center gap-2 rounded-[13px] bg-[#D3F263] px-6 py-3.5 text-sm font-semibold text-[#0a0a0c] shadow-[0_18px_40px_-16px_rgba(211,242,99,0.72)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E3F78A]";

const secondaryCtaClassName =
  "inline-flex items-center justify-center rounded-[13px] border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-[#f6f6f7] transition duration-300 hover:bg-white/[0.09]";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,134,247,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_34%)]" />
      <div className="pointer-events-none absolute left-1/2 top-14 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#D3F263]/16 blur-[72px] md:h-[28rem] md:w-[28rem] md:blur-[110px]" />

      <div className="relative mx-auto grid max-w-[1180px] gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal className="max-w-[36rem]" disabled>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#EEF9BD]">
            <Sparkles className="h-3.5 w-3.5 text-[#D3F263]" />
            Premium local web development
          </div>
          <h1 className="max-w-[11ch] text-[clamp(3.35rem,7.1vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#f6f6f7]">
            Websites that look sharp, load fast, and bring enquiries.
          </h1>

          <p className="mt-7 max-w-[35rem] text-lg leading-8 text-[#9a9aa2]">
            TinnieDev builds high-performance websites, lead generation systems, and custom
            business tools for Australian businesses that want more enquiries and less friction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={calendlyAuditUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(primaryCtaClassName, "group")}
            >
              Book Free Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#pricing" className={secondaryCtaClassName}>
              View Pricing
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustPills.map((pill, index) => (
              <Reveal key={pill} delay={index * 70} className="contents">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-[13px] text-[#c8c8ce]">
                  <CircleDot className="h-3.5 w-3.5 text-[#D3F263]" />
                  {pill}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal disabled>
          <div className="relative mx-auto w-full max-w-[34rem] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-md md:backdrop-blur-xl">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="rounded-[24px] border border-white/8 bg-[#0f1015]/92 p-5 md:p-6">
              <div className="flex items-center justify-between rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#8a8a92]">
                    Active setup
                  </div>
                  <div className="mt-2 text-lg font-semibold text-[#f4f4f6]">
                    Premium website system
                  </div>
                </div>
                <div className="rounded-full border border-[#D3F263]/20 bg-[#D3F263]/12 px-3 py-1 text-xs font-medium text-[#DDF589]">
                  Local support
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {heroCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[20px] border border-white/8 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/14"
                  >
                    <card.icon className={cn("mb-4 h-5 w-5", card.tone)} />
                    <div className="text-[12px] uppercase tracking-[0.22em] text-[#80808a]">
                      {card.label}
                    </div>
                    <div className="mt-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-[#f6f6f7]">
                      {card.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[22px] border border-white/8 bg-[linear-gradient(135deg,rgba(79,134,247,0.14),rgba(255,255,255,0.02))] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.22em] text-[#8a8a92]">
                      Support
                    </div>
                    <div className="mt-2 text-[1.35rem] font-semibold tracking-[-0.03em] text-[#f6f6f7]">
                      Direct developer access
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-[16px] border border-[#D3F263]/30 bg-[#D3F263]/12" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
