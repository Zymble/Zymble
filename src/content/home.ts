import type { Locale, RouteId } from '../config/routes';

/**
 * Home page copy, written per market (see docs/LOCALIZATION.md):
 * en = US creators, pt-br = Brazilian creators, es = Spanish-speaking creators (LatAm neutral).
 * No virality promises, no numbers without a source, no invented proof.
 */
export interface HomeCopy {
  hero: {
    live: string;
    questions: [string, string, string, string];
    lead: string;
    linkLabel: string;
    linkPlaceholder: string;
    linkHint: string;
    submit: string;
    note: string;
  };
  stage: {
    label: string;
    steps: [string, string, string, string];
    liveTime: string;
    chat: [string, string, string];
    found: string;
    foundWhy: string;
    caption: [string, string];
    post: string;
    postWhen: string;
    pause: string;
    play: string;
  };
  platforms: { from: string; to: string; upload: string };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  inout: {
    eyebrow: string;
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
    eyebrow: string;
    title: string;
    items: { id: RouteId; title: string; body: string }[];
    more: string;
  };
  personas: {
    eyebrow: string;
    title: string;
    tabs: { id: RouteId; label: string; title: string; body: string; points: string[] }[];
    link: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    badge: string;
    plans: { name: string; for: string }[];
    price: string;
    link: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string };
  sticky: string;
}

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    hero: {
      live: 'Live right now?',
      questions: [
        'Streaming for hours?',
        'Want the best moments clipped?',
        'Captioned and cut for vertical?',
        'Ready for your TikTok?',
      ],
      lead: 'ClipyRush finds the moments in your stream worth a clip, captions them and frames them for vertical. You decide where each cut starts and ends.',
      linkLabel: 'Paste a stream link',
      linkPlaceholder: 'twitch.tv/yourchannel/v/…',
      linkHint: 'Twitch, YouTube or Kick. We’ll clip it first when we launch.',
      submit: 'Get early access',
      note: 'Early access. The app isn’t live yet.',
    },
    stage: {
      label: 'How a stream becomes a clip',
      steps: ['You go live', 'AI finds the moment', 'Captioned, 9:16', 'Scheduled'],
      liveTime: '02:14:07',
      chat: ['CLIP IT', 'NO WAY', 'run it back'],
      found: 'Moment found',
      foundWhy: 'Chat spike + audio peak',
      caption: ['DID HE JUST', 'DRIFT THAT?!'],
      post: 'TikTok',
      postWhen: 'Scheduled for 7:00 PM · New York',
      pause: 'Pause animation',
      play: 'Play animation',
    },
    platforms: { from: 'Clip from', to: 'Post to', upload: 'or upload a file' },
    how: {
      eyebrow: 'How it works',
      title: 'From a three-hour stream to a clip you’re proud of.',
      steps: [
        {
          title: 'Paste your stream',
          body: 'Drop a VOD link or upload a file. ClipyRush reads the audio, the speech and the chat.',
        },
        {
          title: 'Review suggested clips',
          body: 'See why each moment was picked. Drag In and Out until the joke lands.',
        },
        {
          title: 'Save and schedule',
          body: 'Captions and vertical framing stay editable. Pick the time, in your audience’s time zone.',
        },
      ],
    },
    inout: {
      eyebrow: 'The In/Out editor',
      title: 'The AI suggests. You make the cut.',
      body: 'Every suggestion comes with its reason. Move the In and Out handles to keep the setup, the play and the reaction.',
      hint: 'Pick a clip, then drag the handles or use the arrow keys.',
      clips: [
        { title: 'The drift', why: 'Chat spike' },
        { title: 'Clutch save', why: 'Audio peak' },
        { title: 'Chat goes wild', why: 'Laughter + chat' },
      ],
      inLabel: 'In',
      outLabel: 'Out',
      duration: 'Clip length',
      save: 'Save this cut',
      saved: 'Cut saved',
      disclaimer: 'Interactive demo with sample data.',
      aiLabel: 'AI suggestion',
      youLabel: 'Your cut',
    },
    features: {
      eyebrow: 'Features',
      title: 'Everything between “that was insane” and “posted”.',
      items: [
        {
          id: 'features/ai-moments',
          title: 'AI moments',
          body: 'Finds highlights from speech, audio peaks and chat activity.',
        },
        {
          id: 'features/in-out-editor',
          title: 'In/Out editor',
          body: 'Frame-accurate start and end. The AI suggests, you decide.',
        },
        {
          id: 'features/captions',
          title: 'Captions',
          body: 'Auto captions you can edit word by word, styled for vertical.',
        },
        {
          id: 'features/vertical-reframe',
          title: 'Vertical reframe',
          body: 'Turns 16:9 into 9:16 and keeps the action in frame.',
        },
        {
          id: 'features/scheduling',
          title: 'Scheduling',
          body: 'Schedule to TikTok, Shorts and Reels in the right time zone.',
        },
        {
          id: 'features/analytics',
          title: 'Analytics',
          body: 'See which clips worked, per platform, without spreadsheets.',
        },
      ],
      more: 'See all features',
    },
    personas: {
      eyebrow: 'Built for',
      title: 'Whoever makes the cut.',
      tabs: [
        {
          id: 'use-cases/streamers',
          label: 'Streamers',
          title: 'Keep the play and the reaction.',
          body: 'Stream like you always do. The next day, your best moments are waiting, ready to review.',
          points: [
            'Clips from Twitch, YouTube and Kick',
            'Your call on every cut',
            'Captions in your style',
          ],
        },
        {
          id: 'use-cases/editors',
          label: 'Editors',
          title: 'Skip the scrubbing. Keep the control.',
          body: 'Start from suggested moments with source, framing, captions and timing all still editable.',
          points: [
            'Frame-accurate In/Out',
            'Editable captions and framing',
            'Source timecode on every clip',
          ],
        },
        {
          id: 'use-cases/agencies',
          label: 'Agencies',
          title: 'Every channel, version and owner in sight.',
          body: 'Review queues per channel, explicit versions and scheduling in each audience’s time zone.',
          points: ['Shared review queue', 'Versions before approval', 'Time zone per destination'],
        },
      ],
      link: 'Learn more',
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Plans for creators, editors and agencies.',
      badge: 'Early access. Pricing may change.',
      plans: [
        { name: 'Creator', for: 'For streamers clipping their own channel.' },
        { name: 'Editor', for: 'For editors and clippers working for creators.' },
        { name: 'Agency', for: 'For teams running many channels.' },
      ],
      price: 'Price announced at launch',
      link: 'See pricing details',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, answered.',
      items: [
        {
          q: 'What is ClipyRush?',
          a: 'A tool that finds the best moments in long streams and VODs and turns them into vertical, captioned clips. You review and adjust every cut before it goes anywhere.',
        },
        {
          q: 'Does the AI post for me?',
          a: 'No. The AI suggests. Nothing is published until you approve the cut and the schedule.',
        },
        {
          q: 'Which platforms does it work with?',
          a: 'We’re building for Twitch, YouTube and Kick streams, plus file upload, and scheduling to TikTok, YouTube Shorts and Instagram Reels.',
        },
        {
          q: 'Which caption languages are supported?',
          a: 'We’ll confirm the launch languages before early access opens. English, Portuguese and Spanish are our priority.',
        },
        {
          q: 'Who owns my clips?',
          a: 'You do. Your streams and clips are your content. The details will be in our Terms before launch.',
        },
        {
          q: 'What do you do with my email?',
          a: 'We use it only to send your early access invite and product updates you agree to. You can leave the list at any time.',
        },
        {
          q: 'When does it launch?',
          a: 'There’s no public date yet. People on the early access list get in first.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Join the early access list. Paste a stream link and we’ll clip it first when we launch.',
    },
    sticky: 'Get early access',
  },

  'pt-br': {
    hero: {
      live: 'Tá ao vivo agora?',
      questions: [
        'Tá gravando live de horas?',
        'Quer os melhores momentos já cortados?',
        'Legendados e no formato vertical?',
        'Prontos pro seu TikTok?',
      ],
      lead: 'A ClipyRush encontra os trechos da sua live que valem um corte, legenda e deixa no formato vertical. Você decide onde cada corte começa e termina.',
      linkLabel: 'Cole o link da sua live',
      linkPlaceholder: 'twitch.tv/seucanal/v/…',
      linkHint: 'Twitch, YouTube ou Kick. A gente corta ela primeiro quando lançar.',
      submit: 'Quero acesso antecipado',
      note: 'Acesso antecipado. O app ainda não foi lançado.',
    },
    stage: {
      label: 'Como uma live vira um corte',
      steps: ['Você entra ao vivo', 'A IA acha o momento', 'Legenda e 9:16', 'Agendado'],
      liveTime: '02:14:07',
      chat: ['CLIPA ISSO', 'KKKKKKK', 'replay pfv'],
      found: 'Momento encontrado',
      foundWhy: 'Pico no chat + no áudio',
      caption: ['QUE CURVA', 'FOI ESSA?!'],
      post: 'TikTok',
      postWhen: 'Agendado para 19h · São Paulo',
      pause: 'Pausar animação',
      play: 'Reproduzir animação',
    },
    platforms: { from: 'Corta lives da', to: 'Posta no', upload: 'ou envie um arquivo' },
    how: {
      eyebrow: 'Como funciona',
      title: 'De uma live de três horas a um corte que dá orgulho.',
      steps: [
        {
          title: 'Cole sua live',
          body: 'Mande o link do VOD ou suba o arquivo. A ClipyRush lê o áudio, a fala e o chat.',
        },
        {
          title: 'Revise os cortes sugeridos',
          body: 'Veja por que cada momento foi escolhido. Arraste o In e o Out até a piada encaixar.',
        },
        {
          title: 'Salve e agende',
          body: 'Legenda e enquadramento continuam editáveis. Escolha o horário no fuso do seu público.',
        },
      ],
    },
    inout: {
      eyebrow: 'O editor In/Out',
      title: 'A IA sugere. Você faz o corte.',
      body: 'Cada sugestão vem com o motivo. Mexa nas alças de In e Out para manter o contexto, o lance e a reação.',
      hint: 'Escolha um corte e arraste as alças ou use as setas do teclado.',
      clips: [
        { title: 'A curva', why: 'Pico no chat' },
        { title: 'Defesa no fim', why: 'Pico no áudio' },
        { title: 'Chat explodiu', why: 'Risada + chat' },
      ],
      inLabel: 'In',
      outLabel: 'Out',
      duration: 'Duração do corte',
      save: 'Salvar este corte',
      saved: 'Corte salvo',
      disclaimer: 'Demonstração interativa com dados de exemplo.',
      aiLabel: 'Sugestão da IA',
      youLabel: 'Seu corte',
    },
    features: {
      eyebrow: 'Recursos',
      title: 'Tudo entre o “mano, que isso?!” e o “postado”.',
      items: [
        {
          id: 'features/ai-moments',
          title: 'Momentos com IA',
          body: 'Acha os destaques pela fala, pelos picos de áudio e pela movimentação do chat.',
        },
        {
          id: 'features/in-out-editor',
          title: 'Editor In/Out',
          body: 'Início e fim no quadro exato. A IA sugere, você decide.',
        },
        {
          id: 'features/captions',
          title: 'Legendas',
          body: 'Legenda automática que você edita palavra por palavra, no estilo do vertical.',
        },
        {
          id: 'features/vertical-reframe',
          title: 'Enquadramento vertical',
          body: 'Transforma 16:9 em 9:16 sem perder o lance de vista.',
        },
        {
          id: 'features/scheduling',
          title: 'Agendamento',
          body: 'Agende para TikTok, Shorts e Reels no fuso certo.',
        },
        {
          id: 'features/analytics',
          title: 'Analytics',
          body: 'Veja quais cortes funcionaram em cada rede, sem planilha.',
        },
      ],
      more: 'Ver todos os recursos',
    },
    personas: {
      eyebrow: 'Feito para',
      title: 'Quem decide o corte.',
      tabs: [
        {
          id: 'use-cases/streamers',
          label: 'Streamers',
          title: 'Guarde o lance e a reação.',
          body: 'Faça a live como sempre. No dia seguinte, seus melhores momentos estão lá esperando revisão.',
          points: [
            'Cortes de Twitch, YouTube e Kick',
            'Você decide cada corte',
            'Legenda com a sua cara',
          ],
        },
        {
          id: 'use-cases/editors',
          label: 'Editores',
          title: 'Sem caçar momento na timeline. Com controle total.',
          body: 'Comece pelos momentos sugeridos, com origem, enquadramento, legenda e tempo editáveis.',
          points: [
            'In/Out no quadro exato',
            'Legenda e enquadramento editáveis',
            'Timecode de origem em cada corte',
          ],
        },
        {
          id: 'use-cases/agencies',
          label: 'Agências',
          title: 'Cada canal, versão e responsável à vista.',
          body: 'Fila de revisão por canal, versões explícitas e agendamento no fuso de cada público.',
          points: [
            'Fila de revisão compartilhada',
            'Versões antes da aprovação',
            'Fuso por destino',
          ],
        },
      ],
      link: 'Saiba mais',
    },
    pricing: {
      eyebrow: 'Preços',
      title: 'Planos para criadores, editores e agências.',
      badge: 'Acesso antecipado. Os preços podem mudar.',
      plans: [
        { name: 'Creator', for: 'Para streamers que cortam o próprio canal.' },
        { name: 'Editor', for: 'Para editores e clippers que trabalham para criadores.' },
        { name: 'Agency', for: 'Para equipes que cuidam de vários canais.' },
      ],
      price: 'Preço anunciado no lançamento',
      link: 'Ver detalhes dos preços',
    },
    faq: {
      eyebrow: 'Dúvidas',
      title: 'Perguntas frequentes.',
      items: [
        {
          q: 'O que é a ClipyRush?',
          a: 'Uma ferramenta que encontra os melhores momentos de lives e VODs longos e transforma em cortes verticais com legenda. Você revisa e ajusta cada corte antes de ir pra qualquer lugar.',
        },
        {
          q: 'A IA posta por mim?',
          a: 'Não. A IA sugere. Nada é publicado sem você aprovar o corte e o horário.',
        },
        {
          q: 'Funciona com quais plataformas?',
          a: 'Estamos construindo para lives da Twitch, YouTube e Kick, além de envio de arquivo, e agendamento para TikTok, YouTube Shorts e Instagram Reels.',
        },
        {
          q: 'Quais idiomas de legenda?',
          a: 'Vamos confirmar os idiomas antes de abrir o acesso antecipado. Português, inglês e espanhol são prioridade.',
        },
        {
          q: 'De quem são os cortes?',
          a: 'Seus. As lives e os cortes são conteúdo seu. Os detalhes vão estar nos Termos antes do lançamento.',
        },
        {
          q: 'O que vocês fazem com meu e-mail?',
          a: 'Usamos só para mandar seu convite de acesso antecipado e as novidades que você autorizar. Dá para sair da lista quando quiser.',
        },
        {
          q: 'Quando lança?',
          a: 'Ainda não tem data pública. Quem está na lista de acesso antecipado entra primeiro.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Entre na lista de acesso antecipado. Cole o link de uma live e a gente corta ela primeiro quando lançar.',
    },
    sticky: 'Quero acesso antecipado',
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    hero: {
      live: '¿Estás en directo?',
      questions: [
        '¿Haces streams de horas?',
        '¿Quieres tus mejores momentos ya recortados?',
        '¿Con subtítulos y en vertical?',
        '¿Listos para tu TikTok?',
      ],
      lead: 'ClipyRush encuentra los momentos de tu stream que valen un clip, les pone subtítulos y los encuadra en vertical. Tú decides dónde empieza y termina cada corte.',
      linkLabel: 'Pega el enlace de tu stream',
      linkPlaceholder: 'twitch.tv/tucanal/v/…',
      linkHint: 'Twitch, YouTube o Kick. Lo recortamos primero cuando lancemos.',
      submit: 'Obtener acceso anticipado',
      note: 'Acceso anticipado. La app aún no está disponible.',
    },
    stage: {
      label: 'Cómo un stream se convierte en clip',
      steps: ['Sales en directo', 'La IA encuentra el momento', 'Subtítulos y 9:16', 'Programado'],
      liveTime: '02:14:07',
      chat: ['CLIPEA ESO', 'JAJAJAJA', 'otra vez'],
      found: 'Momento encontrado',
      foundWhy: 'Pico de chat + audio',
      caption: ['¡¿QUÉ CURVA', 'FUE ESA?!'],
      post: 'TikTok',
      postWhen: 'Programado para las 19:00 · Ciudad de México',
      pause: 'Pausar animación',
      play: 'Reproducir animación',
    },
    platforms: { from: 'Recorta streams de', to: 'Publica en', upload: 'o sube un archivo' },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'De un stream de tres horas a un clip del que te sientas orgulloso.',
      steps: [
        {
          title: 'Pega tu stream',
          body: 'Pega el enlace del VOD o sube el archivo. ClipyRush lee el audio, la voz y el chat.',
        },
        {
          title: 'Revisa los clips sugeridos',
          body: 'Mira por qué se eligió cada momento. Arrastra el In y el Out hasta que el chiste funcione.',
        },
        {
          title: 'Guarda y programa',
          body: 'Subtítulos y encuadre siguen editables. Elige la hora en la zona horaria de tu audiencia.',
        },
      ],
    },
    inout: {
      eyebrow: 'El editor In/Out',
      title: 'La IA sugiere. Tú haces el corte.',
      body: 'Cada sugerencia trae su motivo. Mueve los controles In y Out para conservar el contexto, la jugada y la reacción.',
      hint: 'Elige un clip y arrastra los controles o usa las flechas del teclado.',
      clips: [
        { title: 'La curva', why: 'Pico de chat' },
        { title: 'Salvada final', why: 'Pico de audio' },
        { title: 'El chat explotó', why: 'Risas + chat' },
      ],
      inLabel: 'In',
      outLabel: 'Out',
      duration: 'Duración del clip',
      save: 'Guardar este corte',
      saved: 'Corte guardado',
      disclaimer: 'Demo interactiva con datos de ejemplo.',
      aiLabel: 'Sugerencia de la IA',
      youLabel: 'Tu corte',
    },
    features: {
      eyebrow: 'Funciones',
      title: 'Todo entre el “¡¿viste eso?!” y el “publicado”.',
      items: [
        {
          id: 'features/ai-moments',
          title: 'Momentos con IA',
          body: 'Encuentra lo mejor por la voz, los picos de audio y la actividad del chat.',
        },
        {
          id: 'features/in-out-editor',
          title: 'Editor In/Out',
          body: 'Inicio y fin al fotograma exacto. La IA sugiere, tú decides.',
        },
        {
          id: 'features/captions',
          title: 'Subtítulos',
          body: 'Subtítulos automáticos que editas palabra por palabra, con estilo vertical.',
        },
        {
          id: 'features/vertical-reframe',
          title: 'Encuadre vertical',
          body: 'Convierte 16:9 en 9:16 sin perder la acción.',
        },
        {
          id: 'features/scheduling',
          title: 'Programación',
          body: 'Programa en TikTok, Shorts y Reels en la zona horaria correcta.',
        },
        {
          id: 'features/analytics',
          title: 'Analíticas',
          body: 'Mira qué clips funcionaron en cada red, sin hojas de cálculo.',
        },
      ],
      more: 'Ver todas las funciones',
    },
    personas: {
      eyebrow: 'Hecho para',
      title: 'Quien decide el corte.',
      tabs: [
        {
          id: 'use-cases/streamers',
          label: 'Streamers',
          title: 'Conserva la jugada y la reacción.',
          body: 'Haz tu stream como siempre. Al día siguiente, tus mejores momentos te esperan para revisar.',
          points: [
            'Clips de Twitch, YouTube y Kick',
            'Tú decides cada corte',
            'Subtítulos con tu estilo',
          ],
        },
        {
          id: 'use-cases/editors',
          label: 'Editores',
          title: 'Sin buscar momentos a ciegas. Con todo el control.',
          body: 'Empieza por los momentos sugeridos, con origen, encuadre, subtítulos y tiempos editables.',
          points: [
            'In/Out al fotograma exacto',
            'Subtítulos y encuadre editables',
            'Timecode de origen en cada clip',
          ],
        },
        {
          id: 'use-cases/agencies',
          label: 'Agencias',
          title: 'Cada canal, versión y responsable a la vista.',
          body: 'Cola de revisión por canal, versiones explícitas y programación en la zona horaria de cada audiencia.',
          points: [
            'Cola de revisión compartida',
            'Versiones antes de aprobar',
            'Zona horaria por destino',
          ],
        },
      ],
      link: 'Más información',
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Planes para creadores, editores y agencias.',
      badge: 'Acceso anticipado. Los precios pueden cambiar.',
      plans: [
        { name: 'Creator', for: 'Para streamers que recortan su propio canal.' },
        { name: 'Editor', for: 'Para editores y clippers que trabajan para creadores.' },
        { name: 'Agency', for: 'Para equipos que gestionan varios canales.' },
      ],
      price: 'Precio anunciado en el lanzamiento',
      link: 'Ver detalles de precios',
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Preguntas frecuentes.',
      items: [
        {
          q: '¿Qué es ClipyRush?',
          a: 'Una herramienta que encuentra los mejores momentos de streams y VODs largos y los convierte en clips verticales con subtítulos. Revisas y ajustas cada corte antes de que vaya a cualquier lado.',
        },
        {
          q: '¿La IA publica por mí?',
          a: 'No. La IA sugiere. Nada se publica hasta que apruebes el corte y el horario.',
        },
        {
          q: '¿Con qué plataformas funciona?',
          a: 'Estamos construyendo para streams de Twitch, YouTube y Kick, además de subida de archivos, y programación en TikTok, YouTube Shorts e Instagram Reels.',
        },
        {
          q: '¿Qué idiomas de subtítulos hay?',
          a: 'Confirmaremos los idiomas antes de abrir el acceso anticipado. Español, inglés y portugués son prioridad.',
        },
        {
          q: '¿De quién son los clips?',
          a: 'Tuyos. Tus streams y clips son tu contenido. Los detalles estarán en los Términos antes del lanzamiento.',
        },
        {
          q: '¿Qué hacen con mi correo?',
          a: 'Solo lo usamos para enviarte tu invitación de acceso anticipado y las novedades que aceptes. Puedes salir de la lista cuando quieras.',
        },
        {
          q: '¿Cuándo se lanza?',
          a: 'Todavía no hay fecha pública. Quienes están en la lista de acceso anticipado entran primero.',
        },
      ],
    },
    final: {
      title: 'Your stream. Your cut.',
      body: 'Únete a la lista de acceso anticipado. Pega el enlace de un stream y lo recortamos primero cuando lancemos.',
    },
    sticky: 'Obtener acceso anticipado',
  },
};
