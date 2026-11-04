import { ArrowUpRight, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const responsibilities = [
  "Designed the data governance framework and analytics infrastructure for EMR implementation across 16 research sites in Ghana",
  "Lead EHR, analytics platform and agentic AI design and rollout",
  "Advise leadership on AI/ML adoption, ethical AI and responsible data use",
];

const reported = [
  { value: "500+", label: "facilities connected" },
  { value: "10M+", label: "patient records managed" },
  { value: "85%", label: "fewer duplicate records after EMR rollout" },
  { value: "40%", label: "fewer redundant lab tests via HIE" },
];

const tags = ["EMR/EHR", "HIE", "HL7", "FHIR", "DHIMS2", "Clinical decision support"];

/** Dr. Rex's current role as Chief Informatics Officer at Strategic eHealth Solutions. */
const CurrentRole = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section id="work" className="relative py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Current role · Since June 2024" title="Strategic eHealth Solutions" />

        <div
          ref={ref}
          className={`relative overflow-hidden rounded-[2rem] border border-primary/25 bg-card transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-serif text-2xl italic text-primary md:text-3xl">Powering Ghana's digital health transformation</p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                As <span className="font-semibold text-foreground">Chief Informatics Officer</span>, I set the organization's
                informatics and AI strategy, bringing clinicians, data teams and leadership together around one plan.
              </p>
              <ul className="mt-8 space-y-4">
                {responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-foreground/90">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/75">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="https://strategicehealthsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/60 px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Visit the company
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-col justify-center">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {reported.map((r) => (
                  <div key={r.label} className="bg-background/60 p-6">
                    <dt className="sr-only">{r.label}</dt>
                    <dd>
                      <span className="block font-serif text-4xl font-semibold text-gradient">{r.value}</span>
                      <span className="mt-2 block text-xs leading-snug text-muted-foreground">{r.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">As reported by Strategic eHealth Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentRole;
