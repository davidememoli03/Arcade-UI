// src/stories/TextEffects.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Effects/Text Effects',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Utility tipografiche neon avanzate. Token principali: `--arc-text-neon-color`, ' +
          '`--arc-text-gradient-start`, `--arc-text-gradient-end`. Complementari a `.arc-glow-*`.',
      },
    },
  },
}

const pixelFont = 'font-family:var(--arc-font-pixel);'

/** @type { import('@storybook/html').StoryObj } */
export const Showcase = {
  name: 'Showcase',
  render: () => `
<div style="padding:var(--arc-space-4);display:flex;flex-direction:column;gap:2rem;max-width:720px;">
  <div>
    <p style="margin:0 0 .5rem;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;">.arc-text-neon</p>
    <span class="arc-text-neon" style="${pixelFont}font-size:2rem;letter-spacing:.08em;">NEON BURST</span>
  </div>
  <div>
    <p style="margin:0 0 .5rem;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;">.arc-text-gradient</p>
    <span class="arc-text-gradient" style="${pixelFont}font-size:2rem;">ARCADE GRADIENT</span>
  </div>
  <div style="background:var(--arc-color-bg-panel);padding:1rem;">
    <p style="margin:0 0 .5rem;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;">.arc-text-outline</p>
    <span class="arc-text-outline" style="${pixelFont}font-size:2rem;--arc-text-outline-width:2px;">OUTLINE</span>
  </div>
  <div>
    <p style="margin:0 0 .5rem;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;">.arc-text-glitch</p>
    <span class="arc-text-glitch" style="${pixelFont}font-size:2rem;">DATA LOSS</span>
  </div>
  <div>
    <p style="margin:0 0 .5rem;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;">.arc-text-shadow-long</p>
    <span class="arc-text-shadow-long" style="${pixelFont}font-size:2rem;">LONG SHADOW</span>
  </div>
  <div>
    <p style="margin:0 0 .5rem;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;">.arc-text-chroma</p>
    <span class="arc-text-chroma" style="${pixelFont}font-size:2rem;">CHROMA AB</span>
  </div>
  <div>
    <p style="margin:0 0 .5rem;font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;">.arc-text-pixel-shadow</p>
    <span class="arc-text-pixel-shadow" style="${pixelFont}font-size:2rem;color:var(--arc-color-yellow);">PIXEL SHADOW</span>
  </div>
</div>`,
}

export const CustomTokens = {
  name: 'Token personalizzati',
  render: () => `
<div style="padding:var(--arc-space-4);display:flex;flex-direction:column;gap:1.75rem;">
  <span
    class="arc-text-neon"
    style="${pixelFont}font-size:1.75rem;--arc-text-neon-color:var(--arc-color-pink);">
    PINK NEON
  </span>
  <span
    class="arc-text-gradient"
    style="${pixelFont}font-size:1.75rem;--arc-text-gradient-start:var(--arc-color-green);--arc-text-gradient-end:var(--arc-color-yellow);">
    GREEN → GOLD
  </span>
  <span
    class="arc-text-outline"
    style="${pixelFont}font-size:1.75rem;--arc-text-outline-color:var(--arc-color-red);--arc-text-outline-fill:#150008;">
    RED RING
  </span>
</div>`,
}
