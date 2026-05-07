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
| **Panel** | `.arc-panel` | `arc-panel-cyan` · `arc-panel-red` · `arc-panel-yellow` · `arc-panel-green` · `arc-panel-purple` · `arc-panel-glass` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-panel--default) |
| **Input** | `.arc-input` · `.arc-label` | `.arc-textarea` · `.arc-select` · `.arc-input-hint` · `.arc-input-hint-error` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-input--default) |
| **Dropdown** | `.arc-dropdown` | `arc-dropdown-cyan` · `arc-dropdown-green` · `arc-dropdown-red` · `arc-dropdown-yellow` · `arc-dropdown-purple` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-dropdown--default) |
| **Badge** | `.arc-badge` | `arc-badge-cyan` · `arc-badge-red` · `arc-badge-yellow` · `arc-badge-green` · `arc-badge-purple` · `arc-badge-outline` · `arc-badge-pulse` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-badge--default) |
| **Accordion** | `.arc-accordion` | `arc-accordion-cyan` · `arc-accordion-red` · `arc-accordion-yellow` · `arc-accordion-green` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-accordion--default) |
| **Glow** | `.arc-glow-{color}` · `.arc-box-glow-{color}` | cyan · red · yellow · green · purple | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/effects-glow--text) |
| **Glitch** | `.arc-glitch` · `.arc-glitch-hover` | — | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/effects-glitch--always-on) |
| **CRT** | `.arc-crt-screen` · `.arc-crt-global` | `.arc-crt-boot` | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/effects-crt--screen) |
| **Animations** | `.arc-u-blink` · `.arc-u-pulse` · `.arc-u-glitch` | — | [→ Demo](https://davidememoli03.github.io/Arcade-UI/?path=/story/tokens-animation--keyframes) |

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
