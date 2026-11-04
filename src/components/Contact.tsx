import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone, Globe, MapPin, ArrowUpRight, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { track } from "@/lib/track";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AUDIENCE_OPTIONS, PREFILL_EVENT, SERVICE_GROUPS, type Audience } from "@/lib/contact-prefill";
import rexOffice1 from "@/assets/rex-office-1.png";
import rexOffice3 from "@/assets/rex-office-3.png";

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
  organization: z.string().trim().max(200, { message: "Organization must be less than 200 characters" }).optional(),
  audience: z.enum(["", "hospital", "government", "research", "other"]).optional(),
  service: z.string().trim().max(120).optional(),
  message: z.string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
  _gotcha: z.string().max(0).optional(), // Honeypot field
});

const INQUIRY_ENDPOINT = "https://rex-console.vercel.app/api/inquiries";

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      audience: "",
      service: "Not sure yet",
      message: "",
      _gotcha: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // "Who I work with" and "Services" buttons pre-select these fields.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const { audience, service } = (e as CustomEvent<{ audience?: Audience; service?: string }>).detail ?? {};
      if (audience) form.setValue("audience", audience);
      if (service) form.setValue("service", service);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, [form]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Sends the request to the Site Console dashboard (rex-console.vercel.app),
      // which stores it and emails a notification.
      const response = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          organization: data.organization ?? "",
          audience: data.audience || "other",
          service: data.service && data.service !== "Not sure yet" ? data.service : "Consultation request",
          message: data.message,
          website: data._gotcha ?? "", // honeypot
        }),
      });

      if (response.ok) {
        track("inquiry_submit");
        toast.success("Thank you for your message! I'll get back to you soon.");
        form.reset();
      } else if (response.status === 429) {
        toast.error("You've sent a few messages already. Please try again in a few minutes.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectClass =
    "flex h-12 w-full appearance-none rounded-xl border border-input bg-[hsl(240_4%_6%)] px-4 pr-10 text-base text-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  const details = [
    { icon: Phone, label: "Phone", value: "+1 (973) 563-5798", href: "tel:+19735635798" },
    { icon: Mail, label: "Email", value: "contact@drrexacheampong.com", href: "mailto:contact@drrexacheampong.com" },
    { icon: Linkedin, label: "LinkedIn", value: "Rex Acheampong, PhD", href: "https://www.linkedin.com/in/rex-acheampong-phd-6811442b/", external: true },
    { icon: Globe, label: "Company", value: "strategicehealthsolutions.com", href: "https://strategicehealthsolutions.com/", external: true },
    { icon: MapPin, label: "Based in", value: "New Jersey, USA · working with Accra, Ghana" },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-32">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6">
        {/* Photos */}
        <div className={`mb-20 grid gap-6 transition-all duration-700 sm:grid-cols-2 ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          {[
            { src: rexOffice1, alt: "Dr. Rex Acheampong - Health Informatician" },
            { src: rexOffice3, alt: "Dr. Rex Acheampong in office" },
          ].map((img) => (
            <div key={img.alt} className="group relative overflow-hidden rounded-3xl border border-border bg-card">
              <img src={img.src} alt={img.alt} className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`transition-all duration-700 ${sectionVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <span className="eyebrow">Work with me</span>
            <h2 className="mt-5 mb-6 text-4xl font-semibold leading-[1.04] md:text-5xl lg:text-6xl">Let's Build Something Transformative</h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Whether you're looking to implement AI in your healthcare organization, need strategic guidance, want to
              collaborate on research, or want to invite me to speak—I'd love to hear from you.
            </p>

            <dl className="divide-y divide-border rounded-3xl border border-border bg-card">
              {details.map((d) => (
                <div key={d.label} className="flex items-center gap-4 px-6 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/25">
                    <d.icon className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{d.label}</dt>
                    <dd className="truncate text-[15px] text-foreground">
                      {d.href ? (
                        <a
                          href={d.href}
                          {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                        >
                          {d.value}
                          {d.external && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div
            id="contact-form"
            className={`scroll-mt-28 rounded-3xl border border-border bg-card p-7 transition-all delay-200 duration-700 md:p-9 ${sectionVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3 className="mb-7 font-serif text-3xl font-semibold text-foreground">Send a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" autoComplete="name" {...field} />
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
                        <FormLabel className="text-sm font-semibold text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Organization <span className="font-normal text-muted-foreground">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Hospital, ministry, university…" autoComplete="organization" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="audience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">I am with a…</FormLabel>
                        <div className="relative">
                        <FormControl>
                          <select className={selectClass} {...field}>
                            <option value="">Choose one</option>
                            {AUDIENCE_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" aria-hidden="true" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">Interested in</FormLabel>
                        <div className="relative">
                        <FormControl>
                          <select className={selectClass} {...field}>
                            {SERVICE_GROUPS.map((g) => (
                              <optgroup key={g.label} label={g.label}>
                                {g.options.map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </FormControl>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" aria-hidden="true" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." rows={5} className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  {...form.register("_gotcha")}
                />

                <Button type="submit" size="lg" className="w-full glow-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
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
