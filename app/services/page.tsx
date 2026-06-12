import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { WATER_HEATER_PAGES, buildServiceLinkLabel, getPagesByType, parseArea } from "@/lib/waterheater-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl } from "@/lib/seo";

const SERVICES_FAQS = [
  {
    question: "What should I do first when time is limited?",
    answer:
      "Start with your city and symptom first. If the issue is urgent, use emergency help immediately. If the issue is not urgent, compare repair, replacement, and installation options for your area.",
  },
  {
    question: "Can I compare every type of water heater help here?",
    answer:
      "Yes. You can compare emergency service, symptom-based help, repair, replacement, and installation options in one place.",
  },
  {
    question: "Can I call before browsing every link?",
    answer: "Yes. A quick call can point you to the right service option faster when urgency is high.",
  },
] as const;

const SERVICE_GROUPS = [
  {
    id: "urgent-help",
    label: "Urgent help",
    intro: "Fast paths for active leaks, full outages, and same-day replacement decisions.",
    slugs: ["emergency-water-heater-repair", "emergency-hot-water-tank-replacement", "water-heater-leaking", "no-hot-water"],
  },
  {
    id: "repair",
    label: "Repair",
    intro: "Diagnosis-first pages for standard, gas, electric, and tankless systems.",
    slugs: ["water-heater-repair", "hot-water-tank-repair", "tankless-water-heater-repair", "gas-water-heater-repair", "electric-water-heater-repair"],
  },
  {
    id: "replacement-installation",
    label: "Replacement and installation",
    intro: "Planning pages for new equipment, tankless conversions, and installation timing.",
    slugs: ["water-heater-replacement", "hot-water-tank-replacement", "water-heater-installation", "tankless-water-heater-installation"],
  },
  {
    id: "nearby-options",
    label: "Nearby options",
    intro: "Use these when you need help routed by location before comparing details.",
    slugs: ["water-heater-repair-near-me", "water-heater-replacement-near-me", "water-heater-installation-near-me"],
  },
] as const;

function getServiceGroupPages(slugs: readonly string[]) {
  return slugs
    .map((slug) => WATER_HEATER_PAGES.find((page) => page.slug === slug))
    .filter((page): page is (typeof WATER_HEATER_PAGES)[number] => Boolean(page));
}

function getCityServiceEntryPages() {
  const seen = new Set<string>();
  return getPagesByType("City Service Page").filter((page) => {
    const area = parseArea(page.targetArea);
    if (area.kind !== "city" || seen.has(area.city)) {
      return false;
    }
    seen.add(area.city);
    return true;
  });
}

export const metadata: Metadata = {
  title: "Water Heater Services Canada by City | QuickHeatFix",
  description:
    "Water heater services Canada by city with repair, replacement, installation, and emergency support. Call 1-888-328-8990 for fast help now.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Water Heater Services Canada by City | ${SITE_NAME}`,
    description:
      "Water heater services Canada by city with repair, replacement, installation, and emergency support. Call 1-888-328-8990 for fast help now.",
    url: absoluteUrl("/services"),
    type: "website",
    siteName: SITE_NAME,
    images: [absoluteUrl("/quickheatfix-logo.svg")],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICES_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="qhf-main">
      <JsonLd data={[breadcrumbSchema, faqSchema]} />

      <section className="qhf-index-hero">
        <div className="qhf-container qhf-hero-split">
          <div className="qhf-hero-content">
            <p className="qhf-eyebrow">Complete Service Guide</p>
            <h1 className="qhf-display">Water Heater Services Organized for Fast Decisions</h1>
            <p className="qhf-lead">
              If your water heater problem is urgent, start with your city and get help fast. If you are still deciding between repair, replacement,
              or installation, this page helps you compare your options clearly before you call. You can choose based on what you are experiencing right now,
              how quickly you need hot water back, and what makes the most sense for your home. The goal is simple: less stress, fewer delays, and a better decision.
            </p>
            <div className="qhf-actions qhf-actions-left">
              <PhoneLink className="qhf-btn qhf-btn-solid" location="services-hero" pageTier="services">
                Call {EMERGENCY_PHONE_DISPLAY}
              </PhoneLink>
            </div>
          </div>

          <aside className="qhf-hero-aside">
            <h2>Need A Quick Start?</h2>
            <p>Pick the help you need, then choose your city.</p>
            <div className="qhf-mini-links">
              {SERVICE_GROUPS.map((group) => (
                <a key={group.id} href={`#${group.id}`}>
                  {group.label}
                </a>
              ))}
              <a href="#service-areas">Service areas</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="qhf-section qhf-breadcrumb-wrap">
        <div className="qhf-container qhf-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Services</span>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-index-stack">
          {SERVICE_GROUPS.map((group) => {
            const items = getServiceGroupPages(group.slugs);
            return (
              <article key={group.id} id={group.id} className="qhf-index-row">
                <header>
                  <h2>{group.label}</h2>
                  <p>{group.intro}</p>
                </header>

                <div className="qhf-index-links qhf-location-grid">
                  {items.map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`}>
                      {buildServiceLinkLabel(page)}
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}

          <article id="service-areas" className="qhf-index-row">
            <header>
              <p className="qhf-eyebrow">Local pages</p>
              <h2>Service areas</h2>
              <p>Choose your city first, then compare the right repair, replacement, or installation path from there.</p>
            </header>

            <div className="qhf-index-links qhf-location-grid">
              {getCityServiceEntryPages().map((page) => {
                const area = parseArea(page.targetArea);
                return (
                  <Link key={page.slug} href={`/${page.slug}`}>
                    {area.label}
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="qhf-section qhf-soft-section">
        <div className="qhf-container qhf-related-wrap">
          <div>
            <p className="qhf-eyebrow">Common Starting Points</p>
            <h2 className="qhf-title">Choose by situation, not by keyword</h2>
          </div>
          <div className="qhf-related-links qhf-location-grid">
            <a href="#urgent-help">I need urgent help</a>
            <a href="#repair">I need a repair check</a>
            <a href="#replacement-installation">I may need a new unit</a>
            <a href="#nearby-options">I want nearby routing</a>
            <a href="#service-areas">I want to pick my city</a>
          </div>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-faq-shell">
          <header>
            <p className="qhf-eyebrow">FAQs</p>
            <h2 className="qhf-title">Questions homeowners ask before choosing service</h2>
          </header>
          <div className="qhf-faq-grid">
            {SERVICES_FAQS.map((faq) => (
              <article key={faq.question} className="qhf-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
