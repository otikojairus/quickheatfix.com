export const SITE_NAME = "QuickHeatFix";
export const DEFAULT_SITE_URL = "https://quickheatfix.com";
export const EMERGENCY_PHONE_DISPLAY = "1-888-328-8990";
export const EMERGENCY_PHONE_E164 = "+18883288990";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
}

export function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function trimMetaDescription(input: string, max = 155) {
  if (input.length <= max) {
    return input;
  }

  const sliced = input.slice(0, max - 1);
  return `${sliced.slice(0, sliced.lastIndexOf(" "))}…`;
}
