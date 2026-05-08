<div align="center">

```
  ▄▄▄  ██▀▄ ▄▄▄  ▄▄▄  ██▀▄ ██▀
  ▄▄▀▀ ██ █ ██   ██ █  ██ █ ██▄
  ██▀▀ ██▀▄ ██   ██▀▀▄ ██▀▄ ██
  ██▄▄ ██ ▀ ▀▀▀  ██▄▄▀ ██ ▀ ▀▀▀  UI
```

**80s arcade-style UI component library**  
Neon palette · Pixel animations · Built-in SFX · Zero runtime dependencies

[![npm version](https://img.shields.io/npm/v/@davide03memoli/arcade-ui?style=flat-square&color=00f5ff)](https://www.npmjs.com/package/@davide03memoli/arcade-ui)
[![license](https://img.shields.io/npm/l/@davide03memoli/arcade-ui?style=flat-square&color=ffd700)](./LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/davidememoli03/Arcade-UI/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml)
[![Storybook](https://img.shields.io/badge/Storybook-live-ff4785?style=flat-square&logo=storybook)](https://davidememoli03.github.io/Arcade-UI/)

</div>

---

## ⚡ Quick Start — CDN

No build tools. Drop three lines into any HTML file and you're done:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui@1/dist/arcade-ui.min.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui@1/dist/arcade-ui.es.js"></script>
```

```html
<button class="arc-btn arc-btn-primary">INSERT COIN</button>
```

---

## 📦 Quick Start — npm

```bash
npm install @davide03memoli/arcade-ui
```

```js
// main.js / main.ts
import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
import { AudioManager } from '@davide03memoli/arcade-ui'
```

```html
<button class="arc-btn arc-btn-primary">INSERT COIN</button>
```

---

## 🎮 Full Example

A complete working page — copy, save as `index.html`, open in browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arcade UI Demo</title>

  <!-- Fonts (optional, recommended) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Silkscreen&display=swap"
        rel="stylesheet">

  <!-- Arcade UI -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui@1/dist/arcade-ui.min.css">

  <style>
    body {
      background: var(--arc-color-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
    }
  </style>
</head>
<body>

  <div class="arc-panel arc-panel-cyan" style="max-width: 420px; width: 100%;">
    <div class="arc-panel-header">
      <span class="arc-glow-cyan" style="font-family: var(--arc-font-pixel); font-size: .85rem;">
        GAME OVER
      </span>
      <span class="arc-badge arc-badge-red arc-badge-pulse" style="margin-left: auto;">
        RANK #1
      </span>
    </div>

    <div class="arc-panel-body">
      <div class="arc-input-wrapper">
        <label class="arc-label">ENTER YOUR NAME</label>
        <input class="arc-input" placeholder="AAA" maxlength="3">
      </div>
    </div>

    <div class="arc-panel-footer">
      <button class="arc-btn arc-btn-primary">SAVE SCORE</button>
      <button class="arc-btn arc-btn-ghost">SKIP</button>
      <button class="arc-btn arc-btn-danger" data-arc-sound-click="gameover">QUIT</button>
    </div>
  </div>

  <!-- Audio (built-in Web Audio synth — no files needed) -->
  <script type="module">
    import { AudioManager } from 'https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui@1/dist/arcade-ui.es.js'
    const audio = AudioManager.getInstance()
    audio.bindButtons(document.body)
  </script>

</body>
</html>
```

---

## 📋 Components

| Component | Classes | Variants | Storybook |
|-----------|---------|----------|-----------|
| **Button** | `.arc-btn` | `arc-btn-primary` · `arc-btn-ghost` · `arc-btn-danger` · `arc-btn-sm` · `arc-btn-lg` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-button--primary) |
| **Tabs** | `.arc-tabs` · `.arc-tab-list` · `.arc-tab` · `.arc-tab-panel` | `arc-tabs-cyan` · `arc-tabs-magenta` · `arc-tabs-yellow` · `arc-tabs-green` · `arc-tabs-red` · `arc-tabs-purple` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-tabs--multi-panel-demo) |
| **Card** | `.arc-card` | `arc-card-cyan` · `arc-card-red` · `arc-card-yellow` · `arc-card-green` · `arc-card-purple` · `arc-card-glow` · `arc-card-selected` · `arc-card-locked` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-card--character-select-screen) |
| **Panel** | `.arc-panel` | `arc-panel-cyan` · `arc-panel-red` · `arc-panel-yellow` · `arc-panel-green` · `arc-panel-purple` · `arc-panel-glass` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-panel--default) |
| **Input** | `.arc-input` · `.arc-label` | `.arc-textarea` · `.arc-select` · `.arc-input-hint` · `.arc-input-hint-error` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-input--default) |
| **Dropdown** | `.arc-dropdown` | `arc-dropdown-cyan` · `arc-dropdown-green` · `arc-dropdown-red` · `arc-dropdown-yellow` · `arc-dropdown-purple` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-dropdown--default) |
| **Modal** | `.arc-modal` · `.arc-modal-backdrop` | `arc-modal-cyan` · `arc-modal-green` · `arc-modal-yellow` · `arc-modal-red` · `arc-modal-purple` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-modal--default) |
| **Progress** | `.arc-progress` · `.arc-progress-bar` | `arc-progress-cyan` · `arc-progress-green` · `arc-progress-yellow` · `arc-progress-red` · `arc-progress-purple` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-progress--all-colors) |
| **Tooltip** | `[data-tooltip]` | `arc-tooltip-top` · `arc-tooltip-bottom` · `arc-tooltip-left` · `arc-tooltip-right` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-tooltip--all-positions) |
| **Badge** | `.arc-badge` | `arc-badge-cyan` · `arc-badge-red` · `arc-badge-yellow` · `arc-badge-green` · `arc-badge-purple` · `arc-badge-outline` · `arc-badge-pulse` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-badge--default) |
| **Accordion** | `.arc-accordion` | `arc-accordion-cyan` · `arc-accordion-red` · `arc-accordion-yellow` · `arc-accordion-green` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-accordion--default) |
| **Glow** | `.arc-glow-{color}` · `.arc-box-glow-{color}` | cyan · red · yellow · green · purple | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/effects-glow--text) |
| **Glitch** | `.arc-glitch` · `.arc-glitch-hover` | — | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/effects-glitch--always-on) |
| **CRT** | `.arc-crt-screen` · `.arc-crt-global` | `.arc-crt-boot` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/effects-crt--screen) |
| **Toggle** | `.arc-toggle` · `.arc-toggle__input` · `.arc-toggle__switch` · `.arc-toggle__label` | `arc-toggle--on` · `arc-toggle--off` · `arc-toggle--label-left` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-toggle--all-states) |
| **Animations** | `.arc-u-blink` · `.arc-u-pulse` · `.arc-u-glitch` | — | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/tokens-animation--keyframes) |

