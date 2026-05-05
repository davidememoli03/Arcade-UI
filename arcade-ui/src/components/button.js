// src/components/button.js
// Auto-bind effetti sonori su bottoni con data-arc-sound-*
// Richiede howler come peer dependency (npm install howler)

import { Howl } from 'howler'

const cache = new Map()

function getSound(src) {
  if (!cache.has(src)) {
    cache.set(src, new Howl({ src: [src], volume: 0.5 }))
  }
  return cache.get(src)
}

export function bindButtonSounds(root = document) {
  root.querySelectorAll('[data-arc-sound-hover], [data-arc-sound-click]').forEach(btn => {
    const hoverSrc = btn.dataset.arcSoundHover
    const clickSrc = btn.dataset.arcSoundClick

    if (hoverSrc) {
      btn.addEventListener('mouseenter', () => getSound(hoverSrc).play())
    }
    if (clickSrc) {
      btn.addEventListener('click', () => getSound(clickSrc).play())
    }
  })
}
