import { WATER_HEATER_PAGES } from "@/lib/waterheater-data";
import { getSiteUrl } from "@/lib/seo";

const STATIC_PATHS = ["/", "/services", "/about", "/contact", "/privacy-policy", "/terms-of-service"] as const;

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

function priorityFromLabel(priority: string) {
  if (priority.includes("Top Priority")) return "0.90";
  if (priority.includes("High")) return "0.82";
  if (priority.includes("Medium")) return "0.74";
  return "0.66";
}

export function GET() {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const lastModified = new Date().toISOString();

  const urls = [
    ...STATIC_PATHS.map((path) => ({
      loc: `${siteUrl}${path}`,
      priority: path === "/" ? "1.00" : "0.70",
    })),
    ...WATER_HEATER_PAGES.map((page) => ({
      loc: `${siteUrl}/${page.slug}`,
      priority: priorityFromLabel(page.priority),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
