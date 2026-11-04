import { BarChart3, Bot, ClipboardCheck, Compass, Network, ShieldCheck } from "lucide-react";
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

const tools = [
  "Python", "R", "SQL", "SAS", "Stata", "SPSS", "MATLAB", "Tableau", "Power BI", "Crystal Reports",
  "Epic", "GE Centricity", "SQL Server", "Oracle", "Hadoop", "Spark", "ICD-10", "CPT/HCPCS", "LOINC",
  "SNOMED CT", "HL7", "FHIR",
];

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
              className={`group bg-card p-8 transition-all duration-700 hover:bg-secondary/60 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
                <d.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tools &amp; standards</p>
          <ul className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <li key={t} className="rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-foreground/80">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
