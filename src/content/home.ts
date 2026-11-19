import type { Locale, RouteId } from '../config/routes';

/**
 * Home page copy, written per market (see docs/LOCALIZATION.md):
 * en = US creators, pt-br = Brazilian creators, es = Spanish-speaking creators (LatAm neutral).
 * Rules: concrete over generic, no virality promises, no numbers presented as results.
 * The 4:12:33 / 3 / 0:38 figures are an illustrative example and are labeled as such.
 */
export interface HomeCopy {
  meta: { description: string };
  hero: {
    kicker: string;
    titleA: string;
    titleB: string;
    lead: string;
    linkLabel: string;
    linkPlaceholder: string;
    linkHint: string;
    submit: string;
    note: string;
    worksWith: string;
  };
  stage: {
    label: string;
    duration: string;
    liveTime: string;
    clipLen: string;
    chat: [string, string][];
    caption: [string, string];
    log: { tc: string; text: string }[];
    post: string;
    postWhen: string;
    pause: string;
    play: string;
  };
  story: {
    title: string;
    example: string;
    stats: { value: string; label: string }[];
    note: string;
  };
  steps: {
    title: string;
    items: { title: string; body: string }[];
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
  clippers: {
    title: string;
    body: string;
    points: { title: string; body: string }[];
    cta: string;
    queueTitle: string;
    queue: {
      channel: string;
      title: string;
      why: string;
      len: string;
      status: string;
      state: 'review' | 'approved' | 'scheduled';
    }[];
    clipSource: string;
    note: string;
  };
  pricing: { title: string; body: string; note: string; link: string };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string };
  sticky: string;
}

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      description:
        'ClipyRush watches your whole stream, flags where chat and audio blew up and hands you the moment in 9:16 with captions. You set the start and end.',
    },
    hero: {
      kicker: 'Stream clips for TikTok, Shorts and Reels',
      titleA: 'Your stream ran four hours.',
      titleB: 'The clip is 38 seconds.',
      lead: 'ClipyRush watches the whole stream, flags where chat and audio blew up, and hands you the moment in 9:16 with captions. You set the start and the end, then schedule it to TikTok.',
      linkLabel: 'Paste a link to one of your streams',
      linkPlaceholder: 'twitch.tv/videos/…',
      linkHint:
        'A past broadcast on Twitch, YouTube or Kick. When we open, it’s the first one we clip.',
      submit: 'Get early access',
      note: 'We haven’t launched yet. We’ll email you when it’s your turn.',
      worksWith:
        'Works with past broadcasts on Twitch, YouTube and Kick, or a file upload. Schedules to TikTok, YouTube Shorts and Instagram Reels.',
    },
    stage: {
      label: 'Example: how a stream becomes a clip',
      duration: '4:12:33',
      liveTime: '02:14:07',
      clipLen: '0:38',
      chat: [
        ['jaxx', 'CLIP IT'],
        ['mo_plays', 'NO WAY'],
        ['kenz', 'run it back'],
      ],
      caption: ['DID HE JUST', 'DRIFT THAT?!'],
      log: [
        { tc: '02:13:58', text: 'Chat spikes: “CLIP IT” ×42' },
        { tc: '02:14:07', text: 'AI flags 38 s: audio peak + chat' },
        { tc: '9:16', text: 'Captioned and reframed, ready for your tweaks' },
        { tc: '7:00 PM', text: 'Scheduled to TikTok, New York time' },
      ],
      post: 'TikTok',
      postWhen: 'Today, 7:00 PM · New York',
      pause: 'Pause animation',
      play: 'Play animation',
    },
    story: {
      title: 'Nobody’s watching four hours to find the good 38 seconds.',
      example: 'A Saturday stream, for example:',
      stats: [
        { value: '4:12:33', label: 'of recorded stream' },
        { value: '3', label: 'moments flagged by the AI, each with its reason' },
        { value: '0:38', label: 'the cut you approved and posted' },
      ],
      note: 'Illustrative example.',
    },
    steps: {
      title: 'You paste the link. The AI does the boring part. You make the call.',
      items: [
        {
          title: 'Paste the stream link',
          body: 'The link to a past broadcast on Twitch, YouTube or Kick, or the file itself. ClipyRush reads the speech, the audio and the chat.',
        },
        {
          title: 'Review what the AI flagged',
          body: 'Every moment shows why it was picked: a chat spike, a scream, a laugh. Skip the ones that miss.',
        },
        {
          title: 'Trim, caption, schedule',
          body: 'Drag In and Out, fix a word in the captions, pick the time. Nothing posts until you say so.',
        },
      ],
    },
    inout: {
      title: 'The AI flags it. You cut it.',
      body: 'Sometimes the AI misses the timing of a joke. That’s why every suggestion shows its reason and comes with two handles: pull In back for the setup, push Out for the reaction.',
      hint: 'Pick a moment, then drag the handles or use the arrow keys.',
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
      disclaimer: 'Demo with sample data. Nothing is uploaded.',
      aiLabel: 'AI suggestion',
      youLabel: 'Your cut',
    },
    features: {
      title: 'What’s inside',
      items: [
        {
          id: 'features/ai-moments',
          title: 'AI moments',
          body: 'Reads speech, audio peaks and chat pace, and tells you why it flagged each moment.',
        },
        {
          id: 'features/in-out-editor',
          title: 'In/Out editor',
          body: 'Frame-accurate start and end. Nothing leaves without your approval.',
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
          title: 'Scheduling',
          body: 'TikTok, Shorts and Reels, in your audience’s time zone.',
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
      title: 'For people who stream, edit, or run channels.',
      items: [
        {
          id: 'use-cases/streamers',
          who: 'Streamers',
          problem: 'You stream for hours and don’t want to become an editor the next day.',
          answer:
            'When you come back, your best moments are already flagged. Review, adjust, post.',
          link: 'How it works for streamers',
        },
        {
          id: 'use-cases/editors',
          who: 'Editors',
          problem:
            'You edit for several creators and lose hours hunting for the moment on the timeline.',
          answer:
            'Start from flagged moments with source timecode, and captions and framing you can still edit.',
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
    clippers: {
      title: 'Clippers can’t spend the night watching streams.',
      body: 'You clip for several channels and a moment cools off fast. ClipyRush puts every channel’s streams in one queue, flags the moments with a reason, and lets you review, trim and schedule without scrubbing a timeline.',
      points: [
        {
          title: 'Many channels, one queue',
          body: 'Each stream comes in tagged with its channel. See what the AI flagged across all of them at once.',
        },
        {
          title: 'A reason for every clip',
          body: 'A chat spike, a scream, a laugh. You know why a moment was flagged before you hit play.',
        },
        {
          title: 'Source always attached',
          body: 'Every clip keeps the channel and the stream timecode, so crediting the streamer is easy.',
        },
        { title: 'Captions and 9:16 done', body: 'You only fix what needs fixing, then schedule.' },
      ],
      cta: 'Join as a clipper',
      queueTitle: 'Clip queue · 3 channels',
      queue: [
        {
          channel: 'jaxx',
          title: 'The drift at the finish',
          why: 'Chat spike',
          len: '0:38',
          status: 'To review',
          state: 'review',
        },
        {
          channel: 'mo_plays',
          title: 'Rage quit on the final boss',
          why: 'Scream + chat',
          len: '0:24',
          status: 'Approved',
          state: 'approved',
        },
        {
          channel: 'kenz.live',
          title: 'Chat loses it',
          why: 'Laughter + chat',
          len: '0:41',
          status: 'Scheduled 7 PM',
          state: 'scheduled',
        },
        {
          channel: 'jaxx',
          title: 'Last-second save',
          why: 'Audio peak',
          len: '0:27',
          status: 'To review',
          state: 'review',
        },
      ],
      clipSource: 'jaxx · 02:14:07',
      note: 'Example with made-up channels.',
    },
    pricing: {
      title: 'Pricing',
      body: 'Three plans: Creator, Editor and Agency. Prices come out at launch, and people on the list hear first.',
      note: 'Early access. Pricing may change.',
      link: 'See the plans',
    },
    faq: {
      title: 'Before you ask',
      items: [
        {
          q: 'What does ClipyRush do?',
          a: 'It finds the best moments in long streams and turns them into vertical, captioned clips. You review and adjust every cut before it goes anywhere.',
        },
        {
          q: 'Does the AI post for me?',
          a: 'No. The AI suggests. Nothing is published until you approve the cut and the time.',
        },
        {
          q: 'Does it work if I clip for other streamers?',
          a: 'Yes. Each stream enters the queue with its channel, and every clip keeps the source timecode. Permission to clip and post is between you and the streamer, under each platform’s rules.',
        },
        {
          q: 'Which platforms does it work with?',
          a: 'We’re building for past broadcasts on Twitch, YouTube and Kick plus file upload, and scheduling to TikTok, YouTube Shorts and Instagram Reels.',
        },
        {
          q: 'Which caption languages?',
          a: 'We’ll confirm the launch languages before early access opens. English, Portuguese and Spanish come first.',
        },
        {
          q: 'Who owns my clips?',
          a: 'You do. Your streams and clips are your content. The details will be in our Terms before launch.',
        },
        {
          q: 'What happens to my email?',
          a: 'We use it to send your early access invite and the updates you agree to. You can leave the list at any time.',
        },
        {
          q: 'When does it launch?',
          a: 'There’s no public date yet. People on the list get in first.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Paste a link to one of your streams. When we open, it’s the first one we clip.',
    },
    sticky: 'Get early access',
  },

  'pt-br': {
    meta: {
      description:
        'A ClipyRush assiste à sua live inteira, marca onde o chat e o áudio explodiram e entrega o trecho em 9:16, já legendado. Você decide o começo e o fim.',
    },
    hero: {
      kicker: 'Cortes de live para TikTok, Shorts e Reels',
      titleA: 'Sua live teve quatro horas.',
      titleB: 'O corte tem 38 segundos.',
      lead: 'A ClipyRush assiste à live inteira, marca onde o chat e o áudio explodiram e te entrega o trecho em 9:16, já legendado. Você acerta o começo e o fim e agenda no TikTok.',
      linkLabel: 'Cole o link de uma live sua',
      linkPlaceholder: 'twitch.tv/videos/…',
      linkHint:
        'Live gravada da Twitch, YouTube ou Kick. Quando a gente abrir, ela é a primeira a virar corte.',
      submit: 'Quero acesso antecipado',
      note: 'Ainda não lançamos. A gente avisa por e-mail quando chegar a sua vez.',
      worksWith:
        'Funciona com lives gravadas da Twitch, YouTube e Kick ou upload de arquivo. Agenda no TikTok, YouTube Shorts e Instagram Reels.',
    },
    stage: {
      label: 'Exemplo: como uma live vira corte',
      duration: '4:12:33',
      liveTime: '02:14:07',
      clipLen: '0:38',
      chat: [
        ['rafa_gg', 'CLIPA ISSO'],
        ['duda', 'KKKKKKKK'],
        ['teteu', 'replay pfv'],
      ],
      caption: ['QUE CURVA', 'FOI ESSA?!'],
      log: [
        { tc: '02:13:58', text: 'Chat dispara: “CLIPA ISSO” ×42' },
        { tc: '02:14:07', text: 'IA marca 38 s: pico de áudio + chat' },
        { tc: '9:16', text: 'Legendado e enquadrado, pronto pra você ajustar' },
        { tc: '19h', text: 'Agendado no TikTok, horário de São Paulo' },
      ],
      post: 'TikTok',
      postWhen: 'Hoje, 19h · São Paulo',
      pause: 'Pausar animação',
      play: 'Reproduzir animação',
    },
    story: {
      title: 'Ninguém vai assistir quatro horas pra achar os 38 segundos bons.',
      example: 'Uma live de sábado, por exemplo:',
      stats: [
        { value: '4:12:33', label: 'de live gravada' },
        { value: '3', label: 'momentos marcados pela IA, cada um com o motivo' },
        { value: '0:38', label: 'o corte que você aprovou e postou' },
      ],
      note: 'Exemplo ilustrativo.',
    },
    steps: {
      title: 'Você cola o link. A IA faz a parte chata. Você decide.',
      items: [
        {
          title: 'Cole o link da live',
          body: 'Link da live gravada na Twitch, YouTube ou Kick, ou o próprio arquivo. A ClipyRush lê a fala, o áudio e o chat.',
        },
        {
          title: 'Revise o que a IA marcou',
          body: 'Cada momento mostra por que foi escolhido: pico no chat, grito, risada. Descarte o que não serve.',
        },
        {
          title: 'Corte, legende, agende',
          body: 'Arraste o In e o Out, corrija uma palavra da legenda, escolha o horário. Nada vai ao ar sem o seu ok.',
        },
      ],
    },
    inout: {
      title: 'A IA marca. O corte é seu.',
      body: 'Às vezes a IA erra o tempo da piada. Por isso cada sugestão mostra o motivo e vem com duas alças: puxe o In pra pegar o contexto, empurre o Out pra pegar a reação.',
      hint: 'Escolha um momento e arraste as alças ou use as setas do teclado.',
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
      disclaimer: 'Demonstração com dados de exemplo. Nada é enviado.',
      aiLabel: 'Sugestão da IA',
      youLabel: 'Seu corte',
    },
    features: {
      title: 'O que tem dentro',
      items: [
        {
          id: 'features/ai-moments',
          title: 'Momentos com IA',
          body: 'Lê a fala, os picos de áudio e o ritmo do chat, e mostra por que marcou cada trecho.',
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
          title: 'Agendamento',
          body: 'TikTok, Shorts e Reels, no fuso de quem vai assistir.',
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
      title: 'Pra quem faz live, edita ou cuida de canal.',
      items: [
        {
          id: 'use-cases/streamers',
          who: 'Streamers',
          problem: 'Você faz live de horas e não quer virar editor no dia seguinte.',
          answer:
            'Quando você volta, os melhores momentos já estão marcados. Revisa, ajusta e posta.',
          link: 'Como funciona pra streamers',
        },
        {
          id: 'use-cases/editors',
          who: 'Editores',
          problem:
            'Você edita pra vários criadores e perde horas procurando o momento na timeline.',
          answer:
            'Comece pelos momentos marcados, com o timecode da origem e legenda e enquadramento editáveis.',
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
    clippers: {
      title: 'Clipador não pode passar a noite assistindo live.',
      body: 'Você corta pra vários canais e o momento esfria rápido. A ClipyRush junta as lives de todos eles numa fila, marca os trechos com o motivo e deixa você revisar, ajustar e agendar sem caçar nada na timeline.',
      points: [
        {
          title: 'Vários canais, uma fila',
          body: 'Cada live entra na fila com o nome do canal. Você vê o que a IA marcou em todos de uma vez.',
        },
        {
          title: 'O motivo de cada corte',
          body: 'Pico no chat, grito, risada. Você sabe por que o trecho foi marcado antes de dar play.',
        },
        {
          title: 'Origem sempre junto',
          body: 'Cada corte guarda o canal e o timecode da live. Fica fácil dar o crédito pro streamer.',
        },
        { title: 'Legenda e 9:16 prontos', body: 'Você só corrige o que precisar e agenda.' },
      ],
      cta: 'Entrar como clipador',
      queueTitle: 'Fila de cortes · 3 canais',
      queue: [
        {
          channel: 'rafa_gg',
          title: 'A curva no fim da corrida',
          why: 'Pico no chat',
          len: '0:38',
          status: 'Para revisar',
          state: 'review',
        },
        {
          channel: 'duda.joga',
          title: 'Rage quit no chefão',
          why: 'Grito + chat',
          len: '0:24',
          status: 'Aprovado',
          state: 'approved',
        },
        {
          channel: 'teteu_aovivo',
          title: 'Chat perdeu a linha',
          why: 'Risada + chat',
          len: '0:41',
          status: 'Agendado 19h',
          state: 'scheduled',
        },
        {
          channel: 'rafa_gg',
          title: 'Defesa no último segundo',
          why: 'Pico no áudio',
          len: '0:27',
          status: 'Para revisar',
          state: 'review',
        },
      ],
      clipSource: 'rafa_gg · 02:14:07',
      note: 'Exemplo com canais fictícios.',
    },
    pricing: {
      title: 'Preço',
      body: 'Três planos: Creator, Editor e Agency. Os valores saem no lançamento, e quem está na lista fica sabendo antes.',
      note: 'Acesso antecipado. Os preços podem mudar.',
      link: 'Ver os planos',
    },
    faq: {
      title: 'Antes de você perguntar',
      items: [
        {
          q: 'O que a ClipyRush faz?',
          a: 'Encontra os melhores momentos de lives longas e transforma em cortes verticais com legenda. Você revisa e ajusta cada corte antes de ir pra qualquer lugar.',
        },
        {
          q: 'A IA posta por mim?',
          a: 'Não. A IA sugere. Nada é publicado sem você aprovar o corte e o horário.',
        },
        {
          q: 'Serve pra quem corta live de outros streamers?',
          a: 'Serve. Cada live entra na fila com o canal, e cada corte guarda o timecode da origem. A autorização pra cortar e postar é combinada entre você e o streamer, dentro das regras de cada plataforma.',
        },
        {
          q: 'Funciona com quais plataformas?',
          a: 'Estamos construindo para lives gravadas da Twitch, YouTube e Kick, além de upload de arquivo, e agendamento no TikTok, YouTube Shorts e Instagram Reels.',
        },
        {
          q: 'Legenda em quais idiomas?',
          a: 'Vamos confirmar os idiomas antes de abrir o acesso antecipado. Português, inglês e espanhol vêm primeiro.',
        },
        {
          q: 'De quem são os cortes?',
          a: 'Seus. As lives e os cortes são conteúdo seu. Os detalhes vão estar nos Termos antes do lançamento.',
        },
        {
          q: 'O que acontece com meu e-mail?',
          a: 'A gente usa pra mandar seu convite de acesso antecipado e as novidades que você autorizar. Dá pra sair da lista quando quiser.',
        },
        {
          q: 'Quando lança?',
          a: 'Ainda não tem data pública. Quem está na lista entra primeiro.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Cole o link de uma live sua. Quando a gente abrir, ela é a primeira a virar corte.',
    },
    sticky: 'Quero acesso antecipado',
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    meta: {
      description:
        'ClipyRush mira tu stream completo, marca dónde explotaron el chat y el audio y te entrega el momento en 9:16 con subtítulos. Tú decides el inicio y el final.',
    },
    hero: {
      kicker: 'Clips de streams para TikTok, Shorts y Reels',
      titleA: 'Tu stream duró cuatro horas.',
      titleB: 'El clip dura 38 segundos.',
      lead: 'ClipyRush mira el stream completo, marca dónde explotaron el chat y el audio y te entrega el momento en 9:16, ya con subtítulos. Tú ajustas el inicio y el final y lo programas en TikTok.',
      linkLabel: 'Pega el enlace de uno de tus streams',
      linkPlaceholder: 'twitch.tv/videos/…',
      linkHint:
        'Un stream grabado de Twitch, YouTube o Kick. Cuando abramos, será el primero que recortemos.',
      submit: 'Quiero acceso anticipado',
      note: 'Todavía no lanzamos. Te avisamos por correo cuando sea tu turno.',
      worksWith:
        'Funciona con streams grabados de Twitch, YouTube y Kick o subiendo un archivo. Programa en TikTok, YouTube Shorts e Instagram Reels.',
    },
    stage: {
      label: 'Ejemplo: cómo un stream se convierte en clip',
      duration: '4:12:33',
      liveTime: '02:14:07',
      clipLen: '0:38',
      chat: [
        ['lu_pro', 'CLIPEA ESO'],
        ['nico', 'JAJAJAJA'],
        ['vale', 'otra vez pls'],
      ],
      caption: ['¡¿QUÉ CURVA', 'FUE ESA?!'],
      log: [
        { tc: '02:13:58', text: 'El chat explota: “CLIPEA ESO” ×42' },
        { tc: '02:14:07', text: 'La IA marca 38 s: pico de audio + chat' },
        { tc: '9:16', text: 'Con subtítulos y encuadre, listo para que lo ajustes' },
        { tc: '19:00', text: 'Programado en TikTok, hora de Ciudad de México' },
      ],
      post: 'TikTok',
      postWhen: 'Hoy, 19:00 · Ciudad de México',
      pause: 'Pausar animación',
      play: 'Reproducir animación',
    },
    story: {
      title: 'Nadie va a ver cuatro horas para encontrar los 38 segundos buenos.',
      example: 'Un stream de sábado, por ejemplo:',
      stats: [
        { value: '4:12:33', label: 'de stream grabado' },
        { value: '3', label: 'momentos marcados por la IA, cada uno con su motivo' },
        { value: '0:38', label: 'el clip que aprobaste y publicaste' },
      ],
      note: 'Ejemplo ilustrativo.',
    },
    steps: {
      title: 'Tú pegas el enlace. La IA hace la parte aburrida. Tú decides.',
      items: [
        {
          title: 'Pega el enlace del stream',
          body: 'El enlace de tu stream grabado en Twitch, YouTube o Kick, o el archivo. ClipyRush lee la voz, el audio y el chat.',
        },
        {
          title: 'Revisa lo que marcó la IA',
          body: 'Cada momento muestra por qué se eligió: un pico de chat, un grito, una risa. Descarta lo que no sirve.',
        },
        {
          title: 'Recorta, subtitula, programa',
          body: 'Arrastra el In y el Out, corrige una palabra del subtítulo, elige la hora. Nada se publica sin tu ok.',
        },
      ],
    },
    inout: {
      title: 'La IA lo marca. El corte es tuyo.',
      body: 'A veces la IA no le atina al tiempo del chiste. Por eso cada sugerencia muestra su motivo y trae dos controles: mueve el In hacia atrás para tener el contexto y el Out hacia adelante para tener la reacción.',
      hint: 'Elige un momento y arrastra los controles o usa las flechas del teclado.',
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
      disclaimer: 'Demo con datos de ejemplo. No se sube nada.',
      aiLabel: 'Sugerencia de la IA',
      youLabel: 'Tu corte',
    },
    features: {
      title: 'Lo que trae ClipyRush',
      items: [
        {
          id: 'features/ai-moments',
          title: 'Momentos con IA',
          body: 'Lee la voz, los picos de audio y el ritmo del chat, y te dice por qué marcó cada momento.',
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
          title: 'Programación',
          body: 'TikTok, Shorts y Reels, en la zona horaria de tu audiencia.',
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
      title: 'Para quien hace streams, edita o maneja canales.',
      items: [
        {
          id: 'use-cases/streamers',
          who: 'Streamers',
          problem: 'Haces streams de horas y no quieres convertirte en editor al día siguiente.',
          answer:
            'Cuando vuelves, tus mejores momentos ya están marcados. Revisas, ajustas y publicas.',
          link: 'Cómo funciona para streamers',
        },
        {
          id: 'use-cases/editors',
          who: 'Editores',
          problem:
            'Editas para varios creadores y pierdes horas buscando el momento en la línea de tiempo.',
          answer:
            'Empieza por los momentos marcados, con el timecode de origen y subtítulos y encuadre editables.',
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
    clippers: {
      title: 'Un clipper no puede pasarse la noche viendo streams.',
      body: 'Recortas para varios canales y el momento se enfría rápido. ClipyRush junta los streams de todos en una cola, marca los momentos con su motivo y te deja revisar, recortar y programar sin buscar nada en la línea de tiempo.',
      points: [
        {
          title: 'Varios canales, una cola',
          body: 'Cada stream entra con el nombre del canal. Ves lo que marcó la IA en todos a la vez.',
        },
        {
          title: 'El motivo de cada clip',
          body: 'Un pico de chat, un grito, una risa. Sabes por qué se marcó antes de darle play.',
        },
        {
          title: 'El origen siempre a mano',
          body: 'Cada clip guarda el canal y el timecode del stream, así es fácil darle crédito al streamer.',
        },
        { title: 'Subtítulos y 9:16 listos', body: 'Solo corriges lo que haga falta y programas.' },
      ],
      cta: 'Unirme como clipper',
      queueTitle: 'Cola de clips · 3 canales',
      queue: [
        {
          channel: 'lu_pro',
          title: 'La curva al final',
          why: 'Pico de chat',
          len: '0:38',
          status: 'Por revisar',
          state: 'review',
        },
        {
          channel: 'nico.juega',
          title: 'Rage quit en el jefe final',
          why: 'Grito + chat',
          len: '0:24',
          status: 'Aprobado',
          state: 'approved',
        },
        {
          channel: 'vale_envivo',
          title: 'El chat se volvió loco',
          why: 'Risas + chat',
          len: '0:41',
          status: 'Programado 19:00',
          state: 'scheduled',
        },
        {
          channel: 'lu_pro',
          title: 'Salvada de último segundo',
          why: 'Pico de audio',
          len: '0:27',
          status: 'Por revisar',
          state: 'review',
        },
      ],
      clipSource: 'lu_pro · 02:14:07',
      note: 'Ejemplo con canales ficticios.',
    },
    pricing: {
      title: 'Precios',
      body: 'Tres planes: Creator, Editor y Agency. Los precios salen en el lanzamiento, y quienes están en la lista se enteran primero.',
      note: 'Acceso anticipado. Los precios pueden cambiar.',
      link: 'Ver los planes',
    },
    faq: {
      title: 'Antes de que preguntes',
      items: [
        {
          q: '¿Qué hace ClipyRush?',
          a: 'Encuentra los mejores momentos de streams largos y los convierte en clips verticales con subtítulos. Revisas y ajustas cada corte antes de que vaya a cualquier lado.',
        },
        {
          q: '¿La IA publica por mí?',
          a: 'No. La IA sugiere. Nada se publica hasta que apruebes el corte y la hora.',
        },
        {
          q: '¿Sirve si recorto streams de otros?',
          a: 'Sí. Cada stream entra en la cola con su canal, y cada clip guarda el timecode de origen. El permiso para recortar y publicar lo acuerdas con el streamer, según las reglas de cada plataforma.',
        },
        {
          q: '¿Con qué plataformas funciona?',
          a: 'Estamos construyendo para streams grabados de Twitch, YouTube y Kick, además de subida de archivos, y programación en TikTok, YouTube Shorts e Instagram Reels.',
        },
        {
          q: '¿En qué idiomas son los subtítulos?',
          a: 'Confirmaremos los idiomas antes de abrir el acceso anticipado. Español, inglés y portugués van primero.',
        },
        {
          q: '¿De quién son los clips?',
          a: 'Tuyos. Tus streams y clips son tu contenido. Los detalles estarán en los Términos antes del lanzamiento.',
        },
        {
          q: '¿Qué pasa con mi correo?',
          a: 'Lo usamos para enviarte tu invitación de acceso anticipado y las novedades que aceptes. Puedes salir de la lista cuando quieras.',
        },
        {
          q: '¿Cuándo se lanza?',
          a: 'Todavía no hay fecha pública. Quienes están en la lista entran primero.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Pega el enlace de uno de tus streams. Cuando abramos, será el primero que recortemos.',
    },
    sticky: 'Quiero acceso anticipado',
  },
};