### Tabs anatomy

Menu di navigazione a schede stile HUD arcade. Supporta due modalità di funzionamento senza conflitti.

**Modalità CSS-only** — zero JavaScript, usa `<input type="radio">` nascosti + selettori `:has()` + `:checked`:

```html
<div class="arc-tabs arc-tabs-cyan">
  <!-- radio inputs: uno per tab, stessa name, id unici -->
  <input class="arc-tab-radio" type="radio" name="my-tabs" id="tab-1" checked>
  <input class="arc-tab-radio" type="radio" name="my-tabs" id="tab-2">
  <input class="arc-tab-radio" type="radio" name="my-tabs" id="tab-3">

  <!-- tab bar: label collegati agli input via for= -->
  <div class="arc-tab-list" role="tablist">
    <label class="arc-tab" for="tab-1">STAGE 1</label>
    <label class="arc-tab" for="tab-2">STAGE 2</label>
    <label class="arc-tab" for="tab-3">STAGE 3</label>
  </div>

  <!-- pannelli contenuto: uno per tab, nello stesso ordine -->
  <div class="arc-tab-panel">Contenuto Stage 1</div>
  <div class="arc-tab-panel">Contenuto Stage 2</div>
  <div class="arc-tab-panel">Contenuto Stage 3</div>
</div>
```

> **Requisiti CSS-only:** Chrome 111+, Firefox 113+, Safari 14.1+ (`:has()` + `:nth-child(n of .class)`). Supporta fino a 6 tab.

