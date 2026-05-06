# Contributing to Arcade UI

Thank you for taking the time to contribute!

## Development setup

```bash
git clone https://github.com/davidememoli03/Arcade-UI.git
cd Arcade-UI/arcade-ui
npm install
npm run dev          # Vite dev server
npm run storybook    # Component explorer at localhost:6006
```

## Project structure

```
arcade-ui/
├── src/
│   ├── audio/          # AudioManager (Web Audio + Howler)
│   ├── components/     # CSS components (button, panel, input, …)
│   ├── effects/        # JS effects (glitch)
│   ├── stories/        # Storybook stories
│   ├── styles/         # CSS bundle entry
│   └── tokens/         # Design token CSS files
├── dist/               # Build output (do not edit)
└── src/__tests__/      # Vitest unit tests
```

## Before opening a PR

```bash
npm run lint    # ESLint + Stylelint
npm test        # Vitest (44 tests)
npm run build   # Vite library build
```

All three must pass. The CI pipeline enforces the same checks.

## Conventions

- **No semicolons**, single quotes, 2-space indent (ESLint enforced)
- CSS class prefix: `arc-` (e.g. `.arc-btn`, `.arc-panel`)
- CSS token prefix: `--arc-` (e.g. `--arc-color-cyan`)
- New components need: a CSS file in `src/components/`, a story in `src/stories/`
- New JS modules need: tests in `src/__tests__/` and exports in `src/index.js`

## Reporting issues

Open an issue at [github.com/davidememoli03/Arcade-UI/issues](https://github.com/davidememoli03/Arcade-UI/issues).
