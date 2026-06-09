import type { Species } from '../../engine/types';
import { seedSpecies } from './seed';
import { quercusSpecies } from './quercus';
import { coniferSpecies } from './conifers';
import { urbanSpecies } from './urban-ornamentals';
import { rosaceaeSpecies } from './rosaceae';
import { riparianSpecies } from './riparian';
import { mediterraneanSpecies } from './mediterranean';

// Assembled species list. Each group file is authored independently and dropped
// in here without conflicts. Keep this list and the spread below in sync.
export const species: Species[] = [
  ...seedSpecies,
  ...quercusSpecies,
  ...coniferSpecies,
  ...urbanSpecies,
  ...rosaceaeSpecies,
  ...riparianSpecies,
  ...mediterraneanSpecies,
];
