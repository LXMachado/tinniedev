import { MapPin, MessageSquare, DollarSign, Clock, Gauge, Wrench } from "lucide-react";

export function TrustBar() {
  const features = [
    { icon: MapPin, label: "Gold Coast Based" },
    { icon: MessageSquare, label: "Direct Developer Access" },
    { icon: DollarSign, label: "Transparent Pricing" },
    { icon: Clock, label: "Fast Turnaround" },
    { icon: Gauge, label: "Performance Focused" },
    { icon: Wrench, label: "Ongoing Support" },
  ];

  return (
    <section className="py-16 px-6 lg:px-8 border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center border border-border/30">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <div className="text-sm text-muted-foreground">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
