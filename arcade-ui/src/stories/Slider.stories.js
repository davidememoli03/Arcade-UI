// src/stories/Slider.stories.js
//
// Il fill del track (WebKit) richiede che --arc-slider-value venga aggiornato
// via JS. Le story usano oninput inline per funzionare senza bundle completo.

const FILL_HANDLER = `
  this.style.setProperty(
    '--arc-slider-value',
    ((this.value - this.min) / (this.max - this.min) * 100) + '%'
  );
  var d = document.getElementById(this.dataset.arcSliderDisplay);
  if (d) d.textContent = this.value;
`.replace(/\s+/g, ' ').trim()

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Slider',
  argTypes: {
    label:   { control: 'text' },
    min:     { control: { type: 'number' } },
    max:     { control: { type: 'number' } },
    value:   { control: { type: 'number' } },
    variant: { control: { type: 'select' }, options: ['default', 'danger', 'success', 'yellow', 'purple'] },
    disabled: { control: 'boolean' },
    showTicks: { control: 'boolean', name: 'show ticks' },
  },
  args: {
    label:     'VOLUME',
    min:       0,
    max:       100,
    value:     75,
    variant:   'default',
    disabled:  false,
    showTicks: false,
  },
}

function variantClass(v) {
  return v !== 'default' ? `arc-slider-${v}` : ''
}

function pct(value, min, max) {
  return `${((value - min) / (max - min)) * 100}%`
}

function renderFull({ label, min, max, value, variant, disabled, showTicks }) {
  const vc       = variantClass(variant)
  const classes  = ['arc-slider', vc].filter(Boolean).join(' ')
  const disAttr  = disabled ? 'disabled' : ''
  const fillPct  = pct(value, min, max)
  const displayId = `slider-display-${Math.random().toString(36).slice(2, 7)}`

  const ticks = showTicks
    ? `<div class="arc-slider-ticks" aria-hidden="true">
         <span>${min}</span>
         <span>${Math.round((min + max) / 4)}</span>
         <span>${Math.round((min + max) / 2)}</span>
         <span>${Math.round(((min + max) * 3) / 4)}</span>
         <span>${max}</span>
       </div>`
    : ''

  return `
    <div class="arc-slider-wrapper ${vc}" style="max-width:360px;">
      <div class="arc-slider-header">
        <span class="arc-slider-label">${label}</span>
        <span class="arc-slider-display" id="${displayId}">${value}</span>
      </div>
      <input
        type="range"
        class="${classes}"
        min="${min}" max="${max}" value="${value}"
        ${disAttr}
        style="--arc-slider-value: ${fillPct}"
        data-arc-slider-display="${displayId}"
        oninput="${FILL_HANDLER}">
      ${ticks}
    </div>
  `
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: renderFull,
}

export const Danger = {
  args: { label: 'DIFFICULTY', value: 80, variant: 'danger' },
  render: renderFull,
}

export const Success = {
  args: { label: 'HEALTH', value: 45, variant: 'success' },
  render: renderFull,
}

export const Yellow = {
  args: { label: 'COINS', value: 60, variant: 'yellow' },
  render: renderFull,
}

export const WithTicks = {
  name: 'With Tick Marks',
  args: { label: 'BRIGHTNESS', value: 50, showTicks: true },
  render: renderFull,
}

export const Disabled = {
  args: { label: 'LOCKED', value: 30, disabled: true },
  render: renderFull,
}

