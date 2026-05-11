import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/seo";

type SiteLogoProps = {
  href?: string;
  invert?: boolean;
};

export function SiteLogo({ href = "/", invert = false }: SiteLogoProps) {
  return (
    <Link href={href} className="qhf-logo" aria-label={`${SITE_NAME} home`}>
      <Image src="/quickheatfix-mark.svg" alt="QuickHeatFix flame and droplet logo mark" width={44} height={44} priority />
      <span className="qhf-logo-copy">
        <strong className={invert ? "text-white" : "text-[var(--qhf-ink)]"}>{SITE_NAME}</strong>
        <span className={invert ? "text-white/75" : "text-[var(--qhf-muted)]"}>Water heater repair and replacement</span>
      </span>
    </Link>
  );
}
