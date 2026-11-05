import { ArrowRight, BarChart3, Plus, Bot, Check, ClipboardCheck, Compass, Network, ShieldCheck, Sparkles } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EXPERTISE_DETAILS } from "@/data/expertise-details";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TOOL_SUMMARIES } from "@/data/tool-summaries";
import { jumpState, prefillContact } from "@/lib/contact-prefill";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const disciplines = [
  {
    icon: Bot,
    title: "AI & agentic systems",
    text: "AI-powered clinical decision support, agentic AI that automates data workflows, and ML adoption with ethical governance built in.",
  },
  {
    icon: BarChart3,
    title: "Healthcare analytics & modeling",
    text: "Logistic regression, predictive modeling, time-series forecasting, clustering and classification, from analysis plan to final report.",
  },
  {
    icon: Network,
    title: "Clinical systems & interoperability",
    text: "Epic and GE Centricity implementation, large-scale EMR migration, ETL, and standards-based integration.",
  },
  {
    icon: ShieldCheck,
    title: "Data governance & compliance",
    text: "HIPAA, IRB, GDPR, ONC and CMS Meaningful Use. Data quality and stewardship that hold up to an audit.",
  },
  {
    icon: ClipboardCheck,
    title: "Research operations",
    text: "Multi-site and international program coordination, grant writing, PI support and fiscal oversight.",
  },
  {
    icon: Compass,
    title: "Digital health strategy",
    text: "eHealth architecture, executive advisory and capacity building — including for government health ministries — that align technology with clinical and business goals.",
  },
];


type Discipline = (typeof disciplines)[number];

/** "Learn More" link and its detail panel for one discipline. */
const ExpertiseLearnMore = ({ discipline }: { discipline: Discipline }) => {
  const detail = EXPERTISE_DETAILS[discipline.title];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-semibold text-primary transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Learn More
          <span className="sr-only"> about {discipline.title}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent
        onCloseAutoFocus={(e) => {
          if (jumpState.toForm) e.preventDefault();
        }}
        className="max-h-[88vh] w-[min(94vw,48rem)] max-w-none gap-0 overflow-y-auto rounded-3xl border border-primary/25 bg-card p-0 [&>button.absolute]:z-10 [&>button.absolute]:data-[state=open]:bg-transparent [&>button.absolute]:data-[state=open]:text-foreground/70 [&>button.absolute]:hover:text-primary"
      >
        <div className="relative overflow-hidden border-b border-border px-7 pb-7 pt-8 sm:px-9">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
          <DialogHeader className="relative space-y-3 text-left">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                <discipline.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <span className="eyebrow">Expertise</span>
            </div>
            <DialogTitle className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">{discipline.title}</DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed text-muted-foreground">{detail.overview}</DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-8 px-7 py-8 sm:px-9">
          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What it covers</h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {detail.covers.map((c) => (
                <div key={c.name} className="rounded-2xl border border-border bg-background/50 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-5">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Experience
            </h4>
            <ul className="mt-3 space-y-2">
              {detail.experience.map((e) => (
                <li key={e} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Tools &amp; standards</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {detail.tools.map((t) => (
                <li key={t} className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-foreground/80">{t}</li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Have a project in this area?</p>
            <DialogClose asChild>
              <button
                type="button"
                onClick={() => prefillContact({ service: detail.service }, { fromDialog: true })}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[hsl(var(--gold-light))]"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Expertise = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section id="expertise" className="relative py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Expertise" title="Six disciplines, one goal: decisions you can trust" />

        <div ref={ref} className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <div
              key={d.title}
              className={`group flex flex-col bg-card p-8 transition-all duration-700 hover:bg-secondary/60 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
                <d.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              {EXPERTISE_DETAILS[d.title] && <ExpertiseLearnMore discipline={d} />}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tools &amp; standards</p>
          <ul className="flex flex-wrap gap-2">
            {TOOL_SUMMARIES.map((t) => (
              <li key={t.name}>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:border-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary"
                    >
                      {t.name}
                      <Plus className="h-3 w-3 transition-transform duration-200 [[data-state=open]_&]:rotate-45" aria-hidden="true" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="start" sideOffset={8} collisionPadding={16} className="w-[min(88vw,20rem)] rounded-2xl border-primary/25 p-5 shadow-xl shadow-black/40">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{t.kind}</p>
                    <h4 className="mt-1 font-mono text-base font-semibold text-foreground">{t.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                    {t.onSite && (
                      <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-foreground/85">
                        <span className="font-semibold text-primary">Dr. Rex's work: </span>
                        {t.onSite}
                      </p>
                    )}
                  </PopoverContent>
                </Popover>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
