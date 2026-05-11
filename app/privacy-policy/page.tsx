import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, absoluteUrl } from "@/lib/seo";

const PRIVACY_FAQS = [
  {
    question: "What information is collected during a service request?",
    answer:
      "We collect the minimum details needed to coordinate service: contact info, city, and a short description of your water heater issue.",
  },
  {
    question: "Is personal information sold to third parties?",
    answer: "No. Personal information is not sold.",
  },
  {
    question: "Why is basic analytics used on the site?",
    answer:
      "Analytics helps us improve content clarity, response speed, and user experience so homeowners can reach the right service path faster.",
  },
] as const;

export const metadata: Metadata = {
  title: "Water Heater Repair Canada Privacy Policy | QuickHeatFix",
  description:
    "Water heater repair Canada privacy policy explaining how service-request and contact data is handled. Call 1-888-328-8990 for direct support today.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: absoluteUrl("/privacy-policy") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PRIVACY_FAQS.map((faq) => ({
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
          <h1>Water Heater Service Privacy Policy for Contact and Scheduling Data</h1>
          <p>
            This policy explains how QuickHeatFix handles information shared when you request water heater help. We keep data collection practical
            and limited to what is needed for communication, service triage, and appointment coordination. In most cases this includes your name,
            contact details, city, and a short issue summary. We do this to speed up routing and reduce repeated questions while keeping your
            experience straightforward.
          </p>
          <p>
            We do not sell personal information. If analytics tools are used, they are used to improve content quality, diagnose friction in the user
            journey, and help visitors reach the right service faster.
          </p>
          <PhoneLink className="qhf-btn qhf-btn-solid" location="privacy-hero" pageTier="privacy">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-faq-shell">
          <header>
            <p className="qhf-eyebrow">FAQs</p>
            <h2 className="qhf-title">Privacy questions homeowners ask</h2>
          </header>
          <div className="qhf-faq-grid">
            {PRIVACY_FAQS.map((faq) => (
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
