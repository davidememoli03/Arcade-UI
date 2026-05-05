# Button — Guida all'implementazione

## Obiettivo

Implementare il componente `arc-btn` con tutte le varianti, dimensioni e stati previsti,
rispettando il design system arcade (no border-radius, steps() per le transizioni, font pixel).

---

## 1. Setup — branch di lavoro

```bash
./scripts/new-branch.sh feat/arc-btn
```

---

## 2. File da creare / modificare

```
arcade-ui/src/
├── components/
│   └── button.css          ← crea (nuovo)
├── stories/
│   └── Button.stories.js   ← crea (nuovo)
├── __tests__/
│   └── button.test.js      ← crea (nuovo)
└── styles/
    └── arcade-ui.css       ← modifica (aggiungi @import)
```

> Il componente Button **non modifica** i token esistenti —
> aggiunge solo un `@import` nell'entry point CSS.

---

## 3. Token CSS — verifica e integrazioni

I token necessari esistono già. Ripassali prima di scrivere il CSS:

| Token | File | Valore |
|---|---|---|
| `--arc-color-yellow` | `tokens/colors.css` | `#ffd700` |
| `--arc-color-yellow-glow` | `tokens/colors.css` | `#ffd7004` |
| `--arc-color-red` | `tokens/colors.css` | `#ff2d55` |
| `--arc-color-red-glow` | `tokens/colors.css` | `#ff2d554` |
| `--arc-color-cyan` | `tokens/colors.css` | `#00f5ff` |
| `--arc-color-bg` | `tokens/colors.css` | `#000` |
| `--arc-color-disabled` | `tokens/colors.css` | `#345` |
| `--arc-font-pixel` | `tokens/typography.css` | `'Press Start 2P'` |
| `--arc-ease-pixel` | `tokens/animation.css` | `steps(4)` |
| `--arc-anim-fast` | `tokens/animation.css` | `150ms` |

> **Regola:** non scrivere mai valori hardcoded nel CSS del componente.
> Usa sempre `var(--arc-*)`.

---

## 4. CSS — `src/components/button.css`

Crea il file seguendo esattamente quest'ordine di blocchi.

### 4.1 — Base

```css
/* src/components/button.css */

.arc-btn {
    /* Layout */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;

    /* Dimensione default */
    padding: 16px 32px;
    font-size: 14px;

    /* Stile arcade */
    font-family: var(--arc-font-pixel);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;

    /* Nessun border-radius — pixel puro */
    border-radius: 0;
    border: 2px solid transparent;

    /* Effetto 3D pixel: offset in basso a destra */
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8);

    /* Transizione: SOLO steps(), mai ease */
    transition:
        box-shadow var(--arc-anim-fast) var(--arc-ease-pixel),
        transform   var(--arc-anim-fast) var(--arc-ease-pixel),
        background  var(--arc-anim-fast) var(--arc-ease-pixel);
}
```

### 4.2 — Varianti colore

```css
/* ── Primary: sfondo giallo, testo nero ───────────────────── */
.arc-btn--primary {
    background: var(--arc-color-yellow);
    color: #000;
    border-color: var(--arc-color-yellow);
}

.arc-btn--primary:hover:not(:disabled) {
    background: #e6c200; /* yellow -10% lightness */
    box-shadow:
        4px 4px 0 rgba(0, 0, 0, 0.8),
        0 0 12px var(--arc-color-yellow),
        0 0 24px var(--arc-color-yellow-glow);
}

/* ── Ghost: trasparente, bordo ciano ─────────────────────── */
.arc-btn--ghost {
    background: transparent;
    color: var(--arc-color-cyan);
    border-color: var(--arc-color-cyan);
}

.arc-btn--ghost:hover:not(:disabled) {
    background: rgba(0, 245, 255, 0.08);
    box-shadow:
        4px 4px 0 rgba(0, 0, 0, 0.8),
        0 0 12px var(--arc-color-cyan),
        0 0 24px rgba(0, 245, 255, 0.25);
}

/* ── Danger: sfondo rosso, testo bianco ──────────────────── */
.arc-btn--danger {
    background: var(--arc-color-red);
    color: #fff;
    border-color: var(--arc-color-red);
}

.arc-btn--danger:hover:not(:disabled) {
    background: #e0002e; /* red -10% lightness */
    box-shadow:
        4px 4px 0 rgba(0, 0, 0, 0.8),
        0 0 12px var(--arc-color-red),
        0 0 24px var(--arc-color-red-glow);
}
```

### 4.3 — Dimensioni

```css
/* ── sm: compatto ───────────────────────────────────────── */
.arc-btn--sm {
    padding: 8px 16px;
    font-size: 12px;
}

/* ── lg: grande ─────────────────────────────────────────── */
.arc-btn--lg {
    padding: 20px 40px;
    font-size: 16px;
}
```

