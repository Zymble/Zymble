import { localizedPath, type Locale } from './routes';

const env = import.meta.env;

export const site = {
  name: 'RushClippy',
  tagline: 'Your stream. Your cut.',
  url: env.PUBLIC_SITE_URL || 'https://rushclippy.com',
  appUrl: env.PUBLIC_APP_URL || 'https://app.rushclippy.com',
  /** false = CTAs go to the waitlist; true = CTAs go to the app. */
  appLive: env.PUBLIC_APP_LIVE === 'true',
  plausibleDomain: env.PUBLIC_PLAUSIBLE_DOMAIN || '',
  /** Only a production deploy on Vercel may be indexed. */
  indexable: process.env.VERCEL_ENV === 'production',
  /**
   * Official profiles. Leave `href` empty until the account exists;
   * empty entries are not rendered.
   */
  social: [
    { id: 'tiktok', label: 'TikTok', href: '' },
    { id: 'youtube', label: 'YouTube', href: '' },
    { id: 'x', label: 'X', href: '' },
    { id: 'discord', label: 'Discord', href: '' },
    { id: 'instagram', label: 'Instagram', href: '' },
  ],
  /**
   * Platforms the app will actually support at launch. Confirm with the app repo
   * before adding anything here; this list is rendered on the home page.
   */
  platforms: ['Twitch', 'YouTube', 'Kick'],
  /** Where clips are published/scheduled. Same rule: only what the app will support. */
  destinations: ['TikTok', 'YouTube Shorts', 'Instagram Reels'],
} as const;

/** Primary CTA target: waitlist before launch, app signup after. */
export function primaryCtaHref(locale: Locale): string {
  return site.appLive ? `${site.appUrl}/signup` : localizedPath('early-access', locale);
}

/** CTA per side of the marketplace: that side's landing page, or the app signup after launch. */
export function roleCtaHref(locale: Locale, role: 'streamer' | 'clipper'): string {
  return site.appLive
    ? `${site.appUrl}/signup?role=${role}`
    : localizedPath(role === 'streamer' ? 'streamers' : 'clippers', locale);
}

export function signInHref(): string {
  return `${site.appUrl}/login`;
}