**Modalità JS-driven** — aggiungere `data-arc-tabs` al contenitore e usare `<button>` nei tab; l'inizializzazione avviene automaticamente a `DOMContentLoaded`:

```html
<div class="arc-tabs arc-tabs-cyan" data-arc-tabs>
  <div class="arc-tab-list" role="tablist">
    <button class="arc-tab" role="tab">STAGE 1</button>
    <button class="arc-tab" role="tab">STAGE 2</button>
  </div>
  <div class="arc-tab-panel" role="tabpanel">Contenuto Stage 1</div>
  <div class="arc-tab-panel" role="tabpanel">Contenuto Stage 2</div>
</div>
```

```js
import { arcTabs, bindTabs } from '@davide03memoli/arcade-ui'

// Auto-bind tutti gli elementi [data-arc-tabs]
bindTabs()

// Oppure inizializza manualmente un singolo elemento
const tabs = arcTabs(document.querySelector('.arc-tabs'))
tabs.activate(2) // attiva il 3° tab (0-based)
```

Navigazione da tastiera conforme al pattern ARIA Tabs: `ArrowLeft`/`ArrowRight` per navigare, `Home`/`End` per il primo/ultimo tab.

**Varianti colore** — aggiungere a `.arc-tabs`:

| Classe | Uso consigliato |
|---|---|
| `arc-tabs-cyan` | Primary — HUD, pannelli principali |
| `arc-tabs-magenta` | Secondary — alert, sezioni speciali |
| `arc-tabs-yellow` | Coins, inventario, ricompense |
| `arc-tabs-green` | Salute, stato, completamento |
| `arc-tabs-red` | Pericolo, errori critici |
| `arc-tabs-purple` | Magia, poteri speciali |

### Card anatomy

Character-select card ispirata agli schermi di selezione personaggio arcade. Struttura a header/body/footer, doppio bordo neon e angoli pixel decorativi su tutti e 4 i lati.

```html
<div class="arc-card arc-card-cyan">
  <div class="arc-card-header">
    <div class="arc-card-avatar">🥷</div>
    <p class="arc-card-title">RYU</p>
    <p class="arc-card-subtitle">Street Fighter</p>
  </div>
  <div class="arc-card-body">
    <div class="arc-card-meta">
      <span class="arc-card-meta-key">STR</span>
      <span class="arc-card-meta-value">92</span>
    </div>
    <div class="arc-card-meta">
      <span class="arc-card-meta-key">SPD</span>
      <span class="arc-card-meta-value">85</span>
    </div>
  </div>
  <div class="arc-card-footer">
    <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
  </div>
</div>
```

L'elemento `.arc-card-avatar` accetta testo (emoji, unicode), o un `<img>` interno:

```html
<div class="arc-card-avatar">
  <img src="avatar.png" alt="Character portrait">
</div>
```

**Varianti colore** — aggiungere a `.arc-card`:

| Classe | Colore |
|---|---|
| `arc-card-cyan` | Neon cyan (default) |
| `arc-card-red` | Neon red |
| `arc-card-yellow` | Neon yellow |
| `arc-card-green` | Neon green |
| `arc-card-purple` | Neon purple |

**Varianti stato** — aggiungere a `.arc-card`:

| Classe | Comportamento |
|---|---|
| `arc-card-glow` | Glow pulsante continuo |
| `arc-card-selected` | Bordo lampeggiante + label "▶ SELECT ◀" sotto la card |
| `arc-card-locked` | Opacità ridotta, saturazione desaturata, overlay con 🔒 |

> **Nota:** `arc-card-selected` e `arc-card-locked` usano entrambi lo pseudo-elemento `::after`. Non combinarli sullo stesso elemento.

### Panel anatomy

```html
<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">Title</div>
  <div class="arc-panel-body">Content</div>
  <div class="arc-panel-footer">
    <button class="arc-btn arc-btn-primary">OK</button>
  </div>
</div>
```

### Toggle anatomy

LED switch che imita i pulsanti fisici dei cabinati arcade. CSS-only tramite `<input type="checkbox">` — zero JavaScript.

