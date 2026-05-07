export default {
  title: 'Components/Progress',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Barra di avanzamento stile arcade con blocchi segmentati e glow neon. ' +
          'Controlla il fill con la CSS custom property `--arc-progress` (es. `style="--arc-progress:75%"`). ' +
          'Usa `.arc-progress-indeterminate` per lo stato di caricamento in loop.',
      },
    },
  },
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function bar({
  wrapperClass = '',
  progressClass = 'arc-progress-cyan',
  value = 0,
  label = '',
  indeterminate = false,
  size = '',
}) {
  const sizeClass  = size ? ` arc-progress-${size}` : ''
  const indetClass = indeterminate ? ' arc-progress-indeterminate' : ''
  // style="" va sempre su .arc-progress, mai sul wrapper, per evitare
  // che la custom property venga ereditata e poi sovrascritta dalla regola CSS
  const style      = !indeterminate ? ` style="--arc-progress:${value}%"` : ''
  const ariaValue  = !indeterminate ? `aria-valuenow="${value}"` : 'aria-valuenow="0"'
  const labelHTML  = label
    ? `<span class="arc-progress-label">${label}</span>\n  `
    : ''

  if (label || wrapperClass) {
    return `\
<div class="arc-progress-wrapper ${wrapperClass || progressClass}">
  ${labelHTML}<div class="arc-progress${indetClass}${sizeClass}"
       role="progressbar" ${ariaValue}
       aria-valuemin="0" aria-valuemax="100"
       aria-label="${label || 'Progress'}"${style}>
    <div class="arc-progress-bar"></div>
  </div>
</div>`
  }

  return `\
<div class="arc-progress ${progressClass}${indetClass}${sizeClass}"
     role="progressbar" ${ariaValue}
     aria-valuemin="0" aria-valuemax="100"
     aria-label="Progress"${style}>
  <div class="arc-progress-bar"></div>
</div>`
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Empty = {
  name: '0% — Empty',
  render: () => bar({ value: 0, progressClass: 'arc-progress-cyan', label: 'LOADING  0%' }),
}

export const OneThird = {
  name: '33% — One third',
  render: () => bar({ value: 33, progressClass: 'arc-progress-cyan', label: 'LOADING  33%' }),
}

export const TwoThirds = {
  name: '66% — Two thirds',
  render: () => bar({ value: 66, progressClass: 'arc-progress-cyan', label: 'LOADING  66%' }),
}

export const Full = {
  name: '100% — Complete',
  render: () => bar({ value: 100, progressClass: 'arc-progress-green', label: '✓ COMPLETE' }),
}

export const Indeterminate = {
  name: 'Indeterminate',
  render: () => bar({ indeterminate: true, progressClass: 'arc-progress-cyan', label: 'PLEASE WAIT...' }),
}

// ─── Colour variants ──────────────────────────────────────────────────────────

export const ColorCyan = {
  name: 'Colour: cyan (primary)',
  render: () => bar({ value: 60, progressClass: 'arc-progress-cyan', label: 'LOADING  60%' }),
}

export const ColorGreen = {
  name: 'Colour: green (success)',
  render: () => bar({ value: 80, progressClass: 'arc-progress-green', label: 'HEALTH  80%' }),
}

export const ColorYellow = {
  name: 'Colour: yellow (warning)',
  render: () => bar({ value: 45, progressClass: 'arc-progress-yellow', label: 'AMMO  45%' }),
}

export const ColorRed = {
  name: 'Colour: red (danger)',
  render: () => bar({ value: 20, progressClass: 'arc-progress-red', label: '! FUEL  20%' }),
}

export const ColorPurple = {
  name: 'Colour: purple (special)',
  render: () => bar({ value: 70, progressClass: 'arc-progress-purple', label: 'MANA  70%' }),
}

// ─── Size variants ────────────────────────────────────────────────────────────

export const SizeSmall = {
  name: 'Size: small (12px)',
  render: () => bar({ value: 55, progressClass: 'arc-progress-cyan', size: 'sm' }),
}

export const SizeLarge = {
  name: 'Size: large (40px)',
  render: () => bar({ value: 75, progressClass: 'arc-progress-cyan', size: 'lg', label: 'LOADING  75%' }),
}

// ─── All variants at a glance ─────────────────────────────────────────────────

export const AllColors = {
  name: 'All colours at a glance',
  render: () => `
<div style="display:flex;flex-direction:column;gap:16px;padding:8px">
  ${bar({ value: 85, progressClass: 'arc-progress-cyan',   label: 'PRIMARY   85%' })}
  ${bar({ value: 70, progressClass: 'arc-progress-green',  label: 'SUCCESS   70%' })}
  ${bar({ value: 45, progressClass: 'arc-progress-yellow', label: 'WARNING   45%' })}
  ${bar({ value: 20, progressClass: 'arc-progress-red',    label: 'DANGER    20%' })}
  ${bar({ value: 60, progressClass: 'arc-progress-purple', label: 'SPECIAL   60%' })}
  ${bar({ indeterminate: true, progressClass: 'arc-progress-cyan', label: 'LOADING...' })}
</div>`,
}

// ─── In-game HUD simulation ───────────────────────────────────────────────────

export const GameHUD = {
  name: 'In-game HUD simulation',
  render: () => `
<div class="arc-panel arc-panel-cyan" style="padding:24px;max-width:400px">
  <div class="arc-panel-header">PLAYER 1</div>
  <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:12px">

    <div class="arc-progress-wrapper arc-progress-green">
      <span class="arc-progress-label">HP  78/100</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"
           aria-label="Health" style="--arc-progress:78%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

    <div class="arc-progress-wrapper arc-progress-yellow">
      <span class="arc-progress-label">MP  40/100</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
           aria-label="Magic" style="--arc-progress:40%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

    <div class="arc-progress-wrapper arc-progress-cyan">
      <span class="arc-progress-label">XP  620/1000</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"
           aria-label="Experience" style="--arc-progress:62%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

  </div>
</div>`,
}
