import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { cn } from "../ui/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  spotlightClassName?: string;
};

const spotlightOrigin: CSSProperties = {
  "--mx": "50%",
  "--my": "-20%",
} as CSSProperties;

export function SpotlightCard({
  children,
  className,
  contentClassName,
  spotlightClassName,
}: SpotlightCardProps) {
  const updateSpotlight: MouseEventHandler<HTMLDivElement> = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      style={spotlightOrigin}
      onMouseMove={updateSpotlight}
      className={cn(
        "group relative overflow-hidden rounded-[1.25rem] border border-white/8 bg-white/[0.022] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--acc-40)]",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(380px_circle_at_var(--mx)_var(--my),var(--acc-12),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100",
          spotlightClassName,
        )}
      />
      <div className={cn("relative", contentClassName)}>{children}</div>
    </div>
  );
}
