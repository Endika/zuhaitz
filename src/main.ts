import './styles/app.css';
import { registerSW } from 'virtual:pwa-register';
import type { Locale } from './engine/types';
import { dataset } from './data/dataset';
import { createSession } from './engine/session';
import { mount, el } from './ui/dom';
import { renderHome } from './ui/home';
import { renderIdentify } from './ui/identify';
import { renderResult } from './ui/result';
import { getLocale, setLocale, t } from './i18n';

const app = document.querySelector<HTMLDivElement>('#app');

// A single session persists across the identify -> result navigation so "Atrás"
// from the result returns to the in-progress key.
let session = createSession(dataset);

function go(hash: string): void {
  if (location.hash === hash) render();
  else location.hash = hash;
}

function render(): void {
  if (!app) return;
  const route = location.hash || '#/';

  if (route === '#/identify') {
    // If the session already converged (e.g. coming back here at <= 3 candidates),
    // skip straight to the result rather than mounting a view that bounces.
    if (session.converged()) {
      go('#/result');
      return;
    }
    mount(app, renderIdentify(session, dataset.sketches, { onResult: () => go('#/result') }));
    return;
  }

  if (route === '#/result') {
    mount(
      app,
      renderResult(session, dataset, {
        onRestart: () => {
          session.reset();
          go('#/');
        },
        // The result's "Atrás" only appears on the no-match (0 candidates) screen.
        // Undo the answer that eliminated everything so the key has candidates
        // again; otherwise the identify guard (candidates <= 3) bounces straight
        // back here. After back() candidates are > 3 again (the eliminating
        // question was only asked above that threshold), so the question reappears.
        onBack: () => {
          session.back();
          go('#/identify');
        },
      }),
    );
    return;
  }

  // Default: home.
  mount(
    app,
    renderHome(() => {
      session = createSession(dataset);
      go('#/identify');
    }),
  );
}

// Persistent header with the ES/EN language switcher. It lives above the mounted
// view (outside #app) so it survives route changes. Switching language persists
// the choice, updates <html lang>, re-renders the header active state, and
// re-renders the current view in place so the change is visible immediately.
function renderHeader(): HTMLElement {
  const locale = getLocale();
  const langs: Locale[] = ['es', 'en'];

  const buttons = langs.map((l) =>
    el('button', {
      class: `lang-switch__btn${l === locale ? ' lang-switch__btn--active' : ''}`,
      text: t(`lang.${l}`),
      disabled: l === locale,
      'aria-pressed': String(l === locale),
      onClick: () => {
        setLocale(l);
        document.documentElement.lang = l;
        header.replaceWith(renderHeader());
        render();
      },
    }),
  );

  const header = el(
    'header',
    { class: 'app-header' },
    [
      el('nav', { class: 'lang-switch', 'aria-label': t('lang.label') }, buttons),
    ],
  );
  return header;
}

document.documentElement.lang = getLocale();
const header = renderHeader();
if (app && app.parentNode) app.parentNode.insertBefore(header, app);

window.addEventListener('hashchange', render);
render();

// Register the service worker. autoUpdate applies new versions silently, with no
// manual prompt, so users never get stuck on a stale cached build.
registerSW({ immediate: true });
