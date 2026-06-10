import type { I18nText, Locale } from '../engine/types';

const STORAGE_KEY = 'zuhaitz.locale';

// ─────────────────────────────────────────────────────────────────────────────
// UI string keys. Keep this a string-literal union so t() lookups are typesafe
// and STRINGS is checked exhaustively for both locales.
// ─────────────────────────────────────────────────────────────────────────────
export type UiKey =
  | 'home.intro'
  | 'disclaimer'
  | 'home.start'
  | 'identify.dontKnow'
  | 'identify.back'
  | 'result.title'
  | 'result.noMatch'
  | 'result.bestMatch'
  | 'result.restart'
  | 'lang.es'
  | 'lang.en'
  | 'lang.label';

export const STRINGS: Record<Locale, Record<UiKey, string>> = {
  es: {
    'home.intro':
      'Identifica árboles comunes de España respondiendo a unas pocas preguntas sobre sus hojas, fruto y corteza.',
    'disclaimer': 'Ayuda de identificación orientativa, no determinación pericial.',
    'home.start': 'Empezar',
    'identify.dontKnow': 'No lo sé',
    'identify.back': 'Atrás',
    'result.title': 'Resultado',
    'result.noMatch':
      'Sin coincidencias. Prueba a cambiar una respuesta: quizá un rasgo se interpretó de otro modo.',
    'result.bestMatch': 'Coincidencia más probable:',
    'result.restart': 'Reiniciar',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'lang.label': 'Idioma',
  },
  en: {
    'home.intro':
      'Identify common trees of Spain by answering a few questions about their leaves, fruit and bark.',
    'disclaimer': 'Indicative identification aid, not an expert determination.',
    'home.start': 'Start',
    'identify.dontKnow': "I don't know",
    'identify.back': 'Back',
    'result.title': 'Result',
    'result.noMatch':
      'No matches. Try changing an answer: perhaps a trait was interpreted differently.',
    'result.bestMatch': 'Most likely match:',
    'result.restart': 'Restart',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'lang.label': 'Language',
  },
};

function detectLocale(): Locale {
  const nav = typeof navigator !== 'undefined' ? navigator.language : undefined;
  if (!nav) return 'es';
  return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
}

/** Current locale: persisted choice, else detected from navigator, else 'es'. */
export function getLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // localStorage unavailable (e.g. private mode); fall through to detection.
  }
  return detectLocale();
}

/** Persist the chosen locale. */
export function setLocale(l: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, l);
  } catch {
    // Ignore storage failures; the in-memory render still reflects the choice.
  }
}

/** Resolve an I18nText to a plain string for the given (or current) locale. */
export function loc(v: I18nText, locale?: Locale): string {
  if (typeof v === 'string') return v;
  return v[locale ?? getLocale()];
}

/** Look up a UI chrome string for the given (or current) locale. */
export function t(key: UiKey, locale?: Locale): string {
  return STRINGS[locale ?? getLocale()][key];
}

/** Counter prefix, e.g. "Quedan 5" / "5 left". */
export function remaining(n: number, locale?: Locale): string {
  const l = locale ?? getLocale();
  return l === 'es' ? `Quedan ${n}` : `${n} left`;
}

/** "Posibles coincidencias (n):" / "Possible matches (n):". */
export function possibleMatches(n: number, locale?: Locale): string {
  const l = locale ?? getLocale();
  return l === 'es' ? `Posibles coincidencias (${n}):` : `Possible matches (${n}):`;
}
