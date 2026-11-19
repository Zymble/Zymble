import type { RouteId } from './routes';
import type { UiKey } from '../i18n/ui';

export interface NavGroup {
  label: UiKey;
  items: RouteId[];
}

export const featureRoutes: RouteId[] = [
  'features/ai-moments',
  'features/in-out-editor',
  'features/captions',
  'features/vertical-reframe',
  'features/scheduling',
  'features/analytics',
];

export const useCaseRoutes: RouteId[] = [
  'streamers',
  'clippers',
  'use-cases/editors',
  'use-cases/agencies',
];

export const resourceRoutes: RouteId[] = ['blog', 'compare', 'changelog', 'brand'];

/** Header: Streamers · Clippers · Features ▾ · Pricing · Resources ▾ (two-sided first). */
export const headerNav: (NavGroup | { label: UiKey; route: RouteId })[] = [
  { label: 'nav.streamers', route: 'streamers' },
  { label: 'nav.clippers', route: 'clippers' },
  { label: 'nav.features', items: ['features', ...featureRoutes] },
  { label: 'nav.pricing', route: 'pricing' },
  { label: 'nav.resources', items: resourceRoutes },
];

export const footerNav: NavGroup[] = [
  { label: 'footer.product', items: ['features', 'pricing', 'changelog', 'early-access'] },
  { label: 'footer.useCases', items: useCaseRoutes },
  { label: 'footer.resources', items: ['blog', 'compare', 'brand'] },
  { label: 'footer.company', items: ['about', 'contact'] },
  {
    label: 'footer.legal',
    items: ['legal/terms', 'legal/privacy', 'legal/cookies', 'legal/acceptable-use'],
  },
];
