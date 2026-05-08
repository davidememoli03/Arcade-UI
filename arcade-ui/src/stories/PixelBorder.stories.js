// src/stories/PixelBorder.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Effects/Pixel border',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Bordi 8-bit a strati con `box-shadow` multiplo. Colore da `--arc-border-color`. ' +
          'Combinare `.arc-border-pixel-glow` con le varianti base sullo stesso elemento.',
      },
    },
  },
}

function sampleBox(cls, title) {
  return `
<div class="${cls}" style="padding:var(--arc-space-4);background:var(--arc-color-bg-panel);max-width:280px;margin-bottom:16px;">
  <p class="arc-text-caption" style="margin:0 0 8px;color:var(--arc-color-text-muted);">${title}</p>
  <p class="arc-text-body" style="margin:0;color:var(--arc-color-text);">PIXEL FRAME · 1UP</p>
</div>`
}

export const Showcase = {
  name: 'All variants',
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start;">
  ${sampleBox('arc-border-pixel', '.arc-border-pixel')}
  ${sampleBox('arc-border-pixel-thick', '.arc-border-pixel-thick')}
  ${sampleBox('arc-border-pixel-inset', '.arc-border-pixel-inset')}
  ${sampleBox('arc-border-pixel-chamfer', '.arc-border-pixel-chamfer')}
  ${sampleBox('arc-border-pixel arc-border-pixel-glow', '.arc-border-pixel + .arc-border-pixel-glow')}
  ${sampleBox('arc-border-pixel-thick arc-border-pixel-glow', '.arc-border-pixel-thick + glow')}
</div>`,
}

export const CustomColor = {
  name: 'Custom --arc-border-color',
  render: () => `
<div
  class="arc-border-pixel arc-border-pixel-glow"
  style="--arc-border-color:var(--arc-color-yellow);padding:var(--arc-space-4);background:var(--arc-color-bg-panel);max-width:320px;">
  <p class="arc-text-h3" style="margin:0 0 8px;color:var(--arc-color-yellow);text-transform:uppercase;">Insert coin</p>
  <p class="arc-text-body" style="margin:0;color:var(--arc-color-text-muted);">Bordo giallo da token semantico.</p>
</div>`,
}

export const WithPanel = {
  name: 'Combined with panel',
  render: () => `
<div class="arc-border-pixel arc-border-pixel-glow" style="background:var(--arc-color-bg-panel);max-width:400px;">
  <div class="arc-panel arc-panel-cyan" style="margin:0;border:none;box-shadow:none;outline:none;">
    <div class="arc-panel-header">HUD</div>
    <div class="arc-panel-body arc-text-body">Pannello interno senza bordo proprio: il telaio 8-bit è sul wrapper.</div>
    <div class="arc-panel-footer">
      <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">OK</button>
    </div>
  </div>
</div>`,
}

export const WithButtonRow = {
  name: 'Combined with buttons',
  render: () => `
<div class="arc-border-pixel-inset" style="padding:var(--arc-space-3);background:var(--arc-color-bg-alt);display:inline-flex;gap:12px;flex-wrap:wrap;">
  <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">START</button>
  <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm">OPTIONS</button>
  <button type="button" class="arc-btn arc-btn-danger arc-btn-sm">EXIT</button>
</div>`,
}
