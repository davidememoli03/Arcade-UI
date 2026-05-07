// src/components/tabs.js
// API JavaScript per il componente arc-tabs (versione JS-driven).
// Gestisce .arc-tab-active / .arc-tab-panel-active e navigazione da tastiera.

// ─── arcTabs ──────────────────────────────────────────────────────────────────

/**
 * Initialise a JS-driven arc-tabs widget.
 *
 * Binds click and keyboard events on .arc-tab elements inside the container,
 * and manages the .arc-tab-active / .arc-tab-panel-active classes.
 *
 * Keyboard support (ARIA tabs pattern):
 *   ArrowRight / ArrowLeft — navigate between tabs
 *   Home / End             — jump to first / last tab
 *   Enter / Space          — activate focused tab
 *
 * @param {Element} container  The .arc-tabs root element.
 * @returns {{ activate: (index: number) => void }}
 */
export function arcTabs(container) {
  const tabs   = [...container.querySelectorAll(':scope .arc-tab-list .arc-tab')]
  const panels = [...container.querySelectorAll(':scope .arc-tab-panel')]

  if (tabs.length === 0) return { activate: () => {} }

  /** @param {number} index */
  function activate(index) {
    const clamped = Math.max(0, Math.min(index, tabs.length - 1))

    tabs.forEach((tab, i) => {
      const active = i === clamped
      tab.classList.toggle('arc-tab-active', active)
      tab.setAttribute('aria-selected', String(active))
      tab.setAttribute('tabindex', active ? '0' : '-1')
    })

    panels.forEach((panel, i) => {
      panel.classList.toggle('arc-tab-panel-active', i === clamped)
    })
  }

  tabs.forEach((tab, i) => {
    // Click: activate tab
    tab.addEventListener('click', () => activate(i))

    // Keyboard: arrow navigation (roving tabindex)
    tab.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowRight': {
          const next = (i + 1) % tabs.length
          activate(next)
          tabs[next].focus()
          e.preventDefault()
          break
        }
        case 'ArrowLeft': {
          const prev = (i - 1 + tabs.length) % tabs.length
          activate(prev)
          tabs[prev].focus()
          e.preventDefault()
          break
        }
        case 'Home':
          activate(0)
          tabs[0].focus()
          e.preventDefault()
          break
        case 'End': {
          const last = tabs.length - 1
          activate(last)
          tabs[last].focus()
          e.preventDefault()
          break
        }
        case 'Enter':
        case ' ':
          activate(i)
          e.preventDefault()
          break
        default:
          break
      }
    })
  })

  // Set initial ARIA roles if not already set
  container.setAttribute('data-arc-tabs-js', '')
  tabs.forEach((tab) => {
    if (!tab.getAttribute('role')) tab.setAttribute('role', 'tab')
  })
  panels.forEach((panel) => {
    if (!panel.getAttribute('role')) panel.setAttribute('role', 'tabpanel')
  })

  // Activate the first .arc-tab-active tab, or default to tab 0
  const initialIndex = tabs.findIndex(t => t.classList.contains('arc-tab-active'))
  activate(initialIndex >= 0 ? initialIndex : 0)

  return { activate }
}

// ─── bindTabs ─────────────────────────────────────────────────────────────────

/**
 * Auto-initialise every .arc-tabs[data-arc-tabs] element found inside `root`.
 * Call manually after injecting dynamic HTML.
 *
 * @param {Element | Document} root
 * @returns {Map<Element, { activate: (index: number) => void }>}
 */
export function bindTabs(root = document) {
  const instances = new Map()
  root.querySelectorAll('.arc-tabs[data-arc-tabs]').forEach((container) => {
    instances.set(container, arcTabs(container))
  })
  return instances
}

// Auto-bind at DOMContentLoaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => bindTabs(), { once: true })
  } else {
    bindTabs()
  }
}
