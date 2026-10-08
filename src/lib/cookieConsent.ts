export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'cookie-consent';

export const readConsent = (): CookieConsent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { analytics: parsed.analytics === true, marketing: parsed.marketing === true };
  } catch {
    return null;
  }
};

export const writeConsent = (consent: CookieConsent) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage can be blocked; the choice then only lasts for this visit.
  }
};
