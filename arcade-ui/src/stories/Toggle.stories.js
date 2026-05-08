// src/stories/Toggle.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Toggle',
  argTypes: {
    label:      { control: 'text' },
    checked:    { control: 'boolean' },
    disabled:   { control: 'boolean' },
    labelLeft:  { control: 'boolean', name: 'label left' },
  },
  args: {
    label:     'SOUND FX',
    checked:   false,
    disabled:  false,
    labelLeft: false,
  },
}

function renderToggle({ label, checked, disabled, labelLeft }) {
  const modifiers = [
    'arc-toggle',
    labelLeft ? 'arc-toggle--label-left' : '',
  ].filter(Boolean).join(' ')

  const checkedAttr  = checked  ? 'checked'  : ''
  const disabledAttr = disabled ? 'disabled' : ''

  return `
    <label class="${modifiers}">
      <input type="checkbox" class="arc-toggle__input" ${checkedAttr} ${disabledAttr}>
      <span class="arc-toggle__switch" aria-hidden="true"></span>
      <span class="arc-toggle__label">${label}</span>
    </label>
  `
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: renderToggle,
}

export const On = {
  args: { checked: true, label: 'MUSIC' },
  render: renderToggle,
}

export const Off = {
  args: { checked: false, label: 'MUSIC' },
  render: renderToggle,
}

export const LabelLeft = {
  name: 'Label Left',
  args: { checked: true, label: 'SCREEN FX', labelLeft: true },
  render: renderToggle,
}

export const Disabled = {
  args: { checked: false, disabled: true, label: 'LOCKED' },
  render: renderToggle,
}

export const DisabledOn = {
  name: 'Disabled (On)',
  args: { checked: true, disabled: true, label: 'LOCKED' },
  render: renderToggle,
}

export const StaticClasses = {
  name: 'Static Classes (--on / --off)',
  render: () => `
    <div style="display:flex;flex-direction:column;gap:20px;padding:2rem;">
      <p style="font-family:var(--arc-font-pixel);font-size:10px;color:var(--arc-color-text-muted);margin:0 0 8px;">
        Stato controllato via classe CSS (nessun input nativo)
      </p>

      <!-- .arc-toggle--on -->
      <label class="arc-toggle arc-toggle--on">
        <input type="checkbox" class="arc-toggle__input">
        <span class="arc-toggle__switch" aria-hidden="true"></span>
        <span class="arc-toggle__label">NEON ON</span>
      </label>

      <!-- .arc-toggle--off esplicito -->
      <label class="arc-toggle arc-toggle--off">
        <input type="checkbox" class="arc-toggle__input" checked>
        <span class="arc-toggle__switch" aria-hidden="true"></span>
        <span class="arc-toggle__label">FORCED OFF</span>
      </label>
    </div>
  `,
}

export const AllStates = {
  name: 'All States',
  render: () => `
    <div style="display:flex;flex-direction:column;gap:24px;padding:2rem;">

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle__input">
        <span class="arc-toggle__switch" aria-hidden="true"></span>
        <span class="arc-toggle__label">OFF (default)</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle__input" checked>
        <span class="arc-toggle__switch" aria-hidden="true"></span>
        <span class="arc-toggle__label">ON (checked)</span>
      </label>

      <label class="arc-toggle arc-toggle--label-left">
        <input type="checkbox" class="arc-toggle__input" checked>
        <span class="arc-toggle__switch" aria-hidden="true"></span>
        <span class="arc-toggle__label">LABEL LEFT</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle__input" disabled>
        <span class="arc-toggle__switch" aria-hidden="true"></span>
        <span class="arc-toggle__label">DISABLED OFF</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle__input" checked disabled>
        <span class="arc-toggle__switch" aria-hidden="true"></span>
        <span class="arc-toggle__label">DISABLED ON</span>
      </label>

    </div>
  `,
}

export const FormExample = {
  name: 'Form Example',
  render: () => `
    <div style="padding:2rem;">
      <div class="arc-panel arc-panel-cyan" style="max-width:320px;">
        <p class="arc-panel-title" style="font-size:12px;margin-bottom:1.5rem;">OPTIONS</p>
        <div style="display:flex;flex-direction:column;gap:16px;">

          <label class="arc-toggle arc-toggle--label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle__input" checked>
            <span class="arc-toggle__switch" aria-hidden="true"></span>
            <span class="arc-toggle__label">MUSIC</span>
          </label>

          <label class="arc-toggle arc-toggle--label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle__input" checked>
            <span class="arc-toggle__switch" aria-hidden="true"></span>
            <span class="arc-toggle__label">SFX</span>
          </label>

          <label class="arc-toggle arc-toggle--label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle__input">
            <span class="arc-toggle__switch" aria-hidden="true"></span>
            <span class="arc-toggle__label">SCANLINES</span>
          </label>

          <label class="arc-toggle arc-toggle--label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle__input" disabled>
            <span class="arc-toggle__switch" aria-hidden="true"></span>
            <span class="arc-toggle__label">ONLINE</span>
          </label>

        </div>
      </div>
    </div>
  `,
}
