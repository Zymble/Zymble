import type { Locale } from '../config/routes';

/**
 * Contest simulator + per-view calculator data, per market.
 * Amounts are visitor-controlled simulations (sliders), always next to a note that
 * each streamer/campaign sets its own prize, rate and rules. Handles are fictional.
 */
export interface PrizeData {
  lang: string;
  currency: string;
  pool: number;
  min: number;
  max: number;
  step: number;
  split: number[];
  handles: string[];
  contest: string;
  host: string;
  total: string;
  you: string;
  join: string;
  note: string;
  slider: { clipper: string; streamer: string };
  calc: {
    rate: number;
    rateMin: number;
    rateMax: number;
    rateStep: number;
    labels: { views: string; rate: string; result: string; note: string };
  };
}

export const prize: Record<Locale, PrizeData> = {
  en: {
    lang: 'en-US',
    currency: 'USD',
    pool: 2000,
    min: 250,
    max: 10000,
    step: 50,
    split: [0.5, 0.3, 0.2],
    handles: ['@jaxxclips', '@mo.cuts', '@kenzclips'],
    contest: 'Contest',
    host: 'Play of the week · @nightlap',
    total: 'Prize pool',
    you: 'You?',
    join: 'Get in',
    note: 'Simulation. Each streamer sets the prize, deadline and rules.',
    slider: {
      clipper: 'Drag to see what each spot takes home',
      streamer: 'Drag to set your contest prize',
    },
    calc: {
      rate: 1,
      rateMin: 0.25,
      rateMax: 5,
      rateStep: 0.25,
      labels: {
        views: 'Your clip’s views',
        rate: 'Rate per 1,000 views (set by the streamer)',
        result: 'You earn',
        note: 'Simulation. Each campaign sets its own rate.',
      },
    },
  },
  'pt-br': {
    lang: 'pt-BR',
    currency: 'BRL',
    pool: 10000,
    min: 1000,
    max: 50000,
    step: 500,
    split: [0.5, 0.3, 0.2],
    handles: ['@cortesdorafa', '@duda.cortes', '@teteuclips'],
    contest: 'Campeonato',
    host: 'Melhor lance da semana · @lancedozeca',
    total: 'Prêmio total',
    you: 'Você?',
    join: 'Entrar na disputa',
    note: 'Simulação. Cada streamer define prêmio, prazo e regras.',
    slider: {
      clipper: 'Arraste e veja quanto vai pra cada posição',
      streamer: 'Arraste pra definir o prêmio do seu campeonato',
    },
    calc: {
      rate: 2,
      rateMin: 0.5,
      rateMax: 10,
      rateStep: 0.5,
      labels: {
        views: 'Views do seu corte',
        rate: 'Valor por mil views (o streamer define)',
        result: 'Você recebe',
        note: 'Simulação. O valor por mil views é definido em cada campanha.',
      },
    },
  },
  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    lang: 'es-419',
    currency: 'USD',
    pool: 2000,
    min: 250,
    max: 10000,
    step: 50,
    split: [0.5, 0.3, 0.2],
    handles: ['@clipsdelu', '@nico.cortes', '@valeclips'],
    contest: 'Torneo',
    host: 'Mejor jugada de la semana · @rutalu',
    total: 'Premio total',
    you: '¿Tú?',
    join: 'Entrar al torneo',
    note: 'Simulación. Cada streamer define premio, plazo y reglas.',
    slider: {
      clipper: 'Arrastra y mira cuánto se lleva cada puesto',
      streamer: 'Arrastra para definir el premio de tu torneo',
    },
    calc: {
      rate: 1,
      rateMin: 0.25,
      rateMax: 5,
      rateStep: 0.25,
      labels: {
        views: 'Views de tu clip',
        rate: 'Pago por mil views (lo define el streamer)',
        result: 'Recibes',
        note: 'Simulación. Cada campaña define su propio pago.',
      },
    },
  },
};
