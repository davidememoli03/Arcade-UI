// src/stories/Toast.stories.js
import { arcToast } from '../components/toast.js'

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Notifiche di sistema arcade-style che imitano i messaggi "PLAYER 1 READY", ' +
          '"GAME OVER", "NEW HIGH SCORE". Posizione configurabile, animazione slide-in ' +
          'con glow flash, auto-dismiss con progress bar, stack automatico.',
      },
    },
  },
  argTypes: {
    message:  { control: 'text' },
    type:     { control: { type: 'select' }, options: ['info', 'success', 'warning', 'error'] },
    duration: { control: { type: 'number', min: 0, max: 10000, step: 500 } },
    position: {
      control: { type: 'select' },
      options: ['bottom-right', 'bottom-left', 'bottom-center', 'top-right', 'top-left', 'top-center'],
    },
  },
  args: {
    message:  'PLAYER 1 READY',
    type:     'info',
    duration: 3000,
    position: 'bottom-right',
  },
}

// ─── Helper: pulsante trigger ────────────────────────────────────────────────

function triggerBtn(label, handler) {
  const btn = document.createElement('button')
  btn.className   = 'arc-btn arc-btn-primary'
  btn.textContent = label
  btn.addEventListener('click', handler)
  return btn
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Controllo interattivo: configura tipo, messaggio, durata e posizione. */
export const Playground = {
  name: 'Playground (interactive)',
  render: (args) => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:16px;padding:2rem;'

    const btn = triggerBtn('▶ SHOW TOAST', () => {
      arcToast.show(args)
    })
    wrap.appendChild(btn)
    return wrap
  },
}

/** Tipo info — ciano, messaggio di sistema. */
export const Info = {
  name: 'Info (cyan)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;'
    const btn = triggerBtn('PLAYER 1 READY', () => {
      arcToast.show({ message: 'PLAYER 1 READY', type: 'info' })
    })
    wrap.appendChild(btn)
    return wrap
  },
}

/** Tipo success — verde, vittoria o completamento. */
export const Success = {
  name: 'Success (green)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;'
    const btn = triggerBtn('NEW HIGH SCORE', () => {
      arcToast.show({ message: 'NEW HIGH SCORE!  1,248,000 PTS', type: 'success' })
    })
    wrap.appendChild(btn)
    return wrap
  },
}

/** Tipo warning — giallo, attenzione. */
export const Warning = {
  name: 'Warning (yellow)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;'
    const btn = triggerBtn('LOW CREDIT WARNING', () => {
      arcToast.show({ message: 'LOW CREDITS — INSERT COIN', type: 'warning' })
    })
    wrap.appendChild(btn)
    return wrap
  },
}

/** Tipo error — rosso, perdita di vita o errore critico. */
export const Error = {
  name: 'Error (red)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;'
    const btn = triggerBtn('GAME OVER', () => {
      arcToast.show({ message: 'GAME OVER — NO CONTINUES LEFT', type: 'error' })
    })
    wrap.appendChild(btn)
    return wrap
  },
}

/** Toast persistente senza auto-dismiss (duration: 0). */
export const Persistent = {
  name: 'Persistent (no auto-dismiss)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;gap:12px;align-items:center;justify-content:center;padding:2rem;'

    let persistId = null
    const show = triggerBtn('SHOW PERSISTENT', () => {
      persistId = arcToast.show({ message: 'WAITING FOR PLAYER 2...', type: 'info', duration: 0 })
    })
    const dismiss = triggerBtn('DISMISS', () => {
      if (persistId !== null) arcToast.dismiss(persistId)
    })
    dismiss.className = 'arc-btn arc-btn-ghost'

    wrap.appendChild(show)
    wrap.appendChild(dismiss)
    return wrap
  },
}

/** Stack di più toast contemporanei. */
export const Stack = {
  name: 'Stack (multiple toasts)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;padding:2rem;'

    const items = [
      { label: 'INFO',    message: 'STAGE 1-1 START',             type: 'info'    },
      { label: 'SUCCESS', message: 'POWER-UP COLLECTED',          type: 'success' },
      { label: 'WARNING', message: '1 LIFE REMAINING',            type: 'warning' },
      { label: 'ERROR',   message: 'CONNECTION TO SERVER LOST',   type: 'error'   },
    ]

    items.forEach(({ label, message, type }) => {
      wrap.appendChild(triggerBtn(label, () => arcToast.show({ message, type })))
    })

    const allBtn = triggerBtn('ALL AT ONCE', () => {
      items.forEach(({ message, type }, i) => {
        setTimeout(() => arcToast.show({ message, type }), i * 200)
      })
    })
    allBtn.className = 'arc-btn arc-btn-ghost'
    wrap.appendChild(allBtn)

    const dismissBtn = triggerBtn('DISMISS ALL', () => arcToast.dismissAll())
    dismissBtn.className = 'arc-btn arc-btn-ghost'
    wrap.appendChild(dismissBtn)

    return wrap
  },
}

/** Posizione top-center, stile "system broadcast". */
export const TopCenter = {
  name: 'Position: top-center',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;'
    const btn = triggerBtn('BROADCAST MESSAGE', () => {
      arcToast.show({
        message:  'TOURNAMENT MODE ACTIVATED',
        type:     'success',
        position: 'top-center',
        duration: 4000,
      })
    })
    wrap.appendChild(btn)
    return wrap
  },
}

/** Durata estesa (5 s) con progress bar più lenta. */
export const LongDuration = {
  name: 'Long duration (5s)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;'
    const btn = triggerBtn('SHOW — 5 SEC', () => {
      arcToast.show({
        message:  'ACHIEVEMENT UNLOCKED: SPEED RUNNER',
        type:     'success',
        duration: 5000,
      })
    })
    wrap.appendChild(btn)
    return wrap
  },
}

/** Tutti i quattro tipi in sequenza — demo completa. */
export const AllTypes = {
  name: 'All types (sequential)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;'
    const btn = triggerBtn('▶ DEMO SEQUENCE', () => {
      const sequence = [
        { message: 'STAGE CLEAR!',                   type: 'info',    delay: 0    },
        { message: 'SECRET BONUS FOUND  +5000 PTS',  type: 'success', delay: 800  },
        { message: 'TIME BONUS EXPIRING SOON',        type: 'warning', delay: 1600 },
        { message: 'SHIELD BROKEN — TAKE COVER',      type: 'error',   delay: 2400 },
      ]
      sequence.forEach(({ message, type, delay }) => {
        setTimeout(() => arcToast.show({ message, type, duration: 4000 }), delay)
      })
    })
    wrap.appendChild(btn)
    return wrap
  },
}