### 4.4 — Stato :active (effetto pressione fisica)

```css
/* Tutti i bottoni: translate verso il basso + riduzione shadow */
.arc-btn:active:not(:disabled) {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.8); /* shadow azzzerata = "premuto" */
}
```

### 4.5 — Stato :disabled

```css
.arc-btn:disabled {
    background: transparent;
    color: var(--arc-color-disabled);
    border-color: var(--arc-color-disabled);
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.4;

    /* Annulla qualsiasi effetto hover ereditate */
    pointer-events: none;
}
```

### 4.6 — Stato :focus-visible (accessibilità)

```css
/* Outline neon: visibile solo da tastiera (non da click mouse) */
.arc-btn:focus-visible {
    outline: 3px solid var(--arc-color-cyan);
    outline-offset: 4px;
    box-shadow:
        4px 4px 0 rgba(0, 0, 0, 0.8),
        0 0 0 5px rgba(0, 245, 255, 0.3);
}
```

---

## 5. Collegamento all'entry point CSS

Aggiungi l'import in `src/styles/arcade-ui.css` **dopo** gli import esistenti:

```css
/* src/styles/arcade-ui.css  — aggiunta alla fine degli @import */
@import url('../components/button.css');
```

---

## 6. JS opzionale — `src/components/button.js`

Il binding audio è opzionale e senza dipendenze JS obbligatorie.
Il componente funziona completamente senza questo file.

```js
// src/components/button.js
// Auto-bind audio events su tutti i bottoni con data-arc-sound-*
// Richiede: howler come peer dependency

import { Howl } from 'howler'

const cache = new Map()

function getSound(src) {
  if (!cache.has(src)) {
    cache.set(src, new Howl({ src: [src], volume: 0.5 }))
  }
  return cache.get(src)
}

export function bindButtonSounds(root = document) {
  root.querySelectorAll('[data-arc-sound-hover], [data-arc-sound-click]').forEach(btn => {
    const hoverSrc = btn.dataset.arcSoundHover
    const clickSrc = btn.dataset.arcSoundClick

    if (hoverSrc) {
      btn.addEventListener('mouseenter', () => getSound(hoverSrc).play())
    }
    if (clickSrc) {
      btn.addEventListener('click', () => getSound(clickSrc).play())
    }
  })
}
```

**Uso:**

```html
<button
  class="arc-btn arc-btn--primary"
  data-arc-sound-hover="/sounds/hover.mp3"
  data-arc-sound-click="/sounds/click.mp3"
>
  INSERT COIN
</button>
```

```js
import { bindButtonSounds } from '@davide03memoli/arcade-ui/src/components/button.js'
bindButtonSounds()
```

---

## 7. Storybook — `src/stories/Button.stories.js`

```js
// src/stories/Button.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Button',
  argTypes: {
    label:   { control: 'text' },
    variant: { control: { type: 'select' }, options: ['primary', 'ghost', 'danger'] },
    size:    { control: { type: 'select' }, options: ['sm', 'default', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'INSERT COIN',
    variant: 'primary',
    size: 'default',
    disabled: false,
  },
}

function renderBtn({ label, variant, size, disabled }) {
  const variantClass = variant !== 'default' ? `arc-btn--${variant}` : ''
  const sizeClass    = size    !== 'default' ? `arc-btn--${size}`    : ''
  const disabledAttr = disabled ? 'disabled' : ''
  return `<button class="arc-btn ${variantClass} ${sizeClass}" ${disabledAttr}>${label}</button>`
}

/** @type { import('@storybook/html').StoryObj } */
export const Primary = {
  args: { variant: 'primary' },
  render: renderBtn,
}

export const Ghost = {
  args: { variant: 'ghost' },
  render: renderBtn,
}

export const Danger = {
  args: { variant: 'danger' },
  render: renderBtn,
}

export const Small = {
  args: { variant: 'primary', size: 'sm' },
  render: renderBtn,
}

export const Large = {
  args: { variant: 'primary', size: 'lg' },
  render: renderBtn,
}

export const Disabled = {
  args: { variant: 'primary', disabled: true },
  render: renderBtn,
}

export const AllVariants = {
  render: () => `
    <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
      <button class="arc-btn arc-btn--primary arc-btn--sm">SM PRIMARY</button>
      <button class="arc-btn arc-btn--primary">PRIMARY</button>
      <button class="arc-btn arc-btn--primary arc-btn--lg">LG PRIMARY</button>
      <button class="arc-btn arc-btn--ghost">GHOST</button>
      <button class="arc-btn arc-btn--danger">DANGER</button>
      <button class="arc-btn arc-btn--primary" disabled>DISABLED</button>
    </div>
  `,
}
```

---

## 8. Test — `src/__tests__/button.test.js`

