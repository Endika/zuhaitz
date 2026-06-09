import { dataset } from '../src/data/dataset';
import { validateDataset } from '../src/data/validate';

const { errors, warnings } = validateDataset(dataset);
warnings.forEach(w => console.warn('⚠️ ', w));
if (errors.length) { errors.forEach(e => console.error('❌', e)); process.exit(1); }
console.log(`✅ dataset OK: ${dataset.species.length} species, ${dataset.traits.length} traits`);
