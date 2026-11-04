import { FlaskConical, Lightbulb, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { prefillContact } from "@/lib/contact-prefill";
import rexOffice from "@/assets/rex-office-2.png";

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy Consulting",
    description:
      "Strategic guidance on AI adoption, from opportunity identification to implementation roadmaps tailored for healthcare organizations.",
    cta: "Book Consultation",
    service: "AI strategy consulting",
  },
  {
    icon: Users,
    title: "Advisory & Implementation",
    description:
      "Hands-on support building AI agent systems, EHR, HIE and health informatics platforms, and data infrastructure that delivers real results.",
    cta: "Hire Me",
    service: "Advisory & implementation",
  },
  {
    icon: FlaskConical,
    title: "Research Design & Statistics",
    description:
      "Study design, analysis plans and statistical consulting for single-site and international research programs.",
    cta: "Collaborate",
    service: "Study design",
  },
  {
    icon: Mic,
    title: "Speaking & Workshops",
    description:
      "Keynotes, panels and workshops on AI in healthcare, digital transformation, and the future of health technology.",
    cta: "Invite to Speak",
    service: "Speaking & workshops",
  },
];

const Services = () => {
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.15);

  return (
    <section id="services" className="relative py-28 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <SectionHeader
            className="mb-0"
            eyebrow="Services"
            title="How I Can Help"
            intro="With over a decade of experience in health informatics and AI, I help organizations transform their healthcare delivery through strategic technology adoption. I'm available for advisory and consulting work, speaking, and research collaboration."
          />
          <div
            ref={imgRef}
            className={`hidden transition-all duration-700 lg:block ${imgVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary/15 blur-2xl" aria-hidden="true" />
              <img
                src={rexOffice}
                alt="Dr. Rex Acheampong in office"
                className="relative aspect-[4/3] w-full rounded-3xl object-cover object-top shadow-2xl gold-ring"
              />
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${
                cardsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Button
                variant="outline"
                className="w-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                onClick={() => prefillContact({ service: s.service })}
              >
                {s.cta} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
