import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured Work
          </h2>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="icon" className="shrink-0 w-12 h-12 rounded-full border-border group-hover:border-primary group-hover:text-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
