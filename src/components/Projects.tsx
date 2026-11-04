import { ArrowUpRight, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState, useRef } from "react";

type Tag = { name: string; summary: string };

const projects: { title: string; category: string; description: string; tags: Tag[] }[] = [
  {
    title: "AI-Powered Clinical Decision Support",
    category: "Healthcare AI",
    description: "Built an intelligent agent system that analyzes patient data in real-time, providing clinicians with evidence-based treatment recommendations.",
    tags: [
      {
        name: "Multi-Agent RAG",
        summary:
          "Retrieval-augmented generation with several cooperating AI agents: each one looks up trusted sources and patient context before the system answers, so its output is grounded in evidence rather than the model's memory. Here it drives the evidence-based treatment recommendations clinicians receive.",
      },
      {
        name: "NLP",
        summary:
          "Natural language processing lets software read and understand written language such as clinical notes, reports and guidelines. Here it turns patient documentation into information the decision-support agents can analyze in real time.",
      },
      {
        name: "Clinical AI",
        summary:
          "AI designed for use in patient care, where accuracy, transparency and clinician oversight come first. Here the system supports clinicians with recommendations at the point of care, while treatment decisions stay with the clinician.",
      },
    ],
  },
  {
    title: "National Health Data Platform",
    category: "GovTech",
    description: "Designed and implemented a scalable health informatics platform for a national health ministry, serving millions of citizens.",
    tags: [
      {
        name: "Data Architecture",
        summary:
          "The blueprint for how health data is structured, connected and governed across facilities and systems. Here it lets a national health ministry bring information together on one platform that scales to millions of citizens.",
      },
      {
        name: "Cloud",
        summary:
          "Cloud infrastructure provides computing and storage that can grow with demand. Here it gives the national platform room to scale as more facilities and citizens are served.",
      },
      {
        name: "Security",
        summary:
          "Protecting sensitive health records through access control, encryption, monitoring and audit trails. Here it is a foundation of the platform, which holds health information at national scale.",
      },
    ],
  },
  {
    title: "Predictive Analytics for Hospital Operations",
    category: "Healthcare Analytics",
    description: "Developed ML models that predict patient admission patterns, reducing wait times by 40% and optimizing resource allocation.",
    tags: [
      {
        name: "Machine Learning",
        summary:
          "Models that learn patterns from historical data to make predictions. Here they forecast patient admission patterns, the basis for reducing wait times by 40%.",
      },
      {
        name: "Operations",
        summary:
          "The day-to-day running of a hospital: beds, staffing, scheduling and patient flow. Here admission forecasts let teams prepare for demand before it arrives.",
      },
      {
        name: "Analytics",
        summary:
          "Turning data into clear measures and insights that decision-makers can act on. Here it guides how the hospital allocates its resources.",
      },
    ],
  },
];

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation(0.1);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        // Calculate relative scroll position within the section
        const relativeScroll = (windowHeight - sectionTop) / (windowHeight + rect.height);
        setScrollY(Math.max(0, Math.min(1, relativeScroll)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slow moving large gradient orb */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
          style={{ 
            top: '10%',
            left: '-10%',
            transform: `translateY(${scrollY * 100}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Medium speed accent orb */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-accent/10 via-accent/5 to-transparent blur-2xl"
          style={{ 
            top: '40%',
            right: '-5%',
            transform: `translateY(${scrollY * 150}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Fast moving small orb */}
        <div 
          className="absolute w-[200px] h-[200px] rounded-full bg-primary/5 blur-xl"
          style={{ 
            bottom: '20%',
            left: '20%',
            transform: `translateY(${scrollY * -80}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Geometric shapes - slowest */}
        <div 
          className="absolute w-32 h-32 border border-primary/10 rounded-2xl rotate-45"
          style={{ 
            top: '15%',
            right: '15%',
            transform: `translateY(${scrollY * 60}px) rotate(${45 + scrollY * 20}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        <div 
          className="absolute w-20 h-20 border border-accent/10 rounded-full"
          style={{ 
            bottom: '30%',
            right: '25%',
            transform: `translateY(${scrollY * -40}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 30}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow">Projects</span>
          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.02] mt-5">
            Featured Work
          </h2>
        </div>
        
        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative p-8 md:p-10 rounded-3xl bg-card border border-border transition-all duration-700 ease-out
                hover:border-primary/40 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10
                ${projectsVisible 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-12 scale-95 blur-sm'
                }`}
              style={{ transitionDelay: projectsVisible ? `${index * 200}ms` : '0ms' }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className={`text-primary text-sm font-medium inline-block transition-all duration-500 ${projectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: projectsVisible ? `${index * 200 + 100}ms` : '0ms' }}>
                    {project.category}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-bold mt-2 mb-4 group-hover:text-primary transition-all duration-500 ${projectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: projectsVisible ? `${index * 200 + 150}ms` : '0ms' }}>
                    {project.title}
                  </h3>
                  <p className={`text-muted-foreground max-w-2xl transition-all duration-500 ${projectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: projectsVisible ? `${index * 200 + 200}ms` : '0ms' }}>
                    {project.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mt-4 transition-all duration-500 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: projectsVisible ? `${index * 200 + 250}ms` : '0ms' }}>
                    {project.tags.map((tag) => (
                      <Popover key={tag.name}>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full border border-primary/30 bg-primary/10 text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:border-primary"
                          >
                            {tag.name}
                            <Plus className="w-3 h-3 transition-transform duration-200 [[data-state=open]_&]:rotate-45" aria-hidden="true" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent align="start" sideOffset={8} className="w-80 rounded-2xl border-primary/20 p-5 shadow-xl shadow-primary/10">
                          <p className="text-xs font-medium uppercase tracking-widest text-primary">{project.category}</p>
                          <h4 className="mt-1 text-base font-bold text-foreground">{tag.name}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tag.summary}</p>
                          <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                            Part of <span className="font-medium text-foreground">{project.title}</span>
                          </p>
                        </PopoverContent>
                      </Popover>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="icon" className="shrink-0 w-12 h-12 rounded-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground group-hover:rotate-45 group-hover:scale-110 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 20px hsl(var(--primary) / 0.1)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
