import type { Locale } from '../config/routes';

/**
 * Side landings: /streamers/ and /clippers/, written per market.
 * Earnings language follows the honesty rules: no guaranteed income, no "effortless money";
 * every earnings mention sits next to a plain disclaimer. Mechanics described here
 * (rewards, contests, live radar, affiliation, approval) must ship in the app.
 */
type Pair = [string, string];

export interface StreamerCopy {
  meta: { title: string; description: string };
  hero: { kicker: string; titleA: string; titleB: string; lead: string; cta: string };
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
    reward: Pair;
    contest: Pair;
  };
  levers: {
    title: string;
    reward: { name: string; title: string; body: string; rows: Pair[] };
    contest: {
      name: string;
      title: string;
      body: string;
      board: string;
      meta: string;
      rows: Pair[];
    };
    radar: { name: string; title: string; body: string; rows: [string, string, string][] };
  };
  rules: { title: string; items: Pair[] };
  faq: { title: string; items: { q: string; a: string }[] };
  form: { title: string; lead: string };
}

export interface ClipperCopy {
  meta: { title: string; description: string };
  hero: { kicker: string; titleA: string; titleB: string; lead: string; cta: string; note: string };
  floaters: { reward: Pair; contest: Pair; affiliate: Pair };
  steps: { title: string; items: Pair[] };
  earn: { title: string; items: Pair[]; disclaimer: string };
  statement: { line: string; sub: string };
  faq: { title: string; items: { q: string; a: string }[] };
  form: { title: string; lead: string };
}

