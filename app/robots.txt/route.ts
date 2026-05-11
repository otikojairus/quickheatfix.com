import { getSiteUrl } from "@/lib/seo";

export function GET() {
  const siteUrl = getSiteUrl().replace(/\/$/, "");

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
