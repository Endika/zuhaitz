import './styles/app.css';
import { dataset } from './data/dataset';
import { createSession } from './engine/session';
import { mount } from './ui/dom';
import { renderHome } from './ui/home';
import { renderIdentify } from './ui/identify';
import { renderResult } from './ui/result';

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
    if (session.currentQuestion() === null || session.candidates().length <= 3) {
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
        onBack: () => go('#/identify'),
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

window.addEventListener('hashchange', render);
render();
