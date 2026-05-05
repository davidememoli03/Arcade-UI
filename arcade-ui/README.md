# @davide03memoli/arcade-ui

Libreria di componenti UI ispirata ai videogiochi arcade anni '80.  
Stile retrò, palette neon, animazioni pixelart, zero dipendenze (solo Howler per audio opzionale).

[![CI](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml/badge.svg)](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@davide03memoli/arcade-ui)](https://www.npmjs.com/package/@davide03memoli/arcade-ui)
[![Storybook](https://img.shields.io/badge/storybook-live-ff4785)](https://davidememoli03.github.io/Arcade-UI/)

---

## Installazione

```bash
npm install @davide03memoli/arcade-ui
```

### Font (opzionale ma consigliato)

Aggiungi i font arcade nel `<head>` del tuo HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Silkscreen&display=swap"
  rel="stylesheet"
/>
```

### Peer dependency (per effetti sonori)

```bash
npm install howler
```

---

## Setup

Importa il CSS all'entry point della tua applicazione:

```js
// main.js / main.ts
import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
```

Oppure usa la versione minificata:

```js
import '@davide03memoli/arcade-ui/dist/arcade-ui.min.css'
```

Da questo momento tutte le classi CSS e i token CSS sono disponibili globalmente.

---

## Componenti

### Button — `.arcade-btn`

Bottone con bordo neon e glow al hover.

```html
<!-- Default -->
<button class="arcade-btn">INSERT COIN</button>

<!-- Disabled -->
<button class="arcade-btn" disabled>GAME OVER</button>
```

**Esempio con colore accento:**

```html
<!-- Bordo rosso — pericolo / vita persa -->
<button class="arcade-btn" style="
  border-color: var(--arc-color-red);
  color: var(--arc-color-red);
">CONTINUE?</button>

<!-- Bordo giallo — avviso / monete -->
<button class="arcade-btn" style="
  border-color: var(--arc-color-yellow);
  color: var(--arc-color-yellow);
">BONUS ×3</button>
```

---

### Panel — `.arcade-panel`

Card con sfondo scuro, bordo neon e glow ambientale.

```html
<div class="arcade-panel">
  <h2 class="arcade-panel-title">HIGH SCORE</h2>
  <p class="arcade-panel-body">Congratulations! You reached rank #1.</p>
  <button class="arcade-btn">PLAY AGAIN</button>
</div>
```

**Elementi interni:**

| Classe | Elemento | Uso |
|---|---|---|
| `.arcade-panel-title` | `<h2>` / `<h3>` | Titolo del pannello |
| `.arcade-panel-body` | `<p>` | Testo descrittivo |

---

### Input — `.arcade-input` / `.arcade-label`

Campo di testo con stile terminale e glow al focus.

```html
<!-- Input semplice -->
<input class="arcade-input" placeholder="ENTER YOUR NAME" />

<!-- Input con label -->
<label class="arcade-label">
  PLAYER NAME
  <input class="arcade-input" placeholder="AAA" maxlength="3" />
</label>

<!-- Disabled -->
<input class="arcade-input" placeholder="LOCKED" disabled />
```

---

## Esempio completo — Schermata Game Over

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="node_modules/@davide03memoli/arcade-ui/dist/arcade-ui.css" />
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

  <div class="arcade-panel">
    <h2 class="arcade-panel-title">GAME OVER</h2>
    <p class="arcade-panel-body">You scored 42,000 points.</p>

    <label class="arcade-label">
      ENTER YOUR NAME
      <input class="arcade-input" placeholder="AAA" maxlength="3" />
    </label>

    <div style="display:flex; gap: var(--arc-space-2); margin-top: var(--arc-space-2);">
      <button class="arcade-btn">SAVE</button>
      <button class="arcade-btn" style="
        border-color: var(--arc-color-red);
        color: var(--arc-color-red);
      ">QUIT</button>
    </div>
  </div>

</body>
</html>
```

---

## Token CSS

Tutti i token sono disponibili come CSS custom properties dopo l'import del foglio di stile.  
Puoi usarli nel tuo CSS per costruire componenti consistenti con il tema arcade.

### Colori

```css
/* Sfondi */
var(--arc-color-bg)           /* #000 — schermo principale */
var(--arc-color-bg-alt)       /* #0a0010 — livello alternativo */
var(--arc-color-bg-panel)     /* #110020 — superficie card/panel */

/* Neon */
var(--arc-color-cyan)         /* #00f5ff — primario */
var(--arc-color-red)          /* #ff2d55 — pericolo/errore */
var(--arc-color-yellow)       /* #ffd700 — avvisi/monete */
var(--arc-color-green)        /* #39ff14 — successo/health */
var(--arc-color-purple)       /* #bf00ff — power-up */
var(--arc-color-pink)         /* #ff69b4 — bonus/charm */

/* Testo */
var(--arc-color-text)         /* alias di --arc-color-cyan */
var(--arc-color-text-muted)   /* testo secondario/placeholder */
var(--arc-color-text-accent)  /* alias di --arc-color-yellow */
var(--arc-color-disabled)     /* controlli non interattivi */
```

### Tipografia

```css
/* Font stack */
var(--arc-font-pixel)         /* Press Start 2P — titoli */
var(--arc-font-terminal)      /* VT323 — body/dialoghi */
var(--arc-font-mono)          /* Silkscreen — codice/label */

/* Scala (ogni livello ha -size, -lh, -font) */
var(--arc-text-display-size)  /* 64px */
var(--arc-text-h1-size)       /* 32px */
var(--arc-text-h2-size)       /* 24px */
var(--arc-text-h3-size)       /* 20px */
var(--arc-text-body-size)     /* 20px */
var(--arc-text-caption-size)  /* 14px */
```

### Spaziatura (griglia 8px)

```css
var(--arc-space-1)   /*  8px */
var(--arc-space-2)   /* 16px */
var(--arc-space-3)   /* 24px */
var(--arc-space-4)   /* 32px */
var(--arc-space-6)   /* 48px */
var(--arc-space-8)   /* 64px */
var(--arc-space-12)  /* 96px */
```

### Border radius e width

```css
var(--arc-radius-none)    /* 0px — spigoli netti */
var(--arc-radius-pixel)   /* 4px — arrotondamento minimo */

var(--arc-border-sm)      /* 2px */
var(--arc-border-md)      /* 4px */
var(--arc-border-lg)      /* 6px */
```

### Animazioni

```css
/* Durate */
var(--arc-anim-instant)   /* 50ms */
var(--arc-anim-fast)      /* 150ms */
var(--arc-anim-normal)    /* 300ms */
var(--arc-anim-slow)      /* 600ms */
var(--arc-anim-dramatic)  /* 1200ms */

/* Easing */
var(--arc-ease-step)      /* steps(1) */
var(--arc-ease-pixel)     /* steps(4) */
var(--arc-ease-arcade)    /* steps(8) */
```

**Keyframes predefiniti:** `blink`, `pulse-glow`, `glitch`

```css
/* Esempio d'uso */
.my-cursor {
  animation: blink var(--arc-anim-normal) var(--arc-ease-step) infinite;
}

.my-button-active {
  animation: pulse-glow var(--arc-anim-slow) var(--arc-ease-pixel) infinite;
}
```

---

## Esempio avanzato — Componente personalizzato

Puoi costruire qualsiasi componente riutilizzando i token:

```css
/* my-badge.css */
.my-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--arc-space-1);
  padding: 0 var(--arc-space-2);
  height: 28px;
  background: var(--arc-color-bg-panel);
  border: var(--arc-border-sm) solid var(--arc-color-green);
  border-radius: var(--arc-radius-pixel);
  color: var(--arc-color-green);
  font-family: var(--arc-font-mono);
  font-size: var(--arc-text-caption-size);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

```html
<span class="my-badge">★ CHAMPION</span>
```

---

## Breakpoint

```css
/* Mobile-first con i breakpoint Arcade UI */
@media (min-width: 480px) {   /* var(--arc-bp-pocket) */
  /* layout smartphone */
}

@media (min-width: 1280px) {  /* var(--arc-bp-handheld) */
  /* layout desktop */
}
```

---

## TypeScript

Il pacchetto include le dichiarazioni di tipo:

```ts
import { version } from '@davide03memoli/arcade-ui'
// version: string
```

---

## Formati disponibili

| Formato | File |
|---|---|
| ESM | `dist/arcade-ui.es.js` |
| CJS | `dist/arcade-ui.cjs.js` |
| CSS | `dist/arcade-ui.css` |
| CSS minificato | `dist/arcade-ui.min.css` |
| Types | `dist/arcade-ui.d.ts` |

---

## Storybook

Esplora i componenti e i token in modo interattivo:  
**[https://davidememoli03.github.io/Arcade-UI/](https://davidememoli03.github.io/Arcade-UI/)**

---

## Licenza

[MIT](../LICENSE)
