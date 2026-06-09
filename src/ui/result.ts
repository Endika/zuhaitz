import type { createSession } from '../engine/session';
import type { Dataset, Species } from '../engine/types';
import { el } from './dom';
import { renderSketch } from './sketch';

type Session = ReturnType<typeof createSession>;

interface ResultHandlers {
  onRestart: () => void;
  onBack: () => void;
}

const DISCLAIMER =
  'Ayuda de identificación orientativa, no determinación pericial.';

// Build the illustrated trait list for one species: for every answered/known trait,
// show the sketch + label of each admissible option value. Generic over any trait id.
function speciesSketches(
  species: Species,
  traits: Dataset['traits'],
  sketches: Dataset['sketches'],
): HTMLElement {
  const cells: HTMLElement[] = [];
  for (const trait of traits) {
    const values = species.traits[trait.id];
    if (!values || values.length === 0) continue;
    for (const value of values) {
      const opt = trait.options.find((o) => o.id === value);
      if (!opt) continue;
      cells.push(
        el('div', { class: 'card__trait' }, [
          renderSketch(sketches, opt.sketchId),
          el('small', { text: opt.label }),
        ]),
      );
    }
  }
  return el('div', { class: 'card__sketches' }, cells);
}

function speciesCard(
  species: Species,
  traits: Dataset['traits'],
  sketches: Dataset['sketches'],
): HTMLElement {
  return el('article', { class: 'card' }, [
    el('h2', { text: species.commonName }),
    el('p', { class: 'card__sci', text: species.scientificName }),
    el('p', { text: species.distinctiveNotes }),
    speciesSketches(species, traits, sketches),
  ]);
}

// Result view: up to 3 remaining species as cards. If none match, an explanatory
// message with a back link. Footer disclaimer, plus a "Reiniciar" button.
export function renderResult(
  session: Session,
  dataset: Dataset,
  handlers: ResultHandlers,
): HTMLElement {
  const candidates = session.candidates();
  const children: HTMLElement[] = [el('h1', { text: 'Resultado' })];

  if (candidates.length === 0) {
    children.push(
      el('p', {
        text: 'Sin coincidencias. Prueba a cambiar una respuesta: quizá un rasgo se interpretó de otro modo.',
      }),
      el('button', {
        class: 'btn btn--primary',
        text: 'Atrás',
        onClick: handlers.onBack,
      }),
    );
  } else {
    children.push(
      el('p', {
        class: 'muted',
        text:
          candidates.length === 1
            ? 'Coincidencia más probable:'
            : `Posibles coincidencias (${candidates.length}):`,
      }),
      el(
        'div',
        { class: 'cards' },
        candidates.map((s) => speciesCard(s, dataset.traits, dataset.sketches)),
      ),
    );
  }

  children.push(
    el('button', {
      class: 'btn',
      text: 'Reiniciar',
      onClick: handlers.onRestart,
    }),
    el('p', { class: 'footer', text: DISCLAIMER }),
  );

  return el('main', { class: 'view result' }, children);
}
