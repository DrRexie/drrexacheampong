import { ArrowRight, Clock, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { INSIGHTS, type InsightNote } from "@/data/insights";
import { jumpFromDialog, jumpState } from "@/lib/contact-prefill";

/** Full insight note, opened from a card's "Learn More" link. */
const InsightDialog = ({ note }: { note: InsightNote }) => (
  <DialogContent
    onCloseAutoFocus={(e) => {
      if (jumpState.toForm) e.preventDefault();
    }}
    className="max-h-[90vh] w-[min(94vw,46rem)] max-w-none gap-0 overflow-y-auto rounded-3xl border border-primary/25 bg-card p-0 [&>button.absolute]:z-10 [&>button.absolute]:data-[state=open]:bg-transparent [&>button.absolute]:data-[state=open]:text-foreground/70 [&>button.absolute]:hover:text-primary">
    <div className="relative overflow-hidden border-b border-border px-7 pb-7 pt-8 sm:px-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
      <DialogHeader className="relative space-y-4 text-left">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="eyebrow">{note.topic}</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {note.readMinutes} min read
          </span>
        </div>
        <DialogTitle className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">{note.title}</DialogTitle>
        <DialogDescription className="text-base leading-relaxed text-foreground/80">{note.intro}</DialogDescription>
        <ul className="flex flex-wrap gap-2 pt-1" aria-label="Topics">
          {note.focus.map((f) => (
            <li key={f} className="rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary">
              {f}
            </li>
          ))}
        </ul>
      </DialogHeader>
    </div>

    <article className="space-y-8 px-7 py-8 sm:px-10">
      {note.sections.map((s) => (
        <section key={s.heading}>
          <h4 className="font-serif text-xl font-semibold text-foreground md:text-2xl">{s.heading}</h4>
          <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
          {s.points && (
            <ul className="mt-3 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-6">
        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
          Key takeaways
        </h4>
        <ol className="mt-4 space-y-2.5">
          {note.takeaways.map((t, i) => (
            <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-foreground/90">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
              {t}
            </li>
          ))}
        </ol>
      </section>

      <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">— Dr. Rex Acheampong</p>
        <div className="flex flex-wrap gap-2">
          {note.related && (
            <DialogClose asChild>
              <button
                type="button"
                onClick={() => jumpFromDialog(note.related!.href)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/50 px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                {note.related.label}
              </button>
            </DialogClose>
          )}
          <DialogClose asChild>
            <button
              type="button"
              onClick={() => jumpFromDialog("#contact-form")}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[hsl(var(--gold-light))]"
            >
              Discuss this topic
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </DialogClose>
        </div>
      </div>
    </article>
  </DialogContent>
);

const Insights = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section id="insights" className="relative py-28 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Insights"
          title="Notes on AI, data and the future of care"
          intro="Practical writing for health leaders on the questions I work on every day."
        />
        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((n, i) => (
            <article
              key={n.title}
              className={`relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-700 hover:-translate-y-1 hover:border-primary/50 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{n.topic}</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {n.readMinutes} min
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-foreground">{n.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{n.teaser}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-semibold text-primary transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Learn More
                    <span className="sr-only"> — {n.title}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </DialogTrigger>
                <InsightDialog note={n} />
              </Dialog>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
