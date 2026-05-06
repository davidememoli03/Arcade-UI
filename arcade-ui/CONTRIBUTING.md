# Contributing to Arcade UI

First off — thank you! Every bug report, suggestion, and pull request makes Arcade UI better.

> **Before you start:** please read the [Code of Conduct](./CODE_OF_CONDUCT.md). All contributors are expected to follow it.

---

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Development setup](#development-setup)
3. [Development workflow](#development-workflow)
4. [Commit convention](#commit-convention)
5. [Adding a new component](#adding-a-new-component)
6. [Adding a Storybook story](#adding-a-storybook-story)
7. [Running tests](#running-tests)
8. [Opening a pull request](#opening-a-pull-request)
9. [Review and merge process](#review-and-merge-process)
10. [Reporting bugs](#reporting-bugs)

---

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| Node.js | **20 LTS** (22 recommended) |
| npm | 10+ |
| Git | 2.40+ |

Check your versions:

```bash
node -v   # v20.x or higher
npm -v    # 10.x or higher
```

---

## Development setup

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-username>/Arcade-UI.git
cd Arcade-UI/arcade-ui

# 2. Install dependencies
npm install

# 3. Start the dev server (Vite)
npm run dev           # http://localhost:5173

# 4. Start Storybook (component explorer)
npm run storybook     # http://localhost:6006
```

### Project structure

```
arcade-ui/
├── src/
│   ├── audio/              # AudioManager (Web Audio API + optional Howler)
│   ├── base/               # Reset, scrollbar, root defaults
│   ├── components/         # One CSS file per component
│   ├── effects/            # JS behaviour (glitch.js, …)
│   ├── stories/            # Storybook stories
│   ├── styles/
│   │   └── arcade-ui.css   # CSS bundle entry — @import all components
│   ├── tokens/             # Design token CSS files
│   └── __tests__/          # Vitest unit tests
├── dist/                   # Build output — do not edit
├── .storybook/             # Storybook config
└── package.json
```

---

## Development workflow

### Branch naming

| Branch | Purpose |
|--------|---------|
| `feat/<scope>-<short-desc>` | New feature or component |
| `fix/<scope>-<short-desc>` | Bug fix |
| `docs/<short-desc>` | Documentation only |
| `test/<short-desc>` | Tests only |
| `chore/<short-desc>` | Tooling, CI, deps |

Examples:

```
feat/button-xl-size
fix/panel-corner-mobile
docs/audio-manager-api
chore/upgrade-vite-8
```

### Workflow

```bash
# Start from an up-to-date main
git checkout main
git pull upstream main

# Create your branch
git checkout -b feat/button-xl-size

# ... make changes ...

# Check everything passes before committing
npm run lint && npm test && npm run build

# Commit (follow convention below)
git commit -m "feat(button): add arc-btn-xl size variant"

# Push and open a PR
git push origin feat/button-xl-size
```

---

## Commit convention

This project follows **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**.

```
<type>(<scope>): <short description>

[optional body — explain the WHY, not the WHAT]

[optional footer — e.g. BREAKING CHANGE: …]
```

### Types

| Type | When to use |
|------|------------|
| `feat` | New feature or component |
| `fix` | Bug fix |
| `docs` | README, CONTRIBUTING, JSDoc, comments |
| `test` | Adding or updating tests |
| `style` | Formatting only (no logic change) |
| `refactor` | Code change that isn't a fix or feature |
| `perf` | Performance improvement |
| `chore` | Build, CI, dependency updates |

### Scopes

Use the component or area being changed:

`button` · `panel` · `input` · `badge` · `accordion` · `glow` · `glitch` · `crt`  
`audio` · `tokens` · `stories` · `ci` · `readme` · `deps`

### Examples

```
feat(button): add arc-btn-xl size variant
fix(panel): correct corner alignment on mobile
docs(readme): update CDN URL to jsDelivr v1
test(audio): add unit tests for mute persistence
refactor(glitch): extract animation timing to token
chore(deps): upgrade vite to 8.x
```

### Breaking changes

Add `!` after the type/scope and a `BREAKING CHANGE:` footer:

```
feat(tokens)!: rename --arc-space-* to --arc-gap-*

BREAKING CHANGE: all spacing tokens have been renamed.
Migration: s/--arc-space-/--arc-gap-/g
```

---

## Adding a new component

Follow this checklist to add a component (e.g. `tooltip`):

### Checklist

- [ ] **CSS file** — create `src/components/tooltip.css`

  ```css
  /* src/components/tooltip.css
     Componente arc-tooltip: …
     ─────────────────────── */

  .arc-tooltip {
    /* use design tokens */
    background: var(--arc-color-bg-panel);
    border: var(--arc-border-sm) solid var(--arc-color-cyan);
    color: var(--arc-color-text);
    font-family: var(--arc-font-mono);
  }
  ```

- [ ] **Register in bundle** — add `@import` to `src/styles/arcade-ui.css`

  ```css
  @import url('../components/tooltip.css');
  ```

- [ ] **Storybook story** — create `src/stories/Tooltip.stories.js` (see [next section](#adding-a-storybook-story))

- [ ] **Tests** — create `src/__tests__/tooltip.test.js` (see [running tests](#running-tests))

- [ ] **If it has JS behaviour** — create `src/effects/tooltip.js`, export from `src/index.js`, declare types in `src/arcade-ui.d.ts`

- [ ] **Token export** *(only if adding new tokens)* — add to the relevant `src/tokens/*.css` file

- [ ] **README update** — add a row to the Components table

### CSS conventions

```css
/* ✅ DO */
.arc-tooltip { color: var(--arc-color-cyan); }
.arc-tooltip-red { border-color: var(--arc-color-red); }

/* ❌ DON'T */
.tooltip { color: #00f5ff; }          /* missing prefix, hardcoded color */
.arc-tooltip { border-radius: 8px; }  /* no border-radius in arcade style */
```

- Class prefix: always `arc-`
- CSS custom property prefix: always `--arc-`
- No `border-radius` (pixel-art style uses sharp corners)
- No easing functions — use `steps()` from `--arc-ease-*` tokens
- No `!important`
- Colors from tokens only — never hardcoded hex/rgb

---

## Adding a Storybook story

Every component needs at least one story. Use `@storybook/html` (no framework).

### Story template

```js
// src/stories/Tooltip.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Tooltip',
  // argTypes and args for controls panel (optional)
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'PRESS START',
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: ({ label }) => `<span class="arc-tooltip">${label}</span>`,
}

export const Cyan = {
  render: () => '<span class="arc-tooltip arc-tooltip-cyan">CYAN</span>',
}

// For stories needing JS, return a DOM element:
export const Interactive = {
  render: () => {
    const el = document.createElement('div')
    el.innerHTML = '<span class="arc-tooltip">HOVER ME</span>'
    el.querySelector('.arc-tooltip').addEventListener('mouseenter', () => {
      // ...
    })
    return el
  },
}
```

### Story titles

| Category | Title format | Example |
|----------|-------------|---------|
| UI components | `Components/<Name>` | `Components/Tooltip` |
| Effects | `Effects/<Name>` | `Effects/Glitch` |
| Design tokens | `Tokens/<Name>` | `Tokens/Colors` |
| Audio | `Audio/<Name>` | `Audio/AudioManager` |

---

## Running tests

Tests use **[Vitest](https://vitest.dev/)** with **jsdom**.

```bash
# Run all tests once
npm test

# Watch mode (re-runs on file change)
npx vitest

# Run a single file
npx vitest src/__tests__/tooltip.test.js
```

### Writing a test

```js
// src/__tests__/tooltip.test.js
import { describe, it, expect } from 'vitest'

describe('arc-tooltip — DOM structure', () => {
  it('has the base class', () => {
    const el = document.createElement('span')
    el.className = 'arc-tooltip'
    expect(el.classList.contains('arc-tooltip')).toBe(true)
  })
})
```

### Test coverage rules

| What | Required |
|------|---------|
| New CSS component | At least: base class exists, variant classes exist |
| New JS module | All public methods: happy path + edge cases |
| Bug fix | Regression test that fails before the fix |

### Full check gate

Run this before every commit:

```bash
npm run lint && npm test && npm run build
```

All three must be green. The CI pipeline enforces the same sequence.

---

## Opening a pull request

1. Push your branch to your fork
2. Open a PR against `main` on the upstream repo
3. Fill in the PR template (title, description, checklist)
4. Make sure the CI checks pass (lint → test → build)

### PR title

Use the same format as your commit message:

```
feat(button): add arc-btn-xl size variant
fix(panel): correct corner alignment on mobile
```

### PR description

```markdown
## What
Short description of the change.

## Why
Why is this change needed?

## How
How does the implementation work? Any trade-offs?

## Checklist
- [ ] lint passes
- [ ] tests pass
- [ ] build passes
- [ ] story added / updated
- [ ] README updated (if new component)
```

---

## Review and merge process

1. **CI checks** run automatically — all must pass before review
2. **At least one approval** is required to merge
3. The reviewer may request changes — address them with additional commits
4. Once approved, the maintainer **squash-merges** to keep a clean history
5. If the `package.json` version was bumped, the CI **publishes to npm automatically** after merge to `main`

### Version bump

The release CI checks whether the version in `package.json` is already on npm. If you changed any code, bump the version before merging:

```bash
npm version patch   # bug fix → 1.0.0 → 1.0.1
npm version minor   # new feature → 1.0.0 → 1.1.0
npm version major   # breaking change → 1.0.0 → 2.0.0
```

Then update the `version` constant in `src/index.js` to match.

---

## Reporting bugs

Open an issue at [github.com/davidememoli03/Arcade-UI/issues](https://github.com/davidememoli03/Arcade-UI/issues) with:

- **Title**: `[Bug] <short description>`
- **Browser & version**
- **Steps to reproduce**
- **Expected vs actual behaviour**
- **Minimal reproduction** (CodePen / JSFiddle link preferred)
