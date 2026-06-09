import type { SketchId } from '../engine/types';
import { el } from './dom';

// Render a schematic SVG sketch by id into a <span class="sketch">.
// SVG strings are author-controlled, build-time-baked dataset content (not user input),
// so injecting them as innerHTML is safe here. Missing ids fall back to an empty box.
export function renderSketch(
  sketches: Record<SketchId, string>,
  sketchId: SketchId,
): HTMLElement {
  const svg = sketches[sketchId];
  if (svg) {
    return el('span', { class: 'sketch', html: svg, 'aria-hidden': 'true' });
  }
  return el('span', { class: 'sketch sketch--empty', 'aria-hidden': 'true' });
}
