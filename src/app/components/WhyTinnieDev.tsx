import { User, Building2, Receipt, Code2, MapPin, Zap } from "lucide-react";

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
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Why Work with TinnieDev</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card/30 border border-border/30 rounded-2xl p-8 hover:bg-card/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center mb-6 border border-border/30">
                <reason.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
