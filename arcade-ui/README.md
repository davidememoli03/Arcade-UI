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
| **Toggle** | `.arc-toggle` · `.arc-toggle-input` · `.arc-toggle-switch` · `.arc-toggle-label` | `arc-toggle-on` · `arc-toggle-off` · `arc-toggle-label-left` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-toggle--all-states) |
| **Slider** | `.arc-slider` · `.arc-slider-wrapper` · `.arc-slider-label` · `.arc-slider-display` · `.arc-slider-ticks` | `arc-slider-danger` · `arc-slider-success` · `arc-slider-yellow` · `arc-slider-purple` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-slider--volume-panel-demo) |
| **Table** | `.arc-table` · `.arc-table-wrapper` | `arc-table-cyan` · `arc-table-green` · `arc-table-yellow` · `arc-table-red` · `arc-table-purple` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-table--leaderboard) |
| **Toast** | `.arc-toast` · `.arc-toast-container` | `arc-toast-info` · `arc-toast-success` · `arc-toast-warning` · `arc-toast-error` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-toast--playground) |
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
  <input type="checkbox" class="arc-toggle-input">
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">SOUND FX</span>
</label>

<!-- ON: attributo checked nativo -->
<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle-input" checked>
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">MUSIC</span>
</label>

<!-- Disabled -->
<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle-input" disabled>
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">LOCKED</span>
</label>

<!-- Label a sinistra -->
<label class="arc-toggle arc-toggle-label-left">
  <input type="checkbox" class="arc-toggle-input" checked>
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">SCREEN FX</span>
</label>
```

**Modificatori**

| Classe | Descrizione |
|---|---|
| `arc-toggle-on` | Forza stato ON visivo (utile in HTML statico o con JS) |
| `arc-toggle-off` | Forza stato OFF visivo (override su `arc-toggle-on` e su `checked`) |
| `arc-toggle-label-left` | Sposta il testo a sinistra dello switch |

**Design**

- LED spento: rosso scuro (`#3d0005`) — nessun glow
- LED acceso: cyan brillante (`--arc-color-cyan`) — flash istantaneo + glow espanso
- Animazione ON: lampo bianco accecante → settle neon cyan (300 ms, steps pixel)
- Animazione OFF: transizione a passi verso il rosso scuro
- Stato disabled: desaturato (`filter: saturate(0.15)`), `cursor: not-allowed`

### Slider anatomy

Controllo volume/difficoltà stile impostazioni arcade. Track segmentato a blocchi con fill neon, thumb pixel-art quadrato. Basato su `<input type="range">` nativo — cross-browser (WebKit + Firefox).

```html
<!-- Base: slider standalone -->
<input type="range" class="arc-slider"
       min="0" max="100" value="75"
       data-arc-slider
       style="--arc-slider-value: 75%">

<!-- Completo: con wrapper, label, display valore e tick marks -->
<div class="arc-slider-wrapper">
  <div class="arc-slider-header">
    <span class="arc-slider-label">VOLUME</span>
    <span class="arc-slider-display" id="vol-display">75</span>
  </div>
  <input type="range" class="arc-slider"
         min="0" max="100" value="75"
         data-arc-slider
         data-arc-slider-display="vol-display"
         style="--arc-slider-value: 75%">
  <div class="arc-slider-ticks" aria-hidden="true">
    <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
  </div>
</div>
```

**`--arc-slider-value`** deve essere impostato inizialmente via `style=""` e aggiornato ad ogni drag. Usare `data-arc-slider` per l'auto-init JS oppure l'handler inline:

```html
<input type="range" class="arc-slider" value="50"
       style="--arc-slider-value: 50%"
       oninput="this.style.setProperty('--arc-slider-value',
                ((this.value-this.min)/(this.max-this.min)*100)+'%')">
```

```js
// Auto-bind tutti i [data-arc-slider] nel documento
import { bindSliders } from '@davide03memoli/arcade-ui'
bindSliders()

// Aggiornamento manuale su un singolo input
import { updateSlider } from '@davide03memoli/arcade-ui'
updateSlider(document.querySelector('.arc-slider'))
```

