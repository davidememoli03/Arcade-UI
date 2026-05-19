# Accessibility — Arcade UI

Guida trasversale per integrare componenti Arcade UI in app accessibili (screen reader, tastiera, stati visivi).  
I dettagli markup per componente restano anche nel [README](../README.md); qui: **ruoli ARIA**, **stati**, **tastiera** e responsabilità del consumer.

Vedi anche la [DX roadmap](./DX-ROADMAP.md) · [Storybook](https://davidememoli03.github.io/Arcade-UI/).

> **Ambito v1 (docs-first):** nessun cambio CSS obbligatorio. Dove il runtime non fornisce ancora comportamento completo (es. dropdown), la tabella indica cosa implementare in app.

---

## Riepilogo rapido

| Componente | Ruolo / pattern | Stati principali | Tastiera (built-in) | Note consumer |
|------------|-------------------|------------------|---------------------|---------------|
| [Button](#button-arc-btn) | `<button>` nativo | `disabled`, focus | Tab, Enter, Space | Usare `type="button"` se non submit |
| [Modal](#modal-arc-modal) | `dialog` + `aria-modal` | open / closed (`aria-hidden`) | Tab trap, Esc, focus restore | Preferire `arcModal.open()` |
| [Tabs](#tabs-arc-tabs) | `tablist` / `tab` / `tabpanel` | `aria-selected`, attivo | Frecce, Home, End (JS) | `data-arc-tabs` + `bindTabs()` |
| [Dropdown](#dropdown-arc-dropdown) | `listbox` + `option` | `aria-expanded`, selected, disabled | **Da implementare** in app | Toggle `aria-expanded` obbligatorio |
| [Card](#card-arc-card) | regione / `button` | `arc-card-selected`, `arc-card-locked` | Dipende da markup | Card cliccabile → usare `<button>` o ruolo esplicito |
| [Toggle](#toggle-arc-toggle) | checkbox in `<label>` | `checked`, `disabled` | Tab, Space | LED decorativo `aria-hidden` |

---

## Button (`.arc-btn`)

### Markup

```html
<button type="button" class="arc-btn arc-btn-primary">INSERT COIN</button>
<button type="button" class="arc-btn arc-btn-ghost" disabled>UNAVAILABLE</button>
```

### ARIA e stati

| Attributo / stato | Uso |
|-------------------|-----|
| *(nessun role extra)* | `<button>` ha semantica nativa |
| `disabled` | Disabilita attivazione e rimuove da tab order |
| `type="button"` | Evita submit involontari in `<form>` |
| `aria-label` | Se il testo visibile non basta (solo icona) |

### Tastiera

- **Tab** — focus sul controllo
- **Enter** / **Space** — attiva il click
- Stato **disabled** — nessuna attivazione

### Storybook

[Components / Button](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-button--primary) — varianti e `disabled` nel pannello controlli.

---

## Modal (`.arc-modal`)

### Markup consigliato

```html
<div class="arc-modal-backdrop" id="my-modal" aria-hidden="true">
  <div class="arc-modal arc-modal-cyan"
       role="dialog"
       aria-modal="true"
       aria-labelledby="my-modal-title">
    <div class="arc-modal-header">
      <span id="my-modal-title" class="arc-modal-title">GAME OVER</span>
      <button type="button" class="arc-modal-close" aria-label="Close dialog">[X]</button>
    </div>
    <div class="arc-modal-body">…</div>
  </div>
</div>
```


### ARIA e stati

| Attributo / classe | Chiuso | Aperto |
|--------------------|--------|--------|
| `aria-hidden` sul backdrop | `"true"` | `"false"` |
| `arc-modal-backdrop-open` | assente | presente |
| `role="dialog"` + `aria-modal="true"` | — | sempre sul pannello |
| `aria-labelledby` | — | punta al titolo visibile |
| `aria-label` su `.arc-modal-close` | — | obbligatorio se solo simbolo `[X]` |

### Tastiera (con `arcModal`)

Import: `import { arcModal } from '@davide03memoli/arcade-ui'`

| Tasto | Comportamento |
|-------|----------------|
| **Tab** / **Shift+Tab** | Focus trap dentro il dialog |
| **Escape** | Chiude il modal |
| Click sul backdrop | Chiude (target = backdrop) |
| Alla chiusura | Focus ripristinato sul trigger (se passato a `open()`) |

Trigger dichiarativo: `data-arc-modal-open="my-modal"` (auto-bind a `DOMContentLoaded`).

### Storybook

[Components / Modal](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-modal--default) — esempi con `role="dialog"`, `aria-labelledby`, close label.

---

## Tabs (`.arc-tabs`)

Due modalità: **CSS-only** (radio nascosti) e **JS-driven** (`data-arc-tabs`).

### Markup JS-driven (consigliato per tastiera completa)

```html
<div class="arc-tabs arc-tabs-cyan" data-arc-tabs>
  <div class="arc-tab-list" role="tablist">
    <button type="button" class="arc-tab" role="tab" aria-selected="true">STAGE 1</button>
    <button type="button" class="arc-tab" role="tab" tabindex="-1">STAGE 2</button>
  </div>
  <div class="arc-tab-panel arc-tab-panel-active" role="tabpanel">…</div>
  <div class="arc-tab-panel" role="tabpanel" hidden>…</div>
</div>
```

`bindTabs()` / `arcTabs()` impostano `aria-selected`, `tabindex` (roving `0` / `-1`) e classi attive.

### ARIA e stati

| Elemento | Attributi |
|----------|-----------|
| `.arc-tab-list` | `role="tablist"` |
| `.arc-tab` | `role="tab"`, `aria-selected="true|false"`, `tabindex="0|-1"` |
| `.arc-tab-panel` | `role="tabpanel"`, pannello attivo: `.arc-tab-panel-active` |

### Tastiera (JS-driven, `arcTabs`)

| Tasto | Azione |
|-------|--------|
| **ArrowRight** / **ArrowLeft** | Tab successivo / precedente (ciclico) |
| **Home** / **End** | Primo / ultimo tab |
| **Enter** / **Space** | Attiva tab focalizzato |
| **Click** | Attiva tab |

### CSS-only

Usa `<input type="radio" class="arc-tab-radio">` + `<label class="arc-tab">`. Focus e annunci SR dipendono dal browser; per WCAG rigoroso preferire la modalità JS.

### Storybook

[Components / Tabs](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-tabs--css-only) — confronto CSS vs JS; pattern ARIA in entrambe le varianti.

---

## Dropdown (`.arc-dropdown`)

Componente **principalmente CSS**; apertura/chiusura via `aria-expanded` sul trigger.

### Markup

```html
<div class="arc-dropdown arc-dropdown-cyan">
  <button type="button" class="arc-dropdown-trigger"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls="difficulty-list">
    <span class="arc-dropdown-value">NORMAL</span>
    <span class="arc-dropdown-chevron" aria-hidden="true"></span>
  </button>
  <ul id="difficulty-list" class="arc-dropdown-menu" role="listbox">
    <li class="arc-dropdown-option" role="option">EASY</li>
    <li class="arc-dropdown-option arc-dropdown-option-selected" role="option" aria-selected="true">NORMAL</li>
    <li class="arc-dropdown-option arc-dropdown-option-disabled" role="option" aria-disabled="true">NIGHTMARE</li>
  </ul>
</div>
```

### ARIA e stati

| Classe / attributo | Significato |
|--------------------|-------------|
| `aria-haspopup="listbox"` | Sul trigger |
| `aria-expanded` | `"false"` chiuso · `"true"` aperto |
| `aria-controls` | ID del `ul[role=listbox]` (consigliato) |
| `arc-dropdown-option-selected` | Opzione corrente (visivo) |
| `aria-selected="true"` | Opzione corrente (SR) — impostare in app |
| `arc-dropdown-option-disabled` + `aria-disabled="true"` | Non selezionabile |
| `disabled` sul trigger | Widget intero disabilitato |
| `arc-dropdown-disabled` | Stile container disabilitato |

### Tastiera (responsabilità consumer)

Il pacchetto **non** include ancora un modulo `bindDropdown()` con navigazione completa. Pattern consigliato:

| Tasto | Comportamento atteso |
|-------|----------------------|
| **Enter** / **Space** sul trigger | Apre/chiude (`aria-expanded`) |
| **ArrowDown** / **ArrowUp** | Muove focus tra `role="option"` |
| **Enter** | Seleziona opzione, aggiorna `.arc-dropdown-value`, chiude |
| **Escape** | Chiude senza cambiare |
| **Tab** | Esce dal widget quando chiuso |

Storybook usa `wireDropdowns()` solo per demo click — vedi [Components / Dropdown](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-dropdown--default).

---

## Card (`.arc-card`)

Le card sono **contenitori visivi**; la selezione è spesso gestita in schermate tipo character select.

### Stati (classi)

| Classe | Effetto | Accessibilità |
|--------|---------|---------------|
| `arc-card-selected` | Bordo attivo + label "▶ SELECT ◀" | Aggiungere `aria-selected="true"` o annunciare selezione |
| `arc-card-locked` | Disabilitata visivamente | `aria-disabled="true"`; non focusabile |
| `arc-card-glow` | Solo decorativo | Nessun attributo richiesto |

> Non combinare `arc-card-selected` e `arc-card-locked` sullo stesso nodo (`::after` condiviso).

### Pattern consigliati

**Selezione con bottone esplicito (preferito):**

```html
<article class="arc-card arc-card-cyan arc-card-selected" aria-labelledby="card-ryu-title">
  …
  <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
</article>
```

**Card intera cliccabile:**

```html
<button type="button" class="arc-card arc-card-cyan" style="width:100%;text-align:inherit;">
  …contenuto…
</button>
```

Oppure `role="button"` + `tabindex="0"` + handler Enter/Space (più lavoro; preferire `<button>`).

### Tastiera

- Se la card è un **`<button>`** — Tab + Enter/Space nativi
- Se solo CSS selected — assicurare focus e annuncio SR sul controllo che cambia selezione

### Storybook

[Components / Card — character select](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-card--character-select-screen) — stati selected / locked.

---

## Toggle (`.arc-toggle`)

Switch **CSS-only** basato su `<input type="checkbox">`.

### Markup

```html
<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle-input" checked>
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">SOUND FX</span>
</label>
```

### ARIA e stati

| Meccanismo | Note |
|------------|------|
| `<input type="checkbox">` | Stato `checked` / `disabled` nativi |
| `arc-toggle-switch` | Solo decorativo → `aria-hidden="true"` |
| Testo in `.arc-toggle-label` | Nome accessibile del controllo |
| `arc-toggle-on` / `arc-toggle-off` | Override visivo; mantenere sync con `checked` |

### Tastiera

- **Tab** — focus sull’input (nascosto visivamente ma focusabile)
- **Space** — toggle stato checked

### Storybook

[Components / Toggle](https://davidememoli03.github.io/Arcade-UI/?path=/story/components-toggle--all-states) — on/off/disabled.

---

## Preferenze utente globali

| Preferenza | Comportamento Arcade UI |
|------------|-------------------------|
| `prefers-reduced-motion: reduce` | Hover audio `blip` soppresso; animazioni CSS possono ancora essere attive — valutare `mute()` o CSS custom |
| Contrasto / font | Usare token tema; non sostituisce audit WCAG |

---

## Checklist integrazione

- [ ] Ogni controllo interattivo è raggiungibile da **tastiera**
- [ ] Stati **disabled** / **selected** hanno equivalente programmatico (`disabled`, `aria-selected`, …)
- [ ] Modali: `aria-labelledby`, focus trap, **Esc**, restore focus
- [ ] Tab: `role="tablist"` + `bindTabs()` per navigazione frecce
- [ ] Dropdown: `aria-expanded` + navigazione opzioni (custom JS fino a eventuale `bindDropdown`)
- [ ] Tooltip: non usare solo `::after` — vedi README § Tooltip (`aria-label` / `aria-describedby`)

---

## Riferimenti

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [README § Components](../README.md) — anatomia per componente
- [DX roadmap](./DX-ROADMAP.md) — issue figlie (#119, …)
