import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import {
  WATER_HEATER_PAGES,
  buildFaqs,
  buildH1,
  buildIntroParagraph,
  buildKeywordSentence,
  buildMeta,
  buildSchemas,
  buildServiceLinkLabel,
  getAreaLabel,
  getCityPagesForLinking,
  getCrossServiceLinksForCity,
  getLocationFacts,
  getPillarToCityLinks,
  getRelatedPages,
  getRelevantPillarPage,
  getWaterHeaterPageBySlug,
  isSupportPage,
  parseArea,
} from "@/lib/waterheater-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const PREP_CHECKLIST = [
  "Write down exactly when symptoms started and whether they are spreading.",
  "Take a photo of the model label and any visible leak or corrosion point.",
  "Clear access around the heater, shutoff area, and venting route.",
  "Note if this is a repeat issue after earlier repairs.",
] as const;

const INSPECTION_POINTS = [
  "Safety checks first: pressure, venting, ignition, and active leak risk.",
  "Root-cause diagnosis, not just symptom patching.",
  "Repair-versus-replacement recommendation with timeline impact explained.",
  "Final plan matched to household downtime tolerance.",
] as const;

const AFTERCARE_POINTS = [
  "Confirm expected time to full hot-water recovery.",
  "Review warning signs that should trigger immediate follow-up.",
  "Keep model and service details for future parts matching.",
  "Plan preventative checks to reduce repeat breakdown risk.",
] as const;

const LONG_FORM_NOTES = [
  "A heater problem often looks simple at first, but hidden failure patterns can make short-term fixes more expensive over time. The right plan starts with full context, including unit age, symptom history, and site constraints.",
  "If replacement is likely, installation quality matters as much as equipment selection. Proper venting, pressure setup, and commissioning checks have a direct impact on safety and lifespan.",
  "When repair is viable, the best outcome includes clear follow-up guidance so you know whether the issue is truly resolved or likely to return under seasonal demand.",
] as const;

export async function generateStaticParams() {
  return WATER_HEATER_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getWaterHeaterPageBySlug(slug);
  return page ? buildMeta(page) : {};
}