**Varianti colore** — aggiungere a `.arc-slider` (e al `.arc-slider-wrapper` per propagare alle label):

| Classe | Colore |
|---|---|
| *(default)* | Cyan |
| `arc-slider-danger` | Red |
| `arc-slider-success` | Green |
| `arc-slider-yellow` | Yellow |
| `arc-slider-purple` | Purple |

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

### Table anatomy

Tabella arcade ottimizzata per leaderboard e statistiche di gioco.
Ispirata alle high-score table degli arcade classici. **CSS-only** — nessun JavaScript richiesto.

```html
<div class="arc-table-wrapper arc-table-cyan">
  <table class="arc-table arc-table-leaderboard">
    <caption>HIGH SCORES</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
        <th class="arc-table-th arc-table-th-num">STAGE</th>
        <th class="arc-table-th arc-table-th-num">TIME</th>
      </tr>
    </thead>
    <tbody>
      <!-- Rank #1 — first <tr> in <tbody> gets gold pulse automatically
           when .arc-table-leaderboard is active. Add .arc-table-row-gold
           to override manually on any row. -->
      <tr class="arc-table-row">
        <td class="arc-table-td arc-table-td-rank">
          <span class="arc-table-rank-num">01</span>
          <span class="arc-table-rank-icon" aria-hidden="true">🏆</span>
        </td>
        <td class="arc-table-td">ACE</td>
        <td class="arc-table-td arc-table-td-num">999,999</td>
        <td class="arc-table-td arc-table-td-num">8-4</td>
        <td class="arc-table-td arc-table-td-num">14:22</td>
      </tr>
      <!-- more rows ... -->
    </tbody>
  </table>
</div>
```

**Colour variants** — add to `.arc-table-wrapper` (custom properties are inherited by all cells):

| Class | Accent colour |
|-------|---------------|
| `arc-table-cyan` | Neon cyan (default) |
| `arc-table-green` | Neon green |
| `arc-table-yellow` | Neon yellow |
| `arc-table-red` | Neon red |
| `arc-table-purple` | Neon purple |

**Table modifiers** — add to `.arc-table`:

| Class | Effect |
|-------|--------|
| `arc-table-leaderboard` | First `<tbody>` row gets gold glow + pulse animation; rank column styled |
| `arc-table-compact` | Reduced row padding for higher density |

**Row variants** — add to `<tr class="arc-table-row ...">`:

| Class | Effect |
|-------|--------|
| `arc-table-row-gold` | Golden glow + pulse (explicit, for non-first rows) |
| `arc-table-row-active` | Text rendered in accent colour |
| `arc-table-row-muted` | Reduced opacity (outside ranking, locked) |

**Cell helper classes:**

| Class | Usage |
|-------|-------|
| `arc-table-th-rank` | `<th>` for rank column (centred, fixed width) |
| `arc-table-th-num` | `<th>` for numeric columns (right-aligned) |
| `arc-table-td-rank` | `<td>` rank cell (centred, holds rank-num + rank-icon) |
| `arc-table-td-num` | `<td>` numeric cell (right-aligned, pixel font, accent colour) |
| `arc-table-rank-num` | `<span>` zero-padded rank number inside rank cell |
| `arc-table-rank-icon` | `<span aria-hidden="true">` trophy/medal emoji in rank cell |

**Design details:**

- Horizontal neon borders only — no vertical dividers
- Header: full neon background + dark inverted text
- Alternating rows: odd rows with faint scanline overlay, even rows flat dark
- First leaderboard row: ambient gold pulse via `box-shadow` animation, no layout shift
- Hover: `inset 4px 0 0` left neon border + background tint (CSS, no JS)
- `<caption>` element styled in pixel font with accent glow

### Toast anatomy

