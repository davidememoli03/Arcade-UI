// src/effects/glitch.js
// API JavaScript per l'effetto glitch arcade.

/** Selettore elementi che richiedono `data-text` via initGlitch. */
export const GLITCH_SELECTOR = '.arc-glitch, .arc-glitch-hover, [data-arc-glitch]'

const SELECTOR = GLITCH_SELECTOR

const BURST_DURATION_SELECTOR = '[data-arc-glitch-duration]'

/** @type {WeakSet<Element>} */
const burstBoundElements = new WeakSet()

/** @type {MutationObserver|null} */
let bindObserver = null

/** @type {boolean} */
let lazyBindStarted = false

/**
 * @param {Document | Element} root
 * @returns {boolean}
 */
export function hasGlitchTargets(root = document) {
  if (typeof document === 'undefined' || !root) return false
  const scope = root instanceof Document ? root.documentElement : root
  if (!(scope instanceof Element)) return false

  for (const part of GLITCH_SELECTOR.split(', ')) {
    const sel = part.trim()
    if (scope.matches(sel) || scope.querySelector(sel)) return true
  }

  return !!scope.querySelector(BURST_DURATION_SELECTOR)
}

/**
 * @param {Element} el
 * @returns {number|null}
 */
function parseBurstDurationMs(el) {
  if (!('arcGlitchDuration' in el.dataset)) return null
  const raw = el.dataset.arcGlitchDuration?.trim() ?? ''
  if (raw === '') return null
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : 600
}

/**
 * @param {Element} el
 */
function bindBurstOnElement(el) {
  const duration = parseBurstDurationMs(el)
  if (duration === null || burstBoundElements.has(el)) return

  burstBoundElements.add(el)

  const trigger = (el.dataset.arcGlitchBurst ?? 'click').toLowerCase()

  if (trigger === 'hover') {
    el.addEventListener('mouseenter', () => triggerGlitch(el, duration))
    return
  }

  el.addEventListener('click', () => triggerGlitch(el, duration))
}

/**
 * @param {Document | Element} root
 */
function bindGlitchBurstInRoot(root = document) {
  const scope = root instanceof Document ? root.documentElement : root
  scope.querySelectorAll(BURST_DURATION_SELECTOR).forEach((el) => {
    bindBurstOnElement(el)
  })
}

/**
 * Popola automaticamente `data-text` su tutti gli elementi glitch che non
 * lo hanno già impostato (idempotente).
 *
 * @param {Document | Element} root
 */
export function initGlitch(root = document) {
  const scope = root instanceof Document ? root.documentElement : root
  scope.querySelectorAll(SELECTOR).forEach((el) => {
    if (el.dataset.text !== undefined) return

    const hasBackgroundImage =
      el.tagName === 'IMG' ||
      getComputedStyle(el).backgroundImage !== 'none'

    el.dataset.text = hasBackgroundImage ? '' : el.textContent.trim()
  })
}

/**
 * Attiva il glitch su un elemento per una durata specificata, poi lo rimuove.
 *
 * @param {Element} el
 * @param {number} [duration=600]
 */
export function triggerGlitch(el, duration = 600) {
  el.classList.remove('arc-glitch-active')
  void el.offsetWidth
  el.classList.add('arc-glitch-active')
  setTimeout(() => el.classList.remove('arc-glitch-active'), duration)
}

/**
 * `initGlitch` + binding dichiarativo burst (`data-arc-glitch-duration`).
 *
 * @param {Document | Element} root
 */
export function bindGlitch(root = document) {
  initGlitch(root)
  bindGlitchBurstInRoot(root)
}

/**
 * @param {Document | Element} root
 */
function scanAndBindIfNeeded(root = document) {
  if (!hasGlitchTargets(root)) return
  bindGlitch(root)
}

/**
 * Avvia auto-bind a `DOMContentLoaded` + `MutationObserver` (chiamare da `index.js`).
 */
export function scheduleGlitchAutoBinding() {
  if (typeof document === 'undefined' || lazyBindStarted) return

  const start = () => {
    if (lazyBindStarted) return
    lazyBindStarted = true
    scanAndBindIfNeeded(document)

    if (typeof MutationObserver === 'undefined') return

    bindObserver = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            scanAndBindIfNeeded(/** @type {Element} */ (node))
          }
        }
      }
    })

    bindObserver.observe(document.documentElement, {
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

/** @internal Test helper — disconnect observer and reset lazy-bind state. */
export function _resetGlitchAutoBindingForTest() {
  bindObserver?.disconnect()
  bindObserver = null
  lazyBindStarted = false
}

export const glitch = { initGlitch, triggerGlitch, bindGlitch }
