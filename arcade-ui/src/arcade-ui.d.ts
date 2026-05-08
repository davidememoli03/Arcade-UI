export declare const version: string

// ─── Color themes (CSS only) ─────────────────────────────────────────────────
//
// Import side-effect stylesheets from published package, poi applica la classe sul documento:
//   import '@davide03memoli/arcade-ui/themes/phosphor-green'
//   document.documentElement.classList.add('arc-theme-phosphor')
//
// File → classe attesa:
//   phosphor-green.css   → .arc-theme-phosphor
//   amber-crt.css        → .arc-theme-amber-crt
//   magenta-wave.css     → .arc-theme-magenta-wave
//   ice-blue.css         → .arc-theme-ice-blue
//
// Nessun export JS: solo CSS. Sottopercorsi documentati in package.json "exports".

// ─── Glitch ──────────────────────────────────────────────────────────────────

export declare function initGlitch(root?: Document | Element): void
export declare function triggerGlitch(el: Element, duration?: number): void
export declare const glitch: {
  initGlitch: typeof initGlitch
  triggerGlitch: typeof triggerGlitch
}

// ─── AudioManager ─────────────────────────────────────────────────────────────

/**
 * Singleton per la riproduzione di SFX arcade.
 *
 * I suoni built-in ('coin','select','blip','error','win','gameover') sono sintetizzati
 * via Web Audio API: funzionano senza file mp3 né dipendenze esterne.
 *
 * Per suoni custom usa `register(id, src)` — richiede Howler.js come peer dep opzionale.
 *
 * @example
 * import { AudioManager } from '@davide03memoli/arcade-ui'
 * const audio = AudioManager.getInstance()
 * audio.play('coin').setVolume(0.5)
 */
export declare class AudioManager {
  /** Restituisce l'istanza singleton. */
  static getInstance(): AudioManager

  /**
   * ID SFX built-in: 'coin' | 'select' | 'blip' | 'error' | 'win' | 'gameover'
   * Tutti sintetizzati via Web Audio API, nessun file necessario.
   */
  static readonly SFX: string[]

  /**
   * Riproduce un suono built-in per ID o un suono custom registrato.
   * Se l'utente non ha ancora interagito, il suono viene accodato.
   */
  play(idOrSrc: string): this

  /**
   * Imposta il volume (0–1) e lo persiste in sessionStorage.
   */
  setVolume(value: number): this

  /** Restituisce il volume corrente (0–1). */
  getVolume(): number

  /** Silenzia l'audio e persiste lo stato. */
  mute(): this

  /** Riattiva l'audio al volume corrente e persiste lo stato. */
  unmute(): this

  /** Indica se l'audio è silenziato. */
  isMuted(): boolean

  /**
   * Registra un suono custom da file audio rendendolo disponibile via play(id).
   * Richiede Howler.js; se non disponibile la registrazione viene ignorata silenziosamente.
   */
  register(id: string, src: string): this

  /**
   * Applica il binding audio su elementi .arc-btn aggiunti dinamicamente.
   */
  bindButtons(root?: Document | Element): this
}

// ─── Dropdown (arc-dropdown) ─────────────────────────────────────────────────
//
// CSS-only component — no JS exports needed.
// Toggle open/closed by setting aria-expanded="true" on .arc-dropdown-trigger.
//
// Variants: arc-dropdown-cyan | arc-dropdown-green | arc-dropdown-red |
//           arc-dropdown-yellow | arc-dropdown-purple
//
// See arcade-ui/README.md for full HTML structure.

// ─── Modal (arc-modal) ───────────────────────────────────────────────────────
//
// Variants:   arc-modal-cyan | arc-modal-green | arc-modal-yellow |
//             arc-modal-red  | arc-modal-purple
//
// Open state: add class `arc-modal-backdrop-open` to .arc-modal-backdrop,
//             or call arcModal.open(id).
//
// HTML structure:
//   <div class="arc-modal-backdrop" id="my-modal" aria-hidden="true">
//     <div class="arc-modal arc-modal-cyan" role="dialog" aria-modal="true"
//          aria-labelledby="my-modal-title">
//       <div class="arc-modal-header">
//         <span id="my-modal-title" class="arc-modal-title">TITLE</span>
//         <button class="arc-modal-close" aria-label="Close">[X]</button>
//       </div>
//       <div class="arc-modal-body">Content here.</div>
//       <div class="arc-modal-footer"><!-- optional --></div>
//     </div>
//   </div>

