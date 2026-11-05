/**
 * Insight notes shown in the Insights section; each card's "Learn More" opens the full note.
 * Practical guidance in Dr. Rex's voice. Figures cited are only those from his own published
 * research (see Research & Education); no invented case studies or statistics.
 */
export interface InsightNote {
  topic: string;
  title: string;
  teaser: string;
  readMinutes: number;
  intro: string;
  sections: { heading: string; body: string; points?: string[] }[];
  takeaways: string[];
  focus: string[]; // HIE / EMR/EHR / Clinical AI tags
  related?: { label: string; href: string };
}

export const INSIGHTS: InsightNote[] = [
  {
    topic: "Responsible AI",
    title: "Putting agentic AI into clinical workflows safely",
    teaser: "Where AI agents help clinicians, and the governance that has to come first.",
    readMinutes: 5,
    intro:
      "AI agents can do more than answer questions: they can gather information across systems, draft documentation, check records and prepare work for a clinician to approve. That power is exactly why the architecture and governance have to come before the first agent touches a patient record.",
    sections: [
      {
        heading: "Start where agents genuinely help",
        body:
          "The best early uses are tasks that are frequent, data-heavy and easy to check — not decisions that are rare, high-stakes and hard to verify.",
        points: [
          "Assembling a patient summary from the EMR/EHR before a visit or referral",
          "Drafting discharge summaries and referral letters for clinician review",
          "Flagging missing results, overdue screenings or gaps in a care pathway",
          "Pre-checking documentation and coding before claims or quality reporting",
        ],
      },
      {
        heading: "Design the architecture around the record",
        body:
          "Agents should sit beside the EHR, not around it. They read through governed interfaces — ideally FHIR APIs — with the same role-based access a clinician would have, and they write back only as drafts or suggestions that a person accepts. Answers should be grounded in the patient's own record and in approved guidelines (retrieval-augmented generation), with sources shown, rather than in a model's memory.",
      },
      {
        heading: "Governance comes first, not last",
        body: "Before go-live, a clinical AI programme needs clear answers to a short list of questions:",
        points: [
          "Who is accountable for each agent's outputs, and who can switch it off?",
          "What data can it see, and is that the minimum it needs?",
          "How is every suggestion logged, so it can be audited and explained?",
          "How will accuracy and bias be measured — at launch and every month after?",
          "How are patients informed, and how is data protected under applicable law?",
        ],
      },
      {
        heading: "Keep the clinician in charge",
        body:
          "Human-in-the-loop is not a formality. Interfaces should make it easy to see why an agent suggested something, quick to correct it, and impossible to mistake a draft for a decision. Alert fatigue is a safety risk too: fewer, better-targeted prompts beat constant interruptions.",
      },
      {
        heading: "Roll out in stages",
        body:
          "Pilot with every output reviewed, measure accuracy and time saved against a baseline, fix what fails, and only then widen the scope. Monitoring never stops: models, workflows and patient populations all change.",
      },
    ],
    takeaways: [
      "Choose high-volume, easily verified tasks first.",
      "Integrate through governed EHR interfaces; agents draft, people decide.",
      "Ground outputs in the record and approved guidance, and show sources.",
      "Put accountability, audit, and bias monitoring in place before go-live.",
    ],
    focus: ["Clinical AI architecture", "EMR/EHR", "FHIR APIs", "Governance"],
  },
  {
    topic: "Interoperability",
    title: "What national HIE projects get wrong about data",
    teaser: "Lessons on standards, duplicate records and trust between facilities.",
    readMinutes: 5,
    intro:
      "Health Information Exchange projects usually start as technology projects: buy a platform, connect the facilities, switch it on. The ones that struggle almost always stumble on data — identity, standards, quality and trust — rather than on software.",
    sections: [
      {
        heading: "Mistake 1: treating patient identity as an afterthought",
        body:
          "If the exchange cannot reliably tell that two records belong to the same person, everything built on top inherits the error — duplicate histories, missed allergies, double-counted cases. A master patient index, consistent registration practices and clear rules for matching and merging records are foundations, not add-ons.",
      },
      {
        heading: "Mistake 2: connecting systems before agreeing on meaning",
        body:
          "Moving data is easy; preserving its meaning is not. Without shared standards, a diagnosis, lab test or medication means something slightly different in every system.",
        points: [
          "Agree on exchange standards early — HL7 v2 where it is entrenched, FHIR for new APIs",
          "Use shared code sets: ICD-10 for diagnoses, LOINC for lab tests, SNOMED CT for clinical detail",
          "Publish implementation guides so every EMR/EHR vendor builds to the same specification",
        ],
      },
      {
        heading: "Mistake 3: ignoring data quality at the source",
        body:
          "An HIE amplifies whatever it receives. Incomplete registration, free-text diagnoses and late data entry at facilities become national problems. Build validation into EMR/EHR workflows, give facilities feedback on their data quality, and make good data easier to record than bad data.",
      },
      {
        heading: "Mistake 4: underestimating trust between facilities",
        body:
          "Clinicians share data when they trust how it will be used. That means clear governance: who can see what and why, patient consent, audit trails, and a legal and policy framework everyone understands. Public and private facilities need to see value flowing back to them — better referrals, fewer repeated tests — not just obligations to report.",
      },
      {
        heading: "Mistake 5: designing for the dashboard instead of the patient",
        body:
          "National reporting matters, but an HIE earns its keep at the point of care: a clinician seeing a patient's medications, allergies and recent results from another facility, or a referral that arrives with the history attached. Design those clinical use cases first, and aggregate reporting follows.",
      },
    ],
    takeaways: [
      "Fix patient identity before scaling the exchange.",
      "Agree standards and code sets before connecting systems.",
      "Improve data quality where it is created — in the EMR/EHR.",
      "Earn trust with governance, consent and value returned to facilities.",
    ],
    focus: ["HIE", "EMR/EHR", "HL7 & FHIR", "Master patient index"],
  },
  {
    topic: "Analytics",
    title: "From 2 million records to one clear finding",
    teaser: "How large-scale health data turns into decisions people can act on.",
    readMinutes: 4,
    intro:
      "For my doctoral research I analysed 2,313,779 hospital discharges from the Nationwide Inpatient Sample (2010–2012) to understand who develops renal failure in hospital. The scale was impressive; what mattered was getting from millions of rows to a finding a health leader could use.",
    sections: [
      {
        heading: "Start with a decision, not a dataset",
        body:
          "Big data invites fishing expeditions. A clear question — which patient and hospitalisation factors predict renal failure? — defined which variables mattered, how to model them and what a useful answer would look like.",
      },
      {
        heading: "Respect the data you have",
        body:
          "Administrative and EHR-derived data are recorded for billing and care, not research. Coding practices, missing values and how diagnoses are documented all shape the results. Understanding the source — and its limits — is part of the analysis, not a footnote.",
        points: [
          "Define outcomes and predictors precisely using standard codes (ICD-based diagnoses)",
          "Check completeness and consistency before modelling",
          "Remember that retrospective data show association, not causation",
        ],
      },
      {
        heading: "Choose methods people can trust",
        body:
          "I used binary logistic regression: well understood, explainable and reported as odds ratios that clinicians and managers can interpret. The multivariable model discriminated well (area under the curve 0.856), and each factor's adjusted effect could be stated plainly.",
      },
      {
        heading: "Translate numbers into a message",
        body:
          "The finding that mattered was not the model's statistics but its meaning: renal failure among inpatients was independently associated with Black race (adjusted odds ratio 2.61), other minority groups, older age, male sex, lower socioeconomic status and more diagnoses and comorbidities. That points to real racial and socioeconomic disparities — something leaders can act on through screening, follow-up and resource planning.",
      },
      {
        heading: "Build the pipeline so it can happen again",
        body:
          "A one-off study is useful; a repeatable pipeline is transformative. When EMR/EHR and HIE data flow into governed analytics platforms with consistent definitions, the same analysis can track whether disparities are narrowing — and clinical AI can flag high-risk patients early, with the same explainability.",
      },
    ],
    takeaways: [
      "A sharp question turns millions of records into one useful answer.",
      "Know your data's origins and limits before you model.",
      "Prefer explainable methods when results must drive decisions.",
      "Make analysis repeatable by building it into EMR/EHR and HIE data flows.",
    ],
    focus: ["Analytics", "EMR/EHR data", "HIE data", "Explainable models"],
    related: { label: "Read the dissertation and journal manuscript", href: "#research" },
  },
];
