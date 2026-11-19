/**
 * Single source of truth for every page of the marketing site.
 * Slugs are shared across locales (English slugs, locale prefix only).
 * `status: 'soon'` renders the "coming soon" template with noindex
 * and keeps the page out of the sitemap.
 *
 * Imported by astro.config.mjs, so keep this file free of path aliases.
 */
export const locales = ['en', 'pt-br', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** BCP 47 tags for <html lang>, hreflang and og:locale. */
export const localeMeta: Record<
  Locale,
  { lang: string; og: string; label: string; short: string }
> = {
  en: { lang: 'en', og: 'en_US', label: 'English', short: 'EN' },
  'pt-br': { lang: 'pt-BR', og: 'pt_BR', label: 'Português (Brasil)', short: 'PT' },
  es: { lang: 'es', og: 'es_ES', label: 'Español', short: 'ES' },
};

export const routeIds = [
  'home',
  'streamers',
  'clippers',
  'features',
  'features/ai-moments',
  'features/in-out-editor',
  'features/captions',
  'features/vertical-reframe',
  'features/scheduling',
  'features/analytics',
  'use-cases/editors',
  'use-cases/agencies',
  'pricing',
  'blog',
  'compare',
  'changelog',
  'about',
  'brand',
  'early-access',
  'early-access/confirmed',
  'contact',
  'legal/terms',
  'legal/privacy',
  'legal/cookies',
  'legal/acceptable-use',
] as const;
export type RouteId = (typeof routeIds)[number];

/** live = real page, indexable · hidden = real page, noindex, not in sitemap · soon = placeholder. */
export type RouteStatus = 'live' | 'hidden' | 'soon';

const liveRoutes: RouteId[] = ['home', 'streamers', 'clippers', 'early-access'];
const hiddenRoutes: RouteId[] = ['early-access/confirmed'];

/** Flip a route to 'live' when its page ships. */
export const routeStatus: Record<RouteId, RouteStatus> = Object.fromEntries(
  routeIds.map((id) => [
    id,
    liveRoutes.includes(id) ? 'live' : hiddenRoutes.includes(id) ? 'hidden' : 'soon',
  ]),
) as Record<RouteId, RouteStatus>;

/** Path without locale prefix, with leading and trailing slash. */
export function routePath(id: RouteId): string {
  return id === 'home' ? '/' : `/${id}/`;
}

/** Localized path: `/pricing/` (en) or `/pt-br/pricing/`. */
export function localizedPath(id: RouteId, locale: Locale): string {
  const path = routePath(id);
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

export const indexablePaths: string[] = routeIds
  .filter((id) => routeStatus[id] === 'live')
  .flatMap((id) => locales.map((l) => localizedPath(id, l)));
