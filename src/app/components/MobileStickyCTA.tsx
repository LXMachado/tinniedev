import { CalendarCheck } from "lucide-react";

export const calendlyAuditUrl = "https://calendly.com/tinniedev/free-audit";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-background/90 p-3 backdrop-blur md:hidden">
      <a
        href={calendlyAuditUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
      >
        <CalendarCheck className="h-4 w-4" />
        Book Free Audit
      </a>
    </div>
  );
}
