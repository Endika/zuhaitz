// Schematic flora-book style sketches. One per sketchId referenced by traits.ts.
// All use viewBox 0 0 64 64, stroke=currentColor, fill=none so they inherit the text color.
const S = 'viewBox="0 0 64 64" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

export const sketches: Record<string, string> = {
  // --- leaf type ---
  'leaf-simple': `<svg ${S}><path d="M32 6 C12 24 12 40 32 58 C52 40 52 24 32 6 Z"/><path d="M32 6 V58"/></svg>`,
  'leaf-compound': `<svg ${S}><path d="M32 58 V8"/><path d="M32 18 C24 14 18 16 14 12"/><path d="M32 18 C40 14 46 16 50 12"/><path d="M32 32 C24 28 18 30 14 26"/><path d="M32 32 C40 28 46 30 50 26"/><path d="M32 46 C24 42 18 44 14 40"/><path d="M32 46 C40 42 46 44 50 40"/></svg>`,
  'leaf-needle': `<svg ${S}><path d="M32 58 V10"/><path d="M32 50 l-10 -6"/><path d="M32 50 l10 -6"/><path d="M32 40 l-10 -6"/><path d="M32 40 l10 -6"/><path d="M32 30 l-9 -6"/><path d="M32 30 l9 -6"/><path d="M32 20 l-7 -5"/><path d="M32 20 l7 -5"/></svg>`,

  // --- leaf margin ---
  'margin-entire': `<svg ${S}><path d="M8 40 C20 28 44 28 56 40"/></svg>`,
  'margin-serrate': `<svg ${S}><path d="M6 40 l6 -8 6 8 6 -8 6 8 6 -8 6 8 6 -8 6 8"/></svg>`,
  'margin-lobed': `<svg ${S}><path d="M8 40 C14 28 18 28 22 36 C26 28 30 28 34 36 C38 28 42 28 46 36 C50 28 54 28 58 40"/></svg>`,
  'margin-wavy': `<svg ${S}><path d="M6 38 C14 30 18 46 26 38 C34 30 38 46 46 38 C54 30 58 46 60 38"/></svg>`,

  // --- arrangement ---
  'arrangement-alternate': `<svg ${S}><path d="M32 58 V6"/><path d="M32 20 l16 -8"/><path d="M32 32 l-16 -8"/><path d="M32 44 l16 -8"/></svg>`,
  'arrangement-opposite': `<svg ${S}><path d="M32 58 V6"/><path d="M32 22 l16 -8"/><path d="M32 22 l-16 -8"/><path d="M32 42 l16 -8"/><path d="M32 42 l-16 -8"/></svg>`,
  'arrangement-whorled': `<svg ${S}><path d="M32 58 V6"/><path d="M32 28 l16 -6"/><path d="M32 28 l-16 -6"/><path d="M32 28 l10 14"/><path d="M32 28 l-10 14"/></svg>`,

  // --- persistence ---
  'persistence-deciduous': `<svg ${S}><path d="M32 58 V30"/><path d="M32 30 l-12 -14"/><path d="M32 30 l12 -14"/><path d="M32 38 l-9 -10"/><path d="M32 38 l9 -10"/><path d="M14 12 l4 4 -5 1 z"/><path d="M50 12 l-4 4 5 1 z"/></svg>`,
  'persistence-evergreen': `<svg ${S}><path d="M32 58 V46"/><path d="M32 6 L18 28 H46 Z"/><path d="M32 22 L20 42 H44 Z"/></svg>`,

  // --- fruit ---
  'fruit-acorn': `<svg ${S}><path d="M22 28 a10 14 0 0 0 20 0 Z"/><path d="M20 28 h24"/><path d="M24 24 h16"/><path d="M32 14 v6"/></svg>`,
  'fruit-samara': `<svg ${S}><circle cx="24" cy="40" r="6"/><path d="M28 36 C40 24 52 22 56 18 C50 26 44 34 30 42"/></svg>`,
  'fruit-pome': `<svg ${S}><path d="M32 18 C20 18 16 30 22 44 C26 52 38 52 42 44 C48 30 44 18 32 18 Z"/><path d="M32 18 V10"/></svg>`,
  'fruit-drupe': `<svg ${S}><circle cx="32" cy="36" r="16"/><path d="M32 20 V12"/></svg>`,
  'fruit-cone': `<svg ${S}><path d="M32 8 L20 50 H44 Z"/><path d="M24 24 H40"/><path d="M22 34 H42"/><path d="M21 44 H43"/></svg>`,
  'fruit-legume': `<svg ${S}><path d="M14 22 C40 18 50 34 50 46 C40 44 18 44 14 22 Z"/><circle cx="24" cy="32" r="2"/><circle cx="32" cy="36" r="2"/><circle cx="40" cy="40" r="2"/></svg>`,
  'fruit-none': `<svg ${S}><circle cx="32" cy="32" r="20"/><path d="M18 18 L46 46"/></svg>`,

  // --- bark ---
  'bark-smooth': `<svg ${S}><rect x="16" y="8" width="32" height="48" rx="3"/></svg>`,
  'bark-fissured': `<svg ${S}><rect x="16" y="8" width="32" height="48" rx="3"/><path d="M26 10 V54"/><path d="M38 10 V54"/><path d="M32 14 V50"/></svg>`,
  'bark-flaking': `<svg ${S}><rect x="16" y="8" width="32" height="48" rx="3"/><path d="M22 18 q6 4 0 10 q-4 -2 0 -10"/><path d="M38 30 q6 4 0 12 q-4 -3 0 -12"/></svg>`,
  'bark-thorny': `<svg ${S}><rect x="20" y="8" width="24" height="48" rx="3"/><path d="M20 18 l-8 -4"/><path d="M44 26 l8 -4"/><path d="M20 38 l-8 4"/><path d="M44 46 l8 4"/></svg>`,
};
