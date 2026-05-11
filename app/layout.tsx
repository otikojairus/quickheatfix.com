import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import { MobileStickyCall } from "@/components/mobile-sticky-call";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Water Heater Repair and Replacement Canada`,
    template: "%s",
  },
  description:
    "QuickHeatFix provides national and city-specific water heater repair, replacement, and installation support designed for fast homeowner decisions.",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: `${SITE_NAME} | Water Heater Repair and Replacement`,
    description: "Water heater repair, replacement, and installation guidance for Canadian homeowners who need same-day clarity.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    images: [absoluteUrl("/quickheatfix-logo.svg")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${workSans.variable} ${playfair.variable} antialiased`}>
        <SiteNavbar />
        {children}
        <SiteFooter />
        <MobileStickyCall />
        <a className="sr-only" href="tel:18883288990">
          Call {SITE_NAME} at {EMERGENCY_PHONE_DISPLAY}
        </a>
      </body>
    </html>
  );
}
