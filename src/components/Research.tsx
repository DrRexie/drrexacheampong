import { ArrowRight, BookOpen, Download, ExternalLink, FileText, GraduationCap } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const publications = [
  {
    year: "2023",
    title: "Hospitalization Characteristics and Predictors of Renal Failure of Inpatients in the United States",
    text: "PhD dissertation. Statistical modeling of about 2.31 million inpatient records.",
    meta: ["ProQuest · HCUP NIS", "Rutgers SHP"],
    details: {
      summary:
        "Using the Nationwide Inpatient Sample for 2010–2012 (2,313,779 hospital discharges), this study asked whether length of stay, total charges, age, gender, race, socioeconomic status, number of procedures, number of diagnoses and comorbidities predict renal failure among inpatients in the United States.",
      findings: [
        "Binary logistic regression (SPSS 23); every factor was a significant predictor when modelled on its own.",
        "The multivariable model discriminated well (area under the curve 0.856; Nagelkerke R² 0.305).",
        "Renal failure was independently associated with Black race (adjusted odds ratio 2.61), other minority groups, older age, male sex, lower socioeconomic status and more diagnoses and comorbidities.",
        "The findings highlight racial and socioeconomic disparities in inpatient kidney outcomes.",
      ],
      documents: [
        {
          label: "PhD dissertation",
          note: "Rutgers, The State University of New Jersey, School of Health Professions · August 2023 · 119 pages",
          href: "/documents/Acheampong-2023-PhD-Dissertation-Renal-Failure.pdf",
          size: "0.7 MB",
        },
        {
          label: "Journal manuscript",
          note: "Prepared for the International Journal of Medical Engineering and Informatics · 18 pages",
          href: "/documents/Acheampong-Renal-Failure-Journal-Manuscript.pdf",
          size: "0.3 MB",
        },
      ],
    },
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

type PublicationDetails = {
  summary: string;
  findings: string[];
  documents: { label: string; note: string; href: string; size: string }[];
};

/** "Learn More" link that opens the summary and the full documents for a publication. */
const PublicationLearnMore = ({ title, year, details }: { title: string; year: string; details: PublicationDetails }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        type="button"
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primary transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Learn More
        <span className="sr-only"> about {title}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </DialogTrigger>
    <DialogContent className="max-h-[88vh] w-[min(94vw,46rem)] max-w-none gap-0 overflow-y-auto rounded-3xl border border-primary/25 bg-card p-0 [&>button.absolute]:z-10 [&>button.absolute]:data-[state=open]:bg-transparent [&>button.absolute]:data-[state=open]:text-foreground/70 [&>button.absolute]:hover:text-primary">
      <div className="relative overflow-hidden border-b border-border px-7 pb-7 pt-8 sm:px-9">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
        <DialogHeader className="relative space-y-3 text-left">
          <span className="eyebrow">Research · {year}</span>
          <DialogTitle className="font-serif text-2xl font-semibold leading-snug text-foreground md:text-3xl">{title}</DialogTitle>
          <DialogDescription className="text-[15px] leading-relaxed text-muted-foreground">{details.summary}</DialogDescription>
        </DialogHeader>
      </div>

      <div className="space-y-8 px-7 py-8 sm:px-9">
        <section>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Key findings</h4>
          <ul className="mt-3 space-y-2.5">
            {details.findings.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Read the full documents</h4>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {details.documents.map((d) => (
              <li key={d.href} className="flex flex-col rounded-2xl border border-border bg-background/50 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/25">
                    <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{d.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.note}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[hsl(var(--gold-light))]"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Read
                    <span className="sr-only"> the {d.label} (PDF, opens in a new tab)</span>
                  </a>
                  <a
                    href={d.href}
                    download
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-primary/50 px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download
                    <span className="sr-only"> the {d.label}</span>
                    <span className="text-xs font-normal text-muted-foreground">PDF · {d.size}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </DialogContent>
  </Dialog>
);

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
                  {"details" in p && p.details && <PublicationLearnMore title={p.title} year={p.year} details={p.details} />}
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
