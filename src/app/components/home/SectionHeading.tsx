import type { ReactNode } from "react";
import { cn } from "../ui/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-14 max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D3F263]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-[#f6f6f7]">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-7 text-[#9a9aa2] md:text-lg md:leading-8">{text}</p>
      ) : null}
    </Reveal>
  );
}
