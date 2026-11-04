import { useRef, useState } from "react";
import { Brain, Building2, CheckCircle2, ExternalLink, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const COMPANY_URL = "https://strategicehealthsolutions.com/#case-studies";

/** Case studies as published on strategicehealthsolutions.com (keep the wording in step with that site). */
const projects = [
  {
    icon: Building2,
    category: "EMR Implementation",
    title: "Nationwide EMR Rollout for Public Hospitals",
    impact: "Serving 3M+ patients annually",
    challenge:
      "Fragmented patient data across multiple GHS facilities leading to incomplete medical histories, duplicated tests, and care coordination challenges.",
    solution:
      "Deployed standardized EMR systems across 200+ public health facilities with customized workflows, offline capabilities, and centralized data management.",
    outcomes: [
      "85% reduction in duplicate patient records",
      "60% faster clinical documentation",
      "Standardized reporting to DHIMS2",
      "Improved medication tracking and alerts",
    ],
  },
  {
    icon: Share2,
    category: "Health Information Exchange",
    title: "Health Information Exchange for Continuity of Care",
    impact: "Connecting 150+ facilities",
    challenge:
      "Patients receiving care at multiple facilities had no unified view of their health history, leading to repeated diagnostics and fragmented treatment plans.",
    solution:
      "Established regional HIE infrastructure enabling secure, consent-based sharing of patient records across public and private healthcare providers.",
    outcomes: [
      "Real-time patient data sharing across regions",
      "40% reduction in redundant laboratory tests",
      "Streamlined referral management system",
      "Enhanced public health surveillance",
    ],
  },
  {
    icon: Brain,
    category: "AI Analytics",
    title: "AI-Driven Public Health Analytics",
    impact: "Analyzing 10M+ health records",
    challenge:
      "Manual data analysis limiting GHS's ability to identify disease patterns, allocate resources effectively, and report to stakeholders in a timely manner.",
    solution:
      "Implemented AI-powered analytics platform processing health data from connected facilities to generate actionable insights and automated reports.",
    outcomes: [
      "Early warning system for disease outbreaks",
      "Automated donor and ministry reporting",
      "Predictive models for resource planning",
      "Real-time dashboards for decision-makers",
    ],
  },
];

/** "View Projects" button that opens the Strategic eHealth Solutions case studies. */
const StrategicProjects = () => {
  const [open, setOpen] = useState(false);
  const jumpToForm = useRef(false);

  const bookConsultation = () => {
    jumpToForm.current = true;
    setOpen(false);
  };

  return (
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:bg-secondary">
        View Projects
      </Button>
    </DialogTrigger>
    <DialogContent
      className="flex max-h-[88vh] max-w-3xl flex-col gap-0 overflow-hidden rounded-3xl p-0"
      onCloseAutoFocus={(e) => {
        // After "Book a Consultation", go to the form instead of returning focus to the hero button.
        if (!jumpToForm.current) return;
        e.preventDefault();
        jumpToForm.current = false;
        const form = document.getElementById("contact-form");
        form?.scrollIntoView({ behavior: "smooth", block: "start" });
        form?.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true });
      }}
    >
      <DialogHeader className="shrink-0 border-b border-border px-6 py-5 pr-12 text-left sm:px-8">
        <span className="text-primary text-xs font-medium uppercase tracking-widest">Strategic eHealth Solutions</span>
        <DialogTitle className="text-2xl font-bold">Projects transforming healthcare in Ghana</DialogTitle>
        <DialogDescription>
          Delivered with Ghana Health Service by Strategic eHealth Solutions, the digital health company Dr. Acheampong
          founded and leads.
        </DialogDescription>
      </DialogHeader>

      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-6 py-6 sm:px-8">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{p.category}</p>
                  <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                </div>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{p.impact}</span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</h4>
                <p className="mt-1 text-sm leading-relaxed">{p.challenge}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</h4>
                <p className="mt-1 text-sm leading-relaxed">{p.solution}</p>
              </div>
            </div>

            <h4 className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Outcomes</h4>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {p.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-4 sm:px-8">
        <a
          href={COMPANY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Full case studies at strategicehealthsolutions.com
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
        <Button size="sm" onClick={bookConsultation}>
          Book a Consultation
        </Button>
      </div>
    </DialogContent>
  </Dialog>
  );
};

export default StrategicProjects;
