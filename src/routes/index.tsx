import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Compass, Network, Menu, X, Ear, Lightbulb, Hammer, HeartHandshake, Headset, Sparkles, Linkedin, Youtube, Twitter, MapPin, Mail, Phone } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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

const pillars = [
  { t: "Advisory", I: Compass },
  { t: "Digital Transformation", I: Network },
  { t: "AI Platform", I: Sparkles },
];

function AboutSection() {
  const [active, setActive] = useState(1);
  const ActiveIcon = (pillars[active] ?? pillars[0]!).I;
  return (
    <section id="about" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex items-center gap-8">
            <span className="grid place-items-center size-24 rounded-2xl border-2 border-brand text-brand"><ActiveIcon className="size-12" /></span>
            <ul className="space-y-2">
              {pillars.map((p, i) => (
                <li key={p.t}>
                  <button onClick={() => setActive(i)} className={`text-xl font-semibold transition ${i === active ? "text-navy-foreground" : "text-navy-foreground/40 hover:text-navy-foreground/70"}`}>{p.t}</button>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="mt-14 text-4xl md:text-5xl font-light tracking-tight text-navy-foreground">About <span className="font-serif italic">ERPFunnel™</span></h2>
          <p className="mt-6 max-w-xl text-lg text-navy-foreground/80">Independent IT advisory and digital transformation solutions that help businesses make better technology decisions, improve operations and achieve measurable outcomes. Business first. Technology second. Outcomes always.</p>
          <a href="#contact" className="mt-10 inline-flex rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-navy-foreground hover:bg-brand transition">Learn more about us</a>
        </div>
        <figure>
          <img src={aboutImg} alt="Consultants discussing a project on site" loading="lazy" width={1344} height={1024} className="w-full rounded-3xl object-cover aspect-[4/3]" />
          <figcaption className="mt-4 text-sm text-navy-foreground/70">Our team works alongside yours — understanding your people, processes and priorities before choosing technology.</figcaption>
        </figure>
      </div>
    </section>
  );
}

const posts = [
  {
    tag: "Customer story", t: "Moving from spreadsheets to a single Odoo ERP for real-time manufacturing visibility", meta: "Manufacturing", img: blog1,
    h: "Discover how a guided DRIC™ journey helped a distributor cut order-processing time and unify finance, inventory and sales.", industry: "Distribution & retail", read: "4 minute read",
  },
  {
    tag: "Approach", t: "Why business-first advisory beats technology-first projects", meta: "ERPFunnel™ Insights", img: blog2,
    h: "See how our DRIC™ method keeps outcomes — not software — at the centre of every transformation decision.", industry: "Advisory", read: "5 minute read",
  },
  {
    tag: "AI Platform", t: "Turning operational data into AI-powered decisions", meta: "Data & AI", img: blog3,
    h: "How connected ERP data becomes the foundation for AI that plans, forecasts and acts alongside your teams.", industry: "Data & AI", read: "3 minute read",
  },
];

function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * 360, behavior: "smooth" });
  return (
    <section id="insights" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy-foreground">Explore our stories <span className="font-serif italic">&amp; insights</span></h2>
          <div className="flex gap-4 text-brand">
            <button aria-label="Previous" onClick={() => scroll(-1)} className="hover:opacity-70"><ArrowLeft className="size-7" /></button>
            <button aria-label="Next" onClick={() => scroll(1)} className="hover:opacity-70"><ArrowRight className="size-7" /></button>
          </div>
        </div>
        <div ref={ref} className="mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none]">
          {posts.map((p) => (
            <a key={p.t} href="#" className="group relative snap-start block shrink-0 w-[85%] sm:w-[340px] min-h-[520px] rounded-b-3xl overflow-hidden border border-foreground/10 flex flex-col">
              <img src={p.img} alt={p.t} loading="lazy" width={768} height={960} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="relative mt-auto p-7 text-navy-foreground">
                <p className="text-xs tracking-[0.2em] uppercase">{p.tag}</p>
                <h3 className="mt-3 text-xl font-bold leading-snug">{p.t}</h3>
                <p className="mt-4 text-sm font-serif text-navy-foreground/80">{p.meta}</p>
              </div>
              <div className="absolute inset-0 flex flex-col bg-brand p-7 text-primary-foreground transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">
                <p className="text-xs tracking-[0.2em] uppercase">{p.tag}</p>
                <h3 className="mt-5 text-2xl leading-snug">{p.h}</h3>
                <p className="mt-8 text-sm font-bold">Industry</p>
                <p className="text-sm">{p.industry}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-bold">Read story <ArrowRight className="size-5" /></span>
                  <span className="text-sm">{p.read}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
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

      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/BOG_CbEDhag?autoplay=1&mute=1&loop=1&playlist=BOG_CbEDhag&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0"
            title="Background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            frameBorder="0"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: "max(100vw, 177.78vh)", height: "max(56.25vw, 100vh)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-foreground">BUSINESS FIRST. TECHNOLOGY SECOND. OUTCOMES ALWAYS.</p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-light leading-[1.08] tracking-tight text-navy-foreground">
            From Implementing Technology, Business Solutions &amp; Processes to <span className="font-serif italic text-brand-foreground">Designing Better Businesses.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-foreground/75">Independent IT advisory and digital transformation solutions that help businesses make better technology decisions, improve operations and achieve measurable outcomes.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-navy-foreground">Explore Services:</span>
            <a href="#" className="rounded-full border border-navy-foreground/60 bg-navy/40 px-5 py-2 text-sm font-bold text-navy-foreground backdrop-blur hover:bg-navy-foreground hover:text-navy transition">odoo</a>
            <a href="#" className="rounded-full border border-navy-foreground/60 bg-navy/40 px-5 py-2 text-sm font-semibold text-navy-foreground backdrop-blur flex items-center gap-2 hover:bg-navy-foreground hover:text-navy transition"><MsMark />Microsoft</a>
            <a href="#" className="rounded-full border border-navy-foreground/60 bg-navy/40 px-5 py-2 text-sm font-semibold text-navy-foreground backdrop-blur flex items-center gap-2 hover:bg-navy-foreground hover:text-navy transition"><Sparkles className="size-4 text-brand" />AI Platform</a>
          </div>
        </div>
      </section>

      <section className="bg-wave py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-foreground/5 border border-foreground/15 p-6"><p className="text-2xl font-extrabold">odoo</p><p className="mt-2 text-sm text-muted-foreground">ERP & business applications</p></div>
          <div className="rounded-2xl bg-foreground/5 border border-foreground/15 p-6"><p className="flex items-center gap-3 text-2xl font-bold"><MsMark />Microsoft</p><p className="mt-2 text-sm text-muted-foreground">ERP & Business Solutions</p></div>
          <div className="rounded-2xl bg-foreground/5 border border-foreground/15 p-6"><p className="flex items-center gap-3 text-2xl font-bold"><Sparkles className="text-brand" />AI Platform</p><p className="mt-2 text-sm text-muted-foreground">Insights. Automation. Better Decisions.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-6">
        {[
          { id: "advisory", t: "Advisory", s: "Technology & Business", d: "IT strategy, vCIO, ERP assessment and technology roadmaps.", I: Compass },
          { id: "digital-transformation", t: "Digital Transformation", s: "End-to-end change", d: "ERP, AI, Automation, Integration, Analytics, Branding and Media.", I: Network },
        ].map(({ id, t, s, d, I }) => (
          <a key={t} id={id} href="#" className="group rounded-3xl border border-foreground/15 bg-foreground/5 p-8 md:p-10 hover:border-brand hover:bg-foreground/10 transition">
            <span className="grid place-items-center size-14 rounded-full bg-brand text-primary-foreground"><I /></span>
            <p className="mt-6 text-sm font-semibold text-brand-foreground">{s}</p>
            <h2 className="mt-1 text-3xl md:text-4xl font-light">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
            <ArrowRight className="mt-6 text-brand group-hover:translate-x-2 transition" />
          </a>
        ))}
      </section>

      <AboutSection />

      <BlogSection />

      <section className="bg-wave py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">Our <span className="font-serif italic">DRIC™</span> Approach</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, t, p, d, i: I }) => (
              <div key={n} className="rounded-2xl bg-foreground/5 border border-foreground/15 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center size-12 rounded-full bg-brand text-primary-foreground"><I className="size-5" /></span>
                  <span className="text-3xl font-extrabold text-foreground/20">{n}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{t}</h3>
                <p className="text-sm font-semibold text-brand-foreground">{p}</p>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy-gradient text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row md:items-center gap-8">
          <span className="grid place-items-center size-16 rounded-full bg-brand shrink-0"><Headset className="size-8" /></span>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-light">Let's start with your <span className="font-serif italic">business.</span></h2>
            <p className="mt-2 opacity-75">Meet with the virtual guide and discover the right next step for your organization.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-7 py-3 font-bold hover:brightness-110 focus-visible:ring-4 ring-brand/40 transition">Meet your virtual guide <ArrowRight className="size-4" /></a>
        </div>
      </section>

      <footer className="border-t border-navy-foreground/10 bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <a href="#" className="text-3xl font-extrabold tracking-tight">ERP<span className="text-brand">Funnel</span>™</a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">Independent IT advisory and digital transformation. Business first. Technology second. Outcomes always.</p>
              <div className="mt-6 flex gap-3">
                {[
                  { label: "LinkedIn", I: Linkedin },
                  { label: "YouTube", I: Youtube },
                  { label: "X", I: Twitter },
                ].map(({ label, I }) => (
                  <a key={label} href="#" aria-label={label} className="grid place-items-center size-10 rounded-full border border-navy-foreground/25 text-navy-foreground/80 hover:border-brand hover:text-brand transition">
                    <I className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <nav aria-label="Services">
              <h3 className="text-xs font-bold tracking-[0.2em] text-navy-foreground/50 uppercase">Services</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {["Advisory", "Digital Transformation", "Odoo", "Microsoft", "AI Platform"].map((l) => (
                  <li key={l}><a href="#" className="text-navy-foreground/75 hover:text-brand transition">{l}</a></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company">
              <h3 className="text-xs font-bold tracking-[0.2em] text-navy-foreground/50 uppercase">Company</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {["About", "Industries", "Insights", "Careers", "Contact"].map((l) => (
                  <li key={l}><a href="#" className="text-navy-foreground/75 hover:text-brand transition">{l}</a></li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-navy-foreground/50 uppercase">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
                <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-brand" /><span>Our office address is being confirmed and will appear here.</span></li>
                <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-brand" /><a href="#" className="hover:text-brand transition">hello@erpfunnel.com</a></li>
                <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-brand" /><a href="#" className="hover:text-brand transition">+91 &nbsp;—&nbsp; to be confirmed</a></li>
              </ul>
              <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-brand px-5 py-2 text-sm font-bold text-navy-foreground hover:bg-brand transition">Start a conversation <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-navy-foreground/10">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-foreground/60">
            <p>© 2026 ERPFunnel™. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Use", "Cookie Preferences"].map((l) => (
                <a key={l} href="#" className="hover:text-brand transition">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
