import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="mt-16 space-y-8 lg:space-y-0">
      {items.map((item, index) => (
        <Reveal key={item.name} delay={index * 120} className="lg:sticky lg:top-24">
          <article
            className="group mx-auto max-w-4xl rounded-sm border border-primary/15 bg-card p-9 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:shadow-luxe sm:p-14 lg:mt-8"
            style={{ transform: `scale(${1 - (items.length - 1 - index) * 0.012})` }}
          >
            <Quote className="h-7 w-7 text-primary/70" strokeWidth={1.2} />
            <p className="mt-7 font-display text-2xl leading-snug italic text-foreground/90 sm:text-3xl">
              “{item.quote}”
            </p>
            <div className="mt-9 flex items-baseline justify-between gap-4 border-t border-border pt-6">
              <p className="text-sm tracking-wide text-foreground">{item.name}</p>
              <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                {item.location}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
