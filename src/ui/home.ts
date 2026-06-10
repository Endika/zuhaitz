import { el } from './dom';
import { t } from '../i18n';

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
    el('p', { class: 'home__intro', text: t('home.intro') }),
    el('p', { class: 'disclaimer', text: t('disclaimer') }),
    el('button', {
      class: 'btn btn--primary',
      text: t('home.start'),
      onClick: onStart,
    }),
    el('p', { class: 'footer footer--version', text: `v${__APP_VERSION__}` }),
  ]);
}
