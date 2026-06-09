import type { Trait } from '../engine/types';

export const traits: Trait[] = [
  {
    id: 'leaf',
    question: '¿Cómo es la hoja?',
    options: [
      { id: 'simple', label: 'Simple (una sola lámina)', sketchId: 'leaf-simple' },
      { id: 'compound', label: 'Compuesta (varios folíolos)', sketchId: 'leaf-compound' },
      { id: 'needle', label: 'Acícula o escama (conífera)', sketchId: 'leaf-needle' },
    ],
  },
  {
    id: 'margin',
    question: '¿Cómo es el borde de la hoja?',
    options: [
      { id: 'entire', label: 'Liso (entero)', sketchId: 'margin-entire' },
      { id: 'serrate', label: 'Dentado / serrado', sketchId: 'margin-serrate' },
      { id: 'lobed', label: 'Lobulado', sketchId: 'margin-lobed' },
      { id: 'wavy', label: 'Ondulado', sketchId: 'margin-wavy' },
    ],
  },
  {
    id: 'arrangement',
    question: '¿Cómo se disponen las hojas en la rama?',
    options: [
      { id: 'alternate', label: 'Alternas', sketchId: 'arrangement-alternate' },
      { id: 'opposite', label: 'Opuestas', sketchId: 'arrangement-opposite' },
      { id: 'whorled', label: 'Verticiladas', sketchId: 'arrangement-whorled' },
    ],
  },
  {
    id: 'persistence',
    question: '¿Mantiene las hojas en invierno?',
    options: [
      { id: 'deciduous', label: 'Caduca (las pierde en invierno)', sketchId: 'persistence-deciduous' },
      { id: 'evergreen', label: 'Perenne (siempre verde)', sketchId: 'persistence-evergreen' },
    ],
  },
  {
    id: 'fruit',
    question: '¿Qué tipo de fruto produce?',
    options: [
      { id: 'acorn', label: 'Bellota', sketchId: 'fruit-acorn' },
      { id: 'samara', label: 'Sámara (alada)', sketchId: 'fruit-samara' },
      { id: 'pome', label: 'Pomo (tipo manzana)', sketchId: 'fruit-pome' },
      { id: 'drupe', label: 'Drupa (carnosa con hueso)', sketchId: 'fruit-drupe' },
      { id: 'cone', label: 'Piña / cono', sketchId: 'fruit-cone' },
      { id: 'legume', label: 'Legumbre (vaina)', sketchId: 'fruit-legume' },
      { id: 'none-visible', label: 'Sin fruto visible llamativo', sketchId: 'fruit-none' },
    ],
  },
  {
    id: 'bark',
    question: '¿Cómo es la corteza del tronco?',
    options: [
      { id: 'smooth', label: 'Lisa', sketchId: 'bark-smooth' },
      { id: 'fissured', label: 'Agrietada / surcada', sketchId: 'bark-fissured' },
      { id: 'flaking', label: 'Se desprende en placas', sketchId: 'bark-flaking' },
      { id: 'thorny', label: 'Con espinas o aguijones', sketchId: 'bark-thorny' },
    ],
  },
];
