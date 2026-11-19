import type { Locale, RouteId } from '../config/routes';

/**
 * Home page copy, written per market (see docs/LOCALIZATION.md):
 * en = US creators, pt-br = Brazilian creators, es = Spanish-speaking creators (LatAm neutral).
 *
 * Positioning (2026-11-19, owner): two-sided. Streamers find their clipper; clippers clip
 * live and post while the moment is hot. Hook: "Don't miss the moment. Clip it live."
 * Rules: concrete over generic, no virality or earnings promises, no invented results.
 * Channel names in UI mocks are obviously fictional handles.
 */
type Door = { who: string; action: string };

export interface HomeCopy {
  meta: { description: string };
  hero: {
    kicker: string;
    titleA: string;
    titleB: string;
    lead: string;
    note: string;
    worksWith: string;
  };
  doors: { streamer: Door; clipper: Door };
  stage: {
    label: string;
    liveTime: string;
    clipLen: string;
    hud: { pos: string; lap: string; speed: string };
    chat: [string, string][];
    caption: [string, string];
    log: { tc: string; text: string }[];
    post: string;
    postWhen: string;
    pause: string;
    play: string;
  };
  sides: {
    title: string;
    streamer: { who: string; steps: string[] };
    clipper: { who: string; steps: string[] };
  };
  clippers: {
    title: string;
    body: string;
    points: { title: string; body: string }[];
    queueTitle: string;
    queue: {
      channel: string;
      title: string;
      why: string;
      len: string;
      status: string;
      state: 'live' | 'ready' | 'posted';
    }[];
    clipSource: string;
  };
  inout: {
    title: string;
    body: string;
    hint: string;
    clips: { title: string; why: string }[];
    inLabel: string;
    outLabel: string;
    duration: string;
    save: string;
    saved: string;
    disclaimer: string;
    aiLabel: string;
    youLabel: string;
  };
  features: {
    title: string;
    items: { id: RouteId; title: string; body: string }[];
    more: string;
  };
  personas: {
    title: string;
    items: { id: RouteId; who: string; problem: string; answer: string; link: string }[];
  };
  pricing: { title: string; body: string; note: string; link: string };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string };
  sticky: { streamer: string; clipper: string };
}

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      description:
        'Clip streams live. ClipyRush flags the plays as they happen and hands over the moment in 9:16 with captions. Streamers find their clipper; clippers cut and post while it’s hot.',
    },
    hero: {
      kicker: 'Live stream clipping for TikTok, Shorts and Reels',
      titleA: 'Don’t miss the moment.',
      titleB: 'Clip it live.',
      lead: 'While the stream is still going, ClipyRush flags the plays and hands over the moment in 9:16 with captions. Streamers find their clipper. Clippers cut and post while the moment is still hot.',
      note: 'We haven’t launched yet. Pick your side and you’re on the list.',
      worksWith:
        'Twitch, YouTube and Kick, live or recorded. Posts to TikTok, YouTube Shorts and Instagram Reels.',
    },
    doors: {
      streamer: { who: 'I stream', action: 'Find my clipper' },
      clipper: { who: 'I clip', action: 'Start clipping live' },
    },
    stage: {
      label: 'How a play in a live stream becomes a posted clip',
      liveTime: '02:14:07',
      clipLen: '0:38',
      hud: { pos: 'P1', lap: 'STAGE 3/5', speed: '148 mph' },
      chat: [
        ['jaxx', 'NO SHOT'],
        ['mo_plays', 'KEKW KEKW KEKW'],
        ['kenz', 'HOLY'],
      ],
      caption: ['DID HE JUST', 'DRIFT THAT?!'],
      log: [
        { tc: '02:13:58', text: 'Chat explodes: KEKW, NO SHOT, HOLY' },
        { tc: '02:14:07', text: 'AI flags the play, stream still live' },
        { tc: '02:14:40', text: 'Clipper sets In/Out · captions and 9:16' },
        { tc: '02:16:02', text: 'Posted to TikTok. The stream is still on' },
      ],
      post: 'TikTok',
      postWhen: 'Posted · @jaxxclips',
      pause: 'Pause animation',
      play: 'Play animation',
    },
    sides: {
      title: 'Streamers find clippers. Clippers find the moment.',
      streamer: {
        who: 'If you stream',
        steps: [
          'Connect your Twitch, YouTube or Kick channel.',
          'Let clippers cut your stream while you play.',
          'See the clips and approve what goes out.',
        ],
      },
      clipper: {
        who: 'If you clip',
        steps: [
          'Pick the streams you want to clip.',
          'Get the plays the AI flags, live.',
          'Set In/Out, caption it and post to your TikTok.',
        ],
      },
    },
    clippers: {
      title: 'Clip it live. Post while it’s still hot.',
      body: 'A clip that drops the next day lands cold. With ClipyRush you follow several streams in one queue, the AI flags the plays as they happen, and you trim, caption and post without waiting for the stream to end.',
      points: [
        {
          title: 'Plays flagged live',
          body: 'A chat spike, a scream, a laugh: the AI flags it on the spot and shows why.',
        },
        {
          title: 'Many streams, one queue',
          body: 'Each stream comes in with its channel name. See everything that’s live at once.',
        },
        {
          title: 'Credit for the streamer',
          body: 'Every clip keeps the channel and the stream timecode.',
        },
        { title: 'Captions and 9:16 ready', body: 'Fix what you need and post.' },
      ],
      queueTitle: 'Live now · 3 channels',
      queue: [
        {
          channel: 'jaxx',
          title: 'The drift at the finish',
          why: 'Chat spike',
          len: '0:38',
          status: 'Live',
          state: 'live',
        },
        {
          channel: 'mo_plays',
          title: 'Rage quit on the final boss',
          why: 'Scream + chat',
          len: '0:24',
          status: 'Ready to post',
          state: 'ready',
        },
        {
          channel: 'kenz.live',
          title: 'Chat loses it',
          why: 'Laughter + chat',
          len: '0:41',
          status: 'Posted',
          state: 'posted',
        },
        {
          channel: 'jaxx',
          title: 'Last-second save',
          why: 'Audio peak',
          len: '0:27',
          status: 'Live',
          state: 'live',
        },
      ],
      clipSource: 'jaxx · 02:14:07',
    },
    inout: {
      title: 'The AI flags it. You make the cut.',
      body: 'Sometimes the AI misses the timing of a joke. That’s why every flagged play shows its reason and comes with two handles: pull In back for the setup, push Out for the reaction.',
      hint: 'Pick a play, then drag the handles or use the arrow keys.',
      clips: [
        { title: 'The drift', why: 'Chat spike' },
        { title: 'Last-second save', why: 'Audio peak' },
        { title: 'Chat loses it', why: 'Laughter + chat' },
      ],
      inLabel: 'In',
      outLabel: 'Out',
      duration: 'Length',
      save: 'Save this cut',
      saved: 'Cut saved',
      disclaimer: 'Try it here. Nothing is uploaded.',
      aiLabel: 'AI suggestion',
      youLabel: 'Your cut',
    },
    features: {
      title: 'What’s inside',
      items: [
        {
          id: 'features/ai-moments',
          title: 'Live moments',
          body: 'Flags plays while the stream is on, from speech, audio peaks and chat pace, always with the reason.',
        },
        {
          id: 'features/in-out-editor',
          title: 'In/Out editor',
          body: 'Frame-accurate start and end. Nothing goes out without your approval.',
        },
        {
          id: 'features/captions',
          title: 'Captions',
          body: 'Editable word by word, styled for vertical video.',
        },
        {
          id: 'features/vertical-reframe',
          title: '9:16 reframe',
          body: 'Keeps the action in frame. If it follows the wrong thing, you move it.',
        },
        {
          id: 'features/scheduling',
          title: 'Post or schedule',
          body: 'Post right away or schedule to TikTok, Shorts and Reels in your audience’s time zone.',
        },
        {
          id: 'features/analytics',
          title: 'Analytics',
          body: 'Which clips worked, on which platform. No spreadsheet.',
        },
      ],
      more: 'All features',
    },
    personas: {
      title: 'Also for editors and agencies.',
      items: [
        {
          id: 'use-cases/editors',
          who: 'Editors',
          problem:
            'You edit for several creators and lose hours hunting for the moment on the timeline.',
          answer:
            'Start from flagged plays with source timecode, and captions and framing you can still edit.',
          link: 'How it works for editors',
        },
        {
          id: 'use-cases/agencies',
          who: 'Agencies',
          problem: 'You need to know which version got approved, by whom, and for which time zone.',
          answer: 'A review queue per channel, explicit versions and scheduling per destination.',
          link: 'How it works for agencies',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      body: 'Plans for streamers, clippers, editors and agencies. Prices come out at launch, and people on the list hear first.',
      note: 'Early access. Pricing may change.',
      link: 'See the plans',
    },
    faq: {
      title: 'Before you ask',
      items: [
        {
          q: 'Do you really clip live?',
          a: 'Yes. While the stream is on, the AI flags the plays and the clipper can already trim, caption and post. Recorded streams work too.',
        },
        {
          q: 'How does a streamer find a clipper?',
          a: 'Streamers open their stream to clippers on ClipyRush, and clippers pick the streams they want to cut. The details of how each side connects come with early access.',
        },
        {
          q: 'Does the AI post on its own?',
          a: 'No. The AI flags. You decide the cut and when it goes out.',
        },
        {
          q: 'Can I clip other people’s streams?',
          a: 'Yes. Each stream enters the queue with its channel, and every clip keeps the source timecode. Permission to clip and post is between you and the streamer, under each platform’s rules.',
        },
        {
          q: 'Which platforms?',
          a: 'We’re building for Twitch, YouTube and Kick, live or recorded, and posting to TikTok, YouTube Shorts and Instagram Reels.',
        },
        {
          q: 'Who owns the clips?',
          a: 'The stream belongs to the streamer. How each clip can be used is agreed between streamer and clipper; the details will be in our Terms before launch.',
        },
        {
          q: 'Which caption languages?',
          a: 'We’ll confirm the launch languages before early access opens. English, Portuguese and Spanish come first.',
        },
        {
          q: 'When does it launch?',
          a: 'There’s no public date yet. People on the list get in first.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Pick your side and join the list. The people who join now get to test it first.',
    },
    sticky: { streamer: 'I stream', clipper: 'I clip' },
  },

  'pt-br': {
    meta: {
      description:
        'Clipe lives ao vivo. A ClipyRush marca os lances na hora e entrega o trecho em 9:16, legendado. Streamer encontra clipador; clipador corta e posta com o momento ainda quente.',
    },
    hero: {
      kicker: 'Cortes de live ao vivo para TikTok, Shorts e Reels',
      titleA: 'Não perca o momento.',
      titleB: 'Clipe ao vivo.',
      lead: 'Enquanto a live rola, a ClipyRush marca os lances e entrega o trecho em 9:16, já legendado. Quem faz live encontra quem clipa. Quem clipa corta e posta com o momento ainda quente.',
      note: 'Ainda não lançamos. Escolha seu lado e você entra na lista.',
      worksWith:
        'Twitch, YouTube e Kick, ao vivo ou gravadas. Posta no TikTok, YouTube Shorts e Instagram Reels.',
    },
    doors: {
      streamer: { who: 'Eu faço live', action: 'Achar meu clipador' },
      clipper: { who: 'Eu clipo', action: 'Clipar ao vivo' },
    },
    stage: {
      label: 'Como um lance da live vira corte postado, com a live no ar',
      liveTime: '02:14:07',
      clipLen: '0:38',
      hud: { pos: 'P1', lap: 'ETAPA 3/5', speed: '238 km/h' },
      chat: [
        ['rafa_gg', 'MANOOOO'],
        ['duda', 'KKKKKKKKKKK'],
        ['teteu', 'QUE ISSO KEKW'],
      ],
      caption: ['QUE CURVA', 'FOI ESSA?!'],
      log: [
        { tc: '02:13:58', text: 'Chat explode: KKKK, KEKW, MANOOOO' },
        { tc: '02:14:07', text: 'IA marca o lance, com a live rolando' },
        { tc: '02:14:40', text: 'Clipador ajusta In/Out · legenda e 9:16' },
        { tc: '02:16:02', text: 'Postado no TikTok. A live segue no ar' },
      ],
      post: 'TikTok',
      postWhen: 'Postado · @cortesdorafa',
      pause: 'Pausar animação',
      play: 'Reproduzir animação',
    },
    sides: {
      title: 'Streamer encontra clipador. Clipador encontra o lance.',
      streamer: {
        who: 'Se você faz live',
        steps: [
          'Conecte seu canal da Twitch, YouTube ou Kick.',
          'Libere clipadores pra cortar sua live enquanto você joga.',
          'Veja os cortes e aprove o que vai pro ar.',
        ],
      },
      clipper: {
        who: 'Se você clipa',
        steps: [
          'Escolha as lives que você quer clipar.',
          'Receba os lances que a IA marca, ao vivo.',
          'Ajuste In/Out, legende e poste no seu TikTok.',
        ],
      },
    },
    clippers: {
      title: 'Clipe ao vivo. Poste com o lance ainda quente.',
      body: 'Corte que sai no dia seguinte chega frio. Na ClipyRush você acompanha várias lives numa fila só, a IA marca os lances na hora e você ajusta, legenda e posta sem esperar a live acabar.',
      points: [
        {
          title: 'Lances marcados ao vivo',
          body: 'Pico no chat, grito, risada: a IA marca na hora e mostra o motivo.',
        },
        {
          title: 'Várias lives, uma fila',
          body: 'Cada live entra com o nome do canal. Você vê tudo que está rolando de uma vez.',
        },
        {
          title: 'Crédito pro streamer',
          body: 'Cada corte guarda o canal e o timecode da live.',
        },
        { title: 'Legenda e 9:16 prontos', body: 'Você corrige o que precisar e posta.' },
      ],
      queueTitle: 'Ao vivo agora · 3 canais',
      queue: [
        {
          channel: 'rafa_gg',
          title: 'A curva no fim da etapa',
          why: 'Pico no chat',
          len: '0:38',
          status: 'Ao vivo',
          state: 'live',
        },
        {
          channel: 'duda.joga',
          title: 'Rage quit no chefão',
          why: 'Grito + chat',
          len: '0:24',
          status: 'Pronto pra postar',
          state: 'ready',
        },
        {
          channel: 'teteu_aovivo',
          title: 'Chat perdeu a linha',
          why: 'Risada + chat',
          len: '0:41',
          status: 'Postado',
          state: 'posted',
        },
        {
          channel: 'rafa_gg',
          title: 'Defesa no último segundo',
          why: 'Pico no áudio',
          len: '0:27',
          status: 'Ao vivo',
          state: 'live',
        },
      ],
      clipSource: 'rafa_gg · 02:14:07',
    },
    inout: {
      title: 'A IA marca. O corte é seu.',
      body: 'Às vezes a IA erra o tempo da piada. Por isso cada lance marcado mostra o motivo e vem com duas alças: puxe o In pra pegar o contexto, empurre o Out pra pegar a reação.',
      hint: 'Escolha um lance e arraste as alças ou use as setas do teclado.',
      clips: [
        { title: 'A curva', why: 'Pico no chat' },
        { title: 'Defesa no último segundo', why: 'Pico no áudio' },
        { title: 'Chat perdeu a linha', why: 'Risada + chat' },
      ],
      inLabel: 'In',
      outLabel: 'Out',
      duration: 'Duração',
      save: 'Salvar este corte',
      saved: 'Corte salvo',
      disclaimer: 'Teste aqui. Nada é enviado.',
      aiLabel: 'Sugestão da IA',
      youLabel: 'Seu corte',
    },
    features: {
      title: 'O que tem dentro',
      items: [
        {
          id: 'features/ai-moments',
          title: 'Lances ao vivo',
          body: 'Marca os lances com a live no ar, pela fala, pelos picos de áudio e pelo ritmo do chat, sempre com o motivo.',
        },
        {
          id: 'features/in-out-editor',
          title: 'Editor In/Out',
          body: 'Começo e fim no quadro exato. Nada sai sem a sua aprovação.',
        },
        {
          id: 'features/captions',
          title: 'Legendas',
          body: 'Editáveis palavra por palavra, no estilo de vídeo vertical.',
        },
        {
          id: 'features/vertical-reframe',
          title: 'Enquadramento 9:16',
          body: 'Mantém a ação no quadro. Se ele seguir a coisa errada, você move.',
        },
        {
          id: 'features/scheduling',
          title: 'Postar ou agendar',
          body: 'Poste na hora ou agende no TikTok, Shorts e Reels, no fuso de quem vai assistir.',
        },
        {
          id: 'features/analytics',
          title: 'Analytics',
          body: 'Quais cortes renderam, em qual rede. Sem planilha.',
        },
      ],
      more: 'Todos os recursos',
    },
    personas: {
      title: 'Também pra editores e agências.',
      items: [
        {
          id: 'use-cases/editors',
          who: 'Editores',
          problem:
            'Você edita pra vários criadores e perde horas procurando o momento na timeline.',
          answer:
            'Comece pelos lances marcados, com o timecode da origem e legenda e enquadramento editáveis.',
          link: 'Como funciona pra editores',
        },
        {
          id: 'use-cases/agencies',
          who: 'Agências',
          problem: 'Você precisa saber qual versão foi aprovada, por quem e pra qual fuso.',
          answer: 'Fila de revisão por canal, versões explícitas e agendamento por destino.',
          link: 'Como funciona pra agências',
        },
      ],
    },
    pricing: {
      title: 'Preço',
      body: 'Planos pra streamers, clipadores, editores e agências. Os valores saem no lançamento, e quem está na lista fica sabendo antes.',
      note: 'Acesso antecipado. Os preços podem mudar.',
      link: 'Ver os planos',
    },
    faq: {
      title: 'Antes de você perguntar',
      items: [
        {
          q: 'Clipa ao vivo mesmo?',
          a: 'Sim. Enquanto a live acontece, a IA marca os lances e o clipador já pode ajustar, legendar e postar. Live gravada também funciona.',
        },
        {
          q: 'Como o streamer encontra um clipador?',
          a: 'O streamer libera a live na ClipyRush e os clipadores escolhem quais lives querem cortar. Os detalhes de como cada lado se conecta saem junto com o acesso antecipado.',
        },
        {
          q: 'A IA posta sozinha?',
          a: 'Não. A IA marca. Quem decide o corte e a hora de postar é você.',
        },
        {
          q: 'Posso clipar live de outros streamers?',
          a: 'Pode. Cada live entra na fila com o canal, e cada corte guarda o timecode da origem. A autorização pra cortar e postar é combinada entre você e o streamer, dentro das regras de cada plataforma.',
        },
        {
          q: 'Quais plataformas?',
          a: 'Estamos construindo para Twitch, YouTube e Kick, ao vivo ou gravadas, e postagem no TikTok, YouTube Shorts e Instagram Reels.',
        },
        {
          q: 'De quem são os cortes?',
          a: 'A live é do streamer. Como cada corte pode ser usado é combinado entre streamer e clipador; os detalhes vão estar nos Termos antes do lançamento.',
        },
        {
          q: 'Legenda em quais idiomas?',
          a: 'Vamos confirmar os idiomas antes de abrir o acesso antecipado. Português, inglês e espanhol vêm primeiro.',
        },
        {
          q: 'Quando lança?',
          a: 'Ainda não tem data pública. Quem está na lista entra primeiro.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Escolha seu lado e entre na lista. Quem entra agora testa primeiro.',
    },
    sticky: { streamer: 'Faço live', clipper: 'Eu clipo' },
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    meta: {
      description:
        'Clipea streams en vivo. ClipyRush marca las jugadas al momento y entrega el clip en 9:16 con subtítulos. El streamer encuentra a su clipper; el clipper recorta y publica mientras está caliente.',
    },
    hero: {
      kicker: 'Clips de streams en vivo para TikTok, Shorts y Reels',
      titleA: 'No pierdas el momento.',
      titleB: 'Clipea en vivo.',
      lead: 'Mientras el stream sigue, ClipyRush marca las jugadas y entrega el momento en 9:16, ya con subtítulos. Quien hace streams encuentra a su clipper. Quien clipea recorta y publica con el momento todavía caliente.',
      note: 'Todavía no lanzamos. Elige tu lado y entras en la lista.',
      worksWith:
        'Twitch, YouTube y Kick, en vivo o grabados. Publica en TikTok, YouTube Shorts e Instagram Reels.',
    },
    doors: {
      streamer: { who: 'Hago streams', action: 'Encontrar mi clipper' },
      clipper: { who: 'Hago clips', action: 'Clipear en vivo' },
    },
    stage: {
      label: 'Cómo una jugada del stream se convierte en un clip publicado, en vivo',
      liveTime: '02:14:07',
      clipLen: '0:38',
      hud: { pos: 'P1', lap: 'ETAPA 3/5', speed: '238 km/h' },
      chat: [
        ['lu_pro', 'NOOOOO'],
        ['nico', 'JAJAJAJAJAJA'],
        ['vale', 'QUÉ FUE ESO'],
      ],
      caption: ['¡¿QUÉ CURVA', 'FUE ESA?!'],
      log: [
        { tc: '02:13:58', text: 'El chat explota: JAJAJA, NOOOO, QUÉ FUE ESO' },
        { tc: '02:14:07', text: 'La IA marca la jugada, con el stream en vivo' },
        { tc: '02:14:40', text: 'El clipper ajusta In/Out · subtítulos y 9:16' },
        { tc: '02:16:02', text: 'Publicado en TikTok. El stream sigue en vivo' },
      ],
      post: 'TikTok',
      postWhen: 'Publicado · @clipsdelu',
      pause: 'Pausar animación',
      play: 'Reproducir animación',
    },
    sides: {
      title: 'El streamer encuentra a su clipper. El clipper encuentra el momento.',
      streamer: {
        who: 'Si haces streams',
        steps: [
          'Conecta tu canal de Twitch, YouTube o Kick.',
          'Deja que clippers recorten tu stream mientras juegas.',
          'Mira los clips y aprueba lo que se publica.',
        ],
      },
      clipper: {
        who: 'Si haces clips',
        steps: [
          'Elige los streams que quieres clipear.',
          'Recibe las jugadas que marca la IA, en vivo.',
          'Ajusta In/Out, ponle subtítulos y publica en tu TikTok.',
        ],
      },
    },
    clippers: {
      title: 'Clipea en vivo. Publica con la jugada todavía caliente.',
      body: 'Un clip que sale al día siguiente llega frío. Con ClipyRush sigues varios streams en una sola cola, la IA marca las jugadas al momento y tú ajustas, subtitulas y publicas sin esperar a que termine el stream.',
      points: [
        {
          title: 'Jugadas marcadas en vivo',
          body: 'Un pico de chat, un grito, una risa: la IA lo marca al momento y te dice por qué.',
        },
        {
          title: 'Varios streams, una cola',
          body: 'Cada stream entra con el nombre del canal. Ves todo lo que está en vivo a la vez.',
        },
        {
          title: 'Crédito para el streamer',
          body: 'Cada clip guarda el canal y el timecode del stream.',
        },
        { title: 'Subtítulos y 9:16 listos', body: 'Corriges lo que haga falta y publicas.' },
      ],
      queueTitle: 'En vivo ahora · 3 canales',
      queue: [
        {
          channel: 'lu_pro',
          title: 'La curva al final de la etapa',
          why: 'Pico de chat',
          len: '0:38',
          status: 'En vivo',
          state: 'live',
        },
        {
          channel: 'nico.juega',
          title: 'Rage quit en el jefe final',
          why: 'Grito + chat',
          len: '0:24',
          status: 'Listo para publicar',
          state: 'ready',
        },
        {
          channel: 'vale_envivo',
          title: 'El chat se volvió loco',
          why: 'Risas + chat',
          len: '0:41',
          status: 'Publicado',
          state: 'posted',
        },
        {
          channel: 'lu_pro',
          title: 'Salvada de último segundo',
          why: 'Pico de audio',
          len: '0:27',
          status: 'En vivo',
          state: 'live',
        },
      ],
      clipSource: 'lu_pro · 02:14:07',
    },
    inout: {
      title: 'La IA lo marca. El corte es tuyo.',
      body: 'A veces la IA no le atina al tiempo del chiste. Por eso cada jugada marcada muestra su motivo y trae dos controles: mueve el In hacia atrás para tener el contexto y el Out hacia adelante para tener la reacción.',
      hint: 'Elige una jugada y arrastra los controles o usa las flechas del teclado.',
      clips: [
        { title: 'La curva', why: 'Pico de chat' },
        { title: 'Salvada de último segundo', why: 'Pico de audio' },
        { title: 'El chat se volvió loco', why: 'Risas + chat' },
      ],
      inLabel: 'In',
      outLabel: 'Out',
      duration: 'Duración',
      save: 'Guardar este corte',
      saved: 'Corte guardado',
      disclaimer: 'Pruébalo aquí. No se sube nada.',
      aiLabel: 'Sugerencia de la IA',
      youLabel: 'Tu corte',
    },
    features: {
      title: 'Lo que trae ClipyRush',
      items: [
        {
          id: 'features/ai-moments',
          title: 'Jugadas en vivo',
          body: 'Marca las jugadas con el stream en vivo, por la voz, los picos de audio y el ritmo del chat, siempre con el motivo.',
        },
        {
          id: 'features/in-out-editor',
          title: 'Editor In/Out',
          body: 'Inicio y final al fotograma exacto. Nada sale sin tu aprobación.',
        },
        {
          id: 'features/captions',
          title: 'Subtítulos',
          body: 'Editables palabra por palabra, con estilo de video vertical.',
        },
        {
          id: 'features/vertical-reframe',
          title: 'Encuadre 9:16',
          body: 'Mantiene la acción en cuadro. Si sigue lo que no es, tú lo mueves.',
        },
        {
          id: 'features/scheduling',
          title: 'Publicar o programar',
          body: 'Publica al momento o programa en TikTok, Shorts y Reels, en la zona horaria de tu audiencia.',
        },
        {
          id: 'features/analytics',
          title: 'Analíticas',
          body: 'Qué clips funcionaron y en qué red. Sin hojas de cálculo.',
        },
      ],
      more: 'Todas las funciones',
    },
    personas: {
      title: 'También para editores y agencias.',
      items: [
        {
          id: 'use-cases/editors',
          who: 'Editores',
          problem:
            'Editas para varios creadores y pierdes horas buscando el momento en la línea de tiempo.',
          answer:
            'Empieza por las jugadas marcadas, con el timecode de origen y subtítulos y encuadre editables.',
          link: 'Cómo funciona para editores',
        },
        {
          id: 'use-cases/agencies',
          who: 'Agencias',
          problem:
            'Necesitas saber qué versión se aprobó, quién la aprobó y para qué zona horaria.',
          answer: 'Cola de revisión por canal, versiones explícitas y programación por destino.',
          link: 'Cómo funciona para agencias',
        },
      ],
    },
    pricing: {
      title: 'Precios',
      body: 'Planes para streamers, clippers, editores y agencias. Los precios salen en el lanzamiento, y quienes están en la lista se enteran primero.',
      note: 'Acceso anticipado. Los precios pueden cambiar.',
      link: 'Ver los planes',
    },
    faq: {
      title: 'Antes de que preguntes',
      items: [
        {
          q: '¿De verdad clipea en vivo?',
          a: 'Sí. Mientras el stream está en vivo, la IA marca las jugadas y el clipper ya puede ajustar, subtitular y publicar. Los streams grabados también funcionan.',
        },
        {
          q: '¿Cómo encuentra un streamer a su clipper?',
          a: 'El streamer abre su stream a clippers en ClipyRush y los clippers eligen qué streams quieren recortar. Los detalles de cómo se conecta cada lado llegan con el acceso anticipado.',
        },
        {
          q: '¿La IA publica sola?',
          a: 'No. La IA marca. Tú decides el corte y cuándo se publica.',
        },
        {
          q: '¿Puedo clipear streams de otros?',
          a: 'Sí. Cada stream entra en la cola con su canal, y cada clip guarda el timecode de origen. El permiso para recortar y publicar lo acuerdas con el streamer, según las reglas de cada plataforma.',
        },
        {
          q: '¿Qué plataformas?',
          a: 'Estamos construyendo para Twitch, YouTube y Kick, en vivo o grabados, y publicación en TikTok, YouTube Shorts e Instagram Reels.',
        },
        {
          q: '¿De quién son los clips?',
          a: 'El stream es del streamer. Cómo se puede usar cada clip lo acuerdan streamer y clipper; los detalles estarán en los Términos antes del lanzamiento.',
        },
        {
          q: '¿En qué idiomas son los subtítulos?',
          a: 'Confirmaremos los idiomas antes de abrir el acceso anticipado. Español, inglés y portugués van primero.',
        },
        {
          q: '¿Cuándo se lanza?',
          a: 'Todavía no hay fecha pública. Quienes están en la lista entran primero.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Elige tu lado y entra en la lista. Quienes entran ahora lo prueban primero.',
    },
    sticky: { streamer: 'Hago streams', clipper: 'Hago clips' },
  },
};
