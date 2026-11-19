import type { APIRoute } from 'astro';
import { site } from '@/config/site';

/** Previews and local builds block all crawlers; production allows them. */
export const GET: APIRoute = () => {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site.url).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