export const VolumePanelDemo = {
  name: 'Volume Panel Demo',
  render: () => `
    <div style="padding: 2rem;">
      <div class="arc-panel arc-panel-cyan" style="max-width: 380px;">
        <p class="arc-panel-title" style="font-size: 12px; margin-bottom: 1.5rem;">AUDIO SETTINGS</p>

        <div style="display: flex; flex-direction: column; gap: 24px;">

          <!-- Master volume -->
          <div class="arc-slider-wrapper" id="wrapper-master">
            <div class="arc-slider-header">
              <span class="arc-slider-label">MASTER</span>
              <span class="arc-slider-display" id="val-master">80</span>
            </div>
            <input type="range" class="arc-slider" min="0" max="100" value="80"
                   style="--arc-slider-value: 80%"
                   data-arc-slider-display="val-master"
                   oninput="${FILL_HANDLER}">
            <div class="arc-slider-ticks" aria-hidden="true">
              <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
            </div>
          </div>

          <!-- Music volume (danger) -->
          <div class="arc-slider-wrapper arc-slider-success">
            <div class="arc-slider-header">
              <span class="arc-slider-label">MUSIC</span>
              <span class="arc-slider-display" id="val-music">60</span>
            </div>
            <input type="range" class="arc-slider arc-slider-success" min="0" max="100" value="60"
                   style="--arc-slider-value: 60%"
                   data-arc-slider-display="val-music"
                   oninput="${FILL_HANDLER}">
          </div>

          <!-- SFX volume (yellow) -->
          <div class="arc-slider-wrapper arc-slider-yellow">
            <div class="arc-slider-header">
              <span class="arc-slider-label">SFX</span>
              <span class="arc-slider-display" id="val-sfx">90</span>
            </div>
            <input type="range" class="arc-slider arc-slider-yellow" min="0" max="100" value="90"
                   style="--arc-slider-value: 90%"
                   data-arc-slider-display="val-sfx"
                   oninput="${FILL_HANDLER}">
          </div>

          <!-- Difficulty (danger) -->
          <div class="arc-slider-wrapper arc-slider-danger">
            <div class="arc-slider-header">
              <span class="arc-slider-label">DIFFICULTY</span>
              <span class="arc-slider-display" id="val-diff">3</span>
            </div>
            <input type="range" class="arc-slider arc-slider-danger" min="1" max="5" value="3"
                   style="--arc-slider-value: 50%"
                   data-arc-slider-display="val-diff"
                   oninput="${FILL_HANDLER}">
            <div class="arc-slider-ticks" aria-hidden="true">
              <span>EASY</span><span>NORMAL</span><span>HARD</span><span>INSANE</span><span>HELL</span>
            </div>
          </div>

          <!-- Disabled -->
          <div class="arc-slider-wrapper">
            <div class="arc-slider-header">
              <span class="arc-slider-label">ONLINE (LOCKED)</span>
              <span class="arc-slider-display">50</span>
            </div>
            <input type="range" class="arc-slider" min="0" max="100" value="50"
                   style="--arc-slider-value: 50%" disabled>
          </div>

        </div>
      </div>
    </div>
  `,
}

export const AllVariants = {
  name: 'All Variants',
  render: () => {
    const variants = [
      { label: 'CYAN (default)', cls: '',                    value: 70  },
      { label: 'DANGER (red)',   cls: 'arc-slider-danger',   value: 85  },
      { label: 'SUCCESS (green)',cls: 'arc-slider-success',  value: 40  },
      { label: 'YELLOW',         cls: 'arc-slider-yellow',   value: 55  },
      { label: 'PURPLE',         cls: 'arc-slider-purple',   value: 65  },
    ]

    const rows = variants.map(({ label, cls, value }) => {
      const id   = `av-${label.replace(/\s/g, '').toLowerCase()}`
      const fill = `${value}%`
      return `
        <div class="arc-slider-wrapper ${cls}">
          <div class="arc-slider-header">
            <span class="arc-slider-label">${label}</span>
            <span class="arc-slider-display" id="${id}">${value}</span>
          </div>
          <input type="range" class="arc-slider ${cls}" min="0" max="100" value="${value}"
                 style="--arc-slider-value: ${fill}"
                 data-arc-slider-display="${id}"
                 oninput="${FILL_HANDLER}">
        </div>
      `
    }).join('')

    return `<div style="padding:2rem;display:flex;flex-direction:column;gap:24px;max-width:400px;">${rows}</div>`
  },
}
