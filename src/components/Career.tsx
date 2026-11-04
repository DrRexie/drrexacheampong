import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const roles = [
  {
    years: "2023 – 2024",
    title: "Clinical Data Analyst",
    org: "NJ Medication-Assisted Treatment Center of Excellence, Rutgers NJMS",
    text: "Built performance metrics and Tableau dashboards from clinical data across eight systems.",
  },
  {
    years: "2016 – 2022",
    title: "Clinical Data Analytics Manager",
    org: "Rutgers RWJ Medical School",
    text: "Contributed to the 200M-record Centricity → Epic migration. Ran analytics for 15 entities and about 200 providers, and handled CMS quality reporting.",
  },
  {
    years: "2013 – 2016",
    title: "User Support Specialist IV",
    org: "Rutgers School of Nursing",
    text: "Trained clinicians on EMRs, including on a Mobile Health Van. Built the immunization database reported to New York State.",
  },
  {
    years: "2010 – 2013",
    title: "Application Specialist",
    org: "UMDNJ / Rutgers School of Nursing",
    text: "Applied regression, clustering and classification in R and Stata to data from multiple clinics, with findings that informed health policy.",
  },
];

const Career = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section id="career" className="relative py-28 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Career" title="Thirteen years in clinical and research data at Rutgers" />
        <div ref={ref}>
        <ol className="relative border-l border-primary/30 md:ml-40">
          {roles.map((r, i) => (
            <li
              key={r.years}
              className={`relative pb-12 pl-8 transition-all duration-700 last:pb-0 md:pl-12 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span
                className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary md:absolute md:-left-40 md:top-1 md:w-32 md:text-right">
                {r.years}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground md:mt-0">{r.title}</h3>
              <p className="mt-1 text-sm text-primary/80">{r.org}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{r.text}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
};

export default Career;
