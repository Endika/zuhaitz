import { el } from './dom';

const DISCLAIMER =
  'Ayuda de identificación orientativa, no determinación pericial.';

// Home view: title, one-line intro, the disclaimer, and a "Empezar" button.
export function renderHome(onStart: () => void): HTMLElement {
  return el('main', { class: 'view home' }, [
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
  ]);
}
