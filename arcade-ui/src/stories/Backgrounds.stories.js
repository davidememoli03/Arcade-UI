// src/stories/Backgrounds.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Effects/Background patterns',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Utility `.arc-bg-*` con soli `background-*`: niente pseudo-elementi, ' +
          'componibili con `.arc-panel` (che usa `::before`/`::after` per gli angoli). ' +
          'Intensità: `--arc-bg-opacity`. Separati da `.arc-crt-global` / `.arc-crt-screen`.',
      },
    },
  },
}

function previewTile(cls, label, subtitle) {
  return `
<div
  class="${cls}"
  style="width:min(100%,280px);min-height:140px;border:var(--arc-border-md) solid var(--arc-color-cyan);padding:var(--arc-space-3);box-sizing:border-box;background-color:var(--arc-color-bg-panel);">
  <p style="margin:0 0 6px;font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-cyan);text-transform:uppercase;letter-spacing:.12em;">
    ${label}
  </p>
  <p style="margin:0;font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);">
    ${subtitle}
  </p>
</div>`
}

/** @type { import('@storybook/html').StoryObj } */
export const AllPatterns = {
  name: 'Tutti i pattern',
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:20px;align-items:stretch;">
  ${previewTile('arc-bg-grid', '.arc-bg-grid', 'Griglia neon arcade overhead')}
  ${previewTile('arc-bg-dots', '.arc-bg-dots', 'LED matrix dots')}
  ${previewTile('arc-bg-scanlines', '.arc-bg-scanlines', 'Scanlines standalone')}
  ${previewTile('arc-bg-noise', '.arc-bg-noise', 'Grana SVG feTurbulence')}
  ${previewTile('arc-bg-circuit', '.arc-bg-circuit', 'Circuito stilizzato')}
  ${previewTile('arc-bg-stars', '.arc-bg-stars', 'Starfield CSS · drift lento')}
</div>`,
}

export const WithPanel = {
  name: 'Combinato con .arc-panel',
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start;">
  <div class="arc-panel arc-panel-cyan arc-bg-grid" style="max-width:320px;">
    <div class="arc-panel-header">HUD GRID</div>
    <div class="arc-panel-body">Panel + griglia: stessi angoli decorativi.</div>
  </div>
  <div class="arc-panel arc-panel-yellow arc-bg-stars" style="max-width:320px;">
    <div class="arc-panel-header">SPACE</div>
    <div class="arc-panel-body">Stelle su pannello giallo.</div>
  </div>
</div>`,
}

export const OpacityTokens = {
  name: '--arc-bg-opacity',
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:20px;">
  <div class="arc-bg-grid" style="--arc-bg-opacity:0.12;width:240px;min-height:120px;border:2px solid var(--arc-color-cyan);padding:var(--arc-space-3);background-color:var(--arc-color-bg-panel);box-sizing:border-box;">
    <span style="font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-cyan);">GRID leggera (0.12)</span>
  </div>
  <div class="arc-bg-grid" style="--arc-bg-opacity:0.55;width:240px;min-height:120px;border:2px solid var(--arc-color-cyan);padding:var(--arc-space-3);background-color:var(--arc-color-bg-panel);box-sizing:border-box;">
    <span style="font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-cyan);">GRID forte (0.55)</span>
  </div>
</div>`,
}
