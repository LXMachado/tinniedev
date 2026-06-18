import { User, Building2, Receipt, Code2, MapPin, Zap } from "lucide-react";
import { SectionHeading } from "./home/SectionHeading";
import { Reveal } from "./home/Reveal";
import { SpotlightCard } from "./home/SpotlightCard";

export function WhyTinnieDev() {
  const reasons = [
    {
      icon: User,
      title: "Direct communication with developer",
      description: "No account managers. Talk directly to the person building your site.",
    },
    {
      icon: Building2,
      title: "No agency overhead",
      description: "Lean operation means better value and faster decisions.",
    },
    {
      icon: Receipt,
      title: "Transparent fixed pricing",
      description: "Know exactly what you're paying before work begins.",
    },
    {
      icon: Code2,
      title: "Modern technology stack",
      description: "Built with current best practices for performance and reliability.",
    },
    {
      icon: MapPin,
      title: "Local Australian understanding",
      description: "Based on the Gold Coast, working in your timezone and market.",
    },
    {
      icon: Zap,
      title: "Fast and responsive support",
      description: "Quick turnaround on updates and reliable ongoing maintenance.",
    },
  ];

  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="Why TinnieDev" title="Why Work with TinnieDev" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal
              key={index}
              delay={index * 70}
            >
              <SpotlightCard className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#D3F263]/20 bg-[#D3F263]/10">
                  <reason.icon className="h-5 w-5 text-[#D3F263]" />
                </div>
                <h3 className="text-[1.15rem] font-semibold leading-7 text-[#f6f6f7]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9a9aa2]">{reason.description}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
