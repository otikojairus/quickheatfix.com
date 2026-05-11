"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneLink } from "@/components/phone-link";
import { SiteLogo } from "@/components/site-logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "All Services" },
  { href: "/#top-cities", label: "Top Cities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const className = "qhf-scroll-lock";
    document.documentElement.classList.toggle(className, isDrawerOpen);
    document.body.classList.toggle(className, isDrawerOpen);

    return () => {
      document.documentElement.classList.remove(className);
      document.body.classList.remove(className);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header className="qhf-navbar">
        <div className="qhf-topline">
          <div className="qhf-container qhf-topline-row">
            <p>24/7 Emergency Water Heater Help Across Canada</p>
            <PhoneLink className="qhf-topline-call" location="topline" pageTier="global">
              Call 1-888-328-8990
            </PhoneLink>
          </div>
        </div>
        <div className="qhf-container qhf-navbar-row">
          <SiteLogo />

          <nav className="qhf-nav-links" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="qhf-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="qhf-nav-call">
            <PhoneLink className="qhf-btn qhf-btn-outline" location="navbar" pageTier="global">
              Call Now
            </PhoneLink>
          </div>

          <button
            type="button"
            className="qhf-menu-btn"
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
            onClick={() => setIsDrawerOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`qhf-drawer ${isDrawerOpen ? "is-open" : ""}`} aria-hidden={!isDrawerOpen}>
        <button type="button" className="qhf-drawer-scrim" aria-label="Close menu" onClick={() => setIsDrawerOpen(false)} />

        <div className="qhf-drawer-panel">
          <div className="qhf-drawer-head">
            <SiteLogo />
            <button type="button" className="qhf-close-btn" aria-label="Close menu" onClick={() => setIsDrawerOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="qhf-mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="qhf-mobile-link" onClick={() => setIsDrawerOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <PhoneLink className="qhf-btn qhf-btn-solid" location="mobile-drawer" pageTier="global">
            Call 1-888-328-8990
          </PhoneLink>
        </div>
      </div>
    </>
  );
}
