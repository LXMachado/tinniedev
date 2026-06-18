import { X, Check } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { SectionHeading } from "./home/SectionHeading";

export function ValueComparison() {
  const problems = [
    "Slow mobile performance",
    "Missed enquiries",
    "Poor trust signals",
    "No tracking",
    "Hard to update",
  ];

  const solutions = [
    "Modern premium brand presence",
    "Fast mobile experience",
    "Reliable lead capture",
    "Better trust and conversions",
    "Systems that save admin time",
  ];

  return (
    <section className="bg-[#101116] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="Value"
          title="Better websites remove friction from every part of the enquiry journey."
          text="The difference is not cosmetic. Faster, clearer websites capture intent earlier, build trust faster, and make follow-up easier."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border border-red-400/14 bg-[linear-gradient(180deg,rgba(127,29,29,0.18),rgba(255,255,255,0.02))] p-8">
              <h2 className="text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-[#f6f6f7]">
                The Hidden Cost of an Outdated Website
              </h2>
              <p className="mt-4 max-w-[32rem] text-base leading-7 text-[#9a9aa2]">
                Small issues compound into lost trust, slower response times, and missed local opportunities.
              </p>
              <div className="mt-8 space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-[18px] border border-white/7 bg-black/18 p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-400/12">
                    <X className="h-4 w-4 text-red-300" />
                  </div>
                  <span className="pt-1 text-sm leading-6 text-[#c8c8ce]">{problem}</span>
                </div>
              ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[28px] border border-emerald-400/14 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(255,255,255,0.02))] p-8">
              <h2 className="text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-[#f6f6f7]">
                What TinnieDev Delivers
              </h2>
              <p className="mt-4 max-w-[32rem] text-base leading-7 text-[#9a9aa2]">
                The goal is a business asset that looks credible, performs cleanly, and supports better decisions.
              </p>
              <div className="mt-8 space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-[18px] border border-white/7 bg-black/18 p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/12">
                    <Check className="h-4 w-4 text-emerald-300" />
                  </div>
                  <span className="pt-1 text-sm leading-6 text-[#ebebef]">{solution}</span>
                </div>
              ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
