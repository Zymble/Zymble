import type { APIRoute } from 'astro';
import { localizedPath } from '@/config/routes';
import { env, getProvider } from '@/lib/waitlist/provider';
import { verifyToken } from '@/lib/waitlist/token';

export const prerender = false;

/** Double opt-in: the link in the confirmation email lands here. */
export const GET: APIRoute = async ({ url }) => {
  const site = env('PUBLIC_SITE_URL') || url.origin;
  const secret = env('WAITLIST_SIGNING_SECRET');
  const entry = secret ? verifyToken(url.searchParams.get('t') ?? '', secret) : null;
  if (!entry) {
    return Response.redirect(new URL(`${localizedPath('early-access', 'en')}#invalid`, site), 303);
  }
  const provider = getProvider();
  try {
    await provider?.confirm(entry);
  } catch (err) {
    console.error('[waitlist] confirm error', err);
    return Response.redirect(
      new URL(`${localizedPath('early-access', entry.locale)}#error`, site),
      303,
    );
  }
  return Response.redirect(
    new URL(localizedPath('early-access/confirmed', entry.locale), site),
    303,
  );
};
