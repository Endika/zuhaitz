<p align="center">
  <img src="./public/icon-512.png" width="128" alt="zuhaitz app icon" />
</p>

<h1 align="center">zuhaitz</h1>

<p align="center">
  An offline tree identifier for Spain — answer simple illustrated questions to narrow down the species, no login, no internet.
</p>

<p align="center">
  <a href="https://github.com/Endika/zuhaitz/releases/latest"><img src="https://img.shields.io/github/v/release/Endika/zuhaitz?style=flat-square&color=2f7d52&label=release" alt="Latest release" /></a>
  <a href="https://github.com/Endika/zuhaitz/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/Endika/zuhaitz/ci.yml?style=flat-square&label=ci&branch=main" alt="CI" /></a>
  <a href="https://github.com/Endika/zuhaitz/commits/main"><img src="https://img.shields.io/github/last-commit/Endika/zuhaitz?style=flat-square&color=2f7d52" alt="Last commit" /></a>
  <a href="https://www.conventionalcommits.org"><img src="https://img.shields.io/badge/conventional_commits-1.0.0-2f7d52?style=flat-square" alt="Conventional Commits" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/Endika/zuhaitz?style=flat-square&color=10B981" alt="License: MIT" /></a>
</p>

<p align="center">
  <a href="https://endika.github.io/zuhaitz/"><b>▶ Open it</b></a>
</p>

## What you can do

- Identify a tree on a single device — no signup, no accounts, fully offline.
- Answer simple illustrated questions about leaves, bark, fruit and shape.
- Watch the list of candidate species shrink with every answer.
- Get illustrated sketches for each trait, so you don't need to know botanical names.
- Reach a likely species (or a short shortlist) without ever going online.
- Start over any time to identify another tree.
- Install it as a PWA on any device.

## How to start

1. Open zuhaitz on any device.
2. Answer the illustrated questions about the tree in front of you.
3. Keep narrowing down until you reach the most likely species.

## Install on your device

Open **[endika.github.io/zuhaitz](https://endika.github.io/zuhaitz/)** in Chrome, Edge or Safari and use **"Add to Home Screen"** (mobile) or **"Install"** (desktop). Behaves like a native app and works fully offline by design.

## Disclaimer

zuhaitz is a tool for **orientación**, not **determinación pericial** — it offers botanical-ID help, not expert determination. Use it to point yourself toward a likely species, not as authoritative or legally binding identification. When certainty matters (toxicity, protected species, professional use), consult a qualified botanist.

---

## For developers

**Stack** — TypeScript + Vite + vanilla TS + vite-plugin-pwa.

**Architecture** — A build-time-baked dataset of 174 species (traits + SVG sketches) drives a pure-function adaptive multi-trait identification engine, packaged as an offline PWA.

**Local dev**

```sh
git clone git@github.com:Endika/zuhaitz.git
cd zuhaitz
npm install
npm run dev
```

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Validate dataset, typecheck, build   |
| `npm test`          | Run tests once                       |
| `npm run lint`      | ESLint (zero warnings)               |
| `npm run typecheck` | TypeScript type check                |

CI runs lint, typecheck, tests, and the production build on every PR.

Open-source, MIT licensed. PRs welcome.