Notifiche di sistema arcade-style che imitano i messaggi "PLAYER 1 READY", "GAME OVER", "NEW HIGH SCORE".
I container sono creati automaticamente nel `<body>` al primo `arcToast.show()`.

**Quick start — JavaScript API:**

```js
import { arcToast } from '@davide03memoli/arcade-ui'

// Info (cyan) — default
arcToast.show({ message: 'PLAYER 1 READY' })

// Success (green)
arcToast.show({ message: 'NEW HIGH SCORE!  1,248,000 PTS', type: 'success' })

// Warning (yellow)
arcToast.show({ message: 'LOW CREDITS — INSERT COIN', type: 'warning', duration: 5000 })

// Error (red)
arcToast.show({ message: 'GAME OVER — NO CONTINUES LEFT', type: 'error' })

// Persistent (no auto-dismiss) — dismiss manually
const id = arcToast.show({ message: 'WAITING FOR PLAYER 2...', type: 'info', duration: 0 })
arcToast.dismiss(id)

// Dismiss all visible toasts
arcToast.dismissAll()
```

** options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
|  |  | — | Text content of the toast |
|  |  |  | Visual variant (controls neon colour) |
|  |  |  | Auto-dismiss delay in ms;  = persistent |
|  | see below |  | Screen position of the container |

**Position values:**

| Value | Description |
|-------|-------------|
|  | Bottom-right corner (default) |
|  | Bottom-left corner |
|  | Bottom edge, centred |
|  | Top-right corner |
|  | Top-left corner |
|  | Top edge, centred |

**Type → colour mapping:**

| Type | Neon colour | Arcade message style |
|------|-------------|----------------------|
| File: dir,	Node: Top	This is the top of the INFO tree

  This (the Directory node) gives a menu of major topics.
  Typing "q" exits, "H" lists all Info commands, "d" returns here,
  "h" gives a primer for first-timers,
  "mEmacs<Return>" visits the Emacs manual, etc.

  In Emacs, you can click mouse button 2 on a menu item or cross reference
  to select it.

* Menu:

Archiving
* Xorrecord: (xorrecord).       Emulates CD/DVD/BD program cdrecord
* Xorriso: (xorriso).           Burns ISO 9660 on CD, DVD, BD.
* Xorrisofs: (xorrisofs).       Emulates ISO 9660 program mkisofs

Basics
* Common options: (coreutils)Common options.
* Coreutils: (coreutils).       Core GNU (file, text, shell) utilities.
* Date input formats: (coreutils)Date input formats.
* Ed: (ed).                     The GNU line editor
* File permissions: (coreutils)File permissions.
                                Access modes.
* Finding files: (find).        Operating on files matching certain criteria.
* Time: (time).                 time

C++ libraries
* autosprintf: (autosprintf).   Support for printf format strings in C++.

Compression
* Gzip: (gzip).                 General (de)compression of files (lzw).

Development
* SSIP: (ssip).                 Speech Synthesis Interface Protocol.
* Speech Dispatcher: (speech-dispatcher).
                                Speech Dispatcher.
* bzip2 and libbzip2, version 1.0.8: (manual).
                                A program and library for data compression
* libffi: (libffi).             Portable foreign function interface library.

DOS
* Mtools: (mtools).             Mtools: utilities to access DOS disks in Unix.

Editors
* nano: (nano).                 Small and friendly text editor.

GNU Gettext Utilities
* autopoint: (gettext)autopoint Invocation.
                                Copy gettext infrastructure.
* envsubst: (gettext)envsubst Invocation.
                                Expand environment variables.
* gettextize: (gettext)gettextize Invocation.
                                Prepare a package for gettext.
* gettext: (gettext).           GNU gettext utilities.
* ISO3166: (gettext)Country Codes.
                                ISO 3166 country codes.
* ISO639: (gettext)Language Codes.
                                ISO 639 language codes.
* msgattrib: (gettext)msgattrib Invocation.
                                Select part of a PO file.
