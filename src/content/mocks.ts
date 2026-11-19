import type { Locale } from '../config/routes';

/**
 * Data for static product screens (how the platform will look), per market.
 * Handles and channels are fictional; amounts are what a streamer could set.
 * Money is pre-formatted per market (BRL in pt-br, USD in en/es).
 */
export interface MockData {
  app: { tabs: string[] };
  contest: {
    tag: string;
    host: string;
    total: string;
    pool: string;
    rows: { handle: string; amount: string; share: number }[];
    you: string;
    join: string;
  };
  campaign: {
    streamer: string;
    title: string;
    rate: string;
    rateLabel: string;
    budgetLabel: string;
    left: string;
    of: string;
    progress: number;
    platforms: string[];
    join: string;
  };
  boost: {
    title: string;
    budgetLabel: string;
    budget: string;
    perClip: string;
    interested: string;
    rows: { handle: string; size: string; where: string }[];
    accept: string;
  };
  offer: { from: string; text: string; amount: string; accept: string };
}

export const mocks: Record<Locale, MockData> = {
  en: {
    app: { tabs: ['Campaigns', 'Contests', 'Wallet'] },
    contest: {
      tag: 'Contest',
      host: 'Play of the week · @nightlap',
      total: 'Prize pool',
      pool: '$2,000',
      rows: [
        { handle: '@jaxxclips', amount: '$1,000', share: 1 },
        { handle: '@mo.cuts', amount: '$600', share: 0.6 },
        { handle: '@kenzclips', amount: '$400', share: 0.4 },
      ],
      you: 'You?',
      join: 'Get in',
    },
    campaign: {
      streamer: '@nightlap',
      title: 'Clip my Friday streams',
      rate: '$1.00',
      rateLabel: 'per 1K views',
      budgetLabel: 'Budget left',
      left: '$640',
      of: 'of $1,000',
      progress: 0.64,
      platforms: ['TikTok', 'Shorts', 'Reels'],
      join: 'Join campaign',
    },
    boost: {
      title: 'New campaign',
      budgetLabel: 'Budget',
      budget: '$20',
      perClip: '$5 per approved clip',
      interested: 'Clippers who want in',
      rows: [
        { handle: '@jaxxclips', size: '182K followers', where: 'TikTok' },
        { handle: '@mo.cuts', size: '96K subscribers', where: 'Shorts' },
        { handle: '@kenzclips', size: '41K followers', where: 'Reels' },
      ],
      accept: 'Accept',
    },
    offer: {
      from: '@nightlap',
      text: 'wants 4 clips on your TikTok',
      amount: '$20',
      accept: 'Accept offer',
    },
  },
  'pt-br': {
    app: { tabs: ['Campanhas', 'Campeonatos', 'Carteira'] },
    contest: {
      tag: 'Campeonato',
      host: 'Melhor lance da semana · @lancedozeca',
      total: 'Prêmio total',
      pool: 'R$ 10.000',
      rows: [
        { handle: '@cortesdorafa', amount: 'R$ 5.000', share: 1 },
        { handle: '@duda.cortes', amount: 'R$ 3.000', share: 0.6 },
        { handle: '@teteuclips', amount: 'R$ 2.000', share: 0.4 },
      ],
      you: 'Você?',
      join: 'Entrar na disputa',
    },
    campaign: {
      streamer: '@lancedozeca',
      title: 'Clipe minhas lives de sexta',
      rate: 'R$ 2,00',
      rateLabel: 'por mil views',
      budgetLabel: 'Orçamento restante',
      left: 'R$ 3.200',
      of: 'de R$ 5.000',
      progress: 0.64,
      platforms: ['TikTok', 'Shorts', 'Reels'],
      join: 'Entrar na campanha',
    },
    boost: {
      title: 'Nova campanha',
      budgetLabel: 'Orçamento',
      budget: 'R$ 100',
      perClip: 'R$ 25 por corte aprovado',
      interested: 'Clipadores querendo entrar',
      rows: [
        { handle: '@cortesdorafa', size: '182 mil seguidores', where: 'TikTok' },
        { handle: '@duda.cortes', size: '96 mil inscritos', where: 'Shorts' },
        { handle: '@teteuclips', size: '41 mil seguidores', where: 'Reels' },
      ],
      accept: 'Aceitar',
    },
    offer: {
      from: '@lancedozeca',
      text: 'quer 4 cortes no seu TikTok',
      amount: 'R$ 100',
      accept: 'Aceitar oferta',
    },
  },
  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    app: { tabs: ['Campañas', 'Torneos', 'Billetera'] },
    contest: {
      tag: 'Torneo',
      host: 'Mejor jugada de la semana · @rutalu',
      total: 'Premio total',
      pool: 'US$2.000',
      rows: [
        { handle: '@clipsdelu', amount: 'US$1.000', share: 1 },
        { handle: '@nico.cortes', amount: 'US$600', share: 0.6 },
        { handle: '@valeclips', amount: 'US$400', share: 0.4 },
      ],
      you: '¿Tú?',
      join: 'Entrar al torneo',
    },
    campaign: {
      streamer: '@rutalu',
      title: 'Clipea mis streams del viernes',
      rate: 'US$1,00',
      rateLabel: 'por mil views',
      budgetLabel: 'Presupuesto restante',
      left: 'US$640',
      of: 'de US$1.000',
      progress: 0.64,
      platforms: ['TikTok', 'Shorts', 'Reels'],
      join: 'Unirme a la campaña',
    },
    boost: {
      title: 'Nueva campaña',
      budgetLabel: 'Presupuesto',
      budget: 'US$20',
      perClip: 'US$5 por clip aprobado',
      interested: 'Clippers que quieren entrar',
      rows: [
        { handle: '@clipsdelu', size: '182 mil seguidores', where: 'TikTok' },
        { handle: '@nico.cortes', size: '96 mil suscriptores', where: 'Shorts' },
        { handle: '@valeclips', size: '41 mil seguidores', where: 'Reels' },
      ],
      accept: 'Aceptar',
    },
    offer: {
      from: '@rutalu',
      text: 'quiere 4 clips en tu TikTok',
      amount: 'US$20',
      accept: 'Aceptar oferta',
    },
  },
};
