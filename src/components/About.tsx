import { Brain, Heart, Shield, Zap } from "lucide-react";
import rexHeadshot from "@/assets/rex-headshot.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const expertise = [
  {
    icon: Brain,
    title: "AI Architecture",
    description: "Designing and building intelligent AI agent systems that automate complex healthcare workflows."
  },
  {
    icon: Heart,
    title: "Health Informatics",
    description: "Leveraging data science and clinical knowledge to improve patient outcomes and system efficiency."
  },
  {
    icon: Shield,
    title: "GovTech Strategy",
    description: "Advising government health ministries on digital transformation and AI adoption strategies."
  },
  {
    icon: Zap,
    title: "AI Consulting",
    description: "Guiding startups and enterprises through AI implementation from strategy to deployment."
  }
];

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Photo with different treatment - rounded rectangle with offset border */}
          <div className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary/50 rounded-2xl blur-sm opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl translate-x-4 translate-y-4 -z-10" />
              <img 
                src={rexHeadshot} 
                alt="Rex Acheampong, PhD" 
                className="relative w-72 h-80 md:w-80 md:h-96 object-cover object-top rounded-2xl border border-border"
              />
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Bridging AI Innovation & Healthcare Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With a PhD in Health Informatics and deep expertise in AI systems architecture, 
              I work at the intersection of cutting-edge technology and healthcare transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is to make AI accessible, practical, and impactful for healthcare 
              organizations of all sizes—from government health ministries to innovative startups.
            </p>
          </div>
        </div>
        
        {/* Expertise grid below */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div 
              key={item.title}
              className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:glow-accent hover:-translate-y-1 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
