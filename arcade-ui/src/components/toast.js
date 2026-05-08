// src/components/toast.js
// Sistema di notifiche arcade-style.
// API: arcToast.show({ message, type, duration, position })

/** @type {Map<string, HTMLElement>} */
const containers = new Map()

/** @type {Map<number, { el: HTMLElement, timer: number|null }>} */
const activeToasts = new Map()

let nextId = 1

// ─── Icone pixel-art per tipo ──────────────────────────────────────────────

const ICONS = {
  info:    '[ i ]',
  success: '[ + ]',
  warning: '[ ! ]',
  error:   '[ x ]',
}

// ─── Posizioni valide ──────────────────────────────────────────────────────

const VALID_POSITIONS = new Set([
  'top-right',
  'top-left',
  'top-center',
  'bottom-right',
  'bottom-left',
  'bottom-center',
])

const DEFAULT_POSITION = 'bottom-right'
const DEFAULT_DURATION = 3000
const DEFAULT_TYPE     = 'info'

// ─── Container management ─────────────────────────────────────────────────

/**
 * Returns (or creates) the toast container for a given position.
 * Containers are lazily inserted into the DOM on first use.
 *
 * @param {string} position
 * @returns {HTMLElement}
 */
function getContainer(position) {
  if (containers.has(position)) return containers.get(position)

  const el = document.createElement('div')
  el.className = `arc-toast-container arc-toast-${position}`
  el.setAttribute('aria-live', 'polite')
  el.setAttribute('aria-atomic', 'false')
  document.body.appendChild(el)
  containers.set(position, el)
  return el
}

// ─── Toast DOM builder ────────────────────────────────────────────────────

/**
 * Builds the toast HTML element.
 *
 * @param {{ id: number, message: string, type: string, duration: number }} opts
 * @returns {HTMLElement}
 */
function buildToast({ id, message, type, duration }) {
  const toast = document.createElement('div')
  toast.className   = `arc-toast arc-toast-${type}`
  toast.setAttribute('role', 'status')
  toast.setAttribute('aria-live', 'assertive')
  toast.dataset.arcToastId = id

  const icon = document.createElement('span')
  icon.className = 'arc-toast-icon'
  icon.setAttribute('aria-hidden', 'true')
  icon.textContent = ICONS[type] ?? ICONS.info

  const msg = document.createElement('span')
  msg.className = 'arc-toast-message'
  msg.textContent = message

  const closeBtn = document.createElement('button')
  closeBtn.className = 'arc-toast-close'
  closeBtn.setAttribute('aria-label', 'Dismiss notification')
  closeBtn.textContent = '[X]'
  closeBtn.addEventListener('click', () => dismiss(id))

  toast.appendChild(icon)
  toast.appendChild(msg)
  toast.appendChild(closeBtn)

  if (duration > 0) {
    const progress = document.createElement('div')
    progress.className = 'arc-toast-progress'
    progress.setAttribute('aria-hidden', 'true')

    const bar = document.createElement('div')
    bar.className = 'arc-toast-progress-bar'
    bar.style.setProperty('--arc-toast-duration', `${duration}ms`)

    progress.appendChild(bar)
    toast.appendChild(progress)
  }

  return toast
}

// ─── Dismiss logic ────────────────────────────────────────────────────────

/**
 * Dismisses a toast by id with an exit animation.
 * Removes the DOM element and cleans up state after the animation completes.
 *
 * @param {number} id
 */
function dismiss(id) {
  const entry = activeToasts.get(id)
  if (!entry) return

  const { el, timer } = entry
  if (timer !== null) clearTimeout(timer)

  activeToasts.delete(id)

  el.classList.add('arc-toast-exiting')
  el.addEventListener('animationend', () => {
    el.remove()
  }, { once: true })
}

/**
 * Dismisses all currently visible toasts.
 */
function dismissAll() {
  for (const id of activeToasts.keys()) {
    dismiss(id)
  }
}

// ─── Public API ───────────────────────────────────────────────────────────

/**
 * Shows an arcade-style toast notification.
 *
 * @param {object} options
 * @param {string}  options.message            - Text to display (uppercased automatically)
 * @param {'info'|'success'|'warning'|'error'} [options.type='info']
 * @param {number}  [options.duration=3000]    - Auto-dismiss delay in ms; 0 = persistent
 * @param {'top-right'|'top-left'|'top-center'|'bottom-right'|'bottom-left'|'bottom-center'} [options.position='bottom-right']
 * @returns {number} toast id (usable with arcToast.dismiss(id))
 */
function show({
  message  = '',
  type     = DEFAULT_TYPE,
  duration = DEFAULT_DURATION,
  position = DEFAULT_POSITION,
} = {}) {
  if (typeof document === 'undefined') return -1

  const resolvedType     = type in ICONS ? type : DEFAULT_TYPE
  const resolvedPosition = VALID_POSITIONS.has(position) ? position : DEFAULT_POSITION
  const resolvedDuration = typeof duration === 'number' && duration >= 0 ? duration : DEFAULT_DURATION

  const id        = nextId++
  const container = getContainer(resolvedPosition)
  const el        = buildToast({ id, message, type: resolvedType, duration: resolvedDuration })

  // Bottom containers: new toasts appear near the edge (append = last child = bottom).
  // Top containers: new toasts appear near the edge (prepend = first child = top).
  if (resolvedPosition.startsWith('top')) {
    container.insertBefore(el, container.firstChild)
  } else {
    container.appendChild(el)
  }

  let timer = null
  if (resolvedDuration > 0) {
    timer = setTimeout(() => dismiss(id), resolvedDuration)
  }

  activeToasts.set(id, { el, timer })
  return id
}

export const arcToast = { show, dismiss, dismissAll }
