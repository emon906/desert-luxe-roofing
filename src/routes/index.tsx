import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  ShieldCheck,
  Star,
  Hammer,
  Sun,
  Droplets,
  Layers,
  Wrench,
  Home,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arizona Roofers | Premium Roofing in Phoenix & Statewide" },
      {
        name: "description",
        content:
          "Arizona Roofers builds and restores luxury roofs across Phoenix, Scottsdale, Tucson, Flagstaff and beyond. Free estimates, licensed crews, lifetime craftsmanship.",
      },
      { property: "og:title", content: "Arizona Roofers | Premium Roofing" },
      {
        property: "og:description",
        content:
          "Luxury tile, shingle and foam roofing across Arizona. Free estimate from a licensed Phoenix crew.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const AREAS = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Surprise",
  "Tucson",
  "Gilbert",
  "Chandler",
  "Flagstaff",
  "Carefree",
  "Queen Creek",
];

const SERVICES = [
  {
    icon: Layers,
    title: "Tile Roofing",
    text: "Hand-set clay and concrete tile with concealed fastening and desert-grade underlayment.",
  },
  {
    icon: Home,
    title: "Shingle Systems",
    text: "Architectural shingle installs engineered for monsoon wind uplift and UV fade resistance.",
  },
  {
    icon: Droplets,
    title: "Foam & Flat Roofs",
    text: "Seamless SPF and silicone coatings that stop ponding water and slash cooling costs.",
  },
  {
    icon: Sun,
    title: "Heat & Energy",
    text: "Reflective finishes and ventilation upgrades tuned for Arizona's 115° summers.",
  },
  {
    icon: Wrench,
    title: "Repair & Leak Work",
    text: "Same-week diagnostics, infrared moisture mapping, and permanent repairs — never patches.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Storm",
    text: "Documentation, adjuster meetings, and full storm restoration handled end to end.",
  },
];

