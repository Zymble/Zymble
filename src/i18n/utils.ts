import {
  defaultLocale,
  localeMeta,
  localizedPath,
  locales,
  type Locale,
  type RouteId,
} from '../config/routes';
import { pageNames, ui, type UiKey } from './ui';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export function useTranslations(locale: Locale) {
  const t = (key: UiKey): string => ui[locale][key] ?? ui[defaultLocale][key];
  const page = (id: RouteId): string => pageNames[locale][id];
  const href = (id: RouteId): string => localizedPath(id, locale);
  return { t, page, href, locale, lang: localeMeta[locale].lang };
}

/** hreflang alternates for a route, including x-default (English). */
export function alternates(id: RouteId, siteUrl: string) {
  const list = locales.map((l) => ({
    hreflang: localeMeta[l].lang,
    href: new URL(localizedPath(id, l), siteUrl).href,
  }));
  list.push({
    hreflang: 'x-default',
    href: new URL(localizedPath(id, defaultLocale), siteUrl).href,
  });
  return list;
}
