import { X, Check } from "lucide-react";

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
    <section className="py-24 px-6 lg:px-8 bg-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-8">
              The Hidden Cost of an Outdated Website
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl bg-destructive/10 border border-destructive/20"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl mb-8">
              What TinnieDev Delivers
            </h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl bg-chart-2/10 border border-chart-2/20"
                >
                  <Check className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
