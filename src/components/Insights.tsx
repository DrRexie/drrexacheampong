import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const notes = [
  {
    topic: "Responsible AI",
    title: "Putting agentic AI into clinical workflows safely",
    text: "Where AI agents help clinicians, and the governance that has to come first.",
  },
  {
    topic: "Interoperability",
    title: "What national HIE projects get wrong about data",
    text: "Lessons on standards, duplicate records and trust between facilities.",
  },
  {
    topic: "Analytics",
    title: "From 2 million records to one clear finding",
    text: "How large-scale health data turns into decisions people can act on.",
  },
];

const Insights = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section id="insights" className="relative py-28 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Insights · Coming soon"
          title="Notes on AI, data and the future of care"
          intro="Practical writing for health leaders on the questions I work on every day."
        />
        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {notes.map((n, i) => (
            <article
              key={n.title}
              className={`relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{n.topic}</span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">Coming soon</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-foreground">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
