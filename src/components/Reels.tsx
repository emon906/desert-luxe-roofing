import { useCallback, useEffect, useRef, useState } from "react";
import { Film } from "lucide-react";

export type Reel = {
  label: string;
  caption: string;
  src?: string;
  poster?: string;
};

export function Reels({ reels }: { reels: Reel[] }) {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const start = useRef<number | null>(null);

  const clamp = useCallback(
    (i: number) => Math.max(0, Math.min(reels.length - 1, i)),
    [reels.length],
  );

  const onDown = (x: number) => {
    start.current = x;
  };
  const onMove = (x: number) => {
    if (start.current === null) return;
    setDrag(x - start.current);
  };
  const onUp = () => {
    if (start.current === null) return;
    if (Math.abs(drag) > 60) setActive((i) => clamp(i + (drag < 0 ? 1 : -1)));
    start.current = null;
    setDrag(0);
  };

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((i) => clamp(i + 1));
      if (e.key === "ArrowLeft") setActive((i) => clamp(i - 1));
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [clamp]);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="relative mx-auto flex h-[30rem] max-w-6xl touch-pan-y items-center justify-center select-none sm:h-[36rem]"
        onPointerDown={(e) => onDown(e.clientX)}
        onPointerMove={(e) => onMove(e.clientX)}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        role="group"
        aria-label="RooferGirl reels carousel"
      >
        {reels.map((reel, index) => {
          const offset = index - active + drag / 320;
          const abs = Math.abs(offset);
          if (abs > 2.4) return null;
          return (
            <article
              key={reel.label}
              aria-hidden={index !== active}
              className="absolute top-1/2 left-1/2 w-[15rem] sm:w-[19rem]"
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 62}%) scale(${1 - abs * 0.14})`,
                opacity: Math.max(0, 1 - abs * 0.42),
                zIndex: 20 - Math.round(abs * 10),
                filter: abs > 0.35 ? "blur(1.5px)" : "none",
                transition:
                  start.current === null
                    ? "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 700ms, filter 700ms"
                    : "none",
              }}
            >
              <div
                className="media-frame overflow-hidden rounded-sm shadow-luxe"
                style={{ aspectRatio: "9 / 16" }}
              >
                {reel.src ? (
                  <video
                    src={reel.src}
                    poster={reel.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={abs < 1.2 ? "auto" : "none"}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card/70 text-primary shadow-soft">
                      <Film className="h-5 w-5" strokeWidth={1.25} />
                    </span>
                    <span className="eyebrow">Your Reel</span>
                    <span className="font-display text-xl leading-tight text-foreground/85">
                      {reel.label}
                    </span>
                    <span className="max-w-[12rem] text-xs tracking-wide text-muted-foreground">
                      Vertical 9:16 · add your own clip
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-5 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {reel.caption}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3">
        {reels.map((reel, index) => (
          <button
            key={reel.label}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show reel ${index + 1}: ${reel.label}`}
            aria-current={index === active}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === active ? "w-10 bg-primary" : "w-4 bg-primary/25 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
      <p className="mt-5 text-center text-xs tracking-wide text-muted-foreground">
        Drag or swipe to browse the reels.
      </p>
    </div>
  );
}
