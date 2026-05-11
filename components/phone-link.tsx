"use client";

import type { ReactNode } from "react";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164 } from "@/lib/seo";

type PhoneLinkProps = {
  children?: ReactNode;
  className?: string;
  location?: string;
  pageTier?: string;
  ariaLabel?: string;
  phoneDisplay?: string;
  phoneE164?: string;
};

export function PhoneLink({
  children,
  className,
  location = "sitewide",
  pageTier = "global",
  ariaLabel,
  phoneDisplay = EMERGENCY_PHONE_DISPLAY,
  phoneE164 = EMERGENCY_PHONE_E164,
}: PhoneLinkProps) {
  function handleClick() {
    if (typeof window === "undefined") {
      return;
    }

    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", "call_click", {
      location,
      page_tier: pageTier,
      phone: phoneDisplay,
    });
  }

  return (
    <a href={`tel:${phoneE164.replace("+", "")}`} onClick={handleClick} className={className} aria-label={ariaLabel ?? `Call ${phoneDisplay}`}>
      {children ?? `Call ${phoneDisplay}`}
    </a>
  );
}
