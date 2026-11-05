/**
 * Short explanations behind the "Tools & standards" chips in the Expertise section.
 * `onSite` repeats only experience already described elsewhere on this site.
 */
export interface ToolSummary {
  name: string;
  kind: string;
  summary: string;
  onSite?: string;
}

export const TOOL_SUMMARIES: ToolSummary[] = [
  { name: "Python", kind: "Programming language", summary: "A general-purpose language widely used for data analysis, machine learning, AI and automating data workflows." },
  {
    name: "R",
    kind: "Statistical computing",
    summary: "An open-source language for statistics and data visualisation, popular in health research for modelling and reproducible analysis.",
    onSite: "Used for regression, clustering and classification on multi-clinic data at UMDNJ / Rutgers School of Nursing.",
  },
  { name: "SQL", kind: "Database language", summary: "The standard language for querying and managing data in relational databases — the backbone of clinical data extraction and reporting." },
  { name: "SAS", kind: "Statistical software", summary: "A commercial analytics suite long used in health research, public health and the pharmaceutical industry for rigorous statistical analysis." },
  {
    name: "Stata",
    kind: "Statistical software",
    summary: "Statistical software widely used in epidemiology and health services research for regression and survey analysis.",
    onSite: "Used alongside R for regression, clustering and classification at UMDNJ / Rutgers School of Nursing.",
  },
  { name: "SPSS", kind: "Statistical software", summary: "IBM's statistics package with a point-and-click interface, common in academic and social-science research." },
  { name: "MATLAB", kind: "Numerical computing", summary: "An environment for matrix mathematics, modelling and simulation — suited to mathematical and engineering analysis." },
  {
    name: "Tableau",
    kind: "Data visualisation",
    summary: "Software for building interactive dashboards that let leaders and clinicians explore data without writing code.",
    onSite: "Used to build performance metrics and dashboards from clinical data across eight systems at Rutgers NJMS.",
  },
  { name: "Power BI", kind: "Business intelligence", summary: "Microsoft's analytics and dashboard platform for turning data into shareable reports and visuals." },
  { name: "Crystal Reports", kind: "Reporting", summary: "A report-design tool for producing formatted, printable reports directly from databases — often used for operational and regulatory reporting." },
  {
    name: "Epic",
    kind: "Electronic health record",
    summary: "One of the most widely used electronic health record (EHR) systems in US hospitals and health systems.",
    onSite: "Destination system of the 200M-record GE Centricity → Epic migration at Rutgers.",
  },
  {
    name: "GE Centricity",
    kind: "Electronic health record",
    summary: "GE Healthcare's family of EHR and practice-management systems, used by many US clinics and physician groups.",
    onSite: "Source system of the 200M-record Centricity → Epic migration at Rutgers.",
  },
  { name: "SQL Server", kind: "Database", summary: "Microsoft's relational database platform, commonly used for clinical data warehouses and reporting." },
  { name: "Oracle", kind: "Database", summary: "An enterprise relational database used for large, mission-critical systems, including many hospital and EHR back-ends." },
  { name: "Hadoop", kind: "Big data", summary: "An Apache open-source framework for storing and processing very large datasets across clusters of computers." },
  { name: "Spark", kind: "Big data", summary: "Apache Spark is a fast engine for large-scale data processing and machine learning across many machines." },
  {
    name: "ICD-10",
    kind: "Coding standard",
    summary: "The WHO's International Classification of Diseases, 10th revision — the standard codes for diagnoses, used for records, statistics and billing (ICD-10-CM/PCS in the US).",
  },
  {
    name: "CPT/HCPCS",
    kind: "Coding standard",
    summary: "US codes for medical services: CPT codes describe procedures and services; HCPCS Level II covers supplies, equipment and services outside CPT. Both drive billing and quality reporting.",
  },
  { name: "LOINC", kind: "Terminology", summary: "Universal codes for laboratory tests and clinical observations, so results mean the same thing across systems and organisations." },
  { name: "SNOMED CT", kind: "Terminology", summary: "A comprehensive clinical terminology for recording findings, diagnoses and procedures in detail inside electronic records." },
  { name: "HL7", kind: "Interoperability standard", summary: "Health Level Seven standards for exchanging clinical data between systems; HL7 v2 messages still carry much of the world's hospital data." },
  { name: "FHIR", kind: "Interoperability standard", summary: "HL7's modern standard that shares health data through web APIs and well-defined 'resources', making apps and systems easier to connect." },
];
