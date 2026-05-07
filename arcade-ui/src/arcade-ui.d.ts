export declare const version: string

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

// ─── Button sounds ────────────────────────────────────────────────────────────

/**
 * Collega i suoni built-in agli elementi con data-arc-sound-hover /
 * data-arc-sound-click trovati in `root`.
 * Chiamato automaticamente da AudioManager al DOMContentLoaded.
 */
export declare function bindButtonSounds(root?: Document | Element): void
