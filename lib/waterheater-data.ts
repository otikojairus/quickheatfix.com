import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl, trimMetaDescription } from "@/lib/seo";

export type WaterHeaterPage = {
  id: number;
  title: string;
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetArea: string;
  pageType: string;
  searchIntent: string;
  monthlyVolume: number;
  keywordDifficulty: number;
  cpc: number;
  priority: string;
  ctaStrategy: string;
  ctaPhoneDisplay: string;
  ctaPhoneE164: string;
};

export type AreaInfo =
  | { kind: "national"; label: "Canada" }
  | { kind: "city"; city: string; province: string; label: string }
  | { kind: "province"; label: string };

type CityContext = {
  population: string;
  landmark: string;
  neighbourhoods: [string, string];
  climate: string;
};

export const WATER_HEATER_PAGES: WaterHeaterPage[] = [
  {
    "id": 1,
    "title": "Emergency Water Heater Repair - 24/7 Same-Day Canada",
    "slug": "emergency-water-heater-repair",
    "primaryKeyword": "emergency water heater repair",
    "secondaryKeywords": [
      "emergency water heater repair near me",
      "emergency hot water heater repair near me",
      "24 hour water heater repair",
      "emergency hot water tank repair"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Emergency Landing",
    "searchIntent": "Transactional",
    "monthlyVolume": 1150,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 2,
    "title": "Emergency Hot Water Tank Replacement - 24/7 Service",
    "slug": "emergency-hot-water-tank-replacement",
    "primaryKeyword": "emergency hot water tank replacement",
    "secondaryKeywords": [
      "same day hot water tank replacement",
      "emergency water heater replacement",
      "hot water tank emergency service"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Emergency Landing",
    "searchIntent": "Transactional",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 3,
    "title": "Water Heater Repair Services - Fast Certified Technicians",
    "slug": "water-heater-repair",
    "primaryKeyword": "water heater repair",
    "secondaryKeywords": [
      "water heater repair near me",
      "hot water heater repair",
      "water heater service",
      "water heater repairs",
      "water heater fix"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 8850,
    "keywordDifficulty": 1,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 4,
    "title": "Hot Water Tank Repair - Same-Day Service Available",
    "slug": "hot-water-tank-repair",
    "primaryKeyword": "hot water tank repair",
    "secondaryKeywords": [
      "hot water tank repair near me",
      "hot water heater tank repair",
      "hot water tank service",
      "fix hot water tank"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 1450,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 5,
    "title": "Tankless Water Heater Repair - Certified Technicians",
    "slug": "tankless-water-heater-repair",
    "primaryKeyword": "tankless water heater repair",
    "secondaryKeywords": [
      "tankless water heater service",
      "on demand water heater repair",
      "navien repair",
      "rinnai repair",
      "tankless heater fix"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 1000,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 6,
    "title": "Gas Water Heater Repair - Licensed Gas Technicians",
    "slug": "gas-water-heater-repair",
    "primaryKeyword": "gas water heater repair",
    "secondaryKeywords": [
      "gas hot water heater repair near me",
      "natural gas water heater repair",
      "gas hot water tank repair",
      "gas water heater fix"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 300,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 7,
    "title": "Electric Water Heater Repair - Quick Diagnosis & Fix",
    "slug": "electric-water-heater-repair",
    "primaryKeyword": "electric water heater repair",
    "secondaryKeywords": [
      "electric hot water tank repair",
      "electric water heater service",
      "electric hot water heater repair near me"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 8,
    "title": "Water Heater Replacement - Installed Same Day",
    "slug": "water-heater-replacement",
    "primaryKeyword": "water heater replacement",
    "secondaryKeywords": [
      "water heater replacement near me",
      "hot water heater replacement",
      "water heater tank replacement",
      "replace water heater",
      "water heater replacement cost"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 4650,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8990",
    "ctaPhoneDisplay": "1-888-328-8990",
    "ctaPhoneE164": "+18883288990"
  },
  {
    "id": 9,
    "title": "Hot Water Tank Replacement - All Makes & Models",
    "slug": "hot-water-tank-replacement",
    "primaryKeyword": "hot water tank replacement",
    "secondaryKeywords": [
      "hot water tank replacement cost",
      "replace hot water tank",
      "hot water tank replacement near me",
      "how much to replace hot water tank"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 2700,
    "keywordDifficulty": 3,
    "cpc": 250.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8991",
    "ctaPhoneDisplay": "1-888-328-8991",
    "ctaPhoneE164": "+18883288991"
  },
  {
    "id": 10,
    "title": "Tankless Water Heater Installation & Replacement",
    "slug": "tankless-water-heater-installation",
    "primaryKeyword": "tankless water heater installation",
    "secondaryKeywords": [
      "tankless water heater installation cost",
      "tankless hot water heater installation",
      "convert to tankless water heater",
      "tankless water heater installers"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 2100,
    "keywordDifficulty": 0,
    "cpc": 160.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-8992",
    "ctaPhoneDisplay": "1-888-328-8992",
    "ctaPhoneE164": "+18883288992"
  },
  {
    "id": 11,
    "title": "Water Heater Installation - Certified & Insured",
    "slug": "water-heater-installation",
    "primaryKeyword": "water heater installation",
    "secondaryKeywords": [
      "water heater installation near me",
      "hot water heater installation",
      "hot water tank installation",
      "water heater installer",
      "water heater installation cost"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 3900,
    "keywordDifficulty": 1,
    "cpc": 200.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8993",
    "ctaPhoneDisplay": "1-888-328-8993",
    "ctaPhoneE164": "+18883288993"
  },
  {
    "id": 12,
    "title": "Water Heater Repair Near Me - Same-Day Technicians",
    "slug": "water-heater-repair-near-me",
    "primaryKeyword": "water heater repair near me",
    "secondaryKeywords": [
      "repair water heater near me",
      "hot water heater repair near me",
      "hot water tank repair near me",
      "gas hot water heater repair near me",
      "water heater service near me"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Near Me Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 7100,
    "keywordDifficulty": 2,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8993",
    "ctaPhoneDisplay": "1-888-328-8993",
    "ctaPhoneE164": "+18883288993"
  },
  {
    "id": 13,
    "title": "Water Heater Replacement Near Me - Installed Today",
    "slug": "water-heater-replacement-near-me",
    "primaryKeyword": "water heater replacement near me",
    "secondaryKeywords": [
      "water heater installation near me",
      "tankless water heater installation near me",
      "hot water tank replacement near me",
      "replace water heater near me"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Near Me Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 1300,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8993",
    "ctaPhoneDisplay": "1-888-328-8993",
    "ctaPhoneE164": "+18883288993"
  },
  {
    "id": 14,
    "title": "Water Heater Installation Near Me - Same-Day Service",
    "slug": "water-heater-installation-near-me",
    "primaryKeyword": "water heater installation near me",
    "secondaryKeywords": [
      "tankless water heater installation near me",
      "hot water tank installation near me",
      "water heater installer near me"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Near Me Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 600,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-8993",
    "ctaPhoneDisplay": "1-888-328-8993",
    "ctaPhoneE164": "+18883288993"
  },
  {
    "id": 15,
    "title": "Water Heater Leaking? Here's What To Do Right Now",
    "slug": "water-heater-leaking",
    "primaryKeyword": "water heater leaking",
    "secondaryKeywords": [
      "leaking water heater",
      "water heater leaking from bottom",
      "water heater leaking from the bottom",
      "hot water heater leaking",
      "water heater dripping",
      "water heater leaking from top"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Info → Trans.",
    "monthlyVolume": 1200,
    "keywordDifficulty": 2,
    "cpc": 250.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-8993",
    "ctaPhoneDisplay": "1-888-328-8993",
    "ctaPhoneE164": "+18883288993"
  },
  {
    "id": 16,
    "title": "Hot Water Tank Leaking - Repair or Replace Guide",
    "slug": "hot-water-tank-leaking",
    "primaryKeyword": "hot water tank leaking",
    "secondaryKeywords": [
      "hot water tank leaking from bottom",
      "hot water tank leaking from top",
      "leaking hot water tank",
      "hot water tank pressure relief valve leaking",
      "hot water tank dripping"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Info → Trans.",
    "monthlyVolume": 1150,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-8994",
    "ctaPhoneDisplay": "1-888-328-8994",
    "ctaPhoneE164": "+18883288994"
  },
  {
    "id": 17,
    "title": "No Hot Water? Causes & How to Get It Fixed Today",
    "slug": "no-hot-water",
    "primaryKeyword": "no hot water",
    "secondaryKeywords": [
      "no hot water in the house",
      "no hot water in house",
      "no hot water in apartment",
      "no hot water from tap",
      "hot water not working",
      "no hot water after shower"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Info → Trans.",
    "monthlyVolume": 1250,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-8995",
    "ctaPhoneDisplay": "1-888-328-8995",
    "ctaPhoneE164": "+18883288995"
  },
  {
    "id": 18,
    "title": "Water Heater Not Working? Diagnose the Problem Fast",
    "slug": "water-heater-not-working",
    "primaryKeyword": "water heater not working",
    "secondaryKeywords": [
      "hot water heater not working",
      "water heater stopped working",
      "tankless water heater not working",
      "why is my water heater not working",
      "hot water heater stopped working"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Info → Trans.",
    "monthlyVolume": 450,
    "keywordDifficulty": 1,
    "cpc": 200.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-8996",
    "ctaPhoneDisplay": "1-888-328-8996",
    "ctaPhoneE164": "+18883288996"
  },
  {
    "id": 19,
    "title": "Hot Water Tank Pressure Relief Valve Leaking - Fix It",
    "slug": "pressure-relief-valve-leaking",
    "primaryKeyword": "hot water tank pressure relief valve leaking",
    "secondaryKeywords": [
      "t&p valve leaking",
      "temperature pressure relief valve water heater",
      "pressure relief valve dripping",
      "hot water tank pressure valve replacement"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Info → Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-8997",
    "ctaPhoneDisplay": "1-888-328-8997",
    "ctaPhoneE164": "+18883288997"
  },
  {
    "id": 25,
    "title": "Water Heater Repair Toronto - Same-Day Licensed Service",
    "slug": "water-heater-repair-toronto",
    "primaryKeyword": "water heater repair toronto",
    "secondaryKeywords": [
      "hot water tank repair toronto",
      "hot water heater repair toronto",
      "emergency water heater repair toronto",
      "water heater service toronto",
      "plumber water heater toronto"
    ],
    "targetArea": "Toronto, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 900.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8997",
    "ctaPhoneDisplay": "1-888-328-8997",
    "ctaPhoneE164": "+18883288997"
  },
  {
    "id": 26,
    "title": "Hot Water Tank Repair Toronto - Fast & Certified",
    "slug": "hot-water-tank-repair-toronto",
    "primaryKeyword": "hot water tank repair toronto",
    "secondaryKeywords": [
      "water heater repair toronto",
      "hot water tank service toronto",
      "fix hot water tank toronto",
      "hot water heater repair toronto"
    ],
    "targetArea": "Toronto, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 900.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8997",
    "ctaPhoneDisplay": "1-888-328-8997",
    "ctaPhoneE164": "+18883288997"
  },
  {
    "id": 28,
    "title": "Hot Water Tank Replacement Toronto - Installed Today",
    "slug": "hot-water-tank-replacement-toronto",
    "primaryKeyword": "hot water tank replacement toronto",
    "secondaryKeywords": [
      "water heater replacement toronto",
      "replace hot water tank toronto",
      "hot water tank installation toronto",
      "toronto hot water tank replacement cost"
    ],
    "targetArea": "Toronto, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8997",
    "ctaPhoneDisplay": "1-888-328-8997",
    "ctaPhoneE164": "+18883288997"
  },
  {
    "id": 29,
    "title": "Water Heater Replacement Toronto - Same-Day Install",
    "slug": "water-heater-replacement-toronto",
    "primaryKeyword": "water heater replacement toronto",
    "secondaryKeywords": [
      "hot water tank replacement toronto",
      "water heater install toronto",
      "tankless water heater toronto",
      "water heater cost toronto"
    ],
    "targetArea": "Toronto, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8997",
    "ctaPhoneDisplay": "1-888-328-8997",
    "ctaPhoneE164": "+18883288997"
  },
  {
    "id": 30,
    "title": "Water Heater Installation Toronto - Licensed & Insured",
    "slug": "water-heater-installation-toronto",
    "primaryKeyword": "water heater installation toronto",
    "secondaryKeywords": [
      "hot water tank installation toronto",
      "tankless water heater installation toronto",
      "water heater installer toronto",
      "water heater installation cost toronto"
    ],
    "targetArea": "Toronto, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 170,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8997",
    "ctaPhoneDisplay": "1-888-328-8997",
    "ctaPhoneE164": "+18883288997"
  },
  {
    "id": 32,
    "title": "Hot Water Tank Repair Mississauga - Fast & Certified",
    "slug": "hot-water-tank-repair-mississauga",
    "primaryKeyword": "hot water tank repair mississauga",
    "secondaryKeywords": [
      "water heater repair mississauga",
      "hot water tank service mississauga",
      "fix hot water tank mississauga",
      "hot water heater repair mississauga"
    ],
    "targetArea": "Mississauga, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8997",
    "ctaPhoneDisplay": "1-888-328-8997",
    "ctaPhoneE164": "+18883288997"
  },
  {
    "id": 33,
    "title": "Tankless Water Heater Repair Mississauga - Certified Techs",
    "slug": "tankless-water-heater-repair-mississauga",
    "primaryKeyword": "tankless water heater repair mississauga",
    "secondaryKeywords": [
      "on demand water heater repair mississauga",
      "navien repair mississauga",
      "rinnai repair mississauga",
      "tankless heater service mississauga"
    ],
    "targetArea": "Mississauga, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8998",
    "ctaPhoneDisplay": "1-888-328-8998",
    "ctaPhoneE164": "+18883288998"
  },
  {
    "id": 34,
    "title": "Hot Water Tank Replacement Mississauga - Installed Today",
    "slug": "hot-water-tank-replacement-mississauga",
    "primaryKeyword": "hot water tank replacement mississauga",
    "secondaryKeywords": [
      "water heater replacement mississauga",
      "replace hot water tank mississauga",
      "hot water tank installation mississauga",
      "mississauga hot water tank replacement cost"
    ],
    "targetArea": "Mississauga, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-8999",
    "ctaPhoneDisplay": "1-888-328-8999",
    "ctaPhoneE164": "+18883288999"
  },
  {
    "id": 35,
    "title": "Water Heater Replacement Mississauga - Same-Day Install",
    "slug": "water-heater-replacement-mississauga",
    "primaryKeyword": "water heater replacement mississauga",
    "secondaryKeywords": [
      "hot water tank replacement mississauga",
      "water heater install mississauga",
      "tankless water heater mississauga",
      "water heater cost mississauga"
    ],
    "targetArea": "Mississauga, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9000",
    "ctaPhoneDisplay": "1-888-328-9000",
    "ctaPhoneE164": "+18883289000"
  },
  {
    "id": 36,
    "title": "Water Heater Installation Mississauga - Licensed & Insured",
    "slug": "water-heater-installation-mississauga",
    "primaryKeyword": "water heater installation mississauga",
    "secondaryKeywords": [
      "hot water tank installation mississauga",
      "tankless water heater installation mississauga",
      "water heater installer mississauga",
      "water heater installation cost mississauga"
    ],
    "targetArea": "Mississauga, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 120,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9001",
    "ctaPhoneDisplay": "1-888-328-9001",
    "ctaPhoneE164": "+18883289001"
  },
  {
    "id": 37,
    "title": "Water Heater Repair Brampton - Same-Day Licensed Service",
    "slug": "water-heater-repair-brampton",
    "primaryKeyword": "water heater repair brampton",
    "secondaryKeywords": [
      "hot water tank repair brampton",
      "hot water heater repair brampton",
      "emergency water heater repair brampton",
      "water heater service brampton",
      "plumber water heater brampton"
    ],
    "targetArea": "Brampton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9002",
    "ctaPhoneDisplay": "1-888-328-9002",
    "ctaPhoneE164": "+18883289002"
  },
  {
    "id": 38,
    "title": "Hot Water Tank Repair Brampton - Fast & Certified",
    "slug": "hot-water-tank-repair-brampton",
    "primaryKeyword": "hot water tank repair brampton",
    "secondaryKeywords": [
      "water heater repair brampton",
      "hot water tank service brampton",
      "fix hot water tank brampton",
      "hot water heater repair brampton"
    ],
    "targetArea": "Brampton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9003",
    "ctaPhoneDisplay": "1-888-328-9003",
    "ctaPhoneE164": "+18883289003"
  },
  {
    "id": 39,
    "title": "Tankless Water Heater Repair Brampton - Certified Techs",
    "slug": "tankless-water-heater-repair-brampton",
    "primaryKeyword": "tankless water heater repair brampton",
    "secondaryKeywords": [
      "on demand water heater repair brampton",
      "navien repair brampton",
      "rinnai repair brampton",
      "tankless heater service brampton"
    ],
    "targetArea": "Brampton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9004",
    "ctaPhoneDisplay": "1-888-328-9004",
    "ctaPhoneE164": "+18883289004"
  },
  {
    "id": 40,
    "title": "Hot Water Tank Replacement Brampton - Installed Today",
    "slug": "hot-water-tank-replacement-brampton",
    "primaryKeyword": "hot water tank replacement brampton",
    "secondaryKeywords": [
      "water heater replacement brampton",
      "replace hot water tank brampton",
      "hot water tank installation brampton",
      "brampton hot water tank replacement cost"
    ],
    "targetArea": "Brampton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9005",
    "ctaPhoneDisplay": "1-888-328-9005",
    "ctaPhoneE164": "+18883289005"
  },
  {
    "id": 41,
    "title": "Water Heater Replacement Brampton - Same-Day Install",
    "slug": "water-heater-replacement-brampton",
    "primaryKeyword": "water heater replacement brampton",
    "secondaryKeywords": [
      "hot water tank replacement brampton",
      "water heater install brampton",
      "tankless water heater brampton",
      "water heater cost brampton"
    ],
    "targetArea": "Brampton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9006",
    "ctaPhoneDisplay": "1-888-328-9006",
    "ctaPhoneE164": "+18883289006"
  },
  {
    "id": 42,
    "title": "Water Heater Installation Brampton - Licensed & Insured",
    "slug": "water-heater-installation-brampton",
    "primaryKeyword": "water heater installation brampton",
    "secondaryKeywords": [
      "hot water tank installation brampton",
      "tankless water heater installation brampton",
      "water heater installer brampton",
      "water heater installation cost brampton"
    ],
    "targetArea": "Brampton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9007",
    "ctaPhoneDisplay": "1-888-328-9007",
    "ctaPhoneE164": "+18883289007"
  },
  {
    "id": 43,
    "title": "Water Heater Repair Hamilton - Same-Day Licensed Service",
    "slug": "water-heater-repair-hamilton",
    "primaryKeyword": "water heater repair hamilton",
    "secondaryKeywords": [
      "hot water tank repair hamilton",
      "hot water heater repair hamilton",
      "emergency water heater repair hamilton",
      "water heater service hamilton",
      "plumber water heater hamilton"
    ],
    "targetArea": "Hamilton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9008",
    "ctaPhoneDisplay": "1-888-328-9008",
    "ctaPhoneE164": "+18883289008"
  },
  {
    "id": 44,
    "title": "Hot Water Tank Repair Hamilton - Fast & Certified",
    "slug": "hot-water-tank-repair-hamilton",
    "primaryKeyword": "hot water tank repair hamilton",
    "secondaryKeywords": [
      "water heater repair hamilton",
      "hot water tank service hamilton",
      "fix hot water tank hamilton",
      "hot water heater repair hamilton"
    ],
    "targetArea": "Hamilton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9009",
    "ctaPhoneDisplay": "1-888-328-9009",
    "ctaPhoneE164": "+18883289009"
  },
  {
    "id": 45,
    "title": "Tankless Water Heater Repair Hamilton - Certified Techs",
    "slug": "tankless-water-heater-repair-hamilton",
    "primaryKeyword": "tankless water heater repair hamilton",
    "secondaryKeywords": [
      "on demand water heater repair hamilton",
      "navien repair hamilton",
      "rinnai repair hamilton",
      "tankless heater service hamilton"
    ],
    "targetArea": "Hamilton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9010",
    "ctaPhoneDisplay": "1-888-328-9010",
    "ctaPhoneE164": "+18883289010"
  },
  {
    "id": 46,
    "title": "Hot Water Tank Replacement Hamilton - Installed Today",
    "slug": "hot-water-tank-replacement-hamilton",
    "primaryKeyword": "hot water tank replacement hamilton",
    "secondaryKeywords": [
      "water heater replacement hamilton",
      "replace hot water tank hamilton",
      "hot water tank installation hamilton",
      "hamilton hot water tank replacement cost"
    ],
    "targetArea": "Hamilton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9011",
    "ctaPhoneDisplay": "1-888-328-9011",
    "ctaPhoneE164": "+18883289011"
  },
  {
    "id": 47,
    "title": "Water Heater Replacement Hamilton - Same-Day Install",
    "slug": "water-heater-replacement-hamilton",
    "primaryKeyword": "water heater replacement hamilton",
    "secondaryKeywords": [
      "hot water tank replacement hamilton",
      "water heater install hamilton",
      "tankless water heater hamilton",
      "water heater cost hamilton"
    ],
    "targetArea": "Hamilton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9012",
    "ctaPhoneDisplay": "1-888-328-9012",
    "ctaPhoneE164": "+18883289012"
  },
  {
    "id": 48,
    "title": "Water Heater Installation Hamilton - Licensed & Insured",
    "slug": "water-heater-installation-hamilton",
    "primaryKeyword": "water heater installation hamilton",
    "secondaryKeywords": [
      "hot water tank installation hamilton",
      "tankless water heater installation hamilton",
      "water heater installer hamilton",
      "water heater installation cost hamilton"
    ],
    "targetArea": "Hamilton, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 120,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9013",
    "ctaPhoneDisplay": "1-888-328-9013",
    "ctaPhoneE164": "+18883289013"
  },
  {
    "id": 49,
    "title": "Water Heater Repair Ottawa - Same-Day Licensed Service",
    "slug": "water-heater-repair-ottawa",
    "primaryKeyword": "water heater repair ottawa",
    "secondaryKeywords": [
      "hot water tank repair ottawa",
      "hot water heater repair ottawa",
      "emergency water heater repair ottawa",
      "water heater service ottawa",
      "plumber water heater ottawa"
    ],
    "targetArea": "Ottawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9014",
    "ctaPhoneDisplay": "1-888-328-9014",
    "ctaPhoneE164": "+18883289014"
  },
  {
    "id": 50,
    "title": "Hot Water Tank Repair Ottawa - Fast & Certified",
    "slug": "hot-water-tank-repair-ottawa",
    "primaryKeyword": "hot water tank repair ottawa",
    "secondaryKeywords": [
      "water heater repair ottawa",
      "hot water tank service ottawa",
      "fix hot water tank ottawa",
      "hot water heater repair ottawa"
    ],
    "targetArea": "Ottawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9015",
    "ctaPhoneDisplay": "1-888-328-9015",
    "ctaPhoneE164": "+18883289015"
  },
  {
    "id": 51,
    "title": "Tankless Water Heater Repair Ottawa - Certified Techs",
    "slug": "tankless-water-heater-repair-ottawa",
    "primaryKeyword": "tankless water heater repair ottawa",
    "secondaryKeywords": [
      "on demand water heater repair ottawa",
      "navien repair ottawa",
      "rinnai repair ottawa",
      "tankless heater service ottawa"
    ],
    "targetArea": "Ottawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9016",
    "ctaPhoneDisplay": "1-888-328-9016",
    "ctaPhoneE164": "+18883289016"
  },
  {
    "id": 52,
    "title": "Hot Water Tank Replacement Ottawa - Installed Today",
    "slug": "hot-water-tank-replacement-ottawa",
    "primaryKeyword": "hot water tank replacement ottawa",
    "secondaryKeywords": [
      "water heater replacement ottawa",
      "replace hot water tank ottawa",
      "hot water tank installation ottawa",
      "ottawa hot water tank replacement cost"
    ],
    "targetArea": "Ottawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9017",
    "ctaPhoneDisplay": "1-888-328-9017",
    "ctaPhoneE164": "+18883289017"
  },
  {
    "id": 53,
    "title": "Water Heater Replacement Ottawa - Same-Day Install",
    "slug": "water-heater-replacement-ottawa",
    "primaryKeyword": "water heater replacement ottawa",
    "secondaryKeywords": [
      "hot water tank replacement ottawa",
      "water heater install ottawa",
      "tankless water heater ottawa",
      "water heater cost ottawa"
    ],
    "targetArea": "Ottawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9018",
    "ctaPhoneDisplay": "1-888-328-9018",
    "ctaPhoneE164": "+18883289018"
  },
  {
    "id": 54,
    "title": "Water Heater Installation Ottawa - Licensed & Insured",
    "slug": "water-heater-installation-ottawa",
    "primaryKeyword": "water heater installation ottawa",
    "secondaryKeywords": [
      "hot water tank installation ottawa",
      "tankless water heater installation ottawa",
      "water heater installer ottawa",
      "water heater installation cost ottawa"
    ],
    "targetArea": "Ottawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 120,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9019",
    "ctaPhoneDisplay": "1-888-328-9019",
    "ctaPhoneE164": "+18883289019"
  },
  {
    "id": 55,
    "title": "Water Heater Repair Kitchener - Same-Day Licensed Service",
    "slug": "water-heater-repair-kitchener",
    "primaryKeyword": "water heater repair kitchener",
    "secondaryKeywords": [
      "hot water tank repair kitchener",
      "hot water heater repair kitchener",
      "emergency water heater repair kitchener",
      "water heater service kitchener",
      "plumber water heater kitchener"
    ],
    "targetArea": "Kitchener, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 900.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9020",
    "ctaPhoneDisplay": "1-888-328-9020",
    "ctaPhoneE164": "+18883289020"
  },
  {
    "id": 56,
    "title": "Hot Water Tank Repair Kitchener - Fast & Certified",
    "slug": "hot-water-tank-repair-kitchener",
    "primaryKeyword": "hot water tank repair kitchener",
    "secondaryKeywords": [
      "water heater repair kitchener",
      "hot water tank service kitchener",
      "fix hot water tank kitchener",
      "hot water heater repair kitchener"
    ],
    "targetArea": "Kitchener, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 900.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9021",
    "ctaPhoneDisplay": "1-888-328-9021",
    "ctaPhoneE164": "+18883289021"
  },
  {
    "id": 57,
    "title": "Tankless Water Heater Repair Kitchener - Certified Techs",
    "slug": "tankless-water-heater-repair-kitchener",
    "primaryKeyword": "tankless water heater repair kitchener",
    "secondaryKeywords": [
      "on demand water heater repair kitchener",
      "navien repair kitchener",
      "rinnai repair kitchener",
      "tankless heater service kitchener"
    ],
    "targetArea": "Kitchener, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 900.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9022",
    "ctaPhoneDisplay": "1-888-328-9022",
    "ctaPhoneE164": "+18883289022"
  },
  {
    "id": 58,
    "title": "Hot Water Tank Replacement Kitchener - Installed Today",
    "slug": "hot-water-tank-replacement-kitchener",
    "primaryKeyword": "hot water tank replacement kitchener",
    "secondaryKeywords": [
      "water heater replacement kitchener",
      "replace hot water tank kitchener",
      "hot water tank installation kitchener",
      "kitchener hot water tank replacement cost"
    ],
    "targetArea": "Kitchener, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9023",
    "ctaPhoneDisplay": "1-888-328-9023",
    "ctaPhoneE164": "+18883289023"
  },
  {
    "id": 59,
    "title": "Water Heater Replacement Kitchener - Same-Day Install",
    "slug": "water-heater-replacement-kitchener",
    "primaryKeyword": "water heater replacement kitchener",
    "secondaryKeywords": [
      "hot water tank replacement kitchener",
      "water heater install kitchener",
      "tankless water heater kitchener",
      "water heater cost kitchener"
    ],
    "targetArea": "Kitchener, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9024",
    "ctaPhoneDisplay": "1-888-328-9024",
    "ctaPhoneE164": "+18883289024"
  },
  {
    "id": 60,
    "title": "Water Heater Installation Kitchener - Licensed & Insured",
    "slug": "water-heater-installation-kitchener",
    "primaryKeyword": "water heater installation kitchener",
    "secondaryKeywords": [
      "hot water tank installation kitchener",
      "tankless water heater installation kitchener",
      "water heater installer kitchener",
      "water heater installation cost kitchener"
    ],
    "targetArea": "Kitchener, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9025",
    "ctaPhoneDisplay": "1-888-328-9025",
    "ctaPhoneE164": "+18883289025"
  },
  {
    "id": 61,
    "title": "Water Heater Repair Markham - Same-Day Licensed Service",
    "slug": "water-heater-repair-markham",
    "primaryKeyword": "water heater repair markham",
    "secondaryKeywords": [
      "hot water tank repair markham",
      "hot water heater repair markham",
      "emergency water heater repair markham",
      "water heater service markham",
      "plumber water heater markham"
    ],
    "targetArea": "Markham, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9026",
    "ctaPhoneDisplay": "1-888-328-9026",
    "ctaPhoneE164": "+18883289026"
  },
  {
    "id": 62,
    "title": "Hot Water Tank Repair Markham - Fast & Certified",
    "slug": "hot-water-tank-repair-markham",
    "primaryKeyword": "hot water tank repair markham",
    "secondaryKeywords": [
      "water heater repair markham",
      "hot water tank service markham",
      "fix hot water tank markham",
      "hot water heater repair markham"
    ],
    "targetArea": "Markham, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9027",
    "ctaPhoneDisplay": "1-888-328-9027",
    "ctaPhoneE164": "+18883289027"
  },
  {
    "id": 63,
    "title": "Tankless Water Heater Repair Markham - Certified Techs",
    "slug": "tankless-water-heater-repair-markham",
    "primaryKeyword": "tankless water heater repair markham",
    "secondaryKeywords": [
      "on demand water heater repair markham",
      "navien repair markham",
      "rinnai repair markham",
      "tankless heater service markham"
    ],
    "targetArea": "Markham, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9028",
    "ctaPhoneDisplay": "1-888-328-9028",
    "ctaPhoneE164": "+18883289028"
  },
  {
    "id": 64,
    "title": "Hot Water Tank Replacement Markham - Installed Today",
    "slug": "hot-water-tank-replacement-markham",
    "primaryKeyword": "hot water tank replacement markham",
    "secondaryKeywords": [
      "water heater replacement markham",
      "replace hot water tank markham",
      "hot water tank installation markham",
      "markham hot water tank replacement cost"
    ],
    "targetArea": "Markham, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9029",
    "ctaPhoneDisplay": "1-888-328-9029",
    "ctaPhoneE164": "+18883289029"
  },
  {
    "id": 65,
    "title": "Water Heater Replacement Markham - Same-Day Install",
    "slug": "water-heater-replacement-markham",
    "primaryKeyword": "water heater replacement markham",
    "secondaryKeywords": [
      "hot water tank replacement markham",
      "water heater install markham",
      "tankless water heater markham",
      "water heater cost markham"
    ],
    "targetArea": "Markham, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9030",
    "ctaPhoneDisplay": "1-888-328-9030",
    "ctaPhoneE164": "+18883289030"
  },
  {
    "id": 66,
    "title": "Water Heater Installation Markham - Licensed & Insured",
    "slug": "water-heater-installation-markham",
    "primaryKeyword": "water heater installation markham",
    "secondaryKeywords": [
      "hot water tank installation markham",
      "tankless water heater installation markham",
      "water heater installer markham",
      "water heater installation cost markham"
    ],
    "targetArea": "Markham, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 120,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9031",
    "ctaPhoneDisplay": "1-888-328-9031",
    "ctaPhoneE164": "+18883289031"
  },
  {
    "id": 67,
    "title": "Water Heater Repair Barrie - Same-Day Licensed Service",
    "slug": "water-heater-repair-barrie",
    "primaryKeyword": "water heater repair barrie",
    "secondaryKeywords": [
      "hot water tank repair barrie",
      "hot water heater repair barrie",
      "emergency water heater repair barrie",
      "water heater service barrie",
      "plumber water heater barrie"
    ],
    "targetArea": "Barrie, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 300,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9032",
    "ctaPhoneDisplay": "1-888-328-9032",
    "ctaPhoneE164": "+18883289032"
  },
  {
    "id": 68,
    "title": "Hot Water Tank Repair Barrie - Fast & Certified",
    "slug": "hot-water-tank-repair-barrie",
    "primaryKeyword": "hot water tank repair barrie",
    "secondaryKeywords": [
      "water heater repair barrie",
      "hot water tank service barrie",
      "fix hot water tank barrie",
      "hot water heater repair barrie"
    ],
    "targetArea": "Barrie, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9033",
    "ctaPhoneDisplay": "1-888-328-9033",
    "ctaPhoneE164": "+18883289033"
  },
  {
    "id": 69,
    "title": "Tankless Water Heater Repair Barrie - Certified Techs",
    "slug": "tankless-water-heater-repair-barrie",
    "primaryKeyword": "tankless water heater repair barrie",
    "secondaryKeywords": [
      "on demand water heater repair barrie",
      "navien repair barrie",
      "rinnai repair barrie",
      "tankless heater service barrie"
    ],
    "targetArea": "Barrie, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9034",
    "ctaPhoneDisplay": "1-888-328-9034",
    "ctaPhoneE164": "+18883289034"
  },
  {
    "id": 70,
    "title": "Hot Water Tank Replacement Barrie - Installed Today",
    "slug": "hot-water-tank-replacement-barrie",
    "primaryKeyword": "hot water tank replacement barrie",
    "secondaryKeywords": [
      "water heater replacement barrie",
      "replace hot water tank barrie",
      "hot water tank installation barrie",
      "barrie hot water tank replacement cost"
    ],
    "targetArea": "Barrie, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9035",
    "ctaPhoneDisplay": "1-888-328-9035",
    "ctaPhoneE164": "+18883289035"
  },
  {
    "id": 71,
    "title": "Water Heater Replacement Barrie - Same-Day Install",
    "slug": "water-heater-replacement-barrie",
    "primaryKeyword": "water heater replacement barrie",
    "secondaryKeywords": [
      "hot water tank replacement barrie",
      "water heater install barrie",
      "tankless water heater barrie",
      "water heater cost barrie"
    ],
    "targetArea": "Barrie, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9036",
    "ctaPhoneDisplay": "1-888-328-9036",
    "ctaPhoneE164": "+18883289036"
  },
  {
    "id": 72,
    "title": "Water Heater Installation Barrie - Licensed & Insured",
    "slug": "water-heater-installation-barrie",
    "primaryKeyword": "water heater installation barrie",
    "secondaryKeywords": [
      "hot water tank installation barrie",
      "tankless water heater installation barrie",
      "water heater installer barrie",
      "water heater installation cost barrie"
    ],
    "targetArea": "Barrie, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 220,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9037",
    "ctaPhoneDisplay": "1-888-328-9037",
    "ctaPhoneE164": "+18883289037"
  },
  {
    "id": 73,
    "title": "Water Heater Repair Orillia - Same-Day Licensed Service",
    "slug": "water-heater-repair-orillia",
    "primaryKeyword": "water heater repair orillia",
    "secondaryKeywords": [
      "hot water tank repair orillia",
      "hot water heater repair orillia",
      "emergency water heater repair orillia",
      "water heater service orillia",
      "plumber water heater orillia"
    ],
    "targetArea": "Orillia, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 700,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9038",
    "ctaPhoneDisplay": "1-888-328-9038",
    "ctaPhoneE164": "+18883289038"
  },
  {
    "id": 74,
    "title": "Hot Water Tank Repair Orillia - Fast & Certified",
    "slug": "hot-water-tank-repair-orillia",
    "primaryKeyword": "hot water tank repair orillia",
    "secondaryKeywords": [
      "water heater repair orillia",
      "hot water tank service orillia",
      "fix hot water tank orillia",
      "hot water heater repair orillia"
    ],
    "targetArea": "Orillia, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 650,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9039",
    "ctaPhoneDisplay": "1-888-328-9039",
    "ctaPhoneE164": "+18883289039"
  },
  {
    "id": 75,
    "title": "Tankless Water Heater Repair Orillia - Certified Techs",
    "slug": "tankless-water-heater-repair-orillia",
    "primaryKeyword": "tankless water heater repair orillia",
    "secondaryKeywords": [
      "on demand water heater repair orillia",
      "navien repair orillia",
      "rinnai repair orillia",
      "tankless heater service orillia"
    ],
    "targetArea": "Orillia, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 600,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9040",
    "ctaPhoneDisplay": "1-888-328-9040",
    "ctaPhoneE164": "+18883289040"
  },
  {
    "id": 76,
    "title": "Hot Water Tank Replacement Orillia - Installed Today",
    "slug": "hot-water-tank-replacement-orillia",
    "primaryKeyword": "hot water tank replacement orillia",
    "secondaryKeywords": [
      "water heater replacement orillia",
      "replace hot water tank orillia",
      "hot water tank installation orillia",
      "orillia hot water tank replacement cost"
    ],
    "targetArea": "Orillia, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9041",
    "ctaPhoneDisplay": "1-888-328-9041",
    "ctaPhoneE164": "+18883289041"
  },
  {
    "id": 77,
    "title": "Water Heater Replacement Orillia - Same-Day Install",
    "slug": "water-heater-replacement-orillia",
    "primaryKeyword": "water heater replacement orillia",
    "secondaryKeywords": [
      "hot water tank replacement orillia",
      "water heater install orillia",
      "tankless water heater orillia",
      "water heater cost orillia"
    ],
    "targetArea": "Orillia, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9042",
    "ctaPhoneDisplay": "1-888-328-9042",
    "ctaPhoneE164": "+18883289042"
  },
  {
    "id": 78,
    "title": "Water Heater Installation Orillia - Licensed & Insured",
    "slug": "water-heater-installation-orillia",
    "primaryKeyword": "water heater installation orillia",
    "secondaryKeywords": [
      "hot water tank installation orillia",
      "tankless water heater installation orillia",
      "water heater installer orillia",
      "water heater installation cost orillia"
    ],
    "targetArea": "Orillia, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 620,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9043",
    "ctaPhoneDisplay": "1-888-328-9043",
    "ctaPhoneE164": "+18883289043"
  },
  {
    "id": 79,
    "title": "Water Heater Repair Burlington - Same-Day Licensed Service",
    "slug": "water-heater-repair-burlington",
    "primaryKeyword": "water heater repair burlington",
    "secondaryKeywords": [
      "hot water tank repair burlington",
      "hot water heater repair burlington",
      "emergency water heater repair burlington",
      "water heater service burlington",
      "plumber water heater burlington"
    ],
    "targetArea": "Burlington, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9044",
    "ctaPhoneDisplay": "1-888-328-9044",
    "ctaPhoneE164": "+18883289044"
  },
  {
    "id": 80,
    "title": "Hot Water Tank Repair Burlington - Fast & Certified",
    "slug": "hot-water-tank-repair-burlington",
    "primaryKeyword": "hot water tank repair burlington",
    "secondaryKeywords": [
      "water heater repair burlington",
      "hot water tank service burlington",
      "fix hot water tank burlington",
      "hot water heater repair burlington"
    ],
    "targetArea": "Burlington, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9045",
    "ctaPhoneDisplay": "1-888-328-9045",
    "ctaPhoneE164": "+18883289045"
  },
  {
    "id": 81,
    "title": "Tankless Water Heater Repair Burlington - Certified Techs",
    "slug": "tankless-water-heater-repair-burlington",
    "primaryKeyword": "tankless water heater repair burlington",
    "secondaryKeywords": [
      "on demand water heater repair burlington",
      "navien repair burlington",
      "rinnai repair burlington",
      "tankless heater service burlington"
    ],
    "targetArea": "Burlington, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9046",
    "ctaPhoneDisplay": "1-888-328-9046",
    "ctaPhoneE164": "+18883289046"
  },
  {
    "id": 82,
    "title": "Hot Water Tank Replacement Burlington - Installed Today",
    "slug": "hot-water-tank-replacement-burlington",
    "primaryKeyword": "hot water tank replacement burlington",
    "secondaryKeywords": [
      "water heater replacement burlington",
      "replace hot water tank burlington",
      "hot water tank installation burlington",
      "burlington hot water tank replacement cost"
    ],
    "targetArea": "Burlington, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9047",
    "ctaPhoneDisplay": "1-888-328-9047",
    "ctaPhoneE164": "+18883289047"
  },
  {
    "id": 83,
    "title": "Water Heater Replacement Burlington - Same-Day Install",
    "slug": "water-heater-replacement-burlington",
    "primaryKeyword": "water heater replacement burlington",
    "secondaryKeywords": [
      "hot water tank replacement burlington",
      "water heater install burlington",
      "tankless water heater burlington",
      "water heater cost burlington"
    ],
    "targetArea": "Burlington, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9048",
    "ctaPhoneDisplay": "1-888-328-9048",
    "ctaPhoneE164": "+18883289048"
  },
  {
    "id": 84,
    "title": "Water Heater Installation Burlington - Licensed & Insured",
    "slug": "water-heater-installation-burlington",
    "primaryKeyword": "water heater installation burlington",
    "secondaryKeywords": [
      "hot water tank installation burlington",
      "tankless water heater installation burlington",
      "water heater installer burlington",
      "water heater installation cost burlington"
    ],
    "targetArea": "Burlington, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9049",
    "ctaPhoneDisplay": "1-888-328-9049",
    "ctaPhoneE164": "+18883289049"
  },
  {
    "id": 85,
    "title": "Water Heater Repair Oakville - Same-Day Licensed Service",
    "slug": "water-heater-repair-oakville",
    "primaryKeyword": "water heater repair oakville",
    "secondaryKeywords": [
      "hot water tank repair oakville",
      "hot water heater repair oakville",
      "emergency water heater repair oakville",
      "water heater service oakville",
      "plumber water heater oakville"
    ],
    "targetArea": "Oakville, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9050",
    "ctaPhoneDisplay": "1-888-328-9050",
    "ctaPhoneE164": "+18883289050"
  },
  {
    "id": 86,
    "title": "Hot Water Tank Repair Oakville - Fast & Certified",
    "slug": "hot-water-tank-repair-oakville",
    "primaryKeyword": "hot water tank repair oakville",
    "secondaryKeywords": [
      "water heater repair oakville",
      "hot water tank service oakville",
      "fix hot water tank oakville",
      "hot water heater repair oakville"
    ],
    "targetArea": "Oakville, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9051",
    "ctaPhoneDisplay": "1-888-328-9051",
    "ctaPhoneE164": "+18883289051"
  },
  {
    "id": 87,
    "title": "Tankless Water Heater Repair Oakville - Certified Techs",
    "slug": "tankless-water-heater-repair-oakville",
    "primaryKeyword": "tankless water heater repair oakville",
    "secondaryKeywords": [
      "on demand water heater repair oakville",
      "navien repair oakville",
      "rinnai repair oakville",
      "tankless heater service oakville"
    ],
    "targetArea": "Oakville, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9052",
    "ctaPhoneDisplay": "1-888-328-9052",
    "ctaPhoneE164": "+18883289052"
  },
  {
    "id": 88,
    "title": "Hot Water Tank Replacement Oakville - Installed Today",
    "slug": "hot-water-tank-replacement-oakville",
    "primaryKeyword": "hot water tank replacement oakville",
    "secondaryKeywords": [
      "water heater replacement oakville",
      "replace hot water tank oakville",
      "hot water tank installation oakville",
      "oakville hot water tank replacement cost"
    ],
    "targetArea": "Oakville, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9053",
    "ctaPhoneDisplay": "1-888-328-9053",
    "ctaPhoneE164": "+18883289053"
  },
  {
    "id": 89,
    "title": "Water Heater Replacement Oakville - Same-Day Install",
    "slug": "water-heater-replacement-oakville",
    "primaryKeyword": "water heater replacement oakville",
    "secondaryKeywords": [
      "hot water tank replacement oakville",
      "water heater install oakville",
      "tankless water heater oakville",
      "water heater cost oakville"
    ],
    "targetArea": "Oakville, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9054",
    "ctaPhoneDisplay": "1-888-328-9054",
    "ctaPhoneE164": "+18883289054"
  },
  {
    "id": 90,
    "title": "Water Heater Installation Oakville - Licensed & Insured",
    "slug": "water-heater-installation-oakville",
    "primaryKeyword": "water heater installation oakville",
    "secondaryKeywords": [
      "hot water tank installation oakville",
      "tankless water heater installation oakville",
      "water heater installer oakville",
      "water heater installation cost oakville"
    ],
    "targetArea": "Oakville, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9055",
    "ctaPhoneDisplay": "1-888-328-9055",
    "ctaPhoneE164": "+18883289055"
  },
  {
    "id": 91,
    "title": "Water Heater Repair Windsor - Same-Day Licensed Service",
    "slug": "water-heater-repair-windsor",
    "primaryKeyword": "water heater repair windsor",
    "secondaryKeywords": [
      "hot water tank repair windsor",
      "hot water heater repair windsor",
      "emergency water heater repair windsor",
      "water heater service windsor",
      "plumber water heater windsor"
    ],
    "targetArea": "Windsor, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9056",
    "ctaPhoneDisplay": "1-888-328-9056",
    "ctaPhoneE164": "+18883289056"
  },
  {
    "id": 92,
    "title": "Hot Water Tank Repair Windsor - Fast & Certified",
    "slug": "hot-water-tank-repair-windsor",
    "primaryKeyword": "hot water tank repair windsor",
    "secondaryKeywords": [
      "water heater repair windsor",
      "hot water tank service windsor",
      "fix hot water tank windsor",
      "hot water heater repair windsor"
    ],
    "targetArea": "Windsor, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9057",
    "ctaPhoneDisplay": "1-888-328-9057",
    "ctaPhoneE164": "+18883289057"
  },
  {
    "id": 93,
    "title": "Tankless Water Heater Repair Windsor - Certified Techs",
    "slug": "tankless-water-heater-repair-windsor",
    "primaryKeyword": "tankless water heater repair windsor",
    "secondaryKeywords": [
      "on demand water heater repair windsor",
      "navien repair windsor",
      "rinnai repair windsor",
      "tankless heater service windsor"
    ],
    "targetArea": "Windsor, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9058",
    "ctaPhoneDisplay": "1-888-328-9058",
    "ctaPhoneE164": "+18883289058"
  },
  {
    "id": 94,
    "title": "Hot Water Tank Replacement Windsor - Installed Today",
    "slug": "hot-water-tank-replacement-windsor",
    "primaryKeyword": "hot water tank replacement windsor",
    "secondaryKeywords": [
      "water heater replacement windsor",
      "replace hot water tank windsor",
      "hot water tank installation windsor",
      "windsor hot water tank replacement cost"
    ],
    "targetArea": "Windsor, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9059",
    "ctaPhoneDisplay": "1-888-328-9059",
    "ctaPhoneE164": "+18883289059"
  },
  {
    "id": 95,
    "title": "Water Heater Replacement Windsor - Same-Day Install",
    "slug": "water-heater-replacement-windsor",
    "primaryKeyword": "water heater replacement windsor",
    "secondaryKeywords": [
      "hot water tank replacement windsor",
      "water heater install windsor",
      "tankless water heater windsor",
      "water heater cost windsor"
    ],
    "targetArea": "Windsor, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9060",
    "ctaPhoneDisplay": "1-888-328-9060",
    "ctaPhoneE164": "+18883289060"
  },
  {
    "id": 96,
    "title": "Water Heater Installation Windsor - Licensed & Insured",
    "slug": "water-heater-installation-windsor",
    "primaryKeyword": "water heater installation windsor",
    "secondaryKeywords": [
      "hot water tank installation windsor",
      "tankless water heater installation windsor",
      "water heater installer windsor",
      "water heater installation cost windsor"
    ],
    "targetArea": "Windsor, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9061",
    "ctaPhoneDisplay": "1-888-328-9061",
    "ctaPhoneE164": "+18883289061"
  },
  {
    "id": 97,
    "title": "Water Heater Repair Guelph - Same-Day Licensed Service",
    "slug": "water-heater-repair-guelph",
    "primaryKeyword": "water heater repair guelph",
    "secondaryKeywords": [
      "hot water tank repair guelph",
      "hot water heater repair guelph",
      "emergency water heater repair guelph",
      "water heater service guelph",
      "plumber water heater guelph"
    ],
    "targetArea": "Guelph, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9062",
    "ctaPhoneDisplay": "1-888-328-9062",
    "ctaPhoneE164": "+18883289062"
  },
  {
    "id": 98,
    "title": "Hot Water Tank Repair Guelph - Fast & Certified",
    "slug": "hot-water-tank-repair-guelph",
    "primaryKeyword": "hot water tank repair guelph",
    "secondaryKeywords": [
      "water heater repair guelph",
      "hot water tank service guelph",
      "fix hot water tank guelph",
      "hot water heater repair guelph"
    ],
    "targetArea": "Guelph, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9063",
    "ctaPhoneDisplay": "1-888-328-9063",
    "ctaPhoneE164": "+18883289063"
  },
  {
    "id": 99,
    "title": "Tankless Water Heater Repair Guelph - Certified Techs",
    "slug": "tankless-water-heater-repair-guelph",
    "primaryKeyword": "tankless water heater repair guelph",
    "secondaryKeywords": [
      "on demand water heater repair guelph",
      "navien repair guelph",
      "rinnai repair guelph",
      "tankless heater service guelph"
    ],
    "targetArea": "Guelph, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9064",
    "ctaPhoneDisplay": "1-888-328-9064",
    "ctaPhoneE164": "+18883289064"
  },
  {
    "id": 100,
    "title": "Hot Water Tank Replacement Guelph - Installed Today",
    "slug": "hot-water-tank-replacement-guelph",
    "primaryKeyword": "hot water tank replacement guelph",
    "secondaryKeywords": [
      "water heater replacement guelph",
      "replace hot water tank guelph",
      "hot water tank installation guelph",
      "guelph hot water tank replacement cost"
    ],
    "targetArea": "Guelph, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9065",
    "ctaPhoneDisplay": "1-888-328-9065",
    "ctaPhoneE164": "+18883289065"
  },
  {
    "id": 101,
    "title": "Water Heater Replacement Guelph - Same-Day Install",
    "slug": "water-heater-replacement-guelph",
    "primaryKeyword": "water heater replacement guelph",
    "secondaryKeywords": [
      "hot water tank replacement guelph",
      "water heater install guelph",
      "tankless water heater guelph",
      "water heater cost guelph"
    ],
    "targetArea": "Guelph, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9066",
    "ctaPhoneDisplay": "1-888-328-9066",
    "ctaPhoneE164": "+18883289066"
  },
  {
    "id": 102,
    "title": "Water Heater Installation Guelph - Licensed & Insured",
    "slug": "water-heater-installation-guelph",
    "primaryKeyword": "water heater installation guelph",
    "secondaryKeywords": [
      "hot water tank installation guelph",
      "tankless water heater installation guelph",
      "water heater installer guelph",
      "water heater installation cost guelph"
    ],
    "targetArea": "Guelph, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9067",
    "ctaPhoneDisplay": "1-888-328-9067",
    "ctaPhoneE164": "+18883289067"
  },
  {
    "id": 103,
    "title": "Water Heater Repair Pickering - Same-Day Licensed Service",
    "slug": "water-heater-repair-pickering",
    "primaryKeyword": "water heater repair pickering",
    "secondaryKeywords": [
      "hot water tank repair pickering",
      "hot water heater repair pickering",
      "emergency water heater repair pickering",
      "water heater service pickering",
      "plumber water heater pickering"
    ],
    "targetArea": "Pickering, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9068",
    "ctaPhoneDisplay": "1-888-328-9068",
    "ctaPhoneE164": "+18883289068"
  },
  {
    "id": 104,
    "title": "Hot Water Tank Repair Pickering - Fast & Certified",
    "slug": "hot-water-tank-repair-pickering",
    "primaryKeyword": "hot water tank repair pickering",
    "secondaryKeywords": [
      "water heater repair pickering",
      "hot water tank service pickering",
      "fix hot water tank pickering",
      "hot water heater repair pickering"
    ],
    "targetArea": "Pickering, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9069",
    "ctaPhoneDisplay": "1-888-328-9069",
    "ctaPhoneE164": "+18883289069"
  },
  {
    "id": 105,
    "title": "Tankless Water Heater Repair Pickering - Certified Techs",
    "slug": "tankless-water-heater-repair-pickering",
    "primaryKeyword": "tankless water heater repair pickering",
    "secondaryKeywords": [
      "on demand water heater repair pickering",
      "navien repair pickering",
      "rinnai repair pickering",
      "tankless heater service pickering"
    ],
    "targetArea": "Pickering, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9070",
    "ctaPhoneDisplay": "1-888-328-9070",
    "ctaPhoneE164": "+18883289070"
  },
  {
    "id": 106,
    "title": "Hot Water Tank Replacement Pickering - Installed Today",
    "slug": "hot-water-tank-replacement-pickering",
    "primaryKeyword": "hot water tank replacement pickering",
    "secondaryKeywords": [
      "water heater replacement pickering",
      "replace hot water tank pickering",
      "hot water tank installation pickering",
      "pickering hot water tank replacement cost"
    ],
    "targetArea": "Pickering, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9071",
    "ctaPhoneDisplay": "1-888-328-9071",
    "ctaPhoneE164": "+18883289071"
  },
  {
    "id": 107,
    "title": "Water Heater Replacement Pickering - Same-Day Install",
    "slug": "water-heater-replacement-pickering",
    "primaryKeyword": "water heater replacement pickering",
    "secondaryKeywords": [
      "hot water tank replacement pickering",
      "water heater install pickering",
      "tankless water heater pickering",
      "water heater cost pickering"
    ],
    "targetArea": "Pickering, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9072",
    "ctaPhoneDisplay": "1-888-328-9072",
    "ctaPhoneE164": "+18883289072"
  },
  {
    "id": 108,
    "title": "Water Heater Installation Pickering - Licensed & Insured",
    "slug": "water-heater-installation-pickering",
    "primaryKeyword": "water heater installation pickering",
    "secondaryKeywords": [
      "hot water tank installation pickering",
      "tankless water heater installation pickering",
      "water heater installer pickering",
      "water heater installation cost pickering"
    ],
    "targetArea": "Pickering, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9073",
    "ctaPhoneDisplay": "1-888-328-9073",
    "ctaPhoneE164": "+18883289073"
  },
  {
    "id": 109,
    "title": "Water Heater Repair Oshawa - Same-Day Licensed Service",
    "slug": "water-heater-repair-oshawa",
    "primaryKeyword": "water heater repair oshawa",
    "secondaryKeywords": [
      "hot water tank repair oshawa",
      "hot water heater repair oshawa",
      "emergency water heater repair oshawa",
      "water heater service oshawa",
      "plumber water heater oshawa"
    ],
    "targetArea": "Oshawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9074",
    "ctaPhoneDisplay": "1-888-328-9074",
    "ctaPhoneE164": "+18883289074"
  },
  {
    "id": 110,
    "title": "Hot Water Tank Repair Oshawa - Fast & Certified",
    "slug": "hot-water-tank-repair-oshawa",
    "primaryKeyword": "hot water tank repair oshawa",
    "secondaryKeywords": [
      "water heater repair oshawa",
      "hot water tank service oshawa",
      "fix hot water tank oshawa",
      "hot water heater repair oshawa"
    ],
    "targetArea": "Oshawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9075",
    "ctaPhoneDisplay": "1-888-328-9075",
    "ctaPhoneE164": "+18883289075"
  },
  {
    "id": 111,
    "title": "Tankless Water Heater Repair Oshawa - Certified Techs",
    "slug": "tankless-water-heater-repair-oshawa",
    "primaryKeyword": "tankless water heater repair oshawa",
    "secondaryKeywords": [
      "on demand water heater repair oshawa",
      "navien repair oshawa",
      "rinnai repair oshawa",
      "tankless heater service oshawa"
    ],
    "targetArea": "Oshawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9076",
    "ctaPhoneDisplay": "1-888-328-9076",
    "ctaPhoneE164": "+18883289076"
  },
  {
    "id": 112,
    "title": "Hot Water Tank Replacement Oshawa - Installed Today",
    "slug": "hot-water-tank-replacement-oshawa",
    "primaryKeyword": "hot water tank replacement oshawa",
    "secondaryKeywords": [
      "water heater replacement oshawa",
      "replace hot water tank oshawa",
      "hot water tank installation oshawa",
      "oshawa hot water tank replacement cost"
    ],
    "targetArea": "Oshawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9077",
    "ctaPhoneDisplay": "1-888-328-9077",
    "ctaPhoneE164": "+18883289077"
  },
  {
    "id": 113,
    "title": "Water Heater Replacement Oshawa - Same-Day Install",
    "slug": "water-heater-replacement-oshawa",
    "primaryKeyword": "water heater replacement oshawa",
    "secondaryKeywords": [
      "hot water tank replacement oshawa",
      "water heater install oshawa",
      "tankless water heater oshawa",
      "water heater cost oshawa"
    ],
    "targetArea": "Oshawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9078",
    "ctaPhoneDisplay": "1-888-328-9078",
    "ctaPhoneE164": "+18883289078"
  },
  {
    "id": 114,
    "title": "Water Heater Installation Oshawa - Licensed & Insured",
    "slug": "water-heater-installation-oshawa",
    "primaryKeyword": "water heater installation oshawa",
    "secondaryKeywords": [
      "hot water tank installation oshawa",
      "tankless water heater installation oshawa",
      "water heater installer oshawa",
      "water heater installation cost oshawa"
    ],
    "targetArea": "Oshawa, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9079",
    "ctaPhoneDisplay": "1-888-328-9079",
    "ctaPhoneE164": "+18883289079"
  },
  {
    "id": 115,
    "title": "Water Heater Repair Richmond Hill - Same-Day Licensed Service",
    "slug": "water-heater-repair-richmond-hill",
    "primaryKeyword": "water heater repair richmond hill",
    "secondaryKeywords": [
      "hot water tank repair richmond hill",
      "hot water heater repair richmond hill",
      "emergency water heater repair richmond hill",
      "water heater service richmond hill",
      "plumber water heater richmond hill"
    ],
    "targetArea": "Richmond Hill, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9080",
    "ctaPhoneDisplay": "1-888-328-9080",
    "ctaPhoneE164": "+18883289080"
  },
  {
    "id": 116,
    "title": "Hot Water Tank Repair Richmond Hill - Fast & Certified",
    "slug": "hot-water-tank-repair-richmond-hill",
    "primaryKeyword": "hot water tank repair richmond hill",
    "secondaryKeywords": [
      "water heater repair richmond hill",
      "hot water tank service richmond hill",
      "fix hot water tank richmond hill",
      "hot water heater repair richmond hill"
    ],
    "targetArea": "Richmond Hill, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9081",
    "ctaPhoneDisplay": "1-888-328-9081",
    "ctaPhoneE164": "+18883289081"
  },
  {
    "id": 117,
    "title": "Tankless Water Heater Repair Richmond Hill - Certified Techs",
    "slug": "tankless-water-heater-repair-richmond-hill",
    "primaryKeyword": "tankless water heater repair richmond hill",
    "secondaryKeywords": [
      "on demand water heater repair richmond hill",
      "navien repair richmond hill",
      "rinnai repair richmond hill",
      "tankless heater service richmond hill"
    ],
    "targetArea": "Richmond Hill, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9082",
    "ctaPhoneDisplay": "1-888-328-9082",
    "ctaPhoneE164": "+18883289082"
  },
  {
    "id": 118,
    "title": "Hot Water Tank Replacement Richmond Hill - Installed Today",
    "slug": "hot-water-tank-replacement-richmond-hill",
    "primaryKeyword": "hot water tank replacement richmond hill",
    "secondaryKeywords": [
      "water heater replacement richmond hill",
      "replace hot water tank richmond hill",
      "hot water tank installation richmond hill",
      "richmond hill hot water tank replacement cost"
    ],
    "targetArea": "Richmond Hill, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9083",
    "ctaPhoneDisplay": "1-888-328-9083",
    "ctaPhoneE164": "+18883289083"
  },
  {
    "id": 119,
    "title": "Water Heater Replacement Richmond Hill - Same-Day Install",
    "slug": "water-heater-replacement-richmond-hill",
    "primaryKeyword": "water heater replacement richmond hill",
    "secondaryKeywords": [
      "hot water tank replacement richmond hill",
      "water heater install richmond hill",
      "tankless water heater richmond hill",
      "water heater cost richmond hill"
    ],
    "targetArea": "Richmond Hill, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9084",
    "ctaPhoneDisplay": "1-888-328-9084",
    "ctaPhoneE164": "+18883289084"
  },
  {
    "id": 120,
    "title": "Water Heater Installation Richmond Hill - Licensed & Insured",
    "slug": "water-heater-installation-richmond-hill",
    "primaryKeyword": "water heater installation richmond hill",
    "secondaryKeywords": [
      "hot water tank installation richmond hill",
      "tankless water heater installation richmond hill",
      "water heater installer richmond hill",
      "water heater installation cost richmond hill"
    ],
    "targetArea": "Richmond Hill, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9085",
    "ctaPhoneDisplay": "1-888-328-9085",
    "ctaPhoneE164": "+18883289085"
  },
  {
    "id": 121,
    "title": "Water Heater Repair London - Same-Day Licensed Service",
    "slug": "water-heater-repair-london",
    "primaryKeyword": "water heater repair london",
    "secondaryKeywords": [
      "hot water tank repair london",
      "hot water heater repair london",
      "emergency water heater repair london",
      "water heater service london",
      "plumber water heater london"
    ],
    "targetArea": "London, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9086",
    "ctaPhoneDisplay": "1-888-328-9086",
    "ctaPhoneE164": "+18883289086"
  },
  {
    "id": 122,
    "title": "Hot Water Tank Repair London - Fast & Certified",
    "slug": "hot-water-tank-repair-london",
    "primaryKeyword": "hot water tank repair london",
    "secondaryKeywords": [
      "water heater repair london",
      "hot water tank service london",
      "fix hot water tank london",
      "hot water heater repair london"
    ],
    "targetArea": "London, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9087",
    "ctaPhoneDisplay": "1-888-328-9087",
    "ctaPhoneE164": "+18883289087"
  },
  {
    "id": 123,
    "title": "Tankless Water Heater Repair London - Certified Techs",
    "slug": "tankless-water-heater-repair-london",
    "primaryKeyword": "tankless water heater repair london",
    "secondaryKeywords": [
      "on demand water heater repair london",
      "navien repair london",
      "rinnai repair london",
      "tankless heater service london"
    ],
    "targetArea": "London, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9088",
    "ctaPhoneDisplay": "1-888-328-9088",
    "ctaPhoneE164": "+18883289088"
  },
  {
    "id": 124,
    "title": "Hot Water Tank Replacement London - Installed Today",
    "slug": "hot-water-tank-replacement-london",
    "primaryKeyword": "hot water tank replacement london",
    "secondaryKeywords": [
      "water heater replacement london",
      "replace hot water tank london",
      "hot water tank installation london",
      "london hot water tank replacement cost"
    ],
    "targetArea": "London, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9089",
    "ctaPhoneDisplay": "1-888-328-9089",
    "ctaPhoneE164": "+18883289089"
  },
  {
    "id": 125,
    "title": "Water Heater Replacement London - Same-Day Install",
    "slug": "water-heater-replacement-london",
    "primaryKeyword": "water heater replacement london",
    "secondaryKeywords": [
      "hot water tank replacement london",
      "water heater install london",
      "tankless water heater london",
      "water heater cost london"
    ],
    "targetArea": "London, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9090",
    "ctaPhoneDisplay": "1-888-328-9090",
    "ctaPhoneE164": "+18883289090"
  },
  {
    "id": 126,
    "title": "Water Heater Installation London - Licensed & Insured",
    "slug": "water-heater-installation-london",
    "primaryKeyword": "water heater installation london",
    "secondaryKeywords": [
      "hot water tank installation london",
      "tankless water heater installation london",
      "water heater installer london",
      "water heater installation cost london"
    ],
    "targetArea": "London, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9091",
    "ctaPhoneDisplay": "1-888-328-9091",
    "ctaPhoneE164": "+18883289091"
  },
  {
    "id": 127,
    "title": "Water Heater Repair Vaughan - Same-Day Licensed Service",
    "slug": "water-heater-repair-vaughan",
    "primaryKeyword": "water heater repair vaughan",
    "secondaryKeywords": [
      "hot water tank repair vaughan",
      "hot water heater repair vaughan",
      "emergency water heater repair vaughan",
      "water heater service vaughan",
      "plumber water heater vaughan"
    ],
    "targetArea": "Vaughan, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9092",
    "ctaPhoneDisplay": "1-888-328-9092",
    "ctaPhoneE164": "+18883289092"
  },
  {
    "id": 128,
    "title": "Hot Water Tank Repair Vaughan - Fast & Certified",
    "slug": "hot-water-tank-repair-vaughan",
    "primaryKeyword": "hot water tank repair vaughan",
    "secondaryKeywords": [
      "water heater repair vaughan",
      "hot water tank service vaughan",
      "fix hot water tank vaughan",
      "hot water heater repair vaughan"
    ],
    "targetArea": "Vaughan, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9093",
    "ctaPhoneDisplay": "1-888-328-9093",
    "ctaPhoneE164": "+18883289093"
  },
  {
    "id": 129,
    "title": "Tankless Water Heater Repair Vaughan - Certified Techs",
    "slug": "tankless-water-heater-repair-vaughan",
    "primaryKeyword": "tankless water heater repair vaughan",
    "secondaryKeywords": [
      "on demand water heater repair vaughan",
      "navien repair vaughan",
      "rinnai repair vaughan",
      "tankless heater service vaughan"
    ],
    "targetArea": "Vaughan, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9094",
    "ctaPhoneDisplay": "1-888-328-9094",
    "ctaPhoneE164": "+18883289094"
  },
  {
    "id": 130,
    "title": "Hot Water Tank Replacement Vaughan - Installed Today",
    "slug": "hot-water-tank-replacement-vaughan",
    "primaryKeyword": "hot water tank replacement vaughan",
    "secondaryKeywords": [
      "water heater replacement vaughan",
      "replace hot water tank vaughan",
      "hot water tank installation vaughan",
      "vaughan hot water tank replacement cost"
    ],
    "targetArea": "Vaughan, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9095",
    "ctaPhoneDisplay": "1-888-328-9095",
    "ctaPhoneE164": "+18883289095"
  },
  {
    "id": 131,
    "title": "Water Heater Replacement Vaughan - Same-Day Install",
    "slug": "water-heater-replacement-vaughan",
    "primaryKeyword": "water heater replacement vaughan",
    "secondaryKeywords": [
      "hot water tank replacement vaughan",
      "water heater install vaughan",
      "tankless water heater vaughan",
      "water heater cost vaughan"
    ],
    "targetArea": "Vaughan, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9096",
    "ctaPhoneDisplay": "1-888-328-9096",
    "ctaPhoneE164": "+18883289096"
  },
  {
    "id": 132,
    "title": "Water Heater Installation Vaughan - Licensed & Insured",
    "slug": "water-heater-installation-vaughan",
    "primaryKeyword": "water heater installation vaughan",
    "secondaryKeywords": [
      "hot water tank installation vaughan",
      "tankless water heater installation vaughan",
      "water heater installer vaughan",
      "water heater installation cost vaughan"
    ],
    "targetArea": "Vaughan, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9097",
    "ctaPhoneDisplay": "1-888-328-9097",
    "ctaPhoneE164": "+18883289097"
  },
  {
    "id": 133,
    "title": "Water Heater Repair St. Catharines - Same-Day Licensed Service",
    "slug": "water-heater-repair-st-catharines",
    "primaryKeyword": "water heater repair st. catharines",
    "secondaryKeywords": [
      "hot water tank repair st. catharines",
      "hot water heater repair st. catharines",
      "emergency water heater repair st. catharines",
      "water heater service st. catharines",
      "plumber water heater st. catharines"
    ],
    "targetArea": "St. Catharines, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9098",
    "ctaPhoneDisplay": "1-888-328-9098",
    "ctaPhoneE164": "+18883289098"
  },
  {
    "id": 134,
    "title": "Hot Water Tank Repair St. Catharines - Fast & Certified",
    "slug": "hot-water-tank-repair-st-catharines",
    "primaryKeyword": "hot water tank repair st. catharines",
    "secondaryKeywords": [
      "water heater repair st. catharines",
      "hot water tank service st. catharines",
      "fix hot water tank st. catharines",
      "hot water heater repair st. catharines"
    ],
    "targetArea": "St. Catharines, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9099",
    "ctaPhoneDisplay": "1-888-328-9099",
    "ctaPhoneE164": "+18883289099"
  },
  {
    "id": 135,
    "title": "Tankless Water Heater Repair St. Catharines - Certified Techs",
    "slug": "tankless-water-heater-repair-st-catharines",
    "primaryKeyword": "tankless water heater repair st. catharines",
    "secondaryKeywords": [
      "on demand water heater repair st. catharines",
      "navien repair st. catharines",
      "rinnai repair st. catharines",
      "tankless heater service st. catharines"
    ],
    "targetArea": "St. Catharines, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9100",
    "ctaPhoneDisplay": "1-888-328-9100",
    "ctaPhoneE164": "+18883289100"
  },
  {
    "id": 136,
    "title": "Hot Water Tank Replacement St. Catharines - Installed Today",
    "slug": "hot-water-tank-replacement-st-catharines",
    "primaryKeyword": "hot water tank replacement st. catharines",
    "secondaryKeywords": [
      "water heater replacement st. catharines",
      "replace hot water tank st. catharines",
      "hot water tank installation st. catharines",
      "st. catharines hot water tank replacement cost"
    ],
    "targetArea": "St. Catharines, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9101",
    "ctaPhoneDisplay": "1-888-328-9101",
    "ctaPhoneE164": "+18883289101"
  },
  {
    "id": 137,
    "title": "Water Heater Replacement St. Catharines - Same-Day Install",
    "slug": "water-heater-replacement-st-catharines",
    "primaryKeyword": "water heater replacement st. catharines",
    "secondaryKeywords": [
      "hot water tank replacement st. catharines",
      "water heater install st. catharines",
      "tankless water heater st. catharines",
      "water heater cost st. catharines"
    ],
    "targetArea": "St. Catharines, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9102",
    "ctaPhoneDisplay": "1-888-328-9102",
    "ctaPhoneE164": "+18883289102"
  },
  {
    "id": 138,
    "title": "Water Heater Installation St. Catharines - Licensed & Insured",
    "slug": "water-heater-installation-st-catharines",
    "primaryKeyword": "water heater installation st. catharines",
    "secondaryKeywords": [
      "hot water tank installation st. catharines",
      "tankless water heater installation st. catharines",
      "water heater installer st. catharines",
      "water heater installation cost st. catharines"
    ],
    "targetArea": "St. Catharines, Ontario",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9103",
    "ctaPhoneDisplay": "1-888-328-9103",
    "ctaPhoneE164": "+18883289103"
  },
  {
    "id": 139,
    "title": "Water Heater Repair Calgary - Same-Day Licensed Service",
    "slug": "water-heater-repair-calgary",
    "primaryKeyword": "water heater repair calgary",
    "secondaryKeywords": [
      "hot water tank repair calgary",
      "hot water heater repair calgary",
      "emergency water heater repair calgary",
      "water heater service calgary",
      "plumber water heater calgary"
    ],
    "targetArea": "Calgary, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 500,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9103",
    "ctaPhoneDisplay": "1-888-328-9103",
    "ctaPhoneE164": "+18883289103"
  },
  {
    "id": 140,
    "title": "Hot Water Tank Repair Calgary - Fast & Certified",
    "slug": "hot-water-tank-repair-calgary",
    "primaryKeyword": "hot water tank repair calgary",
    "secondaryKeywords": [
      "water heater repair calgary",
      "hot water tank service calgary",
      "fix hot water tank calgary",
      "hot water heater repair calgary"
    ],
    "targetArea": "Calgary, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 450,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9104",
    "ctaPhoneDisplay": "1-888-328-9104",
    "ctaPhoneE164": "+18883289104"
  },
  {
    "id": 141,
    "title": "Tankless Water Heater Repair Calgary - Certified Techs",
    "slug": "tankless-water-heater-repair-calgary",
    "primaryKeyword": "tankless water heater repair calgary",
    "secondaryKeywords": [
      "on demand water heater repair calgary",
      "navien repair calgary",
      "rinnai repair calgary",
      "tankless heater service calgary"
    ],
    "targetArea": "Calgary, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 400,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9105",
    "ctaPhoneDisplay": "1-888-328-9105",
    "ctaPhoneE164": "+18883289105"
  },
  {
    "id": 142,
    "title": "Hot Water Tank Replacement Calgary - Installed Today",
    "slug": "hot-water-tank-replacement-calgary",
    "primaryKeyword": "hot water tank replacement calgary",
    "secondaryKeywords": [
      "water heater replacement calgary",
      "replace hot water tank calgary",
      "hot water tank installation calgary",
      "calgary hot water tank replacement cost"
    ],
    "targetArea": "Calgary, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 700,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9106",
    "ctaPhoneDisplay": "1-888-328-9106",
    "ctaPhoneE164": "+18883289106"
  },
  {
    "id": 143,
    "title": "Water Heater Replacement Calgary - Same-Day Install",
    "slug": "water-heater-replacement-calgary",
    "primaryKeyword": "water heater replacement calgary",
    "secondaryKeywords": [
      "hot water tank replacement calgary",
      "water heater install calgary",
      "tankless water heater calgary",
      "water heater cost calgary"
    ],
    "targetArea": "Calgary, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 650,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9107",
    "ctaPhoneDisplay": "1-888-328-9107",
    "ctaPhoneE164": "+18883289107"
  },
  {
    "id": 144,
    "title": "Water Heater Installation Calgary - Licensed & Insured",
    "slug": "water-heater-installation-calgary",
    "primaryKeyword": "water heater installation calgary",
    "secondaryKeywords": [
      "hot water tank installation calgary",
      "tankless water heater installation calgary",
      "water heater installer calgary",
      "water heater installation cost calgary"
    ],
    "targetArea": "Calgary, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 420,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9108",
    "ctaPhoneDisplay": "1-888-328-9108",
    "ctaPhoneE164": "+18883289108"
  },
  {
    "id": 146,
    "title": "Hot Water Tank Repair Edmonton - Fast & Certified",
    "slug": "hot-water-tank-repair-edmonton",
    "primaryKeyword": "hot water tank repair edmonton",
    "secondaryKeywords": [
      "water heater repair edmonton",
      "hot water tank service edmonton",
      "fix hot water tank edmonton",
      "hot water heater repair edmonton"
    ],
    "targetArea": "Edmonton, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9108",
    "ctaPhoneDisplay": "1-888-328-9108",
    "ctaPhoneE164": "+18883289108"
  },
  {
    "id": 147,
    "title": "Tankless Water Heater Repair Edmonton - Certified Techs",
    "slug": "tankless-water-heater-repair-edmonton",
    "primaryKeyword": "tankless water heater repair edmonton",
    "secondaryKeywords": [
      "on demand water heater repair edmonton",
      "navien repair edmonton",
      "rinnai repair edmonton",
      "tankless heater service edmonton"
    ],
    "targetArea": "Edmonton, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9109",
    "ctaPhoneDisplay": "1-888-328-9109",
    "ctaPhoneE164": "+18883289109"
  },
  {
    "id": 148,
    "title": "Hot Water Tank Replacement Edmonton - Installed Today",
    "slug": "hot-water-tank-replacement-edmonton",
    "primaryKeyword": "hot water tank replacement edmonton",
    "secondaryKeywords": [
      "water heater replacement edmonton",
      "replace hot water tank edmonton",
      "hot water tank installation edmonton",
      "edmonton hot water tank replacement cost"
    ],
    "targetArea": "Edmonton, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9110",
    "ctaPhoneDisplay": "1-888-328-9110",
    "ctaPhoneE164": "+18883289110"
  },
  {
    "id": 149,
    "title": "Water Heater Replacement Edmonton - Same-Day Install",
    "slug": "water-heater-replacement-edmonton",
    "primaryKeyword": "water heater replacement edmonton",
    "secondaryKeywords": [
      "hot water tank replacement edmonton",
      "water heater install edmonton",
      "tankless water heater edmonton",
      "water heater cost edmonton"
    ],
    "targetArea": "Edmonton, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9111",
    "ctaPhoneDisplay": "1-888-328-9111",
    "ctaPhoneE164": "+18883289111"
  },
  {
    "id": 150,
    "title": "Water Heater Installation Edmonton - Licensed & Insured",
    "slug": "water-heater-installation-edmonton",
    "primaryKeyword": "water heater installation edmonton",
    "secondaryKeywords": [
      "hot water tank installation edmonton",
      "tankless water heater installation edmonton",
      "water heater installer edmonton",
      "water heater installation cost edmonton"
    ],
    "targetArea": "Edmonton, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 170,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9112",
    "ctaPhoneDisplay": "1-888-328-9112",
    "ctaPhoneE164": "+18883289112"
  },
  {
    "id": 151,
    "title": "Water Heater Repair Red Deer - Same-Day Licensed Service",
    "slug": "water-heater-repair-red-deer",
    "primaryKeyword": "water heater repair red deer",
    "secondaryKeywords": [
      "hot water tank repair red deer",
      "hot water heater repair red deer",
      "emergency water heater repair red deer",
      "water heater service red deer",
      "plumber water heater red deer"
    ],
    "targetArea": "Red Deer, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9113",
    "ctaPhoneDisplay": "1-888-328-9113",
    "ctaPhoneE164": "+18883289113"
  },
  {
    "id": 152,
    "title": "Hot Water Tank Repair Red Deer - Fast & Certified",
    "slug": "hot-water-tank-repair-red-deer",
    "primaryKeyword": "hot water tank repair red deer",
    "secondaryKeywords": [
      "water heater repair red deer",
      "hot water tank service red deer",
      "fix hot water tank red deer",
      "hot water heater repair red deer"
    ],
    "targetArea": "Red Deer, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9114",
    "ctaPhoneDisplay": "1-888-328-9114",
    "ctaPhoneE164": "+18883289114"
  },
  {
    "id": 153,
    "title": "Tankless Water Heater Repair Red Deer - Certified Techs",
    "slug": "tankless-water-heater-repair-red-deer",
    "primaryKeyword": "tankless water heater repair red deer",
    "secondaryKeywords": [
      "on demand water heater repair red deer",
      "navien repair red deer",
      "rinnai repair red deer",
      "tankless heater service red deer"
    ],
    "targetArea": "Red Deer, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9115",
    "ctaPhoneDisplay": "1-888-328-9115",
    "ctaPhoneE164": "+18883289115"
  },
  {
    "id": 154,
    "title": "Hot Water Tank Replacement Red Deer - Installed Today",
    "slug": "hot-water-tank-replacement-red-deer",
    "primaryKeyword": "hot water tank replacement red deer",
    "secondaryKeywords": [
      "water heater replacement red deer",
      "replace hot water tank red deer",
      "hot water tank installation red deer",
      "red deer hot water tank replacement cost"
    ],
    "targetArea": "Red Deer, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9116",
    "ctaPhoneDisplay": "1-888-328-9116",
    "ctaPhoneE164": "+18883289116"
  },
  {
    "id": 155,
    "title": "Water Heater Replacement Red Deer - Same-Day Install",
    "slug": "water-heater-replacement-red-deer",
    "primaryKeyword": "water heater replacement red deer",
    "secondaryKeywords": [
      "hot water tank replacement red deer",
      "water heater install red deer",
      "tankless water heater red deer",
      "water heater cost red deer"
    ],
    "targetArea": "Red Deer, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9117",
    "ctaPhoneDisplay": "1-888-328-9117",
    "ctaPhoneE164": "+18883289117"
  },
  {
    "id": 156,
    "title": "Water Heater Installation Red Deer - Licensed & Insured",
    "slug": "water-heater-installation-red-deer",
    "primaryKeyword": "water heater installation red deer",
    "secondaryKeywords": [
      "hot water tank installation red deer",
      "tankless water heater installation red deer",
      "water heater installer red deer",
      "water heater installation cost red deer"
    ],
    "targetArea": "Red Deer, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9118",
    "ctaPhoneDisplay": "1-888-328-9118",
    "ctaPhoneE164": "+18883289118"
  },
  {
    "id": 157,
    "title": "Water Heater Repair Lethbridge - Same-Day Licensed Service",
    "slug": "water-heater-repair-lethbridge",
    "primaryKeyword": "water heater repair lethbridge",
    "secondaryKeywords": [
      "hot water tank repair lethbridge",
      "hot water heater repair lethbridge",
      "emergency water heater repair lethbridge",
      "water heater service lethbridge",
      "plumber water heater lethbridge"
    ],
    "targetArea": "Lethbridge, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9119",
    "ctaPhoneDisplay": "1-888-328-9119",
    "ctaPhoneE164": "+18883289119"
  },
  {
    "id": 158,
    "title": "Hot Water Tank Repair Lethbridge - Fast & Certified",
    "slug": "hot-water-tank-repair-lethbridge",
    "primaryKeyword": "hot water tank repair lethbridge",
    "secondaryKeywords": [
      "water heater repair lethbridge",
      "hot water tank service lethbridge",
      "fix hot water tank lethbridge",
      "hot water heater repair lethbridge"
    ],
    "targetArea": "Lethbridge, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9120",
    "ctaPhoneDisplay": "1-888-328-9120",
    "ctaPhoneE164": "+18883289120"
  },
  {
    "id": 159,
    "title": "Tankless Water Heater Repair Lethbridge - Certified Techs",
    "slug": "tankless-water-heater-repair-lethbridge",
    "primaryKeyword": "tankless water heater repair lethbridge",
    "secondaryKeywords": [
      "on demand water heater repair lethbridge",
      "navien repair lethbridge",
      "rinnai repair lethbridge",
      "tankless heater service lethbridge"
    ],
    "targetArea": "Lethbridge, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9121",
    "ctaPhoneDisplay": "1-888-328-9121",
    "ctaPhoneE164": "+18883289121"
  },
  {
    "id": 160,
    "title": "Hot Water Tank Replacement Lethbridge - Installed Today",
    "slug": "hot-water-tank-replacement-lethbridge",
    "primaryKeyword": "hot water tank replacement lethbridge",
    "secondaryKeywords": [
      "water heater replacement lethbridge",
      "replace hot water tank lethbridge",
      "hot water tank installation lethbridge",
      "lethbridge hot water tank replacement cost"
    ],
    "targetArea": "Lethbridge, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9122",
    "ctaPhoneDisplay": "1-888-328-9122",
    "ctaPhoneE164": "+18883289122"
  },
  {
    "id": 161,
    "title": "Water Heater Replacement Lethbridge - Same-Day Install",
    "slug": "water-heater-replacement-lethbridge",
    "primaryKeyword": "water heater replacement lethbridge",
    "secondaryKeywords": [
      "hot water tank replacement lethbridge",
      "water heater install lethbridge",
      "tankless water heater lethbridge",
      "water heater cost lethbridge"
    ],
    "targetArea": "Lethbridge, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9123",
    "ctaPhoneDisplay": "1-888-328-9123",
    "ctaPhoneE164": "+18883289123"
  },
  {
    "id": 162,
    "title": "Water Heater Installation Lethbridge - Licensed & Insured",
    "slug": "water-heater-installation-lethbridge",
    "primaryKeyword": "water heater installation lethbridge",
    "secondaryKeywords": [
      "hot water tank installation lethbridge",
      "tankless water heater installation lethbridge",
      "water heater installer lethbridge",
      "water heater installation cost lethbridge"
    ],
    "targetArea": "Lethbridge, Alberta",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9124",
    "ctaPhoneDisplay": "1-888-328-9124",
    "ctaPhoneE164": "+18883289124"
  },
  {
    "id": 163,
    "title": "Water Heater Repair Vancouver - Same-Day Licensed Service",
    "slug": "water-heater-repair-vancouver",
    "primaryKeyword": "water heater repair vancouver",
    "secondaryKeywords": [
      "hot water tank repair vancouver",
      "hot water heater repair vancouver",
      "emergency water heater repair vancouver",
      "water heater service vancouver",
      "plumber water heater vancouver"
    ],
    "targetArea": "Vancouver, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 350,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9124",
    "ctaPhoneDisplay": "1-888-328-9124",
    "ctaPhoneE164": "+18883289124"
  },
  {
    "id": 164,
    "title": "Hot Water Tank Repair Vancouver - Fast & Certified",
    "slug": "hot-water-tank-repair-vancouver",
    "primaryKeyword": "hot water tank repair vancouver",
    "secondaryKeywords": [
      "water heater repair vancouver",
      "hot water tank service vancouver",
      "fix hot water tank vancouver",
      "hot water heater repair vancouver"
    ],
    "targetArea": "Vancouver, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 300,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9125",
    "ctaPhoneDisplay": "1-888-328-9125",
    "ctaPhoneE164": "+18883289125"
  },
  {
    "id": 165,
    "title": "Tankless Water Heater Repair Vancouver - Certified Techs",
    "slug": "tankless-water-heater-repair-vancouver",
    "primaryKeyword": "tankless water heater repair vancouver",
    "secondaryKeywords": [
      "on demand water heater repair vancouver",
      "navien repair vancouver",
      "rinnai repair vancouver",
      "tankless heater service vancouver"
    ],
    "targetArea": "Vancouver, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9126",
    "ctaPhoneDisplay": "1-888-328-9126",
    "ctaPhoneE164": "+18883289126"
  },
  {
    "id": 166,
    "title": "Hot Water Tank Replacement Vancouver - Installed Today",
    "slug": "hot-water-tank-replacement-vancouver",
    "primaryKeyword": "hot water tank replacement vancouver",
    "secondaryKeywords": [
      "water heater replacement vancouver",
      "replace hot water tank vancouver",
      "hot water tank installation vancouver",
      "vancouver hot water tank replacement cost"
    ],
    "targetArea": "Vancouver, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9127",
    "ctaPhoneDisplay": "1-888-328-9127",
    "ctaPhoneE164": "+18883289127"
  },
  {
    "id": 167,
    "title": "Water Heater Replacement Vancouver - Same-Day Install",
    "slug": "water-heater-replacement-vancouver",
    "primaryKeyword": "water heater replacement vancouver",
    "secondaryKeywords": [
      "hot water tank replacement vancouver",
      "water heater install vancouver",
      "tankless water heater vancouver",
      "water heater cost vancouver"
    ],
    "targetArea": "Vancouver, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9128",
    "ctaPhoneDisplay": "1-888-328-9128",
    "ctaPhoneE164": "+18883289128"
  },
  {
    "id": 168,
    "title": "Water Heater Installation Vancouver - Licensed & Insured",
    "slug": "water-heater-installation-vancouver",
    "primaryKeyword": "water heater installation vancouver",
    "secondaryKeywords": [
      "hot water tank installation vancouver",
      "tankless water heater installation vancouver",
      "water heater installer vancouver",
      "water heater installation cost vancouver"
    ],
    "targetArea": "Vancouver, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 270,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9129",
    "ctaPhoneDisplay": "1-888-328-9129",
    "ctaPhoneE164": "+18883289129"
  },
  {
    "id": 170,
    "title": "Hot Water Tank Repair Surrey - Fast & Certified",
    "slug": "hot-water-tank-repair-surrey",
    "primaryKeyword": "hot water tank repair surrey",
    "secondaryKeywords": [
      "water heater repair surrey",
      "hot water tank service surrey",
      "fix hot water tank surrey",
      "hot water heater repair surrey"
    ],
    "targetArea": "Surrey, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 1100.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9129",
    "ctaPhoneDisplay": "1-888-328-9129",
    "ctaPhoneE164": "+18883289129"
  },
  {
    "id": 171,
    "title": "Tankless Water Heater Repair Surrey - Certified Techs",
    "slug": "tankless-water-heater-repair-surrey",
    "primaryKeyword": "tankless water heater repair surrey",
    "secondaryKeywords": [
      "on demand water heater repair surrey",
      "navien repair surrey",
      "rinnai repair surrey",
      "tankless heater service surrey"
    ],
    "targetArea": "Surrey, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 1100.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9130",
    "ctaPhoneDisplay": "1-888-328-9130",
    "ctaPhoneE164": "+18883289130"
  },
  {
    "id": 172,
    "title": "Hot Water Tank Replacement Surrey - Installed Today",
    "slug": "hot-water-tank-replacement-surrey",
    "primaryKeyword": "hot water tank replacement surrey",
    "secondaryKeywords": [
      "water heater replacement surrey",
      "replace hot water tank surrey",
      "hot water tank installation surrey",
      "surrey hot water tank replacement cost"
    ],
    "targetArea": "Surrey, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 350,
    "keywordDifficulty": 0,
    "cpc": 1100.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9131",
    "ctaPhoneDisplay": "1-888-328-9131",
    "ctaPhoneE164": "+18883289131"
  },
  {
    "id": 173,
    "title": "Water Heater Replacement Surrey - Same-Day Install",
    "slug": "water-heater-replacement-surrey",
    "primaryKeyword": "water heater replacement surrey",
    "secondaryKeywords": [
      "hot water tank replacement surrey",
      "water heater install surrey",
      "tankless water heater surrey",
      "water heater cost surrey"
    ],
    "targetArea": "Surrey, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 300,
    "keywordDifficulty": 0,
    "cpc": 1100.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9132",
    "ctaPhoneDisplay": "1-888-328-9132",
    "ctaPhoneE164": "+18883289132"
  },
  {
    "id": 174,
    "title": "Water Heater Installation Surrey - Licensed & Insured",
    "slug": "water-heater-installation-surrey",
    "primaryKeyword": "water heater installation surrey",
    "secondaryKeywords": [
      "hot water tank installation surrey",
      "tankless water heater installation surrey",
      "water heater installer surrey",
      "water heater installation cost surrey"
    ],
    "targetArea": "Surrey, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 220,
    "keywordDifficulty": 0,
    "cpc": 1000.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9133",
    "ctaPhoneDisplay": "1-888-328-9133",
    "ctaPhoneE164": "+18883289133"
  },
  {
    "id": 175,
    "title": "Water Heater Repair Burnaby - Same-Day Licensed Service",
    "slug": "water-heater-repair-burnaby",
    "primaryKeyword": "water heater repair burnaby",
    "secondaryKeywords": [
      "hot water tank repair burnaby",
      "hot water heater repair burnaby",
      "emergency water heater repair burnaby",
      "water heater service burnaby",
      "plumber water heater burnaby"
    ],
    "targetArea": "Burnaby, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9134",
    "ctaPhoneDisplay": "1-888-328-9134",
    "ctaPhoneE164": "+18883289134"
  },
  {
    "id": 176,
    "title": "Hot Water Tank Repair Burnaby - Fast & Certified",
    "slug": "hot-water-tank-repair-burnaby",
    "primaryKeyword": "hot water tank repair burnaby",
    "secondaryKeywords": [
      "water heater repair burnaby",
      "hot water tank service burnaby",
      "fix hot water tank burnaby",
      "hot water heater repair burnaby"
    ],
    "targetArea": "Burnaby, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9135",
    "ctaPhoneDisplay": "1-888-328-9135",
    "ctaPhoneE164": "+18883289135"
  },
  {
    "id": 177,
    "title": "Tankless Water Heater Repair Burnaby - Certified Techs",
    "slug": "tankless-water-heater-repair-burnaby",
    "primaryKeyword": "tankless water heater repair burnaby",
    "secondaryKeywords": [
      "on demand water heater repair burnaby",
      "navien repair burnaby",
      "rinnai repair burnaby",
      "tankless heater service burnaby"
    ],
    "targetArea": "Burnaby, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9136",
    "ctaPhoneDisplay": "1-888-328-9136",
    "ctaPhoneE164": "+18883289136"
  },
  {
    "id": 178,
    "title": "Hot Water Tank Replacement Burnaby - Installed Today",
    "slug": "hot-water-tank-replacement-burnaby",
    "primaryKeyword": "hot water tank replacement burnaby",
    "secondaryKeywords": [
      "water heater replacement burnaby",
      "replace hot water tank burnaby",
      "hot water tank installation burnaby",
      "burnaby hot water tank replacement cost"
    ],
    "targetArea": "Burnaby, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9137",
    "ctaPhoneDisplay": "1-888-328-9137",
    "ctaPhoneE164": "+18883289137"
  },
  {
    "id": 179,
    "title": "Water Heater Replacement Burnaby - Same-Day Install",
    "slug": "water-heater-replacement-burnaby",
    "primaryKeyword": "water heater replacement burnaby",
    "secondaryKeywords": [
      "hot water tank replacement burnaby",
      "water heater install burnaby",
      "tankless water heater burnaby",
      "water heater cost burnaby"
    ],
    "targetArea": "Burnaby, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9138",
    "ctaPhoneDisplay": "1-888-328-9138",
    "ctaPhoneE164": "+18883289138"
  },
  {
    "id": 180,
    "title": "Water Heater Installation Burnaby - Licensed & Insured",
    "slug": "water-heater-installation-burnaby",
    "primaryKeyword": "water heater installation burnaby",
    "secondaryKeywords": [
      "hot water tank installation burnaby",
      "tankless water heater installation burnaby",
      "water heater installer burnaby",
      "water heater installation cost burnaby"
    ],
    "targetArea": "Burnaby, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 120,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9139",
    "ctaPhoneDisplay": "1-888-328-9139",
    "ctaPhoneE164": "+18883289139"
  },
  {
    "id": 181,
    "title": "Water Heater Repair Richmond - Same-Day Licensed Service",
    "slug": "water-heater-repair-richmond",
    "primaryKeyword": "water heater repair richmond",
    "secondaryKeywords": [
      "hot water tank repair richmond",
      "hot water heater repair richmond",
      "emergency water heater repair richmond",
      "water heater service richmond",
      "plumber water heater richmond"
    ],
    "targetArea": "Richmond, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9140",
    "ctaPhoneDisplay": "1-888-328-9140",
    "ctaPhoneE164": "+18883289140"
  },
  {
    "id": 182,
    "title": "Hot Water Tank Repair Richmond - Fast & Certified",
    "slug": "hot-water-tank-repair-richmond",
    "primaryKeyword": "hot water tank repair richmond",
    "secondaryKeywords": [
      "water heater repair richmond",
      "hot water tank service richmond",
      "fix hot water tank richmond",
      "hot water heater repair richmond"
    ],
    "targetArea": "Richmond, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9141",
    "ctaPhoneDisplay": "1-888-328-9141",
    "ctaPhoneE164": "+18883289141"
  },
  {
    "id": 183,
    "title": "Tankless Water Heater Repair Richmond - Certified Techs",
    "slug": "tankless-water-heater-repair-richmond",
    "primaryKeyword": "tankless water heater repair richmond",
    "secondaryKeywords": [
      "on demand water heater repair richmond",
      "navien repair richmond",
      "rinnai repair richmond",
      "tankless heater service richmond"
    ],
    "targetArea": "Richmond, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9142",
    "ctaPhoneDisplay": "1-888-328-9142",
    "ctaPhoneE164": "+18883289142"
  },
  {
    "id": 184,
    "title": "Hot Water Tank Replacement Richmond - Installed Today",
    "slug": "hot-water-tank-replacement-richmond",
    "primaryKeyword": "hot water tank replacement richmond",
    "secondaryKeywords": [
      "water heater replacement richmond",
      "replace hot water tank richmond",
      "hot water tank installation richmond",
      "richmond hot water tank replacement cost"
    ],
    "targetArea": "Richmond, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9143",
    "ctaPhoneDisplay": "1-888-328-9143",
    "ctaPhoneE164": "+18883289143"
  },
  {
    "id": 185,
    "title": "Water Heater Replacement Richmond - Same-Day Install",
    "slug": "water-heater-replacement-richmond",
    "primaryKeyword": "water heater replacement richmond",
    "secondaryKeywords": [
      "hot water tank replacement richmond",
      "water heater install richmond",
      "tankless water heater richmond",
      "water heater cost richmond"
    ],
    "targetArea": "Richmond, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9144",
    "ctaPhoneDisplay": "1-888-328-9144",
    "ctaPhoneE164": "+18883289144"
  },
  {
    "id": 186,
    "title": "Water Heater Installation Richmond - Licensed & Insured",
    "slug": "water-heater-installation-richmond",
    "primaryKeyword": "water heater installation richmond",
    "secondaryKeywords": [
      "hot water tank installation richmond",
      "tankless water heater installation richmond",
      "water heater installer richmond",
      "water heater installation cost richmond"
    ],
    "targetArea": "Richmond, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9145",
    "ctaPhoneDisplay": "1-888-328-9145",
    "ctaPhoneE164": "+18883289145"
  },
  {
    "id": 187,
    "title": "Water Heater Repair Kelowna - Same-Day Licensed Service",
    "slug": "water-heater-repair-kelowna",
    "primaryKeyword": "water heater repair kelowna",
    "secondaryKeywords": [
      "hot water tank repair kelowna",
      "hot water heater repair kelowna",
      "emergency water heater repair kelowna",
      "water heater service kelowna",
      "plumber water heater kelowna"
    ],
    "targetArea": "Kelowna, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9146",
    "ctaPhoneDisplay": "1-888-328-9146",
    "ctaPhoneE164": "+18883289146"
  },
  {
    "id": 188,
    "title": "Hot Water Tank Repair Kelowna - Fast & Certified",
    "slug": "hot-water-tank-repair-kelowna",
    "primaryKeyword": "hot water tank repair kelowna",
    "secondaryKeywords": [
      "water heater repair kelowna",
      "hot water tank service kelowna",
      "fix hot water tank kelowna",
      "hot water heater repair kelowna"
    ],
    "targetArea": "Kelowna, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9147",
    "ctaPhoneDisplay": "1-888-328-9147",
    "ctaPhoneE164": "+18883289147"
  },
  {
    "id": 189,
    "title": "Tankless Water Heater Repair Kelowna - Certified Techs",
    "slug": "tankless-water-heater-repair-kelowna",
    "primaryKeyword": "tankless water heater repair kelowna",
    "secondaryKeywords": [
      "on demand water heater repair kelowna",
      "navien repair kelowna",
      "rinnai repair kelowna",
      "tankless heater service kelowna"
    ],
    "targetArea": "Kelowna, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9148",
    "ctaPhoneDisplay": "1-888-328-9148",
    "ctaPhoneE164": "+18883289148"
  },
  {
    "id": 190,
    "title": "Hot Water Tank Replacement Kelowna - Installed Today",
    "slug": "hot-water-tank-replacement-kelowna",
    "primaryKeyword": "hot water tank replacement kelowna",
    "secondaryKeywords": [
      "water heater replacement kelowna",
      "replace hot water tank kelowna",
      "hot water tank installation kelowna",
      "kelowna hot water tank replacement cost"
    ],
    "targetArea": "Kelowna, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9149",
    "ctaPhoneDisplay": "1-888-328-9149",
    "ctaPhoneE164": "+18883289149"
  },
  {
    "id": 191,
    "title": "Water Heater Replacement Kelowna - Same-Day Install",
    "slug": "water-heater-replacement-kelowna",
    "primaryKeyword": "water heater replacement kelowna",
    "secondaryKeywords": [
      "hot water tank replacement kelowna",
      "water heater install kelowna",
      "tankless water heater kelowna",
      "water heater cost kelowna"
    ],
    "targetArea": "Kelowna, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9150",
    "ctaPhoneDisplay": "1-888-328-9150",
    "ctaPhoneE164": "+18883289150"
  },
  {
    "id": 192,
    "title": "Water Heater Installation Kelowna - Licensed & Insured",
    "slug": "water-heater-installation-kelowna",
    "primaryKeyword": "water heater installation kelowna",
    "secondaryKeywords": [
      "hot water tank installation kelowna",
      "tankless water heater installation kelowna",
      "water heater installer kelowna",
      "water heater installation cost kelowna"
    ],
    "targetArea": "Kelowna, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9151",
    "ctaPhoneDisplay": "1-888-328-9151",
    "ctaPhoneE164": "+18883289151"
  },
  {
    "id": 193,
    "title": "Water Heater Repair Abbotsford - Same-Day Licensed Service",
    "slug": "water-heater-repair-abbotsford",
    "primaryKeyword": "water heater repair abbotsford",
    "secondaryKeywords": [
      "hot water tank repair abbotsford",
      "hot water heater repair abbotsford",
      "emergency water heater repair abbotsford",
      "water heater service abbotsford",
      "plumber water heater abbotsford"
    ],
    "targetArea": "Abbotsford, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9152",
    "ctaPhoneDisplay": "1-888-328-9152",
    "ctaPhoneE164": "+18883289152"
  },
  {
    "id": 194,
    "title": "Hot Water Tank Repair Abbotsford - Fast & Certified",
    "slug": "hot-water-tank-repair-abbotsford",
    "primaryKeyword": "hot water tank repair abbotsford",
    "secondaryKeywords": [
      "water heater repair abbotsford",
      "hot water tank service abbotsford",
      "fix hot water tank abbotsford",
      "hot water heater repair abbotsford"
    ],
    "targetArea": "Abbotsford, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9153",
    "ctaPhoneDisplay": "1-888-328-9153",
    "ctaPhoneE164": "+18883289153"
  },
  {
    "id": 195,
    "title": "Tankless Water Heater Repair Abbotsford - Certified Techs",
    "slug": "tankless-water-heater-repair-abbotsford",
    "primaryKeyword": "tankless water heater repair abbotsford",
    "secondaryKeywords": [
      "on demand water heater repair abbotsford",
      "navien repair abbotsford",
      "rinnai repair abbotsford",
      "tankless heater service abbotsford"
    ],
    "targetArea": "Abbotsford, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9154",
    "ctaPhoneDisplay": "1-888-328-9154",
    "ctaPhoneE164": "+18883289154"
  },
  {
    "id": 196,
    "title": "Hot Water Tank Replacement Abbotsford - Installed Today",
    "slug": "hot-water-tank-replacement-abbotsford",
    "primaryKeyword": "hot water tank replacement abbotsford",
    "secondaryKeywords": [
      "water heater replacement abbotsford",
      "replace hot water tank abbotsford",
      "hot water tank installation abbotsford",
      "abbotsford hot water tank replacement cost"
    ],
    "targetArea": "Abbotsford, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9155",
    "ctaPhoneDisplay": "1-888-328-9155",
    "ctaPhoneE164": "+18883289155"
  },
  {
    "id": 197,
    "title": "Water Heater Replacement Abbotsford - Same-Day Install",
    "slug": "water-heater-replacement-abbotsford",
    "primaryKeyword": "water heater replacement abbotsford",
    "secondaryKeywords": [
      "hot water tank replacement abbotsford",
      "water heater install abbotsford",
      "tankless water heater abbotsford",
      "water heater cost abbotsford"
    ],
    "targetArea": "Abbotsford, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9156",
    "ctaPhoneDisplay": "1-888-328-9156",
    "ctaPhoneE164": "+18883289156"
  },
  {
    "id": 198,
    "title": "Water Heater Installation Abbotsford - Licensed & Insured",
    "slug": "water-heater-installation-abbotsford",
    "primaryKeyword": "water heater installation abbotsford",
    "secondaryKeywords": [
      "hot water tank installation abbotsford",
      "tankless water heater installation abbotsford",
      "water heater installer abbotsford",
      "water heater installation cost abbotsford"
    ],
    "targetArea": "Abbotsford, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9157",
    "ctaPhoneDisplay": "1-888-328-9157",
    "ctaPhoneE164": "+18883289157"
  },
  {
    "id": 199,
    "title": "Water Heater Repair Langley - Same-Day Licensed Service",
    "slug": "water-heater-repair-langley",
    "primaryKeyword": "water heater repair langley",
    "secondaryKeywords": [
      "hot water tank repair langley",
      "hot water heater repair langley",
      "emergency water heater repair langley",
      "water heater service langley",
      "plumber water heater langley"
    ],
    "targetArea": "Langley, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9158",
    "ctaPhoneDisplay": "1-888-328-9158",
    "ctaPhoneE164": "+18883289158"
  },
  {
    "id": 200,
    "title": "Hot Water Tank Repair Langley - Fast & Certified",
    "slug": "hot-water-tank-repair-langley",
    "primaryKeyword": "hot water tank repair langley",
    "secondaryKeywords": [
      "water heater repair langley",
      "hot water tank service langley",
      "fix hot water tank langley",
      "hot water heater repair langley"
    ],
    "targetArea": "Langley, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9159",
    "ctaPhoneDisplay": "1-888-328-9159",
    "ctaPhoneE164": "+18883289159"
  },
  {
    "id": 201,
    "title": "Tankless Water Heater Repair Langley - Certified Techs",
    "slug": "tankless-water-heater-repair-langley",
    "primaryKeyword": "tankless water heater repair langley",
    "secondaryKeywords": [
      "on demand water heater repair langley",
      "navien repair langley",
      "rinnai repair langley",
      "tankless heater service langley"
    ],
    "targetArea": "Langley, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 600.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9160",
    "ctaPhoneDisplay": "1-888-328-9160",
    "ctaPhoneE164": "+18883289160"
  },
  {
    "id": 202,
    "title": "Hot Water Tank Replacement Langley - Installed Today",
    "slug": "hot-water-tank-replacement-langley",
    "primaryKeyword": "hot water tank replacement langley",
    "secondaryKeywords": [
      "water heater replacement langley",
      "replace hot water tank langley",
      "hot water tank installation langley",
      "langley hot water tank replacement cost"
    ],
    "targetArea": "Langley, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 1100.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9161",
    "ctaPhoneDisplay": "1-888-328-9161",
    "ctaPhoneE164": "+18883289161"
  },
  {
    "id": 203,
    "title": "Water Heater Replacement Langley - Same-Day Install",
    "slug": "water-heater-replacement-langley",
    "primaryKeyword": "water heater replacement langley",
    "secondaryKeywords": [
      "hot water tank replacement langley",
      "water heater install langley",
      "tankless water heater langley",
      "water heater cost langley"
    ],
    "targetArea": "Langley, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 1100.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9162",
    "ctaPhoneDisplay": "1-888-328-9162",
    "ctaPhoneE164": "+18883289162"
  },
  {
    "id": 204,
    "title": "Water Heater Installation Langley - Licensed & Insured",
    "slug": "water-heater-installation-langley",
    "primaryKeyword": "water heater installation langley",
    "secondaryKeywords": [
      "hot water tank installation langley",
      "tankless water heater installation langley",
      "water heater installer langley",
      "water heater installation cost langley"
    ],
    "targetArea": "Langley, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9163",
    "ctaPhoneDisplay": "1-888-328-9163",
    "ctaPhoneE164": "+18883289163"
  },
  {
    "id": 205,
    "title": "Water Heater Repair Coquitlam - Same-Day Licensed Service",
    "slug": "water-heater-repair-coquitlam",
    "primaryKeyword": "water heater repair coquitlam",
    "secondaryKeywords": [
      "hot water tank repair coquitlam",
      "hot water heater repair coquitlam",
      "emergency water heater repair coquitlam",
      "water heater service coquitlam",
      "plumber water heater coquitlam"
    ],
    "targetArea": "Coquitlam, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9164",
    "ctaPhoneDisplay": "1-888-328-9164",
    "ctaPhoneE164": "+18883289164"
  },
  {
    "id": 206,
    "title": "Hot Water Tank Repair Coquitlam - Fast & Certified",
    "slug": "hot-water-tank-repair-coquitlam",
    "primaryKeyword": "hot water tank repair coquitlam",
    "secondaryKeywords": [
      "water heater repair coquitlam",
      "hot water tank service coquitlam",
      "fix hot water tank coquitlam",
      "hot water heater repair coquitlam"
    ],
    "targetArea": "Coquitlam, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9165",
    "ctaPhoneDisplay": "1-888-328-9165",
    "ctaPhoneE164": "+18883289165"
  },
  {
    "id": 207,
    "title": "Tankless Water Heater Repair Coquitlam - Certified Techs",
    "slug": "tankless-water-heater-repair-coquitlam",
    "primaryKeyword": "tankless water heater repair coquitlam",
    "secondaryKeywords": [
      "on demand water heater repair coquitlam",
      "navien repair coquitlam",
      "rinnai repair coquitlam",
      "tankless heater service coquitlam"
    ],
    "targetArea": "Coquitlam, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9166",
    "ctaPhoneDisplay": "1-888-328-9166",
    "ctaPhoneE164": "+18883289166"
  },
  {
    "id": 208,
    "title": "Hot Water Tank Replacement Coquitlam - Installed Today",
    "slug": "hot-water-tank-replacement-coquitlam",
    "primaryKeyword": "hot water tank replacement coquitlam",
    "secondaryKeywords": [
      "water heater replacement coquitlam",
      "replace hot water tank coquitlam",
      "hot water tank installation coquitlam",
      "coquitlam hot water tank replacement cost"
    ],
    "targetArea": "Coquitlam, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9167",
    "ctaPhoneDisplay": "1-888-328-9167",
    "ctaPhoneE164": "+18883289167"
  },
  {
    "id": 209,
    "title": "Water Heater Replacement Coquitlam - Same-Day Install",
    "slug": "water-heater-replacement-coquitlam",
    "primaryKeyword": "water heater replacement coquitlam",
    "secondaryKeywords": [
      "hot water tank replacement coquitlam",
      "water heater install coquitlam",
      "tankless water heater coquitlam",
      "water heater cost coquitlam"
    ],
    "targetArea": "Coquitlam, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9168",
    "ctaPhoneDisplay": "1-888-328-9168",
    "ctaPhoneE164": "+18883289168"
  },
  {
    "id": 210,
    "title": "Water Heater Installation Coquitlam - Licensed & Insured",
    "slug": "water-heater-installation-coquitlam",
    "primaryKeyword": "water heater installation coquitlam",
    "secondaryKeywords": [
      "hot water tank installation coquitlam",
      "tankless water heater installation coquitlam",
      "water heater installer coquitlam",
      "water heater installation cost coquitlam"
    ],
    "targetArea": "Coquitlam, British Columbia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9169",
    "ctaPhoneDisplay": "1-888-328-9169",
    "ctaPhoneE164": "+18883289169"
  },
  {
    "id": 211,
    "title": "Water Heater Repair Winnipeg - Same-Day Licensed Service",
    "slug": "water-heater-repair-winnipeg",
    "primaryKeyword": "water heater repair winnipeg",
    "secondaryKeywords": [
      "hot water tank repair winnipeg",
      "hot water heater repair winnipeg",
      "emergency water heater repair winnipeg",
      "water heater service winnipeg",
      "plumber water heater winnipeg"
    ],
    "targetArea": "Winnipeg, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 350,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9169",
    "ctaPhoneDisplay": "1-888-328-9169",
    "ctaPhoneE164": "+18883289169"
  },
  {
    "id": 212,
    "title": "Hot Water Tank Repair Winnipeg - Fast & Certified",
    "slug": "hot-water-tank-repair-winnipeg",
    "primaryKeyword": "hot water tank repair winnipeg",
    "secondaryKeywords": [
      "water heater repair winnipeg",
      "hot water tank service winnipeg",
      "fix hot water tank winnipeg",
      "hot water heater repair winnipeg"
    ],
    "targetArea": "Winnipeg, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 300,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9170",
    "ctaPhoneDisplay": "1-888-328-9170",
    "ctaPhoneE164": "+18883289170"
  },
  {
    "id": 213,
    "title": "Tankless Water Heater Repair Winnipeg - Certified Techs",
    "slug": "tankless-water-heater-repair-winnipeg",
    "primaryKeyword": "tankless water heater repair winnipeg",
    "secondaryKeywords": [
      "on demand water heater repair winnipeg",
      "navien repair winnipeg",
      "rinnai repair winnipeg",
      "tankless heater service winnipeg"
    ],
    "targetArea": "Winnipeg, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 800.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9171",
    "ctaPhoneDisplay": "1-888-328-9171",
    "ctaPhoneE164": "+18883289171"
  },
  {
    "id": 214,
    "title": "Hot Water Tank Replacement Winnipeg - Installed Today",
    "slug": "hot-water-tank-replacement-winnipeg",
    "primaryKeyword": "hot water tank replacement winnipeg",
    "secondaryKeywords": [
      "water heater replacement winnipeg",
      "replace hot water tank winnipeg",
      "hot water tank installation winnipeg",
      "winnipeg hot water tank replacement cost"
    ],
    "targetArea": "Winnipeg, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 300,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9172",
    "ctaPhoneDisplay": "1-888-328-9172",
    "ctaPhoneE164": "+18883289172"
  },
  {
    "id": 215,
    "title": "Water Heater Replacement Winnipeg - Same-Day Install",
    "slug": "water-heater-replacement-winnipeg",
    "primaryKeyword": "water heater replacement winnipeg",
    "secondaryKeywords": [
      "hot water tank replacement winnipeg",
      "water heater install winnipeg",
      "tankless water heater winnipeg",
      "water heater cost winnipeg"
    ],
    "targetArea": "Winnipeg, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9173",
    "ctaPhoneDisplay": "1-888-328-9173",
    "ctaPhoneE164": "+18883289173"
  },
  {
    "id": 216,
    "title": "Water Heater Installation Winnipeg - Licensed & Insured",
    "slug": "water-heater-installation-winnipeg",
    "primaryKeyword": "water heater installation winnipeg",
    "secondaryKeywords": [
      "hot water tank installation winnipeg",
      "tankless water heater installation winnipeg",
      "water heater installer winnipeg",
      "water heater installation cost winnipeg"
    ],
    "targetArea": "Winnipeg, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 270,
    "keywordDifficulty": 0,
    "cpc": 700.0,
    "priority": "🔴 Top Priority",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 218,
    "title": "Hot Water Tank Repair Brandon - Fast & Certified",
    "slug": "hot-water-tank-repair-brandon",
    "primaryKeyword": "hot water tank repair brandon",
    "secondaryKeywords": [
      "water heater repair brandon",
      "hot water tank service brandon",
      "fix hot water tank brandon",
      "hot water heater repair brandon"
    ],
    "targetArea": "Brandon, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9170",
    "ctaPhoneDisplay": "1-888-328-9170",
    "ctaPhoneE164": "+18883289170"
  },
  {
    "id": 219,
    "title": "Tankless Water Heater Repair Brandon - Certified Techs",
    "slug": "tankless-water-heater-repair-brandon",
    "primaryKeyword": "tankless water heater repair brandon",
    "secondaryKeywords": [
      "on demand water heater repair brandon",
      "navien repair brandon",
      "rinnai repair brandon",
      "tankless heater service brandon"
    ],
    "targetArea": "Brandon, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9171",
    "ctaPhoneDisplay": "1-888-328-9171",
    "ctaPhoneE164": "+18883289171"
  },
  {
    "id": 220,
    "title": "Hot Water Tank Replacement Brandon - Installed Today",
    "slug": "hot-water-tank-replacement-brandon",
    "primaryKeyword": "hot water tank replacement brandon",
    "secondaryKeywords": [
      "water heater replacement brandon",
      "replace hot water tank brandon",
      "hot water tank installation brandon",
      "brandon hot water tank replacement cost"
    ],
    "targetArea": "Brandon, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9172",
    "ctaPhoneDisplay": "1-888-328-9172",
    "ctaPhoneE164": "+18883289172"
  },
  {
    "id": 221,
    "title": "Water Heater Replacement Brandon - Same-Day Install",
    "slug": "water-heater-replacement-brandon",
    "primaryKeyword": "water heater replacement brandon",
    "secondaryKeywords": [
      "hot water tank replacement brandon",
      "water heater install brandon",
      "tankless water heater brandon",
      "water heater cost brandon"
    ],
    "targetArea": "Brandon, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9173",
    "ctaPhoneDisplay": "1-888-328-9173",
    "ctaPhoneE164": "+18883289173"
  },
  {
    "id": 222,
    "title": "Water Heater Installation Brandon - Licensed & Insured",
    "slug": "water-heater-installation-brandon",
    "primaryKeyword": "water heater installation brandon",
    "secondaryKeywords": [
      "hot water tank installation brandon",
      "tankless water heater installation brandon",
      "water heater installer brandon",
      "water heater installation cost brandon"
    ],
    "targetArea": "Brandon, Manitoba",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 223,
    "title": "Water Heater Repair Montreal - Same-Day Licensed Service",
    "slug": "water-heater-repair-montreal",
    "primaryKeyword": "water heater repair montreal",
    "secondaryKeywords": [
      "hot water tank repair montreal",
      "hot water heater repair montreal",
      "emergency water heater repair montreal",
      "water heater service montreal",
      "plumber water heater montreal"
    ],
    "targetArea": "Montreal, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 200,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9170",
    "ctaPhoneDisplay": "1-888-328-9170",
    "ctaPhoneE164": "+18883289170"
  },
  {
    "id": 224,
    "title": "Hot Water Tank Repair Montreal - Fast & Certified",
    "slug": "hot-water-tank-repair-montreal",
    "primaryKeyword": "hot water tank repair montreal",
    "secondaryKeywords": [
      "water heater repair montreal",
      "hot water tank service montreal",
      "fix hot water tank montreal",
      "hot water heater repair montreal"
    ],
    "targetArea": "Montreal, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9171",
    "ctaPhoneDisplay": "1-888-328-9171",
    "ctaPhoneE164": "+18883289171"
  },
  {
    "id": 225,
    "title": "Tankless Water Heater Repair Montreal - Certified Techs",
    "slug": "tankless-water-heater-repair-montreal",
    "primaryKeyword": "tankless water heater repair montreal",
    "secondaryKeywords": [
      "on demand water heater repair montreal",
      "navien repair montreal",
      "rinnai repair montreal",
      "tankless heater service montreal"
    ],
    "targetArea": "Montreal, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9172",
    "ctaPhoneDisplay": "1-888-328-9172",
    "ctaPhoneE164": "+18883289172"
  },
  {
    "id": 226,
    "title": "Hot Water Tank Replacement Montreal - Installed Today",
    "slug": "hot-water-tank-replacement-montreal",
    "primaryKeyword": "hot water tank replacement montreal",
    "secondaryKeywords": [
      "water heater replacement montreal",
      "replace hot water tank montreal",
      "hot water tank installation montreal",
      "montreal hot water tank replacement cost"
    ],
    "targetArea": "Montreal, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9173",
    "ctaPhoneDisplay": "1-888-328-9173",
    "ctaPhoneE164": "+18883289173"
  },
  {
    "id": 227,
    "title": "Water Heater Replacement Montreal - Same-Day Install",
    "slug": "water-heater-replacement-montreal",
    "primaryKeyword": "water heater replacement montreal",
    "secondaryKeywords": [
      "hot water tank replacement montreal",
      "water heater install montreal",
      "tankless water heater montreal",
      "water heater cost montreal"
    ],
    "targetArea": "Montreal, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 228,
    "title": "Water Heater Installation Montreal - Licensed & Insured",
    "slug": "water-heater-installation-montreal",
    "primaryKeyword": "water heater installation montreal",
    "secondaryKeywords": [
      "hot water tank installation montreal",
      "tankless water heater installation montreal",
      "water heater installer montreal",
      "water heater installation cost montreal"
    ],
    "targetArea": "Montreal, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 120,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟠 High",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 230,
    "title": "Hot Water Tank Repair Quebec City - Fast & Certified",
    "slug": "hot-water-tank-repair-quebec-city",
    "primaryKeyword": "hot water tank repair quebec city",
    "secondaryKeywords": [
      "water heater repair quebec city",
      "hot water tank service quebec city",
      "fix hot water tank quebec city",
      "hot water heater repair quebec city"
    ],
    "targetArea": "Quebec City, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9170",
    "ctaPhoneDisplay": "1-888-328-9170",
    "ctaPhoneE164": "+18883289170"
  },
  {
    "id": 231,
    "title": "Tankless Water Heater Repair Quebec City - Certified Techs",
    "slug": "tankless-water-heater-repair-quebec-city",
    "primaryKeyword": "tankless water heater repair quebec city",
    "secondaryKeywords": [
      "on demand water heater repair quebec city",
      "navien repair quebec city",
      "rinnai repair quebec city",
      "tankless heater service quebec city"
    ],
    "targetArea": "Quebec City, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9171",
    "ctaPhoneDisplay": "1-888-328-9171",
    "ctaPhoneE164": "+18883289171"
  },
  {
    "id": 232,
    "title": "Hot Water Tank Replacement Quebec City - Installed Today",
    "slug": "hot-water-tank-replacement-quebec-city",
    "primaryKeyword": "hot water tank replacement quebec city",
    "secondaryKeywords": [
      "water heater replacement quebec city",
      "replace hot water tank quebec city",
      "hot water tank installation quebec city",
      "quebec city hot water tank replacement cost"
    ],
    "targetArea": "Quebec City, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9172",
    "ctaPhoneDisplay": "1-888-328-9172",
    "ctaPhoneE164": "+18883289172"
  },
  {
    "id": 233,
    "title": "Water Heater Replacement Quebec City - Same-Day Install",
    "slug": "water-heater-replacement-quebec-city",
    "primaryKeyword": "water heater replacement quebec city",
    "secondaryKeywords": [
      "hot water tank replacement quebec city",
      "water heater install quebec city",
      "tankless water heater quebec city",
      "water heater cost quebec city"
    ],
    "targetArea": "Quebec City, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9173",
    "ctaPhoneDisplay": "1-888-328-9173",
    "ctaPhoneE164": "+18883289173"
  },
  {
    "id": 234,
    "title": "Water Heater Installation Quebec City - Licensed & Insured",
    "slug": "water-heater-installation-quebec-city",
    "primaryKeyword": "water heater installation quebec city",
    "secondaryKeywords": [
      "hot water tank installation quebec city",
      "tankless water heater installation quebec city",
      "water heater installer quebec city",
      "water heater installation cost quebec city"
    ],
    "targetArea": "Quebec City, Quebec",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 235,
    "title": "Water Heater Repair Halifax - Same-Day Licensed Service",
    "slug": "water-heater-repair-halifax",
    "primaryKeyword": "water heater repair halifax",
    "secondaryKeywords": [
      "hot water tank repair halifax",
      "hot water heater repair halifax",
      "emergency water heater repair halifax",
      "water heater service halifax",
      "plumber water heater halifax"
    ],
    "targetArea": "Halifax, Nova Scotia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9170",
    "ctaPhoneDisplay": "1-888-328-9170",
    "ctaPhoneE164": "+18883289170"
  },
  {
    "id": 236,
    "title": "Hot Water Tank Repair Halifax - Fast & Certified",
    "slug": "hot-water-tank-repair-halifax",
    "primaryKeyword": "hot water tank repair halifax",
    "secondaryKeywords": [
      "water heater repair halifax",
      "hot water tank service halifax",
      "fix hot water tank halifax",
      "hot water heater repair halifax"
    ],
    "targetArea": "Halifax, Nova Scotia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9171",
    "ctaPhoneDisplay": "1-888-328-9171",
    "ctaPhoneE164": "+18883289171"
  },
  {
    "id": 237,
    "title": "Tankless Water Heater Repair Halifax - Certified Techs",
    "slug": "tankless-water-heater-repair-halifax",
    "primaryKeyword": "tankless water heater repair halifax",
    "secondaryKeywords": [
      "on demand water heater repair halifax",
      "navien repair halifax",
      "rinnai repair halifax",
      "tankless heater service halifax"
    ],
    "targetArea": "Halifax, Nova Scotia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9172",
    "ctaPhoneDisplay": "1-888-328-9172",
    "ctaPhoneE164": "+18883289172"
  },
  {
    "id": 238,
    "title": "Hot Water Tank Replacement Halifax - Installed Today",
    "slug": "hot-water-tank-replacement-halifax",
    "primaryKeyword": "hot water tank replacement halifax",
    "secondaryKeywords": [
      "water heater replacement halifax",
      "replace hot water tank halifax",
      "hot water tank installation halifax",
      "halifax hot water tank replacement cost"
    ],
    "targetArea": "Halifax, Nova Scotia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9173",
    "ctaPhoneDisplay": "1-888-328-9173",
    "ctaPhoneE164": "+18883289173"
  },
  {
    "id": 239,
    "title": "Water Heater Replacement Halifax - Same-Day Install",
    "slug": "water-heater-replacement-halifax",
    "primaryKeyword": "water heater replacement halifax",
    "secondaryKeywords": [
      "hot water tank replacement halifax",
      "water heater install halifax",
      "tankless water heater halifax",
      "water heater cost halifax"
    ],
    "targetArea": "Halifax, Nova Scotia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 240,
    "title": "Water Heater Installation Halifax - Licensed & Insured",
    "slug": "water-heater-installation-halifax",
    "primaryKeyword": "water heater installation halifax",
    "secondaryKeywords": [
      "hot water tank installation halifax",
      "tankless water heater installation halifax",
      "water heater installer halifax",
      "water heater installation cost halifax"
    ],
    "targetArea": "Halifax, Nova Scotia",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 241,
    "title": "Water Heater Repair Moncton - Same-Day Licensed Service",
    "slug": "water-heater-repair-moncton",
    "primaryKeyword": "water heater repair moncton",
    "secondaryKeywords": [
      "hot water tank repair moncton",
      "hot water heater repair moncton",
      "emergency water heater repair moncton",
      "water heater service moncton",
      "plumber water heater moncton"
    ],
    "targetArea": "Moncton, New Brunswick",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 242,
    "title": "Hot Water Tank Repair Moncton - Fast & Certified",
    "slug": "hot-water-tank-repair-moncton",
    "primaryKeyword": "hot water tank repair moncton",
    "secondaryKeywords": [
      "water heater repair moncton",
      "hot water tank service moncton",
      "fix hot water tank moncton",
      "hot water heater repair moncton"
    ],
    "targetArea": "Moncton, New Brunswick",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 243,
    "title": "Tankless Water Heater Repair Moncton - Certified Techs",
    "slug": "tankless-water-heater-repair-moncton",
    "primaryKeyword": "tankless water heater repair moncton",
    "secondaryKeywords": [
      "on demand water heater repair moncton",
      "navien repair moncton",
      "rinnai repair moncton",
      "tankless heater service moncton"
    ],
    "targetArea": "Moncton, New Brunswick",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 244,
    "title": "Hot Water Tank Replacement Moncton - Installed Today",
    "slug": "hot-water-tank-replacement-moncton",
    "primaryKeyword": "hot water tank replacement moncton",
    "secondaryKeywords": [
      "water heater replacement moncton",
      "replace hot water tank moncton",
      "hot water tank installation moncton",
      "moncton hot water tank replacement cost"
    ],
    "targetArea": "Moncton, New Brunswick",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 245,
    "title": "Water Heater Replacement Moncton - Same-Day Install",
    "slug": "water-heater-replacement-moncton",
    "primaryKeyword": "water heater replacement moncton",
    "secondaryKeywords": [
      "hot water tank replacement moncton",
      "water heater install moncton",
      "tankless water heater moncton",
      "water heater cost moncton"
    ],
    "targetArea": "Moncton, New Brunswick",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 246,
    "title": "Water Heater Installation Moncton - Licensed & Insured",
    "slug": "water-heater-installation-moncton",
    "primaryKeyword": "water heater installation moncton",
    "secondaryKeywords": [
      "hot water tank installation moncton",
      "tankless water heater installation moncton",
      "water heater installer moncton",
      "water heater installation cost moncton"
    ],
    "targetArea": "Moncton, New Brunswick",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 247,
    "title": "Water Heater Repair Saskatoon - Same-Day Licensed Service",
    "slug": "water-heater-repair-saskatoon",
    "primaryKeyword": "water heater repair saskatoon",
    "secondaryKeywords": [
      "hot water tank repair saskatoon",
      "hot water heater repair saskatoon",
      "emergency water heater repair saskatoon",
      "water heater service saskatoon",
      "plumber water heater saskatoon"
    ],
    "targetArea": "Saskatoon, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 248,
    "title": "Hot Water Tank Repair Saskatoon - Fast & Certified",
    "slug": "hot-water-tank-repair-saskatoon",
    "primaryKeyword": "hot water tank repair saskatoon",
    "secondaryKeywords": [
      "water heater repair saskatoon",
      "hot water tank service saskatoon",
      "fix hot water tank saskatoon",
      "hot water heater repair saskatoon"
    ],
    "targetArea": "Saskatoon, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 249,
    "title": "Tankless Water Heater Repair Saskatoon - Certified Techs",
    "slug": "tankless-water-heater-repair-saskatoon",
    "primaryKeyword": "tankless water heater repair saskatoon",
    "secondaryKeywords": [
      "on demand water heater repair saskatoon",
      "navien repair saskatoon",
      "rinnai repair saskatoon",
      "tankless heater service saskatoon"
    ],
    "targetArea": "Saskatoon, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 250,
    "title": "Hot Water Tank Replacement Saskatoon - Installed Today",
    "slug": "hot-water-tank-replacement-saskatoon",
    "primaryKeyword": "hot water tank replacement saskatoon",
    "secondaryKeywords": [
      "water heater replacement saskatoon",
      "replace hot water tank saskatoon",
      "hot water tank installation saskatoon",
      "saskatoon hot water tank replacement cost"
    ],
    "targetArea": "Saskatoon, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 251,
    "title": "Water Heater Replacement Saskatoon - Same-Day Install",
    "slug": "water-heater-replacement-saskatoon",
    "primaryKeyword": "water heater replacement saskatoon",
    "secondaryKeywords": [
      "hot water tank replacement saskatoon",
      "water heater install saskatoon",
      "tankless water heater saskatoon",
      "water heater cost saskatoon"
    ],
    "targetArea": "Saskatoon, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 252,
    "title": "Water Heater Installation Saskatoon - Licensed & Insured",
    "slug": "water-heater-installation-saskatoon",
    "primaryKeyword": "water heater installation saskatoon",
    "secondaryKeywords": [
      "hot water tank installation saskatoon",
      "tankless water heater installation saskatoon",
      "water heater installer saskatoon",
      "water heater installation cost saskatoon"
    ],
    "targetArea": "Saskatoon, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 254,
    "title": "Hot Water Tank Repair Regina - Fast & Certified",
    "slug": "hot-water-tank-repair-regina",
    "primaryKeyword": "hot water tank repair regina",
    "secondaryKeywords": [
      "water heater repair regina",
      "hot water tank service regina",
      "fix hot water tank regina",
      "hot water heater repair regina"
    ],
    "targetArea": "Regina, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 255,
    "title": "Tankless Water Heater Repair Regina - Certified Techs",
    "slug": "tankless-water-heater-repair-regina",
    "primaryKeyword": "tankless water heater repair regina",
    "secondaryKeywords": [
      "on demand water heater repair regina",
      "navien repair regina",
      "rinnai repair regina",
      "tankless heater service regina"
    ],
    "targetArea": "Regina, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 256,
    "title": "Hot Water Tank Replacement Regina - Installed Today",
    "slug": "hot-water-tank-replacement-regina",
    "primaryKeyword": "hot water tank replacement regina",
    "secondaryKeywords": [
      "water heater replacement regina",
      "replace hot water tank regina",
      "hot water tank installation regina",
      "regina hot water tank replacement cost"
    ],
    "targetArea": "Regina, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 257,
    "title": "Water Heater Replacement Regina - Same-Day Install",
    "slug": "water-heater-replacement-regina",
    "primaryKeyword": "water heater replacement regina",
    "secondaryKeywords": [
      "hot water tank replacement regina",
      "water heater install regina",
      "tankless water heater regina",
      "water heater cost regina"
    ],
    "targetArea": "Regina, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  },
  {
    "id": 258,
    "title": "Water Heater Installation Regina - Licensed & Insured",
    "slug": "water-heater-installation-regina",
    "primaryKeyword": "water heater installation regina",
    "secondaryKeywords": [
      "hot water tank installation regina",
      "tankless water heater installation regina",
      "water heater installer regina",
      "water heater installation cost regina"
    ],
    "targetArea": "Regina, Saskatchewan",
    "pageType": "City Service Page",
    "searchIntent": "Local Trans.",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "🟡 Medium",
    "ctaStrategy": "Call 1-888-328-9174",
    "ctaPhoneDisplay": "1-888-328-9174",
    "ctaPhoneE164": "+18883289174"
  }
];

const CITY_CONTEXT: Record<string, CityContext> = {
  "Abbotsford": {
    "population": "about 166,000 residents",
    "landmark": "Mill Lake Park",
    "neighbourhoods": [
      "Historic Downtown",
      "Clearbrook"
    ],
    "climate": "wet winters and mild shoulder seasons"
  },
  "Barrie": {
    "population": "about 160,000 residents",
    "landmark": "Kempenfelt Bay waterfront",
    "neighbourhoods": [
      "Allandale",
      "Painswick"
    ],
    "climate": "cold winters with lake-effect snow"
  },
  "Brampton": {
    "population": "more than 700,000 residents",
    "landmark": "Gage Park",
    "neighbourhoods": [
      "Downtown Brampton",
      "Bramalea"
    ],
    "climate": "humid summers and freezing winter snaps"
  },
  "Brandon": {
    "population": "about 52,000 residents",
    "landmark": "Keystone Centre district",
    "neighbourhoods": [
      "South End",
      "Riverheights"
    ],
    "climate": "dry prairie winters and warm summers"
  },
  "Burlington": {
    "population": "about 190,000 residents",
    "landmark": "Spencer Smith Park",
    "neighbourhoods": [
      "Aldershot",
      "The Orchard"
    ],
    "climate": "humid summers and freeze-thaw winter cycles"
  },
  "Burnaby": {
    "population": "about 260,000 residents",
    "landmark": "Metrotown",
    "neighbourhoods": [
      "Brentwood",
      "Edmonds"
    ],
    "climate": "rainy winters and mild temperatures"
  },
  "Calgary": {
    "population": "more than 1.6 million residents",
    "landmark": "Calgary Tower",
    "neighbourhoods": [
      "Beltline",
      "Bridgeland"
    ],
    "climate": "dry air, fast weather swings, and deep winter cold"
  },
  "Coquitlam": {
    "population": "about 160,000 residents",
    "landmark": "Lafarge Lake",
    "neighbourhoods": [
      "Burke Mountain",
      "Maillardville"
    ],
    "climate": "rainy winters with mild shoulder seasons"
  },
  "Edmonton": {
    "population": "about 1.1 million residents",
    "landmark": "North Saskatchewan River Valley",
    "neighbourhoods": [
      "Oliver",
      "Mill Woods"
    ],
    "climate": "long cold winters and warm dry summers"
  },
  "Guelph": {
    "population": "about 150,000 residents",
    "landmark": "Basilica of Our Lady",
    "neighbourhoods": [
      "Exhibition Park",
      "West End"
    ],
    "climate": "humid summers and icy winter periods"
  },
  "Halifax": {
    "population": "about 490,000 residents",
    "landmark": "Halifax Citadel",
    "neighbourhoods": [
      "North End",
      "Clayton Park"
    ],
    "climate": "coastal moisture, wind, and variable winter storms"
  },
  "Hamilton": {
    "population": "about 580,000 residents",
    "landmark": "Hamilton Harbour",
    "neighbourhoods": [
      "Ancaster",
      "Stoney Creek"
    ],
    "climate": "humid summers and frequent freeze-thaw cycles"
  },
  "Kelowna": {
    "population": "about 150,000 residents",
    "landmark": "Okanagan Lake waterfront",
    "neighbourhoods": [
      "Rutland",
      "Lower Mission"
    ],
    "climate": "hot dry summers and cooler winters"
  },
  "Kitchener": {
    "population": "about 270,000 residents",
    "landmark": "Victoria Park",
    "neighbourhoods": [
      "Downtown Kitchener",
      "Huron Park"
    ],
    "climate": "humid summers and below-zero winters"
  },
  "Langley": {
    "population": "more than 150,000 residents",
    "landmark": "Douglas Park",
    "neighbourhoods": [
      "Willoughby",
      "Walnut Grove"
    ],
    "climate": "mild rainy winters and moderate summers"
  },
  "Lethbridge": {
    "population": "about 105,000 residents",
    "landmark": "High Level Bridge",
    "neighbourhoods": [
      "West Lethbridge",
      "London Road"
    ],
    "climate": "dry conditions with notable wind exposure"
  },
  "London": {
    "population": "about 430,000 residents",
    "landmark": "Thames River pathways",
    "neighbourhoods": [
      "Old North",
      "Byron"
    ],
    "climate": "humid summers and cold snowy winters"
  },
  "Markham": {
    "population": "about 360,000 residents",
    "landmark": "Main Street Unionville",
    "neighbourhoods": [
      "Unionville",
      "Cornell"
    ],
    "climate": "humid summers and sharp winter cold spells"
  },
  "Mississauga": {
    "population": "about 800,000 residents",
    "landmark": "Port Credit waterfront",
    "neighbourhoods": [
      "Erin Mills",
      "Cooksville"
    ],
    "climate": "lake-influenced humidity and winter freeze-thaw cycles"
  },
  "Moncton": {
    "population": "about 85,000 residents",
    "landmark": "Tidal Bore Park",
    "neighbourhoods": [
      "Downtown Moncton",
      "Riverview-side districts"
    ],
    "climate": "humid summers and cold snowy winters"
  },
  "Montreal": {
    "population": "about 1.8 million residents",
    "landmark": "Mount Royal",
    "neighbourhoods": [
      "Plateau-Mont-Royal",
      "NDG"
    ],
    "climate": "hot summers and long freezing winters"
  },
  "Oakville": {
    "population": "about 230,000 residents",
    "landmark": "Bronte Harbour",
    "neighbourhoods": [
      "Bronte",
      "Glen Abbey"
    ],
    "climate": "lake-moderated humidity and freeze-thaw winters"
  },
  "Orillia": {
    "population": "about 34,000 residents",
    "landmark": "Couchiching Beach Park",
    "neighbourhoods": [
      "West Ridge",
      "Downtown Orillia"
    ],
    "climate": "cold winters and shoulder-season moisture swings"
  },
  "Oshawa": {
    "population": "about 185,000 residents",
    "landmark": "Lakeview Park",
    "neighbourhoods": [
      "North Oshawa",
      "Donevan"
    ],
    "climate": "humid summers and icy winters"
  },
  "Ottawa": {
    "population": "about 1 million residents",
    "landmark": "Parliament Hill",
    "neighbourhoods": [
      "Kanata",
      "Orleans"
    ],
    "climate": "humid summers with severe winter cold"
  },
  "Pickering": {
    "population": "about 105,000 residents",
    "landmark": "Frenchman’s Bay",
    "neighbourhoods": [
      "Bay Ridges",
      "Rougemount"
    ],
    "climate": "lake-influenced humidity and cold winters"
  },
  "Quebec City": {
    "population": "about 550,000 residents",
    "landmark": "Old Quebec",
    "neighbourhoods": [
      "Sainte-Foy",
      "Limoilou"
    ],
    "climate": "humid summers and very cold snowy winters"
  },
  "Red Deer": {
    "population": "about 110,000 residents",
    "landmark": "Bower Ponds",
    "neighbourhoods": [
      "Anders",
      "West Park"
    ],
    "climate": "dry prairie air and cold winter stretches"
  },
  "Regina": {
    "population": "about 250,000 residents",
    "landmark": "Wascana Centre",
    "neighbourhoods": [
      "Harbour Landing",
      "Lakeview"
    ],
    "climate": "dry climate with strong seasonal temperature swings"
  },
  "Richmond Hill": {
    "population": "about 210,000 residents",
    "landmark": "Mill Pond Park",
    "neighbourhoods": [
      "Oak Ridges",
      "Bayview Hill"
    ],
    "climate": "humid summers and winter freeze-thaw periods"
  },
  "Richmond": {
    "population": "about 210,000 residents",
    "landmark": "Steveston Village",
    "neighbourhoods": [
      "Steveston",
      "West Cambie"
    ],
    "climate": "coastal rain and mild winter temperatures"
  },
  "Saskatoon": {
    "population": "about 300,000 residents",
    "landmark": "Meewasin Valley trails",
    "neighbourhoods": [
      "Nutana",
      "Stonebridge"
    ],
    "climate": "cold dry winters and warm sunny summers"
  },
  "St. Catharines": {
    "population": "about 140,000 residents",
    "landmark": "Port Dalhousie",
    "neighbourhoods": [
      "Merritton",
      "North End"
    ],
    "climate": "moderate summers and damp freeze-thaw winters"
  },
  "Surrey": {
    "population": "more than 650,000 residents",
    "landmark": "Crescent Beach",
    "neighbourhoods": [
      "Fleetwood",
      "Guildford"
    ],
    "climate": "rainy winters with mild temperatures"
  },
  "Toronto": {
    "population": "about 3 million residents",
    "landmark": "CN Tower",
    "neighbourhoods": [
      "Etobicoke",
      "Scarborough"
    ],
    "climate": "humid summers and freezing winter periods"
  },
  "Vancouver": {
    "population": "about 680,000 residents",
    "landmark": "Stanley Park",
    "neighbourhoods": [
      "Kitsilano",
      "East Vancouver"
    ],
    "climate": "wet winters and mild temperatures"
  },
  "Vaughan": {
    "population": "about 340,000 residents",
    "landmark": "Vaughan Metropolitan Centre",
    "neighbourhoods": [
      "Maple",
      "Woodbridge"
    ],
    "climate": "humid summers and winter freeze-thaw cycles"
  },
  "Windsor": {
    "population": "about 235,000 residents",
    "landmark": "Windsor Riverfront",
    "neighbourhoods": [
      "Walkerville",
      "South Windsor"
    ],
    "climate": "hot summers and comparatively mild winters"
  },
  "Winnipeg": {
    "population": "about 820,000 residents",
    "landmark": "The Forks",
    "neighbourhoods": [
      "St. Vital",
      "Transcona"
    ],
    "climate": "very cold winters and warm prairie summers"
  }
};

export const PAGE_TYPES = Array.from(new Set(WATER_HEATER_PAGES.map((page) => page.pageType)));
export const TARGET_AREAS = Array.from(new Set(WATER_HEATER_PAGES.map((page) => page.targetArea)));

function slugHash(value: string) {
  return value.split("").reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
}

function pickVariant<T>(items: readonly T[], key: string, offset = 0) {
  return items[(slugHash(key) + offset) % items.length];
}

function toTitleCase(input: string) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(amount);
}

function normalizeKeyword(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function trimToWordBoundary(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  const cut = value.slice(0, maxLength);
  const split = cut.lastIndexOf(" ");
  if (split < 24) {
    return cut.trim();
  }
  return cut.slice(0, split).trim();
}

function locationToken(page: WaterHeaterPage) {
  const area = parseArea(page.targetArea);
  if (area.kind === "national") {
    return "Canada";
  }
  if (area.kind === "city") {
    return area.city;
  }
  return area.label;
}

function ensureTitleLength(core: string) {
  const suffix = ` | ${SITE_NAME}`;
  let candidate = `${core}${suffix}`.replace(/\s+/g, " ").trim();

  if (candidate.length > 60) {
    const allowed = Math.max(24, 60 - suffix.length);
    candidate = `${trimToWordBoundary(core, allowed)}${suffix}`;
  }

  if (candidate.length < 50) {
    const grown = `${core} service`;
    candidate = `${grown}${suffix}`;
    if (candidate.length > 60) {
      const allowed = Math.max(24, 60 - suffix.length);
      candidate = `${trimToWordBoundary(grown, allowed)}${suffix}`;
    }
  }

  return candidate;
}

function parseServiceFamily(keyword: string) {
  const normalized = normalizeKeyword(keyword);
  if (normalized.includes("tankless water heater repair")) return "tankless-water-heater-repair";
  if (normalized.includes("hot water tank replacement")) return "hot-water-tank-replacement";
  if (normalized.includes("water heater replacement")) return "water-heater-replacement";
  if (normalized.includes("water heater installation")) return "water-heater-installation";
  if (normalized.includes("tankless water heater installation")) return "water-heater-installation";
  if (normalized.includes("hot water tank repair")) return "hot-water-tank-repair";
  if (normalized.includes("gas water heater repair") || normalized.includes("electric water heater repair")) return "water-heater-repair";
  if (normalized.includes("water heater repair")) return "water-heater-repair";
  if (normalized.includes("no hot water") || normalized.includes("not working") || normalized.includes("leaking") || normalized.includes("pressure relief valve")) return "water-heater-repair";
  return "water-heater-repair";
}

function uniqueBySlug(items: WaterHeaterPage[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.slug)) {
      return false;
    }
    seen.add(item.slug);
    return true;
  });
}

function uniqueByCity(items: WaterHeaterPage[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const area = parseArea(item.targetArea);
    const key = area.kind === "city" ? area.city : item.targetArea;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export function buildCanonicalPath(slug: string) {
  return `/${slug.replace(/^\/+/, "")}`;
}

export function parseArea(targetArea: string): AreaInfo {
  if (targetArea === "Canada (National)") {
    return { kind: "national", label: "Canada" };
  }

  if (targetArea.includes(",")) {
    const [city, province] = targetArea.split(",").map((value) => value.trim());
    return { kind: "city", city, province, label: `${city}, ${province}` };
  }

  return { kind: "province", label: targetArea };
}

export function getAreaLabel(targetArea: string) {
  return targetArea === "Canada (National)" ? "Canada" : targetArea;
}

export function getWaterHeaterPageBySlug(slug: string) {
  return WATER_HEATER_PAGES.find((page) => page.slug === slug);
}

export function getPagesByType(pageType: string) {
  return WATER_HEATER_PAGES.filter((page) => page.pageType === pageType);
}

export function getPagesByArea(targetArea: string) {
  return WATER_HEATER_PAGES.filter((page) => page.targetArea === targetArea);
}

export function getTopPriorityPages(limit = 10) {
  const ordered = [...WATER_HEATER_PAGES].sort((a, b) => b.monthlyVolume - a.monthlyVolume);
  return ordered.slice(0, limit);
}

export function getCityPages() {
  return WATER_HEATER_PAGES.filter((page) => page.pageType === "City Service Page");
}

export function getRelevantPillarPage(page: WaterHeaterPage) {
  const family = parseServiceFamily(page.primaryKeyword);
  return (
    WATER_HEATER_PAGES.find((item) => item.pageType === "Service Pillar" && parseServiceFamily(item.primaryKeyword) === family) ||
    WATER_HEATER_PAGES.find((item) => item.pageType === "Service Pillar")
  );
}

export function getCityPagesForLinking(page: WaterHeaterPage, limit = 5) {
  const family = parseServiceFamily(page.primaryKeyword);
  const sameFamily = getCityPages().filter((item) => parseServiceFamily(item.primaryKeyword) === family && item.slug !== page.slug);
  const withUniqueCity = uniqueByCity(sameFamily);

  if (withUniqueCity.length >= limit) {
    return withUniqueCity.slice(0, limit);
  }

  return uniqueByCity(getCityPages().filter((item) => item.slug !== page.slug)).slice(0, limit);
}

export function getCrossServiceLinksForCity(page: WaterHeaterPage, limit = 5) {
  const area = parseArea(page.targetArea);
  if (area.kind !== "city") {
    return [];
  }

  return getCityPages()
    .filter((item) => item.targetArea === page.targetArea && item.slug !== page.slug)
    .slice(0, limit)
    .map((item) => ({
      href: `/${item.slug}`,
      anchor: `${toTitleCase(item.primaryKeyword)} ${area.city}`,
    }));
}

export function getPillarToCityLinks(pillarPage: WaterHeaterPage) {
  const family = parseServiceFamily(pillarPage.primaryKeyword);
  const matched = getCityPages().filter((item) => parseServiceFamily(item.primaryKeyword) === family);
  return uniqueBySlug(matched);
}

export function getLocationFacts(page: WaterHeaterPage) {
  const area = parseArea(page.targetArea);
  if (area.kind !== "city") {
    return [];
  }

  const cityData = CITY_CONTEXT[area.city];
  if (!cityData) {
    return [
      `${area.city} mixes older streets and newer subdivisions, which can change access planning for heater repairs and replacements.`,
      `Seasonal weather in ${area.city} can affect freeze risk and same-day scheduling windows for emergency hot-water calls.`,
    ];
  }

  return [
    `${area.city} has ${cityData.population}, so scheduling needs can swing fast during peak cold-weather weeks when hot-water failures rise.`,
    `Service calls often differ between ${cityData.neighbourhoods[0]} and ${cityData.neighbourhoods[1]}, where home age and mechanical-room access can change labor time.`,
    `Around ${cityData.landmark}, homes range from legacy tank setups to newer systems, so inspection-first planning avoids wrong parts and repeat visits.`,
    `${area.city} typically sees ${cityData.climate}, which matters for venting checks, condensation risk, and winter-safe replacement scheduling.`,
  ];
}

export function buildSeoTitle(page: WaterHeaterPage) {
  const location = locationToken(page);
  const keyword = page.primaryKeyword.trim();
  const keywordHasLocation = normalizeKeyword(keyword).includes(normalizeKeyword(location));
  const core = keywordHasLocation ? toTitleCase(keyword) : toTitleCase(`${keyword} ${location}`);
  return ensureTitleLength(core);
}

export function buildMetaDescription(page: WaterHeaterPage) {
  const location = locationToken(page);
  const variants = [
    "licensed technicians, fast diagnostics, and practical repair-or-replace guidance",
    "same-day response options, transparent scope notes, and clear next-step scheduling",
    "safe installation planning, code-aware checks, and homeowner-first communication",
    "priority dispatch support, parts matching guidance, and dependable follow-through",
  ] as const;

  const opener = `${toTitleCase(page.primaryKeyword)} in ${location}.`;
  const mid = pickVariant(variants, page.slug, 1);
  let description = `${opener} ${mid} Call ${page.ctaPhoneDisplay} to book service.`;

  if (description.length < 150) {
    description = `${description} Compare timing and cost options now.`;
  }

  if (description.length > 160) {
    description = trimToWordBoundary(description, 160);
  }

  return trimMetaDescription(description, 160);
}

export function buildMeta(page: WaterHeaterPage): Metadata {
  const title = buildSeoTitle(page);
  const description = buildMetaDescription(page);
  const canonical = buildCanonicalPath(page.slug);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      type: "website",
      siteName: SITE_NAME,
      images: [absoluteUrl("/quickheatfix-logo.svg")],
    },
    robots: { index: true, follow: true },
  };
}

export function buildH1(page: WaterHeaterPage) {
  const area = parseArea(page.targetArea);
  if (area.kind === "national") {
    return `${toTitleCase(page.primaryKeyword)} Across Canada`;
  }

  if (area.kind === "city") {
    return `${toTitleCase(page.primaryKeyword)} in ${area.city}`;
  }

  return `${toTitleCase(page.primaryKeyword)} in ${area.label}`;
}

export function buildIntroParagraph(page: WaterHeaterPage) {
  const area = locationToken(page);
  const concernOpeners = [
    "When your hot water fails, decisions need to happen quickly but carefully.",
    "A broken heater can disrupt showers, cleaning, and family routines in a single day.",
    "Most homeowners reach this stage when comfort and safety both feel urgent.",
    "Hot-water issues often start small, then escalate right before you need reliability most.",
  ] as const;

  const planningLines = [
    "This page helps you compare repair versus replacement with clear symptom-based guidance, expected timelines, and practical prep steps before a technician arrives.",
    "Here you can review what technicians check first, how scheduling works in real homes, and what details usually change total project scope.",
    "You will find straightforward guidance on diagnostics, installation planning, and how to avoid repeat failures by fixing the root cause instead of patching symptoms.",
    "Use this guide to understand urgent safety signals, realistic appointment windows, and what to gather before booking service.",
  ] as const;

  const budgetLine =
    page.cpc > 0
      ? `Keyword market data around ${formatMoney(page.cpc)} per lead shows how competitive this service is, but final cost still depends on tank type, venting, parts availability, and in-home access.`
      : "Pricing is best confirmed during inspection because tank type, access, and code upgrades can change the final quote.";

  const closeLines = [
    `If you want fast clarity in ${area}, call early so dispatch can match your issue to the right technician and reduce repeat visits.`,
    `If your timeline is tight in ${area}, early phone triage can shorten downtime and help you prioritize the safest next step.`,
    `For homeowners in ${area}, a quick call now can secure the right service path before minor symptoms become a full no-hot-water emergency.`,
    `In ${area}, same-day planning is often available, and early intake usually leads to cleaner scheduling and fewer surprises onsite.`,
  ] as const;

  return [
    pickVariant(concernOpeners, page.slug),
    pickVariant(planningLines, page.slug, 2),
    budgetLine,
    pickVariant(closeLines, page.slug, 3),
  ].join(" ");
}

export function buildKeywordSentence(page: WaterHeaterPage) {
  if (page.secondaryKeywords.length === 0) {
    return `Homeowners searching ${page.primaryKeyword} usually need quick diagnostics, safe repair planning, and a clear path to reliable hot water.`;
  }

  const related = page.secondaryKeywords.slice(0, 3).join(", ");
  return `People comparing ${page.primaryKeyword} often also review ${related} before choosing a same-day repair or replacement plan.`;
}

export function buildFaqs(page: WaterHeaterPage) {
  const area = locationToken(page);
  const keyword = page.primaryKeyword;
  const timingHint = page.pageType.toLowerCase();

  return [
    {
      question: `How fast can ${keyword} appointments be arranged in ${area}?`,
      answer: `Dispatch availability changes by demand, but phone triage starts immediately and helps route your ${timingHint} request to the right technician without delay.`,
    },
    {
      question: `What affects final pricing for ${keyword} work in ${area}?`,
      answer: "Final pricing depends on heater type, venting setup, code-required upgrades, parts availability, and whether the job is a repair, full replacement, or installation conversion.",
    },
    {
      question: `Should I repair or replace first when searching ${keyword} in ${area}?`,
      answer: "Technicians usually compare unit age, failure history, and safety condition first, then recommend repair when practical or replacement when reliability risk stays high.",
    },
    {
      question: `Is there a safer way to reduce downtime for ${keyword} projects?`,
      answer: "Yes. Early symptom notes, photos of the current tank label, and clear access to the mechanical area usually speed diagnostics and shorten total disruption time.",
    },
  ];
}

export function buildSchemas(page: WaterHeaterPage) {
  const faqs = buildFaqs(page);
  const area = parseArea(page.targetArea);
  const canonical = absoluteUrl(buildCanonicalPath(page.slug));

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
        { "@type": "ListItem", position: 3, name: buildH1(page), item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  if (area.kind === "city") {
    schemas.push(
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${SITE_NAME} ${area.city}`,
        description: buildMetaDescription(page),
        url: canonical,
        areaServed: page.targetArea,
        image: absoluteUrl("/quickheatfix-logo.svg"),
        telephone: page.ctaPhoneE164,
        priceRange: "$$",
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: toTitleCase(page.primaryKeyword),
        serviceType: "Water heater repair and replacement",
        areaServed: page.targetArea,
        provider: { "@type": "Organization", name: SITE_NAME },
      },
    );
  }

  return schemas;
}

export function isSupportPage(page: WaterHeaterPage) {
  return ["Emergency Landing", "Symptom Page", "Near Me Page", "Service Page"].includes(page.pageType);
}

export function getRelatedPages(page: WaterHeaterPage, limit = 6) {
  const byType = WATER_HEATER_PAGES.filter((item) => item.pageType === page.pageType && item.slug !== page.slug);
  if (byType.length >= limit) {
    return byType.slice(0, limit);
  }

  const fallback = WATER_HEATER_PAGES.filter((item) => item.slug !== page.slug);
  return uniqueBySlug([...byType, ...fallback]).slice(0, limit);
}
