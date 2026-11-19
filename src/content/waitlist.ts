import type { Locale } from '../config/routes';
import type { Platform, Profile } from '../lib/waitlist/schema';

/** Waitlist form, early-access pages and confirmation email, per market. */
export interface WaitlistCopy {
  form: {
    email: string;
    emailPlaceholder: string;
    profile: string;
    profiles: Record<Profile, string>;
    platformStream: string;
    platformPost: string;
    platforms: Record<Platform, string>;
    platformNone: string;
    channel: string;
    channelHint: string;
    consent: string;
    privacy: string;
    submit: string;
    sending: string;
    success: { title: string; body: string };
    errors: {
      email: string;
      consent: string;
      channel: string;
      profile: string;
      captcha: string;
      rate: string;
      generic: string;
    };
  };
  page: {
    title: string;
    lead: string;
    points: string[];
    invalid: string;
    error: string;
  };
  confirmed: { title: string; body: string; streamer: string; clipper: string };
  email: { subject: string; heading: string; body: string; button: string; ignore: string };
}

export const waitlistCopy: Record<Locale, WaitlistCopy> = {
  en: {
    form: {
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      profile: 'I’m a',
      profiles: { streamer: 'Streamer', clipper: 'Clipper', editor: 'Editor', agency: 'Agency' },
      platformStream: 'Where do you stream?',
      platformPost: 'Where do you post?',
      platforms: {
        twitch: 'Twitch',
        youtube: 'YouTube',
        kick: 'Kick',
        tiktok: 'TikTok',
        instagram: 'Instagram',
        other: 'Somewhere else',
      },
      platformNone: 'Choose one',
      channel: 'Your channel link (optional)',
      channelHint: 'Helps us invite channels that fit first.',
      consent:
        'Email me the early access invite and RushClippy updates. I can unsubscribe anytime.',
      privacy: 'Privacy policy',
      submit: 'Join the list',
      sending: 'Saving your spot…',
      success: {
        title: 'Almost there.',
        body: 'We sent a link to your inbox. Click it to confirm your spot.',
      },
      errors: {
        email: 'Check your email address. Something looks off.',
        consent: 'Tick the box so we can send you the invite.',
        channel: 'That link doesn’t look right. Paste the full channel URL or leave it empty.',
        profile: 'Pick what describes you best.',
        captcha: 'We couldn’t verify you’re human. Try again.',
        rate: 'Too many tries in a row. Wait a minute and try again.',
        generic: 'We couldn’t save your spot. Check your connection and try again.',
      },
    },
    page: {
      title: 'Get early access',
      lead: 'Pick your side, leave your email and we’ll invite you as we open, in waves.',
      points: [
        'One confirmation email, then the invite when it’s your turn.',
        'No card needed to join the list.',
        'Leave the list anytime.',
      ],
      invalid:
        'That confirmation link expired or isn’t valid. Join again and we’ll send a new one.',
      error: 'We couldn’t confirm your spot right now. Try the link again in a few minutes.',
    },
    confirmed: {
      title: 'You’re on the list.',
      body: 'When we open, the invite goes to this email. Meanwhile, see what’s coming for your side.',
      streamer: 'For streamers',
      clipper: 'For clippers',
    },
    email: {
      subject: 'Confirm your spot on RushClippy',
      heading: 'One click to save your spot',
      body: 'Confirm your email and you’re on the RushClippy early access list. We’ll invite you as we open.',
      button: 'Confirm my spot',
      ignore: 'If this wasn’t you, ignore this email and nothing happens.',
    },
  },

  'pt-br': {
    form: {
      email: 'E-mail',
      emailPlaceholder: 'voce@email.com',
      profile: 'Eu sou',
      profiles: { streamer: 'Streamer', clipper: 'Clipador', editor: 'Editor', agency: 'Agência' },
      platformStream: 'Onde você faz live?',
      platformPost: 'Onde você posta?',
      platforms: {
        twitch: 'Twitch',
        youtube: 'YouTube',
        kick: 'Kick',
        tiktok: 'TikTok',
        instagram: 'Instagram',
        other: 'Outro lugar',
      },
      platformNone: 'Escolha uma',
      channel: 'Link do seu canal (opcional)',
      channelHint: 'Ajuda a gente a chamar primeiro os canais que combinam.',
      consent:
        'Quero receber o convite do acesso antecipado e novidades da RushClippy por e-mail. Posso sair quando quiser.',
      privacy: 'Política de privacidade',
      submit: 'Entrar na lista',
      sending: 'Guardando seu lugar…',
      success: {
        title: 'Quase lá.',
        body: 'Mandamos um link pro seu e-mail. Clique nele pra confirmar seu lugar.',
      },
      errors: {
        email: 'Confere o e-mail. Parece que falta alguma coisa.',
        consent: 'Marque a caixa pra gente poder te mandar o convite.',
        channel: 'Esse link não parece certo. Cole o endereço completo do canal ou deixe vazio.',
        profile: 'Escolha o que mais combina com você.',
        captcha: 'Não deu pra confirmar que você é humano. Tenta de novo.',
        rate: 'Muitas tentativas seguidas. Espera um minuto e tenta de novo.',
        generic: 'Não conseguimos guardar seu lugar. Confere sua conexão e tenta de novo.',
      },
    },
    page: {
      title: 'Acesso antecipado',
      lead: 'Escolha seu lado, deixe seu e-mail e a gente te chama conforme for abrindo, em levas.',
      points: [
        'Um e-mail de confirmação e, depois, o convite quando chegar sua vez.',
        'Não precisa de cartão pra entrar na lista.',
        'Dá pra sair da lista quando quiser.',
      ],
      invalid:
        'Esse link de confirmação expirou ou não é válido. Entra na lista de novo que a gente manda outro.',
      error: 'Não deu pra confirmar seu lugar agora. Tenta o link de novo em alguns minutos.',
    },
    confirmed: {
      title: 'Pronto, seu lugar está guardado.',
      body: 'Quando a gente abrir, o convite chega neste e-mail. Enquanto isso, veja o que vem pro seu lado.',
      streamer: 'Pra streamers',
      clipper: 'Pra clipadores',
    },
    email: {
      subject: 'Confirme seu lugar na RushClippy',
      heading: 'Falta um clique pra guardar seu lugar',
      body: 'Confirme seu e-mail e você entra na lista de acesso antecipado da RushClippy. A gente te chama conforme for abrindo.',
      button: 'Confirmar meu lugar',
      ignore: 'Se não foi você, é só ignorar este e-mail.',
    },
  },

  // TODO review: native Spanish (LatAm neutral) pass before launch.
  es: {
    form: {
      email: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      profile: 'Soy',
      profiles: { streamer: 'Streamer', clipper: 'Clipper', editor: 'Editor', agency: 'Agencia' },
      platformStream: '¿Dónde haces streams?',
      platformPost: '¿Dónde publicas?',
      platforms: {
        twitch: 'Twitch',
        youtube: 'YouTube',
        kick: 'Kick',
        tiktok: 'TikTok',
        instagram: 'Instagram',
        other: 'Otro lugar',
      },
      platformNone: 'Elige una',
      channel: 'Enlace de tu canal (opcional)',
      channelHint: 'Nos ayuda a invitar primero a los canales que encajan.',
      consent:
        'Quiero recibir por correo la invitación al acceso anticipado y novedades de RushClippy. Puedo darme de baja cuando quiera.',
      privacy: 'Política de privacidad',
      submit: 'Entrar en la lista',
      sending: 'Guardando tu lugar…',
      success: {
        title: 'Ya casi.',
        body: 'Te enviamos un enlace a tu correo. Haz clic para confirmar tu lugar.',
      },
      errors: {
        email: 'Revisa tu correo. Parece que falta algo.',
        consent: 'Marca la casilla para que podamos enviarte la invitación.',
        channel: 'Ese enlace no parece correcto. Pega la URL completa del canal o déjalo vacío.',
        profile: 'Elige lo que mejor te describe.',
        captcha: 'No pudimos verificar que eres humano. Inténtalo de nuevo.',
        rate: 'Demasiados intentos seguidos. Espera un minuto e inténtalo de nuevo.',
        generic: 'No pudimos guardar tu lugar. Revisa tu conexión e inténtalo de nuevo.',
      },
    },
    page: {
      title: 'Acceso anticipado',
      lead: 'Elige tu lado, deja tu correo y te invitamos a medida que abramos, por tandas.',
      points: [
        'Un correo de confirmación y, después, la invitación cuando sea tu turno.',
        'No necesitas tarjeta para entrar en la lista.',
        'Puedes salir de la lista cuando quieras.',
      ],
      invalid:
        'Ese enlace de confirmación venció o no es válido. Vuelve a anotarte y te enviamos otro.',
      error: 'No pudimos confirmar tu lugar ahora. Prueba el enlace de nuevo en unos minutos.',
    },
    confirmed: {
      title: 'Listo, tu lugar está guardado.',
      body: 'Cuando abramos, la invitación llega a este correo. Mientras tanto, mira lo que viene para tu lado.',
      streamer: 'Para streamers',
      clipper: 'Para clippers',
    },
    email: {
      subject: 'Confirma tu lugar en RushClippy',
      heading: 'Un clic para guardar tu lugar',
      body: 'Confirma tu correo y entras en la lista de acceso anticipado de RushClippy. Te invitamos a medida que abramos.',
      button: 'Confirmar mi lugar',
      ignore: 'Si no fuiste tú, ignora este correo y no pasa nada.',
    },
  },
};