export default async function WaterHeaterLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getWaterHeaterPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const areaInfo = parseArea(page.targetArea);
  const areaLabel = getAreaLabel(page.targetArea);
  const pageH1 = buildH1(page);
  const introParagraph = buildIntroParagraph(page);
  const faqs = buildFaqs(page);
  const relatedPages = getRelatedPages(page, 6);
  const keywordSentence = buildKeywordSentence(page);
  const locationFacts = getLocationFacts(page);
  const relevantPillar = getRelevantPillarPage(page);
  const cityLinkTargets = getCityPagesForLinking(page, 5);
  const crossServiceLinks = getCrossServiceLinksForCity(page, 5);
  const pillarCityLinks = page.pageType === "Service Pillar" ? getPillarToCityLinks(page) : [];
  const supportPage = isSupportPage(page);

  return (
    <main className="qhf-main">
      <JsonLd data={buildSchemas(page)} />

      <section className="qhf-page-hero qhf-page-shell">
        <div className="qhf-container qhf-hero-split">
          <div className="qhf-hero-content">
            <div className="qhf-meta-row qhf-meta-row-left">
              <span>{areaLabel}</span>
              <span>{page.pageType}</span>
              <span>{page.searchIntent}</span>
            </div>
            <h1 className="qhf-display qhf-page-title">{pageH1}</h1>
            <p className="qhf-lead">{introParagraph}</p>
            <div className="qhf-actions qhf-actions-left">
              <PhoneLink
                className="qhf-btn qhf-btn-solid"
                location={page.slug}
                pageTier="landing"
                phoneDisplay={page.ctaPhoneDisplay}
                phoneE164={page.ctaPhoneE164}
              >
                {page.ctaStrategy}
              </PhoneLink>
              <Link href="/services" className="qhf-btn qhf-btn-outline">
                Browse All Services
              </Link>
            </div>
          </div>

          <aside className="qhf-hero-aside">
            <h2>Quick Navigator</h2>
            <p>Use these links if you want to compare options before calling.</p>
            <div className="qhf-mini-links">
              {relevantPillar ? <Link href={`/${relevantPillar.slug}`}>{buildServiceLinkLabel(relevantPillar)}</Link> : null}
              {cityLinkTargets.slice(0, 3).map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  {buildServiceLinkLabel(item)}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="qhf-section qhf-breadcrumb-wrap">
        <div className="qhf-container qhf-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>{pageH1}</span>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-story-grid">
          <article className="qhf-story-card">
            <p className="qhf-eyebrow">Search Intent Snapshot</p>
            <p className="qhf-keyword-line">{keywordSentence}</p>
          </article>
          <article className="qhf-story-card">
            <p className="qhf-eyebrow">Inspection Focus</p>
            <ul className="qhf-list">
              {INSPECTION_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {areaInfo.kind === "city" && locationFacts.length >= 2 ? (
        <section className="qhf-section">
          <div className="qhf-container">
            <div className="qhf-heading-row">
              <div>
                <p className="qhf-eyebrow">Local Context</p>
                <h2 className="qhf-title">Planning details that matter in {areaInfo.city}</h2>
              </div>
            </div>
            <div className="qhf-fact-grid">
              {locationFacts.map((fact) => (
                <article key={fact} className="qhf-fact-card">
                  <p>{fact}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="qhf-section qhf-soft-section">
        <div className="qhf-container qhf-dual-panel">
          <article className="qhf-prose qhf-long-copy">
            <h2 className="qhf-title">How to decide with less risk and fewer repeat visits</h2>
            {LONG_FORM_NOTES.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </article>

          <article className="qhf-long-panel">
            <div>
              <p className="qhf-eyebrow">Before The Appointment</p>
              <h2 className="qhf-title">Prep checklist for faster diagnosis</h2>
            </div>
            <ul className="qhf-bullets">
              {PREP_CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="qhf-section">
        <div className="qhf-container qhf-story-grid">
          <article className="qhf-story-card">
            <p className="qhf-eyebrow">Aftercare</p>
            <h3>What to confirm before closing the job</h3>
            <ul className="qhf-list">
              {AFTERCARE_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="qhf-story-card">
            <p className="qhf-eyebrow">Action Path</p>
            <h3>Match your urgency to the right service option</h3>
            <p>
              If the unit is leaking or fully down, call now and use emergency help first. If the issue is intermittent, compare service options in your city to
              choose the cleanest repair-versus-replacement route before booking.
            </p>
          </article>
        </div>
      </section>

      {areaInfo.kind === "city" ? (
        <section className="qhf-section">
          <div className="qhf-container qhf-related-wrap">
            <div>
              <p className="qhf-eyebrow">More In {areaInfo.city}</p>
              <h2 className="qhf-title">Cross-service links for the same city</h2>
            </div>
            <div className="qhf-related-links qhf-location-grid">
              {relevantPillar ? <Link href={`/${relevantPillar.slug}`}>{buildServiceLinkLabel(relevantPillar)}</Link> : null}
              {crossServiceLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.anchor}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {supportPage ? (
        <section className="qhf-section">
          <div className="qhf-container qhf-related-wrap">
            <div>
              <p className="qhf-eyebrow">Recommended Next Links</p>
              <h2 className="qhf-title">Continue to related services in your area</h2>
            </div>
            <div className="qhf-related-links qhf-location-grid">
              {relevantPillar ? <Link href={`/${relevantPillar.slug}`}>{buildServiceLinkLabel(relevantPillar)}</Link> : null}
              {cityLinkTargets.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  {buildServiceLinkLabel(item)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.pageType === "Service Pillar" && pillarCityLinks.length > 0 ? (
        <section className="qhf-section">
          <div className="qhf-container qhf-related-wrap">
            <div>
              <p className="qhf-eyebrow">City Coverage</p>
              <h2 className="qhf-title">All supported cities for this service</h2>
            </div>
            <div className="qhf-related-links qhf-location-grid">
              {pillarCityLinks.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  {buildServiceLinkLabel(item)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!supportPage ? (
        <section className="qhf-section">
          <div className="qhf-container qhf-related-wrap">
            <div>
              <p className="qhf-eyebrow">Related Links</p>
              <h2 className="qhf-title">Explore similar water heater services</h2>
            </div>
            <div className="qhf-related-links qhf-location-grid">
              {relatedPages.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  {buildServiceLinkLabel(item)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="qhf-section">
        <div className="qhf-container qhf-faq-shell">
          <header>
            <p className="qhf-eyebrow">FAQs</p>
            <h2 className="qhf-title">Common questions before booking</h2>
          </header>
          <div className="qhf-faq-grid">
            {faqs.map((faq) => (
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
          <h2>{page.ctaStrategy}</h2>
          <p>Call with your symptom and city so triage can route your request without delay.</p>
          <PhoneLink
            className="qhf-btn qhf-btn-solid"
            location={`${page.slug}-bottom`}
            pageTier="landing"
            phoneDisplay={page.ctaPhoneDisplay}
            phoneE164={page.ctaPhoneE164}
          >
            Call {page.ctaPhoneDisplay}
          </PhoneLink>
          <p className="qhf-canonical">Serving {areaLabel}</p>
        </div>
      </section>
    </main>
  );
}
