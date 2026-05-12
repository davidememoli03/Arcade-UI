// src/stories/Avatar.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  decorators: [
    story => `<div style="padding:2rem;background:var(--arc-color-bg);min-height:100vh;">${story()}</div>`,
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Avatar con cornice pixel doppio anello, LED stato e glow pulsante su `.arc-avatar-active`. ' +
          'Struttura: `.arc-avatar` > [`.arc-avatar-status`] + `.arc-avatar-inner` > `img` o `.arc-avatar-placeholder`.',
      },
    },
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const Sizes = {
  name: 'Dimensioni',
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-end;">
  <figure style="margin:0;text-align:center;">
    <div class="arc-avatar arc-avatar-sm">
      <div class="arc-avatar-inner"><span class="arc-avatar-placeholder">A</span></div>
    </div>
    <figcaption style="margin-top:8px;font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);">32px sm</figcaption>
  </figure>
  <figure style="margin:0;text-align:center;">
    <div class="arc-avatar">
      <div class="arc-avatar-inner"><span class="arc-avatar-placeholder">DM</span></div>
    </div>
    <figcaption style="margin-top:8px;font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);">64px default</figcaption>
  </figure>
  <figure style="margin:0;text-align:center;">
    <div class="arc-avatar arc-avatar-lg">
      <div class="arc-avatar-inner"><span class="arc-avatar-placeholder">PX</span></div>
    </div>
    <figcaption style="margin-top:8px;font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);">128px lg</figcaption>
  </figure>
  <figure style="margin:0;text-align:center;">
    <div class="arc-avatar arc-avatar-xl arc-avatar-frame-neon">
      <div class="arc-avatar-inner"><span class="arc-avatar-placeholder">8B</span></div>
    </div>
    <figcaption style="margin-top:8px;font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);">256px xl</figcaption>
  </figure>
</div>`,
}

export const FramesAndStatus = {
  name: 'Frame rank + LED',
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start;">
  <div class="arc-avatar arc-avatar-lg arc-avatar-frame-gold">
    <span class="arc-avatar-status arc-avatar-status-online" aria-label="Online" title="Online"></span>
    <div class="arc-avatar-inner">
      <img src="https://picsum.photos/seed/arcgold/128/128" width="128" height="128" alt="Player 1" loading="lazy" />
    </div>
  </div>
  <div class="arc-avatar arc-avatar-lg arc-avatar-frame-silver">
    <span class="arc-avatar-status arc-avatar-status-online" aria-label="Online"></span>
    <div class="arc-avatar-inner">
      <img src="https://picsum.photos/seed/arcsilver/128/128" width="128" height="128" alt="Player 2" loading="lazy" />
    </div>
  </div>
  <div class="arc-avatar arc-avatar-lg arc-avatar-frame-bronze">
    <span class="arc-avatar-status arc-avatar-status-offline" aria-label="Offline"></span>
    <div class="arc-avatar-inner">
      <img src="https://picsum.photos/seed/arcbronze/128/128" width="128" height="128" alt="Player 3" loading="lazy" />
    </div>
  </div>
  <div class="arc-avatar arc-avatar-lg">
    <span class="arc-avatar-status arc-avatar-status-offline"></span>
    <div class="arc-avatar-inner">
      <span class="arc-avatar-placeholder">?</span>
    </div>
  </div>
</div>`,
}

export const CharacterSelectGrid = {
  name: 'Character select grid',
  render: () => `
<div class="arc-panel arc-panel-cyan" style="max-width:920px;background:var(--arc-color-bg-panel);">
  <div class="arc-panel-header" style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
    <span>PILOT SELECT</span>
    <span class="arc-badge arc-badge-yellow">CREDITS ∞</span>
  </div>
  <div class="arc-panel-body" style="padding-top:var(--arc-space-2);">
    <p class="arc-text-body" style="margin:0 0 var(--arc-space-3);color:var(--arc-color-text-muted);">
      Un pilota è selezionato (glow pulsante). LED verde = online.
    </p>
    <div role="list" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--arc-space-3);justify-items:center;">
      <button type="button" style="all:unset;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px;box-sizing:border-box;">
        <span class="arc-avatar arc-avatar-lg arc-avatar-frame-gold arc-avatar-active">
          <span class="arc-avatar-status arc-avatar-status-online" aria-hidden="true"></span>
          <div class="arc-avatar-inner">
            <img src="https://picsum.photos/seed/p1/128/128" width="128" height="128" alt="" loading="lazy" />
          </div>
        </span>
        <span style="font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-yellow);letter-spacing:.1em;">ACE · P1</span>
      </button>
      <button type="button" style="all:unset;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px;box-sizing:border-box;">
        <span class="arc-avatar arc-avatar-lg arc-avatar-frame-silver">
          <span class="arc-avatar-status arc-avatar-status-online" aria-hidden="true"></span>
          <div class="arc-avatar-inner">
            <img src="https://picsum.photos/seed/p2/128/128" width="128" height="128" alt="" loading="lazy" />
          </div>
        </span>
        <span style="font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">BLITZ · P2</span>
      </button>
      <button type="button" style="all:unset;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px;box-sizing:border-box;">
        <span class="arc-avatar arc-avatar-lg arc-avatar-frame-bronze">
          <span class="arc-avatar-status arc-avatar-status-offline" aria-hidden="true"></span>
          <div class="arc-avatar-inner">
            <span class="arc-avatar-placeholder">NV</span>
          </div>
        </span>
        <span style="font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">NOVA · CPU</span>
      </button>
      <button type="button" style="all:unset;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px;box-sizing:border-box;">
        <span class="arc-avatar arc-avatar-lg">
          <span class="arc-avatar-status arc-avatar-status-offline" aria-hidden="true"></span>
          <div class="arc-avatar-inner">
            <img src="https://picsum.photos/seed/p4/128/128" width="128" height="128" alt="" loading="lazy" />
          </div>
        </span>
        <span style="font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">CIPHER</span>
      </button>
    </div>
  </div>
  <div class="arc-panel-footer">
    <button type="button" class="arc-btn arc-btn-primary">LOCK IN</button>
    <button type="button" class="arc-btn arc-btn-ghost">BACK</button>
  </div>
</div>`,
}
