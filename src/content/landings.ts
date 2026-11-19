import type { Locale } from '../config/routes';

/**
 * Side landings: /streamers/ and /clippers/, written per market.
 * v2 (owner feedback): minimal text. Each block = short title + one line + a visual.
 * Money only appears inside visitor-controlled simulators (see content/prize.ts).
 * Mechanics described (rewards per views/approved clip/campaign, contests, live radar,
 * affiliation, approval) must ship in the app.
 */
type Pair = [string, string];

export interface StreamerCopy {
  meta: { title: string; description: string };
  hero: { kicker: string; before: string; cut: string; after: string; sub: string; cta: string };
  crew: { title: string; sub: string };
  radar: {
    title: string;
    live: string;
    rows: {
      handle: string;
      clip: string;
      where: string;
      status: string;
      state: 'posted' | 'waiting' | 'editing';
    }[];
  };
  contest: { title: string; bullets: string[] };
  pay: { title: string; tiles: Pair[] };
  rules: { title: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  form: { title: string; lead: string };
}

export interface ClipperCopy {
  meta: { title: string; description: string };
  hero: { kicker: string; titleA: string; titleB: string; sub: string; cta: string };
  earn: {
    title: string;
    views: string;
    contest: Pair;
    offer: Pair;
    disclaimer: string;
  };
  steps: { title: string; items: string[] };
  statement: string;
  faq: { title: string; items: { q: string; a: string }[] };
  form: { title: string; lead: string };
}

export const streamerCopy: Record<Locale, StreamerCopy> = {
  en: {
    meta: {
      title: 'Got $20? Get clippers posting your stream — ClipyRush',
      description:
        'Set a prize, run clip contests and see who’s clipping your stream, live. Nothing goes out under your name without your rules.',
    },
    hero: {
      kicker: 'Just starting to stream?',
      before: 'Got',
      cut: '$20',
      after: '?',
      sub: 'Offer it to clippers to post your best plays on their channels. More people find you.',
      cta: 'Find my clippers',
    },
    crew: {
      title: 'A crew in your corner.',
      sub: 'Clippers cut your stream while you play, and you see it all live.',
    },
    radar: {
      title: 'Clipping you now',
      live: '02:14:07',
      rows: [
        {
          handle: '@jaxxclips',
          clip: 'The drift at the finish',
          where: 'TikTok',
          status: 'Posted',
          state: 'posted',
        },
        {
          handle: '@mo.cuts',
          clip: 'Rage quit on the final boss',
          where: 'Shorts',
          status: 'Waiting on you',
          state: 'waiting',
        },
        {
          handle: '@kenzclips',
          clip: 'Chat loses it',
          where: 'Reels',
          status: 'Editing',
          state: 'editing',
        },
      ],
    },
    contest: {
      title: 'Run your contest.',
      bullets: [
        'You set prize and deadline',
        'Public leaderboard',
        'Pay only for what you approve',
      ],
    },
    pay: {
      title: 'Pay for results.',
      tiles: [
        ['Per 1,000 views', 'You set the rate'],
        ['Per approved clip', 'Only what passes you'],
        ['Campaign', 'Fixed budget'],
      ],
    },
    rules: {
      title: 'Your name, your rules.',
      items: ['Approval before posting', 'Credit on every clip', 'You pick who clips'],
    },
    faq: {
      title: 'Streamer questions',
      items: [
        {
          q: 'How much do I need to start?',
          a: 'Start small: you set the campaign budget and pay only for approved clips. Final minimums come with early access.',
        },
        {
          q: 'Do I have to pay clippers?',
          a: 'No. Rewards and contests are optional, and you set the amounts and rules.',
        },
        {
          q: 'Who can clip my stream?',
          a: 'You choose: open it to every clipper on ClipyRush or only to people you invite.',
        },
        {
          q: 'Can clips go out without me seeing them?',
          a: 'Only if you want. You can require your approval before each clip is posted.',
        },
        {
          q: 'What does it cost for streamers?',
          a: 'Pricing comes out at launch. People on the list hear first.',
        },
      ],
    },
    form: { title: 'Save your channel’s spot', lead: 'We invite the first channels in waves.' },
  },

  'pt-br': {
    meta: {
      title: 'Tem R$ 100? Clipadores postam sua live — ClipyRush',
      description:
        'Ponha prêmio, abra campeonato de cortes e veja quem está clipando sua live, ao vivo. Nada sai com seu nome sem as suas regras.',
    },
    hero: {
      kicker: 'Tá começando na live?',
      before: 'Tem',
      cut: 'R$ 100',
      after: 'aí?',
      sub: 'Ofereça pra clipadores postarem seus melhores lances no canal deles. Mais gente te descobre.',
      cta: 'Achar meus clipadores',
    },
    crew: {
      title: 'Um time te assessorando.',
      sub: 'Clipadores cortam sua live enquanto você joga, e você vê tudo ao vivo.',
    },
    radar: {
      title: 'Te clipando agora',
      live: '02:14:07',
      rows: [
        {
          handle: '@cortesdorafa',
          clip: 'A curva no fim da etapa',
          where: 'TikTok',
          status: 'Postado',
          state: 'posted',
        },
        {
          handle: '@duda.cortes',
          clip: 'Rage quit no chefão',
          where: 'Shorts',
          status: 'Esperando você',
          state: 'waiting',
        },
        {
          handle: '@teteuclips',
          clip: 'Chat perdeu a linha',
          where: 'Reels',
          status: 'Editando',
          state: 'editing',
        },
      ],
    },
    contest: {
      title: 'Monte seu campeonato.',
      bullets: ['Você define prêmio e prazo', 'Ranking público', 'Paga só o que aprovar'],
    },
    pay: {
      title: 'Pague por resultado.',
      tiles: [
        ['Por mil views', 'Você define o valor'],
        ['Por corte aprovado', 'Só o que passar por você'],
        ['Campanha', 'Orçamento fechado'],
      ],
    },
    rules: {
      title: 'Seu nome, suas regras.',
      items: ['Aprovação antes de postar', 'Crédito em todo corte', 'Você escolhe quem clipa'],
    },
    faq: {
      title: 'Dúvidas de streamer',
      items: [
        {
          q: 'Quanto preciso pra começar?',
          a: 'Dá pra começar com pouco: você define o orçamento da campanha e paga só os cortes aprovados. O valor mínimo final sai com o acesso antecipado.',
        },
        {
          q: 'Preciso pagar os clipadores?',
          a: 'Não é obrigatório. Recompensas e campeonatos são opcionais, e você define valores e regras.',
        },
        {
          q: 'Quem pode clipar minha live?',
          a: 'Você escolhe: liberar pra todos os clipadores da ClipyRush ou só pra quem você convidar.',
        },
        {
          q: 'Os cortes saem sem eu ver?',
          a: 'Só se você quiser. Dá pra exigir sua aprovação antes de cada corte ir ao ar.',
        },
        {
          q: 'Quanto custa pra streamer?',
          a: 'Os preços saem no lançamento. Quem está na lista fica sabendo antes.',
        },
      ],
    },
    form: {
      title: 'Guarde o lugar do seu canal',
      lead: 'A gente chama os primeiros canais em levas.',
    },
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    meta: {
      title: '¿Tienes US$20? Clippers publican tu stream — ClipyRush',
      description:
        'Pon un premio, abre torneos de clips y mira quién clipea tu stream, en vivo. Nada sale con tu nombre sin tus reglas.',
    },
    hero: {
      kicker: '¿Estás empezando a hacer streams?',
      before: '¿Tienes',
      cut: 'US$20',
      after: '?',
      sub: 'Ofrécelo a clippers para que publiquen tus mejores jugadas en sus canales. Más gente te descubre.',
      cta: 'Encontrar mis clippers',
    },
    crew: {
      title: 'Un equipo de tu lado.',
      sub: 'Los clippers recortan tu stream mientras juegas, y tú lo ves todo en vivo.',
    },
    radar: {
      title: 'Clipeándote ahora',
      live: '02:14:07',
      rows: [
        {
          handle: '@clipsdelu',
          clip: 'La curva al final de la etapa',
          where: 'TikTok',
          status: 'Publicado',
          state: 'posted',
        },
        {
          handle: '@nico.cortes',
          clip: 'Rage quit en el jefe final',
          where: 'Shorts',
          status: 'Esperándote',
          state: 'waiting',
        },
        {
          handle: '@valeclips',
          clip: 'El chat se volvió loco',
          where: 'Reels',
          status: 'Editando',
          state: 'editing',
        },
      ],
    },
    contest: {
      title: 'Arma tu torneo.',
      bullets: ['Tú defines premio y plazo', 'Ranking público', 'Pagas solo lo que apruebas'],
    },
    pay: {
      title: 'Paga por resultados.',
      tiles: [
        ['Por mil views', 'Tú defines el valor'],
        ['Por clip aprobado', 'Solo lo que pase por ti'],
        ['Campaña', 'Presupuesto cerrado'],
      ],
    },
    rules: {
      title: 'Tu nombre, tus reglas.',
      items: ['Aprobación antes de publicar', 'Crédito en cada clip', 'Tú eliges quién clipea'],
    },
    faq: {
      title: 'Preguntas de streamers',
      items: [
        {
          q: '¿Cuánto necesito para empezar?',
          a: 'Puedes empezar con poco: tú defines el presupuesto de la campaña y pagas solo los clips aprobados. El mínimo final llega con el acceso anticipado.',
        },
        {
          q: '¿Tengo que pagar a los clippers?',
          a: 'No. Las recompensas y los torneos son opcionales, y tú defines montos y reglas.',
        },
        {
          q: '¿Quién puede clipear mi stream?',
          a: 'Tú eliges: abrirlo a todos los clippers de ClipyRush o solo a quienes invites.',
        },
        {
          q: '¿Los clips salen sin que los vea?',
          a: 'Solo si quieres. Puedes exigir tu aprobación antes de que cada clip se publique.',
        },
        {
          q: '¿Cuánto cuesta para streamers?',
          a: 'Los precios salen en el lanzamiento. Quienes están en la lista se enteran primero.',
        },
      ],
    },
    form: {
      title: 'Guarda el lugar de tu canal',
      lead: 'Invitamos a los primeros canales por tandas.',
    },
  },
};

export const clipperCopy: Record<Locale, ClipperCopy> = {
  en: {
    meta: {
      title: 'Clip streams live and compete for prizes — ClipyRush',
      description:
        'The AI flags plays live. You post, earn per view or approved clip and compete in contests streamers run. Results vary.',
    },
    hero: {
      kicker: 'Want to make extra money clipping from home?',
      titleA: 'Clipping is',
      titleB: 'a job now.',
      sub: 'The AI flags the play live. You post and race for the prize.',
      cta: 'Start clipping live',
    },
    earn: {
      title: 'Three ways to earn.',
      views: 'Per 1,000 views',
      contest: ['Contests', 'Prize for the top of the board.'],
      offer: ['Your channel pays', 'Streamers pay to get their clips on it.'],
      disclaimer: 'ClipyRush doesn’t guarantee income. Earnings depend on each streamer’s rules.',
    },
    steps: { title: 'Three taps.', items: ['Paste the link', 'Connect TikTok', 'Let it clip'] },
    statement: 'The biggest channels have people clipping them. Be one.',
    faq: {
      title: 'Clipper questions',
      items: [
        {
          q: 'Do I need to know video editing?',
          a: 'No. The AI flags the play, frames it 9:16 and captions it. You set the start and end and post.',
        },
        {
          q: 'How much can I make?',
          a: 'It depends on each streamer’s rewards and contests and on how many of your clips get approved. We don’t promise a fixed amount.',
        },
        {
          q: 'Can I clip any stream?',
          a: 'You clip the streams that streamers open on ClipyRush, following each channel’s rules.',
        },
        {
          q: 'Does the AI post for me?',
          a: 'No. You approve every clip with one tap before it goes out.',
        },
        {
          q: 'When does it start?',
          a: 'There’s no public date yet. People who join the list now get in first.',
        },
      ],
    },
    form: { title: 'Save your clipper spot', lead: 'We invite clippers in the first waves.' },
  },

  'pt-br': {
    meta: {
      title: 'Clipe lives ao vivo e dispute prêmios — ClipyRush',
      description:
        'A IA marca os lances ao vivo. Você posta, ganha por mil views ou por corte aprovado e disputa campeonatos dos streamers. Os resultados variam.',
    },
    hero: {
      kicker: 'Quer fazer uma renda extra clipando de casa?',
      titleA: 'Clipar virou',
      titleB: 'profissão.',
      sub: 'A IA marca o lance ao vivo. Você posta e disputa o prêmio.',
      cta: 'Clipar ao vivo',
    },
    earn: {
      title: 'Três jeitos de ganhar.',
      views: 'Por mil views',
      contest: ['Campeonatos', 'Prêmio pro topo do ranking.'],
      offer: ['Seu canal vale dinheiro', 'Streamers pagam pra aparecer nele.'],
      disclaimer: 'A ClipyRush não garante renda. Os ganhos dependem das regras de cada streamer.',
    },
    steps: { title: 'Três toques.', items: ['Cole o link', 'Conecte o TikTok', 'Deixe clipando'] },
    statement: 'Os maiores canais têm gente clipando. Seja um deles.',
    faq: {
      title: 'Dúvidas de clipador',
      items: [
        {
          q: 'Preciso saber editar vídeo?',
          a: 'Não. A IA marca o lance, enquadra em 9:16 e legenda. Você ajusta o começo e o fim e posta.',
        },
        {
          q: 'Quanto dá pra ganhar?',
          a: 'Depende das recompensas e dos campeonatos de cada streamer e de quantos cortes seus forem aprovados. Não prometemos valor fixo.',
        },
        {
          q: 'Posso clipar qualquer live?',
          a: 'Você clipa as lives que os streamers liberam na ClipyRush, seguindo as regras de cada canal.',
        },
        {
          q: 'A IA posta por mim?',
          a: 'Não. Você aprova cada corte com um toque antes de ir ao ar.',
        },
        {
          q: 'Quando começa?',
          a: 'Ainda não tem data pública. Quem entra na lista agora é chamado primeiro.',
        },
      ],
    },
    form: {
      title: 'Garanta seu lugar de clipador',
      lead: 'A gente chama clipadores nas primeiras levas.',
    },
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    meta: {
      title: 'Clipea streams en vivo y compite por premios — ClipyRush',
      description:
        'La IA marca las jugadas en vivo. Publicas, ganas por mil views o por clip aprobado y compites en torneos de streamers. Los resultados varían.',
    },
    hero: {
      kicker: '¿Quieres ganar un extra clipeando desde casa?',
      titleA: 'Clipear ya es',
      titleB: 'un trabajo.',
      sub: 'La IA marca la jugada en vivo. Tú publicas y compites por el premio.',
      cta: 'Clipear en vivo',
    },
    earn: {
      title: 'Tres formas de ganar.',
      views: 'Por mil views',
      contest: ['Torneos', 'Premio para el top del ranking.'],
      offer: ['Tu canal vale dinero', 'Los streamers pagan por aparecer en él.'],
      disclaimer:
        'ClipyRush no garantiza ingresos. Las ganancias dependen de las reglas de cada streamer.',
    },
    steps: {
      title: 'Tres toques.',
      items: ['Pega el enlace', 'Conecta TikTok', 'Déjalo clipeando'],
    },
    statement: 'Los canales más grandes tienen gente clipeándolos. Sé uno de ellos.',
    faq: {
      title: 'Preguntas de clippers',
      items: [
        {
          q: '¿Necesito saber editar video?',
          a: 'No. La IA marca la jugada, la encuadra en 9:16 y le pone subtítulos. Tú ajustas el inicio y el final y publicas.',
        },
        {
          q: '¿Cuánto puedo ganar?',
          a: 'Depende de las recompensas y los torneos de cada streamer y de cuántos de tus clips se aprueben. No prometemos un monto fijo.',
        },
        {
          q: '¿Puedo clipear cualquier stream?',
          a: 'Clipeas los streams que los streamers abren en ClipyRush, siguiendo las reglas de cada canal.',
        },
        {
          q: '¿La IA publica por mí?',
          a: 'No. Apruebas cada clip con un toque antes de que salga.',
        },
        {
          q: '¿Cuándo empieza?',
          a: 'Todavía no hay fecha pública. Quienes se anotan ahora entran primero.',
        },
      ],
    },
    form: {
      title: 'Guarda tu lugar de clipper',
      lead: 'Invitamos a clippers en las primeras tandas.',
    },
  },
};