* msgcat: (gettext)msgcat Invocation.
                                Combine several PO files.
* msgcmp: (gettext)msgcmp Invocation.
                                Compare a PO file and template.
* msgcomm: (gettext)msgcomm Invocation.
                                Match two PO files.
* msgconv: (gettext)msgconv Invocation.
                                Convert PO file to encoding.
* msgen: (gettext)msgen Invocation.
                                Create an English PO file.
* msgexec: (gettext)msgexec Invocation.
                                Process a PO file.
* msgfilter: (gettext)msgfilter Invocation.
                                Pipe a PO file through a filter.
* msgfmt: (gettext)msgfmt Invocation.
                                Make MO files out of PO files.
* msggrep: (gettext)msggrep Invocation.
                                Select part of a PO file.
* msginit: (gettext)msginit Invocation.
                                Create a fresh PO file.
* msgmerge: (gettext)msgmerge Invocation.
                                Update a PO file from template.
* msgunfmt: (gettext)msgunfmt Invocation.
                                Uncompile MO file into PO file.
* msguniq: (gettext)msguniq Invocation.
                                Unify duplicates for PO file.
* ngettext: (gettext)ngettext Invocation.
                                Translate a message with plural.
* xgettext: (gettext)xgettext Invocation.
                                Extract strings into a PO file.

GNU organization
* Maintaining Findutils: (find-maint).
                                Maintaining GNU findutils

GNU Utilities
* dirmngr-client: (gnupg).      X.509 CRL and OCSP client.
* dirmngr: (gnupg).             X.509 CRL and OCSP server.
* gpg-agent: (gnupg).           The secret key daemon.
* gpg2: (gnupg).                OpenPGP encryption and signing tool.
* gpgsm: (gnupg).               S/MIME encryption and signing tool.

Individual utilities
* aclocal-invocation: (automake-1.16)aclocal Invocation.
                                                Generating aclocal.m4.
* arch: (coreutils)arch invocation.             Print machine hardware name.
* automake-invocation: (automake-1.16)automake Invocation.
                                                Generating Makefile.in.
