// src/audio/AudioManager.js
// Singleton per SFX arcade. I suoni built-in sono sintetizzati via Web Audio API
// (nessun file esterno). Howler.js è opzionale e usato solo per suoni custom (register).

const STORAGE_VOLUME = 'arc-audio-volume'
const STORAGE_MUTED  = 'arc-audio-muted'

import {
  bindArcadeSoundsInRoot,
  hasArcadeSoundTargets,
} from './sound-bindings.js'

// ─── Web Audio synth ──────────────────────────────────────────────────────────

/**
 * Genera un tono singolo nello slot temporale `t`.
 * @param {AudioContext} ctx
 * @param {number} freq   - Frequenza in Hz
 * @param {number} t      - Tempo di inizio (ctx.currentTime + offset)
 * @param {number} dur    - Durata in secondi
 * @param {number} vol    - Ampiezza 0–1
 * @param {OscillatorType} [type]
 */
function note(ctx, freq, t, dur, vol, type = 'square') {
  const osc  = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.type = type
  osc.frequency.setValueAtTime(freq, t)
  gain.gain.setValueAtTime(vol, t)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  osc.start(t)
  osc.stop(t + dur + 0.01)
}

/**
 * Genera uno sweep di frequenza da `f0` a `f1`.
 */
function sweep(ctx, f0, f1, t, dur, vol, type = 'square') {
  const osc  = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.type = type
  osc.frequency.setValueAtTime(f0, t)
  osc.frequency.exponentialRampToValueAtTime(f1, t + dur)
  gain.gain.setValueAtTime(vol, t)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  osc.start(t)
  osc.stop(t + dur + 0.01)
}

/**
 * Mappa ID → funzione sintetizzatrice.
 * Tutti i suoni built-in sono generati via Web Audio API senza file esterni.
 *
 * @type {Record<string, (ctx: AudioContext, volume: number) => void>}
 */
const SYNTH_SFX = {
  /** Classico "bling" a due toni — apertura dialog */
  coin: (ctx, v) => {
    const t = ctx.currentTime
    note(ctx, 987,  t,        0.08, v * 0.4)
    note(ctx, 1319, t + 0.08, 0.12, v * 0.4)
  },

  /** Sweep ascendente — conferma / click btn-primary */
  select: (ctx, v) => {
    sweep(ctx, 660, 880, ctx.currentTime, 0.08, v * 0.35)
  },

  /** Breve bip — hover navigazione */
  blip: (ctx, v) => {
    note(ctx, 1200, ctx.currentTime, 0.04, v * 0.22)
  },

  /** Buzz discendente — validazione fallita */
  error: (ctx, v) => {
    sweep(ctx, 440, 110, ctx.currentTime, 0.3, v * 0.3, 'sawtooth')
  },

  /** Arpeggio C maggiore ascendente — completamento */
  win: (ctx, v) => {
    const t = ctx.currentTime
    ;[523, 659, 784, 1047].forEach((f, i) => note(ctx, f, t + i * 0.08, 0.10, v * 0.35))
  },

  /** Sequenza discendente — game over */
  gameover: (ctx, v) => {
    const t = ctx.currentTime
    ;[440, 370, 311, 261].forEach((f, i) => note(ctx, f, t + i * 0.13, 0.15, v * 0.30))
  },
}

// ─── AudioManager ─────────────────────────────────────────────────────────────

/**
 * AudioManager — singleton per la riproduzione di SFX arcade.
 *
 * I suoni built-in ('coin','select','blip','error','win','gameover') sono sintetizzati
 * via Web Audio API: funzionano senza file mp3 né dipendenze esterne.
 *
 * Per suoni custom usa `register(id, src)` — richiede Howler.js come peer dep opzionale.
 *
 * @example
 * import { AudioManager } from '@davide03memoli/arcade-ui'
 * const audio = AudioManager.getInstance()
 * audio.play('coin')
 * audio.setVolume(0.5)
 * audio.mute()
 */
class AudioManager {
  /** @type {AudioManager|null} */
  static #instance = null

  /** @type {AudioContext|null} contesto Web Audio (lazy, dopo prima interazione) */
  #ctx = null
  /** @type {Function|null} costruttore Howl (solo per suoni custom) */
  #Howl = null
  /** @type {Map<string, object>} id → istanza Howl per suoni custom */
  #sounds = new Map()
  /** @type {Array<{id:string, src:string}>} registrazioni in attesa di Howler */
  #pendingRegister = []
  /** @type {number} 0–1 */
  #volume = 0.5
  /** @type {boolean} */
  #muted = false
  /** @type {boolean} true dopo la prima interazione utente */
  #activated = false
  /** @type {string[]} ID/URL in attesa di attivazione */
  #pendingPlay = []
  /** @type {boolean} true quando l'istanza è stata sostituita (solo test) */
  #destroyed = false
  /** @type {WeakSet<Element>} elementi già collegati — evita doppio binding */
  #boundElements = new WeakSet()
  /** @type {MutationObserver|null} osserva nodi con hook audio (lazy bind SPA) */
  #bindObserver = null
  /** @type {boolean} */
  #lazyBindStarted = false

