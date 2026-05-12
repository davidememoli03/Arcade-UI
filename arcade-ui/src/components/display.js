// src/components/display.js
// Display 7 segmenti: aggiornamento valore con flash cifre + countdown.

/**
 * @param {HTMLElement} container - Elemento .arc-display
 * @returns {HTMLSpanElement}
 */
function ensureDisplayBody(container) {
  let body = container.querySelector('.arc-display-body')
  if (!body) {
    body = document.createElement('span')
    body.className = 'arc-display-body'
    container.appendChild(body)
  }
  return body
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function sanitizeDisplayString(str) {
  return [...String(str)].filter((c) => /[0-9:]/.test(c))
}

/**
 * Estrae solo le cifre (ordine di comparsa nel display).
 * @param {string} str
 * @returns {string[]}
 */
function digitCharsInOrder(str) {
  return sanitizeDisplayString(str).filter((c) => c !== ':')
}

/**
 * @param {boolean} [reducedMotion]
 * @returns {boolean}
 */
function isReducedMotion(reducedMotion) {
  if (typeof reducedMotion === 'boolean') return reducedMotion
  if (typeof globalThis.matchMedia !== 'function') return false
  return globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Aggiorna il testo del display 7 segmenti. Crea `.arc-display-body` se assente.
 * Confronta le cifre con il render precedente e applica flash sulle posizioni cambiate.
 *
 * @param {HTMLElement} container - Host `.arc-display`
 * @param {string|number} value - Numero o stringa con cifre e al più `:` (timer)
 * @param {object} [options]
 * @param {number} [options.pad] - Zero-fill per numeri (ignorato se `value` contiene `:`)
 * @param {boolean} [options.flash] - Se false, non animare (default true)
 * @param {boolean} [options.reducedMotion] - Override prefers-reduced-motion
 * @param {string} [options.ariaLabel] - Etichetta annunciata (default: valore umano)
 */
export function setArcDisplayValue(container, value, options = {}) {
  if (!(container instanceof HTMLElement)) return

  let str = typeof value === 'number' ? String(Math.trunc(Math.max(0, value))) : String(value)
  if (options.pad != null && typeof options.pad === 'number' && !str.includes(':')) {
    const n = Number.parseInt(str, 10)
    const safe = Number.isFinite(n) ? Math.max(0, n) : 0
    str = String(safe).padStart(options.pad, '0')
  }

  const charsRaw = sanitizeDisplayString(str)
  const chars = charsRaw.length > 0 ? charsRaw : ['0']
  const body = ensureDisplayBody(container)
  const prevDigits = digitCharsInOrder(body.dataset.arcPrevDigits || '')
  const nextDigits = chars.filter((c) => c !== ':')

  const shouldFlash = options.flash !== false && !isReducedMotion(options.reducedMotion)

  body.textContent = ''
  const frag = document.createDocumentFragment()
  let digitIndex = 0

  for (const c of chars) {
    if (c === ':') {
      const sep = document.createElement('span')
      sep.className = 'arc-display-sep'
      sep.textContent = ':'
      frag.appendChild(sep)
    } else {
      const span = document.createElement('span')
      span.className = 'arc-display-digit'
      span.textContent = c
      if (
        shouldFlash
        && prevDigits.length > 0
        && prevDigits[digitIndex] !== undefined
        && prevDigits[digitIndex] !== c
      ) {
        span.classList.add('arc-display-digit-flash')
        span.addEventListener(
          'animationend',
          () => span.classList.remove('arc-display-digit-flash'),
          { once: true },
        )
      }
      frag.appendChild(span)
      digitIndex += 1
    }
  }

  body.appendChild(frag)
  body.dataset.arcPrevDigits = nextDigits.join('')

  const human = chars.join('') || '0'
  container.setAttribute('aria-label', options.ariaLabel ?? human)
}

/**
 * Countdown MM:SS (o 00:SS se sotto 1 minuto resta comunque MM:SS).
 *
 * @param {HTMLElement} container - `.arc-display.arc-display-timer` consigliato
 * @param {object} options
 * @param {number} options.seconds - Secondi iniziali (>= 0)
 * @param {(remaining: number) => void} [options.onTick]
 * @param {() => void} [options.onEnd]
 * @param {object} [options.display] - Opzioni passate a `setArcDisplayValue`
 * @returns {{ stop: () => void, getRemaining: () => number }}
 */
export function arcCountdown(container, options) {
  const sec = Math.max(0, Math.floor(Number(options?.seconds ?? 0)))
  let remaining = sec
  let id = null

  function format(r) {
    const m = Math.floor(r / 60)
    const s = r % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  function paint() {
    setArcDisplayValue(container, format(remaining), {
      ...options.display,
      ariaLabel: `Time remaining ${format(remaining)}`,
    })
    options.onTick?.(remaining)
  }

  paint()

  if (remaining <= 0) {
    options.onEnd?.()
    return {
      stop: () => {},
      getRemaining: () => remaining,
    }
  }

  id = globalThis.setInterval(() => {
    remaining -= 1
    paint()
    if (remaining <= 0) {
      if (id != null) globalThis.clearInterval(id)
      id = null
      options.onEnd?.()
    }
  }, 1000)

  return {
    stop: () => {
      if (id != null) globalThis.clearInterval(id)
      id = null
    },
    getRemaining: () => remaining,
  }
}

/**
 * Inizializza elementi `[data-arc-display]` con valore da `data-arc-display-value`
 * e `data-arc-display-pad` opzionale.
 *
 * @param {ParentNode} [root]
 */
export function bindArcDisplays(root = document) {
  root.querySelectorAll('[data-arc-display]').forEach((el) => {
    if (!(el instanceof HTMLElement)) return
    const initial = el.dataset.arcDisplayValue ?? '0'
    const pad = el.dataset.arcDisplayPad != null ? Number.parseInt(el.dataset.arcDisplayPad, 10) : undefined
    setArcDisplayValue(el, initial, Number.isFinite(pad) ? { pad } : {})
  })
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => bindArcDisplays(), { once: true })
  } else {
    bindArcDisplays()
  }
}
