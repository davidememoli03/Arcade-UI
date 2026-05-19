// src/audio/sound-bindings.js
// Binding dichiarativo SFX via attributi data-arc-sound-* su qualsiasi elemento.

/** @typedef {'coin'|'select'|'blip'|'error'|'win'|'gameover'} ArcBuiltInSfxId */

/** ID SFX built-in (sintesi Web Audio). */
export const ARCADE_BUILTIN_SFX = Object.freeze(
  /** @type {const} */ (['coin', 'select', 'blip', 'error', 'win', 'gameover']),
)

/** Eventi custom per trigger programmatici (toast, form, ecc.). */
export const ARCADE_SOUND_EVENT_SUCCESS = 'arc:success'
export const ARCADE_SOUND_EVENT_ERROR = 'arc:error'

/**
 * Contratto attributi dichiarativi → evento DOM.
 * Valore: id SFX built-in, id `register()`, URL file, oppure `""` per disabilitare.
 *
 * @type {ReadonlyArray<{
 *   datasetKey: string
 *   attr: string
 *   event: string
 *   custom?: boolean
 * }>}
 */
export const ARCADE_SOUND_ATTRS = Object.freeze([
  { datasetKey: 'arcSoundClick', attr: 'data-arc-sound-click', event: 'click' },
  { datasetKey: 'arcSoundPointerdown', attr: 'data-arc-sound-pointerdown', event: 'pointerdown' },
  { datasetKey: 'arcSoundHover', attr: 'data-arc-sound-hover', event: 'mouseenter' },
  { datasetKey: 'arcSoundFocus', attr: 'data-arc-sound-focus', event: 'focus' },
  {
    datasetKey: 'arcSoundSuccess',
    attr: 'data-arc-sound-success',
    event: ARCADE_SOUND_EVENT_SUCCESS,
    custom: true,
  },
  {
    datasetKey: 'arcSoundError',
    attr: 'data-arc-sound-error',
    event: ARCADE_SOUND_EVENT_ERROR,
    custom: true,
  },
])

/** Selettore unione per query nel subtree. */
export const ARCADE_SOUND_SELECTOR = ARCADE_SOUND_ATTRS.map((a) => `[${a.attr}]`).join(',')

export const ARCADE_BTN_SELECTOR = '.arc-btn'

const BTN_SELECTOR = ARCADE_BTN_SELECTOR
const BTN_PRIMARY_SELECTOR = '.arc-btn-primary'

/**
 * True se `root` (o un discendente) espone hook audio dichiarativi o `.arc-btn`.
 *
 * @param {Document | Element} root
 * @returns {boolean}
 */
export function hasArcadeSoundTargets(root = document) {
  if (typeof document === 'undefined' || !root) return false
  const scope = root instanceof Document ? root.documentElement : root
  if (!(scope instanceof Element)) return false

  for (const { attr } of ARCADE_SOUND_ATTRS) {
    const sel = `[${attr}]`
    if (scope.matches(sel) || scope.querySelector(sel)) return true
  }

  return scope.matches(BTN_SELECTOR) || !!scope.querySelector(BTN_SELECTOR)
}

/**
 * @param {Element} el
 * @returns {boolean}
 */
export function isSoundTargetDisabled(el) {
  if ('disabled' in el && /** @type {HTMLButtonElement} */ (el).disabled) return true
  return el.getAttribute('aria-disabled') === 'true'
}

/**
 * @param {Element} el
 * @param {(id: string) => void} play
 * @param {{ bindButtonDefaults?: boolean }} [options]
 */
function bindElementSounds(el, play, options = {}) {
  const { bindButtonDefaults = true } = options
  const isBtn = el.matches(BTN_SELECTOR)
  const hasHoverAttr = 'arcSoundHover' in el.dataset
  const hasClickAttr = 'arcSoundClick' in el.dataset
  const hasPointerAttr = 'arcSoundPointerdown' in el.dataset

  for (const { datasetKey, event, custom } of ARCADE_SOUND_ATTRS) {
    if (!(datasetKey in el.dataset)) continue
    const soundId = el.dataset[datasetKey]
    if (soundId === '') continue

    const handler = () => {
      if (!isSoundTargetDisabled(el)) play(soundId)
    }

    el.addEventListener(event, handler)
  }

  if (!bindButtonDefaults || !isBtn) return

  if (!hasHoverAttr) {
    el.addEventListener('mouseenter', () => {
      if (!isSoundTargetDisabled(el)) play('blip')
    })
  }

  if (!hasClickAttr && !hasPointerAttr && el.matches(BTN_PRIMARY_SELECTOR)) {
    el.addEventListener('click', () => {
      if (!isSoundTargetDisabled(el)) play('select')
    })
  }
}

/**
 * Collega attributi `data-arc-sound-*` e default `.arc-btn` nel subtree `root`.
 *
 * @param {(id: string) => void} play
 * @param {Document|Element} root
 * @param {WeakSet<Element>} boundElements
 * @param {{ bindButtonDefaults?: boolean }} [options]
 */
export function bindArcadeSoundsInRoot(play, root, boundElements, options = {}) {
  const { bindButtonDefaults = true } = options
  const scope = root instanceof Document ? root.documentElement : root
  /** @type {Set<Element>} */
  const targets = new Set()

  scope.querySelectorAll(ARCADE_SOUND_SELECTOR).forEach((el) => targets.add(el))

  if (bindButtonDefaults) {
    scope.querySelectorAll(BTN_SELECTOR).forEach((el) => targets.add(el))
  }

  targets.forEach((el) => {
    if (boundElements.has(el)) return
    boundElements.add(el)
    bindElementSounds(el, play, { bindButtonDefaults })
  })
}

/**
 * Emette un evento che attiva `data-arc-sound-success` / `data-arc-sound-error` sul target o sui parent.
 *
 * @param {Element} el
 * @param {'success'|'error'} type
 */
export function dispatchArcadeSound(el, type) {
  const name =
    type === 'success' ? ARCADE_SOUND_EVENT_SUCCESS : ARCADE_SOUND_EVENT_ERROR
  el.dispatchEvent(new CustomEvent(name, { bubbles: true }))
}
