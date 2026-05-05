// src/stories/Button.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Button',
  argTypes: {
    label:    { control: 'text' },
    variant:  { control: { type: 'select' }, options: ['primary', 'ghost', 'danger'] },
    size:     { control: { type: 'select' }, options: ['sm', 'default', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    label:    'INSERT COIN',
    variant:  'primary',
    size:     'default',
    disabled: false,
  },
}

function renderBtn({ label, variant, size, disabled }) {
  const variantClass = `arc-btn-${variant}`
  const sizeClass    = size !== 'default' ? `arc-btn-${size}` : ''
  const disabledAttr = disabled ? 'disabled' : ''
  return `<button class="arc-btn ${variantClass} ${sizeClass}" ${disabledAttr}>${label}</button>`
}

/** @type { import('@storybook/html').StoryObj } */
export const Primary = {
  args: { variant: 'primary' },
  render: renderBtn,
}

export const Ghost = {
  args: { variant: 'ghost' },
  render: renderBtn,
}

export const Danger = {
  args: { variant: 'danger' },
  render: renderBtn,
}

export const Small = {
  args: { variant: 'primary', size: 'sm' },
  render: renderBtn,
}

export const Large = {
  args: { variant: 'primary', size: 'lg' },
  render: renderBtn,
}

export const Disabled = {
  args: { variant: 'primary', disabled: true },
  render: renderBtn,
}

export const AllVariants = {
  render: () => `
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;padding:2rem;">
      <button class="arc-btn arc-btn-primary arc-btn-sm">SM</button>
      <button class="arc-btn arc-btn-primary">PRIMARY</button>
      <button class="arc-btn arc-btn-primary arc-btn-lg">LG</button>
      <button class="arc-btn arc-btn-ghost">GHOST</button>
      <button class="arc-btn arc-btn-danger">DANGER</button>
      <button class="arc-btn arc-btn-primary" disabled>DISABLED</button>
    </div>
  `,
}
