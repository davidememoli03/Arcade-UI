// src/components/modal.js
// API JavaScript per il componente arc-modal.
// Gestisce open/close, focus trap e chiusura con ESC / click backdrop.

const FOCUSABLE =
  'a[href],button:not(:disabled),input:not(:disabled),' +
  'select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])'

const OPEN_CLASS = 'arc-modal-backdrop-open'

// ─── Focus trap ───────────────────────────────────────────────────────────────

/**
 * Returns the list of focusable elements inside a container.
 * @param {Element} container
 * @returns {Element[]}
 */
function getFocusable(container) {
  return [...container.querySelectorAll(FOCUSABLE)].filter(
    el => !el.closest('[aria-hidden="true"]'),
  )
}

/**
 * Creates a keydown handler that traps Tab focus inside `container`.
 * @param {Element} container
 * @returns {(e: KeyboardEvent) => void}
 */
function makeTrapHandler(container) {
  return function trapFocus(e) {
    if (e.key !== 'Tab') return
    const focusable = getFocusable(container)
    if (focusable.length === 0) return

    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }
}

// ─── State ────────────────────────────────────────────────────────────────────

/** @type {Map<string, { trapHandler: Function, escHandler: Function, trigger: Element|null }>} */
const openModals = new Map()

// ─── arcModal API ─────────────────────────────────────────────────────────────

/**
 * Opens the modal associated with the given backdrop ID or element.
 * - Adds `arc-modal-backdrop-open` to the backdrop.
 * - Sets `aria-hidden="false"` on the backdrop.
 * - Traps Tab focus inside the modal.
 * - Closes on ESC or backdrop click.
 * - Remembers the trigger element to restore focus on close.
 *
 * @param {string | Element} target  - backdrop element or its id
 * @param {{ trigger?: Element }} [options]
 */
function open(target, { trigger = document.activeElement } = {}) {
  const backdrop = typeof target === 'string'
    ? document.getElementById(target)
    : target

  if (!backdrop) return

  const modal = backdrop.querySelector('[role="dialog"]')
  if (!modal) return

  backdrop.classList.add(OPEN_CLASS)
  backdrop.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'

  // Focus first focusable element inside the modal
  const focusable = getFocusable(modal)
  if (focusable.length > 0) focusable[0].focus()

  const trapHandler = makeTrapHandler(modal)
  document.addEventListener('keydown', trapHandler)

  // Close on ESC
  const escHandler = (e) => {
    if (e.key === 'Escape') close(backdrop)
  }
  document.addEventListener('keydown', escHandler)

  // Close on backdrop click (outside the modal window)
  const backdropClickHandler = (e) => {
    if (e.target === backdrop) close(backdrop)
  }
  backdrop.addEventListener('click', backdropClickHandler)

  const id = backdrop.id || backdrop
  openModals.set(id, {
    trapHandler,
    escHandler,
    backdropClickHandler,
    backdrop,
    trigger: trigger instanceof Element ? trigger : null,
  })
}

/**
 * Closes the modal associated with the given backdrop ID or element.
 * Restores focus to the original trigger element.
 *
 * @param {string | Element} target
 */
function close(target) {
  const backdrop = typeof target === 'string'
    ? document.getElementById(target)
    : target

  if (!backdrop) return

  backdrop.classList.remove(OPEN_CLASS)
  backdrop.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''

  const id = backdrop.id || backdrop
  const state = openModals.get(id)
  if (state) {
    document.removeEventListener('keydown', state.trapHandler)
    document.removeEventListener('keydown', state.escHandler)
    backdrop.removeEventListener('click', state.backdropClickHandler)
    if (state.trigger) state.trigger.focus()
    openModals.delete(id)
  }
}

/**
 * Binds `.arc-modal-close` buttons and any `[data-arc-modal-open]` trigger
 * buttons found inside `root`.
 *
 * - `[data-arc-modal-open="backdrop-id"]` — opens the target backdrop
 * - `.arc-modal-close` inside a backdrop — closes its own backdrop
 *
 * Called automatically at DOMContentLoaded. Call manually for dynamic content.
 *
 * @param {Document | Element} root
 */
function bindModalTriggers(root = document) {
  // Open triggers
  root.querySelectorAll('[data-arc-modal-open]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      open(trigger.dataset.arcModalOpen, { trigger })
    })
  })

  // Close buttons inside modals
  root.querySelectorAll('.arc-modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const backdrop = btn.closest('.arc-modal-backdrop')
      if (backdrop) close(backdrop)
    })
  })
}

// Auto-bind at DOMContentLoaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => bindModalTriggers(), { once: true })
  } else {
    bindModalTriggers()
  }
}

export const arcModal = { open, close, bindModalTriggers }
