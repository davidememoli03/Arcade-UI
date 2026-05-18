# Changelog

All notable changes to this project are documented in this file.

The format is inspired by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- CI/local tooling to guard the public TypeScript surface: `scripts/verify-package-exports.mjs` (exports snapshot + on-disk paths), `scripts/smoke-dts-consumer.mjs` (strict `tsc` against an `npm pack` tarball), and `dts-consumer/` smoke sources.
- Documented runtime exports `arcTabs`, `bindTabs`, `updateSlider`, and `bindSliders` in `arcade-ui.d.ts` (aligned with `src/index.js`).
- `package.json` `"exports"` entries for `"."` and `"./js"` now expose a `"types"` condition so strict `NodeNext` / bundler resolution finds `dist/arcade-ui.d.ts`.
- **`@davide03memoli/arcade-ui/react`**: `dist/arcade-ui-react.d.ts` augments `react`’s `HTMLAttributes` with documented Arcade `data-*` hooks (notably narrowed `data-arc-glitch-intensity`), plus empty JS/CJS shims for bundlers.
- Optional peers `react` and `@types/react` (for JSX augmentation consumers).
- `npm run smoke:react-jsx` + `react-jsx-consumer/` exercise `jsx: react-jsx`, thin wrappers, bootstrap/CSS/`initGlitch`/`AudioManager` patterns, and a negative fixture for `data-arc-glitch-intensity`; **React 18 and React 19** are both typechecked against the tarball.

### Changed

- _(none)_

### Fixed

- _(none)_

---

When you change `package.json` `exports`, update `scripts/package-exports.snapshot.json` and add a note under `[Unreleased]` (or the next release section) in this file so CI stays meaningful.
