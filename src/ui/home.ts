import { el } from './dom';

const DISCLAIMER =
  'Ayuda de identificación orientativa, no determinación pericial.';

// Home view: app icon, title, one-line intro, the disclaimer, a "Empezar" button,
// and a version footer (matches the other sibling apps).
export function renderHome(onStart: () => void): HTMLElement {
  return el('main', { class: 'view home' }, [
    el('img', {
      class: 'home__icon',
      src: `${import.meta.env.BASE_URL}icon-512.png`,
      alt: '',
      width: '96',
      height: '96',
    }),
    el('h1', { text: 'zuhaitz' }),
    el('p', {
      class: 'home__intro',
      text: 'Identifica árboles comunes de España respondiendo a unas pocas preguntas sobre sus hojas, fruto y corteza.',
    }),
    el('p', { class: 'disclaimer', text: DISCLAIMER }),
    el('button', {
      class: 'btn btn--primary',
      text: 'Empezar',
      onClick: onStart,
    }),
    el('p', { class: 'footer footer--version', text: `v${__APP_VERSION__}` }),
  ]);
}
