import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, absoluteUrl } from "@/lib/seo";

const CONTACT_FAQS = [
  {
    question: "What details should I share first when calling?",
    answer:
      "Share your city, the exact symptom, and whether the unit is leaking or fully down. Those three details are usually enough to start accurate triage.",
  },
  {
    question: "Can I call even if I do not know my heater model?",
    answer:
      "Yes. If possible, send a photo of the label later, but intake can still begin immediately based on symptoms and location.",
  },
  {
    question: "Do I need to choose a service before I call?",
    answer:
      "No. We can quickly guide you to the right service path during the first call so you can move faster.",
  },
] as const;

export const metadata: Metadata = {
  title: "Water Heater Repair Canada Contact Help | QuickHeatFix",
  description:
    "Water heater repair Canada contact support for city routing, same-day triage, and urgent scheduling clarity. Call 1-888-328-8990 now for help.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: CONTACT_FAQS.map((faq) => ({
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
        <div className="qhf-container qhf-contact-panel">
          <p className="qhf-eyebrow">Contact</p>
          <h1>Water Heater Repair Contact Support for Fast Local Scheduling</h1>
          <p>
            Calling is the fastest way to turn a water heater issue into a clear action plan. Whether you are dealing with a leak, no-hot-water outage,
            pilot failure, or a planned replacement, a short call helps route your case to the right service path without wasting time on guesswork.
            You do not need every technical detail to get started. Share your city and symptom first, and we can guide what to check next, what to
            document, and how quickly the issue should be handled based on risk and comfort impact.
          </p>
          <PhoneLink className="qhf-contact-phone" location="contact-page" pageTier="contact">
            {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-faq-shell">
          <header>
            <p className="qhf-eyebrow">FAQs</p>
            <h2 className="qhf-title">Questions about calling and triage</h2>
          </header>
          <div className="qhf-faq-grid">
            {CONTACT_FAQS.map((faq) => (
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
