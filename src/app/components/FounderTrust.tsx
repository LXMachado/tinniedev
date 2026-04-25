import { Check, User } from "lucide-react";

const trustPoints = [
  "Direct communication",
  "Australian based",
  "Fast turnaround",
  "Ongoing support",
];

export function FounderTrust() {
  return (
    <section id="founder" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
        <div className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="aspect-[4/5] rounded-xl border border-border/30 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03))] p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/50 border border-border/30">
                <User className="h-7 w-7 text-foreground" />
              </div>
              <div>
                <div className="text-3xl tracking-tight">Alexandre Machado</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Founder & Developer, TinnieDev
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Founder trust
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">Meet the Founder</h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
            Work directly with Alexandre Machado, Gold Coast-based developer helping Australian service businesses grow with fast websites and custom systems.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-lg border border-border/30 bg-card/30 p-4 text-sm"
              >
                <Check className="h-4 w-4 text-chart-2" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