* b2sum: (coreutils)b2sum invocation.           Print or check BLAKE2 digests.
* base32: (coreutils)base32 invocation.         Base32 encode/decode data.
* base64: (coreutils)base64 invocation.         Base64 encode/decode data.
* basename: (coreutils)basename invocation.     Strip directory and suffix.
* basenc: (coreutils)basenc invocation.         Encoding/decoding of data.
* cat: (coreutils)cat invocation.               Concatenate and write files.
* chcon: (coreutils)chcon invocation.           Change SELinux CTX of files.
* chgrp: (coreutils)chgrp invocation.           Change file groups.
* chmod: (coreutils)chmod invocation.           Change access permissions.
* chown: (coreutils)chown invocation.           Change file owners and groups.
* chroot: (coreutils)chroot invocation.         Specify the root directory.
* cksum: (coreutils)cksum invocation.           Print POSIX CRC checksum.
* cmp: (diffutils)Invoking cmp.                 Compare 2 files byte by byte.
* comm: (coreutils)comm invocation.             Compare sorted files by line.
* cp: (coreutils)cp invocation.                 Copy files.
* csplit: (coreutils)csplit invocation.         Split by context.
* cut: (coreutils)cut invocation.               Print selected parts of lines.
* date: (coreutils)date invocation.             Print/set system date and time.
* dd: (coreutils)dd invocation.                 Copy and convert a file.
* df: (coreutils)df invocation.                 Report file system usage.
* diff: (diffutils)Invoking diff.               Compare 2 files line by line.
* diff3: (diffutils)Invoking diff3.             Compare 3 files line by line.
* dir: (coreutils)dir invocation.               List directories briefly.
* dircolors: (coreutils)dircolors invocation.   Color setup for ls.
* dirname: (coreutils)dirname invocation.       Strip last file name component.
* du: (coreutils)du invocation.                 Report file usage.
* echo: (coreutils)echo invocation.             Print a line of text.
* env: (coreutils)env invocation.               Modify the environment.
* expand: (coreutils)expand invocation.         Convert tabs to spaces.
* expr: (coreutils)expr invocation.             Evaluate expressions.
* factor: (coreutils)factor invocation.         Print prime factors
* false: (coreutils)false invocation.           Do nothing, unsuccessfully.
* find: (find)Invoking find.                    Finding and acting on files.
* fmt: (coreutils)fmt invocation.               Reformat paragraph text.
* fold: (coreutils)fold invocation.             Wrap long input lines.
* groups: (coreutils)groups invocation.         Print group names a user is in.
* gunzip: (gzip)Overview.                       Decompression.
* gzexe: (gzip)Overview.                        Compress executables.
* head: (coreutils)head invocation.             Output the first part of files.
* hostid: (coreutils)hostid invocation.         Print numeric host identifier.
* hostname: (coreutils)hostname invocation.     Print or set system name.
* id: (coreutils)id invocation.                 Print user identity.
* install: (coreutils)install invocation.       Copy files and set attributes.
* join: (coreutils)join invocation.             Join lines on a common field.
* kill: (coreutils)kill invocation.             Send a signal to processes.
* link: (coreutils)link invocation.             Make hard links between files.
* ln: (coreutils)ln invocation.                 Make links between files.
* locate: (find)Invoking locate.                Finding files in a database.
* logname: (coreutils)logname invocation.       Print current login name.
* ls: (coreutils)ls invocation.                 List directory contents.
* md5sum: (coreutils)md5sum invocation.         Print or check MD5 digests.
* mkdir: (coreutils)mkdir invocation.           Create directories.
* mkfifo: (coreutils)mkfifo invocation.         Create FIFOs (named pipes).
* mknod: (coreutils)mknod invocation.           Create special files.
* mktemp: (coreutils)mktemp invocation.         Create temporary files.
* mv: (coreutils)mv invocation.                 Rename files.
* nice: (coreutils)nice invocation.             Modify niceness.
* nl: (coreutils)nl invocation.                 Number lines and write files.
* nohup: (coreutils)nohup invocation.           Immunize to hangups.
* nproc: (coreutils)nproc invocation.           Print the number of processors.
* numfmt: (coreutils)numfmt invocation.         Reformat numbers.
* od: (coreutils)od invocation.                 Dump files in octal, etc.
* paste: (coreutils)paste invocation.           Merge lines of files.
* patch: (diffutils)Invoking patch.             Apply a patch to a file.
* pathchk: (coreutils)pathchk invocation.       Check file name portability.
* pr: (coreutils)pr invocation.                 Paginate or columnate files.
* printenv: (coreutils)printenv invocation.     Print environment variables.
* printf: (coreutils)printf invocation.         Format and print data.
* ptx: (coreutils)ptx invocation.               Produce permuted indexes.
* pwd: (coreutils)pwd invocation.               Print working directory.
* readlink: (coreutils)readlink invocation.     Print referent of a symlink.
* realpath: (coreutils)realpath invocation.     Print resolved file names.
* rm: (coreutils)rm invocation.                 Remove files.
* rmdir: (coreutils)rmdir invocation.           Remove empty directories.
* runcon: (coreutils)runcon invocation.         Run in specified SELinux CTX.
* sdiff: (diffutils)Invoking sdiff.             Merge 2 files side-by-side.
* seq: (coreutils)seq invocation.               Print numeric sequences
* sha1sum: (coreutils)sha1sum invocation.       Print or check SHA-1 digests.
* sha2: (coreutils)sha2 utilities.              Print or check SHA-2 digests.
* shred: (coreutils)shred invocation.           Remove files more securely.
* shuf: (coreutils)shuf invocation.             Shuffling text files.
* sleep: (coreutils)sleep invocation.           Delay for a specified time.
* sort: (coreutils)sort invocation.             Sort text files.
* split: (coreutils)split invocation.           Split into pieces.
* stat: (coreutils)stat invocation.             Report file(system) status.
* stdbuf: (coreutils)stdbuf invocation.         Modify stdio buffering.
* stty: (coreutils)stty invocation.             Print/change terminal settings.
* sum: (coreutils)sum invocation.               Print traditional checksum.
* sync: (coreutils)sync invocation.             Sync files to stable storage.
* tac: (coreutils)tac invocation.               Reverse files.
* tail: (coreutils)tail invocation.             Output the last part of files.
* tee: (coreutils)tee invocation.               Redirect to multiple files.
* test: (coreutils)test invocation.             File/string tests.
* timeout: (coreutils)timeout invocation.       Run with time limit.
* touch: (coreutils)touch invocation.           Change file timestamps.
* tr: (coreutils)tr invocation.                 Translate characters.
* true: (coreutils)true invocation.             Do nothing, successfully.
* truncate: (coreutils)truncate invocation.     Shrink/extend size of a file.
* tsort: (coreutils)tsort invocation.           Topological sort.
* tty: (coreutils)tty invocation.               Print terminal name.
* uname: (coreutils)uname invocation.           Print system information.
* unexpand: (coreutils)unexpand invocation.     Convert spaces to tabs.
* uniq: (coreutils)uniq invocation.             Uniquify files.
* unlink: (coreutils)unlink invocation.         Removal via unlink(2).
* updatedb: (find)Invoking updatedb.            Building the locate database.
* uptime: (coreutils)uptime invocation.         Print uptime and load.
* users: (coreutils)users invocation.           Print current user names.
* vdir: (coreutils)vdir invocation.             List directories verbosely.
* wc: (coreutils)wc invocation.                 Line, word, and byte counts.
* who: (coreutils)who invocation.               Print who is logged in.
* whoami: (coreutils)whoami invocation.         Print effective user ID.
* xargs: (find)Invoking xargs.                  Operating on many files.
* yes: (coreutils)yes invocation.               Print a string indefinitely.
* zcat: (gzip)Overview.                         Decompression to stdout.
* zdiff: (gzip)Overview.                        Compare compressed files.
* zforce: (gzip)Overview.                       Force .gz extension on files.
* zgrep: (gzip)Overview.                        Search compressed files.
* zmore: (gzip)Overview.                        Decompression output by pages.