export declare const arcModal: {
  /**
   * Opens the modal backdrop by ID or element reference.
   * Traps focus inside the dialog and binds ESC + backdrop-click to close.
   * @param target - backdrop element or its id attribute
   * @param options.trigger - element that triggered the open; receives focus on close
   */
  open(target: string | Element, options?: { trigger?: Element }): void

  /**
   * Closes the modal backdrop by ID or element reference.
   * Removes focus trap and restores focus to the trigger element.
   * @param target - backdrop element or its id attribute
   */
  close(target: string | Element): void

  /**
   * Binds `[data-arc-modal-open="id"]` triggers and `.arc-modal-close` buttons
   * found inside `root`. Called automatically at DOMContentLoaded.
   */
  bindModalTriggers(root?: Document | Element): void
}

// ─── Tooltip ────────────────────────────────────────────────────────────────
//
// CSS-only component — no JS exports needed.
// Add the data-tooltip attribute to any element:
//   <button data-tooltip="Save changes">SAVE</button>
//
// Positions (add as class to the host element):
//   arc-tooltip-top    (default — no class required)
//   arc-tooltip-bottom
//   arc-tooltip-left
//   arc-tooltip-right
//
// Accessibility note: data-tooltip content is NOT read by screen readers.
// Always pair with aria-label or aria-describedby carrying the same text.
//
// See arcade-ui/README.md for full usage examples.

// ─── Progress bar (arc-progress) ────────────────────────────────────────────
//
// CSS-only component — no JS exports needed.
// Control fill amount via the --arc-progress custom property:
//   <div class="arc-progress" style="--arc-progress: 75%">
//     <div class="arc-progress-bar"></div>
//   </div>
//
// Variants: arc-progress-cyan | arc-progress-green | arc-progress-yellow |
//           arc-progress-red  | arc-progress-purple
//
// Indeterminate: arc-progress-indeterminate  (looping sweep animation)
//
// Size:     arc-progress-sm (12px) | default (24px) | arc-progress-lg (40px)
//
// Wrapper:  arc-progress-wrapper + arc-progress-label for label support.
//           Place the variant class on .arc-progress-wrapper to propagate
//           the accent colour to the label via CSS inheritance.
//
// Update fill from JS:
//   el.style.setProperty('--arc-progress', '60%')
//   el.setAttribute('aria-valuenow', '60')
//
// See arcade-ui/README.md for full HTML structure.

// ─── Table (arc-table) ────────────────────────────────────────────────────────
//
// CSS-only component — no JS exports needed.
// Ottimizzato per leaderboard e statistiche di gioco.
//
// Struttura HTML:
//   <div class="arc-table-wrapper arc-table-cyan">
//     <table class="arc-table arc-table-leaderboard">
//       <caption>HIGH SCORES</caption>
//       <thead>
//         <tr>
//           <th class="arc-table-th arc-table-th-rank">#</th>
//           <th class="arc-table-th">PLAYER</th>
//           <th class="arc-table-th arc-table-th-num">SCORE</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr class="arc-table-row">
//           <td class="arc-table-td arc-table-td-rank">
//             <span class="arc-table-rank-num">01</span>
//             <span class="arc-table-rank-icon" aria-hidden="true">🏆</span>
//           </td>
//           <td class="arc-table-td">ACE</td>
//           <td class="arc-table-td arc-table-td-num">999,999</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
//
// Varianti colore (su .arc-table-wrapper):
//   arc-table-cyan | arc-table-green | arc-table-yellow | arc-table-red | arc-table-purple
//
// Modificatori (su .arc-table):
//   arc-table-leaderboard   Prima riga gold pulsante, rank column stilizzata
//   arc-table-compact       Padding ridotto per densità
//
// Varianti riga:
//   arc-table-row-gold    Riga dorata con glow pulsante (rank manuale)
//   arc-table-row-active  Testo accent color
//   arc-table-row-muted   Opacità ridotta (fuori classifica)
//
// Note: le classi variante colore si applicano a .arc-table-wrapper;
// le CSS custom property (--table-accent, --table-glow) sono ereditate
// da tutte le celle figlie.

