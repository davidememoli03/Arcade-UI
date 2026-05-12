// src/stories/Display.stories.js

import { setArcDisplayValue, arcCountdown } from '../components/display.js'

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Display',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Display a 7 segmenti (font **DSEG7 Classic** open source). Colori: `arc-display-red` (default), ' +
          '`arc-display-green`, `arc-display-amber`, `arc-display-cyan`. Varianti `arc-display-score` e ' +
          '`arc-display-timer`. API: `setArcDisplayValue`, `arcCountdown` da `@davide03memoli/arcade-ui`.',
      },
    },
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const ScoreCounter = {
  name: 'Score counter',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'padding:2rem;display:flex;flex-direction:column;gap:1.25rem;align-items:flex-start;'

    const row = document.createElement('div')
    row.className = 'arc-display arc-display-score arc-display-amber'
    row.setAttribute('role', 'status')
    row.setAttribute('aria-live', 'polite')

    const label = document.createElement('p')
    label.style.cssText = 'margin:0;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;'
    label.textContent = 'HIGH SCORE'

    const controls = document.createElement('div')
    controls.style.cssText = 'display:flex;gap:.5rem;flex-wrap:wrap;'

    let score = 12450
    setArcDisplayValue(row, score, { pad: 6 })

    const btn1 = document.createElement('button')
    btn1.type = 'button'
    btn1.className = 'arc-btn arc-btn-primary arc-btn-sm'
    btn1.textContent = '+1K'
    btn1.addEventListener('click', () => {
      score = Math.min(999999, score + 1000)
      setArcDisplayValue(row, score, { pad: 6 })
    })

    const btn2 = document.createElement('button')
    btn2.type = 'button'
    btn2.className = 'arc-btn arc-btn-ghost arc-btn-sm'
    btn2.textContent = 'RESET'
    btn2.addEventListener('click', () => {
      score = 0
      setArcDisplayValue(row, score, { pad: 6 })
    })

    controls.append(btn1, btn2)
    wrap.append(label, row, controls)
    return wrap
  },
}

export const CountdownTimer = {
  name: 'Countdown timer',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'padding:2rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;'

    const row = document.createElement('div')
    row.className = 'arc-display arc-display-timer arc-display-green'
    row.setAttribute('role', 'timer')
    row.setAttribute('aria-live', 'polite')

    const state = document.createElement('p')
    state.style.cssText = 'margin:0;font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);'
    state.textContent = 'Stato: idle'

    const controls = document.createElement('div')
    controls.style.cssText = 'display:flex;gap:.5rem;flex-wrap:wrap;'

    let ctrl = { stop: () => {} }

    const btnStart = document.createElement('button')
    btnStart.type = 'button'
    btnStart.className = 'arc-btn arc-btn-primary arc-btn-sm'
    btnStart.textContent = 'START 2:00'
    btnStart.addEventListener('click', () => {
      ctrl.stop()
      ctrl = arcCountdown(row, {
        seconds: 120,
        onTick: (r) => {
          state.textContent = `Secondi rimanenti: ${r}`
        },
        onEnd: () => {
          state.textContent = 'TIME UP — Stato: idle'
        },
      })
    })

    const btnStop = document.createElement('button')
    btnStop.type = 'button'
    btnStop.className = 'arc-btn arc-btn-danger arc-btn-sm'
    btnStop.textContent = 'STOP'
    btnStop.addEventListener('click', () => {
      ctrl.stop()
      state.textContent = 'Stato: fermato'
    })

    controls.append(btnStart, btnStop)
    wrap.append(row, state, controls)
    return wrap
  },
}

export const LedColors = {
  name: 'LED colors',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:var(--arc-space-3);align-items:center;'

    const colors = [
      { cls: 'arc-display-red', val: '888', label: 'red (default anche senza classe)' },
      { cls: 'arc-display-green', val: '425', label: 'green' },
      { cls: 'arc-display-amber', val: '102', label: 'amber' },
      { cls: 'arc-display-cyan', val: '007', label: 'cyan' },
    ]

    for (const { cls, val, label } of colors) {
      const fig = document.createElement('figure')
      fig.style.cssText = 'margin:0;text-align:center;'
      const cap = document.createElement('figcaption')
      cap.style.cssText = 'margin-top:8px;font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);max-width:140px;'
      cap.textContent = label
      const d = document.createElement('div')
      d.className = `arc-display arc-display-score ${cls}`
      d.setAttribute('role', 'img')
      setArcDisplayValue(d, val, { pad: 3 })
      fig.append(d, cap)
      wrap.appendChild(fig)
    }

    return wrap
  },
}
