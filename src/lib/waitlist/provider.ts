import type { WaitlistEntry } from './schema';
import { createResendProvider } from './resend';

/**
 * Email/list provider behind an interface, so Resend can be swapped without touching the form.
 * Returns null when the provider is not configured.
 */
export interface WaitlistProvider {
  /** Store the contact as pending (not subscribed) and send the confirmation email. */
  addPending(entry: WaitlistEntry, confirmUrl: string): Promise<void>;
  /** Mark the contact as confirmed (double opt-in) and notify the team. */
  confirm(entry: WaitlistEntry): Promise<void>;
}

export function env(name: string): string {
  return (
    process.env[name] ??
    (import.meta.env as Record<string, string | undefined>)[name] ??
    ''
  ).trim();
}

export function getProvider(): WaitlistProvider | null {
  const apiKey = env('RESEND_API_KEY');
  const audienceId = env('RESEND_AUDIENCE_ID');
  const from = env('WAITLIST_FROM_EMAIL');
  if (!apiKey || !audienceId || !from) return null;
  return createResendProvider({ apiKey, audienceId, from, notifyTo: env('CONTACT_TO_EMAIL') });
}
