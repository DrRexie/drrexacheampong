import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    title: "AI-Powered Clinical Decision Support",
    category: "Healthcare AI",
    description: "Built an intelligent agent system that analyzes patient data in real-time, providing clinicians with evidence-based treatment recommendations.",
    tags: ["Multi-Agent RAG", "NLP", "Clinical AI"]
  },
  {
    title: "National Health Data Platform",
    category: "GovTech",
    description: "Designed and implemented a scalable health informatics platform for a national health ministry, serving millions of citizens.",
    tags: ["Data Architecture", "Cloud", "Security"]
  },
  {
    title: "Predictive Analytics for Hospital Operations",
    category: "Healthcare Analytics",
    description: "Developed ML models that predict patient admission patterns, reducing wait times by 40% and optimizing resource allocation.",
    tags: ["Machine Learning", "Operations", "Analytics"]
  }
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
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
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
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 group-hover:scale-105"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="icon" className="shrink-0 w-12 h-12 rounded-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white group-hover:rotate-45 group-hover:scale-110 transition-all duration-500">
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
