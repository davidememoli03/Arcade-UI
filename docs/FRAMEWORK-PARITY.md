# Framework parity — vanilla ↔ Angular ↔ React

Mapping **1:1** tra markup HTML, template Angular e JSX React per gli hook dichiarativi Arcade UI.  
Vanilla resta la fonte di verità; Angular espone **directive/input**, React **augmentation JSX** (+ wrapper opzionali in `react-jsx-consumer/`).

Vedi anche: [README § Audio](../arcade-ui/README.md#declarative-sfx-data-arc-sound), [angular-consumer.md](./angular-consumer.md), [DX-ROADMAP](../arcade-ui/docs/DX-ROADMAP.md).

> Stessa guida nel pacchetto npm: [`arcade-ui/docs/FRAMEWORK-PARITY.md`](../arcade-ui/docs/FRAMEWORK-PARITY.md).

---

## Audio dichiarativo (`data-arc-sound-*`)

| Attributo HTML | Evento | Angular `@Input` | React JSX (augmentation) |
|----------------|--------|------------------|-------------------------|
| `data-arc-sound-click` | `click` | `arcadeSoundClick` | `data-arc-sound-click` |
| `data-arc-sound-pointerdown` | `pointerdown` | `arcadeSoundPointerdown` | `data-arc-sound-pointerdown` |
| `data-arc-sound-hover` | `mouseenter` | `arcadeSoundHover` | `data-arc-sound-hover` |
| `data-arc-sound-focus` | `focus` | `arcadeSoundFocus` | `data-arc-sound-focus` |
| `data-arc-sound-success` | `arc:success` | `arcadeSoundSuccess` | `data-arc-sound-success` |
| `data-arc-sound-error` | `arc:error` | `arcadeSoundError` | `data-arc-sound-error` |

**Valore:** id SFX built-in (`coin`, `select`, …), id da `register()`, URL file, oppure `""` per disabilitare quel hook.

**Binding runtime:** `bindArcadeSounds(root)` (lazy a `DOMContentLoaded` se presenti target). Angular: `ArcadeSoundDirective` chiama `bindArcadeSounds` sul host; oppure `ArcadeAudioService.bindArcadeSounds()`.

### Snippet — vanilla

```html
<button type="button" class="arc-btn arc-btn-primary" data-arc-sound-click="win">YOU WIN</button>
<button type="button" class="arc-btn" data-arc-sound-hover="">SILENT HOVER</button>
```

### Snippet — Angular

```typescript
import { arcadeUiAngularImports } from '@davide03memoli/arcade-ui/angular'

@Component({
  standalone: true,
  imports: [...arcadeUiAngularImports],
  template: `
    <button type="button" class="arc-btn arc-btn-primary" arcadeSoundClick="win">YOU WIN</button>
    <button type="button" class="arc-btn" [arcadeSoundHover]="''">SILENT HOVER</button>
  `,
})
export class SfxPanelComponent {}
```

Equivalente manuale (stesso DOM):

```html
<button data-arc-sound-click="win" class="arc-btn arc-btn-primary">YOU WIN</button>
```

### Snippet — React

```tsx
import '@davide03memoli/arcade-ui/react'

<button type="button" className="arc-btn arc-btn-primary" data-arc-sound-click="win">
  YOU WIN
</button>
```

Wrapper opzionale (`arcade-ui/react-jsx-consumer/src/wrappers.tsx`):

```tsx
<ArcButton variant="primary" arcSoundClick="win" arcSoundHover="blip">
  YOU WIN
</ArcButton>
```

---

## Glitch

| Attributo HTML | Angular | React |
|----------------|---------|-------|
| `.arc-glitch` + `data-text` | `arcadeGlitch` + `arcadeGlitchTarget` | `className="arc-glitch"` + `data-text` |
| `data-arc-glitch` | (markup) | `data-arc-glitch` |
| `data-arc-glitch-intensity` | (markup) | `data-arc-glitch-intensity` — union tipizzata |
| `data-arc-glitch-duration` | (markup) | `data-arc-glitch-duration` |
| `data-arc-glitch-burst` | (markup) | `data-arc-glitch-burst` |

**JS:** `bindGlitch(root)` — Angular directive invoca su `element` o `document`; React: `bindGlitch` in `main.tsx` o `useEffect` su ref.

---

## Theme

| Meccanismo | Angular | React |
|------------|---------|-------|
| Classe `arc-theme-*` su `<html>` | `[arcadeTheme]` + `arcadeThemeTarget="document"` | `document.documentElement.classList` o `data-arc-theme` |
| CSS tema | `angular.json` / `@import` tema | `import '@davide03memoli/arcade-ui/themes/...'` |

---

## Modal, tabs, altri hook

| Attributo HTML | Angular | React |
|----------------|---------|-------|
| `data-arc-modal-open` | attributo in template | `data-arc-modal-open` / `<ArcModalTrigger modalId="…" />` |
| `data-arc-tabs` | attributo + `bindTabs()` | `data-arc-tabs` |
| `data-arc-slider` | attributo | `data-arc-slider` |
| `data-arc-display` | attributo | `data-arc-display` |
| `data-tooltip` | attributo | `data-tooltip` |

Lista completa augmentation: [`arcade-ui/src/arcade-ui-react.d.ts`](../arcade-ui/src/arcade-ui-react.d.ts).

---

## Imperativo audio (tutti i framework)

| API vanilla | Angular | React |
|-------------|---------|-------|
| `AudioManager.getInstance().play('coin')` | `ArcadeAudioService.play('coin')` | `useArcadeAudio().play('coin')` |
| `bindArcadeSounds(root)` | `arcadeAudio.bindArcadeSounds(root)` | `AudioManager.getInstance().bindArcadeSounds(root)` |
| `dispatchArcadeSound(el, 'success')` | stesso import da main entry | stesso |

---

## Smoke CI

Esegui da `arcade-ui/`:

| Script | Cosa verifica |
|--------|----------------|
| `npm run smoke:react-jsx` | Augmentation + wrapper + `data-arc-sound-*` in JSX |
| `npm run smoke:angular-types` | Export tipi entry `@davide03memoli/arcade-ui/angular` |
| `npm run smoke:angular-sound` | Template con `ArcadeSoundDirective` (`ngc` strict) |
