# QuickHeatFix Working Guide

## Purpose
This repository is a programmatic SEO Next.js site for QuickHeatFix. It generates national and city landing pages for water heater repair, hot water tank repair, tankless water heater repair, water heater replacement, hot water tank replacement, installation, near-me searches, symptom pages, and emergency pages.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Shared global styling in `app/globals.css`

## Routing Model
- Home page: `app/page.tsx`
- Service index: `app/services/page.tsx`
- Dynamic pSEO pages: `app/[slug]/page.tsx`

## Source Of Truth
- Spreadsheet-derived page data lives in `lib/waterheater-data.ts`.
- Core SEO helpers live in `lib/seo.ts`.

## SEO Content Rules
- Use one primary keyword target per landing page.
- Write to the visitor first: symptoms, safety, inspection, repair path, and next steps.
- Keep claims practical and credible.
- Preserve local context from each spreadsheet row.

## UI Rules
- Use the `qhf-*` design language in `app/globals.css`.
- Keep sections direct, service-oriented, and mobile-first.
- Keep new pages on the `qhf-*` design system.
