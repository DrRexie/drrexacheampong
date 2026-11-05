/**
 * Detail behind each Expertise card's "Learn More" link, keyed by card title.
 * "Experience" lines restate facts already published elsewhere on this site
 * (career, research, current role) — add nothing that isn't shown there.
 */
export interface ExpertiseDetail {
  overview: string;
  covers: { name: string; detail: string }[];
  experience: string[];
  tools: string[];
  service: string; // pre-selects "Interested in" on the contact form
}

export const EXPERTISE_DETAILS: Record<string, ExpertiseDetail> = {
  "AI & agentic systems": {
    overview:
      "Designing AI that does useful work inside real health systems — supporting clinicians, automating data-heavy tasks and staying under clear governance.",
    covers: [
      {
        name: "Clinical decision support",
        detail: "AI that brings evidence-based recommendations to clinicians at the point of care, with the reasoning and sources shown and the final decision left with the clinician.",
      },
      {
        name: "Agentic workflow automation",
        detail: "AI agents that take on repetitive data work — gathering, checking and preparing information across systems — so staff can focus on care and decisions.",
      },
      {
        name: "Retrieval-grounded answers",
        detail: "Multi-agent retrieval-augmented generation (RAG) and NLP that ground outputs in trusted sources and patient context rather than a model's memory.",
      },
      {
        name: "Responsible ML adoption",
        detail: "Ethical governance built in from the start: human oversight, explainability, monitoring for accuracy and bias, and responsible data use.",
      },
    ],
    experience: [
      "Leads EHR, analytics platform and agentic AI design and rollout as Chief Informatics Officer at Strategic eHealth Solutions",
      "Advises leadership on AI/ML adoption, ethical AI and responsible data use",
      "Built an AI-powered clinical decision support agent system (featured in Projects)",
    ],
    tools: ["Multi-agent RAG", "NLP", "Python", "Clinical AI governance"],
    service: "AI strategy consulting",
  },
  "Healthcare analytics & modeling": {
    overview:
      "Turning large, messy health datasets into clear findings people can act on — from the analysis plan through to the final report.",
    covers: [
      {
        name: "Statistical modeling",
        detail: "Logistic regression and related models to identify predictors of outcomes, with results explained in plain language for decision-makers.",
      },
      {
        name: "Predictive modeling",
        detail: "Models that forecast risk or demand, such as patient admission patterns, so teams can plan resources before demand arrives.",
      },
      {
        name: "Time-series forecasting",
        detail: "Analysis of trends over time to anticipate seasonal patterns and changes in service use.",
      },
      {
        name: "Clustering & classification",
        detail: "Grouping patients, facilities or events to find patterns and target interventions where they matter most.",
      },
    ],
    experience: [
      "PhD research modeled about 2.31 million inpatient records (HCUP National Inpatient Sample) to find predictors of renal failure",
      "Ran analytics for 15 entities and about 200 providers as Clinical Data Analytics Manager at Rutgers RWJ Medical School",
      "Applied regression, clustering and classification in R and Stata to multi-clinic data, informing health policy",
    ],
    tools: ["R", "Python", "SAS", "Stata", "SPSS", "SQL", "Tableau", "Power BI"],
    service: "Predictive modeling",
  },
  "Clinical systems & interoperability": {
    overview:
      "Implementing and connecting the clinical systems that hold patient data, so information moves safely and keeps its meaning between systems.",
    covers: [
      {
        name: "EHR implementation",
        detail: "Selecting, configuring and rolling out electronic health records such as Epic and GE Centricity, with clinicians involved throughout.",
      },
      {
        name: "Large-scale data migration",
        detail: "Moving years of clinical records from one system to another accurately, with validation so nothing is lost or corrupted.",
      },
      {
        name: "ETL & data pipelines",
        detail: "Extracting, transforming and loading clinical data into warehouses and reporting systems that teams can rely on.",
      },
      {
        name: "Standards-based integration",
        detail: "Connecting systems with HL7 and FHIR and shared vocabularies such as ICD-10, LOINC and SNOMED CT.",
      },
    ],
    experience: [
      "Contributed to the 200M-record GE Centricity → Epic migration at Rutgers",
      "Built performance metrics and Tableau dashboards from clinical data across eight systems",
      "Trained clinicians on EMRs, including on a Mobile Health Van",
    ],
    tools: ["Epic", "GE Centricity", "SQL Server", "Oracle", "HL7", "FHIR", "ICD-10", "LOINC", "SNOMED CT"],
    service: "EHR selection & migration",
  },
  "Data governance & compliance": {
    overview:
      "Making sure health data is protected, high-quality and used responsibly — with processes that hold up to an audit.",
    covers: [
      {
        name: "Privacy & security compliance",
        detail: "Workflows that meet HIPAA in the US and GDPR where European data is involved, with access controls and audit trails.",
      },
      {
        name: "Research ethics",
        detail: "IRB-ready data handling for studies, from consent and de-identification to secure storage.",
      },
      {
        name: "Regulatory reporting",
        detail: "ONC and CMS requirements, including Meaningful Use and quality reporting, built into everyday data processes.",
      },
      {
        name: "Data quality & stewardship",
        detail: "Clear ownership, standards and checks so data is accurate, complete and trusted by the people who use it.",
      },
    ],
    experience: [
      "Designed the data governance framework for EMR implementation across 16 research sites in Ghana",
      "Handled CMS quality reporting at Rutgers RWJ Medical School",
      "Built the immunization database reported to New York State",
    ],
    tools: ["HIPAA", "IRB", "GDPR", "ONC", "CMS Meaningful Use"],
    service: "HIPAA / IRB / GDPR workflows",
  },
  "Research operations": {
    overview:
      "Keeping research programs running well — across sites, countries and funders — so the science can focus on the questions.",
    covers: [
      {
        name: "Multi-site coordination",
        detail: "Aligning protocols, data collection and timelines across sites so results are consistent and comparable.",
      },
      {
        name: "International programs",
        detail: "Coordinating work across countries, institutions and regulatory settings.",
      },
      {
        name: "Grant writing & PI support",
        detail: "Helping principal investigators develop proposals and run funded projects, from aims and analysis plans to reporting.",
      },
      {
        name: "Fiscal oversight",
        detail: "Tracking budgets and spending so programs stay on plan and accountable to funders.",
      },
    ],
    experience: [
      "Designed analytics infrastructure for EMR implementation across 16 research sites in Ghana",
      "13 years in Rutgers clinical and research settings",
      "Research spanning a PhD dissertation, an MS thesis and NSF-funded undergraduate research",
    ],
    tools: ["Study design", "Sample size planning", "Data management", "Budget oversight"],
    service: "Study design",
  },
  "Digital health strategy": {
    overview:
      "Helping leaders — including government health ministries — decide what to build, in what order, and how to make it last.",
    covers: [
      {
        name: "eHealth architecture",
        detail: "A blueprint for how records, exchange, reporting and analytics systems fit together, so investments connect rather than compete.",
      },
      {
        name: "Executive advisory",
        detail: "Independent advice for executives and ministries on digital health and AI priorities, risks and roadmaps.",
      },
      {
        name: "Capacity building",
        detail: "Training and mentoring so local teams can run, maintain and improve systems themselves.",
      },
      {
        name: "Aligning technology with goals",
        detail: "Linking every technology choice to clinical and business outcomes, so digital health delivers measurable value.",
      },
    ],
    experience: [
      "Sets informatics and AI strategy as Chief Informatics Officer at Strategic eHealth Solutions, powering Ghana's digital health transformation",
      "Designed and implemented a national health data platform for a national health ministry (featured in Projects)",
      "Brings together clinicians, data teams and leadership around one plan",
    ],
    tools: ["eHealth architecture", "HIE", "HL7 & FHIR", "DHIMS2", "Capacity building"],
    service: "eHealth architecture",
  },
};
