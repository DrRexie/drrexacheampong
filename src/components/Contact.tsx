import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Build Something Transformative
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking to implement AI in your healthcare organization, 
              need strategic guidance, or want to invite me to speak—I'd love to hear from you.
            </p>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-border hover:border-primary hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-border hover:border-primary hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-border hover:border-primary hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-card border border-border">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                  <Input placeholder="Your name" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-secondary border-border" />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                <Input placeholder="How can I help?" className="bg-secondary border-border" />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea placeholder="Tell me about your project..." rows={5} className="bg-secondary border-border resize-none" />
              </div>
              
              <Button size="lg" className="w-full glow-primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
