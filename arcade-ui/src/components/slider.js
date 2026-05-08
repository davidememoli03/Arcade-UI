// src/components/slider.js
// Aggiorna --arc-slider-value sui range input per il fill gradient WebKit.
// Firefox usa ::-moz-range-progress nativo e non richiede questo aggiornamento.

/**
 * Calcola e imposta --arc-slider-value su un singolo input[type=range].
 * Chiamare all'init e ad ogni evento `input`.
 *
 * @param {HTMLInputElement} input
 */
export function updateSlider(input) {
  const min = parseFloat(input.min) || 0
  const max = parseFloat(input.max) || 100
  const val = parseFloat(input.value) ?? min
  const pct = ((val - min) / (max - min)) * 100
  input.style.setProperty('--arc-slider-value', `${pct}%`)
}

/**
 * Inizializza tutti gli input[type=range] con [data-arc-slider] trovati
 * in `root`: calcola il fill iniziale e aggiorna al drag.
 *
 * Se [data-arc-slider-display] punta all'id di un elemento, aggiorna
 * il suo textContent al valore corrente dello slider.
 *
 * @param {Element | Document} root
 * @returns {() => void}  Funzione cleanup che rimuove i listener.
 */
export function bindSliders(root = document) {
  const cleanups = []

  root.querySelectorAll('input[type="range"][data-arc-slider]').forEach((input) => {
    updateSlider(input)

    const displayId = input.dataset.arcSliderDisplay
    const display = displayId ? root.querySelector(`#${displayId}`) : null

    function onInput() {
      updateSlider(input)
      if (display) display.textContent = input.value
    }

    if (display) display.textContent = input.value

    input.addEventListener('input', onInput)
    cleanups.push(() => input.removeEventListener('input', onInput))
  })

  return () => cleanups.forEach((fn) => fn())
}

// Auto-bind al DOMContentLoaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => bindSliders(), { once: true })
  } else {
    bindSliders()
  }
}
