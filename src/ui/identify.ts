import type { createSession } from '../engine/session';
import type { Dataset } from '../engine/types';
import { el } from './dom';
import { renderSketch } from './sketch';

type Session = ReturnType<typeof createSession>;

interface IdentifyHandlers {
  onResult: () => void;
}

// Adaptive identify view. Renders the current question with one button per option
// (each illustrated by its sketch), plus "No lo sé" (skip), "Atrás" (back), and a
// live candidate counter. Re-renders in place after each action. When there is no
// further discriminating question, or candidates narrow to <= 3, hands off to onResult.
export function renderIdentify(
  session: Session,
  sketches: Dataset['sketches'],
  handlers: IdentifyHandlers,
): HTMLElement {
  const root = el('main', { class: 'view identify' });

  const draw = (): void => {
    const candidates = session.candidates();
    const question = session.currentQuestion();

    if (question === null || candidates.length <= 3) {
      handlers.onResult();
      return;
    }

    const counter = el('p', {
      class: 'identify__counter',
      text: `Quedan ${candidates.length}`,
    });

    const heading = el('h2', { text: question.question });

    const options = el(
      'div',
      { class: 'options' },
      question.options.map((opt) =>
        el(
          'button',
          {
            class: 'btn option',
            onClick: () => {
              session.answer(question.id, opt.id);
              draw();
            },
          },
          [
            renderSketch(sketches, opt.sketchId),
            el('span', { class: 'option__label', text: opt.label }),
          ],
        ),
      ),
    );

    const controls = el('div', { class: 'controls' }, [
      el('button', {
        class: 'btn',
        text: 'No lo sé',
        onClick: () => {
          session.skip();
          draw();
        },
      }),
      el('button', {
        class: 'btn',
        text: 'Atrás',
        disabled: session.answers().length === 0,
        onClick: () => {
          session.back();
          draw();
        },
      }),
    ]);

    root.replaceChildren(counter, heading, options, controls);
  };

  draw();
  return root;
}