// ─── Animazioni CRT / cabinato (.arc-anim-*) ─────────────────────────────────
//
// Keyframe: src/tokens/animation.css  ·  Utility: src/components/animations.css (@layer arcade-animations)
//
// Classi:
//   arc-anim-flicker | arc-anim-blink-cursor | arc-anim-insert-coin |
//   arc-anim-scanline-move | arc-anim-static-noise | arc-anim-power-on | arc-anim-power-off
//
// Variabili (defaults su :root nel layer):
//   --arc-flicker-speed | --arc-flicker-intensity | --arc-blink-cursor-speed |
//   --arc-insert-coin-duration | --arc-insert-coin-dim | --arc-scanline-duration |
//   --arc-scanline-opacity | --arc-static-noise-duration | --arc-static-noise-opacity-min/max |
//   --arc-static-noise-filter | --arc-power-on-duration | --arc-power-off-duration
//
// Glow / step utilities (separate file): .arc-u-blink · .arc-u-pulse · .arc-u-glitch in glow.css
//
// See README section "Animazioni arcade (CRT / cabinato)".

// ─── Pixel border (8-bit utilities) ─────────────────────────────────────────
//
// CSS-only — @layer arcade-pixel-border in src/components/pixel-border.css
//
// Classi:
//   arc-border-pixel | arc-border-pixel-thick | arc-border-pixel-inset |
//   arc-border-pixel-chamfer | arc-border-pixel-glow (combinare con una base)
//
// Variabili:
//   --arc-border-color      (default --arc-color-cyan)
//   --arc-border-pixel-bg   (default --arc-color-bg-panel)
//
// Token mixin su :root: --arc-border-pixel-step … --arc-border-pixel-step8

// ─── Toast / Notification (arc-toast) ────────────────────────────────────────
//
// Notifiche arcade-style che imitano i messaggi di sistema ("PLAYER 1 READY",
// "GAME OVER", "NEW HIGH SCORE"). I container sono creati automaticamente.
//
// Tipi:     'info' (cyan) | 'success' (green) | 'warning' (yellow) | 'error' (red)
// Posizioni: 'bottom-right' (default) | 'bottom-left' | 'bottom-center' |
//            'top-right'              | 'top-left'    | 'top-center'
//
// Uso base:
//   arcToast.show({ message: 'PLAYER 1 READY' })
//   arcToast.show({ message: 'NEW HIGH SCORE', type: 'success', duration: 5000 })
//   arcToast.show({ message: 'GAME OVER', type: 'error', duration: 0 }) // persistente
//
//   const id = arcToast.show({ message: 'SAVING...', duration: 0 })
//   arcToast.dismiss(id)   // chiusura programmatica
//   arcToast.dismissAll()  // chiude tutti i toast visibili

export declare const arcToast: {
  /**
   * Mostra una notifica arcade-style.
   *
   * @param options.message   - Testo da visualizzare
   * @param options.type      - Tipo: 'info' | 'success' | 'warning' | 'error' (default: 'info')
   * @param options.duration  - Durata in ms prima dell'auto-dismiss; 0 = persistente (default: 3000)
   * @param options.position  - Posizione sullo schermo (default: 'bottom-right')
   * @returns id del toast, usabile con arcToast.dismiss(id)
   */
  show(options: {
    message:   string
    type?:     'info' | 'success' | 'warning' | 'error'
    duration?: number
    position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'
  }): number

  /**
   * Chiude programmaticamente un toast per id.
   * @param id - id restituito da arcToast.show()
   */
  dismiss(id: number): void

  /**
   * Chiude tutti i toast visibili.
   */
  dismissAll(): void
}

// ─── Button sounds ────────────────────────────────────────────────────────────

/**
 * Collega i suoni built-in agli elementi con data-arc-sound-hover /
 * data-arc-sound-click trovati in `root`.
 * Chiamato automaticamente da AudioManager al DOMContentLoaded.
 */
export declare function bindButtonSounds(root?: Document | Element): void
