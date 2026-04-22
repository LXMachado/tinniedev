import { Search, Lightbulb, Code, Rocket } from "lucide-react";

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
    <section id="process" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Simple, Transparent Process</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card/30 border border-border/30 rounded-2xl p-8 hover:bg-card/50 transition-all">
                <div className="text-5xl opacity-20 mb-4">{step.number}</div>
                <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center mb-6 border border-border/30">
                  <step.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
