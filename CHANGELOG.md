# Changelog

## [0.4.0](https://github.com/Endika/zuhaitz/compare/v0.3.0...v0.4.0) (2026-06-10)


### Features

* **i18n:** add locale infra, UI strings and language switcher ([261133f](https://github.com/Endika/zuhaitz/commit/261133fc2528487f3e6701cf32efd8a23647fdf0))
* **i18n:** localize trait vocabulary (es/en) ([bee14bb](https://github.com/Endika/zuhaitz/commit/bee14bb3220fec9a2c1c5baa78cb31d99b4e1f65))
* **i18n:** translate all 174 species names and notes to english ([739ee12](https://github.com/Endika/zuhaitz/commit/739ee1245e8a0cd5654715af66dc43a568497708))

## [0.3.0](https://github.com/Endika/zuhaitz/compare/v0.2.2...v0.3.0) (2026-06-10)


### Features

* **ui:** show app icon and version on home ([db38443](https://github.com/Endika/zuhaitz/commit/db38443f3366275f192de462f50313cf242c9e9f))

## [0.2.2](https://github.com/Endika/zuhaitz/compare/v0.2.1...v0.2.2) (2026-06-10)


### Bug Fixes

* **ui:** add favicon and apple-touch-icon links ([1ed96b3](https://github.com/Endika/zuhaitz/commit/1ed96b3de957618af4ce126a1d3bda2c44a05449))
* **ui:** recover from no-match by undoing the eliminating answer ([6ff7ba0](https://github.com/Endika/zuhaitz/commit/6ff7ba08f03f5c55d1d7aebefa1e49ecdb33ea2f))

## [0.2.1](https://github.com/Endika/zuhaitz/compare/v0.2.0...v0.2.1) (2026-06-10)


### Bug Fixes

* **ui:** force light theme and drop near-black dark mode ([444b212](https://github.com/Endika/zuhaitz/commit/444b21246f5b6782dfa420a0ea8b74da33a4c2f9))

## [0.2.0](https://github.com/Endika/zuhaitz/compare/v0.1.0...v0.2.0) (2026-06-10)


### Features

* **data:** dataset validation with referential integrity and dup detection ([e925fd1](https://github.com/Endika/zuhaitz/commit/e925fd136509b9fd941d5d0893d5251ae5942084))
* **data:** expand species dataset to 174 trees across families ([8480f11](https://github.com/Endika/zuhaitz/commit/8480f115d00b92a2256f5c96d9d65075307bd04f))
* **data:** extend trait vocabulary and group-file structure for expansion ([1202e65](https://github.com/Endika/zuhaitz/commit/1202e652c1d4a02637dd4e604bfa819953679798))
* **data:** seed dataset (traits, sketches, 16 species) passing validation ([a8becfb](https://github.com/Endika/zuhaitz/commit/a8becfbab8204a40dfae155dd470ab41ff51b965))
* **data:** validator enforces n-a invariant and required trait keys ([b7dc4ed](https://github.com/Endika/zuhaitz/commit/b7dc4ed7eda915377630fedaeb0c448303360924))
* **engine:** adaptive most-discriminating question selection ([d05bf75](https://github.com/Endika/zuhaitz/commit/d05bf7526e7fd321d2b434256208044b289d6849))
* **engine:** add core dataset and answer types ([5ab102c](https://github.com/Endika/zuhaitz/commit/5ab102c9d6e1b244f744ec3280ca6f76621efca8))
* **engine:** candidate filter with variable-trait and don't-know handling ([aec6326](https://github.com/Endika/zuhaitz/commit/aec63261bc6d17ef96256971684d3291324441f7))
* **engine:** session with answer stack, skip, back, reset ([ec46478](https://github.com/Endika/zuhaitz/commit/ec464785040400900f68d5771d4401e55f63e6c6))
* **pwa:** offline precache, autoUpdate, installable manifest ([d00e07e](https://github.com/Endika/zuhaitz/commit/d00e07e309613e52bf13f93da681dc9e4bf621a4))
* **ui:** adaptive identify view with options, skip, back, counter ([63d6959](https://github.com/Endika/zuhaitz/commit/63d695970faa03c2571ac99a3b4bd036c7d62353))
* **ui:** dom helper and sketch renderer ([99fb146](https://github.com/Endika/zuhaitz/commit/99fb146fb971c151e6f2da47f602309275db7ef8))
* **ui:** home view with disclaimer and hash router ([8f947fb](https://github.com/Endika/zuhaitz/commit/8f947fbeef6b08bb8b4c4a64f508f5e71780e25f))
* **ui:** light/dark token system and responsive styles ([1f90e2e](https://github.com/Endika/zuhaitz/commit/1f90e2e6ab071bf95c8b35be1bf5f28f7f20cbfb))
* **ui:** result view with species cards and restart ([c9b6242](https://github.com/Endika/zuhaitz/commit/c9b6242539e1771981429a706dce38fffeaf7964))


### Bug Fixes

* **data:** use n-a leafShape for fan palms so they are not eliminated ([d01abd1](https://github.com/Endika/zuhaitz/commit/d01abd1535fb77ac43ca8b2f95682130365d97ce))


### Documentation

* add README with app icon and MIT license ([84a56d1](https://github.com/Endika/zuhaitz/commit/84a56d1887e5cdb0be07031c9762044d84bc9e87))
* set license holder to Endika Iglesias ([be2a8fa](https://github.com/Endika/zuhaitz/commit/be2a8fa89d5a6d81a516b5ab106b3ce8978c92f9))


### Chores

* align scripts and set pages base for release flow ([9fd5167](https://github.com/Endika/zuhaitz/commit/9fd5167f133c1a629b8c8e4609bc270068a14f2c))
* scaffold vite + ts + vitest pwa project ([2dd2bf4](https://github.com/Endika/zuhaitz/commit/2dd2bf43f69cba41641ff579176561268ca3ca28))
