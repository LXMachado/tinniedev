import { ArrowRight, Zap, TrendingUp, Target, Smartphone, Headphones } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl tracking-tight">
              Websites that look sharp, load fast, and bring enquiries.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              TinnieDev builds high-performance websites, lead generation systems, and custom business tools for Australian businesses that want more enquiries and less friction.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 group">
                Book Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                View Pricing
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/30 rounded-xl p-6 border border-border/30">
                  <Zap className="w-6 h-6 text-chart-1 mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">Performance</div>
                  <div className="text-2xl">Fast Load</div>
                </div>
                <div className="bg-accent/30 rounded-xl p-6 border border-border/30">
                  <TrendingUp className="w-6 h-6 text-chart-2 mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">Tracking</div>
                  <div className="text-2xl">Lead Ready</div>
                </div>
                <div className="bg-accent/30 rounded-xl p-6 border border-border/30">
                  <Target className="w-6 h-6 text-chart-3 mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">SEO</div>
                  <div className="text-2xl">Optimised</div>
                </div>
                <div className="bg-accent/30 rounded-xl p-6 border border-border/30">
                  <Smartphone className="w-6 h-6 text-chart-4 mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">Mobile</div>
                  <div className="text-2xl">Responsive</div>
                </div>
              </div>
              <div className="bg-accent/30 rounded-xl p-6 border border-border/30">
                <Headphones className="w-6 h-6 text-chart-5 mb-3" />
                <div className="text-sm text-muted-foreground mb-1">Support</div>
                <div className="text-2xl">Local, Direct Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
