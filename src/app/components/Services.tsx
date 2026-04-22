import { Check, ArrowRight } from "lucide-react";

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
    <section id="pricing" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Starting Points</h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing for websites, web apps, and custom systems. All builds include performance optimisation and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all hover:scale-105 ${
                plan.highlighted
                  ? "bg-accent/30 border-primary/50 shadow-lg shadow-primary/10"
                  : "bg-card/30 border-border/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">{plan.tier}</div>
                <h3 className="text-2xl mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  {plan.price ? (
                    <>
                      <div className="text-4xl">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">{plan.period}</div>
                    </>
                  ) : (
                    <div className="text-3xl">Custom</div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-3">
                    <Check className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg transition-all flex items-center justify-center gap-2 group ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