```html
<!-- OFF (default) -->
<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle__input">
  <span class="arc-toggle__switch" aria-hidden="true"></span>
  <span class="arc-toggle__label">SOUND FX</span>
</label>

<!-- ON: attributo checked nativo -->
<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle__input" checked>
  <span class="arc-toggle__switch" aria-hidden="true"></span>
  <span class="arc-toggle__label">MUSIC</span>
</label>

<!-- Disabled -->
<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle__input" disabled>
  <span class="arc-toggle__switch" aria-hidden="true"></span>
  <span class="arc-toggle__label">LOCKED</span>
</label>

<!-- Label a sinistra -->
<label class="arc-toggle arc-toggle--label-left">
  <input type="checkbox" class="arc-toggle__input" checked>
  <span class="arc-toggle__switch" aria-hidden="true"></span>
  <span class="arc-toggle__label">SCREEN FX</span>
</label>
```

**Modificatori**

| Classe | Descrizione |
|---|---|
| `arc-toggle--on` | Forza stato ON visivo (utile in HTML statico o con JS) |
| `arc-toggle--off` | Forza stato OFF visivo (override su `--on` e su `checked`) |
| `arc-toggle--label-left` | Sposta il testo a sinistra dello switch |

**Design**

- LED spento: rosso scuro (`#3d0005`) — nessun glow
- LED acceso: cyan brillante (`--arc-color-cyan`) — flash istantaneo + glow espanso
- Animazione ON: lampo bianco accecante → settle neon cyan (300 ms, steps pixel)
- Animazione OFF: transizione a passi verso il rosso scuro
- Stato disabled: desaturato (`filter: saturate(0.15)`), `cursor: not-allowed`

### Input anatomy

```html
<div class="arc-input-wrapper">
  <label class="arc-label">PLAYER NAME</label>
  <input class="arc-input" placeholder="AAA" maxlength="3">
  <span class="arc-input-hint">max 3 characters</span>
</div>
```

### Dropdown anatomy

```html
<div class="arc-dropdown arc-dropdown-cyan">
  <button class="arc-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
    <span class="arc-dropdown-value">SELECT DIFFICULTY</span>
    <span class="arc-dropdown-chevron" aria-hidden="true"></span>
  </button>
  <ul class="arc-dropdown-menu" role="listbox">
    <li class="arc-dropdown-option" role="option">EASY</li>
    <li class="arc-dropdown-option arc-dropdown-option-selected" role="option">NORMAL</li>
    <li class="arc-dropdown-option" role="option">HARD</li>
    <li class="arc-dropdown-option arc-dropdown-option-disabled" aria-disabled="true">NIGHTMARE</li>
  </ul>
</div>
```

Toggle open/closed by setting `aria-expanded="true"` on the trigger button:

```js
const trigger = dropdown.querySelector('.arc-dropdown-trigger')
trigger.addEventListener('click', () => {
  const isOpen = trigger.getAttribute('aria-expanded') === 'true'
  trigger.setAttribute('aria-expanded', String(!isOpen))
})
```

### Modal anatomy

```html
<div class="arc-modal-backdrop" id="my-modal" aria-hidden="true">
  <div class="arc-modal arc-modal-cyan"
       role="dialog" aria-modal="true"
       aria-labelledby="my-modal-title">
    <div class="arc-modal-header">
      <span id="my-modal-title" class="arc-modal-title">GAME OVER</span>
      <button class="arc-modal-close" aria-label="Close dialog">[X]</button>
    </div>
    <div class="arc-modal-body">Insert coin to continue.</div>
    <div class="arc-modal-footer">
      <button class="arc-btn arc-btn-primary">OK</button>
      <button class="arc-btn arc-btn-ghost">CANCEL</button>
    </div>
  </div>
</div>
```

Open/close the modal using the `arcModal` JS API, or bind a trigger button with `data-arc-modal-open`:

```html
<!-- trigger button (auto-bound at DOMContentLoaded) -->
<button class="arc-btn arc-btn-primary" data-arc-modal-open="my-modal">OPEN</button>
```

```js
import { arcModal } from '@davide03memoli/arcade-ui'

// Open by backdrop id (also remembers the trigger for focus restoration)
arcModal.open('my-modal', { trigger: document.getElementById('open-btn') })

// Close programmatically
arcModal.close('my-modal')

// Re-bind triggers for dynamically injected HTML
arcModal.bindModalTriggers(document.getElementById('dynamic-section'))
```

**Variants** — add the variant class to `.arc-modal`:

