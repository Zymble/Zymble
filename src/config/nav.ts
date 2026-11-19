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
  'use-cases/streamers',
  'use-cases/clippers',
  'use-cases/editors',
  'use-cases/agencies',
];

export const resourceRoutes: RouteId[] = ['blog', 'compare', 'changelog', 'brand'];

/** Header: Features ▾ · Use cases ▾ · Pricing · Resources ▾ */
export const headerNav: (NavGroup | { label: UiKey; route: RouteId })[] = [
  { label: 'nav.features', items: ['features', ...featureRoutes] },
  { label: 'nav.useCases', items: useCaseRoutes },
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
