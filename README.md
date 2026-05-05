# Arcade-UI

Libreria di componenti UI ispirata ai videogiochi arcade anni '80.  
Stile retrò, palette neon, animazioni pixelart — pubblicata su npm come `@davide03memoli/arcade-ui`.

[![CI](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml/badge.svg)](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@davide03memoli/arcade-ui)](https://www.npmjs.com/package/@davide03memoli/arcade-ui)
[![Storybook](https://img.shields.io/badge/storybook-live-ff4785)](https://davidememoli03.github.io/Arcade-UI/)

---

## Usare la libreria

```bash
npm install @davide03memoli/arcade-ui
```

```js
// Importa il CSS nell'entry point della tua app
import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
```

```html
<!-- Bottone -->
<button class="arcade-btn">INSERT COIN</button>

<!-- Panel -->
<div class="arcade-panel">
  <h2 class="arcade-panel-title">GAME OVER</h2>
  <p class="arcade-panel-body">You scored 42,000 points.</p>
  <button class="arcade-btn">PLAY AGAIN</button>
</div>

<!-- Input -->
<label class="arcade-label">
  PLAYER NAME
  <input class="arcade-input" placeholder="AAA" maxlength="3" />
</label>
```

Per la documentazione completa (componenti, token CSS, esempi): **[arcade-ui/README.md](./arcade-ui/README.md)**  
Per i componenti interattivi: **[Storybook live](https://davidememoli03.github.io/Arcade-UI/)**

---

## Struttura del repository

```
Arcade-UI/
├── arcade-ui/          # Codice sorgente e pacchetto npm
│   ├── src/
│   │   ├── tokens/     # CSS custom properties (colori, typo, spacing, animation)
│   │   ├── styles/     # Componenti CSS (btn, panel, input)
│   │   └── stories/    # Storybook stories
│   ├── .storybook/     # Configurazione Storybook
│   └── package.json
├── scripts/            # Script automazione workflow Git
└── .github/workflows/  # Pipeline CI/CD
```

---

## Setup locale

```bash
cd arcade-ui
npm install
```

| Comando | Descrizione |
|---|---|
| `npm run dev` | Server di sviluppo Vite |
| `npm run build` | Compila la libreria in `dist/` |
| `npm test` | Esegue i test con Vitest |
| `npm run lint` | Lint JS (ESLint) + CSS (Stylelint) |
| `npm run storybook` | Storybook su `localhost:6006` |
| `npm run build-storybook` | Build statica di Storybook |

---

## Workflow con Pull Request

Tutto il lavoro passa per PR — non si committa mai direttamente su `main`.

### 1. Crea un branch

```bash
./scripts/new-branch.sh feat/nome-feature
```

### 2. Lavora e committa

```bash
git add .
git commit -m "feat: descrizione della modifica"
```

### 3. Apri la PR

```bash
./scripts/open-pr.sh "feat: titolo della PR"
```

### 4. Merge e pulizia

```bash
./scripts/cleanup.sh
```

> `./scripts/cleanup.sh --dry-run` per vedere cosa verrebbe eliminato senza farlo.

---

## Pipeline CI/CD

| Job | Trigger | Descrizione |
|---|---|---|
| **Lint** | PR + push main | ESLint + Stylelint |
| **Test** | PR + push main | Vitest |
| **Build** | PR + push main | Vite build + verifica `dist/` |
| **Publish** | solo push main | Pubblica `@davide03memoli/arcade-ui` su npm |
| **Storybook** | solo push main | Deploy su GitHub Pages |

> Prima del publish viene verificato automaticamente che la versione in `package.json` non sia già pubblicata su npm.

---

## Convenzioni per i commit

Seguiamo [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     nuova funzionalità
fix:      correzione di un bug
docs:     solo documentazione
style:    formattazione, nessuna logica
refactor: refactoring senza nuove feature
test:     aggiunta o modifica di test
ci:       modifiche alla pipeline
chore:    task di manutenzione (es. bump versione)
```
