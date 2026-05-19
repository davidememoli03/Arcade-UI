# DX roadmap — Arcade UI

Tracciamento incrementale per **meno JS obbligatorio**, comportamenti **dichiarativi** (`data-*`), documentazione e **parity Storybook / framework**.

Issue meta su GitHub: [#115](https://github.com/davidememoli03/Arcade-UI/issues/115) — usare i commenti lì per proporre nuove voci; aprire issue figlie per singole feature.

**Guida ARIA / tastiera (integratori):** [`docs/ACCESSIBILITY.md`](./ACCESSIBILITY.md) — button, modal, tabs, dropdown, card, toggle ([#119](https://github.com/davidememoli03/Arcade-UI/issues/119)).

## Legenda

| Stato | Significato |
|-------|-------------|
| ✅ | Completato (in `main` / release) |
| 🚧 | In corso o issue aperta |
| 📋 | Pianificato — issue figlia da aprire o già linkata |

---

## Audio

| Voce | Stato | Issue / note |
|------|-------|----------------|
| SFX dichiarativi `data-arc-sound-*` + `bindArcadeSounds` | ✅ | [#114](https://github.com/davidememoli03/Arcade-UI/issues/114) — README § Audio, Storybook *Dichiarativo* |
| Policy gesture / lazy Web Audio | ✅ | [#116](https://github.com/davidememoli03/Arcade-UI/issues/116) — README § gesture, `activate()` / `isActivated()`, lazy bind + `MutationObserver` |
| SFX su toast show/dismiss senza `play()` manuale | 📋 | Collegare `arcToast` → `dispatchArcadeSound` o attributi su container |

**Contratto attuale (estratto):** `data-arc-sound-click`, `-hover`, `-pointerdown`, `-focus`, `-success`, `-error` — vedi [README § Audio](../README.md#-audio--audiomanager).

---

## Animazioni / glitch

| Voce | Stato | Issue / note |
|------|-------|----------------|
| `data-arc-glitch-intensity` (CSS burst) | ✅ | CSS + tipi React `low \| medium \| high` |
| `initGlitch` popola `data-text` | ✅ | Idempotente; parte di `bindGlitch` |
| Auto-init `bindGlitch` a `DOMContentLoaded` | ✅ | [#118](https://github.com/davidememoli03/Arcade-UI/issues/118) — `scheduleGlitchAutoBinding` da `index.js` |
| `bindGlitch(root)` per markup SPA dinamico | ✅ | [#118](https://github.com/davidememoli03/Arcade-UI/issues/118) + `MutationObserver` |
| `data-arc-glitch-duration` per burst `triggerGlitch` | ✅ | [#118](https://github.com/davidememoli03/Arcade-UI/issues/118) — `data-arc-glitch-burst` click/hover |
| Storybook glitch senza `initGlitch()` nel render | ✅ | Hook `play` → `bindGlitch`; story *Declarative burst* |

`triggerGlitch(el, ms)` resta disponibile per burst imperativi custom.

---

## Stato UI (selected / disabled / ARIA)

| Voce | Stato | Issue / note |
|------|-------|----------------|
| Classi stato (es. `arc-card-selected`, `arc-toggle` disabled) | ✅ | CSS + README per componente |
| Tabella ARIA per componente (role, `aria-*`, keyboard) | ✅ | [#119](https://github.com/davidememoli03/Arcade-UI/issues/119) — [`docs/ACCESSIBILITY.md`](./ACCESSIBILITY.md) |
| Pattern `aria-selected` / `aria-disabled` documentati (card, tab, dropdown) | ✅ | [#119](https://github.com/davidememoli03/Arcade-UI/issues/119) |
| Storybook: note ARIA su modal, tabs, dropdown | ✅ | [#119](https://github.com/davidememoli03/Arcade-UI/issues/119) |

---

## Framework (Angular / React)

| Voce | Stato | Issue / note |
|------|-------|----------------|
| Entry `@davide03memoli/arcade-ui/react` (augmentation JSX) | ✅ | [#105](https://github.com/davidememoli03/Arcade-UI/issues/105), smoke `smoke:react-jsx` |
| Docs React (Vite, CSS, `initGlitch`) | ✅ | [#106](https://github.com/davidememoli03/Arcade-UI/issues/106) |
| Entry `@davide03memoli/arcade-ui/angular` (directive + service) | ✅ | [#107](https://github.com/davidememoli03/Arcade-UI/issues/107) |
| Docs Angular (`docs/angular-consumer.md`) | ✅ | [#108](https://github.com/davidememoli03/Arcade-UI/issues/108) |
| Parity attributi audio in augmentation React | ✅ | `data-arc-sound-*` in `arcade-ui-react.d.ts` |
| Input Angular per `data-arc-sound-*` (wrapper template) | 📋 | [#120](https://github.com/davidememoli03/Arcade-UI/issues/120) |
| Smoke / esempio Angular per suoni dichiarativi | 📋 | [#120](https://github.com/davidememoli03/Arcade-UI/issues/120) |

---

## Altri binding automatici (riferimento)

Già presenti a `DOMContentLoaded` (vanilla):

| Modulo | API |
|--------|-----|
| Audio | `bindArcadeSounds` (via `AudioManager`) |
| Modal | `bindModalTriggers` |
| Tabs | `bindTabs` |
| Slider | `bindSliders` |
| Display 7-seg | `bindArcDisplays` |
| Glitch | `bindGlitch` (lazy + observer) |

---

## Come contribuire

1. Apri o commenta su [#115](https://github.com/davidememoli03/Arcade-UI/issues/115) con la proposta.
2. Crea una **issue figlia** con acceptance criteria chiari (o usa le issue 📋 sopra).
3. Aggiorna questa pagina e la checklist in #115 quando la voce viene chiusa.
