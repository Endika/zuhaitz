import type { Species } from '../../engine/types';
import { seedSpecies } from './seed';

// Assembled species list. Additional family/origin batches are concatenated here later.
export const species: Species[] = [...seedSpecies];