| Class | Role | Accent colour |
|---|---|---|
| `arc-modal-cyan` | Info / default | Neon cyan |
| `arc-modal-green` | Success | Neon green |
| `arc-modal-yellow` | Warning | Neon yellow |
| `arc-modal-red` | Danger | Neon red |
| `arc-modal-purple` | Neutral / special | Neon purple |

### Progress anatomy

```html
<!-- Determined — set fill with --arc-progress directly on .arc-progress -->
<div class="arc-progress-wrapper arc-progress-cyan">
  <span class="arc-progress-label">LOADING  75%</span>
  <div class="arc-progress"
       role="progressbar"
       aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
       aria-label="Loading..."
       style="--arc-progress: 75%">
    <div class="arc-progress-bar"></div>
  </div>
</div>

<!-- Indeterminate (loop sweep animation) -->
<div class="arc-progress arc-progress-indeterminate arc-progress-cyan"
     role="progressbar" aria-label="Loading..."
     aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="arc-progress-bar"></div>
</div>
```

Update fill dynamically by setting `--arc-progress` on the `.arc-progress` element:

```js
const bar = document.querySelector('.arc-progress')
bar.style.setProperty('--arc-progress', '60%')
bar.setAttribute('aria-valuenow', '60')
```

**Variants** — add the variant class to `.arc-progress` or `.arc-progress-wrapper` (the custom property is inherited):

| Class | Use case | Colour |
|---|---|---|
| `arc-progress-cyan` | Primary / loading | Neon cyan |
| `arc-progress-green` | Success / health | Neon green |
| `arc-progress-yellow` | Warning / ammo | Neon yellow |
| `arc-progress-red` | Danger / fuel | Neon red |
| `arc-progress-purple` | Special / mana | Neon purple |

**Size modifiers** — add to `.arc-progress`:

| Class | Height |
|---|---|
| `arc-progress-sm` | 12px |
| *(default)* | 24px |
| `arc-progress-lg` | 40px |

### Tooltip anatomy

CSS-only: nessun JavaScript necessario. Aggiungere `data-tooltip="testo"` su qualsiasi elemento.

```html
<!-- Default: tooltip in alto (top) -->
<button class="arc-btn arc-btn-primary"
        data-tooltip="Press to confirm"
        aria-label="Confirm — Press to confirm">
  CONFIRM
</button>

<!-- Altre posizioni -->
<button class="arc-btn arc-btn-ghost arc-tooltip-bottom"  data-tooltip="Goes back">BACK</button>
<button class="arc-btn arc-btn-ghost arc-tooltip-left"    data-tooltip="Undo action">UNDO</button>
<button class="arc-btn arc-btn-ghost arc-tooltip-right"   data-tooltip="Redo action">REDO</button>
```

Il tooltip usa `::after` per il box e `::before` per la freccia direzionale. Si attiva su `:hover` e `:focus-visible`.

> **Accessibilità** — `::after` non è accessibile ai lettori di schermo. Aggiungere sempre `aria-label` o `aria-describedby` con lo stesso testo dell'attributo `data-tooltip`.

| Classe | Direzione freccia | Tooltip posizionato |
|---|---|---|
| *(nessuna)* | ↓ punta in basso | sopra l'elemento |
| `arc-tooltip-bottom` | ↑ punta in alto | sotto l'elemento |
| `arc-tooltip-left` | → punta a destra | a sinistra dell'elemento |
| `arc-tooltip-right` | ← punta a sinistra | a destra dell'elemento |

---

## 🎨 Design Tokens

Import individual token files for zero-specificity overrides:

```js
import '@davide03memoli/arcade-ui/tokens/colors'
import '@davide03memoli/arcade-ui/tokens/animation'
import '@davide03memoli/arcade-ui/tokens/spacing'
import '@davide03memoli/arcade-ui/tokens/typography'
```

### Key tokens

