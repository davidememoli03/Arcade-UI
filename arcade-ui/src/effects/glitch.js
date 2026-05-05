// src/effects/glitch.js
// API JavaScript per l'effetto glitch arcade.

const SELECTOR = '.arc-glitch, .arc-glitch-hover, [data-arc-glitch]'

/**
 * Popola automaticamente `data-text` su tutti gli elementi glitch che non
 * lo hanno già impostato.
 * - Elementi testo: copia textContent
 * - Elementi con background-image: imposta stringa vuota (il pseudo-elemento
 *   usa background: inherit per clonare l'immagine)
 *
 * @param {Document | Element} root - Radice da cui cercare (default: document)
 */
export function initGlitch(root = document) {
  root.querySelectorAll(SELECTOR).forEach(el => {
    if (el.dataset.text !== undefined) return

    const hasBackgroundImage =
      el.tagName === 'IMG' ||
            getComputedStyle(el).backgroundImage !== 'none'

    el.dataset.text = hasBackgroundImage ? '' : el.textContent.trim()
  })
}

/**
 * Attiva il glitch su un elemento per una durata specificata, poi lo rimuove.
 * Resetta l'animazione prima di applicarla per garantire la partenza.
 *
 * @param {Element} el       - Elemento target
 * @param {number}  duration - Durata in ms (default: 600)
 */
export function triggerGlitch(el, duration = 600) {
  el.classList.remove('arc-glitch-active')
  void el.offsetWidth
  el.classList.add('arc-glitch-active')
  setTimeout(() => el.classList.remove('arc-glitch-active'), duration)
}

export const glitch = { initGlitch, triggerGlitch }
