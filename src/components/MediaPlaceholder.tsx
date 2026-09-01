import { Camera, Film } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  hint?: string;
  kind?: "image" | "video";
  className?: string;
  ratio?: string;
};

export function MediaPlaceholder({
  label,
  hint,
  kind = "image",
  className,
  ratio,
}: Props) {
  const Icon = kind === "video" ? Film : Camera;
  return (
    <div
      className={cn("media-frame rounded-sm", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card/70 text-primary shadow-soft">
          <Icon className="h-5 w-5" strokeWidth={1.25} />
        </span>
        <span className="eyebrow">{kind === "video" ? "Your Reel" : "Your Photo"}</span>
        <span className="font-display text-xl leading-tight text-foreground/85 sm:text-2xl">
          {label}
        </span>
        {hint ? (
          <span className="max-w-xs text-xs tracking-wide text-muted-foreground">{hint}</span>
        ) : null}
      </div>
    </div>
  );
}
