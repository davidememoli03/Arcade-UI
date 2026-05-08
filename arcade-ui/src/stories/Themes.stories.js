// src/stories/Themes.stories.js

/** Classi tema (ordine per strip da documentElement / body) */
export const THEME_CLASS_NAMES = [
  'arc-theme-phosphor',
  'arc-theme-amber-crt',
  'arc-theme-magenta-wave',
  'arc-theme-ice-blue',
]

function clearThemeClasses(...roots) {
  for (const el of roots) {
    if (!el) continue
    for (const c of THEME_CLASS_NAMES) el.classList.remove(c)
  }
}

function applyThemeClass(className) {
  const html = document.documentElement
  const body = document.body
  clearThemeClasses(html, body)
  if (className) {
    html.classList.add(className)
    body.classList.add(className)
  }
}

function demoMarkup() {
  return `
  <div class="arc-panel arc-panel-cyan">
    <div class="arc-panel-header">
      <span class="arc-glow-cyan arc-text-h3" style="margin:0;text-transform:uppercase;">THEME PREVIEW</span>
      <span class="arc-badge arc-badge-yellow">HUD</span>
    </div>
    <div class="arc-panel-body arc-text-body">
      Primary / muted / accent: racchiudono stati UI tipici dei cabinati.
    </div>
    <div class="arc-panel-footer" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">OK</button>
      <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm">CANCEL</button>
      <button type="button" class="arc-btn arc-btn-danger arc-btn-sm">DANGER</button>
      <span class="arc-badge arc-badge-green">+100</span>
      <span class="arc-badge arc-badge-red">LOW</span>
    </div>
  </div>`
}

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Tokens/Themes',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Temi colore alternativi che sovrascrivono le variabili di `tokens/colors`. ' +
          'Importa un file da `themes/*` e applica la classe `.arc-theme-*` su `<html>`, `<body>` o un wrapper.',
      },
    },
  },
}

const SWITCHER_ID = 'arc-theme-switcher-root'

/** @type { import('@storybook/html').StoryObj } */
export const LiveSwitcher = {
  name: 'Live switcher',
  render: () => `
<div id="${SWITCHER_ID}" style="max-width:520px;">
  <p class="arc-text-caption" style="margin:0 0 12px;color:var(--arc-color-text-muted);">
    Tema applicato su <code style="font-family:var(--arc-font-mono)">&lt;html&gt;</code> e
    <code style="font-family:var(--arc-font-mono)">&lt;body&gt;</code> (classe rimossa = default neon).
  </p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">
    <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" data-arc-theme="">Default</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-phosphor">Phosphor</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-amber-crt">Amber CRT</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-magenta-wave">Magenta</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-ice-blue">Ice blue</button>
  </div>
  ${demoMarkup()}
</div>`,
  play: () => {
    const root = document.getElementById(SWITCHER_ID)
    if (!root) return

    root.querySelectorAll('[data-arc-theme]').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyThemeClass(btn.getAttribute('data-arc-theme') || '')
      })
    })
  },
}

/** Quattro anteprime affiancate: ogni blocco imposta il tema solo su quel contenitore. */
export const Gallery = {
  name: 'Gallery (scoped)',
  render: () => {
    const block = (themeClass, title) => `
<div class="${themeClass}" style="padding:16px;border:var(--arc-border-md) solid var(--arc-color-cyan);background:var(--arc-color-bg);min-width:0;">
  <p class="arc-text-caption" style="margin:0 0 8px;color:var(--arc-color-text-muted);">.${themeClass}</p>
  <p class="arc-text-h3" style="margin:0 0 12px;color:var(--arc-color-cyan);text-transform:uppercase;">${title}</p>
  <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">PLAY</button>
  <span class="arc-badge arc-badge-yellow" style="margin-left:8px;">PTS</span>
</div>`
    return `
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;align-items:start;">
  ${block('arc-theme-phosphor', 'Phosphor')}
  ${block('arc-theme-amber-crt', 'Amber')}
  ${block('arc-theme-magenta-wave', 'Magenta')}
  ${block('arc-theme-ice-blue', 'Ice')}
</div>`
  },
}

export const PhosphorGreen = {
  name: 'Phosphor green (full preview)',
  render: () => `<div class="arc-theme-phosphor">${demoMarkup()}</div>`,
}

export const AmberCrt = {
  name: 'Amber CRT (full preview)',
  render: () => `<div class="arc-theme-amber-crt">${demoMarkup()}</div>`,
}

export const MagentaWave = {
  name: 'Magenta wave (full preview)',
  render: () => `<div class="arc-theme-magenta-wave">${demoMarkup()}</div>`,
}

export const IceBlue = {
  name: 'Ice blue (full preview)',
  render: () => `<div class="arc-theme-ice-blue">${demoMarkup()}</div>`,
}

export { applyThemeClass, clearThemeClasses }
