/**
 * Cookieless analytics for the Site Console (https://rex-console.vercel.app).
 * Sends: pageview, section_view (each <section id> once per page load, when it
 * crosses mid-screen), contact_open (first focus inside the contact form) and
 * inquiry_submit (call track("inquiry_submit") after a successful submission), and
 * engagement (active seconds on the page and per section, sent when the page is hidden).
 * No cookies or local storage are used.
 */
const ENDPOINT = "https://rex-console.vercel.app/api/events";

type EventType = "pageview" | "section_view" | "contact_open" | "inquiry_submit";

export function track(type: EventType, extra: Record<string, string | undefined> = {}) {
  try {
    const payload: Record<string, string> = { type, path: window.location.pathname };
    for (const [k, v] of Object.entries(extra)) if (v) payload[k] = v;
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain" }))) return;
    void fetch(ENDPOINT, { method: "POST", body, keepalive: true, headers: { "Content-Type": "text/plain" } });
  } catch {
    /* analytics must never break the site */
  }
}

function beacon(payload: Record<string, unknown>) {
  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain" }))) return;
    void fetch(ENDPOINT, { method: "POST", body, keepalive: true, headers: { "Content-Type": "text/plain" } });
  } catch {
    /* ignore */
  }
}

/**
 * Engaged time: counts a second only while the tab is visible and the visitor has
 * scrolled, moved, typed or tapped in the last 45 seconds. The section crossing the
 * middle of the screen gets that second too. Flushed whenever the page is hidden.
 */
function trackEngagement() {
  let active = 0;
  let sections: Record<string, number> = {};
  let lastInput = Date.now();
  const touch = () => {
    lastInput = Date.now();
  };
  for (const ev of ["scroll", "mousemove", "keydown", "touchstart", "click"]) {
    window.addEventListener(ev, touch, { passive: true });
  }
  window.setInterval(() => {
    if (document.visibilityState !== "visible" || Date.now() - lastInput > 45_000) return;
    active++;
    const mid = window.innerHeight / 2;
    for (const s of Array.from(document.querySelectorAll<HTMLElement>("section[id]"))) {
      const r = s.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) {
        sections[s.id] = (sections[s.id] ?? 0) + 1;
        break;
      }
    }
  }, 1000);
  const flush = () => {
    if (active < 1) return;
    beacon({ type: "engagement", path: window.location.pathname, seconds: Math.min(active, 3600), sections });
    active = 0;
    sections = {};
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
  window.addEventListener("pagehide", flush);
}

export function initTracking() {
  trackEngagement();
  let referrer = "";
  try {
    if (document.referrer) {
      const r = new URL(document.referrer);
      if (r.host !== window.location.host) referrer = r.host;
    }
  } catch {
    /* ignore */
  }
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? undefined;
  track("pageview", { referrer, utm_source: utm });

  let opened = false;
  document.addEventListener("focusin", (e) => {
    const el = e.target as HTMLElement | null;
    if (!opened && el?.closest?.("#contact form")) {
      opened = true;
      track("contact_open");
    }
  });

  if (!("IntersectionObserver" in window)) return;
  const seen = new Set<string>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const id = (e.target as HTMLElement).id;
        if (e.isIntersecting && !seen.has(id)) {
          seen.add(id);
          track("section_view", { section: id });
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  // Sections render after React mounts; observe them once they exist.
  const observeAll = () => document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
  window.setTimeout(observeAll, 800);
}
