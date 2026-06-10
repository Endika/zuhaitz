import type { createSession } from '../engine/session';
import type { Dataset, Species } from '../engine/types';
import { el } from './dom';
import { renderSketch } from './sketch';
import { renderPhoto } from './photo';
import { loc, possibleMatches, t } from '../i18n';

type Session = ReturnType<typeof createSession>;

interface ResultHandlers {
  onRestart: () => void;
  onBack: () => void;
}

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
          el('small', { text: loc(opt.label) }),
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
  const photo = renderPhoto(species);
  const parts: HTMLElement[] = [];
  if (photo) parts.push(photo);
  parts.push(
    el('h2', { text: loc(species.commonName) }),
    el('p', { class: 'card__sci', text: species.scientificName }),
    el('p', { text: loc(species.distinctiveNotes) }),
    speciesSketches(species, traits, sketches),
  );
  return el('article', { class: 'card' }, parts);
}

// Result view: up to 3 remaining species as cards. If none match, an explanatory
// message with a back link. Footer disclaimer, plus a "Reiniciar" button.
export function renderResult(
  session: Session,
  dataset: Dataset,
  handlers: ResultHandlers,
): HTMLElement {
  const candidates = session.candidates();
  const children: HTMLElement[] = [el('h1', { text: t('result.title') })];

  if (candidates.length === 0) {
    children.push(
      el('p', { text: t('result.noMatch') }),
      el('button', {
        class: 'btn btn--primary',
        text: t('identify.back'),
        onClick: handlers.onBack,
      }),
    );
  } else {
    children.push(
      el('p', {
        class: 'muted',
        text:
          candidates.length === 1
            ? t('result.bestMatch')
            : possibleMatches(candidates.length),
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
      text: t('result.restart'),
      onClick: handlers.onRestart,
    }),
    el('p', { class: 'footer', text: t('disclaimer') }),
  );

  return el('main', { class: 'view result' }, children);
}