export const streamerCopy: Record<Locale, StreamerCopy> = {
  en: {
    meta: {
      title: 'Put a clipping crew on your stream — ClipyRush',
      description:
        'Set rewards, run clip contests and watch live who’s clipping your stream and where every clip landed. Nothing goes out under your name without your rules.',
    },
    hero: {
      kicker: 'For streamers on Twitch, YouTube and Kick',
      titleA: 'Put a clipping crew',
      titleB: 'on your stream.',
      lead: 'Set rewards, run clip contests and watch live who’s clipping you and where every clip landed. Nothing goes out under your name without passing your rules.',
      cta: 'Find my clippers',
    },
    radar: {
      title: 'Clipping your stream now',
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
      reward: ['Active reward', 'You set it · per approved clip'],
      contest: ['Contest', 'Play of the week · ends Sunday'],
    },
    levers: {
      title: 'Three levers that stay with you.',
      reward: {
        name: 'Rewards',
        title: 'Pay for clips that land.',
        body: 'Set what you pay per approved clip or run a campaign with a fixed budget. You approve before anyone gets paid.',
        rows: [
          ['Per approved clip', 'You set it'],
          ['Campaign', 'Fixed budget'],
          ['Payout', 'Only after your approval'],
        ],
      },
      contest: {
        name: 'Clip contests',
        title: 'Turn clipping into a competition.',
        body: 'Open a contest with a prize, a deadline and your criteria. Clippers compete and the leaderboard is public.',
        board: 'Play of the week',
        meta: 'Prize and criteria set by you',
        rows: [
          ['@jaxxclips', '12 clips'],
          ['@mo.cuts', '9 clips'],
          ['@kenzclips', '7 clips'],
        ],
      },
      radar: {
        name: 'Live radar',
        title: 'See who’s clipping you, right now.',
        body: 'During the stream, follow who’s cutting, what’s already posted and on which platform.',
        rows: [
          ['TikTok', '@jaxxclips', '2 min ago'],
          ['Shorts', '@mo.cuts', '5 min ago'],
          ['Reels', '@kenzclips', '9 min ago'],
        ],
      },
    },
    rules: {
      title: 'Your name, your rules.',
      items: [
        ['Approval', 'Choose whether every clip goes through you before it’s posted.'],
        ['Credit', 'Every clip carries your channel name and the stream timecode.'],
        ['Who can clip', 'Open it to every clipper on ClipyRush or only to people you invite.'],
      ],
    },
    faq: {
      title: 'Streamer questions',
      items: [
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
    form: {
      title: 'Save your channel’s spot',
      lead: 'Leave your email and where you stream. We’ll invite the first channels in waves.',
    },
  },

  'pt-br': {
    meta: {
      title: 'Um time de clipadores na sua live — ClipyRush',
      description:
        'Ponha recompensas, abra campeonatos de cortes e veja ao vivo quem está clipando sua live e onde cada corte foi parar. Nada sai com seu nome sem as suas regras.',
    },
    hero: {
      kicker: 'Pra quem faz live na Twitch, YouTube e Kick',
      titleA: 'Coloque um time de clipadores',
      titleB: 'na sua live.',
      lead: 'Ponha recompensas, abra campeonatos de cortes e veja ao vivo quem está te clipando e onde cada corte foi parar. Nada sai com o seu nome sem passar pelas suas regras.',
      cta: 'Achar meus clipadores',
    },
    radar: {
      title: 'Clipando sua live agora',
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
      reward: ['Recompensa ativa', 'Você define · por corte aprovado'],
      contest: ['Campeonato', 'Melhor lance da semana · até domingo'],
    },
    levers: {
      title: 'Três alavancas que ficam com você.',
      reward: {
        name: 'Recompensas',
        title: 'Pague por corte que presta.',
        body: 'Defina quanto paga por corte aprovado ou monte uma campanha com orçamento fechado. Você aprova antes de qualquer pagamento.',
        rows: [
          ['Por corte aprovado', 'Você define'],
          ['Campanha', 'Orçamento fechado'],
          ['Pagamento', 'Só depois da sua aprovação'],
        ],
      },
      contest: {
        name: 'Campeonatos',
        title: 'Transforme corte em disputa.',
        body: 'Abra um campeonato com prêmio, prazo e o seu critério. Os clipadores disputam e o ranking fica à vista de todo mundo.',
        board: 'Melhor lance da semana',
        meta: 'Prêmio e critério definidos por você',
        rows: [
          ['@cortesdorafa', '12 cortes'],
          ['@duda.cortes', '9 cortes'],
          ['@teteuclips', '7 cortes'],
        ],
      },
      radar: {
        name: 'Radar ao vivo',
        title: 'Veja quem te clipa, na hora.',
        body: 'Durante a live, acompanhe quem está cortando, o que já foi postado e em qual rede.',
        rows: [
          ['TikTok', '@cortesdorafa', 'há 2 min'],
          ['Shorts', '@duda.cortes', 'há 5 min'],
          ['Reels', '@teteuclips', 'há 9 min'],
        ],
      },
    },
    rules: {
      title: 'Seu nome, suas regras.',
      items: [
        ['Aprovação', 'Escolha se cada corte passa por você antes de ir ao ar.'],
        ['Crédito', 'Todo corte leva o nome do canal e o timecode da live.'],
        [
          'Quem pode clipar',
          'Abra pra todos os clipadores da ClipyRush ou só pra quem você convidar.',
        ],
      ],
    },
    faq: {
      title: 'Dúvidas de streamer',
      items: [
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
      lead: 'Deixe seu e-mail e onde você faz live. A gente chama os primeiros canais em levas.',
    },
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    meta: {
      title: 'Un equipo de clippers en tu stream — ClipyRush',
      description:
        'Pon recompensas, abre torneos de clips y mira en vivo quién clipea tu stream y dónde terminó cada clip. Nada sale con tu nombre sin tus reglas.',
    },
    hero: {
      kicker: 'Para quien hace streams en Twitch, YouTube y Kick',
      titleA: 'Pon un equipo de clippers',
      titleB: 'en tu stream.',
      lead: 'Pon recompensas, abre torneos de clips y mira en vivo quién te está clipeando y dónde terminó cada clip. Nada sale con tu nombre sin pasar por tus reglas.',
      cta: 'Encontrar mis clippers',
    },
    radar: {
      title: 'Clipeando tu stream ahora',
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
      reward: ['Recompensa activa', 'Tú la defines · por clip aprobado'],
      contest: ['Torneo', 'Mejor jugada de la semana · hasta el domingo'],
    },
    levers: {
      title: 'Tres palancas que quedan en tus manos.',
      reward: {
        name: 'Recompensas',
        title: 'Paga por clips que funcionan.',
        body: 'Define cuánto pagas por clip aprobado o arma una campaña con presupuesto cerrado. Apruebas antes de cualquier pago.',
        rows: [
          ['Por clip aprobado', 'Tú lo defines'],
          ['Campaña', 'Presupuesto cerrado'],
          ['Pago', 'Solo después de tu aprobación'],
        ],
      },
      contest: {
        name: 'Torneos',
        title: 'Convierte los clips en competencia.',
        body: 'Abre un torneo con premio, plazo y tu criterio. Los clippers compiten y el ranking es público.',
        board: 'Mejor jugada de la semana',
        meta: 'Premio y criterio definidos por ti',
        rows: [
          ['@clipsdelu', '12 clips'],
          ['@nico.cortes', '9 clips'],
          ['@valeclips', '7 clips'],
        ],
      },
      radar: {
        name: 'Radar en vivo',
        title: 'Mira quién te clipea, al momento.',
        body: 'Durante el stream, sigue quién está recortando, qué ya se publicó y en qué red.',
        rows: [
          ['TikTok', '@clipsdelu', 'hace 2 min'],
          ['Shorts', '@nico.cortes', 'hace 5 min'],
          ['Reels', '@valeclips', 'hace 9 min'],
        ],
      },
    },
    rules: {
      title: 'Tu nombre, tus reglas.',
      items: [
        ['Aprobación', 'Elige si cada clip pasa por ti antes de publicarse.'],
        ['Crédito', 'Cada clip lleva el nombre de tu canal y el timecode del stream.'],
        [
          'Quién puede clipear',
          'Ábrelo a todos los clippers de ClipyRush o solo a quienes invites.',
        ],
      ],
    },
    faq: {
      title: 'Preguntas de streamers',
      items: [
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
      lead: 'Deja tu correo y dónde haces streams. Invitaremos a los primeros canales por tandas.',
    },
  },
};

export const clipperCopy: Record<Locale, ClipperCopy> = {
  en: {
    meta: {
      title: 'Clip streams live, earn from rewards and contests — ClipyRush',
      description:
        'Paste a channel link, connect your TikTok and let the AI flag plays live. Approve with one tap and earn from the rewards and contests streamers set up. Results vary.',
    },
    hero: {
      kicker: 'Want to make extra money clipping from home?',
      titleA: 'Clipping is a job now.',
      titleB: 'The AI does the boring part.',
      lead: 'Paste a channel link, connect your TikTok and let the AI flag the plays while the stream is live. Approve with one tap, post, and earn from the rewards and contests streamers set up.',
      cta: 'Start clipping live',
      note: 'Results vary. Earnings depend on each streamer’s and contest’s rules.',
    },
    floaters: {
      reward: ['Reward · jaxx', 'per approved clip'],
      contest: ['Contest · Play of the week', 'You’re in 3rd'],
      affiliate: ['Official clipper', 'mo_plays'],
    },
    steps: {
      title: 'From link to first clip in three steps.',
      items: [
        ['Paste the channel link', 'Twitch, YouTube or Kick. Pick the streams you want to follow.'],
        [
          'Connect your account',
          'TikTok, YouTube Shorts or Instagram Reels, to post straight from here.',
        ],
        [
          'Let it clip',
          'The AI flags plays live and hands them over in 9:16 with captions. You approve with one tap.',
        ],
      ],
    },
    earn: {
      title: 'How you earn',
      items: [
        [
          'Rewards',
          'Streamers set what they pay per approved clip or run campaigns. You see the rules before you start.',
        ],
        [
          'Clip contests',
          'Contests with a prize and a deadline, run by streamers. The leaderboard is public.',
        ],
        ['Affiliation', 'Become a channel’s official clipper and get your name on their crew.'],
      ],
      disclaimer:
        'ClipyRush doesn’t guarantee income. Earnings depend on each streamer’s and contest’s rules, and on your work.',
    },
    statement: {
      line: 'The biggest channels have people clipping them. Be one.',
      sub: 'The edge is posting while the play is still hot.',
    },
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
    form: {
      title: 'Save your clipper spot',
      lead: 'Leave your email and where you post. We’ll invite clippers in the first waves.',
    },
  },

  'pt-br': {
    meta: {
      title: 'Clipe lives ao vivo e ganhe com recompensas — ClipyRush',
      description:
        'Cole o link do canal, conecte seu TikTok e deixe a IA marcando os lances ao vivo. Aprove com um toque e ganhe com recompensas e campeonatos dos streamers. Os resultados variam.',
    },
    hero: {
      kicker: 'Quer fazer uma renda extra clipando de casa?',
      titleA: 'Clipar virou profissão.',
      titleB: 'A IA faz a parte chata.',
      lead: 'Cole o link do canal, conecte seu TikTok e deixe a IA marcando os lances enquanto a live rola. Você aprova com um toque, posta e ganha com as recompensas e os campeonatos que os streamers criam.',
      cta: 'Clipar ao vivo',
      note: 'Os resultados variam. Os ganhos dependem das regras de cada streamer e de cada campeonato.',
    },
    floaters: {
      reward: ['Recompensa · rafa_gg', 'por corte aprovado'],
      contest: ['Campeonato · Melhor lance', 'Você está em 3º'],
      affiliate: ['Clipador oficial', 'duda.joga'],
    },
    steps: {
      title: 'Do link ao primeiro corte em três passos.',
      items: [
        [
          'Cole o link do canal',
          'Twitch, YouTube ou Kick. Escolha as lives que você quer acompanhar.',
        ],
        [
          'Conecte sua conta',
          'TikTok, YouTube Shorts ou Instagram Reels, pra postar direto daqui.',
        ],
        [
          'Deixe clipando',
          'A IA marca os lances ao vivo e entrega em 9:16, legendado. Você aprova com um toque.',
        ],
      ],
    },
    earn: {
      title: 'Como você ganha',
      items: [
        [
          'Recompensas',
          'Streamers definem quanto pagam por corte aprovado ou abrem campanhas. Você vê as regras antes de começar.',
        ],
        [
          'Campeonatos',
          'Disputas de cortes com prêmio e prazo, criadas pelos streamers. O ranking fica à vista.',
        ],
        ['Afiliação', 'Vire clipador oficial de um canal e tenha seu nome no time dele.'],
      ],
      disclaimer:
        'A ClipyRush não garante renda. Os ganhos dependem das regras de cada streamer e de cada campeonato, e do seu trabalho.',
    },
    statement: {
      line: 'Os maiores canais têm gente clipando. Seja um deles.',
      sub: 'A diferença é postar enquanto o lance ainda está quente.',
    },
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
      lead: 'Deixe seu e-mail e onde você posta. A gente chama clipadores nas primeiras levas.',
    },
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    meta: {
      title: 'Clipea streams en vivo y gana con recompensas — ClipyRush',
      description:
        'Pega el enlace del canal, conecta tu TikTok y deja que la IA marque las jugadas en vivo. Aprueba con un toque y gana con recompensas y torneos de los streamers. Los resultados varían.',
    },
    hero: {
      kicker: '¿Quieres ganar un extra clipeando desde casa?',
      titleA: 'Clipear ya es un trabajo.',
      titleB: 'La IA hace la parte aburrida.',
      lead: 'Pega el enlace del canal, conecta tu TikTok y deja que la IA marque las jugadas mientras el stream está en vivo. Apruebas con un toque, publicas y ganas con las recompensas y los torneos que crean los streamers.',
      cta: 'Clipear en vivo',
      note: 'Los resultados varían. Las ganancias dependen de las reglas de cada streamer y de cada torneo.',
    },
    floaters: {
      reward: ['Recompensa · lu_pro', 'por clip aprobado'],
      contest: ['Torneo · Mejor jugada', 'Vas en 3.er lugar'],
      affiliate: ['Clipper oficial', 'nico.juega'],
    },
    steps: {
      title: 'Del enlace al primer clip en tres pasos.',
      items: [
        [
          'Pega el enlace del canal',
          'Twitch, YouTube o Kick. Elige los streams que quieres seguir.',
        ],
        [
          'Conecta tu cuenta',
          'TikTok, YouTube Shorts o Instagram Reels, para publicar directo desde aquí.',
        ],
        [
          'Déjalo clipeando',
          'La IA marca las jugadas en vivo y te las entrega en 9:16 con subtítulos. Apruebas con un toque.',
        ],
      ],
    },
    earn: {
      title: 'Cómo ganas',
      items: [
        [
          'Recompensas',
          'Los streamers definen cuánto pagan por clip aprobado o abren campañas. Ves las reglas antes de empezar.',
        ],
        [
          'Torneos',
          'Competencias de clips con premio y plazo, creadas por los streamers. El ranking es público.',
        ],
        [
          'Afiliación',
          'Conviértete en clipper oficial de un canal y lleva tu nombre en su equipo.',
        ],
      ],
      disclaimer:
        'ClipyRush no garantiza ingresos. Las ganancias dependen de las reglas de cada streamer y de cada torneo, y de tu trabajo.',
    },
    statement: {
      line: 'Los canales más grandes tienen gente clipeándolos. Sé uno de ellos.',
      sub: 'La ventaja es publicar mientras la jugada sigue caliente.',
    },
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
      lead: 'Deja tu correo y dónde publicas. Invitaremos a clippers en las primeras tandas.',
    },
  },
};