```css
/* Backgrounds */
--arc-color-bg            /* #000 */
--arc-color-bg-alt        /* #0a0010 */
--arc-color-bg-panel      /* #110020 */

/* Neon palette */
--arc-color-cyan          /* #00f5ff — primary */
--arc-color-red           /* #ff2d55 — danger */
--arc-color-yellow        /* #ffd700 — warning / coins */
--arc-color-green         /* #39ff14 — success */
--arc-color-purple        /* #bf00ff — power-up */

/* Typography */
--arc-font-pixel          /* Press Start 2P */
--arc-font-terminal       /* VT323 */
--arc-font-mono           /* Silkscreen */

/* Spacing (8px grid) */
--arc-space-1  /*  8px */   --arc-space-2  /* 16px */
--arc-space-3  /* 24px */   --arc-space-4  /* 32px */
--arc-space-6  /* 48px */   --arc-space-8  /* 64px */

/* Animation */
--arc-anim-fast           /* 150ms */
--arc-anim-normal         /* 300ms */
--arc-ease-pixel          /* steps(4) */
--arc-ease-arcade         /* steps(8) */
```

---

## 🔊 Audio — AudioManager

Built-in SFX synthesized via **Web Audio API** — no mp3 files, no extra dependencies.

```js
import { AudioManager } from '@davide03memoli/arcade-ui'

const audio = AudioManager.getInstance()

audio.play('coin')      // dialog open
audio.play('select')    // confirm / primary button click
audio.play('blip')      // navigation hover
audio.play('error')     // validation failed
audio.play('win')       // completion
audio.play('gameover')  // game over

audio.setVolume(0.5)    // 0–1, persisted in sessionStorage
audio.mute()
audio.unmute()
```

Auto-binding — add to any `.arc-btn` at DOM-ready:

```js
// Fires automatically at DOMContentLoaded.
// Call manually for dynamically added elements:
audio.bindButtons(myNewSection)
```

Override sounds per-element:

```html
<!-- custom sound on click -->
<button class="arc-btn arc-btn-primary" data-arc-sound-click="win">YOU WIN</button>

<!-- custom sound on hover -->
<button class="arc-btn" data-arc-sound-hover="error">DANGER ZONE</button>

<!-- silence hover -->
<button class="arc-btn" data-arc-sound-hover="">SILENT</button>
```

Custom sounds via [Howler.js](https://howlerjs.com/) (optional peer dep):

```bash
npm install howler
```

```js
audio.register('powerup', '/sounds/powerup.mp3')
audio.play('powerup')
```

---

## ⚙️ JS API

| Export | Description |
|--------|-------------|
| `AudioManager` | Singleton for SFX playback |
| `initGlitch(root?)` | Populate `data-text` on all `.arc-glitch` elements |
| `triggerGlitch(el, duration?)` | Trigger glitch burst on an element |
| `glitch` | `{ initGlitch, triggerGlitch }` namespace |
| `bindButtonSounds(root?)` | Manually bind sounds to `.arc-btn` elements |
| `version` | Package version string |

```js
import { initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'

initGlitch()                    // auto-init all .arc-glitch
triggerGlitch(el, 600)          // burst for 600ms
```

---

## 📦 Package Formats

| Format | Import path |
|--------|-------------|
| ESM | `@davide03memoli/arcade-ui` |
| CJS | `require('@davide03memoli/arcade-ui')` |
| CSS (full) | `@davide03memoli/arcade-ui/dist/arcade-ui.css` |
| CSS (minified) | `@davide03memoli/arcade-ui/dist/arcade-ui.min.css` |
| Token: colors | `@davide03memoli/arcade-ui/tokens/colors` |
| Token: animation | `@davide03memoli/arcade-ui/tokens/animation` |
| Token: spacing | `@davide03memoli/arcade-ui/tokens/spacing` |
| Token: typography | `@davide03memoli/arcade-ui/tokens/typography` |
| Types | `dist/arcade-ui.d.ts` (auto-resolved) |

CDN base URL: `https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui@1/`

---

## 🌐 Browser Support

| Browser | Minimum version |
|---------|----------------|
| Chrome / Edge | 88+ |
| Firefox | 78+ |
| Safari | 14+ |

Requires: CSS Custom Properties · CSS Grid · Web Audio API

> Internet Explorer is not supported.

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feat/my-feature`
3. Make changes inside `arcade-ui/src/`
4. Run the checks: `npm run lint && npm test && npm run build`
5. Open a pull request against `main`

The CI pipeline (lint → test → build → publish) runs automatically on every PR.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

[MIT](./LICENSE) © 2026 Davide Memoli
