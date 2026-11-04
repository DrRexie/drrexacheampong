import { ArrowRight, Building2, FlaskConical, Landmark } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { prefillContact, type Audience } from "@/lib/contact-prefill";

const audiences: {
  key: Audience;
  icon: typeof Building2;
  kicker: string;
  title: string;
  text: string;
  points: string[];
  cta: string;
}[] = [
  {
    key: "hospital",
    icon: Building2,
    kicker: "Hospitals & clinical networks",
    title: "Health systems ready to modernize",
    text: "EHR implementation, data migration and clinical analytics that clinicians and executives both use.",
    points: ["EMR/EHR selection and migration", "Quality and CMS reporting", "Dashboards for clinical operations"],
    cta: "Start a conversation",
  },
  {
    key: "government",
    icon: Landmark,
    kicker: "Governments & development partners",
    title: "National digital health programs",
    text: "Interoperable, governed health information systems for multi-facility and national rollouts, with Ghana as the proving ground.",
    points: ["eHealth architecture and HIE", "HL7, FHIR and DHIMS2 integration", "Data protection and ethical AI policy"],
    cta: "Discuss a program",
  },
  {
    key: "research",
    icon: FlaskConical,
    kicker: "Research institutions",
    title: "Research teams with complex data",
    text: "Study design, statistical modeling and compliant data operations for single-site and international research.",
    points: ["Analysis plans and sample size", "Predictive modeling on large datasets", "HIPAA, IRB and GDPR-ready workflows"],
    cta: "Collaborate on research",
  },
];

const Audiences = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section id="audiences" className="relative py-28 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Who I work with"
          title="For organizations that run on health data"
          intro="Three kinds of teams come to me for help, each with a different problem to solve."
        />
        <div ref={ref} className="grid gap-6 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <article
              key={a.key}
              className={`group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-700 hover:-translate-y-1 hover:border-primary/50 hover:glow-accent ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/25">
                  <a.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{a.kicker}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-foreground md:text-[1.7rem]">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
                {a.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => prefillContact({ audience: a.key })}
                className="mt-8 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-primary transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              >
                {a.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
