import type { Dataset } from '../engine/types';
import { traits } from './traits';
import { sketches } from './sketches';
import { species } from './species';

export const dataset: Dataset = Object.freeze({ traits, sketches, species });
