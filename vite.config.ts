/// <reference types="vitest/config" />
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf-8'),
) as { version: string };

export default defineConfig({
  // Exposes the package version to the app for the footer (replaced at build time).
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  // Served from https://endika.github.io/zuhaitz/ — must match the repo name
  // exactly (GitHub Pages is case-sensitive).
  base: '/zuhaitz/',
  build: {
    target: 'es2022',
  },
  plugins: [
    VitePWA({
      // autoUpdate: new service workers activate immediately, avoiding stale
      // cached clients (lesson from EventSplit's stale-blob incident).
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png', 'icon-maskable-512.png'],
      manifest: {
        name: 'Zuhaitz — identificador de árboles',
        short_name: 'zuhaitz',
        description: 'Identificador offline de árboles mediante una clave de rasgos adaptativa.',
        lang: 'es',
        display: 'standalone',
        start_url: '/zuhaitz/',
        scope: '/zuhaitz/',
        theme_color: '#2f7d52',
        background_color: '#f7f6f2',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // The dataset is bundled into the JS, so precaching the app shell makes the
        // whole identifier work fully offline.
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
      },
    }),
  ],
  test: {
    globals: true,
    passWithNoTests: true,
  },
});
