import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import rexHeadshot from "@/assets/rex-hero-photo.png";
import rexLogo from "@/assets/rex-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(195_100%_50%_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-glow-pulse [animation-delay:1.5s]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,_transparent_1px),_linear-gradient(90deg,_hsl(var(--border))_1px,_transparent_1px)] bg-[size:60px_60px] opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Large Logo */}
            <div className="flex justify-center lg:justify-start mb-8 opacity-0 animate-fade-in [animation-delay:0.1s]">
              <img 
                src={rexLogo} 
                alt="Dr. Rex Acheampong Logo" 
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-in [animation-delay:0.2s]">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Health Informatics • AI Architecture • Strategy</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in [animation-delay:0.4s]">
              <span className="text-foreground">Rex Acheampong</span>
              <span className="text-muted-foreground font-medium">, PhD</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gradient mb-8 opacity-0 animate-fade-in [animation-delay:0.6s]">
              Architecting AI Systems That Transform Healthcare
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed opacity-0 animate-fade-in [animation-delay:0.8s]">
              Helping healthcare organizations, governments, and startups harness the power of 
              AI agents and intelligent systems to revolutionize patient care and operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in [animation-delay:1s]">
              <a href="#contact-form">
                <Button size="lg" className="group glow-primary text-lg px-8 py-6">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:bg-secondary">
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Profile image */}
          <div className="flex-shrink-0 opacity-0 animate-scale-in [animation-delay:0.5s]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-glow-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border bg-card animate-float">
                <img 
                  src={rexHeadshot} 
                  alt="Rex Acheampong, PhD" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in [animation-delay:1.5s]">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