function SectionHead({
  eyebrow,
  title,
  copy,
  center,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {copy ? (
        <Reveal delay={160}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {copy}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* 1 — HERO */}
      <section className="bg-hero relative isolate min-h-[92vh] overflow-hidden px-6 pt-10 pb-24 sm:px-10 lg:min-h-screen lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-56 -left-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-forest)" }}
        />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary">
              <Hammer className="h-4 w-4" strokeWidth={1.4} />
            </span>
            <span className="font-display text-xl tracking-wide">
              Arizona <span className="italic text-primary">Roofers</span>
            </span>
          </div>
          <nav className="hidden items-center gap-9 text-sm tracking-wide text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-primary" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-primary" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="tel:+16025550188"
            className="hidden items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm tracking-wide text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            (602) 555-0188
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
          <div>
            <Reveal>
              <p className="eyebrow">Licensed · Bonded · Arizona Since 1998</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[5.75rem]">
                Roofs built for
                <span className="block italic text-primary">the desert sun.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <div className="bg-gold-line mt-9 h-px w-32" />
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Tile, shingle and foam roofing crafted to outlast monsoon seasons and
                115-degree afternoons — installed by Arizona's most meticulous crews.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-4 text-sm tracking-[0.14em] uppercase text-primary-foreground shadow-luxe transition-all duration-500 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Get a Free Estimate
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-primary/25 px-9 py-4 text-sm tracking-[0.14em] uppercase text-primary transition-all duration-500 hover:bg-secondary"
                >
                  View Our Work
                </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["2,400+", "Roofs completed"],
                  ["25 yrs", "Workmanship warranty"],
                  ["4.9★", "Across 600 reviews"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-3xl text-primary">{k}</dt>
                    <dd className="mt-1 text-xs tracking-wide text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={220} className="relative">
            <div className="animate-float">
              <MediaPlaceholder
                kind="image"
                label="Hero Roof Photograph"
                hint="Vertical 4:5 hero shot — your signature tile roof at golden hour."
                ratio="4 / 5"
                className="rounded-t-[14rem]"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 w-44 sm:-left-10 sm:w-56">
              <MediaPlaceholder
                kind="video"
                label="Reel"
                ratio="9 / 16"
                className="rounded-sm"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — ABOUT + TRUST */}
      <section id="about" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHead
                eyebrow="Who We Are"
                title="Family-run craftsmanship, statewide reach."
                copy="Three generations of Arizona roofers, one standard. Every project is led by an owner, inspected twice, and documented photo-by-photo so you know exactly what went on your home."
              />
              <Reveal delay={200}>
                <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                  {[
                    "ROC licensed & fully insured",
                    "Owner on every job site",
                    "Written 25-year warranty",
                    "No-pressure, itemized quotes",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <ShieldCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={1.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="space-y-6">
              {[
                {
                  quote:
                    "They re-tiled our Paradise Valley home in four days and left it cleaner than they found it. The detail work around the parapets is genuinely beautiful.",
                  name: "Marissa H.",
                  place: "Scottsdale, AZ",
                },
                {
                  quote:
                    "After the monsoon took half our shingles, Arizona Roofers handled the insurance claim and the rebuild. Zero stress, and the roof looks better than original.",
                  name: "Daniel O.",
                  place: "Gilbert, AZ",
                },
              ].map((r, i) => (
                <Reveal key={r.name} delay={i * 140}>
                  <figure className="rounded-sm border border-border bg-card p-8 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:shadow-luxe sm:p-10">
                    <div className="flex gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                      ))}
                    </div>
                    <blockquote className="mt-6 font-display text-xl leading-snug italic sm:text-2xl">
                      “{r.quote}”
                    </blockquote>
                    <figcaption className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {r.name} — {r.place}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}

              <Reveal delay={280}>
                <div className="rounded-sm border border-primary/15 bg-secondary/60 p-8 sm:p-10">
                  <p className="eyebrow">Arizona Service Coverage</p>
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {AREAS.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs tracking-wide text-foreground/80"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — SERVICES + LARGE IMAGE */}
      <section id="services" className="bg-secondary/50 px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="What We Do"
            title="Complete roofing, finished to a luxury standard."
          />
          <div className="mt-16 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-16">
              <MediaPlaceholder
                kind="image"
                label="Signature Service Image"
                hint="Large landscape shot — crew at work or a completed tile roof."
                ratio="4 / 5"
              />
            </Reveal>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 70}>
                  <div className="group h-full bg-card p-9 transition-colors duration-500 hover:bg-secondary">
                    <s.icon
                      className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-translate-y-1"
                      strokeWidth={1.2}
                    />
                    <h3 className="mt-6 text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 — FULL-WIDTH VIDEO */}
      <section className="px-0 py-28 lg:py-40">
        <div className="px-6 sm:px-10 lg:px-16">
          <SectionHead
            center
            eyebrow="On Site"
            title="See the craft in motion."
            copy="Drop your own reels and walkthrough films here — tear-offs, tile sets, and finished reveals."
          />
        </div>
        <Reveal delay={140} className="mt-16 px-4 sm:px-8 lg:px-12">
          <MediaPlaceholder
            kind="video"
            label="Full-Width Feature Video"
            hint="16:9 landscape film — autoplay muted loop recommended."
            ratio="16 / 9"
            className="w-full"
          />
        </Reveal>
      </section>

      {/* 5 — PROJECTS */}
      <section id="projects" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Selected Work"
            title="Recent Arizona roofs."
            copy="A sample of homes and estates finished across the Valley and northern Arizona."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-6">
            {[
              {
                label: "Desert Ridge Estate",
                text: "Full clay tile replacement · Phoenix",
                span: "md:col-span-4",
                ratio: "16 / 10",
              },
              {
                label: "Camelback Residence",
                text: "Standing seam accents · Scottsdale",
                span: "md:col-span-2",
                ratio: "4 / 5",
              },
              {
                label: "Pine Canyon Cabin",
                text: "Snow-rated shingle system · Flagstaff",
                span: "md:col-span-2",
                ratio: "4 / 5",
              },
              {
                label: "Queen Creek Ranch",
                text: "Foam roof + silicone coating · Queen Creek",
                span: "md:col-span-4",
                ratio: "16 / 10",
              },
            ].map((p, i) => (
              <Reveal key={p.label} delay={i * 90} className={p.span}>
                <MediaPlaceholder kind="image" label={p.label} ratio={p.ratio} />
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <h3 className="text-xl">{p.label}</h3>
                  <p className="text-xs tracking-wide text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — MIXED SHOWCASE */}
      <section className="bg-secondary/50 px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Studio Gallery"
            title="Photography & reels, side by side."
            copy="A mixed canvas for your best stills and short vertical films."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <MediaPlaceholder kind="video" label="Vertical Reel" ratio="9 / 16" />
            </Reveal>
            <div className="grid gap-6 lg:col-span-7">
              <Reveal delay={90}>
                <MediaPlaceholder kind="image" label="Detail Shot" ratio="16 / 9" />
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                <Reveal delay={160}>
                  <MediaPlaceholder kind="image" label="Before" ratio="1 / 1" />
                </Reveal>
                <Reveal delay={230}>
                  <MediaPlaceholder kind="video" label="After Reel" ratio="1 / 1" />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — CONTACT / CTA */}
      <section id="contact" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-sm border border-primary/15 bg-card shadow-luxe">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 sm:p-14 lg:p-20">
              <Reveal>
                <p className="eyebrow">Free Estimate</p>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">
                  Let's put a better roof
                  <span className="block italic text-primary">over your home.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                  Same-week inspections across the Valley. No obligation, no pressure — just
                  an honest assessment and an itemized quote.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-10 space-y-4 text-sm">
                  <a
                    href="tel:+16025550188"
                    className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    (602) 555-0188
                  </a>
                  <p className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                    2401 E Camelback Rd, Phoenix, Arizona 85016
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <a
                  href="tel:+16025550188"
                  className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-sm tracking-[0.14em] uppercase text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Book My Free Estimate
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            </div>

            <div className="border-t border-border bg-secondary/60 p-10 sm:p-14 lg:border-t-0 lg:border-l lg:p-20">
              <Reveal>
                <p className="eyebrow">Service Areas</p>
              </Reveal>
              <Reveal delay={110}>
                <ul className="mt-8 grid grid-cols-2 gap-y-4">
                  {AREAS.map((a) => (
                    <li
                      key={a}
                      className="font-display text-2xl text-foreground/85 transition-colors hover:text-primary sm:text-3xl"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-10 border-t border-border pt-6 text-xs tracking-wide text-muted-foreground">
                  Headquartered in Phoenix · Serving the Valley, Tucson and northern Arizona.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs tracking-wide text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Arizona Roofers. ROC Licensed & Insured.</p>
          <p>Phoenix, Arizona</p>
        </footer>
      </section>
    </main>
  );
}
