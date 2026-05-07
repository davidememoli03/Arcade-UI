# Arcade-UI

80s arcade-style UI component library — neon palette, pixel animations, built-in SFX.  
Published to npm as [`@davide03memoli/arcade-ui`](https://www.npmjs.com/package/@davide03memoli/arcade-ui).

[![CI](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml/badge.svg)](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@davide03memoli/arcade-ui?style=flat-square&color=00f5ff)](https://www.npmjs.com/package/@davide03memoli/arcade-ui)
[![Storybook](https://img.shields.io/badge/storybook-live-ff4785?style=flat-square&logo=storybook)](https://davidememoli03.github.io/Arcade-UI/)
[![license](https://img.shields.io/npm/l/@davide03memoli/arcade-ui?style=flat-square&color=ffd700)](./arcade-ui/LICENSE)

---

## Quick Start

```bash
npm install @davide03memoli/arcade-ui
```

```js
import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
```

```html
<button class="arc-btn arc-btn-primary">INSERT COIN</button>

<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">GAME OVER</div>
  <div class="arc-panel-body">You scored 42,000 points.</div>
  <div class="arc-panel-footer">
    <button class="arc-btn arc-btn-primary">PLAY AGAIN</button>
  </div>
</div>

<div class="arc-input-wrapper">
  <label class="arc-label">PLAYER NAME</label>
  <input class="arc-input" placeholder="AAA" maxlength="3" />
</div>
```

**No build tools?** Drop two lines into any HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui@1/dist/arcade-ui.min.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui@1/dist/arcade-ui.es.js"></script>
```

> For full component docs, design tokens, JS API, audio, and browser support see **[arcade-ui/README.md](./arcade-ui/README.md)** or the **[live Storybook](https://davidememoli03.github.io/Arcade-UI/)**.

---

## Repository Structure

```
Arcade-UI/
├── arcade-ui/              # npm package — source, build, tests, Storybook
│   ├── src/
│   │   ├── tokens/         # CSS custom properties (colors, typography, spacing, animation)
│   │   ├── components/     # Component CSS files (.arc-btn, .arc-panel, .arc-input …)
│   │   ├── effects/        # JS effects (glitch)
│   │   ├── audio/          # AudioManager (Web Audio API)
│   │   └── stories/        # Storybook stories
│   ├── .storybook/         # Storybook configuration
│   └── package.json
├── scripts/                # Git workflow helpers (new-branch, open-pr, cleanup)
└── .github/workflows/      # CI/CD pipelines (ci.yml, storybook.yml)
```

---

## Local Setup

```bash
cd arcade-ui
npm install
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Compile library to `dist/` |
| `npm test` | Run tests with Vitest |
| `npm run lint` | ESLint + Stylelint |
| `npm run storybook` | Storybook at `localhost:6006` |
| `npm run build-storybook` | Static Storybook build |

---

## Pull Request Workflow

All work goes through PRs — never commit directly to `main`.

```bash
# 1. Create a branch
./scripts/new-branch.sh feat/my-feature

# 2. Work and commit
git add .
git commit -m "feat: describe the change"

# 3. Open a PR
./scripts/open-pr.sh "feat: PR title"

# 4. After merge — clean up local branches
./scripts/cleanup.sh
# Use --dry-run to preview what would be deleted
```

---

## CI/CD Pipeline

| Job | Trigger | Description |
|-----|---------|-------------|
| **Lint** | PR + push to `main` | ESLint + Stylelint |
| **Test** | PR + push to `main` | Vitest |
| **Build** | PR + push to `main` | Vite build + `dist/` file check |
| **Publish** | push to `main` only | Publish `@davide03memoli/arcade-ui` to npm |
| **Storybook** | push to `main` only | Deploy to GitHub Pages |

> Publish is gated: the version in `package.json` must not already exist on npm.

---

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     new feature
fix:      bug fix
docs:     documentation only
style:    formatting, no logic change
refactor: refactoring without new features
test:     add or update tests
ci:       pipeline changes
chore:    maintenance tasks (e.g. version bump)
```

---

## Migration Guide — `.arcade-*` → `.arc-*`

The `.arcade-*` classes are **deprecated** as of v1.x and will be **removed in v2.0**.  
Replace them with their `.arc-*` equivalents:

| Deprecated | Current |
|------------|---------|
| `arcade-btn` | `arc-btn` + variant e.g. `arc-btn-primary` |
| `arcade-panel` | `arc-panel` |
| `arcade-panel-title` | `arc-panel-header` |
| `arcade-panel-body` | `arc-panel-body` |
| `arcade-input` | `arc-input` |
| `arcade-label` | `arc-label` |

```html
<!-- Before (deprecated) -->
<button class="arcade-btn">START</button>
<div class="arcade-panel">
  <h2 class="arcade-panel-title">SCORE</h2>
  <p class="arcade-panel-body">42,000 pts</p>
</div>

<!-- After (current) -->
<button class="arc-btn arc-btn-primary">START</button>
<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">SCORE</div>
  <div class="arc-panel-body">42,000 pts</div>
</div>
```
