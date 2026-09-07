import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  Hammer,
  SearchCheck,
  Droplets,
  Layers,
  Wrench,
  Home,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/roofergirl-hero.jpg";
import inspectionImage from "@/assets/roofergirl-inspection.jpg";
import tileProject from "@/assets/project-tile.jpg";
import shingleProject from "@/assets/project-shingle.jpg";
import teamProject from "@/assets/project-team.jpg";
import flatProject from "@/assets/project-flat.jpg";
import roofDetail from "@/assets/roof-detail.jpg";
import beforeRoof from "@/assets/before-roof.jpg";
import afterRoof from "@/assets/after-roof.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RooferGirl | Women-Led Arizona Roofing" },
      {
        name: "description",
        content:
          "RooferGirl delivers expert roof inspections, repairs and replacements with clear guidance, meticulous workmanship and dependable care across Arizona.",
      },
      { property: "og:title", content: "RooferGirl | Arizona Roofing, Led Differently" },
      {
        property: "og:description",
        content:
          "Professional, women-led residential roofing built on clarity, craftsmanship and care.",
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
    icon: SearchCheck,
    title: "Roof Inspections",
    text: "Thorough, photo-documented evaluations with straightforward findings and practical next steps.",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    text: "Precise repairs for leaks, storm damage, flashing and worn materials — completed with lasting care.",
  },
  {
    icon: Home,
    title: "Roof Replacement",
    text: "Complete residential roof systems planned around your home, priorities and long-term protection.",
  },
  {
    icon: Layers,
    title: "Tile Roofing",
    text: "Beautiful clay and concrete tile systems with careful underlayment, flashing and finishing details.",
  },
  {
    icon: ShieldCheck,
    title: "Shingle Roofing",
    text: "Architectural shingles installed for clean curb appeal, reliable performance and desert durability.",
  },
  {
    icon: Droplets,
    title: "Flat Roof Systems",
    text: "Seamless foam and coating solutions designed to resist heat, ponding water and weather exposure.",
  },
];

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  width: number;
  height: number;
  eager?: boolean;
};

