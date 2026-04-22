import { ArrowRight, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl mb-6">
          Ready for a website that actually works?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's discuss where your current website is losing opportunities and how to improve it.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 group">
            Book Free Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Send Enquiry
          </button>
        </div>

        <div className="mt-16 pt-16 border-t border-border/30">
          <div className="text-sm text-muted-foreground">
            © 2026 TinnieDev. Gold Coast, Australia.
          </div>
        </div>
      </div>
    </section>
  );
}
