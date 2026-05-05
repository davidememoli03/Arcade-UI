# Storybook Setup — Guida Passo Passo

Tutte le operazioni vanno eseguite dalla cartella `arcade-ui/` salvo diversa indicazione.

```bash
cd arcade-ui
```

---

## Passo 1 — Installare i pacchetti Storybook

Il progetto usa **Vite + vanilla JS** (non React), quindi il framework corretto è `@storybook/html-vite`.

> **Problema peer-deps:** se hai già una versione parziale di `storybook` in `node_modules` (es. v8), prima rimuovila:
> ```bash
> npm uninstall storybook
> ```

In **Storybook v10** gli addon essentials sono stati inglobati nel core: servono solo **due pacchetti**.

```bash
npm install --save-dev storybook@10 @storybook/html-vite@10
```

---

## Passo 2 — Creare la cartella `.storybook`

```bash
mkdir -p .storybook
```

### 2a — `.storybook/main.js`

```js
// .storybook/main.js
/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.js'],
  addons: [],   // in v10 gli essentials (backgrounds, controls, docs...) sono nel core
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};

export default config;
```

### 2b — `.storybook/preview.js`

Sfondo scuro `#0a0010` per visualizzare correttamente i componenti.

```js
// .storybook/preview.js
import '../src/styles/arcade-ui.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'arcade-dark',
      values: [
        { name: 'arcade-dark', value: '#0a0010' },
        { name: 'white',       value: '#ffffff' },
      ],
    },
  },
};

export default preview;
```

### 2c — `.storybook/manager.js`

Colora anche l'interfaccia di Storybook con il tema scuro.

```js
// .storybook/manager.js
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const arcadeTheme = create({
  base: 'dark',
  brandTitle: 'Arcade UI',
  brandUrl:   'https://github.com/davide03memoli/Arcade-UI',
  appBg:           '#0a0010',
  appContentBg:    '#0a0010',
  appPreviewBg:    '#0a0010',
  barBg:           '#110020',
  colorPrimary:    '#00ffff',
  colorSecondary:  '#00ffff',
});

addons.setConfig({ theme: arcadeTheme });
```

---

## Passo 3 — Creare le stories

Crea la cartella:

```bash
mkdir -p src/stories
```

### 3a — `src/stories/Button.stories.js`

```js
// src/stories/Button.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Button',
};

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: () => '<button class="arcade-btn">PLAY</button>',
};

export const Disabled = {
  render: () => '<button class="arcade-btn" disabled>DISABLED</button>',
};

export const WithLabel = {
  args: { label: 'INSERT COIN' },
  render: ({ label }) => `<button class="arcade-btn">${label}</button>`,
  argTypes: {
    label: { control: 'text' },
  },
};
```

### 3b — `src/stories/Panel.stories.js`

```js
// src/stories/Panel.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Panel',
};

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: () => `
    <div class="arcade-panel">
      <h2 class="arcade-panel__title">GAME OVER</h2>
      <p class="arcade-panel__body">Insert coin to continue.</p>
    </div>
  `,
};

export const WithButton = {
  render: () => `
    <div class="arcade-panel">
      <h2 class="arcade-panel__title">HIGH SCORE</h2>
      <p class="arcade-panel__body">You reached rank #1!</p>
      <button class="arcade-btn">CONTINUE</button>
    </div>
  `,
};
```

### 3c — `src/stories/Input.stories.js`

```js
// src/stories/Input.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Input',
};

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: () => '<input class="arcade-input" placeholder="ENTER NAME" />',
};

export const Disabled = {
  render: () => '<input class="arcade-input" placeholder="LOCKED" disabled />',
};

export const WithLabel = {
  render: () => `
    <label class="arcade-label">
      PLAYER NAME
      <input class="arcade-input" placeholder="AAA" maxlength="3" />
    </label>
  `,
};
```

> Le classi CSS `arcade-panel`, `arcade-panel__title`, `arcade-input`, `arcade-label`, ecc. sono già definite in `src/styles/arcade-ui.css`.

---

## Passo 4 — Aggiungere gli script npm

Apri `arcade-ui/package.json` e aggiungi dentro `"scripts"`:

```json
"storybook":       "storybook dev -p 6006",
"build-storybook": "storybook build"
```

Il blocco `scripts` finale risulterà:

```json
"scripts": {
  "dev":             "vite",
  "build":           "vite build && npm run minify:css && cp src/arcade-ui.d.ts dist/arcade-ui.d.ts",
  "build:watch":     "vite build --watch",
  "preview":         "vite preview",
  "minify:css":      "postcss dist/arcade-ui.css --use cssnano -o dist/arcade-ui.min.css",
  "lint":            "npm run lint:js && npm run lint:css",
  "lint:js":         "eslint src",
  "lint:css":        "stylelint src/**/*.css",
  "test":            "vitest run",
  "storybook":       "storybook dev -p 6006",
  "build-storybook": "storybook build"
}
```

### Verifica

```bash
npm run storybook
# → Apri http://localhost:6006
```

---

## Passo 5 — Deploy automatico su GitHub Pages

### 5a — Abilita GitHub Pages nel repository

Vai su **GitHub → repository → Settings → Pages**:
- Source: **GitHub Actions**

### 5b — Crea `.github/workflows/storybook.yml`

*(Dalla root del repository, non da `arcade-ui/`)*

```bash
# dalla root del repo
touch .github/workflows/storybook.yml
```

Incolla questo contenuto:

```yaml
# .github/workflows/storybook.yml
name: Deploy Storybook

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages:    write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

defaults:
  run:
    working-directory: arcade-ui

jobs:
  build:
    name: Build Storybook
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
          cache-dependency-path: arcade-ui/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Build Storybook
        run: npm run build-storybook

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: arcade-ui/storybook-static

  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

### 5c — Commit e push

```bash
git add .github/workflows/storybook.yml arcade-ui/.storybook arcade-ui/src/stories arcade-ui/package.json
git commit -m "feat: add Storybook with dark theme and GitHub Pages deploy"
git push origin main
```

Il workflow partirà automaticamente e al termine troverai Storybook su:

```
https://<username>.github.io/<repository>/
```

---

## Riepilogo acceptance criteria

| Criterio | Come verificarlo |
|---|---|
| `npm run storybook` avvia su `localhost:6006` | Apri il browser su `http://localhost:6006` |
| Ogni componente ha almeno una story | Sidebar di Storybook mostra Button, Panel, Input |
| Deploy automatico su GitHub Pages | Vai su **Actions** → workflow "Deploy Storybook" → link Pages |

---

## Struttura finale

```
arcade-ui/
├── .storybook/
│   ├── main.js
│   ├── preview.js
│   └── manager.js
├── src/
│   ├── stories/
│   │   ├── Button.stories.js
│   │   ├── Panel.stories.js
│   │   └── Input.stories.js
│   └── styles/
│       └── arcade-ui.css
└── package.json
.github/
└── workflows/
    ├── ci.yml          (esistente)
    └── storybook.yml   (nuovo)
```
