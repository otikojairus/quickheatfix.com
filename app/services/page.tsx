import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { PAGE_TYPES, WATER_HEATER_PAGES, buildH1, getPagesByType } from "@/lib/waterheater-data";
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

function getFriendlyTypeLabel(pageType: string) {
  if (pageType === "Service Pillar") return "Repair and Replacement Services";
  if (pageType === "City Service Page") return "City-Specific Services";
  if (pageType === "Emergency Landing") return "Emergency Help";
  if (pageType === "Near Me Page") return "Nearby Service Options";
  if (pageType === "Symptom Page") return "Problem-Based Help";
  if (pageType === "Service Page") return "Specialized Services";
  return pageType;
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
              {PAGE_TYPES.map((type) => (
                <a key={type} href={`#${type.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  {getFriendlyTypeLabel(type)}
                </a>
              ))}
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
          {PAGE_TYPES.map((pageType) => {
            const items = getPagesByType(pageType);
            const id = pageType.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <article key={pageType} id={id} className="qhf-index-row">
                <header>
                  <p className="qhf-eyebrow">{items.length} service options</p>
                  <h2>{getFriendlyTypeLabel(pageType)}</h2>
                </header>

                <div className="qhf-index-links qhf-location-grid">
                  {items.map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`}>
                      {buildH1(page)}
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="qhf-section qhf-soft-section">
        <div className="qhf-container qhf-related-wrap">
          <div>
            <p className="qhf-eyebrow">More Ways To Get Help</p>
            <h2 className="qhf-title">See all available water heater services</h2>
          </div>
          <div className="qhf-related-links qhf-location-grid">
            {WATER_HEATER_PAGES.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`}>
                {page.primaryKeyword}
              </Link>
            ))}
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
