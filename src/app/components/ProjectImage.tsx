import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export function ProjectImage({
  src,
  alt,
  title,
  className = "h-full w-full object-cover",
  loading = "lazy",
  fetchPriority = "auto",
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/35 via-card/40 to-background p-6 text-center">
        <div>
          <div className="mx-auto mb-4 h-12 w-12 rounded-xl border border-border/40 bg-card/50" />
          <div className="text-sm text-foreground">{title ?? "Project visual"}</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            Visual coming soon
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() => setHasError(true)}
    />
  );
}
