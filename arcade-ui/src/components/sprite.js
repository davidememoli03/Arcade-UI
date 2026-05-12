// src/components/sprite.js
// Controllo opzionale per .arc-sprite: play/pause, FPS, frame (griglia multi-riga via timer).

/**
 * @param {string} raw
 * @returns {number}
 */
function pxToNumber(raw) {
  const m = String(raw).trim().match(/^(-?[\d.]+)px$/i)
  return m ? Number.parseFloat(m[1]) : Number.NaN
}

/**
 * @param {CSSStyleDeclaration} cs
 * @param {string} name
 * @returns {number}
 */
function readNumber(cs, name) {
  const v = cs.getPropertyValue(name).trim()
  const n = Number.parseFloat(v)
  return Number.isFinite(n) ? n : 0
}

/**
 * @returns {boolean}
 */
function isReducedMotion() {
  if (typeof globalThis.matchMedia !== 'function') return false
  return globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** @type {WeakMap<HTMLElement, ArcSpriteController>} */
const _arcSpriteControllers = new WeakMap()

class ArcSpriteController {
  /**
   * @param {HTMLElement} el
   */
  constructor(el) {
    this.el = el
    /** @type {ReturnType<typeof setInterval> | null} */
    this._tick = null
    this._frame = 0
    this._opts = this._readOpts()

    const rows = this._opts.rows
    if (rows > 1) {
      this.el.classList.add('arc-sprite-grid')
    }

    if (rows > 1) {
      this._applyFrame(0)
      if (!isReducedMotion()) this._startGridTimer()
    }
  }

  _readOpts() {
    const cs = globalThis.getComputedStyle(this.el)
    const fw = pxToNumber(cs.getPropertyValue('--arc-sprite-width')) || 32
    const fh = pxToNumber(cs.getPropertyValue('--arc-sprite-height')) || 32
    const frames = Math.max(1, Math.round(readNumber(cs, '--arc-sprite-frames')))
    const rows = Math.max(1, Math.round(readNumber(cs, '--arc-sprite-rows')))
    let cols = Math.round(readNumber(cs, '--arc-sprite-cols'))
    if (!Number.isFinite(cols) || cols < 1) {
      cols = Math.max(1, Math.round(frames / rows))
    }
    const scale = readNumber(cs, '--arc-sprite-scale') || 1
    const fps = Math.max(0.1, readNumber(cs, '--arc-sprite-fps') || 8)

    return { fw, fh, frames, rows, cols, scale, fps }
  }

  _applyFrame(index) {
    const { fw, fh, cols, scale, frames } = this._opts
    const i = ((index % frames) + frames) % frames
    const col = i % cols
    const row = Math.floor(i / cols)
    const x = -col * fw * scale
    const y = -row * fh * scale
    this.el.style.backgroundPosition = `${x}px ${y}px`
  }

  _startGridTimer() {
    this._stopGridTimer()
    const ms = 1000 / this._opts.fps
    this._tick = globalThis.setInterval(() => {
      if (this.el.classList.contains('arc-sprite-paused')) return
      this._frame = (this._frame + 1) % this._opts.frames
      this._applyFrame(this._frame)
    }, ms)
  }

  _stopGridTimer() {
    if (this._tick != null) {
      globalThis.clearInterval(this._tick)
      this._tick = null
    }
  }

  /** @returns {this} */
  play() {
    this.el.classList.remove('arc-sprite-paused')
    this._opts = this._readOpts()

    if (this.el.classList.contains('arc-sprite-grid')) {
      if (!isReducedMotion()) this._startGridTimer()
    }

    return this
  }

  /** @returns {this} */
  pause() {
    this.el.classList.add('arc-sprite-paused')
    this._stopGridTimer()
    return this
  }

  /**
   * @param {number} fps
   * @returns {this}
   */
  setFps(fps) {
    const v = Math.max(0.1, Number(fps) || 8)
    this.el.style.setProperty('--arc-sprite-fps', String(v))
    this._opts = this._readOpts()
    if (this.el.classList.contains('arc-sprite-grid') && !this.el.classList.contains('arc-sprite-paused')) {
      this._startGridTimer()
    }
    return this
  }

  /**
   * @param {number} index
   * @returns {this}
   */
  setFrame(index) {
    this._opts = this._readOpts()
    this._frame = Math.trunc(Number(index)) || 0

    if (!this.el.classList.contains('arc-sprite-grid')) {
      this.el.classList.add('arc-sprite-paused')
    }

    this._applyFrame(this._frame)
    return this
  }
}

/**
 * @param {string | HTMLElement} selectorOrEl
 * @returns {ArcSpriteController | null}
 */
export function arcSpriteInit(selectorOrEl) {
  const el =
    typeof selectorOrEl === 'string'
      ? document.querySelector(selectorOrEl)
      : selectorOrEl

  if (!(el instanceof HTMLElement)) return null
  if (!el.classList.contains('arc-sprite')) el.classList.add('arc-sprite')

  const existing = _arcSpriteControllers.get(el)
  if (existing) return existing

  const created = new ArcSpriteController(el)
  _arcSpriteControllers.set(el, created)
  return created
}

export const arcSprite = {
  init: arcSpriteInit,
}
