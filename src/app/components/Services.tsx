import { Check, ArrowRight } from "lucide-react";
import { calendlyAuditUrl } from "./MobileStickyCTA";
import { SectionHeading } from "./home/SectionHeading";
import { Reveal } from "./home/Reveal";
import { cn } from "./ui/utils";

export function Services() {
  const plans = [
    {
      name: "Online Presence",
      tier: "Starter",
      price: "$2,500",
      period: "one-time",
      features: [
        "5-page responsive website",
        "Mobile optimised",
        "Contact forms",
        "Basic SEO",
        "Google Business Profile setup",
        "30 days support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Lead Generation System",
      tier: "Growth",
      price: "$5,500",
      period: "one-time",
      features: [
        "Everything in Starter",
        "Conversion optimisation",
        "Lead alerts (SMS / Email)",
        "CRM integration",
        "Analytics dashboard",
        "A/B testing setup",
        "90 days support",
      ],
      cta: "Book Discovery Call",
      highlighted: true,
    },
    {
      name: "Business Systems",
      tier: "Custom Quote",
      price: null,
      period: null,
      features: [
        "Custom portals",
        "Admin dashboards",
        "Automation workflows",
        "Third-party integrations",
        "Reporting systems",
        "Dedicated support",
      ],
      cta: "Request Quote",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="px-6 py-24 lg:px-8 lg:py-[6.5rem]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="Pricing"
          title="Starting Points"
          text="Transparent pricing for websites, web apps, and custom systems. All builds include performance optimisation and support."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={index}
              delay={index * 90}
              className="h-full"
            >
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[26px] border p-8 transition duration-300 hover:-translate-y-1.5",
                  plan.highlighted
                    ? "border-[#D3F263]/35 bg-[linear-gradient(180deg,rgba(211,242,99,0.16),rgba(255,255,255,0.03))] shadow-[0_28px_70px_-40px_rgba(211,242,99,0.8)]"
                    : "border-white/8 bg-white/[0.025] hover:border-white/14",
                )}
              >
                {plan.highlighted ? (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D3F263]/25 bg-[#D3F263] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0a0a0c]">
                    Most popular
                  </div>
                ) : null}

                <div className="mb-8">
                  <div className="mb-2 text-xs uppercase tracking-[0.24em] text-[#8a8a92]">{plan.tier}</div>
                  <h3 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-[#f6f6f7]">
                    {plan.name}
                  </h3>
                  <div className="mt-5 flex items-end gap-2">
                    {plan.price ? (
                      <>
                        <div className="text-[2.5rem] font-semibold tracking-[-0.05em] text-[#f6f6f7]">
                          {plan.price}
                        </div>
                        <div className="pb-1 text-sm text-[#8a8a92]">{plan.period}</div>
                      </>
                    ) : (
                      <div className="text-[2.25rem] font-semibold tracking-[-0.04em] text-[#f6f6f7]">
                        Custom Quote
                      </div>
                    )}
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34d399]" />
                      <span className="text-sm leading-6 text-[#b7b7bf]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.highlighted ? calendlyAuditUrl : "#contact"}
                  target={plan.highlighted ? "_blank" : undefined}
                  rel={plan.highlighted ? "noreferrer" : undefined}
                  className={cn(
                    "group inline-flex w-full items-center justify-center gap-2 rounded-[13px] px-5 py-3.5 text-sm font-semibold transition duration-300",
                    plan.highlighted
                      ? "bg-[#D3F263] text-[#0a0a0c] hover:-translate-y-0.5 hover:bg-[#E3F78A]"
                      : "border border-white/12 bg-white/[0.045] text-[#f6f6f7] hover:bg-white/[0.09]",
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
