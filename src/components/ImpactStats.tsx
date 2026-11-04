import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  { value: "2.3M", label: "hospital records analysed for doctoral research on renal failure", source: "HCUP · National Inpatient Sample" },
  { value: "200M", label: "clinical records in the GE Centricity → Epic migration", source: "Rutgers Health Group" },
  { value: "16", label: "research sites in Ghana with EMR data governance and analytics infrastructure", source: "Strategic eHealth Solutions" },
  { value: "25+", label: "years in technology, 12+ of them in healthcare informatics and research", source: "Ghana · London · New Jersey" },
];

/** Headline numbers from Dr. Rex's career, shown just below the hero. */
const ImpactStats = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section id="impact" aria-label="Impact in numbers" className="relative border-y border-border bg-card/40">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={`px-2 py-10 transition-all duration-700 sm:px-6 lg:first:pl-0 lg:last:pr-0 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <p className="font-serif text-5xl font-semibold leading-none text-gradient md:text-6xl">{s.value}</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">{s.label}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
