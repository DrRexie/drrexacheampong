import { Mic, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy Consulting",
    description: "Strategic guidance on AI adoption, from opportunity identification to implementation roadmaps tailored for healthcare organizations.",
    cta: "Book Consultation"
  },
  {
    icon: Users,
    title: "Advisory & Implementation",
    description: "Hands-on support building AI agent systems, health informatics platforms, and data infrastructure that delivers real results.",
    cta: "Hire Me"
  },
  {
    icon: Mic,
    title: "Speaking & Workshops",
    description: "Engaging keynotes and workshops on AI in healthcare, digital transformation, and the future of health technology.",
    cta: "Invite to Speak"
  }
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            How I Can Help
          </h2>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground flex-1 mb-6">{service.description}</p>
              
              <Button variant="ghost" className="justify-start p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group-hover:translate-x-1 transition-transform">
                {service.cta} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