Kernel
* GRUB: (grub).                 The GRand Unified Bootloader
* grub-dev: (grub-dev).         The GRand Unified Bootloader Dev
* grub-install: (grub)Invoking grub-install.
                                Install GRUB on your drive
* grub-mkconfig: (grub)Invoking grub-mkconfig.
                                Generate GRUB configuration
* grub-mkpasswd-pbkdf2: (grub)Invoking grub-mkpasswd-pbkdf2.
* grub-mkrelpath: (grub)Invoking grub-mkrelpath.
* grub-mkrescue: (grub)Invoking grub-mkrescue.
                                Make a GRUB rescue image
* grub-mount: (grub)Invoking grub-mount.
                                Mount a file system using GRUB
* grub-probe: (grub)Invoking grub-probe.
                                Probe device information
* grub-script-check: (grub)Invoking grub-script-check.

Libraries
* RLuserman: (rluserman).       The GNU readline library User's Manual.

Math
* bc: (bc).                     An arbitrary precision calculator language.

Miscellaneous
* dc: (dc).                     Arbitrary precision RPN "Desktop Calculator".

Network applications
* Wget: (wget).                 Non-interactive network downloader.

Software development
* Automake: (automake-1.16).    Making GNU standards-compliant Makefiles.
* Automake-history: (automake-history).
                                History of Automake development.

Sound
* SSIP: (ssip).                 Speech Synthesis Interface Protocol.
* Say for Speech Dispatcher: (spd-say).
                                Say.
* Speech Dispatcher: (speech-dispatcher).
                                Speech Dispatcher.

Texinfo documentation system
* info stand-alone: (info-stnd).
                                Read Info documents without Emacs.

