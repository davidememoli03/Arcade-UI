// src/stories/Colors.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Tokens/Colors',
}

const tokens = [
  { name: '--arc-color-bg',          label: 'BG',          group: 'Sfondi' },
  { name: '--arc-color-bg-alt',      label: 'BG Alt',      group: 'Sfondi' },
  { name: '--arc-color-bg-panel',    label: 'BG Panel',    group: 'Sfondi' },
  { name: '--arc-color-cyan',        label: 'Cyan',        group: 'Neon' },
  { name: '--arc-color-red',         label: 'Red',         group: 'Neon' },
  { name: '--arc-color-yellow',      label: 'Yellow',      group: 'Neon' },
  { name: '--arc-color-green',       label: 'Green',       group: 'Neon' },
  { name: '--arc-color-purple',      label: 'Purple',      group: 'Neon' },
  { name: '--arc-color-pink',        label: 'Pink',        group: 'Neon' },
  { name: '--arc-color-text',        label: 'Text',        group: 'Testo' },
  { name: '--arc-color-text-muted',  label: 'Text Muted',  group: 'Testo' },
  { name: '--arc-color-text-accent', label: 'Text Accent', group: 'Testo' },
  { name: '--arc-color-disabled',    label: 'Disabled',    group: 'Stato' },
]

function swatchRow(token) {
  return `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:.6rem;font-family:monospace;">
      <div style="
        width:3rem;height:3rem;
        background:var(${token.name});
        border:1px solid #333;
        border-radius:4px;
        box-shadow:0 0 8px var(${token.name});
        flex-shrink:0;
      "></div>
      <div>
        <div style="font-size:.85rem;color:#0ff;">${token.name}</div>
        <div style="font-size:.75rem;color:#077;">${token.label} · ${token.group}</div>
      </div>
    </div>
  `
}

/** @type { import('@storybook/html').StoryObj } */
export const Palette = {
  render: () => `
    <div style="padding:2rem;">
      ${tokens.map(swatchRow).join('')}
    </div>
  `,
}
