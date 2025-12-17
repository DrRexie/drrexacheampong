import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string()
    .trim()
    .min(1, { message: "Subject is required" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Form is validated - data is safe to use
    console.log("Validated form data:", data);
    toast.success("Thank you for your message! I'll get back to you soon.");
    form.reset();
  };

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-secondary border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="bg-secondary border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can I help?" className="bg-secondary border-border" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." rows={5} className="bg-secondary border-border resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full glow-primary">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
