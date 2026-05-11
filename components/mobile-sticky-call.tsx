import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY } from "@/lib/seo";

export function MobileStickyCall() {
  return (
    <div className="qhf-mobile-sticky-call" role="complementary" aria-label="Quick call action">
      <PhoneLink className="qhf-mobile-sticky-link" location="mobile-sticky" pageTier="global">
        Call {EMERGENCY_PHONE_DISPLAY}
      </PhoneLink>
    </div>
  );
}
