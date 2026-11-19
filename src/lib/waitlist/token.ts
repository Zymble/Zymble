import { createHmac, timingSafeEqual } from 'node:crypto';
import type { WaitlistEntry } from './schema';

/** Signed, expiring confirmation token: base64url(payload).base64url(hmac). No database needed. */
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

const b64 = (b: Buffer | string) => Buffer.from(b).toString('base64url');

export function signToken(entry: WaitlistEntry, secret: string, now = Date.now()): string {
  const payload = b64(JSON.stringify({ ...entry, exp: now + TTL_MS }));
  const mac = b64(createHmac('sha256', secret).update(payload).digest());
  return `${payload}.${mac}`;
}

export function verifyToken(token: string, secret: string, now = Date.now()): WaitlistEntry | null {
  const [payload, mac] = token.split('.');
  if (!payload || !mac) return null;
  const expected = createHmac('sha256', secret).update(payload).digest();
  const given = Buffer.from(mac, 'base64url');
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString()) as WaitlistEntry & {
      exp: number;
    };
    if (typeof data.exp !== 'number' || data.exp < now) return null;
    const entry: WaitlistEntry & { exp?: number } = { ...data };
    delete entry.exp;
    return entry;
  } catch {
    return null;
  }
}
