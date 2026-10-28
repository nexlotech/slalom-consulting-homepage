import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Compass, Network, Menu, X, Ear, Lightbulb, Hammer, HeartHandshake, Headset, Sparkles, Cpu, Workflow, Layers } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ERPFunnel™ — IT Advisory & Digital Transformation" },
      { name: "description", content: "Independent IT advisory and digital transformation: Odoo, Microsoft and AI Platform solutions for measurable business outcomes." },
      { property: "og:title", content: "ERPFunnel™ — Designing Better Businesses" },
      { property: "og:description", content: "Business first. Technology second. Outcomes always." },
    ],
  }),
  component: Index,
});

const nav = ["Home", "Advisory", "Digital Transformation", "Industries", "Insights", "About"];
const steps = [
  { n: "01", t: "Discover", p: "We hear you", d: "Understand your business, people, processes, priorities and challenges before choosing technology.", i: Ear },
  { n: "02", t: "Recommend", p: "We recommend you", d: "Identify the right-fit solution and roadmap aligned to your business goals.", i: Lightbulb },
  { n: "03", t: "Implement", p: "Together we implement", d: "Deliver in planned, controlled stages with transparency and your involvement.", i: Hammer },
  { n: "04", t: "Care", p: "Listen and Support", d: "Stay engaged, support your team, optimize performance and help you achieve better outcomes.", i: HeartHandshake },
];

function MsMark() {
  return (
    <span className="grid grid-cols-2 gap-0.5 size-5" aria-hidden>
      <span className="bg-[oklch(0.63_0.22_30)]" /><span className="bg-[oklch(0.72_0.19_140)]" />
      <span className="bg-[oklch(0.65_0.18_240)]" /><span className="bg-[oklch(0.82_0.17_85)]" />
    </span>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="bg-navy text-navy-foreground sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 h-18 py-4 flex items-center justify-between gap-6">
          <a href="#" className="text-2xl font-extrabold tracking-tight">ERP<span className="text-brand">Funnel</span>™</a>
          <nav className="hidden lg:flex gap-8 text-sm font-medium">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase().replace(/ /g, "-")}`} className="opacity-80 hover:opacity-100 hover:text-brand transition">{n}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex rounded-full border border-navy-foreground/60 px-5 py-2 text-sm font-semibold hover:bg-navy-foreground hover:text-navy transition">Contact Us</a>
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-navy-foreground/10 px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => <a key={n} href="#" className="font-medium hover:text-brand">{n}</a>)}
            <a href="#contact" className="font-semibold text-brand">Contact Us</a>
          </nav>
        )}
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-brand">BUSINESS FIRST. TECHNOLOGY SECOND. OUTCOMES ALWAYS.</p>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            From Implementing Technology, Business Solutions & Processes to <span className="text-brand">Designing Better Businesses.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">Independent IT advisory and digital transformation solutions that help businesses make better technology decisions, improve operations and achieve measurable outcomes.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold">Explore Services:</span>
            <a href="#" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-bold text-[oklch(0.45_0.12_330)] hover:ring-2 ring-brand">odoo</a>
            <a href="#" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:ring-2 ring-brand"><MsMark />Microsoft</a>
            <a href="#" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:ring-2 ring-brand"><Sparkles className="size-4 text-brand" />AI Platform</a>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Business leader overlooking a city skyline" width={1280} height={1024} className="rounded-3xl object-cover w-full aspect-[5/4]" />
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            {[["Technology", Cpu], ["Solutions", Layers], ["Processes", Workflow]].map(([l, I]: any) => (
              <span key={l} className="flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-4 py-2 text-sm font-semibold shadow"><I className="size-4 text-brand" />{l}</span>
            ))}
          </div>
          <p className="absolute bottom-5 right-5 rounded-xl bg-navy/85 text-navy-foreground px-5 py-3 font-bold">Better Systems. Stronger Businesses.</p>
        </div>
      </section>

      <section className="bg-brand-soft py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-background border border-brand/15 p-6"><p className="text-2xl font-extrabold text-[oklch(0.45_0.12_330)]">odoo</p><p className="mt-2 text-sm text-muted-foreground">ERP & business applications</p></div>
          <div className="rounded-2xl bg-background border border-brand/15 p-6"><p className="flex items-center gap-3 text-2xl font-bold"><MsMark />Microsoft</p><p className="mt-2 text-sm text-muted-foreground">ERP & Business Solutions</p></div>
          <div className="rounded-2xl bg-background border border-brand/15 p-6"><p className="flex items-center gap-3 text-2xl font-bold"><Sparkles className="text-brand" />AI Platform</p><p className="mt-2 text-sm text-muted-foreground">Insights. Automation. Better Decisions.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-6">
        {[
          { id: "advisory", t: "Advisory", s: "Technology & Business", d: "IT strategy, vCIO, ERP assessment and technology roadmaps.", I: Compass },
          { id: "digital-transformation", t: "Digital Transformation", s: "End-to-end change", d: "ERP, AI, Automation, Integration, Analytics, Branding and Media.", I: Network },
        ].map(({ id, t, s, d, I }) => (
          <a key={t} id={id} href="#" className="group rounded-3xl border border-brand/20 p-8 md:p-10 hover:shadow-xl hover:border-brand transition">
            <span className="grid place-items-center size-14 rounded-full bg-brand-soft text-brand"><I /></span>
            <p className="mt-6 text-sm font-semibold text-brand">{s}</p>
            <h2 className="mt-1 text-3xl font-extrabold">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
            <ArrowRight className="mt-6 text-brand group-hover:translate-x-2 transition" />
          </a>
        ))}
      </section>

      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our <span className="text-brand">DRIC™</span> Approach</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, t, p, d, i: I }) => (
              <div key={n} className="rounded-2xl bg-background border border-brand/15 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center size-12 rounded-full bg-brand text-primary-foreground"><I className="size-5" /></span>
                  <span className="text-3xl font-extrabold text-brand/25">{n}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{t}</h3>
                <p className="text-sm font-semibold text-brand">{p}</p>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-navy-gradient text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row md:items-center gap-8">
          <span className="grid place-items-center size-16 rounded-full bg-brand shrink-0"><Headset className="size-8" /></span>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold">Let's start with your business.</h2>
            <p className="mt-2 opacity-75">Meet with the virtual guide and discover the right next step for your organization.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-bold hover:brightness-110 focus-visible:ring-4 ring-brand/40 transition">Meet your virtual guide <ArrowRight className="size-4" /></a>
        </div>
        <p className="border-t border-navy-foreground/10 py-6 text-center text-xs opacity-60">© 2026 ERPFunnel™. All rights reserved.</p>
      </footer>
    </div>
  );
}
