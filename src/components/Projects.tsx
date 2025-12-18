import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

  return (
    <section id="projects" className="py-32 relative">
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
                <Button variant="outline" size="icon" className="shrink-0 w-12 h-12 rounded-full border-border group-hover:border-primary group-hover:text-primary group-hover:rotate-45 group-hover:scale-110 transition-all duration-500">
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
