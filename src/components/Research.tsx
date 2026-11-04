import { BookOpen, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const publications = [
  {
    year: "2023",
    title: "Hospitalization Characteristics and Predictors of Renal Failure of Inpatients in the United States",
    text: "PhD dissertation. Statistical modeling of about 2.31 million inpatient records.",
    meta: ["ProQuest · HCUP NIS", "Rutgers SHP"],
  },
  {
    year: "2015",
    title: "Statistical Analysis of Breast Cancer Amongst African American Women",
    text: "MS thesis using a large HCUP dataset and logistic regression.",
    meta: ["Master's thesis", "Rutgers SHP"],
  },
  {
    year: "2010",
    title: "Analyzing a Spring Mass Lattice with a Discrete Time-Series",
    text: "Undergraduate mathematical research.",
    meta: ["NSF DMS-0636648 · CURM", "Montclair State"],
  },
];

const degrees = [
  { degree: "PhD", field: "Biomedical Informatics", school: "Rutgers SHP", year: "2023" },
  { degree: "MS", field: "Biomedical Informatics", school: "Rutgers SHP", year: "2015" },
  { degree: "BS", field: "Mathematics", school: "Montclair State", year: "2010" },
  { degree: "Cert.", field: "Mathematics Education", school: "Univ. of Cape Coast", year: "1993" },
];

const Research = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section id="research" className="relative py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Research & education" title="Evidence from large-scale health data" />
        <div ref={ref} className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <ol className="space-y-5">
            {publications.map((p, i) => (
              <li
                key={p.year}
                className={`group grid gap-4 rounded-3xl border border-border bg-card p-7 transition-all duration-700 hover:border-primary/40 sm:grid-cols-[auto_1fr] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="font-serif text-3xl font-semibold leading-none text-gradient">{p.year}</span>
                <div>
                  <h3 className="flex gap-2 text-lg font-semibold leading-snug text-foreground">
                    <BookOpen className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.12em] text-primary/80">
                    {p.meta.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div
            className={`h-fit rounded-3xl border border-primary/25 bg-card p-7 transition-all delay-300 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Education
            </p>
            <ul className="mt-6 divide-y divide-border">
              {degrees.map((d) => (
                <li key={d.degree + d.year} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-serif text-xl font-semibold text-foreground">
                    {d.degree} <span className="font-normal text-foreground/80">{d.field}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {d.school} · {d.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
