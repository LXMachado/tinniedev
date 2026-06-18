import { Check } from "lucide-react";
import { Reveal } from "./home/Reveal";

const trustPoints = [
  "Direct communication",
  "Australian based",
  "Fast turnaround",
  "Ongoing support",
];

export function FounderTrust() {
  return (
    <section id="founder" className="bg-[#0f1014] px-6 py-[6.5rem] lg:px-8">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="rounded-[24px] border border-white/8 bg-white/[0.025] p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-white/8 bg-[#15161b]">
            <img
              src="/alexandre-machado-australian-web-developer.png"
              alt="Alexandre Machado, founder and developer at TinnieDev"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/95 via-[#0c0c0e]/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 pt-24">
              <div className="text-[26px] font-semibold tracking-[-0.03em] text-[#f6f6f7]">
                Alexandre Machado
              </div>
              <div className="mt-2 text-sm text-[#9a9aa2]">
                Founder & Developer, TinnieDev
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D3F263]">
            Founder trust
          </div>
          <h2 className="text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-[#f6f6f7]">
            Meet the Founder
          </h2>
          <p className="mt-6 max-w-[35rem] text-lg leading-8 text-[#9a9aa2]">
            Work directly with Alexandre Machado, Gold Coast-based developer helping Australian service businesses grow with fast websites and custom systems.
          </p>

          <div className="mt-8 grid max-w-[32rem] gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-[14px] border border-white/8 bg-white/[0.025] p-4 text-sm text-[#dcdce0]"
              >
                <Check className="h-4 w-4 text-[#34d399]" />
                {point}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
