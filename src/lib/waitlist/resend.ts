import { waitlistCopy } from '../../content/waitlist';
import type { WaitlistProvider } from './provider';

interface Config {
  apiKey: string;
  audienceId: string;
  from: string;
  notifyTo: string;
}

const API = 'https://api.resend.com';

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );

export function createResendProvider(cfg: Config): WaitlistProvider {
  async function call(path: string, method: string, body: unknown) {
    const res = await fetch(`${API}${path}`, {
      method,
      headers: { Authorization: `Bearer ${cfg.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    // 409/422 on an existing contact is fine: we still (re)send the confirmation.
    if (!res.ok && res.status !== 409 && res.status !== 422) {
      throw new Error(`Resend ${method} ${path} failed: ${res.status}`);
    }
  }

  return {
    async addPending(entry, confirmUrl) {
      await call(`/audiences/${cfg.audienceId}/contacts`, 'POST', {
        email: entry.email,
        unsubscribed: true,
      });
      const m = waitlistCopy[entry.locale].email;
      const html = `<!doctype html><html lang="${entry.locale}"><body style="margin:0;padding:24px;background:#F8FAFC;font-family:Inter,system-ui,sans-serif;color:#101828">
<table role="presentation" width="100%" style="max-width:520px;margin:auto;background:#FFFFFF;border:1px solid #C4CEDA;border-radius:12px"><tr><td style="padding:28px">
<p style="margin:0 0 16px;font-size:18px;font-weight:700">${esc(m.heading)}</p>
<p style="margin:0 0 24px;line-height:1.5">${esc(m.body)}</p>
<p style="margin:0 0 24px"><a href="${esc(confirmUrl)}" style="display:inline-block;background:#FF6B00;color:#101828;font-weight:700;text-decoration:none;padding:12px 18px;border-radius:6px;border:1px solid #101828">${esc(m.button)}</a></p>
<p style="margin:0;color:#536178;font-size:13px;line-height:1.5">${esc(m.ignore)}</p>
</td></tr></table></body></html>`;
      await call('/emails', 'POST', {
        from: cfg.from,
        to: entry.email,
        subject: m.subject,
        html,
        text: `${m.heading}\n\n${m.body}\n\n${confirmUrl}\n\n${m.ignore}`,
      });
    },

    async confirm(entry) {
      await call(
        `/audiences/${cfg.audienceId}/contacts/${encodeURIComponent(entry.email)}`,
        'PATCH',
        {
          unsubscribed: false,
        },
      );
      if (cfg.notifyTo) {
        await call('/emails', 'POST', {
          from: cfg.from,
          to: cfg.notifyTo,
          subject: `Waitlist: ${entry.profile} confirmed (${entry.locale})`,
          text: [
            `email: ${entry.email}`,
            `profile: ${entry.profile}`,
            `platform: ${entry.platform || '-'}`,
            `channel: ${entry.channel || '-'}`,
            `locale: ${entry.locale}`,
            `utm: ${entry.utm || '-'}`,
          ].join('\n'),
        });
      }
    },
  };
}
