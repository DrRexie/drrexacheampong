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

/** Set while a dialog closes to jump to the form, so it skips returning focus to its trigger. */
export const jumpState = { toForm: false };

export function prefillContact(detail: { audience?: Audience; service?: string }, opts: { fromDialog?: boolean } = {}) {
  const go = () => {
    window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail }));
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    jumpState.toForm = false;
  };
  if (!opts.fromDialog) return go();
  // Wait for the closing dialog to release its scroll lock before moving the page.
  jumpState.toForm = true;
  window.setTimeout(go, 350);
}

/** Jump to an in-page section from inside a closing dialog (waits for its scroll lock to release). */
export function jumpFromDialog(hash: string) {
  jumpState.toForm = true;
  window.setTimeout(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    jumpState.toForm = false;
  }, 350);
}