  constructor() {
    this.#readStorage()
    this.#initHowler()
    this.#setupActivationGate()
    this.#scheduleLazyAutoBinding()
  }

  /**
   * Restituisce l'istanza singleton (la crea se necessario).
   * @returns {AudioManager}
   */
  static getInstance() {
    if (!AudioManager.#instance) {
      AudioManager.#instance = new AudioManager()
    }
    return AudioManager.#instance
  }

  // ─── Persistenza sessionStorage ─────────────────────────────────────────────

  #readStorage() {
    try {
      const vol   = sessionStorage.getItem(STORAGE_VOLUME)
      const muted = sessionStorage.getItem(STORAGE_MUTED)
      if (vol !== null)   this.#volume = Math.max(0, Math.min(1, parseFloat(vol)))
      if (muted !== null) this.#muted  = muted === 'true'
    } catch { /* sessionStorage non disponibile */ }
  }

  #writeStorage() {
    try {
      sessionStorage.setItem(STORAGE_VOLUME, String(this.#volume))
      sessionStorage.setItem(STORAGE_MUTED,  String(this.#muted))
    } catch { /* noop */ }
  }

  // ─── Web Audio Context ───────────────────────────────────────────────────────

  #getCtx() {
    if (typeof AudioContext === 'undefined') return null
    if (!this.#ctx) {
      this.#ctx = new AudioContext()
    }
    if (this.#ctx.state === 'suspended') {
      this.#ctx.resume().catch(() => {})
    }
    return this.#ctx
  }

  // ─── Howler (solo suoni custom via register) ─────────────────────────────────

  async #initHowler() {
    try {
      const mod  = await import('howler')
      this.#Howl = mod.Howl ?? mod.default?.Howl ?? null
    } catch {
      if (typeof window !== 'undefined' && typeof window.Howl === 'function') {
        this.#Howl = window.Howl
      }
    }

    if (this.#Howl) {
      this.#pendingRegister.splice(0).forEach(({ id, src }) => this.register(id, src))
    }
  }

  // ─── Autoplay policy gate ────────────────────────────────────────────────────

  #setupActivationGate() {
    if (typeof document === 'undefined') return

    const activate = () => this.activate()

    ;['click', 'keydown', 'touchstart'].forEach(type => {
      document.addEventListener(type, activate, { once: true, capture: true })
    })
  }

  // ─── Lazy auto-binding (solo subtree con hook / .arc-btn) ───────────────────

  /**
   * Collega listener solo se `root` contiene hook audio o `.arc-btn` (nessuna scansione globale inutile).
   * @param {Document|Element} root
   */
  #scanAndBindIfNeeded(root = document) {
    if (this.#destroyed || !hasArcadeSoundTargets(root)) return
    this.#bindSounds(root)
  }

  #scheduleLazyAutoBinding() {
    if (typeof document === 'undefined') return

    const start = () => {
      if (this.#lazyBindStarted) return
      this.#lazyBindStarted = true
      this.#scanAndBindIfNeeded(document)

      if (typeof MutationObserver === 'undefined') return

      this.#bindObserver = new MutationObserver((records) => {
        for (const record of records) {
          for (const node of record.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.#scanAndBindIfNeeded(/** @type {Element} */ (node))
            }
          }
        }
      })

      this.#bindObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
      })
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start, { once: true })
    } else {
      start()
    }
  }

  /**
   * `@media (prefers-reduced-motion: reduce)` — sopprime solo feedback leggeri (hover `blip`).
   * Usa `mute()` per silenziare tutto; non legge il mute di sistema (non esposto dal browser).
   */
  #shouldSuppressReducedMotionFeedback(idOrSrc) {
    if (idOrSrc !== 'blip') return false
    if (typeof matchMedia === 'undefined') return false
    try {
      return matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch {
      return false
    }
  }

  /**
   * @param {Document|Element} root
   */
  #bindSounds(root = document) {
    bindArcadeSoundsInRoot(
      (id) => this.play(id),
      root,
      this.#boundElements,
    )
  }

  // ─── API pubblica ────────────────────────────────────────────────────────────

  /**
   * Riproduce un suono built-in per ID o un suono custom registrato.
   * Se l'utente non ha ancora interagito, il suono viene accodato.
   *
   * ID built-in: 'coin' | 'select' | 'blip' | 'error' | 'win' | 'gameover'
   *
   * @param {string} idOrSrc
   * @returns {this}
   */
  /**
   * Sblocca l'audio dopo un gesto utente (o chiamata esplicita). Ripete la coda `play()` pendente.
   * @returns {this}
   */
  activate() {
    if (this.#destroyed || this.#activated) return this
    this.#activated = true
    const ctx = this.#getCtx()
    if (ctx?.state === 'suspended') {
      ctx.resume().catch(() => {})
    }
    const queue = this.#pendingPlay.splice(0)
    queue.forEach((id) => this.play(id))
    return this
  }

  /**
   * `true` dopo il primo gesto utente (click / keydown / touchstart) o `activate()`.
   * @returns {boolean}
   */
  isActivated() {
    return this.#activated
  }

  play(idOrSrc) {
    if (this.#destroyed) return this
    if (!this.#activated) {
      this.#pendingPlay.push(idOrSrc)
      return this
    }
    if (this.#muted) return this
    if (this.#shouldSuppressReducedMotionFeedback(idOrSrc)) return this

    if (SYNTH_SFX[idOrSrc]) {
      const ctx = this.#getCtx()
      if (ctx) SYNTH_SFX[idOrSrc](ctx, this.#volume)
    } else if (this.#sounds.has(idOrSrc)) {
      this.#sounds.get(idOrSrc).play()
    } else if (this.#Howl) {
      // URL diretto: crea istanza Howl on-demand
      this.#sounds.set(idOrSrc, new this.#Howl({
        src:     [idOrSrc],
        volume:  this.#volume,
        preload: true,
      }))
      this.#sounds.get(idOrSrc).play()
    }

    return this
  }

  /**
   * Imposta il volume (0–1) e lo persiste in sessionStorage.
   * @param {number} value
   * @returns {this}
   */
  setVolume(value) {
    this.#volume = Math.max(0, Math.min(1, value))
    this.#writeStorage()
    if (!this.#muted) {
      this.#sounds.forEach(s => s.volume(this.#volume))
    }
    return this
  }

  /** @returns {number} volume corrente (0–1) */
  getVolume() {
    return this.#volume
  }

  /**
   * Silenzia l'audio e persiste lo stato.
   * I suoni built-in (synth) vengono soppressi al prossimo play().
   * @returns {this}
   */
  mute() {
    this.#muted = true
    this.#writeStorage()
    this.#sounds.forEach(s => s.volume(0))
    return this
  }

  /**
   * Riattiva l'audio al volume corrente e persiste lo stato.
   * @returns {this}
   */
  unmute() {
    this.#muted = false
    this.#writeStorage()
    this.#sounds.forEach(s => s.volume(this.#volume))
    return this
  }

  /** @returns {boolean} */
  isMuted() {
    return this.#muted
  }

  /**
   * Registra un suono custom (file audio) rendendolo disponibile via play(id).
   * Richiede Howler.js; se non ancora caricato, la registrazione è accodata.
   *
   * @param {string} id  - Identificatore univoco
   * @param {string} src - URL del file audio
   * @returns {this}
   */
  register(id, src) {
    if (this.#Howl) {
      if (!this.#sounds.has(id)) {
        this.#sounds.set(id, new this.#Howl({
          src:     [src],
          volume:  this.#muted ? 0 : this.#volume,
          preload: true,
        }))
      }
    } else {
      this.#pendingRegister.push({ id, src })
    }
    return this
  }

  /**
   * Collega attributi `data-arc-sound-*` e default `.arc-btn` nel subtree.
   * Chiamato automaticamente a `DOMContentLoaded`; richiamare su contenuto SPA dinamico.
   *
   * @param {Document|Element} root
   * @returns {this}
   */
  bindArcadeSounds(root = document) {
    this.#bindSounds(root)
    return this
  }

  /**
   * Alias di {@link bindArcadeSounds} — mantiene compatibilità con API esistente.
   * @param {Document|Element} root
   * @returns {this}
   */
  bindButtons(root = document) {
    return this.bindArcadeSounds(root)
  }

  /** Lista degli ID SFX built-in. */
  static get SFX() {
    return Object.keys(SYNTH_SFX)
  }

  /**
   * @internal Solo per i test — reimposta il singleton e disattiva l'istanza corrente.
   */
  static _resetForTest() {
    if (AudioManager.#instance) {
      AudioManager.#instance.#bindObserver?.disconnect()
      AudioManager.#instance.#destroyed = true
    }
    AudioManager.#instance = null
  }
}

export { AudioManager }
