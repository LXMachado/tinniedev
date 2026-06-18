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
    <section className="border-y border-white/6 px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-[18px] border border-white/8 bg-white/[0.025] px-4 py-4 text-left"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#D3F263]/20 bg-[#D3F263]/10">
                <feature.icon className="h-5 w-5 text-[#D3F263]" />
              </div>
              <div className="text-sm leading-5 text-[#d5d5db]">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
