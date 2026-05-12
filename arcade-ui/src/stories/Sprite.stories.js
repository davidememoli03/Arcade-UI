// src/stories/Sprite.stories.js

import { arcSprite } from '../components/sprite.js'

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Sprite',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Sprite sheet pixel-art (export **Piskel** PNG). Animazione CSS `steps()` per strisce orizzontali; ' +
          'griglie multi-riga con `.arc-sprite-grid` e `arcSprite.init()` (timer). File demo in `public/sfx/`.',
      },
    },
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const SpriteSheetStrip = {
  name: 'Sprite sheet (strip)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText =
      'padding:1.5rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;font-family:var(--arc-font-mono);'

    const row = document.createElement('div')
    row.style.cssText = 'display:flex;align-items:center;gap:1rem;flex-wrap:wrap;'

    const el = document.createElement('div')
    el.className = 'arc-sprite arc-sprite-pixelated'
    el.setAttribute('role', 'img')
    el.setAttribute('aria-label', 'Demo sprite animation')
    el.style.cssText = `
      --arc-sprite-sheet: url('/sfx/sample-sprite-strip.png');
      --arc-sprite-frames: 4;
      --arc-sprite-width: 16px;
      --arc-sprite-height: 16px;
      --arc-sprite-fps: 8;
      --arc-sprite-scale: 4;
    `

    const ctl = document.createElement('div')
    ctl.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;max-width:360px;'

    const fpsLb = document.createElement('label')
    fpsLb.style.cssText = 'font-size:.7rem;color:var(--arc-color-text-muted);display:flex;flex-direction:column;gap:4px;'
    const fpsRange = document.createElement('input')
    fpsRange.type = 'range'
    fpsRange.min = '1'
    fpsRange.max = '24'
    fpsRange.value = '8'
    fpsRange.style.cssText = 'width:100%;accent-color:var(--arc-color-cyan);'
    const fpsText = document.createElement('span')
    fpsText.textContent = 'FPS: 8'
    fpsLb.append(fpsText, fpsRange)

    fpsRange.addEventListener('input', () => {
      const v = fpsRange.value
      el.style.setProperty('--arc-sprite-fps', v)
      fpsText.textContent = `FPS: ${v}`
    })

    const btns = document.createElement('div')
    btns.style.cssText = 'display:flex;gap:.5rem;flex-wrap:wrap;'

    const bPlay = document.createElement('button')
    bPlay.type = 'button'
    bPlay.className = 'arc-btn arc-btn-primary arc-btn-sm'
    bPlay.textContent = 'Play'

    const bPause = document.createElement('button')
    bPause.type = 'button'
    bPause.className = 'arc-btn arc-btn-ghost arc-btn-sm'
    bPause.textContent = 'Pause'

    bPlay.addEventListener('click', () => el.classList.remove('arc-sprite-paused'))
    bPause.addEventListener('click', () => el.classList.add('arc-sprite-paused'))

    btns.append(bPlay, bPause)

    const bgLabel = document.createElement('span')
    bgLabel.style.cssText = 'font-size:.65rem;color:var(--arc-color-text-muted);text-transform:uppercase;'
    bgLabel.textContent = 'Sfondo'

    const bgRow = document.createElement('div')
    bgRow.style.cssText = 'display:flex;gap:.35rem;flex-wrap:wrap;'

    function setBg(mode) {
      el.classList.remove('arc-sprite-bg-dark', 'arc-sprite-bg-panel')
      if (mode === 'dark') el.classList.add('arc-sprite-bg-dark')
      if (mode === 'panel') el.classList.add('arc-sprite-bg-panel')
    }

    const b0 = document.createElement('button')
    b0.type = 'button'
    b0.className = 'arc-btn arc-btn-sm arc-btn-ghost'
    b0.textContent = 'Trasparente'
    b0.addEventListener('click', () => setBg('none'))

    const b1 = document.createElement('button')
    b1.type = 'button'
    b1.className = 'arc-btn arc-btn-sm arc-btn-ghost'
    b1.textContent = 'Dark'
    b1.addEventListener('click', () => setBg('dark'))

    const b2 = document.createElement('button')
    b2.type = 'button'
    b2.className = 'arc-btn arc-btn-sm arc-btn-ghost'
    b2.textContent = 'Panel'
    b2.addEventListener('click', () => setBg('panel'))

    bgRow.append(b0, b1, b2)

    ctl.append(fpsLb, btns, bgLabel, bgRow)
    row.append(el, ctl)
    wrap.append(row)
    return wrap
  },
}

export const SpriteSheetGrid = {
  name: 'Sprite sheet (griglia 4×2)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'padding:1.5rem;display:flex;flex-direction:column;gap:1rem;'

    const el = document.createElement('div')
    el.className = 'arc-sprite arc-sprite-grid arc-sprite-pixelated'
    el.setAttribute('role', 'img')
    el.setAttribute('aria-label', 'Griglia sprite demo')
    el.style.cssText = `
      --arc-sprite-sheet: url('/sfx/sample-sprite-grid.png');
      --arc-sprite-frames: 8;
      --arc-sprite-rows: 2;
      --arc-sprite-width: 16px;
      --arc-sprite-height: 16px;
      --arc-sprite-fps: 10;
      --arc-sprite-scale: 4;
    `

    const bar = document.createElement('div')
    bar.style.cssText = 'display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;'

    const ctrl = arcSprite.init(el)

    const bp = document.createElement('button')
    bp.type = 'button'
    bp.className = 'arc-btn arc-btn-primary arc-btn-sm'
    bp.textContent = 'Play'
    bp.addEventListener('click', () => ctrl?.play())

    const bz = document.createElement('button')
    bz.type = 'button'
    bz.className = 'arc-btn arc-btn-ghost arc-btn-sm'
    bz.textContent = 'Pause'
    bz.addEventListener('click', () => ctrl?.pause())

    const bf = document.createElement('button')
    bf.type = 'button'
    bf.className = 'arc-btn arc-btn-ghost arc-btn-sm'
    bf.textContent = 'Frame 3'
    bf.addEventListener('click', () => ctrl?.setFrame(3))

    bar.append(bp, bz, bf)
    wrap.append(el, bar)
    return wrap
  },
}
