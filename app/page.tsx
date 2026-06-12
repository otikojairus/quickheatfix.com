import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { WATER_HEATER_PAGES, buildServiceLinkLabel, getTopPriorityPages } from "@/lib/waterheater-data";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/seo";

const HOME_STEPS = [
  {
    title: "Describe The Symptom",
    body: "Tell us whether the issue is no hot water, leakage, strange noise, low temperature, or full system failure.",
  },
  {
    title: "Share City + Unit Type",
    body: "Your city and whether the system is tank, tankless, gas, or electric helps route your call without delay.",
  },
  {
    title: "Get A Clear Plan",
    body: "You get a practical repair-versus-replacement recommendation with the fastest realistic scheduling path.",
  },
] as const;

const HOME_FAQS = [
  {
    question: "How fast can calls be triaged?",
    answer:
      "Most calls are triaged immediately. Once we have symptom, city, and unit type, we can route to the right service path and reduce downtime faster.",
  },
  {
    question: "Should I choose my city first or the service first?",
    answer:
      "If your issue is urgent, start with your city for local timing context. If you are still comparing options, start with the service type and then choose your city.",
  },
  {
    question: "Can I call before I know if replacement is required?",
    answer:
      "Yes. Most homeowners call before they know the exact fix, and triage is designed for that stage.",
  },
] as const;

export const metadata: Metadata = {
  title: "Water Heater Repair Canada Service Guide | QuickHeatFix",
  description:
    "Water heater repair Canada support with same-day response, city-specific service options, and clear repair-versus-replacement guidance. Call 1-888-328-8990 now.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Water Heater Repair Canada | ${SITE_NAME}`,
    description:
      "Water heater repair Canada support with same-day response, city-specific service options, and clear repair-versus-replacement guidance. Call 1-888-328-8990 now.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
    images: [absoluteUrl("/quickheatfix-logo.svg")],
  },
};

export default function HomePage() {
  const topPages = getTopPriorityPages(18);
  const servicePillars = WATER_HEATER_PAGES.filter((page) => page.pageType === "Service Pillar");
  const emergencyPages = WATER_HEATER_PAGES.filter((page) => page.pageType === "Emergency Landing");

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/quickheatfix-logo.svg"),
      telephone: EMERGENCY_PHONE_E164,
      areaServed: "CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: HOME_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="qhf-main">
      <JsonLd data={schema} />

      <section className="qhf-home-hero">
        <div className="qhf-container qhf-hero-split">
          <div className="qhf-hero-content">
            <p className="qhf-eyebrow">Fast Triage, Canada-Wide</p>
            <h1 className="qhf-display">Water Heater Repair, Replacement, and Installation Built Around Real Homeowner Urgency</h1>
            <p className="qhf-lead">
              When hot water disappears, every hour matters. This service is designed for fast, practical decision-making, not generic advice. You can quickly compare
              emergency help, repair and replacement options, and city-specific support to match your exact issue and timeline. Whether the problem is an active
              leak, no-hot-water failure, inconsistent temperature, or a planned replacement decision, you get clear guidance to the next best action. The goal is
              simple: restore hot water safely, avoid repeat breakdowns, and make sure your call starts with the right context from the first minute.
            </p>
            <div className="qhf-actions qhf-actions-left">
              <PhoneLink className="qhf-btn qhf-btn-solid" location="homepage-hero" pageTier="home">
                Call {EMERGENCY_PHONE_DISPLAY}
              </PhoneLink>
              <Link href="/services" className="qhf-btn qhf-btn-outline">
                See All Services
              </Link>
            </div>
          </div>

          <aside className="qhf-hero-aside">
            <h2>Need Help Right Now?</h2>
            <p>Use the fastest route below based on urgency and issue type.</p>
            <div className="qhf-mini-links">
              {emergencyPages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`}>
                  {buildServiceLinkLabel(page)}
                </Link>
              ))}
            </div>
            <PhoneLink className="qhf-btn qhf-btn-solid" location="homepage-aside" pageTier="home">
              Call Now
            </PhoneLink>
          </aside>
        </div>
      </section>

      <section className="qhf-section qhf-urgency-strip">
        <div className="qhf-container qhf-step-grid">
          {HOME_STEPS.map((step, index) => (
            <article key={step.title} className="qhf-step-card">
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="top-cities" className="qhf-section">
        <div className="qhf-container qhf-heading-row">
          <div>
            <p className="qhf-eyebrow">City Jumpboard</p>
            <h2 className="qhf-title">Go straight to the service people choose most</h2>
          </div>
          <p className="qhf-copy">These direct links are prioritized by demand so you can reach the most relevant local service quickly.</p>
        </div>
        <div className="qhf-location-grid qhf-priority-grid">
          {topPages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="qhf-priority-link">
              {buildServiceLinkLabel(page)}
            </Link>
          ))}
        </div>
      </section>

      <section className="qhf-section qhf-soft-section">
        <div className="qhf-container qhf-heading-row">
          <div>
            <p className="qhf-eyebrow">Core Services</p>
            <h2 className="qhf-title">Start broad, then drill down by city</h2>
          </div>
          <p className="qhf-copy">Start with the service type you need, then choose your city to see local availability and response context.</p>
        </div>
        <div className="qhf-link-grid">
          {servicePillars.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="qhf-link-card">
              <h3>{buildServiceLinkLabel(page)}</h3>
              <p>Compare this service across Canada, then select the city that matches your home.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-faq-shell">
          <header>
            <p className="qhf-eyebrow">FAQs</p>
            <h2 className="qhf-title">Questions homeowners ask before they book</h2>
          </header>
          <div className="qhf-faq-grid">
            {HOME_FAQS.map((faq) => (
              <article key={faq.question} className="qhf-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-cta-panel">
          <h2>Want hot water restored without delay?</h2>
          <p>Call now with your city and symptom so we can route your request to the right service path immediately.</p>
          <PhoneLink className="qhf-btn qhf-btn-solid" location="homepage-bottom" pageTier="home">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>
    </main>
  );
}
