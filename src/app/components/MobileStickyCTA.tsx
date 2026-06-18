import { CalendarCheck } from "lucide-react";

export const calendlyAuditUrl = "https://calendly.com/bookings-machado/15-minute-website-audit";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0c0c0e]/92 p-3 backdrop-blur-xl md:hidden">
      <a
        href={calendlyAuditUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-[13px] bg-[#D3F263] px-4 py-3 text-sm font-semibold text-[#0a0a0c]"
      >
        <CalendarCheck className="h-4 w-4" />
        Book Free Audit
      </a>
    </div>
  );
}
