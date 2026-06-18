import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { SectionHeading } from "./home/SectionHeading";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Audit",
      description: "Review current site and opportunities",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy",
      description: "Recommend best solution for goals and budget",
    },
    {
      number: "03",
      icon: Code,
      title: "Build",
      description: "Design and develop professionally",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "Go live smoothly with ongoing help",
    },
  ];

  return (
    <section id="process" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="Process" title="Simple, Transparent Process" />

        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent xl:block" />
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 90} className="h-full">
              <div className="relative h-full rounded-[24px] border border-white/8 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1.5 hover:border-white/14">
                <div className="mb-6 text-[3.4rem] font-semibold leading-none tracking-[-0.08em] text-white/12">
                  {step.number}
                </div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#D3F263]/20 bg-[#D3F263]/10">
                  <step.icon className="h-5 w-5 text-[#D3F263]" />
                </div>
                <h3 className="text-xl font-semibold text-[#f6f6f7]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9a9aa2]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
