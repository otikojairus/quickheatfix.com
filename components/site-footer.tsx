import Link from "next/link";
import { PhoneLink } from "@/components/phone-link";
import { WATER_HEATER_PAGES, getCityPages } from "@/lib/waterheater-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";

export function SiteFooter() {
  const servicePillars = WATER_HEATER_PAGES.filter((page) => page.pageType === "Service Pillar");
  const cityLinks = getCityPages().slice(0, 12);

  return (
    <footer className="qhf-footer">
      <div className="qhf-footer-glow" aria-hidden="true" />
      <div className="qhf-container qhf-footer-shell">
        <div className="qhf-footer-brand">
          <p className="qhf-footer-title">{SITE_NAME}</p>
          <p className="qhf-footer-copy">
            Reliable water heater support for homeowners who need fast answers, safer decisions, and a clear path to getting hot water back.
          </p>
          <PhoneLink className="qhf-footer-phone" location="footer" pageTier="global">
            {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>

        <div className="qhf-footer-grid">
          <div>
            <h3 className="qhf-footer-title">Core Services</h3>
            <div className="qhf-footer-links">
              {servicePillars.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="qhf-footer-link">
                  {page.primaryKeyword}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="qhf-footer-title">Popular Cities</h3>
            <div className="qhf-footer-links qhf-location-grid">
              {cityLinks.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="qhf-footer-link">
                  {page.primaryKeyword}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="qhf-container qhf-footer-bottom">
        <span>© {new Date().getFullYear()} {SITE_NAME}</span>
        <Link href="/privacy-policy" className="qhf-footer-link">Privacy Policy</Link>
        <Link href="/terms-of-service" className="qhf-footer-link">Terms of Service</Link>
      </div>
    </footer>
  );
}
