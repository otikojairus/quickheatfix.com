import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/seo";

const ABOUT_FAQS = [
  {
    question: "How does QuickHeatFix help homeowners choose the right water heater service?",
    answer:
      "We combine symptom-first guidance, city-specific context, and direct call routing so homeowners can decide between repair, replacement, and installation without losing time.",
  },
  {
    question: "Why does support include both national and city-level guidance?",
    answer:
      "National guidance helps with broad comparison, while city guidance adds local scheduling realities, neighbourhood context, and climate factors that often affect urgency and planning.",
  },
  {
    question: "Can I still call if I only know part of the issue?",
    answer:
      "Yes. Even if you only know the symptom, intake can triage your call and guide you to the right service path quickly.",
  },
] as const;

export const metadata: Metadata = {
  title: "Water Heater Repair Canada About Team | QuickHeatFix",
  description:
    "Water heater repair Canada guidance from QuickHeatFix, including service routing and homeowner decision support. Call 1-888-328-8990 for fast help today.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ABOUT_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="qhf-main">
      <JsonLd data={schema} />

      <section className="qhf-page-hero">
        <div className="qhf-container qhf-hero-centered">
          <div className="qhf-hero-max">
            <div className="qhf-meta-row">
              <span>About</span>
              <span>Canada</span>
            </div>
            <h1 className="qhf-display qhf-page-title">Water Heater Service Guidance Built for Real Homeowner Decisions</h1>
            <p className="qhf-lead">
              QuickHeatFix exists to make urgent water heater decisions easier and safer. Most homeowners arrive during stressful moments: no hot water,
              active leaks, unusual noise, or a unit that fails right before workdays and family routines. Our goal is to remove guesswork with clear
              symptom-based guidance, local service support, and practical next steps that can be acted on quickly. We focus on useful detail, not filler,
              so you can compare repair and replacement paths, understand likely scheduling impacts, and call with confidence when timing matters most.
            </p>
            <div className="qhf-actions">
              <PhoneLink className="qhf-btn qhf-btn-solid" location="about-hero" pageTier="about">
                Call {EMERGENCY_PHONE_DISPLAY}
              </PhoneLink>
              <Link href="/services" className="qhf-btn qhf-btn-outline">
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About</span>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-faq-shell">
          <header>
            <p className="qhf-eyebrow">FAQs</p>
            <h2 className="qhf-title">How QuickHeatFix supports your next step</h2>
          </header>
          <div className="qhf-faq-grid">
            {ABOUT_FAQS.map((faq) => (
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
