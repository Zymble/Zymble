import type { APIRoute } from 'astro';
import { localizedPath } from '@/config/routes';
import { env, getProvider } from '@/lib/waitlist/provider';
import { validate } from '@/lib/waitlist/schema';
import { signToken } from '@/lib/waitlist/token';

export const prerender = false;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

// Best-effort rate limit per warm instance (Turnstile does the heavy lifting).
const hits = new Map<string, number[]>();
function limited(ip: string, now = Date.now()) {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

async function turnstileOk(token: string, ip: string) {
  const secret = env('TURNSTILE_SECRET_KEY');
  if (!secret) return true; // not configured (local dev)
  const form = new URLSearchParams({ secret, response: token, remoteip: ip });
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  return data.success === true;
}

export const POST: APIRoute = async ({ request, clientAddress, url }) => {
  const ip = clientAddress || 'unknown';
  if (limited(ip)) return json(429, { ok: false, error: 'rate_limited' });

  let body: Record<string, unknown>;
  const type = request.headers.get('content-type') ?? '';
  try {
    body = type.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json(400, { ok: false, error: 'bad_request' });
  }

  const result = validate(body);
  if (!result.ok) {
    // Pretend success to bots that filled the honeypot.
    if (result.field === 'spam') return json(200, { ok: true });
    return json(400, { ok: false, error: result.code, field: result.field });
  }

  if (!(await turnstileOk(String(body['cf-turnstile-response'] ?? ''), ip))) {
    return json(400, { ok: false, error: 'captcha' });
  }

  const provider = getProvider();
  const secret = env('WAITLIST_SIGNING_SECRET');
  if (!provider || !secret) {
    // Local development without keys: accept without sending anything.
    if (import.meta.env.DEV) return json(200, { ok: true, dryRun: true });
    return json(503, { ok: false, error: 'not_configured' });
  }

  const site = env('PUBLIC_SITE_URL') || url.origin;
  const confirmUrl = new URL('/api/waitlist/confirm/', site);
  confirmUrl.searchParams.set('t', signToken(result.entry, secret));

  try {
    await provider.addPending(result.entry, confirmUrl.href);
  } catch (err) {
    console.error('[waitlist] provider error', err);
    return json(502, { ok: false, error: 'provider' });
  }

  // Non-JS fallback: plain form posts land on a page instead of raw JSON.
  if (!type.includes('application/json')) {
    return Response.redirect(
      new URL(`${localizedPath('early-access', result.entry.locale)}#sent`, site),
      303,
    );
  }
  return json(200, { ok: true });
};