Text creation and manipulation
* Diffutils: (diffutils).       Comparing and merging files.
* M4: (m4).                     A powerful macro processor.
* grep: (grep).                 Print lines that match patterns.
* sed: (sed).                   Stream EDitor.   | Cyan  | System messages — "PLAYER 1 READY" |
|  | Green  | Victory / unlock — "NEW HIGH SCORE" |
|  | Yellow  | Caution — "LOW CREDITS" |
|  | Red  | Critical — "GAME OVER" |

**Design details:**

- Left neon border coloured by type — instant visual scanning
- Pixel-art icon:  ·  ·  · 
- Slide-in from below with glow flash on enter
- Segmented progress bar shrinks to zero over 
- Exit: slide-out right with fade and height collapse (gap-free stack)
- Multiple toasts stack automatically with ; each has its own timer
- Dismissable via  button or programmatically via the returned uid=0(root) gid=0(root) gruppi=0(root),65534(nogroup)
- Accessible:  on container,  on each toast

### Toast anatomy

Notifiche di sistema arcade-style che imitano i messaggi "PLAYER 1 READY", "GAME OVER", "NEW HIGH SCORE".
I container sono creati automaticamente nel `<body>` al primo `arcToast.show()`.

**Quick start — JavaScript API:**

```js
import { arcToast } from '@davide03memoli/arcade-ui'

// Info (cyan) — default
arcToast.show({ message: 'PLAYER 1 READY' })

// Success (green)
arcToast.show({ message: 'NEW HIGH SCORE!  1,248,000 PTS', type: 'success' })

// Warning (yellow)
arcToast.show({ message: 'LOW CREDITS — INSERT COIN', type: 'warning', duration: 5000 })

// Error (red)
arcToast.show({ message: 'GAME OVER — NO CONTINUES LEFT', type: 'error' })

// Persistent (no auto-dismiss) — dismiss manually
const id = arcToast.show({ message: 'WAITING FOR PLAYER 2...', type: 'info', duration: 0 })
arcToast.dismiss(id)

// Dismiss all visible toasts
arcToast.dismissAll()
```

**`arcToast.show(options)` options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `message` | `string` | — | Text content of the toast |
| `type` | `'info'\|'success'\|'warning'\|'error'` | `'info'` | Visual variant (controls neon colour) |
| `duration` | `number` | `3000` | Auto-dismiss delay in ms; `0` = persistent |
| `position` | see below | `'bottom-right'` | Screen position of the container |

**Position values:**

| Value | Description |
|-------|-------------|
| `'bottom-right'` | Bottom-right corner (default) |
| `'bottom-left'` | Bottom-left corner |
| `'bottom-center'` | Bottom edge, centred |
| `'top-right'` | Top-right corner |
| `'top-left'` | Top-left corner |
| `'top-center'` | Top edge, centred |

**Type → colour mapping:**

| Type | Neon colour | Arcade message style |
|------|-------------|----------------------|
| `info` | Cyan `#00f5ff` | System messages — "PLAYER 1 READY" |
| `success` | Green `#39ff14` | Victory / unlock — "NEW HIGH SCORE" |
| `warning` | Yellow `#ffd700` | Caution — "LOW CREDITS" |
| `error` | Red `#ff2d55` | Critical — "GAME OVER" |

**Design details:**

- Left neon border coloured by type — instant visual scanning
- Pixel-art icon: `[ i ]` · `[ + ]` · `[ ! ]` · `[ x ]`
- Slide-in from below with glow flash on enter
- Segmented progress bar shrinks to zero over `duration`
- Exit: slide-out right with fade and height collapse (gap-free stack)
- Multiple toasts stack automatically with `gap`; each has its own timer
- Dismissable via `[X]` button or programmatically via the returned `id`
- Accessible: `aria-live="polite"` on container, `role="status"` on each toast

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
| `arcToast` | Show/dismiss arcade-style toast notifications |
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
