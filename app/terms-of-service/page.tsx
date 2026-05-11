import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, absoluteUrl } from "@/lib/seo";

const TERMS_FAQS = [
  {
    question: "What does QuickHeatFix content provide?",
    answer:
      "QuickHeatFix content provides practical guidance to help homeowners choose the right water heater service path before and during scheduling.",
  },
  {
    question: "Are timelines and pricing guaranteed on this site?",
    answer:
      "No. Final timelines and pricing depend on onsite conditions, unit type, parts availability, and technician assessment.",
  },
  {
    question: "What should I do if there is an immediate safety emergency?",
    answer:
      "If there is immediate danger, contact emergency services first, then request water heater support once the site is safe.",
  },
] as const;

export const metadata: Metadata = {
  title: "Water Heater Repair Canada Terms of Service | QuickHeatFix",
  description:
    "Water heater repair Canada terms of service covering scheduling, scope limits, and service expectations. Call 1-888-328-8990 for support today.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Terms Of Service", item: absoluteUrl("/terms-of-service") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: TERMS_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="qhf-main">
      <JsonLd data={schema} />

      <section className="qhf-section">
        <div className="qhf-container qhf-prose">
          <h1>Water Heater Service Terms of Use for Scheduling and Scope Guidance</h1>
          <p>
            These terms explain how QuickHeatFix content and routing guidance should be used. The website is designed to help homeowners understand
            symptoms, compare service options, and prepare for scheduling conversations. Final service decisions, start times, and pricing are always
            confirmed through direct intake and onsite assessment.
          </p>
          <p>
            By using this site, you agree that the information is guidance-based and not a substitute for a licensed onsite diagnosis. If a direct safety
            risk is present, emergency services should be contacted first.
          </p>
          <PhoneLink className="qhf-btn qhf-btn-solid" location="terms-hero" pageTier="terms">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms Of Service</span>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-faq-shell">
          <header>
            <p className="qhf-eyebrow">FAQs</p>
            <h2 className="qhf-title">Terms questions homeowners ask</h2>
          </header>
          <div className="qhf-faq-grid">
            {TERMS_FAQS.map((faq) => (
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