function Photo({ src, alt, className = "", ratio, width, height, eager }: PhotoProps) {
  return (
    <div
      className={`media-frame rounded-sm ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

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
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{copy}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-border bg-card shadow-luxe">
        <img
          src={beforeRoof}
          alt="Weathered tile roof before RooferGirl restoration"
          width={1536}
          height={864}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={afterRoof}
            alt="Restored terracotta tile roof after RooferGirl craftsmanship"
            width={1536}
            height={864}
            loading="lazy"
            className="absolute inset-0 h-full w-full max-w-none object-cover"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-card shadow-luxe"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-card text-primary shadow-luxe">
            <span className="font-display text-lg">↔</span>
          </span>
        </div>
        <span className="absolute top-5 left-5 rounded-full bg-card/90 px-4 py-2 text-[0.6875rem] font-medium tracking-[0.24em] text-foreground uppercase shadow-soft">
          After
        </span>
        <span className="absolute top-5 right-5 rounded-full bg-card/90 px-4 py-2 text-[0.6875rem] font-medium tracking-[0.24em] text-foreground uppercase shadow-soft">
          Before
        </span>
        <label className="sr-only" htmlFor="roof-comparison">
          Compare roof before and after restoration
        </label>
        <input
          id="roof-comparison"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
          aria-valuetext={`${position}% after roof visible`}
        />
      </div>
      <p className="mt-5 text-center text-xs tracking-wide text-muted-foreground">
        Drag across the image to reveal the transformation.
      </p>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* 1 — HERO */}
      <section className="bg-hero relative isolate min-h-[92vh] overflow-hidden px-6 pt-10 pb-24 sm:px-10 lg:min-h-screen lg:px-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-56 -left-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl" style={{ background: "var(--gradient-forest)" }} />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary">
              <Hammer className="h-4 w-4" strokeWidth={1.4} />
            </span>
            <span className="font-display text-xl tracking-wide">
              Roofer<span className="italic text-primary">Girl</span>
            </span>
          </div>
          <nav className="hidden items-center gap-9 text-sm tracking-wide text-muted-foreground md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-primary" href="#about">About</a>
            <a className="transition-colors hover:text-primary" href="#services">Services</a>
            <a className="transition-colors hover:text-primary" href="#projects">Projects</a>
            <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
          </nav>
          <a href="mailto:roofergirl.inc@outlook.com" className="hidden items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm tracking-wide text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground sm:inline-flex">
            <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
            Email RooferGirl
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
          <div>
            <Reveal><p className="eyebrow">Women-Led · Detail-Driven · Arizona Roofing</p></Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[5.75rem]">
                Roofing, led
                <span className="block italic text-primary">differently.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}><div className="bg-gold-line mt-9 h-px w-32" /></Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                RooferGirl brings clarity, craftsmanship and genuine care to every inspection, repair and replacement — so protecting your home feels refreshingly straightforward.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="mailto:roofergirl.inc@outlook.com?subject=Free%20Roofing%20Estimate" className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-4 text-sm tracking-[0.14em] uppercase text-primary-foreground shadow-luxe transition-all duration-500 hover:-translate-y-0.5 hover:brightness-110">
                  Request an Estimate
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-primary/25 px-9 py-4 text-sm tracking-[0.14em] uppercase text-primary transition-all duration-500 hover:bg-secondary">View Our Work</a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[["Woman-led", "Thoughtful service"], ["Detail-first", "Skilled workmanship"], ["Arizona", "Homes protected"]].map(([k, v]) => (
                  <div key={v}><dt className="font-display text-2xl text-primary sm:text-3xl">{k}</dt><dd className="mt-1 text-xs tracking-wide text-muted-foreground">{v}</dd></div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={220} className="relative">
            <div className="animate-float">
              <Photo src={heroImage} alt="RooferGirl professional on a completed Arizona tile roof" width={1024} height={1280} ratio="4 / 5" eager className="rounded-t-[14rem]" />
            </div>
            <div className="absolute -bottom-8 -left-4 w-44 sm:-left-10 sm:w-56">
              <Photo src={inspectionImage} alt="RooferGirl inspecting a residential tile roof" width={1024} height={1280} ratio="9 / 16" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — ABOUT + TRUST */}
      <section id="about" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHead eyebrow="Meet RooferGirl" title="Built on clarity. Led with care." copy="RooferGirl is a modern, women-led roofing company devoted to making homeowners feel informed, respected and confident. We pair honest recommendations with attentive project care and workmanship made to endure Arizona's demanding climate." />
              <Reveal delay={200}>
                <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                  {["Clear, photo-documented guidance", "Respectful care for your property", "Quality materials and details", "Straightforward recommendations"].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />{feature}</li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="space-y-6">
              {[{
                title: "Communication you can trust",
                text: "Every recommendation is explained clearly, supported with photos and shaped around what your roof actually needs — never pressure.",
              }, {
                title: "Craftsmanship you can see",
                text: "From preparation to the final detail, RooferGirl approaches your home with precision, professionalism and pride in the finished work.",
              }].map((item, index) => (
                <Reveal key={item.title} delay={index * 140}>
                  <article className="rounded-sm border border-border bg-card p-8 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:shadow-luxe sm:p-10">
                    <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-4 w-4 fill-current" strokeWidth={0} />)}</div>
                    <h3 className="mt-6 font-display text-xl leading-snug italic sm:text-2xl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={280}>
                <div className="rounded-sm border border-primary/15 bg-secondary/60 p-8 sm:p-10">
                  <p className="eyebrow">Arizona Service Coverage</p>
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {AREAS.map((area) => <li key={area} className="rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs tracking-wide text-foreground/80">{area}</li>)}
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
          <SectionHead eyebrow="Our Expertise" title="Complete roofing care, thoughtfully delivered." />
          <div className="mt-16 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-16">
              <Photo src={inspectionImage} alt="Female RooferGirl specialist performing a detailed roof inspection" width={1024} height={1280} ratio="4 / 5" />
            </Reveal>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {SERVICES.map((service, index) => (
                <Reveal as="li" key={service.title} delay={index * 70}>
                  <div className="group h-full bg-card p-9 transition-colors duration-500 hover:bg-secondary">
                    <service.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.2} />
                    <h3 className="mt-6 text-2xl">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 — BEFORE & AFTER */}
      <section className="px-0 py-28 lg:py-40">
        <div className="px-6 sm:px-10 lg:px-16">
          <SectionHead center eyebrow="Before & After" title="A transformation built to last." copy="Move the slider to see how considered materials, precise installation and a meticulous finish restore both protection and curb appeal." />
        </div>
        <Reveal delay={140} className="mt-16"><BeforeAfter /></Reveal>
      </section>

      {/* 5 — PROJECTS */}
      <section id="projects" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionHead eyebrow="Featured Craft" title="Roofing made beautiful." copy="A closer look at the materials, profiles and finishes RooferGirl brings to Arizona homes." />
          <div className="mt-16 grid gap-8 md:grid-cols-6">
            {[
              { src: tileProject, alt: "Completed terracotta tile roof on an Arizona home", label: "Terracotta Tile Renewal", text: "Timeless profile · Precision finish", span: "md:col-span-4", ratio: "16 / 10", width: 1536, height: 960 },
              { src: shingleProject, alt: "Completed architectural shingle roof in Scottsdale", label: "Architectural Shingles", text: "Clean lines · Lasting protection", span: "md:col-span-2", ratio: "4 / 5", width: 1024, height: 1280 },
              { src: teamProject, alt: "Women-led RooferGirl crew installing a residential roof", label: "Team Craftsmanship", text: "Professional care · Every detail", span: "md:col-span-2", ratio: "4 / 5", width: 1024, height: 1280 },
              { src: flatProject, alt: "Completed reflective flat roof on a modern Arizona home", label: "Modern Flat Roof", text: "Seamless system · Refined result", span: "md:col-span-4", ratio: "16 / 10", width: 1536, height: 960 },
            ].map((project, index) => (
              <Reveal key={project.label} delay={index * 90} className={project.span}>
                <Photo src={project.src} alt={project.alt} width={project.width} height={project.height} ratio={project.ratio} />
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <h3 className="text-xl">{project.label}</h3><p className="text-right text-xs tracking-wide text-muted-foreground">{project.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — MIXED SHOWCASE */}
      <section className="bg-secondary/50 px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionHead eyebrow="People & Precision" title="Professional care at every step." copy="From the first close-up inspection to the final clean line, RooferGirl brings experienced eyes and thoughtful hands to your roof." />
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><Photo src={teamProject} alt="RooferGirl team completing professional roof work" width={1024} height={1280} ratio="9 / 16" /></Reveal>
            <div className="grid gap-6 lg:col-span-7">
              <Reveal delay={90}><Photo src={roofDetail} alt="Detailed roof vent flashing workmanship" width={1536} height={864} ratio="16 / 9" /></Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                <Reveal delay={160}><Photo src={inspectionImage} alt="Detailed residential tile roof inspection" width={1024} height={1280} ratio="1 / 1" /></Reveal>
                <Reveal delay={230}><Photo src={tileProject} alt="Beautifully completed Arizona tile roofing project" width={1536} height={960} ratio="1 / 1" /></Reveal>
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
              <Reveal><p className="eyebrow">Start With RooferGirl</p></Reveal>
              <Reveal delay={90}>
                <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">Let's take care of<span className="block italic text-primary">the roof over your home.</span></h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Tell us what you are seeing, what concerns you and how we can help. You will receive thoughtful guidance and a clear path forward.</p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-10 space-y-4 text-sm">
                  <a href="mailto:roofergirl.inc@outlook.com" className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"><Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />roofergirl.inc@outlook.com</a>
                  <p className="flex items-start gap-3 text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />Serving homeowners across Arizona</p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <a href="mailto:roofergirl.inc@outlook.com?subject=Roofing%20Project%20Inquiry" className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-sm tracking-[0.14em] uppercase text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:brightness-110">Email RooferGirl<ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
              </Reveal>
            </div>
            <div className="border-t border-border bg-secondary/60 p-10 sm:p-14 lg:border-t-0 lg:border-l lg:p-20">
              <Reveal><p className="eyebrow">Service Areas</p></Reveal>
              <Reveal delay={110}>
                <ul className="mt-8 grid grid-cols-2 gap-y-4">{AREAS.map((area) => <li key={area} className="font-display text-2xl text-foreground/85 transition-colors hover:text-primary sm:text-3xl">{area}</li>)}</ul>
              </Reveal>
              <Reveal delay={200}><p className="mt-10 border-t border-border pt-6 text-xs tracking-wide text-muted-foreground">Women-led roofing · Proudly serving Arizona homeowners.</p></Reveal>
            </div>
          </div>
        </div>
        <footer className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs tracking-wide text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} RooferGirl. All rights reserved.</p><a href="mailto:roofergirl.inc@outlook.com" className="transition-colors hover:text-primary">roofergirl.inc@outlook.com</a>
        </footer>
      </section>
    </main>
  );
}
