/** Lets any section open the contact form with "I am with a…" / "Interested in" already chosen. */
export type Audience = "hospital" | "government" | "research" | "other";

export const AUDIENCE_OPTIONS: { value: Audience; label: string }[] = [
  { value: "hospital", label: "Hospital or clinical network" },
  { value: "government", label: "Government or development partner" },
  { value: "research", label: "Research institution" },
  { value: "other", label: "Other" },
];

/** "Interested in" choices, grouped by who usually asks for them. */
export const SERVICE_GROUPS: { label: string; options: string[] }[] = [
  { label: "General", options: ["Not sure yet", "AI strategy consulting", "Advisory & implementation", "Speaking & workshops"] },
  { label: "Hospitals & clinical networks", options: ["EHR selection & migration", "CMS quality reporting", "Clinical operations dashboards"] },
  { label: "Governments & development partners", options: ["eHealth architecture", "HIE architecture & FHIR integration", "Data protection & ethical AI policy"] },
  { label: "Research institutions", options: ["Study design", "Predictive modeling", "HIPAA / IRB / GDPR workflows"] },
];

export const PREFILL_EVENT = "contact:prefill";

export function prefillContact(detail: { audience?: Audience; service?: string }) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail }));
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
