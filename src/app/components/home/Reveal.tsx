import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../ui/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  disabled?: boolean;
};

export function Reveal({ children, className, delay = 0, y = 24, disabled = false }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(disabled);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReduceMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      return;
    }

    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [disabled, reduceMotion]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: disabled ? "0ms" : `${delay}ms`,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className={cn(
        disabled ? "" : "transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)]",
        isVisible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
