import { isLocale } from '../../i18n/utils';
import type { Locale } from '../../config/routes';

export const profiles = ['streamer', 'clipper', 'editor', 'agency'] as const;
export type Profile = (typeof profiles)[number];

export const platforms = ['twitch', 'youtube', 'kick', 'tiktok', 'instagram', 'other'] as const;
export type Platform = (typeof platforms)[number];

export interface WaitlistEntry {
  email: string;
  profile: Profile;
  platform: Platform | '';
  channel: string;
  locale: Locale;
  utm: string;
  consent: true;
}

export type ValidationResult =
  | { ok: true; entry: WaitlistEntry }
  | { ok: false; field: 'email' | 'profile' | 'channel' | 'consent' | 'spam'; code: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown, max = 300): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

/** Validates the raw form/JSON body. Never trusts the client. */
export function validate(body: Record<string, unknown>): ValidationResult {
  // Honeypot: real people never see or fill this field.
  if (str(body.website)) return { ok: false, field: 'spam', code: 'honeypot' };

  const email = str(body.email, 254).toLowerCase();
  if (!EMAIL.test(email)) return { ok: false, field: 'email', code: 'invalid' };

  const profile = str(body.profile) as Profile;
  if (!profiles.includes(profile)) return { ok: false, field: 'profile', code: 'invalid' };

  const platformRaw = str(body.platform) as Platform;
  const platform = platforms.includes(platformRaw) ? platformRaw : '';

  const channel = str(body.channel, 300);
  if (channel && !/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/i.test(channel)) {
    return { ok: false, field: 'channel', code: 'invalid' };
  }

  const consent = body.consent === true || body.consent === 'on' || body.consent === 'true';
  if (!consent) return { ok: false, field: 'consent', code: 'required' };

  const locale = isLocale(body.locale) ? body.locale : 'en';
  const utm = str(body.utm, 300);

  return { ok: true, entry: { email, profile, platform, channel, locale, utm, consent: true } };
}