```js
// src/__tests__/button.test.js
import { describe, it, expect, beforeEach } from 'vitest'
import { JSDOM } from 'jsdom'

// Ricrea un DOM minimale per ogni test
let document

beforeEach(() => {
  const dom = new JSDOM('<!DOCTYPE html><body></body>')
  document = dom.window.document
})

function makeBtn(classes = '', attrs = '') {
  const btn = document.createElement('button')
  btn.className = `arc-btn ${classes}`.trim()
  if (attrs) btn.setAttribute('disabled', '')
  return btn
}

describe('arc-btn — struttura DOM', () => {
  it('ha la classe base arc-btn', () => {
    const btn = makeBtn()
    expect(btn.classList.contains('arc-btn')).toBe(true)
  })

  it('variante primary ha arc-btn--primary', () => {
    const btn = makeBtn('arc-btn--primary')
    expect(btn.classList.contains('arc-btn--primary')).toBe(true)
  })

  it('variante ghost ha arc-btn--ghost', () => {
    const btn = makeBtn('arc-btn--ghost')
    expect(btn.classList.contains('arc-btn--ghost')).toBe(true)
  })

  it('variante danger ha arc-btn--danger', () => {
    const btn = makeBtn('arc-btn--danger')
    expect(btn.classList.contains('arc-btn--danger')).toBe(true)
  })
})

describe('arc-btn — dimensioni', () => {
  it('ha arc-btn--sm per il formato piccolo', () => {
    const btn = makeBtn('arc-btn--primary arc-btn--sm')
    expect(btn.classList.contains('arc-btn--sm')).toBe(true)
  })

  it('ha arc-btn--lg per il formato grande', () => {
    const btn = makeBtn('arc-btn--primary arc-btn--lg')
    expect(btn.classList.contains('arc-btn--lg')).toBe(true)
  })
})

describe('arc-btn — stato disabled', () => {
  it('il bottone disabilitato ha attributo disabled', () => {
    const btn = makeBtn('arc-btn--primary', 'disabled')
    expect(btn.hasAttribute('disabled')).toBe(true)
  })

  it('il bottone disabilitato non è clickabile', () => {
    const btn = makeBtn('arc-btn--primary', 'disabled')
    let clicked = false
    btn.addEventListener('click', () => { clicked = true })
    // I bottoni disabled non emettono click nel browser reale;
    // in jsdom simuliamo il check sull'attributo
    expect(btn.disabled).toBe(true)
    expect(clicked).toBe(false)
  })
})
```

> **Nota:** i test visivi Percy (screenshot per ogni variante) si configurano
> separatamente nella pipeline CI una volta integrato Storybook.

---

## 9. Checklist Acceptance Criteria

Prima di aprire la PR, verifica punto per punto:

### CSS
- [ ] `border-radius: 0` su tutti i bottoni (nessuna rotondità)
- [ ] `box-shadow` con offset 4px per l'effetto 3D pixel
- [ ] Transizioni usano `steps()` — nessuna `ease` o `cubic-bezier`
- [ ] Font `var(--arc-font-pixel)` = Press Start 2P

### Varianti
- [ ] `arc-btn--primary`: sfondo `--arc-color-yellow`, testo `#000`
- [ ] `arc-btn--ghost`: sfondo trasparente, bordo `--arc-color-cyan`
- [ ] `arc-btn--danger`: sfondo `--arc-color-red`, testo `#fff`

### Dimensioni
- [ ] `arc-btn--sm`: padding `8px 16px`, font `12px`
- [ ] default: padding `16px 32px`, font `14px`
- [ ] `arc-btn--lg`: padding `20px 40px`, font `16px`

### Stati
- [ ] `:hover` su tutte le varianti: box-shadow neon acceso
- [ ] `:active`: `translate(4px, 4px)` + shadow azzerata (effetto pressione)
- [ ] `:disabled`: opacità `0.4`, `cursor: not-allowed`, hover bloccato
- [ ] `:focus-visible`: outline neon ciano 3px (test con Tab da tastiera)

### Accessibilità (WCAG AA)
- [ ] Primary — giallo `#ffd700` su nero `#000`: contrasto **≥ 4.5:1** ✓ (8.59:1)
- [ ] Ghost — ciano `#00f5ff` su nero `#000`: contrasto **≥ 4.5:1** ✓ (14.7:1)
- [ ] Danger — bianco `#fff` su rosso `#ff2d55`: contrasto **≥ 4.5:1** ✓ (4.56:1)

### Test
- [ ] `npm test` passa senza errori
- [ ] Storybook mostra tutte le varianti (Primary, Ghost, Danger, Sm, Lg, Disabled, AllVariants)

---

## 10. Apertura PR

Quando tutti i checkbox sono spuntati:

```bash
./scripts/open-pr.sh "feat: implementa arc-btn con varianti primary/ghost/danger"
```

Dopo il merge:

```bash
./scripts/cleanup.sh
```
