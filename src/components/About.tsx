import rexHeadshot from "@/assets/rex-portrait-office-red-tie.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const journey = [
  {
    years: "1990 – 1993",
    place: "Cape Coast, Ghana",
    title: "Trained to teach",
    text: "Associate degree and certificate in Mathematics Education at the University of Cape Coast.",
  },
  {
    years: "1998 – 2002",
    place: "London, UK",
    title: "Learned the systems",
    text: "IT Support Specialist for the London Borough of Lewisham, managing secure access and supporting public-sector users.",
  },
  {
    years: "2003 – 2023",
    place: "New Jersey, USA",
    title: "Built the expertise",
    text: "Network administration, then a BS in Mathematics, followed by 13 years in Rutgers clinical and research settings while earning an MS and a PhD in Biomedical Informatics.",
  },
  {
    years: "2024 – today",
    place: "New Jersey & Accra",
    title: "Bringing it home",
    text: "Back to where it began: working between New Jersey and Accra on Ghana's digital health transformation.",
  },
];

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-28 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div ref={sectionRef} className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={`flex justify-center transition-all duration-700 lg:justify-start ${
              sectionVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl border border-primary/30" aria-hidden="true" />
              <img
                src={rexHeadshot}
                alt="Rex Acheampong, PhD"
                className="relative h-96 w-80 rounded-3xl object-cover object-top gold-ring md:h-[28rem] md:w-96"
              />
            </div>
          </div>

          <div
            className={`transition-all delay-200 duration-700 ${
              sectionVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <span className="eyebrow">About</span>
            <h2 className="mt-5 mb-6 text-4xl font-semibold leading-[1.04] md:text-5xl lg:text-6xl">
              Bridging AI Innovation &amp; Healthcare Excellence
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              With a PhD in Biomedical Informatics and deep expertise in AI systems architecture, I work at the
              intersection of cutting-edge technology and healthcare transformation.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              My mission is to make AI accessible, practical, and impactful for healthcare organizations of all
              sizes—from government health ministries to innovative startups.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I started as a mathematics teacher, and teaching still shapes how I work: I want complex data to be
              clear enough for the people who have to act on it.
            </p>
          </div>
        </div>

        {/* My story */}
        <div id="story" ref={storyRef} className="mt-24 scroll-mt-28">
          <div
            className={`mb-12 flex flex-col gap-4 transition-all duration-700 md:flex-row md:items-end md:justify-between ${
              storyVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div>
              <span className="eyebrow">My story</span>
              <h3 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight md:text-4xl">
                From a math classroom in Ghana to Ghana's digital health future
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A career across three countries — and back to where it began.
            </p>
          </div>

          <div className="relative">
          <div
            className="absolute left-0 right-0 top-[11px] hidden h-px bg-gradient-to-r from-primary/60 via-primary/30 to-primary/60 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, i) => (
              <li
                key={step.years}
                className={`relative transition-all duration-700 ${
                  storyVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + i * 120}ms` }}
              >
                <span
                  className="relative z-10 mb-5 block h-[22px] w-[22px] rounded-full border border-primary bg-background p-[5px]"
                  aria-hidden="true"
                >
                  <span className="block h-full w-full rounded-full bg-primary" />
                </span>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{step.years}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{step.place}</p>
                  <h4 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
